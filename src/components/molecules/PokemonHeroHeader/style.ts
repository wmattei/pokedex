import { StyleSheet } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/types';

export default (theme: Theme) =>
  StyleSheet.create({
    container: {
      height: 220,
      backgroundColor: theme.colors.primary,
    },
    image: {
      width: 200,
      height: 200,
      alignSelf: 'center',
      marginTop: 70,
    },
  });
