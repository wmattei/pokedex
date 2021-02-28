import * as React from 'react';
import { Image, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { IPokemon } from '../../../types/pokemon';
import { StringUtils } from '../../../utils/string.index';
import style from './style';
const POKEMON_IMG_URI = 'https://pokeres.bastionbot.org/images/pokemon/';

type Props = {
  pokemon: IPokemon;
};
export default function PokemonCard({ pokemon }: Props) {
  return (
    <Surface style={style.surface}>
      <Image
        style={{ width: 100, height: 100 }}
        source={{ uri: `${POKEMON_IMG_URI}/${pokemon.id}.png` }}
      />
      <Text style={style.text}>{StringUtils.toCapitalCase(pokemon.name)}</Text>
    </Surface>
  );
}
