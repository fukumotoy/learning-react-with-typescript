import React, { FC, ReactNode, HTMLAttributes } from 'react';
import { createPortal } from 'react-dom';
import ModalWrapper from './ModalWrapper';
import ModalContext from './ModalContext';
import ModalHeader from './ModalHeader';
import ModalBody from './ModalBody';
import ModalFooter from './ModalFooter';
import ModalTitle from './ModalTitle';

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  dismiss: () => void;
  open?: boolean;
}

const Modal: FC<Props> & {
  Header: typeof ModalHeader;
  Body: typeof ModalBody;
  Footer: typeof ModalFooter;
  Title: typeof ModalTitle;
} = ({
  children,
  className,
  dismiss,
  open = false,
  ...props
}: Props): JSX.Element | null => {
  const root = document.getElementById('root');

  if (!open || !root) {
    return null;
  }

  return createPortal(
    <ModalContext.Provider
      value={{
        dismiss,
      }}
    >
      <ModalWrapper {...props} className={className} dismiss={dismiss}>
        <div className="Modal__dialog" role="document">
          <div className="Modal__content">{children}</div>
        </div>
      </ModalWrapper>
    </ModalContext.Provider>,
    root
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Title = ModalTitle;

export default Modal;
