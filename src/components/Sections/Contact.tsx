import React from 'react';
import Sections from '../myUi/Section';
import { BookingForm } from '../Forms/BookingForm';
import Image from 'next/image';
export default function Contact() {
  return (
    <div
      id="contact"
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/hero/contact_bg2.webp')`
      }}
    >
      <Sections className="py-10 lg:px-8 lg:py-20">
        <div
          className="mt-15 flex flex-col gap-5 rounded-3xl p-2 lg:flex-row lg:p-6"
          style={{
            backgroundImage: `url('/images/hero/contact_bg1.webp')`
          }}
        >
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[450px] lg:h-auto lg:w-[50%]">
            <Image
              src="/images/hero/contact.webp"
              alt="testimonial"
              fill
              className="object-cover md:object-top lg:object-cover"
            />
          </div>
          <BookingForm className="font-dm-sans w-full overflow-hidden rounded-2xl bg-blue-100 lg:w-[50%] xl:p-10 xl:px-14" />
        </div>
      </Sections>
    </div>
  );
}
