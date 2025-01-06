import { FieldValues, FormProvider, UseFormReturn } from 'react-hook-form';
import { PropsWithChildren } from 'react';

export type FormProps<T extends FieldValues> = PropsWithChildren<{
  form: UseFormReturn<T>;
}>;

const Form = <T extends FieldValues>({ form, children }: FormProps<T>) => <FormProvider {...form}>{children}</FormProvider>;

export default Form;
