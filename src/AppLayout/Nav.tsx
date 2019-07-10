import React, { FC } from 'react';
import { Link } from 'react-router-dom';

const Nav: FC = (): JSX.Element => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/counter">Counter</Link>
    </li>
    <li>
      <Link to="/modal">Modal</Link>
    </li>
  </ul>
);

export default Nav;
