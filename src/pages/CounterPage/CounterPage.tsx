import React, { FC, useEffect } from 'react';
import Result from './Result';
import CounterButtonGroup from './CounterButtonGroup';

const CounterPage: FC = (): JSX.Element => {
  useEffect((): void => {
    document.title = 'Counter';
  });

  return (
    <div>
      <h2>Counter</h2>

      <Result />

      <CounterButtonGroup />
    </div>
  );
};

export default CounterPage;
