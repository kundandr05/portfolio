export interface ExperienceItem {
  id: string;
  role: string;
  organization: string;
  location: string;
  period: string;
  badge: string;
  color: "tomato" | "yellow" | "green" | "blue";
  highlights: string[];
  documentUrl?: string;
  documentLabel?: string;
}

export const experiences: ExperienceItem[] = [
  {
    id: "wizzybox",
    role: "UI/UX Design Intern (WCAP)",
    organization: "WizzyBox Private Limited",
    location: "Incubation / Remote",
    period: "Sep 2026 – Present",
    badge: "Active Internship",
    color: "tomato",
    highlights: [
      "Selected for WCAP, delivered by WizzyBox in partnership with NammaQA.",
      "Applying design thinking through target audience research, empathy mapping, personas, user stories, and user journey mapping.",
      "Working on competitive audits, problem statements, information architecture, user flows, storyboards, and low-fidelity wireframes.",
      "Collaborating closely with engineering leads to transform user interaction patterns into high-fidelity component libraries and design tokens."
    ],
    documentUrl: "/WizzyBox_Offer_Letter.pdf",
    documentLabel: "View Verified Offer Letter (PDF)"
  },
  {
    id: "mit-mysuru",
    role: "B.E. Computer Science & Engineering (AI & ML)",
    organization: "Maharaja Institute of Technology Mysuru",
    location: "Mysuru, Karnataka, India",
    period: "2023 – 2027",
    badge: "Undergraduate Degree",
    color: "yellow",
    highlights: [
      "Specializing in Artificial Intelligence, Machine Learning algorithms, and scalable backend distributed systems.",
      "Authored and published peer-reviewed research on Agentic AI coordination in the International Journal of Creative Research Thoughts (IJCRT).",
      "Core academic focus: Neural Networks, Natural Language Processing, Operating Systems, Database Management, and Data Structures & Algorithms.",
      "Actively developing open-source AI tooling, local LLM interfaces, and full-stack web platforms."
    ]
  }
];
