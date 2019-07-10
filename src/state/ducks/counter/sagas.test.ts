/* eslint-disable import/no-extraneous-dependencies */
import { select } from 'redux-saga/effects';
import { testSaga, expectSaga, RunResult } from 'redux-saga-test-plan';
import root, {
  onIncrement,
  onDecrement,
  onIncrementIfOdd,
  onIncrementAsync,
} from './sagas';
import * as selectors from './selectors';
import { ActionType } from './types';
import { increment, decrement } from './actions';

it('couterRootSaga', (): void => {
  testSaga(root)
    .next()
    .takeEvery(ActionType.ON_CLICK_INCREMENT, onIncrement)

    .next()
    .takeEvery(ActionType.ON_CLICK_DECREMENT, onDecrement)

    .next()
    .takeEvery(ActionType.ON_CLICK_INCREMENT_IF_ODD, onIncrementIfOdd)

    .next()
    .takeEvery(ActionType.ON_CLICK_INCREMENT_ASYNC, onIncrementAsync)

    .finish()
    .isDone();
});

it('onIncrement', (): Promise<RunResult> => {
  return expectSaga(onIncrement)
    .put(increment())
    .run();
});

it('onDecrement', (): Promise<RunResult> => {
  return expectSaga(onDecrement)
    .put(decrement())
    .run();
});

describe('onIncrementIfOdd', (): void => {
  it('with odd', (): Promise<RunResult> => {
    return expectSaga(onIncrementIfOdd)
      .provide([[select(selectors.getCount), 1]])
      .put(increment())
      .run();
  });

  it('with even', (): Promise<RunResult> => {
    return expectSaga(onIncrementIfOdd)
      .provide([[select(selectors.getCount), 2]])
      .run();
  });
});

it('onIncrementAsync', (): Promise<RunResult> => {
  return expectSaga(onIncrementAsync)
    .put(increment())
    .run(2000);
});
