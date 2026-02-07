'use client';

import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Brain, Sparkles, Database, Zap, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function ParallaxHero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Mouse movement logic
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smoother spring configuration for organic tilt
    const springConfig = { damping: 30, stiffness: 200, mass: 0.5 };
    const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), springConfig);
    const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), springConfig);

    // Background particles logic
    const [particles, setParticles] = useState<Array<{ x: number; y: number; delay: number }>>([]);

    useEffect(() => {
        // Generate random particles only on client-side to match hydration
        const newParticles = Array.from({ length: 20 }).map(() => ({
            x: Math.random() * 100,
            y: Math.random() * 100,
            delay: Math.random() * 5,
        }));
        setParticles(newParticles);
    }, []);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const { innerWidth, innerHeight } = window;
            mouseX.set(e.clientX / innerWidth - 0.5);
            mouseY.set(e.clientY / innerHeight - 0.5);
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const titleWords = "Second Brain".split(" ");

    return (
        <div ref={ref} className="relative h-screen flex items-center justify-center overflow-hidden bg-[#030711] perspective-1000">
            {/* Animated Grid Background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

            {/* Deep Atmospheric Glows */}
            <motion.div
                style={{ x: useTransform(mouseX, [-0.5, 0.5], [-20, 20]), y: useTransform(mouseY, [-0.5, 0.5], [-20, 20]) }}
                className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
            />
            <motion.div
                style={{ x: useTransform(mouseX, [-0.5, 0.5], [20, -20]), y: useTransform(mouseY, [-0.5, 0.5], [20, -20]) }}
                className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse"
            />

            {/* Interactive Particles */}
            {particles.map((particle, i) => (
                <motion.div
                    key={i}
                    className="absolute w-1 h-1 bg-white/30 rounded-full"
                    style={{ left: `${particle.x}%`, top: `${particle.y}%` }}
                    animate={{
                        y: [0, -30, 0],
                        opacity: [0, 1, 0],
                        scale: [0, 1, 0],
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Infinity,
                        delay: particle.delay,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.div
                style={{ y, opacity }}
                className="relative z-10 text-center space-y-8 px-4 max-w-5xl mx-auto pt-20"
            >
                {/* 3D Floating Brain Container */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1, type: 'spring' }}
                    style={{ rotateX, rotateY, perspective: 1000 }}
                    className="relative inline-block"
                >
                    {/* Central Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-blue-500/30 blur-3xl rounded-full scale-110" />

                    <motion.div
                        animate={{ y: [-15, 15, -15] }} // Smoother stronger float
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                        className="relative z-10 drop-shadow-[0_0_30px_rgba(139,92,246,0.5)]"
                    >
                        <Brain className="w-32 h-32 md:w-40 md:h-40 mx-auto text-transparent bg-clip-text bg-gradient-to-br from-purple-200 via-white to-blue-200" style={{ stroke: 'url(#brain-gradient)', strokeWidth: 1.5 }} />

                        {/* SVG Gradient Definition for Icon Stroke */}
                        <svg width="0" height="0">
                            <defs>
                                <linearGradient id="brain-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#c084fc" />
                                    <stop offset="50%" stopColor="#fff" />
                                    <stop offset="100%" stopColor="#60a5fa" />
                                </linearGradient>
                            </defs>
                        </svg>

                        {/* Orbiting Elements */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180%] h-[180%] border border-white/5 rounded-full"
                        >
                            <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full blur-[1px] shadow-[0_0_10px_#a855f7]" />
                        </motion.div>
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-white/5 rounded-full"
                        >
                            <div className="absolute bottom-0 left-1/2 w-2 h-2 bg-blue-400 rounded-full blur-[1px] shadow-[0_0_10px_#3b82f6]" />
                        </motion.div>
                    </motion.div>
                </motion.div>

                {/* Cinematic Text Reveal */}
                <div className="overflow-hidden">
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
                        {titleWords.map((word, i) => (
                            <motion.span
                                key={i}
                                initial={{ y: 100, opacity: 0, filter: "blur(10px)" }}
                                animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                                transition={{
                                    duration: 0.8,
                                    delay: 0.2 + i * 0.15,
                                    ease: [0.2, 0.65, 0.3, 0.9],
                                }}
                                className="inline-block mr-4 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/90 to-white/50"
                            >
                                {word}
                            </motion.span>
                        ))}
                    </h1>
                </div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                    className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed font-light"
                >
                    Your AI-powered knowledge engine.
                    <span className="text-white font-normal"> Capture content</span>,
                    <span className="text-white font-normal"> organize thoughts</span>, and
                    <span className="text-white font-normal"> discover insights</span> at the speed of thought.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 }}
                    className="flex flex-wrap gap-4 justify-center pt-8"
                >
                    <Link href="/dashboard">
                        <Button size="lg" className="h-14 px-8 text-lg rounded-full bg-white text-black hover:bg-white/90 shadow-[0_0_20px_rgba(255,255,255,0.3)] transition-all duration-300 hover:scale-105">
                            Get Started
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                    <Link href="/docs">
                        <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-full border-white/10 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300 hover:scale-105">
                            Documentation
                        </Button>
                    </Link>
                </motion.div>

                {/* Feature Pills */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
                >
                    {[
                        { icon: Brain, label: 'AI Analysis' },
                        { icon: Database, label: 'Vector Search' },
                        { icon: Zap, label: 'Instant Sync' },
                        { icon: Sparkles, label: 'Auto-Tagging' },
                    ].map((item, i) => (
                        <div key={i} className="flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-white/5 border border-white/5 backdrop-blur-md">
                            <item.icon className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
                        </div>
                    ))}
                </motion.div>
            </motion.div>
        </div>
    );
}
