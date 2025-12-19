'use client';

import { useState, useRef } from 'react';

const CYBER_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789$#@%&";

const ScrambleText = ({ text }: { text: string }) => {
    const [displayText, setDisplayText] = useState(text);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    const scramble = () => {
        let iteration = 0;
        if (intervalRef.current) clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            setDisplayText((prev) =>
                text
                    .split("")
                    .map((letter, index) => {
                        if (index < iteration) {
                            return text[index];
                        }
                        return CYBER_CHARS[Math.floor(Math.random() * CYBER_CHARS.length)];
                    })
                    .join("")
            );

            if (iteration >= text.length) {
                if (intervalRef.current) clearInterval(intervalRef.current);
            }

            iteration += 1 / 3;
        }, 30);
    };

    return (
        <span
            onMouseEnter={scramble}
            className="inline-block hover:text-[var(--color-accent)] transition-colors duration-300"
        >
            {displayText}
        </span>
    );
};

export default function HeroTitle() {
    return (
        <div className="relative perspective-1000">
            <h1
                className="text-4xl md:text-7xl font-bold tracking-widest mb-4 text-white font-[family-name:var(--font-michroma)] cursor-default uppercase leading-tight"
                style={{
                    textShadow: '0px 0px 10px rgba(255, 255, 255, 0.5), 0px 0px 20px rgba(255, 255, 255, 0.3)'
                }}
            >
                <ScrambleText text="SYED RAYID" />
                <br />
                <ScrambleText text="HUSSAIN ZAIDI" />
            </h1>
        </div>
    );
}
