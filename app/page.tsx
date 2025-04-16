'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AlertCard from '@/components/SectionOne/AlertCard';
import StepFlow from '@/components/SectionTwo/StepFlow';
import FinalStats from '@/components/SectionTwo/FinalStats';
import { AlertTriangle, ShieldOff, Flame } from 'lucide-react';

export default function Home() {
  const [showWithSimbian, setShowWithSimbian] = useState(false);

  return (
    <main className="min-h-screen px-4 sm:px-10 py-10 flex flex-col items-center">
      <button
        onClick={() => setShowWithSimbian(!showWithSimbian)}
        className="mb-10 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold shadow hover:bg-blue-700 transition-all"
      >
        {showWithSimbian ? '← Back to Without Simbian' : '→ View With Simbian'}
      </button>

      <AnimatePresence mode="wait">
        {!showWithSimbian ? (
          <motion.section
            key="without"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.5 }}
            className="space-y-10"
          >
            <h2 className="text-3xl font-bold mb-6 text-red-600 text-center">🔴 Without Simbian</h2>
            <div className="flex flex-wrap gap-6 justify-center">
              <AlertCard title="Ignored Alerts" icon={<AlertTriangle />} initialCount={200} />
              <AlertCard title="Wrongly Closed Alerts" icon={<ShieldOff />} initialCount={35} />
              <AlertCard title="Active Threats" icon={<Flame />} initialCount={5} />
            </div>
          </motion.section>
        ) : (
          <motion.section
            key="with"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="space-y-12 w-full max-w-4xl"
          >
            <h2 className="text-3xl font-bold mb-6 text-green-600 text-center">🟢 With Simbian</h2>
            <StepFlow />
            <FinalStats />
          </motion.section>
        )}
      </AnimatePresence>
    </main>
  );
}
