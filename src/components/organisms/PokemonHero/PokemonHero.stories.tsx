import { object, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react-native';
import * as React from 'react';
import PokemonHero from '.';

storiesOf('PokemonHero', module)
  .addDecorator(withKnobs)
  .add('Pokemon com imagem', () => (
    <PokemonHero
      pokemon={object('pokemon', {
        id: 1,
        name: 'Bulbassur',
        types: ['grass', 'poison'],
        stats: {
          attack: 34,
          defense: 23,
          hp: 54,
          specialAttack: 3,
          specialDefense: 23,
          speed: 55,
        },
      })}
    />
  ));
