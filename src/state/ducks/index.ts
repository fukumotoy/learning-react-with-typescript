import { combineReducers } from 'redux';
import { connectRouter, routerActions } from 'connected-react-router';
import { History } from 'history';
import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import counter, {
  actions as counterActions,
  sagas as counterSagas,
} from './counter';
import todos, { actions as todoActions, sagas as todoSagas } from './todo';
import { CombinedReducers } from '../AppState';

export const actions = {
  ...routerActions,
  ...counterActions,
  ...todoActions,
};

export default function createRootReducer(history: History): CombinedReducers {
  return combineReducers({ router: connectRouter(history), counter, todos });
}

export function* rootSaga(): SagaIterator {
  yield all([yield fork(counterSagas), yield fork(todoSagas)]);
}
