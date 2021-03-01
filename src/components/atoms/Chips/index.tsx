import * as React from 'react';
import { ScrollView } from 'react-native';
import { Chip as ChipPaper, useTheme } from 'react-native-paper';
import style from './style';

type Props = {
  chips: Array<{ label: string; id: string }>;
};

export default function Chips({ chips }: Props) {
  const theme = useTheme();
  const themedStyle = style(theme);
  return (
    <ScrollView horizontal style={themedStyle.container}>
      {chips.map((chip) => (
        <ChipPaper
          style={themedStyle.item}
          key={`chip-${chip.id || chip.label}`}
        >
          {chip.label}
        </ChipPaper>
      ))}
    </ScrollView>
  );
}
