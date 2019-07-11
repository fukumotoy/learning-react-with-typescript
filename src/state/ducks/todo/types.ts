import { Action } from 'redux';
import Todo, { State, Id, Content } from '../../../models/Todo';

export enum ActionType {
  ADD = 'TODO/ADD',
  REMOVE = 'TODO/REMOVE',
  UPDATE_STATE = 'TODO/UPDATE_STATE',
  ON_ADD = 'USER_ACTION/TODO/ON_ADD',
  ON_REMOVE = 'USER_ACTION/TODO/ON_REMOVE',
  ON_UPDATE_STATE = 'USER_ACTION/TODO/ON_UPDATE_STATE',
}

export interface AddAction extends Action<ActionType.ADD> {
  type: ActionType.ADD;
  payload: Todo;
}

export interface RemoveAction extends Action<ActionType.REMOVE> {
  type: ActionType.REMOVE;
  payload: Todo;
}

export interface UpdateStateAction extends Action<ActionType.UPDATE_STATE> {
  type: ActionType.UPDATE_STATE;
  payload: State;
  meta: Todo;
}

export interface OnAddAction extends Action<ActionType.ON_ADD> {
  type: ActionType.ON_ADD;
  payload: Content;
}

export interface OnRemoveAction extends Action<ActionType.ON_REMOVE> {
  type: ActionType.ON_REMOVE;
  payload: Id;
}

export interface OnUpdateStateAction
  extends Action<ActionType.ON_UPDATE_STATE> {
  type: ActionType.ON_UPDATE_STATE;
  payload: State;
  meta: Id;
}

export type Action =
  | AddAction
  | RemoveAction
  | UpdateStateAction
  | OnAddAction
  | OnRemoveAction
  | OnUpdateStateAction;
