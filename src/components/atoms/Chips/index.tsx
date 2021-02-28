import * as React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import { Chip as ChipPaper, useTheme } from 'react-native-paper';
import style from './style';

type Props = {
  chips: Array<{ label: string; id: string }>;
};

export default function Chips({ chips }: Props) {
  const theme = useTheme();

  return (
    <ScrollView horizontal style={style(theme).container}>
      {chips.map((chip) => (
        <ChipPaper
          style={style(theme).item}
          key={`chip-${chip.id || chip.label}`}
        >
          {chip.label}
        </ChipPaper>
      ))}
    </ScrollView>
  );
}
