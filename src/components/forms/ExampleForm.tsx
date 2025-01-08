'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/base/button/Button';
import Form from '@/components/base/form/Form';
import { Input } from '@/components/form-elements/input/Input';
import { Radio } from '@/components/form-elements/radio/Radio.';
import Select from '@/components/form-elements/select/Select';

export const ExampleForm: FC = () => {
  const form = useForm();

  console.log('form', form.watch());

  return (
    <Form form={form}>
      <Input
        name={'input'}
        label={'Input Test'}
        placeholder={'Input Placeholder'}
        defaultValue={'Input Default Value'}
      />
      <Radio
        defaultValue={'radio-1'}
        options={[
          { label: 'Radio 1', value: 'radio-1' },
          { label: 'Radio 2', value: 'radio-2' },
        ]}
        name={'radio'}
      />
      <Select
        name={'Select'}
        options={[
          { label: 'Select', value: 'select-1' },
          { label: 'Select 2', value: 'select-2' },
        ]}
      />
      <Button type='submit' className='w-full'>
        Submit
      </Button>
    </Form>
  );
};
