import React from 'react';
import Sections from '../myUi/Section';
import { BookingForm } from '../Forms/BookingForm';
import Image from 'next/image';

export default function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen py-10 lg:px-8"
      style={{
        background:
          ' rgb(254, 255, 221) 100%'
      }}
    >
      <Sections>
        <div
          className="flex flex-col gap-5 rounded-3xl p-2 lg:flex-row lg:p-6"
          style={{
            backgroundImage: `url('/images/hero/contact_bg1.webp')`
          }}
        >
          {/* Left Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-2xl md:h-[450px] lg:h-auto lg:w-[50%]">
            <Image
              src="/images/hero/contact.webp"
              alt="contact"
              fill
              className="object-cover md:object-top lg:object-cover"
            />
          </div>

          {/* Form */}
          <BookingForm className="font-dm-sans w-full overflow-hidden rounded-2xl bg-blue-100 lg:w-[50%] xl:p-10 xl:px-14" />
        </div>
      </Sections>
    </div>
  );
}
