import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import Button from '.';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('Button', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Texto simples', () => (
    <Button
      onPress={action('clicked-text')}
      title={text('HelloWorld', 'Hello World')}
    >
      {text('HelloWorld', 'Hello World')}
    </Button>
  ))
  .add('Emoji', () => (
    <Button onPress={action('clicked-text')} title={'😀 😎 👍 💯'}>
      😀 😎 👍 💯
    </Button>
  ))
  .add('Em estado de loading', () => (
    <Button onPress={action('clicked-text')} loading>
      Save
    </Button>
  ))
  .add('Botão invertido', () => (
    <Button onPress={action('clicked-text')} inverted>
      Save
    </Button>
  ));
