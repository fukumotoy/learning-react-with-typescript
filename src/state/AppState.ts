import { Reducer } from 'redux';
import { RouterState, LocationChangeAction } from 'connected-react-router';
import { Action as CounterAction } from './ducks/counter/types';
import { State as CounterState } from './ducks/counter/reducer';
import { Action as TodoAction } from './ducks/todo/types';
import { State as TodoState } from './ducks/todo/reducer';

export type AppAction = LocationChangeAction | CounterAction | TodoAction;

export type CombinedReducers = Reducer<
  {
    router: RouterState;
    counter: CounterState;
    todos: TodoState;
  },
  AppAction
>;

export type AppState = ReturnType<CombinedReducers>;
