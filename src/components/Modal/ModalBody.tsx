import React, { FC, ReactNode, ElementType } from 'react';

interface Props {
  asElement?: ElementType;
  children?: ReactNode;
}

const ModalBody: FC<Props> = ({
  asElement: Component = 'div',
  children,
}: Props): JSX.Element => (
  <Component className="Modal__body">{children}</Component>
);

export default ModalBody;
