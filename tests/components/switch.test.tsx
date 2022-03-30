import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import SwitchBase from '../../src/components/switch/base';

describe('switch base test', () => {
  it('render correctly', () => {
    const wrapperSwitch = shallow(
      <SwitchBase />
    ).find('input');
    expect(wrapperSwitch.props().type).toBe('checkbox');
  });

  it('works properly like stateless component', () => {
    const onChangeMock = jest.fn();
    const initialProps = {
      onChange: onChangeMock,
      checked: false
    };

    const wrapperSwitch = shallow(
      <SwitchBase { ...initialProps } />
    ).find('input');
    
    const event = {
      target: { value: true },
      preventDefault: () => {}
    };
    wrapperSwitch.simulate('change', event);

    expect(onChangeMock).toBeCalledWith(event);
  });
});
