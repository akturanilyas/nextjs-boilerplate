import { DropdownProps } from 'primereact/dropdown';

export type BaseSelectProps = Omit<DropdownProps, 'optionLabel'| 'form'> & {
  label?: string;
};
