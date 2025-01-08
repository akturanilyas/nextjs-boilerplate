import { InputTextProps } from 'primereact/inputtext';

export type BaseInputProps = Omit<InputTextProps, 'form'> & {
  label?: string;
  className?: string;
  inputClassName?: string;
};
