"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react"; // Import useState
import { projectsData, Project } from "@/data/projects";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { Github, ExternalLink, ChevronDown, ChevronUp } from "lucide-react";

const Projects = () => {
  // CONFIG: How many projects to show initially?
  const INITIAL_PROJECTS = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_PROJECTS);

  // Logic to toggle between showing all or just a few
  const toggleView = () => {
    if (visibleCount >= projectsData.length) {
      setVisibleCount(INITIAL_PROJECTS); // Collapse
      // Optional: Scroll back to top of projects section if needed
      const element = document.getElementById("projects");
      if(element) element.scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount(projectsData.length); // Expand to show all
    }
  };

  return (
    <SectionWrapper
      id="projects"
      className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-slate-100 via-blue-50 to-white dark:from-slate-950 dark:via-[#0a0f1d] dark:to-slate-900 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>
      
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-12">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Portfolio
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-4xl transition-colors duration-300">
            Featured Projects
          </p>
          <p className="mt-4 max-w-3xl text-lg text-neutral-600 dark:text-neutral-300 lg:mx-auto transition-colors duration-300">
            A selection of my work across full-stack development, database
            modernization, and cloud automation.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {/* We only map the 'visible' slice of data */}
          {projectsData.slice(0, visibleCount).map((project: Project) => (
            <div
              key={project.id}
              className="flex flex-col bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-neutral-200 dark:border-neutral-700 group"
            >
              <div className="relative h-48 sm:h-56 lg:h-48 w-full bg-neutral-200 dark:bg-neutral-700 overflow-hidden">
                <Image
                  src={project.image}
                  alt={`Screenshot of ${project.title}`}
                  fill
                  // className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  className="object-top transition-transform duration-500 group-hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-4 right-4 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-blue-600/90 backdrop-blur-sm rounded-full shadow-sm">
                    Featured
                  </div>
                )}
              </div>

              <div className="flex-1 p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3 transition-colors duration-300 group-hover:text-blue-600 dark:group-hover:text-blue-400 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-300 mb-6 line-clamp-3 leading-relaxed transition-colors duration-300">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.slice(0, 5).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2.5 py-1 text-xs font-medium bg-neutral-100 dark:bg-neutral-700/50 text-neutral-700 dark:text-neutral-200 rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-2.5 py-1 text-xs font-medium text-neutral-500 dark:text-neutral-400">
                        +{project.techStack.length - 5} more
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-auto pt-5 border-t border-neutral-100 dark:border-neutral-700/50">
                  <div className="flex items-center gap-5 mb-3">
                    {project.githubLink && (
                      <Link
                        href={project.githubLink}
                        target="_blank"
                        className="text-sm font-bold text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center transition-colors group/link"
                      >
                        <Github size={16} className="mr-2 transition-transform group-hover/link:-translate-y-1" />
                        Code
                      </Link>
                    )}
                    {project.liveLink && (
                      <Link
                        href={project.liveLink}
                        target="_blank"
                        className="text-sm font-bold text-neutral-700 dark:text-neutral-200 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center transition-colors group/link"
                      >
                        <ExternalLink size={16} className="mr-2 transition-transform group-hover/link:-translate-y-1" />
                        Live Demo
                      </Link>
                    )}
                    {!project.githubLink && !project.liveLink && (
                      <span className="text-sm text-neutral-500 italic flex items-center">
                         Internal/Corporate Project
                      </span>
                    )}
                  </div>

                  {project.additionalLinks && project.additionalLinks.length > 0 && (
                    <div className="flex flex-wrap gap-3 pl-2 border-l-2 border-blue-100 dark:border-blue-900">
                        {project.additionalLinks.map((link, idx) => (
                            <Link key={idx} href={link.url} target="_blank" className="text-xs font-medium text-blue-600 dark:text-blue-400 hover:underline">
                                {link.title}
                            </Link>
                        ))}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SHOW MORE / SHOW LESS BUTTON */}
        {projectsData.length > INITIAL_PROJECTS && (
            <div className="mt-16 flex justify-center">
                <button
                    onClick={toggleView}
                    className="inline-flex items-center px-8 py-4 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
                >
                    {visibleCount >= projectsData.length ? (
                        <>
                            Show Less <ChevronUp className="ml-2 w-5 h-5" />
                        </>
                    ) : (
                        <>
                            Show More Projects <ChevronDown className="ml-2 w-5 h-5" />
                        </>
                    )}
                </button>
            </div>
        )}

      </div>
    </SectionWrapper>
  );
};

export default Projects;