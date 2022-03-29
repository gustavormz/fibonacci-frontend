import React, { useContext, ChangeEvent } from 'react';
import '../App.css';

import SwitchBase from './switch/base';

import { Store as ThemeStore} from '../context/store/theme';
import { Types } from '../context/reducer/theme';

const Header = () => {
  const { state, dispatch } = useContext(ThemeStore);

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
