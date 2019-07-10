import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import pages from './pages';

const Router: FC = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={pages.HomePage} />
    <Route path="/counter" component={pages.CounterPage} />
  </Switch>
);

export default Router;
