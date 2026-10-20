import fs from 'fs';
import path from 'path';
import * as THREE from 'three';
import { OBJExporter } from 'three/addons/exporters/OBJExporter.js';
import { createModularBoyCharacter } from '../src/components/Boy3DModelBuilder.js';

console.log('Generating 3D Cartoon Boy modular models...');

const char = createModularBoyCharacter();
const exporter = new OBJExporter();

// Ensure output dir exists
const outputDir = path.resolve('public/models');
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// 1. Assembled Character Model
char.applyPose(char.poses.assembled);
char.rootGroup.updateMatrixWorld(true);
const assembledObj = exporter.parse(char.rootGroup);
fs.writeFileSync(path.join(outputDir, 'cartoon_boy_assembled.obj'), assembledObj, 'utf-8');
console.log('Saved: public/models/cartoon_boy_assembled.obj');

// 2. Modular Blueprint Exploded Model
char.applyPose(char.poses.blueprint);
char.rootGroup.updateMatrixWorld(true);
const blueprintObj = exporter.parse(char.rootGroup);
fs.writeFileSync(path.join(outputDir, 'cartoon_boy_modular_blueprint.obj'), blueprintObj, 'utf-8');
console.log('Saved: public/models/cartoon_boy_modular_blueprint.obj');

// 3. T-Pose Proportion Model (For 3D Rigging & Weight Painting)
char.applyPose(char.poses.tpose);
char.rootGroup.updateMatrixWorld(true);
const tposeObj = exporter.parse(char.rootGroup);
fs.writeFileSync(path.join(outputDir, 'cartoon_boy_tpose.obj'), tposeObj, 'utf-8');
console.log('Saved: public/models/cartoon_boy_tpose.obj');

console.log('All 3D character models successfully exported!');
