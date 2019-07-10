import { Reducer } from 'redux';
import { RouterState, LocationChangeAction } from 'connected-react-router';
import { Action as CounterAction } from './ducks/counter/types';
import { State as CounterState } from './ducks/counter/reducer';

export type AppAction = LocationChangeAction | CounterAction;

export type CombinedReducers = Reducer<
  {
    router: RouterState;
    counter: CounterState;
  },
  AppAction
>;

export type AppState = ReturnType<CombinedReducers>;
