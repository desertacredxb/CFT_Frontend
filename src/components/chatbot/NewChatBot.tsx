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



export default function ChatBot() {
  return (
    <a
      href="https://v2.mastertrader.co.in/client/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Master Trader AI Assistance"
      className="
        group fixed bottom-6 right-6 z-[999999]
        flex items-center
        transition-all duration-300 ease-out
        hover:scale-105
      "
    >
      {/* Hover Title */}
      <span
        className="
          pointer-events-none
          absolute right-[calc(100%+12px)]
          whitespace-nowrap
          rounded-lg
          bg-slate-900/95
          px-3 py-2
          text-xs sm:text-sm
          font-medium
          text-white
          shadow-xl shadow-black/30
          backdrop-blur-md
          opacity-0
          translate-x-2
          scale-90
          transition-all duration-200
          group-hover:opacity-100
          group-hover:translate-x-0
          group-hover:scale-95
        "
      >
        <span className="text-amber-400">Master Trader</span>{" "}
        AI Assistance
      </span>

      {/* Floating Icon */}
      <span
        className="
          relative
          flex h-16 w-16
          sm:h-[68px] sm:w-[68px]
          items-center justify-center
          overflow-hidden
          rounded-full
          group-hover:shadow-amber-400/30
        "
      >
        <img
          src="/MT-logo.png"
          alt="Master Trader AI"
          className="
            h-full w-full
            object-cover
            transition-transform duration-300
            group-hover:scale-110
          "
        />
      </span>
    </a>
  );
}



