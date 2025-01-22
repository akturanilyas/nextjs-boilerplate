import { FC } from 'react';
import { Controller } from 'react-hook-form';
import BaseView from '@/components/base/view/BaseView';
import BaseText from '@/components/base/text/BaseText';
import { cn, get, isEmpty } from '@/utils/common.util';
import { getInputErrorLabel } from '@/utils/form.util';
import { NumericInputProps } from '@/components/form-elements/input/NumericInput.interface';
import BaseNumericInput from '@/components/base/numeric-input/BaseNumericInput';

export const NumericInput: FC<NumericInputProps> = (props) => {
  const { name, onValueChange, form, defaultValue, errorMessage, underlineInfo, rules, ...rest } = props;

  const isError = !isEmpty(get(form.formState.errors, name)) && !isEmpty(errorMessage);

  const underlineInfoClasses = cn(underlineInfo?.className, '');

  return (
    <BaseView>
      <Controller
        control={form.control}
        name={name}
        defaultValue={defaultValue || ''}
        rules={rules}
        render={({ field }) => (
          <BaseNumericInput
            {...rest}
            name={name}
            isError={isError}
            value={field.value}
            onValueChange={(event) => {
              event.value && field.onChange(event);
              onValueChange?.(event);
            }}
          />
        )}
      />

      {isError && (
        <BaseText
          text={getInputErrorLabel({ errorMessage: errorMessage!, form, name })}
          className={'mt-1 text-sm text-error'}
        />
      )}

      {!isError && underlineInfo && <BaseText text={underlineInfo.label} className={underlineInfoClasses} />}
    </BaseView>
  );
};

export default NumericInput;
