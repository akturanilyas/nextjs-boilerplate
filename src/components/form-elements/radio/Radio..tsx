import { FC } from 'react';
import { RadioProps } from '@/components/form-elements/radio/Radio.interface';
import BaseRadio from '@/components/base/radio-group/BaseRadio';
import { Controller } from 'react-hook-form';

export const Radio: FC<RadioProps> = (props) => {
  const { name, options, className, classes, control, defaultValue, ...rest } = props;

  return (
    <Controller
      name={name}
      control={control}
      render={() => (
        <BaseRadio options={options} className={className} classes={classes} defaultValue={defaultValue} {...rest} />
      )}
      defaultValue={defaultValue}
    />
  );
};
