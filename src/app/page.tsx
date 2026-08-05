import Dock from "@/components/Dock";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";
import BeyondTheIDE from "@/components/BeyondTheIDE";
import Contact from "@/components/Contact";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#0B0C10] text-white selection:bg-accent/30 selection:text-white pb-32">
            <Dock />

            <Hero />
            <About />
            <Projects />
            <TechStack />
            <BeyondTheIDE />
            <Contact />
        </main>
    );
}
