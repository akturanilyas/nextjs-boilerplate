import { cva } from 'class-variance-authority';

export const textStyle = cva('text-primary', {
  variants: {
    size: {},
  },
});
