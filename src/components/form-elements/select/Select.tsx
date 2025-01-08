import { FC } from 'react';
import { SelectProps } from '@/components/form-elements/select/Select.interface';
import BaseSelect from '@/components/base/select/BaseSelect';
import { Controller } from 'react-hook-form';

export const Select: FC<SelectProps> = (props) => {
  const { className, control, name, onChange, defaultValue } = props;

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue || ''}
      render={({ field }) => (
        <BaseSelect
          onChange={(event, child) => {
            field.onChange(event, child);
            onChange?.(event, child);
          }}
          className={className}
          {...props}
          value={field.value}
        />
      )}
    />
  );
};

export default Select;
