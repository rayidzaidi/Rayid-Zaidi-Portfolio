import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import { Feedback } from '@/lib/models';
import { isAuthenticated } from '@/lib/auth';

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();

        // Basic validation
        if (!body.name || !body.email || !body.message) {
            return NextResponse.json({ success: false, message: 'Missing fields' }, { status: 400 });
        }

        const feedback = await Feedback.create(body);
        return NextResponse.json({ success: true, data: feedback });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        const authenticated = await isAuthenticated();
        if (!authenticated) {
            return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
        }

        await dbConnect();
        const feedbacks = await Feedback.find({}).sort({ createdAt: -1 });
        return NextResponse.json({ success: true, data: feedbacks });
    } catch (error) {
        return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
    }
}
