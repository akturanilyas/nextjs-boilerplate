import { FC } from 'react';
import { BaseLabelProps } from './BaseLabel.interface';
import BaseText from '@/components/base/text/BaseText';
import Trans from '@/components/base/text/Trans';
import { FormLabel } from '@mui/material';
import { cn } from '@/utils/common.util';

const BaseLabel: FC<BaseLabelProps> = (props) => {
  const { name, text, className, htmlFor, isRequired } = props;

  const classes = cn('text-xs', className);

  const textClasses = cn(className);

  return (
    <FormLabel id={`label.${name || 'test-id'}`} data-testid={`label.${name || 'test-id'}`} htmlFor={htmlFor} className={classes}>
      <Trans i18nKey={text} />
      {isRequired && <BaseText className={textClasses} text={'*'} />}
    </FormLabel>
  );
};

export default BaseLabel;
