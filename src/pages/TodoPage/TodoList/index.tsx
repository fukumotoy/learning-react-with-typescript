import { connect } from 'react-redux';
import { List } from 'immutable';
import TodoList from './TodoList';
import { AppState } from '../../../state/AppState';
import Todo from '../../../models/Todo';

function mapStateToProps({
  todos,
}: AppState): {
  todos: List<Todo>;
} {
  return {
    todos,
  };
}

export default connect(
  mapStateToProps,
  null
)(TodoList);
