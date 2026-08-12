import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "DSPy: Programming Language Models the Right Way",
  description: "Learn DSPy - Stanford's framework for programming language models with automatic prompt optimization and structured outputs.",
  keywords: ["DSPy", "Stanford NLP", "prompt optimization", "LLM programming", "automatic prompting", "AI development", "language model framework"],
  alternates: { canonical: "/agentic-ai/articles/dspy" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/dspy",
    title: "DSPy: Programming Language Models the Right Way",
    description: "Master DSPy - Stanford's framework for declarative, self-improving LLM pipelines.",
    images: ["/images/dspy-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "DSPy Framework Guide | CODiiN",
    description: "Programming language models with automatic optimization.",
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
  "headline": "DSPy: Programming Language Models the Right Way",
  "description": "Comprehensive guide to using DSPy for building LLM applications",
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

export default function AgenticAiDspyPage() {
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
                {"DSPy"}
              </span>
            </div>
            <h1>
              {"DSPy"}
            </h1>
            <p className="article-subtitle">
              {"Programming Language Models with Automatic Prompt Optimization"}
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
                  {"What is DSPy?"}
                </h2>
                <p>
                  {"DSPy (Declarative Self-improving Python) is a framework from Stanford NLP that fundamentally changes how we build LLM applications. Instead of manually crafting prompts, you define what you want to accomplish, and DSPy automatically optimizes the prompts for you."}
                </p>
                <p>
                  {"Key innovations:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Declarative programming:"}
                    </strong>
                    {" Define signatures, not prompts"}
                  </li>
                  <li>
                    <strong>
                      {"Automatic optimization:"}
                    </strong>
                    {" DSPy compiles and optimizes your pipeline"}
                  </li>
                  <li>
                    <strong>
                      {"Modular design:"}
                    </strong>
                    {" Compose complex systems from simple modules"}
                  </li>
                  <li>
                    <strong>
                      {"Self-improvement:"}
                    </strong>
                    {" Pipelines get better with examples and feedback"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Why DSPy?"}
                </h2>
                <p>
                  {"Traditional prompt engineering has problems:"}
                </p>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"The Prompt Problem"}
                    </h4>
                    <p>
                      {"Manually crafted prompts are brittle, hard to maintain, and don't transfer well between models."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"The DSPy Solution"}
                    </h4>
                    <p>
                      {"Define behavior declaratively, let the framework optimize prompts automatically for any model."}
                    </p>
                  </div>
                </div>
                <p>
                  {"DSPy treats prompts as parameters that can be learned, not code that must be written."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"Signatures"}
                </h3>
                <p>
                  {"Signatures define the input-output behavior of a module:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import dspy

# Simple signature using shorthand
class BasicQA(dspy.Signature):
    """Answer questions with short factual answers."""
    question = dspy.InputField()
    answer = dspy.OutputField(desc="often between 1 and 5 words")

# Or using inline syntax
qa = dspy.Predict("question -> answer")`}</code></pre>
                </div>
                <h3>
                  {"Modules"}
                </h3>
                <p>
                  {"Modules are the building blocks of DSPy programs:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import dspy

# Predict: Basic LLM call
predict = dspy.Predict("question -> answer")

# ChainOfThought: Adds reasoning steps
cot = dspy.ChainOfThought("question -> answer")

# ReAct: Reasoning + Acting with tools
react = dspy.ReAct("question -> answer", tools=[search_tool])

# ProgramOfThought: Generates and executes code
pot = dspy.ProgramOfThought("question -> answer")`}</code></pre>
                </div>
                <h3>
                  {"Teleprompters (Optimizers)"}
                </h3>
                <p>
                  {"Teleprompters automatically optimize your prompts:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from dspy.teleprompt import BootstrapFewShot

# Create a teleprompter
teleprompter = BootstrapFewShot(metric=my_metric)

# Compile (optimize) your program
optimized_program = teleprompter.compile(
    student=my_program,
    trainset=training_examples
)`}</code></pre>
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
                  <pre><code>{`pip install dspy-ai`}</code></pre>
                </div>
                <h3>
                  {"Basic Setup"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import dspy

# Configure the LLM
lm = dspy.OpenAI(model="gpt-4", max_tokens=500)
dspy.settings.configure(lm=lm)

# Or use other providers
# lm = dspy.Claude(model="claude-3-sonnet")
# lm = dspy.Ollama(model="llama2")`}</code></pre>
                </div>
                <h3>
                  {"Your First DSPy Program"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import dspy

# Configure LLM
dspy.settings.configure(lm=dspy.OpenAI(model="gpt-4"))

# Define a simple QA module
qa = dspy.ChainOfThought("question -> answer")

# Use it
response = qa(question="What is the capital of France?")
print(response.answer)  # "Paris"
print(response.rationale)  # Shows the reasoning`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building Complex Pipelines"}
                </h2>
                <h3>
                  {"Multi-Step RAG System"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import dspy
from dspy.retrieve import ChromadbRM

class RAG(dspy.Module):
    def __init__(self, num_passages=3):
        super().__init__()
        self.retrieve = dspy.Retrieve(k=num_passages)
        self.generate = dspy.ChainOfThought("context, question -> answer")

    def forward(self, question):
        # Retrieve relevant passages
        passages = self.retrieve(question).passages

        # Generate answer with context
        context = "\\n".join(passages)
        answer = self.generate(context=context, question=question)

        return answer

# Configure retriever
retriever = ChromadbRM(
    collection_name="my_docs",
    persist_directory="./chroma_db"
)
dspy.settings.configure(rm=retriever)

# Use the RAG system
rag = RAG()
result = rag("What are the key features of our product?")`}</code></pre>
                </div>
                <h3>
                  {"Multi-Hop Reasoning"}
                </h3>
                <div className="code-block">
                  <pre><code>{`class MultiHopQA(dspy.Module):
    def __init__(self, num_hops=2):
        super().__init__()
        self.num_hops = num_hops
        self.retrieve = dspy.Retrieve(k=3)
        self.generate_query = dspy.ChainOfThought(
            "context, question -> search_query"
        )
        self.generate_answer = dspy.ChainOfThought(
            "context, question -> answer"
        )

    def forward(self, question):
        context = []

        for hop in range(self.num_hops):
            # Generate search query
            if hop == 0:
                query = question
            else:
                query = self.generate_query(
                    context="\\n".join(context),
                    question=question
                ).search_query

            # Retrieve passages
            passages = self.retrieve(query).passages
            context.extend(passages)

        # Generate final answer
        return self.generate_answer(
            context="\\n".join(context),
            question=question
        )

multihop = MultiHopQA(num_hops=2)
result = multihop("Who founded the company that created GPT-4?")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Optimizing with Teleprompters"}
                </h2>
                <h3>
                  {"BootstrapFewShot"}
                </h3>
                <p>
                  {"Automatically generates and selects few-shot examples:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from dspy.teleprompt import BootstrapFewShot

# Define a metric
def validate_answer(example, prediction, trace=None):
    return example.answer.lower() == prediction.answer.lower()

# Create training examples
trainset = [
    dspy.Example(question="Capital of France?", answer="Paris"),
    dspy.Example(question="Capital of Japan?", answer="Tokyo"),
    # ... more examples
]

# Optimize
teleprompter = BootstrapFewShot(metric=validate_answer)
optimized_rag = teleprompter.compile(RAG(), trainset=trainset)

# The optimized version includes learned few-shot examples`}</code></pre>
                </div>
                <h3>
                  {"MIPRO (Multi-prompt Instruction Proposal)"}
                </h3>
                <p>
                  {"Optimizes both instructions and examples:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from dspy.teleprompt import MIPRO

teleprompter = MIPRO(
    metric=validate_answer,
    num_candidates=10,
    init_temperature=1.0
)

optimized_program = teleprompter.compile(
    my_program,
    trainset=trainset,
    valset=valset,
    num_trials=50
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Assertions and Constraints"}
                </h2>
                <p>
                  {"DSPy supports runtime assertions to ensure output quality:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import dspy

class ConstrainedQA(dspy.Module):
    def __init__(self):
        super().__init__()
        self.generate = dspy.ChainOfThought("question -> answer")

    def forward(self, question):
        answer = self.generate(question=question)

        # Add assertions
        dspy.Suggest(
            len(answer.answer.split()) <= 10,
            "Answer should be concise (max 10 words)"
        )

        dspy.Assert(
            answer.answer.strip() != "",
            "Answer cannot be empty"
        )

        return answer

# With assertions, DSPy will retry if constraints aren't met`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DSPy vs Other Frameworks"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"DSPy"}
                    </h4>
                    <p>
                      <strong>
                        {"Best for:"}
                      </strong>
                      {" Research, optimization, when you have training data"}
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
                      {" Quick prototypes, many integrations, production apps"}
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
                      {" Document-heavy RAG applications"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Combine Them"}
                    </h4>
                    <p>
                      {"Use DSPy to optimize prompts, deploy with LangChain infrastructure"}
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
                      {"Start simple:"}
                    </strong>
                    {" Begin with Predict, add ChainOfThought if needed"}
                  </li>
                  <li>
                    <strong>
                      {"Define clear signatures:"}
                    </strong>
                    {" Good descriptions help the optimizer"}
                  </li>
                  <li>
                    <strong>
                      {"Collect examples:"}
                    </strong>
                    {" More training data = better optimization"}
                  </li>
                  <li>
                    <strong>
                      {"Use assertions:"}
                    </strong>
                    {" Enforce output quality with Suggest and Assert"}
                  </li>
                  <li>
                    <strong>
                      {"Iterate on metrics:"}
                    </strong>
                    {" Your metric defines what \"good\" means"}
                  </li>
                  <li>
                    <strong>
                      {"Save compiled programs:"}
                    </strong>
                    {" Don't re-optimize in production"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Save optimized program
optimized_program.save("my_optimized_rag.json")

# Load later
loaded_program = RAG()
loaded_program.load("my_optimized_rag.json")`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Advanced LLM Programming"}
                </h2>
                <p>
                  {"Our Agentic AI program covers DSPy and other advanced frameworks. Learn to build self-improving AI systems with automatic optimization."}
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
                      {"The most popular LLM application framework"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/prompt-engineering" className="related-article-card">
                    <h4>
                      {"Prompt Engineering Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Master the art of crafting effective prompts"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation"}
                    </h4>
                    {" "}
                    <p>
                      {"Connect LLMs to your knowledge bases"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about DSPy and Agentic AI."} />
    </>
  );
}
