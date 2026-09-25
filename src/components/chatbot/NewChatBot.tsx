// import { useState } from "react";
// import useChat from "../../hooks/useChat";
// import ChatLauncher from "./ChatLauncher";
// import ChatHeader from "./ChatHeader";
// import ChatInput from "./ChatInput";
// import TypingIndicator from "./TypingIndicator";
// import ChatMessages from "./ChatMessage";

// export default function ChatBot() {
//   const [open, setOpen] = useState(false);
//   const { messages, loading, ask } = useChat();

//   return (
//     <>
//       <ChatLauncher onClick={() => setOpen(!open)} isOpen={open} />
//       <div className={`fixed bottom-28 right-6 w-[380px] h-[580px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden z-[999999] flex flex-col shadow-2xl shadow-amber-500/10 transition-all duration-200 ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
//         }`}>
//         <ChatHeader onClose={() => setOpen(false)} />
//         <ChatMessages messages={messages} />
//         {loading && <TypingIndicator />}
//         <ChatInput loading={loading} onSend={ask} />
//       </div>
//     </>
//   );
// }

// // export default function ChatBot() {
// //   return (
// //     <a
// //       href="https://v2.mastertrader.co.in/client/"
// //       target="_blank"
// //       rel="noopener noreferrer"
// //       aria-label="Master Trader AI Assistance"
// //       className="
// //         group fixed bottom-6 right-6 z-[999999]
// //         flex items-center
// //         transition-all duration-300 ease-out
// //         hover:scale-105
// //       "
// //     >
// //       {/* Hover Title */}
// //       <span
// //         className="
// //           pointer-events-none
// //           absolute right-[calc(100%+12px)]
// //           whitespace-nowrap
// //           rounded-lg
// //           bg-slate-900/95
// //           px-3 py-2
// //           text-xs sm:text-sm
// //           font-medium
// //           text-white
// //           shadow-xl shadow-black/30
// //           backdrop-blur-md
// //           opacity-0
// //           translate-x-2
// //           scale-90
// //           transition-all duration-200
// //           group-hover:opacity-100
// //           group-hover:translate-x-0
// //           group-hover:scale-95
// //         "
// //       >
// //         <span className="text-amber-400">Master Trader</span>{" "}
// //         AI Assistance
// //       </span>

// //       {/* Floating Icon */}
// //       <span
// //         className="
// //           relative
// //           flex h-16 w-16
// //           sm:h-[68px] sm:w-[68px]
// //           items-center justify-center
// //           overflow-hidden
// //           rounded-full
// //           group-hover:shadow-amber-400/30
// //         "
// //       >
// //         <img
// //           src="/MT-logo.png"
// //           alt="Master Trader AI"
// //           className="
// //             h-full w-full
// //             object-cover
// //             transition-transform duration-300
// //             group-hover:scale-110
// //           "
// //         />
// //       </span>
// //     </a>
// //   );
// // }

