import { InputMaskProps } from 'primereact/inputmask';

export type BaseInputMaskProps = Omit<InputMaskProps, 'form'> & {
  label?: string;
  className?: string;
  inputClassName?: string;
  isError?: boolean;
};
