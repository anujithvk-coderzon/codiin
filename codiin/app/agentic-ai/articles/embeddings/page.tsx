import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "What are Embeddings? Complete Guide to Vector Representations",
  description: "Learn about Embeddings - the foundation of semantic search, RAG, and modern AI applications. Understand how text becomes vectors and why it matters.",
  keywords: ["embeddings tutorial", "text embeddings", "OpenAI embeddings", "semantic search", "vector representations", "AI embeddings guide"],
  alternates: { canonical: "/agentic-ai/articles/embeddings" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/embeddings",
    title: "What are Embeddings? The Complete Guide for Beginners",
    description: "Understand embeddings - how AI converts text to numbers for semantic search and RAG.",
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
  "headline": "What are Embeddings? Complete Guide to Vector Representations",
  "description": "Comprehensive guide to understanding embeddings and their role in modern AI applications",
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

export default function AgenticAiEmbeddingsPage() {
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
                {"Embeddings"}
              </span>
            </div>
            <h1>
              {"What are Embeddings?"}
            </h1>
            <p className="article-subtitle">
              {"The Foundation of Semantic Search and Modern AI"}
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
                  {"What are Embeddings?"}
                </h2>
                <p>
                  {"Embeddings are numerical representations of text (or other data) as vectors - lists of numbers that capture the meaning and context of the content. Think of them as a way to convert human language into a format that computers can understand and compare mathematically."}
                </p>
                <p>
                  {"For example, the sentence \"I love programming\" might become a vector like "}
                  <code>
                    {"[0.23, -0.45, 0.78, 0.12, ...]"}
                  </code>
                  {" with hundreds or thousands of dimensions. Similar sentences will have similar vectors, allowing AI to understand relationships between concepts."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Do Embeddings Exist?"}
                </h2>
                <p>
                  {"Computers work with numbers, not words. Traditional approaches treated words as isolated symbols - \"cat\" and \"kitten\" had no mathematical relationship. Embeddings solve this by placing related concepts close together in a high-dimensional space."}
                </p>
                <div className="highlight-box">
                  <h4>
                    {"The Key Insight"}
                  </h4>
                  <p>
                    {"Words with similar meanings have similar embeddings. This enables semantic search - finding content by meaning rather than exact keyword matches."}
                  </p>
                </div>
                <p>
                  {"Before embeddings, search engines could only find exact matches. With embeddings, searching for \"how to fix a bug\" can find documents about \"debugging code\" or \"troubleshooting errors\" - because they're semantically similar."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"How Do Embeddings Work?"}
                </h2>
                <p>
                  {"Embedding models are neural networks trained on massive amounts of text. They learn patterns like:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Synonyms:"}
                    </strong>
                    {" \"happy\" and \"joyful\" are close together"}
                  </li>
                  <li>
                    <strong>
                      {"Relationships:"}
                    </strong>
                    {" king - man + woman ≈ queen"}
                  </li>
                  <li>
                    <strong>
                      {"Context:"}
                    </strong>
                    {" \"bank\" (financial) vs \"bank\" (river) have different embeddings based on context"}
                  </li>
                  <li>
                    <strong>
                      {"Topics:"}
                    </strong>
                    {" All programming-related terms cluster together"}
                  </li>
                </ul>
                <h3>
                  {"The Process"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# 1. Input text
text = "Machine learning is fascinating"

# 2. Tokenize (break into pieces)
tokens = ["Machine", "learning", "is", "fascinating"]

# 3. Pass through embedding model
# The model processes all tokens and their relationships

# 4. Output: A single vector representing the meaning
embedding = [0.023, -0.156, 0.892, 0.045, ...]  # 1536 dimensions for OpenAI`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Embeddings"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Semantic Search"}
                    </h4>
                    <p>
                      {"Find documents by meaning, not just keywords. Essential for knowledge bases and documentation search."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"RAG Systems"}
                    </h4>
                    <p>
                      {"Retrieve relevant context for LLMs to generate accurate, grounded responses."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Recommendation Systems"}
                    </h4>
                    <p>
                      {"Find similar products, articles, or content based on semantic similarity."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Clustering & Classification"}
                    </h4>
                    <p>
                      {"Group similar documents or categorize content automatically."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Duplicate Detection"}
                    </h4>
                    <p>
                      {"Find near-duplicate content even when wording differs significantly."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Anomaly Detection"}
                    </h4>
                    <p>
                      {"Identify unusual patterns or outliers in text data."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Popular Embedding Models"}
                </h2>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Model"}
                        </th>
                        <th>
                          {"Provider"}
                        </th>
                        <th>
                          {"Dimensions"}
                        </th>
                        <th>
                          {"Best For"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          {"text-embedding-3-small"}
                        </td>
                        <td>
                          {"OpenAI"}
                        </td>
                        <td>
                          {"1536"}
                        </td>
                        <td>
                          {"Cost-effective, general purpose"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"text-embedding-3-large"}
                        </td>
                        <td>
                          {"OpenAI"}
                        </td>
                        <td>
                          {"3072"}
                        </td>
                        <td>
                          {"Highest quality, complex tasks"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"embed-english-v3.0"}
                        </td>
                        <td>
                          {"Cohere"}
                        </td>
                        <td>
                          {"1024"}
                        </td>
                        <td>
                          {"English text, good quality"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"all-MiniLM-L6-v2"}
                        </td>
                        <td>
                          {"Sentence Transformers"}
                        </td>
                        <td>
                          {"384"}
                        </td>
                        <td>
                          {"Free, runs locally, fast"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          {"all-mpnet-base-v2"}
                        </td>
                        <td>
                          {"Sentence Transformers"}
                        </td>
                        <td>
                          {"768"}
                        </td>
                        <td>
                          {"Free, high quality, local"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started with Embeddings"}
                </h2>
                <h3>
                  {"Using OpenAI Embeddings"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

client = OpenAI()

# Generate embedding for a single text
response = client.embeddings.create(
    model="text-embedding-3-small",
    input="Machine learning is transforming industries"
)

embedding = response.data[0].embedding
print(f"Dimensions: {len(embedding)}")  # 1536`}</code></pre>
                </div>
                <h3>
                  {"Using Sentence Transformers (Free, Local)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from sentence_transformers import SentenceTransformer

# Load model (downloads once, runs locally)
model = SentenceTransformer('all-MiniLM-L6-v2')

# Generate embeddings
sentences = [
    "Machine learning is fascinating",
    "I love artificial intelligence",
    "The weather is nice today"
]

embeddings = model.encode(sentences)
print(f"Shape: {embeddings.shape}")  # (3, 384)`}</code></pre>
                </div>
                <h3>
                  {"Using LangChain (Unified Interface)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import OpenAIEmbeddings
from langchain_community.embeddings import HuggingFaceEmbeddings

# OpenAI
openai_embeddings = OpenAIEmbeddings(model="text-embedding-3-small")

# Or use free local model
local_embeddings = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

# Same interface for both
vector = openai_embeddings.embed_query("Hello world")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Comparing Embeddings (Similarity)"}
                </h2>
                <p>
                  {"To find similar content, we compare embeddings using distance metrics. The most common is "}
                  <strong>
                    {"cosine similarity"}
                  </strong>
                  {" - it measures the angle between vectors, ignoring their magnitude."}
                </p>
                <div className="code-block">
                  <pre><code>{`import numpy as np
from numpy.linalg import norm

def cosine_similarity(a, b):
    return np.dot(a, b) / (norm(a) * norm(b))

# Example
embedding1 = model.encode("I love programming")
embedding2 = model.encode("Coding is my passion")
embedding3 = model.encode("The sky is blue")

sim_1_2 = cosine_similarity(embedding1, embedding2)  # ~0.85 (similar)
sim_1_3 = cosine_similarity(embedding1, embedding3)  # ~0.15 (different)

print(f"Programming vs Coding: {sim_1_2:.2f}")
print(f"Programming vs Sky: {sim_1_3:.2f}")`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Cosine similarity ranges from -1 to 1:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"1.0:"}
                    </strong>
                    {" Identical meaning"}
                  </li>
                  <li>
                    <strong>
                      {"0.7-0.9:"}
                    </strong>
                    {" Very similar"}
                  </li>
                  <li>
                    <strong>
                      {"0.3-0.7:"}
                    </strong>
                    {" Somewhat related"}
                  </li>
                  <li>
                    <strong>
                      {"0.0-0.3:"}
                    </strong>
                    {" Different topics"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Embeddings in RAG Systems"}
                </h2>
                <p>
                  {"Embeddings are the backbone of Retrieval-Augmented Generation (RAG). Here's how they fit:"}
                </p>
                <ol>
                  <li>
                    <strong>
                      {"Index your documents:"}
                    </strong>
                    {" Convert all documents to embeddings and store in a vector database"}
                  </li>
                  <li>
                    <strong>
                      {"User asks a question:"}
                    </strong>
                    {" Convert the question to an embedding"}
                  </li>
                  <li>
                    <strong>
                      {"Find similar content:"}
                    </strong>
                    {" Search for documents with similar embeddings"}
                  </li>
                  <li>
                    <strong>
                      {"Generate answer:"}
                    </strong>
                    {" Pass retrieved documents to LLM as context"}
                  </li>
                </ol>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import OpenAIEmbeddings, ChatOpenAI
from langchain_community.vectorstores import Chroma

# 1. Create embeddings and store documents
embeddings = OpenAIEmbeddings()
vectorstore = Chroma.from_documents(documents, embeddings)

# 2. Create retriever
retriever = vectorstore.as_retriever(search_kwargs={"k": 3})

# 3. Query - embeddings handle the similarity search
relevant_docs = retriever.invoke("What is machine learning?")

# 4. Use retrieved docs with LLM
# (The retrieved docs become context for accurate answers)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Choose the right model:"}
                    </strong>
                    {" Start with OpenAI's small model for prototyping; consider local models for cost-sensitive production"}
                  </li>
                  <li>
                    <strong>
                      {"Chunk appropriately:"}
                    </strong>
                    {" For documents, split into meaningful chunks (200-500 tokens) before embedding"}
                  </li>
                  <li>
                    <strong>
                      {"Use the same model:"}
                    </strong>
                    {" Always use the same embedding model for both indexing and querying"}
                  </li>
                  <li>
                    <strong>
                      {"Consider dimensions:"}
                    </strong>
                    {" More dimensions = better quality but more storage and compute"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize if needed:"}
                    </strong>
                    {" Some models output normalized vectors; others don't"}
                  </li>
                  <li>
                    <strong>
                      {"Batch for efficiency:"}
                    </strong>
                    {" When embedding many texts, batch them together"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Pitfalls"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Mixing embedding models:"}
                    </strong>
                    {" Vectors from different models are incompatible"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring context length:"}
                    </strong>
                    {" Most models truncate long texts; chunk first"}
                  </li>
                  <li>
                    <strong>
                      {"Not considering costs:"}
                    </strong>
                    {" API-based embeddings add up; calculate costs early"}
                  </li>
                  <li>
                    <strong>
                      {"Embedding everything:"}
                    </strong>
                    {" Only embed what's searchable; metadata can be filtered separately"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Embeddings with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers embeddings in-depth, from theory to production. Learn to build semantic search systems, RAG applications, and more with personalized mentorship."}
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
                  <Link href="/agentic-ai/articles/vector-databases" className="related-article-card">
                    <h4>
                      {"Vector Databases Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"Where to store and search your embeddings efficiently"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation"}
                    </h4>
                    {" "}
                    <p>
                      {"Use embeddings to give LLMs access to your data"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"LangChain: Building LLM Applications"}
                    </h4>
                    {" "}
                    <p>
                      {"Framework for working with embeddings and LLMs"}
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

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about embeddings and AI."} />
    </>
  );
}
