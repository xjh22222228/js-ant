
<h1 align="center">js-ant</h1>
<p align="center">
  <p align="center">
    <img src="https://img.shields.io/github/package-json/v/xjh22222228/js-ant" />
    <img src="https://img.shields.io/github/license/xjh22222228/js-ant" />
  </p>
</p>



## Install
```bash
yarn add js-antd
```


## Usage

### Markdown

- 支持描点定位
- a 链接 `_blank` 跳转

```js
import { markdown } from 'js-ant'

const result = markdown.render('## Markdown')
```



### Date

```js
import { formatDate, formatDateTime, getWeek } from 'js-ant'

// YYYY-MM-DD 2020-11-11
const date = formatDate(new Date())

// YYYY-MM-DD HH:mm:ss 2020-11-11 11:11:11
const dateTime = formatDateTime(new Date())

// 星期日
const week = getWeek()
```


### String
```js
import { toSplash } from 'js-ant'

toSplash([1, 2]) // 1/2
toSplash([1, false]) // 1
toSplash([1, false, 2], '-') // 1-2
```





## Set up
```bash
git clone --depth=1 https://github.com/xjh22222228/js-ant.git

yarn build

yarn check
```




## LISTEN
[MIT](./LICENSE)



