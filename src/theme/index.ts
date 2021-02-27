import { DefaultTheme } from 'react-native-paper';
import { Theme } from 'react-native-paper/lib/typescript/types';

export const lightTheme: Theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1e65d6',
  },
};
