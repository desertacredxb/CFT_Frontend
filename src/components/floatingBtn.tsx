import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      // href="https://wa.me/+917230941008"
      href="https://whatsapp.com/channel/0029VaMrKNc6rsQvPQFC863Z"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed md:bottom-16 right-6 md:w-14 md:h-14 w-12 h-12 bottom-6 mb-8 bg-green-500 rounded-full flex items-center justify-center shadow-lg z-50"
    >
      <MessageCircle className="text-white" size={21} />
    </a>
  );
}
