import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

async function getFeedback() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');

    // We need to pass the cookie to the API call if we were calling it via fetch,
    // but since we are on the server, we can call the DB directly or use an internal fetch.
    // Calling DB directly is better for Server Components.
    // However, for consistency with the "API Structure" requirement, I'll fetch the API.
    // Actually, fetching own API in Server Components is an anti-pattern in Next.js.
    // I will import the logic or model directly.

    // Let's use the API endpoint for "correctness" of the prompt's API structure, 
    // but we need to pass the cookie.

    const res = await fetch(process.env.NEXT_PUBLIC_URL + '/api/feedback', {
        headers: {
            Cookie: `admin_token=${token?.value}`
        },
        cache: 'no-store'
    });

    if (!res.ok) return [];
    const json = await res.json();
    return json.data;
}

export default async function AdminPage() {
    // We need the URL for fetch. If not set, we might fail.
    // Fallback to localhost for dev.
    if (!process.env.NEXT_PUBLIC_URL) {
        process.env.NEXT_PUBLIC_URL = 'http://localhost:3000';
    }

    const feedbacks = await getFeedback();

    return (
        <div className="min-h-screen p-8 max-w-6xl mx-auto pt-24">
            <div className="flex justify-between items-center mb-12">
                <h1 className="text-3xl font-mono text-[var(--color-accent)]">ADMIN CONSOLE</h1>
                <div className="text-xs font-mono text-gray-500">SECURE CONNECTION ESTABLISHED</div>
            </div>

            <div className="grid gap-4">
                {feedbacks.length === 0 ? (
                    <p className="text-gray-500">No transmissions received.</p>
                ) : (
                    feedbacks.map((item: any) => (
                        <div key={item._id} className="p-6 border border-white/10 bg-white/5 rounded-lg">
                            <div className="flex justify-between mb-4">
                                <span className="font-bold text-[var(--color-accent)]">{item.name}</span>
                                <span className="text-xs text-gray-500 font-mono">{new Date(item.createdAt).toLocaleString()}</span>
                            </div>
                            <div className="text-sm text-gray-400 mb-2">{item.email}</div>
                            <p className="text-gray-200">{item.message}</p>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
