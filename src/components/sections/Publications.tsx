"use client";

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, ExternalLink, Quote } from 'lucide-react';
import { publications, featuredQuote } from '@/data/publications';

export default function Publications() {
  return (
    <section id="publications" className="py-16 md:py-24 relative">
      {/* Section Header with Highlighter Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start mb-12"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: 2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ef4444] text-white border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-3 cursor-default"
        >
          <BookOpen className="w-3.5 h-3.5" />
          <span>Research &amp; Authorship</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Published{' '}
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            style={{
              backgroundImage: "linear-gradient(to right, #fde047, #fde047)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "0% 100%",
            }}
            className="px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1"
          >
            papers &amp; books
          </motion.span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          One peer-reviewed paper on autonomous agent coordination alongside two self-published books on focus and mental models.
        </p>
      </motion.div>

      {/* 3-Column Publications Grid with Staggered Scroll Reveals */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {publications.map((pub, idx) => {
          const rotationAngle = idx === 0 ? -1.5 : idx === 1 ? 1.5 : -2;
          return (
            <motion.article
              key={pub.id}
              initial={{ opacity: 0, y: 45, rotate: rotationAngle }}
              whileInView={{ opacity: 1, y: 0, rotate: rotationAngle }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
                delay: idx * 0.1,
              }}
              whileHover={{
                y: -6,
                rotate: 0,
                boxShadow: "8px 8px 0px #18181b",
                transition: { duration: 0.2 },
              }}
              onClick={(e) => {
                const target = e.target as HTMLElement;
                if (target.closest('a') || target.closest('button')) return;
                window.open(pub.link, '_blank', 'noopener,noreferrer');
              }}
              className="bg-white border-2 border-[#18181b] rounded-2xl p-5 shadow-[5px_5px_0px_#18181b] transition-all flex flex-col justify-between relative cursor-pointer"
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
                    className="object-cover object-top hover:scale-106 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg font-display font-black text-[#18181b] leading-snug mb-1">
                  {pub.title}
                </h3>
                {pub.subtitle && (
                  <p className="text-xs font-bold text-stone-700 mb-1 leading-snug">
                    {pub.subtitle}
                  </p>
                )}
                <p className="text-[11px] text-stone-500 font-mono mb-2">{pub.identifier}</p>

                {/* Description */}
                <p className="text-stone-700 text-xs leading-relaxed mb-4">
                  {pub.description}
                </p>
              </div>

              {/* Read / View Link Button with Tactile Press */}
              <div className="flex items-center gap-2 mt-2">
                <motion.a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.03, backgroundColor: "#38bdf8" }}
                  whileTap={{ scale: 0.95, x: 1, y: 1 }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 bg-[#faf7ee] text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] transition-colors"
                >
                  <span>{pub.linkLabel}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </motion.a>

                {pub.pdfUrl && (
                  <motion.a
                    href={pub.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, backgroundColor: "#22c55e", color: "#ffffff" }}
                    whileTap={{ scale: 0.95, x: 1, y: 1 }}
                    className="inline-flex items-center justify-center gap-1 py-2 px-3 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] transition-colors"
                    title="Direct PDF Download"
                  >
                    <span>PDF</span>
                    <ExternalLink className="w-3 h-3" />
                  </motion.a>
                )}
              </div>
            </motion.article>
          );
        })}
      </div>

      {/* Featured Author Quote Box with Spring Entrance */}
      <motion.div
        initial={{ opacity: 0, scale: 0.92, y: 30 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ type: "spring", stiffness: 280, damping: 22 }}
        whileHover={{ rotate: 0, y: -2 }}
        className="bg-[#fde047] border-2 border-[#18181b] rounded-2xl p-6 sm:p-8 shadow-[6px_6px_0px_#18181b] rotate-0.5 relative cursor-default"
      >
        <div className="absolute -top-3 left-10 w-24 h-6 bg-white border border-[#18181b]/30 -rotate-2 z-20 pointer-events-none shadow-xs flex items-center justify-center text-[10px] font-mono font-bold text-stone-600">
          BOOK EXCERPT
        </div>

        <div className="flex items-start gap-4">
          <motion.span
            whileHover={{ rotate: [-8, 8, 0] }}
            className="p-2 bg-white border-2 border-[#18181b] rounded-xl shadow-[2px_2px_0px_#18181b] shrink-0 hidden sm:block"
          >
            <Quote className="w-6 h-6 text-[#ef4444]" />
          </motion.span>

          <div className="space-y-2">
            <blockquote className="text-base sm:text-lg font-display font-bold text-[#18181b] leading-relaxed italic">
              &ldquo;{featuredQuote.text}&rdquo;
            </blockquote>
            <p className="text-xs font-mono font-bold text-stone-700">
              — Kundan DR, <span className="underline">{featuredQuote.source}</span>
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
