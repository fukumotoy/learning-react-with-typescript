import React, { FC } from 'react';
import Button from '../../../components/Button';

interface Props {
  onClickIncrement: (amount?: number) => void;
  onClickDecrement: (amount?: number) => void;
  onClickIncrementIfOdd: () => void;
  onClickIncrementAsync: () => void;
}

const CounterButtonGroup: FC<Props> = ({
  onClickIncrement,
  onClickDecrement,
  onClickIncrementIfOdd,
  onClickIncrementAsync,
}: Props): JSX.Element => (
  <div className="CounterButtonGroup">
    <Button
      onClick={(): void => {
        onClickIncrement();
      }}
      data-test="increment"
    >
      increment
    </Button>
    <Button
      onClick={(): void => {
        onClickDecrement();
      }}
    >
      decrement
    </Button>
    <Button
      onClick={(): void => {
        onClickIncrementIfOdd();
      }}
    >
      increment (odd only)
    </Button>
    <Button
      onClick={(): void => {
        onClickIncrementAsync();
      }}
    >
      increment async
    </Button>
  </div>
);

export default CounterButtonGroup;
