"use client";

import { useState, useEffect } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

import { Counselling } from "../components/Counselling";
import { Footer } from "../components/Footer";
import { WhatsAppFloat } from "../components/WhatsAppFloat";
import { NotificationBar } from "../components/NotificationBar";

import { TestimonialsCarousel } from "../components/TestimonialCarousel";
import { FAQ } from "../components/FAQ";
import { ContactModal } from "../components/ContactModal";

import { ImageShowcase } from "../components/ImageShowcase";
import { Quiz } from "../components/Quiz";
import { Courses } from "../components/Courses";
import { WhyChooseUs } from "../components/WhyChooseUs";
import { Testimonials2 } from "../components/Testimonials2";

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    const handleOpenModal = () => {
      setIsContactModalOpen(true);
    };

    window.addEventListener('openContactModal', handleOpenModal);
    return () => window.removeEventListener('openContactModal', handleOpenModal);
  }, []);

  return (
    <div className="min-h-screen">
      <NotificationBar/>
      <Header onContactClick={() => setIsContactModalOpen(true)} />
      <main>
        <Hero />
        <ImageShowcase />
        <TestimonialsCarousel />
        <Quiz />
        <Courses />
        <WhyChooseUs />
        <Counselling />
        <Testimonials2 />
        <FAQ />
      </main>
      <Footer onContactClick={() => setIsContactModalOpen(true)} />
      <WhatsAppFloat />
      {/* <LiveChatWidget /> */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}