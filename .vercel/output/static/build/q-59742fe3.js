import{c as i,_ as u,$ as l,m as n,d as m,i as d,q as p,a as _}from"./q-1f730497.js";import{u as f}from"./q-188581b5.js";const b=async(a,e)=>{const[s]=i(),t=new FormData(e),o=new URLSearchParams;t.forEach((r,c)=>{typeof r=="string"&&o.append(c,r)}),s("?"+o.toString(),{type:"form",forceReload:!0}).then(()=>{e.getAttribute("data-spa-reset")==="true"&&e.reset(),e.dispatchEvent(new CustomEvent("submitcompleted",{bubbles:!1,cancelable:!1,composed:!1,detail:{status:200}}))})},v=a=>{const e=u(a,["action","spaReset","reloadDocument","onSubmit$"]),s=f();return l("form",{...e,children:m(p,null,3,"BC_0"),onSubmit$:d(()=>_(()=>Promise.resolve().then(()=>S),void 0),"s_p9MSze0ojs4",[s])},{action:"get","data-spa-reset":n(t=>t.spaReset?"true":void 0,[a],'p0.spaReset?"true":undefined'),"preventdefault:submit":n(t=>!t.reloadDocument,[a],"!p0.reloadDocument")},0,"BC_1")},S=Object.freeze(Object.defineProperty({__proto__:null,s_Nk9PlpjQm9Y:v,s_p9MSze0ojs4:b},Symbol.toStringTag,{value:"Module"}));export{v as s_Nk9PlpjQm9Y,b as s_p9MSze0ojs4};
