import { ActionMap } from "../utils";

export enum Types {
  SET_N_TERM = 'SET_N_TERM',
  SET_RESULT = 'SET_RESULT'
};

type Payload = {
  [Types.SET_N_TERM] : {
    nTerm: number;
  };
  [Types.SET_RESULT]: {
    result: number | string;
  }
}

export type Actions = ActionMap<Payload>[keyof ActionMap<Payload>];

export interface IState {
  nTerm: number;
  result: number | string;
};

export const initialState: IState = {
  nTerm: 0,
  result: 0
};

export const reducer = (state: IState, action: Actions) => {
  const { type } = action;
  switch (type) {
    case Types.SET_N_TERM:
      return {
        ...state,
        nTerm: action.payload.nTerm
      };
    case Types.SET_RESULT:
      return {
        ...state,
        result: action.payload.result
      };
    default:
      throw new Error('Define an action');
  }
};
