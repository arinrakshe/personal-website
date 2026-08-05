"use client";

import { motion } from "framer-motion";
import { GraduationCap, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import TechIcon from "@/components/TechIcon";
import { marqueeTech } from "@/data/tech";

const experience = [
    {
        role: "Software Engineer Co-op",
        org: "Axcelis Technologies",
        location: "Beverly, MA",
        period: "Jul 2026 — Present",
        current: true,
    },
    {
        role: "Undergraduate Research Assistant",
        org: "Massachusetts General Hospital",
        location: "Boston, MA",
        period: "Jan 2026 — Present",
        current: true,
    },
    {
        role: "Undergraduate Research Assistant",
        org: "University of Connecticut",
        location: "Storrs, CT",
        period: "May 2025 — Sep 2025",
        current: false,
    },
    {
        role: "Software Engineer Intern",
        org: "Beacon Industries",
        location: "Newington, CT",
        period: "Jun 2025 — Aug 2025",
        current: false,
    },
    {
        role: "Data Science Research Intern",
        org: "Yale School of Medicine",
        location: "New Haven, CT",
        period: "Jun 2024 — Aug 2024",
        current: false,
    },
];

const Card = ({
    children,
    className,
    delay = 0,
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
}) => (
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

export default function About() {
    return (
        <section id="about" className="px-6 md:px-20 py-20 max-w-7xl mx-auto bg-[#0B0C10]">
            <div className="mb-12">
                <h3 className="text-gray-500 tracking-widest text-sm font-semibold mb-2 uppercase">About Me</h3>
                <h2 className="text-5xl font-serif italic text-white">Get to Know Me</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Experience timeline */}
                <Card className="md:col-span-1 flex flex-col">
                    <h3 className="text-gray-500 text-sm tracking-widest uppercase mb-8 ml-1">My Experience</h3>

                    <div className="space-y-8 relative border-l border-white/10 ml-3 pl-8">
                        {experience.map((job) => (
                            <div key={`${job.org}-${job.period}`} className="relative group">
                                <div
                                    className={cn(
                                        "absolute -left-[37px] top-1.5 w-4 h-4 rounded-full border-[3px] border-[#16171D] transition-transform group-hover:scale-110",
                                        job.current
                                            ? "bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.4)]"
                                            : "bg-white/20 group-hover:bg-accent"
                                    )}
                                />
                                <h4 className="text-lg font-bold text-white mb-1">{job.role}</h4>
                                <p className="text-gray-400 text-sm mb-1">
                                    {job.org} <span className="text-gray-600">· {job.location}</span>
                                </p>
                                <p className="text-gray-600 text-xs uppercase tracking-wide">{job.period}</p>
                            </div>
                        ))}
                    </div>
                </Card>

                {/* Right column */}
                <div className="flex flex-col gap-6 md:col-span-1">
                    <Card className="flex-1 flex flex-col justify-center p-0 relative overflow-hidden group" delay={0.1}>
                        <div
                            className="absolute inset-0 bg-cover bg-center opacity-40 group-hover:opacity-60 transition-opacity duration-700"
                            style={{
                                backgroundImage:
                                    'linear-gradient(to bottom, transparent, #16171D), url("https://images.unsplash.com/photo-1542621323-be1298c5535c?q=80&w=2574&auto=format&fit=crop")',
                            }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#16171D] via-transparent to-transparent pointer-events-none" />

                        <div className="relative z-10 p-8 flex flex-col justify-center">
                            <p className="text-gray-500 text-xs tracking-widest uppercase mb-2 flex items-center gap-2">
                                <MapPin size={12} /> Based In
                            </p>
                            <h3 className="text-4xl font-bold text-white">Boston, MA</h3>
                        </div>
                    </Card>

                    <Card className="flex-1" delay={0.15}>
                        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4 flex items-center gap-2">
                            <GraduationCap size={14} /> Education
                        </p>
                        <h3 className="text-xl font-bold text-white mb-1">Northeastern University</h3>
                        <p className="text-gray-400 text-sm mb-3">Khoury College of Computer Sciences</p>
                        <p className="text-gray-300 text-sm">
                            B.S. Computer Science &amp; Mathematics, Minor in Finance
                        </p>
                        <p className="text-gray-600 text-xs uppercase tracking-wide mt-2">Apr 2028</p>
                    </Card>

                    <Card className="flex-1 flex flex-col justify-center" delay={0.2}>
                        <p className="text-gray-500 text-xs tracking-widest uppercase mb-4">My Passion</p>
                        <h3 className="text-2xl md:text-3xl font-medium leading-snug text-white">
                            I like building <span className="text-accent">AI</span> that does the boring work, so people
                            can do the work that matters.
                        </h3>
                    </Card>
                </div>
            </div>

            {/* Tech marquee */}
            <div className="mt-10 relative overflow-hidden rounded-[32px] border border-white/5 bg-[#16171D] py-8">
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-[#16171D] to-transparent pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-[#16171D] to-transparent pointer-events-none" />

                <div className="flex w-max animate-marquee gap-14 pr-14">
                    {[...marqueeTech, ...marqueeTech].map((tech, i) => (
                        <div
                            key={`${tech.name}-${i}`}
                            className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity"
                        >
                            <TechIcon tech={tech} size={32} />
                            <span className="text-gray-300 text-sm whitespace-nowrap">{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>

            <p className="text-center text-gray-500 mt-6 text-sm">
                Focused on making fast, reliable software.
            </p>
        </section>
    );
}
