import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import App from '../src/App';
import * as ThemeContext from '../src/context/store/theme';

describe('header base test', () => {
  let mockFunction = jest.fn();

  beforeAll(() => {
    mockFunction.mockClear();
  });

  describe('render correctly', () => {
    it('dark mode off', () => {
      const contextValues = {
        dispatch: mockFunction,
        state: {
          isDark: false
        }
      };
  
      jest.spyOn(ThemeContext, 'useAppContext')
        .mockImplementation(() => contextValues);
  
      const wrapper = shallow(<App />);
  
      expect(wrapper.find('#title-container').hasClass('dark-primary')).toBe(false);
    });

    it('dark mode on', () => {
      const contextValues = {
        dispatch: mockFunction,
        state: {
          isDark: true
        }
      };
  
      jest.spyOn(ThemeContext, 'useAppContext')
        .mockImplementation(() => contextValues);
  
      const wrapper = shallow(<App />);
  
      expect(wrapper.find('#title-container').hasClass('dark-primary')).toBe(true);
    });
  });
});
