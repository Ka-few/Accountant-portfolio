import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Check } from 'lucide-react';

export const Skills = () => {
    const coreCompetencies = [
        "Financial Reporting",
        "Payroll Administration",
        "Statutory Compliance",
        "Accounts Reconciliation",
        "Budgeting & Forecasting",
        "Tax Preparation",
        "Bookkeeping",
        "Internal Auditing"
    ];

    const tools = [
        { name: "QuickBooks", level: 95 },
        { name: "Microsoft Excel (Advanced)", level: 90 },
        { name: "ERP Systems", level: 85 },
        { name: "Sage", level: 80 }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.08 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 10 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
    };

    return (
        <section id="skills" className="section-container">
            <SectionHeading
                title="Professional Skills"
                subtitle="Technical proficiencies and core competencies developed over 5+ years in accounting and financial management."
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 mt-10">

                {/* Core Competencies */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-primary-light text-white flex items-center justify-center text-xs sm:text-sm flex-shrink-0">01</span>
                        Core Competencies
                    </h3>

                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-80px" }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-3"
                    >
                        {coreCompetencies.map((skill, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex items-center gap-3 group py-1"
                            >
                                <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:bg-accent transition-colors flex-shrink-0">
                                    <Check size={12} className="text-primary" />
                                </div>
                                <span className="text-sm sm:text-base text-text-main font-medium group-hover:text-primary transition-colors">{skill}</span>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Tools & Software */}
                <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                        <span className="w-7 h-7 sm:w-8 sm:h-8 rounded bg-primary-light text-white flex items-center justify-center text-xs sm:text-sm flex-shrink-0">02</span>
                        Software & Tools
                    </h3>

                    <div className="space-y-5 sm:space-y-6">
                        {tools.map((tool, index) => (
                            <div key={index}>
                                <div className="flex justify-between items-end mb-2">
                                    <span className="text-sm sm:text-base text-text-main font-medium">{tool.name}</span>
                                    <span className="text-xs sm:text-sm font-bold text-primary">{tool.level}%</span>
                                </div>
                                <div className="w-full h-2 sm:h-2.5 bg-gray-200 rounded-full overflow-hidden">
                                    <motion.div
                                        className="h-full bg-gradient-to-r from-primary to-accent"
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${tool.level}%` }}
                                        viewport={{ once: true, margin: "-50px" }}
                                        transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>

                    <motion.div
                        className="mt-8 p-4 sm:p-6 bg-accent/10 border border-accent/20 rounded-xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                    >
                        <p className="text-sm text-text-main italic">
                            "My strong technical background allows me to quickly adapt to new financial software
                            and leverage technological tools to streamline accounting processes."
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
};
