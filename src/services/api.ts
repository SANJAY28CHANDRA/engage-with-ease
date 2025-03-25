
import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

// Create axios instance
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding the auth token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// User APIs
export const registerUser = (userData: any) => {
  return api.post('/users', userData);
};

export const loginUser = (credentials: any) => {
  return api.post('/users/login', credentials);
};

export const getCurrentUser = () => {
  return api.get('/users/me');
};

export const updateUserProfile = (userData: any) => {
  return api.put('/users/profile', userData);
};

// Thread APIs
export const getAllThreads = () => {
  return api.get('/threads');
};

export const getThreadById = (id: string) => {
  return api.get(`/threads/${id}`);
};

export const getThreadsByCategory = (category: string) => {
  return api.get(`/threads/category/${category}`);
};

export const createThread = (threadData: any) => {
  return api.post('/threads', threadData);
};

export const updateThread = (id: string, threadData: any) => {
  return api.put(`/threads/${id}`, threadData);
};

export const deleteThread = (id: string) => {
  return api.delete(`/threads/${id}`);
};

export const addResponse = (threadId: string, content: string) => {
  return api.post(`/threads/${threadId}/responses`, { content });
};

export const voteThread = (threadId: string, action: 'like' | 'dislike') => {
  return api.put(`/threads/${threadId}/vote`, { action });
};

export default api;
