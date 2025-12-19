import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'default_secret_please_change';

export function signToken(payload: any) {
    return jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
}

export function verifyToken(token: string) {
    try {
        return jwt.verify(token, JWT_SECRET);
    } catch (error) {
        return null;
    }
}

export async function isAuthenticated() {
    const cookieStore = await cookies();
    const token = cookieStore.get('admin_token');

    if (!token) return false;

    const decoded = verifyToken(token.value);
    return !!decoded;
}
