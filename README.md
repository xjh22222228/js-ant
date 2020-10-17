
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

```js
import { markdown } from 'js-ant'

console.log(
  markdown.render('## Markdown')
)
```



### Date

```js
import { formatDate, formatDateTime } from 'js-ant'

// 2020-11-11
console.log(
  formatDate(new Date())
)

// 2020-11-11 11:11:11
console.log(
  formatDateTime(new Date())
)

// 星期日
console.log(
  getWeek()
)
```




