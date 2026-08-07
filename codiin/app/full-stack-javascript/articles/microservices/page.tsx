import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Microservices - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/microservices" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/microservices",
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

export default function FullStackJavascriptMicroservicesPage() {
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
                {"Microservices Architecture"}
              </h1>
              <p className="article-meta">
                {"Building scalable applications with microservices"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Introduction to Microservices"}
              </h2>
              <p>
                {"Microservices architecture structures an application as a collection of loosely coupled services. Each service is independently deployable, scalable, and maintainable, focusing on a specific business capability."}
              </p>
              <h3>
                {"Monolith vs Microservices"}
              </h3>
              <pre><code>{`// Monolithic Architecture
┌─────────────────────────────────┐
│           Monolith              │
│  ┌─────┐ ┌─────┐ ┌─────────┐   │
│  │Users│ │Order│ │Inventory│   │
│  └─────┘ └─────┘ └─────────┘   │
│         Single Database         │
└─────────────────────────────────┘

// Microservices Architecture
┌─────────┐  ┌─────────┐  ┌───────────┐
│  Users  │  │  Order  │  │ Inventory │
│ Service │  │ Service │  │  Service  │
│   DB    │  │   DB    │  │    DB     │
└─────────┘  └─────────┘  └───────────┘
     ↑            ↑             ↑
     └────────────┴─────────────┘
              API Gateway`}</code></pre>
              <h3>
                {"When to Use Microservices"}
              </h3>
              <pre><code>{`// Good fit:
- Large, complex applications
- Teams that need to work independently
- Services with different scaling requirements
- Need for technology diversity
- Frequent deployments of specific features

// Not ideal for:
- Small applications/teams
- Early-stage startups (start monolith, extract later)
- Simple CRUD applications
- Teams without DevOps expertise`}</code></pre>
              <h2>
                {"Service Design"}
              </h2>
              <h3>
                {"Basic Service Structure"}
              </h3>
              <pre><code>{`// user-service/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── services/
│   │   └── userService.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── middleware/
│   │   └── auth.js
│   ├── events/
│   │   ├── publishers.js
│   │   └── subscribers.js
│   └── index.js
├── Dockerfile
├── package.json
└── .env

// user-service/src/index.js
const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const { connectMessageBroker } = require('./events/subscribers');

const app = express();

app.use(express.json());
app.use('/api/users', userRoutes);

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'healthy', service: 'user-service' });
});

async function start() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    await connectMessageBroker();
    console.log('Connected to message broker');

    app.listen(process.env.PORT || 3001, () => {
      console.log('User service running on port', process.env.PORT || 3001);
    });
  } catch (error) {
    console.error('Failed to start service:', error);
    process.exit(1);
  }
}

start();`}</code></pre>
              <h2>
                {"API Gateway"}
              </h2>
              <h3>
                {"Express Gateway"}
              </h3>
              <pre><code>{`// gateway/src/index.js
const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const rateLimit = require('express-rate-limit');

const app = express();

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Service routes
const services = {
  users: process.env.USER_SERVICE_URL || 'http://user-service:3001',
  orders: process.env.ORDER_SERVICE_URL || 'http://order-service:3002',
  products: process.env.PRODUCT_SERVICE_URL || 'http://product-service:3003',
};

// Proxy middleware
app.use('/api/users', createProxyMiddleware({
  target: services.users,
  changeOrigin: true,
  pathRewrite: { '^/api/users': '/api/users' },
}));

app.use('/api/orders', createProxyMiddleware({
  target: services.orders,
  changeOrigin: true,
}));

app.use('/api/products', createProxyMiddleware({
  target: services.products,
  changeOrigin: true,
}));

// Authentication middleware for protected routes
const authenticateToken = require('./middleware/auth');
app.use('/api/orders', authenticateToken);

// Aggregate endpoint (BFF pattern)
app.get('/api/dashboard', authenticateToken, async (req, res) => {
  try {
    const [user, orders, recentProducts] = await Promise.all([
      fetch(\`\${services.users}/api/users/\${req.user.id}\`).then(r => r.json()),
      fetch(\`\${services.orders}/api/orders/user/\${req.user.id}\`).then(r => r.json()),
      fetch(\`\${services.products}/api/products/recent\`).then(r => r.json()),
    ]);

    res.json({ user, orders, recentProducts });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch dashboard data' });
  }
});

app.listen(3000, () => console.log('Gateway running on port 3000'));`}</code></pre>
              <h2>
                {"Inter-Service Communication"}
              </h2>
              <h3>
                {"Synchronous (HTTP/REST)"}
              </h3>
              <pre><code>{`// services/httpClient.js
const axios = require('axios');

const serviceUrls = {
  users: process.env.USER_SERVICE_URL,
  orders: process.env.ORDER_SERVICE_URL,
  inventory: process.env.INVENTORY_SERVICE_URL,
};

const createServiceClient = (serviceName) => {
  const client = axios.create({
    baseURL: serviceUrls[serviceName],
    timeout: 5000,
  });

  // Retry logic
  client.interceptors.response.use(null, async (error) => {
    const { config } = error;
    if (!config || config.__retryCount >= 3) {
      return Promise.reject(error);
    }

    config.__retryCount = config.__retryCount || 0;
    config.__retryCount++;

    await new Promise(r => setTimeout(r, 1000 * config.__retryCount));
    return client(config);
  });

  return client;
};

const userService = createServiceClient('users');
const inventoryService = createServiceClient('inventory');

// Usage in order service
async function createOrder(orderData) {
  // Check inventory
  const { data: inventory } = await inventoryService.get(
    \`/api/inventory/\${orderData.productId}\`
  );

  if (inventory.quantity < orderData.quantity) {
    throw new Error('Insufficient inventory');
  }

  // Create order
  const order = await Order.create(orderData);

  // Update inventory
  await inventoryService.patch(\`/api/inventory/\${orderData.productId}\`, {
    quantity: inventory.quantity - orderData.quantity,
  });

  return order;
}`}</code></pre>
              <h3>
                {"Asynchronous (Message Queue)"}
              </h3>
              <pre><code>{`# Install RabbitMQ client
npm install amqplib

// shared/messageQueue.js
const amqp = require('amqplib');

let channel = null;

async function connect() {
  const connection = await amqp.connect(process.env.RABBITMQ_URL);
  channel = await connection.createChannel();

  // Handle connection errors
  connection.on('error', (err) => {
    console.error('RabbitMQ connection error:', err);
    setTimeout(connect, 5000);
  });

  return channel;
}

async function publishEvent(exchange, routingKey, message) {
  if (!channel) await connect();

  await channel.assertExchange(exchange, 'topic', { durable: true });

  channel.publish(
    exchange,
    routingKey,
    Buffer.from(JSON.stringify(message)),
    { persistent: true }
  );
}

async function subscribeToEvent(exchange, queue, routingKey, handler) {
  if (!channel) await connect();

  await channel.assertExchange(exchange, 'topic', { durable: true });
  await channel.assertQueue(queue, { durable: true });
  await channel.bindQueue(queue, exchange, routingKey);

  channel.consume(queue, async (msg) => {
    try {
      const data = JSON.parse(msg.content.toString());
      await handler(data);
      channel.ack(msg);
    } catch (error) {
      console.error('Message processing error:', error);
      // Reject and requeue on failure
      channel.nack(msg, false, true);
    }
  });
}

module.exports = { connect, publishEvent, subscribeToEvent };

// order-service/events/publishers.js
const { publishEvent } = require('../shared/messageQueue');

async function publishOrderCreated(order) {
  await publishEvent('orders', 'order.created', {
    orderId: order._id,
    userId: order.userId,
    items: order.items,
    total: order.total,
    timestamp: new Date().toISOString(),
  });
}

async function publishOrderCancelled(orderId, reason) {
  await publishEvent('orders', 'order.cancelled', {
    orderId,
    reason,
    timestamp: new Date().toISOString(),
  });
}

// inventory-service/events/subscribers.js
const { subscribeToEvent } = require('../shared/messageQueue');
const Inventory = require('../models/Inventory');

async function setupSubscribers() {
  // Listen for order created events
  await subscribeToEvent(
    'orders',
    'inventory-order-created',
    'order.created',
    async (data) => {
      console.log('Processing order created event:', data.orderId);

      for (const item of data.items) {
        await Inventory.updateOne(
          { productId: item.productId },
          { $inc: { reserved: item.quantity } }
        );
      }
    }
  );

  // Listen for order cancelled events
  await subscribeToEvent(
    'orders',
    'inventory-order-cancelled',
    'order.cancelled',
    async (data) => {
      const order = await Order.findById(data.orderId);

      for (const item of order.items) {
        await Inventory.updateOne(
          { productId: item.productId },
          { $inc: { reserved: -item.quantity } }
        );
      }
    }
  );
}`}</code></pre>
              <h2>
                {"Service Discovery"}
              </h2>
              <pre><code>{`// Using Consul for service discovery
npm install consul

// shared/serviceRegistry.js
const Consul = require('consul');

const consul = new Consul({
  host: process.env.CONSUL_HOST || 'consul',
  port: process.env.CONSUL_PORT || 8500,
});

const SERVICE_ID = \`\${process.env.SERVICE_NAME}-\${process.env.HOSTNAME}\`;

async function registerService() {
  await consul.agent.service.register({
    id: SERVICE_ID,
    name: process.env.SERVICE_NAME,
    address: process.env.SERVICE_HOST,
    port: parseInt(process.env.PORT),
    check: {
      http: \`http://\${process.env.SERVICE_HOST}:\${process.env.PORT}/health\`,
      interval: '10s',
      timeout: '5s',
    },
  });

  console.log(\`Registered service: \${SERVICE_ID}\`);

  // Deregister on shutdown
  process.on('SIGTERM', async () => {
    await consul.agent.service.deregister(SERVICE_ID);
    process.exit(0);
  });
}

async function discoverService(serviceName) {
  const services = await consul.health.service({
    service: serviceName,
    passing: true,
  });

  if (services.length === 0) {
    throw new Error(\`No healthy instances of \${serviceName}\`);
  }

  // Simple round-robin load balancing
  const index = Math.floor(Math.random() * services.length);
  const service = services[index].Service;

  return \`http://\${service.Address}:\${service.Port}\`;
}

// Usage
async function callUserService(userId) {
  const userServiceUrl = await discoverService('user-service');
  const response = await fetch(\`\${userServiceUrl}/api/users/\${userId}\`);
  return response.json();
}`}</code></pre>
              <h2>
                {"Data Management"}
              </h2>
              <h3>
                {"Database per Service"}
              </h3>
              <pre><code>{`// Each service owns its data
// user-service → user_db
// order-service → order_db
// inventory-service → inventory_db

// Saga Pattern for distributed transactions
// order-service/sagas/createOrderSaga.js
class CreateOrderSaga {
  constructor(orderService, inventoryService, paymentService) {
    this.orderService = orderService;
    this.inventoryService = inventoryService;
    this.paymentService = paymentService;
  }

  async execute(orderData) {
    const steps = [];

    try {
      // Step 1: Create order in pending state
      const order = await this.orderService.createOrder(orderData);
      steps.push({ service: 'order', action: 'create', data: order });

      // Step 2: Reserve inventory
      await this.inventoryService.reserve(order.items);
      steps.push({ service: 'inventory', action: 'reserve', data: order.items });

      // Step 3: Process payment
      const payment = await this.paymentService.process(order);
      steps.push({ service: 'payment', action: 'charge', data: payment });

      // Step 4: Confirm order
      await this.orderService.confirmOrder(order._id);

      // Step 5: Update inventory (commit reservation)
      await this.inventoryService.commit(order.items);

      return order;
    } catch (error) {
      // Compensating transactions (rollback)
      await this.compensate(steps, error);
      throw error;
    }
  }

  async compensate(steps, error) {
    console.log('Compensating failed saga:', error.message);

    for (const step of steps.reverse()) {
      try {
        switch (step.service) {
          case 'order':
            await this.orderService.cancelOrder(step.data._id);
            break;
          case 'inventory':
            await this.inventoryService.release(step.data);
            break;
          case 'payment':
            await this.paymentService.refund(step.data);
            break;
        }
      } catch (compensateError) {
        console.error('Compensation failed:', compensateError);
        // Log for manual intervention
      }
    }
  }
}`}</code></pre>
              <h3>
                {"Event Sourcing"}
              </h3>
              <pre><code>{`// Event Store
// events/eventStore.js
class EventStore {
  constructor(db) {
    this.collection = db.collection('events');
  }

  async append(aggregateId, events) {
    const eventRecords = events.map((event, index) => ({
      aggregateId,
      eventType: event.type,
      data: event.data,
      timestamp: new Date(),
      version: index,
    }));

    await this.collection.insertMany(eventRecords);
  }

  async getEvents(aggregateId) {
    return this.collection
      .find({ aggregateId })
      .sort({ version: 1 })
      .toArray();
  }
}

// Order Aggregate
class OrderAggregate {
  constructor() {
    this.state = { status: 'new', items: [], total: 0 };
    this.events = [];
  }

  apply(event) {
    switch (event.type) {
      case 'OrderCreated':
        this.state = {
          ...this.state,
          id: event.data.orderId,
          items: event.data.items,
          total: event.data.total,
          status: 'pending',
        };
        break;
      case 'OrderConfirmed':
        this.state.status = 'confirmed';
        break;
      case 'OrderShipped':
        this.state.status = 'shipped';
        this.state.trackingNumber = event.data.trackingNumber;
        break;
      case 'OrderCancelled':
        this.state.status = 'cancelled';
        break;
    }
    return this;
  }

  // Rebuild state from events
  static async load(eventStore, orderId) {
    const events = await eventStore.getEvents(orderId);
    const aggregate = new OrderAggregate();

    for (const event of events) {
      aggregate.apply(event);
    }

    return aggregate;
  }
}`}</code></pre>
              <h2>
                {"Docker Compose Setup"}
              </h2>
              <pre><code>{`# docker-compose.yml
version: '3.8'

services:
  gateway:
    build: ./gateway
    ports:
      - "3000:3000"
    environment:
      - USER_SERVICE_URL=http://user-service:3001
      - ORDER_SERVICE_URL=http://order-service:3002
      - PRODUCT_SERVICE_URL=http://product-service:3003
    depends_on:
      - user-service
      - order-service
      - product-service

  user-service:
    build: ./user-service
    environment:
      - PORT=3001
      - MONGODB_URI=mongodb://mongo-users:27017/users
      - RABBITMQ_URL=amqp://rabbitmq:5672
    depends_on:
      - mongo-users
      - rabbitmq

  order-service:
    build: ./order-service
    environment:
      - PORT=3002
      - MONGODB_URI=mongodb://mongo-orders:27017/orders
      - RABBITMQ_URL=amqp://rabbitmq:5672
    depends_on:
      - mongo-orders
      - rabbitmq

  product-service:
    build: ./product-service
    environment:
      - PORT=3003
      - MONGODB_URI=mongodb://mongo-products:27017/products
      - RABBITMQ_URL=amqp://rabbitmq:5672
    depends_on:
      - mongo-products
      - rabbitmq

  # Databases (one per service)
  mongo-users:
    image: mongo:7
    volumes:
      - mongo-users-data:/data/db

  mongo-orders:
    image: mongo:7
    volumes:
      - mongo-orders-data:/data/db

  mongo-products:
    image: mongo:7
    volumes:
      - mongo-products-data:/data/db

  # Message broker
  rabbitmq:
    image: rabbitmq:3-management
    ports:
      - "15672:15672"  # Management UI
    volumes:
      - rabbitmq-data:/var/lib/rabbitmq

  # Monitoring
  prometheus:
    image: prom/prometheus
    ports:
      - "9090:9090"
    volumes:
      - ./prometheus.yml:/etc/prometheus/prometheus.yml

  grafana:
    image: grafana/grafana
    ports:
      - "3001:3000"
    depends_on:
      - prometheus

volumes:
  mongo-users-data:
  mongo-orders-data:
  mongo-products-data:
  rabbitmq-data:`}</code></pre>
              <h2>
                {"Observability"}
              </h2>
              <h3>
                {"Distributed Tracing"}
              </h3>
              <pre><code>{`// Using OpenTelemetry
npm install @opentelemetry/api @opentelemetry/sdk-node @opentelemetry/auto-instrumentations-node

// tracing.js
const { NodeSDK } = require('@opentelemetry/sdk-node');
const { getNodeAutoInstrumentations } = require('@opentelemetry/auto-instrumentations-node');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');

const sdk = new NodeSDK({
  serviceName: process.env.SERVICE_NAME,
  traceExporter: new JaegerExporter({
    endpoint: process.env.JAEGER_ENDPOINT,
  }),
  instrumentations: [getNodeAutoInstrumentations()],
});

sdk.start();

// Ensure graceful shutdown
process.on('SIGTERM', () => {
  sdk.shutdown().then(() => process.exit(0));
});

// Add custom spans
const { trace } = require('@opentelemetry/api');

async function processOrder(orderId) {
  const tracer = trace.getTracer('order-service');

  return tracer.startActiveSpan('processOrder', async (span) => {
    try {
      span.setAttribute('orderId', orderId);

      // Your business logic
      const result = await doProcessing(orderId);

      span.setStatus({ code: SpanStatusCode.OK });
      return result;
    } catch (error) {
      span.setStatus({ code: SpanStatusCode.ERROR, message: error.message });
      throw error;
    } finally {
      span.end();
    }
  });
}`}</code></pre>
              <h3>
                {"Health Checks"}
              </h3>
              <pre><code>{`// Comprehensive health check endpoint
app.get('/health', async (req, res) => {
  const health = {
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: process.env.SERVICE_NAME,
    version: process.env.npm_package_version,
    checks: {},
  };

  // Database check
  try {
    await mongoose.connection.db.admin().ping();
    health.checks.database = { status: 'healthy' };
  } catch (error) {
    health.checks.database = { status: 'unhealthy', error: error.message };
    health.status = 'unhealthy';
  }

  // Message broker check
  try {
    // Check RabbitMQ connection
    health.checks.messageBroker = { status: 'healthy' };
  } catch (error) {
    health.checks.messageBroker = { status: 'unhealthy', error: error.message };
    health.status = 'unhealthy';
  }

  // Memory check
  const memUsage = process.memoryUsage();
  health.checks.memory = {
    heapUsed: \`\${Math.round(memUsage.heapUsed / 1024 / 1024)}MB\`,
    heapTotal: \`\${Math.round(memUsage.heapTotal / 1024 / 1024)}MB\`,
  };

  const statusCode = health.status === 'healthy' ? 200 : 503;
  res.status(statusCode).json(health);
});

// Liveness probe (is the service running?)
app.get('/health/live', (req, res) => {
  res.json({ status: 'alive' });
});

// Readiness probe (is the service ready to accept traffic?)
app.get('/health/ready', async (req, res) => {
  try {
    await mongoose.connection.db.admin().ping();
    res.json({ status: 'ready' });
  } catch (error) {
    res.status(503).json({ status: 'not ready' });
  }
});`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Microservices enable independent deployment and scaling"}
                  </li>
                  <li>
                    {"Use an API Gateway for routing and cross-cutting concerns"}
                  </li>
                  <li>
                    {"Choose between sync (HTTP) and async (message queue) communication"}
                  </li>
                  <li>
                    {"Each service should own its data (database per service)"}
                  </li>
                  <li>
                    {"Use sagas for distributed transactions across services"}
                  </li>
                  <li>
                    {"Implement service discovery for dynamic environments"}
                  </li>
                  <li>
                    {"Add observability with logging, metrics, and tracing"}
                  </li>
                  <li>
                    {"Start with a monolith, extract services as needed"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/file-uploads" className="prev-article">
                {"← File Uploads"}
              </Link>
              <Link href="/full-stack-javascript/articles/performance" className="next-article">
                {"Performance Optimization →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
