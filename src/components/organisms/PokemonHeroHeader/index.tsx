import * as React from 'react';
import { Image, View } from 'react-native';
import { useTheme } from 'react-native-paper';
import { useCachedImage } from '../../../utils/file/fileHooks';
import style from './style';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const placeholder = require('../../../../assets/pokemon-placeholder.png');

type Props = {
  imageUrl: string;
};

export default React.memo(function PokemonHeroHeader({ imageUrl }: Props) {
  const theme = useTheme();
  const imageSrc = useCachedImage(imageUrl);

  return (
    <View style={style(theme).container}>
      {
        <Image
          style={style(theme).image}
          source={imageSrc ? { uri: imageSrc } : placeholder}
        />
      }
    </View>
  );
});
