'use client';

import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/base/button/Button';
import Form from '@/components/base/form/Form';
import { TextInput } from '@/components/form-elements/input/TextInput';
import { Radio } from '@/components/form-elements/radio/Radio';
import Select from '@/components/form-elements/select/Select';
import BaseView from '@/components/base/view/BaseView';

export const ExampleForm: FC = () => {
  const form = useForm();

  return (
    <Form className={'flex flex-col gap-8 pt-2'} onSubmit={form.handleSubmit((data) => console.log(data))}>
      <BaseView className={'flex-row gap-4'}>
        <TextInput form={form} name={'input'} label={'Input Test'} placeholder={'Placeholder'} errorMessage={{}} />
        <TextInput form={form} name={'input'} label={'Input Test'} placeholder={'Placeholder'} errorMessage={{}} />
        <TextInput form={form} name={'input'} label={'Input Test'} placeholder={'Placeholder'} disabled errorMessage={{}} />
      </BaseView>
      <Radio
        form={form}
        defaultValue={'radio-1'}
        options={[
          { label: 'Radio 1', value: 'radio-1' },
          { label: 'Radio 2', value: 'radio-2' },
        ]}
        name={'radio'}
      />
      <Select
        form={form}
        label={'Select'}
        name={'Select'}
        options={[
          { label: 'Select', value: 'select-1' },
          { label: 'Select 2', value: 'select-2' },
        ]}
      />

      <Button label={'submit'} type='submit' className='w-full'></Button>
    </Form>
  );
};
