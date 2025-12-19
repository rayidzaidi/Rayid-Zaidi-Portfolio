'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

export default function FeedbackForm() {
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus('loading');

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
        };

        try {
            const res = await fetch('/api/feedback', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (res.ok) {
                setStatus('success');
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-md mx-auto p-8 border border-white/10 bg-black/40 backdrop-blur-md rounded-2xl"
        >
            <h3 className="text-2xl font-mono mb-6 text-[var(--color-accent)]">Initialize Contact</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Identity</label>
                    <input
                        name="name"
                        required
                        className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Coordinates</label>
                    <input
                        name="email"
                        type="email"
                        required
                        className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors"
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <label className="block text-xs uppercase tracking-widest text-gray-500 mb-2">Transmission</label>
                    <textarea
                        name="message"
                        required
                        rows={4}
                        className="w-full bg-white/5 border border-white/10 p-3 rounded-lg focus:border-[var(--color-accent)] focus:outline-none transition-colors resize-none"
                        placeholder="Your message..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'loading' || status === 'success'}
                    className="w-full py-3 bg-white/10 hover:bg-[var(--color-accent)] hover:text-black font-bold tracking-widest uppercase transition-all duration-300 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {status === 'loading' ? 'Transmitting...' : status === 'success' ? 'Sent' : 'Send Message'}
                </button>

                {status === 'error' && <p className="text-red-500 text-sm text-center mt-2">Transmission Failed.</p>}
            </form>
        </motion.div>
    );
}
