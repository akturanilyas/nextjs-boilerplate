import { HTMLProps, ReactElement } from 'react';

export interface TextProps extends HTMLProps<HTMLSpanElement> {
  text?: string;
  options?: Record<string, unknown>;
  customContent?: ReactElement;
}
