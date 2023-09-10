import{j as u,b as le,c as de,F as S,s as H,d as V,i as W,u as me,e as ue,f as g,g as y,h as pe,k as v,l as Z,S as fe,R as be,Q as ye}from"./@qwik-city-plan-e437d9bd.js";/**
 * @license
 * @builder.io/qwik/server 1.2.10
 * Copyright Builder.io, Inc. All Rights Reserved.
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://github.com/BuilderIO/qwik/blob/main/LICENSE
 */var he=(e=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(e,{get:(t,n)=>(typeof require<"u"?require:t)[n]}):e)(function(e){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+e+'" is not supported')});function X(e,t){const n=t==null?void 0:t.mapper,s=e.symbolMapper?e.symbolMapper:i=>{var a;if(n){const r=N(i),c=n[r];if(!c){if((a=globalThis.__qwik_reg_symbols)==null?void 0:a.has(r))return[i,"_"];console.error("Cannot resolve symbol",i,"in",n)}return c}};return{isServer:!0,async importSymbol(i,a,r){var q;const c=N(r),l=(q=globalThis.__qwik_reg_symbols)==null?void 0:q.get(c);if(l)return l;let m=String(a);m.endsWith(".js")||(m+=".js");const _=he(m);if(!(r in _))throw new Error(`Q-ERROR: missing symbol '${r}' in module '${m}'.`);return _[r]},raf:()=>(console.error("server can not rerender"),Promise.resolve()),nextTick:i=>new Promise(a=>{setTimeout(()=>{a(i())})}),chunkForSymbol(i){return s(i,n)}}}async function we(e,t){const n=X(e,t);H(n)}var N=e=>{const t=e.lastIndexOf("_");return t>-1?e.slice(t+1):e};function k(){if(typeof performance>"u")return()=>0;const e=performance.now();return()=>(performance.now()-e)/1e6}function G(e){let t=e.base;return typeof e.base=="function"&&(t=e.base(e)),typeof t=="string"?(t.endsWith("/")||(t+="/"),t):"/build/"}var ge=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,qe=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events =  new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`,_e=`((e,t)=>{const n="__q_context__",o=window,s=new Set,i=t=>e.querySelectorAll(t),a=(e,t,n=t.type)=>{i("[on"+e+"\\\\:"+n+"]").forEach((o=>f(o,e,t,n)))},r=(e,t)=>e.getAttribute(t),l=t=>{if(void 0===t._qwikjson_){let n=(t===e.documentElement?e.body:t).lastElementChild;for(;n;){if("SCRIPT"===n.tagName&&"qwik/json"===r(n,"type")){t._qwikjson_=JSON.parse(n.textContent.replace(/\\\\x3C(\\/?script)/g,"<$1"));break}n=n.previousElementSibling}}},c=(e,t)=>new CustomEvent(e,{detail:t}),f=async(t,o,s,i=s.type)=>{const a="on"+o+":"+i;t.hasAttribute("preventdefault:"+i)&&s.preventDefault();const c=t._qc_,f=null==c?void 0:c.li.filter((e=>e[0]===a));if(f&&f.length>0){for(const e of f)await e[1].getFn([t,s],(()=>t.isConnected))(s,t);return}const b=r(t,a);if(b){const o=t.closest("[q\\\\:container]"),i=new URL(r(o,"q:base"),e.baseURI);for(const a of b.split("\\n")){const r=new URL(a,i),c=r.hash.replace(/^#?([^?[|]*).*$/,"$1")||"default",f=performance.now(),b=import(
/* @vite-ignore */
r.href.split("#")[0]);l(o);const p=(await b)[c],u=e[n];if(t.isConnected)try{e[n]=[t,s,r],d("qsymbol",{symbol:c,element:t,reqTime:f}),await p(s,t)}finally{e[n]=u}}}},d=(t,n)=>{e.dispatchEvent(c(t,n))},b=e=>e.replace(/([A-Z])/g,(e=>"-"+e.toLowerCase())),p=async e=>{let t=b(e.type),n=e.target;for(a("-document",e,t);n&&n.getAttribute;)await f(n,"",e,t),n=e.bubbles&&!0!==e.cancelBubble?n.parentElement:null},u=e=>{a("-window",e,b(e.type))},w=()=>{var n;const a=e.readyState;if(!t&&("interactive"==a||"complete"==a)&&(t=1,d("qinit"),(null!=(n=o.requestIdleCallback)?n:o.setTimeout).bind(o)((()=>d("qidle"))),s.has("qvisible"))){const e=i("[on\\\\:qvisible]"),t=new IntersectionObserver((e=>{for(const n of e)n.isIntersecting&&(t.unobserve(n.target),f(n.target,"",c("qvisible",n)))}));e.forEach((e=>t.observe(e)))}},q=(e,t,n,o=!1)=>e.addEventListener(t,n,{capture:o,passive:!1}),v=t=>{for(const n of t)s.has(n)||(q(e,n,p,!0),q(o,n,u),s.add(n))};if(!e.qR){const t=o.qwikevents;Array.isArray(t)&&v(t),o.qwikevents={push:(...e)=>v(e)},q(e,"readystatechange",w),w()}})(document);`,ve=`(() => {
    ((doc, hasInitialized) => {
        const win = window;
        const events = new Set;
        const querySelectorAll = query => doc.querySelectorAll(query);
        const broadcast = (infix, ev, type = ev.type) => {
            querySelectorAll("[on" + infix + "\\\\:" + type + "]").forEach((target => dispatch(target, infix, ev, type)));
        };
        const getAttribute = (el, name) => el.getAttribute(name);
        const resolveContainer = containerEl => {
            if (void 0 === containerEl._qwikjson_) {
                let script = (containerEl === doc.documentElement ? doc.body : containerEl).lastElementChild;
                while (script) {
                    if ("SCRIPT" === script.tagName && "qwik/json" === getAttribute(script, "type")) {
                        containerEl._qwikjson_ = JSON.parse(script.textContent.replace(/\\\\x3C(\\/?script)/g, "<$1"));
                        break;
                    }
                    script = script.previousElementSibling;
                }
            }
        };
        const createEvent = (eventName, detail) => new CustomEvent(eventName, {
            detail: detail
        });
        const dispatch = async (element, onPrefix, ev, eventName = ev.type) => {
            const attrName = "on" + onPrefix + ":" + eventName;
            element.hasAttribute("preventdefault:" + eventName) && ev.preventDefault();
            const ctx = element._qc_;
            const qrls = null == ctx ? void 0 : ctx.li.filter((li => li[0] === attrName));
            if (qrls && qrls.length > 0) {
                for (const q of qrls) {
                    await q[1].getFn([ element, ev ], (() => element.isConnected))(ev, element);
                }
                return;
            }
            const attrValue = getAttribute(element, attrName);
            if (attrValue) {
                const container = element.closest("[q\\\\:container]");
                const base = new URL(getAttribute(container, "q:base"), doc.baseURI);
                for (const qrl of attrValue.split("\\n")) {
                    const url = new URL(qrl, base);
                    const symbolName = url.hash.replace(/^#?([^?[|]*).*$/, "$1") || "default";
                    const reqTime = performance.now();
                    const module = import(
                    /* @vite-ignore */
                    url.href.split("#")[0]);
                    resolveContainer(container);
                    const handler = (await module)[symbolName];
                    const previousCtx = doc.__q_context__;
                    if (element.isConnected) {
                        try {
                            doc.__q_context__ = [ element, ev, url ];
                            emitEvent("qsymbol", {
                                symbol: symbolName,
                                element: element,
                                reqTime: reqTime
                            });
                            await handler(ev, element);
                        } finally {
                            doc.__q_context__ = previousCtx;
                        }
                    }
                }
            }
        };
        const emitEvent = (eventName, detail) => {
            doc.dispatchEvent(createEvent(eventName, detail));
        };
        const camelToKebab = str => str.replace(/([A-Z])/g, (a => "-" + a.toLowerCase()));
        const processDocumentEvent = async ev => {
            let type = camelToKebab(ev.type);
            let element = ev.target;
            broadcast("-document", ev, type);
            while (element && element.getAttribute) {
                await dispatch(element, "", ev, type);
                element = ev.bubbles && !0 !== ev.cancelBubble ? element.parentElement : null;
            }
        };
        const processWindowEvent = ev => {
            broadcast("-window", ev, camelToKebab(ev.type));
        };
        const processReadyStateChange = () => {
            var _a;
            const readyState = doc.readyState;
            if (!hasInitialized && ("interactive" == readyState || "complete" == readyState)) {
                hasInitialized = 1;
                emitEvent("qinit");
                (null != (_a = win.requestIdleCallback) ? _a : win.setTimeout).bind(win)((() => emitEvent("qidle")));
                if (events.has("qvisible")) {
                    const results = querySelectorAll("[on\\\\:qvisible]");
                    const observer = new IntersectionObserver((entries => {
                        for (const entry of entries) {
                            if (entry.isIntersecting) {
                                observer.unobserve(entry.target);
                                dispatch(entry.target, "", createEvent("qvisible", entry));
                            }
                        }
                    }));
                    results.forEach((el => observer.observe(el)));
                }
            }
        };
        const addEventListener = (el, eventName, handler, capture = !1) => el.addEventListener(eventName, handler, {
            capture: capture,
            passive: !1
        });
        const push = eventNames => {
            for (const eventName of eventNames) {
                if (!events.has(eventName)) {
                    addEventListener(doc, eventName, processDocumentEvent, !0);
                    addEventListener(win, eventName, processWindowEvent);
                    events.add(eventName);
                }
            }
        };
        if (!doc.qR) {
            const qwikevents = win.qwikevents;
            Array.isArray(qwikevents) && push(qwikevents);
            win.qwikevents = {
                push: (...e) => push(e)
            };
            addEventListener(doc, "readystatechange", processReadyStateChange);
            processReadyStateChange();
        }
    })(document);
})();`;function xe(e={}){return Array.isArray(e.events)&&e.events.length>0?(e.debug?ve:_e).replace("window.qEvents",JSON.stringify(e.events)):e.debug?qe:ge}function je(e,t,n){if(!n)return[];const s=t.prefetchStrategy,o=G(t);if(s!==null){if(!s||!s.symbolsToPrefetch||s.symbolsToPrefetch==="auto")return ke(e,n,o);if(typeof s.symbolsToPrefetch=="function")try{return s.symbolsToPrefetch({manifest:n.manifest})}catch(i){console.error("getPrefetchUrls, symbolsToPrefetch()",i)}}return[]}function ke(e,t,n){const s=[],o=e==null?void 0:e.qrls,{mapper:i,manifest:a}=t,r=new Map;if(Array.isArray(o))for(const c of o){const l=c.getHash(),m=i[l];m&&ee(a,r,s,n,m[1])}return s}function ee(e,t,n,s,o){const i=s+o;let a=t.get(i);if(!a){a={url:i,imports:[]},t.set(i,a);const r=e.bundles[o];if(r&&Array.isArray(r.imports))for(const c of r.imports)ee(e,t,a.imports,s,c)}n.push(a)}function Ne(e){if(e!=null&&e.mapping!=null&&typeof e.mapping=="object"&&e.symbols!=null&&typeof e.symbols=="object"&&e.bundles!=null&&typeof e.bundles=="object")return e}function E(){let o=`const w=new Worker(URL.createObjectURL(new Blob(['onmessage=(e)=>{Promise.all(e.data.map(u=>fetch(u))).finally(()=>{setTimeout(postMessage({}),9999)})}'],{type:"text/javascript"})));`;return o+="w.postMessage(u.map(u=>new URL(u,origin)+''));",o+="w.onmessage=()=>{w.terminate()};",o}function Ee(e){const t={bundles:x(e).map(n=>n.split("/").pop())};return`document.dispatchEvent(new CustomEvent("qprefetch",{detail:${JSON.stringify(t)}}))`}function x(e){const t=[],n=s=>{if(Array.isArray(s))for(const o of s)t.includes(o.url)||(t.push(o.url),n(o.imports))};return n(e),t}function Se(e){const t=new Map;let n=0;const s=(r,c)=>{if(Array.isArray(r))for(const l of r){const m=t.get(l.url)||0;t.set(l.url,m+1),n++,c.has(l.url)||(c.add(l.url),s(l.imports,c))}},o=new Set;for(const r of e)o.clear(),s(r.imports,o);const i=n/t.size*2,a=Array.from(t.entries());return a.sort((r,c)=>c[1]-r[1]),a.slice(0,5).filter(r=>r[1]>i).map(r=>r[0])}function ze(e,t,n){const s=Fe(e==null?void 0:e.implementation),o=[];return s.prefetchEvent==="always"&&Ie(o,t,n),s.linkInsert==="html-append"&&Ce(o,t,s),s.linkInsert==="js-append"?Ae(o,t,s,n):s.workerFetchInsert==="always"&&Le(o,t,n),o.length>0?u(S,{children:o}):null}function Ie(e,t,n){const s=Se(t);for(const o of s)e.push(u("link",{rel:"modulepreload",href:o,nonce:n}));e.push(u("script",{dangerouslySetInnerHTML:Ee(t),nonce:n}))}function Ce(e,t,n){const s=x(t),o=n.linkRel||"prefetch";for(const i of s){const a={};a.href=i,a.rel=o,(o==="prefetch"||o==="preload")&&i.endsWith(".js")&&(a.as="script"),e.push(u("link",a,void 0))}}function Ae(e,t,n,s){const o=n.linkRel||"prefetch";let i="";n.workerFetchInsert==="no-link-support"&&(i+="let supportsLinkRel = true;"),i+=`const u=${JSON.stringify(x(t))};`,i+="u.map((u,i)=>{",i+="const l=document.createElement('link');",i+='l.setAttribute("href",u);',i+=`l.setAttribute("rel","${o}");`,n.workerFetchInsert==="no-link-support"&&(i+="if(i===0){",i+="try{",i+=`supportsLinkRel=l.relList.supports("${o}");`,i+="}catch(e){}",i+="}"),i+="document.body.appendChild(l);",i+="});",n.workerFetchInsert==="no-link-support"&&(i+="if(!supportsLinkRel){",i+=E(),i+="}"),n.workerFetchInsert==="always"&&(i+=E()),e.push(u("script",{type:"module",dangerouslySetInnerHTML:i,nonce:s}))}function Le(e,t,n){let s=`const u=${JSON.stringify(x(t))};`;s+=E(),e.push(u("script",{type:"module",dangerouslySetInnerHTML:s,nonce:n}))}function Fe(e){return e&&typeof e=="object"?e:Pe}var Pe={linkInsert:null,linkRel:null,workerFetchInsert:null,prefetchEvent:"always"},Re="<!DOCTYPE html>";async function Te(e,t){var P;let n=t.stream,s=0,o=0,i=0,a=0,r="",c;const l=((P=t.streaming)==null?void 0:P.inOrder)??{strategy:"auto",maximunInitialChunk:5e4,maximunChunk:3e4},m=t.containerTagName??"html",_=t.containerAttributes??{},q=n,ne=k(),se=G(t),p=te(t.manifest);function z(){r&&(q.write(r),r="",s=0,i++,i===1&&(a=ne()))}function I(d){const f=d.length;s+=f,o+=f,r+=d}switch(l.strategy){case"disabled":n={write:I};break;case"direct":n=q;break;case"auto":let d=0,f=!1;const R=l.maximunChunk??0,j=l.maximunInitialChunk??0;n={write(w){w==="<!--qkssr-f-->"?f||(f=!0):w==="<!--qkssr-pu-->"?d++:w==="<!--qkssr-po-->"?d--:I(w),d===0&&(f||s>=(i===0?j:R))&&(f=!1,z())}};break}m==="html"?n.write(Re):(n.write("<!--cq-->"),t.qwikLoader?(t.qwikLoader.include===void 0&&(t.qwikLoader.include="never"),t.qwikLoader.position===void 0&&(t.qwikLoader.position="bottom")):t.qwikLoader={include:"never"}),t.manifest||console.warn("Missing client manifest, loading symbols in the client might 404. Please ensure the client build has run and generated the manifest for the server build."),await we(t,p);const C=p==null?void 0:p.manifest.injections,ie=C?C.map(d=>u(d.tag,d.attributes??{})):void 0,oe=k(),A=[];let L=0,F=0;await le(e,{stream:n,containerTagName:m,containerAttributes:_,serverData:t.serverData,base:se,beforeContent:ie,beforeClose:async(d,f,R,j)=>{var O,M,$,Q,U,B,Y;L=oe();const w=k();c=await de(d,f,void 0,j);const h=[];if(t.prefetchStrategy!==null){const b=je(c,t,p);if(b.length>0){const J=ze(t.prefetchStrategy,b,(O=t.serverData)==null?void 0:O.nonce);J&&h.push(J)}}const ae=JSON.stringify(c.state,void 0,void 0);h.push(u("script",{type:"qwik/json",dangerouslySetInnerHTML:De(ae),nonce:(M=t.serverData)==null?void 0:M.nonce})),c.funcs.length>0&&h.push(u("script",{"q:func":"qwik/json",dangerouslySetInnerHTML:Oe(c.funcs),nonce:($=t.serverData)==null?void 0:$.nonce}));const ce=!c||c.mode!=="static",T=((Q=t.qwikLoader)==null?void 0:Q.include)??"auto",D=T==="always"||T==="auto"&&ce;if(D){const b=xe({events:(U=t.qwikLoader)==null?void 0:U.events,debug:t.debug});h.push(u("script",{id:"qwikloader",dangerouslySetInnerHTML:b,nonce:(B=t.serverData)==null?void 0:B.nonce}))}const K=Array.from(f.$events$,b=>JSON.stringify(b));if(K.length>0){let b=`window.qwikevents.push(${K.join(", ")})`;D||(b=`window.qwikevents||=[];${b}`),h.push(u("script",{dangerouslySetInnerHTML:b,nonce:(Y=t.serverData)==null?void 0:Y.nonce}))}return Ke(A,d),F=w(),u(S,{children:h})},manifestHash:(p==null?void 0:p.manifest.manifestHash)||"dev"}),m!=="html"&&n.write("<!--/cq-->"),z();const re=c.resources.some(d=>d._cache!==1/0);return{prefetchResources:void 0,snapshotResult:c,flushes:i,manifest:p==null?void 0:p.manifest,size:o,isStatic:!re,timing:{render:L,snapshot:F,firstFlush:a},_symbols:A}}function te(e){if(e){if("mapper"in e)return e;if(e=Ne(e),e){const t={};return Object.entries(e.mapping).forEach(([n,s])=>{t[N(n)]=[n,s]}),{mapper:t,manifest:e}}}}var De=e=>e.replace(/<(\/?script)/g,"\\x3C$1");function Ke(e,t){var n;for(const s of t){const o=(n=s.$componentQrl$)==null?void 0:n.getSymbol();o&&!e.includes(o)&&e.push(o)}}function Oe(e){return`document.currentScript.qFuncs=[${e.join(`,
`)}]`}async function Ze(e){const t=X({manifest:e},te(e));H(t)}const Me={manifestHash:"3dtk6a",symbols:{s_02wMImzEAbk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useTask",canonicalFilename:"s_02wmimzeabk",hash:"02wMImzEAbk",ctxKind:"function",ctxName:"useTask$",captures:!0,parent:"s_TxCFOy819ag",loc:[24662,33625]},s_LQPhZ0qOjrk:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useVisibleTask",canonicalFilename:"s_lqphz0qojrk",hash:"LQPhZ0qOjrk",ctxKind:"function",ctxName:"useVisibleTask$",captures:!0,parent:"s_PxZ05oEiFy8",loc:[391,623]},s_3sccYCDd1Z0:{origin:"root.tsx",displayName:"root_component",canonicalFilename:"s_3sccycdd1z0",hash:"3sccYCDd1Z0",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[268,793]},s_8gdLBszqbaM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component",canonicalFilename:"s_8gdlbszqbam",hash:"8gdLBszqbaM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[35578,37229]},s_9IgPNJsxq0g:{origin:"routes/about/index.tsx",displayName:"about_component",canonicalFilename:"s_9igpnjsxq0g",hash:"9IgPNJsxq0g",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[77,883]},s_GB0PKgW2dDU:{origin:"routes/programsInfo/index.tsx",displayName:"programsInfo_component",canonicalFilename:"s_gb0pkgw2ddu",hash:"GB0PKgW2dDU",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[87,1907]},s_J4V2qsF7Yxo:{origin:"routes/demo/todolist/index.tsx",displayName:"todolist_component",canonicalFilename:"s_j4v2qsf7yxo",hash:"J4V2qsF7Yxo",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[565,1631]},s_M0MhZOWBKK8:{origin:"routes/contact/index.tsx",displayName:"contact_component",canonicalFilename:"s_m0mhzowbkk8",hash:"M0MhZOWBKK8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[77,323]},s_Nk9PlpjQm9Y:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component",canonicalFilename:"s_nk9plpjqm9y",hash:"Nk9PlpjQm9Y",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[47183,48534]},s_PxZ05oEiFy8:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component",canonicalFilename:"s_pxz05oeify8",hash:"PxZ05oEiFy8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[243,1545]},s_TxCFOy819ag:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component",canonicalFilename:"s_txcfoy819ag",hash:"TxCFOy819ag",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[21392,33912]},s_VkLNXphUh5s:{origin:"routes/layout.tsx",displayName:"layout_component",canonicalFilename:"s_vklnxphuh5s",hash:"VkLNXphUh5s",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[952,1139]},s_WmYC5H00wtI:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component",canonicalFilename:"s_wmyc5h00wti",hash:"WmYC5H00wtI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[34196,35459]},s_e0ssiDXoeAM:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"RouterOutlet_component",canonicalFilename:"s_e0ssidxoeam",hash:"e0ssiDXoeAM",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[7931,8645]},s_mBt9fIl89mc:{origin:"components/starter/header/header.tsx",displayName:"header_component",canonicalFilename:"s_mbt9fil89mc",hash:"mBt9fIl89mc",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[178,1355]},s_u0bwM0i5dA8:{origin:"components/starter/footer/footer.tsx",displayName:"footer_component",canonicalFilename:"s_u0bwm0i5da8",hash:"u0bwM0i5dA8",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[77,314]},s_xYL1qOwPyDI:{origin:"routes/index.tsx",displayName:"routes_component",canonicalFilename:"s_xyl1qowpydi",hash:"xYL1qOwPyDI",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[134,194]},s_zrbrqoaqXSY:{origin:"components/router-head/router-head.tsx",displayName:"RouterHead_component",canonicalFilename:"s_zrbrqoaqxsy",hash:"zrbrqoaqXSY",ctxKind:"function",ctxName:"component$",captures:!1,parent:null,loc:[244,1171]},s_JKHgMZ4xLZQ:{origin:"routes/layout.tsx",displayName:"layout_component_useStyles",canonicalFilename:"s_jkhgmz4xlzq",hash:"JKHgMZ4xLZQ",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_VkLNXphUh5s",loc:[974,980]},s_RPDJAz33WLA:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_useStyles",canonicalFilename:"s_rpdjaz33wla",hash:"RPDJAz33WLA",ctxKind:"function",ctxName:"useStyles$",captures:!1,parent:"s_TxCFOy819ag",loc:[21447,21481]},s_HU55RV7VfPc:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_useStylesScoped",canonicalFilename:"s_hu55rv7vfpc",hash:"HU55RV7VfPc",ctxKind:"function",ctxName:"useStylesScoped$",captures:!1,parent:"s_PxZ05oEiFy8",loc:[270,276]},s_A5bZC7WO00A:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"routeActionQrl_action_submit",canonicalFilename:"s_a5bzc7wo00a",hash:"A5bZC7WO00A",ctxKind:"function",ctxName:"submit",captures:!0,parent:null,loc:[38597,40231]},s_DyVc0YBIqQU:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"spa_init",canonicalFilename:"s_dyvc0ybiqqu",hash:"DyVc0YBIqQU",ctxKind:"function",ctxName:"spaInit",captures:!1,parent:null,loc:[1391,6872]},s_wOIPfiQ04l4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"serverQrl_stuff",canonicalFilename:"s_woipfiq04l4",hash:"wOIPfiQ04l4",ctxKind:"function",ctxName:"stuff",captures:!0,parent:null,loc:[43245,45069]},s_BUbtvTyvVRE:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityMockProvider_component_goto",canonicalFilename:"s_bubtvtyvvre",hash:"BUbtvTyvVRE",ctxKind:"function",ctxName:"goto",captures:!1,parent:"s_WmYC5H00wtI",loc:[34597,34658]},s_JtGc0nS5Nuo:{origin:"routes/demo/flower/index.tsx",displayName:"flower_component_div_input_onInput",canonicalFilename:"s_jtgc0ns5nuo",hash:"JtGc0nS5Nuo",ctxKind:"eventHandler",ctxName:"onInput$",captures:!0,parent:"s_PxZ05oEiFy8",loc:[938,1029]},s_eBQ0vFsFKsk:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_onPrefetch_event",canonicalFilename:"s_ebq0vfsfksk",hash:"eBQ0vFsFKsk",ctxKind:"function",ctxName:"event$",captures:!1,parent:"s_8gdLBszqbaM",loc:[36105,36168]},s_fX0bDjeJa0E:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"QwikCityProvider_component_goto",canonicalFilename:"s_fx0bdjeja0e",hash:"fX0bDjeJa0E",ctxKind:"function",ctxName:"goto",captures:!0,parent:"s_TxCFOy819ag",loc:[22731,24050]},s_i1Cv0pYJNR0:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"Link_component_handleClick_event",canonicalFilename:"s_i1cv0pyjnr0",hash:"i1Cv0pYJNR0",ctxKind:"function",ctxName:"event$",captures:!0,parent:"s_8gdLBszqbaM",loc:[36286,36801]},s_p9MSze0ojs4:{origin:"../node_modules/@builder.io/qwik-city/index.qwik.mjs",displayName:"GetForm_component_form_onSubmit",canonicalFilename:"s_p9msze0ojs4",hash:"p9MSze0ojs4",ctxKind:"function",ctxName:"_jsxS",captures:!0,parent:"s_Nk9PlpjQm9Y",loc:[47490,48187]}},mapping:{s_02wMImzEAbk:"q-932882b3.js",s_LQPhZ0qOjrk:"q-4f743997.js",s_3sccYCDd1Z0:"q-8b9d659c.js",s_8gdLBszqbaM:"q-1d1aef31.js",s_9IgPNJsxq0g:"q-dceae2b6.js",s_GB0PKgW2dDU:"q-f2c4b98d.js",s_J4V2qsF7Yxo:"q-45eed9e5.js",s_M0MhZOWBKK8:"q-6e2288ad.js",s_Nk9PlpjQm9Y:"q-59742fe3.js",s_PxZ05oEiFy8:"q-4f743997.js",s_TxCFOy819ag:"q-932882b3.js",s_VkLNXphUh5s:"q-2f4eda80.js",s_WmYC5H00wtI:"q-d425eb0b.js",s_e0ssiDXoeAM:"q-b80fadea.js",s_mBt9fIl89mc:"q-eefc3de1.js",s_u0bwM0i5dA8:"q-ad6e4e4e.js",s_xYL1qOwPyDI:"q-bdd5f6e2.js",s_zrbrqoaqXSY:"q-320cb90b.js",s_JKHgMZ4xLZQ:"q-2f4eda80.js",s_RPDJAz33WLA:"q-932882b3.js",s_HU55RV7VfPc:"q-4f743997.js",s_A5bZC7WO00A:"q-a3b49657.js",s_DyVc0YBIqQU:"q-663033b0.js",s_wOIPfiQ04l4:"q-e4b1511e.js",s_BUbtvTyvVRE:"q-d425eb0b.js",s_JtGc0nS5Nuo:"q-4f743997.js",s_eBQ0vFsFKsk:"q-af6a04d0.js",s_fX0bDjeJa0E:"q-932882b3.js",s_i1Cv0pYJNR0:"q-1d1aef31.js",s_p9MSze0ojs4:"q-59742fe3.js"},bundles:{"q-188581b5.js":{size:8866,imports:["q-1f730497.js"],dynamicImports:["q-1d1aef31.js","q-59742fe3.js","q-663033b0.js","q-932882b3.js","q-a3b49657.js","q-b80fadea.js"],origins:["@qwik-city-sw-register","node_modules/@builder.io/qwik-city/index.qwik.mjs"]},"q-1d1aef31.js":{size:1144,imports:["q-188581b5.js","q-1f730497.js"],dynamicImports:["q-af6a04d0.js"],origins:["src/entry_Link.js","src/s_8gdlbszqbam.js","src/s_i1cv0pyjnr0.js"],symbols:["s_8gdLBszqbaM","s_i1Cv0pYJNR0"]},"q-1f730497.js":{size:49198,origins:["node_modules/@builder.io/qwik/core.min.mjs"]},"q-2f4eda80.js":{size:715,imports:["q-1f730497.js"],dynamicImports:["q-ad6e4e4e.js","q-eefc3de1.js"],origins:["src/components/starter/footer/footer.tsx","src/components/starter/header/header.tsx","src/entry_layout.js","src/routes/styles.css?used&inline","src/s_jkhgmz4xlzq.js","src/s_vklnxphuh5s.js"],symbols:["s_JKHgMZ4xLZQ","s_VkLNXphUh5s"]},"q-320cb90b.js":{size:982,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_RouterHead.js","src/s_zrbrqoaqxsy.js"],symbols:["s_zrbrqoaqXSY"]},"q-45eed9e5.js":{size:1202,imports:["q-188581b5.js","q-1f730497.js","q-e8fd82a7.js"],origins:["src/entry_todolist.js","src/routes/demo/todolist/todolist.module.css?used","src/s_j4v2qsf7yxo.js"],symbols:["s_J4V2qsF7Yxo"]},"q-471c42d8.js":{size:293,imports:["q-1f730497.js"],dynamicImports:["q-bdd5f6e2.js"],origins:["src/routes/index.tsx"]},"q-48058781.js":{size:125,imports:["q-1f730497.js"],dynamicImports:["q-8ea06850.js"],origins:["@qwik-city-entries"]},"q-4f743997.js":{size:2669,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_flower.js","src/routes/demo/flower/flower.css?used&inline","src/s_hu55rv7vfpc.js","src/s_jtgc0ns5nuo.js","src/s_lqphz0qojrk.js","src/s_pxz05oeify8.js"],symbols:["s_HU55RV7VfPc","s_JtGc0nS5Nuo","s_LQPhZ0qOjrk","s_PxZ05oEiFy8"]},"q-59742fe3.js":{size:1037,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_GetForm.js","src/s_nk9plpjqm9y.js","src/s_p9msze0ojs4.js"],symbols:["s_Nk9PlpjQm9Y","s_p9MSze0ojs4"]},"q-663033b0.js":{size:2286,origins:["src/entry_spaInit.js","src/s_dyvc0ybiqqu.js"],symbols:["s_DyVc0YBIqQU"]},"q-6e2288ad.js":{size:240,imports:["q-1f730497.js"],origins:["src/entry_contact.js","src/s_m0mhzowbkk8.js"],symbols:["s_M0MhZOWBKK8"]},"q-6ff0da97.js":{size:185,imports:["q-1f730497.js"],dynamicImports:["q-dceae2b6.js"],origins:["src/routes/about/index.tsx"]},"q-8b9d659c.js":{size:541,imports:["q-188581b5.js","q-1f730497.js"],dynamicImports:["q-320cb90b.js"],origins:["src/components/router-head/router-head.tsx","src/entry_root.js","src/s_3sccycdd1z0.js"],symbols:["s_3sccYCDd1Z0"]},"q-8ea06850.js":{size:2539,origins:["node_modules/@builder.io/qwik-city/service-worker.mjs","src/routes/service-worker.ts"]},"q-932882b3.js":{size:6150,imports:["q-188581b5.js","q-1f730497.js"],dynamicImports:["q-471c42d8.js","q-48058781.js","q-6ff0da97.js","q-95be03c6.js","q-a2e09349.js","q-ca0a9ce8.js","q-d71313e1.js","q-e8fd82a7.js"],origins:["@qwik-city-plan","src/entry_QwikCityProvider.js","src/s_02wmimzeabk.js","src/s_fx0bdjeja0e.js","src/s_rpdjaz33wla.js","src/s_txcfoy819ag.js"],symbols:["s_02wMImzEAbk","s_fX0bDjeJa0E","s_RPDJAz33WLA","s_TxCFOy819ag"]},"q-95be03c6.js":{size:180,imports:["q-1f730497.js"],dynamicImports:["q-f2c4b98d.js"],origins:["src/routes/programsInfo/index.tsx"]},"q-a2e09349.js":{size:241,imports:["q-1f730497.js"],dynamicImports:["q-4f743997.js"],origins:["src/routes/demo/flower/index.tsx"]},"q-a3b49657.js":{size:746,imports:["q-1f730497.js"],origins:["src/entry_routeActionQrl.js","src/s_a5bzc7wo00a.js"],symbols:["s_A5bZC7WO00A"]},"q-ad6e4e4e.js":{size:253,imports:["q-1f730497.js"],origins:["src/entry_footer.js","src/s_u0bwm0i5da8.js"],symbols:["s_u0bwM0i5dA8"]},"q-af6a04d0.js":{size:128,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/s_ebq0vfsfksk.js"],symbols:["s_eBQ0vFsFKsk"]},"q-b7fe8342.js":{size:207,imports:["q-1f730497.js"],dynamicImports:["q-8b9d659c.js"],origins:["src/global.css","src/root.tsx"]},"q-b80fadea.js":{size:467,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_RouterOutlet.js","src/s_e0ssidxoeam.js"],symbols:["s_e0ssiDXoeAM"]},"q-bdd5f6e2.js":{size:114,imports:["q-1f730497.js"],origins:["src/entry_routes.js","src/s_xyl1qowpydi.js"],symbols:["s_xYL1qOwPyDI"]},"q-ca0a9ce8.js":{size:180,imports:["q-1f730497.js"],dynamicImports:["q-6e2288ad.js"],origins:["src/routes/contact/index.tsx"]},"q-d425eb0b.js":{size:787,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_QwikCityMockProvider.js","src/s_bubtvtyvvre.js","src/s_wmyc5h00wti.js"],symbols:["s_BUbtvTyvVRE","s_WmYC5H00wtI"]},"q-d71313e1.js":{size:380,imports:["q-188581b5.js","q-1f730497.js"],dynamicImports:["q-2f4eda80.js"],origins:["src/routes/layout.tsx"]},"q-dceae2b6.js":{size:665,imports:["q-1f730497.js"],origins:["src/entry_about.js","src/s_9igpnjsxq0g.js"],symbols:["s_9IgPNJsxq0g"]},"q-e4b1511e.js":{size:889,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_serverQrl.js","src/s_woipfiq04l4.js"],symbols:["s_wOIPfiQ04l4"]},"q-e8fd82a7.js":{size:411,imports:["q-188581b5.js","q-1f730497.js"],dynamicImports:["q-45eed9e5.js"],origins:["src/routes/demo/todolist/index.tsx"]},"q-eefc3de1.js":{size:7710,imports:["q-188581b5.js","q-1f730497.js"],origins:["src/entry_header.js","src/media/logo.svg?jsx","src/s_mbt9fil89mc.js"],symbols:["s_mBt9fIl89mc"]},"q-f2c4b98d.js":{size:1275,imports:["q-1f730497.js"],origins:["src/entry_programsInfo.js","src/s_gb0pkgw2ddu.js"],symbols:["s_GB0PKgW2dDU"]}},injections:[{tag:"style",location:"head",attributes:{"data-src":"/build/q-a7684c07.css",dangerouslySetInnerHTML:`._list_1ofyy_1{display:flex;flex-direction:column;gap:20px;color:#fff}._list_1ofyy_1,._empty_1ofyy_9{min-height:250px}._list_1ofyy_1 li{list-style:none}._empty_1ofyy_9{color:#fff;display:block}._input_1ofyy_22{background:white;color:var(--qwik-light-blue);border:none;border-radius:8px;padding:15px 20px;margin-right:10px;font-size:.8rem}._hint_1ofyy_32{font-size:.8rem;color:#fff;margin-top:30px}@media screen and (min-width: 768px){._input_1ofyy_22{padding:23px 35px;margin-right:20px;font-size:1rem}}*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,"Apple Color Emoji","Segoe UI Emoji",Segoe UI Symbol,"Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.container{width:100%}@media (min-width: 640px){.container{max-width:640px}}@media (min-width: 768px){.container{max-width:768px}}@media (min-width: 1024px){.container{max-width:1024px}}@media (min-width: 1280px){.container{max-width:1280px}}@media (min-width: 1536px){.container{max-width:1536px}}.inline{display:inline}.flex{display:flex}.h-16{height:4rem}.min-h-screen{min-height:100vh}.w-16{width:4rem}.max-w-\\[400px\\]{max-width:400px}.flex-col{flex-direction:column}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-10{gap:2.5rem}.gap-3{gap:.75rem}.gap-5{gap:1.25rem}.border-2{border-width:2px}.border-red-800{--tw-border-opacity: 1;border-color:rgb(153 27 27 / var(--tw-border-opacity))}.bg-black{--tw-bg-opacity: 1;background-color:rgb(0 0 0 / var(--tw-bg-opacity))}.p-10{padding:2.5rem}.p-5{padding:1.25rem}.px-10{padding-left:2.5rem;padding-right:2.5rem}.py-12{padding-top:3rem;padding-bottom:3rem}.text-center{text-align:center}.text-2xl{font-size:1.5rem;line-height:2rem}.text-4xl{font-size:2.25rem;line-height:2.5rem}.text-6xl{font-size:3.75rem;line-height:1}.text-xl{font-size:1.25rem;line-height:1.75rem}.font-semibold{font-weight:600}.text-white{--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity))}.duration-300{transition-duration:.3s}:root{--theme-green: rgb(85, 146, 85);--theme-yellow: rgb(180, 180, 119)}body{font-family:Roboto,sans-serif;margin:0;background-color:#eaf4fd;color:#000;display:flex;flex-direction:column;min-height:100vh}h1,h2,h3,h4,h5,h6{font-family:inherit;color:#000;font-weight:700;margin:0;font-size:28px}.hover\\:text-red-700:hover{--tw-text-opacity: 1;color:rgb(185 28 28 / var(--tw-text-opacity))}
`}}],version:"1",options:{target:"client",buildMode:"production",entryStrategy:{type:"smart"}},platform:{qwik:"1.2.10",vite:"",rollup:"3.29.0",env:"node",os:"win32",node:"18.17.0"}},$e=()=>{const e=me(),t=ue();return g(S,{children:[y("title",null,null,e.title,1,null),y("link",null,{href:pe(n=>n.url.href,[t],"p0.url.href"),rel:"canonical"},null,3,null),y("meta",null,{content:"width=device-width, initial-scale=1.0",name:"viewport"},null,3,null),y("link",null,{href:"/favicon.svg",rel:"icon",type:"image/svg+xml"},null,3,null),y("link",null,{href:"https://fonts.googleapis.com",rel:"preconnect"},null,3,null),y("link",null,{href:"https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap",rel:"stylesheet"},null,3,null),e.meta.map(n=>v("meta",{...n},null,0,n.key)),e.links.map(n=>v("link",{...n},null,0,n.key)),e.styles.map(n=>v("style",{...n.props,dangerouslySetInnerHTML:Z(n,"style")},null,0,n.key)),e.scripts.map(n=>v("script",{...n.props,dangerouslySetInnerHTML:Z(n,"script")},null,0,n.key))]},1,"OA_0")},Qe=V(W($e,"s_zrbrqoaqXSY"));const Ue=()=>g(ye,{children:[y("head",null,null,[y("meta",null,{charSet:"utf-8"},null,3,null),y("link",null,{href:"/manifest.json",rel:"manifest"},null,3,null),g(Qe,null,3,"35_0"),g(fe,null,3,"35_1")],1,null),y("body",null,{lang:"en"},g(be,null,3,"35_2"),1,null)]},1,"35_3"),Be=V(W(Ue,"s_3sccYCDd1Z0"));function He(e){return Te(g(Be,null,3,"pY_0"),{manifest:Me,...e,containerAttributes:{lang:"en-us",...e.containerAttributes}})}export{Me as m,He as r,Ze as s};
