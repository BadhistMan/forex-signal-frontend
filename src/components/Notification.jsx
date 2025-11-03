import React, { useState, useEffect } from 'react';
import { X, Bell, TrendingUp, TrendingDown } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Notification = () => {
  const [notifications, setNotifications] = useState([]);
  const [show, setShow] = useState(false);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      // Simulate new signal notifications (in real app, this would come from WebSocket)
      const interval = setInterval(() => {
        if (Math.random() > 0.7) { // 30% chance every 30 seconds
          const symbols = ['EUR/USD', 'BTC/USD', 'AAPL', 'GBP/USD'];
          const signalTypes = ['BUY', 'SELL'];
          const strengths = ['STRONG BUY', 'BUY', 'STRONG SELL', 'SELL'];
          
          const newNotification = {
            id: Date.now(),
            symbol: symbols[Math.floor(Math.random() * symbols.length)],
            signal: signalTypes[Math.floor(Math.random() * signalTypes.length)],
            strength: strengths[Math.floor(Math.random() * strengths.length)],
            confidence: Math.floor(Math.random() * 30) + 70,
            timestamp: new Date()
          };
          
          setNotifications(prev => [newNotification, ...prev.slice(0, 4)]);
          setShow(true);
          
          // Auto hide after 5 seconds
          setTimeout(() => setShow(false), 5000);
        }
      }, 30000);
      
      return () => clearInterval(interval);
    }
  }, [user]);

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
    if (notifications.length === 1) {
      setShow(false);
    }
  };

  const getSignalIcon = (signal) => {
    return signal === 'BUY' ? <TrendingUp className="w-4 h-4" /> : <TrendingDown className="w-4 h-4" />;
  };

  const getSignalColor = (strength) => {
    if (strength.includes('BUY')) return 'text-green-600';
    return 'text-red-600';
  };

  if (!user || !show || notifications.length === 0) return null;

  return (
    <div className="fixed top-20 right-4 z-50 space-y-2">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className="bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 p-4 max-w-sm animate-in slide-in-from-right duration-300"
        >
          <div className="flex items-start justify-between">
            <div className="flex items-center space-x-3">
              <div className={`p-2 rounded-full ${getSignalColor(notification.strength)} bg-opacity-10`}>
                {getSignalIcon(notification.signal)}
              </div>
              <div>
                <div className="flex items-center space-x-2">
                  <span className="font-semibold text-gray-900 dark:text-white">
                    {notification.symbol}
                  </span>
                  <span className={`text-sm font-medium ${getSignalColor(notification.strength)}`}>
                    {notification.strength}
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {notification.confidence}% confidence
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-500">
                  {notification.timestamp.toLocaleTimeString()}
                </p>
              </div>
            </div>
            <button
              onClick={() => removeNotification(notification.id)}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notification;
