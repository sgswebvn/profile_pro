import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import ChatWidget from '@/components/ChatWidget'; // <-- AI Chat widget

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });
const outfit = Outfit({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'Thiết Kế Website Cá Nhân, Doanh Nghiệp | Giao Diện Premium Tối Ưu',
  description: 'Dịch vụ thiết kế website cao cấp chuẩn UI/UX, tối ưu hóa tốc độ tải trang cực nhanh, hỗ trợ tích hợp Chat realtime và trợ lý ảo AI chuyên sâu.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`${inter.variable} ${outfit.variable}`}>
      <body>
        <Header />
        
        <main style={{ minHeight: '80vh' }}>{children}</main>
        
        <ChatWidget />
        
        <footer style={{ borderTop: '1px solid var(--color-glass-border)', marginTop: '4rem', background: 'rgba(10, 10, 15, 0.8)' }}>
          <div className="container" style={{ padding: '4rem 1rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
             {/* Col 1 */}
             <div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '1rem' }} className="text-gradient">WebCrafter.</h3>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>Kiến tạo giải pháp công nghệ thông qua các chiến lược nền tảng website ứng dụng Trí Tuệ Nhân Tạo hàng đầu Châu Á.</p>
             </div>
             
             {/* Col 2 */}
             <div>
                <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Dịch Vụ Nổi Bật</h4>
                <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
                   <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Thiết kế Web Doanh Nghiệp</a></li>
                   <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Hệ thống E-commerce</a></li>
                   <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Landing Page Chuyển Đổi</a></li>
                   <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Nâng cấp UI/UX App Router</a></li>
                </ul>
             </div>

             {/* Col 3 */}
             <div>
                <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Hỗ Trợ Khách Hàng</h4>
                <ul style={{ listStyle: 'none', color: 'var(--color-text-secondary)', display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.95rem' }}>
                   <li><a href="/quy-trinh" style={{ textDecoration: 'none', color: 'inherit' }}>Quy trình làm việc</a></li>
                   <li><a href="/thiet-ke-website-gia-re" style={{ textDecoration: 'none', color: 'inherit' }}>Bảng giá chi tiết</a></li>
                   <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Chính sách bảo hành</a></li>
                   <li><a href="#" style={{ textDecoration: 'none', color: 'inherit' }}>Hình thức thanh toán</a></li>
                </ul>
             </div>

             {/* Col 4 */}
             <div>
                <h4 style={{ fontWeight: 600, marginBottom: '1.5rem', color: '#fff' }}>Đăng Ký Nhận Bản Tin</h4>
                <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', lineHeight: 1.6, marginBottom: '1rem' }}>Nhận ngay báo cáo tối ưu hoá Website mới nhất mỗi tuần.</p>
                <div style={{ display: 'flex' }}>
                   <input type="email" placeholder="Email của bạn..." className="input-field" style={{ borderRadius: '8px 0 0 8px', marginBottom: 0 }} />
                   <button className="btn-primary" style={{ borderRadius: '0 8px 8px 0', padding: '0 1rem' }}>Gửi</button>
                </div>
             </div>
          </div>
          
          <div style={{ textAlign: 'center', padding: '1.5rem', borderTop: '1px solid var(--color-glass-border)', color: 'var(--color-text-secondary)', fontSize: '0.9rem' }}>
             © {new Date().getFullYear()} WebCrafter - Kỹ sư của các siêu phẩm.
          </div>
        </footer>

        {/* Sticky Contact Icons Bottom Left (Tránh đè Chat AI) */}
        <div style={{ position: 'fixed', bottom: '2rem', left: '2rem', display: 'flex', flexDirection: 'column', gap: '1rem', zIndex: 9999 }}>
           {/* Zalo */}
           <a href="#" className="sticky-icon" style={{ background: '#0068ff' }} title="Chat Zalo">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
           </a>
           
           {/* Facebook */}
           <a href="#" className="sticky-icon" style={{ background: '#1877f2' }} title="Facebook Messenger">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
           </a>
           
           {/* Hotline */}
           <a href="tel:0123456789" className="sticky-icon" style={{ background: '#ef4444' }} title="Gọi Điện Thoại">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
           </a>
        </div>
        
        {/* Style cho Sticky Icons */}
        <style dangerouslySetInnerHTML={{__html: `
          .sticky-icon {
             width: 50px;
             height: 50px;
             border-radius: 50%;
             display: flex;
             align-items: center;
             justify-content: center;
             color: white;
             box-shadow: 0 4px 14px rgba(0,0,0,0.25);
             transition: all 0.3s;
             text-decoration: none;
             animation: bounce-subtle 3s infinite;
          }
          .sticky-icon:hover {
             transform: translateY(-5px) scale(1.1);
          }
          @keyframes bounce-subtle {
             0%, 100% { transform: translateY(0); }
             50% { transform: translateY(-5px); }
          }
        `}} />
      </body>
    </html>
  );
}
