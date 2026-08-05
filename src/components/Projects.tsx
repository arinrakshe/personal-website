"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { GITHUB_URL, projects } from "@/data/projects";

export default function Projects() {
    return (
        <section id="projects" className="px-6 md:px-20 py-20 max-w-7xl mx-auto bg-[#0B0C10]">
            <div className="mb-12 flex flex-wrap justify-between items-end gap-6">
                <div>
                    <h3 className="text-accent tracking-widest text-sm font-semibold mb-2 uppercase">
                        What I&apos;ve Built
                    </h3>
                    <h2 className="text-5xl font-serif italic text-white">My Projects</h2>
                </div>

                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/10 text-white hover:bg-white/10 transition-colors text-sm font-medium"
                >
                    <Github size={18} />
                    View All
                    <ArrowUpRight size={16} />
                </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, i) => (
                    <motion.a
                        key={project.repo}
                        href={`${GITHUB_URL}/${project.repo}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (i % 2) * 0.1 }}
                        className="group relative flex flex-col bg-[#16171D] border border-white/5 rounded-[32px] p-8 hover:border-accent/50 transition-colors duration-300 overflow-hidden"
                    >
                        <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                        <div className="flex justify-between items-start gap-4 mb-3">
                            <h3 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">
                                {project.title}
                            </h3>
                            <ArrowUpRight
                                size={20}
                                className="text-gray-600 group-hover:text-accent group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0"
                            />
                        </div>

                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <span className="text-xs font-mono text-gray-500 border border-white/10 px-2 py-1 rounded-full">
                                {project.badge}
                            </span>
                            <span className="flex items-center gap-1.5 text-xs text-gray-500">
                                <span
                                    className="w-2.5 h-2.5 rounded-full"
                                    style={{ backgroundColor: project.languageColor }}
                                />
                                {project.language}
                            </span>
                        </div>

                        <p className="text-gray-400 leading-relaxed mb-8 flex-1">{project.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {project.tech.map((t) => (
                                <span
                                    key={t}
                                    className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 text-gray-300 border border-white/10"
                                >
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.a>
                ))}
            </div>
        </section>
    );
}
