import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateProductDescription = async (productName: string, category: string): Promise<string> => {
  if (!apiKey) return "AI service unavailable (Missing API Key).";
  
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a compelling, short marketing description (max 50 words) for a product named "${productName}" in the category "${category}". Emphasize quality and value for a Syrian customer base.`,
    });
    return response.text || "No description generated.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Could not generate description at this time.";
  }
};

export const getAIChatResponse = async (message: string, history: {role: string, parts: {text: string}[]}[]): Promise<string> => {
  if (!apiKey) return "I'm sorry, I cannot connect to the server right now.";

  try {
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: `You are 'Layla', the intelligent virtual assistant for Syria Mall. 
        Your goal is to help customers find products, understand delivery policies (24/7 delivery available), and navigate the app.
        Be polite, professional, and concise. 
        The mall offers Cash on Delivery and supports local businesses.
        If asked about specific product prices that you don't know, suggest they check the specific store page.
        Keep answers under 80 words.`,
      },
      history: history
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I didn't catch that.";
  } catch (error) {
    console.error("Chat Error:", error);
    return "I'm having trouble processing your request.";
  }
};
