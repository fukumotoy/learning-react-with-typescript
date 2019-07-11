/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ModalFooter from './ModalFooter';

it('renders correctly', (): void => {
  const tree = renderer.create(<ModalFooter>Text</ModalFooter>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders text', (): void => {
  const text = 'Text';
  const mock = shallow(<ModalFooter>{text}</ModalFooter>);

  expect(mock.text()).toEqual(text);
});

it('replace tag', (): void => {
  const tag = 'footer';
  const mock = shallow(<ModalFooter asElement={tag}>Text</ModalFooter>);
  expect(mock.name()).toBe(tag);
});
