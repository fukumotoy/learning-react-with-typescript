import React, { FC } from 'react';

interface Props {
  count: number;
}

const Result: FC<Props> = ({ count }: Props): JSX.Element => (
  <div className="Result" data-test="result">
    {count}
  </div>
);

export default Result;
