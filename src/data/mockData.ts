
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

// Added more mock users for variety in discussions
const MOCK_USERS = {
  john: {
    id: "1",
    name: "John Doe",
    email: "john@example.com",
    image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
    role: "user-student",
    bio: "Focus and what makes you happy, relax at a moment, and play games;"
  },
  astronaut: {
    id: "2",
    name: "Astronout",
    email: "astro@example.com",
    image: "/lovable-uploads/369fcfd0-fb4f-4fc8-ac20-dc665a975905.png",
    role: "developer",
    bio: "Exploring the universe of code one commit at a time."
  },
  sci: {
    id: "3",
    name: "Sci",
    email: "sci@example.com",
    image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
    role: "student",
    bio: "Science enthusiast and eternal learner."
  },
  ebay: {
    id: "4",
    name: "Ebayyou Anggoro",
    email: "ebay@example.com",
    image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
    role: "developer",
    bio: "Full-stack developer with a passion for UI/UX."
  },
  techGuru: {
    id: "5",
    name: "Tech Guru",
    email: "tech@example.com",
    image: "/lovable-uploads/369fcfd0-fb4f-4fc8-ac20-dc665a975905.png",
    role: "expert",
    bio: "Technology expert with 15+ years in the industry."
  },
  sportsLover: {
    id: "6",
    name: "Sports Enthusiast",
    email: "sports@example.com",
    image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
    role: "user",
    bio: "Living for the game, breathing for the team."
  },
  movieBuff: {
    id: "7",
    name: "Movie Buff",
    email: "movies@example.com",
    image: "/lovable-uploads/369fcfd0-fb4f-4fc8-ac20-dc665a975905.png",
    role: "critic",
    bio: "Watching and reviewing films is my passion."
  },
  envActivist: {
    id: "8",
    name: "Eco Warrior",
    email: "eco@example.com",
    image: "/lovable-uploads/9b84da61-785c-4105-bd90-8e7a6fbcd21f.png",
    role: "activist",
    bio: "Fighting for a sustainable future for all of us."
  }
};

