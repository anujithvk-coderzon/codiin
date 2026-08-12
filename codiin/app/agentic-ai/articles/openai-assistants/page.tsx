import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "OpenAI Assistants API: Building Stateful AI Agents",
  description: "Learn the OpenAI Assistants API - build stateful AI agents with threads, file handling, code interpreter, and function calling. Complete guide with examples.",
  keywords: ["OpenAI Assistants API", "GPT-4 agents", "AI assistants", "code interpreter", "function calling", "threads", "file search", "AI development"],
  alternates: { canonical: "/agentic-ai/articles/openai-assistants" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/openai-assistants",
    title: "OpenAI Assistants API: Building Stateful AI Agents",
    description: "Master the OpenAI Assistants API - threads, tools, file handling, and building production agents.",
    images: ["/images/openai-assistants-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenAI Assistants API Guide | CODiiN",
    description: "Master OpenAI's official API for building AI agents.",
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
  "headline": "OpenAI Assistants API: Building Stateful AI Agents",
  "description": "Comprehensive guide to using OpenAI's Assistants API for building AI agents",
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

export default function AgenticAiOpenaiAssistantsPage() {
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
                {"OpenAI Assistants"}
              </span>
            </div>
            <h1>
              {"OpenAI Assistants API"}
            </h1>
            <p className="article-subtitle">
              {"OpenAI's Official Framework for Building Stateful AI Agents"}
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
                  {"What is the Assistants API?"}
                </h2>
                <p>
                  {"The OpenAI Assistants API is a managed service for building AI agents. Unlike the basic Chat Completions API, Assistants provides:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Persistent Threads:"}
                    </strong>
                    {" Conversation history managed by OpenAI"}
                  </li>
                  <li>
                    <strong>
                      {"Built-in Tools:"}
                    </strong>
                    {" Code Interpreter, File Search, and Function Calling"}
                  </li>
                  <li>
                    <strong>
                      {"File Handling:"}
                    </strong>
                    {" Upload and process documents, images, and code"}
                  </li>
                  <li>
                    <strong>
                      {"Stateful Conversations:"}
                    </strong>
                    {" Multi-turn interactions without manual context management"}
                  </li>
                </ul>
                <p>
                  {"This makes it easier to build production-grade AI assistants without managing conversation state, file processing, or tool execution yourself."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <h3>
                  {"Assistants"}
                </h3>
                <p>
                  {"An Assistant is a configured AI agent with specific instructions, tools, and a model."}
                </p>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

client = OpenAI()

# Create an assistant
assistant = client.beta.assistants.create(
    name="Data Analyst",
    instructions="""You are a data analyst assistant. Help users analyze data,
    create visualizations, and extract insights. Use the code interpreter
    to run Python code when needed.""",
    model="gpt-4-turbo",
    tools=[
        {"type": "code_interpreter"},
        {"type": "file_search"}
    ]
)

print(f"Created assistant: {assistant.id}")`}</code></pre>
                </div>
                <h3>
                  {"Threads"}
                </h3>
                <p>
                  {"Threads represent conversations. OpenAI manages the message history for you."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Create a new thread (conversation)
thread = client.beta.threads.create()

# Add a message to the thread
message = client.beta.threads.messages.create(
    thread_id=thread.id,
    role="user",
    content="Analyze the sales data I uploaded and find the top-performing products."
)

print(f"Thread ID: {thread.id}")`}</code></pre>
                </div>
                <h3>
                  {"Runs"}
                </h3>
                <p>
                  {"A Run executes the assistant on a thread, generating a response."}
                </p>
                <div className="code-block">
                  <pre><code>{`import time

# Create a run
run = client.beta.threads.runs.create(
    thread_id=thread.id,
    assistant_id=assistant.id
)

# Wait for completion
while run.status in ["queued", "in_progress"]:
    time.sleep(1)
    run = client.beta.threads.runs.retrieve(
        thread_id=thread.id,
        run_id=run.id
    )

# Get the assistant's response
messages = client.beta.threads.messages.list(thread_id=thread.id)
for msg in messages.data:
    if msg.role == "assistant":
        print(msg.content[0].text.value)
        break`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Built-in Tools"}
                </h2>
                <h3>
                  {"Code Interpreter"}
                </h3>
                <p>
                  {"Executes Python code in a sandboxed environment. Perfect for data analysis, calculations, and file processing."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Upload a file for code interpreter
file = client.files.create(
    file=open("sales_data.csv", "rb"),
    purpose="assistants"
)

# Create assistant with code interpreter
assistant = client.beta.assistants.create(
    name="Data Analyst",
    instructions="Analyze data files using Python. Create visualizations when helpful.",
    model="gpt-4-turbo",
    tools=[{"type": "code_interpreter"}],
    tool_resources={
        "code_interpreter": {
            "file_ids": [file.id]
        }
    }
)

# The assistant can now read and analyze the CSV file`}</code></pre>
                </div>
                <h3>
                  {"File Search (Retrieval)"}
                </h3>
                <p>
                  {"Automatically chunks, embeds, and searches through uploaded documents."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Create a vector store for documents
vector_store = client.beta.vector_stores.create(
    name="Company Knowledge Base"
)

# Upload files to the vector store
file_batch = client.beta.vector_stores.file_batches.upload_and_poll(
    vector_store_id=vector_store.id,
    files=[
        open("employee_handbook.pdf", "rb"),
        open("product_catalog.pdf", "rb"),
        open("faq.pdf", "rb")
    ]
)

# Create assistant with file search
assistant = client.beta.assistants.create(
    name="HR Assistant",
    instructions="Answer questions about company policies using the knowledge base.",
    model="gpt-4-turbo",
    tools=[{"type": "file_search"}],
    tool_resources={
        "file_search": {
            "vector_store_ids": [vector_store.id]
        }
    }
)`}</code></pre>
                </div>
                <h3>
                  {"Function Calling"}
                </h3>
                <p>
                  {"Define custom functions that the assistant can call, extending its capabilities."}
                </p>
                <div className="code-block">
                  <pre><code>{`import json

# Define custom functions
tools = [
    {
        "type": "function",
        "function": {
            "name": "get_weather",
            "description": "Get current weather for a city",
            "parameters": {
                "type": "object",
                "properties": {
                    "city": {
                        "type": "string",
                        "description": "City name"
                    },
                    "unit": {
                        "type": "string",
                        "enum": ["celsius", "fahrenheit"],
                        "description": "Temperature unit"
                    }
                },
                "required": ["city"]
            }
        }
    },
    {
        "type": "function",
        "function": {
            "name": "send_email",
            "description": "Send an email",
            "parameters": {
                "type": "object",
                "properties": {
                    "to": {"type": "string"},
                    "subject": {"type": "string"},
                    "body": {"type": "string"}
                },
                "required": ["to", "subject", "body"]
            }
        }
    }
]

assistant = client.beta.assistants.create(
    name="Personal Assistant",
    instructions="Help users with tasks. Use available functions when needed.",
    model="gpt-4-turbo",
    tools=tools
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Handling Function Calls"}
                </h2>
                <p>
                  {"When the assistant wants to use a function, you need to execute it and submit the result:"}
                </p>
                <div className="code-block">
                  <pre><code>{`def handle_run(client, thread_id, assistant_id):
    """Execute a run and handle any required actions."""

    run = client.beta.threads.runs.create(
        thread_id=thread_id,
        assistant_id=assistant_id
    )

    while True:
        run = client.beta.threads.runs.retrieve(
            thread_id=thread_id,
            run_id=run.id
        )

        if run.status == "completed":
            break
        elif run.status == "requires_action":
            # Handle function calls
            tool_outputs = []

            for tool_call in run.required_action.submit_tool_outputs.tool_calls:
                function_name = tool_call.function.name
                arguments = json.loads(tool_call.function.arguments)

                # Execute the function
                if function_name == "get_weather":
                    result = get_weather(arguments["city"])
                elif function_name == "send_email":
                    result = send_email(
                        arguments["to"],
                        arguments["subject"],
                        arguments["body"]
                    )
                else:
                    result = {"error": f"Unknown function: {function_name}"}

                tool_outputs.append({
                    "tool_call_id": tool_call.id,
                    "output": json.dumps(result)
                })

            # Submit results back to the assistant
            run = client.beta.threads.runs.submit_tool_outputs(
                thread_id=thread_id,
                run_id=run.id,
                tool_outputs=tool_outputs
            )
        elif run.status in ["failed", "cancelled", "expired"]:
            raise Exception(f"Run failed with status: {run.status}")
        else:
            time.sleep(1)

    return run

# Example function implementations
def get_weather(city):
    # In practice, call a weather API
    return {"city": city, "temperature": 22, "condition": "sunny"}

def send_email(to, subject, body):
    # In practice, use an email service
    return {"status": "sent", "to": to}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Streaming Responses"}
                </h2>
                <p>
                  {"Get real-time responses as the assistant generates them:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from openai import AssistantEventHandler

class MyEventHandler(AssistantEventHandler):
    def on_text_created(self, text):
        print(f"\\nAssistant: ", end="", flush=True)

    def on_text_delta(self, delta, snapshot):
        print(delta.value, end="", flush=True)

    def on_tool_call_created(self, tool_call):
        print(f"\\n\\nUsing tool: {tool_call.type}\\n", flush=True)

    def on_tool_call_delta(self, delta, snapshot):
        if delta.type == "code_interpreter":
            if delta.code_interpreter.input:
                print(delta.code_interpreter.input, end="", flush=True)
            if delta.code_interpreter.outputs:
                for output in delta.code_interpreter.outputs:
                    if output.type == "logs":
                        print(f"\\n{output.logs}", flush=True)

# Use streaming
with client.beta.threads.runs.stream(
    thread_id=thread.id,
    assistant_id=assistant.id,
    event_handler=MyEventHandler()
) as stream:
    stream.until_done()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example: Document Q&A Assistant"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI
import time

class DocumentAssistant:
    def __init__(self):
        self.client = OpenAI()
        self.assistant = None
        self.thread = None
        self.vector_store = None

    def setup(self, documents: list[str]):
        """Initialize the assistant with documents."""

        # Create vector store
        self.vector_store = self.client.beta.vector_stores.create(
            name="Document Store"
        )

        # Upload documents
        file_streams = [open(doc, "rb") for doc in documents]
        self.client.beta.vector_stores.file_batches.upload_and_poll(
            vector_store_id=self.vector_store.id,
            files=file_streams
        )

        # Create assistant
        self.assistant = self.client.beta.assistants.create(
            name="Document Q&A",
            instructions="""You are a helpful assistant that answers questions
            based on the provided documents. Always cite your sources.
            If you cannot find relevant information, say so clearly.""",
            model="gpt-4-turbo",
            tools=[{"type": "file_search"}],
            tool_resources={
                "file_search": {
                    "vector_store_ids": [self.vector_store.id]
                }
            }
        )

        # Create thread
        self.thread = self.client.beta.threads.create()

        return self

    def ask(self, question: str) -> str:
        """Ask a question about the documents."""

        # Add user message
        self.client.beta.threads.messages.create(
            thread_id=self.thread.id,
            role="user",
            content=question
        )

        # Run assistant
        run = self.client.beta.threads.runs.create(
            thread_id=self.thread.id,
            assistant_id=self.assistant.id
        )

        # Wait for completion
        while run.status in ["queued", "in_progress"]:
            time.sleep(1)
            run = self.client.beta.threads.runs.retrieve(
                thread_id=self.thread.id,
                run_id=run.id
            )

        if run.status == "failed":
            return f"Error: {run.last_error.message}"

        # Get response
        messages = self.client.beta.threads.messages.list(
            thread_id=self.thread.id,
            order="desc",
            limit=1
        )

        return messages.data[0].content[0].text.value

    def cleanup(self):
        """Clean up resources."""
        if self.assistant:
            self.client.beta.assistants.delete(self.assistant.id)
        if self.vector_store:
            self.client.beta.vector_stores.delete(self.vector_store.id)

# Usage
assistant = DocumentAssistant()
assistant.setup([
    "company_policies.pdf",
    "employee_handbook.pdf",
    "benefits_guide.pdf"
])

answer = assistant.ask("What is the vacation policy for new employees?")
print(answer)

# Continue the conversation
follow_up = assistant.ask("How do I request time off?")
print(follow_up)

# Clean up when done
assistant.cleanup()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Assistants API vs Other Approaches"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Assistants API"}
                    </h4>
                    <p>
                      <strong>
                        {"Pros:"}
                      </strong>
                      {" Managed state, built-in RAG, code execution"}
                      <br />
                      <strong>
                        {"Cons:"}
                      </strong>
                      {" OpenAI lock-in, cost per stored file"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Chat Completions + Custom"}
                    </h4>
                    <p>
                      <strong>
                        {"Pros:"}
                      </strong>
                      {" Full control, portable, flexible"}
                      <br />
                      <strong>
                        {"Cons:"}
                      </strong>
                      {" Build everything yourself"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"LangChain Agents"}
                    </h4>
                    <p>
                      <strong>
                        {"Pros:"}
                      </strong>
                      {" Many integrations, model-agnostic"}
                      <br />
                      <strong>
                        {"Cons:"}
                      </strong>
                      {" More complex, learning curve"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"When to Use Assistants"}
                    </h4>
                    <p>
                      {"Quick prototypes, document Q&A, code analysis - when OpenAI lock-in is acceptable"}
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
                      {"Clear Instructions:"}
                    </strong>
                    {" Write detailed system prompts that define behavior, constraints, and output format"}
                  </li>
                  <li>
                    <strong>
                      {"Manage Costs:"}
                    </strong>
                    {" Monitor file storage and run usage - both are billed separately"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Errors:"}
                    </strong>
                    {" Always check run status and handle failures gracefully"}
                  </li>
                  <li>
                    <strong>
                      {"Clean Up Resources:"}
                    </strong>
                    {" Delete assistants, threads, files, and vector stores when no longer needed"}
                  </li>
                  <li>
                    <strong>
                      {"Use Streaming:"}
                    </strong>
                    {" For better UX, stream responses rather than waiting for completion"}
                  </li>
                  <li>
                    <strong>
                      {"Version Your Assistants:"}
                    </strong>
                    {" Store assistant configurations in code for reproducibility"}
                  </li>
                  <li>
                    <strong>
                      {"Set Timeouts:"}
                    </strong>
                    {" Runs can take time - implement appropriate timeouts"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Pricing Considerations"}
                </h2>
                <p>
                  {"The Assistants API has multiple cost components:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Model Usage:"}
                    </strong>
                    {" Standard token pricing for input/output"}
                  </li>
                  <li>
                    <strong>
                      {"Code Interpreter:"}
                    </strong>
                    {" $0.03 per session (resets after 1 hour of inactivity)"}
                  </li>
                  <li>
                    <strong>
                      {"File Search:"}
                    </strong>
                    {" $0.10 per GB of vector storage per day"}
                  </li>
                  <li>
                    <strong>
                      {"File Storage:"}
                    </strong>
                    {" $0.20 per GB per day for uploaded files"}
                  </li>
                </ul>
                <p>
                  {"For cost-sensitive applications, consider using the Chat Completions API with your own RAG implementation."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master AI Agent Development"}
                </h2>
                <p>
                  {"Our Agentic AI program covers OpenAI Assistants, LangChain, and multiple agent frameworks. Learn to choose the right approach for each use case and build production-ready AI agents."}
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
                  <Link href="/agentic-ai/articles/function-calling" className="related-article-card">
                    <h4>
                      {"Function Calling: Connecting LLMs to Tools"}
                    </h4>
                    {" "}
                    <p>
                      {"Deep dive into how AI agents use tools"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langchain" className="related-article-card">
                    <h4>
                      {"LangChain: Building LLM Applications"}
                    </h4>
                    {" "}
                    <p>
                      {"Alternative framework for building agents"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG: Retrieval Augmented Generation"}
                    </h4>
                    {" "}
                    <p>
                      {"Build your own document Q&A systems"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about OpenAI Assistants and Agentic AI."} />
    </>
  );
}
