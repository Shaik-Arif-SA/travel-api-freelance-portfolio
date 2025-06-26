import React from 'react';
import Image from 'next/image';
import { Mentor } from '@/types/type';

export default function MentorsCard({
  name,
  subject,
  institute,
  image
}: Mentor) {
  return (
    <div className="relative flex  min-h-[450px] flex-col items-center justify-center overflow-hidden rounded-xl">
      <Image
        src={image}
        alt={name}
        fill
        className="h-full w-full object-cover"
      />

      <div className="border-primary absolute bottom-4 w-[300px] rounded-2xl border bg-blue-100 p-4 text-center">
        <h3 className='text-md font-bold text-primary'>{name}</h3>
        <p className='text-sm mt-2 font-medium'>{subject}</p>
        <p className='text-sm font-medium'>{institute}</p>
      </div>
    </div>
  );
}
