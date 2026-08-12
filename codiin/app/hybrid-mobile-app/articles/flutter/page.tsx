import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Flutter: Beautiful Native Apps from Single Codebase",
  description: "Learn Flutter - Google's UI toolkit for building beautiful, natively compiled applications. Master widgets, Dart, state management, and Material Design.",
  keywords: ["Flutter tutorial", "mobile app development", "Dart programming", "widgets", "cross-platform apps", "Material Design"],
  alternates: { canonical: "/hybrid-mobile-app/articles/flutter" },
  openGraph: {
    type: "article",
    url: "/hybrid-mobile-app/articles/flutter",
    title: "Flutter: Beautiful Native Apps from Single Codebase",
    description: "Master Flutter for creating stunning cross-platform mobile applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/hybrid-mobile-app", label: "Learn Hybrid Mobile", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Flutter: Beautiful Native Apps from Single Codebase",
  "description": "Complete guide to Flutter for mobile app development",
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

export default function HybridMobileAppFlutterPage() {
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
              <Link href="/hybrid-mobile-app">
                {"Hybrid Mobile App"}
              </Link>
              {" / "}
              <span>
                {"Flutter"}
              </span>
            </div>
            <h1>
              {"Flutter"}
            </h1>
            <p className="article-subtitle">
              {"Beautiful Native Apps from Single Codebase"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"16 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is Flutter?"}
                </h2>
                <p>
                  {"Flutter is Google's open-source framework for building beautiful, natively compiled applications for mobile, web, and desktop from a single codebase. Think of it as a magical paintbrush that lets you draw once and create masterpieces on multiple canvases - iOS, Android, web, Windows, Mac, and Linux."}
                </p>
                <p>
                  {"Unlike other frameworks that translate your code to native components, Flutter draws everything itself using its own rendering engine. It's like building with your own custom LEGO factory instead of using someone else's blocks - you have complete control over how everything looks and behaves."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Choose Flutter?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Stunning UI:"}
                    </strong>
                    {" Pixel-perfect designs that look identical on all devices"}
                  </li>
                  <li>
                    <strong>
                      {"Fast Performance:"}
                    </strong>
                    {" Compiles to native code, runs at 60fps consistently"}
                  </li>
                  <li>
                    <strong>
                      {"Hot Reload:"}
                    </strong>
                    {" See changes instantly (in milliseconds) without losing app state"}
                  </li>
                  <li>
                    <strong>
                      {"Single Codebase:"}
                    </strong>
                    {" Write once, deploy to iOS, Android, web, desktop"}
                  </li>
                  <li>
                    <strong>
                      {"Rich Widgets:"}
                    </strong>
                    {" Thousands of customizable, beautiful pre-built components"}
                  </li>
                  <li>
                    <strong>
                      {"Growing Ecosystem:"}
                    </strong>
                    {" Strong backing from Google, active community"}
                  </li>
                  <li>
                    <strong>
                      {"Declarative UI:"}
                    </strong>
                    {" Easy to understand and maintain code structure"}
                  </li>
                  <li>
                    <strong>
                      {"Great Documentation:"}
                    </strong>
                    {" Comprehensive guides and examples"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Choose Flutter?"}
                </h2>
                <p>
                  <strong>
                    {"Perfect For:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Apps requiring beautiful, custom UI designs"}
                  </li>
                  <li>
                    {"Startups needing fast MVP development across platforms"}
                  </li>
                  <li>
                    {"Apps with lots of animations and complex UI"}
                  </li>
                  <li>
                    {"When you need web + mobile from same code"}
                  </li>
                  <li>
                    {"E-commerce apps with rich product displays"}
                  </li>
                  <li>
                    {"Apps requiring consistent brand experience everywhere"}
                  </li>
                  <li>
                    {"When performance and smooth animations are critical"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Consider React Native Instead When:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Your team already has strong JavaScript/React expertise"}
                  </li>
                  <li>
                    {"You need access to more third-party native libraries"}
                  </li>
                  <li>
                    {"You want to share code with existing React web apps"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Flutter vs React Native"}
                </h2>
                <div className="table-wrap">
                  <table style={{ "width": "100%", "borderCollapse": "collapse", "margin": "20px 0" }}>
                    <tr style={{ "background": "#f8fafc" }}>
                      <th style={{ "padding": "12px", "textAlign": "left", "border": "1px solid #e2e8f0" }}>
                        {"Aspect"}
                      </th>
                      <th style={{ "padding": "12px", "textAlign": "left", "border": "1px solid #e2e8f0" }}>
                        {"Flutter"}
                      </th>
                      <th style={{ "padding": "12px", "textAlign": "left", "border": "1px solid #e2e8f0" }}>
                        {"React Native"}
                      </th>
                    </tr>
                    <tr>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Language"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Dart (easier to learn)"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"JavaScript (more popular)"}
                      </td>
                    </tr>
                    <tr style={{ "background": "#f8fafc" }}>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Performance"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Slightly better (native code)"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Very good (native components)"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"UI Consistency"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Perfect (draws own UI)"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Good (uses native widgets)"}
                      </td>
                    </tr>
                    <tr style={{ "background": "#f8fafc" }}>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Community"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Growing rapidly"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Larger, more mature"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Learning Curve"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Moderate (new language)"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Easy (if you know JS)"}
                      </td>
                    </tr>
                    <tr style={{ "background": "#f8fafc" }}>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Hot Reload"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Faster, preserves state"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Good"}
                      </td>
                    </tr>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Dart Basics"}
                </h2>
                <p>
                  {"Dart is the programming language used by Flutter. It's designed to be easy to learn, especially if you know JavaScript, Java, or C#. Think of Dart as a modern, clean language built specifically for building user interfaces."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Variables and Types
void main() {
  // Dart can infer types (var) or you can be explicit
  var name = 'John';              // String (inferred)
  String city = 'New York';       // String (explicit)
  int age = 25;                   // Integer
  double price = 99.99;           // Decimal number
  bool isActive = true;           // Boolean

  // Lists (Arrays)
  List<String> fruits = ['Apple', 'Banana', 'Orange'];
  fruits.add('Mango');

  // Maps (Objects/Dictionaries)
  Map<String, dynamic> user = {
    'name': 'Alice',
    'age': 30,
    'email': 'alice@example.com'
  };

  // Null safety (prevent crashes)
  String? nullableName;  // Can be null
  String definitelyName = 'Bob';  // Cannot be null

  print('Hello, $name!');  // String interpolation
}

// Functions
int addNumbers(int a, int b) {
  return a + b;
}

// Arrow functions (short syntax)
int multiply(int a, int b) => a * b;

// Classes
class Person {
  String name;
  int age;

  // Constructor
  Person(this.name, this.age);

  // Method
  void sayHello() {
    print('Hello, I am $name, $age years old');
  }
}

// Using the class
var person = Person('Emma', 28);
person.sayHello();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Understanding Widgets"}
                </h2>
                <p>
                  {"In Flutter, everything is a widget. Widgets are like building blocks - text, buttons, layouts, colors, everything. Think of widgets as LEGO pieces that snap together to build your app's interface."}
                </p>
                <div className="code-block">
                  <pre><code>{`import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('My First Flutter App'),
          backgroundColor: Colors.blue,
        ),
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              // Text widget
              Text(
                'Welcome to Flutter!',
                style: TextStyle(
                  fontSize: 24,
                  fontWeight: FontWeight.bold,
                  color: Colors.blue,
                ),
              ),

              SizedBox(height: 20),  // Spacing

              // Image widget
              Image.network(
                'https://flutter.dev/images/flutter-logo.png',
                width: 100,
                height: 100,
              ),

              SizedBox(height: 20),

              // Button widget
              ElevatedButton(
                onPressed: () {
                  print('Button clicked!');
                },
                child: Text('Click Me'),
                style: ElevatedButton.styleFrom(
                  backgroundColor: Colors.green,
                  padding: EdgeInsets.symmetric(
                    horizontal: 30,
                    vertical: 15,
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Common Widget Types:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Layout Widgets:"}
                    </strong>
                    {" Container, Column, Row, Stack (organize other widgets)"}
                  </li>
                  <li>
                    <strong>
                      {"Display Widgets:"}
                    </strong>
                    {" Text, Image, Icon (show content)"}
                  </li>
                  <li>
                    <strong>
                      {"Interactive Widgets:"}
                    </strong>
                    {" Button, TextField, Checkbox (user input)"}
                  </li>
                  <li>
                    <strong>
                      {"Scrolling Widgets:"}
                    </strong>
                    {" ListView, GridView (long content)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"State Management"}
                </h2>
                <p>
                  {"State is data that can change over time. When state changes, Flutter rebuilds the widget to show the new data. Think of it like a light switch - the switch remembers if it's ON or OFF (state) and shows the appropriate light."}
                </p>
                <div className="code-block">
                  <pre><code>{`import 'package:flutter/material.dart';

// StatefulWidget = Widget that can change
class CounterApp extends StatefulWidget {
  @override
  _CounterAppState createState() => _CounterAppState();
}

class _CounterAppState extends State<CounterApp> {
  // This is the state - it can change
  int counter = 0;

  // Function to update state
  void incrementCounter() {
    setState(() {
      // setState tells Flutter to rebuild the widget
      counter++;
    });
  }

  void resetCounter() {
    setState(() {
      counter = 0;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Counter App')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              'You clicked the button:',
              style: TextStyle(fontSize: 20),
            ),
            Text(
              '$counter',
              style: TextStyle(
                fontSize: 48,
                fontWeight: FontWeight.bold,
                color: Colors.blue,
              ),
            ),
            SizedBox(height: 20),
            Row(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                ElevatedButton(
                  onPressed: incrementCounter,
                  child: Text('Add One'),
                ),
                SizedBox(width: 10),
                ElevatedButton(
                  onPressed: resetCounter,
                  child: Text('Reset'),
                  style: ElevatedButton.styleFrom(
                    backgroundColor: Colors.red,
                  ),
                ),
              ],
            ),
          ],
        ),
      ),
    );
  }
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"State Management Options:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"setState:"}
                    </strong>
                    {" Simple, for local widget state (perfect for beginners)"}
                  </li>
                  <li>
                    <strong>
                      {"Provider:"}
                    </strong>
                    {" Share state across multiple widgets (recommended by Flutter team)"}
                  </li>
                  <li>
                    <strong>
                      {"Riverpod:"}
                    </strong>
                    {" Modern, type-safe state management"}
                  </li>
                  <li>
                    <strong>
                      {"Bloc:"}
                    </strong>
                    {" Pattern for complex apps with predictable state"}
                  </li>
                  <li>
                    <strong>
                      {"GetX:"}
                    </strong>
                    {" Simple and powerful, includes routing and dependency injection"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Material Design"}
                </h2>
                <p>
                  {"Material Design is Google's design system that makes apps look modern and beautiful. Flutter has built-in Material Design widgets that follow these guidelines automatically."}
                </p>
                <div className="code-block">
                  <pre><code>{`import 'package:flutter/material.dart';

class MaterialDesignExample extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      // Theme defines colors and styles for entire app
      theme: ThemeData(
        primarySwatch: Colors.indigo,
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.indigo),
        useMaterial3: true,  // Latest Material Design
      ),

      home: Scaffold(
        // AppBar at top
        appBar: AppBar(
          title: Text('Material Design'),
          actions: [
            IconButton(
              icon: Icon(Icons.search),
              onPressed: () {},
            ),
            IconButton(
              icon: Icon(Icons.more_vert),
              onPressed: () {},
            ),
          ],
        ),

        // Main content
        body: ListView(
          padding: EdgeInsets.all(16),
          children: [
            // Card with elevation (shadow)
            Card(
              elevation: 4,
              child: Padding(
                padding: EdgeInsets.all(16),
                child: Column(
                  crossAxisAlignment: CrossAxisAlignment.start,
                  children: [
                    Text(
                      'Beautiful Card',
                      style: Theme.of(context).textTheme.headlineSmall,
                    ),
                    SizedBox(height: 8),
                    Text(
                      'Material Design makes UI consistent and beautiful',
                      style: Theme.of(context).textTheme.bodyMedium,
                    ),
                  ],
                ),
              ),
            ),

            SizedBox(height: 16),

            // Chips
            Wrap(
              spacing: 8,
              children: [
                Chip(
                  label: Text('Flutter'),
                  avatar: Icon(Icons.code, size: 18),
                ),
                Chip(
                  label: Text('Material'),
                  avatar: Icon(Icons.design_services, size: 18),
                ),
              ],
            ),
          ],
        ),

        // Floating Action Button
        floatingActionButton: FloatingActionButton(
          onPressed: () {},
          child: Icon(Icons.add),
        ),

        // Bottom Navigation Bar
        bottomNavigationBar: BottomNavigationBar(
          items: [
            BottomNavigationBarItem(
              icon: Icon(Icons.home),
              label: 'Home',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.search),
              label: 'Search',
            ),
            BottomNavigationBarItem(
              icon: Icon(Icons.person),
              label: 'Profile',
            ),
          ],
        ),
      ),
    );
  }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Navigation and Routing"}
                </h2>
                <p>
                  {"Navigation lets users move between different screens in your app. Think of it like flipping pages in a book or switching channels on TV."}
                </p>
                <div className="code-block">
                  <pre><code>{`import 'package:flutter/material.dart';

// First Screen
class HomeScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Home')),
      body: Center(
        child: ElevatedButton(
          // Navigate to details screen
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(
                builder: (context) => DetailsScreen(
                  title: 'Flutter is Awesome!',
                ),
              ),
            );
          },
          child: Text('Go to Details'),
        ),
      ),
    );
  }
}

