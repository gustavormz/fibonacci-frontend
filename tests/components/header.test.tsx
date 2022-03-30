import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import Header from '../../src/components/header';
import * as ThemeContext from '../../src/context/store/theme';

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
  
      const wrapper = shallow(<Header />);
  
      expect(wrapper.hasClass('dark-primary')).toBe(false);
      expect(wrapper.find('i').hasClass('fa-sun-o')).toBe(true);
      expect(wrapper.find('SwitchBase').props().checked).toBe(false);
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
  
      const wrapper = shallow(<Header />);
  
      expect(wrapper.hasClass('dark-primary')).toBe(true);
      expect(wrapper.find('i').hasClass('fa-moon-o')).toBe(true);
      expect(wrapper.find('SwitchBase').props().checked).toBe(true);
    });
  });

  describe('dispatch action', () => {
    it('switch change to true', () => {
      const contextValues = {
        dispatch: mockFunction,
        state: {
          isDark: false
        }
      };
  
      jest.spyOn(ThemeContext, 'useAppContext')
        .mockImplementation(() => contextValues);
  
      const wrapper = shallow(<Header />);
      const switchBase = wrapper.find('SwitchBase');

      const switchEvent = {
        target: { checked: true },
        preventDefault: () => {}
      };

      switchBase.simulate('change', switchEvent);

      const action = {
        payload: {
          isDark: true
        },
        type: 'SET_THEME'
      };
      expect(mockFunction).toBeCalledWith(action);
    });

    it('switch change to false', () => {
      const contextValues = {
        dispatch: mockFunction,
        state: {
          isDark: true
        }
      };
  
      jest.spyOn(ThemeContext, 'useAppContext')
        .mockImplementation(() => contextValues);
  
      const wrapper = shallow(<Header />);
      const switchBase = wrapper.find('SwitchBase');

      const switchEvent = {
        target: { checked: false },
        preventDefault: () => {}
      };

      switchBase.simulate('change', switchEvent);

      const action = {
        payload: {
          isDark: false
        },
        type: 'SET_THEME'
      };
      expect(mockFunction).toBeCalledWith(action);
    });
  });
});
