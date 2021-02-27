import * as React from 'react';
import { Image, View } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import style from './style';

type Props = {
  children: React.ReactNode;
};

export default function Auth({ children }: Props) {
  return (
    <KeyboardAwareScrollView
      style={{ height: '100%', backgroundColor: '#F5FCFF' }}
    >
      <View style={style.main}>
        <Image
          source={{ uri: 'https://img.icons8.com/clouds/452/pokemon-go.png' }}
          style={{ width: 200, height: 200 }}
        />
        {children}
      </View>
    </KeyboardAwareScrollView>
  );
}
