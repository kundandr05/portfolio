import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white/90 backdrop-blur-md border-t border-slate-200/90 py-10 mt-auto relative z-10">
            <div className="container mx-auto px-4 max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="text-center md:text-left">
                    <p className="text-slate-900 text-sm font-bold tracking-tight">
                        &copy; {new Date().getFullYear()} Kundan DR &bull; All rights reserved.
                    </p>
                    <p className="text-slate-500 text-xs mt-1 flex items-center justify-center md:justify-start gap-1.5 font-medium">
                        <span>Crafted with</span>
                        <Coffee className="w-3.5 h-3.5 text-amber-600 inline" />
                        <span>& zero generic templates from Mysuru, India 🇮🇳</span>
                    </p>
                </div>

                {/* Quirky Handwritten Stamp */}
                <div className="text-center">
                    <span className="font-handwriting text-xl text-blue-600 font-bold rotate-[-2deg] inline-block">
                        &ldquo;Intelligent Systems. Elegant Solutions.&rdquo;
                    </span>
                </div>

                <div className="flex space-x-3">
                    {[
                        { icon: Github, href: "https://github.com/kundandr05", label: "GitHub", hover: "hover:text-blue-600 hover:bg-blue-50 hover:border-blue-200" },
                        { icon: Linkedin, href: "https://linkedin.com/in/kundan-d-r-914274310", label: "LinkedIn", hover: "hover:text-indigo-600 hover:bg-indigo-50 hover:border-indigo-200" },
                        { icon: Mail, href: "mailto:kundandr05@gmail.com", label: "Email", hover: "hover:text-rose-600 hover:bg-rose-50 hover:border-rose-200" }
                    ].map((social, index) => (
                        <a
                            key={index}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={social.label}
                            className={`p-2.5 rounded-xl border border-slate-200 bg-white text-slate-600 ${social.hover} shadow-sm transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0`}
                        >
                            <social.icon className="w-4 h-4" />
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
}
