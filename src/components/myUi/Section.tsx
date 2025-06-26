import clsx from 'clsx';
import React from 'react';

type SectionsProps = {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

export default function Sections({ children, className, ...props }: SectionsProps) {
  return (
    <div className={clsx('mx-auto px-3 md:px-15 xl:container', className)} {...props}>
      {children}
    </div>
  );
}
