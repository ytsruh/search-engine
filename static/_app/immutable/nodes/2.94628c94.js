import{S as J,i as K,s as M,e as N,b as R,d as D,f as O,g as I,h,v as P,C as Q,k,q as E,a as L,l as b,m as $,r as A,c as S,n as i,D as c,E as T,F as U,G as W,y as X,z as Y,A as Z,R as x,B as ee}from"../chunks/index.46a9379e.js";/* empty css                    */import{g as te}from"../chunks/navigation.26597cb2.js";import{L as ae}from"../chunks/Loading.cabc868e.js";import{i as se}from"../chunks/authStore.85a04eaa.js";function le(f){let e,a,t,l,_,o,r,s,p,d,B,V,v,q,w,y;const C=f[2].default,u=Q(C,f,f[1],null);return{c(){e=k("div"),a=k("div"),t=k("div"),l=k("a"),_=E("Home"),o=L(),r=k("a"),s=E("Backups"),p=L(),d=k("a"),B=E("Settings"),V=L(),v=k("a"),q=E("Logout"),w=L(),u&&u.c(),this.h()},l(n){e=b(n,"DIV",{class:!0});var m=$(e);a=b(m,"DIV",{class:!0});var H=$(a);t=b(H,"DIV",{class:!0});var g=$(t);l=b(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var j=$(l);_=A(j,"Home"),j.forEach(h),o=S(g),r=b(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var z=$(r);s=A(z,"Backups"),z.forEach(h),p=S(g),d=b(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var F=$(d);B=A(F,"Settings"),F.forEach(h),V=S(g),v=b(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var G=$(v);q=A(G,"Logout"),G.forEach(h),g.forEach(h),H.forEach(h),w=S(m),u&&u.l(m),m.forEach(h),this.h()},h(){i(l,"href","/admin"),i(l,"class","btn"),i(l,"data-sveltekit-preload-data","hover"),i(r,"href","/admin/backups"),i(r,"class","btn"),i(r,"data-sveltekit-preload-data","hover"),i(d,"href","/admin/settings"),i(d,"class","btn"),i(d,"data-sveltekit-preload-data","hover"),i(v,"href","/admin/logout"),i(v,"class","btn"),i(v,"data-sveltekit-preload-data","tap"),i(t,"class","btn-group variant-filled-surface"),i(a,"class","w-full flex justify-center items-center pb-5"),i(e,"class","p-10")},m(n,m){R(n,e,m),c(e,a),c(a,t),c(t,l),c(l,_),c(t,o),c(t,r),c(r,s),c(t,p),c(t,d),c(d,B),c(t,V),c(t,v),c(v,q),c(e,w),u&&u.m(e,null),y=!0},p(n,m){u&&u.p&&(!y||m&2)&&T(u,C,n,n[1],y?W(C,n[1],m,null):U(n[1]),null)},i(n){y||(I(u,n),y=!0)},o(n){D(u,n),y=!1},d(n){n&&h(e),u&&u.d(n)}}}function re(f){let e,a;return e=new ae({}),{c(){X(e.$$.fragment)},l(t){Y(e.$$.fragment,t)},m(t,l){Z(e,t,l),a=!0},p:x,i(t){a||(I(e.$$.fragment,t),a=!0)},o(t){D(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function oe(f){let e,a,t,l;const _=[re,le],o=[];function r(s,p){return s[0]?0:1}return e=r(f),a=o[e]=_[e](f),{c(){a.c(),t=N()},l(s){a.l(s),t=N()},m(s,p){o[e].m(s,p),R(s,t,p),l=!0},p(s,[p]){let d=e;e=r(s),e===d?o[e].p(s,p):(P(),D(o[d],1,1,()=>{o[d]=null}),O(),a=o[e],a?a.p(s,p):(a=o[e]=_[e](s),a.c()),I(a,1),a.m(t.parentNode,t))},i(s){l||(I(a),l=!0)},o(s){D(a),l=!1},d(s){o[e].d(s),s&&h(t)}}}function ne(f,e,a){let{$$slots:t={},$$scope:l}=e,_=!1,o=!0;return se.subscribe(r=>{_=r,_&&a(0,o=!1)}),_||te("/admin/logout"),f.$$set=r=>{"$$scope"in r&&a(1,l=r.$$scope)},[o,l,t]}class _e extends J{constructor(e){super(),K(this,e,ne,oe,M,{})}}export{_e as component};
