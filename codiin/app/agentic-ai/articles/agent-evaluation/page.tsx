import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Agent Evaluation: Testing AI Quality",
  description: "Learn how to evaluate AI agents - metrics, testing strategies, benchmarks, and quality assurance for LLM applications.",
  keywords: ["AI evaluation", "LLM testing", "agent benchmarks", "AI quality metrics", "RAG evaluation", "prompt testing", "AI QA"],
  alternates: { canonical: "/agentic-ai/articles/agent-evaluation" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/agent-evaluation",
    title: "Agent Evaluation: Testing AI Quality",
    description: "Master AI agent evaluation - metrics, testing, and quality assurance.",
    images: ["/images/agent-evaluation-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Agent Evaluation Guide | CODiiN",
    description: "Test and measure AI agent quality.",
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
  "headline": "Agent Evaluation: Testing AI Quality",
  "description": "Comprehensive guide to evaluating and testing AI agents",
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

export default function AgenticAiAgentEvaluationPage() {
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
                {"Agent Evaluation"}
              </span>
            </div>
            <h1>
              {"Agent Evaluation"}
            </h1>
            <p className="article-subtitle">
              {"Testing and Measuring AI Agent Quality"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"14 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why Evaluate AI Agents?"}
                </h2>
                <p>
                  {"Unlike traditional software with deterministic outputs, AI agents produce variable responses. Proper evaluation ensures:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Quality assurance:"}
                    </strong>
                    {" Verify agents meet accuracy requirements"}
                  </li>
                  <li>
                    <strong>
                      {"Regression detection:"}
                    </strong>
                    {" Catch degradation from prompt/model changes"}
                  </li>
                  <li>
                    <strong>
                      {"Comparison:"}
                    </strong>
                    {" Choose between different approaches"}
                  </li>
                  <li>
                    <strong>
                      {"Optimization:"}
                    </strong>
                    {" Guide improvements with measurable metrics"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Evaluation Metrics"}
                </h2>
                <h3>
                  {"Common Metrics"}
                </h3>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Accuracy"}
                    </h4>
                    <p>
                      {"Percentage of correct answers. Good for factual Q&A with known answers."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Relevance"}
                    </h4>
                    <p>
                      {"How relevant is the response to the query? Often LLM-judged."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Faithfulness"}
                    </h4>
                    <p>
                      {"Is the response grounded in the context (RAG)? Measures hallucination."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Latency"}
                    </h4>
                    <p>
                      {"Response time. Critical for user experience."}
                    </p>
                  </div>
                </div>
                <h3>
                  {"RAG-Specific Metrics"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# RAG Evaluation Metrics

1. Context Precision
   - How much retrieved context is relevant?
   - Relevant chunks / Total chunks retrieved

2. Context Recall
   - Did we retrieve all relevant information?
   - Relevant chunks retrieved / Total relevant chunks available

3. Answer Faithfulness
   - Is the answer grounded in context?
   - Claims supported by context / Total claims in answer

4. Answer Relevancy
   - Does the answer address the question?
   - LLM-judged score 0-1`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Evaluation Frameworks"}
                </h2>
                <h3>
                  {"RAGAS (RAG Assessment)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from ragas import evaluate
from ragas.metrics import (
    faithfulness,
    answer_relevancy,
    context_precision,
    context_recall
)
from datasets import Dataset

# Prepare evaluation data
eval_data = {
    "question": [
        "What is the return policy?",
        "How do I contact support?"
    ],
    "answer": [
        "You can return items within 30 days.",
        "Contact support at help@example.com"
    ],
    "contexts": [
        ["Our return policy allows returns within 30 days of purchase."],
        ["For support, email help@example.com or call 1-800-XXX"]
    ],
    "ground_truth": [
        "30-day return policy",
        "help@example.com"
    ]
}

dataset = Dataset.from_dict(eval_data)

# Run evaluation
results = evaluate(
    dataset,
    metrics=[
        faithfulness,
        answer_relevancy,
        context_precision,
        context_recall
    ]
)

print(results)
# {'faithfulness': 0.95, 'answer_relevancy': 0.92, ...}`}</code></pre>
                </div>
                <h3>
                  {"DeepEval"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from deepeval import evaluate
from deepeval.metrics import (
    GEval,
    FaithfulnessMetric,
    AnswerRelevancyMetric
)
from deepeval.test_case import LLMTestCase

# Create test cases
test_cases = [
    LLMTestCase(
        input="What is machine learning?",
        actual_output="Machine learning is a subset of AI...",
        expected_output="ML is AI that learns from data",
        retrieval_context=["ML definition from textbook..."]
    )
]

# Define metrics
faithfulness = FaithfulnessMetric(threshold=0.7)
relevancy = AnswerRelevancyMetric(threshold=0.7)

# Custom metric with G-Eval
helpfulness = GEval(
    name="Helpfulness",
    criteria="Determine if the response is helpful and actionable",
    evaluation_params=[
        LLMTestCaseParams.INPUT,
        LLMTestCaseParams.ACTUAL_OUTPUT
    ]
)

# Evaluate
results = evaluate(test_cases, [faithfulness, relevancy, helpfulness])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LLM-as-Judge"}
                </h2>
                <p>
                  {"Use LLMs to evaluate other LLM outputs:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

client = OpenAI()

def llm_judge(question: str, answer: str, criteria: str) -> dict:
    """Use GPT-4 to evaluate an answer."""

    prompt = f"""Evaluate the following answer based on the criteria.

Question: {question}
Answer: {answer}
Criteria: {criteria}

Provide your evaluation as JSON:
{{
    "score": <1-5>,
    "reasoning": "<explanation>",
    "suggestions": "<how to improve>"
}}"""

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}],
        response_format={"type": "json_object"}
    )

    return json.loads(response.choices[0].message.content)

# Usage
result = llm_judge(
    question="Explain quantum computing",
    answer="Quantum computing uses qubits...",
    criteria="Accuracy, clarity, and completeness"
)

print(f"Score: {result['score']}/5")
print(f"Reasoning: {result['reasoning']}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building an Evaluation Pipeline"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import json
from dataclasses import dataclass
from typing import List, Callable
import statistics

@dataclass
class TestCase:
    input: str
    expected_output: str = None
    context: List[str] = None
    metadata: dict = None

@dataclass
class EvalResult:
    test_case: TestCase
    actual_output: str
    scores: dict
    latency_ms: float

class AgentEvaluator:
    def __init__(self, agent_fn: Callable):
        self.agent = agent_fn
        self.results: List[EvalResult] = []

    def add_metric(self, name: str, metric_fn: Callable):
        self.metrics[name] = metric_fn

    def evaluate(self, test_cases: List[TestCase]) -> dict:
        for tc in test_cases:
            # Run agent
            start = time.time()
            output = self.agent(tc.input)
            latency = (time.time() - start) * 1000

            # Calculate scores
            scores = {}
            for name, metric in self.metrics.items():
                scores[name] = metric(tc, output)

            self.results.append(EvalResult(
                test_case=tc,
                actual_output=output,
                scores=scores,
                latency_ms=latency
            ))

        return self.aggregate_results()

    def aggregate_results(self) -> dict:
        summary = {"total_cases": len(self.results)}

        for metric_name in self.metrics:
            scores = [r.scores[metric_name] for r in self.results]
            summary[metric_name] = {
                "mean": statistics.mean(scores),
                "std": statistics.stdev(scores) if len(scores) > 1 else 0,
                "min": min(scores),
                "max": max(scores)
            }

        summary["latency"] = {
            "mean_ms": statistics.mean([r.latency_ms for r in self.results]),
            "p95_ms": sorted([r.latency_ms for r in self.results])[int(len(self.results) * 0.95)]
        }

        return summary

# Usage
evaluator = AgentEvaluator(my_rag_agent)
evaluator.add_metric("exact_match", lambda tc, out: tc.expected_output.lower() in out.lower())
evaluator.add_metric("length", lambda tc, out: min(len(out) / 500, 1.0))

results = evaluator.evaluate(test_cases)
print(json.dumps(results, indent=2))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"A/B Testing Agents"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import random
from collections import defaultdict

class AgentABTest:
    def __init__(self, agent_a, agent_b, judge_fn):
        self.agent_a = agent_a
        self.agent_b = agent_b
        self.judge = judge_fn
        self.results = defaultdict(int)

    def run_comparison(self, query: str) -> str:
        """Run both agents and get preference."""
        output_a = self.agent_a(query)
        output_b = self.agent_b(query)

        # Randomize order to avoid position bias
        if random.random() > 0.5:
            outputs = [("A", output_a), ("B", output_b)]
        else:
            outputs = [("B", output_b), ("A", output_a)]

        winner = self.judge(query, outputs[0][1], outputs[1][1])
        # winner is "first", "second", or "tie"

        if winner == "first":
            self.results[outputs[0][0]] += 1
        elif winner == "second":
            self.results[outputs[1][0]] += 1
        else:
            self.results["tie"] += 1

        return dict(self.results)

    def get_winner(self) -> str:
        if self.results["A"] > self.results["B"]:
            return "Agent A"
        elif self.results["B"] > self.results["A"]:
            return "Agent B"
        else:
            return "Tie"

def llm_preference_judge(query, output1, output2):
    # Use LLM to pick preferred response
    prompt = f"""Compare these two responses to the query.

Query: {query}
Response 1: {output1}
Response 2: {output2}

Which is better? Reply with only: "first", "second", or "tie"."""

    response = client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": prompt}]
    )
    return response.choices[0].message.content.strip().lower()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Continuous Evaluation"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Integrate evaluation into CI/CD

# pytest test file
import pytest
from my_agent import RAGAgent

@pytest.fixture
def agent():
    return RAGAgent()

@pytest.fixture
def test_cases():
    return load_test_cases("eval_dataset.json")

def test_accuracy(agent, test_cases):
    correct = 0
    for tc in test_cases:
        output = agent.query(tc["question"])
        if tc["expected"] in output:
            correct += 1

    accuracy = correct / len(test_cases)
    assert accuracy >= 0.8, f"Accuracy {accuracy} below threshold 0.8"

def test_latency(agent, test_cases):
    latencies = []
    for tc in test_cases[:10]:  # Sample
        start = time.time()
        agent.query(tc["question"])
        latencies.append(time.time() - start)

    p95 = sorted(latencies)[int(len(latencies) * 0.95)]
    assert p95 < 2.0, f"P95 latency {p95}s exceeds 2s threshold"

def test_no_hallucination(agent, test_cases):
    for tc in test_cases:
        output = agent.query(tc["question"])
        # Check output is grounded in context
        assert check_grounded(output, tc["context"])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Diverse test sets:"}
                    </strong>
                    {" Cover edge cases, different topics, adversarial inputs"}
                  </li>
                  <li>
                    <strong>
                      {"Multiple metrics:"}
                    </strong>
                    {" No single metric captures all aspects of quality"}
                  </li>
                  <li>
                    <strong>
                      {"Human baseline:"}
                    </strong>
                    {" Include human judgments for calibration"}
                  </li>
                  <li>
                    <strong>
                      {"Version datasets:"}
                    </strong>
                    {" Track changes to evaluation data"}
                  </li>
                  <li>
                    <strong>
                      {"Automate:"}
                    </strong>
                    {" Run evaluations in CI/CD pipeline"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor production:"}
                    </strong>
                    {" Sample and evaluate live traffic"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master AI Quality Assurance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers evaluation and testing in-depth. Learn to build reliable, high-quality AI systems."}
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
                  <Link href="/agentic-ai/articles/langsmith" className="related-article-card">
                    <h4>
                      {"LangSmith: Observability"}
                    </h4>
                    {" "}
                    <p>
                      {"Monitor and debug AI applications"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/agent-safety" className="related-article-card">
                    <h4>
                      {"Agent Safety & Guardrails"}
                    </h4>
                    {" "}
                    <p>
                      {"Ensure safe AI behavior"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG Systems"}
                    </h4>
                    {" "}
                    <p>
                      {"Build and evaluate RAG"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about AI agent evaluation."} />
    </>
  );
}
