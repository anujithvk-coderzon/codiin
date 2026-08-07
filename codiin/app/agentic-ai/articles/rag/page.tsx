import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "RAG: Retrieval Augmented Generation Explained",
  description: "Learn RAG (Retrieval Augmented Generation) - connect LLMs to your own data. Understand embeddings, vector databases, chunking strategies, and building knowledge-based AI systems.",
  keywords: ["RAG tutorial", "Retrieval Augmented Generation", "LLM knowledge base", "vector search", "embeddings", "AI document Q&A"],
  alternates: { canonical: "/agentic-ai/articles/rag" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/rag",
    title: "RAG: Retrieval Augmented Generation Explained",
    description: "Connect LLMs to your own data with RAG. Complete guide to building knowledge-based AI.",
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
  "headline": "RAG: Retrieval Augmented Generation Explained",
  "description": "Comprehensive guide to understanding and implementing RAG systems for AI applications",
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

export default function AgenticAiRagPage() {
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
                {"RAG"}
              </span>
            </div>
            <h1>
              {"RAG: Retrieval Augmented Generation"}
            </h1>
            <p className="article-subtitle">
              {"Connect LLMs to Your Own Data for Accurate, Up-to-Date Responses"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"15 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is RAG?"}
                </h2>
                <p>
                  {"Retrieval Augmented Generation (RAG) is a technique that enhances Large Language Models by giving them access to external knowledge sources. Instead of relying solely on the knowledge learned during training, RAG allows LLMs to retrieve relevant information from your documents, databases, or other sources before generating a response."}
                </p>
                <div className="highlight-box">
                  <h4>
                    {"The RAG Process"}
                  </h4>
                  <ol>
                    <li>
                      <strong>
                        {"Query:"}
                      </strong>
                      {" User asks a question"}
                    </li>
                    <li>
                      <strong>
                        {"Retrieve:"}
                      </strong>
                      {" System finds relevant documents/chunks"}
                    </li>
                    <li>
                      <strong>
                        {"Augment:"}
                      </strong>
                      {" Retrieved context is added to the prompt"}
                    </li>
                    <li>
                      <strong>
                        {"Generate:"}
                      </strong>
                      {" LLM produces an answer using the context"}
                    </li>
                  </ol>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Why RAG Matters"}
                </h2>
                <p>
                  {"LLMs have significant limitations that RAG addresses:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Knowledge cutoff:"}
                    </strong>
                    {" LLMs only know information from their training data, which has a cutoff date"}
                  </li>
                  <li>
                    <strong>
                      {"Hallucinations:"}
                    </strong>
                    {" LLMs can confidently generate false information"}
                  </li>
                  <li>
                    <strong>
                      {"No private data:"}
                    </strong>
                    {" LLMs don't have access to your company's internal documents"}
                  </li>
                  <li>
                    <strong>
                      {"Domain specificity:"}
                    </strong>
                    {" Generic LLMs may lack deep expertise in specialized fields"}
                  </li>
                  <li>
                    <strong>
                      {"Source attribution:"}
                    </strong>
                    {" Without RAG, it's hard to verify where information came from"}
                  </li>
                </ul>
                <p>
                  {"RAG solves these by grounding LLM responses in your actual data, making answers more accurate, current, and verifiable."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"How RAG Works: The Technical Flow"}
                </h2>
                <h3>
                  {"1. Document Ingestion"}
                </h3>
                <p>
                  {"First, your documents are processed and prepared for retrieval:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.document_loaders import PyPDFLoader
from langchain.text_splitter import RecursiveCharacterTextSplitter

# Load documents
loader = PyPDFLoader("company_handbook.pdf")
documents = loader.load()

# Split into chunks
splitter = RecursiveCharacterTextSplitter(
    chunk_size=1000,
    chunk_overlap=200
)
chunks = splitter.split_documents(documents)`}</code></pre>
                </div>
                <h3>
                  {"2. Creating Embeddings"}
                </h3>
                <p>
                  {"Each chunk is converted into a numerical vector (embedding) that captures its semantic meaning:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import OpenAIEmbeddings

embeddings = OpenAIEmbeddings()

# Each chunk becomes a vector like:
# [0.023, -0.041, 0.089, ..., 0.012]  # 1536 dimensions
# Similar content = similar vectors`}</code></pre>
                </div>
                <h3>
                  {"3. Storing in Vector Database"}
                </h3>
                <p>
                  {"Embeddings are stored in a vector database for fast similarity search:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_community.vectorstores import Chroma

# Create vector store
vectorstore = Chroma.from_documents(
    documents=chunks,
    embedding=embeddings,
    persist_directory="./chroma_db"
)`}</code></pre>
                </div>
                <h3>
                  {"4. Retrieval at Query Time"}
                </h3>
                <p>
                  {"When a user asks a question, we find the most relevant chunks:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# User's question is also embedded
query = "What is the vacation policy?"

# Find similar chunks using vector similarity
relevant_docs = vectorstore.similarity_search(query, k=4)

# Returns the 4 most relevant document chunks`}</code></pre>
                </div>
                <h3>
                  {"5. Generation with Context"}
                </h3>
                <p>
                  {"The retrieved chunks are added to the prompt, and the LLM generates an answer:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.chains import RetrievalQA
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4")
retriever = vectorstore.as_retriever()

qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=retriever,
    return_source_documents=True
)

result = qa_chain.invoke({"query": "What is the vacation policy?"})
print(result["result"])
print(result["source_documents"])  # Citations!`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Chunking Strategies"}
                </h2>
                <p>
                  {"How you split documents significantly impacts retrieval quality:"}
                </p>
                <div className="comparison-grid">
                  <div className="comparison-card">
                    <h4>
                      {"Fixed Size Chunking"}
                    </h4>
                    <p>
                      {"Split by character count. Simple but may break sentences."}
                    </p>
                    <code>
                      {"chunk_size=1000, overlap=200"}
                    </code>
                  </div>
                  <div className="comparison-card">
                    <h4>
                      {"Recursive Chunking"}
                    </h4>
                    <p>
                      {"Tries to split at natural boundaries (paragraphs, sentences)."}
                    </p>
                    <code>
                      {"RecursiveCharacterTextSplitter"}
                    </code>
                  </div>
                  <div className="comparison-card">
                    <h4>
                      {"Semantic Chunking"}
                    </h4>
                    <p>
                      {"Groups content by meaning, keeping related ideas together."}
                    </p>
                    <code>
                      {"SemanticChunker"}
                    </code>
                  </div>
                  <div className="comparison-card">
                    <h4>
                      {"Document-Specific"}
                    </h4>
                    <p>
                      {"Special splitters for Markdown, code, HTML, etc."}
                    </p>
                    <code>
                      {"MarkdownHeaderTextSplitter"}
                    </code>
                  </div>
                </div>
                <h3>
                  {"Best Practices for Chunking"}
                </h3>
                <ul>
                  <li>
                    {"Chunk size should be large enough for context but small enough for specificity"}
                  </li>
                  <li>
                    {"Use overlap to avoid losing information at boundaries"}
                  </li>
                  <li>
                    {"Consider your document structure (headers, sections)"}
                  </li>
                  <li>
                    {"Test different chunk sizes for your specific use case"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Vector Databases"}
                </h2>
                <p>
                  {"Vector databases are specialized for storing and querying embeddings:"}
                </p>
                <div className="table-wrap">
                  <table className="comparison-table">
                    <thead>
                      <tr>
                        <th>
                          {"Database"}
                        </th>
                        <th>
                          {"Type"}
                        </th>
                        <th>
                          {"Best For"}
                        </th>
                        <th>
                          {"Key Features"}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>
                          <strong>
                            {"Pinecone"}
                          </strong>
                        </td>
                        <td>
                          {"Managed"}
                        </td>
                        <td>
                          {"Production apps"}
                        </td>
                        <td>
                          {"Fully managed, scales well"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            {"ChromaDB"}
                          </strong>
                        </td>
                        <td>
                          {"Open-source"}
                        </td>
                        <td>
                          {"Prototyping"}
                        </td>
                        <td>
                          {"Easy setup, Python-native"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            {"Weaviate"}
                          </strong>
                        </td>
                        <td>
                          {"Open-source"}
                        </td>
                        <td>
                          {"Complex queries"}
                        </td>
                        <td>
                          {"GraphQL, hybrid search"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            {"Qdrant"}
                          </strong>
                        </td>
                        <td>
                          {"Open-source"}
                        </td>
                        <td>
                          {"High performance"}
                        </td>
                        <td>
                          {"Rust-based, filtering"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            {"Milvus"}
                          </strong>
                        </td>
                        <td>
                          {"Open-source"}
                        </td>
                        <td>
                          {"Large scale"}
                        </td>
                        <td>
                          {"Billion-scale vectors"}
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <strong>
                            {"pgvector"}
                          </strong>
                        </td>
                        <td>
                          {"Extension"}
                        </td>
                        <td>
                          {"Existing Postgres"}
                        </td>
                        <td>
                          {"Use with Postgres DB"}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced RAG Techniques"}
                </h2>
                <h3>
                  {"1. Hybrid Search"}
                </h3>
                <p>
                  {"Combine semantic search with keyword search for better results:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Combine vector similarity with BM25 keyword search
from langchain.retrievers import EnsembleRetriever
from langchain.retrievers import BM25Retriever

bm25 = BM25Retriever.from_documents(docs)
vector_retriever = vectorstore.as_retriever()

ensemble = EnsembleRetriever(
    retrievers=[bm25, vector_retriever],
    weights=[0.4, 0.6]
)`}</code></pre>
                </div>
                <h3>
                  {"2. Reranking"}
                </h3>
                <p>
                  {"Use a more sophisticated model to reorder retrieved results:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.retrievers import ContextualCompressionRetriever
from langchain.retrievers.document_compressors import CohereRerank

reranker = CohereRerank(top_n=3)
compression_retriever = ContextualCompressionRetriever(
    base_compressor=reranker,
    base_retriever=retriever
)`}</code></pre>
                </div>
                <h3>
                  {"3. Query Transformation"}
                </h3>
                <p>
                  {"Improve queries before searching:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Query expansion:"}
                    </strong>
                    {" Generate multiple versions of the query"}
                  </li>
                  <li>
                    <strong>
                      {"HyDE:"}
                    </strong>
                    {" Generate a hypothetical answer, then search for similar content"}
                  </li>
                  <li>
                    <strong>
                      {"Step-back prompting:"}
                    </strong>
                    {" Ask a more general question first"}
                  </li>
                </ul>
                <h3>
                  {"4. Parent Document Retrieval"}
                </h3>
                <p>
                  {"Store small chunks for retrieval but return larger parent documents for context:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.retrievers import ParentDocumentRetriever

retriever = ParentDocumentRetriever(
    vectorstore=vectorstore,
    docstore=docstore,
    child_splitter=child_splitter,  # Small chunks
    parent_splitter=parent_splitter  # Large chunks
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common RAG Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Document Q&A"}
                    </h4>
                    <p>
                      {"Answer questions about PDFs, Word docs, and other files."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Customer Support"}
                    </h4>
                    <p>
                      {"AI that answers based on knowledge base articles and FAQs."}
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
                      {"Research Assistant"}
                    </h4>
                    <p>
                      {"Search and synthesize information from research papers."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Enterprise Search"}
                    </h4>
                    <p>
                      {"Find information across company documents and wikis."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Legal/Compliance"}
                    </h4>
                    <p>
                      {"Query regulations, contracts, and legal documents."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Evaluation & Monitoring"}
                </h2>
                <p>
                  {"Measuring RAG quality is crucial:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Retrieval metrics:"}
                    </strong>
                    {" Precision, recall, MRR (Mean Reciprocal Rank)"}
                  </li>
                  <li>
                    <strong>
                      {"Generation metrics:"}
                    </strong>
                    {" Faithfulness, relevance, groundedness"}
                  </li>
                  <li>
                    <strong>
                      {"End-to-end:"}
                    </strong>
                    {" Answer correctness, user satisfaction"}
                  </li>
                </ul>
                <p>
                  {"Tools like "}
                  <strong>
                    {"Ragas"}
                  </strong>
                  {", "}
                  <strong>
                    {"TruLens"}
                  </strong>
                  {", and "}
                  <strong>
                    {"LangSmith"}
                  </strong>
                  {" help evaluate RAG systems automatically."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Production RAG Systems"}
                </h2>
                <p>
                  {"Our Agentic AI program covers RAG in depth - from basic document Q&A to advanced production systems. Build real projects with hands-on mentorship."}
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
                      {"Deep dive into storing and querying embeddings"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"What is LangChain?"}
                    </h4>
                    {" "}
                    <p>
                      {"The framework that makes RAG easy to build"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/prompt-engineering" className="related-article-card">
                    <h4>
                      {"Prompt Engineering Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Optimize prompts for better RAG responses"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about RAG and building AI knowledge systems."} />
    </>
  );
}
