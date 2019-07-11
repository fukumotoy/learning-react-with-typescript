import {
  ActionType,
  AddAction,
  RemoveAction,
  UpdateStateAction,
  OnAddAction,
  OnRemoveAction,
  OnUpdateStateAction,
} from './types';
import Todo, { Content, Id, State } from '../../../models/Todo';

export const add = (todo: Todo): AddAction => ({
  type: ActionType.ADD,
  payload: todo,
});

export const remove = (todo: Todo): RemoveAction => ({
  type: ActionType.REMOVE,
  payload: todo,
});

export const updateState = (todo: Todo, state: State): UpdateStateAction => ({
  type: ActionType.UPDATE_STATE,
  payload: state,
  meta: todo,
});

export const onAdd = (content: Content): OnAddAction => ({
  type: ActionType.ON_ADD,
  payload: content,
});

export const onRemove = (id: Id): OnRemoveAction => ({
  type: ActionType.ON_REMOVE,
  payload: id,
});

export const onUpdateState = (id: Id, state: State): OnUpdateStateAction => ({
  type: ActionType.ON_UPDATE_STATE,
  payload: state,
  meta: id,
});

export default {
  add,
  remove,
  updateState,
  onAdd,
  onRemove,
  onUpdateState,
};
