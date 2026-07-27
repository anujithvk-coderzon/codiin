import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Voice Agents: Speech-Enabled AI",
  description: "Build voice-enabled AI agents with speech recognition and synthesis. OpenAI Whisper, TTS, and real-time voice conversations.",
  keywords: ["voice AI", "speech recognition", "TTS", "Whisper", "voice agents", "conversational AI", "speech synthesis"],
  alternates: { canonical: "/agentic-ai/articles/voice-agents" },
  openGraph: {
    type: "website",
    url: "/agentic-ai/articles/voice-agents",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiVoiceAgentsPage() {
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
                {"Voice Agents"}
              </span>
            </div>
            <h1>
              {"Voice Agents"}
            </h1>
            <p className="article-subtitle">
              {"Building Speech-Enabled AI Assistants"}
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
                  {"Voice AI Pipeline"}
                </h2>
                <p>
                  {"Voice agents combine three core capabilities:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Voice Agent Pipeline

┌─────────────┐    ┌─────────────┐    ┌─────────────┐
│   Speech    │    │     LLM     │    │   Speech    │
│ Recognition │ -> │  Processing │ -> │  Synthesis  │
│  (Whisper)  │    │   (GPT-4)   │    │    (TTS)    │
└─────────────┘    └─────────────┘    └─────────────┘
      │                   │                  │
   Audio In           Text Logic         Audio Out`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Speech Recognition with Whisper"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI

client = OpenAI()

# Transcribe audio file
def transcribe(audio_path: str) -> str:
    with open(audio_path, "rb") as f:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=f,
            response_format="text"
        )
    return transcript

# With language detection
def transcribe_with_details(audio_path: str) -> dict:
    with open(audio_path, "rb") as f:
        transcript = client.audio.transcriptions.create(
            model="whisper-1",
            file=f,
            response_format="verbose_json"
        )
    return {
        "text": transcript.text,
        "language": transcript.language,
        "duration": transcript.duration
    }

# Real-time with streaming (local Whisper)
import whisper

model = whisper.load_model("base")
result = model.transcribe("audio.mp3")
print(result["text"])`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Text-to-Speech"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI
from pathlib import Path

client = OpenAI()

def text_to_speech(text: str, output_path: str, voice: str = "alloy"):
    """Convert text to speech.

    Voices: alloy, echo, fable, onyx, nova, shimmer
    """
    response = client.audio.speech.create(
        model="tts-1",  # or tts-1-hd for higher quality
        voice=voice,
        input=text
    )

    response.stream_to_file(output_path)

# Generate speech
text_to_speech(
    "Hello! I'm your AI assistant. How can I help you today?",
    "greeting.mp3",
    voice="nova"
)

# Streaming TTS for lower latency
def stream_speech(text: str):
    response = client.audio.speech.create(
        model="tts-1",
        voice="alloy",
        input=text
    )

    # Stream chunks
    for chunk in response.iter_bytes(chunk_size=4096):
        yield chunk`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Complete Voice Agent"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from openai import OpenAI
import pyaudio
import wave
import tempfile
import os

class VoiceAgent:
    def __init__(self):
        self.client = OpenAI()
        self.conversation = []

    def record_audio(self, duration: int = 5) -> str:
        """Record audio from microphone."""
        CHUNK = 1024
        FORMAT = pyaudio.paInt16
        CHANNELS = 1
        RATE = 16000

        p = pyaudio.PyAudio()
        stream = p.open(format=FORMAT, channels=CHANNELS,
                       rate=RATE, input=True, frames_per_buffer=CHUNK)

        print("Recording...")
        frames = []
        for _ in range(0, int(RATE / CHUNK * duration)):
            data = stream.read(CHUNK)
            frames.append(data)

        stream.stop_stream()
        stream.close()
        p.terminate()

        # Save to temp file
        temp_file = tempfile.NamedTemporaryFile(suffix=".wav", delete=False)
        wf = wave.open(temp_file.name, 'wb')
        wf.setnchannels(CHANNELS)
        wf.setsampwidth(p.get_sample_size(FORMAT))
        wf.setframerate(RATE)
        wf.writeframes(b''.join(frames))
        wf.close()

        return temp_file.name

    def transcribe(self, audio_path: str) -> str:
        """Convert speech to text."""
        with open(audio_path, "rb") as f:
            result = self.client.audio.transcriptions.create(
                model="whisper-1",
                file=f
            )
        return result.text

    def generate_response(self, user_input: str) -> str:
        """Generate AI response."""
        self.conversation.append({"role": "user", "content": user_input})

        response = self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "You are a helpful voice assistant. Keep responses concise and conversational."},
                *self.conversation
            ]
        )

        assistant_message = response.choices[0].message.content
        self.conversation.append({"role": "assistant", "content": assistant_message})

        return assistant_message

    def speak(self, text: str):
        """Convert text to speech and play."""
        response = self.client.audio.speech.create(
            model="tts-1",
            voice="nova",
            input=text
        )

        temp_file = tempfile.NamedTemporaryFile(suffix=".mp3", delete=False)
        response.stream_to_file(temp_file.name)

        # Play audio (platform-specific)
        import subprocess
        subprocess.run(["afplay", temp_file.name])  # macOS
        # subprocess.run(["aplay", temp_file.name])  # Linux
        # os.startfile(temp_file.name)  # Windows

        os.unlink(temp_file.name)

    def run(self):
        """Main conversation loop."""
        print("Voice Agent ready. Speak to interact. Say 'goodbye' to exit.")

        while True:
            # Record
            audio_path = self.record_audio(duration=5)

            # Transcribe
            user_text = self.transcribe(audio_path)
            print(f"You: {user_text}")
            os.unlink(audio_path)

            if "goodbye" in user_text.lower():
                self.speak("Goodbye! Have a great day.")
                break

            # Generate response
            response = self.generate_response(user_text)
            print(f"Agent: {response}")

            # Speak
            self.speak(response)

# Run
agent = VoiceAgent()
agent.run()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Real-Time Voice with WebSockets"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from fastapi import FastAPI, WebSocket
from openai import OpenAI
import base64

app = FastAPI()
client = OpenAI()

@app.websocket("/voice")
async def voice_chat(websocket: WebSocket):
    await websocket.accept()

    while True:
        # Receive audio data
        audio_data = await websocket.receive_bytes()

        # Save temporarily and transcribe
        with open("temp.webm", "wb") as f:
            f.write(audio_data)

        with open("temp.webm", "rb") as f:
            transcript = client.audio.transcriptions.create(
                model="whisper-1",
                file=f
            )

        # Generate response
        response = client.chat.completions.create(
            model="gpt-4",
            messages=[{"role": "user", "content": transcript.text}]
        )
        reply = response.choices[0].message.content

        # Convert to speech
        speech = client.audio.speech.create(
            model="tts-1",
            voice="alloy",
            input=reply
        )

        # Send back
        await websocket.send_json({
            "transcript": transcript.text,
            "reply": reply
        })
        await websocket.send_bytes(speech.content)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Customer Service"}
                    </h4>
                    <p>
                      {"Automated phone support with natural conversations."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Accessibility"}
                    </h4>
                    <p>
                      {"Voice interfaces for users who can't type."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Hands-Free"}
                    </h4>
                    <p>
                      {"Voice control for driving, cooking, working."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Language Learning"}
                    </h4>
                    <p>
                      {"Pronunciation practice and conversation partners."}
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
                      {"Handle silence:"}
                    </strong>
                    {" Detect when user stops speaking"}
                  </li>
                  <li>
                    <strong>
                      {"Feedback:"}
                    </strong>
                    {" Audio cues for listening/processing states"}
                  </li>
                  <li>
                    <strong>
                      {"Interruption:"}
                    </strong>
                    {" Allow users to interrupt the agent"}
                  </li>
                  <li>
                    <strong>
                      {"Noise handling:"}
                    </strong>
                    {" Filter background noise"}
                  </li>
                  <li>
                    <strong>
                      {"Fallback:"}
                    </strong>
                    {" Offer text input as alternative"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Voice AI Applications"}
                </h2>
                <p>
                  {"Our Agentic AI program covers voice interfaces and conversational AI."}
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
                  <Link href="/agentic-ai/articles/multimodal-agents" className="related-article-card">
                    <h4>
                      {"Multimodal Agents"}
                    </h4>
                    {" "}
                    <p>
                      {"Beyond text - audio, images, video"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/streaming" className="related-article-card">
                    <h4>
                      {"Streaming Responses"}
                    </h4>
                    {" "}
                    <p>
                      {"Real-time output handling"}
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
