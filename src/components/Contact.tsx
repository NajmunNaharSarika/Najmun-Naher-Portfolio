"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { 
  FiMail, FiSend, FiDownload, FiExternalLink,
  FiPhoneCall, FiCheckCircle, FiMessageSquare, FiAlertCircle, 
  FiFileText, FiMapPin, FiClock, FiStar, FiArrowRight
} from "react-icons/fi";
import { PersonalInfo } from "@/types/portfolio";

interface ContactProps {
  personalInfo: PersonalInfo;
}

export function Contact({ personalInfo }: ContactProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to deliver message. Please try again.");
      }

      setIsSubmitted(true);
      setFormState({ name: "", email: "", subject: "", message: "" });
    } catch (error: any) {
      setErrorMessage(error.message || "An unexpected error occurred.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setErrorMessage(null), 5000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const cleanPhone = personalInfo.contact.phone1.replace(/[^0-9]/g, "");

  return (
    <section id="contact" className="relative overflow-hidden bg-white dark:bg-[#020617] text-black dark:text-slate-100 transition-colors duration-300">
      
      {/* Background decoration for dark mode */}
      <div className="hidden dark:block absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-rose-500/10 via-pink-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="pt-12 pb-24 relative overflow-hidden z-10">
        
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <m.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center mb-12 sm:mb-20"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tighter uppercase mb-6 dark:text-white">
              Let's Talk
            </h2>
            <div className="w-16 h-1 bg-black dark:bg-rose-500 mx-auto mb-6" />
            <p className="text-lg text-black/60 dark:text-slate-400 max-w-lg font-light">
              Available for full-time engineering roles. Send a message and I'll reply promptly.
            </p>
          </m.div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-stretch">
            
            {/* Minimalist Contact Info */}
            <m.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-5 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-2xl font-bold tracking-tight mb-8 dark:text-white">Direct Contact</h3>
                
                <div className="space-y-8">
                  <div className="group">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 block mb-1">Email Address</span>
                    <a href={`mailto:${personalInfo.contact.email}`} className="text-lg font-medium group-hover:underline underline-offset-4 decoration-2 dark:text-slate-200 break-all">
                      {personalInfo.contact.email}
                    </a>
                  </div>
                  
                  <div className="group">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 block mb-1">Phone / WhatsApp</span>
                    <a href={`https://wa.me/${cleanPhone}`} target="_blank" rel="noopener noreferrer" className="text-lg font-medium group-hover:underline underline-offset-4 decoration-2 dark:text-slate-200">
                      {personalInfo.contact.phone1}
                    </a>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/40 dark:text-slate-500 block mb-1">Location</span>
                    <span className="text-lg font-medium dark:text-slate-200">{personalInfo.address.current}</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-black/10 dark:border-slate-800">
                <div className="flex flex-col sm:flex-row items-center justify-between w-full p-6 bg-slate-50 dark:bg-slate-900 border border-black dark:border-slate-800 gap-4 transition-colors hover:border-black dark:hover:border-rose-500/50">
                  <div className="text-center sm:text-left">
                    <span className="block font-bold text-lg mb-1 dark:text-white">Curriculum Vitae</span>
                    <span className="text-[10px] font-bold uppercase tracking-widest text-black/50 dark:text-slate-500">PDF FORMAT · 156 KB</span>
                  </div>
                  <div className="flex items-center justify-center gap-3 w-full sm:w-auto">
                    <a href="/NajmunNaher_FinalCV.pdf" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex-shrink-0 border border-black dark:border-rose-500/50 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-rose-500 dark:text-rose-400 transition-colors text-black" title="View Full CV">
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                    <a href="/NajmunNaher_FinalCV.pdf" download="Najmun_Naher_CV.pdf" className="w-12 h-12 rounded-full flex-shrink-0 border border-black dark:border-rose-500/50 flex items-center justify-center hover:bg-black hover:text-white dark:hover:bg-rose-500 dark:text-rose-400 transition-colors text-black" title="Download CV">
                      <FiDownload className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </m.div>

            {/* Animated Form */}
            <m.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7 bg-slate-50 dark:bg-slate-900 p-6 sm:p-12 border border-slate-200 dark:border-slate-800 rounded-none shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative"
            >
              {/* Corner Markers */}
              <div className="absolute -top-1 -left-1 w-2 h-2 bg-black dark:bg-slate-700 rounded-none" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-black dark:bg-slate-700 rounded-none" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-black dark:bg-slate-700 rounded-none" />
              <div className="absolute -bottom-1 -right-1 w-2 h-2 bg-black dark:bg-slate-700 rounded-none" />
              {isSubmitted ? (
                <div className="absolute inset-0 bg-black dark:bg-rose-500 text-white flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                  <FiCheckCircle className="w-16 h-16 mb-6" />
                  <h3 className="text-3xl font-black uppercase tracking-widest mb-4">Message Sent</h3>
                  <p className="text-white/80 font-light text-lg">Thank you for reaching out. I'll get back to you shortly.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="mt-10 px-8 py-3 border border-white hover:bg-white hover:text-black dark:hover:text-rose-500 transition-colors text-xs font-bold uppercase tracking-widest"
                  >
                    Send Another
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full justify-between gap-12">
                  <div className="space-y-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div className="group">
                        <label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-black dark:text-slate-200 block mb-2 transition-colors">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 sm:py-4 text-base sm:text-lg font-light focus:outline-none focus:border-black dark:focus:border-rose-500 transition-all dark:text-white"
                        />
                      </div>
                      <div className="group">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-black dark:text-slate-200 block mb-2 transition-colors">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 sm:py-4 text-base sm:text-lg font-light focus:outline-none focus:border-black dark:focus:border-rose-500 transition-all dark:text-white"
                        />
                      </div>
                    </div>

                    <div className="group">
                      <label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-black dark:text-slate-200 block mb-2 transition-colors">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formState.subject}
                        onChange={handleChange}
                        required
                        className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 sm:py-4 text-base sm:text-lg font-light focus:outline-none focus:border-black dark:focus:border-rose-500 transition-all dark:text-white"
                      />
                    </div>

                    <div className="group">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-black dark:text-slate-200 block mb-2 transition-colors">Message Details</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 px-4 py-3 sm:py-4 text-base sm:text-lg font-light resize-none focus:outline-none focus:border-black dark:focus:border-rose-500 transition-all dark:text-white"
                      />
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 dark:bg-red-500/10 border-l-4 border-red-500 p-4 mb-4">
                      <div className="flex items-center gap-3">
                        <FiAlertCircle className="w-5 h-5 text-red-500" />
                        <p className="text-sm font-medium text-red-800 dark:text-red-300">{errorMessage}</p>
                      </div>
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center justify-center gap-3 w-full bg-black dark:bg-rose-500 text-white py-5 text-xs font-bold uppercase tracking-widest hover:bg-black/80 dark:hover:bg-rose-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    ) : (
                      <>
                        <span>Submit Message</span>
                        <FiArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </m.div>

          </div>

        </div>
      </div>
    </section>
  );
}
