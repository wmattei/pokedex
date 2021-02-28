import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import StatCard from '.';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('StatCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Card com informações numéricas', () => (
    <StatCard label={text('StatLabel', 'HP')} value={text('StatValue', '12')} />
  ));
