import { BaseFormElementProps } from '@/components/form-elements/BaseFormElementInterface';
import { BaseInputMaskProps } from '@/components/base/mask/BaseInputMask.interface';

export type InputMaskProps = BaseInputMaskProps &
  BaseFormElementProps & {
    errorMessage?: Record<string, unknown>;
    underlineInfo?: { label: string; className?: string };
  };
