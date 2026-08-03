import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Chains & LCEL: LangChain Expression Language Guide",
  description: "Master LangChain Chains and LCEL (LangChain Expression Language). Learn to build composable AI pipelines with the pipe operator, parallel execution, and streaming.",
  keywords: ["LangChain chains", "LCEL", "LangChain Expression Language", "AI pipelines", "prompt chains", "LLM chains", "composable AI"],
  alternates: { canonical: "/agentic-ai/articles/chains-lcel" },
  openGraph: {
    type: "website",
    url: "/agentic-ai/articles/chains-lcel",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiChainsLcelPage() {
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
                {"Chains & LCEL"}
              </span>
            </div>
            <h1>
              {"Chains & LCEL"}
            </h1>
            <p className="article-subtitle">
              {"Building Composable AI Pipelines with LangChain Expression Language"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What Are Chains?"}
                </h2>
                <p>
                  {"Chains are "}
                  <strong>
                    {"sequences of steps that process data"}
                  </strong>
                  {". Think of them like an assembly line in a factory - each station does one job and passes the result to the next."}
                </p>
                <div className="code-block">
                  <pre><code>{`# A Simple Chain: Like an Assembly Line

User Input: "Explain quantum computing"
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: Format Prompt                                          │
│  "You are a teacher. Explain {topic} simply."                   │
│  Result: "You are a teacher. Explain quantum computing simply." │
└─────────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: Send to LLM                                            │
│  GPT-4 processes the prompt                                     │
│  Result: "Quantum computing uses quantum bits (qubits)..."      │
└─────────────────────────────────────────────────────────────────┘
                    │
                    ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: Parse Output                                           │
│  Extract just the text                                          │
│  Result: Clean string output                                    │
└─────────────────────────────────────────────────────────────────┘
                    │
                    ▼
Final Output: "Quantum computing uses quantum bits (qubits)..."`}</code></pre>
                </div>
                <h3>
                  {"Why Use Chains?"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Modularity:"}
                    </strong>
                    {" Each step does one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Reusability:"}
                    </strong>
                    {" Use the same steps in different chains"}
                  </li>
                  <li>
                    <strong>
                      {"Readability:"}
                    </strong>
                    {" Easy to understand the data flow"}
                  </li>
                  <li>
                    <strong>
                      {"Debugging:"}
                    </strong>
                    {" Test each step independently"}
                  </li>
                  <li>
                    <strong>
                      {"Flexibility:"}
                    </strong>
                    {" Swap components easily"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"What is LCEL?"}
                </h2>
                <p>
                  <strong>
                    {"LCEL (LangChain Expression Language)"}
                  </strong>
                  {" is the modern way to build chains in LangChain. It uses the "}
                  <code>
                    {"|"}
                  </code>
                  {" (pipe) operator to connect components, making chains look clean and readable."}
                </p>
                <div className="code-block">
                  <pre><code>{`# LCEL: The Pipe Operator

# Think of | like a conveyor belt moving data from left to right

prompt | llm | output_parser

# This means:
# 1. Take input
# 2. Pass through prompt template
# 3. Pass result to LLM
# 4. Pass LLM output to parser
# 5. Return parsed result`}</code></pre>
                </div>
                <h3>
                  {"Old Way vs LCEL (New Way)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# ❌ OLD WAY: Verbose and Nested
from langchain.chains import LLMChain

chain = LLMChain(
    llm=llm,
    prompt=prompt,
    output_parser=parser
)
result = chain.run(topic="AI")


# ✅ NEW WAY (LCEL): Clean and Readable
chain = prompt | llm | parser
result = chain.invoke({"topic": "AI"})`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"LCEL Benefits:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Cleaner, more readable syntax"}
                  </li>
                  <li>
                    {"Built-in streaming support"}
                  </li>
                  <li>
                    {"Automatic async support"}
                  </li>
                  <li>
                    {"Built-in retry and fallback handling"}
                  </li>
                  <li>
                    {"Easy parallel execution"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Your First LCEL Chain"}
                </h2>
                <p>
                  {"Let's build a simple chain step by step:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# STEP 1: Create the components

# The LLM (the brain)
llm = ChatOpenAI(model="gpt-4", temperature=0.7)

# The prompt template (the instructions)
prompt = ChatPromptTemplate.from_template(
    "You are a helpful assistant. Explain {topic} in simple terms for a beginner."
)

# The output parser (cleans up the response)
output_parser = StrOutputParser()


# STEP 2: Connect them with the pipe operator

chain = prompt | llm | output_parser
#       │         │         │
#       │         │         └── 3. Extract text from response
#       │         └──────────── 2. Send to GPT-4
#       └────────────────────── 1. Format the prompt


# STEP 3: Run the chain

result = chain.invoke({"topic": "machine learning"})
print(result)

# Output: "Machine learning is like teaching a computer to learn
#          from examples, just like how you learned to recognize..."`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding LCEL Components"}
                </h2>
                <p>
                  {"LCEL works with \"Runnables\" - any component that can process input and produce output."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Common LCEL Components

┌─────────────────────────────────────────────────────────────────┐
│ COMPONENT              │ WHAT IT DOES                          │
├─────────────────────────────────────────────────────────────────┤
│ ChatPromptTemplate     │ Formats user input into a prompt      │
│ ChatOpenAI / LLM       │ Processes prompt, generates response  │
│ StrOutputParser        │ Extracts string from LLM response     │
│ JsonOutputParser       │ Parses JSON from LLM response         │
│ RunnableLambda         │ Runs any Python function              │
│ RunnablePassthrough    │ Passes input unchanged                │
│ RunnableParallel       │ Runs multiple chains simultaneously   │
│ RunnableBranch         │ Routes to different chains            │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"The Invoke Methods"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Different ways to run a chain

chain = prompt | llm | output_parser

# 1. invoke() - Single input, wait for complete response
result = chain.invoke({"topic": "AI"})

# 2. stream() - Single input, get response as it generates
for chunk in chain.stream({"topic": "AI"}):
    print(chunk, end="", flush=True)

# 3. batch() - Multiple inputs at once
results = chain.batch([
    {"topic": "AI"},
    {"topic": "blockchain"},
    {"topic": "quantum computing"}
])

# 4. ainvoke() - Async version of invoke
result = await chain.ainvoke({"topic": "AI"})

# 5. astream() - Async streaming
async for chunk in chain.astream({"topic": "AI"}):
    print(chunk, end="", flush=True)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building More Complex Chains"}
                </h2>
                <h3>
                  {"Chain with Multiple Variables"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

llm = ChatOpenAI(model="gpt-4")

# Prompt with multiple placeholders
prompt = ChatPromptTemplate.from_template("""
You are an expert {role}.
Write a {length} explanation about {topic}.
Target audience: {audience}
""")

chain = prompt | llm | StrOutputParser()

# All variables are passed in the invoke dictionary
result = chain.invoke({
    "role": "science teacher",
    "length": "brief",
    "topic": "photosynthesis",
    "audience": "5th grade students"
})

print(result)`}</code></pre>
                </div>
                <h3>
                  {"Chain with System and Human Messages"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain.prompts import ChatPromptTemplate, HumanMessagePromptTemplate
from langchain_core.messages import SystemMessage

# More control over message types
prompt = ChatPromptTemplate.from_messages([
    SystemMessage(content="You are a professional translator. Translate accurately."),
    HumanMessagePromptTemplate.from_template(
        "Translate this from {source_lang} to {target_lang}: {text}"
    )
])

chain = prompt | llm | StrOutputParser()

result = chain.invoke({
    "source_lang": "English",
    "target_lang": "Spanish",
    "text": "Hello, how are you today?"
})

print(result)  # "Hola, ¿cómo estás hoy?"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"RunnableLambda: Custom Functions in Chains"}
                </h2>
                <p>
                  {"Use "}
                  <code>
                    {"RunnableLambda"}
                  </code>
                  {" to insert any Python function into your chain:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_core.runnables import RunnableLambda

# Custom function to process data
def format_output(text: str) -> str:
    """Add formatting to the output."""
    return f"📝 Summary:\\n{'-' * 40}\\n{text}\\n{'-' * 40}"

def word_count(text: str) -> dict:
    """Count words and return with original text."""
    return {
        "text": text,
        "word_count": len(text.split())
    }

# Create runnables from functions
formatter = RunnableLambda(format_output)
counter = RunnableLambda(word_count)

# Build chain with custom functions
chain = prompt | llm | StrOutputParser() | formatter

result = chain.invoke({"topic": "Python programming"})
print(result)

# Output:
# 📝 Summary:
# ----------------------------------------
# Python is a versatile programming language...
# ----------------------------------------


# Or chain multiple custom functions
chain_with_count = prompt | llm | StrOutputParser() | counter

result = chain_with_count.invoke({"topic": "AI"})
print(f"Response: {result['text'][:100]}...")
print(f"Word count: {result['word_count']}")`}</code></pre>
                </div>
                <h3>
                  {"Shorthand: Using Lambda Directly"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# You can use regular lambdas for simple operations
chain = (
    prompt
    | llm
    | StrOutputParser()
    | (lambda x: x.upper())  # Convert to uppercase
    | (lambda x: f"RESULT: {x}")  # Add prefix
)

result = chain.invoke({"topic": "hello world"})
# Output: "RESULT: HELLO WORLD IS A COMMON..."`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"RunnablePassthrough: Preserving Input"}
                </h2>
                <p>
                  {"Sometimes you need to pass the original input alongside processed data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_core.runnables import RunnablePassthrough, RunnableParallel

# Problem: After LLM processes, we lose the original question
# Solution: Use RunnablePassthrough to keep it

prompt = ChatPromptTemplate.from_template(
    "Answer this question: {question}"
)

# RunnableParallel runs multiple things and combines results
chain = RunnableParallel(
    # Pass through the original question unchanged
    original_question=RunnablePassthrough(),
    # Also get the LLM's answer
    answer=prompt | llm | StrOutputParser()
)

result = chain.invoke({"question": "What is Python?"})

print(f"Question: {result['original_question']}")
print(f"Answer: {result['answer']}")

# Output:
# Question: {'question': 'What is Python?'}
# Answer: Python is a high-level programming language...`}</code></pre>
                </div>
                <h3>
                  {"Extracting Specific Fields"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from operator import itemgetter

# Use itemgetter to extract specific fields
chain = RunnableParallel(
    question=itemgetter("question"),  # Extract just the question string
    context=itemgetter("context"),    # Extract context
    answer=prompt | llm | StrOutputParser()
)

result = chain.invoke({
    "question": "What is the capital?",
    "context": "France is a country in Europe."
})

print(result)
# {
#   'question': 'What is the capital?',
#   'context': 'France is a country in Europe.',
#   'answer': 'The capital of France is Paris.'
# }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"RunnableParallel: Running Things Simultaneously"}
                </h2>
                <p>
                  {"Execute multiple operations at the same time for better performance:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_core.runnables import RunnableParallel

# Create different prompts for different purposes
summary_prompt = ChatPromptTemplate.from_template(
    "Summarize this in 2 sentences: {text}"
)

keywords_prompt = ChatPromptTemplate.from_template(
    "Extract 5 keywords from this text: {text}"
)

sentiment_prompt = ChatPromptTemplate.from_template(
    "What is the sentiment of this text (positive/negative/neutral)? {text}"
)

# Run all three in parallel!
analysis_chain = RunnableParallel(
    summary=summary_prompt | llm | StrOutputParser(),
    keywords=keywords_prompt | llm | StrOutputParser(),
    sentiment=sentiment_prompt | llm | StrOutputParser()
)

# All three LLM calls happen simultaneously
result = analysis_chain.invoke({
    "text": """
    The new iPhone is absolutely amazing! The camera quality is exceptional,
    and the battery life has improved significantly. Best purchase I've made
    this year. Highly recommend to everyone looking for a premium smartphone.
    """
})

print("Summary:", result["summary"])
print("Keywords:", result["keywords"])
print("Sentiment:", result["sentiment"])

# This is 3x faster than running them one after another!`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`# Visual representation of parallel execution

                         Input Text
                              │
              ┌───────────────┼───────────────┐
              │               │               │
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │ Summary  │   │ Keywords │   │Sentiment │
        │  Prompt  │   │  Prompt  │   │  Prompt  │
        └────┬─────┘   └────┬─────┘   └────┬─────┘
              │               │               │
              ▼               ▼               ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │   LLM    │   │   LLM    │   │   LLM    │
        │  Call 1  │   │  Call 2  │   │  Call 3  │
        └────┬─────┘   └────┬─────┘   └────┬─────┘
              │               │               │
              └───────────────┼───────────────┘
                              │
                              ▼
                    Combined Results
                    {
                      "summary": "...",
                      "keywords": "...",
                      "sentiment": "..."
                    }`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"RunnableBranch: Conditional Routing"}
                </h2>
                <p>
                  {"Route to different chains based on conditions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_core.runnables import RunnableBranch

# Different prompts for different question types
code_prompt = ChatPromptTemplate.from_template(
    "You are a coding expert. Help with: {question}"
)

math_prompt = ChatPromptTemplate.from_template(
    "You are a math tutor. Solve: {question}"
)

general_prompt = ChatPromptTemplate.from_template(
    "You are a helpful assistant. Answer: {question}"
)

# Classification function
def classify_question(input_dict):
    question = input_dict["question"].lower()
    if any(word in question for word in ["code", "python", "javascript", "programming", "function"]):
        return "code"
    elif any(word in question for word in ["calculate", "math", "equation", "solve", "number"]):
        return "math"
    return "general"

# Create the routing chain
router = RunnableBranch(
    # (condition, chain) pairs
    (lambda x: classify_question(x) == "code", code_prompt | llm | StrOutputParser()),
    (lambda x: classify_question(x) == "math", math_prompt | llm | StrOutputParser()),
    # Default chain (no condition)
    general_prompt | llm | StrOutputParser()
)

# Test with different questions
print(router.invoke({"question": "Write a Python function to sort a list"}))
# Routes to code_prompt

print(router.invoke({"question": "Calculate 15% of 200"}))
# Routes to math_prompt

print(router.invoke({"question": "What is the capital of France?"}))
# Routes to general_prompt (default)`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`# Visual representation of branching

                         Input Question
                              │
                              ▼
                    ┌─────────────────┐
                    │   CLASSIFIER    │
                    │  "What type?"   │
                    └─────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
    "code"               "math"             "general"
         │                    │                    │
         ▼                    ▼                    ▼
   ┌───────────┐       ┌───────────┐       ┌───────────┐
   │   Code    │       │   Math    │       │  General  │
   │   Chain   │       │   Chain   │       │   Chain   │
   └───────────┘       └───────────┘       └───────────┘
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                              ▼
                         Response`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Chaining Multiple LLM Calls"}
                </h2>
                <p>
                  {"Sometimes you need one LLM call to feed into another:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnablePassthrough

# Chain 1: Generate a story outline
outline_prompt = ChatPromptTemplate.from_template(
    "Create a brief 3-point outline for a story about: {topic}"
)

# Chain 2: Write the story based on the outline
story_prompt = ChatPromptTemplate.from_template(
    """Based on this outline:
{outline}

Write a short story (about 200 words)."""
)

# Chain 3: Create a title for the story
title_prompt = ChatPromptTemplate.from_template(
    """Based on this story:
{story}

Create a catchy title."""
)

# Connect them: Topic → Outline → Story → Title
full_chain = (
    # Step 1: Generate outline
    {"outline": outline_prompt | llm | StrOutputParser()}
    # Step 2: Pass outline to story prompt
    | {"story": story_prompt | llm | StrOutputParser(), "outline": itemgetter("outline")}
    # Step 3: Generate title from story
    | {"title": title_prompt | llm | StrOutputParser(), "story": itemgetter("story"), "outline": itemgetter("outline")}
)

result = full_chain.invoke({"topic": "a robot learning to paint"})

print("=== OUTLINE ===")
print(result["outline"])
print("\\n=== STORY ===")
print(result["story"])
print("\\n=== TITLE ===")
print(result["title"])`}</code></pre>
                </div>
                <h3>
                  {"Simpler Sequential Chain"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# For simpler cases, chain directly

first_prompt = ChatPromptTemplate.from_template(
    "Translate to French: {text}"
)

second_prompt = ChatPromptTemplate.from_template(
    "Now make this text more formal: {text}"
)

# Sequential: Translate, then formalize
chain = (
    first_prompt
    | llm
    | StrOutputParser()
    | {"text": RunnablePassthrough()}  # Wrap output for next prompt
    | second_prompt
    | llm
    | StrOutputParser()
)

result = chain.invoke({"text": "Hey, what's up?"})
print(result)  # Formal French translation`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Streaming with LCEL"}
                </h2>
                <p>
                  {"LCEL has built-in streaming support - show results as they generate:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Streaming is automatic with LCEL!

chain = prompt | llm | StrOutputParser()

# Stream the response
print("Streaming response:")
for chunk in chain.stream({"topic": "the history of computers"}):
    print(chunk, end="", flush=True)

print("\\n\\nDone!")

# Output appears word by word as it generates:
# "The history of computers..." (appears gradually)`}</code></pre>
                </div>
                <h3>
                  {"Async Streaming"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import asyncio

async def stream_response(topic: str):
    chain = prompt | llm | StrOutputParser()

    async for chunk in chain.astream({"topic": topic}):
        print(chunk, end="", flush=True)

    print("\\n")

# Run async
asyncio.run(stream_response("artificial intelligence"))`}</code></pre>
                </div>
                <h3>
                  {"Streaming Events (Advanced)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Get detailed events during streaming

async def stream_with_events(topic: str):
    chain = prompt | llm | StrOutputParser()

    async for event in chain.astream_events(
        {"topic": topic},
        version="v2"
    ):
        kind = event["event"]

        if kind == "on_chat_model_stream":
            # Token being generated
            content = event["data"]["chunk"].content
            print(content, end="", flush=True)

        elif kind == "on_chain_start":
            print(f"\\n[Chain started: {event['name']}]")

        elif kind == "on_chain_end":
            print(f"\\n[Chain ended: {event['name']}]")

asyncio.run(stream_with_events("quantum physics"))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling and Fallbacks"}
                </h2>
                <p>
                  {"LCEL provides elegant error handling:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI

# Primary model (might be expensive or rate-limited)
primary_llm = ChatOpenAI(model="gpt-4", temperature=0)

# Fallback model (cheaper, more available)
fallback_llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

# Create chain with fallback
chain_with_fallback = (
    prompt
    | primary_llm.with_fallbacks([fallback_llm])
    | StrOutputParser()
)

# If GPT-4 fails (rate limit, error), automatically tries GPT-3.5
result = chain_with_fallback.invoke({"topic": "AI safety"})`}</code></pre>
                </div>
                <h3>
                  {"Retry Configuration"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Add retry logic
chain_with_retry = (
    prompt
    | llm.with_retry(
        stop_after_attempt=3,  # Try up to 3 times
        wait_exponential_jitter=True  # Wait longer between retries
    )
    | StrOutputParser()
)

result = chain_with_retry.invoke({"topic": "resilient systems"})`}</code></pre>
                </div>
                <h3>
                  {"Custom Error Handling"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_core.runnables import RunnableLambda

def handle_error(error):
    """Custom error handler."""
    return f"Sorry, an error occurred: {str(error)}"

def safe_process(input_data):
    try:
        # Your processing logic
        return process(input_data)
    except Exception as e:
        return handle_error(e)

safe_chain = (
    prompt
    | llm
    | StrOutputParser()
).with_fallbacks([
    RunnableLambda(lambda x: "Fallback response: Unable to process request")
])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Practical Examples"}
                </h2>
                <h3>
                  {"Example 1: Blog Post Generator"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser
from langchain_core.runnables import RunnableParallel

llm = ChatOpenAI(model="gpt-4", temperature=0.7)

# Step 1: Generate title and outline in parallel
title_prompt = ChatPromptTemplate.from_template(
    "Generate a catchy blog title about: {topic}"
)

outline_prompt = ChatPromptTemplate.from_template(
    "Create a 5-point outline for a blog post about: {topic}"
)

initial_chain = RunnableParallel(
    title=title_prompt | llm | StrOutputParser(),
    outline=outline_prompt | llm | StrOutputParser(),
    topic=lambda x: x["topic"]  # Pass through original topic
)

# Step 2: Write the full blog post
blog_prompt = ChatPromptTemplate.from_template("""
Write a blog post with:
Title: {title}
Topic: {topic}
Outline: {outline}

Write engaging content, about 500 words.
""")

# Step 3: Generate meta description
meta_prompt = ChatPromptTemplate.from_template(
    "Write a 160-character SEO meta description for this blog post:\\n{blog_post}"
)

# Complete chain
blog_chain = (
    initial_chain
    | {
        "blog_post": blog_prompt | llm | StrOutputParser(),
        "title": lambda x: x["title"],
        "outline": lambda x: x["outline"]
    }
    | {
        "blog_post": lambda x: x["blog_post"],
        "title": lambda x: x["title"],
        "meta_description": meta_prompt | llm | StrOutputParser()
    }
)

result = blog_chain.invoke({"topic": "Benefits of meditation for developers"})

print(f"Title: {result['title']}")
print(f"Meta: {result['meta_description']}")
print(f"\\n{result['blog_post']}")`}</code></pre>
                </div>
                <h3>
                  {"Example 2: Document Q&A Chain"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_core.runnables import RunnablePassthrough
from operator import itemgetter

# Simulated retriever (in real app, use vector database)
def retrieve_docs(question: str) -> str:
    # Simulated document retrieval
    docs = {
        "python": "Python is a high-level programming language created by Guido van Rossum.",
        "javascript": "JavaScript is a scripting language for web development.",
        "default": "No specific information found."
    }
    for key in docs:
        if key in question.lower():
            return docs[key]
    return docs["default"]

retriever = RunnableLambda(lambda x: retrieve_docs(x["question"]))

# RAG prompt
rag_prompt = ChatPromptTemplate.from_template("""
Answer the question based on the context below.

Context: {context}

Question: {question}

Answer:""")

# RAG chain
rag_chain = (
    RunnableParallel(
        context=retriever,
        question=itemgetter("question")
    )
    | rag_prompt
    | llm
    | StrOutputParser()
)

answer = rag_chain.invoke({"question": "Who created Python?"})
print(answer)  # "Python was created by Guido van Rossum."`}</code></pre>
                </div>
                <h3>
                  {"Example 3: Multi-Language Translator"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Translate to multiple languages in parallel

translate_to_spanish = ChatPromptTemplate.from_template(
    "Translate to Spanish: {text}"
) | llm | StrOutputParser()

translate_to_french = ChatPromptTemplate.from_template(
    "Translate to French: {text}"
) | llm | StrOutputParser()

translate_to_german = ChatPromptTemplate.from_template(
    "Translate to German: {text}"
) | llm | StrOutputParser()

translate_to_japanese = ChatPromptTemplate.from_template(
    "Translate to Japanese: {text}"
) | llm | StrOutputParser()

# All translations run in parallel
multi_translate = RunnableParallel(
    original=itemgetter("text"),
    spanish=translate_to_spanish,
    french=translate_to_french,
    german=translate_to_german,
    japanese=translate_to_japanese
)

result = multi_translate.invoke({"text": "Hello, how are you today?"})

print(f"Original: {result['original']}")
print(f"Spanish: {result['spanish']}")
print(f"French: {result['french']}")
print(f"German: {result['german']}")
print(f"Japanese: {result['japanese']}")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LCEL Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep chains focused:"}
                    </strong>
                    {" Each chain should do one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Use meaningful variable names:"}
                    </strong>
                    <code>
                      {"analysis_chain"}
                    </code>
                    {" not "}
                    <code>
                      {"chain1"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Add fallbacks for production:"}
                    </strong>
                    {" Always have a backup plan"}
                  </li>
                  <li>
                    <strong>
                      {"Use streaming for long responses:"}
                    </strong>
                    {" Better user experience"}
                  </li>
                  <li>
                    <strong>
                      {"Parallelize when possible:"}
                    </strong>
                    {" Faster execution"}
                  </li>
                  <li>
                    <strong>
                      {"Test components individually:"}
                    </strong>
                    {" Debug each step separately"}
                  </li>
                  <li>
                    <strong>
                      {"Use type hints:"}
                    </strong>
                    {" Document expected inputs/outputs"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# Example of well-structured chain

from typing import TypedDict

class BlogInput(TypedDict):
    topic: str
    tone: str
    length: str

class BlogOutput(TypedDict):
    title: str
    content: str
    meta: str

def create_blog_chain():
    """Create a blog generation chain with proper structure."""

    title_chain = title_prompt | llm | StrOutputParser()
    content_chain = content_prompt | llm | StrOutputParser()
    meta_chain = meta_prompt | llm | StrOutputParser()

    return (
        RunnableParallel(
            title=title_chain,
            content=content_chain,
        )
        | {
            "title": itemgetter("title"),
            "content": itemgetter("content"),
            "meta": meta_chain
        }
    ).with_fallbacks([
        RunnableLambda(lambda x: {
            "title": "Untitled",
            "content": "Content generation failed",
            "meta": ""
        })
    ])

# Usage
blog_chain = create_blog_chain()
result: BlogOutput = blog_chain.invoke({
    "topic": "AI",
    "tone": "professional",
    "length": "medium"
})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Quick Reference"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌────────────────────────────────────────────────────────────────┐
│                    LCEL CHEAT SHEET                            │
├────────────────────────────────────────────────────────────────┤
│                                                                │
│  BASIC CHAIN                                                   │
│  chain = prompt | llm | parser                                 │
│                                                                │
│  RUN METHODS                                                   │
│  chain.invoke({"key": "value"})      # Single, sync           │
│  chain.stream({"key": "value"})      # Streaming              │
│  chain.batch([{...}, {...}])         # Multiple inputs        │
│  await chain.ainvoke({...})          # Async                  │
│                                                                │
│  PARALLEL EXECUTION                                            │
│  RunnableParallel(a=chain1, b=chain2)                         │
│                                                                │
│  CONDITIONAL ROUTING                                           │
│  RunnableBranch((condition, chain), default_chain)            │
│                                                                │
│  PASS DATA THROUGH                                             │
│  RunnablePassthrough()               # Pass all input         │
│  itemgetter("field")                 # Extract field          │
│                                                                │
│  CUSTOM FUNCTIONS                                              │
│  RunnableLambda(my_function)                                  │
│  (lambda x: transform(x))            # Inline                 │
│                                                                │
│  ERROR HANDLING                                                │
│  chain.with_fallbacks([backup_chain])                         │
│  chain.with_retry(stop_after_attempt=3)                       │
│                                                                │
└────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master LangChain Development"}
                </h2>
                <p>
                  {"Our Agentic AI program covers LCEL, chains, and advanced LangChain patterns with hands-on projects."}
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
                      {"LangChain Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Complete LangChain overview"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph"}
                    </h4>
                    {" "}
                    <p>
                      {"Complex stateful workflows"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/prompt-engineering" className="related-article-card">
                    <h4>
                      {"Prompt Engineering"}
                    </h4>
                    {" "}
                    <p>
                      {"Crafting effective prompts"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/streaming" className="related-article-card">
                    <h4>
                      {"Streaming Responses"}
                    </h4>
                    {" "}
                    <p>
                      {"Real-time AI output"}
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
