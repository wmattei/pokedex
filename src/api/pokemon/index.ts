import axios from 'axios';
import { IPokemon } from '../../types/pokemon';

type ListPokemonsResponse = {
  count: number;
  next: string;
  previous: string;
  results: Array<IPokemon>;
};

const extractIdFromUrl = (pokemon: { name: string; url: string }) => {
  const paths = pokemon.url.split('/');
  return {
    ...pokemon,
    id: +paths[paths.length - 2],
  };
};

export class PokemonApi {
  static listPokemons(url: string): Promise<ListPokemonsResponse> {
    return axios.get(url).then((res) => {
      return {
        ...res.data,
        results: res.data.results.map(extractIdFromUrl),
      };
    });
  }
}
