export interface Publication {
    id: string;
    type: "paper" | "book";
    title: string;
    publisher: string;
    date: string;
    description: string;
    link: string;
    linkLabel: string;
    image: string;
    badge: string;
}

export const publications: Publication[] = [
    {
        id: "paper-ijcrt",
        type: "paper",
        title: "Tournament Management Agent Using Agentic Artificial Intelligence",
        publisher: "International Journal of Creative Research Thoughts (IJCRT)",
        date: "December 2025",
        description: "Presents the architecture and implementation of an autonomous conversational agent capable of understanding natural language match queries, scheduling fixtures without overlap, and executing tournament coordination tasks autonomously.",
        link: "http://ijcrt.org/viewfull.php?&p_id=IJCRT2512785",
        linkLabel: "Read Paper on IJCRT",
        image: "/paper-image.png",
        badge: "Peer-Reviewed Paper"
    },
    {
        id: "book-reclaim",
        type: "book",
        title: "RECLAIM YOUR FOCUS: A Guide to Dopamine Detox and Get Things Done",
        publisher: "Amazon KDP",
        date: "2024",
        description: "A practical guide examining how digital hyper-stimulation overloads biological reward circuits, offering actionable protocols to rebuild attention span, curb involuntary smartphone checking, and create focused deep-work routines.",
        link: "https://a.co/d/07SiOZpN",
        linkLabel: "View on Amazon",
        image: "/book-reclaim.jpg",
        badge: "Published Book"
    },
    {
        id: "book-twospeed",
        type: "book",
        title: "The Two-Speed Mind: Solving the 90s vs. 2000s Conflict to End Your Structural Stress",
        publisher: "Amazon KDP",
        date: "2024",
        description: "Frames modern professional burnout as a structural friction between stable analog expectations formed in the late 20th century and the exponential speed of digital connectivity. Uses computational analogies to help readers design peaceful personal boundaries.",
        link: "https://a.co/d/0euaUcnC",
        linkLabel: "View on Amazon",
        image: "/book-twospeed.jpg",
        badge: "Published Book"
    }
];
