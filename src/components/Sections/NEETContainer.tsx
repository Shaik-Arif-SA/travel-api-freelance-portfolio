import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { ServiceType } from '@/types/type';
import { cn } from '@/lib/utils';

type Props = Pick<ServiceType, 'neet'>;

export default function NEETContainer({ neet }: Props) {
  return (
    <div className="grid min-h-[600px] gap-4 md:justify-items-center xl:grid-cols-3 xl:py-20">
      {neet.map(service => (
        <ServiceCard
          className={cn(
            'w-full self-start xl:h-[220px]',
            service.id == 2 && 'self-center',
            service.id == 3 && 'self-end'
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
