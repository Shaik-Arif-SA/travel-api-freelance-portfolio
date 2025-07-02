import React from 'react';
import Image from 'next/image';
import { TestimonialType } from '@/types/type';
import { Star } from 'lucide-react';

export default function TestimonialCard({
  name,
  role,
  image,
  disc
}: TestimonialType) {
  return (
    <div className="max-h-[22rem] w-full rounded-2xl bg-[#FFF6DA] p-4 px-5 lg:h-[16rem] lg:p-6 xl:w-xl">
      <div className="grid grid-cols-4 gap-3">
        <div className="col-span-1 self-center">
          <div className="relative h-25 w-25 overflow-hidden rounded-full">
            <Image
              src={image}
              alt={name}
              fill
              className="object-cover object-center"
            />
          </div>
        </div>

        <div className="col-span-4 lg:col-span-3">
          <div className="mb-3 flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className="text-[#FFD600]"
                fill="#FFD600"
                size={17}
              />
            ))}
          </div>
          <div className="mb-4 text-sm leading-relaxed font-medium text-gray-800 lg:h-32">
            {disc}
          </div>

          <div className="mt-auto">
            <div className="text-ms-primary font-montserrat text-lg font-bold">
              {name}
            </div>
            <div className="text-ms-secondary text-sm">{role}</div>
          </div>
        </div>
      </div>
    </div>
  );
}
