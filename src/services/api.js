import axios from 'axios';

const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://forex-signal-backend-hx79.onrender.com/api';

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
});

// WebSocket service for real-time data
class WebSocketService {
  constructor() {
    this.ws = null;
    this.reconnectInterval = 5000;
    this.shouldReconnect = true;
    this.messageHandlers = new Set();
  }

  connect() {
    try {
      // Use wss for production, ws for development
      const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
      const wsUrl = `${protocol}//${window.location.hostname}${window.location.port ? ':' + window.location.port : ''}`;
      
      this.ws = new WebSocket('wss://forex-signal-backend-hx79.onrender.com');

      this.ws.onopen = () => {
        console.log('✅ Connected to WebSocket server');
      };

      this.ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        this.messageHandlers.forEach(handler => handler(data));
      };

      this.ws.onclose = () => {
        console.log('WebSocket connection closed');
        if (this.shouldReconnect) {
          setTimeout(() => this.connect(), this.reconnectInterval);
        }
      };

      this.ws.onerror = (error) => {
        console.error('WebSocket error:', error);
      };
    } catch (error) {
      console.error('WebSocket connection error:', error);
    }
  }

  addMessageHandler(handler) {
    this.messageHandlers.add(handler);
  }

  removeMessageHandler(handler) {
    this.messageHandlers.delete(handler);
  }

  disconnect() {
    this.shouldReconnect = false;
    if (this.ws) {
      this.ws.close();
    }
  }
}

export const websocketService = new WebSocketService();

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

export const tradingAPI = {
  getPortfolio: () => 
    api.get('/trading/portfolio').then(res => res.data),
  
  getTradeHistory: () => 
    api.get('/trading/history').then(res => res.data),
};

export const statsAPI = {
  getStats: () => 
    api.get('/stats').then(res => res.data),
};

export default api;
