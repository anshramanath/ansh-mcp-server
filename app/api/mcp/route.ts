import { tools } from "@/lib/tools";

const PROTOCOL_VERSION = "2024-11-05";
const SERVER_INFO = { name: "ansh-personal-context", version: "1.0.0" };

const CORS_HEADERS = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

// ── JSON-RPC helpers ──────────────────────────────────────────────────────────

function ok(id: unknown, result: unknown): Response {
  return Response.json({ jsonrpc: "2.0", id, result }, { headers: CORS_HEADERS });
}

function rpcError(id: unknown, code: number, message: string): Response {
  return Response.json({ jsonrpc: "2.0", id, error: { code, message } }, { headers: CORS_HEADERS });
}

// Browsers send a preflight OPTIONS request before POST to check CORS permissions
export async function OPTIONS(): Promise<Response> {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
}

// ── Route handler ─────────────────────────────────────────────────────────────

export async function POST(req: Request): Promise<Response> {
  let body: { id?: unknown; method?: string; params?: Record<string, unknown> };

  try {
    body = await req.json();
  } catch {
    return rpcError(null, -32700, "Parse error: request body is not valid JSON");
  }

  const { id, method, params } = body;

  // Notifications have no id — client doesn't expect a response
  if (id === undefined) {
    return new Response(null, { status: 202 });
  }

  switch (method) {
    // ── Handshake ─────────────────────────────────────────────────────────────
    case "initialize":
      return ok(id, {
        protocolVersion: PROTOCOL_VERSION,
        capabilities: { tools: {} },
        serverInfo: SERVER_INFO,
      });

    // ── Tool discovery ────────────────────────────────────────────────────────
    case "tools/list":
      return ok(id, {
        tools: tools.map(({ name, description, inputSchema }) => ({
          name,
          description,
          inputSchema,
        })),
      });

    // ── Tool execution ────────────────────────────────────────────────────────
    case "tools/call": {
      const toolName = params?.name as string | undefined;
      const args = (params?.arguments ?? {}) as Record<string, unknown>;

      const tool = tools.find((t) => t.name === toolName);
      if (!tool) {
        return rpcError(id, -32601, `Tool "${toolName}" not found`);
      }

      try {
        const result = await tool.handler(args);
        return ok(id, result);
      } catch (e) {
        return ok(id, {
          content: [{ type: "text", text: String(e) }],
          isError: true,
        });
      }
    }

    default:
      return rpcError(id, -32601, `Method "${method}" not supported`);
  }
}

// GET is used for SSE streams in stateful MCP setups — not needed here
export async function GET(): Promise<Response> {
  return new Response("SSE not implemented", { status: 405 });
}
