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
      { name: "Multi-Agent Systems & RAG", usedIn: "Tournament Agent & Research" },
      { name: "FastAPI & Python", usedIn: "Zeno AI & Tournament Agent" },
      { name: "Google Gemini API", usedIn: "Zeno AI & Krishna Leela" },
      { name: "Groq Cloud LPU", usedIn: "DispatchGrid" },
      { name: "Ollama (Local LLMs)", usedIn: "Ollama Chatbot" },
      { name: "Prompt Engineering & Routing", usedIn: "Zeno AI & Krishna Leela" }
    ]
  },
  {
    title: "Backend & Systems Engineering",
    tagline: "Scalable REST APIs, scheduling algorithms & databases",
    color: "yellow",
    skills: [
      { name: "Node.js & Express", usedIn: "DispatchGrid" },
      { name: "PostgreSQL & Supabase", usedIn: "Retail POS & Inventory" },
      { name: "Prisma ORM & SQLite", usedIn: "DispatchGrid" },
      { name: "Firebase & Cloud Firestore", usedIn: "Campus OS & EduAgent" },
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
      { name: "Next.js 16 (App Router)", usedIn: "Portfolio Website & EduAgent" },
      { name: "React 19 & TypeScript", usedIn: "DispatchGrid & Portfolio" },
      { name: "Flutter & Dart (PWA/Android)", usedIn: "Retail POS Platform" },
      { name: "Tailwind CSS v4", usedIn: "DispatchGrid & Portfolio" },
      { name: "Framer Motion", usedIn: "Portfolio & Zeno AI" },
      { name: "Recharts & TanStack Query", usedIn: "Campus OS & DispatchGrid" }
    ]
  },
  {
    title: "Design, Tools & Workflow",
    tagline: "Prototypes, version control & production deployment",
    color: "blue",
    skills: [
      { name: "Figma & UI/UX Prototyping", usedIn: "WizzyBox Internship (WCAP)" },
      { name: "Information Architecture & User Flows", usedIn: "WizzyBox Internship" },
      { name: "Empathy Mapping & Personas", usedIn: "WizzyBox Internship" },
      { name: "Git & GitHub Workflows", usedIn: "All Projects" },
      { name: "Vercel & Render Deployment", usedIn: "All Projects" },
      { name: "Technical Research & Writing", usedIn: "IJCRT & Amazon KDP" }
    ]
  }
];

export const marqueeRow1 = [
  "Agentic AI", "FastAPI", "Python", "Next.js 16", "React 19", "TypeScript",
  "Tailwind CSS", "Flutter", "Dart", "Google Gemini", "Node.js"
];

export const marqueeRow2 = [
  "PostgreSQL", "Supabase", "Prisma ORM", "SQLite", "Leaflet Maps",
  "Figma", "UI/UX Prototyping", "REST APIs", "Recharts", "TanStack Query"
];
