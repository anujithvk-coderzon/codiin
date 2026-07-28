import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "AutoGen: Microsoft's Multi-Agent AI Framework",
  description: "Learn AutoGen - Microsoft's framework for building multi-agent AI systems. Understand conversational agents, group chats, and autonomous collaboration.",
  keywords: ["AutoGen tutorial", "Microsoft AutoGen", "multi-agent AI", "conversational agents", "AI collaboration", "AutoGen Python"],
  alternates: { canonical: "/agentic-ai/articles/autogen" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/autogen",
    title: "AutoGen: Build Multi-Agent AI Systems with Microsoft's Framework",
    description: "Learn to build conversational multi-agent systems with AutoGen.",
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
  "headline": "AutoGen: Microsoft's Multi-Agent AI Framework",
  "description": "Complete guide to building multi-agent systems with AutoGen",
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

export default function AgenticAiAutogenPage() {
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
                {"AutoGen"}
              </span>
            </div>
            <h1>
              {"What is AutoGen?"}
            </h1>
            <p className="article-subtitle">
              {"Microsoft's Framework for Multi-Agent Conversations"}
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
                  {"What is AutoGen?"}
                </h2>
                <p>
                  {"AutoGen is an open-source framework from Microsoft Research for building multi-agent AI applications. It enables multiple AI agents to converse with each other, collaborate on tasks, and work together to solve complex problems."}
                </p>
                <p>
                  {"Think of it as creating a team of AI specialists - a coder, a reviewer, a planner - that can discuss, debate, and iterate on solutions, much like a human team would."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Does AutoGen Exist?"}
                </h2>
                <p>
                  {"Single-agent systems have limitations:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"One perspective:"}
                    </strong>
                    {" A single agent may miss errors or alternative approaches"}
                  </li>
                  <li>
                    <strong>
                      {"Context overload:"}
                    </strong>
                    {" Complex tasks overwhelm one agent's context window"}
                  </li>
                  <li>
                    <strong>
                      {"No specialization:"}
                    </strong>
                    {" One agent can't be expert in everything"}
                  </li>
                  <li>
                    <strong>
                      {"No verification:"}
                    </strong>
                    {" No one checks the agent's work"}
                  </li>
                </ul>
                <div className="highlight-box">
                  <h4>
                    {"The Multi-Agent Advantage"}
                  </h4>
                  <p>
                    {"AutoGen enables agents to specialize, review each other's work, and collaborate - mimicking how human teams solve complex problems."}
                  </p>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"1. Agents"}
                </h3>
                <p>
                  {"The building blocks of AutoGen. Each agent has a role, personality, and capabilities:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"ConversableAgent:"}
                    </strong>
                    {" Base class for all agents"}
                  </li>
                  <li>
                    <strong>
                      {"AssistantAgent:"}
                    </strong>
                    {" AI-powered agent using an LLM"}
                  </li>
                  <li>
                    <strong>
                      {"UserProxyAgent:"}
                    </strong>
                    {" Represents the human, can execute code"}
                  </li>
                </ul>
                <h3>
                  {"2. Conversations"}
                </h3>
                <p>
                  {"Agents communicate through conversations. AutoGen manages turn-taking, message history, and termination conditions."}
                </p>
                <h3>
                  {"3. Code Execution"}
                </h3>
                <p>
                  {"AutoGen can safely execute code generated by agents, enabling them to write and run programs, analyze data, and produce real results."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <h3>
                  {"Installation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`pip install pyautogen`}</code></pre>
                </div>
                <h3>
                  {"Basic Two-Agent Conversation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import autogen

# Configuration for the LLM
config_list = [{
    "model": "gpt-4",
    "api_key": "your-api-key"
}]

# Create an AI assistant
assistant = autogen.AssistantAgent(
    name="Assistant",
    llm_config={"config_list": config_list}
)

# Create a user proxy (represents the human)
user_proxy = autogen.UserProxyAgent(
    name="User",
    human_input_mode="NEVER",  # Don't ask for human input
    code_execution_config={"work_dir": "coding"}
)

# Start the conversation
user_proxy.initiate_chat(
    assistant,
    message="Write a Python function to calculate the factorial of a number."
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multi-Agent Collaboration"}
                </h2>
                <p>
                  {"The real power of AutoGen comes from multiple agents working together:"}
                </p>
                <h3>
                  {"Coder + Reviewer Pattern"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import autogen

config_list = [{"model": "gpt-4", "api_key": "your-key"}]

# Coder agent - writes code
coder = autogen.AssistantAgent(
    name="Coder",
    system_message="""You are a Python developer. Write clean, efficient code.
    When you receive feedback, improve your code accordingly.""",
    llm_config={"config_list": config_list}
)

# Reviewer agent - reviews code
reviewer = autogen.AssistantAgent(
    name="Reviewer",
    system_message="""You are a code reviewer. Review the code for:
    - Bugs and errors
    - Performance issues
    - Best practices
    Provide specific, constructive feedback.""",
    llm_config={"config_list": config_list}
)

# User proxy to coordinate
user_proxy = autogen.UserProxyAgent(
    name="Admin",
    human_input_mode="NEVER",
    code_execution_config={"work_dir": "output"}
)

# Create a group chat
groupchat = autogen.GroupChat(
    agents=[user_proxy, coder, reviewer],
    messages=[],
    max_round=10
)

manager = autogen.GroupChatManager(
    groupchat=groupchat,
    llm_config={"config_list": config_list}
)

# Start the task
user_proxy.initiate_chat(
    manager,
    message="Create a web scraper that extracts headlines from a news website."
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Code Development"}
                    </h4>
                    <p>
                      {"Coder writes, reviewer checks, tester validates. Iterative improvement."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Research & Analysis"}
                    </h4>
                    <p>
                      {"Researcher gathers info, analyst interprets, writer summarizes."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Creative Projects"}
                    </h4>
                    <p>
                      {"Writer drafts, editor refines, critic provides feedback."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Problem Solving"}
                    </h4>
                    <p>
                      {"Multiple agents brainstorm and debate solutions."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Data Analysis"}
                    </h4>
                    <p>
                      {"Analyst explores data, statistician validates, presenter creates reports."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Customer Support"}
                    </h4>
                    <p>
                      {"Triage agent routes, specialist resolves, QA agent reviews."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Human-in-the-Loop"}
                </h2>
                <p>
                  {"AutoGen supports human participation in agent conversations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`user_proxy = autogen.UserProxyAgent(
    name="Human",
    human_input_mode="ALWAYS",  # Always ask for human input
    # Or use "TERMINATE" to ask only at the end
    # Or "NEVER" for fully autonomous
)

# Human can:
# - Provide guidance
# - Approve/reject actions
# - Correct mistakes
# - Add context`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Code Execution Safety"}
                </h2>
                <p>
                  {"AutoGen can execute code, but safely:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Execute in Docker container (recommended for production)
user_proxy = autogen.UserProxyAgent(
    name="Executor",
    code_execution_config={
        "work_dir": "workspace",
        "use_docker": True,  # Sandboxed execution
    }
)

# Or local execution (development only)
user_proxy = autogen.UserProxyAgent(
    name="Executor",
    code_execution_config={
        "work_dir": "workspace",
        "use_docker": False,
        "last_n_messages": 3,  # Only recent code
    }
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"AutoGen vs Other Frameworks"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Feature"}
                        </th>
                        <th>
                          {"AutoGen"}
                        </th>
                        <th>
                          {"LangGraph"}
                        </th>
                        <th>
                          {"CrewAI"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"Paradigm"}
                        </td>
                        <td>
                          {"Conversation-based"}
                        </td>
                        <td>
                          {"Graph-based"}
                        </td>
                        <td>
                          {"Role-based"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Best for"}
                        </td>
                        <td>
                          {"Collaborative dialog"}
                        </td>
                        <td>
                          {"Complex workflows"}
                        </td>
                        <td>
                          {"Quick prototyping"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Code execution"}
                        </td>
                        <td>
                          {"Built-in"}
                        </td>
                        <td>
                          {"Via tools"}
                        </td>
                        <td>
                          {"Via tools"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Human-in-loop"}
                        </td>
                        <td>
                          {"First-class"}
                        </td>
                        <td>
                          {"First-class"}
                        </td>
                        <td>
                          {"Supported"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Learning curve"}
                        </td>
                        <td>
                          {"Moderate"}
                        </td>
                        <td>
                          {"Steeper"}
                        </td>
                        <td>
                          {"Gentle"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use AutoGen"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Collaborative tasks:"}
                    </strong>
                    {" When multiple perspectives improve outcomes"}
                  </li>
                  <li>
                    <strong>
                      {"Code generation:"}
                    </strong>
                    {" Write, review, test, iterate cycles"}
                  </li>
                  <li>
                    <strong>
                      {"Research:"}
                    </strong>
                    {" Gather, analyze, summarize workflows"}
                  </li>
                  <li>
                    <strong>
                      {"Complex problem solving:"}
                    </strong>
                    {" Multi-step reasoning with verification"}
                  </li>
                  <li>
                    <strong>
                      {"When you need code execution:"}
                    </strong>
                    {" AutoGen makes this safe and easy"}
                  </li>
                </ul>
                <h3>
                  {"When NOT to Use AutoGen"}
                </h3>
                <ul>
                  <li>
                    {"Simple single-agent tasks (overkill)"}
                  </li>
                  <li>
                    {"Need fine-grained control over agent flow (use LangGraph)"}
                  </li>
                  <li>
                    {"Strict deterministic pipelines"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Clear system messages:"}
                    </strong>
                    {" Define each agent's role precisely"}
                  </li>
                  <li>
                    <strong>
                      {"Set termination conditions:"}
                    </strong>
                    {" Prevent infinite loops"}
                  </li>
                  <li>
                    <strong>
                      {"Use Docker for code execution:"}
                    </strong>
                    {" Essential for production"}
                  </li>
                  <li>
                    <strong>
                      {"Limit rounds:"}
                    </strong>
                    {" Set max_round to prevent runaway conversations"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor costs:"}
                    </strong>
                    {" Multi-agent chats use more tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Start simple:"}
                    </strong>
                    {" Two agents before building larger teams"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master AutoGen with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Agentic AI program covers AutoGen and other multi-agent frameworks. Build real collaborative AI systems with personalized guidance."}
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
                  <Link href="/agentic-ai/articles/crewai" className="related-article-card">
                    <h4>
                      {"CrewAI: Role-Based AI Agents"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative multi-agent framework"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph for Complex Workflows"}
                    </h4>
                    {" "}
                    <p>
                      {"Graph-based agent orchestration"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"LangChain: LLM Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Foundation for AI applications"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about AutoGen and multi-agent AI."} />
    </>
  );
}
