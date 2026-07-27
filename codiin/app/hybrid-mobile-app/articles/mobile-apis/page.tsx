import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Mobile APIs: REST, Offline-First, and Caching",
  description: "Learn Mobile API Integration - Master REST API consumption, offline-first architecture, caching strategies, and best practices for mobile apps.",
  keywords: ["mobile APIs", "REST API", "offline-first", "API caching", "mobile networking", "HTTP requests", "mobile app architecture"],
  alternates: { canonical: "/hybrid-mobile-app/articles/mobile-apis" },
  openGraph: {
    type: "article",
    url: "/hybrid-mobile-app/articles/mobile-apis",
    title: "Mobile APIs: REST, Offline-First, and Caching",
    description: "Complete guide to mobile API integration and patterns.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/hybrid-mobile-app", label: "Learn Hybrid Mobile", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Mobile APIs: REST, Offline-First, and Caching",
  "description": "Complete guide to mobile API integration",
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

export default function HybridMobileAppMobileApisPage() {
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
                {"Mobile APIs"}
              </span>
            </div>
            <h1>
              {"Mobile APIs"}
            </h1>
            <p className="article-subtitle">
              {"REST, Offline-First, and Caching Strategies"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"17 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"What are Mobile APIs?"}
                </h2>
                <p>
                  {"APIs (Application Programming Interfaces) are how your mobile app communicates with backend servers to get or send data. Think of APIs like a waiter in a restaurant - you (the app) tell the waiter (API) what you want, the waiter goes to the kitchen (server), and brings back your food (data)."}
                </p>
                <p>
                  {"Unlike web apps that run on stable WiFi connections, mobile apps face unique challenges: spotty connections, slow networks, offline scenarios, and limited data plans. Mobile API patterns are specifically designed to handle these challenges gracefully."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Mobile APIs Are Different"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Unreliable Networks:"}
                    </strong>
                    {" Users move between WiFi, 4G, 3G, or no connection"}
                  </li>
                  <li>
                    <strong>
                      {"Slow Connections:"}
                    </strong>
                    {" Mobile networks slower than broadband"}
                  </li>
                  <li>
                    <strong>
                      {"Data Costs:"}
                    </strong>
                    {" Users pay for mobile data usage"}
                  </li>
                  <li>
                    <strong>
                      {"Battery Life:"}
                    </strong>
                    {" Network calls drain battery"}
                  </li>
                  <li>
                    <strong>
                      {"Offline Usage:"}
                    </strong>
                    {" Apps should work without internet when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Background Restrictions:"}
                    </strong>
                    {" OS limits what apps can do in background"}
                  </li>
                  <li>
                    <strong>
                      {"Variable Screen Sizes:"}
                    </strong>
                    {" Need to fetch appropriate data amounts"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"REST API Basics"}
                </h2>
                <p>
                  {"REST (Representational State Transfer) is the most common API style. It uses standard HTTP methods to interact with resources."}
                </p>
                <div className="code-block">
                  <pre><code>{`HTTP Methods (CRUD Operations):
┌──────────────────────────────────────────┐
│ GET    - Read/Retrieve data              │
│ POST   - Create new data                 │
│ PUT    - Update/Replace entire resource  │
│ PATCH  - Update part of resource         │
│ DELETE - Remove data                     │
└──────────────────────────────────────────┘

REST API Endpoints Structure:
GET    /api/users           → Get all users
GET    /api/users/123       → Get user with ID 123
POST   /api/users           → Create new user
PUT    /api/users/123       → Update user 123
PATCH  /api/users/123       → Partial update user 123
DELETE /api/users/123       → Delete user 123

Response Status Codes:
200 - OK (success)
201 - Created (resource created)
204 - No Content (success but no data returned)
400 - Bad Request (invalid data sent)
401 - Unauthorized (need to login)
403 - Forbidden (logged in but no permission)
404 - Not Found (resource doesn't exist)
500 - Server Error (backend problem)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Making API Calls in React Native"}
                </h2>
                <h3>
                  {"Using Fetch API"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Basic GET Request
const fetchUsers = async () => {
  try {
    const response = await fetch('https://api.example.com/users');

    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }

    const data = await response.json();
    console.log('Users:', data);
    return data;
  } catch (error) {
    console.error('Fetch failed:', error);
    throw error;
  }
};

// POST Request (Create)
const createUser = async (userData) => {
  try {
    const response = await fetch('https://api.example.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer YOUR_TOKEN_HERE'
      },
      body: JSON.stringify(userData)
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Create failed:', error);
    throw error;
  }
};

// PUT Request (Update)
const updateUser = async (userId, userData) => {
  const response = await fetch(\`https://api.example.com/users/\${userId}\`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData)
  });
  return await response.json();
};

// DELETE Request
const deleteUser = async (userId) => {
  await fetch(\`https://api.example.com/users/\${userId}\`, {
    method: 'DELETE'
  });
};`}</code></pre>
                </div>
                <h3>
                  {"Using Axios (Better Alternative)"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Install: npm install axios
import axios from 'axios';

// Create configured instance
const api = axios.create({
  baseURL: 'https://api.example.com',
  timeout: 10000, // 10 seconds
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add auth token to all requests
api.interceptors.request.use((config) => {
  const token = getAuthToken(); // Get from storage
  if (token) {
    config.headers.Authorization = \`Bearer \${token}\`;
  }
  return config;
});

// Handle errors globally
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      // Unauthorized - redirect to login
      navigateToLogin();
    }
    return Promise.reject(error);
  }
);

// GET
const fetchUsers = async () => {
  const response = await api.get('/users');
  return response.data;
};

// POST
const createUser = async (userData) => {
  const response = await api.post('/users', userData);
  return response.data;
};

// With query parameters
const searchUsers = async (query) => {
  const response = await api.get('/users', {
    params: { search: query, limit: 20 }
  });
  return response.data;
};

// Upload file
const uploadPhoto = async (file) => {
  const formData = new FormData();
  formData.append('photo', {
    uri: file.uri,
    type: 'image/jpeg',
    name: 'photo.jpg'
  });

  const response = await api.post('/upload', formData, {
    headers: { 'Content-Type': 'multipart/form-data' }
  });
  return response.data;
};`}</code></pre>
                </div>
                <h3>
                  {"Complete Example with Loading & Error States"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, Button } from 'react-native';
import axios from 'axios';

function UserListScreen() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  const fetchUsers = async () => {
    try {
      setError(null);
      const response = await axios.get('https://api.example.com/users');
      setUsers(response.data);
    } catch (err) {
      setError(err.message);
      console.error('Fetch failed:', err);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleRefresh = () => {
    setRefreshing(true);
    fetchUsers();
  };

  const handleRetry = () => {
    setLoading(true);
    fetchUsers();
  };

  // Loading state
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" />
        <Text>Loading users...</Text>
      </View>
    );
  }

  // Error state
  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'red' }}>Error: {error}</Text>
        <Button title="Retry" onPress={handleRetry} />
      </View>
    );
  }

  // Success state
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
      refreshing={refreshing}
      onRefresh={handleRefresh}
    />
  );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Making API Calls in Flutter"}
                </h2>
                <div className="code-block">
                  <pre><code>{`// Install: flutter pub add http
import 'package:http/http.dart' as http;
import 'dart:convert';

// GET Request
Future<List<User>> fetchUsers() async {
  final response = await http.get(
    Uri.parse('https://api.example.com/users'),
  );

  if (response.statusCode == 200) {
    List<dynamic> data = json.decode(response.body);
    return data.map((json) => User.fromJson(json)).toList();
  } else {
    throw Exception('Failed to load users');
  }
}

// POST Request
Future<User> createUser(User user) async {
  final response = await http.post(
    Uri.parse('https://api.example.com/users'),
    headers: {'Content-Type': 'application/json'},
    body: json.encode(user.toJson()),
  );

  if (response.statusCode == 201) {
    return User.fromJson(json.decode(response.body));
  } else {
    throw Exception('Failed to create user');
  }
}

// Using Dio (Better Alternative)
// flutter pub add dio
import 'package:dio/dio.dart';

class ApiService {
  final Dio _dio = Dio(
    BaseOptions(
      baseUrl: 'https://api.example.com',
      connectTimeout: Duration(seconds: 10),
      receiveTimeout: Duration(seconds: 10),
      headers: {'Content-Type': 'application/json'},
    ),
  );

  ApiService() {
    // Add interceptors
    _dio.interceptors.add(
      InterceptorsWrapper(
        onRequest: (options, handler) {
          // Add auth token
          final token = getToken();
          if (token != null) {
            options.headers['Authorization'] = 'Bearer $token';
          }
          return handler.next(options);
        },
        onError: (error, handler) {
          // Handle errors globally
          if (error.response?.statusCode == 401) {
            // Redirect to login
            navigateToLogin();
          }
          return handler.next(error);
        },
      ),
    );
  }

  Future<List<User>> getUsers() async {
    final response = await _dio.get('/users');
    return (response.data as List)
        .map((json) => User.fromJson(json))
        .toList();
  }

  Future<User> createUser(User user) async {
    final response = await _dio.post('/users', data: user.toJson());
    return User.fromJson(response.data);
  }
}

// Complete Widget Example
class UserListScreen extends StatefulWidget {
  @override
  _UserListScreenState createState() => _UserListScreenState();
}

class _UserListScreenState extends State<UserListScreen> {
  final ApiService _api = ApiService();
  List<User> users = [];
  bool isLoading = true;
  String? error;

  @override
  void initState() {
    super.initState();
    fetchUsers();
  }

  Future<void> fetchUsers() async {
    try {
      setState(() {
        isLoading = true;
        error = null;
      });

      final data = await _api.getUsers();

      setState(() {
        users = data;
        isLoading = false;
      });
    } catch (e) {
      setState(() {
        error = e.toString();
        isLoading = false;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    if (isLoading) {
      return Center(child: CircularProgressIndicator());
    }

    if (error != null) {
      return Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: [
            Text('Error: $error'),
            ElevatedButton(
              onPressed: fetchUsers,
              child: Text('Retry'),
            ),
          ],
        ),
      );
    }

    return RefreshIndicator(
      onRefresh: fetchUsers,
      child: ListView.builder(
        itemCount: users.length,
        itemBuilder: (context, index) {
          return ListTile(
            title: Text(users[index].name),
            subtitle: Text(users[index].email),
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
                  {"Offline-First Architecture"}
                </h2>
                <p>
                  {"Offline-first means your app works even without internet. Data is stored locally and synced with server when connection is available. Think of it like a notebook - you can write notes anytime, and they're uploaded to cloud when you have WiFi."}
                </p>
                <h3>
                  {"Why Offline-First?"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Better UX:"}
                    </strong>
                    {" App always works, no \"No Internet\" screens"}
                  </li>
                  <li>
                    <strong>
                      {"Faster:"}
                    </strong>
                    {" Load from local storage, no waiting for network"}
                  </li>
                  <li>
                    <strong>
                      {"Data Plans:"}
                    </strong>
                    {" Users save on mobile data"}
                  </li>
                  <li>
                    <strong>
                      {"Reliability:"}
                    </strong>
                    {" Works in tunnels, planes, rural areas"}
                  </li>
                  <li>
                    <strong>
                      {"Performance:"}
                    </strong>
                    {" Instant response, sync in background"}
                  </li>
                </ul>
                <h3>
                  {"Offline-First Pattern"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Offline-First Flow:
┌────────────────────────────────────────┐
│ 1. App starts                          │
│    └─ Load data from local storage     │
│    └─ Display to user immediately      │
│                                        │
│ 2. Check internet connection           │
│    └─ If online: fetch from API        │
│    └─ Update local storage             │
│    └─ Update UI with fresh data        │
│                                        │
│ 3. User makes changes                  │
│    └─ Save to local storage first      │
│    └─ Update UI immediately            │
│    └─ Queue for sync                   │
│                                        │
│ 4. When online                         │
│    └─ Sync queued changes to server    │
│    └─ Resolve conflicts if any         │
└────────────────────────────────────────┘`}</code></pre>
                </div>
                <h3>
                  {"Implementation with AsyncStorage"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Install: npm install @react-native-async-storage/async-storage
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';

// Offline-First Data Service
class DataService {
  static CACHE_KEY = '@app_data';

  // Load data (offline-first)
  static async loadUsers() {
    try {
      // 1. Load from cache immediately
      const cached = await AsyncStorage.getItem(this.CACHE_KEY);
      let users = cached ? JSON.parse(cached) : [];

      // 2. Check if online
      const netInfo = await NetInfo.fetch();

      if (netInfo.isConnected) {
        // 3. Fetch fresh data from API
        const response = await fetch('https://api.example.com/users');
        const freshData = await response.json();

        // 4. Update cache
        await AsyncStorage.setItem(this.CACHE_KEY, JSON.stringify(freshData));

        users = freshData;
      }

      return users;
    } catch (error) {
      console.error('Load failed:', error);
      // Return cached data even if API fails
      const cached = await AsyncStorage.getItem(this.CACHE_KEY);
      return cached ? JSON.parse(cached) : [];
    }
  }

  // Save data (offline-first)
  static async saveUser(user) {
    // 1. Save to local storage immediately
    const cached = await AsyncStorage.getItem(this.CACHE_KEY);
    const users = cached ? JSON.parse(cached) : [];
    users.push(user);
    await AsyncStorage.setItem(this.CACHE_KEY, JSON.stringify(users));

    // 2. Queue for sync
    await this.queueForSync('create_user', user);

    // 3. Try to sync if online
    await this.syncIfOnline();
  }

  // Queue changes for later sync
  static async queueForSync(action, data) {
    const queue = await AsyncStorage.getItem('@sync_queue');
    const items = queue ? JSON.parse(queue) : [];
    items.push({ action, data, timestamp: Date.now() });
    await AsyncStorage.setItem('@sync_queue', JSON.stringify(items));
  }

  // Sync queued changes
  static async syncIfOnline() {
    const netInfo = await NetInfo.fetch();
    if (!netInfo.isConnected) return;

    const queue = await AsyncStorage.getItem('@sync_queue');
    if (!queue) return;

    const items = JSON.parse(queue);

    for (const item of items) {
      try {
        if (item.action === 'create_user') {
          await fetch('https://api.example.com/users', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(item.data)
          });
        }
        // Remove from queue after successful sync
      } catch (error) {
        console.error('Sync failed:', error);
        break; // Stop syncing on error, try again later
      }
    }

    // Clear synced items
    await AsyncStorage.setItem('@sync_queue', JSON.stringify([]));
  }
}

// Usage in Component
function UserListScreen() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    loadData();

    // Listen for network changes
    const unsubscribe = NetInfo.addEventListener(state => {
      if (state.isConnected) {
        DataService.syncIfOnline();
      }
    });

    return () => unsubscribe();
  }, []);

  const loadData = async () => {
    const data = await DataService.loadUsers();
    setUsers(data);
  };

  const addUser = async (userData) => {
    await DataService.saveUser(userData);
    loadData(); // Refresh UI
  };

  return (
    // UI code
  );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Caching Strategies"}
                </h2>
                <p>
                  {"Caching stores data locally to avoid repeated network requests. Think of it like keeping frequently-used items on your desk instead of going to the filing cabinet every time."}
                </p>
                <h3>
                  {"Cache Types"}
                </h3>
                <div className="code-block">
                  <pre><code>{`1. Memory Cache (Fastest)
   - Stores in RAM
   - Lost when app closes
   - Use for: Current session data

2. Disk Cache (Persistent)
   - Stores on device storage
   - Survives app restarts
   - Use for: User data, images

3. HTTP Cache (Automatic)
   - Browser/HTTP library handles it
   - Based on Cache-Control headers
   - Use for: Static resources

4. CDN Cache (Server-side)
   - Content Delivery Network
   - Reduces server load
   - Use for: Images, videos, static files`}</code></pre>
                </div>
                <h3>
                  {"Cache-First Strategy"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// React Query - Automatic caching
// npm install @tanstack/react-query
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

function UserListScreen() {
  // Automatically caches and manages data
  const { data: users, isLoading, error } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const response = await fetch('https://api.example.com/users');
      return response.json();
    },
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    cacheTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });

  if (isLoading) return <ActivityIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserItem user={item} />}
    />
  );
}

