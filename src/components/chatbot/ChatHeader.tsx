interface Props {
  onClose: () => void;
}

export default function ChatHeader({ onClose }: Props) {
  return (
    <div className="bg-slate-950 border-b border-slate-800 px-5 py-4 flex justify-between items-center">
      <div>
        <h3 className="font-bold text-white text-base tracking-wide">MasterTrader AI</h3>
        <div className="flex items-center gap-1.5 mt-0.5">
          <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
          <span className="text-xs font-medium text-emerald-400/90 tracking-wide">Always Active</span>
        </div>
      </div>
      <button 
        onClick={onClose}
        className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-900 transition-colors cursor-pointer"
      >
        ✕
      </button>
    </div>
  );
}