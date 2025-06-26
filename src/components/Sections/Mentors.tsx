'use client';
import React from 'react';
import Sections from '../myUi/Section';
import { SwiperSlide } from 'swiper/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { mentors } from '@/constant/data';
import MentorsCard from '../Cards/MentorsCard';
import { Button } from '../ui/button';

export default function Mentors() {
  return (
    <Sections id="mentors" className="font-montserrat py-10 lg:px-8 lg:py-20">
      <div className="mb-14 w-full text-center">
        <div className="title-1 mx-auto mt-2 mb-3 max-w-lg">
          The <span className="text-secondary">Experts</span> Who Turn Potential
          Into Performance
        </div>
      </div>
      <div className="relative mt-5">
        <Swiper
          modules={[Navigation, Autoplay]}
          loop={true}
          slidesPerView={1}
          spaceBetween={20}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            reverseDirection: false
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 }
          }}
          navigation={{
            prevEl: '#prev1',
            nextEl: '#next1'
          }}
        >
          {mentors.map((item, index) => (
            <SwiperSlide key={index}>
              <MentorsCard {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="mt-10 flex w-full justify-center gap-2">
        <Button
          id="prev1"
          className="cursor-pointer rounded-full py-5 text-white"
        >
          <ChevronLeft size={30} />
        </Button>
        <Button
          id="next1"
          className="bg-primary cursor-pointer rounded-full py-5 text-xl text-white"
        >
          <ChevronRight />
        </Button>
      </div>
    </Sections>
  );
}
