"use client";

import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight, Phone } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    
    { name: "Contact", href: "#contact" },
  ];

  return (
    // HEIGHT FIX: Reduced padding to py-12
    // COLOR FIX: Exact Hero gradient background + border
    <footer className="relative overflow-hidden py-12 bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-[#0a0f1d] dark:to-slate-900 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-800/50">
      {/* Standardized noise opacity to 0.15 */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Column 1: Brand & Mission */}
          <div className="space-y-4">
            <Link
              href="/"
              className="text-2xl font-bold text-neutral-900 dark:text-white"
            >
              Khalilullah
            </Link>
            <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed pr-4">
              Bridging the gap between complex backend logic, modern frontend
              experiences, and scalable cloud infrastructure.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-3">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-neutral-600 dark:text-neutral-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors inline-flex items-center group"
                  >
                    {item.name}
                    <ArrowUpRight
                      size={16}
                      className="ml-1 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h3 className="text-sm font-semibold text-neutral-900 dark:text-white uppercase tracking-wider mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-neutral-600 dark:text-neutral-400 mb-6">
              Open for opportunities in Full-Stack and DevOps engineering.
            </p>
            <div className="flex space-x-5">
              {/* GitHub */}
              <a
                href="https://github.com/Khalilullah-Nohri"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#333] dark:text-neutral-400 dark:hover:text-white transition-colors transform hover:scale-110"
                aria-label="GitHub"
              >
                <Github size={28} strokeWidth={1.5} />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/khalilullah-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-500 hover:text-[#0077b5] dark:text-neutral-400 dark:hover:text-[#0077b5] transition-colors transform hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin size={28} strokeWidth={1.5} />
              </a>

              {/* Email */}
              <a
                href="mailto:nohrikhalilullah@gmail.com"
                className="text-neutral-500 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400 transition-colors transform hover:scale-110"
                aria-label="Email"
              >
                <Mail size={28} strokeWidth={1.5} />
              </a>

              {/* WhatsApp (Added) */}
              <a
                href="https://wa.me/923421520614"
                target="_blank"
                className="text-neutral-500 hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400 transition-colors transform hover:scale-110"
                aria-label="WhatsApp"
              >
                <Phone size={28} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-8 border-t border-neutral-200/30 dark:border-neutral-800/30 text-center md:text-left flex flex-col md:flex-row justify-between items-center relative z-10">
          <p className="text-sm text-neutral-500 dark:text-neutral-400">
            © {currentYear} Khalilullah Nohri. Built with Next.js, Tailwind &
            Framer Motion.
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2 md:mt-0">
            Engineered in Pakistan 🇵🇰
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
