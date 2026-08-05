"use client";

import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="min-h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden bg-[#0B0C10]">

            {/* Animated ambient background */}
            <div className="absolute inset-0 w-full h-full pointer-events-none">
                <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-500/40 rounded-full blur-[100px] animate-pulse" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600/30 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '7s' }} />
                <div className="absolute top-[30%] left-[30%] w-[300px] h-[300px] bg-cyan-400/20 rounded-full blur-[80px] animate-bounce" style={{ animationDuration: '10s' }} />
            </div>

            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none" />

            <div className="max-w-5xl z-10 mt-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <p className="text-gray-400 tracking-[0.25em] uppercase text-sm mb-4">Hey there</p>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 leading-tight">
                        I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-400 italic">Arin Rakshe</span>
                    </h1>

                    <div className="text-xl md:text-2xl text-gray-300 space-y-3 mb-10 pl-1 border-l-2 border-accent/50">
                        <p className="pl-4">CS + Math @ Northeastern University</p>
                        
                            
                        
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="flex flex-wrap items-center gap-6"
                >
                    <Link
                        href="#contact"
                        className="relative overflow-hidden bg-accent text-white px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform flex items-center gap-2 group shadow-[0_0_20px_rgba(48,110,232,0.5)] hover:shadow-[0_0_30px_rgba(48,110,232,0.8)]"
                    >
                        <span className="relative z-10">Get in touch</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform relative z-10" />
                    </Link>
                    <Link
                        href="#projects"
                        className="border border-white/20 text-white px-8 py-4 rounded-full font-medium hover:bg-white/10 transition-colors backdrop-blur-md"
                    >
                        See my work
                    </Link>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex gap-6 mt-12 pl-2"
                >
                    <a href="https://github.com/arinrakshe" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 hover:bg-white/10 rounded-full">
                        <Github size={24} />
                    </a>
                    <a href="https://linkedin.com/in/arinrakshe" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 hover:bg-white/10 rounded-full">
                        <Linkedin size={24} />
                    </a>
                    <a href="mailto:rakshe.ar@northeastern.edu" aria-label="Email" className="text-gray-400 hover:text-white hover:scale-110 transition-all p-2 hover:bg-white/10 rounded-full">
                        <Mail size={24} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
