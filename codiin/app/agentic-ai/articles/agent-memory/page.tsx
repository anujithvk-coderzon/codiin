import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Agent Memory Systems: Building AI That Remembers",
  description: "Learn about Agent Memory Systems - short-term, long-term, episodic, and semantic memory implementations for AI agents. Build conversational agents that remember.",
  keywords: ["AI agent memory", "conversational memory", "LangChain memory", "chat history", "semantic memory", "episodic memory", "agent state management"],
  alternates: { canonical: "/agentic-ai/articles/agent-memory" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/agent-memory",
    title: "Agent Memory Systems: Building AI That Remembers",
    description: "Master memory architectures for AI agents - from simple chat history to complex semantic memory systems.",
    images: ["/images/agent-memory-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Agent Memory Systems: Building AI That Remembers | CODiiN",
    description: "Master memory architectures for AI agents.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Agent Memory Systems: Building AI That Remembers",
  "description": "Comprehensive guide to implementing memory systems for AI agents",
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

export default function AgenticAiAgentMemoryPage() {
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
                {"Agent Memory"}
              </span>
            </div>
            <h1>
              {"Agent Memory Systems"}
            </h1>
            <p className="article-subtitle">
              {"Building AI Agents That Remember Context and Learn Over Time"}
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
                  {"Why Memory Matters for AI Agents"}
                </h2>
                <p>
                  {"Without memory, every interaction with an AI agent starts from zero. The agent has no idea who you are, what you discussed before, or what preferences you've expressed. Memory transforms a stateless AI into a contextual, personalized assistant."}
                </p>
                <p>
                  {"Memory is critical for:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Continuity:"}
                    </strong>
                    {" Maintaining context across conversation turns"}
                  </li>
                  <li>
                    <strong>
                      {"Personalization:"}
                    </strong>
                    {" Remembering user preferences and history"}
                  </li>
                  <li>
                    <strong>
                      {"Learning:"}
                    </strong>
                    {" Improving responses based on past interactions"}
                  </li>
                  <li>
                    <strong>
                      {"Complex tasks:"}
                    </strong>
                    {" Tracking multi-step workflows and state"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of Agent Memory"}
                </h2>
                <p>
                  {"AI agent memory can be categorized into different types, each serving a specific purpose:"}
                </p>
                <h3>
                  {"1. Short-Term (Working) Memory"}
                </h3>
                <p>
                  {"Holds the current conversation context. This is what most chatbots use - the recent message history that fits within the LLM's context window."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationBufferMemory

# Simple buffer - keeps all messages
memory = ConversationBufferMemory()
memory.save_context(
    {"input": "My name is Alice"},
    {"output": "Hello Alice! How can I help you?"}
)

# Retrieve the conversation
print(memory.load_memory_variables({}))`}</code></pre>
                </div>
                <h3>
                  {"2. Long-Term Memory"}
                </h3>
                <p>
                  {"Persists information across sessions. Uses external storage (databases, vector stores) to remember user information, preferences, and important facts indefinitely."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import VectorStoreRetrieverMemory
from langchain_openai import OpenAIEmbeddings
from langchain_community.vectorstores import Chroma

# Create a vector store for long-term memory
embeddings = OpenAIEmbeddings()
vectorstore = Chroma(
    collection_name="long_term_memory",
    embedding_function=embeddings,
    persist_directory="./memory_db"
)

# Create retriever-based memory
retriever = vectorstore.as_retriever(search_kwargs={"k": 5})
memory = VectorStoreRetrieverMemory(retriever=retriever)

# Save important information
memory.save_context(
    {"input": "I'm allergic to peanuts"},
    {"output": "I've noted that you have a peanut allergy."}
)`}</code></pre>
                </div>
                <h3>
                  {"3. Episodic Memory"}
                </h3>
                <p>
                  {"Stores specific experiences or events with temporal context. Useful for remembering what happened in past sessions, including the sequence of events."}
                </p>
                <div className="code-block">
                  <pre><code>{`from datetime import datetime

class EpisodicMemory:
    def __init__(self):
        self.episodes = []

    def save_episode(self, event, context=None):
        episode = {
            "timestamp": datetime.now().isoformat(),
            "event": event,
            "context": context or {}
        }
        self.episodes.append(episode)

    def recall_recent(self, n=5):
        return self.episodes[-n:]

    def search_episodes(self, query):
        # In practice, use semantic search
        return [ep for ep in self.episodes
                if query.lower() in ep["event"].lower()]

# Usage
memory = EpisodicMemory()
memory.save_episode(
    "User completed onboarding",
    {"preferences": ["dark_mode", "email_notifications"]}
)
memory.save_episode("User asked about pricing plans")`}</code></pre>
                </div>
                <h3>
                  {"4. Semantic Memory"}
                </h3>
                <p>
                  {"Stores facts, concepts, and general knowledge about the user or domain. Unlike episodic memory, it's not tied to specific events but represents learned information."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_community.graphs import Neo4jGraph

# Semantic memory using knowledge graphs
class SemanticMemory:
    def __init__(self):
        self.facts = {}  # Entity -> facts mapping

    def learn(self, entity, relation, value):
        if entity not in self.facts:
            self.facts[entity] = {}
        self.facts[entity][relation] = value

    def recall(self, entity, relation=None):
        if entity not in self.facts:
            return None
        if relation:
            return self.facts[entity].get(relation)
        return self.facts[entity]

# Usage
memory = SemanticMemory()
memory.learn("user", "name", "Alice")
memory.learn("user", "role", "software engineer")
memory.learn("user", "expertise", ["Python", "JavaScript"])

print(memory.recall("user"))
# {'name': 'Alice', 'role': 'software engineer', 'expertise': ['Python', 'JavaScript']}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LangChain Memory Types"}
                </h2>
                <p>
                  {"LangChain provides several built-in memory implementations:"}
                </p>
                <h3>
                  {"ConversationBufferMemory"}
                </h3>
                <p>
                  {"Stores the entire conversation history. Simple but can exceed token limits."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationBufferMemory

memory = ConversationBufferMemory(return_messages=True)
# Keeps all messages - good for short conversations`}</code></pre>
                </div>
                <h3>
                  {"ConversationBufferWindowMemory"}
                </h3>
                <p>
                  {"Keeps only the last K conversation turns. Prevents context overflow."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationBufferWindowMemory

memory = ConversationBufferWindowMemory(k=5, return_messages=True)
# Only keeps the last 5 exchanges`}</code></pre>
                </div>
                <h3>
                  {"ConversationSummaryMemory"}
                </h3>
                <p>
                  {"Uses an LLM to summarize the conversation, keeping a condensed version."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationSummaryMemory
from langchain_openai import ChatOpenAI

llm = ChatOpenAI(model="gpt-4")
memory = ConversationSummaryMemory(llm=llm)

# Instead of storing all messages, stores a running summary
# "The user introduced themselves as Alice, a software engineer..."`}</code></pre>
                </div>
                <h3>
                  {"ConversationSummaryBufferMemory"}
                </h3>
                <p>
                  {"Hybrid approach: keeps recent messages in full, summarizes older ones."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationSummaryBufferMemory

memory = ConversationSummaryBufferMemory(
    llm=llm,
    max_token_limit=1000  # Summarize when exceeding this limit
)
# Best of both worlds: recent context + summarized history`}</code></pre>
                </div>
                <h3>
                  {"ConversationEntityMemory"}
                </h3>
                <p>
                  {"Extracts and remembers information about entities (people, places, things)."}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain.memory import ConversationEntityMemory

memory = ConversationEntityMemory(llm=llm)

# After conversation, the memory might contain:
# {
#   "Alice": "Software engineer, interested in AI",
#   "Project X": "A machine learning project Alice is working on"
# }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a Production Memory System"}
                </h2>
                <p>
                  {"Real-world agents often need a combination of memory types. Here's a comprehensive example:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.memory import ConversationBufferWindowMemory
from datetime import datetime
import json

class AgentMemorySystem:
    def __init__(self, user_id: str):
        self.user_id = user_id
        self.llm = ChatOpenAI(model="gpt-4")
        self.embeddings = OpenAIEmbeddings()

        # Short-term: Recent conversation
        self.short_term = ConversationBufferWindowMemory(
            k=10,
            return_messages=True
        )

        # Long-term: Vector store for semantic search
        self.long_term = Chroma(
            collection_name=f"user_{user_id}_memory",
            embedding_function=self.embeddings,
            persist_directory=f"./memory/{user_id}"
        )

        # User profile: Structured facts
        self.profile = self._load_profile()

    def _load_profile(self):
        try:
            with open(f"./profiles/{self.user_id}.json") as f:
                return json.load(f)
        except FileNotFoundError:
            return {"facts": {}, "preferences": {}}

    def save_profile(self):
        with open(f"./profiles/{self.user_id}.json", "w") as f:
            json.dump(self.profile, f)

    def add_message(self, role: str, content: str):
        # Add to short-term
        if role == "user":
            self.short_term.save_context(
                {"input": content},
                {"output": ""}  # Will be filled later
            )

        # Check for important information to persist
        self._extract_and_store_facts(content)

    def _extract_and_store_facts(self, content: str):
        # Use LLM to extract important facts
        extraction_prompt = f"""
        Extract any important facts about the user from this message.
        Return as JSON with keys: name, preferences, important_info
        Message: {content}
        """
        # In practice, call LLM here and update profile

        # Also store in long-term memory for semantic search
        self.long_term.add_texts(
            [content],
            metadatas=[{"timestamp": datetime.now().isoformat()}]
        )

    def get_relevant_context(self, query: str) -> str:
        # Get recent conversation
        recent = self.short_term.load_memory_variables({})

        # Search long-term memory
        relevant_docs = self.long_term.similarity_search(query, k=3)

        # Combine with user profile
        context = f"""
        User Profile: {json.dumps(self.profile)}

        Recent Conversation: {recent}

        Relevant History: {[doc.page_content for doc in relevant_docs]}
        """
        return context

# Usage
memory = AgentMemorySystem(user_id="user_123")
memory.add_message("user", "I prefer Python over JavaScript")
context = memory.get_relevant_context("What programming language should I use?")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Memory Persistence Strategies"}
                </h2>
                <h3>
                  {"Database Storage"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import sqlite3
from datetime import datetime

class SQLiteMemory:
    def __init__(self, db_path: str):
        self.conn = sqlite3.connect(db_path)
        self._create_tables()

    def _create_tables(self):
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS conversations (
                id INTEGER PRIMARY KEY,
                user_id TEXT,
                role TEXT,
                content TEXT,
                timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
            )
        """)
        self.conn.execute("""
            CREATE TABLE IF NOT EXISTS user_facts (
                id INTEGER PRIMARY KEY,
                user_id TEXT,
                key TEXT,
                value TEXT,
                UNIQUE(user_id, key)
            )
        """)
        self.conn.commit()

    def save_message(self, user_id: str, role: str, content: str):
        self.conn.execute(
            "INSERT INTO conversations (user_id, role, content) VALUES (?, ?, ?)",
            (user_id, role, content)
        )
        self.conn.commit()

    def get_recent_messages(self, user_id: str, limit: int = 10):
        cursor = self.conn.execute(
            """SELECT role, content FROM conversations
               WHERE user_id = ? ORDER BY timestamp DESC LIMIT ?""",
            (user_id, limit)
        )
        return list(reversed(cursor.fetchall()))`}</code></pre>
                </div>
                <h3>
                  {"Redis for Fast Access"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import redis
import json

class RedisMemory:
    def __init__(self, host="localhost", port=6379):
        self.client = redis.Redis(host=host, port=port)

    def save_context(self, user_id: str, messages: list, ttl: int = 3600):
        key = f"chat:{user_id}"
        self.client.setex(key, ttl, json.dumps(messages))

    def load_context(self, user_id: str) -> list:
        key = f"chat:{user_id}"
        data = self.client.get(key)
        return json.loads(data) if data else []

    def save_user_fact(self, user_id: str, key: str, value: str):
        self.client.hset(f"user:{user_id}", key, value)

    def get_user_facts(self, user_id: str) -> dict:
        return self.client.hgetall(f"user:{user_id}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Layer your memory:"}
                    </strong>
                    {" Combine short-term buffer with long-term storage for optimal context"}
                  </li>
                  <li>
                    <strong>
                      {"Be selective:"}
                    </strong>
                    {" Don't store everything - extract and persist only important information"}
                  </li>
                  <li>
                    <strong>
                      {"Manage token limits:"}
                    </strong>
                    {" Use summarization when conversation history grows too long"}
                  </li>
                  <li>
                    <strong>
                      {"Privacy first:"}
                    </strong>
                    {" Allow users to view and delete their stored data"}
                  </li>
                  <li>
                    <strong>
                      {"Handle stale data:"}
                    </strong>
                    {" Implement TTL or periodic cleanup for outdated information"}
                  </li>
                  <li>
                    <strong>
                      {"Test retrieval:"}
                    </strong>
                    {" Ensure your semantic search actually retrieves relevant context"}
                  </li>
                  <li>
                    <strong>
                      {"Consider latency:"}
                    </strong>
                    {" Memory operations shouldn't slow down response times significantly"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Patterns"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Conversation + Summary"}
                    </h4>
                    <p>
                      {"Keep recent messages verbatim, summarize older context. Best for chat applications."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Entity + Vector Store"}
                    </h4>
                    <p>
                      {"Track named entities and use vector search for relevant history. Good for CRM-style agents."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Graph-Based Memory"}
                    </h4>
                    <p>
                      {"Use knowledge graphs to store relationships. Best for complex domain knowledge."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Hierarchical Memory"}
                    </h4>
                    <p>
                      {"Multiple layers from working memory to long-term storage. Mimics human memory."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Agent Memory with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers memory systems in-depth, from simple conversation buffers to sophisticated multi-layer architectures. Build agents that truly remember and learn."}
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
                      {"Learn the framework that powers agent memory systems"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph: Stateful AI Workflows"}
                    </h4>
                    {" "}
                    <p>
                      {"Build agents with persistent state across interactions"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/vector-databases" className="related-article-card">
                    <h4>
                      {"Vector Databases Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"The backbone of long-term semantic memory"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Agent Memory Systems and Agentic AI."} />
    </>
  );
}
