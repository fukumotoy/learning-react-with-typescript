import { Dispatch, bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CounterButtonGroup from './CounterButtonGroup';
import { actions } from '../../../state/ducks/counter';
import {
  OnClickIncrementAction,
  OnClickDecrementAction,
  OnClickIncrementIfOddAction,
  OnClickIncrementAsyncAction,
} from '../../../state/ducks/counter/types';

function mapDispatchToProps(
  dispatch: Dispatch
): {
  onClickIncrement: () => OnClickIncrementAction;
  onClickDecrement: () => OnClickDecrementAction;
  onClickIncrementIfOdd: () => OnClickIncrementIfOddAction;
  onClickIncrementAsync: () => OnClickIncrementAsyncAction;
} {
  return bindActionCreators(
    {
      onClickIncrement: actions.onClickIncrement,
      onClickDecrement: actions.onClickDecrement,
      onClickIncrementIfOdd: actions.onClickIncrementIfOdd,
      onClickIncrementAsync: actions.onClickIncrementAsync,
    },
    dispatch
  );
}

export default connect(
  null,
  mapDispatchToProps
)(CounterButtonGroup);
