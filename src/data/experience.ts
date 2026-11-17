export interface ExperienceItem {
    id: string;
    role: string;
    organization: string;
    location: string;
    period: string;
    description: string[];
    skills: string[];
    link?: string;
    linkLabel?: string;
}

export interface EducationItem {
    id: string;
    degree: string;
    institution: string;
    location: string;
    period: string;
    details: string;
}

export const experiences: ExperienceItem[] = [
    {
        id: "wizzybox",
        role: "UI/UX Design Intern",
        organization: "WizzyBox Private Limited (WCAP)",
        location: "Bengaluru, India (Remote)",
        period: "Sep 2026 – Present",
        description: [
            "Selected for the WizzyBox Career Accelerator Program (WCAP), delivered in partnership with NammaQA.",
            "Applying design thinking methodologies: conducting target audience research, empathy mapping, user personas, and user journey mapping.",
            "Translating user requirements into competitive audits, problem statements, information architecture, user flows, and low-fidelity Figma wireframes."
        ],
        skills: ["UI/UX Design", "Design Thinking", "Figma", "User Research", "Information Architecture", "Wireframing"],
        link: "/WizzyBox_Offer_Letter.pdf",
        linkLabel: "View Offer Letter (PDF)"
    }
];

export const education: EducationItem[] = [
    {
        id: "mit-mysuru",
        degree: "B.E. in Computer Science & Engineering (AI & ML)",
        institution: "Maharaja Institute of Technology, Mysuru",
        location: "Mysuru, Karnataka",
        period: "2023 – Expected 2027",
        details: "Focus on Artificial Intelligence, Multi-Agent Systems, Data Structures, Algorithms, and Software Engineering."
    },
    {
        id: "pu-college",
        degree: "Pre-University Course (PCMB)",
        institution: "Sri Adichunchanagiri Independent PU College",
        location: "Karnataka, India",
        period: "2021 – 2023",
        details: "Physics, Chemistry, Mathematics, and Biology foundation."
    },
    {
        id: "school",
        degree: "Secondary School Leaving Certificate (SSLC)",
        institution: "BGS Central School",
        location: "Bhadravathi, Karnataka",
        period: "Graduated 2021",
        details: "Core secondary school curriculum with distinction."
    }
];
