import { formatDate, getWeek } from '../src/date'

describe('date', () => {
  test('formatDate', () => {
    const s = formatDate().split('-')
    expect(s).toHaveLength(3)
  })

  test('getWeek', () => {
    const s = getWeek('2020-10-18')
    expect(s).toBe('星期日')
  })
})
