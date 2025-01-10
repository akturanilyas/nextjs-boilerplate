import { BaseViewProps } from './BaseView.interface';
import { cn } from '@/utils/common.util';

const BaseView = (props: BaseViewProps) => {
  const { className } = props;

  const classes = cn('flex flex-col', className);

  return (
    <div {...props} className={classes}>
      {props.children}
    </div>
  );
};

export default BaseView;
