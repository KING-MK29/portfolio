import React, { useState, useMemo, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  FolderGit2,
  Award,
  ChevronRight,
  ChevronLeft,
  Zap
} from 'lucide-react';
import PageNav from './PageNav';
import { TechLogo } from './TechLogos';

/* ==========================================================================
   CUSTOM CATEGORY SQUIRCLE BADGES (Exact Match to User's Uploaded Badges)
   ========================================================================== */
export function CategoryBadgeIcon({ categoryId, size = 32, glow = true }) {
  switch (categoryId) {
    case 'programming-languages':
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: glow ? 'drop-shadow(0 0 7.6px #D4FF00)' : 'none' }}
        >
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
          <line x1="14" y1="4" x2="10" y2="20" stroke="#FFFFFF" strokeWidth="2" opacity="0.85" />
        </svg>
      );

    case 'web-development':
      // Cyan Globe Badge (Exact Match to User's Uploaded Badge)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: glow ? 'drop-shadow(0 0 7.6px #00F5D4)' : 'none' }}
        >
          <circle cx="12" cy="12" r="9" />
          <ellipse cx="12" cy="12" rx="4.5" ry="9" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="4.5" y1="7" x2="19.5" y2="7" opacity="0.6" strokeWidth="1.5" />
          <line x1="4.5" y1="17" x2="19.5" y2="17" opacity="0.6" strokeWidth="1.5" />
        </svg>
      );

    case 'databases':
      // Purple Database Cylinder Badge (Exact Match to User's Uploaded Badge)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ filter: glow ? 'drop-shadow(0 0 7.6px #B366FF)' : 'none' }}
        >
          <ellipse cx="12" cy="5.5" rx="8" ry="3" fill="currentColor" fillOpacity="0.25" />
          <path d="M4 5.5v5.5c0 1.66 3.58 3 8 3s8-1.34 8-3V5.5" />
          <ellipse cx="12" cy="11" rx="8" ry="3" fill="currentColor" fillOpacity="0.15" />
          <path d="M4 11v5.5c0 1.66 3.58 3 8 3s8-1.34 8-3V11" />
        </svg>
      );

    case 'tools-and-platforms':
      // Orange Wrench Badge (Exact Match to User's Uploaded Badge)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ filter: glow ? 'drop-shadow(0 0 7.6px #FF8A3D)' : 'none' }}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76a1 1 0 0 0 0 1.4l1.6 1.6z"
          />
        </svg>
      );

    case 'data-science-analytics':
      // Blue 3-Bar Chart Badge (Exact Match to User's Uploaded Badge)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ filter: glow ? 'drop-shadow(0 0 7.6px #38BDF8)' : 'none' }}
        >
          <rect x="4" y="11" width="4" height="9" rx="1.5" />
          <rect x="10" y="7" width="4" height="13" rx="1.5" />
          <rect x="16" y="3.5" width="4" height="16.5" rx="1.5" />
        </svg>
      );

    case 'other-skills':
      // Pink 5-Pointed Star Badge (Exact Match to User's Uploaded Badge)
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="currentColor"
          style={{ filter: glow ? 'drop-shadow(0 0 7.6px #F43F5E)' : 'none' }}
        >
          <path d="M12 2.5l2.85 5.77 6.37.93-4.61 4.49 1.09 6.34L12 17.04l-5.7 2.99 1.09-6.34-4.61-4.49 6.37-.93L12 2.5z" />
        </svg>
      );

    default:
      return <Sparkles size={size} />;
  }
}

/* ==========================================================================
   SKILLS DATA (6 Master Domains directly matching User's Specification)
   ========================================================================== */
