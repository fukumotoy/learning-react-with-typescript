import React, { FC } from 'react';
import { Switch, Route } from 'react-router';
import pages from './pages';

const Router: FC = (): JSX.Element => (
  <Switch>
    <Route path="/" exact component={pages.HomePage} />
    <Route path="/counter" component={pages.CounterPage} />
    <Route path="/modal" component={pages.ModalPage} />
    <Route path="/todo" component={pages.TodoPage} />
  </Switch>
);

export default Router;
