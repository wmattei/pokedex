import * as React from 'react';
import { View } from 'react-native';
import { Image } from 'react-native-expo-image-cache';
import { useTheme } from 'react-native-paper';
import { POKEMON_IMG_PLACEHOLDER } from '../../../constants';
import style from './style';

type Props = {
  imageUrl: string;
};

export default React.memo(function PokemonHeroHeader({ imageUrl }: Props) {
  const theme = useTheme();
  const themedStyle = style(theme);
  return (
    <View style={themedStyle.container}>
      <Image
        style={themedStyle.image}
        uri={imageUrl}
        defaultSource={{ uri: POKEMON_IMG_PLACEHOLDER }}
      />
    </View>
  );
});
