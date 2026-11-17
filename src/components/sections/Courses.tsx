import { certifications } from '@/data/certifications';

export default function Courses() {
    return (
        <section id="certifications" className="py-20 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-10">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                        Certifications &amp; Training
                    </span>
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-semibold mt-1">
                        Industry simulations &amp; coursework
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 text-sm mt-2 max-w-xl">
                        Verified simulations and certifications completed through Google, IBM, Microsoft, Tata, Wells Fargo, and Forage.
                    </p>
                </div>

                {/* Compact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {certifications.map((cert) => (
                        <div
                            key={cert.title}
                            className="card-editorial p-5 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between text-[11px] font-mono text-stone-400 mb-2">
                                    <span className="font-semibold text-[#c2410c] dark:text-orange-400">{cert.issuer}</span>
                                    <span>{cert.year}</span>
                                </div>
                                <h3 className="font-serif-editorial text-base font-semibold text-stone-900 dark:text-stone-100 leading-snug mb-3">
                                    {cert.title}
                                </h3>
                                <div className="flex flex-wrap gap-1 mb-3">
                                    {cert.skills.map((s) => (
                                        <span
                                            key={s}
                                            className="px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-[10px] font-mono text-stone-600 dark:text-stone-300"
                                        >
                                            {s}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-3 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-400 font-mono">
                                <span>{cert.domain}</span>
                                <span className="text-stone-500 italic">{cert.note}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
