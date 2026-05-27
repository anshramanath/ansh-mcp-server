import { profile } from "./data/profile";
import { projects, Project } from "./data/projects";
import { experience } from "./data/experience";
import { skills } from "./data/skills";

export interface ToolResult {
  content: Array<{ type: "text"; text: string }>;
  isError?: boolean;
}

export interface Tool {
  name: string;
  description: string;
  inputSchema: {
    type: "object";
    properties: Record<string, unknown>;
    required?: string[];
  };
  handler: (args: Record<string, unknown>) => Promise<ToolResult>;
}

function text(value: unknown): ToolResult {
  return { content: [{ type: "text", text: JSON.stringify(value, null, 2) }] };
}

export const tools: Tool[] = [
  {
    name: "get_profile",
    description:
      "Returns Ansh's basic profile: name, title, summary, location, email, and social links. " +
      "Use this first to get an overview of who Ansh is.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => text(profile),
  },

  {
    name: "list_projects",
    description:
      "Returns Ansh's projects. Optionally filter by technology or tag. " +
      "Each project includes description, tech stack, tags, and resume-style highlights.",
    inputSchema: {
      type: "object",
      properties: {
        technology: {
          type: "string",
          description: "Filter projects that use this technology (case-insensitive)",
        },
        tag: {
          type: "string",
          description: "Filter by tag, e.g. 'AI', 'mobile', 'fullstack', 'developer-tools'",
        },
      },
    },
    handler: async ({ technology, tag }) => {
      let results: Project[] = projects;

      if (typeof technology === "string") {
        const tech = technology.toLowerCase();
        results = results.filter((p) =>
          p.technologies.some((t) => t.toLowerCase().includes(tech))
        );
      }
      if (typeof tag === "string") {
        const t = tag.toLowerCase();
        results = results.filter((p) =>
          p.tags.some((tg) => tg.toLowerCase().includes(t))
        );
      }

      return text(results);
    },
  },

  {
    name: "get_project",
    description: "Returns full details for a single project by its ID.",
    inputSchema: {
      type: "object",
      properties: {
        id: {
          type: "string",
          description: "The project ID (e.g. 'tatalo', 'diagnosys', 'email-tracker')",
        },
      },
      required: ["id"],
    },
    handler: async ({ id }) => {
      const project = projects.find((p) => p.id === id);
      if (!project) {
        return {
          content: [
            {
              type: "text",
              text: `Project "${id}" not found. Available IDs: ${projects.map((p) => p.id).join(", ")}`,
            },
          ],
          isError: true,
        };
      }
      return text(project);
    },
  },

  {
    name: "list_experience",
    description:
      "Returns Ansh's work experience entries, including role, company, period, technologies used, " +
      "and resume-style achievement bullets.",
    inputSchema: {
      type: "object",
      properties: {
        technology: {
          type: "string",
          description: "Filter experience entries that used this technology (case-insensitive)",
        },
      },
    },
    handler: async ({ technology }) => {
      let results = experience;
      if (typeof technology === "string") {
        const tech = technology.toLowerCase();
        results = results.filter((e) =>
          e.technologies.some((t) => t.toLowerCase().includes(tech))
        );
      }
      return text(results);
    },
  },

  {
    name: "list_skills",
    description:
      "Returns Ansh's technical skills organized by category (Languages, Frontend, Backend, AI, etc.).",
    inputSchema: {
      type: "object",
      properties: {
        category: {
          type: "string",
          description: "Filter to a specific category, e.g. 'Languages', 'Frameworks', 'Tools' (case-insensitive)",
        },
      },
    },
    handler: async ({ category }) => {
      let results = skills;
      if (typeof category === "string") {
        const cat = category.toLowerCase();
        results = results.filter((s) => s.category.toLowerCase().includes(cat));
      }
      return text(results);
    },
  },

  {
    name: "search_by_technology",
    description:
      "Cross-references projects AND experience to find everywhere Ansh has used a given technology. " +
      "Useful for questions like 'What has Ansh built with Supabase?' or 'Where has he used the Claude API?'",
    inputSchema: {
      type: "object",
      properties: {
        technology: {
          type: "string",
          description: "The technology to search for (case-insensitive)",
        },
      },
      required: ["technology"],
    },
    handler: async ({ technology }) => {
      const tech = (technology as string).toLowerCase();

      const matchingProjects = projects.filter((p) =>
        p.technologies.some((t) => t.toLowerCase().includes(tech))
      );
      const matchingExperience = experience.filter((e) =>
        e.technologies.some((t) => t.toLowerCase().includes(tech))
      );

      return text({
        technology,
        projects: matchingProjects.map((p) => ({
          id: p.id,
          name: p.name,
          period: p.period,
          highlights: p.highlights,
        })),
        experience: matchingExperience.map((e) => ({
          company: e.company,
          role: e.role,
          period: e.period,
          highlights: e.highlights,
        })),
        summary: `Found ${matchingProjects.length} project(s) and ${matchingExperience.length} experience entry(ies) using "${technology}".`,
      });
    },
  },

  {
    name: "get_resume_snapshot",
    description:
      "Returns all of Ansh's data in a single structured payload — profile, skills, experience, and projects. " +
      "Use this when you need full context to answer open-ended questions or generate tailored resume bullets.",
    inputSchema: { type: "object", properties: {} },
    handler: async () => text({ profile, skills, experience, projects }),
  },
];
