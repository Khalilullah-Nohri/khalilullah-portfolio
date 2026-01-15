"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <SectionWrapper
      id="education"
      className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row gap-8 items-start">
            
          {/* Header */}
          <div className="md:w-1/3">
            <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
              Academic Background
            </h2>
            <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white transition-colors duration-300">
              Education
            </h2>
          </div>

          {/* Content Card */}
          <div className="md:w-2/3 w-full">
            <div className="bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                        <GraduationCap size={32} />
                    </div>
                    <span className="inline-flex items-center text-sm font-bold text-neutral-500 dark:text-neutral-400 bg-white dark:bg-neutral-800 px-3 py-1 rounded-full border border-neutral-200 dark:border-neutral-700">
                        <Calendar size={14} className="mr-2" />
                        Oct 2017 - Dec 2021
                    </span>
                </div>

                <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    B.E. Computer Systems Engineering
                </h3>
                
                <p className="text-lg font-medium text-neutral-700 dark:text-neutral-300 mb-4">
                    Mehran University of Engineering and Technology (MUET)
                </p>

                <div className="flex items-center text-sm text-neutral-500 dark:text-neutral-400 mb-6">
                    <MapPin size={16} className="mr-1" />
                    Jamshoro, Pakistan
                </div>

                {/* Core Subjects Section */}
                <div className="mb-6">
                    <p className="flex items-center text-sm font-semibold text-neutral-900 dark:text-white mb-2">
                        <BookOpen size={16} className="mr-2 text-blue-500" />
                        Core Subjects:
                    </p>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        OOP/Programming, Data Structures, Networking, Web Designing, Database Management, AI & Data Science, and other CS Core Courses.
                    </p>
                </div>

                <div className="border-t border-neutral-200 dark:border-neutral-800 pt-4">
                    <p className="text-neutral-600 dark:text-neutral-300">
                        <span className="font-bold text-neutral-900 dark:text-white">FYP: Smart Surveillance System</span>
                    </p>
                    <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1 leading-relaxed">
                        Automated door lock system using Flask, Twilio, and Raspberry Pi with facial detection to trigger messaging and gate control.
                    </p>
                </div>
            </div>
          </div>

        </div>
      </div>
    </SectionWrapper>
  );
};

export default Education;