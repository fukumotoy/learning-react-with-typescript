import { AnyAction, combineReducers, Reducer } from 'redux';

export type AppAction = AnyAction;
type CombinedReducers = Reducer<{}, AppAction>;

export const actions = {};

export default function createRootReducer(): CombinedReducers {
  return combineReducers({});
}
