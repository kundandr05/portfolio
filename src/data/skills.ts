export interface SkillCategory {
    title: string;
    description: string;
    skills: {
        name: string;
        context: string;
    }[];
    projectRef: string;
}

export const skillCategories: SkillCategory[] = [
    {
        title: "AI & Machine Learning",
        description: "Autonomous reasoning, multi-agent workflows, and model integration.",
        projectRef: "DispatchGrid, Zeno AI, Tournament Manager",
        skills: [
            { name: "Agentic AI & Multi-Agent Systems", context: "Autonomous coordination & negotiation" },
            { name: "LLM Orchestration", context: "Gemini 2.5 Flash, Perplexity, OpenRouter" },
            { name: "Local Inference", context: "Ollama (Llama, Mistral, Gemma)" },
            { name: "Prompt Engineering & RAG", context: "Context injection & streaming responses" },
            { name: "Fast Inference", context: "Groq LPU hardware acceleration" }
        ]
    },
    {
        title: "Backend & Systems",
        description: "Performant APIs, relational data modeling, and algorithmic logic.",
        projectRef: "DispatchGrid, Tournament System Backend",
        skills: [
            { name: "Python", context: "FastAPI, async workers, data parsing" },
            { name: "Node.js & Express", context: "REST endpoints, auth middleware" },
            { name: "TypeScript", context: "Strict typing across client and server" },
            { name: "Database Design", context: "PostgreSQL, SQLite, Prisma ORM" },
            { name: "Algorithmic Solvers", context: "Greedy scheduling, 2-opt route optimization" }
        ]
    },
    {
        title: "Frontend & Web Craft",
        description: "Responsive, accessible, and high-performance user interfaces.",
        projectRef: "DispatchGrid, Zeno AI, Personal Portfolio",
        skills: [
            { name: "React & Next.js", context: "App Router, Server Components, client state" },
            { name: "Tailwind CSS", context: "Design token systems, responsive layout" },
            { name: "Vanilla JavaScript", context: "Zero-dependency DOM manipulation" },
            { name: "Geospatial UI", context: "Leaflet maps & interactive markers" },
            { name: "Motion", context: "Framer Motion for purposeful UI transitions" }
        ]
    },
    {
        title: "Product Design & Research",
        description: "Human-centered design thinking, wireframing, and scholarly publishing.",
        projectRef: "WizzyBox Internship (WCAP), IJCRT Paper, Amazon Books",
        skills: [
            { name: "User Research & Empathy Mapping", context: "Audience research & personas" },
            { name: "Information Architecture", context: "User flows, wireframes, storyboards" },
            { name: "Prototyping", context: "Figma UI kits & component libraries" },
            { name: "Technical Writing", context: "Peer-reviewed papers & non-fiction books" }
        ]
    }
];
