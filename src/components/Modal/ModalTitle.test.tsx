/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import ModalTitle from './ModalTitle';

it('renders correctly', (): void => {
  const tree = renderer.create(<ModalTitle>Title</ModalTitle>).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders text', (): void => {
  const text = 'Title';
  const mock = shallow(<ModalTitle>{text}</ModalTitle>);

  expect(mock.text()).toEqual(text);
});

it('replace tag', (): void => {
  const tag = 'h2';
  const mock = shallow(<ModalTitle asElement={tag}>Title</ModalTitle>);
  expect(mock.name()).toEqual(tag);
});
