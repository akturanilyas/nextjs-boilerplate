'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/base/button/Button';
import Form from '@/components/base/form/Form';
import { Input } from '@/components/form-elements/Input';
import BaseRadioGroup from '@/components/base/radio-group/BaseRadioGroup';

export const ExampleForm: FC = () => {
  const form = useForm();

  console.log('form', form.watch());

  return (
    <Form form={form}>
      <Input name={'test1'} label={'label1'} placeholder={'placeholder'} />
      <BaseRadioGroup
        defaultValue={'value'}
        options={[
          { label: 'label', value: 'value' },
          { label: 'label1', value: 'value2' },
        ]}
        name={'test2'}
      />
      <Button type='submit' className='w-full'>
        Submit
      </Button>
    </Form>
  );
};
