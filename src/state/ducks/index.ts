import { combineReducers, Reducer } from 'redux';
import {
  connectRouter,
  LocationChangeAction,
  routerActions,
  RouterState,
} from 'connected-react-router';
import { History } from 'history';
import { SagaIterator } from 'redux-saga';
import { all } from 'redux-saga/effects';

export type AppAction = LocationChangeAction;
type CombinedReducers = Reducer<{ router: RouterState }, AppAction>;

export const actions = {
  ...routerActions,
};

export default function createRootReducer(history: History): CombinedReducers {
  return combineReducers({ router: connectRouter(history) });
}

export function* rootSaga(): SagaIterator {
  yield all([]);
}
