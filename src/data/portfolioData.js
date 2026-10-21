import { getAssetUrl } from '../utils/assetHelper';

export const portfolioData = {
  personal: {
    name: "Mukesh Kumaran M",
    heroName: "Mukesh Kumaran",
    role: "Data Science Engineer & Backend Developer",
    statusBadge: "Available for New Opportunities",
    subheadingPrefix: "Role:",
    typingRoles: [
      "Software Engineer",
      "AI Developer"
    ],
    email: "kumaranmukesh66@gmail.com",
    phone: "+91 8778503021",
    whatsapp: "https://wa.me/918778503021",
    linkedin: "https://linkedin.com/in/mukeshkumaran-m-049537415",
    github: "https://github.com/devilking1229mk-cyber",
    location: "Rajapalayam, Tamil Nadu, India",
    degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
    institution: "Ramco Institute of Technology",
    batch: "2025 — 2029",
    cgpa: "6.5",
    photoUrl: getAssetUrl('/assets/mukesh_profile.jpg'),
    photoFallback: getAssetUrl('/assets/photo-placeholder.svg'),
    resumeUrl: getAssetUrl('/assets/Mukesh_Kumaran_Resume.pdf'),
    resumePages: [
      getAssetUrl('/assets/mukesh_kumaran_resume_page1.jpg'),
      getAssetUrl('/assets/mukesh_kumaran_resume_page2.jpg')
    ],
    tagline: "Building resilient AI systems, data science pipelines, and scalable architectures with clean code and mathematical rigor.",
    bio: [
      "I am Mukesh Kumaran M, an Artificial Intelligence and Data Science undergraduate at Ramco Institute of Technology with a focus on machine learning pipelines, intelligent systems, and scalable backend architectures.",
      "I’m comfortable programming in Python, Java, C and C++, and I enjoy turning ideas into working projects. I built a website for Srinivasa Textiles, a local shop, which gave me hands-on experience delivering something real for a real client.",
      "I took part in SIH (Smart India Hackathon), where our team advanced to the next stage, and those projects are still in progress. Alongside this, I’ve completed an online internship and several online courses, and I’m always working on new team project ideas. I’m currently looking for internship / entry-level role / freelance work."
    ],
    stats: [
      { id: "projects", label: "Client & Team Projects", value: "02" },
      { id: "sih", label: "SIH Hackathon", value: "Advanced" },
      { id: "languages", label: "Core Languages", value: "Python, C++, Java" }
    ],
    coreValues: [
      "Clean Architecture",
      "Distributed Caching",
      "Deterministic Performance",
      "Concurrency & Thread Safety",
      "Relational Schema Design",
      "Continuous Optimization"
    ]
  },

  skills: [
    {
      id: "programming-languages",
      category: "Programming Languages",
      description: "Core algorithmic languages for distributed architectures, systems, and backend logic",
      items: [
        { name: "Python", level: "Advanced", percentage: 92, iconName: "Terminal", tagline: "Primary language for AI, data pipelines, and high-throughput APIs" },
        { name: "C / C++", level: "Intermediate", percentage: 80, iconName: "Cpu", tagline: "Algorithmic optimization, memory management, and competitive programming" },
        { name: "Java", level: "Intermediate", percentage: 80, iconName: "Code", tagline: "Object-oriented software engineering, collections, and multi-threading" },
        { name: "JavaScript / TypeScript", level: "Proficient", percentage: 84, iconName: "FileCode", tagline: "Modern ES6+, async workflows, and dynamic client-side interactions" },
        { name: "SQL", level: "Advanced", percentage: 90, iconName: "Database", tagline: "Declarative queries, multi-table joins, subqueries, and aggregation" }
      ]
    },
    {
      id: "web-development",
      category: "Web Development",
      description: "Modern full-stack web applications, responsive interfaces, and real-time frontend systems",
      items: [
        { name: "React.js & Vite", level: "Proficient", percentage: 85, iconName: "Layout", tagline: "Single-page apps, custom React hooks, component hierarchies, and fast bundling" },
        { name: "HTML5 & Modern CSS3", level: "Advanced", percentage: 92, iconName: "Layout", tagline: "Semantic structure, responsive layouts, glassmorphism, and micro-interactions" },
        { name: "Node.js & Express", level: "Proficient", percentage: 84, iconName: "Server", tagline: "Asynchronous backend middleware, event loop architecture, and REST endpoints" },
        { name: "FastAPI", level: "Proficient", percentage: 88, iconName: "Server", tagline: "High-performance Python APIs, Pydantic type validation, and auto-docs" },
        { name: "Three.js & WebGL", level: "Proficient", percentage: 82, iconName: "Box", tagline: "Interactive 3D graphics in the browser, custom lighting, and procedural models" }
      ]
    },
    {
      id: "databases",
      category: "Databases",
      description: "Relational schemas, ACID transactions, document datastores, and in-memory caching",
      items: [
        { name: "PostgreSQL", level: "Advanced", percentage: 90, iconName: "Database", tagline: "ACID transactions, B-Tree & GIN indexing, JSONB data, and schema optimizations" },
        { name: "MySQL", level: "Advanced", percentage: 88, iconName: "Database", tagline: "Relational database management, multi-table normalization, and foreign keys" },
        { name: "MongoDB", level: "Intermediate", percentage: 80, iconName: "Database", tagline: "NoSQL document storage, flexible collections, and aggregation pipelines" },
        { name: "Redis Caching", level: "Intermediate", percentage: 82, iconName: "Layers", tagline: "Sub-millisecond key-value caching, TTL expiration, and rate limiting" },
        { name: "SQLite", level: "Advanced", percentage: 88, iconName: "Database", tagline: "Embedded zero-configuration database for rapid local persistence and testing" }
      ]
    },
    {
      id: "tools-and-platforms",
      category: "Tools and Platforms",
      description: "DevOps infrastructure, containerization, version control, and production delivery",
      items: [
        { name: "Git & GitHub", level: "Advanced", percentage: 92, iconName: "GitBranch", tagline: "Distributed version control, branch workflows, pull requests, and CI/CD actions" },
        { name: "Docker", level: "Intermediate", percentage: 80, iconName: "Box", tagline: "Containerization, multi-stage builds, and Docker Compose orchestration" },
        { name: "Linux / Bash", level: "Proficient", percentage: 85, iconName: "Terminal", tagline: "Server administration, shell scripting, cron jobs, and SSH security" },
        { name: "Postman", level: "Advanced", percentage: 88, iconName: "Send", tagline: "API integration testing, automated test collections, and endpoint validation" },
        { name: "VS Code & IDEs", level: "Advanced", percentage: 95, iconName: "Code", tagline: "Advanced debugging, multi-cursor workflows, and linting configurations" },
        { name: "Render Cloud Hosting", level: "Proficient", percentage: 84, iconName: "Server", tagline: "Production web service deployments, automated webhooks, and live routing" }
      ]
    },
    {
      id: "data-science-analytics",
      category: "Data Science & Analytics",
      description: "Machine learning pipelines, deep learning neural networks, computer vision, and analytics",
      items: [
        { name: "Machine Learning (Scikit-Learn)", level: "Advanced", percentage: 88, iconName: "Binary", tagline: "Supervised classification, regression modeling, and statistical metrics" },
        { name: "Deep Learning (PyTorch)", level: "Proficient", percentage: 85, iconName: "Cpu", tagline: "Neural network architectures, CNNs, CUDA GPU acceleration, and inference" },
        { name: "Computer Vision (OpenCV)", level: "Advanced", percentage: 90, iconName: "Eye", tagline: "Image filtering, morphological operations, contour detection, and video analysis" },
        { name: "YOLOv8 Object Detection", level: "Proficient", percentage: 88, iconName: "Scan", tagline: "Real-time object localization, custom dataset training, and bounding boxes" },
        { name: "Pandas & NumPy", level: "Advanced", percentage: 92, iconName: "Table", tagline: "Tabular data wrangling, vectorized mathematical operations, and ETL cleaning" },
        { name: "Data Visualization (Matplotlib / Seaborn)", level: "Advanced", percentage: 88, iconName: "Layout", tagline: "Exploratory data analysis, correlation matrices, heatmaps, and distribution plots" }
      ]
    },
    {
      id: "other-skills",
      category: "Other Skills",
      description: "Core engineering problem solving, algorithmic foundations, architecture, and team leadership",
      items: [
        { name: "Data Structures & Algorithms", level: "Advanced", percentage: 90, iconName: "Binary", tagline: "500+ LeetCode & HackerRank challenges solved, graphs, DP, and trees" },
        { name: "Algorithmic Problem Solving", level: "Advanced", percentage: 92, iconName: "Cpu", tagline: "Time and space complexity optimization (Big-O), memory profiling" },
        { name: "Smart India Hackathon (SIH) Leadership", level: "Advanced", percentage: 90, iconName: "Sparkles", tagline: "SIH finalist team collaboration, project pitching, and sprint execution" },
        { name: "Clean Architecture & SOLID", level: "Proficient", percentage: 86, iconName: "Layers", tagline: "Decoupled software design, dependency inversion, and maintainable codebases" },
        { name: "Agile & Team Collaboration", level: "Proficient", percentage: 85, iconName: "Network", tagline: "Sprint planning, milestone tracking, peer code reviews, and technical documentation" }
      ]
    }
  ],

  projects: [
    {
      id: "textile-erp",
      title: "Srinivasa Textiles — Commercial E-Commerce Platform",
      category: "Commercial Web Platform",
      featured: true,
      year: "2026",
      description: "Live commercial website engineered for Srinivasa Textiles, an authentic family textile brand established in 1978. Features responsive catalog browsing for silk sarees, family wedding combos, Silk Mark certification branding, and customer order inquiries.",
      image: getAssetUrl('/assets/project_textile.jpg'),
      tech: ["HTML5", "CSS3", "JavaScript", "Render", "UI/UX Design"],
      metrics: "Live in production on Render • 100% Mobile Responsive",
      highlights: [
        "Architected an end-to-end commercial web application for a real business client, live at srinivasa-textiles.onrender.com.",
        "Engineered custom luxury storefront featuring pure Kanchipuram silk sarees, wedding combos, and kids collections.",
        "Implemented speculative prefetching, responsive layouts, and zero-latency catalog navigation."
      ],
      github: "https://github.com",
      demo: "https://srinivasa-textiles.onrender.com"
    },
    {
      id: "prahari-sih",
      title: "Prahari — Smart India Hackathon (SIH) Governance Portal",
      category: "SIH Hackathon & GovTech",
      featured: true,
      year: "2026",
      status: "SIH In Progress",
      description: "Team project engineered for Smart India Hackathon (SIH) — successfully advanced to the next stage and actively in progress. A transparent MPLADS governance and expenditure monitoring platform with authority-separated role workspaces (MP, Authority Board, Officer, Public), geo-tagged evidence tracking, and AI anomaly detection.",
      image: getAssetUrl('/assets/project_prahari.jpg'),
      tech: ["Next.js", "React", "Tailwind CSS", "AI Analytics", "Render"],
      metrics: "Advanced to next stage in Smart India Hackathon (SIH)",
      highlights: [
        "Qualified to the next stage in Smart India Hackathon (SIH) — actively in progress with our collaborative team.",
        "Engineered role-segregated workflows: MP Workspace, Authority Board, District Officer, and Public Audit Portal.",
        "Integrated live scheme telemetry tracking ₹54,000+ Cr allocations across constituencies with geo-tagged project verification.",
        "Built AI Monitor and Fraud Investigator modules to detect anomalies, duplicate proposals, and fund misallocations."
      ],
      github: "https://github.com",
      demo: "https://prahari-demo-lcem.onrender.com/"
    }
  ],

  certificates: [
    {
      id: "cert-ml-python",
      title: "Explore Machine Learning using Python",
      issuer: "Machine Learning & Python Specialization",
      month: "OCT 2026",
      date: "October 2026",
      status: "Verified Credential",
      pdfUrl: getAssetUrl('/assets/Explore_Machine_Learning_using_Python.pdf'),
      imageUrl: getAssetUrl('/assets/explore_machine_learning_using_python.jpg'),
      description: "Rigorous training covering supervised machine learning, regression analysis, regularized model pipelines, gradient boosting, and automated Python ML workflows.",
      skills: ["Supervised Learning", "Regression Analysis", "Scikit-Learn", "Model Evaluation"]
    },
    {
      id: "cert-wonders-of-ai-4",
      title: "Wonders of AI 4.0 — 24 Hrs Hackathon",
      issuer: "Kalasalingam Academy of Research and Education • School of Computing",
      month: "SEP 2026",
      date: "September 25–26, 2026",
      status: "24-Hr Hackathon Sprint",
      pdfUrl: getAssetUrl('/assets/wonders_of_ai_4_hackathon_certificate.pdf'),
      imageUrl: getAssetUrl('/assets/wonders_of_ai_4_hackathon_certificate.jpg'),
      description: "Certificate of Participation awarded to Mukesh Kumaran from the Department of Artificial Intelligence and Data Science, Ramco Institute of Technology for competing in the high-stakes 24-hour 'Wonders of AI 4.0' hackathon organized by the Department of CSE, School of Computing at Kalasalingam Academy of Research and Education during Euphoria 2026.",
      skills: ["24-Hour Hackathon", "Deep Learning & AI", "Rapid Prototyping", "Team Sprint Execution", "Autonomous Systems"]
    },
    {
      id: "cert-deloitte-analytics",
      title: "Data Analytics Job Simulation",
      issuer: "Deloitte • Forage",
      month: "JUL 2026",
      date: "July 2, 2026",
      status: "Enterprise Job Simulation",
      verificationCode: "JdSFBTrtbCh66eg43",
      userCode: "6a43951bdea7e0a1a59425b3",
      pdfUrl: getAssetUrl('/assets/deloitte_data_analytics_certificate.pdf'),
      imageUrl: getAssetUrl('/assets/deloitte_data_analytics_certificate.jpg'),
      description: "Certificate of Completion awarded to Mukesh Kumaran M for successfully completing practical corporate tasks in Data Analysis and Forensic Technology for Deloitte, authenticated by Tina McCreery, Chief Human Resources Officer.",
      skills: ["Data Analysis", "Forensic Technology", "Pattern Detection", "Enterprise Advisory", "Client Reporting"]
    },
    {
      id: "cert-tata-genai-analytics",
      title: "GenAI Powered Data Analytics Job Simulation",
      issuer: "Tata Group • Forage",
      month: "JUN 2026",
      date: "June 30, 2026",
      status: "GenAI Industry Simulation",
      verificationCode: "h2nvrJHxNbHfoXYZd",
      userCode: "6a43951bdea7e0a1a59425b3",
      pdfUrl: getAssetUrl('/assets/tata_genai_data_analytics_certificate.pdf'),
      imageUrl: getAssetUrl('/assets/tata_genai_data_analytics_certificate.jpg'),
      description: "Certificate of Completion awarded to Mukesh Kumaran M for practical execution in Exploratory Data Analysis & risk profiling, predicting delinquency with AI, executive data storytelling, and deploying AI-driven collections strategy for Tata.",
      skills: ["Generative AI", "Exploratory Data Analysis", "Delinquency Prediction", "Risk Profiling", "AI Collections Strategy"]
    },
    {
      id: "cert-hp-data-science",
      title: "Data Science & Analytics",
      issuer: "HP Foundation • HP LIFE",
      month: "JUN 2026",
      date: "June 9, 2026",
      status: "HP LIFE Online Course",
      serialNumber: "e4fbf7ad-8aa7-4a82-be67-3d9ed37e0415",
      pdfUrl: getAssetUrl('/assets/hp_data_science_analytics_certificate.pdf'),
      imageUrl: getAssetUrl('/assets/hp_data_science_analytics_certificate.jpg'),
      description: "Certificate of Completion presented to MukeshKumaran M by Michele Malejki, Executive Director, HP Foundation. Rigorous coursework covering industry-leading data science and analytics practices, methodologies, modern toolsets, and data-driven business models.",
      skills: ["Data Science & Analytics", "Business Intelligence", "Data-Driven Strategy", "Analytical Methodologies", "Decision Science"]
    },
    {
      id: "cert-kare-wonders-of-ai",
      title: "KARE OSS — Wonders of AI 3.0 Hackathon",
      issuer: "Kalasalingam Academy of Research and Education • Dept. of CSE",
      month: "MAR 2026",
      date: "March 13–14, 2026",
      status: "Hackathon Credential",
      pdfUrl: getAssetUrl('/assets/kare_wonders_of_ai_certificate.pdf'),
      imageUrl: getAssetUrl('/assets/kare_wonders_of_ai_certificate.jpg'),
      description: "Certificate of Participation awarded to Mukesh Kumaran M from Ramco Institute of Technology for participating in KARE OSS — Wonders of AI 3.0, a national-level AI and open-source software hackathon organized by the Department of Computer Science & Engineering during Euphoria 2026.",
      skills: ["Artificial Intelligence", "Open Source Software (OSS)", "AI Problem Solving", "Hackathon Sprint", "Sustainable Tech"]
    }
  ],

  education: [
    {
      degree: "Bachelor of Technology in Artificial Intelligence and Data Science",
      institution: "Ramco Institute of Technology",
      location: "Tamil Nadu, India",
      period: "2025 — 2029",
      cgpa: "6.5",
      status: "CGPA: 6.5 • Current Degree Track",
      score: "CGPA: 6.5 / 10.0",
      details: [
        "Core Coursework: Artificial Intelligence, Data Structures & Algorithms, Database Management Systems, Machine Learning, Operating Systems, Computer Networks, Neural Networks.",
        "Active contributor to technical coding groups, peer mentoring, and hackathon project leads."
      ]
    }
  ],

  experience: [
    {
      role: "Frontend & Web Developer (Client Project)",
      organization: "Srinivasa Textiles",
      period: "2026",
      type: "Commercial Client Project",
      points: [
        "Delivered end-to-end commercial website for a local heritage textile showroom with pure silk saree catalog.",
        "Engineered responsive storefront, speculative prefetching, and direct customer inquiry channels on Render.",
        "Gained hands-on experience delivering a real-world software product for an active retail client."
      ]
    },
    {
      role: "Full Stack & AI Developer (Team Project)",
      organization: "Smart India Hackathon (SIH) — Prahari",
      period: "2026 — Present",
      type: "National Hackathon",
      points: [
        "Co-developed transparent MPLADS governance portal, advancing to the next stage in Smart India Hackathon.",
        "Engineered role-segregated workflows for MPs, Authority Boards, and Public Audit with AI fraud detection.",
        "Active team project currently in continuous collaborative development."
      ]
    }
  ]
};
