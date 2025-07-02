import React from 'react';
import ServiceCard from '../Cards/ServiceCard';
import { ServiceType } from '@/types/type';
import { cn } from '@/lib/utils';

type Props = Pick<ServiceType, 'jee'>;

export default function JEEContainer({ jee }: Props) {
  return (
    <div className="relative">
      <div className="flex flex-col lg:items-center justify-between lg:flex-row">
        <div>
          <h2 className="text-ms-primary py-5 text-xl font-bold font-montserrat text-center ">JEE MAIN</h2>
          <div className="flex flex-col gap-y-4">
            {jee.slice(0, 4).map(data => (
              <ServiceCard
                className={cn(
                  'w-full lg:min-h-[190px] relative xl:min-w-[480px]',
                  (data.id == 2 || data.id == 4) && ' -right-2  lg:-right-15'
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
          <h2 className="text-ms-primary py-5 text-xl font-bold font-montserrat text-center ">JEE ADVANCE</h2>
          <div className="flex flex-col gap-y-4">
            {jee.slice(4, 8).map(data => (
              <ServiceCard
                className={cn('w-full lg:min-h-[200px] xl:min-w-[480px] relative',
                     (data.id == 6 || data.id == 8) && ' -left-2  lg:-left-15'
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
