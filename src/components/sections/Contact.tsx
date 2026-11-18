"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Copy, Check, MapPin, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("kundandr05@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2400);
  };

  return (
    <section id="contact" className="py-16 md:py-24 relative">
      <div className="max-w-4xl mx-auto">
        {/* Scrapbook Mailbox Card with Scroll Reveal */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.94, rotate: 1.5 }}
          whileInView={{ opacity: 1, y: 0, scale: 1, rotate: 0.5 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ type: "spring", stiffness: 280, damping: 22 }}
          whileHover={{ rotate: 0, y: -4 }}
          className="bg-[#ffffff] border-2 border-[#18181b] rounded-2xl p-6 sm:p-10 md:p-12 shadow-[8px_8px_0px_#18181b] relative transition-transform"
        >
          {/* Top Washi Tape */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-6 bg-[#fde047]/90 border border-[#18181b]/30 -rotate-1 z-20 pointer-events-none shadow-xs flex items-center justify-center text-[10px] font-mono font-bold text-stone-700">
            DISPATCH // GET IN TOUCH
          </div>

          <div className="flex flex-col items-center text-center max-w-xl mx-auto">
            {/* Header Badge */}
            <motion.div
              whileHover={{ scale: 1.05, rotate: -2 }}
              className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ef4444] text-white border-2 border-[#18181b] rounded-md shadow-[2px_2px_0px_#18181b] text-xs font-black uppercase tracking-wider -rotate-1 mb-4 cursor-default"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Let&apos;s Connect</span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-[#18181b] mb-4">
              Have an idea, research role, or{' '}
              <motion.span
                initial={{ backgroundSize: "0% 100%" }}
                whileInView={{ backgroundSize: "100% 100%" }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="bg-[#fde047] px-2 py-0.5 rounded-md border-2 border-[#18181b] shadow-[2px_2px_0px_#18181b] inline-block -rotate-1"
              >
                internship?
              </motion.span>
            </h2>

            <p className="text-stone-600 text-sm sm:text-base leading-relaxed mb-8">
              I am open to software engineering internships, research collaborations, and backend development roles for 2027. My inbox is always open.
            </p>

            {/* BIG TACTILE EMAIL BUTTON with Collapse Press */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="w-full max-w-md bg-[#faf7ee] border-2 border-[#18181b] rounded-2xl p-4 shadow-[4px_4px_0px_#18181b] mb-8 flex flex-col sm:flex-row items-center justify-between gap-3"
            >
              <a
                href="mailto:kundandr05@gmail.com"
                className="font-mono font-black text-sm sm:text-base text-[#18181b] hover:text-[#ef4444] transition-colors break-all"
              >
                kundandr05@gmail.com
              </a>

              <motion.button
                onClick={copyEmail}
                whileHover={{ scale: 1.06, rotate: [-1, 1, 0] }}
                whileTap={{ scale: 0.94, x: 2, y: 2 }}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-[#fde047] text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[2px_2px_0px_#18181b] shrink-0"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#22c55e]" />
                    <span>Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Email</span>
                  </>
                )}
              </motion.button>
            </motion.div>

            {/* Social Stamp Links with Hover Wobble */}
            <div className="flex flex-wrap items-center justify-center gap-3">
              <motion.a
                href="https://github.com/kundandr05"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, rotate: -2, backgroundColor: "#38bdf8" }}
                whileTap={{ scale: 0.94, x: 1, y: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[3px_3px_0px_#18181b] transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>GitHub (kundandr05)</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-stone-500" />
              </motion.a>

              <motion.a
                href="https://linkedin.com/in/kundan-d-r-914274310"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.08, rotate: 2, backgroundColor: "#38bdf8" }}
                whileTap={{ scale: 0.94, x: 1, y: 1 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-white text-[#18181b] border-2 border-[#18181b] rounded-xl text-xs font-bold shadow-[3px_3px_0px_#18181b] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#0a66c2]" />
                <span>LinkedIn Profile</span>
                <ArrowUpRight className="w-3 h-3 ml-0.5 text-stone-500" />
              </motion.a>

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-1.5 px-3 py-2 bg-[#faf7ee] text-[#18181b] border border-[#18181b] rounded-xl text-xs font-mono font-bold shadow-[2px_2px_0px_#18181b] cursor-default"
              >
                <MapPin className="w-3.5 h-3.5 text-[#ef4444]" />
                <span>Mysuru, India (IST)</span>
              </motion.div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}
