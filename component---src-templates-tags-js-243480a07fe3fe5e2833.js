"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[942],{5929:function(e,t,l){l.r(t);var a=l(7294),n=l(5444),r=l(7198);t.default=e=>{let{data:t,pageContext:l,location:o}=e;const{tag:c}=l,{edges:s,totalCount:u}=t.allMarkdownRemark,i=`${u} post${1===u?"":"s"} tagged with "${c}"`;return a.createElement(r.Z,{location:o,title:"Cal Perez"},a.createElement("h2",null,i),s.map((e=>{let{node:t}=e;const{slug:l}=t.fields,{title:r,subtitle:o}=t.frontmatter,c=o?`${r}: ${o}`:r;return a.createElement("article",{key:r},a.createElement(n.Link,{to:l},a.createElement("span",null,c)))})),a.createElement("br",null),a.createElement(n.Link,{to:"/tags"},"All tags"))}}}]);
//# sourceMappingURL=component---src-templates-tags-js-243480a07fe3fe5e2833.js.map