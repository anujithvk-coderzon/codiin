import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "State Management: Mastering App Data Flow",
  description: "Learn State Management for Mobile Apps - Master Redux, Context API, Provider, and Riverpod. Understand when and why to use different state management solutions.",
  keywords: ["state management", "Redux", "Context API", "Provider", "Riverpod", "Bloc", "GetX", "mobile app state"],
  alternates: { canonical: "/hybrid-mobile-app/articles/state-management" },
  openGraph: {
    type: "article",
    url: "/hybrid-mobile-app/articles/state-management",
    title: "State Management: Mastering App Data Flow",
    description: "Complete guide to state management in mobile applications.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/hybrid-mobile-app", label: "Learn Hybrid Mobile", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "State Management: Mastering App Data Flow",
  "description": "Complete guide to state management in mobile apps",
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

export default function HybridMobileAppStateManagementPage() {
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
                {"State Management"}
              </span>
            </div>
            <h1>
              {"State Management"}
            </h1>
            <p className="article-subtitle">
              {"Mastering App Data Flow"}
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
                  {"What is State Management?"}
                </h2>
                <p>
                  {"State is the data that can change in your app - like logged-in user info, shopping cart items, or theme preference. State management is how you organize, update, and share this data across your entire app. Think of it like a library's card catalog system - it helps you find and update information efficiently no matter where you are in the building."}
                </p>
                <p>
                  {"Without proper state management, your app becomes like a messy room where you can't find anything. With good state management, it's like a well-organized workspace where everything has its place and is easy to access."}
                </p>
              </section>
              <section className="article-section">
                <h2>
                  {"Why State Management Matters"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Avoid Prop Drilling:"}
                    </strong>
                    {" Pass data to deeply nested components without passing through every level"}
                  </li>
                  <li>
                    <strong>
                      {"Single Source of Truth:"}
                    </strong>
                    {" One place for each piece of data, no conflicts"}
                  </li>
                  <li>
                    <strong>
                      {"Predictable Updates:"}
                    </strong>
                    {" Know exactly how and when data changes"}
                  </li>
                  <li>
                    <strong>
                      {"Easier Debugging:"}
                    </strong>
                    {" Track data flow and find bugs faster"}
                  </li>
                  <li>
                    <strong>
                      {"Better Performance:"}
                    </strong>
                    {" Only re-render components that need updates"}
                  </li>
                  <li>
                    <strong>
                      {"Testability:"}
                    </strong>
                    {" Easier to write tests for business logic"}
                  </li>
                  <li>
                    <strong>
                      {"Scalability:"}
                    </strong>
                    {" Add features without breaking existing code"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Types of State"}
                </h2>
                <div className="code-block">
                  <pre><code>{`State Types:
┌─────────────────────────────────────────┐
│ 1. Local State (Component State)        │
│    - Lives in one component             │
│    - Example: Form input, toggle button │
│    - Use: useState, this.state          │
│                                         │
│ 2. Shared State                         │
│    - Multiple components need access    │
│    - Example: User info, shopping cart  │
│    - Use: Context, Redux, Provider      │
│                                         │
│ 3. Server State (Remote State)          │
│    - Data from backend API              │
│    - Example: Posts, products, users    │
│    - Use: React Query, SWR              │
│                                         │
│ 4. URL State                            │
│    - Lives in URL parameters            │
│    - Example: Search filters, page num  │
│    - Use: Navigation params             │
│                                         │
│ 5. Persistent State                     │
│    - Survives app restarts              │
│    - Example: Settings, auth tokens     │
│    - Use: AsyncStorage, SecureStore     │
└─────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"React Native: useState (Local State)"}
                </h2>
                <p>
                  {"The simplest state management - keeps data inside one component. Like a notebook that only you can see and use."}
                </p>
                <div className="code-block">
                  <pre><code>{`import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';

function Counter() {
  // Local state - only this component knows about it
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="+" onPress={() => setCount(count + 1)} />
      <Button title="-" onPress={() => setCount(count - 1)} />
    </View>
  );
}

// Form with multiple state variables
function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        secureTextEntry={!showPassword}
      />
      <Button
        title={showPassword ? "Hide" : "Show"}
        onPress={() => setShowPassword(!showPassword)}
      />
      <Button title="Login" onPress={handleSubmit} />
    </View>
  );
}

When to use useState:
✓ Data only needed in one component
✓ Simple UI state (toggle, input values)
✓ Short-lived data (temporary selections)

Avoid for:
✗ Data needed by many components
✗ Complex data with many updates
✗ Data that needs to persist`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Context API (Shared State)"}
                </h2>
                <p>
                  {"Context lets you share data across many components without passing props through every level. Think of it like a loudspeaker system - broadcast once, everyone hears it."}
                </p>
                <div className="code-block">
                  <pre><code>{`import React, { createContext, useContext, useState } from 'react';

// 1. Create Context
const AuthContext = createContext();

// 2. Create Provider Component
export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = async (email, password) => {
    setIsLoading(true);
    try {
      // Call API
      const response = await fetch('/api/login', {
        method: 'POST',
        body: JSON.stringify({ email, password })
      });
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Login failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setUser(null);
  };

  // Value provided to all children
  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: user !== null
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

// 3. Custom Hook for easy access
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}

// 4. Wrap App with Provider
function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}

// 5. Use in Any Component
function ProfileScreen() {
  const { user, logout } = useAuth();

  return (
    <View>
      <Text>Welcome, {user.name}!</Text>
      <Button title="Logout" onPress={logout} />
    </View>
  );
}

function HomeScreen() {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <LoginScreen />;
  }

  return <Text>Hello {user.name}</Text>;
}

