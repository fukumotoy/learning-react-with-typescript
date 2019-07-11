import React, { FC } from 'react';
import Button from '../../../../components/Button';

interface Props {
  content: string;
}

const Todo: FC<Props> = ({ content }: Props): JSX.Element => {
  return (
    <div className="Todo">
      {content}
      <Button className="Todo__removeButton">remove</Button>
    </div>
  );
};

export default Todo;
