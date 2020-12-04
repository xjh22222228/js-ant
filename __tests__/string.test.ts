import { toSplash } from '../src/string'

describe('string.js', () => {
  test('toSplash', () => {
    expect(toSplash([1, 2])).toBe('1/2')
    expect(toSplash([1, 2, false])).toBe('1/2')
    expect(toSplash([1, 2, undefined])).toBe('1/2')
    expect(toSplash([1, 2, null])).toBe('1/2')
    expect(toSplash([1, 2, 0])).toBe('1/2')
    expect(toSplash([1, 2, ''])).toBe('1/2')
    expect(toSplash([1, 2])).toBe('1/2')
    expect(toSplash([1, 2], '-')).toBe('1-2')
  })
})
