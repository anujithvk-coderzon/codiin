import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Semantic Kernel: Microsoft's Enterprise AI SDK",
  description: "Learn Microsoft Semantic Kernel - the enterprise-ready SDK for integrating LLMs into applications with plugins, planners, and memory.",
  keywords: ["Semantic Kernel", "Microsoft AI", "enterprise AI", "LLM SDK", "AI plugins", "AI planners", "C# AI", "Python AI"],
  alternates: { canonical: "/agentic-ai/articles/semantic-kernel" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/semantic-kernel",
    title: "Semantic Kernel: Microsoft's Enterprise AI SDK",
    description: "Build enterprise AI applications with Microsoft's Semantic Kernel framework.",
    images: ["/images/semantic-kernel-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Semantic Kernel Guide | CODiiN",
    description: "Microsoft's SDK for enterprise AI applications.",
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
  "headline": "Semantic Kernel: Microsoft's Enterprise AI SDK",
  "description": "Comprehensive guide to building AI applications with Microsoft Semantic Kernel",
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

export default function AgenticAiSemanticKernelPage() {
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
                {"Semantic Kernel"}
              </span>
            </div>
            <h1>
              {"Semantic Kernel"}
            </h1>
            <p className="article-subtitle">
              {"Microsoft's Enterprise-Ready SDK for AI Application Development"}
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
                  {"What is Semantic Kernel?"}
                </h2>
                <p>
                  {"Semantic Kernel (SK) is Microsoft's open-source SDK for integrating Large Language Models into applications. It's designed for enterprise use cases with first-class support for C#, Python, and Java."}
                </p>
                <p>
                  {"Key features:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Plugins:"}
                    </strong>
                    {" Modular, reusable AI capabilities"}
                  </li>
                  <li>
                    <strong>
                      {"Planners:"}
                    </strong>
                    {" AI-powered task orchestration"}
                  </li>
                  <li>
                    <strong>
                      {"Memory:"}
                    </strong>
                    {" Built-in semantic memory with vector stores"}
                  </li>
                  <li>
                    <strong>
                      {"Enterprise-ready:"}
                    </strong>
                    {" Designed for production workloads"}
                  </li>
                  <li>
                    <strong>
                      {"Multi-language:"}
                    </strong>
                    {" C#, Python, and Java support"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Semantic Kernel?"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Enterprise Integration"}
                    </h4>
                    <p>
                      {"First-class Azure OpenAI support, designed for corporate environments."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Type Safety"}
                    </h4>
                    <p>
                      {"Strong typing in C# and Python, better IDE support and error catching."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Plugin Architecture"}
                    </h4>
                    <p>
                      {"Reusable, shareable AI capabilities across projects."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Microsoft Ecosystem"}
                    </h4>
                    <p>
                      {"Integrates with Azure, Microsoft 365, and enterprise tools."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <h3>
                  {"Installation (Python)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`pip install semantic-kernel`}</code></pre>
                </div>
                <h3>
                  {"Installation (C#)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`dotnet add package Microsoft.SemanticKernel`}</code></pre>
                </div>
                <h3>
                  {"Basic Setup (Python)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import semantic_kernel as sk
from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion

# Create kernel
kernel = sk.Kernel()

# Add AI service
kernel.add_service(
    OpenAIChatCompletion(
        service_id="chat",
        ai_model_id="gpt-4",
        api_key="your-api-key"
    )
)

# Or use Azure OpenAI
from semantic_kernel.connectors.ai.open_ai import AzureChatCompletion

kernel.add_service(
    AzureChatCompletion(
        service_id="azure-chat",
        deployment_name="gpt-4",
        endpoint="https://your-resource.openai.azure.com/",
        api_key="your-azure-key"
    )
)`}</code></pre>
                </div>
                <h3>
                  {"Basic Setup (C#)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`using Microsoft.SemanticKernel;

// Create kernel builder
var builder = Kernel.CreateBuilder();

// Add OpenAI
builder.AddOpenAIChatCompletion(
    modelId: "gpt-4",
    apiKey: "your-api-key"
);

// Or Azure OpenAI
builder.AddAzureOpenAIChatCompletion(
    deploymentName: "gpt-4",
    endpoint: "https://your-resource.openai.azure.com/",
    apiKey: "your-azure-key"
);

var kernel = builder.Build();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Plugins"}
                </h2>
                <p>
                  {"Plugins are collections of functions that extend the kernel's capabilities:"}
                </p>
                <h3>
                  {"Native Functions (Python)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.functions import kernel_function

class MathPlugin:
    @kernel_function(
        name="add",
        description="Adds two numbers together"
    )
    def add(self, a: int, b: int) -> int:
        return a + b

    @kernel_function(
        name="multiply",
        description="Multiplies two numbers"
    )
    def multiply(self, a: int, b: int) -> int:
        return a * b

# Register plugin
kernel.add_plugin(MathPlugin(), plugin_name="math")`}</code></pre>
                </div>
                <h3>
                  {"Semantic Functions (Prompts)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.functions import KernelFunction

# Define a semantic function
summarize_function = KernelFunction.from_prompt(
    prompt="""Summarize the following text in 3 bullet points:

{{$input}}

Summary:""",
    plugin_name="text",
    function_name="summarize",
    description="Summarizes text into bullet points"
)

kernel.add_function(summarize_function)

# Use the function
result = await kernel.invoke(
    summarize_function,
    input="Your long text here..."
)`}</code></pre>
                </div>
                <h3>
                  {"Native Functions (C#)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`public class EmailPlugin
{
    [KernelFunction, Description("Sends an email")]
    public async Task<string> SendEmailAsync(
        [Description("Email recipient")] string to,
        [Description("Email subject")] string subject,
        [Description("Email body")] string body)
    {
        // Send email logic
        return $"Email sent to {to}";
    }

    [KernelFunction, Description("Gets unread emails")]
    public async Task<List<Email>> GetUnreadEmailsAsync()
    {
        // Fetch emails logic
        return new List<Email>();
    }
}

// Register plugin
kernel.ImportPluginFromType<EmailPlugin>();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Function Calling"}
                </h2>
                <p>
                  {"Let the AI automatically choose and call functions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.connectors.ai.open_ai import OpenAIChatCompletion
from semantic_kernel.connectors.ai.function_choice_behavior import FunctionChoiceBehavior

# Configure automatic function calling
settings = kernel.get_prompt_execution_settings_class(service_id="chat")()
settings.function_choice_behavior = FunctionChoiceBehavior.Auto()

# Chat with function calling
response = await kernel.invoke_prompt(
    prompt="What is 15 multiplied by 7?",
    settings=settings
)

print(response)  # The AI will call math.multiply and return 105`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Planners"}
                </h2>
                <p>
                  {"Planners let the AI create multi-step plans to accomplish goals:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.planners import FunctionCallingStepwisePlanner

# Create planner
planner = FunctionCallingStepwisePlanner(service_id="chat")

# Execute a complex task
result = await planner.invoke(
    kernel,
    question="Research the weather in Tokyo and send a summary email to john@example.com"
)

# The planner will:
# 1. Call weather API
# 2. Summarize the data
# 3. Send the email`}</code></pre>
                </div>
                <h3>
                  {"Handlebars Planner"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.planners.handlebars_planner import HandlebarsPlannerOptions

options = HandlebarsPlannerOptions(
    allow_loops=True,
    allow_conditions=True
)

planner = HandlebarsPlanner(options=options)

plan = await planner.create_plan(
    kernel,
    goal="Analyze sales data and create a report"
)

result = await plan.invoke(kernel)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Memory and RAG"}
                </h2>
                <p>
                  {"Semantic Kernel includes built-in memory capabilities:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.memory import SemanticTextMemory
from semantic_kernel.connectors.memory.azure_cognitive_search import AzureCognitiveSearchMemoryStore
from semantic_kernel.connectors.ai.open_ai import OpenAITextEmbedding

# Setup embeddings
embedding_service = OpenAITextEmbedding(
    ai_model_id="text-embedding-3-small",
    api_key="your-key"
)

# Setup memory store
memory_store = AzureCognitiveSearchMemoryStore(
    search_endpoint="https://your-search.search.windows.net",
    admin_key="your-key"
)

# Create semantic memory
memory = SemanticTextMemory(
    storage=memory_store,
    embeddings_generator=embedding_service
)

# Save information
await memory.save_information(
    collection="company_docs",
    id="doc1",
    text="Our company was founded in 2020...",
    description="Company history"
)

# Search memory
results = await memory.search(
    collection="company_docs",
    query="When was the company founded?",
    limit=3
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Filters and Middleware"}
                </h2>
                <p>
                  {"Add cross-cutting concerns like logging and validation:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from semantic_kernel.filters import FunctionInvocationContext

class LoggingFilter:
    async def on_function_invocation(
        self,
        context: FunctionInvocationContext,
        next_handler
    ):
        print(f"Calling: {context.function.name}")
        start = time.time()

        # Call the function
        await next_handler(context)

        elapsed = time.time() - start
        print(f"Completed in {elapsed:.2f}s")

# Add filter
kernel.add_filter("function_invocation", LoggingFilter())`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Example: Customer Support Agent"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import semantic_kernel as sk
from semantic_kernel.connectors.ai.open_ai import AzureChatCompletion
from semantic_kernel.functions import kernel_function

class CustomerSupportAgent:
    def __init__(self):
        self.kernel = sk.Kernel()
        self.kernel.add_service(
            AzureChatCompletion(
                service_id="chat",
                deployment_name="gpt-4",
                endpoint=os.getenv("AZURE_OPENAI_ENDPOINT"),
                api_key=os.getenv("AZURE_OPENAI_KEY")
            )
        )
        self._setup_plugins()

    def _setup_plugins(self):
        # Add customer support plugin
        self.kernel.add_plugin(CustomerPlugin(), "customer")
        self.kernel.add_plugin(OrderPlugin(), "orders")
        self.kernel.add_plugin(KnowledgePlugin(), "knowledge")

    async def handle_query(self, user_message: str, customer_id: str):
        settings = self.kernel.get_prompt_execution_settings_class("chat")()
        settings.function_choice_behavior = FunctionChoiceBehavior.Auto()

        response = await self.kernel.invoke_prompt(
            prompt=f"""You are a helpful customer support agent.
Customer ID: {customer_id}
Customer Query: {user_message}

Help the customer with their request using available tools.""",
            settings=settings
        )

        return str(response)

class CustomerPlugin:
    @kernel_function(description="Get customer details")
    def get_customer(self, customer_id: str) -> dict:
        # Fetch from database
        return {"name": "John Doe", "tier": "Premium"}

class OrderPlugin:
    @kernel_function(description="Get customer orders")
    def get_orders(self, customer_id: str) -> list:
        return [{"id": "ORD-123", "status": "Shipped"}]

    @kernel_function(description="Track an order")
    def track_order(self, order_id: str) -> dict:
        return {"status": "In Transit", "eta": "Dec 28"}

# Usage
agent = CustomerSupportAgent()
response = await agent.handle_query(
    "Where is my order ORD-123?",
    customer_id="CUST-456"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use dependency injection:"}
                    </strong>
                    {" Configure kernel in DI container for testability"}
                  </li>
                  <li>
                    <strong>
                      {"Organize plugins:"}
                    </strong>
                    {" Group related functions into cohesive plugins"}
                  </li>
                  <li>
                    <strong>
                      {"Add descriptions:"}
                    </strong>
                    {" Good function descriptions help the AI choose correctly"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors:"}
                    </strong>
                    {" Implement proper error handling in functions"}
                  </li>
                  <li>
                    <strong>
                      {"Use filters:"}
                    </strong>
                    {" Add logging, telemetry, and validation as filters"}
                  </li>
                  <li>
                    <strong>
                      {"Test functions:"}
                    </strong>
                    {" Unit test plugins independently from the kernel"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Enterprise AI with Expert Guidance"}
                </h2>
                <p>
                  {"Our Agentic AI program covers Semantic Kernel and enterprise AI patterns. Learn to build production-ready AI applications for corporate environments."}
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
                      {"Compare with Python's most popular framework"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/function-calling" className="related-article-card">
                    <h4>
                      {"Function Calling Explained"}
                    </h4>
                    {" "}
                    <p>
                      {"Deep dive into LLM tool use"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/autogen" className="related-article-card">
                    <h4>
                      {"AutoGen: Multi-Agent Systems"}
                    </h4>
                    {" "}
                    <p>
                      {"Another Microsoft AI framework"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about Semantic Kernel and Agentic AI."} />
    </>
  );
}
