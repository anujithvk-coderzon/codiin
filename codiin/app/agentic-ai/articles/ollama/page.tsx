import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Ollama: Running LLMs Locally",
  description: "Learn to run LLMs locally with Ollama. Set up Llama, Mistral, and other open-source models on your machine for privacy, cost savings, and offline AI.",
  keywords: ["Ollama", "local LLM", "run LLM locally", "Llama 2", "Mistral", "open source AI", "offline AI", "private AI"],
  alternates: { canonical: "/agentic-ai/articles/ollama" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/ollama",
    title: "Ollama: Running LLMs Locally",
    description: "Run powerful AI models on your own machine with Ollama.",
    images: ["/images/ollama-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ollama Local LLMs Guide | CODiiN",
    description: "Run AI models locally for free.",
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
  "headline": "Ollama: Running LLMs Locally",
  "description": "Guide to running open-source LLMs locally with Ollama",
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

export default function AgenticAiOllamaPage() {
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
                {"Ollama"}
              </span>
            </div>
            <h1>
              {"Ollama: Local LLMs"}
            </h1>
            <p className="article-subtitle">
              {"Run Powerful AI Models on Your Own Machine"}
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
                  {"What is Ollama?"}
                </h2>
                <p>
                  {"Ollama is an open-source tool that makes it easy to run Large Language Models locally on your machine. It provides a simple interface to download, run, and manage various open-source models like Llama, Mistral, and more."}
                </p>
                <p>
                  {"Why run LLMs locally?"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Privacy:"}
                    </strong>
                    {" Your data never leaves your machine"}
                  </li>
                  <li>
                    <strong>
                      {"Cost:"}
                    </strong>
                    {" No API fees - run unlimited queries"}
                  </li>
                  <li>
                    <strong>
                      {"Offline:"}
                    </strong>
                    {" Works without internet connection"}
                  </li>
                  <li>
                    <strong>
                      {"Customization:"}
                    </strong>
                    {" Fine-tune and modify models"}
                  </li>
                  <li>
                    <strong>
                      {"Speed:"}
                    </strong>
                    {" No network latency for local inference"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Installation"}
                </h2>
                <h3>
                  {"macOS"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Using Homebrew
brew install ollama

# Or download from ollama.ai`}</code></pre>
                </div>
                <h3>
                  {"Linux"}
                </h3>
                <div className="code-block">
                  <pre><code>{`curl -fsSL https://ollama.ai/install.sh | sh`}</code></pre>
                </div>
                <h3>
                  {"Windows"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Download installer from ollama.ai
# Or use WSL2 with Linux installation`}</code></pre>
                </div>
                <h3>
                  {"Docker"}
                </h3>
                <div className="code-block">
                  <pre><code>{`docker run -d -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama

# With GPU support
docker run -d --gpus=all -v ollama:/root/.ollama -p 11434:11434 --name ollama ollama/ollama`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <h3>
                  {"Download and Run a Model"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Start Ollama service
ollama serve

# In another terminal, pull and run a model
ollama run llama2

# Chat with the model
>>> What is machine learning?
Machine learning is a subset of artificial intelligence...`}</code></pre>
                </div>
                <h3>
                  {"Available Models"}
                </h3>
                <div className="code-block">
                  <pre><code>{`# Popular models
ollama pull llama2              # Meta's Llama 2 (7B default)
ollama pull llama2:13b          # Larger Llama 2
ollama pull mistral             # Mistral 7B
ollama pull mixtral             # Mistral's MoE model
ollama pull codellama           # Code-specialized Llama
ollama pull phi                 # Microsoft's small model
ollama pull neural-chat         # Intel's chat model
ollama pull starling-lm         # Berkeley's model

# List downloaded models
ollama list

# Remove a model
ollama rm llama2`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using Ollama with Python"}
                </h2>
                <h3>
                  {"Basic Usage"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import ollama

# Simple generation
response = ollama.generate(
    model='llama2',
    prompt='Explain quantum computing in simple terms'
)
print(response['response'])

# Chat interface
response = ollama.chat(
    model='llama2',
    messages=[
        {'role': 'user', 'content': 'Why is the sky blue?'}
    ]
)
print(response['message']['content'])`}</code></pre>
                </div>
                <h3>
                  {"Streaming Responses"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import ollama

# Stream the response
for chunk in ollama.chat(
    model='llama2',
    messages=[{'role': 'user', 'content': 'Write a poem about AI'}],
    stream=True
):
    print(chunk['message']['content'], end='', flush=True)`}</code></pre>
                </div>
                <h3>
                  {"Using the REST API"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import requests

# Ollama exposes an OpenAI-compatible API
response = requests.post(
    'http://localhost:11434/api/generate',
    json={
        'model': 'llama2',
        'prompt': 'Hello, how are you?',
        'stream': False
    }
)
print(response.json()['response'])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Integration with LangChain"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from langchain_community.llms import Ollama
from langchain_community.chat_models import ChatOllama
from langchain.prompts import ChatPromptTemplate
from langchain_core.output_parsers import StrOutputParser

# Basic LLM
llm = Ollama(model="llama2")
response = llm.invoke("What is the capital of France?")

# Chat model
chat = ChatOllama(model="llama2")
prompt = ChatPromptTemplate.from_messages([
    ("system", "You are a helpful assistant."),
    ("human", "{input}")
])

chain = prompt | chat | StrOutputParser()
response = chain.invoke({"input": "Explain Docker"})`}</code></pre>
                </div>
                <h3>
                  {"Ollama with RAG"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_community.embeddings import OllamaEmbeddings
from langchain_community.vectorstores import Chroma
from langchain_community.chat_models import ChatOllama
from langchain.chains import RetrievalQA

# Use Ollama for embeddings too
embeddings = OllamaEmbeddings(model="llama2")

# Create vector store
vectorstore = Chroma.from_documents(
    documents=docs,
    embedding=embeddings
)

# Create RAG chain
llm = ChatOllama(model="llama2")
qa_chain = RetrievalQA.from_chain_type(
    llm=llm,
    retriever=vectorstore.as_retriever()
)

result = qa_chain.invoke("What does the document say about...")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Custom Models (Modelfiles)"}
                </h2>
                <p>
                  {"Create custom models with specific behaviors:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Create a Modelfile
FROM llama2

# Set parameters
PARAMETER temperature 0.7
PARAMETER top_p 0.9
PARAMETER num_ctx 4096

# Set system prompt
SYSTEM """
You are a helpful coding assistant specialized in Python.
Always provide code examples when relevant.
Explain concepts clearly and concisely.
"""

# Add custom template
TEMPLATE """{{ if .System }}{{ .System }}{{ end }}
{{ if .Prompt }}User: {{ .Prompt }}{{ end }}
Assistant: """`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`# Build and run custom model
ollama create python-assistant -f Modelfile
ollama run python-assistant

>>> How do I read a CSV file?`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Hardware Requirements"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"7B Models"}
                    </h4>
                    <p>
                      {"8GB RAM minimum, 16GB recommended. Works on most modern laptops."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"13B Models"}
                    </h4>
                    <p>
                      {"16GB RAM minimum, 32GB recommended. Better quality, slower speed."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"GPU Acceleration"}
                    </h4>
                    <p>
                      {"NVIDIA GPU with CUDA greatly improves speed. Apple Silicon M1/M2/M3 works great."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Quantization"}
                    </h4>
                    <p>
                      {"4-bit quantized models (Q4) use less memory with minimal quality loss."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Model Comparison"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Model sizes and use cases

| Model          | Size   | Best For                    |
|----------------|--------|------------------------------|
| phi            | 2.7B   | Fast, simple tasks          |
| llama2:7b      | 7B     | General purpose, balanced   |
| mistral        | 7B     | High quality, efficient     |
| codellama      | 7B     | Code generation             |
| llama2:13b     | 13B    | Better reasoning            |
| mixtral        | 47B*   | State-of-art open source    |

* Mixtral uses 12B active parameters (MoE)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"OpenAI Compatibility"}
                </h2>
                <p>
                  {"Use Ollama as a drop-in replacement for OpenAI:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

# Point to local Ollama
client = OpenAI(
    base_url="http://localhost:11434/v1",
    api_key="ollama"  # Not used but required
)

response = client.chat.completions.create(
    model="llama2",
    messages=[
        {"role": "user", "content": "Hello!"}
    ]
)
print(response.choices[0].message.content)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start small:"}
                    </strong>
                    {" Test with 7B models before scaling up"}
                  </li>
                  <li>
                    <strong>
                      {"Use quantization:"}
                    </strong>
                    {" Q4_K_M offers good quality/speed balance"}
                  </li>
                  <li>
                    <strong>
                      {"GPU matters:"}
                    </strong>
                    {" Use GPU acceleration when available"}
                  </li>
                  <li>
                    <strong>
                      {"Context length:"}
                    </strong>
                    {" Set num_ctx based on your needs"}
                  </li>
                  <li>
                    <strong>
                      {"Custom Modelfiles:"}
                    </strong>
                    {" Create specialized models for your use case"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor resources:"}
                    </strong>
                    {" Watch memory usage during inference"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Local AI with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers Ollama and local model deployment. Learn to build privacy-preserving AI applications."}
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
                  <Link href="/agentic-ai/articles/llm-foundations" className="related-article-card">
                    <h4>
                      {"LLM Foundations"}
                    </h4>
                    {" "}
                    <p>
                      {"Understanding how language models work"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"LangChain Guide"}
                    </h4>
                    {" "}
                    <p>
                      {"Build applications with Ollama + LangChain"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/cost-optimization" className="related-article-card">
                    <h4>
                      {"Cost Optimization"}
                    </h4>
                    {" "}
                    <p>
                      {"Reduce AI costs with local models"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about running local LLMs with Ollama."} />
    </>
  );
}
