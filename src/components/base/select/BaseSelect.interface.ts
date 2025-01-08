import { SelectProps } from '@mui/material';
import { BaseSelectItemProps } from '@/components/base/select/BaseSelectItem.interface';
import { ExtendButtonBase } from '@mui/material/ButtonBase';
import { MenuItemTypeMap } from '@mui/material/MenuItem/MenuItem';

export type BaseSelectProps = SelectProps & {
  options: Array<BaseSelectItemProps>;
  label?: string;
  menuItemProps?: ExtendButtonBase<MenuItemTypeMap>
};
