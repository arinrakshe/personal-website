export type Tech = {
    name: string;
    desc: string;
    /** devicon path, e.g. "java/java-original" */
    slug?: string;
    /** logos too dark to read on the dark background; rendered as a white silhouette */
    invert?: boolean;
    /** lucide icon key, used when there is no devicon logo */
    lucide?: "database" | "link" | "award" | "trophy" | "medal";
    label?: string;
};

export type TechCategory = {
    title: string;
    blurb: string;
    items: Tech[];
};

export const techCategories: TechCategory[] = [
    {
        title: "Languages",
        blurb: "What I write day to day",
        items: [
            { name: "Java", desc: "Spring Boot services and REST APIs", slug: "java/java-original" },
            { name: "Python", desc: "ML pipelines, OCR, and AI agents", slug: "python/python-original" },
            { name: "JavaScript", desc: "Full-stack web and Node services", slug: "javascript/javascript-original" },
            { name: "SQL", desc: "Schema design and query tuning", lucide: "database", label: "SQL" },
            { name: "C++", desc: "Systems fundamentals and OOD", slug: "cplusplus/cplusplus-original" },
        ],
    },
    {
        title: "Frameworks & Libraries",
        blurb: "How I ship",
        items: [
            { name: "Node.js", desc: "Secure REST APIs over ERP data", slug: "nodejs/nodejs-original" },
            { name: "Next.js", desc: "App Router frontends", slug: "nextjs/nextjs-original" },
            { name: "React", desc: "Component-driven interfaces", slug: "react/react-original" },
            { name: "Spring Boot", desc: "Java 21 APIs with JWT auth", slug: "spring/spring-original" },
            { name: "Pandas", desc: "Clinical and research data analysis", slug: "pandas/pandas-original", invert: true },
            { name: "scikit-learn", desc: "Classical ML and evaluation", slug: "scikitlearn/scikitlearn-original" },
            { name: "LangChain", desc: "LLM orchestration and RAG chains", lucide: "link", label: "LC" },
        ],
    },
    {
        title: "Databases & Developer Tools",
        blurb: "Where the data lives",
        items: [
            { name: "PostgreSQL", desc: "Primary relational store", slug: "postgresql/postgresql-original" },
            { name: "SQL Server", desc: "Dock and ERP data at Axcelis", slug: "microsoftsqlserver/microsoftsqlserver-plain" },
            { name: "MongoDB", desc: "Document store for screening data", slug: "mongodb/mongodb-original" },
            { name: "ChromaDB", desc: "Vector store powering two-stage RAG", lucide: "database", label: "CDB" },
            { name: "Git", desc: "Version control and code review", slug: "git/git-original" },
            { name: "Docker", desc: "Containerized local and CI builds", slug: "docker/docker-original" },
            { name: "AWS", desc: "Lambda and S3", slug: "amazonwebservices/amazonwebservices-plain-wordmark" },
        ],
    },
    {
        title: "Certifications",
        blurb: "Receipts",
        items: [
            { name: "Azure AI Fundamentals", desc: "Microsoft Certified", slug: "azure/azure-original" },
        ],
    },
];

/** Logos that scroll in the About marquee. */
export const marqueeTech: Tech[] = [
    { name: "Java", desc: "", slug: "java/java-original" },
    { name: "Python", desc: "", slug: "python/python-original" },
    { name: "JavaScript", desc: "", slug: "javascript/javascript-original" },
    { name: "React", desc: "", slug: "react/react-original" },
    { name: "Next.js", desc: "", slug: "nextjs/nextjs-original" },
    { name: "Node.js", desc: "", slug: "nodejs/nodejs-original" },
    { name: "Spring Boot", desc: "", slug: "spring/spring-original" },
    { name: "PostgreSQL", desc: "", slug: "postgresql/postgresql-original" },
    { name: "MongoDB", desc: "", slug: "mongodb/mongodb-original" },
    { name: "scikit-learn", desc: "", slug: "scikitlearn/scikitlearn-original" },
    { name: "Pandas", desc: "", slug: "pandas/pandas-original", invert: true },
    { name: "Docker", desc: "", slug: "docker/docker-original" },
    { name: "AWS", desc: "", slug: "amazonwebservices/amazonwebservices-plain-wordmark" },
    { name: "Git", desc: "", slug: "git/git-original" },
];
