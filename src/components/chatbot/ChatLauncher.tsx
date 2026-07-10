interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function ChatLauncher({ onClick, isOpen }: Props) {
  return (
    <button
      className={`fixed bottom-6 right-6 w-14 h-14 border border-amber-500/30 rounded-full flex items-center justify-center text-2xl cursor-pointer z-[999999] shadow-lg shadow-amber-500/20 transition-all duration-300 hover:scale-110 active:scale-95 ${
        isOpen 
          ? "bg-amber-500 text-slate-950 rotate-90" 
          : "bg-slate-950 text-amber-400 hover:bg-slate-900"
      }`}
      onClick={onClick}
      aria-label={isOpen ? "Close chat" : "Open chat"}
    >
      {isOpen ? "✕" : "💬"}
    </button>
  );
}