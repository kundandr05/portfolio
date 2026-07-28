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
        slug: "learning-management-system",
        title: "Learning Management System (LMS)",
        description: "A comprehensive Learning Management System built to facilitate online education, course management, and student engagement.",
        tags: ["React", "LMS", "Web App", "Vercel"],
        image: "/project3.jpg",
        github: "https://github.com/kundandr05/Ravikumar-lms",
        demo: "https://ravikumar-lms.vercel.app/",
        demoLabel: "Live Demo",
        keyFeatures: [
            "Online course tracking and management",
            "Interactive student dashboard",
            "Seamless user authentication and progress saving"
        ],
        architecture: "Modern web application architecture designed for scalability and responsive user experience.",
        challenges: "Implementing a clean and intuitive UI that caters to both students and administrators.",
        futureImprovements: "Integrate AI-driven personalized learning paths and advanced analytics."
    },
    {
        slug: "krishna-leela-chatbot",
        title: "Krishna Leela Chatbot",
        description: "A divine storytelling AI chatbot that narrates stories of Lord Krishna in English, Kannada, Tamil, and Telugu, powered by Google Gemini API.",
        tags: ["Vanilla JS", "Gemini API", "HTML/CSS", "AI Chatbot"],
        image: "/project5.png",
        github: "https://github.com/kundandr05/KrishnaLeela",
        demo: "https://krishna-leela.vercel.app/",
        demoLabel: "Live Demo",
        keyFeatures: [
            "Multi-language support for diverse storytelling",
            "Real-time streaming responses using Google Gemini API",
            "Dynamic UI with suggestion chips and animations"
        ],
        architecture: "A pure frontend application leveraging Vanilla JavaScript to directly interface with the Google Gemini API without a backend.",
        challenges: "Securely managing API key configuration through localStorage and parsing streaming text responses in pure Vanilla JavaScript.",
        futureImprovements: "Integrate a lightweight Node.js backend to completely obscure the API key and manage context windows more efficiently."
    },
    {
        slug: "ollama-chatbot",
        title: "Ollama Chatbot",
        description: "A local, privacy-focused conversational AI interface that communicates directly with Ollama models running on your machine. Includes web search capabilities and real-time streaming.",
        tags: ["Python", "Ollama", "LLM", "Local AI"],
        image: "/project6.png",
        github: "https://github.com/kundandr05/ollama-chatbot",
        demo: "https://kundan-ollama-chatbot.vercel.app",
        demoLabel: "Live Demo",
        keyFeatures: [
            "Seamless integration with local Ollama models",
            "Real-time streaming responses with context history",
            "Live DuckDuckGo web search integration"
        ],
        architecture: "A Python application providing a clean UI layer that interfaces with the local Ollama API, allowing for completely offline, private AI conversations.",
        challenges: "Handling real-time token streaming and implementing robust connection checks for the local Ollama instance.",
        futureImprovements: "Add support for more specialized local models and enhance the RAG (Retrieval-Augmented Generation) pipeline."
    },
    {
        slug: "personal-portfolio-website",
        title: "Personal Portfolio Website",
        description: "Modern portfolio built with Next.js showcasing projects, research publications, technical skills, and professional achievements.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Portfolio"],
        image: "/project4.png",
        github: "https://github.com/kundandr05/portfolio",
        demo: "https://kundandr-portfolio.vercel.app/",
        demoLabel: "Live Demo",
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
