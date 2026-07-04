import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Minimize2 } from "lucide-react";

// ============================================================
// CHATBOT COMPONENT
// TODO: Replace the mock response function with a real API call
// to your FastAPI backend which runs the RAG pipeline.
//
// Replace `getMockResponse()` with:
//   const res = await fetch('/api/chat', {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify({ message: input, history: messages })
//   });
//   const data = await res.json();
//   return data.response;
// ============================================================

const SUGGESTED_QUESTIONS = [
  "How big do ragdolls get?",
  "Are ragdolls good with kids?",
  "What colors are available?",
  "How does the waitlist work?",
];

const WELCOME_MESSAGE = {
  id: 0,
  role: "assistant",
  text: "Hi there! 🐾 I'm Bella, your ragdoll guide. I know everything about ragdoll cats and can tell you all about our kittens, queens, pricing, and more. What would you like to know?",
};

// ----- Mock response (replace with real API call) -----
async function getMockResponse(userMessage) {
  await new Promise((r) => setTimeout(r, 1200));
  const msg = userMessage.toLowerCase();
  if (msg.includes("big") || msg.includes("size") || msg.includes("weight"))
    return "Ragdolls are one of the largest domestic cat breeds! Males typically weigh 15–20 lbs and females 10–15 lbs. They take about 4 years to fully mature. Despite their size, they're incredibly gentle. 🐱";
  if (msg.includes("kid") || msg.includes("child") || msg.includes("children"))
    return "Ragdolls are one of the best breeds for families with children! They're famously tolerant, rarely scratch, and tend to enjoy being carried around. They're gentle enough even for young kids.";
  if (msg.includes("color") || msg.includes("pattern"))
    return "We typically have seal, blue, chocolate, and lilac kittens in bicolor, colorpoint, and mitted patterns. Our current litter includes blue bicolor, seal colorpoint, and blue mitted! Each one is stunning. ✨";
  if (msg.includes("waitlist") || msg.includes("deposit"))
    return "To join our waitlist, you pay a $300 non-refundable deposit. When a litter is born, waitlist families choose kittens in deposit order. The deposit applies toward your kitten's price. Head to our Waitlist page to get started! 🐾";
  if (msg.includes("price") || msg.includes("cost") || msg.includes("how much"))
    return "Our pet kittens are $1,800–$1,900 depending on gender and pattern. This includes TICA registration, first vaccinations, deworming, microchip, a health certificate, and a full take-home package.";
  if (msg.includes("health") || msg.includes("hcm") || msg.includes("test"))
    return "Health is our top priority! Both Luna and Nova are tested clear for HCM (hypertrophic cardiomyopathy) and PKD (polycystic kidney disease) — the most important genetic conditions in ragdolls. 💙";
  return "Great question! I'd love to help you learn more about our ragdolls. You can also reach us directly at hello@bluemistragdolls.com or browse our FAQ page for detailed answers. 🐾";
}
// ------------------------------------------------------

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [messages, setMessages] = useState([WELCOME_MESSAGE]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open && !minimized) {
      bottomRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [messages, open, minimized]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;
    setInput("");

    const userMsg = { id: Date.now(), role: "user", text: userText };
    setMessages((prev) => [...prev, userMsg]);
    setLoading(true);

    const reply = await getMockResponse(userText);
    setMessages((prev) => [...prev, { id: Date.now() + 1, role: "assistant", text: reply }]);
    setLoading(false);
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <>
      {/* FAB */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-dust-500 hover:bg-dust-600 rounded-full flex items-center justify-center shadow-lg transition-all duration-200 active:scale-95 group"
          aria-label="Open chat"
        >
          <span className="text-2xl group-hover:scale-110 transition-transform">🐾</span>
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div
          className={`fixed bottom-6 right-6 z-50 w-80 bg-white rounded-2xl border border-dust-100 shadow-2xl flex flex-col transition-all duration-300 ${
            minimized ? "h-14" : "h-[480px]"
          }`}
        >
          {/* Header */}
          <div className="bg-dust-500 rounded-t-2xl px-4 py-3 flex items-center gap-3 flex-shrink-0">
            <div className="w-9 h-9 bg-white/20 rounded-full flex items-center justify-center text-lg">🐱</div>
            <div className="flex-1">
              <p className="text-sm font-medium text-white font-sans">Ask Bella</p>
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block"></span>
                <span className="text-xs text-dust-100">Ragdoll expert · always here</span>
              </div>
            </div>
            <button onClick={() => setMinimized(!minimized)} className="text-white/70 hover:text-white p-1" aria-label="Minimize">
              <Minimize2 size={15} />
            </button>
            <button onClick={() => setOpen(false)} className="text-white/70 hover:text-white p-1" aria-label="Close">
              <X size={15} />
            </button>
          </div>

          {!minimized && (
            <>
              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-3 py-3 flex flex-col gap-2">
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed font-sans ${
                        m.role === "user"
                          ? "bg-dust-500 text-white rounded-br-sm"
                          : "bg-dust-50 text-dust-800 rounded-bl-sm"
                      }`}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}

                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-dust-50 rounded-2xl rounded-bl-sm px-3 py-3 flex items-center gap-1">
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-dust-400 inline-block"></span>
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-dust-400 inline-block"></span>
                      <span className="typing-dot w-1.5 h-1.5 rounded-full bg-dust-400 inline-block"></span>
                    </div>
                  </div>
                )}

                {/* Suggested questions (only at start) */}
                {messages.length === 1 && !loading && (
                  <div className="mt-2 flex flex-col gap-1.5">
                    <p className="text-xs text-dust-400 font-sans px-1">Try asking:</p>
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => sendMessage(q)}
                        className="text-left text-xs px-3 py-2 rounded-xl border border-dust-200 text-dust-600 hover:border-dust-400 hover:bg-dust-50 transition-colors font-sans"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={bottomRef} />
              </div>

              {/* Input */}
              <div className="border-t border-dust-100 p-3 flex items-center gap-2 flex-shrink-0">
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKey}
                  placeholder="Ask about ragdolls..."
                  className="flex-1 bg-dust-50 border border-dust-200 rounded-xl px-3 py-2 text-sm text-dust-800 placeholder-dust-400 focus:outline-none focus:border-dust-400 font-sans"
                />
                <button
                  onClick={() => sendMessage()}
                  disabled={!input.trim() || loading}
                  className="w-9 h-9 bg-dust-500 hover:bg-dust-600 disabled:opacity-40 rounded-xl flex items-center justify-center transition-colors active:scale-95"
                  aria-label="Send"
                >
                  <Send size={15} className="text-white" />
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
