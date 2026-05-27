# ⚡ Ansh's MCP Server

A personal [Model Context Protocol](https://modelcontextprotocol.io) server that exposes my resume data as queryable tools for any MCP-compatible AI client (like Claude Desktop).

Point an LLM at this server and it can answer questions like:
- *"Write a cold email to a fintech hiring manager based on Ansh's background."*
- *"Where has Ansh used AI APIs across his projects?"*
- *"Would you hire Ansh for a senior ML role? Be honest."*

---

## 🛠️ Tools

| Tool | Description |
|------|-------------|
| `get_profile` | Name, title, summary, hobbies, location, and social links |
| `list_projects` | All projects, filterable by technology or tag |
| `get_project` | Full detail for a single project by ID |
| `list_experience` | Work history, optionally filtered by technology |
| `list_skills` | Skills grouped by category |
| `search_by_technology` | Cross-reference projects + experience by tech |
| `get_resume_snapshot` | Full data dump for open-ended questions |

---

## 🔌 Connecting to the Server

The MCP endpoint is live at:

```
https://ansh-mcp-server.vercel.app/api/mcp
```

Stateless JSON-RPC 2.0 over HTTP — no SSE or persistent connections needed.

### Claude Desktop

1. Open the config file:
   - **macOS:** `~/Library/Application Support/Claude/claude_desktop_config.json`
   - **Windows:** `%APPDATA%\Claude\claude_desktop_config.json`
2. Add the following (merge with any existing `mcpServers` entries):

```json
{
  "mcpServers": {
    "ansh": {
      "url": "https://ansh-mcp-server.vercel.app/api/mcp"
    }
  }
}
```

3. Restart Claude Desktop.
4. You should see **ansh** appear in the MCP servers list.

### Claude Code (CLI)

```bash
claude mcp add --transport http ansh https://ansh-mcp-server.vercel.app/api/mcp
```

### Other MCP Clients

Any client that supports MCP over HTTP can connect — just point it at `https://ansh-mcp-server.vercel.app/api/mcp`.

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
