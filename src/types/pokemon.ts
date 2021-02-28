export interface IPokemon {
  name: string;
  id: number;
  types?: Array<string>;
  stats?: IPokemonStats;
}

export interface IPokemonStats {
  hp?: number;
  attack?: number;
  defense?: number;
  specialAttack?: number;
  specialDefense?: number;
  speed?: number;
}
