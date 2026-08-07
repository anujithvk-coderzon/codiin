import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "What is LangChain? Complete Guide to Building LLM Applications",
  description: "Learn LangChain - the most popular framework for building LLM-powered applications. Understand chains, agents, memory, and how to build AI applications.",
  keywords: ["LangChain tutorial", "LangChain guide", "LLM framework", "AI application development", "LangChain Python", "build AI agents"],
  alternates: { canonical: "/agentic-ai/articles/langchain" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/langchain",
    title: "What is LangChain? Complete Guide to Building LLM Applications",
    description: "Master LangChain framework for building powerful AI applications with LLMs.",
    images: ["/images/langchain-article-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is LangChain? Complete Guide | CODiiN",
    description: "Master LangChain framework for building powerful AI applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "What is LangChain? Complete Guide to Building LLM Applications",
  "description": "Comprehensive guide to understanding and using LangChain for building AI applications",
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
  "datePublished": "2024-12-01",
  "dateModified": "2024-12-21"
} as const;

export default function AgenticAiLangchainPage() {
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
                {"LangChain"}
              </span>
            </div>
            <h1>
              {"What is LangChain?"}
            </h1>
            <p className="article-subtitle">
              {"The Complete Guide to Building LLM-Powered Applications"}
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
                  {"Introduction to LangChain"}
                </h2>
                <p>
                  {"LangChain is an open-source framework designed to simplify the development of applications powered by Large Language Models (LLMs). Created by Harrison Chase in late 2022, it has quickly become the most popular tool for building AI applications, with over 75,000 GitHub stars and a vibrant community of developers."}
                </p>
                <p>
                  {"At its core, LangChain provides a standardized interface for working with different LLMs, along with powerful abstractions for common patterns like chains, agents, and retrieval-augmented generation (RAG)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use LangChain?"}
                </h2>
                <p>
                  {"Building applications with LLMs involves more than just calling an API. You need to:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Manage prompts:"}
                    </strong>
                    {" Create, template, and optimize prompts for different tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Chain operations:"}
                    </strong>
                    {" Combine multiple LLM calls and other operations in sequence"}
                  </li>
                  <li>
                    <strong>
                      {"Add memory:"}
                    </strong>
                    {" Enable your application to remember previous interactions"}
                  </li>
                  <li>
                    <strong>
                      {"Connect to data:"}
                    </strong>
                    {" Retrieve relevant information from external sources"}
                  </li>
                  <li>
                    <strong>
                      {"Use tools:"}
                    </strong>
                    {" Allow LLMs to interact with external APIs and services"}
                  </li>
                  <li>
                    <strong>
                      {"Build agents:"}
                    </strong>
                    {" Create autonomous systems that can reason and take actions"}
                  </li>
                </ul>
                <p>
                  {"LangChain provides ready-made components for all of these, allowing you to focus on building your application rather than reinventing the wheel."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"1. Models"}
                </h3>
                <p>
                  {"LangChain provides a unified interface for working with different LLM providers:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain_anthropic import ChatAnthropic

# OpenAI
gpt4 = ChatOpenAI(model="gpt-4")

# Anthropic
claude = ChatAnthropic(model="claude-3-sonnet-20240229")

# Same interface for all models
response = gpt4.invoke("Explain quantum computing")`}</code></pre>
                </div>
                <h3>
                  {"2. Prompts"}
                </h3>
                <p>
                  {"Prompt templates allow you to create reusable, parameterized prompts:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant specialized in {topic}"),
    ("human", "{question}")
])

# Use the prompt
formatted = prompt.format(topic="Python programming",
                          question="How do decorators work?")`}</code></pre>
                </div>
                <h3>
                  {"3. Chains (LCEL)"}
                </h3>
                <p>
                  {"LangChain Expression Language (LCEL) lets you compose operations using the pipe operator:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

prompt = ChatPromptTemplate.from_template("Tell me a joke about {topic}")
model = ChatOpenAI()
parser = StrOutputParser()

# Chain them together
chain = prompt | model | parser

# Run the chain
result = chain.invoke({"topic": "programming"})`}</code></pre>
                </div>
                <h3>
                  {"4. Memory"}
                </h3>
                <p>
                  {"Add conversation history to make your chatbot remember context:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationBufferMemory
from langchain.chains import ConversationChain

memory = ConversationBufferMemory()
conversation = ConversationChain(
    llm=ChatOpenAI(),
    memory=memory
)

# The bot remembers previous messages
conversation.predict(input="My name is Alice")
conversation.predict(input="What's my name?")  # "Your name is Alice"`}</code></pre>
                </div>
                <h3>
                  {"5. Tools & Agents"}
                </h3>
                <p>
                  {"Agents can use tools to perform actions and gather information:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.agents import create_openai_tools_agent, AgentExecutor
from langchain.tools import DuckDuckGoSearchRun, WikipediaQueryRun

# Define tools
tools = [DuckDuckGoSearchRun(), WikipediaQueryRun()]

# Create agent
agent = create_openai_tools_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools)

# Agent decides which tools to use
result = executor.invoke({
    "input": "What is the current population of Tokyo?"
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Chatbots & Assistants"}
                    </h4>
                    <p>
                      {"Build conversational AI with memory, personality, and tool access."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Document Q&A (RAG)"}
                    </h4>
                    <p>
                      {"Answer questions based on your own documents and knowledge bases."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Data Analysis"}
                    </h4>
                    <p>
                      {"Query databases using natural language and generate insights."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Code Generation"}
                    </h4>
                    <p>
                      {"Build AI coding assistants that understand context and generate code."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Content Creation"}
                    </h4>
                    <p>
                      {"Generate articles, summaries, and creative content at scale."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Autonomous Agents"}
                    </h4>
                    <p>
                      {"Create AI systems that can reason, plan, and execute complex tasks."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LangChain Ecosystem"}
                </h2>
                <p>
                  {"LangChain has grown into a comprehensive ecosystem:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"LangChain Core:"}
                    </strong>
                    {" The foundational library with LCEL and base abstractions"}
                  </li>
                  <li>
                    <strong>
                      {"LangChain Community:"}
                    </strong>
                    {" Third-party integrations and tools"}
                  </li>
                  <li>
                    <strong>
                      {"LangGraph:"}
                    </strong>
                    {" Build complex, stateful multi-actor applications"}
                  </li>
                  <li>
                    <strong>
                      {"LangSmith:"}
                    </strong>
                    {" Debugging, testing, and monitoring platform"}
                  </li>
                  <li>
                    <strong>
                      {"LangServe:"}
                    </strong>
                    {" Deploy chains as REST APIs"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <p>
                  {"Install LangChain and start building:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install core packages
pip install langchain langchain-openai

# Set your API key
export OPENAI_API_KEY="your-key-here"

# Start building!
from langchain_openai import ChatOpenAI

llm = ChatOpenAI()
response = llm.invoke("Hello, LangChain!")
print(response.content)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start simple:"}
                    </strong>
                    {" Begin with basic chains before building complex agents"}
                  </li>
                  <li>
                    <strong>
                      {"Use LCEL:"}
                    </strong>
                    {" The new LangChain Expression Language is more flexible and debuggable"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor with LangSmith:"}
                    </strong>
                    {" Track costs, latency, and quality in production"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize prompts:"}
                    </strong>
                    {" Good prompts are the foundation of good AI applications"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors gracefully:"}
                    </strong>
                    {" LLMs can fail or produce unexpected outputs"}
                  </li>
                  <li>
                    <strong>
                      {"Test thoroughly:"}
                    </strong>
                    {" Use evaluation frameworks to measure quality"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Learn LangChain with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Agentic AI program covers LangChain in-depth, from basics to building production-ready applications. Get hands-on experience with real projects and personalized guidance from industry experts."}
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
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph: Building Multi-Actor AI Applications"}
                    </h4>
                    {" "}
                    <p>
                      {"Learn to build complex, stateful AI workflows"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"Connect LLMs to your own data sources"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/prompt-engineering" className="related-article-card">
                    <h4>
                      {"Prompt Engineering: The Complete Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Master the art of crafting effective prompts"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about LangChain and Agentic AI."} />
    </>
  );
}
