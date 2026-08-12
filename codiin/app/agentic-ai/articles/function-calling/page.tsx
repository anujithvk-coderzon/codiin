import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Function Calling with LLMs: Complete Guide to Tool Use",
  description: "Learn Function Calling with LLMs - how to give AI models the ability to use tools, call APIs, and take real-world actions. Complete guide with examples.",
  keywords: ["function calling", "LLM tools", "OpenAI function calling", "AI tools", "LLM actions", "tool use AI"],
  alternates: { canonical: "/agentic-ai/articles/function-calling" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/function-calling",
    title: "Function Calling: Give LLMs the Power to Take Actions",
    description: "Learn how to enable LLMs to use tools, call APIs, and interact with external systems.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Function Calling with LLMs: Complete Guide to Tool Use",
  "description": "Comprehensive guide to enabling LLMs to use tools and take actions",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-22",
  "dateModified": "2024-12-22"
} as const;

export default function AgenticAiFunctionCallingPage() {
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
                {"Function Calling"}
              </span>
            </div>
            <h1>
              {"Function Calling with LLMs"}
            </h1>
            <p className="article-subtitle">
              {"Give AI the Power to Take Real Actions"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"12 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Function Calling?"}
                </h2>
                <p>
                  {"Function calling (also called tool use) is the ability for LLMs to invoke external functions or APIs based on user requests. Instead of just generating text, the LLM can decide to call a function, receive the result, and use that information in its response."}
                </p>
                <p>
                  {"For example, when you ask \"What's the weather in Tokyo?\", the LLM can:"}
                </p>
                <ol>
                  <li>
                    {"Recognize this requires real-time data"}
                  </li>
                  <li>
                    {"Call a weather API function"}
                  </li>
                  <li>
                    {"Use the result to give you an accurate answer"}
                  </li>
                </ol>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Does Function Calling Exist?"}
                </h2>
                <p>
                  {"LLMs have significant limitations:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"No real-time data:"}
                    </strong>
                    {" They can't access current information (weather, stock prices, news)"}
                  </li>
                  <li>
                    <strong>
                      {"No actions:"}
                    </strong>
                    {" They can't send emails, book appointments, or modify databases"}
                  </li>
                  <li>
                    <strong>
                      {"No external systems:"}
                    </strong>
                    {" They can't access your company's data or internal tools"}
                  </li>
                  <li>
                    <strong>
                      {"Knowledge cutoff:"}
                    </strong>
                    {" Their training data has a cutoff date"}
                  </li>
                </ul>
                <div className="highlight-box">
                  <h4>
                    {"Function Calling Bridges the Gap"}
                  </h4>
                  <p>
                    {"It transforms LLMs from text generators into intelligent agents that can interact with the real world through APIs and functions you define."}
                  </p>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"How Function Calling Works"}
                </h2>
                <p>
                  {"The process follows a specific flow:"}
                </p>
                <ol>
                  <li>
                    <strong>
                      {"Define tools:"}
                    </strong>
                    {" You describe available functions (name, description, parameters)"}
                  </li>
                  <li>
                    <strong>
                      {"User makes request:"}
                    </strong>
                    {" \"What's the weather in Tokyo?\""}
                  </li>
                  <li>
                    <strong>
                      {"LLM decides:"}
                    </strong>
                    {" The model determines if a function should be called"}
                  </li>
                  <li>
                    <strong>
                      {"Returns function call:"}
                    </strong>
                    {" Model outputs the function name and arguments (not actual text)"}
                  </li>
                  <li>
                    <strong>
                      {"You execute:"}
                    </strong>
                    {" Your code runs the actual function"}
                  </li>
                  <li>
                    <strong>
                      {"Return result:"}
                    </strong>
                    {" Send the function output back to the LLM"}
                  </li>
                  <li>
                    <strong>
                      {"Final response:"}
                    </strong>
                    {" LLM generates a response using the function result"}
                  </li>
                </ol>
                <div className="code-block">
                  <pre><code>{`# The flow visualized:

User: "What's the weather in Tokyo?"
        ↓
LLM: "I should call get_weather(location='Tokyo')"
        ↓
Your code: calls actual weather API → returns {"temp": 22, "condition": "sunny"}
        ↓
LLM: "The weather in Tokyo is currently 22°C and sunny."`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Function Calling with OpenAI"}
                </h2>
                <p>
                  {"Here's a complete example:"}
                </p>
                <h3>
                  {"Step 1: Define Your Functions"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import json
from openai import OpenAI

client = OpenAI()

# Define the tools (functions) the model can use
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get the current weather in a location",
            "parameters": {
                "type": "object",
                "properties": {
                    "location": {
                        "type": "string",
                        "description": "City name, e.g., 'Tokyo' or 'New York'"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "Temperature unit"
                    }
                },
                "required": ["location"]
            }
        }
    }
]`}</code></pre>
                </div>
                <h3>
                  {"Step 2: Implement the Actual Function"}
                </h3>
                <div className="code-block">
                  <pre><code>{`def get_weather(location: str, unit: str = "celsius") -> dict:
    """This would call a real weather API in production"""
    # Simulated response
    return {
        "location": location,
        "temperature": 22,
        "unit": unit,
        "condition": "sunny"
    }`}</code></pre>
                </div>
                <h3>
                  {"Step 3: Make the API Call"}
                </h3>
                <div className="code-block">
                  <pre><code>{`messages = [
    {"role": "user", "content": "What's the weather like in Tokyo?"}
]

