import React, { InputHTMLAttributes } from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';

Enzyme.configure({ adapter: new Adapter() });

import InputBase from '../../src/components/input/base';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
};

describe('input base test', () => {
  let initialProps: IInputProps;

  beforeAll(() => {
    initialProps = {
      name: 'nTerm'
    };
  });

  it('render correctly', () => {
    const wrapperSwitch = shallow(
      <InputBase { ...initialProps }/>
    ).find('label');

    expect(wrapperSwitch.text()).toBe(initialProps.name);
  });

  it('works properly like stateless component', () => {
    const onChangeMock = jest.fn();
    initialProps = {
      ...initialProps,
      onChange: onChangeMock,
      checked: false
    };

    const wrapperSwitch = shallow(
      <InputBase { ...initialProps } />
    ).find('input');
    
    const event = {
      target: { value: 2 },
      preventDefault() {}
    };
    wrapperSwitch.simulate('change', event);

    expect(onChangeMock).toBeCalledWith(event);
  });
});