// Second Screen
class DetailsScreen extends StatelessWidget {
  final String title;

  DetailsScreen({required this.title});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Details')),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text(
              title,
              style: TextStyle(fontSize: 24),
            ),
            SizedBox(height: 20),
            ElevatedButton(
              // Go back to previous screen
              onPressed: () {
                Navigator.pop(context);
              },
              child: Text('Go Back'),
            ),
          ],
        ),
      ),
    );
  }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Forms and User Input"}
                </h2>
                <p>
                  {"Forms are how users input data into your app. Flutter makes form validation and data collection easy."}
                </p>
                <div className="code-block">
                  <pre><code>{`class LoginForm extends StatefulWidget {
  @override
  _LoginFormState createState() => _LoginFormState();
}

class _LoginFormState extends State<LoginForm> {
  final _formKey = GlobalKey<FormState>();
  String email = '';
  String password = '';

  void _submitForm() {
    // Validate form
    if (_formKey.currentState!.validate()) {
      _formKey.currentState!.save();
      print('Email: $email, Password: $password');
      // Send to backend
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Login')),
      body: Padding(
        padding: EdgeInsets.all(16),
        child: Form(
          key: _formKey,
          child: Column(
            children: [
              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Email',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.email),
                ),
                keyboardType: TextInputType.emailAddress,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter email';
                  }
                  if (!value.contains('@')) {
                    return 'Please enter valid email';
                  }
                  return null;
                },
                onSaved: (value) => email = value!,
              ),

              SizedBox(height: 16),

              TextFormField(
                decoration: InputDecoration(
                  labelText: 'Password',
                  border: OutlineInputBorder(),
                  prefixIcon: Icon(Icons.lock),
                ),
                obscureText: true,
                validator: (value) {
                  if (value == null || value.isEmpty) {
                    return 'Please enter password';
                  }
                  if (value.length < 6) {
                    return 'Password must be at least 6 characters';
                  }
                  return null;
                },
                onSaved: (value) => password = value!,
              ),

              SizedBox(height: 24),

              ElevatedButton(
                onPressed: _submitForm,
                child: Text('Login'),
                style: ElevatedButton.styleFrom(
                  minimumSize: Size(double.infinity, 50),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Fetching Data from APIs"}
                </h2>
                <p>
                  {"Most apps need to get data from the internet. Flutter uses the http package for this:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import 'package:http/http.dart' as http;
import 'dart:convert';

class UserList extends StatefulWidget {
  @override
  _UserListState createState() => _UserListState();
}

class _UserListState extends State<UserList> {
  List users = [];
  bool isLoading = true;

  @override
  void initState() {
    super.initState();
    fetchUsers();
  }

  Future<void> fetchUsers() async {
    try {
      final response = await http.get(
        Uri.parse('https://api.example.com/users'),
      );

      if (response.statusCode == 200) {
        setState(() {
          users = json.decode(response.body);
          isLoading = false;
        });
      }
    } catch (e) {
      print('Error: $e');
      setState(() => isLoading = false);
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: Text('Users')),
      body: isLoading
        ? Center(child: CircularProgressIndicator())
        : ListView.builder(
            itemCount: users.length,
            itemBuilder: (context, index) {
              final user = users[index];
              return ListTile(
                leading: CircleAvatar(
                  child: Text(user['name'][0]),
                ),
                title: Text(user['name']),
                subtitle: Text(user['email']),
              );
            },
          ),
    );
  }
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
                      {"Use const Widgets:"}
                    </strong>
                    {" Makes app faster by reusing widgets"}
                  </li>
                  <li>
                    <strong>
                      {"Extract Widgets:"}
                    </strong>
                    {" Break large widgets into smaller, reusable pieces"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Loading States:"}
                    </strong>
                    {" Always show progress indicators during data fetching"}
                  </li>
                  <li>
                    <strong>
                      {"Proper Error Handling:"}
                    </strong>
                    {" Use try-catch for async operations"}
                  </li>
                  <li>
                    <strong>
                      {"Follow Flutter Style Guide:"}
                    </strong>
                    {" Use linting for clean code"}
                  </li>
                  <li>
                    <strong>
                      {"Use ListView.builder:"}
                    </strong>
                    {" For long lists, not Column with lots of children"}
                  </li>
                  <li>
                    <strong>
                      {"Test on Real Devices:"}
                    </strong>
                    {" Emulators don't show real performance"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize Images:"}
                    </strong>
                    {" Use cached network images, proper sizing"}
                  </li>
                  <li>
                    <strong>
                      {"Use Keys Wisely:"}
                    </strong>
                    {" For lists that change, use unique keys"}
                  </li>
                  <li>
                    <strong>
                      {"Keep Build Methods Pure:"}
                    </strong>
                    {" No side effects in build methods"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <p>
                  {"Create your first Flutter app in minutes:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install Flutter SDK (download from flutter.dev)
# Add Flutter to PATH

# Check installation
flutter doctor

# Create new project
flutter create my_first_app

# Navigate to project
cd my_first_app

# Run on connected device or emulator
flutter run

# For web
flutter run -d chrome

# Hot reload: Press 'r' in terminal
# Hot restart: Press 'R' in terminal`}</code></pre>
                </div>
              </section>
              <section className="cta-section">
                <h2>
                  {"Ready to Build Beautiful Apps?"}
                </h2>
                <p>
                  {"Master Flutter and create stunning cross-platform applications"}
                </p>
                <Link href="/hybrid-mobile-app" className="btn btn-primary btn-lg">
                  {"Explore Hybrid Mobile App Course"}
                </Link>
              </section>
              <section className="article-section">
                <h2>
                  {"Related Topics"}
                </h2>
                <div className="related-articles">
                  <Link href="/hybrid-mobile-app/articles/react-native" className="related-article-card">
                    <h3>
                      {"React Native"}
                    </h3>
                    {" "}
                    <p>
                      {"Build mobile apps with JavaScript"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/mobile-ui-ux" className="related-article-card">
                    <h3>
                      {"Mobile UI/UX"}
                    </h3>
                    {" "}
                    <p>
                      {"Design principles for mobile apps"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/state-management" className="related-article-card">
                    <h3>
                      {"State Management"}
                    </h3>
                    {" "}
                    <p>
                      {"Provider, Riverpod, Bloc, and more"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/firebase" className="related-article-card">
                    <h3>
                      {"Firebase"}
                    </h3>
                    {" "}
                    <p>
                      {"Backend services for mobile apps"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN, I'm interested in learning more about your programs"} />
    </>
  );
}
