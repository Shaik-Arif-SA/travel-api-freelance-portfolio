import React from 'react';
import Sections from '../myUi/Section';
import Image from 'next/image';
export default function EdgeAcademy() {
  return (
    <div
      className="bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/hero/edge_bg.webp')`
      }}
    >
      <Sections className="py-10 lg:px-8 lg:py-20">
        <div className="mb-14 flex w-full flex-col items-center lg:flex-row lg:justify-between">
          <div className="title-1 font-montserrat mt-2 mb-3 max-w-[25rem] text-center lg:text-start">
            Your Edge with
            <span className="text-ms-secondary"> MindSpace</span> Academy
          </div>

          <p className="font-dm-sans max-w-lg text-center text-sm font-semibold lg:text-end">
            MindSpace Academy combines expert faculty, personalized mentorship,
            and structured, tech-enabled learning to help students excel in JEE,
            NEET, and TT. We focus on conceptual clarity, smart preparation, and
            consistent performance to turn potential into top results.
          </p>
        </div>

        <Image
          src="/images/hero/edge1.webp"
          alt="edge"
          width={2000}
          height={1000}
          className="rounded-lg lg:rounded-xl"
        />
      </Sections>
    </div>
  );
}