When to use Context:
✓ Theme (dark/light mode)
✓ User authentication
✓ Language/localization
✓ Global settings
✓ Medium-sized apps

Avoid for:
✗ Frequently changing data (causes re-renders)
✗ Very large apps (use Redux instead)
✗ Complex state logic`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Redux (Global State)"}
                </h2>
                <p>
                  {"Redux is a predictable state container. Think of it like a bank vault - strict rules about deposits and withdrawals, everything tracked, perfectly organized."}
                </p>
                <h3>
                  {"Core Concepts"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Redux Flow:
┌─────────────────────────────────────┐
│ Component                           │
│   ↓ dispatch(action)                │
│ Store                               │
│   ↓ sends action to                 │
│ Reducer                             │
│   ↓ returns new state               │
│ Store                               │
│   ↓ updates components              │
│ Component re-renders                │
└─────────────────────────────────────┘

Terms:
- Store: Single object holding all app state
- Action: Plain object describing what happened
- Reducer: Pure function that updates state
- Dispatch: Function to send actions to store`}</code></pre>
                </div>
                <div className="code-block">
                  <pre><code>{`// Install Redux
npm install @reduxjs/toolkit react-redux

// 1. Create Slice (Modern Redux with Redux Toolkit)
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0
  },
  reducers: {
    addItem: (state, action) => {
      // Redux Toolkit allows "mutating" code
      state.items.push(action.payload);
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const index = state.items.findIndex(
        item => item.id === action.payload.id
      );
      if (index !== -1) {
        state.total -= state.items[index].price;
        state.items.splice(index, 1);
      }
    },
    clearCart: (state) => {
      state.items = [];
      state.total = 0;
    }
  }
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// 2. Create Store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';

export const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

// 3. Provide Store to App
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  );
}

// 4. Use in Components
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem } from './cartSlice';

function ProductScreen({ product }) {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addItem(product));
  };

  return (
    <View>
      <Text>{product.name}</Text>
      <Button title="Add to Cart" onPress={handleAddToCart} />
    </View>
  );
}

function CartScreen() {
  const { items, total } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  return (
    <View>
      {items.map(item => (
        <View key={item.id}>
          <Text>{item.name} - \${item.price}</Text>
          <Button
            title="Remove"
            onPress={() => dispatch(removeItem(item))}
          />
        </View>
      ))}
      <Text>Total: \${total}</Text>
    </View>
  );
}

When to use Redux:
✓ Large apps with complex state
✓ State shared across many components
✓ Frequent state updates
✓ Need to track state changes (debugging)
✓ Team familiar with Redux

Avoid for:
✗ Small, simple apps
✗ Mostly server state (use React Query)
✗ Learning curve too steep for team`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flutter: Provider"}
                </h2>
                <p>
                  {"Provider is the recommended state management solution by Flutter team. Simple, powerful, and efficient."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Install Provider
dependencies:
  provider: ^6.0.0

// 1. Create Model (ChangeNotifier)
import 'package:flutter/foundation.dart';

class CartModel extends ChangeNotifier {
  final List<Product> _items = [];

  List<Product> get items => _items;

  int get itemCount => _items.length;

  double get totalPrice => _items.fold(
    0,
    (total, item) => total + item.price
  );

  void addItem(Product product) {
    _items.add(product);
    notifyListeners(); // Tells Flutter to rebuild widgets
  }

  void removeItem(Product product) {
    _items.remove(product);
    notifyListeners();
  }

  void clearCart() {
    _items.clear();
    notifyListeners();
  }
}

// 2. Provide to App
import 'package:provider/provider.dart';

void main() {
  runApp(
    ChangeNotifierProvider(
      create: (context) => CartModel(),
      child: MyApp(),
    ),
  );
}

// Multiple providers
void main() {
  runApp(
    MultiProvider(
      providers: [
        ChangeNotifierProvider(create: (_) => CartModel()),
        ChangeNotifierProvider(create: (_) => UserModel()),
        ChangeNotifierProvider(create: (_) => ThemeModel()),
      ],
      child: MyApp(),
    ),
  );
}

// 3. Consume in Widgets
class ProductScreen extends StatelessWidget {
  final Product product;

  @override
  Widget build(BuildContext context) {
    return Column(
      children: [
        Text(product.name),
        ElevatedButton(
          onPressed: () {
            // Access provider and call method
            context.read<CartModel>().addItem(product);
            // or: Provider.of<CartModel>(context, listen: false).addItem(product);
          },
          child: Text('Add to Cart'),
        ),
      ],
    );
  }
}

class CartScreen extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Listen to changes and rebuild when cart updates
    final cart = context.watch<CartModel>();
    // or: Provider.of<CartModel>(context);

    return Column(
      children: [
        Text('Items: \${cart.itemCount}'),
        Text('Total: \\$\${cart.totalPrice}'),
        ListView.builder(
          itemCount: cart.items.length,
          itemBuilder: (context, index) {
            final item = cart.items[index];
            return ListTile(
              title: Text(item.name),
              trailing: IconButton(
                icon: Icon(Icons.delete),
                onPress: () => cart.removeItem(item),
              ),
            );
          },
        ),
      ],
    );
  }
}

