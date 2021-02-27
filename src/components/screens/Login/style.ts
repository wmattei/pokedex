import { StyleSheet } from 'react-native';
import { Theme } from 'react-native-paper/lib/typescript/types';

export default (theme: Theme) =>
  StyleSheet.create({
    caption: {
      marginTop: 50,
      color: theme.colors.placeholder,
      textAlign: 'center',
    },
    error: {
      color: theme.colors.error,
      marginTop: 10,
      textAlign: 'center',
    },
    container: {
      maxWidth: 500,
    },
    welcome: {
      textAlign: 'center',
      fontSize: 25,
      padding: 10,
    },
  });
