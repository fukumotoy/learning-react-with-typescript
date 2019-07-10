import React, { ElementType, FC, HTMLProps } from 'react';
import classnames from 'classnames';

interface Props extends HTMLProps<HTMLElement> {
  asElement?: ElementType;
}

const ModalTitle: FC<Props> = ({
  asElement: Component = 'div',
  children,
  className,
  ...props
}: Props): JSX.Element => (
  <Component {...props} className={classnames('Modal__title', className)}>
    {children}
  </Component>
);

export default ModalTitle;
