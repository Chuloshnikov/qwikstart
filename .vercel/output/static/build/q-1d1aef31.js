import{n as _,$ as h,d as b,C as u,q as P,i as d,a as f,c as k}from"./q-1f730497.js";import{u as A,a as C,g,b as $}from"./q-188581b5.js";const D=a=>{const e=A(),t=C(),{onClick$:o,reload:r,replaceState:n,scroll:v,...s}=(()=>a)(),i=_(()=>g({...s,reload:r},t)),l=_(()=>$(a,i,t));s["preventdefault:click"]=!!i,s.href=i||a.href;const c=l!=null?u(d(()=>f(()=>import("./q-af6a04d0.js"),["build/q-af6a04d0.js","build/q-188581b5.js","build/q-1f730497.js"]),"s_eBQ0vFsFKsk")):void 0,p=u(d(()=>f(()=>Promise.resolve().then(()=>L),void 0),"s_i1Cv0pYJNR0",[e,r,n,v]));return h("a",{...s,children:b(P,null,3,"AD_0"),"data-prefetch":l,onClick$:[o,p],onFocus$:c,onMouseOver$:c,onQVisible$:c},null,0,"AD_1")},y=async(a,e)=>{const[t,o,r,n]=k();e.hasAttribute("preventdefault:click")&&(e.hasAttribute("q:nbs")?await t(location.href,{type:"popstate"}):e.href&&(e.setAttribute("aria-pressed","true"),await t(e.href,{forceReload:o,replaceState:r,scroll:n}),e.removeAttribute("aria-pressed")))},L=Object.freeze(Object.defineProperty({__proto__:null,s_8gdLBszqbaM:D,s_i1Cv0pYJNR0:y},Symbol.toStringTag,{value:"Module"}));export{D as s_8gdLBszqbaM,y as s_i1Cv0pYJNR0};
