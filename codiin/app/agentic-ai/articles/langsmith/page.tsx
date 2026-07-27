import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "What is LangSmith? Complete Guide to LLM Observability",
  description: "Learn LangSmith - the essential platform for debugging, testing, evaluating, and monitoring LLM applications. Master observability for AI systems.",
  keywords: ["LangSmith tutorial", "LangSmith guide", "LLM observability", "AI monitoring", "LangChain debugging", "LLM testing", "AI evaluation"],
  alternates: { canonical: "/agentic-ai/articles/langsmith" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/langsmith",
    title: "What is LangSmith? Complete Guide to LLM Observability",
    description: "Master LangSmith for debugging, testing, and monitoring your LLM applications in production.",
    images: ["/images/langsmith-article-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "What is LangSmith? Complete Guide | CODiiN",
    description: "Master LangSmith for debugging, testing, and monitoring your LLM applications.",
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
  "headline": "What is LangSmith? Complete Guide to LLM Observability",
  "description": "Comprehensive guide to understanding and using LangSmith for debugging, testing, and monitoring LLM applications",
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
  "datePublished": "2024-12-22",
  "dateModified": "2024-12-22"
} as const;

export default function AgenticAiLangsmithPage() {
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
                {"LangSmith"}
              </span>
            </div>
            <h1>
              {"What is LangSmith?"}
            </h1>
            <p className="article-subtitle">
              {"The Essential Platform for LLM Observability, Testing, and Monitoring"}
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
                  {"Introduction to LangSmith"}
                </h2>
                <p>
                  {"LangSmith is a developer platform created by LangChain for debugging, testing, evaluating, and monitoring LLM applications. Think of it as the \"DevTools\" for AI applications - just like how browser developer tools help you debug web applications, LangSmith helps you understand what's happening inside your LLM-powered systems."}
                </p>
                <p>
                  {"When you build applications with LLMs, a lot happens behind the scenes: prompts are constructed, models are called, responses are parsed, and chains of operations execute. Without proper visibility into this process, debugging issues or understanding why your AI behaves a certain way becomes nearly impossible. LangSmith solves this problem."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why LangSmith Exists"}
                </h2>
                <p>
                  {"Building with LLMs presents unique challenges that traditional debugging tools weren't designed for:"}
                </p>
                <h3>
                  {"The Black Box Problem"}
                </h3>
                <p>
                  {"LLMs are inherently unpredictable. The same prompt might produce different outputs, and it's often unclear why an agent took a particular action. LangSmith provides complete visibility into every step of execution."}
                </p>
                <h3>
                  {"Complex Chains and Agents"}
                </h3>
                <p>
                  {"Modern AI applications involve multiple LLM calls, tool executions, and conditional logic. When something goes wrong in a 10-step agent workflow, finding the problem without proper tracing is like finding a needle in a haystack."}
                </p>
                <h3>
                  {"Quality Measurement"}
                </h3>
                <p>
                  {"How do you know if your AI is getting better? Traditional software has tests that pass or fail. LLM outputs are nuanced and require systematic evaluation frameworks."}
                </p>
                <h3>
                  {"Production Monitoring"}
                </h3>
                <p>
                  {"Once deployed, you need to track costs, latency, errors, and user satisfaction. LangSmith provides production-grade observability for AI systems."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"1. Tracing"}
                </h3>
                <p>
                  {"Tracing is the foundation of LangSmith. Every operation in your LLM application is captured as a \"run\" with complete details:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import os
from langsmith import traceable
from langchain_openai import ChatOpenAI

# Enable tracing (set these environment variables)
os.environ["LANGCHAIN_TRACING_V2"] = "true"
os.environ["LANGCHAIN_API_KEY"] = "your-langsmith-api-key"

# Your LangChain code is automatically traced
llm = ChatOpenAI()
response = llm.invoke("Explain machine learning")

# View the trace in LangSmith dashboard showing:
# - Input prompt
# - Output response
# - Latency
# - Token usage
# - Cost`}</code></pre>
                </div>
                <p>
                  {"With the "}
                  <code>
                    {"@traceable"}
                  </code>
                  {" decorator, you can also trace your own custom functions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langsmith import traceable

@traceable
def my_ai_function(user_query):
    # All operations inside are automatically traced
    context = retrieve_context(user_query)
    prompt = build_prompt(user_query, context)
    response = llm.invoke(prompt)
    return response`}</code></pre>
                </div>
                <h3>
                  {"2. Projects"}
                </h3>
                <p>
                  {"Projects organize your traces. You might have separate projects for development, staging, and production, or for different features of your application:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Specify which project to log traces to
os.environ["LANGCHAIN_PROJECT"] = "my-chatbot-dev"

# Or use different projects for different environments
if environment == "production":
    os.environ["LANGCHAIN_PROJECT"] = "my-chatbot-prod"
else:
    os.environ["LANGCHAIN_PROJECT"] = "my-chatbot-dev"`}</code></pre>
                </div>
                <h3>
                  {"3. Datasets"}
                </h3>
                <p>
                  {"Datasets are collections of input-output examples used for testing and evaluation. You can create them manually, from production traces, or from existing data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langsmith import Client

client = Client()

# Create a dataset
dataset = client.create_dataset("qa-test-cases")

# Add examples
client.create_example(
    inputs={"question": "What is the capital of France?"},
    outputs={"answer": "Paris"},
    dataset_id=dataset.id
)

client.create_example(
    inputs={"question": "Who wrote Romeo and Juliet?"},
    outputs={"answer": "William Shakespeare"},
    dataset_id=dataset.id
)`}</code></pre>
                </div>
                <h3>
                  {"4. Evaluations"}
                </h3>
                <p>
                  {"Evaluations let you systematically measure how well your AI performs. LangSmith supports custom evaluators and built-in metrics:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langsmith.evaluation import evaluate, LangChainStringEvaluator

# Define what you want to evaluate
def my_qa_system(inputs):
    return {"answer": llm.invoke(inputs["question"]).content}

# Run evaluation with different metrics
results = evaluate(
    my_qa_system,
    data="qa-test-cases",
    evaluators=[
        LangChainStringEvaluator("correctness"),
        LangChainStringEvaluator("helpfulness"),
    ],
    experiment_prefix="v1-gpt4"
)

# Compare different versions
results_v2 = evaluate(
    my_qa_system_v2,
    data="qa-test-cases",
    evaluators=[...],
    experiment_prefix="v2-claude"
)`}</code></pre>
                </div>
                <h3>
                  {"5. Annotation Queues"}
                </h3>
                <p>
                  {"For human evaluation, LangSmith provides annotation queues where team members can review and score AI outputs:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Human feedback:"}
                    </strong>
                    {" Collect ratings, corrections, and comments"}
                  </li>
                  <li>
                    <strong>
                      {"Quality assurance:"}
                    </strong>
                    {" Review production outputs for issues"}
                  </li>
                  <li>
                    <strong>
                      {"Training data:"}
                    </strong>
                    {" Generate high-quality examples for fine-tuning"}
                  </li>
                </ul>
                <h3>
                  {"6. Monitoring Dashboard"}
                </h3>
                <p>
                  {"The LangSmith dashboard provides real-time visibility into your production system:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Trace counts:"}
                    </strong>
                    {" How many requests per hour/day"}
                  </li>
                  <li>
                    <strong>
                      {"Latency metrics:"}
                    </strong>
                    {" P50, P95, P99 response times"}
                  </li>
                  <li>
                    <strong>
                      {"Error rates:"}
                    </strong>
                    {" Failed requests and error types"}
                  </li>
                  <li>
                    <strong>
                      {"Cost tracking:"}
                    </strong>
                    {" Token usage and API costs"}
                  </li>
                  <li>
                    <strong>
                      {"Feedback scores:"}
                    </strong>
                    {" User satisfaction trends"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use LangSmith"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Development & Debugging"}
                    </h4>
                    <p>
                      {"Understand exactly what prompts are sent, what responses come back, and where errors occur in your chains."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Testing & CI/CD"}
                    </h4>
                    <p>
                      {"Run automated evaluations on every code change to catch regressions before they reach production."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Prompt Engineering"}
                    </h4>
                    <p>
                      {"Compare different prompt versions systematically to find what works best for your use case."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Production Monitoring"}
                    </h4>
                    <p>
                      {"Track costs, latency, and errors in real-time. Get alerts when things go wrong."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Model Comparison"}
                    </h4>
                    <p>
                      {"Evaluate different models (GPT-4 vs Claude vs open-source) on your specific tasks."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Team Collaboration"}
                    </h4>
                    <p>
                      {"Share traces with teammates, annotate issues, and build datasets together."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <p>
                  {"Setting up LangSmith is straightforward:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# 1. Sign up at smith.langchain.com and get your API key

# 2. Install the SDK
pip install langsmith

# 3. Set environment variables
export LANGCHAIN_TRACING_V2=true
export LANGCHAIN_API_KEY=your-api-key
export LANGCHAIN_PROJECT=my-project

# 4. Your LangChain code is automatically traced!
from langchain_openai import ChatOpenAI

llm = ChatOpenAI()
response = llm.invoke("Hello!")
# Check smith.langchain.com to see the trace`}</code></pre>
                </div>
                <h3>
                  {"Using LangSmith Without LangChain"}
                </h3>
                <p>
                  {"LangSmith works with any LLM code, not just LangChain:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langsmith import traceable
from openai import OpenAI

client = OpenAI()

@traceable(run_type="llm")
def call_openai(prompt):
    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content

# This function call will be traced in LangSmith
result = call_openai("What is 2+2?")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Key Features Deep Dive"}
                </h2>
                <h3>
                  {"Trace Visualization"}
                </h3>
                <p>
                  {"LangSmith displays traces as a tree structure, showing parent-child relationships between operations. For an agent that:"}
                </p>
                <ol>
                  <li>
                    {"Receives a user question"}
                  </li>
                  <li>
                    {"Decides to search the web"}
                  </li>
                  <li>
                    {"Calls the search tool"}
                  </li>
                  <li>
                    {"Synthesizes an answer"}
                  </li>
                </ol>
                <p>
                  {"You'll see each step with its inputs, outputs, and timing. Click any node to see the full prompt and response."}
                </p>
                <h3>
                  {"Comparing Experiments"}
                </h3>
                <p>
                  {"When you run evaluations, LangSmith lets you compare results side-by-side:"}
                </p>
                <ul>
                  <li>
                    {"See which version performed better on each test case"}
                  </li>
                  <li>
                    {"Identify specific examples where one model excels"}
                  </li>
                  <li>
                    {"Track improvement trends over time"}
                  </li>
                </ul>
                <h3>
                  {"Filtering and Search"}
                </h3>
                <p>
                  {"Find specific traces quickly with powerful filters:"}
                </p>
                <ul>
                  <li>
                    {"By time range"}
                  </li>
                  <li>
                    {"By latency (e.g., \"show me slow requests\")"}
                  </li>
                  <li>
                    {"By error status"}
                  </li>
                  <li>
                    {"By feedback score"}
                  </li>
                  <li>
                    {"By custom metadata tags"}
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
                      {"Use meaningful project names:"}
                    </strong>
                    {" Organize by feature, environment, or team"}
                  </li>
                  <li>
                    <strong>
                      {"Add metadata to traces:"}
                    </strong>
                    {" Include user IDs, session IDs, or feature flags for better filtering"}
                  </li>
                  <li>
                    <strong>
                      {"Build golden datasets early:"}
                    </strong>
                    {" Collect examples of good inputs/outputs as you develop"}
                  </li>
                  <li>
                    <strong>
                      {"Run evaluations in CI:"}
                    </strong>
                    {" Catch regressions before they reach production"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor production daily:"}
                    </strong>
                    {" Set up alerts for error spikes or latency increases"}
                  </li>
                  <li>
                    <strong>
                      {"Review traces regularly:"}
                    </strong>
                    {" Even successful requests might reveal optimization opportunities"}
                  </li>
                  <li>
                    <strong>
                      {"Collect user feedback:"}
                    </strong>
                    {" Use thumbs up/down or ratings to track real-world satisfaction"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"LangSmith vs Alternatives"}
                </h2>
                <p>
                  {"While there are other observability tools, LangSmith stands out for:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Native LangChain integration:"}
                    </strong>
                    {" Zero-config tracing for LangChain apps"}
                  </li>
                  <li>
                    <strong>
                      {"Complete workflow:"}
                    </strong>
                    {" Tracing + datasets + evaluations + monitoring in one platform"}
                  </li>
                  <li>
                    <strong>
                      {"LLM-specific features:"}
                    </strong>
                    {" Built for AI applications, not generic APM"}
                  </li>
                  <li>
                    <strong>
                      {"Generous free tier:"}
                    </strong>
                    {" Suitable for development and small-scale production"}
                  </li>
                </ul>
                <p>
                  {"Alternatives include Weights & Biases (Weave), Arize Phoenix, and Helicone, each with their own strengths."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master LLM Observability with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program teaches you to build production-ready AI applications, including proper observability and monitoring with LangSmith. Learn to debug, test, and optimize your AI systems with hands-on projects."}
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
                      {"LangChain: Building LLM Applications"}
                    </h4>
                    {" "}
                    <p>
                      {"The framework LangSmith was built to support"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph: Multi-Actor AI Applications"}
                    </h4>
                    {" "}
                    <p>
                      {"Build complex, stateful AI workflows"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/prompt-engineering" className="related-article-card">
                    <h4>
                      {"Prompt Engineering: The Complete Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Master the prompts you'll be debugging in LangSmith"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about LangSmith and Agentic AI."} />
    </>
  );
}
