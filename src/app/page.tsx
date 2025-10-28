'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import AnimatedCounter from './component/AnimatedCounter';
import AnimatedTabs from './component/AnimatedTabs';
import AboutHer from './component/AboutHer';
import LoginPage from './component/LoginPage';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [daysTogether, setDaysTogether] = useState(0);

  // Hitung days together dari 17 September 2022
  useEffect(() => {
    const startDate = new Date('2022-09-17');
    const today = new Date();
    const diffTime = today.getTime() - startDate.getTime();
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setDaysTogether(diffDays);
  }, []);

  function getDaysUntil(target: Date): number {
    const now = new Date();
    const diff = target.getTime() - now.getTime();
    return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
  }

  // Jika belum login, tampilkan halaman login
  if (!isAuthenticated) {
    return <LoginPage onLogin={() => setIsAuthenticated(true)} />;
  }

  // Jika sudah login, tampilkan halaman utama
  return (
    <main className="bg-pink-50 min-h-screen text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-16 px-4">
        <motion.img
          src="/syarna.jpg"
          alt="Us"
          className="rounded-full w-40 h-40 object-cover shadow-md mb-4"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <h1 className="text-3xl md:text-5xl font-bold text-pink-800 animate-typing">
          Our Love Story
        </h1>
        <p className="text-lg mt-2 text-pink-700 italic">
          "Every moment with you is my favorite memory."
        </p>

        {/* 🎉 Counter Animation */}
        <div className="mt-8 mb-8 grid gap-8 text-center">
          {/* Days Together - Dynamic dari 17 Sept 2022 */}
          <div>
            <p className="text-gray-700 mb-1">Days Together</p>
            <AnimatedCounter to={daysTogether} duration={4} />
            <p className="text-xs text-gray-500 mt-1">Since September 17, 2022</p>
          </div>
        </div>
        
        <AboutHer />
        
        <h1 className="text-2xl md:text-4xl font-bold text-pink-800 animate-typing mb-5">
          2025, So Far...
        </h1>
        <AnimatedTabs />
      </section>
    </main>
  );
}