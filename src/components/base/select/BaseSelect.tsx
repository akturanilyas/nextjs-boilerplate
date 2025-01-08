import { BaseSelectProps } from '@/components/base/select/BaseSelect.interface';
import { InputLabel, ListItemText, MenuItem, Select } from '@mui/material';
import { cn } from '@/utils/common.util';
import BaseView from '@/components/base/view/BaseView';
import FormControl from '@mui/material/FormControl';

export const BaseSelect = (props: BaseSelectProps) => {
  const { className, label, name, options, menuItemProps, ...rest } = props;
  const classes = cn('flex flex-col justify-items-center items-center', className);

  return (
    <BaseView className={classes}>
      <FormControl>
        {label && <InputLabel id={name}>{label}</InputLabel>}
        <Select labelId={name} className={'w-60'} {...rest} label={label}>
          {options.map((option) => (
            <MenuItem key={option.value?.toString()} {...menuItemProps} value={option.value}>
              <ListItemText primary={option.label} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </BaseView>
  );
};

export default BaseSelect;
