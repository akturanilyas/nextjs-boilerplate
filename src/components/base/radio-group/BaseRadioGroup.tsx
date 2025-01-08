import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { RadioGroup } from '@mui/material';
import BaseRadio from '@/components/base/radio/BaseRadio';
import { BaseRadioGroupsProps } from '@/components/base/radio-group/BaseRadioGroup.interface';
import { cn } from '@/utils/common.util';

export const BaseRadioGroup: FC<BaseRadioGroupsProps> = (props) => {
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
          <BaseRadio key={option.value} {...option} name={option.value} />
        ))}
      </BaseView>
    </RadioGroup>
  );
};

export default BaseRadioGroup;
