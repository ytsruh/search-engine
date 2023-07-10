import{r as qe}from"../chunks/index.ade5cbd2.js";import{S as _e,i as be,s as ue,e as Y,b as F,K as R,g as S,v as oe,d as P,f as re,h as b,U as Ae,_ as Ge,I as Z,J as se,R as ge,k as L,l as D,m as N,n as h,D as p,$ as We,a0 as me,a1 as te,T as pe,L as Te,x as Ee,y as le,z as ie,A as ae,W as ke,X as we,B as ne,a as A,c as w,a2 as Be,q as K,r as X,a3 as Ce,a4 as Le,u as x,M as Je,P as Qe,N as Ze,Q as xe,a5 as $e}from"../chunks/index.46a9379e.js";import{i as et}from"../chunks/navigation.b2d08459.js";import{I as tt}from"../chunks/IconBase.cf176f58.js";import{w as lt}from"../chunks/index.4e6dd2cc.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.3785e41c.js";import{f as fe,a as De}from"../chunks/index.b7cec924.js";import{L as at}from"../chunks/Loading.cabc868e.js";function nt(){const{subscribe:l,set:e,update:t}=lt([]);return{subscribe:l,set:e,update:t,trigger:n=>t(o=>(o.push(n),o)),close:()=>t(n=>(n.length>0&&n.shift(),n)),clear:()=>e([])}}const W=nt();function ot(l,e){const t='a[href], button, input, textarea, select, details, [tabindex]:not([tabindex="-1"])';let n,o;function a(f){f.shiftKey&&f.code==="Tab"&&(f.preventDefault(),o.focus())}function r(f){!f.shiftKey&&f.code==="Tab"&&(f.preventDefault(),n.focus())}const c=f=>{if(e===!1)return;const d=Array.from(l.querySelectorAll(t));d.length&&(n=d[0],o=d[d.length-1],f||n.focus(),n.addEventListener("keydown",a),o.addEventListener("keydown",r))};c(!1);function i(){n&&n.removeEventListener("keydown",a),o&&o.removeEventListener("keydown",r)}const s=(f,d)=>(f.length&&(i(),c(!0)),d),m=new MutationObserver(s);return m.observe(l,{childList:!0,subtree:!0}),{update(f){e=f,f?c(!1):i()},destroy(){i(),m.disconnect()}}}function Ne(l){let e=l[12],t,n,o=Se(l);return{c(){o.c(),t=Y()},l(a){o.l(a),t=Y()},m(a,r){o.m(a,r),F(a,t,r),n=!0},p(a,r){r[0]&4096&&ue(e,e=a[12])?(oe(),P(o,1,1,ge),re(),o=Se(a),o.c(),S(o,1),o.m(t.parentNode,t)):o.p(a,r)},i(a){n||(S(o),n=!0)},o(a){P(o),n=!1},d(a){a&&b(t),o.d(a)}}}function rt(l){var s,m;let e,t,n,o,a;const r=[(s=l[14])==null?void 0:s.props,{parent:l[15]}];var c=(m=l[14])==null?void 0:m.ref;function i(f){let d={$$slots:{default:[st]},$$scope:{ctx:f}};for(let _=0;_<r.length;_+=1)d=Z(d,r[_]);return{props:d}}return c&&(t=Ee(c,i(l))),{c(){e=L("div"),t&&le(t.$$.fragment),this.h()},l(f){e=D(f,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var d=N(e);t&&ie(t.$$.fragment,d),d.forEach(b),this.h()},h(){var f;h(e,"class",n="modal contents "+(((f=l[12][0])==null?void 0:f.modalClasses)??"")),h(e,"data-testid","modal-component"),h(e,"role","dialog"),h(e,"aria-modal","true"),h(e,"aria-label",o=l[12][0].title??"")},m(f,d){F(f,e,d),t&&ae(t,e,null),a=!0},p(f,d){var T,y,C;const _=d[0]&49152?ke(r,[d[0]&16384&&we((T=f[14])==null?void 0:T.props),d[0]&32768&&{parent:f[15]}]):{};if(d[0]&16384|d[1]&8192&&(_.$$scope={dirty:d,ctx:f}),d[0]&16384&&c!==(c=(y=f[14])==null?void 0:y.ref)){if(t){oe();const g=t;P(g.$$.fragment,1,0,()=>{ne(g,1)}),re()}c?(t=Ee(c,i(f)),le(t.$$.fragment),S(t.$$.fragment,1),ae(t,e,null)):t=null}else c&&t.$set(_);(!a||d[0]&4096&&n!==(n="modal contents "+(((C=f[12][0])==null?void 0:C.modalClasses)??"")))&&h(e,"class",n),(!a||d[0]&4096&&o!==(o=f[12][0].title??""))&&h(e,"aria-label",o)},i(f){a||(t&&S(t.$$.fragment,f),a=!0)},o(f){t&&P(t.$$.fragment,f),a=!1},d(f){f&&b(e),t&&ne(t)}}}function it(l){var y,C,g,H;let e,t,n,o,a,r,c,i,s=((y=l[12][0])==null?void 0:y.title)&&He(l),m=((C=l[12][0])==null?void 0:C.body)&&Ie(l),f=((g=l[12][0])==null?void 0:g.image)&&typeof((H=l[12][0])==null?void 0:H.image)=="string"&&Me(l);function d(k,v){if(k[12][0].type==="alert")return ct;if(k[12][0].type==="confirm")return ut;if(k[12][0].type==="prompt")return ft}let _=d(l),T=_&&_(l);return{c(){e=L("div"),s&&s.c(),t=A(),m&&m.c(),n=A(),f&&f.c(),o=A(),T&&T.c(),this.h()},l(k){e=D(k,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-modal":!0,"aria-label":!0});var v=N(e);s&&s.l(v),t=w(v),m&&m.l(v),n=w(v),f&&f.l(v),o=w(v),T&&T.l(v),v.forEach(b),this.h()},h(){h(e,"class",a="modal "+l[16]),h(e,"data-testid","modal"),h(e,"role","dialog"),h(e,"aria-modal","true"),h(e,"aria-label",r=l[12][0].title??"")},m(k,v){F(k,e,v),s&&s.m(e,null),p(e,t),m&&m.m(e,null),p(e,n),f&&f.m(e,null),p(e,o),T&&T.m(e,null),i=!0},p(k,v){var M,E,U,B;l=k,(M=l[12][0])!=null&&M.title?s?s.p(l,v):(s=He(l),s.c(),s.m(e,t)):s&&(s.d(1),s=null),(E=l[12][0])!=null&&E.body?m?m.p(l,v):(m=Ie(l),m.c(),m.m(e,n)):m&&(m.d(1),m=null),(U=l[12][0])!=null&&U.image&&typeof((B=l[12][0])==null?void 0:B.image)=="string"?f?f.p(l,v):(f=Me(l),f.c(),f.m(e,o)):f&&(f.d(1),f=null),_===(_=d(l))&&T?T.p(l,v):(T&&T.d(1),T=_&&_(l),T&&(T.c(),T.m(e,null))),(!i||v[0]&65536&&a!==(a="modal "+l[16]))&&h(e,"class",a),(!i||v[0]&4096&&r!==(r=l[12][0].title??""))&&h(e,"aria-label",r)},i(k){i||(me(()=>{i&&(c||(c=te(e,fe,{duration:l[3],opacity:0,y:100},!0)),c.run(1))}),i=!0)},o(k){c||(c=te(e,fe,{duration:l[3],opacity:0,y:100},!1)),c.run(0),i=!1},d(k){k&&b(e),s&&s.d(),m&&m.d(),f&&f.d(),T&&T.d(),k&&c&&c.end()}}}function Oe(l){var o;let e,t=((o=l[14])==null?void 0:o.slot)+"",n;return{c(){e=new Je(!1),n=Y(),this.h()},l(a){e=Qe(a,!1),n=Y(),this.h()},h(){e.a=n},m(a,r){e.m(t,a,r),F(a,n,r)},p(a,r){var c;r[0]&16384&&t!==(t=((c=a[14])==null?void 0:c.slot)+"")&&e.p(t)},d(a){a&&b(n),a&&e.d()}}}function st(l){var n;let e,t=((n=l[14])==null?void 0:n.slot)&&Oe(l);return{c(){t&&t.c(),e=Y()},l(o){t&&t.l(o),e=Y()},m(o,a){t&&t.m(o,a),F(o,e,a)},p(o,a){var r;(r=o[14])!=null&&r.slot?t?t.p(o,a):(t=Oe(o),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},d(o){t&&t.d(o),o&&b(e)}}}function He(l){let e,t=l[12][0].title+"",n;return{c(){e=L("header"),this.h()},l(o){e=D(o,"HEADER",{class:!0});var a=N(e);a.forEach(b),this.h()},h(){h(e,"class",n="modal-header "+l[9])},m(o,a){F(o,e,a),e.innerHTML=t},p(o,a){a[0]&4096&&t!==(t=o[12][0].title+"")&&(e.innerHTML=t),a[0]&512&&n!==(n="modal-header "+o[9])&&h(e,"class",n)},d(o){o&&b(e)}}}function Ie(l){let e,t=l[12][0].body+"",n;return{c(){e=L("article"),this.h()},l(o){e=D(o,"ARTICLE",{class:!0});var a=N(e);a.forEach(b),this.h()},h(){h(e,"class",n="modal-body "+l[10])},m(o,a){F(o,e,a),e.innerHTML=t},p(o,a){a[0]&4096&&t!==(t=o[12][0].body+"")&&(e.innerHTML=t),a[0]&1024&&n!==(n="modal-body "+o[10])&&h(e,"class",n)},d(o){o&&b(e)}}}function Me(l){let e,t;return{c(){e=L("img"),this.h()},l(n){e=D(n,"IMG",{class:!0,src:!0,alt:!0}),this.h()},h(){var n;h(e,"class","modal-image "+bt),Be(e.src,t=(n=l[12][0])==null?void 0:n.image)||h(e,"src",t),h(e,"alt","Modal")},m(n,o){F(n,e,o)},p(n,o){var a;o[0]&4096&&!Be(e.src,t=(a=n[12][0])==null?void 0:a.image)&&h(e,"src",t)},d(n){n&&b(e)}}}function ft(l){let e,t,n,o,a,r,c,i,s,m,f,d,_,T,y=[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},l[12][0].valueAttr],C={};for(let g=0;g<y.length;g+=1)C=Z(C,y[g]);return{c(){e=L("form"),t=L("input"),n=A(),o=L("footer"),a=L("button"),r=K(l[0]),i=A(),s=L("button"),m=K(l[2]),this.h()},l(g){e=D(g,"FORM",{class:!0});var H=N(e);t=D(H,"INPUT",{class:!0,name:!0,type:!0}),n=w(H),o=D(H,"FOOTER",{class:!0});var k=N(o);a=D(k,"BUTTON",{type:!0,class:!0});var v=N(a);r=X(v,l[0]),v.forEach(b),i=w(k),s=D(k,"BUTTON",{type:!0,class:!0});var M=N(s);m=X(M,l[2]),M.forEach(b),k.forEach(b),H.forEach(b),this.h()},h(){Ce(t,C),h(a,"type","button"),h(a,"class",c="btn "+l[7]),h(s,"type","submit"),h(s,"class",f="btn "+l[8]),h(o,"class",d="modal-footer "+l[11]),h(e,"class","space-y-4")},m(g,H){F(g,e,H),p(e,t),t.autofocus&&t.focus(),Le(t,l[13]),p(e,n),p(e,o),p(o,a),p(a,r),p(o,i),p(o,s),p(s,m),_||(T=[R(t,"input",l[39]),R(a,"click",l[21]),R(e,"submit",l[23])],_=!0)},p(g,H){Ce(t,C=ke(y,[{class:"modal-prompt-input input"},{name:"prompt"},{type:"text"},H[0]&4096&&g[12][0].valueAttr])),H[0]&8192&&t.value!==g[13]&&Le(t,g[13]),H[0]&1&&x(r,g[0]),H[0]&128&&c!==(c="btn "+g[7])&&h(a,"class",c),H[0]&4&&x(m,g[2]),H[0]&256&&f!==(f="btn "+g[8])&&h(s,"class",f),H[0]&2048&&d!==(d="modal-footer "+g[11])&&h(o,"class",d)},d(g){g&&b(e),_=!1,pe(T)}}}function ut(l){let e,t,n,o,a,r,c,i,s,m,f;return{c(){e=L("footer"),t=L("button"),n=K(l[0]),a=A(),r=L("button"),c=K(l[1]),this.h()},l(d){e=D(d,"FOOTER",{class:!0});var _=N(e);t=D(_,"BUTTON",{type:!0,class:!0});var T=N(t);n=X(T,l[0]),T.forEach(b),a=w(_),r=D(_,"BUTTON",{type:!0,class:!0});var y=N(r);c=X(y,l[1]),y.forEach(b),_.forEach(b),this.h()},h(){h(t,"type","button"),h(t,"class",o="btn "+l[7]),h(r,"type","button"),h(r,"class",i="btn "+l[8]),h(e,"class",s="modal-footer "+l[11])},m(d,_){F(d,e,_),p(e,t),p(t,n),p(e,a),p(e,r),p(r,c),m||(f=[R(t,"click",l[21]),R(r,"click",l[22])],m=!0)},p(d,_){_[0]&1&&x(n,d[0]),_[0]&128&&o!==(o="btn "+d[7])&&h(t,"class",o),_[0]&2&&x(c,d[1]),_[0]&256&&i!==(i="btn "+d[8])&&h(r,"class",i),_[0]&2048&&s!==(s="modal-footer "+d[11])&&h(e,"class",s)},d(d){d&&b(e),m=!1,pe(f)}}}function ct(l){let e,t,n,o,a,r,c;return{c(){e=L("footer"),t=L("button"),n=K(l[0]),this.h()},l(i){e=D(i,"FOOTER",{class:!0});var s=N(e);t=D(s,"BUTTON",{type:!0,class:!0});var m=N(t);n=X(m,l[0]),m.forEach(b),s.forEach(b),this.h()},h(){h(t,"type","button"),h(t,"class",o="btn "+l[7]),h(e,"class",a="modal-footer "+l[11])},m(i,s){F(i,e,s),p(e,t),p(t,n),r||(c=R(t,"click",l[21]),r=!0)},p(i,s){s[0]&1&&x(n,i[0]),s[0]&128&&o!==(o="btn "+i[7])&&h(t,"class",o),s[0]&2048&&a!==(a="modal-footer "+i[11])&&h(e,"class",a)},d(i){i&&b(e),r=!1,c()}}}function Se(l){let e,t,n,o,a,r,c,i,s,m,f;const d=[it,rt],_=[];function T(y,C){return y[12][0].type!=="component"?0:1}return n=T(l),o=_[n]=d[n](l),{c(){e=L("div"),t=L("div"),o.c(),this.h()},l(y){e=D(y,"DIV",{class:!0,"data-testid":!0});var C=N(e);t=D(C,"DIV",{class:!0});var g=N(t);o.l(g),g.forEach(b),C.forEach(b),this.h()},h(){h(t,"class",a="modal-transition "+l[17]),h(e,"class",c="modal-backdrop "+l[18]),h(e,"data-testid","modal-backdrop")},m(y,C){F(y,e,C),p(e,t),_[n].m(t,null),s=!0,m||(f=[R(e,"mousedown",l[19]),R(e,"mouseup",l[20]),R(e,"touchstart",l[37]),R(e,"touchend",l[38]),We(ot.call(null,e,!0))],m=!0)},p(y,C){l=y;let g=n;n=T(l),n===g?_[n].p(l,C):(oe(),P(_[g],1,1,()=>{_[g]=null}),re(),o=_[n],o?o.p(l,C):(o=_[n]=d[n](l),o.c()),S(o,1),o.m(t,null)),(!s||C[0]&131072&&a!==(a="modal-transition "+l[17]))&&h(t,"class",a),(!s||C[0]&262144&&c!==(c="modal-backdrop "+l[18]))&&h(e,"class",c)},i(y){s||(S(o),me(()=>{s&&(r||(r=te(t,fe,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!0)),r.run(1))}),me(()=>{s&&(i||(i=te(e,De,{duration:l[3]},!0)),i.run(1))}),s=!0)},o(y){P(o),r||(r=te(t,fe,{duration:l[3],opacity:l[4],x:l[5],y:l[6]},!1)),r.run(0),i||(i=te(e,De,{duration:l[3]},!1)),i.run(0),s=!1},d(y){y&&b(e),_[n].d(),y&&r&&r.end(),y&&i&&i.end(),m=!1,pe(f)}}}function dt(l){let e,t,n,o,a=l[12].length>0&&Ne(l);return{c(){a&&a.c(),e=Y()},l(r){a&&a.l(r),e=Y()},m(r,c){a&&a.m(r,c),F(r,e,c),t=!0,n||(o=R(window,"keydown",l[24]),n=!0)},p(r,c){r[12].length>0?a?(a.p(r,c),c[0]&4096&&S(a,1)):(a=Ne(r),a.c(),S(a,1),a.m(e.parentNode,e)):a&&(oe(),P(a,1,1,()=>{a=null}),re())},i(r){t||(S(a),t=!0)},o(r){P(a),t=!1},d(r){a&&a.d(r),r&&b(e),n=!1,o()}}}const mt="fixed top-0 left-0 right-0 bottom-0",ht="w-full h-full p-4 overflow-y-auto flex justify-center",_t="block",bt="w-full h-auto";function gt(l,e,t){let n,o,a,r,c,i;Ae(l,W,u=>t(12,i=u));const s=Ge();let{position:m="items-center"}=e,{components:f={}}=e,{duration:d=150}=e,{flyOpacity:_=0}=e,{flyX:T=0}=e,{flyY:y=100}=e,{background:C="bg-surface-100-800-token"}=e,{width:g="w-modal"}=e,{height:H="h-auto"}=e,{padding:k="p-4"}=e,{spacing:v="space-y-4"}=e,{rounded:M="rounded-container-token"}=e,{shadow:E="shadow-xl"}=e,{zIndex:U="z-[999]"}=e,{buttonNeutral:B="variant-ghost-surface"}=e,{buttonPositive:I="variant-filled"}=e,{buttonTextCancel:O="Cancel"}=e,{buttonTextConfirm:z="Confirm"}=e,{buttonTextSubmit:V="Submit"}=e,{regionBackdrop:J="bg-surface-backdrop-token"}=e,{regionHeader:j="text-2xl font-bold"}=e,{regionBody:$="max-h-[200px] overflow-hidden"}=e,{regionFooter:ee="flex justify-end space-x-2"}=e,q;const Q={buttonTextCancel:O,buttonTextConfirm:z,buttonTextSubmit:V};let ve,ce=!1;W.subscribe(u=>{u.length&&(u[0].type==="prompt"&&t(13,q=u[0].value),t(0,O=u[0].buttonTextCancel||Q.buttonTextCancel),t(1,z=u[0].buttonTextConfirm||Q.buttonTextConfirm),t(2,V=u[0].buttonTextSubmit||Q.buttonTextSubmit),t(14,ve=typeof u[0].component=="string"?f[u[0].component]:u[0].component))});function ze(u){if(!(u.target instanceof Element))return;const G=u.target.classList;(G.contains("modal-backdrop")||G.contains("modal-transition"))&&(ce=!0)}function Re(u){if(!(u.target instanceof Element))return;const G=u.target.classList;(G.contains("modal-backdrop")||G.contains("modal-transition"))&&ce&&(i[0].response&&i[0].response(void 0),W.close(),s("backdrop",u)),ce=!1}function de(){i[0].response&&i[0].response(!1),W.close()}function Ue(){i[0].response&&i[0].response(!0),W.close()}function Ve(u){u.preventDefault(),i[0].response&&i[0].response(q),W.close()}function je(u){i.length&&u.code==="Escape"&&de()}function Ke(u){Te.call(this,l,u)}function Xe(u){Te.call(this,l,u)}function Ye(){q=this.value,t(13,q)}return l.$$set=u=>{t(43,e=Z(Z({},e),se(u))),"position"in u&&t(25,m=u.position),"components"in u&&t(26,f=u.components),"duration"in u&&t(3,d=u.duration),"flyOpacity"in u&&t(4,_=u.flyOpacity),"flyX"in u&&t(5,T=u.flyX),"flyY"in u&&t(6,y=u.flyY),"background"in u&&t(27,C=u.background),"width"in u&&t(28,g=u.width),"height"in u&&t(29,H=u.height),"padding"in u&&t(30,k=u.padding),"spacing"in u&&t(31,v=u.spacing),"rounded"in u&&t(32,M=u.rounded),"shadow"in u&&t(33,E=u.shadow),"zIndex"in u&&t(34,U=u.zIndex),"buttonNeutral"in u&&t(7,B=u.buttonNeutral),"buttonPositive"in u&&t(8,I=u.buttonPositive),"buttonTextCancel"in u&&t(0,O=u.buttonTextCancel),"buttonTextConfirm"in u&&t(1,z=u.buttonTextConfirm),"buttonTextSubmit"in u&&t(2,V=u.buttonTextSubmit),"regionBackdrop"in u&&t(35,J=u.regionBackdrop),"regionHeader"in u&&t(9,j=u.regionHeader),"regionBody"in u&&t(10,$=u.regionBody),"regionFooter"in u&&t(11,ee=u.regionFooter)},l.$$.update=()=>{var u,G,ye;l.$$.dirty[0]&33558528&&t(36,n=((u=i[0])==null?void 0:u.position)??m),t(18,o=`${mt} ${J} ${U} ${e.class??""} ${((G=i[0])==null?void 0:G.backdropClasses)??""}`),l.$$.dirty[1]&32&&t(17,a=`${ht} ${n??""}`),l.$$.dirty[0]&2013270016|l.$$.dirty[1]&7&&t(16,r=`${_t} ${C} ${g} ${H} ${k} ${v} ${M} ${E} ${((ye=i[0])==null?void 0:ye.modalClasses)??""}`),l.$$.dirty[0]&2046824447|l.$$.dirty[1]&23&&t(15,c={position:m,duration:d,flyOpacity:_,flyX:T,flyY:y,background:C,width:g,height:H,padding:k,spacing:v,rounded:M,shadow:E,buttonNeutral:B,buttonPositive:I,buttonTextCancel:O,buttonTextConfirm:z,buttonTextSubmit:V,regionBackdrop:J,regionHeader:j,regionBody:$,regionFooter:ee,onClose:de})},e=se(e),[O,z,V,d,_,T,y,B,I,j,$,ee,i,q,ve,c,r,a,o,ze,Re,de,Ue,Ve,je,m,f,C,g,H,k,v,M,E,U,J,n,Ke,Xe,Ye]}class pt extends _e{constructor(e){super(),be(this,e,gt,dt,ue,{position:25,components:26,duration:3,flyOpacity:4,flyX:5,flyY:6,background:27,width:28,height:29,padding:30,spacing:31,rounded:32,shadow:33,zIndex:34,buttonNeutral:7,buttonPositive:8,buttonTextCancel:0,buttonTextConfirm:1,buttonTextSubmit:2,regionBackdrop:35,regionHeader:9,regionBody:10,regionFooter:11},null,[-1,-1])}}const kt=async({fetch:l})=>{const e=await l("/api/admin/backups");if(!e.ok)throw qe(307,"/");return{backups:(await e.json()).reverse()}},At=Object.freeze(Object.defineProperty({__proto__:null,load:kt},Symbol.toStringTag,{value:"Module"}));function vt(l){let e;return{c(){e=Ze("path"),this.h()},l(t){e=xe(t,"path",{d:!0}),N(e).forEach(b),this.h()},h(){h(e,"d","M432 32H312l-9.4-18.7A24 24 0 0 0 281.1 0H166.8a23.72 23.72 0 0 0-21.4 13.3L136 32H16A16 16 0 0 0 0 48v32a16 16 0 0 0 16 16h416a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zM53.2 467a48 48 0 0 0 47.9 45h245.8a48 48 0 0 0 47.9-45L416 128H32z")},m(t,n){F(t,e,n)},p:ge,d(t){t&&b(e)}}}function yt(l){let e,t;const n=[{viewBox:"0 0 448 512"},l[0]];let o={$$slots:{default:[vt]},$$scope:{ctx:l}};for(let a=0;a<n.length;a+=1)o=Z(o,n[a]);return e=new tt({props:o}),{c(){le(e.$$.fragment)},l(a){ie(e.$$.fragment,a)},m(a,r){ae(e,a,r),t=!0},p(a,[r]){const c=r&1?ke(n,[n[0],we(a[0])]):{};r&2&&(c.$$scope={dirty:r,ctx:a}),e.$set(c)},i(a){t||(S(e.$$.fragment,a),t=!0)},o(a){P(e.$$.fragment,a),t=!1},d(a){ne(e,a)}}}function Tt(l,e,t){return l.$$set=n=>{t(0,e=Z(Z({},e),se(n)))},e=se(e),[e]}class Et extends _e{constructor(e){super(),be(this,e,Tt,yt,ue,{})}}function Fe(l,e,t){const n=l.slice();return n[6]=e[t],n[8]=t,n}function Bt(l){let e,t,n,o,a,r,c,i,s,m,f,d,_,T,y,C,g,H,k,v,M=l[0].backups,E=[];for(let B=0;B<M.length;B+=1)E[B]=Pe(Fe(l,M,B));const U=B=>P(E[B],1,1,()=>{E[B]=null});return k=new pt({props:{buttonPositive:"variant-filled-primary"}}),{c(){e=L("div"),t=L("h1"),n=K("Backups"),o=A(),a=L("div"),r=L("table"),c=L("thead"),i=L("tr"),s=L("th"),m=K("File Name"),f=A(),d=L("th"),_=K("Date"),T=A(),y=L("th"),C=A(),g=L("tbody");for(let B=0;B<E.length;B+=1)E[B].c();H=A(),le(k.$$.fragment),this.h()},l(B){e=D(B,"DIV",{class:!0});var I=N(e);t=D(I,"H1",{class:!0});var O=N(t);n=X(O,"Backups"),O.forEach(b),o=w(I),a=D(I,"DIV",{class:!0});var z=N(a);r=D(z,"TABLE",{class:!0});var V=N(r);c=D(V,"THEAD",{});var J=N(c);i=D(J,"TR",{});var j=N(i);s=D(j,"TH",{class:!0});var $=N(s);m=X($,"File Name"),$.forEach(b),f=w(j),d=D(j,"TH",{class:!0});var ee=N(d);_=X(ee,"Date"),ee.forEach(b),T=w(j),y=D(j,"TH",{}),N(y).forEach(b),j.forEach(b),J.forEach(b),C=w(V),g=D(V,"TBODY",{});var q=N(g);for(let Q=0;Q<E.length;Q+=1)E[Q].l(q);q.forEach(b),V.forEach(b),H=w(z),ie(k.$$.fragment,z),z.forEach(b),I.forEach(b),this.h()},h(){h(t,"class","text-4xl py-5 text-primary-500"),h(s,"class","text-center"),h(d,"class","text-center"),h(r,"class","table table-hover"),h(a,"class","table-container"),h(e,"class","flex flex-col justify-center items-center")},m(B,I){F(B,e,I),p(e,t),p(t,n),p(e,o),p(e,a),p(a,r),p(r,c),p(c,i),p(i,s),p(s,m),p(i,f),p(i,d),p(d,_),p(i,T),p(i,y),p(r,C),p(r,g);for(let O=0;O<E.length;O+=1)E[O]&&E[O].m(g,null);p(a,H),ae(k,a,null),v=!0},p(B,I){if(I&5){M=B[0].backups;let O;for(O=0;O<M.length;O+=1){const z=Fe(B,M,O);E[O]?(E[O].p(z,I),S(E[O],1)):(E[O]=Pe(z),E[O].c(),S(E[O],1),E[O].m(g,null))}for(oe(),O=M.length;O<E.length;O+=1)U(O);re()}},i(B){if(!v){for(let I=0;I<M.length;I+=1)S(E[I]);S(k.$$.fragment,B),v=!0}},o(B){E=E.filter(Boolean);for(let I=0;I<E.length;I+=1)P(E[I]);P(k.$$.fragment,B),v=!1},d(B){B&&b(e),$e(E,B),ne(k)}}}function Ct(l){let e,t;return e=new at({}),{c(){le(e.$$.fragment)},l(n){ie(e.$$.fragment,n)},m(n,o){ae(e,n,o),t=!0},p:ge,i(n){t||(S(e.$$.fragment,n),t=!0)},o(n){P(e.$$.fragment,n),t=!1},d(n){ne(e,n)}}}function Pe(l){let e,t,n=he(l[6].fileName)+"",o,a,r,c=new Date(l[6].dateModified).toLocaleString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})+"",i,s,m,f,d,_,T,y,C,g;_=new Et({});function H(){return l[3](l[6])}return{c(){e=L("tr"),t=L("td"),o=K(n),a=A(),r=L("td"),i=K(c),s=A(),m=L("td"),f=L("button"),d=L("p"),le(_.$$.fragment),T=A(),this.h()},l(k){e=D(k,"TR",{class:!0});var v=N(e);t=D(v,"TD",{});var M=N(t);o=X(M,n),M.forEach(b),a=w(v),r=D(v,"TD",{});var E=N(r);i=X(E,c),E.forEach(b),s=w(v),m=D(v,"TD",{});var U=N(m);f=D(U,"BUTTON",{type:!0,class:!0});var B=N(f);d=D(B,"P",{class:!0});var I=N(d);ie(_.$$.fragment,I),I.forEach(b),B.forEach(b),U.forEach(b),T=w(v),v.forEach(b),this.h()},h(){h(d,"class","icon svelte-190uef9"),h(f,"type","button"),h(f,"class","btn-icon btn-icon-sm variant-filled-primary"),h(e,"class","text-center")},m(k,v){F(k,e,v),p(e,t),p(t,o),p(e,a),p(e,r),p(r,i),p(e,s),p(e,m),p(m,f),p(f,d),ae(_,d,null),p(e,T),y=!0,C||(g=R(f,"click",H),C=!0)},p(k,v){l=k,(!y||v&1)&&n!==(n=he(l[6].fileName)+"")&&x(o,n),(!y||v&1)&&c!==(c=new Date(l[6].dateModified).toLocaleString("en-GB",{weekday:"long",year:"numeric",month:"long",day:"numeric"})+"")&&x(i,c)},i(k){y||(S(_.$$.fragment,k),y=!0)},o(k){P(_.$$.fragment,k),y=!1},d(k){k&&b(e),ne(_),C=!1,g()}}}function Lt(l){let e,t,n,o;const a=[Ct,Bt],r=[];function c(i,s){return i[1]?0:1}return e=c(l),t=r[e]=a[e](l),{c(){t.c(),n=Y()},l(i){t.l(i),n=Y()},m(i,s){r[e].m(i,s),F(i,n,s),o=!0},p(i,[s]){let m=e;e=c(i),e===m?r[e].p(i,s):(oe(),P(r[m],1,1,()=>{r[m]=null}),re(),t=r[e],t?t.p(i,s):(t=r[e]=a[e](i),t.c()),S(t,1),t.m(n.parentNode,n))},i(i){o||(S(t),o=!0)},o(i){P(t),o=!1},d(i){r[e].d(i),i&&b(n)}}}function he(l){return l.substring(7,l.length)}function Dt(l,e,t){let n;Ae(l,W,s=>t(5,n=s));let{data:o}=e,a=!1;const r={type:"confirm",title:"Please Confirm",body:"Are you sure you wish to delete this backup?",meta:{},response:async s=>{if(s)try{t(1,a=!0);const m=he(n[0].meta.fileName);if(!(await fetch(`/api/admin/backups/${m}`,{method:"Delete"})).ok)throw new Error("something went wrong");t(1,a=!1),et()}catch(m){console.log(m),t(1,a=!1)}}};function c(s){r.meta.fileName=s,W.trigger(r)}const i=s=>c(s.fileName);return l.$$set=s=>{"data"in s&&t(0,o=s.data)},[o,a,c,i]}class wt extends _e{constructor(e){super(),be(this,e,Dt,Lt,ue,{data:0})}}export{wt as component,At as universal};
