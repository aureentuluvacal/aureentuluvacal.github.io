(self.webpackChunkblog=self.webpackChunkblog||[]).push([[159],{1621:function(e,u,t){"use strict";var n=t(7294),f=t(5444);u.Z=function(e){var u=e.name,t=function(){switch(u){case"Code":default:return"#0577CE";case"Math":return"#8C55E5";case"Personal":return"#B64E5C";case"Science":return"#7be21d"}},r={backgroundColor:t(),color:"Science"===u?"#000":"#fff",border:"1px solid "+t(),borderRadius:"20px",margin:"0 4px",padding:"2px 8px",fontSize:"100%",fontWeight:"bold"};return n.createElement(f.Link,{to:"/tags/"+u.toLowerCase(),style:r},u)}},1973:function(e,u,t){"use strict";t.r(u);var n=t(7294),f=t(1804),r=t.n(f),a=t(5414),o=t(5444),c=t(7198),i=t(1621);u.default=function(e){var u=e.data,t=u.allMarkdownRemark.group,f=u.site.siteMetadata.title;return n.createElement(c.Z,{location:"/tags",title:f},n.createElement(a.q,{title:f}),n.createElement("div",null,n.createElement("h1",null,"Tags"),t.map((function(e){return n.createElement(n.Fragment,{key:e.fieldValue},n.createElement("article",null,n.createElement(i.Z,{name:e.fieldValue}),n.createElement(o.Link,{to:"/tags/"+r()(e.fieldValue)+"/"},"(",e.totalCount,")")),n.createElement("br",null))}))))}},9029:function(e){var u=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;e.exports=function(e){return e.match(u)||[]}},8674:function(e){e.exports=function(e){return function(u){return null==e?void 0:e[u]}}},5393:function(e,u,t){var n=t(2663),f=t(3816),r=t(8748),a=RegExp("['’]","g");e.exports=function(e){return function(u){return n(r(f(u).replace(a,"")),e,"")}}},9389:function(e,u,t){var n=t(8674)({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"});e.exports=n},3157:function(e){var u=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;e.exports=function(e){return u.test(e)}},2757:function(e){var u="\\u2700-\\u27bf",t="a-z\\xdf-\\xf6\\xf8-\\xff",n="A-Z\\xc0-\\xd6\\xd8-\\xde",f="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",r="["+f+"]",a="\\d+",o="[\\u2700-\\u27bf]",c="["+t+"]",i="[^\\ud800-\\udfff"+f+a+u+t+n+"]",d="(?:\\ud83c[\\udde6-\\uddff]){2}",l="[\\ud800-\\udbff][\\udc00-\\udfff]",x="["+n+"]",s="(?:"+c+"|"+i+")",E="(?:"+x+"|"+i+")",p="(?:['’](?:d|ll|m|re|s|t|ve))?",g="(?:['’](?:D|LL|M|RE|S|T|VE))?",b="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",m="[\\ufe0e\\ufe0f]?",v=m+b+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",d,l].join("|")+")"+m+b+")*"),A="(?:"+[o,d,l].join("|")+")"+v,h=RegExp([x+"?"+c+"+"+p+"(?="+[r,x,"$"].join("|")+")",E+"+"+g+"(?="+[r,x+s,"$"].join("|")+")",x+"?"+s+"+"+p,x+"+"+g,"\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",a,A].join("|"),"g");e.exports=function(e){return e.match(h)||[]}},3816:function(e,u,t){var n=t(9389),f=t(9833),r=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,a=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");e.exports=function(e){return(e=f(e))&&e.replace(r,n).replace(a,"")}},1804:function(e,u,t){var n=t(5393)((function(e,u,t){return e+(t?"-":"")+u.toLowerCase()}));e.exports=n},8748:function(e,u,t){var n=t(9029),f=t(3157),r=t(9833),a=t(2757);e.exports=function(e,u,t){return e=r(e),void 0===(u=t?void 0:u)?f(e)?a(e):n(e):e.match(u)||[]}}}]);
//# sourceMappingURL=component---src-pages-tags-js-83392a28d911dae81d78.js.map