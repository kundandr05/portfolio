"use client";

import React from 'react';
import { Wrench } from 'lucide-react';
import { skillCategories, marqueeRow1, marqueeRow2 } from '@/data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24 relative overflow-hidden">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-10">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-3">
          <Wrench className="w-3.5 h-3.5" />
          <span>Technical Toolkit</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Skills I&apos;ve actually{' '}
          <span className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1">
            shipped with
          </span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Zero arbitrary percentage bars. Every tool listed below is directly tied to a shipped project or verified research.
        </p>
      </div>

      {/* MARQUEE TAPE 1: Left to Right */}
      <div className="mb-4 -mx-4 sm:-mx-8 overflow-hidden py-2 bg-[#fde047] border-y-2 border-[#18181b] rotate-1 shadow-[2px_2px_0px_#18181b]">
        <div className="flex w-max animate-[marquee_28s_linear_infinite] hover:[animation-play-state:paused] gap-8 font-display font-black text-sm sm:text-base tracking-wide text-[#18181b]">
          {[...marqueeRow1, ...marqueeRow1].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#ef4444] text-xs">★</span>
            </span>
          ))}
        </div>
      </div>

      {/* MARQUEE TAPE 2: Right to Left */}
      <div className="mb-12 -mx-4 sm:-mx-8 overflow-hidden py-2 bg-[#38bdf8] border-y-2 border-[#18181b] -rotate-1 shadow-[2px_2px_0px_#18181b]">
        <div className="flex w-max animate-[marquee-reverse_30s_linear_infinite] hover:[animation-play-state:paused] gap-8 font-display font-black text-sm sm:text-base tracking-wide text-[#18181b]">
          {[...marqueeRow2, ...marqueeRow2].map((item, i) => (
            <span key={i} className="inline-flex items-center gap-6">
              <span>{item}</span>
              <span className="text-[#18181b] text-xs">✦</span>
            </span>
          ))}
        </div>
      </div>

      {/* Domain-Grouped Skill Clusters */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillCategories.map((category, idx) => (
          <div
            key={category.title}
            className={`bg-white border-2 border-[#18181b] rounded-2xl p-6 shadow-[5px_5px_0px_#18181b] hover:shadow-[8px_8px_0px_#18181b] transition-all relative ${
              idx % 2 === 0 ? '-rotate-0.5 hover:rotate-0' : 'rotate-0.5 hover:rotate-0'
            }`}
          >
            {/* Header */}
            <div className="flex items-start justify-between pb-3 mb-4 border-b border-[#18181b]/15">
              <div>
                <h3 className="text-xl font-display font-black text-[#18181b]">
                  {category.title}
                </h3>
                <p className="text-xs text-stone-500 font-mono mt-0.5">{category.tagline}</p>
              </div>
              <span
                className={`w-3 h-3 rounded-full border border-[#18181b] ${
                  category.color === 'tomato'
                    ? 'bg-[#ef4444]'
                    : category.color === 'yellow'
                    ? 'bg-[#fde047]'
                    : category.color === 'green'
                    ? 'bg-[#22c55e]'
                    : 'bg-[#38bdf8]'
                }`}
              />
            </div>

            {/* Skill Tags Linked to Shipped Systems */}
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="group/tag inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#faf7ee] hover:bg-white border border-[#18181b] rounded-xl text-xs font-bold text-[#18181b] shadow-[2px_2px_0px_#18181b] hover:-translate-y-0.5 transition-all"
                >
                  <span>{skill.name}</span>
                  <span className="text-[10px] font-mono text-stone-500 font-normal group-hover/tag:text-[#ef4444] transition-colors">
                    ↳ {skill.usedIn}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
