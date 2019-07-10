/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';
import Button from './Button';

it('renders without crashing', (): void => {
  const div = document.createElement('div');
  ReactDOM.render(<Button />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders correctly', (): void => {
  const tree = renderer.create(<Button />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders text', (): void => {
  const text = 'button';
  const mock = shallow(<Button>{text}</Button>);

  expect(mock.text()).toEqual(text);
});

it('simulates click events', (): void => {
  const onClick = sinon.spy();
  const wrapper = shallow(<Button onClick={onClick} />);
  wrapper.find('button').simulate('click');

  expect(onClick.calledOnce).toEqual(true);
});
