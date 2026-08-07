import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
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
  { href: "/internship", label: "Internship" },
  { href: "/events", label: "Events" },
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

      <Footer variant="article" />

      <WhatsAppFloat message={"Hi CODiiN! I'm interested in learning Message Queues as part of the Full Stack Java program."} />
    </>
  );
}
