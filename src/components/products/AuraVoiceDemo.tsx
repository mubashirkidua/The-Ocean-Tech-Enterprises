import React, { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, PhoneCall, PhoneOff, Volume2, VolumeX, Sparkles, Activity, Play } from 'lucide-react';

export const AuraVoiceDemo: React.FC = () => {
  const [isCallActive, setIsCallActive] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [voiceSpeed, setVoiceSpeed] = useState(1.0);
  const [scenario, setScenario] = useState<'support' | 'appointment' | 'sales'>('support');
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [inputText, setInputText] = useState('');

  const [conversation, setConversation] = useState<Array<{ sender: 'user' | 'agent'; text: string; time: string }>>([
    {
      sender: 'agent',
      text: 'Greetings. This is AuraVoice Enterprise. How can I assist your operational team today?',
      time: '00:01',
    },
  ]);

  // Audio Speech Synthesis function
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = voiceSpeed;
    utterance.pitch = 1.0;

    // Pick a natural English voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferredVoice = voices.find(
      (v) => (v.name.includes('Natural') || v.name.includes('Google') || v.lang.startsWith('en')) && !v.name.includes('Zira')
    );
    if (preferredVoice) utterance.voice = preferredVoice;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  // Canvas Waveform Animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId: number;
    let step = 0;

    const renderWave = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const width = canvas.width;
      const height = canvas.height;
      const centerY = height / 2;

      // Draw multi-layered acoustic harmonics
      const layers = [
        { color: 'rgba(0, 240, 255, 0.85)', amplitude: isSpeaking ? 28 : isCallActive ? 8 : 2, freq: 0.04, speed: 0.08 },
        { color: 'rgba(45, 212, 191, 0.65)', amplitude: isSpeaking ? 20 : isCallActive ? 5 : 1, freq: 0.06, speed: -0.06 },
        { color: 'rgba(56, 189, 248, 0.45)', amplitude: isSpeaking ? 14 : isCallActive ? 4 : 1, freq: 0.02, speed: 0.04 },
      ];

      layers.forEach((layer) => {
        ctx.beginPath();
        ctx.strokeStyle = layer.color;
        ctx.lineWidth = 2;

        for (let x = 0; x < width; x++) {
          const y = centerY + Math.sin(x * layer.freq + step * layer.speed) * layer.amplitude * Math.sin((x / width) * Math.PI);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      });

      step += 1;
      animationId = requestAnimationFrame(renderWave);
    };

    renderWave();

    return () => {
      cancelAnimationFrame(animationId);
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [isSpeaking, isCallActive]);

  const handleStartCall = () => {
    setIsCallActive(true);
    const greeting =
      scenario === 'support'
        ? 'Thank you for calling Ocean Tech Enterprise Support. My name is AuraVoice. How can I resolve your inquiry today?'
        : scenario === 'appointment'
        ? 'Welcome to MediScan Clinic. I can schedule your radiological examination or update your medical records. What date suits you?'
        : 'Hello! I am your Ocean Tech AI Solutions representative. Are you looking to scale custom LLMs or autonomous agents?';

    setConversation([
      { sender: 'agent', text: greeting, time: '00:01' },
    ]);
    speakText(greeting);
  };

  const handleEndCall = () => {
    setIsCallActive(false);
    setIsSpeaking(false);
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  };

  const handleSendQuery = (textToSend?: string) => {
    const text = textToSend || inputText;
    if (!text.trim()) return;

    const userMsg = {
      sender: 'user' as const,
      text: text,
      time: '00:' + (conversation.length * 4 + 5).toString().padStart(2, '0'),
    };

    const newConvo = [...conversation, userMsg];
    setConversation(newConvo);
    setInputText('');

    // Simulated Intelligent Agent Responses
    setTimeout(() => {
      let reply = '';
      if (text.toLowerCase().includes('price') || text.toLowerCase().includes('cost')) {
        reply = 'Our enterprise tier begins with custom pilot prototyping, typically delivered within 2 to 4 weeks with full SLA guarantees.';
      } else if (text.toLowerCase().includes('time') || text.toLowerCase().includes('schedule')) {
        reply = 'I have an opening available this Thursday at 2:00 PM EST or Friday at 10:00 AM EST. Shall I reserve a slot for your team?';
      } else if (text.toLowerCase().includes('security') || text.toLowerCase().includes('private')) {
        reply = 'All neural telephony channels are encrypted end-to-end, with on-premises speech processing to comply with strict zero-data-retention policies.';
      } else {
        reply = `I understand your requirement regarding "${text}". I have logged this into your account CRM and can proceed with instant execution.`;
      }

      setConversation((prev) => [
        ...prev,
        {
          sender: 'agent',
          text: reply,
          time: '00:' + (prev.length * 4 + 7).toString().padStart(2, '0'),
        },
      ]);

      if (!isMuted) {
        speakText(reply);
      }
    }, 450);
  };

  const samplePrompts = {
    support: [
      'What are your latency benchmarks for live voice calls?',
      'Can your system integrate with our Twilio SIP server?',
      'How does your AI handle noisy background environments?',
    ],
    appointment: [
      'I need to schedule an MRI follow-up appointment.',
      'Can you verify if my insurance covers preventive radiology?',
      'Send me a calendar invite on WhatsApp.',
    ],
    sales: [
      'What is your enterprise onboarding timeline for an AI startup?',
      'Can you deploy private LLMs inside our VPC?',
      'I want to speak with CEO Muhammad Mubashir Ali.',
    ],
  }[scenario];

  return (
    <div className="space-y-6 text-left">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-gradient-to-r from-teal-950/60 to-slate-900/60 border border-teal-500/25">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-teal-400 mb-1">
            <Volume2 className="w-4 h-4" />
            <span>AuraVoice Core™ Telephony Agent</span>
            <span className="text-slate-500">·</span>
            <span className="text-cyan-300">Sub-400ms Streaming Audio</span>
          </div>
          <h4 className="text-lg font-bold text-white">
            Conversational Voice AI & Telephony Console
          </h4>
          <p className="text-xs text-slate-300">
            Real-time acoustic speech synthesis and conversational reasoning with human-grade emotional inflection.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {isCallActive ? (
            <button
              onClick={handleEndCall}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-mono text-xs font-bold transition-all shadow-lg shadow-rose-600/30"
            >
              <PhoneOff className="w-4 h-4" />
              <span>End Call</span>
            </button>
          ) : (
            <button
              onClick={handleStartCall}
              className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-400 to-teal-400 text-slate-950 font-mono text-xs font-bold transition-all shadow-lg shadow-emerald-500/30"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Initiate Inbound Call</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Studio Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Live Audio Visualizer & Controls */}
        <div className="lg:col-span-5 space-y-4 p-5 rounded-2xl bg-slate-900/70 border border-slate-800 flex flex-col justify-between">
          <div className="space-y-4">
            {/* Waveform Canvas */}
            <div className="relative rounded-xl overflow-hidden bg-slate-950 border border-teal-500/30 p-4 aspect-[16/9] flex flex-col items-center justify-center">
              <canvas ref={canvasRef} width={400} height={160} className="w-full h-full object-contain" />

              <div className="absolute top-3 left-3 flex items-center gap-2 text-[10px] font-mono text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded border border-cyan-500/30">
                <span className={`w-2 h-2 rounded-full ${isSpeaking ? 'bg-cyan-400 animate-ping' : isCallActive ? 'bg-emerald-400' : 'bg-slate-600'}`} />
                <span>{isSpeaking ? 'SYNTHESIZING SPEECH...' : isCallActive ? 'CALL CONNECTED' : 'STANDBY'}</span>
              </div>

              <div className="absolute bottom-3 right-3 text-[10px] font-mono text-teal-300 bg-slate-950/80 px-2 py-0.5 rounded border border-teal-500/30">
                LATENCY: 342ms
              </div>
            </div>

            {/* Scenario Selector */}
            <div>
              <label className="text-xs font-mono text-slate-300 block mb-1">Telephony Scenario</label>
              <div className="grid grid-cols-3 gap-1.5">
                {[
                  { id: 'support', label: 'Support Desk' },
                  { id: 'appointment', label: 'Clinic Bookings' },
                  { id: 'sales', label: 'B2B Sales' },
                ].map((sc) => (
                  <button
                    key={sc.id}
                    onClick={() => {
                      setScenario(sc.id as any);
                      if (isCallActive) handleStartCall();
                    }}
                    className={`py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-all ${
                      scenario === sc.id
                        ? 'bg-teal-500/20 text-teal-200 border-teal-400/50'
                        : 'bg-slate-950/60 text-slate-400 border-slate-800 hover:text-white'
                    }`}
                  >
                    {sc.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Voice Controls */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800">
                <div className="flex justify-between text-[11px] font-mono text-slate-400 mb-1">
                  <span>Speech Velocity:</span>
                  <span className="text-cyan-300">{voiceSpeed}x</span>
                </div>
                <input
                  type="range"
                  min="0.8"
                  max="1.4"
                  step="0.1"
                  value={voiceSpeed}
                  onChange={(e) => setVoiceSpeed(parseFloat(e.target.value))}
                  className="w-full accent-cyan-400 h-1 bg-slate-800 rounded"
                />
              </div>

              <div className="p-3 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[11px] font-mono text-slate-400">Audio Mute</div>
                  <div className="text-xs font-bold text-white">{isMuted ? 'MUTED' : 'UNMUTED'}</div>
                </div>
                <button
                  onClick={() => setIsMuted(!isMuted)}
                  className={`p-2 rounded-lg ${isMuted ? 'bg-rose-500/20 text-rose-300' : 'bg-teal-500/20 text-teal-300'}`}
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </button>
              </div>
            </div>
          </div>

          <div className="pt-3 text-[11px] font-mono text-slate-400 flex items-center gap-1.5 border-t border-slate-800">
            <Activity className="w-3.5 h-3.5 text-teal-400" />
            <span>Web Audio API Speech Synthesis & Acoustic Waveform Connected</span>
          </div>
        </div>

        {/* Right Column: Live Transcription Stream & Interaction */}
        <div className="lg:col-span-7 flex flex-col justify-between p-5 rounded-2xl bg-slate-900/70 border border-slate-800">
          <div>
            <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-4">
              <span className="text-xs font-mono uppercase text-cyan-400">
                Live Dual-Channel Telephony Transcript
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                Audio Codec: OPUS 48kHz
              </span>
            </div>

            {/* Conversation Log */}
            <div className="space-y-3 max-h-64 overflow-y-auto pr-2">
              {conversation.map((msg, i) => (
                <div
                  key={i}
                  className={`p-3 rounded-xl text-xs leading-relaxed ${
                    msg.sender === 'agent'
                      ? 'bg-slate-950/80 border border-teal-500/20 text-slate-200'
                      : 'bg-cyan-950/40 border border-cyan-500/30 text-white ml-8'
                  }`}
                >
                  <div className="flex items-center justify-between text-[10px] font-mono mb-1">
                    <span className={msg.sender === 'agent' ? 'text-teal-400 font-bold' : 'text-cyan-300 font-bold'}>
                      {msg.sender === 'agent' ? 'AuraVoice Agent' : 'Client Inbound'}
                    </span>
                    <span className="text-slate-500">{msg.time}</span>
                  </div>
                  <p>{msg.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Questions & Input */}
          <div className="pt-4 border-t border-slate-800 space-y-3">
            <div>
              <div className="text-[10px] font-mono uppercase text-slate-400 mb-1.5">
                Quick Inbound Inquiries (Click to Ask):
              </div>
              <div className="flex flex-wrap gap-1.5">
                {samplePrompts.map((q) => (
                  <button
                    key={q}
                    onClick={() => {
                      if (!isCallActive) setIsCallActive(true);
                      handleSendQuery(q);
                    }}
                    className="text-[11px] px-2.5 py-1 rounded bg-slate-950 border border-slate-800 hover:border-cyan-400 text-slate-300 hover:text-white transition-all text-left truncate max-w-full"
                  >
                    "{q}"
                  </button>
                ))}
              </div>
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder={isCallActive ? "Type customer voice message or question..." : "Initiate call first or type here..."}
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSendQuery()}
                className="flex-1 px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-xs text-white focus:border-teal-400 focus:outline-none"
              />
              <button
                onClick={() => handleSendQuery()}
                className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-teal-400 to-cyan-400 text-slate-950 font-bold text-xs hover:from-teal-300 hover:to-cyan-300 transition-all shadow-md active:scale-95 shrink-0"
              >
                Send Voice Packet
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
