"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Clock, MapPin, Terminal, Music, Sparkles, CheckCircle2, ArrowUpRight, Cpu, BookOpen, Award, Coffee } from 'lucide-react';
import Link from 'next/link';

export default function HumanDesk() {
    // Live Mysuru Clock (IST = UTC+5:30)
    const [currentTime, setCurrentTime] = useState<string>('');
    const [isPlayingMusic, setIsPlayingMusic] = useState<boolean>(true);
    const [terminalOutput, setTerminalOutput] = useState<string>(
        "Welcome! Click any command below to inspect my profile."
    );
    const [activeCmd, setActiveCmd] = useState<string>('welcome');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const istTime = now.toLocaleTimeString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            setCurrentTime(istTime);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    const runCommand = (cmd: string) => {
        setActiveCmd(cmd);
        switch (cmd) {
            case 'bio':
                setTerminalOutput(
                    "Kundan DR | AIML Undergrad @ MIT Mysuru ('27)\nSpecializing in Agentic Multi-Agent Systems, FastAPI, and LLM Engineering.\nPublished researcher in IJCRT and author of 2 books on Amazon KDP."
                );
                break;
            case 'stack':
                setTerminalOutput(
                    "Languages: Python, TypeScript, JavaScript, Dart, SQL\nAI / ML: Agentic AI, LangChain, Groq, Gemini API, RAG, Ollama\nBackend: FastAPI, Next.js, Express.js, PostgreSQL, Supabase, Prisma\nDesign: Figma, Design Thinking, Wireframing (WizzyBox WCAP)"
                );
                break;
            case 'publications':
                setTerminalOutput(
                    "1. Paper: 'Tournament Management Agent Using Agentic AI' (IJCRT 2025)\n2. Book: 'RECLAIM YOUR FOCUS' (Amazon KDP 2024)\n3. Book: 'The Two-Speed Mind' (Amazon KDP 2024)"
                );
                break;
            case 'hire':
                setTerminalOutput(
                    "STATUS: Ready for SWE / AI Engineer Internships!\nLocation: Remote / Bengaluru / Mysuru / Hybrid\nEmail: kundandr05@gmail.com\nLet's build something extraordinary together."
                );
                break;
            default:
                setTerminalOutput("Command not recognized. Try one of the buttons below.");
        }
    };

    return (
        <section id="human-desk" className="py-20 relative">
            <div className="container mx-auto px-4 max-w-6xl">
                {/* Section Header with Crazy Typography */}
                <div className="text-center mb-14 relative">
                    <span className="font-handwriting text-2xl text-blue-600 font-bold rotate-[-3deg] inline-block mb-1">
                        behind the scenes ☕
                    </span>
                    <h2 className="text-4xl md:text-5xl font-display font-extrabold text-slate-900 tracking-tight">
                        The Developer&apos;s{' '}
                        <span className="font-serif-italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-rose-600">
                            Studio Desk
                        </span>
                    </h2>
                    <p className="text-slate-600 text-base max-w-xl mx-auto mt-2">
                        Live real-time telemetry, focus soundtrack, and interactive shell direct from Mysuru, India.
                    </p>
                </div>

                {/* Bento Desk Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

                    {/* Tile 1: Live Mysuru Time & Real-Time Status (Span 4) */}
                    <div className="md:col-span-4 bg-white/95 backdrop-blur-md rounded-3xl p-6 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] flex flex-col justify-between relative overflow-hidden group hover:border-blue-400 transition-all">
                        <div className="flex items-center justify-between mb-4">
                            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-semibold border border-emerald-200">
                                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                                <span>Live Telemetry</span>
                            </div>
                            <span className="text-[11px] font-mono text-slate-400 uppercase tracking-widest">
                                IST (UTC+5:30)
                            </span>
                        </div>

                        <div className="my-3">
                            <div className="flex items-baseline gap-2">
                                <Clock className="w-5 h-5 text-blue-600 shrink-0" />
                                <span className="text-3xl sm:text-4xl font-mono font-bold text-slate-900 tracking-tight">
                                    {currentTime || "11:45:00 PM"}
                                </span>
                            </div>
                            <div className="flex items-center gap-1.5 text-xs text-slate-500 mt-2 font-medium">
                                <MapPin className="w-3.5 h-3.5 text-rose-500" />
                                <span>Mysuru, Karnataka, India (12.2958° N, 76.6394° E)</span>
                            </div>
                        </div>

                        <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
                            <div className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                                <span className="font-semibold text-slate-800">Current Focus:</span>
                                <span>Multi-agent fleet recovery, greedy scheduling & Groq LPU acceleration.</span>
                            </div>
                            <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono">
                                <Coffee className="w-3 h-3 text-amber-500" />
                                <span>Late night engineering session</span>
                            </div>
                        </div>
                    </div>

                    {/* Tile 2: Interactive Developer Terminal (Span 5) */}
                    <div className="md:col-span-5 bg-slate-950 text-slate-100 rounded-3xl p-5 border border-slate-800 shadow-xl flex flex-col justify-between font-mono relative overflow-hidden">
                        {/* Terminal Header */}
                        <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                            <div className="flex items-center gap-1.5">
                                <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                                <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                                <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                            </div>
                            <span className="text-[11px] text-slate-400 font-mono">kundan@studio-mysuru:~</span>
                            <div className="w-8" />
                        </div>

                        {/* Terminal Body */}
                        <div className="py-4 text-xs leading-relaxed font-mono min-h-[140px] whitespace-pre-wrap text-emerald-400">
                            <div className="text-slate-400 mb-1">$ kundan --run {activeCmd}</div>
                            <div>{terminalOutput}</div>
                        </div>

                        {/* Terminal Interactive Action Buttons */}
                        <div className="pt-3 border-t border-slate-800 flex flex-wrap gap-1.5">
                            {[
                                { id: 'bio', label: 'kundan --bio' },
                                { id: 'stack', label: 'kundan --stack' },
                                { id: 'publications', label: 'kundan --papers' },
                                { id: 'hire', label: 'sudo hire' }
                            ].map((btn) => (
                                <button
                                    key={btn.id}
                                    onClick={() => runCommand(btn.id)}
                                    className={`text-[10px] px-2.5 py-1 rounded-md transition-all font-mono ${
                                        activeCmd === btn.id
                                            ? 'bg-blue-600 text-white font-bold'
                                            : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                                    }`}
                                >
                                    {btn.label}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Tile 3: Focus Soundtrack / Now Playing (Span 3) */}
                    <div className="md:col-span-3 bg-gradient-to-br from-indigo-50/80 to-purple-50/80 rounded-3xl p-6 border border-indigo-100 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)] flex flex-col justify-between relative overflow-hidden group">
                        <div className="flex items-center justify-between">
                            <span className="text-[10px] uppercase font-mono tracking-widest text-indigo-700 font-bold">
                                Focus Audio
                            </span>
                            <button
                                onClick={() => setIsPlayingMusic(!isPlayingMusic)}
                                aria-label="Toggle focus music simulation"
                                className="p-2 rounded-full bg-white shadow-sm border border-indigo-200 text-indigo-600 hover:scale-110 transition-transform"
                            >
                                <Music className={`w-4 h-4 ${isPlayingMusic ? 'text-indigo-600' : 'text-slate-400'}`} />
                            </button>
                        </div>

                        <div className="my-4">
                            <p className="font-handwriting text-xl text-indigo-900 font-bold">
                                On Repeat 🎧
                            </p>
                            <p className="text-sm font-bold text-slate-900 mt-1">
                                Synthwave & Lo-Fi Beats
                            </p>
                            <p className="text-xs text-slate-500 font-mono mt-0.5">
                                High-focus coding flow
                            </p>
                        </div>

                        {/* Animated Equalizer Wave */}
                        <div className="flex items-end gap-1.5 h-8 pt-2">
                            {[12, 24, 18, 30, 16, 26, 20, 28, 14, 22].map((height, i) => (
                                <motion.div
                                    key={i}
                                    className="flex-1 bg-gradient-to-t from-indigo-600 to-purple-500 rounded-full"
                                    animate={isPlayingMusic ? { height: [height * 0.4, height, height * 0.6] } : { height: 4 }}
                                    transition={{ duration: 0.8 + (i * 0.1), repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Tile 4: Key Impact Metrics Bento Strip (Span 12) */}
                    <div className="md:col-span-12 bg-white/95 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-slate-200/90 shadow-[0_4px_20px_-2px_rgba(15,23,42,0.06)]">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
                            
                            {/* Metric 1 */}
                            <div className="p-3">
                                <span className="font-handwriting text-lg text-blue-600 font-bold block rotate-[-2deg]">
                                    peer-reviewed 📄
                                </span>
                                <div className="text-4xl md:text-5xl font-black text-slate-900 font-display mt-1">
                                    1
                                </div>
                                <p className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wide">
                                    Research Paper
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium">
                                    IJCRT (Agentic AI)
                                </p>
                            </div>

                            {/* Metric 2 */}
                            <div className="p-3 pt-6 md:pt-3">
                                <span className="font-handwriting text-lg text-rose-500 font-bold block rotate-[2deg]">
                                    worldwide 📚
                                </span>
                                <div className="text-4xl md:text-5xl font-black text-slate-900 font-display mt-1">
                                    2
                                </div>
                                <p className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wide">
                                    Published Books
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium">
                                    Amazon KDP Worldwide
                                </p>
                            </div>

                            {/* Metric 3 */}
                            <div className="p-3 pt-6 md:pt-3">
                                <span className="font-handwriting text-lg text-emerald-600 font-bold block rotate-[-2deg]">
                                    production code ⚡
                                </span>
                                <div className="text-4xl md:text-5xl font-black text-slate-900 font-display mt-1">
                                    8+
                                </div>
                                <p className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wide">
                                    Shipped Projects
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium">
                                    Agentic AI & Full-Stack
                                </p>
                            </div>

                            {/* Metric 4 */}
                            <div className="p-3 pt-6 md:pt-3">
                                <span className="font-handwriting text-lg text-purple-600 font-bold block rotate-[2deg]">
                                    accelerator 🎨
                                </span>
                                <div className="text-4xl md:text-5xl font-black text-slate-900 font-display mt-1">
                                    WCAP
                                </div>
                                <p className="text-xs font-bold text-slate-700 mt-1 uppercase tracking-wide">
                                    Design Intern
                                </p>
                                <p className="text-[11px] text-slate-500 font-medium">
                                    WizzyBox Private Limited
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
