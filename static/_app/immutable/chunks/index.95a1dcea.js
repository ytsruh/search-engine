import{k as q,m as w,d as x,l as B}from"./utils.50d53bae.js";function R(t){return t<.5?4*t*t*t:.5*Math.pow(2*t-2,3)+1}function k(t){const e=t-1;return e*e*e+1}function U(t,{delay:e=0,duration:r=400,easing:i=q}={}){const g=+getComputedStyle(t).opacity;return{delay:e,duration:r,easing:i,css:a=>`opacity: ${a*g}`}}function V(t,{delay:e=0,duration:r=400,easing:i=k,x:g=0,y:a=0,opacity:u=0}={}){const o=getComputedStyle(t),f=+o.opacity,s=o.transform==="none"?"":o.transform,n=f*(1-u),[p,y]=w(g),[d,$]=w(a);return{delay:e,duration:r,easing:i,css:(l,h)=>`
			transform: ${s} translate(${(1-l)*p}${y}, ${(1-l)*d}${$});
			opacity: ${f-n*h}`}}function v({fallback:t,...e}){const r=new Map,i=new Map;function g(u,o,f){const{delay:s=0,duration:n=c=>Math.sqrt(c)*30,easing:p=k}=x(x({},e),f),y=u.getBoundingClientRect(),d=o.getBoundingClientRect(),$=y.left-d.left,l=y.top-d.top,h=y.width/d.width,C=y.height/d.height,M=Math.sqrt($*$+l*l),m=getComputedStyle(o),S=m.transform==="none"?"":m.transform,b=+m.opacity;return{delay:s,duration:B(n)?n(M):n,easing:p,css:(c,_)=>`
				opacity: ${c*b};
				transform-origin: top left;
				transform: ${S} translate(${_*$}px,${_*l}px) scale(${c+(1-c)*h}, ${c+(1-c)*C});
			`}}function a(u,o,f){return(s,n)=>(u.set(n.key,s),()=>{if(o.has(n.key)){const p=o.get(n.key);return o.delete(n.key),g(p,s,n)}return u.delete(n.key),t&&t(s,n,f)})}return[a(i,r,!1),a(r,i,!0)]}export{U as a,v as b,k as c,R as d,V as f};
