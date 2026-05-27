export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  url?: string;
  description: string;
  technologies: string[];
  highlights: string[];
}

export const experience: Experience[] = [
  {
    id: "oasys",
    company: "Oasys",
    role: "Software Engineer Intern",
    period: "May 2025 – September 2025",
    description:
      "Built a native iOS EHR platform for therapists with real-time notifications and led the App Store launch.",
    technologies: ["Swift", "Socket.io", "Figma"],
    highlights: [
      "Built native iOS app in Swift for an AI-native EHR and practice management system for therapists",
      "Implemented WebSocket layer using Socket.io for real-time patient notifications",
      "Led App Store submission, reaching 75+ users within the first two days of launch",
    ],
  },
  {
    id: "new-eic",
    company: "NEW EIC",
    role: "Software Engineer Intern",
    period: "January 2025 – April 2025",
    description:
      "Extended a rich text editor with AI-assisted annotation and set up CI/CD for same-day production deployments.",
    technologies: ["Next.js", "Lexical", "GPT-3.5 Turbo", "Supabase", "Drizzle ORM"],
    highlights: [
      "Extended Lexical-based rich text editor with AI-assisted annotation powered by GPT-3.5 Turbo autocomplete",
      "Integrated Supabase as the backend with Drizzle ORM for type-safe database queries",
      "Configured CI/CD pipeline enabling same-day production deployments",
    ],
  },
  {
    id: "ut-austin-research",
    company: "UT Austin",
    role: "Undergraduate Researcher",
    period: "October 2024 – December 2024",
    description:
      "Contributed to codeAssist, an open-source platform replacing Gradescope's pass/fail scoring with AI-generated code feedback.",
    technologies: ["React", "Flask", "REST APIs", "Selenium", "Python"],
    highlights: [
      "Contributed to codeAssist, an open-source tool that replaces Gradescope's pass/fail scoring with AI-generated personalized code feedback",
      "Built 5+ full-stack features across React frontend and Flask REST API backend",
      "Wrote end-to-end tests with Selenium to validate feedback generation workflows",
    ],
  },
];
