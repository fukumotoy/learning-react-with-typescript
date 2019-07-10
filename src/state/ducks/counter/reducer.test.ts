/* eslint-disable import/no-extraneous-dependencies */
import snapshotDiff from 'snapshot-diff';
import reducer, { initialState, State } from './reducer';
import { increment, decrement } from './actions';

it('increment', (): void => {
  const state: State = reducer(initialState, increment());
  expect(snapshotDiff(initialState, state)).toMatchSnapshot();
});

it('decrement', (): void => {
  const state: State = reducer(initialState, decrement());
  expect(snapshotDiff(initialState, state)).toMatchSnapshot();
});
