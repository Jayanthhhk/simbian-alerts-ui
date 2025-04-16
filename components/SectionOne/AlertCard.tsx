'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const dummyAlerts = [
  'Phishing Email Detected',
  'Suspicious Login Attempt',
  'Malware Signature Match',
  'Unauthorized Access',
  'Brute Force Attempt',
  'DNS Tunneling Detected',
];

interface AlertCardProps {
  title: string;
  icon: ReactNode;
  initialCount: number;
}

export default function AlertCard({ title, icon, initialCount }: AlertCardProps) {
  const [count, setCount] = useState(initialCount);
  const [alerts, setAlerts] = useState<string[]>([]);
  const [shake, setShake] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const randomAlert = dummyAlerts[Math.floor(Math.random() * dummyAlerts.length)];

      setAlerts(prev => [randomAlert, ...prev].slice(0, 5)); // keep only last 5 alerts
      setCount(prev => prev + 1);
      setShake(true);

      setTimeout(() => setShake(false), 500); // shake duration
    }, 3000); // every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const cardClass = `bg-white rounded-2xl shadow-lg p-6 w-80 overflow-hidden border border-gray-200 
    ${shake ? 'ring-2 ring-red-400 animate-shake' : ''}`;

  return (
    <motion.div
      className={cardClass}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="text-red-500">{icon}</div>
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>

      <motion.div
        key={count}
        className="text-4xl font-bold text-red-600 mb-4"
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {count}
      </motion.div>

      <div className="text-sm text-gray-600 space-y-1 h-28 overflow-hidden">
        <AnimatePresence>
          {alerts.map((alert, idx) => (
            <motion.div
              key={alert + idx}
              className="bg-red-50 px-2 py-1 rounded shadow-sm text-red-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
            >
              {alert}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
