import { VariantProps } from 'class-variance-authority';
import { button } from '@/components/base/button/Button.style';
import { PropsWithClassName } from '@/types/common.type';
import { ButtonProps as PrimeButtonProps } from 'primereact/button';

export type ButtonProps = PrimeButtonProps & PropsWithClassName<VariantProps<typeof button>>;
