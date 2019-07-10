import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import pages from './pages';

const Router: FC = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={pages.HomePage} />
    <Route path="/counter" component={pages.CounterPage} />
    <Route path="/modal" component={pages.ModalPage} />
  </Switch>
);

export default Router;
