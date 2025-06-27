import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { ServiceType } from '@/types/type';
import { cn } from '@/lib/utils';
import { ScrollButton } from '../ui/button';

type Props = Pick<ServiceType, 'tt'>;

export default function TTContainer({ tt }: Props) {
  return (
    <div className="min-h-[600px] xl:py-15">
      <div className="flex flex-wrap items-center justify-center gap-4 xl:gap-y-10">
        {tt.map(service => (
          <ServiceCard
            className={cn('w-full md:max-w-[280px] xl:h-[180px]')}
            key={service.id}
            id={service.id}
            bgColor={service.bgColor}
            borderColor={service.borderColor}
            list={service.list}
            svg={service.svg}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <ScrollButton
          to="contact"
          variant="secondary"
          className="mt-10 text-white"
        >
          Explore More
        </ScrollButton>
      </div>
    </div>
  );
}
