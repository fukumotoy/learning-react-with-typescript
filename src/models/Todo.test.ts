import Todo, { State } from './Todo';

it('updateState', (): void => {
  const content = 'サンプル';
  const todo = new Todo({
    content,
  });
  const newState = State.Doing;

  expect(todo.change(newState).state).toEqual(newState);
});
