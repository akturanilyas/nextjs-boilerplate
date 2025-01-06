import { FC } from 'react';
import { UseFormReturn } from 'react-hook-form';
import { Button } from '@/components/base/button/Button';
import Form from '@/components/base/form/Form';
import { Input } from '@/components/form-elements/Input';

export type ExampleFormProps = {
  form: UseFormReturn;
};

export const ExampleForm: FC<ExampleFormProps> = (props) => {
  const { form } = props;

  return (
    <Form form={form}>
      <Input name={'test'} label={'label'} />
      <Button type='submit' className='w-full'>
        Submit
      </Button>
    </Form>
  );
};
