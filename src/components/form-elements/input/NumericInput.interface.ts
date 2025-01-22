import { BaseFormElementProps } from '@/components/form-elements/BaseFormElementInterface';
import { BaseNumericInputProps } from '@/components/base/numeric-input/BaseNumericInput.interface';

export type NumericInputProps = BaseNumericInputProps &
  BaseFormElementProps & {
    errorMessage?: Record<string, unknown>;
    underlineInfo?: { label: string; className?: string };
  };
