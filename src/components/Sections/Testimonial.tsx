'use client';
import React, { useRef, useState } from 'react';
import Sections from '../myUi/Section';
import TestimonialCard from '../Cards/TestimonialCard';
import { testimonials } from '@/constant/data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

export default function Testimonial() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <div>
      <Sections
        id="testimonial"
        className="font-montserrat py-10 lg:px-8 lg:py-20"
      >
        <div className="title-1 mx-auto mt-2 mb-14 w-full max-w-lg text-center">
          What Our <span className="text-ms-secondary">Students</span> Say!
        </div>

        <div>
          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            loop={true}
            slidesPerView={1}
            spaceBetween={20}
            centeredSlides={true}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              reverseDirection: false
            }}
            navigation={{
              prevEl: '#prev',
              nextEl: '#next'
            }}
            breakpoints={{
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 2 },
              1536: { slidesPerView: 2.5 }
            }}
            onSlideChange={swiper => setActiveIndex(swiper.realIndex)}
            onSwiper={swiper => (swiperRef.current = swiper)}
            className="h-full"
          >
            {testimonials.map((item, index) => (
              <SwiperSlide key={index}>
                <TestimonialCard {...item} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="mt-6 flex w-full items-center justify-between px-3">
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`h-2 cursor-pointer rounded-full transition-all duration-300 ${
                  activeIndex === index
                    ? 'bg-ms-primary w-10'
                    : 'bg-ms-primary-50 w-4'
                }`}
                onClick={() => {
                  setActiveIndex(index);
                  swiperRef.current?.slideToLoop(index);
                }}
              />
            ))}
          </div>
          <div className="flex justify-center gap-2">
            <Button
              id="prev"
              className="cursor-pointer rounded-full py-5 text-white"
            >
              <ChevronLeft size={30} />
            </Button>
            <Button
              id="next"
              className="cursor-pointer rounded-full py-5 text-xl text-white"
            >
              <ChevronRight />
            </Button>
          </div>
        </div>
      </Sections>
    </div>
  );
}
