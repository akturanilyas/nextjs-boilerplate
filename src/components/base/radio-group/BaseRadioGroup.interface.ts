import { RadioGroupProps } from '@mui/material';
import { BaseRadioProps } from '@/components/base/radio/BaseRadio.interface';

export type BaseRadioGroupsProps = RadioGroupProps & {
  options: Array<BaseRadioProps>;
};
