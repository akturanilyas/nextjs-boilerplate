import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import BaseRadioItem from '@/components/base/radio-group/BaseRadioItem';
import { cn } from '@/utils/common.util';
import { BaseRadioProps } from '@/components/base/radio-group/BaseRadio.interface';

export const BaseRadio: FC<BaseRadioProps> = (props) => {
  const { className, options, value, ...rest } = props;

  const classes = cn('flex flex-row flex-wrap gap-2', className);

  return (
    <BaseView className={classes}>
      {options.map((option) => (
        <BaseRadioItem key={option.value} {...option} checked={option.value === value} {...rest} />
      ))}
    </BaseView>
  );
};

export default BaseRadio;
