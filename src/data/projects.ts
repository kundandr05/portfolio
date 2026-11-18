export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description?: string;
  category: "Flagship" | "Autonomous AI" | "Full-Stack" | "Open Source";
  date: string;
  problem: string;
  built: string;
  result: string;
  tags: string[];
  image: string;
  github?: string;
  githubLabel?: string;
  demo?: string;
  demoLabel?: string;
  youtubeUrl?: string;
  futureImprovements?: string;
  role: string;
  timeline: string;
  keyFeatures: string[];
  architecture: string;
  challenges: string;
  outcome: string;
  color: "tomato" | "yellow" | "green" | "blue";
  rotation: string; // e.g. "-rotate-1", "rotate-2" for scrapbook feel
}

export const projects: Project[] = [
  {
    slug: "dispatchgrid",
    title: "DispatchGrid",
    tagline: "Autonomous Field Workforce Dispatch & Recovery Engine",
    category: "Flagship",
    date: "2026",
    problem: "Real-world field services face chaotic disruptions—technician cancellations, emergency priority jobs, and skill mismatches turn schedules into unmanageable logjams.",
    built: "Built an autonomous dispatch engine enforcing 7 operational constraints with greedy heuristics, 2-opt route optimization, and live Groq LPU intent parsing.",
    result: "Instant schedule rebalancing during disruptions, Leaflet geospatial visualization, and SHA-256 tamper-evident audit logs.",
    tags: ["React", "TypeScript", "Node.js", "Express", "Prisma", "Groq AI", "Leaflet", "Render"],
    image: "/project-dispatchgrid.png",
    github: "https://github.com/kundandr05/ByteForge_H4H",
    githubLabel: "ByteForge H4H",
    demo: "https://byteforge-h4h.onrender.com",
    demoLabel: "Live on Render",
    role: "Lead Full-Stack & Algorithm Engineer",
    timeline: "Hackathon & Production Iteration (2026)",
    keyFeatures: [
      "Constraint solver balancing technician skills, shift limits, customer priority, and geographic proximity in under 400ms",
      "Dynamic disruption recovery engine automatically reassigning pending tickets when a technician calls out",
      "Groq LPU conversational AI assistant for booking creation, urgency extraction, and customer intent parsing",
      "Geospatial dispatch map with real-time cluster visualization and route overlays using Leaflet",
      "Multi-role RBAC portals (Field Tech, Operations Dispatcher, End Customer) with SHA-256 audit chaining"
    ],
    architecture: "React + TypeScript frontend consuming Express.js REST API with Prisma ORM and SQLite. Groq Cloud LPU handles sub-second LLM intent parsing; background solvers execute 2-opt trajectory optimization.",
    challenges: "Handling NP-hard vehicle routing constraints within interactive web timeouts. Solved using partitioned greedy clustering followed by local 2-opt edge-exchange heuristics.",
    outcome: "Presented at ByteForge hackathon, currently deployed live on Render with active technician and dispatcher simulation workflows.",
    color: "tomato",
    rotation: "-rotate-1"
  },
  {
    slug: "zeno-ai-multimodal-assistant",
    title: "Zeno AI",
    tagline: "Multi-Modal Intelligence Assistant with Dynamic LLM Routing",
    category: "Flagship",
    date: "2026",
    problem: "Single-model assistants often suffer from hallucinated real-time facts or lack native multi-modal image interpretation without exorbitant API costs.",
    built: "Engineered a dual-engine AI assistant with intelligent request routing between Perplexity (real-time live web retrieval) and Gemini 1.5 (deep vision reasoning).",
    result: "Sub-second query classification, zero-friction multimodal image queries, and a custom Markdown code-highlighting canvas.",
    tags: ["JavaScript", "FastAPI", "Perplexity API", "Google Gemini", "WebSockets", "CSS3"],
    image: "/project-zeno.png",
    github: "https://github.com/kundandr05/Zeno_chatbot",
    githubLabel: "kundandr05/Zeno_chatbot",
    demo: "https://zeno-chatbot-k46i.onrender.com/",
    demoLabel: "Live on Render",
    role: "Creator & AI Engineer",
    timeline: "2026",
    keyFeatures: [
      "Dynamic prompt intent router classifying input into real-time search queries vs vision/code synthesis",
      "Perplexity API integration for verified citations and grounded search results",
      "Google Gemini multimodal pipeline processing high-resolution visual documents and code screenshots",
      "Streaming responses with real-time markdown token rendering and copyable code blocks",
      "Lightweight responsive client built without bulky UI libraries for 60fps mobile execution"
    ],
    architecture: "FastAPI asynchronous backend managing connection pooling and API tokens. Dynamic routing middleware evaluates prompt heuristics to invoke either Gemini 1.5 Pro or Perplexity Sonar endpoints.",
    challenges: "Managing rate-limiting, error fallbacks, and multi-modal image buffer serialization across asynchronous HTTP streams.",
    outcome: "Deployed live on Render with hundreds of student users using it for daily technical queries, code debugging, and document summarization.",
    color: "blue",
    rotation: "rotate-1"
  },
  {
    slug: "agentic-ai-tournament-management-system",
    title: "Agentic Tournament Manager",
    tagline: "Autonomous Multi-Agent Sports Tournament Coordinator",
    category: "Flagship",
    date: "2026",
    problem: "Collegiate and regional tournaments collapse under manual scheduling chaos: weather cancellations, referee conflicts, and tie-breaker disputes.",
    built: "Designed a multi-agent coordination architecture where specialized agents autonomously handle fixture generation, referee assignments, scoring, and bracket progressions.",
    result: "Published peer-reviewed research in IJCRT (July 2026); eliminated manual scheduling errors in multi-stage tournament simulations.",
    tags: ["Python", "FastAPI", "Agentic AI", "Multi-Agent Coordination", "SQLite", "Research"],
    image: "/project3.jpg",
    github: "https://github.com/kundandr05/Tournament_management",
    githubLabel: "Tournament Repo",
    demo: "https://ijcrt.org/papers/IJCRT2607147.pdf",
    demoLabel: "Read Published Paper",
    role: "Lead Researcher & Core Architect",
    timeline: "Research & Implementation (2026)",
    keyFeatures: [
      "Coordinator Agent orchestrating downstream specialized agents via asynchronous event queues",
      "Dynamic fixture rebalancer adjusting knockouts and round-robin matrices when games get delayed",
      "Referee eligibility agent preventing double-booking and tracking certification levels",
      "Auditable match-result verification pipeline with conflict escalation protocols",
      "Full academic documentation with mathematical scheduling modeling"
    ],
    architecture: "Python/FastAPI multi-agent service layer with SQLite storage. Event-driven internal communication triggers automated state updates across tournament brackets.",
    challenges: "Ensuring deterministic state consensus when multiple tournament agents simultaneously propose timetable adjustments upon inclement weather alerts.",
    outcome: "Formally accepted and published in the International Journal of Creative Research Thoughts (IJCRT, Volume 14, Issue 7, July 2026).",
    color: "green",
    rotation: "-rotate-2"
  },
  {
    slug: "krishna-leela-chatbot",
    title: "Krishna Leela Chatbot",
    tagline: "Multilingual Mythological Narrative AI",
    category: "Autonomous AI",
    date: "2025",
    problem: "Traditional storytelling apps lack conversational context, making ancient philosophical epics inaccessible to modern multilingual readers.",
    built: "Created a conversational narrative companion using Google Gemini API and responsive Vanilla JavaScript with contextual cultural grounding.",
    result: "Interactive multilingual Q&A, cultural context explanations, and zero-dependency lightweight client architecture.",
    tags: ["JavaScript", "HTML5", "CSS3", "Google Gemini API", "Vercel"],
    image: "/project-krishnaleela.png",
    github: "https://github.com/kundandr05/KrishnaLeela",
    githubLabel: "KrishnaLeela Repo",
    demo: "https://krishna-leela.vercel.app/",
    demoLabel: "Live Demo",
    role: "Full-Stack Developer",
    timeline: "2025",
    keyFeatures: [
      "System prompt persona engineering preserving compassionate, philosophical storytelling voice",
      "Multilingual dialogue support across English, Kannada, and Hindi",
      "Lightweight zero-dependency DOM rendering for instant page load on 3G connections"
    ],
    architecture: "Serverless frontend deployed on Vercel connecting securely to Google Gemini REST endpoints with structured dialogue memory.",
    challenges: "Preventing modern colloquial slang from breaking the serene, historically grounded tone of the character.",
    outcome: "Popular cultural exploration tool used by peers and family, deployed stably with zero server maintenance.",
    color: "yellow",
    rotation: "rotate-1"
  },
  {
    slug: "ollama-local-ai-chatbot",
    title: "Ollama Local AI Chatbot",
    tagline: "Privacy-Preserving Offline LLM Assistant with Web Search",
    category: "Open Source",
    date: "2025",
    problem: "Cloud LLMs introduce privacy risks and recurring subscription costs for students handling private codebases and local notes.",
    built: "Built an entirely local, self-hosted web UI connecting directly to Ollama runtimes (Llama 3, Mistral, Qwen) with optional live web retrieval.",
    result: "Complete data sovereignty, zero token bills, offline-first execution, and streaming markdown output.",
    tags: ["Python", "Ollama", "FastAPI", "WebSockets", "Local AI", "Tailwind CSS"],
    image: "/project-ollama.png",
    github: "https://github.com/kundandr05/ollama-chatbot",
    githubLabel: "kundandr05/ollama-chatbot",
    demo: "https://kundan-ollama-chatbot.vercel.app/",
    demoLabel: "Live Demo",
    role: "Open Source Creator",
    timeline: "2025",
    keyFeatures: [
      "Direct WebSocket streaming from local Ollama instances on localhost:11434",
      "Model switcher supporting instant hot-swapping between Mistral, Llama 3, and Phi-3",
      "Optional privacy-focused search augmentation fetching fresh web snippets without telemetry"
    ],
    architecture: "FastAPI server relaying requests to local Ollama daemon. Client manages markdown parsing, code highlighting, and local conversation persistence in IndexedDB.",
    challenges: "Handling memory throttling on laptops with limited VRAM while maintaining fluid token streaming.",
    outcome: "Open-source daily driver utilized for private study sessions and offline coding on the go.",
    color: "blue",
    rotation: "-rotate-1"
  },
  {
    slug: "college-management-system-lms",
    title: "Campus LMS & Academic Portal",
    tagline: "Integrated Course, Attendance & Grade Management",
    category: "Full-Stack",
    date: "2025",
    problem: "Siloed college departments juggle disparate spreadsheets for attendance, internal marks, and assignment distribution.",
    built: "Engineered an all-in-one academic portal with role-based access for students, professors, and administrative staff.",
    result: "Centralized attendance calculations, PDF report exports, and automated deficiency alerts.",
    tags: ["React", "Node.js", "Express", "MongoDB", "JWT Auth", "REST API"],
    image: "/project6.png",
    github: "https://github.com/kundandr05/college_management_system",
    githubLabel: "LMS Repo",
    role: "Backend & Database Architect",
    timeline: "2025",
    keyFeatures: [
      "Role-Based Access Control (Admin, Faculty, Student) secured with JWT tokens and bcrypt hashing",
      "Automated attendance cutoff calculator warning students below 75% threshold",
      "Faculty grading interface with bulk CSV import and automated SGPA/CGPA computation"
    ],
    architecture: "MERN architecture with normalized MongoDB schema models and Express REST middleware with rate limiting.",
    challenges: "Designing normalized schemas capable of handling semester rollover and faculty reassignments without corrupting historical transcripts.",
    outcome: "Built as a comprehensive academic system project with full test coverage and database seeders.",
    color: "tomato",
    rotation: "rotate-2"
  },
  {
    slug: "personal-portfolio-website",
    title: "Handmade Scrapbook Portfolio",
    tagline: "Creative Sticker-Board Digital Garden",
    category: "Full-Stack",
    date: "2026",
    problem: "Most developer portfolios use identical dark-mode templates, neon glows, and AI-generated buzzwords with zero personal character.",
    built: "Hand-crafted a warm, tactile light-mode digital scrapbook featuring chunky outlines, interactive draggable stickers, Lenis smooth scroll, and genuine case studies.",
    result: "100% human-crafted feel, sub-second loads, 0 TypeScript/ESLint warnings, and memorable recruiter engagement.",
    tags: ["Next.js 16", "TypeScript", "Tailwind CSS v4", "Framer Motion", "Lenis"],
    image: "/project4.png",
    github: "https://github.com/kundandr05/portfolio",
    githubLabel: "Source Code",
    demo: "https://kundandr-portfolio.vercel.app/",
    demoLabel: "Live Site",
    role: "Designer & Engineer",
    timeline: "2026",
    keyFeatures: [
      "Scrapbook aesthetics with chunky 2px borders, hard offset shadows, and washi-tape photo frames",
      "Interactive draggable sticker badges visitors can pick up and rearrange in the hero",
      "Authentic 'Currently' telemetry strip tracking live reading, building, and local Mysuru time",
      "Full case study architecture with zero template shortcuts and genuine project narratives"
    ],
    architecture: "Next.js 16 App Router on React 19, styled with Tailwind CSS v4, animated with Framer Motion and Lenis smooth scroll.",
    challenges: "Balancing playful tactile styling with strict Lighthouse performance, accessible color contrast, and zero layout shift on mobile.",
    outcome: "Pushed to production on Vercel as Kundan's primary professional portfolio.",
    color: "yellow",
    rotation: "-rotate-1"
  }
];

export const flagshipProjects = projects.filter(p => p.category === "Flagship");
export const secondaryProjects = projects.filter(p => p.category !== "Flagship");
