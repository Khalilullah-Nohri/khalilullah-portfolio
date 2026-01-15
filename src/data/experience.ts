export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string[]; // Array of bullet points
}

export const experienceData: Experience[] = [
  {
    id: 1,
    role: "Trainee Engineer",
    company: "Sui Southern Gas Company Limited (SSGCL)",
    period: "01/2024 – 12/2025",
    location: "Karachi, Pakistan",
    description: [
      "Legacy System Replaced with Modern Desktop App: Designed and developed a Python (PyQt)-based desktop application integrated with Oracle DB, eliminating manual tasks on legacy AIX OS.Improved process reliability and reduced operational delays by ~50%.",
      "Boosted Web Experience with UI Revamp: Redesigned the official SSGC website homepage; created mockups and implemented a responsive UI using HTML, TailwindCSS, Bootstrap, and modern ES6 JavaScript.",
    ],
  },
  {
    id: 2,
    role: "IT Officer",
    company: "National Bank of Pakistan (NBP)",
    period: "02/2023 – 12/2023",
    location: "Karachi, Pakistan",
    description: [
      "Contributed to the digital transformation of banking operations within the Digitalization of Products and Processes Division.",
      "Ran Oracle queries and generated Management Information System (MIS) reports.",
      "Played a crucial role in web development using React.js and Python to enhance the bank's digital services and user experience.",
    ],
  },
  {
    id: 3,
    role: "DevOps Trainee",
    company: "SkipQ",
    period: "07/2022 – 11/2022",
    location: "Remote",
    description: [
      "Used AWS-CDK to build a web crawler app and automated it using the CI/CD toolkit.",
      "Developed a REST-API for an app using API Gateway.",
      "Utilized CloudWatch, Lambda, S3, DynamoDB, IAM, CodeDeploy, and CodePipeline.",
      "Worked hands-on with Docker and containers.",
    ],
  },
  {
    id: 4,
    role: "Front-end Internee",
    company: "Interns Pk",
    period: "02/2022 – 03/2022",
    location: "Remote",
    description: [
      "Completed a 1.5 months hands-on internship working with HTML5, CSS3, JavaScript (ES6+), jQuery, and React.js.",
      "Practical use of React Router v5, Google Sheets API, React Bootstrap, and Fetch API for real-world project implementation.",
    ],
  },
];