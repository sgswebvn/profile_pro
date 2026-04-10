import { NextResponse } from 'next/server';
import { ai } from '@/lib/gemini';

export async function POST(req: Request) {
  try {
    const { messages } = await req.json();
    const prompt = messages[messages.length - 1].content;
    
    // Sử dụng context để AI trả lời
    const systemPrompt = `
      Bạn là AI tư vấn viên của dịch vụ thiết kế website WebCrafter. 
      Nhiệm vụ: Tư vấn cho khách hàng về 3 gói web (Cơ bản: 2.5tr, Trung cấp: 5.5tr, Nâng cao: liên hệ).
      Câu hỏi khách hàng: ${prompt}
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: systemPrompt,
    });
    
    return NextResponse.json({ reply: response.text });
  } catch (error) {
    console.error('Chat error:', error);
    return NextResponse.json({ error: 'Failed to process AI response' }, { status: 500 });
  }
}
