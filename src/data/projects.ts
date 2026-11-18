export interface CaseStudySlot {
  title: string;
  description: string;
  placeholderText: string;
}

export interface CaseStudyFlowStep {
  step: string;
  title: string;
  description: string;
  badge?: string;
}

export interface CaseStudyArchitectureRow {
  layer: string;
  technologies: string;
  details: string;
}

export interface CaseStudyChallenge {
  title: string;
  problem: string;
  whatIDid: string;
  result: string;
}

export interface EduAgentCaseStudy {
  overview: string;
  studentSide: {
    description: string;
    slots: CaseStudySlot[];
  };
  instructorSide: {
    description: string;
    slots: CaseStudySlot[];
  };
  security: string;
  agentFlow: CaseStudyFlowStep[];
  architectureTable: CaseStudyArchitectureRow[];
  challengeCards: CaseStudyChallenge[];
  whatILearnedTodo: string;
}

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
  eduAgentCaseStudy?: EduAgentCaseStudy;
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
    slug: "campus-os",
    title: "Campus OS",
    tagline: "AI-Powered Multi-Tenant College ERP & Academic Operating System",
    category: "Full-Stack",
    date: "2025 – 2026",
    problem: "Higher education institutions struggle with fragmented, manual spreadsheets across admissions, academic compliance, fee collection, and student performance tracking, creating administrative bottlenecks and lack of early warning for at-risk students.",
    built: "Architected Campus OS, a responsive, role-based college ERP bridging admissions, fee ledgers, digital attendance, and AI-driven dropout analytics with an instant zero-signup demo mode for Administrator, Faculty, and Student personas.",
    result: "Streamlined multi-tenant administration with CET/COMEDK merit branch allocation, UPI fee simulation with automated SMS reconciliation, 75% attendance threshold alerts, and dropout risk scoring.",
    tags: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "TanStack Query", "Firebase", "Recharts", "Vercel"],
    image: "/project-campusos.png",
    github: "https://github.com/HemalathaSV/campusos",
    githubLabel: "CampusOS Repo",
    demo: "https://campusos-alpha.vercel.app/",
    demoLabel: "Live Demo",
    role: "Lead Frontend & System Architect",
    timeline: "2025 – 2026",
    keyFeatures: [
      "Multi-Tier Institutional RBAC: Two-step authentication flow (domain verification + role credentials) and instant one-click demo authentication for Admin, Faculty, and Student personas",
      "Smart Admissions & Merit Allocation Engine: Dynamic CET / COMEDK rank evaluation algorithm calculating merit cutoffs, eligible engineering branches (CS, ECE, ME, CE), and annual tuition fees",
      "Fee Ledger & Simulated UPI Payment: Real-time student fee status tracking (Full Paid, Half Paid, Pending) with dynamic QR payment modal and simulated banking SMS reconciliation for instant receipt generation",
      "Digital Attendance Ledger: Classroom roll call interface with bulk marking and automated compliance flags for students below the mandatory 75% regulatory cutoff",
      "Predictive AI Insights & At-Risk Analytics: Multi-factor dropout risk scoring combining attendance, fee dues, and participation into high/medium/low early-warning recommendations for faculty",
      "Event-Driven Workflow Automation: Visual trigger-action pipelines automating fee reminders and low-attendance parent notifications",
      "Evaluator Demo Access: Pre-configured demo credentials provided for System Admin (admin@gmail.com / admin123), Faculty (ranjith.kc@gmail.com / faculty123), and Student (aarav1@gmail.com / student123) with domain mit@college.edu"
    ],
    architecture: "React 18 and TypeScript Single Page Application on Vite, styled with Tailwind CSS, Radix UI (Shadcn UI), and Recharts. State management and caching powered by TanStack React Query, backed by Firebase Auth, Cloud Firestore, and a unified client-side synchronization engine.",
    challenges: "Overcame SPA deep client routing 404s on serverless edge networks via custom Vercel rewrites and Netlify fallbacks. Resolved cross-module data fragmentation between Firestore and offline demo evaluation modes through a centralized data synchronization service.",
    outcome: "Deployed live on Vercel Edge Network with 200+ simulated student records, active multi-tier authentication, and fully interactive administration dashboards.",
    color: "tomato",
    rotation: "rotate-2"
  },
  {
    slug: "eduagent-adaptive-lms",
    title: "EduAgent — Adaptive Learning Management System",
    tagline: "An LMS that tells each student what to learn next, and sends them back to the basics when a quiz goes badly.",
    category: "Full-Stack",
    date: "2025",
    problem: "Most e-learning platforms are passive. Students watch videos in a fixed order with no feedback, so gaps go unnoticed and people drop out. EduAgent is an adaptive LMS with a rule-based agent that tracks quiz scores, lesson completion and study habits, then decides the student's next step.",
    built: "Built an adaptive LMS featuring a rule-based agent that manages dynamic student queues, course builder CMS with automated MCQ grading, human-in-the-loop priority override, and database-level Firestore security rules.",
    result: "Instant deterministic learning remediation, zero per-request LLM API costs, and robust role-based student and instructor data isolation.",
    tags: [
      "Next.js (App Router)",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Shadcn UI",
      "Radix",
      "Lucide",
      "Next.js API Routes",
      "Firebase Auth",
      "Cloud Firestore",
      "Firestore Security Rules",
      "Vercel"
    ],
    image: "/project-eduagent.png",
    github: "https://github.com/kundandr05/Ravikumar-lms",
    githubLabel: "Ravikumar-lms",
    demo: "https://ravikumar-lms.vercel.app/",
    demoLabel: "Live Demo",
    role: "Full-Stack Architect & Developer",
    timeline: "2025",
    keyFeatures: [
      "Student adaptive dashboard with dynamic Continue Learning, System Suggestions, and Instructor Action queues",
      "Automatic remediation engine locking next modules and queuing prerequisite videos when a quiz score drops below 50%",
      "Interactive study workspace with dedicated video player, timestamped bookmarks, and private per-lesson notes",
      "Instructor/Admin course CMS with downloadable assignments, automated MCQ grading, and human-in-the-loop priority task assignment",
      "Cohort analytics tracking test attempts, average scores, and curriculum completion rates",
      "Firestore Security Rules enforcing database-layer authorization using request.auth.uid and role validation"
    ],
    architecture: "Next.js App Router on React 19, styled with Tailwind CSS and Shadcn UI. Next.js API Routes coordinate serverless backend logic, while Firebase Auth and Cloud Firestore handle user state, progress tracking, and security rule enforcement.",
    challenges: "Handling multi-collection Firestore dashboard hydration without SQL joins (solved via Promise.allSettled) and deterministic adaptive routing with zero LLM API costs.",
    outcome: "Deployed live on Vercel with active student study queues, automated quiz grading, and role-based permissions.",
    color: "green",
    rotation: "-rotate-1",
    eduAgentCaseStudy: {
      overview: "Most e-learning platforms are passive. Students watch videos in a fixed order with no feedback, so gaps go unnoticed and people drop out. EduAgent is an adaptive LMS with a rule-based agent that tracks quiz scores, lesson completion and study habits, then decides the student's next step.",
      studentSide: {
        description: "Adaptive dashboard with queues (Continue Learning, System Suggestions, Instructor Action Items). If a student scores below 50% on a module test, the agent puts prerequisite videos first before they can move on. Study workspace with a video player, timestamped bookmarks and private notes.",
        slots: [
          {
            title: "Student Dashboard",
            description: "Shows dynamic Continue Learning queue, System Suggestions, and study workspace with timestamped bookmarks.",
            placeholderText: "TODO: Screenshot of Student Dashboard (to be supplied by Kundan)"
          },
          {
            title: "Quiz Result with Remediation",
            description: "Displays <50% score lock and prerequisite remedial video injection before subsequent module unlocking.",
            placeholderText: "TODO: Screenshot of Quiz Result with Remediation (to be supplied by Kundan)"
          }
        ]
      },
      instructorSide: {
        description: "Course and module builder (CMS), video lessons, downloadable assignments, MCQ quizzes with automatic grading, a human-in-the-loop panel to push priority tasks to a student or a batch, and analytics on attempts, average scores and completion.",
        slots: [
          {
            title: "Instructor Panel",
            description: "CMS for course modules, downloadable assignments, and a human-in-the-loop panel to push priority tasks to a student or batch.",
            placeholderText: "TODO: Screenshot of Instructor Panel (to be supplied by Kundan)"
          },
          {
            title: "Analytics",
            description: "Aggregated attempt telemetry, average quiz scores, and student lesson completion metrics.",
            placeholderText: "TODO: Screenshot of Analytics (to be supplied by Kundan)"
          }
        ]
      },
      security: "Role-based access with Firestore Security Rules that check request.auth.uid and role documents, so admin writes and other students' notes and submissions are blocked at the database layer.",
      agentFlow: [
        {
          step: "01",
          title: "MCQ Quiz Submitted",
          description: "Student completes a module test; answers are evaluated and graded instantaneously.",
          badge: "Trigger"
        },
        {
          step: "02",
          title: "Rule-Based Threshold Check",
          description: "Deterministic evaluation against the 50% cutoff benchmark with zero per-request LLM API cost.",
          badge: "Evaluation"
        },
        {
          step: "03",
          title: "Remedial Lessons Queued",
          description: "Score < 50% locks progression and puts foundational prerequisite lessons at the top of the Continue Learning queue.",
          badge: "Branching"
        },
        {
          step: "04",
          title: "Progression Unlocked",
          description: "Upon reviewing remedial videos and retaking the quiz above threshold, progression is unlocked.",
          badge: "Unlock"
        }
      ],
      architectureTable: [
        {
          layer: "Frontend Framework",
          technologies: "Next.js (App Router), React, TypeScript",
          details: "Fast SSR, static pre-rendering, and modular client component boundaries"
        },
        {
          layer: "UI & Component Library",
          technologies: "Tailwind CSS, Shadcn UI, Radix, Lucide",
          details: "Accessible component primitives and responsive design tokens"
        },
        {
          layer: "Backend & API Layer",
          technologies: "Next.js API Routes",
          details: "Serverless endpoints handling secure operations and server-side logic"
        },
        {
          layer: "Authentication",
          technologies: "Firebase Auth",
          details: "Secure role-based email/password authentication & session tokens"
        },
        {
          layer: "Database & Security",
          technologies: "Cloud Firestore, Firestore Security Rules",
          details: "Granular DB-level authorization via request.auth.uid and role doc verification"
        },
        {
          layer: "Deployment",
          technologies: "Vercel",
          details: "Edge network distribution with automated production CI/CD"
        }
      ],
      challengeCards: [
        {
          title: "No joins in Firestore",
          problem: "Dashboard needs profile, progress, quiz results and recommendations concurrently.",
          whatIDid: "I fetched them in parallel with Promise.allSettled so one slow or failed call doesn't block the page.",
          result: "Dashboard loads resiliently without cascading blocking delays."
          // TODO: measured dashboard load improvement: [Kundan to provide verified benchmark % - leave out of UI until confirmed]
        },
        {
          title: "Smart routing without LLM cost",
          problem: "Need intelligent dynamic curriculum adaptations without incurring recurring per-token LLM API latency and expense.",
          whatIDid: "I made the agent rule-based, computing thresholds when a test is submitted.",
          result: "Results are deterministic, instant, and have zero per-request API cost."
        },
        {
          title: "Access control",
          problem: "Preventing cross-student private note leakage and unauthorized instructor content mutations.",
          whatIDid: "Wrote custom Firestore Security Rules for ownership and roles checking request.auth.uid and role documents.",
          result: "Admin writes and other students' notes and submissions are blocked directly at the database layer."
        }
      ],
      whatILearnedTodo: "TODO: Kundan to write 2 lines on key takeaways from building EduAgent"
    }
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
