import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';

import BaseLabel from '@/components/base/label/BaseLabel';
import { cn } from '@/utils/common.util';
import { type BaseRadioItemProps } from '@/components/base/radio-group/BaseRadioItem.interface';
import { RadioButton } from 'primereact/radiobutton';

export const BaseRadioItem: FC<BaseRadioItemProps> = (props) => {
  const { name, label, className, value, ...rest } = props;

  const classes = cn('flex flex-row justify-items-center items-center gap-2', className);

  return (
    <BaseView className={classes}>
      <RadioButton inputId={`${name || 'name'}`} name={name} value={value} {...rest} />
      <BaseLabel htmlFor={`${name || 'name'}`} text={label} />
    </BaseView>
  );
};

export default BaseRadioItem;
