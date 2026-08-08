(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const U of document.querySelectorAll('link[rel="modulepreload"]'))h(U);new MutationObserver(U=>{for(const J of U)if(J.type==="childList")for(const pe of J.addedNodes)pe.tagName==="LINK"&&pe.rel==="modulepreload"&&h(pe)}).observe(document,{childList:!0,subtree:!0});function F(U){const J={};return U.integrity&&(J.integrity=U.integrity),U.referrerPolicy&&(J.referrerPolicy=U.referrerPolicy),U.crossOrigin==="use-credentials"?J.credentials="include":U.crossOrigin==="anonymous"?J.credentials="omit":J.credentials="same-origin",J}function h(U){if(U.ep)return;U.ep=!0;const J=F(U);fetch(U.href,J)}})();var iu={exports:{}},Ai={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mf;function Kp(){if(mf)return Ai;mf=1;var C=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function F(h,U,J){var pe=null;if(J!==void 0&&(pe=""+J),U.key!==void 0&&(pe=""+U.key),"key"in U){J={};for(var Ue in U)Ue!=="key"&&(J[Ue]=U[Ue])}else J=U;return U=J.ref,{$$typeof:C,type:h,key:pe,ref:U!==void 0?U:null,props:J}}return Ai.Fragment=de,Ai.jsx=F,Ai.jsxs=F,Ai}var pf;function Jp(){return pf||(pf=1,iu.exports=Kp()),iu.exports}var qe=Jp(),lu={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function Ip(){if(hf)return N;hf=1;var C=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),J=Symbol.for("react.consumer"),pe=Symbol.for("react.context"),Ue=Symbol.for("react.forward_ref"),x=Symbol.for("react.suspense"),E=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),_=Symbol.for("react.activity"),ce=Symbol.iterator;function Je(r){return r===null||typeof r!="object"?null:(r=ce&&r[ce]||r["@@iterator"],typeof r=="function"?r:null)}var Be={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},_e=Object.assign,Rt={};function Ie(r,b,T){this.props=r,this.context=b,this.refs=Rt,this.updater=T||Be}Ie.prototype.isReactComponent={},Ie.prototype.setState=function(r,b){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,b,"setState")},Ie.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function Jt(){}Jt.prototype=Ie.prototype;function xe(r,b,T){this.props=r,this.context=b,this.refs=Rt,this.updater=T||Be}var st=xe.prototype=new Jt;st.constructor=xe,_e(st,Ie.prototype),st.isPureReactComponent=!0;var bt=Array.isArray;function He(){}var Q={H:null,A:null,T:null,S:null},Ve=Object.prototype.hasOwnProperty;function Et(r,b,T){var w=T.ref;return{$$typeof:C,type:r,key:b,ref:w!==void 0?w:null,props:T}}function Ga(r,b){return Et(r.type,b,r.props)}function Mt(r){return typeof r=="object"&&r!==null&&r.$$typeof===C}function Ge(r){var b={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(T){return b[T]})}var Sa=/\/+/g;function Ot(r,b){return typeof r=="object"&&r!==null&&r.key!=null?Ge(""+r.key):b.toString(36)}function yt(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(He,He):(r.status="pending",r.then(function(b){r.status==="pending"&&(r.status="fulfilled",r.value=b)},function(b){r.status==="pending"&&(r.status="rejected",r.reason=b)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function g(r,b,T,w,q){var V=typeof r;(V==="undefined"||V==="boolean")&&(r=null);var P=!1;if(r===null)P=!0;else switch(V){case"bigint":case"string":case"number":P=!0;break;case"object":switch(r.$$typeof){case C:case de:P=!0;break;case W:return P=r._init,g(P(r._payload),b,T,w,q)}}if(P)return q=q(r),P=w===""?"."+Ot(r,0):w,bt(q)?(T="",P!=null&&(T=P.replace(Sa,"$&/")+"/"),g(q,b,T,"",function(Cn){return Cn})):q!=null&&(Mt(q)&&(q=Ga(q,T+(q.key==null||r&&r.key===q.key?"":(""+q.key).replace(Sa,"$&/")+"/")+P)),b.push(q)),1;P=0;var Le=w===""?".":w+":";if(bt(r))for(var he=0;he<r.length;he++)w=r[he],V=Le+Ot(w,he),P+=g(w,b,T,V,q);else if(he=Je(r),typeof he=="function")for(r=he.call(r),he=0;!(w=r.next()).done;)w=w.value,V=Le+Ot(w,he++),P+=g(w,b,T,V,q);else if(V==="object"){if(typeof r.then=="function")return g(yt(r),b,T,w,q);throw b=String(r),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return P}function M(r,b,T){if(r==null)return r;var w=[],q=0;return g(r,w,"","",function(V){return b.call(T,V,q++)}),w}function L(r){if(r._status===-1){var b=r._result;b=b(),b.then(function(T){(r._status===0||r._status===-1)&&(r._status=1,r._result=T)},function(T){(r._status===0||r._status===-1)&&(r._status=2,r._result=T)}),r._status===-1&&(r._status=0,r._result=b)}if(r._status===1)return r._result.default;throw r._result}var te=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)},le={map:M,forEach:function(r,b,T){M(r,function(){b.apply(this,arguments)},T)},count:function(r){var b=0;return M(r,function(){b++}),b},toArray:function(r){return M(r,function(b){return b})||[]},only:function(r){if(!Mt(r))throw Error("React.Children.only expected to receive a single React element child.");return r}};return N.Activity=_,N.Children=le,N.Component=Ie,N.Fragment=F,N.Profiler=U,N.PureComponent=xe,N.StrictMode=h,N.Suspense=x,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=Q,N.__COMPILER_RUNTIME={__proto__:null,c:function(r){return Q.H.useMemoCache(r)}},N.cache=function(r){return function(){return r.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(r,b,T){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var w=_e({},r.props),q=r.key;if(b!=null)for(V in b.key!==void 0&&(q=""+b.key),b)!Ve.call(b,V)||V==="key"||V==="__self"||V==="__source"||V==="ref"&&b.ref===void 0||(w[V]=b[V]);var V=arguments.length-2;if(V===1)w.children=T;else if(1<V){for(var P=Array(V),Le=0;Le<V;Le++)P[Le]=arguments[Le+2];w.children=P}return Et(r.type,q,w)},N.createContext=function(r){return r={$$typeof:pe,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:J,_context:r},r},N.createElement=function(r,b,T){var w,q={},V=null;if(b!=null)for(w in b.key!==void 0&&(V=""+b.key),b)Ve.call(b,w)&&w!=="key"&&w!=="__self"&&w!=="__source"&&(q[w]=b[w]);var P=arguments.length-2;if(P===1)q.children=T;else if(1<P){for(var Le=Array(P),he=0;he<P;he++)Le[he]=arguments[he+2];q.children=Le}if(r&&r.defaultProps)for(w in P=r.defaultProps,P)q[w]===void 0&&(q[w]=P[w]);return Et(r,V,q)},N.createRef=function(){return{current:null}},N.forwardRef=function(r){return{$$typeof:Ue,render:r}},N.isValidElement=Mt,N.lazy=function(r){return{$$typeof:W,_payload:{_status:-1,_result:r},_init:L}},N.memo=function(r,b){return{$$typeof:E,type:r,compare:b===void 0?null:b}},N.startTransition=function(r){var b=Q.T,T={};Q.T=T;try{var w=r(),q=Q.S;q!==null&&q(T,w),typeof w=="object"&&w!==null&&typeof w.then=="function"&&w.then(He,te)}catch(V){te(V)}finally{b!==null&&T.types!==null&&(b.types=T.types),Q.T=b}},N.unstable_useCacheRefresh=function(){return Q.H.useCacheRefresh()},N.use=function(r){return Q.H.use(r)},N.useActionState=function(r,b,T){return Q.H.useActionState(r,b,T)},N.useCallback=function(r,b){return Q.H.useCallback(r,b)},N.useContext=function(r){return Q.H.useContext(r)},N.useDebugValue=function(){},N.useDeferredValue=function(r,b){return Q.H.useDeferredValue(r,b)},N.useEffect=function(r,b){return Q.H.useEffect(r,b)},N.useEffectEvent=function(r){return Q.H.useEffectEvent(r)},N.useId=function(){return Q.H.useId()},N.useImperativeHandle=function(r,b,T){return Q.H.useImperativeHandle(r,b,T)},N.useInsertionEffect=function(r,b){return Q.H.useInsertionEffect(r,b)},N.useLayoutEffect=function(r,b){return Q.H.useLayoutEffect(r,b)},N.useMemo=function(r,b){return Q.H.useMemo(r,b)},N.useOptimistic=function(r,b){return Q.H.useOptimistic(r,b)},N.useReducer=function(r,b,T){return Q.H.useReducer(r,b,T)},N.useRef=function(r){return Q.H.useRef(r)},N.useState=function(r){return Q.H.useState(r)},N.useSyncExternalStore=function(r,b,T){return Q.H.useSyncExternalStore(r,b,T)},N.useTransition=function(){return Q.H.useTransition()},N.version="19.2.7",N}var vf;function ru(){return vf||(vf=1,lu.exports=Ip()),lu.exports}var Mf=ru(),su={exports:{}},Si={},ou={exports:{}},uu={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yf;function Fp(){return yf||(yf=1,(function(C){function de(g,M){var L=g.length;g.push(M);e:for(;0<L;){var te=L-1>>>1,le=g[te];if(0<U(le,M))g[te]=M,g[L]=le,L=te;else break e}}function F(g){return g.length===0?null:g[0]}function h(g){if(g.length===0)return null;var M=g[0],L=g.pop();if(L!==M){g[0]=L;e:for(var te=0,le=g.length,r=le>>>1;te<r;){var b=2*(te+1)-1,T=g[b],w=b+1,q=g[w];if(0>U(T,L))w<le&&0>U(q,T)?(g[te]=q,g[w]=L,te=w):(g[te]=T,g[b]=L,te=b);else if(w<le&&0>U(q,L))g[te]=q,g[w]=L,te=w;else break e}}return M}function U(g,M){var L=g.sortIndex-M.sortIndex;return L!==0?L:g.id-M.id}if(C.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var J=performance;C.unstable_now=function(){return J.now()}}else{var pe=Date,Ue=pe.now();C.unstable_now=function(){return pe.now()-Ue}}var x=[],E=[],W=1,_=null,ce=3,Je=!1,Be=!1,_e=!1,Rt=!1,Ie=typeof setTimeout=="function"?setTimeout:null,Jt=typeof clearTimeout=="function"?clearTimeout:null,xe=typeof setImmediate<"u"?setImmediate:null;function st(g){for(var M=F(E);M!==null;){if(M.callback===null)h(E);else if(M.startTime<=g)h(E),M.sortIndex=M.expirationTime,de(x,M);else break;M=F(E)}}function bt(g){if(_e=!1,st(g),!Be)if(F(x)!==null)Be=!0,He||(He=!0,Ge());else{var M=F(E);M!==null&&yt(bt,M.startTime-g)}}var He=!1,Q=-1,Ve=5,Et=-1;function Ga(){return Rt?!0:!(C.unstable_now()-Et<Ve)}function Mt(){if(Rt=!1,He){var g=C.unstable_now();Et=g;var M=!0;try{e:{Be=!1,_e&&(_e=!1,Jt(Q),Q=-1),Je=!0;var L=ce;try{t:{for(st(g),_=F(x);_!==null&&!(_.expirationTime>g&&Ga());){var te=_.callback;if(typeof te=="function"){_.callback=null,ce=_.priorityLevel;var le=te(_.expirationTime<=g);if(g=C.unstable_now(),typeof le=="function"){_.callback=le,st(g),M=!0;break t}_===F(x)&&h(x),st(g)}else h(x);_=F(x)}if(_!==null)M=!0;else{var r=F(E);r!==null&&yt(bt,r.startTime-g),M=!1}}break e}finally{_=null,ce=L,Je=!1}M=void 0}}finally{M?Ge():He=!1}}}var Ge;if(typeof xe=="function")Ge=function(){xe(Mt)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,Ot=Sa.port2;Sa.port1.onmessage=Mt,Ge=function(){Ot.postMessage(null)}}else Ge=function(){Ie(Mt,0)};function yt(g,M){Q=Ie(function(){g(C.unstable_now())},M)}C.unstable_IdlePriority=5,C.unstable_ImmediatePriority=1,C.unstable_LowPriority=4,C.unstable_NormalPriority=3,C.unstable_Profiling=null,C.unstable_UserBlockingPriority=2,C.unstable_cancelCallback=function(g){g.callback=null},C.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):Ve=0<g?Math.floor(1e3/g):5},C.unstable_getCurrentPriorityLevel=function(){return ce},C.unstable_next=function(g){switch(ce){case 1:case 2:case 3:var M=3;break;default:M=ce}var L=ce;ce=M;try{return g()}finally{ce=L}},C.unstable_requestPaint=function(){Rt=!0},C.unstable_runWithPriority=function(g,M){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var L=ce;ce=g;try{return M()}finally{ce=L}},C.unstable_scheduleCallback=function(g,M,L){var te=C.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?te+L:te):L=te,g){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=L+le,g={id:W++,callback:M,priorityLevel:g,startTime:L,expirationTime:le,sortIndex:-1},L>te?(g.sortIndex=L,de(E,g),F(x)===null&&g===F(E)&&(_e?(Jt(Q),Q=-1):_e=!0,yt(bt,L-te))):(g.sortIndex=le,de(x,g),Be||Je||(Be=!0,He||(He=!0,Ge()))),g},C.unstable_shouldYield=Ga,C.unstable_wrapCallback=function(g){var M=ce;return function(){var L=ce;ce=M;try{return g.apply(this,arguments)}finally{ce=L}}}})(uu)),uu}var gf;function Wp(){return gf||(gf=1,ou.exports=Fp()),ou.exports}var cu={exports:{}},ze={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function Pp(){if(Af)return ze;Af=1;var C=ru();function de(x){var E="https://react.dev/errors/"+x;if(1<arguments.length){E+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)E+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+x+"; visit "+E+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function F(){}var h={d:{f:F,r:function(){throw Error(de(522))},D:F,C:F,L:F,m:F,X:F,S:F,M:F},p:0,findDOMNode:null},U=Symbol.for("react.portal");function J(x,E,W){var _=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:U,key:_==null?null:""+_,children:x,containerInfo:E,implementation:W}}var pe=C.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Ue(x,E){if(x==="font")return"";if(typeof E=="string")return E==="use-credentials"?E:""}return ze.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,ze.createPortal=function(x,E){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!E||E.nodeType!==1&&E.nodeType!==9&&E.nodeType!==11)throw Error(de(299));return J(x,E,null,W)},ze.flushSync=function(x){var E=pe.T,W=h.p;try{if(pe.T=null,h.p=2,x)return x()}finally{pe.T=E,h.p=W,h.d.f()}},ze.preconnect=function(x,E){typeof x=="string"&&(E?(E=E.crossOrigin,E=typeof E=="string"?E==="use-credentials"?E:"":void 0):E=null,h.d.C(x,E))},ze.prefetchDNS=function(x){typeof x=="string"&&h.d.D(x)},ze.preinit=function(x,E){if(typeof x=="string"&&E&&typeof E.as=="string"){var W=E.as,_=Ue(W,E.crossOrigin),ce=typeof E.integrity=="string"?E.integrity:void 0,Je=typeof E.fetchPriority=="string"?E.fetchPriority:void 0;W==="style"?h.d.S(x,typeof E.precedence=="string"?E.precedence:void 0,{crossOrigin:_,integrity:ce,fetchPriority:Je}):W==="script"&&h.d.X(x,{crossOrigin:_,integrity:ce,fetchPriority:Je,nonce:typeof E.nonce=="string"?E.nonce:void 0})}},ze.preinitModule=function(x,E){if(typeof x=="string")if(typeof E=="object"&&E!==null){if(E.as==null||E.as==="script"){var W=Ue(E.as,E.crossOrigin);h.d.M(x,{crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0})}}else E==null&&h.d.M(x)},ze.preload=function(x,E){if(typeof x=="string"&&typeof E=="object"&&E!==null&&typeof E.as=="string"){var W=E.as,_=Ue(W,E.crossOrigin);h.d.L(x,W,{crossOrigin:_,integrity:typeof E.integrity=="string"?E.integrity:void 0,nonce:typeof E.nonce=="string"?E.nonce:void 0,type:typeof E.type=="string"?E.type:void 0,fetchPriority:typeof E.fetchPriority=="string"?E.fetchPriority:void 0,referrerPolicy:typeof E.referrerPolicy=="string"?E.referrerPolicy:void 0,imageSrcSet:typeof E.imageSrcSet=="string"?E.imageSrcSet:void 0,imageSizes:typeof E.imageSizes=="string"?E.imageSizes:void 0,media:typeof E.media=="string"?E.media:void 0})}},ze.preloadModule=function(x,E){if(typeof x=="string")if(E){var W=Ue(E.as,E.crossOrigin);h.d.m(x,{as:typeof E.as=="string"&&E.as!=="script"?E.as:void 0,crossOrigin:W,integrity:typeof E.integrity=="string"?E.integrity:void 0})}else h.d.m(x)},ze.requestFormReset=function(x){h.d.r(x)},ze.unstable_batchedUpdates=function(x,E){return x(E)},ze.useFormState=function(x,E,W){return pe.H.useFormState(x,E,W)},ze.useFormStatus=function(){return pe.H.useHostTransitionStatus()},ze.version="19.2.7",ze}var Sf;function $p(){if(Sf)return cu.exports;Sf=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(de){console.error(de)}}return C(),cu.exports=Pp(),cu.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function eh(){if(bf)return Si;bf=1;var C=Wp(),de=ru(),F=$p();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function U(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function J(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function pe(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Ue(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function x(e){if(J(e)!==e)throw Error(h(188))}function E(e){var t=e.alternate;if(!t){if(t=J(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,n=t;;){var i=a.return;if(i===null)break;var l=i.alternate;if(l===null){if(n=i.return,n!==null){a=n;continue}break}if(i.child===l.child){for(l=i.child;l;){if(l===a)return x(i),e;if(l===n)return x(i),t;l=l.sibling}throw Error(h(188))}if(a.return!==n.return)a=i,n=l;else{for(var s=!1,o=i.child;o;){if(o===a){s=!0,a=i,n=l;break}if(o===n){s=!0,n=i,a=l;break}o=o.sibling}if(!s){for(o=l.child;o;){if(o===a){s=!0,a=l,n=i;break}if(o===n){s=!0,n=l,a=i;break}o=o.sibling}if(!s)throw Error(h(189))}}if(a.alternate!==n)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var _=Object.assign,ce=Symbol.for("react.element"),Je=Symbol.for("react.transitional.element"),Be=Symbol.for("react.portal"),_e=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Ie=Symbol.for("react.profiler"),Jt=Symbol.for("react.consumer"),xe=Symbol.for("react.context"),st=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),He=Symbol.for("react.suspense_list"),Q=Symbol.for("react.memo"),Ve=Symbol.for("react.lazy"),Et=Symbol.for("react.activity"),Ga=Symbol.for("react.memo_cache_sentinel"),Mt=Symbol.iterator;function Ge(e){return e===null||typeof e!="object"?null:(e=Mt&&e[Mt]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function Ot(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case _e:return"Fragment";case Ie:return"Profiler";case Rt:return"StrictMode";case bt:return"Suspense";case He:return"SuspenseList";case Et:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case Be:return"Portal";case xe:return e.displayName||"Context";case Jt:return(e._context.displayName||"Context")+".Consumer";case st:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Q:return t=e.displayName||null,t!==null?t:Ot(e.type)||"Memo";case Ve:t=e._payload,e=e._init;try{return Ot(e(t))}catch{}}return null}var yt=Array.isArray,g=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,M=F.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L={pending:!1,data:null,method:null,action:null},te=[],le=-1;function r(e){return{current:e}}function b(e){0>le||(e.current=te[le],te[le]=null,le--)}function T(e,t){le++,te[le]=e.current,e.current=t}var w=r(null),q=r(null),V=r(null),P=r(null);function Le(e,t){switch(T(V,t),T(q,e),T(w,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nd(t),e=qd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(w),T(w,e)}function he(){b(w),b(q),b(V)}function Cn(e){e.memoizedState!==null&&T(P,e);var t=w.current,a=qd(t,e.type);t!==a&&(T(q,e),T(w,a))}function bi(e){q.current===e&&(b(w),b(q)),P.current===e&&(b(P),hi._currentValue=L)}var Vl,du;function ba(e){if(Vl===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);Vl=t&&t[1]||"",du=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Vl+e+du}var Gl=!1;function Yl(e,t){if(!e||Gl)return"";Gl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var n={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(v){var p=v}Reflect.construct(e,[],S)}else{try{S.call()}catch(v){p=v}e.call(S.prototype)}}else{try{throw Error()}catch(v){p=v}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(v){if(v&&p&&typeof v.stack=="string")return[v.stack,p.stack]}return[null,null]}};n.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var i=Object.getOwnPropertyDescriptor(n.DetermineComponentFrameRoot,"name");i&&i.configurable&&Object.defineProperty(n.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=n.DetermineComponentFrameRoot(),s=l[0],o=l[1];if(s&&o){var u=s.split(`
`),m=o.split(`
`);for(i=n=0;n<u.length&&!u[n].includes("DetermineComponentFrameRoot");)n++;for(;i<m.length&&!m[i].includes("DetermineComponentFrameRoot");)i++;if(n===u.length||i===m.length)for(n=u.length-1,i=m.length-1;1<=n&&0<=i&&u[n]!==m[i];)i--;for(;1<=n&&0<=i;n--,i--)if(u[n]!==m[i]){if(n!==1||i!==1)do if(n--,i--,0>i||u[n]!==m[i]){var y=`
`+u[n].replace(" at new "," at ");return e.displayName&&y.includes("<anonymous>")&&(y=y.replace("<anonymous>",e.displayName)),y}while(1<=n&&0<=i);break}}}finally{Gl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function Tf(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Yl(e.type,!1);case 11:return Yl(e.type.render,!1);case 1:return Yl(e.type,!0);case 31:return ba("Activity");default:return""}}function fu(e){try{var t="",a=null;do t+=Tf(e,a),a=e,e=e.return;while(e);return t}catch(n){return`
Error generating stack: `+n.message+`
`+n.stack}}var jl=Object.prototype.hasOwnProperty,Xl=C.unstable_scheduleCallback,Ql=C.unstable_cancelCallback,Df=C.unstable_shouldYield,Cf=C.unstable_requestPaint,Fe=C.unstable_now,wf=C.unstable_getCurrentPriorityLevel,mu=C.unstable_ImmediatePriority,pu=C.unstable_UserBlockingPriority,Ei=C.unstable_NormalPriority,Rf=C.unstable_LowPriority,hu=C.unstable_IdlePriority,Of=C.log,xf=C.unstable_setDisableYieldValue,wn=null,We=null;function It(e){if(typeof Of=="function"&&xf(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(wn,e)}catch{}}var Pe=Math.clz32?Math.clz32:_f,zf=Math.log,Uf=Math.LN2;function _f(e){return e>>>=0,e===0?32:31-(zf(e)/Uf|0)|0}var Mi=256,Ti=262144,Di=4194304;function Ea(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Ci(e,t,a){var n=e.pendingLanes;if(n===0)return 0;var i=0,l=e.suspendedLanes,s=e.pingedLanes;e=e.warmLanes;var o=n&134217727;return o!==0?(n=o&~l,n!==0?i=Ea(n):(s&=o,s!==0?i=Ea(s):a||(a=o&~e,a!==0&&(i=Ea(a))))):(o=n&~l,o!==0?i=Ea(o):s!==0?i=Ea(s):a||(a=n&~e,a!==0&&(i=Ea(a)))),i===0?0:t!==0&&t!==i&&(t&l)===0&&(l=i&-i,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:i}function Rn(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function Lf(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function vu(){var e=Di;return Di<<=1,(Di&62914560)===0&&(Di=4194304),e}function Zl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function On(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nf(e,t,a,n,i,l){var s=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var o=e.entanglements,u=e.expirationTimes,m=e.hiddenUpdates;for(a=s&~a;0<a;){var y=31-Pe(a),S=1<<y;o[y]=0,u[y]=-1;var p=m[y];if(p!==null)for(m[y]=null,y=0;y<p.length;y++){var v=p[y];v!==null&&(v.lane&=-536870913)}a&=~S}n!==0&&yu(e,n,0),l!==0&&i===0&&e.tag!==0&&(e.suspendedLanes|=l&~(s&~t))}function yu(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var n=31-Pe(t);e.entangledLanes|=t,e.entanglements[n]=e.entanglements[n]|1073741824|a&261930}function gu(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var n=31-Pe(a),i=1<<n;i&t|e[n]&t&&(e[n]|=t),a&=~i}}function Au(e,t){var a=t&-t;return a=(a&42)!==0?1:kl(a),(a&(e.suspendedLanes|t))!==0?0:a}function kl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Kl(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Su(){var e=M.p;return e!==0?e:(e=window.event,e===void 0?32:sf(e.type))}function bu(e,t){var a=M.p;try{return M.p=e,t()}finally{M.p=a}}var Ft=Math.random().toString(36).slice(2),De="__reactFiber$"+Ft,Ye="__reactProps$"+Ft,Ya="__reactContainer$"+Ft,Jl="__reactEvents$"+Ft,qf="__reactListeners$"+Ft,Bf="__reactHandles$"+Ft,Eu="__reactResources$"+Ft,xn="__reactMarker$"+Ft;function Il(e){delete e[De],delete e[Ye],delete e[Jl],delete e[qf],delete e[Bf]}function ja(e){var t=e[De];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ya]||a[De]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Xd(e);e!==null;){if(a=e[De])return a;e=Xd(e)}return t}e=a,a=e.parentNode}return null}function Xa(e){if(e=e[De]||e[Ya]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function zn(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Qa(e){var t=e[Eu];return t||(t=e[Eu]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Me(e){e[xn]=!0}var Mu=new Set,Tu={};function Ma(e,t){Za(e,t),Za(e+"Capture",t)}function Za(e,t){for(Tu[e]=t,e=0;e<t.length;e++)Mu.add(t[e])}var Hf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Du={},Cu={};function Vf(e){return jl.call(Cu,e)?!0:jl.call(Du,e)?!1:Hf.test(e)?Cu[e]=!0:(Du[e]=!0,!1)}function wi(e,t,a){if(Vf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var n=t.toLowerCase().slice(0,5);if(n!=="data-"&&n!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Ri(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function xt(e,t,a,n){if(n===null)e.removeAttribute(a);else{switch(typeof n){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+n)}}function ot(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wu(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Gf(e,t,a){var n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,l=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){a=""+s,l.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return a},setValue:function(s){a=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Fl(e){if(!e._valueTracker){var t=wu(e)?"checked":"value";e._valueTracker=Gf(e,t,""+e[t])}}function Ru(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),n="";return e&&(n=wu(e)?e.checked?"true":"false":e.value),e=n,e!==a?(t.setValue(e),!0):!1}function Oi(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Yf=/[\n"\\]/g;function ut(e){return e.replace(Yf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wl(e,t,a,n,i,l,s,o){e.name="",s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.type=s:e.removeAttribute("type"),t!=null?s==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+ot(t)):e.value!==""+ot(t)&&(e.value=""+ot(t)):s!=="submit"&&s!=="reset"||e.removeAttribute("value"),t!=null?Pl(e,s,ot(t)):a!=null?Pl(e,s,ot(a)):n!=null&&e.removeAttribute("value"),i==null&&l!=null&&(e.defaultChecked=!!l),i!=null&&(e.checked=i&&typeof i!="function"&&typeof i!="symbol"),o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.name=""+ot(o):e.removeAttribute("name")}function Ou(e,t,a,n,i,l,s,o){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Fl(e);return}a=a!=null?""+ot(a):"",t=t!=null?""+ot(t):a,o||t===e.value||(e.value=t),e.defaultValue=t}n=n??i,n=typeof n!="function"&&typeof n!="symbol"&&!!n,e.checked=o?e.checked:!!n,e.defaultChecked=!!n,s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"&&(e.name=s),Fl(e)}function Pl(e,t,a){t==="number"&&Oi(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function ka(e,t,a,n){if(e=e.options,t){t={};for(var i=0;i<a.length;i++)t["$"+a[i]]=!0;for(a=0;a<e.length;a++)i=t.hasOwnProperty("$"+e[a].value),e[a].selected!==i&&(e[a].selected=i),i&&n&&(e[a].defaultSelected=!0)}else{for(a=""+ot(a),t=null,i=0;i<e.length;i++){if(e[i].value===a){e[i].selected=!0,n&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function xu(e,t,a){if(t!=null&&(t=""+ot(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+ot(a):""}function zu(e,t,a,n){if(t==null){if(n!=null){if(a!=null)throw Error(h(92));if(yt(n)){if(1<n.length)throw Error(h(93));n=n[0]}a=n}a==null&&(a=""),t=a}a=ot(t),e.defaultValue=a,n=e.textContent,n===a&&n!==""&&n!==null&&(e.value=n),Fl(e)}function Ka(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var jf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Uu(e,t,a){var n=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?n?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":n?e.setProperty(t,a):typeof a!="number"||a===0||jf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function _u(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var n in a)!a.hasOwnProperty(n)||t!=null&&t.hasOwnProperty(n)||(n.indexOf("--")===0?e.setProperty(n,""):n==="float"?e.cssFloat="":e[n]="");for(var i in t)n=t[i],t.hasOwnProperty(i)&&a[i]!==n&&Uu(e,i,n)}else for(var l in t)t.hasOwnProperty(l)&&Uu(e,l,t[l])}function $l(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Qf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function xi(e){return Qf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function zt(){}var es=null;function ts(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ja=null,Ia=null;function Lu(e){var t=Xa(e);if(t&&(e=t.stateNode)){var a=e[Ye]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+ut(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var n=a[t];if(n!==e&&n.form===e.form){var i=n[Ye]||null;if(!i)throw Error(h(90));Wl(n,i.value,i.defaultValue,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name)}}for(t=0;t<a.length;t++)n=a[t],n.form===e.form&&Ru(n)}break e;case"textarea":xu(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&ka(e,!!a.multiple,t,!1)}}}var as=!1;function Nu(e,t,a){if(as)return e(t,a);as=!0;try{var n=e(t);return n}finally{if(as=!1,(Ja!==null||Ia!==null)&&(yl(),Ja&&(t=Ja,e=Ia,Ia=Ja=null,Lu(t),e)))for(t=0;t<e.length;t++)Lu(e[t])}}function Un(e,t){var a=e.stateNode;if(a===null)return null;var n=a[Ye]||null;if(n===null)return null;a=n[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(n=!n.disabled)||(e=e.type,n=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!n;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var Ut=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ns=!1;if(Ut)try{var _n={};Object.defineProperty(_n,"passive",{get:function(){ns=!0}}),window.addEventListener("test",_n,_n),window.removeEventListener("test",_n,_n)}catch{ns=!1}var Wt=null,is=null,zi=null;function qu(){if(zi)return zi;var e,t=is,a=t.length,n,i="value"in Wt?Wt.value:Wt.textContent,l=i.length;for(e=0;e<a&&t[e]===i[e];e++);var s=a-e;for(n=1;n<=s&&t[a-n]===i[l-n];n++);return zi=i.slice(e,1<n?1-n:void 0)}function Ui(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function _i(){return!0}function Bu(){return!1}function je(e){function t(a,n,i,l,s){this._reactName=a,this._targetInst=i,this.type=n,this.nativeEvent=l,this.target=s,this.currentTarget=null;for(var o in e)e.hasOwnProperty(o)&&(a=e[o],this[o]=a?a(l):l[o]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?_i:Bu,this.isPropagationStopped=Bu,this}return _(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=_i)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=_i)},persist:function(){},isPersistent:_i}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Li=je(Ta),Ln=_({},Ta,{view:0,detail:0}),Zf=je(Ln),ls,ss,Nn,Ni=_({},Ln,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:us,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==Nn&&(Nn&&e.type==="mousemove"?(ls=e.screenX-Nn.screenX,ss=e.screenY-Nn.screenY):ss=ls=0,Nn=e),ls)},movementY:function(e){return"movementY"in e?e.movementY:ss}}),Hu=je(Ni),kf=_({},Ni,{dataTransfer:0}),Kf=je(kf),Jf=_({},Ln,{relatedTarget:0}),os=je(Jf),If=_({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Ff=je(If),Wf=_({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Pf=je(Wf),$f=_({},Ta,{data:0}),Vu=je($f),em={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tm={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},am={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function nm(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=am[e])?!!t[e]:!1}function us(){return nm}var im=_({},Ln,{key:function(e){if(e.key){var t=em[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ui(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tm[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:us,charCode:function(e){return e.type==="keypress"?Ui(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ui(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lm=je(im),sm=_({},Ni,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gu=je(sm),om=_({},Ln,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:us}),um=je(om),cm=_({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),rm=je(cm),dm=_({},Ni,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fm=je(dm),mm=_({},Ta,{newState:0,oldState:0}),pm=je(mm),hm=[9,13,27,32],cs=Ut&&"CompositionEvent"in window,qn=null;Ut&&"documentMode"in document&&(qn=document.documentMode);var vm=Ut&&"TextEvent"in window&&!qn,Yu=Ut&&(!cs||qn&&8<qn&&11>=qn),ju=" ",Xu=!1;function Qu(e,t){switch(e){case"keyup":return hm.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zu(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fa=!1;function ym(e,t){switch(e){case"compositionend":return Zu(t);case"keypress":return t.which!==32?null:(Xu=!0,ju);case"textInput":return e=t.data,e===ju&&Xu?null:e;default:return null}}function gm(e,t){if(Fa)return e==="compositionend"||!cs&&Qu(e,t)?(e=qu(),zi=is=Wt=null,Fa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Yu&&t.locale!=="ko"?null:t.data;default:return null}}var Am={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ku(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Am[e.type]:t==="textarea"}function Ku(e,t,a,n){Ja?Ia?Ia.push(n):Ia=[n]:Ja=n,t=Tl(t,"onChange"),0<t.length&&(a=new Li("onChange","change",null,a,n),e.push({event:a,listeners:t}))}var Bn=null,Hn=null;function Sm(e){Od(e,0)}function qi(e){var t=zn(e);if(Ru(t))return e}function Ju(e,t){if(e==="change")return t}var Iu=!1;if(Ut){var rs;if(Ut){var ds="oninput"in document;if(!ds){var Fu=document.createElement("div");Fu.setAttribute("oninput","return;"),ds=typeof Fu.oninput=="function"}rs=ds}else rs=!1;Iu=rs&&(!document.documentMode||9<document.documentMode)}function Wu(){Bn&&(Bn.detachEvent("onpropertychange",Pu),Hn=Bn=null)}function Pu(e){if(e.propertyName==="value"&&qi(Hn)){var t=[];Ku(t,Hn,e,ts(e)),Nu(Sm,t)}}function bm(e,t,a){e==="focusin"?(Wu(),Bn=t,Hn=a,Bn.attachEvent("onpropertychange",Pu)):e==="focusout"&&Wu()}function Em(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return qi(Hn)}function Mm(e,t){if(e==="click")return qi(t)}function Tm(e,t){if(e==="input"||e==="change")return qi(t)}function Dm(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Dm;function Vn(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),n=Object.keys(t);if(a.length!==n.length)return!1;for(n=0;n<a.length;n++){var i=a[n];if(!jl.call(t,i)||!$e(e[i],t[i]))return!1}return!0}function $u(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function ec(e,t){var a=$u(e);e=0;for(var n;a;){if(a.nodeType===3){if(n=e+a.textContent.length,e<=t&&n>=t)return{node:a,offset:t-e};e=n}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$u(a)}}function tc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function ac(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Oi(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=Oi(e.document)}return t}function fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var Cm=Ut&&"documentMode"in document&&11>=document.documentMode,Wa=null,ms=null,Gn=null,ps=!1;function nc(e,t,a){var n=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ps||Wa==null||Wa!==Oi(n)||(n=Wa,"selectionStart"in n&&fs(n)?n={start:n.selectionStart,end:n.selectionEnd}:(n=(n.ownerDocument&&n.ownerDocument.defaultView||window).getSelection(),n={anchorNode:n.anchorNode,anchorOffset:n.anchorOffset,focusNode:n.focusNode,focusOffset:n.focusOffset}),Gn&&Vn(Gn,n)||(Gn=n,n=Tl(ms,"onSelect"),0<n.length&&(t=new Li("onSelect","select",null,t,a),e.push({event:t,listeners:n}),t.target=Wa)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Pa={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},hs={},ic={};Ut&&(ic=document.createElement("div").style,"AnimationEvent"in window||(delete Pa.animationend.animation,delete Pa.animationiteration.animation,delete Pa.animationstart.animation),"TransitionEvent"in window||delete Pa.transitionend.transition);function Ca(e){if(hs[e])return hs[e];if(!Pa[e])return e;var t=Pa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in ic)return hs[e]=t[a];return e}var lc=Ca("animationend"),sc=Ca("animationiteration"),oc=Ca("animationstart"),wm=Ca("transitionrun"),Rm=Ca("transitionstart"),Om=Ca("transitioncancel"),uc=Ca("transitionend"),cc=new Map,vs="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vs.push("scrollEnd");function gt(e,t){cc.set(e,t),Ma(t,[e])}var Bi=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ct=[],$a=0,ys=0;function Hi(){for(var e=$a,t=ys=$a=0;t<e;){var a=ct[t];ct[t++]=null;var n=ct[t];ct[t++]=null;var i=ct[t];ct[t++]=null;var l=ct[t];if(ct[t++]=null,n!==null&&i!==null){var s=n.pending;s===null?i.next=i:(i.next=s.next,s.next=i),n.pending=i}l!==0&&rc(a,i,l)}}function Vi(e,t,a,n){ct[$a++]=e,ct[$a++]=t,ct[$a++]=a,ct[$a++]=n,ys|=n,e.lanes|=n,e=e.alternate,e!==null&&(e.lanes|=n)}function gs(e,t,a,n){return Vi(e,t,a,n),Gi(e)}function wa(e,t){return Vi(e,null,null,t),Gi(e)}function rc(e,t,a){e.lanes|=a;var n=e.alternate;n!==null&&(n.lanes|=a);for(var i=!1,l=e.return;l!==null;)l.childLanes|=a,n=l.alternate,n!==null&&(n.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(i=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,i&&t!==null&&(i=31-Pe(a),e=l.hiddenUpdates,n=e[i],n===null?e[i]=[t]:n.push(t),t.lane=a|536870912),l):null}function Gi(e){if(50<ui)throw ui=0,Ro=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var en={};function xm(e,t,a,n){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=n,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,n){return new xm(e,t,a,n)}function As(e){return e=e.prototype,!(!e||!e.isReactComponent)}function _t(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function dc(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Yi(e,t,a,n,i,l){var s=0;if(n=e,typeof e=="function")As(e)&&(s=1);else if(typeof e=="string")s=Np(e,a,w.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Et:return e=et(31,a,t,i),e.elementType=Et,e.lanes=l,e;case _e:return Ra(a.children,i,l,t);case Rt:s=8,i|=24;break;case Ie:return e=et(12,a,t,i|2),e.elementType=Ie,e.lanes=l,e;case bt:return e=et(13,a,t,i),e.elementType=bt,e.lanes=l,e;case He:return e=et(19,a,t,i),e.elementType=He,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case xe:s=10;break e;case Jt:s=9;break e;case st:s=11;break e;case Q:s=14;break e;case Ve:s=16,n=null;break e}s=29,a=Error(h(130,e===null?"null":typeof e,"")),n=null}return t=et(s,a,t,i),t.elementType=e,t.type=n,t.lanes=l,t}function Ra(e,t,a,n){return e=et(7,e,n,t),e.lanes=a,e}function Ss(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fc(e){var t=et(18,null,null,0);return t.stateNode=e,t}function bs(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var mc=new WeakMap;function rt(e,t){if(typeof e=="object"&&e!==null){var a=mc.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fu(t)},mc.set(e,t),t)}return{value:e,source:t,stack:fu(t)}}var tn=[],an=0,ji=null,Yn=0,dt=[],ft=0,Pt=null,Tt=1,Dt="";function Lt(e,t){tn[an++]=Yn,tn[an++]=ji,ji=e,Yn=t}function pc(e,t,a){dt[ft++]=Tt,dt[ft++]=Dt,dt[ft++]=Pt,Pt=e;var n=Tt;e=Dt;var i=32-Pe(n)-1;n&=~(1<<i),a+=1;var l=32-Pe(t)+i;if(30<l){var s=i-i%5;l=(n&(1<<s)-1).toString(32),n>>=s,i-=s,Tt=1<<32-Pe(t)+i|a<<i|n,Dt=l+e}else Tt=1<<l|a<<i|n,Dt=e}function Es(e){e.return!==null&&(Lt(e,1),pc(e,1,0))}function Ms(e){for(;e===ji;)ji=tn[--an],tn[an]=null,Yn=tn[--an],tn[an]=null;for(;e===Pt;)Pt=dt[--ft],dt[ft]=null,Dt=dt[--ft],dt[ft]=null,Tt=dt[--ft],dt[ft]=null}function hc(e,t){dt[ft++]=Tt,dt[ft++]=Dt,dt[ft++]=Pt,Tt=t.id,Dt=t.overflow,Pt=e}var Ce=null,oe=null,Z=!1,$t=null,mt=!1,Ts=Error(h(519));function ea(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw jn(rt(t,e)),Ts}function vc(e){var t=e.stateNode,a=e.type,n=e.memoizedProps;switch(t[De]=e,t[Ye]=n,a){case"dialog":Y("cancel",t),Y("close",t);break;case"iframe":case"object":case"embed":Y("load",t);break;case"video":case"audio":for(a=0;a<ri.length;a++)Y(ri[a],t);break;case"source":Y("error",t);break;case"img":case"image":case"link":Y("error",t),Y("load",t);break;case"details":Y("toggle",t);break;case"input":Y("invalid",t),Ou(t,n.value,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name,!0);break;case"select":Y("invalid",t);break;case"textarea":Y("invalid",t),zu(t,n.value,n.defaultValue,n.children)}a=n.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||n.suppressHydrationWarning===!0||_d(t.textContent,a)?(n.popover!=null&&(Y("beforetoggle",t),Y("toggle",t)),n.onScroll!=null&&Y("scroll",t),n.onScrollEnd!=null&&Y("scrollend",t),n.onClick!=null&&(t.onclick=zt),t=!0):t=!1,t||ea(e,!0)}function yc(e){for(Ce=e.return;Ce;)switch(Ce.tag){case 5:case 31:case 13:mt=!1;return;case 27:case 3:mt=!0;return;default:Ce=Ce.return}}function nn(e){if(e!==Ce)return!1;if(!Z)return yc(e),Z=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Xo(e.type,e.memoizedProps)),a=!a),a&&oe&&ea(e),yc(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));oe=jd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));oe=jd(e)}else t===27?(t=oe,pa(e.type)?(e=Jo,Jo=null,oe=e):oe=t):oe=Ce?ht(e.stateNode.nextSibling):null;return!0}function Oa(){oe=Ce=null,Z=!1}function Ds(){var e=$t;return e!==null&&(ke===null?ke=e:ke.push.apply(ke,e),$t=null),e}function jn(e){$t===null?$t=[e]:$t.push(e)}var Cs=r(null),xa=null,Nt=null;function ta(e,t,a){T(Cs,t._currentValue),t._currentValue=a}function qt(e){e._currentValue=Cs.current,b(Cs)}function ws(e,t,a){for(;e!==null;){var n=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,n!==null&&(n.childLanes|=t)):n!==null&&(n.childLanes&t)!==t&&(n.childLanes|=t),e===a)break;e=e.return}}function Rs(e,t,a,n){var i=e.child;for(i!==null&&(i.return=e);i!==null;){var l=i.dependencies;if(l!==null){var s=i.child;l=l.firstContext;e:for(;l!==null;){var o=l;l=i;for(var u=0;u<t.length;u++)if(o.context===t[u]){l.lanes|=a,o=l.alternate,o!==null&&(o.lanes|=a),ws(l.return,a,e),n||(s=null);break e}l=o.next}}else if(i.tag===18){if(s=i.return,s===null)throw Error(h(341));s.lanes|=a,l=s.alternate,l!==null&&(l.lanes|=a),ws(s,a,e),s=null}else s=i.child;if(s!==null)s.return=i;else for(s=i;s!==null;){if(s===e){s=null;break}if(i=s.sibling,i!==null){i.return=s.return,s=i;break}s=s.return}i=s}}function ln(e,t,a,n){e=null;for(var i=t,l=!1;i!==null;){if(!l){if((i.flags&524288)!==0)l=!0;else if((i.flags&262144)!==0)break}if(i.tag===10){var s=i.alternate;if(s===null)throw Error(h(387));if(s=s.memoizedProps,s!==null){var o=i.type;$e(i.pendingProps.value,s.value)||(e!==null?e.push(o):e=[o])}}else if(i===P.current){if(s=i.alternate,s===null)throw Error(h(387));s.memoizedState.memoizedState!==i.memoizedState.memoizedState&&(e!==null?e.push(hi):e=[hi])}i=i.return}e!==null&&Rs(t,e,a,n),t.flags|=262144}function Xi(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function za(e){xa=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function we(e){return gc(xa,e)}function Qi(e,t){return xa===null&&za(e),gc(e,t)}function gc(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nt===null){if(e===null)throw Error(h(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return a}var zm=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,n){e.push(n)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Um=C.unstable_scheduleCallback,_m=C.unstable_NormalPriority,ge={$$typeof:xe,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Os(){return{controller:new zm,data:new Map,refCount:0}}function Xn(e){e.refCount--,e.refCount===0&&Um(_m,function(){e.controller.abort()})}var Qn=null,xs=0,sn=0,on=null;function Lm(e,t){if(Qn===null){var a=Qn=[];xs=0,sn=Lo(),on={status:"pending",value:void 0,then:function(n){a.push(n)}}}return xs++,t.then(Ac,Ac),t}function Ac(){if(--xs===0&&Qn!==null){on!==null&&(on.status="fulfilled");var e=Qn;Qn=null,sn=0,on=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Nm(e,t){var a=[],n={status:"pending",value:null,reason:null,then:function(i){a.push(i)}};return e.then(function(){n.status="fulfilled",n.value=t;for(var i=0;i<a.length;i++)(0,a[i])(t)},function(i){for(n.status="rejected",n.reason=i,i=0;i<a.length;i++)(0,a[i])(void 0)}),n}var Sc=g.S;g.S=function(e,t){nd=Fe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&Lm(e,t),Sc!==null&&Sc(e,t)};var Ua=r(null);function zs(){var e=Ua.current;return e!==null?e:se.pooledCache}function Zi(e,t){t===null?T(Ua,Ua.current):T(Ua,t.pool)}function bc(){var e=zs();return e===null?null:{parent:ge._currentValue,pool:e}}var un=Error(h(460)),Us=Error(h(474)),ki=Error(h(542)),Ki={then:function(){}};function Ec(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Mc(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(zt,zt),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e;default:if(typeof t.status=="string")t.then(zt,zt);else{if(e=se,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(n){if(t.status==="pending"){var i=t;i.status="fulfilled",i.value=n}},function(n){if(t.status==="pending"){var i=t;i.status="rejected",i.reason=n}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Dc(e),e}throw La=t,un}}function _a(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(La=a,un):a}}var La=null;function Tc(){if(La===null)throw Error(h(459));var e=La;return La=null,e}function Dc(e){if(e===un||e===ki)throw Error(h(483))}var cn=null,Zn=0;function Ji(e){var t=Zn;return Zn+=1,cn===null&&(cn=[]),Mc(cn,e,t)}function kn(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Ii(e,t){throw t.$$typeof===ce?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Cc(e){function t(d,c){if(e){var f=d.deletions;f===null?(d.deletions=[c],d.flags|=16):f.push(c)}}function a(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function n(d){for(var c=new Map;d!==null;)d.key!==null?c.set(d.key,d):c.set(d.index,d),d=d.sibling;return c}function i(d,c){return d=_t(d,c),d.index=0,d.sibling=null,d}function l(d,c,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<c?(d.flags|=67108866,c):f):(d.flags|=67108866,c)):(d.flags|=1048576,c)}function s(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function o(d,c,f,A){return c===null||c.tag!==6?(c=Ss(f,d.mode,A),c.return=d,c):(c=i(c,f),c.return=d,c)}function u(d,c,f,A){var O=f.type;return O===_e?y(d,c,f.props.children,A,f.key):c!==null&&(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ve&&_a(O)===c.type)?(c=i(c,f.props),kn(c,f),c.return=d,c):(c=Yi(f.type,f.key,f.props,null,d.mode,A),kn(c,f),c.return=d,c)}function m(d,c,f,A){return c===null||c.tag!==4||c.stateNode.containerInfo!==f.containerInfo||c.stateNode.implementation!==f.implementation?(c=bs(f,d.mode,A),c.return=d,c):(c=i(c,f.children||[]),c.return=d,c)}function y(d,c,f,A,O){return c===null||c.tag!==7?(c=Ra(f,d.mode,A,O),c.return=d,c):(c=i(c,f),c.return=d,c)}function S(d,c,f){if(typeof c=="string"&&c!==""||typeof c=="number"||typeof c=="bigint")return c=Ss(""+c,d.mode,f),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case Je:return f=Yi(c.type,c.key,c.props,null,d.mode,f),kn(f,c),f.return=d,f;case Be:return c=bs(c,d.mode,f),c.return=d,c;case Ve:return c=_a(c),S(d,c,f)}if(yt(c)||Ge(c))return c=Ra(c,d.mode,f,null),c.return=d,c;if(typeof c.then=="function")return S(d,Ji(c),f);if(c.$$typeof===xe)return S(d,Qi(d,c),f);Ii(d,c)}return null}function p(d,c,f,A){var O=c!==null?c.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return O!==null?null:o(d,c,""+f,A);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:return f.key===O?u(d,c,f,A):null;case Be:return f.key===O?m(d,c,f,A):null;case Ve:return f=_a(f),p(d,c,f,A)}if(yt(f)||Ge(f))return O!==null?null:y(d,c,f,A,null);if(typeof f.then=="function")return p(d,c,Ji(f),A);if(f.$$typeof===xe)return p(d,c,Qi(d,f),A);Ii(d,f)}return null}function v(d,c,f,A,O){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return d=d.get(f)||null,o(c,d,""+A,O);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Je:return d=d.get(A.key===null?f:A.key)||null,u(c,d,A,O);case Be:return d=d.get(A.key===null?f:A.key)||null,m(c,d,A,O);case Ve:return A=_a(A),v(d,c,f,A,O)}if(yt(A)||Ge(A))return d=d.get(f)||null,y(c,d,A,O,null);if(typeof A.then=="function")return v(d,c,f,Ji(A),O);if(A.$$typeof===xe)return v(d,c,f,Qi(c,A),O);Ii(c,A)}return null}function D(d,c,f,A){for(var O=null,k=null,R=c,H=c=0,X=null;R!==null&&H<f.length;H++){R.index>H?(X=R,R=null):X=R.sibling;var K=p(d,R,f[H],A);if(K===null){R===null&&(R=X);break}e&&R&&K.alternate===null&&t(d,R),c=l(K,c,H),k===null?O=K:k.sibling=K,k=K,R=X}if(H===f.length)return a(d,R),Z&&Lt(d,H),O;if(R===null){for(;H<f.length;H++)R=S(d,f[H],A),R!==null&&(c=l(R,c,H),k===null?O=R:k.sibling=R,k=R);return Z&&Lt(d,H),O}for(R=n(R);H<f.length;H++)X=v(R,d,H,f[H],A),X!==null&&(e&&X.alternate!==null&&R.delete(X.key===null?H:X.key),c=l(X,c,H),k===null?O=X:k.sibling=X,k=X);return e&&R.forEach(function(Aa){return t(d,Aa)}),Z&&Lt(d,H),O}function z(d,c,f,A){if(f==null)throw Error(h(151));for(var O=null,k=null,R=c,H=c=0,X=null,K=f.next();R!==null&&!K.done;H++,K=f.next()){R.index>H?(X=R,R=null):X=R.sibling;var Aa=p(d,R,K.value,A);if(Aa===null){R===null&&(R=X);break}e&&R&&Aa.alternate===null&&t(d,R),c=l(Aa,c,H),k===null?O=Aa:k.sibling=Aa,k=Aa,R=X}if(K.done)return a(d,R),Z&&Lt(d,H),O;if(R===null){for(;!K.done;H++,K=f.next())K=S(d,K.value,A),K!==null&&(c=l(K,c,H),k===null?O=K:k.sibling=K,k=K);return Z&&Lt(d,H),O}for(R=n(R);!K.done;H++,K=f.next())K=v(R,d,H,K.value,A),K!==null&&(e&&K.alternate!==null&&R.delete(K.key===null?H:K.key),c=l(K,c,H),k===null?O=K:k.sibling=K,k=K);return e&&R.forEach(function(kp){return t(d,kp)}),Z&&Lt(d,H),O}function ie(d,c,f,A){if(typeof f=="object"&&f!==null&&f.type===_e&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Je:e:{for(var O=f.key;c!==null;){if(c.key===O){if(O=f.type,O===_e){if(c.tag===7){a(d,c.sibling),A=i(c,f.props.children),A.return=d,d=A;break e}}else if(c.elementType===O||typeof O=="object"&&O!==null&&O.$$typeof===Ve&&_a(O)===c.type){a(d,c.sibling),A=i(c,f.props),kn(A,f),A.return=d,d=A;break e}a(d,c);break}else t(d,c);c=c.sibling}f.type===_e?(A=Ra(f.props.children,d.mode,A,f.key),A.return=d,d=A):(A=Yi(f.type,f.key,f.props,null,d.mode,A),kn(A,f),A.return=d,d=A)}return s(d);case Be:e:{for(O=f.key;c!==null;){if(c.key===O)if(c.tag===4&&c.stateNode.containerInfo===f.containerInfo&&c.stateNode.implementation===f.implementation){a(d,c.sibling),A=i(c,f.children||[]),A.return=d,d=A;break e}else{a(d,c);break}else t(d,c);c=c.sibling}A=bs(f,d.mode,A),A.return=d,d=A}return s(d);case Ve:return f=_a(f),ie(d,c,f,A)}if(yt(f))return D(d,c,f,A);if(Ge(f)){if(O=Ge(f),typeof O!="function")throw Error(h(150));return f=O.call(f),z(d,c,f,A)}if(typeof f.then=="function")return ie(d,c,Ji(f),A);if(f.$$typeof===xe)return ie(d,c,Qi(d,f),A);Ii(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,c!==null&&c.tag===6?(a(d,c.sibling),A=i(c,f),A.return=d,d=A):(a(d,c),A=Ss(f,d.mode,A),A.return=d,d=A),s(d)):a(d,c)}return function(d,c,f,A){try{Zn=0;var O=ie(d,c,f,A);return cn=null,O}catch(R){if(R===un||R===ki)throw R;var k=et(29,R,null,d.mode);return k.lanes=A,k.return=d,k}finally{}}}var Na=Cc(!0),wc=Cc(!1),aa=!1;function _s(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Ls(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function na(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function ia(e,t,a){var n=e.updateQueue;if(n===null)return null;if(n=n.shared,(I&2)!==0){var i=n.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),n.pending=t,t=Gi(e),rc(e,null,a),t}return Vi(e,n,t,a),Gi(e)}function Kn(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,gu(e,a)}}function Ns(e,t){var a=e.updateQueue,n=e.alternate;if(n!==null&&(n=n.updateQueue,a===n)){var i=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var s={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?i=l=s:l=l.next=s,a=a.next}while(a!==null);l===null?i=l=t:l=l.next=t}else i=l=t;a={baseState:n.baseState,firstBaseUpdate:i,lastBaseUpdate:l,shared:n.shared,callbacks:n.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var qs=!1;function Jn(){if(qs){var e=on;if(e!==null)throw e}}function In(e,t,a,n){qs=!1;var i=e.updateQueue;aa=!1;var l=i.firstBaseUpdate,s=i.lastBaseUpdate,o=i.shared.pending;if(o!==null){i.shared.pending=null;var u=o,m=u.next;u.next=null,s===null?l=m:s.next=m,s=u;var y=e.alternate;y!==null&&(y=y.updateQueue,o=y.lastBaseUpdate,o!==s&&(o===null?y.firstBaseUpdate=m:o.next=m,y.lastBaseUpdate=u))}if(l!==null){var S=i.baseState;s=0,y=m=u=null,o=l;do{var p=o.lane&-536870913,v=p!==o.lane;if(v?(j&p)===p:(n&p)===p){p!==0&&p===sn&&(qs=!0),y!==null&&(y=y.next={lane:0,tag:o.tag,payload:o.payload,callback:null,next:null});e:{var D=e,z=o;p=t;var ie=a;switch(z.tag){case 1:if(D=z.payload,typeof D=="function"){S=D.call(ie,S,p);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=z.payload,p=typeof D=="function"?D.call(ie,S,p):D,p==null)break e;S=_({},S,p);break e;case 2:aa=!0}}p=o.callback,p!==null&&(e.flags|=64,v&&(e.flags|=8192),v=i.callbacks,v===null?i.callbacks=[p]:v.push(p))}else v={lane:p,tag:o.tag,payload:o.payload,callback:o.callback,next:null},y===null?(m=y=v,u=S):y=y.next=v,s|=p;if(o=o.next,o===null){if(o=i.shared.pending,o===null)break;v=o,o=v.next,v.next=null,i.lastBaseUpdate=v,i.shared.pending=null}}while(!0);y===null&&(u=S),i.baseState=u,i.firstBaseUpdate=m,i.lastBaseUpdate=y,l===null&&(i.shared.lanes=0),ca|=s,e.lanes=s,e.memoizedState=S}}function Rc(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function Oc(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Rc(a[e],t)}var rn=r(null),Fi=r(0);function xc(e,t){e=Zt,T(Fi,e),T(rn,t),Zt=e|t.baseLanes}function Bs(){T(Fi,Zt),T(rn,rn.current)}function Hs(){Zt=Fi.current,b(rn),b(Fi)}var tt=r(null),pt=null;function la(e){var t=e.alternate;T(ve,ve.current&1),T(tt,e),pt===null&&(t===null||rn.current!==null||t.memoizedState!==null)&&(pt=e)}function Vs(e){T(ve,ve.current),T(tt,e),pt===null&&(pt=e)}function zc(e){e.tag===22?(T(ve,ve.current),T(tt,e),pt===null&&(pt=e)):sa()}function sa(){T(ve,ve.current),T(tt,tt.current)}function at(e){b(tt),pt===e&&(pt=null),b(ve)}var ve=r(0);function Wi(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||ko(a)||Ko(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Bt=0,B=null,ae=null,Ae=null,Pi=!1,dn=!1,qa=!1,$i=0,Fn=0,fn=null,qm=0;function fe(){throw Error(h(321))}function Gs(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Ys(e,t,a,n,i,l){return Bt=l,B=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,g.H=e===null||e.memoizedState===null?pr:ao,qa=!1,l=a(n,i),qa=!1,dn&&(l=_c(t,a,n,i)),Uc(e),l}function Uc(e){g.H=$n;var t=ae!==null&&ae.next!==null;if(Bt=0,Ae=ae=B=null,Pi=!1,Fn=0,fn=null,t)throw Error(h(300));e===null||Se||(e=e.dependencies,e!==null&&Xi(e)&&(Se=!0))}function _c(e,t,a,n){B=e;var i=0;do{if(dn&&(fn=null),Fn=0,dn=!1,25<=i)throw Error(h(301));if(i+=1,Ae=ae=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}g.H=hr,l=t(a,n)}while(dn);return l}function Bm(){var e=g.H,t=e.useState()[0];return t=typeof t.then=="function"?Wn(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(B.flags|=1024),t}function js(){var e=$i!==0;return $i=0,e}function Xs(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function Qs(e){if(Pi){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Pi=!1}Bt=0,Ae=ae=B=null,dn=!1,Fn=$i=0,fn=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?B.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ye(){if(ae===null){var e=B.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Ae===null?B.memoizedState:Ae.next;if(t!==null)Ae=t,ae=e;else{if(e===null)throw B.alternate===null?Error(h(467)):Error(h(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Ae===null?B.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function el(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Wn(e){var t=Fn;return Fn+=1,fn===null&&(fn=[]),e=Mc(fn,e,t),t=B,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,g.H=t===null||t.memoizedState===null?pr:ao),e}function tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Wn(e);if(e.$$typeof===xe)return we(e)}throw Error(h(438,String(e)))}function Zs(e){var t=null,a=B.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var n=B.alternate;n!==null&&(n=n.updateQueue,n!==null&&(n=n.memoCache,n!=null&&(t={data:n.data.map(function(i){return i.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=el(),B.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),n=0;n<e;n++)a[n]=Ga;return t.index++,a}function Ht(e,t){return typeof t=="function"?t(e):t}function al(e){var t=ye();return ks(t,ae,e)}function ks(e,t,a){var n=e.queue;if(n===null)throw Error(h(311));n.lastRenderedReducer=a;var i=e.baseQueue,l=n.pending;if(l!==null){if(i!==null){var s=i.next;i.next=l.next,l.next=s}t.baseQueue=i=l,n.pending=null}if(l=e.baseState,i===null)e.memoizedState=l;else{t=i.next;var o=s=null,u=null,m=t,y=!1;do{var S=m.lane&-536870913;if(S!==m.lane?(j&S)===S:(Bt&S)===S){var p=m.revertLane;if(p===0)u!==null&&(u=u.next={lane:0,revertLane:0,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null}),S===sn&&(y=!0);else if((Bt&p)===p){m=m.next,p===sn&&(y=!0);continue}else S={lane:0,revertLane:m.revertLane,gesture:null,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(o=u=S,s=l):u=u.next=S,B.lanes|=p,ca|=p;S=m.action,qa&&a(l,S),l=m.hasEagerState?m.eagerState:a(l,S)}else p={lane:S,revertLane:m.revertLane,gesture:m.gesture,action:m.action,hasEagerState:m.hasEagerState,eagerState:m.eagerState,next:null},u===null?(o=u=p,s=l):u=u.next=p,B.lanes|=S,ca|=S;m=m.next}while(m!==null&&m!==t);if(u===null?s=l:u.next=o,!$e(l,e.memoizedState)&&(Se=!0,y&&(a=on,a!==null)))throw a;e.memoizedState=l,e.baseState=s,e.baseQueue=u,n.lastRenderedState=l}return i===null&&(n.lanes=0),[e.memoizedState,n.dispatch]}function Ks(e){var t=ye(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var n=a.dispatch,i=a.pending,l=t.memoizedState;if(i!==null){a.pending=null;var s=i=i.next;do l=e(l,s.action),s=s.next;while(s!==i);$e(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,n]}function Lc(e,t,a){var n=B,i=ye(),l=Z;if(l){if(a===void 0)throw Error(h(407));a=a()}else a=t();var s=!$e((ae||i).memoizedState,a);if(s&&(i.memoizedState=a,Se=!0),i=i.queue,Fs(Bc.bind(null,n,i,e),[e]),i.getSnapshot!==t||s||Ae!==null&&Ae.memoizedState.tag&1){if(n.flags|=2048,mn(9,{destroy:void 0},qc.bind(null,n,i,a,t),null),se===null)throw Error(h(349));l||(Bt&127)!==0||Nc(n,t,a)}return a}function Nc(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=B.updateQueue,t===null?(t=el(),B.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function qc(e,t,a,n){t.value=a,t.getSnapshot=n,Hc(t)&&Vc(e)}function Bc(e,t,a){return a(function(){Hc(t)&&Vc(e)})}function Hc(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function Vc(e){var t=wa(e,2);t!==null&&Ke(t,e,2)}function Js(e){var t=Ne();if(typeof e=="function"){var a=e;if(e=a(),qa){It(!0);try{a()}finally{It(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:e},t}function Gc(e,t,a,n){return e.baseState=a,ks(e,ae,typeof n=="function"?n:Ht)}function Hm(e,t,a,n,i){if(ll(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:i,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(s){l.listeners.push(s)}};g.T!==null?a(!0):l.isTransition=!1,n(l),a=t.pending,a===null?(l.next=t.pending=l,Yc(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Yc(e,t){var a=t.action,n=t.payload,i=e.state;if(t.isTransition){var l=g.T,s={};g.T=s;try{var o=a(i,n),u=g.S;u!==null&&u(s,o),jc(e,t,o)}catch(m){Is(e,t,m)}finally{l!==null&&s.types!==null&&(l.types=s.types),g.T=l}}else try{l=a(i,n),jc(e,t,l)}catch(m){Is(e,t,m)}}function jc(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(n){Xc(e,t,n)},function(n){return Is(e,t,n)}):Xc(e,t,a)}function Xc(e,t,a){t.status="fulfilled",t.value=a,Qc(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Yc(e,a)))}function Is(e,t,a){var n=e.pending;if(e.pending=null,n!==null){n=n.next;do t.status="rejected",t.reason=a,Qc(t),t=t.next;while(t!==n)}e.action=null}function Qc(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function Zc(e,t){return t}function kc(e,t){if(Z){var a=se.formState;if(a!==null){e:{var n=B;if(Z){if(oe){t:{for(var i=oe,l=mt;i.nodeType!==8;){if(!l){i=null;break t}if(i=ht(i.nextSibling),i===null){i=null;break t}}l=i.data,i=l==="F!"||l==="F"?i:null}if(i){oe=ht(i.nextSibling),n=i.data==="F!";break e}}ea(n)}n=!1}n&&(t=a[0])}}return a=Ne(),a.memoizedState=a.baseState=t,n={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Zc,lastRenderedState:t},a.queue=n,a=dr.bind(null,B,n),n.dispatch=a,n=Js(!1),l=to.bind(null,B,!1,n.queue),n=Ne(),i={state:t,dispatch:null,action:e,pending:null},n.queue=i,a=Hm.bind(null,B,i,l,a),i.dispatch=a,n.memoizedState=e,[t,a,!1]}function Kc(e){var t=ye();return Jc(t,ae,e)}function Jc(e,t,a){if(t=ks(e,t,Zc)[0],e=al(Ht)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var n=Wn(t)}catch(s){throw s===un?ki:s}else n=t;t=ye();var i=t.queue,l=i.dispatch;return a!==t.memoizedState&&(B.flags|=2048,mn(9,{destroy:void 0},Vm.bind(null,i,a),null)),[n,l,e]}function Vm(e,t){e.action=t}function Ic(e){var t=ye(),a=ae;if(a!==null)return Jc(t,a,e);ye(),t=t.memoizedState,a=ye();var n=a.queue.dispatch;return a.memoizedState=e,[t,n,!1]}function mn(e,t,a,n){return e={tag:e,create:a,deps:n,inst:t,next:null},t=B.updateQueue,t===null&&(t=el(),B.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(n=a.next,a.next=e,e.next=n,t.lastEffect=e),e}function Fc(){return ye().memoizedState}function nl(e,t,a,n){var i=Ne();B.flags|=e,i.memoizedState=mn(1|t,{destroy:void 0},a,n===void 0?null:n)}function il(e,t,a,n){var i=ye();n=n===void 0?null:n;var l=i.memoizedState.inst;ae!==null&&n!==null&&Gs(n,ae.memoizedState.deps)?i.memoizedState=mn(t,l,a,n):(B.flags|=e,i.memoizedState=mn(1|t,l,a,n))}function Wc(e,t){nl(8390656,8,e,t)}function Fs(e,t){il(2048,8,e,t)}function Gm(e){B.flags|=4;var t=B.updateQueue;if(t===null)t=el(),B.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Pc(e){var t=ye().memoizedState;return Gm({ref:t,nextImpl:e}),function(){if((I&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function $c(e,t){return il(4,2,e,t)}function er(e,t){return il(4,4,e,t)}function tr(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ar(e,t,a){a=a!=null?a.concat([e]):null,il(4,4,tr.bind(null,t,e),a)}function Ws(){}function nr(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;return t!==null&&Gs(t,n[1])?n[0]:(a.memoizedState=[e,t],e)}function ir(e,t){var a=ye();t=t===void 0?null:t;var n=a.memoizedState;if(t!==null&&Gs(t,n[1]))return n[0];if(n=e(),qa){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n}function Ps(e,t,a){return a===void 0||(Bt&1073741824)!==0&&(j&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ld(),B.lanes|=e,ca|=e,a)}function lr(e,t,a,n){return $e(a,t)?a:rn.current!==null?(e=Ps(e,a,n),$e(e,t)||(Se=!0),e):(Bt&42)===0||(Bt&1073741824)!==0&&(j&261930)===0?(Se=!0,e.memoizedState=a):(e=ld(),B.lanes|=e,ca|=e,t)}function sr(e,t,a,n,i){var l=M.p;M.p=l!==0&&8>l?l:8;var s=g.T,o={};g.T=o,to(e,!1,t,a);try{var u=i(),m=g.S;if(m!==null&&m(o,u),u!==null&&typeof u=="object"&&typeof u.then=="function"){var y=Nm(u,n);Pn(e,t,y,lt(e))}else Pn(e,t,n,lt(e))}catch(S){Pn(e,t,{then:function(){},status:"rejected",reason:S},lt())}finally{M.p=l,s!==null&&o.types!==null&&(s.types=o.types),g.T=s}}function Ym(){}function $s(e,t,a,n){if(e.tag!==5)throw Error(h(476));var i=or(e).queue;sr(e,i,t,L,a===null?Ym:function(){return ur(e),a(n)})}function or(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:L,baseState:L,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:L},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Ht,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function ur(e){var t=or(e);t.next===null&&(t=e.alternate.memoizedState),Pn(e,t.next.queue,{},lt())}function eo(){return we(hi)}function cr(){return ye().memoizedState}function rr(){return ye().memoizedState}function jm(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=na(a);var n=ia(t,e,a);n!==null&&(Ke(n,t,a),Kn(n,t,a)),t={cache:Os()},e.payload=t;return}t=t.return}}function Xm(e,t,a){var n=lt();a={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?fr(t,a):(a=gs(e,t,a,n),a!==null&&(Ke(a,e,n),mr(a,t,n)))}function dr(e,t,a){var n=lt();Pn(e,t,a,n)}function Pn(e,t,a,n){var i={lane:n,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))fr(t,i);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var s=t.lastRenderedState,o=l(s,a);if(i.hasEagerState=!0,i.eagerState=o,$e(o,s))return Vi(e,t,i,0),se===null&&Hi(),!1}catch{}finally{}if(a=gs(e,t,i,n),a!==null)return Ke(a,e,n),mr(a,t,n),!0}return!1}function to(e,t,a,n){if(n={lane:2,revertLane:Lo(),gesture:null,action:n,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(t)throw Error(h(479))}else t=gs(e,a,n,2),t!==null&&Ke(t,e,2)}function ll(e){var t=e.alternate;return e===B||t!==null&&t===B}function fr(e,t){dn=Pi=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function mr(e,t,a){if((a&4194048)!==0){var n=t.lanes;n&=e.pendingLanes,a|=n,t.lanes=a,gu(e,a)}}var $n={readContext:we,use:tl,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe};$n.useEffectEvent=fe;var pr={readContext:we,use:tl,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:we,useEffect:Wc,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,nl(4194308,4,tr.bind(null,t,e),a)},useLayoutEffect:function(e,t){return nl(4194308,4,e,t)},useInsertionEffect:function(e,t){nl(4,2,e,t)},useMemo:function(e,t){var a=Ne();t=t===void 0?null:t;var n=e();if(qa){It(!0);try{e()}finally{It(!1)}}return a.memoizedState=[n,t],n},useReducer:function(e,t,a){var n=Ne();if(a!==void 0){var i=a(t);if(qa){It(!0);try{a(t)}finally{It(!1)}}}else i=t;return n.memoizedState=n.baseState=i,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:i},n.queue=e,e=e.dispatch=Xm.bind(null,B,e),[n.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=Js(e);var t=e.queue,a=dr.bind(null,B,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Ws,useDeferredValue:function(e,t){var a=Ne();return Ps(a,e,t)},useTransition:function(){var e=Js(!1);return e=sr.bind(null,B,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var n=B,i=Ne();if(Z){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),se===null)throw Error(h(349));(j&127)!==0||Nc(n,t,a)}i.memoizedState=a;var l={value:a,getSnapshot:t};return i.queue=l,Wc(Bc.bind(null,n,l,e),[e]),n.flags|=2048,mn(9,{destroy:void 0},qc.bind(null,n,l,a,t),null),a},useId:function(){var e=Ne(),t=se.identifierPrefix;if(Z){var a=Dt,n=Tt;a=(n&~(1<<32-Pe(n)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$i++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=qm++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:eo,useFormState:kc,useActionState:kc,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=to.bind(null,B,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zs,useCacheRefresh:function(){return Ne().memoizedState=jm.bind(null,B)},useEffectEvent:function(e){var t=Ne(),a={impl:e};return t.memoizedState=a,function(){if((I&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},ao={readContext:we,use:tl,useCallback:nr,useContext:we,useEffect:Fs,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:ir,useReducer:al,useRef:Fc,useState:function(){return al(Ht)},useDebugValue:Ws,useDeferredValue:function(e,t){var a=ye();return lr(a,ae.memoizedState,e,t)},useTransition:function(){var e=al(Ht)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Wn(e),t]},useSyncExternalStore:Lc,useId:cr,useHostTransitionStatus:eo,useFormState:Kc,useActionState:Kc,useOptimistic:function(e,t){var a=ye();return Gc(a,ae,e,t)},useMemoCache:Zs,useCacheRefresh:rr};ao.useEffectEvent=Pc;var hr={readContext:we,use:tl,useCallback:nr,useContext:we,useEffect:Fs,useImperativeHandle:ar,useInsertionEffect:$c,useLayoutEffect:er,useMemo:ir,useReducer:Ks,useRef:Fc,useState:function(){return Ks(Ht)},useDebugValue:Ws,useDeferredValue:function(e,t){var a=ye();return ae===null?Ps(a,e,t):lr(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ks(Ht)[0],t=ye().memoizedState;return[typeof e=="boolean"?e:Wn(e),t]},useSyncExternalStore:Lc,useId:cr,useHostTransitionStatus:eo,useFormState:Ic,useActionState:Ic,useOptimistic:function(e,t){var a=ye();return ae!==null?Gc(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zs,useCacheRefresh:rr};hr.useEffectEvent=Pc;function no(e,t,a,n){t=e.memoizedState,a=a(n,t),a=a==null?t:_({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var io={enqueueSetState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ke(t,e,n),Kn(t,e,n))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var n=lt(),i=na(n);i.tag=1,i.payload=t,a!=null&&(i.callback=a),t=ia(e,i,n),t!==null&&(Ke(t,e,n),Kn(t,e,n))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),n=na(a);n.tag=2,t!=null&&(n.callback=t),t=ia(e,n,a),t!==null&&(Ke(t,e,a),Kn(t,e,a))}};function vr(e,t,a,n,i,l,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(n,l,s):t.prototype&&t.prototype.isPureReactComponent?!Vn(a,n)||!Vn(i,l):!0}function yr(e,t,a,n){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,n),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,n),t.state!==e&&io.enqueueReplaceState(t,t.state,null)}function Ba(e,t){var a=t;if("ref"in t){a={};for(var n in t)n!=="ref"&&(a[n]=t[n])}if(e=e.defaultProps){a===t&&(a=_({},a));for(var i in e)a[i]===void 0&&(a[i]=e[i])}return a}function gr(e){Bi(e)}function Ar(e){console.error(e)}function Sr(e){Bi(e)}function sl(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(n){setTimeout(function(){throw n})}}function br(e,t,a){try{var n=e.onCaughtError;n(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(i){setTimeout(function(){throw i})}}function lo(e,t,a){return a=na(a),a.tag=3,a.payload={element:null},a.callback=function(){sl(e,t)},a}function Er(e){return e=na(e),e.tag=3,e}function Mr(e,t,a,n){var i=a.type.getDerivedStateFromError;if(typeof i=="function"){var l=n.value;e.payload=function(){return i(l)},e.callback=function(){br(t,a,n)}}var s=a.stateNode;s!==null&&typeof s.componentDidCatch=="function"&&(e.callback=function(){br(t,a,n),typeof i!="function"&&(ra===null?ra=new Set([this]):ra.add(this));var o=n.stack;this.componentDidCatch(n.value,{componentStack:o!==null?o:""})})}function Qm(e,t,a,n,i){if(a.flags|=32768,n!==null&&typeof n=="object"&&typeof n.then=="function"){if(t=a.alternate,t!==null&&ln(t,a,i,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return pt===null?gl():a.alternate===null&&me===0&&(me=3),a.flags&=-257,a.flags|=65536,a.lanes=i,n===Ki?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([n]):t.add(n),zo(e,n,i)),!1;case 22:return a.flags|=65536,n===Ki?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([n])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([n]):a.add(n)),zo(e,n,i)),!1}throw Error(h(435,a.tag))}return zo(e,n,i),gl(),!1}if(Z)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=i,n!==Ts&&(e=Error(h(422),{cause:n}),jn(rt(e,a)))):(n!==Ts&&(t=Error(h(423),{cause:n}),jn(rt(t,a))),e=e.current.alternate,e.flags|=65536,i&=-i,e.lanes|=i,n=rt(n,a),i=lo(e.stateNode,n,i),Ns(e,i),me!==4&&(me=2)),!1;var l=Error(h(520),{cause:n});if(l=rt(l,a),oi===null?oi=[l]:oi.push(l),me!==4&&(me=2),t===null)return!0;n=rt(n,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=i&-i,a.lanes|=e,e=lo(a.stateNode,n,e),Ns(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ra===null||!ra.has(l))))return a.flags|=65536,i&=-i,a.lanes|=i,i=Er(i),Mr(i,e,a,n),Ns(a,i),!1}a=a.return}while(a!==null);return!1}var so=Error(h(461)),Se=!1;function Re(e,t,a,n){t.child=e===null?wc(t,null,a,n):Na(t,e.child,a,n)}function Tr(e,t,a,n,i){a=a.render;var l=t.ref;if("ref"in n){var s={};for(var o in n)o!=="ref"&&(s[o]=n[o])}else s=n;return za(t),n=Ys(e,t,a,s,l,i),o=js(),e!==null&&!Se?(Xs(e,t,i),Vt(e,t,i)):(Z&&o&&Es(t),t.flags|=1,Re(e,t,n,i),t.child)}function Dr(e,t,a,n,i){if(e===null){var l=a.type;return typeof l=="function"&&!As(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,Cr(e,t,l,n,i)):(e=Yi(a.type,null,n,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!ho(e,i)){var s=l.memoizedProps;if(a=a.compare,a=a!==null?a:Vn,a(s,n)&&e.ref===t.ref)return Vt(e,t,i)}return t.flags|=1,e=_t(l,n),e.ref=t.ref,e.return=t,t.child=e}function Cr(e,t,a,n,i){if(e!==null){var l=e.memoizedProps;if(Vn(l,n)&&e.ref===t.ref)if(Se=!1,t.pendingProps=n=l,ho(e,i))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,Vt(e,t,i)}return oo(e,t,a,n,i)}function wr(e,t,a,n){var i=n.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),n.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(n=t.child=e.child,i=0;n!==null;)i=i|n.lanes|n.childLanes,n=n.sibling;n=i&~l}else n=0,t.child=null;return Rr(e,t,l,a,n)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&Zi(t,l!==null?l.cachePool:null),l!==null?xc(t,l):Bs(),zc(t);else return n=t.lanes=536870912,Rr(e,t,l!==null?l.baseLanes|a:a,a,n)}else l!==null?(Zi(t,l.cachePool),xc(t,l),sa(),t.memoizedState=null):(e!==null&&Zi(t,null),Bs(),sa());return Re(e,t,i,a),t.child}function ei(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rr(e,t,a,n,i){var l=zs();return l=l===null?null:{parent:ge._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&Zi(t,null),Bs(),zc(t),e!==null&&ln(e,t,n,!0),t.childLanes=i,null}function ol(e,t){return t=cl({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Or(e,t,a){return Na(t,e.child,null,a),e=ol(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function Zm(e,t,a){var n=t.pendingProps,i=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(Z){if(n.mode==="hidden")return e=ol(t,n),t.lanes=536870912,ei(null,e);if(Vs(t),(e=oe)?(e=Yd(e,mt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,Ce=t,oe=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return ol(t,n)}var l=e.memoizedState;if(l!==null){var s=l.dehydrated;if(Vs(t),i)if(t.flags&256)t.flags&=-257,t=Or(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Se||ln(e,t,a,!1),i=(a&e.childLanes)!==0,Se||i){if(n=se,n!==null&&(s=Au(n,a),s!==0&&s!==l.retryLane))throw l.retryLane=s,wa(e,s),Ke(n,e,s),so;gl(),t=Or(e,t,a)}else e=l.treeContext,oe=ht(s.nextSibling),Ce=t,Z=!0,$t=null,mt=!1,e!==null&&hc(t,e),t=ol(t,n),t.flags|=4096;return t}return e=_t(e.child,{mode:n.mode,children:n.children}),e.ref=t.ref,t.child=e,e.return=t,e}function ul(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function oo(e,t,a,n,i){return za(t),a=Ys(e,t,a,n,void 0,i),n=js(),e!==null&&!Se?(Xs(e,t,i),Vt(e,t,i)):(Z&&n&&Es(t),t.flags|=1,Re(e,t,a,i),t.child)}function xr(e,t,a,n,i,l){return za(t),t.updateQueue=null,a=_c(t,n,a,i),Uc(e),n=js(),e!==null&&!Se?(Xs(e,t,l),Vt(e,t,l)):(Z&&n&&Es(t),t.flags|=1,Re(e,t,a,l),t.child)}function zr(e,t,a,n,i){if(za(t),t.stateNode===null){var l=en,s=a.contextType;typeof s=="object"&&s!==null&&(l=we(s)),l=new a(n,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=io,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=n,l.state=t.memoizedState,l.refs={},_s(t),s=a.contextType,l.context=typeof s=="object"&&s!==null?we(s):en,l.state=t.memoizedState,s=a.getDerivedStateFromProps,typeof s=="function"&&(no(t,a,s,n),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(s=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),s!==l.state&&io.enqueueReplaceState(l,l.state,null),In(t,n,l,i),Jn(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!0}else if(e===null){l=t.stateNode;var o=t.memoizedProps,u=Ba(a,o);l.props=u;var m=l.context,y=a.contextType;s=en,typeof y=="object"&&y!==null&&(s=we(y));var S=a.getDerivedStateFromProps;y=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function",o=t.pendingProps!==o,y||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o||m!==s)&&yr(t,l,n,s),aa=!1;var p=t.memoizedState;l.state=p,In(t,n,l,i),Jn(),m=t.memoizedState,o||p!==m||aa?(typeof S=="function"&&(no(t,a,S,n),m=t.memoizedState),(u=aa||vr(t,a,u,n,p,m,s))?(y||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=n,t.memoizedState=m),l.props=n,l.state=m,l.context=s,n=u):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),n=!1)}else{l=t.stateNode,Ls(e,t),s=t.memoizedProps,y=Ba(a,s),l.props=y,S=t.pendingProps,p=l.context,m=a.contextType,u=en,typeof m=="object"&&m!==null&&(u=we(m)),o=a.getDerivedStateFromProps,(m=typeof o=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s!==S||p!==u)&&yr(t,l,n,u),aa=!1,p=t.memoizedState,l.state=p,In(t,n,l,i),Jn();var v=t.memoizedState;s!==S||p!==v||aa||e!==null&&e.dependencies!==null&&Xi(e.dependencies)?(typeof o=="function"&&(no(t,a,o,n),v=t.memoizedState),(y=aa||vr(t,a,y,n,p,v,u)||e!==null&&e.dependencies!==null&&Xi(e.dependencies))?(m||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(n,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(n,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),t.memoizedProps=n,t.memoizedState=v),l.props=n,l.state=v,l.context=u,n=y):(typeof l.componentDidUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&p===e.memoizedState||(t.flags|=1024),n=!1)}return l=n,ul(e,t),n=(t.flags&128)!==0,l||n?(l=t.stateNode,a=n&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&n?(t.child=Na(t,e.child,null,i),t.child=Na(t,null,a,i)):Re(e,t,a,i),t.memoizedState=l.state,e=t.child):e=Vt(e,t,i),e}function Ur(e,t,a,n){return Oa(),t.flags|=256,Re(e,t,a,n),t.child}var uo={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function co(e){return{baseLanes:e,cachePool:bc()}}function ro(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=it),e}function _r(e,t,a){var n=t.pendingProps,i=!1,l=(t.flags&128)!==0,s;if((s=l)||(s=e!==null&&e.memoizedState===null?!1:(ve.current&2)!==0),s&&(i=!0,t.flags&=-129),s=(t.flags&32)!==0,t.flags&=-33,e===null){if(Z){if(i?la(t):sa(),(e=oe)?(e=Yd(e,mt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Pt!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=fc(e),a.return=t,t.child=a,Ce=t,oe=null)):e=null,e===null)throw ea(t);return Ko(e)?t.lanes=32:t.lanes=536870912,null}var o=n.children;return n=n.fallback,i?(sa(),i=t.mode,o=cl({mode:"hidden",children:o},i),n=Ra(n,i,a,null),o.return=t,n.return=t,o.sibling=n,t.child=o,n=t.child,n.memoizedState=co(a),n.childLanes=ro(e,s,a),t.memoizedState=uo,ei(null,n)):(la(t),fo(t,o))}var u=e.memoizedState;if(u!==null&&(o=u.dehydrated,o!==null)){if(l)t.flags&256?(la(t),t.flags&=-257,t=mo(e,t,a)):t.memoizedState!==null?(sa(),t.child=e.child,t.flags|=128,t=null):(sa(),o=n.fallback,i=t.mode,n=cl({mode:"visible",children:n.children},i),o=Ra(o,i,a,null),o.flags|=2,n.return=t,o.return=t,n.sibling=o,t.child=n,Na(t,e.child,null,a),n=t.child,n.memoizedState=co(a),n.childLanes=ro(e,s,a),t.memoizedState=uo,t=ei(null,n));else if(la(t),Ko(o)){if(s=o.nextSibling&&o.nextSibling.dataset,s)var m=s.dgst;s=m,n=Error(h(419)),n.stack="",n.digest=s,jn({value:n,source:null,stack:null}),t=mo(e,t,a)}else if(Se||ln(e,t,a,!1),s=(a&e.childLanes)!==0,Se||s){if(s=se,s!==null&&(n=Au(s,a),n!==0&&n!==u.retryLane))throw u.retryLane=n,wa(e,n),Ke(s,e,n),so;ko(o)||gl(),t=mo(e,t,a)}else ko(o)?(t.flags|=192,t.child=e.child,t=null):(e=u.treeContext,oe=ht(o.nextSibling),Ce=t,Z=!0,$t=null,mt=!1,e!==null&&hc(t,e),t=fo(t,n.children),t.flags|=4096);return t}return i?(sa(),o=n.fallback,i=t.mode,u=e.child,m=u.sibling,n=_t(u,{mode:"hidden",children:n.children}),n.subtreeFlags=u.subtreeFlags&65011712,m!==null?o=_t(m,o):(o=Ra(o,i,a,null),o.flags|=2),o.return=t,n.return=t,n.sibling=o,t.child=n,ei(null,n),n=t.child,o=e.child.memoizedState,o===null?o=co(a):(i=o.cachePool,i!==null?(u=ge._currentValue,i=i.parent!==u?{parent:u,pool:u}:i):i=bc(),o={baseLanes:o.baseLanes|a,cachePool:i}),n.memoizedState=o,n.childLanes=ro(e,s,a),t.memoizedState=uo,ei(e.child,n)):(la(t),a=e.child,e=a.sibling,a=_t(a,{mode:"visible",children:n.children}),a.return=t,a.sibling=null,e!==null&&(s=t.deletions,s===null?(t.deletions=[e],t.flags|=16):s.push(e)),t.child=a,t.memoizedState=null,a)}function fo(e,t){return t=cl({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function cl(e,t){return e=et(22,e,null,t),e.lanes=0,e}function mo(e,t,a){return Na(t,e.child,null,a),e=fo(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function Lr(e,t,a){e.lanes|=t;var n=e.alternate;n!==null&&(n.lanes|=t),ws(e.return,t,a)}function po(e,t,a,n,i,l){var s=e.memoizedState;s===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:n,tail:a,tailMode:i,treeForkCount:l}:(s.isBackwards=t,s.rendering=null,s.renderingStartTime=0,s.last=n,s.tail=a,s.tailMode=i,s.treeForkCount=l)}function Nr(e,t,a){var n=t.pendingProps,i=n.revealOrder,l=n.tail;n=n.children;var s=ve.current,o=(s&2)!==0;if(o?(s=s&1|2,t.flags|=128):s&=1,T(ve,s),Re(e,t,n,a),n=Z?Yn:0,!o&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&Lr(e,a,t);else if(e.tag===19)Lr(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(i){case"forwards":for(a=t.child,i=null;a!==null;)e=a.alternate,e!==null&&Wi(e)===null&&(i=a),a=a.sibling;a=i,a===null?(i=t.child,t.child=null):(i=a.sibling,a.sibling=null),po(t,!1,i,a,l,n);break;case"backwards":case"unstable_legacy-backwards":for(a=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Wi(e)===null){t.child=i;break}e=i.sibling,i.sibling=a,a=i,i=e}po(t,!0,a,null,l,n);break;case"together":po(t,!1,null,null,void 0,n);break;default:t.memoizedState=null}return t.child}function Vt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ca|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ln(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=_t(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=_t(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function ho(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Xi(e)))}function km(e,t,a){switch(t.tag){case 3:Le(t,t.stateNode.containerInfo),ta(t,ge,e.memoizedState.cache),Oa();break;case 27:case 5:Cn(t);break;case 4:Le(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vs(t),null;break;case 13:var n=t.memoizedState;if(n!==null)return n.dehydrated!==null?(la(t),t.flags|=128,null):(a&t.child.childLanes)!==0?_r(e,t,a):(la(t),e=Vt(e,t,a),e!==null?e.sibling:null);la(t);break;case 19:var i=(e.flags&128)!==0;if(n=(a&t.childLanes)!==0,n||(ln(e,t,a,!1),n=(a&t.childLanes)!==0),i){if(n)return Nr(e,t,a);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),T(ve,ve.current),n)break;return null;case 22:return t.lanes=0,wr(e,t,a,t.pendingProps);case 24:ta(t,ge,e.memoizedState.cache)}return Vt(e,t,a)}function qr(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!ho(e,a)&&(t.flags&128)===0)return Se=!1,km(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,Z&&(t.flags&1048576)!==0&&pc(t,Yn,t.index);switch(t.lanes=0,t.tag){case 16:e:{var n=t.pendingProps;if(e=_a(t.elementType),t.type=e,typeof e=="function")As(e)?(n=Ba(e,n),t.tag=1,t=zr(null,t,e,n,a)):(t.tag=0,t=oo(null,t,e,n,a));else{if(e!=null){var i=e.$$typeof;if(i===st){t.tag=11,t=Tr(null,t,e,n,a);break e}else if(i===Q){t.tag=14,t=Dr(null,t,e,n,a);break e}}throw t=Ot(e)||e,Error(h(306,t,""))}}return t;case 0:return oo(e,t,t.type,t.pendingProps,a);case 1:return n=t.type,i=Ba(n,t.pendingProps),zr(e,t,n,i,a);case 3:e:{if(Le(t,t.stateNode.containerInfo),e===null)throw Error(h(387));n=t.pendingProps;var l=t.memoizedState;i=l.element,Ls(e,t),In(t,n,null,a);var s=t.memoizedState;if(n=s.cache,ta(t,ge,n),n!==l.cache&&Rs(t,[ge],a,!0),Jn(),n=s.element,l.isDehydrated)if(l={element:n,isDehydrated:!1,cache:s.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Ur(e,t,n,a);break e}else if(n!==i){i=rt(Error(h(424)),t),jn(i),t=Ur(e,t,n,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(oe=ht(e.firstChild),Ce=t,Z=!0,$t=null,mt=!0,a=wc(t,null,n,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(Oa(),n===i){t=Vt(e,t,a);break e}Re(e,t,n,a)}t=t.child}return t;case 26:return ul(e,t),e===null?(a=Kd(t.type,null,t.pendingProps,null))?t.memoizedState=a:Z||(a=t.type,e=t.pendingProps,n=Dl(V.current).createElement(a),n[De]=t,n[Ye]=e,Oe(n,a,e),Me(n),t.stateNode=n):t.memoizedState=Kd(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Cn(t),e===null&&Z&&(n=t.stateNode=Qd(t.type,t.pendingProps,V.current),Ce=t,mt=!0,i=oe,pa(t.type)?(Jo=i,oe=ht(n.firstChild)):oe=i),Re(e,t,t.pendingProps.children,a),ul(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&Z&&((i=n=oe)&&(n=Ep(n,t.type,t.pendingProps,mt),n!==null?(t.stateNode=n,Ce=t,oe=ht(n.firstChild),mt=!1,i=!0):i=!1),i||ea(t)),Cn(t),i=t.type,l=t.pendingProps,s=e!==null?e.memoizedProps:null,n=l.children,Xo(i,l)?n=null:s!==null&&Xo(i,s)&&(t.flags|=32),t.memoizedState!==null&&(i=Ys(e,t,Bm,null,null,a),hi._currentValue=i),ul(e,t),Re(e,t,n,a),t.child;case 6:return e===null&&Z&&((e=a=oe)&&(a=Mp(a,t.pendingProps,mt),a!==null?(t.stateNode=a,Ce=t,oe=null,e=!0):e=!1),e||ea(t)),null;case 13:return _r(e,t,a);case 4:return Le(t,t.stateNode.containerInfo),n=t.pendingProps,e===null?t.child=Na(t,null,n,a):Re(e,t,n,a),t.child;case 11:return Tr(e,t,t.type,t.pendingProps,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:return n=t.pendingProps,ta(t,t.type,n.value),Re(e,t,n.children,a),t.child;case 9:return i=t.type._context,n=t.pendingProps.children,za(t),i=we(i),n=n(i),t.flags|=1,Re(e,t,n,a),t.child;case 14:return Dr(e,t,t.type,t.pendingProps,a);case 15:return Cr(e,t,t.type,t.pendingProps,a);case 19:return Nr(e,t,a);case 31:return Zm(e,t,a);case 22:return wr(e,t,a,t.pendingProps);case 24:return za(t),n=we(ge),e===null?(i=zs(),i===null&&(i=se,l=Os(),i.pooledCache=l,l.refCount++,l!==null&&(i.pooledCacheLanes|=a),i=l),t.memoizedState={parent:n,cache:i},_s(t),ta(t,ge,i)):((e.lanes&a)!==0&&(Ls(e,t),In(t,null,null,a),Jn()),i=e.memoizedState,l=t.memoizedState,i.parent!==n?(i={parent:n,cache:n},t.memoizedState=i,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=i),ta(t,ge,n)):(n=l.cache,ta(t,ge,n),n!==i.cache&&Rs(t,[ge],a,!0))),Re(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Gt(e){e.flags|=4}function vo(e,t,a,n,i){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(i&335544128)===i)if(e.stateNode.complete)e.flags|=8192;else if(cd())e.flags|=8192;else throw La=Ki,Us}else e.flags&=-16777217}function Br(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Pd(t))if(cd())e.flags|=8192;else throw La=Ki,Us}function rl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?vu():536870912,e.lanes|=t,yn|=t)}function ti(e,t){if(!Z)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var n=null;a!==null;)a.alternate!==null&&(n=a),a=a.sibling;n===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:n.sibling=null}}function ue(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,n=0;if(t)for(var i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags&65011712,n|=i.flags&65011712,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)a|=i.lanes|i.childLanes,n|=i.subtreeFlags,n|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=n,e.childLanes=a,t}function Km(e,t,a){var n=t.pendingProps;switch(Ms(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ue(t),null;case 1:return ue(t),null;case 3:return a=t.stateNode,n=null,e!==null&&(n=e.memoizedState.cache),t.memoizedState.cache!==n&&(t.flags|=2048),qt(ge),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(nn(t)?Gt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ds())),ue(t),null;case 26:var i=t.type,l=t.memoizedState;return e===null?(Gt(t),l!==null?(ue(t),Br(t,l)):(ue(t),vo(t,i,null,n,a))):l?l!==e.memoizedState?(Gt(t),ue(t),Br(t,l)):(ue(t),t.flags&=-16777217):(e=e.memoizedProps,e!==n&&Gt(t),ue(t),vo(t,i,e,n,a)),null;case 27:if(bi(t),a=V.current,i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return ue(t),null}e=w.current,nn(t)?vc(t):(e=Qd(i,n,a),t.stateNode=e,Gt(t))}return ue(t),null;case 5:if(bi(t),i=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(!n){if(t.stateNode===null)throw Error(h(166));return ue(t),null}if(l=w.current,nn(t))vc(t);else{var s=Dl(V.current);switch(l){case 1:l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case 2:l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;default:switch(i){case"svg":l=s.createElementNS("http://www.w3.org/2000/svg",i);break;case"math":l=s.createElementNS("http://www.w3.org/1998/Math/MathML",i);break;case"script":l=s.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof n.is=="string"?s.createElement("select",{is:n.is}):s.createElement("select"),n.multiple?l.multiple=!0:n.size&&(l.size=n.size);break;default:l=typeof n.is=="string"?s.createElement(i,{is:n.is}):s.createElement(i)}}l[De]=t,l[Ye]=n;e:for(s=t.child;s!==null;){if(s.tag===5||s.tag===6)l.appendChild(s.stateNode);else if(s.tag!==4&&s.tag!==27&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===t)break e;for(;s.sibling===null;){if(s.return===null||s.return===t)break e;s=s.return}s.sibling.return=s.return,s=s.sibling}t.stateNode=l;e:switch(Oe(l,i,n),i){case"button":case"input":case"select":case"textarea":n=!!n.autoFocus;break e;case"img":n=!0;break e;default:n=!1}n&&Gt(t)}}return ue(t),vo(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==n&&Gt(t);else{if(typeof n!="string"&&t.stateNode===null)throw Error(h(166));if(e=V.current,nn(t)){if(e=t.stateNode,a=t.memoizedProps,n=null,i=Ce,i!==null)switch(i.tag){case 27:case 5:n=i.memoizedProps}e[De]=t,e=!!(e.nodeValue===a||n!==null&&n.suppressHydrationWarning===!0||_d(e.nodeValue,a)),e||ea(t,!0)}else e=Dl(e).createTextNode(n),e[De]=t,t.stateNode=e}return ue(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(n=nn(t),a!==null){if(e===null){if(!n)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[De]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),e=!1}else a=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return ue(t),null;case 13:if(n=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(i=nn(t),n!==null&&n.dehydrated!==null){if(e===null){if(!i)throw Error(h(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(h(317));i[De]=t}else Oa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;ue(t),i=!1}else i=Ds(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=i),i=!0;if(!i)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=n!==null,e=e!==null&&e.memoizedState!==null,a&&(n=t.child,i=null,n.alternate!==null&&n.alternate.memoizedState!==null&&n.alternate.memoizedState.cachePool!==null&&(i=n.alternate.memoizedState.cachePool.pool),l=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(l=n.memoizedState.cachePool.pool),l!==i&&(n.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),rl(t,t.updateQueue),ue(t),null);case 4:return he(),e===null&&Ho(t.stateNode.containerInfo),ue(t),null;case 10:return qt(t.type),ue(t),null;case 19:if(b(ve),n=t.memoizedState,n===null)return ue(t),null;if(i=(t.flags&128)!==0,l=n.rendering,l===null)if(i)ti(n,!1);else{if(me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Wi(e),l!==null){for(t.flags|=128,ti(n,!1),e=l.updateQueue,t.updateQueue=e,rl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)dc(a,e),a=a.sibling;return T(ve,ve.current&1|2),Z&&Lt(t,n.treeForkCount),t.child}e=e.sibling}n.tail!==null&&Fe()>hl&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304)}else{if(!i)if(e=Wi(l),e!==null){if(t.flags|=128,i=!0,e=e.updateQueue,t.updateQueue=e,rl(t,e),ti(n,!0),n.tail===null&&n.tailMode==="hidden"&&!l.alternate&&!Z)return ue(t),null}else 2*Fe()-n.renderingStartTime>hl&&a!==536870912&&(t.flags|=128,i=!0,ti(n,!1),t.lanes=4194304);n.isBackwards?(l.sibling=t.child,t.child=l):(e=n.last,e!==null?e.sibling=l:t.child=l,n.last=l)}return n.tail!==null?(e=n.tail,n.rendering=e,n.tail=e.sibling,n.renderingStartTime=Fe(),e.sibling=null,a=ve.current,T(ve,i?a&1|2:a&1),Z&&Lt(t,n.treeForkCount),e):(ue(t),null);case 22:case 23:return at(t),Hs(),n=t.memoizedState!==null,e!==null?e.memoizedState!==null!==n&&(t.flags|=8192):n&&(t.flags|=8192),n?(a&536870912)!==0&&(t.flags&128)===0&&(ue(t),t.subtreeFlags&6&&(t.flags|=8192)):ue(t),a=t.updateQueue,a!==null&&rl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),n=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(n=t.memoizedState.cachePool.pool),n!==a&&(t.flags|=2048),e!==null&&b(Ua),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),qt(ge),ue(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Jm(e,t){switch(Ms(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return qt(ge),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bi(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));Oa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ve),null;case 4:return he(),null;case 10:return qt(t.type),null;case 22:case 23:return at(t),Hs(),e!==null&&b(Ua),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return qt(ge),null;case 25:return null;default:return null}}function Hr(e,t){switch(Ms(t),t.tag){case 3:qt(ge),he();break;case 26:case 27:case 5:bi(t);break;case 4:he();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:b(ve);break;case 10:qt(t.type);break;case 22:case 23:at(t),Hs(),e!==null&&b(Ua);break;case 24:qt(ge)}}function ai(e,t){try{var a=t.updateQueue,n=a!==null?a.lastEffect:null;if(n!==null){var i=n.next;a=i;do{if((a.tag&e)===e){n=void 0;var l=a.create,s=a.inst;n=l(),s.destroy=n}a=a.next}while(a!==i)}}catch(o){ee(t,t.return,o)}}function oa(e,t,a){try{var n=t.updateQueue,i=n!==null?n.lastEffect:null;if(i!==null){var l=i.next;n=l;do{if((n.tag&e)===e){var s=n.inst,o=s.destroy;if(o!==void 0){s.destroy=void 0,i=t;var u=a,m=o;try{m()}catch(y){ee(i,u,y)}}}n=n.next}while(n!==l)}}catch(y){ee(t,t.return,y)}}function Vr(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{Oc(t,a)}catch(n){ee(e,e.return,n)}}}function Gr(e,t,a){a.props=Ba(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(n){ee(e,t,n)}}function ni(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var n=e.stateNode;break;case 30:n=e.stateNode;break;default:n=e.stateNode}typeof a=="function"?e.refCleanup=a(n):a.current=n}}catch(i){ee(e,t,i)}}function Ct(e,t){var a=e.ref,n=e.refCleanup;if(a!==null)if(typeof n=="function")try{n()}catch(i){ee(e,t,i)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(i){ee(e,t,i)}else a.current=null}function Yr(e){var t=e.type,a=e.memoizedProps,n=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break e;case"img":a.src?n.src=a.src:a.srcSet&&(n.srcset=a.srcSet)}}catch(i){ee(e,e.return,i)}}function yo(e,t,a){try{var n=e.stateNode;vp(n,e.type,a,t),n[Ye]=t}catch(i){ee(e,e.return,i)}}function jr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&pa(e.type)||e.tag===4}function go(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||jr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&pa(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ao(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=zt));else if(n!==4&&(n===27&&pa(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(Ao(e,t,a),e=e.sibling;e!==null;)Ao(e,t,a),e=e.sibling}function dl(e,t,a){var n=e.tag;if(n===5||n===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(n!==4&&(n===27&&pa(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(dl(e,t,a),e=e.sibling;e!==null;)dl(e,t,a),e=e.sibling}function Xr(e){var t=e.stateNode,a=e.memoizedProps;try{for(var n=e.type,i=t.attributes;i.length;)t.removeAttributeNode(i[0]);Oe(t,n,a),t[De]=e,t[Ye]=a}catch(l){ee(e,e.return,l)}}var Yt=!1,be=!1,So=!1,Qr=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Im(e,t){if(e=e.containerInfo,Yo=Ul,e=ac(e),fs(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var n=a.getSelection&&a.getSelection();if(n&&n.rangeCount!==0){a=n.anchorNode;var i=n.anchorOffset,l=n.focusNode;n=n.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var s=0,o=-1,u=-1,m=0,y=0,S=e,p=null;t:for(;;){for(var v;S!==a||i!==0&&S.nodeType!==3||(o=s+i),S!==l||n!==0&&S.nodeType!==3||(u=s+n),S.nodeType===3&&(s+=S.nodeValue.length),(v=S.firstChild)!==null;)p=S,S=v;for(;;){if(S===e)break t;if(p===a&&++m===i&&(o=s),p===l&&++y===n&&(u=s),(v=S.nextSibling)!==null)break;S=p,p=S.parentNode}S=v}a=o===-1||u===-1?null:{start:o,end:u}}else a=null}a=a||{start:0,end:0}}else a=null;for(jo={focusedElem:e,selectionRange:a},Ul=!1,Te=t;Te!==null;)if(t=Te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Te=e;else for(;Te!==null;){switch(t=Te,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)i=e[a],i.ref.impl=i.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,i=l.memoizedProps,l=l.memoizedState,n=a.stateNode;try{var D=Ba(a.type,i);e=n.getSnapshotBeforeUpdate(D,l),n.__reactInternalSnapshotBeforeUpdate=e}catch(z){ee(a,a.return,z)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)Zo(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":Zo(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Te=e;break}Te=t.return}}function Zr(e,t,a){var n=a.flags;switch(a.tag){case 0:case 11:case 15:Xt(e,a),n&4&&ai(5,a);break;case 1:if(Xt(e,a),n&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(s){ee(a,a.return,s)}else{var i=Ba(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(i,t,e.__reactInternalSnapshotBeforeUpdate)}catch(s){ee(a,a.return,s)}}n&64&&Vr(a),n&512&&ni(a,a.return);break;case 3:if(Xt(e,a),n&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{Oc(e,t)}catch(s){ee(a,a.return,s)}}break;case 27:t===null&&n&4&&Xr(a);case 26:case 5:Xt(e,a),t===null&&n&4&&Yr(a),n&512&&ni(a,a.return);break;case 12:Xt(e,a);break;case 31:Xt(e,a),n&4&&Jr(e,a);break;case 13:Xt(e,a),n&4&&Ir(e,a),n&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=ip.bind(null,a),Tp(e,a))));break;case 22:if(n=a.memoizedState!==null||Yt,!n){t=t!==null&&t.memoizedState!==null||be,i=Yt;var l=be;Yt=n,(be=t)&&!l?Qt(e,a,(a.subtreeFlags&8772)!==0):Xt(e,a),Yt=i,be=l}break;case 30:break;default:Xt(e,a)}}function kr(e){var t=e.alternate;t!==null&&(e.alternate=null,kr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Il(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var re=null,Xe=!1;function jt(e,t,a){for(a=a.child;a!==null;)Kr(e,t,a),a=a.sibling}function Kr(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(wn,a)}catch{}switch(a.tag){case 26:be||Ct(a,t),jt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||Ct(a,t);var n=re,i=Xe;pa(a.type)&&(re=a.stateNode,Xe=!1),jt(e,t,a),fi(a.stateNode),re=n,Xe=i;break;case 5:be||Ct(a,t);case 6:if(n=re,i=Xe,re=null,jt(e,t,a),re=n,Xe=i,re!==null)if(Xe)try{(re.nodeType===9?re.body:re.nodeName==="HTML"?re.ownerDocument.body:re).removeChild(a.stateNode)}catch(l){ee(a,t,l)}else try{re.removeChild(a.stateNode)}catch(l){ee(a,t,l)}break;case 18:re!==null&&(Xe?(e=re,Vd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Dn(e)):Vd(re,a.stateNode));break;case 4:n=re,i=Xe,re=a.stateNode.containerInfo,Xe=!0,jt(e,t,a),re=n,Xe=i;break;case 0:case 11:case 14:case 15:oa(2,a,t),be||oa(4,a,t),jt(e,t,a);break;case 1:be||(Ct(a,t),n=a.stateNode,typeof n.componentWillUnmount=="function"&&Gr(a,t,n)),jt(e,t,a);break;case 21:jt(e,t,a);break;case 22:be=(n=be)||a.memoizedState!==null,jt(e,t,a),be=n;break;default:jt(e,t,a)}}function Jr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Dn(e)}catch(a){ee(t,t.return,a)}}}function Ir(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Dn(e)}catch(a){ee(t,t.return,a)}}function Fm(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Qr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Qr),t;default:throw Error(h(435,e.tag))}}function fl(e,t){var a=Fm(e);t.forEach(function(n){if(!a.has(n)){a.add(n);var i=lp.bind(null,e,n);n.then(i,i)}})}function Qe(e,t){var a=t.deletions;if(a!==null)for(var n=0;n<a.length;n++){var i=a[n],l=e,s=t,o=s;e:for(;o!==null;){switch(o.tag){case 27:if(pa(o.type)){re=o.stateNode,Xe=!1;break e}break;case 5:re=o.stateNode,Xe=!1;break e;case 3:case 4:re=o.stateNode.containerInfo,Xe=!0;break e}o=o.return}if(re===null)throw Error(h(160));Kr(l,s,i),re=null,Xe=!1,l=i.alternate,l!==null&&(l.return=null),i.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Fr(t,e),t=t.sibling}var At=null;function Fr(e,t){var a=e.alternate,n=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Qe(t,e),Ze(e),n&4&&(oa(3,e,e.return),ai(3,e),oa(5,e,e.return));break;case 1:Qe(t,e),Ze(e),n&512&&(be||a===null||Ct(a,a.return)),n&64&&Yt&&(e=e.updateQueue,e!==null&&(n=e.callbacks,n!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?n:a.concat(n))));break;case 26:var i=At;if(Qe(t,e),Ze(e),n&512&&(be||a===null||Ct(a,a.return)),n&4){var l=a!==null?a.memoizedState:null;if(n=e.memoizedState,a===null)if(n===null)if(e.stateNode===null){e:{n=e.type,a=e.memoizedProps,i=i.ownerDocument||i;t:switch(n){case"title":l=i.getElementsByTagName("title")[0],(!l||l[xn]||l[De]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=i.createElement(n),i.head.insertBefore(l,i.querySelector("head > title"))),Oe(l,n,a),l[De]=e,Me(l),n=l;break e;case"link":var s=Fd("link","href",i).get(n+(a.href||""));if(s){for(var o=0;o<s.length;o++)if(l=s[o],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){s.splice(o,1);break t}}l=i.createElement(n),Oe(l,n,a),i.head.appendChild(l);break;case"meta":if(s=Fd("meta","content",i).get(n+(a.content||""))){for(o=0;o<s.length;o++)if(l=s[o],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){s.splice(o,1);break t}}l=i.createElement(n),Oe(l,n,a),i.head.appendChild(l);break;default:throw Error(h(468,n))}l[De]=e,Me(l),n=l}e.stateNode=n}else Wd(i,e.type,e.stateNode);else e.stateNode=Id(i,n,e.memoizedProps);else l!==n?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,n===null?Wd(i,e.type,e.stateNode):Id(i,n,e.memoizedProps)):n===null&&e.stateNode!==null&&yo(e,e.memoizedProps,a.memoizedProps)}break;case 27:Qe(t,e),Ze(e),n&512&&(be||a===null||Ct(a,a.return)),a!==null&&n&4&&yo(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Qe(t,e),Ze(e),n&512&&(be||a===null||Ct(a,a.return)),e.flags&32){i=e.stateNode;try{Ka(i,"")}catch(D){ee(e,e.return,D)}}n&4&&e.stateNode!=null&&(i=e.memoizedProps,yo(e,i,a!==null?a.memoizedProps:i)),n&1024&&(So=!0);break;case 6:if(Qe(t,e),Ze(e),n&4){if(e.stateNode===null)throw Error(h(162));n=e.memoizedProps,a=e.stateNode;try{a.nodeValue=n}catch(D){ee(e,e.return,D)}}break;case 3:if(Rl=null,i=At,At=Cl(t.containerInfo),Qe(t,e),At=i,Ze(e),n&4&&a!==null&&a.memoizedState.isDehydrated)try{Dn(t.containerInfo)}catch(D){ee(e,e.return,D)}So&&(So=!1,Wr(e));break;case 4:n=At,At=Cl(e.stateNode.containerInfo),Qe(t,e),Ze(e),At=n;break;case 12:Qe(t,e),Ze(e);break;case 31:Qe(t,e),Ze(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fl(e,n)));break;case 13:Qe(t,e),Ze(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(pl=Fe()),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fl(e,n)));break;case 22:i=e.memoizedState!==null;var u=a!==null&&a.memoizedState!==null,m=Yt,y=be;if(Yt=m||i,be=y||u,Qe(t,e),be=y,Yt=m,Ze(e),n&8192)e:for(t=e.stateNode,t._visibility=i?t._visibility&-2:t._visibility|1,i&&(a===null||u||Yt||be||Ha(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){u=a=t;try{if(l=u.stateNode,i)s=l.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none";else{o=u.stateNode;var S=u.memoizedProps.style,p=S!=null&&S.hasOwnProperty("display")?S.display:null;o.style.display=p==null||typeof p=="boolean"?"":(""+p).trim()}}catch(D){ee(u,u.return,D)}}}else if(t.tag===6){if(a===null){u=t;try{u.stateNode.nodeValue=i?"":u.memoizedProps}catch(D){ee(u,u.return,D)}}}else if(t.tag===18){if(a===null){u=t;try{var v=u.stateNode;i?Gd(v,!0):Gd(u.stateNode,!1)}catch(D){ee(u,u.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}n&4&&(n=e.updateQueue,n!==null&&(a=n.retryQueue,a!==null&&(n.retryQueue=null,fl(e,a))));break;case 19:Qe(t,e),Ze(e),n&4&&(n=e.updateQueue,n!==null&&(e.updateQueue=null,fl(e,n)));break;case 30:break;case 21:break;default:Qe(t,e),Ze(e)}}function Ze(e){var t=e.flags;if(t&2){try{for(var a,n=e.return;n!==null;){if(jr(n)){a=n;break}n=n.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var i=a.stateNode,l=go(e);dl(e,l,i);break;case 5:var s=a.stateNode;a.flags&32&&(Ka(s,""),a.flags&=-33);var o=go(e);dl(e,o,s);break;case 3:case 4:var u=a.stateNode.containerInfo,m=go(e);Ao(e,m,u);break;default:throw Error(h(161))}}catch(y){ee(e,e.return,y)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Xt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)Zr(e,t.alternate,t),t=t.sibling}function Ha(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:oa(4,t,t.return),Ha(t);break;case 1:Ct(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Gr(t,t.return,a),Ha(t);break;case 27:fi(t.stateNode);case 26:case 5:Ct(t,t.return),Ha(t);break;case 22:t.memoizedState===null&&Ha(t);break;case 30:Ha(t);break;default:Ha(t)}e=e.sibling}}function Qt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var n=t.alternate,i=e,l=t,s=l.flags;switch(l.tag){case 0:case 11:case 15:Qt(i,l,a),ai(4,l);break;case 1:if(Qt(i,l,a),n=l,i=n.stateNode,typeof i.componentDidMount=="function")try{i.componentDidMount()}catch(m){ee(n,n.return,m)}if(n=l,i=n.updateQueue,i!==null){var o=n.stateNode;try{var u=i.shared.hiddenCallbacks;if(u!==null)for(i.shared.hiddenCallbacks=null,i=0;i<u.length;i++)Rc(u[i],o)}catch(m){ee(n,n.return,m)}}a&&s&64&&Vr(l),ni(l,l.return);break;case 27:Xr(l);case 26:case 5:Qt(i,l,a),a&&n===null&&s&4&&Yr(l),ni(l,l.return);break;case 12:Qt(i,l,a);break;case 31:Qt(i,l,a),a&&s&4&&Jr(i,l);break;case 13:Qt(i,l,a),a&&s&4&&Ir(i,l);break;case 22:l.memoizedState===null&&Qt(i,l,a),ni(l,l.return);break;case 30:break;default:Qt(i,l,a)}t=t.sibling}}function bo(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Xn(a))}function Eo(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e))}function St(e,t,a,n){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Pr(e,t,a,n),t=t.sibling}function Pr(e,t,a,n){var i=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,n),i&2048&&ai(9,t);break;case 1:St(e,t,a,n);break;case 3:St(e,t,a,n),i&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Xn(e)));break;case 12:if(i&2048){St(e,t,a,n),e=t.stateNode;try{var l=t.memoizedProps,s=l.id,o=l.onPostCommit;typeof o=="function"&&o(s,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(u){ee(t,t.return,u)}}else St(e,t,a,n);break;case 31:St(e,t,a,n);break;case 13:St(e,t,a,n);break;case 23:break;case 22:l=t.stateNode,s=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,n):ii(e,t):l._visibility&2?St(e,t,a,n):(l._visibility|=2,pn(e,t,a,n,(t.subtreeFlags&10256)!==0||!1)),i&2048&&bo(s,t);break;case 24:St(e,t,a,n),i&2048&&Eo(t.alternate,t);break;default:St(e,t,a,n)}}function pn(e,t,a,n,i){for(i=i&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,s=t,o=a,u=n,m=s.flags;switch(s.tag){case 0:case 11:case 15:pn(l,s,o,u,i),ai(8,s);break;case 23:break;case 22:var y=s.stateNode;s.memoizedState!==null?y._visibility&2?pn(l,s,o,u,i):ii(l,s):(y._visibility|=2,pn(l,s,o,u,i)),i&&m&2048&&bo(s.alternate,s);break;case 24:pn(l,s,o,u,i),i&&m&2048&&Eo(s.alternate,s);break;default:pn(l,s,o,u,i)}t=t.sibling}}function ii(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,n=t,i=n.flags;switch(n.tag){case 22:ii(a,n),i&2048&&bo(n.alternate,n);break;case 24:ii(a,n),i&2048&&Eo(n.alternate,n);break;default:ii(a,n)}t=t.sibling}}var li=8192;function hn(e,t,a){if(e.subtreeFlags&li)for(e=e.child;e!==null;)$r(e,t,a),e=e.sibling}function $r(e,t,a){switch(e.tag){case 26:hn(e,t,a),e.flags&li&&e.memoizedState!==null&&qp(a,At,e.memoizedState,e.memoizedProps);break;case 5:hn(e,t,a);break;case 3:case 4:var n=At;At=Cl(e.stateNode.containerInfo),hn(e,t,a),At=n;break;case 22:e.memoizedState===null&&(n=e.alternate,n!==null&&n.memoizedState!==null?(n=li,li=16777216,hn(e,t,a),li=n):hn(e,t,a));break;default:hn(e,t,a)}}function ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function si(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Te=n,ad(n,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 0:case 11:case 15:si(e),e.flags&2048&&oa(9,e,e.return);break;case 3:si(e);break;case 12:si(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,ml(e)):si(e);break;default:si(e)}}function ml(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var n=t[a];Te=n,ad(n,e)}ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:oa(8,t,t.return),ml(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,ml(t));break;default:ml(t)}e=e.sibling}}function ad(e,t){for(;Te!==null;){var a=Te;switch(a.tag){case 0:case 11:case 15:oa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var n=a.memoizedState.cachePool.pool;n!=null&&n.refCount++}break;case 24:Xn(a.memoizedState.cache)}if(n=a.child,n!==null)n.return=a,Te=n;else e:for(a=e;Te!==null;){n=Te;var i=n.sibling,l=n.return;if(kr(n),n===a){Te=null;break e}if(i!==null){i.return=l,Te=i;break e}Te=l}}}var Wm={getCacheForType:function(e){var t=we(ge),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return we(ge).controller.signal}},Pm=typeof WeakMap=="function"?WeakMap:Map,I=0,se=null,G=null,j=0,$=0,nt=null,ua=!1,vn=!1,Mo=!1,Zt=0,me=0,ca=0,Va=0,To=0,it=0,yn=0,oi=null,ke=null,Do=!1,pl=0,nd=0,hl=1/0,vl=null,ra=null,Ee=0,da=null,gn=null,kt=0,Co=0,wo=null,id=null,ui=0,Ro=null;function lt(){return(I&2)!==0&&j!==0?j&-j:g.T!==null?Lo():Su()}function ld(){if(it===0)if((j&536870912)===0||Z){var e=Ti;Ti<<=1,(Ti&3932160)===0&&(Ti=262144),it=e}else it=536870912;return e=tt.current,e!==null&&(e.flags|=32),it}function Ke(e,t,a){(e===se&&($===2||$===9)||e.cancelPendingCommit!==null)&&(An(e,0),fa(e,j,it,!1)),On(e,a),((I&2)===0||e!==se)&&(e===se&&((I&2)===0&&(Va|=a),me===4&&fa(e,j,it,!1)),wt(e))}function sd(e,t,a){if((I&6)!==0)throw Error(h(327));var n=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Rn(e,t),i=n?tp(e,t):xo(e,t,!0),l=n;do{if(i===0){vn&&!n&&fa(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!$m(a)){i=xo(e,t,!1),l=!1;continue}if(i===2){if(l=t,e.errorRecoveryDisabledLanes&l)var s=0;else s=e.pendingLanes&-536870913,s=s!==0?s:s&536870912?536870912:0;if(s!==0){t=s;e:{var o=e;i=oi;var u=o.current.memoizedState.isDehydrated;if(u&&(An(o,s).flags|=256),s=xo(o,s,!1),s!==2){if(Mo&&!u){o.errorRecoveryDisabledLanes|=l,Va|=l,i=4;break e}l=ke,ke=i,l!==null&&(ke===null?ke=l:ke.push.apply(ke,l))}i=s}if(l=!1,i!==2)continue}}if(i===1){An(e,0),fa(e,t,0,!0);break}e:{switch(n=e,l=i,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:fa(n,t,it,!ua);break e;case 2:ke=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(i=pl+300-Fe(),10<i)){if(fa(n,t,it,!ua),Ci(n,0,!0)!==0)break e;kt=t,n.timeoutHandle=Bd(od.bind(null,n,a,ke,vl,Do,t,it,Va,yn,ua,l,"Throttled",-0,0),i);break e}od(n,a,ke,vl,Do,t,it,Va,yn,ua,l,null,-0,0)}}break}while(!0);wt(e)}function od(e,t,a,n,i,l,s,o,u,m,y,S,p,v){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:zt},$r(t,l,S);var D=(l&62914560)===l?pl-Fe():(l&4194048)===l?nd-Fe():0;if(D=Bp(S,D),D!==null){kt=l,e.cancelPendingCommit=D(hd.bind(null,e,t,l,a,n,i,s,o,u,y,S,null,p,v)),fa(e,l,s,!m);return}}hd(e,t,l,a,n,i,s,o,u)}function $m(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var n=0;n<a.length;n++){var i=a[n],l=i.getSnapshot;i=i.value;try{if(!$e(l(),i))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,a,n){t&=~To,t&=~Va,e.suspendedLanes|=t,e.pingedLanes&=~t,n&&(e.warmLanes|=t),n=e.expirationTimes;for(var i=t;0<i;){var l=31-Pe(i),s=1<<l;n[l]=-1,i&=~s}a!==0&&yu(e,a,t)}function yl(){return(I&6)===0?(ci(0),!1):!0}function Oo(){if(G!==null){if($===0)var e=G.return;else e=G,Nt=xa=null,Qs(e),cn=null,Zn=0,e=G;for(;e!==null;)Hr(e.alternate,e),e=e.return;G=null}}function An(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Ap(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),kt=0,Oo(),se=e,G=a=_t(e.current,null),j=t,$=0,nt=null,ua=!1,vn=Rn(e,t),Mo=!1,yn=it=To=Va=ca=me=0,ke=oi=null,Do=!1,(t&8)!==0&&(t|=t&32);var n=e.entangledLanes;if(n!==0)for(e=e.entanglements,n&=t;0<n;){var i=31-Pe(n),l=1<<i;t|=e[i],n&=~l}return Zt=t,Hi(),a}function ud(e,t){B=null,g.H=$n,t===un||t===ki?(t=Tc(),$=3):t===Us?(t=Tc(),$=4):$=t===so?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,nt=t,G===null&&(me=1,sl(e,rt(t,e.current)))}function cd(){var e=tt.current;return e===null?!0:(j&4194048)===j?pt===null:(j&62914560)===j||(j&536870912)!==0?e===pt:!1}function rd(){var e=g.H;return g.H=$n,e===null?$n:e}function dd(){var e=g.A;return g.A=Wm,e}function gl(){me=4,ua||(j&4194048)!==j&&tt.current!==null||(vn=!0),(ca&134217727)===0&&(Va&134217727)===0||se===null||fa(se,j,it,!1)}function xo(e,t,a){var n=I;I|=2;var i=rd(),l=dd();(se!==e||j!==t)&&(vl=null,An(e,t)),t=!1;var s=me;e:do try{if($!==0&&G!==null){var o=G,u=nt;switch($){case 8:Oo(),s=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var m=$;if($=0,nt=null,Sn(e,o,u,m),a&&vn){s=0;break e}break;default:m=$,$=0,nt=null,Sn(e,o,u,m)}}ep(),s=me;break}catch(y){ud(e,y)}while(!0);return t&&e.shellSuspendCounter++,Nt=xa=null,I=n,g.H=i,g.A=l,G===null&&(se=null,j=0,Hi()),s}function ep(){for(;G!==null;)fd(G)}function tp(e,t){var a=I;I|=2;var n=rd(),i=dd();se!==e||j!==t?(vl=null,hl=Fe()+500,An(e,t)):vn=Rn(e,t);e:do try{if($!==0&&G!==null){t=G;var l=nt;t:switch($){case 1:$=0,nt=null,Sn(e,t,l,1);break;case 2:case 9:if(Ec(l)){$=0,nt=null,md(t);break}t=function(){$!==2&&$!==9||se!==e||($=7),wt(e)},l.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Ec(l)?($=0,nt=null,md(t)):($=0,nt=null,Sn(e,t,l,7));break;case 5:var s=null;switch(G.tag){case 26:s=G.memoizedState;case 5:case 27:var o=G;if(s?Pd(s):o.stateNode.complete){$=0,nt=null;var u=o.sibling;if(u!==null)G=u;else{var m=o.return;m!==null?(G=m,Al(m)):G=null}break t}}$=0,nt=null,Sn(e,t,l,5);break;case 6:$=0,nt=null,Sn(e,t,l,6);break;case 8:Oo(),me=6;break e;default:throw Error(h(462))}}ap();break}catch(y){ud(e,y)}while(!0);return Nt=xa=null,g.H=n,g.A=i,I=a,G!==null?0:(se=null,j=0,Hi(),me)}function ap(){for(;G!==null&&!Df();)fd(G)}function fd(e){var t=qr(e.alternate,e,Zt);e.memoizedProps=e.pendingProps,t===null?Al(e):G=t}function md(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=xr(a,t,t.pendingProps,t.type,void 0,j);break;case 11:t=xr(a,t,t.pendingProps,t.type.render,t.ref,j);break;case 5:Qs(t);default:Hr(a,t),t=G=dc(t,Zt),t=qr(a,t,Zt)}e.memoizedProps=e.pendingProps,t===null?Al(e):G=t}function Sn(e,t,a,n){Nt=xa=null,Qs(t),cn=null,Zn=0;var i=t.return;try{if(Qm(e,i,t,a,j)){me=1,sl(e,rt(a,e.current)),G=null;return}}catch(l){if(i!==null)throw G=i,l;me=1,sl(e,rt(a,e.current)),G=null;return}t.flags&32768?(Z||n===1?e=!0:vn||(j&536870912)!==0?e=!1:(ua=e=!0,(n===2||n===9||n===3||n===6)&&(n=tt.current,n!==null&&n.tag===13&&(n.flags|=16384))),pd(t,e)):Al(t)}function Al(e){var t=e;do{if((t.flags&32768)!==0){pd(t,ua);return}e=t.return;var a=Km(t.alternate,t,Zt);if(a!==null){G=a;return}if(t=t.sibling,t!==null){G=t;return}G=t=e}while(t!==null);me===0&&(me=5)}function pd(e,t){do{var a=Jm(e.alternate,e);if(a!==null){a.flags&=32767,G=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){G=e;return}G=e=a}while(e!==null);me=6,G=null}function hd(e,t,a,n,i,l,s,o,u){e.cancelPendingCommit=null;do Sl();while(Ee!==0);if((I&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=ys,Nf(e,a,l,s,o,u),e===se&&(G=se=null,j=0),gn=t,da=e,kt=a,Co=l,wo=i,id=n,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,sp(Ei,function(){return Sd(),null})):(e.callbackNode=null,e.callbackPriority=0),n=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||n){n=g.T,g.T=null,i=M.p,M.p=2,s=I,I|=4;try{Im(e,t,a)}finally{I=s,M.p=i,g.T=n}}Ee=1,vd(),yd(),gd()}}function vd(){if(Ee===1){Ee=0;var e=da,t=gn,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=g.T,g.T=null;var n=M.p;M.p=2;var i=I;I|=4;try{Fr(t,e);var l=jo,s=ac(e.containerInfo),o=l.focusedElem,u=l.selectionRange;if(s!==o&&o&&o.ownerDocument&&tc(o.ownerDocument.documentElement,o)){if(u!==null&&fs(o)){var m=u.start,y=u.end;if(y===void 0&&(y=m),"selectionStart"in o)o.selectionStart=m,o.selectionEnd=Math.min(y,o.value.length);else{var S=o.ownerDocument||document,p=S&&S.defaultView||window;if(p.getSelection){var v=p.getSelection(),D=o.textContent.length,z=Math.min(u.start,D),ie=u.end===void 0?z:Math.min(u.end,D);!v.extend&&z>ie&&(s=ie,ie=z,z=s);var d=ec(o,z),c=ec(o,ie);if(d&&c&&(v.rangeCount!==1||v.anchorNode!==d.node||v.anchorOffset!==d.offset||v.focusNode!==c.node||v.focusOffset!==c.offset)){var f=S.createRange();f.setStart(d.node,d.offset),v.removeAllRanges(),z>ie?(v.addRange(f),v.extend(c.node,c.offset)):(f.setEnd(c.node,c.offset),v.addRange(f))}}}}for(S=[],v=o;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<S.length;o++){var A=S[o];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Ul=!!Yo,jo=Yo=null}finally{I=i,M.p=n,g.T=a}}e.current=t,Ee=2}}function yd(){if(Ee===2){Ee=0;var e=da,t=gn,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=g.T,g.T=null;var n=M.p;M.p=2;var i=I;I|=4;try{Zr(e,t.alternate,t)}finally{I=i,M.p=n,g.T=a}}Ee=3}}function gd(){if(Ee===4||Ee===3){Ee=0,Cf();var e=da,t=gn,a=kt,n=id;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Ee=5:(Ee=0,gn=da=null,Ad(e,e.pendingLanes));var i=e.pendingLanes;if(i===0&&(ra=null),Kl(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(wn,t,void 0,(t.current.flags&128)===128)}catch{}if(n!==null){t=g.T,i=M.p,M.p=2,g.T=null;try{for(var l=e.onRecoverableError,s=0;s<n.length;s++){var o=n[s];l(o.value,{componentStack:o.stack})}}finally{g.T=t,M.p=i}}(kt&3)!==0&&Sl(),wt(e),i=e.pendingLanes,(a&261930)!==0&&(i&42)!==0?e===Ro?ui++:(ui=0,Ro=e):ui=0,ci(0)}}function Ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Xn(t)))}function Sl(){return vd(),yd(),gd(),Sd()}function Sd(){if(Ee!==5)return!1;var e=da,t=Co;Co=0;var a=Kl(kt),n=g.T,i=M.p;try{M.p=32>a?32:a,g.T=null,a=wo,wo=null;var l=da,s=kt;if(Ee=0,gn=da=null,kt=0,(I&6)!==0)throw Error(h(331));var o=I;if(I|=4,td(l.current),Pr(l,l.current,s,a),I=o,ci(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(wn,l)}catch{}return!0}finally{M.p=i,g.T=n,Ad(e,t)}}function bd(e,t,a){t=rt(a,t),t=lo(e.stateNode,t,2),e=ia(e,t,2),e!==null&&(On(e,2),wt(e))}function ee(e,t,a){if(e.tag===3)bd(e,e,a);else for(;t!==null;){if(t.tag===3){bd(t,e,a);break}else if(t.tag===1){var n=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof n.componentDidCatch=="function"&&(ra===null||!ra.has(n))){e=rt(a,e),a=Er(2),n=ia(t,a,2),n!==null&&(Mr(a,n,t,e),On(n,2),wt(n));break}}t=t.return}}function zo(e,t,a){var n=e.pingCache;if(n===null){n=e.pingCache=new Pm;var i=new Set;n.set(t,i)}else i=n.get(t),i===void 0&&(i=new Set,n.set(t,i));i.has(a)||(Mo=!0,i.add(a),e=np.bind(null,e,t,a),t.then(e,e))}function np(e,t,a){var n=e.pingCache;n!==null&&n.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,se===e&&(j&a)===a&&(me===4||me===3&&(j&62914560)===j&&300>Fe()-pl?(I&2)===0&&An(e,0):To|=a,yn===j&&(yn=0)),wt(e)}function Ed(e,t){t===0&&(t=vu()),e=wa(e,t),e!==null&&(On(e,t),wt(e))}function ip(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Ed(e,a)}function lp(e,t){var a=0;switch(e.tag){case 31:case 13:var n=e.stateNode,i=e.memoizedState;i!==null&&(a=i.retryLane);break;case 19:n=e.stateNode;break;case 22:n=e.stateNode._retryCache;break;default:throw Error(h(314))}n!==null&&n.delete(t),Ed(e,a)}function sp(e,t){return Xl(e,t)}var bl=null,bn=null,Uo=!1,El=!1,_o=!1,ma=0;function wt(e){e!==bn&&e.next===null&&(bn===null?bl=bn=e:bn=bn.next=e),El=!0,Uo||(Uo=!0,up())}function ci(e,t){if(!_o&&El){_o=!0;do for(var a=!1,n=bl;n!==null;){if(e!==0){var i=n.pendingLanes;if(i===0)var l=0;else{var s=n.suspendedLanes,o=n.pingedLanes;l=(1<<31-Pe(42|e)+1)-1,l&=i&~(s&~o),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,Cd(n,l))}else l=j,l=Ci(n,n===se?l:0,n.cancelPendingCommit!==null||n.timeoutHandle!==-1),(l&3)===0||Rn(n,l)||(a=!0,Cd(n,l));n=n.next}while(a);_o=!1}}function op(){Md()}function Md(){El=Uo=!1;var e=0;ma!==0&&gp()&&(e=ma);for(var t=Fe(),a=null,n=bl;n!==null;){var i=n.next,l=Td(n,t);l===0?(n.next=null,a===null?bl=i:a.next=i,i===null&&(bn=a)):(a=n,(e!==0||(l&3)!==0)&&(El=!0)),n=i}Ee!==0&&Ee!==5||ci(e),ma!==0&&(ma=0)}function Td(e,t){for(var a=e.suspendedLanes,n=e.pingedLanes,i=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var s=31-Pe(l),o=1<<s,u=i[s];u===-1?((o&a)===0||(o&n)!==0)&&(i[s]=Lf(o,t)):u<=t&&(e.expiredLanes|=o),l&=~o}if(t=se,a=j,a=Ci(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return n!==null&&n!==null&&Ql(n),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Rn(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(n!==null&&Ql(n),Kl(a)){case 2:case 8:a=pu;break;case 32:a=Ei;break;case 268435456:a=hu;break;default:a=Ei}return n=Dd.bind(null,e),a=Xl(a,n),e.callbackPriority=t,e.callbackNode=a,t}return n!==null&&n!==null&&Ql(n),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(Ee!==0&&Ee!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sl()&&e.callbackNode!==a)return null;var n=j;return n=Ci(e,e===se?n:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),n===0?null:(sd(e,n,t),Td(e,Fe()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function Cd(e,t){if(Sl())return null;sd(e,t,!0)}function up(){Sp(function(){(I&6)!==0?Xl(mu,op):Md()})}function Lo(){if(ma===0){var e=sn;e===0&&(e=Mi,Mi<<=1,(Mi&261888)===0&&(Mi=256)),ma=e}return ma}function wd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:xi(""+e)}function Rd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function cp(e,t,a,n,i){if(t==="submit"&&a&&a.stateNode===i){var l=wd((i[Ye]||null).action),s=n.submitter;s&&(t=(t=s[Ye]||null)?wd(t.formAction):s.getAttribute("formAction"),t!==null&&(l=t,s=null));var o=new Li("action","action",null,n,i);e.push({event:o,listeners:[{instance:null,listener:function(){if(n.defaultPrevented){if(ma!==0){var u=s?Rd(i,s):new FormData(i);$s(a,{pending:!0,data:u,method:i.method,action:l},null,u)}}else typeof l=="function"&&(o.preventDefault(),u=s?Rd(i,s):new FormData(i),$s(a,{pending:!0,data:u,method:i.method,action:l},l,u))},currentTarget:i}]})}}for(var No=0;No<vs.length;No++){var qo=vs[No],rp=qo.toLowerCase(),dp=qo[0].toUpperCase()+qo.slice(1);gt(rp,"on"+dp)}gt(lc,"onAnimationEnd"),gt(sc,"onAnimationIteration"),gt(oc,"onAnimationStart"),gt("dblclick","onDoubleClick"),gt("focusin","onFocus"),gt("focusout","onBlur"),gt(wm,"onTransitionRun"),gt(Rm,"onTransitionStart"),gt(Om,"onTransitionCancel"),gt(uc,"onTransitionEnd"),Za("onMouseEnter",["mouseout","mouseover"]),Za("onMouseLeave",["mouseout","mouseover"]),Za("onPointerEnter",["pointerout","pointerover"]),Za("onPointerLeave",["pointerout","pointerover"]),Ma("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ma("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ma("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ma("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ma("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ri="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fp=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ri));function Od(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var n=e[a],i=n.event;n=n.listeners;e:{var l=void 0;if(t)for(var s=n.length-1;0<=s;s--){var o=n[s],u=o.instance,m=o.currentTarget;if(o=o.listener,u!==l&&i.isPropagationStopped())break e;l=o,i.currentTarget=m;try{l(i)}catch(y){Bi(y)}i.currentTarget=null,l=u}else for(s=0;s<n.length;s++){if(o=n[s],u=o.instance,m=o.currentTarget,o=o.listener,u!==l&&i.isPropagationStopped())break e;l=o,i.currentTarget=m;try{l(i)}catch(y){Bi(y)}i.currentTarget=null,l=u}}}}function Y(e,t){var a=t[Jl];a===void 0&&(a=t[Jl]=new Set);var n=e+"__bubble";a.has(n)||(xd(t,e,2,!1),a.add(n))}function Bo(e,t,a){var n=0;t&&(n|=4),xd(a,e,n,t)}var Ml="_reactListening"+Math.random().toString(36).slice(2);function Ho(e){if(!e[Ml]){e[Ml]=!0,Mu.forEach(function(a){a!=="selectionchange"&&(fp.has(a)||Bo(a,!1,e),Bo(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Ml]||(t[Ml]=!0,Bo("selectionchange",!1,t))}}function xd(e,t,a,n){switch(sf(t)){case 2:var i=Gp;break;case 8:i=Yp;break;default:i=$o}a=i.bind(null,t,a,e),i=void 0,!ns||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),n?i!==void 0?e.addEventListener(t,a,{capture:!0,passive:i}):e.addEventListener(t,a,!0):i!==void 0?e.addEventListener(t,a,{passive:i}):e.addEventListener(t,a,!1)}function Vo(e,t,a,n,i){var l=n;if((t&1)===0&&(t&2)===0&&n!==null)e:for(;;){if(n===null)return;var s=n.tag;if(s===3||s===4){var o=n.stateNode.containerInfo;if(o===i)break;if(s===4)for(s=n.return;s!==null;){var u=s.tag;if((u===3||u===4)&&s.stateNode.containerInfo===i)return;s=s.return}for(;o!==null;){if(s=ja(o),s===null)return;if(u=s.tag,u===5||u===6||u===26||u===27){n=l=s;continue e}o=o.parentNode}}n=n.return}Nu(function(){var m=l,y=ts(a),S=[];e:{var p=cc.get(e);if(p!==void 0){var v=Li,D=e;switch(e){case"keypress":if(Ui(a)===0)break e;case"keydown":case"keyup":v=lm;break;case"focusin":D="focus",v=os;break;case"focusout":D="blur",v=os;break;case"beforeblur":case"afterblur":v=os;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":v=Hu;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":v=Kf;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":v=um;break;case lc:case sc:case oc:v=Ff;break;case uc:v=rm;break;case"scroll":case"scrollend":v=Zf;break;case"wheel":v=fm;break;case"copy":case"cut":case"paste":v=Pf;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":v=Gu;break;case"toggle":case"beforetoggle":v=pm}var z=(t&4)!==0,ie=!z&&(e==="scroll"||e==="scrollend"),d=z?p!==null?p+"Capture":null:p;z=[];for(var c=m,f;c!==null;){var A=c;if(f=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||f===null||d===null||(A=Un(c,d),A!=null&&z.push(di(c,A,f))),ie)break;c=c.return}0<z.length&&(p=new v(p,D,null,a,y),S.push({event:p,listeners:z}))}}if((t&7)===0){e:{if(p=e==="mouseover"||e==="pointerover",v=e==="mouseout"||e==="pointerout",p&&a!==es&&(D=a.relatedTarget||a.fromElement)&&(ja(D)||D[Ya]))break e;if((v||p)&&(p=y.window===y?y:(p=y.ownerDocument)?p.defaultView||p.parentWindow:window,v?(D=a.relatedTarget||a.toElement,v=m,D=D?ja(D):null,D!==null&&(ie=J(D),z=D.tag,D!==ie||z!==5&&z!==27&&z!==6)&&(D=null)):(v=null,D=m),v!==D)){if(z=Hu,A="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(z=Gu,A="onPointerLeave",d="onPointerEnter",c="pointer"),ie=v==null?p:zn(v),f=D==null?p:zn(D),p=new z(A,c+"leave",v,a,y),p.target=ie,p.relatedTarget=f,A=null,ja(y)===m&&(z=new z(d,c+"enter",D,a,y),z.target=f,z.relatedTarget=ie,A=z),ie=A,v&&D)t:{for(z=mp,d=v,c=D,f=0,A=d;A;A=z(A))f++;A=0;for(var O=c;O;O=z(O))A++;for(;0<f-A;)d=z(d),f--;for(;0<A-f;)c=z(c),A--;for(;f--;){if(d===c||c!==null&&d===c.alternate){z=d;break t}d=z(d),c=z(c)}z=null}else z=null;v!==null&&zd(S,p,v,z,!1),D!==null&&ie!==null&&zd(S,ie,D,z,!0)}}e:{if(p=m?zn(m):window,v=p.nodeName&&p.nodeName.toLowerCase(),v==="select"||v==="input"&&p.type==="file")var k=Ju;else if(ku(p))if(Iu)k=Tm;else{k=Em;var R=bm}else v=p.nodeName,!v||v.toLowerCase()!=="input"||p.type!=="checkbox"&&p.type!=="radio"?m&&$l(m.elementType)&&(k=Ju):k=Mm;if(k&&(k=k(e,m))){Ku(S,k,a,y);break e}R&&R(e,p,m),e==="focusout"&&m&&p.type==="number"&&m.memoizedProps.value!=null&&Pl(p,"number",p.value)}switch(R=m?zn(m):window,e){case"focusin":(ku(R)||R.contentEditable==="true")&&(Wa=R,ms=m,Gn=null);break;case"focusout":Gn=ms=Wa=null;break;case"mousedown":ps=!0;break;case"contextmenu":case"mouseup":case"dragend":ps=!1,nc(S,a,y);break;case"selectionchange":if(Cm)break;case"keydown":case"keyup":nc(S,a,y)}var H;if(cs)e:{switch(e){case"compositionstart":var X="onCompositionStart";break e;case"compositionend":X="onCompositionEnd";break e;case"compositionupdate":X="onCompositionUpdate";break e}X=void 0}else Fa?Qu(e,a)&&(X="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(X="onCompositionStart");X&&(Yu&&a.locale!=="ko"&&(Fa||X!=="onCompositionStart"?X==="onCompositionEnd"&&Fa&&(H=qu()):(Wt=y,is="value"in Wt?Wt.value:Wt.textContent,Fa=!0)),R=Tl(m,X),0<R.length&&(X=new Vu(X,e,null,a,y),S.push({event:X,listeners:R}),H?X.data=H:(H=Zu(a),H!==null&&(X.data=H)))),(H=vm?ym(e,a):gm(e,a))&&(X=Tl(m,"onBeforeInput"),0<X.length&&(R=new Vu("onBeforeInput","beforeinput",null,a,y),S.push({event:R,listeners:X}),R.data=H)),cp(S,e,m,a,y)}Od(S,t)})}function di(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tl(e,t){for(var a=t+"Capture",n=[];e!==null;){var i=e,l=i.stateNode;if(i=i.tag,i!==5&&i!==26&&i!==27||l===null||(i=Un(e,a),i!=null&&n.unshift(di(e,i,l)),i=Un(e,t),i!=null&&n.push(di(e,i,l))),e.tag===3)return n;e=e.return}return[]}function mp(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function zd(e,t,a,n,i){for(var l=t._reactName,s=[];a!==null&&a!==n;){var o=a,u=o.alternate,m=o.stateNode;if(o=o.tag,u!==null&&u===n)break;o!==5&&o!==26&&o!==27||m===null||(u=m,i?(m=Un(a,l),m!=null&&s.unshift(di(a,m,u))):i||(m=Un(a,l),m!=null&&s.push(di(a,m,u)))),a=a.return}s.length!==0&&e.push({event:t,listeners:s})}var pp=/\r\n?/g,hp=/\u0000|\uFFFD/g;function Ud(e){return(typeof e=="string"?e:""+e).replace(pp,`
`).replace(hp,"")}function _d(e,t){return t=Ud(t),Ud(e)===t}function ne(e,t,a,n,i,l){switch(a){case"children":typeof n=="string"?t==="body"||t==="textarea"&&n===""||Ka(e,n):(typeof n=="number"||typeof n=="bigint")&&t!=="body"&&Ka(e,""+n);break;case"className":Ri(e,"class",n);break;case"tabIndex":Ri(e,"tabindex",n);break;case"dir":case"role":case"viewBox":case"width":case"height":Ri(e,a,n);break;case"style":_u(e,n,l);break;case"data":if(t!=="object"){Ri(e,"data",n);break}case"src":case"href":if(n===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(n==null||typeof n=="function"||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=xi(""+n),e.setAttribute(a,n);break;case"action":case"formAction":if(typeof n=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ne(e,t,"name",i.name,i,null),ne(e,t,"formEncType",i.formEncType,i,null),ne(e,t,"formMethod",i.formMethod,i,null),ne(e,t,"formTarget",i.formTarget,i,null)):(ne(e,t,"encType",i.encType,i,null),ne(e,t,"method",i.method,i,null),ne(e,t,"target",i.target,i,null)));if(n==null||typeof n=="symbol"||typeof n=="boolean"){e.removeAttribute(a);break}n=xi(""+n),e.setAttribute(a,n);break;case"onClick":n!=null&&(e.onclick=zt);break;case"onScroll":n!=null&&Y("scroll",e);break;case"onScrollEnd":n!=null&&Y("scrollend",e);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=n&&typeof n!="function"&&typeof n!="symbol";break;case"muted":e.muted=n&&typeof n!="function"&&typeof n!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(n==null||typeof n=="function"||typeof n=="boolean"||typeof n=="symbol"){e.removeAttribute("xlink:href");break}a=xi(""+n),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""+n):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":n&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":n===!0?e.setAttribute(a,""):n!==!1&&n!=null&&typeof n!="function"&&typeof n!="symbol"?e.setAttribute(a,n):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":n!=null&&typeof n!="function"&&typeof n!="symbol"&&!isNaN(n)&&1<=n?e.setAttribute(a,n):e.removeAttribute(a);break;case"rowSpan":case"start":n==null||typeof n=="function"||typeof n=="symbol"||isNaN(n)?e.removeAttribute(a):e.setAttribute(a,n);break;case"popover":Y("beforetoggle",e),Y("toggle",e),wi(e,"popover",n);break;case"xlinkActuate":xt(e,"http://www.w3.org/1999/xlink","xlink:actuate",n);break;case"xlinkArcrole":xt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",n);break;case"xlinkRole":xt(e,"http://www.w3.org/1999/xlink","xlink:role",n);break;case"xlinkShow":xt(e,"http://www.w3.org/1999/xlink","xlink:show",n);break;case"xlinkTitle":xt(e,"http://www.w3.org/1999/xlink","xlink:title",n);break;case"xlinkType":xt(e,"http://www.w3.org/1999/xlink","xlink:type",n);break;case"xmlBase":xt(e,"http://www.w3.org/XML/1998/namespace","xml:base",n);break;case"xmlLang":xt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",n);break;case"xmlSpace":xt(e,"http://www.w3.org/XML/1998/namespace","xml:space",n);break;case"is":wi(e,"is",n);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Xf.get(a)||a,wi(e,a,n))}}function Go(e,t,a,n,i,l){switch(a){case"style":_u(e,n,l);break;case"dangerouslySetInnerHTML":if(n!=null){if(typeof n!="object"||!("__html"in n))throw Error(h(61));if(a=n.__html,a!=null){if(i.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof n=="string"?Ka(e,n):(typeof n=="number"||typeof n=="bigint")&&Ka(e,""+n);break;case"onScroll":n!=null&&Y("scroll",e);break;case"onScrollEnd":n!=null&&Y("scrollend",e);break;case"onClick":n!=null&&(e.onclick=zt);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tu.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(i=a.endsWith("Capture"),t=a.slice(2,i?a.length-7:void 0),l=e[Ye]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,i),typeof n=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,n,i);break e}a in e?e[a]=n:n===!0?e.setAttribute(a,""):wi(e,a,n)}}}function Oe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Y("error",e),Y("load",e);var n=!1,i=!1,l;for(l in a)if(a.hasOwnProperty(l)){var s=a[l];if(s!=null)switch(l){case"src":n=!0;break;case"srcSet":i=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ne(e,t,l,s,a,null)}}i&&ne(e,t,"srcSet",a.srcSet,a,null),n&&ne(e,t,"src",a.src,a,null);return;case"input":Y("invalid",e);var o=l=s=i=null,u=null,m=null;for(n in a)if(a.hasOwnProperty(n)){var y=a[n];if(y!=null)switch(n){case"name":i=y;break;case"type":s=y;break;case"checked":u=y;break;case"defaultChecked":m=y;break;case"value":l=y;break;case"defaultValue":o=y;break;case"children":case"dangerouslySetInnerHTML":if(y!=null)throw Error(h(137,t));break;default:ne(e,t,n,y,a,null)}}Ou(e,l,o,u,m,s,i,!1);return;case"select":Y("invalid",e),n=s=l=null;for(i in a)if(a.hasOwnProperty(i)&&(o=a[i],o!=null))switch(i){case"value":l=o;break;case"defaultValue":s=o;break;case"multiple":n=o;default:ne(e,t,i,o,a,null)}t=l,a=s,e.multiple=!!n,t!=null?ka(e,!!n,t,!1):a!=null&&ka(e,!!n,a,!0);return;case"textarea":Y("invalid",e),l=i=n=null;for(s in a)if(a.hasOwnProperty(s)&&(o=a[s],o!=null))switch(s){case"value":n=o;break;case"defaultValue":i=o;break;case"children":l=o;break;case"dangerouslySetInnerHTML":if(o!=null)throw Error(h(91));break;default:ne(e,t,s,o,a,null)}zu(e,n,i,l);return;case"option":for(u in a)if(a.hasOwnProperty(u)&&(n=a[u],n!=null))switch(u){case"selected":e.selected=n&&typeof n!="function"&&typeof n!="symbol";break;default:ne(e,t,u,n,a,null)}return;case"dialog":Y("beforetoggle",e),Y("toggle",e),Y("cancel",e),Y("close",e);break;case"iframe":case"object":Y("load",e);break;case"video":case"audio":for(n=0;n<ri.length;n++)Y(ri[n],e);break;case"image":Y("error",e),Y("load",e);break;case"details":Y("toggle",e);break;case"embed":case"source":case"link":Y("error",e),Y("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(m in a)if(a.hasOwnProperty(m)&&(n=a[m],n!=null))switch(m){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ne(e,t,m,n,a,null)}return;default:if($l(t)){for(y in a)a.hasOwnProperty(y)&&(n=a[y],n!==void 0&&Go(e,t,y,n,a,void 0));return}}for(o in a)a.hasOwnProperty(o)&&(n=a[o],n!=null&&ne(e,t,o,n,a,null))}function vp(e,t,a,n){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var i=null,l=null,s=null,o=null,u=null,m=null,y=null;for(v in a){var S=a[v];if(a.hasOwnProperty(v)&&S!=null)switch(v){case"checked":break;case"value":break;case"defaultValue":u=S;default:n.hasOwnProperty(v)||ne(e,t,v,null,n,S)}}for(var p in n){var v=n[p];if(S=a[p],n.hasOwnProperty(p)&&(v!=null||S!=null))switch(p){case"type":l=v;break;case"name":i=v;break;case"checked":m=v;break;case"defaultChecked":y=v;break;case"value":s=v;break;case"defaultValue":o=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:v!==S&&ne(e,t,p,v,n,S)}}Wl(e,s,o,u,m,y,l,i);return;case"select":v=s=o=p=null;for(l in a)if(u=a[l],a.hasOwnProperty(l)&&u!=null)switch(l){case"value":break;case"multiple":v=u;default:n.hasOwnProperty(l)||ne(e,t,l,null,n,u)}for(i in n)if(l=n[i],u=a[i],n.hasOwnProperty(i)&&(l!=null||u!=null))switch(i){case"value":p=l;break;case"defaultValue":o=l;break;case"multiple":s=l;default:l!==u&&ne(e,t,i,l,n,u)}t=o,a=s,n=v,p!=null?ka(e,!!a,p,!1):!!n!=!!a&&(t!=null?ka(e,!!a,t,!0):ka(e,!!a,a?[]:"",!1));return;case"textarea":v=p=null;for(o in a)if(i=a[o],a.hasOwnProperty(o)&&i!=null&&!n.hasOwnProperty(o))switch(o){case"value":break;case"children":break;default:ne(e,t,o,null,n,i)}for(s in n)if(i=n[s],l=a[s],n.hasOwnProperty(s)&&(i!=null||l!=null))switch(s){case"value":p=i;break;case"defaultValue":v=i;break;case"children":break;case"dangerouslySetInnerHTML":if(i!=null)throw Error(h(91));break;default:i!==l&&ne(e,t,s,i,n,l)}xu(e,p,v);return;case"option":for(var D in a)if(p=a[D],a.hasOwnProperty(D)&&p!=null&&!n.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:ne(e,t,D,null,n,p)}for(u in n)if(p=n[u],v=a[u],n.hasOwnProperty(u)&&p!==v&&(p!=null||v!=null))switch(u){case"selected":e.selected=p&&typeof p!="function"&&typeof p!="symbol";break;default:ne(e,t,u,p,n,v)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var z in a)p=a[z],a.hasOwnProperty(z)&&p!=null&&!n.hasOwnProperty(z)&&ne(e,t,z,null,n,p);for(m in n)if(p=n[m],v=a[m],n.hasOwnProperty(m)&&p!==v&&(p!=null||v!=null))switch(m){case"children":case"dangerouslySetInnerHTML":if(p!=null)throw Error(h(137,t));break;default:ne(e,t,m,p,n,v)}return;default:if($l(t)){for(var ie in a)p=a[ie],a.hasOwnProperty(ie)&&p!==void 0&&!n.hasOwnProperty(ie)&&Go(e,t,ie,void 0,n,p);for(y in n)p=n[y],v=a[y],!n.hasOwnProperty(y)||p===v||p===void 0&&v===void 0||Go(e,t,y,p,n,v);return}}for(var d in a)p=a[d],a.hasOwnProperty(d)&&p!=null&&!n.hasOwnProperty(d)&&ne(e,t,d,null,n,p);for(S in n)p=n[S],v=a[S],!n.hasOwnProperty(S)||p===v||p==null&&v==null||ne(e,t,S,p,n,v)}function Ld(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function yp(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),n=0;n<a.length;n++){var i=a[n],l=i.transferSize,s=i.initiatorType,o=i.duration;if(l&&o&&Ld(s)){for(s=0,o=i.responseEnd,n+=1;n<a.length;n++){var u=a[n],m=u.startTime;if(m>o)break;var y=u.transferSize,S=u.initiatorType;y&&Ld(S)&&(u=u.responseEnd,s+=y*(u<o?1:(o-m)/(u-m)))}if(--n,t+=8*(l+s)/(i.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Yo=null,jo=null;function Dl(e){return e.nodeType===9?e:e.ownerDocument}function Nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function qd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Xo(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Qo=null;function gp(){var e=window.event;return e&&e.type==="popstate"?e===Qo?!1:(Qo=e,!0):(Qo=null,!1)}var Bd=typeof setTimeout=="function"?setTimeout:void 0,Ap=typeof clearTimeout=="function"?clearTimeout:void 0,Hd=typeof Promise=="function"?Promise:void 0,Sp=typeof queueMicrotask=="function"?queueMicrotask:typeof Hd<"u"?function(e){return Hd.resolve(null).then(e).catch(bp)}:Bd;function bp(e){setTimeout(function(){throw e})}function pa(e){return e==="head"}function Vd(e,t){var a=t,n=0;do{var i=a.nextSibling;if(e.removeChild(a),i&&i.nodeType===8)if(a=i.data,a==="/$"||a==="/&"){if(n===0){e.removeChild(i),Dn(t);return}n--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")n++;else if(a==="html")fi(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,fi(a);for(var l=a.firstChild;l;){var s=l.nextSibling,o=l.nodeName;l[xn]||o==="SCRIPT"||o==="STYLE"||o==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=s}}else a==="body"&&fi(e.ownerDocument.body);a=i}while(a);Dn(t)}function Gd(e,t){var a=e;e=0;do{var n=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),n&&n.nodeType===8)if(a=n.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=n}while(a)}function Zo(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":Zo(a),Il(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Ep(e,t,a,n){for(;e.nodeType===1;){var i=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!n&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(n){if(!e[xn])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==i.rel||e.getAttribute("href")!==(i.href==null||i.href===""?null:i.href)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin)||e.getAttribute("title")!==(i.title==null?null:i.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(i.src==null?null:i.src)||e.getAttribute("type")!==(i.type==null?null:i.type)||e.getAttribute("crossorigin")!==(i.crossOrigin==null?null:i.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=i.name==null?null:""+i.name;if(i.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function Mp(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function Yd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function ko(e){return e.data==="$?"||e.data==="$~"}function Ko(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tp(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var n=function(){t(),a.removeEventListener("DOMContentLoaded",n)};a.addEventListener("DOMContentLoaded",n),e._reactRetry=n}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Jo=null;function jd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Xd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Qd(e,t,a){switch(t=Dl(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function fi(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Il(e)}var vt=new Map,Zd=new Set;function Cl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var Kt=M.d;M.d={f:Dp,r:Cp,D:wp,C:Rp,L:Op,m:xp,X:Up,S:zp,M:_p};function Dp(){var e=Kt.f(),t=yl();return e||t}function Cp(e){var t=Xa(e);t!==null&&t.tag===5&&t.type==="form"?ur(t):Kt.r(e)}var En=typeof document>"u"?null:document;function kd(e,t,a){var n=En;if(n&&typeof t=="string"&&t){var i=ut(t);i='link[rel="'+e+'"][href="'+i+'"]',typeof a=="string"&&(i+='[crossorigin="'+a+'"]'),Zd.has(i)||(Zd.add(i),e={rel:e,crossOrigin:a,href:t},n.querySelector(i)===null&&(t=n.createElement("link"),Oe(t,"link",e),Me(t),n.head.appendChild(t)))}}function wp(e){Kt.D(e),kd("dns-prefetch",e,null)}function Rp(e,t){Kt.C(e,t),kd("preconnect",e,t)}function Op(e,t,a){Kt.L(e,t,a);var n=En;if(n&&e&&t){var i='link[rel="preload"][as="'+ut(t)+'"]';t==="image"&&a&&a.imageSrcSet?(i+='[imagesrcset="'+ut(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(i+='[imagesizes="'+ut(a.imageSizes)+'"]')):i+='[href="'+ut(e)+'"]';var l=i;switch(t){case"style":l=Mn(e);break;case"script":l=Tn(e)}vt.has(l)||(e=_({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),vt.set(l,e),n.querySelector(i)!==null||t==="style"&&n.querySelector(mi(l))||t==="script"&&n.querySelector(pi(l))||(t=n.createElement("link"),Oe(t,"link",e),Me(t),n.head.appendChild(t)))}}function xp(e,t){Kt.m(e,t);var a=En;if(a&&e){var n=t&&typeof t.as=="string"?t.as:"script",i='link[rel="modulepreload"][as="'+ut(n)+'"][href="'+ut(e)+'"]',l=i;switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Tn(e)}if(!vt.has(l)&&(e=_({rel:"modulepreload",href:e},t),vt.set(l,e),a.querySelector(i)===null)){switch(n){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(pi(l)))return}n=a.createElement("link"),Oe(n,"link",e),Me(n),a.head.appendChild(n)}}}function zp(e,t,a){Kt.S(e,t,a);var n=En;if(n&&e){var i=Qa(n).hoistableStyles,l=Mn(e);t=t||"default";var s=i.get(l);if(!s){var o={loading:0,preload:null};if(s=n.querySelector(mi(l)))o.loading=5;else{e=_({rel:"stylesheet",href:e,"data-precedence":t},a),(a=vt.get(l))&&Io(e,a);var u=s=n.createElement("link");Me(u),Oe(u,"link",e),u._p=new Promise(function(m,y){u.onload=m,u.onerror=y}),u.addEventListener("load",function(){o.loading|=1}),u.addEventListener("error",function(){o.loading|=2}),o.loading|=4,wl(s,t,n)}s={type:"stylesheet",instance:s,count:1,state:o},i.set(l,s)}}}function Up(e,t){Kt.X(e,t);var a=En;if(a&&e){var n=Qa(a).hoistableScripts,i=Tn(e),l=n.get(i);l||(l=a.querySelector(pi(i)),l||(e=_({src:e,async:!0},t),(t=vt.get(i))&&Fo(e,t),l=a.createElement("script"),Me(l),Oe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function _p(e,t){Kt.M(e,t);var a=En;if(a&&e){var n=Qa(a).hoistableScripts,i=Tn(e),l=n.get(i);l||(l=a.querySelector(pi(i)),l||(e=_({src:e,async:!0,type:"module"},t),(t=vt.get(i))&&Fo(e,t),l=a.createElement("script"),Me(l),Oe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},n.set(i,l))}}function Kd(e,t,a,n){var i=(i=V.current)?Cl(i):null;if(!i)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Mn(a.href),a=Qa(i).hoistableStyles,n=a.get(t),n||(n={type:"style",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mn(a.href);var l=Qa(i).hoistableStyles,s=l.get(e);if(s||(i=i.ownerDocument||i,s={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,s),(l=i.querySelector(mi(e)))&&!l._p&&(s.instance=l,s.state.loading=5),vt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},vt.set(e,a),l||Lp(i,e,a,s.state))),t&&n===null)throw Error(h(528,""));return s}if(t&&n!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Tn(a),a=Qa(i).hoistableScripts,n=a.get(t),n||(n={type:"script",instance:null,count:0,state:null},a.set(t,n)),n):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Mn(e){return'href="'+ut(e)+'"'}function mi(e){return'link[rel="stylesheet"]['+e+"]"}function Jd(e){return _({},e,{"data-precedence":e.precedence,precedence:null})}function Lp(e,t,a,n){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?n.loading=1:(t=e.createElement("link"),n.preload=t,t.addEventListener("load",function(){return n.loading|=1}),t.addEventListener("error",function(){return n.loading|=2}),Oe(t,"link",a),Me(t),e.head.appendChild(t))}function Tn(e){return'[src="'+ut(e)+'"]'}function pi(e){return"script[async]"+e}function Id(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var n=e.querySelector('style[data-href~="'+ut(a.href)+'"]');if(n)return t.instance=n,Me(n),n;var i=_({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return n=(e.ownerDocument||e).createElement("style"),Me(n),Oe(n,"style",i),wl(n,a.precedence,e),t.instance=n;case"stylesheet":i=Mn(a.href);var l=e.querySelector(mi(i));if(l)return t.state.loading|=4,t.instance=l,Me(l),l;n=Jd(a),(i=vt.get(i))&&Io(n,i),l=(e.ownerDocument||e).createElement("link"),Me(l);var s=l;return s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),Oe(l,"link",n),t.state.loading|=4,wl(l,a.precedence,e),t.instance=l;case"script":return l=Tn(a.src),(i=e.querySelector(pi(l)))?(t.instance=i,Me(i),i):(n=a,(i=vt.get(l))&&(n=_({},a),Fo(n,i)),e=e.ownerDocument||e,i=e.createElement("script"),Me(i),Oe(i,"link",n),e.head.appendChild(i),t.instance=i);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(n=t.instance,t.state.loading|=4,wl(n,a.precedence,e));return t.instance}function wl(e,t,a){for(var n=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),i=n.length?n[n.length-1]:null,l=i,s=0;s<n.length;s++){var o=n[s];if(o.dataset.precedence===t)l=o;else if(l!==i)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Io(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Fo(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rl=null;function Fd(e,t,a){if(Rl===null){var n=new Map,i=Rl=new Map;i.set(a,n)}else i=Rl,n=i.get(a),n||(n=new Map,i.set(a,n));if(n.has(e))return n;for(n.set(e,null),a=a.getElementsByTagName(e),i=0;i<a.length;i++){var l=a[i];if(!(l[xn]||l[De]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var s=l.getAttribute(t)||"";s=e+s;var o=n.get(s);o?o.push(l):n.set(s,[l])}}return n}function Wd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Np(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Pd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function qp(e,t,a,n){if(a.type==="stylesheet"&&(typeof n.media!="string"||matchMedia(n.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var i=Mn(n.href),l=t.querySelector(mi(i));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=Ol.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Me(l);return}l=t.ownerDocument||t,n=Jd(n),(i=vt.get(i))&&Io(n,i),l=l.createElement("link"),Me(l);var s=l;s._p=new Promise(function(o,u){s.onload=o,s.onerror=u}),Oe(l,"link",n),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=Ol.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Wo=0;function Bp(e,t){return e.stylesheets&&e.count===0&&zl(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var n=setTimeout(function(){if(e.stylesheets&&zl(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Wo===0&&(Wo=62500*yp());var i=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&zl(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Wo?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(n),clearTimeout(i)}}:null}function Ol(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)zl(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var xl=null;function zl(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,xl=new Map,t.forEach(Hp,e),xl=null,Ol.call(e))}function Hp(e,t){if(!(t.state.loading&4)){var a=xl.get(e);if(a)var n=a.get(null);else{a=new Map,xl.set(e,a);for(var i=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<i.length;l++){var s=i[l];(s.nodeName==="LINK"||s.getAttribute("media")!=="not all")&&(a.set(s.dataset.precedence,s),n=s)}n&&a.set(null,n)}i=t.instance,s=i.getAttribute("data-precedence"),l=a.get(s)||n,l===n&&a.set(null,i),a.set(s,i),this.count++,n=Ol.bind(this),i.addEventListener("load",n),i.addEventListener("error",n),l?l.parentNode.insertBefore(i,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(i,e.firstChild)),t.state.loading|=4}}var hi={$$typeof:xe,Provider:null,Consumer:null,_currentValue:L,_currentValue2:L,_threadCount:0};function Vp(e,t,a,n,i,l,s,o,u){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Zl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Zl(0),this.hiddenUpdates=Zl(null),this.identifierPrefix=n,this.onUncaughtError=i,this.onCaughtError=l,this.onRecoverableError=s,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=u,this.incompleteTransitions=new Map}function $d(e,t,a,n,i,l,s,o,u,m,y,S){return e=new Vp(e,t,a,s,u,m,y,S,o),t=1,l===!0&&(t|=24),l=et(3,null,null,t),e.current=l,l.stateNode=e,t=Os(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:n,isDehydrated:a,cache:t},_s(l),e}function ef(e){return e?(e=en,e):en}function tf(e,t,a,n,i,l){i=ef(i),n.context===null?n.context=i:n.pendingContext=i,n=na(t),n.payload={element:a},l=l===void 0?null:l,l!==null&&(n.callback=l),a=ia(e,n,t),a!==null&&(Ke(a,e,t),Kn(a,e,t))}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Po(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function nf(e){if(e.tag===13||e.tag===31){var t=wa(e,67108864);t!==null&&Ke(t,e,67108864),Po(e,67108864)}}function lf(e){if(e.tag===13||e.tag===31){var t=lt();t=kl(t);var a=wa(e,t);a!==null&&Ke(a,e,t),Po(e,t)}}var Ul=!0;function Gp(e,t,a,n){var i=g.T;g.T=null;var l=M.p;try{M.p=2,$o(e,t,a,n)}finally{M.p=l,g.T=i}}function Yp(e,t,a,n){var i=g.T;g.T=null;var l=M.p;try{M.p=8,$o(e,t,a,n)}finally{M.p=l,g.T=i}}function $o(e,t,a,n){if(Ul){var i=eu(n);if(i===null)Vo(e,t,n,_l,a),of(e,n);else if(Xp(i,e,t,a,n))n.stopPropagation();else if(of(e,n),t&4&&-1<jp.indexOf(e)){for(;i!==null;){var l=Xa(i);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var s=Ea(l.pendingLanes);if(s!==0){var o=l;for(o.pendingLanes|=2,o.entangledLanes|=2;s;){var u=1<<31-Pe(s);o.entanglements[1]|=u,s&=~u}wt(l),(I&6)===0&&(hl=Fe()+500,ci(0))}}break;case 31:case 13:o=wa(l,2),o!==null&&Ke(o,l,2),yl(),Po(l,2)}if(l=eu(n),l===null&&Vo(e,t,n,_l,a),l===i)break;i=l}i!==null&&n.stopPropagation()}else Vo(e,t,n,null,a)}}function eu(e){return e=ts(e),tu(e)}var _l=null;function tu(e){if(_l=null,e=ja(e),e!==null){var t=J(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=pe(t),e!==null)return e;e=null}else if(a===31){if(e=Ue(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return _l=e,null}function sf(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(wf()){case mu:return 2;case pu:return 8;case Ei:case Rf:return 32;case hu:return 268435456;default:return 32}default:return 32}}var au=!1,ha=null,va=null,ya=null,vi=new Map,yi=new Map,ga=[],jp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function of(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":va=null;break;case"mouseover":case"mouseout":ya=null;break;case"pointerover":case"pointerout":vi.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":yi.delete(t.pointerId)}}function gi(e,t,a,n,i,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:n,nativeEvent:l,targetContainers:[i]},t!==null&&(t=Xa(t),t!==null&&nf(t)),e):(e.eventSystemFlags|=n,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function Xp(e,t,a,n,i){switch(t){case"focusin":return ha=gi(ha,e,t,a,n,i),!0;case"dragenter":return va=gi(va,e,t,a,n,i),!0;case"mouseover":return ya=gi(ya,e,t,a,n,i),!0;case"pointerover":var l=i.pointerId;return vi.set(l,gi(vi.get(l)||null,e,t,a,n,i)),!0;case"gotpointercapture":return l=i.pointerId,yi.set(l,gi(yi.get(l)||null,e,t,a,n,i)),!0}return!1}function uf(e){var t=ja(e.target);if(t!==null){var a=J(t);if(a!==null){if(t=a.tag,t===13){if(t=pe(a),t!==null){e.blockedOn=t,bu(e.priority,function(){lf(a)});return}}else if(t===31){if(t=Ue(a),t!==null){e.blockedOn=t,bu(e.priority,function(){lf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ll(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=eu(e.nativeEvent);if(a===null){a=e.nativeEvent;var n=new a.constructor(a.type,a);es=n,a.target.dispatchEvent(n),es=null}else return t=Xa(a),t!==null&&nf(t),e.blockedOn=a,!1;t.shift()}return!0}function cf(e,t,a){Ll(e)&&a.delete(t)}function Qp(){au=!1,ha!==null&&Ll(ha)&&(ha=null),va!==null&&Ll(va)&&(va=null),ya!==null&&Ll(ya)&&(ya=null),vi.forEach(cf),yi.forEach(cf)}function Nl(e,t){e.blockedOn===t&&(e.blockedOn=null,au||(au=!0,C.unstable_scheduleCallback(C.unstable_NormalPriority,Qp)))}var ql=null;function rf(e){ql!==e&&(ql=e,C.unstable_scheduleCallback(C.unstable_NormalPriority,function(){ql===e&&(ql=null);for(var t=0;t<e.length;t+=3){var a=e[t],n=e[t+1],i=e[t+2];if(typeof n!="function"){if(tu(n||a)===null)continue;break}var l=Xa(a);l!==null&&(e.splice(t,3),t-=3,$s(l,{pending:!0,data:i,method:a.method,action:n},n,i))}}))}function Dn(e){function t(u){return Nl(u,e)}ha!==null&&Nl(ha,e),va!==null&&Nl(va,e),ya!==null&&Nl(ya,e),vi.forEach(t),yi.forEach(t);for(var a=0;a<ga.length;a++){var n=ga[a];n.blockedOn===e&&(n.blockedOn=null)}for(;0<ga.length&&(a=ga[0],a.blockedOn===null);)uf(a),a.blockedOn===null&&ga.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(n=0;n<a.length;n+=3){var i=a[n],l=a[n+1],s=i[Ye]||null;if(typeof l=="function")s||rf(a);else if(s){var o=null;if(l&&l.hasAttribute("formAction")){if(i=l,s=l[Ye]||null)o=s.formAction;else if(tu(i)!==null)continue}else o=s.action;typeof o=="function"?a[n+1]=o:(a.splice(n,3),n-=3),rf(a)}}}function df(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(s){return i=s})},focusReset:"manual",scroll:"manual"})}function t(){i!==null&&(i(),i=null),n||setTimeout(a,20)}function a(){if(!n&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var n=!1,i=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){n=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),i!==null&&(i(),i=null)}}}function nu(e){this._internalRoot=e}Bl.prototype.render=nu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,n=lt();tf(a,n,e,t,null,null)},Bl.prototype.unmount=nu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tf(e.current,2,null,e,null,null),yl(),t[Ya]=null}};function Bl(e){this._internalRoot=e}Bl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Su();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ga.length&&t!==0&&t<ga[a].priority;a++);ga.splice(a,0,e),a===0&&uf(e)}};var ff=de.version;if(ff!=="19.2.7")throw Error(h(527,ff,"19.2.7"));M.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=E(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var Zp={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:g,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Hl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Hl.isDisabled&&Hl.supportsFiber)try{wn=Hl.inject(Zp),We=Hl}catch{}}return Si.createRoot=function(e,t){if(!U(e))throw Error(h(299));var a=!1,n="",i=gr,l=Ar,s=Sr;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(n=t.identifierPrefix),t.onUncaughtError!==void 0&&(i=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(s=t.onRecoverableError)),t=$d(e,1,!1,null,null,a,n,null,i,l,s,df),e[Ya]=t.current,Ho(e),new nu(t)},Si.hydrateRoot=function(e,t,a){if(!U(e))throw Error(h(299));var n=!1,i="",l=gr,s=Ar,o=Sr,u=null;return a!=null&&(a.unstable_strictMode===!0&&(n=!0),a.identifierPrefix!==void 0&&(i=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(s=a.onCaughtError),a.onRecoverableError!==void 0&&(o=a.onRecoverableError),a.formState!==void 0&&(u=a.formState)),t=$d(e,1,!0,t,a??null,n,i,u,l,s,o,df),t.context=ef(null),a=t.current,n=lt(),n=kl(n),i=na(n),i.callback=null,ia(a,i,n),a=n,t.current.lanes=a,On(t,a),wt(t),e[Ya]=t.current,Ho(e),new Bl(t)},Si.version="19.2.7",Si}var Ef;function th(){if(Ef)return su.exports;Ef=1;function C(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(C)}catch(de){console.error(de)}}return C(),su.exports=eh(),su.exports}var ah=th();function nh(){const[C,de]=Mf.useState(null),F=[{id:1,question:"1. Explain the Mobility Landscape. Discuss the characteristics and importance of mobile computing.",answer:"",codeExample:`
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
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""},{id:1,question:"1. ",answer:"",codeExample:""}],h=U=>{de(C===U?null:U)};return qe.jsxs("div",{className:"app-container",children:[qe.jsx("h1",{children:"MAD Interview Questions"}),qe.jsx("div",{className:"questions-container",children:F.map(U=>qe.jsxs("div",{className:"question-item",children:[qe.jsx("button",{className:`question-button ${C===U.id?"active":""}`,onClick:()=>h(U.id),children:U.question}),C===U.id&&qe.jsxs("div",{className:"answer-container",children:[qe.jsxs("div",{className:"answer",children:[qe.jsx("h3",{children:"Answer:"}),qe.jsx("p",{children:U.answer})]}),U.codeExample&&qe.jsxs("div",{className:"code-example",children:[qe.jsx("h3",{children:"Code Example:"}),qe.jsx("pre",{children:qe.jsx("code",{children:U.codeExample})})]})]})]},U.id))})]})}ah.createRoot(document.getElementById("root")).render(qe.jsx(Mf.StrictMode,{children:qe.jsx(nh,{})}));
