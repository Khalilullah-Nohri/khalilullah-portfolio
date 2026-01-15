import { Terminal, Cpu, FileCode, Globe, BookOpen, LucideIcon } from "lucide-react";

export interface Certification {
  id: number;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string; 
  image: string; 
  icon: LucideIcon;
  color: string; 
}

// ORDER: Oldest at the top, Newest at the bottom.
// The website will auto-reverse this to show Newest first.
export const certificationsData: Certification[] = [
  // 1. TechKorner (Oldest - 2020)
  {
    id: 1,
    title: "Web Development Internship",
    issuer: "TechKorner Hyderabad",
    date: "March 2020",
    image: "/cert-techkorner.jpg", 
    icon: Globe,
    color: "from-purple-500 to-indigo-600",
  },
  // 2. PCAP Python (Foundational)
  {
    id: 2,
    title: "PCAP: Programming Essentials in Python",
    issuer: "Python Institute / Cisco",
    date: "4 Months",
    image: "/cert-pcap.jpg", 
    icon: BookOpen,
    color: "from-yellow-500 to-yellow-600",
  },
  // 3. Interns Pk (2022)
  {
    id: 3,
    title: "Front-end Internee",
    issuer: "Interns Pk (Spark Program)",
    date: "Feb 2022 - Mar 2022",
    image: "/cert-internspk.jpg", 
    icon: Globe,
    color: "from-cyan-500 to-blue-500",
  },
  // 4. SBP Python Training
  {
    id: 4,
    title: "Python for Executives: Data Analytics",
    issuer: "SBP at NIBAF Karachi",
    date: "1 Week",
    image: "/cert-nibaf.jpg", 
    icon: FileCode,
    color: "from-blue-800 to-indigo-900",
  },
  // 5. GenAI (Newest)
  {
      id: 5,
      title: "Generative AI Specialization",
      issuer: "GenAI Application Developer",
      date: "6 Weeks",
      credentialUrl: "https://credsverse.com/credentials/5613f5ae-769e-47f8-8234-7f6263bf7cd9",
      image: "/cert-genai.png", 
      icon: Cpu,
      color: "from-purple-600 to-pink-600",
    },
    // 6. Systems Limited (Diploma)
    {
      id: 6,
      title: "IT Mustakbil Training Program (Diploma)",
      issuer: "Systems Limited",
      date: "6 Months",
      image: "/cert-systems.jpg", 
      icon: Terminal,
      color: "from-blue-600 to-blue-800",
    },
];