import { useEffect, useRef } from "react";
import { ChatMessage } from "../../types/chatTypes";

interface Props {
  messages: ChatMessage[];
}

export default function ChatMessages({ messages }: Props) {
  // 1. Create a reference for the bottom of the chat view
  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  // 2. Automatically scroll to the ref whenever the messages array changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-900/50 scrollbar-thin scrollbar-thumb-slate-800">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-[85%] px-4 py-2.5 text-sm leading-relaxed shadow-sm ${
              message.role === "user"
                ? "bg-amber-500 text-slate-950 font-medium rounded-2xl rounded-tr-none"
                : "bg-slate-800 text-slate-100 rounded-2xl rounded-tl-none border border-slate-700/50"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
      
      {/* 3. Empty dummy div at the very bottom to anchor our scroll */}
      <div ref={messagesEndRef} />
    </div>
  );
}