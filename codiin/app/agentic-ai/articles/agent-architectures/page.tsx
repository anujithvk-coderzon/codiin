import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Agent Architectures & Patterns: A Beginner's Guide",
  description: "Learn AI agent architectures and design patterns. ReAct, Plan-and-Execute, Reflection, Router, and more explained for beginners with practical examples.",
  keywords: ["agent architectures", "AI design patterns", "ReAct agent", "plan and execute", "multi-agent patterns", "LLM agent design"],
  alternates: { canonical: "/agentic-ai/articles/agent-architectures" },
  openGraph: {
    type: "website",
    url: "/agentic-ai/articles/agent-architectures",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/agentic-ai", label: "Learn Agentic AI", cta: true },
];

export default function AgenticAiAgentArchitecturesPage() {
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
                {"Agent Architectures"}
              </span>
            </div>
            <h1>
              {"Agent Architectures & Patterns"}
            </h1>
            <p className="article-subtitle">
              {"A Beginner's Guide to Designing AI Agents"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"18 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What Are Agent Architectures?"}
                </h2>
                <p>
                  {"Think of agent architectures as "}
                  <strong>
                    {"blueprints for how an AI agent thinks and acts"}
                  </strong>
                  {". Just like buildings have different designs (houses, offices, hospitals), AI agents have different architectures depending on what they need to do."}
                </p>
                <p>
                  {"Choosing the right architecture is like choosing the right tool for a job:"}
                </p>
                <ul>
                  <li>
                    {"Use a hammer for nails, not screws"}
                  </li>
                  <li>
                    {"Use a simple agent for simple tasks, not complex ones"}
                  </li>
                  <li>
                    {"Use a multi-agent system when one agent can't handle everything"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`# The Big Picture: How Agents Work

┌─────────────────────────────────────────────────────┐
│                    USER QUERY                        │
│              "Book me a flight to Paris"             │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│               AGENT ARCHITECTURE                     │
│  (The "brain" that decides HOW to solve the task)   │
│                                                      │
│   • What steps to take?                             │
│   • What tools to use?                              │
│   • How to handle errors?                           │
│   • When to ask for help?                           │
└─────────────────────────────────────────────────────┘
                          │
                          ▼
┌─────────────────────────────────────────────────────┐
│                    RESULT                            │
│        "Your flight is booked for March 15"         │
└─────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Quick Reference: Which Pattern Should I Use?"}
                </h2>
                <p>
                  {"Here's a simple decision guide before we dive deep:"}
                </p>
                <div className="code-block">
                  <pre><code>{`┌─────────────────────────────────────────────────────────────────┐
│                    PATTERN SELECTION GUIDE                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  "I need to answer questions and maybe use some tools"          │
│   → Use: ReAct Pattern                                          │
│                                                                  │
│  "I have a complex task with many steps"                        │
│   → Use: Plan-and-Execute Pattern                               │
│                                                                  │
│  "I need high-quality, verified outputs"                        │
│   → Use: Reflection Pattern                                     │
│                                                                  │
│  "Different questions need different specialists"               │
│   → Use: Router Pattern                                         │
│                                                                  │
│  "I need multiple experts working together"                     │
│   → Use: Multi-Agent Pattern (Supervisor or Hierarchical)       │
│                                                                  │
│  "Critical decisions that need human approval"                  │
│   → Use: Human-in-the-Loop Pattern                              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"1. ReAct Pattern (Reasoning + Acting)"}
                </h2>
                <h3>
                  {"What Is It?"}
                </h3>
                <p>
                  {"ReAct is the most common pattern. The agent "}
                  <strong>
                    {"thinks about what to do, does it, sees the result, and repeats"}
                  </strong>
                  {" until the task is done. It's like how you naturally solve problems."}
                </p>
                <div className="code-block">
                  <pre><code>{`# How ReAct Works - Like Your Brain!

You: "What's the weather in Tokyo and should I pack an umbrella?"

Agent's Brain:
┌──────────────────────────────────────────────────────┐
│ THOUGHT: I need to check Tokyo's weather first       │
│ ACTION:  Call weather API for Tokyo                  │
│ OBSERVE: Temperature: 18°C, Rain: 80% chance         │
├──────────────────────────────────────────────────────┤
│ THOUGHT: High rain chance means umbrella needed      │
│ ACTION:  Formulate response                          │
│ OBSERVE: Ready to respond                            │
├──────────────────────────────────────────────────────┤
│ ANSWER:  "Tokyo is 18°C with 80% rain chance.        │
│          Yes, definitely pack an umbrella!"          │
└──────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"When To Use ReAct"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Question answering"}
                    </strong>
                    {" that might need external data"}
                  </li>
                  <li>
                    <strong>
                      {"Simple tool use"}
                    </strong>
                    {" - search, calculate, look up information"}
                  </li>
                  <li>
                    <strong>
                      {"Conversational agents"}
                    </strong>
                    {" that help users with various tasks"}
                  </li>
                  <li>
                    <strong>
                      {"Tasks with 1-5 steps"}
                    </strong>
                    {" - not too complex"}
                  </li>
                </ul>
                <h3>
                  {"When NOT To Use ReAct"}
                </h3>
                <ul>
                  <li>
                    {"Very complex tasks with 10+ steps (use Plan-and-Execute instead)"}
                  </li>
                  <li>
                    {"Tasks needing multiple specialists (use Multi-Agent instead)"}
                  </li>
                  <li>
                    {"When you need guaranteed step order (ReAct can be unpredictable)"}
                  </li>
                </ul>
                <h3>
                  {"Real-World Examples"}
                </h3>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Customer Support Bot"}
                    </h4>
                    <p>
                      {"\"Check order status\" → Look up order → Return status"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Research Assistant"}
                    </h4>
                    <p>
                      {"\"Find info about X\" → Search → Summarize findings"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Calculator Agent"}
                    </h4>
                    <p>
                      {"\"What's 15% tip on $85?\" → Calculate → Return answer"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Weather Bot"}
                    </h4>
                    <p>
                      {"\"Weather tomorrow?\" → Call API → Summarize forecast"}
                    </p>
                  </div>
                </div>
                <h3>
                  {"Code Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain.agents import create_react_agent, AgentExecutor
from langchain_openai import ChatOpenAI
from langchain.tools import Tool
from langchain import hub

# Step 1: Define tools the agent can use
def search_web(query: str) -> str:
    """Search the web for information."""
    # In real app, call actual search API
    return f"Search results for: {query}"

def get_weather(city: str) -> str:
    """Get weather for a city."""
    # In real app, call weather API
    return f"Weather in {city}: 22°C, Sunny"

tools = [
    Tool(name="search", func=search_web, description="Search the web"),
    Tool(name="weather", func=get_weather, description="Get weather for a city"),
]

# Step 2: Create the ReAct agent
llm = ChatOpenAI(model="gpt-4", temperature=0)
prompt = hub.pull("hwchase17/react")  # Standard ReAct prompt

agent = create_react_agent(llm, tools, prompt)
executor = AgentExecutor(agent=agent, tools=tools, verbose=True)

# Step 3: Run it!
result = executor.invoke({
    "input": "What's the weather in Paris and find me popular attractions there"
})

# The agent will:
# 1. THINK: I need weather info and attraction info
# 2. ACT: Call weather tool for Paris
# 3. OBSERVE: Get weather result
# 4. THINK: Now I need attractions
# 5. ACT: Search for Paris attractions
# 6. OBSERVE: Get search results
# 7. RESPOND: Combine both into final answer`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"2. Plan-and-Execute Pattern"}
                </h2>
                <h3>
                  {"What Is It?"}
                </h3>
                <p>
                  {"Instead of figuring things out step-by-step, this pattern "}
                  <strong>
                    {"creates a complete plan first, then executes each step"}
                  </strong>
                  {". Like writing a recipe before cooking."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Plan-and-Execute: Think First, Act Later

Task: "Plan a birthday party for 20 people with a $500 budget"

┌─────────────────────────────────────────────────────────────────┐
│                    PLANNING PHASE                                │
│  (Agent creates the full plan before doing anything)            │
├─────────────────────────────────────────────────────────────────┤
│  Step 1: Calculate per-person budget ($500 ÷ 20 = $25/person)  │
│  Step 2: Research venue options under $150                      │
│  Step 3: Find catering options for 20 people under $200        │
│  Step 4: List decoration ideas under $100                       │
│  Step 5: Suggest entertainment options under $50                │
│  Step 6: Create final party plan with timeline                  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                   EXECUTION PHASE                                │
│  (Agent executes each step, one by one)                         │
├─────────────────────────────────────────────────────────────────┤
│  ✓ Step 1: Done - $25 per person                                │
│  ✓ Step 2: Done - Found 3 venue options                         │
│  ✓ Step 3: Done - Found catering for $180                       │
│  → Step 4: In progress...                                       │
│  ○ Step 5: Pending                                              │
│  ○ Step 6: Pending                                              │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"When To Use Plan-and-Execute"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Complex multi-step tasks"}
                    </strong>
                    {" with 5+ steps"}
                  </li>
                  <li>
                    <strong>
                      {"Tasks requiring specific order"}
                    </strong>
                    {" - step 2 depends on step 1"}
                  </li>
                  <li>
                    <strong>
                      {"Project planning"}
                    </strong>
                    {" - trips, events, research projects"}
                  </li>
                  <li>
                    <strong>
                      {"When you need visibility"}
                    </strong>
                    {" - users can see and approve the plan"}
                  </li>
                </ul>
                <h3>
                  {"When NOT To Use Plan-and-Execute"}
                </h3>
                <ul>
                  <li>
                    {"Simple questions that need quick answers"}
                  </li>
                  <li>
                    {"Highly dynamic situations where the plan might change constantly"}
                  </li>
                  <li>
                    {"Real-time conversations (planning takes time)"}
                  </li>
                </ul>
                <h3>
                  {"Real-World Examples"}
                </h3>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Travel Planner"}
                    </h4>
                    <p>
                      {"Plan flights, hotels, activities, restaurants in order"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Research Report"}
                    </h4>
                    <p>
                      {"Outline → Research each section → Write → Review"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Code Refactoring"}
                    </h4>
                    <p>
                      {"Analyze → Plan changes → Implement → Test"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Event Organization"}
                    </h4>
                    <p>
                      {"Budget → Venue → Catering → Invites → Day-of plan"}
                    </p>
                  </div>
                </div>
                <h3>
                  {"Code Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4", temperature=0)

class PlanAndExecuteAgent:
    def __init__(self):
        self.llm = llm
        self.plan = []
        self.results = []

    def create_plan(self, task: str) -> list:
        """Phase 1: Create a detailed plan."""

        planning_prompt = ChatPromptTemplate.from_template("""
        Create a step-by-step plan to accomplish this task.
        Return ONLY a numbered list of steps.

        Task: {task}

        Steps:
        """)

        response = self.llm.invoke(planning_prompt.format(task=task))

        # Parse steps from response
        steps = []
        for line in response.content.split('\\n'):
            line = line.strip()
            if line and line[0].isdigit():
                steps.append(line)

        self.plan = steps
        return steps

    def execute_step(self, step: str, previous_results: list) -> str:
        """Phase 2: Execute a single step."""

        execution_prompt = ChatPromptTemplate.from_template("""
        Execute this step of the plan.

        Current Step: {step}

        Previous Results:
        {previous_results}

        Complete this step and provide the result:
        """)

        response = self.llm.invoke(execution_prompt.format(
            step=step,
            previous_results="\\n".join(previous_results) if previous_results else "None yet"
        ))

        return response.content

    def run(self, task: str) -> dict:
        """Run the full plan-and-execute cycle."""

        # Phase 1: Plan
        print("📋 PLANNING PHASE")
        print("=" * 50)
        plan = self.create_plan(task)
        for i, step in enumerate(plan, 1):
            print(f"  {step}")

        # Phase 2: Execute
        print("\\n🚀 EXECUTION PHASE")
        print("=" * 50)
        results = []
        for i, step in enumerate(plan, 1):
            print(f"\\n▶ Executing: {step}")
            result = self.execute_step(step, results)
            results.append(f"Step {i} Result: {result}")
            print(f"  ✓ Done: {result[:100]}...")

        return {
            "plan": plan,
            "results": results
        }

# Usage
agent = PlanAndExecuteAgent()
result = agent.run("Create a marketing plan for launching a new mobile app")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"3. Reflection Pattern (Self-Critique)"}
                </h2>
                <h3>
                  {"What Is It?"}
                </h3>
                <p>
                  {"The agent "}
                  <strong>
                    {"checks its own work and improves it"}
                  </strong>
                  {". Like proofreading your essay before submitting. The agent generates an answer, critiques it, and refines it."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Reflection: Check Your Own Work

Task: "Write a professional email declining a job offer"

┌─────────────────────────────────────────────────────────────────┐
│                    FIRST ATTEMPT                                 │
├─────────────────────────────────────────────────────────────────┤
│  "Hi, I don't want the job. Thanks anyway."                     │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    REFLECTION (Self-Critique)                    │
├─────────────────────────────────────────────────────────────────┤
│  Problems found:                                                 │
│  ✗ Too informal for professional context                        │
│  ✗ No gratitude expressed                                       │
│  ✗ No door left open for future opportunities                   │
│  ✗ Missing proper greeting and closing                          │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    REFINED VERSION                               │
├─────────────────────────────────────────────────────────────────┤
│  "Dear Mr. Johnson,                                              │
│                                                                  │
│  Thank you for offering me the Software Engineer position.      │
│  After careful consideration, I've decided to pursue another    │
│  opportunity that aligns more closely with my career goals.     │
│                                                                  │
│  I sincerely appreciate your time and the team's confidence    │
│  in my abilities. I hope we can stay connected for future      │
│  opportunities.                                                  │
│                                                                  │
│  Best regards,                                                   │
│  [Name]"                                                         │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"When To Use Reflection"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Content quality matters"}
                    </strong>
                    {" - writing, code, analysis"}
                  </li>
                  <li>
                    <strong>
                      {"Complex reasoning"}
                    </strong>
                    {" - math, logic, problem-solving"}
                  </li>
                  <li>
                    <strong>
                      {"Professional outputs"}
                    </strong>
                    {" - emails, reports, documentation"}
                  </li>
                  <li>
                    <strong>
                      {"When accuracy is critical"}
                    </strong>
                    {" - fact-checking, verification"}
                  </li>
                </ul>
                <h3>
                  {"When NOT To Use Reflection"}
                </h3>
                <ul>
                  <li>
                    {"Simple factual questions (no need to over-think \"What's 2+2?\")"}
                  </li>
                  <li>
                    {"Time-sensitive responses (reflection adds latency)"}
                  </li>
                  <li>
                    {"Casual conversations (over-polishing kills natural flow)"}
                  </li>
                </ul>
                <h3>
                  {"Real-World Examples"}
                </h3>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Code Review Bot"}
                    </h4>
                    <p>
                      {"Generate code → Check for bugs → Fix issues → Verify"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Essay Writer"}
                    </h4>
                    <p>
                      {"Write draft → Critique structure → Improve → Polish"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Math Solver"}
                    </h4>
                    <p>
                      {"Solve problem → Verify answer → Correct if wrong"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Legal Document Review"}
                    </h4>
                    <p>
                      {"Analyze → Check for issues → Suggest improvements"}
                    </p>
                  </div>
                </div>
                <h3>
                  {"Code Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4", temperature=0.7)

class ReflectionAgent:
    def __init__(self, max_iterations: int = 3):
        self.llm = llm
        self.max_iterations = max_iterations

    def generate(self, task: str) -> str:
        """Generate initial response."""
        prompt = ChatPromptTemplate.from_template(
            "Complete this task:\\n{task}"
        )
        response = self.llm.invoke(prompt.format(task=task))
        return response.content

    def reflect(self, task: str, response: str) -> dict:
        """Critique the response."""
        prompt = ChatPromptTemplate.from_template("""
        Task: {task}

        Response to critique:
        {response}

        Analyze this response and provide:
        1. SCORE: Rate from 1-10
        2. PROBLEMS: List specific issues (if any)
        3. SUGGESTIONS: How to improve

        Be critical but fair.
        """)

        critique = self.llm.invoke(prompt.format(task=task, response=response))

        # Parse score (simplified)
        score = 5  # Default
        for line in critique.content.split('\\n'):
            if 'SCORE' in line.upper():
                try:
                    score = int(''.join(filter(str.isdigit, line)))
                except:
                    pass

        return {
            "score": score,
            "critique": critique.content
        }

    def improve(self, task: str, response: str, critique: str) -> str:
        """Improve based on critique."""
        prompt = ChatPromptTemplate.from_template("""
        Task: {task}

        Original Response:
        {response}

        Critique:
        {critique}

        Write an improved version addressing all the feedback:
        """)

        improved = self.llm.invoke(prompt.format(
            task=task, response=response, critique=critique
        ))
        return improved.content

    def run(self, task: str) -> str:
        """Run reflection loop."""
        print("🔄 REFLECTION AGENT")
        print("=" * 50)

        # Initial generation
        response = self.generate(task)
        print(f"\\n📝 Initial Response:\\n{response[:200]}...")

        for i in range(self.max_iterations):
            print(f"\\n🔍 Reflection Round {i + 1}")

            # Reflect
            reflection = self.reflect(task, response)
            print(f"   Score: {reflection['score']}/10")

            # If good enough, stop
            if reflection['score'] >= 8:
                print("   ✓ Quality threshold met!")
                break

            # Improve
            response = self.improve(task, response, reflection['critique'])
            print(f"   ✓ Improved version generated")

        return response

# Usage
agent = ReflectionAgent(max_iterations=3)
result = agent.run("Write a product description for wireless earbuds")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"4. Router Pattern"}
                </h2>
                <h3>
                  {"What Is It?"}
                </h3>
                <p>
                  {"A \"traffic controller\" that "}
                  <strong>
                    {"looks at the request and sends it to the right specialist"}
                  </strong>
                  {". Like a hospital receptionist directing patients to the right department."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Router: Direct Traffic to the Right Place

┌─────────────────────────────────────────────────────────────────┐
│                      USER QUESTIONS                              │
└─────────────────────────────────────────────────────────────────┘
         │                    │                    │
         ▼                    ▼                    ▼
   "Fix my code"      "Write a poem"      "Analyze this data"
         │                    │                    │
         └────────────────────┼────────────────────┘
                              │
                              ▼
                    ┌─────────────────┐
                    │     ROUTER      │
                    │  "What type of  │
                    │   request is    │
                    │     this?"      │
                    └─────────────────┘
                              │
         ┌────────────────────┼────────────────────┐
         │                    │                    │
         ▼                    ▼                    ▼
   ┌───────────┐       ┌───────────┐       ┌───────────┐
   │   CODE    │       │ CREATIVE  │       │   DATA    │
   │  EXPERT   │       │  WRITER   │       │  ANALYST  │
   └───────────┘       └───────────┘       └───────────┘
         │                    │                    │
         ▼                    ▼                    ▼
   "Here's the      "Roses are red..." "The data shows..."
    fixed code"`}</code></pre>
                </div>
                <h3>
                  {"When To Use Router"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Multiple specialized capabilities"}
                    </strong>
                    {" in one system"}
                  </li>
                  <li>
                    <strong>
                      {"Different models for different tasks"}
                    </strong>
                    {" - use cheap model for simple questions, expensive for complex"}
                  </li>
                  <li>
                    <strong>
                      {"Customer service"}
                    </strong>
                    {" - route to billing, tech support, sales"}
                  </li>
                  <li>
                    <strong>
                      {"Cost optimization"}
                    </strong>
                    {" - use the right resource for each task"}
                  </li>
                </ul>
                <h3>
                  {"When NOT To Use Router"}
                </h3>
                <ul>
                  <li>
                    {"Simple single-purpose agents"}
                  </li>
                  <li>
                    {"When all requests are similar"}
                  </li>
                  <li>
                    {"When routing overhead isn't worth it"}
                  </li>
                </ul>
                <h3>
                  {"Real-World Examples"}
                </h3>
                <div className="use-cases-grid">
                  <div className="use-case-card">
                    <h4>
                      {"Customer Support"}
                    </h4>
                    <p>
                      {"Route to: Billing, Technical, Sales, Returns"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Coding Assistant"}
                    </h4>
                    <p>
                      {"Route to: Python expert, JavaScript expert, DevOps"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Content Creator"}
                    </h4>
                    <p>
                      {"Route to: Blog writer, Social media, Email marketing"}
                    </p>
                  </div>
                  <div className="use-case-card">
                    <h4>
                      {"Cost Optimizer"}
                    </h4>
                    <p>
                      {"Simple → GPT-3.5, Complex → GPT-4, Code → Claude"}
                    </p>
                  </div>
                </div>
                <h3>
                  {"Code Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate
from enum import Enum

class RouteType(Enum):
    CODE = "code"
    CREATIVE = "creative"
    ANALYSIS = "analysis"
    GENERAL = "general"

class RouterAgent:
    def __init__(self):
        # Router uses fast, cheap model
        self.router_llm = ChatOpenAI(model="gpt-3.5-turbo", temperature=0)

        # Specialists can use different models
        self.specialists = {
            RouteType.CODE: ChatOpenAI(model="gpt-4", temperature=0),
            RouteType.CREATIVE: ChatOpenAI(model="gpt-4", temperature=0.9),
            RouteType.ANALYSIS: ChatOpenAI(model="gpt-4", temperature=0),
            RouteType.GENERAL: ChatOpenAI(model="gpt-3.5-turbo", temperature=0.7),
        }

        # Specialist prompts
        self.specialist_prompts = {
            RouteType.CODE: "You are an expert programmer. Help with: {query}",
            RouteType.CREATIVE: "You are a creative writer. Help with: {query}",
            RouteType.ANALYSIS: "You are a data analyst. Help with: {query}",
            RouteType.GENERAL: "You are a helpful assistant. Help with: {query}",
        }

    def route(self, query: str) -> RouteType:
        """Determine which specialist should handle this query."""

        routing_prompt = ChatPromptTemplate.from_template("""
        Classify this query into ONE category:
        - CODE: Programming, debugging, technical implementation
        - CREATIVE: Writing, stories, poetry, creative content
        - ANALYSIS: Data analysis, statistics, insights
        - GENERAL: Everything else

        Query: {query}

        Category (respond with just the word):
        """)

        response = self.router_llm.invoke(routing_prompt.format(query=query))
        category = response.content.strip().upper()

        # Map to RouteType
        route_map = {
            "CODE": RouteType.CODE,
            "CREATIVE": RouteType.CREATIVE,
            "ANALYSIS": RouteType.ANALYSIS,
        }

        return route_map.get(category, RouteType.GENERAL)

    def process(self, query: str) -> dict:
        """Route and process the query."""

        # Step 1: Route
        route = self.route(query)
        print(f"🔀 Routed to: {route.value.upper()} specialist")

        # Step 2: Get specialist
        specialist = self.specialists[route]
        prompt = self.specialist_prompts[route]

        # Step 3: Process
        response = specialist.invoke(prompt.format(query=query))

        return {
            "route": route.value,
            "response": response.content
        }

# Usage
agent = RouterAgent()

# These go to different specialists
print(agent.process("Fix this Python code: def add(a, b) return a + b"))
# → Routed to: CODE specialist

print(agent.process("Write a haiku about programming"))
# → Routed to: CREATIVE specialist

print(agent.process("What's the average of 10, 20, 30?"))
# → Routed to: ANALYSIS specialist`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"5. Multi-Agent Patterns"}
                </h2>
                <p>
                  {"When one agent isn't enough, we use "}
                  <strong>
                    {"multiple agents working together"}
                  </strong>
                  {". There are several ways to organize them:"}
                </p>
                <h3>
                  {"5a. Supervisor Pattern"}
                </h3>
                <p>
                  {"One \"boss\" agent manages and coordinates worker agents."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Supervisor: One Boss, Many Workers

Task: "Create a marketing campaign for a new product"

                    ┌─────────────────┐
                    │   SUPERVISOR    │
                    │   "I'll assign  │
                    │   tasks and     │
                    │   combine work" │
                    └─────────────────┘
                            │
         ┌──────────────────┼──────────────────┐
         │                  │                  │
         ▼                  ▼                  ▼
   ┌───────────┐     ┌───────────┐     ┌───────────┐
   │ RESEARCH  │     │  WRITER   │     │  DESIGN   │
   │  AGENT    │     │  AGENT    │     │  AGENT    │
   │           │     │           │     │           │
   │ "Analyze  │     │ "Write    │     │ "Create   │
   │ market"   │     │ copy"     │     │ visuals"  │
   └───────────┘     └───────────┘     └───────────┘
         │                  │                  │
         └──────────────────┼──────────────────┘
                            │
                            ▼
                    ┌─────────────────┐
                    │   SUPERVISOR    │
                    │  "Combining     │
                    │  all outputs    │
                    │  into final     │
                    │  campaign"      │
                    └─────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"5b. Hierarchical Pattern"}
                </h3>
                <p>
                  {"Agents organized in levels, like a company org chart."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Hierarchical: Levels of Authority

                    ┌─────────────────┐
                    │     CEO         │
                    │ (Top-level      │
                    │  Coordinator)   │
                    └─────────────────┘
                            │
              ┌─────────────┼─────────────┐
              │             │             │
              ▼             ▼             ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │ MANAGER  │  │ MANAGER  │  │ MANAGER  │
        │ Research │  │  Content │  │   Tech   │
        └──────────┘  └──────────┘  └──────────┘
              │             │             │
         ┌────┴────┐   ┌────┴────┐   ┌────┴────┐
         ▼         ▼   ▼         ▼   ▼         ▼
      Worker    Worker  Worker    Worker  Worker  Worker`}</code></pre>
                </div>
                <h3>
                  {"5c. Debate Pattern"}
                </h3>
                <p>
                  {"Agents argue different perspectives to reach better conclusions."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Debate: Agents Argue to Find Truth

Question: "Should we use microservices or monolith?"

   ┌───────────────┐                 ┌───────────────┐
   │  ADVOCATE     │   VS            │   ADVOCATE    │
   │ Microservices │  ◄────────────► │   Monolith    │
   │               │                 │               │
   │ "Better       │                 │ "Simpler,     │
   │  scaling,     │                 │  faster to    │
   │  independence"│                 │  develop"     │
   └───────────────┘                 └───────────────┘
            │                               │
            └───────────────┬───────────────┘
                            │
                            ▼
                    ┌─────────────────┐
                    │     JUDGE       │
                    │  "Based on the  │
                    │  arguments,     │
                    │  for a startup  │
                    │  I recommend    │
                    │  monolith first"│
                    └─────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"When To Use Multi-Agent"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Complex tasks"}
                    </strong>
                    {" requiring different expertise"}
                  </li>
                  <li>
                    <strong>
                      {"Need for collaboration"}
                    </strong>
                    {" - research, writing, review"}
                  </li>
                  <li>
                    <strong>
                      {"Quality through debate"}
                    </strong>
                    {" - important decisions"}
                  </li>
                  <li>
                    <strong>
                      {"Large projects"}
                    </strong>
                    {" - divide and conquer"}
                  </li>
                </ul>
                <h3>
                  {"When NOT To Use Multi-Agent"}
                </h3>
                <ul>
                  <li>
                    {"Simple tasks one agent can handle"}
                  </li>
                  <li>
                    {"Speed is critical (coordination takes time)"}
                  </li>
                  <li>
                    {"Budget is very tight (multiple agents = more API calls)"}
                  </li>
                </ul>
                <h3>
                  {"Code Example: Supervisor Pattern"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from langchain.prompts import ChatPromptTemplate

llm = ChatOpenAI(model="gpt-4", temperature=0.7)

class WorkerAgent:
    def __init__(self, name: str, role: str):
        self.name = name
        self.role = role
        self.llm = llm

    def work(self, task: str) -> str:
        prompt = ChatPromptTemplate.from_template(
            f"You are a {self.role}. Complete this task:\\n{{task}}"
        )
        response = self.llm.invoke(prompt.format(task=task))
        return response.content

class SupervisorAgent:
    def __init__(self):
        self.llm = llm
        self.workers = {
            "researcher": WorkerAgent("Alex", "market research specialist"),
            "writer": WorkerAgent("Sam", "content writer"),
            "critic": WorkerAgent("Jordan", "quality reviewer"),
        }

    def plan_tasks(self, goal: str) -> list:
        """Break down the goal into tasks for workers."""
        prompt = ChatPromptTemplate.from_template("""
        You are a project supervisor. Break this goal into tasks.
        Assign each to: researcher, writer, or critic.

        Goal: {goal}

        Return as:
        TASK 1: [worker] - [task description]
        TASK 2: [worker] - [task description]
        ...
        """)

        response = self.llm.invoke(prompt.format(goal=goal))

        # Parse tasks (simplified)
        tasks = []
        for line in response.content.split('\\n'):
            if 'TASK' in line.upper() and '-' in line:
                parts = line.split('-', 1)
                if len(parts) == 2:
                    worker = "researcher"  # Default
                    for w in self.workers:
                        if w in parts[0].lower():
                            worker = w
                    tasks.append({"worker": worker, "task": parts[1].strip()})

        return tasks

    def execute(self, goal: str) -> dict:
        """Execute the full workflow."""
        print(f"🎯 GOAL: {goal}")
        print("=" * 60)

        # Plan
        tasks = self.plan_tasks(goal)
        print(f"\\n📋 PLANNED {len(tasks)} TASKS")

        # Execute each task
        results = []
        for i, task_info in enumerate(tasks, 1):
            worker_name = task_info["worker"]
            task = task_info["task"]

            print(f"\\n👤 {worker_name.upper()} working on: {task[:50]}...")

            worker = self.workers.get(worker_name, self.workers["writer"])
            result = worker.work(task)
            results.append({"worker": worker_name, "task": task, "result": result})

            print(f"   ✓ Complete")

        # Combine results
        final = self.combine_results(goal, results)

        return {"tasks": results, "final": final}

    def combine_results(self, goal: str, results: list) -> str:
        """Combine all worker outputs into final deliverable."""
        results_text = "\\n\\n".join([
            f"From {r['worker']}:\\n{r['result']}" for r in results
        ])

        prompt = ChatPromptTemplate.from_template("""
        As supervisor, combine these team outputs into a cohesive final result.

        Original Goal: {goal}

        Team Outputs:
        {results}

        Create the final, polished deliverable:
        """)

        response = self.llm.invoke(prompt.format(goal=goal, results=results_text))
        return response.content

# Usage
supervisor = SupervisorAgent()
result = supervisor.execute(
    "Create a product launch announcement for our new AI writing assistant"
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"6. Human-in-the-Loop Pattern"}
                </h2>
                <h3>
                  {"What Is It?"}
                </h3>
                <p>
                  {"The agent "}
                  <strong>
                    {"pauses at critical points to get human approval"}
                  </strong>
                  {" before proceeding. Essential for high-stakes decisions."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Human-in-the-Loop: Checkpoints for Safety

Task: "Send refund of $5,000 to customer"

┌─────────────────────────────────────────────────────────────────┐
│ AGENT: I'll process this refund. Let me verify the details...  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ AGENT: Found the order. Refund amount matches. Ready to send.  │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ ⚠️  HUMAN APPROVAL REQUIRED                                     │
│                                                                  │
│  Action: Process refund                                         │
│  Amount: $5,000.00                                              │
│  To: customer@email.com                                         │
│  Reason: Product defect                                         │
│                                                                  │
│  [ APPROVE ]    [ REJECT ]    [ MODIFY ]                        │
└─────────────────────────────────────────────────────────────────┘
                              │
                              │ Human clicks APPROVE
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│ AGENT: Refund processed successfully. Confirmation #RF-12345   │
└─────────────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"When To Use Human-in-the-Loop"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Financial transactions"}
                    </strong>
                    {" - payments, refunds, purchases"}
                  </li>
                  <li>
                    <strong>
                      {"Irreversible actions"}
                    </strong>
                    {" - deletions, sending emails"}
                  </li>
                  <li>
                    <strong>
                      {"External communications"}
                    </strong>
                    {" - customer messages, social media posts"}
                  </li>
                  <li>
                    <strong>
                      {"Legal/compliance actions"}
                    </strong>
                    {" - contracts, agreements"}
                  </li>
                  <li>
                    <strong>
                      {"Security-sensitive operations"}
                    </strong>
                    {" - access changes, deployments"}
                  </li>
                </ul>
                <h3>
                  {"When NOT To Use Human-in-the-Loop"}
                </h3>
                <ul>
                  <li>
                    {"Low-risk, easily reversible actions"}
                  </li>
                  <li>
                    {"High-volume automated tasks"}
                  </li>
                  <li>
                    {"When instant response is required"}
                  </li>
                </ul>
                <h3>
                  {"Code Example"}
                </h3>
                <div className="code-block">
                  <pre><code>{`from langchain_openai import ChatOpenAI
from enum import Enum
from typing import Callable

class RiskLevel(Enum):
    LOW = "low"
    MEDIUM = "medium"
    HIGH = "high"
    CRITICAL = "critical"

class HumanInTheLoopAgent:
    def __init__(self, approval_callback: Callable = None):
        self.llm = ChatOpenAI(model="gpt-4", temperature=0)
        # Default: ask for input in terminal
        self.get_approval = approval_callback or self._terminal_approval

        # Define which actions need approval
        self.approval_required = {
            RiskLevel.LOW: False,       # Auto-approve
            RiskLevel.MEDIUM: False,    # Auto-approve with logging
            RiskLevel.HIGH: True,       # Needs human approval
            RiskLevel.CRITICAL: True,   # Always needs approval
        }

    def _terminal_approval(self, action: dict) -> bool:
        """Get approval via terminal input."""
        print("\\n" + "=" * 60)
        print("⚠️  HUMAN APPROVAL REQUIRED")
        print("=" * 60)
        print(f"Action: {action['description']}")
        print(f"Risk Level: {action['risk_level'].value.upper()}")
        print(f"Details: {action['details']}")
        print("-" * 60)

        response = input("Approve? (yes/no): ").strip().lower()
        return response in ['yes', 'y', 'approve']

    def assess_risk(self, action: str) -> RiskLevel:
        """Assess the risk level of an action."""
        action_lower = action.lower()

        # Critical: Financial, delete, security
        if any(word in action_lower for word in
               ['payment', 'transfer', 'delete all', 'password', 'admin']):
            return RiskLevel.CRITICAL

        # High: External communication, modifications
        if any(word in action_lower for word in
               ['send email', 'post', 'publish', 'modify user']):
            return RiskLevel.HIGH

        # Medium: Internal changes
        if any(word in action_lower for word in
               ['update', 'create', 'change']):
            return RiskLevel.MEDIUM

        return RiskLevel.LOW

    def execute_with_approval(self, action: str, details: dict) -> dict:
        """Execute an action, with human approval if needed."""

        risk_level = self.assess_risk(action)

        action_info = {
            "description": action,
            "risk_level": risk_level,
            "details": details
        }

        # Check if approval is needed
        needs_approval = self.approval_required.get(risk_level, True)

        if needs_approval:
            approved = self.get_approval(action_info)

            if not approved:
                return {
                    "status": "rejected",
                    "message": "Action rejected by human operator",
                    "action": action
                }

        # Execute the action (simulated)
        result = self._execute_action(action, details)

        return {
            "status": "completed",
            "message": f"Action completed successfully",
            "action": action,
            "result": result,
            "approved_by": "human" if needs_approval else "auto"
        }

    def _execute_action(self, action: str, details: dict) -> str:
        """Actually execute the action."""
        # In real app, this would call actual APIs
        return f"Executed: {action}"

# Usage
agent = HumanInTheLoopAgent()

# Low risk - auto-approved
result = agent.execute_with_approval(
    "Search for customer order",
    {"order_id": "12345"}
)

# High risk - needs approval
result = agent.execute_with_approval(
    "Send email to customer about refund",
    {"to": "customer@email.com", "subject": "Your refund", "amount": "$500"}
)

# Critical - definitely needs approval
result = agent.execute_with_approval(
    "Process payment of $10,000",
    {"amount": 10000, "recipient": "vendor@company.com"}
)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Pattern Comparison Summary"}
                </h2>
                <div className="code-block">
                  <pre><code>{`┌─────────────────┬────────────────────────┬────────────────────────┬──────────────┐
│ PATTERN         │ BEST FOR               │ AVOID WHEN             │ COMPLEXITY   │
├─────────────────┼────────────────────────┼────────────────────────┼──────────────┤
│ ReAct           │ Q&A with tools         │ Very complex tasks     │ Low          │
│                 │ Simple assistants      │ Need strict order      │              │
├─────────────────┼────────────────────────┼────────────────────────┼──────────────┤
│ Plan & Execute  │ Complex projects       │ Simple questions       │ Medium       │
│                 │ Multi-step tasks       │ Dynamic situations     │              │
├─────────────────┼────────────────────────┼────────────────────────┼──────────────┤
│ Reflection      │ Quality content        │ Quick responses        │ Medium       │
│                 │ Code, writing          │ Simple facts           │              │
├─────────────────┼────────────────────────┼────────────────────────┼──────────────┤
│ Router          │ Multiple specialists   │ Single-purpose agents  │ Low-Medium   │
│                 │ Cost optimization      │ Uniform requests       │              │
├─────────────────┼────────────────────────┼────────────────────────┼──────────────┤
│ Multi-Agent     │ Team collaboration     │ Simple tasks           │ High         │
│                 │ Complex projects       │ Speed critical         │              │
├─────────────────┼────────────────────────┼────────────────────────┼──────────────┤
│ Human-in-Loop   │ High-stakes actions    │ Low-risk automation    │ Low-Medium   │
│                 │ Critical decisions     │ High-volume tasks      │              │
└─────────────────┴────────────────────────┴────────────────────────┴──────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Combining Patterns (Advanced)"}
                </h2>
                <p>
                  {"In real applications, you often combine multiple patterns:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Example: Customer Service Bot Architecture

                         ┌─────────────────┐
                         │     ROUTER      │  ← Pattern 4
                         │ Route by topic  │
                         └─────────────────┘
                                 │
         ┌───────────────────────┼───────────────────────┐
         │                       │                       │
         ▼                       ▼                       ▼
   ┌───────────┐          ┌───────────┐          ┌───────────┐
   │  BILLING  │          │  SUPPORT  │          │  RETURNS  │
   │   Agent   │          │   Agent   │          │   Agent   │
   │  (ReAct)  │ ← Pat 1  │(Reflection│ ← Pat 3  │(Plan&Exec)│ ← Pat 2
   └───────────┘          └───────────┘          └───────────┘
         │                       │                       │
         │                       │                       │
         ▼                       ▼                       ▼
   ┌─────────────────────────────────────────────────────────┐
   │              HUMAN-IN-THE-LOOP  ← Pattern 6             │
   │    (Approval for refunds > $100, account changes)       │
   └─────────────────────────────────────────────────────────┘`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"This combined system:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Routes requests to the right specialist (Router)"}
                  </li>
                  <li>
                    {"Billing uses ReAct for quick lookups and simple actions"}
                  </li>
                  <li>
                    {"Support uses Reflection to ensure quality responses"}
                  </li>
                  <li>
                    {"Returns uses Plan-and-Execute for multi-step processes"}
                  </li>
                  <li>
                    {"All high-value actions go through human approval"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started: Which Pattern First?"}
                </h2>
                <p>
                  {"If you're new to agent development, here's a suggested learning path:"}
                </p>
                <ol>
                  <li>
                    <strong>
                      {"Start with ReAct"}
                    </strong>
                    {" - It's the most common and easiest to understand"}
                  </li>
                  <li>
                    <strong>
                      {"Add Reflection"}
                    </strong>
                    {" - Improve output quality"}
                  </li>
                  <li>
                    <strong>
                      {"Learn Router"}
                    </strong>
                    {" - Scale to multiple capabilities"}
                  </li>
                  <li>
                    <strong>
                      {"Explore Plan-and-Execute"}
                    </strong>
                    {" - Handle complex workflows"}
                  </li>
                  <li>
                    <strong>
                      {"Master Multi-Agent"}
                    </strong>
                    {" - Build sophisticated systems"}
                  </li>
                  <li>
                    <strong>
                      {"Always consider Human-in-the-Loop"}
                    </strong>
                    {" - For safety and trust"}
                  </li>
                </ol>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Agent Architectures"}
                </h2>
                <p>
                  {"Our Agentic AI program covers all these patterns with hands-on projects. Build real agents using production-ready architectures."}
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
                      {"Build agents with LangChain"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/langgraph" className="related-article-card">
                    <h4>
                      {"LangGraph"}
                    </h4>
                    {" "}
                    <p>
                      {"Complex agent workflows"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/autogen" className="related-article-card">
                    <h4>
                      {"AutoGen"}
                    </h4>
                    {" "}
                    <p>
                      {"Multi-agent conversations"}
                    </p>
                  </Link>
                  <Link href="/agentic-ai/articles/crewai" className="related-article-card">
                    <h4>
                      {"CrewAI"}
                    </h4>
                    {" "}
                    <p>
                      {"Role-based agent teams"}
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
