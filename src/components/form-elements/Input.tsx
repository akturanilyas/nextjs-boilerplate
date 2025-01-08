import { BaseInput } from '@/components/base/input/BaseInput';
import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { InputProps } from '@/components/form-elements/Input.interface';
import { Controller } from 'react-hook-form';

export const Input: FC<InputProps> = (props) => (
  <Controller
    render={({ field, fieldState, formState }) => (
      <BaseView>
        <BaseInput {...props} />
      </BaseView>
    )}
    name={props.name}
  />
);
