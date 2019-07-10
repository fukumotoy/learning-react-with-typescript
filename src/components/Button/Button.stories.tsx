/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withInfo } from '@storybook/addon-info';
import { withKnobs, text } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withInfo({ inline: true }))
  .add(
    'default',
    (): JSX.Element => (
      <Button onClick={action('clicked')}>
        {text('テキスト', 'ああああ')}
      </Button>
    )
  );
