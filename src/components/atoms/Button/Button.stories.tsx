import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import Button from '.';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Button', () => (
    <Button
      onPress={action('clicked-text')}
      loading={boolean('Loading', false)}
      inverted={boolean('Inverted', false)}
      disabled={boolean('Disabled', false)}
      title={text('Title', 'Hello World')}
    />
  ))
  .add('Emoji', () => (
    <Button onPress={action('clicked-text')} title={text('Emoji', '😕')} />
  ))
  .add('Em estado de loading', () => (
    <Button onPress={action('clicked-text')} loading />
  ))
  .add('Botão invertido', () => (
    <Button onPress={action('clicked-text')} inverted />
  ))
  .add('Botão disabled', () => (
    <Button onPress={action('clicked-text')} disabled />
  ))
  .add('Botão invertido disabled', () => (
    <Button onPress={action('clicked-text')} disabled inverted />
  ));
