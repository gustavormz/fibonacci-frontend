import React, { useContext } from 'react';

import { Store as ThemeStore } from '../../context/store/theme';

const ContainerFibonacci = ({
  children
}: {
  children: React.ReactNode
}) => {
  const { state } = useContext(ThemeStore);

  return (
    <div className={ `fibonacci-container ${state.isDark && 'dark-secondary'}` }>
      { children }
    </div>
  );
};

export default ContainerFibonacci;
