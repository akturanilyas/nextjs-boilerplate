import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { InputNumber } from 'primereact/inputnumber';
import { FloatLabel } from 'primereact/floatlabel';
import { cn } from '@/utils/common.util';
import { BaseNumericInputProps } from '@/components/base/numeric-input/BaseNumericInput.interface';
import { baseNumericInput } from '@/components/base/numeric-input/BaseNumericInput.style';

export const BaseNumericInput: FC<BaseNumericInputProps> = (props) => {
  const { name, className, label, inputClassName, isError, ...restProps } = props;

  const id = name;

  const floatLabelClasses = cn(
    '[&>input:focus~label]:top-4 [&>input:focus~label]:text-xs',
    '[&>input:autofill~label]:top-4 [&>input:autofill~label]:text-xs',
    '[&>input.p-filled~label]:top-4 [&>input.p-filled~label]:text-xs',
    '[&>textarea:focus~label]:top-4 [&>textarea:focus~label]:text-xs',
    '[&>textarea.p-filled~label]:top-4 [&>textarea.p-filled~label]:text-xs',
  );

  const inputClasses = cn('w-full', inputClassName, {
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
        <InputNumber
          pt={{
            input: { root: { className: baseNumericInput({ className: inputClasses }) } },
          }}
          {...restProps}
          id={name}
          name={name}
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

export default BaseNumericInput;
