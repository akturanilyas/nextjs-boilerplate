import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { BaseInputProps } from '@/components/base/text-input/BaseInput.interface';
import { input } from './BaseInput.style';
import { InputText } from 'primereact/inputtext';
import { FloatLabel } from 'primereact/floatlabel';
import { cn } from '@/utils/common.util';

export const BaseInput: FC<BaseInputProps> = (props) => {
  const { name, className, label, inputClassName, isError, ...restProps } = props;

  const id = name;

  const floatLabelClasses = cn(
    '[&>input:focus~label]:top-4 [&>input:focus~label]:text-xs',
    '[&>input:autofill~label]:top-4 [&>input:autofill~label]:text-xs',
    '[&>input.p-filled~label]:top-4 [&>input.p-filled~label]:text-xs',
    '[&>textarea:focus~label]:top-4 [&>textarea:focus~label]:text-xs',
    '[&>textarea.p-filled~label]:top-4 [&>textarea.p-filled~label]:text-xs',
    { '[&>label]:top-4 [&>label]:text-xs': props.value },
  );

  const inputClasses = cn(inputClassName, {
    'text-error bg-error-light border-error disabled:border-error border': isError,
  });

  const labelClasses = cn('text-secondary pl-3 text-base', {
    'text-error': isError,
  });

  return (
    <BaseView className={className}>
      <FloatLabel
        className={cn({ 'cursor-not-allowed': props.disabled })}
        pt={{ root: { className: floatLabelClasses } }}
      >
        <InputText
          id={name}
          pt={{ root: { className: input({ className: inputClasses }) } }}
          {...restProps}
          name={name || 'label-id'}
        />
        {label && (
          <label className={labelClasses} htmlFor={id}>
            {label}
          </label>
        )}
      </FloatLabel>
    </BaseView>
  );
};

export default BaseInput;
