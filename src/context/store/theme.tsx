import React, {
  Dispatch,
  useReducer,
  createContext
} from 'react';

import {
  Actions,
  initialState,
  IState,
  reducer
} from '../reducer/theme';


interface IContextProps {
  state: IState,
  dispatch: Dispatch<Actions>
};

export const Store = createContext({} as IContextProps);

const State = (props: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return (
    <Store.Provider value={ value }>
      { props.children }
    </Store.Provider>
  );
};

export default State;
