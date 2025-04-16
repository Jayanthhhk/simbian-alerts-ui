'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const cards = [
  { title: 'Ignored Alerts', value: 0 },
  { title: 'Wrongly Closed Alerts', value: 0 },
  { title: 'Active Threats', value: 0 },
];

export default function FinalStats() {
  return (
    <div className="flex flex-wrap justify-center gap-6 mt-10">
      {cards.map((card, idx) => (
        <motion.div
          key={card.title}
          className="bg-green-50 rounded-2xl p-6 w-80 border border-green-300 text-center shadow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: idx * 0.4, duration: 0.5 }}
        >
          <div className="flex justify-center mb-2">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: idx * 0.4 + 0.2, type: 'spring', stiffness: 400 }}
            >
              <CheckCircle className="text-green-600 w-8 h-8" />
            </motion.div>
          </div>
          <h4 className="text-lg font-semibold text-green-700 mb-1">{card.title}</h4>
          <motion.p
            key={card.title + card.value}
            className="text-3xl font-bold text-green-800"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: idx * 0.5 + 0.4 }}
          >
            {card.value}
          </motion.p>
        </motion.div>
      ))}
    </div>
  );
}
