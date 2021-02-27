import * as React from 'react';
import { StyleSheet, Text } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import { KeyboardTypes, TextContentType } from '../../../types';

const style = StyleSheet.create({
  main: {
    color: 'red',
  },
});

type FieldType = 'email' | 'password';

type Props = {
  onChangeText?: (text: string) => void;
  mode: 'flat' | 'outlined';
  label: string;
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  value?: string;
  type?: FieldType;
};

const getKeyBoardType = (type?: FieldType) => {
  if (!type) return;
  return {
    email: 'email-address',
    password: 'visible-password',
  }[type];
};

const getTextContentType = (type?: FieldType) => {
  if (!type) return 'none';
  return {
    email: 'emailAddress',
    password: 'password',
  }[type];
};

export default function TextField({
  mode,
  disabled,
  label,
  onChangeText,
  placeholder,
  error,
  value,
  type,
}: Props) {
  const keyboardType = getKeyBoardType(type);
  const textContentType = getTextContentType(type);
  return (
    <>
      <PaperTextInput
        autoCapitalize="none"
        secureTextEntry={type === 'password'}
        autoCompleteType={type}
        keyboardType={keyboardType as KeyboardTypes}
        textContentType={textContentType as TextContentType}
        value={value}
        mode={mode}
        disabled={disabled}
        error={!!error}
        label={label}
        onChangeText={onChangeText}
        placeholder={placeholder}
      />
      <Text style={style.main}>{error}</Text>
    </>
  );
}
