'use client';
import React from 'react';
import Image from 'next/image';
import Sections from '@/components/myUi/Section';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <Sections
      id="home"
      className="grid grid-cols-1 gap-8 pt-10 lg:grid-cols-2 lg:place-items-center lg:gap-0 xl:pt-20"
    >
      <div className="place-items-center text-center lg:place-items-start lg:text-left">
        <Image
          src="/Images/hero/hero2.svg"
          alt="home_student"
          width={50}
          height={50}
          className="mb-6"
        />
        <p
          data-aos="flip-right"
          data-aos-duration="1000"
          className="bg-primary-50 font-dm-sans w-fit rounded-xl border-1 border-blue-500 p-2 py-2"
        >
          👋 Welcome to Mindspace Academy
        </p>
        <div
          data-aos="fade-right"
          data-aos-duration="400"
          className="font-montserrat mt-8 text-2xl leading-9 font-extrabold md:leading-12 lg:text-4xl"
        >
          Empower Your <span className="text-secondary">Mind</span> to Achieve
          More Than Just Marks
        </div>
        <p
          data-aos="fade-right"
          data-aos-duration="1000"
          className="font-dm-sans mt-6 text-sm text-gray-800 md:text-lg"
        >
          At MindSpace, we go beyond textbooks to ignite a deeper understanding,
          sharpen problem-solving skills, and build lasting confidence.
        </p>

        <div className="mt-6 flex gap-3 lg:mb-3 xl:mb-0">
          <Button
            variant={'outline'}
            className="bg-secondary-50"
            data-aos="fade-up"
          >
            Explore Courses
          </Button>
          <Button
            variant={'secondary'}
            className="text-white"
            data-aos="fade-up"
          >
            Contact Us
          </Button>
        </div>
      </div>
      <div
        data-aos="zoom-in"
        className="right-0 place-self-center lg:place-self-end"
      >
        <Image
          src="/Images/hero/hero.webp"
          alt="home_student"
          width={550}
          height={550}
        />
      </div>
    </Sections>
  );
}
