import * as React from 'react';
import { Text } from 'react-native';
import { Button as PaperButton } from 'react-native-paper';
import { style } from './style';

type Props = {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
  inverted?: boolean;
  loading?: boolean;
};

export default function Button({
  onPress,
  disabled,
  title,
  inverted,
  loading,
}: Props) {
  return (
    <PaperButton
      style={disabled && style({ inverted }).disabledButton}
      loading={loading}
      mode={inverted ? 'outlined' : 'contained'}
      accessibilityLabel={title}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={disabled && style({ inverted }).disabledText}>{title}</Text>
    </PaperButton>
  );
}
