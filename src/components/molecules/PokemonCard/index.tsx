import * as React from 'react';
import { Image, Text } from 'react-native';
import { Surface } from 'react-native-paper';
import { POKEMON_IMG_URI } from '../../../constants';
import { IPokemon } from '../../../types/pokemon';
import { FileUtils } from '../../../utils/file';
import { StringUtils } from '../../../utils/string/index';
import style from './style';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const placeholder = require('../../../../assets/pokemon-placeholder.png');

type Props = {
  pokemon: IPokemon;
};

export default React.memo(function PokemonCard({ pokemon }: Props) {
  const [imageSrc, setImageSrc] = React.useState('');
  React.useEffect(() => {
    FileUtils.fetchImageFromCache(`${POKEMON_IMG_URI}/${pokemon.id}.png`).then(
      setImageSrc
    );
  }, []);

  return (
    <Surface style={style.surface}>
      <Image
        style={{ width: 100, height: 100 }}
        source={imageSrc ? { uri: imageSrc } : placeholder}
      />
      <Text style={style.text}>{StringUtils.toCapitalCase(pokemon.name)}</Text>
    </Surface>
  );
});
