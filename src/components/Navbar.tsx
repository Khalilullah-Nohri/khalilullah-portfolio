"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
// 1. Import the hook from the library
import { useTheme } from "next-themes";
import Image from 'next/image'; // <--- Import this
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // 2. Get theme data and the function to set the theme
  const { theme, setTheme } = useTheme();
  // 3. We need to know if the component is mounted on the client to avoid icon mismatch errors
  const [mounted, setMounted] = useState(false);

  // When the page loads on the browser, set mounted to true
  // eslint-disable-next-line react-hooks/set-state-in-effect
  useEffect(() => setMounted(true), []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

 const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md border-b border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          <Link href="/">
            {/* Remove the text-xl classes, as they don't apply to images */}
            <Image
              src="/logo.png" // Path to your image in the public folder
              alt="Khalilullah Logo"
              width={150} // Adjust width (in pixels)
              height={10} // Adjust height (in pixels)
              className="object-contain h-6 w-35" // Ensures the logo doesn't get stretched
              // priority // Loads the image immediately (good for SEO/LCP)
              unoptimized
            />
          </Link>


{/* 
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}

              {/* 4. THE REAL TOGGLE BUTTON */}
              {/* Only show the button after mount to prevent hydration mismatch */}
              {mounted && (
                <button
                  // 5. The logic: If currently dark, set light. Otherwise set dark.
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="p-2 bg-neutral-200 rounded-full text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 focus:outline-none transition-colors"
                  // className=" p-2 bg-neutral-200 dark:bg-neutral-800 rounded-full text-sm"
                // 🌙/☀️

                  
                  aria-label="Toggle Dark Mode"
                >
                  {/* Show Sun icon if dark mode is on */}
                  {theme === "dark" ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                      />
                    </svg>
                  ) : (
                    /* Show Moon icon if light mode is on */
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
                      />
                    </svg>
                  )}
                </button>
              )}
            </div>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="-mr-2 flex md:hidden">
            {/* ... (Mobile menu button code remains the same) ... */}
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-neutral-200 dark:bg-neutral-800 inline-flex items-center justify-center p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-neutral-950 shadow-lg">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={toggleMenu}
                className="text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </Link>
            ))}
            {/* Add Dark Mode Toggle to Mobile Menu too */}
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="w-full text-left text-neutral-600 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800"
              >
                {theme === "dark"
                  ? "Switch to Light Mode ☀️"
                  : "Switch to Dark Mode 🌙"}
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
