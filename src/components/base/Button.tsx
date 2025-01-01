'use client';

import { FC } from 'react';
import { Button as MuiButton } from '@mui/material';
import { ButtonProps } from '@/components/base/Button.type';
import { cn } from '@/utils/common.util';
import { button } from '@/components/base/Button.style';

export const Button: FC<ButtonProps> = (props) => {
  const { className } = props;

  return <MuiButton {...props} className={cn(button({ className }))}></MuiButton>;
};
