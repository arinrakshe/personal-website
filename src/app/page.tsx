import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import BentoGrid from "@/components/BentoGrid";
import Projects from "@/components/Projects";
import TechStackAndFooter from "@/components/TechStackAndFooter";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0B0C10] text-white selection:bg-accent/30 selection:text-white pb-32">
            <div className="fixed inset-0 z-[100] pointer-events-none opacity-20 mix-blend-overlay"></div>

            <Dock />

            <Hero />
            <BentoGrid />
            <Projects />
            <TechStackAndFooter />
        </main>
    );
}
