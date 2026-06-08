import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/+917230941008"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-5 right-4 md:mb-5 md:w-14 md:h-14 w-12 h-12 bottom-0 mb-5 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
    >
      <MessageCircle className="text-white" size={21} />
    </a>
  );
}
