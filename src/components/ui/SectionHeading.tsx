import { motion } from 'framer-motion';

interface SectionHeadingProps {
    title: string;
    subtitle?: string;
    align?: 'left' | 'center';
}

export const SectionHeading = ({ title, subtitle, align = 'center' }: SectionHeadingProps) => {
    return (
        <div className={`mb-10 md:mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5 }}
            >
                <div className={`flex items-center gap-3 sm:gap-4 ${align === 'center' ? 'justify-center' : 'justify-start'} mb-3`}>
                    {align === 'center' && (
                        <div className="h-[1px] w-8 sm:w-12 bg-secondary/30 hidden sm:block" />
                    )}
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary relative inline-block">
                        {title}
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-accent rounded-full" />
                        <span className="absolute -bottom-2 left-1/3 w-2 h-1 bg-gold rounded-full ml-1" />
                    </h2>
                    {align === 'center' && (
                        <div className="h-[1px] w-8 sm:w-12 bg-secondary/30 hidden sm:block" />
                    )}
                </div>

                {subtitle && (
                    <p className="text-text-light text-base sm:text-lg mt-5 max-w-2xl mx-auto px-2 sm:px-0">
                        {subtitle}
                    </p>
                )}
            </motion.div>
        </div>
    );
};
