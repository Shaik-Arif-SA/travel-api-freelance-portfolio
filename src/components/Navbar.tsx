"use client";

import { motion, useScroll, useTransform } from "motion/react";
import {
  Menu,
  X,
  Home,
  GraduationCap,
  Briefcase,
  Code,
  Mail,
} from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Education", href: "#education", icon: GraduationCap },
  { name: "Projects", href: "#projects", icon: Code },
  { name: "Internships", href: "#internships", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [scrollRange, setScrollRange] = useState(1);

  const { scrollY } = useScroll();

  /* Navbar background */
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(0,0,0,0)", "rgba(0,0,0,0.85)"]
  );

  const borderOpacity = useTransform(scrollY, [0, 100], [0, 0.2]);

  /* Scroll progress bar */
  const scaleX = useTransform(scrollY, [0, scrollRange], [0, 1]);

  /* Measure document height safely */
  useEffect(() => {
    const calculateScrollRange = () => {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setScrollRange(height > 0 ? height : 1);
    };

    calculateScrollRange();
    window.addEventListener("resize", calculateScrollRange);

    return () => window.removeEventListener("resize", calculateScrollRange);
  }, []);

  /* Active section tracking */
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const item of navItems) {
        const id = item.href.replace("#", "");
        const el = document.getElementById(id);

        if (!el) continue;

        const { offsetTop, offsetHeight } = el;

        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        style={{
          backgroundColor,
          borderColor: useTransform(
            borderOpacity,
            (o) => `rgba(255,255,255,${o})`
          ),
        }}
        className="fixed top-0 z-50 w-full backdrop-blur-xl border-b"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <motion.a
              href="#home"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="font-black text-2xl"
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                SHAIK ARIF
              </span>
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {navItems.map((item, i) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);

                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="relative"
                  >
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-xl transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-400 hover:text-white hover:bg-white/5"
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                      {item.name}
                    </div>

                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"
                      />
                    )}
                  </motion.a>
                );
              })}
            </div>

            {/* Mobile Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl bg-white/10 text-white"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="lg:hidden border-t border-white/10"
          >
            <div className="px-4 py-4 space-y-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.slice(1);

                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl ${
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-gray-400 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </motion.nav>

      {/* SCROLL PROGRESS BAR */}
      <motion.div
        className="fixed top-20 left-0 right-0 h-1 origin-left z-50 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"
        style={{ scaleX }}
      />
    </>
  );
}
