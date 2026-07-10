import { useState } from "react";
import useChat from "../../hooks/useChat";
import ChatLauncher from "./ChatLauncher";
import ChatHeader from "./ChatHeader";
import ChatInput from "./ChatInput";
import TypingIndicator from "./TypingIndicator";
import ChatMessages from "./ChatMessage";

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const { messages, loading, ask } = useChat();

  return (
    <>
      <ChatLauncher onClick={() => setOpen(!open)} isOpen={open} />
      <div className={`fixed bottom-28 right-6 w-[380px] h-[580px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)] bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden z-[999999] flex flex-col shadow-2xl shadow-amber-500/10 transition-all duration-200 ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"
        }`}>
        <ChatHeader onClose={() => setOpen(false)} />
        <ChatMessages messages={messages} />
        {loading && <TypingIndicator />}
        <ChatInput loading={loading} onSend={ask} />
      </div>
    </>
  );
}