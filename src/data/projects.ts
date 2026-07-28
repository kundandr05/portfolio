export interface Project {
    slug: string;
    title: string;
    description: string;
    tags: string[];
    image: string;
    github?: string;
    githubLabel?: string;
    demo?: string;
    demoLabel?: string;
    keyFeatures?: string[];
    architecture?: string;
    challenges?: string;
    futureImprovements?: string;
}

export const projects: Project[] = [
    {
        slug: "zeno-ai",
        title: "Zeno AI",
        description: "AI-powered chatbot built using FastAPI and LLM integration. Designed to provide conversational assistance while exploring prompt engineering, backend APIs, and intelligent response generation. Currently being enhanced to improve answer quality and user experience.",
        tags: ["Python", "FastAPI", "AI", "LLM", "SQLite"],
        image: "/project1.jpg",
        github: "https://github.com/kundandr05/Zeno_chatbot",
        demo: "#",
        keyFeatures: [
            "Context-aware conversational interactions",
            "Prompt engineering for optimized responses",
            "FastAPI backend for low-latency API integration"
        ],
        architecture: "The application uses a FastAPI backend connected to an SQLite database for session storage, with intelligent querying directed to a modern LLM API.",
        challenges: "Integrating the LLM API efficiently while maintaining fast response times required careful asynchronous programming.",
        futureImprovements: "Implement user authentication and save long-term conversational memory using vector databases."
    },
    {
        slug: "agentic-ai-tournament-management-system",
        title: "Agentic AI Tournament Management System",
        description: "Research-based multi-agent tournament management platform that automates scheduling, team registration, match coordination, and intelligent workflow execution using Agentic AI principles.",
        tags: ["Python", "FastAPI", "SQLite", "Agentic AI", "Research"],
        image: "/project2.jpg",
        github: "#",
        githubLabel: "Private Team Project",
        demo: "#",
        keyFeatures: [
            "Autonomous multi-agent scheduling and coordination",
            "Automated team registration and validation workflows",
            "Real-time match state tracking"
        ],
        architecture: "Built on a multi-agent framework where distinct agents handle scheduling, user interaction, and data validation, orchestrated via a FastAPI backend.",
        challenges: "Ensuring distinct agents communicated correctly without race conditions required robust state management.",
        futureImprovements: "Expand the system to handle multi-tier bracket tournaments and integrate a live scoreboard UI."
    },
    {
        slug: "erp-student-management-system",
        title: "ERP Student Management System",
        description: "ERP solution developed during Innovathon to streamline academic and administrative workflows through centralized student management, attendance tracking, and communication modules.",
        tags: ["Python", "Database", "ERP", "System Design"],
        image: "/project3.jpg",
        github: "#",
        githubLabel: "Private Team Project",
        demo: "#",
        keyFeatures: [
            "Centralized student record management",
            "Automated attendance tracking and reporting",
            "Faculty and student communication portals"
        ],
        architecture: "A monolithic architecture using Python and a relational database optimized for fast queries and secure data isolation.",
        challenges: "Designing a schema that efficiently supported both administrative broad queries and specific student views.",
        futureImprovements: "Migrate the frontend to Next.js and implement real-time push notifications."
    },
    {
        slug: "personal-portfolio-website",
        title: "Personal Portfolio Website",
        description: "Modern portfolio built with Next.js showcasing projects, research publications, technical skills, and professional achievements.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio"],
        image: "/project4.jpg",
        github: "https://github.com/kundandr05/portfolio",
        demo: "#",
        keyFeatures: [
            "Server-side rendering for optimal SEO and performance",
            "Framer Motion animations for engaging UI/UX",
            "Responsive and accessible cyber/neon design system"
        ],
        architecture: "A Next.js 14 App Router application leveraging Tailwind CSS for styling and deployed on Vercel.",
        challenges: "Creating highly customized Framer Motion animations that performed smoothly across mobile devices.",
        futureImprovements: "Add a headless CMS to manage project content dynamically."
    }
];
