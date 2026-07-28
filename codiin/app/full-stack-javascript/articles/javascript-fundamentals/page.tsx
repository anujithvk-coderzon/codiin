import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "JavaScript Fundamentals: The Language of the Web",
  description: "Learn JavaScript fundamentals - variables, data types, functions, arrays, objects, DOM manipulation, events, and ES6+ features. Understand why JavaScript is essential for web development.",
  keywords: ["JavaScript tutorial", "JS fundamentals", "ES6", "DOM manipulation", "JavaScript basics", "web development", "programming for beginners"],
  alternates: { canonical: "/full-stack-javascript/articles/javascript-fundamentals" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/javascript-fundamentals",
    title: "JavaScript Fundamentals: The Language of the Web",
    description: "Master JavaScript basics and ES6+ features for modern web development.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "JavaScript Fundamentals: The Language of the Web",
  "description": "Complete guide to JavaScript fundamentals for beginners",
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

export default function FullStackJavascriptJavascriptFundamentalsPage() {
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
                {"JavaScript Fundamentals"}
              </span>
            </div>
            <h1>
              {"JavaScript Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"The Language of the Web"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"20 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is JavaScript?"}
                </h2>
                <p>
                  {"JavaScript is a high-level, interpreted programming language that runs in web browsers and on servers. It's the only language that runs natively in all web browsers, making it essential for creating interactive websites."}
                </p>
                <p>
                  {"Think of a website as a house: HTML is the structure (walls, rooms), CSS is the decoration (paint, furniture), and JavaScript is the electricity that makes things work (lights, appliances, automation). Without JavaScript, websites would be static and lifeless."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Learn JavaScript?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Universal Language:"}
                    </strong>
                    {" Runs everywhere - browsers, servers (Node.js), mobile apps, desktop apps, even IoT devices"}
                  </li>
                  <li>
                    <strong>
                      {"Beginner-Friendly:"}
                    </strong>
                    {" No compilation needed, see results immediately in your browser"}
                  </li>
                  <li>
                    <strong>
                      {"Massive Ecosystem:"}
                    </strong>
                    {" Over 2 million packages on NPM, largest developer community"}
                  </li>
                  <li>
                    <strong>
                      {"Career Opportunities:"}
                    </strong>
                    {" Most in-demand programming language for 11+ years"}
                  </li>
                  <li>
                    <strong>
                      {"Full Stack Capability:"}
                    </strong>
                    {" Build complete applications with one language"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Variables: Storing Data"}
                </h2>
                <p>
                  {"Variables are containers that store data. Think of them as labeled boxes where you keep information."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Three ways to declare variables

// let - for values that will change
let age = 25;
age = 26; // Can be updated

// const - for values that won't change (constant)
const name = "Alice";
// name = "Bob"; // Error! Can't reassign const

// var - old way, avoid using it
var score = 100; // Has scoping issues

// Naming conventions
let userName = "John"; // camelCase (recommended)
let user_name = "Jane"; // snake_case (not common in JS)
const MAX_USERS = 100; // UPPERCASE for constants`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"When to use:"}
                  </strong>
                  {" Use "}
                  <code>
                    {"const"}
                  </code>
                  {" by default. Only use "}
                  <code>
                    {"let"}
                  </code>
                  {" when you know the value will change. Never use "}
                  <code>
                    {"var"}
                  </code>
                  {"."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Data Types: Different Kinds of Information"}
                </h2>
                <p>
                  {"JavaScript has several data types to represent different kinds of information:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// Primitive Data Types

// 1. Number - integers and decimals
let age = 30;
let price = 19.99;
let negative = -5;

// 2. String - text data
let firstName = "Alice";
let message = 'Hello World';
let template = \`My name is \${firstName}\`; // Template literal

// 3. Boolean - true or false
let isLoggedIn = true;
let hasPermission = false;

// 4. Undefined - variable declared but not assigned
let username; // undefined

// 5. Null - intentionally empty
let selectedItem = null;

// 6. Symbol - unique identifier (advanced)
let id = Symbol('id');

// Reference Types

// 7. Object - collection of key-value pairs
let user = {
    name: "Bob",
    age: 25,
    isActive: true
};

// 8. Array - ordered list
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];

// Check data type
console.log(typeof age); // "number"
console.log(typeof firstName); // "string"
console.log(typeof user); // "object"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Functions: Reusable Code Blocks"}
                </h2>
                <p>
                  {"Functions are like recipes - a set of instructions you can use repeatedly. They help organize code and avoid repetition."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Function Declaration
function greet(name) {
    return \`Hello, \${name}!\`;
}
console.log(greet("Alice")); // "Hello, Alice!"

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // 8

// Arrow Function (ES6+) - shorter syntax
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// Arrow function with multiple lines
const calculateTotal = (price, tax) => {
    const total = price + (price * tax);
    return total;
};

// Function with default parameters
function createUser(name, role = "guest") {
    return { name, role };
}
console.log(createUser("John")); // { name: "John", role: "guest" }

// Immediately Invoked Function Expression (IIFE)
(function() {
    console.log("I run immediately!");
})();`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"When to use:"}
                  </strong>
                  {" Create a function when you need to repeat the same task multiple times or want to organize related code together."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Arrays: Working with Lists"}
                </h2>
                <p>
                  {"Arrays store multiple values in a single variable. Think of an array as a shopping list."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Creating arrays
let fruits = ["apple", "banana", "orange"];
let numbers = [1, 2, 3, 4, 5];
let mixed = [1, "text", true, null]; // Can hold different types

// Accessing elements (zero-based indexing)
console.log(fruits[0]); // "apple"
console.log(fruits[2]); // "orange"

// Array properties and methods
console.log(fruits.length); // 3

// Adding elements
fruits.push("grape"); // Add to end
fruits.unshift("mango"); // Add to beginning

// Removing elements
let lastFruit = fruits.pop(); // Remove from end
let firstFruit = fruits.shift(); // Remove from beginning

// Modern array methods (ES6+)

// map - transform each element
const prices = [10, 20, 30];
const withTax = prices.map(price => price * 1.1);
// [11, 22, 33]

// filter - select elements that match a condition
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter(num => num % 2 === 0);
// [2, 4, 6]

// find - get first element that matches
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" }
];
const user = users.find(u => u.id === 2);
// { id: 2, name: "Bob" }

// reduce - accumulate values
const total = numbers.reduce((sum, num) => sum + num, 0);
// 21

// forEach - execute function for each element
fruits.forEach(fruit => console.log(fruit));

// includes - check if array contains value
console.log(fruits.includes("banana")); // true

// Spread operator - copy/combine arrays
const moreFruits = [...fruits, "kiwi"];
const combined = [...fruits, ...numbers];`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Objects: Structured Data"}
                </h2>
                <p>
                  {"Objects store related data and functions together. Think of an object as a real-world entity with properties and abilities."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Creating objects
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 30,
    isEmployed: true,
    // Method - function inside object
    greet: function() {
        return \`Hi, I'm \${this.firstName}\`;
    },
    // Shorter method syntax (ES6+)
    sayAge() {
        return \`I am \${this.age} years old\`;
    }
};

// Accessing properties
console.log(person.firstName); // Dot notation
console.log(person["lastName"]); // Bracket notation

// Calling methods
console.log(person.greet()); // "Hi, I'm John"

// Adding/modifying properties
person.email = "john@example.com";
person.age = 31;

// Deleting properties
delete person.isEmployed;

// Object destructuring (ES6+)
const { firstName, age } = person;
console.log(firstName); // "John"

// Object spread operator
const updatedPerson = {
    ...person,
    city: "New York",
    age: 32 // Override existing property
};

// Shorthand property names
const name = "Alice";
const userAge = 25;
const user = { name, age: userAge }; // { name: "Alice", age: 25 }

// Object.keys, values, entries
console.log(Object.keys(person)); // ["firstName", "lastName", ...]
console.log(Object.values(person)); // ["John", "Doe", ...]
console.log(Object.entries(person)); // [["firstName", "John"], ...]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"DOM Manipulation: Making Pages Interactive"}
                </h2>
                <p>
                  {"The Document Object Model (DOM) is how JavaScript interacts with HTML. It's the bridge between your code and the webpage."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Selecting elements
const button = document.getElementById('myButton');
const items = document.getElementsByClassName('item');
const heading = document.querySelector('h1'); // First match
const allParagraphs = document.querySelectorAll('p'); // All matches

// Changing content
heading.textContent = 'New Title'; // Text only
heading.innerHTML = '<strong>Bold Title</strong>'; // Can include HTML

// Changing styles
heading.style.color = 'blue';
heading.style.fontSize = '24px';

// Working with classes
heading.classList.add('highlight');
heading.classList.remove('old-class');
heading.classList.toggle('active'); // Add if missing, remove if present
heading.classList.contains('highlight'); // Check if has class

// Creating new elements
const newDiv = document.createElement('div');
newDiv.textContent = 'I am new!';
newDiv.classList.add('box');

// Adding to page
document.body.appendChild(newDiv); // Add to end
document.body.prepend(newDiv); // Add to beginning

// Removing elements
newDiv.remove();

// Changing attributes
const link = document.querySelector('a');
link.setAttribute('href', 'https://example.com');
const url = link.getAttribute('href');
link.removeAttribute('target');`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Where to use:"}
                  </strong>
                  {" DOM manipulation is used whenever you want to change what users see on the page - updating text, showing/hiding elements, adding new content, etc."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Event Handling: Responding to User Actions"}
                </h2>
                <p>
                  {"Events are things that happen in the browser - clicks, key presses, form submissions. JavaScript can listen for and respond to these events."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Click event
const button = document.querySelector('button');
button.addEventListener('click', function() {
    console.log('Button clicked!');
});

// Using arrow function
button.addEventListener('click', () => {
    console.log('Clicked with arrow function');
});

// Event object contains information
button.addEventListener('click', (event) => {
    console.log(event.target); // The element that was clicked
    console.log(event.type); // "click"
});

// Form events
const form = document.querySelector('form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Stop form from submitting
    const input = document.querySelector('input');
    console.log('User entered:', input.value);
});

// Input events
const textInput = document.querySelector('input[type="text"]');
textInput.addEventListener('input', (event) => {
    console.log('Current value:', event.target.value);
});

// Mouse events
const box = document.querySelector('.box');
box.addEventListener('mouseenter', () => console.log('Mouse entered'));
box.addEventListener('mouseleave', () => console.log('Mouse left'));

// Keyboard events
document.addEventListener('keydown', (event) => {
    console.log('Key pressed:', event.key);
    if (event.key === 'Enter') {
        console.log('Enter was pressed!');
    }
});

// Remove event listener
const handler = () => console.log('Click');
button.addEventListener('click', handler);
button.removeEventListener('click', handler);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"ES6+ Modern JavaScript Features"}
                </h2>
                <p>
                  {"ES6 (ECMAScript 2015) and later versions brought powerful new features to JavaScript:"}
                </p>
                <div className="code-block">
                  <pre><code>{`// 1. Template Literals - easier string formatting
const name = "Alice";
const age = 25;
const message = \`Hello, my name is \${name} and I am \${age} years old\`;

// Multi-line strings
const html = \`
    <div>
        <h1>\${name}</h1>
        <p>Age: \${age}</p>
    </div>
\`;

// 2. Destructuring - extract values from arrays/objects
const user = { name: "Bob", age: 30, city: "NYC" };
const { name, age } = user;

const colors = ["red", "green", "blue"];
const [first, second] = colors; // first = "red", second = "green"

// 3. Spread Operator - expand arrays/objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2]; // [1, 2, 3, 4, 5, 6]

const person = { name: "John", age: 25 };
const employee = { ...person, job: "Developer" };

// 4. Rest Parameters - collect multiple arguments
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // 10

// 5. Default Parameters
function greet(name = "Guest") {
    return \`Hello, \${name}\`;
}

// 6. Arrow Functions
const double = x => x * 2; // Concise syntax
const add = (a, b) => a + b;

// 7. Promises - handle asynchronous operations
fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));

// 8. Async/Await - cleaner async code
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

// 9. Modules - organize code across files
// export.js
export const PI = 3.14159;
export function square(x) { return x * x; }

// import.js
import { PI, square } from './export.js';

// 10. Optional Chaining - safe property access
const user = { profile: { name: "Alice" } };
console.log(user?.profile?.name); // "Alice"
console.log(user?.settings?.theme); // undefined (no error)

// 11. Nullish Coalescing - default values
const userInput = null;
const value = userInput ?? "default"; // "default"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use meaningful variable names:"}
                    </strong>
                    <code>
                      {"userName"}
                    </code>
                    {" instead of "}
                    <code>
                      {"x"}
                    </code>
                    {" or "}
                    <code>
                      {"data1"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Prefer const over let:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"const"}
                    </code>
                    {" unless you know the value will change"}
                  </li>
                  <li>
                    <strong>
                      {"Use strict equality (===):"}
                    </strong>
                    {" Avoid "}
                    <code>
                      {"=="}
                    </code>
                    {" as it can cause unexpected type coercion"}
                  </li>
                  <li>
                    <strong>
                      {"Comment your code:"}
                    </strong>
                    {" Explain why, not what (code shows what)"}
                  </li>
                  <li>
                    <strong>
                      {"Keep functions small:"}
                    </strong>
                    {" Each function should do one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Use modern array methods:"}
                    </strong>
                    <code>
                      {"map"}
                    </code>
                    {", "}
                    <code>
                      {"filter"}
                    </code>
                    {", "}
                    <code>
                      {"reduce"}
                    </code>
                    {" instead of loops when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors:"}
                    </strong>
                    {" Use try-catch blocks for operations that might fail"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid global variables:"}
                    </strong>
                    {" Keep variables in the smallest scope necessary"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use JavaScript"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Form Validation:"}
                    </strong>
                    {" Check user input before submitting"}
                  </li>
                  <li>
                    <strong>
                      {"Interactive UI:"}
                    </strong>
                    {" Dropdowns, modals, tabs, carousels"}
                  </li>
                  <li>
                    <strong>
                      {"Dynamic Content:"}
                    </strong>
                    {" Update page content without refreshing"}
                  </li>
                  <li>
                    <strong>
                      {"API Integration:"}
                    </strong>
                    {" Fetch data from servers and display it"}
                  </li>
                  <li>
                    <strong>
                      {"Animations:"}
                    </strong>
                    {" Create smooth transitions and effects"}
                  </li>
                  <li>
                    <strong>
                      {"Single Page Applications:"}
                    </strong>
                    {" Build app-like experiences with React, Angular, Vue"}
                  </li>
                  <li>
                    <strong>
                      {"Real-time Features:"}
                    </strong>
                    {" Chat applications, live notifications"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master JavaScript with Expert Guidance"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program takes you from fundamentals to advanced concepts. Build real-world projects with personalized mentorship from industry experts."}
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
                  <Link href="/full-stack-javascript/articles/react" className="related-article-card">
                    <h4>
                      {"React.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build modern UIs with React"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"JavaScript on the server"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/rest-apis" className="related-article-card">
                    <h4>
                      {"REST APIs"}
                    </h4>
                    {" "}
                    <p>
                      {"Build and consume APIs"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn JavaScript fundamentals."} />
    </>
  );
}
