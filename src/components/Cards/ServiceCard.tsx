import React from 'react';
import { TapsType } from '@/types/type';
import { cn } from '@/lib/utils';

type Props = TapsType & {
  className?: string;
};

export default function ServiceCard({
  bgColor,
  borderColor,
  list,
  svg,
  tag,
  tagColor,
  className
}: Props) {
  return (
    <div
      className={cn(
        ' rounded-xl border-1 p-3 lg:p-6 xl:h-[230px]',
        className,
        bgColor,
        borderColor
      )}
    >
      <div className="flex w-full items-center justify-between">
        {tag && (
          <div
            className={cn(
              'mb-4 w-fit rounded-full px-4 py-2 text-sm font-medium text-white',
              tagColor
            )}
          >
            {tag}
          </div>
        )}
        <div className="ml-4">
          <img src={svg} alt="Achievement Medal" className="h-12 w-12" />
        </div>
      </div>
      <div className="mt-10 max-w-[270px] space-y-1 text-start">
        {list.map((item, index) => (
          <p key={index} className="text-sm font-semibold text-gray-800">
            {item}
          </p>
        ))}
      </div>
    </div>
  );
}
