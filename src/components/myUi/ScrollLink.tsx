'use client';
import React from 'react';
import { Link, LinkProps } from 'react-scroll';
import clsx from 'clsx';

type ScrollLinkProps = {
  children: React.ReactNode | string;
  className?: string;
  to: string;
  props?: LinkProps;
  onClick?: () => void;
};

export default function ScrollLink({
  children,
  className,
  to,
  onClick,
  ...props
}: ScrollLinkProps) {
  return (
    <Link
      className={clsx(className)}
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      onClick={onClick}
      {...props}
    >
      {children}
    </Link>
  );
}
