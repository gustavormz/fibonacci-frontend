import React from 'react';

const ContainerRoot = ({
  children
}: {
  children: React.ReactNode
}) => (
  <div className='root-container'>
    { children }
  </div>
);

export default ContainerRoot;
