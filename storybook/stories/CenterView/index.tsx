import * as React from 'react';
import { View } from 'react-native';
import style from './style';

type Props = {
  children: React.ReactNode;
};

export default function CenterView({ children }: Props): JSX.Element {
  return <View style={style.main}>{children}</View>;
}
