import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://forex-signal-backend-hx79.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

export const signalsAPI = {
  getSignals: () => 
    api.get('/signals').then(res => res.data),
  
  getHistory: (params) => 
    api.get('/signals/history', { params }).then(res => res.data),
  
  generateSignals: () => 
    api.post('/signals/generate').then(res => res.data),
};

export const pricesAPI = {
  getPrices: () => 
    api.get('/prices').then(res => res.data),
};

export const statsAPI = {
  getStats: () => 
    api.get('/stats').then(res => res.data),
};

// Health check
export const healthCheck = () => 
  api.get('/health').then(res => res.data);

export default api;
