import React, { useState, useEffect } from 'react';
import { Calendar, Filter, Download } from 'lucide-react';
import { signalsAPI } from '../services/api';
import { useAuth } from '../contexts/AuthContext';

const History = () => {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedSymbol, setSelectedSymbol] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [timeRange, setTimeRange] = useState('24');
  const { user } = useAuth();

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const params = {};
      if (selectedSymbol !== 'all') params.symbol = selectedSymbol;
      if (selectedType !== 'all') params.type = selectedType;
      params.days = timeRange;

      const data = await signalsAPI.getHistory(params);
      setHistory(data);
    } catch (error) {
      console.error('Error fetching history:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user) {
      fetchHistory();
    }
  }, [user, selectedSymbol, selectedType, timeRange]);

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

  const uniqueSymbols = [...new Set(history.map(item => item.symbol))];
  const uniqueTypes = [...new Set(history.map(item => item.type))];

  if (!user) {
    return (
      <div className="text-center py-12">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-6 max-w-md mx-auto">
          <p className="text-yellow-700 dark:text-yellow-300">
            Please <a href="/login" className="underline font-medium">sign in</a> to view your signal history.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Signal History
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Your personal trading signal history and performance
          </p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-4">
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <div className="flex items-center space-x-2">
            <Filter className="w-4 h-4 text-gray-500" />
            <select
              value={selectedSymbol}
              onChange={(e) => setSelectedSymbol(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Symbols</option>
              {uniqueSymbols.map(symbol => (
                <option key={symbol} value={symbol}>{symbol}</option>
              ))}
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="all">All Types</option>
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type.toUpperCase()}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-3 py-2 text-gray-900 dark:text-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="1">Last 24 Hours</option>
              <option value="7">Last Week</option>
              <option value="30">Last Month</option>
            </select>
          </div>

          <button className="flex items-center space-x-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg transition-colors text-sm">
            <Download className="w-4 h-4" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* History Table */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Symbol
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Signal
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Strength
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Confidence
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    RSI
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                    Time
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-600">
                {history.map((signal, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div>
                        <div className="text-sm font-medium text-gray-900 dark:text-white">
                          {signal.symbol}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {signal.type}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                      {signal.signal}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getSignalColor(signal.strength)}`}>
                        {signal.strength}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {signal.confidence}%
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      ${signal.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                      {signal.rsi || 'N/A'}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                      {new Date(signal.created_at).toLocaleString()}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {history.length === 0 && !loading && (
          <div className="text-center py-12 text-gray-500 dark:text-gray-400">
            No historical data found for the selected filters
          </div>
        )}
      </div>
    </div>
  );
};

export default History;
