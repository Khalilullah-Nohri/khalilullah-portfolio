import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
// NEW: Experience goes right after About (High Priority)
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
// NEW: Education goes here (Standard placement)
import Education from "@/components/sections/Education";
import Certifications from "@/components/sections/Certifications"; 
import Contact from "@/components/sections/Contact";
import ScrollToTop from "@/components/ui/ScrollToTop";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experience /> 
      <Projects />
      <Skills />
      <Education />
      <Certifications />
      <Contact />
      <ScrollToTop />
    </>
  );
}