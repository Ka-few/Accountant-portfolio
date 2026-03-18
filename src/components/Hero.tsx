import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

export const Hero = () => {
    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center pt-24 pb-12 relative overflow-hidden px-4 sm:px-6 md:px-12"
        >
            {/* Background Decorative Elements */}
            <div className="absolute top-1/4 -right-20 w-56 h-56 sm:w-72 sm:h-72 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-20 w-64 h-64 sm:w-96 sm:h-96 bg-primary/5 rounded-full blur-3xl" />

            <div className="w-full max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10 md:gap-12 z-10">

                {/* Left Content */}
                <motion.div
                    className="flex-1 space-y-5 text-center md:text-left"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                >
                    <div className="space-y-2">
                        <h2 className="text-secondary font-medium tracking-wide text-sm sm:text-base">Hello, I'm</h2>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
                            Mary Nyaguthii <br />
                            <span className="text-gold">Njoroge.</span>
                        </h1>
                        <h3 className="text-base sm:text-lg md:text-xl text-text-light font-medium pt-1">
                            Accountant | Financial Reporting | Payroll & Compliance
                        </h3>
                    </div>

                    <p className="mx-auto md:mx-0 max-w-xl text-text-main text-base sm:text-lg leading-relaxed">
                        Detail-oriented accountant with 5+ years experience in financial management,
                        statutory compliance, and payroll administration. I provide accurate
                        financial insights to drive business growth.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-3 pt-2">
                        <a href="#contact" className="btn-primary flex items-center gap-2 group">
                            Contact Me
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>

                        <a
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-outline flex items-center gap-2 group"
                        >
                            <Download size={16} className="group-hover:-translate-y-1 transition-transform" />
                            Download CV
                        </a>
                    </div>
                </motion.div>

                {/* Right Image Area */}
                <motion.div
                    className="flex-shrink-0 flex justify-center md:justify-end"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Decorative border offset */}
                        <div className="absolute inset-0 border-2 border-accent rounded-2xl translate-x-3 translate-y-3 sm:translate-x-4 sm:translate-y-4 -z-10 transition-transform duration-300" />

                        <div className="w-full h-full bg-primary-light rounded-2xl overflow-hidden relative shadow-2xl">
                            {/* Profile Image */}
                            <img
                                src="/profile.jpg"
                                alt="Mary Nyaguthii Njoroge"
                                className="w-full h-full object-cover object-top hover:scale-105 transition-all duration-500"
                            />
                        </div>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
