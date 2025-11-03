import React from 'react';
import { Brain, Cpu, TrendingUp, Shield, Zap, BarChart3, Users, Target } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Analysis',
      description: 'Advanced machine learning algorithms analyze multiple technical indicators and market patterns in real-time.'
    },
    {
      icon: Cpu,
      title: 'Real-time Processing',
      description: 'Processes live market data every minute to generate up-to-date trading signals across all markets.'
    },
    {
      icon: BarChart3,
      title: 'Technical Indicators',
      description: 'Uses RSI, Moving Averages, EMA crossovers, and other technical indicators for comprehensive analysis.'
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: 'Includes confidence scoring and signal strength indicators to help you assess trading opportunities.'
    },
    {
      icon: Zap,
      title: 'Fast Execution',
      description: 'Lightning-fast signal generation and delivery to capitalize on market opportunities instantly.'
    },
    {
      icon: TrendingUp,
      title: 'Multi-Market Coverage',
      description: 'Covers Forex, Cryptocurrencies, and Stocks with specialized analysis for each market type.'
    }
  ];

  const technicalIndicators = [
    { name: 'RSI (Relative Strength Index)', description: 'Measures speed and change of price movements to identify overbought/oversold conditions' },
    { name: 'Moving Averages (SMA/EMA)', description: 'Identifies trend direction and potential support/resistance levels with crossover signals' },
    { name: 'Price Action Analysis', description: 'Analyzes recent price movements, patterns, and market structure for entry/exit points' },
    { name: 'Momentum Indicators', description: 'Detects the strength and velocity of price movements across different timeframes' }
  ];

  const marketCoverage = [
    { type: 'Forex', pairs: 'EUR/USD, GBP/USD, USD/JPY, USD/CHF, AUD/USD, USD/CAD', icon: TrendingUp },
    { type: 'Cryptocurrencies', pairs: 'BTC/USD, ETH/USD', icon: Zap },
    { type: 'Stocks', pairs: 'AAPL, TSLA, GOOGL, MSFT', icon: BarChart3 }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          About Forex Signal Pro
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Professional-grade trading signals powered by advanced algorithmic analysis and real-time market data from TwelveData API.
        </p>
      </div>

      {/* How It Works */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">How It Works</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-blue-600 dark:text-blue-400 font-bold">1</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Data Collection</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Real-time market data from TwelveData API for Forex, Crypto, and Stocks
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-green-600 dark:text-green-400 font-bold">2</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Technical Analysis</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Multiple indicators analyzed including RSI, Moving Averages, and EMA crossovers
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-purple-600 dark:text-purple-400 font-bold">3</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Signal Generation</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              AI algorithms generate Buy/Sell/Hold signals with confidence scores and strength indicators
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-orange-600 dark:text-orange-400 font-bold">4</span>
            </div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Delivery & Storage</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Signals delivered in real-time and stored for historical analysis and performance tracking
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700 hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Market Coverage */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Market Coverage</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {marketCoverage.map((market, index) => {
            const Icon = market.icon;
            return (
              <div key={index} className="text-center p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {market.type}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {market.pairs}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Technical Indicators */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technical Indicators Used</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {technicalIndicators.map((indicator, index) => (
            <div key={index} className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-white">
                  {indicator.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                  {indicator.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Signal Strength Explanation */}
      <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
        <h3 className="text-xl font-bold text-blue-900 dark:text-blue-100 mb-4">Understanding Signal Strength</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-white dark:bg-blue-800 rounded-lg">
            <div className="signal-strong-buy px-3 py-1 rounded-full text-sm font-medium mx-auto mb-2">STRONG BUY</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">High confidence buy signal with multiple indicators aligned</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-blue-800 rounded-lg">
            <div className="signal-buy px-3 py-1 rounded-full text-sm font-medium mx-auto mb-2">BUY</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Moderate confidence buy signal with positive indicators</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-blue-800 rounded-lg">
            <div className="signal-sell px-3 py-1 rounded-full text-sm font-medium mx-auto mb-2">SELL</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">Moderate confidence sell signal with negative indicators</p>
          </div>
          <div className="text-center p-4 bg-white dark:bg-blue-800 rounded-lg">
            <div className="signal-strong-sell px-3 py-1 rounded-full text-sm font-medium mx-auto mb-2">STRONG SELL</div>
            <p className="text-sm text-gray-600 dark:text-gray-300">High confidence sell signal with multiple indicators aligned</p>
          </div>
        </div>
      </div>

      {/* Developer Info */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-2">Developed by Badhist Man</h3>
          <p className="text-blue-100 mb-4">Full Stack Developer & Financial Technology Enthusiast</p>
          <div className="flex justify-center space-x-4 text-sm">
            <span>📍 Ethiopia 🇪🇹</span>
            <span>📧 Available via Telegram</span>
            <span>🔗 @BadhistMan1</span>
          </div>
        </div>
      </div>

      {/* Risk Disclaimer */}
      <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6">
        <h3 className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center">
          <Shield className="w-5 h-5 mr-2" />
          ⚠️ Important Risk Disclaimer
        </h3>
        <p className="text-yellow-700 dark:text-yellow-300 text-sm">
          Trading Forex, Cryptocurrencies, and Stocks involves substantial risk of loss and is not suitable for every investor. 
          The signals generated by this system are for informational and educational purposes only and should not be considered 
          as financial advice. Always conduct your own research, consider your investment objectives, and consult with a qualified 
          financial advisor before making any trading decisions. Past performance is not indicative of future results.
        </p>
      </div>
    </div>
  );
};

export default About;
