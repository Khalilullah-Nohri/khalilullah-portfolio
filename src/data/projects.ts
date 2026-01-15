// Define the structure (schema) of a Project object
export interface Project {
  id: number;
  title: string;
  description: string;
  techStack: string[]; // Array of strings for technologies used
  image: string; // Path to image in /public folder. Using placeholders for now.
  githubLink?: string; // Main GitHub link
  liveLink?: string;   // Main Live link
  // NEW FIELD: For projects with multiple sub-links (like internship)
  additionalLinks?: { title: string; url: string; type: 'live' | 'github' }[];
  featured: boolean;   // To decide what shows on homepage vs an "all projects" page
}

// Your real data array, ordered latest first.
// NOTE: I've used placeholder images like "/project-placeholder-1.jpg".
// You should replace these with actual screenshots in your /public folder.
export const projectsData: Project[] = [
  {
    id: 1,
    title: "AI-powered UpWork Agency Management System",
    description: "A full-stack system combining React.js and Flask with SQLAlchemy. Features automated proposal generation via Gemini API, AI-driven job scraping with Selenium, JWT authentication, and an intelligent resume-job matcher using Sentence Transformers.",
    techStack: ["React.js", "Flask", "Python", "Selenium", "Gemini API", "SQLAlchemy", "JWT", "Sentence Transformers"],
    image: "/upwork-project.png", // REPLACE WITH REAL IMAGE
    githubLink: "https://github.com/Khalilullah-Nohri/AI-powered-UpWork-Agency-Management-System",
    featured: true,
  },
  {
    id: 2,
    title: "SSGC Legacy System Replacement App",
    description: "Designed and developed a Python (PyQt)-based desktop application integrated with Oracle DB. This solution eliminated manual tasks on legacy AIX OS systems, improving process reliability and reducing operational delays by approximately 50%.",
    techStack: ["Python", "PyQt", "Oracle DB", "Desktop Development"],
    image: "/ssgc-desktop-app.jpg", // REPLACE WITH REAL IMAGE
    // No links provided, so this will show as "Internal/Corporate Project"
    featured: true,
  },
  {
    id: 3,
    title: "NBP Advanced Salary Application Form",
    description: "Developed a responsive application form using React.js and Tailwind CSS. Implemented secure backend operations with Django and SQLite3, including real-time validation and seamless API communication via Axios.",
    techStack: ["React.js", "Django", "Tailwind CSS", "SQLite3", "Axios"],
    image: "/nbp-advanced-salary-app.PNG", // REPLACE WITH REAL IMAGE
    githubLink: "https://github.com/Khalilullah-Nohri/Personal-development/tree/main/Registration%20Form%20NBP%20Advanced%20SalaryPortal",
    featured: true,
  },
  {
    id: 4,
    title: "Front-End Internship Projects (Interns Pakistan)",
    description: "A health utility application built with React 19 (Class Components) that calculates Basal Metabolic Rate (BMR) and daily caloric needs using the Harris-Benedict equation. Features instant calorie ranges based on activity levels, precise multipliers, and robust form validation for metric inputs.",
    techStack: ["React.js", "React Router", "Redux/Context API", "Google Sheets API", "Bootstrap", "CSS3"],
    image: "/dashboard-app.png", // REPLACE WITH REAL IMAGE
    githubLink: "https://github.com/Khalilullah-Nohri/Interns-Pakistan-Internship",
    // NEW FIELD in action for multiple links
    additionalLinks: [
        { title: "BMR Calculator Live", url: "https://xy734w.csb.app/", type: 'live' }, // Replace '#' with actual live links if you have them
        { title: "Quiz App Live", url: "https://gp79ct.csb.app/", type: 'live' },
        { title: "Dashboard Live", url: "https://r97hrk.csb.app/", type: 'live' }
    ],
    featured: false,
  },


  {
    id: 5,
    title: "Smart Surveillance System (FYP)",
    description: "Developed a Flask-based IoT surveillance system using Raspberry Pi. Utilized OpenCV and Haar-Cascade algorithms for real-time face detection and recognition, achieving 70-80% accuracy with remote monitoring capabilities.",
    techStack: ["Python", "Flask", "OpenCV", "Raspberry Pi", "IoT", "Machine Learning"],
    image: "/fyp-app.jpeg", // REPLACE WITH REAL IMAGE
    githubLink: "https://github.com/Khalilullah-Nohri/FYP--Smart-Surveillance-System",
    featured: false,
  },
];