import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-black/80 backdrop-blur-md border-t border-white/10 py-8 mt-auto">
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
                    <a href="#" className="text-gray-400 hover:text-neon-cyan transition-colors duration-300 transform hover:scale-110">
                        <Github className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-magenta transition-colors duration-300 transform hover:scale-110">
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-green transition-colors duration-300 transform hover:scale-110">
                        <Mail className="w-5 h-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-neon-purple transition-colors duration-300 transform hover:scale-110">
                        <Twitter className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
