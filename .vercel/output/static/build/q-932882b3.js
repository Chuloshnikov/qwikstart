import{O as it,H as st,L as H,b as lt,R as M,B as f,k as ct,d as ut,i as N,a as u,q as dt,c as K,o as Z,J as _t,e as mt,l as pt,h as vt}from"./q-1f730497.js";import{j as ft,c as yt,C as ht,d as Et,D as St,R as Ct,e as Rt,f as bt,h as qt,i as Lt,t as wt,k as $,l as J,r as tt,m as et,n as ot,o as W,p as gt,q as It,s as Pt,v as P,w as L,x as At,y as Dt,z as Tt}from"./q-188581b5.js";const kt=y=>{it(N(()=>u(()=>Promise.resolve().then(()=>z),void 0),"s_RPDJAz33WLA"));const n=ft();if(!(n!=null&&n.params))throw new Error("Missing Qwik City Env Data");const h=st("url");if(!h)throw new Error("Missing Qwik URL Env Data");const S=new URL(h),a=H({url:S,params:n.params,isNavigating:!1,prevUrl:void 0},{deep:!1}),C={},s=lt(H(n.response.loaders,{deep:!1})),_=M({type:"initial",dest:S,forceReload:!1,replaceState:!1,scroll:!0}),m=H(yt),R=H({headings:void 0,menu:void 0}),l=M(),o=n.response.action,b=o?n.response.loaders[o]:void 0,d=M(b?{id:o,data:n.response.formData,output:{result:b,status:n.response.status}}:void 0),g=N(()=>u(()=>Promise.resolve().then(()=>z),void 0),"s_fX0bDjeJa0E",[d,C,_,a]);return f(ht,R),f(Et,l),f(St,m),f(Ct,a),f(Rt,g),f(bt,s),f(qt,d),f(Lt,_),ct(N(()=>u(()=>Promise.resolve().then(()=>z),void 0),"s_02wMImzEAbk",[d,R,l,m,n,g,s,C,y,_,a])),ut(dt,null,3,"qY_0")};const w=()=>u(()=>import("./q-d71313e1.js"),["build/q-d71313e1.js","build/q-1f730497.js","build/q-188581b5.js"]),B=[["/",[w,()=>u(()=>import("./q-471c42d8.js"),["build/q-471c42d8.js","build/q-1f730497.js"])]],["demo/flower/",[w,()=>u(()=>import("./q-a2e09349.js"),["build/q-a2e09349.js","build/q-1f730497.js"])]],["demo/todolist/",[w,()=>u(()=>import("./q-e8fd82a7.js"),["build/q-e8fd82a7.js","build/q-1f730497.js","build/q-188581b5.js"])]],["about/",[w,()=>u(()=>import("./q-6ff0da97.js"),["build/q-6ff0da97.js","build/q-1f730497.js"])]],["contact/",[w,()=>u(()=>import("./q-ca0a9ce8.js"),["build/q-ca0a9ce8.js","build/q-1f730497.js"])]],["programsInfo/",[w,()=>u(()=>import("./q-95be03c6.js"),["build/q-95be03c6.js","build/q-1f730497.js"])]]],Q=[];const X=!0;const Ot=async(y,n)=>{const[h,S,a,C]=K(),{type:s="link",forceReload:_=y===void 0,replaceState:m=!1,scroll:R=!0}=typeof n=="object"?n:{forceReload:n},l=a.value.dest,o=y===void 0?l:wt(y,C.url);if(!$(o,l)){location.href=o.href;return}if(!_&&J(o,l)){s==="link"&&o.href!==location.href&&history.pushState(null,"",o),tt(s,o,new URL(location.href),et()),s==="popstate"&&(window._qCityScrollEnabled=!0);return}return a.value={type:s,dest:o,forceReload:_,replaceState:m,scroll:R},ot(o,Z()),W(B,Q,X,o.pathname),h.value=void 0,C.isNavigating=!0,new Promise(b=>{S.r=b})},Vt=({track:y})=>{const[n,h,S,a,C,s,_,m,R,l,o]=K();async function b(){var F;const[d,g]=y(()=>[l.value,n.value]),nt=_t(""),A=o.url,p=g?"form":d.type,rt=d.replaceState;let r,I,U=null,D;{r=new URL(d.dest,location),r.pathname.endsWith("/")||(r.pathname+="/");let T=W(B,Q,X,r.pathname);D=Z();const k=I=await ot(r,D,!0,g);if(!k){l.untrackedValue={type:p,dest:r};return}const x=k.href,O=new URL(x,r);gt(O,r)||(r=O,T=W(B,Q,X,r.pathname)),U=await T}if(U){const[T,k,x,O]=U,V=x,at=V[V.length-1];o.prevUrl=A,o.url=r,o.params={...k},l.untrackedValue={type:p,dest:r};const q=It(I,o,V,nt);h.headings=at.headings,h.menu=O,S.value=mt(V),a.links=q.links,a.meta=q.meta,a.styles=q.styles,a.scripts=q.scripts,a.title=q.title,a.frontmatter=q.frontmatter;{R.viewTransition!==!1&&(document.__q_view_transition__=!0);let Y;p==="popstate"&&(Y=et()),d.scroll&&(!d.forceReload||!J(r,A))&&(p==="link"||p==="popstate")&&(document.__q_scroll_restore__=()=>tt(p,r,A,Y));const G=I==null?void 0:I.loaders,t=window;if(G&&Object.assign(_,G),Pt.clear(),!t._qCitySPA){if(t._qCitySPA=!0,history.scrollRestoration="manual",t.addEventListener("popstate",()=>{t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),s(location.href,{type:"popstate"})}),t.removeEventListener("popstate",t._qCityInitPopstate),t._qCityInitPopstate=void 0,!t._qCityHistoryPatch){t._qCityHistoryPatch=!0;const i=history.pushState,v=history.replaceState,E=e=>(e===null||typeof e>"u"?e={}:(e==null?void 0:e.constructor)!==Object&&(e={_data:e}),e._qCityScroll=e._qCityScroll||L(document.documentElement),e);history.pushState=(e,c,j)=>(e=E(e),i.call(history,e,c,j)),history.replaceState=(e,c,j)=>(e=E(e),v.call(history,e,c,j))}document.body.addEventListener("click",i=>{if(i.defaultPrevented)return;const v=i.target.closest("a[href]");if(v&&!v.hasAttribute("preventdefault:click")){const E=v.getAttribute("href"),e=new URL(location.href),c=new URL(E,e);if($(c,e)&&J(c,e)){if(i.preventDefault(),!c.hash&&!c.href.endsWith("#")){c.href!==e.href&&history.pushState(null,"",c),t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce),P({...L(document.documentElement),x:0,y:0}),location.reload();return}s(v.getAttribute("href"))}}}),document.body.removeEventListener("click",t._qCityInitAnchors),t._qCityInitAnchors=void 0,window.navigation||(document.addEventListener("visibilitychange",()=>{if(t._qCityScrollEnabled&&document.visibilityState==="hidden"){const i=L(document.documentElement);P(i)}},{passive:!0}),document.removeEventListener("visibilitychange",t._qCityInitVisibility),t._qCityInitVisibility=void 0),t.addEventListener("scroll",()=>{t._qCityScrollEnabled&&(clearTimeout(t._qCityScrollDebounce),t._qCityScrollDebounce=setTimeout(()=>{const i=L(document.documentElement);P(i),t._qCityScrollDebounce=void 0},200))},{passive:!0}),removeEventListener("scroll",t._qCityInitScroll),t._qCityInitScroll=void 0,(F=t._qCityBootstrap)==null||F.remove(),t._qCityBootstrap=void 0,At.resolve()}if(p!=="popstate"){t._qCityScrollEnabled=!1,clearTimeout(t._qCityScrollDebounce);const i=L(document.documentElement);P(i)}Dt(window,p,A,r,rt),pt(D).then(()=>{var E;Tt(D).setAttribute("q:route",T);const v=L(document.documentElement);P(v),t._qCityScrollEnabled=!0,o.isNavigating=!1,(E=m.r)==null||E.call(m)})}}}b()},Ht=":root{view-transition-name:none}",z=Object.freeze(Object.defineProperty({__proto__:null,_hW:vt,s_02wMImzEAbk:Vt,s_RPDJAz33WLA:Ht,s_TxCFOy819ag:kt,s_fX0bDjeJa0E:Ot},Symbol.toStringTag,{value:"Module"}));export{vt as _hW,Vt as s_02wMImzEAbk,Ht as s_RPDJAz33WLA,kt as s_TxCFOy819ag,Ot as s_fX0bDjeJa0E};