import React from 'react';
import Hero from '@/components/Sections/Hero';
import Count from '@/components/Sections/Count';
import Contact from '@/components/Sections/Contact';
import Mentors from '@/components/Sections/Mentors';
import EdgeAcademy from '@/components/Sections/EdgeAcademy';
import Testimonial from '@/components/Sections/Testimonial';
import Services from '@/components/Sections/Services';
export default function page() {
  return (
    <div className="mt-35 overflow-hidden">
      <Hero />
      <Count />
      <Contact />
      <Services />
      <Mentors />
      <EdgeAcademy />
      <Testimonial />
    </div>
  );
}
