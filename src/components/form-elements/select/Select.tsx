import { FC } from 'react';
import { SelectProps } from '@/components/form-elements/select/Select.interface';
import BaseSelect from '@/components/base/select/BaseSelect';
import { Controller } from 'react-hook-form';

export const Select: FC<SelectProps> = (props) => {
  const { className, form, name, onChange, defaultValue, ...rest } = props;

  return (
    <Controller
      control={form.control}
      name={name}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <BaseSelect
          name={name}
          className={className}
          {...rest}
          onChange={(event) => {
            field.onChange(event.target.value);
            onChange?.(event.target.value);
          }}
          value={field.value}
        />
      )}
    />
  );
};

export default Select;
