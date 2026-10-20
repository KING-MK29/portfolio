import React, { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import {
  Layers,
  Box,
  Compass,
  RotateCw,
  Download,
  Eye,
  Sliders,
  Sparkles,
  Maximize2
} from 'lucide-react';
import { createModularBoyCharacter } from './Boy3DModelBuilder';
import BlueprintSheetModal from './BlueprintSheetModal';

export default function Boy3DCanvas() {
  const containerRef = useRef(null);

  // Character Modes: 'assembled' | 'blueprint' | 'tpose'
  const [characterMode, setCharacterMode] = useState('assembled');
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [isWavingFast, setIsWavingFast] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [isBlueprintModalOpen, setIsBlueprintModalOpen] = useState(false);

  // References for render loop interactions
  const sceneRef = useRef(null);
  const charModelRef = useRef(null);
  const controlsRef = useRef(null);

  // Export 3D Model to .GLB
  const handleExportGLB = useCallback(() => {
    if (!charModelRef.current) return;
    setIsExporting(true);

    const exporter = new GLTFExporter();
    exporter.parse(
      charModelRef.current.rootGroup,
      (gltf) => {
        const blob = new Blob([gltf], { type: 'model/gltf-binary' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = 'cartoon_boy_modular_character.glb';
        link.click();
        URL.revokeObjectURL(link.href);
        setIsExporting(false);
      },
      (error) => {
        console.error('Error exporting GLB:', error);
        setIsExporting(false);
      },
      { binary: true }
    );
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene Setup ---
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const width = container.clientWidth || 380;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(36, width / height, 0.1, 100);
    camera.position.set(0, 0.2, 4.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // --- OrbitControls for 360° Inspection ---
    const controls = new OrbitControls(camera, renderer.domElement);
    controlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2.0;
    controls.maxDistance = 8.5;
    controls.maxPolarAngle = Math.PI / 2 + 0.1; // Don't flip below floor
    controls.target.set(0, 0.15, 0);
    controls.autoRotate = autoRotate;
    controls.autoRotateSpeed = 2.2;

    // --- Build Modular 3D Cartoon Boy Model ---
    const charModel = createModularBoyCharacter();
    charModelRef.current = charModel;
    scene.add(charModel.rootGroup);

    // --- Studio Ambient & Key Lighting ---
    const ambientLight = new THREE.AmbientLight(0xFFFFFF, 1.35);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xFFFFFF, 1.2);
    keyLight.position.set(3.5, 4.5, 3.5);
    keyLight.castShadow = true;
    keyLight.shadow.mapSize.width = 1024;
    keyLight.shadow.mapSize.height = 1024;
    keyLight.shadow.bias = -0.001;
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(0xA4C8E8, 0.65);
    fillLight.position.set(-3.5, 2.0, -2.0);
    scene.add(fillLight);

    // Acid Lime cyber rim light (Reduced by 5%)
    const rimLight = new THREE.PointLight(0xD4FF00, 1.9, 7);
    rimLight.position.set(0, 2.8, -2.2);
    scene.add(rimLight);

    // --- Contact Shadow for Assembled Live Mode ---
    const shadowGeo = new THREE.PlaneGeometry(1.6, 0.65);
    const shadowCanvas = document.createElement('canvas');
    shadowCanvas.width = 256;
    shadowCanvas.height = 128;
    const sCtx = shadowCanvas.getContext('2d');
    const radGrad = sCtx.createRadialGradient(128, 64, 8, 128, 64, 115);
    radGrad.addColorStop(0, 'rgba(14, 16, 19, 0.75)');
    radGrad.addColorStop(0.5, 'rgba(14, 16, 19, 0.35)');
    radGrad.addColorStop(1, 'rgba(14, 16, 19, 0)');
    sCtx.fillStyle = radGrad;
    sCtx.fillRect(0, 0, 256, 128);

    const shadowTex = new THREE.CanvasTexture(shadowCanvas);
    const shadowMat = new THREE.MeshBasicMaterial({
      map: shadowTex,
      transparent: true,
      opacity: 0.65,
      depthWrite: false
    });

    const shadowMesh = new THREE.Mesh(shadowGeo, shadowMat);
    shadowMesh.rotation.x = -Math.PI / 2;
    shadowMesh.position.set(0, -1.35, 0);
    scene.add(shadowMesh);

    // --- Blueprint CAD Grid Floor (Activates in Blueprint Mode) ---
    const gridHelper = new THREE.GridHelper(4.0, 16, 0xD4FF00, 0x2A2E38);
    gridHelper.position.set(0, -1.35, 0);
    gridHelper.material.transparent = true;
    gridHelper.material.opacity = 0.0;
    scene.add(gridHelper);

    // --- Mouse Tracking State ---
    const mouse = { x: 0, y: 0, targetX: 0, targetY: 0 };

    const onPointerMove = (e) => {
      const rect = container.getBoundingClientRect();
      const clientX = e.clientX ?? (e.touches && e.touches[0].clientX);
      const clientY = e.clientY ?? (e.touches && e.touches[0].clientY);

      if (clientX !== undefined && clientY !== undefined) {
        mouse.targetX = ((clientX - rect.left) / rect.width) * 2 - 1;
        mouse.targetY = -(((clientY - rect.top) / rect.height) * 2 - 1);
      }
    };

    const onPointerLeave = () => {
      mouse.targetX = 0;
      mouse.targetY = 0;
    };

    window.addEventListener('pointermove', onPointerMove);
    container.addEventListener('pointerleave', onPointerLeave);

    // Click on boy triggers fast friendly wave
    let greetingTimer;
    const onClick = () => {
      setIsWavingFast(true);
      clearTimeout(greetingTimer);
      greetingTimer = setTimeout(() => {
        setIsWavingFast(false);
      }, 2200);
    };

    container.addEventListener('click', onClick);

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    // --- Render Animation Loop ---
    let clock = new THREE.Clock();
    let animFrameId;

    const animate = () => {
      animFrameId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Smooth mouse look interpolation
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      // Update Controls
      controls.autoRotate = autoRotate;
      controls.update();

      // Update Modular Character
      charModel.update(time, mouse, characterMode, 0, isWavingFast);

      // Fade blueprint grid in/out
      const targetGridOpacity = characterMode === 'blueprint' ? 0.75 : 0.0;
      gridHelper.material.opacity += (targetGridOpacity - gridHelper.material.opacity) * 0.08;

      // Fade floor shadow in/out
      const targetShadowOpacity = characterMode === 'assembled' ? 0.65 : 0.15;
      shadowMat.opacity += (targetShadowOpacity - shadowMat.opacity) * 0.08;

      // Toggle wireframe mode across materials
      Object.values(charModel.materials).forEach(mat => {
        mat.wireframe = isWireframe;
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      container.removeEventListener('pointerleave', onPointerLeave);
      container.removeEventListener('click', onClick);
      window.removeEventListener('resize', handleResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      shadowTex.dispose();
    };
  }, [characterMode, isWireframe, autoRotate, isWavingFast]);

  return (
    <div className={`modular-boy-3d-wrapper ${characterMode === 'blueprint' ? 'blueprint-active' : ''}`}>
      {/* 3D WebGL Canvas */}
      <div ref={containerRef} className="boy-seamless-canvas" />

      {/* Blueprint HUD Mode Selector & Engineering Controls */}
      <div className="blueprint-hud-toolbar">
        {/* Mode Selector Tabs */}
        <div className="hud-tabs-group font-mono">
          <button
            type="button"
            className={`hud-mode-tab ${characterMode === 'assembled' ? 'active' : ''}`}
            onClick={() => setCharacterMode('assembled')}
            title="Live Assembled Character with natural breathing and hand waving"
          >
            <Sparkles size={13} />
            <span>Assembled</span>
          </button>

          <button
            type="button"
            className={`hud-mode-tab ${characterMode === 'blueprint' ? 'active' : ''}`}
            onClick={() => setCharacterMode('blueprint')}
            title="Modular Blueprint CAD explosion showing all separated body components"
          >
            <Layers size={13} />
            <span>Modular CAD</span>
          </button>

          <button
            type="button"
            className={`hud-mode-tab ${characterMode === 'tpose' ? 'active' : ''}`}
            onClick={() => setCharacterMode('tpose')}
            title="T-Pose Proportion Guide"
          >
            <Box size={13} />
            <span>T-Pose</span>
          </button>
        </div>

        {/* Action Controls: Wireframe, Turntable & Download GLB */}
        <div className="hud-actions-group">
          <button
            type="button"
            className={`hud-action-btn font-mono ${isWireframe ? 'active' : ''}`}
            onClick={() => setIsWireframe(!isWireframe)}
            title="Toggle Wireframe CAD Mesh"
          >
            <Eye size={13} />
            <span>Wireframe</span>
          </button>

          <button
            type="button"
            className={`hud-action-btn font-mono ${autoRotate ? 'active' : ''}`}
            onClick={() => setAutoRotate(!autoRotate)}
            title="Toggle 360° Turntable Rotation"
          >
            <RotateCw size={13} />
            <span>Turntable</span>
          </button>

          <button
            type="button"
            className="hud-action-btn hud-export-btn font-mono"
            onClick={handleExportGLB}
            disabled={isExporting}
            title="Export full modular 3D character as .GLB for Blender / Maya / Three.js"
          >
            <Download size={13} />
            <span>{isExporting ? 'Exporting...' : 'Get .GLB'}</span>
          </button>

          <button
            type="button"
            className="hud-action-btn hud-studio-btn font-mono"
            onClick={() => setIsBlueprintModalOpen(true)}
            title="Open Fullscreen 3D Blueprint CAD Studio (Assembled, Modular & T-Pose sheet)"
          >
            <Maximize2 size={13} />
            <span>Blueprint Studio</span>
          </button>
        </div>
      </div>

      {/* Blueprint CAD Overlay Annotations (Shown in Blueprint Mode) */}
      {characterMode === 'blueprint' && (
        <div className="blueprint-overlay-annotations font-mono">
          <div className="cad-annotation tag-head">
            <span className="cad-dot" />
            <span className="cad-text">HEAD ASSEMBLY • [HAIR, FACE, NECK]</span>
          </div>

          <div className="cad-annotation tag-torso">
            <span className="cad-dot" />
            <span className="cad-text">TORSO & T-SHIRT • [CREWNECK, POCKET]</span>
          </div>

          <div className="cad-annotation tag-arms">
            <span className="cad-dot" />
            <span className="cad-text">ARM JOINTS • [SHOULDER, ELBOW, HAND x2]</span>
          </div>

          <div className="cad-annotation tag-pelvis">
            <span className="cad-dot" />
            <span className="cad-text">PELVIS & JEANS • [DENIM, BELT LOOP]</span>
          </div>

          <div className="cad-annotation tag-legs">
            <span className="cad-dot" />
            <span className="cad-text">LEG COMPONENTS • [THIGH, KNEE, ROLLED CUFF]</span>
          </div>

          <div className="cad-annotation tag-footwear">
            <span className="cad-dot" />
            <span className="cad-text">FOOTWEAR • [RED SNEAKER, GUM SOLE x2]</span>
          </div>

          <div className="cad-grid-watermark">
            <span>MODULAR CAD BLUEPRINT • SCALE 1:1</span>
          </div>
        </div>
      )}

      {/* Greeting Bubble for Assembled Mode */}
      {characterMode === 'assembled' && (
        <div className={`boy-floating-speech ${isWavingFast ? 'excited' : ''}`}>
          <span className="speech-wave">👋</span>
          <span className="speech-text font-mono">Hi, I'm Mukesh! (Drag to orbit 360°)</span>
        </div>
      )}

      {/* Fullscreen Blueprint Sheet CAD Studio Modal */}
      <BlueprintSheetModal
        isOpen={isBlueprintModalOpen}
        onClose={() => setIsBlueprintModalOpen(false)}
      />
    </div>
  );
}
