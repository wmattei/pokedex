import * as React from 'react';
import { SafeAreaView } from 'react-native';
import { PokemonApi } from '../../../api/pokemon';
import { IPokemon } from '../../../types/pokemon';
import PokemonCardContainer from '../../organisms/PokemonCardContainer';
import style from './style';

export default function PokemonList() {
  const [nextUrl, setNextUrl] = React.useState(
    'https://pokeapi.co/api/v2/pokemon'
  );
  const [pokemons, setPokemons] = React.useState<Array<IPokemon>>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchPokemons = () => {
    setIsLoading(true);
    PokemonApi.listPokemons(nextUrl).then((res) => {
      setPokemons([...pokemons, ...res.results]);
      setNextUrl(res.next);
      setIsLoading(false);
    });
  };

  React.useEffect(fetchPokemons, []);

  return (
    <SafeAreaView style={style.container}>
      <PokemonCardContainer
        pokemons={pokemons}
        onEndReached={fetchPokemons}
        isLoading={isLoading}
      />
    </SafeAreaView>
  );
}
