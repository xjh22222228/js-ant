!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("markdown-it"),require("markdown-it-anchor"),require("highlight.js"),require("dayjs")):"function"==typeof define&&define.amd?define(["exports","markdown-it","markdown-it-anchor","highlight.js","dayjs"],t):t((e="undefined"!=typeof globalThis?globalThis:e||self).bundle={},e.MarkdownIt,e.anchor,e.hljs,e.dayjs)}(this,(function(e,t,n,r,a){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var u=o(t),i=o(n),f=o(r),d=o(a);const l={html:!0,linkify:!0,typographer:!0,highlight:function(e,t){if(t&&f.default.getLanguage(t))try{return f.default.highlight(t,e).value}catch(e){return""}return""}},s=new u.default(l).use(i.default),c=s.renderer.rules.link_open||function(e,t,n,r,a){return a.renderToken(e,t,n)};s.renderer.rules.link_open=function(e,t,n,r,a){const o=e[t].attrIndex("target");return e[t].attrs[0][1].startsWith("#")||(o<0?e[t].attrPush(["target","_blank"]):e[t].attrs[o][1]="_blank"),c(e,t,n,r,a)};const h=s;Object.defineProperty(e,"dayjs",{enumerable:!0,get:function(){return d.default}}),e.formatDate=function(e){return d.default(e).format("YYYY-MM-DD")},e.formatDateTime=function(e){return d.default(e).format("YYYY-MM-DD HH:mm:ss")},e.getWeek=function(e){return["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][d.default(e).day()]},e.markdown=h,e.toSplash=function(e,t="/"){return e.filter(Boolean).join(t)},Object.defineProperty(e,"__esModule",{value:!0})}));
