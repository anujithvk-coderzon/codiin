import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "LangGraph: Building Stateful Multi-Actor AI Applications",
  description: "Learn LangGraph - build complex, stateful multi-actor AI applications. Understand graph-based workflows, state management, and advanced agent orchestration.",
  keywords: ["LangGraph tutorial", "multi-agent AI", "stateful AI applications", "AI workflow orchestration", "LangChain LangGraph"],
  alternates: { canonical: "/agentic-ai/articles/langgraph" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/langgraph",
    title: "LangGraph: Building Stateful Multi-Actor AI Applications",
    description: "Master LangGraph for building complex AI workflows with state management.",
    images: ["/images/langgraph-article-og.jpg"],
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
  "headline": "LangGraph: Building Stateful Multi-Actor AI Applications",
  "description": "Comprehensive guide to understanding and using LangGraph for building complex AI workflows",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-21"
} as const;

export default function AgenticAiLanggraphPage() {
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
                {"LangGraph"}
              </span>
            </div>
            <h1>
              {"LangGraph: Building Multi-Actor AI Applications"}
            </h1>
            <p className="article-subtitle">
              {"Create Complex, Stateful AI Workflows with Graph-Based Orchestration"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"10 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is LangGraph?"}
                </h2>
                <p>
                  {"LangGraph is a library built on top of LangChain for building stateful, multi-actor applications with Large Language Models (LLMs). While LangChain excels at creating linear chains and simple agents, LangGraph enables you to build complex workflows where multiple AI agents can collaborate, branch, loop, and maintain state across interactions."}
                </p>
                <p>
                  {"Think of LangGraph as a way to define your AI application as a graph, where nodes represent actions (like calling an LLM or a tool), and edges define the flow between them."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why LangGraph?"}
                </h2>
                <p>
                  {"Traditional LLM applications face limitations when building complex systems:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Linear chains are limiting:"}
                    </strong>
                    {" Real workflows often need branching, loops, and conditional logic"}
                  </li>
                  <li>
                    <strong>
                      {"State management is hard:"}
                    </strong>
                    {" Tracking information across multiple steps and actors is complex"}
                  </li>
                  <li>
                    <strong>
                      {"Multi-agent coordination:"}
                    </strong>
                    {" Multiple AI agents need to collaborate and share context"}
                  </li>
                  <li>
                    <strong>
                      {"Human-in-the-loop:"}
                    </strong>
                    {" Many applications need checkpoints for human approval"}
                  </li>
                  <li>
                    <strong>
                      {"Error recovery:"}
                    </strong>
                    {" Complex systems need ways to retry or take alternative paths"}
                  </li>
                </ul>
                <p>
                  {"LangGraph addresses all of these with a graph-based approach to application design."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"1. State"}
                </h3>
                <p>
                  {"Every LangGraph application has a state that persists across the entire workflow:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from typing import TypedDict, Annotated
from langgraph.graph import StateGraph

class AgentState(TypedDict):
    messages: list[str]
    current_step: str
    research_data: dict
    final_answer: str

# State is automatically passed between nodes
# and can be updated by any node`}</code></pre>
                </div>
                <h3>
                  {"2. Nodes"}
                </h3>
                <p>
                  {"Nodes are the building blocks - functions that perform actions and update state:"}
                </p>
                <div className="code-block">
                  <pre><code>{`def researcher_node(state: AgentState) -> AgentState:
    """Research node that gathers information"""
    # Access current state
    query = state["messages"][-1]

    # Perform research (call LLM, APIs, etc.)
    research_results = perform_research(query)

    # Return updated state
    return {
        "research_data": research_results,
        "current_step": "research_complete"
    }

def writer_node(state: AgentState) -> AgentState:
    """Writer node that creates content"""
    research = state["research_data"]

    # Generate content based on research
    content = generate_content(research)

    return {"final_answer": content}`}</code></pre>
                </div>
                <h3>
                  {"3. Edges"}
                </h3>
                <p>
                  {"Edges define how nodes connect - they can be direct or conditional:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langgraph.graph import StateGraph, END

# Create the graph
workflow = StateGraph(AgentState)

# Add nodes
workflow.add_node("researcher", researcher_node)
workflow.add_node("writer", writer_node)
workflow.add_node("reviewer", reviewer_node)

# Add edges
workflow.add_edge("researcher", "writer")  # Direct edge

# Conditional edge based on state
def should_revise(state):
    if state.get("needs_revision"):
        return "writer"  # Go back to writer
    return END  # Finish

workflow.add_conditional_edges("reviewer", should_revise)

# Set entry point
workflow.set_entry_point("researcher")`}</code></pre>
                </div>
                <h3>
                  {"4. Checkpoints"}
                </h3>
                <p>
                  {"Persist state for human-in-the-loop or recovery:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langgraph.checkpoint.sqlite import SqliteSaver

# Create checkpointer
checkpointer = SqliteSaver.from_conn_string(":memory:")

# Compile with checkpointing
app = workflow.compile(checkpointer=checkpointer)

# Run with thread ID for persistence
config = {"configurable": {"thread_id": "user-123"}}
result = app.invoke(initial_state, config)

# Later, resume from checkpoint
resumed = app.invoke(None, config)  # Continues from last state`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a Multi-Agent System"}
                </h2>
                <p>
                  {"Here's a complete example of a research assistant with multiple specialized agents:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langgraph.graph import StateGraph, END
from langchain_openai import ChatOpenAI

class ResearchState(TypedDict):
    query: str
    search_results: list
    analysis: str
    report: str
    approved: bool

def search_agent(state):
    """Searches for relevant information"""
    results = web_search(state["query"])
    return {"search_results": results}

def analyst_agent(state):
    """Analyzes search results"""
    llm = ChatOpenAI(model="gpt-4")
    analysis = llm.invoke(f"Analyze: {state['search_results']}")
    return {"analysis": analysis.content}

def writer_agent(state):
    """Writes the final report"""
    llm = ChatOpenAI(model="gpt-4")
    report = llm.invoke(f"Write report based on: {state['analysis']}")
    return {"report": report.content}

def human_review(state):
    """Checkpoint for human approval"""
    # In production, this would wait for human input
    return {"approved": True}

def route_after_review(state):
    if state["approved"]:
        return END
    return "analyst"  # Revise if not approved

# Build the graph
workflow = StateGraph(ResearchState)
workflow.add_node("search", search_agent)
workflow.add_node("analyst", analyst_agent)
workflow.add_node("writer", writer_agent)
workflow.add_node("review", human_review)

workflow.set_entry_point("search")
workflow.add_edge("search", "analyst")
workflow.add_edge("analyst", "writer")
workflow.add_edge("writer", "review")
workflow.add_conditional_edges("review", route_after_review)

app = workflow.compile()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Patterns"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Supervisor Pattern"}
                    </h4>
                    <p>
                      {"A supervisor agent delegates tasks to specialized worker agents and coordinates their outputs."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Hierarchical Teams"}
                    </h4>
                    <p>
                      {"Multiple teams of agents, each with their own supervisor, working on complex projects."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Plan-and-Execute"}
                    </h4>
                    <p>
                      {"A planner creates a task list, and an executor works through each task sequentially."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Reflection"}
                    </h4>
                    <p>
                      {"An agent generates output, then critiques and improves it in a loop until satisfied."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Human-in-the-Loop"}
                    </h4>
                    <p>
                      {"Checkpoints allow humans to review, approve, or modify agent decisions."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Tool-Using Agents"}
                    </h4>
                    <p>
                      {"Agents that can dynamically select and use tools based on the task at hand."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LangGraph vs. Other Frameworks"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Feature"}
                        </th>
                        <th>
                          {"LangGraph"}
                        </th>
                        <th>
                          {"LangChain Agents"}
                        </th>
                        <th>
                          {"AutoGen"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"State Management"}
                        </td>
                        <td>
                          {"Built-in, typed"}
                        </td>
                        <td>
                          {"Limited"}
                        </td>
                        <td>
                          {"Message-based"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Workflow Control"}
                        </td>
                        <td>
                          {"Full graph control"}
                        </td>
                        <td>
                          {"Linear/ReAct"}
                        </td>
                        <td>
                          {"Conversation-based"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Checkpointing"}
                        </td>
                        <td>
                          {"Native support"}
                        </td>
                        <td>
                          {"Manual"}
                        </td>
                        <td>
                          {"Limited"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Human-in-the-Loop"}
                        </td>
                        <td>
                          {"First-class"}
                        </td>
                        <td>
                          {"Possible"}
                        </td>
                        <td>
                          {"Conversation-based"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Debugging"}
                        </td>
                        <td>
                          {"Excellent (LangSmith)"}
                        </td>
                        <td>
                          {"Good"}
                        </td>
                        <td>
                          {"Limited"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install LangGraph
pip install langgraph langchain-openai

# Basic usage
from langgraph.graph import StateGraph, END

class State(TypedDict):
    messages: list[str]

def chatbot(state):
    return {"messages": state["messages"] + ["Hello!"]}

workflow = StateGraph(State)
workflow.add_node("chat", chatbot)
workflow.set_entry_point("chat")
workflow.add_edge("chat", END)

app = workflow.compile()
result = app.invoke({"messages": ["Hi"]})`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master LangGraph with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program includes hands-on projects building multi-agent systems with LangGraph. Learn to design, implement, and deploy complex AI workflows with personalized mentorship."}
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
                      {"What is LangChain?"}
                    </h4>
                    {" "}
                    <p>
                      {"Foundation framework for LLM applications"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation"}
                    </h4>
                    {" "}
                    <p>
                      {"Connect LLMs to your own data"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/vector-databases" className="related-article-card">
                    <h4>
                      {"Vector Databases Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"Store and retrieve embeddings for AI"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about LangGraph and multi-agent AI."} />
    </>
  );
}
