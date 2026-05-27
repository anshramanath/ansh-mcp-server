export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Swift", "SQL", "Java", "C", "C++", "HTML", "CSS", "R", "C#", ".NET"],
  },
  {
    category: "Frameworks, Libraries & Platforms",
    items: ["React", "Next.js", "Node.js", "Flask", "SwiftUI", "Expo", "Supabase", "Socket.io", "Stripe", "MongoDB", "AWS"],
  },
  {
    category: "Tools",
    items: ["Docker", "Postman", "Figma", "Selenium", "Jest", "Storybook", "Hoppscotch", "Terraform", "Prometheus", "Grafana", "Kubernetes"],
  },
];
