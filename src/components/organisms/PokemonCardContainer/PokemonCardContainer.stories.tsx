import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import PokemonCardContainer from '.';
import CenterView from '../../../../storybook/stories/CenterView';

storiesOf('PokemonList', module)
  .addDecorator((getStory) => <CenterView>{getStory()}</CenterView>)
  .addDecorator(withKnobs)
  .add('Lista de pokemons', () => (
    <PokemonCardContainer
      pokemons={object('pokemons', [
        { id: 1, name: 'Bulbassur' },
        { id: 2, name: 'Ivysaur' },
        { id: 3, name: 'Venusaur' },
        { id: 4, name: 'Charmander' },
        { id: 5, name: 'Bulbassur' },
        { id: 6, name: 'Ivysaur' },
        { id: 7, name: 'Venusaur' },
        { id: 8, name: 'Charmander' },
        { id: 9, name: 'Charmander' },
      ])}
    />
  ));
