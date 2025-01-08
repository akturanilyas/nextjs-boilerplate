import { BaseSelectProps } from '@/components/base/select/BaseSelect.interface';
import { Checkbox, ListItemText, MenuItem, Select } from '@mui/material';
import { cn } from '@/utils/common.util';
import BaseView from '@/components/base/view/BaseView';
import BaseLabel from '@/components/base/label/BaseLabel';

export const BaseSelect = (props: BaseSelectProps) => {
  const { className, label, name, options, menuItemProps, ...rest } = props;
  const classes = cn('flex flex-row justify-items-center items-center', className);

  return (
    <BaseView className={classes}>
      {label && <BaseLabel htmlFor={`${name || 'name'}`} text={label} />}
      <Select className={'w-60'} {...rest}>
        {options.map((option) => (
          <MenuItem key={option.value?.toString()} {...menuItemProps} value={option.value}>
            <ListItemText primary={option.label} />
          </MenuItem>
        ))}
      </Select>
    </BaseView>
  );
};

export default BaseSelect;
