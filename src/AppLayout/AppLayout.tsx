import React, { FC, ReactNode } from 'react';
import Nav from './Nav';

interface Props {
  children: ReactNode;
}

const AppLayout: FC<Props> = ({ children }: Props): JSX.Element => (
  <div className="AppLayout">
    <div className="AppLayout__header">
      <Nav />
    </div>
    <div className="AppLayout__body">{children}</div>
  </div>
);

export default AppLayout;
