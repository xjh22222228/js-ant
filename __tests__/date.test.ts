import { formatDate } from '../src/date'

describe('date', () => {
  test('formatDate', () => {
    const s = formatDate().split('-')
    expect(s).toHaveLength(3)
  })
})
