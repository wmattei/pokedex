import { StyleSheet } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/types';

export default (theme: Theme) =>
  StyleSheet.create({
    container: {
      width: 100,
      height: 100,
      borderColor: theme.colors.primary,
      alignItems: 'center',
      justifyContent: 'space-evenly',
      borderWidth: 1,
      borderStyle: 'solid',
      borderRadius: 5,
    },
    value: {
      fontSize: 30,
      color: theme.colors.primary,
    },
  });
