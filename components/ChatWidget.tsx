"use client";

import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai', content: string }[]>([
    { role: 'ai', content: 'Chào bạn! Mình là AI tư vấn viên của WebCrafter. Bạn đang quan tâm đến gói thiết kế website nào ạ?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Auto-open chat after 10 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);
    return () => clearTimeout(timer);
  }, []);

  const sendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: [...messages, { role: 'user', content: userMsg }] }),
      });

      const data = await res.json();
      if (data.reply) {
        setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
      } else {
        throw new Error('No reply from AI');
      }
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: 'Xin lỗi, hệ thống AI đang bảo trì. Quý khách vui lòng để lại lời nhắn qua Form Liên Hệ!' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="btn-primary"
        style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          padding: 0,
          boxShadow: '0 10px 25px rgba(99, 102, 241, 0.5)',
          zIndex: 9999,
          display: isOpen ? 'none' : 'flex'
        }}
      >
        <MessageSquare size={28} />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div style={{
          position: 'fixed',
          bottom: '2rem',
          right: '2rem',
          width: '350px',
          maxWidth: '90vw',
          height: '500px',
          maxHeight: '80vh',
          backgroundColor: 'var(--color-bg-secondary)',
          borderRadius: '1rem',
          border: '1px solid var(--color-glass-border)',
          boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
          zIndex: 10000,
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }} className="animate-fade-in">

          {/* Chat Header */}
          <div style={{
            padding: '1rem',
            background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-accent))',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: 'white'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <div style={{ width: '10px', height: '10px', backgroundColor: '#4ade80', borderRadius: '50%' }}></div>
              <h3 style={{ fontSize: '1.1rem', margin: 0, padding: 0 }}>AI Tư Vấn WebCrafter</h3>
            </div>
            <button onClick={() => setIsOpen(false)} style={{ background: 'transparent', border: 'none', color: 'white', cursor: 'pointer' }}>
              <X size={24} />
            </button>
          </div>

          {/* Chat Messages */}
          <div style={{
            flex: 1,
            padding: '1rem',
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem'
          }}>
            {messages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                maxWidth: '85%',
                padding: '0.75rem 1rem',
                borderRadius: '1rem',
                backgroundColor: msg.role === 'user' ? 'var(--color-brand-primary)' : 'rgba(255,255,255,0.05)',
                border: msg.role === 'user' ? 'none' : '1px solid var(--color-glass-border)',
                color: 'var(--color-text-primary)',
                fontSize: '0.95rem',
                borderBottomRightRadius: msg.role === 'user' ? '0.25rem' : '1rem',
                borderBottomLeftRadius: msg.role === 'ai' ? '0.25rem' : '1rem'
              }}>
                {msg.content}
              </div>
            ))}
            {isLoading && (
              <div style={{ alignSelf: 'flex-start', backgroundColor: 'rgba(255,255,255,0.05)', padding: '0.75rem', borderRadius: '1rem', fontSize: '0.9rem', border: '1px solid var(--color-glass-border)', borderBottomLeftRadius: '0.25rem' }}>
                <span style={{ fontStyle: 'italic', color: 'var(--color-text-secondary)' }}>AI đang suy nghĩ...</span>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Chat Input */}
          <form onSubmit={sendMessage} style={{
            padding: '1rem',
            borderTop: '1px solid var(--color-glass-border)',
            display: 'flex',
            gap: '0.5rem',
            backgroundColor: 'var(--color-bg-primary)'
          }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Nhập yêu cầu của bạn..."
              style={{
                flex: 1,
                padding: '0.75rem',
                borderRadius: '9999px',
                border: '1px solid var(--color-glass-border)',
                background: 'rgba(255,255,255,0.05)',
                color: 'white',
                outline: 'none'
              }}
            />
            <button type="submit" disabled={isLoading || !input.trim()} style={{
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: input.trim() ? 'var(--color-brand-primary)' : 'var(--color-glass-border)',
              color: 'white',
              border: 'none',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              cursor: input.trim() ? 'pointer' : 'not-allowed',
              transition: 'background 0.3s'
            }}>
              <Send size={18} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
