import { VariantProps } from 'class-variance-authority';
import { button } from '@/components/base/Button.style';
import { PropsWithClassName } from '@/types/common.type';
import { ButtonProps as MuiButtonProps } from '@mui/material/Button';

export type ButtonProps =MuiButtonProps& PropsWithClassName<VariantProps<typeof button>>;

