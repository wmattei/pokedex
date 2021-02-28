import * as React from 'react';
import { Text, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import style from './style';

type Props = {
  label: string;
  value: string | number;
};

export default function StatCard({ label, value }: Props) {
  const theme = useTheme();

  return (
    <View style={style(theme).container}>
      <Text style={style(theme).value}>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
}
