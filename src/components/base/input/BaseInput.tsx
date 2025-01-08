import { FC } from 'react';
import { TextField } from '@mui/material';
import BaseView from '@/components/base/view/BaseView';
import { BaseInputProps } from '@/components/base/input/BaseInput.interface';
import { input } from './BaseInput.style';

export const BaseInput: FC<BaseInputProps> = (props) => {
  const { className, label, inputClassName, ...restProps } = props;

  return (
    <BaseView className={className}>
      <TextField variant={'outlined'} className={input({ className: inputClassName })} {...restProps} label={label}/>
    </BaseView>
  );
};

export default BaseInput;
