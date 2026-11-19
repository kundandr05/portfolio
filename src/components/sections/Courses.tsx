"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Award, ShieldCheck } from 'lucide-react';
import { certifications } from '@/data/certifications';

export default function Courses() {
  return (
    <section id="certifications" className="py-16 md:py-24 relative">
      {/* Section Header with Highlighter Sweep */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col items-start mb-10"
      >
        <motion.div
          whileHover={{ scale: 1.05, rotate: -2 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#38bdf8] text-[#18181b] border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider rotate-1 mb-3 cursor-default"
        >
          <Award className="w-3.5 h-3.5" />
          <span>Verified Credentials</span>
        </motion.div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b]">
          Certifications &amp;{' '}
          <motion.span
            initial={{ backgroundSize: "0% 100%" }}
            whileInView={{ backgroundSize: "100% 100%" }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1"
          >
            simulations
          </motion.span>
        </h2>
        <p className="text-stone-600 text-sm sm:text-base mt-2 max-w-xl">
          Completed virtual job simulations and technical foundations with Forage, Tata, Wells Fargo, IBM, Microsoft, and Google.
        </p>
      </motion.div>

      {/* Compact Post-It Grid with Staggered Scroll Reveals */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {certifications.map((cert, idx) => {
          const postItRotation = idx % 3 === 0 ? -1.5 : idx % 3 === 1 ? 1.5 : -0.8;
          return (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 40, rotate: postItRotation }}
              whileInView={{ opacity: 1, y: 0, rotate: postItRotation }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{
                type: "spring",
                stiffness: 280,
                damping: 24,
                delay: idx * 0.08,
              }}
              whileHover={{
                y: -6,
                rotate: 0,
                boxShadow: "7px 7px 0px #18181b",
                transition: { duration: 0.2 },
              }}
              className="bg-white border-2 border-[#18181b] rounded-2xl p-5 shadow-[4px_4px_0px_#18181b] transition-all flex flex-col justify-between cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-2 py-0.5 bg-[#faf7ee] border border-[#18181b] rounded text-[10px] font-mono font-bold text-[#18181b]">
                    {cert.category}
                  </span>
                  <span className="text-xs font-mono font-bold text-stone-500">{cert.year}</span>
                </div>

                <h3 className="text-base font-display font-black text-[#18181b] leading-snug mb-1">
                  {cert.name}
                </h3>
                <p className="text-xs font-bold text-stone-600 mb-4">
                  Issuer: {cert.issuer}
                </p>
              </div>

              {/* Certificate On Request Tag */}
              <div className="pt-3 border-t border-[#18181b]/15 flex items-center justify-between text-xs">
                <span className="inline-flex items-center gap-1 text-[11px] font-mono text-stone-500">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#22c55e]" />
                  <span>Verified Record</span>
                </span>
                <a
                  href="mailto:kundandr05@gmail.com?subject=Certificate%20Verification%20Request"
                  className="text-[11px] font-bold text-[#ef4444] hover:underline"
                  title="Request verification copy via email"
                >
                  Copy on request ✉
                </a>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
