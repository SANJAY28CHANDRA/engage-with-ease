
export interface User {
  id: string;
  name: string;
  email: string;
  image: string;
  role: string;
  bio: string;
}

export interface Thread {
  id: string;
  title: string;
  content: string;
  author: User;
  createdAt: string;
  category: string;
  likes: number;
  dislikes: number;
  saved: boolean;
  responses: Response[];
}

export interface Response {
  id: string;
  content: string;
  author: User;
  createdAt: string;
  likes: number;
  dislikes: number;
}

export interface Category {
  name: string;
  color: string;
}

export interface Topic {
  name: string;
  icon: string;
}
