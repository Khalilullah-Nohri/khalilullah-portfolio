"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
// Added 'Phone' for WhatsApp
import { Download, ArrowRight, CheckCircle2, Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 },
    },
  };

  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, damping: 20 },
    },
  };

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { type: "spring" as const, stiffness: 100, delay: 0.3 },
    },
  };

  return (
    <section
      id="home"
      className="relative flex items-center lg:items-center overflow-hidden bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-[#0a0f1d] dark:to-slate-900 transition-colors duration-300 pt-16 pb-8 lg:min-h-[60vh] lg:pt-12 lg:pb-8"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 ">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-16 items-center lg:items-start">
          {/* LEFT COLUMN (Text) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-col justify-center lg:w-1/2 lg:pr-8 "
          >
            <motion.div
              variants={textVariants}
              className="inline-flex items-center space-x-2 bg-blue-100 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-1.5 w-fit mb-6"
            >
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
              </span>
              <span className="text-sm font-semibold text-blue-800 dark:text-blue-300">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.p
              variants={textVariants}
              className="text-base lg:text-lg font-bold text-slate-600 dark:text-slate-400 mb-2 uppercase tracking-wider"
            >
              Hello, I am
            </motion.p>

            <motion.h1
              variants={textVariants}
              // Reduced title size slightly (text-3xl sm:text-4xl lg:text-5xl)
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-4"
            >
              Khalilullah Nohri
            </motion.h1>

            <motion.h2
              variants={textVariants}
              className="text-2xl sm:text-3xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 mb-6"
            >
              Software Engineer | DevOps & Cloud
            </motion.h2>
    
            <motion.p
              variants={textVariants}
              className="text-lg text-slate-700 dark:text-slate-300 max-w-xl mb-8 leading-relaxed font-medium"
            >
              Passionate about creating efficient, scalable software solutions and designing robust cloud architectures. I thrive on bridging the gap between innovative code and reliable, automated deployment systems.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              variants={textVariants}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Link
                href="#projects"
                className="group px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-lg font-bold rounded-xl text-white bg-blue-700 hover:bg-blue-800 shadow-lg hover:shadow-blue-700/30 transition-all transform hover:-translate-y-1 flex items-center"
              >
                View My Work
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>

              <a
                href="/Khalilullah-Resume.pdf"
                download="Khalilullah-Nohri-Resume.pdf"
                className="px-6 py-3 lg:px-8 lg:py-4 text-sm lg:text-lg font-bold rounded-xl text-slate-700 dark:text-slate-200 bg-white/50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700 hover:border-blue-600 dark:hover:border-blue-400 transition-all transform hover:-translate-y-1 flex items-center backdrop-blur-md"
              >
                <Download size={20} className="mr-2" />
                Download CV
              </a>
            </motion.div>

            {/* NEW: First Look Social Icons (Added WhatsApp) */}
            <motion.div variants={textVariants} className="flex gap-4 mb-8">
                <a href="https://linkedin.com/in/khalilullah-dev" target="_blank" className="text-neutral-500 hover:text-blue-600 dark:text-neutral-400 dark:hover:text-blue-400 transition-colors">
                    <Linkedin size={24} />
                </a>
                <a href="https://github.com/Khalilullah-Nohri" target="_blank" className="text-neutral-500 hover:text-black dark:text-neutral-400 dark:hover:text-white transition-colors">
                    <Github size={24} />
                </a>
                <a href="mailto:nohrikhalilullah@gmail.com" className="text-neutral-500 hover:text-red-500 dark:text-neutral-400 dark:hover:text-red-400 transition-colors">
                    <Mail size={24} />
                </a>
                <a href="https://wa.me/923421520614" target="_blank" className="text-neutral-500 hover:text-green-500 dark:text-neutral-400 dark:hover:text-green-400 transition-colors">
                    <Phone size={24} />
                </a>
            </motion.div>

            {/* Core Stack Snapshot */}
            <motion.div
              variants={textVariants}
              className="border-t border-slate-200 dark:border-slate-800/50 pt-8"
            >
              <p className="text-sm font-bold text-slate-500 dark:text-slate-400 mb-4 uppercase tracking-wider">
                Core Technical Focus
              </p>
              <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm lg:text-base text-slate-700 dark:text-slate-300 font-semibold">
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-500 mr-2" size={18} />{" "}
                  Python & Django/Flask/FastAPI
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-500 mr-2" size={18} />{" "}
                  Javascript & React.js/Next.js
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-500 mr-2" size={18} /> AWS
                  Cloud 
                </li>
                <li className="flex items-center">
                  <CheckCircle2 className="text-blue-500 mr-2" size={18} />{" "}
                  Linux & Git & Docker & Terraform & CI/CD
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN (Image) */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate="visible"
            className="relative lg:w-1/2 flex items-center justify-center mb-8 lg:mb-0 lg:pt-16"
          >
            <div className="absolute w-[350px] h-[350px] sm:w-[500px] sm:h-[500px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-blue-200 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-[2rem] sm:rounded-[3rem] rotate-12 animate-spin-slow opacity-40 dark:opacity-60 mix-blend-multiply dark:mix-blend-soft-light blur-2xl"></div>
            <div className="absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[400px] lg:h-[400px] bg-gradient-to-tl from-indigo-200 to-purple-200 dark:from-indigo-900/30 dark:to-purple-900/30 rounded-[1.5rem] sm:rounded-[2rem] -rotate-12 animate-reverse-spin-slow opacity-40 dark:opacity-60 mix-blend-multiply dark:mix-blend-soft-light blur-xl"></div>

            {/* Image Container */}
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-[20rem] lg:h-[20rem] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border-[6px] sm:border-[8px] border-white/80 dark:border-slate-800/80 shadow-2xl z-10 ring-1 ring-slate-900/5 dark:ring-white/10 backdrop-blur-sm">
              <Image
                src="/profile.jpg"
                alt="Khalilullah Nohri"
                fill
                className="object-cover"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;