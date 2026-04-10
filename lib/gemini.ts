import { GoogleGenAI } from '@google/genai';

const aiKey = process.env.GEMINI_API_KEY!;
export const ai = new GoogleGenAI({ apiKey: aiKey || 'dummy_api_key' });
