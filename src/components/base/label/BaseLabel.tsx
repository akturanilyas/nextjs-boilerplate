import { FC, useEffect, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { BaseLabelProps } from './BaseLabel.interface';

const BaseLabel: FC<BaseLabelProps> = (props) => {
  const { name, text, className, htmlFor, isRequired } = props;
  const labelRef = useRef<HTMLLabelElement>(null);
  const [isTextTruncated, setIsTextTruncated] = useState(false);

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

  useEffect(() => {
    const labelElement = labelRef.current;

    if (labelElement) {
      setIsTextTruncated(labelElement.scrollWidth > labelElement.clientWidth);
    }
  }, [text]);

  return (
    <label ref={labelRef} data-testid={`label.${name || 'test-id'}`} htmlFor={htmlFor} className={classes}>
      {isRequired && <BaseText className={textClasses} text={'*'} />}
    </label>
  );
};

export default BaseLabel;
