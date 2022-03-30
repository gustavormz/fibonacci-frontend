import React, { ChangeEvent } from 'react';

import SwitchBase from './switch/base';

import { useAppContext as useThemeContext } from '../context/store/theme';
import { Types } from '../context/reducer/theme';

const Header = () => {
  const { state, dispatch } = useThemeContext();

  const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: Types.SET_THEME,
      payload: { isDark: event.target.checked }
    });
  };

  return (
    <header className={ `header ${state.isDark && 'dark-primary'}` }>
      <div className='title-header'>
        <h4>FIBO Calculator</h4>
      </div>
      <div className='actions-header'>
        { state.isDark ? (
          <i className='fa fa-moon-o'/>
        ) : (
          <i className='fa fa-sun-o'/>
        ) }
        <SwitchBase
          checked={ state.isDark }
          onChange={ handleOnChange }/>
      </div>
    </header>
  );
};

export default Header;
