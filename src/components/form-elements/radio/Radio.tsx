import { FC } from 'react';
import { RadioProps } from '@/components/form-elements/radio/Radio.interface';
import BaseRadio from '@/components/base/radio-group/BaseRadio';
import { Controller } from 'react-hook-form';
import { RadioButtonChangeEvent } from 'primereact/radiobutton';

export const Radio: FC<RadioProps> = (props) => {
  const { name, options, className, form, defaultValue, ...rest } = props;

  const onChange = (event: RadioButtonChangeEvent, onChange: (value: string) => void) => {
    onChange(event.value);
  };

  return (
    <Controller
      name={name}
      control={form.control}
      render={({ field }) => (
        <BaseRadio
          options={options}
          className={className}
          {...rest}
          value={field.value}
          onChange={(event) => {
            onChange(event, field.onChange);
          }}
        />
      )}
      defaultValue={defaultValue}
    />
  );
};
