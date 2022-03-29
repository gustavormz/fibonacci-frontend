import { ActionMap } from "../utils";

export enum Types {
  SET_THEME = 'SET_THEME'
};

type Payload = {
  [Types.SET_THEME] : {
    isDark: boolean;
  };
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export interface IState {
  isDark: boolean;
};

export const initialState: IState = {
  isDark: false
};

export const reducer = (state: IState, action: Actions) => {
  const { type } = action;
  switch (type) {
    case Types.SET_THEME:
      return {
        ...state,
        isDark: action.payload.isDark
      };
    default:
      throw new Error('Define an action');
  }
};
