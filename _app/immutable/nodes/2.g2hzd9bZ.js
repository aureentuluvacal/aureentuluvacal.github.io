import{q as F,r as b,u as k,S as N,v as G,w as O,x as J,y as P,z as I,A as Q,B as W,C as Z,d as T,t as R,D as $,n as q,i as ee,h as D,f as E,s as y,l as L}from"../chunks/disclose-version.kKvJJDcG.js";import{j as w,r as C,k as te,E as K,l as le,m as U,n as M,o as V,q as ae,v as S,w as ne,x as X,y as se,z as re,s as Y,b as ie,c as ue,A as z}from"../chunks/runtime.n4xba1mo.js";import{b as ce}from"../chunks/paths.iy-VLetV.js";function oe(){}function fe(e,r,s,n,t,d,_){const m=(s&S)!==0,l=Q(s,e);let v=null;F(e,m);let h,g=null,x=null;l.r=a=>{const u=v,c=u.s;c.add(a),a.f(()=>{c.delete(a),c.size===0&&u.e!==null&&(u.d!==null&&(b(u.d),u.d=null),w(u.e),u.e=null)})};const i=()=>{const a={d:null,e:null,s:new Set,p:v},u=C(()=>{const c=l.d;c!==null&&(b(c),l.d=null);let f=l.a;(l.f&S)!==0&&(f=W(),l.a.appendChild(f)),d(f),a.d=l.d,l.d=null},l,!0);a.e=u,v=a},p=a=>{const u=a.f,c=(u&S)!==0,f=a.a;_(h,a,f,c,t,u,!0,g)},o=C(()=>{const a=r();h=te(a)?a:a==null?[]:Array.from(a),n!==null?g=h.map(n):s&K||h.map(oe);const u=h.length;if(d!==null){if(u===0){if(l.v.length!==0||x===null){p(l),i();return}}else if(l.v.length===0&&v!==null){const c=v,f=c.s;f.size===0?c.d!==null&&(b(c.d),c.d=null):k(f,"out")}}x!==null&&ne(x)},l,!1);x=C(p,l,!0),le(o,()=>{const a=l.f,u=l.a,c=(a&S)!==0;let f=v;for(;f!==null;){const A=f.d;A!==null&&b(A);const B=f.e;B!==null&&w(B),f=f.p}_([],l,u,c,t,a,!1,g),w(x)}),l.e=o}function _e(e,r,s,n,t){fe(e,r,s,null,n,t,ve)}function ve(e,r,s,n,t,d,_){var m=N in e&&e[N].i,l=r.v,v=r.s;m&&(d&=~M);var h=l.length,g=e.length,x=Math.max(h,g),i=0,p,o;if(v.length!==0&&he(v),g===0)for(p=[],n&&h!==0&&G(s);i<x;)o=l[i++],H(o,v,_,n);else{var a;if(p=Array(g),O!==null)for(var u=O[0];i<x;i++){a=m?U(e,i):e[i];var c=J(u);P(c),u=c.at(-1).nextSibling.nextSibling,o=j(a,null,i,t,d),p[i]=o}else for(;i<x;i++)i>=h?(a=m?U(e,i):e[i],o=j(a,null,i,t,d),p[i]=o,de(o,s,n,null)):i>=g?(o=l[i],H(o,v,_)):(a=e[i],o=l[i],p[i]=o,xe(o,a,i,d))}r.v=p}function de(e,r,s,n){var t=e.d;return n===null?s?I(t,r,null):I(t,r.parentNode,r):I(t,null,n)}function he(e){var r=e.length;if(r>0){for(var s=0,n,t;s<r;s++)n=e[s],t=n.r,t!==null&&(n.r=null,H(n,null,!1));e.length=0}}function xe(e,r,s,n){n&M?V(e.v,r):ae(e.v)&&(e.v.o[e.v.p]=r);const t=e.s,d=(n&X)!==0,_=e.a;t!==null&&n&K&&_!==null&&_(e,t,s,d),d?V(e.i,s):e.i=s}function H(e,r,s,n=!1){const t=e.s;if(s&&t!==null){for(let _ of t)_.r==="key"&&t.delete(_);if(t.size===0)e.s=null;else{k(t,"out"),r!==null&&r.push(e);return}}const d=e.d;!n&&d!==null&&b(d),w(e.e)}function j(e,r,s,n,t){const _=(t&M)===0?e:t&se?Y(e):re(e),m=t&X?Y(s):s,l=Z(_,m,r),v=C(h=>{n(null,h.v,h.i)},l,!0);return l.e=v,l}var pe=L('<h4 class="svelte-1r1uxxz"> </h4>'),me=L('<li class="post svelte-1r1uxxz"><a class="svelte-1r1uxxz"><div class="post-header svelte-1r1uxxz"><div class="post-title svelte-1r1uxxz"><h3 class="svelte-1r1uxxz"> </h3> <!></div> <span> </span></div> <p> </p></a></li>'),ge=L('<ul class="svelte-1r1uxxz"></ul>');function Ae(e,r){ue(r,!1);var s=D(e,!0,ge);_e(s,()=>r.data.posts,9,(n,t,d)=>{var _=D(n,!0,me),m=E(_),l=E(m),v=E(l),h=E(v),g=E(h),x=y(y(h)),i=y(y(v)),p=E(i),o=y(y(l)),a=E(o);R(p,()=>new Date(z(t).date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}));var u;C(()=>{u!==(u=`${ce}/posts/${z(t).slug}`)&&$(m,"href",u),q(g,z(t).title),q(a,z(t).description)}),ee(x,()=>z(t).subtitle,c=>{var f=D(c,!0,pe),A=E(f);R(A,()=>z(t).subtitle),T(c,f)},null),T(n,_)},null),T(e,s),ie()}export{Ae as component};