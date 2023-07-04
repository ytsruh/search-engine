import{S as oe,i as ne,s as le,k as m,a as L,e as X,O as ie,l as f,h as c,c as x,n as l,D as s,b as H,d as O,f as ce,g as D,v as ue,q as T,y as ee,m as g,r as N,z as te,A as ae,K as pe,Y as me,R as se,B as re}from"../chunks/index.a0ea0dad.js";import{g as fe}from"../chunks/navigation.6907e295.js";import{t as Z,T as de}from"../chunks/Toast.3444080d.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.383ca85f.js";import{L as he}from"../chunks/Loading.71c0ee2c.js";import{i as _e}from"../chunks/authStore.17cc9019.js";function ge(E){let t,r,e,o,p,h,i,n,d,a,u,_,U,b,S,q,C,w,M,P,k,R,V,$,j,z,J;return $=new de({}),{c(){t=m("div"),r=m("h1"),e=m("span"),o=T("Login"),p=T(" to Search Engine Admin"),h=L(),i=m("form"),n=m("label"),d=m("span"),a=T("Email"),u=L(),_=m("input"),U=L(),b=m("label"),S=m("span"),q=T("Password"),C=L(),w=m("input"),M=L(),P=m("div"),k=m("button"),R=T("Login"),V=L(),ee($.$$.fragment),this.h()},l(y){t=f(y,"DIV",{class:!0});var v=g(t);r=f(v,"H1",{class:!0});var F=g(r);e=f(F,"SPAN",{class:!0});var K=g(e);o=N(K,"Login"),K.forEach(c),p=N(F," to Search Engine Admin"),F.forEach(c),h=x(v),i=f(v,"FORM",{class:!0,autocomplete:!0});var A=g(i);n=f(A,"LABEL",{class:!0});var I=g(n);d=f(I,"SPAN",{});var Y=g(d);a=N(Y,"Email"),Y.forEach(c),u=x(I),_=f(I,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),I.forEach(c),U=x(A),b=f(A,"LABEL",{class:!0});var B=g(b);S=f(B,"SPAN",{});var G=g(S);q=N(G,"Password"),G.forEach(c),C=x(B),w=f(B,"INPUT",{class:!0,id:!0,type:!0,placeholder:!0}),B.forEach(c),M=x(A),P=f(A,"DIV",{class:!0});var Q=g(P);k=f(Q,"BUTTON",{type:!0,class:!0});var W=g(k);R=N(W,"Login"),W.forEach(c),Q.forEach(c),A.forEach(c),V=x(v),te($.$$.fragment,v),v.forEach(c),this.h()},h(){l(e,"class","text-primary-600"),l(r,"class","text-3xl py-5"),l(_,"class","input"),l(_,"id","email"),l(_,"type","email"),l(_,"placeholder","Email Address"),l(n,"class","label py-2"),l(w,"class","input"),l(w,"id","password"),l(w,"type","password"),l(w,"placeholder","Password"),l(b,"class","label py-2"),l(k,"type","submit"),l(k,"class","btn variant-filled-primary"),l(P,"class","flex justify-around py-5"),l(i,"class","w-full sm:w-2/3 lg:w-1/2 xl:w-1/3"),l(i,"autocomplete","off"),l(t,"class","flex flex-col h-full items-center justify-center px-10")},m(y,v){H(y,t,v),s(t,r),s(r,e),s(e,o),s(r,p),s(t,h),s(t,i),s(i,n),s(n,d),s(d,a),s(n,u),s(n,_),s(i,U),s(i,b),s(b,S),s(S,q),s(b,C),s(b,w),s(i,M),s(i,P),s(P,k),s(k,R),s(t,V),ae($,t,null),j=!0,z||(J=pe(i,"submit",me(E[1])),z=!0)},p:se,i(y){j||(D($.$$.fragment,y),j=!0)},o(y){O($.$$.fragment,y),j=!1},d(y){y&&c(t),re($),z=!1,J()}}}function ye(E){let t,r;return t=new he({}),{c(){ee(t.$$.fragment)},l(e){te(t.$$.fragment,e)},m(e,o){ae(t,e,o),r=!0},p:se,i(e){r||(D(t.$$.fragment,e),r=!0)},o(e){O(t.$$.fragment,e),r=!1},d(e){re(t,e)}}}function be(E){let t,r,e,o,p,h;const i=[ye,ge],n=[];function d(a,u){return a[0]?0:1}return e=d(E),o=n[e]=i[e](E),{c(){t=m("meta"),r=L(),o.c(),p=X(),this.h()},l(a){const u=ie("svelte-1rjgk8j",document.head);t=f(u,"META",{name:!0,content:!0}),u.forEach(c),r=x(a),o.l(a),p=X(),this.h()},h(){document.title="Login | Search Engine",l(t,"name","description"),l(t,"content","Login to the admin section of the search engine")},m(a,u){s(document.head,t),H(a,r,u),n[e].m(a,u),H(a,p,u),h=!0},p(a,[u]){let _=e;e=d(a),e===_?n[e].p(a,u):(ue(),O(n[_],1,1,()=>{n[_]=null}),ce(),o=n[e],o?o.p(a,u):(o=n[e]=i[e](a),o.c()),D(o,1),o.m(p.parentNode,p))},i(a){h||(D(o),h=!0)},o(a){O(o),h=!1},d(a){c(t),a&&c(r),n[e].d(a),a&&c(p)}}}function ve(E,t,r){let e=!1;async function o(p){r(0,e=!0);const h=p.target.email.value,i=p.target.password.value;if(h==""||i==""){const d={message:"Please ensure you enter your username & password",timeout:5e3,background:"variant-filled-primary"};r(0,e=!1),Z.trigger(d);return}const n=await fetch("/api/auth/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:h,password:i})});if(!n.ok){const d={message:"There was a problem logging you in. Please ensure your details are correct.",timeout:5e3,background:"variant-filled-primary"};r(0,e=!1),Z.trigger(d);return}await n.json(),r(0,e=!1),_e.set(!0),fe("/admin")}return[e,o]}class Pe extends oe{constructor(t){super(),ne(this,t,ve,be,le,{})}}export{Pe as component};
