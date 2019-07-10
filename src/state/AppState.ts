import { Reducer } from 'redux';
import { RouterState, LocationChangeAction } from 'connected-react-router';

export type AppAction = LocationChangeAction;

export type CombinedReducers = Reducer<
  {
    router: RouterState;
  },
  AppAction
>;

export type AppState = ReturnType<CombinedReducers>;
