"use client";

import { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

const articles = [
  {
    id: 1,
    slug: 'tai-sao-can-nextjs-cho-du-an',
    category: 'Xu hướng 2026',
    title: 'Tại Sao Cần Next.js Cho Dự Án Kho Dữ Liệu Lớn Của Bạn?',
    excerpt: 'Khám phá sự thật đằng sau tốc độ load trang 1 giây chuẩn SEO mà các doanh nghiệp đối thủ đang sử dụng để vượt mặt bạn trên Google.',
    date: '02/04/2026',
    readingTime: '5 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 2,
    slug: 'nghe-thuat-glassmorphism',
    category: 'UI / UX',
    title: 'Nghệ Thuật Của Glassmorphism Trong Thiết Kế Giao Diện',
    excerpt: 'Hiệu ứng kính mờ đã thay đổi hoàn toàn cách người dùng trải nghiệm sự cao cấp. Ứng dụng ngay để tăng độ Trust cho website.',
    date: '28/03/2026',
    readingTime: '8 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop'
  },
  {
    id: 3,
    slug: 'chatbot-ai-cham-soc-khach',
    category: 'Thủ thuật',
    title: 'Chatbot AI Đã Thay Thế Khâu Chăm Sóc Khách Khách?',
    excerpt: 'Chi tiết cách tích hợp Gemini API để tạo nhân viên trực 24/7 trực tuyến chuẩn tư duy chốt sales không hề phàn nàn.',
    date: '15/03/2026',
    readingTime: '6 phút đọc',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop'
  }
];

export default function BlogPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  // Auto-play slideshow for featured
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === articles.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const filteredArticles = articles.filter(art => 
    art.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    art.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }} className="animate-fade-in">
        <h1 className="hero-title" style={{ marginBottom: 'var(--spacing-md)' }}>
          Góc Nhìn <span className="text-gradient">Chuyên Gia</span>
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Tuyển tập kiến thức về thiết kế website và trải nghiệm người dùng.
        </p>
      </header>

      {/* Featured Slideshow */}
      <section style={{ marginBottom: 'var(--spacing-2xl)', position: 'relative', overflow: 'hidden', borderRadius: '1rem', border: '1px solid var(--color-glass-border)' }}>
         <div style={{ display: 'flex', transition: 'transform 0.5s ease', transform: `translateX(-${currentSlide * 100}%)` }}>
            {articles.map((art) => (
               <div key={`slide-${art.id}`} style={{ minWidth: '100%', position: 'relative', height: '450px' }}>
                  <img src={art.imageUrl} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.4 }} />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, padding: '3rem', background: 'linear-gradient(to top, var(--color-bg-primary) 0%, transparent 100%)' }}>
                     <span style={{ background: 'var(--color-brand-primary)', color: '#fff', padding: '0.25rem 0.75rem', borderRadius: '4px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1rem', display: 'inline-block' }}>TIN TIÊU ĐIỂM</span>
                     <h2 style={{ fontSize: '2.5rem', lineHeight: 1.3, marginBottom: '1rem', color: '#fff' }}>{art.title}</h2>
                     <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.1rem', maxWidth: '800px' }}>{art.excerpt}</p>
                     <a href={`/tin-tuc/${art.slug}`} className="btn-primary" style={{ marginTop: '1.5rem', display: 'inline-block' }}>Đọc ngay</a>
                  </div>
               </div>
            ))}
         </div>
      </section>

      {/* Grid Articles & Search Bar */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--color-glass-border)', paddingBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
         <h2 style={{ fontSize: '1.8rem' }}>Bài Viết Mới Nhất</h2>
         
         <div style={{ position: 'relative', width: '300px' }}>
            <Search size={18} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--color-text-secondary)' }} />
            <input 
               type="text" 
               placeholder="Tìm kiếm tin tức..." 
               value={searchQuery}
               onChange={(e) => setSearchQuery(e.target.value)}
               className="input-field"
               style={{ paddingLeft: '35px', marginBottom: 0 }}
            />
         </div>
      </div>
      
      {filteredArticles.length === 0 ? (
         <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--color-text-secondary)' }}>Không tìm thấy bài viết nào phù hợp.</div>
      ) : (
         <section className="grid-cols-3" style={{ gap: '2rem' }}>
           {filteredArticles.map((art) => (
             <article key={art.id} className="glass-panel" style={{ display: 'flex', flexDirection: 'column', padding: 0, overflow: 'hidden', transition: 'all 0.3s' }}>
               <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src={art.imageUrl} alt={art.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="article-img" />
               </div>
               <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', alignItems: 'center' }}>
                    <span style={{ color: 'var(--color-brand-secondary)', fontWeight: 'bold', fontSize: '0.8rem', textTransform: 'uppercase' }}>{art.category}</span>
                    <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.8rem' }}>{art.readingTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', flex: 1 }}>{art.title}</h3>
                  <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>{art.excerpt.substring(0, 80)}...</p>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', borderTop: '1px solid var(--color-glass-border)', paddingTop: '1rem' }}>
                     <span style={{ color: 'var(--color-text-secondary)', fontSize: '0.85rem' }}>{art.date}</span>
                     <a href={`/tin-tuc/${art.slug}`} style={{ color: 'var(--color-brand-accent)', fontSize: '0.95rem', textDecoration: 'none', fontWeight: 500 }}>Đọc tiếp &rarr;</a>
                  </div>
               </div>
             </article>
           ))}
         </section>
      )}
      
      <style dangerouslySetInnerHTML={{__html: `
        .glass-panel:hover .article-img { transform: scale(1.05); }
      `}} />
    </div>
  );
}
