import { FC, useRef } from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseLabelProps } from './BaseLabel.interface';
import BaseText from '@/components/base/text/BaseText';

const BaseLabel: FC<BaseLabelProps> = (props) => {
  const { name, text, className, htmlFor, isRequired } = props;
  const labelRef = useRef<HTMLLabelElement>(null);

  const classes = twMerge(`
    text-slate-600 
    dark:text-slate-200
    text-xs

    ${className || ''}
    text-ellipsis flex-wrap whitespace-nowrap max-w-[200px] truncate
  `);

  const textClasses = twMerge(`
    ${className || ''}
  `);

  return (
    <label ref={labelRef} data-testid={`label.${name || 'test-id'}`} htmlFor={htmlFor} className={classes}>
      {/* TODO implement translate */}
      {text}
      {isRequired && <BaseText className={textClasses} text={'*'} />}
    </label>
  );
};

export default BaseLabel;
