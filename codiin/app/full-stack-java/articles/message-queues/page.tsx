import type { Metadata } from "next";
import Link from "next/link";
import JsonLd from "@/components/JsonLd";
import Navbar from "@/components/Navbar";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export const metadata: Metadata = {
  title: "Message Queues: RabbitMQ & Kafka for Java Developers",
  description: "Learn message queues with RabbitMQ and Apache Kafka in Java. Build scalable, event-driven applications with Spring Boot integration.",
  keywords: ["RabbitMQ Java", "Kafka Java", "message queues", "Spring AMQP", "event-driven architecture", "async messaging"],
  alternates: { canonical: "/full-stack-java/articles/message-queues" },
  openGraph: {
    type: "article",
    url: "/full-stack-java/articles/message-queues",
    title: "Message Queues: RabbitMQ & Kafka for Java | CODiiN",
    description: "Build event-driven Java applications with RabbitMQ and Kafka. Learn async messaging patterns.",
    images: ["/images/message-queues-og.jpg"],
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#about", label: "About" },
  { href: "/#programs", label: "Programs" },
  { href: "/#why-us", label: "Why Us" },
  { href: "/#contact", label: "Contact" },
  { href: "/#register", label: "Register Now", cta: true },
];

const SCHEMA_1 = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Message Queues: RabbitMQ & Kafka for Java Developers",
  "description": "Build event-driven applications with RabbitMQ and Kafka",
  "author": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "publisher": {
    "@type": "Organization",
    "name": "CODiiN Tech Mentors Lab"
  },
  "datePublished": "2024-12-27",
  "dateModified": "2024-12-27"
} as const;

