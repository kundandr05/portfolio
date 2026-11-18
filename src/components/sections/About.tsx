"use client";

import React, { useSyncExternalStore } from 'react';
import Image from 'next/image';
import { User, BookOpen, Clock, Headphones, Hammer } from 'lucide-react';

// SSR-safe client time subscriber
function subscribe(callback: () => void) {
  const timer = setInterval(callback, 1000);
  return () => clearInterval(timer);
}

function getSnapshot() {
  return new Date().toLocaleTimeString('en-US', {
    timeZone: 'Asia/Kolkata',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  });
}

function getServerSnapshot() {
  return '--:--:-- --';
}

export default function About() {
  const liveTime = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  return (
    <section id="about" className="py-16 md:py-24 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#38bdf8] text-[#18181b] border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider rotate-1 mb-3">
          <User className="w-3.5 h-3.5" />
          <span>Behind The Code</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          A short note on{' '}
          <span className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1">
            who I am
          </span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Undergraduate engineer at MIT Mysuru, researcher, and author. I care about systems that work reliably and feel good to use.
        </p>
      </div>

      {/* Main Grid: Notebook Paper Story + Photo & Pinboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Notebook Page Story */}
        <div className="lg:col-span-7 bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#18181b] relative -rotate-0.5">
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-12 w-24 h-6 bg-[#fde047]/90 border border-[#18181b]/30 rotate-2 z-20 pointer-events-none shadow-xs" />

          {/* Notebook Header */}
          <div className="flex items-center justify-between pb-4 mb-4 border-b-2 border-stone-100">
            <span className="text-xs font-mono font-bold text-stone-500 uppercase tracking-widest">
              FIELD NOTES // KUNDAN DR
            </span>
            <span className="text-xs font-handwriting text-[#ef4444] font-bold text-base rotate-[-2deg]">
              written by hand ✍️
            </span>
          </div>

          {/* First-person story paragraphs */}
          <div className="space-y-4 text-stone-700 text-sm sm:text-base leading-relaxed">
            <p>
              I got into coding because I wanted to build systems that cut through confusion. My undergraduate work at <strong>Maharaja Institute of Technology, Mysuru</strong> is focused on <strong>Artificial Intelligence & Machine Learning</strong>, but my everyday curiosity lives in backend plumbing: writing deterministic scheduling algorithms, streaming API responses, and coordinating multi-agent workflows.
            </p>

            <p>
              When I hit algorithmic roadblocks—like the NP-hard constraint solver in <em>DispatchGrid</em> or tournament bracket state machines—I don&apos;t just copy boilerplates. I research the math, write out the state transitions, and test edge cases until it holds. That curiosity led to publishing peer-reviewed research in the <strong>International Journal of Creative Research Thoughts (IJCRT)</strong> on Agentic AI.
            </p>

            <p>
              Beyond code, I think a lot about cognitive bandwidth and developer productivity. I&apos;ve written and published two books on <strong>Amazon KDP</strong> (<em>The Two-Speed Mind</em> and <em>The Habit of Focus</em>) exploring how to switch between rapid execution and deep, uninterrupted architectural thinking.
            </p>

            <p>
              Right now, I am blending backend engineering with interface craftsmanship as a <strong>UI/UX Design Intern at WizzyBox</strong> (WCAP), preparing to graduate in 2027 and eager to contribute to high-impact teams.
            </p>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-6 mt-6 border-t-2 border-[#18181b]/10 text-center">
            <div className="p-3 bg-[#faf7ee] border border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b]">
              <span className="block font-display font-black text-xl text-[#ef4444]">2027</span>
              <span className="text-[11px] font-mono text-stone-600 font-bold">Graduation Year</span>
            </div>
            <div className="p-3 bg-[#faf7ee] border border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b]">
              <span className="block font-display font-black text-xl text-[#22c55e]">1 Paper</span>
              <span className="text-[11px] font-mono text-stone-600 font-bold">IJCRT Peer-Reviewed</span>
            </div>
            <div className="p-3 bg-[#faf7ee] border border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] col-span-2 sm:col-span-1">
              <span className="block font-display font-black text-xl text-[#38bdf8]">2 Books</span>
              <span className="text-[11px] font-mono text-stone-600 font-bold">Amazon KDP</span>
            </div>
          </div>
        </div>

        {/* Right Column: Polaroid Photo + "Currently" Pinboard Strip */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          
          {/* Polaroid Frame Photo */}
          <div className="bg-white border-2 border-[#18181b] rounded-2xl p-4 shadow-[6px_6px_0px_#18181b] rotate-1 relative">
            <div className="absolute -top-3 right-8 w-20 h-5 bg-[#fed7aa] border border-[#18181b]/30 -rotate-3 z-20 pointer-events-none shadow-xs" />

            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#18181b]/30 bg-stone-100 mb-3">
              <Image
                src="/kundan-profile.jpg"
                alt="Kundan working at desk"
                fill
                className="object-cover object-center hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>

            <div className="flex items-center justify-between text-xs font-handwriting text-stone-700 px-1">
              <span className="font-bold text-sm text-[#18181b]">Kundan DR</span>
              <span>Mysuru, India 🇮🇳</span>
            </div>
          </div>

          {/* "Currently" Pinboard Strip */}
          <div className="bg-[#ffffff] border-2 border-[#18181b] rounded-2xl p-5 shadow-[5px_5px_0px_#18181b] -rotate-1">
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-[#18181b]/20">
              <span className="text-xs font-mono font-bold text-[#18181b] flex items-center gap-1.5 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#22c55e] animate-ping" />
                Live Status // Currently
              </span>
              <span className="text-[11px] font-mono font-bold text-stone-500">
                IST (UTC+5:30)
              </span>
            </div>

            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-[#fde047] border border-[#18181b] rounded-md shrink-0 mt-0.5">
                  <Hammer className="w-3.5 h-3.5 text-[#18181b]" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Building:</span>
                  <span className="text-stone-600">DispatchGrid 2-opt route solver & multi-agent tournament pipelines</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-[#38bdf8] border border-[#18181b] rounded-md shrink-0 mt-0.5">
                  <BookOpen className="w-3.5 h-3.5 text-[#18181b]" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Reading:</span>
                  <span className="text-stone-600">Designing Data-Intensive Applications by Martin Kleppmann</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div className="p-1.5 bg-[#22c55e] border border-[#18181b] rounded-md shrink-0 mt-0.5">
                  <Headphones className="w-3.5 h-3.5 text-[#18181b]" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Listening to:</span>
                  <span className="text-stone-600">Ambient synthwave & lo-fi deep focus playlists</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5 pt-2 border-t border-stone-100">
                <div className="p-1.5 bg-[#ef4444] text-white border border-[#18181b] rounded-md shrink-0 mt-0.5">
                  <Clock className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-bold text-[#18181b] block">Mysuru Local Time:</span>
                  <span className="text-stone-800 font-mono font-bold">{liveTime}</span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
