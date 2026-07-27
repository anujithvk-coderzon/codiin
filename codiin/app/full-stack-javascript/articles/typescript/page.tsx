import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "TypeScript Fundamentals: JavaScript with Superpowers",
  description: "Learn TypeScript - JavaScript with types. Master type annotations, interfaces, generics, and build more reliable applications with static type checking.",
  keywords: ["TypeScript tutorial", "TypeScript basics", "type annotations", "interfaces", "generics", "static typing", "JavaScript types"],
  alternates: { canonical: "/full-stack-javascript/articles/typescript" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/typescript",
    title: "TypeScript Fundamentals: JavaScript with Superpowers",
    description: "Master TypeScript for building reliable, scalable applications with static type checking.",
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
  "headline": "TypeScript Fundamentals: JavaScript with Superpowers",
  "description": "Complete guide to TypeScript for building type-safe applications",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-25",
  "dateModified": "2024-12-25"
} as const;

export default function FullStackJavascriptTypescriptPage() {
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
                {"TypeScript"}
              </span>
            </div>
            <h1>
              {"TypeScript Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"JavaScript with Superpowers"}
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
                  {"What is TypeScript?"}
                </h2>
                <p>
                  {"TypeScript is JavaScript with syntax for types. It's a superset of JavaScript that adds static type checking, helping you catch errors before your code runs. Think of it as a spell-checker for your code."}
                </p>
                <p>
                  {"Created by Microsoft, TypeScript has become the industry standard for large-scale JavaScript applications. Companies like Google, Airbnb, Slack, and Stripe use TypeScript to build more reliable software."}
                </p>
                <div className="code-block">
                  <pre><code>{`// JavaScript - No errors until runtime
function greet(name) {
    return "Hello, " + name.toUpperCase();
}
greet(123); // Runtime error! 123.toUpperCase is not a function

// TypeScript - Error caught while writing code
function greet(name: string): string {
    return "Hello, " + name.toUpperCase();
}
greet(123); // Error: Argument of type 'number' is not
            // assignable to parameter of type 'string'`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use TypeScript?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Catch Errors Early:"}
                    </strong>
                    {" Find bugs during development, not in production"}
                  </li>
                  <li>
                    <strong>
                      {"Better IDE Support:"}
                    </strong>
                    {" Autocomplete, refactoring, and navigation work better with types"}
                  </li>
                  <li>
                    <strong>
                      {"Self-Documenting Code:"}
                    </strong>
                    {" Types serve as documentation that's always up-to-date"}
                  </li>
                  <li>
                    <strong>
                      {"Safer Refactoring:"}
                    </strong>
                    {" Change code confidently - the compiler tells you what breaks"}
                  </li>
                  <li>
                    <strong>
                      {"Team Collaboration:"}
                    </strong>
                    {" Types make it clear how code should be used"}
                  </li>
                  <li>
                    <strong>
                      {"Industry Standard:"}
                    </strong>
                    {" Required by most companies, expected in job interviews"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`The TypeScript Advantage:

JavaScript Problems          TypeScript Solutions
─────────────────────────────────────────────────────
Runtime errors               Compile-time errors
"undefined is not a          Clear error messages
 function"                   showing exact problem

No autocomplete for          Full IntelliSense with
custom objects               property suggestions

Documentation gets           Types ARE documentation
outdated                     (always accurate)

Refactoring is scary         Refactor with confidence
(what will break?)           (compiler shows issues)

Team confusion about         Types clarify API
function parameters          contracts`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Basic Types"}
                </h2>
                <p>
                  {"TypeScript provides type annotations to describe the shape of your data."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Primitive Types
let name: string = "Alice";
let age: number = 25;
let isActive: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;

// Arrays
let numbers: number[] = [1, 2, 3, 4, 5];
let names: string[] = ["Alice", "Bob", "Charlie"];
let mixed: (string | number)[] = [1, "two", 3];

// Alternative array syntax
let scores: Array<number> = [90, 85, 92];

// Tuple - fixed-length array with specific types
let person: [string, number] = ["Alice", 25];
let coordinate: [number, number, number] = [10, 20, 30];

// Enum - named constants
enum Color {
    Red,      // 0
    Green,    // 1
    Blue      // 2
}
let favoriteColor: Color = Color.Blue;

enum Status {
    Pending = "PENDING",
    Approved = "APPROVED",
    Rejected = "REJECTED"
}
let orderStatus: Status = Status.Pending;

// Any - opt-out of type checking (avoid when possible)
let flexible: any = "hello";
flexible = 42;        // OK
flexible = true;      // OK

// Unknown - safer than any (must check type before use)
let input: unknown = getUserInput();
if (typeof input === "string") {
    console.log(input.toUpperCase()); // OK - type checked
}

// Void - function returns nothing
function logMessage(message: string): void {
    console.log(message);
}

// Never - function never returns (throws or infinite loop)
function throwError(message: string): never {
    throw new Error(message);
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type Inference"}
                </h2>
                <p>
                  {"TypeScript is smart! It can often figure out types automatically, so you don't always need to write them explicitly."}
                </p>
                <div className="code-block">
                  <pre><code>{`// TypeScript infers the type from the value
let message = "Hello";      // Type: string
let count = 42;             // Type: number
let isValid = true;         // Type: boolean

// Inferred array types
let numbers = [1, 2, 3];    // Type: number[]
let mixed = [1, "two"];     // Type: (string | number)[]

// Function return type inference
function add(a: number, b: number) {
    return a + b;           // Return type: number (inferred)
}

// Object type inference
let user = {
    name: "Alice",
    age: 25
};
// Type: { name: string; age: number }

// When to add explicit types:
// 1. Function parameters (always)
function greet(name: string) { }

// 2. When inference doesn't work
let items: string[] = [];  // Empty array needs type

// 3. For documentation/clarity
interface User {
    name: string;
    age: number;
}
let currentUser: User = { name: "Bob", age: 30 };

// 4. When you want a different type than inferred
let id: string | number = 123;  // Could be either`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Interfaces"}
                </h2>
                <p>
                  {"Interfaces define the shape of objects. They're like contracts that specify what properties and methods an object must have."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Basic interface
interface User {
    name: string;
    email: string;
    age: number;
}

const user: User = {
    name: "Alice",
    email: "alice@example.com",
    age: 25
};

// Optional properties (?)
interface Product {
    id: number;
    name: string;
    description?: string;  // Optional
    price: number;
}

const laptop: Product = {
    id: 1,
    name: "MacBook Pro",
    price: 1999
    // description is optional, so we can omit it
};

// Readonly properties
interface Config {
    readonly apiKey: string;
    readonly baseUrl: string;
}

const config: Config = {
    apiKey: "abc123",
    baseUrl: "https://api.example.com"
};
// config.apiKey = "new"; // Error: Cannot assign to readonly

// Function types in interfaces
interface Calculator {
    add(a: number, b: number): number;
    subtract(a: number, b: number): number;
}

const calc: Calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b
};

// Extending interfaces
interface Person {
    name: string;
    age: number;
}

interface Employee extends Person {
    employeeId: string;
    department: string;
}

const employee: Employee = {
    name: "Bob",
    age: 30,
    employeeId: "E123",
    department: "Engineering"
};

// Interface for classes
interface Printable {
    print(): void;
}

class Document implements Printable {
    print() {
        console.log("Printing document...");
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type Aliases"}
                </h2>
                <p>
                  {"Type aliases create custom names for types. They're similar to interfaces but more flexible."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Basic type alias
type ID = string | number;
type Email = string;

let userId: ID = 123;
let userEmail: Email = "user@example.com";

// Object type alias
type Point = {
    x: number;
    y: number;
};

const origin: Point = { x: 0, y: 0 };

// Union types - one of several types
type Status = "pending" | "approved" | "rejected";
type Result = string | number | boolean;

let orderStatus: Status = "pending";
// orderStatus = "invalid";  // Error: not in union

// Intersection types - combine multiple types
type Person = {
    name: string;
    age: number;
};

type ContactInfo = {
    email: string;
    phone: string;
};

type Employee = Person & ContactInfo;

const emp: Employee = {
    name: "Alice",
    age: 30,
    email: "alice@company.com",
    phone: "123-456-7890"
};

// Function type alias
type GreetFunction = (name: string) => string;

const greet: GreetFunction = (name) => \`Hello, \${name}!\`;

// Generic type alias
type Container<T> = {
    value: T;
    timestamp: Date;
};

const stringContainer: Container<string> = {
    value: "hello",
    timestamp: new Date()
};

// Type vs Interface - when to use which?
// Use Interface for:
//   - Object shapes that might be extended
//   - Class contracts (implements)
//   - When you want declaration merging

// Use Type for:
//   - Union types
//   - Intersection types
//   - Mapped types
//   - Utility types`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Functions in TypeScript"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Basic function with types
function add(a: number, b: number): number {
    return a + b;
}

// Arrow function
const multiply = (a: number, b: number): number => a * b;

// Optional parameters
function greet(name: string, greeting?: string): string {
    return \`\${greeting || "Hello"}, \${name}!\`;
}
greet("Alice");           // "Hello, Alice!"
greet("Alice", "Hi");     // "Hi, Alice!"

// Default parameters
function createUser(name: string, role: string = "user"): object {
    return { name, role };
}
createUser("Alice");              // { name: "Alice", role: "user" }
createUser("Bob", "admin");       // { name: "Bob", role: "admin" }

// Rest parameters
function sum(...numbers: number[]): number {
    return numbers.reduce((total, n) => total + n, 0);
}
sum(1, 2, 3, 4, 5);  // 15

// Function overloads - same function, different signatures
function format(value: string): string;
function format(value: number): string;
function format(value: string | number): string {
    if (typeof value === "string") {
        return value.toUpperCase();
    }
    return value.toFixed(2);
}

format("hello");   // "HELLO"
format(3.14159);   // "3.14"

// Callback function types
function fetchData(
    url: string,
    callback: (data: string, error?: Error) => void
): void {
    // Fetch implementation
    callback("data", undefined);
}

// Generic functions
function firstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}

firstElement([1, 2, 3]);        // Type: number
firstElement(["a", "b", "c"]);  // Type: string`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Generics"}
                </h2>
                <p>
                  {"Generics allow you to write reusable code that works with any type while maintaining type safety."}
                </p>
                <div className="code-block">
                  <pre><code>{`// The problem generics solve
function identity(value: any): any {
    return value;
}
// Lost type information! We don't know what type comes out

// Generic solution
function identity<T>(value: T): T {
    return value;
}

const num = identity(42);       // Type: number
const str = identity("hello");  // Type: string

// Generic interfaces
interface Box<T> {
    contents: T;
    label: string;
}

const numberBox: Box<number> = {
    contents: 42,
    label: "My Number"
};

const stringBox: Box<string> = {
    contents: "Hello",
    label: "My String"
};

// Generic with constraints
interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

logLength("hello");     // OK - strings have length
logLength([1, 2, 3]);   // OK - arrays have length
// logLength(123);      // Error - numbers don't have length

// Multiple type parameters
function pair<T, U>(first: T, second: U): [T, U] {
    return [first, second];
}

const result = pair("age", 25);  // Type: [string, number]

// Generic classes
class Queue<T> {
    private items: T[] = [];

    enqueue(item: T): void {
        this.items.push(item);
    }

    dequeue(): T | undefined {
        return this.items.shift();
    }
}

const numberQueue = new Queue<number>();
numberQueue.enqueue(1);
numberQueue.enqueue(2);
const first = numberQueue.dequeue();  // Type: number | undefined

// Real-world example: API response
interface ApiResponse<T> {
    data: T;
    status: number;
    message: string;
}

interface User {
    id: number;
    name: string;
}

const userResponse: ApiResponse<User> = {
    data: { id: 1, name: "Alice" },
    status: 200,
    message: "Success"
};

const usersResponse: ApiResponse<User[]> = {
    data: [
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ],
    status: 200,
    message: "Success"
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Classes in TypeScript"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Basic class
class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    greet(): string {
        return \`Hello, I'm \${this.name}\`;
    }
}

const alice = new Person("Alice", 25);

// Access modifiers
class Employee {
    public name: string;       // Accessible anywhere (default)
    private salary: number;    // Only within class
    protected id: string;      // Within class and subclasses
    readonly department: string; // Cannot be changed after init

    constructor(name: string, salary: number, dept: string) {
        this.name = name;
        this.salary = salary;
        this.id = \`EMP-\${Date.now()}\`;
        this.department = dept;
    }

    // Private method
    private calculateBonus(): number {
        return this.salary * 0.1;
    }

    public getYearlyPay(): number {
        return this.salary * 12 + this.calculateBonus();
    }
}

// Shorthand constructor
class User {
    constructor(
        public name: string,
        public email: string,
        private password: string
    ) {}
    // Properties automatically created and assigned!
}

// Inheritance
class Animal {
    constructor(public name: string) {}

    move(distance: number): void {
        console.log(\`\${this.name} moved \${distance}m\`);
    }
}

class Dog extends Animal {
    constructor(name: string, public breed: string) {
        super(name);  // Call parent constructor
    }

    bark(): void {
        console.log("Woof!");
    }

    // Override parent method
    move(distance: number): void {
        console.log("Running...");
        super.move(distance);  // Call parent method
    }
}

// Abstract classes
abstract class Shape {
    abstract getArea(): number;  // Must be implemented

    printArea(): void {
        console.log(\`Area: \${this.getArea()}\`);
    }
}

class Circle extends Shape {
    constructor(private radius: number) {
        super();
    }

    getArea(): number {
        return Math.PI * this.radius ** 2;
    }
}

// Static members
class MathHelper {
    static PI = 3.14159;

    static square(n: number): number {
        return n * n;
    }
}

console.log(MathHelper.PI);        // 3.14159
console.log(MathHelper.square(5)); // 25`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Utility Types"}
                </h2>
                <p>
                  {"TypeScript provides built-in utility types for common type transformations."}
                </p>
                <div className="code-block">
                  <pre><code>{`interface User {
    id: number;
    name: string;
    email: string;
    age: number;
}

// Partial<T> - make all properties optional
type UpdateUser = Partial<User>;
// { id?: number; name?: string; email?: string; age?: number }

function updateUser(id: number, updates: Partial<User>) {
    // Can pass any subset of User properties
}
updateUser(1, { name: "New Name" });  // OK

// Required<T> - make all properties required
type CompleteUser = Required<User>;

// Readonly<T> - make all properties readonly
type ImmutableUser = Readonly<User>;
const user: ImmutableUser = { id: 1, name: "Alice", email: "a@b.com", age: 25 };
// user.name = "Bob";  // Error: readonly

// Pick<T, K> - select specific properties
type UserPreview = Pick<User, "id" | "name">;
// { id: number; name: string }

// Omit<T, K> - exclude specific properties
type UserWithoutEmail = Omit<User, "email">;
// { id: number; name: string; age: number }

// Record<K, T> - create object type with key type and value type
type UserRoles = Record<string, string[]>;
const roles: UserRoles = {
    admin: ["read", "write", "delete"],
    user: ["read"]
};

// Exclude<T, U> - exclude types from union
type Status = "pending" | "approved" | "rejected";
type ActiveStatus = Exclude<Status, "rejected">;
// "pending" | "approved"

// Extract<T, U> - extract types from union
type StringOrNumber = string | number | boolean;
type OnlyStrings = Extract<StringOrNumber, string>;
// string

// NonNullable<T> - remove null and undefined
type MaybeString = string | null | undefined;
type DefinitelyString = NonNullable<MaybeString>;
// string

// ReturnType<T> - get return type of function
function createUser() {
    return { id: 1, name: "Alice" };
}
type NewUser = ReturnType<typeof createUser>;
// { id: number; name: string }

// Parameters<T> - get parameter types as tuple
function greet(name: string, age: number): void {}
type GreetParams = Parameters<typeof greet>;
// [string, number]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Type Guards and Narrowing"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// typeof guard
function process(value: string | number) {
    if (typeof value === "string") {
        // TypeScript knows value is string here
        return value.toUpperCase();
    }
    // TypeScript knows value is number here
    return value.toFixed(2);
}

// instanceof guard
class Dog { bark() { console.log("Woof"); } }
class Cat { meow() { console.log("Meow"); } }

function makeSound(animal: Dog | Cat) {
    if (animal instanceof Dog) {
        animal.bark();  // TypeScript knows it's Dog
    } else {
        animal.meow();  // TypeScript knows it's Cat
    }
}

// in operator guard
interface Fish { swim(): void }
interface Bird { fly(): void }

function move(animal: Fish | Bird) {
    if ("swim" in animal) {
        animal.swim();  // TypeScript knows it's Fish
    } else {
        animal.fly();   // TypeScript knows it's Bird
    }
}

// Custom type guard
interface User {
    type: "user";
    name: string;
}

interface Admin {
    type: "admin";
    name: string;
    permissions: string[];
}

function isAdmin(person: User | Admin): person is Admin {
    return person.type === "admin";
}

function greet(person: User | Admin) {
    if (isAdmin(person)) {
        console.log(\`Admin: \${person.name}, Perms: \${person.permissions}\`);
    } else {
        console.log(\`User: \${person.name}\`);
    }
}

// Discriminated unions
type Shape =
    | { kind: "circle"; radius: number }
    | { kind: "rectangle"; width: number; height: number }
    | { kind: "triangle"; base: number; height: number };

function getArea(shape: Shape): number {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "rectangle":
            return shape.width * shape.height;
        case "triangle":
            return 0.5 * shape.base * shape.height;
    }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"TypeScript with React"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Component props interface
interface ButtonProps {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    variant?: "primary" | "secondary" | "danger";
}

// Function component with types
const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    disabled = false,
    variant = "primary"
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={\`btn btn-\${variant}\`}
        >
            {label}
        </button>
    );
};

// useState with types
const [count, setCount] = useState<number>(0);
const [user, setUser] = useState<User | null>(null);
const [items, setItems] = useState<string[]>([]);

// Event handlers
const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log(event.currentTarget);
};

const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value);
};

const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
};

// useRef with types
const inputRef = useRef<HTMLInputElement>(null);
const timerRef = useRef<number | null>(null);

// Children prop
interface CardProps {
    title: string;
    children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => (
    <div className="card">
        <h2>{title}</h2>
        {children}
    </div>
);

// Generic component
interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>) {
    return <ul>{items.map(renderItem)}</ul>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Setting Up TypeScript"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Install TypeScript globally
npm install -g typescript

# Check version
tsc --version

# Initialize TypeScript in a project
tsc --init  # Creates tsconfig.json

# Compile TypeScript to JavaScript
tsc file.ts           # Single file
tsc                   # All files (uses tsconfig.json)
tsc --watch           # Watch mode

# For React projects
npx create-react-app my-app --template typescript

# For Node.js projects
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init

# Essential tsconfig.json settings
{
    "compilerOptions": {
        "target": "ES2020",           // JavaScript version
        "module": "commonjs",         // Module system
        "strict": true,               // Enable all strict checks
        "esModuleInterop": true,      // Better import compatibility
        "skipLibCheck": true,         // Skip .d.ts checking
        "outDir": "./dist",           // Output directory
        "rootDir": "./src",           // Source directory
        "declaration": true,          // Generate .d.ts files
        "sourceMap": true             // Generate source maps
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules"]
}

# Type definitions for libraries
npm install @types/express --save-dev
npm install @types/lodash --save-dev
npm install @types/react --save-dev`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Enable strict mode:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"\"strict\": true"}
                    </code>
                    {" in tsconfig.json for maximum safety"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid any:"}
                    </strong>
                    {" Use unknown or proper types instead of any"}
                  </li>
                  <li>
                    <strong>
                      {"Use type inference:"}
                    </strong>
                    {" Don't add types when TypeScript can infer them"}
                  </li>
                  <li>
                    <strong>
                      {"Prefer interfaces for objects:"}
                    </strong>
                    {" They're more extensible and readable"}
                  </li>
                  <li>
                    <strong>
                      {"Use const assertions:"}
                    </strong>
                    <code>
                      {"as const"}
                    </code>
                    {" for literal types"}
                  </li>
                  <li>
                    <strong>
                      {"Export types:"}
                    </strong>
                    {" Share types across files for consistency"}
                  </li>
                  <li>
                    <strong>
                      {"Use discriminated unions:"}
                    </strong>
                    {" Better than type guards for variants"}
                  </li>
                  <li>
                    <strong>
                      {"Don't overuse generics:"}
                    </strong>
                    {" Use them when you need flexibility, not everywhere"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master TypeScript"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program teaches TypeScript from basics to advanced patterns. Build type-safe applications with expert guidance."}
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
                      {"Master JavaScript before TypeScript"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/react" className="related-article-card">
                    <h4>
                      {"React.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Build UIs with React + TypeScript"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/nodejs" className="related-article-card">
                    <h4>
                      {"Node.js"}
                    </h4>
                    {" "}
                    <p>
                      {"Backend TypeScript development"}
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
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="footer-logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Connect"}
              </h4>
              <ul>
                <li>
                  <a href="mailto:contact@codiin.com">
                    {"contact@codiin.com"}
                  </a>
                </li>
                <li>
                  <a href="tel:+918301890158">
                    {"+91 83018 90158"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I want to learn TypeScript."} />
    </>
  );
}
