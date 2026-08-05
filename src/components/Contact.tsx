"use client";

import { motion } from "framer-motion";
import { ArrowUp, ArrowUpRight, Github, Linkedin, Mail } from "lucide-react";

const links = [
    {
        icon: Mail,
        label: "Email",
        value: "rakshe.ar@northeastern.edu",
        href: "mailto:rakshe.ar@northeastern.edu",
    },
    {
        icon: Linkedin,
        label: "LinkedIn",
        value: "@arinrakshe",
        href: "https://linkedin.com/in/arinrakshe",
    },
    {
        icon: Github,
        label: "GitHub",
        value: "@arinrakshe",
        href: "https://github.com/arinrakshe",
    },
];

export default function Contact() {
    return (
        <>
            <section id="contact" className="px-6 md:px-20 py-20 max-w-7xl mx-auto bg-[#0B0C10] relative">
                <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10">
                    <div className="mb-12">
                        <h3 className="text-accent tracking-widest text-sm font-semibold mb-2 uppercase">
                            Get in Touch
                        </h3>
                        <h2 className="text-5xl font-serif italic text-white mb-4">Let&apos;s Connect</h2>
                        <p className="text-gray-400 max-w-xl">
                            Reach out if you&apos;re looking for an engineer, have a question, or just want to talk
                            about AI, healthcare, or markets.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {links.map((link, i) => (
                            <motion.a
                                key={link.label}
                                href={link.href}
                                target={link.href.startsWith("mailto:") ? undefined : "_blank"}
                                rel="noopener noreferrer"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: i * 0.1 }}
                                className="group flex items-center gap-4 p-6 rounded-[32px] bg-[#16171D] border border-white/5 hover:border-accent/50 hover:bg-white/5 transition-all"
                            >
                                <div className="p-3 rounded-xl bg-black border border-white/10 group-hover:border-accent/50 transition-colors">
                                    <link.icon size={22} className="text-accent" />
                                </div>
                                <div className="min-w-0 flex-1">
                                    <p className="text-gray-500 text-xs tracking-widest uppercase mb-1">{link.label}</p>
                                    <p className="text-white text-sm truncate group-hover:text-accent transition-colors">
                                        {link.value}
                                    </p>
                                </div>
                                <ArrowUpRight
                                    size={18}
                                    className="text-gray-600 group-hover:text-accent group-hover:-translate-y-0.5 transition-all shrink-0"
                                />
                            </motion.a>
                        ))}
                    </div>
                </div>
            </section>

            <footer className="py-10 px-6 md:px-20 border-t border-white/10 bg-[#0B0C10]">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Arin Rakshe. All rights reserved.
                    </p>

                    <a
                        href="#home"
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                    >
                        Back to Top
                        <ArrowUp size={16} />
                    </a>
                </div>
            </footer>
        </>
    );
}
