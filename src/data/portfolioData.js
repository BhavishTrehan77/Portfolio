export const personalInfo = {
  name: "Bhavish Trehan",
  headline: "Full-Stack Developer | GenAI Engineer",
  tagline: "Software Product Engineering Student & Backend / AI Systems Builder",
  subheading:
    "I build full-stack applications, backend systems, and AI-powered products using modern web technologies and Generative AI.",
  location: "Rohtak, Haryana, India",
  campus: "SGT University, Gurgaon",
  email: "bhavishtrehan777@gmail.com",
  phone: "+91 7827881996",
  status: "Open for Software Engineering Internships",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/BhavishTrehan77",
    linkedin: "https://www.linkedin.com/in/bhavish-trehan-945a06380/",
    leetcode: "https://leetcode.com/u/bha_vish_320/",
    email: "mailto:bhavishtrehan777@gmail.com",
  },
  bio: [
    "I am a Computer Science student pursuing Software Product Engineering at Kalvium's UG Program in CS at SGT University.",
    "Full-stack developer with hands-on AI/LLM experience, skilled in React, Next.js, Node.js, REST APIs, JWT authentication, and Docker-based deployment.",
    "Built ResolveAI, a multi-agent GenAI platform using Gemini LLM and embeddings, RAG, and MongoDB Atlas Vector Search, and shipped 2 full-stack web applications at Pixorama (deployed on AWS EC2).",
    "Passionate about building production-grade full-stack web applications, autonomous AI agent pipelines, and solving algorithmic problems through consistent DSA practice.",
  ],
};

