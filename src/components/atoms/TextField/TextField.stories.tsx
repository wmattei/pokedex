import { select, text } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import { View } from 'react-native';
import TextField from '.';

storiesOf('TextField', module)
  .addDecorator((getStory) => <View style={{ padding: 20 }}>{getStory()}</View>)
  .add('Input modo "flat"', () => (
    <TextField
      mode={select('Mode', ['outlined', 'flat'], 'flat')}
      label={text('Label', 'Hello world')}
    />
  ))
  .add('Input modo "outlined"', () => (
    <TextField
      mode={select('Mode', ['outlined', 'flat'], 'outlined')}
      label={text('Label', 'Hello world')}
    />
  ))
  .add('Input modo "outlined" com erro', () => (
    <TextField
      mode={select('Mode', ['outlined', 'flat'], 'outlined')}
      label={text('Label', 'Hello world')}
      error={text('Message', 'Algo de errado não está certo')}
    />
  ))
  .add('Input modo "flat" com erro', () => (
    <TextField
      mode={select('Mode', ['outlined', 'flat'], 'flat')}
      label={text('Label', 'Hello world')}
      error={text('Message', 'Algo de errado não está certo')}
    />
  ));
