import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Briefcase, Calendar } from 'lucide-react';

export const Experience = () => {
    const experiences = [
        {
            role: "Accountant",
            company: "Rock Bridge Ministries",
            period: "Aug 2024 – Present",
            description: "Managing full-cycle accounting, financial reporting, budgeting, and statutory compliance. Ensuring accurate bookkeeping and timely audit preparations."
        },
        {
            role: "Accountant",
            company: "Tonycomm Group Ltd",
            period: "2024",
            description: "Administered payroll processing, statutory remittances (KRA, NSSF, NHIF), and performed regular accounts reconciliation."
        },
        {
            role: "Accounts Assistant / Payroll Clerk",
            company: "Migotiyo Plantations Ltd",
            period: "2020 – 2023",
            description: "Assisted in financial statement preparation, managed payroll systems, and oversaw accounts payable/receivable processes."
        },
        {
            role: "Accounts Clerk",
            company: "RESMA Commercial Agencies Ltd",
            period: "2017 – 2019",
            description: "Maintained daily ledgers, processed invoices, and supported month-end closing procedures."
        }
    ];

    return (
        <section id="experience" className="section-container bg-background-alt relative">
            <SectionHeading
                title="Professional Experience"
                subtitle="A timeline of my career journey in financial management and accounting roles."
            />

            <div className="max-w-3xl mx-auto relative mt-10 md:mt-16">

                {/* Timeline sidebar line (mobile: left side, desktop: center) */}
                <div className="absolute left-4 sm:left-6 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-light to-transparent" />

                <div className="space-y-8 md:space-y-12">
                    {experiences.map((exp, index) => {
                        const isEven = index % 2 === 0;

                        return (
                            <div
                                key={index}
                                className={`relative flex items-start md:items-center flex-row md:flex-row ${isEven ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-0.5 sm:left-2.5 md:left-1/2 transform md:-translate-x-1/2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent border-4 border-white flex items-center justify-center z-10 shadow-md mt-6 md:mt-0 flex-shrink-0">
                                    <div className="w-2 h-2 rounded-full bg-primary" />
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={`w-full ml-10 sm:ml-14 md:ml-0 md:w-5/12 ${isEven ? 'md:pl-10' : 'md:pr-10'}`}
                                >
                                    <div className="glass-card p-5 sm:p-6 md:p-7 hover:shadow-xl transition-shadow duration-300 border-l-4 md:border-l-0 border-l-accent md:border-t-4 md:border-t-accent relative group">

                                        {/* Arrow for desktop */}
                                        <div className={`hidden md:block absolute top-8 w-4 h-4 bg-white border border-white/20 transform rotate-45 ${isEven ? '-left-2' : '-right-2'}`} />

                                        <div className="flex flex-col gap-1.5 mb-3">
                                            <h3 className="text-lg font-bold text-primary group-hover:text-accent transition-colors">
                                                {exp.role}
                                            </h3>

                                            <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm font-medium">
                                                <span className="flex items-center gap-1.5 text-text-main">
                                                    <Briefcase size={14} className="text-gold flex-shrink-0" />
                                                    {exp.company}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-text-light">
                                                    <Calendar size={13} className="flex-shrink-0" />
                                                    {exp.period}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-sm sm:text-base text-text-main leading-relaxed">
                                            {exp.description}
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
