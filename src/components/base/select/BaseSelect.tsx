import { BaseSelectProps } from '@/components/base/select/BaseSelect.interface';
import { cn } from '@/utils/common.util';
import BaseView from '@/components/base/view/BaseView';
import { Dropdown } from 'primereact/dropdown';
import BaseLabel from '@/components/base/label/BaseLabel';
import { FloatLabel } from 'primereact/floatlabel';

export const BaseSelect = (props: BaseSelectProps) => {
  const { className, options, label, name, ...rest } = props;
  const classes = cn('w-full', className);

  return (
    <BaseView className={classes}>
      <FloatLabel>
        {label && <BaseLabel text={label} htmlFor={name || 'label-id'} />}
        <Dropdown options={options} optionLabel={'label'} className={classes} {...rest} name={name || 'label-id'} />
      </FloatLabel>
    </BaseView>
  );
};

export default BaseSelect;
