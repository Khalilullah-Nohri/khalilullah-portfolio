import type { Metadata } from "next";
// 1. Load the Inter font (Professional & Fast)
import { Inter } from "next/font/google";
import "./globals.css";

// 2. Your existing component paths
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

// Configure font
const inter = Inter({ subsets: ["latin"] });

// --- SEO METADATA CONFIGURATION ---
export const metadata: Metadata = {
  // 1. ADD THIS LINE TO FIX THE WARNING
  // (Replace with your actual Vercel URL once you have it, for now use this placeholder)
  metadataBase: new URL("https://khalilullah-nohri-portfolio.vercel.app"),
  // Title Template: ensures sub-pages (if you add them) look like "Projects | Khalilullah Nohri"
  title: {
    default: "Khalilullah Nohri | Software & DevOps Engineer",
    template: "%s | Khalilullah Nohri",
  },
  description:
    "Portfolio of Khalilullah Nohri, a Full-Stack Engineer specializing in Python, React, Next.js, and Cloud Automation (AWS/DevOps). Engineered in Pakistan.",

  // Keywords for Google Search
  keywords: [
    "Khalilullah Nohri",
    "Software Engineer",
    "DevOps Engineer",
    "Full Stack Developer",
    "Python Developer",
    "Next.js Portfolio",
    "AWS Cloud",
    "Docker",
    "Pakistan",
    "Karachi",
  ],

  // Author info
  authors: [{ name: "Khalilullah Nohri" }],
  creator: "Khalilullah Nohri",

  // Open Graph = How it looks on LinkedIn, Facebook, WhatsApp
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://khalilullah-nohri-portfolio.vercel.app", // CHANGE THIS to your actual domain later
    title: "Khalilullah Nohri | Software & DevOps Engineer",
    description:
      "Bridging the gap between complex backend logic, modern frontend experiences, and scalable cloud infrastructure.",
    siteName: "Khalilullah Nohri Portfolio",
    images: [
      {
        url: "/profile.jpg", // Uses your profile pic as the preview image
        width: 1200,
        height: 630,
        alt: "Khalilullah Nohri - Software Engineer",
      },
    ],
  },

  // Twitter Card = How it looks on X (Twitter)
  twitter: {
    card: "summary_large_image",
    title: "Khalilullah Nohri | Software & DevOps Engineer",
    description:
      "Building robust, scalable applications and automating cloud infrastructure.",
    images: ["/profile.jpg"], // Uses your profile pic
    // creator: "@yourtwitterhandle", // Optional: Add if you have a professional Twitter
  },

  // Icons (Favicon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },

  // Robots.txt equivalent
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // 'scroll-smooth' makes clicking nav links glide instead of jump
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        suppressHydrationWarning={true}
        className={`${inter.className} min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-neutral-50 font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          {/* pt-16 ensures content isn't hidden behind the fixed Navbar */}
          <main className="pt-16 min-h-screen flex flex-col">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
