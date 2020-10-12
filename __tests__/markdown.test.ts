import { markdown } from '../src/markdown'

describe('markdown', () => {
  test('normalize render', () => {
    const s = markdown.render('## a')
    expect(s).toBeTruthy()
  })

  test('anchor', () => {
    const s = markdown.render('- [Markdown](#Markdown)')
    expect(s).toContain('<a href="#Markdown">Markdown</a></li>')
  })
})
