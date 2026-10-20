import React from 'react';
import './HexagonBackground.css';
import HexagonCircuit from './HexagonCircuit';

/**
 * HexagonBackground Component
 * Renders the user's new 3D matte black hexagon wallpaper with autonomous,
 * real-time moving tech blue light pulses traveling along the hexagon seams.
 */
export default function HexagonBackground() {
  return (
    <div className="hex-background-container" aria-hidden="true">
      {/* 1. Deep Void Foundation */}
      <div className="hex-base-void" />

      {/* 2. Autonomous Real-Time Moving Tech Blue Light along Hexagon Seams */}
      <HexagonCircuit />

      {/* 3. Vignette Darkening for Maximum Content Readability */}
      <div className="hex-vignette-overlay" />
    </div>
  );
}
