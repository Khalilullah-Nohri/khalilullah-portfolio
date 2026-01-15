"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import { certificationsData, Certification } from "@/data/certifications";
import {
  ExternalLink,
  Award,
  Calendar,
  X,
  Maximize2,
  ChevronDown,
  ChevronUp,
  MoveRight,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Certifications = () => {
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);

  // CONFIG: Show 3 initially (1 row on desktop)
  const INITIAL_COUNT = 3;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);
  const [isExpanded, setIsExpanded] = useState(false);

  // --- THE FIX ---
  // We create a NEW list called 'displayData' which is the reverse of your data file.
  // Your Data File: [Old, Middle, New]
  // This Display List: [New, Middle, Old]
  const displayData = [...certificationsData].reverse();

  const toggleView = () => {
    if (isExpanded) {
      setVisibleCount(INITIAL_COUNT);
      setIsExpanded(false);
      // Optional: Scroll back to top of section smoothly
      document
        .getElementById("certifications")
        ?.scrollIntoView({ behavior: "smooth" });
    } else {
      setVisibleCount(displayData.length);
      setIsExpanded(true);
    }
  };

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedCert(null);
      }
    };

    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedCert]);

  return (
    <SectionWrapper
      id="certifications"
      className="relative overflow-hidden py-12 lg:py-16 bg-gradient-to-br from-white via-blue-50/50 to-slate-50 dark:from-[#0a0f1d] dark:via-slate-900 dark:to-slate-950 transition-colors duration-300 border-t border-slate-200/50 dark:border-slate-800/50"
    >
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-15 mix-blend-soft-light pointer-events-none"></div>

      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="lg:text-center mb-10">
          <h2 className="text-base text-blue-600 dark:text-blue-400 font-semibold tracking-wide uppercase">
            Continuous Learning & Credentials
          </h2>
          <h2 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-neutral-900 dark:text-white lg:text-4xl transition-colors duration-300">
            Certifications & Training
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-300 lg:mx-auto transition-colors duration-300">
           Industry-recognized certifications, diplomas, and specialized training programs that validate my technical expertise.
          </p>
        </div>

        {/* MOBILE VISUAL CUE: Only visible on mobile */}
        <div className="lg:hidden flex items-center justify-end text-sm font-medium text-blue-600 dark:text-blue-400 mb-4 animate-pulse">
          Swipe to explore <MoveRight className="ml-2 w-4 h-4" />
        </div>

        {/* GRID / SCROLL LAYOUT */}
        <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory lg:grid lg:grid-cols-3 lg:overflow-visible lg:pb-0 scrollbar-hide">
          {/* IMPORTANT: We map 'displayData' here, NOT 'certificationsData' */}
          {displayData.slice(0, visibleCount).map((cert: Certification) => {
            const Icon = cert.icon;

            return (
              <div
                key={cert.id}
                onClick={() => setSelectedCert(cert)}
                // MOBILE WIDTH FIX: Peeking next card
                className="cursor-pointer min-w-[85vw] sm:min-w-[350px] lg:min-w-0 snap-center group relative flex flex-col bg-white/60 dark:bg-neutral-800/60 backdrop-blur-md rounded-2xl p-1 border border-neutral-200 dark:border-neutral-700/50 hover:border-blue-300 dark:hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${cert.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                />

                {/* THUMBNAIL */}
                <div className="relative h-56 w-full overflow-hidden rounded-xl bg-neutral-100 dark:bg-neutral-950 border border-neutral-100 dark:border-neutral-800">
                  <Image
                    src={cert.image}
                    alt={cert.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3 flex items-center gap-3">
                    <div
                      className={`p-2 rounded-lg bg-white/90 dark:bg-black/60 backdrop-blur-md text-neutral-900 dark:text-white shadow-sm border border-black/10 dark:border-white/10`}
                    >
                      <Icon size={18} />
                    </div>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/10 transition-colors duration-300">
                    <Maximize2
                      className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 drop-shadow-md"
                      size={32}
                    />
                  </div>
                </div>

                <div className="p-5 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-3">
                    <span className="flex items-center text-xs font-bold text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-900/30 px-2 py-1 rounded-md">
                      <Calendar size={12} className="mr-1.5" />
                      {cert.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-neutral-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors mb-1 line-clamp-2">
                    {cert.title}
                  </h3>

                  <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4 line-clamp-1">
                    {cert.issuer}
                  </p>

                  <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700/50 flex items-center text-xs font-medium text-neutral-500 dark:text-neutral-400">
                    <Award
                      size={14}
                      className={`mr-2 ${
                        cert.credentialUrl ? "text-green-500" : "text-blue-500"
                      }`}
                    />
                    <span>Click to view certificate</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* SHOW MORE / SHOW LESS BUTTON */}
        {displayData.length > INITIAL_COUNT && (
          <div className="mt-12 flex justify-center">
            <button
              onClick={toggleView}
              className="inline-flex items-center px-8 py-3 rounded-full bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 text-neutral-900 dark:text-white font-medium shadow-sm hover:shadow-md hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-300"
            >
              {isExpanded ? (
                <>
                  Show Less <ChevronUp className="ml-2 w-5 h-5" />
                </>
              ) : (
                <>
                  View All Credentials <ChevronDown className="ml-2 w-5 h-5" />
                </>
              )}
            </button>
          </div>
        )}
      </div>

      {/* FULL SCREEN IMAGE MODAL */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-8"
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50"
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col items-center justify-center"
            >
              {/* Modal View: Image Only, Full Contain */}
              <div className="relative w-full h-full">
                <Image
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  fill
                  className="object-contain"
                />
              </div>

              {selectedCert.credentialUrl && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-6 py-3 rounded-full bg-blue-600/90 hover:bg-blue-700 text-white font-medium transition-all shadow-lg hover:shadow-blue-600/20 backdrop-blur-sm"
                  >
                    Verify Credential{" "}
                    <ExternalLink size={18} className="ml-2" />
                  </a>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </SectionWrapper>
  );
};

export default Certifications;