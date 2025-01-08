import { BaseSelectProps } from '@/components/base/select/BaseSelect.interface';
import { Select } from '@mui/material';
import { cn } from '@/utils/common.util';
import BaseView from '@/components/base/view/BaseView';
import BaseLabel from '@/components/base/label/BaseLabel';
import BaseSelectItem from '@/components/base/select/BaseSelectItem';

export const BaseSelect = (props: BaseSelectProps) => {
  const { className, label, name, options, ...rest } = props;
  const classes = cn('flex flex-row justify-items-center items-center', className);

  return (
    <BaseView className={classes}>
      {label && <BaseLabel htmlFor={`${name || 'name'}`} text={label} />}
      <Select variant={'outlined'} {...rest}>
        {options.map((option) => (
          <BaseSelectItem key={option.value?.toString()} {...option} />
        ))}
      </Select>
    </BaseView>
  );
};

export default BaseSelect;
