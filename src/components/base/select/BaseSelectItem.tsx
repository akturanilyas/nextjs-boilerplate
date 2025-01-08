import { FC } from 'react';
import { BaseSelectItemProps } from '@/components/base/select/BaseSelectItem.interface';
import { MenuItem } from '@mui/material';
import BaseText from '@/components/base/text/BaseText';

export const BaseSelectItem: FC<BaseSelectItemProps> = (props) => {
  const { className, value, children, label, ...rest } = props;

  return (
    <MenuItem className={className} {...rest} classes={{ ...rest.classes }} value={value}>
      {children ? children : <BaseText text={label } />}
    </MenuItem>
  );
};

export default BaseSelectItem;
