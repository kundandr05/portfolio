"use client";

import { useState, useEffect, useSyncExternalStore } from 'react';
import { Clock, BookOpen, Hammer, Headphones } from 'lucide-react';

function subscribe() {
    return () => {};
}

export default function About() {
    const isMounted = useSyncExternalStore(subscribe, () => true, () => false);
    const [currentTime, setCurrentTime] = useState<string>('');

    useEffect(() => {
        const updateClock = () => {
            const now = new Date();
            const ist = now.toLocaleTimeString('en-IN', {
                timeZone: 'Asia/Kolkata',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12: true
            });
            setCurrentTime(ist);
        };
        updateClock();
        const interval = setInterval(updateClock, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="py-20 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                        About Me
                    </span>
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-semibold mt-1">
                        How I think and what I care about
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    
                    {/* Narrative Column */}
                    <div className="lg:col-span-7 space-y-5 text-stone-700 dark:text-stone-300 text-sm sm:text-base leading-relaxed">
                        <p>
                            I&apos;m an undergraduate studying Computer Science &amp; Engineering (AI &amp; ML) at Maharaja Institute of Technology in Mysuru, graduating in 2027. I started coding by building simple web scripts, but got hooked on systems when I realized how chaotic multi-step workflows become when real humans and unreliable networks get involved.
                        </p>
                        
                        <p>
                            Most of my recent technical work focuses on <strong className="text-stone-900 dark:text-stone-100 font-semibold">Agentic AI and constraint-driven architectures</strong>. During a 3-day hackathon, I built an autonomous tournament agent that negotiated match fixtures without human bottlenecks, which I later expanded and published as a peer-reviewed research paper in <strong className="text-stone-900 dark:text-stone-100 font-semibold">IJCRT</strong>. Recently, I built <strong className="text-stone-900 dark:text-stone-100 font-semibold">DispatchGrid</strong>, implementing heuristic 2-opt swaps to recalculate field technician routes within sub-second deadlines when unexpected emergencies hit.
                        </p>

                        <p>
                            Outside of software, I care deeply about how our environments shape our attention. In 2024, I wrote and published two books on Amazon KDP — <em>Reclaim Your Focus</em> and <em>The Two-Speed Mind</em> — analyzing dopamine mechanics and the friction between analog habits and modern notification overload.
                        </p>

                        <p>
                            Right now, I&apos;m interning at <strong className="text-stone-900 dark:text-stone-100 font-semibold">WizzyBox</strong> in their UI/UX Career Accelerator Program, studying user journeys and empathy mapping to ensure that whatever backend logic I build actually serves the person on the other end of the screen.
                        </p>
                    </div>

                    {/* "Currently" Desk Strip & Fast Facts (Clean, non-gimmicky) */}
                    <div className="lg:col-span-5 space-y-6">
                        
                        {/* Currently Strip */}
                        <div className="card-editorial p-6 space-y-4">
                            <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-stone-800">
                                <span className="text-xs font-mono uppercase tracking-wider text-stone-500 font-bold">
                                    Currently &bull; Live Telemetry
                                </span>
                                <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-emerald-600 dark:text-emerald-400">
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                                    Mysuru, IN
                                </span>
                            </div>

                            {/* Local Time */}
                            <div className="flex items-center gap-2.5">
                                <Clock className="w-4 h-4 text-[#c2410c] shrink-0" />
                                <div className="text-xs">
                                    <span className="font-mono font-bold text-stone-900 dark:text-stone-100 text-sm">
                                        {isMounted && currentTime ? currentTime : '11:45 PM'}
                                    </span>
                                    <span className="text-stone-500 font-mono ml-2 text-[11px]">IST (UTC+5:30)</span>
                                </div>
                            </div>

                            {/* Building */}
                            <div className="flex items-start gap-2.5 text-xs">
                                <Hammer className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-stone-900 dark:text-stone-200">Building: </strong>
                                    <span className="text-stone-600 dark:text-stone-400">Disruption recovery engines &amp; Groq LPU routing</span>
                                </div>
                            </div>

                            {/* Reading */}
                            <div className="flex items-start gap-2.5 text-xs">
                                <BookOpen className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-stone-900 dark:text-stone-200">Reading: </strong>
                                    <span className="text-stone-600 dark:text-stone-400">Multi-agent consensus protocols &amp; cognitive fatigue papers</span>
                                </div>
                            </div>

                            {/* Listening */}
                            <div className="flex items-start gap-2.5 text-xs">
                                <Headphones className="w-4 h-4 text-stone-400 shrink-0 mt-0.5" />
                                <div>
                                    <strong className="text-stone-900 dark:text-stone-200">Listening to: </strong>
                                    <span className="text-stone-600 dark:text-stone-400">Instrumental focus / lo-fi deep work</span>
                                </div>
                            </div>
                        </div>

                        {/* Fast Facts Card */}
                        <div className="card-editorial p-6 text-xs space-y-3">
                            <h4 className="font-mono text-xs uppercase tracking-wider text-stone-400 font-bold mb-2">
                                Background at a glance
                            </h4>
                            <div className="flex justify-between py-1.5 border-b border-stone-100 dark:border-stone-800">
                                <span className="text-stone-500">Degree</span>
                                <span className="font-medium text-stone-900 dark:text-stone-200">B.E. CSE (AI &amp; ML) &bull; 2027</span>
                            </div>
                            <div className="flex justify-between py-1.5 border-b border-stone-100 dark:border-stone-800">
                                <span className="text-stone-500">Institution</span>
                                <span className="font-medium text-stone-900 dark:text-stone-200">MIT Mysuru</span>
                            </div>
                            <div className="flex justify-between py-1.5 border-b border-stone-100 dark:border-stone-800">
                                <span className="text-stone-500">Internship</span>
                                <span className="font-medium text-stone-900 dark:text-stone-200">UI/UX Design @ WizzyBox</span>
                            </div>
                            <div className="flex justify-between py-1.5">
                                <span className="text-stone-500">Publications</span>
                                <span className="font-medium text-stone-900 dark:text-stone-200">1 Paper (IJCRT) &bull; 2 Books</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}
