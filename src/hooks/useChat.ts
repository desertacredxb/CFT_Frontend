import { useEffect, useState } from "react";
import { streamMessage } from "../services/chatService";
import { ChatMessage } from "../types/chatTypes";

export default function useChat() {
    // Initialize state directly from localStorage so there is zero flash of empty history
    const [messages, setMessages] = useState<ChatMessage[]>(() => {
        const saved = localStorage.getItem("mastertrader_chat");
        return saved ? JSON.parse(saved) : [];
    });

    const [loading, setLoading] = useState(false);

    // CRITICAL: Watch the messages array and save it to storage whenever it changes
    useEffect(() => {
        localStorage.setItem("mastertrader_chat", JSON.stringify(messages));
    }, [messages]);

    async function ask(question: string) {
        const userMessage: ChatMessage = {
            id: Date.now(),
            role: "user",
            text: question,
            createdAt: new Date().toISOString(),
        };

        const updatedMessages = [...messages, userMessage];
        setMessages(updatedMessages);
        setLoading(true);

        const assistantId = Date.now() + 1;

        setMessages((prev) => [
            ...updatedMessages,
            {
                id: assistantId,
                role: "assistant",
                text: "",
                createdAt: new Date().toISOString(),
            },
        ]);

        try {
            const history = updatedMessages.map((msg) => ({
                role: msg.role,
                content: msg.text,
                // Handle edge case if backend expects 'assistant' instead of hook structure
                // role: msg.role === "assistant" ? "assistant" : "user" 
            }));

            await streamMessage(history, (chunk) => {
                setMessages((prev) =>
                    prev.map((msg) =>
                        msg.id === assistantId
                            ? {
                                ...msg,
                                text: msg.text + chunk,
                            }
                            : msg
                    )
                );
            });
        } catch (error) {
            console.error("Failed to stream:", error);
        } finally {
            setLoading(false);
        }
    }

    return {
        messages,
        loading,
        ask
    };
}