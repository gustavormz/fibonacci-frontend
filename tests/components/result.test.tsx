import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import Result from '../../src/components/result';
import * as FibonacciContext from '../../src/context/store/fibonacci';

describe('result base test', () => {
  it('render correctly', () => {
    const contextValues = {
      dispatch: () => {},
      state: {
        nTerm: 1,
        result: 1
      }
    };

    jest.spyOn(FibonacciContext, 'useAppContext')
      .mockImplementation(() => contextValues);

	  const wrapper = shallow(<Result />);
	  expect(wrapper.find('p').text()).toBe('1');
  });
});
