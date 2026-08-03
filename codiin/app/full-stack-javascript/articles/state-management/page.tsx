import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "State Management: Context API & Redux",
  description: "Learn React state management with Context API and Redux. Master global state, actions, reducers, and when to use each approach.",
  keywords: ["React state management", "Context API", "Redux", "Redux Toolkit", "useReducer", "global state", "React hooks"],
  alternates: { canonical: "/full-stack-javascript/articles/state-management" },
  openGraph: {
    type: "article",
    url: "/full-stack-javascript/articles/state-management",
    title: "State Management: Context API & Redux",
    description: "Master state management in React applications with Context API and Redux.",
  },
};

const NAV_LINKS = [
  { href: "/#programs", label: "Programs" },
  { href: "/internship", label: "Internship" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
  { href: "/full-stack-javascript", label: "Learn JavaScript", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "State Management: Context API & Redux",
  "description": "Complete guide to state management in React applications",
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

export default function FullStackJavascriptStateManagementPage() {
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
                {"State Management"}
              </span>
            </div>
            <h1>
              {"State Management"}
            </h1>
            <p className="article-subtitle">
              {"Context API & Redux"}
            </p>
            <div className="article-meta">
              <span className="article-date">
                {"Updated: December 2024"}
              </span>
              <span className="article-read-time">
                {"22 min read"}
              </span>
            </div>
          </div>
        </section>
        <article className="article-content">
          <div className="container">
            <div className="article-body">
              <section className="article-section">
                <h2>
                  {"Why State Management?"}
                </h2>
                <p>
                  {"As React applications grow, managing state becomes complex. Data needs to be shared across multiple components, and passing props through many levels (prop drilling) becomes tedious and error-prone."}
                </p>
                <div className="code-block">
                  <pre><code>{`The Problem: Prop Drilling

App
 └── Header
      └── UserMenu
           └── Avatar ← needs user data

Without state management:
- Pass user from App → Header → UserMenu → Avatar
- Every component in between must accept and forward props
- Changes require updating all intermediate components

With state management:
- Store user in global state
- Avatar accesses user directly
- No prop drilling needed

┌─────────────────────────────────────────┐
│  PROP DRILLING              GLOBAL STATE│
│                                         │
│  App (user) ───────┐    ┌── Store ──┐   │
│    │               │    │   user    │   │
│    ▼               │    └────┬──────┘   │
│  Header (user)     │         │          │
│    │               │    ┌────┴────┐     │
│    ▼               │    │         │     │
│  UserMenu (user)   │  App     Avatar    │
│    │               │    │     (reads)   │
│    ▼               │  Header            │
│  Avatar (user)     │    │               │
│                    │  UserMenu          │
│  4 levels!         │    │               │
│                    │  Avatar            │
│                    │                    │
│                    │  Direct access!    │
└─────────────────────────────────────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"State Management Options"}
                </h2>
                <div className="code-block">
                  <pre><code>{`React State Management Spectrum:

SIMPLE ◄─────────────────────────────────────► COMPLEX

useState    useReducer    Context API    Redux/Zustand
   │            │              │              │
   │            │              │              │
Local       Complex         Share          Large apps,
component   local state     state          time-travel,
state       with actions    across         middleware,
                           components      dev tools

When to use what:

✓ useState
  - Simple component state
  - Form inputs, toggles, counters
  - State used by one component

✓ useReducer
  - Complex state logic
  - Multiple sub-values
  - Next state depends on previous

✓ Context API
  - Theme, language preferences
  - Auth state (logged in user)
  - Shared across many components
  - Doesn't change frequently

✓ Redux/Zustand
  - Large applications
  - Complex state interactions
  - Need time-travel debugging
  - Frequently updated state
  - Team projects (predictable patterns)`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"useReducer: Complex Local State"}
                </h2>
                <p>
                  {"Before diving into global state, understand useReducer - it's the foundation for Redux-style state management."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { useReducer } from 'react';

// Reducer function: (state, action) => newState
function counterReducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };
        case 'DECREMENT':
            return { count: state.count - 1 };
        case 'RESET':
            return { count: 0 };
        case 'SET':
            return { count: action.payload };
        default:
            throw new Error(\`Unknown action: \${action.type}\`);
    }
}

function Counter() {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <p>Count: {state.count}</p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                +1
            </button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                -1
            </button>
            <button onClick={() => dispatch({ type: 'RESET' })}>
                Reset
            </button>
            <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>
                Set to 100
            </button>
        </div>
    );
}

// Real-world example: Form state
const initialFormState = {
    name: '',
    email: '',
    message: '',
    errors: {},
    isSubmitting: false,
    isSubmitted: false
};

function formReducer(state, action) {
    switch (action.type) {
        case 'SET_FIELD':
            return {
                ...state,
                [action.field]: action.value,
                errors: { ...state.errors, [action.field]: null }
            };
        case 'SET_ERRORS':
            return { ...state, errors: action.errors };
        case 'SUBMIT_START':
            return { ...state, isSubmitting: true };
        case 'SUBMIT_SUCCESS':
            return { ...initialFormState, isSubmitted: true };
        case 'SUBMIT_ERROR':
            return { ...state, isSubmitting: false, errors: action.errors };
        default:
            return state;
    }
}

function ContactForm() {
    const [state, dispatch] = useReducer(formReducer, initialFormState);

    const handleChange = (e) => {
        dispatch({
            type: 'SET_FIELD',
            field: e.target.name,
            value: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: 'SUBMIT_START' });

        try {
            await submitForm(state);
            dispatch({ type: 'SUBMIT_SUCCESS' });
        } catch (error) {
            dispatch({ type: 'SUBMIT_ERROR', errors: error.errors });
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                name="name"
                value={state.name}
                onChange={handleChange}
            />
            {state.errors.name && <span>{state.errors.name}</span>}
            {/* more fields... */}
            <button disabled={state.isSubmitting}>
                {state.isSubmitting ? 'Sending...' : 'Send'}
            </button>
        </form>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Context API: Share State Across Components"}
                </h2>
                <p>
                  {"Context provides a way to pass data through the component tree without manually passing props at every level."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { createContext, useContext, useState } from 'react';

// 1. Create Context
const ThemeContext = createContext(null);

// 2. Create Provider Component
function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    const value = {
        theme,
        toggleTheme,
        isDark: theme === 'dark'
    };

    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    );
}

// 3. Create Custom Hook (recommended)
function useTheme() {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within ThemeProvider');
    }
    return context;
}

// 4. Wrap App with Provider
function App() {
    return (
        <ThemeProvider>
            <Header />
            <Main />
            <Footer />
        </ThemeProvider>
    );
}

// 5. Use in any component
function Header() {
    const { theme, toggleTheme, isDark } = useTheme();

    return (
        <header className={isDark ? 'dark' : 'light'}>
            <h1>My App</h1>
            <button onClick={toggleTheme}>
                {isDark ? '☀️ Light' : '🌙 Dark'}
            </button>
        </header>
    );
}

// Works at any depth!
function DeepNestedComponent() {
    const { theme } = useTheme();  // Direct access
    return <div>Current theme: {theme}</div>;
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Context with useReducer: Scalable State"}
                </h2>
                <p>
                  {"Combine Context with useReducer for more complex, Redux-like state management."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { createContext, useContext, useReducer } from 'react';

// Types of actions
const ACTIONS = {
    ADD_TO_CART: 'ADD_TO_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    UPDATE_QUANTITY: 'UPDATE_QUANTITY',
    CLEAR_CART: 'CLEAR_CART'
};

// Initial state
const initialState = {
    items: [],
    total: 0
};

// Reducer
function cartReducer(state, action) {
    switch (action.type) {
        case ACTIONS.ADD_TO_CART: {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                return {
                    ...state,
                    items: state.items.map(item =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                    total: state.total + action.payload.price
                };
            }

            return {
                ...state,
                items: [...state.items, { ...action.payload, quantity: 1 }],
                total: state.total + action.payload.price
            };
        }

        case ACTIONS.REMOVE_FROM_CART: {
            const item = state.items.find(i => i.id === action.payload);
            return {
                ...state,
                items: state.items.filter(i => i.id !== action.payload),
                total: state.total - (item.price * item.quantity)
            };
        }

        case ACTIONS.UPDATE_QUANTITY: {
            const { id, quantity } = action.payload;
            const item = state.items.find(i => i.id === id);
            const quantityDiff = quantity - item.quantity;

            return {
                ...state,
                items: state.items.map(i =>
                    i.id === id ? { ...i, quantity } : i
                ),
                total: state.total + (item.price * quantityDiff)
            };
        }

        case ACTIONS.CLEAR_CART:
            return initialState;

        default:
            return state;
    }
}

// Context
const CartContext = createContext(null);

// Provider
function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    // Action creators
    const addToCart = (product) => {
        dispatch({ type: ACTIONS.ADD_TO_CART, payload: product });
    };

    const removeFromCart = (productId) => {
        dispatch({ type: ACTIONS.REMOVE_FROM_CART, payload: productId });
    };

    const updateQuantity = (productId, quantity) => {
        dispatch({
            type: ACTIONS.UPDATE_QUANTITY,
            payload: { id: productId, quantity }
        });
    };

    const clearCart = () => {
        dispatch({ type: ACTIONS.CLEAR_CART });
    };

    const value = {
        items: state.items,
        total: state.total,
        itemCount: state.items.reduce((sum, item) => sum + item.quantity, 0),
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart
    };

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    );
}

// Custom hook
function useCart() {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within CartProvider');
    }
    return context;
}

// Usage
function ProductCard({ product }) {
    const { addToCart } = useCart();

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>\${product.price}</p>
            <button onClick={() => addToCart(product)}>
                Add to Cart
            </button>
        </div>
    );
}

function CartIcon() {
    const { itemCount } = useCart();

    return (
        <div className="cart-icon">
            🛒 <span className="badge">{itemCount}</span>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Redux Toolkit: Industry Standard"}
                </h2>
                <p>
                  {"Redux Toolkit is the official, recommended way to write Redux logic. It simplifies store setup, reduces boilerplate, and includes useful utilities."}
                </p>
                <div className="code-block">
                  <pre><code>{`# Install Redux Toolkit and React-Redux
npm install @reduxjs/toolkit react-redux

// store/index.js - Create store
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './cartSlice';
import userReducer from './userSlice';

export const store = configureStore({
    reducer: {
        cart: cartReducer,
        user: userReducer
    }
});

// main.jsx - Provide store to app
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <App />
    </Provider>
);

// store/cartSlice.js - Create slice
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [],
    total: 0
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        // Immer allows "mutating" syntax (it's actually immutable)
        addItem: (state, action) => {
            const existingItem = state.items.find(
                item => item.id === action.payload.id
            );

            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.total += action.payload.price;
        },

        removeItem: (state, action) => {
            const index = state.items.findIndex(
                item => item.id === action.payload
            );
            if (index !== -1) {
                const item = state.items[index];
                state.total -= item.price * item.quantity;
                state.items.splice(index, 1);
            }
        },

        updateQuantity: (state, action) => {
            const { id, quantity } = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item) {
                state.total += (quantity - item.quantity) * item.price;
                item.quantity = quantity;
            }
        },

        clearCart: (state) => {
            state.items = [];
            state.total = 0;
        }
    }
});

