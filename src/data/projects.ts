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

export interface DispatchGridBenchmark {
  metric: string;
  measuredResult: string;
  significance: string;
}

export interface DispatchGridDisruptionScenario {
  scenario: string;
  label: string;
  description: string;
}

export interface DispatchGridInterviewQA {
  question: string;
  answer: string;
}

export interface DispatchGridCaseStudy {
  resumeOneLiner: string;
  elevatorPitch30s: string;
  technicalDeepDive2m: string;
  benchmarks: DispatchGridBenchmark[];
  hardConstraints: string[];
  disruptionScenarios: DispatchGridDisruptionScenario[];
  concurrencyHardening: {
    title: string;
    description: string;
  }[];
  interviewQA: DispatchGridInterviewQA[];
  screenshotSlots: CaseStudySlot[];
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
  dispatchGridCaseStudy?: DispatchGridCaseStudy;
}

export const projects: Project[] = [
  {
    slug: "dispatchgrid",
    title: "DispatchGrid",
    tagline: "Intelligent Workforce Scheduling & Real-Time Disruption Recovery Engine",
    category: "Flagship",
    date: "2026",
    problem: "In field service management, operations constantly face chaotic real-world disruptions—delays, traffic, cancellations, and skill mismatches turn schedules into unmanageable logjams.",
    built: "Engineered an automated, constraint-aware workforce scheduling and 2-Opt local search route optimization engine that schedules 1,000 service jobs across 100 technicians in 244ms with 100% hard constraint compliance, 0 route overlaps, and an autonomous disruption recovery engine resolving operational shocks in 1–3ms.",
    result: "40.0% travel transit reduction via 2-Opt reordering, 66.6% workload variance reduction, and instant reactive replanning across 6 failure modes without human dispatcher bottleneck.",
    tags: ["Node.js", "TypeScript", "React 18", "Express.js", "Prisma ORM", "SQLite (WAL)", "2-Opt Algorithm", "Vitest", "Tailwind CSS", "Recharts"],
    image: "", // Empty per user instruction ("for cover image leave empty")
    github: "https://github.com/kundandr05/ByteForge_H4H",
    githubLabel: "kundandr05/ByteForge_H4H",
    role: "Lead Software Engineer & System Architect",
    timeline: "2026",
    keyFeatures: [
      "Pure In-Memory Constraint Solver: Schedules 1,000 service jobs across 100 technicians in 244ms with 100% adherence across 7 mandatory hard constraints",
      "Assignment Optimization Layer: 2-Opt intra-route reordering cuts transit deadhead by 40.0% and balances technician workload variance by 66.6%",
      "Autonomous Disruption Recovery: Instant reactive replanning in 1–3ms across 6 failure modes (illness, emergency break-in, duration change, cancellation, delays)",
      "Full Decision Explainability: 'Why This Technician?' multi-factor scorecards and candidate rejection root-cause diagnostics",
      "Enterprise SQLite Hardening: WAL mode with custom executeWithRetry exponential backoff jitter and idempotent request deduplication",
      "Comprehensive Test Suite: 99 automated tests across 12 suites (100% pass) spanning stress tests, edge cases A–L, and React Testing Library integration"
    ],
    architecture: "Decoupled Modular Monorepo with Hexagonal Architecture. Node.js/Express backend with pure in-memory algorithmic solvers, Prisma ORM, and SQLite WAL persistence. React 18 frontend built with Vite, Tailwind CSS, Recharts, and Lucide React.",
    challenges: "Handling SQLite single-writer lock contention during concurrent write spikes (resolved via randomized exponential backoff jitter) and guaranteeing zero route regressions during multi-neighborhood local search.",
    outcome: "High-throughput distributed systems platform verified through 99 automated test suites with 100% constraint adherence and 0 double-bookings.",
    color: "tomato",
    rotation: "-rotate-1",
    dispatchGridCaseStudy: {
      resumeOneLiner: "Built an automated, constraint-aware workforce scheduling and real-time replanning engine that schedules 1,000 service jobs across 100 technicians in 244ms with 100% hard constraint compliance and 0 route overlaps.",
      elevatorPitch30s: "DispatchGrid is an enterprise workforce scheduling platform designed for mission-critical field operations. Rather than just being a CRUD dashboard, it features a pure algorithmic constraint solver, a 2-Opt local search route optimizer, and an autonomous disruption recovery engine that replans routes in under 5 milliseconds when technicians call in sick, emergencies break in, or jobs overrun. It also features a fully interactive React Gantt operations dashboard and an AI explainability modal breaking down every single scheduling decision.",
      technicalDeepDive2m: "In field service management, operations constantly face chaotic real-world disruptions—delays, traffic, cancellations, and skill mismatches. DispatchGrid solves this in three decoupled layers: A deterministic scheduling engine that factors in multi-skill matching, geographical service zones, transit matrices, and SLA deadlines; an optimization engine leveraging 2-Opt intra-route swaps and technician workload balancing, reducing average travel time by 40% and workload standard deviation by 66%; and an autonomous disruption recovery engine supporting 6 real-time operational failure modes with zero downtime. The entire system is backed by a transactional SQLite WAL persistence layer with exponential backoff retries, complete idempotency deduplication, and a rich React operations dashboard.",
      benchmarks: [
        {
          metric: "Scheduling Speed",
          measuredResult: "244 ms for 1,000 jobs across 100 technicians",
          significance: "High-throughput sub-second response under enterprise scale"
        },
        {
          metric: "Memory Efficiency",
          measuredResult: "25.73 MB peak heap memory",
          significance: "Ultra-lightweight algorithmic memory footprint"
        },
        {
          metric: "Hard Constraint Adherence",
          measuredResult: "100.0% across all test runs",
          significance: "Zero labor violation risks (skill gaps, shift breaches, SLA breaks)"
        },
        {
          metric: "Route Overlaps",
          measuredResult: "Strictly 0",
          significance: "Mathematically guaranteed double-booking prevention"
        },
        {
          metric: "Travel Time Reduction",
          measuredResult: "40.0% reduction via 2-Opt intra-route swap",
          significance: "Eliminates geographic crisscross / zigzag transit inefficiencies"
        },
        {
          metric: "Workload Balancing",
          measuredResult: "66.6% variance reduction (106.1 min down to 35.4 min)",
          significance: "Balances technician shifts and prevents employee burnout"
        },
        {
          metric: "Recovery Resolution Latency",
          measuredResult: "1 to 3 ms per disruption event",
          significance: "Instant autonomous replanning without human dispatcher bottleneck"
        },
        {
          metric: "Test Coverage & Reliability",
          measuredResult: "99 automated tests across 12 suites (100% pass)",
          significance: "Stress tests, edge cases A–L, SQLite concurrency, and RTL UI tests"
        }
      ],
      hardConstraints: [
        "Required skill certifications & technician qualification matching",
        "Geographical service zone boundaries & transit radius eligibility",
        "Working shift boundaries (including midnight-crossing shift handling)",
        "Pre-existing technician commitments & unavailability blocks",
        "Round-trip transit travel buffers & geographic proximity constraints",
        "Customer promised time-window boundaries",
        "Strict SLA contractual deadlines"
      ],
      disruptionScenarios: [
        {
          scenario: "TECHNICIAN_UNAVAILABLE",
          label: "Technician Callout / Sickness",
          description: "Automated cascading reassignment of pending work orders to eligible backup peers without breaking existing promises."
        },
        {
          scenario: "URGENT_JOB_ARRIVAL",
          label: "Emergency Break-In Job",
          description: "High-priority emergency slotting into compacted gaps without breaching downstream customer SLAs."
        },
        {
          scenario: "JOB_DURATION_CHANGED",
          label: "Job Scope Expansion",
          description: "Dynamic downstream window sliding and buffer adaptation when on-site diagnosis extends scope."
        },
        {
          scenario: "JOB_CANCELLED",
          label: "Customer Cancellation",
          description: "Immediate appointment removal followed by opportunistic route compaction and idle gap reclamation."
        },
        {
          scenario: "EARLY_COMPLETION",
          label: "Early Finish Optimization",
          description: "Pulls downstream work forward dynamically to minimize technician deadhead and idle waiting."
        },
        {
          scenario: "DELAYED_COMPLETION",
          label: "Traffic / On-Site Delay",
          description: "Safe forward delay propagation ensuring 0 route overlaps across subsequent commitments."
        }
      ],
      concurrencyHardening: [
        {
          title: "Exponential Backoff with Jitter",
          description: "Custom transactionService.executeWithRetry intercepts SQLITE_BUSY, P2034, and P1008 timeout errors and applies randomized jitter to eliminate lock starvation under concurrent load."
        },
        {
          title: "Atomic Midway Rollback Guarantee",
          description: "Multi-table atomic database transactions ensure zero orphan state records if any assignment or rebalancing step fails midway."
        },
        {
          title: "Transparent Idempotency Deduplication",
          description: "All mutating requests pass unique Idempotency-Key headers; concurrent or retried identical requests return cached responses with zero double-processing."
        }
      ],
      interviewQA: [
        {
          question: "Why did you use SQLite instead of PostgreSQL or MongoDB?",
          answer: "I chose SQLite in WAL (Write-Ahead Logging) mode to create a self-contained, zero-configuration engine with near-zero latency for local reads. SQLite allows multiple concurrent readers, but has a single-writer lock. To make this production-resilient, I built transactionService.executeWithRetry, which intercepts SQLITE_BUSY, P2034, and P1008 timeout errors and applies randomized exponential backoff jitter. This allowed our system to handle concurrent write spikes without deadlocks while remaining completely portable."
        },
        {
          question: "How does the optimization engine avoid getting stuck in local minima?",
          answer: "The optimization engine uses a multi-neighborhood candidate move generator. Instead of just swapping consecutive jobs, it explores three complementary neighborhoods: (1) intra-route 2-opt reordering to untangle geographic zigzags, (2) inter-technician reassignments to balance overloaded shifts, and (3) opportunistic insertion of previously unassigned high-priority jobs. By evaluating a composite objective function that balances SLA urgency, travel time, workload standard deviation, and schedule stability, we guarantee monotonically improving quality scores without schedule regression."
        },
        {
          question: "How do you guarantee that ongoing or completed work isn't cancelled during a disruption?",
          answer: "We implemented an explicit job lifecycle state machine. COMPLETED and IN_PROGRESS assignments are flagged as immutable anchors. When a disruption occurs (like a technician falling ill or experiencing a vehicle breakdown), the affected job detector isolates only SCHEDULED or PENDING jobs for reassignment. If an ongoing job is delayed, its end time is extended in the technician's commitment block, and only subsequent downstream jobs are shifted forward or reassigned."
        }
      ],
      screenshotSlots: [
        {
          title: "Gantt Operations Timeline",
          description: "Color-coded technician rows with scheduled jobs, travel buffer blocks, and live status badges.",
          placeholderText: "TODO: Screenshot of Gantt Operations Timeline (to be supplied by Kundan)"
        },
        {
          title: "AI Explainability Modal",
          description: "Hard Constraints Compliance Checklist (100% Passed) and candidate rejection root-cause diagnostics.",
          placeholderText: "TODO: Screenshot of Explainability Modal (to be supplied by Kundan)"
        },
        {
          title: "Disruption Simulator",
          description: "Before-and-after view when an emergency break-in hospital job is slotted into the active schedule.",
          placeholderText: "TODO: Screenshot of Disruption Simulator (to be supplied by Kundan)"
        },
        {
          title: "Optimization Center",
          description: "Recharts comparison graph demonstrating reduced travel transit and balanced technician workloads.",
          placeholderText: "TODO: Screenshot of Optimization Center (to be supplied by Kundan)"
        }
      ]
    }
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
    date: "2025",
    problem: "Collegiate and regional tournaments collapse under manual scheduling chaos: weather cancellations, referee conflicts, and tie-breaker disputes.",
    built: "Designed a multi-agent coordination architecture where specialized conversational agents autonomously handle fixture generation, referee assignments, scoring, and bracket progressions using FastAPI, SQLite, and Google Gemini.",
    result: "Published peer-reviewed research in IJCRT (Volume 13, Issue 12, December 2025); eliminated manual scheduling errors in multi-stage tournament simulations.",
    tags: ["Python", "FastAPI", "Agentic AI", "Google Gemini", "SQLite", "Research"],
    image: "/project3.jpg",
    github: "https://github.com/kundandr05/Tournament_management",
    githubLabel: "Tournament Repo",
    demo: "https://ijcrt.org/viewpaperforall.php?paper=IJCRT2512785",
    demoLabel: "Read Published Paper (IJCRT)",
    role: "Lead Researcher & Core Architect",
    timeline: "Research & Implementation (2025)",
    keyFeatures: [
      "Conversational AI agent understanding natural language commands for tournament CRUD operations",
      "Google Gemini natural language reasoning engine extracting intent, dates, sports types, and venues",
      "Dynamic fixture rebalancer adjusting knockouts and round-robin matrices when games get delayed",
      "Auditable match-result verification pipeline with automated database persistence in SQLite",
      "Published academic documentation in IJCRT with empirical performance and usability analysis"
    ],
    architecture: "Python/FastAPI asynchronous service layer with SQLite storage and Google Gemini reasoning endpoints. Natural language queries parse intent into deterministic backend database transactions.",
    challenges: "Ensuring deterministic state consensus when multi-agent intents simultaneously propose timetable adjustments upon inclement weather alerts.",
    outcome: "Formally accepted and published in the International Journal of Creative Research Thoughts (IJCRT, Volume 13, Issue 12, December 2025 · Paper ID: IJCRT2512785 · ISSN: 2320-2882).",
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
    title: "My Diary",
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
