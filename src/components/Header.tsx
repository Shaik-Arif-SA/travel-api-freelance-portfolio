"use client";

import { Phone, Mail, Menu, X } from "lucide-react";
import { useState } from "react";
// import logoImage from "figma:asset/7767f93cc4d938f8364d64376d4a8bca32c0f3a2.png";

interface HeaderProps {
  onContactClick: () => void;
}

export function Header({ onContactClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        {/* Top Bar */}
        <div className="py-2 border-b border-gray-200 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <a href="tel:+919561672908" className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors">
              <Phone className="w-4 h-4" />
              <span>+91 9561672908</span>
            </a>
            <a href="mailto:info@careercode.com" className="flex items-center gap-2 text-sm hover:text-blue-600 transition-colors">
              <Mail className="w-4 h-4" />
              <span>careercode.edu@gmail.com</span>
            </a>
          </div>
          <a 
            href="https://wa.me/919561672908" 
            target="_blank" 
            rel="noopener noreferrer"
           className="bg-[#18a24c] text-white px-4 py-1 rounded-full text-sm hover:opacity-90 transition"

          >
            WhatsApp: +91 9561672908
          </a>
        </div>

        {/* Main Navigation */}
        <div className="py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            {/* <img 
              src={logoImage} 
              alt="CareerCode Logo" 
              className="h-16 w-auto object-contain"
            /> */}
            <img src="/images/logo.png" alt="CareerCode Logo" 
              className="h-16 w-auto object-contain scale-250"/>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-6 items-center">
            <button onClick={() => scrollToSection('home')} className="hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('programs')} className="hover:text-primary transition-colors">Programs</button>
            <button onClick={() => scrollToSection('counselling')} className="hover:text-primary transition-colors">Counselling</button>
            <button onClick={() => scrollToSection('testimonials')} className="hover:text-primary transition-colors">Testimonials</button>
            <button 
              onClick={onContactClick} 
              className="bg-gradient-to-r from-[#2563eb] to-[#dc2626] text-white px-6 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200 flex flex-col gap-3">
            <button onClick={() => scrollToSection('home')} className="text-left hover:text-primary transition-colors">Home</button>
            <button onClick={() => scrollToSection('programs')} className="text-left hover:text-primary transition-colors">Programs</button>
            <button onClick={() => scrollToSection('counselling')} className="text-left hover:text-primary transition-colors">Counselling</button>
            <button onClick={() => scrollToSection('testimonials')} className="text-left hover:text-primary transition-colors">Testimonials</button>
            <button 
              onClick={() => { onContactClick(); setMobileMenuOpen(false); }} 
              className="text-left bg-gradient-to-r from-primary to-secondary text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Contact Us
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}