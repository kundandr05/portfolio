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
    id: "forage-tata",
    name: "Data Visualization: Empowering Business with Effective Insights",
    issuer: "Tata Group (via Forage)",
    year: "2024",
    color: "blue",
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
    id: "ibm-python",
    name: "Python for Data Science & AI Development",
    issuer: "IBM",
    year: "2024",
    color: "yellow",
    category: "AI & Data Science"
  },
  {
    id: "microsoft-cloud",
    name: "Cloud Foundations & Azure Core Services",
    issuer: "Microsoft",
    year: "2024",
    color: "green",
    category: "Cloud Computing"
  },
  {
    id: "google-cybersecurity",
    name: "Foundations of Cybersecurity & Network Defense",
    issuer: "Google",
    year: "2024",
    color: "blue",
    category: "Security"
  }
];
