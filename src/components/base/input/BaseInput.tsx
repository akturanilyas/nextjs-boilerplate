import { FC } from 'react';
import { Input } from '@mui/material';
import BaseView from '@/components/base/view/BaseView';
import BaseLabel from '@/components/base/label/BaseLabel';
import { BaseInputProps } from '@/components/base/input/BaseInput.interface';
import { input } from './BaseInput.style';

export const BaseInput: FC<BaseInputProps> = (props) => {
  const { className, label, inputClassName, ...restProps } = props;

  return (
    <BaseView className={className}>
      {label && <BaseLabel text={label} />}
      <Input className={input({ className: inputClassName })} {...restProps} />
    </BaseView>
  );
};

export default BaseInput;
