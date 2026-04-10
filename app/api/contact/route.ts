import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { supabase } from '@/lib/supabase';

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy1234567890');

export async function POST(req: Request) {
  try {
    const { name, email, phone, packageType, message } = await req.json();

    // 1. Lưu vào Database (Supabase)
    const { error: dbError } = await supabase
      .from('contacts')
      .insert([
        { 
          name, 
          email: email || 'Không Có', 
          phone, 
          package: packageType,
          message: message || ''
        }
      ]);

    if (dbError) {
      console.error('Supabase Error:', dbError);
    }

    // 2. Gửi Email thông báo (Resend)
    const data = await resend.emails.send({
      from: 'WebCrafter <onboarding@resend.dev>', // Dùng domain đã verify thực tế
      to: [email !== 'Không Nhập' ? email : 'admin@webcrafter.com', 'admin@webcrafter.com'],
      subject: `[WebCrafter] Data Khách Hàng Gọi Thiết Kế Web: ${name}`,
      html: `
        <h2>Khách hàng yêu cầu tư vấn</h2>
        <p><strong>Tên:</strong> ${name}</p>
        <p><strong>SĐT:</strong> ${phone}</p>
        <p><strong>Gói / Ghi chú:</strong> ${packageType}</p>
        <p><strong>Nội Dung Bổ Sung:</strong> ${message || 'Không có'}</p>
        <hr/>
        <p>Hệ thống tự động thông báo từ WebCrafter.</p>
      `,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json({ error: 'Internet lỗi' }, { status: 500 });
  }
}

