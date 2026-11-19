export interface PublicationItem {
  id: string;
  type: "Research Paper" | "Book";
  title: string;
  subtitle: string;
  venueOrPublisher: string;
  date: string;
  identifier: string;
  description: string;
  link: string;
  linkLabel: string;
  pdfUrl?: string;
  pdfLabel?: string;
  image: string;
  badge: string;
  color: "tomato" | "yellow" | "green" | "blue";
  rotation: string;
}

export const publications: PublicationItem[] = [
  {
    id: "agentic-ai-paper",
    type: "Research Paper",
    title: "Tournament Management Agent Using Agentic Artificial Intelligence",
    subtitle: "Autonomous Conversational Agent for Scheduling & Verification",
    venueOrPublisher: "International Journal of Creative Research Thoughts (IJCRT)",
    date: "December 2025",
    identifier: "Volume 13, Issue 12 · Paper ID: IJCRT2512785 · ISSN: 2320-2882",
    description: "Peer-reviewed research presenting an autonomous conversational agent capable of understanding natural language queries and executing tournament management tasks. Integrates FastAPI backend, SQLite persistent storage, and Google Gemini for natural language reasoning.",
    link: "https://ijcrt.org/viewpaperforall.php?paper=IJCRT2512785",
    linkLabel: "View on IJCRT Portal",
    pdfUrl: "https://ijcrt.org/papers/IJCRT2512785.pdf",
    pdfLabel: "Download Paper (PDF)",
    image: "/paper-image.png",
    badge: "Peer-Reviewed",
    color: "tomato",
    rotation: "-rotate-1"
  },
  {
    id: "two-speed-mind",
    type: "Book",
    title: "The Two-Speed Mind",
    subtitle: "Solving the 90s vs. 2000s Conflict to End Your Structural Stress",
    venueOrPublisher: "Published on Amazon KDP",
    date: "2025",
    identifier: "Amazon KDP · Paperback & Kindle",
    description: "An inquiry into mental models for technical creators: bridging generational friction between 90s depth and 2000s hyper-connectivity to eliminate structural cognitive stress and cultivate deliberate focus.",
    link: "https://amzn.in/d/08HiYofZ",
    linkLabel: "View on Amazon",
    image: "/book-twospeed.jpg",
    badge: "Amazon KDP",
    color: "yellow",
    rotation: "rotate-2"
  },
  {
    id: "reclaim-your-focus",
    type: "Book",
    title: "Reclaim Your Focus",
    subtitle: "A Guide to Dopamine Detox and Get Things Done",
    venueOrPublisher: "Published on Amazon KDP",
    date: "2025",
    identifier: "Amazon KDP · Paperback & Kindle",
    description: "A pragmatic guide to executing a dopamine detox, overcoming digital addiction, eliminating attention fragmentation, and structuring high-output daily habits to get things done.",
    link: "https://amzn.in/d/0by7Rnky",
    linkLabel: "View on Amazon",
    image: "/book-reclaim.jpg",
    badge: "Amazon KDP",
    color: "green",
    rotation: "-rotate-2"
  }
];

export const featuredQuote = {
  text: "Velocity without clarity is just frantic motion. The highest leverage engineering happens when you step away from the terminal and let the problem settle before writing a single line.",
  source: "The Two-Speed Mind (2025)"
};
