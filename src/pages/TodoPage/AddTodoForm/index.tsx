import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AddTodoForm from './AddTodoForm';
import { actions } from '../../../state/ducks/todo';
import { OnAddAction } from '../../../state/ducks/todo/types';

function mapDispatchToProps(
  dispatch: Dispatch
): {
  onAdd: (content: string) => OnAddAction;
} {
  return bindActionCreators(
    {
      onAdd: actions.onAdd,
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(AddTodoForm);
