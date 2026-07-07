import { NextRequest, NextResponse } from "next/server";

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

const SYSTEM_PROMPT = `You are the guest assistant for Saravana Pavilion Stay, a hillside homestay in Munnar, Kerala.
You are warm, concise, and knowledgeable. Answer questions about:

- Property: hillside homestay on Attukad Waterfall Rd, Pallivasal, Munnar, Kerala
- The waterfall: a 5-min walk through forest, the main attraction
- Rooms: Waterfall View Room (2 guests), Garden Cottage (3), Premium Suite (4)
- Dining: private chef, home-cooked breakfast & dinner, no commercial restaurant
- Amenities: waterfall view, tea garden surrounds, campfire, luggage assistance, LGBTQ+ friendly
- Location: 7-8 km south of Munnar town, nature trail access
- Contact: +91 99955 87444, WhatsApp same number
- Rating: 4.7 on Google Maps

Keep responses friendly, under 3 sentences. If asked for pricing, say rates vary and to use the booking widget or WhatsApp. If unsure, suggest contacting via WhatsApp.`;

export async function POST(req: NextRequest) {
  const apiKey = process.env.OPENAI_API_KEY;

  if (!apiKey) {
    return NextResponse.json({ fallback: true }, { status: 200 });
  }

  try {
    const { message, history }: { message: string; history?: ChatMessage[] } =
      await req.json();

    const messages: ChatMessage[] = [
      { role: "system", content: SYSTEM_PROMPT },
      ...(history ?? []).slice(-10),
      { role: "user", content: message },
    ];

    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages,
          max_tokens: 300,
          temperature: 0.7,
        }),
      }
    );

    if (!response.ok) {
      const error = await response.text();
      console.error("OpenAI API error:", error); // eslint-disable-line no-console
      return NextResponse.json({ fallback: true }, { status: 200 });
    }

    const data = await response.json();
    const reply = data.choices?.[0]?.message?.content ?? "";

    return NextResponse.json({ reply });
  } catch (err) {
    console.error("Chat error:", err); // eslint-disable-line no-console
    return NextResponse.json({ fallback: true }, { status: 200 });
  }
}
