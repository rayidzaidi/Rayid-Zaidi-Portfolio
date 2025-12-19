import { NextResponse } from 'next/server';
import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

export async function POST(request: Request) {
    try {
        const { message } = await request.json();

        if (!process.env.GEMINI_API_KEY) {
            return NextResponse.json({
                success: false,
                reply: "System Error: API Key missing. Please configure GEMINI_API_KEY in .env.local."
            });
        }

        const model = genAI.getGenerativeModel({ model: "gemini-pro" });

        const prompt = `
        You are an AI assistant for Syed Rayid Hussain Zaidi's portfolio website.
        Your tone should be professional, futuristic, and slightly robotic but helpful.
        Keep answers concise (under 50 words if possible).
        
        Context about Rayid:
        - Full Stack Developer
        - Skills: Next.js, React, Node.js, MongoDB, TypeScript, Tailwind CSS, Three.js
        - Aesthetic: Minimal, Futuristic, Monochrome
        - Contact: Via the contact form on this site.
        
        User: ${message}
        `;

        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        return NextResponse.json({ success: true, reply: text });
    } catch (error) {
        console.error('Chat API Error:', error);
        return NextResponse.json({ success: false, message: 'Failed to process request' }, { status: 500 });
    }
}
