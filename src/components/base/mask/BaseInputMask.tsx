import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { FloatLabel } from 'primereact/floatlabel';
import { cn } from '@/utils/common.util';
import { InputMask } from 'primereact/inputmask';
import { BaseInputMaskProps } from '@/components/base/mask/BaseInputMask.interface';

export const BaseInputMask: FC<BaseInputMaskProps> = (props) => {
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

  const inputClasses = cn(
    [
      'placeholder:text-sm pl-5 pt-5 pb-2 w-full flex-1 text-base text-primary placeholder:text-quaternary',
      'focus:border-blue-accent focus:shadow-none',
      'disabled:bg-disabled rounded-xl',
      'disabled:border-disabled-light font-normal disabled:cursor-not-allowed',
    ],
    {
      'text-error bg-error-light border-error disabled:border-error border': isError,
    },
    inputClassName,
  );

  const labelClasses = cn('text-secondary pl-3 text-base', {
    'text-error': isError,
  });

  return (
    <BaseView className={className}>
      <FloatLabel
        className={cn({ 'cursor-not-allowed': props.disabled })}
        pt={{ root: { className: floatLabelClasses } }}
      >
        <InputMask
          id={name}
          pt={{ root: { className: inputClasses } }}
          autoClear={false}
          {...restProps}
          name={name || 'label-id'}
          value={props.value || undefined}
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

export default BaseInputMask;
