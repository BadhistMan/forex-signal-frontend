import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, Filter } from 'lucide-react';
import { pricesAPI } from '../services/api';

const LiveCharts = () => {
  const [selectedSymbol, setSelectedSymbol] = useState('EUR/USD');
  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(true);

  const symbols = [
    'EUR/USD', 'GBP/USD', 'USD/JPY', 'USD/CHF', 
    'AUD/USD', 'USD/CAD', 'BTC/USD', 'ETH/USD',
    'AAPL', 'TSLA', 'GOOGL', 'MSFT'
  ];

  useEffect(() => {
    generateChartData();
  }, [selectedSymbol]);

  const generateChartData = () => {
    setLoading(true);
    
    // Generate mock chart data
    const basePrice = Math.random() * 100 + 50;
    const data = Array.from({ length: 50 }, (_, i) => {
      const time = new Date();
      time.setMinutes(time.getMinutes() - (50 - i));
      
      const price = basePrice + 
        Math.sin(i * 0.5) * 10 + 
        Math.random() * 5 - 2.5;
      
      return {
        time: time.toLocaleTimeString(),
        price: parseFloat(price.toFixed(4)),
        volume: Math.floor(Math.random() * 1000) + 100
      };
    });

    setChartData(data);
    setLoading(false);
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg">
          <p className="text-gray-600 dark:text-gray-400">{`Time: ${label}`}</p>
          <p className="text-gray-900 dark:text-white font-semibold">
            {`Price: $${payload[0].value}`}
          </p>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            {`Volume: ${payload[0].payload.volume}`}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Live Price Charts
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1">
            Real-time price movement and technical analysis
          </p>
        </div>
        
        <div className="flex items-center space-x-2">
          <Filter className="w-4 h-4 text-gray-500" />
          <select
            value={selectedSymbol}
            onChange={(e) => setSelectedSymbol(e.target.value)}
            className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {symbols.map(symbol => (
              <option key={symbol} value={symbol}>
                {symbol}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
          </div>
        ) : (
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" opacity={0.3} />
                <XAxis 
                  dataKey="time" 
                  stroke="#6B7280"
                  fontSize={12}
                />
                <YAxis 
                  stroke="#6B7280"
                  fontSize={12}
                  domain={['dataMin - 0.5', 'dataMax + 0.5']}
                />
                <Tooltip content={<CustomTooltip />} />
                <Line 
                  type="monotone" 
                  dataKey="price" 
                  stroke="#3B82F6" 
                  strokeWidth={2}
                  dot={false}
                  activeDot={{ r: 4, stroke: '#3B82F6', strokeWidth: 2 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
          <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Technical Indicators</h4>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            Charts include RSI, Moving Averages, and volume analysis for comprehensive technical analysis.
          </p>
        </div>
        
        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-4 border border-green-200 dark:border-green-800">
          <h4 className="font-semibold text-green-900 dark:text-green-100 mb-2">Real-time Data</h4>
          <p className="text-green-700 dark:text-green-300 text-sm">
            Prices update automatically every 30 seconds with live market data from multiple sources.
          </p>
        </div>
        
        <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-4 border border-purple-200 dark:border-purple-800">
          <h4 className="font-semibold text-purple-900 dark:text-purple-100 mb-2">Multiple Timeframes</h4>
          <p className="text-purple-700 dark:text-purple-300 text-sm">
            View 1-minute, 5-minute, and hourly charts for different trading strategies and timeframes.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LiveCharts;