response = client.chat.completions.create(
    model="gpt-4",
    messages=messages,
    tools=tools,
    tool_choice="auto"  # Let model decide when to use tools
)

# Check if model wants to call a function
message = response.choices[0].message

if message.tool_calls:
    # Model wants to call a function
    tool_call = message.tool_calls[0]
    function_name = tool_call.function.name
    arguments = json.loads(tool_call.function.arguments)

    print(f"Calling: {function_name}({arguments})")

    # Execute the function
    if function_name == "get_weather":
        result = get_weather(**arguments)

    # Send result back to model
    messages.append(message)
    messages.append({
        "role": "tool",
        "tool_call_id": tool_call.id,
        "content": json.dumps(result)
    })

    # Get final response
    final_response = client.chat.completions.create(
        model="gpt-4",
        messages=messages
    )

    print(final_response.choices[0].message.content)
    # "The weather in Tokyo is currently 22°C and sunny."`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Function Calling with Anthropic (Claude)"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from anthropic import Anthropic

client = Anthropic()

tools = [
    {
        "name": "get_weather",
        "description": "Get the current weather in a location",
        "input_schema": {
            "type": "object",
            "properties": {
                "location": {
                    "type": "string",
                    "description": "City name"
                }
            },
            "required": ["location"]
        }
    }
]

response = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=1024,
    tools=tools,
    messages=[{"role": "user", "content": "What's the weather in Tokyo?"}]
)

# Handle tool use similar to OpenAI
if response.stop_reason == "tool_use":
    tool_use = next(block for block in response.content if block.type == "tool_use")
    # Execute function and continue conversation...`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using LangChain for Function Calling"}
                </h2>
                <p>
                  {"LangChain simplifies tool creation and usage:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.tools import tool
from langchain.agents import create_openai_tools_agent, AgentExecutor
from langchain.prompts import ChatPromptTemplate

# Define tools using decorator
@tool
def get_weather(location: str) -> str:
    """Get the current weather for a location."""
    return f"The weather in {location} is 22°C and sunny."

@tool
def search_web(query: str) -> str:
    """Search the web for information."""
    return f"Search results for: {query}"

@tool
def send_email(to: str, subject: str, body: str) -> str:
    """Send an email to a recipient."""
    return f"Email sent to {to} with subject: {subject}"

# Create agent
llm = ChatOpenAI(model="gpt-4")
tools = [get_weather, search_web, send_email]

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant with access to tools."),
    ("human", "{input}"),
    ("placeholder", "{agent_scratchpad}")
])

