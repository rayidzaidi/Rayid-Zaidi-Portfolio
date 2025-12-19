'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Preloader() {
    const [count, setCount] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => setIsLoading(false), 500);
                    return 100;
                }
                return prev + 1;
            });
        }, 20);

        return () => clearInterval(interval);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    className="fixed inset-0 z-[10000] flex flex-col items-center justify-center bg-[#0a0a0a] text-[var(--color-accent)]"
                    exit={{ y: '-100%', transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                >
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-9xl font-[family-name:var(--font-rubik-bubbles)] mb-4"
                    >
                        {count}%
                    </motion.div>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="font-mono text-sm tracking-widest uppercase"
                    >
                        Materializing Reality...
                    </motion.p>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
