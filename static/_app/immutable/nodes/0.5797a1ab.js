import{S as Z,i as p,s as x,C as j,k as M,a as O,l as V,m as T,c as y,h as g,n,b as A,D as z,g as b,v as N,d as H,f as U,E as q,F as w,G as K,H as Te,I as G,J,K as Q,L as X,q as se,r as ae,M as Me,e as fe,N as ie,O as Ve,P as Ae,Q as oe,R as Y,T as Be,U as ze,o as Oe,V as ye,y as $,z as ee,A as le,W as je,X as qe,B as te}from"../chunks/index.d752a771.js";import{s as we,m as ne,a as ce,g as Ke,b as Ne}from"../chunks/ProgressBar.svelte_svelte_type_style_lang.d628e9bd.js";import{I as Ue}from"../chunks/IconBase.d388de86.js";const Ge=!1,jl=Object.freeze(Object.defineProperty({__proto__:null,ssr:Ge},Symbol.toStringTag,{value:"Module"}));const Je=s=>({}),ue=s=>({}),Qe=s=>({}),de=s=>({}),We=s=>({}),he=s=>({});function _e(s){let e,t,i;const o=s[22].lead,l=j(o,s,s[21],he);return{c(){e=M("div"),l&&l.c(),this.h()},l(a){e=V(a,"DIV",{class:!0});var r=T(e);l&&l.l(r),r.forEach(g),this.h()},h(){n(e,"class",t="app-bar-slot-lead "+s[4])},m(a,r){A(a,e,r),l&&l.m(e,null),i=!0},p(a,r){l&&l.p&&(!i||r&2097152)&&q(l,o,a,a[21],i?K(o,a[21],r,We):w(a[21]),he),(!i||r&16&&t!==(t="app-bar-slot-lead "+a[4]))&&n(e,"class",t)},i(a){i||(b(l,a),i=!0)},o(a){H(l,a),i=!1},d(a){a&&g(e),l&&l.d(a)}}}function ge(s){let e,t,i;const o=s[22].trail,l=j(o,s,s[21],de);return{c(){e=M("div"),l&&l.c(),this.h()},l(a){e=V(a,"DIV",{class:!0});var r=T(e);l&&l.l(r),r.forEach(g),this.h()},h(){n(e,"class",t="app-bar-slot-trail "+s[2])},m(a,r){A(a,e,r),l&&l.m(e,null),i=!0},p(a,r){l&&l.p&&(!i||r&2097152)&&q(l,o,a,a[21],i?K(o,a[21],r,Qe):w(a[21]),de),(!i||r&4&&t!==(t="app-bar-slot-trail "+a[2]))&&n(e,"class",t)},i(a){i||(b(l,a),i=!0)},o(a){H(l,a),i=!1},d(a){a&&g(e),l&&l.d(a)}}}function me(s){let e,t,i;const o=s[22].headline,l=j(o,s,s[21],ue);return{c(){e=M("div"),l&&l.c(),this.h()},l(a){e=V(a,"DIV",{class:!0});var r=T(e);l&&l.l(r),r.forEach(g),this.h()},h(){n(e,"class",t="app-bar-row-headline "+s[5])},m(a,r){A(a,e,r),l&&l.m(e,null),i=!0},p(a,r){l&&l.p&&(!i||r&2097152)&&q(l,o,a,a[21],i?K(o,a[21],r,Je):w(a[21]),ue),(!i||r&32&&t!==(t="app-bar-row-headline "+a[5]))&&n(e,"class",t)},i(a){i||(b(l,a),i=!0)},o(a){H(l,a),i=!1},d(a){a&&g(e),l&&l.d(a)}}}function Xe(s){let e,t,i,o,l,a,r,_,m,d,v=s[8].lead&&_e(s);const I=s[22].default,E=j(I,s,s[21],null);let S=s[8].trail&&ge(s),D=s[8].headline&&me(s);return{c(){e=M("div"),t=M("div"),v&&v.c(),i=O(),o=M("div"),E&&E.c(),a=O(),S&&S.c(),_=O(),D&&D.c(),this.h()},l(f){e=V(f,"DIV",{class:!0,"data-testid":!0,role:!0,"aria-label":!0,"aria-labelledby":!0});var c=T(e);t=V(c,"DIV",{class:!0});var k=T(t);v&&v.l(k),i=y(k),o=V(k,"DIV",{class:!0});var B=T(o);E&&E.l(B),B.forEach(g),a=y(k),S&&S.l(k),k.forEach(g),_=y(c),D&&D.l(c),c.forEach(g),this.h()},h(){n(o,"class",l="app-bar-slot-default "+s[3]),n(t,"class",r="app-bar-row-main "+s[6]),n(e,"class",m="app-bar "+s[7]),n(e,"data-testid","app-bar"),n(e,"role","toolbar"),n(e,"aria-label",s[0]),n(e,"aria-labelledby",s[1])},m(f,c){A(f,e,c),z(e,t),v&&v.m(t,null),z(t,i),z(t,o),E&&E.m(o,null),z(t,a),S&&S.m(t,null),z(e,_),D&&D.m(e,null),d=!0},p(f,[c]){f[8].lead?v?(v.p(f,c),c&256&&b(v,1)):(v=_e(f),v.c(),b(v,1),v.m(t,i)):v&&(N(),H(v,1,1,()=>{v=null}),U()),E&&E.p&&(!d||c&2097152)&&q(E,I,f,f[21],d?K(I,f[21],c,null):w(f[21]),null),(!d||c&8&&l!==(l="app-bar-slot-default "+f[3]))&&n(o,"class",l),f[8].trail?S?(S.p(f,c),c&256&&b(S,1)):(S=ge(f),S.c(),b(S,1),S.m(t,null)):S&&(N(),H(S,1,1,()=>{S=null}),U()),(!d||c&64&&r!==(r="app-bar-row-main "+f[6]))&&n(t,"class",r),f[8].headline?D?(D.p(f,c),c&256&&b(D,1)):(D=me(f),D.c(),b(D,1),D.m(e,null)):D&&(N(),H(D,1,1,()=>{D=null}),U()),(!d||c&128&&m!==(m="app-bar "+f[7]))&&n(e,"class",m),(!d||c&1)&&n(e,"aria-label",f[0]),(!d||c&2)&&n(e,"aria-labelledby",f[1])},i(f){d||(b(v),b(E,f),b(S),b(D),d=!0)},o(f){H(v),H(E,f),H(S),H(D),d=!1},d(f){f&&g(e),v&&v.d(),E&&E.d(f),S&&S.d(),D&&D.d()}}}const Ye="flex flex-col",Ze="grid items-center",pe="",xe="flex-none flex justify-between items-center",$e="flex-auto",el="flex-none flex items-center space-x-4";function ll(s,e,t){let i,o,l,a,r,_,{$$slots:m={},$$scope:d}=e;const v=Te(m);let{background:I="bg-surface-100-800-token"}=e,{border:E=""}=e,{padding:S="p-4"}=e,{shadow:D=""}=e,{spacing:f="space-y-4"}=e,{gridColumns:c="grid-cols-[auto_1fr_auto]"}=e,{gap:k="gap-4"}=e,{regionRowMain:B=""}=e,{regionRowHeadline:C=""}=e,{slotLead:P=""}=e,{slotDefault:F=""}=e,{slotTrail:h=""}=e,{label:L=""}=e,{labelledby:R=""}=e;return s.$$set=u=>{t(23,e=G(G({},e),J(u))),"background"in u&&t(9,I=u.background),"border"in u&&t(10,E=u.border),"padding"in u&&t(11,S=u.padding),"shadow"in u&&t(12,D=u.shadow),"spacing"in u&&t(13,f=u.spacing),"gridColumns"in u&&t(14,c=u.gridColumns),"gap"in u&&t(15,k=u.gap),"regionRowMain"in u&&t(16,B=u.regionRowMain),"regionRowHeadline"in u&&t(17,C=u.regionRowHeadline),"slotLead"in u&&t(18,P=u.slotLead),"slotDefault"in u&&t(19,F=u.slotDefault),"slotTrail"in u&&t(20,h=u.slotTrail),"label"in u&&t(0,L=u.label),"labelledby"in u&&t(1,R=u.labelledby),"$$scope"in u&&t(21,d=u.$$scope)},s.$$.update=()=>{t(7,i=`${Ye} ${I} ${E} ${f} ${S} ${D} ${e.class??""}`),s.$$.dirty&114688&&t(6,o=`${Ze} ${c} ${k} ${B}`),s.$$.dirty&131072&&t(5,l=`${pe} ${C}`),s.$$.dirty&262144&&t(4,a=`${xe} ${P}`),s.$$.dirty&524288&&t(3,r=`${$e} ${F}`),s.$$.dirty&1048576&&t(2,_=`${el} ${h}`)},e=J(e),[L,R,_,r,a,l,o,i,v,I,E,S,D,f,c,k,B,C,P,F,h,d,m]}class tl extends Z{constructor(e){super(),p(this,e,ll,Xe,x,{background:9,border:10,padding:11,shadow:12,spacing:13,gridColumns:14,gap:15,regionRowMain:16,regionRowHeadline:17,slotLead:18,slotDefault:19,slotTrail:20,label:0,labelledby:1})}}const sl=s=>({}),be=s=>({}),al=s=>({}),ke=s=>({}),il=s=>({}),ve=s=>({}),ol=s=>({}),Le=s=>({}),rl=s=>({}),Se=s=>({}),fl=s=>({}),Ee=s=>({});function De(s){let e,t,i;const o=s[18].header,l=j(o,s,s[17],Ee);return{c(){e=M("header"),l&&l.c(),this.h()},l(a){e=V(a,"HEADER",{id:!0,class:!0});var r=T(e);l&&l.l(r),r.forEach(g),this.h()},h(){n(e,"id","shell-header"),n(e,"class",t="flex-none "+s[7])},m(a,r){A(a,e,r),l&&l.m(e,null),i=!0},p(a,r){l&&l.p&&(!i||r&131072)&&q(l,o,a,a[17],i?K(o,a[17],r,fl):w(a[17]),Ee),(!i||r&128&&t!==(t="flex-none "+a[7]))&&n(e,"class",t)},i(a){i||(b(l,a),i=!0)},o(a){H(l,a),i=!1},d(a){a&&g(e),l&&l.d(a)}}}function He(s){let e,t;const i=s[18].sidebarLeft,o=j(i,s,s[17],Se);return{c(){e=M("aside"),o&&o.c(),this.h()},l(l){e=V(l,"ASIDE",{id:!0,class:!0});var a=T(e);o&&o.l(a),a.forEach(g),this.h()},h(){n(e,"id","sidebar-left"),n(e,"class",s[6])},m(l,a){A(l,e,a),o&&o.m(e,null),t=!0},p(l,a){o&&o.p&&(!t||a&131072)&&q(o,i,l,l[17],t?K(i,l[17],a,rl):w(l[17]),Se),(!t||a&64)&&n(e,"class",l[6])},i(l){t||(b(o,l),t=!0)},o(l){H(o,l),t=!1},d(l){l&&g(e),o&&o.d(l)}}}function Re(s){let e,t,i;const o=s[18].pageHeader,l=j(o,s,s[17],Le),a=l||nl();return{c(){e=M("header"),a&&a.c(),this.h()},l(r){e=V(r,"HEADER",{id:!0,class:!0});var _=T(e);a&&a.l(_),_.forEach(g),this.h()},h(){n(e,"id","page-header"),n(e,"class",t="flex-none "+s[4])},m(r,_){A(r,e,_),a&&a.m(e,null),i=!0},p(r,_){l&&l.p&&(!i||_&131072)&&q(l,o,r,r[17],i?K(o,r[17],_,ol):w(r[17]),Le),(!i||_&16&&t!==(t="flex-none "+r[4]))&&n(e,"class",t)},i(r){i||(b(a,r),i=!0)},o(r){H(a,r),i=!1},d(r){r&&g(e),a&&a.d(r)}}}function nl(s){let e;return{c(){e=se("(slot:header)")},l(t){e=ae(t,"(slot:header)")},m(t,i){A(t,e,i)},d(t){t&&g(e)}}}function Pe(s){let e,t,i;const o=s[18].pageFooter,l=j(o,s,s[17],ve),a=l||cl();return{c(){e=M("footer"),a&&a.c(),this.h()},l(r){e=V(r,"FOOTER",{id:!0,class:!0});var _=T(e);a&&a.l(_),_.forEach(g),this.h()},h(){n(e,"id","page-footer"),n(e,"class",t="flex-none "+s[2])},m(r,_){A(r,e,_),a&&a.m(e,null),i=!0},p(r,_){l&&l.p&&(!i||_&131072)&&q(l,o,r,r[17],i?K(o,r[17],_,il):w(r[17]),ve),(!i||_&4&&t!==(t="flex-none "+r[2]))&&n(e,"class",t)},i(r){i||(b(a,r),i=!0)},o(r){H(a,r),i=!1},d(r){r&&g(e),a&&a.d(r)}}}function cl(s){let e;return{c(){e=se("(slot:footer)")},l(t){e=ae(t,"(slot:footer)")},m(t,i){A(t,e,i)},d(t){t&&g(e)}}}function Fe(s){let e,t;const i=s[18].sidebarRight,o=j(i,s,s[17],ke);return{c(){e=M("aside"),o&&o.c(),this.h()},l(l){e=V(l,"ASIDE",{id:!0,class:!0});var a=T(e);o&&o.l(a),a.forEach(g),this.h()},h(){n(e,"id","sidebar-right"),n(e,"class",s[5])},m(l,a){A(l,e,a),o&&o.m(e,null),t=!0},p(l,a){o&&o.p&&(!t||a&131072)&&q(o,i,l,l[17],t?K(i,l[17],a,al):w(l[17]),ke),(!t||a&32)&&n(e,"class",l[5])},i(l){t||(b(o,l),t=!0)},o(l){H(o,l),t=!1},d(l){l&&g(e),o&&o.d(l)}}}function Ce(s){let e,t,i;const o=s[18].footer,l=j(o,s,s[17],be);return{c(){e=M("footer"),l&&l.c(),this.h()},l(a){e=V(a,"FOOTER",{id:!0,class:!0});var r=T(e);l&&l.l(r),r.forEach(g),this.h()},h(){n(e,"id","shell-footer"),n(e,"class",t="flex-none "+s[1])},m(a,r){A(a,e,r),l&&l.m(e,null),i=!0},p(a,r){l&&l.p&&(!i||r&131072)&&q(l,o,a,a[17],i?K(o,a[17],r,sl):w(a[17]),be),(!i||r&2&&t!==(t="flex-none "+a[1]))&&n(e,"class",t)},i(a){i||(b(l,a),i=!0)},o(a){H(l,a),i=!1},d(a){a&&g(e),l&&l.d(a)}}}function ul(s){let e,t,i,o,l,a,r,_,m,d,v,I,E,S,D,f=s[9].header&&De(s),c=s[9].sidebarLeft&&He(s),k=s[9].pageHeader&&Re(s);const B=s[18].default,C=j(B,s,s[17],null);let P=s[9].pageFooter&&Pe(s),F=s[9].sidebarRight&&Fe(s),h=s[9].footer&&Ce(s);return{c(){e=M("div"),f&&f.c(),t=O(),i=M("div"),c&&c.c(),o=O(),l=M("div"),k&&k.c(),a=O(),r=M("main"),C&&C.c(),m=O(),P&&P.c(),v=O(),F&&F.c(),I=O(),h&&h.c(),this.h()},l(L){e=V(L,"DIV",{id:!0,class:!0,"data-testid":!0});var R=T(e);f&&f.l(R),t=y(R),i=V(R,"DIV",{class:!0});var u=T(i);c&&c.l(u),o=y(u),l=V(u,"DIV",{id:!0,class:!0});var W=T(l);k&&k.l(W),a=y(W),r=V(W,"MAIN",{id:!0,class:!0});var re=T(r);C&&C.l(re),re.forEach(g),m=y(W),P&&P.l(W),W.forEach(g),v=y(u),F&&F.l(u),u.forEach(g),I=y(R),h&&h.l(R),R.forEach(g),this.h()},h(){n(r,"id","page-content"),n(r,"class",_="flex-auto "+s[3]),n(l,"id","page"),n(l,"class",d=s[0]+" "+Ie),n(i,"class","flex-auto "+hl),n(e,"id","appShell"),n(e,"class",s[8]),n(e,"data-testid","app-shell")},m(L,R){A(L,e,R),f&&f.m(e,null),z(e,t),z(e,i),c&&c.m(i,null),z(i,o),z(i,l),k&&k.m(l,null),z(l,a),z(l,r),C&&C.m(r,null),z(l,m),P&&P.m(l,null),z(i,v),F&&F.m(i,null),z(e,I),h&&h.m(e,null),E=!0,S||(D=Q(l,"scroll",s[19]),S=!0)},p(L,[R]){L[9].header?f?(f.p(L,R),R&512&&b(f,1)):(f=De(L),f.c(),b(f,1),f.m(e,t)):f&&(N(),H(f,1,1,()=>{f=null}),U()),L[9].sidebarLeft?c?(c.p(L,R),R&512&&b(c,1)):(c=He(L),c.c(),b(c,1),c.m(i,o)):c&&(N(),H(c,1,1,()=>{c=null}),U()),L[9].pageHeader?k?(k.p(L,R),R&512&&b(k,1)):(k=Re(L),k.c(),b(k,1),k.m(l,a)):k&&(N(),H(k,1,1,()=>{k=null}),U()),C&&C.p&&(!E||R&131072)&&q(C,B,L,L[17],E?K(B,L[17],R,null):w(L[17]),null),(!E||R&8&&_!==(_="flex-auto "+L[3]))&&n(r,"class",_),L[9].pageFooter?P?(P.p(L,R),R&512&&b(P,1)):(P=Pe(L),P.c(),b(P,1),P.m(l,null)):P&&(N(),H(P,1,1,()=>{P=null}),U()),(!E||R&1&&d!==(d=L[0]+" "+Ie))&&n(l,"class",d),L[9].sidebarRight?F?(F.p(L,R),R&512&&b(F,1)):(F=Fe(L),F.c(),b(F,1),F.m(i,null)):F&&(N(),H(F,1,1,()=>{F=null}),U()),L[9].footer?h?(h.p(L,R),R&512&&b(h,1)):(h=Ce(L),h.c(),b(h,1),h.m(e,null)):h&&(N(),H(h,1,1,()=>{h=null}),U()),(!E||R&256)&&n(e,"class",L[8])},i(L){E||(b(f),b(c),b(k),b(C,L),b(P),b(F),b(h),E=!0)},o(L){H(f),H(c),H(k),H(C,L),H(P),H(F),H(h),E=!1},d(L){L&&g(e),f&&f.d(),c&&c.d(),k&&k.d(),C&&C.d(L),P&&P.d(),F&&F.d(),h&&h.d(),S=!1,D()}}}const dl="w-full h-full flex flex-col overflow-hidden",hl="w-full h-full flex overflow-hidden",Ie="flex-1 overflow-x-hidden flex flex-col",_l="flex-none overflow-x-hidden overflow-y-auto",gl="flex-none overflow-x-hidden overflow-y-auto";function ml(s,e,t){let i,o,l,a,r,_,m,d,{$$slots:v={},$$scope:I}=e;const E=Te(v);let{regionPage:S=""}=e,{slotHeader:D="z-10"}=e,{slotSidebarLeft:f="w-auto"}=e,{slotSidebarRight:c="w-auto"}=e,{slotPageHeader:k=""}=e,{slotPageContent:B=""}=e,{slotPageFooter:C=""}=e,{slotFooter:P=""}=e;function F(h){X.call(this,s,h)}return s.$$set=h=>{t(20,e=G(G({},e),J(h))),"regionPage"in h&&t(0,S=h.regionPage),"slotHeader"in h&&t(10,D=h.slotHeader),"slotSidebarLeft"in h&&t(11,f=h.slotSidebarLeft),"slotSidebarRight"in h&&t(12,c=h.slotSidebarRight),"slotPageHeader"in h&&t(13,k=h.slotPageHeader),"slotPageContent"in h&&t(14,B=h.slotPageContent),"slotPageFooter"in h&&t(15,C=h.slotPageFooter),"slotFooter"in h&&t(16,P=h.slotFooter),"$$scope"in h&&t(17,I=h.$$scope)},s.$$.update=()=>{t(8,i=`${dl} ${e.class??""}`),s.$$.dirty&1024&&t(7,o=`${D}`),s.$$.dirty&2048&&t(6,l=`${_l} ${f}`),s.$$.dirty&4096&&t(5,a=`${gl} ${c}`),s.$$.dirty&8192&&t(4,r=`${k}`),s.$$.dirty&16384&&t(3,_=`${B}`),s.$$.dirty&32768&&t(2,m=`${C}`),s.$$.dirty&65536&&t(1,d=`${P}`)},e=J(e),[S,d,m,_,r,a,l,o,i,E,D,f,c,k,B,C,P,I,v,F]}class bl extends Z{constructor(e){super(),p(this,e,ml,ul,x,{regionPage:0,slotHeader:10,slotSidebarLeft:11,slotSidebarRight:12,slotPageHeader:13,slotPageContent:14,slotPageFooter:15,slotFooter:16})}}function kl(s){let e,t=`<script nonce="%sveltekit.nonce%">(${we.toString()})();<\/script>`,i,o,l,a,r,_,m,d,v,I,E,S,D;return{c(){e=new Me(!1),i=fe(),o=O(),l=M("div"),a=M("div"),r=ie("svg"),_=ie("path"),this.h()},l(f){const c=Ve("svelte-gewkj4",document.head);e=Ae(c,!1),i=fe(),c.forEach(g),o=y(f),l=V(f,"DIV",{class:!0,role:!0,"aria-label":!0,"aria-checked":!0,title:!0,tabindex:!0});var k=T(l);a=V(k,"DIV",{class:!0});var B=T(a);r=oe(B,"svg",{class:!0,xmlns:!0,viewBox:!0});var C=T(r);_=oe(C,"path",{d:!0}),T(_).forEach(g),C.forEach(g),B.forEach(g),k.forEach(g),this.h()},h(){e.a=i,n(_,"d",m=s[0]?s[4].sun:s[4].moon),n(r,"class",d="lightswitch-icon "+s[1]),n(r,"xmlns","http://www.w3.org/2000/svg"),n(r,"viewBox","0 0 512 512"),n(a,"class",v="lightswitch-thumb "+s[2]),n(l,"class",I="lightswitch-track "+s[3]),n(l,"role","switch"),n(l,"aria-label","Light Switch"),n(l,"aria-checked",s[0]),n(l,"title",E="Toggle "+(s[0]===!0?"Dark":"Light")+" Mode"),n(l,"tabindex","0")},m(f,c){e.m(t,document.head),z(document.head,i),A(f,o,c),A(f,l,c),z(l,a),z(a,r),z(r,_),S||(D=[Q(l,"click",s[5]),Q(l,"click",s[18]),Q(l,"keydown",El),Q(l,"keydown",s[19]),Q(l,"keyup",s[20]),Q(l,"keypress",s[21])],S=!0)},p(f,[c]){c&1&&m!==(m=f[0]?f[4].sun:f[4].moon)&&n(_,"d",m),c&2&&d!==(d="lightswitch-icon "+f[1])&&n(r,"class",d),c&4&&v!==(v="lightswitch-thumb "+f[2])&&n(a,"class",v),c&8&&I!==(I="lightswitch-track "+f[3])&&n(l,"class",I),c&1&&n(l,"aria-checked",f[0]),c&1&&E!==(E="Toggle "+(f[0]===!0?"Dark":"Light")+" Mode")&&n(l,"title",E)},i:Y,o:Y,d(f){g(i),f&&e.d(),f&&g(o),f&&g(l),S=!1,Be(D)}}}const vl="cursor-pointer",Ll="aspect-square scale-[0.8] flex justify-center items-center",Sl="w-[70%] aspect-square";function El(s){["Enter","Space"].includes(s.code)&&(s.preventDefault(),s.currentTarget.click())}function Dl(s,e,t){let i,o,l,a,r,_,m,d;ze(s,ne,u=>t(0,d=u));let{bgLight:v="bg-surface-50"}=e,{bgDark:I="bg-surface-900"}=e,{fillLight:E="fill-surface-50"}=e,{fillDark:S="fill-surface-900"}=e,{width:D="w-12"}=e,{height:f="h-6"}=e,{ring:c="ring-[1px] ring-surface-500/30"}=e,{rounded:k="rounded-token"}=e;const B="transition-all duration-[200ms]",C={sun:"M361.5 1.2c5 2.1 8.6 6.6 9.6 11.9L391 121l107.9 19.8c5.3 1 9.8 4.6 11.9 9.6s1.5 10.7-1.6 15.2L446.9 256l62.3 90.3c3.1 4.5 3.7 10.2 1.6 15.2s-6.6 8.6-11.9 9.6L391 391 371.1 498.9c-1 5.3-4.6 9.8-9.6 11.9s-10.7 1.5-15.2-1.6L256 446.9l-90.3 62.3c-4.5 3.1-10.2 3.7-15.2 1.6s-8.6-6.6-9.6-11.9L121 391 13.1 371.1c-5.3-1-9.8-4.6-11.9-9.6s-1.5-10.7 1.6-15.2L65.1 256 2.8 165.7c-3.1-4.5-3.7-10.2-1.6-15.2s6.6-8.6 11.9-9.6L121 121 140.9 13.1c1-5.3 4.6-9.8 9.6-11.9s10.7-1.5 15.2 1.6L256 65.1 346.3 2.8c4.5-3.1 10.2-3.7 15.2-1.6zM352 256c0 53-43 96-96 96s-96-43-96-96s43-96 96-96s96 43 96 96zm32 0c0-70.7-57.3-128-128-128s-128 57.3-128 128s57.3 128 128 128s128-57.3 128-128z",moon:"M223.5 32C100 32 0 132.3 0 256S100 480 223.5 480c60.6 0 115.5-24.2 155.8-63.4c5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6c-96.9 0-175.5-78.8-175.5-176c0-65.8 36-123.1 89.3-153.3c6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"};function P(){ye(ne,d=!d,d),Ne(d),ce(d)}Oe(()=>{"modeCurrent"in localStorage||ce(Ke())});function F(u){X.call(this,s,u)}function h(u){X.call(this,s,u)}function L(u){X.call(this,s,u)}function R(u){X.call(this,s,u)}return s.$$set=u=>{t(23,e=G(G({},e),J(u))),"bgLight"in u&&t(6,v=u.bgLight),"bgDark"in u&&t(7,I=u.bgDark),"fillLight"in u&&t(8,E=u.fillLight),"fillDark"in u&&t(9,S=u.fillDark),"width"in u&&t(10,D=u.width),"height"in u&&t(11,f=u.height),"ring"in u&&t(12,c=u.ring),"rounded"in u&&t(13,k=u.rounded)},s.$$.update=()=>{s.$$.dirty&193&&t(17,i=d===!0?v:I),s.$$.dirty&193&&t(16,o=d===!0?I:v),s.$$.dirty&1&&t(15,l=d===!0?"translate-x-[100%]":""),s.$$.dirty&769&&t(14,a=d===!0?E:S),t(3,r=`${vl} ${B} ${D} ${f} ${c} ${k} ${i} ${e.class??""}`),s.$$.dirty&108544&&t(2,_=`${Ll} ${B} ${f} ${k} ${o} ${l}`),s.$$.dirty&16384&&t(1,m=`${Sl} ${a}`)},e=J(e),[d,m,_,r,C,P,v,I,E,S,D,f,c,k,a,l,o,i,F,h,L,R]}class Hl extends Z{constructor(e){super(),p(this,e,Dl,kl,x,{bgLight:6,bgDark:7,fillLight:8,fillDark:9,width:10,height:11,ring:12,rounded:13})}}function Rl(s){let e;return{c(){e=ie("path"),this.h()},l(t){e=oe(t,"path",{d:!0}),T(e).forEach(g),this.h()},h(){n(e,"d","M220.6 130.3l-67.2 28.2V43.2L98.7 233.5l54.7-24.2v130.3l67.2-209.3zm-83.2-96.7l-1.3 4.7-15.2 52.9C80.6 106.7 52 145.8 52 191.5c0 52.3 34.3 95.9 83.4 105.5v53.6C57.5 340.1 0 272.4 0 191.6c0-80.5 59.8-147.2 137.4-158zm311.4 447.2c-11.2 11.2-23.1 12.3-28.6 10.5-5.4-1.8-27.1-19.9-60.4-44.4-33.3-24.6-33.6-35.7-43-56.7-9.4-20.9-30.4-42.6-57.5-52.4l-9.7-14.7c-24.7 16.9-53 26.9-81.3 28.7l2.1-6.6 15.9-49.5c46.5-11.9 80.9-54 80.9-104.2 0-54.5-38.4-102.1-96-107.1V32.3C254.4 37.4 320 106.8 320 191.6c0 33.6-11.2 64.7-29 90.4l14.6 9.6c9.8 27.1 31.5 48 52.4 57.4s32.2 9.7 56.8 43c24.6 33.2 42.7 54.9 44.5 60.3s.7 17.3-10.5 28.5zm-9.9-17.9c0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8 8-3.6 8-8z")},m(t,i){A(t,e,i)},p:Y,d(t){t&&g(e)}}}function Pl(s){let e,t;const i=[{viewBox:"0 0 460 512"},s[0]];let o={$$slots:{default:[Rl]},$$scope:{ctx:s}};for(let l=0;l<i.length;l+=1)o=G(o,i[l]);return e=new Ue({props:o}),{c(){$(e.$$.fragment)},l(l){ee(e.$$.fragment,l)},m(l,a){le(e,l,a),t=!0},p(l,[a]){const r=a&1?je(i,[i[0],qe(l[0])]):{};a&2&&(r.$$scope={dirty:a,ctx:l}),e.$set(r)},i(l){t||(b(e.$$.fragment,l),t=!0)},o(l){H(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function Fl(s,e,t){return s.$$set=i=>{t(0,e=G(G({},e),J(i)))},e=J(e),[e]}class Cl extends Z{constructor(e){super(),p(this,e,Fl,Pl,x,{})}}function Il(s){let e;const t=s[0].default,i=j(t,s,s[1],null);return{c(){i&&i.c()},l(o){i&&i.l(o)},m(o,l){i&&i.m(o,l),e=!0},p(o,l){i&&i.p&&(!e||l&2)&&q(i,t,o,o[1],e?K(t,o[1],l,null):w(o[1]),null)},i(o){e||(b(i,o),e=!0)},o(o){H(i,o),e=!1},d(o){i&&i.d(o)}}}function Tl(s){let e,t,i;return t=new Cl({}),{c(){e=M("a"),$(t.$$.fragment),this.h()},l(o){e=V(o,"A",{href:!0,class:!0});var l=T(e);ee(t.$$.fragment,l),l.forEach(g),this.h()},h(){n(e,"href","/"),n(e,"class","icon svelte-1st8s79")},m(o,l){A(o,e,l),le(t,e,null),i=!0},p:Y,i(o){i||(b(t.$$.fragment,o),i=!0)},o(o){H(t.$$.fragment,o),i=!1},d(o){o&&g(e),te(t)}}}function Ml(s){let e,t,i,o,l,a,r,_;return r=new Hl({}),{c(){e=M("a"),t=se("Home"),i=O(),o=M("a"),l=se("Stats"),a=O(),$(r.$$.fragment),this.h()},l(m){e=V(m,"A",{class:!0,href:!0});var d=T(e);t=ae(d,"Home"),d.forEach(g),i=y(m),o=V(m,"A",{class:!0,href:!0});var v=T(o);l=ae(v,"Stats"),v.forEach(g),a=y(m),ee(r.$$.fragment,m),this.h()},h(){n(e,"class","btn btn-sm variant-ghost-tertiary"),n(e,"href","/"),n(o,"class","btn btn-sm variant-ghost-tertiary"),n(o,"href","/stats")},m(m,d){A(m,e,d),z(e,t),A(m,i,d),A(m,o,d),z(o,l),A(m,a,d),le(r,m,d),_=!0},p:Y,i(m){_||(b(r.$$.fragment,m),_=!0)},o(m){H(r.$$.fragment,m),_=!1},d(m){m&&g(e),m&&g(i),m&&g(o),m&&g(a),te(r,m)}}}function Vl(s){let e,t;return e=new tl({props:{$$slots:{trail:[Ml],lead:[Tl]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,o){le(e,i,o),t=!0},p(i,o){const l={};o&2&&(l.$$scope={dirty:o,ctx:i}),e.$set(l)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Al(s){let e,t;return e=new bl({props:{$$slots:{header:[Vl],default:[Il]},$$scope:{ctx:s}}}),{c(){$(e.$$.fragment)},l(i){ee(e.$$.fragment,i)},m(i,o){le(e,i,o),t=!0},p(i,[o]){const l={};o&2&&(l.$$scope={dirty:o,ctx:i}),e.$set(l)},i(i){t||(b(e.$$.fragment,i),t=!0)},o(i){H(e.$$.fragment,i),t=!1},d(i){te(e,i)}}}function Bl(s,e,t){let{$$slots:i={},$$scope:o}=e;return s.$$set=l=>{"$$scope"in l&&t(1,o=l.$$scope)},[i,o]}class ql extends Z{constructor(e){super(),p(this,e,Bl,Al,x,{})}}export{ql as component,jl as universal};
