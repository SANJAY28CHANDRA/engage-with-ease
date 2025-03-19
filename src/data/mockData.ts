
import { Thread, Category, User, Topic } from "../types";

export const MOCK_USER: User = {
  id: "1",
  name: "John Doe",
  email: "john@example.com",
  image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
  role: "user-student",
  bio: "Focus and what makes you happy, relax at a moment, and play a games;"
};

export const CATEGORIES: Category[] = [
  { name: "Entertainment", color: "bg-[#a5d6a7]" },
  { name: "Programming", color: "bg-[#f8bbd0]" },
  { name: "Sports", color: "bg-[#b39ddb]" }
];

export const TRENDING_TOPICS: Topic[] = [
  { name: "Artificial Intelligence", icon: "" },
  { name: "Environmental Issues", icon: "" },
  { name: "Cryptocurrency and Blockchain", icon: "" },
  { name: "Health & Wellness Trends", icon: "" },
  { name: "Gaming & Esports", icon: "" },
  { name: "Social Media & Content Creation", icon: "" }
];

export const HAPPENING_NOW: string[] = [
  "Front-end",
  "Back-end",
  "Mobile-dev",
  "Data-analyst",
  "Machine-learning",
  "Blockchain-dev"
];

export const MOCK_THREADS: Thread[] = [
  {
    id: "1",
    title: "Front-end Development And Backend Developer",
    content: "The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools...",
    author: {
      id: "2",
      name: "Astronout",
      email: "astro@example.com",
      image: "/lovable-uploads/369fcfd0-fb4f-4fc8-ac20-dc665a975905.png",
      role: "developer",
      bio: ""
    },
    createdAt: "6h ago",
    category: "Front-end",
    likes: 10,
    dislikes: 10,
    saved: false,
    responses: [
      {
        id: "1",
        content: "yes ...The three main languages you need to know well are HTML, CSS, and JavaScript...",
        author: {
          id: "3",
          name: "Sci",
          email: "sci@example.com",
          image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
          role: "student",
          bio: ""
        },
        createdAt: "6h ago",
        likes: 5,
        dislikes: 2
      }
    ]
  },
  {
    id: "2",
    title: "Front-end Development",
    content: "The three main languages you need to know well are HTML, CSS, and JavaScript...",
    author: {
      id: "4",
      name: "Ebayyou Anggoro",
      email: "ebay@example.com",
      image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
      role: "developer",
      bio: ""
    },
    createdAt: "6h ago",
    category: "Front-end",
    likes: 10,
    dislikes: 10,
    saved: true,
    responses: []
  }
];
