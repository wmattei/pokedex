import { StyleSheet } from 'react-native';

type Props = {
  inverted?: boolean;
};

export const style = ({ inverted }: Props) =>
  StyleSheet.create({
    disabledButton: {
      backgroundColor: !inverted ? '#dddde1' : 'white',
    },
    disabledText: {
      color: inverted ? '#dddde1' : 'gray',
    },
  });
