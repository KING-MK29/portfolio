import * as THREE from 'three';

/**
 * Creates the complete modular 3D cartoon boy character model.
 * Matches the reference blueprint image:
 * - Head Assembly (Hair, Face, Eyes, Smile, Ears, Neck)
 * - Torso & White T-Shirt (Crewneck collar, sleeves, pocket)
 * - Arm Components (Shoulder, Elbow, Cartoon Hand x2)
 * - Pelvis & Pants (Denim Blue Jeans, Leather Belt, Brass Buckle)
 * - Leg Components (Thighs, Knees, Shins, Rolled Cuffs)
 * - Footwear (Red low-top sneakers, white toe caps, white laces, tan gum soles)
 */
export function createModularBoyCharacter() {
  const rootGroup = new THREE.Group();

  // =========================================================================
  // 1. PBR MATERIALS PALETTE
  // =========================================================================
  const skinMat = new THREE.MeshStandardMaterial({
    color: 0xF7C498,
    roughness: 0.52,
    metalness: 0.02,
    name: 'Skin_Mat'
  });

  const hairMat = new THREE.MeshStandardMaterial({
    color: 0x3B2212,
    roughness: 0.62,
    metalness: 0.05,
    name: 'Hair_Brown_Mat'
  });

  const eyeWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xFFFFFF,
    roughness: 0.1,
    metalness: 0.0,
    name: 'EyeWhite_Mat'
  });

  const irisMat = new THREE.MeshStandardMaterial({
    color: 0x4A2511, // Warm chocolate brown
    roughness: 0.2,
    name: 'Iris_Brown_Mat'
  });

  const pupilMat = new THREE.MeshBasicMaterial({
    color: 0x0A0A0A,
    name: 'Pupil_Mat'
  });

  const specularMat = new THREE.MeshBasicMaterial({
    color: 0xFFFFFF,
    name: 'EyeSpecular_Mat'
  });

  const eyebrowMat = new THREE.MeshStandardMaterial({
    color: 0x341E0F,
    roughness: 0.7,
    name: 'Eyebrow_Mat'
  });

  const lipMat = new THREE.MeshStandardMaterial({
    color: 0xD97762,
    roughness: 0.5,
    name: 'Lips_Mat'
  });

  const tshirtMat = new THREE.MeshStandardMaterial({
    color: 0xF8F9FA, // Clean cotton white
    roughness: 0.72,
    metalness: 0.0,
    name: 'Tshirt_White_Mat'
  });

  const tshirtTrimMat = new THREE.MeshStandardMaterial({
    color: 0xEAECEF,
    roughness: 0.65,
    name: 'Tshirt_Trim_Mat'
  });

  const denimMat = new THREE.MeshStandardMaterial({
    color: 0x274B7F, // Classic denim blue
    roughness: 0.68,
    metalness: 0.02,
    name: 'Denim_Jeans_Mat'
  });

  const denimCuffMat = new THREE.MeshStandardMaterial({
    color: 0xA6B9D0, // Lighter folded cuff underside
    roughness: 0.75,
    name: 'Denim_Cuff_Mat'
  });

  const beltMat = new THREE.MeshStandardMaterial({
    color: 0x331E12, // Dark brown leather belt
    roughness: 0.6,
    name: 'Belt_Leather_Mat'
  });

  const buckleMat = new THREE.MeshStandardMaterial({
    color: 0xE2E8F0, // Polished silver buckle
    roughness: 0.22,
    metalness: 0.95,
    name: 'Buckle_Silver_Mat'
  });

  const sneakerRedMat = new THREE.MeshStandardMaterial({
    color: 0xD4FF00, // Vibrant cyber acid lime sneakers
    roughness: 0.45,
    name: 'Sneaker_AcidLime_Mat'
  });

  const sneakerWhiteMat = new THREE.MeshStandardMaterial({
    color: 0xF4F6F8, // Clean silver-white rubber
    roughness: 0.32,
    name: 'Sneaker_WhiteRubber_Mat'
  });

  const sneakerSoleMat = new THREE.MeshStandardMaterial({
    color: 0x16181D, // Charcoal rubber outsole
    roughness: 0.8,
    name: 'Sneaker_CharcoalSole_Mat'
  });

  // =========================================================================
  // 2. MODULAR GROUPS INITIALIZATION
  // =========================================================================
  const headGroup = new THREE.Group();
  headGroup.name = 'Modular_Head_Assembly';

  const torsoGroup = new THREE.Group();
  torsoGroup.name = 'Modular_Torso_Tshirt';

  const leftArmGroup = new THREE.Group();
  leftArmGroup.name = 'Modular_Left_Arm';

  const rightArmGroup = new THREE.Group();
  rightArmGroup.name = 'Modular_Right_Arm';

  const pelvisGroup = new THREE.Group();
  pelvisGroup.name = 'Modular_Pelvis_Pants';

  const leftLegGroup = new THREE.Group();
  leftLegGroup.name = 'Modular_Left_Leg';

  const rightLegGroup = new THREE.Group();
  rightLegGroup.name = 'Modular_Right_Leg';

  const leftShoeGroup = new THREE.Group();
  leftShoeGroup.name = 'Modular_Left_Shoe';

  const rightShoeGroup = new THREE.Group();
  rightShoeGroup.name = 'Modular_Right_Shoe';

  // =========================================================================
  // 3. BUILD HEAD ASSEMBLY
  // =========================================================================
  // Head Base Mesh
  const headGeo = new THREE.SphereGeometry(0.42, 32, 28);
  headGeo.scale(1.0, 1.08, 1.02);
  const headMesh = new THREE.Mesh(headGeo, skinMat);
  headMesh.castShadow = true;
  headGroup.add(headMesh);

  // Cheeks (Subtle cute fullness)
  const cheekGeo = new THREE.SphereGeometry(0.16, 16, 16);
  cheekGeo.scale(1.0, 0.8, 0.7);
  const leftCheek = new THREE.Mesh(cheekGeo, skinMat);
  leftCheek.position.set(-0.25, -0.06, 0.28);
  headGroup.add(leftCheek);

  const rightCheek = leftCheek.clone();
  rightCheek.position.x = 0.25;
  headGroup.add(rightCheek);

  // Nose
  const noseGeo = new THREE.SphereGeometry(0.048, 16, 16);
  noseGeo.scale(1.0, 0.85, 1.15);
  const noseMesh = new THREE.Mesh(noseGeo, skinMat);
  noseMesh.position.set(0, -0.02, 0.42);
  headGroup.add(noseMesh);

  // Smile
  const smileGeo = new THREE.TorusGeometry(0.075, 0.016, 12, 24, Math.PI * 0.7);
  const smileMesh = new THREE.Mesh(smileGeo, lipMat);
  smileMesh.rotation.z = Math.PI * 1.15;
  smileMesh.position.set(0, -0.14, 0.38);
  headGroup.add(smileMesh);

  // Eyes Helper Function
  const createCartoonEye = (isLeft) => {
    const eyeContainer = new THREE.Group();
    const xMult = isLeft ? -1 : 1;

    // Sclera (White sphere)
    const scleraGeo = new THREE.SphereGeometry(0.095, 20, 20);
    scleraGeo.scale(1.0, 1.15, 0.65);
    const sclera = new THREE.Mesh(scleraGeo, eyeWhiteMat);
    eyeContainer.add(sclera);

    // Iris (Warm chocolate brown)
    const irisGeo = new THREE.CircleGeometry(0.068, 24);
    const iris = new THREE.Mesh(irisGeo, irisMat);
    iris.position.set(0, 0, 0.062);
    eyeContainer.add(iris);

    // Pupil (Deep black)
    const pupilGeo = new THREE.CircleGeometry(0.038, 20);
    const pupil = new THREE.Mesh(pupilGeo, pupilMat);
    pupil.position.set(0, 0, 0.064);
    eyeContainer.add(pupil);

    // Primary Specular Catchlight
    const spec1Geo = new THREE.CircleGeometry(0.018, 16);
    const spec1 = new THREE.Mesh(spec1Geo, specularMat);
    spec1.position.set(-0.02 * xMult, 0.025, 0.066);
    eyeContainer.add(spec1);

    // Secondary Specular Catchlight
    const spec2Geo = new THREE.CircleGeometry(0.009, 12);
    const spec2 = new THREE.Mesh(spec2Geo, specularMat);
    spec2.position.set(0.02 * xMult, -0.02, 0.066);
    eyeContainer.add(spec2);

    // Eye placement
    eyeContainer.position.set(xMult * 0.17, 0.06, 0.355);
    eyeContainer.rotation.y = xMult * 0.16;
    return eyeContainer;
  };

  const leftEye = createCartoonEye(true);
  const rightEye = createCartoonEye(false);
  headGroup.add(leftEye);
  headGroup.add(rightEye);

  // Eyebrows
  const createEyebrow = (isLeft) => {
    const browGeo = new THREE.BoxGeometry(0.12, 0.026, 0.03);
    const brow = new THREE.Mesh(browGeo, eyebrowMat);
    const xMult = isLeft ? -1 : 1;
    brow.position.set(xMult * 0.175, 0.21, 0.375);
    brow.rotation.z = xMult * -0.14;
    brow.rotation.y = xMult * 0.15;
    return brow;
  };
  headGroup.add(createEyebrow(true));
  headGroup.add(createEyebrow(false));

  // Ears
  const createEar = (isLeft) => {
    const earContainer = new THREE.Group();
    const xMult = isLeft ? -1 : 1;

    const outerEarGeo = new THREE.CylinderGeometry(0.08, 0.06, 0.03, 16);
    outerEarGeo.rotateZ(Math.PI / 2);
    const outerEar = new THREE.Mesh(outerEarGeo, skinMat);
    earContainer.add(outerEar);

    earContainer.position.set(xMult * 0.43, 0.02, 0.0);
    earContainer.rotation.y = xMult * 0.2;
    return earContainer;
  };
  headGroup.add(createEar(true));
  headGroup.add(createEar(false));

  // Brown Hair Assembly (Main cap & layered cartoon tufts)
  const hairGroup = new THREE.Group();

  // Top/Back Volume Dome
  const hairDomeGeo = new THREE.SphereGeometry(0.44, 28, 24, 0, Math.PI * 2, 0, Math.PI * 0.65);
  hairDomeGeo.scale(1.05, 1.14, 1.06);
  const hairDome = new THREE.Mesh(hairDomeGeo, hairMat);
  hairDome.position.set(0, 0.06, -0.02);
  hairDome.castShadow = true;
  hairGroup.add(hairDome);

  // Front Swept Bangs (Layered tufts)
  const bangTufts = [
    { pos: [-0.15, 0.36, 0.34], rot: [0.3, 0.2, -0.2], scale: [0.16, 0.18, 0.14] },
    { pos: [0.02, 0.38, 0.36], rot: [0.35, -0.1, -0.1], scale: [0.18, 0.2, 0.15] },
    { pos: [0.18, 0.35, 0.33], rot: [0.25, -0.3, 0.15], scale: [0.16, 0.18, 0.13] },
    { pos: [-0.32, 0.18, 0.18], rot: [0.1, 0.3, -0.4], scale: [0.12, 0.22, 0.12] }, // Left sideburn
    { pos: [0.32, 0.18, 0.18], rot: [0.1, -0.3, 0.4], scale: [0.12, 0.22, 0.12] }  // Right sideburn
  ];

  bangTufts.forEach(t => {
    const tuftGeo = new THREE.SphereGeometry(1, 12, 12);
    tuftGeo.scale(t.scale[0], t.scale[1], t.scale[2]);
    const tuft = new THREE.Mesh(tuftGeo, hairMat);
    tuft.position.set(t.pos[0], t.pos[1], t.pos[2]);
    tuft.rotation.set(t.rot[0], t.rot[1], t.rot[2]);
    hairGroup.add(tuft);
  });

  headGroup.add(hairGroup);

  // Neck
  const neckGeo = new THREE.CylinderGeometry(0.14, 0.16, 0.22, 20);
  const neckMesh = new THREE.Mesh(neckGeo, skinMat);
  neckMesh.position.set(0, -0.36, 0.0);
  headGroup.add(neckMesh);

  // =========================================================================
  // 4. BUILD TORSO & WHITE T-SHIRT
  // =========================================================================
  // Main Shirt Body
  const shirtBodyGeo = new THREE.CylinderGeometry(0.36, 0.33, 0.76, 24);
  shirtBodyGeo.scale(1.0, 1.0, 0.82);
  const shirtMesh = new THREE.Mesh(shirtBodyGeo, tshirtMat);
  shirtMesh.castShadow = true;
  torsoGroup.add(shirtMesh);

  // Collar Ring (Crewneck)
  const collarGeo = new THREE.TorusGeometry(0.17, 0.024, 12, 28);
  collarGeo.rotateX(Math.PI / 2);
  const collarMesh = new THREE.Mesh(collarGeo, tshirtTrimMat);
  collarMesh.position.set(0, 0.38, 0.0);
  torsoGroup.add(collarMesh);

  // Left & Right Sleeves
  const createSleeve = (isLeft) => {
    const sleeveGeo = new THREE.CylinderGeometry(0.14, 0.13, 0.26, 20);
    const sleeve = new THREE.Mesh(sleeveGeo, tshirtMat);
    const xMult = isLeft ? -1 : 1;
    sleeve.position.set(xMult * 0.35, 0.25, 0.0);
    sleeve.rotation.z = xMult * 0.55;
    sleeve.rotation.x = 0.08;
    return sleeve;
  };
  torsoGroup.add(createSleeve(true));
  torsoGroup.add(createSleeve(false));

  // Chest Pocket Detail
  const pocketGeo = new THREE.BoxGeometry(0.09, 0.1, 0.015);
  const pocketMesh = new THREE.Mesh(pocketGeo, tshirtTrimMat);
  pocketMesh.position.set(0.15, 0.16, 0.28);
  pocketMesh.rotation.y = 0.1;
  torsoGroup.add(pocketMesh);

  // Bottom Hem
  const hemGeo = new THREE.TorusGeometry(0.33, 0.018, 8, 28);
  hemGeo.rotateX(Math.PI / 2);
  hemGeo.scale(1.0, 0.82, 1.0);
  const hemMesh = new THREE.Mesh(hemGeo, tshirtTrimMat);
  hemMesh.position.set(0, -0.38, 0.0);
  torsoGroup.add(hemMesh);

  // =========================================================================
  // 5. BUILD ARM COMPONENTS (SHOULDER, ELBOW, HAND)
  // =========================================================================
  const buildArm = (isLeft) => {
    const armGroup = new THREE.Group();
    const xMult = isLeft ? -1 : 1;

    // Shoulder Socket / Upper Arm
    const upperArmGeo = new THREE.CylinderGeometry(0.095, 0.085, 0.34, 16);
    const upperArm = new THREE.Mesh(upperArmGeo, skinMat);
    upperArm.position.set(0, -0.17, 0);
    upperArm.castShadow = true;
    armGroup.add(upperArm);

    // Elbow Joint
    const elbowGeo = new THREE.SphereGeometry(0.086, 16, 16);
    const elbow = new THREE.Mesh(elbowGeo, skinMat);
    elbow.position.set(0, -0.34, 0);
    armGroup.add(elbow);

    // Forearm
    const forearmGeo = new THREE.CylinderGeometry(0.084, 0.074, 0.32, 16);
    const forearm = new THREE.Mesh(forearmGeo, skinMat);
    forearm.position.set(0, -0.5, 0);
    forearm.castShadow = true;
    armGroup.add(forearm);

    // Hand Assembly (Palm & cartoon fingers)
    const handGroup = new THREE.Group();
    const palmGeo = new THREE.SphereGeometry(0.08, 16, 16);
    palmGeo.scale(1.0, 1.25, 0.65);
    const palm = new THREE.Mesh(palmGeo, skinMat);
    palm.castShadow = true;
    handGroup.add(palm);

    // Thumb
    const thumbGeo = new THREE.CylinderGeometry(0.024, 0.02, 0.08, 12);
    const thumb = new THREE.Mesh(thumbGeo, skinMat);
    thumb.position.set(xMult * 0.07, -0.02, 0.04);
    thumb.rotation.z = xMult * 0.65;
    handGroup.add(thumb);

    // 3 Curled Fingers
    for (let f = 0; f < 3; f++) {
      const fingerGeo = new THREE.CylinderGeometry(0.022, 0.018, 0.09, 10);
      const finger = new THREE.Mesh(fingerGeo, skinMat);
      finger.position.set((f - 1) * 0.038 * xMult, -0.09, 0.01);
      finger.rotation.x = 0.2;
      handGroup.add(finger);
    }

    handGroup.position.set(0, -0.7, 0);
    armGroup.add(handGroup);

    return { armGroup, handGroup, upperArm };
  };

  const leftArmData = buildArm(true);
  leftArmGroup.add(leftArmData.armGroup);

  const rightArmData = buildArm(false);
  rightArmGroup.add(rightArmData.armGroup);

  // =========================================================================
  // 6. BUILD PELVIS & BLUE JEANS
  // =========================================================================
  // Jeans Waist Block
  const pelvisGeo = new THREE.CylinderGeometry(0.33, 0.31, 0.28, 24);
  pelvisGeo.scale(1.0, 1.0, 0.82);
  const pelvisMesh = new THREE.Mesh(pelvisGeo, denimMat);
  pelvisMesh.castShadow = true;
  pelvisGroup.add(pelvisMesh);

  // Leather Belt
  const beltGeo = new THREE.CylinderGeometry(0.338, 0.338, 0.065, 24);
  beltGeo.scale(1.0, 1.0, 0.83);
  const beltMesh = new THREE.Mesh(beltGeo, beltMat);
  beltMesh.position.set(0, 0.1, 0);
  pelvisGroup.add(beltMesh);

  // Golden Belt Buckle
  const buckleGeo = new THREE.BoxGeometry(0.09, 0.065, 0.02);
  const buckleMesh = new THREE.Mesh(buckleGeo, buckleMat);
  buckleMesh.position.set(0, 0.1, 0.28);
  pelvisGroup.add(buckleMesh);

  // Belt Loops (3 Front loops)
  [-0.14, 0.14].forEach(xPos => {
    const loopGeo = new THREE.BoxGeometry(0.02, 0.07, 0.015);
    const loop = new THREE.Mesh(loopGeo, denimMat);
    loop.position.set(xPos, 0.1, 0.275);
    pelvisGroup.add(loop);
  });

  // =========================================================================
  // 7. BUILD LEG COMPONENTS (THIGH, KNEE, ANKLE, ROLLED CUFF)
  // =========================================================================
  const buildLeg = (isLeft) => {
    const legGroup = new THREE.Group();

    // Thigh
    const thighGeo = new THREE.CylinderGeometry(0.14, 0.125, 0.44, 20);
    const thigh = new THREE.Mesh(thighGeo, denimMat);
    thigh.position.set(0, -0.22, 0);
    thigh.castShadow = true;
    legGroup.add(thigh);

    // Knee
    const kneeGeo = new THREE.SphereGeometry(0.126, 16, 16);
    const knee = new THREE.Mesh(kneeGeo, denimMat);
    knee.position.set(0, -0.44, 0);
    legGroup.add(knee);

    // Lower Shin
    const shinGeo = new THREE.CylinderGeometry(0.124, 0.115, 0.42, 20);
    const shin = new THREE.Mesh(shinGeo, denimMat);
    shin.position.set(0, -0.65, 0);
    shin.castShadow = true;
    legGroup.add(shin);

    // Distinct Rolled Jeans Cuff (Just like in the blueprint image)
    const cuffGeo = new THREE.TorusGeometry(0.12, 0.026, 12, 24);
    cuffGeo.rotateX(Math.PI / 2);
    const cuff = new THREE.Mesh(cuffGeo, denimCuffMat);
    cuff.position.set(0, -0.85, 0);
    legGroup.add(cuff);

    // Ankle (Skin glimpse above shoe)
    const ankleGeo = new THREE.CylinderGeometry(0.075, 0.08, 0.1, 16);
    const ankle = new THREE.Mesh(ankleGeo, skinMat);
    ankle.position.set(0, -0.9, 0);
    legGroup.add(ankle);

    return legGroup;
  };

  leftLegGroup.add(buildLeg(true));
  rightLegGroup.add(buildLeg(false));

  // =========================================================================
  // 8. BUILD FOOTWEAR (RED SNEAKERS & WHITE DETAILS)
  // =========================================================================
  const buildSneaker = (isLeft) => {
    const shoeGroup = new THREE.Group();
    const xMult = isLeft ? -1 : 1;

    // Main Red Sneaker Body
    const bodyGeo = new THREE.BoxGeometry(0.18, 0.16, 0.36);
    const body = new THREE.Mesh(bodyGeo, sneakerRedMat);
    body.position.set(0, 0.08, 0.04);
    body.castShadow = true;
    shoeGroup.add(body);

    // White Rubber Toe Cap (Curved sphere front)
    const toeGeo = new THREE.SphereGeometry(0.11, 16, 16, 0, Math.PI * 2, 0, Math.PI * 0.5);
    toeGeo.scale(0.85, 0.85, 1.15);
    const toe = new THREE.Mesh(toeGeo, sneakerWhiteMat);
    toe.position.set(0, 0.07, 0.19);
    shoeGroup.add(toe);

    // White Rubber Midsole (Sole platform)
    const soleGeo = new THREE.BoxGeometry(0.2, 0.05, 0.44);
    const sole = new THREE.Mesh(soleGeo, sneakerWhiteMat);
    sole.position.set(0, 0.025, 0.06);
    shoeGroup.add(sole);

    // Tan Gum Bottom Tread
    const treadGeo = new THREE.BoxGeometry(0.19, 0.015, 0.43);
    const tread = new THREE.Mesh(treadGeo, sneakerSoleMat);
    tread.position.set(0, -0.005, 0.06);
    shoeGroup.add(tread);

    // White Laces (3 horizontal bars)
    for (let i = 0; i < 3; i++) {
      const laceGeo = new THREE.BoxGeometry(0.1, 0.016, 0.035);
      const lace = new THREE.Mesh(laceGeo, sneakerWhiteMat);
      lace.position.set(0, 0.165, 0.02 + i * 0.06);
      shoeGroup.add(lace);
    }

    // Gentle outward natural stance angle
    shoeGroup.rotation.y = xMult * 0.08;

    return shoeGroup;
  };

  leftShoeGroup.add(buildSneaker(true));
  rightShoeGroup.add(buildSneaker(false));

  // =========================================================================
  // 9. ADD ALL MODULAR GROUPS TO ROOT
  // =========================================================================
  rootGroup.add(headGroup);
  rootGroup.add(torsoGroup);
  rootGroup.add(leftArmGroup);
  rootGroup.add(rightArmGroup);
  rootGroup.add(pelvisGroup);
  rootGroup.add(leftLegGroup);
  rootGroup.add(rightLegGroup);
  rootGroup.add(leftShoeGroup);
  rootGroup.add(rightShoeGroup);

  // =========================================================================
  // 10. PRESET POSES CONFIGURATION
  // =========================================================================
  const poses = {
    // 1. ASSEMBLED (Live character stance)
    assembled: {
      head: { pos: [0, 1.14, 0], rot: [0, 0, 0] },
      torso: { pos: [0, 0.42, 0], rot: [0, 0, 0] },
      leftArm: { pos: [-0.44, 0.62, 0], rot: [0.08, 0, -0.15] },
      rightArm: { pos: [0.44, 0.62, 0], rot: [-0.1, 0, 0.15] },
      pelvis: { pos: [0, -0.05, 0], rot: [0, 0, 0] },
      leftLeg: { pos: [-0.19, -0.22, 0], rot: [0.03, 0, 0.04] },
      rightLeg: { pos: [0.19, -0.22, 0], rot: [-0.03, 0, -0.04] },
      leftShoe: { pos: [-0.21, -1.24, 0.02], rot: [0, 0.08, 0] },
      rightShoe: { pos: [0.21, -1.24, 0.02], rot: [0, -0.08, 0] }
    },

    // 2. BLUEPRINT EXPLODED (Modular CAD breakdown matching reference blueprint)
    blueprint: {
      head: { pos: [0, 1.58, 0], rot: [0, 0, 0] },
      torso: { pos: [0, 0.68, 0], rot: [0, 0, 0] },
      leftArm: { pos: [-1.22, 0.92, 0], rot: [0, 0, 0.28] },
      rightArm: { pos: [1.22, 0.92, 0], rot: [0, 0, -0.28] },
      pelvis: { pos: [0, -0.02, 0], rot: [0, 0, 0] },
      leftLeg: { pos: [-0.58, -0.75, 0], rot: [0, 0, 0.12] },
      rightLeg: { pos: [0.58, -0.75, 0], rot: [0, 0, -0.12] },
      leftShoe: { pos: [-1.02, -1.35, 0], rot: [0.35, 0.4, 0] },
      rightShoe: { pos: [1.02, -1.35, 0], rot: [0.35, -0.4, 0] }
    },

    // 3. T-POSE (Reference proportion guide matching right side of blueprint)
    tpose: {
      head: { pos: [0, 1.14, 0], rot: [0, 0, 0] },
      torso: { pos: [0, 0.42, 0], rot: [0, 0, 0] },
      leftArm: { pos: [-0.48, 0.64, 0], rot: [0, 0, Math.PI / 2] },
      rightArm: { pos: [0.48, 0.64, 0], rot: [0, 0, -Math.PI / 2] },
      pelvis: { pos: [0, -0.05, 0], rot: [0, 0, 0] },
      leftLeg: { pos: [-0.17, -0.22, 0], rot: [0, 0, 0] },
      rightLeg: { pos: [0.17, -0.22, 0], rot: [0, 0, 0] },
      leftShoe: { pos: [-0.17, -1.24, 0.02], rot: [0, 0, 0] },
      rightShoe: { pos: [0.17, -1.24, 0.02], rot: [0, 0, 0] }
    }
  };

  const modularParts = {
    head: headGroup,
    torso: torsoGroup,
    leftArm: leftArmGroup,
    rightArm: rightArmGroup,
    pelvis: pelvisGroup,
    leftLeg: leftLegGroup,
    rightLeg: rightLegGroup,
    leftShoe: leftShoeGroup,
    rightShoe: rightShoeGroup
  };

  // Set initial pose
  const applyPose = (poseData) => {
    Object.keys(poseData).forEach(key => {
      if (modularParts[key]) {
        const p = poseData[key];
        modularParts[key].position.set(p.pos[0], p.pos[1], p.pos[2]);
        modularParts[key].rotation.set(p.rot[0], p.rot[1], p.rot[2]);
      }
    });
  };

  applyPose(poses.assembled);

  // Helper to lerp vectors and euler
  const lerpPart = (part, targetP, factor) => {
    part.position.x += (targetP.pos[0] - part.position.x) * factor;
    part.position.y += (targetP.pos[1] - part.position.y) * factor;
    part.position.z += (targetP.pos[2] - part.position.z) * factor;

    part.rotation.x += (targetP.rot[0] - part.rotation.x) * factor;
    part.rotation.y += (targetP.rot[1] - part.rotation.y) * factor;
    part.rotation.z += (targetP.rot[2] - part.rotation.z) * factor;
  };

  // =========================================================================
  // 11. ANIMATION TICK & STATE UPDATER
  // =========================================================================
  const update = (elapsedTime, mouse, mode = 'assembled', explodeProgress = 0, isWavingFast = false) => {
    const targetPoseName = mode === 'blueprint' ? 'blueprint' : (mode === 'tpose' ? 'tpose' : 'assembled');
    const targetPose = poses[targetPoseName];

    // Smoothly interpolate parts toward target pose
    const lerpSpeed = 0.08;
    Object.keys(modularParts).forEach(key => {
      lerpPart(modularParts[key], targetPose[key], lerpSpeed);
    });

    // In ASSEMBLED live mode, apply organic breathing, mouse tracking, and hand wave
    if (mode === 'assembled') {
      const breath = Math.sin(elapsedTime * 2.2) * 0.015;
      torsoGroup.position.y = poses.assembled.torso.pos[1] + breath;
      headGroup.position.y = poses.assembled.head.pos[1] + breath * 1.25;

      // Mouse Look tracking on head
      headGroup.rotation.y = mouse.x * 0.35;
      headGroup.rotation.x = -mouse.y * 0.22;

      // Friendly wave on right arm
      const waveSpeed = isWavingFast ? 9.5 : 3.8;
      const waveAngle = Math.sin(elapsedTime * waveSpeed) * (isWavingFast ? 0.45 : 0.2);
      rightArmGroup.rotation.z = -0.55 + waveAngle;
      rightArmGroup.rotation.x = 0.35 + Math.cos(elapsedTime * waveSpeed) * 0.15;
      rightArmData.handGroup.rotation.z = Math.sin(elapsedTime * waveSpeed * 1.2) * 0.3;

      // Slight idle sway on left arm
      leftArmGroup.rotation.x = Math.sin(elapsedTime * 1.8) * 0.06;
    }
  };

  return {
    rootGroup,
    modularParts,
    poses,
    applyPose,
    update,
    materials: {
      skinMat,
      hairMat,
      tshirtMat,
      denimMat,
      sneakerRedMat,
      sneakerWhiteMat
    }
  };
}
