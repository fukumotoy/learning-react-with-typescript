import React, { FC } from 'react';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Router from './Router';
import { Store } from './state/store';

interface Props {
  store: Store;
}

const Root: FC<Props> = ({ store }: Props): JSX.Element => (
  <Provider store={store}>
    <HashRouter>
      <Router />
    </HashRouter>
  </Provider>
);

export default Root;
