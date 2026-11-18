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
    subtitle: "Autonomous Multi-Agent Coordination for Scheduling & Verification",
    venueOrPublisher: "International Journal of Creative Research Thoughts (IJCRT)",
    date: "July 2026",
    identifier: "Volume 14, Issue 7 · ISSN: 2320-2882",
    description: "Peer-reviewed research proposing an event-driven multi-agent framework to solve NP-hard sports tournament scheduling, dynamic referee assignment, and automated bracket state transitions.",
    link: "https://ijcrt.org/papers/IJCRT2607147.pdf",
    linkLabel: "Read Full Paper (IJCRT PDF)",
    image: "/paper-image.png",
    badge: "Peer-Reviewed",
    color: "tomato",
    rotation: "-rotate-1"
  },
  {
    id: "two-speed-mind",
    type: "Book",
    title: "The Two-Speed Mind",
    subtitle: "How to Switch Between Fast Execution and Deep Thinking",
    venueOrPublisher: "Published on Amazon KDP",
    date: "2024",
    identifier: "ASIN: B0DKFYW454",
    description: "An inquiry into mental models for technical creators: cultivating cognitive gear-shifting between relentless delivery speed and uninterrupted architectural reflection.",
    link: "https://www.amazon.com/dp/B0DKFYW454",
    linkLabel: "View on Amazon",
    image: "/book-twospeed.jpg",
    badge: "Amazon KDP",
    color: "yellow",
    rotation: "rotate-2"
  },
  {
    id: "habit-of-focus",
    type: "Book",
    title: "The Habit of Focus",
    subtitle: "Reclaiming Deep Work in an Age of Distraction",
    venueOrPublisher: "Published on Amazon KDP",
    date: "2024",
    identifier: "ASIN: B0D796X3L1",
    description: "A pragmatic guide to engineering deep-work rituals, eliminating attention fragmentation, and building high-focus output habits amidst notifications and digital noise.",
    link: "https://www.amazon.com/dp/B0D796X3L1",
    linkLabel: "View on Amazon",
    image: "/book-reclaim.jpg",
    badge: "Amazon KDP",
    color: "green",
    rotation: "-rotate-2"
  }
];

export const featuredQuote = {
  text: "Velocity without clarity is just frantic motion. The highest leverage engineering happens when you step away from the terminal and let the problem settle before writing a single line.",
  source: "The Two-Speed Mind (2024)"
};
