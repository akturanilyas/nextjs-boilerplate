import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { BaseInputProps } from '@/components/base/input/BaseInput.interface';
import { input } from './BaseInput.style';
import { InputText } from 'primereact/inputtext';
import BaseLabel from '@/components/base/label/BaseLabel';
import { FloatLabel } from 'primereact/floatlabel';

export const BaseInput: FC<BaseInputProps> = (props) => {
  const { name, className, label, inputClassName, ...restProps } = props;

  return (
    <BaseView className={className}>
      <FloatLabel className={'flex flex-col'}>
        {label && <BaseLabel text={label} htmlFor={name || 'label-id'} />}
        <InputText className={input({ className: inputClassName })} {...restProps} name={name || 'label-id'} />
      </FloatLabel>
    </BaseView>
  );
};

export default BaseInput;
