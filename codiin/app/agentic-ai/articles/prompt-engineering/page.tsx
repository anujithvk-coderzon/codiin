import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Prompt Engineering: The Complete Guide",
  description: "Master Prompt Engineering - the art of crafting effective prompts for LLMs. Learn techniques like few-shot learning, chain-of-thought, and system prompts.",
  keywords: ["prompt engineering", "LLM prompts", "ChatGPT prompts", "few-shot learning", "chain-of-thought", "AI prompting techniques"],
  alternates: { canonical: "/agentic-ai/articles/prompt-engineering" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/prompt-engineering",
    title: "Prompt Engineering: The Complete Guide",
    description: "Master the art of crafting effective prompts for LLMs and AI applications.",
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
  "headline": "Prompt Engineering: The Complete Guide",
  "description": "Master the art of crafting effective prompts for LLMs",
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

export default function AgenticAiPromptEngineeringPage() {
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
                {"Prompt Engineering"}
              </span>
            </div>
            <h1>
              {"Prompt Engineering: The Complete Guide"}
            </h1>
            <p className="article-subtitle">
              {"Master the Art of Crafting Effective Prompts for LLMs"}
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
                  {"What is Prompt Engineering?"}
                </h2>
                <p>
                  {"Prompt engineering is the practice of designing and optimizing inputs (prompts) to get the best possible outputs from Large Language Models (LLMs). It's both an art and a science - combining understanding of how LLMs work with creative problem-solving."}
                </p>
                <p>
                  {"A well-crafted prompt can be the difference between a generic, unhelpful response and a precise, valuable answer. As LLMs become more integrated into applications, prompt engineering has emerged as a critical skill for developers, data scientists, and anyone working with AI."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Prompting Techniques"}
                </h2>
                <h3>
                  {"1. Zero-Shot Prompting"}
                </h3>
                <p>
                  {"Ask the model directly without examples. Works well for simple, well-defined tasks."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Zero-shot prompt
prompt = """Classify the sentiment of this review as positive, negative, or neutral.

Review: "The food was delicious but the service was slow."

Sentiment:"""

# Output: neutral (or mixed)`}</code></pre>
                </div>
                <h3>
                  {"2. Few-Shot Prompting"}
                </h3>
                <p>
                  {"Provide examples to guide the model's behavior. Essential for consistent formatting and complex tasks."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Few-shot prompt
prompt = """Classify sentiment as positive, negative, or neutral.

Review: "Amazing product, exceeded expectations!"
Sentiment: positive

Review: "Terrible experience, never buying again."
Sentiment: negative

Review: "It's okay, nothing special."
Sentiment: neutral

Review: "The food was delicious but the service was slow."
Sentiment:"""

# Output: neutral (follows the pattern)`}</code></pre>
                </div>
                <h3>
                  {"3. Chain-of-Thought (CoT)"}
                </h3>
                <p>
                  {"Ask the model to show its reasoning step by step. Dramatically improves performance on complex problems."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Without CoT
prompt = "If a store has 15 apples and sells 7, then receives 12 more, how many apples are there?"
# Model might give wrong answer

# With CoT
prompt = """If a store has 15 apples and sells 7, then receives 12 more, how many apples are there?

Let's think step by step:
1. Starting apples: 15
2. After selling 7: 15 - 7 = 8
3. After receiving 12: 8 + 12 = 20

Answer: 20 apples"""`}</code></pre>
                </div>
                <h3>
                  {"4. System Prompts"}
                </h3>
                <p>
                  {"Set the model's persona, role, and behavior at the beginning of the conversation."}
                </p>
                <div className="code-block">
                  <pre><code>{`# System prompt for a customer service bot
system_prompt = """You are a helpful customer service representative for TechCorp.

Guidelines:
- Be friendly and professional
- If you don't know something, say so
- Never share confidential information
- Offer to escalate to a human if needed
- Always end with asking if there's anything else

Product knowledge: [detailed product info here]"""`}</code></pre>
                </div>
                <h3>
                  {"5. Role Prompting"}
                </h3>
                <p>
                  {"Assign the model a specific role or persona to get domain-specific responses."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Role prompting examples
prompts = [
    "As an experienced Python developer, review this code...",
    "You are a senior data scientist. Explain this dataset...",
    "Acting as a legal expert, identify issues in this contract...",
    "As a patient teacher explaining to a beginner..."
]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Advanced Techniques"}
                </h2>
                <h3>
                  {"Self-Consistency"}
                </h3>
                <p>
                  {"Generate multiple responses and use the most common answer."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Generate 5 responses, take majority vote
responses = []
for _ in range(5):
    response = llm.invoke(prompt)
    responses.append(response)

# Most common answer is likely correct
final_answer = most_common(responses)`}</code></pre>
                </div>
                <h3>
                  {"ReAct (Reasoning + Acting)"}
                </h3>
                <p>
                  {"Combine reasoning with action-taking for agent-like behavior."}
                </p>
                <div className="code-block">
                  <pre><code>{`prompt = """Answer the question using this format:

Thought: I need to figure out...
Action: Search[query] or Calculate[expression]
Observation: [result of action]
... (repeat as needed)
Thought: I now know the answer
Final Answer: [answer]

Question: What is the population of the capital of France?

Thought: I need to find the capital of France first.
Action: Search[capital of France]
Observation: Paris is the capital of France.
Thought: Now I need the population of Paris.
Action: Search[population of Paris]
Observation: Paris has approximately 2.1 million people.
Thought: I now know the answer.
Final Answer: The capital of France is Paris, with a population of about 2.1 million."""`}</code></pre>
                </div>
                <h3>
                  {"Tree of Thoughts (ToT)"}
                </h3>
                <p>
                  {"Explore multiple reasoning paths before deciding on the best answer."}
                </p>
                <h3>
                  {"Least-to-Most Prompting"}
                </h3>
                <p>
                  {"Break complex problems into simpler sub-problems, solve them in order."}
                </p>
                <div className="code-block">
                  <pre><code>{`prompt = """To solve this problem, let's break it down:

Problem: Build a user authentication system

Sub-problems:
1. First, how do we securely store passwords?
2. Then, how do we implement login verification?
3. Finally, how do we manage sessions?

Let's solve each one:
1. Password storage: [solve]
2. Login verification: [solve using #1]
3. Session management: [solve using #1 and #2]"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Prompt Design Principles"}
                </h2>
                <div className="principles-grid">
                  <div className="principle-card">
                    <h4>
                      {"Be Specific"}
                    </h4>
                    <p className="bad">
                      {"Bad: \"Write about dogs\""}
                    </p>
                    <p className="good">
                      {"Good: \"Write a 200-word paragraph about the history of Golden Retrievers as family pets\""}
                    </p>
                  </div>
                  <div className="principle-card">
                    <h4>
                      {"Provide Context"}
                    </h4>
                    <p className="bad">
                      {"Bad: \"Summarize this\""}
                    </p>
                    <p className="good">
                      {"Good: \"Summarize this research paper for a non-technical audience in 3 bullet points\""}
                    </p>
                  </div>
                  <div className="principle-card">
                    <h4>
                      {"Specify Format"}
                    </h4>
                    <p className="bad">
                      {"Bad: \"List some ideas\""}
                    </p>
                    <p className="good">
                      {"Good: \"Provide 5 ideas in a numbered list, each with a title and one-sentence description\""}
                    </p>
                  </div>
                  <div className="principle-card">
                    <h4>
                      {"Set Constraints"}
                    </h4>
                    <p className="bad">
                      {"Bad: \"Explain quantum computing\""}
                    </p>
                    <p className="good">
                      {"Good: \"Explain quantum computing in simple terms, using no jargon, in under 100 words\""}
                    </p>
                  </div>
                  <div className="principle-card">
                    <h4>
                      {"Define Success"}
                    </h4>
                    <p className="bad">
                      {"Bad: \"Make this code better\""}
                    </p>
                    <p className="good">
                      {"Good: \"Refactor this code to improve readability and reduce time complexity from O(n²) to O(n)\""}
                    </p>
                  </div>
                  <div className="principle-card">
                    <h4>
                      {"Use Delimiters"}
                    </h4>
                    <p>
                      {"Use clear separators like ```, ---, or XML tags to distinguish instructions from content"}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Structured Output Prompts"}
                </h2>
                <p>
                  {"Getting consistent, parseable outputs from LLMs:"}
                </p>
                <h3>
                  {"JSON Output"}
                </h3>
                <div className="code-block">
                  <pre><code>{`prompt = """Extract information from this text and return as JSON.

Text: "John Smith is a 35-year-old software engineer from San Francisco."

Return ONLY valid JSON in this format:
{
    "name": "...",
    "age": ...,
    "occupation": "...",
    "location": "..."
}"""`}</code></pre>
                </div>
                <h3>
                  {"Using XML Tags"}
                </h3>
                <div className="code-block">
                  <pre><code>{`prompt = """Analyze the following code and provide feedback.

<code>
def calculate(x, y):
    return x + y
</code>

Provide your response in this format:
<analysis>
    <summary>Brief overview</summary>
    <issues>List of problems</issues>
    <suggestions>Improvements</suggestions>
</analysis>"""`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Mistakes to Avoid"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Being too vague:"}
                    </strong>
                    {" Ambiguous prompts get inconsistent results"}
                  </li>
                  <li>
                    <strong>
                      {"Overloading the prompt:"}
                    </strong>
                    {" Too many instructions can confuse the model"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring model limits:"}
                    </strong>
                    {" Context windows have limits; be concise"}
                  </li>
                  <li>
                    <strong>
                      {"No example outputs:"}
                    </strong>
                    {" For specific formats, show what you want"}
                  </li>
                  <li>
                    <strong>
                      {"Assuming knowledge:"}
                    </strong>
                    {" Models may not have domain-specific knowledge"}
                  </li>
                  <li>
                    <strong>
                      {"Not iterating:"}
                    </strong>
                    {" First prompt is rarely the best; refine and test"}
                  </li>
                  <li>
                    <strong>
                      {"Negative instructions:"}
                    </strong>
                    {" \"Don't do X\" is less effective than \"Do Y instead\""}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Prompt Templates with LangChain"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from langchain.prompts import ChatPromptTemplate, FewShotPromptTemplate

# Simple template
template = ChatPromptTemplate.from_messages([
    ("system", "You are a {role} assistant."),
    ("human", "{question}")
])

# Few-shot template
examples = [
    {"input": "happy", "output": "sad"},
    {"input": "tall", "output": "short"},
]

few_shot = FewShotPromptTemplate(
    examples=examples,
    example_prompt=example_prompt,
    prefix="Give the antonym of each word.",
    suffix="Input: {input}\\nOutput:",
    input_variables=["input"]
)

# Use in a chain
from langchain_openai import ChatOpenAI

chain = template | ChatOpenAI()
result = chain.invoke({
    "role": "coding",
    "question": "How do I reverse a list in Python?"
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Prompt Engineering for Different Tasks"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Code Generation"}
                    </h4>
                    <p>
                      {"Specify language, style, include error handling, add docstrings."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Summarization"}
                    </h4>
                    <p>
                      {"Define length, audience, key points to include, format."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Classification"}
                    </h4>
                    <p>
                      {"List all categories, provide examples, handle edge cases."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Data Extraction"}
                    </h4>
                    <p>
                      {"Specify exact fields, format (JSON/XML), handling of missing data."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Translation"}
                    </h4>
                    <p>
                      {"Source/target language, formality level, preserve formatting."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Creative Writing"}
                    </h4>
                    <p>
                      {"Tone, style, length, target audience, inspiration sources."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Prompt Engineering"}
                </h2>
                <p>
                  {"Our Agentic AI program includes extensive training on prompt engineering - from basics to advanced techniques for production AI systems."}
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
                      {"What is LangChain?"}
                    </h4>
                    {" "}
                    <p>
                      {"Framework with powerful prompt templates"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation"}
                    </h4>
                    {" "}
                    <p>
                      {"Combine prompts with retrieved context"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph for Multi-Agent Systems"}
                    </h4>
                    {" "}
                    <p>
                      {"Prompts for complex agent workflows"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about prompt engineering."} />
    </>
  );
}
