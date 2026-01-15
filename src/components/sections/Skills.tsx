"use client";

import { skillsData, SkillCategory, Skill } from "@/data/skills";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Code2, FileCode, Database, Server, Cloud, Container, Terminal, GitBranch, Globe, Cpu, Layers, Braces } from "lucide-react";

const Skills = () => {
  const getSkillIcon = (skillName: string) => {
    if (skillName.includes("Python") || skillName.includes("Django") || skillName.includes("Flask")) return <FileCode size={18} />;
    if (skillName.includes("Java") || skillName.includes("TypeScript")) return <Code2 size={18} />;
    if (skillName.includes("HTML") || skillName.includes("CSS") || skillName.includes("Tailwind")) return <Braces size={18} />;
    if (skillName.includes("React") || skillName.includes("Next")) return <Layers size={18} />;
    if (skillName.includes("SQL") || skillName.includes("Oracle") || skillName.includes("DB")) return <Database size={18} />;
    if (skillName.includes("AWS") || skillName.includes("Cloud")) return <Cloud size={18} />;
    if (skillName.includes("Docker") || skillName.includes("Container")) return <Container size={18} />;
    if (skillName.includes("Linux") || skillName.includes("Terminal") || skillName.includes("Shell")) return <Terminal size={18} />;
    if (skillName.includes("Git")) return <GitBranch size={18} />;
    if (skillName.includes("API") || skillName.includes("Web") || skillName.includes("Postman")) return <Globe size={18} />;
    if (skillName.includes("AI") || skillName.includes("Selenium") || skillName.includes("Hugging")) return <Cpu size={18} />;
    return <Server size={18} />;
  };

  return (
    <SectionWrapper
      id="skills"
      className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-[#0a0f1d] dark:to-slate-900 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Expertise
          </h2>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-4xl transition-colors duration-300">
            Technical Skills & Tools
          </h2>
          {/* SIMPLIFIED TEXT HERE */}
          <p className="mt-4 max-w-3xl text-lg text-neutral-600 dark:text-neutral-300 lg:mx-auto transition-colors duration-300">
            A versatile set of technologies I use to build full-stack applications, manage cloud infrastructure, and automate complex workflows.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mx-auto">
          {skillsData.map((category: SkillCategory, index: number) => (
            <div
              key={index}
              className="bg-white/60 dark:bg-neutral-900/60 backdrop-blur-md rounded-3xl p-6 lg:p-8 border border-neutral-200 dark:border-neutral-800 shadow-sm hover:shadow-md transition-all duration-300 group h-full flex flex-col"
            >
              <h3 className="text-lg lg:text-xl font-bold text-neutral-900 dark:text-white mb-6 transition-colors duration-300 flex items-center">
                <span className="mr-3 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  {index === 0 && <Code2 size={22} />}
                  {index === 1 && <Cloud size={22} />}
                  {index === 2 && <Layers size={22} />}
                  {index === 3 && <Database size={22} />}
                </span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2 lg:gap-3 flex-1 content-start">
                {category.skills.map((skill: Skill, skillIndex: number) => (
                  <span
                    key={skillIndex}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 lg:px-4 lg:py-2 rounded-xl text-xs lg:text-sm font-medium bg-white dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200 border border-neutral-200 dark:border-neutral-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 cursor-default shadow-sm hover:shadow-md"
                  >
                    <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                      {getSkillIcon(skill.name)}
                    </span>
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;