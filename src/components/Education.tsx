import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export const Education = () => {
    const education = [
        {
            degree: "Bachelor of Business Administration (Accounting/Finance)",
            institution: "Presbyterian University of East Africa",
            period: "2020 – 2025",
            icon: <GraduationCap className="text-primary w-6 h-6" />
        },
        {
            degree: "Certified Public Accountant (CPA)",
            institution: "Achievers School of Professionals",
            period: "2016 – 2017",
            icon: <Award className="text-primary w-6 h-6" />
        },
        {
            degree: "Accounting & Finance Auxiliary Training",
            institution: "Corporate Staffing Ltd",
            period: "2021",
            icon: <BookOpen className="text-primary w-6 h-6" />
        }
    ];

    return (
        <section id="education" className="section-container relative">
            <SectionHeading
                title="Education & Credentials"
                subtitle="Academic background and professional certifications."
            />

            <div className="max-w-5xl mx-auto mt-8 md:mt-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: index * 0.15 }}
                            className="bg-white border border-secondary/20 rounded-xl p-6 sm:p-8 hover:shadow-lg hover:border-accent/50 transition-all duration-300 flex flex-col items-center text-center group"
                        >
                            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/5 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
                                {edu.icon}
                            </div>

                            <h3 className="text-base sm:text-lg font-bold text-primary mb-3 flex items-center justify-center">
                                {edu.degree}
                            </h3>

                            <div className="mt-auto space-y-2">
                                <p className="text-sm sm:text-base text-text-main font-medium">
                                    {edu.institution}
                                </p>
                                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-secondary/10 text-text-light text-xs sm:text-sm font-semibold">
                                    {edu.period}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
