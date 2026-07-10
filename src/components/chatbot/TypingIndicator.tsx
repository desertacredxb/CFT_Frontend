export default function TypingIndicator() {
  return (
    <div className="px-4 py-2 text-xs font-medium text-slate-400 flex items-center gap-2 bg-slate-900/50">
      <div className="flex gap-1">
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
        <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
      </div>
      MasterTrader AI is analyzing...
    </div>
  );
}