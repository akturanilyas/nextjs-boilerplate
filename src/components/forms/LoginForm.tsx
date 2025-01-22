'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/base/button/Button';
import Form from '@/components/base/form/Form';
import { TextInput } from '@/components/form-elements/input/TextInput';
import { PropsWithClassName } from '@/types/common.type';
import { cn } from '@/utils/common.util';
import BaseView from '@/components/base/view/BaseView';
import { FORM_RULE_MESSAGE } from '@/constants/formRuleMessage.constant';
import { FORM_RULE } from '@/constants/formRule.constant';
import InputMask from '@/components/form-elements/input-mask/InputMask';

export type LoginFormProps = PropsWithClassName;

export const LoginForm: FC<LoginFormProps> = (props) => {
  const { className } = props;
  const form = useForm();
  const classes = cn('flex flex-col gap-8', className);

console.log(form.watch());

  return (
    <Form
      className={classes}
      onSubmit={form.handleSubmit(
        (data) => console.log(data),
        (errors) => console.log(errors),
      )}
    >
      <BaseView className={'gap-2'}>
        <TextInput
          inputMode={'numeric'}
          keyfilter={'num'}
          form={form}
          name={'tckn'}
          label={'TCKN'}
          placeholder={'TCKN'}
          type={'tel'}
          rules={FORM_RULE.TCKN.REQUIRED}
          errorMessage={FORM_RULE_MESSAGE.TCKN}
        />

        <InputMask
          form={form}
          prefix={'+'}
          mask={'(+99) 999 999 99 99'}
          name={'phone'}
          label={'Telefon Numarası'}
          rules={FORM_RULE.PHONE.REQUIRED}
          errorMessage={FORM_RULE_MESSAGE.PHONE}
        />
      </BaseView>
      <Button label={'Devam'} type='submit' className='rounded-xl bg-blue-accent' />
    </Form>
  );
};
