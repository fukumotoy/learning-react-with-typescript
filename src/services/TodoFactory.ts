import _ from 'lodash';
import Todo, { State, Content } from '../models/Todo';

const create = (
  content: Content,
  date: Date = new Date(),
  state: State = State.Todo
): Todo =>
  new Todo({
    id: _.uniqueId(),
    date,
    state,
    content,
  });

export default create;
