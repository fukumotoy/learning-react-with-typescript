import '@babel/polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './Root';
import configureStore, { history, sagaMiddleware } from './state/store';
import { rootSaga } from './state/ducks';

const store = configureStore();

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
