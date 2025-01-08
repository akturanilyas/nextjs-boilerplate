import { Control } from 'react-hook-form';

export type BaseFormElementProps = {
  name: string;
  control?: Control;
  label?: string;
};
