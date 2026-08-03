import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "LlamaIndex: The Data Framework for LLM Applications",
  description: "Learn LlamaIndex - the data framework for connecting LLMs to your custom data. Build powerful RAG applications, knowledge bases, and document Q&A systems.",
  keywords: ["LlamaIndex tutorial", "LlamaIndex RAG", "document Q&A", "LLM data framework", "knowledge base AI", "LlamaIndex Python"],
  alternates: { canonical: "/agentic-ai/articles/llamaindex" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/llamaindex",
    title: "LlamaIndex: Connect LLMs to Your Data",
    description: "Learn to build RAG applications and knowledge bases with LlamaIndex.",
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
  "headline": "LlamaIndex: The Data Framework for LLM Applications",
  "description": "Complete guide to building data-connected LLM applications with LlamaIndex",
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

export default function AgenticAiLlamaindexPage() {
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
                {"LlamaIndex"}
              </span>
            </div>
            <h1>
              {"What is LlamaIndex?"}
            </h1>
            <p className="article-subtitle">
              {"The Data Framework for LLM Applications"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"13 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is LlamaIndex?"}
                </h2>
                <p>
                  {"LlamaIndex (formerly GPT Index) is a data framework designed to connect Large Language Models with your private or custom data. It provides tools to ingest, structure, and query data from various sources, enabling you to build powerful RAG (Retrieval-Augmented Generation) applications."}
                </p>
                <p>
                  {"While LLMs are trained on public data, LlamaIndex helps you give them access to your documents, databases, APIs, and knowledge bases - making them useful for your specific use case."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use LlamaIndex?"}
                </h2>
                <p>
                  {"LlamaIndex solves the \"data connection\" problem:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"LLMs don't know your data:"}
                    </strong>
                    {" They can't access your company docs, databases, or files"}
                  </li>
                  <li>
                    <strong>
                      {"Context window limits:"}
                    </strong>
                    {" You can't paste entire knowledge bases into a prompt"}
                  </li>
                  <li>
                    <strong>
                      {"Data is messy:"}
                    </strong>
                    {" PDFs, Word docs, APIs, databases all need different handling"}
                  </li>
                  <li>
                    <strong>
                      {"Quality retrieval is hard:"}
                    </strong>
                    {" Finding the right information requires more than keyword search"}
                  </li>
                </ul>
                <div className="highlight-box">
                  <h4>
                    {"LlamaIndex's Mission"}
                  </h4>
                  <p>
                    {"Make it easy to build applications that leverage both the power of LLMs and your unique data."}
                  </p>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"1. Documents & Nodes"}
                </h3>
                <p>
                  <strong>
                    {"Documents"}
                  </strong>
                  {" are your raw data (PDFs, text files, etc.). "}
                  <strong>
                    {"Nodes"}
                  </strong>
                  {" are chunks of documents that get indexed and searched:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from llama_index.core import Document

# A document is a container for text
doc = Document(text="LlamaIndex is a data framework for LLMs...")

# Documents get split into nodes for indexing
# Each node is a searchable chunk of the original document`}</code></pre>
                </div>
                <h3>
                  {"2. Indexes"}
                </h3>
                <p>
                  {"Indexes organize your data for efficient retrieval:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"VectorStoreIndex:"}
                    </strong>
                    {" Most common - uses embeddings for semantic search"}
                  </li>
                  <li>
                    <strong>
                      {"SummaryIndex:"}
                    </strong>
                    {" Stores summaries for each document"}
                  </li>
                  <li>
                    <strong>
                      {"TreeIndex:"}
                    </strong>
                    {" Hierarchical structure for complex documents"}
                  </li>
                  <li>
                    <strong>
                      {"KeywordTableIndex:"}
                    </strong>
                    {" Keyword-based extraction"}
                  </li>
                </ul>
                <h3>
                  {"3. Query Engines"}
                </h3>
                <p>
                  {"Query engines let you ask questions about your data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`query_engine = index.as_query_engine()
response = query_engine.query("What is the company's refund policy?")`}</code></pre>
                </div>
                <h3>
                  {"4. Chat Engines"}
                </h3>
                <p>
                  {"For conversational interactions with memory:"}
                </p>
                <div className="code-block">
                  <pre><code>{`chat_engine = index.as_chat_engine()
response = chat_engine.chat("Tell me about the product")
response = chat_engine.chat("What about pricing?")  # Remembers context`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <h3>
                  {"Installation"}
                </h3>
                <div className="code-block">
                  <pre><code>{`pip install llama-index`}</code></pre>
                </div>
                <h3>
                  {"Basic RAG in 5 Lines"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.core import VectorStoreIndex, SimpleDirectoryReader

# 1. Load documents from a directory
documents = SimpleDirectoryReader("./data").load_data()

# 2. Create an index (automatically chunks and embeds)
index = VectorStoreIndex.from_documents(documents)

# 3. Query your data
query_engine = index.as_query_engine()
response = query_engine.query("What is the main topic of these documents?")

print(response)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Loaders"}
                </h2>
                <p>
                  {"LlamaIndex supports many data sources through \"readers\":"}
                </p>
                <h3>
                  {"Local Files"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.core import SimpleDirectoryReader

# Load all files from a directory
documents = SimpleDirectoryReader(
    input_dir="./documents",
    recursive=True  # Include subdirectories
).load_data()

# Supports: PDF, DOCX, TXT, MD, CSV, and more`}</code></pre>
                </div>
                <h3>
                  {"Web Pages"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.readers.web import SimpleWebPageReader

documents = SimpleWebPageReader().load_data([
    "https://example.com/page1",
    "https://example.com/page2"
])`}</code></pre>
                </div>
                <h3>
                  {"Databases"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.readers.database import DatabaseReader

reader = DatabaseReader(uri="postgresql://user:pass@localhost/db")
documents = reader.load_data(query="SELECT * FROM articles")`}</code></pre>
                </div>
                <h3>
                  {"APIs & More"}
                </h3>
                <p>
                  {"LlamaIndex Hub has 100+ data loaders for Notion, Slack, Google Docs, GitHub, and more."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Customizing Your Pipeline"}
                </h2>
                <h3>
                  {"Custom Chunking"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.core.node_parser import SentenceSplitter

# Control how documents are split
splitter = SentenceSplitter(
    chunk_size=512,      # Tokens per chunk
    chunk_overlap=50     # Overlap between chunks
)

nodes = splitter.get_nodes_from_documents(documents)`}</code></pre>
                </div>
                <h3>
                  {"Custom Embeddings"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.embeddings.openai import OpenAIEmbedding
from llama_index.embeddings.huggingface import HuggingFaceEmbedding

# OpenAI embeddings
embed_model = OpenAIEmbedding(model="text-embedding-3-small")

# Or free local embeddings
embed_model = HuggingFaceEmbedding(model_name="BAAI/bge-small-en-v1.5")

# Use in index
index = VectorStoreIndex.from_documents(
    documents,
    embed_model=embed_model
)`}</code></pre>
                </div>
                <h3>
                  {"Custom LLM"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from llama_index.llms.openai import OpenAI
from llama_index.llms.anthropic import Anthropic

# Use GPT-4
llm = OpenAI(model="gpt-4", temperature=0)

# Or Claude
llm = Anthropic(model="claude-3-sonnet-20240229")

# Use in query engine
query_engine = index.as_query_engine(llm=llm)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Document Q&A"}
                    </h4>
                    <p>
                      {"Ask questions about PDFs, contracts, manuals, and reports."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Knowledge Bases"}
                    </h4>
                    <p>
                      {"Build searchable knowledge bases from company documentation."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Customer Support"}
                    </h4>
                    <p>
                      {"Chatbots that answer based on help docs and FAQs."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Research Assistants"}
                    </h4>
                    <p>
                      {"Query and synthesize information from research papers."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Code Documentation"}
                    </h4>
                    <p>
                      {"Query codebases and technical documentation."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Legal & Compliance"}
                    </h4>
                    <p>
                      {"Search contracts, regulations, and legal documents."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced Features"}
                </h2>
                <h3>
                  {"Agents"}
                </h3>
                <p>
                  {"LlamaIndex supports building agents that can reason over your data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from llama_index.core.agent import ReActAgent
from llama_index.core.tools import QueryEngineTool

# Create tools from query engines
tool = QueryEngineTool.from_defaults(
    query_engine=query_engine,
    name="company_docs",
    description="Search company documentation"
)

# Create agent
agent = ReActAgent.from_tools([tool], llm=llm, verbose=True)

response = agent.chat("Find the vacation policy and summarize it")`}</code></pre>
                </div>
                <h3>
                  {"Multi-Document Queries"}
                </h3>
                <p>
                  {"Query across multiple document collections:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from llama_index.core import SubQuestionQueryEngine

# Combine multiple query engines
query_engine = SubQuestionQueryEngine.from_defaults(
    query_engine_tools=[
        QueryEngineTool.from_defaults(hr_query_engine, name="hr_docs"),
        QueryEngineTool.from_defaults(finance_query_engine, name="finance_docs"),
    ]
)

# Questions are broken into sub-questions for each source
response = query_engine.query(
    "Compare the vacation policy with the expense policy"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LlamaIndex vs LangChain"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Aspect"}
                        </th>
                        <th>
                          {"LlamaIndex"}
                        </th>
                        <th>
                          {"LangChain"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"Focus"}
                        </td>
                        <td>
                          {"Data connection & RAG"}
                        </td>
                        <td>
                          {"General LLM orchestration"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Best for"}
                        </td>
                        <td>
                          {"Document Q&A, knowledge bases"}
                        </td>
                        <td>
                          {"Agents, chains, diverse tasks"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Data ingestion"}
                        </td>
                        <td>
                          {"Excellent (100+ loaders)"}
                        </td>
                        <td>
                          {"Good"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Indexing"}
                        </td>
                        <td>
                          {"Very sophisticated"}
                        </td>
                        <td>
                          {"Basic"}
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
                          {"Moderate"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p>
                  <strong>
                    {"Tip:"}
                  </strong>
                  {" Many projects use both! LlamaIndex for data handling, LangChain for agent orchestration."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Chunk size matters:"}
                    </strong>
                    {" Experiment with 256-1024 tokens; smaller for precise retrieval, larger for context"}
                  </li>
                  <li>
                    <strong>
                      {"Use overlap:"}
                    </strong>
                    {" 10-20% overlap prevents cutting important information"}
                  </li>
                  <li>
                    <strong>
                      {"Persist your index:"}
                    </strong>
                    {" Save to disk or a vector database for production"}
                  </li>
                  <li>
                    <strong>
                      {"Add metadata:"}
                    </strong>
                    {" Include source, date, category for better filtering"}
                  </li>
                  <li>
                    <strong>
                      {"Evaluate retrieval:"}
                    </strong>
                    {" Test that the right chunks are being retrieved"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate models:"}
                    </strong>
                    {" Fast embeddings for indexing, powerful LLMs for answering"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master LlamaIndex with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Agentic AI program covers LlamaIndex, RAG systems, and building production-ready knowledge applications. Learn with hands-on projects and personalized guidance."}
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
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation"}
                    </h4>
                    {" "}
                    <p>
                      {"Understand the RAG architecture"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/embeddings" className="related-article-card">
                    <h4>
                      {"Embeddings Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"How semantic search works"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/vector-databases" className="related-article-card">
                    <h4>
                      {"Vector Databases"}
                    </h4>
                    {" "}
                    <p>
                      {"Store and search embeddings at scale"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about LlamaIndex and RAG systems."} />
    </>
  );
}
