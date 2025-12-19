"use client";

import { Menu, X, Sparkles, ArrowRight } from "lucide-react";
import { useState } from "react";

export const Hero: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "introduction", label: "About" },
    { id: "programs", label: "Programs" },
    { id: "mentors", label: "Mentors" },
    { id: "courses", label: "Courses" },
    { id: "contact", label: "Contact" },
    { id: "testimonials", label: "Testimonials" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg shadow-lg">
      {/* ================= NAVBAR ================= */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div
            onClick={() => scrollToSection("introduction")}
            className="flex items-center gap-3 cursor-pointer"
          >
           <img
              src="/images/logo.png"
              alt="CareerCode Logo"
              className="h-20 w-20 rounded-full object-cover scale-250"
            />

            <span className="font-bold text-2xl bg-gradient-to-r from-amber-600 to-amber-800 bg-clip-text text-transparent ml-10">
              CareerCode
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="relative text-gray-700 hover:text-amber-600 transition-all group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-600 group-hover:w-full transition-all duration-300" />
              </button>
            ))}

            <a
              href="https://forms.gle/NNjivqxNcFioFxYd8"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-6 py-2.5 rounded-full shadow-lg hover:scale-105 transition-all flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-3">
            {navItems.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-left px-3 py-2 rounded-lg hover:bg-amber-50 text-gray-700"
              >
                {label}
              </button>
            ))}

            <a
              href="https://forms.gle/NNjivqxNcFioFxYd8"
              target="_blank"
              className="bg-amber-600 text-white py-2 rounded-lg text-center"
            >
              Get Started
            </a>
          </div>
        )}
      </nav>

      {/* ================= HERO CONTENT ================= */}
      {heroVisible && (
        <section className="container mx-auto px-4 py-16 relative">
          <button
            onClick={() => setHeroVisible(false)}
            className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="max-w-5xl mx-auto text-center bg-gradient-to-br from-white via-amber-50 to-orange-50 rounded-3xl p-10 md:p-16 shadow-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-amber-800 bg-clip-text text-transparent">
              Your Future Starts Here
            </h1>

            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Empowering students with{" "}
              <span className="text-amber-600 font-semibold">
                science-backed career guidance
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/NNjivqxNcFioFxYd8"
                target="_blank"
                className="bg-gradient-to-r from-amber-600 to-amber-700 text-white px-8 py-4 rounded-full flex items-center justify-center gap-3"
              >
                <Sparkles className="w-5 h-5" />
                Book Free Consultation
                <ArrowRight className="w-5 h-5" />
              </a>

              <button
                onClick={() => scrollToSection("programs")}
                className="px-8 py-4 rounded-full border-2 border-amber-600 text-amber-700 hover:bg-amber-50 transition-all"
              >
                Explore Programs
              </button>
            </div>
          </div>
        </section>
      )}
    </header>
  );
};
