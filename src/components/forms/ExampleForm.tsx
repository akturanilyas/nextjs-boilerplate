'use client';

import { FC } from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/base/button/Button';
import Form from '@/components/base/form/Form';
import { Input } from '@/components/form-elements/input/Input';
import { Radio } from '@/components/form-elements/radio/Radio.';
import Select from '@/components/form-elements/select/Select';
import BasicSelect from '@/components/form-elements/select/Testing';

export const ExampleForm: FC = () => {
  const form = useForm();

  return (
    <Form onSubmit={form.handleSubmit((data) => console.log(data))}>
      <Input
        form={form}
        name={'input'}
        label={'Input Test'}
        placeholder={'Input Placeholder'}
        defaultValue={'Input Default Value'}
      />
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
        <BasicSelect></BasicSelect>
      <Button type='submit' className='w-full'>
        Submit
      </Button>
    </Form>
  );
};
