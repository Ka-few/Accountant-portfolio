import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { CheckCircle2, TrendingUp, ShieldCheck, FileSpreadsheet } from 'lucide-react';

export const About = () => {
    const highlights = [
        {
            icon: <TrendingUp className="text-accent w-6 h-6" />,
            title: "5+ Years Experience",
            description: "Proven track record in financial management."
        },
        {
            icon: <FileSpreadsheet className="text-accent w-6 h-6" />,
            title: "Financial Reporting",
            description: "Accurate preparation of financial statements."
        },
        {
            icon: <CheckCircle2 className="text-accent w-6 h-6" />,
            title: "Payroll Administration",
            description: "Timely and compliant payroll processing."
        },
        {
            icon: <ShieldCheck className="text-accent w-6 h-6" />,
            title: "Statutory Compliance",
            description: "Ensuring adherence to tax laws and regulations."
        }
    ];

    return (
        <section id="about" className="section-container bg-background-alt relative">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 -left-32 w-64 h-64 bg-secondary/5 rounded-full blur-3xl mix-blend-multiply" />
            </div>

            <SectionHeading
                title="About Me"
                subtitle="A dedicated accounting professional bringing precision and strategic financial insight to organizations."
            />

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6 }}
                    className="space-y-5 text-base sm:text-lg text-text-main"
                >
                    <p>
                        I am a highly motivated and detail-oriented accountant with a strong analytical mindset.
                        My expertise lies in overseeing all aspects of financial operations, including accurate
                        book keeping, payroll management, and rigorous statutory compliance.
                    </p>
                    <p>
                        Throughout my career, I've developed a reputation for maintaining impeccable financial records
                        and providing actionable insights that help businesses optimize their financial performance
                        and adhere to all regulatory requirements.
                    </p>

                    <div className="pt-4 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4 sm:gap-6">
                        {[
                            { value: "5+", label: "Years Experience" },
                            { value: "100%", label: "Compliance Rate" },
                            { value: "BBA", label: "Degree in Finance" },
                            { value: "CPA", label: "Certified" },
                        ].map((stat, i) => (
                            <div key={i} className="space-y-1">
                                <strong className="text-primary block font-bold text-xl sm:text-2xl">{stat.value}</strong>
                                <span className="text-text-light text-xs tracking-wider uppercase">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="grid grid-cols-2 gap-4"
                >
                    {highlights.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -5 }}
                            className="glass-card p-4 sm:p-6 border-t-4 border-t-accent hover:border-t-gold transition-colors duration-300"
                        >
                            <div className="bg-primary/5 w-10 h-10 sm:w-12 sm:h-12 rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                                {item.icon}
                            </div>
                            <h3 className="text-sm sm:text-base font-bold text-primary mb-1 sm:mb-2">{item.title}</h3>
                            <p className="text-xs sm:text-sm text-text-light leading-relaxed">
                                {item.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
