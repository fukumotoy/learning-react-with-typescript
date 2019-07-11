import { put, takeEvery, select } from 'redux-saga/effects';
import { SagaIterator } from 'redux-saga';
import { List } from 'immutable';
import {
  ActionType,
  OnAddAction,
  OnRemoveAction,
  OnUpdateStateAction,
} from './types';
import { add, remove, updateState } from './actions';
import Todo from '../../../models/Todo';
import create from '../../../services/TodoFactory';
import * as selectors from './selectors';

export function* onAdd({ payload }: OnAddAction): SagaIterator {
  yield put(add(create(payload)));
}

export function* onRemove({ payload }: OnRemoveAction): SagaIterator {
  const todos: List<Todo> = yield select(selectors.getTodos);
  const todo = todos.find((_todo: Todo): boolean => _todo.id === payload);

  if (todo) {
    yield put(remove(todo));
  }
}

export function* onUpdateState({
  payload,
  meta,
}: OnUpdateStateAction): SagaIterator {
  const todos: List<Todo> = yield select(selectors.getTodos);
  const todo = todos.find((_todo: Todo): boolean => _todo.id === meta);

  if (todo) {
    yield put(updateState(todo, payload));
  }
}

export default function* todoSaga(): SagaIterator {
  yield takeEvery(ActionType.ON_ADD, onAdd);
  yield takeEvery(ActionType.ON_REMOVE, onRemove);
  yield takeEvery(ActionType.ON_UPDATE_STATE, onUpdateState);
}
