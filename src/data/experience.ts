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
      "Selected for the WizzyBox Career Acceleration Program (WCAP) as a UI/UX Design Intern.",
      "Conducting user research, wireframing, and interactive prototyping for customer-facing web and mobile applications.",
      "Collaborating closely with engineering leads to transform user interaction patterns into high-fidelity component libraries and design tokens.",
      "Validating design usability through iterative prototype testing and accessibility audits."
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
