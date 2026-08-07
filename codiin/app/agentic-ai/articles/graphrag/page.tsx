import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GraphRAG: Knowledge Graphs + RAG",
  description: "Learn GraphRAG - combining knowledge graphs with RAG for better retrieval. Microsoft's approach to structured knowledge + LLMs.",
  keywords: ["GraphRAG", "knowledge graph", "Neo4j", "structured RAG", "Microsoft GraphRAG", "graph database AI"],
  alternates: { canonical: "/agentic-ai/articles/graphrag" },
  openGraph: {
    type: "website",
    url: "/agentic-ai/articles/graphrag",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiGraphragPage() {
  return (
    <>
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
                {"GraphRAG"}
              </span>
            </div>
            <h1>
              {"GraphRAG"}
            </h1>
            <p className="article-subtitle">
              {"Combining Knowledge Graphs with Retrieval Augmented Generation"}
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
                  {"What is GraphRAG?"}
                </h2>
                <p>
                  {"GraphRAG enhances traditional RAG by structuring knowledge as a graph. Instead of just retrieving text chunks, it understands relationships between entities - enabling complex queries that span multiple connected concepts."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Entity relationships:"}
                    </strong>
                    {" Understand how concepts connect"}
                  </li>
                  <li>
                    <strong>
                      {"Multi-hop reasoning:"}
                    </strong>
                    {" Answer questions requiring multiple facts"}
                  </li>
                  <li>
                    <strong>
                      {"Global understanding:"}
                    </strong>
                    {" Summarize across entire document sets"}
                  </li>
                  <li>
                    <strong>
                      {"Structured retrieval:"}
                    </strong>
                    {" Query by relationship, not just similarity"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"GraphRAG vs Traditional RAG"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Traditional RAG"}
                    </h4>
                    <p>
                      {"Retrieves similar text chunks. Struggles with \"What are all the relationships between X and Y?\""}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"GraphRAG"}
                    </h4>
                    <p>
                      {"Traverses knowledge graph. Excels at relational and summarization queries."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a Knowledge Graph"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain_experimental.graph_transformers import LLMGraphTransformer
from langchain_community.graphs import Neo4jGraph

# Initialize graph database
graph = Neo4jGraph(
    url="bolt://localhost:7687",
    username="neo4j",
    password="password"
)

# Create graph transformer
llm = ChatOpenAI(model="gpt-4", temperature=0)
transformer = LLMGraphTransformer(llm=llm)

# Extract entities and relationships from documents
documents = [...]  # Your documents
graph_documents = transformer.convert_to_graph_documents(documents)

# Store in Neo4j
graph.add_graph_documents(graph_documents)

# Query the graph
result = graph.query("""
    MATCH (p:Person)-[:WORKS_FOR]->(c:Company)
    WHERE c.name = 'Acme Corp'
    RETURN p.name, p.role
""")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Microsoft GraphRAG"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install Microsoft GraphRAG
pip install graphrag

# Initialize project
python -m graphrag.index --init --root ./my_project

# Index documents
python -m graphrag.index --root ./my_project

# Query
python -m graphrag.query \\
    --root ./my_project \\
    --method global \\
    --query "What are the main themes in the documents?"

# Python usage
from graphrag.query.llm.oai.chat_openai import ChatOpenAI
from graphrag.query.structured_search.global_search.search import GlobalSearch

# Global search for high-level summarization
global_search = GlobalSearch(
    llm=ChatOpenAI(model="gpt-4"),
    context_builder=context_builder,
    response_type="multiple paragraphs"
)

result = await global_search.asearch("What are the key findings?")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Neo4j + LangChain GraphRAG"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from langchain_community.graphs import Neo4jGraph
from langchain.chains import GraphCypherQAChain
from langchain_openai import ChatOpenAI

# Connect to Neo4j
graph = Neo4jGraph(
    url="bolt://localhost:7687",
    username="neo4j",
    password="password"
)

# Create QA chain that generates Cypher queries
chain = GraphCypherQAChain.from_llm(
    llm=ChatOpenAI(model="gpt-4"),
    graph=graph,
    verbose=True,
    return_intermediate_steps=True
)

# Natural language to graph query
result = chain.invoke({
    "query": "Who are all the people connected to Project Alpha?"
})

print(result["result"])
# The LLM generates: MATCH (p:Person)-[:WORKS_ON]->(proj:Project {name: 'Project Alpha'}) RETURN p`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Hybrid Vector + Graph Retrieval"}
                </h2>
                <div className="code-block">
                  <pre><code>{`class HybridGraphRAG:
    def __init__(self):
        self.vector_store = Chroma(...)
        self.graph = Neo4jGraph(...)
        self.llm = ChatOpenAI(model="gpt-4")

    def retrieve(self, query: str) -> dict:
        # 1. Vector search for relevant chunks
        vector_results = self.vector_store.similarity_search(query, k=3)

        # 2. Extract entities from query
        entities = self.extract_entities(query)

        # 3. Graph traversal for relationships
        graph_results = []
        for entity in entities:
            neighbors = self.graph.query(f"""
                MATCH (e {{name: '{entity}'}})-[r]-(connected)
                RETURN e, type(r) as relation, connected
                LIMIT 10
            """)
            graph_results.extend(neighbors)

        return {
            "text_context": [doc.page_content for doc in vector_results],
            "graph_context": graph_results
        }

    def answer(self, query: str) -> str:
        context = self.retrieve(query)

        prompt = f"""Use both the text and graph context to answer.

Text Context:
{context['text_context']}

Graph Context (Entity Relationships):
{context['graph_context']}

Question: {query}"""

        return self.llm.invoke(prompt).content`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Enterprise Knowledge"}
                    </h4>
                    <p>
                      {"Map organizational relationships, projects, and dependencies."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Research Analysis"}
                    </h4>
                    <p>
                      {"Connect research papers, authors, and citations."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Customer 360"}
                    </h4>
                    <p>
                      {"Unified view of customer interactions and history."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Compliance"}
                    </h4>
                    <p>
                      {"Track regulatory relationships and requirements."}
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
                      {"Start with clear schema:"}
                    </strong>
                    {" Define entity types and relationships upfront"}
                  </li>
                  <li>
                    <strong>
                      {"Validate extractions:"}
                    </strong>
                    {" LLM entity extraction isn't perfect"}
                  </li>
                  <li>
                    <strong>
                      {"Combine approaches:"}
                    </strong>
                    {" Use vector + graph for best results"}
                  </li>
                  <li>
                    <strong>
                      {"Index appropriately:"}
                    </strong>
                    {" Create graph indexes for common queries"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Advanced RAG Techniques"}
                </h2>
                <p>
                  {"Our Agentic AI program covers GraphRAG and advanced retrieval patterns."}
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
                      {"RAG Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Understanding retrieval augmented generation"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/vector-databases" className="related-article-card">
                    <h4>
                      {"Vector Databases"}
                    </h4>
                    {" "}
                    <p>
                      {"Storage for embeddings"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

    </>
  );
}
