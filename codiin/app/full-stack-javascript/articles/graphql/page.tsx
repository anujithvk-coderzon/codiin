import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "GraphQL & Apollo - Full Stack JavaScript | Codiin",
  alternates: { canonical: "/full-stack-javascript/articles/graphql" },
  openGraph: {
    type: "website",
    url: "/full-stack-javascript/articles/graphql",
  },
};

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#courses", label: "Courses" },
  { href: "/#about", label: "About" },
  { href: "/#contact", label: "Contact" },
];

export default function FullStackJavascriptGraphqlPage() {
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
                {"GraphQL & Apollo"}
              </h1>
              <p className="article-meta">
                {"Building efficient APIs with GraphQL and Apollo Client"}
              </p>
            </header>
            <section className="article-body">
              <h2>
                {"Introduction to GraphQL"}
              </h2>
              <p>
                {"GraphQL is a query language for APIs that allows clients to request exactly the data they need. Unlike REST, where endpoints return fixed data structures, GraphQL provides a flexible approach to data fetching."}
              </p>
              <h3>
                {"GraphQL vs REST"}
              </h3>
              <pre><code>{`// REST: Multiple endpoints, over-fetching
GET /api/users/1          → { id, name, email, avatar, bio, ... }
GET /api/users/1/posts    → [{ id, title, content, ... }]
GET /api/users/1/friends  → [{ id, name, ... }]

// GraphQL: Single endpoint, exact data
POST /graphql
query {
  user(id: 1) {
    name
    posts { title }
    friends { name }
  }
}`}</code></pre>
              <h2>
                {"Setting Up GraphQL Server"}
              </h2>
              <h3>
                {"Apollo Server with Express"}
              </h3>
              <pre><code>{`// server.js
const express = require('express');
const { ApolloServer } = require('@apollo/server');
const { expressMiddleware } = require('@apollo/server/express4');
const cors = require('cors');

// Type Definitions (Schema)
const typeDefs = \`#graphql
  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post!]!
    createdAt: String!
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User!
    comments: [Comment!]!
    published: Boolean!
  }

  type Comment {
    id: ID!
    text: String!
    author: User!
    post: Post!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
    posts(published: Boolean): [Post!]!
    post(id: ID!): Post
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    createPost(input: CreatePostInput!): Post!
    updatePost(id: ID!, input: UpdatePostInput!): Post
    deletePost(id: ID!): Boolean!
  }

  input CreateUserInput {
    name: String!
    email: String!
  }

  input CreatePostInput {
    title: String!
    content: String!
    authorId: ID!
  }

  input UpdatePostInput {
    title: String
    content: String
    published: Boolean
  }
\`;

// Resolvers
const resolvers = {
  Query: {
    users: () => User.findAll(),
    user: (_, { id }) => User.findById(id),
    posts: (_, { published }) => {
      if (published !== undefined) {
        return Post.findAll({ where: { published } });
      }
      return Post.findAll();
    },
    post: (_, { id }) => Post.findById(id),
  },

  Mutation: {
    createUser: async (_, { input }) => {
      return User.create(input);
    },
    createPost: async (_, { input }) => {
      return Post.create(input);
    },
    updatePost: async (_, { id, input }) => {
      await Post.update(id, input);
      return Post.findById(id);
    },
    deletePost: async (_, { id }) => {
      return Post.delete(id);
    },
  },

  // Field Resolvers (for relationships)
  User: {
    posts: (user) => Post.findByAuthorId(user.id),
  },
  Post: {
    author: (post) => User.findById(post.authorId),
    comments: (post) => Comment.findByPostId(post.id),
  },
  Comment: {
    author: (comment) => User.findById(comment.authorId),
    post: (comment) => Post.findById(comment.postId),
  },
};

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await server.start();

  app.use(
    '/graphql',
    cors(),
    express.json(),
    expressMiddleware(server, {
      context: async ({ req }) => ({
        user: req.user, // From auth middleware
        token: req.headers.authorization,
      }),
    })
  );

  app.listen(4000, () => {
    console.log('Server running at http://localhost:4000/graphql');
  });
}

startServer();`}</code></pre>
              <h2>
                {"Advanced Schema Design"}
              </h2>
              <h3>
                {"Enums, Interfaces, and Unions"}
              </h3>
              <pre><code>{`const typeDefs = \`#graphql
  # Enums
  enum Role {
    USER
    ADMIN
    MODERATOR
  }

  enum PostStatus {
    DRAFT
    PUBLISHED
    ARCHIVED
  }

  # Interface
  interface Node {
    id: ID!
    createdAt: String!
    updatedAt: String!
  }

  type User implements Node {
    id: ID!
    createdAt: String!
    updatedAt: String!
    name: String!
    role: Role!
  }

  type Post implements Node {
    id: ID!
    createdAt: String!
    updatedAt: String!
    title: String!
    status: PostStatus!
  }

  # Union Types
  union SearchResult = User | Post | Comment

  type Query {
    search(term: String!): [SearchResult!]!
    node(id: ID!): Node
  }
\`;

const resolvers = {
  // Union type resolver
  SearchResult: {
    __resolveType(obj) {
      if (obj.email) return 'User';
      if (obj.title) return 'Post';
      if (obj.text) return 'Comment';
      return null;
    },
  },

  // Interface resolver
  Node: {
    __resolveType(obj) {
      if (obj.email) return 'User';
      if (obj.title) return 'Post';
      return null;
    },
  },

  Query: {
    search: async (_, { term }) => {
      const users = await User.search(term);
      const posts = await Post.search(term);
      const comments = await Comment.search(term);
      return [...users, ...posts, ...comments];
    },
  },
};`}</code></pre>
              <h3>
                {"Pagination"}
              </h3>
              <pre><code>{`const typeDefs = \`#graphql
  # Cursor-based pagination (recommended)
  type PostConnection {
    edges: [PostEdge!]!
    pageInfo: PageInfo!
    totalCount: Int!
  }

  type PostEdge {
    cursor: String!
    node: Post!
  }

  type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: String
    endCursor: String
  }

  type Query {
    posts(
      first: Int
      after: String
      last: Int
      before: String
    ): PostConnection!
  }
\`;

const resolvers = {
  Query: {
    posts: async (_, { first = 10, after, last, before }) => {
      const decodedCursor = after
        ? Buffer.from(after, 'base64').toString()
        : null;

      const posts = await Post.findMany({
        take: first + 1, // Fetch one extra to check hasNextPage
        cursor: decodedCursor ? { id: decodedCursor } : undefined,
        skip: decodedCursor ? 1 : 0,
        orderBy: { createdAt: 'desc' },
      });

      const hasNextPage = posts.length > first;
      const edges = posts.slice(0, first).map(post => ({
        cursor: Buffer.from(post.id).toString('base64'),
        node: post,
      }));

      return {
        edges,
        pageInfo: {
          hasNextPage,
          hasPreviousPage: !!after,
          startCursor: edges[0]?.cursor,
          endCursor: edges[edges.length - 1]?.cursor,
        },
        totalCount: await Post.count(),
      };
    },
  },
};`}</code></pre>
              <h2>
                {"Apollo Client Setup"}
              </h2>
              <h3>
                {"Basic Configuration"}
              </h3>
              <pre><code>{`// src/apollo/client.js
import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  from,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { onError } from '@apollo/client/link/error';

// HTTP Link
const httpLink = createHttpLink({
  uri: process.env.REACT_APP_GRAPHQL_URL || 'http://localhost:4000/graphql',
});

// Auth Link - Add token to headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('token');
  return {
    headers: {
      ...headers,
      authorization: token ? \`Bearer \${token}\` : '',
    },
  };
});

// Error Link - Global error handling
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path, extensions }) => {
      console.error(
        \`[GraphQL error]: Message: \${message}, Path: \${path}\`
      );

      // Handle specific error codes
      if (extensions?.code === 'UNAUTHENTICATED') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
    });
  }

  if (networkError) {
    console.error(\`[Network error]: \${networkError}\`);
  }
});

// Cache Configuration
const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        posts: {
          // Merge paginated results
          keyArgs: ['published'],
          merge(existing = { edges: [] }, incoming) {
            return {
              ...incoming,
              edges: [...existing.edges, ...incoming.edges],
            };
          },
        },
      },
    },
    User: {
      // Custom cache key
      keyFields: ['id'],
    },
  },
});

// Create Client
export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});

// App.jsx
import { ApolloProvider } from '@apollo/client';
import { client } from './apollo/client';

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <Routes>{/* ... */}</Routes>
      </Router>
    </ApolloProvider>
  );
}`}</code></pre>
              <h2>
                {"Queries with Apollo Client"}
              </h2>
              <h3>
                {"Using useQuery Hook"}
              </h3>
              <pre><code>{`// src/graphql/queries.js
import { gql } from '@apollo/client';

export const GET_USERS = gql\`
  query GetUsers {
    users {
      id
      name
      email
    }
  }
\`;

export const GET_USER = gql\`
  query GetUser($id: ID!) {
    user(id: $id) {
      id
      name
      email
      posts {
        id
        title
        published
      }
    }
  }
\`;

export const GET_POSTS = gql\`
  query GetPosts($first: Int, $after: String, $published: Boolean) {
    posts(first: $first, after: $after, published: $published) {
      edges {
        cursor
        node {
          id
          title
          content
          author {
            id
            name
          }
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
      totalCount
    }
  }
\`;

// Components/UsersList.jsx
import { useQuery } from '@apollo/client';
import { GET_USERS } from '../graphql/queries';

function UsersList() {
  const { loading, error, data, refetch } = useQuery(GET_USERS);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div>
      <button onClick={() => refetch()}>Refresh</button>
      <ul>
        {data.users.map(user => (
          <li key={user.id}>
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

// Components/UserProfile.jsx
import { useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom';
import { GET_USER } from '../graphql/queries';

function UserProfile() {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_USER, {
    variables: { id },
    // Skip query if no id
    skip: !id,
    // Polling for real-time updates
    pollInterval: 30000, // 30 seconds
  });

  if (loading) return <Spinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!data?.user) return <NotFound />;

  const { user } = data;

  return (
    <div>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <h2>Posts</h2>
      <ul>
        {user.posts.map(post => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}`}</code></pre>
              <h3>
                {"Lazy Queries"}
              </h3>
              <pre><code>{`import { useLazyQuery } from '@apollo/client';
import { useState } from 'react';

const SEARCH_USERS = gql\`
  query SearchUsers($term: String!) {
    searchUsers(term: $term) {
      id
      name
      email
    }
  }
\`;

function UserSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchUsers, { loading, data }] = useLazyQuery(SEARCH_USERS);

  const handleSearch = (e) => {
    e.preventDefault();
    searchUsers({ variables: { term: searchTerm } });
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search users..."
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Searching...' : 'Search'}
        </button>
      </form>

      {data?.searchUsers && (
        <ul>
          {data.searchUsers.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}`}</code></pre>
              <h2>
                {"Mutations with Apollo Client"}
              </h2>
              <h3>
                {"Using useMutation Hook"}
              </h3>
              <pre><code>{`// src/graphql/mutations.js
import { gql } from '@apollo/client';

export const CREATE_POST = gql\`
  mutation CreatePost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
      title
      content
      author {
        id
        name
      }
    }
  }
\`;

export const UPDATE_POST = gql\`
  mutation UpdatePost($id: ID!, $input: UpdatePostInput!) {
    updatePost(id: $id, input: $input) {
      id
      title
      content
      published
    }
  }
\`;

export const DELETE_POST = gql\`
  mutation DeletePost($id: ID!) {
    deletePost(id: $id)
  }
\`;

// Components/CreatePostForm.jsx
import { useMutation } from '@apollo/client';
import { CREATE_POST, GET_POSTS } from '../graphql';

function CreatePostForm({ authorId }) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
  });

  const [createPost, { loading, error }] = useMutation(CREATE_POST, {
    // Update cache after mutation
    update(cache, { data: { createPost } }) {
      // Read current posts from cache
      const existingPosts = cache.readQuery({ query: GET_POSTS });

      // Write new posts to cache
      if (existingPosts) {
        cache.writeQuery({
          query: GET_POSTS,
          data: {
            posts: {
              ...existingPosts.posts,
              edges: [
                { cursor: createPost.id, node: createPost },
                ...existingPosts.posts.edges,
              ],
            },
          },
        });
      }
    },
    // Or simply refetch queries
    refetchQueries: [{ query: GET_POSTS }],

    onCompleted: (data) => {
      console.log('Post created:', data.createPost);
      setFormData({ title: '', content: '' });
    },
    onError: (error) => {
      console.error('Failed to create post:', error);
    },
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createPost({
      variables: {
        input: {
          ...formData,
          authorId,
        },
      },
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      {error && <div className="error">{error.message}</div>}

      <input
        type="text"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        placeholder="Post title"
        required
      />

      <textarea
        value={formData.content}
        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
        placeholder="Write your post..."
        required
      />

      <button type="submit" disabled={loading}>
        {loading ? 'Creating...' : 'Create Post'}
      </button>
    </form>
  );
}`}</code></pre>
              <h3>
                {"Optimistic Updates"}
              </h3>
              <pre><code>{`function TogglePublishButton({ post }) {
  const [updatePost] = useMutation(UPDATE_POST, {
    // Optimistic response - update UI immediately
    optimisticResponse: {
      updatePost: {
        __typename: 'Post',
        id: post.id,
        title: post.title,
        content: post.content,
        published: !post.published,
      },
    },
  });

  return (
    <button
      onClick={() =>
        updatePost({
          variables: {
            id: post.id,
            input: { published: !post.published },
          },
        })
      }
    >
      {post.published ? 'Unpublish' : 'Publish'}
    </button>
  );
}

// Delete with optimistic update
function DeletePostButton({ postId }) {
  const [deletePost] = useMutation(DELETE_POST, {
    variables: { id: postId },

    optimisticResponse: {
      deletePost: true,
    },

    update(cache) {
      // Remove from cache
      cache.modify({
        fields: {
          posts(existingPosts = { edges: [] }, { readField }) {
            return {
              ...existingPosts,
              edges: existingPosts.edges.filter(
                edge => readField('id', edge.node) !== postId
              ),
            };
          },
        },
      });

      // Evict the deleted post
      cache.evict({ id: \`Post:\${postId}\` });
      cache.gc(); // Garbage collect
    },
  });

  return (
    <button onClick={() => deletePost()}>Delete</button>
  );
}`}</code></pre>
              <h2>
                {"Subscriptions (Real-Time)"}
              </h2>
              <h3>
                {"Server Setup"}
              </h3>
              <pre><code>{`// server.js
const { createServer } = require('http');
const { WebSocketServer } = require('ws');
const { useServer } = require('graphql-ws/lib/use/ws');
const { makeExecutableSchema } = require('@graphql-tools/schema');
const { PubSub } = require('graphql-subscriptions');

const pubsub = new PubSub();

const typeDefs = \`#graphql
  type Subscription {
    postCreated: Post!
    postUpdated(id: ID!): Post!
    commentAdded(postId: ID!): Comment!
  }
\`;

const resolvers = {
  Mutation: {
    createPost: async (_, { input }) => {
      const post = await Post.create(input);

      // Publish event
      pubsub.publish('POST_CREATED', { postCreated: post });

      return post;
    },
  },

  Subscription: {
    postCreated: {
      subscribe: () => pubsub.asyncIterator(['POST_CREATED']),
    },
    postUpdated: {
      subscribe: (_, { id }) => {
        return pubsub.asyncIterator([\`POST_UPDATED_\${id}\`]);
      },
    },
    commentAdded: {
      subscribe: (_, { postId }) => {
        return pubsub.asyncIterator([\`COMMENT_ADDED_\${postId}\`]);
      },
    },
  },
};

// Setup WebSocket server
const schema = makeExecutableSchema({ typeDefs, resolvers });
const httpServer = createServer(app);
const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

useServer({ schema }, wsServer);

httpServer.listen(4000);`}</code></pre>
              <h3>
                {"Client Subscription Setup"}
              </h3>
              <pre><code>{`// src/apollo/client.js
import { split } from '@apollo/client';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';
import { getMainDefinition } from '@apollo/client/utilities';

const wsLink = new GraphQLWsLink(
  createClient({
    url: 'ws://localhost:4000/graphql',
    connectionParams: {
      authToken: localStorage.getItem('token'),
    },
  })
);

// Split link - use WS for subscriptions, HTTP for queries/mutations
const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  from([errorLink, authLink, httpLink])
);

export const client = new ApolloClient({
  link: splitLink,
  cache,
});

// Using useSubscription hook
const POST_SUBSCRIPTION = gql\`
  subscription OnPostCreated {
    postCreated {
      id
      title
      author {
        name
      }
    }
  }
\`;

function PostFeed() {
  const { data: queryData } = useQuery(GET_POSTS);

  const { data: subData } = useSubscription(POST_SUBSCRIPTION, {
    onSubscriptionData: ({ subscriptionData }) => {
      // Show notification
      toast(\`New post: \${subscriptionData.data.postCreated.title}\`);
    },
  });

  // Combine query and subscription data
  const posts = useMemo(() => {
    const queryPosts = queryData?.posts?.edges || [];
    const newPost = subData?.postCreated;

    if (newPost && !queryPosts.find(p => p.node.id === newPost.id)) {
      return [{ node: newPost }, ...queryPosts];
    }
    return queryPosts;
  }, [queryData, subData]);

  return (
    <ul>
      {posts.map(({ node }) => (
        <li key={node.id}>{node.title}</li>
      ))}
    </ul>
  );
}`}</code></pre>
              <h2>
                {"Fragments for Reusability"}
              </h2>
              <pre><code>{`// src/graphql/fragments.js
import { gql } from '@apollo/client';

export const USER_FIELDS = gql\`
  fragment UserFields on User {
    id
    name
    email
    avatar
  }
\`;

export const POST_FIELDS = gql\`
  fragment PostFields on Post {
    id
    title
    content
    published
    createdAt
  }
\`;

export const POST_WITH_AUTHOR = gql\`
  \${USER_FIELDS}
  \${POST_FIELDS}

  fragment PostWithAuthor on Post {
    ...PostFields
    author {
      ...UserFields
    }
  }
\`;

// Using fragments in queries
export const GET_POST_DETAIL = gql\`
  \${POST_WITH_AUTHOR}

  query GetPostDetail($id: ID!) {
    post(id: $id) {
      ...PostWithAuthor
      comments {
        id
        text
        author {
          ...UserFields
        }
      }
    }
  }
\`;`}</code></pre>
              <h2>
                {"Custom Hooks for GraphQL"}
              </h2>
              <pre><code>{`// src/hooks/usePosts.js
import { useQuery, useMutation, useSubscription } from '@apollo/client';
import { GET_POSTS, CREATE_POST, POST_SUBSCRIPTION } from '../graphql';

export function usePosts(options = {}) {
  const { published, first = 10 } = options;

  const {
    data,
    loading,
    error,
    fetchMore,
    refetch,
  } = useQuery(GET_POSTS, {
    variables: { first, published },
    notifyOnNetworkStatusChange: true,
  });

  const [createPost, { loading: creating }] = useMutation(CREATE_POST, {
    refetchQueries: [{ query: GET_POSTS, variables: { first, published } }],
  });

  // Subscribe to new posts
  useSubscription(POST_SUBSCRIPTION, {
    onSubscriptionData: () => {
      refetch();
    },
  });

  const loadMore = () => {
    if (data?.posts?.pageInfo?.hasNextPage) {
      fetchMore({
        variables: {
          after: data.posts.pageInfo.endCursor,
        },
      });
    }
  };

  return {
    posts: data?.posts?.edges?.map(e => e.node) || [],
    loading,
    error,
    creating,
    hasMore: data?.posts?.pageInfo?.hasNextPage,
    totalCount: data?.posts?.totalCount,
    createPost: (input) => createPost({ variables: { input } }),
    loadMore,
    refetch,
  };
}

// Usage
function PostsList() {
  const { posts, loading, hasMore, loadMore, createPost } = usePosts({
    published: true,
  });

  if (loading && !posts.length) return <Spinner />;

  return (
    <div>
      {posts.map(post => (
        <PostCard key={post.id} post={post} />
      ))}
      {hasMore && (
        <button onClick={loadMore} disabled={loading}>
          {loading ? 'Loading...' : 'Load More'}
        </button>
      )}
    </div>
  );
}`}</code></pre>
              <h2>
                {"Error Handling"}
              </h2>
              <pre><code>{`// Server-side error handling
const { GraphQLError } = require('graphql');

const resolvers = {
  Mutation: {
    createPost: async (_, { input }, context) => {
      // Authentication check
      if (!context.user) {
        throw new GraphQLError('You must be logged in', {
          extensions: { code: 'UNAUTHENTICATED' },
        });
      }

      // Authorization check
      if (context.user.role !== 'ADMIN') {
        throw new GraphQLError('Not authorized', {
          extensions: { code: 'FORBIDDEN' },
        });
      }

      // Validation
      if (input.title.length < 3) {
        throw new GraphQLError('Title must be at least 3 characters', {
          extensions: {
            code: 'BAD_USER_INPUT',
            field: 'title',
          },
        });
      }

      try {
        return await Post.create(input);
      } catch (error) {
        throw new GraphQLError('Failed to create post', {
          extensions: {
            code: 'INTERNAL_SERVER_ERROR',
            originalError: error.message,
          },
        });
      }
    },
  },
};

// Client-side error handling
function CreatePostForm() {
  const [createPost, { error }] = useMutation(CREATE_POST);

  // Parse GraphQL errors
  const getFieldError = (fieldName) => {
    return error?.graphQLErrors?.find(
      err => err.extensions?.field === fieldName
    )?.message;
  };

  return (
    <form>
      <input name="title" />
      {getFieldError('title') && (
        <span className="error">{getFieldError('title')}</span>
      )}
    </form>
  );
}`}</code></pre>
              <h2>
                {"Best Practices"}
              </h2>
              <h3>
                {"Performance Optimization"}
              </h3>
              <pre><code>{`// 1. DataLoader for N+1 problem
const DataLoader = require('dataloader');

const createLoaders = () => ({
  userLoader: new DataLoader(async (ids) => {
    const users = await User.findByIds(ids);
    return ids.map(id => users.find(u => u.id === id));
  }),
  postsByAuthorLoader: new DataLoader(async (authorIds) => {
    const posts = await Post.findByAuthorIds(authorIds);
    return authorIds.map(id => posts.filter(p => p.authorId === id));
  }),
});

// In context
context: async ({ req }) => ({
  user: req.user,
  loaders: createLoaders(),
}),

// In resolvers
User: {
  posts: (user, _, { loaders }) => {
    return loaders.postsByAuthorLoader.load(user.id);
  },
},

// 2. Query complexity analysis
const { createComplexityLimitRule } = require('graphql-validation-complexity');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  validationRules: [
    createComplexityLimitRule(1000, {
      scalarCost: 1,
      objectCost: 10,
      listFactor: 20,
    }),
  ],
});

// 3. Persisted queries for security
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('apollo-server-core');

const server = new ApolloServer({
  persistedQueries: {
    cache: new InMemoryCache(),
  },
});`}</code></pre>
              <div className="key-takeaways">
                <h3>
                  {"Key Takeaways"}
                </h3>
                <ul>
                  <li>
                    {"GraphQL allows clients to request exactly the data they need"}
                  </li>
                  <li>
                    {"Apollo Server provides a robust GraphQL server implementation"}
                  </li>
                  <li>
                    {"Apollo Client handles caching, state management, and UI updates"}
                  </li>
                  <li>
                    {"Use fragments for reusable query parts"}
                  </li>
                  <li>
                    {"Implement cursor-based pagination for large datasets"}
                  </li>
                  <li>
                    {"Subscriptions enable real-time data updates"}
                  </li>
                  <li>
                    {"DataLoader solves the N+1 query problem"}
                  </li>
                  <li>
                    {"Optimistic updates provide instant UI feedback"}
                  </li>
                </ul>
              </div>
            </section>
            <nav className="article-nav">
              <Link href="/full-stack-javascript/articles/testing" className="prev-article">
                {"← Testing with Jest"}
              </Link>
              <Link href="/full-stack-javascript/articles/websockets" className="next-article">
                {"WebSockets & Real-Time →"}
              </Link>
            </nav>
          </article>
        </div>
      </main>

      <footer>
        <div className="container">
          <p>
            {"© 2024 Codiin. All rights reserved."}
          </p>
        </div>
      </footer>

    </>
  );
}
