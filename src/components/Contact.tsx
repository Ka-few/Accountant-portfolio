import { useState } from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from './ui/SectionHeading';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

export const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
            setFormData({ name: '', email: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        }, 1500);
    };

    const contactInfo = [
        {
            icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
            title: "Phone",
            value: "+254 111 402 035",
            link: "tel:+254111402035"
        },
        {
            icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
            title: "Email",
            value: "nyaguthiimary.mn@gmail.com",
            link: "mailto:nyaguthiimary.mn@gmail.com"
        },
        {
            icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />,
            title: "Location",
            value: "Nakuru, Kenya",
            link: null
        }
    ];

    return (
        <section id="contact" className="section-container relative">
            <SectionHeading
                title="Get In Touch"
                subtitle="Feel free to reach out for accounting services, consultations, or potential collaborations."
            />

            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 md:gap-12 mt-10 md:mt-16 max-w-5xl mx-auto">

                {/* Contact Information */}
                <motion.div
                    className="lg:col-span-2 space-y-6"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h3 className="text-xl sm:text-2xl font-bold text-primary">Contact Information</h3>

                    <div className="space-y-3 sm:space-y-4">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 rounded-xl bg-background-alt border border-secondary/10 hover:border-accent/30 transition-colors">
                                <div className="p-2.5 sm:p-3 bg-white rounded-lg shadow-sm flex-shrink-0">
                                    {info.icon}
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-xs font-semibold text-text-light">{info.title}</h4>
                                    {info.link ? (
                                        <a href={info.link} className="text-sm sm:text-base font-medium text-primary hover:text-accent transition-colors break-all">
                                            {info.value}
                                        </a>
                                    ) : (
                                        <p className="text-sm sm:text-base font-medium text-primary">
                                            {info.value}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="pt-4 border-t border-secondary/20">
                        <h4 className="text-xs font-semibold text-text-light mb-3">Social Profiles</h4>
                        <div className="flex gap-3">
                            <a
                                href="http://www.linkedin.com/in/mary-njoroge-a485a33b1"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-11 h-11 rounded-full bg-primary flex items-center justify-center text-white hover:bg-accent hover:text-primary transition-all duration-300 hover:-translate-y-1"
                                aria-label="LinkedIn Profile"
                            >
                                <Linkedin size={18} />
                            </a>
                        </div>
                    </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                    className="lg:col-span-3"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="glass-card p-5 sm:p-8 md:p-10 border-t-4 border-t-primary">
                        <h3 className="text-xl sm:text-2xl font-bold text-primary mb-5 sm:mb-6">Send a Message</h3>

                        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="name" className="text-sm font-medium text-text-main">Your Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-lg bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div className="flex flex-col gap-1.5">
                                    <label htmlFor="email" className="text-sm font-medium text-text-main">Your Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-lg bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col gap-1.5">
                                <label htmlFor="message" className="text-sm font-medium text-text-main">Your Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows={4}
                                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 text-sm rounded-lg bg-background border border-secondary/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all resize-none"
                                    placeholder="How can I help you?"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full btn-primary flex items-center justify-center gap-2 group disabled:opacity-70"
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center gap-2">
                                        <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Sending...
                                    </span>
                                ) : isSubmitted ? (
                                    <span className="flex items-center gap-2">✓ Message Sent Successfully!</span>
                                ) : (
                                    <>
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                    </>
                                )}
                            </button>
                        </form>
                    </div>
                </motion.div>

            </div>
        </section>
    );
};
