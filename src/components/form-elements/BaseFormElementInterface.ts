import { RegisterOptions, UseFormReturn } from 'react-hook-form';

export type BaseFormElementProps = {
  name: string;
  form: UseFormReturn;
  label?: string;
  defaultValue?: unknown;
  rules?: RegisterOptions;
};
