import { FieldErrors, RegisterOptions, UseFormReturn } from 'react-hook-form';
import { get } from '@/utils/common.util';

export interface GetInputErrorLabelParams {
  errorMessage: RegisterOptions;
  form: UseFormReturn;
  name: string;
}

export const getInputErrorLabel = ({ errorMessage, form, name }: GetInputErrorLabelParams) =>
  (get(errorMessage, get(form.formState.errors, name)?.type as keyof FieldErrors) || '') as string;
