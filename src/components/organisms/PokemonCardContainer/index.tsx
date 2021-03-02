import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import { APP_SCREENS } from '../../../routes/app-screens';
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
  const { navigate } = useNavigation();

  return (
    <FlatList
      onEndReached={onEndReached}
      style={style.container}
      data={pokemons}
      numColumns={2}
      onEndReachedThreshold={0.2}
      keyExtractor={(item) => item.id.toString()}
      initialNumToRender={10}
      ListFooterComponent={() => {
        return isLoading ? <ActivityIndicator /> : <></>;
      }}
      renderItem={(pokemon) => (
        <PokemonCard
          onPress={() =>
            navigate(APP_SCREENS.POKEMON.DETAIL, {
              pokemonId: pokemon.item.id,
            })
          }
          key={pokemon.item.id}
          pokemon={pokemon.item}
        />
      )}
    />
  );
}
