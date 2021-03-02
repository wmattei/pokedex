import * as React from 'react';
import { Text } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { Surface, TouchableRipple } from 'react-native-paper';
import { POKEMON_IMG_PLACEHOLDER, POKEMON_IMG_URI } from '../../../constants';
import { IPokemon } from '../../../types/pokemon';
import { StringUtils } from '../../../utils/string/index';
import style from './style';

type Props = {
  pokemon: IPokemon;
  onPress?: () => void;
};

export default React.memo(
  function PokemonCard({ pokemon, onPress }: Props) {
    if (pokemon.id === 1) {
      console.log(pokemon.name);
    }
    return (
      <TouchableRipple onPress={onPress} style={style.container}>
        <Surface style={style.surface}>
          <Image
            style={{ width: 100, height: 100 }}
            uri={`${POKEMON_IMG_URI}/${pokemon.id}.png`}
            defaultSource={{ uri: POKEMON_IMG_PLACEHOLDER }}
          />
          <Text style={style.text}>
            {StringUtils.toCapitalCase(pokemon.name)}
          </Text>
        </Surface>
      </TouchableRipple>
    );
  },
  (prevProps, nextProps) => {
    return prevProps.pokemon.id === nextProps.pokemon.id;
  }
);
