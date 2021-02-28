import * as React from 'react';
import { Text, View } from 'react-native';
import { IPokemonStats } from '../../../types/pokemon';
import StatCard from '../../atoms/StatCard';
import style from './style';

type Props = {
  stats: IPokemonStats;
};

export default function PokemonStats({ stats }: Props) {
  return (
    <View style={style.container}>
      <Text style={style.title}>Stats:</Text>
      <View style={style.row}>
        {stats.hp && <StatCard label={'HP'} value={stats.hp} />}
        {stats.attack && <StatCard label={'Ataque'} value={stats.attack} />}
        {stats.defense && <StatCard label={'Defesa'} value={stats.defense} />}
      </View>
      <View style={style.row}>
        {stats.specialAttack && (
          <StatCard label={'Ataque especial'} value={stats.specialAttack} />
        )}
        {stats.specialDefense && (
          <StatCard label={'Defesa especial'} value={stats.specialDefense} />
        )}
        {stats.speed && <StatCard label={'Velocidade'} value={stats.speed} />}
      </View>
    </View>
  );
}
