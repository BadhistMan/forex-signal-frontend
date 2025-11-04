import React, { useState, useEffect } from 'react';
import { RefreshCw, TrendingUp, TrendingDown, Minus, Filter } from 'lucide-react';
import { signalsAPI, pricesAPI } from '../services/api';

const SignalBoard = () => {
  const [signals, setSignals] = useState([]);
  const [prices, setPrices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [filter, setFilter] = useState('all');

  const fetchData = async () => {
    try {
      setRefreshing(true);
      const [signalsData, pricesData] = await Promise.all([
        signalsAPI.getSignals(),
        pricesAPI.getPrices()
      ]);
      setSignals(signalsData);
      setPrices(pricesData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchData();
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const getSignalIcon = (signal) => {
    switch (signal) {
      case 'BUY':
        return <TrendingUp className="w-4 h-4" />;
      case 'SELL':
        return <TrendingDown className="w-4 h-4" />;
      default:
        return <Minus className="w-4 h-4" />;
    }
  };

  const getSignalColor = (strength) => {
    switch (strength) {
      case 'STRONG BUY':
        return 'signal-strong-buy';
      case 'BUY':
        return 'signal-buy';
      case 'WEAK BUY':
        return 'signal-weak-buy';
      case 'STRONG SELL':
        return 'signal-strong-sell';
      case 'SELL':
        return 'signal-sell';
      case 'WEAK SELL':
        return 'signal-weak-sell';
      default:
        return 'signal-hold';
    }
  };

  const getConfidenceColor = (confidence) => {
    if (confidence >= 80) return 'text-green-600 dark:text-green-400';
    if (confidence >= 60) return 'text-yellow-600 dark:text-yellow-400';
    return 'text-red-600 dark:text-red-400';
  };

  const getTypeColor = (type) => {
    switch (type) {
      case 'forex':
        return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
      case 'crypto':
        return 'bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200';
      case 'stock':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
    }
  };

  const filteredSignals = filter === 'all' 
    ? signals 
    : signals.filter(signal => signal.type === filter);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <RefreshCw className="w-8 h-8 text-blue-500 animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Live Trading Signals
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Real-time AI-generated signals for Forex, Crypto, and Stocks
          </p>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-sm text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Markets</option>
              <option value="forex">Forex</option>
              <option value="crypto">Crypto</option>
              <option value="stock">Stocks</option>
            </select>
          </div>
          
          <button
            onClick={fetchData}
            disabled={refreshing}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
            <span>Refresh</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredSignals.map((item) => (
          <div
            key={item.symbol}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                  {item.symbol}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                  {item.type} • {item.name}
                </p>
                <p className="text-lg text-gray-600 dark:text-gray-400 mt-1">
                  ${typeof item.price === 'number' ? item.price.toFixed(5) : item.price}
                </p>
              </div>
              
              <div className="flex flex-col items-end space-y-2">
                <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium capitalize ${getTypeColor(item.type)}`}>
                  {item.type}
                </span>
                
                <div className={`px-3 py-1 rounded-full text-sm font-medium flex items-center space-x-1 ${getSignalColor(item.strength)}`}>
                  {getSignalIcon(item.signal)}
                  <span>{item.strength}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm text-gray-600 dark:text-gray-400 mb-1">
                  <span>Confidence</span>
                  <span className={`font-semibold ${getConfidenceColor(item.confidence)}`}>
                    {item.confidence}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className={`h-2 rounded-full ${
                      item.confidence >= 80 
                        ? 'bg-green-500' 
                        : item.confidence >= 60 
                        ? 'bg-yellow-500' 
                        : 'bg-red-500'
                    }`}
                    style={{ width: `${item.confidence}%` }}
                  ></div>
                </div>
              </div>

              {item.rsi && (
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">RSI</span>
                  <span className={`font-semibold ${
                    item.rsi < 30 ? 'text-green-600 dark:text-green-400' :
                    item.rsi > 70 ? 'text-red-600 dark:text-red-400' :
                    'text-yellow-600 dark:text-yellow-400'
                  }`}>
                    {item.rsi}
                  </span>
                </div>
              )}

              <div className="text-xs text-gray-500 dark:text-gray-400 pt-2 border-t border-gray-100 dark:border-gray-700">
                Updated {new Date(item.created_at).toLocaleTimeString()}
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredSignals.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 dark:text-gray-500 mb-4">
            No signals available
          </div>
          <button 
            onClick={fetchData}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors"
          >
            Refresh Data
          </button>
        </div>
      )}
    </div>
  );
};

export default SignalBoard;
