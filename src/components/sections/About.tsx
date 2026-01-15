"use client";

import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Briefcase, FolderGit2, ArrowRightCircle } from "lucide-react";
import CountUp from "react-countup";

const About = () => {
  return (
    <SectionWrapper
      id="about"
      className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-[#0a0f1d] dark:to-slate-900 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            About Me
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-4xl transition-colors duration-300">
            Full-Stack Engineering & Cloud Automation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* COLUMN 1: Main Bio */}
          <div className="text-base lg:text-lg space-y-6 lg:space-y-8">
            <p className="text-neutral-900 dark:text-white transition-colors duration-300 leading-relaxed font-medium text-xl lg:text-xl">
              I am a Software Engineer focused on developing scalable applications and optimizing their delivery through DevOps practices.
            </p>
             <p className="text-neutral-700 dark:text-neutral-300 transition-colors duration-300 leading-relaxed">
               My expertise lies at the intersection of application development and cloud operations. I build efficient full-stack solutions using Python, Javascript and their frameworks, while simultaneously ensuring system stability through automated CI/CD pipelines and cloud-native architectures. I believe in engineering complete production lifecycles, not just writing code.
            </p>
            <div className="pt-4 flex justify-start">
                <Link
                href="#contact"
                className="px-6 py-3 lg:px-8 lg:py-4 text-base lg:text-lg font-medium rounded-full text-white bg-blue-600 hover:bg-blue-700 shadow-md transition-all transform hover:-translate-y-1 inline-flex items-center"
                >
                Let&apos;s Work Together
                <ArrowRightCircle className="ml-3 w-5 h-5 lg:w-6 lg:h-6" />
                </Link>
            </div>
          </div>

          {/* COLUMN 2: Stats & Highlights */}
          <div className="space-y-8">
             {/* STATS BOX */}
            <div className="grid grid-cols-2 gap-8 py-8 px-6 bg-white/60 dark:bg-neutral-800/60 backdrop-blur-md rounded-[2rem] shadow-xl border border-neutral-100 dark:border-neutral-700/50 relative z-20">
                {/* Stat 1 */}
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="text-blue-600 dark:text-blue-400 mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                        <Briefcase size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white block mb-2 flex items-center justify-center">
                        <CountUp start={0} end={3} duration={2.5} enableScrollSpy scrollSpyOnce={true}>
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                        <span>+</span>
                    </span>
                    <span className="text-xs lg:text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                        Years Experience
                    </span>
                </div>

                {/* Stat 2 */}
                <div className="flex flex-col items-center justify-center text-center border-l border-neutral-200 dark:border-neutral-700">
                    <div className="text-blue-600 dark:text-blue-400 mb-4 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-2xl">
                        <FolderGit2 size={32} strokeWidth={1.5} />
                    </div>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 dark:text-white block mb-2 flex items-center justify-center">
                        <CountUp start={0} end={6} duration={3} enableScrollSpy scrollSpyOnce={true}>
                          {({ countUpRef }) => (
                            <span ref={countUpRef} />
                          )}
                        </CountUp>
                        <span>+</span>
                    </span>
                    <span className="text-xs lg:text-sm font-bold text-neutral-600 dark:text-neutral-400 uppercase tracking-wider">
                        Projects Completed
                    </span>
                </div>
            </div>

            {/* Professional Highlights */}
            <div className="space-y-6 text-sm lg:text-base text-neutral-600 dark:text-neutral-300 transition-colors duration-300 pl-4 border-l-4 border-blue-200 dark:border-blue-900">
                <p>
                    <strong>Enterprise Modernization:</strong> Optimized key legacy workflows for major organizations like SSGC and NBP by replacing manual processes with automated, data-driven desktop and web solutions.
                </p>
                <p>
                    <strong>Cloud & DevOps Engineering:</strong> Experienced in provisioning secure cloud infrastructure on AWS. Proficient in using Docker for containerization and implementing CI/CD strategies to streamline deployment.
                </p>
                <p>
                    {/* UPDATED SECTION */}
                    <strong>Technical Innovation:</strong> Continuously integrating emerging technologies, utilizing <strong>Generative AI, RAG pipelines, and fine-tuned LLMs</strong> alongside <strong>advanced Python libraries, to enhance application performance and user experience.</strong>
                </p>
            </div>
             <div className="pt-4 flex justify-start font-medium text-blue-600 dark:text-blue-400 items-center group cursor-pointer text-sm lg:text-base">
                <Link href="#skills" className="inline-flex items-center">
                    View my technical toolkit
                    <ArrowRightCircle className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" />
                </Link>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;