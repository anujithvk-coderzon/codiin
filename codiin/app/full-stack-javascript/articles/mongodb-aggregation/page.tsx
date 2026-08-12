import type { Metadata } from "next";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "MongoDB Aggregation - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/mongodb-aggregation" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/mongodb-aggregation",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/internship", label: "Internship" },
  { href: "/one-on-one", label: "1:1 Mentoring" },
  { href: "/events", label: "Events" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptMongodbAggregationPage() {
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
                {"MongoDB Aggregation"}
              </h1>
              <p className="article-meta">
                {"Advanced data processing with the Aggregation Pipeline"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Introduction to Aggregation"}
              </h2>
              <p>
                {"MongoDB's Aggregation Pipeline is a powerful framework for data processing and transformation. It processes documents through a series of stages, where each stage transforms the documents as they pass through."}
              </p>
              <h3>
                {"Basic Pipeline Structure"}
              </h3>
              <pre><code>{`// Aggregation pipeline syntax
db.collection.aggregate([
  { stage1 },
  { stage2 },
  { stage3 },
  // ...more stages
]);

// With Mongoose
const results = await Order.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$customerId', total: { $sum: '$amount' } } },
  { $sort: { total: -1 } },
  { $limit: 10 }
]);`}</code></pre>
              <h2>
                {"Common Pipeline Stages"}
              </h2>
              <h3>
                {"$match - Filtering Documents"}
              </h3>
              <pre><code>{`// Filter documents (like find())
// Should be early in pipeline for performance

// Simple match
{ $match: { status: 'active' } }

// Multiple conditions
{ $match: {
  status: 'completed',
  amount: { $gte: 100 },
  createdAt: { $gte: new Date('2024-01-01') }
}}

// Using $or
{ $match: {
  $or: [
    { status: 'pending' },
    { status: 'processing' }
  ]
}}

// Regex match
{ $match: {
  email: { $regex: /@gmail\\.com$/i }
}}

// Example: Find active premium users
const premiumUsers = await User.aggregate([
  { $match: {
    status: 'active',
    subscription: 'premium',
    lastLoginAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) }
  }}
]);`}</code></pre>
              <h3>
                {"$group - Grouping Documents"}
              </h3>
              <pre><code>{`// Group documents and compute aggregates
// _id specifies the grouping key

// Group by single field
{ $group: {
  _id: '$category',
  count: { $sum: 1 },
  totalSales: { $sum: '$amount' }
}}

// Group by multiple fields
{ $group: {
  _id: { year: { $year: '$date' }, month: { $month: '$date' } },
  revenue: { $sum: '$amount' },
  orders: { $sum: 1 }
}}

// Group all documents (_id: null)
{ $group: {
  _id: null,
  totalRevenue: { $sum: '$amount' },
  avgOrderValue: { $avg: '$amount' },
  maxOrder: { $max: '$amount' },
  minOrder: { $min: '$amount' },
  orderCount: { $sum: 1 }
}}

// Accumulator operators
{ $group: {
  _id: '$category',
  count: { $sum: 1 },              // Count documents
  total: { $sum: '$price' },       // Sum values
  average: { $avg: '$price' },     // Average
  max: { $max: '$price' },         // Maximum
  min: { $min: '$price' },         // Minimum
  first: { $first: '$name' },      // First in group
  last: { $last: '$name' },        // Last in group
  items: { $push: '$name' },       // Array of values
  uniqueItems: { $addToSet: '$status' }, // Unique values
  stdDev: { $stdDevPop: '$price' } // Standard deviation
}}

// Example: Sales by category
const salesByCategory = await Product.aggregate([
  { $match: { status: 'sold' } },
  { $group: {
    _id: '$category',
    totalSales: { $sum: '$price' },
    itemsSold: { $sum: 1 },
    avgPrice: { $avg: '$price' }
  }},
  { $sort: { totalSales: -1 } }
]);`}</code></pre>
              <h3>
                {"$project - Reshaping Documents"}
              </h3>
              <pre><code>{`// Include, exclude, or compute fields

// Include specific fields (1) and exclude _id (0)
{ $project: {
  _id: 0,
  name: 1,
  email: 1,
  status: 1
}}

// Rename fields
{ $project: {
  userId: '$_id',
  fullName: '$name',
  emailAddress: '$email'
}}

// Computed fields
{ $project: {
  name: 1,
  totalPrice: { $multiply: ['$price', '$quantity'] },
  discountedPrice: {
    $subtract: [
      '$price',
      { $multiply: ['$price', '$discountPercent', 0.01] }
    ]
  }
}}

// Conditional fields
{ $project: {
  name: 1,
  priceCategory: {
    $cond: {
      if: { $gte: ['$price', 100] },
      then: 'expensive',
      else: 'affordable'
    }
  },
  status: {
    $switch: {
      branches: [
        { case: { $eq: ['$stock', 0] }, then: 'out-of-stock' },
        { case: { $lt: ['$stock', 10] }, then: 'low-stock' }
      ],
      default: 'in-stock'
    }
  }
}}

// String operations
{ $project: {
  fullName: { $concat: ['$firstName', ' ', '$lastName'] },
  email: { $toLower: '$email' },
  initials: { $substr: ['$name', 0, 2] }
}}

// Date operations
{ $project: {
  year: { $year: '$createdAt' },
  month: { $month: '$createdAt' },
  dayOfWeek: { $dayOfWeek: '$createdAt' },
  formattedDate: {
    $dateToString: { format: '%Y-%m-%d', date: '$createdAt' }
  }
}}`}</code></pre>
              <h3>
                {"$sort, $limit, $skip"}
              </h3>
              <pre><code>{`// Sort documents (1 = ascending, -1 = descending)
{ $sort: { createdAt: -1, name: 1 } }

// Limit results
{ $limit: 10 }

// Skip documents (for pagination)
{ $skip: 20 }

// Pagination example
const page = 2;
const pageSize = 10;

const results = await Product.aggregate([
  { $match: { category: 'electronics' } },
  { $sort: { createdAt: -1 } },
  { $skip: (page - 1) * pageSize },
  { $limit: pageSize }
]);

// With total count (using $facet)
const results = await Product.aggregate([
  { $match: { category: 'electronics' } },
  { $facet: {
    data: [
      { $sort: { createdAt: -1 } },
      { $skip: (page - 1) * pageSize },
      { $limit: pageSize }
    ],
    totalCount: [
      { $count: 'count' }
    ]
  }}
]);`}</code></pre>
              <h3>
                {"$lookup - Joining Collections"}
              </h3>
              <pre><code>{`// Join with another collection (like SQL LEFT JOIN)

// Basic lookup
{ $lookup: {
  from: 'users',           // Collection to join
  localField: 'userId',    // Field in current collection
  foreignField: '_id',     // Field in foreign collection
  as: 'user'               // Output array field
}}

// Unwind to convert array to object (for one-to-one)
[
  { $lookup: {
    from: 'users',
    localField: 'userId',
    foreignField: '_id',
    as: 'user'
  }},
  { $unwind: '$user' }  // Convert array to single object
]

// Pipeline lookup (more control)
{ $lookup: {
  from: 'orders',
  let: { userId: '$_id' },  // Variables from current doc
  pipeline: [
    { $match: {
      $expr: { $eq: ['$customerId', '$$userId'] }
    }},
    { $match: { status: 'completed' } },
    { $sort: { createdAt: -1 } },
    { $limit: 5 }
  ],
  as: 'recentOrders'
}}

// Example: Users with their order stats
const usersWithStats = await User.aggregate([
  { $lookup: {
    from: 'orders',
    let: { userId: '$_id' },
    pipeline: [
      { $match: {
        $expr: { $eq: ['$customerId', '$$userId'] },
        status: 'completed'
      }},
      { $group: {
        _id: null,
        totalOrders: { $sum: 1 },
        totalSpent: { $sum: '$amount' }
      }}
    ],
    as: 'orderStats'
  }},
  { $unwind: { path: '$orderStats', preserveNullAndEmptyArrays: true } },
  { $project: {
    name: 1,
    email: 1,
    totalOrders: { $ifNull: ['$orderStats.totalOrders', 0] },
    totalSpent: { $ifNull: ['$orderStats.totalSpent', 0] }
  }}
]);`}</code></pre>
              <h3>
                {"$unwind - Deconstructing Arrays"}
              </h3>
              <pre><code>{`// Deconstruct array field into multiple documents

// Sample document: { _id: 1, tags: ['a', 'b', 'c'] }

// Basic unwind
{ $unwind: '$tags' }
// Result: 3 documents, one for each tag

// Preserve documents with empty/missing arrays
{ $unwind: {
  path: '$tags',
  preserveNullAndEmptyArrays: true
}}

// Include array index
{ $unwind: {
  path: '$items',
  includeArrayIndex: 'itemIndex'
}}

// Example: Analyze order items
const itemAnalysis = await Order.aggregate([
  { $unwind: '$items' },
  { $group: {
    _id: '$items.productId',
    totalQuantity: { $sum: '$items.quantity' },
    totalRevenue: { $sum: { $multiply: ['$items.price', '$items.quantity'] } },
    orderCount: { $sum: 1 }
  }},
  { $lookup: {
    from: 'products',
    localField: '_id',
    foreignField: '_id',
    as: 'product'
  }},
  { $unwind: '$product' },
  { $project: {
    productName: '$product.name',
    totalQuantity: 1,
    totalRevenue: 1,
    orderCount: 1
  }},
  { $sort: { totalRevenue: -1 } }
]);`}</code></pre>
              <h2>
                {"Advanced Stages"}
              </h2>
              <h3>
                {"$facet - Multiple Pipelines"}
              </h3>
              <pre><code>{`// Run multiple pipelines in single aggregation

// Dashboard data in one query
const dashboard = await Order.aggregate([
  { $match: { createdAt: { $gte: startOfMonth } } },
  { $facet: {
    // Revenue by day
    dailyRevenue: [
      { $group: {
        _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
        revenue: { $sum: '$amount' }
      }},
      { $sort: { _id: 1 } }
    ],

    // Top products
    topProducts: [
      { $unwind: '$items' },
      { $group: {
        _id: '$items.productId',
        sales: { $sum: '$items.quantity' }
      }},
      { $sort: { sales: -1 } },
      { $limit: 5 }
    ],

    // Order status counts
    statusCounts: [
      { $group: {
        _id: '$status',
        count: { $sum: 1 }
      }}
    ],

    // Summary stats
    summary: [
      { $group: {
        _id: null,
        totalOrders: { $sum: 1 },
        totalRevenue: { $sum: '$amount' },
        avgOrderValue: { $avg: '$amount' }
      }}
    ]
  }}
]);`}</code></pre>
              <h3>
                {"$bucket and $bucketAuto"}
              </h3>
              <pre><code>{`// Categorize documents into buckets

// Manual bucket boundaries
{ $bucket: {
  groupBy: '$price',
  boundaries: [0, 50, 100, 200, 500, 1000],
  default: 'Other',
  output: {
    count: { $sum: 1 },
    products: { $push: '$name' }
  }
}}

// Automatic buckets
{ $bucketAuto: {
  groupBy: '$price',
  buckets: 5,  // Number of buckets
  output: {
    count: { $sum: 1 },
    avgPrice: { $avg: '$price' }
  }
}}

// Example: User age distribution
const ageDistribution = await User.aggregate([
  { $bucket: {
    groupBy: '$age',
    boundaries: [0, 18, 25, 35, 45, 55, 65, 100],
    default: 'Unknown',
    output: {
      count: { $sum: 1 },
      users: { $push: '$name' }
    }
  }}
]);`}</code></pre>
              <h3>
                {"$addFields and $set"}
              </h3>
              <pre><code>{`// Add or modify fields (keeps existing fields)

// Add computed fields
{ $addFields: {
  totalPrice: { $multiply: ['$price', '$quantity'] },
  fullName: { $concat: ['$firstName', ' ', '$lastName'] }
}}

// $set is an alias for $addFields
{ $set: {
  lastModified: new Date(),
  status: 'processed'
}}

// Conditional field
{ $addFields: {
  ageGroup: {
    $switch: {
      branches: [
        { case: { $lt: ['$age', 18] }, then: 'minor' },
        { case: { $lt: ['$age', 30] }, then: 'young-adult' },
        { case: { $lt: ['$age', 50] }, then: 'adult' }
      ],
      default: 'senior'
    }
  }
}}`}</code></pre>
              <h3>
                {"$redact - Document-Level Access Control"}
              </h3>
              <pre><code>{`// Control document/field access based on conditions

{ $redact: {
  $cond: {
    if: { $eq: ['$securityLevel', 'public'] },
    then: '$$DESCEND',  // Include field/subdocument
    else: '$$PRUNE'     // Exclude field/subdocument
  }
}}

// $$DESCEND - keep this level and check nested
// $$PRUNE - remove this level
// $$KEEP - keep this level and all nested

// Example: Filter sensitive data based on user role
const filterByRole = (userRole) => ({
  $redact: {
    $cond: {
      if: {
        $or: [
          { $eq: ['$accessLevel', 'public'] },
          { $in: [userRole, '$allowedRoles'] }
        ]
      },
      then: '$$DESCEND',
      else: '$$PRUNE'
    }
  }
});`}</code></pre>
              <h2>
                {"Practical Examples"}
              </h2>
              <h3>
                {"E-commerce Analytics"}
              </h3>
              <pre><code>{`// Monthly sales report
const monthlySales = await Order.aggregate([
  { $match: {
    status: 'completed',
    createdAt: { $gte: new Date('2024-01-01') }
  }},
  { $group: {
    _id: {
      year: { $year: '$createdAt' },
      month: { $month: '$createdAt' }
    },
    totalRevenue: { $sum: '$amount' },
    orderCount: { $sum: 1 },
    avgOrderValue: { $avg: '$amount' },
    uniqueCustomers: { $addToSet: '$customerId' }
  }},
  { $addFields: {
    customerCount: { $size: '$uniqueCustomers' }
  }},
  { $project: {
    _id: 0,
    year: '$_id.year',
    month: '$_id.month',
    totalRevenue: { $round: ['$totalRevenue', 2] },
    orderCount: 1,
    avgOrderValue: { $round: ['$avgOrderValue', 2] },
    customerCount: 1
  }},
  { $sort: { year: 1, month: 1 } }
]);

// Customer lifetime value
const customerLTV = await Order.aggregate([
  { $match: { status: 'completed' } },
  { $group: {
    _id: '$customerId',
    totalSpent: { $sum: '$amount' },
    orderCount: { $sum: 1 },
    firstOrder: { $min: '$createdAt' },
    lastOrder: { $max: '$createdAt' },
    avgOrderValue: { $avg: '$amount' }
  }},
  { $lookup: {
    from: 'users',
    localField: '_id',
    foreignField: '_id',
    as: 'customer'
  }},
  { $unwind: '$customer' },
  { $project: {
    customerName: '$customer.name',
    email: '$customer.email',
    totalSpent: 1,
    orderCount: 1,
    avgOrderValue: { $round: ['$avgOrderValue', 2] },
    customerSince: '$firstOrder',
    daysSinceLastOrder: {
      $divide: [
        { $subtract: [new Date(), '$lastOrder'] },
        1000 * 60 * 60 * 24
      ]
    }
  }},
  { $sort: { totalSpent: -1 } },
  { $limit: 100 }
]);`}</code></pre>
              <h3>
                {"User Activity Analysis"}
              </h3>
              <pre><code>{`// User engagement metrics
const userEngagement = await Activity.aggregate([
  { $match: {
    timestamp: { $gte: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000) }
  }},
  { $group: {
    _id: '$userId',
    totalActions: { $sum: 1 },
    uniqueDays: { $addToSet: {
      $dateToString: { format: '%Y-%m-%d', date: '$timestamp' }
    }},
    actionTypes: { $push: '$action' },
    lastActivity: { $max: '$timestamp' }
  }},
  { $addFields: {
    activeDays: { $size: '$uniqueDays' },
    actionBreakdown: {
      $arrayToObject: {
        $map: {
          input: { $setUnion: '$actionTypes' },
          as: 'action',
          in: {
            k: '$$action',
            v: {
              $size: {
                $filter: {
                  input: '$actionTypes',
                  cond: { $eq: ['$$this', '$$action'] }
                }
              }
            }
          }
        }
      }
    }
  }},
  { $lookup: {
    from: 'users',
    localField: '_id',
    foreignField: '_id',
    as: 'user'
  }},
  { $unwind: '$user' },
  { $project: {
    userName: '$user.name',
    totalActions: 1,
    activeDays: 1,
    avgActionsPerDay: { $divide: ['$totalActions', '$activeDays'] },
    actionBreakdown: 1,
    lastActivity: 1
  }},
  { $sort: { totalActions: -1 } }
]);`}</code></pre>
              <h3>
                {"Time-Series Analysis"}
              </h3>
              <pre><code>{`// Hourly traffic analysis
const hourlyTraffic = await PageView.aggregate([
  { $match: {
    timestamp: {
      $gte: new Date(Date.now() - 24 * 60 * 60 * 1000)
    }
  }},
  { $group: {
    _id: { $hour: '$timestamp' },
    views: { $sum: 1 },
    uniqueVisitors: { $addToSet: '$sessionId' },
    avgLoadTime: { $avg: '$loadTime' }
  }},
  { $addFields: {
    uniqueVisitorCount: { $size: '$uniqueVisitors' }
  }},
  { $project: {
    hour: '$_id',
    views: 1,
    uniqueVisitorCount: 1,
    avgLoadTime: { $round: ['$avgLoadTime', 2] }
  }},
  { $sort: { hour: 1 } }
]);

// Moving average (7-day)
const movingAverage = await DailyStats.aggregate([
  { $setWindowFields: {
    sortBy: { date: 1 },
    output: {
      movingAvg: {
        $avg: '$revenue',
        window: {
          documents: [-6, 0]  // Current + 6 previous days
        }
      }
    }
  }}
]);`}</code></pre>
              <h2>
                {"Performance Optimization"}
              </h2>
              <pre><code>{`// 1. Use $match early to filter data
[
  { $match: { status: 'active' } },  // Filter first!
  { $group: { ... } }
]

// 2. Create indexes for $match and $sort fields
db.orders.createIndex({ status: 1, createdAt: -1 });

// 3. Use $project to limit fields early
[
  { $match: { status: 'active' } },
  { $project: { amount: 1, customerId: 1 } },  // Only needed fields
  { $group: { ... } }
]

// 4. Use allowDiskUse for large datasets
const results = await Order.aggregate([
  { $group: { ... } }
]).allowDiskUse(true);

// 5. Explain the aggregation
const explanation = await Order.aggregate([
  { $match: { status: 'completed' } },
  { $group: { _id: '$customerId', total: { $sum: '$amount' } } }
]).explain('executionStats');

// 6. Use $limit early when possible
[
  { $match: { ... } },
  { $sort: { createdAt: -1 } },
  { $limit: 100 },  // Limit before expensive operations
  { $lookup: { ... } }
]`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"Aggregation pipeline processes documents through sequential stages"}
                  </li>
                  <li>
                    {"Use $match early to filter data and improve performance"}
                  </li>
                  <li>
                    {"$group enables powerful calculations with accumulator operators"}
                  </li>
                  <li>
                    {"$lookup joins collections (like SQL JOIN)"}
                  </li>
                  <li>
                    {"$facet runs multiple pipelines in one aggregation"}
                  </li>
                  <li>
                    {"$unwind deconstructs arrays into separate documents"}
                  </li>
                  <li>
                    {"Create indexes on fields used in $match and $sort"}
                  </li>
                  <li>
                    {"Use allowDiskUse(true) for memory-intensive operations"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/tailwind" className="prev-article">
                {"← Tailwind CSS"}
              </Link>
              <Link href="/full-stack-javascript/articles/error-handling" className="next-article">
                {"Error Handling →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <Footer variant="article" />

    </>
  );
}
