import { ActionType, Action } from './types';

export type State = number;

export const initialState: State = 0;

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.INCREMENT:
      return state + action.payload;
    case ActionType.DECREMENT:
      return state - action.payload;
    default:
      return state;
  }
};

export default reducer;
