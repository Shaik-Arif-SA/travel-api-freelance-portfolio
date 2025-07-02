import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import { Link, LinkProps } from 'react-scroll';
import clsx from 'clsx';

export const buttonVariants = cva(
  "inline-flex items-center cursor-pointer justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20  aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        default:
          'bg-ms-primary  text-ms-primary-foreground shadow-xs hover:bg-ms-primary/90',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 ',
        outline:
          'border bg-background bg-tertiary border border-ms-secondary text-ms-secondary shadow-xs hover:bg-accent hover:text-accent-foreground ',
        secondary:
          'bg-ms-secondary text-ms-secondary-foreground shadow-xs hover:bg-ms-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground ',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-9 px-4 py-2 has-[>svg]:px-3',
        sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
        lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
        icon: 'size-9'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';
  return (
    <Comp
      data-slot="button"
      className={cn(
        buttonVariants({ variant, size, className }),
        'cursor-pointer'
      )}
      {...props}
    />
  );
}

type ScrollButtonProps = {
  children: React.ReactNode | string;
  className?: string;
  variant?: 'default' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  to: string;
  props?: LinkProps;
};

export function ScrollButton({
  children,
  className,
  variant,
  size,
  to,
  ...props
}: ScrollButtonProps) {
  return (
    <Link
      className={clsx(buttonVariants({ variant, size, className }))}
      to={to}
      smooth={true}
      duration={500}
      offset={-80}
      {...props}
    >
      {children}
    </Link>
  );
}
