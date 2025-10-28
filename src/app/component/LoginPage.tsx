'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface LoginPageProps {
  onLogin: () => void;
}

export default function LoginPage({ onLogin }: LoginPageProps) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = () => {
    const correctPassword = 'benjimollysyarna170922'; 
    
    if (password === correctPassword) {
      onLogin();
      setError(false);
    } else {
      setError(true);
      setShake(true);
      setTimeout(() => setShake(false), 500);
      setPassword('');
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-pink-50 to-purple-100 flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full ${shake ? 'shake' : ''}`}
      >
        <div className="text-center mb-6">
          <motion.div 
            className="text-6xl mb-4"
            animate={{ rotate: [0, 10, -10, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            🔒
          </motion.div>
          <h1 className="text-3xl font-bold text-pink-800 mb-2">Our Memory</h1>
          <p className="text-gray-600">Enter the password to continue</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setError(false);
              }}
              onKeyPress={handleKeyPress}
              placeholder="Enter password"
              className={`w-full px-4 py-3 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all ${
                error
                  ? 'border-red-400 focus:ring-red-300 bg-red-50'
                  : 'border-pink-300 focus:ring-pink-300 focus:border-pink-400'
              }`}
              autoFocus
            />
            {error && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-500 text-sm mt-2 font-medium"
              >
                ❌ Wrong password. Try again!
              </motion.p>
            )}
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-pink-500 to-purple-500 text-white py-3 rounded-lg font-semibold hover:from-pink-600 hover:to-purple-600 transition-all transform hover:scale-105 active:scale-95 shadow-lg"
          >
            Unlock ✨
          </button>
        </div>

        <div className="mt-6 text-center">
          <p className="text-sm text-gray-500">💝 Made with love</p>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
          20%, 40%, 60%, 80% { transform: translateX(10px); }
        }
        .shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}