// Consumer Widget (rebuilds only this widget)
Consumer<CartModel>(
  builder: (context, cart, child) {
    return Text('\${cart.itemCount} items');
  },
)

When to use Provider:
✓ Most Flutter apps (recommended by Flutter team)
✓ Medium to large apps
✓ Need efficiency (only rebuilds what changed)
✓ Want simplicity without sacrificing power

Avoid for:
✗ Very simple apps (use setState)
✗ Very complex apps (consider Bloc or Riverpod)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flutter: Riverpod"}
                </h2>
                <p>
                  {"Riverpod is the evolution of Provider - more features, better testability, compile-time safety."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Install Riverpod
dependencies:
  flutter_riverpod: ^2.4.0

// 1. Create Provider
import 'package:flutter_riverpod/flutter_riverpod.dart';

// Simple value provider
final counterProvider = StateProvider<int>((ref) => 0);

// Complex state provider
class CartNotifier extends StateNotifier<List<Product>> {
  CartNotifier() : super([]);

  void addItem(Product product) {
    state = [...state, product]; // Immutable update
  }

  void removeItem(Product product) {
    state = state.where((item) => item.id != product.id).toList();
  }

  void clearCart() {
    state = [];
  }
}

final cartProvider = StateNotifierProvider<CartNotifier, List<Product>>(
  (ref) => CartNotifier(),
);

// Computed value (automatically updates)
final totalPriceProvider = Provider<double>((ref) {
  final cart = ref.watch(cartProvider);
  return cart.fold(0, (total, item) => total + item.price);
});

// 2. Wrap App
void main() {
  runApp(
    ProviderScope( // Instead of MultiProvider
      child: MyApp(),
    ),
  );
}

// 3. Use in Widgets
class CounterScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final count = ref.watch(counterProvider);

    return Column(
      children: [
        Text('Count: $count'),
        ElevatedButton(
          onPressed: () => ref.read(counterProvider.notifier).state++,
          child: Text('Increment'),
        ),
      ],
    );
  }
}

