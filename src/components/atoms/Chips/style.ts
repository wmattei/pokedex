import { StyleSheet } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/types';

export default (theme: Theme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'row',
      marginLeft: 10,
    },
    item: {
      margin: 4,
      height: 35,
      backgroundColor: theme.colors.accent,
    },
  });
