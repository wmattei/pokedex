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
  const themedStyle = style({ inverted });

  return (
    <PaperButton
      style={disabled && themedStyle.disabledButton}
      loading={loading}
      mode={inverted ? 'outlined' : 'contained'}
      accessibilityLabel={title}
      onPress={onPress}
      disabled={disabled}
    >
      <Text style={disabled && themedStyle.disabledText}>{title}</Text>
    </PaperButton>
  );
}
