import React, {
  FC,
  InputHTMLAttributes,
  useContext,
  ChangeEvent
} from 'react';

import { Store as FibonacciStore} from '../../context/store/fibonacci';
import { Types } from '../../context/reducer/fibonacci';
import Api from '../../api';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputBase: FC<IInputProps> = ({
  name,
  ...restProps
}) => {
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
    <div className='input-base-container'>
      <label htmlFor='input-n-term'>{ name }</label>
      <input
        min={ 0 }
        max={ 78 }
        value={ state.nTerm }
        onChange={ handleOnChange }
        className='input-base'
        type={ 'number' }
        id='input-n-term'
        { ...restProps } />
    </div>
  )
};

export default InputBase;
