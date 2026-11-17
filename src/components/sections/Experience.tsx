import { Briefcase, GraduationCap, FileText } from 'lucide-react';
import { experiences, education } from '@/data/experience';

export default function Experience() {
    return (
        <section id="experience" className="py-20 border-b border-stone-200/80 dark:border-stone-800">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header */}
                <div className="mb-12">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#c2410c] dark:text-orange-400 font-bold">
                        Work &amp; Education
                    </span>
                    <h2 className="font-serif-editorial text-3xl sm:text-4xl text-stone-900 dark:text-stone-100 font-semibold mt-1">
                        Where I&apos;ve trained and worked
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                    
                    {/* Experience Column (Span 7) */}
                    <div className="lg:col-span-7 space-y-6">
                        <div className="flex items-center gap-2 pb-2">
                            <Briefcase className="w-4 h-4 text-[#c2410c]" />
                            <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold">
                                Professional Experience
                            </h3>
                        </div>

                        {experiences.map((exp) => (
                            <div key={exp.id} className="card-editorial p-6 sm:p-7 space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 sm:gap-4">
                                    <div>
                                        <h4 className="font-serif-editorial text-xl font-semibold text-stone-900 dark:text-stone-100">
                                            {exp.role}
                                        </h4>
                                        <p className="text-xs font-medium text-[#c2410c] dark:text-orange-400 mt-0.5">
                                            {exp.organization}
                                        </p>
                                    </div>
                                    <span className="text-[11px] font-mono text-stone-500 shrink-0">
                                        {exp.period}
                                    </span>
                                </div>

                                <ul className="space-y-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed list-disc list-inside">
                                    {exp.description.map((point, i) => (
                                        <li key={i}>{point}</li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-1.5 pt-2">
                                    {exp.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-2.5 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-[11px] font-mono"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                {exp.link && (
                                    <div className="pt-2">
                                        <a
                                            href={exp.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#c2410c] hover:underline"
                                        >
                                            <FileText className="w-3.5 h-3.5" />
                                            {exp.linkLabel || 'View Verification'}
                                        </a>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Education Column (Span 5) */}
                    <div className="lg:col-span-5 space-y-6">
                        <div className="flex items-center gap-2 pb-2">
                            <GraduationCap className="w-4 h-4 text-[#c2410c]" />
                            <h3 className="font-mono text-xs uppercase tracking-wider text-stone-900 dark:text-stone-100 font-bold">
                                Academic Path
                            </h3>
                        </div>

                        <div className="card-editorial p-6 sm:p-7 space-y-6">
                            {education.map((edu, idx) => (
                                <div
                                    key={edu.id}
                                    className={`${
                                        idx !== education.length - 1 ? 'pb-6 border-b border-stone-100 dark:border-stone-800' : ''
                                    }`}
                                >
                                    <span className="text-[11px] font-mono text-stone-400">
                                        {edu.period}
                                    </span>
                                    <h4 className="font-serif-editorial text-lg font-semibold text-stone-900 dark:text-stone-100 mt-0.5">
                                        {edu.degree}
                                    </h4>
                                    <p className="text-xs font-medium text-stone-600 dark:text-stone-300 mt-0.5">
                                        {edu.institution} &bull; <span className="text-stone-400 font-normal">{edu.location}</span>
                                    </p>
                                    <p className="text-xs text-stone-500 dark:text-stone-400 mt-2 leading-relaxed">
                                        {edu.details}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
