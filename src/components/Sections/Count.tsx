import React from 'react';
import Sections from '../myUi/Section';
import { cn } from '@/lib/utils';

const countData: { count: string; label: string }[] = [
  {
    count: '1450',
    label: 'Students Taught'
  },
  {
    count: '10+',
    label: 'Years Experience'
  },
  {
    count: '7100',
    label: 'Hours Taught'
  },
  {
    count: '96%',
    label: 'Success Rate'
  }
];
export default function Count() {
  return (
    <div className="bg-blue-500 py-12">
      <Sections className="font-montserrat grid grid-cols-2 gap-y-8 md:grid-cols-2 lg:grid-cols-4 lg:gap-0">
        {countData.map((item, index) => (
          <div
            key={index}
            className={cn(
              'flex flex-col items-center justify-center gap-y-2 border-r-1 border-white text-white',
              index === 1 && 'border-r-0 lg:border-r-1',
              index === 3 && 'border-r-0'
            )}
          >
            <div className="text-3xl font-bold">{item.count}</div>
            <div className="text-md font-medium">{item.label}</div>
          </div>
        ))}
      </Sections>
    </div>
  );
}
