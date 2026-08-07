import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-background/80 backdrop-blur-md border-t border-white/10 py-8 mt-auto relative z-10">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <p className="text-gray-400 text-sm">
                        © {new Date().getFullYear()} Kundan DR. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-xs mt-1">
                        Built with Next.js, Tailwind CSS & Framer Motion
                    </p>
                </div>

                <div className="flex space-x-6">
                    <a href="https://github.com/kundandr05" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-cyan transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(0,217,255,0.8)]">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="https://linkedin.com/in/kundan-d-r-914274310" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-neon-magenta transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(255,0,110,0.8)]">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="mailto:kundandr05@gmail.com" className="text-gray-400 hover:text-neon-purple transition-all duration-300 transform hover:scale-125 hover:drop-shadow-[0_0_8px_rgba(124,58,237,0.8)]">
                        <Mail className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
