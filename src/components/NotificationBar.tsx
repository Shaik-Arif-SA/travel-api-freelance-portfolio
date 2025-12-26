"use client";

import { X, Sparkles } from "lucide-react";
import { useState } from "react";

export function NotificationBar() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsVisible(false);
  };

  return (
    <div className="bg-gradient-to-r from-[#2563eb] via-[#dc2626] to-[#10b981]  text-white py-3 px-4 relative z-40" >
      <div className=" container mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-2 flex-1">
          <Sparkles className="w-5 h-5 flex-shrink-0 animate-pulse" />
          <p className="text-sm md:text-base">
            <span className="font-semibold">Limited Time Offer:</span> Book a free career assessment this month and get 10% off on your first program!
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button 
            onClick={scrollToContact}
            className="bg-white text-primary px-4 py-1 md:px-6 md:py-2 rounded-full hover:bg-gray-100 transition-colors text-sm md:text-base font-semibold whitespace-nowrap"
          >
            Claim Offer
          </button>
          <button 
            onClick={() => setIsVisible(false)}
            className="hover:bg-white/20 p-1 rounded transition-colors"
            aria-label="Close notification"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
