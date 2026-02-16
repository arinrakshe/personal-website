"use client";

import { motion } from "framer-motion";
import {
    Code2, Layout, Database, Terminal, Cpu, Globe, Server, Cloud, Container,
    Smartphone, FileJson, GitBranch, Layers, Shield, Box, Share2, Award
} from "lucide-react";

// Map specific technologies to Lucide icons
// Categories: Languages, Frameworks, Databases, Other, Certifications
const techItems = [
    // Languages
    { name: "Python", desc: "Language", icon: <Terminal size={24} className="text-blue-400" /> },
    { name: "Java", desc: "Language", icon: <Code2 size={24} className="text-red-400" /> },
    { name: "TypeScript", desc: "Language", icon: <FileJson size={24} className="text-blue-600" /> },
    { name: "JavaScript", desc: "Language", icon: <FileJson size={24} className="text-yellow-400" /> },
    { name: "SQL", desc: "Language", icon: <Database size={24} className="text-orange-400" /> },
    { name: "Kotlin", desc: "Mobile", icon: <Smartphone size={24} className="text-purple-500" /> },
    { name: "Swift", desc: "Mobile", icon: <Smartphone size={24} className="text-orange-500" /> },
    { name: "HTML/CSS", desc: "Frontend", icon: <Layout size={24} className="text-pink-400" /> },

    // Frameworks & Libraries
    { name: "React", desc: "Framework", icon: <Cpu size={24} className="text-cyan-400" /> },
    { name: "React Native", desc: "Mobile Framework", icon: <Smartphone size={24} className="text-cyan-400" /> },
    { name: "Node.js", desc: "Runtime", icon: <Server size={24} className="text-green-500" /> },
    { name: "Express.js", desc: "Backend", icon: <Server size={24} className="text-gray-400" /> },
    { name: "RAG", desc: "AI Technique", icon: <Globe size={24} className="text-green-400" /> },
    { name: "LangChain", desc: "AI Framework", icon: <Globe size={24} className="text-purple-400" /> },

    // Databases
    { name: "PostgreSQL", desc: "Database", icon: <Database size={24} className="text-blue-300" /> },
    { name: "MongoDB", desc: "Database", icon: <Database size={24} className="text-green-500" /> },
    { name: "Firebase", desc: "BaaS", icon: <Cloud size={24} className="text-orange-500" /> },
    { name: "Supabase", desc: "BaaS", icon: <Cloud size={24} className="text-emerald-400" /> },

    // Tools & Other
    { name: "Git/GitHub", desc: "Version Control", icon: <GitBranch size={24} className="text-white" /> },
    { name: "Docker", desc: "DevOps", icon: <Container size={24} className="text-blue-500" /> },
    { name: "Blockchain", desc: "Web3", icon: <Share2 size={24} className="text-yellow-500" /> },
    { name: "Linux", desc: "OS", icon: <Terminal size={24} className="text-yellow-200" /> },
    { name: "RESTful APIs", desc: "Architecture", icon: <Globe size={24} className="text-blue-400" /> },

    // Certifications
    { name: "Azure AI", desc: "Certification", icon: <Award size={24} className="text-blue-400" /> },
];

export default function TechStackAndFooter() {
    return (
        <>
            <section className="py-32 px-6 md:px-20 bg-[#0B0C10] relative overflow-hidden">
                {/* Cool Background Effect - Local */}
                <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <h2 className="text-4xl md:text-5xl font-serif italic text-white mb-16">
                        Technical <span className="text-accent">Skills</span>
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {techItems.map((item, i) => (
                            <motion.div
                                key={item.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.3, delay: i * 0.05 }}
                                className="flex items-center gap-4 p-4 rounded-xl bg-[#16171D] border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all group"
                            >
                                <div className="p-3 rounded-lg bg-black border border-white/10 group-hover:border-accent/50 transition-colors">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm md:text-base">{item.name}</h3>
                                    <p className="text-gray-400 text-xs">{item.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <footer id="contact" className="py-20 px-6 md:px-20 border-t border-white/10 bg-[#0B0C10] relative overflow-hidden">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl font-bold text-white mb-2">Let's work together.</h2>
                        <p className="text-gray-400">Reach out if you're looking for a developer, have a question, or just want to connect.</p>
                        <a href="mailto:rakshe.ar@northeastern.edu" className="inline-block mt-4 text-accent hover:text-white transition-colors border-b border-accent hover:border-white pb-1">
                            rakshe.ar@northeastern.edu
                        </a>
                    </div>

                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Arin Rakshe. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
