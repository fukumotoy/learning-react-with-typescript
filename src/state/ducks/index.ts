import { combineReducers } from 'redux';
import { connectRouter, routerActions } from 'connected-react-router';
import { History } from 'history';
import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';
import { CombinedReducers } from '../AppState';

export const actions = {
  ...routerActions,
};

export default function createRootReducer(history: History): CombinedReducers {
  return combineReducers({ router: connectRouter(history) });
}

export function* rootSaga(): SagaIterator {
  yield all([]);
}
