import { Action } from 'redux';

export enum ActionType {
  INCREMENT = 'COUNTER/INCREMENT',
  DECREMENT = 'COUNTER/DECREMENT',
  ON_CLICK_INCREMENT = 'USER_ACTION/ON_CLICK/INCREMENT',
  ON_CLICK_DECREMENT = 'USER_ACTION/ON_CLICK/DECREMENT',
  ON_CLICK_INCREMENT_IF_ODD = 'USER_ACTION/ON_CLICK/INCREMENT_IF_ODD',
  ON_CLICK_INCREMENT_ASYNC = 'USER_ACTION/ON_CLICK/INCREMENT_ASYNC',
}

export interface IncrementAction extends Action<ActionType.INCREMENT> {
  type: ActionType.INCREMENT;
  payload: number;
}

export interface DecrementAction extends Action<ActionType.DECREMENT> {
  type: ActionType.DECREMENT;
  payload: number;
}

export interface OnClickIncrementAction
  extends Action<ActionType.ON_CLICK_INCREMENT> {
  type: ActionType.ON_CLICK_INCREMENT;
}

export interface OnClickDecrementAction
  extends Action<ActionType.ON_CLICK_DECREMENT> {
  type: ActionType.ON_CLICK_DECREMENT;
}

export interface OnClickIncrementIfOddAction
  extends Action<ActionType.ON_CLICK_INCREMENT_IF_ODD> {
  type: ActionType.ON_CLICK_INCREMENT_IF_ODD;
}

export interface OnClickIncrementAsyncAction
  extends Action<ActionType.ON_CLICK_INCREMENT_ASYNC> {
  type: ActionType.ON_CLICK_INCREMENT_ASYNC;
}

export type Action =
  | IncrementAction
  | DecrementAction
  | OnClickIncrementAction
  | OnClickDecrementAction
  | OnClickIncrementIfOddAction
  | OnClickIncrementAsyncAction;
