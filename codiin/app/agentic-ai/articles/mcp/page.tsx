import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Model Context Protocol (MCP): Universal AI Tool Integration",
  description: "Learn about Model Context Protocol (MCP) - Anthropic's open standard for connecting AI agents to tools, data sources, and external systems.",
  keywords: ["Model Context Protocol", "MCP", "Anthropic", "AI tools", "agent tools", "Claude tools", "LLM integration", "tool use"],
  alternates: { canonical: "/agentic-ai/articles/mcp" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/mcp",
    title: "Model Context Protocol (MCP): The Universal Standard for AI Tool Integration",
    description: "Master MCP - Anthropic's open protocol for connecting AI agents to external tools and data sources.",
    images: ["/images/mcp-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Model Context Protocol (MCP) Guide | CODiiN",
    description: "Master MCP for AI tool integration.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Model Context Protocol (MCP): Universal AI Tool Integration",
  "description": "Comprehensive guide to understanding and implementing MCP for AI agents",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.codiin.com/img/codiin-logo.png"
    }
  },
  "datePublished": "2024-12-25",
  "dateModified": "2024-12-25"
} as const;

export default function AgenticAiMcpPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="article-hero">
          <div className="container">
            <div className="article-breadcrumb">
              <Link href="/">
                {"Home"}
              </Link>
              {" / "}
              <Link href="/agentic-ai">
                {"Agentic AI"}
              </Link>
              {" / "}
              <span>
                {"MCP"}
              </span>
            </div>
            <h1>
              {"Model Context Protocol (MCP)"}
            </h1>
            <p className="article-subtitle">
              {"The Universal Standard for Connecting AI Agents to Tools and Data"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is MCP?"}
                </h2>
                <p>
                  {"Model Context Protocol (MCP) is an open standard developed by Anthropic that enables AI agents to connect with external tools, data sources, and services in a standardized way. Think of it as a \"USB for AI\" - a universal interface that lets any AI model work with any compatible tool."}
                </p>
                <p>
                  {"Before MCP, every AI application needed custom integrations for each tool. MCP changes this by providing:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Standardized interface:"}
                    </strong>
                    {" One protocol for all tool integrations"}
                  </li>
                  <li>
                    <strong>
                      {"Discoverability:"}
                    </strong>
                    {" AI can discover available tools and their capabilities"}
                  </li>
                  <li>
                    <strong>
                      {"Security:"}
                    </strong>
                    {" Built-in permission and authentication handling"}
                  </li>
                  <li>
                    <strong>
                      {"Interoperability:"}
                    </strong>
                    {" Tools work across different AI models and platforms"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Why MCP Matters"}
                </h2>
                <p>
                  {"The AI ecosystem faced a fragmentation problem:"}
                </p>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Before MCP"}
                    </h4>
                    <p>
                      {"Each AI app needed custom code for every tool. 10 apps + 10 tools = 100 integrations."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"With MCP"}
                    </h4>
                    <p>
                      {"Tools implement MCP once, work everywhere. 10 apps + 10 tools = 20 implementations."}
                    </p>
                  </div>
                </div>
                <p>
                  {"MCP is becoming the industry standard because:"}
                </p>
                <ul>
                  <li>
                    {"Anthropic's Claude natively supports MCP"}
                  </li>
                  <li>
                    {"Major platforms (VS Code, JetBrains, etc.) are adopting it"}
                  </li>
                  <li>
                    {"It's open-source and vendor-neutral"}
                  </li>
                  <li>
                    {"Growing ecosystem of pre-built MCP servers"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"MCP Architecture"}
                </h2>
                <p>
                  {"MCP uses a client-server architecture with three main components:"}
                </p>
                <h3>
                  {"1. MCP Hosts"}
                </h3>
                <p>
                  {"Applications that want to use AI capabilities (Claude Desktop, IDEs, custom apps)."}
                </p>
                <h3>
                  {"2. MCP Clients"}
                </h3>
                <p>
                  {"Protocol handlers within host applications that manage server connections."}
                </p>
                <h3>
                  {"3. MCP Servers"}
                </h3>
                <p>
                  {"Services that expose tools, resources, and prompts via the MCP protocol."}
                </p>
                <div className="code-block">
                  <pre><code>{`# MCP Communication Flow

┌─────────────┐     MCP Protocol     ┌─────────────┐
│             │ ◄──────────────────► │             │
│  MCP Host   │     (JSON-RPC)       │ MCP Server  │
│  (Claude)   │                      │  (Tools)    │
│             │                      │             │
└─────────────┘                      └─────────────┘
       │                                    │
       │                                    │
       ▼                                    ▼
  User Interface                    External Services
  (Chat, IDE, etc.)                 (APIs, Databases, etc.)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core MCP Concepts"}
                </h2>
                <h3>
                  {"Tools"}
                </h3>
                <p>
                  {"Functions that the AI can invoke to perform actions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Example MCP Tool Definition
{
    "name": "search_database",
    "description": "Search the customer database",
    "inputSchema": {
        "type": "object",
        "properties": {
            "query": {
                "type": "string",
                "description": "Search query"
            },
            "limit": {
                "type": "integer",
                "default": 10
            }
        },
        "required": ["query"]
    }
}`}</code></pre>
                </div>
                <h3>
                  {"Resources"}
                </h3>
                <p>
                  {"Data sources that provide context to the AI (files, database records, API responses):"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Example MCP Resource
{
    "uri": "file:///project/README.md",
    "name": "Project README",
    "mimeType": "text/markdown",
    "description": "Project documentation"
}`}</code></pre>
                </div>
                <h3>
                  {"Prompts"}
                </h3>
                <p>
                  {"Pre-defined prompt templates that can be reused:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Example MCP Prompt
{
    "name": "code_review",
    "description": "Review code for issues",
    "arguments": [
        {
            "name": "code",
            "description": "Code to review",
            "required": true
        }
    ]
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building an MCP Server"}
                </h2>
                <p>
                  {"Here's how to create a simple MCP server in Python:"}
                </p>
                <h3>
                  {"Installation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`pip install mcp`}</code></pre>
                </div>
                <h3>
                  {"Basic MCP Server"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from mcp.server import Server
from mcp.server.stdio import stdio_server
from mcp.types import Tool, TextContent
import asyncio

# Create server instance
server = Server("my-tools")

# Define available tools
@server.list_tools()
async def list_tools():
    return [
        Tool(
            name="get_weather",
            description="Get current weather for a city",
            inputSchema={
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "City name"
                    }
                },
                "required": ["city"]
            }
        ),
        Tool(
            name="calculate",
            description="Perform mathematical calculations",
            inputSchema={
                "type": "object",
                "properties": {
                    "expression": {
                        "type": "string",
                        "description": "Math expression to evaluate"
                    }
                },
                "required": ["expression"]
            }
        )
    ]

# Handle tool execution
@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "get_weather":
        city = arguments["city"]
        # In reality, call a weather API
        return [TextContent(
            type="text",
            text=f"Weather in {city}: 22°C, Sunny"
        )]

    elif name == "calculate":
        expression = arguments["expression"]
        try:
            result = eval(expression)  # Use safe eval in production!
            return [TextContent(
                type="text",
                text=f"Result: {result}"
            )]
        except Exception as e:
            return [TextContent(
                type="text",
                text=f"Error: {str(e)}"
            )]

# Run the server
async def main():
    async with stdio_server() as (read_stream, write_stream):
        await server.run(read_stream, write_stream)

if __name__ == "__main__":
    asyncio.run(main())`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"MCP Server with Resources"}
                </h2>
                <p>
                  {"Expose data as resources that AI can access:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from mcp.server import Server
from mcp.types import Resource, TextContent
import os

server = Server("file-server")

@server.list_resources()
async def list_resources():
    # List files in a directory
    files = os.listdir("./documents")
    return [
        Resource(
            uri=f"file:///documents/{f}",
            name=f,
            mimeType="text/plain"
        )
        for f in files if f.endswith('.txt')
    ]

@server.read_resource()
async def read_resource(uri: str):
    # Extract filename from URI
    path = uri.replace("file:///", "")
    with open(path, 'r') as f:
        content = f.read()
    return TextContent(type="text", text=content)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Configuring MCP in Claude Desktop"}
                </h2>
                <p>
                  {"To use MCP servers with Claude Desktop, configure them in the settings:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# claude_desktop_config.json (macOS: ~/Library/Application Support/Claude/)
# (Windows: %APPDATA%\\Claude\\)

{
    "mcpServers": {
        "my-tools": {
            "command": "python",
            "args": ["/path/to/my_mcp_server.py"],
            "env": {
                "API_KEY": "your-api-key"
            }
        },
        "filesystem": {
            "command": "npx",
            "args": [
                "-y",
                "@modelcontextprotocol/server-filesystem",
                "/path/to/allowed/directory"
            ]
        },
        "github": {
            "command": "npx",
            "args": ["-y", "@modelcontextprotocol/server-github"],
            "env": {
                "GITHUB_TOKEN": "your-github-token"
            }
        }
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Popular MCP Servers"}
                </h2>
                <p>
                  {"The MCP ecosystem includes many pre-built servers:"}
                </p>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Filesystem"}
                    </h4>
                    <p>
                      {"Read, write, and manage files on your computer."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"GitHub"}
                    </h4>
                    <p>
                      {"Interact with repositories, issues, and pull requests."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"PostgreSQL"}
                    </h4>
                    <p>
                      {"Query and manage PostgreSQL databases."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Slack"}
                    </h4>
                    <p>
                      {"Send messages and interact with Slack workspaces."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Google Drive"}
                    </h4>
                    <p>
                      {"Access and manage files in Google Drive."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Brave Search"}
                    </h4>
                    <p>
                      {"Perform web searches using Brave Search API."}
                    </p>
                  </div>
                </div>
                <h3>
                  {"Installing Pre-built Servers"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Install via npm
npx -y @modelcontextprotocol/server-filesystem /path/to/directory
npx -y @modelcontextprotocol/server-github
npx -y @modelcontextprotocol/server-postgres postgresql://localhost/mydb

# Or via uvx (Python)
uvx mcp-server-sqlite --db-path /path/to/database.db`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"MCP with LangChain"}
                </h2>
                <p>
                  {"Integrate MCP tools into LangChain applications:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_mcp import MCPToolkit
from langchain_anthropic import ChatAnthropic
from langchain.agents import create_tool_calling_agent, AgentExecutor

# Connect to MCP server
toolkit = MCPToolkit(
    server_command="python",
    server_args=["my_mcp_server.py"]
)

# Get tools from MCP server
tools = toolkit.get_tools()

# Create agent with MCP tools
llm = ChatAnthropic(model="claude-3-sonnet-20240229")
agent = create_tool_calling_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools)

# Run agent
result = executor.invoke({
    "input": "What's the weather in Tokyo?"
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Security Considerations"}
                </h2>
                <p>
                  {"MCP includes security features, but you should also:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Validate inputs:"}
                    </strong>
                    {" Always sanitize and validate tool inputs"}
                  </li>
                  <li>
                    <strong>
                      {"Limit permissions:"}
                    </strong>
                    {" Only expose necessary capabilities"}
                  </li>
                  <li>
                    <strong>
                      {"Use authentication:"}
                    </strong>
                    {" Protect sensitive operations with auth tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Audit logging:"}
                    </strong>
                    {" Log all tool invocations for security review"}
                  </li>
                  <li>
                    <strong>
                      {"Sandboxing:"}
                    </strong>
                    {" Run MCP servers in isolated environments when possible"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Example: Input validation in MCP tool
@server.call_tool()
async def call_tool(name: str, arguments: dict):
    if name == "execute_query":
        query = arguments.get("query", "")

        # Validate: prevent SQL injection
        if any(dangerous in query.lower()
               for dangerous in ["drop", "delete", "truncate", "update"]):
            return [TextContent(
                type="text",
                text="Error: Dangerous operation not allowed"
            )]

        # Validate: limit query length
        if len(query) > 1000:
            return [TextContent(
                type="text",
                text="Error: Query too long"
            )]

        # Execute safely...
        result = await safe_execute_query(query)
        return [TextContent(type="text", text=result)]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Clear descriptions:"}
                    </strong>
                    {" Write detailed tool descriptions so the AI knows when to use them"}
                  </li>
                  <li>
                    <strong>
                      {"Proper schemas:"}
                    </strong>
                    {" Define complete input schemas with types and descriptions"}
                  </li>
                  <li>
                    <strong>
                      {"Error handling:"}
                    </strong>
                    {" Return helpful error messages that the AI can understand"}
                  </li>
                  <li>
                    <strong>
                      {"Idempotency:"}
                    </strong>
                    {" Design tools to be safe for repeated invocation"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limiting:"}
                    </strong>
                    {" Protect external APIs from excessive calls"}
                  </li>
                  <li>
                    <strong>
                      {"Timeout handling:"}
                    </strong>
                    {" Set appropriate timeouts for long-running operations"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master MCP with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Agentic AI program covers MCP and tool integration in-depth. Learn to build production-ready AI agents that seamlessly connect to external systems."}
                </p>
                <Link href="/agentic-ai" className="btn btn-primary">
                  {"Explore Agentic AI Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/agentic-ai/articles/function-calling" className="related-article-card">
                    <h4>
                      {"Function Calling: Connecting LLMs to Tools"}
                    </h4>
                    {" "}
                    <p>
                      {"Understanding how AI agents use tools"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"LangChain: Building LLM Applications"}
                    </h4>
                    {" "}
                    <p>
                      {"The framework for building AI agents"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/agent-safety" className="related-article-card">
                    <h4>
                      {"Agent Safety & Guardrails"}
                    </h4>
                    {" "}
                    <p>
                      {"Securing your AI agent implementations"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about MCP and Agentic AI."} />
    </>
  );
}
