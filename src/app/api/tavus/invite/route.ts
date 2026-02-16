import { NextRequest, NextResponse } from 'next/server';
import { createConversation } from '@/lib/tavus';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { roomId } = body;

        if (!roomId) {
            return NextResponse.json({ error: 'Room ID required' }, { status: 400 });
        }

        const conversation = await createConversation(roomId);

        return NextResponse.json({ success: true, conversation });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to start conversation' }, { status: 500 });
    }
}
