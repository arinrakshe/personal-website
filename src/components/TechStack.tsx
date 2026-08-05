"use client";

import { motion } from "framer-motion";
import TechIcon from "@/components/TechIcon";
import { techCategories } from "@/data/tech";

export default function TechStack() {
    return (
        <section id="stack" className="py-24 px-6 md:px-20 bg-[#0B0C10] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-12">
                    <h3 className="text-accent tracking-widest text-sm font-semibold mb-2 uppercase">
                        What I Work With
                    </h3>
                    <h2 className="text-5xl font-serif italic text-white">Tech Stack</h2>
                </div>

                <div className="space-y-12">
                    {techCategories.map((category) => (
                        <div key={category.title}>
                            <div className="flex items-baseline gap-4 mb-6">
                                <h3 className="text-xl font-bold text-white">{category.title}</h3>
                                <p className="text-gray-500 text-sm">{category.blurb}</p>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {category.items.map((item, i) => (
                                    <motion.div
                                        key={item.name}
                                        initial={{ opacity: 0, y: 16 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.3, delay: i * 0.04 }}
                                        className="flex items-center gap-4 p-4 rounded-2xl bg-[#16171D] border border-white/5 hover:border-accent/30 hover:bg-white/5 transition-all group"
                                    >
                                        <div className="p-3 rounded-xl bg-black border border-white/10 group-hover:border-accent/50 transition-colors shrink-0">
                                            <TechIcon tech={item} size={26} />
                                        </div>
                                        <div className="min-w-0">
                                            <h4 className="text-white font-bold text-sm md:text-base truncate">
                                                {item.name}
                                            </h4>
                                            <p className="text-gray-400 text-xs">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
