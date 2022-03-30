import React from 'react';

import { useAppContext as useFibonacciContext } from '../context/store/fibonacci';

const Result = () => {
  const { state } = useFibonacciContext();
  return (
    <>
      <h3>Fibonacci Result: </h3>
      <p>{ state.result }</p>
    </>
  );
};

export default Result;