export const technicalSkills = [
  {
    category: "Languages",
    skills: [
      { name: "JavaScript", level: "Advanced", icon: "Code2" },
      { name: "Python", level: "Proficient", icon: "FileCode" },
      { name: "C++", level: "Intermediate", icon: "Terminal" },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", level: "Advanced", icon: "Atom" },
      { name: "Next.js", level: "Proficient", icon: "Globe" },
      { name: "Tailwind CSS", level: "Advanced", icon: "Palette" },
      { name: "HTML5 & CSS3", level: "Advanced", icon: "Layout" },
      { name: "Vite", level: "Proficient", icon: "Zap" },
      { name: "Responsive Design", level: "Advanced", icon: "Smartphone" },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Node.js", level: "Advanced", icon: "Server" },
      { name: "Express.js", level: "Advanced", icon: "Cpu" },
      { name: "REST APIs", level: "Advanced", icon: "Network" },
      { name: "JWT Authentication", level: "Advanced", icon: "Key" },
      { name: "Role-Based Access (RBAC)", level: "Proficient", icon: "ShieldCheck" },
      { name: "Backend Architecture", level: "Proficient", icon: "Layers" },
      { name: "CRUD Operations", level: "Advanced", icon: "Database" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", level: "Advanced", icon: "Database" },
      { name: "Mongoose", level: "Advanced", icon: "Workflow" },
      { name: "PostgreSQL", level: "Proficient", icon: "DatabaseZap" },
      { name: "Prisma ORM", level: "Proficient", icon: "Boxes" },
      { name: "MySQL", level: "Intermediate", icon: "HardDrive" },
      { name: "SQL & NoSQL", level: "Proficient", icon: "Table2" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: "Proficient", icon: "Container" },
      { name: "Docker Compose", level: "Proficient", icon: "Package" },
      { name: "Git & GitHub", level: "Advanced", icon: "GitBranch" },
      { name: "GitHub Actions (CI/CD)", level: "Proficient", icon: "PlaySquare" },
      { name: "AWS EC2", level: "Intermediate", icon: "Cloud" },
      { name: "Vercel & Render", level: "Proficient", icon: "UploadCloud" },
      { name: "Postman", level: "Advanced", icon: "Send" },
      { name: "Linux", level: "Proficient", icon: "TerminalSquare" },
    ],
  },
  {
    category: "Other & Integrations",
    skills: [
      { name: "Nodemailer", level: "Advanced", icon: "Mail" },
      { name: "Twilio API", level: "Proficient", icon: "MessageSquare" },
      { name: "Cloudinary", level: "Proficient", icon: "Image" },
      { name: "Firebase & Firestore", level: "Intermediate", icon: "Flame" },
    ],
  },
];

export const genAiCapabilities = {
  title: "Generative AI & Intelligent Systems",
  statement:
    "I build AI-powered systems that combine LLMs with retrieval, embeddings, vector search and external tools to produce context-aware responses.",
  highlights: [
    {
      title: "RAG & Vector Retrieval",
      description:
        "End-to-end Retrieval-Augmented Generation pipelines using Google Gemini, text embeddings, and MongoDB Vector Search for contextual QA.",
      icon: "Workflow",
      tags: ["Embeddings", "MongoDB Vector Search", "Chunking", "Context Retrieval"],
    },
    {
      title: "Advanced Retrieval Engineering",
      description:
        "Query rewriting, hybrid vector + keyword search, Reciprocal Rank Fusion (RRF), semantic deduplication, and metadata filtering.",
      icon: "SearchCode",
      tags: ["Query Rewriting", "Hybrid Search", "RRF", "Deduplication"],
    },
    {
      title: "AI Agents & Tool Calling",
      description:
        "Autonomous agent workflows powered by Gemini with function calling, external API tool use, and multi-step reasoning loops.",
      icon: "Bot",
      tags: ["AI Agents", "Tool Calling", "Multi-step Loops", "Reasoning"],
    },
    {
      title: "Multimodal & Document AI",
      description:
        "Extracting, indexing, and querying multi-page PDF documents and multimodal image understanding via Gemini LLM APIs.",
      icon: "FileSearch",
      tags: ["PDF-based RAG", "Multimodal AI", "Document Indexing", "Gemini API"],
    },
  ],
  techBadges: [
    "Google Gemini",
    "LLM APIs",
    "Embeddings",
    "Vector Databases",
    "MongoDB Vector Search",
    "RAG",
    "Query Rewriting",
    "Semantic Search",
    "Chunking",
    "Context Retrieval",
    "Multimodal AI",
    "PDF-based RAG",
    "AI Agents",
    "Tool Calling",
    "Multi-step Agent Workflows",
  ],
};

export const experience = [
  {
    company: "Pixorama",
    role: "Software Development Intern",
    period: "15 May 2026 – 15 Aug 2026",
    badge: "Internship",
    description:
      "Contributed to production full-stack web applications, architecting robust backend APIs, secure authentication flows, and containerized deployment pipelines.",
    responsibilities: [
      "Developed and contributed to full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Engineered and integrated backend REST APIs with rigorous data validation and structured error handling.",
      "Implemented and debugged authentication and authorization workflows.",
      "Executed database integration, schema modeling, and full CRUD operations.",
      "Supported containerization with Docker, server provisioning on AWS EC2, and automated CI with GitHub Actions.",
      "Collaborated closely with mentors to understand engineering specifications and ship practical product features.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Docker",
      "AWS EC2",
      "GitHub Actions",
      "Git",
      "Linux",
    ],
  },
];

export const featuredProjects = [
  {
    id: "resolve-ai",
    name: "ResolveAI — Multi-Agent AI IT Incident & Support Platform",
    subtitle: "5-Agent Pipeline, Semantic RAG & Human-in-the-Loop Escalation",
    repoUrl: "https://github.com/BhavishTrehan77/Resolve-ai",
    demoUrl: null,
    featured: true,
    category: "Multi-Agent GenAI & RAG",
    techStack: [
      "React 18",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Google Gemini API",
      "Vector Search",
      "RAG",
      "JWT / RBAC",
      "Jest & Supertest",
    ],
    description:
      "A full-stack GenAI platform that automates IT incident triage and root-cause diagnosis using a sequential pipeline of 5 specialized LLM agents, semantic RAG retrieval over PDF technical manuals, and confidence-gated human escalation.",
    features: [
      "5 Specialized LLM Agents: Sequential pipeline coordinating Triage, Retrieval, Diagnosis, Resolution, and Escalation agents",
      "Semantic RAG & Vector Search: Automated PDF ingestion, text chunking, Gemini embeddings, and MongoDB Atlas Vector Search (cosine similarity)",
      "Query Rewriting & Relevance Reranking: Dynamically rewrites queries and reranks retrieved context to strictly ground LLM answers",
      "Confidence-Threshold Escalation: Automatically routes complex or low-confidence incidents to human agents with full diagnosis summaries",
      "3-Tier Role-Based Access Control: Granular RBAC permissions for Employee (ticket submission), Agent (incident management), and Admin (telemetry & PDF ingestion)",
      "Secure JWT & bcrypt Authentication: Protected API routes with token authentication and comprehensive password security",
      "Comprehensive Backend Test Suite: Robust API validation and error handling tested using Jest and Supertest",
    ],
    architectureHighlights: [
      "Sequential multi-agent workflow where each agent validates structured outputs before passing to the next stage",
      "MongoDB Atlas Vector Search with cosine similarity and fallback resilience for zero hallucination risk",
      "Stateless JWT auth paired with 3-role RBAC authorization and Multer/PDF-parse ingestion pipeline",
    ],
  },
  {
    id: "boat-app",
    name: "BOAT Warranty Hub — Full-Stack Warranty Management Platform",
    subtitle: "Full-Stack Warranty Lookup, RBAC Admin Portal & CI/CD Pipeline",
    repoUrl: "https://github.com/BhavishTrehan77/Boat-app",
    demoUrl: null,
    featured: true,
    category: "Full-Stack Web App",
    techStack: [
      "Next.js",
      "React",
      "MySQL",
      "Prisma",
      "NextAuth.js",
      "JWT",
      "Tailwind CSS",
      "Docker",
      "Google Cloud Storage",
      "GitHub Actions",
    ],
    description:
      "A full-stack warranty management platform where customers verify product warranties by serial number, view product and repair history, and securely download warranty documents via Google Cloud Storage signed URLs, backed by an RBAC-protected admin portal.",
    features: [
      "Instant serial-number-based warranty verification and repair history tracking for customers",
      "RBAC-protected administrator dashboard for Product and Repair CRUD workflows",
      "NextAuth.js, JWT, and bcrypt authentication with middleware route protection",
      "Prisma ORM with relational schema modeling, migrations, and automated database seeding",
      "Integrated Google Cloud Storage for resilient media handling and secure signed URL generation",
      "Containerized with Docker & Docker Compose for isolated dev and prod environments",
      "Automated CI/CD pipeline with GitHub Actions configured for production deployment on Vercel",
    ],
    architectureHighlights: [
      "Next.js App Router API endpoints protected by server-side session guards and middleware",
      "Relational schema modeling with Prisma ORM and cascading relations for products, warranties, and repairs",
      "Dockerized micro-environment with automated database seeding and migration triggers",
    ],
  },
];

export const problemSolving = {
  title: "Problem Solving & Algorithmic Practice",
  statement:
    "I continuously practice Data Structures and Algorithms to cultivate strong problem-solving fundamentals, optimal time-space complexity thinking, and clean code implementation.",
  leetcodeUrl: "https://leetcode.com/u/bha_vish_320/",
  topics: [
    { name: "Arrays & Hashing", description: "Hash maps, prefix sums, frequency counting" },
    { name: "Two Pointers", description: "Converging pointers, interval comparisons" },
    { name: "Sliding Window", description: "Fixed & dynamic windows, substring problems" },
    { name: "Binary Search", description: "Search space reduction, monotonic predicates" },
    { name: "Linked Lists", description: "Pointer manipulation, cycle detection, reversals" },
    { name: "Strings", description: "Parsing, palindrome verification, anagrams" },
    { name: "Sorting & Searching", description: "Quicksort, merge logic, custom comparators" },
    { name: "Algorithmic Logic", description: "Time-space complexity optimization & recursion" },
  ],
};

export const education = [
  {
    institution: "Kalvium's UG Program in Computer Science",
    program: "Software Product Engineering",
    campus: "SGT University, Gurgaon",
    degree: "B.Tech in Computer Science Engineering (Software Product Engineering)",
    duration: "2025 – 2029",
    grade: "First Year CGPA: 9.50 / 10.00",
    highlights: [
      "Hands-on, product-first engineering curriculum emphasizing production code over theoretical exams",
      "End-to-end full stack development, cloud deployment, and system architecture fundamentals",
      "Continuous algorithmic problem solving and collaborative pair programming practices",
    ],
  },
];
