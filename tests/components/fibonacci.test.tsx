import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import Fibonacci from '../../src/components/fibonacci';
import * as FibonacciContext from '../../src/context/store/fibonacci';

describe('fibonacci base test', () => {
  let mockFunction = jest.fn();

  beforeAll(() => {
    mockFunction.mockClear();
  });

  describe('render correctly', () => {
    it('context is implemented correctly', () => {
      const contextValues = {
        dispatch: mockFunction,
        state: {
          nTerm: 3,
          result: 2
        }
      };
  
      jest.spyOn(FibonacciContext, 'useAppContext')
        .mockImplementation(() => contextValues);
  
      const wrapper = shallow(<Fibonacci />);
      const inputBase = wrapper.find('InputBase');
  
      expect(inputBase.props().value).toBe(3);
    });
  });

  describe('dispatch action', () => {
    it('simulate onchange to call API', () => {
      const mockFetch = Promise.resolve({
        json: () => Promise.resolve({ data: 2 })
      });
      global.fetch = jest.fn().mockImplementation(() => mockFetch);

      const contextValues = {
        dispatch: mockFunction,
        state: {
          nTerm: 3,
          result: 2
        }
      };
  
      jest.spyOn(FibonacciContext, 'useAppContext')
        .mockImplementation(() => contextValues);
  
      const wrapper = shallow(<Fibonacci />);
      const inputBase = wrapper.find('InputBase');

      const inputEvent = {
        target: { value: 3 },
        preventDefault: () => {}
      };

      inputBase.simulate('change', inputEvent);

      const action = {
        payload: {
          nTerm: 3
        },
        type: 'SET_N_TERM'
      };
      expect(mockFunction).toBeCalledTimes(1);
      expect(mockFunction).toBeCalledWith(action);
    });
  });
});
