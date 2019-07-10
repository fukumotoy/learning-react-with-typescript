import React, { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import Router from './Router';

const Root: FC = (): JSX.Element => (
  <HashRouter>
    <Router />
  </HashRouter>
);

export default Root;