export default function FullStackJavaMessageQueuesPage() {
  return (
    <>
      <JsonLd data={SCHEMA_1} />
      <Navbar links={NAV_LINKS} />

      <main>
        <section className="breadcrumb">
          <div className="container">
            <Link href="/">
              {"Home"}
            </Link>
            <span>
              {"/"}
            </span>
            <Link href="/full-stack-java">
              {"Full Stack Java"}
            </Link>
            <span>
              {"/"}
            </span>
            <span>
              {"Message Queues"}
            </span>
          </div>
        </section>
        <section className="article-hero">
          <div className="container">
            <h1>
              {"Message Queues in Java"}
            </h1>
            <p className="article-subtitle">
              {"Build Scalable, Event-Driven Applications with RabbitMQ and Apache Kafka"}
            </p>
          </div>
        </section>
        <section className="article-content">
          <div className="container">
            <div className="content-wrapper">
              <div className="concept-section">
                <h2>
                  {"Why Message Queues?"}
                </h2>
                <p>
                  {"Imagine a busy restaurant kitchen. Instead of waiters yelling orders directly at chefs (chaos!), they pin order tickets to a board. Chefs pick tickets when ready. If the kitchen is busy, tickets wait - no orders lost, no chaos."}
                </p>
                <p>
                  {"Message queues work the same way. Instead of services calling each other directly (and failing if one is down), they send messages to a queue. The receiver processes messages when ready."}
                </p>
                <div className="code-block">
                  <pre>{`
WITHOUT MESSAGE QUEUE:
User → Order Service → Payment Service → Email Service → Inventory Service
         ↓                    ↓              ↓                 ↓
    (If ANY fails, entire order fails! User waits for ALL to complete)

WITH MESSAGE QUEUE:
User → Order Service → [Queue] → Payment Service (async)
            ↓                → Email Service (async)
       (Returns immediately!)  → Inventory Service (async)

Result: Faster response, failure isolation, easy scaling!
`}</pre>
                </div>
                <div className="why-java-points">
                  <div className="why-point">
                    <h3>
                      {"Decoupling"}
                    </h3>
                    <p>
                      {"Services don't need to know about each other. Add new consumers without changing producers."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Reliability"}
                    </h3>
                    <p>
                      {"Messages persist in the queue. If a service is down, messages wait until it's back."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Scalability"}
                    </h3>
                    <p>
                      {"Add more consumers to handle traffic spikes. Queue absorbs the load."}
                    </p>
                  </div>
                  <div className="why-point">
                    <h3>
                      {"Async Processing"}
                    </h3>
                    <p>
                      {"Don't make users wait for slow operations. Process in background."}
                    </p>
                  </div>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"RabbitMQ: The Reliable Workhorse"}
                </h2>
                <p>
                  {"RabbitMQ is a traditional message broker - great for task queues, request/reply, and pub/sub patterns."}
                </p>
                <h3>
                  {"Core Concepts"}
                </h3>
                <div className="code-block">
                  <pre>{`
Producer → Exchange → Queue → Consumer
              ↓
        (Routes messages based on rules)

- Producer: Sends messages
- Exchange: Routes messages to queues
- Queue: Stores messages until consumed
- Consumer: Receives and processes messages
- Binding: Rules connecting exchanges to queues
`}</pre>
                </div>
                <h3>
                  {"Setup with Spring Boot"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-amqp</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.rabbitmq.host=localhost
spring.rabbitmq.port=5672
spring.rabbitmq.username=guest
spring.rabbitmq.password=guest
`}</pre>
                </div>
                <h3>
                  {"Configuration"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Configuration
public class RabbitMQConfig {

    public static final String QUEUE_ORDERS = "orders";
    public static final String EXCHANGE_ORDERS = "orders-exchange";
    public static final String ROUTING_KEY = "order.created";

    @Bean
    public Queue ordersQueue() {
        return new Queue(QUEUE_ORDERS, true);  // durable
    }

    @Bean
    public DirectExchange ordersExchange() {
        return new DirectExchange(EXCHANGE_ORDERS);
    }

    @Bean
    public Binding binding(Queue queue, DirectExchange exchange) {
        return BindingBuilder.bind(queue)
            .to(exchange)
            .with(ROUTING_KEY);
    }

    @Bean
    public MessageConverter jsonMessageConverter() {
        return new Jackson2JsonMessageConverter();
    }

    @Bean
    public RabbitTemplate rabbitTemplate(ConnectionFactory connectionFactory) {
        RabbitTemplate template = new RabbitTemplate(connectionFactory);
        template.setMessageConverter(jsonMessageConverter());
        return template;
    }
}
`}</pre>
                </div>
                <h3>
                  {"Sending Messages (Producer)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class OrderProducer {

    @Autowired
    private RabbitTemplate rabbitTemplate;

    public void sendOrder(Order order) {
        rabbitTemplate.convertAndSend(
            RabbitMQConfig.EXCHANGE_ORDERS,
            RabbitMQConfig.ROUTING_KEY,
            order
        );
        System.out.println("Order sent to queue: " + order.getId());
    }
}

// Usage
@RestController
public class OrderController {

    @Autowired
    private OrderProducer orderProducer;

    @PostMapping("/orders")
    public ResponseEntity<Order> createOrder(@RequestBody OrderRequest request) {
        Order order = orderService.create(request);

        // Send to queue for async processing
        orderProducer.sendOrder(order);

        // Return immediately - don't wait for processing
        return ResponseEntity.ok(order);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Receiving Messages (Consumer)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class OrderConsumer {

    private static final Logger logger = LoggerFactory.getLogger(OrderConsumer.class);

    @RabbitListener(queues = RabbitMQConfig.QUEUE_ORDERS)
    public void processOrder(Order order) {
        logger.info("Processing order: {}", order.getId());

        try {
            // Process the order (payment, inventory, etc.)
            paymentService.processPayment(order);
            inventoryService.reserveItems(order);
            emailService.sendConfirmation(order);

            logger.info("Order processed successfully: {}", order.getId());
        } catch (Exception e) {
            logger.error("Failed to process order: {}", order.getId(), e);
            throw e;  // Message will be requeued or sent to DLQ
        }
    }
}
`}</pre>
                </div>
                <h3>
                  {"Dead Letter Queue (Handle Failures)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Configuration
public class RabbitMQConfig {

    @Bean
    public Queue ordersQueue() {
        return QueueBuilder.durable(QUEUE_ORDERS)
            .withArgument("x-dead-letter-exchange", "dlx-exchange")
            .withArgument("x-dead-letter-routing-key", "dlq.orders")
            .build();
    }

    @Bean
    public Queue deadLetterQueue() {
        return new Queue("orders-dlq", true);
    }

    // Consumer for failed messages
    @RabbitListener(queues = "orders-dlq")
    public void handleFailedOrders(Order order) {
        logger.error("Order failed multiple times: {}", order.getId());
        // Alert, save to database for manual review, etc.
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Apache Kafka: High-Throughput Streaming"}
                </h2>
                <p>
                  {"Kafka is designed for high-throughput, real-time data streaming. Perfect for event sourcing, log aggregation, and analytics."}
                </p>
                <h3>
                  {"Core Concepts"}
                </h3>
                <div className="code-block">
                  <pre>{`
Producer → Topic (Partitions) → Consumer Group
              ↓
    Partition 0: [msg1, msg4, msg7...]
    Partition 1: [msg2, msg5, msg8...]
    Partition 2: [msg3, msg6, msg9...]

- Topic: Category for messages (like a table)
- Partition: Ordered, immutable sequence of messages
- Offset: Position of message in partition
- Consumer Group: Multiple consumers sharing load
- Broker: Kafka server node
`}</pre>
                </div>
                <h3>
                  {"Setup with Spring Boot"}
                </h3>
                <div className="code-block">
                  <pre>{`
<!-- pom.xml -->
<dependency>
    <groupId>org.springframework.kafka</groupId>
    <artifactId>spring-kafka</artifactId>
</dependency>
`}</pre>
                </div>
                <div className="code-block">
                  <pre>{`
# application.properties
spring.kafka.bootstrap-servers=localhost:9092
spring.kafka.consumer.group-id=my-app
spring.kafka.consumer.auto-offset-reset=earliest
spring.kafka.producer.key-serializer=org.apache.kafka.common.serialization.StringSerializer
spring.kafka.producer.value-serializer=org.springframework.kafka.support.serializer.JsonSerializer
spring.kafka.consumer.key-deserializer=org.apache.kafka.common.serialization.StringDeserializer
spring.kafka.consumer.value-deserializer=org.springframework.kafka.support.serializer.JsonDeserializer
spring.kafka.consumer.properties.spring.json.trusted.packages=*
`}</pre>
                </div>
                <h3>
                  {"Sending Messages (Producer)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class OrderEventProducer {

    private static final String TOPIC = "order-events";

    @Autowired
    private KafkaTemplate<String, OrderEvent> kafkaTemplate;

    public void sendOrderCreated(Order order) {
        OrderEvent event = new OrderEvent("ORDER_CREATED", order);

        kafkaTemplate.send(TOPIC, order.getId().toString(), event)
            .whenComplete((result, ex) -> {
                if (ex == null) {
                    System.out.println("Sent: " + event +
                        " to partition " + result.getRecordMetadata().partition());
                } else {
                    System.err.println("Failed to send: " + ex.getMessage());
                }
            });
    }

    // Send to specific partition
    public void sendToPartition(String key, OrderEvent event, int partition) {
        kafkaTemplate.send(TOPIC, partition, key, event);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Receiving Messages (Consumer)"}
                </h3>
                <div className="code-block">
                  <pre>{`
@Service
public class OrderEventConsumer {

    private static final Logger logger = LoggerFactory.getLogger(OrderEventConsumer.class);

    @KafkaListener(topics = "order-events", groupId = "order-processor")
    public void consume(OrderEvent event) {
        logger.info("Received event: {}", event);

        switch (event.getType()) {
            case "ORDER_CREATED":
                handleOrderCreated(event.getOrder());
                break;
            case "ORDER_CANCELLED":
                handleOrderCancelled(event.getOrder());
                break;
            default:
                logger.warn("Unknown event type: {}", event.getType());
        }
    }

    // With manual acknowledgment
    @KafkaListener(topics = "order-events", groupId = "inventory-service")
    public void consumeWithAck(OrderEvent event, Acknowledgment ack) {
        try {
            processEvent(event);
            ack.acknowledge();  // Commit offset only on success
        } catch (Exception e) {
            logger.error("Failed to process event", e);
            // Don't acknowledge - message will be redelivered
        }
    }

    // Batch processing
    @KafkaListener(topics = "order-events", groupId = "analytics")
    public void consumeBatch(List<OrderEvent> events) {
        logger.info("Received batch of {} events", events.size());
        events.forEach(this::processEvent);
    }
}
`}</pre>
                </div>
                <h3>
                  {"Multiple Consumers (Scaling)"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Same group = load balanced (each message to one consumer)
@KafkaListener(topics = "orders", groupId = "order-processors")
public void consumer1(OrderEvent event) { ... }

@KafkaListener(topics = "orders", groupId = "order-processors")
public void consumer2(OrderEvent event) { ... }

// Different groups = broadcast (each message to all groups)
@KafkaListener(topics = "orders", groupId = "email-service")
public void emailConsumer(OrderEvent event) { ... }

@KafkaListener(topics = "orders", groupId = "analytics-service")
public void analyticsConsumer(OrderEvent event) { ... }
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"RabbitMQ vs Kafka: When to Use Which?"}
                </h2>
                <div className="when-to-use">
                  <h4>
                    {"Choose RabbitMQ When:"}
                  </h4>
                  <ul>
                    <li>
                      {"You need complex routing (headers, topics, fanout)"}
                    </li>
                    <li>
                      {"Messages should be deleted after processing"}
                    </li>
                    <li>
                      {"You need request/reply pattern"}
                    </li>
                    <li>
                      {"Priority queues are needed"}
                    </li>
                    <li>
                      {"Lower latency per message matters"}
                    </li>
                  </ul>
                </div>
                <div className="when-to-use">
                  <h4>
                    {"Choose Kafka When:"}
                  </h4>
                  <ul>
                    <li>
                      {"You need high throughput (millions of messages/sec)"}
                    </li>
                    <li>
                      {"Messages need to be replayed (event sourcing)"}
                    </li>
                    <li>
                      {"Multiple consumers need the same messages"}
                    </li>
                    <li>
                      {"You need stream processing"}
                    </li>
                    <li>
                      {"Message ordering within a partition matters"}
                    </li>
                  </ul>
                </div>
                <div className="code-block">
                  <pre>{`
| Feature           | RabbitMQ              | Kafka                    |
|-------------------|----------------------|--------------------------|
| Throughput        | Thousands/sec        | Millions/sec             |
| Message Retention | Until consumed       | Configurable (days/weeks)|
| Replay Messages   | No                   | Yes                      |
| Ordering          | Per queue            | Per partition            |
| Use Case          | Task queues, RPC     | Event streaming, logs    |
| Complexity        | Simpler              | More complex             |
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Common Messaging Patterns"}
                </h2>
                <h3>
                  {"Event-Driven Order Processing"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Order Service publishes events
@Service
public class OrderService {

    @Autowired
    private KafkaTemplate<String, OrderEvent> kafka;

    @Transactional
    public Order createOrder(OrderRequest request) {
        Order order = orderRepository.save(new Order(request));

        // Publish event for other services
        kafka.send("order-events", new OrderEvent("CREATED", order));

        return order;
    }
}

// Payment Service listens
@Service
public class PaymentListener {

    @KafkaListener(topics = "order-events")
    public void onOrderCreated(OrderEvent event) {
        if ("CREATED".equals(event.getType())) {
            paymentService.processPayment(event.getOrder());
            kafka.send("payment-events", new PaymentEvent("COMPLETED", event.getOrderId()));
        }
    }
}

// Inventory Service listens
@Service
public class InventoryListener {

    @KafkaListener(topics = "payment-events")
    public void onPaymentCompleted(PaymentEvent event) {
        if ("COMPLETED".equals(event.getType())) {
            inventoryService.reserveItems(event.getOrderId());
            kafka.send("inventory-events", new InventoryEvent("RESERVED", event.getOrderId()));
        }
    }
}
`}</pre>
                </div>
                <h3>
                  {"Work Queue (Task Distribution)"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Multiple workers share the load
@RabbitListener(queues = "email-tasks", concurrency = "5")
public void processEmailTask(EmailTask task) {
    emailService.send(task.getTo(), task.getSubject(), task.getBody());
}

// Producer sends many tasks
public void sendBulkEmails(List<User> users) {
    for (User user : users) {
        EmailTask task = new EmailTask(user.getEmail(), "Newsletter", content);
        rabbitTemplate.convertAndSend("email-tasks", task);
    }
    // 5 workers process in parallel!
}
`}</pre>
                </div>
                <h3>
                  {"Saga Pattern (Distributed Transactions)"}
                </h3>
                <div className="code-block">
                  <pre>{`
// Orchestrator manages the saga
@Service
public class OrderSagaOrchestrator {

    @KafkaListener(topics = "saga-responses")
    public void handleResponse(SagaResponse response) {
        Saga saga = sagaRepository.findById(response.getSagaId());

        if (response.isSuccess()) {
            saga.completeStep(response.getStep());

            if (saga.hasNextStep()) {
                executeNextStep(saga);
            } else {
                saga.complete();
            }
        } else {
            // Compensate previous steps
            compensate(saga);
        }
    }

    private void compensate(Saga saga) {
        for (String completedStep : saga.getCompletedSteps()) {
            kafka.send("saga-compensations", new CompensationRequest(saga.getId(), completedStep));
        }
    }
}
`}</pre>
                </div>
              </div>
              <div className="concept-section">
                <h2>
                  {"Best Practices"}
                </h2>
                <div className="best-practice">
                  <h3>
                    {"1. Make Messages Idempotent"}
                  </h3>
                  <p>
                    {"Messages may be delivered multiple times. Processing twice should have the same result."}
                  </p>
                  <div className="code-block">
                    <pre>{`
@KafkaListener(topics = "payments")
public void processPayment(PaymentEvent event) {
    // Check if already processed
    if (paymentRepository.existsByEventId(event.getId())) {
        logger.info("Payment already processed: {}", event.getId());
        return;
    }

    // Process and save event ID
    Payment payment = processPayment(event);
    payment.setEventId(event.getId());
    paymentRepository.save(payment);
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"2. Handle Poison Messages"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
@Bean
public DefaultErrorHandler errorHandler() {
    // Retry 3 times, then send to DLT (Dead Letter Topic)
    return new DefaultErrorHandler(
        new DeadLetterPublishingRecoverer(kafkaTemplate),
        new FixedBackOff(1000L, 3)
    );
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"3. Include Metadata in Messages"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
public class OrderEvent {
    private String eventId;      // Unique ID for idempotency
    private String eventType;    // What happened
    private Instant timestamp;   // When it happened
    private String source;       // Which service sent it
    private String correlationId;// For tracing across services
    private Order payload;       // The actual data
}
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"4. Monitor Your Queues"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
// Check for queue buildup
# RabbitMQ Management: http://localhost:15672
# Kafka: kafka-consumer-groups.sh --describe --group my-group

// Alert if consumer lag grows
// Alert if dead letter queue has messages
// Alert if message processing time increases
`}</pre>
                  </div>
                </div>
                <div className="best-practice">
                  <h3>
                    {"5. Version Your Messages"}
                  </h3>
                  <div className="code-block">
                    <pre>{`
public class OrderEventV2 {
    private String version = "2.0";
    private String eventId;
    // ... new fields

    // Handle old versions
    public static OrderEventV2 fromV1(OrderEventV1 v1) {
        OrderEventV2 v2 = new OrderEventV2();
        v2.setEventId(v1.getEventId());
        // Map old fields to new
        return v2;
    }
}
`}</pre>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="program-cta">
          <div className="container">
            <div className="cta-content">
              <h2>
                {"Build Event-Driven "}
                <span className="gradient-text">
                  {"Java Applications"}
                </span>
              </h2>
              <p>
                {"Learn messaging patterns, RabbitMQ, and Kafka with hands-on microservices projects."}
              </p>
              <div className="cta-buttons">
                <Link href="/full-stack-java" className="btn btn-primary btn-lg">
                  {"Explore Full Stack Java Course"}
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="related-articles">
          <div className="container">
            <h2>
              {"Related Articles"}
            </h2>
            <div className="articles-grid">
              <Link href="/full-stack-java/articles/microservices" className="article-card">
                <h3>
                  {"Microservices"}
                </h3>
                {" "}
                <p>
                  {"Build distributed systems with Spring Cloud."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/spring-boot" className="article-card">
                <h3>
                  {"Spring Boot"}
                </h3>
                {" "}
                <p>
                  {"Build applications with messaging support."}
                </p>
              </Link>
              <Link href="/full-stack-java/articles/docker-basics" className="article-card">
                <h3>
                  {"Docker"}
                </h3>
                {" "}
                <p>
                  {"Run RabbitMQ and Kafka in containers."}
                </p>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <Link href="/" className="logo">
                <img src="/img/codiin-logo-light.svg" alt="CODiiN Tech Mentors Lab" className="logo-img" />
              </Link>
              <p>
                {"Empowering the next generation of tech professionals through personalized mentorship and hands-on learning."}
              </p>
              <div className="footer-company">
                <strong>
                  {"CODERZON Technologies Pvt Ltd"}
                </strong>
              </div>
              <div className="footer-location">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden={true}>
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  {" "}
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {"AKL Heights, Seaport Road, Near Bharathmatha College, Kochi, Kerala - 682021"}
                </span>
              </div>
            </div>
            <div className="footer-links">
              <h4>
                {"Programs"}
              </h4>
              <ul>
                <li>
                  <Link href="/full-stack-javascript">
                    {"Full Stack JavaScript"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-python">
                    {"Full Stack Python"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-java">
                    {"Full Stack Java"}
                  </Link>
                </li>
                <li>
                  <Link href="/full-stack-dotnet">
                    {"Full Stack .NET"}
                  </Link>
                </li>
                <li>
                  <Link href="/data-analytics">
                    {"Data Analytics"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>
                {"Quick Links"}
              </h4>
              <ul>
                <li>
                  <Link href="/">
                    {"Home"}
                  </Link>
                </li>
                <li>
                  <Link href="/#about">
                    {"About Us"}
                  </Link>
                </li>
                <li>
                  <Link href="/#why-us">
                    {"Why CODiiN"}
                  </Link>
                </li>
                <li>
                  <Link href="/#contact">
                    {"Contact"}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>
                {"Get in Touch"}
              </h4>
              <p>
                <a href="mailto:contact@codiin.com">
                  {"contact@codiin.com"}
                </a>
              </p>
              <p>
                <a href="tel:+918301890158">
                  {"+91 83018 90158"}
                </a>
              </p>
              <div className="footer-social">
                <a href="https://www.facebook.com/CodiinTechnologies" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/codiin_/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/codiin/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@codiin" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              {"© 2025 CODERZON Technologies Pvt Ltd. All rights reserved."}
            </p>
            <div className="footer-legal">
              <Link href="/privacy-policy">
                {"Privacy Policy"}
              </Link>
              <Link href="/terms-of-service">
                {"Terms of Service"}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Message Queues as part of the Full Stack Java program."} />
    </>
  );
}
