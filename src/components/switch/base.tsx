import React, { InputHTMLAttributes } from 'react';

const SwitchBase = (
  props: InputHTMLAttributes<HTMLInputElement>
) => (
  <label className='switch'>
    <input
      { ...props }
      type='checkbox' />
    <span className='slider rounded'/>
  </label>
);

export default SwitchBase;
