"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Github, ExternalLink, ArrowLeft, ArrowRight } from "lucide-react";

const projects = [
    {
        title: "ADHD Patient Engagement Platform",
        subtitle: "Full-Stack HealthTech Solution",
        description: "Developed a full-stack web application enabling providers to create ADHD assessments and families to complete Conners Rating Scale questionnaires with automated scoring. Integrated Azure FHIR server for standardized healthcare data exchange.",
        tech: ["React", "Node.js", "MongoDB", "Azure FHIR"],
        links: { github: "#", live: "#" },
        type: "HealthTech",
    },
    {
        title: "Urban Food Supply Chain Visualizer",
        subtitle: "3D Georeferenced ML Visualization",
        description: "Built an interactive 3D globe visualization mapping farmland feeding major cities. Developed an ML-powered yield prediction model to forecast regional agricultural failures from climate and fertilizer data.",
        tech: ["TensorFlow.js", "Deck.gl", "React", "Supabase"],
        links: { github: "#", live: "#" },
        type: "Data Visualization",
    },
    {
        title: "D.A.I.S.Y",
        subtitle: "Decentralized AI Search",
        description: "Designed a decentralized, AI-powered search system that enables private, verifiable, and trustless AI queries. Architected a system where blockchain acts as a neutral coordinator to verify results.",
        tech: ["Python", "Algorand", "AI Agents"],
        links: { github: "#", live: "#" },
        type: "Hackathon Finalist",
    },
    {
        title: "LLM Educational App",
        subtitle: "RAG-based Learning Assistant",
        description: "Built an LLM-driven education application using RAG to answer student questions grounded in course materials. Implemented a pipeline that ingested lecture notes and generated vector embeddings for semantic retrieval.",
        tech: ["Python", "LangChain", "RAG", "Vector DB"],
        links: { github: "#", live: "#" },
        type: "Research",
    },
    {
        title: "Tavus Human Agent",
        subtitle: "AI-Powered Interactive Avatar",
        description: "An intelligent interactive agent allowing real-time video conversation. powered by Large Language Models and Tavus video generation technology.",
        tech: ["Next.js", "LiveKit", "OpenAI", "Tavus API"],
        links: { github: "#", live: "#" },
        type: "AI Agent",
    },
    {
        title: "Preserve",
        subtitle: "Document Integrity & Keystroke Analytics Platform",
        description: "Built a full-stack system that captures every keystroke, typing speed, timing patterns, and document activity to verify whether a student typed an assignment themselves.",
        tech: ["TypeScript", "React", "Node.js", "Vite", "Lexical"],
        links: { github: "#", live: "#" },
        type: "Platform",
    },
    {
        title: "Gritty Real Estate",
        subtitle: "Cloud-based Real Estate Platform",
        description: "Developed a cloud-based real estate website for property managers, agents, and clients. Built interactive front-end components and integrated design mockups from Figma.",
        tech: ["HTML", "CSS", "JavaScript", "Next.js", "Django", "SQL"],
        links: { github: "#", live: "#" },
        type: "Web App",
    },
    {
        title: "Stock Dashboard",
        subtitle: "Real-time Market Analysis Tool",
        description: "A comprehensive dashboard for tracking real-time stock market data. Features interactive charts, portfolio tracking, and news integration.",
        tech: ["React", "D3.js", "Finnhub API", "Tailwind CSS"],
        links: { github: "#", live: "#" },
        type: "Dashboard",
    },
];

export default function Projects() {
    const targetRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({ target: targetRef });
    const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

    return (
        <section id="projects" ref={targetRef} className="relative h-[400vh] bg-[#0B0C10]">
            <div className="sticky top-0 flex flex-col justify-center h-screen overflow-hidden">
                <div className="px-6 md:px-20 mb-12 flex justify-between items-end">
                    <div>
                        <h3 className="text-accent tracking-widest text-sm font-semibold mb-2 uppercase">What I've Built</h3>
                        <h2 className="text-5xl font-serif italic text-white">
                            My Projects
                        </h2>
                    </div>
                    {/* Visual Navigation Hint */}
                    <div className="flex gap-4">
                        <button onClick={() => window.scrollBy({ top: -window.innerHeight, behavior: 'smooth' })} className="p-4 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors">
                            <ArrowLeft size={24} />
                        </button>
                        <button onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })} className="p-4 rounded-full bg-accent text-white hover:bg-accent/90 transition-colors">
                            <ArrowRight size={24} />
                        </button>
                    </div>
                </div>

                <motion.div style={{ x }} className="flex gap-8 pl-6 md:pl-20">
                    {projects.map((project, i) => (
                        <div
                            key={i}
                            className="group relative h-[500px] w-[600px] flex-shrink-0 bg-[#16171D] border border-white/5 rounded-3xl overflow-hidden hover:border-accent/50 transition-colors duration-300"
                        >
                            <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="p-10 h-full flex flex-col justify-between">
                                <div>
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-3xl font-bold text-white group-hover:text-accent transition-colors">{project.title}</h3>
                                        <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">{project.type}</span>
                                    </div>
                                    <p className="text-sm text-accent mb-4 font-medium">{project.subtitle}</p>
                                    <p className="text-gray-400 leading-relaxed mb-8">
                                        {project.description}
                                    </p>
                                </div>

                                <div>
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t) => (
                                            <span
                                                key={t}
                                                className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-4">
                                        <a
                                            href={project.links.github}
                                            className="px-6 py-2 rounded-full bg-accent text-white font-medium hover:bg-accent/90 transition-colors flex items-center gap-2 text-sm"
                                        >
                                            <Github size={16} />
                                            GitHub
                                        </a>
                                        <a
                                            href={project.links.live}
                                            className="px-6 py-2 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors flex items-center gap-2 text-sm"
                                        >
                                            <ExternalLink size={16} />
                                            Visit Site
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
