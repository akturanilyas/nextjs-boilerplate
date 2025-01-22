import { FC } from 'react';
import { ButtonProps } from '@/components/base/button/Button.type';
import { cn } from '@/utils/common.util';
import { button } from '@/components/base/button/Button.style';
import { Button as PrimeButton } from 'primereact/button';

export const Button: FC<ButtonProps> = (props) => {
  const { className, variant, children } = props;

  return (
    <PrimeButton {...props} className={cn(button({ className, variant }), 'p-0')} pt={{ root: { className: cn(button({ className, variant })) } }} >
      {children}
    </PrimeButton>
  );
};
