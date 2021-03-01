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
  const themedStyle = style(theme);

  return (
    <View style={themedStyle.container}>
      <Text style={themedStyle.value}>{value}</Text>
      <Text>{label}</Text>
    </View>
  );
}
