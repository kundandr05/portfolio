import { skillCategories } from '@/data/skills';
import { Layers } from 'lucide-react';

export default function Skills() {
    return (
        <section id="skills" className="py-20 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                        Skills &amp; Toolkit
                    </span>
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-semibold mt-1">
                        Technologies I&apos;ve shipped with
                    </h2>
                    <p className="text-stone-600 dark:text-stone-400 text-sm sm:text-base mt-2 max-w-xl">
                        Rather than arbitrary percentage bars, here is where and how I apply each tool in production.
                    </p>
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category) => (
                        <div
                            key={category.title}
                            className="card-editorial p-6 sm:p-7 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-start justify-between gap-4 mb-2">
                                    <h3 className="font-serif-editorial text-xl font-semibold text-stone-900 dark:text-stone-100">
                                        {category.title}
                                    </h3>
                                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300">
                                        Applied in {category.projectRef.split(',')[0]}
                                    </span>
                                </div>
                                <p className="text-xs text-stone-500 dark:text-stone-400 mb-5">
                                    {category.description}
                                </p>

                                <ul className="space-y-2.5">
                                    {category.skills.map((skill) => (
                                        <li
                                            key={skill.name}
                                            className="flex flex-col sm:flex-row sm:items-baseline justify-between text-xs py-1 border-b border-stone-50 dark:border-stone-800/60"
                                        >
                                            <span className="font-medium text-stone-900 dark:text-stone-200">
                                                {skill.name}
                                            </span>
                                            <span className="text-stone-500 dark:text-stone-400 font-mono text-[11px]">
                                                {skill.context}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-800 flex items-center gap-1.5 text-[11px] font-mono text-stone-400">
                                <Layers className="w-3.5 h-3.5 text-[#c2410c]" />
                                <span>Used across: {category.projectRef}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
