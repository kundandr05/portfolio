export interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  year: string;
  color: "tomato" | "yellow" | "green" | "blue";
  category: string;
}

export const certifications: CertificationItem[] = [
  {
    id: "infosys-llmops",
    name: "Getting Started with LLMOps",
    issuer: "Infosys Springboard",
    year: "2025",
    color: "tomato",
    category: "LLMOps & AI"
  },
  {
    id: "ibm-skillsbuild-ai",
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM SkillsBuild",
    year: "2025",
    color: "yellow",
    category: "AI Fundamentals"
  },
  {
    id: "ibm-coursera-stats",
    name: "Statistics for Data Science with Python",
    issuer: "IBM / Coursera",
    year: "2025",
    color: "blue",
    category: "Data Science"
  },
  {
    id: "forage-tata",
    name: "Data Visualization: Empowering Business with Insights",
    issuer: "Tata Group (via Forage)",
    year: "2024",
    color: "green",
    category: "Data Analytics"
  },
  {
    id: "forage-wells-fargo",
    name: "Software Engineering Virtual Experience",
    issuer: "Wells Fargo (via Forage)",
    year: "2024",
    color: "tomato",
    category: "Software Engineering"
  },
  {
    id: "microsoft-cloud",
    name: "Cloud Foundations & Azure Core Services",
    issuer: "Microsoft",
    year: "2024",
    color: "blue",
    category: "Cloud Computing"
  }
];
