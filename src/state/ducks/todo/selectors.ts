import { List } from 'immutable';
import { AppState } from '../../AppState';
import Todo from '../../../models/Todo';

export const getTodos = (state: AppState): List<Todo> => state.todos;

export const findTodo = (
  state: AppState,
  predicate: (todo: Todo) => boolean
): Todo | undefined => state.todos.find(predicate);
