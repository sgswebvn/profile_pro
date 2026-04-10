import type { Metadata } from 'next';
import { Search, PenTool, Code, ShieldCheck, Rocket } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Quy Trình Làm Dự Án Bền Vững | WebCrafter',
  description: 'Tìm hiểu 5 bước trong quy trình phát triển từ ý tưởng đến siêu phẩm website hoàn chỉnh tại WebCrafter.',
};

export default function ProcessPage() {
  const steps = [
    {
      id: 1,
      icon: <Search size={32} />,
      title: 'Khảo Sát & Phân Tích (Discovery)',
      time: '1 - 3 Ngày',
      desc: 'Chúng tôi không bắt tay vào code ngay. Bước đầu tiên, chuyên viên sẽ trao đổi trực tiếp để hiểu rõ Business Model, phác hoạ chân dung khách hàng mục tiêu và phân tích nhược điểm của đối thủ cạnh tranh.',
      points: ['Xác định mục tiêu KPIs', 'Nghiên cứu đối thủ', 'Đề xuất kiến trúc công nghệ phù hợp nhất']
    },
    {
      id: 2,
      icon: <PenTool size={32} />,
      title: 'Thiết Kế Giao Diện (UI/UX Design)',
      time: '3 - 7 Ngày',
      desc: 'Hô biến những ý tưởng trên giấy thành bản vẽ Figma/Sketch chuyên nghiệp sống động. Áp dụng những tiêu chuẩn thẩm mỹ Premium từ sự tối giản (Minimalism) đến kính mờ (Glassmorphism).',
      points: ['Vẽ bản đồ luồng người dùng (User-flow)', 'Lên Concept màu sắc/Typography', 'Thống nhất và tinh chỉnh bản vẽ 100%']
    },
    {
      id: 3,
      icon: <Code size={32} />,
      title: 'Phát Triển Hệ Thống (Frontend/Backend)',
      time: '7 - 14 Ngày',
      desc: 'Đội ngũ kỹ sư sẽ sử dụng Next.js App Router cho tốc độ Frontend tải cực nhanh kết hợp cùng Backend Supabase mãnh mẽ và an toàn tuyệt đối.',
      points: ['Chuyển đổi UI thành Code React/Next.js', 'Phát triển API & Database Supabase', 'Tích hợp Trợ lý Trí Tuệ Nhân Tạo (Gemini)']
    },
    {
      id: 4,
      icon: <ShieldCheck size={32} />,
      title: 'Kiểm Thử & Tối Ưu Tốc Độ',
      time: '2 - 3 Ngày',
      desc: 'Mọi dòng code đều được QA (Quality Assurance) đánh giá. Website phải đạt tối đa 100 điểm chuẩn Lighthouse của Google trước khi đem ra đấu trường khốc liệt.',
      points: ['Kiểm thử mọi thiết bị (Mobile/Tablet/PC)', 'Quét lỗ hổng bảo mật', 'Xử lý hình ảnh webp nén dung lượng']
    },
    {
      id: 5,
      icon: <Rocket size={32} />,
      title: 'Bàn Giao & Triển Khai Thực Tế',
      time: 'Xong Trong Ngày',
      desc: 'Khoảnh khắc hệ thống của bạn chính thức ra mắt toàn cầu. Đi kèm quy trình đó là bộ tài liệu chi tiết hướng dẫn quản trị web không cần biết lập trình.',
      points: ['Kết nối Domain / Kích hoạt HTTPS bảo mật', 'Bàn giao Source Code gốc', 'Bảo trì suốt vòng đời sản phẩm']
    }
  ];

  return (
    <div className="container" style={{ paddingTop: 'var(--spacing-xl)', paddingBottom: 'var(--spacing-2xl)' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', marginBottom: 'var(--spacing-2xl)' }} className="animate-fade-in">
         <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(99, 102, 241, 0.1)', color: 'var(--color-brand-primary)', borderRadius: '99px', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '1.5rem', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
            QUY TRÌNH CHUẨN QUỐC TẾ
         </div>
        <h1 className="hero-title" style={{ marginBottom: 'var(--spacing-md)' }}>
          Từ Ý Tưởng Trở Thành <span className="text-gradient">Siêu Phẩm</span>
        </h1>
        <p style={{ color: 'var(--color-text-secondary)', fontSize: '1.15rem', maxWidth: '700px', margin: '0 auto', lineHeight: 1.8 }}>
          Kiến thiết một sản phẩm số thành công đỉnh cao không phải do may mắn mà đó là kết quả của một bộ máy làm việc vận hành có kỷ luật, logic chặt chẽ qua các bộ phận.
        </p>
      </header>

      {/* Vertical Timeline Roadmap */}
      <section style={{ maxWidth: '900px', margin: '0 auto', position: 'relative' }}>
        {/* Đường line chạy xuông dọc giữa */}
        <div className="timeline-line"></div>

        {steps.map((step, index) => {
           const isLeft = index % 2 === 0;

           return (
             <div key={step.id} className={`timeline-row ${isLeft ? 'row-left' : 'row-right'}`}>
                
                {/* Node ở giữa */}
                <div className="timeline-node">
                   {step.icon}
                </div>

                {/* Khối content */}
                <div className="timeline-content glass-panel">
                   <div style={{ color: 'var(--color-brand-primary)', fontWeight: 'bold', letterSpacing: '2px', fontSize: '0.9rem', marginBottom: '0.5rem' }}>
                      BƯỚC 0{step.id} <span style={{ color: 'var(--color-text-secondary)', paddingLeft: '1rem', fontWeight: 'normal', letterSpacing: 'normal' }}>⏱ {step.time}</span>
                   </div>
                   <h3 style={{ fontSize: '1.6rem', marginBottom: '1rem', lineHeight: 1.3 }}>{step.title}</h3>
                   <p style={{ color: 'var(--color-text-secondary)', marginBottom: '1.5rem', lineHeight: 1.7, fontSize: '1.05rem' }}>
                      {step.desc}
                   </p>
                   
                   <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                      {step.points.map((point, i) => (
                         <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--color-text-primary)' }}>
                            <div style={{ width: '6px', height: '6px', backgroundColor: 'var(--color-brand-accent)', borderRadius: '50%' }}></div>
                            {point}
                         </li>
                      ))}
                   </ul>
                </div>

             </div>
           );
        })}
      </section>

      {/* Call to action */}
      <div style={{ textAlign: 'center', marginTop: 'var(--spacing-2xl)' }}>
         <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Bạn Sẵn Sàng Bắt Đầu?</h2>
         <a href="/lien-he" className="btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 3rem' }}>Gặp Chuyên Viên Ngay</a>
      </div>

      {/* Tùy chỉnh CSS Timeline nội bộ của trang */}
      <style dangerouslySetInnerHTML={{__html: `
        .timeline-line {
           position: absolute;
           left: 50%;
           top: 0;
           bottom: 0;
           width: 2px;
           background: linear-gradient(to bottom, transparent, var(--color-brand-primary), var(--color-brand-secondary), transparent);
           transform: translateX(-50%);
        }

        .timeline-row {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 4rem;
           position: relative;
           width: 100%;
        }

        .timeline-content {
           width: 45%; 
           padding: 2rem;
        }

        .timeline-node {
           position: absolute;
           left: 50%;
           top: 50%;
           transform: translate(-50%, -50%);
           width: 65px;
           height: 65px;
           background: var(--color-bg-primary);
           border: 2px solid var(--color-brand-primary);
           border-radius: 50%;
           display: flex;
           align-items: center;
           justify-content: center;
           color: var(--color-brand-primary);
           box-shadow: 0 0 20px rgba(99, 102, 241, 0.5);
           z-index: 10;
        }

        .row-left {
           flex-direction: row;
        }

        .row-right {
           flex-direction: row-reverse;
        }

        /* Responsive Mobile cho Timeline */
        @media (max-width: 768px) {
           .timeline-line {
              left: 30px;
           }
           .timeline-node {
              left: 30px;
              width: 50px;
              height: 50px;
           }
           .timeline-row {
              flex-direction: column !important;
              align-items: flex-end;
              margin-bottom: 2.5rem;
           }
           .timeline-content {
              width: calc(100% - 80px);
              padding: 1.5rem;
           }
        }
      `}} />
    </div>
  );
}
