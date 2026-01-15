"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when page is scrolled down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          onClick={scrollToTop}
          // CUTE STYLING:
          // 1. Gradient Background matching your theme
          // 2. 'group' class for icon animation on hover
          // 3. Shadow and Blur for depth
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 text-white shadow-xl hover:shadow-2xl hover:shadow-blue-500/30 transition-all duration-300 group border border-white/20 backdrop-blur-sm"
          aria-label="Scroll to top"
        >
          {/* Icon bounces up slightly on hover */}
          <ArrowUp 
            size={24} 
            strokeWidth={2.5}
            className="group-hover:-translate-y-1 transition-transform duration-300 ease-out cursor-pointer" 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;