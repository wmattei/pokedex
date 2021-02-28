import * as FileSystem from 'expo-file-system';
import shorthash from 'shorthash';

export class FileUtils {
  static async fetchImageFromCache(url: string) {
    const name = shorthash.unique(url);

    const path = `${FileSystem.cacheDirectory}${name}`;

    const image = await FileSystem.getInfoAsync(path);
    if (image.exists) {
      return image.uri;
    }

    FileSystem.downloadAsync(url, path);
    return url;
  }
}
