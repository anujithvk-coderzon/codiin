import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Functional Programming in Python",
  description: "Learn Functional Programming in Python - write cleaner, more maintainable code. Master map, filter, reduce, lambda functions, and functional concepts.",
  keywords: ["Functional programming Python", "lambda functions", "map filter reduce", "pure functions", "immutability", "higher-order functions"],
  alternates: { canonical: "/full-stack-python/articles/functional-programming" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/functional-programming",
    title: "Functional Programming in Python",
    description: "Write cleaner Python code with functional programming techniques.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Functional Programming in Python",
  "description": "Complete guide to functional programming in Python",
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

export default function FullStackPythonFunctionalProgrammingPage() {
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
              <Link href="/full-stack-python">
                {"Full Stack Python"}
              </Link>
              {" / "}
              <span>
                {"Functional Programming"}
              </span>
            </div>
            <h1>
              {"Functional Programming in Python"}
            </h1>
            <p className="article-subtitle">
              {"Write Cleaner, More Maintainable Code"}
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
                  {"What is Functional Programming?"}
                </h2>
                <p>
                  {"Functional programming (FP) is a programming paradigm that treats computation as the evaluation of mathematical functions. It emphasizes immutability, pure functions, and avoiding side effects."}
                </p>
                <p>
                  {"While Python is not a purely functional language, it supports many functional programming concepts that can make your code cleaner and more predictable."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Concepts"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Pure Functions:"}
                    </strong>
                    {" Same input always gives same output, no side effects"}
                  </li>
                  <li>
                    <strong>
                      {"Immutability:"}
                    </strong>
                    {" Don't modify data, create new data instead"}
                  </li>
                  <li>
                    <strong>
                      {"First-Class Functions:"}
                    </strong>
                    {" Functions can be passed around like data"}
                  </li>
                  <li>
                    <strong>
                      {"Higher-Order Functions:"}
                    </strong>
                    {" Functions that take or return functions"}
                  </li>
                  <li>
                    <strong>
                      {"Declarative Style:"}
                    </strong>
                    {" Describe what you want, not how to do it"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Pure Functions"}
                </h2>
                <p>
                  {"A pure function depends only on its inputs and produces no side effects:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Pure function - always returns same result for same input
def add(a, b):
    return a + b

add(2, 3)  # Always 5
add(2, 3)  # Always 5

# Impure function - depends on external state
total = 0

def add_to_total(value):
    global total
    total += value  # Side effect: modifies external state
    return total

# Impure function - has side effects
def save_user(user):
    database.save(user)  # Side effect: I/O operation
    return user

# Making it more functional
def validate_user(user):
    # Pure - just validates, returns result
    if not user.get('email'):
        return {'valid': False, 'error': 'Email required'}
    return {'valid': True, 'user': user}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Lambda Functions"}
                </h2>
                <p>
                  {"Anonymous functions for simple operations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Regular function
def square(x):
    return x ** 2

# Lambda equivalent
square = lambda x: x ** 2

# Common uses
numbers = [1, 2, 3, 4, 5]

# Sort by custom key
users = [{'name': 'Bob', 'age': 30}, {'name': 'Alice', 'age': 25}]
sorted_users = sorted(users, key=lambda u: u['age'])

# Quick calculations
double = lambda x: x * 2
add = lambda a, b: a + b
is_even = lambda x: x % 2 == 0

# Conditional expression
abs_value = lambda x: x if x >= 0 else -x`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Map, Filter, Reduce"}
                </h2>
                <p>
                  {"The three pillars of functional data processing:"}
                </p>
                <div className="code-block">
                  <pre><code>{`from functools import reduce

numbers = [1, 2, 3, 4, 5]

# MAP: Apply function to each element
# Imperative
squared = []
for n in numbers:
    squared.append(n ** 2)

# Functional
squared = list(map(lambda x: x ** 2, numbers))
# Or with list comprehension (Pythonic)
squared = [x ** 2 for x in numbers]
# Result: [1, 4, 9, 16, 25]

# FILTER: Keep elements that match condition
# Imperative
evens = []
for n in numbers:
    if n % 2 == 0:
        evens.append(n)

# Functional
evens = list(filter(lambda x: x % 2 == 0, numbers))
# Or with list comprehension
evens = [x for x in numbers if x % 2 == 0]
# Result: [2, 4]

# REDUCE: Combine all elements into one value
# Imperative
total = 0
for n in numbers:
    total += n

# Functional
total = reduce(lambda acc, x: acc + x, numbers)
# Or use built-in sum()
total = sum(numbers)
# Result: 15

# Chaining operations
result = reduce(
    lambda acc, x: acc + x,
    map(lambda x: x ** 2,
        filter(lambda x: x % 2 == 0, numbers))
)
# Filter evens [2, 4] -> Square [4, 16] -> Sum = 20`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"List Comprehensions"}
                </h2>
                <p>
                  {"Python's preferred way to do functional-style transformations:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Basic comprehension
squares = [x**2 for x in range(10)]

# With condition (filter)
even_squares = [x**2 for x in range(10) if x % 2 == 0]

# Dictionary comprehension
word_lengths = {word: len(word) for word in ['hello', 'world']}

# Set comprehension
unique_lengths = {len(word) for word in ['hello', 'world', 'hi']}

# Nested comprehension
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flattened = [num for row in matrix for num in row]
# [1, 2, 3, 4, 5, 6, 7, 8, 9]

# Generator expression (lazy evaluation)
squares_gen = (x**2 for x in range(1000000))  # Doesn't compute yet
first_ten = [next(squares_gen) for _ in range(10)]  # Computes on demand`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Higher-Order Functions"}
                </h2>
                <p>
                  {"Functions that take functions as arguments or return functions:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Function that takes a function
def apply_twice(func, value):
    return func(func(value))

result = apply_twice(lambda x: x * 2, 3)  # 12

# Function that returns a function
def multiplier(n):
    def multiply(x):
        return x * n
    return multiply

double = multiplier(2)
triple = multiplier(3)

double(5)  # 10
triple(5)  # 15

# Decorator pattern (very common in Python)
def log_calls(func):
    def wrapper(*args, **kwargs):
        print(f"Calling {func.__name__}")
        result = func(*args, **kwargs)
        print(f"Returned {result}")
        return result
    return wrapper

@log_calls
def add(a, b):
    return a + b

add(2, 3)  # Prints: Calling add, Returned 5`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Immutability"}
                </h2>
                <p>
                  {"Prefer creating new data over modifying existing data:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Mutable approach (avoid)
def add_item_mutable(items, item):
    items.append(item)  # Modifies original list
    return items

# Immutable approach (prefer)
def add_item_immutable(items, item):
    return items + [item]  # Creates new list

# With dictionaries
def update_user_mutable(user, key, value):
    user[key] = value  # Modifies original
    return user

def update_user_immutable(user, key, value):
    return {**user, key: value}  # Creates new dict

# Named tuples for immutable data structures
from collections import namedtuple

Point = namedtuple('Point', ['x', 'y'])
p1 = Point(1, 2)
# p1.x = 3  # Error! Immutable

# Create new point with different value
p2 = Point(3, p1.y)

# Dataclasses with frozen=True
from dataclasses import dataclass

@dataclass(frozen=True)
class User:
    name: str
    email: str

user = User('John', 'john@example.com')
# user.name = 'Jane'  # Error! Frozen`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Functional Tools in Python"}
                </h2>
                <div className="code-block">
                  <pre><code>{`from functools import partial, reduce, lru_cache
from itertools import chain, groupby, takewhile, dropwhile
from operator import add, mul, itemgetter

# partial: Pre-fill some arguments
def power(base, exponent):
    return base ** exponent

square = partial(power, exponent=2)
cube = partial(power, exponent=3)

# lru_cache: Memoization (caching)
@lru_cache(maxsize=128)
def fibonacci(n):
    if n < 2:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# itertools examples
numbers = [[1, 2], [3, 4], [5, 6]]
flat = list(chain.from_iterable(numbers))  # [1, 2, 3, 4, 5, 6]

# Group by
users = [
    {'name': 'Alice', 'dept': 'Engineering'},
    {'name': 'Bob', 'dept': 'Sales'},
    {'name': 'Carol', 'dept': 'Engineering'},
]
sorted_users = sorted(users, key=itemgetter('dept'))
for dept, group in groupby(sorted_users, key=itemgetter('dept')):
    print(f"{dept}: {list(group)}")

# operator module for common operations
numbers = [1, 2, 3, 4, 5]
total = reduce(add, numbers)  # Instead of lambda a,b: a+b
product = reduce(mul, numbers)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Practical Example"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Processing a list of orders - functional style
orders = [
    {'id': 1, 'total': 150, 'status': 'completed'},
    {'id': 2, 'total': 50, 'status': 'pending'},
    {'id': 3, 'total': 200, 'status': 'completed'},
    {'id': 4, 'total': 75, 'status': 'completed'},
]

# Get total revenue from completed orders over $100
# Imperative approach
total = 0
for order in orders:
    if order['status'] == 'completed' and order['total'] > 100:
        total += order['total']

# Functional approach
from functools import reduce

total = reduce(
    lambda acc, order: acc + order['total'],
    filter(
        lambda o: o['status'] == 'completed' and o['total'] > 100,
        orders
    ),
    0  # Initial value
)

# Pythonic approach (list comprehension + sum)
total = sum(
    order['total']
    for order in orders
    if order['status'] == 'completed' and order['total'] > 100
)

# Result: 350 (150 + 200)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Functional Programming"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Data transformations:"}
                    </strong>
                    {" Processing lists, filtering, mapping"}
                  </li>
                  <li>
                    <strong>
                      {"Stateless operations:"}
                    </strong>
                    {" Pure calculations without side effects"}
                  </li>
                  <li>
                    <strong>
                      {"Concurrent programming:"}
                    </strong>
                    {" Immutability prevents race conditions"}
                  </li>
                  <li>
                    <strong>
                      {"Testing:"}
                    </strong>
                    {" Pure functions are easy to test"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Balance is key:"}
                  </strong>
                  {" Python is multi-paradigm. Use functional style where it makes code clearer, but don't force it everywhere."}
                </p>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Python with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program covers functional programming and other paradigms. Learn to write clean, maintainable Python code with personalized guidance."}
                </p>
                <Link href="/full-stack-python" className="btn btn-primary">
                  {"Explore Full Stack Python Program"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Articles"}
                </h2>
                <div className="related-articles">
                  <Link href="/full-stack-python/articles/python-fundamentals" className="related-article-card">
                    <h4>
                      {"Python Fundamentals"}
                    </h4>
                    {" "}
                    <p>
                      {"Core Python concepts"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/fastapi" className="related-article-card">
                    <h4>
                      {"FastAPI"}
                    </h4>
                    {" "}
                    <p>
                      {"Modern Python APIs"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/django" className="related-article-card">
                    <h4>
                      {"Django"}
                    </h4>
                    {" "}
                    <p>
                      {"Python web framework"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Python."} />
    </>
  );
}
