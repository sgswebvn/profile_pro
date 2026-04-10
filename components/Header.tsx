"use client";

import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header style={{ padding: 'var(--spacing-md) 0', borderBottom: '1px solid var(--color-glass-border)', position: 'sticky', top: 0, background: 'var(--color-bg-primary)', zIndex: 50 }}>
      {/* Container */}
      <div className="container flex-between">
        <a href="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.5rem', fontWeight: 'bold' }} className="text-gradient">
          WebCrafter
        </a>
        
        {/* Desktop Navigation */}
        <nav className="header-nav" style={{ alignItems: 'center' }}>
          <a href="/" style={{ fontWeight: 500 }}>Trang chủ</a>
          <a href="/thiet-ke-website-gia-re" style={{ fontWeight: 500 }}>Báo giá</a>
          <a href="/quy-trinh" style={{ fontWeight: 500 }}>Quy trình</a>
          <a href="/portfolio" style={{ fontWeight: 500 }}>Portfolio</a>
          <a href="/tin-tuc" style={{ fontWeight: 500 }}>Tin tức</a>
        </nav>
        
        <a href="/lien-he" className="btn-primary header-btn" style={{ padding: '0.5rem 1rem' }}>Liên hệ ngay</a>

        {/* Mobile Menu Icon */}
        <div className="mobile-menu-icon" style={{ cursor: 'pointer' }} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          backgroundColor: 'var(--color-bg-secondary)',
          borderBottom: '1px solid var(--color-glass-border)',
          padding: 'var(--spacing-md)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
          boxShadow: '0 10px 15px rgba(0,0,0,0.5)',
          zIndex: 49
        }} className="animate-fade-in">
          <a href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '0.5rem 0', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Trang chủ</a>
          <a href="/thiet-ke-website-gia-re" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '0.5rem 0', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Báo giá</a>
          <a href="/quy-trinh" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '0.5rem 0', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Quy trình</a>
          <a href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '0.5rem 0', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Portfolio</a>
          <a href="/tin-tuc" onClick={() => setIsMobileMenuOpen(false)} style={{ padding: '0.5rem 0', fontWeight: 500, borderBottom: '1px solid rgba(255,255,255,0.05)' }}>Tin tức</a>
          <a href="/lien-he" className="btn-primary" style={{ marginTop: '0.5rem', padding: '0.75rem', textAlign: 'center' }}>Liên hệ ngay</a>
        </div>
      )}

      {/* Inline styles cho mobile icon - ẩn ở desktop */}
      <style dangerouslySetInnerHTML={{__html: `
        @media (min-width: 768px) { .mobile-menu-icon { display: none !important; } }
      `}} />
    </header>
  );
}
