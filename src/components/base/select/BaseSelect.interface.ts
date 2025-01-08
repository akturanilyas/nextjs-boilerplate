import { SelectProps } from '@mui/material';
import { BaseSelectItemProps } from '@/components/base/select/BaseSelectItem.interface';

export type BaseSelectProps = SelectProps & {
  defaultValue: string;
  options: Array<BaseSelectItemProps>;
  name: string;
  className?: string;
  label?: string;
};
