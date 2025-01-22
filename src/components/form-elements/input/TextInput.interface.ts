import { BaseInputProps } from '@/components/base/text-input/BaseInput.interface';
import { BaseFormElementProps } from '@/components/form-elements/BaseFormElementInterface';

export type TextInputProps = BaseInputProps &
  BaseFormElementProps & {
    errorMessage?: Record<string, unknown>;
    underlineInfo?: { label: string; className?: string };
  };
