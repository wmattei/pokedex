export class StringUtils {
  static toCapitalCase(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}
