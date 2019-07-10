import React from 'react';
import ReactDOM from 'react-dom';
import { createHashHistory } from 'history';
import Root from './Root';
import configureStore from './state/store';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  const history = createHashHistory();
  const store = configureStore();

  ReactDOM.render(<Root history={history} store={store} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
