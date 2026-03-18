import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Calculator, FileText, PieChart, Landmark } from 'lucide-react';

export const Services = () => {
    const services = [
        {
            icon: <Calculator className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />,
            title: "Bookkeeping",
            description: "Comprehensive daily, weekly, and monthly recording of financial transactions to ensure your records are always accurate and up-to-date."
        },
        {
            icon: <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />,
            title: "Payroll Management",
            description: "End-to-end payroll processing, including statutory deductions, payslip generation, and timely salary disbursements compliance."
        },
        {
            icon: <PieChart className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />,
            title: "Financial Reporting",
            description: "Preparation of detailed financial statements including balance sheets, income statements, and cash flow reports for decision making."
        },
        {
            icon: <Landmark className="w-7 h-7 sm:w-8 sm:h-8 text-accent" />,
            title: "Statutory Compliance",
            description: "Ensuring your business adheres to all relevant tax laws and regulations, handling KRA, NSSF, NHIF and other statutory remittances."
        }
    ];

    return (
        <section id="services" className="section-container bg-primary text-white relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-light/50 rounded-full blur-3xl pointer-events-none" />

            <SectionHeading
                title="My Services"
                subtitle="Professional accounting services tailored to meet your business needs and ensure financial integrity."
                align="center"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6 mt-10 md:mt-16 relative z-10">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="bg-primary-light/40 border border-white/10 rounded-xl p-5 sm:p-6 md:p-8 hover:bg-primary-light hover:border-accent/30 transition-all duration-300 group"
                    >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-[0_0_15px_rgba(100,255,218,0.1)]">
                            {service.icon}
                        </div>

                        <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gold transition-colors">
                            {service.title}
                        </h3>

                        <p className="text-secondary-light text-sm leading-relaxed">
                            {service.description}
                        </p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};
