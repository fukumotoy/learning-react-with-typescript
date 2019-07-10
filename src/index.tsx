import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './Root';
import configureStore, { history } from './state/store';

const store = configureStore();

ReactDOM.render(
  <Root store={store} history={history} />,
  document.getElementById('root')
);
