import{S as F,i as G,s as N,e as z,b as B,d as y,f as R,g as E,h,v as J,C as K,k as b,q as D,a as I,l as k,m as $,r as V,c as q,n as u,D as f,E as M,F as O,G as P,y as Q,z as T,A as U,R as W,B as X}from"../chunks/index.a0ea0dad.js";/* empty css                    */import{g as Y}from"../chunks/navigation.6907e295.js";import{L as Z}from"../chunks/Loading.71c0ee2c.js";import{i as x}from"../chunks/authStore.17cc9019.js";function ee(d){let e,a,t,l,_,o,r,s,m,c,L,S,v;const A=d[2].default,i=K(A,d,d[1],null);return{c(){e=b("div"),a=b("div"),t=b("div"),l=b("a"),_=D("Home"),o=I(),r=b("a"),s=D("Settings"),m=I(),c=b("a"),L=D("Logout"),S=I(),i&&i.c(),this.h()},l(n){e=k(n,"DIV",{class:!0});var p=$(e);a=k(p,"DIV",{class:!0});var w=$(a);t=k(w,"DIV",{class:!0});var g=$(t);l=k(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var C=$(l);_=V(C,"Home"),C.forEach(h),o=q(g),r=k(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var H=$(r);s=V(H,"Settings"),H.forEach(h),m=q(g),c=k(g,"A",{href:!0,class:!0,"data-sveltekit-preload-data":!0});var j=$(c);L=V(j,"Logout"),j.forEach(h),g.forEach(h),w.forEach(h),S=q(p),i&&i.l(p),p.forEach(h),this.h()},h(){u(l,"href","/admin"),u(l,"class","btn"),u(l,"data-sveltekit-preload-data","hover"),u(r,"href","/admin/settings"),u(r,"class","btn"),u(r,"data-sveltekit-preload-data","hover"),u(c,"href","/admin/logout"),u(c,"class","btn"),u(c,"data-sveltekit-preload-data","tap"),u(t,"class","btn-group variant-filled-surface"),u(a,"class","w-full flex justify-center items-center pb-5"),u(e,"class","p-10")},m(n,p){B(n,e,p),f(e,a),f(a,t),f(t,l),f(l,_),f(t,o),f(t,r),f(r,s),f(t,m),f(t,c),f(c,L),f(e,S),i&&i.m(e,null),v=!0},p(n,p){i&&i.p&&(!v||p&2)&&M(i,A,n,n[1],v?P(A,n[1],p,null):O(n[1]),null)},i(n){v||(E(i,n),v=!0)},o(n){y(i,n),v=!1},d(n){n&&h(e),i&&i.d(n)}}}function te(d){let e,a;return e=new Z({}),{c(){Q(e.$$.fragment)},l(t){T(e.$$.fragment,t)},m(t,l){U(e,t,l),a=!0},p:W,i(t){a||(E(e.$$.fragment,t),a=!0)},o(t){y(e.$$.fragment,t),a=!1},d(t){X(e,t)}}}function ae(d){let e,a,t,l;const _=[te,ee],o=[];function r(s,m){return s[0]?0:1}return e=r(d),a=o[e]=_[e](d),{c(){a.c(),t=z()},l(s){a.l(s),t=z()},m(s,m){o[e].m(s,m),B(s,t,m),l=!0},p(s,[m]){let c=e;e=r(s),e===c?o[e].p(s,m):(J(),y(o[c],1,1,()=>{o[c]=null}),R(),a=o[e],a?a.p(s,m):(a=o[e]=_[e](s),a.c()),E(a,1),a.m(t.parentNode,t))},i(s){l||(E(a),l=!0)},o(s){y(a),l=!1},d(s){o[e].d(s),s&&h(t)}}}function se(d,e,a){let{$$slots:t={},$$scope:l}=e,_=!1,o=!0;return x.subscribe(r=>{_=r,_&&a(0,o=!1)}),_||Y("/admin/logout"),d.$$set=r=>{"$$scope"in r&&a(1,l=r.$$scope)},[o,l,t]}class ce extends F{constructor(e){super(),G(this,e,se,ae,N,{})}}export{ce as component};