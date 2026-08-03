import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Python Fundamentals: Beginner-Friendly Guide",
  description: "Learn Python fundamentals - variables, data types, functions, lists, dictionaries, and OOP basics. Understand why Python is beginner-friendly and when to use it.",
  keywords: ["Python tutorial", "Python basics", "Python fundamentals", "Python OOP", "Python for beginners", "learn Python"],
  alternates: { canonical: "/full-stack-python/articles/python-fundamentals" },
  openGraph: {
    type: "article",
    url: "/full-stack-python/articles/python-fundamentals",
    title: "Python Fundamentals: Your First Step to Python Mastery",
    description: "Master Python basics - variables, data types, functions, and OOP concepts for beginners.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-python", label: "Learn Full Stack Python", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Python Fundamentals: Your First Step to Python Mastery",
  "description": "Complete guide to Python fundamentals for beginners",
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

export default function FullStackPythonPythonFundamentalsPage() {
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
                {"Python Fundamentals"}
              </span>
            </div>
            <h1>
              {"Python Fundamentals"}
            </h1>
            <p className="article-subtitle">
              {"Your First Step to Python Mastery"}
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
                  {"What is Python?"}
                </h2>
                <p>
                  {"Python is a high-level, interpreted programming language known for its simple, English-like syntax. Created by Guido van Rossum in 1991, Python emphasizes code readability and allows programmers to express concepts in fewer lines of code than languages like Java or C++."}
                </p>
                <p>
                  {"Think of Python as the \"friendly giant\" of programming languages - powerful enough to run Instagram and Spotify, yet simple enough for beginners to learn as their first language."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Python?"}
                </h2>
                <p>
                  {"Python has become one of the world's most popular programming languages for several compelling reasons:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Beginner-Friendly:"}
                    </strong>
                    {" Clean syntax that reads like English. No semicolons or curly braces to worry about."}
                  </li>
                  <li>
                    <strong>
                      {"Versatile:"}
                    </strong>
                    {" Use it for web development, data science, automation, AI/ML, scripting, and more."}
                  </li>
                  <li>
                    <strong>
                      {"Huge Community:"}
                    </strong>
                    {" Millions of developers worldwide means endless tutorials, libraries, and support."}
                  </li>
                  <li>
                    <strong>
                      {"Rich Ecosystem:"}
                    </strong>
                    {" Over 400,000 packages available for any task imaginable."}
                  </li>
                  <li>
                    <strong>
                      {"Career Opportunities:"}
                    </strong>
                    {" High demand across tech, finance, healthcare, and research sectors."}
                  </li>
                  <li>
                    <strong>
                      {"Fast Development:"}
                    </strong>
                    {" Build prototypes and MVPs quickly with less code."}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Python"}
                </h2>
                <p>
                  {"Python excels in these scenarios:"}
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Web Applications:"}
                    </strong>
                    {" Django and Flask make web development fast and enjoyable"}
                  </li>
                  <li>
                    <strong>
                      {"Data Analysis:"}
                    </strong>
                    {" Pandas and NumPy are industry standards for data work"}
                  </li>
                  <li>
                    <strong>
                      {"Machine Learning:"}
                    </strong>
                    {" TensorFlow, PyTorch, and scikit-learn dominate AI/ML"}
                  </li>
                  <li>
                    <strong>
                      {"Automation:"}
                    </strong>
                    {" Perfect for scripting repetitive tasks"}
                  </li>
                  <li>
                    <strong>
                      {"API Development:"}
                    </strong>
                    {" FastAPI and Flask create high-performance APIs"}
                  </li>
                  <li>
                    <strong>
                      {"Prototyping:"}
                    </strong>
                    {" Quick to build, test, and iterate on ideas"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"When NOT to use Python:"}
                  </strong>
                  {" Real-time systems, mobile app development (native), or applications requiring maximum performance (use C++ or Rust instead)."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Variables and Data Types"}
                </h2>
                <p>
                  {"In Python, variables are like labeled boxes that store values. You don't need to declare the type - Python figures it out automatically!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Variables - no type declaration needed!
name = "Alice"           # String (text)
age = 25                 # Integer (whole number)
height = 5.6             # Float (decimal number)
is_student = True        # Boolean (True/False)

# Python is dynamically typed
x = 10          # x is an integer
x = "hello"     # now x is a string (no error!)

# Multiple assignment
a, b, c = 1, 2, 3
x = y = z = 0   # all get the same value

# Basic data types
text = "Hello World"        # str
number = 42                 # int
decimal = 3.14             # float
is_valid = True            # bool
nothing = None             # NoneType (similar to null)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Strings: Working with Text"}
                </h2>
                <p>
                  {"Strings are sequences of characters. Python makes string manipulation intuitive and powerful."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Creating strings
single = 'Hello'
double = "World"
multi_line = """This is
a multi-line
string"""

# String operations
greeting = "Hello" + " " + "World"  # Concatenation
repeated = "Ha" * 3                 # "HaHaHa"

# String methods
text = "  Python Programming  "
print(text.lower())         # "  python programming  "
print(text.upper())         # "  PYTHON PROGRAMMING  "
print(text.strip())         # "Python Programming"
print(text.replace("Python", "Java"))  # "  Java Programming  "

# String formatting (modern way)
name = "Alice"
age = 25
message = f"My name is {name} and I'm {age} years old"
# Output: "My name is Alice and I'm 25 years old"

# String slicing
word = "Python"
print(word[0])      # "P" (first character)
print(word[-1])     # "n" (last character)
print(word[0:3])    # "Pyt" (characters 0 to 2)
print(word[:3])     # "Pyt" (from start to 2)
print(word[3:])     # "hon" (from 3 to end)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Lists: Ordered Collections"}
                </h2>
                <p>
                  {"Lists are like containers that hold multiple items in order. Think of them as shopping lists - ordered and changeable."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Creating lists
fruits = ["apple", "banana", "orange"]
numbers = [1, 2, 3, 4, 5]
mixed = [1, "hello", True, 3.14]  # Can mix types!

# Accessing items
print(fruits[0])     # "apple"
print(fruits[-1])    # "orange" (last item)

# List methods
fruits.append("grape")          # Add to end
fruits.insert(0, "mango")      # Insert at position
fruits.remove("banana")         # Remove specific item
last_fruit = fruits.pop()      # Remove and return last item

# List operations
combined = fruits + numbers     # Combine lists
print(len(fruits))             # Length of list
print("apple" in fruits)       # Check if item exists (True)

# List slicing
numbers = [0, 1, 2, 3, 4, 5]
print(numbers[1:4])   # [1, 2, 3]
print(numbers[::2])   # [0, 2, 4] (every 2nd item)

# List comprehension (elegant way to create lists)
squares = [x**2 for x in range(5)]
# [0, 1, 4, 9, 16]

even_numbers = [x for x in range(10) if x % 2 == 0]
# [0, 2, 4, 6, 8]`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dictionaries: Key-Value Pairs"}
                </h2>
                <p>
                  {"Dictionaries store data as key-value pairs, like a real dictionary stores words and definitions. Perfect for structured data!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Creating dictionaries
person = {
    "name": "Alice",
    "age": 25,
    "city": "New York",
    "is_student": True
}

# Accessing values
print(person["name"])           # "Alice"
print(person.get("age"))        # 25
print(person.get("country", "USA"))  # "USA" (default if key not found)

# Modifying dictionaries
person["age"] = 26              # Update existing
person["email"] = "alice@example.com"  # Add new key

# Dictionary methods
print(person.keys())            # All keys
print(person.values())          # All values
print(person.items())           # Key-value pairs

# Looping through dictionaries
for key, value in person.items():
    print(f"{key}: {value}")

# Nested dictionaries (real-world example)
users = {
    "user1": {"name": "Alice", "age": 25},
    "user2": {"name": "Bob", "age": 30}
}
print(users["user1"]["name"])  # "Alice"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Functions: Reusable Code Blocks"}
                </h2>
                <p>
                  {"Functions are like recipes - you define them once and use them many times. They help organize code and avoid repetition."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Basic function
def greet():
    print("Hello, World!")

greet()  # Call the function

# Function with parameters
def greet_person(name):
    print(f"Hello, {name}!")

greet_person("Alice")  # "Hello, Alice!"

# Function with return value
def add(a, b):
    return a + b

result = add(5, 3)  # result = 8

# Default parameters
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"

print(greet("Alice"))              # "Hello, Alice!"
print(greet("Bob", "Hi"))          # "Hi, Bob!"

# Multiple return values
def calculate(a, b):
    sum_val = a + b
    diff_val = a - b
    return sum_val, diff_val

total, difference = calculate(10, 5)
# total = 15, difference = 5

# Lambda functions (one-line functions)
square = lambda x: x**2
print(square(5))  # 25

# Real-world example
def calculate_discount(price, discount_percent=10):
    """Calculate final price after discount"""
    discount = price * (discount_percent / 100)
    final_price = price - discount
    return final_price

print(calculate_discount(100))      # 90.0
print(calculate_discount(100, 20))  # 80.0`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Control Flow: If, For, While"}
                </h2>
                <p>
                  {"Control flow determines which code runs and when. It's how programs make decisions and repeat tasks."}
                </p>
                <div className="code-block">
                  <pre><code>{`# IF statements
age = 18

if age >= 18:
    print("You can vote!")
elif age >= 16:
    print("You can get a driver's license!")
else:
    print("You're still young!")

# FOR loops (iterate over sequences)
fruits = ["apple", "banana", "orange"]

for fruit in fruits:
    print(f"I like {fruit}")

# Loop with range
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# WHILE loops (continue until condition is False)
count = 0
while count < 5:
    print(count)
    count += 1

# Break and continue
for i in range(10):
    if i == 3:
        continue  # Skip this iteration
    if i == 7:
        break     # Exit the loop
    print(i)

# Real-world example: validate user input
while True:
    user_input = input("Enter a positive number: ")
    if user_input.isdigit() and int(user_input) > 0:
        number = int(user_input)
        break
    else:
        print("Invalid input. Try again.")`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Object-Oriented Programming (OOP) Basics"}
                </h2>
                <p>
                  {"OOP is like creating blueprints (classes) to build objects. Think of a class as a cookie cutter and objects as the cookies!"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Define a class (blueprint)
class Dog:
    # Constructor (runs when object is created)
    def __init__(self, name, age):
        self.name = name    # Instance variable
        self.age = age

    # Method (function inside a class)
    def bark(self):
        return f"{self.name} says Woof!"

    def get_age_in_dog_years(self):
        return self.age * 7

# Create objects (instances of the class)
my_dog = Dog("Buddy", 3)
your_dog = Dog("Max", 5)

print(my_dog.bark())                    # "Buddy says Woof!"
print(my_dog.get_age_in_dog_years())   # 21
print(your_dog.name)                    # "Max"

# Real-world example: Bank Account
class BankAccount:
    def __init__(self, owner, balance=0):
        self.owner = owner
        self.balance = balance

    def deposit(self, amount):
        self.balance += amount
        return f"Deposited \${amount}. New balance: \${self.balance}"

    def withdraw(self, amount):
        if amount > self.balance:
            return "Insufficient funds!"
        self.balance -= amount
        return f"Withdrew \${amount}. New balance: \${self.balance}"

    def get_balance(self):
        return f"{self.owner}'s balance: \${self.balance}"

# Using the class
account = BankAccount("Alice", 1000)
print(account.deposit(500))     # "Deposited $500. New balance: $1500"
print(account.withdraw(200))    # "Withdrew $200. New balance: $1300"
print(account.get_balance())    # "Alice's balance: $1300"

# Inheritance (creating classes based on other classes)
class SavingsAccount(BankAccount):
    def __init__(self, owner, balance=0, interest_rate=0.02):
        super().__init__(owner, balance)
        self.interest_rate = interest_rate

    def add_interest(self):
        interest = self.balance * self.interest_rate
        self.balance += interest
        return f"Added interest: \${interest}"

savings = SavingsAccount("Bob", 1000)
print(savings.add_interest())  # "Added interest: $20.0"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Error Handling: Try/Except"}
                </h2>
                <p>
                  {"Errors happen! Good code anticipates problems and handles them gracefully."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Basic error handling
try:
    number = int(input("Enter a number: "))
    result = 10 / number
    print(f"Result: {result}")
except ValueError:
    print("That's not a valid number!")
except ZeroDivisionError:
    print("Cannot divide by zero!")
except Exception as e:
    print(f"An error occurred: {e}")
finally:
    print("This always runs, error or not")

# Real-world example: file reading
def read_file(filename):
    try:
        with open(filename, 'r') as file:
            content = file.read()
            return content
    except FileNotFoundError:
        return f"Error: {filename} not found"
    except PermissionError:
        return "Error: No permission to read file"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Working with Files"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# Writing to a file
with open('data.txt', 'w') as file:
    file.write('Hello, World!\\n')
    file.write('Python is awesome!')

# Reading from a file
with open('data.txt', 'r') as file:
    content = file.read()
    print(content)

# Reading line by line
with open('data.txt', 'r') as file:
    for line in file:
        print(line.strip())

# Appending to a file
with open('data.txt', 'a') as file:
    file.write('\\nNew line added!')

# Working with JSON (common for APIs)
import json

# Write JSON
data = {"name": "Alice", "age": 25, "city": "NYC"}
with open('data.json', 'w') as file:
    json.dump(data, file, indent=2)

# Read JSON
with open('data.json', 'r') as file:
    loaded_data = json.load(file)
    print(loaded_data["name"])  # "Alice"`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices for Python Beginners"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use meaningful variable names:"}
                    </strong>
                    <code>
                      {"user_age"}
                    </code>
                    {" instead of "}
                    <code>
                      {"x"}
                    </code>
                  </li>
                  <li>
                    <strong>
                      {"Follow PEP 8:"}
                    </strong>
                    {" Python's style guide (use 4 spaces for indentation)"}
                  </li>
                  <li>
                    <strong>
                      {"Write docstrings:"}
                    </strong>
                    {" Document your functions with triple-quoted strings"}
                  </li>
                  <li>
                    <strong>
                      {"Don't repeat yourself (DRY):"}
                    </strong>
                    {" Use functions to avoid code duplication"}
                  </li>
                  <li>
                    <strong>
                      {"Use list comprehensions:"}
                    </strong>
                    {" More Pythonic than traditional loops for simple operations"}
                  </li>
                  <li>
                    <strong>
                      {"Handle errors properly:"}
                    </strong>
                    {" Use try/except blocks for expected errors"}
                  </li>
                  <li>
                    <strong>
                      {"Use "}
                      <code>
                        {"with"}
                      </code>
                      {" for files:"}
                    </strong>
                    {" Automatically closes files even if errors occur"}
                  </li>
                  <li>
                    <strong>
                      {"Keep functions small:"}
                    </strong>
                    {" Each function should do one thing well"}
                  </li>
                  <li>
                    <strong>
                      {"Comment wisely:"}
                    </strong>
                    {" Explain WHY, not WHAT (code should be self-explanatory)"}
                  </li>
                  <li>
                    <strong>
                      {"Test your code:"}
                    </strong>
                    {" Try different inputs, including edge cases"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Beginner Mistakes to Avoid"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Confusing "}
                      <code>
                        {"="}
                      </code>
                      {" and "}
                      <code>
                        {"=="}
                      </code>
                      {":"}
                    </strong>
                    <code>
                      {"="}
                    </code>
                    {" assigns, "}
                    <code>
                      {"=="}
                    </code>
                    {" compares"}
                  </li>
                  <li>
                    <strong>
                      {"Forgetting colons:"}
                    </strong>
                    {" if, for, while, def, class all need colons"}
                  </li>
                  <li>
                    <strong>
                      {"Inconsistent indentation:"}
                    </strong>
                    {" Python uses indentation for code blocks"}
                  </li>
                  <li>
                    <strong>
                      {"Modifying lists while iterating:"}
                    </strong>
                    {" Can cause unexpected behavior"}
                  </li>
                  <li>
                    <strong>
                      {"Not using "}
                      <code>
                        {".copy()"}
                      </code>
                      {":"}
                    </strong>
                    <code>
                      {"new_list = old_list"}
                    </code>
                    {" doesn't create a copy!"}
                  </li>
                  <li>
                    <strong>
                      {"Global variables overuse:"}
                    </strong>
                    {" Pass parameters instead"}
                  </li>
                  <li>
                    <strong>
                      {"Not closing files:"}
                    </strong>
                    {" Use "}
                    <code>
                      {"with"}
                    </code>
                    {" statement to auto-close"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master Python with Expert Mentorship"}
                </h2>
                <p>
                  {"Our Full Stack Python program takes you from Python fundamentals to building production-ready web applications. Learn Django, FastAPI, and modern best practices with personalized 1:1 mentorship."}
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
                  <Link href="/full-stack-python/articles/django" className="related-article-card">
                    <h4>
                      {"Django Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Build full-featured web apps"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/flask" className="related-article-card">
                    <h4>
                      {"Flask Micro-Framework"}
                    </h4>
                    {" "}
                    <p>
                      {"Lightweight web development"}
                    </p>
                  </Link>
                  <Link href="/full-stack-python/articles/virtual-environments" className="related-article-card">
                    <h4>
                      {"Virtual Environments"}
                    </h4>
                    {" "}
                    <p>
                      {"Manage Python dependencies"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn Python fundamentals."} />
    </>
  );
}
