/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ModalBody from './ModalBody';

it('renders correctly', (): void => {
  const tree = renderer.create(<ModalBody>Text</ModalBody>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders text', (): void => {
  const text = 'Text';
  const mock = shallow(<ModalBody>{text}</ModalBody>);

  expect(mock.text()).toEqual(text);
});

it('replace tag', (): void => {
  const tag = 'section';
  const mock = shallow(<ModalBody asElement={tag}>Text</ModalBody>);
  expect(mock.name()).toBe(tag);
});
