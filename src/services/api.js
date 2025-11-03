import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const api = axios.create({
  baseURL: API_BASE_URL,
});

// Request interceptor to include token
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor to handle errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (email, password) => 
    api.post('/users/login', { email, password }).then(res => res.data),
  register: (email, password, name) => 
    api.post('/users/register', { email, password, name }).then(res => res.data),
  getProfile: () => 
    api.get('/users/profile').then(res => res.data),
};

export const signalsAPI = {
  getSignals: () => 
    api.get('/signals').then(res => res.data),
  getHistory: (params) => 
    api.get('/signals/history', { params }).then(res => res.data),
  generateSignals: () => 
    api.post('/signals/generate').then(res => res.data),
  getUnreadCount: () => 
    api.get('/signals/unread-count').then(res => res.data),
};

export const pricesAPI = {
  getPrices: () => 
    api.get('/prices').then(res => res.data),
};

export const adminAPI = {
  getStats: () => 
    api.get('/admin/stats').then(res => res.data),
};

export default api;
