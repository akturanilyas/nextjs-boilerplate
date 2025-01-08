import { RadioProps } from '@mui/material';

export type BaseRadioItemProps = RadioProps & RadioOption;

export type RadioOption = {
  label: string;
  value: string;
};
