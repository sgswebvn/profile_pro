import type { Metadata } from 'next';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Đọc Bài Viết | WebCrafter',
  description: 'Nội dung chia sẻ kiến thức công nghệ và lập trình Next.js, SEO, tư duy thiết kế web.',
};

export default function ArticleDetailPage({ params }: { params: { slug: string } }) {
  // Mock data detail since we don't have db connection mapped yet
  const article = {
     title: 'Tại Sao Cần Next.js Cho Dự Án Kho Dữ Liệu Lớn Của Bạn?',
     category: 'Xu hướng 2026',
     date: '02/04/2026',
     readingTime: '5 phút đọc',
     imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1200&auto=format&fit=crop',
     content: `
        Kính mờ (Glassmorphism), Server Side Rendering (SSR), App Router... Tất cả đang định hình chuẩn mực mới.
        
        Khi nói đến một dự án có quy mô dữ liệu lớn, hàng trăm nghìn traffic truy cập đồng thời, React thuần hay WordPress thường xuyên bộc lộ điểm yếu chết người: Mức tiêu thụ bộ nhớ clien-side khổng lồ và khả năng lập chỉ mục (SEO) kém.

        Next.js là sự cứu rỗi. Nó cung cấp cơ chế Edge Caching, cho phép phân phối file tĩnh ở tốc độ ánh sáng ngay tại trung tâm dữ liệu gần người dùng cuối nhất. 

        > "Tốc độ tải trang tỷ lệ thuận với tỷ lệ chốt sales"

        Hãy để ý cách các ông lớn thương mại điện tử làm web. Họ không hề tải một thanh loading nặng nề. Mọi thứ được Fetching Data trực tiếp trên Server trước khi ném HTML về mặt khách hàng.

        Lộ trình chuyển đổi:
        1. Migration UI sang App Router Next 15.
        2. Tách biệt tầng Database qua Postgres/Supabase.
        3. Tối ưu LCP (Largest Contentful Paint).
     `
  };

  return (
    <article className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-2xl)', maxWidth: '800px' }}>
       <a href="/tin-tuc" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-brand-primary)', marginBottom: '2rem', textDecoration: 'none', fontWeight: 500 }}>
          <ArrowLeft size={18} /> Quay lại Tin Tức
       </a>

       <header style={{ marginBottom: '2rem' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
             <span style={{ color: 'var(--color-brand-secondary)', fontWeight: 'bold', fontSize: '0.9rem', textTransform: 'uppercase' }}>{article.category}</span>
          </div>
          <h1 style={{ fontSize: '2.5rem', lineHeight: 1.3, marginBottom: '1.5rem' }}>{article.title}</h1>
          <div style={{ display: 'flex', gap: '1.5rem', color: 'var(--color-text-secondary)', fontSize: '0.95rem' }}>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={16} /> {article.date}</span>
             <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={16} /> {article.readingTime}</span>
          </div>
       </header>

       <div style={{ width: '100%', height: '400px', borderRadius: '1rem', overflow: 'hidden', marginBottom: '2.5rem', border: '1px solid var(--color-glass-border)' }}>
          <img src={article.imageUrl} alt="Cover" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
       </div>

       <div style={{ color: 'var(--color-text-primary)', fontSize: '1.15rem', lineHeight: 2, whiteSpace: 'pre-line' }}>
          {article.content}
       </div>
       
       <div style={{ marginTop: '4rem', paddingTop: '2rem', borderTop: '1px solid var(--color-glass-border)', textAlign: 'center' }}>
          <h3 style={{ marginBottom: '1rem' }}>Bài viết này có hữu ích cho bạn không?</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
             <button className="btn-primary" style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid var(--color-glass-border)' }}>Chưa hiểu lắm</button>
             <button className="btn-primary">Rất hữu ích 👍</button>
          </div>
       </div>
    </article>
  );
}
