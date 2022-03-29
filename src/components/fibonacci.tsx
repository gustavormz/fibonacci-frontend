import React from 'react';

import ContainerFibonacci from './container/fibonacci';
import InputBase from './input/base';
import Result from './result';

const Fibonacci = () => {
  return (
    <ContainerFibonacci>
      <div className='top-fibonacci'>
        <InputBase name={ 'N term' } />
      </div>
      <div className='bottom-fibonacci'>
        <Result />
      </div>
    </ContainerFibonacci>
  );
};

export default Fibonacci;
