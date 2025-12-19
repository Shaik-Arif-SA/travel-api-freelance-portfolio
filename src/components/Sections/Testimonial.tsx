'use client';

import React, { useRef, useState } from 'react';
import Sections from '../myUi/Section';
import TestimonialCard from '../Cards/TestimonialCard';
import { testimonials } from '@/constant/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div
      id="testimonial"
      className="bg-cover bg-center py-10 lg:py-20"
      style={{
        backgroundImage: `url('/images/hero/testimonials_bg.webp')`, backgroundColor: 'rgb(254, 255, 221) 100%',
      }}
    >
      <Sections className="font-montserrat lg:px-8">
        <div className="title-1 mx-auto mt-2 mb-14 w-full max-w-lg text-center">
          What Our <span className="text-ms-secondary">Students</span> Say!
        </div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          loop
          centeredSlides
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 2 },
            1536: { slidesPerView: 2.5 }
          }}
          navigation={{ prevEl: '#prev', nextEl: '#next' }}
          onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
          onSwiper={swiper => (swiperRef.current = swiper)}
        >
          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>
              <TestimonialCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-6 flex w-full items-center justify-between px-3">
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded-full cursor-pointer transition-all ${
                  activeIndex === index
                    ? 'w-10 bg-ms-primary'
                    : 'w-4 bg-ms-primary-50'
                }`}
                onClick={() => swiperRef.current?.slideToLoop(index)}
              />
            ))}
          </div>

          <div className="flex gap-2">
            <Button id="prev" className="rounded-full text-white">
              <ChevronLeft size={28} />
            </Button>
            <Button id="next" className="rounded-full text-white">
              <ChevronRight size={28} />
            </Button>
          </div>
        </div>
      </Sections>
    </div>
  );
}
