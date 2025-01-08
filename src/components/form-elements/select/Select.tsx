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
          onChange={(event, child) => {
            field.onChange(event, child);
            onChange?.(event, child);
          }}
          className={className}
          {...rest}
          value={field.value}
        />
      )}
    />
  );
};

export default Select;
