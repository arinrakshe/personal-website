"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Card = ({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay }}
        className={cn(
            "bg-[#16171D] border border-white/5 p-8 rounded-[32px] hover:border-accent/20 transition-colors",
            className
        )}
    >
        {children}
    </motion.div>
);

export default function BentoGrid() {
    return (
        <section id="about" className="px-6 md:px-20 py-20 max-w-7xl mx-auto bg-[#0B0C10]">
            <div className="mb-12">
                <h3 className="text-gray-500 tracking-widest text-sm font-semibold mb-2 uppercase">About Me</h3>
                <h2 className="text-5xl font-serif italic text-white">
                    Get to <span className="text-white">Know Me</span>
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-auto md:h-[600px]">
                {/* Experience - Large Vertical Left Column */}
                <Card className="md:col-span-1 h-full overflow-hidden flex flex-col relative">
                    <h3 className="text-gray-500 text-sm tracking-widest uppercase mb-8 ml-1">My Experience</h3>

                    <div className="space-y-10 relative border-l border-white/10 ml-3 pl-8 pb-4">

                        {/* Role 1 - Disrupt */}
                        <div className="relative group">
                            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-green-500 border-[3px] border-[#16171D] group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                            <h3 className="text-lg font-bold text-white mb-1">Software Engineer</h3>
                            <p className="text-gray-400 text-sm mb-1">Disrupt-Fintech Initiative</p>
                            <p className="text-gray-600 text-xs uppercase tracking-wide">Present</p>
                        </div>

                        {/* Role 2 - Blockchain */}
                        <div className="relative group">
                            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-green-500 border-[3px] border-[#16171D] group-hover:scale-110 transition-transform shadow-[0_0_10px_rgba(34,197,94,0.4)]" />
                            <h3 className="text-lg font-bold text-white mb-1">Technical Associate</h3>
                            <p className="text-gray-400 text-sm mb-1">Northeastern Blockchain</p>
                            <p className="text-gray-600 text-xs uppercase tracking-wide">Present</p>
                        </div>

                        {/* Role 3 - Oasis */}
                        <div className="relative group">
                            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-white/20 border-[3px] border-[#16171D] group-hover:bg-accent transition-colors" />
                            <h3 className="text-lg font-bold text-white mb-1">Software Developer</h3>
                            <p className="text-gray-400 text-sm mb-1">Oasis</p>
                            <p className="text-gray-600 text-xs uppercase tracking-wide">Sept 2025 - Dec 2025</p>
                        </div>

                        {/* Role 4 - Beacon */}
                        <div className="relative group">
                            <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-white/20 border-[3px] border-[#16171D] group-hover:bg-accent transition-colors" />
                            <h3 className="text-lg font-bold text-white mb-1">Software Engineer Intern</h3>
                            <p className="text-gray-400 text-sm mb-1">Beacon Industries</p>
                            <p className="text-gray-600 text-xs uppercase tracking-wide">June 2025 - August 2025</p>
                        </div>
                    </div>

                    {/* Subtle gradient at bottom to indicate scroll if needed */}
                    <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#16171D] to-transparent pointer-events-none" />
                </Card>

                {/* Right Column Stack */}
                <div className="flex flex-col gap-6 md:col-span-1 h-full">
                    {/* Map - Top Right */}
                    <Card className="flex-1 flex flex-col justify-center bg-[#16171D] p-0 relative overflow-hidden group border border-white/5" delay={0.1}>
                        {/* Simulated Map Background */}
                        <div className="absolute inset-0 bg-[url('/map-dark.png')] bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700 bg-blue-900/10" style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #16171D), url("https://images.unsplash.com/photo-1542621323-be1298c5535c?q=80&w=2574&auto=format&fit=crop")' }} />

                        {/* Radial Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-r from-[#16171D] via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                            <p className="text-gray-500 text-xs tracking-widest uppercase mb-2">Based In</p>
                            <h3 className="text-4xl font-bold text-white mb-1">Boston, MA</h3>
                        </div>
                    </Card>

                    {/* Passion - Bottom Right */}
                    <Card className="flex-1 flex flex-col justify-center bg-[#16171D] border border-white/5" delay={0.2}>
                        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">My Passion</p>
                        <h3 className="text-3xl md:text-3xl font-medium leading-snug text-white">
                            I'm passionate about building <span className="text-accent">AI</span> for a <span className="text-white">purpose.</span>
                        </h3>
                    </Card>
                </div>
            </div>
        </section>
    );
}
