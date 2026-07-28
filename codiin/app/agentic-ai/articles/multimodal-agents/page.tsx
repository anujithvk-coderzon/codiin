import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Multimodal AI Agents: Beyond Text",
  description: "Build multimodal AI agents that understand images, audio, and video. Learn GPT-4V, Claude Vision, and multimodal RAG techniques.",
  keywords: ["multimodal AI", "GPT-4 Vision", "Claude Vision", "image understanding", "visual AI agents", "multimodal RAG", "vision language models"],
  alternates: { canonical: "/agentic-ai/articles/multimodal-agents" },
  openGraph: {
    type: "article",
    url: "/agentic-ai/articles/multimodal-agents",
    title: "Multimodal AI Agents: Beyond Text",
    description: "Build AI agents that see, hear, and understand multiple modalities.",
    images: ["/images/multimodal-agents-og.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Multimodal AI Agents Guide | CODiiN",
    description: "Build AI that understands images, audio, and video.",
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
  "headline": "Multimodal AI Agents: Beyond Text",
  "description": "Guide to building AI agents that process images, audio, and video",
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

export default function AgenticAiMultimodalAgentsPage() {
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
                {"Multimodal Agents"}
              </span>
            </div>
            <h1>
              {"Multimodal AI Agents"}
            </h1>
            <p className="article-subtitle">
              {"Building AI That Sees, Hears, and Understands"}
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
                  {"What Are Multimodal Agents?"}
                </h2>
                <p>
                  {"Multimodal AI agents can process and understand multiple types of input - text, images, audio, and video. This enables powerful new capabilities:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Visual understanding:"}
                    </strong>
                    {" Analyze images, screenshots, diagrams"}
                  </li>
                  <li>
                    <strong>
                      {"Document processing:"}
                    </strong>
                    {" Extract info from PDFs with charts and tables"}
                  </li>
                  <li>
                    <strong>
                      {"Video analysis:"}
                    </strong>
                    {" Summarize videos, extract key frames"}
                  </li>
                  <li>
                    <strong>
                      {"Audio processing:"}
                    </strong>
                    {" Transcribe and analyze speech"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Vision Language Models"}
                </h2>
                <h3>
                  {"GPT-4 Vision (GPT-4V)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI
import base64

client = OpenAI()

def encode_image(image_path):
    with open(image_path, "rb") as f:
        return base64.b64encode(f.read()).decode("utf-8")

# Analyze an image
image_data = encode_image("screenshot.png")

response = client.chat.completions.create(
    model="gpt-4-vision-preview",
    messages=[
        {
            "role": "user",
            "content": [
                {"type": "text", "text": "What's in this image?"},
                {
                    "type": "image_url",
                    "image_url": {
                        "url": f"data:image/png;base64,{image_data}"
                    }
                }
            ]
        }
    ],
    max_tokens=500
)

print(response.choices[0].message.content)`}</code></pre>
                </div>
                <h3>
                  {"Claude Vision"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import anthropic
import base64

client = anthropic.Anthropic()

# Read and encode image
with open("diagram.png", "rb") as f:
    image_data = base64.standard_b64encode(f.read()).decode("utf-8")

response = client.messages.create(
    model="claude-3-sonnet-20240229",
    max_tokens=1024,
    messages=[
        {
            "role": "user",
            "content": [
                {
                    "type": "image",
                    "source": {
                        "type": "base64",
                        "media_type": "image/png",
                        "data": image_data
                    }
                },
                {
                    "type": "text",
                    "text": "Explain this architecture diagram"
                }
            ]
        }
    ]
)

print(response.content[0].text)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multimodal Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Document Analysis"}
                    </h4>
                    <p>
                      {"Extract data from receipts, invoices, forms with complex layouts."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"UI Testing"}
                    </h4>
                    <p>
                      {"Analyze screenshots to verify UI elements and detect bugs."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Chart Understanding"}
                    </h4>
                    <p>
                      {"Interpret graphs and visualizations in reports."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Accessibility"}
                    </h4>
                    <p>
                      {"Generate image descriptions for visually impaired users."}
                    </p>
                  </div>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Building a Visual Agent"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI
import base64
from typing import List

class VisualAgent:
    def __init__(self):
        self.client = OpenAI()
        self.conversation = []

    def encode_image(self, path: str) -> str:
        with open(path, "rb") as f:
            return base64.b64encode(f.read()).decode("utf-8")

    def analyze_image(self, image_path: str, question: str) -> str:
        image_data = self.encode_image(image_path)

        message = {
            "role": "user",
            "content": [
                {"type": "text", "text": question},
                {
                    "type": "image_url",
                    "image_url": {"url": f"data:image/png;base64,{image_data}"}
                }
            ]
        }
        self.conversation.append(message)

        response = self.client.chat.completions.create(
            model="gpt-4-vision-preview",
            messages=self.conversation,
            max_tokens=1000
        )

        answer = response.choices[0].message.content
        self.conversation.append({"role": "assistant", "content": answer})

        return answer

    def compare_images(self, images: List[str], question: str) -> str:
        content = [{"type": "text", "text": question}]

        for i, path in enumerate(images):
            image_data = self.encode_image(path)
            content.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/png;base64,{image_data}"}
            })

        response = self.client.chat.completions.create(
            model="gpt-4-vision-preview",
            messages=[{"role": "user", "content": content}],
            max_tokens=1000
        )

        return response.choices[0].message.content

# Usage
agent = VisualAgent()

# Analyze a single image
result = agent.analyze_image("chart.png", "What trends do you see?")
print(result)

# Compare multiple images
diff = agent.compare_images(
    ["before.png", "after.png"],
    "What changed between these two screenshots?"
)
print(diff)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Multimodal RAG"}
                </h2>
                <p>
                  {"Combine vision and text retrieval for document understanding:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from langchain_community.document_loaders import PyPDFLoader
from langchain_openai import ChatOpenAI, OpenAIEmbeddings
from langchain_community.vectorstores import Chroma
from langchain.text_splitter import RecursiveCharacterTextSplitter
import fitz  # PyMuPDF
import base64

class MultimodalRAG:
    def __init__(self):
        self.llm = ChatOpenAI(model="gpt-4-vision-preview")
        self.embeddings = OpenAIEmbeddings()
        self.vectorstore = None

    def extract_images_from_pdf(self, pdf_path: str):
        """Extract images from PDF pages."""
        doc = fitz.open(pdf_path)
        images = []

        for page_num in range(len(doc)):
            page = doc[page_num]
            # Render page as image
            pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
            img_bytes = pix.tobytes("png")
            images.append({
                "page": page_num,
                "image": base64.b64encode(img_bytes).decode()
            })

        return images

    def index_document(self, pdf_path: str):
        """Index both text and images from PDF."""
        # Extract text
        loader = PyPDFLoader(pdf_path)
        documents = loader.load()

        # Split text
        splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=200
        )
        texts = splitter.split_documents(documents)

        # Create vector store
        self.vectorstore = Chroma.from_documents(
            documents=texts,
            embedding=self.embeddings
        )

        # Store images separately
        self.images = self.extract_images_from_pdf(pdf_path)

    def query(self, question: str) -> str:
        # Get relevant text chunks
        docs = self.vectorstore.similarity_search(question, k=3)
        context = "\\n".join([doc.page_content for doc in docs])

        # Get relevant page images
        page_nums = set(doc.metadata.get("page", 0) for doc in docs)
        relevant_images = [
            img for img in self.images
            if img["page"] in page_nums
        ][:2]  # Limit to 2 images

        # Build multimodal prompt
        content = [
            {"type": "text", "text": f"Context:\\n{context}\\n\\nQuestion: {question}"}
        ]

        for img in relevant_images:
            content.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/png;base64,{img['image']}"}
            })

        response = self.llm.invoke([{"role": "user", "content": content}])
        return response.content

# Usage
rag = MultimodalRAG()
rag.index_document("annual_report.pdf")
answer = rag.query("What were the Q4 revenue trends shown in the charts?")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Audio Processing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

client = OpenAI()

# Transcribe audio
def transcribe_audio(audio_path: str) -> str:
    with open(audio_path, "rb") as f:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=f
        )
    return transcript.text

# Generate speech
def text_to_speech(text: str, output_path: str):
    response = client.audio.speech.create(
        model="tts-1",
        voice="alloy",
        input=text
    )
    response.stream_to_file(output_path)

# Voice agent
class VoiceAgent:
    def __init__(self):
        self.client = OpenAI()
        self.conversation = []

    def process_voice_input(self, audio_path: str) -> str:
        # Transcribe
        text = transcribe_audio(audio_path)

        # Process with LLM
        self.conversation.append({"role": "user", "content": text})
        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=self.conversation
        )

        answer = response.choices[0].message.content
        self.conversation.append({"role": "assistant", "content": answer})

        return answer

    def respond_with_voice(self, text: str, output_path: str):
        text_to_speech(text, output_path)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Video Analysis"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import cv2
import base64
from openai import OpenAI

class VideoAnalyzer:
    def __init__(self):
        self.client = OpenAI()

    def extract_frames(self, video_path: str, num_frames: int = 5):
        """Extract evenly spaced frames from video."""
        cap = cv2.VideoCapture(video_path)
        total_frames = int(cap.get(cv2.CAP_PROP_FRAME_COUNT))
        frame_indices = [int(i * total_frames / num_frames) for i in range(num_frames)]

        frames = []
        for idx in frame_indices:
            cap.set(cv2.CAP_PROP_POS_FRAMES, idx)
            ret, frame = cap.read()
            if ret:
                _, buffer = cv2.imencode('.jpg', frame)
                frames.append(base64.b64encode(buffer).decode())

        cap.release()
        return frames

    def analyze_video(self, video_path: str, question: str) -> str:
        frames = self.extract_frames(video_path)

        content = [{"type": "text", "text": f"""
These are frames from a video. {question}

Analyze the sequence and provide insights."""}]

        for frame in frames:
            content.append({
                "type": "image_url",
                "image_url": {"url": f"data:image/jpeg;base64,{frame}"}
            })

        response = self.client.chat.completions.create(
            model="gpt-4-vision-preview",
            messages=[{"role": "user", "content": content}],
            max_tokens=1000
        )

        return response.choices[0].message.content

# Usage
analyzer = VideoAnalyzer()
summary = analyzer.analyze_video(
    "demo.mp4",
    "What actions are being performed in this video?"
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
                      {"Optimize image size:"}
                    </strong>
                    {" Resize images before sending (max ~2000px)"}
                  </li>
                  <li>
                    <strong>
                      {"Use appropriate detail level:"}
                    </strong>
                    {" GPT-4V supports low/high detail modes"}
                  </li>
                  <li>
                    <strong>
                      {"Batch when possible:"}
                    </strong>
                    {" Send multiple images in one request"}
                  </li>
                  <li>
                    <strong>
                      {"Cache results:"}
                    </strong>
                    {" Store analysis results to avoid re-processing"}
                  </li>
                  <li>
                    <strong>
                      {"Handle failures:"}
                    </strong>
                    {" Vision models can misinterpret - validate outputs"}
                  </li>
                  <li>
                    <strong>
                      {"Consider costs:"}
                    </strong>
                    {" Image tokens are expensive - use wisely"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Multimodal AI Applications"}
                </h2>
                <p>
                  {"Our Agentic AI program covers multimodal agents and vision language models. Learn to build AI that truly understands the world."}
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
                      {"Understanding language models"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/rag" className="related-article-card">
                    <h4>
                      {"RAG Systems"}
                    </h4>
                    {" "}
                    <p>
                      {"Retrieval augmented generation"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/voice-agents" className="related-article-card">
                    <h4>
                      {"Voice Agents"}
                    </h4>
                    {" "}
                    <p>
                      {"Building conversational voice AI"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn more about multimodal AI agents."} />
    </>
  );
}
