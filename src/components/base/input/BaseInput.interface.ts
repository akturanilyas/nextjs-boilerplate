import { TextFieldProps } from '@mui/material/TextField/TextField';

export type BaseInputProps = TextFieldProps & {
  label?: string;
  className?: string;
  inputClassName?: string;
};
