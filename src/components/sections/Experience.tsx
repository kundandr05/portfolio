"use client";

import React from 'react';
import { Briefcase, Calendar, GraduationCap, Compass, FileCheck, ExternalLink } from 'lucide-react';
import { experiences } from '@/data/experience';

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-24 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#22c55e] text-white border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider rotate-1 mb-3">
          <Briefcase className="w-3.5 h-3.5" />
          <span>Timeline</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Experience &{' '}
          <span className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1">
            education
          </span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Real roles and institutional grounding. No exaggerated job titles or fake enterprise claims.
        </p>
      </div>

      {/* Dotted Roadmap Path */}
      <div className="relative pl-6 sm:pl-10 border-l-2 border-dashed border-[#18181b] space-y-12 ml-2 sm:ml-4">
        {experiences.map((item, idx) => (
          <div key={item.id} className="relative group">
            {/* Pop Stop Pin on Dotted Line */}
            <div
              className={`absolute -left-[35px] sm:-left-[51px] top-1.5 w-8 h-8 sm:w-10 sm:h-10 rounded-xl border-2 border-[#18181b] flex items-center justify-center shadow-[2px_2px_0px_#18181b] transition-transform group-hover:scale-110 ${
                item.color === 'tomato'
                  ? 'bg-[#ef4444] text-white'
                  : 'bg-[#fde047] text-[#18181b]'
              }`}
            >
              {item.id === 'wizzybox' ? (
                <Compass className="w-4 h-4 sm:w-5 sm:h-5" />
              ) : (
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              )}
            </div>

            {/* Experience Card */}
            <div
              className={`bg-white border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[5px_5px_0px_#18181b] hover:shadow-[8px_8px_0px_#18181b] transition-all relative ${
                idx % 2 === 0 ? '-rotate-0.5 hover:rotate-0' : 'rotate-0.5 hover:rotate-0'
              }`}
            >
              {/* Card Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-[#18181b]/15">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className={`px-2 py-0.5 border border-[#18181b] rounded-md text-[10px] font-mono font-bold uppercase shadow-[1px_1px_0px_#18181b] ${
                        item.color === 'tomato' ? 'bg-[#ef4444] text-white' : 'bg-[#fde047] text-[#18181b]'
                      }`}
                    >
                      {item.badge}
                    </span>
                    <span className="text-xs font-mono text-stone-500 font-bold">{item.location}</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-display font-black text-[#18181b]">
                    {item.role}
                  </h3>
                  <p className="text-sm font-bold text-stone-700">{item.organization}</p>
                </div>

                <div className="flex items-center gap-1.5 px-3 py-1 bg-[#faf7ee] border border-[#18181b] rounded-lg shadow-[1px_1px_0px_#18181b] text-xs font-mono font-bold self-start sm:self-center">
                  <Calendar className="w-3.5 h-3.5 text-stone-500" />
                  <span>{item.period}</span>
                </div>
              </div>

              {/* Highlights Bullet List */}
              <ul className="space-y-2 text-stone-700 text-xs sm:text-sm">
                {item.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2">
                    <span className="text-[#ef4444] font-bold text-base leading-none mt-0.5">↳</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {/* Document Link for Verified Offer Letter */}
              {item.documentUrl && (
                <div className="pt-4 mt-4 border-t border-[#18181b]/15 flex items-center justify-start">
                  <a
                    href={item.documentUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all"
                  >
                    <FileCheck className="w-3.5 h-3.5 text-[#ef4444]" />
                    <span>{item.documentLabel || 'View Verification Document (PDF)'}</span>
                    <ExternalLink className="w-3 h-3 ml-0.5" />
                  </a>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