// Mutations with automatic cache updates
function CreateUserScreen() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (newUser) => {
      const response = await fetch('https://api.example.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
      });
      return response.json();
    },
    onSuccess: () => {
      // Invalidate and refetch users list
      queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });

  const handleSubmit = () => {
    mutation.mutate({ name: 'John', email: 'john@example.com' });
  };

  return (
    <Button
      title="Create User"
      onPress={handleSubmit}
      disabled={mutation.isLoading}
    />
  );
}`}</code></pre>
                </div>
                <h3>
                  {"Image Caching"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// React Native Fast Image
// npm install react-native-fast-image
import FastImage from 'react-native-fast-image';

// Automatically caches images
<FastImage
  style={{ width: 200, height: 200 }}
  source={{
    uri: 'https://example.com/image.jpg',
    priority: FastImage.priority.high,
  }}
  resizeMode={FastImage.resizeMode.cover}
/>

// Preload images
FastImage.preload([
  { uri: 'https://example.com/image1.jpg' },
  { uri: 'https://example.com/image2.jpg' },
]);

// Clear cache when needed
FastImage.clearMemoryCache();
FastImage.clearDiskCache();`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Mobile API Best Practices"}
                </h2>
                <h3>
                  {"1. Handle Network Conditions"}
                </h3>
                <div className="code-block">
                  <pre><code>{`import NetInfo from '@react-native-community/netinfo';

// Check network status
const checkConnection = async () => {
  const state = await NetInfo.fetch();
  console.log('Connection type:', state.type);
  console.log('Is connected?', state.isConnected);
};

// Listen to network changes
const unsubscribe = NetInfo.addEventListener(state => {
  if (!state.isConnected) {
    showOfflineMessage();
  } else {
    hideOfflineMessage();
    syncPendingChanges();
  }
});

// Show network indicator
function NetworkIndicator() {
  const [isConnected, setIsConnected] = useState(true);

  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);
    });
    return () => unsubscribe();
  }, []);

  if (isConnected) return null;

  return (
    <View style={{ backgroundColor: 'red', padding: 10 }}>
      <Text style={{ color: 'white', textAlign: 'center' }}>
        No Internet Connection
      </Text>
    </View>
  );
}`}</code></pre>
                </div>
                <h3>
                  {"2. Implement Retry Logic"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Retry failed requests
async function fetchWithRetry(url, options = {}, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      const response = await fetch(url, options);
      if (response.ok) return response;

      // Don't retry client errors (400-499)
      if (response.status >= 400 && response.status < 500) {
        throw new Error(\`Client error: \${response.status}\`);
      }

      // Retry server errors (500+)
      if (i < maxRetries - 1) {
        await delay(1000 * Math.pow(2, i)); // Exponential backoff
        continue;
      }
    } catch (error) {
      if (i === maxRetries - 1) throw error;
      await delay(1000 * Math.pow(2, i));
    }
  }
}

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}`}</code></pre>
                </div>
                <h3>
                  {"3. Use Request Timeouts"}
                </h3>
                <div className="code-block">
                  <pre><code>{`// Set reasonable timeouts
const controller = new AbortController();
const timeoutId = setTimeout(() => controller.abort(), 10000); // 10s timeout

try {
  const response = await fetch('https://api.example.com/data', {
    signal: controller.signal
  });
  clearTimeout(timeoutId);
  return await response.json();
} catch (error) {
  if (error.name === 'AbortError') {
    console.log('Request timed out');
  }
  throw error;
}`}</code></pre>
                </div>
                <h3>
                  {"4. Optimize Payload Size"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Pagination:"}
                    </strong>
                    {" Load data in chunks, not all at once"}
                  </li>
                  <li>
                    <strong>
                      {"Compression:"}
                    </strong>
                    {" Use gzip compression (usually automatic)"}
                  </li>
                  <li>
                    <strong>
                      {"Selective Fields:"}
                    </strong>
                    {" Request only needed fields"}
                  </li>
                  <li>
                    <strong>
                      {"Image Sizes:"}
                    </strong>
                    {" Request appropriate image sizes for device"}
                  </li>
                  <li>
                    <strong>
                      {"Lazy Loading:"}
                    </strong>
                    {" Load data as user scrolls"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// Pagination example
const fetchUsers = async (page = 1, limit = 20) => {
  const response = await fetch(
    \`https://api.example.com/users?page=\${page}&limit=\${limit}\`
  );
  return response.json();
};

// Infinite scroll
function UserListScreen() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const loadMore = async () => {
    if (loading) return;
    setLoading(true);

    const newUsers = await fetchUsers(page);
    setUsers([...users, ...newUsers]);
    setPage(page + 1);
    setLoading(false);
  };

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <UserItem user={item} />}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      ListFooterComponent={loading && <ActivityIndicator />}
    />
  );
}`}</code></pre>
                </div>
                <h3>
                  {"5. Secure API Calls"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Use HTTPS:"}
                    </strong>
                    {" Always use secure connections"}
                  </li>
                  <li>
                    <strong>
                      {"Store Tokens Securely:"}
                    </strong>
                    {" Use SecureStore for auth tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Token Refresh:"}
                    </strong>
                    {" Automatically refresh expired tokens"}
                  </li>
                  <li>
                    <strong>
                      {"Don't Store Secrets:"}
                    </strong>
                    {" Never hardcode API keys in app"}
                  </li>
                  <li>
                    <strong>
                      {"Validate Responses:"}
                    </strong>
                    {" Check data before using it"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Mistakes to Avoid"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Not Handling Errors:"}
                    </strong>
                    {" Always wrap in try-catch"}
                  </li>
                  <li>
                    <strong>
                      {"Ignoring Loading States:"}
                    </strong>
                    {" Show spinners during requests"}
                  </li>
                  <li>
                    <strong>
                      {"No Offline Support:"}
                    </strong>
                    {" App should work without internet when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Fetching Too Much Data:"}
                    </strong>
                    {" Use pagination, not loading thousands of items"}
                  </li>
                  <li>
                    <strong>
                      {"No Retry Logic:"}
                    </strong>
                    {" Network requests fail, plan for retries"}
                  </li>
                  <li>
                    <strong>
                      {"Blocking UI:"}
                    </strong>
                    {" Use async/await, don't freeze the app"}
                  </li>
                  <li>
                    <strong>
                      {"Poor Cache Management:"}
                    </strong>
                    {" Stale data confuses users"}
                  </li>
                  <li>
                    <strong>
                      {"Not Canceling Requests:"}
                    </strong>
                    {" Cancel requests when user navigates away"}
                  </li>
                </ul>
              </section>
              <section className="cta-section">
                <h2>
                  {"Ready to Master Mobile APIs?"}
                </h2>
                <p>
                  {"Build robust, offline-first mobile applications that work anywhere"}
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
                  <Link href="/hybrid-mobile-app/articles/firebase" className="related-article-card">
                    <h3>
                      {"Firebase"}
                    </h3>
                    {" "}
                    <p>
                      {"Backend services for mobile apps"}
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
                  <Link href="/hybrid-mobile-app/articles/app-store-deployment" className="related-article-card">
                    <h3>
                      {"App Store Deployment"}
                    </h3>
                    {" "}
                    <p>
                      {"Publishing to iOS and Android"}
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
          <div className="footer-content">
            <div className="footer-section">
              <h3>
                {"CODiiN Tech Mentors Lab"}
              </h3>
              <p>
                {"Empowering the next generation of tech professionals through hands-on learning and industry mentorship."}
              </p>
            </div>
            <div className="footer-section">
              <h4>
                {"Quick Links"}
              </h4>
              <ul>
                <li>
                  <Link href="/#programs">
                    {"Programs"}
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-engineering">
                    {"Data Engineering"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-science">
                    {"Data Science"}
                  </Link>
                </li>
                <li>
                  <Link href="/agentic-ai">
                    {"Agentic AI"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>
                {"Legal"}
              </h4>
              <ul>
                <li>
                  <Link href="/privacy-policy">
                    {"Privacy Policy"}
                  </Link>
                </li>
                <li>
                  <Link href="/terms-of-service">
                    {"Terms & Conditions"}
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2024 CODiiN Tech Mentors Lab. All rights reserved."}
            </p>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN, I'm interested in learning more about your programs"} />
    </>
  );
}
