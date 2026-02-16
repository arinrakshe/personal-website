import { NextRequest, NextResponse } from 'next/server';
import { sendTextMessage } from '@/lib/tavus';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { conversationId, text } = body;

        if (!conversationId || !text) {
            return NextResponse.json({ error: 'Missing conversationId or text' }, { status: 400 });
        }

        const result = await sendTextMessage(conversationId, text);
        return NextResponse.json({ success: true, result });
    } catch (error: any) {
        console.error('Message API Error:', error);
        return NextResponse.json({ error: error.message || 'Failed to send message' }, { status: 500 });
    }
}
