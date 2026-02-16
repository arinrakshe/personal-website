// Real integration with Tavus API
export async function createConversation(roomId: string) {
    const apiKey = process.env.TAVUS_API_KEY;
    const personaId = process.env.TAVUS_PERSONA_ID;
    const replicaId = process.env.TAVUS_REPLICA_ID;

    if (!apiKey || !personaId) {
        throw new Error('Missing Tavus Configuration');
    }

    console.log(`[Tavus] Creating conversation for room: ${roomId} with persona: ${personaId}`);

    try {
        const response = await fetch('https://tavusapi.com/v2/conversations', {
            method: 'POST',
            headers: {
                'x-api-key': apiKey,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                persona_id: personaId,
                replica_id: replicaId,
                properties: {
                    max_call_duration: 600,
                    enable_recording: true
                },
                conversation_name: `Interview-${roomId}`
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('[Tavus] API Error:', {
                status: response.status,
                statusText: response.statusText,
                body: errorText
            });
            return { error: errorText, status: 'error', statusCode: response.status };
        }

        const data = await response.json();
        console.log('[Tavus] API Response:', data);
        return data;
    } catch (error) {
        console.error('[Tavus] Network Error:', error);
        return { error: String(error), status: 'error' };
    }
}

export async function sendTextMessage(conversationId: string, text: string) {
    const apiKey = process.env.TAVUS_API_KEY;
    if (!apiKey) throw new Error('Missing Tavus API Key');

    // Using the "conversation.respond" event pattern
    const url = `https://tavusapi.com/v2/conversations/${conversationId}/events`;

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'x-api-key': apiKey,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            event_type: 'conversation.respond',
            properties: {
                text: text
            }
        })
    });

    if (!response.ok) {
        const err = await response.text();
        console.error('[Tavus] Send Message Error:', {
            status: response.status,
            statusText: response.statusText,
            body: err
        });
        throw new Error(`Failed to send message: ${response.statusText} - ${err}`);
    }

    const data = await response.json();
    console.log('[Tavus] Message Sent Response:', data);
    return data;
}
