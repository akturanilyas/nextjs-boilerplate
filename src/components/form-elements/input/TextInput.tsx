import { BaseInput } from '@/components/base/text-input/BaseInput';
import { FC } from 'react';
import { Controller } from 'react-hook-form';
import BaseView from '@/components/base/view/BaseView';
import BaseText from '@/components/base/text/BaseText';
import { cn, get, isEmpty } from '@/utils/common.util';
import { getInputErrorLabel } from '@/utils/form.util';
import { TextInputProps } from '@/components/form-elements/input/TextInput.interface';

export const TextInput: FC<TextInputProps> = (props) => {
  const { name, onChange, form, defaultValue, errorMessage, underlineInfo, rules, ...rest } = props;

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
          <BaseInput
            {...rest}
            name={name}
            isError={isError}
            value={field.value}
            onChange={(event) => {
              field.onChange(event);
              onChange?.(event);
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

export default TextInput;
