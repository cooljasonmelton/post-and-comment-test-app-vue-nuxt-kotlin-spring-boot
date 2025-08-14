# post-and-comment-test-app-vue-nuxt-kotlin-spring-boot

STACK:
Frontend:

- Vue 3 + Nuxt 3
- Pinia for state management
- Tailwind CSS for styling
- Vue Router for feed/profile/settings pages
- Jest + Vue Test Utils for unit tests
- Cypress for E2E tests

Backend

- Spring Boot + Kotlin
- Expose RESTful API endpoints
- Use PostgreSQL or MySQL
- Define models for User, Post, Comment, Like
- Use Spring Security for auth
- Optional: Kafka for comment/like event notifications
- Optional: ElasticSearch for text search

DevOps

- Docker Compose to run frontend, backend, DB
- CI/CD using GitHub Actions
- Use SonarLint or SonarQube for static analysis
- Seed script to populate dummy data

### Schemas

```typescript
// User schema
export interface User {
  id: string; // UUID or string ID
  username: string;
  email: string;
  createdAt: string; // ISO date string
  // Add other fields like avatarUrl, bio, etc.
}

// Post schema
export interface Post {
  id: string;
  userId: string; // ID of the user who created the post
  content: string;
  likesCount: number;
  commentsCount: number;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string; // ISO date string

  // Possibly add likesCount, commentsCount, etc.
}

// Comment schema
export interface Comment {
  id: string;
  postId: string; // ID of the post this comment belongs to
  userId: string; // ID of the user who wrote the comment
  parentId: string | null; // null if top-level comment, else ID of the parent comment
  content: string;
  repliesCount: number;
  createdAt: string;
  updatedAt: string; // ISO date string
}

// GET /api/feed
// special endpoint aggregating data on BE
interface FeedPost {
  id: string;
  content: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  user: {
    id: string;
    username: string;
    // anything else important, avatarUrl, etc.
  };
}
```
