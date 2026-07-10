import { useState } from "react";

interface Props {
  onSend: (text: string) => void;
  loading: boolean;
}

export default function ChatInput({ onSend, loading }: Props) {
  const [text, setText] = useState("");

  function submit() {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  }

  return (
    <div className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2 items-center">
      <input
        value={text}
        placeholder="Ask about markets, leverage, or taxes..."
        className="flex-1 bg-slate-900 text-slate-100 text-sm placeholder-slate-500 px-4 py-2.5 rounded-xl border border-slate-800 focus:outline-none focus:border-amber-500/50 transition-colors"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            submit();
          }
        }}
      />
      <button
        disabled={loading || !text.trim()}
        onClick={submit}
        className="bg-amber-500 hover:bg-amber-400 disabled:bg-slate-800 text-slate-950 disabled:text-slate-600 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
      >
        Send
      </button>
    </div>
  );
}