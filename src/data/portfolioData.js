export const personalInfo = {
  name: "Deepak Phaneesh Naidu Addala",
  shortName: "Deepak Addala",
  title: "Full Stack Developer",
  tagline: "Crafting scalable web systems, clean architecture & modern digital experiences.",
  email: "addaladp@gmail.com",
  phone: "+91 9553079665",
  location: "India",
  status: "Available for worldwide work & collaborations",
  github: "https://github.com/Deepak-Phaneesh",
  linkedin: "https://www.linkedin.com/in/deepak-phaneesh-naidu-addala-8a8907290",
  aboutHeadline: "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on the cutting edge.",
  aboutSubText: "The combination of my passion for design, clean code & full-stack architecture positions me in a unique place in the web development world.",
  aboutBio: [
    "Hello I am Deepak Phaneesh Naidu, I am an aspiring Full-Stack Developer with a strong interest in Artificial Intelligence and Generative AI.",
    "I have hands-on experience building responsive web applications and AI-powered solutions using React, Next.js, JavaScript, TypeScript, Python, and modern backend technologies. I have worked on projects involving Retrieval-Augmented Generation (RAG), vector embeddings, semantic search, and real-time collaboration.",
    "I enjoy solving complex problems, learning emerging technologies, and building innovative solutions that create real-world impact."
  ],
  aboutParagraphs: [
    "Hello I am Deepak Phaneesh Naidu, I am an aspiring Full-Stack Developer with a strong interest in Artificial Intelligence and Generative AI. I have hands-on experience building responsive web applications and AI-powered solutions using React, Next.js, JavaScript, TypeScript, Python, and modern backend technologies. I have worked on projects involving Retrieval-Augmented Generation (RAG), vector embeddings, semantic search, and real-time collaboration. I enjoy solving complex problems, learning emerging technologies, and building innovative solutions that create real-world impact."
  ],
  stats: [
    { label: "Core Focus", value: "Full Stack" },
    { label: "Architecture", value: "Clean Code" },
    { label: "Performance", value: "60 FPS" },
    { label: "Delivery", value: "End-to-End" }
  ]
};

export const projects = [
  {
    id: "mindloom",
    title: "MindLoom",
    subtitle: "Collaborative Knowledge Graph & Canvas",
    category: "Real-Time Systems & Graphs",
    year: "2025",
    github: "https://github.com/Deepak-Phaneesh/MindLoom",
    liveUrl: "https://mind-loom-seven.vercel.app/",
    tags: ["Next.js", "React Flow", "Yjs", "CRDTs", "WebSockets", "Redis", "Neo4j", "BullMQ", "LLMs"],
    description: "Real-time multiplayer spatial workspace enabling concurrent note editing with conflict-free state synchronization and autonomous entity/relation extraction into Neo4j.",
    bullets: [
      "Built a real-time multiplayer spatial workspace using Next.js, React Flow, and Yjs CRDTs over WebSockets, enabling concurrent note editing, smooth canvas dragging, and sub-millisecond conflict-free state synchronization.",
      "Engineered an asynchronous ingestion and graph extraction pipeline using BullMQ and LLMs to autonomously parse entities and semantic relations into Neo4j, supporting 60 FPS multi-hop relationship visualization and exploration."
    ],
    accentColor: "#6366f1",
    gradient: "from-indigo-600/35 via-violet-900/40 to-slate-900",
    mockupType: "graph"
  },
  {
    id: "documind",
    title: "DocuMind",
    subtitle: "AI Document Intelligence Platform",
    category: "AI & Semantic Search",
    year: "2025",
    github: "https://github.com/Deepak-Phaneesh/DocuMind",
    liveUrl: "https://documind-75et.onrender.com",
    tags: ["Next.js 14", "Supabase", "Groq", "PostgreSQL", "pgvector", "Hugging Face", "RAG"],
    description: "Intelligent PDF analyzer enabling natural language queries over uploaded documents with 90%+ retrieval accuracy using pgvector similarity search.",
    bullets: [
      "Developed an intelligent PDF analyzer using Next.js 14 and Supabase, enabling users to perform natural language queries on uploaded documents with 90%+ retrieval accuracy via semantic search.",
      "Implemented pgvector in PostgreSQL to store and query high-dimensional document embeddings; optimized retrieval by building a custom similarity search function and integrating Hugging Face embedding models."
    ],
    accentColor: "#3b82f6",
    gradient: "from-blue-600/35 via-cyan-900/40 to-slate-900",
    mockupType: "document"
  },
  {
    id: "genai-tutor",
    title: "GenAI Tutor",
    subtitle: "Intelligent Learning Assistant",
    category: "Generative AI Platform",
    year: "2025",
    github: "https://github.com/Deepak-Phaneesh/GenAi-Tutor",
    liveUrl: "https://genai-tutor.onrender.com",
    tags: ["Next.js", "Supabase", "Groq", "Render", "Vector Embeddings", "LLMs", "Semantic Retrieval"],
    description: "AI-powered tutoring platform utilizing LLMs and context-aware semantic retrieval to supercharge educational comprehension without hallucinations.",
    bullets: [
      "Built an AI-powered tutoring platform using LLMs and Next.js, enabling natural language queries over educational content with context-aware responses.",
      "Designed a semantic retrieval pipeline using vector embeddings and similarity search, improving answer relevance and reducing hallucinations."
    ],
    accentColor: "#8b5cf6",
    gradient: "from-purple-600/35 via-fuchsia-900/40 to-slate-900",
    mockupType: "tutor"
  }
];

export const skillCategories = [
  {
    category: "Data & AI Engineering",
    description: "Vector search, knowledge graphs, distributed queues & LLMs",
    items: [
      "PostgreSQL (pgvector)",
      "Neo4j",
      "Redis",
      "Supabase",
      "RAG Architecture",
      "Vector Embeddings",
      "LLM APIs",
      "WebSockets (CRDTs)",
      "BullMQ Pipelines"
    ]
  },
  {
    category: "Frameworks & Libraries",
    description: "Reactive UI, canvas graph visualization & state synchronization",
    items: [
      "Next.js",
      "React",
      "React Flow",
      "Node.js",
      "Tailwind CSS",
      "Yjs (CRDTs)",
      "BullMQ",
      "RESTful APIs"
    ]
  },
  {
    category: "Languages & Foundations",
    description: "Strong algorithmic foundations, typed web & graph query syntax",
    items: [
      "Java (Data Structures & Algorithms)",
      "TypeScript",
      "JavaScript",
      "SQL",
      "Cypher (Neo4j)",
      "Python"
    ]
  },
  {
    category: "Developer Tools & Platform",
    description: "Version control, container orchestration & cloud hosting",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Vercel",
      "CI/CD Workflows",
      "Agile Architecture"
    ]
  }
];
