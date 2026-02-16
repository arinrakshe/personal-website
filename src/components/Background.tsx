"use client";

import { useEffect, useState } from "react";

export default function Background() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="fixed inset-0 w-full h-full -z-50 overflow-hidden pointer-events-none bg-[#0B0C10]">
            {/* 
        Global Ambient Animated Gradients 
        These are large, blurred orbs that move slowly to create a "living" background 
      */}

            {/* Top Right - Blue */}
            <div
                className="absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen"
                style={{ animationDuration: '10s' }}
            />

            {/* Bottom Left - Purple */}
            <div
                className="absolute bottom-[-20%] left-[-10%] w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse mix-blend-screen"
                style={{ animationDuration: '15s', animationDelay: '2s' }}
            />

            {/* Center - Cyan */}
            <div
                className="absolute top-[30%] left-[20%] w-[50vw] h-[50vw] max-w-[600px] max-h-[600px] bg-cyan-500/10 rounded-full blur-[100px] animate-bounce mix-blend-screen"
                style={{ animationDuration: '20s', animationDelay: '5s' }}
            />

            {/* Extra Fill - Bottom Right */}
            <div
                className="absolute bottom-[10%] right-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-indigo-500/10 rounded-full blur-[80px] animate-pulse mix-blend-screen"
                style={{ animationDuration: '12s', animationDelay: '1s' }}
            />

            {/* Extra Fill - Top Left */}
            <div
                className="absolute top-[10%] left-[10%] w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] bg-violet-500/10 rounded-full blur-[80px] animate-pulse mix-blend-screen"
                style={{ animationDuration: '18s', animationDelay: '3s' }}
            />

            {/* Noise Texture Overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>
    );
}
