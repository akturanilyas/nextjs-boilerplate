import { InputProps } from '@mui/material';

export type BaseInputProps = InputProps & {
  label?: string;
  className?: string;
  inputClassName?: string;
};
