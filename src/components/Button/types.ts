import type { VariantProps } from 'class-variance-authority';
import { ComponentProps } from 'react';
import { buttonVariants } from './variants';

export type ButtonProps = ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };
