import * as React from 'react';
import { FileUtils } from '.';

export const useCachedImage = (url: string) => {
  const [imageSrc, setImageSrc] = React.useState('');

  React.useEffect(() => {
    FileUtils.fetchImageFromCache(url).then(setImageSrc);
  }, []);

  return imageSrc;
};
