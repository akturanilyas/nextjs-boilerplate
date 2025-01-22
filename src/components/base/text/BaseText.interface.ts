import { HTMLProps, ReactElement } from 'react';
import { VariantProps } from 'class-variance-authority';
import { textStyle } from '@/components/base/text/BaseText.style';

export type TextProps = Omit<HTMLProps<HTMLSpanElement>, 'size'> & {
  text?: string;
  options?: Record<string, unknown>;
  customContent?: ReactElement;
} & VariantProps<typeof textStyle>;
