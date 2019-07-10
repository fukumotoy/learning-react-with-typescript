import {
  ActionType,
  IncrementAction,
  DecrementAction,
  OnClickIncrementAction,
  OnClickDecrementAction,
  OnClickIncrementIfOddAction,
  OnClickIncrementAsyncAction,
} from './types';

export const increment = (amount: number = 1): IncrementAction => ({
  type: ActionType.INCREMENT,
  payload: amount,
});

export const decrement = (amount: number = 1): DecrementAction => ({
  type: ActionType.DECREMENT,
  payload: amount,
});

export const onClickIncrement = (): OnClickIncrementAction => ({
  type: ActionType.ON_CLICK_INCREMENT,
});

export const onClickDecrement = (): OnClickDecrementAction => ({
  type: ActionType.ON_CLICK_DECREMENT,
});

export const onClickIncrementIfOdd = (): OnClickIncrementIfOddAction => ({
  type: ActionType.ON_CLICK_INCREMENT_IF_ODD,
});

export const onClickIncrementAsync = (): OnClickIncrementAsyncAction => ({
  type: ActionType.ON_CLICK_INCREMENT_ASYNC,
});

export default {
  increment,
  decrement,
  onClickIncrement,
  onClickDecrement,
  onClickIncrementIfOdd,
  onClickIncrementAsync,
};
