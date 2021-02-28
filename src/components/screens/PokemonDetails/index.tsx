import { useRoute } from '@react-navigation/native';
import * as React from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { PokemonApi } from '../../../api/pokemon';
import { IPokemon } from '../../../types/pokemon';
import PokemonHero from '../../organisms/PokemonHero';

export default function PokemonDetails() {
  const { params } = useRoute();

  const [pokemon, setPokemon] = React.useState<Partial<IPokemon>>();
  const [isLoading, setIsLoading] = React.useState(false);
  const fetchPokemon = () => {
    if (!params) return;
    setIsLoading(true);
    const { pokemonId } = params as { pokemonId: string };
    PokemonApi.getPokemon(pokemonId).then((res) => {
      setPokemon({ ...res, id: +pokemonId });
      setIsLoading(false);
    });
  };

  React.useEffect(fetchPokemon, []);

  return (
    <>
      {isLoading && <ActivityIndicator />}
      {pokemon && <PokemonHero pokemon={pokemon} />}
    </>
  );
}
