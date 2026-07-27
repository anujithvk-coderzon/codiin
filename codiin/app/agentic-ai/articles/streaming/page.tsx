import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Streaming Responses: Real-Time AI Output",
  description: "Implement streaming responses for AI applications. Server-Sent Events, WebSockets, and real-time LLM output for better user experience.",
  keywords: ["LLM streaming", "SSE", "WebSocket", "real-time AI", "streaming responses", "FastAPI streaming", "async streaming"],
  alternates: { canonical: "/agentic-ai/articles/streaming" },
  openGraph: {
    type: "website",
    url: "/agentic-ai/articles/streaming",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiStreamingPage() {
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
                {"Streaming"}
              </span>
            </div>
            <h1>
              {"Streaming Responses"}
            </h1>
            <p className="article-subtitle">
              {"Real-Time AI Output for Better User Experience"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"11 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why Streaming Matters"}
                </h2>
                <p>
                  {"LLM responses can take seconds to generate. Without streaming, users stare at a blank screen. With streaming, they see words appear in real-time - a much better experience."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Perceived performance:"}
                    </strong>
                    {" Users feel the app is faster"}
                  </li>
                  <li>
                    <strong>
                      {"Engagement:"}
                    </strong>
                    {" Reading as it generates keeps attention"}
                  </li>
                  <li>
                    <strong>
                      {"Early cancellation:"}
                    </strong>
                    {" Users can stop if response is wrong"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"OpenAI Streaming"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

client = OpenAI()

# Enable streaming
stream = client.chat.completions.create(
    model="gpt-4",
    messages=[{"role": "user", "content": "Write a story"}],
    stream=True
)

# Process chunks
for chunk in stream:
    if chunk.choices[0].delta.content:
        print(chunk.choices[0].delta.content, end="", flush=True)

# Async version
from openai import AsyncOpenAI

async_client = AsyncOpenAI()

async def stream_response():
    stream = await async_client.chat.completions.create(
        model="gpt-4",
        messages=[{"role": "user", "content": "Write a story"}],
        stream=True
    )

    async for chunk in stream:
        if chunk.choices[0].delta.content:
            yield chunk.choices[0].delta.content`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"FastAPI Streaming Endpoint"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI
from fastapi.responses import StreamingResponse
from openai import OpenAI
import json

app = FastAPI()
client = OpenAI()

@app.post("/chat/stream")
async def stream_chat(request: dict):
    async def generate():
        stream = client.chat.completions.create(
            model="gpt-4",
            messages=request["messages"],
            stream=True
        )

        for chunk in stream:
            content = chunk.choices[0].delta.content
            if content:
                # Send as Server-Sent Event
                yield f"data: {json.dumps({'content': content})}\\n\\n"

        yield "data: [DONE]\\n\\n"

    return StreamingResponse(
        generate(),
        media_type="text/event-stream"
    )`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Frontend Consumption"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// JavaScript EventSource for SSE
const eventSource = new EventSource('/chat/stream');

eventSource.onmessage = (event) => {
    if (event.data === '[DONE]') {
        eventSource.close();
        return;
    }

    const data = JSON.parse(event.data);
    document.getElementById('response').textContent += data.content;
};

// Or using fetch with ReadableStream
async function streamChat(messages) {
    const response = await fetch('/chat/stream', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages })
    });

    const reader = response.body.getReader();
    const decoder = new TextDecoder();

    while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const text = decoder.decode(value);
        // Parse SSE format
        const lines = text.split('\\n');
        for (const line of lines) {
            if (line.startsWith('data: ')) {
                const data = line.slice(6);
                if (data !== '[DONE]') {
                    const { content } = JSON.parse(data);
                    updateUI(content);
                }
            }
        }
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"LangChain Streaming"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.callbacks.streaming_stdout import StreamingStdOutCallbackHandler

# Method 1: Callbacks
llm = ChatOpenAI(
    model="gpt-4",
    streaming=True,
    callbacks=[StreamingStdOutCallbackHandler()]
)
llm.invoke("Tell me a joke")

# Method 2: Stream method
llm = ChatOpenAI(model="gpt-4")

for chunk in llm.stream("Tell me a story"):
    print(chunk.content, end="", flush=True)

# Method 3: Async streaming
async for chunk in llm.astream("Tell me a story"):
    print(chunk.content, end="", flush=True)

# Streaming with chains
from langchain_core.output_parsers import StrOutputParser
from langchain.prompts import ChatPromptTemplate

prompt = ChatPromptTemplate.from_template("Write about {topic}")
chain = prompt | llm | StrOutputParser()

for chunk in chain.stream({"topic": "AI"}):
    print(chunk, end="", flush=True)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Streaming with Function Calling"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI
import json

client = OpenAI()

tools = [{"type": "function", "function": {...}}]

stream = client.chat.completions.create(
    model="gpt-4",
    messages=[...],
    tools=tools,
    stream=True
)

# Accumulate function call arguments
function_args = ""
function_name = ""

for chunk in stream:
    delta = chunk.choices[0].delta

    # Check for function call
    if delta.tool_calls:
        tool_call = delta.tool_calls[0]
        if tool_call.function.name:
            function_name = tool_call.function.name
        if tool_call.function.arguments:
            function_args += tool_call.function.arguments

    # Check for content
    if delta.content:
        print(delta.content, end="", flush=True)

# After stream ends, execute function if called
if function_name:
    args = json.loads(function_args)
    result = execute_function(function_name, args)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"WebSocket Streaming"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, WebSocket
from openai import OpenAI

app = FastAPI()
client = OpenAI()

@app.websocket("/ws/chat")
async def websocket_chat(websocket: WebSocket):
    await websocket.accept()

    while True:
        # Receive message
        data = await websocket.receive_json()

        # Stream response
        stream = client.chat.completions.create(
            model="gpt-4",
            messages=data["messages"],
            stream=True
        )

        for chunk in stream:
            content = chunk.choices[0].delta.content
            if content:
                await websocket.send_json({
                    "type": "chunk",
                    "content": content
                })

        await websocket.send_json({"type": "done"})`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Buffer appropriately:"}
                    </strong>
                    {" Send word/sentence chunks, not character by character"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors:"}
                    </strong>
                    {" Stream errors gracefully to the client"}
                  </li>
                  <li>
                    <strong>
                      {"Timeout handling:"}
                    </strong>
                    {" Set appropriate timeouts for long responses"}
                  </li>
                  <li>
                    <strong>
                      {"Memory management:"}
                    </strong>
                    {" Don't accumulate entire response in memory"}
                  </li>
                  <li>
                    <strong>
                      {"Cancellation:"}
                    </strong>
                    {" Allow users to cancel ongoing streams"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Real-Time AI Applications"}
                </h2>
                <p>
                  {"Our Agentic AI program covers streaming and production deployment. Learn to build responsive AI experiences."}
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
                      {"Streaming with LangChain"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/cost-optimization" className="related-article-card">
                    <h4>
                      {"Cost Optimization"}
                    </h4>
                    {" "}
                    <p>
                      {"Efficient API usage"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>

    </>
  );
}
