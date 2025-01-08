import { UseFormReturn } from 'react-hook-form';

export type BaseFormElementProps = {
  name: string;
  form: UseFormReturn;
  label?: string;
};
