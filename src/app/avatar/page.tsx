'use client';
import {
    LiveKitRoom,
    RoomAudioRenderer,
    ControlBar,
    useTracks,
    useParticipants,
    VideoTrack,
    useRoomContext,
} from '@livekit/components-react';
import '@livekit/components-styles';
import { useCallback, useEffect, useState, useRef } from 'react';
import { Track, Participant } from 'livekit-client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { jobs } from '@/data/jobs'; // Import jobs data

export default function AvatarPage() {
    const [token, setToken] = useState('');
    const [isConnected, setIsConnected] = useState(false);
    const [loading, setLoading] = useState(false);
    const [roomName, setRoomName] = useState<string | null>(null);

    // Chat & Connection State
    const [conversationId, setConversationId] = useState<string | null>(null);
    const [inputText, setInputText] = useState('');
    const [sendingText, setSendingText] = useState(false);
    const [messages, setMessages] = useState<{ sender: 'user' | 'system', text: string }[]>([]);

    useEffect(() => {
        setRoomName('interview-' + Math.floor(Math.random() * 1000));
    }, []);

    const addMessage = (sender: 'user' | 'system', text: string) => {
        setMessages(prev => [...prev, { sender, text }]);
    };

    const startInteraction = useCallback(async () => {
        if (!roomName) return;
        setLoading(true);
        try {
            addMessage('system', 'Initializing connection...');

            const resp = await fetch(`/api/livekit/token?room=${roomName}&username=candidate`);
            const data = await resp.json();
            setToken(data.token);

            console.log('Inviting Tavus to room:', roomName);
            const inviteResp = await fetch('/api/tavus/invite', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ roomId: roomName })
            });
            const inviteData = await inviteResp.json();

            if (inviteData.success && inviteData.conversation) {
                const conversationId = inviteData.conversation.conversation_id;
                console.log('[Tavus] Invite successful:', inviteData.conversation);
                setConversationId(conversationId);
                addMessage('system', `Agent invited successfully. ID: ${conversationId}`);
                addMessage('system', 'Waiting for agent to join room to send context...');
            }

            setIsConnected(true);
        } catch (e: any) {
            console.error("Failed to connect", e);
            let msg = e.message;
            try { msg = JSON.parse(msg).message || msg; } catch { }
            addMessage('system', `Error: ${msg}`);
            alert(`Connection Failed: ${msg}`);
        } finally {
            setLoading(false);
        }
    }, [roomName]);

    const sendTextToAvatar = async () => {
        // This is now handled in SplitStage using Data Channels
        console.warn('sendTextToAvatar called on parent - should be handled by SplitStage');
    };

    if (!roomName) return null;

    if (!isConnected) {
        return (
            <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
                <Header />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '2rem' }}>
                    <h1>Join Interview Room</h1>
                    <p>Room: {roomName}</p>
                    <button
                        onClick={startInteraction}
                        disabled={loading}
                        style={{ padding: '1rem 2rem', background: '#0070f3', color: 'white', borderRadius: '8px', fontSize: '1.2rem', cursor: 'pointer' }}
                    >
                        {loading ? 'Connecting...' : 'Start Interview'}
                    </button>

                    {/* Pre-connection logs */}
                    <div style={{ maxWidth: '600px', width: '90%', background: '#f5f5f5', borderRadius: '8px', padding: '1rem', height: '200px', overflowY: 'auto' }}>
                        {messages.map((m, i) => (
                            <div key={i} style={{ marginBottom: '5px', fontSize: '0.9rem', color: m.sender === 'system' ? '#666' : '#000' }}>
                                <strong>{m.sender.toUpperCase()}:</strong> {m.text}
                            </div>
                        ))}
                    </div>
                </div>

                <Footer />
            </div>
        )
    }

    return (
        <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
            <Header />
            <main style={{ flex: 1, backgroundColor: '#111', position: 'relative' }}>
                <LiveKitRoom
                    video={true}
                    audio={true}
                    token={token}
                    serverUrl={process.env.NEXT_PUBLIC_LIVEKIT_URL}
                    data-lk-theme="default"
                    style={{ height: '100%' }}
                >
                    {/* PASSING AS PROPS to Stage for Layout */}
                    <SplitStage
                        messages={messages}
                        addMessage={addMessage}
                        conversationId={conversationId}
                    />
                    <RoomAudioRenderer />
                    <ControlBar />
                </LiveKitRoom>
            </main>
            <Footer />
        </div>
    );
}

