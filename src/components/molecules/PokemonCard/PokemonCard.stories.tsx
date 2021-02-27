import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import PokemonCard from '.';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('PokemonCard', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Pokemon com imagem', () => (
    <PokemonCard pokemon={object('bulbasaur', { name: 'Bulbassur', id: 1 })} />
  ));
