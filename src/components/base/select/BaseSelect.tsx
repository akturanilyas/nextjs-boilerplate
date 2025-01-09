import { BaseSelectProps } from '@/components/base/select/BaseSelect.interface';
import { cn } from '@/utils/common.util';
import BaseView from '@/components/base/view/BaseView';
import { Dropdown } from 'primereact/dropdown';
import BaseLabel from '@/components/base/label/BaseLabel';

export const BaseSelect = (props: BaseSelectProps) => {
  const { className, options, label, name, ...rest } = props;
  const classes = cn('w-full', className);
  const labelClasses = cn('flex justify-start text-sm ');

  return (
    <BaseView className={classes}>
      {label && <BaseLabel className={labelClasses} text={label} htmlFor={name || 'label-id'} />}
      <Dropdown options={options} optionLabel={'label'} className={classes} {...rest} name={name || 'label-id'} />
    </BaseView>
  );
};

export default BaseSelect;
