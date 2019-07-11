/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ModalHeader from './ModalHeader';

it('renders correctly', (): void => {
  const tree = renderer.create(<ModalHeader>Text</ModalHeader>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders text', (): void => {
  const text = 'Text';
  const mock = shallow(<ModalHeader>{text}</ModalHeader>);

  expect(mock.text()).toMatch(text);
});

it('replace tag', (): void => {
  const tag = 'header';
  const mock = shallow(<ModalHeader asElement={tag}>Text</ModalHeader>);
  expect(mock.name()).toBe(tag);
});
