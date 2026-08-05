"use client";

import { motion } from "framer-motion";
import { Home, User, Folder, Code, Plus } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const items = [
    { icon: Home, label: "Home", href: "#home" },
    { icon: User, label: "About", href: "#about" },
    { icon: Folder, label: "Projects", href: "#projects" },
    { icon: Code, label: "Stack", href: "#stack" },
    { icon: Plus, label: "Contact", href: "#contact" },
];

export default function Dock() {
    return (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
            <div className="flex items-center gap-4 px-6 py-3 bg-[rgba(11,12,16,0.8)] backdrop-blur-xl border border-[rgba(255,255,255,0.1)] rounded-full shadow-2xl">
                {items.map((item) => (
                    <Link
                        key={item.label}
                        href={item.href}
                        className="relative p-2 group"
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                            className={cn(
                                "p-2 rounded-full transition-colors duration-200",
                                "text-gray-400 group-hover:text-white"
                            )}
                        >
                            <item.icon size={24} />
                        </motion.div>

                        {/* Tooltip */}
                        <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            {item.label}
                        </span>

                        {/* Active Indicator (optional logic for hash navigation) */}
                    </Link>
                ))}
            </div>
        </div>
    );
}
