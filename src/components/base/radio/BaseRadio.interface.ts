import { RadioProps } from '@mui/material';

export type BaseRadioProps = RadioProps & RadioOption;

export type RadioOption = {
  label: string;
  value: string;
};
