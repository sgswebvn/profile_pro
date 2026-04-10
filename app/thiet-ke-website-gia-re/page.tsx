import type { Metadata } from 'next';
import PricingBlocks from '@/components/PricingBlocks';

export const metadata: Metadata = {
  title: 'Bảng Báo Giá Thiết Kế Website Trọn Gói | WebCrafter',
  description: 'Chi tiết các gói dịch vụ thiết kế website: Cơ bản, Trung cấp, Nâng cao tương ứng với từng giải pháp của Start-up đến Doanh Nghiệp Lớn.',
  openGraph: {
    title: 'Bảng Báo Giá Thiết Kế Website WebCrafter',
    description: 'Chuyên thiết kế website giá rẻ, cao cấp, chuẩn UI/UX.',
    url: 'https://yourdomain.com/thiet-ke-website-gia-re',
  }
};

export default function PricingPage() {
  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-2xl)', paddingBottom: 'var(--spacing-2xl)' }}>
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }} className="animate-fade-in">
        <h1 className="text-gradient" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Bảng Giá Dịch Vụ Minh Bạch</h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
          Đầu tư một lần, sử dụng một hệ sinh thái trọn đời. Lựa chọn một trong ba thiết lập có chi phí tối ưu theo từng giai đoạn Công ty.
        </p>
      </header>

      {/* Pricing Blocks Reusable */}
      <PricingBlocks />

      <div className="flex-center" style={{ marginTop: 'var(--spacing-2xl)' }}>
         <div className="glass-panel" style={{ display: 'flex', gap: '2rem', alignItems: 'center', background: 'rgba(255,255,255,0.02)' }}>
            <div>
               <h3 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>Chưa rõ bạn cần gói nào?</h3>
               <p style={{ color: 'var(--color-text-secondary)', fontSize: '0.95rem', maxWidth: '400px' }}>Chuyên gia tư vấn của chúng tôi sẽ gọi điện lại cho bạn trong ít phút để khảo sát và đề xuất.</p>
            </div>
            <a href="/lien-he" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Sắp Xếp Cuộc Gọi</a>
         </div>
      </div>
    </div>
  );
}
