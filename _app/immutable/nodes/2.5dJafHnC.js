import{q as F,r as C,u as k,S as B,v as G,w as N,x as J,y as P,z,A as Q,B as W,C as Z,d as I,t as O,D as $,n as R,i as ee,h as T,f as x,s as E,l as H}from"../chunks/disclose-version.kKvJJDcG.js";import{j as w,r as S,k as te,E as K,l as le,m as U,n as L,o as V,q as ae,v as q,w as se,x as X,y as ne,z as re,s as Y,b as ie,c as ce,A}from"../chunks/runtime.n4xba1mo.js";import{b as ue}from"../chunks/paths.H21PiljT.js";function oe(){}function fe(e,r,n,s,t,d,_){const y=(n&q)!==0,l=Q(n,e);let v=null;F(e,y);let h,g=null,p=null;l.r=a=>{const c=v,u=c.s;u.add(a),a.f(()=>{u.delete(a),u.size===0&&c.e!==null&&(c.d!==null&&(C(c.d),c.d=null),w(c.e),c.e=null)})};const i=()=>{const a={d:null,e:null,s:new Set,p:v},c=S(()=>{const u=l.d;u!==null&&(C(u),l.d=null);let f=l.a;(l.f&q)!==0&&(f=W(),l.a.appendChild(f)),d(f),a.d=l.d,l.d=null},l,!0);a.e=c,v=a},m=a=>{const c=a.f,u=(c&q)!==0,f=a.a;_(h,a,f,u,t,c,!0,g)},o=S(()=>{const a=r();h=te(a)?a:a==null?[]:Array.from(a),s!==null?g=h.map(s):n&K||h.map(oe);const c=h.length;if(d!==null){if(c===0){if(l.v.length!==0||p===null){m(l),i();return}}else if(l.v.length===0&&v!==null){const u=v,f=u.s;f.size===0?u.d!==null&&(C(u.d),u.d=null):k(f,"out")}}p!==null&&se(p)},l,!1);p=S(m,l,!0),le(o,()=>{const a=l.f,c=l.a,u=(a&q)!==0;let f=v;for(;f!==null;){const b=f.d;b!==null&&C(b);const M=f.e;M!==null&&w(M),f=f.p}_([],l,c,u,t,a,!1,g),w(p)}),l.e=o}function _e(e,r,n,s,t){fe(e,r,n,null,s,t,ve)}function ve(e,r,n,s,t,d,_){var y=B in e&&e[B].i,l=r.v,v=r.s;y&&(d&=~L);var h=l.length,g=e.length,p=Math.max(h,g),i=0,m,o;if(v.length!==0&&he(v),g===0)for(m=[],s&&h!==0&&G(n);i<p;)o=l[i++],D(o,v,_,s);else{var a;if(m=Array(g),N!==null)for(var c=N[0];i<p;i++){a=y?U(e,i):e[i];var u=J(c);P(u),c=u.at(-1).nextSibling.nextSibling,o=j(a,null,i,t,d),m[i]=o}else for(;i<p;i++)i>=h?(a=y?U(e,i):e[i],o=j(a,null,i,t,d),m[i]=o,de(o,n,s,null)):i>=g?(o=l[i],D(o,v,_)):(a=e[i],o=l[i],m[i]=o,pe(o,a,i,d))}r.v=m}function de(e,r,n,s){var t=e.d;return s===null?n?z(t,r,null):z(t,r.parentNode,r):z(t,null,s)}function he(e){var r=e.length;if(r>0){for(var n=0,s,t;n<r;n++)s=e[n],t=s.r,t!==null&&(s.r=null,D(s,null,!1));e.length=0}}function pe(e,r,n,s){s&L?V(e.v,r):ae(e.v)&&(e.v.o[e.v.p]=r);const t=e.s,d=(s&X)!==0,_=e.a;t!==null&&s&K&&_!==null&&_(e,t,n,d),d?V(e.i,n):e.i=n}function D(e,r,n,s=!1){const t=e.s;if(n&&t!==null){for(let _ of t)_.r==="key"&&t.delete(_);if(t.size===0)e.s=null;else{k(t,"out"),r!==null&&r.push(e);return}}const d=e.d;!s&&d!==null&&C(d),w(e.e)}function j(e,r,n,s,t){const _=(t&L)===0?e:t&ne?Y(e):re(e),y=t&X?Y(n):n,l=Z(_,y,r),v=S(h=>{s(null,h.v,h.i)},l,!0);return l.e=v,l}var me=H('<h4 class="svelte-14qsv2y"> </h4>'),ye=H('<li class="post svelte-14qsv2y"><a class="svelte-14qsv2y"><div class="post-header svelte-14qsv2y"><div class="post-title svelte-14qsv2y"><h3 class="svelte-14qsv2y"> </h3> <!></div> <span> </span></div> <p> </p></a></li>'),ge=H('<ul class="svelte-14qsv2y"></ul>');function be(e,r){ce(r,!1);var n=T(e,!0,ge);_e(n,()=>r.data.posts,9,(s,t,d)=>{var _=T(s,!0,ye),y=x(_),l=x(y),v=x(l),h=x(v),g=x(h),p=E(E(h)),i=E(E(v)),m=x(i),o=E(E(l)),a=x(o);O(m,()=>new Date(A(t).date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"}));var c;S(()=>{c!==(c=`${ue}/posts/${A(t).slug}`)&&$(y,"href",c),R(g,A(t).title),R(a,A(t).description)}),ee(p,()=>A(t).subtitle,u=>{var f=T(u,!0,me),b=x(f);O(b,()=>A(t).subtitle),I(u,f)},null),I(s,_)},null),I(e,n),ie()}export{be as component};