// --- NEW SPLIT STAGE COMPONENT ---
function SplitStage({ messages, addMessage, conversationId }: any) {
    const room = useRoomContext();
    const participants = useParticipants();
    const remoteParticipants = participants.filter(p => !p.isLocal);
    const localParticipant = participants.find(p => p.isLocal);

    const [inputText, setInputText] = useState('');
    const [sending, setSending] = useState(false);
    const contextSent = useRef(false);

    useEffect(() => {
        // Send initial context when agent joins
        if (remoteParticipants.length > 0 && conversationId && !contextSent.current) {
            console.log('[SplitStage] Agent joined, sending context...');

            const jobsContext = jobs.map(j =>
                `- ${j.title} at ${j.company} (${j.location}): ${j.description.substring(0, 50)}...`
            ).join('\n');

            const systemContext = `
[SYSTEM INSTRUCTION] 
You are a Recruiter for our Job Board. 
Available jobs:
${jobsContext}
Ask the candidate about their experience and recommend a job.
            `.trim();

            sendDataMessage(systemContext, true);
            contextSent.current = true;
            addMessage('system', 'Job context sent to Avatar via Data Channel.');
        }
    }, [remoteParticipants.length, conversationId]);

    const sendDataMessage = async (text: string, isSilent = false) => {
        if (!room || !conversationId) return;

        const payload = {
            message_type: "interaction",
            event_type: "conversation.respond",
            conversation_id: conversationId,
            properties: {
                text: text
            }
        };

        const encoder = new TextEncoder();
        const data = encoder.encode(JSON.stringify(payload));

        try {
            await room.localParticipant.publishData(data, {
                reliable: true,
                topic: 'tavus'
            });
            console.log('[SplitStage] Data message sent:', payload);
        } catch (e) {
            console.error('[SplitStage] Failed to publish data:', e);
            if (!isSilent) throw e;
        }
    };

    const handleSend = async () => {
        if (!inputText.trim()) return;
        const text = inputText;
        setSending(true);
        setInputText('');
        addMessage('user', text);

        try {
            await sendDataMessage(text);
        } catch (e: any) {
            addMessage('system', `Failed to send: ${e.message}`);
            setInputText(text);
        } finally {
            setSending(false);
        }
    };

    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 400px 300px', // 3 Columns: Avatar | Chat | User
            height: '100%',
            width: '100%',
            background: '#0a0a0a'
        }}>
            {/* LEFT: AVATAR STAGE */}
            <div style={{ background: '#000', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', borderRight: '1px solid #333' }}>
                {remoteParticipants.length === 0 && (
                    <div style={{ color: '#666', textAlign: 'center' }}>
                        <h2>Waiting for Agent...</h2>
                        <p>Participants in room: {participants.length}</p>
                    </div>
                )}

                {remoteParticipants.map(agent => (
                    <AgentView key={agent.identity} participant={agent} />
                ))}
            </div>

            {/* MIDDLE: CHAT & TRANSCRIPT */}
            <div style={{ display: 'flex', flexDirection: 'column', borderRight: '1px solid #333', background: '#111' }}>
                <div style={{ padding: '1rem', borderBottom: '1px solid #333', background: '#222' }}>
                    <h3 style={{ margin: 0, color: 'white' }}>Interview Chat</h3>
                    <small style={{ color: '#888' }}>Real-time Context & Instructions</small>
                </div>

                <div style={{ flex: 1, overflowY: 'auto', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                    {messages.map((m: any, i: number) => (
                        <div key={i} style={{
                            alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                            background: m.sender === 'user' ? '#0070f3' : '#333',
                            color: 'white',
                            padding: '8px 12px',
                            borderRadius: '12px',
                            maxWidth: '85%',
                            fontSize: '0.95rem'
                        }}>
                            {m.text}
                        </div>
                    ))}
                </div>

                {/* Input Area */}
                <div style={{ padding: '1rem', borderTop: '1px solid #333', background: '#222', display: 'flex', gap: '8px' }}>
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        placeholder="Type instruction..."
                        onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                        disabled={!conversationId}
                        style={{
                            flex: 1,
                            padding: '10px',
                            borderRadius: '6px',
                            border: '1px solid #444',
                            background: '#000',
                            color: 'white'
                        }}
                    />
                    <button
                        onClick={handleSend}
                        disabled={sending || !conversationId}
                        style={{
                            padding: '0 16px',
                            background: conversationId ? '#0070f3' : '#444',
                            color: 'white',
                            border: 'none',
                            borderRadius: '6px',
                            cursor: conversationId ? 'pointer' : 'not-allowed'
                        }}
                    >
                        Send
                    </button>
                </div>
            </div>

            {/* RIGHT: USER & DEBUG */}
            <div style={{ background: '#222', padding: '1rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <h3 style={{ color: 'white', margin: 0 }}>You</h3>
                {localParticipant && <LocalView participant={localParticipant} />}

                <div style={{ flex: 1, color: '#888', fontSize: '0.8rem', overflowY: 'auto' }}>
                    <h4>Debug Info</h4>
                    {remoteParticipants.map(p => (
                        <div key={p.identity} style={{ marginBottom: '10px', padding: '5px', background: '#333', borderRadius: '4px' }}>
                            <strong>Agent:</strong> {p.identity} <br />
                            <strong>Conn:</strong> {p.connectionQuality} <br />
                            <strong>Tracks:</strong> {p.getTrackPublications().length}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function AgentView({ participant }: { participant: Participant }) {
    const tracks = useTracks([Track.Source.Camera, Track.Source.Microphone], { onlySubscribed: false });
    const agentTracks = tracks.filter(t => t.participant.identity === participant.identity);
    const videoTrack = agentTracks.find(t => t.source === Track.Source.Camera);

    useEffect(() => {
        console.log(`[AgentView] Tracks for ${participant.identity}:`, agentTracks.map(t => ({
            source: t.source,
            isSubscribed: t.publication?.isSubscribed,
            isEnabled: t.publication?.isEnabled,
            trackSid: t.publication?.trackSid
        })));
    }, [agentTracks, participant.identity]);

    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {videoTrack ? (
                <VideoTrack trackRef={videoTrack} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
            ) : (
                <div style={{ color: 'orange', textAlign: 'center' }}>
                    <h2>Waiting for Video...</h2>
                    <p>Tracks: {agentTracks.length}</p>
                    <pre style={{ fontSize: '10px' }}>{JSON.stringify(agentTracks.map(t => t.source), null, 2)}</pre>
                </div>
            )}
        </div>
    );
}

function LocalView({ participant }: { participant: Participant }) {
    const tracks = useTracks([Track.Source.Camera], { onlySubscribed: false });
    const videoTrack = tracks.find(t => t.participant.identity === participant.identity);

    return (
        <div style={{ width: '100%', aspectRatio: '16/9', background: '#333', borderRadius: '8px', overflow: 'hidden' }}>
            {videoTrack ? (
                <VideoTrack trackRef={videoTrack} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            ) : (
                <div style={{ padding: '20px', color: '#666', textAlign: 'center' }}>Camera Off</div>
            )}
        </div>
    );
}
