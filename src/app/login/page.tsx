'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        const res = await fetch('/api/auth', {
            method: 'POST',
            body: JSON.stringify({ email, password }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
            router.push('/admin');
        } else {
            setError('Invalid credentials');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center">
            <form onSubmit={handleLogin} className="p-8 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md w-full max-w-sm">
                <h1 className="text-2xl font-mono mb-6 text-center">SYSTEM ACCESS</h1>
                {error && <p className="text-red-500 text-sm mb-4 text-center">{error}</p>}
                <input
                    type="email"
                    placeholder="ID"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full mb-4 p-3 bg-black/50 border border-white/10 rounded focus:border-[var(--color-accent)] outline-none"
                />
                <input
                    type="password"
                    placeholder="KEY"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full mb-6 p-3 bg-black/50 border border-white/10 rounded focus:border-[var(--color-accent)] outline-none"
                />
                <button type="submit" className="w-full py-3 bg-[var(--color-accent)] text-black font-bold rounded hover:opacity-90 transition-opacity">
                    AUTHENTICATE
                </button>
            </form>
        </div>
    );
}
