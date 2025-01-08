import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { RadioGroup } from '@mui/material';
import BaseRadioItem from '@/components/base/radio-group/BaseRadioItem';
import { cn } from '@/utils/common.util';
import { BaseRadioProps } from '@/components/base/radio-group/BaseRadio.interface';

export const BaseRadio: FC<BaseRadioProps> = (props) => {
  const { className, options, ...rest } = props;

  const classes = cn('flex flex-row flex-wrap', className);

  return (
    <RadioGroup
      aria-labelledby='demo-radio-buttons-group-label'
      defaultValue='female'
      name='radio-buttons-group'
      {...rest}
    >
      <BaseView className={classes}>
        {options.map((option) => (
          <BaseRadioItem key={option.value} {...option} name={option.value} />
        ))}
      </BaseView>
    </RadioGroup>
  );
};

export default BaseRadio;
