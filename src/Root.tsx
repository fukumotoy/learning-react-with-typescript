import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import Router from './Router';
import AppLayout from './AppLayout';
import { Store } from './state/store';

interface Props {
  store: Store;
  history: History;
}

const Root: FC<Props> = ({ store, history }: Props): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <AppLayout>
        <Router />
      </AppLayout>
    </ConnectedRouter>
  </Provider>
);

export default Root;
