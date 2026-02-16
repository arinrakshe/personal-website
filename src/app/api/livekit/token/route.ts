import { AccessToken } from 'livekit-server-sdk';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    const room = req.nextUrl.searchParams.get('room') || 'quickstart-room';
    const username = req.nextUrl.searchParams.get('username') || 'guest';

    // In production, these should be environment variables
    const apiKey = process.env.LIVEKIT_API_KEY || 'devkey';
    const apiSecret = process.env.LIVEKIT_API_SECRET || 'secret';
    const wsUrl = process.env.NEXT_PUBLIC_LIVEKIT_URL || 'ws://localhost:7880';

    if (!apiKey || !apiSecret || !wsUrl) {
        return NextResponse.json({ error: 'Server misconfigured' }, { status: 500 });
    }

    const at = new AccessToken(apiKey, apiSecret, {
        identity: username,
    });

    at.addGrant({ roomJoin: true, room: room });

    return NextResponse.json({
        token: await at.toJwt(),
        url: wsUrl,
    });
}
