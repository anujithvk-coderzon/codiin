import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "CrewAI: Orchestrate Role-Playing AI Agents",
  description: "Learn CrewAI - the framework for orchestrating role-playing AI agents. Build teams of specialized AI agents that collaborate on complex tasks.",
  keywords: ["CrewAI tutorial", "AI agents", "role-playing agents", "multi-agent framework", "CrewAI Python", "autonomous agents"],
  alternates: { canonical: "/agentic-ai/articles/crewai" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/crewai",
    title: "CrewAI: Build Teams of AI Agents",
    description: "Learn to orchestrate role-playing AI agents with CrewAI.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "CrewAI: Orchestrate Role-Playing AI Agents",
  "description": "Complete guide to building AI agent teams with CrewAI",
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

export default function AgenticAiCrewaiPage() {
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
                {"CrewAI"}
              </span>
            </div>
            <h1>
              {"What is CrewAI?"}
            </h1>
            <p className="article-subtitle">
              {"Build Teams of Role-Playing AI Agents"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"11 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is CrewAI?"}
                </h2>
                <p>
                  {"CrewAI is a framework for orchestrating role-playing, autonomous AI agents. It allows you to create a \"crew\" of AI agents, each with a specific role, goal, and backstory, that work together to accomplish complex tasks."}
                </p>
                <p>
                  {"Think of it as assembling a virtual team: a researcher who gathers information, a writer who creates content, and an editor who polishes the final output. Each agent brings expertise to their role, and together they produce results beyond what any single agent could achieve."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use CrewAI?"}
                </h2>
                <p>
                  {"CrewAI stands out for its simplicity and role-based approach:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Intuitive design:"}
                    </strong>
                    {" Define agents by their roles, like hiring team members"}
                  </li>
                  <li>
                    <strong>
                      {"Autonomous collaboration:"}
                    </strong>
                    {" Agents figure out how to work together"}
                  </li>
                  <li>
                    <strong>
                      {"Quick to prototype:"}
                    </strong>
                    {" Get multi-agent systems running in minutes"}
                  </li>
                  <li>
                    <strong>
                      {"Flexible workflows:"}
                    </strong>
                    {" Sequential or hierarchical task execution"}
                  </li>
                  <li>
                    <strong>
                      {"Built-in memory:"}
                    </strong>
                    {" Agents remember context across tasks"}
                  </li>
                </ul>
                <div className="highlight-box">
                  <h4>
                    {"The CrewAI Philosophy"}
                  </h4>
                  <p>
                    {"Focus on the \"what\" (roles and tasks), not the \"how\" (agent coordination). CrewAI handles the collaboration logistics."}
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
                  {"An agent is an AI team member with:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Role:"}
                    </strong>
                    {" Their job title (e.g., \"Senior Researcher\")"}
                  </li>
                  <li>
                    <strong>
                      {"Goal:"}
                    </strong>
                    {" What they're trying to achieve"}
                  </li>
                  <li>
                    <strong>
                      {"Backstory:"}
                    </strong>
                    {" Context that shapes their behavior"}
                  </li>
                  <li>
                    <strong>
                      {"Tools:"}
                    </strong>
                    {" Capabilities they can use (search, code, etc.)"}
                  </li>
                </ul>
                <h3>
                  {"2. Tasks"}
                </h3>
                <p>
                  {"A task is a specific job to be done:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Description:"}
                    </strong>
                    {" What needs to be accomplished"}
                  </li>
                  <li>
                    <strong>
                      {"Agent:"}
                    </strong>
                    {" Who is responsible"}
                  </li>
                  <li>
                    <strong>
                      {"Expected output:"}
                    </strong>
                    {" What success looks like"}
                  </li>
                </ul>
                <h3>
                  {"3. Crew"}
                </h3>
                <p>
                  {"The crew brings agents and tasks together:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Agents:"}
                    </strong>
                    {" The team members"}
                  </li>
                  <li>
                    <strong>
                      {"Tasks:"}
                    </strong>
                    {" The work to be done"}
                  </li>
                  <li>
                    <strong>
                      {"Process:"}
                    </strong>
                    {" How tasks are executed (sequential or hierarchical)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <h3>
                  {"Installation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`pip install crewai crewai-tools`}</code></pre>
                </div>
                <h3>
                  {"Your First Crew"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from crewai import Agent, Task, Crew, Process

# Create agents
researcher = Agent(
    role="Senior Research Analyst",
    goal="Find and analyze the latest AI trends",
    backstory="""You are an expert researcher with years of experience
    in analyzing technology trends. You're known for your thorough
    research and clear insights.""",
    verbose=True
)

writer = Agent(
    role="Content Writer",
    goal="Create engaging content about AI trends",
    backstory="""You are a skilled writer who specializes in making
    complex topics accessible. You write in a clear, engaging style.""",
    verbose=True
)

# Create tasks
research_task = Task(
    description="""Research the top 3 AI trends for 2024.
    Focus on practical applications and business impact.""",
    expected_output="A detailed report on top AI trends",
    agent=researcher
)

writing_task = Task(
    description="""Write a blog post based on the research.
    Make it engaging and accessible for a general audience.""",
    expected_output="A 500-word blog post",
    agent=writer
)

# Create and run the crew
crew = Crew(
    agents=[researcher, writer],
    tasks=[research_task, writing_task],
    process=Process.sequential,  # Tasks run in order
    verbose=True
)

result = crew.kickoff()
print(result)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Adding Tools to Agents"}
                </h2>
                <p>
                  {"Tools give agents real capabilities:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from crewai_tools import SerperDevTool, WebsiteSearchTool

# Search tool
search_tool = SerperDevTool()

# Website scraping tool
web_tool = WebsiteSearchTool()

# Agent with tools
researcher = Agent(
    role="Research Analyst",
    goal="Find accurate information from reliable sources",
    backstory="You are meticulous about fact-checking...",
    tools=[search_tool, web_tool],
    verbose=True
)

# The agent can now search the web and scrape websites!`}</code></pre>
                </div>
                <h3>
                  {"Available Tools"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"SerperDevTool:"}
                    </strong>
                    {" Google search via Serper API"}
                  </li>
                  <li>
                    <strong>
                      {"WebsiteSearchTool:"}
                    </strong>
                    {" Scrape and search websites"}
                  </li>
                  <li>
                    <strong>
                      {"FileReadTool:"}
                    </strong>
                    {" Read local files"}
                  </li>
                  <li>
                    <strong>
                      {"DirectoryReadTool:"}
                    </strong>
                    {" Read directory contents"}
                  </li>
                  <li>
                    <strong>
                      {"CodeInterpreterTool:"}
                    </strong>
                    {" Execute Python code"}
                  </li>
                  <li>
                    <strong>
                      {"Custom tools:"}
                    </strong>
                    {" Create your own!"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Process Types"}
                </h2>
                <h3>
                  {"Sequential Process"}
                </h3>
                <p>
                  {"Tasks execute one after another, each building on the previous:"}
                </p>
                <div className="code-block">
                  <pre><code>{`crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, writing_task, editing_task],
    process=Process.sequential
)
# Research → Writing → Editing`}</code></pre>
                </div>
                <h3>
                  {"Hierarchical Process"}
                </h3>
                <p>
                  {"A manager agent coordinates the team:"}
                </p>
                <div className="code-block">
                  <pre><code>{`crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research_task, writing_task, editing_task],
    process=Process.hierarchical,
    manager_llm=ChatOpenAI(model="gpt-4")
)
# Manager decides task order and delegation`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Content Creation"}
                    </h4>
                    <p>
                      {"Researcher → Writer → Editor pipeline for articles, blogs, reports."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Market Research"}
                    </h4>
                    <p>
                      {"Gather competitive intelligence, analyze trends, generate reports."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Code Review"}
                    </h4>
                    <p>
                      {"Developer writes, reviewer analyzes, QA validates."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Customer Support"}
                    </h4>
                    <p>
                      {"Triage agent categorizes, specialist resolves, QA checks quality."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Data Analysis"}
                    </h4>
                    <p>
                      {"Analyst explores data, statistician validates, presenter creates visuals."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Trip Planning"}
                    </h4>
                    <p>
                      {"Researcher finds options, planner organizes, budgeter optimizes costs."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-World Example: Blog Post Crew"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from crewai import Agent, Task, Crew, Process
from crewai_tools import SerperDevTool

search_tool = SerperDevTool()

# The Research Expert
researcher = Agent(
    role="Senior Tech Researcher",
    goal="Uncover cutting-edge developments in AI",
    backstory="""You work at a leading tech think tank. Your passion
    lies in identifying emerging trends and breaking down complex
    topics for a general audience.""",
    tools=[search_tool],
    verbose=True
)

# The Content Creator
writer = Agent(
    role="Tech Content Strategist",
    goal="Craft compelling content on tech advancements",
    backstory="""You are a renowned Content Strategist known for
    insightful and engaging articles. You transform complex
    concepts into compelling narratives.""",
    verbose=True
)

# The Quality Guardian
editor = Agent(
    role="Senior Editor",
    goal="Ensure content is polished and publication-ready",
    backstory="""With years of editing experience, you have a keen
    eye for detail and a passion for clear, impactful writing.""",
    verbose=True
)

# Define tasks
research = Task(
    description="""Research the latest AI agent frameworks.
    Focus on LangGraph, CrewAI, and AutoGen.
    Compare their approaches and use cases.""",
    expected_output="Comprehensive research notes with sources",
    agent=researcher
)

write = Task(
    description="""Write an engaging blog post based on the research.
    Target: developers new to AI agents.
    Length: 800-1000 words.
    Include code examples where relevant.""",
    expected_output="Complete blog post draft",
    agent=writer
)

edit = Task(
    description="""Edit the blog post for:
    - Clarity and flow
    - Technical accuracy
    - Engaging introduction and conclusion
    - Proper formatting""",
    expected_output="Polished, publication-ready blog post",
    agent=editor
)

# Assemble and run the crew
crew = Crew(
    agents=[researcher, writer, editor],
    tasks=[research, write, edit],
    process=Process.sequential,
    verbose=True
)

result = crew.kickoff()
print("=== FINAL OUTPUT ===")
print(result)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"CrewAI vs Other Frameworks"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Feature"}
                        </th>
                        <th>
                          {"CrewAI"}
                        </th>
                        <th>
                          {"AutoGen"}
                        </th>
                        <th>
                          {"LangGraph"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"Learning curve"}
                        </td>
                        <td>
                          {"Easy"}
                        </td>
                        <td>
                          {"Moderate"}
                        </td>
                        <td>
                          {"Steeper"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Paradigm"}
                        </td>
                        <td>
                          {"Role-based"}
                        </td>
                        <td>
                          {"Conversation-based"}
                        </td>
                        <td>
                          {"Graph-based"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Flexibility"}
                        </td>
                        <td>
                          {"Moderate"}
                        </td>
                        <td>
                          {"High"}
                        </td>
                        <td>
                          {"Very high"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Best for"}
                        </td>
                        <td>
                          {"Quick prototypes"}
                        </td>
                        <td>
                          {"Collaborative dialog"}
                        </td>
                        <td>
                          {"Complex workflows"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Setup time"}
                        </td>
                        <td>
                          {"Minutes"}
                        </td>
                        <td>
                          {"~30 minutes"}
                        </td>
                        <td>
                          {"Hours"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Detailed backstories:"}
                    </strong>
                    {" Rich context leads to better agent behavior"}
                  </li>
                  <li>
                    <strong>
                      {"Clear expected outputs:"}
                    </strong>
                    {" Tell agents exactly what success looks like"}
                  </li>
                  <li>
                    <strong>
                      {"Start sequential:"}
                    </strong>
                    {" Master sequential before trying hierarchical"}
                  </li>
                  <li>
                    <strong>
                      {"Limit crew size:"}
                    </strong>
                    {" 3-5 agents is usually optimal"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate tools:"}
                    </strong>
                    {" Give agents only the tools they need"}
                  </li>
                  <li>
                    <strong>
                      {"Test incrementally:"}
                    </strong>
                    {" Test each agent individually before combining"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor costs:"}
                    </strong>
                    {" Multi-agent systems use more tokens"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master CrewAI with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Agentic AI program covers CrewAI alongside other multi-agent frameworks. Build real AI teams with personalized guidance from industry experts."}
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
                  <Link href="/agentic-ai/articles/autogen" className="related-article-card">
                    <h4>
                      {"AutoGen: Conversational Agents"}
                    </h4>
                    {" "}
                    <p>
                      {"Microsoft's multi-agent framework"}
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
                  <Link href="/agentic-ai/articles/function-calling" className="related-article-card">
                    <h4>
                      {"Function Calling with LLMs"}
                    </h4>
                    {" "}
                    <p>
                      {"Give agents tools and capabilities"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about CrewAI and AI agents."} />
    </>
  );
}
