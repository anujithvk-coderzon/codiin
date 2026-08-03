import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "AI Cost Optimization: Reduce LLM Spending",
  description: "Reduce AI costs with token optimization, caching, batching, and model selection strategies. Production cost management for LLM applications.",
  keywords: ["AI cost optimization", "LLM costs", "token optimization", "API costs", "caching LLM", "reduce AI spending", "model selection"],
  alternates: { canonical: "/agentic-ai/articles/cost-optimization" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/cost-optimization",
    title: "AI Cost Optimization: Reduce LLM Spending",
    description: "Strategies to minimize AI costs without sacrificing quality.",
    images: ["/images/cost-optimization-og.jpg"],
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiCostOptimizationPage() {
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
                {"Cost Optimization"}
              </span>
            </div>
            <h1>
              {"AI Cost Optimization"}
            </h1>
            <p className="article-subtitle">
              {"Strategies to Reduce LLM Spending Without Sacrificing Quality"}
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
                  {"Understanding LLM Costs"}
                </h2>
                <p>
                  {"LLM costs are primarily driven by tokens - the units of text processed:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Approximate pricing (as of Dec 2024)
| Model          | Input (per 1M tokens) | Output (per 1M tokens) |
|----------------|----------------------|------------------------|
| GPT-4 Turbo    | $10.00               | $30.00                 |
| GPT-4o         | $5.00                | $15.00                 |
| GPT-3.5 Turbo  | $0.50                | $1.50                  |
| Claude 3 Opus  | $15.00               | $75.00                 |
| Claude 3 Sonnet| $3.00                | $15.00                 |
| Claude 3 Haiku | $0.25                | $1.25                  |

# Cost calculation
cost = (input_tokens * input_price + output_tokens * output_price) / 1_000_000`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Token Optimization"}
                </h2>
                <h3>
                  {"Reduce Prompt Length"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Before: Verbose prompt (150 tokens)
prompt = """
You are a helpful AI assistant. Your task is to analyze the
following text and provide a comprehensive summary. Please
ensure that your summary captures all the key points and
main ideas from the original text. Be thorough but concise.

Text to summarize:
{text}
"""

# After: Concise prompt (30 tokens)
prompt = """Summarize the key points:
{text}"""

# Savings: 80% reduction in system prompt tokens`}</code></pre>
                </div>
                <h3>
                  {"Limit Output Length"}
                </h3>
                <div className="code-block">
                  <pre><code>{`response = client.chat.completions.create(
    model="gpt-4",
    messages=[...],
    max_tokens=150,  # Limit output
    temperature=0.7
)

# Better: Give explicit length instructions
prompt = "Answer in 2-3 sentences: {question}"`}</code></pre>
                </div>
                <h3>
                  {"Truncate Context"}
                </h3>
                <div className="code-block">
                  <pre><code>{`def truncate_context(text: str, max_tokens: int = 2000) -> str:
    """Truncate text to stay within token limit."""
    import tiktoken
    enc = tiktoken.encoding_for_model("gpt-4")
    tokens = enc.encode(text)

    if len(tokens) > max_tokens:
        tokens = tokens[:max_tokens]
        return enc.decode(tokens) + "..."

    return text

# Use in RAG
context = truncate_context("\\n".join(retrieved_docs), max_tokens=2000)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Caching Strategies"}
                </h2>
                <h3>
                  {"Semantic Caching"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain.cache import InMemoryCache, RedisSemanticCache
from langchain_openai import OpenAIEmbeddings
import langchain

# Simple in-memory cache
langchain.llm_cache = InMemoryCache()

# Semantic cache - matches similar queries
langchain.llm_cache = RedisSemanticCache(
    redis_url="redis://localhost:6379",
    embedding=OpenAIEmbeddings(),
    score_threshold=0.95  # Similarity threshold
)

# Now duplicate/similar queries hit cache
llm = ChatOpenAI(model="gpt-4")
llm.invoke("What is Python?")  # API call
llm.invoke("What is Python?")  # Cache hit
llm.invoke("Tell me about Python")  # Cache hit (semantic)`}</code></pre>
                </div>
                <h3>
                  {"Custom Response Cache"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import hashlib
import json
import redis

class LLMCache:
    def __init__(self, redis_client, ttl=3600):
        self.redis = redis_client
        self.ttl = ttl

    def _key(self, messages: list, model: str) -> str:
        content = json.dumps({"messages": messages, "model": model})
        return f"llm:{hashlib.sha256(content.encode()).hexdigest()}"

    def get(self, messages: list, model: str):
        key = self._key(messages, model)
        cached = self.redis.get(key)
        return json.loads(cached) if cached else None

    def set(self, messages: list, model: str, response: dict):
        key = self._key(messages, model)
        self.redis.setex(key, self.ttl, json.dumps(response))

# Usage
cache = LLMCache(redis.Redis())

def cached_completion(messages, model="gpt-4"):
    cached = cache.get(messages, model)
    if cached:
        return cached

    response = client.chat.completions.create(
        model=model,
        messages=messages
    )
    cache.set(messages, model, response.dict())
    return response`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Selection Strategy"}
                </h2>
                <div className="code-block">
                  <pre><code>{`class SmartModelSelector:
    """Route queries to appropriate models based on complexity."""

    def __init__(self):
        self.classifier = ChatOpenAI(model="gpt-3.5-turbo")  # Cheap classifier

    def classify_complexity(self, query: str) -> str:
        response = self.classifier.invoke(
            f"Classify this query complexity as 'simple', 'medium', or 'complex': {query}"
        )
        return response.content.strip().lower()

    def get_model(self, query: str) -> str:
        complexity = self.classify_complexity(query)

        if complexity == "simple":
            return "gpt-3.5-turbo"  # $0.002/1K tokens
        elif complexity == "medium":
            return "gpt-4o-mini"    # $0.15/1K tokens
        else:
            return "gpt-4"          # $10/1K tokens

# Usage
selector = SmartModelSelector()

def smart_query(question: str):
    model = selector.get_model(question)
    print(f"Using {model} for: {question[:50]}...")

    return ChatOpenAI(model=model).invoke(question)

# Simple queries use cheap models
smart_query("What is 2+2?")  # Uses GPT-3.5

# Complex queries use powerful models
smart_query("Explain the implications of quantum entanglement...")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Batching Requests"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import asyncio
from openai import AsyncOpenAI

client = AsyncOpenAI()

async def batch_process(queries: list[str], batch_size: int = 10):
    """Process queries in batches with rate limiting."""
    results = []

    for i in range(0, len(queries), batch_size):
        batch = queries[i:i + batch_size]

        # Process batch concurrently
        tasks = [
            client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[{"role": "user", "content": q}]
            )
            for q in batch
        ]

        batch_results = await asyncio.gather(*tasks)
        results.extend(batch_results)

        # Rate limiting delay
        await asyncio.sleep(1)

    return results

# Process 100 queries efficiently
queries = ["Query " + str(i) for i in range(100)]
results = asyncio.run(batch_process(queries))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Use Local Models"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Use Ollama for development and simple queries
from langchain_community.llms import Ollama

# Local model - $0 cost
local_llm = Ollama(model="llama2")

# Use local for:
# - Development and testing
# - Simple classification
# - Non-critical queries
# - Privacy-sensitive data

def cost_aware_query(query: str, require_quality: bool = False):
    if require_quality:
        return ChatOpenAI(model="gpt-4").invoke(query)
    else:
        return local_llm.invoke(query)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Monitor and Track Costs"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import tiktoken
from dataclasses import dataclass
from typing import Dict

@dataclass
class UsageTracker:
    model_usage: Dict[str, Dict] = None

    def __post_init__(self):
        self.model_usage = {}

    def track(self, model: str, input_tokens: int, output_tokens: int):
        if model not in self.model_usage:
            self.model_usage[model] = {
                "calls": 0, "input_tokens": 0, "output_tokens": 0
            }
        self.model_usage[model]["calls"] += 1
        self.model_usage[model]["input_tokens"] += input_tokens
        self.model_usage[model]["output_tokens"] += output_tokens

    def get_costs(self, prices: dict) -> dict:
        costs = {}
        for model, usage in self.model_usage.items():
            if model in prices:
                input_cost = usage["input_tokens"] * prices[model]["input"] / 1_000_000
                output_cost = usage["output_tokens"] * prices[model]["output"] / 1_000_000
                costs[model] = input_cost + output_cost
        return costs

# Usage
tracker = UsageTracker()

def tracked_completion(messages, model="gpt-4"):
    response = client.chat.completions.create(model=model, messages=messages)

    tracker.track(
        model=model,
        input_tokens=response.usage.prompt_tokens,
        output_tokens=response.usage.completion_tokens
    )

    return response

# Check costs
prices = {
    "gpt-4": {"input": 10, "output": 30},
    "gpt-3.5-turbo": {"input": 0.5, "output": 1.5}
}
print(tracker.get_costs(prices))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cost Optimization Checklist"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Prompt Engineering"}
                    </h4>
                    <ul>
                      <li>
                        {"Keep prompts concise"}
                      </li>
                      <li>
                        {"Limit output length"}
                      </li>
                      <li>
                        {"Remove redundant context"}
                      </li>
                    </ul>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Caching"}
                    </h4>
                    <ul>
                      <li>
                        {"Cache common queries"}
                      </li>
                      <li>
                        {"Use semantic caching"}
                      </li>
                      <li>
                        {"Set appropriate TTLs"}
                      </li>
                    </ul>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Model Selection"}
                    </h4>
                    <ul>
                      <li>
                        {"Use cheaper models when possible"}
                      </li>
                      <li>
                        {"Route by complexity"}
                      </li>
                      <li>
                        {"Consider local models"}
                      </li>
                    </ul>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Monitoring"}
                    </h4>
                    <ul>
                      <li>
                        {"Track token usage"}
                      </li>
                      <li>
                        {"Set budget alerts"}
                      </li>
                      <li>
                        {"Review usage patterns"}
                      </li>
                    </ul>
                  </div>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Learn Production AI Cost Management"}
                </h2>
                <p>
                  {"Our Agentic AI program covers cost optimization for production deployments. Build efficient, cost-effective AI applications."}
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
                  <Link href="/agentic-ai/articles/ollama" className="related-article-card">
                    <h4>
                      {"Ollama: Local LLMs"}
                    </h4>
                    {" "}
                    <p>
                      {"Run models locally for free"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langsmith" className="related-article-card">
                    <h4>
                      {"LangSmith: Observability"}
                    </h4>
                    {" "}
                    <p>
                      {"Monitor costs and performance"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/llm-foundations" className="related-article-card">
                    <h4>
                      {"LLM Foundations"}
                    </h4>
                    {" "}
                    <p>
                      {"Understanding token costs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn about AI cost optimization."} />
    </>
  );
}
