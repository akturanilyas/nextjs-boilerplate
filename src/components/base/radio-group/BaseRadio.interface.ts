import { BaseRadioItemProps } from '@/components/base/radio-group/BaseRadioItem.interface';
import { RadioButtonProps } from 'primereact/radiobutton';

export type BaseRadioProps = Pick<RadioButtonProps, 'onChange' | 'className'> & {
  options: Array<BaseRadioItemProps>;
  value: string | number | boolean;
};
