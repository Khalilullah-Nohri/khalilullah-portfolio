"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

// This component wraps other sections to give them a scroll animation
const SectionWrapper = ({ children, id, className }: { children: ReactNode; id: string; className?: string }) => {
  return (
    <section id={id} className={className}>
      <motion.div
        initial={{ opacity: 0, y: 50 }} // Start hidden and 50px lower
        whileInView={{ opacity: 1, y: 0 }} // Animate to visible position when in viewport
        viewport={{ once: true, amount: 0.2 }} // Trigger only once when 20% visible
        transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
      >
        {children}
      </motion.div>
    </section>
  );
};

export default SectionWrapper;