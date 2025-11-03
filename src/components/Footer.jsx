import React from 'react';
import { Shield, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
            <Shield className="w-4 h-4" />
            <span className="text-sm">Risk Warning: Trading carries substantial risk</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>by Badhist Man 🇪🇹</span>
          </div>
          <div className="text-sm text-gray-500 dark:text-gray-400">
            © 2024 Forex Signal Pro. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