class CartScreen extends ConsumerWidget {
  @override
  Widget build(BuildContext context, WidgetRef ref) {
    final cart = ref.watch(cartProvider);
    final total = ref.watch(totalPriceProvider);

    return Column(
      children: [
        Text('Total: \\$$total'),
        ListView.builder(
          itemCount: cart.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(cart[index].name),
              trailing: IconButton(
                icon: Icon(Icons.delete),
                onPress: () {
                  ref.read(cartProvider.notifier).removeItem(cart[index]);
                },
              ),
            );
          },
        ),
      ],
    );
  }
}

When to use Riverpod:
✓ New Flutter projects
✓ Need compile-time safety
✓ Want better testing capabilities
✓ Complex dependency graphs
✓ Prefer immutable state

Avoid for:
✗ Already using Provider (migration effort)
✗ Team unfamiliar with modern patterns`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Flutter: Bloc"}
                </h2>
                <p>
                  {"Bloc (Business Logic Component) separates business logic from UI. Popular for large, complex apps. Think of it like a manager between your data and your UI."}
                </p>
                <div className="code-block">
                  <pre><code>{`// Install Bloc
dependencies:
  flutter_bloc: ^8.1.0

// 1. Define Events (what can happen)
abstract class CartEvent {}

class AddToCart extends CartEvent {
  final Product product;
  AddToCart(this.product);
}

class RemoveFromCart extends CartEvent {
  final Product product;
  RemoveFromCart(this.product);
}

class ClearCart extends CartEvent {}

// 2. Define State (what the UI shows)
class CartState {
  final List<Product> items;
  final double total;

  CartState({this.items = const [], this.total = 0});

  CartState copyWith({List<Product>? items, double? total}) {
    return CartState(
      items: items ?? this.items,
      total: total ?? this.total,
    );
  }
}

// 3. Create Bloc (business logic)
class CartBloc extends Bloc<CartEvent, CartState> {
  CartBloc() : super(CartState()) {
    on<AddToCart>(_onAddToCart);
    on<RemoveFromCart>(_onRemoveFromCart);
    on<ClearCart>(_onClearCart);
  }

  void _onAddToCart(AddToCart event, Emitter<CartState> emit) {
    final newItems = [...state.items, event.product];
    final newTotal = state.total + event.product.price;
    emit(state.copyWith(items: newItems, total: newTotal));
  }

  void _onRemoveFromCart(RemoveFromCart event, Emitter<CartState> emit) {
    final newItems = state.items.where((item) => item.id != event.product.id).toList();
    final newTotal = state.total - event.product.price;
    emit(state.copyWith(items: newItems, total: newTotal));
  }

  void _onClearCart(ClearCart event, Emitter<CartState> emit) {
    emit(CartState());
  }
}

// 4. Provide Bloc
BlocProvider(
  create: (context) => CartBloc(),
  child: MyApp(),
)

// 5. Use in Widgets
BlocBuilder<CartBloc, CartState>(
  builder: (context, state) {
    return Column(
      children: [
        Text('Items: \${state.items.length}'),
        Text('Total: \\$\${state.total}'),
        ListView.builder(
          itemCount: state.items.length,
          itemBuilder: (context, index) {
            return ListTile(
              title: Text(state.items[index].name),
              trailing: IconButton(
                icon: Icon(Icons.delete),
                onPress: () {
                  context.read<CartBloc>().add(
                    RemoveFromCart(state.items[index])
                  );
                },
              ),
            );
          },
        ),
      ],
    );
  },
)

When to use Bloc:
✓ Large, complex apps
✓ Need clear separation of concerns
✓ Team comfortable with reactive programming
✓ Need to track all state changes
✓ Want predictable, testable code

Avoid for:
✗ Small apps (overkill)
✗ Team unfamiliar with streams/reactive programming
✗ Simple state needs`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Which One to Choose?"}
                </h2>
                <h3>
                  {"React Native Decision Tree"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Start Here:
├── Is state used in ONE component only?
│   └── YES → Use useState
│
├── Is state shared by 2-3 nearby components?
│   └── YES → Lift state up or use useState + props
│
├── Is it user auth, theme, or language?
│   └── YES → Use Context API
│
├── Large app with complex state?
│   └── YES → Use Redux Toolkit
│
└── Mostly server data (API calls)?
    └── YES → Use React Query or SWR`}</code></pre>
                </div>
                <h3>
                  {"Flutter Decision Tree"}
                </h3>
                <div className="code-block">
                  <pre><code>{`Start Here:
├── Simple app or learning Flutter?
│   └── YES → Use setState
│
├── Medium-sized app, straightforward state?
│   └── YES → Use Provider
│
├── Want modern, type-safe approach?
│   └── YES → Use Riverpod
│
├── Large app, need strict architecture?
│   └── YES → Use Bloc
│
└── Just need simple global state?
    └── YES → Use GetX`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Keep State Minimal:"}
                    </strong>
                    {" Only store what you need"}
                  </li>
                  <li>
                    <strong>
                      {"Don't Over-Engineer:"}
                    </strong>
                    {" Start simple, upgrade when needed"}
                  </li>
                  <li>
                    <strong>
                      {"Single Source of Truth:"}
                    </strong>
                    {" Each piece of data lives in one place"}
                  </li>
                  <li>
                    <strong>
                      {"Immutable Updates:"}
                    </strong>
                    {" Don't mutate state directly, create new objects"}
                  </li>
                  <li>
                    <strong>
                      {"Separate Concerns:"}
                    </strong>
                    {" UI components shouldn't contain business logic"}
                  </li>
                  <li>
                    <strong>
                      {"Name Clearly:"}
                    </strong>
                    {" Use descriptive names for state and actions"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid Nested State:"}
                    </strong>
                    {" Flatten state structure when possible"}
                  </li>
                  <li>
                    <strong>
                      {"Use Selectors:"}
                    </strong>
                    {" Don't subscribe to entire store, just what you need"}
                  </li>
                  <li>
                    <strong>
                      {"Handle Loading/Error:"}
                    </strong>
                    {" Always manage loading and error states"}
                  </li>
                  <li>
                    <strong>
                      {"DevTools:"}
                    </strong>
                    {" Use Redux DevTools or Flutter DevTools for debugging"}
                  </li>
                </ul>
              </section>
              <section className="article-section">
                <h2>
                  {"Common Mistakes"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Using Redux for Everything:"}
                    </strong>
                    {" Local state is fine for local data"}
                  </li>
                  <li>
                    <strong>
                      {"Mutating State Directly:"}
                    </strong>
                    {" Always create new objects/arrays"}
                  </li>
                  <li>
                    <strong>
                      {"Too Much in Context:"}
                    </strong>
                    {" Context re-renders all consumers when any value changes"}
                  </li>
                  <li>
                    <strong>
                      {"Not Optimizing Re-renders:"}
                    </strong>
                    {" Use memo, useMemo, useCallback wisely"}
                  </li>
                  <li>
                    <strong>
                      {"Mixing Server and Client State:"}
                    </strong>
                    {" Use different tools for different state types"}
                  </li>
                  <li>
                    <strong>
                      {"Over-Normalizing Data:"}
                    </strong>
                    {" Sometimes duplication is okay"}
                  </li>
                  <li>
                    <strong>
                      {"Forgetting to Unsubscribe:"}
                    </strong>
                    {" Clean up listeners to prevent memory leaks"}
                  </li>
                </ul>
              </section>
              <section className="cta-section">
                <h2>
                  {"Ready to Master State Management?"}
                </h2>
                <p>
                  {"Learn to build scalable, maintainable mobile applications"}
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
                  <Link href="/hybrid-mobile-app/articles/flutter" className="related-article-card">
                    <h3>
                      {"Flutter"}
                    </h3>
                    {" "}
                    <p>
                      {"Google's UI toolkit for mobile apps"}
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
                  <Link href="/hybrid-mobile-app/articles/mobile-apis" className="related-article-card">
                    <h3>
                      {"Mobile APIs"}
                    </h3>
                    {" "}
                    <p>
                      {"REST consumption and offline-first"}
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
