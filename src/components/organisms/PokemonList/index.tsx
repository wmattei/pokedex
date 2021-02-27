import * as React from 'react';
import { Dimensions, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { IPokemon } from '../../../types/pokemon';
import PokemonCard from '../../molecules/PokemonCard';
import style from './style';

type Props = {
  pokemons: Array<IPokemon>;
};

export default function PokemonList({ pokemons }: Props) {
  const isPortrait = () => {
    const dim = Dimensions.get('screen');
    return dim.height >= dim.width;
  };

  return (
    <SafeAreaView>
      <FlatList
        style={style.container}
        key={isPortrait() ? 'v' : 'h'}
        data={pokemons}
        numColumns={+(Dimensions.get('window').width / 230).toFixed()}
        keyExtractor={(item) => item.id.toString()}
        renderItem={(pokemon) => (
          <View style={style.item}>
            <PokemonCard
              key={`pokemon-${pokemon.item.id}`}
              pokemon={pokemon.item}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
