import React from 'react';

const ContainerBase = ({
  children
}: {
  children: React.ReactNode
}) => (
  <main className='base-container'>
    { children }
  </main>
);

export default ContainerBase;
