import { FC } from 'react';
import { TextProps } from './BaseText.interface';
import Trans from '@/components/base/text/Trans';
import { cn } from '@/utils/common.util';
import { textStyle } from '@/components/base/text/BaseText.style';

const BaseText: FC<TextProps> = (props) => {
  const { text, options, className, customContent, size } = props;

  return (
    <span className={cn(textStyle({ className, size }))}>
      <Trans i18nKey={text} values={options}>
        {customContent}
      </Trans>
    </span>
  );
};

export default BaseText;
