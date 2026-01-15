"use client";

import SectionWrapper from "@/components/ui/SectionWrapper";
import { experienceData, type Experience } from "@/data/experience";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <SectionWrapper
      id="experience"
      className="relative overflow-hidden py-16 lg:py-24 bg-white dark:bg-neutral-950 transition-colors duration-300"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-16">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Career Path
          </h2>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-4xl transition-colors duration-300">
            Professional Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-neutral-200 dark:border-neutral-800 ml-3 md:ml-6 space-y-12">
          {experienceData.map((exp: Experience) => (
            <div key={exp.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-white dark:border-neutral-900 bg-blue-600 dark:bg-blue-500 group-hover:scale-125 transition-transform duration-300" />

              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h3 className="text-xl font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {exp.role}
                </h3>
                <span className="inline-flex items-center text-sm font-medium text-neutral-500 dark:text-neutral-400 mt-1 sm:mt-0">
                  <Calendar size={14} className="mr-1.5" />
                  {exp.period}
                </span>
              </div>

              <div className="flex items-center text-md font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
                <Briefcase size={16} className="mr-2 text-blue-500" />
                {exp.company}
                <span className="mx-2 text-neutral-300 dark:text-neutral-700">|</span>
                <span className="inline-flex items-center text-sm font-normal text-neutral-500 dark:text-neutral-400">
                  <MapPin size={14} className="mr-1" />
                  {exp.location}
                </span>
              </div>

              <ul className="list-disc list-outside ml-4 space-y-2 text-neutral-600 dark:text-neutral-300 leading-relaxed marker:text-blue-500">
                {exp.description.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Experience;