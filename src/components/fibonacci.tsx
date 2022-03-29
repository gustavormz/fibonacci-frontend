import React, {
  useContext,
  ChangeEvent
} from 'react';

import ContainerFibonacci from './container/fibonacci';
import InputBase from './input/base';
import Result from './result';

import { Store as FibonacciStore} from '../context/store/fibonacci';
import { Types } from '../context/reducer/fibonacci';
import Api from '../api';

const Fibonacci = () => {
  const { state, dispatch } = useContext(FibonacciStore);

  const handleOnChange = async (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    let nTerm = 0;
    try {
      nTerm = parseInt(event.target.value, 10);
    } catch (error) {
      nTerm = 0;
    }

    dispatch({
      type: Types.SET_N_TERM,
      payload: { nTerm }
    });

    const response = await Api().getNTermFibonacci({ nTerm });
    const result = response.error ?
      response.message:
      response.data.nTerm;
    dispatch({
      type: Types.SET_RESULT,
      payload: {
        result
      }
    });
  };

  return (
    <ContainerFibonacci>
      <div className='top-fibonacci'>
        <InputBase
          name={ 'N term' }
          min={ 0 }
          max={ 78 }
          value={ state.nTerm }
          type={ 'number' }
          onChange={ handleOnChange }/>
      </div>
      <div className='bottom-fibonacci'>
        <Result />
      </div>
    </ContainerFibonacci>
  );
};

export default Fibonacci;