agent = create_openai_tools_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Use the agent
result = executor.invoke({
    "input": "What's the weather in Tokyo and send an email about it to john@example.com"
})
print(result["output"])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"API Integration"}
                    </h4>
                    <p>
                      {"Weather, stocks, news, or any external API your application needs."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Database Queries"}
                    </h4>
                    <p>
                      {"Let users query databases using natural language."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Code Execution"}
                    </h4>
                    <p>
                      {"Run calculations, data analysis, or code snippets."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"CRM Operations"}
                    </h4>
                    <p>
                      {"Look up customers, create tickets, update records."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Calendar & Email"}
                    </h4>
                    <p>
                      {"Schedule meetings, send emails, manage tasks."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Search & Retrieval"}
                    </h4>
                    <p>
                      {"Search documents, knowledge bases, or the web."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Parallel Function Calling"}
                </h2>
                <p>
                  {"Modern LLMs can request multiple function calls at once:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# User: "What's the weather in Tokyo and New York?"

# Model returns TWO tool calls:
tool_calls = [
    {"name": "get_weather", "arguments": {"location": "Tokyo"}},
    {"name": "get_weather", "arguments": {"location": "New York"}}
]

# Execute both in parallel for efficiency
import asyncio

async def execute_parallel(tool_calls):
    tasks = [execute_tool(tc) for tc in tool_calls]
    return await asyncio.gather(*tasks)`}</code></pre>
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
                    {" Write detailed function descriptions - the LLM uses these to decide when to call"}
                  </li>
                  <li>
                    <strong>
                      {"Validate inputs:"}
                    </strong>
                    {" Never trust LLM-generated parameters blindly; validate before executing"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors:"}
                    </strong>
                    {" Functions can fail; return clear error messages the LLM can interpret"}
                  </li>
                  <li>
                    <strong>
                      {"Limit scope:"}
                    </strong>
                    {" Only expose functions that are safe and necessary"}
                  </li>
                  <li>
                    <strong>
                      {"Use enums:"}
                    </strong>
                    {" Constrain parameters to valid values when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Timeout protection:"}
                    </strong>
                    {" Set timeouts on function execution"}
                  </li>
                  <li>
                    <strong>
                      {"Logging:"}
                    </strong>
                    {" Log all function calls for debugging and monitoring"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Security Considerations"}
                </h2>
                <div className="highlight-box">
                  <h4>
                    {"Important: Function Calling = Code Execution"}
                  </h4>
                  <p>
                    {"When you enable function calling, you're letting the LLM trigger code execution. Treat this with appropriate caution."}
                  </p>
                </div>
                <ul>
                  <li>
                    <strong>
                      {"Sanitize inputs:"}
                    </strong>
                    {" Prevent injection attacks in function arguments"}
                  </li>
                  <li>
                    <strong>
                      {"Principle of least privilege:"}
                    </strong>
                    {" Functions should have minimal permissions"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limiting:"}
                    </strong>
                    {" Prevent abuse through excessive function calls"}
                  </li>
                  <li>
                    <strong>
                      {"Confirmation for sensitive actions:"}
                    </strong>
                    {" Require user confirmation for destructive operations"}
                  </li>
                  <li>
                    <strong>
                      {"Audit trail:"}
                    </strong>
                    {" Log who triggered what functions and when"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Function Calling vs. Agents"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Aspect"}
                        </th>
                        <th>
                          {"Function Calling"}
                        </th>
                        <th>
                          {"Agents"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"Complexity"}
                        </td>
                        <td>
                          {"Single function calls"}
                        </td>
                        <td>
                          {"Multi-step reasoning and planning"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Control"}
                        </td>
                        <td>
                          {"You control the loop"}
                        </td>
                        <td>
                          {"Agent controls the loop"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Use case"}
                        </td>
                        <td>
                          {"Simple tool use"}
                        </td>
                        <td>
                          {"Complex, autonomous tasks"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Predictability"}
                        </td>
                        <td>
                          {"More predictable"}
                        </td>
                        <td>
                          {"Less predictable, more flexible"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  {"Start with function calling for simpler use cases; graduate to agents when you need autonomous multi-step reasoning."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Function Calling with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers function calling, tool creation, and building sophisticated AI agents. Learn with hands-on projects and personalized mentorship."}
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
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"LangChain: Building LLM Apps"}
                    </h4>
                    {" "}
                    <p>
                      {"Framework with powerful tool integration"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph for Complex Workflows"}
                    </h4>
                    {" "}
                    <p>
                      {"Build multi-step agent systems"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/llm-foundations" className="related-article-card">
                    <h4>
                      {"LLM Foundations"}
                    </h4>
                    {" "}
                    <p>
                      {"Understand how LLMs work"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about function calling and AI tools."} />
    </>
  );
}
