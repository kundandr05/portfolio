export interface Project {
    slug: string;
    title: string;
    subtitle: string;
    role: string;
    timeline: string;
    featured: boolean;
    problem: string;
    built: string;
    result: string;
    tags: string[];
    image: string;
    github?: string;
    githubLabel?: string;
    demo?: string;
    demoLabel?: string;
    architecture?: string;
    challenges?: string;
    learnings?: string;
    keyFeatures?: string[];
}

export const projects: Project[] = [
    {
        slug: "dispatchgrid",
        title: "DispatchGrid",
        subtitle: "Autonomous Workforce Dispatch & Disruption Recovery Engine",
        role: "Full-Stack & Systems Developer",
        timeline: "2026",
        featured: true,
        problem: "Field service dispatchers struggle to re-route technicians in real-time when emergencies, traffic delays, or cancellations disrupt fixed morning schedules.",
        built: "Engineered an autonomous dispatch engine enforcing 7 operational constraints using greedy allocation heuristics, 2-opt route optimization, and Groq-accelerated AI intent parsing for automated bookings.",
        result: "Built full-stack MVP in 36 hours for Hack4Health with live geospatial Leaflet tracking, tamper-evident SHA-256 audit logs, and sub-second schedule recalculation deployed on Render.",
        tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Groq AI", "Leaflet"],
        image: "/project-dispatchgrid.png",
        github: "https://github.com/kundandr05/ByteForge_H4H",
        githubLabel: "Source Code",
        demo: "https://byteforge-h4h.onrender.com",
        demoLabel: "Live Demo",
        architecture: "React & TypeScript frontend interfacing with a Node.js/Express service layer. Schedule calculation runs locally in an algorithmic constraint solver using Prisma ORM with SQLite, integrating ultra-fast Groq LPU inference for natural language booking requests.",
        challenges: "Balancing multiple competing constraints simultaneously (technician skill matching, maximum shift hours, travel time matrix, and urgent ticket priority) without causing cascade delays across already-assigned routes.",
        learnings: "Heuristic 2-opt swaps provide practical near-optimal routes in milliseconds, making dynamic disruption recovery fast enough for live operations.",
        keyFeatures: [
            "Constraint-based scheduling engine with greedy heuristics & 2-opt route optimization",
            "Dynamic disruption recovery engine recalculating schedules upon cancellations or urgent emergencies",
            "Groq-powered conversational AI booking assistant for parsing customer intent",
            "Geospatial dispatch map with technician status tracking via Leaflet",
            "Tamper-evident audit trail with SHA-256 hash chaining"
        ]
    },
    {
        slug: "zeno-ai",
        title: "Zeno AI",
        subtitle: "Multimodal Assistant with Dynamic LLM Routing",
        role: "Creator & Frontend/API Engineer",
        timeline: "2025 – 2026",
        featured: true,
        problem: "Single-model chat interfaces either lack live web intelligence or struggle with multi-image comprehension, forcing users to switch across separate tools.",
        built: "Designed a multi-modal assistant that dynamically routes prompts to Perplexity for real-time web research and Google Gemini 2.5 Flash for vision and multimodal analysis, backed by Firebase authentication.",
        result: "Delivered a responsive web companion with automated fallback handling, persistent chat history, and fluid model switching deployed live on Render.",
        tags: ["React", "Vite", "OpenRouter API", "Gemini API", "Firebase Auth"],
        image: "/project-zeno.png",
        github: "https://github.com/kundandr05/Zeno_chatbot",
        githubLabel: "Source Code",
        demo: "https://zeno-chatbot-k46i.onrender.com/",
        demoLabel: "Live Demo",
        architecture: "Client built with React and Vite. Queries are analyzed client-side to determine context needs, then routed via OpenRouter to Perplexity (for grounded live facts) or Gemini 2.5 Flash (for image reasoning). User sessions and history are synced via Firebase.",
        challenges: "Designing robust failover routing when an upstream model API hits rate limits, ensuring users never see blank screens or cryptic JSON errors.",
        learnings: "Context classification at the client boundary allows mixing lightweight specialized models rather than relying on one expensive monolithic LLM.",
        keyFeatures: [
            "Dynamic query routing between Perplexity (live web search) and Gemini 2.5 Flash (vision)",
            "Automatic fallback handling for high API resilience",
            "Secure authentication and chat session persistence via Firebase",
            "Responsive, accessible interface designed for mobile and desktop"
        ]
    },
    {
        slug: "agentic-ai-tournament-management-system",
        title: "Tournament Management System",
        subtitle: "Autonomous Multi-Agent Sports & Fixtures Platform",
        role: "Lead Backend Developer & Researcher",
        timeline: "2025",
        featured: true,
        problem: "Managing tournament registrations, bracket generation, and schedule conflicts across multiple venues requires repetitive manual coordination and is prone to errors.",
        built: "Architected a multi-agent backend using FastAPI where autonomous agents coordinate team registration verification, bracket balancing, venue scheduling, and natural language query handling.",
        result: "Prototyped during a 3-day hackathon and formalized into a peer-reviewed research paper published in the International Journal of Creative Research Thoughts (IJCRT).",
        tags: ["Python", "FastAPI", "SQLite", "Agentic AI", "Research"],
        image: "/paper-image.png",
        github: "https://github.com/kundandr05",
        githubLabel: "GitHub Repo",
        demo: "http://ijcrt.org/viewfull.php?&p_id=IJCRT2512785",
        demoLabel: "Read Published Paper",
        architecture: "FastAPI server running autonomous agent worker loops backed by SQLite. Agents exchange structured task messages to negotiate bracket pairings and slot allocations without human bottlenecks.",
        challenges: "Preventing race conditions when multiple agent tasks attempted to book overlapping venue slots simultaneously during high-concurrency match generation.",
        learnings: "Strict state machines and idempotent database transactions are essential for multi-agent systems to remain stable under unpredictable message ordering.",
        keyFeatures: [
            "Autonomous multi-agent scheduling and bracket coordination",
            "Automated team registration validation and venue booking",
            "FastAPI asynchronous REST API with SQLite database",
            "Basis for peer-reviewed publication in IJCRT (Dec 2025)"
        ]
    },
    {
        slug: "ollama-chatbot",
        title: "Ollama Local Chatbot",
        subtitle: "Privacy-First Desktop Interface for Local LLMs",
        role: "Sole Developer",
        timeline: "2025",
        featured: false,
        problem: "Users who want private, offline LLM inference lack a clean, lightweight interface that combines local models with optional web search.",
        built: "Created a local AI chat client in Python that connects directly to Ollama instances with token streaming and integrated DuckDuckGo live search capabilities.",
        result: "Delivered a zero-telemetry tool for running private LLMs completely on-device without cloud subscriptions.",
        tags: ["Python", "Ollama", "Local LLMs", "DuckDuckGo API"],
        image: "/project6.png",
        github: "https://github.com/kundandr05/ollama-chatbot",
        githubLabel: "Source Code",
        demo: "https://kundan-ollama-chatbot.vercel.app",
        demoLabel: "Live Demo",
        architecture: "Python frontend communicating over HTTP with local Ollama daemon, streaming tokens directly to UI with local conversation state caching.",
        challenges: "Smoothly rendering real-time streaming tokens without UI stutter when the host CPU was under heavy inference load.",
        learnings: "Decoupling token reception from DOM redraws is critical for low-spec machines running local quant models.",
        keyFeatures: [
            "Direct local connection to Ollama models (Llama, Mistral, Gemma)",
            "Real-time token streaming with conversation history",
            "Privacy-preserving web lookup integration"
        ]
    },
    {
        slug: "krishna-leela-chatbot",
        title: "Krishna Leela Chatbot",
        subtitle: "Multilingual Cultural Storytelling AI",
        role: "Frontend Developer",
        timeline: "2025",
        featured: false,
        problem: "Cultural folklore and traditional stories are often inaccessible across language boundaries for younger generations.",
        built: "Built a multilingual storytelling application that narrates stories of Lord Krishna in English, Kannada, Tamil, and Telugu using Google Gemini API streaming.",
        result: "Implemented in pure Vanilla JavaScript without heavyweight frameworks, achieving instant page load and zero runtime dependencies.",
        tags: ["Vanilla JS", "HTML5", "CSS3", "Gemini API"],
        image: "/project5.png",
        github: "https://github.com/kundandr05/KrishnaLeela",
        githubLabel: "Source Code",
        demo: "https://krishna-leela.vercel.app/",
        demoLabel: "Live Demo",
        architecture: "Zero-dependency client-side application streaming Gemini API responses directly into semantic HTML with custom story prompt engineering.",
        challenges: "Managing streaming UTF-8 text chunks correctly across regional Indic scripts without character tearing.",
        learnings: "Vanilla JavaScript remains an unbeatable choice for lightweight, high-performance interactive web tools.",
        keyFeatures: [
            "Storytelling across English, Kannada, Tamil, and Telugu",
            "Streaming responses using Gemini API",
            "Zero framework overhead with pure Vanilla JS"
        ]
    },
    {
        slug: "learning-management-system",
        title: "Learning Management System",
        subtitle: "Course Delivery & Progress Tracking Web App",
        role: "Full-Stack Developer",
        timeline: "2024",
        featured: false,
        problem: "Independent educators need simple, unbloated course delivery platforms without costly enterprise subscriptions.",
        built: "Developed a responsive web app for managing courses, tracking student lesson completions, and organizing modular educational content.",
        result: "Successfully deployed and tested with real course modules, featuring intuitive video lesson navigation.",
        tags: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
        image: "/project3.jpg",
        github: "https://github.com/kundandr05/Ravikumar-lms",
        githubLabel: "Source Code",
        demo: "https://ravikumar-lms.vercel.app/",
        demoLabel: "Live Demo",
        architecture: "React frontend structured around modular lesson layouts, user state persistence, and responsive video embeds.",
        challenges: "Structuring intuitive navigation that worked comfortably on mobile for students studying on phones.",
        learnings: "Clear visual progress cues significantly increase course completion rates.",
        keyFeatures: [
            "Modular course curriculum and lesson player",
            "Student progress tracking across modules",
            "Responsive dashboard optimized for mobile learning"
        ]
    },
    {
        slug: "personal-portfolio-website",
        title: "Personal Portfolio",
        subtitle: "Editorial Web Showcase & Case Study Hub",
        role: "Designer & Engineer",
        timeline: "2026",
        featured: false,
        problem: "Standard template portfolios look generic, hide real engineering decisions, and suffer from bloated third-party scripts.",
        built: "Designed this portfolio from the ground up using Next.js 16 App Router, TypeScript, and Tailwind CSS with custom design tokens, accessible semantic markup, and zero preloader delays.",
        result: "Fast, accessible, and lightweight portfolio scoring high on performance and mobile responsiveness.",
        tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/project4.png",
        github: "https://github.com/kundandr05/portfolio",
        githubLabel: "Source Code",
        demo: "https://kundandr-portfolio.vercel.app/",
        demoLabel: "Live Demo",
        architecture: "Next.js App Router with server components for static sections and lightweight client components for interactive filters and case studies.",
        challenges: "Refining visual hierarchy to look distinctly human-designed while maintaining strict TypeScript type safety and accessible contrast.",
        learnings: "Fewer decorative gimmicks and better typography consistently create a more memorable impression.",
        keyFeatures: [
            "Editorial typography and custom warm palette",
            "Zero preloader delay for immediate content access",
            "Comprehensive case study layouts for each project",
            "Accessible semantic HTML and responsive layouts"
        ]
    }
];
