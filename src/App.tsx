import React from 'react';
import './App.css';

import ContainerRoot from './components/container/root';
import Header from './components/header';
import ContainerBase from './components/container/base';
import Fibonacci from './components/fibonacci';

const App = () => {
  return (
    <ContainerRoot>
      <Header />
      <ContainerBase>
        <div className='top-left-container'>
          <Fibonacci />
        </div>
        <div className='bottom-right-container'>
          <h1 className='title'>Calculate Fibonacci!</h1>
        </div>
      </ContainerBase>
    </ContainerRoot>
  ); 
};

export default App;
