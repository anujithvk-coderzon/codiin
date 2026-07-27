import type { Metadata } from "next";
import Link from "next/link";
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

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
                <li>
                  <Link href="/hybrid-mobile-app">
                    {"Hybrid Mobile Apps"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Data & AI"}
              </h4>
              <ul>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
                <li>
                  {"Kochi, Kerala"}
                </li>
              </ul>
              <div className="social-links">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about LangChain and Agentic AI."} />
    </>
  );
}
