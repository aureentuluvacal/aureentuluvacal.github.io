"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[989],{6179:function(t,e,n){var r=n(7294),a=n(5414),l=n(5444),i=function(t){var e=t.description,n=t.lang,i=t.meta,o=t.title,s=(0,l.useStaticQuery)("3000541721").site,c=e||s.siteMetadata.description;return r.createElement(a.Z,{htmlAttributes:{lang:n},title:o,titleTemplate:"%s | "+s.siteMetadata.title,meta:[{name:"description",content:c},{property:"og:title",content:o},{property:"og:description",content:c},{property:"og:type",content:"website"}].concat(i)})};i.defaultProps={lang:"en",meta:[],description:""},e.Z=i},1621:function(t,e,n){var r=n(7294),a=n(5444);e.Z=function(t){var e=t.name,n=function(){switch(e){case"Code":return"#FF50F1";case"Math":return"#8C55E5";case"Personal":return"#B64E5C";case"Science":return"#7be21d";default:return"#0577CE"}}(),l={color:n,border:"2px solid "+n,borderRadius:"20px",margin:"0 4px",padding:"2px 8px",fontWeight:"bold"};return r.createElement(a.Link,{to:"/tags/"+e.toLowerCase(),style:l},e)}},4870:function(t,e,n){n.r(e);var r=n(7294),a=n(5444),l=n(7198),i=n(6179),o=n(1621),s=n(5713);e.default=function(t){var e=t.data,n=t.pageContext,c=t.location,m=e.markdownRemark,p=e.site.siteMetadata.title,u=n.previous,d=n.next;return r.createElement(l.Z,{location:c,title:p},r.createElement(i.Z,{title:m.frontmatter.title,description:m.frontmatter.description||m.excerpt}),r.createElement("article",null,r.createElement("header",null,r.createElement("h1",{style:{marginTop:(0,s.qZ)(1),marginBottom:0}},m.frontmatter.title),m.frontmatter.subtitle&&r.createElement("h2",{style:{marginTop:(0,s.qZ)(.5),marginBottom:0}},m.frontmatter.subtitle),r.createElement("p",{style:Object.assign({},(0,s.bA)(-.1),{display:"block",marginTop:(0,s.qZ)(.2),marginBottom:(0,s.qZ)(1)})},m.frontmatter.date," • ",m.timeToRead+" min read"," ",m.frontmatter.tags.map((function(t){return r.createElement(o.Z,{key:t,name:t})})))),r.createElement("section",{dangerouslySetInnerHTML:{__html:m.html}}),r.createElement("hr",{style:{marginBottom:(0,s.qZ)(1)}})),r.createElement("nav",null,r.createElement("ul",{style:{display:"flex",flexWrap:"no-wrap",justifyContent:"space-between",listStyle:"none",padding:0,fontSize:"16px"}},r.createElement("li",{style:{width:"340px"}},u&&r.createElement(a.Link,{to:u.fields.slug,rel:"prev",style:{width:"340px"}},"← ",u.frontmatter.title,u.frontmatter.subtitle&&": "+u.frontmatter.subtitle)),r.createElement("li",{style:{minWidth:"340px",textAlign:"right"}},d&&r.createElement(a.Link,{to:d.fields.slug,rel:"next"},d.frontmatter.title," →",r.createElement("br",null),d.frontmatter.subtitle)))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-e117eaac852392f2e017.js.map