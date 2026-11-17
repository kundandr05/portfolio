import { ArrowUp } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="border-t border-stone-200/80 dark:border-stone-800 py-12 bg-[#faf8f5] dark:bg-[#141413] text-stone-600 dark:text-stone-400 text-xs">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-stone-200/60 dark:border-stone-800">
                    
                    {/* Colophon & Why I built this */}
                    <div className="md:col-span-8 space-y-2">
                        <span className="font-serif-editorial text-stone-900 dark:text-stone-100 font-semibold text-sm">
                            Kundan DR &bull; Portfolio Colophon
                        </span>
                        <p className="max-w-xl leading-relaxed text-stone-500 dark:text-stone-400">
                            <strong>Why I built this site:</strong> To document my engineering projects, published research, and books clearly and honestly. Designed with custom tokens, Next.js 16, TypeScript, and Tailwind CSS — with no templates, no heavy 3D bloat, and zero preloader delays.
                        </p>
                    </div>

                    {/* Meta & Navigation */}
                    <div className="md:col-span-4 flex flex-col md:items-end justify-between space-y-2">
                        <div className="font-mono text-[11px] text-stone-400">
                            Last updated: <span className="text-stone-600 dark:text-stone-300">November 2026</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs font-mono">
                            <a
                                href="https://github.com/kundandr05/portfolio"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-stone-900 dark:hover:text-stone-100 underline decoration-dotted"
                            >
                                Source on GitHub
                            </a>
                            <a
                                href="#main-content"
                                className="hover:text-stone-900 dark:hover:text-stone-100 flex items-center gap-1"
                            >
                                Top <ArrowUp className="w-3 h-3" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-400 font-mono">
                    <p>
                        &copy; {new Date().getFullYear()} Kundan DR. All rights reserved.
                    </p>
                    <p>
                        Mysuru, Karnataka, India
                    </p>
                </div>
            </div>
        </footer>
    );
}
