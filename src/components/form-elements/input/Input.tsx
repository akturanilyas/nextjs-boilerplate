import { BaseInput } from '@/components/base/input/BaseInput';
import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
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
        <BaseView>
          <BaseInput
            {...rest}
            value={field.value}
            onChange={(event) => {
              field.onChange(event);
              onChange?.(event);
            }}
          />
        </BaseView>
      )}
    />
  );
};

export default Input;
