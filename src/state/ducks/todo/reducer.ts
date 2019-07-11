import { List } from 'immutable';
import { ActionType, Action } from './types';
import Todo from '../../../models/Todo';

export type State = List<Todo>;

export const initialState: State = List<Todo>();

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.ADD:
      return state.push(action.payload);

    case ActionType.REMOVE:
      return state.filter(
        (todo: Todo): boolean => todo.id !== action.payload.id
      );

    case ActionType.UPDATE_STATE:
      return state.map(
        (todo: Todo): Todo => {
          if (todo.id !== action.meta.id) {
            return todo;
          }

          return todo.change(action.payload);
        }
      );

    default:
      return state;
  }
};

export default reducer;
