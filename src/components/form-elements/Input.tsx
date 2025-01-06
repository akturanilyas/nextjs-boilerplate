import { BaseInput } from '@/components/base/input/BaseInput';
import { FC } from 'react';
import BaseView from '@/components/base/view/BaseView';
import { InputLabel } from '@mui/material';

export type InputProps = { name: string; label: string };

export const Input: FC<InputProps> = (props) => {
  const a = '';

  return (
    <BaseView>
      <BaseInput {...props} />
    </BaseView>
  );
};
