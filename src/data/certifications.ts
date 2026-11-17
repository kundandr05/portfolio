export interface Certification {
    title: string;
    issuer: string;
    year: string;
    domain: string;
    skills: string[];
    note: string;
}

export const certifications: Certification[] = [
    {
        title: "AWS APAC – Solutions Architecture Job Simulation",
        issuer: "Forage",
        year: "2024",
        domain: "Cloud Architecture",
        skills: ["AWS", "System Design", "Cloud Architecture"],
        note: "Certificate on request"
    },
    {
        title: "Gen AI Powered Data Analytics Simulation",
        issuer: "Tata (via Forage)",
        year: "2024",
        domain: "Data & AI",
        skills: ["AI Analytics", "Data Interpretation", "ML Concepts"],
        note: "Certificate on request"
    },
    {
        title: "Software Engineering Simulation",
        issuer: "Wells Fargo (via Forage)",
        year: "2024",
        domain: "Software Engineering",
        skills: ["Engineering Practices", "System Modeling", "Code Review"],
        note: "Certificate on request"
    },
    {
        title: "Tools for Data Science",
        issuer: "IBM",
        year: "2024",
        domain: "Data Science",
        skills: ["Python", "Jupyter", "Data Science Workflows"],
        note: "Certificate on request"
    },
    {
        title: "Microsoft Azure Cloud Services",
        issuer: "Microsoft",
        year: "2024",
        domain: "Cloud Infrastructure",
        skills: ["Azure Basics", "Cloud Computing", "Virtual Machines"],
        note: "Certificate on request"
    },
    {
        title: "Crash Course on Python",
        issuer: "Google",
        year: "2024",
        domain: "Programming",
        skills: ["Python Fundamentals", "OOP", "Scripting"],
        note: "Certificate on request"
    }
];
