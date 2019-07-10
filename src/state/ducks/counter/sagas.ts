import { put, takeEvery, delay, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { ActionType } from './types';
import { increment, decrement } from './actions';
import * as selectors from './selectors';

export function* onIncrement(): SagaIterator {
  yield put(increment());
}

export function* onDecrement(): SagaIterator {
  yield put(decrement());
}

export function* onIncrementIfOdd(): SagaIterator {
  const count: number = yield select(selectors.getCount);

  if (count % 2 !== 0) {
    yield put(increment());
  }
}

export function* onIncrementAsync(): SagaIterator {
  yield delay(1000);
  yield put(increment());
}

export default function* counterSaga(): SagaIterator {
  yield takeEvery(ActionType.ON_CLICK_INCREMENT, onIncrement);
  yield takeEvery(ActionType.ON_CLICK_DECREMENT, onDecrement);
  yield takeEvery(ActionType.ON_CLICK_INCREMENT_IF_ODD, onIncrementIfOdd);
  yield takeEvery(ActionType.ON_CLICK_INCREMENT_ASYNC, onIncrementAsync);
}
