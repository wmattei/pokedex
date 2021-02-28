import * as React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { ActivityIndicator } from 'react-native-paper';
import { IPokemon } from '../../../types/pokemon';
import PokemonCard from '../../molecules/PokemonCard';
import style from './style';

type Props = {
  pokemons: Array<IPokemon>;
  isLoading?: boolean;
  onEndReached?: (info: { distanceFromEnd: number }) => void;
};

export default function PokemonList({
  pokemons,
  onEndReached,
  isLoading = false,
}: Props) {
  return (
    <View>
      <FlatList
        onEndReached={onEndReached}
        removeClippedSubviews
        style={style.container}
        data={pokemons}
        numColumns={2}
        onEndReachedThreshold={0.2}
        keyExtractor={(item) => `pokemon-${item.name}`}
        ListFooterComponent={() => {
          return isLoading ? <ActivityIndicator /> : <></>;
        }}
        renderItem={(pokemon) => (
          <View style={style.item}>
            <PokemonCard
              key={`pokemon-${pokemon.item.id}`}
              pokemon={pokemon.item}
            />
          </View>
        )}
      />
    </View>
  );
}
