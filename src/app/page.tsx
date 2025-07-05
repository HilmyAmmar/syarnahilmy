'use client';

import { motion } from 'framer-motion';
import AnimatedCounter from './component/AnimatedCounter';
import AnimatedTabs from './component/AnimatedTabs';
import AboutHer from './component/AboutHer';

export default function Home() {
  const events = [
    { year: '2023', desc: 'We met each other 💫' },
    { year: '2024', desc: 'First trip together ✈️' },
    { year: '2025', desc: 'Still in love ❤️' },
  ];


  function getDaysUntil(target: Date): number {
  const now = new Date();
  const diff = target.getTime() - now.getTime();
  return Math.max(0, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}


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
        <h1 className="text-3xl md:text-5xl font-bold text-pink-800 animate-typing"> Our Love Story </h1>
        <p className="text-lg mt-2 text-pink-700 italic">
          "Every moment with you is my favorite memory."
        </p>

        {/* 🎉 Counter Animation */}
        <div className="mt-8 mb-8 grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          {/* Days Together */}
          <div>
            <p className="text-gray-700 mb-1">Days Together</p>
            <AnimatedCounter to={1022} duration={4} />
          </div>

          {/* Days Until We Meet Again */}
          <div>
            <p className="text-gray-700 mb-1">Days Until We Meet Again</p>
            <AnimatedCounter to={getDaysUntil(new Date('2025-07-23'))} duration={4} />
          </div>
        </div>
        <AboutHer></AboutHer>
        <h1 className="text-2xl md:text-4xl font-bold text-pink-800 animate-typing mb-5"> 2025, So Far... </h1>
        <AnimatedTabs></AnimatedTabs>
      </section>
    </main>
  );
}