export const SKILL_CATEGORIES = [
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    shortTitle: 'Languages',
    color: '#D4FF00',
    colorRgb: '212, 255, 0',
    tagline: 'Core algorithmic languages for distributed architectures, systems, and backend logic',
    bgGradient: 'linear-gradient(145deg, #162410 0%, #0D140A 100%)',
    borderColor: 'rgba(212, 255, 0, 0.45)',
    glowColor: 'rgba(212, 255, 0, 0.3325)',
    skills: [
      {
        id: 'c',
        name: 'C',
        shortName: 'C',
        level: 'Proficient',
        percentage: 82,
        experience: '2+ Years',
        tagline: 'Procedural foundations, pointer arithmetic, and algorithmic execution',
        description: 'Applied low-level memory addressing, struct data definitions, pointer manipulation, and foundational algorithms with zero memory leaks.',
        project: 'Core Systems Programming & DSA',
        topics: ['Pointers & Addresses', 'Memory Allocation (malloc)', 'Structs & Unions', 'File I/O', 'Algorithm Efficiency']
      },
      {
        id: 'cpp',
        name: 'C++',
        shortName: 'C++',
        level: 'Advanced',
        percentage: 88,
        experience: '3+ Years',
        tagline: 'Algorithmic optimization, STL containers, and competitive programming',
        description: 'Extensive competitive programming implementation leveraging Standard Template Library (vector, map, set), graph traversals, and dynamic programming.',
        project: 'Competitive Coding (500+ Solved)',
        topics: ['STL Containers', 'Graph Algorithms', 'Dynamic Programming', 'Complexity Optimization', 'Operator Overloading']
      },
      {
        id: 'java',
        name: 'Java',
        shortName: 'Java',
        level: 'Intermediate',
        percentage: 80,
        experience: '2+ Years',
        tagline: 'Object-oriented software engineering, collections, and multi-threading',
        description: 'Applied SOLID OOP design patterns, inheritance hierarchies, and multi-threaded concurrency for academic software architectures.',
        project: 'Core Algorithms & Data Structures',
        topics: ['OOP Patterns', 'Collections Framework', 'Multithreading', 'JVM Internals', 'Unit Testing']
      },
      {
        id: 'python',
        name: 'Python',
        shortName: 'Python',
        level: 'Advanced',
        percentage: 92,
        experience: '3+ Years',
        tagline: 'Primary language for AI, data pipelines, and high-throughput APIs',
        description: 'Engineered high-performance backend services using Python with FastAPI, asynchronous coroutines, and distributed data pipelines with zero bottleneck.',
        project: 'Srinivasa Textiles & SIH Prahari',
        topics: ['FastAPI', 'AsyncIO', 'NumPy', 'Multiprocessing', 'Clean Architecture']
      },
      {
        id: 'javascript',
        name: 'JavaScript',
        shortName: 'JavaScript',
        level: 'Proficient',
        percentage: 84,
        experience: '2+ Years',
        tagline: 'Modern ES6+, async workflows, and dynamic client-side interactions',
        description: 'Engineered responsive single-page web applications with modern ES6+, React components, client-side routing, and interactive WebGL canvas elements.',
        project: 'Srinivasa Textiles & Prahari UI',
        topics: ['ES6+ Modules', 'Async / Await', 'DOM Manipulation', 'Event Loop', 'State Management']
      },
      {
        id: 'sql',
        name: 'SQL',
        shortName: 'SQL',
        level: 'Advanced',
        percentage: 90,
        experience: '3+ Years',
        tagline: 'Declarative queries, multi-table joins, subqueries, and aggregation',
        description: 'Wrote complex analytical queries with window partitioning, CTEs, and indexed lookups to calculate multi-tier client business logic.',
        project: 'Srinivasa Textiles Database',
        topics: ['Window Functions', 'Query Optimization', 'CTE Pipelines', 'Table Partitioning', 'Constraints']
      }
    ]
  },
  {
    id: 'web-development',
    title: 'Web Development',
    shortTitle: 'Web Dev',
    color: '#00F5D4',
    colorRgb: '0, 245, 212',
    tagline: 'Modern full-stack web applications, responsive interfaces, and real-time frontend systems',
    bgGradient: 'linear-gradient(145deg, #092622 0%, #061514 100%)',
    borderColor: 'rgba(0, 245, 212, 0.45)',
    glowColor: 'rgba(0, 245, 212, 0.3325)',
    skills: [
      {
        id: 'react',
        name: 'React.js & Vite',
        shortName: 'React.js',
        level: 'Proficient',
        percentage: 85,
        experience: '2+ Years',
        tagline: 'Single-page apps, custom React hooks, component hierarchies, and fast bundling',
        description: 'Constructed responsive single-page interfaces with custom React hooks, lazy loading, speculative prefetching, and lightning-fast Vite bundler configuration.',
        project: 'Srinivasa Textiles & Portfolio UI',
        topics: ['React Hooks', 'State Management', 'Vite Bundler', 'Component Architecture', 'Virtual DOM']
      },
      {
        id: 'html-css',
        name: 'HTML5 & Modern CSS3',
        shortName: 'HTML / CSS',
        level: 'Advanced',
        percentage: 92,
        experience: '3+ Years',
        tagline: 'Semantic structure, responsive layouts, glassmorphism, and micro-interactions',
        description: 'Crafted mobile-first layouts with CSS Grid/Flexbox, fluid typography, glassmorphism backdrop filters, and high-contrast dark themes.',
        project: 'Commercial Client Showroom UI',
        topics: ['CSS Grid & Flexbox', 'Glassmorphism', 'Keyframe Animations', 'Fluid Typography', 'Accessibility (a11y)']
      },
      {
        id: 'nodejs',
        name: 'Node.js & Express',
        shortName: 'Node.js',
        level: 'Proficient',
        percentage: 84,
        experience: '2+ Years',
        tagline: 'Asynchronous backend middleware, event loop architecture, and REST endpoints',
        description: 'Engineered non-blocking server endpoints, middleware request pipelines, error handlers, and real-time event proxies with Node.js and Express.',
        project: 'Prahari SIH API Gateway',
        topics: ['Express Middleware', 'Event Loop', 'RESTful Routing', 'JSON Web Tokens', 'Async Streams']
      },
      {
        id: 'fastapi-web',
        name: 'FastAPI',
        shortName: 'FastAPI',
        level: 'Proficient',
        percentage: 88,
        experience: '2+ Years',
        tagline: 'High-performance Python APIs, Pydantic type validation, and auto-docs',
        description: 'Designed production-grade microservices handling inventory sync, webhook processing, and low-latency database queries with auto-generated OpenAPI documentation.',
        project: 'Srinivasa Textiles Web Platform',
        topics: ['Dependency Injection', 'Pydantic v2', 'JWT Auth', 'Background Tasks', 'Uvicorn']
      },
      {
        id: 'threejs',
        name: 'Three.js & WebGL',
        shortName: 'Three.js',
        level: 'Proficient',
        percentage: 82,
        experience: '1+ Years',
        tagline: 'Interactive 3D graphics in the browser, custom lighting, and procedural models',
        description: 'Engineered custom real-time 3D interactive graphics, OrbitControls camera rigs, GLTF exporters, and animated tech light canvases running at 60 FPS.',
        project: '3D Interactive Portfolio Canvas',
        topics: ['WebGL Shaders', 'OrbitControls', 'GLTF / GLB Export', 'Procedural Meshes', 'Directional Lighting']
      }
    ]
  },
  {
    id: 'databases',
    title: 'Databases',
    shortTitle: 'Databases',
    color: '#B366FF',
    colorRgb: '179, 102, 255',
    tagline: 'Relational schemas, ACID transactions, document datastores, and in-memory caching',
    bgGradient: 'linear-gradient(145deg, #201035 0%, #11071F 100%)',
    borderColor: 'rgba(179, 102, 255, 0.45)',
    glowColor: 'rgba(179, 102, 255, 0.3325)',
    skills: [
      {
        id: 'postgresql',
        name: 'PostgreSQL',
        shortName: 'PostgreSQL',
        level: 'Advanced',
        percentage: 90,
        experience: '3+ Years',
        tagline: 'ACID transactions, B-Tree & GIN indexing, JSONB data, and schema optimizations',
        description: 'Engineered normalized schemas, B-Tree & GIN indexes, and transactional integrity guarantees for real-time catalog and order workflows.',
        project: 'Srinivasa Textiles Store Database',
        topics: ['B-Tree Indexing', 'Schema Migrations', 'Connection Pooling', 'JSONB Storage', 'ACID Compliance']
      },
      {
        id: 'mysql',
        name: 'MySQL',
        shortName: 'MySQL',
        level: 'Advanced',
        percentage: 88,
        experience: '2+ Years',
        tagline: 'Relational database management, multi-table normalization, and foreign keys',
        description: 'Managed enterprise relational tables, foreign key constraints, indexed lookups, and transaction isolation levels for operational safety.',
        project: 'Client Retail Inventory System',
        topics: ['Relational Normalization', 'Stored Triggers', 'Query Tuning', 'Transaction Locks', 'Backup / Restore']
      },
      {
        id: 'mongodb',
        name: 'MongoDB',
        shortName: 'MongoDB',
        level: 'Intermediate',
        percentage: 80,
        experience: '2+ Years',
        tagline: 'NoSQL document storage, flexible collections, and aggregation pipelines',
        description: 'Designed unstructured schema models, dynamic document attributes, and multi-stage aggregation pipelines for telemetry logs.',
        project: 'Prahari SIH Telemetry Collection',
        topics: ['Aggregation Pipeline', 'Document Indexing', 'BSON Formats', 'Schema Validation', 'Mongoose ODM']
      },
      {
        id: 'redis',
        name: 'Redis Caching',
        shortName: 'Redis',
        level: 'Intermediate',
        percentage: 82,
        experience: '2+ Years',
        tagline: 'Sub-millisecond key-value caching, TTL expiration, and rate limiting',
        description: 'Achieved ultra-low latency by caching frequent database queries, managing token bucket rate limiters, and session storage.',
        project: 'Srinivasa Textiles & Prahari',
        topics: ['Key Expiration TTL', 'Token Bucket Limiting', 'In-Memory Sets', 'Cache Invalidation', 'Pub/Sub']
      },
      {
        id: 'sqlite',
        name: 'SQLite',
        shortName: 'SQLite',
        level: 'Advanced',
        percentage: 88,
        experience: '3+ Years',
        tagline: 'Embedded zero-configuration database for rapid local persistence and testing',
        description: 'Integrated embedded zero-latency SQLite storage for local testing, rapid automated unit suites, and lightweight standalone utilities.',
        project: 'Embedded Local Tooling & Testing',
        topics: ['Zero-Config Storage', 'In-Memory DB', 'ACID Transactions', 'Single-File Storage', 'Fast Testing']
      }
    ]
  },
  {
    id: 'tools-and-platforms',
    title: 'Tools and Platforms',
    shortTitle: 'Tools & DevOps',
    color: '#FF8A3D',
    colorRgb: '255, 138, 61',
    tagline: 'DevOps infrastructure, containerization, version control, and production delivery',
    bgGradient: 'linear-gradient(145deg, #2D1808 0%, #170C03 100%)',
    borderColor: 'rgba(255, 138, 61, 0.45)',
    glowColor: 'rgba(255, 138, 61, 0.3325)',
    skills: [
      {
        id: 'git',
        name: 'Git & GitHub',
        shortName: 'Git',
        level: 'Advanced',
        percentage: 92,
        experience: '3+ Years',
        tagline: 'Distributed version control, branch workflows, pull requests, and CI/CD actions',
        description: 'Maintained strict branch naming conventions, atomic commits, squash merges, code reviews, and automated CI/CD deployment checks.',
        project: 'Srinivasa Textiles & Prahari Repos',
        topics: ['Git Flow', 'Interactive Rebase', 'Merge Conflict Resolution', 'GitHub Actions', 'Release Tags']
      },
      {
        id: 'docker',
        name: 'Docker',
        shortName: 'Docker',
        level: 'Intermediate',
        percentage: 80,
        experience: '2+ Years',
        tagline: 'Containerization, multi-stage builds, and Docker Compose orchestration',
        description: 'Configured multi-stage container builds, docker-compose orchestration for local dev clusters, and volume persistence for relational databases.',
        project: 'Prahari SIH Portal & Deployment',
        topics: ['Multi-Stage Builds', 'Docker Compose', 'Volume Mounts', 'Container Networking', 'Alpine Base Images']
      },
      {
        id: 'linux',
        name: 'Linux / Bash',
        shortName: 'Linux',
        level: 'Proficient',
        percentage: 85,
        experience: '2+ Years',
        tagline: 'Server administration, shell scripting, cron jobs, and SSH security',
        description: 'Automated database backups, log rotation schedules, and system deployment scripts on Linux cloud servers with systemd and bash.',
        project: 'Render Cloud Deployment & Linux',
        topics: ['Bash Scripting', 'Systemd Services', 'Permissions & SSH', 'Cron Jobs', 'Network Utilities']
      },
      {
        id: 'postman',
        name: 'Postman',
        shortName: 'Postman',
        level: 'Advanced',
        percentage: 88,
        experience: '2+ Years',
        tagline: 'API integration testing, automated test collections, and endpoint validation',
        description: 'Authored test scripts, environment variable suites, and automated collection runs to validate contract compliance across backend endpoints.',
        project: 'FastAPI & Express Verification',
        topics: ['Test Scripting', 'Environment Variables', 'Collection Runner', 'Mock Endpoints', 'Swagger / OpenAPI Import']
      },
      {
        id: 'vscode',
        name: 'VS Code & Modern IDEs',
        shortName: 'VS Code',
        level: 'Advanced',
        percentage: 95,
        experience: '3+ Years',
        tagline: 'Advanced debugging, multi-cursor workflows, and linting configurations',
        description: 'Configured automated ESLint/Prettier formatters, interactive breakpoint debuggers, Git lens analysis, and custom productivity keybindings.',
        project: 'Daily Engineering Workflow',
        topics: ['Breakpoint Debugging', 'ESLint & Prettier', 'Custom Keybindings', 'Git Integration', 'Extensions']
      },
      {
        id: 'render',
        name: 'Render Cloud Hosting',
        shortName: 'Render',
        level: 'Proficient',
        percentage: 84,
        experience: '1+ Years',
        tagline: 'Production web service deployments, automated webhooks, and live routing',
        description: 'Deployed and maintained live commercial web services on Render with custom domain DNS mapping, SSL certs, and zero-downtime auto-deploys.',
        project: 'Srinivasa Textiles Production',
        topics: ['Web Service Hosting', 'Environment Secrets', 'Custom Domains', 'Auto Deployments', 'SSL Certificates']
      }
    ]
  },
  {
    id: 'data-science-analytics',
    title: 'Data Science & Analytics',
    shortTitle: 'Data Science',
    color: '#38BDF8',
    colorRgb: '56, 189, 248',
    tagline: 'Machine learning pipelines, deep learning neural networks, computer vision, and analytics',
    bgGradient: 'linear-gradient(145deg, #0A1C36 0%, #050E1C 100%)',
    borderColor: 'rgba(56, 189, 248, 0.45)',
    glowColor: 'rgba(56, 189, 248, 0.3325)',
    skills: [
      {
        id: 'scikit-learn',
        name: 'Scikit-Learn',
        shortName: 'Scikit-Learn',
        level: 'Advanced',
        percentage: 88,
        experience: '2+ Years',
        tagline: 'Supervised classification, regression modeling, and statistical metrics',
        description: 'Implemented predictive anomaly models with Scikit-Learn pipelines to flag unbudgeted expenditure deviations and fraudulent transactions.',
        project: 'Prahari Fraud Anomaly Detection',
        topics: ['Feature Engineering', 'Cross Validation', 'Regression Pipelines', 'Confusion Matrix', 'ROC-AUC Metrics']
      },
      {
        id: 'pytorch',
        name: 'PyTorch',
        shortName: 'PyTorch',
        level: 'Proficient',
        percentage: 85,
        experience: '2+ Years',
        tagline: 'Neural network architectures, CNNs, CUDA GPU acceleration, and inference',
        description: 'Trained and fine-tuned convolutional architectures and detection heads for anomaly detection and intelligent image classification.',
        project: 'Prahari SIH Anomaly AI',
        topics: ['CNN Architectures', 'Transfer Learning', 'Tensor Optimization', 'CUDA Acceleration', 'Model Evaluation']
      },
      {
        id: 'opencv',
        name: 'OpenCV',
        shortName: 'OpenCV',
        level: 'Advanced',
        percentage: 90,
        experience: '2+ Years',
        tagline: 'Image filtering, morphological operations, contour detection, and video analysis',
        description: 'Constructed real-time image pre-processing pipelines to extract geo-tagged evidence metadata, edge detection, and surface inspection details.',
        project: 'Prahari SIH Evidence Verification',
        topics: ['Morphological Transforms', 'Contour Analysis', 'Color Space Conversion', 'Video Streams', 'Feature Matching']
      },
      {
        id: 'yolov8',
        name: 'YOLOv8',
        shortName: 'YOLOv8',
        level: 'Proficient',
        percentage: 88,
        experience: '2+ Years',
        tagline: 'Real-time object localization, custom dataset training, and bounding boxes',
        description: 'Custom trained object recognition models for automated asset detection and geo-location classification with ultra-low latency inference.',
        project: 'Prahari SIH Geo-Evidence AI',
        topics: ['Dataset Augmentation', 'Bounding Box Regression', 'Inference Latency', 'ONNX Export', 'Model Pruning']
      },
      {
        id: 'pandas-numpy',
        name: 'Pandas & NumPy',
        shortName: 'Pandas',
        level: 'Advanced',
        percentage: 92,
        experience: '3+ Years',
        tagline: 'Tabular data wrangling, vectorized mathematical operations, and ETL cleaning',
        description: 'Processed and normalized scheme telemetry logs and constituency expenditure datasets with high-speed vectorized array operations.',
        project: 'Prahari Scheme Telemetry Analytics',
        topics: ['Vectorized Operations', 'Data Cleaning', 'Aggregation & GroupBy', 'Matrix Computations', 'Time-Series Resampling']
      },
      {
        id: 'data-viz',
        name: 'Data Visualization',
        shortName: 'Analytics',
        level: 'Advanced',
        percentage: 88,
        experience: '2+ Years',
        tagline: 'Exploratory data analysis, correlation matrices, heatmaps, and distribution plots',
        description: 'Crafted statistical heatmaps, distributions, and multi-variable scatter plots to uncover underlying dataset trends and feature correlations.',
        project: 'Machine Learning Analytics Reports',
        topics: ['Correlation Heatmaps', 'Feature Distribution', 'Pairplots', 'Subplot Grids', 'Custom Chart Themes']
      }
    ]
  },
  {
    id: 'other-skills',
    title: 'Other Skills',
    shortTitle: 'Core & Leadership',
    color: '#F43F5E',
    colorRgb: '244, 63, 94',
    tagline: 'Core engineering problem solving, algorithmic foundations, architecture, and team leadership',
    bgGradient: 'linear-gradient(145deg, #320C1F 0%, #1A0510 100%)',
    borderColor: 'rgba(244, 63, 94, 0.45)',
    glowColor: 'rgba(244, 63, 94, 0.3325)',
    skills: [
      {
        id: 'dsa',
        name: 'Data Structures & Algorithms',
        shortName: 'DSA',
        level: 'Advanced',
        percentage: 90,
        experience: '3+ Years',
        tagline: '500+ LeetCode & HackerRank challenges solved, graphs, DP, and trees',
        description: 'Mastery across arrays, binary trees, dynamic programming, Dijkstra graph traversals, and divide-and-conquer paradigms.',
        project: 'LeetCode & HackerRank Profile',
        topics: ['Graph Traversals', 'Dynamic Programming', 'Binary Trees & Tries', 'Sliding Window', 'Two-Pointer Technique']
      },
      {
        id: 'problem-solving',
        name: 'Algorithmic Problem Solving',
        shortName: 'Problem Solving',
        level: 'Advanced',
        percentage: 92,
        experience: '3+ Years',
        tagline: 'Time and space complexity optimization (Big-O), memory profiling',
        description: 'Systematic mathematical approach to break down ambiguous challenges, optimize runtime bottleneck from O(N^2) to O(N log N).',
        project: 'Competitive Coding Mastery',
        topics: ['Big-O Analysis', 'Space Complexity', 'Memory Profiling', 'Mathematical Logic', 'Edge Case Handling']
      },
      {
        id: 'sih-leadership',
        name: 'SIH Hackathon Leadership',
        shortName: 'SIH Lead',
        level: 'Advanced',
        percentage: 90,
        experience: '2024 — Present',
        tagline: 'SIH finalist team collaboration, project pitching, and sprint execution',
        description: 'Spearheaded team technical decisions, architecture diagrams, and rapid sprint deliverables during the high-stakes Smart India Hackathon.',
        project: 'SIH Prahari National Portal',
        topics: ['Team Coordination', 'Architecture Pitching', 'Sprint Milestones', 'Code Review Standards', 'Public Presentations']
      },
      {
        id: 'clean-architecture',
        name: 'Clean Architecture & SOLID',
        shortName: 'Architecture',
        level: 'Proficient',
        percentage: 86,
        experience: '2+ Years',
        tagline: 'Decoupled software design, dependency inversion, and maintainable codebases',
        description: 'Adhering to Single Responsibility, Open/Closed principles, layered separation of concerns, and reusable abstraction layers.',
        project: 'Microservices & Platform Design',
        topics: ['SOLID Principles', 'Dependency Inversion', 'Interface Segregation', 'Decoupled Handlers', 'DRY & KISS']
      },
      {
        id: 'agile',
        name: 'Agile & Team Collaboration',
        shortName: 'Agile',
        level: 'Proficient',
        percentage: 85,
        experience: '2+ Years',
        tagline: 'Sprint planning, milestone tracking, peer code reviews, and technical documentation',
        description: 'Collaborated across multi-developer teams, participated in sprint planning, managed backlog tickets, and maintained comprehensive README docs.',
        project: 'Client & Hackathon Projects',
        topics: ['Sprint Planning', 'Standup Workflows', 'Issue Tracking', 'Technical Specs', 'Peer Mentoring']
      }
    ]
  }
];

