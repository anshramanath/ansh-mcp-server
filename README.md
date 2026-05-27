# 🤖 Personal MCP Server

A personal [Model Context Protocol](https://modelcontextprotocol.io) server that exposes my resume data as queryable tools for any MCP-compatible AI client (like Claude Desktop).

Point an LLM at this server and it can answer questions like:
- *"Write a cover letter for this job based on Ansh's background."*
- *"What projects show Ansh can ship mobile apps?"*
- *"Where has Ansh used AI APIs across his work?"*

---

## 🛠️ Tools

| Tool | Description |
|------|-------------|
| `get_profile` | Name, title, summary, location, and social links |
| `list_projects` | All projects, filterable by technology or tag |
| `get_project` | Full detail for a single project by ID |
| `list_experience` | Work history, optionally filtered by technology |
| `list_skills` | Skills grouped by category |
| `search_by_technology` | Cross-reference projects + experience by tech |
| `get_resume_snapshot` | Full data dump for open-ended questions |

---

## 🔌 MCP Endpoint

```
POST /api/mcp
```

Stateless JSON-RPC 2.0 over HTTP — no SSE or persistent connections needed.

To connect via **Claude Desktop**, add this to your `claude_desktop_config.json`:

```json
{
  "mcpServers": {
    "ansh": {
      "url": "https://your-deployed-url.vercel.app/api/mcp"
    }
  }
}
```

---

## 🚀 Running Locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the server status page.

---

## 🗂️ Project Structure

```
app/
  page.tsx            Landing page with server info and tool list
  api/mcp/route.ts    MCP JSON-RPC endpoint

lib/
  tools.ts            Tool definitions and handlers
  data/
    profile.ts        Bio, links, contact
    projects.ts       Project entries
    experience.ts     Work experience
    skills.ts         Technical skills by category
```

---

## 📦 Stack

- **[Next.js 16](https://nextjs.org)** — framework and API routes
- **[TypeScript](https://www.typescriptlang.org)** — end-to-end type safety
- **[Tailwind CSS v4](https://tailwindcss.com)** — landing page styling
- **[MCP SDK](https://github.com/modelcontextprotocol/typescript-sdk)** — protocol types
