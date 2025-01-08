import { BaseInput } from '@/components/base/input/BaseInput';
import { FC } from 'react';
import { InputProps } from '@/components/form-elements/input/Input.interface';
import { Controller } from 'react-hook-form';

export const Input: FC<InputProps> = (props) => {
  const { name, onChange, form, defaultValue, ...rest } = props;

  return (
    <Controller
      control={form.control}
      name={name}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <BaseInput
          {...rest}
          value={field.value}
          onChange={(event) => {
            field.onChange(event);
            onChange?.(event);
          }}
        />
      )}
    />
  );
};

export default Input;
