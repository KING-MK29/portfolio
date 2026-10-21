import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import {
  X,
  Layers,
  Box,
  Eye,
  RotateCw,
  Download,
  Sparkles,
  Maximize2,
  ExternalLink,
  Palette,
  Check
} from 'lucide-react';
import { createModularBoyCharacter } from './Boy3DModelBuilder';
import { getAssetUrl } from '../utils/assetHelper';

export default function BlueprintSheetModal({ isOpen, onClose }) {
  const centerCanvasRef = useRef(null);
  const leftCanvasRef = useRef(null);
  const rightCanvasRef = useRef(null);

  // States
  const [viewType, setViewType] = useState('3d_studio'); // '3d_studio' | '4k_render'
  const [centerMode, setCenterMode] = useState('blueprint'); // 'blueprint' | 'assembled' | 'tpose'
  const [isWireframe, setIsWireframe] = useState(false);
  const [autoRotate, setAutoRotate] = useState(false);
  const [selectedPart, setSelectedPart] = useState('all');
  const [downloadSuccess, setDownloadSuccess] = useState('');

  // Refs for center 3D scene
  const centerCharRef = useRef(null);
  const centerControlsRef = useRef(null);

  // Center Scene Setup
  useEffect(() => {
    if (!isOpen) return;
    const container = centerCanvasRef.current;
    if (!container) return;

    const width = container.clientWidth || 550;
    const height = container.clientHeight || 550;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.4);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    centerControlsRef.current = controls;
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.minDistance = 2.0;
    controls.maxDistance = 8.0;
    controls.target.set(0, 0.1, 0);

    const char = createModularBoyCharacter();
    centerCharRef.current = char;
    scene.add(char.rootGroup);

    // CAD Blueprint Floor Grid
    const grid = new THREE.GridHelper(8, 24, 0xD4FF00, 0x2A2E38);
    grid.position.y = -1.55;
    grid.material.opacity = 0.45;
    grid.material.transparent = true;
    scene.add(grid);

    // Studio Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight1.position.set(3.5, 4.5, 3.5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x7fb8f5, 0.7);
    dirLight2.position.set(-3.5, 2.0, -2.0);
    scene.add(dirLight2);

    let animationFrameId;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      char.update(elapsed, { x: 0, y: 0 }, centerMode, 0, false);
      controls.autoRotate = autoRotate;
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
    };
  }, [isOpen]);

  // Update Center Mode / Wireframe / Selected Part
  useEffect(() => {
    if (!isOpen) return;
    if (centerCharRef.current) {
      // Wireframe toggle
      centerCharRef.current.rootGroup.traverse(child => {
        if (child.isMesh && child.material) {
          if (Array.isArray(child.material)) {
            child.material.forEach(m => (m.wireframe = isWireframe));
          } else {
            child.material.wireframe = isWireframe;
          }
        }
      });

      // Part isolation
      const parts = centerCharRef.current.modularParts;
      if (parts) {
        Object.keys(parts).forEach(key => {
          if (selectedPart === 'all') {
            parts[key].visible = true;
          } else {
            const matches =
              (selectedPart === 'head' && key === 'head') ||
              (selectedPart === 'torso' && key === 'torso') ||
              (selectedPart === 'arms' && (key === 'leftArm' || key === 'rightArm')) ||
              (selectedPart === 'pelvis' && key === 'pelvis') ||
              (selectedPart === 'legs' && (key === 'leftLeg' || key === 'rightLeg')) ||
              (selectedPart === 'footwear' && (key === 'leftShoe' || key === 'rightShoe'));
            parts[key].visible = matches;
          }
        });
      }
    }
  }, [isOpen, isWireframe, selectedPart]);

  // Left Assembled Scene Setup
  useEffect(() => {
    if (!isOpen) return;
    const container = leftCanvasRef.current;
    if (!container) return;

    const width = container.clientWidth || 240;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.target.set(0, 0.1, 0);

    const char = createModularBoyCharacter();
    char.applyPose(char.poses.assembled);
    scene.add(char.rootGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    let frameId;
    const clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();
      char.update(elapsed, { x: 0, y: 0 }, 'assembled', 0, false);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, [isOpen]);

  // Right T-Pose Scene Setup
  useEffect(() => {
    if (!isOpen) return;
    const container = rightCanvasRef.current;
    if (!container) return;

    const width = container.clientWidth || 240;
    const height = container.clientHeight || 420;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 100);
    camera.position.set(0, 0.15, 4.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.innerHTML = '';
    container.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = false;
    controls.target.set(0, 0.1, 0);

    const char = createModularBoyCharacter();
    char.applyPose(char.poses.tpose);
    scene.add(char.rootGroup);

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.4);
    scene.add(ambientLight);
    const keyLight = new THREE.DirectionalLight(0xffffff, 1.2);
    keyLight.position.set(3, 4, 3);
    scene.add(keyLight);

    let frameId;
    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(frameId);
      renderer.dispose();
    };
  }, [isOpen]);

  // Download GLB handler
  const handleExportGLB = () => {
    if (!centerCharRef.current) return;
    const exporter = new GLTFExporter();
    exporter.parse(
      centerCharRef.current.rootGroup,
      gltf => {
        const blob = new Blob([gltf], { type: 'model/gltf-binary' });
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = `cartoon_boy_${centerMode}.glb`;
        link.click();
        URL.revokeObjectURL(link.href);
        setDownloadSuccess('GLB Exported!');
        setTimeout(() => setDownloadSuccess(''), 2500);
      },
      err => console.error(err),
      { binary: true }
    );
  };

  if (!isOpen) return null;

  return createPortal(
    <div className="blueprint-modal-backdrop" onClick={onClose}>
      <div className="blueprint-modal-window" onClick={e => e.stopPropagation()}>
        {/* Modal Top Header Bar */}
        <div className="blueprint-modal-header">
          <div className="header-left">
            <span className="cad-badge font-mono">CAD SPECIFICATION • SCALE 1:1</span>
            <h2 className="blueprint-modal-title">3D CARTOON BOY MODULAR BLUEPRINT SHEET</h2>
          </div>

          <div className="header-center">
            <div className="header-view-switch font-mono">
              <button
                type="button"
                className={`view-switch-btn ${viewType === '3d_studio' ? 'active' : ''}`}
                onClick={() => setViewType('3d_studio')}
              >
                <Sparkles size={13} />
                <span>3D WebGL Studio</span>
              </button>
              <button
                type="button"
                className={`view-switch-btn ${viewType === '4k_render' ? 'active' : ''}`}
                onClick={() => setViewType('4k_render')}
              >
                <Eye size={13} />
                <span>4K Blueprint Render</span>
              </button>
            </div>
          </div>

          <div className="header-actions">
            {downloadSuccess && (
              <span className="download-toast font-mono">
                <Check size={14} /> {downloadSuccess}
              </span>
            )}
            <button
              type="button"
              className="blueprint-close-btn"
              onClick={onClose}
              title="Close Blueprint Studio"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* 4K Static CAD Blueprint Render View */}
        {viewType === '4k_render' && (
          <div className="blueprint-render-view-wrap">
            <div className="cad-corner top-left" />
            <div className="cad-corner top-right" />
            <div className="cad-corner bottom-left" />
            <div className="cad-corner bottom-right" />

            <div className="render-image-container">
              <img
                src={getAssetUrl('/assets/modular_boy_blueprint_render.jpg')}
                alt="3D Cartoon Boy Modular Blueprint Sheet 4K"
                className="blueprint-4k-img"
              />
            </div>
          </div>
        )}

        {/* Master 3-Panel 3D WebGL Blueprint Grid */}
        {viewType === '3d_studio' && (
          <div className="blueprint-sheet-body">
          {/* LEFT PANEL: Assembled Reference */}
          <div className="blueprint-panel panel-assembled">
            <div className="panel-inner-frame">
              {/* Corner framing brackets */}
              <div className="cad-corner top-left" />
              <div className="cad-corner top-right" />
              <div className="cad-corner bottom-left" />
              <div className="cad-corner bottom-right" />

              <div className="panel-title-tag font-mono">ASSEMBLED REFERENCE</div>

              {/* 3D Assembled Canvas */}
              <div ref={leftCanvasRef} className="panel-3d-canvas" />

              {/* Texture & Material Swatches Palette */}
              <div className="blueprint-swatches-box font-mono">
                <div className="swatch-item">
                  <span className="swatch-color" style={{ background: '#3E2316' }} />
                  <span className="swatch-label">Hair Brown</span>
                </div>
                <div className="swatch-item">
                  <span className="swatch-color" style={{ background: '#F5F6F8' }} />
                  <span className="swatch-label">White Cotton</span>
                </div>
                <div className="swatch-item">
                  <span className="swatch-color" style={{ background: '#2B4C7E' }} />
                  <span className="swatch-label">Denim Jeans</span>
                </div>
                <div className="swatch-item">
                  <span className="swatch-color" style={{ background: '#D4FF00' }} />
                  <span className="swatch-label">Acid Lime</span>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER PANEL: Modular 3D CAD Blueprint (Exploded Components) */}
          <div className="blueprint-panel panel-modular-cad">
            <div className="panel-inner-frame">
              <div className="cad-corner top-left" />
              <div className="cad-corner top-right" />
              <div className="cad-corner bottom-left" />
              <div className="cad-corner bottom-right" />

              <div className="panel-title-tag font-mono">
                MODULAR 3D CAD COMPONENTS • EXPLODED LAYOUT
              </div>

              {/* Center 3D Interactive Canvas */}
              <div ref={centerCanvasRef} className="panel-3d-canvas center-canvas" />

              {/* Floating Technical CAD Callouts */}
              <div className="blueprint-sheet-labels font-mono">
                <div className="cad-label-item tag-head">
                  <span className="dot" />
                  <span>HEAD ASSEMBLY [HAIR, FACE, NECK]</span>
                </div>
                <div className="cad-label-item tag-torso">
                  <span className="dot" />
                  <span>TORSO & T-SHIRT [CREWNECK, POCKET]</span>
                </div>
                <div className="cad-label-item tag-arms">
                  <span className="dot" />
                  <span>ARM COMPONENTS [SHOULDER, ELBOW, HAND x2]</span>
                </div>
                <div className="cad-label-item tag-pelvis">
                  <span className="dot" />
                  <span>PELVIS & PANTS [DENIM, BELT LOOP]</span>
                </div>
                <div className="cad-label-item tag-legs">
                  <span className="dot" />
                  <span>LEG COMPONENTS [THIGH, KNEE, ROLLED CUFF]</span>
                </div>
                <div className="cad-label-item tag-footwear">
                  <span className="dot" />
                  <span>FOOTWEAR [RED SNEAKER, GUM RUBBER SOLE x2]</span>
                </div>
              </div>

              {/* Component Isolation Filter Bar */}
              <div className="component-filter-bar font-mono">
                <span className="filter-label">ISOLATE PART:</span>
                {[
                  { id: 'all', label: 'All' },
                  { id: 'head', label: 'Head' },
                  { id: 'torso', label: 'Torso' },
                  { id: 'arms', label: 'Arms' },
                  { id: 'pelvis', label: 'Pelvis' },
                  { id: 'legs', label: 'Legs' },
                  { id: 'footwear', label: 'Sneakers' }
                ].map(item => (
                  <button
                    key={item.id}
                    type="button"
                    className={`filter-btn ${selectedPart === item.id ? 'active' : ''}`}
                    onClick={() => setSelectedPart(item.id)}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL: T-Pose Proportion Guide */}
          <div className="blueprint-panel panel-tpose">
            <div className="panel-inner-frame">
              <div className="cad-corner top-left" />
              <div className="cad-corner top-right" />
              <div className="cad-corner bottom-left" />
              <div className="cad-corner bottom-right" />

              <div className="panel-title-tag font-mono">T-POSE PROPORTION GUIDE</div>

              {/* 3D T-Pose Canvas */}
              <div ref={rightCanvasRef} className="panel-3d-canvas" />

              {/* Proportion Dimension Markers */}
              <div className="proportion-markers font-mono">
                <div className="marker-line head-line">
                  <span className="marker-tag">1/4 Head</span>
                </div>
                <div className="marker-line chest-line">
                  <span className="marker-tag">2/4 Torso</span>
                </div>
                <div className="marker-line waist-line">
                  <span className="marker-tag">3/4 Pelvis</span>
                </div>
                <div className="marker-line shoe-line">
                  <span className="marker-tag">4/4 Feet</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

        {/* Modal Bottom Engineering Toolbar */}
        <div className="blueprint-modal-toolbar font-mono">
          <div className="toolbar-left">
            <button
              type="button"
              className={`toolbar-btn ${centerMode === 'blueprint' ? 'active' : ''}`}
              onClick={() => {
                setCenterMode('blueprint');
                if (centerCharRef.current) centerCharRef.current.applyPose(centerCharRef.current.poses.blueprint);
              }}
            >
              <Layers size={14} />
              <span>Exploded Blueprint</span>
            </button>

            <button
              type="button"
              className={`toolbar-btn ${centerMode === 'assembled' ? 'active' : ''}`}
              onClick={() => {
                setCenterMode('assembled');
                if (centerCharRef.current) centerCharRef.current.applyPose(centerCharRef.current.poses.assembled);
              }}
            >
              <Sparkles size={14} />
              <span>Assembled Live</span>
            </button>

            <button
              type="button"
              className={`toolbar-btn ${centerMode === 'tpose' ? 'active' : ''}`}
              onClick={() => {
                setCenterMode('tpose');
                if (centerCharRef.current) centerCharRef.current.applyPose(centerCharRef.current.poses.tpose);
              }}
            >
              <Box size={14} />
              <span>T-Pose Guide</span>
            </button>

            <button
              type="button"
              className={`toolbar-btn ${isWireframe ? 'active' : ''}`}
              onClick={() => setIsWireframe(!isWireframe)}
            >
              <Eye size={14} />
              <span>Wireframe</span>
            </button>

            <button
              type="button"
              className={`toolbar-btn ${autoRotate ? 'active' : ''}`}
              onClick={() => setAutoRotate(!autoRotate)}
            >
              <RotateCw size={14} />
              <span>Turntable</span>
            </button>
          </div>

          <div className="toolbar-right">
            <span className="export-title">3D EXPORTS:</span>

            <a
              href={getAssetUrl('/models/cartoon_boy_modular_blueprint.obj')}
              download="cartoon_boy_modular_blueprint.obj"
              className="export-link-btn"
              title="Download modular exploded 3D model in universal OBJ format"
            >
              <Download size={13} />
              <span>Modular .OBJ</span>
            </a>

            <a
              href={getAssetUrl('/models/cartoon_boy_assembled.obj')}
              download="cartoon_boy_assembled.obj"
              className="export-link-btn"
              title="Download assembled 3D model in universal OBJ format"
            >
              <Download size={13} />
              <span>Assembled .OBJ</span>
            </a>

            <a
              href={getAssetUrl('/models/cartoon_boy_tpose.obj')}
              download="cartoon_boy_tpose.obj"
              className="export-link-btn"
              title="Download rigging-ready T-pose model in OBJ format"
            >
              <Download size={13} />
              <span>T-Pose .OBJ</span>
            </a>

            <button
              type="button"
              className="export-link-btn highlight-btn"
              onClick={handleExportGLB}
              title="Export current 3D view directly as binary .GLB"
            >
              <Download size={13} />
              <span>Export .GLB</span>
            </button>

            <a
              href={getAssetUrl('/assets/modular_boy_blueprint_render.jpg')}
              download="cartoon_boy_modular_blueprint_4k.jpg"
              className="export-link-btn"
              title="Download Ultra-HD 4K character blueprint render (.JPG)"
            >
              <Download size={13} />
              <span>Blueprint .JPG</span>
            </a>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
