export type Project = {
    title: string;
    repo: string;
    badge: string;
    /** GitHub's primary-language label and its dot colour */
    language: string;
    languageColor: string;
    description: string;
    tech: string[];
};

export const projects: Project[] = [
    {
        title: "Referral Ready",
        repo: "refferal-ready",
        badge: "1st Place — athenahealth AI Hackathon",
        language: "HTML",
        languageColor: "#e34c26",
        description:
            "AI intake agent that turns incoming specialist referrals into schedule-ready packets — with a human approving every step.",
        tech: ["Python", "Flask", "Azure OpenAI (GPT-4o)", "Human-in-the-loop"],
    },
    {
        title: "Pediatric Screening Platform",
        repo: "Pediatric-screening-platform",
        badge: "HealthTech",
        language: "JavaScript",
        languageColor: "#f1e05a",
        description:
            "Designed and built a healthcare application that streamlines ADHD screening and care management. Families complete standardized assessments for their children, and providers review automated scoring and care plans.",
        tech: ["JavaScript", "React", "Node.js", "MongoDB", "Azure FHIR"],
    },
    {
        title: "Skin Lesion Bias Audit",
        repo: "skin-lesion-bias-audit",
        badge: "ML Research",
        language: "Jupyter Notebook",
        languageColor: "#DA5B0B",
        description:
            "Benign-vs-malignant skin lesion classifier (HAM10000) with a skin-tone bias audit on Fitzpatrick 17k — identifies a domain-shift confound and applies a rebalancing mitigation.",
        tech: ["Python", "PyTorch", "scikit-learn", "Fairness Auditing"],
    },
    {
        title: "Refund Eligibility Agent",
        repo: "refund-eligibility-agent",
        badge: "AI Agent",
        language: "TypeScript",
        languageColor: "#3178c6",
        description:
            "An AI agent that triages customer refund and return requests against Wayfair's return policy — and returns a structured, explainable decision a support rep can act on in seconds.",
        tech: ["TypeScript", "LLM Orchestration", "Policy Reasoning", "Structured Output"],
    },
    {
        title: "D.A.I.S.Y",
        repo: "D.A.I.S.Y",
        badge: "Hackathon",
        language: "Python",
        languageColor: "#3572A5",
        description:
            "Decentralized AI Search For You: decentralized AI search on Algorand. A token-incentivized query marketplace with on-chain escrow, cryptographic receipts, and off-chain AI indexers.",
        tech: ["Python", "Algorand", "Smart Contracts", "AI Agents"],
    },
    {
        title: "CookYourBooks",
        repo: "CookYourBooks",
        badge: "Full-Stack",
        language: "Java",
        languageColor: "#b07219",
        description:
            "A full-stack recipe manager: save recipes, scale them by servings, group them into collections, and auto-generate shopping lists. Recipes can be imported from a photo via Google Gemini OCR.",
        tech: ["Java 21", "Spring Boot", "PostgreSQL", "React", "Gemini"],
    },
];

export const GITHUB_URL = "https://github.com/arinrakshe";
