import { Linkedin, Mail } from 'lucide-react';

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-white/70 py-10 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col sm:flex-row justify-between items-center gap-5 text-center sm:text-left">

                {/* Logo/Name */}
                <div className="text-xl font-bold tracking-tighter text-white">
                    <span className="text-secondary">Mary </span>
                    Njoroge
                    <span className="text-gold">.</span>
                </div>

                {/* Copyright */}
                <div className="text-xs sm:text-sm order-last sm:order-none">
                    <p>© {currentYear} Mary Nyaguthii Njoroge. All rights reserved.</p>
                    <p className="text-white/30 text-xs mt-0.5">Professional Accounting Portfolio</p>
                </div>

                {/* Social Links */}
                <div className="flex items-center gap-3 text-white/50">
                    <a
                        href="mailto:bonjour.mary72@gmail.com"
                        className="hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-lg"
                        aria-label="Email"
                    >
                        <Mail size={20} />
                    </a>
                    <a
                        href="#"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-accent transition-colors p-2 hover:bg-white/5 rounded-lg"
                        aria-label="LinkedIn"
                    >
                        <Linkedin size={20} />
                    </a>
                </div>
            </div>
        </footer>
    );
};
