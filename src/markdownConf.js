const hljs = require('highlight.js')
const twemoji = require('twemoji')
const md = require('markdown-it')({
	highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (__) {}
    }
    return '';
}});
md.use(require('markdown-it-checkbox'));
md.use(require('markdown-it-emoji'));
md.renderer.rules.emoji = function(token, idx) {
	return twemoji.parse(token[idx].content)
}

export default md;