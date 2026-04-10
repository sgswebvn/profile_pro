import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dự Án Đã Thực Hiện | Portfolio WebCrafter',
  description: 'Khám phá các dự án thiết kế website thực tế được thực hiện bởi WebCrafter cho các thương hiệu, cá nhân và doanh nghiệp.',
};

const projects = [
  { id: 1, title: 'E-commerce Thời Trang Nam', category: 'Web Doanh Nghiệp', url: '#', imgUrl: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?q=80&w=600&auto=format&fit=crop' },
  { id: 2, title: 'Landing Page Bất Động Sản', category: 'Thiết Kế Cơ Bản', url: '#', imgUrl: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=600&auto=format&fit=crop' },
  { id: 3, title: 'Web App Đặt Lịch Chăm Sóc Xe', category: 'Hệ Thống Nâng Cao', url: '#', imgUrl: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=600&auto=format&fit=crop' },
  { id: 4, title: 'Portfolio Cá Nhân Nhiếp Ảnh Gia', category: 'Blog / Cá Nhân', url: '#', imgUrl: 'https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=600&auto=format&fit=crop' },
  { id: 5, title: 'Dashboard Quản Trị ERP', category: 'Hệ Thống Nâng Cao', url: '#', imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop' },
  { id: 6, title: 'Website Bệnh Viện Mắt', category: 'Web Doanh Nghiệp', url: '#', imgUrl: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=600&auto=format&fit=crop' },
];

export default function PortfolioPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-xl)' }}>
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }} className="animate-fade-in">
        <h1 className="hero-title" style={{ marginBottom: 'var(--spacing-md)' }}>
          Các <span className="text-gradient">Dự Án Nổi Bật</span>
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          Tuyển tập những siêu phẩm mà chúng tôi đã đồng hành cùng khách hàng xây dựng từ con số 0 đến phiên bản hoàn hảo nhất.
        </p>
      </header>

      <section className="grid-cols-2" style={{ gap: '2rem' }}>
        {projects.map((proj) => (
          <div key={proj.id} className="glass-panel" style={{ cursor: 'pointer', overflow: 'hidden', padding: 0, display: 'flex', flexDirection: 'column', transition: 'all 0.3s' }}>
            <div style={{
              width: '100%',
              height: '300px',
              overflow: 'hidden',
              position: 'relative'
            }}>
              <img src={proj.imgUrl} alt={proj.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} className="proj-img" />
            </div>
            
            <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
               <div style={{ color: 'var(--color-brand-primary)', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>{proj.category}</div>
               <h3 style={{ fontSize: '1.3rem', flex: 1 }}>{proj.title}</h3>
               <a href={proj.url} style={{ marginTop: '1rem', display: 'inline-block', color: 'var(--color-brand-accent)', textDecoration: 'underline', fontSize: '0.9rem' }}>Xem chi tiết UI/UX &rarr;</a>
            </div>
          </div>
        ))}
      </section>

      <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
         <a href="/lien-he" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>Trở Thành Đối Tác Tiếp Theo</a>
      </div>

      <style dangerouslySetInnerHTML={{__html: `
        .glass-panel:hover .proj-img { transform: scale(1.05); }
        .glass-panel:hover { border-color: var(--color-brand-primary); }
      `}} />
    </div>
  );
}
