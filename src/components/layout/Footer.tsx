import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-white/80 backdrop-blur-md border-t border-slate-200/80 py-8 mt-auto relative z-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-slate-600 text-sm font-medium">
                        © {new Date().getFullYear()} Kundan DR. All rights reserved.
                    </p>
                    <p className="text-slate-400 text-xs mt-1">
                        AI & Machine Learning Engineer &bull; Published Researcher & Author
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/kundandr05" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-600 transition-all duration-300 transform hover:scale-125">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/kundan-d-r-914274310" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-600 transition-all duration-300 transform hover:scale-125">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:kundandr05@gmail.com" className="text-slate-400 hover:text-rose-600 transition-all duration-300 transform hover:scale-125">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
