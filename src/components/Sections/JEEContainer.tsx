import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { ServiceType } from '@/types/type';
import { cn } from '@/lib/utils';

type Props = Pick<ServiceType, 'jee'>;

export default function JEEContainer({ jee }: Props) {
  return (
    <div className="relative">
      <div className="flex flex-col justify-between lg:flex-row lg:items-center">
        <div>
          <h2 className="text-ms-primary font-montserrat py-5 text-center text-xl font-bold">
            JEE MAIN
          </h2>
          <div className="flex flex-col gap-y-4">
            {jee.slice(0, 4).map(data => (
              <ServiceCard
                className={cn(
                  'relative w-full lg:min-h-[190px] xl:min-w-[480px]',
                  (data.id == 2 || data.id == 4) && '-right-2 lg:-right-15'
                )}
                key={data.id}
                id={data.id}
                bgColor={data.bgColor}
                borderColor={data.borderColor}
                list={data.list}
                svg={data.svg}
                tag={data.tag}
                tagColor={data.tagColor}
              />
            ))}
          </div>
        </div>
        <div className="mt-10 lg:mt-0">
          <h2 className="text-ms-primary font-montserrat py-5 text-center text-xl font-bold">
            JEE ADVANCE
          </h2>
          <div className="flex flex-col gap-y-4">
            {jee.slice(4, 8).map(data => (
              <ServiceCard
                className={cn(
                  'relative w-full lg:min-h-[200px] xl:min-w-[480px]',
                  (data.id == 6 || data.id == 8) && '-left-2 lg:-left-15'
                )}
                key={data.id}
                id={data.id}
                bgColor={data.bgColor}
                borderColor={data.borderColor}
                list={data.list}
                svg={data.svg}
                tag={data.tag}
                tagColor={data.tagColor}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