// Export actions and reducer
export const { addItem, removeItem, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;

// Selectors
export const selectCartItems = (state) => state.cart.items;
export const selectCartTotal = (state) => state.cart.total;
export const selectCartItemCount = (state) =>
    state.cart.items.reduce((sum, item) => sum + item.quantity, 0);`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Using Redux in Components"}
                </h2>
                <div className="code-block">
                  <pre><code>{`import { useSelector, useDispatch } from 'react-redux';
import {
    addItem,
    removeItem,
    selectCartItems,
    selectCartTotal,
    selectCartItemCount
} from './store/cartSlice';

// Read state with useSelector
function CartSummary() {
    const items = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);
    const itemCount = useSelector(selectCartItemCount);

    return (
        <div className="cart-summary">
            <h2>Cart ({itemCount} items)</h2>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        {item.name} x {item.quantity} = \${item.price * item.quantity}
                    </li>
                ))}
            </ul>
            <p><strong>Total: \${total.toFixed(2)}</strong></p>
        </div>
    );
}

// Dispatch actions with useDispatch
function ProductCard({ product }) {
    const dispatch = useDispatch();

    const handleAddToCart = () => {
        dispatch(addItem(product));
    };

    return (
        <div className="product-card">
            <h3>{product.name}</h3>
            <p>\${product.price}</p>
            <button onClick={handleAddToCart}>
                Add to Cart
            </button>
        </div>
    );
}

