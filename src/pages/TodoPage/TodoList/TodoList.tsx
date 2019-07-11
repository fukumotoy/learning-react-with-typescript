import React, { FC } from 'react';
import { List } from 'immutable';
import Todo from './Todo';
import TodoModel from '../../../models/Todo';

interface Props {
  todos: List<TodoModel>;
}

const TodoList: FC<Props> = ({ todos }: Props): JSX.Element => (
  <div className="TodoLit">
    {todos.map(
      (todo: TodoModel): JSX.Element => (
        <Todo content={todo.content} key={todo.id} />
      )
    )}
  </div>
);

export default TodoList;
