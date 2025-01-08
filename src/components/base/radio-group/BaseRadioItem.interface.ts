import { RadioButtonProps } from 'primereact/radiobutton';

export type BaseRadioItemProps = RadioButtonProps & RadioOption;

export type RadioOption = {
  label: string;
  value: string;
  className?: string;
};
