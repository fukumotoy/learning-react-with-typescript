import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import pages from './pages';

const Router: FC = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={pages.HomePage} />
  </Switch>
);

export default Router;
