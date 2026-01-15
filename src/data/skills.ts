export type Skill = {
  name: string;
  icon?: string;
};

export type SkillCategory = {
  title: string;
  skills: Skill[];
};

export const skillsData: SkillCategory[] = [
  {
    title: "Languages & Core",
    skills: [
      { name: "Python (Django/Flask/FastAPI/PyQt)" },
      { name: "JavaScript (ES6+)" },
      { name: "TypeScript" },
      { name: "SQL & PL/SQL" },
      { name: "HTML5 & CSS3" },
    ],
  },
  {
    title: "Cloud & DevOps",
    skills: [
      { name: "AWS (Lambda, S3, EC2, DynamoDB)" },
      { name: "Docker & Containerization" },
      { name: "Linux Administration" },
      { name: "CI/CD (Jenkins/GitHub Actions/Azure DevOps)" },
      { name: "Terraform (IaC)" },
      { name: "Kubernetes (Basics)" }, // Added from training [cite: 83]
    ],
  },
  {
    title: "Frontend & UI",
    skills: [
      { name: "React.js" },
      { name: "Next.js" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Material UI" },
      { name: "Responsive Design" },
    ],
  },
  {
    title: "Backend, AI & Tools",
    skills: [
      { name: "Oracle DB & MySQL & Microsoft SQL Server" },
      { name: "Node.js (Express)" }, // Added from resume 
      { name: "RESTful APIs & Postman" }, // Added Postman 
      { name: "Web Scraping (Selenium,Beautiful Soup, Requests)" },
      { name: "GenAI & LLMs (Hugging Face, Gradio)" }, // Added specifics 
      { name: "Agile & JIRA" }, // Added soft/process skill 
    ],
  },
];