"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import { MessageCircle, X, SendHorizonal, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { site } from "@/lib/site";
import { chatWhatsAppLink } from "@/lib/whatsapp";
import { matchIntent } from "./engine";
import { intents } from "./knowledge";

interface Message {
  role: "user" | "bot";
  text: string;
}

const quickStarts = intents
  .filter((i) => i.quickReply && i.id !== "greeting" && i.id !== "thanks")
  .slice(0, 6);

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      text: `Hey! I'm the ${site.shortName} assistant. Ask me anything about the property, waterfall, rooms, or your stay. Or pick a quick question below. 🌿`,
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open]);

  // Restore from localStorage
  useEffect(() => {
    if (open) {
      try {
        const saved = localStorage.getItem("chat-history");
        if (saved) setMessages(JSON.parse(saved));
      } catch {}
    }
  }, [open]);

  // Save to localStorage
  useEffect(() => {
    try {
      localStorage.setItem("chat-history", JSON.stringify(messages));
    } catch {}
  }, [messages]);

  const addMessage = useCallback((msg: Message) => {
    setMessages((prev) => [...prev, msg]);
  }, []);

  const handleSend = useCallback(
    (text: string) => {
      const trimmed = text.trim();
      if (!trimmed) return;

      addMessage({ role: "user", text: trimmed });
      setInput("");
      setTyping(true);

      setTimeout(() => {
        const { intent } = matchIntent(trimmed);
        let response = intent.response;

        // Append WhatsApp hint for fallback
        if (intent.id === "fallback") {
          const waLink = chatWhatsAppLink(`Question: "${trimmed}"`);
          response += `\n\n<a href="${waLink}" target="_blank" class="inline-flex items-center gap-1 rounded-full bg-moss px-3 py-1 text-xs font-medium text-white hover:bg-moss-dark transition-colors">Message on WhatsApp</a>`;
        }

        addMessage({ role: "bot", text: response });
        setTyping(false);
      }, 600 + Math.random() * 400);
    },
    [addMessage]
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(input);
    }
  };

  const handleWhatsAppHandoff = () => {
    const context = messages
      .filter((m) => m.role === "user")
      .slice(-3)
      .map((m) => `User: ${m.text}`)
      .join("\n");
    window.open(chatWhatsAppLink(context), "_blank");
  };

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-xl transition-all duration-300",
          open
            ? "bg-forest-700 text-cream-paper"
            : "bg-moss text-cream-paper hover:bg-moss-dark"
        )}
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>

      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-6 z-50 flex w-[380px] max-w-[calc(100vw-2rem)] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-ink/5 animate-fade-up">
          {/* Header */}
          <div className="flex items-center justify-between bg-forest-700 px-5 py-4 text-cream-paper">
            <div>
              <h3 className="text-sm font-semibold">{site.shortName}</h3>
              <p className="text-xs text-cream-paper/70">Online &middot; Replies instantly</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 transition-colors hover:bg-white/10"
              aria-label="Close chat"
            >
              <ChevronDown size={18} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex h-[420px] flex-col gap-3 overflow-y-auto px-4 py-4">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "max-w-[85%] whitespace-pre-wrap text-sm leading-relaxed",
                  msg.role === "user"
                    ? "ml-auto"
                    : "mr-auto"
                )}
              >
                <div
                  className={cn(
                    "rounded-2xl px-4 py-3",
                    msg.role === "user"
                      ? "bg-forest-600 text-white"
                      : "bg-ink/5 text-ink"
                  )}
                  dangerouslySetInnerHTML={{
                    __html: msg.text.replace(/\n/g, "<br/>"),
                  }}
                />
              </div>
            ))}

            {typing && (
              <div className="mr-auto max-w-[60%]">
                <div className="flex items-center gap-1.5 rounded-2xl bg-ink/5 px-4 py-3">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-ink/30" style={{ animationDelay: "0ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-ink/30" style={{ animationDelay: "150ms" }} />
                  <span className="h-2 w-2 animate-bounce rounded-full bg-ink/30" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Quick replies (shown only at start) */}
          {messages.length <= 1 && (
            <div className="flex flex-wrap gap-2 border-t border-ink/5 px-4 py-3">
              {quickStarts.map((intent) => (
                <button
                  key={intent.id}
                  onClick={() => handleSend(intent.patterns[0])}
                  className="rounded-full border border-ink/10 bg-cream-paper px-3 py-1.5 text-xs font-medium text-ink/70 transition-colors hover:border-forest-500 hover:text-forest-600"
                >
                  {intent.patterns[0]}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <div className="flex items-center gap-2 border-t border-ink/5 px-4 py-3">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your question..."
              className="flex-1 rounded-xl bg-ink/5 px-4 py-2.5 text-sm outline-none transition-colors focus:bg-ink/[7%]"
            />
            <button
              onClick={() => handleSend(input)}
              disabled={!input.trim()}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-forest-600 text-white transition-colors hover:bg-forest-500 disabled:opacity-40"
              aria-label="Send message"
            >
              <SendHorizonal size={16} />
            </button>
          </div>

          {/* WhatsApp handoff */}
          <button
            onClick={handleWhatsAppHandoff}
            className="flex items-center justify-center gap-2 bg-moss/10 px-4 py-2.5 text-xs font-medium text-moss-dark transition-colors hover:bg-moss/20"
          >
            <MessageCircle size={14} />
            Talk to a human on WhatsApp
          </button>
        </div>
      )}
    </>
  );
}
