export default function PricingBlocks() {
  return (
    <section className="grid-cols-3" style={{ gap: '2rem' }}>
      {/* Gói Cơ Bản */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
         <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-text-primary)' }}>Gói Cơ Bản</h2>
         <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: 'var(--spacing-md)' }}>2.500.000 <span style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>VND</span></div>
         
         <ul style={{ listStyle: 'none', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Layout Template Premium Độc Mẫu Trong Thư Viện</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Tối Ưu Hiển Thị Thiết Bị Di Động, Máy Tính Bảng 100%</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Tối Ưu Chuẩn SEO Thẻ Meta (Tăng Điểm Tìm Kiếm Google)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Bảo Mật Chứng Chỉ SSL Xanh Cấp Độ Toàn Cầu</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Đóng Gói Và Triển Khai Lên Server Quốc Tế Miễn Phí</li>
            <li><span style={{ color: 'rgba(255,255,255,0.1)', marginRight: '8px' }}>✕</span> <del style={{ opacity: 0.5 }}>Chức Năng Quản Lý Content Chủ Web Tự Sửa</del></li>
         </ul>
         
         <div style={{ marginTop: 'auto' }}>
            <a href="/lien-he" className="btn-primary" style={{ width: '100%', textAlign: 'center', background: 'transparent', border: '1px solid var(--color-glass-border)' }}>Liên Hệ Mua</a>
         </div>
      </div>

      {/* Gói Tối Ưu (Trung Cấp) */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', border: '1px solid var(--color-brand-primary)', position: 'relative', background: 'linear-gradient(to bottom, rgba(99, 102, 241, 0.05), transparent)' }}>
         <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', background: 'var(--color-brand-primary)', color: '#fff', fontSize: '0.8rem', padding: '0.2rem 1rem', borderRadius: '99px', letterSpacing: '1px', fontWeight: 'bold' }}>
            BÁN CHẠY NHẤT
         </div>
         <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brand-primary)' }}>Gói Trung Cấp</h2>
         <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: 'var(--spacing-md)' }}>5.500.000 <span style={{ fontSize: '1rem', color: 'var(--color-text-secondary)', fontWeight: 'normal' }}>VND</span></div>
         
         <ul style={{ listStyle: 'none', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Design Cá Nhân Hóa Toàn Bộ (Theo Bản Vẽ Mới 100%)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Tính Năng Động (Trang Admin Quản Trị Bài Viết/Sản Phẩm)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Khung Chat Trực Tuyến Giao Tiếp Web Với Khách (Zalo/AI)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Setup Hệ Thống Form Tracking & Gửi Thông Báo Tình Trạng</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Xây Dựng Sitemap Chuyên Sâu, Auto Ping Index Google Trong 2 Giờ</li>
         </ul>
         
         <div style={{ marginTop: 'auto' }}>
            <a href="/lien-he" className="btn-primary" style={{ width: '100%', textAlign: 'center' }}>Chọn Gói Này</a>
         </div>
      </div>

      {/* Gói Doanh Nghiệp (Nâng Cao) */}
      <div className="glass-panel" style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
         <h2 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--color-brand-secondary)' }}>Gói Nâng Cao</h2>
         <div style={{ fontSize: '2.2rem', fontWeight: 'bold', marginBottom: 'var(--spacing-md)' }}>Liên Hệ</div>
         
         <ul style={{ listStyle: 'none', marginBottom: 'var(--spacing-xl)', display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--color-text-secondary)' }}>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Trợ Lý Ảo Hỗ Trợ Khách Hàng (Tích hợp Trí Tuệ Nhân Tạo Gemini/ChatGPT)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Gửi Email / Thông Báo Đơn Hàng Tự Động (Automation Workflows)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Tối Ưu Tốc Độ Tải Siêu Tốc &lt;1s Qua Công Nghệ Next.js (SSR)</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Thiết Kế Micro-interactions & 3D CSS Kích Thích Trải Nghiệm</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Hệ Thống Ghi Nhận Hành Vi User & Backup Data Hàng Ngày</li>
            <li><span style={{ color: '#4ade80', marginRight: '8px' }}>✓</span> Bàn Giao Tuyệt Đối Source Code Gốc Nhóm Công Nghệ Cao Nhất</li>
         </ul>
         
         <div style={{ marginTop: 'auto' }}>
            <a href="/lien-he" className="btn-primary" style={{ width: '100%', textAlign: 'center', background: 'transparent', border: '1px solid var(--color-brand-secondary)' }}>Nhận Tư Vấn Master</a>
         </div>
      </div>
    </section>
  );
}
