import{S as tt,i as et,s as at,k as o,a as T,q as f,y as st,O as rt,l as c,h as s,c as w,m,r as h,z as nt,n as e,D as t,b as L,A as lt,K as X,Y as ot,R as ct,g as it,d as ut,B as mt,T as dt,Z as pt}from"../chunks/index.a0ea0dad.js";import{g as ft}from"../chunks/navigation.6907e295.js";import{T as ht,t as vt}from"../chunks/Toast.3444080d.js";import"../chunks/ProgressBar.svelte_svelte_type_style_lang.383ca85f.js";const{document:W}=pt;function _t(v){let i,y,a,l,r,N,O,j,x,q,A,C,E,M,U,u,d,V,p,_,F,G,g,H,K,b,I,R,z;return b=new ht({}),{c(){i=o("meta"),y=T(),a=o("div"),l=o("div"),r=o("h1"),N=f("Search 0.0000000"),O=f(v[0]),j=f("%"),x=o("span"),q=f("*"),A=f(" of the Web"),C=T(),E=o("p"),M=f("* completely made up statistic"),U=T(),u=o("form"),d=o("input"),V=T(),p=o("div"),_=o("button"),F=f("Search"),G=T(),g=o("button"),H=f("Clear"),K=T(),st(b.$$.fragment),this.h()},l(n){const P=rt("svelte-115ppwv",W.head);i=c(P,"META",{name:!0,content:!0}),P.forEach(s),y=w(n),a=c(n,"DIV",{class:!0});var S=m(a);l=c(S,"DIV",{class:!0});var k=m(l);r=c(k,"H1",{class:!0});var $=m(r);N=h($,"Search 0.0000000"),O=h($,v[0]),j=h($,"%"),x=c($,"SPAN",{class:!0});var Q=m(x);q=h(Q,"*"),Q.forEach(s),A=h($," of the Web"),$.forEach(s),C=w(k),E=c(k,"P",{class:!0});var Y=m(E);M=h(Y,"* completely made up statistic"),Y.forEach(s),k.forEach(s),U=w(S),u=c(S,"FORM",{class:!0});var B=m(u);d=c(B,"INPUT",{id:!0,class:!0,type:!0,placeholder:!0,autocomplete:!0}),V=w(B),p=c(B,"DIV",{class:!0});var D=m(p);_=c(D,"BUTTON",{type:!0,class:!0});var Z=m(_);F=h(Z,"Search"),Z.forEach(s),G=w(D),g=c(D,"BUTTON",{class:!0});var J=m(g);H=h(J,"Clear"),J.forEach(s),D.forEach(s),B.forEach(s),K=w(S),nt(b.$$.fragment,S),S.forEach(s),this.h()},h(){W.title="Home | Search Engine",e(i,"name","description"),e(i,"content","The homemade search engine built using Go (Golang), Fiber, Postgres & SvelteKit."),e(x,"class","text-lg"),e(r,"class","text-3xl md:text-5xl"),e(E,"class","text-sm"),e(l,"class","flex flex-col justify-center items-center space-y-5 pb-10 text-center px-10 break-words"),e(d,"id","input"),e(d,"class","input"),e(d,"type","text"),e(d,"placeholder","Search"),e(d,"autocomplete","off"),e(_,"type","submit"),e(_,"class","btn variant-filled-primary"),e(g,"class","btn variant-filled-tertiary"),e(p,"class","flex justify-around py-5"),e(u,"class","w-full sm:w-2/3 lg:w-1/2 xl:w-1/3"),e(a,"class","flex flex-col h-full items-center justify-center px-10")},m(n,P){t(W.head,i),L(n,y,P),L(n,a,P),t(a,l),t(l,r),t(r,N),t(r,O),t(r,j),t(r,x),t(x,q),t(r,A),t(l,C),t(l,E),t(E,M),t(a,U),t(a,u),t(u,d),t(u,V),t(u,p),t(p,_),t(_,F),t(p,G),t(p,g),t(g,H),t(a,K),lt(b,a,null),I=!0,R||(z=[X(g,"click",gt),X(u,"submit",ot(v[1]))],R=!0)},p:ct,i(n){I||(it(b.$$.fragment,n),I=!0)},o(n){ut(b.$$.fragment,n),I=!1},d(n){s(i),n&&s(y),n&&s(a),mt(b),R=!1,dt(z)}}}function gt(){const v=document.getElementById("input");v.value=""}function bt(v){const i=Math.random().toString().substring(0,5).split(".")[1];function y(a){const l=a.target.input.value;if(l==""){const r={message:"Please ensure you enter a search term",timeout:5e3,background:"variant-filled-primary"};vt.trigger(r);return}ft(`/search?q=${l.toString()}`)}return[i,y]}class $t extends tt{constructor(i){super(),et(this,i,bt,_t,at,{})}}export{$t as component};
