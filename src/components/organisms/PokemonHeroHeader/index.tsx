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

  return (
    <View style={style(theme).container}>
      <Image
        style={style(theme).image}
        uri={imageUrl}
        defaultSource={{ uri: POKEMON_IMG_PLACEHOLDER }}
      />
    </View>
  );
});
