/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosResponse } from 'axios';
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

const extractStatsFromResponse = (
  res: AxiosResponse<any>
): Partial<IPokemon> => {
  const searchInStatArray = (property: string) =>
    res.data.stats.find((stat: any) => stat.stat.name === property)
      ?.base_stat || 0;

  return {
    name: res.data.name,
    types: Object.values(res.data.types).map((type: any) => type.type.name),
    stats: {
      attack: searchInStatArray('attack'),
      defense: searchInStatArray('defense'),
      hp: searchInStatArray('hp'),
      specialAttack: searchInStatArray('special-attack'),
      specialDefense: searchInStatArray('special-defense'),
      speed: searchInStatArray('speed'),
    },
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

  static getPokemon(id: number | string): Promise<Partial<IPokemon>> {
    return axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then(extractStatsFromResponse);
  }
}
