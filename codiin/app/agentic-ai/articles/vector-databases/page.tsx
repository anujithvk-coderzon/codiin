import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Vector Databases: Complete Guide for AI Applications",
  description: "Learn about Vector Databases - specialized databases for storing and querying AI embeddings. Compare Pinecone, ChromaDB, Weaviate, Qdrant for your RAG applications.",
  keywords: ["vector database", "Pinecone", "ChromaDB", "Weaviate", "Qdrant", "embeddings storage", "AI database", "semantic search"],
  alternates: { canonical: "/agentic-ai/articles/vector-databases" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/vector-databases",
    title: "Vector Databases: Complete Guide for AI Applications",
    description: "Store and query AI embeddings efficiently. Compare top vector databases for your projects.",
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
  "headline": "Vector Databases: Complete Guide for AI Applications",
  "description": "Comprehensive guide to vector databases for storing and querying AI embeddings",
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

export default function AgenticAiVectorDatabasesPage() {
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
                {"Vector Databases"}
              </span>
            </div>
            <h1>
              {"Vector Databases Explained"}
            </h1>
            <p className="article-subtitle">
              {"The Essential Infrastructure for AI Applications and Semantic Search"}
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
                  {"What is a Vector Database?"}
                </h2>
                <p>
                  {"A vector database is a specialized database designed to store, index, and query high-dimensional vectors (embeddings). Unlike traditional databases that work with rows and columns, vector databases excel at finding similar items based on their semantic meaning."}
                </p>
                <div className="highlight-box">
                  <h4>
                    {"Vector vs Traditional Database"}
                  </h4>
                  <p>
                    <strong>
                      {"Traditional DB:"}
                    </strong>
                    {" \"Find all products where name = 'iPhone'\""}
                  </p>
                  <p>
                    <strong>
                      {"Vector DB:"}
                    </strong>
                    {" \"Find all products similar to 'Apple smartphone with good camera'\""}
                  </p>
                </div>
                <p>
                  {"When you convert text, images, or other data into embeddings using AI models, these embeddings capture the semantic meaning of the content. Vector databases let you search through millions of these embeddings in milliseconds."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"How Vector Databases Work"}
                </h2>
                <h3>
                  {"1. Embeddings"}
                </h3>
                <p>
                  {"Data is converted to vectors (lists of numbers) using embedding models:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Text to embedding
"The quick brown fox" → [0.023, -0.041, 0.089, ..., 0.012]
                         ↑ 1536 dimensions (OpenAI)

# Similar text = similar vectors
"A fast brown fox"    → [0.021, -0.038, 0.091, ..., 0.014]
"Pizza recipe"        → [0.892, 0.234, -0.567, ..., 0.445]`}</code></pre>
                </div>
                <h3>
                  {"2. Indexing"}
                </h3>
                <p>
                  {"Vector databases use specialized algorithms to index vectors for fast similarity search:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"HNSW (Hierarchical Navigable Small World):"}
                    </strong>
                    {" Graph-based, excellent accuracy"}
                  </li>
                  <li>
                    <strong>
                      {"IVF (Inverted File Index):"}
                    </strong>
                    {" Cluster-based, good for large datasets"}
                  </li>
                  <li>
                    <strong>
                      {"PQ (Product Quantization):"}
                    </strong>
                    {" Compression for memory efficiency"}
                  </li>
                  <li>
                    <strong>
                      {"Flat:"}
                    </strong>
                    {" Brute force, perfect accuracy but slow"}
                  </li>
                </ul>
                <h3>
                  {"3. Similarity Search"}
                </h3>
                <p>
                  {"Finding similar vectors using distance metrics:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Common distance metrics

# Cosine Similarity (most common for text)
# Range: -1 to 1 (1 = identical)
cosine_sim = dot(A, B) / (norm(A) * norm(B))

# Euclidean Distance (L2)
# Range: 0 to infinity (0 = identical)
euclidean = sqrt(sum((A - B)^2))

# Dot Product
# For normalized vectors, same as cosine
dot_product = sum(A * B)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Popular Vector Databases Compared"}
                </h2>
                <div className="db-comparison">
                  <div className="db-card">
                    <h3>
                      {"Pinecone"}
                    </h3>
                    <span className="db-type">
                      {"Fully Managed"}
                    </span>
                    <p>
                      {"The most popular managed vector database. Zero infrastructure management."}
                    </p>
                    <ul>
                      <li>
                        {"Serverless and pod-based options"}
                      </li>
                      <li>
                        {"Excellent documentation"}
                      </li>
                      <li>
                        {"Built-in metadata filtering"}
                      </li>
                      <li>
                        {"SOC2 compliant"}
                      </li>
                    </ul>
                    <div className="db-best-for">
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Production apps, teams without DevOps"}
                    </div>
                    <div className="code-block">
                      <pre><code>{`import pinecone

pinecone.init(api_key="xxx")
index = pinecone.Index("my-index")

# Upsert vectors
index.upsert([
    ("id1", [0.1, 0.2, ...], {"text": "doc1"})
])

# Query
results = index.query(
    vector=[0.1, 0.2, ...],
    top_k=5,
    include_metadata=True
)`}</code></pre>
                    </div>
                  </div>
                  <div className="db-card">
                    <h3>
                      {"ChromaDB"}
                    </h3>
                    <span className="db-type">
                      {"Open Source"}
                    </span>
                    <p>
                      {"Developer-friendly, Python-native vector database. Perfect for prototyping."}
                    </p>
                    <ul>
                      <li>
                        {"Runs locally or embedded"}
                      </li>
                      <li>
                        {"Automatic embedding generation"}
                      </li>
                      <li>
                        {"Simple, intuitive API"}
                      </li>
                      <li>
                        {"Great for Jupyter notebooks"}
                      </li>
                    </ul>
                    <div className="db-best-for">
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Prototyping, learning, small projects"}
                    </div>
                    <div className="code-block">
                      <pre><code>{`import chromadb

client = chromadb.Client()
collection = client.create_collection("docs")

# Add documents (auto-embeds!)
collection.add(
    documents=["doc1", "doc2"],
    ids=["id1", "id2"]
)

# Query with text
results = collection.query(
    query_texts=["search query"],
    n_results=5
)`}</code></pre>
                    </div>
                  </div>
                  <div className="db-card">
                    <h3>
                      {"Weaviate"}
                    </h3>
                    <span className="db-type">
                      {"Open Source / Managed"}
                    </span>
                    <p>
                      {"Feature-rich vector database with GraphQL API and hybrid search."}
                    </p>
                    <ul>
                      <li>
                        {"Built-in vectorization modules"}
                      </li>
                      <li>
                        {"GraphQL query interface"}
                      </li>
                      <li>
                        {"Hybrid (vector + keyword) search"}
                      </li>
                      <li>
                        {"Multi-modal support"}
                      </li>
                    </ul>
                    <div className="db-best-for">
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Complex queries, multi-modal applications"}
                    </div>
                    <div className="code-block">
                      <pre><code>{`import weaviate

client = weaviate.Client("http://localhost:8080")

# Query with GraphQL
result = client.query.get(
    "Document", ["content", "title"]
).with_near_text({
    "concepts": ["machine learning"]
}).with_limit(5).do()`}</code></pre>
                    </div>
                  </div>
                  <div className="db-card">
                    <h3>
                      {"Qdrant"}
                    </h3>
                    <span className="db-type">
                      {"Open Source / Managed"}
                    </span>
                    <p>
                      {"High-performance vector database written in Rust. Great for filtering."}
                    </p>
                    <ul>
                      <li>
                        {"Excellent performance (Rust)"}
                      </li>
                      <li>
                        {"Advanced filtering capabilities"}
                      </li>
                      <li>
                        {"Payload storage built-in"}
                      </li>
                      <li>
                        {"Kubernetes-ready"}
                      </li>
                    </ul>
                    <div className="db-best-for">
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" High-performance needs, complex filtering"}
                    </div>
                    <div className="code-block">
                      <pre><code>{`from qdrant_client import QdrantClient

client = QdrantClient("localhost", port=6333)

# Search with filtering
results = client.search(
    collection_name="docs",
    query_vector=[0.1, 0.2, ...],
    query_filter=Filter(
        must=[FieldCondition(
            key="category",
            match=MatchValue(value="tech")
        )]
    ),
    limit=5
)`}</code></pre>
                    </div>
                  </div>
                  <div className="db-card">
                    <h3>
                      {"Milvus"}
                    </h3>
                    <span className="db-type">
                      {"Open Source"}
                    </span>
                    <p>
                      {"Built for billion-scale vector similarity search. Enterprise-grade."}
                    </p>
                    <ul>
                      <li>
                        {"Handles billions of vectors"}
                      </li>
                      <li>
                        {"GPU acceleration"}
                      </li>
                      <li>
                        {"Distributed architecture"}
                      </li>
                      <li>
                        {"Multiple index types"}
                      </li>
                    </ul>
                    <div className="db-best-for">
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Large-scale enterprise deployments"}
                    </div>
                  </div>
                  <div className="db-card">
                    <h3>
                      {"pgvector"}
                    </h3>
                    <span className="db-type">
                      {"PostgreSQL Extension"}
                    </span>
                    <p>
                      {"Add vector capabilities to your existing Postgres database."}
                    </p>
                    <ul>
                      <li>
                        {"Use existing Postgres infrastructure"}
                      </li>
                      <li>
                        {"SQL interface"}
                      </li>
                      <li>
                        {"ACID compliance"}
                      </li>
                      <li>
                        {"Easy to adopt"}
                      </li>
                    </ul>
                    <div className="db-best-for">
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Teams already using Postgres"}
                    </div>
                    <div className="code-block">
                      <pre><code>{`-- Enable extension
CREATE EXTENSION vector;

-- Create table with vector column
CREATE TABLE documents (
  id SERIAL PRIMARY KEY,
  content TEXT,
  embedding vector(1536)
);

-- Similarity search
SELECT * FROM documents
ORDER BY embedding <-> '[0.1, 0.2, ...]'
LIMIT 5;`}</code></pre>
                    </div>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Choosing the Right Vector Database"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Criteria"}
                        </th>
                        <th>
                          {"Best Choice"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"Just learning / prototyping"}
                        </td>
                        <td>
                          <strong>
                            {"ChromaDB"}
                          </strong>
                          {" - easiest to start"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Production without DevOps"}
                        </td>
                        <td>
                          <strong>
                            {"Pinecone"}
                          </strong>
                          {" - fully managed"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Need complex filtering"}
                        </td>
                        <td>
                          <strong>
                            {"Qdrant"}
                          </strong>
                          {" or "}
                          <strong>
                            {"Weaviate"}
                          </strong>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Already using Postgres"}
                        </td>
                        <td>
                          <strong>
                            {"pgvector"}
                          </strong>
                          {" - add-on to existing DB"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Billion+ scale"}
                        </td>
                        <td>
                          <strong>
                            {"Milvus"}
                          </strong>
                          {" - designed for scale"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Multi-modal (text + images)"}
                        </td>
                        <td>
                          <strong>
                            {"Weaviate"}
                          </strong>
                          {" - built-in modules"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"Cost-sensitive"}
                        </td>
                        <td>
                          <strong>
                            {"ChromaDB"}
                          </strong>
                          {" or "}
                          <strong>
                            {"Qdrant"}
                          </strong>
                          {" (self-hosted)"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using Vector DBs with LangChain"}
                </h2>
                <p>
                  {"LangChain provides a unified interface for all major vector databases:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import OpenAIEmbeddings
from langchain.text_splitter import CharacterTextSplitter

# Common setup
embeddings = OpenAIEmbeddings()
texts = ["doc1", "doc2", "doc3"]

# Pinecone
from langchain_pinecone import PineconeVectorStore
vectorstore = PineconeVectorStore.from_texts(texts, embeddings, index_name="my-index")

# ChromaDB
from langchain_chroma import Chroma
vectorstore = Chroma.from_texts(texts, embeddings, persist_directory="./chroma")

# Qdrant
from langchain_qdrant import Qdrant
vectorstore = Qdrant.from_texts(texts, embeddings, url="http://localhost:6333")

# Same interface for all!
results = vectorstore.similarity_search("query", k=5)
retriever = vectorstore.as_retriever()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Choose the right embedding model:"}
                    </strong>
                    {" OpenAI's text-embedding-3-small/large, Cohere, or open-source alternatives"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize your vectors:"}
                    </strong>
                    {" Most databases work best with normalized vectors"}
                  </li>
                  <li>
                    <strong>
                      {"Store metadata:"}
                    </strong>
                    {" Keep original text and context with your vectors"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate chunk sizes:"}
                    </strong>
                    {" 500-1000 tokens usually works well"}
                  </li>
                  <li>
                    <strong>
                      {"Index wisely:"}
                    </strong>
                    {" HNSW for accuracy, IVF for scale, Flat for small datasets"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor performance:"}
                    </strong>
                    {" Track query latency and recall metrics"}
                  </li>
                  <li>
                    <strong>
                      {"Consider hybrid search:"}
                    </strong>
                    {" Combine vector + keyword search for better results"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Vector Databases for AI"}
                </h2>
                <p>
                  {"Our Agentic AI program includes hands-on experience with multiple vector databases. Build real RAG applications with expert mentorship."}
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
                      {"Use vector databases for AI knowledge systems"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"What is LangChain?"}
                    </h4>
                    {" "}
                    <p>
                      {"Framework that integrates with all vector DBs"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/prompt-engineering" className="related-article-card">
                    <h4>
                      {"Prompt Engineering Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Optimize prompts for retrieved context"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about vector databases for AI."} />
    </>
  );
}
