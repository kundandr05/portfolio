import Image from 'next/image';
import { ExternalLink, FileText, BookOpen } from 'lucide-react';
import { publications } from '@/data/publications';

export default function Publications() {
    return (
        <section id="research" className="py-20 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                        Writing &amp; Research
                    </span>
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-semibold mt-1">
                        Published papers and books
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
                        A peer-reviewed research paper on agentic scheduling alongside two books examining digital overstimulation.
                    </p>
                </div>

                {/* Publications Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {publications.map((item) => (
                        <article
                            key={item.id}
                            className="card-editorial p-6 flex flex-col justify-between"
                        >
                            <div>
                                {/* Image / Cover Frame */}
                                <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700 mb-5">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, 360px"
                                        className="object-cover"
                                    />
                                    <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-stone-900/85 backdrop-blur-xs text-white text-[10px] font-mono">
                                        {item.badge}
                                    </span>
                                </div>

                                <div className="text-[11px] font-mono text-stone-400 dark:text-stone-500 mb-1">
                                    {item.publisher} &bull; {item.date}
                                </div>

                                <h3 className="font-serif-editorial text-lg sm:text-xl font-semibold text-stone-900 dark:text-stone-100 leading-snug mb-2.5">
                                    {item.title}
                                </h3>

                                <p className="text-stone-600 dark:text-stone-400 text-xs sm:text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </div>

                            <div className="pt-5 border-t border-stone-100 dark:border-stone-800 mt-5">
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-editorial-secondary text-xs w-full"
                                >
                                    {item.type === 'paper' ? (
                                        <FileText className="w-3.5 h-3.5 text-[#c2410c]" />
                                    ) : (
                                        <BookOpen className="w-3.5 h-3.5 text-[#c2410c]" />
                                    )}
                                    {item.linkLabel}
                                    <ExternalLink className="w-3 h-3 ml-auto text-stone-400" />
                                </a>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Pull Quote */}
                <blockquote className="card-editorial p-6 sm:p-8 border-l-4 border-l-[#c2410c] bg-orange-50/30 dark:bg-stone-900/40">
                    <p className="font-serif-editorial italic text-base sm:text-lg text-stone-800 dark:text-stone-200 leading-relaxed">
                        &ldquo;Stop calling it burnout. It&apos;s structural failure. You are suffering from a structural non-alignment between the stable 1990s Mindset and the relentless speed of the 2000s World.&rdquo;
                    </p>
                    <footer className="mt-3 text-xs font-mono text-stone-500 dark:text-stone-400">
                        &mdash; Kundan DR, <em>The Two-Speed Mind</em> (Amazon KDP, 2024)
                    </footer>
                </blockquote>
            </div>
        </section>
    );
}
