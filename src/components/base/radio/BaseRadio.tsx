import { FC } from 'react';
import { type BaseRadioProps } from '@/components/base/radio/BaseRadio.interface';
import BaseView from '@/components/base/view/BaseView';
import { Radio } from '@mui/material';
import BaseLabel from '@/components/base/label/BaseLabel';
import { cn } from '@/utils/common.util';

export const BaseRadio: FC<BaseRadioProps> = (props) => {
  const { name, label, className } = props;

  const classes = cn('flex flex-row justify-items-center items-center', className);

  return (
    <BaseView className={classes}>
      <Radio {...props} name={`${name || 'name'}`} />
      <BaseLabel htmlFor={`${name || 'name'}`} text={label} />
    </BaseView>
  );
};

export default BaseRadio;
