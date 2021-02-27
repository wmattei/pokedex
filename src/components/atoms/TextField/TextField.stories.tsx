import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import TextField from '.';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('TextField', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .add('Input modo "flat"', () => <TextField mode="flat" label="Hello world" />)
  .add('Input modo "outlined"', () => (
    <TextField mode="outlined" label="Hello world" />
  ))
  .add('Input modo "outlined" com erro', () => (
    <TextField
      mode="outlined"
      label="Hello world"
      error="Algo de errado não está certo"
    />
  ))
  .add('Input modo "flat" com erro', () => (
    <TextField
      mode="flat"
      label="Hello world"
      error="Algo de errado não está certo"
    />
  ));
