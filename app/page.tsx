import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { skills } from "@/lib/data/skills";
import { experience } from "@/lib/data/experience";

const TOOLS = [
  { name: "get_profile", desc: "Name, title, summary, links" },
  { name: "list_projects", desc: "Filter by tech, tag, or status" },
  { name: "get_project", desc: "Full detail for one project by ID" },
  { name: "list_experience", desc: "Work history, optionally filtered by tech" },
  { name: "list_skills", desc: "Skills grouped by category" },
  { name: "search_by_technology", desc: "Cross-reference projects + experience" },
  { name: "get_resume_snapshot", desc: "Full data dump for open-ended questions" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 font-mono">
      {/* Header */}
      <header className="border-b border-zinc-800 px-6 py-5 flex items-center justify-between">
        <div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest">MCP Server</span>
          <h1 className="text-lg font-semibold text-white mt-0.5">{profile.name}</h1>
        </div>
        <span className="text-xs bg-emerald-900/60 text-emerald-400 border border-emerald-700 px-2.5 py-1 rounded-full">
          online
        </span>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12 space-y-12">

        {/* Intro */}
        <section>
          <p className="text-zinc-400 text-sm leading-relaxed">{profile.summary}</p>
          <p className="text-zinc-400 text-sm leading-relaxed mt-2">{profile.hobbies}</p>
          <div className="mt-4 flex gap-4 text-xs text-zinc-500">
            <a href={profile.links.github} className="hover:text-zinc-300 transition-colors">
              GitHub
            </a>
            <a href={profile.links.linkedin} className="hover:text-zinc-300 transition-colors">
              LinkedIn
            </a>
            <a href={profile.links.portfolio} className="hover:text-zinc-300 transition-colors">
              Portfolio
            </a>
            <a href={`mailto:${profile.email}`} className="hover:text-zinc-300 transition-colors">
              {profile.email}
            </a>
          </div>
        </section>

        {/* MCP Endpoint */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">MCP Endpoint</h2>
          <div className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 flex items-center justify-between">
            <code className="text-sm text-emerald-400">/api/mcp</code>
            <span className="text-xs text-zinc-600">JSON-RPC over HTTP · stateless</span>
          </div>
          <p className="mt-2 text-xs text-zinc-600">
            Add this server URL to any MCP-compatible client (e.g. Claude Desktop) to query Ansh&apos;s context.
          </p>
        </section>

        {/* Tools */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">
            Available Tools ({TOOLS.length})
          </h2>
          <div className="space-y-2">
            {TOOLS.map((tool) => (
              <div
                key={tool.name}
                className="flex items-start gap-3 bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3"
              >
                <code className="text-sm text-sky-400 shrink-0">{tool.name}</code>
                <span className="text-xs text-zinc-500 pt-0.5">{tool.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Stats */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Snapshot</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {[
              { label: "Projects", value: projects.length },
              { label: "Experiences", value: experience.length },
              { label: "Skills", value: skills.reduce((acc, cat) => acc + cat.items.length, 0) },
              { label: "MCP Tools", value: TOOLS.length },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-center"
              >
                <div className="text-2xl font-semibold text-white">{stat.value}</div>
                <div className="text-xs text-zinc-500 mt-0.5">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Example prompts */}
        <section>
          <h2 className="text-xs uppercase tracking-widest text-zinc-500 mb-3">Example Prompts</h2>
          <div className="space-y-2">
            {[
              "Write a cover letter for this job description based on Ansh's background.",
              "What projects show Ansh can ship mobile apps?",
              "Where has Ansh used AI APIs across his work?",
              "Does Ansh have any experience with Swift?",
              "Does this guy do anything besides code?",
            ].map((prompt) => (
              <div
                key={prompt}
                className="bg-zinc-900 border border-zinc-800 rounded-lg px-4 py-3 text-sm text-zinc-300"
              >
                &ldquo;{prompt}&rdquo;
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
