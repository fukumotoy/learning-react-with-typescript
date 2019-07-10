import React, { FC, useEffect } from 'react';

const HomePage: FC = (): JSX.Element => {
  useEffect((): void => {
    document.title = 'Home';
  });

  return <div>HomePage</div>;
};

export default HomePage;
