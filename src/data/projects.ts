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
    videoUrl?: string;
    youtubeUrl?: string;
    keyFeatures?: string[];
    architecture?: string;
    challenges?: string;
    futureImprovements?: string;
}

export const projects: Project[] = [
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
        slug: "learning-management-system",
        title: "Learning Management System (LMS)",
        description: "A comprehensive Learning Management System built to facilitate online education, course management, and student engagement.",
        tags: ["React", "LMS", "Web App", "Vercel"],
        image: "/project3.jpg",
        github: "https://github.com/kundandr05/Ravikumar-lms",
        demo: "https://ravikumar-lms.vercel.app/",
        demoLabel: "Live Demo",
        youtubeUrl: "https://youtu.be/Cy9P7ElcsvU?si=XJdITCEoDqAy35vY",
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
        slug: "zeno-ai",
        title: "Zeno AI: Intelligent Multi-Modal Assistant",
        description: "Built a multimodal AI assistant supporting real-time web intelligence and vision analysis with secure Firebase authentication. Implemented dynamic model routing between Gemini 2.5 Flash and Perplexity.",
        tags: ["React", "Vite", "OpenRouter API", "Firebase Auth", "Render"],
        image: "/project-zeno.png",
        videoUrl: "/placeholder-video.mp4",
        github: "https://github.com/kundandr05/Zeno_chatbot",
        demo: "https://zeno-chatbot-k46i.onrender.com/",
        demoLabel: "Live on Render",
        keyFeatures: [
            "Dynamic AI Routing Engine utilizing Perplexity and Gemini 2.5 Flash",
            "Automated fallback handling for resilient AI responses",
            "Secure Firebase Authentication",
            "Premium Glassmorphism UI with vibrant aurora gradients"
        ],
        architecture: "Frontend built with React.js and Vite. Features dynamic routing between Perplexity for text/web search and Gemini 2.5 Flash for vision analysis, deployed on Render.",
        challenges: "Engineering custom routing logic to dynamically switch between different LLMs based on user input context while ensuring resilient API fallback handling.",
        futureImprovements: "Expand the dynamic routing logic to support a wider array of specialized local and cloud models and implement long-term conversational memory using vector databases."
    },
    {
        slug: "agentic-ai-tournament-management-system",
        title: "Agentic AI-Based Tournament Management System",
        description: "Developed an AI-powered tournament management platform using an agentic architecture to automate registration, scheduling, and match coordination. Completed core features within a 3-day hackathon.",
        tags: ["Python", "FastAPI", "SQLite", "Agentic AI", "Hackathon"],
        image: "/project2.jpg",
        videoUrl: "/placeholder-video2.mp4",
        github: "#",
        githubLabel: "Hebbale Academy Hackathon",
        demo: "#",
        keyFeatures: [
            "Autonomous multi-agent scheduling and coordination",
            "Automated team registration and validation workflows",
            "Backend APIs and robust database integration"
        ],
        architecture: "Built on a multi-agent framework orchestrating interactions via a FastAPI backend and SQLite database.",
        challenges: "Ensuring distinct agents communicated correctly without race conditions within strict 3-day hackathon limits.",
        futureImprovements: "Expand the system to handle multi-tier bracket tournaments and integrate a live scoreboard UI."
    }
];
