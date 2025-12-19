'use client';

import { Phone, X } from "lucide-react";
import { useState } from "react";

function CallbackButton() {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom duration-500">
      <div className="relative">
        {/* Close button */}
        <button
          onClick={() => setIsVisible(false)}
          className="absolute -top-2 -right-2 w-6 h-6 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-gray-900 transition-all shadow-lg z-10 group"
          aria-label="Close callback button"
        >
          <X className="w-3 h-3 group-hover:rotate-90 transition-transform duration-300" />
        </button>

        {/* Main button */}
        <a
          href="https://forms.gle/NNjivqxNcFioFxYd8"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-3 bg-gradient-to-r from-amber-600 to-orange-600 text-white px-6 py-4 rounded-full shadow-2xl hover:from-amber-700 hover:to-orange-700 transition-all duration-300 hover:scale-105 group relative overflow-hidden"
        >
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />

          {/* Pulse ring */}
          <div className="absolute inset-0 rounded-full bg-amber-600 animate-ping opacity-20" />

          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-12 transition-transform duration-300 relative z-10">
            <Phone className="w-5 h-5" />
          </div>

          <span className="hidden md:inline relative z-10">
            Request a Callback
          </span>
          <span className="md:hidden relative z-10">
            Callback
          </span>
        </a>
      </div>
    </div>
  );
}

export default CallbackButton;
