import { BaseInput } from '@/components/base/input/BaseInput';
import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';

export type InputProps = { name: string; label: string };

export const Input: FC<InputProps> = (props) => (
  <BaseView>
    <BaseInput {...props} />
  </BaseView>
);
