import React from 'react';

const ContainerFibonacci = ({
  children
}: {
  children: React.ReactNode
}) => (
  <div className='fibonacci-container'>
    { children }
  </div>
);

export default ContainerFibonacci;
