"use client";

import { motion } from "framer-motion";
import { Dices, Rocket, Users } from "lucide-react";

const cards = [
    {
        icon: Rocket,
        title: "Chief Technology Officer",
        org: "Apulza",
        blurb:
            "Leading engineering at a Boston startup using machine learning to turn medical data into personalized study plans for students with ADHD and other medical challenges. I manage the software engineering team, own technical direction, and take the platform's LMS integrations from prototype to production.",
        gradient: "from-amber-500/30 via-orange-600/20 to-transparent",
    },
    {
        icon: Users,
        title: "VP of Technology",
        org: "Northeastern Investment Banking Club",
        blurb:
            "Leading technology strategy for a 50+ member club across ECM, DCM, and M&A branches, and building an AI education program that folds LLM workflows into the analyst modeling curriculum.",
        gradient: "from-blue-600/30 via-indigo-600/20 to-transparent",
    },
    {
        icon: Dices,
        title: "Off the Clock",
        org: "Poker · Soccer · Running · Billiards",
        blurb:
            "I run a self-managed financial portfolio, play a lot of poker, and spend most of what's left on soccer, running, and entrepreneurship side quests.",
        gradient: "from-emerald-500/30 via-teal-600/20 to-transparent",
    },
];

export default function BeyondTheIDE() {
    return (
        <section className="px-6 md:px-20 py-20 max-w-7xl mx-auto bg-[#0B0C10]">
            <div className="mb-12">
                <h3 className="text-accent tracking-widest text-sm font-semibold mb-2 uppercase">Outside of Work</h3>
                <h2 className="text-5xl font-serif italic text-white">Beyond the IDE</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, i) => (
                    <motion.div
                        key={card.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="group relative overflow-hidden bg-[#16171D] border border-white/5 rounded-[32px] hover:border-accent/30 transition-colors"
                    >
                        <div
                            className={`h-32 bg-gradient-to-br ${card.gradient} flex items-center justify-center relative`}
                        >
                            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                            <card.icon
                                size={40}
                                className="text-white/80 group-hover:scale-110 transition-transform relative z-10"
                            />
                        </div>

                        <div className="p-8">
                            <h3 className="text-xl font-bold text-white mb-1">{card.title}</h3>
                            <p className="text-accent text-sm mb-4">{card.org}</p>
                            <p className="text-gray-400 text-sm leading-relaxed">{card.blurb}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
