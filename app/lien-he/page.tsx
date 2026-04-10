"use client";

import { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    packageType: 'Cơ Bản'
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', packageType: 'Cơ Bản' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }} className="animate-fade-in">
        <h1 className="hero-title" style={{ marginBottom: 'var(--spacing-md)' }}>
          <span className="text-gradient">Liên Hệ</span> Với Chúng Tôi
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Bạn cần thiết kế trang web định vị thương hiệu? Hãy để lại thông tin, đội ngũ WebCrafter sẽ gọi điện và hỗ trợ giải pháp trong vòng 30 phút.
        </p>
      </header>

      <div className="grid-cols-2" style={{ gap: '3rem', alignItems: 'flex-start' }}>
        {/* Contact Form */}
        <div className="glass-panel">
          <h2 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Gửi Yêu Cầu Tư Vấn</h2>

          {status === 'success' && (
            <div style={{ padding: '1rem', background: 'rgba(74, 222, 128, 0.1)', border: '1px solid #4ade80', borderRadius: '8px', marginBottom: '1rem', color: '#4ade80' }}>
              Gửi thông tin thành công! Chúng tôi sẽ liên hệ sớm nhất.
            </div>
          )}

          {status === 'error' && (
            <div style={{ padding: '1rem', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid #ef4444', borderRadius: '8px', marginBottom: '1rem', color: '#ef4444' }}>
              Có lỗi xảy ra, vui lòng thử lại sau hoặc gọi trực tiếp!
            </div>
          )}

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Họ và Tên *</label>
              <input required type="text" className="input-field" placeholder="Nguyễn Văn A" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Điện thoại *</label>
                <input required type="tel" className="input-field" placeholder="0123 456 789" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} />
              </div>
              <div style={{ flex: 1, minWidth: '150px' }}>
                <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Email</label>
                <input type="email" className="input-field" placeholder="email@domain.com" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', marginBottom: '0.5rem', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>Gói Dịch Vụ Quan Tâm</label>
              <select className="input-field" value={formData.packageType} onChange={(e) => setFormData({ ...formData, packageType: e.target.value })}>
                <option value="Cơ Bản">Gói Cơ Bản (2.5tr)</option>
                <option value="Trung Cấp">Gói Trung Cấp (5.5tr)</option>
                <option value="Nâng Cao">Gói Nâng Cao (Liên hệ)</option>
                <option value="Khác">Chỉ cần tư vấn thêm</option>
              </select>
            </div>

            <button type="submit" disabled={status === 'loading'} className="btn-primary" style={{ marginTop: '0.5rem', width: '100%', display: 'flex', gap: '0.5rem', opacity: status === 'loading' ? 0.7 : 1 }}>
              <Send size={18} /> {status === 'loading' ? 'Đang gửi...' : 'Gửi Yêu Cầu'}
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem' }}>Thông Tin Trực Tiếp</h3>
            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-brand-primary)' }}>
                <MapPin size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Trụ Sở Chính</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}> Quận 1, TPHCM</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-brand-primary)' }}>
                <Phone size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Hotline Tư Vấn</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>0941518881 (Zalo 24/7)</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
              <div style={{ background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '50%', color: 'var(--color-brand-primary)' }}>
                <Mail size={24} />
              </div>
              <div>
                <div style={{ fontWeight: 'bold' }}>Hộp Thư Phân Khúc</div>
                <div style={{ color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>hieucv2004@gmail.com</div>
              </div>
            </div>
          </div>

          {/* FAQ Snippet if needed */}
          <div style={{ background: 'linear-gradient(135deg, var(--color-brand-primary), var(--color-brand-secondary))', padding: '1.5rem', borderRadius: '1rem', color: 'white' }}>
            <h4 style={{ marginBottom: '0.5rem', fontSize: '1.1rem' }}>Lưu ý về quy trình</h4>
            <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>Toàn bộ thông tin của bạn được bảo mật tuyệt đối. Chúng tôi sẽ thiết lập File báo giá dạng PDF và gửi trước vào Email kèm theo chi phí chính xác khi trao đổi qua điện thoại.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
