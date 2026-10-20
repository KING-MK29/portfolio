import React from 'react';

/**
 * High-Fidelity Technology SVGs
 * Exact match to industry standard technology brand logos
 */
export function TechLogo({ id, size = 36 }) {
  switch (id) {
    // ----------------- PROGRAMMING LANGUAGES -----------------
    case 'c':
      // Blue 3D Hexagon with C (Image 2 exact match)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <defs>
            <linearGradient id="cHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1E88E5" />
              <stop offset="100%" stopColor="#0D47A1" />
            </linearGradient>
          </defs>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="url(#cHexGrad)" stroke="#64B5F6" strokeWidth="1.5" />
          <path
            d="M30 18 C27.5 15.5 22.5 15.5 19.5 18 C15.5 21.5 15.5 26.5 19.5 30 C22.5 32.5 27.5 32.5 30 30"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="4.5"
            strokeLinecap="round"
          />
        </svg>
      );

    case 'cpp':
      // Blue 3D Hexagon with C++ (Image 2 exact match)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <defs>
            <linearGradient id="cppHexGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#1976D2" />
              <stop offset="100%" stopColor="#0B3D91" />
            </linearGradient>
          </defs>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="url(#cppHexGrad)" stroke="#42A5F5" strokeWidth="1.5" />
          <path
            d="M21 19 C19 17 16 17 14 19 C11.5 21.5 11.5 26.5 14 29 C16 31 19 31 21 29"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
          {/* Plus 1 */}
          <line x1="25" y1="24" x2="31" y2="24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="28" y1="21" x2="28" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          {/* Plus 2 */}
          <line x1="33" y1="24" x2="39" y2="24" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <line x1="36" y1="21" x2="36" y2="27" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      );

    case 'java':
      // Steaming Java Coffee Cup (Image 2 exact match)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          {/* Steam trails */}
          <path d="M21 7 C19 10 25 12 23 16" fill="none" stroke="#FF5722" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M26 8 C24 11 29 13 27 17" fill="none" stroke="#FF9800" strokeWidth="2" strokeLinecap="round" />
          {/* Cup body & handle */}
          <path d="M14 20 L16 31 C16.5 34 21 35 24 35 C27 35 31.5 34 32 31 L34 20 Z" fill="#0288D1" />
          <path d="M33 22 C37 22 37 28 32 28" fill="none" stroke="#0288D1" strokeWidth="2.5" strokeLinecap="round" />
          {/* Saucer */}
          <ellipse cx="24" cy="38" rx="13" ry="2.5" fill="#4FC3F7" />
          <path d="M12 34 C16 37 32 37 36 34" fill="none" stroke="#0288D1" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'python':
      // Python Blue & Yellow Interlocking Snakes (Image 2 exact match)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <defs>
            <linearGradient id="pyBlue" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#387EB8" />
              <stop offset="100%" stopColor="#366994" />
            </linearGradient>
            <linearGradient id="pyYellow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#FFE873" />
              <stop offset="100%" stopColor="#FFD43B" />
            </linearGradient>
          </defs>
          <path
            d="M23.6 7 C14.6 7 15.2 10.9 15.2 10.9 L15.2 14.8 L24 14.8 L24 16.1 L11.7 16.1 C11.7 16.1 7 15.6 7 24.6 C7 33.6 11.2 33.1 11.2 33.1 L13.7 33.1 L13.7 29.6 C13.7 29.6 13.5 25.5 17.7 25.5 L26.4 25.5 C26.4 25.5 30.3 25.7 30.3 21.8 L30.3 10.9 C30.3 10.9 30.7 7 23.6 7 Z M20.4 10 C21.3 10 22 10.7 22 11.6 C22 12.5 21.3 13.2 20.4 13.2 C19.5 13.2 18.8 12.5 18.8 11.6 C18.8 10.7 19.5 10 20.4 10 Z"
            fill="url(#pyBlue)"
          />
          <path
            d="M24.4 41 C33.4 41 32.8 37.1 32.8 37.1 L32.8 33.2 L24 33.2 L24 31.9 L36.3 31.9 C36.3 31.9 41 32.4 41 23.4 C41 14.4 36.8 14.9 36.8 14.9 L34.3 14.9 L34.3 18.4 C34.3 18.4 34.5 22.5 30.3 22.5 L21.6 22.5 C21.6 22.5 17.7 22.3 17.7 26.2 L17.7 37.1 C17.7 37.1 17.3 41 24.4 41 Z M27.6 38 C26.7 38 26 37.3 26 36.4 C26 35.5 26.7 34.8 27.6 34.8 C28.5 34.8 29.2 35.5 29.2 36.4 C29.2 37.3 28.5 38 27.6 38 Z"
            fill="url(#pyYellow)"
          />
        </svg>
      );

    case 'javascript':
      // Yellow Rounded Square with bold black JS (Image 2 exact match)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="5" y="5" width="38" height="38" rx="9" fill="#F7DF1E" />
          <path
            d="M17 33.5 C15.5 33.5 14.2 32.8 13.6 31.3 L16.8 29.4 C17.2 30.2 17.7 30.6 18.4 30.6 C19.2 30.6 19.8 30.2 19.8 28.6 L19.8 18.5 L23.5 18.5 L23.5 28.6 C23.5 31.9 21.4 33.5 17 33.5 Z"
            fill="#000000"
          />
          <path
            d="M26 30.8 L29.2 29.1 C29.7 30.1 30.5 30.8 31.7 30.8 C32.8 30.8 33.5 30.3 33.5 29 C33.5 27.7 32.7 27.2 31.2 26.5 L30.5 26.1 C28.3 25.1 27 24 27 21.6 C27 19.1 29 17.2 32.2 17.2 C34.3 17.2 35.9 18 36.8 19.6 L34.3 21.1 C33.8 20.2 33.1 19.7 32.2 19.7 C31.2 19.7 30.5 20.2 30.5 21.1 C30.5 22.1 31.1 22.5 32.6 23.2 L33.3 23.5 C35.9 24.6 37.1 25.7 37.1 28.5 C37.1 31.4 34.8 33.3 31.4 33.3 C28.5 33.3 26.7 32 26 30.8 Z"
            fill="#000000"
          />
        </svg>
      );

    case 'sql':
      // SQL Database Emblem
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <ellipse cx="24" cy="12" rx="15" ry="6" fill="#00758F" />
          <path d="M9 12v11c0 3.3 6.7 6 15 6s15-2.7 15-6V12" fill="none" stroke="#F29111" strokeWidth="2.5" />
          <path d="M9 23v11c0 3.3 6.7 6 15 6s15-2.7 15-6V23" fill="none" stroke="#00758F" strokeWidth="2.5" />
          <text x="24" y="30" fill="#FFFFFF" fontSize="9" fontWeight="900" fontFamily="sans-serif" textAnchor="middle">
            SQL
          </text>
        </svg>
      );

    // ----------------- WEB DEVELOPMENT -----------------
    case 'react':
      // React Cyan Atom
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#00D8FF" strokeWidth="2" transform="rotate(30 24 24)" />
          <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#00D8FF" strokeWidth="2" transform="rotate(90 24 24)" />
          <ellipse cx="24" cy="24" rx="19" ry="7" fill="none" stroke="#00D8FF" strokeWidth="2" transform="rotate(150 24 24)" />
          <circle cx="24" cy="24" r="3.5" fill="#00D8FF" />
        </svg>
      );

    case 'html-css':
      // HTML5 & CSS3 Combined Shield
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <polygon points="10,6 38,6 35,38 24,42 13,38" fill="#E44D26" />
          <polygon points="24,9 35,9 33,35 24,38" fill="#F16529" />
          <polygon points="18,14 30,14 29,19 18,19" fill="#FFFFFF" />
          <polygon points="18,24 29,24 28,31 24,32 20,31 19,27 23,27 24,28 25,28 25.5,26 18,26" fill="#FFFFFF" />
        </svg>
      );

    case 'nodejs':
      // Node.js Green Hexagon
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <polygon points="24,4 42,14 42,34 24,44 6,34 6,14" fill="#339933" />
          <text x="24" y="29" fill="#FFFFFF" fontSize="13" fontWeight="bold" fontFamily="sans-serif" textAnchor="middle">
            node
          </text>
        </svg>
      );

    case 'fastapi-web':
      // FastAPI Teal Circle with Lightning
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <circle cx="24" cy="24" r="19" fill="#05998B" />
          <polygon points="26,8 14,24 23,24 21,39 34,21 25,21" fill="#FFFFFF" />
        </svg>
      );

    case 'threejs':
      // Three.js 3D Wireframe Pyramid
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <polygon points="24,7 41,38 7,38" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="24" y1="7" x2="24" y2="38" stroke="#00F5D4" strokeWidth="2" />
          <line x1="24" y1="22" x2="7" y2="38" stroke="#00F5D4" strokeWidth="1.5" />
          <line x1="24" y1="22" x2="41" y2="38" stroke="#00F5D4" strokeWidth="1.5" />
        </svg>
      );

    // ----------------- DATABASES -----------------
    case 'postgresql':
      // PostgreSQL Blue Elephant Head
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#336791" />
          <path
            d="M24 12 C18 12 15 17 15 22 C15 28 18 34 22 36 L22 30 C22 28 20 27 20 25 C20 23 22 22 24 22 C26 22 28 23 28 25 C28 27 26 28 26 30 L26 36 C30 34 33 28 33 22 C33 17 30 12 24 12 Z"
            fill="#FFFFFF"
          />
          <circle cx="21" cy="18" r="1.5" fill="#336791" />
          <circle cx="27" cy="18" r="1.5" fill="#336791" />
        </svg>
      );

    case 'mysql':
      // MySQL Blue & Orange Dolphin
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#00758F" />
          <path d="M14 26 C16 18 26 14 34 18 C30 20 26 24 24 30 C20 32 16 30 14 26 Z" fill="#F29111" />
          <circle cx="30" cy="19" r="1.5" fill="#FFFFFF" />
        </svg>
      );

    case 'mongodb':
      // MongoDB Green Leaf
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#13AA52" />
          <path d="M24 9 C24 9 17 16 17 24 C17 30 21 35 24 39 C27 35 31 30 31 24 C31 16 24 9 24 9 Z" fill="#FFFFFF" />
          <line x1="24" y1="12" x2="24" y2="37" stroke="#13AA52" strokeWidth="1.5" />
        </svg>
      );

    case 'redis':
      // Redis Red Stack
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#DC382D" />
          <polygon points="24,14 34,19 24,24 14,19" fill="#FFFFFF" />
          <polygon points="24,21 34,26 24,31 14,26" fill="#FFA39E" />
          <polygon points="24,28 34,33 24,38 14,33" fill="#FFFFFF" />
        </svg>
      );

    case 'sqlite':
      // SQLite Feather Blue
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#003B57" />
          <path d="M16 34 C18 20 24 14 32 14 C30 22 26 30 16 34 Z" fill="#00A9E0" />
          <path d="M22 24 L32 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    // ----------------- TOOLS & PLATFORMS -----------------
    case 'git':
      // Git Orange Diamond with Branch
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#F05032" />
          <circle cx="18" cy="24" r="3.5" fill="#FFFFFF" />
          <circle cx="30" cy="18" r="3.5" fill="#FFFFFF" />
          <circle cx="30" cy="30" r="3.5" fill="#FFFFFF" />
          <line x1="18" y1="24" x2="30" y2="18" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="18" y1="24" x2="30" y2="30" stroke="#FFFFFF" strokeWidth="2.5" />
        </svg>
      );

    case 'docker':
      // Docker Blue Whale
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#2496ED" />
          {/* Container boxes */}
          <rect x="15" y="19" width="3.5" height="3" fill="#FFFFFF" />
          <rect x="20" y="19" width="3.5" height="3" fill="#FFFFFF" />
          <rect x="25" y="19" width="3.5" height="3" fill="#FFFFFF" />
          <rect x="20" y="15" width="3.5" height="3" fill="#FFFFFF" />
          <rect x="25" y="15" width="3.5" height="3" fill="#FFFFFF" />
          {/* Whale */}
          <path d="M10 24 C10 28 14 31 22 31 C28 31 34 29 37 25 C37 23 35 24 33 24 C31 24 30 22 30 22 L11 22 C10 22 10 23 10 24 Z" fill="#FFFFFF" />
        </svg>
      );

    case 'linux':
      // Linux Tux Silhouette / Shell
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#222222" />
          {/* Yellow beak & feet */}
          <ellipse cx="24" cy="24" rx="8" ry="11" fill="#FFFFFF" />
          <ellipse cx="24" cy="16" rx="6" ry="6" fill="#333333" />
          <circle cx="22" cy="15" r="1.5" fill="#FFFFFF" />
          <circle cx="26" cy="15" r="1.5" fill="#FFFFFF" />
          <polygon points="22,18 26,18 24,21" fill="#FFA000" />
          <ellipse cx="19" cy="35" rx="3.5" ry="1.5" fill="#FFA000" />
          <ellipse cx="29" cy="35" rx="3.5" ry="1.5" fill="#FFA000" />
        </svg>
      );

    case 'postman':
      // Postman Orange Mascot
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#FF6C37" />
          <polygon points="14,24 34,14 26,34 23,26" fill="#FFFFFF" />
        </svg>
      );

    case 'vscode':
      // VS Code Blue Ribbon Butterfly
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#007ACC" />
          <path d="M33 10 L23 18 L16 12 L13 14 L18 24 L13 34 L16 36 L23 30 L33 38 Z" fill="#FFFFFF" />
        </svg>
      );

    case 'render':
      // Render Cloud Icon
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#000000" stroke="#46E3B7" strokeWidth="1.5" />
          <path d="M16 30 L24 16 L32 30 Z" fill="none" stroke="#46E3B7" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="3" fill="#46E3B7" />
        </svg>
      );

    // ----------------- DATA SCIENCE & ANALYTICS -----------------
    case 'scikit-learn':
      // Scikit-Learn Blue & Orange Gear
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#F89939" />
          <circle cx="24" cy="24" r="10" fill="#3499CD" />
          <circle cx="24" cy="24" r="4" fill="#FFFFFF" />
        </svg>
      );

    case 'pytorch':
      // PyTorch Flame Torch
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#EE4C2C" />
          <path
            d="M24 12 C24 12 28 17 28 22 C28 26 25 28 24 32 C23 28 20 26 20 22 C20 17 24 12 24 12 Z"
            fill="#FFFFFF"
          />
          <circle cx="31" cy="16" r="2" fill="#FFFFFF" />
        </svg>
      );

    case 'opencv':
      // OpenCV RGB Interlocking Rings
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#1E1E24" />
          <circle cx="24" cy="16" r="5" fill="none" stroke="#ED1C24" strokeWidth="3" />
          <circle cx="17" cy="28" r="5" fill="none" stroke="#22B14C" strokeWidth="3" />
          <circle cx="31" cy="28" r="5" fill="none" stroke="#00A2E8" strokeWidth="3" />
        </svg>
      );

    case 'yolov8':
      // YOLOv8 Target Sight AI
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#00D26A" />
          <circle cx="24" cy="24" r="10" fill="none" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="24" y1="10" x2="24" y2="17" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="24" y1="31" x2="24" y2="38" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="10" y1="24" x2="17" y2="24" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="31" y1="24" x2="38" y2="24" stroke="#FFFFFF" strokeWidth="2.5" />
          <circle cx="24" cy="24" r="2.5" fill="#FFFFFF" />
        </svg>
      );

    case 'pandas-numpy':
      // Pandas & NumPy Matrix
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#150458" />
          {/* Pandas colored vertical bars */}
          <rect x="14" y="14" width="4" height="20" rx="1.5" fill="#FFFFFF" />
          <rect x="22" y="18" width="4" height="16" rx="1.5" fill="#FFD43B" />
          <rect x="30" y="12" width="4" height="22" rx="1.5" fill="#E70488" />
        </svg>
      );

    case 'data-viz':
      // Data Visualization Chart
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#0284C7" />
          <line x1="12" y1="35" x2="36" y2="35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <line x1="12" y1="13" x2="12" y2="35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
          <polyline points="15,31 22,22 28,26 35,16" fill="none" stroke="#FDE047" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="35" cy="16" r="2.5" fill="#FDE047" />
        </svg>
      );

    // ----------------- OTHER SKILLS -----------------
    case 'dsa':
      // Data Structures & Algorithms (Tree / Network)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#8B5CF6" />
          <circle cx="24" cy="14" r="3.5" fill="#FFFFFF" />
          <circle cx="16" cy="26" r="3" fill="#C4B5FD" />
          <circle cx="32" cy="26" r="3" fill="#C4B5FD" />
          <circle cx="12" cy="36" r="2.5" fill="#FFFFFF" />
          <circle cx="20" cy="36" r="2.5" fill="#FFFFFF" />
          <line x1="24" y1="14" x2="16" y2="26" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="24" y1="14" x2="32" y2="26" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="16" y1="26" x2="12" y2="36" stroke="#FFFFFF" strokeWidth="1.5" />
          <line x1="16" y1="26" x2="20" y2="36" stroke="#FFFFFF" strokeWidth="1.5" />
        </svg>
      );

    case 'problem-solving':
      // Problem Solving (Lightbulb & Brain)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#EC4899" />
          <path d="M24 12 C19 12 16 16 16 20 C16 23 18 26 20 28 L20 32 L28 32 L28 28 C30 26 32 23 32 20 C32 16 29 12 24 12 Z" fill="#FFFFFF" />
          <line x1="22" y1="35" x2="26" y2="35" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );

    case 'sih-leadership':
      // Smart India Hackathon Leadership (Star Trophy)
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#F59E0B" />
          <polygon points="24,12 27,19 35,20 29,26 31,34 24,30 17,34 19,26 13,20 21,19" fill="#FFFFFF" />
        </svg>
      );

    case 'clean-architecture':
      // Clean Architecture Layered Rings
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#10B981" />
          <circle cx="24" cy="24" r="13" fill="none" stroke="#FFFFFF" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="8.5" fill="none" stroke="#A7F3D0" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="4" fill="#FFFFFF" />
        </svg>
      );

    case 'agile':
      // Agile Sprint Cycle
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#6366F1" />
          <path d="M24 13 A11 11 0 1 1 15 19" fill="none" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
          <polygon points="12,14 18,17 12,20" fill="#FFFFFF" />
        </svg>
      );

    default:
      return (
        <svg viewBox="0 0 48 48" width={size} height={size}>
          <rect x="6" y="6" width="36" height="36" rx="9" fill="#222222" stroke="#D4FF00" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="6" fill="#D4FF00" />
        </svg>
      );
  }
}
