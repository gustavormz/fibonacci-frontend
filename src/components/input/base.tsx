import React, { FC, InputHTMLAttributes } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
};

const InputBase: FC<IInputProps> = ({
  name,
  ...restProps
}) => (
  <div className='input-base-container'>
    <label>{ name }</label>
    <input
      className='input-base'
      { ...restProps } />
  </div>
);

export default InputBase;
