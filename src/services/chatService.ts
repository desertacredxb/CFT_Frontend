// import axios from "axios";
// import { OpenAIMessage } from "../types/chatTypes";

// const API = `${import.meta.env.VITE_API_BASE_URL}/api/chat`;

// export async function sendMessage(messages: OpenAIMessage[]) {
//   const { data } = await axios.post(API, {
//     messages,
//   });

//   return data.response;
// }

// export async function streamMessage(
//   messages: OpenAIMessage[],
//   onChunk: (chunk: string) => void
// ) {
//   const response = await fetch(`${API}/stream`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       messages,
//     }),
//   });

//   if (!response.ok) {
//     throw new Error("Streaming request failed");
//   }

//   if (!response.body) {
//     throw new Error("ReadableStream not supported");
//   }

//   const reader = response.body.getReader();

//   const decoder = new TextDecoder();

//   while (true) {
//     const { done, value } = await reader.read();

//     if (done) break;

//     const chunk = decoder.decode(value);

//     onChunk(chunk);
//   }
// }

// Gemini Setup
import axios from "axios";

const API = `${import.meta.env.VITE_API_BASE_URL}/api/chat`;

export interface Attachment {
  name: string;
  type: string;
  previewUrl?: string; // local object URL, only for images, only client-side
}

export interface ChatMessage {
  id: number;
  role: "user" | "assistant";
  text: string;
  createdAt: string;
  attachments?: Attachment[];
}

export async function sendMessage(
  messages: { role: string; text: string }[],
  files: File[] = [],
) {
  if (files.length === 0) {
    const { data } = await axios.post(`${API}/query`, { messages });
    return data;
  }

  const formData = new FormData();
  formData.append("messages", JSON.stringify(messages));
  files.forEach((file) => formData.append("files", file));

  const { data } = await axios.post(`${API}/query`, formData);
  // Note: don't set Content-Type manually — the browser sets the correct
  // multipart boundary automatically when the body is FormData.
  return data;
}
