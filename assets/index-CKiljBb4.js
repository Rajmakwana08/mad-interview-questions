(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))h(z);new MutationObserver(z=>{for(const J of z)if(J.type==="childList")for(const pe of J.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&h(pe)}).observe(document,{childList:!0,subtree:!0});function P(z){const J={};return z.integrity&&(J.integrity=z.integrity),z.referrerPolicy&&(J.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?J.credentials="include":z.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function h(z){if(z.ep)return;z.ep=!0;const J=P(z);fetch(z.href,J)}})();var iu={exports:{}},Ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Kp(){if(mf)return Ai;mf=1;var C=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function P(h,z,J){var pe=null;if(J!==void 0&&(pe=""+J),z.key!==void 0&&(pe=""+z.key),"key"in z){J={};for(var ze in z)ze!=="key"&&(J[ze]=z[ze])}else J=z;return z=J.ref,{$$typeof:C,type:h,key:pe,ref:z!==void 0?z:null,props:J}}return Ai.Fragment=de,Ai.jsx=P,Ai.jsxs=P,Ai}var pf;function Jp(){return pf||(pf=1,iu.exports=Kp()),iu.exports}var qe=Jp(),lu={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function Ip(){if(hf)return N;hf=1;var C=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),ze=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),F=Symbol.for("react.lazy"),L=Symbol.for("react.activity"),ce=Symbol.iterator;function Je(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Le=Object.assign,Rt={};function Ie(r,b,T){this.props=r,this.context=b,this.refs=Rt,this.updater=T||Be}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(r,b){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,b,"setState")},Ie.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Jt(){}Jt.prototype=Ie.prototype;function xe(r,b,T){this.props=r,this.context=b,this.refs=Rt,this.updater=T||Be}var ot=xe.prototype=new Jt;ot.constructor=xe,Le(ot,Ie.prototype),ot.isPureReactComponent=!0;var bt=Array.isArray;function He(){}var X={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function Et(r,b,T){var w=T.ref;return{$$typeof:C,type:r,key:b,ref:w!==void 0?w:null,props:T}}function Ga(r,b){return Et(r.type,b,r.props)}function Mt(r){return typeof r=="object"&&r!==null&&r.$$typeof===C}function Ge(r){var b={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(T){return b[T]})}var Sa=/\/+/g;function Ot(r,b){return typeof r=="object"&&r!==null&&r.key!=null?Ge(""+r.key):b.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(He,He):(r.status="pending",r.then(function(b){r.status==="pending"&&(r.status="fulfilled",r.value=b)},function(b){r.status==="pending"&&(r.status="rejected",r.reason=b)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function g(r,b,T,w,q){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var W=!1;if(r===null)W=!0;else switch(V){case"bigint":case"string":case"number":W=!0;break;case"object":switch(r.$$typeof){case C:case de:W=!0;break;case F:return W=r._init,g(W(r._payload),b,T,w,q)}}if(W)return q=q(r),W=w===""?"."+Ot(r,0):w,bt(q)?(T="",W!=null&&(T=W.replace(Sa,"$&/")+"/"),g(q,b,T,"",function(Cn){return Cn})):q!=null&&(Mt(q)&&(q=Ga(q,T+(q.key==null||r&&r.key===q.key?"":(""+q.key).replace(Sa,"$&/")+"/")+W)),b.push(q)),1;W=0;var _e=w===""?".":w+":";if(bt(r))for(var he=0;he<r.length;he++)w=r[he],V=_e+Ot(w,he),W+=g(w,b,T,V,q);else if(he=Je(r),typeof he=="function")for(r=he.call(r),he=0;!(w=r.next()).done;)w=w.value,V=_e+Ot(w,he++),W+=g(w,b,T,V,q);else if(V==="object"){if(typeof r.then=="function")return g(yt(r),b,T,w,q);throw b=String(r),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return W}function M(r,b,T){if(r==null)return r;var w=[],q=0;return g(r,w,"","",function(V){return b.call(T,V,q++)}),w}function _(r){if(r._status===-1){var b=r._result;b=b(),b.then(function(T){(r._status===0||r._status===-1)&&(r._status=1,r._result=T)},function(T){(r._status===0||r._status===-1)&&(r._status=2,r._result=T)}),r._status===-1&&(r._status=0,r._result=b)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},le={map:M,forEach:function(r,b,T){M(r,function(){b.apply(this,arguments)},T)},count:function(r){var b=0;return M(r,function(){b++}),b},toArray:function(r){return M(r,function(b){return b})||[]},only:function(r){if(!Mt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return N.Activity=L,N.Children=le,N.Component=Ie,N.Fragment=P,N.Profiler=z,N.PureComponent=xe,N.StrictMode=h,N.Suspense=x,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,N.__COMPILER_RUNTIME={__proto__:null,c:function(r){return X.H.useMemoCache(r)}},N.cache=function(r){return function(){return r.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(r,b,T){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var w=Le({},r.props),q=r.key;if(b!=null)for(V in b.key!==void 0&&(q=""+b.key),b)!Ve.call(b,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&b.ref===void 0||(w[V]=b[V]);var V=arguments.length-2;if(V===1)w.children=T;else if(1<V){for(var W=Array(V),_e=0;_e<V;_e++)W[_e]=arguments[_e+2];w.children=W}return Et(r.type,q,w)},N.createContext=function(r){return r={$$typeof:pe,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:J,_context:r},r},N.createElement=function(r,b,T){var w,q={},V=null;if(b!=null)for(w in b.key!==void 0&&(V=""+b.key),b)Ve.call(b,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(q[w]=b[w]);var W=arguments.length-2;if(W===1)q.children=T;else if(1<W){for(var _e=Array(W),he=0;he<W;he++)_e[he]=arguments[he+2];q.children=_e}if(r&&r.defaultProps)for(w in W=r.defaultProps,W)q[w]===void 0&&(q[w]=W[w]);return Et(r,V,q)},N.createRef=function(){return{current:null}},N.forwardRef=function(r){return{$$typeof:ze,render:r}},N.isValidElement=Mt,N.lazy=function(r){return{$$typeof:F,_payload:{_status:-1,_result:r},_init:_}},N.memo=function(r,b){return{$$typeof:E,type:r,compare:b===void 0?null:b}},N.startTransition=function(r){var b=X.T,T={};X.T=T;try{var w=r(),q=X.S;q!==null&&q(T,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(He,te)}catch(V){te(V)}finally{b!==null&&T.types!==null&&(b.types=T.types),X.T=b}},N.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},N.use=function(r){return X.H.use(r)},N.useActionState=function(r,b,T){return X.H.useActionState(r,b,T)},N.useCallback=function(r,b){return X.H.useCallback(r,b)},N.useContext=function(r){return X.H.useContext(r)},N.useDebugValue=function(){},N.useDeferredValue=function(r,b){return X.H.useDeferredValue(r,b)},N.useEffect=function(r,b){return X.H.useEffect(r,b)},N.useEffectEvent=function(r){return X.H.useEffectEvent(r)},N.useId=function(){return X.H.useId()},N.useImperativeHandle=function(r,b,T){return X.H.useImperativeHandle(r,b,T)},N.useInsertionEffect=function(r,b){return X.H.useInsertionEffect(r,b)},N.useLayoutEffect=function(r,b){return X.H.useLayoutEffect(r,b)},N.useMemo=function(r,b){return X.H.useMemo(r,b)},N.useOptimistic=function(r,b){return X.H.useOptimistic(r,b)},N.useReducer=function(r,b,T){return X.H.useReducer(r,b,T)},N.useRef=function(r){return X.H.useRef(r)},N.useState=function(r){return X.H.useState(r)},N.useSyncExternalStore=function(r,b,T){return X.H.useSyncExternalStore(r,b,T)},N.useTransition=function(){return X.H.useTransition()},N.version="19.2.7",N}var vf;function ru(){return vf||(vf=1,lu.exports=Ip()),lu.exports}var Mf=ru(),ou={exports:{}},Si={},su={exports:{}},uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Pp(){return yf||(yf=1,(function(C){function de(g,M){var _=g.length;g.push(M);e:for(;0<_;){var te=_-1>>>1,le=g[te];if(0<z(le,M))g[te]=M,g[_]=le,_=te;else break e}}function P(g){return g.length===0?null:g[0]}function h(g){if(g.length===0)return null;var M=g[0],_=g.pop();if(_!==M){g[0]=_;e:for(var te=0,le=g.length,r=le>>>1;te<r;){var b=2*(te+1)-1,T=g[b],w=b+1,q=g[w];if(0>z(T,_))w<le&&0>z(q,T)?(g[te]=q,g[w]=_,te=w):(g[te]=T,g[b]=_,te=b);else if(w<le&&0>z(q,_))g[te]=q,g[w]=_,te=w;else break e}}return M}function z(g,M){var _=g.sortIndex-M.sortIndex;return _!==0?_:g.id-M.id}if(C.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;C.unstable_now=function(){return J.now()}}else{var pe=Date,ze=pe.now();C.unstable_now=function(){return pe.now()-ze}}var x=[],E=[],F=1,L=null,ce=3,Je=!1,Be=!1,Le=!1,Rt=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Jt=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function ot(g){for(var M=P(E);M!==null;){if(M.callback===null)h(E);else if(M.startTime<=g)h(E),M.sortIndex=M.expirationTime,de(x,M);else break;M=P(E)}}function bt(g){if(Le=!1,ot(g),!Be)if(P(x)!==null)Be=!0,He||(He=!0,Ge());else{var M=P(E);M!==null&&yt(bt,M.startTime-g)}}var He=!1,X=-1,Ve=5,Et=-1;function Ga(){return Rt?!0:!(C.unstable_now()-Et<Ve)}function Mt(){if(Rt=!1,He){var g=C.unstable_now();Et=g;var M=!0;try{e:{Be=!1,Le&&(Le=!1,Jt(X),X=-1),Je=!0;var _=ce;try{t:{for(ot(g),L=P(x);L!==null&&!(L.expirationTime>g&&Ga());){var te=L.callback;if(typeof te=="function"){L.callback=null,ce=L.priorityLevel;var le=te(L.expirationTime<=g);if(g=C.unstable_now(),typeof le=="function"){L.callback=le,ot(g),M=!0;break t}L===P(x)&&h(x),ot(g)}else h(x);L=P(x)}if(L!==null)M=!0;else{var r=P(E);r!==null&&yt(bt,r.startTime-g),M=!1}}break e}finally{L=null,ce=_,Je=!1}M=void 0}}finally{M?Ge():He=!1}}}var Ge;if(typeof xe=="function")Ge=function(){xe(Mt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,Ot=Sa.port2;Sa.port1.onmessage=Mt,Ge=function(){Ot.postMessage(null)}}else Ge=function(){Ie(Mt,0)};function yt(g,M){X=Ie(function(){g(C.unstable_now())},M)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(g){g.callback=null},C.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<g?Math.floor(1e3/g):5},C.unstable_getCurrentPriorityLevel=function(){return ce},C.unstable_next=function(g){switch(ce){case 1:case 2:case 3:var M=3;break;default:M=ce}var _=ce;ce=M;try{return g()}finally{ce=_}},C.unstable_requestPaint=function(){Rt=!0},C.unstable_runWithPriority=function(g,M){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var _=ce;ce=g;try{return M()}finally{ce=_}},C.unstable_scheduleCallback=function(g,M,_){var te=C.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?te+_:te):_=te,g){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=_+le,g={id:F++,callback:M,priorityLevel:g,startTime:_,expirationTime:le,sortIndex:-1},_>te?(g.sortIndex=_,de(E,g),P(x)===null&&g===P(E)&&(Le?(Jt(X),X=-1):Le=!0,yt(bt,_-te))):(g.sortIndex=le,de(x,g),Be||Je||(Be=!0,He||(He=!0,Ge()))),g},C.unstable_shouldYield=Ga,C.unstable_wrapCallback=function(g){var M=ce;return function(){var _=ce;ce=M;try{return g.apply(this,arguments)}finally{ce=_}}}})(uu)),uu}var gf;function Fp(){return gf||(gf=1,su.exports=Pp()),su.exports}var cu={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function Wp(){if(Af)return Ue;Af=1;var C=ru();function de(x){var E="https://react.dev/errors/"+x;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var F=2;F<arguments.length;F++)E+="&args[]="+encodeURIComponent(arguments[F])}return"Minified React error #"+x+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function P(){}var h={d:{f:P,r:function(){throw Error(de(522))},D:P,C:P,L:P,m:P,X:P,S:P,M:P},p:0,findDOMNode:null},z=Symbol.for("react.portal");function J(x,E,F){var L=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:L==null?null:""+L,children:x,containerInfo:E,implementation:F}}var pe=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function ze(x,E){if(x==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Ue.createPortal=function(x,E){var F=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(de(299));return J(x,E,null,F)},Ue.flushSync=function(x){var E=pe.T,F=h.p;try{if(pe.T=null,h.p=2,x)return x()}finally{pe.T=E,h.p=F,h.d.f()}},Ue.preconnect=function(x,E){typeof x=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,h.d.C(x,E))},Ue.prefetchDNS=function(x){typeof x=="string"&&h.d.D(x)},Ue.preinit=function(x,E){if(typeof x=="string"&&E&&typeof E.as=="string"){var F=E.as,L=ze(F,E.crossOrigin),ce=typeof E.integrity=="string"?E.integrity:void 0,Je=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;F==="style"?h.d.S(x,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:L,integrity:ce,fetchPriority:Je}):F==="script"&&h.d.X(x,{crossOrigin:L,integrity:ce,fetchPriority:Je,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},Ue.preinitModule=function(x,E){if(typeof x=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var F=ze(E.as,E.crossOrigin);h.d.M(x,{crossOrigin:F,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&h.d.M(x)},Ue.preload=function(x,E){if(typeof x=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var F=E.as,L=ze(F,E.crossOrigin);h.d.L(x,F,{crossOrigin:L,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},Ue.preloadModule=function(x,E){if(typeof x=="string")if(E){var F=ze(E.as,E.crossOrigin);h.d.m(x,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:F,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else h.d.m(x)},Ue.requestFormReset=function(x){h.d.r(x)},Ue.unstable_batchedUpdates=function(x,E){return x(E)},Ue.useFormState=function(x,E,F){return pe.H.useFormState(x,E,F)},Ue.useFormStatus=function(){return pe.H.useHostTransitionStatus()},Ue.version="19.2.7",Ue}var Sf;function $p(){if(Sf)return cu.exports;Sf=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(de){console.error(de)}}return C(),cu.exports=Wp(),cu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function eh(){if(bf)return Si;bf=1;var C=Fp(),de=ru(),P=$p();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function pe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ze(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(J(e)!==e)throw Error(h(188))}function E(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return x(i),e;if(l===n)return x(i),t;l=l.sibling}throw Error(h(188))}if(a.return!==n.return)a=i,n=l;else{for(var o=!1,s=i.child;s;){if(s===a){o=!0,a=i,n=l;break}if(s===n){o=!0,n=i,a=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===a){o=!0,a=l,n=i;break}if(s===n){o=!0,n=l,a=i;break}s=s.sibling}if(!o)throw Error(h(189))}}if(a.alternate!==n)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function F(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=F(e),t!==null)return t;e=e.sibling}return null}var L=Object.assign,ce=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),Be=Symbol.for("react.portal"),Le=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Jt=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Le:return"Fragment";case Ie:return"Profiler";case Rt:return"StrictMode";case bt:return"Suspense";case He:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Be:return"Portal";case xe:return e.displayName||"Context";case Jt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:Ot(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Ot(e(t))}catch{}}return null}var yt=Array.isArray,g=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},te=[],le=-1;function r(e){return{current:e}}function b(e){0>le||(e.current=te[le],te[le]=null,le--)}function T(e,t){le++,te[le]=e.current,e.current=t}var w=r(null),q=r(null),V=r(null),W=r(null);function _e(e,t){switch(T(V,t),T(q,e),T(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nd(t),e=qd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(w),T(w,e)}function he(){b(w),b(q),b(V)}function Cn(e){e.memoizedState!==null&&T(W,e);var t=w.current,a=qd(t,e.type);t!==a&&(T(q,e),T(w,a))}function bi(e){q.current===e&&(b(w),b(q)),W.current===e&&(b(W),hi._currentValue=_)}var Vl,du;function ba(e){if(Vl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||"",du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vl+e+du}var Gl=!1;function Yl(e,t){if(!e||Gl)return"";Gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(v){var p=v}Reflect.construct(e,[],S)}else{try{S.call()}catch(v){p=v}e.call(S.prototype)}}else{try{throw Error()}catch(v){p=v}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var u=o.split(`
`),m=s.split(`
`);for(i=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(n===u.length||i===m.length)for(n=u.length-1,i=m.length-1;1<=n&&0<=i&&u[n]!==m[i];)i--;for(;1<=n&&0<=i;n--,i--)if(u[n]!==m[i]){if(n!==1||i!==1)do if(n--,i--,0>i||u[n]!==m[i]){var y=`
`+u[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=i);break}}}finally{Gl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function Tf(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Yl(e.type,!1);case 11:return Yl(e.type.render,!1);case 1:return Yl(e.type,!0);case 31:return ba("Activity");default:return""}}function fu(e){try{var t="",a=null;do t+=Tf(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var Ql=Object.prototype.hasOwnProperty,jl=C.unstable_scheduleCallback,Xl=C.unstable_cancelCallback,Df=C.unstable_shouldYield,Cf=C.unstable_requestPaint,Pe=C.unstable_now,wf=C.unstable_getCurrentPriorityLevel,mu=C.unstable_ImmediatePriority,pu=C.unstable_UserBlockingPriority,Ei=C.unstable_NormalPriority,Rf=C.unstable_LowPriority,hu=C.unstable_IdlePriority,Of=C.log,xf=C.unstable_setDisableYieldValue,wn=null,Fe=null;function It(e){if(typeof Of=="function"&&xf(e),Fe&&typeof Fe.setStrictMode=="function")try{Fe.setStrictMode(wn,e)}catch{}}var We=Math.clz32?Math.clz32:Lf,Uf=Math.log,zf=Math.LN2;function Lf(e){return e>>>=0,e===0?32:31-(Uf(e)/zf|0)|0}var Mi=256,Ti=262144,Di=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=n&134217727;return s!==0?(n=s&~l,n!==0?i=Ea(n):(o&=s,o!==0?i=Ea(o):a||(a=s&~e,a!==0&&(i=Ea(a))))):(s=n&~l,s!==0?i=Ea(s):o!==0?i=Ea(o):a||(a=n&~e,a!==0&&(i=Ea(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function Rn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _f(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(){var e=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),e}function kl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function On(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nf(e,t,a,n,i,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(a=o&~a;0<a;){var y=31-We(a),S=1<<y;s[y]=0,u[y]=-1;var p=m[y];if(p!==null)for(m[y]=null,y=0;y<p.length;y++){var v=p[y];v!==null&&(v.lane&=-536870913)}a&=~S}n!==0&&yu(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function yu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-We(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function gu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-We(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Au(e,t){var a=t&-t;return a=(a&42)!==0?1:Zl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Su(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:of(e.type))}function bu(e,t){var a=M.p;try{return M.p=e,t()}finally{M.p=a}}var Pt=Math.random().toString(36).slice(2),De="__reactFiber$"+Pt,Ye="__reactProps$"+Pt,Ya="__reactContainer$"+Pt,Jl="__reactEvents$"+Pt,qf="__reactListeners$"+Pt,Bf="__reactHandles$"+Pt,Eu="__reactResources$"+Pt,xn="__reactMarker$"+Pt;function Il(e){delete e[De],delete e[Ye],delete e[Jl],delete e[qf],delete e[Bf]}function Qa(e){var t=e[De];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[De]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=jd(e);e!==null;){if(a=e[De])return a;e=jd(e)}return t}e=a,a=e.parentNode}return null}function ja(e){if(e=e[De]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Un(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Xa(e){var t=e[Eu];return t||(t=e[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Me(e){e[xn]=!0}var Mu=new Set,Tu={};function Ma(e,t){ka(e,t),ka(e+"Capture",t)}function ka(e,t){for(Tu[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var Hf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Cu={};function Vf(e){return Ql.call(Cu,e)?!0:Ql.call(Du,e)?!1:Hf.test(e)?Cu[e]=!0:(Du[e]=!0,!1)}function wi(e,t,a){if(Vf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function xt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pl(e){if(!e._valueTracker){var t=wu(e)?"checked":"value";e._valueTracker=Gf(e,t,""+e[t])}}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=wu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yf=/[\n"\\]/g;function ut(e){return e.replace(Yf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Fl(e,t,a,n,i,l,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Wl(e,o,st(t)):a!=null?Wl(e,o,st(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+st(s):e.removeAttribute("name")}function Ou(e,t,a,n,i,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Pl(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=s?e.checked:!!n,e.defaultChecked=!!n,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Pl(e)}function Wl(e,t,a){t==="number"&&Oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xu(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function Uu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(h(92));if(yt(n)){if(1<n.length)throw Error(h(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Pl(e)}function Ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Qf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function zu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||Qf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function Lu(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&zu(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&zu(e,l,t[l])}function $l(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var jf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(e){return Xf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var eo=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Ia=null;function _u(e){var t=ja(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(Fl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ye]||null;if(!i)throw Error(h(90));Fl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ru(n)}break e;case"textarea":xu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var ao=!1;function Nu(e,t,a){if(ao)return e(t,a);ao=!0;try{var n=e(t);return n}finally{if(ao=!1,(Ja!==null||Ia!==null)&&(yl(),Ja&&(t=Ja,e=Ia,Ia=Ja=null,_u(t),e)))for(t=0;t<e.length;t++)_u(e[t])}}function zn(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ye]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),no=!1;if(zt)try{var Ln={};Object.defineProperty(Ln,"passive",{get:function(){no=!0}}),window.addEventListener("test",Ln,Ln),window.removeEventListener("test",Ln,Ln)}catch{no=!1}var Ft=null,io=null,Ui=null;function qu(){if(Ui)return Ui;var e,t=io,a=t.length,n,i="value"in Ft?Ft.value:Ft.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var o=a-e;for(n=1;n<=o&&t[a-n]===i[l-n];n++);return Ui=i.slice(e,1<n?1-n:void 0)}function zi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Li(){return!0}function Bu(){return!1}function Qe(e){function t(a,n,i,l,o){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Li:Bu,this.isPropagationStopped=Bu,this}return L(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=Li)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=Li)},persist:function(){},isPersistent:Li}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_i=Qe(Ta),_n=L({},Ta,{view:0,detail:0}),kf=Qe(_n),lo,oo,Nn,Ni=L({},_n,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:uo,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(lo=e.screenX-Nn.screenX,oo=e.screenY-Nn.screenY):oo=lo=0,Nn=e),lo)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),Hu=Qe(Ni),Zf=L({},Ni,{dataTransfer:0}),Kf=Qe(Zf),Jf=L({},_n,{relatedTarget:0}),so=Qe(Jf),If=L({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Qe(If),Ff=L({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Wf=Qe(Ff),$f=L({},Ta,{data:0}),Vu=Qe($f),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function uo(){return nm}var im=L({},_n,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=zi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:uo,charCode:function(e){return e.type==="keypress"?zi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?zi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=Qe(im),om=L({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=Qe(om),sm=L({},_n,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:uo}),um=Qe(sm),cm=L({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=Qe(cm),dm=L({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=Qe(dm),mm=L({},Ta,{newState:0,oldState:0}),pm=Qe(mm),hm=[9,13,27,32],co=zt&&"CompositionEvent"in window,qn=null;zt&&"documentMode"in document&&(qn=document.documentMode);var vm=zt&&"TextEvent"in window&&!qn,Yu=zt&&(!co||qn&&8<qn&&11>=qn),Qu=" ",ju=!1;function Xu(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ku(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function ym(e,t){switch(e){case"compositionend":return ku(t);case"keypress":return t.which!==32?null:(ju=!0,Qu);case"textInput":return e=t.data,e===Qu&&ju?null:e;default:return null}}function gm(e,t){if(Pa)return e==="compositionend"||!co&&Xu(e,t)?(e=qu(),Ui=io=Ft=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function Ku(e,t,a,n){Ja?Ia?Ia.push(n):Ia=[n]:Ja=n,t=Tl(t,"onChange"),0<t.length&&(a=new _i("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Bn=null,Hn=null;function Sm(e){Od(e,0)}function qi(e){var t=Un(e);if(Ru(t))return e}function Ju(e,t){if(e==="change")return t}var Iu=!1;if(zt){var ro;if(zt){var fo="oninput"in document;if(!fo){var Pu=document.createElement("div");Pu.setAttribute("oninput","return;"),fo=typeof Pu.oninput=="function"}ro=fo}else ro=!1;Iu=ro&&(!document.documentMode||9<document.documentMode)}function Fu(){Bn&&(Bn.detachEvent("onpropertychange",Wu),Hn=Bn=null)}function Wu(e){if(e.propertyName==="value"&&qi(Hn)){var t=[];Ku(t,Hn,e,to(e)),Nu(Sm,t)}}function bm(e,t,a){e==="focusin"?(Fu(),Bn=t,Hn=a,Bn.attachEvent("onpropertychange",Wu)):e==="focusout"&&Fu()}function Em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Hn)}function Mm(e,t){if(e==="click")return qi(t)}function Tm(e,t){if(e==="input"||e==="change")return qi(t)}function Dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Dm;function Vn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!Ql.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=$u(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$u(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Oi(e.document)}return t}function mo(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cm=zt&&"documentMode"in document&&11>=document.documentMode,Fa=null,po=null,Gn=null,ho=!1;function nc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ho||Fa==null||Fa!==Oi(n)||(n=Fa,"selectionStart"in n&&mo(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Gn&&Vn(Gn,n)||(Gn=n,n=Tl(po,"onSelect"),0<n.length&&(t=new _i("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Fa)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Wa={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},vo={},ic={};zt&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete Wa.animationend.animation,delete Wa.animationiteration.animation,delete Wa.animationstart.animation),"TransitionEvent"in window||delete Wa.transitionend.transition);function Ca(e){if(vo[e])return vo[e];if(!Wa[e])return e;var t=Wa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ic)return vo[e]=t[a];return e}var lc=Ca("animationend"),oc=Ca("animationiteration"),sc=Ca("animationstart"),wm=Ca("transitionrun"),Rm=Ca("transitionstart"),Om=Ca("transitioncancel"),uc=Ca("transitionend"),cc=new Map,yo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");yo.push("scrollEnd");function gt(e,t){cc.set(e,t),Ma(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],$a=0,go=0;function Hi(){for(var e=$a,t=go=$a=0;t<e;){var a=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];ct[t++]=null;var l=ct[t];if(ct[t++]=null,n!==null&&i!==null){var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}l!==0&&rc(a,i,l)}}function Vi(e,t,a,n){ct[$a++]=e,ct[$a++]=t,ct[$a++]=a,ct[$a++]=n,go|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function Ao(e,t,a,n){return Vi(e,t,a,n),Gi(e)}function wa(e,t){return Vi(e,null,null,t),Gi(e)}function rc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-We(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Gi(e){if(50<ui)throw ui=0,Rs=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function xm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new xm(e,t,a,n)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Lt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,a,n,i,l){var o=0;if(n=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=Np(e,a,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,i),e.elementType=Et,e.lanes=l,e;case Le:return Ra(a.children,i,l,t);case Rt:o=8,i|=24;break;case Ie:return e=et(12,a,t,i|2),e.elementType=Ie,e.lanes=l,e;case bt:return e=et(13,a,t,i),e.elementType=bt,e.lanes=l,e;case He:return e=et(19,a,t,i),e.elementType=He,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:o=10;break e;case Jt:o=9;break e;case ot:o=11;break e;case X:o=14;break e;case Ve:o=16,n=null;break e}o=29,a=Error(h(130,e===null?"null":typeof e,"")),n=null}return t=et(o,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Ra(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function bo(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Eo(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=mc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fu(t)},mc.set(e,t),t)}return{value:e,source:t,stack:fu(t)}}var tn=[],an=0,Qi=null,Yn=0,dt=[],ft=0,Wt=null,Tt=1,Dt="";function _t(e,t){tn[an++]=Yn,tn[an++]=Qi,Qi=e,Yn=t}function pc(e,t,a){dt[ft++]=Tt,dt[ft++]=Dt,dt[ft++]=Wt,Wt=e;var n=Tt;e=Dt;var i=32-We(n)-1;n&=~(1<<i),a+=1;var l=32-We(t)+i;if(30<l){var o=i-i%5;l=(n&(1<<o)-1).toString(32),n>>=o,i-=o,Tt=1<<32-We(t)+i|a<<i|n,Dt=l+e}else Tt=1<<l|a<<i|n,Dt=e}function Mo(e){e.return!==null&&(_t(e,1),pc(e,1,0))}function To(e){for(;e===Qi;)Qi=tn[--an],tn[an]=null,Yn=tn[--an],tn[an]=null;for(;e===Wt;)Wt=dt[--ft],dt[ft]=null,Dt=dt[--ft],dt[ft]=null,Tt=dt[--ft],dt[ft]=null}function hc(e,t){dt[ft++]=Tt,dt[ft++]=Dt,dt[ft++]=Wt,Tt=t.id,Dt=t.overflow,Wt=e}var Ce=null,se=null,k=!1,$t=null,mt=!1,Do=Error(h(519));function ea(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Qn(rt(t,e)),Do}function vc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[De]=e,t[Ye]=n,a){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(a=0;a<ri.length;a++)Y(ri[a],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),Ou(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),Uu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||Ld(t.textContent,a)?(n.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),n.onScroll!=null&&Y("scroll",t),n.onScrollEnd!=null&&Y("scrollend",t),n.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ea(e,!0)}function yc(e){for(Ce=e.return;Ce;)switch(Ce.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Ce=Ce.return}}function nn(e){if(e!==Ce)return!1;if(!k)return yc(e),k=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||js(e.type,e.memoizedProps)),a=!a),a&&se&&ea(e),yc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));se=Qd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));se=Qd(e)}else t===27?(t=se,pa(e.type)?(e=Js,Js=null,se=e):se=t):se=Ce?ht(e.stateNode.nextSibling):null;return!0}function Oa(){se=Ce=null,k=!1}function Co(){var e=$t;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),$t=null),e}function Qn(e){$t===null?$t=[e]:$t.push(e)}var wo=r(null),xa=null,Nt=null;function ta(e,t,a){T(wo,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=wo.current,b(wo)}function Ro(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Oo(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var o=i.child;l=l.firstContext;e:for(;l!==null;){var s=l;l=i;for(var u=0;u<t.length;u++)if(s.context===t[u]){l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),Ro(l.return,a,e),n||(o=null);break e}l=s.next}}else if(i.tag===18){if(o=i.return,o===null)throw Error(h(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),Ro(o,a,e),o=null}else o=i.child;if(o!==null)o.return=i;else for(o=i;o!==null;){if(o===e){o=null;break}if(i=o.sibling,i!==null){i.return=o.return,o=i;break}o=o.return}i=o}}function ln(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var o=i.alternate;if(o===null)throw Error(h(387));if(o=o.memoizedProps,o!==null){var s=i.type;$e(i.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(i===W.current){if(o=i.alternate,o===null)throw Error(h(387));o.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}i=i.return}e!==null&&Oo(t,e,a,n),t.flags|=262144}function ji(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){xa=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function we(e){return gc(xa,e)}function Xi(e,t){return xa===null&&Ua(e),gc(e,t)}function gc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nt===null){if(e===null)throw Error(h(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return a}var Um=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},zm=C.unstable_scheduleCallback,Lm=C.unstable_NormalPriority,ge={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function xo(){return{controller:new Um,data:new Map,refCount:0}}function jn(e){e.refCount--,e.refCount===0&&zm(Lm,function(){e.controller.abort()})}var Xn=null,Uo=0,on=0,sn=null;function _m(e,t){if(Xn===null){var a=Xn=[];Uo=0,on=_s(),sn={status:"pending",value:void 0,then:function(n){a.push(n)}}}return Uo++,t.then(Ac,Ac),t}function Ac(){if(--Uo===0&&Xn!==null){sn!==null&&(sn.status="fulfilled");var e=Xn;Xn=null,on=0,sn=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Sc=g.S;g.S=function(e,t){nd=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_m(e,t),Sc!==null&&Sc(e,t)};var za=r(null);function zo(){var e=za.current;return e!==null?e:oe.pooledCache}function ki(e,t){t===null?T(za,za.current):T(za,t.pool)}function bc(){var e=zo();return e===null?null:{parent:ge._currentValue,pool:e}}var un=Error(h(460)),Lo=Error(h(474)),Zi=Error(h(542)),Ki={then:function(){}};function Ec(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e}throw _a=t,un}}function La(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,un):a}}var _a=null;function Tc(){if(_a===null)throw Error(h(459));var e=_a;return _a=null,e}function Dc(e){if(e===un||e===Zi)throw Error(h(483))}var cn=null,kn=0;function Ji(e){var t=kn;return kn+=1,cn===null&&(cn=[]),Mc(cn,e,t)}function Zn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ii(e,t){throw t.$$typeof===ce?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cc(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function a(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function n(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=Lt(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=67108866,c):f):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,c,f,A){return c===null||c.tag!==6?(c=bo(f,d.mode,A),c.return=d,c):(c=i(c,f),c.return=d,c)}function u(d,c,f,A){var O=f.type;return O===Le?y(d,c,f.props.children,A,f.key):c!==null&&(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ve&&La(O)===c.type)?(c=i(c,f.props),Zn(c,f),c.return=d,c):(c=Yi(f.type,f.key,f.props,null,d.mode,A),Zn(c,f),c.return=d,c)}function m(d,c,f,A){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=Eo(f,d.mode,A),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function y(d,c,f,A,O){return c===null||c.tag!==7?(c=Ra(f,d.mode,A,O),c.return=d,c):(c=i(c,f),c.return=d,c)}function S(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=bo(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Je:return f=Yi(c.type,c.key,c.props,null,d.mode,f),Zn(f,c),f.return=d,f;case Be:return c=Eo(c,d.mode,f),c.return=d,c;case Ve:return c=La(c),S(d,c,f)}if(yt(c)||Ge(c))return c=Ra(c,d.mode,f,null),c.return=d,c;if(typeof c.then=="function")return S(d,Ji(c),f);if(c.$$typeof===xe)return S(d,Xi(d,c),f);Ii(d,c)}return null}function p(d,c,f,A){var O=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return O!==null?null:s(d,c,""+f,A);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return f.key===O?u(d,c,f,A):null;case Be:return f.key===O?m(d,c,f,A):null;case Ve:return f=La(f),p(d,c,f,A)}if(yt(f)||Ge(f))return O!==null?null:y(d,c,f,A,null);if(typeof f.then=="function")return p(d,c,Ji(f),A);if(f.$$typeof===xe)return p(d,c,Xi(d,f),A);Ii(d,f)}return null}function v(d,c,f,A,O){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return d=d.get(f)||null,s(c,d,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Je:return d=d.get(A.key===null?f:A.key)||null,u(c,d,A,O);case Be:return d=d.get(A.key===null?f:A.key)||null,m(c,d,A,O);case Ve:return A=La(A),v(d,c,f,A,O)}if(yt(A)||Ge(A))return d=d.get(f)||null,y(c,d,A,O,null);if(typeof A.then=="function")return v(d,c,f,Ji(A),O);if(A.$$typeof===xe)return v(d,c,f,Xi(c,A),O);Ii(c,A)}return null}function D(d,c,f,A){for(var O=null,Z=null,R=c,H=c=0,j=null;R!==null&&H<f.length;H++){R.index>H?(j=R,R=null):j=R.sibling;var K=p(d,R,f[H],A);if(K===null){R===null&&(R=j);break}e&&R&&K.alternate===null&&t(d,R),c=l(K,c,H),Z===null?O=K:Z.sibling=K,Z=K,R=j}if(H===f.length)return a(d,R),k&&_t(d,H),O;if(R===null){for(;H<f.length;H++)R=S(d,f[H],A),R!==null&&(c=l(R,c,H),Z===null?O=R:Z.sibling=R,Z=R);return k&&_t(d,H),O}for(R=n(R);H<f.length;H++)j=v(R,d,H,f[H],A),j!==null&&(e&&j.alternate!==null&&R.delete(j.key===null?H:j.key),c=l(j,c,H),Z===null?O=j:Z.sibling=j,Z=j);return e&&R.forEach(function(Aa){return t(d,Aa)}),k&&_t(d,H),O}function U(d,c,f,A){if(f==null)throw Error(h(151));for(var O=null,Z=null,R=c,H=c=0,j=null,K=f.next();R!==null&&!K.done;H++,K=f.next()){R.index>H?(j=R,R=null):j=R.sibling;var Aa=p(d,R,K.value,A);if(Aa===null){R===null&&(R=j);break}e&&R&&Aa.alternate===null&&t(d,R),c=l(Aa,c,H),Z===null?O=Aa:Z.sibling=Aa,Z=Aa,R=j}if(K.done)return a(d,R),k&&_t(d,H),O;if(R===null){for(;!K.done;H++,K=f.next())K=S(d,K.value,A),K!==null&&(c=l(K,c,H),Z===null?O=K:Z.sibling=K,Z=K);return k&&_t(d,H),O}for(R=n(R);!K.done;H++,K=f.next())K=v(R,d,H,K.value,A),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?H:K.key),c=l(K,c,H),Z===null?O=K:Z.sibling=K,Z=K);return e&&R.forEach(function(Zp){return t(d,Zp)}),k&&_t(d,H),O}function ie(d,c,f,A){if(typeof f=="object"&&f!==null&&f.type===Le&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:e:{for(var O=f.key;c!==null;){if(c.key===O){if(O=f.type,O===Le){if(c.tag===7){a(d,c.sibling),A=i(c,f.props.children),A.return=d,d=A;break e}}else if(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ve&&La(O)===c.type){a(d,c.sibling),A=i(c,f.props),Zn(A,f),A.return=d,d=A;break e}a(d,c);break}else t(d,c);c=c.sibling}f.type===Le?(A=Ra(f.props.children,d.mode,A,f.key),A.return=d,d=A):(A=Yi(f.type,f.key,f.props,null,d.mode,A),Zn(A,f),A.return=d,d=A)}return o(d);case Be:e:{for(O=f.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){a(d,c.sibling),A=i(c,f.children||[]),A.return=d,d=A;break e}else{a(d,c);break}else t(d,c);c=c.sibling}A=Eo(f,d.mode,A),A.return=d,d=A}return o(d);case Ve:return f=La(f),ie(d,c,f,A)}if(yt(f))return D(d,c,f,A);if(Ge(f)){if(O=Ge(f),typeof O!="function")throw Error(h(150));return f=O.call(f),U(d,c,f,A)}if(typeof f.then=="function")return ie(d,c,Ji(f),A);if(f.$$typeof===xe)return ie(d,c,Xi(d,f),A);Ii(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,c!==null&&c.tag===6?(a(d,c.sibling),A=i(c,f),A.return=d,d=A):(a(d,c),A=bo(f,d.mode,A),A.return=d,d=A),o(d)):a(d,c)}return function(d,c,f,A){try{kn=0;var O=ie(d,c,f,A);return cn=null,O}catch(R){if(R===un||R===Zi)throw R;var Z=et(29,R,null,d.mode);return Z.lanes=A,Z.return=d,Z}finally{}}}var Na=Cc(!0),wc=Cc(!1),aa=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(I&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Gi(e),rc(e,null,a),t}return Vi(e,n,t,a),Gi(e)}function Kn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,gu(e,a)}}function qo(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Bo=!1;function Jn(){if(Bo){var e=sn;if(e!==null)throw e}}function In(e,t,a,n){Bo=!1;var i=e.updateQueue;aa=!1;var l=i.firstBaseUpdate,o=i.lastBaseUpdate,s=i.shared.pending;if(s!==null){i.shared.pending=null;var u=s,m=u.next;u.next=null,o===null?l=m:o.next=m,o=u;var y=e.alternate;y!==null&&(y=y.updateQueue,s=y.lastBaseUpdate,s!==o&&(s===null?y.firstBaseUpdate=m:s.next=m,y.lastBaseUpdate=u))}if(l!==null){var S=i.baseState;o=0,y=m=u=null,s=l;do{var p=s.lane&-536870913,v=p!==s.lane;if(v?(Q&p)===p:(n&p)===p){p!==0&&p===on&&(Bo=!0),y!==null&&(y=y.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var D=e,U=s;p=t;var ie=a;switch(U.tag){case 1:if(D=U.payload,typeof D=="function"){S=D.call(ie,S,p);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=U.payload,p=typeof D=="function"?D.call(ie,S,p):D,p==null)break e;S=L({},S,p);break e;case 2:aa=!0}}p=s.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=i.callbacks,v===null?i.callbacks=[p]:v.push(p))}else v={lane:p,tag:s.tag,payload:s.payload,callback:s.callback,next:null},y===null?(m=y=v,u=S):y=y.next=v,o|=p;if(s=s.next,s===null){if(s=i.shared.pending,s===null)break;v=s,s=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);y===null&&(u=S),i.baseState=u,i.firstBaseUpdate=m,i.lastBaseUpdate=y,l===null&&(i.shared.lanes=0),ca|=o,e.lanes=o,e.memoizedState=S}}function Rc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Oc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rc(a[e],t)}var rn=r(null),Pi=r(0);function xc(e,t){e=kt,T(Pi,e),T(rn,t),kt=e|t.baseLanes}function Ho(){T(Pi,kt),T(rn,rn.current)}function Vo(){kt=Pi.current,b(rn),b(Pi)}var tt=r(null),pt=null;function la(e){var t=e.alternate;T(ve,ve.current&1),T(tt,e),pt===null&&(t===null||rn.current!==null||t.memoizedState!==null)&&(pt=e)}function Go(e){T(ve,ve.current),T(tt,e),pt===null&&(pt=e)}function Uc(e){e.tag===22?(T(ve,ve.current),T(tt,e),pt===null&&(pt=e)):oa()}function oa(){T(ve,ve.current),T(tt,tt.current)}function at(e){b(tt),pt===e&&(pt=null),b(ve)}var ve=r(0);function Fi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zs(a)||Ks(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,B=null,ae=null,Ae=null,Wi=!1,dn=!1,qa=!1,$i=0,Pn=0,fn=null,qm=0;function fe(){throw Error(h(321))}function Yo(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Qo(e,t,a,n,i,l){return Bt=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?pr:ns,qa=!1,l=a(n,i),qa=!1,dn&&(l=Lc(t,a,n,i)),zc(e),l}function zc(e){g.H=$n;var t=ae!==null&&ae.next!==null;if(Bt=0,Ae=ae=B=null,Wi=!1,Pn=0,fn=null,t)throw Error(h(300));e===null||Se||(e=e.dependencies,e!==null&&ji(e)&&(Se=!0))}function Lc(e,t,a,n){B=e;var i=0;do{if(dn&&(fn=null),Pn=0,dn=!1,25<=i)throw Error(h(301));if(i+=1,Ae=ae=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}g.H=hr,l=t(a,n)}while(dn);return l}function Bm(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?Fn(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(B.flags|=1024),t}function jo(){var e=$i!==0;return $i=0,e}function Xo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function ko(e){if(Wi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Wi=!1}Bt=0,Ae=ae=B=null,dn=!1,Pn=$i=0,fn=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?B.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ye(){if(ae===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Ae===null?B.memoizedState:Ae.next;if(t!==null)Ae=t,ae=e;else{if(e===null)throw B.alternate===null?Error(h(467)):Error(h(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Ae===null?B.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function el(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Fn(e){var t=Pn;return Pn+=1,fn===null&&(fn=[]),e=Mc(fn,e,t),t=B,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?pr:ns),e}function tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Fn(e);if(e.$$typeof===xe)return we(e)}throw Error(h(438,String(e)))}function Zo(e){var t=null,a=B.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=B.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=el(),B.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ga;return t.index++,a}function Ht(e,t){return typeof t=="function"?t(e):t}function al(e){var t=ye();return Ko(t,ae,e)}function Ko(e,t,a){var n=e.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var o=i.next;i.next=l.next,l.next=o}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var s=o=null,u=null,m=t,y=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(Q&S)===S:(Bt&S)===S){var p=m.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===on&&(y=!0);else if((Bt&p)===p){m=m.next,p===on&&(y=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=S,o=l):u=u.next=S,B.lanes|=p,ca|=p;S=m.action,qa&&a(l,S),l=m.hasEagerState?m.eagerState:a(l,S)}else p={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(s=u=p,o=l):u=u.next=p,B.lanes|=S,ca|=S;m=m.next}while(m!==null&&m!==t);if(u===null?o=l:u.next=s,!$e(l,e.memoizedState)&&(Se=!0,y&&(a=sn,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=u,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Jo(e){var t=ye(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var o=i=i.next;do l=e(l,o.action),o=o.next;while(o!==i);$e(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function _c(e,t,a){var n=B,i=ye(),l=k;if(l){if(a===void 0)throw Error(h(407));a=a()}else a=t();var o=!$e((ae||i).memoizedState,a);if(o&&(i.memoizedState=a,Se=!0),i=i.queue,Fo(Bc.bind(null,n,i,e),[e]),i.getSnapshot!==t||o||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},qc.bind(null,n,i,a,t),null),oe===null)throw Error(h(349));l||(Bt&127)!==0||Nc(n,t,a)}return a}function Nc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=B.updateQueue,t===null?(t=el(),B.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qc(e,t,a,n){t.value=a,t.getSnapshot=n,Hc(t)&&Vc(e)}function Bc(e,t,a){return a(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Vc(e){var t=wa(e,2);t!==null&&Ke(t,e,2)}function Io(e){var t=Ne();if(typeof e=="function"){var a=e;if(e=a(),qa){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function Gc(e,t,a,n){return e.baseState=a,Ko(e,ae,typeof n=="function"?n:Ht)}function Hm(e,t,a,n,i){if(ll(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};g.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,Yc(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Yc(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=g.T,o={};g.T=o;try{var s=a(i,n),u=g.S;u!==null&&u(o,s),Qc(e,t,s)}catch(m){Po(e,t,m)}finally{l!==null&&o.types!==null&&(l.types=o.types),g.T=l}}else try{l=a(i,n),Qc(e,t,l)}catch(m){Po(e,t,m)}}function Qc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){jc(e,t,n)},function(n){return Po(e,t,n)}):jc(e,t,a)}function jc(e,t,a){t.status="fulfilled",t.value=a,Xc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yc(e,a)))}function Po(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Xc(t),t=t.next;while(t!==n)}e.action=null}function Xc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function kc(e,t){return t}function Zc(e,t){if(k){var a=oe.formState;if(a!==null){e:{var n=B;if(k){if(se){t:{for(var i=se,l=mt;i.nodeType!==8;){if(!l){i=null;break t}if(i=ht(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){se=ht(i.nextSibling),n=i.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=Ne(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kc,lastRenderedState:t},a.queue=n,a=dr.bind(null,B,n),n.dispatch=a,n=Io(!1),l=as.bind(null,B,!1,n.queue),n=Ne(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Hm.bind(null,B,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Kc(e){var t=ye();return Jc(t,ae,e)}function Jc(e,t,a){if(t=Ko(e,t,kc)[0],e=al(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Fn(t)}catch(o){throw o===un?Zi:o}else n=t;t=ye();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(B.flags|=2048,mn(9,{destroy:void 0},Vm.bind(null,i,a),null)),[n,l,e]}function Vm(e,t){e.action=t}function Ic(e){var t=ye(),a=ae;if(a!==null)return Jc(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=B.updateQueue,t===null&&(t=el(),B.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Pc(){return ye().memoizedState}function nl(e,t,a,n){var i=Ne();B.flags|=e,i.memoizedState=mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function il(e,t,a,n){var i=ye();n=n===void 0?null:n;var l=i.memoizedState.inst;ae!==null&&n!==null&&Yo(n,ae.memoizedState.deps)?i.memoizedState=mn(t,l,a,n):(B.flags|=e,i.memoizedState=mn(1|t,l,a,n))}function Fc(e,t){nl(8390656,8,e,t)}function Fo(e,t){il(2048,8,e,t)}function Gm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=el(),B.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Wc(e){var t=ye().memoizedState;return Gm({ref:t,nextImpl:e}),function(){if((I&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function $c(e,t){return il(4,2,e,t)}function er(e,t){return il(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,il(4,4,tr.bind(null,t,e),a)}function Wo(){}function nr(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Yo(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ir(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Yo(t,n[1]))return n[0];if(n=e(),qa){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n}function $o(e,t,a){return a===void 0||(Bt&1073741824)!==0&&(Q&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ld(),B.lanes|=e,ca|=e,a)}function lr(e,t,a,n){return $e(a,t)?a:rn.current!==null?(e=$o(e,a,n),$e(e,t)||(Se=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(Q&261930)===0?(Se=!0,e.memoizedState=a):(e=ld(),B.lanes|=e,ca|=e,t)}function or(e,t,a,n,i){var l=M.p;M.p=l!==0&&8>l?l:8;var o=g.T,s={};g.T=s,as(e,!1,t,a);try{var u=i(),m=g.S;if(m!==null&&m(s,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=Nm(u,n);Wn(e,t,y,lt(e))}else Wn(e,t,n,lt(e))}catch(S){Wn(e,t,{then:function(){},status:"rejected",reason:S},lt())}finally{M.p=l,o!==null&&s.types!==null&&(o.types=s.types),g.T=o}}function Ym(){}function es(e,t,a,n){if(e.tag!==5)throw Error(h(476));var i=sr(e).queue;or(e,i,t,_,a===null?Ym:function(){return ur(e),a(n)})}function sr(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:_},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ur(e){var t=sr(e);t.next===null&&(t=e.alternate.memoizedState),Wn(e,t.next.queue,{},lt())}function ts(){return we(hi)}function cr(){return ye().memoizedState}function rr(){return ye().memoizedState}function Qm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=na(a);var n=ia(t,e,a);n!==null&&(Ke(n,t,a),Kn(n,t,a)),t={cache:xo()},e.payload=t;return}t=t.return}}function jm(e,t,a){var n=lt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?fr(t,a):(a=Ao(e,t,a,n),a!==null&&(Ke(a,e,n),mr(a,t,n)))}function dr(e,t,a){var n=lt();Wn(e,t,a,n)}function Wn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))fr(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,a);if(i.hasEagerState=!0,i.eagerState=s,$e(s,o))return Vi(e,t,i,0),oe===null&&Hi(),!1}catch{}finally{}if(a=Ao(e,t,i,n),a!==null)return Ke(a,e,n),mr(a,t,n),!0}return!1}function as(e,t,a,n){if(n={lane:2,revertLane:_s(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(t)throw Error(h(479))}else t=Ao(e,a,n,2),t!==null&&Ke(t,e,2)}function ll(e){var t=e.alternate;return e===B||t!==null&&t===B}function fr(e,t){dn=Wi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,gu(e,a)}}var $n={readContext:we,use:tl,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe};$n.useEffectEvent=fe;var pr={readContext:we,use:tl,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:we,useEffect:Fc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,nl(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){nl(4,2,e,t)},useMemo:function(e,t){var a=Ne();t=t===void 0?null:t;var n=e();if(qa){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ne();if(a!==void 0){var i=a(t);if(qa){It(!0);try{a(t)}finally{It(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=jm.bind(null,B,e),[n.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=Io(e);var t=e.queue,a=dr.bind(null,B,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Wo,useDeferredValue:function(e,t){var a=Ne();return $o(a,e,t)},useTransition:function(){var e=Io(!1);return e=or.bind(null,B,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=B,i=Ne();if(k){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),oe===null)throw Error(h(349));(Q&127)!==0||Nc(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Fc(Bc.bind(null,n,l,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},qc.bind(null,n,l,a,t),null),a},useId:function(){var e=Ne(),t=oe.identifierPrefix;if(k){var a=Dt,n=Tt;a=(n&~(1<<32-We(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$i++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ts,useFormState:Zc,useActionState:Zc,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=as.bind(null,B,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zo,useCacheRefresh:function(){return Ne().memoizedState=Qm.bind(null,B)},useEffectEvent:function(e){var t=Ne(),a={impl:e};return t.memoizedState=a,function(){if((I&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},ns={readContext:we,use:tl,useCallback:nr,useContext:we,useEffect:Fo,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:ir,useReducer:al,useRef:Pc,useState:function(){return al(Ht)},useDebugValue:Wo,useDeferredValue:function(e,t){var a=ye();return lr(a,ae.memoizedState,e,t)},useTransition:function(){var e=al(Ht)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:_c,useId:cr,useHostTransitionStatus:ts,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var a=ye();return Gc(a,ae,e,t)},useMemoCache:Zo,useCacheRefresh:rr};ns.useEffectEvent=Wc;var hr={readContext:we,use:tl,useCallback:nr,useContext:we,useEffect:Fo,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:ir,useReducer:Jo,useRef:Pc,useState:function(){return Jo(Ht)},useDebugValue:Wo,useDeferredValue:function(e,t){var a=ye();return ae===null?$o(a,e,t):lr(a,ae.memoizedState,e,t)},useTransition:function(){var e=Jo(Ht)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Fn(e),t]},useSyncExternalStore:_c,useId:cr,useHostTransitionStatus:ts,useFormState:Ic,useActionState:Ic,useOptimistic:function(e,t){var a=ye();return ae!==null?Gc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zo,useCacheRefresh:rr};hr.useEffectEvent=Wc;function is(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:L({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ls={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ke(t,e,n),Kn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ke(t,e,n),Kn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(Ke(t,e,a),Kn(t,e,a))}};function vr(e,t,a,n,i,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,o):t.prototype&&t.prototype.isPureReactComponent?!Vn(a,n)||!Vn(i,l):!0}function yr(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=L({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function gr(e){Bi(e)}function Ar(e){console.error(e)}function Sr(e){Bi(e)}function ol(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function br(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function os(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){ol(e,t)},a}function Er(e){return e=na(e),e.tag=3,e}function Mr(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){br(t,a,n)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){br(t,a,n),typeof i!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var s=n.stack;this.componentDidCatch(n.value,{componentStack:s!==null?s:""})})}function Xm(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,i,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?gl():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ki?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),Us(e,n,i)),!1;case 22:return a.flags|=65536,n===Ki?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),Us(e,n,i)),!1}throw Error(h(435,a.tag))}return Us(e,n,i),gl(),!1}if(k)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Do&&(e=Error(h(422),{cause:n}),Qn(rt(e,a)))):(n!==Do&&(t=Error(h(423),{cause:n}),Qn(rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=rt(n,a),i=os(e.stateNode,n,i),qo(e,i),me!==4&&(me=2)),!1;var l=Error(h(520),{cause:n});if(l=rt(l,a),si===null?si=[l]:si.push(l),me!==4&&(me=2),t===null)return!0;n=rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=os(a.stateNode,n,e),qo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Er(i),Mr(i,e,a,n),qo(a,i),!1}a=a.return}while(a!==null);return!1}var ss=Error(h(461)),Se=!1;function Re(e,t,a,n){t.child=e===null?wc(t,null,a,n):Na(t,e.child,a,n)}function Tr(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var o={};for(var s in n)s!=="ref"&&(o[s]=n[s])}else o=n;return Ua(t),n=Qo(e,t,a,o,l,i),s=jo(),e!==null&&!Se?(Xo(e,t,i),Vt(e,t,i)):(k&&s&&Mo(t),t.flags|=1,Re(e,t,n,i),t.child)}function Dr(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!So(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Cr(e,t,l,n,i)):(e=Yi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!hs(e,i)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(o,n)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=Lt(l,n),e.ref=t.ref,e.return=t,t.child=e}function Cr(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(Vn(l,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=l,hs(e,i))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return us(e,t,a,n,i)}function wr(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Rr(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&ki(t,l!==null?l.cachePool:null),l!==null?xc(t,l):Ho(),Uc(t);else return n=t.lanes=536870912,Rr(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(ki(t,l.cachePool),xc(t,l),oa(),t.memoizedState=null):(e!==null&&ki(t,null),Ho(),oa());return Re(e,t,i,a),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rr(e,t,a,n,i){var l=zo();return l=l===null?null:{parent:ge._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&ki(t,null),Ho(),Uc(t),e!==null&&ln(e,t,n,!0),t.childLanes=i,null}function sl(e,t){return t=cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Or(e,t,a){return Na(t,e.child,null,a),e=sl(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function km(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(k){if(n.mode==="hidden")return e=sl(t,n),t.lanes=536870912,ei(null,e);if(Go(t),(e=se)?(e=Yd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,Ce=t,se=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return sl(t,n)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(Go(t),i)if(t.flags&256)t.flags&=-257,t=Or(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Se||ln(e,t,a,!1),i=(a&e.childLanes)!==0,Se||i){if(n=oe,n!==null&&(o=Au(n,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,wa(e,o),Ke(n,e,o),ss;gl(),t=Or(e,t,a)}else e=l.treeContext,se=ht(o.nextSibling),Ce=t,k=!0,$t=null,mt=!1,e!==null&&hc(t,e),t=sl(t,n),t.flags|=4096;return t}return e=Lt(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ul(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function us(e,t,a,n,i){return Ua(t),a=Qo(e,t,a,n,void 0,i),n=jo(),e!==null&&!Se?(Xo(e,t,i),Vt(e,t,i)):(k&&n&&Mo(t),t.flags|=1,Re(e,t,a,i),t.child)}function xr(e,t,a,n,i,l){return Ua(t),t.updateQueue=null,a=Lc(t,n,a,i),zc(e),n=jo(),e!==null&&!Se?(Xo(e,t,l),Vt(e,t,l)):(k&&n&&Mo(t),t.flags|=1,Re(e,t,a,l),t.child)}function Ur(e,t,a,n,i){if(Ua(t),t.stateNode===null){var l=en,o=a.contextType;typeof o=="object"&&o!==null&&(l=we(o)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ls,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},_o(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?we(o):en,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(is(t,a,o,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&ls.enqueueReplaceState(l,l.state,null),In(t,n,l,i),Jn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var s=t.memoizedProps,u=Ba(a,s);l.props=u;var m=l.context,y=a.contextType;o=en,typeof y=="object"&&y!==null&&(o=we(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||m!==o)&&yr(t,l,n,o),aa=!1;var p=t.memoizedState;l.state=p,In(t,n,l,i),Jn(),m=t.memoizedState,s||p!==m||aa?(typeof S=="function"&&(is(t,a,S,n),m=t.memoizedState),(u=aa||vr(t,a,u,n,p,m,o))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),l.props=n,l.state=m,l.context=o,n=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,No(e,t),o=t.memoizedProps,y=Ba(a,o),l.props=y,S=t.pendingProps,p=l.context,m=a.contextType,u=en,typeof m=="object"&&m!==null&&(u=we(m)),s=a.getDerivedStateFromProps,(m=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==S||p!==u)&&yr(t,l,n,u),aa=!1,p=t.memoizedState,l.state=p,In(t,n,l,i),Jn();var v=t.memoizedState;o!==S||p!==v||aa||e!==null&&e.dependencies!==null&&ji(e.dependencies)?(typeof s=="function"&&(is(t,a,s,n),v=t.memoizedState),(y=aa||vr(t,a,y,n,p,v,u)||e!==null&&e.dependencies!==null&&ji(e.dependencies))?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),l.props=n,l.state=v,l.context=u,n=y):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,ul(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,a,i)):Re(e,t,a,i),t.memoizedState=l.state,e=t.child):e=Vt(e,t,i),e}function zr(e,t,a,n){return Oa(),t.flags|=256,Re(e,t,a,n),t.child}var cs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function rs(e){return{baseLanes:e,cachePool:bc()}}function ds(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function Lr(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),o&&(i=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(k){if(i?la(t):oa(),(e=se)?(e=Yd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Wt!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,Ce=t,se=null)):e=null,e===null)throw ea(t);return Ks(e)?t.lanes=32:t.lanes=536870912,null}var s=n.children;return n=n.fallback,i?(oa(),i=t.mode,s=cl({mode:"hidden",children:s},i),n=Ra(n,i,a,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n=t.child,n.memoizedState=rs(a),n.childLanes=ds(e,o,a),t.memoizedState=cs,ei(null,n)):(la(t),fs(t,s))}var u=e.memoizedState;if(u!==null&&(s=u.dehydrated,s!==null)){if(l)t.flags&256?(la(t),t.flags&=-257,t=ms(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),s=n.fallback,i=t.mode,n=cl({mode:"visible",children:n.children},i),s=Ra(s,i,a,null),s.flags|=2,n.return=t,s.return=t,n.sibling=s,t.child=n,Na(t,e.child,null,a),n=t.child,n.memoizedState=rs(a),n.childLanes=ds(e,o,a),t.memoizedState=cs,t=ei(null,n));else if(la(t),Ks(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var m=o.dgst;o=m,n=Error(h(419)),n.stack="",n.digest=o,Qn({value:n,source:null,stack:null}),t=ms(e,t,a)}else if(Se||ln(e,t,a,!1),o=(a&e.childLanes)!==0,Se||o){if(o=oe,o!==null&&(n=Au(o,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,wa(e,n),Ke(o,e,n),ss;Zs(s)||gl(),t=ms(e,t,a)}else Zs(s)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,se=ht(s.nextSibling),Ce=t,k=!0,$t=null,mt=!1,e!==null&&hc(t,e),t=fs(t,n.children),t.flags|=4096);return t}return i?(oa(),s=n.fallback,i=t.mode,u=e.child,m=u.sibling,n=Lt(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,m!==null?s=Lt(m,s):(s=Ra(s,i,a,null),s.flags|=2),s.return=t,n.return=t,n.sibling=s,t.child=n,ei(null,n),n=t.child,s=e.child.memoizedState,s===null?s=rs(a):(i=s.cachePool,i!==null?(u=ge._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=bc(),s={baseLanes:s.baseLanes|a,cachePool:i}),n.memoizedState=s,n.childLanes=ds(e,o,a),t.memoizedState=cs,ei(e.child,n)):(la(t),a=e.child,e=a.sibling,a=Lt(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function fs(e,t){return t=cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cl(e,t){return e=et(22,e,null,t),e.lanes=0,e}function ms(e,t,a){return Na(t,e.child,null,a),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _r(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),Ro(e.return,t,a)}function ps(e,t,a,n,i,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=n,o.tail=a,o.tailMode=i,o.treeForkCount=l)}function Nr(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var o=ve.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,T(ve,o),Re(e,t,n,a),n=k?Yn:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_r(e,a,t);else if(e.tag===19)_r(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Fi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),ps(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Fi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}ps(t,!0,a,null,l,n);break;case"together":ps(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=Lt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=Lt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&ji(e)))}function Zm(e,t,a){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,ge,e.memoizedState.cache),Oa();break;case 27:case 5:Cn(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Go(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(la(t),t.flags|=128,null):(a&t.child.childLanes)!==0?Lr(e,t,a):(la(t),e=Vt(e,t,a),e!==null?e.sibling:null);la(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Nr(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),T(ve,ve.current),n)break;return null;case 22:return t.lanes=0,wr(e,t,a,t.pendingProps);case 24:ta(t,ge,e.memoizedState.cache)}return Vt(e,t,a)}function qr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!hs(e,a)&&(t.flags&128)===0)return Se=!1,Zm(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,k&&(t.flags&1048576)!==0&&pc(t,Yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=La(t.elementType),t.type=e,typeof e=="function")So(e)?(n=Ba(e,n),t.tag=1,t=Ur(null,t,e,n,a)):(t.tag=0,t=us(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===ot){t.tag=11,t=Tr(null,t,e,n,a);break e}else if(i===X){t.tag=14,t=Dr(null,t,e,n,a);break e}}throw t=Ot(e)||e,Error(h(306,t,""))}}return t;case 0:return us(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ba(n,t.pendingProps),Ur(e,t,n,i,a);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(h(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,No(e,t),In(t,n,null,a);var o=t.memoizedState;if(n=o.cache,ta(t,ge,n),n!==l.cache&&Oo(t,[ge],a,!0),Jn(),n=o.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=zr(e,t,n,a);break e}else if(n!==i){i=rt(Error(h(424)),t),Qn(i),t=zr(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=ht(e.firstChild),Ce=t,k=!0,$t=null,mt=!0,a=wc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oa(),n===i){t=Vt(e,t,a);break e}Re(e,t,n,a)}t=t.child}return t;case 26:return ul(e,t),e===null?(a=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=a:k||(a=t.type,e=t.pendingProps,n=Dl(V.current).createElement(a),n[De]=t,n[Ye]=e,Oe(n,a,e),Me(n),t.stateNode=n):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Cn(t),e===null&&k&&(n=t.stateNode=Xd(t.type,t.pendingProps,V.current),Ce=t,mt=!0,i=se,pa(t.type)?(Js=i,se=ht(n.firstChild)):se=i),Re(e,t,t.pendingProps.children,a),ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&k&&((i=n=se)&&(n=Ep(n,t.type,t.pendingProps,mt),n!==null?(t.stateNode=n,Ce=t,se=ht(n.firstChild),mt=!1,i=!0):i=!1),i||ea(t)),Cn(t),i=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,n=l.children,js(i,l)?n=null:o!==null&&js(i,o)&&(t.flags|=32),t.memoizedState!==null&&(i=Qo(e,t,Bm,null,null,a),hi._currentValue=i),ul(e,t),Re(e,t,n,a),t.child;case 6:return e===null&&k&&((e=a=se)&&(a=Mp(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Ce=t,se=null,e=!0):e=!1),e||ea(t)),null;case 13:return Lr(e,t,a);case 4:return _e(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Na(t,null,n,a):Re(e,t,n,a),t.child;case 11:return Tr(e,t,t.type,t.pendingProps,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Re(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,Ua(t),i=we(i),n=n(i),t.flags|=1,Re(e,t,n,a),t.child;case 14:return Dr(e,t,t.type,t.pendingProps,a);case 15:return Cr(e,t,t.type,t.pendingProps,a);case 19:return Nr(e,t,a);case 31:return km(e,t,a);case 22:return wr(e,t,a,t.pendingProps);case 24:return Ua(t),n=we(ge),e===null?(i=zo(),i===null&&(i=oe,l=xo(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},_o(t),ta(t,ge,i)):((e.lanes&a)!==0&&(No(e,t),In(t,null,null,a),Jn()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,ge,n)):(n=l.cache,ta(t,ge,n),n!==i.cache&&Oo(t,[ge],a,!0))),Re(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Gt(e){e.flags|=4}function vs(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(cd())e.flags|=8192;else throw _a=Ki,Lo}else e.flags&=-16777217}function Br(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Wd(t))if(cd())e.flags|=8192;else throw _a=Ki,Lo}function rl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vu():536870912,e.lanes|=t,yn|=t)}function ti(e,t){if(!k)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Km(e,t,a){var n=t.pendingProps;switch(To(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qt(ge),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Co())),ue(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Gt(t),l!==null?(ue(t),Br(t,l)):(ue(t),vs(t,i,null,n,a))):l?l!==e.memoizedState?(Gt(t),ue(t),Br(t,l)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Gt(t),ue(t),vs(t,i,e,n,a)),null;case 27:if(bi(t),a=V.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return ue(t),null}e=w.current,nn(t)?vc(t):(e=Xd(i,n,a),t.stateNode=e,Gt(t))}return ue(t),null;case 5:if(bi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return ue(t),null}if(l=w.current,nn(t))vc(t);else{var o=Dl(V.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?o.createElement("select",{is:n.is}):o.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?o.createElement(i,{is:n.is}):o.createElement(i)}}l[De]=t,l[Ye]=n;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(Oe(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Gt(t)}}return ue(t),vs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(e=V.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Ce,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[De]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||Ld(e.nodeValue,a)),e||ea(t,!0)}else e=Dl(e).createTextNode(n),e[De]=t,t.stateNode=e}return ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[De]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else a=Co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[De]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else i=Co(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),rl(t,t.updateQueue),ue(t),null);case 4:return he(),e===null&&Hs(t.stateNode.containerInfo),ue(t),null;case 10:return qt(t.type),ue(t),null;case 19:if(b(ve),n=t.memoizedState,n===null)return ue(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ti(n,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Fi(e),l!==null){for(t.flags|=128,ti(n,!1),e=l.updateQueue,t.updateQueue=e,rl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dc(a,e),a=a.sibling;return T(ve,ve.current&1|2),k&&_t(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Pe()>hl&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304)}else{if(!i)if(e=Fi(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,rl(t,e),ti(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!k)return ue(t),null}else 2*Pe()-n.renderingStartTime>hl&&a!==536870912&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Pe(),e.sibling=null,a=ve.current,T(ve,i?a&1|2:a&1),k&&_t(t,n.treeForkCount),e):(ue(t),null);case 22:case 23:return at(t),Vo(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),a=t.updateQueue,a!==null&&rl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&b(za),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(ge),ue(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Jm(e,t){switch(To(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(ge),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bi(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ve),null;case 4:return he(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Vo(),e!==null&&b(za),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(ge),null;case 25:return null;default:return null}}function Hr(e,t){switch(To(t),t.tag){case 3:qt(ge),he();break;case 26:case 27:case 5:bi(t);break;case 4:he();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:b(ve);break;case 10:qt(t.type);break;case 22:case 23:at(t),Vo(),e!==null&&b(za);break;case 24:qt(ge)}}function ai(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,o=a.inst;n=l(),o.destroy=n}a=a.next}while(a!==i)}}catch(s){ee(t,t.return,s)}}function sa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var o=n.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,i=t;var u=a,m=s;try{m()}catch(y){ee(i,u,y)}}}n=n.next}while(n!==l)}}catch(y){ee(t,t.return,y)}}function Vr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Oc(t,a)}catch(n){ee(e,e.return,n)}}}function Gr(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function ni(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ee(e,t,i)}}function Ct(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ee(e,t,i)}else a.current=null}function Yr(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ee(e,e.return,i)}}function ys(e,t,a){try{var n=e.stateNode;vp(n,e.type,a,t),n[Ye]=t}catch(i){ee(e,e.return,i)}}function Qr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function gs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Qr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(n!==4&&(n===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(As(e,t,a),e=e.sibling;e!==null;)As(e,t,a),e=e.sibling}function dl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(dl(e,t,a),e=e.sibling;e!==null;)dl(e,t,a),e=e.sibling}function jr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Oe(t,n,a),t[De]=e,t[Ye]=a}catch(l){ee(e,e.return,l)}}var Yt=!1,be=!1,Ss=!1,Xr=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Im(e,t){if(e=e.containerInfo,Ys=zl,e=ac(e),mo(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,s=-1,u=-1,m=0,y=0,S=e,p=null;t:for(;;){for(var v;S!==a||i!==0&&S.nodeType!==3||(s=o+i),S!==l||n!==0&&S.nodeType!==3||(u=o+n),S.nodeType===3&&(o+=S.nodeValue.length),(v=S.firstChild)!==null;)p=S,S=v;for(;;){if(S===e)break t;if(p===a&&++m===i&&(s=o),p===l&&++y===n&&(u=o),(v=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=v}a=s===-1||u===-1?null:{start:s,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(Qs={focusedElem:e,selectionRange:a},zl=!1,Te=t;Te!==null;)if(t=Te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Te=e;else for(;Te!==null;){switch(t=Te,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var D=Ba(a.type,i);e=n.getSnapshotBeforeUpdate(D,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(U){ee(a,a.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)ks(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ks(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Te=e;break}Te=t.return}}function kr(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:jt(e,a),n&4&&ai(5,a);break;case 1:if(jt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ee(a,a.return,o)}else{var i=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ee(a,a.return,o)}}n&64&&Vr(a),n&512&&ni(a,a.return);break;case 3:if(jt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Oc(e,t)}catch(o){ee(a,a.return,o)}}break;case 27:t===null&&n&4&&jr(a);case 26:case 5:jt(e,a),t===null&&n&4&&Yr(a),n&512&&ni(a,a.return);break;case 12:jt(e,a);break;case 31:jt(e,a),n&4&&Jr(e,a);break;case 13:jt(e,a),n&4&&Ir(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ip.bind(null,a),Tp(e,a))));break;case 22:if(n=a.memoizedState!==null||Yt,!n){t=t!==null&&t.memoizedState!==null||be,i=Yt;var l=be;Yt=n,(be=t)&&!l?Xt(e,a,(a.subtreeFlags&8772)!==0):jt(e,a),Yt=i,be=l}break;case 30:break;default:jt(e,a)}}function Zr(e){var t=e.alternate;t!==null&&(e.alternate=null,Zr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Il(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,je=!1;function Qt(e,t,a){for(a=a.child;a!==null;)Kr(e,t,a),a=a.sibling}function Kr(e,t,a){if(Fe&&typeof Fe.onCommitFiberUnmount=="function")try{Fe.onCommitFiberUnmount(wn,a)}catch{}switch(a.tag){case 26:be||Ct(a,t),Qt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||Ct(a,t);var n=re,i=je;pa(a.type)&&(re=a.stateNode,je=!1),Qt(e,t,a),fi(a.stateNode),re=n,je=i;break;case 5:be||Ct(a,t);case 6:if(n=re,i=je,re=null,Qt(e,t,a),re=n,je=i,re!==null)if(je)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(l){ee(a,t,l)}else try{re.removeChild(a.stateNode)}catch(l){ee(a,t,l)}break;case 18:re!==null&&(je?(e=re,Vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dn(e)):Vd(re,a.stateNode));break;case 4:n=re,i=je,re=a.stateNode.containerInfo,je=!0,Qt(e,t,a),re=n,je=i;break;case 0:case 11:case 14:case 15:sa(2,a,t),be||sa(4,a,t),Qt(e,t,a);break;case 1:be||(Ct(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Gr(a,t,n)),Qt(e,t,a);break;case 21:Qt(e,t,a);break;case 22:be=(n=be)||a.memoizedState!==null,Qt(e,t,a),be=n;break;default:Qt(e,t,a)}}function Jr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dn(e)}catch(a){ee(t,t.return,a)}}}function Ir(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dn(e)}catch(a){ee(t,t.return,a)}}function Pm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xr),t;default:throw Error(h(435,e.tag))}}function fl(e,t){var a=Pm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=lp.bind(null,e,n);n.then(i,i)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(pa(s.type)){re=s.stateNode,je=!1;break e}break;case 5:re=s.stateNode,je=!1;break e;case 3:case 4:re=s.stateNode.containerInfo,je=!0;break e}s=s.return}if(re===null)throw Error(h(160));Kr(l,o,i),re=null,je=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pr(t,e),t=t.sibling}var At=null;function Pr(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),ke(e),n&4&&(sa(3,e,e.return),ai(3,e),sa(5,e,e.return));break;case 1:Xe(t,e),ke(e),n&512&&(be||a===null||Ct(a,a.return)),n&64&&Yt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=At;if(Xe(t,e),ke(e),n&512&&(be||a===null||Ct(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[xn]||l[De]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),Oe(l,n,a),l[De]=e,Me(l),n=l;break e;case"link":var o=Pd("link","href",i).get(n+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}l=i.createElement(n),Oe(l,n,a),i.head.appendChild(l);break;case"meta":if(o=Pd("meta","content",i).get(n+(a.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}l=i.createElement(n),Oe(l,n,a),i.head.appendChild(l);break;default:throw Error(h(468,n))}l[De]=e,Me(l),n=l}e.stateNode=n}else Fd(i,e.type,e.stateNode);else e.stateNode=Id(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?Fd(i,e.type,e.stateNode):Id(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&ys(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),ke(e),n&512&&(be||a===null||Ct(a,a.return)),a!==null&&n&4&&ys(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),ke(e),n&512&&(be||a===null||Ct(a,a.return)),e.flags&32){i=e.stateNode;try{Ka(i,"")}catch(D){ee(e,e.return,D)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,ys(e,i,a!==null?a.memoizedProps:i)),n&1024&&(Ss=!0);break;case 6:if(Xe(t,e),ke(e),n&4){if(e.stateNode===null)throw Error(h(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(D){ee(e,e.return,D)}}break;case 3:if(Rl=null,i=At,At=Cl(t.containerInfo),Xe(t,e),At=i,ke(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(D){ee(e,e.return,D)}Ss&&(Ss=!1,Fr(e));break;case 4:n=At,At=Cl(e.stateNode.containerInfo),Xe(t,e),ke(e),At=n;break;case 12:Xe(t,e),ke(e);break;case 31:Xe(t,e),ke(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fl(e,n)));break;case 13:Xe(t,e),ke(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pl=Pe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fl(e,n)));break;case 22:i=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,m=Yt,y=be;if(Yt=m||i,be=y||u,Xe(t,e),be=y,Yt=m,ke(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||u||Yt||be||Ha(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(l=u.stateNode,i)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=u.stateNode;var S=u.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;s.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(D){ee(u,u.return,D)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(D){ee(u,u.return,D)}}}else if(t.tag===18){if(a===null){u=t;try{var v=u.stateNode;i?Gd(v,!0):Gd(u.stateNode,!1)}catch(D){ee(u,u.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,fl(e,a))));break;case 19:Xe(t,e),ke(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fl(e,n)));break;case 30:break;case 21:break;default:Xe(t,e),ke(e)}}function ke(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(Qr(n)){a=n;break}n=n.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var i=a.stateNode,l=gs(e);dl(e,l,i);break;case 5:var o=a.stateNode;a.flags&32&&(Ka(o,""),a.flags&=-33);var s=gs(e);dl(e,s,o);break;case 3:case 4:var u=a.stateNode.containerInfo,m=gs(e);As(e,m,u);break;default:throw Error(h(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Fr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Fr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function jt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)kr(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),Ha(t);break;case 1:Ct(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gr(t,t.return,a),Ha(t);break;case 27:fi(t.stateNode);case 26:case 5:Ct(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(i,l,a),ai(4,l);break;case 1:if(Xt(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){ee(n,n.return,m)}if(n=l,i=n.updateQueue,i!==null){var s=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)Rc(u[i],s)}catch(m){ee(n,n.return,m)}}a&&o&64&&Vr(l),ni(l,l.return);break;case 27:jr(l);case 26:case 5:Xt(i,l,a),a&&n===null&&o&4&&Yr(l),ni(l,l.return);break;case 12:Xt(i,l,a);break;case 31:Xt(i,l,a),a&&o&4&&Jr(i,l);break;case 13:Xt(i,l,a),a&&o&4&&Ir(i,l);break;case 22:l.memoizedState===null&&Xt(i,l,a),ni(l,l.return);break;case 30:break;default:Xt(i,l,a)}t=t.sibling}}function bs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&jn(a))}function Es(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Wr(e,t,a,n),t=t.sibling}function Wr(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),i&2048&&ai(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&jn(e)));break;case 12:if(i&2048){St(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ee(t,t.return,u)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,n):ii(e,t):l._visibility&2?St(e,t,a,n):(l._visibility|=2,pn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&bs(o,t);break;case 24:St(e,t,a,n),i&2048&&Es(t.alternate,t);break;default:St(e,t,a,n)}}function pn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,s=a,u=n,m=o.flags;switch(o.tag){case 0:case 11:case 15:pn(l,o,s,u,i),ai(8,o);break;case 23:break;case 22:var y=o.stateNode;o.memoizedState!==null?y._visibility&2?pn(l,o,s,u,i):ii(l,o):(y._visibility|=2,pn(l,o,s,u,i)),i&&m&2048&&bs(o.alternate,o);break;case 24:pn(l,o,s,u,i),i&&m&2048&&Es(o.alternate,o);break;default:pn(l,o,s,u,i)}t=t.sibling}}function ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ii(a,n),i&2048&&bs(n.alternate,n);break;case 24:ii(a,n),i&2048&&Es(n.alternate,n);break;default:ii(a,n)}t=t.sibling}}var li=8192;function hn(e,t,a){if(e.subtreeFlags&li)for(e=e.child;e!==null;)$r(e,t,a),e=e.sibling}function $r(e,t,a){switch(e.tag){case 26:hn(e,t,a),e.flags&li&&e.memoizedState!==null&&qp(a,At,e.memoizedState,e.memoizedProps);break;case 5:hn(e,t,a);break;case 3:case 4:var n=At;At=Cl(e.stateNode.containerInfo),hn(e,t,a),At=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=li,li=16777216,hn(e,t,a),li=n):hn(e,t,a));break;default:hn(e,t,a)}}function ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function oi(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Te=n,ad(n,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 0:case 11:case 15:oi(e),e.flags&2048&&sa(9,e,e.return);break;case 3:oi(e);break;case 12:oi(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ml(e)):oi(e);break;default:oi(e)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Te=n,ad(n,e)}ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),ml(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ml(t));break;default:ml(t)}e=e.sibling}}function ad(e,t){for(;Te!==null;){var a=Te;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:jn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Te=n;else e:for(a=e;Te!==null;){n=Te;var i=n.sibling,l=n.return;if(Zr(n),n===a){Te=null;break e}if(i!==null){i.return=l,Te=i;break e}Te=l}}}var Fm={getCacheForType:function(e){var t=we(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return we(ge).controller.signal}},Wm=typeof WeakMap=="function"?WeakMap:Map,I=0,oe=null,G=null,Q=0,$=0,nt=null,ua=!1,vn=!1,Ms=!1,kt=0,me=0,ca=0,Va=0,Ts=0,it=0,yn=0,si=null,Ze=null,Ds=!1,pl=0,nd=0,hl=1/0,vl=null,ra=null,Ee=0,da=null,gn=null,Zt=0,Cs=0,ws=null,id=null,ui=0,Rs=null;function lt(){return(I&2)!==0&&Q!==0?Q&-Q:g.T!==null?_s():Su()}function ld(){if(it===0)if((Q&536870912)===0||k){var e=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Ke(e,t,a){(e===oe&&($===2||$===9)||e.cancelPendingCommit!==null)&&(An(e,0),fa(e,Q,it,!1)),On(e,a),((I&2)===0||e!==oe)&&(e===oe&&((I&2)===0&&(Va|=a),me===4&&fa(e,Q,it,!1)),wt(e))}function od(e,t,a){if((I&6)!==0)throw Error(h(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rn(e,t),i=n?tp(e,t):xs(e,t,!0),l=n;do{if(i===0){vn&&!n&&fa(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!$m(a)){i=xs(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;i=si;var u=s.current.memoizedState.isDehydrated;if(u&&(An(s,o).flags|=256),o=xs(s,o,!1),o!==2){if(Ms&&!u){s.errorRecoveryDisabledLanes|=l,Va|=l,i=4;break e}l=Ze,Ze=i,l!==null&&(Ze===null?Ze=l:Ze.push.apply(Ze,l))}i=o}if(l=!1,i!==2)continue}}if(i===1){An(e,0),fa(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:fa(n,t,it,!ua);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(i=pl+300-Pe(),10<i)){if(fa(n,t,it,!ua),Ci(n,0,!0)!==0)break e;Zt=t,n.timeoutHandle=Bd(sd.bind(null,n,a,Ze,vl,Ds,t,it,Va,yn,ua,l,"Throttled",-0,0),i);break e}sd(n,a,Ze,vl,Ds,t,it,Va,yn,ua,l,null,-0,0)}}break}while(!0);wt(e)}function sd(e,t,a,n,i,l,o,s,u,m,y,S,p,v){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},$r(t,l,S);var D=(l&62914560)===l?pl-Pe():(l&4194048)===l?nd-Pe():0;if(D=Bp(S,D),D!==null){Zt=l,e.cancelPendingCommit=D(hd.bind(null,e,t,l,a,n,i,o,s,u,y,S,null,p,v)),fa(e,l,o,!m);return}}hd(e,t,l,a,n,i,o,s,u)}function $m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,a,n){t&=~Ts,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-We(i),o=1<<l;n[l]=-1,i&=~o}a!==0&&yu(e,a,t)}function yl(){return(I&6)===0?(ci(0),!1):!0}function Os(){if(G!==null){if($===0)var e=G.return;else e=G,Nt=xa=null,ko(e),cn=null,kn=0,e=G;for(;e!==null;)Hr(e.alternate,e),e=e.return;G=null}}function An(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ap(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,Os(),oe=e,G=a=Lt(e.current,null),Q=t,$=0,nt=null,ua=!1,vn=Rn(e,t),Ms=!1,yn=it=Ts=Va=ca=me=0,Ze=si=null,Ds=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-We(n),l=1<<i;t|=e[i],n&=~l}return kt=t,Hi(),a}function ud(e,t){B=null,g.H=$n,t===un||t===Zi?(t=Tc(),$=3):t===Lo?(t=Tc(),$=4):$=t===ss?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,G===null&&(me=1,ol(e,rt(t,e.current)))}function cd(){var e=tt.current;return e===null?!0:(Q&4194048)===Q?pt===null:(Q&62914560)===Q||(Q&536870912)!==0?e===pt:!1}function rd(){var e=g.H;return g.H=$n,e===null?$n:e}function dd(){var e=g.A;return g.A=Fm,e}function gl(){me=4,ua||(Q&4194048)!==Q&&tt.current!==null||(vn=!0),(ca&134217727)===0&&(Va&134217727)===0||oe===null||fa(oe,Q,it,!1)}function xs(e,t,a){var n=I;I|=2;var i=rd(),l=dd();(oe!==e||Q!==t)&&(vl=null,An(e,t)),t=!1;var o=me;e:do try{if($!==0&&G!==null){var s=G,u=nt;switch($){case 8:Os(),o=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=$;if($=0,nt=null,Sn(e,s,u,m),a&&vn){o=0;break e}break;default:m=$,$=0,nt=null,Sn(e,s,u,m)}}ep(),o=me;break}catch(y){ud(e,y)}while(!0);return t&&e.shellSuspendCounter++,Nt=xa=null,I=n,g.H=i,g.A=l,G===null&&(oe=null,Q=0,Hi()),o}function ep(){for(;G!==null;)fd(G)}function tp(e,t){var a=I;I|=2;var n=rd(),i=dd();oe!==e||Q!==t?(vl=null,hl=Pe()+500,An(e,t)):vn=Rn(e,t);e:do try{if($!==0&&G!==null){t=G;var l=nt;t:switch($){case 1:$=0,nt=null,Sn(e,t,l,1);break;case 2:case 9:if(Ec(l)){$=0,nt=null,md(t);break}t=function(){$!==2&&$!==9||oe!==e||($=7),wt(e)},l.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Ec(l)?($=0,nt=null,md(t)):($=0,nt=null,Sn(e,t,l,7));break;case 5:var o=null;switch(G.tag){case 26:o=G.memoizedState;case 5:case 27:var s=G;if(o?Wd(o):s.stateNode.complete){$=0,nt=null;var u=s.sibling;if(u!==null)G=u;else{var m=s.return;m!==null?(G=m,Al(m)):G=null}break t}}$=0,nt=null,Sn(e,t,l,5);break;case 6:$=0,nt=null,Sn(e,t,l,6);break;case 8:Os(),me=6;break e;default:throw Error(h(462))}}ap();break}catch(y){ud(e,y)}while(!0);return Nt=xa=null,g.H=n,g.A=i,I=a,G!==null?0:(oe=null,Q=0,Hi(),me)}function ap(){for(;G!==null&&!Df();)fd(G)}function fd(e){var t=qr(e.alternate,e,kt);e.memoizedProps=e.pendingProps,t===null?Al(e):G=t}function md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xr(a,t,t.pendingProps,t.type,void 0,Q);break;case 11:t=xr(a,t,t.pendingProps,t.type.render,t.ref,Q);break;case 5:ko(t);default:Hr(a,t),t=G=dc(t,kt),t=qr(a,t,kt)}e.memoizedProps=e.pendingProps,t===null?Al(e):G=t}function Sn(e,t,a,n){Nt=xa=null,ko(t),cn=null,kn=0;var i=t.return;try{if(Xm(e,i,t,a,Q)){me=1,ol(e,rt(a,e.current)),G=null;return}}catch(l){if(i!==null)throw G=i,l;me=1,ol(e,rt(a,e.current)),G=null;return}t.flags&32768?(k||n===1?e=!0:vn||(Q&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),pd(t,e)):Al(t)}function Al(e){var t=e;do{if((t.flags&32768)!==0){pd(t,ua);return}e=t.return;var a=Km(t.alternate,t,kt);if(a!==null){G=a;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);me===0&&(me=5)}function pd(e,t){do{var a=Jm(e.alternate,e);if(a!==null){a.flags&=32767,G=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=a}while(e!==null);me=6,G=null}function hd(e,t,a,n,i,l,o,s,u){e.cancelPendingCommit=null;do Sl();while(Ee!==0);if((I&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=go,Nf(e,a,l,o,s,u),e===oe&&(G=oe=null,Q=0),gn=t,da=e,Zt=a,Cs=l,ws=i,id=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,op(Ei,function(){return Sd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=g.T,g.T=null,i=M.p,M.p=2,o=I,I|=4;try{Im(e,t,a)}finally{I=o,M.p=i,g.T=n}}Ee=1,vd(),yd(),gd()}}function vd(){if(Ee===1){Ee=0;var e=da,t=gn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null;var n=M.p;M.p=2;var i=I;I|=4;try{Pr(t,e);var l=Qs,o=ac(e.containerInfo),s=l.focusedElem,u=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&tc(s.ownerDocument.documentElement,s)){if(u!==null&&mo(s)){var m=u.start,y=u.end;if(y===void 0&&(y=m),"selectionStart"in s)s.selectionStart=m,s.selectionEnd=Math.min(y,s.value.length);else{var S=s.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var v=p.getSelection(),D=s.textContent.length,U=Math.min(u.start,D),ie=u.end===void 0?U:Math.min(u.end,D);!v.extend&&U>ie&&(o=ie,ie=U,U=o);var d=ec(s,U),c=ec(s,ie);if(d&&c&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var f=S.createRange();f.setStart(d.node,d.offset),v.removeAllRanges(),U>ie?(v.addRange(f),v.extend(c.node,c.offset)):(f.setEnd(c.node,c.offset),v.addRange(f))}}}}for(S=[],v=s;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<S.length;s++){var A=S[s];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}zl=!!Ys,Qs=Ys=null}finally{I=i,M.p=n,g.T=a}}e.current=t,Ee=2}}function yd(){if(Ee===2){Ee=0;var e=da,t=gn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=g.T,g.T=null;var n=M.p;M.p=2;var i=I;I|=4;try{kr(e,t.alternate,t)}finally{I=i,M.p=n,g.T=a}}Ee=3}}function gd(){if(Ee===4||Ee===3){Ee=0,Cf();var e=da,t=gn,a=Zt,n=id;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,gn=da=null,Ad(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ra=null),Kl(a),t=t.stateNode,Fe&&typeof Fe.onCommitFiberRoot=="function")try{Fe.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=g.T,i=M.p,M.p=2,g.T=null;try{for(var l=e.onRecoverableError,o=0;o<n.length;o++){var s=n[o];l(s.value,{componentStack:s.stack})}}finally{g.T=t,M.p=i}}(Zt&3)!==0&&Sl(),wt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Rs?ui++:(ui=0,Rs=e):ui=0,ci(0)}}function Ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,jn(t)))}function Sl(){return vd(),yd(),gd(),Sd()}function Sd(){if(Ee!==5)return!1;var e=da,t=Cs;Cs=0;var a=Kl(Zt),n=g.T,i=M.p;try{M.p=32>a?32:a,g.T=null,a=ws,ws=null;var l=da,o=Zt;if(Ee=0,gn=da=null,Zt=0,(I&6)!==0)throw Error(h(331));var s=I;if(I|=4,td(l.current),Wr(l,l.current,o,a),I=s,ci(0,!1),Fe&&typeof Fe.onPostCommitFiberRoot=="function")try{Fe.onPostCommitFiberRoot(wn,l)}catch{}return!0}finally{M.p=i,g.T=n,Ad(e,t)}}function bd(e,t,a){t=rt(a,t),t=os(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(On(e,2),wt(e))}function ee(e,t,a){if(e.tag===3)bd(e,e,a);else for(;t!==null;){if(t.tag===3){bd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ra===null||!ra.has(n))){e=rt(a,e),a=Er(2),n=ia(t,a,2),n!==null&&(Mr(a,n,t,e),On(n,2),wt(n));break}}t=t.return}}function Us(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Wm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Ms=!0,i.add(a),e=np.bind(null,e,t,a),t.then(e,e))}function np(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,oe===e&&(Q&a)===a&&(me===4||me===3&&(Q&62914560)===Q&&300>Pe()-pl?(I&2)===0&&An(e,0):Ts|=a,yn===Q&&(yn=0)),wt(e)}function Ed(e,t){t===0&&(t=vu()),e=wa(e,t),e!==null&&(On(e,t),wt(e))}function ip(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ed(e,a)}function lp(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(t),Ed(e,a)}function op(e,t){return jl(e,t)}var bl=null,bn=null,zs=!1,El=!1,Ls=!1,ma=0;function wt(e){e!==bn&&e.next===null&&(bn===null?bl=bn=e:bn=bn.next=e),El=!0,zs||(zs=!0,up())}function ci(e,t){if(!Ls&&El){Ls=!0;do for(var a=!1,n=bl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var o=n.suspendedLanes,s=n.pingedLanes;l=(1<<31-We(42|e)+1)-1,l&=i&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Cd(n,l))}else l=Q,l=Ci(n,n===oe?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Rn(n,l)||(a=!0,Cd(n,l));n=n.next}while(a);Ls=!1}}function sp(){Md()}function Md(){El=zs=!1;var e=0;ma!==0&&gp()&&(e=ma);for(var t=Pe(),a=null,n=bl;n!==null;){var i=n.next,l=Td(n,t);l===0?(n.next=null,a===null?bl=i:a.next=i,i===null&&(bn=a)):(a=n,(e!==0||(l&3)!==0)&&(El=!0)),n=i}Ee!==0&&Ee!==5||ci(e),ma!==0&&(ma=0)}function Td(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-We(l),s=1<<o,u=i[o];u===-1?((s&a)===0||(s&n)!==0)&&(i[o]=_f(s,t)):u<=t&&(e.expiredLanes|=s),l&=~s}if(t=oe,a=Q,a=Ci(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Xl(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Xl(n),Kl(a)){case 2:case 8:a=pu;break;case 32:a=Ei;break;case 268435456:a=hu;break;default:a=Ei}return n=Dd.bind(null,e),a=jl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Xl(n),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sl()&&e.callbackNode!==a)return null;var n=Q;return n=Ci(e,e===oe?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(od(e,n,t),Td(e,Pe()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function Cd(e,t){if(Sl())return null;od(e,t,!0)}function up(){Sp(function(){(I&6)!==0?jl(mu,sp):Md()})}function _s(){if(ma===0){var e=on;e===0&&(e=Mi,Mi<<=1,(Mi&261888)===0&&(Mi=256)),ma=e}return ma}function wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xi(""+e)}function Rd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=wd((i[Ye]||null).action),o=n.submitter;o&&(t=(t=o[Ye]||null)?wd(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var s=new _i("action","action",null,n,i);e.push({event:s,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ma!==0){var u=o?Rd(i,o):new FormData(i);es(a,{pending:!0,data:u,method:i.method,action:l},null,u)}}else typeof l=="function"&&(s.preventDefault(),u=o?Rd(i,o):new FormData(i),es(a,{pending:!0,data:u,method:i.method,action:l},l,u))},currentTarget:i}]})}}for(var Ns=0;Ns<yo.length;Ns++){var qs=yo[Ns],rp=qs.toLowerCase(),dp=qs[0].toUpperCase()+qs.slice(1);gt(rp,"on"+dp)}gt(lc,"onAnimationEnd"),gt(oc,"onAnimationIteration"),gt(sc,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(wm,"onTransitionRun"),gt(Rm,"onTransitionStart"),gt(Om,"onTransitionCancel"),gt(uc,"onTransitionEnd"),ka("onMouseEnter",["mouseout","mouseover"]),ka("onMouseLeave",["mouseout","mouseover"]),ka("onPointerEnter",["pointerout","pointerover"]),ka("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function Od(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var o=n.length-1;0<=o;o--){var s=n[o],u=s.instance,m=s.currentTarget;if(s=s.listener,u!==l&&i.isPropagationStopped())break e;l=s,i.currentTarget=m;try{l(i)}catch(y){Bi(y)}i.currentTarget=null,l=u}else for(o=0;o<n.length;o++){if(s=n[o],u=s.instance,m=s.currentTarget,s=s.listener,u!==l&&i.isPropagationStopped())break e;l=s,i.currentTarget=m;try{l(i)}catch(y){Bi(y)}i.currentTarget=null,l=u}}}}function Y(e,t){var a=t[Jl];a===void 0&&(a=t[Jl]=new Set);var n=e+"__bubble";a.has(n)||(xd(t,e,2,!1),a.add(n))}function Bs(e,t,a){var n=0;t&&(n|=4),xd(a,e,n,t)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Hs(e){if(!e[Ml]){e[Ml]=!0,Mu.forEach(function(a){a!=="selectionchange"&&(fp.has(a)||Bs(a,!1,e),Bs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ml]||(t[Ml]=!0,Bs("selectionchange",!1,t))}}function xd(e,t,a,n){switch(of(t)){case 2:var i=Gp;break;case 8:i=Yp;break;default:i=$s}a=i.bind(null,t,a,e),i=void 0,!no||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Vs(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var o=n.tag;if(o===3||o===4){var s=n.stateNode.containerInfo;if(s===i)break;if(o===4)for(o=n.return;o!==null;){var u=o.tag;if((u===3||u===4)&&o.stateNode.containerInfo===i)return;o=o.return}for(;s!==null;){if(o=Qa(s),o===null)return;if(u=o.tag,u===5||u===6||u===26||u===27){n=l=o;continue e}s=s.parentNode}}n=n.return}Nu(function(){var m=l,y=to(a),S=[];e:{var p=cc.get(e);if(p!==void 0){var v=_i,D=e;switch(e){case"keypress":if(zi(a)===0)break e;case"keydown":case"keyup":v=lm;break;case"focusin":D="focus",v=so;break;case"focusout":D="blur",v=so;break;case"beforeblur":case"afterblur":v=so;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=um;break;case lc:case oc:case sc:v=Pf;break;case uc:v=rm;break;case"scroll":case"scrollend":v=kf;break;case"wheel":v=fm;break;case"copy":case"cut":case"paste":v=Wf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gu;break;case"toggle":case"beforetoggle":v=pm}var U=(t&4)!==0,ie=!U&&(e==="scroll"||e==="scrollend"),d=U?p!==null?p+"Capture":null:p;U=[];for(var c=m,f;c!==null;){var A=c;if(f=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||f===null||d===null||(A=zn(c,d),A!=null&&U.push(di(c,A,f))),ie)break;c=c.return}0<U.length&&(p=new v(p,D,null,a,y),S.push({event:p,listeners:U}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&a!==eo&&(D=a.relatedTarget||a.fromElement)&&(Qa(D)||D[Ya]))break e;if((v||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,v?(D=a.relatedTarget||a.toElement,v=m,D=D?Qa(D):null,D!==null&&(ie=J(D),U=D.tag,D!==ie||U!==5&&U!==27&&U!==6)&&(D=null)):(v=null,D=m),v!==D)){if(U=Hu,A="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(U=Gu,A="onPointerLeave",d="onPointerEnter",c="pointer"),ie=v==null?p:Un(v),f=D==null?p:Un(D),p=new U(A,c+"leave",v,a,y),p.target=ie,p.relatedTarget=f,A=null,Qa(y)===m&&(U=new U(d,c+"enter",D,a,y),U.target=f,U.relatedTarget=ie,A=U),ie=A,v&&D)t:{for(U=mp,d=v,c=D,f=0,A=d;A;A=U(A))f++;A=0;for(var O=c;O;O=U(O))A++;for(;0<f-A;)d=U(d),f--;for(;0<A-f;)c=U(c),A--;for(;f--;){if(d===c||c!==null&&d===c.alternate){U=d;break t}d=U(d),c=U(c)}U=null}else U=null;v!==null&&Ud(S,p,v,U,!1),D!==null&&ie!==null&&Ud(S,ie,D,U,!0)}}e:{if(p=m?Un(m):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var Z=Ju;else if(Zu(p))if(Iu)Z=Tm;else{Z=Em;var R=bm}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&$l(m.elementType)&&(Z=Ju):Z=Mm;if(Z&&(Z=Z(e,m))){Ku(S,Z,a,y);break e}R&&R(e,p,m),e==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&Wl(p,"number",p.value)}switch(R=m?Un(m):window,e){case"focusin":(Zu(R)||R.contentEditable==="true")&&(Fa=R,po=m,Gn=null);break;case"focusout":Gn=po=Fa=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,nc(S,a,y);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":nc(S,a,y)}var H;if(co)e:{switch(e){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else Pa?Xu(e,a)&&(j="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(j="onCompositionStart");j&&(Yu&&a.locale!=="ko"&&(Pa||j!=="onCompositionStart"?j==="onCompositionEnd"&&Pa&&(H=qu()):(Ft=y,io="value"in Ft?Ft.value:Ft.textContent,Pa=!0)),R=Tl(m,j),0<R.length&&(j=new Vu(j,e,null,a,y),S.push({event:j,listeners:R}),H?j.data=H:(H=ku(a),H!==null&&(j.data=H)))),(H=vm?ym(e,a):gm(e,a))&&(j=Tl(m,"onBeforeInput"),0<j.length&&(R=new Vu("onBeforeInput","beforeinput",null,a,y),S.push({event:R,listeners:j}),R.data=H)),cp(S,e,m,a,y)}Od(S,t)})}function di(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=zn(e,a),i!=null&&n.unshift(di(e,i,l)),i=zn(e,t),i!=null&&n.push(di(e,i,l))),e.tag===3)return n;e=e.return}return[]}function mp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,a,n,i){for(var l=t._reactName,o=[];a!==null&&a!==n;){var s=a,u=s.alternate,m=s.stateNode;if(s=s.tag,u!==null&&u===n)break;s!==5&&s!==26&&s!==27||m===null||(u=m,i?(m=zn(a,l),m!=null&&o.unshift(di(a,m,u))):i||(m=zn(a,l),m!=null&&o.push(di(a,m,u)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var pp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function zd(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(hp,"")}function Ld(e,t){return t=zd(t),zd(e)===t}function ne(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ka(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ka(e,""+n);break;case"className":Ri(e,"class",n);break;case"tabIndex":Ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,a,n);break;case"style":Lu(e,n,l);break;case"data":if(t!=="object"){Ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=xi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",i.name,i,null),ne(e,t,"formEncType",i.formEncType,i,null),ne(e,t,"formMethod",i.formMethod,i,null),ne(e,t,"formTarget",i.formTarget,i,null)):(ne(e,t,"encType",i.encType,i,null),ne(e,t,"method",i.method,i,null),ne(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=xi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=Ut);break;case"onScroll":n!=null&&Y("scroll",e);break;case"onScrollEnd":n!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=xi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Y("beforetoggle",e),Y("toggle",e),wi(e,"popover",n);break;case"xlinkActuate":xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":wi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=jf.get(a)||a,wi(e,a,n))}}function Gs(e,t,a,n,i,l){switch(a){case"style":Lu(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ka(e,n):(typeof n=="number"||typeof n=="bigint")&&Ka(e,""+n);break;case"onScroll":n!=null&&Y("scroll",e);break;case"onScrollEnd":n!=null&&Y("scrollend",e);break;case"onClick":n!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[Ye]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):wi(e,a,n)}}}function Oe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ne(e,t,l,o,a,null)}}i&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":Y("invalid",e);var s=l=o=i=null,u=null,m=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":i=y;break;case"type":o=y;break;case"checked":u=y;break;case"defaultChecked":m=y;break;case"value":l=y;break;case"defaultValue":s=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:ne(e,t,n,y,a,null)}}Ou(e,l,s,u,m,o,i,!1);return;case"select":Y("invalid",e),n=o=l=null;for(i in a)if(a.hasOwnProperty(i)&&(s=a[i],s!=null))switch(i){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":n=s;default:ne(e,t,i,s,a,null)}t=l,a=o,e.multiple=!!n,t!=null?Za(e,!!n,t,!1):a!=null&&Za(e,!!n,a,!0);return;case"textarea":Y("invalid",e),l=i=n=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":n=s;break;case"defaultValue":i=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:ne(e,t,o,s,a,null)}Uu(e,n,i,l);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,u,n,a,null)}return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(n=0;n<ri.length;n++)Y(ri[n],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ne(e,t,m,n,a,null)}return;default:if($l(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Gs(e,t,y,n,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(n=a[s],n!=null&&ne(e,t,s,n,a,null))}function vp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,o=null,s=null,u=null,m=null,y=null;for(v in a){var S=a[v];if(a.hasOwnProperty(v)&&S!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=S;default:n.hasOwnProperty(v)||ne(e,t,v,null,n,S)}}for(var p in n){var v=n[p];if(S=a[p],n.hasOwnProperty(p)&&(v!=null||S!=null))switch(p){case"type":l=v;break;case"name":i=v;break;case"checked":m=v;break;case"defaultChecked":y=v;break;case"value":o=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==S&&ne(e,t,p,v,n,S)}}Fl(e,o,s,u,m,y,l,i);return;case"select":v=o=s=p=null;for(l in a)if(u=a[l],a.hasOwnProperty(l)&&u!=null)switch(l){case"value":break;case"multiple":v=u;default:n.hasOwnProperty(l)||ne(e,t,l,null,n,u)}for(i in n)if(l=n[i],u=a[i],n.hasOwnProperty(i)&&(l!=null||u!=null))switch(i){case"value":p=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==u&&ne(e,t,i,l,n,u)}t=s,a=o,n=v,p!=null?Za(e,!!a,p,!1):!!n!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":v=p=null;for(s in a)if(i=a[s],a.hasOwnProperty(s)&&i!=null&&!n.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ne(e,t,s,null,n,i)}for(o in n)if(i=n[o],l=a[o],n.hasOwnProperty(o)&&(i!=null||l!=null))switch(o){case"value":p=i;break;case"defaultValue":v=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(h(91));break;default:i!==l&&ne(e,t,o,i,n,l)}xu(e,p,v);return;case"option":for(var D in a)if(p=a[D],a.hasOwnProperty(D)&&p!=null&&!n.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:ne(e,t,D,null,n,p)}for(u in n)if(p=n[u],v=a[u],n.hasOwnProperty(u)&&p!==v&&(p!=null||v!=null))switch(u){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ne(e,t,u,p,n,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)p=a[U],a.hasOwnProperty(U)&&p!=null&&!n.hasOwnProperty(U)&&ne(e,t,U,null,n,p);for(m in n)if(p=n[m],v=a[m],n.hasOwnProperty(m)&&p!==v&&(p!=null||v!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:ne(e,t,m,p,n,v)}return;default:if($l(t)){for(var ie in a)p=a[ie],a.hasOwnProperty(ie)&&p!==void 0&&!n.hasOwnProperty(ie)&&Gs(e,t,ie,void 0,n,p);for(y in n)p=n[y],v=a[y],!n.hasOwnProperty(y)||p===v||p===void 0&&v===void 0||Gs(e,t,y,p,n,v);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!n.hasOwnProperty(d)&&ne(e,t,d,null,n,p);for(S in n)p=n[S],v=a[S],!n.hasOwnProperty(S)||p===v||p==null&&v==null||ne(e,t,S,p,n,v)}function _d(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,o=i.initiatorType,s=i.duration;if(l&&s&&_d(o)){for(o=0,s=i.responseEnd,n+=1;n<a.length;n++){var u=a[n],m=u.startTime;if(m>s)break;var y=u.transferSize,S=u.initiatorType;y&&_d(S)&&(u=u.responseEnd,o+=y*(u<s?1:(s-m)/(u-m)))}if(--n,t+=8*(l+o)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Ys=null,Qs=null;function Dl(e){return e.nodeType===9?e:e.ownerDocument}function Nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function js(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=null;function gp(){var e=window.event;return e&&e.type==="popstate"?e===Xs?!1:(Xs=e,!0):(Xs=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(bp)}:Bd;function bp(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Vd(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Dn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")fi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,fi(a);for(var l=a.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[xn]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&fi(e.ownerDocument.body);a=i}while(a);Dn(t)}function Gd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function ks(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":ks(a),Il(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ep(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[xn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function Mp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function Yd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function Zs(e){return e.data==="$?"||e.data==="$~"}function Ks(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Js=null;function Qd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function jd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xd(e,t,a){switch(t=Dl(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Il(e)}var vt=new Map,kd=new Set;function Cl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=M.d;M.d={f:Dp,r:Cp,D:wp,C:Rp,L:Op,m:xp,X:zp,S:Up,M:Lp};function Dp(){var e=Kt.f(),t=yl();return e||t}function Cp(e){var t=ja(e);t!==null&&t.tag===5&&t.type==="form"?ur(t):Kt.r(e)}var En=typeof document>"u"?null:document;function Zd(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var i=ut(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),kd.has(i)||(kd.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Oe(t,"link",e),Me(t),n.head.appendChild(t)))}}function wp(e){Kt.D(e),Zd("dns-prefetch",e,null)}function Rp(e,t){Kt.C(e,t),Zd("preconnect",e,t)}function Op(e,t,a){Kt.L(e,t,a);var n=En;if(n&&e&&t){var i='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ut(a.imageSizes)+'"]')):i+='[href="'+ut(e)+'"]';var l=i;switch(t){case"style":l=Mn(e);break;case"script":l=Tn(e)}vt.has(l)||(e=L({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(mi(l))||t==="script"&&n.querySelector(pi(l))||(t=n.createElement("link"),Oe(t,"link",e),Me(t),n.head.appendChild(t)))}}function xp(e,t){Kt.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Tn(e)}if(!vt.has(l)&&(e=L({rel:"modulepreload",href:e},t),vt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pi(l)))return}n=a.createElement("link"),Oe(n,"link",e),Me(n),a.head.appendChild(n)}}}function Up(e,t,a){Kt.S(e,t,a);var n=En;if(n&&e){var i=Xa(n).hoistableStyles,l=Mn(e);t=t||"default";var o=i.get(l);if(!o){var s={loading:0,preload:null};if(o=n.querySelector(mi(l)))s.loading=5;else{e=L({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(l))&&Is(e,a);var u=o=n.createElement("link");Me(u),Oe(u,"link",e),u._p=new Promise(function(m,y){u.onload=m,u.onerror=y}),u.addEventListener("load",function(){s.loading|=1}),u.addEventListener("error",function(){s.loading|=2}),s.loading|=4,wl(o,t,n)}o={type:"stylesheet",instance:o,count:1,state:s},i.set(l,o)}}}function zp(e,t){Kt.X(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,i=Tn(e),l=n.get(i);l||(l=a.querySelector(pi(i)),l||(e=L({src:e,async:!0},t),(t=vt.get(i))&&Ps(e,t),l=a.createElement("script"),Me(l),Oe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Lp(e,t){Kt.M(e,t);var a=En;if(a&&e){var n=Xa(a).hoistableScripts,i=Tn(e),l=n.get(i);l||(l=a.querySelector(pi(i)),l||(e=L({src:e,async:!0,type:"module"},t),(t=vt.get(i))&&Ps(e,t),l=a.createElement("script"),Me(l),Oe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Kd(e,t,a,n){var i=(i=V.current)?Cl(i):null;if(!i)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Mn(a.href),a=Xa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mn(a.href);var l=Xa(i).hoistableStyles,o=l.get(e);if(o||(i=i.ownerDocument||i,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=i.querySelector(mi(e)))&&!l._p&&(o.instance=l,o.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),l||_p(i,e,a,o.state))),t&&n===null)throw Error(h(528,""));return o}if(t&&n!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tn(a),a=Xa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Mn(e){return'href="'+ut(e)+'"'}function mi(e){return'link[rel="stylesheet"]['+e+"]"}function Jd(e){return L({},e,{"data-precedence":e.precedence,precedence:null})}function _p(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Oe(t,"link",a),Me(t),e.head.appendChild(t))}function Tn(e){return'[src="'+ut(e)+'"]'}function pi(e){return"script[async]"+e}function Id(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,Me(n),n;var i=L({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Me(n),Oe(n,"style",i),wl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Mn(a.href);var l=e.querySelector(mi(i));if(l)return t.state.loading|=4,t.instance=l,Me(l),l;n=Jd(a),(i=vt.get(i))&&Is(n,i),l=(e.ownerDocument||e).createElement("link"),Me(l);var o=l;return o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),Oe(l,"link",n),t.state.loading|=4,wl(l,a.precedence,e),t.instance=l;case"script":return l=Tn(a.src),(i=e.querySelector(pi(l)))?(t.instance=i,Me(i),i):(n=a,(i=vt.get(l))&&(n=L({},a),Ps(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Me(i),Oe(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,wl(n,a.precedence,e));return t.instance}function wl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,o=0;o<n.length;o++){var s=n[o];if(s.dataset.precedence===t)l=s;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Is(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rl=null;function Pd(e,t,a){if(Rl===null){var n=new Map,i=Rl=new Map;i.set(a,n)}else i=Rl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[xn]||l[De]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var s=n.get(o);s?s.push(l):n.set(o,[l])}}return n}function Fd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Np(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Wd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Mn(n.href),l=t.querySelector(mi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ol.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Me(l);return}l=t.ownerDocument||t,n=Jd(n),(i=vt.get(i))&&Is(n,i),l=l.createElement("link"),Me(l);var o=l;o._p=new Promise(function(s,u){o.onload=s,o.onerror=u}),Oe(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ol.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Fs=0;function Bp(e,t){return e.stylesheets&&e.count===0&&Ul(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Fs===0&&(Fs=62500*yp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Fs?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ul(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xl=null;function Ul(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xl=new Map,t.forEach(Hp,e),xl=null,Ol.call(e))}function Hp(e,t){if(!(t.state.loading&4)){var a=xl.get(e);if(a)var n=a.get(null);else{a=new Map,xl.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var o=i[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),n=o)}n&&a.set(null,n)}i=t.instance,o=i.getAttribute("data-precedence"),l=a.get(o)||n,l===n&&a.set(null,i),a.set(o,i),this.count++,n=Ol.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:xe,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function Vp(e,t,a,n,i,l,o,s,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=kl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=kl(0),this.hiddenUpdates=kl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function $d(e,t,a,n,i,l,o,s,u,m,y,S){return e=new Vp(e,t,a,o,u,m,y,S,s),t=1,l===!0&&(t|=24),l=et(3,null,null,t),e.current=l,l.stateNode=e,t=xo(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},_o(l),e}function ef(e){return e?(e=en,e):en}function tf(e,t,a,n,i,l){i=ef(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ia(e,n,t),a!==null&&(Ke(a,e,t),Kn(a,e,t))}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Ws(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function nf(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&Ke(t,e,67108864),Ws(e,67108864)}}function lf(e){if(e.tag===13||e.tag===31){var t=lt();t=Zl(t);var a=wa(e,t);a!==null&&Ke(a,e,t),Ws(e,t)}}var zl=!0;function Gp(e,t,a,n){var i=g.T;g.T=null;var l=M.p;try{M.p=2,$s(e,t,a,n)}finally{M.p=l,g.T=i}}function Yp(e,t,a,n){var i=g.T;g.T=null;var l=M.p;try{M.p=8,$s(e,t,a,n)}finally{M.p=l,g.T=i}}function $s(e,t,a,n){if(zl){var i=eu(n);if(i===null)Vs(e,t,n,Ll,a),sf(e,n);else if(jp(i,e,t,a,n))n.stopPropagation();else if(sf(e,n),t&4&&-1<Qp.indexOf(e)){for(;i!==null;){var l=ja(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Ea(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var u=1<<31-We(o);s.entanglements[1]|=u,o&=~u}wt(l),(I&6)===0&&(hl=Pe()+500,ci(0))}}break;case 31:case 13:s=wa(l,2),s!==null&&Ke(s,l,2),yl(),Ws(l,2)}if(l=eu(n),l===null&&Vs(e,t,n,Ll,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Vs(e,t,n,null,a)}}function eu(e){return e=to(e),tu(e)}var Ll=null;function tu(e){if(Ll=null,e=Qa(e),e!==null){var t=J(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=pe(t),e!==null)return e;e=null}else if(a===31){if(e=ze(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return Ll=e,null}function of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wf()){case mu:return 2;case pu:return 8;case Ei:case Rf:return 32;case hu:return 268435456;default:return 32}default:return 32}}var au=!1,ha=null,va=null,ya=null,vi=new Map,yi=new Map,ga=[],Qp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function gi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=ja(t),t!==null&&nf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function jp(e,t,a,n,i){switch(t){case"focusin":return ha=gi(ha,e,t,a,n,i),!0;case"dragenter":return va=gi(va,e,t,a,n,i),!0;case"mouseover":return ya=gi(ya,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return vi.set(l,gi(vi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,yi.set(l,gi(yi.get(l)||null,e,t,a,n,i)),!0}return!1}function uf(e){var t=Qa(e.target);if(t!==null){var a=J(t);if(a!==null){if(t=a.tag,t===13){if(t=pe(a),t!==null){e.blockedOn=t,bu(e.priority,function(){lf(a)});return}}else if(t===31){if(t=ze(a),t!==null){e.blockedOn=t,bu(e.priority,function(){lf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _l(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);eo=n,a.target.dispatchEvent(n),eo=null}else return t=ja(a),t!==null&&nf(t),e.blockedOn=a,!1;t.shift()}return!0}function cf(e,t,a){_l(e)&&a.delete(t)}function Xp(){au=!1,ha!==null&&_l(ha)&&(ha=null),va!==null&&_l(va)&&(va=null),ya!==null&&_l(ya)&&(ya=null),vi.forEach(cf),yi.forEach(cf)}function Nl(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,Xp)))}var ql=null;function rf(e){ql!==e&&(ql=e,C.unstable_scheduleCallback(C.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(tu(n||a)===null)continue;break}var l=ja(a);l!==null&&(e.splice(t,3),t-=3,es(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Dn(e){function t(u){return Nl(u,e)}ha!==null&&Nl(ha,e),va!==null&&Nl(va,e),ya!==null&&Nl(ya,e),vi.forEach(t),yi.forEach(t);for(var a=0;a<ga.length;a++){var n=ga[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ga.length&&(a=ga[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],o=i[Ye]||null;if(typeof l=="function")o||rf(a);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(i=l,o=l[Ye]||null)s=o.formAction;else if(tu(i)!==null)continue}else s=o.action;typeof s=="function"?a[n+1]=s:(a.splice(n,3),n-=3),rf(a)}}}function df(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return i=o})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function nu(e){this._internalRoot=e}Bl.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,n=lt();tf(a,n,e,t,null,null)},Bl.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tf(e.current,2,null,e,null,null),yl(),t[Ya]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ga.length&&t!==0&&t<ga[a].priority;a++);ga.splice(a,0,e),a===0&&uf(e)}};var ff=de.version;if(ff!=="19.2.7")throw Error(h(527,ff,"19.2.7"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=E(t),e=e!==null?F(e):null,e=e===null?null:e.stateNode,e};var kp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{wn=Hl.inject(kp),Fe=Hl}catch{}}return Si.createRoot=function(e,t){if(!z(e))throw Error(h(299));var a=!1,n="",i=gr,l=Ar,o=Sr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$d(e,1,!1,null,null,a,n,null,i,l,o,df),e[Ya]=t.current,Hs(e),new nu(t)},Si.hydrateRoot=function(e,t,a){if(!z(e))throw Error(h(299));var n=!1,i="",l=gr,o=Ar,s=Sr,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=$d(e,1,!0,t,a??null,n,i,u,l,o,s,df),t.context=ef(null),a=t.current,n=lt(),n=Zl(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,On(t,a),wt(t),e[Ya]=t.current,Hs(e),new Bl(t)},Si.version="19.2.7",Si}var Ef;function th(){if(Ef)return ou.exports;Ef=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(de){console.error(de)}}return C(),ou.exports=eh(),ou.exports}var ah=th();function nh(){const[C,de]=Mf.useState(null),P=[{id:1,question:"1. Explain the Mobility Landscape. Discuss the characteristics and importance of mobile computing.",answer:"",codeExample:`
============================================================
 Explain the Mobility Landscape. Discuss the Characteristics
         and Importance of Mobile Computing.
============================================================


============================================================
What is Mobility Landscape?
============================================================

The Mobility Landscape refers to the environment where mobile
devices, wireless networks, mobile applications, and cloud
services work together to provide information and services
anytime and anywhere.

It includes smartphones, tablets, laptops, wearable devices,
mobile apps, Wi-Fi, Bluetooth, 4G, and 5G networks.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Mobility Landscape is the ecosystem of mobile devices,
wireless communication, mobile applications, and cloud
technologies that enables users to access information and
services from anywhere at any time.


============================================================
Components of Mobility Landscape
============================================================

------------------------------------------------------------
1. Mobile Devices
------------------------------------------------------------

• Smartphones
• Tablets
• Laptops
• Smartwatches

------------------------------------------------------------
2. Wireless Networks
------------------------------------------------------------

• Wi-Fi
• Bluetooth
• 4G
• 5G

------------------------------------------------------------
3. Mobile Applications
------------------------------------------------------------

• Banking apps
• Shopping apps
• Social media apps
• Educational apps

------------------------------------------------------------
4. Cloud Services
------------------------------------------------------------

• Online storage
• Data backup
• Cloud computing


============================================================
Characteristics of Mobile Computing
============================================================

------------------------------------------------------------
1. Portability
------------------------------------------------------------

Mobile devices are lightweight and easy to carry anywhere.

------------------------------------------------------------
2. Mobility
------------------------------------------------------------

Users can access information while moving from one place to
another.

------------------------------------------------------------
3. Wireless Connectivity
------------------------------------------------------------

Uses Wi-Fi, Bluetooth, 4G, or 5G instead of wired connections.

------------------------------------------------------------
4. Anytime, Anywhere Access
------------------------------------------------------------

Users can access data and services at any time from any
location.

------------------------------------------------------------
5. Personalization
------------------------------------------------------------

Mobile devices store personal settings, contacts, and
preferences.

------------------------------------------------------------
6. Instant Communication
------------------------------------------------------------

Supports calls, messages, emails, and video conferencing in
real time.

------------------------------------------------------------
7. Location Awareness
------------------------------------------------------------

Uses GPS to provide location-based services like maps and
navigation.

------------------------------------------------------------
8. Synchronization
------------------------------------------------------------

Data is automatically synchronized with cloud services across
devices.


============================================================
Importance of Mobile Computing
============================================================

------------------------------------------------------------
1. Easy Communication
------------------------------------------------------------

Enables instant communication through calls, messages, and
emails.

------------------------------------------------------------
2. Business Productivity
------------------------------------------------------------

Employees can work remotely and access company data.

------------------------------------------------------------
3. Online Banking
------------------------------------------------------------

Allows users to transfer money and pay bills using mobile
apps.

------------------------------------------------------------
4. Education
------------------------------------------------------------

Students can attend online classes and access study
materials.

------------------------------------------------------------
5. Healthcare
------------------------------------------------------------

Doctors can monitor patients and provide telemedicine
services.

------------------------------------------------------------
6. Entertainment
------------------------------------------------------------

Users can watch videos, play games, and listen to music
anywhere.

------------------------------------------------------------
7. Navigation
------------------------------------------------------------

GPS helps users find locations and directions.

------------------------------------------------------------
8. E-Commerce
------------------------------------------------------------

Users can shop online using mobile applications.


============================================================
Advantages of Mobile Computing
============================================================

• Access information anytime and anywhere.
• Fast communication.
• Improves business efficiency.
• Supports remote work and online learning.
• Easy access to online services.
• Saves time and increases productivity.


============================================================
Disadvantages of Mobile Computing
============================================================

• Security and privacy risks.
• Battery life limitations.
• Depends on network availability.
• Small screen size.
• Data usage costs.


============================================================
Applications of Mobile Computing
============================================================

• Mobile Banking
• Online Shopping
• Healthcare
• Education
• Navigation (GPS)
• Social Media
• Food Delivery Apps
• Ride Booking Apps


============================================================
Exam Definition (2 Marks)
============================================================

Mobility Landscape is the combination of mobile devices,
wireless networks, mobile applications, and cloud services
that allows users to access information and services anytime
and anywhere.


============================================================
5-Mark Summary
============================================================

Mobility Landscape is the ecosystem of mobile devices,
wireless communication, mobile apps, and cloud services.

------------------------------------------------------------
Characteristics of Mobile Computing
------------------------------------------------------------

• Portability
• Mobility
• Wireless Connectivity
• Anytime, Anywhere Access
• Personalization
• Instant Communication
• Location Awareness
• Synchronization

------------------------------------------------------------
Importance of Mobile Computing
------------------------------------------------------------

• Easy communication
• Business productivity
• Online banking
• Education
• Healthcare
• Entertainment
• Navigation
• E-commerce

Mobile computing makes life faster, more convenient, and
connected, enabling users to access services from anywhere
using mobile devices.
      `},{id:2,question:"2. Explain Mobile Platforms. Compare Android, iOS, and Windows Mobile.",answer:"",codeExample:`
============================================================
              Explain Mobile Platforms
      Compare Android, iOS, and Windows Mobile
============================================================

============================================================
What is a Mobile Platform?
============================================================

A Mobile Platform is an operating system (OS) and software
environment that allows mobile devices to run applications
and perform various tasks such as calling, messaging,
browsing, gaming, and using apps.

Examples of mobile platforms are Android, iOS, and
Windows Mobile.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Mobile Platform is an operating system and software
environment that manages the hardware of a mobile device and
provides a platform for running mobile applications.


============================================================
Types of Mobile Platforms
============================================================

============================================================
1. Android
============================================================

• Developed by Google.
• Open-source operating system.
• Based on the Linux kernel.
• Used by brands like Samsung, Xiaomi, OnePlus, Vivo,
  Oppo, Motorola, etc.
• Applications are developed mainly using Java or Kotlin.

------------------------------------------------------------
Features
------------------------------------------------------------

• Open-source.
• Supports millions of apps through the Google Play Store.
• Highly customizable.
• Supports multitasking.
• Available on many brands of smartphones.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Free and open-source.
• Large number of apps.
• Supports many devices.
• Easy customization.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Higher risk of malware compared to iOS.
• Different device manufacturers may delay software updates.


============================================================
2. iOS
============================================================

• Developed by Apple.
• Used only on iPhone and iPad.
• Closed-source operating system.
• Applications are developed using Swift or Objective-C.

------------------------------------------------------------
Features
------------------------------------------------------------

• High security.
• Smooth performance.
• Regular software updates.
• Excellent integration with Apple devices.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Very secure.
• Fast and stable.
• Excellent user experience.
• Timely updates from Apple.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Expensive devices.
• Limited customization.
• Runs only on Apple devices.


============================================================
3. Windows Mobile
============================================================

• Developed by Microsoft.
• Designed for Windows-based smartphones.
• Supported applications developed using C# and .NET.
• Now officially discontinued.

------------------------------------------------------------
Features
------------------------------------------------------------

• Familiar Windows interface.
• Integration with Microsoft Office.
• Good security.
• Easy synchronization with Windows PCs.

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy integration with Microsoft products.
• User-friendly interface.
• Good productivity tools.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Limited number of apps.
• Small market share.
• Official support has ended.


============================================================
Comparison of Android, iOS, and Windows Mobile
============================================================

| Feature              | Android                 | iOS                 | Windows Mobile          |
| ---------------------| ----------------------- | ------------------- | ----------------------- |
| Developer            | Google                  | Apple               | Microsoft               |
| License              | Open-source             | Closed-source       | Closed-source           |
| Programming Language | Java, Kotlin            | Swift, Objective-C  | C#, .NET                |
| Devices              | Many brands             | Apple devices only  | Windows phones          |
| App Store            | Google Play Store       | Apple App Store     | Microsoft Store         |
| Customization        | High                    | Limited             | Moderate                |
| Security             | Good                    | Very High           | Good                    |
| Market Share         | Highest                 | Second Highest      | Very Low (Discontinued) |
| Updates              | Depends on manufacturer | Directly from Apple | Discontinued            |


============================================================
Advantages of Mobile Platforms
============================================================

• Easy communication.
• Supports mobile applications.
• Internet access.
• Multimedia support.
• GPS and navigation.
• Online banking and shopping.


============================================================
Applications of Mobile Platforms
============================================================

• Social media
• Mobile banking
• Online shopping
• Education
• Healthcare
• Gaming
• Business applications
• Entertainment


============================================================
Exam Definition (2 Marks)
============================================================

A Mobile Platform is an operating system that manages mobile
device hardware and software and allows users to run mobile
applications. Popular mobile platforms are Android, iOS,
and Windows Mobile.


============================================================
5-Mark Summary
============================================================

A Mobile Platform is the operating system of a mobile device.

------------------------------------------------------------
Android
------------------------------------------------------------

• Developed by Google.
• Open-source.
• Uses Java and Kotlin.
• Highly customizable.

------------------------------------------------------------
iOS
------------------------------------------------------------

• Developed by Apple.
• Closed-source.
• Uses Swift and Objective-C.
• High security and performance.

------------------------------------------------------------
Windows Mobile
------------------------------------------------------------

• Developed by Microsoft.
• Uses C# and .NET.
• Integrated with Microsoft services.
• Officially discontinued.

------------------------------------------------------------
Comparison
------------------------------------------------------------

Android offers flexibility and customization, iOS provides
strong security and smooth performance, while Windows Mobile
focused on Microsoft integration but is no longer supported.
      
      `},{id:3,question:"3. Explain Mobile Application Development Life Cycle (Mobile App Development Process).",answer:"",codeExample:`
============================================================
      Mobile Application Development Life Cycle (MADLC)
============================================================

============================================================
What is Mobile Application Development Life Cycle (MADLC)?
============================================================

The Mobile Application Development Life Cycle (MADLC) is a
step-by-step process used to design, develop, test, deploy,
and maintain a mobile application.

It helps developers create high-quality, user-friendly, and
reliable mobile apps.


============================================================
Definition (2 Marks)
============================================================

The Mobile Application Development Life Cycle (MADLC) is the
process of planning, designing, developing, testing,
deploying, and maintaining a mobile application.


============================================================
Phases of Mobile Application Development Life Cycle
============================================================

------------------------------------------------------------
1. Requirement Analysis
------------------------------------------------------------

• Collect the client's requirements.
• Identify the purpose of the app.
• Decide the target users and platform (Android or iOS).
• Prepare project requirements.

Example

A client wants a Food Delivery App with login, online payment,
and order tracking.


------------------------------------------------------------
2. Planning
------------------------------------------------------------

• Create the project plan.
• Decide budget and timeline.
• Select programming language and development tools.
• Assign tasks to the development team.

Example

Choose:

• Android Studio
• Java/Kotlin
• Firebase Database


------------------------------------------------------------
3. UI/UX Design
------------------------------------------------------------

• Design the app screens.
• Create wireframes and prototypes.
• Focus on attractive and user-friendly interfaces.

Example

Design:

• Login Screen
• Home Screen
• Cart Screen
• Payment Screen


------------------------------------------------------------
4. Development (Coding)
------------------------------------------------------------

• Write the application code.
• Develop frontend and backend.
• Connect the app with the database and APIs.

Example

Develop features like:

• User Login
• Product List
• Add to Cart
• Online Payment


------------------------------------------------------------
5. Testing
------------------------------------------------------------

• Check the app for errors and bugs.
• Test all features and performance.
• Ensure the app works correctly on different devices.

Types of Testing

• Functional Testing
• Performance Testing
• Security Testing
• Usability Testing


------------------------------------------------------------
6. Deployment
------------------------------------------------------------

• Publish the application.
• Upload the app to the Google Play Store or Apple App Store.
• Make the app available for users.


------------------------------------------------------------
7. Maintenance
------------------------------------------------------------

• Fix bugs reported by users.
• Improve performance.
• Add new features.
• Release updates regularly.

Example

Adding Dark Mode or fixing payment-related bugs.


============================================================
Mobile App Development Process Flow
============================================================

Requirement Analysis
         │
         ▼
      Planning
         │
         ▼
    UI/UX Design
         │
         ▼
Development (Coding)
         │
         ▼
       Testing
         │
         ▼
     Deployment
         │
         ▼
     Maintenance


============================================================
Advantages of MADLC
============================================================

• Provides a systematic development process.
• Reduces development errors.
• Improves app quality.
• Saves time and cost.
• Ensures customer satisfaction.
• Makes maintenance easier.


============================================================
Disadvantages
============================================================

• Time-consuming for large applications.
• Requires proper planning.
• Changes in requirements may increase development cost.


============================================================
Applications
============================================================

The Mobile App Development Life Cycle is used for developing:

• Banking Apps
• E-commerce Apps
• Food Delivery Apps
• Healthcare Apps
• Educational Apps
• Social Media Apps
• Ride Booking Apps


============================================================
Exam Definition (2 Marks)
============================================================

The Mobile Application Development Life Cycle (MADLC) is a
structured process used to develop mobile applications. It
includes Requirement Analysis, Planning, UI/UX Design,
Development, Testing, Deployment, and Maintenance.


============================================================
5-Mark Summary
============================================================

MADLC is a step-by-step process for building mobile
applications.

Phases of MADLC:

1. Requirement Analysis

2. Planning

3. UI/UX Design

4. Development (Coding)

5. Testing

6. Deployment

7. Maintenance

Each phase ensures the application is well-designed, tested,
secure, and user-friendly.

Following MADLC helps developers build high-quality mobile
applications efficiently.
      
      `},{id:4,question:"4. Explain the Android Platform and its Architecture with a neat diagram.",answer:"",codeExample:`
============================================================
        Explain the Android Platform and its Architecture
                 with a Neat Diagram
============================================================


============================================================
What is Android?
============================================================

Android is an open-source mobile operating system developed by
Google. It is based on the Linux Kernel and is mainly used in
smartphones, tablets, smart TVs, smartwatches, and other smart
devices.

Android allows developers to create mobile applications using
Java or Kotlin.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Android is an open-source, Linux-based mobile operating system
developed by Google for smartphones, tablets, and other smart
devices.


============================================================
Features of Android
============================================================

• Open-source operating system.
• Based on Linux Kernel.
• Supports multitasking.
• User-friendly interface.
• Supports Wi-Fi, Bluetooth, GPS, and NFC.
• Large number of applications on the Google Play Store.
• High security with app permissions.
• Supports multiple languages.


============================================================
Android Architecture
============================================================

Android architecture consists of 5 layers.


+--------------------------------------+
|          Applications                |
| (Phone, Contacts, Camera, Games,     |
|  WhatsApp, Browser, etc.)            |
+--------------------------------------+
|     Application Framework            |
| Activity Manager                     |
| Window Manager                       |
| Content Provider                     |
| Resource Manager                     |
| Notification Manager                 |
| Package Manager                      |
+--------------------------------------+
|   Android Runtime (ART) & Libraries  |
| ART (Android Runtime)                |
| Core Java Libraries                  |
| SQLite, OpenGL, SSL, Media Libraries |
+--------------------------------------+
|      Hardware Abstraction Layer      |
| (HAL - Camera, Audio, Bluetooth, USB)|
+--------------------------------------+
|            Linux Kernel              |
| Memory Management                    |
| Process Management                   |
| Device Drivers                       |
| Security                             |
| Power Management                     |
+--------------------------------------+


============================================================
Layers of Android Architecture
============================================================

------------------------------------------------------------
1. Applications Layer
------------------------------------------------------------

This is the top layer of Android architecture.

It contains all the applications used by users.

Examples

• Phone
• Camera
• Contacts
• Gmail
• Chrome
• WhatsApp
• Games


------------------------------------------------------------
2. Application Framework
------------------------------------------------------------

This layer provides services used by Android applications.

Main Components

• Activity Manager – Manages application lifecycle.
• Window Manager – Manages windows on the screen.
• Content Provider – Shares data between applications.
• Resource Manager – Manages strings, images, and layouts.
• Notification Manager – Displays notifications.
• Package Manager – Installs and manages applications.


------------------------------------------------------------
3. Android Runtime (ART) and Native Libraries
------------------------------------------------------------

Android Runtime (ART)

• Executes Android applications.
• Converts app code into machine code.
• Improves application performance.

Native Libraries

Android provides many built-in libraries, such as:

• SQLite (Database)
• OpenGL ES (Graphics)
• Media Libraries (Audio and Video)
• SSL (Security)
• WebKit (Web Browser)


------------------------------------------------------------
4. Hardware Abstraction Layer (HAL)
------------------------------------------------------------

HAL acts as a bridge between Android software and hardware.

It allows Android to communicate with hardware devices.

Examples

• Camera
• Bluetooth
• Audio
• USB
• Sensors


------------------------------------------------------------
5. Linux Kernel
------------------------------------------------------------

This is the lowest layer of Android architecture.

It provides communication between hardware and software.

Responsibilities

• Memory Management
• Process Management
• Device Drivers
• Security
• Network Management
• Power Management


============================================================
Working of Android Architecture
============================================================


User Opens App
        │
        ▼
Applications Layer
        │
        ▼
Application Framework
        │
        ▼
Android Runtime (ART)
        │
        ▼
Hardware Abstraction Layer (HAL)
        │
        ▼
Linux Kernel
        │
        ▼
Hardware (CPU, Camera, Memory, Sensors)



============================================================
Advantages of Android
============================================================

• Open-source and free.
• Supports millions of apps.
• Easy customization.
• Supports multitasking.
• Large developer community.
• Available on many smartphone brands.


============================================================
Disadvantages
============================================================

• Security risks due to open-source nature.
• Different manufacturers may delay software updates.
• Performance may vary across devices.


============================================================
Applications of Android
============================================================

• Mobile Banking
• Social Media
• Online Shopping
• Education Apps
• Healthcare Apps
• Gaming
• Navigation (GPS)
• Entertainment


============================================================
Exam Definition (2 Marks)
============================================================

Android is an open-source, Linux-based mobile operating system
developed by Google. Its architecture consists of Applications,
Application Framework, Android Runtime (ART) & Libraries,
Hardware Abstraction Layer (HAL), and Linux Kernel.


============================================================
5-Mark Summary
============================================================

• Android is an open-source mobile operating system developed by
  Google.

• It is based on the Linux Kernel.

• Android Architecture has 5 layers:

  1. Applications – User apps like Phone, Camera, WhatsApp.

  2. Application Framework – Provides services such as
     Activity Manager, Window Manager, and Notification Manager.

  3. Android Runtime (ART) & Libraries – Executes apps and
     provides built-in libraries like SQLite and OpenGL.

  4. Hardware Abstraction Layer (HAL) – Connects software with
     hardware devices.

  5. Linux Kernel – Handles memory management, security,
     device drivers, networking, and power management.

• This layered architecture makes Android efficient, secure,
  flexible, and easy to develop applications for.
      
      `},{id:5,question:"5. Explain the 3-Tier Architecture for Mobile Computing with a neat diagram.",answer:"",codeExample:`
============================================================
       Explain the 3-Tier Architecture for Mobile Computing
                  with a Neat Diagram
============================================================

============================================================
What is 3-Tier Architecture?
============================================================

3-Tier Architecture is a software architecture used in mobile
application development. It divides the application into three
separate layers:

• Presentation Tier (User Interface)
• Business Logic Tier (Application Layer)
• Data Tier (Database Layer)

This separation makes the application easy to develop,
maintain, and secure.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

3-Tier Architecture is a software architecture that divides a
mobile application into three layers: Presentation Layer,
Business Logic Layer, and Data Layer, where each layer
performs a specific function.


============================================================
Neat Diagram of 3-Tier Architecture
============================================================

                     +----------------------------------+
                     |      Presentation Tier           |
                     | (Mobile App / User Interface)    |
                     | Login, Home, Profile, Menu       |
                     +---------------+------------------+
                                     |
                                     |
                                     ▼
                     +----------------------------------+
                     |      Business Logic Tier         |
                     | Application Logic                |
                     | Validation                       |
                     | Authentication                   |
                     | API Processing                   |
                     +---------------+------------------+
                                     |
                                     |
                                     ▼
                     +----------------------------------+
                     |           Data Tier              |
                     | Database (MySQL, SQLite,         |
                     | Firebase, Oracle, etc.)          |
                     +----------------------------------+


============================================================
Layers of 3-Tier Architecture
============================================================

------------------------------------------------------------
1. Presentation Tier (User Interface)
------------------------------------------------------------

What is Presentation Tier?

This is the top layer where users interact with the
application.

It displays information and accepts user input.

Responsibilities

• Displays screens and menus.
• Accepts user input.
• Sends user requests to the Business Logic Layer.
• Displays results received from the Business Logic Layer.

Example

• Login Screen
• Registration Screen
• Home Screen
• Product List


------------------------------------------------------------
2. Business Logic Tier (Application Layer)
------------------------------------------------------------

What is Business Logic Tier?

This is the middle layer where all the application logic and
processing are performed.

It acts as a bridge between the Presentation Layer and the
Data Layer.

Responsibilities

• Processes user requests.
• Performs calculations.
• Validates user input.
• Implements business rules.
• Communicates with the database.

Example

When a user logs in:

• Check username and password.
• Verify user credentials.
• Send request to the database.


------------------------------------------------------------
3. Data Tier (Database Layer)
------------------------------------------------------------

What is Data Tier?

This is the bottom layer where application data is stored and
managed.

Responsibilities

• Stores application data.
• Retrieves data.
• Updates records.
• Deletes records.
• Ensures data security.

Examples of Databases

• SQLite
• MySQL
• Firebase
• Oracle
• SQL Server


============================================================
Working of 3-Tier Architecture
============================================================

                   User
                    │
                    ▼
          Presentation Tier
            (Login Screen)
                    │
                    ▼
         Business Logic Tier
    (Check Username & Password)
                    │
                    ▼
               Data Tier
              (Database)
                    │
                    ▼
            Result Returned
                    │
                    ▼
     User Gets Login Success/Failure


============================================================
Advantages of 3-Tier Architecture
============================================================

• Easy to maintain.
• Better security.
• Improves performance.
• Reusable business logic.
• Easy to update individual layers.
• Supports team development.
• Scalable for large applications.


============================================================
Disadvantages
============================================================

• More complex than a single-tier architecture.
• Higher development time.
• More communication between layers.
• Slightly increased implementation cost.


============================================================
Applications of 3-Tier Architecture
============================================================

• Mobile Banking Apps
• E-Commerce Apps
• Hospital Management Apps
• Food Delivery Apps
• College Management Systems
• Online Shopping Apps
• Social Media Apps


============================================================
Difference Between the Three Tiers
============================================================

+------------------------+---------------------------------------------+--------------------------------------+
| Tier                   | Purpose                                     | Example                              |
+------------------------+---------------------------------------------+--------------------------------------+
| Presentation Tier      | Displays the user interface and accepts     | Login Screen, Home Screen            |
|                        | input.                                      |                                      |
+------------------------+---------------------------------------------+--------------------------------------+
| Business Logic Tier    | Processes data and applies business rules.  | Login validation, Payment processing |
+------------------------+---------------------------------------------+--------------------------------------+
| Data Tier              | Stores and manages application data.        | MySQL, SQLite, Firebase              |
+------------------------+---------------------------------------------+--------------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

3-Tier Architecture is a software architecture used in mobile
computing that divides an application into Presentation Tier,
Business Logic Tier, and Data Tier to improve maintainability,
security, and scalability.


============================================================
5-Mark Summary
============================================================

• 3-Tier Architecture separates a mobile application into
  three layers.

• Presentation Tier – Provides the user interface and accepts
  user input.

• Business Logic Tier – Processes requests, performs
  validation, and implements business rules.

• Data Tier – Stores and manages data using databases like
  SQLite, MySQL, or Firebase.

• Advantages: Easy maintenance, better security, improved
  scalability, code reusability, and easier development.

• This architecture is widely used in banking, e-commerce,
  healthcare, food delivery, and other mobile applications.
      `},{id:6,question:"6. Explain the Design Considerations for Mobile Computing.",answer:"",codeExample:`
============================================================
         Explain the Design Considerations for Mobile Computing
============================================================

============================================================
What are Design Considerations for Mobile Computing?
============================================================

Design Considerations are the important factors that developers
must consider while designing and developing a mobile application
to ensure it is user-friendly, efficient, secure, and performs
well on different mobile devices.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Design Considerations for Mobile Computing are the guidelines
and factors that help developers create efficient, secure, and
user-friendly mobile applications.


============================================================
Design Considerations for Mobile Computing
============================================================

------------------------------------------------------------
1. User Interface (UI)
------------------------------------------------------------

The application should have a simple, attractive, and
easy-to-use interface.

Example

• Large buttons
• Clear icons
• Easy navigation

------------------------------------------------------------
2. Screen Size and Resolution
------------------------------------------------------------

Mobile devices have different screen sizes and resolutions.

The application should adjust automatically to different screen
sizes (Responsive Design).

Example

• Smartphone
• Tablet

------------------------------------------------------------
3. Performance
------------------------------------------------------------

The application should be fast and responsive.

Considerations

• Fast loading
• Smooth scrolling
• Quick response to user actions

------------------------------------------------------------
4. Battery Consumption
------------------------------------------------------------

The application should use minimum battery power.

Example

• Reduce background processes.
• Use GPS only when required.

------------------------------------------------------------
5. Network Connectivity
------------------------------------------------------------

Internet connection may be slow or unavailable.

The application should work efficiently under different network
conditions.

Example

• Support offline mode.
• Synchronize data when the internet is available.

------------------------------------------------------------
6. Data Storage
------------------------------------------------------------

Store data efficiently using local or cloud storage.

Example

• SQLite
• Firebase
• Cloud Database

------------------------------------------------------------
7. Security
------------------------------------------------------------

Protect user information from unauthorized access.

Considerations

• User authentication
• Data encryption
• Secure login

------------------------------------------------------------
8. Device Compatibility
------------------------------------------------------------

The application should work properly on different devices and
Android versions.

Example

• Samsung
• Xiaomi
• Vivo
• Oppo

------------------------------------------------------------
9. Memory Management
------------------------------------------------------------

The application should use memory efficiently to avoid crashes
and improve performance.

Example

• Release unused memory.
• Optimize images and resources.

------------------------------------------------------------
10. Notifications
------------------------------------------------------------

Provide useful notifications without disturbing users.

Example

• Order confirmation
• Payment success
• New message alerts

------------------------------------------------------------
11. Accessibility
------------------------------------------------------------

The app should be easy to use for all users, including people
with disabilities.

Example

• Large fonts
• Voice support
• High-contrast colors

------------------------------------------------------------
12. Maintenance and Updates
------------------------------------------------------------

The application should be easy to update and maintain.

Example

• Bug fixes
• New features
• Security updates


============================================================
Design Consideration Flow
============================================================

User Requirements
        │
        ▼
UI Design
        │
        ▼
Performance & Security
        │
        ▼
Network & Storage
        │
        ▼
Testing
        │
        ▼
Deployment & Maintenance


============================================================
Advantages of Good Design
============================================================

• Better user experience.
• Faster application performance.
• Improved security.
• Lower battery consumption.
• Easy maintenance.
• Supports multiple devices.
• Higher customer satisfaction.


============================================================
Disadvantages (If Design is Poor)
============================================================

• Slow performance.
• High battery usage.
• Security risks.
• Frequent crashes.
• Poor user experience.
• Difficult maintenance.


============================================================
Applications
============================================================

Good design considerations are important for:

• Banking Apps
• Shopping Apps
• Food Delivery Apps
• Healthcare Apps
• Educational Apps
• Social Media Apps
• Navigation Apps


============================================================
Exam Definition (2 Marks)
============================================================

Design Considerations for Mobile Computing are the important
factors such as UI, performance, security, battery usage,
network connectivity, data storage, and compatibility that
must be considered while developing a mobile application.


============================================================
5-Mark Summary
============================================================

Design Considerations help build efficient, secure, and
user-friendly mobile applications.

Important considerations include:

• User Interface (UI)
• Screen Size and Resolution
• Performance
• Battery Consumption
• Network Connectivity
• Data Storage
• Security
• Device Compatibility
• Memory Management
• Notifications
• Accessibility
• Maintenance and Updates

Considering these factors improves performance, usability,
security, and reliability of mobile applications.
      `},{id:7,question:"7. Explain the steps for setting up the Android app development environment and emulator.",answer:"",codeExample:`
============================================================
    Explain the Steps for Setting Up the Android App
       Development Environment and Emulator
============================================================


============================================================
What is Android Development Environment?
============================================================

The Android Development Environment is the collection of
software and tools required to develop, test, and run
Android applications.

The main tools include:

• Java Development Kit (JDK) (or the JDK bundled with Android Studio)
• Android Studio
• Android SDK
• Android Emulator (AVD)


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

The Android Development Environment is a set of software
tools used to create, test, and run Android applications.


============================================================
Steps for Setting Up the Android Development Environment
============================================================

------------------------------------------------------------
Step 1: Install Java Development Kit (JDK)
------------------------------------------------------------

• Download and install the JDK (if required).
• Set the JAVA_HOME environment variable.
• Verify the installation using:

java -version

Purpose:

Provides Java support for Android development.


------------------------------------------------------------
Step 2: Download and Install Android Studio
------------------------------------------------------------

• Download Android Studio from the official Android Developers website.
• Run the installer.
• Follow the installation wizard.
• Select the required components.

Purpose:

Android Studio is the official IDE used to develop Android applications.


------------------------------------------------------------
Step 3: Install Android SDK
------------------------------------------------------------

• Open Android Studio.
• Go to SDK Manager.
• Install:

  • Android SDK
  • SDK Platform
  • SDK Build Tools
  • Platform Tools

Purpose:

SDK provides the libraries and tools needed to build Android applications.


------------------------------------------------------------
Step 4: Create a New Android Project
------------------------------------------------------------

• Open Android Studio.
• Click New Project.
• Select a template (e.g., Empty Activity).
• Enter:

  • Project Name
  • Package Name
  • Language (Java/Kotlin)
  • Minimum SDK Version

• Click Finish.


------------------------------------------------------------
Step 5: Create an Android Virtual Device (AVD)
------------------------------------------------------------

The Android Emulator runs on an Android Virtual Device (AVD).

Steps

• Open Device Manager.
• Click Create Device.
• Select a device (e.g., Pixel 6).
• Choose an Android system image.
• Download the image if needed.
• Click Finish.


------------------------------------------------------------
Step 6: Start the Emulator
------------------------------------------------------------

• Open Device Manager.
• Click the Play (▶) button beside the AVD.
• Wait for Android to boot.

The emulator is now ready for testing applications.


------------------------------------------------------------
Step 7: Run the Application
------------------------------------------------------------

• Click the Run (▶) button in Android Studio.
• Select:

  • Android Emulator, or
  • Physical Android Device.

• Android Studio builds and installs the application automatically.


============================================================
Android Emulator
============================================================

------------------------------------------------------------
What is an Android Emulator?
------------------------------------------------------------

An Android Emulator is software that simulates an Android
device on a computer. It allows developers to test
applications without using a physical smartphone.


------------------------------------------------------------
Features
------------------------------------------------------------

• Simulates Android devices.
• Tests applications on different Android versions.
• Supports GPS, camera, and network simulation.
• Easy debugging.


============================================================
Diagram of Android Development Environment
============================================================

                 Developer
                     │
                     ▼
             Android Studio
                     │
                     ▼
               Android SDK
                     │
                     ▼
        Android Emulator (AVD)
                     │
                     ▼
         Run & Test Application


============================================================
Advantages of Android Emulator
============================================================

• No need for a physical device.
• Easy application testing.
• Supports multiple Android versions.
• Easy debugging.
• Saves testing cost.


============================================================
Disadvantages
============================================================

• Slower than a physical device.
• Requires more RAM and CPU.
• Some hardware features may not be fully supported.


============================================================
Advantages of Android Development Environment
============================================================

• Official tools provided by Google.
• Easy app development.
• Built-in debugging tools.
• Supports Java and Kotlin.
• Integrated emulator.
• Easy testing and deployment.


============================================================
Exam Definition (2 Marks)
============================================================

The Android Development Environment consists of Android
Studio, Android SDK, JDK, and Android Emulator, which are
used to develop, test, and run Android applications.


============================================================
5-Mark Summary
============================================================

1. Install the JDK (if required).

2. Download and install Android Studio.

3. Install the Android SDK using SDK Manager.

4. Create a new Android project.

5. Create an Android Virtual Device (AVD) using Device Manager.

6. Start the Android Emulator.

7. Run and test the application using the emulator or a
   physical Android device.

The Android Emulator helps developers test applications
without requiring a real Android device.
      `},{id:8,question:"8. Explain the Case Study of Mobile App Development.",answer:"",codeExample:`
============================================================
           Explain the Case Study of Mobile App Development
============================================================

============================================================
What is a Case Study in Mobile App Development?
============================================================

A Case Study of Mobile App Development explains how a mobile
application is developed from idea to deployment by following
the Mobile Application Development Life Cycle (MADLC).

It includes:

• Requirement analysis
• Design
• Development
• Testing
• Deployment
• Maintenance


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Case Study of Mobile App Development is a practical example
that explains the complete process of developing a mobile
application from planning to maintenance.


============================================================
Example Case Study: Food Delivery Mobile App
============================================================

Suppose a company wants to develop a Food Delivery App.

The app should allow users to:

• Register and log in.
• Browse restaurants and food items.
• Add food to the cart.
• Make online payments.
• Track their orders.


============================================================
Phases of Mobile App Development
============================================================

------------------------------------------------------------
1. Requirement Analysis
------------------------------------------------------------

Collect and understand the client's requirements.

Requirements

• User Registration and Login
• Restaurant List
• Food Menu
• Cart
• Online Payment
• Order Tracking
• Notifications


------------------------------------------------------------
2. Planning
------------------------------------------------------------

Prepare the project plan.

Decide:

• Budget
• Timeline
• Team Members
• Development Tools

Technologies Used

• Android Studio
• Java/Kotlin
• Firebase or MySQL


------------------------------------------------------------
3. UI/UX Design
------------------------------------------------------------

Design attractive and user-friendly screens.

Screens

• Splash Screen
• Login Screen
• Home Screen
• Restaurant List
• Food Details
• Cart
• Payment Screen
• Order History


------------------------------------------------------------
4. Development (Coding)
------------------------------------------------------------

Develop all application features.

Modules

• User Login
• Restaurant Module
• Cart Module
• Payment Module
• Order Tracking Module


------------------------------------------------------------
5. Testing
------------------------------------------------------------

Test the application before release.

Types of Testing

• Functional Testing
• Performance Testing
• Security Testing
• Usability Testing

Fix any bugs found during testing.


------------------------------------------------------------
6. Deployment
------------------------------------------------------------

Publish the application.

Platforms

• Google Play Store
• Apple App Store

Users can now download and use the app.


------------------------------------------------------------
7. Maintenance
------------------------------------------------------------

After deployment:

• Fix bugs.
• Improve performance.
• Add new features.
• Release updates regularly.

Example:

• Add Dark Mode.
• Add new payment methods.
• Improve delivery tracking.


============================================================
Case Study Flow Diagram
============================================================

Client Requirements
        │
        ▼
Requirement Analysis
        │
        ▼
Planning
        │
        ▼
UI/UX Design
        │
        ▼
Development (Coding)
        │
        ▼
Testing
        │
        ▼
Deployment
        │
        ▼
Maintenance


============================================================
Technologies Used
============================================================

| Technology       | Purpose               |
| ---------------- | --------------------- |
| Android Studio   | App Development       |
| Java/Kotlin      | Programming Language  |
| Firebase / MySQL | Database              |
| Google Maps API  | Location & Navigation |
| Payment Gateway  | Online Payments       |


============================================================
Advantages of Mobile App Development
============================================================

• Easy communication with users.
• Fast access to services.
• Better user experience.
• Secure online transactions.
• Supports business growth.
• Easy maintenance and updates.


============================================================
Challenges
============================================================

• Device compatibility.
• Security issues.
• Internet dependency.
• Battery consumption.
• Performance optimization.


============================================================
Applications of Mobile Apps
============================================================

• Food Delivery Apps
• Banking Apps
• Shopping Apps
• Healthcare Apps
• Education Apps
• Ride Booking Apps
• Social Media Apps


============================================================
Exam Definition (2 Marks)
============================================================

A Case Study of Mobile App Development explains the complete
process of developing a mobile application through Requirement
Analysis, Planning, UI/UX Design, Development, Testing,
Deployment, and Maintenance.


============================================================
5-Mark Summary
============================================================

A Case Study shows how a mobile app is developed from start to
finish.

Example:

Food Delivery App.

Development Process:

• Requirement Analysis
• Planning
• UI/UX Design
• Development (Coding)
• Testing
• Deployment
• Maintenance

Technologies commonly used include Android Studio,
Java/Kotlin, Firebase/MySQL, Google Maps API, and Payment
Gateway.

Following these steps helps create a high-quality, secure,
and user-friendly mobile application.
      `},{id:11,question:"11. Explain App User Interface (UI) Designing in Android. Discuss Mobile UI Resources (Layout, UI Elements, Drawable, and Menu).",answer:"",codeExample:`
============================================================
      Explain App User Interface (UI) Designing in Android.
 Discuss Mobile UI Resources (Layout, UI Elements, Drawable,
                         and Menu)
============================================================

============================================================
What is App User Interface (UI) Designing?
============================================================

App User Interface (UI) Designing is the process of creating
the visual appearance and layout of an Android application.
It defines how users interact with the app through buttons,
text boxes, images, menus, and other controls.

A good UI should be simple, attractive, responsive, and easy
to use.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

App User Interface (UI) Designing is the process of designing
the screens, layouts, and controls of an Android application
to provide a user-friendly experience.


============================================================
Features of a Good UI
============================================================

• Simple and attractive design.
• Easy navigation.
• Responsive on different screen sizes.
• Fast and user-friendly.
• Consistent look and feel.
• Easy accessibility.


============================================================
Mobile UI Resources in Android
============================================================

Android UI resources are stored in the res folder.

The main UI resources are:

• Layout
• UI Elements (Widgets)
• Drawable
• Menu


============================================================
Android Resource Structure
============================================================

res
│
├── layout
├── drawable
├── menu
├── values
└── mipmap


============================================================
1. Layout
============================================================

What is Layout?

A Layout defines how UI components are arranged on the
screen.

Layout files are stored in:

res/layout/

They are written in XML.

------------------------------------------------------------
Common Layouts
------------------------------------------------------------

• LinearLayout
• RelativeLayout
• ConstraintLayout
• FrameLayout
• TableLayout

------------------------------------------------------------
Example of LinearLayout
------------------------------------------------------------

<?xml version="1.0" encoding="utf-8"?>

<LinearLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:layout_width="match_parent"
    android:layout_height="match_parent"
    android:orientation="vertical">

    <TextView
        android:text="Welcome"/>

    <Button
        android:text="Login"/>

</LinearLayout>


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to design screens.
• Organizes UI elements properly.
• Supports responsive design.


============================================================
2. UI Elements (Widgets)
============================================================

What are UI Elements?

UI Elements are the controls that users interact with in an
Android application.

------------------------------------------------------------
Common UI Elements
------------------------------------------------------------

• TextView
• EditText
• Button
• ImageView
• CheckBox
• RadioButton
• Spinner
• ListView

------------------------------------------------------------
Example
------------------------------------------------------------

<TextView
    android:text="Username"/>

<EditText
    android:hint="Enter Username"/>

<Button
    android:text="Login"/>


------------------------------------------------------------
Purpose
------------------------------------------------------------

• Display text.
• Accept user input.
• Perform actions.
• Show images.


============================================================
3. Drawable
============================================================

What is Drawable?

A Drawable is a graphic resource used in Android
applications.

It can be:

• Images
• Icons
• Shapes
• Backgrounds

Drawable files are stored in:

res/drawable/

------------------------------------------------------------
Example
------------------------------------------------------------

<ImageView
    android:layout_width="100dp"
    android:layout_height="100dp"
    android:src="@drawable/logo"/>


Here, logo.png is stored inside the drawable folder.

------------------------------------------------------------
Uses
------------------------------------------------------------

• App icons
• Background images
• Buttons
• Logos


============================================================
4. Menu
============================================================

What is Menu?

A Menu provides options or commands to the user.

Menu files are stored in:

res/menu/

------------------------------------------------------------
Example (menu.xml)
------------------------------------------------------------

<menu xmlns:android="http://schemas.android.com/apk/res/android">

    <item
        android:id="@+id/home"
        android:title="Home"/>

    <item
        android:id="@+id/settings"
        android:title="Settings"/>

</menu>


------------------------------------------------------------
Uses
------------------------------------------------------------

• Navigation
• Settings
• Logout
• Search


============================================================
Working of Android UI Resources
============================================================

User Opens App
       │
       ▼
Layout
       │
       ▼
UI Elements
       │
       ▼
Drawable Resources
       │
       ▼
Menu Options
       │
       ▼
User Interaction


============================================================
Advantages of Android UI Designing
============================================================

• Attractive user interface.
• Better user experience.
• Easy navigation.
• Responsive on different devices.
• Improves application usability.


============================================================
Disadvantages
============================================================

• Complex UI may reduce performance.
• Poor design can confuse users.
• Requires testing on different screen sizes.


============================================================
Difference Between Mobile UI Resources
============================================================

+----------------+----------------------------------------------------+--------------------------+
| Resource       | Purpose                                            | Location                 |
+----------------+----------------------------------------------------+--------------------------+
| Layout         | Arranges UI components on the screen.              | res/layout               |
+----------------+----------------------------------------------------+--------------------------+
| UI Elements    | Controls like Button, TextView, EditText, etc.     | Inside layout XML files  |
+----------------+----------------------------------------------------+--------------------------+
| Drawable       | Stores images, icons, backgrounds, and shapes.     | res/drawable             |
+----------------+----------------------------------------------------+--------------------------+
| Menu           | Provides navigation and command options.           | res/menu                 |
+----------------+----------------------------------------------------+--------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

App UI Designing is the process of creating the user
interface of an Android application. Mobile UI resources
include Layout, UI Elements, Drawable, and Menu, which
together build an attractive and user-friendly application.


============================================================
5-Mark Summary
============================================================

• App UI Designing creates the visual interface of an
  Android app.

• Layout arranges UI components on the screen
  (res/layout).

• UI Elements are controls like TextView, EditText,
  Button, ImageView, CheckBox, and Spinner.

• Drawable stores images, icons, shapes, and
  backgrounds (res/drawable).

• Menu provides navigation and options like Home,
  Settings, and Logout (res/menu).
      
      
      `},{id:12,question:"12. Explain the Activity Life Cycle with a neat diagram.",answer:"",codeExample:`
============================================================
        Explain the Activity Life Cycle in Android
                 with a Neat Diagram
============================================================

============================================================
What is an Activity?
============================================================

An Activity is a single screen of an Android application.
Every Android app consists of one or more activities that
allow users to interact with the application.

Examples:

• Login Screen
• Home Screen
• Settings Screen

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An Activity is a component of an Android application that
represents a single screen with which the user can interact.


============================================================
What is Activity Life Cycle?
============================================================

The Activity Life Cycle is the sequence of states that an
activity goes through from the time it is created until it
is destroyed.

Android manages these states using lifecycle callback
methods.


============================================================
Activity Life Cycle Diagram
============================================================

                    App Starts
                        │
                        ▼
                  onCreate()
                        │
                        ▼
                   onStart()
                        │
                        ▼
                   onResume()
                        │
                        ▼
               Activity Running
                        │
        ┌───────────────┴───────────────┐
        │                               │
        ▼                               ▼
    onPause()                     onDestroy()
        │
        ▼
     onStop()
        │
   ┌────┴────┐
   │         │
   ▼         ▼
onRestart()  End
   │
   ▼
onStart()
   │
   ▼
onResume()


============================================================
Activity Life Cycle Methods
============================================================

------------------------------------------------------------
1. onCreate()
------------------------------------------------------------

• Called when the activity is created for the first time.
• Used to initialize the activity.
• Loads the user interface using setContentView().

Example

@Override
protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
}

------------------------------------------------------------
2. onStart()
------------------------------------------------------------

• Called when the activity becomes visible to the user.
• The activity is not yet ready for user interaction.

------------------------------------------------------------
3. onResume()
------------------------------------------------------------

• Called when the activity comes to the foreground.
• The user can now interact with the application.
• This is the active/running state.

------------------------------------------------------------
4. onPause()
------------------------------------------------------------

• Called when another activity partially covers the current
  activity.
• The activity is still visible but loses focus.

Example

A phone call arrives while using the app.

------------------------------------------------------------
5. onStop()
------------------------------------------------------------

• Called when the activity is completely hidden.
• The activity is no longer visible to the user.

Example

User opens another application.

------------------------------------------------------------
6. onRestart()
------------------------------------------------------------

• Called when a stopped activity is about to start again.
• After this, onStart() and onResume() are called.

Example

User returns to the app after switching to another app.

------------------------------------------------------------
7. onDestroy()
------------------------------------------------------------

• Called before the activity is destroyed.
• Used to release resources and perform cleanup.

Example

User closes the application.


============================================================
Working of Activity Life Cycle
============================================================

App Launch
     │
     ▼
onCreate()
     │
     ▼
onStart()
     │
     ▼
onResume()
     │
     ▼
User Uses App
     │
     ▼
onPause()
     │
     ▼
onStop()
     │
     ▼
onRestart() (if user returns)
     │
     ▼
onStart()
     │
     ▼
onResume()
     │
     ▼
onDestroy() (when app closes)


============================================================
Importance of Activity Life Cycle
============================================================

• Manages application resources efficiently.
• Saves and restores activity state.
• Improves application performance.
• Prevents memory leaks.
• Provides a smooth user experience.


============================================================
Advantages
============================================================

• Efficient memory management.
• Better performance.
• Proper handling of app interruptions.
• Easy state restoration.
• Improved battery usage.


============================================================
Disadvantages
============================================================

• Beginners may find it difficult to understand.
• Incorrect handling may cause crashes or data loss.


============================================================
Summary of Lifecycle Methods
============================================================

| Method      | Purpose                                                             |
| ------------| ------------------------------------------------------------------- |
| onCreate()  | Initializes the activity and loads the UI.                          |
| onStart()   | Makes the activity visible.                                         |
| onResume()  | Activity comes to the foreground and is ready for user interaction. |
| onPause()   | Activity loses focus temporarily.                                   |
| onStop()    | Activity becomes completely hidden.                                 |
| onRestart() | Restarts a stopped activity.                                        |
| onDestroy() | Cleans up resources before the activity is destroyed.               |


============================================================
Exam Definition (2 Marks)
============================================================

The Activity Life Cycle is the sequence of callback methods
that an Android activity passes through from its creation to
its destruction. The main methods are onCreate(), onStart(),
onResume(), onPause(), onStop(), onRestart(), and
onDestroy().


============================================================
5-Mark Summary
============================================================

• An Activity represents a single screen in an Android
  application.

• The Activity Life Cycle manages the activity from creation
  to destruction.

• Lifecycle methods:

  - onCreate() – Initializes the activity.
  - onStart() – Makes the activity visible.
  - onResume() – Activity becomes active and ready for user
    interaction.
  - onPause() – Activity temporarily loses focus.
  - onStop() – Activity becomes invisible.
  - onRestart() – Restarts a stopped activity.
  - onDestroy() – Cleans up resources before closing.

• Proper use of the Activity Life Cycle improves performance,
  memory management, and user experience.
      
      `},{id:13,question:"13. Explain the interaction among Activities using Intents. Discuss startActivity(), putExtra(), and startActivityForResult().",answer:"",codeExample:`
======================================================================
Explain the Interaction among Activities using Intents.
Discuss startActivity(), putExtra(), and startActivityForResult().
======================================================================


======================================================================
What is an Intent?
======================================================================

An Intent is a messaging object in Android that is used to start
another Activity, Service, or Broadcast Receiver. It also allows
data to be passed from one Activity to another.

----------------------------------------------------------------------
Definition (2 Marks)
----------------------------------------------------------------------

An Intent is an Android object used to communicate between
application components, especially to start one activity from
another and transfer data.


======================================================================
Interaction Among Activities Using Intents
======================================================================

Suppose an app has two activities:

• MainActivity
• SecondActivity

When the user clicks a button in MainActivity, Android uses an
Intent to open SecondActivity. Data such as a username or ID can
also be sent through the Intent.


======================================================================
Diagram of Activity Interaction
======================================================================

        MainActivity
             │
             │  Intent
             ▼
       SecondActivity
             │
             │ (Optional Result)
             ▼
        MainActivity


======================================================================
Types of Intents
======================================================================

----------------------------------------------------------------------
1. Explicit Intent
----------------------------------------------------------------------

Used to open a specific Activity.

Commonly used within the same application.

----------------------------------------------------------------------
2. Implicit Intent
----------------------------------------------------------------------

Used to perform an action without specifying the target Activity.

Example: Open a web browser or camera.


======================================================================
1. startActivity()
======================================================================

----------------------------------------------------------------------
What is startActivity()?
----------------------------------------------------------------------

The startActivity() method is used to start a new activity.

----------------------------------------------------------------------
Syntax
----------------------------------------------------------------------

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivity(intent);

----------------------------------------------------------------------
Example
----------------------------------------------------------------------

MainActivity.java

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivity(intent);

----------------------------------------------------------------------
Explanation
----------------------------------------------------------------------

• Creates an Intent.
• Specifies SecondActivity as the destination.
• Opens the new activity.


======================================================================
2. putExtra()
======================================================================

----------------------------------------------------------------------
What is putExtra()?
----------------------------------------------------------------------

The putExtra() method is used to send data from one activity to
another.

----------------------------------------------------------------------
Syntax
----------------------------------------------------------------------

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
intent.putExtra("name", "Raj");
startActivity(intent);

----------------------------------------------------------------------
Receiving the Data
----------------------------------------------------------------------

SecondActivity.java

String name = getIntent().getStringExtra("name");

----------------------------------------------------------------------
Explanation
----------------------------------------------------------------------

• "name" is the key.
• "Raj" is the value.
• getStringExtra() retrieves the value in the second activity.


======================================================================
3. startActivityForResult()
======================================================================

----------------------------------------------------------------------
What is startActivityForResult()?
----------------------------------------------------------------------

The startActivityForResult() method is used when one activity
starts another activity and expects a result back.

----------------------------------------------------------------------
Syntax
----------------------------------------------------------------------

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivityForResult(intent, 1);

----------------------------------------------------------------------
Example
----------------------------------------------------------------------

MainActivity.java

Intent intent = new Intent(MainActivity.this, SecondActivity.class);
startActivityForResult(intent, 1);

SecondActivity.java

Intent result = new Intent();
result.putExtra("message", "Success");
setResult(RESULT_OK, result);
finish();

----------------------------------------------------------------------
Explanation
----------------------------------------------------------------------

• startActivityForResult() starts the second activity.
• The second activity sends a result using setResult().
• finish() closes the second activity and returns to the first.

----------------------------------------------------------------------
Note
----------------------------------------------------------------------

In newer Android versions, startActivityForResult() is deprecated
and replaced by the Activity Result API. However, many exams still
ask about startActivityForResult(), so it is important to know it.


======================================================================
Working of Intents
======================================================================

User Clicks Button
        │
        ▼
MainActivity
        │
        ▼
Intent Created
        │
        ▼
startActivity()
        │
        ▼
SecondActivity Opens
        │
        ▼
(Optional)
putExtra() Sends Data
        │
        ▼
startActivityForResult()
        │
        ▼
Result Returned to MainActivity


======================================================================
Advantages of Intents
======================================================================

• Easy communication between activities.
• Allows data sharing.
• Supports navigation between screens.
• Can start services and broadcast receivers.
• Improves modular application design.


======================================================================
Disadvantages
======================================================================

• Incorrect Intent data may cause errors.
• Passing large amounts of data is not recommended.
• Managing many activities can become complex.


======================================================================
Difference Between startActivity(), putExtra(), and
startActivityForResult()
======================================================================

+--------------------------------------+--------------------------------------+
| Method                               | Purpose                              |
+--------------------------------------+--------------------------------------+
| startActivity()                      | Starts a new activity.               |
+--------------------------------------+--------------------------------------+
| putExtra()                           | Sends data to another activity.      |
+--------------------------------------+--------------------------------------+
| startActivityForResult()             | Starts an activity and receives a    |
|                                      | result back.                         |
+--------------------------------------+--------------------------------------+


======================================================================
Exam Definition (2 Marks)
======================================================================

An Intent is an Android object used to communicate between
activities. startActivity() opens a new activity, putExtra()
sends data between activities, and startActivityForResult()
starts an activity and receives a result from it.


======================================================================
5-Mark Summary
======================================================================

• Intent is used for communication between Android activities.

• Types of Intents:
  - Explicit Intent
  - Implicit Intent

• startActivity() opens a new activity.

• putExtra() passes data such as text, numbers, or objects
  between activities.

• startActivityForResult() starts another activity and receives
  a result back (used in older Android versions; newer apps use
  the Activity Result API).

• Intents make Android applications interactive, modular, and
  easy to navigate.
      
      `},{id:14,question:"14. Explain Threads, AsyncTask, and Services in Android. Discuss the Service Life Cycle.",answer:"",codeExample:`
============================================================
     Explain Threads, AsyncTask, and Services in Android.
            Discuss the Service Life Cycle.
============================================================


============================================================
1. Thread in Android
============================================================

------------------------------------------------------------
What is a Thread?
------------------------------------------------------------

A Thread is a separate path of execution that allows a task to
run in the background without stopping the main application.

Android has:

• Main Thread (UI Thread) – Handles the user interface.
• Background Thread – Performs time-consuming tasks.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Thread is a lightweight process used to execute tasks in the
background without blocking the user interface.

------------------------------------------------------------
Example
------------------------------------------------------------

Thread thread = new Thread(new Runnable() {
    @Override
    public void run() {
        // Background task
        System.out.println("Downloading File...");
    }
});

thread.start();


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Keeps the UI responsive.
• Performs multiple tasks simultaneously.
• Improves application performance.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Difficult to manage.
• Synchronization issues may occur.


============================================================
2. AsyncTask
============================================================

------------------------------------------------------------
What is AsyncTask?
------------------------------------------------------------

AsyncTask is an Android class used to perform background
operations and update the UI thread after completion.

Note:

AsyncTask is deprecated in recent Android versions, but it is
still commonly asked in exams.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

AsyncTask is a class used to perform background tasks and
update the user interface without blocking the main thread.

------------------------------------------------------------
AsyncTask Methods
------------------------------------------------------------

• onPreExecute() → Runs before the background task starts.

• doInBackground() → Performs the background operation.

• onProgressUpdate() → Updates progress (optional).

• onPostExecute() → Runs after the background task finishes.

------------------------------------------------------------
Example
------------------------------------------------------------

java
class MyTask extends AsyncTask<Void, Void, String> {

    protected String doInBackground(Void... params) {
        return "Download Complete";
    }

    protected void onPostExecute(String result) {
        System.out.println(result);
    }
}


------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy background processing.
• Automatically updates the UI.
• Simple to implement.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Deprecated in newer Android versions.
• Not suitable for long-running tasks.


============================================================
3. Service in Android
============================================================

------------------------------------------------------------
What is a Service?
------------------------------------------------------------

A Service is an Android component that runs in the background
without a user interface.

It performs long-running operations even when the application
is not open.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Service is an Android component that performs long-running
operations in the background without interacting directly with
the user.

------------------------------------------------------------
Examples
------------------------------------------------------------

• Music Player
• File Download
• Location Tracking
• Data Synchronization


============================================================
Types of Services
============================================================

------------------------------------------------------------
1. Started Service
------------------------------------------------------------

• Started using startService().
• Runs until it is stopped.

------------------------------------------------------------
2. Bound Service
------------------------------------------------------------

• Started using bindService().
• Runs while another component is connected.

------------------------------------------------------------
3. Foreground Service
------------------------------------------------------------

• Runs with a visible notification.

Example:

Music Player, GPS Navigation.


============================================================
Service Life Cycle
============================================================

A Service goes through different stages from creation to
destruction.

------------------------------------------------------------
Service Life Cycle Diagram
------------------------------------------------------------

text
startService()
      │
      ▼
  onCreate()
      │
      ▼
onStartCommand()
      │
      ▼
Service Running
      │
      ▼
 stopService()
      │
      ▼
  onDestroy()



============================================================
Service Life Cycle Methods
============================================================

------------------------------------------------------------
1. onCreate()
------------------------------------------------------------

• Called when the service is created.
• Initializes the service.

------------------------------------------------------------
2. onStartCommand()
------------------------------------------------------------

• Called every time the service is started using startService().
• Executes the background task.

------------------------------------------------------------
3. onBind()
------------------------------------------------------------

• Called when another component binds to the service.
• Used for bound services.

------------------------------------------------------------
4. onUnbind()
------------------------------------------------------------

• Called when all clients disconnect from the service.

------------------------------------------------------------
5. onDestroy()
------------------------------------------------------------

• Called before the service is destroyed.
• Releases resources and performs cleanup.


============================================================
Working of a Service
============================================================

text
Application Starts
        │
        ▼
startService()
        │
        ▼
onCreate()
        │
        ▼
onStartCommand()
        │
        ▼
Background Task Running
        │
        ▼
stopService()
        │
        ▼
onDestroy()



============================================================
Difference Between Thread, AsyncTask, and Service
============================================================

+----------------+-------------------------+-------------------------------+-------------------------------+
| Feature        | Thread                  | AsyncTask                     | Service                       |
+----------------+-------------------------+-------------------------------+-------------------------------+
| Purpose        | Runs background tasks   | Background task with UI       | Long-running background tasks |
|                |                         | update                        |                               |
+----------------+-------------------------+-------------------------------+-------------------------------+
| User Interface | Cannot update UI        | Can update UI                 | No UI                         |
|                | directly                |                               |                               |
+----------------+-------------------------+-------------------------------+-------------------------------+
| Execution Time | Short/Long              | Short tasks                   | Long-running tasks            |
+----------------+-------------------------+-------------------------------+-------------------------------+
| Status         | Supported               | Deprecated                    | Supported                     |
+----------------+-------------------------+-------------------------------+-------------------------------+


============================================================
Advantages of Services
============================================================

• Performs tasks in the background.
• Keeps the UI responsive.
• Suitable for long-running operations.
• Can continue even when the app is minimized.


============================================================
Disadvantages
============================================================

• Uses system resources.
• Incorrect implementation may drain the battery.
• Requires proper lifecycle management.


============================================================
Exam Definition (2 Marks)
============================================================

Thread:

A lightweight process used for background execution.

------------------------------------------------------------

AsyncTask:

A class used to perform background tasks and update the UI
(deprecated in newer Android versions).

------------------------------------------------------------

Service:

An Android component that performs long-running background
operations without a user interface.


============================================================
5-Mark Summary
============================================================

• Thread executes tasks in the background without blocking the
  UI.

• AsyncTask performs background operations and updates the UI
  after completion (deprecated but important for exams).

• Service runs long-running background tasks without a user
  interface.

• Types of Services:
  - Started Service
  - Bound Service
  - Foreground Service

• Service Life Cycle:
  onCreate() → onStartCommand() → Service Running →
  onDestroy() (with onBind()/onUnbind() for bound services).

These components improve performance, responsiveness, and
multitasking in Android applications.
      
      `},{id:15,question:"15. Explain Notifications and Broadcast Receivers with suitable examples.",answer:"",codeExample:`
============================================================
        Explain Notifications and Broadcast Receivers
               with Suitable Examples
============================================================


############################################################
1. Notifications in Android
############################################################

============================================================
What is a Notification?
============================================================

A Notification is a message displayed outside the application
to inform the user about an event or update. Notifications
appear in the notification bar (status bar).

Examples include new messages, emails, reminders, and app
updates.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Notification is a message that alerts the user about
important events or updates, even when the application is
not open.


============================================================
Features of Notifications
============================================================

• Alerts users about important events.
• Appears in the notification bar.
• Can open an app when tapped.
• Works even if the app is running in the background.


============================================================
Example of Notification
============================================================

java
NotificationCompat.Builder builder =
    new NotificationCompat.Builder(this, "channel_id")
        .setSmallIcon(R.drawable.ic_launcher)
        .setContentTitle("New Message")
        .setContentText("You have a new notification")
        .setPriority(NotificationCompat.PRIORITY_DEFAULT);

NotificationManagerCompat notificationManager =
    NotificationManagerCompat.from(this);

notificationManager.notify(1, builder.build());


------------------------------------------------------------
Explanation
------------------------------------------------------------

• setSmallIcon() → Sets the notification icon.
• setContentTitle() → Sets the notification title.
• setContentText() → Sets the notification message.
• notify() → Displays the notification.


============================================================
Uses of Notifications
============================================================

• New message alerts
• Email notifications
• App update notifications
• Payment confirmation
• Calendar reminders
• Order status updates


============================================================
Advantages of Notifications
============================================================

• Keeps users informed.
• Improves user engagement.
• Works even when the app is closed.
• Easy to implement.


============================================================
Disadvantages
============================================================

• Too many notifications may annoy users.
• Improper use can reduce user experience.



############################################################
2. Broadcast Receiver
############################################################

============================================================
What is a Broadcast Receiver?
============================================================

A Broadcast Receiver is an Android component that receives
and responds to broadcast messages (events) sent by the
Android system or other applications.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Broadcast Receiver is an Android component that listens for
and responds to system-wide or application broadcast events.


============================================================
Examples of Broadcast Events
============================================================

• Battery Low
• Device Boot Completed
• Airplane Mode Changed
• Network Connectivity Changed
• SMS Received


============================================================
Creating a Broadcast Receiver
============================================================

java
public class MyReceiver extends BroadcastReceiver {

    @Override
    public void onReceive(Context context, Intent intent) {

        Toast.makeText(context,
                "Broadcast Received!",
                Toast.LENGTH_SHORT).show();
    }
}



============================================================
Registering Broadcast Receiver (AndroidManifest.xml)
============================================================

xml
<receiver android:name=".MyReceiver">
    <intent-filter>
        <action android:name="android.intent.action.BOOT_COMPLETED"/>
    </intent-filter>
</receiver>


------------------------------------------------------------
Explanation
------------------------------------------------------------

• <receiver> registers the Broadcast Receiver.
• <intent-filter> specifies which broadcast event to receive.
• BOOT_COMPLETED runs the receiver after the device finishes booting.


============================================================
Working of Broadcast Receiver
============================================================

System Event
(Battery Low / SMS / Boot Completed)
          │
          ▼
Broadcast Sent
          │
          ▼
Broadcast Receiver
          │
          ▼
onReceive() Method
          │
          ▼
Required Action Performed


============================================================
Advantages of Broadcast Receiver
============================================================

• Responds automatically to system events.
• Saves resources by running only when needed.
• Useful for background event handling.


============================================================
Disadvantages
============================================================

• Limited execution time.
• Incorrect implementation may affect performance.
• Some broadcasts require special permissions.


============================================================
Difference Between Notification and Broadcast Receiver
============================================================

+-----------------------------------------------+-----------------------------------------------+
| Notification                                  | Broadcast Receiver                            |
+-----------------------------------------------+-----------------------------------------------+
| Displays alerts to the user.                  | Receives and handles broadcast events.        |
+-----------------------------------------------+-----------------------------------------------+
| Visible in the notification bar.              | Runs in the background.                       |
+-----------------------------------------------+-----------------------------------------------+
| Used to inform users.                         | Used to respond to system or app events.      |
+-----------------------------------------------+-----------------------------------------------+
| Example: New message alert.                   | Example: Battery low event.                   |
+-----------------------------------------------+-----------------------------------------------+


============================================================
Real-Life Example
============================================================

------------------------------------------------------------
Notification
------------------------------------------------------------

A user receives a WhatsApp message. A notification appears:

New Message

Hi Raj, are you available?

------------------------------------------------------------
Broadcast Receiver
------------------------------------------------------------

When the phone battery becomes low, Android sends a Battery
Low broadcast. The Broadcast Receiver receives it and can
display a warning or start battery-saving actions.


============================================================
Exam Definition (2 Marks)
============================================================

Notification:

A message displayed in the notification bar to inform users
about important events or updates.

------------------------------------------------------------

Broadcast Receiver:

An Android component that receives and responds to
system-wide or application broadcast events.


============================================================
5-Mark Summary
============================================================

• Notifications inform users about important events such as
  messages, reminders, and updates.

• Notifications are created using
  NotificationCompat.Builder and displayed using
  NotificationManagerCompat.

• A Broadcast Receiver listens for system or application
  broadcast events.

• Common broadcasts include Battery Low, Boot Completed,
  SMS Received, and Network Changes.

• The main callback method is onReceive(), which executes
  when a broadcast is received.

• Notifications improve user engagement, while Broadcast
  Receivers enable applications to respond automatically to
  system events.
      
      `},{id:16,question:"16. Explain Telephony and SMS APIs with the required permissions and applications.",answer:"",codeExample:`
============================================================
 Explain Telephony and SMS APIs with the Required Permissions
                 and Applications
============================================================


============================================================
1. Telephony API
============================================================

------------------------------------------------------------
What is Telephony API?
------------------------------------------------------------

The Telephony API in Android allows applications to access
phone-related information such as the network, SIM card, and
call state.

It is provided through the TelephonyManager class.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Telephony API is an Android API that allows applications to
access telephony services such as network information, SIM
details, and phone call status.


------------------------------------------------------------
Features of Telephony API
------------------------------------------------------------

• Access SIM information.
• Check network operator.
• Detect call state.
• Get phone/network details.
• Monitor signal and network status.


------------------------------------------------------------
Example of Telephony API
------------------------------------------------------------

java
TelephonyManager tm =
(TelephonyManager) getSystemService(TELEPHONY_SERVICE);

String network = tm.getNetworkOperatorName();

System.out.println(network);


------------------------------------------------------------
Explanation
------------------------------------------------------------

• TelephonyManager → Accesses telephony services.
• getNetworkOperatorName() → Returns the mobile network name
  (e.g., Jio, Airtel).


------------------------------------------------------------
Required Permission
------------------------------------------------------------

Add the permission in AndroidManifest.xml:

xml
<uses-permission android:name="android.permission.READ_PHONE_STATE"/>


Note:

On Android 6.0 (API 23) and above, this permission must also
be requested at runtime.


------------------------------------------------------------
Applications of Telephony API
------------------------------------------------------------

• Display network operator.
• Detect incoming or outgoing calls.
• Check SIM card status.
• Network monitoring.
• Call management applications.


============================================================
2. SMS API
============================================================

------------------------------------------------------------
What is SMS API?
------------------------------------------------------------

The SMS API allows Android applications to send and receive
SMS (text messages).

It uses the SmsManager class.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

SMS API is an Android API used to send and receive text
messages programmatically.


------------------------------------------------------------
Sending an SMS Example
------------------------------------------------------------

java
SmsManager sms = SmsManager.getDefault();

sms.sendTextMessage(
    "9876543210",
    null,
    "Hello!",
    null,
    null
);


------------------------------------------------------------
Explanation
------------------------------------------------------------

• SmsManager.getDefault() → Gets the default SMS manager.
• sendTextMessage() → Sends the SMS.
• "9876543210" → Receiver's phone number.
• "Hello!" → SMS message.


------------------------------------------------------------
Receiving an SMS
------------------------------------------------------------

To receive SMS messages, create a BroadcastReceiver and
register it in AndroidManifest.xml.


------------------------------------------------------------
Required Permissions
------------------------------------------------------------

Add these permissions in AndroidManifest.xml:

xml
<uses-permission android:name="android.permission.SEND_SMS"/>

<uses-permission android:name="android.permission.RECEIVE_SMS"/>

<uses-permission android:name="android.permission.READ_SMS"/>


Note:

These are dangerous permissions, so on Android 6.0+ they must
also be requested from the user at runtime.


============================================================
Working of SMS API
============================================================

Application
      │
      ▼
SmsManager
      │
      ▼
Mobile Network
      │
      ▼
Receiver Gets SMS


============================================================
Advantages of Telephony API
============================================================

• Access phone and network information.
• Easy integration with mobile services.
• Supports call and SIM management.


============================================================
Advantages of SMS API
============================================================

• Easy SMS communication.
• Supports automatic alerts.
• Useful for OTP and notifications.


============================================================
Disadvantages
============================================================

------------------------------------------------------------
Telephony API
------------------------------------------------------------

• Requires user permission.
• Access to some information is restricted on newer Android
  versions.

------------------------------------------------------------
SMS API
------------------------------------------------------------

• SMS charges may apply.
• Sensitive permissions are required.
• Can be misused if proper security is not followed.


============================================================
Difference Between Telephony API and SMS API
============================================================

+--------------------------------------------------+--------------------------------------------------+
| Telephony API                                    | SMS API                                          |
+--------------------------------------------------+--------------------------------------------------+
| Accesses phone and network information.          | Sends and receives SMS messages.                 |
+--------------------------------------------------+--------------------------------------------------+
| Uses TelephonyManager.                           | Uses SmsManager.                                 |
+--------------------------------------------------+--------------------------------------------------+
| Requires READ_PHONE_STATE permission.            | Requires SEND_SMS, RECEIVE_SMS,                  |
|                                                  | and READ_SMS permissions.                        |
+--------------------------------------------------+--------------------------------------------------+
| Used for call and network management.            | Used for messaging and OTP services.             |
+--------------------------------------------------+--------------------------------------------------+


============================================================
Applications
============================================================

------------------------------------------------------------
Telephony API
------------------------------------------------------------

• Call management apps.
• Network monitoring apps.
• SIM information apps.
• Mobile operator detection.

------------------------------------------------------------
SMS API
------------------------------------------------------------

• OTP verification.
• Banking alerts.
• Appointment reminders.
• Emergency alert systems.
• Marketing messages.


============================================================
Exam Definition (2 Marks)
============================================================

Telephony API provides access to phone-related services such
as network, SIM, and call information using the
TelephonyManager class.

SMS API allows Android applications to send and receive text
messages using the SmsManager class.


============================================================
5-Mark Summary
============================================================

Telephony API is used to access network, SIM, and call
information using the TelephonyManager class.

SMS API is used to send and receive SMS using the
SmsManager class.

Required Permissions:

• Telephony API: READ_PHONE_STATE

• SMS API: SEND_SMS, RECEIVE_SMS, READ_SMS

Both APIs require runtime permission on Android 6.0 and
above.

These APIs are widely used in banking, OTP verification,
emergency services, call management, and network monitoring
applications.
      
      `},{id:17,question:"17. Explain Native Data Handling in Android. Discuss File I/O, SharedPreferences, SQLite, and Enterprise Data Access.",answer:"",codeExample:`
============================================================
     Explain Native Data Handling in Android
============================================================

============================================================
What is Native Data Handling?
============================================================

Native Data Handling in Android is the process of storing,
retrieving, and managing data within an Android application.
Android provides different storage options based on the type
and amount of data.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Native Data Handling is the process of storing, accessing,
updating, and managing data in Android applications using
storage methods like File I/O, SharedPreferences, SQLite,
and Enterprise Data Access.

============================================================
Types of Native Data Handling
============================================================

Android provides four main methods:

1. File I/O
2. SharedPreferences
3. SQLite Database
4. Enterprise Data Access


============================================================
1. File I/O
============================================================

------------------------------------------------------------
What is File I/O?
------------------------------------------------------------

File I/O (Input/Output) is used to store and read data from
files in the device's internal or external storage.

------------------------------------------------------------
Uses
------------------------------------------------------------

• Save text files.
• Store reports or documents.
• Read configuration files.

------------------------------------------------------------
Example
------------------------------------------------------------

String data = "Hello Android";

FileOutputStream fos = openFileOutput("sample.txt", MODE_PRIVATE);

fos.write(data.getBytes());

fos.close();

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Easy to use.
• Suitable for text and document storage.
• Supports internal and external storage.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Not suitable for large structured data.
• Searching data is difficult.


============================================================
2. SharedPreferences
============================================================

------------------------------------------------------------
What is SharedPreferences?
------------------------------------------------------------

SharedPreferences stores small amounts of data as key-value
pairs.

It is commonly used for:

• Login status
• Username
• App settings
• Theme (Light/Dark Mode)

------------------------------------------------------------
Example
------------------------------------------------------------

Store Data

SharedPreferences sp = getSharedPreferences("MyData", MODE_PRIVATE);

SharedPreferences.Editor editor = sp.edit();

editor.putString("username", "Raj");

editor.apply();

------------------------------------------------------------

Read Data

SharedPreferences sp = getSharedPreferences("MyData", MODE_PRIVATE);

String user = sp.getString("username", "");

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Simple and fast.
• Good for small data.
• Easy implementation.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Cannot store large amounts of data.
• Not suitable for relational data.


============================================================
3. SQLite Database
============================================================

------------------------------------------------------------
What is SQLite?
------------------------------------------------------------

SQLite is a lightweight relational database built into Android.

It stores data in tables with rows and columns.

------------------------------------------------------------
Uses
------------------------------------------------------------

• Student Records
• Banking Apps
• Shopping Apps
• Hospital Management

------------------------------------------------------------
Example
------------------------------------------------------------

Create Table

CREATE TABLE Student(
id INTEGER PRIMARY KEY,
name TEXT,
course TEXT
);

------------------------------------------------------------

Insert Data

INSERT INTO Student(name, course)
VALUES('Raj','MCA');

------------------------------------------------------------

Retrieve Data

SELECT * FROM Student;

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Fast and efficient.
• Supports SQL queries.
• Suitable for structured data.
• No separate database server required.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Less suitable for very large databases.
• Database design is required.


============================================================
4. Enterprise Data Access
============================================================

------------------------------------------------------------
What is Enterprise Data Access?
------------------------------------------------------------

Enterprise Data Access means accessing data stored on remote
servers or cloud databases through APIs or web services.

Instead of storing all data on the mobile device, the
application communicates with a server.

------------------------------------------------------------
Examples
------------------------------------------------------------

• Firebase
• REST APIs
• MySQL Server
• Oracle Database
• SQL Server

------------------------------------------------------------
Working
------------------------------------------------------------

Android App
      │
      ▼
REST API / Web Service
      │
      ▼
Cloud/Enterprise Database

------------------------------------------------------------
Advantages
------------------------------------------------------------

• Centralized data storage.
• Real-time synchronization.
• Easy backup and recovery.
• Suitable for large applications.

------------------------------------------------------------
Disadvantages
------------------------------------------------------------

• Requires an internet connection.
• Server maintenance is needed.
• Network delays may affect performance.


============================================================
Comparison of Data Handling Methods
============================================================

+------------------------+---------------------------+-------------------------------------------+
| Method                 | Stores                    | Best Used For                             |
+------------------------+---------------------------+-------------------------------------------+
| File I/O               | Files                     | Documents, text files, logs               |
+------------------------+---------------------------+-------------------------------------------+
| SharedPreferences      | Key-value pairs           | Login status, settings, preferences       |
+------------------------+---------------------------+-------------------------------------------+
| SQLite                 | Tables (Database)         | Structured data like students, products,  |
|                        |                           | orders                                    |
+------------------------+---------------------------+-------------------------------------------+
| Enterprise Data Access | Remote server/cloud       | Online apps, banking, e-commerce,         |
|                        |                           | cloud storage                             |
+------------------------+---------------------------+-------------------------------------------+


============================================================
Working of Native Data Handling
============================================================

User
   │
   ▼
Android Application
   │
   ├── File I/O
   ├── SharedPreferences
   ├── SQLite Database
   └── Enterprise Data Access
           │
           ▼
     Store / Retrieve Data


============================================================
Advantages of Native Data Handling
============================================================

• Secure data storage.
• Fast access to information.
• Supports offline storage (File I/O,
  SharedPreferences, SQLite).
• Supports online/cloud storage.
• Improves application performance.


============================================================
Disadvantages
============================================================

• File I/O is not suitable for complex data.
• SharedPreferences stores only small data.
• SQLite requires database management.
• Enterprise Data Access depends on network
  availability.


============================================================
Applications
============================================================

• Banking Apps
• E-commerce Apps
• Student Management Systems
• Healthcare Apps
• Social Media Apps
• Food Delivery Apps
• Attendance Systems


============================================================
Exam Definition (2 Marks)
============================================================

Native Data Handling in Android is the process of storing and
managing application data using File I/O,
SharedPreferences, SQLite, and Enterprise Data Access.


============================================================
5-Mark Summary
============================================================

Native Data Handling is used to store and manage data in
Android applications.

• File I/O stores and reads data from files.

• SharedPreferences stores small data as key-value pairs
  (e.g., login status and app settings).

• SQLite is a built-in relational database used for storing
  structured data.

• Enterprise Data Access accesses remote databases using
  REST APIs, Firebase, or cloud servers.

Choosing the appropriate storage method depends on the
application's data size, structure, and online/offline
requirements.
      
      `},{id:18,question:"18. Explain Enterprise Data Access using REST APIs in Android.",answer:"",codeExample:`
============================================================
      Explain Enterprise Data Access using REST APIs in Android
============================================================

============================================================
What is Enterprise Data Access?
============================================================

Enterprise Data Access is the process of accessing and managing
data stored on a remote server or cloud database from an Android
application.

Instead of storing all data on the mobile device, the app sends
requests to a server through REST APIs and receives the required
data.


------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Enterprise Data Access is the method of accessing, storing, and
managing data from a remote server or cloud database using REST
APIs in Android applications.


============================================================
What is a REST API?
============================================================

REST (Representational State Transfer) API is a web service that
allows communication between an Android application and a server
using the HTTP protocol.

REST APIs exchange data in JSON (JavaScript Object Notation)
format.


------------------------------------------------------------
Example
------------------------------------------------------------

A Shopping App sends a request to the server to get the product
list.

Server returns the product information in JSON.


============================================================
Architecture of Enterprise Data Access
============================================================

+--------------------+
|   Android App      |
+--------------------+
          │
     HTTP Request
          │
          ▼
+--------------------+
|     REST API       |
+--------------------+
          │
          ▼
+--------------------+
|  Server / Backend  |
| (Java, PHP, Node,  |
|  Python, etc.)     |
+--------------------+
          │
          ▼
+--------------------+
| Database           |
| (MySQL/Firebase/   |
| Oracle/SQL Server) |
+--------------------+


============================================================
Working of REST API
============================================================

------------------------------------------------------------
Step 1: User Requests Data
------------------------------------------------------------

The user opens the Android app.

------------------------------------------------------------
Step 2: Android Sends HTTP Request
------------------------------------------------------------

The app sends a request to the REST API.

------------------------------------------------------------
Step 3: Server Processes Request
------------------------------------------------------------

The server checks the request and communicates with the database.

------------------------------------------------------------
Step 4: Database Returns Data
------------------------------------------------------------

The server retrieves the required data.

------------------------------------------------------------
Step 5: Server Sends JSON Response
------------------------------------------------------------

The server sends the data in JSON format.

------------------------------------------------------------
Step 6: Android Displays Data
------------------------------------------------------------

The Android app reads the JSON data and displays it to the user.


============================================================
HTTP Methods Used in REST API
============================================================

+-------------+---------------------------------------------+
| Method      | Purpose                                     |
+-------------+---------------------------------------------+
| GET         | Retrieve data from the server.              |
+-------------+---------------------------------------------+
| POST        | Add new data to the server.                 |
+-------------+---------------------------------------------+
| PUT         | Update existing data.                       |
+-------------+---------------------------------------------+
| DELETE      | Delete data from the server.                |
+-------------+---------------------------------------------+


============================================================
Example of REST API URLs
============================================================

GET    https://example.com/api/products

POST   https://example.com/api/products

PUT    https://example.com/api/products/1

DELETE https://example.com/api/products/1


============================================================
Example JSON Response
============================================================

{
   "id": 1,
   "name": "Laptop",
   "price": 50000
}


============================================================
Android Example Using Retrofit
============================================================

------------------------------------------------------------
Step 1: API Interface
------------------------------------------------------------

@GET("products")
Call<List<Product>> getProducts();


------------------------------------------------------------
Step 2: Call the API
------------------------------------------------------------

Call<List<Product>> call = api.getProducts();

call.enqueue(new Callback<List<Product>>() {

    @Override
    public void onResponse(Call<List<Product>> call,
                           Response<List<Product>> response) {

        List<Product> products = response.body();
    }

    @Override
    public void onFailure(Call<List<Product>> call,
                          Throwable t) {

        t.printStackTrace();
    }
});


============================================================
Explanation
============================================================

• @GET → Retrieves data from the server.

• enqueue() → Sends the request asynchronously.

• onResponse() → Called when data is received successfully.

• onFailure() → Called if an error occurs.


============================================================
Advantages of REST APIs
============================================================

• Fast communication.

• Lightweight and efficient.

• Uses JSON, which is easy to read.

• Platform-independent.

• Easy integration with Android.

• Supports cloud databases.


============================================================
Disadvantages
============================================================

• Requires an internet connection.

• Server downtime affects the app.

• Data transfer may be slower on poor networks.

• Security measures like authentication are required.


============================================================
Applications
============================================================

• Banking Apps

• E-commerce Apps

• Social Media Apps

• Food Delivery Apps

• Hospital Management Systems

• Student Management Systems

• Weather Applications


============================================================
Difference Between Local Database and REST API
============================================================

+-----------------------------------------------+-----------------------------------------------+
| Local Database (SQLite)                       | REST API                                      |
+-----------------------------------------------+-----------------------------------------------+
| Stores data on the device.                    | Stores data on a remote server.               |
+-----------------------------------------------+-----------------------------------------------+
| Works offline.                                | Usually requires an internet connection.      |
+-----------------------------------------------+-----------------------------------------------+
| Faster for local access.                      | Enables real-time data sharing across devices.|
+-----------------------------------------------+-----------------------------------------------+
| Best for offline apps.                        | Best for cloud-based applications.            |
+-----------------------------------------------+-----------------------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

Enterprise Data Access using REST APIs allows Android
applications to communicate with remote servers using HTTP
methods (GET, POST, PUT, DELETE) and exchange data in JSON
format.


============================================================
5-Mark Summary
============================================================

Enterprise Data Access allows Android apps to access remote
databases through REST APIs.

REST APIs use HTTP methods such as GET, POST, PUT, and DELETE.

Data is usually exchanged in JSON format.

Android applications commonly use libraries like Retrofit or
Volley to communicate with REST APIs.

REST APIs are widely used in banking, e-commerce, healthcare,
food delivery, and social media applications because they
provide real-time, centralized, and scalable data access.
      `},{id:21,question:"21. What is a Custom View in Android? Explain how Canvas and onDraw() are used to draw on the screen.",answer:"",codeExample:`
============================================================
             What is a Custom View in Android?
============================================================

What is a Custom View?

A Custom View is a user-defined Android View that allows
developers to create their own UI components and graphics
instead of using only standard controls such as Button,
TextView, or ImageView.

Custom Views are useful for:

• Drawing shapes
• Creating graphs and charts
• Creating custom buttons
• Drawing games
• Creating special UI effects

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

A Custom View is a user-created Android View that provides
custom drawing and behavior by extending the View class.


============================================================
What is Canvas?
============================================================

Canvas is an Android class that provides methods for drawing
graphics on the screen.

Using Canvas, we can draw:

• Lines
• Circles
• Rectangles
• Text
• Images
• Other shapes

The drawing is normally performed inside the onDraw() method.


============================================================
What is onDraw()?
============================================================

onDraw() is a method of the Android View class.

It is called when Android needs to draw or redraw the View on
the screen.

------------------------------------------------------------
Basic Syntax
------------------------------------------------------------

@Override
protected void onDraw(Canvas canvas) {
    super.onDraw(canvas);

    // Drawing code
}

Here:

Canvas → Provides the drawing area.
canvas → Object used to draw on the screen.
onDraw() → Contains the drawing instructions.


============================================================
How Canvas and onDraw() Work
============================================================

The basic process is:

Custom View
     │
     ▼
onDraw()
     │
     ▼
Canvas
     │
     ├── Draw Line
     ├── Draw Circle
     ├── Draw Rectangle
     └── Draw Text
     │
     ▼
Screen


============================================================
Creating a Custom View
============================================================

We can create a Custom View by extending the View class.

------------------------------------------------------------
Example
------------------------------------------------------------

public class MyView extends View {

    Paint paint = new Paint();

    public MyView(Context context) {
        super(context);
        paint.setColor(Color.BLUE);
        paint.setStrokeWidth(5);
    }

    @Override
    protected void onDraw(Canvas canvas) {
        super.onDraw(canvas);

        canvas.drawCircle(200, 200, 100, paint);
    }
}


============================================================
Explanation
============================================================

1. Extend View

public class MyView extends View

This creates our own custom View.

------------------------------------------------------------

2. Create Paint

Paint paint = new Paint();

Paint defines properties such as color, size, style, and text size.

------------------------------------------------------------

3. Override onDraw()

@Override
protected void onDraw(Canvas canvas)

This method contains our drawing instructions.

------------------------------------------------------------

4. Draw a Circle

canvas.drawCircle(200, 200, 100, paint);

It draws a circle where:

200 → X-coordinate
200 → Y-coordinate
100 → Radius
paint → Drawing properties


============================================================
Common Canvas Drawing Methods
============================================================

+------------------+--------------------------+
| Method           | Purpose                  |
+------------------+--------------------------+
| drawLine()       | Draws a line             |
+------------------+--------------------------+
| drawCircle()     | Draws a circle           |
+------------------+--------------------------+
| drawRect()       | Draws a rectangle        |
+------------------+--------------------------+
| drawText()       | Draws text               |
+------------------+--------------------------+
| drawBitmap()     | Draws an image           |
+------------------+--------------------------+
| drawOval()       | Draws an oval            |
+------------------+--------------------------+


============================================================
Example: Drawing Multiple Shapes
============================================================

@Override
protected void onDraw(Canvas canvas) {
    super.onDraw(canvas);

    Paint paint = new Paint();

    paint.setColor(Color.RED);
    canvas.drawCircle(150, 150, 80, paint);

    paint.setColor(Color.BLUE);
    canvas.drawRect(300, 100, 500, 250, paint);

    paint.setColor(Color.BLACK);
    paint.setTextSize(40);
    canvas.drawText("Android", 150, 350, paint);
}

This draws:

      ●          ┌─────────┐
                 │         │
                 │         │
                 └─────────┘

             Android


============================================================
Using Custom View in an Activity
============================================================

The Custom View can be added to an Activity.

MyView myView = new MyView(this);
setContentView(myView);

Now Android displays the custom drawing created in onDraw().


============================================================
Important Classes
============================================================

1. View

Provides the basic UI component.

2. Canvas

Provides the area and methods for drawing.

3. Paint

Defines the appearance of the drawing.

------------------------------------------------------------

View
 │
 ├── onDraw()
 │      │
 │      ▼
 │    Canvas
 │      │
 │      ▼
 │    Paint
 │      │
 │      ▼
 └── Drawing on Screen


============================================================
Advantages of Custom View
============================================================

Allows completely custom designs.
Useful for graphics and games.
Can create charts and graphs.
Provides control over drawing.
Can combine drawing and user interaction.


============================================================
Applications of Custom Views
============================================================

Games
Graphs and charts
Drawing applications
Custom progress bars
Digital clocks
Signature pads
Custom buttons
Data visualization


============================================================
Exam Definition (2 Marks)
============================================================

A Custom View is a user-defined Android View created by
extending the View class. The Canvas provides drawing methods,
while the onDraw() method contains the code used to draw shapes,
text, images, and other graphics on the screen.


============================================================
5-Mark Summary
============================================================

A Custom View allows developers to create their own UI components.
It is usually created by extending the View class.
onDraw() is overridden to define what should be drawn.
Canvas provides methods such as drawCircle(), drawLine(),
drawRect(), and drawText().
Paint defines the color, size, style, and other drawing properties.
Custom Views are useful for games, charts, graphs, drawing apps,
and custom UI components.
      
      `},{id:22,question:"22. Explain Animation APIs in Android. Differentiate between Property Animation and View Animation.",answer:"",codeExample:`
============================================================
              Explain Animation APIs in Android
============================================================

What is Animation in Android?

Animation in Android is used to create movement and visual
effects in an application. It can make a view move, rotate,
resize, fade, or change its appearance.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Animation APIs in Android are classes and tools used to create
visual effects and movement for UI elements such as buttons,
images, text, and layouts.


============================================================
Animation APIs in Android
============================================================

Android mainly provides two important animation systems:

• View Animation (Tween Animation)
• Property Animation

Android also provides Drawable/Frame Animation for displaying
a sequence of images.


============================================================
1. View Animation
============================================================

What is View Animation?

View Animation is the older Android animation system. It changes
the visual appearance of a View without changing its actual
properties.

It supports:

• Alpha
• Scale
• Rotate
• Translate

------------------------------------------------------------
Example
------------------------------------------------------------

Animation animation =
    AnimationUtils.loadAnimation(this, R.anim.fade_in);

imageView.startAnimation(animation);

------------------------------------------------------------
XML Example
------------------------------------------------------------

<alpha
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:fromAlpha="0.0"
    android:toAlpha="1.0"
    android:duration="1000"/>

This creates a fade-in effect.

------------------------------------------------------------
Advantages
------------------------------------------------------------

Simple to use.
Good for basic visual effects.
Easy to define animations in XML.

------------------------------------------------------------
Limitation
------------------------------------------------------------

The animation mainly changes how the View looks, not its actual
property values.


============================================================
2. Property Animation
============================================================

What is Property Animation?

Property Animation is a more powerful animation system that
changes the actual property value of an object over time.

It was introduced in Android 3.0 (API level 11).

It can animate properties such as:

• alpha
• rotation
• translationX
• translationY
• scaleX
• scaleY

------------------------------------------------------------
Example
------------------------------------------------------------

ObjectAnimator animator =
    ObjectAnimator.ofFloat(
        imageView,
        "translationX",
        0f,
        300f
    );

animator.setDuration(1000);
animator.start();

This moves the ImageView horizontally.

------------------------------------------------------------
Advantages
------------------------------------------------------------

More powerful and flexible.
Changes actual object properties.
Can animate almost any property.
Supports complex animations.
Supports animation sets.


============================================================
Difference Between Property Animation and View Animation
============================================================

| Feature                  | View Animation                  | Property Animation            |
| -------------------------| ------------------------------- | ------------------------------|
| Introduced               | Older Android API               | Android 3.0 (API 11)          |
| Also called              | Tween Animation                 | Property Animation            |
| Changes actual property? | Generally no                    | Yes                           |
| Flexibility              | Limited                         | High                          |
| Supported properties     | Alpha, Scale, Rotate, Translate | Almost any property           |
| Performance/Control      | Basic                           | Better control                |
| Usage                    | Simple visual effects           | Complex animations            |
| Main Classes             | Animation, AnimationUtils       | ObjectAnimator, ValueAnimator |

============================================================
Example Comparison
============================================================

View Animation

ImageView
    │
    ▼
Visual movement
    │
    ▼
Actual position may remain unchanged

------------------------------------------------------------

Property Animation

ImageView
    │
    ▼
translationX changes
    │
    ▼
Actual property changes


============================================================
Animation API Classes
============================================================

View Animation

Important classes:

• Animation
• AlphaAnimation
• ScaleAnimation
• RotateAnimation
• TranslateAnimation
• AnimationSet

------------------------------------------------------------

Property Animation

Important classes:

• ObjectAnimator
• ValueAnimator
• AnimatorSet


============================================================
AnimatorSet Example
============================================================

Multiple animations can be combined using AnimatorSet.

ObjectAnimator move =
    ObjectAnimator.ofFloat(imageView, "translationX", 0f, 300f);

ObjectAnimator rotate =
    ObjectAnimator.ofFloat(imageView, "rotation", 0f, 360f);

AnimatorSet set = new AnimatorSet();

set.playTogether(move, rotate);
set.setDuration(1000);
set.start();

Here, the image moves and rotates at the same time.


============================================================
Applications of Animation
============================================================

• Splash screens
• Button effects
• Image transitions
• Loading animations
• Game animations
• Screen transitions
• Interactive UI elements


============================================================
Advantages of Animation
============================================================

• Makes the UI attractive.
• Improves user experience.
• Provides visual feedback.
• Makes transitions smoother.
• Helps users understand changes in the interface.


============================================================
Exam Definition (2 Marks)
============================================================

Animation APIs in Android are used to create movement and visual
effects in UI elements. The two major types are View Animation,
which provides basic visual transformations, and Property
Animation, which changes the actual properties of objects.


============================================================
5-Mark Summary
============================================================

Android provides APIs for creating movement and visual effects.

View Animation is the older system and supports alpha, scale,
rotation, and translation effects.

Property Animation is more powerful and changes the actual
property values of an object.

Important Property Animation classes are ObjectAnimator,
ValueAnimator, and AnimatorSet.

Important View Animation classes include Animation,
AlphaAnimation, ScaleAnimation, RotateAnimation, and
TranslateAnimation.

Property Animation is preferred for modern, complex animations,
while View Animation is useful for simple visual effects.
      
      `},{id:23,question:"23. Explain Multimedia in Android. How can you play audio/video using MediaPlayer/VideoView?",answer:"",codeExample:`
============================================================
             Explain Multimedia in Android
============================================================

How can you play audio/video using MediaPlayer/VideoView?


============================================================
What is Multimedia in Android?
============================================================

Multimedia in Android refers to the use of audio, video,
images, and other media content in Android applications.

Android provides built-in APIs and classes to play and manage
multimedia files.

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

Multimedia in Android is the use of audio, video, images, and
other media resources in Android applications using classes
such as MediaPlayer and VideoView.


============================================================
Types of Multimedia
============================================================

Audio – Music, sounds, voice recordings.
Video – Movies, tutorials, advertisements.
Images – Photos, icons, graphics.
Streaming Media – Audio/video played from the internet.


============================================================
MediaPlayer
============================================================

What is MediaPlayer?

MediaPlayer is an Android class used to play audio and video
media files.

It can play media from:

• Local resources
• Device storage
• URLs/streaming sources


============================================================
Basic MediaPlayer Life Cycle
============================================================

create()
   │
   ▼
prepare()
   │
   ▼
start()
   │
   ▼
pause()
   │
   ▼
start()
   │
   ▼
stop()
   │
   ▼
release()


============================================================
Playing Audio Using MediaPlayer
============================================================

Suppose an audio file named music.mp3 is stored in:

app/src/main/res/raw/music.mp3

------------------------------------------------------------
Java Example
------------------------------------------------------------

MediaPlayer mediaPlayer =
    MediaPlayer.create(this, R.raw.music);

mediaPlayer.start();

------------------------------------------------------------
Stop Audio
------------------------------------------------------------

mediaPlayer.stop();
mediaPlayer.release();

------------------------------------------------------------
Pause Audio
------------------------------------------------------------

mediaPlayer.pause();


============================================================
MediaPlayer Methods
============================================================

+----------------+---------------------------------------------+
| Method         | Purpose                                     |
+----------------+---------------------------------------------+
| create()       | Creates a MediaPlayer                       |
+----------------+---------------------------------------------+
| start()        | Starts playback                             |
+----------------+---------------------------------------------+
| pause()        | Pauses playback                             |
+----------------+---------------------------------------------+
| stop()         | Stops playback                              |
+----------------+---------------------------------------------+
| seekTo()       | Moves to a specific position                |
+----------------+---------------------------------------------+
| release()      | Releases resources                          |
+----------------+---------------------------------------------+


============================================================
VideoView
============================================================

What is VideoView?

VideoView is an Android UI component that makes it easy to
display and play video inside an Activity.

It works together with MediaPlayer internally.


============================================================
Playing Video Using VideoView
============================================================

Step 1: Add VideoView to XML

<VideoView
    android:id="@+id/videoView"
    android:layout_width="match_parent"
    android:layout_height="300dp"/>

------------------------------------------------------------
Step 2: Play Video
------------------------------------------------------------

VideoView videoView = findViewById(R.id.videoView);

Uri videoUri =
    Uri.parse("android.resource://" +
              getPackageName() +
              "/" + R.raw.sample_video);

videoView.setVideoURI(videoUri);

videoView.start();


============================================================
VideoView Controls
============================================================

A MediaController can provide standard playback controls.

MediaController controller =
    new MediaController(this);

controller.setAnchorView(videoView);

videoView.setMediaController(controller);

videoView.start();

This provides controls such as:

▶ Play    ⏸ Pause    ◀ Seek ▶


============================================================
MediaPlayer vs VideoView
============================================================

| Feature     | MediaPlayer                          | VideoView                       |
| ------------| ------------------------------------ | ------------------------------- |
| Purpose     | Plays audio/video                    | Mainly displays and plays video |
| Type        | Media playback class                 | UI component                    |
| Audio       | Yes                                  | Primarily video                 |
| Video       | Yes, with a suitable display surface | Yes                             |
| Controls    | Developer manages controls           | Can easily use MediaController  |
| Flexibility | More control                         | Easier to implement             |
| Usage       | Custom media applications            | Simple video playback           |


============================================================
Multimedia Working
============================================================

              Android Multimedia
                     │
          ┌──────────┴──────────┐
          │                     │
        Audio                  Video
          │                     │
          ▼                     ▼
     MediaPlayer             VideoView
          │                     │
          └──────────┬──────────┘
                     ▼
                Media Output


============================================================
Applications of Multimedia
============================================================

• Music Player Apps
• Video Player Apps
• Online Education
• Video Streaming
• Games
• Video Calling
• Entertainment Apps
• E-learning Apps


============================================================
Advantages
============================================================

• Provides rich user experience.
• Supports audio and video playback.
• Supports local and streaming media.
• Easy integration into applications.


============================================================
Important Note
============================================================

For modern Android applications, MediaPlayer and VideoView
are still useful for basic playback, but newer media
applications commonly use Jetpack Media3/ExoPlayer because it
provides more advanced playback features.


============================================================
Exam Definition (2 Marks)
============================================================

Multimedia in Android refers to handling audio, video, and
images in Android applications. MediaPlayer is used for media
playback, while VideoView provides a simple way to display and
play video inside an Activity.


============================================================
5-Mark Summary
============================================================

Android supports audio, video, images, and streaming media.

MediaPlayer is used to play audio and video files.

Important methods are start(), pause(), stop(), seekTo(), and
release().

VideoView is a UI component used mainly for simple video
playback.

MediaController can provide Play, Pause, and Seek controls.

Multimedia is widely used in music players, video apps, games,
education, and entertainment applications.
      
      `},{id:24,question:"24. Explain the steps to record audio using the MediaRecorder API.",answer:"",codeExample:`
============================================================
      Explain the Steps to Record Audio Using the
                 MediaRecorder API
============================================================

What is MediaRecorder?

MediaRecorder is an Android API used to record audio and video
from device hardware such as the microphone or camera.

For audio recording, MediaRecorder captures sound through the
microphone and saves it into an audio file.


============================================================
Definition (2 Marks)
============================================================

MediaRecorder is an Android API used to capture and save audio
from the device microphone into an audio file.


============================================================
Steps to Record Audio
============================================================

The basic steps are:

1. Add microphone permission.
2. Request permission at runtime.
3. Create a MediaRecorder object.
4. Set the audio source.
5. Set the output format.
6. Set the audio encoder.
7. Set the output file.
8. Prepare the recorder.
9. Start recording.
10. Stop and release the recorder.


============================================================
Step 1: Add Permission
============================================================

Add the following permission to AndroidManifest.xml:

<uses-permission android:name="android.permission.RECORD_AUDIO"/>

RECORD_AUDIO allows the application to access the device
microphone.

On Android 6.0 and above, microphone permission must also be
requested at runtime.


============================================================
Step 2: Create MediaRecorder
============================================================

MediaRecorder recorder = new MediaRecorder();

This creates a MediaRecorder object.


============================================================
Step 3: Set Audio Source
============================================================

recorder.setAudioSource(
    MediaRecorder.AudioSource.MIC
);

This tells Android to use the microphone as the audio source.


============================================================
Step 4: Set Output Format
============================================================

recorder.setOutputFormat(
    MediaRecorder.OutputFormat.THREE_GPP
);

This specifies the format in which the recorded audio will be
stored.


============================================================
Step 5: Set Audio Encoder
============================================================

recorder.setAudioEncoder(
    MediaRecorder.AudioEncoder.AMR_NB
);

The encoder converts the captured audio into the required
encoded format.


============================================================
Step 6: Set Output File
============================================================

recorder.setOutputFile(
    getExternalFilesDir(null) + "/recording.3gp"
);

This specifies where the recorded audio file will be saved.


============================================================
Step 7: Prepare the Recorder
============================================================

recorder.prepare();

This prepares the MediaRecorder for recording.


============================================================
Step 8: Start Recording
============================================================

recorder.start();

The microphone starts recording audio.


============================================================
Step 9: Stop Recording
============================================================

When the user presses the Stop button:

recorder.stop();

The recording is stopped and the audio file is saved.


============================================================
Step 10: Release Resources
============================================================

recorder.release();
recorder = null;

This releases the resources used by the recorder.


============================================================
Complete Example
============================================================

MediaRecorder recorder;

void startRecording() throws IOException {

    recorder = new MediaRecorder();

    recorder.setAudioSource(
        MediaRecorder.AudioSource.MIC
    );

    recorder.setOutputFormat(
        MediaRecorder.OutputFormat.THREE_GPP
    );

    recorder.setAudioEncoder(
        MediaRecorder.AudioEncoder.AMR_NB
    );

    recorder.setOutputFile(
        getExternalFilesDir(null) +
        "/recording.3gp"
    );

    recorder.prepare();
    recorder.start();
}

void stopRecording() {

    if (recorder != null) {
        recorder.stop();
        recorder.release();
        recorder = null;
    }
}


============================================================
Recording Process Diagram
============================================================

User Presses Record
        │
        ▼
Create MediaRecorder
        │
        ▼
Set Audio Source (MIC)
        │
        ▼
Set Output Format
        │
        ▼
Set Audio Encoder
        │
        ▼
Set Output File
        │
        ▼
prepare()
        │
        ▼
start()
        │
        ▼
Audio Recording
        │
        ▼
stop()
        │
        ▼
release()
        │
        ▼
Audio File Saved


============================================================
Important MediaRecorder Methods
============================================================

+----------------------+-----------------------------------------+
| Method               | Purpose                                 |
+----------------------+-----------------------------------------+
| setAudioSource()     | Selects the microphone as audio source  |
+----------------------+-----------------------------------------+
| setOutputFormat()    | Sets recording format                   |
+----------------------+-----------------------------------------+
| setAudioEncoder()    | Sets audio encoding method              |
+----------------------+-----------------------------------------+
| setOutputFile()      | Specifies output file                   |
+----------------------+-----------------------------------------+
| prepare()            | Prepares recorder                       |
+----------------------+-----------------------------------------+
| start()              | Starts recording                        |
+----------------------+-----------------------------------------+
| stop()               | Stops recording                         |
+----------------------+-----------------------------------------+
| release()            | Releases resources                      |
+----------------------+-----------------------------------------+


============================================================
Applications of Audio Recording
============================================================

• Voice Recorder Apps
• Audio Notes
• Podcast Apps
• Educational Apps
• Interview Recording
• Voice Messaging
• Music Recording


============================================================
Advantages
============================================================

• Simple API for basic audio recording.
• Uses the device microphone.
• Can save recordings as files.
• Easy to integrate into Android applications.


============================================================
Limitations
============================================================

• Requires microphone permission.
• Improper resource handling can cause errors.
• For advanced audio recording, newer APIs may be more
  appropriate.


============================================================
Exam Definition (2 Marks)
============================================================

MediaRecorder is an Android API used to record audio through
the device microphone. The main steps are setting permission,
creating MediaRecorder, setting audio source, output format,
encoder, and file, preparing, starting, stopping, and
releasing the recorder.


============================================================
5-Mark Answer Summary
============================================================

Permission
   ↓
Create MediaRecorder
   ↓
Set Audio Source
   ↓
Set Output Format
   ↓
Set Audio Encoder
   ↓
Set Output File
   ↓
prepare()
   ↓
start()
   ↓
stop()
   ↓
release()

This process records audio from the microphone and saves it
as an audio file.
      
      `},{id:25,question:"25. What is Fused Location Provider API? How is it better than LocationManager?",answer:"",codeExample:`
============================================================
        What is Fused Location Provider API?
        How is it better than LocationManager?
============================================================

What is Fused Location Provider API?

The Fused Location Provider API is an Android location API that
provides the device's current or updated location by intelligently
combining information from different location sources such as:

• GPS
• Wi-Fi
• Mobile networks
• Device sensors

It is provided through Google Play services and is commonly
accessed using FusedLocationProviderClient.


============================================================
Definition (2 Marks)
============================================================

The Fused Location Provider API is a location service that combines
multiple location sources to provide accurate and power-efficient
location information to Android applications.


============================================================
How Does It Work?
============================================================

        Location Sources
              │
     ┌────────┼────────┐
     ▼        ▼        ▼
    GPS     Wi-Fi   Mobile Network
     │        │        │
     └────────┼────────┘
              ▼
   Fused Location Provider
              │
              ▼
       Android Application
              │
              ▼
      Current Location

The API automatically decides which available sources are most
appropriate for the requested location accuracy and update frequency.


============================================================
Basic Example
============================================================

First, an application needs the appropriate location permission.

<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION" />

<uses-permission
    android:name="android.permission.ACCESS_COARSE_LOCATION" />

Then a FusedLocationProviderClient can be obtained:

FusedLocationProviderClient client =
    LocationServices.getFusedLocationProviderClient(this);

For a last-known location:

client.getLastLocation()
    .addOnSuccessListener(location -> {

        if (location != null) {
            double latitude = location.getLatitude();
            double longitude = location.getLongitude();

            System.out.println(latitude);
            System.out.println(longitude);
        }
    });

On modern Android, location permissions must be requested from
the user at runtime. Background location also has additional
restrictions.


============================================================
What is LocationManager?
============================================================

LocationManager is Android's traditional location API. It allows
applications to request location updates from individual location
providers, such as:

• GPS provider
• Network provider

Example:

LocationManager manager =
    (LocationManager) getSystemService(
        LOCATION_SERVICE
    );

The developer generally has more direct control over the selected
provider.


============================================================
Fused Location Provider vs LocationManager
============================================================

| Feature               | Fused Location Provider                       | LocationManager                              |
| ----------------------| --------------------------------------------- | -------------------------------------------- |
| Provider selection    | Automatically combines sources                | Developer selects providers                  |
| Accuracy              | Generally provides a good balance of accuracy | Depends on selected provider                 |
| Battery usage         | Optimized for power efficiency                | Can consume more power depending on requests |
| GPS + Wi-Fi + Network | Can intelligently combine sources             | Handles providers separately                 |
| Ease of use           | Easier for common location tasks              | More low-level control                       |
| API                   | FusedLocationProviderClient                   | LocationManager                              |
| Google Play services  | Required                                      | Not required                                 |
| Best suited for       | Most modern location-based apps               | Low-level/provider-specific control          |


============================================================
Why is Fused Location Provider Better?
============================================================

1. Better Power Efficiency

It can choose an appropriate combination of location sources
instead of relying continuously on GPS.

2. Good Accuracy

It can combine different sources to provide a useful balance
between accuracy and battery consumption.

3. Easy to Use

Developers usually don't need to manually decide whether GPS or
network location should be used.

4. Intelligent Location Updates

The application can specify requirements such as desired accuracy
and update interval, and the fused provider handles the underlying
sources.

5. Better for Modern Apps

For common use cases such as maps, delivery tracking, fitness,
and nearby-place features, the fused API is generally more
convenient.


============================================================
Applications
============================================================

The Fused Location Provider API is commonly used in:

• Google Maps-like applications
• Food delivery apps
• Ride-sharing applications
• Fitness and tracking apps
• Weather applications
• Location-based services
• Nearby-place applications


============================================================
Exam Definition (2 Marks)
============================================================

The Fused Location Provider API is an Android location API that
combines information from GPS, Wi-Fi, mobile networks, and other
sources to provide accurate and power-efficient location
information. It is accessed through FusedLocationProviderClient.


============================================================
5-Mark Summary
============================================================

Fused Location Provider API provides location using multiple
sources.

It can combine GPS, Wi-Fi, mobile networks, and sensors.

It is generally easier to use and more power-efficient than
directly managing individual providers.

LocationManager provides lower-level access to individual
location providers.

Therefore, the Fused Location Provider is usually preferred for
modern applications requiring normal location services, while
LocationManager is useful when direct provider-level control is
needed.
      
      `},{id:26,question:"26. Explain how to access the Accelerometer sensor and display its values.",answer:"",codeExample:`
============================================================
Explain How to Access the Accelerometer Sensor and Display Its Values
============================================================

What is an Accelerometer?

An accelerometer is a sensor in Android devices that measures
acceleration or movement along the X, Y, and Z axes.

It can be used to detect:

• Device movement
• Tilting
• Shaking
• Screen orientation changes
• Motion in games

------------------------------------------------------------
Definition (2 Marks)
------------------------------------------------------------

An accelerometer is an Android sensor that measures acceleration
along the X, Y, and Z axes and provides these values to an
application.


============================================================
X, Y, and Z Axes
============================================================

             Y
             ↑
             │
             │
             │
             ●────────────→ X
            /
           /
          ↓
          Z

The sensor provides three values:

X → Left / Right movement
Y → Up / Down movement
Z → Forward / Backward movement

The values are generally measured in m/s².


============================================================
Classes Used
============================================================

Android provides the following classes:

------------------------------------------------------------
1. SensorManager
------------------------------------------------------------

Used to access and manage device sensors.

------------------------------------------------------------
2. Sensor
------------------------------------------------------------

Represents a particular sensor such as the accelerometer.

------------------------------------------------------------
3. SensorEventListener
------------------------------------------------------------

Receives sensor value changes.


============================================================
Steps to Access Accelerometer
============================================================

------------------------------------------------------------
Step 1: Get SensorManager
------------------------------------------------------------

SensorManager sensorManager =
    (SensorManager) getSystemService(
        SENSOR_SERVICE
    );

------------------------------------------------------------
Step 2: Get the Accelerometer
------------------------------------------------------------

Sensor accelerometer =
    sensorManager.getDefaultSensor(
        Sensor.TYPE_ACCELEROMETER
    );

This obtains the device's accelerometer sensor.

------------------------------------------------------------
Step 3: Implement SensorEventListener
------------------------------------------------------------

public class MainActivity extends AppCompatActivity
        implements SensorEventListener {

The listener receives updated sensor values.

------------------------------------------------------------
Step 4: Register the Sensor
------------------------------------------------------------

sensorManager.registerListener(
    this,
    accelerometer,
    SensorManager.SENSOR_DELAY_NORMAL
);

This starts receiving accelerometer data.

------------------------------------------------------------
Step 5: Read Sensor Values
------------------------------------------------------------

The onSensorChanged() method is called whenever the sensor
values change.

@Override
public void onSensorChanged(SensorEvent event) {

    float x = event.values[0];
    float y = event.values[1];
    float z = event.values[2];

    System.out.println(
        "X: " + x +
        " Y: " + y +
        " Z: " + z
    );
}

Here:

event.values[0] → X-axis
event.values[1] → Y-axis
event.values[2] → Z-axis


============================================================
Displaying Values in TextView
============================================================

XML

<TextView
    android:id="@+id/sensorText"
    android:layout_width="wrap_content"
    android:layout_height="wrap_content"
    android:text="Accelerometer Values"/>

Java

TextView sensorText;

@Override
public void onSensorChanged(SensorEvent event) {

    float x = event.values[0];
    float y = event.values[1];
    float z = event.values[2];

    sensorText.setText(
        "X: " + x +
        "
Y: " + y +
        "
Z: " + z
    );
}

The screen may display:

Accelerometer Values

X: 0.52
Y: 9.61
Z: 0.84

The exact values change as the device moves.


============================================================
Step 6: Handle Sensor Accuracy
============================================================

@Override
public void onAccuracyChanged(
        Sensor sensor, int accuracy) {
    // Handle accuracy changes
}

This method is called when the accuracy of the sensor changes.


============================================================
Step 7: Unregister the Sensor
============================================================

When the Activity is no longer active, unregister the listener
to avoid unnecessary battery usage.

@Override
protected void onPause() {
    super.onPause();

    sensorManager.unregisterListener(this);
}


============================================================
Complete Example
============================================================

public class MainActivity extends AppCompatActivity
        implements SensorEventListener {

    SensorManager sensorManager;
    Sensor accelerometer;
    TextView sensorText;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        setContentView(R.layout.activity_main);

        sensorText = findViewById(R.id.sensorText);

        sensorManager =
            (SensorManager) getSystemService(
                SENSOR_SERVICE
            );

        accelerometer =
            sensorManager.getDefaultSensor(
                Sensor.TYPE_ACCELEROMETER
            );
    }

    @Override
    protected void onResume() {
        super.onResume();

        sensorManager.registerListener(
            this,
            accelerometer,
            SensorManager.SENSOR_DELAY_NORMAL
        );
    }

    @Override
    public void onSensorChanged(SensorEvent event) {

        float x = event.values[0];
        float y = event.values[1];
        float z = event.values[2];

        sensorText.setText(
            "X: " + x +
            "
Y: " + y +
            "
Z: " + z
        );
    }

    @Override
    public void onAccuracyChanged(
            Sensor sensor,
            int accuracy) {
    }

    @Override
    protected void onPause() {
        super.onPause();

        sensorManager.unregisterListener(this);
    }
}


============================================================
Working Diagram
============================================================

Android Device
      │
      ▼
Accelerometer Sensor
      │
      ▼
SensorManager
      │
      ▼
SensorEventListener
      │
      ▼
onSensorChanged()
      │
      ▼
X, Y, Z Values
      │
      ▼
TextView
      │
      ▼
Values Displayed


============================================================
Applications of Accelerometer
============================================================

Motion detection
Mobile games
Shake detection
Step/movement tracking
Screen orientation
Fitness applications
Vehicle movement detection


============================================================
Important Methods
============================================================

+--------------------------------+--------------------------------+
| Method                         | Purpose                        |
+--------------------------------+--------------------------------+
| getDefaultSensor()             | Gets the required sensor      |
+--------------------------------+--------------------------------+
| registerListener()             | Starts receiving sensor data  |
+--------------------------------+--------------------------------+
| onSensorChanged()              | Receives changed sensor values|
+--------------------------------+--------------------------------+
| onAccuracyChanged()            | Handles sensor accuracy       |
|                                | changes                       |
+--------------------------------+--------------------------------+
| unregisterListener()           | Stops receiving sensor data   |
+--------------------------------+--------------------------------+


============================================================
Exam Definition (2 Marks)
============================================================

An accelerometer is a hardware sensor that measures acceleration
along the X, Y, and Z axes. Android applications access it using
SensorManager, Sensor, and SensorEventListener, and the values
are received through the onSensorChanged() method.


============================================================
5-Mark Summary
============================================================

Get SensorManager.

Get the accelerometer using getDefaultSensor().

Implement SensorEventListener.

Register the sensor using registerListener().

Read X, Y, and Z values from event.values[].

Display the values using a TextView.

Unregister the listener when it is no longer needed.
      
      `},{id:27,question:"27. Differentiate between Accelerometer and Gyroscope with real-life applications.",answer:"",codeExample:`
============================================================
   Difference Between Accelerometer and Gyroscope with
                  Real-Life Applications
============================================================

Both Accelerometer and Gyroscope are motion sensors used in
smartphones and other mobile devices, but they measure
different types of movement.


============================================================
1. Accelerometer
============================================================

An Accelerometer measures linear acceleration or changes in
movement along the X, Y, and Z axes.

It can detect whether the device is:

• Moving
• Tilting
• Shaking
• Changing orientation due to gravity

------------------------------------------------------------
Example
------------------------------------------------------------

When you tilt your phone, the accelerometer detects the
change and can help rotate the screen.


============================================================
2. Gyroscope
============================================================

A Gyroscope measures the angular velocity (rotation) of the
device around its axes.

It detects how quickly and in which direction the device is
rotating.

------------------------------------------------------------
Example
------------------------------------------------------------

When you rotate your phone while playing a racing or
motion-controlled game, the gyroscope detects the rotation.


============================================================
Accelerometer vs Gyroscope
============================================================

| Feature              | Accelerometer           | Gyroscope                     |
| -------------------- | ----------------------- | ----------------------------- |
| Measures             | Linear acceleration     | Angular rotation              |
| Detects              | Movement, tilt, shaking | Rotation and angular movement |
| Axes                 | X, Y, Z                 | X, Y, Z                       |
| Unit                 | m/s²                    | rad/s                         |
| Gravity detection    | Yes                     | No, not directly              |
| Rotation measurement | Limited                 | Very accurate                 |
| Main use             | Detect movement/tilt    | Detect rotation/orientation   |
| Power usage          | Generally lower         | Generally higher              |
| Example              | Screen rotation         | Motion-controlled gaming      |


============================================================
Simple Example
============================================================

Imagine holding a smartphone:

       Accelerometer
            │
            ▼
    "Is the phone moving
       or tilting?"
            
       Gyroscope
            │
            ▼
    "Is the phone rotating,
      and how fast?"


============================================================
Real-Life Applications
============================================================

Applications of Accelerometer

------------------------------------------------------------
1. Automatic Screen Rotation
------------------------------------------------------------

Detects the phone's orientation and helps switch between
portrait and landscape modes.

------------------------------------------------------------
2. Step/Movement Detection
------------------------------------------------------------

Can detect movement patterns used by fitness applications.

------------------------------------------------------------
3. Shake Detection
------------------------------------------------------------

Apps can detect when the phone is shaken.

------------------------------------------------------------
4. Mobile Games
------------------------------------------------------------

Used for basic motion-based controls.

------------------------------------------------------------
5. Fall/Motion Detection
------------------------------------------------------------

Can be used to detect sudden changes in movement.


============================================================
Applications of Gyroscope
============================================================

------------------------------------------------------------
1. Gaming
------------------------------------------------------------

Used for steering and motion controls in racing and other
games.

------------------------------------------------------------
2. Camera Applications
------------------------------------------------------------

Helps detect device rotation and movement for stabilization
and orientation.

------------------------------------------------------------
3. Virtual Reality (VR)
------------------------------------------------------------

Tracks rotational head/device movement.

------------------------------------------------------------
4. Augmented Reality (AR)
------------------------------------------------------------

Helps determine how the device is rotating and oriented.

------------------------------------------------------------
5. Image/Video Stabilization
------------------------------------------------------------

Can help detect rotational movement for stabilization
systems.


============================================================
Using Both Sensors Together
============================================================

Many smartphones combine accelerometer and gyroscope data to
get better motion information.

       Accelerometer
             │
             │ Linear movement
             ▼
       ┌─────────────┐
       │ Sensor      │
       │ Fusion      │
       └─────────────┘
             ▲
             │ Rotation
             │
        Gyroscope
             │
             ▼
      Better Motion
       Information

For example, a VR application can use both sensors to
understand how the device is moving and rotating.


============================================================
Exam Definition (2 Marks)
============================================================

Accelerometer: Measures linear acceleration along the X, Y,
and Z axes and is used for detecting movement, tilt, and
shaking.

Gyroscope: Measures angular velocity and is used for detecting
rotation and orientation changes.


============================================================
5-Mark Summary
============================================================

The accelerometer detects linear movement and tilt, while the
gyroscope detects rotation. Accelerometers are commonly used
for screen rotation, step detection, and shake detection,
whereas gyroscopes are used in gaming, VR, AR, camera
stabilization, and motion tracking.
      
      `},{id:28,question:"28. Explain the permissions required for Camera, Microphone, and Location access in Android.",answer:"",codeExample:`
============================================================
Permissions Required for Camera, Microphone, and Location Access in Android
============================================================

What are Permissions in Android?

Permissions are rules that protect sensitive device features and
user data. An Android application must request permission before
accessing features such as the camera, microphone, or location.

For modern Android versions, sensitive permissions are generally:

• Declared in AndroidManifest.xml.
• Requested from the user at runtime when required.
• Checked before using the protected feature.


============================================================
1. Camera Permission
============================================================

To access the device camera, use:

<uses-permission android:name="android.permission.CAMERA"/>

Runtime Permission

if (ActivityCompat.checkSelfPermission(
        this,
        Manifest.permission.CAMERA)
        != PackageManager.PERMISSION_GRANTED) {

    ActivityCompat.requestPermissions(
        this,
        new String[]{Manifest.permission.CAMERA},
        100);
}

Applications

• Camera applications
• QR code scanners
• Video calling
• Document scanning


============================================================
2. Microphone Permission
============================================================

To record audio using the microphone:

<uses-permission android:name="android.permission.RECORD_AUDIO"/>

Runtime Permission

if (ActivityCompat.checkSelfPermission(
        this,
        Manifest.permission.RECORD_AUDIO)
        != PackageManager.PERMISSION_GRANTED) {

    ActivityCompat.requestPermissions(
        this,
        new String[]{Manifest.permission.RECORD_AUDIO},
        101);
}

Applications

• Voice recorder
• Audio/video calling
• Voice search
• Audio recording


============================================================
3. Location Permission
============================================================

Android provides two main location permissions.

------------------------------------------------------------
Approximate Location
------------------------------------------------------------

<uses-permission
    android:name="android.permission.ACCESS_COARSE_LOCATION"/>

Provides approximate location.

------------------------------------------------------------
Precise Location
------------------------------------------------------------

<uses-permission
    android:name="android.permission.ACCESS_FINE_LOCATION"/>

Provides more precise location when the user grants precise access.

------------------------------------------------------------
Runtime Permission
------------------------------------------------------------

ActivityCompat.requestPermissions(
    this,
    new String[]{
        Manifest.permission.ACCESS_FINE_LOCATION,
        Manifest.permission.ACCESS_COARSE_LOCATION
    },
    102);

Applications

• Maps
• Navigation
• Weather applications
• Food delivery
• Ride-sharing applications


============================================================
Permission Flow
============================================================

        Android Application
                │
                ▼
       Declare Permission
       in Manifest File
                │
                ▼
       Check Permission
                │
                ▼
      Request at Runtime
                │
                ▼
        ┌───────┴───────┐
        │               │
      Allow            Deny
        │               │
        ▼               ▼
 Access Feature     No Access


============================================================
Comparison
============================================================

+--------------------------+--------------------------------+
| Feature                  | Permission                     |
+--------------------------+--------------------------------+
| Camera                   | CAMERA                         |
+--------------------------+--------------------------------+
| Microphone               | RECORD_AUDIO                   |
+--------------------------+--------------------------------+
| Approximate Location     | ACCESS_COARSE_LOCATION        |
+--------------------------+--------------------------------+
| Precise Location         | ACCESS_FINE_LOCATION           |
+--------------------------+--------------------------------+


============================================================
Important Points
============================================================

1. Manifest Declaration

Permissions are declared in:

AndroidManifest.xml

------------------------------------------------------------

2. Runtime Permission

For dangerous/sensitive permissions, Android requires the
application to ask the user while the app is running.

------------------------------------------------------------

3. User Control

The user can allow or deny access.

------------------------------------------------------------

4. Ask Only When Needed

An application should request a permission when it actually
needs the corresponding feature.

------------------------------------------------------------

5. Location Background Access

If an application needs to access location while it is not
actively being used, additional background-location rules and
permissions apply. It should not simply request background
access without a legitimate need.


============================================================
Real-Life Example
============================================================

Suppose a food delivery application wants to:

Take a profile photo → Camera permission

Record a voice message → Microphone permission

Find the delivery address → Location permission


Food Delivery App
      │
      ├── Camera
      │     └── CAMERA
      │
      ├── Voice
      │     └── RECORD_AUDIO
      │
      └── Location
            ├── ACCESS_COARSE_LOCATION
            └── ACCESS_FINE_LOCATION


============================================================
Exam Definition (2 Marks)
============================================================

Android permissions control access to sensitive device features.
The Camera requires CAMERA, the Microphone requires
RECORD_AUDIO, and Location uses ACCESS_COARSE_LOCATION and/or
ACCESS_FINE_LOCATION. These permissions are declared in the
manifest and, where required, requested from the user at runtime.


============================================================
5-Mark Summary
============================================================

Camera: android.permission.CAMERA

Microphone: android.permission.RECORD_AUDIO

Location: ACCESS_COARSE_LOCATION and ACCESS_FINE_LOCATION

Sensitive permissions must be declared in the manifest and
requested at runtime when required.

The user can allow or deny access.

Proper permission handling improves security and user privacy.
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:111111,question:"Mid questions papaer with answers.",answer:"",codeExample:`
============================================================
Q.1 (a) (i)
Question: What is the purpose of the ObjectAnimator class?
============================================================

Answer:

ObjectAnimator is an Android class used to create animations
by changing the properties of an object or View over time.

It can animate properties such as:

1. Alpha
2. Rotation
3. Translation
4. Scale

Example:

ObjectAnimator animator =
        ObjectAnimator.ofFloat(view, "alpha", 0f, 1f);

animator.setDuration(1000);
animator.start();


In simple words:

ObjectAnimator is used to change View properties smoothly
to create animations.


============================================================
Q.1 (a) (ii)
Question: Define "interaction" amongst Activities in Android.
============================================================

Answer:

Interaction between Activities means communication between
one Activity and another Activity.

It is mainly done using Intent.

Example:

Intent intent =
        new Intent(MainActivity.this, SecondActivity.class);

intent.putExtra("name", "Raj");

startActivity(intent);


In SecondActivity:

String name =
        getIntent().getStringExtra("name");


In simple words:

Activity interaction allows one Activity to start another
Activity and transfer data.


============================================================
Q.1 (a) (iii)
Question: What is the difference between a mobile website
and a mobile app?
============================================================

Answer:

Mobile Website:
- Runs inside a web browser.
- Usually requires internet.
- Does not normally require installation.
- Has limited access to device features.

Mobile App:
- Installed on the mobile device.
- Runs as an application.
- Can work offline for some features.
- Can access device features such as camera, GPS and sensors.


Difference:

Mobile Website              Mobile App
------------------------------------------------------------
Runs in browser             Installed on device
Usually needs internet      Can support offline use
No installation required    Requires installation
Limited device access       Better device access


============================================================
Q.1 (b) (i)
Question: Which method is used to start video playback
in a VideoView?
============================================================

Options:

A) play()
B) start()
C) resume()
D) begin()

Answer:

Correct Answer: B) start()


Example:

VideoView videoView = findViewById(R.id.videoView);

videoView.start();


============================================================
Q.1 (b) (ii)
Question: Which method of NotificationManager is used
to issue a notification?
============================================================

Options:

A) sendNotification()
B) postNotification()
C) issueNotification()
D) notify()

Answer:

Correct Answer: D) notify()


Example:

notificationManager.notify(1, notification);


============================================================
Q.2 (i)
Question: What is the role of attributes in a custom View,
and how are they defined?
============================================================

Answer:

Attributes are used to customize the appearance and
behavior of a Custom View.

Examples:

1. Text color
2. Text size
3. Background color
4. Border width
5. Custom shape


Step 1: Define attributes in attrs.xml

<declare-styleable name="MyCustomView">

    <attr name="customColor" format="color"/>

    <attr name="customSize" format="dimension"/>

</declare-styleable>


Step 2: Use attributes in XML

<com.example.MyCustomView
    android:layout_width="match_parent"
    android:layout_height="100dp"
    app:customColor="#FF0000"
    app:customSize="20dp"/>


Step 3: Read attributes in Custom View

TypedArray a = context.obtainStyledAttributes(
        attrs,
        R.styleable.MyCustomView
);

int color = a.getColor(
        R.styleable.MyCustomView_customColor,
        Color.RED
);

a.recycle();


In simple words:

attrs.xml
    ↓
Define custom attributes
    ↓
XML
    ↓
Set attribute values
    ↓
Custom View
    ↓
Read and use attributes


============================================================
Q.2 (ii)
Question: How can animations enhance the user experience
in mobile UI design?
============================================================

Answer:

Animations make a mobile application more attractive,
interactive and easy to understand.

Advantages:

1. Provides smooth transitions between screens.

2. Gives feedback when the user performs an action.

3. Helps the user understand changes in the UI.

4. Makes the application more attractive.

5. Guides the user's attention.


Example:

ObjectAnimator animator =
        ObjectAnimator.ofFloat(
                button,
                "scaleX",
                1f,
                1.2f
        );

animator.setDuration(300);
animator.start();


Conclusion:

Animations improve usability, visual feedback and
overall user experience.


============================================================
Q.2 (iii)
Question: Explain the process of installing necessary
libraries or dependencies in your development environment.
============================================================

Answer:

In Android Studio, libraries and dependencies are generally
added using the Gradle build system.

Steps:

1. Open the Android project.

2. Open build.gradle or build.gradle.kts.

3. Add the required dependency.

4. Sync the project.

5. Use the library classes in the application.


Example:

dependencies {

    implementation(
        "com.google.android.material:material:..."
    )
}


Then:

Sync Project with Gradle Files


Simple Flow:

Add Dependency
      ↓
Sync Gradle
      ↓
Library Downloaded
      ↓
Use Library in Project


============================================================
Q.2 (iv)
Question: How can you create an application that reacts
to ambient light changes using light sensors?
============================================================

Answer:

Android provides a Light Sensor to measure the amount
of light present around the device.

Main classes:

1. SensorManager
2. Sensor
3. SensorEventListener


Steps:

1. Get SensorManager.

2. Get the Light Sensor.

3. Register SensorEventListener.

4. Read the sensor value.

5. Change the application according to the light level.


Example:

SensorManager sensorManager;

Sensor lightSensor;

sensorManager =
        (SensorManager) getSystemService(SENSOR_SERVICE);

lightSensor =
        sensorManager.getDefaultSensor(
                Sensor.TYPE_LIGHT
        );


Register Listener:

sensorManager.registerListener(
        listener,
        lightSensor,
        SensorManager.SENSOR_DELAY_NORMAL
);


Read Sensor Value:

@Override
public void onSensorChanged(SensorEvent event) {

    float light = event.values[0];

    if (light < 50) {

        // Dark environment

    } else {

        // Bright environment

    }
}


Simple Flow:

Light Sensor
     ↓
Read Light Value
     ↓
Check Value
     ↓
Dark / Bright
     ↓
Change Application UI


============================================================
Q.2 (v)
Question: How does the Activity life cycle impact the
user experience in mobile applications?
============================================================

Answer:

The Activity Life Cycle controls how an Activity behaves
during its lifetime.

Main lifecycle methods:

onCreate()
     ↓
onStart()
     ↓
onResume()
     ↓
onPause()
     ↓
onStop()
     ↓
onDestroy()


Impact on User Experience:

1. Saves user data when Activity is paused or stopped.

2. Restores application state when the user returns.

3. Releases resources when they are not required.

4. Reduces unnecessary memory and battery usage.

5. Provides smooth navigation between screens.


Example:

User receives phone call:

Activity
    ↓
onPause()
    ↓
onStop()


User returns to application:

onStart()
    ↓
onResume()


Conclusion:

Proper Activity lifecycle management provides a smooth
and reliable user experience.


============================================================
Q.2 (vi)
Question: What are the considerations for designing
offline functionality in mobile applications?
============================================================

Answer:

Offline functionality allows an application to work
even when there is no internet connection.

Important considerations:

1. Local Storage

Store important data locally using SQLite, Room or
other local storage.

2. Data Synchronization

Synchronize local data with the server when internet
connection becomes available.

3. Error Handling

Display a proper message when the network is unavailable.

4. Data Consistency

Keep local and server data consistent.

5. Storage Management

Avoid storing unnecessary data because mobile storage
is limited.


Simple Flow:

Internet Available
        ↓
     Server
        ↓
  Application


Internet Not Available
        ↓
 Local Database
        ↓
  Application


Internet Available Again
        ↓
 Synchronize Data


============================================================
Q.3 (i)
Question: Evaluate the importance of handling audio focus
changes in Android applications. What happens if this is
not properly managed?
============================================================

Answer:

Audio Focus determines which application should have
control over audio output at a particular time.

Example:

Music App
    ↓
Playing Music
    ↓
Incoming Phone Call
    ↓
Audio Focus Changes
    ↓
Music Pauses / Reduces Volume


Importance of Audio Focus:

1. Prevents multiple applications from playing audio
   at the same time.

2. Provides better user experience.

3. Allows music to pause during a phone call.

4. Allows temporary reduction of volume.

5. Helps applications share the audio system properly.


If Audio Focus is not properly managed:

1. Two applications may play audio simultaneously.

2. Music may continue during phone calls.

3. Audio may become confusing or unpleasant.

4. User experience becomes poor.

5. Application may behave incorrectly.


Conclusion:

Proper Audio Focus management provides smooth and
user-friendly audio behavior.


============================================================
Q.3 (ii)
Question: Analyze the differences between SharedPreferences
and SQLite in terms of use cases and data storage capacity.
============================================================

Answer:

SharedPreferences and SQLite are both used to store
data locally in Android, but they are used for different
purposes.


SharedPreferences:

Used to store small amounts of simple key-value data.

Examples:

- Username
- Login status
- Theme preference
- Application settings
- Boolean values


Example:

SharedPreferences pref =
        getSharedPreferences(
                "MyPref",
                MODE_PRIVATE
        );

SharedPreferences.Editor editor =
        pref.edit();

editor.putString("username", "Raj");
editor.putBoolean("login", true);

editor.apply();


SQLite:

SQLite is a relational database used to store
structured data.

Examples:

- Student records
- Products
- Transactions
- Contacts
- Large structured data


Example Table:

STUDENT
--------------------------------
ID       NAME       COURSE
--------------------------------
1        Raj        MCA
2        Amit       MCA
--------------------------------


Difference:

SharedPreferences       SQLite
------------------------------------------------
Small data              Larger structured data
Key-value storage       Relational database
Simple data             Complex data
Easy to use             More complex
Settings/preferences    Records/tables
No SQL queries          Supports SQL queries


Conclusion:

Use SharedPreferences for small settings and
key-value data.

Use SQLite for structured records and larger
amounts of data.


============================================================
Q.3 (iii)
Question: What tools would you use to prototype a mobile
app, and how would you implement user feedback?
============================================================

Answer:

Prototyping means creating a sample design of an
application before developing the complete application.


Tools for Prototyping:

1. Figma
2. Adobe XD
3. Sketch
4. Android Studio
5. Jetpack Compose


Prototyping Process:

Idea
 ↓
Wireframe
 ↓
UI Design
 ↓
Clickable Prototype
 ↓
User Testing
 ↓
Collect Feedback
 ↓
Improve Design


Implementing User Feedback:

1. Ask users to test the prototype.

2. Collect feedback using forms or surveys.

3. Observe where users face problems.

4. Identify common problems.

5. Modify the UI according to feedback.

6. Test the improved version again.


Example:

User says:
"Login button is difficult to find."

        ↓

Developer changes:
Button position / size / visibility

        ↓

Test Again


Conclusion:

Prototyping saves development time and helps create
an application according to user requirements.


============================================================
Q.3 (iv)
Question: How can you apply motion sensors to detect
shake events in Android?
============================================================

Answer:

A smartphone contains motion sensors such as:

1. Accelerometer
2. Gyroscope

For detecting a shake, the Accelerometer is commonly used.

The accelerometer measures movement along:

X-axis
Y-axis
Z-axis


Basic Process:

Accelerometer
      ↓
Read X, Y, Z values
      ↓
Calculate movement
      ↓
Compare with threshold
      ↓
Movement > Threshold
      ↓
Shake Detected


Example:

SensorManager sensorManager;

Sensor accelerometer;

sensorManager =
        (SensorManager) getSystemService(SENSOR_SERVICE);

accelerometer =
        sensorManager.getDefaultSensor(
                Sensor.TYPE_ACCELEROMETER
        );


Register Sensor:

sensorManager.registerListener(
        listener,
        accelerometer,
        SensorManager.SENSOR_DELAY_NORMAL
);


Detect Movement:

@Override
public void onSensorChanged(SensorEvent event) {

    float x = event.values[0];
    float y = event.values[1];
    float z = event.values[2];

    float movement =
            Math.abs(x) +
            Math.abs(y) +
            Math.abs(z);

    if (movement > 25) {

        // Shake detected

    }
}


Simple Flow:

User shakes phone
       ↓
Accelerometer detects movement
       ↓
Movement exceeds threshold
       ↓
Shake detected
       ↓
Perform an action


Example Applications:

Shake Phone
     ↓
Refresh Data

OR

Shake Phone
     ↓
Perform Some Action


Important Point:

The threshold should be selected carefully so that
normal movement is not incorrectly detected as a shake.


============================================================
QUICK REVISION
============================================================

ObjectAnimator
→ Used for property animation.

Activity Interaction
→ Intent + Data Transfer.

VideoView
→ start()

NotificationManager
→ notify()

Custom View Attributes
→ attrs.xml + obtainStyledAttributes()

Animation
→ Smooth UI + User Feedback.

Dependencies
→ Gradle.

Light Sensor
→ SensorManager + TYPE_LIGHT.

Activity Lifecycle
→ onCreate → onStart → onResume
→ onPause → onStop → onDestroy.

Offline Functionality
→ Local Storage + Synchronization.

Audio Focus
→ Controls audio between applications.

SharedPreferences
→ Small key-value data.

SQLite
→ Structured database data.

Prototyping
→ Figma / Adobe XD / Android Studio.

Shake Detection
→ Accelerometer + Threshold.
============================================================
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],h=z=>{de(C===z?null:z)};return qe.jsxs("div",{className:"app-container",children:[qe.jsx("h1",{children:"MAD Interview Questions"}),qe.jsx("div",{className:"questions-container",children:P.map(z=>qe.jsxs("div",{className:"question-item",children:[qe.jsx("button",{className:`question-button ${C===z.id?"active":""}`,onClick:()=>h(z.id),children:z.question}),C===z.id&&qe.jsxs("div",{className:"answer-container",children:[qe.jsxs("div",{className:"answer",children:[qe.jsx("h3",{children:"Answer:"}),qe.jsx("p",{children:z.answer})]}),z.codeExample&&qe.jsxs("div",{className:"code-example",children:[qe.jsx("h3",{children:"Code Example:"}),qe.jsx("pre",{children:qe.jsx("code",{children:z.codeExample})})]})]})]},z.id))})]})}ah.createRoot(document.getElementById("root")).render(qe.jsx(Mf.StrictMode,{children:qe.jsx(nh,{})}));
