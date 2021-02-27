import * as React from 'react';
import { Button as PaperButton } from 'react-native-paper';

type Props = {
  onPress: () => void;
  title?: string;
  disabled?: boolean;
  inverted?: boolean;
  loading?: boolean;
  children: React.ReactNode;
};

export default function Button({
  onPress,
  disabled,
  title,
  children,
  inverted,
  loading,
}: Props) {
  return (
    <PaperButton
      loading={loading}
      mode={inverted ? 'outlined' : 'contained'}
      accessibilityLabel={title}
      onPress={onPress}
      disabled={disabled}
    >
      {children}
    </PaperButton>
  );
}
