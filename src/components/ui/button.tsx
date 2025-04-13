import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex w-full px-6 py-3 text-14 md:text-16 cursor-pointer items-center justify-center gap-2 whitespace-nowrap rounded-full font-600 transition-all disabled:pointer-events-none disabled:opacity-50 shrink-0 [&_svg]:shrink-0 outline-none ring-0',
  {
    variants: {
      variant: {
        default:
          'bg-primary text-text-gray-white shadow-xs hover:bg-primary-hover',
        outline:
          'border text-dark border-blue bg-white shadow-xs hover:!bg-blue/10',
        link: 'hover:underline',
        icon: '!p-0 bg-white shadow-xs text-dark',
      },
      size: {
        default: 'h-10 md:h-[52px]',
        md: 'h-11',
        icon: 'size-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  type = 'button',
  ...props
}: React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot : 'button';

  return (
    <Comp
      data-slot="button"
      type={type}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
