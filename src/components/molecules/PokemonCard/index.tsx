import * as React from 'react';
import { Text } from 'react-native';
import { Surface, TouchableRipple } from 'react-native-paper';
import { Image } from 'react-native-expo-image-cache';
import { POKEMON_IMG_PLACEHOLDER, POKEMON_IMG_URI } from '../../../constants';
import { IPokemon } from '../../../types/pokemon';
import { StringUtils } from '../../../utils/string/index';
import style from './style';

type Props = {
  pokemon: IPokemon;
  onPress?: () => void;
};

export default React.memo(function PokemonCard({ pokemon, onPress }: Props) {
  return (
    <TouchableRipple onPress={onPress}>
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
});
