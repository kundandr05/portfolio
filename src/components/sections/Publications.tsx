"use client";

import React from 'react';
import Image from 'next/image';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import { publications, featuredQuote } from '@/data/publications';

export default function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24 relative">
      {/* Section Header */}
      <div className="flex flex-col items-start mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ef4444] text-white border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-3">
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research & Authorship</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Published{' '}
          <span className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1">
            papers & books
          </span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          One peer-reviewed paper on autonomous agent coordination alongside two self-published books on focus and mental models.
        </p>
      </div>

      {/* 3-Column Publications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {publications.map((pub) => (
          <article
            key={pub.id}
            className={`bg-white border-2 border-[#18181b] rounded-2xl p-5 shadow-[5px_5px_0px_#18181b] hover:shadow-[8px_8px_0px_#18181b] transition-all flex flex-col justify-between relative ${
              pub.rotation
            } hover:rotate-0`}
          >
            {/* Top Washi Tape Corner */}
            <div className="absolute -top-2.5 right-6 w-16 h-4 bg-[#fef08a] border border-[#18181b]/30 rotate-2 z-20 pointer-events-none shadow-xs" />

            <div>
              {/* Type Badge & Date */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span
                  className={`px-2 py-0.5 border border-[#18181b] rounded-md text-[10px] font-mono font-bold uppercase shadow-[1px_1px_0px_#18181b] ${
                    pub.type === 'Research Paper'
                      ? 'bg-[#ef4444] text-white'
                      : 'bg-[#fde047] text-[#18181b]'
                  }`}
                >
                  {pub.badge}
                </span>
                <span className="text-xs font-mono text-stone-500 font-bold">{pub.date}</span>
              </div>

              {/* Cover Thumbnail Frame */}
              <div className="relative aspect-[3/4] max-h-56 w-full rounded-xl overflow-hidden border-2 border-[#18181b] bg-stone-100 shadow-[2px_2px_0px_#18181b] mb-4">
                <Image
                  src={pub.image}
                  alt={pub.title}
                  fill
                  className="object-cover object-top hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              {/* Title & Subtitle */}
              <h3 className="text-lg font-display font-black text-[#18181b] leading-snug mb-1">
                {pub.title}
              </h3>
              <p className="text-xs text-stone-500 font-mono mb-2">{pub.identifier}</p>

              {/* Description */}
              <p className="text-stone-700 text-xs leading-relaxed mb-4">
                {pub.description}
              </p>
            </div>

            {/* Read / View Link Button */}
            <a
              href={pub.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#faf7ee] text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] hover:bg-[#38bdf8] hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all mt-2"
            >
              <span>{pub.linkLabel}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </article>
        ))}
      </div>

      {/* Featured Author Quote Box */}
      <div className="bg-[#fde047] border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#18181b] rotate-0.5 relative">
        <div className="absolute -top-3 left-10 w-24 h-6 bg-white border border-[#18181b]/30 -rotate-2 z-20 pointer-events-none shadow-xs flex items-center justify-center text-[10px] font-mono font-bold text-stone-600">
          BOOK EXCERPT
        </div>

        <div className="flex items-start gap-4">
          <span className="p-2 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] shrink-0 hidden sm:block">
            <Quote className="w-6 h-6 text-[#ef4444]" />
          </span>

          <div className="space-y-2">
            <blockquote className="text-base sm:text-lg font-display font-bold text-[#18181b] leading-relaxed italic">
              &ldquo;{featuredQuote.text}&rdquo;
            </blockquote>
            <p className="text-xs font-mono font-bold text-stone-700">
              — Kundan DR, <span className="underline">{featuredQuote.source}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
