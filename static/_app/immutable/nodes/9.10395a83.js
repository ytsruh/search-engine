import{s as ee,n as B,d as Z,e as ne,f as de}from"../chunks/utils.50d53bae.js";import{b as g,f as m,z as J,h,i as z,d as _,v as _e,y as ge,g as k,e as oe,s as S,k as F,c as V,l as M,q as n,m as Y,F as me}from"../chunks/scheduler.9c47e382.js";import{S as te,i as re,b as K,d as Q,m as U,a as j,t as q,e as W,c as he,g as pe}from"../chunks/index.2a1b9d3c.js";import{e as ce}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.81dfeb6a.js";import{p as ve}from"../chunks/stores.f18e6bd3.js";import{g as ie}from"../chunks/navigation.96bc44bb.js";import{L as be}from"../chunks/Loading.ec51317a.js";import{I as xe,g as $e,a as ye}from"../chunks/IconBase.6595628f.js";function ke(s){let e,t='<h1 class="text-primary-500 text-3xl py-2">No results found</h1> <h2 class="text-surface-500 dark:text-surface-50 text-xl py-2">Please search again</h2> <a href="/" class="btn variant-filled-primary my-5">Search again</a>';return{c(){e=g("div"),e.innerHTML=t,this.h()},l(r){e=m(r,"DIV",{class:!0,["data-svelte-h"]:!0}),J(e)!=="svelte-1y1qynl"&&(e.innerHTML=t),this.h()},h(){h(e,"class","flex flex-col justify-center items-center h-full")},m(r,u){z(r,e,u)},p:B,i:B,o:B,d(r){r&&_(e)}}}class Ee extends te{constructor(e){super(),re(this,e,null,ke,ee,{})}}function De(s){let e;return{c(){e=_e("path"),this.h()},l(t){e=ge(t,"path",{d:!0}),k(e).forEach(_),this.h()},h(){h(e,"d","M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z")},m(t,r){z(t,e,r)},p:B,d(t){t&&_(e)}}}function we(s){let e,t;const r=[{viewBox:"0 0 448 512"},s[0]];let u={$$slots:{default:[De]},$$scope:{ctx:s}};for(let l=0;l<r.length;l+=1)u=Z(u,r[l]);return e=new xe({props:u}),{c(){K(e.$$.fragment)},l(l){Q(e.$$.fragment,l)},m(l,o){U(e,l,o),t=!0},p(l,[o]){const v=o&1?$e(r,[r[0],ye(l[0])]):{};o&2&&(v.$$scope={dirty:o,ctx:l}),e.$set(v)},i(l){t||(j(e.$$.fragment,l),t=!0)},o(l){q(e.$$.fragment,l),t=!1},d(l){W(e,l)}}}function Ce(s,e,t){return s.$$set=r=>{t(0,e=Z(Z({},e),ne(r)))},e=ne(e),[e]}class Ie extends te{constructor(e){super(),re(this,e,Ce,we,ee,{})}}function ue(s,e,t){const r=s.slice();return r[5]=e[t],r}function Te(s){let e,t;return e=new Ee({}),{c(){K(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,u){U(e,r,u),t=!0},p:B,i(r){t||(j(e.$$.fragment,r),t=!0)},o(r){q(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function He(s){let e,t,r,u="Your Search Results",l,o,v=s[1].count+"",a,$,w,T,C,b,D,P="Not found what you're looking for?",O,E,L="Try a proper search engine instead",R,H,x,d,y,I=ce(s[1].results),i=[];for(let f=0;f<I.length;f+=1)i[f]=fe(ue(s,I,f));const G=f=>q(i[f],1,1,()=>{i[f]=null});return{c(){e=g("div"),t=g("div"),r=g("h1"),r.textContent=u,l=S(),o=g("h2"),a=F(v),$=F(" results found"),w=S(),T=g("div");for(let f=0;f<i.length;f+=1)i[f].c();C=S(),b=g("div"),D=g("h2"),D.textContent=P,O=S(),E=g("h5"),E.textContent=L,R=S(),H=g("div"),x=g("a"),d=F("Search DuckDuckGo"),this.h()},l(f){e=m(f,"DIV",{class:!0});var p=k(e);t=m(p,"DIV",{class:!0});var c=k(t);r=m(c,"H1",{class:!0,["data-svelte-h"]:!0}),J(r)!=="svelte-1nxljfp"&&(r.textContent=u),l=V(c),o=m(c,"H2",{class:!0});var N=k(o);a=M(N,v),$=M(N," results found"),N.forEach(_),w=V(c),T=m(c,"DIV",{class:!0});var ae=k(T);for(let X=0;X<i.length;X+=1)i[X].l(ae);ae.forEach(_),c.forEach(_),C=V(p),b=m(p,"DIV",{class:!0});var A=k(b);D=m(A,"H2",{class:!0,["data-svelte-h"]:!0}),J(D)!=="svelte-1ll6dkg"&&(D.textContent=P),O=V(A),E=m(A,"H5",{class:!0,["data-svelte-h"]:!0}),J(E)!=="svelte-1xb4oli"&&(E.textContent=L),R=V(A),H=m(A,"DIV",{class:!0});var le=k(H);x=m(le,"A",{type:!0,class:!0,href:!0});var se=k(x);d=M(se,"Search DuckDuckGo"),se.forEach(_),le.forEach(_),A.forEach(_),p.forEach(_),this.h()},h(){h(r,"class","text-3xl pb-5"),h(o,"class","text-lg pb-5"),h(T,"class","grid grid-cols-1 md:grid-cols-2 py-2 gap-4"),h(t,"class","col-span-2"),h(D,"class","text-2xl py-2"),h(E,"class","text-lg py-2"),h(x,"type","button"),h(x,"class","btn variant-filled-primary"),h(x,"href",`https://www.duckduckgo.com?q=${s[2]}`),h(H,"class","flex py-2"),h(b,"class","hidden lg:flex lg:flex-col p-5 my-10"),h(e,"class","grid grid-cols-1 lg:grid-cols-3 p-5 h-full")},m(f,p){z(f,e,p),n(e,t),n(t,r),n(t,l),n(t,o),n(o,a),n(o,$),n(t,w),n(t,T);for(let c=0;c<i.length;c+=1)i[c]&&i[c].m(T,null);n(e,C),n(e,b),n(b,D),n(b,O),n(b,E),n(b,R),n(b,H),n(H,x),n(x,d),y=!0},p(f,p){if((!y||p&2)&&v!==(v=f[1].count+"")&&Y(a,v),p&2){I=ce(f[1].results);let c;for(c=0;c<I.length;c+=1){const N=ue(f,I,c);i[c]?(i[c].p(N,p),j(i[c],1)):(i[c]=fe(N),i[c].c(),j(i[c],1),i[c].m(T,null))}for(pe(),c=I.length;c<i.length;c+=1)G(c);he()}},i(f){if(!y){for(let p=0;p<I.length;p+=1)j(i[p]);y=!0}},o(f){i=i.filter(Boolean);for(let p=0;p<i.length;p+=1)q(i[p]);y=!1},d(f){f&&_(e),me(i,f)}}}function Le(s){let e,t;return e=new be({}),{c(){K(e.$$.fragment)},l(r){Q(e.$$.fragment,r)},m(r,u){U(e,r,u),t=!0},p:B,i(r){t||(j(e.$$.fragment,r),t=!0)},o(r){q(e.$$.fragment,r),t=!1},d(r){W(e,r)}}}function fe(s){let e,t,r,u,l=(s[5].pageTitle?s[5].pageTitle:s[5].url)+"",o,v,a,$=(s[5].pageDescription?s[5].pageDescription:"No description available")+"",w,T,C,b,D=s[5].url+"",P,O,E,L,R,H,x;return L=new Ie({}),{c(){e=g("a"),t=g("div"),r=g("section"),u=g("h6"),o=F(l),v=S(),a=g("p"),w=F($),T=S(),C=g("footer"),b=g("p"),P=F(D),O=S(),E=g("div"),K(L.$$.fragment),R=S(),this.h()},l(d){e=m(d,"A",{class:!0,href:!0,target:!0});var y=k(e);t=m(y,"DIV",{class:!0});var I=k(t);r=m(I,"SECTION",{class:!0});var i=k(r);u=m(i,"H6",{class:!0});var G=k(u);o=M(G,l),G.forEach(_),v=V(i),a=m(i,"P",{class:!0});var f=k(a);w=M(f,$),f.forEach(_),i.forEach(_),T=V(I),C=m(I,"FOOTER",{class:!0});var p=k(C);b=m(p,"P",{class:!0});var c=k(b);P=M(c,D),c.forEach(_),O=V(p),E=m(p,"DIV",{class:!0});var N=k(E);Q(L.$$.fragment,N),N.forEach(_),p.forEach(_),I.forEach(_),R=V(y),y.forEach(_),this.h()},h(){h(u,"class","text-primary-500 font-bold truncate"),h(a,"class","text-surface-900 dark:text-surface-100 line-clamp-3"),h(r,"class","p-4"),h(b,"class","text-sm italic truncate pr-5"),h(E,"class","icon svelte-190uef9"),h(C,"class","card-footer flex justify-between items-center text-surface-500 dark:text-surface-200"),h(t,"class","flex flex-col justify-between h-full"),h(e,"class","block card card-hover p-1 h-full"),h(e,"href",H=s[5].url),h(e,"target","_blank")},m(d,y){z(d,e,y),n(e,t),n(t,r),n(r,u),n(u,o),n(r,v),n(r,a),n(a,w),n(t,T),n(t,C),n(C,b),n(b,P),n(C,O),n(C,E),U(L,E,null),n(e,R),x=!0},p(d,y){(!x||y&2)&&l!==(l=(d[5].pageTitle?d[5].pageTitle:d[5].url)+"")&&Y(o,l),(!x||y&2)&&$!==($=(d[5].pageDescription?d[5].pageDescription:"No description available")+"")&&Y(w,$),(!x||y&2)&&D!==(D=d[5].url+"")&&Y(P,D),(!x||y&2&&H!==(H=d[5].url))&&h(e,"href",H)},i(d){x||(j(L.$$.fragment,d),x=!0)},o(d){q(L.$$.fragment,d),x=!1},d(d){d&&_(e),W(L)}}}function Ne(s){let e,t,r,u;const l=[Le,He,Te],o=[];function v(a,$){return a[0]?0:a[1].count>0?1:2}return e=v(s),t=o[e]=l[e](s),{c(){t.c(),r=oe()},l(a){t.l(a),r=oe()},m(a,$){o[e].m(a,$),z(a,r,$),u=!0},p(a,[$]){let w=e;e=v(a),e===w?o[e].p(a,$):(pe(),q(o[w],1,1,()=>{o[w]=null}),he(),t=o[e],t?t.p(a,$):(t=o[e]=l[e](a),t.c()),j(t,1),t.m(r.parentNode,r))},i(a){u||(j(t),u=!0)},o(a){q(t),u=!1},d(a){a&&_(r),o[e].d(a)}}}function Se(s,e,t){let r;de(s,ve,a=>t(3,r=a));const u=r.url.searchParams.get("q");u||ie("/");let l=!0,o={count:0,results:[]};async function v(){try{const a=await fetch("/api/search",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({searchTerm:u})});if(!a.ok){console.log("problem with fetching data"),t(0,l=!1);return}t(1,o=await a.json()),t(0,l=!1)}catch{ie("500"),t(0,l=!1)}}return v(),[l,o,u]}class Fe extends te{constructor(e){super(),re(this,e,Se,Ne,ee,{})}}export{Fe as component};