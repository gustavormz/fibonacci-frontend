import React, { FC, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const InputBase: FC<IInputProps> = ({
  name,
  ...restProps
}) => (
  <div className='input-base-container'>
    <label htmlFor='input-n-term'>{ name }</label>
    <input className='input-base' type={'number'} id='input-n-term' { ...restProps } />
  </div>
);

export default InputBase;
