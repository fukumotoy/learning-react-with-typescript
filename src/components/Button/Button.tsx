import React, { FC, HTMLProps } from 'react';
import classnames from 'classnames';

const Button: FC<HTMLProps<HTMLButtonElement>> = ({
  children,
  className,
  ...props
}: HTMLProps<HTMLButtonElement>): JSX.Element => {
  return (
    <button
      {...props}
      className={classnames('Button', className)}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
