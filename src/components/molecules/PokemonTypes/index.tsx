import * as React from 'react';
import { Text, View } from 'react-native';
import { StringUtils } from '../../../utils/string';
import Chips from '../../atoms/Chips';
import style from './style';

type Props = {
  pokemonTypes: Array<string>;
};

export default function PokemonTypes({ pokemonTypes }: Props) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Tipos:</Text>
      <Chips
        chips={pokemonTypes.map((type) => ({
          label: StringUtils.toCapitalCase(type),
          id: type,
        }))}
      />
    </View>
  );
}
