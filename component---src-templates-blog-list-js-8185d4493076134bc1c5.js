"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[544],{1496:function(e,t,a){var r=a(5318);t.Z=void 0;var i,n=r(a(1506)),s=r(a(5354)),o=r(a(7316)),l=r(a(7154)),d=r(a(7294)),u=r(a(5697)),c=["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"],f=function(e){var t=(0,l.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=x([].concat(t.fluid))),t.fixed&&(t.fixed=x([].concat(t.fixed))),t},g=function(e){var t=e.media;return!!t&&(S&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(S&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(g);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},h=Object.create({}),y=function(e){var t=f(e),a=m(t);return h[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,S="undefined"!=typeof window,v=S&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return d.default.createElement(d.default.Fragment,{key:t},r&&d.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&d.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function x(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function L(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return d.default.createElement("source",{key:t,media:a,srcSet:r})}))}function I(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var C=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},k=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",l=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",d=e.loading?'loading="'+e.loading+'" ':"",u=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+d+s+o+a+r+t+n+i+l+u+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=d.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=d.default.createElement(z,(0,l.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?d.default.createElement("picture",null,i(r),o):o})),z=d.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,u=e.onError,f=e.loading,g=e.draggable,m=e.ariaHidden,p=(0,o.default)(e,c);return d.default.createElement("img",(0,l.default)({"aria-hidden":m,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:u,ref:t,loading:f,draggable:g,style:(0,l.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));z.propTypes={style:u.default.object,onError:u.default.func,onLoad:u.default.func};var T=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=S&&y(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||S&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=d.default.createRef(),a.placeholderRef=t.placeholderRef||d.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:S}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:y(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=C(e,(function(){var e=y(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=f(e),(a=m(t))&&(h[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=f(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,u=e.placeholderStyle,c=void 0===u?{}:u,g=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,b=e.durationFadeIn,S=e.Tag,v=e.itemProp,E=e.loading,x=e.draggable,I=m||h;if(!I)return null;var C=!1===this.state.fadeIn||this.state.imgLoaded,T=!0===this.state.fadeIn&&!this.state.imgCached,V=(0,l.default)({opacity:C?1:0,transition:T?"opacity "+b+"ms":"none"},o),H="boolean"==typeof y?"lightgray":y,P={transitionDelay:b+"ms"},M=(0,l.default)({opacity:this.state.imgLoaded?0:1},T&&P,o,c),N={title:t,alt:this.state.isVisible?"":a,style:M,className:g,itemProp:v},W=this.state.isHydrated?p(I):I[0];if(m)return d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:(0,l.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},d.default.createElement(S,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),H&&d.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},T&&P)}),W.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:I,generateSources:R}),W.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:I,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(I),d.default.createElement(z,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:E},W,{imageVariants:I}))}}));if(h){var j=(0,l.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,d.default.createElement(S,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},H&&d.default.createElement(S,{"aria-hidden":!0,title:t,style:(0,l.default)({backgroundColor:H,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},T&&P)}),W.base64&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:N,imageVariants:I,generateSources:R}),W.tracedSVG&&d.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:N,imageVariants:I,generateSources:L}),this.state.isVisible&&d.default.createElement("picture",null,w(I),d.default.createElement(z,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:V,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:v,loading:E,draggable:x})),this.addNoScript&&d.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:k((0,l.default)({alt:a,title:t,loading:E},W,{imageVariants:I}))}}))}return null},t}(d.default.Component);T.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var V=u.default.shape({width:u.default.number.isRequired,height:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string}),H=u.default.shape({aspectRatio:u.default.number.isRequired,src:u.default.string.isRequired,srcSet:u.default.string.isRequired,sizes:u.default.string.isRequired,base64:u.default.string,tracedSVG:u.default.string,srcWebp:u.default.string,srcSetWebp:u.default.string,media:u.default.string,maxWidth:u.default.number,maxHeight:u.default.number});function P(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");u.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}T.propTypes={resolutions:V,sizes:H,fixed:P(u.default.oneOfType([V,u.default.arrayOf(V)])),fluid:P(u.default.oneOfType([H,u.default.arrayOf(H)])),fadeIn:u.default.bool,durationFadeIn:u.default.number,title:u.default.string,alt:u.default.string,className:u.default.oneOfType([u.default.string,u.default.object]),critical:u.default.bool,crossOrigin:u.default.oneOfType([u.default.string,u.default.bool]),style:u.default.object,imgStyle:u.default.object,placeholderStyle:u.default.object,placeholderClassName:u.default.string,backgroundColor:u.default.oneOfType([u.default.string,u.default.bool]),onLoad:u.default.func,onError:u.default.func,onStartLoad:u.default.func,Tag:u.default.string,itemProp:u.default.string,loading:u.default.oneOf(["auto","lazy","eager"]),draggable:u.default.bool};var M=T;t.Z=M},6179:function(e,t,a){var r=a(7294),i=a(5414),n=a(5444),s=function(e){var t=e.description,a=e.lang,s=e.meta,o=e.title,l=(0,n.useStaticQuery)("3000541721").site,d=t||l.siteMetadata.description;return r.createElement(i.Z,{htmlAttributes:{lang:a},title:o,titleTemplate:"%s | "+l.siteMetadata.title,meta:[{name:"description",content:d},{property:"og:title",content:o},{property:"og:description",content:d},{property:"og:type",content:"website"}].concat(s)})};s.defaultProps={lang:"en",meta:[],description:""},t.Z=s},1621:function(e,t,a){var r=a(7294),i=a(5444);t.Z=function(e){var t=e.name,a=function(){switch(t){case"Code":return"#0577CE";case"Math":return"#8C55E5";case"Personal":return"#B64E5C";case"Science":return"#7be21d";default:return"#0577CE"}},n={backgroundColor:a(),color:"Science"===t?"#000":"#fff",border:"1px solid "+a(),borderRadius:"20px",margin:"0 4px",padding:"2px 8px",fontSize:"100%",fontWeight:"bold"};return r.createElement(i.Link,{to:"/tags/"+t.toLowerCase(),style:n},t)}},6640:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}});var r=a(7294),i=a(5444),n=a(1496),s=a(5713),o=function(){var e=(0,i.useStaticQuery)("3662927739"),t=e.site.siteMetadata.author;return r.createElement(r.Fragment,null,r.createElement("div",{style:{display:"flex",fontSize:"16px",marginBottom:(0,s.qZ)(.75)}},r.createElement(n.Z,{fixed:e.avatar.childImageSharp.fixed,alt:t.name,style:{marginRight:(0,s.qZ)(.5),marginBottom:0,minWidth:140,borderRadius:"100%"},imgStyle:{borderRadius:"50%"}}),r.createElement("p",null,t.summary)),r.createElement("div",{style:{borderLeft:"4px solid #2541b2",borderRight:"4px solid #2541b2",padding:24,marginTop:10}},r.createElement("h3",{style:{margin:0}},'Coming Soon: "How to..." Series'),r.createElement("p",{style:{margin:0}},"There's approximately 8 billion code courses out there, but I thought I'd try my hand at one.")))},l=a(7198),d=a(6179),u=a(1621),c=function(e){var t=e.data,a=e.location,n=e.pageContext,c=t.site.siteMetadata.title,f=t.allMarkdownRemark.edges,g=n.currentPage,m=n.numPages,p=1===g,h=g===m,y=g-1==1?"/":(g-1).toString(),b=(g+1).toString();return r.createElement(l.Z,{location:a,title:c},r.createElement(d.Z,{title:"Blog"}),r.createElement(o,null),f.map((function(e){var t=e.node,a=t.frontmatter.title||t.fields.slug;return r.createElement("article",{key:t.fields.slug},r.createElement("header",null,r.createElement(i.Link,{style:{boxShadow:"none"},to:t.fields.slug},r.createElement("h3",{style:{marginBottom:0}},a),r.createElement("h4",{style:{marginTop:(0,s.qZ)(.2),marginBottom:0}},t.frontmatter.subtitle)),r.createElement("small",null,t.frontmatter.date," • ",t.timeToRead+" min read"," ",t.frontmatter.tags.map((function(e){return r.createElement(u.Z,{key:e,name:e})})))),r.createElement("section",null,r.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.description||t.excerpt}})))})),r.createElement("div",{style:{display:"flex"}},r.createElement("div",{style:{width:"33%"}},!p&&r.createElement(i.Link,{to:"http://localhost:8000/"+y,rel:"prev",style:{justifyContent:"flex-start"}},"← Previous Page")),r.createElement("div",{className:"pageNumbers"},Array.from({length:m},(function(e,t){return r.createElement(i.Link,{key:"pagination-number"+(t+1),to:"/"+(0===t?"":t+1)},t+1)}))),r.createElement("div",{style:{width:"33%",textAlign:"right"}},!h&&r.createElement(i.Link,{to:"http://localhost:8000/"+b,rel:"next",style:{justifyContent:"flex-end"}},"Next Page →"))))}}}]);
//# sourceMappingURL=component---src-templates-blog-list-js-8185d4493076134bc1c5.js.map