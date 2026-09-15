"use client";

import { FiArrowUp, FiPhoneCall, FiMail } from "react-icons/fi";
import { FaGithub, FaWhatsapp } from "react-icons/fa";
import { PersonalInfo } from "@/types/portfolio";

interface FooterProps {
  personalInfo: PersonalInfo;
}

export function Footer({ personalInfo }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const cleanPhone = personalInfo.contact.phone1.replace(/[^0-9]/g, "");

  return (
    <footer className="relative border-t border-slate-200 dark:border-slate-800/80 bg-white dark:bg-slate-950/70 backdrop-blur-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Summary */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            
            <div>
              <p className="font-heading font-bold text-black dark:text-white text-base">
                {personalInfo.name}
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                .NET &amp; Web Developer &bull; Azimpur, Dhaka 1205
              </p>
            </div>
          </div>

          {/* Social and Quick Contacts */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href={personalInfo.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-slate-200 hover:text-black dark:hover:text-rose-400 hover:bg-slate-200 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <FaGithub className="w-4 h-4" />
            </a>

            <a
              href={`https://wa.me/${cleanPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-emerald-400 hover:bg-slate-200 dark:hover:bg-emerald-950/40 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
              aria-label="WhatsApp Contact"
              title="WhatsApp"
            >
              <FaWhatsapp className="w-4 h-4" />
            </a>

            <a
              href={`tel:${personalInfo.contact.phone1}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-rose-500 hover:bg-slate-200 dark:hover:bg-rose-950/40 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
              aria-label="Direct Phone"
              title="Call"
            >
              <FiPhoneCall className="w-4 h-4" />
            </a>

            <a
              href={`mailto:${personalInfo.contact.email}`}
              className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 text-black dark:text-indigo-500 hover:bg-slate-200 dark:hover:bg-indigo-950/40 transition-colors border border-slate-200 dark:border-slate-700 shadow-sm"
              aria-label="Email Contact"
              title="Email"
            >
              <FiMail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-black dark:bg-gradient-to-r dark:from-rose-500 dark:to-pink-600 text-white shadow-md hover:opacity-90 transition-all ml-2"
              aria-label="Scroll to top"
              title="Back to Top"
            >
              <FiArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-800/60 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          
        </div>

      </div>
    </footer>
  );
}
