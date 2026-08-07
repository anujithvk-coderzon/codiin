import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "React.js: Build Modern User Interfaces",
  description: "Learn React.js - the most popular JavaScript library for building user interfaces. Master components, JSX, state, props, hooks, and the virtual DOM.",
  keywords: ["React tutorial", "React.js", "JSX", "React hooks", "components", "virtual DOM", "state management", "frontend development"],
  alternates: { canonical: "/full-stack-javascript/articles/react" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/react",
    title: "React.js: Build Modern User Interfaces",
    description: "Master React for creating dynamic, component-based web applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "React.js: Build Modern User Interfaces",
  "description": "Complete guide to React.js for building interactive web applications",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-24",
  "dateModified": "2024-12-24"
} as const;

export default function FullStackJavascriptReactPage() {
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
              <Link href="/full-stack-javascript">
                {"Full Stack JavaScript"}
              </Link>
              {" / "}
              <span>
                {"React.js"}
              </span>
            </div>
            <h1>
              {"React.js"}
            </h1>
            <p className="article-subtitle">
              {"Build Modern User Interfaces"}
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
                  {"What is React?"}
                </h2>
                <p>
                  {"React is a JavaScript library for building user interfaces, developed and maintained by Facebook (Meta). It's the most popular frontend library in the world, used by companies like Netflix, Airbnb, Instagram, and Uber."}
                </p>
                <p>
                  {"Think of React as LEGO blocks for websites. Instead of building a website as one big piece, you create small, reusable components (like header, button, card) and combine them to build complex applications. This makes code easier to understand, test, and maintain."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Choose React?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Component-Based Architecture:"}
                    </strong>
                    {" Build encapsulated components that manage their own state, then compose them to make complex UIs"}
                  </li>
                  <li>
                    <strong>
                      {"Declarative:"}
                    </strong>
                    {" Design simple views for each state, and React efficiently updates the right components when data changes"}
                  </li>
                  <li>
                    <strong>
                      {"Learn Once, Write Anywhere:"}
                    </strong>
                    {" Use React for web, mobile (React Native), desktop (Electron), and even VR"}
                  </li>
                  <li>
                    <strong>
                      {"Huge Ecosystem:"}
                    </strong>
                    {" Massive community, countless libraries, abundant learning resources"}
                  </li>
                  <li>
                    <strong>
                      {"Strong Job Market:"}
                    </strong>
                    {" Most in-demand frontend skill, higher salaries than alternatives"}
                  </li>
                  <li>
                    <strong>
                      {"Backed by Meta:"}
                    </strong>
                    {" Well-maintained, regular updates, long-term support guaranteed"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"React vs Other Frameworks"}
                </h2>
                <div className="code-block">
                  <pre><code>{`React vs Angular vs Vue:

REACT
✓ Easier learning curve (just JavaScript)
✓ More flexible, not opinionated
✓ Largest job market
✓ Can integrate into existing projects
✗ Requires choosing additional libraries (routing, state)

ANGULAR
✓ Complete framework (everything included)
✓ Strong TypeScript integration
✓ Enterprise-friendly
✗ Steeper learning curve
✗ More verbose code
✗ Smaller job market than React

VUE
✓ Easiest to learn
✓ Great documentation
✓ Progressive framework
✗ Smaller ecosystem
✗ Less job opportunities
✗ Corporate backing concerns

When to choose React:
- Building Single Page Applications (SPAs)
- Need maximum flexibility
- Want the largest talent pool
- Plan to use React Native for mobile
- Building startups/MVPs (fast development)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Components: Building Blocks of React"}
                </h2>
                <p>
                  {"Components are independent, reusable pieces of UI. Think of them as JavaScript functions that return HTML."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Function Component (modern way)
function Welcome(props) {
    return <h1>Hello, {props.name}!</h1>;
}

// Arrow Function Component
const Greeting = (props) => {
    return <h1>Welcome, {props.name}</h1>;
};

// Component with multiple elements
function UserCard({ name, email, avatar }) {
    return (
        <div className="card">
            <img src={avatar} alt={name} />
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
    );
}

// Using components
function App() {
    return (
        <div>
            <Welcome name="Alice" />
            <UserCard
                name="Bob Smith"
                email="bob@example.com"
                avatar="/avatar.jpg"
            />
        </div>
    );
}

// Class Component (older way, still used)
class Counter extends React.Component {
    render() {
        return <h1>Count: {this.props.count}</h1>;
    }
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"When to use:"}
                  </strong>
                  {" Create a component for any UI element you might reuse or that represents a distinct piece of functionality."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"JSX: JavaScript + HTML"}
                </h2>
                <p>
                  {"JSX is a syntax extension that lets you write HTML-like code in JavaScript. It makes React code more readable and expressive."}
                </p>
                <div className="code-block">
                  <pre><code>{`// JSX looks like HTML but it's JavaScript
const element = <h1>Hello, World!</h1>;

// Embed JavaScript expressions with {}
const name = "Alice";
const greeting = <h1>Hello, {name}!</h1>;

// Use any JavaScript expression
const element = <h1>2 + 2 = {2 + 2}</h1>;

// JSX attributes (use camelCase)
const link = <a href="https://example.com" className="btn">Click</a>;
const input = <input type="text" onChange={handleChange} />;

// Conditional rendering
const message = (
    <div>
        {isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please login</h1>}
    </div>
);

// Rendering lists
const fruits = ['apple', 'banana', 'orange'];
const list = (
    <ul>
        {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
        ))}
    </ul>
);

// JSX prevents injection attacks (auto-escapes)
const userInput = "<script>alert('hack')</script>";
const safe = <div>{userInput}</div>; // Rendered as text, not executed

// Important: JSX differences from HTML
// class → className
// for → htmlFor
// onclick → onClick
// All event handlers are camelCase
// Self-closing tags need / at end`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Props: Passing Data to Components"}
                </h2>
                <p>
                  {"Props (properties) are how you pass data from parent components to child components. They're like function arguments."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Passing props
function App() {
    return (
        <User
            name="Alice"
            age={25}
            isActive={true}
            hobbies={['coding', 'reading']}
        />
    );
}

// Receiving props
function User(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Status: {props.isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
}

// Props destructuring (cleaner)
function User({ name, age, isActive }) {
    return (
        <div>
            <h1>{name}</h1>
            <p>Age: {age}</p>
            <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
        </div>
    );
}

// Default props
function Button({ text = "Click Me", color = "blue" }) {
    return <button style={{ color }}>{text}</button>;
}

// Props.children - content between component tags
function Card({ children }) {
    return <div className="card">{children}</div>;
}

<Card>
    <h2>Title</h2>
    <p>Content goes here</p>
</Card>

// Important: Props are read-only!
// ✗ props.name = "Bob"; // NEVER modify props
// ✓ Create state if you need to modify values`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"State: Component Memory"}
                </h2>
                <p>
                  {"State is data that changes over time. When state changes, React re-renders the component to show the updated data."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { useState } from 'react';

// Basic state
function Counter() {
    const [count, setCount] = useState(0); // Initial value: 0

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Increment
            </button>
        </div>
    );
}

// Multiple state variables
function Form() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState(0);

    return (
        <form>
            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
        </form>
    );
}

// State with objects
function User() {
    const [user, setUser] = useState({
        name: 'Alice',
        age: 25
    });

    // Update object state (must spread)
    const updateName = (newName) => {
        setUser({ ...user, name: newName });
    };

    return <div>{user.name}</div>;
}

// State with arrays
function TodoList() {
    const [todos, setTodos] = useState(['Task 1', 'Task 2']);

    const addTodo = (text) => {
        setTodos([...todos, text]); // Add to array
    };

    const removeTodo = (index) => {
        setTodos(todos.filter((_, i) => i !== index)); // Remove from array
    };

    return (
        <ul>
            {todos.map((todo, index) => (
                <li key={index}>
                    {todo}
                    <button onClick={() => removeTodo(index)}>Delete</button>
                </li>
            ))}
        </ul>
    );
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Props vs State:"}
                  </strong>
                  {" Props are passed from parent (like function parameters), State is managed within component (like local variables)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"React Hooks: Superpowers for Function Components"}
                </h2>
                <p>
                  {"Hooks let you use state and other React features in function components. They're the modern way to write React."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { useState, useEffect, useContext, useRef } from 'react';

// 1. useState - add state to components
const [count, setCount] = useState(0);

// 2. useEffect - side effects (API calls, subscriptions, timers)
function UserProfile({ userId }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Runs after component renders
        fetch(\`/api/users/\${userId}\`)
            .then(res => res.json())
            .then(data => setUser(data));

        // Cleanup function (optional)
        return () => {
            console.log('Component unmounting or userId changed');
        };
    }, [userId]); // Dependencies - re-run when userId changes

    return <div>{user?.name}</div>;
}

// 3. useContext - share data without passing props
const ThemeContext = React.createContext('light');

function App() {
    return (
        <ThemeContext.Provider value="dark">
            <Toolbar />
        </ThemeContext.Provider>
    );
}

function Toolbar() {
    const theme = useContext(ThemeContext); // Access context value
    return <div className={theme}>Current theme: {theme}</div>;
}

// 4. useRef - access DOM elements or persist values
function TextInput() {
    const inputRef = useRef(null);

    const focusInput = () => {
        inputRef.current.focus(); // Access DOM element
    };

    return (
        <>
            <input ref={inputRef} />
            <button onClick={focusInput}>Focus Input</button>
        </>
    );
}

// 5. Custom Hooks - reuse stateful logic
function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        const stored = localStorage.getItem(key);
        return stored ? JSON.parse(stored) : initialValue;
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

// Using custom hook
function Settings() {
    const [theme, setTheme] = useLocalStorage('theme', 'light');
    return <button onClick={() => setTheme('dark')}>Change Theme</button>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Virtual DOM: React's Secret Weapon"}
                </h2>
                <p>
                  {"The Virtual DOM is what makes React fast. Instead of updating the real DOM directly, React creates a virtual copy, makes changes there, and then efficiently updates only what changed in the real DOM."}
                </p>
                <div className="code-block">
                  <pre><code>{`How Virtual DOM Works:

1. You change state → setCount(5)

2. React creates new Virtual DOM tree
   (lightweight JavaScript object)

3. React compares (diffs) new tree with old tree
   - Find minimal set of changes

4. React updates only changed parts in real DOM
   - Much faster than recreating entire DOM

Real DOM (Slow):
┌─────────────────┐
│   <div>         │
│     <h1>5</h1>  │  ← Entire tree updates
│     <p>...</p>  │
│   </div>        │
└─────────────────┘

Virtual DOM (Fast):
┌─────────────────┐
│   {            │
│     type: 'h1' │  ← Only h1 content changed
│     props: {   │
│       children:5│  ← Update just this
│     }          │
│   }            │
└─────────────────┘

Why it's fast:
- DOM operations are slow (browser repaints)
- Virtual DOM is pure JavaScript (very fast)
- Batches multiple changes into one update
- Updates only what actually changed

You don't need to think about this!
React handles it automatically.`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Handling Events in React"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Click events
function Button() {
    const handleClick = () => {
        console.log('Button clicked!');
    };

    return <button onClick={handleClick}>Click Me</button>;
}

// Event with parameters
function ItemList() {
    const deleteItem = (id) => {
        console.log('Delete item', id);
    };

    return (
        <button onClick={() => deleteItem(5)}>Delete</button>
    );
}

// Form events
function Form() {
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault(); // Stop page refresh
        console.log('Submitted:', email);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit">Submit</button>
        </form>
    );
}

// Keyboard events
function SearchBox() {
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            console.log('Search:', event.target.value);
        }
    };

    return <input onKeyPress={handleKeyPress} />;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep components small:"}
                    </strong>
                    {" Each component should do one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Use function components and hooks:"}
                    </strong>
                    {" Modern, cleaner, less code than class components"}
                  </li>
                  <li>
                    <strong>
                      {"Lift state up:"}
                    </strong>
                    {" Move state to closest common ancestor when multiple components need it"}
                  </li>
                  <li>
                    <strong>
                      {"Use keys in lists:"}
                    </strong>
                    {" Help React identify which items changed (use unique IDs, not array index)"}
                  </li>
                  <li>
                    <strong>
                      {"Don't mutate state:"}
                    </strong>
                    {" Always create new objects/arrays when updating state"}
                  </li>
                  <li>
                    <strong>
                      {"Use meaningful component names:"}
                    </strong>
                    {" PascalCase for components, describe what they do"}
                  </li>
                  <li>
                    <strong>
                      {"Destructure props:"}
                    </strong>
                    {" Makes code cleaner and easier to read"}
                  </li>
                  <li>
                    <strong>
                      {"Use React DevTools:"}
                    </strong>
                    {" Browser extension for debugging React apps"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use React"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Single Page Applications (SPAs):"}
                    </strong>
                    {" Dashboard, admin panels, web apps"}
                  </li>
                  <li>
                    <strong>
                      {"Dynamic interfaces:"}
                    </strong>
                    {" Lots of user interaction, real-time updates"}
                  </li>
                  <li>
                    <strong>
                      {"Complex UIs:"}
                    </strong>
                    {" Many components that need to share data"}
                  </li>
                  <li>
                    <strong>
                      {"Mobile apps:"}
                    </strong>
                    {" Use React Native for iOS/Android"}
                  </li>
                  <li>
                    <strong>
                      {"Progressive Web Apps:"}
                    </strong>
                    {" App-like experiences in browser"}
                  </li>
                  <li>
                    <strong>
                      {"E-commerce sites:"}
                    </strong>
                    {" Product catalogs, shopping carts, checkout flows"}
                  </li>
                  <li>
                    <strong>
                      {"Social media platforms:"}
                    </strong>
                    {" Feeds, comments, real-time interactions"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use React:"}
                  </strong>
                  {" Simple static websites (blog, landing page), SEO-critical content sites (use Next.js instead for server-side rendering)."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Build Modern Apps with React"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers React from basics to advanced patterns. Build real-world projects with expert mentorship and job-ready skills."}
                </p>
                <Link href="/full-stack-javascript" className="btn btn-primary">
                  {"Explore JavaScript Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-javascript/articles/javascript-fundamentals" className="related-article-card">
                    <h4>
                      {"JavaScript Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Master JavaScript basics first"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Backend with JavaScript"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/rest-apis" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Connect React to backend"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn React.js."} />
    </>
  );
}
