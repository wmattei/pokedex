import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';

const style = StyleSheet.create({
  main: {
    color: 'red',
  },
});

type Props = {
  onChangeText?: (text: string) => void;
  mode: 'flat' | 'outlined';
  label: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  suffix?: React.ReactNode;
  prefix?: React.ReactNode;
  value?: string;
};

export default function TextField({
  mode,
  disabled,
  prefix,
  label,
  onChangeText,
  suffix,
  placeholder,
  error,
  value,
}: Props) {
  return (
    <>
      <PaperTextInput
        value={value}
        mode={mode}
        disabled={disabled}
        error={!!error}
        left={prefix}
        label={label}
        onChangeText={onChangeText}
        right={suffix}
        placeholder={placeholder}
      />
      <Text style={style.main}>{error}</Text>
    </>
  );
}
