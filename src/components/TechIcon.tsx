"use client";

import { useState } from "react";
import { Award, Database, Link2, Medal, Trophy } from "lucide-react";
import type { Tech } from "@/data/tech";
import { cn } from "@/lib/utils";

const lucideMap = {
    database: Database,
    link: Link2,
    award: Award,
    trophy: Trophy,
    medal: Medal,
};

export default function TechIcon({ tech, size = 28 }: { tech: Tech; size?: number }) {
    const [failed, setFailed] = useState(false);

    if (!tech.slug || failed) {
        const Fallback = tech.lucide ? lucideMap[tech.lucide] : Database;
        return <Fallback size={size} className="text-accent" aria-label={tech.name} />;
    }

    return (
        // eslint-disable-next-line @next/next/no-img-element
        <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.slug}.svg`}
            alt={tech.name}
            width={size}
            height={size}
            loading="lazy"
            onError={() => setFailed(true)}
            className={cn("object-contain", tech.invert && "brightness-0 invert")}
            style={{ width: size, height: size }}
        />
    );
}
