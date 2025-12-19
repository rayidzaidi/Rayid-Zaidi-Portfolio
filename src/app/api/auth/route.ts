import { NextResponse } from 'next/server';
import { signToken } from '@/lib/auth';
import { cookies } from 'next/headers';

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

export async function POST(request: Request) {
    try {
        const { email, password } = await request.json();

        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            const token = signToken({ email });

            const cookieStore = await cookies();
            cookieStore.set('admin_token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'strict',
                maxAge: 60 * 60 * 24, // 1 day
                path: '/',
            });

            return NextResponse.json({ success: true });
        }

        return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

export async function DELETE() {
    const cookieStore = await cookies();
    cookieStore.delete('admin_token');
    return NextResponse.json({ success: true });
}
