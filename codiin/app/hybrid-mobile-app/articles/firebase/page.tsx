import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Firebase: Complete Backend for Mobile Apps",
  description: "Learn Firebase - Google's Backend-as-a-Service platform. Master authentication, Firestore, storage, and cloud functions for mobile apps.",
  keywords: ["Firebase tutorial", "BaaS", "authentication", "Firestore", "cloud storage", "cloud functions", "mobile backend"],
  alternates: { canonical: "/hybrid-mobile-app/articles/firebase" },
  openGraph: {
    type: "article",
    url: "/hybrid-mobile-app/articles/firebase",
    title: "Firebase: Complete Backend for Mobile Apps",
    description: "Master Firebase for building scalable mobile app backends.",
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
  "headline": "Firebase: Complete Backend for Mobile Apps",
  "description": "Complete guide to Firebase for mobile app development",
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

export default function HybridMobileAppFirebasePage() {
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
                {"Firebase"}
              </span>
            </div>
            <h1>
              {"Firebase"}
            </h1>
            <p className="article-subtitle">
              {"Complete Backend for Mobile Apps"}
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
                  {"What is Firebase?"}
                </h2>
                <p>
                  {"Firebase is Google's Backend-as-a-Service (BaaS) platform that provides everything you need to build a mobile app without writing backend code. Think of it like a restaurant kitchen that's already fully equipped - you don't need to buy ovens, hire chefs, or manage inventory. You just focus on creating great dishes (your app features)."}
                </p>
                <p>
                  {"Instead of spending months building servers, databases, and APIs, Firebase gives you production-ready backend services that work out of the box. It's like having a team of backend engineers working for you 24/7."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why Use Firebase?"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Zero Backend Code:"}
                    </strong>
                    {" No need to write server-side code or manage servers"}
                  </li>
                  <li>
                    <strong>
                      {"Real-time Updates:"}
                    </strong>
                    {" Data syncs instantly across all devices"}
                  </li>
                  <li>
                    <strong>
                      {"Scales Automatically:"}
                    </strong>
                    {" Handles 10 users or 10 million users seamlessly"}
                  </li>
                  <li>
                    <strong>
                      {"Free to Start:"}
                    </strong>
                    {" Generous free tier, pay only as you grow"}
                  </li>
                  <li>
                    <strong>
                      {"Fast Development:"}
                    </strong>
                    {" Build MVPs in days, not months"}
                  </li>
                  <li>
                    <strong>
                      {"Google Infrastructure:"}
                    </strong>
                    {" Same reliability as Gmail and YouTube"}
                  </li>
                  <li>
                    <strong>
                      {"Comprehensive:"}
                    </strong>
                    {" Auth, database, storage, hosting - all in one"}
                  </li>
                  <li>
                    <strong>
                      {"Great Documentation:"}
                    </strong>
                    {" Easy to learn with tons of examples"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"When to Use Firebase (BaaS)?"}
                </h2>
                <p>
                  <strong>
                    {"Perfect For:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Startups building MVPs quickly"}
                  </li>
                  <li>
                    {"Apps needing real-time features (chat, collaboration)"}
                  </li>
                  <li>
                    {"Small teams without backend developers"}
                  </li>
                  <li>
                    {"Apps with user authentication and data storage"}
                  </li>
                  <li>
                    {"Prototypes and proof-of-concepts"}
                  </li>
                  <li>
                    {"Apps that need to scale unpredictably"}
                  </li>
                </ul>
                <p>
                  <strong>
                    {"Consider Custom Backend When:"}
                  </strong>
                </p>
                <ul>
                  <li>
                    {"Complex business logic requiring custom algorithms"}
                  </li>
                  <li>
                    {"Need full control over infrastructure"}
                  </li>
                  <li>
                    {"Handling sensitive data with strict compliance (healthcare, finance)"}
                  </li>
                  <li>
                    {"Very high transaction volumes with complex queries"}
                  </li>
                  <li>
                    {"Need to integrate with legacy systems extensively"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Core Firebase Services"}
                </h2>
                <div className="code-block">
                  <pre><code>{`Firebase Services Overview:
┌────────────────────────────────────┐
│ Authentication                     │  User login/signup
│ Firestore Database                 │  NoSQL cloud database
│ Realtime Database                  │  Real-time data sync
│ Cloud Storage                      │  File uploads (images, videos)
│ Cloud Functions                    │  Serverless backend code
│ Hosting                            │  Web app hosting
│ Cloud Messaging (FCM)              │  Push notifications
│ Analytics                          │  User behavior tracking
│ Crashlytics                        │  Crash reporting
└────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Firebase Authentication"}
                </h2>
                <p>
                  {"Authentication is how users sign up and log in to your app. Firebase handles all the complexity - password hashing, email verification, social login, and more. Think of it as a bouncer at a club who checks IDs and remembers who's allowed in."}
                </p>
                <h3>
                  {"Supported Sign-In Methods"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Email/Password:"}
                    </strong>
                    {" Traditional login"}
                  </li>
                  <li>
                    <strong>
                      {"Google:"}
                    </strong>
                    {" Sign in with Google account"}
                  </li>
                  <li>
                    <strong>
                      {"Facebook, Twitter, GitHub:"}
                    </strong>
                    {" Social login"}
                  </li>
                  <li>
                    <strong>
                      {"Phone Number:"}
                    </strong>
                    {" SMS verification"}
                  </li>
                  <li>
                    <strong>
                      {"Anonymous:"}
                    </strong>
                    {" Temporary accounts"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// Install Firebase
npm install @react-native-firebase/app @react-native-firebase/auth

// React Native Example
import auth from '@react-native-firebase/auth';

// 1. Sign Up with Email/Password
const signUp = async (email, password) => {
  try {
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );
    console.log('User created:', userCredential.user.uid);
  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Email already exists');
    }
    if (error.code === 'auth/weak-password') {
      console.log('Password too weak');
    }
  }
};

// 2. Sign In
const signIn = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password
    );
    console.log('Signed in:', userCredential.user.email);
  } catch (error) {
    console.log('Login failed:', error.message);
  }
};

// 3. Sign Out
const signOut = async () => {
  await auth().signOut();
  console.log('User signed out');
};

// 4. Check if User is Logged In
const checkAuthState = () => {
  auth().onAuthStateChanged((user) => {
    if (user) {
      console.log('User is logged in:', user.email);
    } else {
      console.log('No user logged in');
    }
  });
};

// 5. Google Sign In
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const signInWithGoogle = async () => {
  // Get Google credentials
  const { idToken } = await GoogleSignin.signIn();

  // Create Firebase credential
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign in to Firebase
  return auth().signInWithCredential(googleCredential);
};

// 6. Reset Password
const resetPassword = async (email) => {
  await auth().sendPasswordResetEmail(email);
  console.log('Password reset email sent');
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cloud Firestore"}
                </h2>
                <p>
                  {"Firestore is a NoSQL cloud database that stores data in documents and collections. Think of it like a filing cabinet: collections are drawers, documents are folders, and fields are the papers inside folders."}
                </p>
                <h3>
                  {"Data Structure"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Firestore Structure:
┌─────────────────────────────────┐
│ Collection: "users"             │
│  ├─ Document: "user123"         │
│  │   ├─ name: "Alice"           │
│  │   ├─ email: "alice@..."      │
│  │   └─ age: 25                 │
│  └─ Document: "user456"         │
│      ├─ name: "Bob"             │
│      └─ email: "bob@..."        │
│                                 │
│ Collection: "posts"             │
│  ├─ Document: "post1"           │
│  │   ├─ title: "Hello"          │
│  │   ├─ content: "..."          │
│  │   └─ authorId: "user123"     │
│  └─ Document: "post2"           │
└─────────────────────────────────┘`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`// Install Firestore
npm install @react-native-firebase/firestore

import firestore from '@react-native-firebase/firestore';

// 1. Add Data (Create)
const addUser = async () => {
  await firestore().collection('users').add({
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
    createdAt: firestore.FieldValue.serverTimestamp()
  });
  console.log('User added');
};

// Add with custom ID
const addUserWithId = async () => {
  await firestore().collection('users').doc('user123').set({
    name: 'Bob',
    email: 'bob@example.com'
  });
};

// 2. Read Data (Get)
const getUser = async (userId) => {
  const userDoc = await firestore().collection('users').doc(userId).get();

  if (userDoc.exists) {
    console.log('User data:', userDoc.data());
  } else {
    console.log('User not found');
  }
};

// Get all users
const getAllUsers = async () => {
  const snapshot = await firestore().collection('users').get();

  snapshot.forEach(doc => {
    console.log(doc.id, '=>', doc.data());
  });
};

// 3. Update Data
const updateUser = async (userId) => {
  await firestore().collection('users').doc(userId).update({
    age: 26,
    city: 'New York'
  });
};

// 4. Delete Data
const deleteUser = async (userId) => {
  await firestore().collection('users').doc(userId).delete();
};

// 5. Real-time Updates (Listen to changes)
const listenToUser = (userId) => {
  // Data updates automatically when changed in database
  const unsubscribe = firestore()
    .collection('users')
    .doc(userId)
    .onSnapshot(doc => {
      console.log('User updated:', doc.data());
    });

  // Stop listening when component unmounts
  return unsubscribe;
};

// 6. Queries
const getAdultUsers = async () => {
  const snapshot = await firestore()
    .collection('users')
    .where('age', '>=', 18)
    .orderBy('age', 'desc')
    .limit(10)
    .get();

  snapshot.forEach(doc => {
    console.log(doc.data());
  });
};

// 7. Complete CRUD Example
const TodoApp = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Real-time listener
    const unsubscribe = firestore()
      .collection('todos')
      .orderBy('createdAt', 'desc')
      .onSnapshot(snapshot => {
        const todoList = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTodos(todoList);
      });

    return () => unsubscribe();
  }, []);

  const addTodo = async (text) => {
    await firestore().collection('todos').add({
      text: text,
      completed: false,
      createdAt: firestore.FieldValue.serverTimestamp()
    });
  };

  const toggleTodo = async (id, completed) => {
    await firestore().collection('todos').doc(id).update({
      completed: !completed
    });
  };

  const deleteTodo = async (id) => {
    await firestore().collection('todos').doc(id).delete();
  };

  return (
    // Render todos...
  );
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cloud Storage"}
                </h2>
                <p>
                  {"Cloud Storage is for uploading and storing files like images, videos, and documents. Think of it like Dropbox or Google Drive for your app's files."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Install Storage
npm install @react-native-firebase/storage

import storage from '@react-native-firebase/storage';

// 1. Upload Image from Camera/Gallery
const uploadImage = async (uri) => {
  const filename = uri.substring(uri.lastIndexOf('/') + 1);
  const reference = storage().ref(\`images/\${filename}\`);

  // Show upload progress
  const task = reference.putFile(uri);

  task.on('state_changed', snapshot => {
    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    console.log(\`Upload is \${progress}% done\`);
  });

  await task;

  // Get download URL
  const downloadURL = await reference.getDownloadURL();
  console.log('Image uploaded:', downloadURL);

  return downloadURL;
};

// 2. Upload with Metadata
const uploadWithMetadata = async (uri) => {
  const reference = storage().ref('profile-photos/user123.jpg');

  await reference.putFile(uri, {
    contentType: 'image/jpeg',
    customMetadata: {
      uploadedBy: 'user123',
      location: 'New York'
    }
  });
};

// 3. Download File
const downloadImage = async () => {
  const url = await storage()
    .ref('images/photo.jpg')
    .getDownloadURL();

  // Use URL to display in Image component
  return url;
};

// 4. Delete File
const deleteImage = async (path) => {
  await storage().ref(path).delete();
};

// 5. Complete Profile Photo Example
const ProfilePhotoUpload = () => {
  const [uploading, setUploading] = useState(false);
  const [photoURL, setPhotoURL] = useState(null);

  const selectAndUploadPhoto = async () => {
    // Pick image from gallery
    const result = await ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      quality: 0.5
    });

    if (result.assets && result.assets[0]) {
      setUploading(true);
      const uri = result.assets[0].uri;

      try {
        // Upload to Firebase Storage
        const userId = auth().currentUser.uid;
        const reference = storage().ref(\`profile-photos/\${userId}.jpg\`);
        await reference.putFile(uri);

        // Get download URL
        const url = await reference.getDownloadURL();

        // Save URL to Firestore user document
        await firestore().collection('users').doc(userId).update({
          photoURL: url
        });

        setPhotoURL(url);
      } catch (error) {
        console.error('Upload failed:', error);
      } finally {
        setUploading(false);
      }
    }
  };

  return (
    <View>
      {photoURL && <Image source={{ uri: photoURL }} />}
      <Button title="Upload Photo" onPress={selectAndUploadPhoto} />
      {uploading && <ActivityIndicator />}
    </View>
  );
};`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Cloud Functions"}
                </h2>
                <p>
                  {"Cloud Functions are like having a backend developer who writes code that runs on Google's servers automatically in response to events. Think of them as mini-programs that wake up when something happens (user signs up, data changes, etc.)"}
                </p>
                <h3>
                  {"Common Use Cases"}
                </h3>
                <ul>
                  <li>
                    <strong>
                      {"Send Welcome Emails:"}
                    </strong>
                    {" When user signs up"}
                  </li>
                  <li>
                    <strong>
                      {"Image Processing:"}
                    </strong>
                    {" Resize photos when uploaded"}
                  </li>
                  <li>
                    <strong>
                      {"Data Validation:"}
                    </strong>
                    {" Check data before saving"}
                  </li>
                  <li>
                    <strong>
                      {"Notifications:"}
                    </strong>
                    {" Send push notifications"}
                  </li>
                  <li>
                    <strong>
                      {"Scheduled Tasks:"}
                    </strong>
                    {" Daily cleanup, reports"}
                  </li>
                  <li>
                    <strong>
                      {"Payment Processing:"}
                    </strong>
                    {" Integrate with Stripe"}
                  </li>
                </ul>
                <div className="code-block">
                  <pre><code>{`// Cloud Functions are written in Node.js
// Deploy with: firebase deploy --only functions

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

// 1. Trigger when new user signs up
exports.sendWelcomeEmail = functions.auth.user().onCreate((user) => {
  console.log('New user:', user.email);
  // Send email using SendGrid, Mailgun, etc.
  return sendEmail(user.email, 'Welcome!', 'Thanks for signing up!');
});

// 2. Trigger when document is created
exports.onNewPost = functions.firestore
  .document('posts/{postId}')
  .onCreate((snapshot, context) => {
    const post = snapshot.data();
    const postId = context.params.postId;

    // Send notification to followers
    return sendNotificationToFollowers(post.authorId, postId);
  });

// 3. Trigger when image is uploaded
exports.generateThumbnail = functions.storage.object().onFinalize((object) => {
  const filePath = object.name;

  if (!filePath.startsWith('images/')) {
    return null;
  }

  // Generate thumbnail using Sharp library
  return generateThumbnailFromImage(filePath);
});

// 4. HTTP Callable Function (call from app)
exports.addPremiumRole = functions.https.onCall(async (data, context) => {
  // Check authentication
  if (!context.auth) {
    throw new functions.https.HttpsError(
      'unauthenticated',
      'User must be logged in'
    );
  }

  const userId = context.auth.uid;

  // Add premium role to user
  await admin.auth().setCustomUserClaims(userId, {
    premium: true
  });

  return { success: true };
});

// Call from React Native:
// import functions from '@react-native-firebase/functions';
// const result = await functions().httpsCallable('addPremiumRole')();

// 5. Scheduled Function (cron job)
exports.dailyCleanup = functions.pubsub
  .schedule('every day 00:00')
  .onRun(async (context) => {
    // Delete old temporary data
    const cutoff = Date.now() - 30 * 24 * 60 * 60 * 1000; // 30 days ago

    const snapshot = await admin.firestore()
      .collection('temp')
      .where('createdAt', '<', cutoff)
      .get();

    const batch = admin.firestore().batch();
    snapshot.docs.forEach(doc => batch.delete(doc.ref));
    await batch.commit();

    console.log(\`Deleted \${snapshot.size} old documents\`);
  });`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Security Rules"}
                </h2>
                <p>
                  {"Security rules protect your data by controlling who can read or write. Think of them as security guards who check IDs before letting people access data."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Anyone can read, only authenticated users can write
    match /posts/{postId} {
      allow read: if true;
      allow create: if request.auth != null;
      allow update, delete: if request.auth.uid == resource.data.authorId;
    }

    // Users can only access their own data
    match /users/{userId} {
      allow read, write: if request.auth.uid == userId;
    }

    // Only admins can access admin collection
    match /admin/{document=**} {
      allow read, write: if request.auth.token.admin == true;
    }

    // Validate data before writing
    match /products/{productId} {
      allow create: if request.resource.data.name is string
                    && request.resource.data.price is number
                    && request.resource.data.price > 0;
    }
  }
}

// Storage Security Rules
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {

    // Users can only upload to their own folder
    match /users/{userId}/{allPaths=**} {
      allow read: if true;
      allow write: if request.auth.uid == userId;
    }

    // Images only, max 5MB
    match /images/{imageId} {
      allow write: if request.resource.size < 5 * 1024 * 1024
                   && request.resource.contentType.matches('image/.*');
    }
  }
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Firebase vs Custom Backend"}
                </h2>
                <div className="table-wrap">
                  <table style={{ "width": "100%", "borderCollapse": "collapse", "margin": "20px 0" }}>
                    <tr style={{ "background": "#f8fafc" }}>
                      <th style={{ "padding": "12px", "textAlign": "left", "border": "1px solid #e2e8f0" }}>
                        {"Aspect"}
                      </th>
                      <th style={{ "padding": "12px", "textAlign": "left", "border": "1px solid #e2e8f0" }}>
                        {"Firebase (BaaS)"}
                      </th>
                      <th style={{ "padding": "12px", "textAlign": "left", "border": "1px solid #e2e8f0" }}>
                        {"Custom Backend"}
                      </th>
                    </tr>
                    <tr>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Setup Time"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Minutes"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Weeks/Months"}
                      </td>
                    </tr>
                    <tr style={{ "background": "#f8fafc" }}>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Maintenance"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Google handles it"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"You manage servers"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Scaling"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Automatic"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Manual configuration"}
                      </td>
                    </tr>
                    <tr style={{ "background": "#f8fafc" }}>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Cost (small app)"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Free/$25/month"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"$50-200/month (server)"}
                      </td>
                    </tr>
                    <tr>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Flexibility"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Limited to Firebase features"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Complete control"}
                      </td>
                    </tr>
                    <tr style={{ "background": "#f8fafc" }}>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        <strong>
                          {"Real-time"}
                        </strong>
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Built-in"}
                      </td>
                      <td style={{ "padding": "12px", "border": "1px solid #e2e8f0" }}>
                        {"Need WebSockets/Socket.io"}
                      </td>
                    </tr>
                  </table>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Use Security Rules:"}
                    </strong>
                    {" Never leave database publicly accessible"}
                  </li>
                  <li>
                    <strong>
                      {"Structure Data Wisely:"}
                    </strong>
                    {" Design collections for your query patterns"}
                  </li>
                  <li>
                    <strong>
                      {"Optimize Images:"}
                    </strong>
                    {" Compress before uploading to save storage costs"}
                  </li>
                  <li>
                    <strong>
                      {"Use Batch Writes:"}
                    </strong>
                    {" Group multiple writes for better performance"}
                  </li>
                  <li>
                    <strong>
                      {"Cache Data:"}
                    </strong>
                    {" Don't fetch same data repeatedly"}
                  </li>
                  <li>
                    <strong>
                      {"Monitor Usage:"}
                    </strong>
                    {" Watch Firebase console for costs and errors"}
                  </li>
                  <li>
                    <strong>
                      {"Validate Data:"}
                    </strong>
                    {" Use security rules and Cloud Functions for validation"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Offline:"}
                    </strong>
                    {" Firebase has built-in offline support"}
                  </li>
                  <li>
                    <strong>
                      {"Index Queries:"}
                    </strong>
                    {" Create indexes for complex queries"}
                  </li>
                  <li>
                    <strong>
                      {"Limit Data:"}
                    </strong>
                    {" Use pagination, don't load thousands of documents at once"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Getting Started"}
                </h2>
                <div className="code-block">
                  <pre><code>{`# 1. Create Firebase project at firebase.google.com

# 2. Install Firebase CLI
npm install -g firebase-tools

# 3. Login to Firebase
firebase login

# 4. Initialize Firebase in your project
firebase init

# 5. Install React Native Firebase
npm install @react-native-firebase/app

# 6. Configure for iOS (ios/Podfile)
cd ios && pod install

# 7. Configure for Android (add google-services.json)

# 8. Install specific services
npm install @react-native-firebase/auth
npm install @react-native-firebase/firestore
npm install @react-native-firebase/storage`}</code></pre>
                </div>
              </section>
              <section className="cta-section">
                <h2>
                  {"Ready to Build with Firebase?"}
                </h2>
                <p>
                  {"Master Firebase and create powerful mobile apps without backend code"}
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
                  <Link href="/hybrid-mobile-app/articles/state-management" className="related-article-card">
                    <h3>
                      {"State Management"}
                    </h3>
                    {" "}
                    <p>
                      {"Redux, Context, and more"}
                    </p>
                  </Link>
                  <Link href="/hybrid-mobile-app/articles/mobile-apis" className="related-article-card">
                    <h3>
                      {"Mobile APIs"}
                    </h3>
                    {" "}
                    <p>
                      {"REST consumption and offline-first"}
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

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN, I'm interested in learning more about your programs"} />
    </>
  );
}
