import { Record } from 'immutable';

export type Id = string;
export type Content = string;

export enum State {
  Todo,
  Doing,
  Done,
}

interface Props {
  id: Id;
  date: Date;
  state: State;
  content: Content;
}

const defaults: Props = {
  id: '',
  date: new Date(),
  state: State.Todo,
  content: '',
};

export default class Todo extends Record<Props>(defaults) implements Props {
  public change(state: State): Todo {
    return this.update('state', (): State => state);
  }
}