// New setup
import { useState, useRef, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import useChat from "../../hooks/useChat";
import ChatLauncher from "./ChatLauncher";
import "./Chatbot.css";

const CHIP_PROMPTS = [
  {
    label: "Last Trade",
    icon: "💡",
    prompt: "Show me details about my last trade.",
  },
  {
    label: "Balance & Positions",
    icon: "💰",
    prompt: "What is my current balance and open positions?",
  },
  {
    label: "Deposit & Payout",
    icon: "💳",
    prompt: "How do I deposit funds or request a payout?",
  },
  {
    label: "NSE & MCX Rules",
    icon: "📊",
    prompt: "Explain key NSE and MCX trading rules.",
  },
  {
    label: "What is P/E Ratio?",
    icon: "📑",
    prompt: "What is a P/E Ratio and how is it used?",
  },
  {
    label: "Forex & COMEX Info",
    icon: "🌐",
    prompt: "Does MasterTrader offer Forex and COMEX trading?",
  },
  {
    label: "Human Support",
    icon: "🗣️",
    prompt: "I want to speak with a human support agent.",
  },
];

function ChatLinkRenderer({
  href,
  children,
}: {
  href?: string;
  children?: React.ReactNode;
}) {
  const isWhatsApp = href?.includes("wa.me");

  if (isWhatsApp) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-whatsapp-btn"
      >
        <svg
          className="whatsapp-icon"
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.29-1.39a9.9 9.9 0 0 0 4.75 1.21h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm5.8 14.17c-.24.68-1.4 1.3-1.94 1.38-.5.08-1.12.11-1.8-.11-.42-.13-.96-.31-1.65-.6-2.9-1.25-4.8-4.17-4.94-4.36-.14-.19-1.18-1.57-1.18-3 0-1.42.75-2.12 1.02-2.41.26-.28.57-.36.76-.36h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.47-.14.17-.29.37-.42.5-.14.14-.28.29-.12.56.16.28.72 1.19 1.55 1.93 1.06.95 1.96 1.24 2.24 1.38.28.14.44.12.6-.07.16-.19.7-.82.89-1.1.19-.28.37-.23.63-.14.26.09 1.65.78 1.94.93.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
        </svg>
        <span>{children}</span>
      </a>
    );
  }

  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [pendingFiles, setPendingFiles] = useState<File[]>([]);
  const { messages, loading, ask } = useChat();
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleAttachClick = () => fileInputRef.current?.click();

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setPendingFiles((prev) => [...prev, ...files]);
    e.target.value = ""; // allow re-selecting the same file later
  };

  const removeFile = (idx: number) => {
    setPendingFiles((prev) => prev.filter((_, i) => i !== idx));
  };

  const handleSend = () => {
    if ((!input.trim() && pendingFiles.length === 0) || loading) return;
    ask(input, pendingFiles);
    setInput("");
    setPendingFiles([]);
  };

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSend();
    }
  };

  const formatTime = (isoString?: string) => {
    if (!isoString) return "Just now";
    return new Date(isoString).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <>
      {/* <ChatLauncher onClick={() => setOpen(!open)} isOpen={open} /> */}
      {!open && <ChatLauncher onClick={() => setOpen(true)} isOpen={open} />}

      <div className={`mt-chatbot-overlay ${open ? "active" : "inactive"}`}>
        <div className="mt-chat-page">
          {/* Header */}
          <header className="mt-chat-header">
            <button className="mt-back-btn" onClick={() => setOpen(false)}>
              <span className="chevron">&lt;</span>
              <span className="back-text">Go Back</span>
            </button>

            <div className="mt-badge-container">
              <span className="mt-logo-text">MasterTrader AI</span>
              <span className="mt-live-tag">AI Live</span>
            </div>
          </header>

          {/* Quick Action Chips Bar */}
          <div className="mt-chips-bar">
            <div className="mt-chips-scroll">
              {CHIP_PROMPTS.map((chip, idx) => (
                <button
                  key={idx}
                  className="mt-chip-btn"
                  onClick={() => !loading && ask(chip.prompt)}
                  disabled={loading}
                >
                  <span className="chip-icon">{chip.icon}</span>
                  <span className="chip-label">{chip.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Messages Feed */}
          <main className="mt-messages-container">
            <div className="mt-messages-content">
              {messages.length === 0 ? (
                <div className="mt-welcome-card">
                  <div className="mt-card-header">
                    <span className="assistant-name">MasterTrader AI</span>
                    <span className="timestamp-pill">{formatTime()}</span>
                  </div>
                  <div className="mt-card-body">
                    Hello! Welcome to MasterTrader AI. How can I help you today?
                  </div>
                </div>
              ) : (
                messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`mt-message-wrapper ${
                      msg.role === "user" ? "user-wrapper" : "assistant-wrapper"
                    }`}
                  >
                    <div className="mt-message-bubble">
                      <div className="mt-card-header">
                        <span
                          className={
                            msg.role === "assistant"
                              ? "assistant-name"
                              : "user-name"
                          }
                        >
                          {msg.role === "assistant" ? "MasterTrader AI" : "You"}
                        </span>
                        <span className="timestamp-pill">
                          {formatTime(msg.createdAt)}
                        </span>
                      </div>
                      <div className="mt-message-text">
                        {/* {msg.role === "assistant" ? (
                          <ReactMarkdown>{msg.text}</ReactMarkdown>
                        ) : (
                          msg.text
                        )} */}

                        {msg.role === "assistant" ? (
                          <ReactMarkdown components={{ a: ChatLinkRenderer }}>
                            {msg.text}
                          </ReactMarkdown>
                        ) : (
                          msg.text
                        )}
                      </div>
                      {msg.attachments && msg.attachments.length > 0 && (
                        <div className="mt-attachment-grid">
                          {msg.attachments.map((att, i) =>
                            att.previewUrl ? (
                              <img
                                key={i}
                                src={att.previewUrl}
                                alt={att.name}
                                className="mt-attachment-thumb"
                              />
                            ) : (
                              <div key={i} className="mt-attachment-file-chip">
                                📄 <span>{att.name}</span>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </div>
                  </div>
                ))
              )}

              {/* Gemini Thinking / Processing Bar */}
              {loading && (
                <div className="mt-message-wrapper assistant-wrapper">
                  <div className="mt-message-bubble loading-bubble">
                    <div className="mt-thinking-box">
                      <span className="thinking-sparkle">✨</span>
                      <span className="thinking-text">Thinking...</span>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </main>

          {/* Input Dock */}

          <footer className="mt-input-dock">
            <div className="mt-input-shell">
              {pendingFiles.length > 0 && (
                <div className="mt-pending-files">
                  {pendingFiles.map((file, idx) => (
                    <div key={idx} className="mt-pending-file-chip">
                      {file.type.startsWith("image/") ? (
                        <img
                          src={URL.createObjectURL(file)}
                          alt={file.name}
                          className="mt-pending-thumb"
                        />
                      ) : (
                        <span className="mt-pending-file-icon">📄</span>
                      )}
                      <span className="mt-pending-file-name">{file.name}</span>
                      <button
                        type="button"
                        className="mt-pending-remove"
                        onClick={() => removeFile(idx)}
                        aria-label={`Remove ${file.name}`}
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-input-center-box">
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  multiple
                  accept="image/*,.pdf"
                  style={{ display: "none" }}
                />
                <button
                  className="mt-attachment-btn"
                  title="Attach file"
                  onClick={handleAttachClick}
                  type="button"
                >
                  📎
                </button>

                <div className="mt-input-wrapper">
                  <input
                    type="text"
                    placeholder="Ask about stock market, your trades, or share prices..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <button
                  className="mt-send-btn"
                  onClick={handleSend}
                  disabled={
                    loading || (!input.trim() && pendingFiles.length === 0)
                  }
                  aria-label="Send query"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                </button>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
