import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "WebSockets & Real-Time Apps - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/websockets" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/websockets",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptWebsocketsPage() {
  return (
    <>
      <Navbar links={NAV_LINKS} />

      <main>
        <div className="container">
          <article className="article-content">
            <header className="article-header">
              <Link href="/full-stack-javascript" className="back-link">
                {"← Back to Full Stack JavaScript"}
              </Link>
              <h1>
                {"WebSockets & Real-Time Apps"}
              </h1>
              <p className="article-meta">
                {"Building real-time applications with Socket.IO"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Introduction to Real-Time Communication"}
              </h2>
              <p>
                {"WebSockets provide full-duplex communication channels over a single TCP connection, enabling real-time data transfer between clients and servers. Unlike HTTP, WebSockets maintain a persistent connection."}
              </p>
              <h3>
                {"HTTP vs WebSockets"}
              </h3>
              <pre><code>{`// HTTP Request-Response (Half-duplex)
Client → Request → Server
Client ← Response ← Server
// Connection closes after each request

// WebSocket (Full-duplex)
Client ←→ Server
// Persistent bi-directional connection
// Either party can send messages anytime`}</code></pre>
              <h3>
                {"When to Use WebSockets"}
              </h3>
              <pre><code>{`// Good use cases for WebSockets:
- Chat applications
- Live notifications
- Real-time collaboration (Google Docs, Figma)
- Live sports/stock tickers
- Multiplayer games
- Live location tracking

// When HTTP is sufficient:
- Static content
- Form submissions
- API calls that don't need real-time updates
- Infrequent data updates`}</code></pre>
              <h2>
                {"Socket.IO Basics"}
              </h2>
              <h3>
                {"Server Setup"}
              </h3>
              <pre><code>{`// Install dependencies
// npm install express socket.io

// server.js
const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

// Connection event
io.on('connection', (socket) => {
  console.log('User connected:', socket.id);

  // Listen for events from client
  socket.on('message', (data) => {
    console.log('Received:', data);

    // Send to sender only
    socket.emit('message-received', { status: 'ok' });

    // Broadcast to all except sender
    socket.broadcast.emit('new-message', data);

    // Send to everyone including sender
    io.emit('message', data);
  });

  // Handle disconnection
  socket.on('disconnect', (reason) => {
    console.log('User disconnected:', socket.id, reason);
  });
});

httpServer.listen(4000, () => {
  console.log('Server running on port 4000');
});`}</code></pre>
              <h3>
                {"Client Setup"}
              </h3>
              <pre><code>{`// Install: npm install socket.io-client

// src/socket.js
import { io } from 'socket.io-client';

const SOCKET_URL = process.env.REACT_APP_SOCKET_URL || 'http://localhost:4000';

export const socket = io(SOCKET_URL, {
  autoConnect: false, // Manual connection control
  withCredentials: true,
  transports: ['websocket', 'polling'], // Prefer WebSocket
});

// Connection management
export const connectSocket = (token) => {
  socket.auth = { token };
  socket.connect();
};

export const disconnectSocket = () => {
  socket.disconnect();
};

// src/App.jsx
import { useEffect } from 'react';
import { socket, connectSocket, disconnectSocket } from './socket';

function App() {
  useEffect(() => {
    // Connect when component mounts
    connectSocket();

    // Connection events
    socket.on('connect', () => {
      console.log('Connected:', socket.id);
    });

    socket.on('disconnect', (reason) => {
      console.log('Disconnected:', reason);
    });

    socket.on('connect_error', (error) => {
      console.error('Connection error:', error);
    });

    // Cleanup on unmount
    return () => {
      disconnectSocket();
    };
  }, []);

  return <div>{/* App content */}</div>;
}`}</code></pre>
              <h2>
                {"Building a Chat Application"}
              </h2>
              <h3>
                {"Server Implementation"}
              </h3>
              <pre><code>{`// server/chat.js
const users = new Map();
const rooms = new Map();

function setupChatHandlers(io) {
  io.on('connection', (socket) => {
    let currentUser = null;
    let currentRoom = null;

    // User joins chat
    socket.on('join', ({ username, room }) => {
      currentUser = { id: socket.id, username };
      currentRoom = room;

      // Store user
      users.set(socket.id, currentUser);

      // Join room
      socket.join(room);

      // Initialize room if needed
      if (!rooms.has(room)) {
        rooms.set(room, { users: [], messages: [] });
      }
      rooms.get(room).users.push(currentUser);

      // Notify room
      socket.to(room).emit('user-joined', {
        user: currentUser,
        message: \`\${username} joined the chat\`,
      });

      // Send room info to user
      socket.emit('room-info', {
        room,
        users: rooms.get(room).users,
        recentMessages: rooms.get(room).messages.slice(-50),
      });
    });

    // Handle messages
    socket.on('send-message', ({ content, room }) => {
      const message = {
        id: Date.now(),
        content,
        sender: currentUser,
        timestamp: new Date().toISOString(),
        room,
      };

      // Store message
      if (rooms.has(room)) {
        rooms.get(room).messages.push(message);
      }

      // Broadcast to room
      io.to(room).emit('new-message', message);
    });

    // Typing indicator
    socket.on('typing-start', ({ room }) => {
      socket.to(room).emit('user-typing', {
        user: currentUser,
        isTyping: true,
      });
    });

    socket.on('typing-stop', ({ room }) => {
      socket.to(room).emit('user-typing', {
        user: currentUser,
        isTyping: false,
      });
    });

    // Leave room
    socket.on('leave-room', () => {
      if (currentRoom && currentUser) {
        handleLeave();
      }
    });

    // Disconnect
    socket.on('disconnect', () => {
      if (currentRoom && currentUser) {
        handleLeave();
      }
      users.delete(socket.id);
    });

    function handleLeave() {
      socket.leave(currentRoom);

      if (rooms.has(currentRoom)) {
        const room = rooms.get(currentRoom);
        room.users = room.users.filter(u => u.id !== socket.id);

        socket.to(currentRoom).emit('user-left', {
          user: currentUser,
          message: \`\${currentUser.username} left the chat\`,
        });
      }
    }
  });
}

module.exports = { setupChatHandlers };`}</code></pre>
              <h3>
                {"React Chat Component"}
              </h3>
              <pre><code>{`// src/components/Chat.jsx
import { useState, useEffect, useRef, useCallback } from 'react';
import { socket } from '../socket';

function Chat({ username, room }) {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [typingUsers, setTypingUsers] = useState([]);
  const [users, setUsers] = useState([]);
  const messagesEndRef = useRef(null);
  const typingTimeoutRef = useRef(null);

  // Auto-scroll to bottom
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Join room on mount
  useEffect(() => {
    socket.emit('join', { username, room });

    return () => {
      socket.emit('leave-room');
    };
  }, [username, room]);

  // Socket event listeners
  useEffect(() => {
    const handleRoomInfo = ({ users, recentMessages }) => {
      setUsers(users);
      setMessages(recentMessages);
    };

    const handleNewMessage = (message) => {
      setMessages(prev => [...prev, message]);
    };

    const handleUserJoined = ({ user }) => {
      setUsers(prev => [...prev, user]);
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'system',
        content: \`\${user.username} joined the chat\`,
      }]);
    };

    const handleUserLeft = ({ user }) => {
      setUsers(prev => prev.filter(u => u.id !== user.id));
      setMessages(prev => [...prev, {
        id: Date.now(),
        type: 'system',
        content: \`\${user.username} left the chat\`,
      }]);
    };

    const handleUserTyping = ({ user, isTyping }) => {
      setTypingUsers(prev => {
        if (isTyping) {
          if (!prev.find(u => u.id === user.id)) {
            return [...prev, user];
          }
        } else {
          return prev.filter(u => u.id !== user.id);
        }
        return prev;
      });
    };

    socket.on('room-info', handleRoomInfo);
    socket.on('new-message', handleNewMessage);
    socket.on('user-joined', handleUserJoined);
    socket.on('user-left', handleUserLeft);
    socket.on('user-typing', handleUserTyping);

    return () => {
      socket.off('room-info', handleRoomInfo);
      socket.off('new-message', handleNewMessage);
      socket.off('user-joined', handleUserJoined);
      socket.off('user-left', handleUserLeft);
      socket.off('user-typing', handleUserTyping);
    };
  }, []);

  // Handle typing indicator
  const handleTyping = useCallback(() => {
    socket.emit('typing-start', { room });

    // Clear existing timeout
    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current);
    }

    // Stop typing after 2 seconds of inactivity
    typingTimeoutRef.current = setTimeout(() => {
      socket.emit('typing-stop', { room });
    }, 2000);
  }, [room]);

  // Send message
  const sendMessage = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    socket.emit('send-message', {
      content: inputValue,
      room,
    });

    socket.emit('typing-stop', { room });
    setInputValue('');
  };

  return (
    <div className="chat-container">
      {/* Users sidebar */}
      <aside className="users-sidebar">
        <h3>Users ({users.length})</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>
              {user.username}
              {user.id === socket.id && ' (you)'}
            </li>
          ))}
        </ul>
      </aside>

      {/* Messages */}
      <main className="messages-area">
        <div className="messages-list">
          {messages.map(message => (
            <div
              key={message.id}
              className={\`message \${
                message.type === 'system' ? 'system' :
                message.sender?.id === socket.id ? 'sent' : 'received'
              }\`}
            >
              {message.type !== 'system' && (
                <span className="sender">{message.sender.username}</span>
              )}
              <p>{message.content}</p>
              {message.timestamp && (
                <span className="time">
                  {new Date(message.timestamp).toLocaleTimeString()}
                </span>
              )}
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Typing indicator */}
        {typingUsers.length > 0 && (
          <div className="typing-indicator">
            {typingUsers.map(u => u.username).join(', ')}{' '}
            {typingUsers.length === 1 ? 'is' : 'are'} typing...
          </div>
        )}

        {/* Input form */}
        <form onSubmit={sendMessage} className="message-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              setInputValue(e.target.value);
              handleTyping();
            }}
            placeholder="Type a message..."
          />
          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}`}</code></pre>
              <h2>
                {"Rooms and Namespaces"}
              </h2>
              <h3>
                {"Working with Rooms"}
              </h3>
              <pre><code>{`// Rooms - subdivisions within a namespace
io.on('connection', (socket) => {
  // Join a room
  socket.join('room-123');
  socket.join(['room-A', 'room-B']); // Join multiple

  // Leave a room
  socket.leave('room-123');

  // Emit to a room
  io.to('room-123').emit('event', data);

  // Emit to multiple rooms
  io.to('room-A').to('room-B').emit('event', data);

  // Emit to room except sender
  socket.to('room-123').emit('event', data);

  // Get all sockets in a room
  const sockets = await io.in('room-123').fetchSockets();

  // Get rooms a socket is in
  console.log(socket.rooms); // Set { socket.id, 'room-123' }
});

// Example: Private messaging
socket.on('private-message', async ({ to, content }) => {
  const targetSocket = await io.in(to).fetchSockets();
  if (targetSocket.length) {
    io.to(to).emit('private-message', {
      from: socket.id,
      content,
    });
  }
});`}</code></pre>
              <h3>
                {"Namespaces"}
              </h3>
              <pre><code>{`// Namespaces - separate communication channels
const io = new Server(httpServer);

// Default namespace
io.on('connection', (socket) => {
  // handles connections to /
});

// Chat namespace
const chatNamespace = io.of('/chat');
chatNamespace.on('connection', (socket) => {
  console.log('Connected to chat namespace');
  // Chat-specific events
});

// Admin namespace with authentication
const adminNamespace = io.of('/admin');
adminNamespace.use((socket, next) => {
  const token = socket.handshake.auth.token;
  if (verifyAdminToken(token)) {
    next();
  } else {
    next(new Error('Unauthorized'));
  }
});

adminNamespace.on('connection', (socket) => {
  console.log('Admin connected');
  // Admin-only events
});

// Client connecting to namespaces
const chatSocket = io('http://localhost:4000/chat');
const adminSocket = io('http://localhost:4000/admin', {
  auth: { token: adminToken }
});`}</code></pre>
              <h2>
                {"Authentication with Socket.IO"}
              </h2>
              <pre><code>{`// Server-side authentication middleware
const jwt = require('jsonwebtoken');

io.use((socket, next) => {
  const token = socket.handshake.auth.token;

  if (!token) {
    return next(new Error('Authentication required'));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error('Invalid token'));
  }
});

io.on('connection', (socket) => {
  console.log('User connected:', socket.user.username);

  // User-specific room (for private messages)
  socket.join(\`user:\${socket.user.id}\`);
});

// Client-side
import { io } from 'socket.io-client';

const socket = io('http://localhost:4000', {
  auth: {
    token: localStorage.getItem('token'),
  },
});

// Handle auth errors
socket.on('connect_error', (err) => {
  if (err.message === 'Authentication required') {
    // Redirect to login
    window.location.href = '/login';
  }
});

// Reconnect with new token after refresh
socket.auth = { token: newToken };
socket.connect();`}</code></pre>
              <h2>
                {"Real-Time Notifications"}
              </h2>
              <pre><code>{`// server/notifications.js
const notifications = new Map(); // userId -> notifications[]

function setupNotifications(io) {
  io.on('connection', (socket) => {
    const userId = socket.user.id;

    // Send pending notifications
    if (notifications.has(userId)) {
      socket.emit('pending-notifications', notifications.get(userId));
    }

    // Mark as read
    socket.on('notification-read', (notificationId) => {
      const userNotifs = notifications.get(userId) || [];
      const notif = userNotifs.find(n => n.id === notificationId);
      if (notif) {
        notif.read = true;
      }
    });

    // Mark all as read
    socket.on('notifications-read-all', () => {
      const userNotifs = notifications.get(userId) || [];
      userNotifs.forEach(n => n.read = true);
    });
  });
}

// Send notification to user (from anywhere in app)
function sendNotification(io, userId, notification) {
  const notif = {
    id: Date.now(),
    ...notification,
    read: false,
    createdAt: new Date().toISOString(),
  };

  // Store notification
  if (!notifications.has(userId)) {
    notifications.set(userId, []);
  }
  notifications.get(userId).push(notif);

  // Send to user if online
  io.to(\`user:\${userId}\`).emit('notification', notif);
}

// React Notifications Component
function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [unreadCount, setUnreadCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    socket.on('pending-notifications', (notifs) => {
      setNotifications(notifs);
      setUnreadCount(notifs.filter(n => !n.read).length);
    });

    socket.on('notification', (notif) => {
      setNotifications(prev => [notif, ...prev]);
      setUnreadCount(prev => prev + 1);

      // Show browser notification
      if (Notification.permission === 'granted') {
        new Notification(notif.title, {
          body: notif.message,
          icon: '/notification-icon.png',
        });
      }
    });

    return () => {
      socket.off('pending-notifications');
      socket.off('notification');
    };
  }, []);

  const markAllRead = () => {
    socket.emit('notifications-read-all');
    setNotifications(prev => prev.map(n => ({ ...n, read: true })));
    setUnreadCount(0);
  };

  return (
    <div className="notifications">
      <button onClick={() => setIsOpen(!isOpen)}>
        🔔 {unreadCount > 0 && <span>{unreadCount}</span>}
      </button>

      {isOpen && (
        <div className="notification-dropdown">
          <header>
            <h3>Notifications</h3>
            <button onClick={markAllRead}>Mark all read</button>
          </header>
          <ul>
            {notifications.map(notif => (
              <li key={notif.id} className={notif.read ? '' : 'unread'}>
                <strong>{notif.title}</strong>
                <p>{notif.message}</p>
                <time>{formatTime(notif.createdAt)}</time>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}`}</code></pre>
              <h2>
                {"Real-Time Collaboration"}
              </h2>
              <pre><code>{`// Collaborative document editing (simplified)
const documents = new Map();

io.on('connection', (socket) => {
  let currentDoc = null;

  socket.on('join-document', async (docId) => {
    currentDoc = docId;
    socket.join(\`doc:\${docId}\`);

    // Initialize document
    if (!documents.has(docId)) {
      const doc = await Document.findById(docId);
      documents.set(docId, {
        content: doc.content,
        cursors: new Map(),
        selections: new Map(),
      });
    }

    const doc = documents.get(docId);
    doc.cursors.set(socket.id, { user: socket.user, position: 0 });

    // Send current state
    socket.emit('document-state', {
      content: doc.content,
      cursors: Array.from(doc.cursors.entries()),
    });

    // Notify others
    socket.to(\`doc:\${docId}\`).emit('user-joined-document', {
      socketId: socket.id,
      user: socket.user,
    });
  });

  // Handle text changes (Operational Transformation simplified)
  socket.on('text-change', ({ docId, delta, version }) => {
    const doc = documents.get(docId);
    if (!doc) return;

    // Apply delta to document
    doc.content = applyDelta(doc.content, delta);

    // Broadcast to others
    socket.to(\`doc:\${docId}\`).emit('text-change', {
      delta,
      author: socket.user,
      version: version + 1,
    });
  });

  // Cursor position updates
  socket.on('cursor-move', ({ docId, position }) => {
    const doc = documents.get(docId);
    if (!doc) return;

    doc.cursors.set(socket.id, { user: socket.user, position });

    socket.to(\`doc:\${docId}\`).emit('cursor-update', {
      socketId: socket.id,
      user: socket.user,
      position,
    });
  });

  // Selection changes
  socket.on('selection-change', ({ docId, selection }) => {
    socket.to(\`doc:\${docId}\`).emit('selection-update', {
      socketId: socket.id,
      user: socket.user,
      selection,
    });
  });

  socket.on('disconnect', () => {
    if (currentDoc) {
      const doc = documents.get(currentDoc);
      if (doc) {
        doc.cursors.delete(socket.id);
        doc.selections.delete(socket.id);
      }
      io.to(\`doc:\${currentDoc}\`).emit('user-left-document', {
        socketId: socket.id,
      });
    }
  });
});`}</code></pre>
              <h2>
                {"Custom React Hook for Socket.IO"}
              </h2>
              <pre><code>{`// src/hooks/useSocket.js
import { useEffect, useCallback, useState, useRef } from 'react';
import { socket } from '../socket';

export function useSocket(eventName, callback) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    const handler = (...args) => savedCallback.current(...args);
    socket.on(eventName, handler);
    return () => socket.off(eventName, handler);
  }, [eventName]);
}

export function useSocketEmit() {
  const emit = useCallback((event, data) => {
    return new Promise((resolve, reject) => {
      socket.emit(event, data, (response) => {
        if (response.error) {
          reject(response.error);
        } else {
          resolve(response);
        }
      });
    });
  }, []);

  return emit;
}

export function useSocketRoom(room) {
  const [isJoined, setIsJoined] = useState(false);
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    socket.emit('join-room', room, (response) => {
      if (response.error) {
        setError(response.error);
      } else {
        setIsJoined(true);
        setUsers(response.users);
      }
    });

    socket.on('room-users-update', setUsers);

    return () => {
      socket.emit('leave-room', room);
      socket.off('room-users-update', setUsers);
    };
  }, [room]);

  return { isJoined, users, error };
}

// Usage
function ChatRoom({ room }) {
  const [messages, setMessages] = useState([]);
  const { isJoined, users, error } = useSocketRoom(room);
  const emit = useSocketEmit();

  useSocket('new-message', (message) => {
    setMessages(prev => [...prev, message]);
  });

  const sendMessage = async (content) => {
    try {
      await emit('send-message', { room, content });
    } catch (err) {
      console.error('Failed to send:', err);
    }
  };

  if (error) return <div>Error: {error}</div>;
  if (!isJoined) return <div>Connecting...</div>;

  return (
    <div>
      <UsersList users={users} />
      <MessagesList messages={messages} />
      <MessageInput onSend={sendMessage} />
    </div>
  );
}`}</code></pre>
              <h2>
                {"Error Handling & Reconnection"}
              </h2>
              <pre><code>{`// Server-side error handling
io.on('connection', (socket) => {
  // Wrap handlers with error handling
  const withErrorHandler = (handler) => async (...args) => {
    try {
      await handler(...args);
    } catch (error) {
      console.error('Socket error:', error);
      socket.emit('error', {
        message: error.message,
        code: error.code || 'INTERNAL_ERROR',
      });
    }
  };

  socket.on('action', withErrorHandler(async (data, callback) => {
    // ... handle action
    callback({ success: true });
  }));
});

// Client-side reconnection handling
socket.on('connect', () => {
  console.log('Connected');

  // Rejoin rooms after reconnection
  if (currentRoom) {
    socket.emit('join', { room: currentRoom });
  }
});

socket.on('disconnect', (reason) => {
  console.log('Disconnected:', reason);

  if (reason === 'io server disconnect') {
    // Server disconnected us, need to reconnect manually
    socket.connect();
  }
  // Otherwise Socket.IO will try to reconnect automatically
});

socket.on('reconnect', (attemptNumber) => {
  console.log('Reconnected after', attemptNumber, 'attempts');
});

socket.on('reconnect_attempt', (attemptNumber) => {
  console.log('Reconnection attempt', attemptNumber);
});

socket.on('reconnect_error', (error) => {
  console.log('Reconnection error:', error);
});

socket.on('reconnect_failed', () => {
  console.log('Reconnection failed');
  // Show user a "connection lost" UI
});

// Custom reconnection strategy
const socket = io(URL, {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,
  reconnectionDelayMax: 5000,
  randomizationFactor: 0.5,
});`}</code></pre>
              <h2>
                {"Scaling with Redis"}
              </h2>
              <pre><code>{`// npm install @socket.io/redis-adapter redis

const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

async function setupRedisAdapter(io) {
  const pubClient = createClient({ url: process.env.REDIS_URL });
  const subClient = pubClient.duplicate();

  await Promise.all([pubClient.connect(), subClient.connect()]);

  io.adapter(createAdapter(pubClient, subClient));

  console.log('Socket.IO Redis adapter configured');
}

// Now Socket.IO events work across multiple servers
// Each server connects to the same Redis instance

// Broadcasting from any server reaches all clients
io.emit('global-event', data);

// Room-based events also work across servers
io.to('room-123').emit('room-event', data);

// Sticky sessions are recommended for connection stability
// Configure your load balancer accordingly`}</code></pre>
              <h2>
                {"Best Practices"}
              </h2>
              <pre><code>{`// 1. Always clean up listeners
useEffect(() => {
  socket.on('event', handler);
  return () => socket.off('event', handler);
}, []);

// 2. Use acknowledgments for important actions
socket.emit('critical-action', data, (response) => {
  if (response.success) {
    // Handle success
  } else {
    // Handle failure, maybe retry
  }
});

// 3. Implement heartbeat/ping-pong
const socket = io(URL, {
  pingTimeout: 60000,
  pingInterval: 25000,
});

// 4. Rate limiting on server
const rateLimiter = new Map();

socket.on('message', (data) => {
  const userId = socket.user.id;
  const now = Date.now();
  const userRate = rateLimiter.get(userId) || { count: 0, reset: now + 60000 };

  if (now > userRate.reset) {
    userRate.count = 0;
    userRate.reset = now + 60000;
  }

  if (userRate.count >= 100) {
    socket.emit('error', { message: 'Rate limit exceeded' });
    return;
  }

  userRate.count++;
  rateLimiter.set(userId, userRate);

  // Process message...
});

// 5. Validate all incoming data
const Joi = require('joi');

const messageSchema = Joi.object({
  content: Joi.string().max(1000).required(),
  room: Joi.string().required(),
});

socket.on('message', async (data) => {
  const { error, value } = messageSchema.validate(data);
  if (error) {
    socket.emit('error', { message: error.message });
    return;
  }
  // Process validated data...
});`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"WebSockets enable real-time bi-directional communication"}
                  </li>
                  <li>
                    {"Socket.IO simplifies WebSocket implementation with fallbacks"}
                  </li>
                  <li>
                    {"Rooms allow broadcasting to specific groups of clients"}
                  </li>
                  <li>
                    {"Namespaces separate different communication channels"}
                  </li>
                  <li>
                    {"Always implement authentication for production apps"}
                  </li>
                  <li>
                    {"Use Redis adapter for horizontal scaling"}
                  </li>
                  <li>
                    {"Clean up event listeners to prevent memory leaks"}
                  </li>
                  <li>
                    {"Implement proper error handling and reconnection logic"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/graphql" className="prev-article">
                {"← GraphQL & Apollo"}
              </Link>
              <Link href="/full-stack-javascript/articles/async-programming" className="next-article">
                {"Async Programming →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
