import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Browser Agents: AI-Powered Web Automation",
  description: "Build AI agents that automate web browsers. Playwright, Puppeteer, and LLM integration for intelligent web automation.",
  keywords: ["browser automation", "Playwright AI", "web agents", "Puppeteer LLM", "web scraping AI", "automated browsing"],
  alternates: { canonical: "/agentic-ai/articles/browser-agents" },
  openGraph: {
    type: "website",
    url: "/agentic-ai/articles/browser-agents",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiBrowserAgentsPage() {
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
                {"Browser Agents"}
              </span>
            </div>
            <h1>
              {"Browser Agents"}
            </h1>
            <p className="article-subtitle">
              {"AI-Powered Web Automation and Navigation"}
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
                  {"What Are Browser Agents?"}
                </h2>
                <p>
                  {"Browser agents combine LLMs with browser automation to navigate websites, fill forms, extract data, and complete tasks autonomously. They can \"see\" web pages and decide what actions to take."}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Visual understanding:"}
                    </strong>
                    {" Analyze page layouts and content"}
                  </li>
                  <li>
                    <strong>
                      {"Navigation:"}
                    </strong>
                    {" Click, type, scroll intelligently"}
                  </li>
                  <li>
                    <strong>
                      {"Data extraction:"}
                    </strong>
                    {" Scrape information with AI"}
                  </li>
                  <li>
                    <strong>
                      {"Task automation:"}
                    </strong>
                    {" Complete multi-step workflows"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Playwright Basics"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch(headless=False)
    page = browser.new_page()

    # Navigate
    page.goto("https://example.com")

    # Interact
    page.fill("input[name='search']", "AI agents")
    page.click("button[type='submit']")

    # Wait and extract
    page.wait_for_selector(".results")
    results = page.query_selector_all(".result-item")

    for result in results:
        print(result.text_content())

    browser.close()`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"AI-Powered Browser Agent"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from playwright.async_api import async_playwright
from openai import OpenAI
import base64
import asyncio

class BrowserAgent:
    def __init__(self):
        self.client = OpenAI()

    async def screenshot_to_base64(self, page) -> str:
        screenshot = await page.screenshot()
        return base64.b64encode(screenshot).decode()

    async def analyze_page(self, page, task: str) -> dict:
        """Use vision to understand the page and decide next action."""
        screenshot = await self.screenshot_to_base64(page)

        response = self.client.chat.completions.create(
            model="gpt-4-vision-preview",
            messages=[{
                "role": "user",
                "content": [
                    {"type": "text", "text": f"""
You are a browser automation agent. Analyze this webpage screenshot.

Task: {task}
Current URL: {page.url}

Decide the next action. Respond with JSON:
{{
    "action": "click|type|scroll|navigate|done",
    "selector": "CSS selector if clicking/typing",
    "value": "text to type or URL to navigate",
    "reasoning": "why this action"
}}"""},
                    {
                        "type": "image_url",
                        "image_url": {"url": f"data:image/png;base64,{screenshot}"}
                    }
                ]
            }],
            max_tokens=500
        )

        import json
        return json.loads(response.choices[0].message.content)

    async def execute_action(self, page, action: dict):
        """Execute the decided action."""
        if action["action"] == "click":
            await page.click(action["selector"])
        elif action["action"] == "type":
            await page.fill(action["selector"], action["value"])
        elif action["action"] == "scroll":
            await page.evaluate("window.scrollBy(0, 500)")
        elif action["action"] == "navigate":
            await page.goto(action["value"])

    async def run(self, task: str, start_url: str, max_steps: int = 10):
        async with async_playwright() as p:
            browser = await p.chromium.launch(headless=False)
            page = await browser.new_page()
            await page.goto(start_url)

            for step in range(max_steps):
                action = await self.analyze_page(page, task)
                print(f"Step {step + 1}: {action['action']} - {action['reasoning']}")

                if action["action"] == "done":
                    print("Task completed!")
                    break

                await self.execute_action(page, action)
                await page.wait_for_load_state("networkidle")

            await browser.close()

# Usage
agent = BrowserAgent()
asyncio.run(agent.run(
    task="Find the pricing page and extract the price of the Pro plan",
    start_url="https://example.com"
))`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using Browser-Use Library"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# browser-use: Purpose-built for LLM browser automation
pip install browser-use

from browser_use import Agent
from langchain_openai import ChatOpenAI

# Create agent
agent = Agent(
    task="Go to amazon.com and find the best-rated laptop under $1000",
    llm=ChatOpenAI(model="gpt-4"),
    browser_config={
        "headless": False,
        "disable_security": True
    }
)

# Run
result = await agent.run()
print(result)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Web Scraping with AI"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from playwright.async_api import async_playwright
from openai import OpenAI

async def ai_scrape(url: str, extraction_prompt: str) -> dict:
    """Use AI to intelligently extract data from any webpage."""
    client = OpenAI()

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        page = await browser.new_page()
        await page.goto(url)

        # Get page content
        html = await page.content()
        text = await page.evaluate("document.body.innerText")

        # Take screenshot for visual context
        screenshot = await page.screenshot()
        screenshot_b64 = base64.b64encode(screenshot).decode()

        await browser.close()

    # Use LLM to extract
    response = client.chat.completions.create(
        model="gpt-4-vision-preview",
        messages=[{
            "role": "user",
            "content": [
                {"type": "text", "text": f"""
Extract the following from this webpage:
{extraction_prompt}

Page text:
{text[:5000]}

Return as JSON."""},
                {
                    "type": "image_url",
                    "image_url": {"url": f"data:image/png;base64,{screenshot_b64}"}
                }
            ]
        }]
    )

    return json.loads(response.choices[0].message.content)

# Usage
data = await ai_scrape(
    "https://news.site.com/article",
    "Extract: title, author, publish date, main points (as list)"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Use Cases"}
                </h2>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Data Collection"}
                    </h4>
                    <p>
                      {"Scrape product info, prices, reviews from any site."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Form Automation"}
                    </h4>
                    <p>
                      {"Fill complex forms, applications, registrations."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Testing"}
                    </h4>
                    <p>
                      {"AI-powered end-to-end testing that adapts to UI changes."}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Research"}
                    </h4>
                    <p>
                      {"Autonomous web research and information gathering."}
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
                      {"Respect robots.txt:"}
                    </strong>
                    {" Follow website rules"}
                  </li>
                  <li>
                    <strong>
                      {"Rate limiting:"}
                    </strong>
                    {" Don't overwhelm servers"}
                  </li>
                  <li>
                    <strong>
                      {"Error handling:"}
                    </strong>
                    {" Sites change - handle failures gracefully"}
                  </li>
                  <li>
                    <strong>
                      {"Human verification:"}
                    </strong>
                    {" Keep human in the loop for important actions"}
                  </li>
                  <li>
                    <strong>
                      {"Headless vs headed:"}
                    </strong>
                    {" Use headed mode for debugging"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Intelligent Web Agents"}
                </h2>
                <p>
                  {"Our Agentic AI program covers browser automation and web agents."}
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
                      {"Vision-enabled AI agents"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/function-calling" className="related-article-card">
                    <h4>
                      {"Function Calling"}
                    </h4>
                    {" "}
                    <p>
                      {"LLM tool integration"}
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
