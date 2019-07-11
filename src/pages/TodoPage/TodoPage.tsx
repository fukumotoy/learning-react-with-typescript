import React, { FC, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

const TodoPage: FC = (): JSX.Element => {
  useEffect((): void => {
    document.title = 'Todo';
  });

  return (
    <div>
      <h2>Todo</h2>

      <AddTodoForm />

      <TodoList />
    </div>
  );
};

export default TodoPage;
