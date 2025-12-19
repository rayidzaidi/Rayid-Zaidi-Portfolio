'use client';

import Link from 'next/link';
import MagneticButton from './MagneticButton';
import { motion } from 'framer-motion';

export default function Navbar() {
    return (
        <motion.nav
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 w-full p-6 flex justify-between items-center z-50 text-white"
        >
            <Link href="/" className="text-2xl font-bold tracking-tighter hover:text-[var(--color-accent)] transition-colors">
                RAYID
            </Link>

            <div className="flex gap-8">
                {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
                    <MagneticButton key={item}>
                        <Link
                            href={`#${item.toLowerCase()}`}
                            className="text-sm font-mono tracking-widest hover:text-[var(--color-accent)] transition-colors"
                        >
                            {item.toUpperCase()}
                        </Link>
                    </MagneticButton>
                ))}
                <MagneticButton>
                    <Link href="/login" className="text-sm font-mono tracking-widest hover:text-[var(--color-accent)] transition-colors">
                        ADMIN
                    </Link>
                </MagneticButton>
            </div>
        </motion.nav>
    );
}
