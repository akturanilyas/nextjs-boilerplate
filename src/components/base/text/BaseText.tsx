import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TextProps } from './BaseText.interface';
import { Trans } from 'react-i18next';

const BaseText: FC<TextProps> = (props) => {
  const { text, options, className, customContent } = props;

  const classes = twMerge(`
    text-slate
    dark:text-slate-200
    ${className || ''}
  `);

  return (
    <span className={classes}>
      <Trans i18nKey={text} values={options}>
        {customContent}
      </Trans>
    </span>
  );
};

export default BaseText;
