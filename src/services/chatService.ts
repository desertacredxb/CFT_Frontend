import axios from "axios";
import { OpenAIMessage } from "../types/chatTypes";

const API = "http://localhost:8000/api/chat";

export async function sendMessage(messages: OpenAIMessage[]) {
  const { data } = await axios.post(API, {
    messages,
  });

  return data.response;
}

export async function streamMessage(
  messages: OpenAIMessage[],
  onChunk: (chunk: string) => void
) {
  const response = await fetch(`${API}/stream`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      messages,
    }),
  });

  if (!response.ok) {
    throw new Error("Streaming request failed");
  }

  if (!response.body) {
    throw new Error("ReadableStream not supported");
  }

  const reader = response.body.getReader();

  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    const chunk = decoder.decode(value);

    onChunk(chunk);
  }
}