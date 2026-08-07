import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Haystack: Building Production RAG Pipelines",
  description: "Learn Haystack - the open-source framework for building production-ready RAG pipelines and AI search applications.",
  keywords: ["Haystack", "deepset", "RAG framework", "AI search", "document QA", "NLP pipeline", "semantic search"],
  alternates: { canonical: "/agentic-ai/articles/haystack" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/haystack",
    title: "Haystack: Building Production RAG Pipelines",
    description: "Master Haystack for building production-ready RAG and AI search applications.",
    images: ["/images/haystack-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Haystack Framework Guide | CODiiN",
    description: "Production-ready RAG with Haystack.",
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
  "headline": "Haystack: Building Production RAG Pipelines",
  "description": "Comprehensive guide to building RAG applications with Haystack",
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

export default function AgenticAiHaystackPage() {
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
                {"Haystack"}
              </span>
            </div>
            <h1>
              {"Haystack"}
            </h1>
            <p className="article-subtitle">
              {"The Open-Source Framework for Production RAG and AI Search"}
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
                  {"What is Haystack?"}
                </h2>
                <p>
                  {"Haystack is an open-source framework by deepset for building production-ready LLM applications, particularly excelling at RAG (Retrieval Augmented Generation) and semantic search. It's designed with a modular, pipeline-based architecture that makes it easy to build, customize, and scale AI applications."}
                </p>
                <p>
                  {"Key features:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Pipeline-based:"}
                    </strong>
                    {" Composable, modular component architecture"}
                  </li>
                  <li>
                    <strong>
                      {"Production-ready:"}
                    </strong>
                    {" Built for scale with async support"}
                  </li>
                  <li>
                    <strong>
                      {"Flexible:"}
                    </strong>
                    {" Works with any LLM, embedder, or vector store"}
                  </li>
                  <li>
                    <strong>
                      {"Batteries included:"}
                    </strong>
                    {" Pre-built components for common tasks"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Haystack 2.0 Architecture"}
                </h2>
                <p>
                  {"Haystack 2.0 introduced a completely redesigned architecture:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Haystack 2.0 Pipeline Architecture

┌─────────────────────────────────────────────────────┐
│                     Pipeline                         │
├─────────────────────────────────────────────────────┤
│                                                      │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐     │
│   │Converter │ -> │ Splitter │ -> │ Embedder │     │
│   └──────────┘    └──────────┘    └──────────┘     │
│                                          │          │
│                                          ▼          │
│   ┌──────────┐    ┌──────────┐    ┌──────────┐     │
│   │Generator │ <- │ Retriever│ <- │  Writer  │     │
│   └──────────┘    └──────────┘    └──────────┘     │
│                                                      │
└─────────────────────────────────────────────────────┘`}</code></pre>
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
                  <pre><code>{`# Core installation
pip install haystack-ai

# With specific integrations
pip install "haystack-ai[opensearch]"
pip install "haystack-ai[chroma]"`}</code></pre>
                </div>
                <h3>
                  {"Basic RAG Pipeline"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from haystack import Pipeline
from haystack.components.retrievers.in_memory import InMemoryBM25Retriever
from haystack.components.generators import OpenAIGenerator
from haystack.components.builders import PromptBuilder
from haystack.document_stores.in_memory import InMemoryDocumentStore
from haystack import Document

# Create document store
document_store = InMemoryDocumentStore()

# Add documents
documents = [
    Document(content="Python is a programming language created by Guido van Rossum."),
    Document(content="JavaScript is the language of the web."),
    Document(content="Rust is known for memory safety."),
]
document_store.write_documents(documents)

# Create pipeline
pipeline = Pipeline()

# Add components
pipeline.add_component("retriever", InMemoryBM25Retriever(document_store=document_store))
pipeline.add_component("prompt_builder", PromptBuilder(template="""
Given these documents:
{% for doc in documents %}
- {{ doc.content }}
{% endfor %}

Answer the question: {{ question }}
"""))
pipeline.add_component("llm", OpenAIGenerator(model="gpt-4"))

# Connect components
pipeline.connect("retriever", "prompt_builder.documents")
pipeline.connect("prompt_builder", "llm")

# Run the pipeline
result = pipeline.run({
    "retriever": {"query": "Who created Python?"},
    "prompt_builder": {"question": "Who created Python?"}
})

print(result["llm"]["replies"][0])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Components"}
                </h2>
                <h3>
                  {"Document Stores"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from haystack.document_stores.in_memory import InMemoryDocumentStore
from haystack_integrations.document_stores.chroma import ChromaDocumentStore
from haystack_integrations.document_stores.opensearch import OpenSearchDocumentStore
from haystack_integrations.document_stores.pinecone import PineconeDocumentStore

# In-Memory (for development)
store = InMemoryDocumentStore()

# Chroma
store = ChromaDocumentStore(persist_path="./chroma_db")

# OpenSearch
store = OpenSearchDocumentStore(hosts=["http://localhost:9200"])

# Pinecone
store = PineconeDocumentStore(
    api_key="your-key",
    environment="us-west1-gcp",
    index="my-index"
)`}</code></pre>
                </div>
                <h3>
                  {"Embedders"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from haystack.components.embedders import (
    OpenAITextEmbedder,
    OpenAIDocumentEmbedder,
    SentenceTransformersTextEmbedder,
    SentenceTransformersDocumentEmbedder
)

# OpenAI embeddings
text_embedder = OpenAITextEmbedder(model="text-embedding-3-small")
doc_embedder = OpenAIDocumentEmbedder(model="text-embedding-3-small")

# Local embeddings with Sentence Transformers
text_embedder = SentenceTransformersTextEmbedder(
    model="sentence-transformers/all-MiniLM-L6-v2"
)
doc_embedder = SentenceTransformersDocumentEmbedder(
    model="sentence-transformers/all-MiniLM-L6-v2"
)`}</code></pre>
                </div>
                <h3>
                  {"Generators (LLMs)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from haystack.components.generators import OpenAIGenerator
from haystack_integrations.components.generators.anthropic import AnthropicGenerator
from haystack.components.generators import HuggingFaceLocalGenerator

# OpenAI
generator = OpenAIGenerator(model="gpt-4")

# Anthropic Claude
generator = AnthropicGenerator(model="claude-3-sonnet-20240229")

# Local model
generator = HuggingFaceLocalGenerator(
    model="mistralai/Mistral-7B-Instruct-v0.1"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building an Indexing Pipeline"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from haystack import Pipeline
from haystack.components.converters import PyPDFToDocument, TextFileToDocument
from haystack.components.preprocessors import DocumentCleaner, DocumentSplitter
from haystack.components.embedders import OpenAIDocumentEmbedder
from haystack.components.writers import DocumentWriter
from haystack_integrations.document_stores.chroma import ChromaDocumentStore

# Create document store
document_store = ChromaDocumentStore(persist_path="./chroma_db")

# Build indexing pipeline
indexing_pipeline = Pipeline()

# Add components
indexing_pipeline.add_component("converter", PyPDFToDocument())
indexing_pipeline.add_component("cleaner", DocumentCleaner())
indexing_pipeline.add_component("splitter", DocumentSplitter(
    split_by="sentence",
    split_length=5,
    split_overlap=1
))
indexing_pipeline.add_component("embedder", OpenAIDocumentEmbedder())
indexing_pipeline.add_component("writer", DocumentWriter(document_store=document_store))

# Connect components
indexing_pipeline.connect("converter", "cleaner")
indexing_pipeline.connect("cleaner", "splitter")
indexing_pipeline.connect("splitter", "embedder")
indexing_pipeline.connect("embedder", "writer")

# Run indexing
indexing_pipeline.run({"converter": {"sources": ["document.pdf"]}})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a Query Pipeline"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from haystack import Pipeline
from haystack.components.embedders import OpenAITextEmbedder
from haystack_integrations.components.retrievers.chroma import ChromaEmbeddingRetriever
from haystack.components.builders import PromptBuilder
from haystack.components.generators import OpenAIGenerator

# Query pipeline
query_pipeline = Pipeline()

# Components
query_pipeline.add_component("text_embedder", OpenAITextEmbedder())
query_pipeline.add_component("retriever", ChromaEmbeddingRetriever(
    document_store=document_store,
    top_k=5
))
query_pipeline.add_component("prompt_builder", PromptBuilder(template="""
You are a helpful assistant. Answer the question based on the context below.

Context:
{% for doc in documents %}
{{ doc.content }}
---
{% endfor %}

Question: {{ question }}

Answer:"""))
query_pipeline.add_component("llm", OpenAIGenerator(model="gpt-4"))

# Connect
query_pipeline.connect("text_embedder.embedding", "retriever.query_embedding")
query_pipeline.connect("retriever.documents", "prompt_builder.documents")
query_pipeline.connect("prompt_builder", "llm")

# Query
result = query_pipeline.run({
    "text_embedder": {"text": "What is the return policy?"},
    "prompt_builder": {"question": "What is the return policy?"}
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced: Hybrid Search"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from haystack import Pipeline
from haystack.components.joiners import DocumentJoiner
from haystack.components.rankers import TransformersSimilarityRanker

# Hybrid search pipeline
hybrid_pipeline = Pipeline()

# Add BM25 and embedding retrievers
hybrid_pipeline.add_component("bm25_retriever", InMemoryBM25Retriever(
    document_store=document_store,
    top_k=10
))
hybrid_pipeline.add_component("embedding_retriever", ChromaEmbeddingRetriever(
    document_store=document_store,
    top_k=10
))
hybrid_pipeline.add_component("text_embedder", OpenAITextEmbedder())

# Join and rerank
hybrid_pipeline.add_component("joiner", DocumentJoiner())
hybrid_pipeline.add_component("ranker", TransformersSimilarityRanker(
    model="cross-encoder/ms-marco-MiniLM-L-6-v2",
    top_k=5
))

# Connections
hybrid_pipeline.connect("text_embedder.embedding", "embedding_retriever.query_embedding")
hybrid_pipeline.connect("bm25_retriever", "joiner")
hybrid_pipeline.connect("embedding_retriever", "joiner")
hybrid_pipeline.connect("joiner", "ranker")

# Run hybrid search
results = hybrid_pipeline.run({
    "bm25_retriever": {"query": "machine learning"},
    "text_embedder": {"text": "machine learning"},
    "ranker": {"query": "machine learning"}
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Haystack vs Other Frameworks"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Haystack"}
                    </h4>
                    <p>
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Production RAG, semantic search, enterprise deployments"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"LangChain"}
                    </h4>
                    <p>
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Rapid prototyping, many integrations, agents"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"LlamaIndex"}
                    </h4>
                    <p>
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Document indexing, simple RAG, quick setup"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"When to Choose Haystack"}
                    </h4>
                    <p>
                      {"Production focus, clean architecture, team projects, search expertise"}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Separate pipelines:"}
                    </strong>
                    {" Use different pipelines for indexing and querying"}
                  </li>
                  <li>
                    <strong>
                      {"Tune chunking:"}
                    </strong>
                    {" Experiment with split_length and split_overlap"}
                  </li>
                  <li>
                    <strong>
                      {"Use hybrid search:"}
                    </strong>
                    {" Combine BM25 and semantic for best results"}
                  </li>
                  <li>
                    <strong>
                      {"Add reranking:"}
                    </strong>
                    {" Cross-encoders significantly improve relevance"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor latency:"}
                    </strong>
                    {" Profile each component in production"}
                  </li>
                  <li>
                    <strong>
                      {"Version pipelines:"}
                    </strong>
                    {" Save pipeline configs for reproducibility"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Production RAG with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers Haystack and production RAG patterns. Learn to build scalable AI search applications."}
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
                      {"Understanding the RAG architecture"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/vector-databases" className="related-article-card">
                    <h4>
                      {"Vector Databases Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"Storage for semantic search"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/llamaindex" className="related-article-card">
                    <h4>
                      {"LlamaIndex Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative RAG framework"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Haystack and Agentic AI."} />
    </>
  );
}
