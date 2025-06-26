import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { ServiceType } from '@/types/type';
import { cn } from '@/lib/utils';

type Props = Pick<ServiceType, 'jee'>;

export default function JEEContainer({ jee }: Props) {
  return (
    <div className="grid grid-cols-1 gap-6 gap-x-30 md:justify-items-center lg:grid-cols-2">
      {jee.map(service => (
        <ServiceCard
          className={cn(
            'w-full max-w-[480px] xl:min-w-[480px]',
            (service.id == 1 || service.id == 5 || service.id == 8) &&
              'xl:justify-self-start',
            (service.id == 2 ||
              service.id == 3 ||
              service.id == 6 ||
              service.id == 7) &&
              'xl:justify-self-end'
          )}
          key={service.id}
          id={service.id}
          bgColor={service.bgColor}
          borderColor={service.borderColor}
          list={service.list}
          svg={service.svg}
          tag={service.tag}
          tagColor={service.tagColor}
        />
      ))}
    </div>
  );
}
