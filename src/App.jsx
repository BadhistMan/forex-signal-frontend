import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import SignalBoard from './components/SignalBoard';
import LiveCharts from './components/LiveCharts';
import History from './components/History';
import About from './components/About';
import Contact from './components/Contact';
import Notification from './components/Notification';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<SignalBoard />} />
            <Route path="/charts" element={<LiveCharts />} />
            <Route path="/history" element={<History />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <Notification />
      </div>
    </Router>
  );
}

export default App;
