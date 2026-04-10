"use client";

import { useState, useEffect } from 'react';
import { Send, ArrowRight, ShieldCheck, Zap, Rocket, LineChart } from 'lucide-react';
import PricingBlocks from '@/components/PricingBlocks';

const homeProjects = [
  { id: 1, title: 'Hệ Thống Đặt Lịch Chăm Sóc Xe', image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=800&auto=format&fit=crop' },
  { id: 2, title: 'E-commerce Thời Trang Premium', image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=800&auto=format&fit=crop' },
  { id: 3, title: 'Landing Page Bất Động Sản', image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800&auto=format&fit=crop' },
];

export default function Home() {
  const [slide, setSlide] = useState(0);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: ''
  });

  // Auto Slider
  useEffect(() => {
    const timer = setInterval(() => {
      setSlide((prev) => (prev === homeProjects.length - 1 ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, email: 'Không Nhập', packageType: 'Trang Chủ Lead' }),
      });
      if (res.ok) {
         setStatus('success');
         setFormData({ name: '', phone: '', message: '' });
      } else setStatus('error');
    } catch {
      setStatus('error');
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
         paddingTop: 'var(--spacing-2xl)', 
         paddingBottom: 'var(--spacing-xl)', 
         textAlign: 'center', 
         display: 'flex', 
         flexDirection: 'column', 
         alignItems: 'center',
         background: 'radial-gradient(circle at 50% -20%, rgba(99, 102, 241, 0.15), transparent 60%)'
      }} className="container animate-fade-in">
        <div style={{ padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--color-brand-primary)', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>NEXT.JS MASTER - ĐỐI TÁC CÔNG NGHỆ CỦA BẠN</div>
        
        <h1 className="hero-title" style={{ marginBottom: 'var(--spacing-md)', fontWeight: 800 }}>
          Thiết Kế Web <span className="text-gradient">Chuyển Đổi Số</span> <br />
          Đột Phá Doanh Thu Tương Lai
        </h1>
        
        <p style={{ fontSize: '1.15rem', color: 'var(--color-text-secondary)', maxWidth: '700px', margin: '0 auto var(--spacing-lg)', lineHeight: 1.8 }}>
          Đừng lãng phí tiền vào những website tĩnh chỉ để "trưng bày". Chúng tôi kết hợp sức mạnh Next.js, API và Trí tuệ Nhân tạo để tạo ra cỗ máy bán hàng trực tuyến đích thực.
        </p>
        
        <div className="flex-center" style={{ gap: 'var(--spacing-md)', flexWrap: 'wrap' }}>
          <a href="#booking-form" className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>Ước Tính Chi Phí Ngay</a>
          <a href="/thiet-ke-website-gia-re" style={{ border: '1px solid var(--color-glass-border)', padding: '1rem 2rem', borderRadius: '99px', fontWeight: 500 }}>Tham Khảo Bảng Giá</a>
        </div>
      </section>

      {/* Featured Slideshow Projects */}
      <section className="container" style={{ marginBottom: 'var(--spacing-2xl)' }}>
         <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '1rem', border: '1px solid var(--color-glass-border)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)', height: '500px' }}>
             <div style={{ display: 'flex', transition: 'transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)', transform: `translateX(-${slide * 100}%)`, height: '100%' }}>
                {homeProjects.map(proj => (
                   <div key={proj.id} style={{ minWidth: '100%', position: 'relative', height: '100%' }}>
                      <img src={proj.image} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem 2rem', background: 'linear-gradient(to top, rgba(10,10,15,0.95), transparent)' }}>
                         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', width: '100%' }}>
                             <div>
                                <div style={{ color: 'var(--color-brand-accent)', fontWeight: 'bold', fontSize: '0.9rem', marginBottom: '0.5rem', letterSpacing: '1px' }}>DỰ ÁN XUẤT SẮC</div>
                                <h3 style={{ fontSize: '2rem', color: '#fff' }}>{proj.title}</h3>
                             </div>
                             <a href="/portfolio" className="btn-primary" style={{ background: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.2)' }}>Xem Case Study</a>
                         </div>
                      </div>
                   </div>
                ))}
             </div>
             {/* Indicators */}
             <div style={{ position: 'absolute', top: '1.5rem', right: '2rem', display: 'flex', gap: '0.5rem' }}>
                {homeProjects.map((_, i) => (
                   <div key={i} style={{ width: slide === i ? '24px' : '8px', height: '8px', borderRadius: '4px', background: slide === i ? 'var(--color-brand-primary)' : 'rgba(255,255,255,0.3)', transition: 'all 0.3s' }}></div>
                ))}
             </div>
         </div>
      </section>

      {/* Real Value Proposition Stats */}
      <section className="container grid-cols-2" style={{ marginBottom: 'var(--spacing-2xl)', gap: '4rem', alignItems: 'center' }}>
         <div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', lineHeight: 1.2 }}>Chúng Tôi Thay Đổi Cách Bạn Phục Vụ Khách Hàng.</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', marginBottom: '2rem' }}>Chỉ với một nền tảng WebCrafter, bạn tự động hóa hoàn toàn quy trình tư vấn và chốt sales truyền thống.</p>
            
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
               <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--color-brand-primary)', background: 'rgba(99, 102, 241, 0.1)', padding: '0.75rem', borderRadius: '50%', height: 'min-content' }}><Zap size={24} /></div>
                  <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Tốc Độ Tải Siêu Nhanh</h4>
                     <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>Tối ưu hóa hình ảnh WEBP tích hợp bộ đệm SSR của Next.js tăng tốc load xuống dưới 1s.</p>
                  </div>
               </li>
               <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: '#4ade80', background: 'rgba(74, 222, 128, 0.1)', padding: '0.75rem', borderRadius: '50%', height: 'min-content' }}><LineChart size={24} /></div>
                  <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Bắt Chuyển Đổi Không Giới Hạn</h4>
                     <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>Tích hợp Chatbot trợ lý AI chuyên môn cao trả lời khách và xin thông tin 24/7/365.</p>
                  </div>
               </li>
               <li style={{ display: 'flex', gap: '1rem' }}>
                  <div style={{ color: 'var(--color-brand-secondary)', background: 'rgba(168, 85, 247, 0.1)', padding: '0.75rem', borderRadius: '50%', height: 'min-content' }}><ShieldCheck size={24} /></div>
                  <div>
                     <h4 style={{ fontSize: '1.2rem', marginBottom: '0.25rem' }}>Bảo Mật Bền Bỉ</h4>
                     <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>Sử dụng công nghệ server-less và database PostgreSQL Cloud (Supabase) siêu khắt khe.</p>
                  </div>
               </li>
            </ul>
         </div>

         {/* Visual Graphic Representation */}
         <div style={{ position: 'relative' }}>
             <div style={{ position: 'absolute', top: '-10%', right: '-10%', width: '100%', height: '100%', background: 'linear-gradient(45deg, var(--color-brand-primary), var(--color-brand-secondary))', filter: 'blur(100px)', opacity: 0.15, zIndex: 0 }}></div>
             <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop" alt="Data Analytics UI" style={{ borderRadius: '1rem', border: '1px solid var(--color-glass-border)', position: 'relative', zIndex: 1, width: '100%', boxShadow: '0 25px 50px rgba(0,0,0,0.5)' }} />
             
             {/* Floating Badge */}
             <div className="glass-panel" style={{ position: 'absolute', bottom: '-20px', left: '-20px', zIndex: 2, padding: '1rem 1.5rem', display: 'flex', alignItems: 'center', gap: '1rem', border: '1px solid rgba(255,255,255,0.2)' }}>
                <div style={{ background: '#4ade80', borderRadius: '50%', padding: '0.5rem' }}><Rocket size={20} color="#000" /></div>
                <div>
                   <div style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>+120%</div>
                   <div style={{ fontSize: '0.8rem', color: 'var(--color-text-secondary)' }}>Biên Độ Tăng Trưởng Của Khách.</div>
                </div>
             </div>
         </div>
      </section>

      {/* Pricing Module in Home */}
      <section className="container" style={{ marginBottom: 'var(--spacing-2xl)' }}>
         <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Bảng Giá Dịch Vụ Minh Bạch</h2>
            <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>Chọn giải pháp tối ưu phù hợp với giai đoạn phát triển của dự án.</p>
         </div>
         
         {/* @ts-ignore - Temporary bypass to avoid typescript issues with dynamic import if any. Usually it just works */}
         <PricingBlocks />
      </section>

      {/* Dynamic Embedded Quick Contact Form */}
      <section id="booking-form" className="container" style={{ marginBottom: 'var(--spacing-2xl)' }}>
         <div className="glass-panel" style={{ background: 'linear-gradient(135deg, rgba(30,40,70,0.7), rgba(20,25,40,0.8))', padding: '4rem 2rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Lên Ý Tưởng Kiến Tạo?</h2>
            <p style={{ color: 'var(--color-text-secondary)', marginBottom: '3rem', maxWidth: '600px', fontSize: '1.1rem' }}>Để lại Số Điện Thoại. Kỹ sư trưởng của chúng tôi sẽ lập bản nháp ngay trong hôm nay.</p>
            
            <form onSubmit={handleContactSubmit} style={{ width: '100%', maxWidth: '600px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
               <div style={{ display: 'flex', gap: '1rem', width: '100%', flexDirection: 'row' }}>
                  <input required placeholder="Họ và Tên" className="input-field" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} style={{ marginBottom: 0, flex: 1 }} />
                  <input required placeholder="Số Điện Thoại" type="tel" className="input-field" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} style={{ marginBottom: 0, flex: 1 }} />
               </div>
               <textarea required placeholder="Bạn muốn xây dựng hệ thống website về lĩnh vực gì? (Ngành tóc, Nhà Hàng, Crypto, E-commerce...)" className="input-field" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} style={{ marginBottom: 0, minHeight: '120px', resize: 'vertical' }}></textarea>
               
               {status === 'success' && <div style={{ color: '#4ade80', fontSize: '0.9rem', textAlign: 'left' }}>Đã gửi thành công! Đội ngũ đang xử lý!</div>}
               {status === 'error' && <div style={{ color: '#ef4444', fontSize: '0.9rem', textAlign: 'left' }}>Chưa gửi được do lỗi mạng hoặc API Key. Vui lòng thử lại!</div>}
               
               <button disabled={status === 'loading'} className="btn-primary" style={{ width: '100%', padding: '1rem', fontSize: '1.1rem', marginTop: '1rem', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}>
                  {status === 'loading' ? 'Đang Thiết Lập Cuộc Hẹn...' : 'Booking Chuyên Viên Kỹ Thuật'} <ArrowRight size={20} />
               </button>
            </form>
         </div>
      </section>

    </div>
  );
}
