/**
 * Parse Markdown
 * @author xiejiahe
 */
import MarkdownIt from 'markdown-it'
import anchor from 'markdown-it-anchor'
import hljs from 'highlight.js'

const config = {
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str: string, lang: string) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value
      } catch {
        return ''
      }
    }

    return ''
  }
}

const md = new MarkdownIt(config).use(anchor)

const defaultRender = md.renderer.rules.link_open || function(
  tokens,
  idx,
  options,
  env,
  self
) {
  return self.renderToken(tokens, idx, options)
}

md.renderer.rules.link_open = function (
  tokens: any[],
  idx: number,
  options: MarkdownIt.Options,
  env: any,
  self
) {
  const aIndex = tokens[idx].attrIndex('target')
  const isAnchor = tokens[idx].attrs[0][1].startsWith('#')

  if (!isAnchor) {
    if (aIndex < 0) {
      tokens[idx].attrPush(['target', '_blank'])
    } else {
      tokens[idx].attrs[aIndex][1] = '_blank'
    }
  }

  return defaultRender(tokens, idx, options, env, self)
}

export const markdown = md
