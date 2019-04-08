// Auto add target = "_blank"
// https://yihui.name/en/2018/09/target-blank/

(function() {
  var links = document.getElementsByTagName('a');
  for (var i = 0; i < links.length; i++) {
    if (/^(https?:)?\/\//.test(links[i].getAttribute('href'))) {
      links[i].target = '_blank';
    }
  }
})();

// Right quote
// https://github.com/rbind/yihui/blob/master/static/js/right-quote.js

(function() {
  var quotes = document.getElementsByTagName('blockquote'), i, quote;
  for (i = 0; i < quotes.length; i++) {
    quote = quotes[i];
    var n = quote.children.length;
    if (n === 0) continue;
    var el = quote.children[n - 1];
    if (!el || el.nodeName !== 'P') continue;
    // right-align a quote footer if it starts with ---
    if (/^—/.test(el.textContent)) el.style.textAlign = 'right';
  }
})();
