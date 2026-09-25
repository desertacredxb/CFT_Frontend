// interface Props {
//   onClick: () => void;
//   isOpen: boolean;
// }

// export default function ChatLauncher({ onClick, isOpen }: Props) {
//   return (
//     <button
//       className={`fixed bottom-6 right-6 w-14 h-14 border border-amber-500/30 rounded-full flex items-center justify-center text-2xl cursor-pointer z-[999999] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-110 active:scale-95 ${
//         isOpen
//           ? "bg-amber-500 text-slate-950 rotate-90"
//           : "bg-slate-950 text-amber-400 hover:bg-slate-900"
//       }`}
//       onClick={onClick}
//       aria-label={isOpen ? "Close chat" : "Open chat"}
//     >
//       {isOpen ? "✕" : "💬"}
//     </button>
//   );
// }

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatLauncher({ onClick, isOpen }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Master Trader AI Assistance"}
      className="
        group fixed bottom-6 right-6 z-[999999]
        flex items-center
        transition-all duration-300 ease-out
        hover:scale-105
        cursor-pointer
        bg-transparent border-none p-0
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
        {isOpen ? (
          "Close chat"
        ) : (
          <>
            <span className="text-amber-400">Master Trader</span> AI Assistance
          </>
        )}
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
          shadow-lg shadow-amber-500/20
          transition-all duration-300
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

        {/* Close overlay, shown only when the chat is open */}
        <span
          className={`
            absolute inset-0
            flex items-center justify-center
            text-2xl text-white
            bg-slate-950/70
            backdrop-blur-sm
            transition-opacity duration-200
            ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}
          `}
        >
          ✕
        </span>
      </span>
    </button>
  );
}
