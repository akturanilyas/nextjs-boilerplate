import { cva } from 'class-variance-authority';

export const baseNumericInput = cva(
  [
    'placeholder:text-sm pl-5 pt-5 pb-2 w-full flex-1 text-base text-primary placeholder:text-quaternary',
    'focus:border-blue-accent focus:shadow-none',
    'disabled:bg-disabled rounded-xl',
    'disabled:border-disabled-light font-normal disabled:cursor-not-allowed',
  ],
  {
    variants: {
      variant: {
        outline: 'border border-border-primary',
      },
    },
  },
);