function CartItem({ item }) {
    const dispatch = useDispatch();

    return (
        <div className="cart-item">
            <span>{item.name}</span>
            <span>Qty: {item.quantity}</span>
            <button onClick={() => dispatch(removeItem(item.id))}>
                Remove
            </button>
        </div>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Async Actions with createAsyncThunk"}
                </h2>
                <p>
                  {"Handle API calls and async operations with createAsyncThunk."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Async thunk for fetching users
export const fetchUsers = createAsyncThunk(
    'users/fetchUsers',  // Action type prefix
    async (_, { rejectWithValue }) => {
        try {
            const response = await fetch('/api/users');
            if (!response.ok) {
                throw new Error('Failed to fetch');
            }
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Async thunk with parameters
export const fetchUserById = createAsyncThunk(
    'users/fetchUserById',
    async (userId, { rejectWithValue }) => {
        try {
            const response = await fetch(\`/api/users/\${userId}\`);
            return await response.json();
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

// Slice with async handling
const usersSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        selectedUser: null,
        status: 'idle',  // 'idle' | 'loading' | 'succeeded' | 'failed'
        error: null
    },
    reducers: {
        clearSelectedUser: (state) => {
            state.selectedUser = null;
        }
    },
    extraReducers: (builder) => {
        builder
            // fetchUsers
            .addCase(fetchUsers.pending, (state) => {
                state.status = 'loading';
                state.error = null;
            })
            .addCase(fetchUsers.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.users = action.payload;
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.payload;
            })
            // fetchUserById
            .addCase(fetchUserById.fulfilled, (state, action) => {
                state.selectedUser = action.payload;
            });
    }
});

export const { clearSelectedUser } = usersSlice.actions;
export default usersSlice.reducer;

// Usage in component
function UserList() {
    const dispatch = useDispatch();
    const { users, status, error } = useSelector(state => state.users);

    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchUsers());
        }
    }, [status, dispatch]);

    if (status === 'loading') return <Spinner />;
    if (status === 'failed') return <Error message={error} />;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"RTK Query: Data Fetching Made Easy"}
                </h2>
                <p>
                  {"RTK Query is a powerful data fetching and caching tool built into Redux Toolkit."}
                </p>
                <div className="code-block">
                  <pre><code>{`import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define API slice
export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
    tagTypes: ['User', 'Post'],
    endpoints: (builder) => ({
        // Query endpoints (GET)
        getUsers: builder.query({
            query: () => '/users',
            providesTags: ['User']
        }),

        getUserById: builder.query({
            query: (id) => \`/users/\${id}\`,
            providesTags: (result, error, id) => [{ type: 'User', id }]
        }),

        // Mutation endpoints (POST, PUT, DELETE)
        addUser: builder.mutation({
            query: (newUser) => ({
                url: '/users',
                method: 'POST',
                body: newUser
            }),
            invalidatesTags: ['User']  // Refetch users after adding
        }),

        updateUser: builder.mutation({
            query: ({ id, ...updates }) => ({
                url: \`/users/\${id}\`,
                method: 'PUT',
                body: updates
            }),
            invalidatesTags: (result, error, { id }) => [{ type: 'User', id }]
        }),

        deleteUser: builder.mutation({
            query: (id) => ({
                url: \`/users/\${id}\`,
                method: 'DELETE'
            }),
            invalidatesTags: ['User']
        })
    })
});

// Export hooks (auto-generated)
export const {
    useGetUsersQuery,
    useGetUserByIdQuery,
    useAddUserMutation,
    useUpdateUserMutation,
    useDeleteUserMutation
} = apiSlice;

// Add to store
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from './apiSlice';

export const store = configureStore({
    reducer: {
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(apiSlice.middleware)
});

// Usage in components
function UserList() {
    const { data: users, isLoading, error } = useGetUsersQuery();

    if (isLoading) return <Spinner />;
    if (error) return <Error message={error.message} />;

    return (
        <ul>
            {users.map(user => (
                <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    );
}

function AddUserForm() {
    const [addUser, { isLoading }] = useAddUserMutation();

    const handleSubmit = async (userData) => {
        try {
            await addUser(userData).unwrap();
            // Success! List auto-refreshes due to invalidatesTags
        } catch (error) {
            console.error('Failed to add user:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {/* form fields */}
            <button disabled={isLoading}>
                {isLoading ? 'Adding...' : 'Add User'}
            </button>
        </form>
    );
}`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Context vs Redux: When to Use Which"}
                </h2>
                <div className="code-block">
                  <pre><code>{`CONTEXT API                          REDUX
─────────────────────────────────────────────────────────

PROS:                                PROS:
✓ Built into React                   ✓ Powerful DevTools
✓ Simple for small apps              ✓ Time-travel debugging
✓ No extra dependencies              ✓ Middleware support
✓ Good for infrequent updates        ✓ Optimized re-renders
                                     ✓ Large ecosystem

CONS:                                CONS:
✗ No DevTools                        ✗ Extra dependency
✗ Re-renders all consumers           ✗ More boilerplate
✗ Hard to debug                      ✗ Learning curve
✗ No middleware                      ✗ Overkill for small apps

USE CONTEXT FOR:                     USE REDUX FOR:
• Theme (light/dark)                 • E-commerce cart
• User preferences                   • Complex forms
• Language/locale                    • Real-time data
• Auth state (simple)                • Undo/redo features
• Small apps                         • Large team projects
• Prototype/MVP                      • Multiple data sources


Decision flowchart:

                 Start
                   │
        ┌─────────▼─────────┐
        │ State changes     │
        │ frequently?       │
        └─────────┬─────────┘
                  │
          ┌───────┴───────┐
          │               │
         YES             NO
          │               │
    ┌─────▼─────┐   ┌─────▼─────┐
    │  Redux/   │   │  Context  │
    │  Zustand  │   │    API    │
    └───────────┘   └───────────┘`}</code></pre>
                </div>
              </section>
              <section className="article-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <ul>
                  <li>
                    <strong>
                      {"Start simple:"}
                    </strong>
                    {" Begin with useState, add complexity only when needed"}
                  </li>
                  <li>
                    <strong>
                      {"Colocate state:"}
                    </strong>
                    {" Keep state as close to where it's used as possible"}
                  </li>
                  <li>
                    <strong>
                      {"Use selectors:"}
                    </strong>
                    {" Memoize selectors to prevent unnecessary re-renders"}
                  </li>
                  <li>
                    <strong>
                      {"Normalize state:"}
                    </strong>
                    {" Flatten nested data structures in Redux"}
                  </li>
                  <li>
                    <strong>
                      {"Split context:"}
                    </strong>
                    {" Separate frequently changing state from static state"}
                  </li>
                  <li>
                    <strong>
                      {"Use RTK Query:"}
                    </strong>
                    {" For server state, prefer RTK Query over manual fetching"}
                  </li>
                  <li>
                    <strong>
                      {"Avoid prop drilling:"}
                    </strong>
                    {" But don't reach for global state too early"}
                  </li>
                  <li>
                    <strong>
                      {"Document actions:"}
                    </strong>
                    {" Keep action names descriptive and consistent"}
                  </li>
                </ul>
              </section>
              <section className="article-section article-cta">
                <h2>
                  {"Master State Management"}
                </h2>
                <p>
                  {"Our Full Stack JavaScript program covers state management patterns in depth. Build scalable applications with expert guidance."}
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
                      {"Master React fundamentals"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/react-router" className="related-article-card">
                    <h4>
                      {"React Router"}
                    </h4>
                    {" "}
                    <p>
                      {"Navigation and routing"}
                    </p>
                  </Link>
                  <Link href="/full-stack-javascript/articles/typescript" className="related-article-card">
                    <h4>
                      {"TypeScript"}
                    </h4>
                    {" "}
                    <p>
                      {"Type-safe state management"}
                    </p>
                  </Link>
                </div>
              </section>
            </div>
          </div>
        </article>
      </main>

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I want to learn State Management."} />
    </>
  );
}
