"use client";

import { MessageCircle } from "lucide-react";

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/919561672908?text=Hi!%20I%20would%20like%20to%20know%20more%20about%20CareerCode%20services"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-600 text-white rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center animate-bounce"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
