import { cva } from 'class-variance-authority';

export const button = cva('focus:shadow-none', {
  variants: {
    variant: {
      inline: 'bg-transparent p-0 border-none hover:bg-transparent',
      transparent: 'bg-transparent border-transparent text-blue-accent hover:bg-blue-50 hover:border-transparent'
    },
  },
});