export default function Skills() {
  const [activeCategoryId, setActiveCategoryId] = useState(null);
  const [focusedSkillId, setFocusedSkillId] = useState(null);
  const mainBoxRef = useRef(null);

  // Active Category Object
  const activeCategory = useMemo(() => {
    if (!activeCategoryId) return null;
    return SKILL_CATEGORIES.find((cat) => cat.id === activeCategoryId) || SKILL_CATEGORIES[0];
  }, [activeCategoryId]);

  // Active Category Index
  const activeCategoryIndex = useMemo(() => {
    if (!activeCategoryId) return -1;
    return SKILL_CATEGORIES.findIndex((cat) => cat.id === activeCategoryId);
  }, [activeCategoryId]);

  // Set default focused skill when category changes
  useEffect(() => {
    if (activeCategory && activeCategory.skills.length > 0) {
      setFocusedSkillId(activeCategory.skills[0].id);
    }
  }, [activeCategoryId, activeCategory]);

  // Handle Logo Touch / Click from Initial Grid - smoothly animates tabs to side dock
  const handleSelectCategory = (catId) => {
    setActiveCategoryId(catId);
  };

  // Return to All Domains Overview
  const handleBackToOverview = () => {
    setActiveCategoryId(null);
  };

  // Next / Previous Category Navigation inside Main Box
  const handlePrevCategory = () => {
    if (activeCategoryIndex <= 0) {
      setActiveCategoryId(SKILL_CATEGORIES[SKILL_CATEGORIES.length - 1].id);
    } else {
      setActiveCategoryId(SKILL_CATEGORIES[activeCategoryIndex - 1].id);
    }
  };

  const handleNextCategory = () => {
    if (activeCategoryIndex >= SKILL_CATEGORIES.length - 1) {
      setActiveCategoryId(SKILL_CATEGORIES[0].id);
    } else {
      setActiveCategoryId(SKILL_CATEGORIES[activeCategoryIndex + 1].id);
    }
  };

  // Currently focused skill inside the category
  const focusedSkill = useMemo(() => {
    if (!activeCategory) return null;
    return activeCategory.skills.find((s) => s.id === focusedSkillId) || activeCategory.skills[0];
  }, [activeCategory, focusedSkillId]);

  return (
    <div className={`page-wrapper skills-page-view ${activeCategoryId ? 'has-active-inspector' : ''}`}>
      <section id="skills" className="section-padding skills-section">
        <div className="container">
          {/* Section Header (Shown only on Overview Mode) */}
          {!activeCategoryId && (
            <div className="section-header">
              <div className="section-tag">
                <Zap size={14} />
                <span>Technical Capabilities</span>
              </div>
              <h1 className="section-title">
                Skills & <span className="text-copper">Expertise</span>
              </h1>
              <p className="section-subtitle">
                Interactive competency architecture divided into 6 core technical domains. Select any category badge below to reveal official technology logos and deep proficiency details.
              </p>
            </div>
          )}

          {/* ===================================================================
              VIEW 1: INITIAL STATE — ONLY THE 6 LOGOS SHOWCASE
              "ANTHA LOGOS MATUM FIRST SHOW AAGANUM"
              =================================================================== */}
          {!activeCategoryId && (
            <div className="skills-overview-container">
              <div className="skills-overview-banner font-mono">
                <span className="overview-pulse-dot" />
                <span>SELECT A TECHNICAL DOMAIN TO INSPECT ARCHITECTURE & SKILLS</span>
              </div>

              <div className="skills-initial-logo-grid">
                {SKILL_CATEGORIES.map((cat, idx) => {
                  const overallPct = Math.round(
                    cat.skills.reduce((acc, s) => acc + (s.percentage || 0), 0) / (cat.skills.length || 1)
                  );

                  return (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => handleSelectCategory(cat.id)}
                      className="skill-initial-tile glass-panel"
                      style={{
                        '--cat-color': cat.color,
                        '--cat-border': cat.borderColor,
                        '--cat-glow': cat.glowColor,
                        '--cat-bg': cat.bgGradient
                      }}
                      title={`Touch to explore ${cat.title}`}
                    >
                      <div className="tile-ambient-glow" />

                      {/* Prominent Category Squircle Logo & Top Metrics */}
                      <div className="tile-badge-wrapper">
                        <div className="category-squircle-logo tile-logo-hero">
                          <CategoryBadgeIcon categoryId={cat.id} size={42} glow={true} />
                        </div>
                        <div className="tile-top-metrics font-mono">
                          <span className="tile-order-num">0{idx + 1}</span>
                          <div className="tile-overall-badge">
                            <span className="tile-overall-num">{overallPct}%</span>
                            <span className="tile-overall-lbl">SCORE</span>
                          </div>
                        </div>
                      </div>

                      {/* Title & Preview Metadata */}
                      <div className="tile-content">
                        <h3 className="tile-category-title">{cat.title}</h3>
                        <p className="tile-tagline">{cat.tagline}</p>

                        <div className="tile-meta-strip font-mono">
                          <div className="tile-meta-left">
                            <span className="tile-count-badge">
                              {cat.skills.length} Mastered Skills
                            </span>
                            <span className="tile-pct-pill">
                              <span className="tile-dot" />
                              {overallPct}%
                            </span>
                          </div>
                          <span className="tile-action-prompt">
                            <span>Inspect Domain</span>
                            <ArrowRight size={13} />
                          </span>
                        </div>

                        {/* Category Overall Progress Bar */}
                        <div className="tile-progress-bar">
                          <div
                            className="tile-progress-fill"
                            style={{
                              width: `${overallPct}%`,
                              background: `linear-gradient(90deg, #6366F1 0%, ${cat.color} 100%)`,
                              boxShadow: `0 0 10px ${cat.color}`
                            }}
                          />
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* ===================================================================
              VIEW 2: ACTIVE INSPECTOR STATE
              "ANTHA TOUCH PANNA INTHA LOGOS LAM LEFT LA ORDER AH ARRANGE AAGIRANUM
               TOUCH PANNATHODA DETAILS ELLAM ORU BOX AH MAIN AH SHOW AAGANUM"
              =================================================================== */}
          {activeCategoryId && activeCategory && (
            <div className="skills-inspector-layout" ref={mainBoxRef}>
              {/* -------------------------------------------------------------
                  LEFT SIDE: VERTICAL LOGO DOCK (ALL 6 LOGOS IN ORDER)
                  ------------------------------------------------------------- */}
              <aside className="skills-left-dock glass-panel" aria-label="Category Navigation">
                <div className="dock-top-bar">
                  <button
                    type="button"
                    onClick={handleBackToOverview}
                    className="dock-back-btn font-mono"
                    title="Return to 6-logo overview"
                  >
                    <ArrowLeft size={14} />
                    <span>All Domains</span>
                  </button>
                  <span className="dock-label font-mono">6 DOMAINS</span>
                </div>

                <div className="dock-logos-list">
                  {SKILL_CATEGORIES.map((cat, idx) => {
                    const isActive = cat.id === activeCategoryId;
                    const overallPct = Math.round(
                      cat.skills.reduce((acc, s) => acc + (s.percentage || 0), 0) / (cat.skills.length || 1)
                    );

                    return (
                      <button
                        key={cat.id}
                        type="button"
                        onClick={() => setActiveCategoryId(cat.id)}
                        className={`dock-item-btn ${isActive ? 'active' : ''}`}
                        style={{
                          '--cat-color': cat.color,
                          '--cat-border': cat.borderColor,
                          '--cat-glow': cat.glowColor,
                          '--cat-bg': cat.bgGradient,
                          animationDelay: `${idx * 0.055}s`
                        }}
                        title={`Switch to ${cat.title}`}
                      >
                        {/* Iconic Squircle Badge */}
                        <div className="category-squircle-logo dock-logo">
                          <CategoryBadgeIcon categoryId={cat.id} size={24} glow={isActive} />
                        </div>

                        {/* Category Label, Skill Count & Overall Percentage */}
                        <div className="dock-item-info">
                          <div className="dock-item-title-row">
                            <span className="dock-item-order font-mono">0{idx + 1}</span>
                            <span className="dock-item-title">{cat.title}</span>
                          </div>
                          <div className="dock-item-meta-row font-mono">
                            <span className="dock-item-count">{cat.skills.length} Skills</span>
                            <span className="dock-item-pct" style={{ color: cat.color }}>
                              {overallPct}%
                            </span>
                          </div>
                        </div>

                        {/* Active Glowing Indicator Bar */}
                        {isActive && <div className="dock-active-glow-bar" />}
                      </button>
                    );
                  })}
                </div>
              </aside>

              {/* -------------------------------------------------------------
                  RIGHT SIDE: MAIN DETAILS SHOWCASE BOX
                  "TOUCH PANNATHODA DETAILS ELLAM ORU BOX AH MAIN AH SHOW AAGANUM"
                  ------------------------------------------------------------- */}
              <main
                key={activeCategory.id}
                className="skills-main-box glass-panel"
                style={{
                  '--cat-color': activeCategory.color,
                  '--cat-border': activeCategory.borderColor,
                  '--cat-glow': activeCategory.glowColor,
                  '--cat-bg': activeCategory.bgGradient
                }}
              >
                <div className="main-box-ambient-glow" />

                {/* 1. Main Box Top Header */}
                <header className="main-box-header">
                  <div className="main-box-identity">
                    <div className="category-squircle-logo main-box-hero-logo">
                      <CategoryBadgeIcon categoryId={activeCategory.id} size={36} glow={true} />
                    </div>
                    <div>
                      <div className="main-box-category-tag font-mono">
                        <span className="tag-dot" />
                        <span>DOMAIN 0{activeCategoryIndex + 1} OF 06</span>
                      </div>
                      <h2 className="main-box-title">{activeCategory.title}</h2>
                      <p className="main-box-tagline">{activeCategory.tagline}</p>
                    </div>
                  </div>

                  {/* Header Metrics Badge */}
                  <div className="main-box-header-metrics font-mono">
                    <div className="metric-pill">
                      <span className="metric-pill-lbl">CAPACITY</span>
                      <span className="metric-pill-val">{activeCategory.skills.length} Skills</span>
                    </div>
                    <div className="metric-pill highlight">
                      <span className="metric-pill-lbl">STATUS</span>
                      <span className="metric-pill-val">Production Ready</span>
                    </div>
                  </div>
                </header>

                {/* 2. EXACT USER REQUEST (IMAGE 2):
                    LOGOS WITH LOGO'S NAME ROW + PROGRESS BAR!
                    "INTHA TAB KU PATHIL AH IBTI LOGOS WITH LOGO'S NAME OODA IRUKANUM
                     THEN ANTHA LOGO AH TOUCH PANNA ANTHA LOGO OODA DETAILS LAM SHOW AAGANUM"
                */}
                <section className="tech-logos-nav-section">
                  <div className="tech-logos-nav-header font-mono">
                    <span>TECHNOLOGY BADGES • TOUCH ANY LOGO TO INSPECT DETAILS</span>
                  </div>

                  {/* Row of Official Tech Logos with Names */}
                  <div className="tech-logos-row" role="tablist">
                    {activeCategory.skills.map((skill) => {
                      const isSelected = focusedSkill && focusedSkill.id === skill.id;
                      return (
                        <button
                          key={skill.id}
                          type="button"
                          role="tab"
                          aria-selected={isSelected}
                          onClick={() => setFocusedSkillId(skill.id)}
                          className={`tech-logo-item-btn ${isSelected ? 'active' : ''}`}
                          title={`Touch to inspect ${skill.name}`}
                        >
                          {/* Squircle Tech Logo Badge (Exact match to Image 2!) */}
                          <div className="tech-logo-squircle-badge">
                            <TechLogo id={skill.id} size={38} />
                          </div>
                          {/* Logo Name directly under the logo (Image 2!) */}
                          <span className="tech-logo-label">{skill.shortName || skill.name}</span>
                        </button>
                      );
                    })}
                  </div>

                  {/* Glowing Proficiency Bar Underneath (Image 2 exact match!) */}
                  {focusedSkill && (
                    <div className="tech-logos-progress-strip">
                      <div className="tech-logos-progress-track">
                        <div
                          className="tech-logos-progress-fill"
                          style={{
                            width: `${focusedSkill.percentage}%`,
                            background: `linear-gradient(90deg, #6366F1 0%, ${activeCategory.color} 100%)`
                          }}
                        />
                      </div>
                      <span className="tech-logos-percent font-mono">{focusedSkill.percentage}%</span>
                    </div>
                  )}
                </section>

                {/* 3. TOUCHED LOGO'S COMPLETE DETAILS (EXACT MATCH TO IMAGE 1!) */}
                {focusedSkill && (
                  <section key={focusedSkill.id} className="main-box-spotlight-card">
                    <div className="spotlight-left-gauge">
                      <div className="circular-gauge-wrapper">
                        <svg className="gauge-svg" viewBox="0 0 120 120">
                          <circle className="gauge-bg" cx="60" cy="60" r="48" strokeWidth="8" />
                          <circle
                            className="gauge-fill"
                            cx="60"
                            cy="60"
                            r="48"
                            strokeWidth="8"
                            strokeDasharray={2 * Math.PI * 48}
                            strokeDashoffset={2 * Math.PI * 48 * (1 - focusedSkill.percentage / 100)}
                            transform="rotate(-90 60 60)"
                            style={{ stroke: activeCategory.color }}
                          />
                        </svg>
                        <div className="gauge-center-content font-mono">
                          <span className="gauge-number">{focusedSkill.percentage}%</span>
                          <span className="gauge-label">Mastery</span>
                        </div>
                      </div>

                      <div className="spotlight-level-pill font-mono">
                        <Award size={12} style={{ color: activeCategory.color }} />
                        <span>{focusedSkill.level}</span>
                      </div>
                    </div>

                    <div className="spotlight-right-content">
                      <div className="spotlight-header-row">
                        <div>
                          <span className="spotlight-eyebrow font-mono">ACTIVE FOCUSED SPECIALIZATION</span>
                          <h3 className="spotlight-skill-name">{focusedSkill.name}</h3>
                        </div>
                        <div className="spotlight-exp-badge font-mono">
                          <span>EXP:</span>
                          <span className="exp-val" style={{ color: activeCategory.color }}>
                            {focusedSkill.experience}
                          </span>
                        </div>
                      </div>

                      <p className="spotlight-tagline font-mono">
                        <Sparkles size={13} style={{ color: activeCategory.color }} />
                        <span>{focusedSkill.tagline}</span>
                      </p>

                      <p className="spotlight-desc">{focusedSkill.description}</p>

                      {/* Production Integration Bar */}
                      {focusedSkill.project && (
                        <div className="spotlight-project-strip font-mono">
                          <div className="project-left">
                            <FolderGit2 size={15} style={{ color: activeCategory.color }} />
                            <span>Verified Project:</span>
                            <strong>{focusedSkill.project}</strong>
                          </div>
                          <Link to="/projects" className="project-view-link">
                            <span>Inspect</span>
                            <ArrowRight size={12} />
                          </Link>
                        </div>
                      )}

                      {/* Core Competencies Pills */}
                      <div className="spotlight-topics-list">
                        {focusedSkill.topics.map((topic) => (
                          <span key={topic} className="spotlight-topic-pill">
                            <CheckCircle2 size={11} style={{ color: activeCategory.color }} />
                            <span>{topic}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </section>
                )}

                {/* 4. Main Box Footer Navigation Bar */}
                <footer className="main-box-footer-bar font-mono">
                  <div className="footer-nav-group">
                    <button
                      type="button"
                      onClick={handlePrevCategory}
                      className="main-box-nav-btn"
                      title="Navigate to Previous Category"
                    >
                      <ChevronLeft size={16} />
                      <span>Previous Domain</span>
                    </button>

                    <button
                      type="button"
                      onClick={handleNextCategory}
                      className="main-box-nav-btn highlight"
                      title="Navigate to Next Category"
                    >
                      <span>Next Domain</span>
                      <ChevronRight size={16} />
                    </button>
                  </div>

                  <div className="footer-domain-counter">
                    <span className="counter-current">0{activeCategoryIndex + 1}</span>
                    <span className="counter-sep">/</span>
                    <span className="counter-total">06 Domains</span>
                  </div>
                </footer>
              </main>
            </div>
          )}
        </div>
      </section>

      {/* Page Navigation (Overview Mode Only) */}
      {!activeCategoryId && (
        <PageNav
          prev={{ label: 'About Me', path: '/about' }}
          next={{ label: 'Certificates', path: '/certificates' }}
        />
      )}
    </div>
  );
}
