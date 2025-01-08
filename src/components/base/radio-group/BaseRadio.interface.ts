import { RadioGroupProps } from '@mui/material';
import { BaseRadioItemProps } from '@/components/base/radio-group/BaseRadioItem.interface';

export type BaseRadioProps = RadioGroupProps & {
  options: Array<BaseRadioItemProps>;
};
