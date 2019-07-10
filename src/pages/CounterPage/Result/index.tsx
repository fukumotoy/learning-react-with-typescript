import { connect } from 'react-redux';
import Result from './Result';
import { AppState } from '../../../state/AppState';

function mapStateToProps({
  counter = 0,
}: AppState): {
  count: number;
} {
  return {
    count: counter,
  };
}

export default connect(
  mapStateToProps,
  null
)(Result);
