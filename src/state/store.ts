import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  StoreEnhancer,
  Store as ReduxStore,
} from 'redux';
import { createHashHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import createRootReducer, { actions } from './ducks';
import { AppAction, AppState } from './AppState';

const history = createHashHistory();
const rootReducer = createRootReducer(history);
const sagaMiddleware = createSagaMiddleware();

export type AppState = ReturnType<typeof rootReducer>;
export type Store = ReduxStore<AppState, AppAction>;

const configureStore = (initialState?: AppState): Store => {
  // Redux Configuration
  const middleware: Middleware[] = [];
  const enhancers = [];

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux Saga Middleware
  middleware.push(sagaMiddleware);

  // Skip redux logs in console during the tests and production
  if (process.env.NODE_ENV === 'development') {
    // Logging Middleware
    // eslint-disable-next-line global-require, import/no-extraneous-dependencies, @typescript-eslint/no-var-requires
    const { createLogger } = require('redux-logger');
    const logger = createLogger({
      level: 'info',
      collapsed: true,
    });

    middleware.push(logger);
  }

  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle, @typescript-eslint/no-explicit-any */
  const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Options: http://extension.remotedev.io/docs/API/Arguments.html
        actions,
      })
    : compose;
  /* eslint-enable no-underscore-dangle, @typescript-eslint/no-explicit-any */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer: StoreEnhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(rootReducer, initialState, enhancer);

  return store;
};

export default configureStore;
export { history, sagaMiddleware };
