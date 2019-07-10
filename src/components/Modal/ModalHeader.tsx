import React, { ElementType, FC, HTMLProps, useContext } from 'react';
import classnames from 'classnames';
import ModalContext from './ModalContext';

interface Props extends HTMLProps<HTMLElement> {
  asElement?: ElementType;
}

const ModalHeader: FC<Props> = ({
  asElement: Component = 'div',
  children,
  className,
  ...props
}: Props): JSX.Element => {
  const { dismiss } = useContext(ModalContext);

  return (
    <Component {...props} className={classnames('Modal__header', className)}>
      {children}

      <button
        type="button"
        className="Modal__dismiss"
        aria-label="閉じる"
        onClick={dismiss}
      >
        <span aria-hidden="true">&times;</span>
      </button>
    </Component>
  );
};

export default ModalHeader;
