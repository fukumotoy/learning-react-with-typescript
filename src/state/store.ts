import {
  createStore,
  applyMiddleware,
  compose,
  Middleware,
  StoreEnhancer,
  Store as ReduxStore,
} from 'redux';
import createRootReducer, { actions, AppAction } from './ducks';

const rootReducer = createRootReducer();

export type AppState = ReturnType<typeof rootReducer>;
export type Store = ReduxStore<AppState, AppAction>;

const configureStore = (initialState?: AppState): Store => {
  // Redux Configuration
  const middleware: Middleware[] = [];
  const enhancers = [];

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
