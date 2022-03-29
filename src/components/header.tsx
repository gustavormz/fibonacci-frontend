import React from 'react';
import '../App.css';

import SwitchBase from './switch/base';
import SvgSun from './svg/sun';
import SvgMoon from './svg/moon';

const Header = () => (
  <header className='header'>
    <div className='title-header'>
      <h4>FIBO Calculator</h4>
    </div>
    <div className='actions-header'>
      <SwitchBase />
    </div>
  </header>
);

export default Header;
