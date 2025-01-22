import { InputNumberProps } from 'primereact/inputnumber';

export type BaseNumericInputProps = Omit<InputNumberProps, 'form'> & {
  label?: string;
  className?: string;
  inputClassName?: string;
  isError?: boolean
};
