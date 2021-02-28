import * as React from 'react';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { POKEMON_IMG_URI } from '../../../constants';
import { IPokemon, IPokemonStats } from '../../../types/pokemon';
import { StringUtils } from '../../../utils/string';
import PokemonStats from '../../molecules/PokemonStats';
import PokemonTypes from '../../molecules/PokemonTypes';
import PokemonHeroHeader from '../PokemonHeroHeader';
import style from './style';

type Props = {
  pokemon: Partial<IPokemon>;
};
export default function PokemonHero({ pokemon }: Props) {
  return (
    <>
      <ScrollView style={{ flex: 1 }}>
        <PokemonHeroHeader imageUrl={`${POKEMON_IMG_URI}${pokemon.id}.png`} />
        <Text style={style.name}>
          {StringUtils.toCapitalCase(pokemon.name as string)}
        </Text>
        <PokemonTypes pokemonTypes={pokemon.types as Array<string>} />
        <PokemonStats stats={pokemon.stats as IPokemonStats} />
      </ScrollView>
    </>
  );
}
