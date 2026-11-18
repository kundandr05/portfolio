export interface SkillCategory {
  title: string;
  tagline: string;
  color: "tomato" | "yellow" | "green" | "blue";
  skills: {
    name: string;
    usedIn: string;
  }[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "AI, LLMs & Agentic Systems",
    tagline: "Autonomous workflows, multi-agent logic & local inference",
    color: "tomato",
    skills: [
      { name: "Agentic AI Coordination", usedIn: "Tournament Management System" },
      { name: "FastAPI & Python", usedIn: "Zeno AI & Tournament Agent" },
      { name: "Google Gemini API", usedIn: "Zeno AI & Krishna Leela" },
      { name: "Perplexity Sonar API", usedIn: "Zeno AI" },
      { name: "Groq Cloud LPU", usedIn: "DispatchGrid" },
      { name: "Ollama (Local LLMs)", usedIn: "Ollama Chatbot" },
      { name: "Prompt & Intent Routing", usedIn: "Zeno AI & Krishna Leela" }
    ]
  },
  {
    title: "Backend & Systems Engineering",
    tagline: "Scalable REST APIs, scheduling algorithms & databases",
    color: "yellow",
    skills: [
      { name: "Node.js & Express", usedIn: "DispatchGrid" },
      { name: "Prisma ORM & SQLite", usedIn: "DispatchGrid" },
      { name: "Firebase & Cloud Firestore", usedIn: "Campus OS" },
      { name: "Greedy Heuristics & 2-Opt", usedIn: "DispatchGrid" },
      { name: "Multi-Tier RBAC & Auth", usedIn: "Campus OS & DispatchGrid" },
      { name: "WebSockets & Streaming", usedIn: "Ollama Chatbot & Zeno AI" }
    ]
  },
  {
    title: "Frontend & UI Engineering",
    tagline: "High-performance React interfaces & tactile designs",
    color: "green",
    skills: [
      { name: "Next.js 16 (App Router)", usedIn: "Portfolio Website" },
      { name: "React 19 & TypeScript", usedIn: "DispatchGrid & Portfolio" },
      { name: "Tailwind CSS v4", usedIn: "DispatchGrid & Portfolio" },
      { name: "Framer Motion", usedIn: "Portfolio & Zeno AI" },
      { name: "Leaflet Geospatial Maps", usedIn: "DispatchGrid" },
      { name: "Vanilla JavaScript (DOM)", usedIn: "Krishna Leela" }
    ]
  },
  {
    title: "Design, Tools & Workflow",
    tagline: "Prototypes, version control & production deployment",
    color: "blue",
    skills: [
      { name: "UI/UX Prototyping", usedIn: "WizzyBox Internship (WCAP)" },
      { name: "Design Tokens & Wireframing", usedIn: "WizzyBox Internship" },
      { name: "Git & GitHub Workflows", usedIn: "All Projects" },
      { name: "Vercel & Render Deployment", usedIn: "All Projects" },
      { name: "Technical Research & Writing", usedIn: "IJCRT & Amazon KDP" }
    ]
  }
];

export const marqueeRow1 = [
  "Agentic AI", "FastAPI", "Python", "Next.js 16", "React 19", "TypeScript",
  "Tailwind CSS", "Groq LPU", "Google Gemini", "Perplexity API", "Node.js"
];

export const marqueeRow2 = [
  "Prisma ORM", "SQLite", "Leaflet Maps", "Ollama LLMs", "Framer Motion",
  "Lenis Scroll", "UI/UX Prototyping", "REST APIs", "WebSockets", "MongoDB"
];
