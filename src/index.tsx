import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Root from './Root';
import configureStore from './state/store';

const store = configureStore();

ReactDOM.render(<Root store={store} />, document.getElementById('root'));
