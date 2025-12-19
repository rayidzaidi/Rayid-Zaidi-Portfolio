'use client';

import { motion } from 'framer-motion';

const skills = [
    'Next.js', 'React', 'TypeScript', 'Node.js', 'Three.js', 'MongoDB', 'Tailwind CSS', 'Framer Motion', 'WebGL', 'UI/UX Design'
];

export default function MarqueeSkills() {
    return (
        <div className="w-full overflow-hidden py-10 bg-white/5 border-y border-white/10 backdrop-blur-sm">
            <div className="flex whitespace-nowrap">
                <motion.div
                    className="flex gap-16 items-center"
                    animate={{ x: '-50%' }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20
                    }}
                >
                    {[...skills, ...skills, ...skills, ...skills].map((skill, i) => (
                        <span key={i} className="text-4xl md:text-6xl font-bold font-[family-name:var(--font-orbitron)] text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-white opacity-50 hover:opacity-100 transition-opacity cursor-default">
                            {skill}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
