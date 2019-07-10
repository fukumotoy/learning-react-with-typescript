/* eslint-disable import/no-extraneous-dependencies */
import {
  increment,
  decrement,
  onClickIncrement,
  onClickDecrement,
  onClickIncrementIfOdd,
  onClickIncrementAsync,
} from './actions';

describe('Match Snapshot', (): void => {
  it('increment', (): void => {
    expect(increment()).toMatchSnapshot();
  });

  it('decrement', (): void => {
    expect(decrement()).toMatchSnapshot();
  });

  it('increment(5)', (): void => {
    expect(increment(5)).toMatchSnapshot();
  });

  it('decrement(5)', (): void => {
    expect(decrement(5)).toMatchSnapshot();
  });

  it('onClickIncrement', (): void => {
    expect(onClickIncrement()).toMatchSnapshot();
  });

  it('onClickDecrement', (): void => {
    expect(onClickDecrement()).toMatchSnapshot();
  });

  it('onClickIncrementIfOdd', (): void => {
    expect(onClickIncrementIfOdd()).toMatchSnapshot();
  });

  it('onClickIncrementAsync', (): void => {
    expect(onClickIncrementAsync()).toMatchSnapshot();
  });
});
