import React, { useContext } from 'react';

import { Store as FibonacciStore} from '../context/store/fibonacci';

const Result = () => {
  const { state } = useContext(FibonacciStore);
  return (
    <>
      <h3>Fibonacci Result: </h3>
      <p>{ state.result }</p>
    </>
  );
};

export default Result;
