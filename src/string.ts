
/**
 * @example
 * toSplash([1, 2]) // 1/2
 * toSplash([1, false]) // 1
 */
export function toSplash(arr: any[], delimiter: string = '/'): string {
  return arr.filter(Boolean).join(delimiter)
}
