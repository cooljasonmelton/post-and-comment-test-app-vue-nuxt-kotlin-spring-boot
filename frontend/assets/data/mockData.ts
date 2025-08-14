// Mock feed data for testing different scenarios
export const mockFeedData = [
  {
    id: "post-1",
    content:
      "Just launched my new side project! 🚀 Would love to get some feedback from the community. It's a simple task manager built with React and TypeScript.",
    createdAt: "2025-08-14T10:30:00Z",
    likesCount: 23,
    commentsCount: 8,
    isDeleted: false,
    user: {
      id: "user-1",
      username: "techbuilder92",
      avatarUrl: "https://picsum.photos/seed/user1/150/150",
    },
  },
  {
    id: "post-2",
    content:
      "Hot take: TypeScript is overrated for small projects. The overhead just isn't worth it when you're moving fast and breaking things.",
    createdAt: "2025-08-14T09:15:00Z",
    likesCount: 156,
    commentsCount: 47,
    isDeleted: false,
    user: {
      id: "user-2",
      username: "jsdev_sarah",
      avatarUrl: "https://picsum.photos/seed/user2/150/150",
    },
  },
  {
    id: "post-3",
    content:
      "Beautiful sunset from my home office window today. Sometimes you need to step away from the code and appreciate the simple things ✨",
    createdAt: "2025-08-14T08:45:00Z",
    likesCount: 89,
    commentsCount: 12,
    isDeleted: false,
    user: {
      id: "user-3",
      username: "mindful_coder",
      avatarUrl: "https://picsum.photos/seed/user3/150/150",
    },
  },
  {
    id: "post-4",
    content: "This content has been deleted by the user.",
    createdAt: "2025-08-14T07:20:00Z",
    likesCount: 0,
    commentsCount: 3, // Comments might still exist
    isDeleted: true,
    user: {
      id: "user-4",
      username: "deleted_user",
      avatarUrl: null,
    },
  },
  {
    id: "post-5",
    content:
      "Anyone else struggling with work-life balance in tech? I've been coding for 12 hours straight and my brain feels like mush 🧠💀",
    createdAt: "2025-08-14T06:30:00Z",
    likesCount: 234,
    commentsCount: 89,
    isDeleted: false,
    user: {
      id: "user-5",
      username: "burnout_survivor",
      avatarUrl: "https://picsum.photos/seed/user5/150/150",
    },
  },
];

// Additional mock data for edge cases
export const mockEdgeCases = [
  // Very long content
  {
    id: "post-long",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
    createdAt: "2025-08-13T23:59:00Z",
    likesCount: 5,
    commentsCount: 2,
    isDeleted: false,
    user: {
      id: "user-6",
      username: "verbose_writer",
      avatarUrl: "https://picsum.photos/seed/user6/150/150",
    },
  },
  // No engagement
  {
    id: "post-lonely",
    content: "Hello world... is anyone out there? 👋",
    createdAt: "2025-08-13T22:00:00Z",
    likesCount: 0,
    commentsCount: 0,
    isDeleted: false,
    user: {
      id: "user-7",
      username: "new_user_2024",
      avatarUrl: null, // New user with no avatar
    },
  },
  // Very popular post
  {
    id: "post-viral",
    content: "PSA: Remember to git commit before you git push --force 😅",
    createdAt: "2025-08-13T20:15:00Z",
    likesCount: 1847,
    commentsCount: 312,
    isDeleted: false,
    user: {
      id: "user-8",
      username: "git_master",
      avatarUrl: "https://picsum.photos/seed/user8/150/150",
    },
  },
];

// TypeScript interface for the feed response
export interface FeedPost {
  id: string;
  content: string;
  createdAt: string;
  likesCount: number;
  commentsCount: number;
  isDeleted: boolean;
  user: {
    id: string;
    username: string;
    avatarUrl: string | null;
  };
}

export interface FeedResponse {
  posts: FeedPost[];
  pagination: {
    page: number;
    limit: number;
    totalPages: number;
    totalPosts: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
  };
}

// Mock API response
export const mockFeedResponse: FeedResponse = {
  posts: mockFeedData,
  pagination: {
    page: 1,
    limit: 10,
    totalPages: 15,
    totalPosts: 147,
    hasNextPage: true,
    hasPreviousPage: false,
  },
};
