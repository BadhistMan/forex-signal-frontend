import React from 'react';
import { Send, Mail, MapPin, Globe, Code, Heart, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Contact & Development
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-400">
          Get in touch with the developer behind Forex Signal Pro
        </p>
      </div>

      {/* Developer Info */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8">
        <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">
          {/* Developer Avatar & Basic Info */}
          <div className="flex-shrink-0 text-center md:text-left">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto md:mx-0 mb-4">
              <span className="text-white text-xl font-bold">BM</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              Badhist Man
            </h2>
            <p className="text-gray-600 dark:text-gray-400 flex items-center justify-center md:justify-start space-x-1 mt-1">
              <MapPin className="w-4 h-4" />
              <span>Ethiopia 🇪🇹</span>
            </p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              Full Stack Developer & FinTech Enthusiast
            </p>
          </div>

          {/* Detailed Information */}
          <div className="flex-1 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                About the Developer
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Passionate full-stack developer with expertise in building real-time trading systems, 
                algorithmic trading platforms, and financial technology solutions. Specializes in creating 
                innovative applications that bridge the gap between cutting-edge technology and financial markets. 
                With experience in React, Node.js, Python, and blockchain technologies, I create robust, 
                scalable solutions for modern trading needs.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="https://t.me/BadhistMan1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Send className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-blue-900 dark:text-blue-100">
                    Telegram
                  </div>
                  <div className="text-blue-700 dark:text-blue-300 text-sm">
                    @BadhistMan1
                  </div>
                </div>
              </a>

              <a
                href="mailto:contact@badhistman.com"
                className="flex items-center space-x-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors group"
              >
                <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-green-900 dark:text-green-100">
                    Email
                  </div>
                  <div className="text-green-700 dark:text-green-300 text-sm">
                    Available via Telegram
                  </div>
                </div>
              </a>

              <div className="flex items-center space-x-3 p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-purple-900 dark:text-purple-100">
                    Quick Response
                  </div>
                  <div className="text-purple-700 dark:text-purple-300 text-sm">
                    Typically replies within hours
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-3 p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-orange-900 dark:text-orange-100">
                    Timezone
                  </div>
                  <div className="text-orange-700 dark:text-orange-300 text-sm">
                    EAT (UTC+3)
                  </div>
                </div>
              </div>
            </div>

            {/* Skills & Technologies */}
            <div>
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center space-x-2">
                <Code className="w-4 h-4" />
                <span>Technologies & Expertise</span>
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'React', 'Node.js', 'PostgreSQL', 'TailwindCSS', 'TypeScript',
                  'Express.js', 'Python', 'Algorithmic Trading', 'Technical Analysis',
                  'REST APIs', 'WebSocket', 'Real-time Data', 'Chart.js', 'Recharts',
                  'JWT Authentication', 'Cryptocurrency APIs', 'Financial Markets'
                ].map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project Information */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-200 dark:border-blue-800">
          <Globe className="w-8 h-8 text-blue-600 dark:text-blue-400 mb-3" />
          <h3 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">
            Project Status
          </h3>
          <p className="text-blue-700 dark:text-blue-300 text-sm">
            Forex Signal Pro is actively maintained and regularly updated with new features, 
            improved algorithms, and enhanced user experience. Continuous monitoring ensures 
            optimal performance and reliability.
          </p>
        </div>

        <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-6 border border-green-200 dark:border-green-800">
          <Code className="w-8 h-8 text-green-600 dark:text-green-400 mb-3" />
          <h3 className="font-semibold text-green-900 dark:text-green-100 mb-2">
            Open Source Spirit
          </h3>
          <p className="text-green-700 dark:text-green-300 text-sm">
            Built with modern, open-source technologies. The architecture is designed to be 
            customizable and extensible for your specific trading needs and strategies.
          </p>
        </div>
      </div>

      {/* Services Offered */}
      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Services Offered</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Custom Trading Bots</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Bespoke algorithmic trading systems tailored to your specific strategy and risk tolerance.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Signal Generation Systems</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Advanced signal generation platforms with custom indicators and risk management.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Trading Dashboards</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Professional trading interfaces with real-time data, charts, and portfolio management.
            </p>
          </div>
          <div className="p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
            <h4 className="font-semibold text-gray-900 dark:text-white mb-2">API Integrations</h4>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Seamless integration with brokerage APIs, market data providers, and trading platforms.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl p-8 text-white">
        <h3 className="text-2xl font-bold mb-2">
          Ready to Enhance Your Trading Experience?
        </h3>
        <p className="mb-4 opacity-90 text-blue-100">
          Get in touch for custom trading solutions, algorithmic systems, or collaboration opportunities
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          <a
            href="https://t.me/BadhistMan1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            <Send className="w-4 h-4" />
            <span>Contact on Telegram</span>
          </a>
          <a
            href="mailto:contact@badhistman.com"
            className="inline-flex items-center space-x-2 bg-transparent border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:bg-opacity-10 transition-colors"
          >
            <Mail className="w-4 h-4" />
            <span>Send Email</span>
          </a>
        </div>
      </div>

      {/* Final Note */}
      <div className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
        <div className="flex items-center justify-center space-x-2 text-gray-600 dark:text-gray-400">
          <Heart className="w-4 h-4 text-red-500" />
          <span>Built with passion for the financial technology community</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
