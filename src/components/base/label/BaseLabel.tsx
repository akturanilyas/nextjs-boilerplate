import { FC } from 'react';
import { BaseLabelProps } from './BaseLabel.interface';
import BaseText from '@/components/base/text/BaseText';
import { cn } from '@/utils/common.util';

const BaseLabel: FC<BaseLabelProps> = (props) => {
  const { name, text, className, htmlFor, isRequired } = props;

  const classes = cn('text-xs', className);

  const textClasses = cn(className);

  return (
    <label data-testid={`label.${name || 'test-id'}`} htmlFor={htmlFor} className={classes}>
      {text}
      {isRequired && <BaseText className={textClasses} text={'*'} />}
    </label>
  );
};

export default BaseLabel;
