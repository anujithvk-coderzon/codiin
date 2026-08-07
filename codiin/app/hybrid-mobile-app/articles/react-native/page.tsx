import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "React Native: Build Native Apps with JavaScript",
  description: "Learn React Native - Build native mobile apps using JavaScript and React. Master components, state management, navigation, and native modules.",
  keywords: ["React Native tutorial", "mobile app development", "JavaScript mobile", "React components", "cross-platform apps"],
  alternates: { canonical: "/hybrid-mobile-app/articles/react-native" },
  openGraph: {
    type: "article",
    url: "/hybrid-mobile-app/articles/react-native",
    title: "React Native: Build Native Apps with JavaScript",
    description: "Master React Native for creating cross-platform mobile applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/hybrid-mobile-app", label: "Learn Hybrid Mobile", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "React Native: Build Native Apps with JavaScript",
  "description": "Complete guide to React Native for mobile app development",
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

export default function HybridMobileAppReactNativePage() {
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
                {"React Native"}
              </span>
            </div>
            <h1>
              {"React Native"}
            </h1>
            <p className="article-subtitle">
              {"Build Native Apps with JavaScript"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"15 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What is React Native?"}
                </h2>
                <p>
                  {"React Native is a framework created by Facebook that lets you build mobile apps for iOS and Android using JavaScript and React. Think of it like writing a letter once and having it automatically translated into different languages - you write your code once, and it runs on both iPhone and Android devices."}
                </p>
                <p>
                  {"Unlike traditional hybrid apps that run inside a web browser, React Native creates real native components. It's like building with LEGO blocks - you use the same building blocks (JavaScript code) to create actual native mobile interfaces that look and feel like apps built with Swift or Kotlin."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Choose React Native?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Write Once, Run Everywhere:"}
                    </strong>
                    {" One codebase for iOS and Android saves time and effort"}
                  </li>
                  <li>
                    <strong>
                      {"Real Native Performance:"}
                    </strong>
                    {" Uses actual native components, not web views"}
                  </li>
                  <li>
                    <strong>
                      {"Hot Reloading:"}
                    </strong>
                    {" See changes instantly without rebuilding the entire app"}
                  </li>
                  <li>
                    <strong>
                      {"Huge Community:"}
                    </strong>
                    {" Thousands of libraries and active developer support"}
                  </li>
                  <li>
                    <strong>
                      {"JavaScript Familiarity:"}
                    </strong>
                    {" Use your existing JavaScript/React skills"}
                  </li>
                  <li>
                    <strong>
                      {"Cost Effective:"}
                    </strong>
                    {" One team can build both iOS and Android apps"}
                  </li>
                  <li>
                    <strong>
                      {"Fast Development:"}
                    </strong>
                    {" Build apps 30-40% faster than native development"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use React Native?"}
                </h2>
                <p>
                  <strong>
                    {"Perfect For:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Apps with standard UI components (social media, e-commerce, news apps)"}
                  </li>
                  <li>
                    {"MVP (Minimum Viable Product) to test market quickly"}
                  </li>
                  <li>
                    {"Teams with strong JavaScript expertise"}
                  </li>
                  <li>
                    {"Apps that need frequent updates and iterations"}
                  </li>
                  <li>
                    {"Business apps with forms, lists, and data display"}
                  </li>
                  <li>
                    {"Apps with similar functionality on both platforms"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Consider Native Instead When:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Building performance-critical apps (heavy games, video editing)"}
                  </li>
                  <li>
                    {"Need very platform-specific features or advanced animations"}
                  </li>
                  <li>
                    {"Working with Bluetooth, advanced camera features extensively"}
                  </li>
                  <li>
                    {"App requires low-level hardware integration"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Components"}
                </h2>
                <p>
                  {"React Native provides building blocks similar to HTML elements, but these compile to real native UI components:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import React from 'react';
import { View, Text, Image, ScrollView, TextInput } from 'react-native';

// View = Container (like <div> in HTML)
// Text = Text display (like <p> or <span>)
// Image = Display images
// ScrollView = Scrollable container
// TextInput = Input field

function WelcomeScreen() {
  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Text style={{ fontSize: 24, fontWeight: 'bold' }}>
        Welcome to React Native!
      </Text>

      <Image
        source={{ uri: 'https://example.com/logo.png' }}
        style={{ width: 100, height: 100 }}
      />

      <TextInput
        placeholder="Enter your name"
        style={{ borderWidth: 1, padding: 10, marginTop: 20 }}
      />
    </View>
  );
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Think of components as:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"View:"}
                    </strong>
                    {" A box or container (like a drawer to organize things)"}
                  </li>
                  <li>
                    <strong>
                      {"Text:"}
                    </strong>
                    {" Any text you want to display (labels, paragraphs)"}
                  </li>
                  <li>
                    <strong>
                      {"Image:"}
                    </strong>
                    {" Pictures or icons"}
                  </li>
                  <li>
                    <strong>
                      {"Button:"}
                    </strong>
                    {" Clickable buttons for actions"}
                  </li>
                  <li>
                    <strong>
                      {"FlatList:"}
                    </strong>
                    {" Efficient scrolling lists (like Instagram feed)"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"State Management"}
                </h2>
                <p>
                  {"State is like your app's memory - it remembers information and updates the screen when that information changes. Think of it like a thermostat that remembers the current temperature and updates the display when it changes."}
                </p>
                <div className="code-block">
                  <pre><code>{`import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Counter() {
  // useState creates a piece of memory for our count
  // count = current value, setCount = function to update it
  const [count, setCount] = useState(0);

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 32 }}>Count: {count}</Text>

      <Button
        title="Add One"
        onPress={() => setCount(count + 1)}
      />

      <Button
        title="Reset"
        onPress={() => setCount(0)}
      />
    </View>
  );
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Managing Form Input:"}
                  </strong>
                </p>
                <div className="code-block">
                  <pre><code>{`function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    // Send to backend API
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <TextInput
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
      />

      <Button title="Login" onPress={handleLogin} />
    </View>
  );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Navigation Between Screens"}
                </h2>
                <p>
                  {"Navigation is how users move between different screens in your app - like turning pages in a book. React Navigation is the most popular library for this."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

// Screen 1: Home
function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24 }}>Home Screen</Text>
      <Button
        title="Go to Profile"
        onPress={() => navigation.navigate('Profile', { userId: 123 })}
      />
    </View>
  );
}

// Screen 2: Profile
function ProfileScreen({ route }) {
  const { userId } = route.params;

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile Screen for User: {userId}</Text>
    </View>
  );
}

// Main App with Navigation
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Navigation Types:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Stack Navigation:"}
                    </strong>
                    {" Push screens like a deck of cards (most common)"}
                  </li>
                  <li>
                    <strong>
                      {"Tab Navigation:"}
                    </strong>
                    {" Bottom tabs like Instagram (Home, Search, Profile)"}
                  </li>
                  <li>
                    <strong>
                      {"Drawer Navigation:"}
                    </strong>
                    {" Side menu that slides in from left/right"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Native Modules"}
                </h2>
                <p>
                  {"Native modules let you access device features that JavaScript alone can't reach - like the camera, GPS, or fingerprint sensor. Think of them as bridges connecting JavaScript to the phone's hardware."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Using Camera
import { Camera } from 'react-native-vision-camera';

function CameraScreen() {
  const camera = useRef(null);

  const takePhoto = async () => {
    const photo = await camera.current.takePhoto();
    console.log('Photo saved:', photo.path);
  };

  return (
    <View style={{ flex: 1 }}>
      <Camera ref={camera} style={{ flex: 1 }} />
      <Button title="Take Photo" onPress={takePhoto} />
    </View>
  );
}

// Using Geolocation
import Geolocation from '@react-native-community/geolocation';

function LocationScreen() {
  const [location, setLocation] = useState(null);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude
        });
      },
      (error) => console.log(error),
      { enableHighAccuracy: true }
    );
  };

  return (
    <View>
      <Button title="Get Location" onPress={getLocation} />
      {location && (
        <Text>
          Lat: {location.latitude}, Long: {location.longitude}
        </Text>
      )}
    </View>
  );
}`}</code></pre>
                </div>
                <p>
                  <strong>
                    {"Common Native Features:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    <strong>
                      {"Camera & Photos:"}
                    </strong>
                    {" Take pictures, access photo library"}
                  </li>
                  <li>
                    <strong>
                      {"Location:"}
                    </strong>
                    {" GPS coordinates, maps integration"}
                  </li>
                  <li>
                    <strong>
                      {"Storage:"}
                    </strong>
                    {" Save data locally on device"}
                  </li>
                  <li>
                    <strong>
                      {"Push Notifications:"}
                    </strong>
                    {" Alert users even when app is closed"}
                  </li>
                  <li>
                    <strong>
                      {"Biometrics:"}
                    </strong>
                    {" Fingerprint, Face ID authentication"}
                  </li>
                  <li>
                    <strong>
                      {"Contacts:"}
                    </strong>
                    {" Access phone's contact list"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Styling in React Native"}
                </h2>
                <p>
                  {"React Native uses a JavaScript object for styling, similar to CSS but with camelCase property names:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import { StyleSheet, View, Text } from 'react-native';

function StyledComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hello World</Text>
      <Text style={styles.subtext}>Welcome to React Native</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
    justifyContent: 'center',  // CSS: justify-content
    alignItems: 'center'        // CSS: align-items
  },
  heading: {
    fontSize: 28,               // No units needed (automatically dp/pt)
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10
  },
  subtext: {
    fontSize: 16,
    color: '#666'
  }
});`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Fetching Data from APIs"}
                </h2>
                <p>
                  {"Most apps need to get data from the internet. Here's how to fetch data from a backend API:"}
                </p>
                <div className="code-block">
                  <pre><code>{`import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';

function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data when component loads
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await fetch('https://api.example.com/users');
      const data = await response.json();
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching users:', error);
      setLoading(false);
    }
  };

  if (loading) {
    return <ActivityIndicator size="large" />;
  }

  return (
    <FlatList
      data={users}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View style={{ padding: 15, borderBottomWidth: 1 }}>
          <Text style={{ fontSize: 18 }}>{item.name}</Text>
          <Text style={{ color: '#666' }}>{item.email}</Text>
        </View>
      )}
    />
  );
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
                      {"Use Functional Components:"}
                    </strong>
                    {" Prefer hooks (useState, useEffect) over class components"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize Lists:"}
                    </strong>
                    {" Use FlatList instead of ScrollView for long lists"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid Inline Styles:"}
                    </strong>
                    {" Use StyleSheet.create for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Loading States:"}
                    </strong>
                    {" Always show loading indicators during API calls"}
                  </li>
                  <li>
                    <strong>
                      {"Error Handling:"}
                    </strong>
                    {" Use try-catch blocks for async operations"}
                  </li>
                  <li>
                    <strong>
                      {"Platform-Specific Code:"}
                    </strong>
                    {" Use Platform.OS when needed for iOS/Android differences"}
                  </li>
                  <li>
                    <strong>
                      {"Test on Real Devices:"}
                    </strong>
                    {" Simulators don't show real performance"}
                  </li>
                  <li>
                    <strong>
                      {"Keep Components Small:"}
                    </strong>
                    {" Break large components into smaller, reusable pieces"}
                  </li>
                  <li>
                    <strong>
                      {"Use TypeScript:"}
                    </strong>
                    {" Adds type safety and better IDE support"}
                  </li>
                  <li>
                    <strong>
                      {"Manage State Wisely:"}
                    </strong>
                    {" Use Context API or Redux for global state"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"React Native vs Other Frameworks"}
                </h2>
                <p>
                  <strong>
                    {"React Native vs Flutter:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"React Native uses JavaScript (more developers know it)"}
                  </li>
                  <li>
                    {"Flutter uses Dart (newer language, smaller community)"}
                  </li>
                  <li>
                    {"React Native has more third-party libraries"}
                  </li>
                  <li>
                    {"Flutter has slightly better performance and smoother animations"}
                  </li>
                  <li>
                    {"React Native is better if you already know React"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"React Native vs Native Development:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"React Native: One codebase, faster development, good performance"}
                  </li>
                  <li>
                    {"Native: Two codebases (Swift + Kotlin), best performance, full platform access"}
                  </li>
                  <li>
                    {"Choose React Native for 80% of apps, Native for performance-critical apps"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <p>
                  {"Create your first React Native app in minutes:"}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install Expo CLI (easiest way to start)
npm install -g expo-cli

# Create new project
npx create-expo-app MyFirstApp

# Navigate to project
cd MyFirstApp

# Start development server
npx expo start

# Scan QR code with Expo Go app on your phone
# Your app will appear on your device!`}</code></pre>
                </div>
              </section>
              <section className="cta-section">
                <h2>
                  {"Ready to Build Mobile Apps?"}
                </h2>
                <p>
                  {"Master React Native and create professional iOS and Android applications"}
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
                  <Link href="/hybrid-mobile-app/articles/flutter" className="related-article-card">
                    <h3>
                      {"Flutter"}
                    </h3>
                    {" "}
                    <p>
                      {"Google's UI toolkit for mobile apps"}
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
                      {"Redux, Context, and more"}
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