export const MOCK_THREADS: Thread[] = [
  // Original threads
  {
    id: "1",
    title: "Front-end Development And Backend Developer",
    content: "The three main languages you need to know well are HTML, CSS, and JavaScript. From there you can focus on frameworks, libraries, and other useful tools...",
    author: MOCK_USERS.astronaut,
    createdAt: "6h ago",
    category: "Front-end",
    likes: 10,
    dislikes: 2,
    saved: false,
    responses: [
      {
        id: "1",
        content: "Yes, I agree! The three main languages you need to know well are HTML, CSS, and JavaScript. I'd also recommend learning React or Vue for modern web development.",
        author: MOCK_USERS.sci,
        createdAt: "5h ago",
        likes: 5,
        dislikes: 0
      },
      {
        id: "2",
        content: "Don't forget about TypeScript! It has really improved my development experience by catching errors early.",
        author: MOCK_USERS.ebay,
        createdAt: "3h ago",
        likes: 7,
        dislikes: 1
      }
    ]
  },
  {
    id: "2",
    title: "Best Practices for CSS Organization",
    content: "I've been working on large projects and finding it difficult to maintain CSS. What methodologies do you recommend? BEM, SMACSS, or something else?",
    author: MOCK_USERS.ebay,
    createdAt: "1d ago",
    category: "Front-end",
    likes: 15,
    dislikes: 3,
    saved: true,
    responses: [
      {
        id: "3",
        content: "I've had great success with Tailwind CSS lately. It allows for rapid development and keeps your HTML and styling together which I find more maintainable.",
        author: MOCK_USERS.astronaut,
        createdAt: "20h ago",
        likes: 8,
        dislikes: 2
      }
    ]
  },
  
  // Entertainment Category
  {
    id: "3",
    title: "Latest Movie Recommendations",
    content: "I just watched 'Dune Part 2' and it was amazing! What other sci-fi films would you recommend that have the same epic scale?",
    author: MOCK_USERS.movieBuff,
    createdAt: "2d ago",
    category: "Entertainment",
    likes: 28,
    dislikes: 3,
    saved: false,
    responses: [
      {
        id: "4",
        content: "If you liked Dune, you should definitely check out 'Blade Runner 2049' by the same director. The cinematography is breathtaking!",
        author: MOCK_USERS.john,
        createdAt: "1d ago",
        likes: 12,
        dislikes: 0
      },
      {
        id: "5",
        content: "I would recommend 'Interstellar' for its combination of hard science concepts and emotional storytelling.",
        author: MOCK_USERS.sci,
        createdAt: "1d ago",
        likes: 9,
        dislikes: 1
      }
    ]
  },
  {
    id: "4",
    title: "Streaming Services Comparison",
    content: "With so many streaming services now, it's getting expensive to subscribe to all of them. Which ones do you think offer the best value for money?",
    author: MOCK_USERS.john,
    createdAt: "4d ago",
    category: "Entertainment",
    likes: 42,
    dislikes: 5,
    saved: true,
    responses: [
      {
        id: "6",
        content: "I've found that rotating subscriptions works well. Subscribe to one service for a month, binge what you want, then switch to another the next month.",
        author: MOCK_USERS.movieBuff,
        createdAt: "3d ago",
        likes: 19,
        dislikes: 2
      }
    ]
  },
  
  // Programming Category
  {
    id: "5",
    title: "Learning React in 2023 - Roadmap",
    content: "I'm a beginner programmer looking to learn React. What's the best learning path in 2023 with all the recent updates to the framework?",
    author: MOCK_USERS.sci,
    createdAt: "1w ago",
    category: "Programming",
    likes: 36,
    dislikes: 2,
    saved: false,
    responses: [
      {
        id: "7",
        content: "Start with JavaScript fundamentals before diving into React. Understanding closures, promises, and the event loop will make React much easier.",
        author: MOCK_USERS.astronaut,
        createdAt: "6d ago",
        likes: 15,
        dislikes: 0
      },
      {
        id: "8",
        content: "The official React docs have been completely rewritten and are now an excellent resource for beginners. They have a 'learn by doing' approach.",
        author: MOCK_USERS.ebay,
        createdAt: "5d ago",
        likes: 12,
        dislikes: 1
      }
    ]
  },
  {
    id: "6",
    title: "Backend Performance Optimization",
    content: "Our API endpoints are getting slow as our user base grows. What are some effective strategies for scaling a Node.js backend?",
    author: MOCK_USERS.techGuru,
    createdAt: "2w ago",
    category: "Back-end",
    likes: 29,
    dislikes: 1,
    saved: true,
    responses: [
      {
        id: "9",
        content: "Implement caching with Redis for frequently accessed data. It made a huge difference in our response times.",
        author: MOCK_USERS.astronaut,
        createdAt: "12d ago",
        likes: 18,
        dislikes: 0
      },
      {
        id: "10",
        content: "Consider using a load balancer and horizontal scaling. We deployed multiple instances behind an Nginx load balancer and it helped distribute the load.",
        author: MOCK_USERS.ebay,
        createdAt: "10d ago",
        likes: 14,
        dislikes: 1
      }
    ]
  },
  
  // Sports Category
  {
    id: "7",
    title: "Euro 2024 Predictions",
    content: "With Euro 2024 coming up, which teams do you think have the best chance of winning the tournament?",
    author: MOCK_USERS.sportsLover,
    createdAt: "2d ago",
    category: "Sports",
    likes: 45,
    dislikes: 8,
    saved: false,
    responses: [
      {
        id: "11",
        content: "France has an incredibly talented squad with depth in every position. They have to be the favorites.",
        author: MOCK_USERS.john,
        createdAt: "1d ago",
        likes: 12,
        dislikes: 4
      },
      {
        id: "12",
        content: "England has been close in recent tournaments. With their attacking talent, this could be their year if they get their tactics right.",
        author: MOCK_USERS.sci,
        createdAt: "1d ago",
        likes: 10,
        dislikes: 3
      }
    ]
  },
  {
    id: "8",
    title: "Best Exercises for Beginners",
    content: "I'm just starting my fitness journey and feeling overwhelmed. What are some effective but manageable exercises for complete beginners?",
    author: MOCK_USERS.john,
    createdAt: "5d ago",
    category: "Sports",
    likes: 38,
    dislikes: 2,
    saved: true,
    responses: [
      {
        id: "13",
        content: "Walking is seriously underrated. Start with 30 minutes of brisk walking daily and gradually increase the pace and distance.",
        author: MOCK_USERS.sportsLover,
        createdAt: "4d ago",
        likes: 22,
        dislikes: 0
      },
      {
        id: "14",
        content: "Body weight exercises like squats, modified push-ups, and lunges are great to build basic strength without equipment.",
        author: MOCK_USERS.envActivist,
        createdAt: "3d ago",
        likes: 15,
        dislikes: 1
      }
    ]
  },
  
  // Artificial Intelligence Topic
  {
    id: "9",
    title: "Ethical Concerns in AI Development",
    content: "As AI systems become more advanced, what ethical guidelines should we establish to ensure they benefit humanity and minimize harm?",
    author: MOCK_USERS.techGuru,
    createdAt: "3d ago",
    category: "Programming",
    likes: 52,
    dislikes: 3,
    saved: false,
    responses: [
      {
        id: "15",
        content: "Transparency is crucial. We need to understand how AI systems make decisions, especially in high-stakes areas like healthcare and criminal justice.",
        author: MOCK_USERS.sci,
        createdAt: "2d ago",
        likes: 23,
        dislikes: 1
      },
      {
        id: "16",
        content: "Preventing bias in training data should be a priority. AI systems often reflect and amplify existing societal biases in their training data.",
        author: MOCK_USERS.envActivist,
        createdAt: "1d ago",
        likes: 18,
        dislikes: 0
      }
    ]
  },
  
  // Environmental Issues Topic
  {
    id: "10",
    title: "Individual Actions for Climate Change",
    content: "Beyond the big policy changes needed, what personal actions can individuals take that actually make a meaningful impact on climate change?",
    author: MOCK_USERS.envActivist,
    createdAt: "1w ago",
    category: "Environmental Issues",
    likes: 65,
    dislikes: 7,
    saved: true,
    responses: [
      {
        id: "17",
        content: "Reducing meat consumption, especially beef, can significantly lower your carbon footprint. Even going meatless one day a week helps.",
        author: MOCK_USERS.sci,
        createdAt: "6d ago",
        likes: 28,
        dislikes: 4
      },
      {
        id: "18",
        content: "Consider transportation choices. Walking, cycling, or public transport when possible makes a big difference over time.",
        author: MOCK_USERS.john,
        createdAt: "5d ago",
        likes: 19,
        dislikes: 1
      }
    ]
  },
  
  // Cryptocurrency and Blockchain Topic
  {
    id: "11",
    title: "Real-World Blockchain Applications Beyond Cryptocurrency",
    content: "Everyone talks about crypto, but what are some practical, non-financial applications of blockchain technology that show promise?",
    author: MOCK_USERS.techGuru,
    createdAt: "2w ago",
    category: "Blockchain-dev",
    likes: 37,
    dislikes: 4,
    saved: false,
    responses: [
      {
        id: "19",
        content: "Supply chain tracking is a great use case. Blockchain can provide transparency and traceability from manufacturer to consumer.",
        author: MOCK_USERS.astronaut,
        createdAt: "10d ago",
        likes: 15,
        dislikes: 1
      },
      {
        id: "20",
        content: "Digital identity verification that puts users in control of their data rather than corporations could be revolutionary.",
        author: MOCK_USERS.ebay,
        createdAt: "9d ago",
        likes: 12,
        dislikes: 2
      }
    ]
  },
  
  // Health & Wellness Trends Topic
  {
    id: "12",
    title: "Mental Health Practices in Daily Life",
    content: "With rising awareness about mental health, what are some evidence-based practices people can incorporate into their daily routines?",
    author: MOCK_USERS.john,
    createdAt: "5d ago",
    category: "Health & Wellness Trends",
    likes: 48,
    dislikes: 2,
    saved: true,
    responses: [
      {
        id: "21",
        content: "Mindfulness meditation for just 10 minutes a day has been shown to reduce stress and anxiety. There are great apps to get started.",
        author: MOCK_USERS.sci,
        createdAt: "4d ago",
        likes: 24,
        dislikes: 0
      },
      {
        id: "22",
        content: "Regular exercise is incredibly effective for mental health. Even a short walk can boost mood through endorphin release.",
        author: MOCK_USERS.sportsLover,
        createdAt: "3d ago",
        likes: 19,
        dislikes: 1
      }
    ]
  },
  
  // Gaming & Esports Topic
  {
    id: "13",
    title: "The Rise of Competitive Mobile Gaming",
    content: "Mobile esports are growing rapidly. What mobile games do you think have the best potential for competitive play at a professional level?",
    author: MOCK_USERS.techGuru,
    createdAt: "1w ago",
    category: "Gaming & Esports",
    likes: 39,
    dislikes: 5,
    saved: false,
    responses: [
      {
        id: "23",
        content: "PUBG Mobile and Mobile Legends have already established huge competitive scenes, especially in Asia where mobile gaming dominates.",
        author: MOCK_USERS.sci,
        createdAt: "5d ago",
        likes: 16,
        dislikes: 2
      },
      {
        id: "24",
        content: "Wild Rift (mobile League of Legends) has the backing of Riot Games and their esports experience. It could become the biggest mobile esport.",
        author: MOCK_USERS.astronaut,
        createdAt: "4d ago",
        likes: 12,
        dislikes: 1
      }
    ]
  },
  
  // Social Media & Content Creation Topic
  {
    id: "14",
    title: "Sustainable Content Creation Without Burnout",
    content: "Many creators face burnout trying to keep up with algorithm demands. How do you maintain a consistent content schedule while protecting your mental health?",
    author: MOCK_USERS.ebay,
    createdAt: "3d ago",
    category: "Social Media & Content Creation",
    likes: 56,
    dislikes: 2,
    saved: true,
    responses: [
      {
        id: "25",
        content: "Batch creation has been a game-changer for me. I dedicate one day to filming/creating multiple pieces of content that I can schedule throughout the week.",
        author: MOCK_USERS.movieBuff,
        createdAt: "2d ago",
        likes: 27,
        dislikes: 0
      },
      {
        id: "26",
        content: "Set clear boundaries with your audience about your posting schedule. Most followers appreciate transparency and don't expect daily content.",
        author: MOCK_USERS.john,
        createdAt: "1d ago",
        likes: 21,
        dislikes: 1
      },
      {
        id: "27",
        content: "Repurposing content across platforms has helped me a lot. One YouTube video can become several TikToks, an Instagram post, and a blog entry.",
        author: MOCK_USERS.techGuru,
        createdAt: "12h ago",
        likes: 18,
        dislikes: 0
      }
    ]
  },
  
  // Mobile-dev Thread
  {
    id: "15",
    title: "Flutter vs React Native in 2023",
    content: "I'm starting a new mobile app project and trying to decide between Flutter and React Native. What are the pros and cons of each in 2023?",
    author: MOCK_USERS.astronaut,
    createdAt: "4d ago",
    category: "Mobile-dev",
    likes: 42,
    dislikes: 3,
    saved: false,
    responses: [
      {
        id: "28",
        content: "I've used both extensively. Flutter has better performance and more consistent UI across platforms, but React Native has a larger community and ecosystem.",
        author: MOCK_USERS.ebay,
        createdAt: "3d ago",
        likes: 20,
        dislikes: 1
      },
      {
        id: "29",
        content: "If you already know JavaScript/React, React Native will have a much shorter learning curve. Dart (Flutter) is easy to learn but it's still another language.",
        author: MOCK_USERS.techGuru,
        createdAt: "2d ago",
        likes: 15,
        dislikes: 2
      }
    ]
  },
  
  // Data-analyst Thread
  {
    id: "16",
    title: "Essential Skills for Data Analysts in 2023",
    content: "The field is evolving quickly. Beyond SQL and Excel, what skills should a data analyst develop to stay competitive in today's job market?",
    author: MOCK_USERS.techGuru,
    createdAt: "6d ago",
    category: "Data-analyst",
    likes: 38,
    dislikes: 1,
    saved: true,
    responses: [
      {
        id: "30",
        content: "Python is becoming essential - especially pandas, numpy, and visualization libraries like matplotlib or seaborn. Most job postings now require it.",
        author: MOCK_USERS.sci,
        createdAt: "5d ago",
        likes: 22,
        dislikes: 0
      },
      {
        id: "31",
        content: "Data storytelling is underrated but crucial. Being able to communicate insights effectively to non-technical stakeholders can set you apart.",
        author: MOCK_USERS.ebay,
        createdAt: "4d ago",
        likes: 17,
        dislikes: 1
      }
    ]
  },
  
  // Machine-learning Thread
  {
    id: "17",
    title: "Getting Started with Machine Learning: Resources for Beginners",
    content: "I want to learn machine learning but there's so much information out there. What are good resources for someone with basic Python but no ML experience?",
    author: MOCK_USERS.sci,
    createdAt: "1w ago",
    category: "Machine-learning",
    likes: 47,
    dislikes: 2,
    saved: false,
    responses: [
      {
        id: "32",
        content: "Andrew Ng's Machine Learning course on Coursera is still one of the best introductions to the core concepts, even though it's been around for years.",
        author: MOCK_USERS.techGuru,
        createdAt: "6d ago",
        likes: 24,
        dislikes: 0
      },
      {
        id: "33",
        content: "For a more practical approach, 'Hands-On Machine Learning with Scikit-Learn, Keras, and TensorFlow' by Aurélien Géron is excellent.",
        author: MOCK_USERS.astronaut,
        createdAt: "5d ago",
        likes: 19,
        dislikes: 1
      }
    ]
  }
];
