(function(){const de=document.createElement("link").relList;if(de&&de.supports&&de.supports("modulepreload"))return;for(const O of document.querySelectorAll('link[rel="modulepreload"]'))h(O);new MutationObserver(O=>{for(const K of O)if(K.type==="childList")for(const me of K.addedNodes)me.tagName==="LINK"&&me.rel==="modulepreload"&&h(me)}).observe(document,{childList:!0,subtree:!0});function P(O){const K={};return O.integrity&&(K.integrity=O.integrity),O.referrerPolicy&&(K.referrerPolicy=O.referrerPolicy),O.crossOrigin==="use-credentials"?K.credentials="include":O.crossOrigin==="anonymous"?K.credentials="omit":K.credentials="same-origin",K}function h(O){if(O.ep)return;O.ep=!0;const K=P(O);fetch(O.href,K)}})();var nr={exports:{}},An={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pf;function Im(){if(pf)return An;pf=1;var w=Symbol.for("react.transitional.element"),de=Symbol.for("react.fragment");function P(h,O,K){var me=null;if(K!==void 0&&(me=""+K),O.key!==void 0&&(me=""+O.key),"key"in O){K={};for(var Oe in O)Oe!=="key"&&(K[Oe]=O[Oe])}else K=O;return O=K.ref,{$$typeof:w,type:h,key:me,ref:O!==void 0?O:null,props:K}}return An.Fragment=de,An.jsx=P,An.jsxs=P,An}var mf;function Km(){return mf||(mf=1,nr.exports=Im()),nr.exports}var Be=Km(),lr={exports:{}},N={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hf;function Jm(){if(hf)return N;hf=1;var w=Symbol.for("react.transitional.element"),de=Symbol.for("react.portal"),P=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),O=Symbol.for("react.profiler"),K=Symbol.for("react.consumer"),me=Symbol.for("react.context"),Oe=Symbol.for("react.forward_ref"),L=Symbol.for("react.suspense"),M=Symbol.for("react.memo"),W=Symbol.for("react.lazy"),z=Symbol.for("react.activity"),ue=Symbol.iterator;function Ke(c){return c===null||typeof c!="object"?null:(c=ue&&c[ue]||c["@@iterator"],typeof c=="function"?c:null)}var He={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ze=Object.assign,Rt={};function Je(c,b,T){this.props=c,this.context=b,this.refs=Rt,this.updater=T||He}Je.prototype.isReactComponent={},Je.prototype.setState=function(c,b){if(typeof c!="object"&&typeof c!="function"&&c!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,c,b,"setState")},Je.prototype.forceUpdate=function(c){this.updater.enqueueForceUpdate(this,c,"forceUpdate")};function Kt(){}Kt.prototype=Je.prototype;function Le(c,b,T){this.props=c,this.context=b,this.refs=Rt,this.updater=T||He}var ot=Le.prototype=new Kt;ot.constructor=Le,ze(ot,Je.prototype),ot.isPureReactComponent=!0;var bt=Array.isArray;function ke(){}var X={H:null,A:null,T:null,S:null},qe=Object.prototype.hasOwnProperty;function Mt(c,b,T){var C=T.ref;return{$$typeof:w,type:c,key:b,ref:C!==void 0?C:null,props:T}}function Va(c,b){return Mt(c.type,b,c.props)}function Et(c){return typeof c=="object"&&c!==null&&c.$$typeof===w}function Ve(c){var b={"=":"=0",":":"=2"};return"$"+c.replace(/[=:]/g,function(T){return b[T]})}var Sa=/\/+/g;function xt(c,b){return typeof c=="object"&&c!==null&&c.key!=null?Ve(""+c.key):b.toString(36)}function vt(c){switch(c.status){case"fulfilled":return c.value;case"rejected":throw c.reason;default:switch(typeof c.status=="string"?c.then(ke,ke):(c.status="pending",c.then(function(b){c.status==="pending"&&(c.status="fulfilled",c.value=b)},function(b){c.status==="pending"&&(c.status="rejected",c.reason=b)})),c.status){case"fulfilled":return c.value;case"rejected":throw c.reason}}throw c}function y(c,b,T,C,B){var q=typeof c;(q==="undefined"||q==="boolean")&&(c=null);var F=!1;if(c===null)F=!0;else switch(q){case"bigint":case"string":case"number":F=!0;break;case"object":switch(c.$$typeof){case w:case de:F=!0;break;case W:return F=c._init,y(F(c._payload),b,T,C,B)}}if(F)return B=B(c),F=C===""?"."+xt(c,0):C,bt(B)?(T="",F!=null&&(T=F.replace(Sa,"$&/")+"/"),y(B,b,T,"",function(Di){return Di})):B!=null&&(Et(B)&&(B=Va(B,T+(B.key==null||c&&c.key===B.key?"":(""+B.key).replace(Sa,"$&/")+"/")+F)),b.push(B)),1;F=0;var _e=C===""?".":C+":";if(bt(c))for(var he=0;he<c.length;he++)C=c[he],q=_e+xt(C,he),F+=y(C,b,T,q,B);else if(he=Ke(c),typeof he=="function")for(c=he.call(c),he=0;!(C=c.next()).done;)C=C.value,q=_e+xt(C,he++),F+=y(C,b,T,q,B);else if(q==="object"){if(typeof c.then=="function")return y(vt(c),b,T,C,B);throw b=String(c),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(c).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return F}function E(c,b,T){if(c==null)return c;var C=[],B=0;return y(c,C,"","",function(q){return b.call(T,q,B++)}),C}function _(c){if(c._status===-1){var b=c._result;b=b(),b.then(function(T){(c._status===0||c._status===-1)&&(c._status=1,c._result=T)},function(T){(c._status===0||c._status===-1)&&(c._status=2,c._result=T)}),c._status===-1&&(c._status=0,c._result=b)}if(c._status===1)return c._result.default;throw c._result}var te=typeof reportError=="function"?reportError:function(c){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof c=="object"&&c!==null&&typeof c.message=="string"?String(c.message):String(c),error:c});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",c);return}console.error(c)},le={map:E,forEach:function(c,b,T){E(c,function(){b.apply(this,arguments)},T)},count:function(c){var b=0;return E(c,function(){b++}),b},toArray:function(c){return E(c,function(b){return b})||[]},only:function(c){if(!Et(c))throw Error("React.Children.only expected to receive a single React element child.");return c}};return N.Activity=z,N.Children=le,N.Component=Je,N.Fragment=P,N.Profiler=O,N.PureComponent=Le,N.StrictMode=h,N.Suspense=L,N.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=X,N.__COMPILER_RUNTIME={__proto__:null,c:function(c){return X.H.useMemoCache(c)}},N.cache=function(c){return function(){return c.apply(null,arguments)}},N.cacheSignal=function(){return null},N.cloneElement=function(c,b,T){if(c==null)throw Error("The argument must be a React element, but you passed "+c+".");var C=ze({},c.props),B=c.key;if(b!=null)for(q in b.key!==void 0&&(B=""+b.key),b)!qe.call(b,q)||q==="key"||q==="__self"||q==="__source"||q==="ref"&&b.ref===void 0||(C[q]=b[q]);var q=arguments.length-2;if(q===1)C.children=T;else if(1<q){for(var F=Array(q),_e=0;_e<q;_e++)F[_e]=arguments[_e+2];C.children=F}return Mt(c.type,B,C)},N.createContext=function(c){return c={$$typeof:me,_currentValue:c,_currentValue2:c,_threadCount:0,Provider:null,Consumer:null},c.Provider=c,c.Consumer={$$typeof:K,_context:c},c},N.createElement=function(c,b,T){var C,B={},q=null;if(b!=null)for(C in b.key!==void 0&&(q=""+b.key),b)qe.call(b,C)&&C!=="key"&&C!=="__self"&&C!=="__source"&&(B[C]=b[C]);var F=arguments.length-2;if(F===1)B.children=T;else if(1<F){for(var _e=Array(F),he=0;he<F;he++)_e[he]=arguments[he+2];B.children=_e}if(c&&c.defaultProps)for(C in F=c.defaultProps,F)B[C]===void 0&&(B[C]=F[C]);return Mt(c,q,B)},N.createRef=function(){return{current:null}},N.forwardRef=function(c){return{$$typeof:Oe,render:c}},N.isValidElement=Et,N.lazy=function(c){return{$$typeof:W,_payload:{_status:-1,_result:c},_init:_}},N.memo=function(c,b){return{$$typeof:M,type:c,compare:b===void 0?null:b}},N.startTransition=function(c){var b=X.T,T={};X.T=T;try{var C=c(),B=X.S;B!==null&&B(T,C),typeof C=="object"&&C!==null&&typeof C.then=="function"&&C.then(ke,te)}catch(q){te(q)}finally{b!==null&&T.types!==null&&(b.types=T.types),X.T=b}},N.unstable_useCacheRefresh=function(){return X.H.useCacheRefresh()},N.use=function(c){return X.H.use(c)},N.useActionState=function(c,b,T){return X.H.useActionState(c,b,T)},N.useCallback=function(c,b){return X.H.useCallback(c,b)},N.useContext=function(c){return X.H.useContext(c)},N.useDebugValue=function(){},N.useDeferredValue=function(c,b){return X.H.useDeferredValue(c,b)},N.useEffect=function(c,b){return X.H.useEffect(c,b)},N.useEffectEvent=function(c){return X.H.useEffectEvent(c)},N.useId=function(){return X.H.useId()},N.useImperativeHandle=function(c,b,T){return X.H.useImperativeHandle(c,b,T)},N.useInsertionEffect=function(c,b){return X.H.useInsertionEffect(c,b)},N.useLayoutEffect=function(c,b){return X.H.useLayoutEffect(c,b)},N.useMemo=function(c,b){return X.H.useMemo(c,b)},N.useOptimistic=function(c,b){return X.H.useOptimistic(c,b)},N.useReducer=function(c,b,T){return X.H.useReducer(c,b,T)},N.useRef=function(c){return X.H.useRef(c)},N.useState=function(c){return X.H.useState(c)},N.useSyncExternalStore=function(c,b,T){return X.H.useSyncExternalStore(c,b,T)},N.useTransition=function(){return X.H.useTransition()},N.version="19.2.7",N}var gf;function cr(){return gf||(gf=1,lr.exports=Jm()),lr.exports}var Ef=cr(),or={exports:{}},Sn={},sr={exports:{}},rr={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var vf;function Pm(){return vf||(vf=1,(function(w){function de(y,E){var _=y.length;y.push(E);e:for(;0<_;){var te=_-1>>>1,le=y[te];if(0<O(le,E))y[te]=E,y[_]=le,_=te;else break e}}function P(y){return y.length===0?null:y[0]}function h(y){if(y.length===0)return null;var E=y[0],_=y.pop();if(_!==E){y[0]=_;e:for(var te=0,le=y.length,c=le>>>1;te<c;){var b=2*(te+1)-1,T=y[b],C=b+1,B=y[C];if(0>O(T,_))C<le&&0>O(B,T)?(y[te]=B,y[C]=_,te=C):(y[te]=T,y[b]=_,te=b);else if(C<le&&0>O(B,_))y[te]=B,y[C]=_,te=C;else break e}}return E}function O(y,E){var _=y.sortIndex-E.sortIndex;return _!==0?_:y.id-E.id}if(w.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var K=performance;w.unstable_now=function(){return K.now()}}else{var me=Date,Oe=me.now();w.unstable_now=function(){return me.now()-Oe}}var L=[],M=[],W=1,z=null,ue=3,Ke=!1,He=!1,ze=!1,Rt=!1,Je=typeof setTimeout=="function"?setTimeout:null,Kt=typeof clearTimeout=="function"?clearTimeout:null,Le=typeof setImmediate<"u"?setImmediate:null;function ot(y){for(var E=P(M);E!==null;){if(E.callback===null)h(M);else if(E.startTime<=y)h(M),E.sortIndex=E.expirationTime,de(L,E);else break;E=P(M)}}function bt(y){if(ze=!1,ot(y),!He)if(P(L)!==null)He=!0,ke||(ke=!0,Ve());else{var E=P(M);E!==null&&vt(bt,E.startTime-y)}}var ke=!1,X=-1,qe=5,Mt=-1;function Va(){return Rt?!0:!(w.unstable_now()-Mt<qe)}function Et(){if(Rt=!1,ke){var y=w.unstable_now();Mt=y;var E=!0;try{e:{He=!1,ze&&(ze=!1,Kt(X),X=-1),Ke=!0;var _=ue;try{t:{for(ot(y),z=P(L);z!==null&&!(z.expirationTime>y&&Va());){var te=z.callback;if(typeof te=="function"){z.callback=null,ue=z.priorityLevel;var le=te(z.expirationTime<=y);if(y=w.unstable_now(),typeof le=="function"){z.callback=le,ot(y),E=!0;break t}z===P(L)&&h(L),ot(y)}else h(L);z=P(L)}if(z!==null)E=!0;else{var c=P(M);c!==null&&vt(bt,c.startTime-y),E=!1}}break e}finally{z=null,ue=_,Ke=!1}E=void 0}}finally{E?Ve():ke=!1}}}var Ve;if(typeof Le=="function")Ve=function(){Le(Et)};else if(typeof MessageChannel<"u"){var Sa=new MessageChannel,xt=Sa.port2;Sa.port1.onmessage=Et,Ve=function(){xt.postMessage(null)}}else Ve=function(){Je(Et,0)};function vt(y,E){X=Je(function(){y(w.unstable_now())},E)}w.unstable_IdlePriority=5,w.unstable_ImmediatePriority=1,w.unstable_LowPriority=4,w.unstable_NormalPriority=3,w.unstable_Profiling=null,w.unstable_UserBlockingPriority=2,w.unstable_cancelCallback=function(y){y.callback=null},w.unstable_forceFrameRate=function(y){0>y||125<y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):qe=0<y?Math.floor(1e3/y):5},w.unstable_getCurrentPriorityLevel=function(){return ue},w.unstable_next=function(y){switch(ue){case 1:case 2:case 3:var E=3;break;default:E=ue}var _=ue;ue=E;try{return y()}finally{ue=_}},w.unstable_requestPaint=function(){Rt=!0},w.unstable_runWithPriority=function(y,E){switch(y){case 1:case 2:case 3:case 4:case 5:break;default:y=3}var _=ue;ue=y;try{return E()}finally{ue=_}},w.unstable_scheduleCallback=function(y,E,_){var te=w.unstable_now();switch(typeof _=="object"&&_!==null?(_=_.delay,_=typeof _=="number"&&0<_?te+_:te):_=te,y){case 1:var le=-1;break;case 2:le=250;break;case 5:le=1073741823;break;case 4:le=1e4;break;default:le=5e3}return le=_+le,y={id:W++,callback:E,priorityLevel:y,startTime:_,expirationTime:le,sortIndex:-1},_>te?(y.sortIndex=_,de(M,y),P(L)===null&&y===P(M)&&(ze?(Kt(X),X=-1):ze=!0,vt(bt,_-te))):(y.sortIndex=le,de(L,y),He||Ke||(He=!0,ke||(ke=!0,Ve()))),y},w.unstable_shouldYield=Va,w.unstable_wrapCallback=function(y){var E=ue;return function(){var _=ue;ue=E;try{return y.apply(this,arguments)}finally{ue=_}}}})(rr)),rr}var yf;function Wm(){return yf||(yf=1,sr.exports=Pm()),sr.exports}var ur={exports:{}},Ue={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Af;function Fm(){if(Af)return Ue;Af=1;var w=cr();function de(L){var M="https://react.dev/errors/"+L;if(1<arguments.length){M+="?args[]="+encodeURIComponent(arguments[1]);for(var W=2;W<arguments.length;W++)M+="&args[]="+encodeURIComponent(arguments[W])}return"Minified React error #"+L+"; visit "+M+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function P(){}var h={d:{f:P,r:function(){throw Error(de(522))},D:P,C:P,L:P,m:P,X:P,S:P,M:P},p:0,findDOMNode:null},O=Symbol.for("react.portal");function K(L,M,W){var z=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:z==null?null:""+z,children:L,containerInfo:M,implementation:W}}var me=w.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function Oe(L,M){if(L==="font")return"";if(typeof M=="string")return M==="use-credentials"?M:""}return Ue.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,Ue.createPortal=function(L,M){var W=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!M||M.nodeType!==1&&M.nodeType!==9&&M.nodeType!==11)throw Error(de(299));return K(L,M,null,W)},Ue.flushSync=function(L){var M=me.T,W=h.p;try{if(me.T=null,h.p=2,L)return L()}finally{me.T=M,h.p=W,h.d.f()}},Ue.preconnect=function(L,M){typeof L=="string"&&(M?(M=M.crossOrigin,M=typeof M=="string"?M==="use-credentials"?M:"":void 0):M=null,h.d.C(L,M))},Ue.prefetchDNS=function(L){typeof L=="string"&&h.d.D(L)},Ue.preinit=function(L,M){if(typeof L=="string"&&M&&typeof M.as=="string"){var W=M.as,z=Oe(W,M.crossOrigin),ue=typeof M.integrity=="string"?M.integrity:void 0,Ke=typeof M.fetchPriority=="string"?M.fetchPriority:void 0;W==="style"?h.d.S(L,typeof M.precedence=="string"?M.precedence:void 0,{crossOrigin:z,integrity:ue,fetchPriority:Ke}):W==="script"&&h.d.X(L,{crossOrigin:z,integrity:ue,fetchPriority:Ke,nonce:typeof M.nonce=="string"?M.nonce:void 0})}},Ue.preinitModule=function(L,M){if(typeof L=="string")if(typeof M=="object"&&M!==null){if(M.as==null||M.as==="script"){var W=Oe(M.as,M.crossOrigin);h.d.M(L,{crossOrigin:W,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0})}}else M==null&&h.d.M(L)},Ue.preload=function(L,M){if(typeof L=="string"&&typeof M=="object"&&M!==null&&typeof M.as=="string"){var W=M.as,z=Oe(W,M.crossOrigin);h.d.L(L,W,{crossOrigin:z,integrity:typeof M.integrity=="string"?M.integrity:void 0,nonce:typeof M.nonce=="string"?M.nonce:void 0,type:typeof M.type=="string"?M.type:void 0,fetchPriority:typeof M.fetchPriority=="string"?M.fetchPriority:void 0,referrerPolicy:typeof M.referrerPolicy=="string"?M.referrerPolicy:void 0,imageSrcSet:typeof M.imageSrcSet=="string"?M.imageSrcSet:void 0,imageSizes:typeof M.imageSizes=="string"?M.imageSizes:void 0,media:typeof M.media=="string"?M.media:void 0})}},Ue.preloadModule=function(L,M){if(typeof L=="string")if(M){var W=Oe(M.as,M.crossOrigin);h.d.m(L,{as:typeof M.as=="string"&&M.as!=="script"?M.as:void 0,crossOrigin:W,integrity:typeof M.integrity=="string"?M.integrity:void 0})}else h.d.m(L)},Ue.requestFormReset=function(L){h.d.r(L)},Ue.unstable_batchedUpdates=function(L,M){return L(M)},Ue.useFormState=function(L,M,W){return me.H.useFormState(L,M,W)},Ue.useFormStatus=function(){return me.H.useHostTransitionStatus()},Ue.version="19.2.7",Ue}var Sf;function $m(){if(Sf)return ur.exports;Sf=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(de){console.error(de)}}return w(),ur.exports=Fm(),ur.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var bf;function eh(){if(bf)return Sn;bf=1;var w=Wm(),de=cr(),P=$m();function h(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var a=2;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function O(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function K(e){var t=e,a=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(a=t.return),e=t.return;while(e)}return t.tag===3?a:null}function me(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function Oe(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function L(e){if(K(e)!==e)throw Error(h(188))}function M(e){var t=e.alternate;if(!t){if(t=K(e),t===null)throw Error(h(188));return t!==e?null:e}for(var a=e,i=t;;){var n=a.return;if(n===null)break;var l=n.alternate;if(l===null){if(i=n.return,i!==null){a=i;continue}break}if(n.child===l.child){for(l=n.child;l;){if(l===a)return L(n),e;if(l===i)return L(n),t;l=l.sibling}throw Error(h(188))}if(a.return!==i.return)a=n,i=l;else{for(var o=!1,s=n.child;s;){if(s===a){o=!0,a=n,i=l;break}if(s===i){o=!0,i=n,a=l;break}s=s.sibling}if(!o){for(s=l.child;s;){if(s===a){o=!0,a=l,i=n;break}if(s===i){o=!0,i=l,a=n;break}s=s.sibling}if(!o)throw Error(h(189))}}if(a.alternate!==i)throw Error(h(190))}if(a.tag!==3)throw Error(h(188));return a.stateNode.current===a?e:t}function W(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=W(e),t!==null)return t;e=e.sibling}return null}var z=Object.assign,ue=Symbol.for("react.element"),Ke=Symbol.for("react.transitional.element"),He=Symbol.for("react.portal"),ze=Symbol.for("react.fragment"),Rt=Symbol.for("react.strict_mode"),Je=Symbol.for("react.profiler"),Kt=Symbol.for("react.consumer"),Le=Symbol.for("react.context"),ot=Symbol.for("react.forward_ref"),bt=Symbol.for("react.suspense"),ke=Symbol.for("react.suspense_list"),X=Symbol.for("react.memo"),qe=Symbol.for("react.lazy"),Mt=Symbol.for("react.activity"),Va=Symbol.for("react.memo_cache_sentinel"),Et=Symbol.iterator;function Ve(e){return e===null||typeof e!="object"?null:(e=Et&&e[Et]||e["@@iterator"],typeof e=="function"?e:null)}var Sa=Symbol.for("react.client.reference");function xt(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===Sa?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ze:return"Fragment";case Je:return"Profiler";case Rt:return"StrictMode";case bt:return"Suspense";case ke:return"SuspenseList";case Mt:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case He:return"Portal";case Le:return e.displayName||"Context";case Kt:return(e._context.displayName||"Context")+".Consumer";case ot:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case X:return t=e.displayName||null,t!==null?t:xt(e.type)||"Memo";case qe:t=e._payload,e=e._init;try{return xt(e(t))}catch{}}return null}var vt=Array.isArray,y=de.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,E=P.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,_={pending:!1,data:null,method:null,action:null},te=[],le=-1;function c(e){return{current:e}}function b(e){0>le||(e.current=te[le],te[le]=null,le--)}function T(e,t){le++,te[le]=e.current,e.current=t}var C=c(null),B=c(null),q=c(null),F=c(null);function _e(e,t){switch(T(q,t),T(B,e),T(C,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?Nd(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=Nd(t),e=Bd(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}b(C),T(C,e)}function he(){b(C),b(B),b(q)}function Di(e){e.memoizedState!==null&&T(F,e);var t=C.current,a=Bd(t,e.type);t!==a&&(T(B,e),T(C,a))}function bn(e){B.current===e&&(b(C),b(B)),F.current===e&&(b(F),hn._currentValue=_)}var ql,dr;function ba(e){if(ql===void 0)try{throw Error()}catch(a){var t=a.stack.trim().match(/\n( *(at )?)/);ql=t&&t[1]||"",dr=-1<a.stack.indexOf(`
    at`)?" (<anonymous>)":-1<a.stack.indexOf("@")?"@unknown:0:0":""}return`
`+ql+e+dr}var Vl=!1;function Gl(e,t){if(!e||Vl)return"";Vl=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var S=function(){throw Error()};if(Object.defineProperty(S.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(S,[])}catch(g){var m=g}Reflect.construct(e,[],S)}else{try{S.call()}catch(g){m=g}e.call(S.prototype)}}else{try{throw Error()}catch(g){m=g}(S=e())&&typeof S.catch=="function"&&S.catch(function(){})}}catch(g){if(g&&m&&typeof g.stack=="string")return[g.stack,m.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var n=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");n&&n.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),o=l[0],s=l[1];if(o&&s){var r=o.split(`
`),p=s.split(`
`);for(n=i=0;i<r.length&&!r[i].includes("DetermineComponentFrameRoot");)i++;for(;n<p.length&&!p[n].includes("DetermineComponentFrameRoot");)n++;if(i===r.length||n===p.length)for(i=r.length-1,n=p.length-1;1<=i&&0<=n&&r[i]!==p[n];)n--;for(;1<=i&&0<=n;i--,n--)if(r[i]!==p[n]){if(i!==1||n!==1)do if(i--,n--,0>n||r[i]!==p[n]){var v=`
`+r[i].replace(" at new "," at ");return e.displayName&&v.includes("<anonymous>")&&(v=v.replace("<anonymous>",e.displayName)),v}while(1<=i&&0<=n);break}}}finally{Vl=!1,Error.prepareStackTrace=a}return(a=e?e.displayName||e.name:"")?ba(a):""}function Tf(e,t){switch(e.tag){case 26:case 27:case 5:return ba(e.type);case 16:return ba("Lazy");case 13:return e.child!==t&&t!==null?ba("Suspense Fallback"):ba("Suspense");case 19:return ba("SuspenseList");case 0:case 15:return Gl(e.type,!1);case 11:return Gl(e.type.render,!1);case 1:return Gl(e.type,!0);case 31:return ba("Activity");default:return""}}function fr(e){try{var t="",a=null;do t+=Tf(e,a),a=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var Yl=Object.prototype.hasOwnProperty,Ql=w.unstable_scheduleCallback,Xl=w.unstable_cancelCallback,Df=w.unstable_shouldYield,wf=w.unstable_requestPaint,Pe=w.unstable_now,Cf=w.unstable_getCurrentPriorityLevel,pr=w.unstable_ImmediatePriority,mr=w.unstable_UserBlockingPriority,Mn=w.unstable_NormalPriority,Rf=w.unstable_LowPriority,hr=w.unstable_IdlePriority,xf=w.log,Lf=w.unstable_setDisableYieldValue,wi=null,We=null;function Jt(e){if(typeof xf=="function"&&Lf(e),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(wi,e)}catch{}}var Fe=Math.clz32?Math.clz32:zf,Uf=Math.log,Of=Math.LN2;function zf(e){return e>>>=0,e===0?32:31-(Uf(e)/Of|0)|0}var En=256,Tn=262144,Dn=4194304;function Ma(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function wn(e,t,a){var i=e.pendingLanes;if(i===0)return 0;var n=0,l=e.suspendedLanes,o=e.pingedLanes;e=e.warmLanes;var s=i&134217727;return s!==0?(i=s&~l,i!==0?n=Ma(i):(o&=s,o!==0?n=Ma(o):a||(a=s&~e,a!==0&&(n=Ma(a))))):(s=i&~l,s!==0?n=Ma(s):o!==0?n=Ma(o):a||(a=i&~e,a!==0&&(n=Ma(a)))),n===0?0:t!==0&&t!==n&&(t&l)===0&&(l=n&-n,a=t&-t,l>=a||l===32&&(a&4194048)!==0)?t:n}function Ci(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function _f(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gr(){var e=Dn;return Dn<<=1,(Dn&62914560)===0&&(Dn=4194304),e}function jl(e){for(var t=[],a=0;31>a;a++)t.push(e);return t}function Ri(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function Nf(e,t,a,i,n,l){var o=e.pendingLanes;e.pendingLanes=a,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=a,e.entangledLanes&=a,e.errorRecoveryDisabledLanes&=a,e.shellSuspendCounter=0;var s=e.entanglements,r=e.expirationTimes,p=e.hiddenUpdates;for(a=o&~a;0<a;){var v=31-Fe(a),S=1<<v;s[v]=0,r[v]=-1;var m=p[v];if(m!==null)for(p[v]=null,v=0;v<m.length;v++){var g=m[v];g!==null&&(g.lane&=-536870913)}a&=~S}i!==0&&vr(e,i,0),l!==0&&n===0&&e.tag!==0&&(e.suspendedLanes|=l&~(o&~t))}function vr(e,t,a){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-Fe(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|a&261930}function yr(e,t){var a=e.entangledLanes|=t;for(e=e.entanglements;a;){var i=31-Fe(a),n=1<<i;n&t|e[i]&t&&(e[i]|=t),a&=~n}}function Ar(e,t){var a=t&-t;return a=(a&42)!==0?1:Zl(a),(a&(e.suspendedLanes|t))!==0?0:a}function Zl(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function Il(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Sr(){var e=E.p;return e!==0?e:(e=window.event,e===void 0?32:of(e.type))}function br(e,t){var a=E.p;try{return E.p=e,t()}finally{E.p=a}}var Pt=Math.random().toString(36).slice(2),De="__reactFiber$"+Pt,Ge="__reactProps$"+Pt,Ga="__reactContainer$"+Pt,Kl="__reactEvents$"+Pt,Bf="__reactListeners$"+Pt,Hf="__reactHandles$"+Pt,Mr="__reactResources$"+Pt,xi="__reactMarker$"+Pt;function Jl(e){delete e[De],delete e[Ge],delete e[Kl],delete e[Bf],delete e[Hf]}function Ya(e){var t=e[De];if(t)return t;for(var a=e.parentNode;a;){if(t=a[Ga]||a[De]){if(a=t.alternate,t.child!==null||a!==null&&a.child!==null)for(e=Qd(e);e!==null;){if(a=e[De])return a;e=Qd(e)}return t}e=a,a=e.parentNode}return null}function Qa(e){if(e=e[De]||e[Ga]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function Li(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(h(33))}function Xa(e){var t=e[Mr];return t||(t=e[Mr]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function Ee(e){e[xi]=!0}var Er=new Set,Tr={};function Ea(e,t){ja(e,t),ja(e+"Capture",t)}function ja(e,t){for(Tr[e]=t,e=0;e<t.length;e++)Er.add(t[e])}var kf=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Dr={},wr={};function qf(e){return Yl.call(wr,e)?!0:Yl.call(Dr,e)?!1:kf.test(e)?wr[e]=!0:(Dr[e]=!0,!1)}function Cn(e,t,a){if(qf(t))if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+a)}}function Rn(e,t,a){if(a===null)e.removeAttribute(t);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+a)}}function Lt(e,t,a,i){if(i===null)e.removeAttribute(a);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(a);return}e.setAttributeNS(t,a,""+i)}}function st(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Cr(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Vf(e,t,a){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var n=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return n.call(this)},set:function(o){a=""+o,l.call(this,o)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return a},setValue:function(o){a=""+o},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Pl(e){if(!e._valueTracker){var t=Cr(e)?"checked":"value";e._valueTracker=Vf(e,t,""+e[t])}}function Rr(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var a=t.getValue(),i="";return e&&(i=Cr(e)?e.checked?"true":"false":e.value),e=i,e!==a?(t.setValue(e),!0):!1}function xn(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var Gf=/[\n"\\]/g;function rt(e){return e.replace(Gf,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function Wl(e,t,a,i,n,l,o,s){e.name="",o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"?e.type=o:e.removeAttribute("type"),t!=null?o==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+st(t)):e.value!==""+st(t)&&(e.value=""+st(t)):o!=="submit"&&o!=="reset"||e.removeAttribute("value"),t!=null?Fl(e,o,st(t)):a!=null?Fl(e,o,st(a)):i!=null&&e.removeAttribute("value"),n==null&&l!=null&&(e.defaultChecked=!!l),n!=null&&(e.checked=n&&typeof n!="function"&&typeof n!="symbol"),s!=null&&typeof s!="function"&&typeof s!="symbol"&&typeof s!="boolean"?e.name=""+st(s):e.removeAttribute("name")}function xr(e,t,a,i,n,l,o,s){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||a!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){Pl(e);return}a=a!=null?""+st(a):"",t=t!=null?""+st(t):a,s||t===e.value||(e.value=t),e.defaultValue=t}i=i??n,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=s?e.checked:!!i,e.defaultChecked=!!i,o!=null&&typeof o!="function"&&typeof o!="symbol"&&typeof o!="boolean"&&(e.name=o),Pl(e)}function Fl(e,t,a){t==="number"&&xn(e.ownerDocument)===e||e.defaultValue===""+a||(e.defaultValue=""+a)}function Za(e,t,a,i){if(e=e.options,t){t={};for(var n=0;n<a.length;n++)t["$"+a[n]]=!0;for(a=0;a<e.length;a++)n=t.hasOwnProperty("$"+e[a].value),e[a].selected!==n&&(e[a].selected=n),n&&i&&(e[a].defaultSelected=!0)}else{for(a=""+st(a),t=null,n=0;n<e.length;n++){if(e[n].value===a){e[n].selected=!0,i&&(e[n].defaultSelected=!0);return}t!==null||e[n].disabled||(t=e[n])}t!==null&&(t.selected=!0)}}function Lr(e,t,a){if(t!=null&&(t=""+st(t),t!==e.value&&(e.value=t),a==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=a!=null?""+st(a):""}function Ur(e,t,a,i){if(t==null){if(i!=null){if(a!=null)throw Error(h(92));if(vt(i)){if(1<i.length)throw Error(h(93));i=i[0]}a=i}a==null&&(a=""),t=a}a=st(t),e.defaultValue=a,i=e.textContent,i===a&&i!==""&&i!==null&&(e.value=i),Pl(e)}function Ia(e,t){if(t){var a=e.firstChild;if(a&&a===e.lastChild&&a.nodeType===3){a.nodeValue=t;return}}e.textContent=t}var Yf=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Or(e,t,a){var i=t.indexOf("--")===0;a==null||typeof a=="boolean"||a===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,a):typeof a!="number"||a===0||Yf.has(t)?t==="float"?e.cssFloat=a:e[t]=(""+a).trim():e[t]=a+"px"}function zr(e,t,a){if(t!=null&&typeof t!="object")throw Error(h(62));if(e=e.style,a!=null){for(var i in a)!a.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var n in t)i=t[n],t.hasOwnProperty(n)&&a[n]!==i&&Or(e,n,i)}else for(var l in t)t.hasOwnProperty(l)&&Or(e,l,t[l])}function $l(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qf=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Xf=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Ln(e){return Xf.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function Ut(){}var eo=null;function to(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var Ka=null,Ja=null;function _r(e){var t=Qa(e);if(t&&(e=t.stateNode)){var a=e[Ge]||null;e:switch(e=t.stateNode,t.type){case"input":if(Wl(e,a.value,a.defaultValue,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name),t=a.name,a.type==="radio"&&t!=null){for(a=e;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll('input[name="'+rt(""+t)+'"][type="radio"]'),t=0;t<a.length;t++){var i=a[t];if(i!==e&&i.form===e.form){var n=i[Ge]||null;if(!n)throw Error(h(90));Wl(i,n.value,n.defaultValue,n.defaultValue,n.checked,n.defaultChecked,n.type,n.name)}}for(t=0;t<a.length;t++)i=a[t],i.form===e.form&&Rr(i)}break e;case"textarea":Lr(e,a.value,a.defaultValue);break e;case"select":t=a.value,t!=null&&Za(e,!!a.multiple,t,!1)}}}var ao=!1;function Nr(e,t,a){if(ao)return e(t,a);ao=!0;try{var i=e(t);return i}finally{if(ao=!1,(Ka!==null||Ja!==null)&&(vl(),Ka&&(t=Ka,e=Ja,Ja=Ka=null,_r(t),e)))for(t=0;t<e.length;t++)_r(e[t])}}function Ui(e,t){var a=e.stateNode;if(a===null)return null;var i=a[Ge]||null;if(i===null)return null;a=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(a&&typeof a!="function")throw Error(h(231,t,typeof a));return a}var Ot=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),io=!1;if(Ot)try{var Oi={};Object.defineProperty(Oi,"passive",{get:function(){io=!0}}),window.addEventListener("test",Oi,Oi),window.removeEventListener("test",Oi,Oi)}catch{io=!1}var Wt=null,no=null,Un=null;function Br(){if(Un)return Un;var e,t=no,a=t.length,i,n="value"in Wt?Wt.value:Wt.textContent,l=n.length;for(e=0;e<a&&t[e]===n[e];e++);var o=a-e;for(i=1;i<=o&&t[a-i]===n[l-i];i++);return Un=n.slice(e,1<i?1-i:void 0)}function On(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function zn(){return!0}function Hr(){return!1}function Ye(e){function t(a,i,n,l,o){this._reactName=a,this._targetInst=n,this.type=i,this.nativeEvent=l,this.target=o,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(a=e[s],this[s]=a?a(l):l[s]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?zn:Hr,this.isPropagationStopped=Hr,this}return z(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=zn)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=zn)},persist:function(){},isPersistent:zn}),t}var Ta={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_n=Ye(Ta),zi=z({},Ta,{view:0,detail:0}),jf=Ye(zi),lo,oo,_i,Nn=z({},zi,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ro,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==_i&&(_i&&e.type==="mousemove"?(lo=e.screenX-_i.screenX,oo=e.screenY-_i.screenY):oo=lo=0,_i=e),lo)},movementY:function(e){return"movementY"in e?e.movementY:oo}}),kr=Ye(Nn),Zf=z({},Nn,{dataTransfer:0}),If=Ye(Zf),Kf=z({},zi,{relatedTarget:0}),so=Ye(Kf),Jf=z({},Ta,{animationName:0,elapsedTime:0,pseudoElement:0}),Pf=Ye(Jf),Wf=z({},Ta,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ff=Ye(Wf),$f=z({},Ta,{data:0}),qr=Ye($f),ep={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},tp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ap={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function ip(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ap[e])?!!t[e]:!1}function ro(){return ip}var np=z({},zi,{key:function(e){if(e.key){var t=ep[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=On(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?tp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ro,charCode:function(e){return e.type==="keypress"?On(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?On(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),lp=Ye(np),op=z({},Nn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vr=Ye(op),sp=z({},zi,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ro}),rp=Ye(sp),up=z({},Ta,{propertyName:0,elapsedTime:0,pseudoElement:0}),cp=Ye(up),dp=z({},Nn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),fp=Ye(dp),pp=z({},Ta,{newState:0,oldState:0}),mp=Ye(pp),hp=[9,13,27,32],uo=Ot&&"CompositionEvent"in window,Ni=null;Ot&&"documentMode"in document&&(Ni=document.documentMode);var gp=Ot&&"TextEvent"in window&&!Ni,Gr=Ot&&(!uo||Ni&&8<Ni&&11>=Ni),Yr=" ",Qr=!1;function Xr(e,t){switch(e){case"keyup":return hp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function jr(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Pa=!1;function vp(e,t){switch(e){case"compositionend":return jr(t);case"keypress":return t.which!==32?null:(Qr=!0,Yr);case"textInput":return e=t.data,e===Yr&&Qr?null:e;default:return null}}function yp(e,t){if(Pa)return e==="compositionend"||!uo&&Xr(e,t)?(e=Br(),Un=no=Wt=null,Pa=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gr&&t.locale!=="ko"?null:t.data;default:return null}}var Ap={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ap[e.type]:t==="textarea"}function Ir(e,t,a,i){Ka?Ja?Ja.push(i):Ja=[i]:Ka=i,t=Tl(t,"onChange"),0<t.length&&(a=new _n("onChange","change",null,a,i),e.push({event:a,listeners:t}))}var Bi=null,Hi=null;function Sp(e){xd(e,0)}function Bn(e){var t=Li(e);if(Rr(t))return e}function Kr(e,t){if(e==="change")return t}var Jr=!1;if(Ot){var co;if(Ot){var fo="oninput"in document;if(!fo){var Pr=document.createElement("div");Pr.setAttribute("oninput","return;"),fo=typeof Pr.oninput=="function"}co=fo}else co=!1;Jr=co&&(!document.documentMode||9<document.documentMode)}function Wr(){Bi&&(Bi.detachEvent("onpropertychange",Fr),Hi=Bi=null)}function Fr(e){if(e.propertyName==="value"&&Bn(Hi)){var t=[];Ir(t,Hi,e,to(e)),Nr(Sp,t)}}function bp(e,t,a){e==="focusin"?(Wr(),Bi=t,Hi=a,Bi.attachEvent("onpropertychange",Fr)):e==="focusout"&&Wr()}function Mp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Bn(Hi)}function Ep(e,t){if(e==="click")return Bn(t)}function Tp(e,t){if(e==="input"||e==="change")return Bn(t)}function Dp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var $e=typeof Object.is=="function"?Object.is:Dp;function ki(e,t){if($e(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var a=Object.keys(e),i=Object.keys(t);if(a.length!==i.length)return!1;for(i=0;i<a.length;i++){var n=a[i];if(!Yl.call(t,n)||!$e(e[n],t[n]))return!1}return!0}function $r(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function eu(e,t){var a=$r(e);e=0;for(var i;a;){if(a.nodeType===3){if(i=e+a.textContent.length,e<=t&&i>=t)return{node:a,offset:t-e};e=i}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=$r(a)}}function tu(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?tu(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function au(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=xn(e.document);t instanceof e.HTMLIFrameElement;){try{var a=typeof t.contentWindow.location.href=="string"}catch{a=!1}if(a)e=t.contentWindow;else break;t=xn(e.document)}return t}function po(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var wp=Ot&&"documentMode"in document&&11>=document.documentMode,Wa=null,mo=null,qi=null,ho=!1;function iu(e,t,a){var i=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;ho||Wa==null||Wa!==xn(i)||(i=Wa,"selectionStart"in i&&po(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),qi&&ki(qi,i)||(qi=i,i=Tl(mo,"onSelect"),0<i.length&&(t=new _n("onSelect","select",null,t,a),e.push({event:t,listeners:i}),t.target=Wa)))}function Da(e,t){var a={};return a[e.toLowerCase()]=t.toLowerCase(),a["Webkit"+e]="webkit"+t,a["Moz"+e]="moz"+t,a}var Fa={animationend:Da("Animation","AnimationEnd"),animationiteration:Da("Animation","AnimationIteration"),animationstart:Da("Animation","AnimationStart"),transitionrun:Da("Transition","TransitionRun"),transitionstart:Da("Transition","TransitionStart"),transitioncancel:Da("Transition","TransitionCancel"),transitionend:Da("Transition","TransitionEnd")},go={},nu={};Ot&&(nu=document.createElement("div").style,"AnimationEvent"in window||(delete Fa.animationend.animation,delete Fa.animationiteration.animation,delete Fa.animationstart.animation),"TransitionEvent"in window||delete Fa.transitionend.transition);function wa(e){if(go[e])return go[e];if(!Fa[e])return e;var t=Fa[e],a;for(a in t)if(t.hasOwnProperty(a)&&a in nu)return go[e]=t[a];return e}var lu=wa("animationend"),ou=wa("animationiteration"),su=wa("animationstart"),Cp=wa("transitionrun"),Rp=wa("transitionstart"),xp=wa("transitioncancel"),ru=wa("transitionend"),uu=new Map,vo="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");vo.push("scrollEnd");function yt(e,t){uu.set(e,t),Ea(t,[e])}var Hn=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},ut=[],$a=0,yo=0;function kn(){for(var e=$a,t=yo=$a=0;t<e;){var a=ut[t];ut[t++]=null;var i=ut[t];ut[t++]=null;var n=ut[t];ut[t++]=null;var l=ut[t];if(ut[t++]=null,i!==null&&n!==null){var o=i.pending;o===null?n.next=n:(n.next=o.next,o.next=n),i.pending=n}l!==0&&cu(a,n,l)}}function qn(e,t,a,i){ut[$a++]=e,ut[$a++]=t,ut[$a++]=a,ut[$a++]=i,yo|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function Ao(e,t,a,i){return qn(e,t,a,i),Vn(e)}function Ca(e,t){return qn(e,null,null,t),Vn(e)}function cu(e,t,a){e.lanes|=a;var i=e.alternate;i!==null&&(i.lanes|=a);for(var n=!1,l=e.return;l!==null;)l.childLanes|=a,i=l.alternate,i!==null&&(i.childLanes|=a),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(n=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,n&&t!==null&&(n=31-Fe(a),e=l.hiddenUpdates,i=e[n],i===null?e[n]=[t]:i.push(t),t.lane=a|536870912),l):null}function Vn(e){if(50<rn)throw rn=0,Rs=null,Error(h(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var ei={};function Lp(e,t,a,i){this.tag=e,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(e,t,a,i){return new Lp(e,t,a,i)}function So(e){return e=e.prototype,!(!e||!e.isReactComponent)}function zt(e,t){var a=e.alternate;return a===null?(a=et(e.tag,t,e.key,e.mode),a.elementType=e.elementType,a.type=e.type,a.stateNode=e.stateNode,a.alternate=e,e.alternate=a):(a.pendingProps=t,a.type=e.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=e.flags&65011712,a.childLanes=e.childLanes,a.lanes=e.lanes,a.child=e.child,a.memoizedProps=e.memoizedProps,a.memoizedState=e.memoizedState,a.updateQueue=e.updateQueue,t=e.dependencies,a.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},a.sibling=e.sibling,a.index=e.index,a.ref=e.ref,a.refCleanup=e.refCleanup,a}function du(e,t){e.flags&=65011714;var a=e.alternate;return a===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=a.childLanes,e.lanes=a.lanes,e.child=a.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=a.memoizedProps,e.memoizedState=a.memoizedState,e.updateQueue=a.updateQueue,e.type=a.type,t=a.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function Gn(e,t,a,i,n,l){var o=0;if(i=e,typeof e=="function")So(e)&&(o=1);else if(typeof e=="string")o=Nm(e,a,C.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case Mt:return e=et(31,a,t,n),e.elementType=Mt,e.lanes=l,e;case ze:return Ra(a.children,n,l,t);case Rt:o=8,n|=24;break;case Je:return e=et(12,a,t,n|2),e.elementType=Je,e.lanes=l,e;case bt:return e=et(13,a,t,n),e.elementType=bt,e.lanes=l,e;case ke:return e=et(19,a,t,n),e.elementType=ke,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Le:o=10;break e;case Kt:o=9;break e;case ot:o=11;break e;case X:o=14;break e;case qe:o=16,i=null;break e}o=29,a=Error(h(130,e===null?"null":typeof e,"")),i=null}return t=et(o,a,t,n),t.elementType=e,t.type=i,t.lanes=l,t}function Ra(e,t,a,i){return e=et(7,e,i,t),e.lanes=a,e}function bo(e,t,a){return e=et(6,e,null,t),e.lanes=a,e}function fu(e){var t=et(18,null,null,0);return t.stateNode=e,t}function Mo(e,t,a){return t=et(4,e.children!==null?e.children:[],e.key,t),t.lanes=a,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var pu=new WeakMap;function ct(e,t){if(typeof e=="object"&&e!==null){var a=pu.get(e);return a!==void 0?a:(t={value:e,source:t,stack:fr(t)},pu.set(e,t),t)}return{value:e,source:t,stack:fr(t)}}var ti=[],ai=0,Yn=null,Vi=0,dt=[],ft=0,Ft=null,Tt=1,Dt="";function _t(e,t){ti[ai++]=Vi,ti[ai++]=Yn,Yn=e,Vi=t}function mu(e,t,a){dt[ft++]=Tt,dt[ft++]=Dt,dt[ft++]=Ft,Ft=e;var i=Tt;e=Dt;var n=32-Fe(i)-1;i&=~(1<<n),a+=1;var l=32-Fe(t)+n;if(30<l){var o=n-n%5;l=(i&(1<<o)-1).toString(32),i>>=o,n-=o,Tt=1<<32-Fe(t)+n|a<<n|i,Dt=l+e}else Tt=1<<l|a<<n|i,Dt=e}function Eo(e){e.return!==null&&(_t(e,1),mu(e,1,0))}function To(e){for(;e===Yn;)Yn=ti[--ai],ti[ai]=null,Vi=ti[--ai],ti[ai]=null;for(;e===Ft;)Ft=dt[--ft],dt[ft]=null,Dt=dt[--ft],dt[ft]=null,Tt=dt[--ft],dt[ft]=null}function hu(e,t){dt[ft++]=Tt,dt[ft++]=Dt,dt[ft++]=Ft,Tt=t.id,Dt=t.overflow,Ft=e}var we=null,se=null,j=!1,$t=null,pt=!1,Do=Error(h(519));function ea(e){var t=Error(h(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw Gi(ct(t,e)),Do}function gu(e){var t=e.stateNode,a=e.type,i=e.memoizedProps;switch(t[De]=e,t[Ge]=i,a){case"dialog":G("cancel",t),G("close",t);break;case"iframe":case"object":case"embed":G("load",t);break;case"video":case"audio":for(a=0;a<cn.length;a++)G(cn[a],t);break;case"source":G("error",t);break;case"img":case"image":case"link":G("error",t),G("load",t);break;case"details":G("toggle",t);break;case"input":G("invalid",t),xr(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":G("invalid",t);break;case"textarea":G("invalid",t),Ur(t,i.value,i.defaultValue,i.children)}a=i.children,typeof a!="string"&&typeof a!="number"&&typeof a!="bigint"||t.textContent===""+a||i.suppressHydrationWarning===!0||zd(t.textContent,a)?(i.popover!=null&&(G("beforetoggle",t),G("toggle",t)),i.onScroll!=null&&G("scroll",t),i.onScrollEnd!=null&&G("scrollend",t),i.onClick!=null&&(t.onclick=Ut),t=!0):t=!1,t||ea(e,!0)}function vu(e){for(we=e.return;we;)switch(we.tag){case 5:case 31:case 13:pt=!1;return;case 27:case 3:pt=!0;return;default:we=we.return}}function ii(e){if(e!==we)return!1;if(!j)return vu(e),j=!0,!1;var t=e.tag,a;if((a=t!==3&&t!==27)&&((a=t===5)&&(a=e.type,a=!(a!=="form"&&a!=="button")||Qs(e.type,e.memoizedProps)),a=!a),a&&se&&ea(e),vu(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));se=Yd(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(317));se=Yd(e)}else t===27?(t=se,ma(e.type)?(e=Ks,Ks=null,se=e):se=t):se=we?ht(e.stateNode.nextSibling):null;return!0}function xa(){se=we=null,j=!1}function wo(){var e=$t;return e!==null&&(Ze===null?Ze=e:Ze.push.apply(Ze,e),$t=null),e}function Gi(e){$t===null?$t=[e]:$t.push(e)}var Co=c(null),La=null,Nt=null;function ta(e,t,a){T(Co,t._currentValue),t._currentValue=a}function Bt(e){e._currentValue=Co.current,b(Co)}function Ro(e,t,a){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===a)break;e=e.return}}function xo(e,t,a,i){var n=e.child;for(n!==null&&(n.return=e);n!==null;){var l=n.dependencies;if(l!==null){var o=n.child;l=l.firstContext;e:for(;l!==null;){var s=l;l=n;for(var r=0;r<t.length;r++)if(s.context===t[r]){l.lanes|=a,s=l.alternate,s!==null&&(s.lanes|=a),Ro(l.return,a,e),i||(o=null);break e}l=s.next}}else if(n.tag===18){if(o=n.return,o===null)throw Error(h(341));o.lanes|=a,l=o.alternate,l!==null&&(l.lanes|=a),Ro(o,a,e),o=null}else o=n.child;if(o!==null)o.return=n;else for(o=n;o!==null;){if(o===e){o=null;break}if(n=o.sibling,n!==null){n.return=o.return,o=n;break}o=o.return}n=o}}function ni(e,t,a,i){e=null;for(var n=t,l=!1;n!==null;){if(!l){if((n.flags&524288)!==0)l=!0;else if((n.flags&262144)!==0)break}if(n.tag===10){var o=n.alternate;if(o===null)throw Error(h(387));if(o=o.memoizedProps,o!==null){var s=n.type;$e(n.pendingProps.value,o.value)||(e!==null?e.push(s):e=[s])}}else if(n===F.current){if(o=n.alternate,o===null)throw Error(h(387));o.memoizedState.memoizedState!==n.memoizedState.memoizedState&&(e!==null?e.push(hn):e=[hn])}n=n.return}e!==null&&xo(t,e,a,i),t.flags|=262144}function Qn(e){for(e=e.firstContext;e!==null;){if(!$e(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function Ua(e){La=e,Nt=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function Ce(e){return yu(La,e)}function Xn(e,t){return La===null&&Ua(e),yu(e,t)}function yu(e,t){var a=t._currentValue;if(t={context:t,memoizedValue:a,next:null},Nt===null){if(e===null)throw Error(h(308));Nt=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else Nt=Nt.next=t;return a}var Up=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(a,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(a){return a()})}},Op=w.unstable_scheduleCallback,zp=w.unstable_NormalPriority,ye={$$typeof:Le,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function Lo(){return{controller:new Up,data:new Map,refCount:0}}function Yi(e){e.refCount--,e.refCount===0&&Op(zp,function(){e.controller.abort()})}var Qi=null,Uo=0,li=0,oi=null;function _p(e,t){if(Qi===null){var a=Qi=[];Uo=0,li=_s(),oi={status:"pending",value:void 0,then:function(i){a.push(i)}}}return Uo++,t.then(Au,Au),t}function Au(){if(--Uo===0&&Qi!==null){oi!==null&&(oi.status="fulfilled");var e=Qi;Qi=null,li=0,oi=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function Np(e,t){var a=[],i={status:"pending",value:null,reason:null,then:function(n){a.push(n)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var n=0;n<a.length;n++)(0,a[n])(t)},function(n){for(i.status="rejected",i.reason=n,n=0;n<a.length;n++)(0,a[n])(void 0)}),i}var Su=y.S;y.S=function(e,t){id=Pe(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&_p(e,t),Su!==null&&Su(e,t)};var Oa=c(null);function Oo(){var e=Oa.current;return e!==null?e:oe.pooledCache}function jn(e,t){t===null?T(Oa,Oa.current):T(Oa,t.pool)}function bu(){var e=Oo();return e===null?null:{parent:ye._currentValue,pool:e}}var si=Error(h(460)),zo=Error(h(474)),Zn=Error(h(542)),In={then:function(){}};function Mu(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Eu(e,t,a){switch(a=e[a],a===void 0?e.push(t):a!==t&&(t.then(Ut,Ut),t=a),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Du(e),e;default:if(typeof t.status=="string")t.then(Ut,Ut);else{if(e=oe,e!==null&&100<e.shellSuspendCounter)throw Error(h(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var n=t;n.status="fulfilled",n.value=i}},function(i){if(t.status==="pending"){var n=t;n.status="rejected",n.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Du(e),e}throw _a=t,si}}function za(e){try{var t=e._init;return t(e._payload)}catch(a){throw a!==null&&typeof a=="object"&&typeof a.then=="function"?(_a=a,si):a}}var _a=null;function Tu(){if(_a===null)throw Error(h(459));var e=_a;return _a=null,e}function Du(e){if(e===si||e===Zn)throw Error(h(483))}var ri=null,Xi=0;function Kn(e){var t=Xi;return Xi+=1,ri===null&&(ri=[]),Eu(ri,e,t)}function ji(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function Jn(e,t){throw t.$$typeof===ue?Error(h(525)):(e=Object.prototype.toString.call(t),Error(h(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wu(e){function t(d,u){if(e){var f=d.deletions;f===null?(d.deletions=[u],d.flags|=16):f.push(u)}}function a(d,u){if(!e)return null;for(;u!==null;)t(d,u),u=u.sibling;return null}function i(d){for(var u=new Map;d!==null;)d.key!==null?u.set(d.key,d):u.set(d.index,d),d=d.sibling;return u}function n(d,u){return d=zt(d,u),d.index=0,d.sibling=null,d}function l(d,u,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<u?(d.flags|=67108866,u):f):(d.flags|=67108866,u)):(d.flags|=1048576,u)}function o(d){return e&&d.alternate===null&&(d.flags|=67108866),d}function s(d,u,f,A){return u===null||u.tag!==6?(u=bo(f,d.mode,A),u.return=d,u):(u=n(u,f),u.return=d,u)}function r(d,u,f,A){var x=f.type;return x===ze?v(d,u,f.props.children,A,f.key):u!==null&&(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&za(x)===u.type)?(u=n(u,f.props),ji(u,f),u.return=d,u):(u=Gn(f.type,f.key,f.props,null,d.mode,A),ji(u,f),u.return=d,u)}function p(d,u,f,A){return u===null||u.tag!==4||u.stateNode.containerInfo!==f.containerInfo||u.stateNode.implementation!==f.implementation?(u=Mo(f,d.mode,A),u.return=d,u):(u=n(u,f.children||[]),u.return=d,u)}function v(d,u,f,A,x){return u===null||u.tag!==7?(u=Ra(f,d.mode,A,x),u.return=d,u):(u=n(u,f),u.return=d,u)}function S(d,u,f){if(typeof u=="string"&&u!==""||typeof u=="number"||typeof u=="bigint")return u=bo(""+u,d.mode,f),u.return=d,u;if(typeof u=="object"&&u!==null){switch(u.$$typeof){case Ke:return f=Gn(u.type,u.key,u.props,null,d.mode,f),ji(f,u),f.return=d,f;case He:return u=Mo(u,d.mode,f),u.return=d,u;case qe:return u=za(u),S(d,u,f)}if(vt(u)||Ve(u))return u=Ra(u,d.mode,f,null),u.return=d,u;if(typeof u.then=="function")return S(d,Kn(u),f);if(u.$$typeof===Le)return S(d,Xn(d,u),f);Jn(d,u)}return null}function m(d,u,f,A){var x=u!==null?u.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return x!==null?null:s(d,u,""+f,A);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Ke:return f.key===x?r(d,u,f,A):null;case He:return f.key===x?p(d,u,f,A):null;case qe:return f=za(f),m(d,u,f,A)}if(vt(f)||Ve(f))return x!==null?null:v(d,u,f,A,null);if(typeof f.then=="function")return m(d,u,Kn(f),A);if(f.$$typeof===Le)return m(d,u,Xn(d,f),A);Jn(d,f)}return null}function g(d,u,f,A,x){if(typeof A=="string"&&A!==""||typeof A=="number"||typeof A=="bigint")return d=d.get(f)||null,s(u,d,""+A,x);if(typeof A=="object"&&A!==null){switch(A.$$typeof){case Ke:return d=d.get(A.key===null?f:A.key)||null,r(u,d,A,x);case He:return d=d.get(A.key===null?f:A.key)||null,p(u,d,A,x);case qe:return A=za(A),g(d,u,f,A,x)}if(vt(A)||Ve(A))return d=d.get(f)||null,v(u,d,A,x,null);if(typeof A.then=="function")return g(d,u,f,Kn(A),x);if(A.$$typeof===Le)return g(d,u,f,Xn(u,A),x);Jn(u,A)}return null}function D(d,u,f,A){for(var x=null,Z=null,R=u,k=u=0,Q=null;R!==null&&k<f.length;k++){R.index>k?(Q=R,R=null):Q=R.sibling;var I=m(d,R,f[k],A);if(I===null){R===null&&(R=Q);break}e&&R&&I.alternate===null&&t(d,R),u=l(I,u,k),Z===null?x=I:Z.sibling=I,Z=I,R=Q}if(k===f.length)return a(d,R),j&&_t(d,k),x;if(R===null){for(;k<f.length;k++)R=S(d,f[k],A),R!==null&&(u=l(R,u,k),Z===null?x=R:Z.sibling=R,Z=R);return j&&_t(d,k),x}for(R=i(R);k<f.length;k++)Q=g(R,d,k,f[k],A),Q!==null&&(e&&Q.alternate!==null&&R.delete(Q.key===null?k:Q.key),u=l(Q,u,k),Z===null?x=Q:Z.sibling=Q,Z=Q);return e&&R.forEach(function(Aa){return t(d,Aa)}),j&&_t(d,k),x}function U(d,u,f,A){if(f==null)throw Error(h(151));for(var x=null,Z=null,R=u,k=u=0,Q=null,I=f.next();R!==null&&!I.done;k++,I=f.next()){R.index>k?(Q=R,R=null):Q=R.sibling;var Aa=m(d,R,I.value,A);if(Aa===null){R===null&&(R=Q);break}e&&R&&Aa.alternate===null&&t(d,R),u=l(Aa,u,k),Z===null?x=Aa:Z.sibling=Aa,Z=Aa,R=Q}if(I.done)return a(d,R),j&&_t(d,k),x;if(R===null){for(;!I.done;k++,I=f.next())I=S(d,I.value,A),I!==null&&(u=l(I,u,k),Z===null?x=I:Z.sibling=I,Z=I);return j&&_t(d,k),x}for(R=i(R);!I.done;k++,I=f.next())I=g(R,d,k,I.value,A),I!==null&&(e&&I.alternate!==null&&R.delete(I.key===null?k:I.key),u=l(I,u,k),Z===null?x=I:Z.sibling=I,Z=I);return e&&R.forEach(function(Zm){return t(d,Zm)}),j&&_t(d,k),x}function ne(d,u,f,A){if(typeof f=="object"&&f!==null&&f.type===ze&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Ke:e:{for(var x=f.key;u!==null;){if(u.key===x){if(x=f.type,x===ze){if(u.tag===7){a(d,u.sibling),A=n(u,f.props.children),A.return=d,d=A;break e}}else if(u.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===qe&&za(x)===u.type){a(d,u.sibling),A=n(u,f.props),ji(A,f),A.return=d,d=A;break e}a(d,u);break}else t(d,u);u=u.sibling}f.type===ze?(A=Ra(f.props.children,d.mode,A,f.key),A.return=d,d=A):(A=Gn(f.type,f.key,f.props,null,d.mode,A),ji(A,f),A.return=d,d=A)}return o(d);case He:e:{for(x=f.key;u!==null;){if(u.key===x)if(u.tag===4&&u.stateNode.containerInfo===f.containerInfo&&u.stateNode.implementation===f.implementation){a(d,u.sibling),A=n(u,f.children||[]),A.return=d,d=A;break e}else{a(d,u);break}else t(d,u);u=u.sibling}A=Mo(f,d.mode,A),A.return=d,d=A}return o(d);case qe:return f=za(f),ne(d,u,f,A)}if(vt(f))return D(d,u,f,A);if(Ve(f)){if(x=Ve(f),typeof x!="function")throw Error(h(150));return f=x.call(f),U(d,u,f,A)}if(typeof f.then=="function")return ne(d,u,Kn(f),A);if(f.$$typeof===Le)return ne(d,u,Xn(d,f),A);Jn(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,u!==null&&u.tag===6?(a(d,u.sibling),A=n(u,f),A.return=d,d=A):(a(d,u),A=bo(f,d.mode,A),A.return=d,d=A),o(d)):a(d,u)}return function(d,u,f,A){try{Xi=0;var x=ne(d,u,f,A);return ri=null,x}catch(R){if(R===si||R===Zn)throw R;var Z=et(29,R,null,d.mode);return Z.lanes=A,Z.return=d,Z}finally{}}}var Na=wu(!0),Cu=wu(!1),aa=!1;function _o(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function No(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function ia(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function na(e,t,a){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(J&2)!==0){var n=i.pending;return n===null?t.next=t:(t.next=n.next,n.next=t),i.pending=t,t=Vn(e),cu(e,null,a),t}return qn(e,i,t,a),Vn(e)}function Zi(e,t,a){if(t=t.updateQueue,t!==null&&(t=t.shared,(a&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,yr(e,a)}}function Bo(e,t){var a=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,a===i)){var n=null,l=null;if(a=a.firstBaseUpdate,a!==null){do{var o={lane:a.lane,tag:a.tag,payload:a.payload,callback:null,next:null};l===null?n=l=o:l=l.next=o,a=a.next}while(a!==null);l===null?n=l=t:l=l.next=t}else n=l=t;a={baseState:i.baseState,firstBaseUpdate:n,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=a;return}e=a.lastBaseUpdate,e===null?a.firstBaseUpdate=t:e.next=t,a.lastBaseUpdate=t}var Ho=!1;function Ii(){if(Ho){var e=oi;if(e!==null)throw e}}function Ki(e,t,a,i){Ho=!1;var n=e.updateQueue;aa=!1;var l=n.firstBaseUpdate,o=n.lastBaseUpdate,s=n.shared.pending;if(s!==null){n.shared.pending=null;var r=s,p=r.next;r.next=null,o===null?l=p:o.next=p,o=r;var v=e.alternate;v!==null&&(v=v.updateQueue,s=v.lastBaseUpdate,s!==o&&(s===null?v.firstBaseUpdate=p:s.next=p,v.lastBaseUpdate=r))}if(l!==null){var S=n.baseState;o=0,v=p=r=null,s=l;do{var m=s.lane&-536870913,g=m!==s.lane;if(g?(Y&m)===m:(i&m)===m){m!==0&&m===li&&(Ho=!0),v!==null&&(v=v.next={lane:0,tag:s.tag,payload:s.payload,callback:null,next:null});e:{var D=e,U=s;m=t;var ne=a;switch(U.tag){case 1:if(D=U.payload,typeof D=="function"){S=D.call(ne,S,m);break e}S=D;break e;case 3:D.flags=D.flags&-65537|128;case 0:if(D=U.payload,m=typeof D=="function"?D.call(ne,S,m):D,m==null)break e;S=z({},S,m);break e;case 2:aa=!0}}m=s.callback,m!==null&&(e.flags|=64,g&&(e.flags|=8192),g=n.callbacks,g===null?n.callbacks=[m]:g.push(m))}else g={lane:m,tag:s.tag,payload:s.payload,callback:s.callback,next:null},v===null?(p=v=g,r=S):v=v.next=g,o|=m;if(s=s.next,s===null){if(s=n.shared.pending,s===null)break;g=s,s=g.next,g.next=null,n.lastBaseUpdate=g,n.shared.pending=null}}while(!0);v===null&&(r=S),n.baseState=r,n.firstBaseUpdate=p,n.lastBaseUpdate=v,l===null&&(n.shared.lanes=0),ua|=o,e.lanes=o,e.memoizedState=S}}function Ru(e,t){if(typeof e!="function")throw Error(h(191,e));e.call(t)}function xu(e,t){var a=e.callbacks;if(a!==null)for(e.callbacks=null,e=0;e<a.length;e++)Ru(a[e],t)}var ui=c(null),Pn=c(0);function Lu(e,t){e=jt,T(Pn,e),T(ui,t),jt=e|t.baseLanes}function ko(){T(Pn,jt),T(ui,ui.current)}function qo(){jt=Pn.current,b(ui),b(Pn)}var tt=c(null),mt=null;function la(e){var t=e.alternate;T(ge,ge.current&1),T(tt,e),mt===null&&(t===null||ui.current!==null||t.memoizedState!==null)&&(mt=e)}function Vo(e){T(ge,ge.current),T(tt,e),mt===null&&(mt=e)}function Uu(e){e.tag===22?(T(ge,ge.current),T(tt,e),mt===null&&(mt=e)):oa()}function oa(){T(ge,ge.current),T(tt,tt.current)}function at(e){b(tt),mt===e&&(mt=null),b(ge)}var ge=c(0);function Wn(e){for(var t=e;t!==null;){if(t.tag===13){var a=t.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||Zs(a)||Is(a)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ht=0,H=null,ae=null,Ae=null,Fn=!1,ci=!1,Ba=!1,$n=0,Ji=0,di=null,Bp=0;function fe(){throw Error(h(321))}function Go(e,t){if(t===null)return!1;for(var a=0;a<t.length&&a<e.length;a++)if(!$e(e[a],t[a]))return!1;return!0}function Yo(e,t,a,i,n,l){return Ht=l,H=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,y.H=e===null||e.memoizedState===null?mc:is,Ba=!1,l=a(i,n),Ba=!1,ci&&(l=zu(t,a,i,n)),Ou(e),l}function Ou(e){y.H=Fi;var t=ae!==null&&ae.next!==null;if(Ht=0,Ae=ae=H=null,Fn=!1,Ji=0,di=null,t)throw Error(h(300));e===null||Se||(e=e.dependencies,e!==null&&Qn(e)&&(Se=!0))}function zu(e,t,a,i){H=e;var n=0;do{if(ci&&(di=null),Ji=0,ci=!1,25<=n)throw Error(h(301));if(n+=1,Ae=ae=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}y.H=hc,l=t(a,i)}while(ci);return l}function Hp(){var e=y.H,t=e.useState()[0];return t=typeof t.then=="function"?Pi(t):t,e=e.useState()[0],(ae!==null?ae.memoizedState:null)!==e&&(H.flags|=1024),t}function Qo(){var e=$n!==0;return $n=0,e}function Xo(e,t,a){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a}function jo(e){if(Fn){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}Fn=!1}Ht=0,Ae=ae=H=null,ci=!1,Ji=$n=0,di=null}function Ne(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ae===null?H.memoizedState=Ae=e:Ae=Ae.next=e,Ae}function ve(){if(ae===null){var e=H.alternate;e=e!==null?e.memoizedState:null}else e=ae.next;var t=Ae===null?H.memoizedState:Ae.next;if(t!==null)Ae=t,ae=e;else{if(e===null)throw H.alternate===null?Error(h(467)):Error(h(310));ae=e,e={memoizedState:ae.memoizedState,baseState:ae.baseState,baseQueue:ae.baseQueue,queue:ae.queue,next:null},Ae===null?H.memoizedState=Ae=e:Ae=Ae.next=e}return Ae}function el(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Pi(e){var t=Ji;return Ji+=1,di===null&&(di=[]),e=Eu(di,e,t),t=H,(Ae===null?t.memoizedState:Ae.next)===null&&(t=t.alternate,y.H=t===null||t.memoizedState===null?mc:is),e}function tl(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return Pi(e);if(e.$$typeof===Le)return Ce(e)}throw Error(h(438,String(e)))}function Zo(e){var t=null,a=H.updateQueue;if(a!==null&&(t=a.memoCache),t==null){var i=H.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(n){return n.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),a===null&&(a=el(),H.updateQueue=a),a.memoCache=t,a=t.data[t.index],a===void 0)for(a=t.data[t.index]=Array(e),i=0;i<e;i++)a[i]=Va;return t.index++,a}function kt(e,t){return typeof t=="function"?t(e):t}function al(e){var t=ve();return Io(t,ae,e)}function Io(e,t,a){var i=e.queue;if(i===null)throw Error(h(311));i.lastRenderedReducer=a;var n=e.baseQueue,l=i.pending;if(l!==null){if(n!==null){var o=n.next;n.next=l.next,l.next=o}t.baseQueue=n=l,i.pending=null}if(l=e.baseState,n===null)e.memoizedState=l;else{t=n.next;var s=o=null,r=null,p=t,v=!1;do{var S=p.lane&-536870913;if(S!==p.lane?(Y&S)===S:(Ht&S)===S){var m=p.revertLane;if(m===0)r!==null&&(r=r.next={lane:0,revertLane:0,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null}),S===li&&(v=!0);else if((Ht&m)===m){p=p.next,m===li&&(v=!0);continue}else S={lane:0,revertLane:p.revertLane,gesture:null,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=S,o=l):r=r.next=S,H.lanes|=m,ua|=m;S=p.action,Ba&&a(l,S),l=p.hasEagerState?p.eagerState:a(l,S)}else m={lane:S,revertLane:p.revertLane,gesture:p.gesture,action:p.action,hasEagerState:p.hasEagerState,eagerState:p.eagerState,next:null},r===null?(s=r=m,o=l):r=r.next=m,H.lanes|=S,ua|=S;p=p.next}while(p!==null&&p!==t);if(r===null?o=l:r.next=s,!$e(l,e.memoizedState)&&(Se=!0,v&&(a=oi,a!==null)))throw a;e.memoizedState=l,e.baseState=o,e.baseQueue=r,i.lastRenderedState=l}return n===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function Ko(e){var t=ve(),a=t.queue;if(a===null)throw Error(h(311));a.lastRenderedReducer=e;var i=a.dispatch,n=a.pending,l=t.memoizedState;if(n!==null){a.pending=null;var o=n=n.next;do l=e(l,o.action),o=o.next;while(o!==n);$e(l,t.memoizedState)||(Se=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),a.lastRenderedState=l}return[l,i]}function _u(e,t,a){var i=H,n=ve(),l=j;if(l){if(a===void 0)throw Error(h(407));a=a()}else a=t();var o=!$e((ae||n).memoizedState,a);if(o&&(n.memoizedState=a,Se=!0),n=n.queue,Wo(Hu.bind(null,i,n,e),[e]),n.getSnapshot!==t||o||Ae!==null&&Ae.memoizedState.tag&1){if(i.flags|=2048,fi(9,{destroy:void 0},Bu.bind(null,i,n,a,t),null),oe===null)throw Error(h(349));l||(Ht&127)!==0||Nu(i,t,a)}return a}function Nu(e,t,a){e.flags|=16384,e={getSnapshot:t,value:a},t=H.updateQueue,t===null?(t=el(),H.updateQueue=t,t.stores=[e]):(a=t.stores,a===null?t.stores=[e]:a.push(e))}function Bu(e,t,a,i){t.value=a,t.getSnapshot=i,ku(t)&&qu(e)}function Hu(e,t,a){return a(function(){ku(t)&&qu(e)})}function ku(e){var t=e.getSnapshot;e=e.value;try{var a=t();return!$e(e,a)}catch{return!0}}function qu(e){var t=Ca(e,2);t!==null&&Ie(t,e,2)}function Jo(e){var t=Ne();if(typeof e=="function"){var a=e;if(e=a(),Ba){Jt(!0);try{a()}finally{Jt(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:e},t}function Vu(e,t,a,i){return e.baseState=a,Io(e,ae,typeof i=="function"?i:kt)}function kp(e,t,a,i,n){if(ll(e))throw Error(h(485));if(e=t.action,e!==null){var l={payload:n,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(o){l.listeners.push(o)}};y.T!==null?a(!0):l.isTransition=!1,i(l),a=t.pending,a===null?(l.next=t.pending=l,Gu(t,l)):(l.next=a.next,t.pending=a.next=l)}}function Gu(e,t){var a=t.action,i=t.payload,n=e.state;if(t.isTransition){var l=y.T,o={};y.T=o;try{var s=a(n,i),r=y.S;r!==null&&r(o,s),Yu(e,t,s)}catch(p){Po(e,t,p)}finally{l!==null&&o.types!==null&&(l.types=o.types),y.T=l}}else try{l=a(n,i),Yu(e,t,l)}catch(p){Po(e,t,p)}}function Yu(e,t,a){a!==null&&typeof a=="object"&&typeof a.then=="function"?a.then(function(i){Qu(e,t,i)},function(i){return Po(e,t,i)}):Qu(e,t,a)}function Qu(e,t,a){t.status="fulfilled",t.value=a,Xu(t),e.state=a,t=e.pending,t!==null&&(a=t.next,a===t?e.pending=null:(a=a.next,t.next=a,Gu(e,a)))}function Po(e,t,a){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=a,Xu(t),t=t.next;while(t!==i)}e.action=null}function Xu(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function ju(e,t){return t}function Zu(e,t){if(j){var a=oe.formState;if(a!==null){e:{var i=H;if(j){if(se){t:{for(var n=se,l=pt;n.nodeType!==8;){if(!l){n=null;break t}if(n=ht(n.nextSibling),n===null){n=null;break t}}l=n.data,n=l==="F!"||l==="F"?n:null}if(n){se=ht(n.nextSibling),i=n.data==="F!";break e}}ea(i)}i=!1}i&&(t=a[0])}}return a=Ne(),a.memoizedState=a.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:ju,lastRenderedState:t},a.queue=i,a=dc.bind(null,H,i),i.dispatch=a,i=Jo(!1),l=as.bind(null,H,!1,i.queue),i=Ne(),n={state:t,dispatch:null,action:e,pending:null},i.queue=n,a=kp.bind(null,H,n,l,a),n.dispatch=a,i.memoizedState=e,[t,a,!1]}function Iu(e){var t=ve();return Ku(t,ae,e)}function Ku(e,t,a){if(t=Io(e,t,ju)[0],e=al(kt)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=Pi(t)}catch(o){throw o===si?Zn:o}else i=t;t=ve();var n=t.queue,l=n.dispatch;return a!==t.memoizedState&&(H.flags|=2048,fi(9,{destroy:void 0},qp.bind(null,n,a),null)),[i,l,e]}function qp(e,t){e.action=t}function Ju(e){var t=ve(),a=ae;if(a!==null)return Ku(t,a,e);ve(),t=t.memoizedState,a=ve();var i=a.queue.dispatch;return a.memoizedState=e,[t,i,!1]}function fi(e,t,a,i){return e={tag:e,create:a,deps:i,inst:t,next:null},t=H.updateQueue,t===null&&(t=el(),H.updateQueue=t),a=t.lastEffect,a===null?t.lastEffect=e.next=e:(i=a.next,a.next=e,e.next=i,t.lastEffect=e),e}function Pu(){return ve().memoizedState}function il(e,t,a,i){var n=Ne();H.flags|=e,n.memoizedState=fi(1|t,{destroy:void 0},a,i===void 0?null:i)}function nl(e,t,a,i){var n=ve();i=i===void 0?null:i;var l=n.memoizedState.inst;ae!==null&&i!==null&&Go(i,ae.memoizedState.deps)?n.memoizedState=fi(t,l,a,i):(H.flags|=e,n.memoizedState=fi(1|t,l,a,i))}function Wu(e,t){il(8390656,8,e,t)}function Wo(e,t){nl(2048,8,e,t)}function Vp(e){H.flags|=4;var t=H.updateQueue;if(t===null)t=el(),H.updateQueue=t,t.events=[e];else{var a=t.events;a===null?t.events=[e]:a.push(e)}}function Fu(e){var t=ve().memoizedState;return Vp({ref:t,nextImpl:e}),function(){if((J&2)!==0)throw Error(h(440));return t.impl.apply(void 0,arguments)}}function $u(e,t){return nl(4,2,e,t)}function ec(e,t){return nl(4,4,e,t)}function tc(e,t){if(typeof t=="function"){e=e();var a=t(e);return function(){typeof a=="function"?a():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function ac(e,t,a){a=a!=null?a.concat([e]):null,nl(4,4,tc.bind(null,t,e),a)}function Fo(){}function ic(e,t){var a=ve();t=t===void 0?null:t;var i=a.memoizedState;return t!==null&&Go(t,i[1])?i[0]:(a.memoizedState=[e,t],e)}function nc(e,t){var a=ve();t=t===void 0?null:t;var i=a.memoizedState;if(t!==null&&Go(t,i[1]))return i[0];if(i=e(),Ba){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[i,t],i}function $o(e,t,a){return a===void 0||(Ht&1073741824)!==0&&(Y&261930)===0?e.memoizedState=t:(e.memoizedState=a,e=ld(),H.lanes|=e,ua|=e,a)}function lc(e,t,a,i){return $e(a,t)?a:ui.current!==null?(e=$o(e,a,i),$e(e,t)||(Se=!0),e):(Ht&42)===0||(Ht&1073741824)!==0&&(Y&261930)===0?(Se=!0,e.memoizedState=a):(e=ld(),H.lanes|=e,ua|=e,t)}function oc(e,t,a,i,n){var l=E.p;E.p=l!==0&&8>l?l:8;var o=y.T,s={};y.T=s,as(e,!1,t,a);try{var r=n(),p=y.S;if(p!==null&&p(s,r),r!==null&&typeof r=="object"&&typeof r.then=="function"){var v=Np(r,i);Wi(e,t,v,lt(e))}else Wi(e,t,i,lt(e))}catch(S){Wi(e,t,{then:function(){},status:"rejected",reason:S},lt())}finally{E.p=l,o!==null&&s.types!==null&&(o.types=s.types),y.T=o}}function Gp(){}function es(e,t,a,i){if(e.tag!==5)throw Error(h(476));var n=sc(e).queue;oc(e,n,t,_,a===null?Gp:function(){return rc(e),a(i)})}function sc(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:_,baseState:_,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:_},next:null};var a={};return t.next={memoizedState:a,baseState:a,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:kt,lastRenderedState:a},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function rc(e){var t=sc(e);t.next===null&&(t=e.alternate.memoizedState),Wi(e,t.next.queue,{},lt())}function ts(){return Ce(hn)}function uc(){return ve().memoizedState}function cc(){return ve().memoizedState}function Yp(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var a=lt();e=ia(a);var i=na(t,e,a);i!==null&&(Ie(i,t,a),Zi(i,t,a)),t={cache:Lo()},e.payload=t;return}t=t.return}}function Qp(e,t,a){var i=lt();a={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null},ll(e)?fc(t,a):(a=Ao(e,t,a,i),a!==null&&(Ie(a,e,i),pc(a,t,i)))}function dc(e,t,a){var i=lt();Wi(e,t,a,i)}function Wi(e,t,a,i){var n={lane:i,revertLane:0,gesture:null,action:a,hasEagerState:!1,eagerState:null,next:null};if(ll(e))fc(t,n);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var o=t.lastRenderedState,s=l(o,a);if(n.hasEagerState=!0,n.eagerState=s,$e(s,o))return qn(e,t,n,0),oe===null&&kn(),!1}catch{}finally{}if(a=Ao(e,t,n,i),a!==null)return Ie(a,e,i),pc(a,t,i),!0}return!1}function as(e,t,a,i){if(i={lane:2,revertLane:_s(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},ll(e)){if(t)throw Error(h(479))}else t=Ao(e,a,i,2),t!==null&&Ie(t,e,2)}function ll(e){var t=e.alternate;return e===H||t!==null&&t===H}function fc(e,t){ci=Fn=!0;var a=e.pending;a===null?t.next=t:(t.next=a.next,a.next=t),e.pending=t}function pc(e,t,a){if((a&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,a|=i,t.lanes=a,yr(e,a)}}var Fi={readContext:Ce,use:tl,useCallback:fe,useContext:fe,useEffect:fe,useImperativeHandle:fe,useLayoutEffect:fe,useInsertionEffect:fe,useMemo:fe,useReducer:fe,useRef:fe,useState:fe,useDebugValue:fe,useDeferredValue:fe,useTransition:fe,useSyncExternalStore:fe,useId:fe,useHostTransitionStatus:fe,useFormState:fe,useActionState:fe,useOptimistic:fe,useMemoCache:fe,useCacheRefresh:fe};Fi.useEffectEvent=fe;var mc={readContext:Ce,use:tl,useCallback:function(e,t){return Ne().memoizedState=[e,t===void 0?null:t],e},useContext:Ce,useEffect:Wu,useImperativeHandle:function(e,t,a){a=a!=null?a.concat([e]):null,il(4194308,4,tc.bind(null,t,e),a)},useLayoutEffect:function(e,t){return il(4194308,4,e,t)},useInsertionEffect:function(e,t){il(4,2,e,t)},useMemo:function(e,t){var a=Ne();t=t===void 0?null:t;var i=e();if(Ba){Jt(!0);try{e()}finally{Jt(!1)}}return a.memoizedState=[i,t],i},useReducer:function(e,t,a){var i=Ne();if(a!==void 0){var n=a(t);if(Ba){Jt(!0);try{a(t)}finally{Jt(!1)}}}else n=t;return i.memoizedState=i.baseState=n,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:n},i.queue=e,e=e.dispatch=Qp.bind(null,H,e),[i.memoizedState,e]},useRef:function(e){var t=Ne();return e={current:e},t.memoizedState=e},useState:function(e){e=Jo(e);var t=e.queue,a=dc.bind(null,H,t);return t.dispatch=a,[e.memoizedState,a]},useDebugValue:Fo,useDeferredValue:function(e,t){var a=Ne();return $o(a,e,t)},useTransition:function(){var e=Jo(!1);return e=oc.bind(null,H,e.queue,!0,!1),Ne().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,a){var i=H,n=Ne();if(j){if(a===void 0)throw Error(h(407));a=a()}else{if(a=t(),oe===null)throw Error(h(349));(Y&127)!==0||Nu(i,t,a)}n.memoizedState=a;var l={value:a,getSnapshot:t};return n.queue=l,Wu(Hu.bind(null,i,l,e),[e]),i.flags|=2048,fi(9,{destroy:void 0},Bu.bind(null,i,l,a,t),null),a},useId:function(){var e=Ne(),t=oe.identifierPrefix;if(j){var a=Dt,i=Tt;a=(i&~(1<<32-Fe(i)-1)).toString(32)+a,t="_"+t+"R_"+a,a=$n++,0<a&&(t+="H"+a.toString(32)),t+="_"}else a=Bp++,t="_"+t+"r_"+a.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:ts,useFormState:Zu,useActionState:Zu,useOptimistic:function(e){var t=Ne();t.memoizedState=t.baseState=e;var a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=a,t=as.bind(null,H,!0,a),a.dispatch=t,[e,t]},useMemoCache:Zo,useCacheRefresh:function(){return Ne().memoizedState=Yp.bind(null,H)},useEffectEvent:function(e){var t=Ne(),a={impl:e};return t.memoizedState=a,function(){if((J&2)!==0)throw Error(h(440));return a.impl.apply(void 0,arguments)}}},is={readContext:Ce,use:tl,useCallback:ic,useContext:Ce,useEffect:Wo,useImperativeHandle:ac,useInsertionEffect:$u,useLayoutEffect:ec,useMemo:nc,useReducer:al,useRef:Pu,useState:function(){return al(kt)},useDebugValue:Fo,useDeferredValue:function(e,t){var a=ve();return lc(a,ae.memoizedState,e,t)},useTransition:function(){var e=al(kt)[0],t=ve().memoizedState;return[typeof e=="boolean"?e:Pi(e),t]},useSyncExternalStore:_u,useId:uc,useHostTransitionStatus:ts,useFormState:Iu,useActionState:Iu,useOptimistic:function(e,t){var a=ve();return Vu(a,ae,e,t)},useMemoCache:Zo,useCacheRefresh:cc};is.useEffectEvent=Fu;var hc={readContext:Ce,use:tl,useCallback:ic,useContext:Ce,useEffect:Wo,useImperativeHandle:ac,useInsertionEffect:$u,useLayoutEffect:ec,useMemo:nc,useReducer:Ko,useRef:Pu,useState:function(){return Ko(kt)},useDebugValue:Fo,useDeferredValue:function(e,t){var a=ve();return ae===null?$o(a,e,t):lc(a,ae.memoizedState,e,t)},useTransition:function(){var e=Ko(kt)[0],t=ve().memoizedState;return[typeof e=="boolean"?e:Pi(e),t]},useSyncExternalStore:_u,useId:uc,useHostTransitionStatus:ts,useFormState:Ju,useActionState:Ju,useOptimistic:function(e,t){var a=ve();return ae!==null?Vu(a,ae,e,t):(a.baseState=e,[e,a.queue.dispatch])},useMemoCache:Zo,useCacheRefresh:cc};hc.useEffectEvent=Fu;function ns(e,t,a,i){t=e.memoizedState,a=a(i,t),a=a==null?t:z({},t,a),e.memoizedState=a,e.lanes===0&&(e.updateQueue.baseState=a)}var ls={enqueueSetState:function(e,t,a){e=e._reactInternals;var i=lt(),n=ia(i);n.payload=t,a!=null&&(n.callback=a),t=na(e,n,i),t!==null&&(Ie(t,e,i),Zi(t,e,i))},enqueueReplaceState:function(e,t,a){e=e._reactInternals;var i=lt(),n=ia(i);n.tag=1,n.payload=t,a!=null&&(n.callback=a),t=na(e,n,i),t!==null&&(Ie(t,e,i),Zi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var a=lt(),i=ia(a);i.tag=2,t!=null&&(i.callback=t),t=na(e,i,a),t!==null&&(Ie(t,e,a),Zi(t,e,a))}};function gc(e,t,a,i,n,l,o){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,o):t.prototype&&t.prototype.isPureReactComponent?!ki(a,i)||!ki(n,l):!0}function vc(e,t,a,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(a,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(a,i),t.state!==e&&ls.enqueueReplaceState(t,t.state,null)}function Ha(e,t){var a=t;if("ref"in t){a={};for(var i in t)i!=="ref"&&(a[i]=t[i])}if(e=e.defaultProps){a===t&&(a=z({},a));for(var n in e)a[n]===void 0&&(a[n]=e[n])}return a}function yc(e){Hn(e)}function Ac(e){console.error(e)}function Sc(e){Hn(e)}function ol(e,t){try{var a=e.onUncaughtError;a(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function bc(e,t,a){try{var i=e.onCaughtError;i(a.value,{componentStack:a.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(n){setTimeout(function(){throw n})}}function os(e,t,a){return a=ia(a),a.tag=3,a.payload={element:null},a.callback=function(){ol(e,t)},a}function Mc(e){return e=ia(e),e.tag=3,e}function Ec(e,t,a,i){var n=a.type.getDerivedStateFromError;if(typeof n=="function"){var l=i.value;e.payload=function(){return n(l)},e.callback=function(){bc(t,a,i)}}var o=a.stateNode;o!==null&&typeof o.componentDidCatch=="function"&&(e.callback=function(){bc(t,a,i),typeof n!="function"&&(ca===null?ca=new Set([this]):ca.add(this));var s=i.stack;this.componentDidCatch(i.value,{componentStack:s!==null?s:""})})}function Xp(e,t,a,i,n){if(a.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=a.alternate,t!==null&&ni(t,a,n,!0),a=tt.current,a!==null){switch(a.tag){case 31:case 13:return mt===null?yl():a.alternate===null&&pe===0&&(pe=3),a.flags&=-257,a.flags|=65536,a.lanes=n,i===In?a.flags|=16384:(t=a.updateQueue,t===null?a.updateQueue=new Set([i]):t.add(i),Us(e,i,n)),!1;case 22:return a.flags|=65536,i===In?a.flags|=16384:(t=a.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},a.updateQueue=t):(a=t.retryQueue,a===null?t.retryQueue=new Set([i]):a.add(i)),Us(e,i,n)),!1}throw Error(h(435,a.tag))}return Us(e,i,n),yl(),!1}if(j)return t=tt.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=n,i!==Do&&(e=Error(h(422),{cause:i}),Gi(ct(e,a)))):(i!==Do&&(t=Error(h(423),{cause:i}),Gi(ct(t,a))),e=e.current.alternate,e.flags|=65536,n&=-n,e.lanes|=n,i=ct(i,a),n=os(e.stateNode,i,n),Bo(e,n),pe!==4&&(pe=2)),!1;var l=Error(h(520),{cause:i});if(l=ct(l,a),sn===null?sn=[l]:sn.push(l),pe!==4&&(pe=2),t===null)return!0;i=ct(i,a),a=t;do{switch(a.tag){case 3:return a.flags|=65536,e=n&-n,a.lanes|=e,e=os(a.stateNode,i,e),Bo(a,e),!1;case 1:if(t=a.type,l=a.stateNode,(a.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(ca===null||!ca.has(l))))return a.flags|=65536,n&=-n,a.lanes|=n,n=Mc(n),Ec(n,e,a,i),Bo(a,n),!1}a=a.return}while(a!==null);return!1}var ss=Error(h(461)),Se=!1;function Re(e,t,a,i){t.child=e===null?Cu(t,null,a,i):Na(t,e.child,a,i)}function Tc(e,t,a,i,n){a=a.render;var l=t.ref;if("ref"in i){var o={};for(var s in i)s!=="ref"&&(o[s]=i[s])}else o=i;return Ua(t),i=Yo(e,t,a,o,l,n),s=Qo(),e!==null&&!Se?(Xo(e,t,n),qt(e,t,n)):(j&&s&&Eo(t),t.flags|=1,Re(e,t,i,n),t.child)}function Dc(e,t,a,i,n){if(e===null){var l=a.type;return typeof l=="function"&&!So(l)&&l.defaultProps===void 0&&a.compare===null?(t.tag=15,t.type=l,wc(e,t,l,i,n)):(e=Gn(a.type,null,i,t,t.mode,n),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!hs(e,n)){var o=l.memoizedProps;if(a=a.compare,a=a!==null?a:ki,a(o,i)&&e.ref===t.ref)return qt(e,t,n)}return t.flags|=1,e=zt(l,i),e.ref=t.ref,e.return=t,t.child=e}function wc(e,t,a,i,n){if(e!==null){var l=e.memoizedProps;if(ki(l,i)&&e.ref===t.ref)if(Se=!1,t.pendingProps=i=l,hs(e,n))(e.flags&131072)!==0&&(Se=!0);else return t.lanes=e.lanes,qt(e,t,n)}return rs(e,t,a,i,n)}function Cc(e,t,a,i){var n=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|a:a,e!==null){for(i=t.child=e.child,n=0;i!==null;)n=n|i.lanes|i.childLanes,i=i.sibling;i=n&~l}else i=0,t.child=null;return Rc(e,t,l,a,i)}if((a&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&jn(t,l!==null?l.cachePool:null),l!==null?Lu(t,l):ko(),Uu(t);else return i=t.lanes=536870912,Rc(e,t,l!==null?l.baseLanes|a:a,a,i)}else l!==null?(jn(t,l.cachePool),Lu(t,l),oa(),t.memoizedState=null):(e!==null&&jn(t,null),ko(),oa());return Re(e,t,n,a),t.child}function $i(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function Rc(e,t,a,i,n){var l=Oo();return l=l===null?null:{parent:ye._currentValue,pool:l},t.memoizedState={baseLanes:a,cachePool:l},e!==null&&jn(t,null),ko(),Uu(t),e!==null&&ni(e,t,i,!0),t.childLanes=n,null}function sl(e,t){return t=ul({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function xc(e,t,a){return Na(t,e.child,null,a),e=sl(t,t.pendingProps),e.flags|=2,at(t),t.memoizedState=null,e}function jp(e,t,a){var i=t.pendingProps,n=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(j){if(i.mode==="hidden")return e=sl(t,i),t.lanes=536870912,$i(null,e);if(Vo(t),(e=se)?(e=Gd(e,pt),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=fu(e),a.return=t,t.child=a,we=t,se=null)):e=null,e===null)throw ea(t);return t.lanes=536870912,null}return sl(t,i)}var l=e.memoizedState;if(l!==null){var o=l.dehydrated;if(Vo(t),n)if(t.flags&256)t.flags&=-257,t=xc(e,t,a);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(h(558));else if(Se||ni(e,t,a,!1),n=(a&e.childLanes)!==0,Se||n){if(i=oe,i!==null&&(o=Ar(i,a),o!==0&&o!==l.retryLane))throw l.retryLane=o,Ca(e,o),Ie(i,e,o),ss;yl(),t=xc(e,t,a)}else e=l.treeContext,se=ht(o.nextSibling),we=t,j=!0,$t=null,pt=!1,e!==null&&hu(t,e),t=sl(t,i),t.flags|=4096;return t}return e=zt(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function rl(e,t){var a=t.ref;if(a===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof a!="function"&&typeof a!="object")throw Error(h(284));(e===null||e.ref!==a)&&(t.flags|=4194816)}}function rs(e,t,a,i,n){return Ua(t),a=Yo(e,t,a,i,void 0,n),i=Qo(),e!==null&&!Se?(Xo(e,t,n),qt(e,t,n)):(j&&i&&Eo(t),t.flags|=1,Re(e,t,a,n),t.child)}function Lc(e,t,a,i,n,l){return Ua(t),t.updateQueue=null,a=zu(t,i,a,n),Ou(e),i=Qo(),e!==null&&!Se?(Xo(e,t,l),qt(e,t,l)):(j&&i&&Eo(t),t.flags|=1,Re(e,t,a,l),t.child)}function Uc(e,t,a,i,n){if(Ua(t),t.stateNode===null){var l=ei,o=a.contextType;typeof o=="object"&&o!==null&&(l=Ce(o)),l=new a(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=ls,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},_o(t),o=a.contextType,l.context=typeof o=="object"&&o!==null?Ce(o):ei,l.state=t.memoizedState,o=a.getDerivedStateFromProps,typeof o=="function"&&(ns(t,a,o,i),l.state=t.memoizedState),typeof a.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(o=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),o!==l.state&&ls.enqueueReplaceState(l,l.state,null),Ki(t,i,l,n),Ii(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var s=t.memoizedProps,r=Ha(a,s);l.props=r;var p=l.context,v=a.contextType;o=ei,typeof v=="object"&&v!==null&&(o=Ce(v));var S=a.getDerivedStateFromProps;v=typeof S=="function"||typeof l.getSnapshotBeforeUpdate=="function",s=t.pendingProps!==s,v||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(s||p!==o)&&vc(t,l,i,o),aa=!1;var m=t.memoizedState;l.state=m,Ki(t,i,l,n),Ii(),p=t.memoizedState,s||m!==p||aa?(typeof S=="function"&&(ns(t,a,S,i),p=t.memoizedState),(r=aa||gc(t,a,r,i,m,p,o))?(v||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=p),l.props=i,l.state=p,l.context=o,i=r):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,No(e,t),o=t.memoizedProps,v=Ha(a,o),l.props=v,S=t.pendingProps,m=l.context,p=a.contextType,r=ei,typeof p=="object"&&p!==null&&(r=Ce(p)),s=a.getDerivedStateFromProps,(p=typeof s=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(o!==S||m!==r)&&vc(t,l,i,r),aa=!1,m=t.memoizedState,l.state=m,Ki(t,i,l,n),Ii();var g=t.memoizedState;o!==S||m!==g||aa||e!==null&&e.dependencies!==null&&Qn(e.dependencies)?(typeof s=="function"&&(ns(t,a,s,i),g=t.memoizedState),(v=aa||gc(t,a,v,i,m,g,r)||e!==null&&e.dependencies!==null&&Qn(e.dependencies))?(p||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,g,r),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,g,r)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=g),l.props=i,l.state=g,l.context=r,i=v):(typeof l.componentDidUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||o===e.memoizedProps&&m===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,rl(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,a=i&&typeof a.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=Na(t,e.child,null,n),t.child=Na(t,null,a,n)):Re(e,t,a,n),t.memoizedState=l.state,e=t.child):e=qt(e,t,n),e}function Oc(e,t,a,i){return xa(),t.flags|=256,Re(e,t,a,i),t.child}var us={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function cs(e){return{baseLanes:e,cachePool:bu()}}function ds(e,t,a){return e=e!==null?e.childLanes&~a:0,t&&(e|=nt),e}function zc(e,t,a){var i=t.pendingProps,n=!1,l=(t.flags&128)!==0,o;if((o=l)||(o=e!==null&&e.memoizedState===null?!1:(ge.current&2)!==0),o&&(n=!0,t.flags&=-129),o=(t.flags&32)!==0,t.flags&=-33,e===null){if(j){if(n?la(t):oa(),(e=se)?(e=Gd(e,pt),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:Ft!==null?{id:Tt,overflow:Dt}:null,retryLane:536870912,hydrationErrors:null},a=fu(e),a.return=t,t.child=a,we=t,se=null)):e=null,e===null)throw ea(t);return Is(e)?t.lanes=32:t.lanes=536870912,null}var s=i.children;return i=i.fallback,n?(oa(),n=t.mode,s=ul({mode:"hidden",children:s},n),i=Ra(i,n,a,null),s.return=t,i.return=t,s.sibling=i,t.child=s,i=t.child,i.memoizedState=cs(a),i.childLanes=ds(e,o,a),t.memoizedState=us,$i(null,i)):(la(t),fs(t,s))}var r=e.memoizedState;if(r!==null&&(s=r.dehydrated,s!==null)){if(l)t.flags&256?(la(t),t.flags&=-257,t=ps(e,t,a)):t.memoizedState!==null?(oa(),t.child=e.child,t.flags|=128,t=null):(oa(),s=i.fallback,n=t.mode,i=ul({mode:"visible",children:i.children},n),s=Ra(s,n,a,null),s.flags|=2,i.return=t,s.return=t,i.sibling=s,t.child=i,Na(t,e.child,null,a),i=t.child,i.memoizedState=cs(a),i.childLanes=ds(e,o,a),t.memoizedState=us,t=$i(null,i));else if(la(t),Is(s)){if(o=s.nextSibling&&s.nextSibling.dataset,o)var p=o.dgst;o=p,i=Error(h(419)),i.stack="",i.digest=o,Gi({value:i,source:null,stack:null}),t=ps(e,t,a)}else if(Se||ni(e,t,a,!1),o=(a&e.childLanes)!==0,Se||o){if(o=oe,o!==null&&(i=Ar(o,a),i!==0&&i!==r.retryLane))throw r.retryLane=i,Ca(e,i),Ie(o,e,i),ss;Zs(s)||yl(),t=ps(e,t,a)}else Zs(s)?(t.flags|=192,t.child=e.child,t=null):(e=r.treeContext,se=ht(s.nextSibling),we=t,j=!0,$t=null,pt=!1,e!==null&&hu(t,e),t=fs(t,i.children),t.flags|=4096);return t}return n?(oa(),s=i.fallback,n=t.mode,r=e.child,p=r.sibling,i=zt(r,{mode:"hidden",children:i.children}),i.subtreeFlags=r.subtreeFlags&65011712,p!==null?s=zt(p,s):(s=Ra(s,n,a,null),s.flags|=2),s.return=t,i.return=t,i.sibling=s,t.child=i,$i(null,i),i=t.child,s=e.child.memoizedState,s===null?s=cs(a):(n=s.cachePool,n!==null?(r=ye._currentValue,n=n.parent!==r?{parent:r,pool:r}:n):n=bu(),s={baseLanes:s.baseLanes|a,cachePool:n}),i.memoizedState=s,i.childLanes=ds(e,o,a),t.memoizedState=us,$i(e.child,i)):(la(t),a=e.child,e=a.sibling,a=zt(a,{mode:"visible",children:i.children}),a.return=t,a.sibling=null,e!==null&&(o=t.deletions,o===null?(t.deletions=[e],t.flags|=16):o.push(e)),t.child=a,t.memoizedState=null,a)}function fs(e,t){return t=ul({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function ul(e,t){return e=et(22,e,null,t),e.lanes=0,e}function ps(e,t,a){return Na(t,e.child,null,a),e=fs(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function _c(e,t,a){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Ro(e.return,t,a)}function ms(e,t,a,i,n,l){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:a,tailMode:n,treeForkCount:l}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=i,o.tail=a,o.tailMode=n,o.treeForkCount=l)}function Nc(e,t,a){var i=t.pendingProps,n=i.revealOrder,l=i.tail;i=i.children;var o=ge.current,s=(o&2)!==0;if(s?(o=o&1|2,t.flags|=128):o&=1,T(ge,o),Re(e,t,i,a),i=j?Vi:0,!s&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&_c(e,a,t);else if(e.tag===19)_c(e,a,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(n){case"forwards":for(a=t.child,n=null;a!==null;)e=a.alternate,e!==null&&Wn(e)===null&&(n=a),a=a.sibling;a=n,a===null?(n=t.child,t.child=null):(n=a.sibling,a.sibling=null),ms(t,!1,n,a,l,i);break;case"backwards":case"unstable_legacy-backwards":for(a=null,n=t.child,t.child=null;n!==null;){if(e=n.alternate,e!==null&&Wn(e)===null){t.child=n;break}e=n.sibling,n.sibling=a,a=n,n=e}ms(t,!0,a,null,l,i);break;case"together":ms(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function qt(e,t,a){if(e!==null&&(t.dependencies=e.dependencies),ua|=t.lanes,(a&t.childLanes)===0)if(e!==null){if(ni(e,t,a,!1),(a&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(h(153));if(t.child!==null){for(e=t.child,a=zt(e,e.pendingProps),t.child=a,a.return=t;e.sibling!==null;)e=e.sibling,a=a.sibling=zt(e,e.pendingProps),a.return=t;a.sibling=null}return t.child}function hs(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&Qn(e)))}function Zp(e,t,a){switch(t.tag){case 3:_e(t,t.stateNode.containerInfo),ta(t,ye,e.memoizedState.cache),xa();break;case 27:case 5:Di(t);break;case 4:_e(t,t.stateNode.containerInfo);break;case 10:ta(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,Vo(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(la(t),t.flags|=128,null):(a&t.child.childLanes)!==0?zc(e,t,a):(la(t),e=qt(e,t,a),e!==null?e.sibling:null);la(t);break;case 19:var n=(e.flags&128)!==0;if(i=(a&t.childLanes)!==0,i||(ni(e,t,a,!1),i=(a&t.childLanes)!==0),n){if(i)return Nc(e,t,a);t.flags|=128}if(n=t.memoizedState,n!==null&&(n.rendering=null,n.tail=null,n.lastEffect=null),T(ge,ge.current),i)break;return null;case 22:return t.lanes=0,Cc(e,t,a,t.pendingProps);case 24:ta(t,ye,e.memoizedState.cache)}return qt(e,t,a)}function Bc(e,t,a){if(e!==null)if(e.memoizedProps!==t.pendingProps)Se=!0;else{if(!hs(e,a)&&(t.flags&128)===0)return Se=!1,Zp(e,t,a);Se=(e.flags&131072)!==0}else Se=!1,j&&(t.flags&1048576)!==0&&mu(t,Vi,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=za(t.elementType),t.type=e,typeof e=="function")So(e)?(i=Ha(e,i),t.tag=1,t=Uc(null,t,e,i,a)):(t.tag=0,t=rs(null,t,e,i,a));else{if(e!=null){var n=e.$$typeof;if(n===ot){t.tag=11,t=Tc(null,t,e,i,a);break e}else if(n===X){t.tag=14,t=Dc(null,t,e,i,a);break e}}throw t=xt(e)||e,Error(h(306,t,""))}}return t;case 0:return rs(e,t,t.type,t.pendingProps,a);case 1:return i=t.type,n=Ha(i,t.pendingProps),Uc(e,t,i,n,a);case 3:e:{if(_e(t,t.stateNode.containerInfo),e===null)throw Error(h(387));i=t.pendingProps;var l=t.memoizedState;n=l.element,No(e,t),Ki(t,i,null,a);var o=t.memoizedState;if(i=o.cache,ta(t,ye,i),i!==l.cache&&xo(t,[ye],a,!0),Ii(),i=o.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:o.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Oc(e,t,i,a);break e}else if(i!==n){n=ct(Error(h(424)),t),Gi(n),t=Oc(e,t,i,a);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(se=ht(e.firstChild),we=t,j=!0,$t=null,pt=!0,a=Cu(t,null,i,a),t.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling}else{if(xa(),i===n){t=qt(e,t,a);break e}Re(e,t,i,a)}t=t.child}return t;case 26:return rl(e,t),e===null?(a=Id(t.type,null,t.pendingProps,null))?t.memoizedState=a:j||(a=t.type,e=t.pendingProps,i=Dl(q.current).createElement(a),i[De]=t,i[Ge]=e,xe(i,a,e),Ee(i),t.stateNode=i):t.memoizedState=Id(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return Di(t),e===null&&j&&(i=t.stateNode=Xd(t.type,t.pendingProps,q.current),we=t,pt=!0,n=se,ma(t.type)?(Ks=n,se=ht(i.firstChild)):se=n),Re(e,t,t.pendingProps.children,a),rl(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&j&&((n=i=se)&&(i=Mm(i,t.type,t.pendingProps,pt),i!==null?(t.stateNode=i,we=t,se=ht(i.firstChild),pt=!1,n=!0):n=!1),n||ea(t)),Di(t),n=t.type,l=t.pendingProps,o=e!==null?e.memoizedProps:null,i=l.children,Qs(n,l)?i=null:o!==null&&Qs(n,o)&&(t.flags|=32),t.memoizedState!==null&&(n=Yo(e,t,Hp,null,null,a),hn._currentValue=n),rl(e,t),Re(e,t,i,a),t.child;case 6:return e===null&&j&&((e=a=se)&&(a=Em(a,t.pendingProps,pt),a!==null?(t.stateNode=a,we=t,se=null,e=!0):e=!1),e||ea(t)),null;case 13:return zc(e,t,a);case 4:return _e(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=Na(t,null,i,a):Re(e,t,i,a),t.child;case 11:return Tc(e,t,t.type,t.pendingProps,a);case 7:return Re(e,t,t.pendingProps,a),t.child;case 8:return Re(e,t,t.pendingProps.children,a),t.child;case 12:return Re(e,t,t.pendingProps.children,a),t.child;case 10:return i=t.pendingProps,ta(t,t.type,i.value),Re(e,t,i.children,a),t.child;case 9:return n=t.type._context,i=t.pendingProps.children,Ua(t),n=Ce(n),i=i(n),t.flags|=1,Re(e,t,i,a),t.child;case 14:return Dc(e,t,t.type,t.pendingProps,a);case 15:return wc(e,t,t.type,t.pendingProps,a);case 19:return Nc(e,t,a);case 31:return jp(e,t,a);case 22:return Cc(e,t,a,t.pendingProps);case 24:return Ua(t),i=Ce(ye),e===null?(n=Oo(),n===null&&(n=oe,l=Lo(),n.pooledCache=l,l.refCount++,l!==null&&(n.pooledCacheLanes|=a),n=l),t.memoizedState={parent:i,cache:n},_o(t),ta(t,ye,n)):((e.lanes&a)!==0&&(No(e,t),Ki(t,null,null,a),Ii()),n=e.memoizedState,l=t.memoizedState,n.parent!==i?(n={parent:i,cache:i},t.memoizedState=n,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=n),ta(t,ye,i)):(i=l.cache,ta(t,ye,i),i!==n.cache&&xo(t,[ye],a,!0))),Re(e,t,t.pendingProps.children,a),t.child;case 29:throw t.pendingProps}throw Error(h(156,t.tag))}function Vt(e){e.flags|=4}function gs(e,t,a,i,n){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(n&335544128)===n)if(e.stateNode.complete)e.flags|=8192;else if(ud())e.flags|=8192;else throw _a=In,zo}else e.flags&=-16777217}function Hc(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!Fd(t))if(ud())e.flags|=8192;else throw _a=In,zo}function cl(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?gr():536870912,e.lanes|=t,gi|=t)}function en(e,t){if(!j)switch(e.tailMode){case"hidden":t=e.tail;for(var a=null;t!==null;)t.alternate!==null&&(a=t),t=t.sibling;a===null?e.tail=null:a.sibling=null;break;case"collapsed":a=e.tail;for(var i=null;a!==null;)a.alternate!==null&&(i=a),a=a.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function re(e){var t=e.alternate!==null&&e.alternate.child===e.child,a=0,i=0;if(t)for(var n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags&65011712,i|=n.flags&65011712,n.return=e,n=n.sibling;else for(n=e.child;n!==null;)a|=n.lanes|n.childLanes,i|=n.subtreeFlags,i|=n.flags,n.return=e,n=n.sibling;return e.subtreeFlags|=i,e.childLanes=a,t}function Ip(e,t,a){var i=t.pendingProps;switch(To(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return re(t),null;case 1:return re(t),null;case 3:return a=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),Bt(ye),he(),a.pendingContext&&(a.context=a.pendingContext,a.pendingContext=null),(e===null||e.child===null)&&(ii(t)?Vt(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,wo())),re(t),null;case 26:var n=t.type,l=t.memoizedState;return e===null?(Vt(t),l!==null?(re(t),Hc(t,l)):(re(t),gs(t,n,null,i,a))):l?l!==e.memoizedState?(Vt(t),re(t),Hc(t,l)):(re(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&Vt(t),re(t),gs(t,n,e,i,a)),null;case 27:if(bn(t),a=q.current,n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Vt(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return re(t),null}e=C.current,ii(t)?gu(t):(e=Xd(n,i,a),t.stateNode=e,Vt(t))}return re(t),null;case 5:if(bn(t),n=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&Vt(t);else{if(!i){if(t.stateNode===null)throw Error(h(166));return re(t),null}if(l=C.current,ii(t))gu(t);else{var o=Dl(q.current);switch(l){case 1:l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case 2:l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;default:switch(n){case"svg":l=o.createElementNS("http://www.w3.org/2000/svg",n);break;case"math":l=o.createElementNS("http://www.w3.org/1998/Math/MathML",n);break;case"script":l=o.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?o.createElement("select",{is:i.is}):o.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?o.createElement(n,{is:i.is}):o.createElement(n)}}l[De]=t,l[Ge]=i;e:for(o=t.child;o!==null;){if(o.tag===5||o.tag===6)l.appendChild(o.stateNode);else if(o.tag!==4&&o.tag!==27&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===t)break e;for(;o.sibling===null;){if(o.return===null||o.return===t)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}t.stateNode=l;e:switch(xe(l,n,i),n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&Vt(t)}}return re(t),gs(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,a),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&Vt(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(h(166));if(e=q.current,ii(t)){if(e=t.stateNode,a=t.memoizedProps,i=null,n=we,n!==null)switch(n.tag){case 27:case 5:i=n.memoizedProps}e[De]=t,e=!!(e.nodeValue===a||i!==null&&i.suppressHydrationWarning===!0||zd(e.nodeValue,a)),e||ea(t,!0)}else e=Dl(e).createTextNode(i),e[De]=t,t.stateNode=e}return re(t),null;case 31:if(a=t.memoizedState,e===null||e.memoizedState!==null){if(i=ii(t),a!==null){if(e===null){if(!i)throw Error(h(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(h(557));e[De]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;re(t),e=!1}else a=wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=a),e=!0;if(!e)return t.flags&256?(at(t),t):(at(t),null);if((t.flags&128)!==0)throw Error(h(558))}return re(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(n=ii(t),i!==null&&i.dehydrated!==null){if(e===null){if(!n)throw Error(h(318));if(n=t.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(h(317));n[De]=t}else xa(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;re(t),n=!1}else n=wo(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=n),n=!0;if(!n)return t.flags&256?(at(t),t):(at(t),null)}return at(t),(t.flags&128)!==0?(t.lanes=a,t):(a=i!==null,e=e!==null&&e.memoizedState!==null,a&&(i=t.child,n=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(n=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==n&&(i.flags|=2048)),a!==e&&a&&(t.child.flags|=8192),cl(t,t.updateQueue),re(t),null);case 4:return he(),e===null&&ks(t.stateNode.containerInfo),re(t),null;case 10:return Bt(t.type),re(t),null;case 19:if(b(ge),i=t.memoizedState,i===null)return re(t),null;if(n=(t.flags&128)!==0,l=i.rendering,l===null)if(n)en(i,!1);else{if(pe!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Wn(e),l!==null){for(t.flags|=128,en(i,!1),e=l.updateQueue,t.updateQueue=e,cl(t,e),t.subtreeFlags=0,e=a,a=t.child;a!==null;)du(a,e),a=a.sibling;return T(ge,ge.current&1|2),j&&_t(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&Pe()>hl&&(t.flags|=128,n=!0,en(i,!1),t.lanes=4194304)}else{if(!n)if(e=Wn(l),e!==null){if(t.flags|=128,n=!0,e=e.updateQueue,t.updateQueue=e,cl(t,e),en(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!j)return re(t),null}else 2*Pe()-i.renderingStartTime>hl&&a!==536870912&&(t.flags|=128,n=!0,en(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=Pe(),e.sibling=null,a=ge.current,T(ge,n?a&1|2:a&1),j&&_t(t,i.treeForkCount),e):(re(t),null);case 22:case 23:return at(t),qo(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(a&536870912)!==0&&(t.flags&128)===0&&(re(t),t.subtreeFlags&6&&(t.flags|=8192)):re(t),a=t.updateQueue,a!==null&&cl(t,a.retryQueue),a=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==a&&(t.flags|=2048),e!==null&&b(Oa),null;case 24:return a=null,e!==null&&(a=e.memoizedState.cache),t.memoizedState.cache!==a&&(t.flags|=2048),Bt(ye),re(t),null;case 25:return null;case 30:return null}throw Error(h(156,t.tag))}function Kp(e,t){switch(To(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Bt(ye),he(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return bn(t),null;case 31:if(t.memoizedState!==null){if(at(t),t.alternate===null)throw Error(h(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(at(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(h(340));xa()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return b(ge),null;case 4:return he(),null;case 10:return Bt(t.type),null;case 22:case 23:return at(t),qo(),e!==null&&b(Oa),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return Bt(ye),null;case 25:return null;default:return null}}function kc(e,t){switch(To(t),t.tag){case 3:Bt(ye),he();break;case 26:case 27:case 5:bn(t);break;case 4:he();break;case 31:t.memoizedState!==null&&at(t);break;case 13:at(t);break;case 19:b(ge);break;case 10:Bt(t.type);break;case 22:case 23:at(t),qo(),e!==null&&b(Oa);break;case 24:Bt(ye)}}function tn(e,t){try{var a=t.updateQueue,i=a!==null?a.lastEffect:null;if(i!==null){var n=i.next;a=n;do{if((a.tag&e)===e){i=void 0;var l=a.create,o=a.inst;i=l(),o.destroy=i}a=a.next}while(a!==n)}}catch(s){ee(t,t.return,s)}}function sa(e,t,a){try{var i=t.updateQueue,n=i!==null?i.lastEffect:null;if(n!==null){var l=n.next;i=l;do{if((i.tag&e)===e){var o=i.inst,s=o.destroy;if(s!==void 0){o.destroy=void 0,n=t;var r=a,p=s;try{p()}catch(v){ee(n,r,v)}}}i=i.next}while(i!==l)}}catch(v){ee(t,t.return,v)}}function qc(e){var t=e.updateQueue;if(t!==null){var a=e.stateNode;try{xu(t,a)}catch(i){ee(e,e.return,i)}}}function Vc(e,t,a){a.props=Ha(e.type,e.memoizedProps),a.state=e.memoizedState;try{a.componentWillUnmount()}catch(i){ee(e,t,i)}}function an(e,t){try{var a=e.ref;if(a!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof a=="function"?e.refCleanup=a(i):a.current=i}}catch(n){ee(e,t,n)}}function wt(e,t){var a=e.ref,i=e.refCleanup;if(a!==null)if(typeof i=="function")try{i()}catch(n){ee(e,t,n)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof a=="function")try{a(null)}catch(n){ee(e,t,n)}else a.current=null}function Gc(e){var t=e.type,a=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":a.autoFocus&&i.focus();break e;case"img":a.src?i.src=a.src:a.srcSet&&(i.srcset=a.srcSet)}}catch(n){ee(e,e.return,n)}}function vs(e,t,a){try{var i=e.stateNode;gm(i,e.type,a,t),i[Ge]=t}catch(n){ee(e,e.return,n)}}function Yc(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&ma(e.type)||e.tag===4}function ys(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Yc(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&ma(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function As(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a).insertBefore(e,t):(t=a.nodeType===9?a.body:a.nodeName==="HTML"?a.ownerDocument.body:a,t.appendChild(e),a=a._reactRootContainer,a!=null||t.onclick!==null||(t.onclick=Ut));else if(i!==4&&(i===27&&ma(e.type)&&(a=e.stateNode,t=null),e=e.child,e!==null))for(As(e,t,a),e=e.sibling;e!==null;)As(e,t,a),e=e.sibling}function dl(e,t,a){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?a.insertBefore(e,t):a.appendChild(e);else if(i!==4&&(i===27&&ma(e.type)&&(a=e.stateNode),e=e.child,e!==null))for(dl(e,t,a),e=e.sibling;e!==null;)dl(e,t,a),e=e.sibling}function Qc(e){var t=e.stateNode,a=e.memoizedProps;try{for(var i=e.type,n=t.attributes;n.length;)t.removeAttributeNode(n[0]);xe(t,i,a),t[De]=e,t[Ge]=a}catch(l){ee(e,e.return,l)}}var Gt=!1,be=!1,Ss=!1,Xc=typeof WeakSet=="function"?WeakSet:Set,Te=null;function Jp(e,t){if(e=e.containerInfo,Gs=Ol,e=au(e),po(e)){if("selectionStart"in e)var a={start:e.selectionStart,end:e.selectionEnd};else e:{a=(a=e.ownerDocument)&&a.defaultView||window;var i=a.getSelection&&a.getSelection();if(i&&i.rangeCount!==0){a=i.anchorNode;var n=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{a.nodeType,l.nodeType}catch{a=null;break e}var o=0,s=-1,r=-1,p=0,v=0,S=e,m=null;t:for(;;){for(var g;S!==a||n!==0&&S.nodeType!==3||(s=o+n),S!==l||i!==0&&S.nodeType!==3||(r=o+i),S.nodeType===3&&(o+=S.nodeValue.length),(g=S.firstChild)!==null;)m=S,S=g;for(;;){if(S===e)break t;if(m===a&&++p===n&&(s=o),m===l&&++v===i&&(r=o),(g=S.nextSibling)!==null)break;S=m,m=S.parentNode}S=g}a=s===-1||r===-1?null:{start:s,end:r}}else a=null}a=a||{start:0,end:0}}else a=null;for(Ys={focusedElem:e,selectionRange:a},Ol=!1,Te=t;Te!==null;)if(t=Te,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Te=e;else for(;Te!==null;){switch(t=Te,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(a=0;a<e.length;a++)n=e[a],n.ref.impl=n.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,a=t,n=l.memoizedProps,l=l.memoizedState,i=a.stateNode;try{var D=Ha(a.type,n);e=i.getSnapshotBeforeUpdate(D,l),i.__reactInternalSnapshotBeforeUpdate=e}catch(U){ee(a,a.return,U)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,a=e.nodeType,a===9)js(e);else if(a===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":js(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(h(163))}if(e=t.sibling,e!==null){e.return=t.return,Te=e;break}Te=t.return}}function jc(e,t,a){var i=a.flags;switch(a.tag){case 0:case 11:case 15:Qt(e,a),i&4&&tn(5,a);break;case 1:if(Qt(e,a),i&4)if(e=a.stateNode,t===null)try{e.componentDidMount()}catch(o){ee(a,a.return,o)}else{var n=Ha(a.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(n,t,e.__reactInternalSnapshotBeforeUpdate)}catch(o){ee(a,a.return,o)}}i&64&&qc(a),i&512&&an(a,a.return);break;case 3:if(Qt(e,a),i&64&&(e=a.updateQueue,e!==null)){if(t=null,a.child!==null)switch(a.child.tag){case 27:case 5:t=a.child.stateNode;break;case 1:t=a.child.stateNode}try{xu(e,t)}catch(o){ee(a,a.return,o)}}break;case 27:t===null&&i&4&&Qc(a);case 26:case 5:Qt(e,a),t===null&&i&4&&Gc(a),i&512&&an(a,a.return);break;case 12:Qt(e,a);break;case 31:Qt(e,a),i&4&&Kc(e,a);break;case 13:Qt(e,a),i&4&&Jc(e,a),i&64&&(e=a.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(a=nm.bind(null,a),Tm(e,a))));break;case 22:if(i=a.memoizedState!==null||Gt,!i){t=t!==null&&t.memoizedState!==null||be,n=Gt;var l=be;Gt=i,(be=t)&&!l?Xt(e,a,(a.subtreeFlags&8772)!==0):Qt(e,a),Gt=n,be=l}break;case 30:break;default:Qt(e,a)}}function Zc(e){var t=e.alternate;t!==null&&(e.alternate=null,Zc(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&Jl(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var ce=null,Qe=!1;function Yt(e,t,a){for(a=a.child;a!==null;)Ic(e,t,a),a=a.sibling}function Ic(e,t,a){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(wi,a)}catch{}switch(a.tag){case 26:be||wt(a,t),Yt(e,t,a),a.memoizedState?a.memoizedState.count--:a.stateNode&&(a=a.stateNode,a.parentNode.removeChild(a));break;case 27:be||wt(a,t);var i=ce,n=Qe;ma(a.type)&&(ce=a.stateNode,Qe=!1),Yt(e,t,a),fn(a.stateNode),ce=i,Qe=n;break;case 5:be||wt(a,t);case 6:if(i=ce,n=Qe,ce=null,Yt(e,t,a),ce=i,Qe=n,ce!==null)if(Qe)try{(ce.nodeType===9?ce.body:ce.nodeName==="HTML"?ce.ownerDocument.body:ce).removeChild(a.stateNode)}catch(l){ee(a,t,l)}else try{ce.removeChild(a.stateNode)}catch(l){ee(a,t,l)}break;case 18:ce!==null&&(Qe?(e=ce,qd(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,a.stateNode),Ti(e)):qd(ce,a.stateNode));break;case 4:i=ce,n=Qe,ce=a.stateNode.containerInfo,Qe=!0,Yt(e,t,a),ce=i,Qe=n;break;case 0:case 11:case 14:case 15:sa(2,a,t),be||sa(4,a,t),Yt(e,t,a);break;case 1:be||(wt(a,t),i=a.stateNode,typeof i.componentWillUnmount=="function"&&Vc(a,t,i)),Yt(e,t,a);break;case 21:Yt(e,t,a);break;case 22:be=(i=be)||a.memoizedState!==null,Yt(e,t,a),be=i;break;default:Yt(e,t,a)}}function Kc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ti(e)}catch(a){ee(t,t.return,a)}}}function Jc(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ti(e)}catch(a){ee(t,t.return,a)}}function Pp(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new Xc),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new Xc),t;default:throw Error(h(435,e.tag))}}function fl(e,t){var a=Pp(e);t.forEach(function(i){if(!a.has(i)){a.add(i);var n=lm.bind(null,e,i);i.then(n,n)}})}function Xe(e,t){var a=t.deletions;if(a!==null)for(var i=0;i<a.length;i++){var n=a[i],l=e,o=t,s=o;e:for(;s!==null;){switch(s.tag){case 27:if(ma(s.type)){ce=s.stateNode,Qe=!1;break e}break;case 5:ce=s.stateNode,Qe=!1;break e;case 3:case 4:ce=s.stateNode.containerInfo,Qe=!0;break e}s=s.return}if(ce===null)throw Error(h(160));Ic(l,o,n),ce=null,Qe=!1,l=n.alternate,l!==null&&(l.return=null),n.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Pc(t,e),t=t.sibling}var At=null;function Pc(e,t){var a=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:Xe(t,e),je(e),i&4&&(sa(3,e,e.return),tn(3,e),sa(5,e,e.return));break;case 1:Xe(t,e),je(e),i&512&&(be||a===null||wt(a,a.return)),i&64&&Gt&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(a=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=a===null?i:a.concat(i))));break;case 26:var n=At;if(Xe(t,e),je(e),i&512&&(be||a===null||wt(a,a.return)),i&4){var l=a!==null?a.memoizedState:null;if(i=e.memoizedState,a===null)if(i===null)if(e.stateNode===null){e:{i=e.type,a=e.memoizedProps,n=n.ownerDocument||n;t:switch(i){case"title":l=n.getElementsByTagName("title")[0],(!l||l[xi]||l[De]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=n.createElement(i),n.head.insertBefore(l,n.querySelector("head > title"))),xe(l,i,a),l[De]=e,Ee(l),i=l;break e;case"link":var o=Pd("link","href",n).get(i+(a.href||""));if(o){for(var s=0;s<o.length;s++)if(l=o[s],l.getAttribute("href")===(a.href==null||a.href===""?null:a.href)&&l.getAttribute("rel")===(a.rel==null?null:a.rel)&&l.getAttribute("title")===(a.title==null?null:a.title)&&l.getAttribute("crossorigin")===(a.crossOrigin==null?null:a.crossOrigin)){o.splice(s,1);break t}}l=n.createElement(i),xe(l,i,a),n.head.appendChild(l);break;case"meta":if(o=Pd("meta","content",n).get(i+(a.content||""))){for(s=0;s<o.length;s++)if(l=o[s],l.getAttribute("content")===(a.content==null?null:""+a.content)&&l.getAttribute("name")===(a.name==null?null:a.name)&&l.getAttribute("property")===(a.property==null?null:a.property)&&l.getAttribute("http-equiv")===(a.httpEquiv==null?null:a.httpEquiv)&&l.getAttribute("charset")===(a.charSet==null?null:a.charSet)){o.splice(s,1);break t}}l=n.createElement(i),xe(l,i,a),n.head.appendChild(l);break;default:throw Error(h(468,i))}l[De]=e,Ee(l),i=l}e.stateNode=i}else Wd(n,e.type,e.stateNode);else e.stateNode=Jd(n,i,e.memoizedProps);else l!==i?(l===null?a.stateNode!==null&&(a=a.stateNode,a.parentNode.removeChild(a)):l.count--,i===null?Wd(n,e.type,e.stateNode):Jd(n,i,e.memoizedProps)):i===null&&e.stateNode!==null&&vs(e,e.memoizedProps,a.memoizedProps)}break;case 27:Xe(t,e),je(e),i&512&&(be||a===null||wt(a,a.return)),a!==null&&i&4&&vs(e,e.memoizedProps,a.memoizedProps);break;case 5:if(Xe(t,e),je(e),i&512&&(be||a===null||wt(a,a.return)),e.flags&32){n=e.stateNode;try{Ia(n,"")}catch(D){ee(e,e.return,D)}}i&4&&e.stateNode!=null&&(n=e.memoizedProps,vs(e,n,a!==null?a.memoizedProps:n)),i&1024&&(Ss=!0);break;case 6:if(Xe(t,e),je(e),i&4){if(e.stateNode===null)throw Error(h(162));i=e.memoizedProps,a=e.stateNode;try{a.nodeValue=i}catch(D){ee(e,e.return,D)}}break;case 3:if(Rl=null,n=At,At=wl(t.containerInfo),Xe(t,e),At=n,je(e),i&4&&a!==null&&a.memoizedState.isDehydrated)try{Ti(t.containerInfo)}catch(D){ee(e,e.return,D)}Ss&&(Ss=!1,Wc(e));break;case 4:i=At,At=wl(e.stateNode.containerInfo),Xe(t,e),je(e),At=i;break;case 12:Xe(t,e),je(e);break;case 31:Xe(t,e),je(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,fl(e,i)));break;case 13:Xe(t,e),je(e),e.child.flags&8192&&e.memoizedState!==null!=(a!==null&&a.memoizedState!==null)&&(ml=Pe()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,fl(e,i)));break;case 22:n=e.memoizedState!==null;var r=a!==null&&a.memoizedState!==null,p=Gt,v=be;if(Gt=p||n,be=v||r,Xe(t,e),be=v,Gt=p,je(e),i&8192)e:for(t=e.stateNode,t._visibility=n?t._visibility&-2:t._visibility|1,n&&(a===null||r||Gt||be||ka(e)),a=null,t=e;;){if(t.tag===5||t.tag===26){if(a===null){r=a=t;try{if(l=r.stateNode,n)o=l.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none";else{s=r.stateNode;var S=r.memoizedProps.style,m=S!=null&&S.hasOwnProperty("display")?S.display:null;s.style.display=m==null||typeof m=="boolean"?"":(""+m).trim()}}catch(D){ee(r,r.return,D)}}}else if(t.tag===6){if(a===null){r=t;try{r.stateNode.nodeValue=n?"":r.memoizedProps}catch(D){ee(r,r.return,D)}}}else if(t.tag===18){if(a===null){r=t;try{var g=r.stateNode;n?Vd(g,!0):Vd(r.stateNode,!1)}catch(D){ee(r,r.return,D)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;a===t&&(a=null),t=t.return}a===t&&(a=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(a=i.retryQueue,a!==null&&(i.retryQueue=null,fl(e,a))));break;case 19:Xe(t,e),je(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,fl(e,i)));break;case 30:break;case 21:break;default:Xe(t,e),je(e)}}function je(e){var t=e.flags;if(t&2){try{for(var a,i=e.return;i!==null;){if(Yc(i)){a=i;break}i=i.return}if(a==null)throw Error(h(160));switch(a.tag){case 27:var n=a.stateNode,l=ys(e);dl(e,l,n);break;case 5:var o=a.stateNode;a.flags&32&&(Ia(o,""),a.flags&=-33);var s=ys(e);dl(e,s,o);break;case 3:case 4:var r=a.stateNode.containerInfo,p=ys(e);As(e,p,r);break;default:throw Error(h(161))}}catch(v){ee(e,e.return,v)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Wc(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;Wc(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function Qt(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)jc(e,t.alternate,t),t=t.sibling}function ka(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:sa(4,t,t.return),ka(t);break;case 1:wt(t,t.return);var a=t.stateNode;typeof a.componentWillUnmount=="function"&&Vc(t,t.return,a),ka(t);break;case 27:fn(t.stateNode);case 26:case 5:wt(t,t.return),ka(t);break;case 22:t.memoizedState===null&&ka(t);break;case 30:ka(t);break;default:ka(t)}e=e.sibling}}function Xt(e,t,a){for(a=a&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,n=e,l=t,o=l.flags;switch(l.tag){case 0:case 11:case 15:Xt(n,l,a),tn(4,l);break;case 1:if(Xt(n,l,a),i=l,n=i.stateNode,typeof n.componentDidMount=="function")try{n.componentDidMount()}catch(p){ee(i,i.return,p)}if(i=l,n=i.updateQueue,n!==null){var s=i.stateNode;try{var r=n.shared.hiddenCallbacks;if(r!==null)for(n.shared.hiddenCallbacks=null,n=0;n<r.length;n++)Ru(r[n],s)}catch(p){ee(i,i.return,p)}}a&&o&64&&qc(l),an(l,l.return);break;case 27:Qc(l);case 26:case 5:Xt(n,l,a),a&&i===null&&o&4&&Gc(l),an(l,l.return);break;case 12:Xt(n,l,a);break;case 31:Xt(n,l,a),a&&o&4&&Kc(n,l);break;case 13:Xt(n,l,a),a&&o&4&&Jc(n,l);break;case 22:l.memoizedState===null&&Xt(n,l,a),an(l,l.return);break;case 30:break;default:Xt(n,l,a)}t=t.sibling}}function bs(e,t){var a=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(a=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==a&&(e!=null&&e.refCount++,a!=null&&Yi(a))}function Ms(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e))}function St(e,t,a,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)Fc(e,t,a,i),t=t.sibling}function Fc(e,t,a,i){var n=t.flags;switch(t.tag){case 0:case 11:case 15:St(e,t,a,i),n&2048&&tn(9,t);break;case 1:St(e,t,a,i);break;case 3:St(e,t,a,i),n&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&Yi(e)));break;case 12:if(n&2048){St(e,t,a,i),e=t.stateNode;try{var l=t.memoizedProps,o=l.id,s=l.onPostCommit;typeof s=="function"&&s(o,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(r){ee(t,t.return,r)}}else St(e,t,a,i);break;case 31:St(e,t,a,i);break;case 13:St(e,t,a,i);break;case 23:break;case 22:l=t.stateNode,o=t.alternate,t.memoizedState!==null?l._visibility&2?St(e,t,a,i):nn(e,t):l._visibility&2?St(e,t,a,i):(l._visibility|=2,pi(e,t,a,i,(t.subtreeFlags&10256)!==0||!1)),n&2048&&bs(o,t);break;case 24:St(e,t,a,i),n&2048&&Ms(t.alternate,t);break;default:St(e,t,a,i)}}function pi(e,t,a,i,n){for(n=n&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,o=t,s=a,r=i,p=o.flags;switch(o.tag){case 0:case 11:case 15:pi(l,o,s,r,n),tn(8,o);break;case 23:break;case 22:var v=o.stateNode;o.memoizedState!==null?v._visibility&2?pi(l,o,s,r,n):nn(l,o):(v._visibility|=2,pi(l,o,s,r,n)),n&&p&2048&&bs(o.alternate,o);break;case 24:pi(l,o,s,r,n),n&&p&2048&&Ms(o.alternate,o);break;default:pi(l,o,s,r,n)}t=t.sibling}}function nn(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var a=e,i=t,n=i.flags;switch(i.tag){case 22:nn(a,i),n&2048&&bs(i.alternate,i);break;case 24:nn(a,i),n&2048&&Ms(i.alternate,i);break;default:nn(a,i)}t=t.sibling}}var ln=8192;function mi(e,t,a){if(e.subtreeFlags&ln)for(e=e.child;e!==null;)$c(e,t,a),e=e.sibling}function $c(e,t,a){switch(e.tag){case 26:mi(e,t,a),e.flags&ln&&e.memoizedState!==null&&Bm(a,At,e.memoizedState,e.memoizedProps);break;case 5:mi(e,t,a);break;case 3:case 4:var i=At;At=wl(e.stateNode.containerInfo),mi(e,t,a),At=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=ln,ln=16777216,mi(e,t,a),ln=i):mi(e,t,a));break;default:mi(e,t,a)}}function ed(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function on(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Te=i,ad(i,e)}ed(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)td(e),e=e.sibling}function td(e){switch(e.tag){case 0:case 11:case 15:on(e),e.flags&2048&&sa(9,e,e.return);break;case 3:on(e);break;case 12:on(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,pl(e)):on(e);break;default:on(e)}}function pl(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var a=0;a<t.length;a++){var i=t[a];Te=i,ad(i,e)}ed(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:sa(8,t,t.return),pl(t);break;case 22:a=t.stateNode,a._visibility&2&&(a._visibility&=-3,pl(t));break;default:pl(t)}e=e.sibling}}function ad(e,t){for(;Te!==null;){var a=Te;switch(a.tag){case 0:case 11:case 15:sa(8,a,t);break;case 23:case 22:if(a.memoizedState!==null&&a.memoizedState.cachePool!==null){var i=a.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:Yi(a.memoizedState.cache)}if(i=a.child,i!==null)i.return=a,Te=i;else e:for(a=e;Te!==null;){i=Te;var n=i.sibling,l=i.return;if(Zc(i),i===a){Te=null;break e}if(n!==null){n.return=l,Te=n;break e}Te=l}}}var Wp={getCacheForType:function(e){var t=Ce(ye),a=t.data.get(e);return a===void 0&&(a=e(),t.data.set(e,a)),a},cacheSignal:function(){return Ce(ye).controller.signal}},Fp=typeof WeakMap=="function"?WeakMap:Map,J=0,oe=null,V=null,Y=0,$=0,it=null,ra=!1,hi=!1,Es=!1,jt=0,pe=0,ua=0,qa=0,Ts=0,nt=0,gi=0,sn=null,Ze=null,Ds=!1,ml=0,id=0,hl=1/0,gl=null,ca=null,Me=0,da=null,vi=null,Zt=0,ws=0,Cs=null,nd=null,rn=0,Rs=null;function lt(){return(J&2)!==0&&Y!==0?Y&-Y:y.T!==null?_s():Sr()}function ld(){if(nt===0)if((Y&536870912)===0||j){var e=Tn;Tn<<=1,(Tn&3932160)===0&&(Tn=262144),nt=e}else nt=536870912;return e=tt.current,e!==null&&(e.flags|=32),nt}function Ie(e,t,a){(e===oe&&($===2||$===9)||e.cancelPendingCommit!==null)&&(yi(e,0),fa(e,Y,nt,!1)),Ri(e,a),((J&2)===0||e!==oe)&&(e===oe&&((J&2)===0&&(qa|=a),pe===4&&fa(e,Y,nt,!1)),Ct(e))}function od(e,t,a){if((J&6)!==0)throw Error(h(327));var i=!a&&(t&127)===0&&(t&e.expiredLanes)===0||Ci(e,t),n=i?tm(e,t):Ls(e,t,!0),l=i;do{if(n===0){hi&&!i&&fa(e,t,0,!1);break}else{if(a=e.current.alternate,l&&!$p(a)){n=Ls(e,t,!1),l=!1;continue}if(n===2){if(l=t,e.errorRecoveryDisabledLanes&l)var o=0;else o=e.pendingLanes&-536870913,o=o!==0?o:o&536870912?536870912:0;if(o!==0){t=o;e:{var s=e;n=sn;var r=s.current.memoizedState.isDehydrated;if(r&&(yi(s,o).flags|=256),o=Ls(s,o,!1),o!==2){if(Es&&!r){s.errorRecoveryDisabledLanes|=l,qa|=l,n=4;break e}l=Ze,Ze=n,l!==null&&(Ze===null?Ze=l:Ze.push.apply(Ze,l))}n=o}if(l=!1,n!==2)continue}}if(n===1){yi(e,0),fa(e,t,0,!0);break}e:{switch(i=e,l=n,l){case 0:case 1:throw Error(h(345));case 4:if((t&4194048)!==t)break;case 6:fa(i,t,nt,!ra);break e;case 2:Ze=null;break;case 3:case 5:break;default:throw Error(h(329))}if((t&62914560)===t&&(n=ml+300-Pe(),10<n)){if(fa(i,t,nt,!ra),wn(i,0,!0)!==0)break e;Zt=t,i.timeoutHandle=Hd(sd.bind(null,i,a,Ze,gl,Ds,t,nt,qa,gi,ra,l,"Throttled",-0,0),n);break e}sd(i,a,Ze,gl,Ds,t,nt,qa,gi,ra,l,null,-0,0)}}break}while(!0);Ct(e)}function sd(e,t,a,i,n,l,o,s,r,p,v,S,m,g){if(e.timeoutHandle=-1,S=t.subtreeFlags,S&8192||(S&16785408)===16785408){S={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:Ut},$c(t,l,S);var D=(l&62914560)===l?ml-Pe():(l&4194048)===l?id-Pe():0;if(D=Hm(S,D),D!==null){Zt=l,e.cancelPendingCommit=D(hd.bind(null,e,t,l,a,i,n,o,s,r,v,S,null,m,g)),fa(e,l,o,!p);return}}hd(e,t,l,a,i,n,o,s,r)}function $p(e){for(var t=e;;){var a=t.tag;if((a===0||a===11||a===15)&&t.flags&16384&&(a=t.updateQueue,a!==null&&(a=a.stores,a!==null)))for(var i=0;i<a.length;i++){var n=a[i],l=n.getSnapshot;n=n.value;try{if(!$e(l(),n))return!1}catch{return!1}}if(a=t.child,t.subtreeFlags&16384&&a!==null)a.return=t,t=a;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function fa(e,t,a,i){t&=~Ts,t&=~qa,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var n=t;0<n;){var l=31-Fe(n),o=1<<l;i[l]=-1,n&=~o}a!==0&&vr(e,a,t)}function vl(){return(J&6)===0?(un(0),!1):!0}function xs(){if(V!==null){if($===0)var e=V.return;else e=V,Nt=La=null,jo(e),ri=null,Xi=0,e=V;for(;e!==null;)kc(e.alternate,e),e=e.return;V=null}}function yi(e,t){var a=e.timeoutHandle;a!==-1&&(e.timeoutHandle=-1,Am(a)),a=e.cancelPendingCommit,a!==null&&(e.cancelPendingCommit=null,a()),Zt=0,xs(),oe=e,V=a=zt(e.current,null),Y=t,$=0,it=null,ra=!1,hi=Ci(e,t),Es=!1,gi=nt=Ts=qa=ua=pe=0,Ze=sn=null,Ds=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var n=31-Fe(i),l=1<<n;t|=e[n],i&=~l}return jt=t,kn(),a}function rd(e,t){H=null,y.H=Fi,t===si||t===Zn?(t=Tu(),$=3):t===zo?(t=Tu(),$=4):$=t===ss?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,it=t,V===null&&(pe=1,ol(e,ct(t,e.current)))}function ud(){var e=tt.current;return e===null?!0:(Y&4194048)===Y?mt===null:(Y&62914560)===Y||(Y&536870912)!==0?e===mt:!1}function cd(){var e=y.H;return y.H=Fi,e===null?Fi:e}function dd(){var e=y.A;return y.A=Wp,e}function yl(){pe=4,ra||(Y&4194048)!==Y&&tt.current!==null||(hi=!0),(ua&134217727)===0&&(qa&134217727)===0||oe===null||fa(oe,Y,nt,!1)}function Ls(e,t,a){var i=J;J|=2;var n=cd(),l=dd();(oe!==e||Y!==t)&&(gl=null,yi(e,t)),t=!1;var o=pe;e:do try{if($!==0&&V!==null){var s=V,r=it;switch($){case 8:xs(),o=6;break e;case 3:case 2:case 9:case 6:tt.current===null&&(t=!0);var p=$;if($=0,it=null,Ai(e,s,r,p),a&&hi){o=0;break e}break;default:p=$,$=0,it=null,Ai(e,s,r,p)}}em(),o=pe;break}catch(v){rd(e,v)}while(!0);return t&&e.shellSuspendCounter++,Nt=La=null,J=i,y.H=n,y.A=l,V===null&&(oe=null,Y=0,kn()),o}function em(){for(;V!==null;)fd(V)}function tm(e,t){var a=J;J|=2;var i=cd(),n=dd();oe!==e||Y!==t?(gl=null,hl=Pe()+500,yi(e,t)):hi=Ci(e,t);e:do try{if($!==0&&V!==null){t=V;var l=it;t:switch($){case 1:$=0,it=null,Ai(e,t,l,1);break;case 2:case 9:if(Mu(l)){$=0,it=null,pd(t);break}t=function(){$!==2&&$!==9||oe!==e||($=7),Ct(e)},l.then(t,t);break e;case 3:$=7;break e;case 4:$=5;break e;case 7:Mu(l)?($=0,it=null,pd(t)):($=0,it=null,Ai(e,t,l,7));break;case 5:var o=null;switch(V.tag){case 26:o=V.memoizedState;case 5:case 27:var s=V;if(o?Fd(o):s.stateNode.complete){$=0,it=null;var r=s.sibling;if(r!==null)V=r;else{var p=s.return;p!==null?(V=p,Al(p)):V=null}break t}}$=0,it=null,Ai(e,t,l,5);break;case 6:$=0,it=null,Ai(e,t,l,6);break;case 8:xs(),pe=6;break e;default:throw Error(h(462))}}am();break}catch(v){rd(e,v)}while(!0);return Nt=La=null,y.H=i,y.A=n,J=a,V!==null?0:(oe=null,Y=0,kn(),pe)}function am(){for(;V!==null&&!Df();)fd(V)}function fd(e){var t=Bc(e.alternate,e,jt);e.memoizedProps=e.pendingProps,t===null?Al(e):V=t}function pd(e){var t=e,a=t.alternate;switch(t.tag){case 15:case 0:t=Lc(a,t,t.pendingProps,t.type,void 0,Y);break;case 11:t=Lc(a,t,t.pendingProps,t.type.render,t.ref,Y);break;case 5:jo(t);default:kc(a,t),t=V=du(t,jt),t=Bc(a,t,jt)}e.memoizedProps=e.pendingProps,t===null?Al(e):V=t}function Ai(e,t,a,i){Nt=La=null,jo(t),ri=null,Xi=0;var n=t.return;try{if(Xp(e,n,t,a,Y)){pe=1,ol(e,ct(a,e.current)),V=null;return}}catch(l){if(n!==null)throw V=n,l;pe=1,ol(e,ct(a,e.current)),V=null;return}t.flags&32768?(j||i===1?e=!0:hi||(Y&536870912)!==0?e=!1:(ra=e=!0,(i===2||i===9||i===3||i===6)&&(i=tt.current,i!==null&&i.tag===13&&(i.flags|=16384))),md(t,e)):Al(t)}function Al(e){var t=e;do{if((t.flags&32768)!==0){md(t,ra);return}e=t.return;var a=Ip(t.alternate,t,jt);if(a!==null){V=a;return}if(t=t.sibling,t!==null){V=t;return}V=t=e}while(t!==null);pe===0&&(pe=5)}function md(e,t){do{var a=Kp(e.alternate,e);if(a!==null){a.flags&=32767,V=a;return}if(a=e.return,a!==null&&(a.flags|=32768,a.subtreeFlags=0,a.deletions=null),!t&&(e=e.sibling,e!==null)){V=e;return}V=e=a}while(e!==null);pe=6,V=null}function hd(e,t,a,i,n,l,o,s,r){e.cancelPendingCommit=null;do Sl();while(Me!==0);if((J&6)!==0)throw Error(h(327));if(t!==null){if(t===e.current)throw Error(h(177));if(l=t.lanes|t.childLanes,l|=yo,Nf(e,a,l,o,s,r),e===oe&&(V=oe=null,Y=0),vi=t,da=e,Zt=a,ws=l,Cs=n,nd=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,om(Mn,function(){return Sd(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=y.T,y.T=null,n=E.p,E.p=2,o=J,J|=4;try{Jp(e,t,a)}finally{J=o,E.p=n,y.T=i}}Me=1,gd(),vd(),yd()}}function gd(){if(Me===1){Me=0;var e=da,t=vi,a=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||a){a=y.T,y.T=null;var i=E.p;E.p=2;var n=J;J|=4;try{Pc(t,e);var l=Ys,o=au(e.containerInfo),s=l.focusedElem,r=l.selectionRange;if(o!==s&&s&&s.ownerDocument&&tu(s.ownerDocument.documentElement,s)){if(r!==null&&po(s)){var p=r.start,v=r.end;if(v===void 0&&(v=p),"selectionStart"in s)s.selectionStart=p,s.selectionEnd=Math.min(v,s.value.length);else{var S=s.ownerDocument||document,m=S&&S.defaultView||window;if(m.getSelection){var g=m.getSelection(),D=s.textContent.length,U=Math.min(r.start,D),ne=r.end===void 0?U:Math.min(r.end,D);!g.extend&&U>ne&&(o=ne,ne=U,U=o);var d=eu(s,U),u=eu(s,ne);if(d&&u&&(g.rangeCount!==1||g.anchorNode!==d.node||g.anchorOffset!==d.offset||g.focusNode!==u.node||g.focusOffset!==u.offset)){var f=S.createRange();f.setStart(d.node,d.offset),g.removeAllRanges(),U>ne?(g.addRange(f),g.extend(u.node,u.offset)):(f.setEnd(u.node,u.offset),g.addRange(f))}}}}for(S=[],g=s;g=g.parentNode;)g.nodeType===1&&S.push({element:g,left:g.scrollLeft,top:g.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<S.length;s++){var A=S[s];A.element.scrollLeft=A.left,A.element.scrollTop=A.top}}Ol=!!Gs,Ys=Gs=null}finally{J=n,E.p=i,y.T=a}}e.current=t,Me=2}}function vd(){if(Me===2){Me=0;var e=da,t=vi,a=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||a){a=y.T,y.T=null;var i=E.p;E.p=2;var n=J;J|=4;try{jc(e,t.alternate,t)}finally{J=n,E.p=i,y.T=a}}Me=3}}function yd(){if(Me===4||Me===3){Me=0,wf();var e=da,t=vi,a=Zt,i=nd;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?Me=5:(Me=0,vi=da=null,Ad(e,e.pendingLanes));var n=e.pendingLanes;if(n===0&&(ca=null),Il(a),t=t.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(wi,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=y.T,n=E.p,E.p=2,y.T=null;try{for(var l=e.onRecoverableError,o=0;o<i.length;o++){var s=i[o];l(s.value,{componentStack:s.stack})}}finally{y.T=t,E.p=n}}(Zt&3)!==0&&Sl(),Ct(e),n=e.pendingLanes,(a&261930)!==0&&(n&42)!==0?e===Rs?rn++:(rn=0,Rs=e):rn=0,un(0)}}function Ad(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,Yi(t)))}function Sl(){return gd(),vd(),yd(),Sd()}function Sd(){if(Me!==5)return!1;var e=da,t=ws;ws=0;var a=Il(Zt),i=y.T,n=E.p;try{E.p=32>a?32:a,y.T=null,a=Cs,Cs=null;var l=da,o=Zt;if(Me=0,vi=da=null,Zt=0,(J&6)!==0)throw Error(h(331));var s=J;if(J|=4,td(l.current),Fc(l,l.current,o,a),J=s,un(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(wi,l)}catch{}return!0}finally{E.p=n,y.T=i,Ad(e,t)}}function bd(e,t,a){t=ct(a,t),t=os(e.stateNode,t,2),e=na(e,t,2),e!==null&&(Ri(e,2),Ct(e))}function ee(e,t,a){if(e.tag===3)bd(e,e,a);else for(;t!==null;){if(t.tag===3){bd(t,e,a);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(ca===null||!ca.has(i))){e=ct(a,e),a=Mc(2),i=na(t,a,2),i!==null&&(Ec(a,i,t,e),Ri(i,2),Ct(i));break}}t=t.return}}function Us(e,t,a){var i=e.pingCache;if(i===null){i=e.pingCache=new Fp;var n=new Set;i.set(t,n)}else n=i.get(t),n===void 0&&(n=new Set,i.set(t,n));n.has(a)||(Es=!0,n.add(a),e=im.bind(null,e,t,a),t.then(e,e))}function im(e,t,a){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&a,e.warmLanes&=~a,oe===e&&(Y&a)===a&&(pe===4||pe===3&&(Y&62914560)===Y&&300>Pe()-ml?(J&2)===0&&yi(e,0):Ts|=a,gi===Y&&(gi=0)),Ct(e)}function Md(e,t){t===0&&(t=gr()),e=Ca(e,t),e!==null&&(Ri(e,t),Ct(e))}function nm(e){var t=e.memoizedState,a=0;t!==null&&(a=t.retryLane),Md(e,a)}function lm(e,t){var a=0;switch(e.tag){case 31:case 13:var i=e.stateNode,n=e.memoizedState;n!==null&&(a=n.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(h(314))}i!==null&&i.delete(t),Md(e,a)}function om(e,t){return Ql(e,t)}var bl=null,Si=null,Os=!1,Ml=!1,zs=!1,pa=0;function Ct(e){e!==Si&&e.next===null&&(Si===null?bl=Si=e:Si=Si.next=e),Ml=!0,Os||(Os=!0,rm())}function un(e,t){if(!zs&&Ml){zs=!0;do for(var a=!1,i=bl;i!==null;){if(e!==0){var n=i.pendingLanes;if(n===0)var l=0;else{var o=i.suspendedLanes,s=i.pingedLanes;l=(1<<31-Fe(42|e)+1)-1,l&=n&~(o&~s),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(a=!0,wd(i,l))}else l=Y,l=wn(i,i===oe?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Ci(i,l)||(a=!0,wd(i,l));i=i.next}while(a);zs=!1}}function sm(){Ed()}function Ed(){Ml=Os=!1;var e=0;pa!==0&&ym()&&(e=pa);for(var t=Pe(),a=null,i=bl;i!==null;){var n=i.next,l=Td(i,t);l===0?(i.next=null,a===null?bl=n:a.next=n,n===null&&(Si=a)):(a=i,(e!==0||(l&3)!==0)&&(Ml=!0)),i=n}Me!==0&&Me!==5||un(e),pa!==0&&(pa=0)}function Td(e,t){for(var a=e.suspendedLanes,i=e.pingedLanes,n=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var o=31-Fe(l),s=1<<o,r=n[o];r===-1?((s&a)===0||(s&i)!==0)&&(n[o]=_f(s,t)):r<=t&&(e.expiredLanes|=s),l&=~s}if(t=oe,a=Y,a=wn(e,e===t?a:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,a===0||e===t&&($===2||$===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&Xl(i),e.callbackNode=null,e.callbackPriority=0;if((a&3)===0||Ci(e,a)){if(t=a&-a,t===e.callbackPriority)return t;switch(i!==null&&Xl(i),Il(a)){case 2:case 8:a=mr;break;case 32:a=Mn;break;case 268435456:a=hr;break;default:a=Mn}return i=Dd.bind(null,e),a=Ql(a,i),e.callbackPriority=t,e.callbackNode=a,t}return i!==null&&i!==null&&Xl(i),e.callbackPriority=2,e.callbackNode=null,2}function Dd(e,t){if(Me!==0&&Me!==5)return e.callbackNode=null,e.callbackPriority=0,null;var a=e.callbackNode;if(Sl()&&e.callbackNode!==a)return null;var i=Y;return i=wn(e,e===oe?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(od(e,i,t),Td(e,Pe()),e.callbackNode!=null&&e.callbackNode===a?Dd.bind(null,e):null)}function wd(e,t){if(Sl())return null;od(e,t,!0)}function rm(){Sm(function(){(J&6)!==0?Ql(pr,sm):Ed()})}function _s(){if(pa===0){var e=li;e===0&&(e=En,En<<=1,(En&261888)===0&&(En=256)),pa=e}return pa}function Cd(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:Ln(""+e)}function Rd(e,t){var a=t.ownerDocument.createElement("input");return a.name=t.name,a.value=t.value,e.id&&a.setAttribute("form",e.id),t.parentNode.insertBefore(a,t),e=new FormData(e),a.parentNode.removeChild(a),e}function um(e,t,a,i,n){if(t==="submit"&&a&&a.stateNode===n){var l=Cd((n[Ge]||null).action),o=i.submitter;o&&(t=(t=o[Ge]||null)?Cd(t.formAction):o.getAttribute("formAction"),t!==null&&(l=t,o=null));var s=new _n("action","action",null,i,n);e.push({event:s,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(pa!==0){var r=o?Rd(n,o):new FormData(n);es(a,{pending:!0,data:r,method:n.method,action:l},null,r)}}else typeof l=="function"&&(s.preventDefault(),r=o?Rd(n,o):new FormData(n),es(a,{pending:!0,data:r,method:n.method,action:l},l,r))},currentTarget:n}]})}}for(var Ns=0;Ns<vo.length;Ns++){var Bs=vo[Ns],cm=Bs.toLowerCase(),dm=Bs[0].toUpperCase()+Bs.slice(1);yt(cm,"on"+dm)}yt(lu,"onAnimationEnd"),yt(ou,"onAnimationIteration"),yt(su,"onAnimationStart"),yt("dblclick","onDoubleClick"),yt("focusin","onFocus"),yt("focusout","onBlur"),yt(Cp,"onTransitionRun"),yt(Rp,"onTransitionStart"),yt(xp,"onTransitionCancel"),yt(ru,"onTransitionEnd"),ja("onMouseEnter",["mouseout","mouseover"]),ja("onMouseLeave",["mouseout","mouseover"]),ja("onPointerEnter",["pointerout","pointerover"]),ja("onPointerLeave",["pointerout","pointerover"]),Ea("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Ea("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Ea("onBeforeInput",["compositionend","keypress","textInput","paste"]),Ea("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Ea("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var cn="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(cn));function xd(e,t){t=(t&4)!==0;for(var a=0;a<e.length;a++){var i=e[a],n=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var o=i.length-1;0<=o;o--){var s=i[o],r=s.instance,p=s.currentTarget;if(s=s.listener,r!==l&&n.isPropagationStopped())break e;l=s,n.currentTarget=p;try{l(n)}catch(v){Hn(v)}n.currentTarget=null,l=r}else for(o=0;o<i.length;o++){if(s=i[o],r=s.instance,p=s.currentTarget,s=s.listener,r!==l&&n.isPropagationStopped())break e;l=s,n.currentTarget=p;try{l(n)}catch(v){Hn(v)}n.currentTarget=null,l=r}}}}function G(e,t){var a=t[Kl];a===void 0&&(a=t[Kl]=new Set);var i=e+"__bubble";a.has(i)||(Ld(t,e,2,!1),a.add(i))}function Hs(e,t,a){var i=0;t&&(i|=4),Ld(a,e,i,t)}var El="_reactListening"+Math.random().toString(36).slice(2);function ks(e){if(!e[El]){e[El]=!0,Er.forEach(function(a){a!=="selectionchange"&&(fm.has(a)||Hs(a,!1,e),Hs(a,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[El]||(t[El]=!0,Hs("selectionchange",!1,t))}}function Ld(e,t,a,i){switch(of(t)){case 2:var n=Vm;break;case 8:n=Gm;break;default:n=$s}a=n.bind(null,t,a,e),n=void 0,!io||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(n=!0),i?n!==void 0?e.addEventListener(t,a,{capture:!0,passive:n}):e.addEventListener(t,a,!0):n!==void 0?e.addEventListener(t,a,{passive:n}):e.addEventListener(t,a,!1)}function qs(e,t,a,i,n){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var s=i.stateNode.containerInfo;if(s===n)break;if(o===4)for(o=i.return;o!==null;){var r=o.tag;if((r===3||r===4)&&o.stateNode.containerInfo===n)return;o=o.return}for(;s!==null;){if(o=Ya(s),o===null)return;if(r=o.tag,r===5||r===6||r===26||r===27){i=l=o;continue e}s=s.parentNode}}i=i.return}Nr(function(){var p=l,v=to(a),S=[];e:{var m=uu.get(e);if(m!==void 0){var g=_n,D=e;switch(e){case"keypress":if(On(a)===0)break e;case"keydown":case"keyup":g=lp;break;case"focusin":D="focus",g=so;break;case"focusout":D="blur",g=so;break;case"beforeblur":case"afterblur":g=so;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":g=kr;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":g=If;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":g=rp;break;case lu:case ou:case su:g=Pf;break;case ru:g=cp;break;case"scroll":case"scrollend":g=jf;break;case"wheel":g=fp;break;case"copy":case"cut":case"paste":g=Ff;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":g=Vr;break;case"toggle":case"beforetoggle":g=mp}var U=(t&4)!==0,ne=!U&&(e==="scroll"||e==="scrollend"),d=U?m!==null?m+"Capture":null:m;U=[];for(var u=p,f;u!==null;){var A=u;if(f=A.stateNode,A=A.tag,A!==5&&A!==26&&A!==27||f===null||d===null||(A=Ui(u,d),A!=null&&U.push(dn(u,A,f))),ne)break;u=u.return}0<U.length&&(m=new g(m,D,null,a,v),S.push({event:m,listeners:U}))}}if((t&7)===0){e:{if(m=e==="mouseover"||e==="pointerover",g=e==="mouseout"||e==="pointerout",m&&a!==eo&&(D=a.relatedTarget||a.fromElement)&&(Ya(D)||D[Ga]))break e;if((g||m)&&(m=v.window===v?v:(m=v.ownerDocument)?m.defaultView||m.parentWindow:window,g?(D=a.relatedTarget||a.toElement,g=p,D=D?Ya(D):null,D!==null&&(ne=K(D),U=D.tag,D!==ne||U!==5&&U!==27&&U!==6)&&(D=null)):(g=null,D=p),g!==D)){if(U=kr,A="onMouseLeave",d="onMouseEnter",u="mouse",(e==="pointerout"||e==="pointerover")&&(U=Vr,A="onPointerLeave",d="onPointerEnter",u="pointer"),ne=g==null?m:Li(g),f=D==null?m:Li(D),m=new U(A,u+"leave",g,a,v),m.target=ne,m.relatedTarget=f,A=null,Ya(v)===p&&(U=new U(d,u+"enter",D,a,v),U.target=f,U.relatedTarget=ne,A=U),ne=A,g&&D)t:{for(U=pm,d=g,u=D,f=0,A=d;A;A=U(A))f++;A=0;for(var x=u;x;x=U(x))A++;for(;0<f-A;)d=U(d),f--;for(;0<A-f;)u=U(u),A--;for(;f--;){if(d===u||u!==null&&d===u.alternate){U=d;break t}d=U(d),u=U(u)}U=null}else U=null;g!==null&&Ud(S,m,g,U,!1),D!==null&&ne!==null&&Ud(S,ne,D,U,!0)}}e:{if(m=p?Li(p):window,g=m.nodeName&&m.nodeName.toLowerCase(),g==="select"||g==="input"&&m.type==="file")var Z=Kr;else if(Zr(m))if(Jr)Z=Tp;else{Z=Mp;var R=bp}else g=m.nodeName,!g||g.toLowerCase()!=="input"||m.type!=="checkbox"&&m.type!=="radio"?p&&$l(p.elementType)&&(Z=Kr):Z=Ep;if(Z&&(Z=Z(e,p))){Ir(S,Z,a,v);break e}R&&R(e,m,p),e==="focusout"&&p&&m.type==="number"&&p.memoizedProps.value!=null&&Fl(m,"number",m.value)}switch(R=p?Li(p):window,e){case"focusin":(Zr(R)||R.contentEditable==="true")&&(Wa=R,mo=p,qi=null);break;case"focusout":qi=mo=Wa=null;break;case"mousedown":ho=!0;break;case"contextmenu":case"mouseup":case"dragend":ho=!1,iu(S,a,v);break;case"selectionchange":if(wp)break;case"keydown":case"keyup":iu(S,a,v)}var k;if(uo)e:{switch(e){case"compositionstart":var Q="onCompositionStart";break e;case"compositionend":Q="onCompositionEnd";break e;case"compositionupdate":Q="onCompositionUpdate";break e}Q=void 0}else Pa?Xr(e,a)&&(Q="onCompositionEnd"):e==="keydown"&&a.keyCode===229&&(Q="onCompositionStart");Q&&(Gr&&a.locale!=="ko"&&(Pa||Q!=="onCompositionStart"?Q==="onCompositionEnd"&&Pa&&(k=Br()):(Wt=v,no="value"in Wt?Wt.value:Wt.textContent,Pa=!0)),R=Tl(p,Q),0<R.length&&(Q=new qr(Q,e,null,a,v),S.push({event:Q,listeners:R}),k?Q.data=k:(k=jr(a),k!==null&&(Q.data=k)))),(k=gp?vp(e,a):yp(e,a))&&(Q=Tl(p,"onBeforeInput"),0<Q.length&&(R=new qr("onBeforeInput","beforeinput",null,a,v),S.push({event:R,listeners:Q}),R.data=k)),um(S,e,p,a,v)}xd(S,t)})}function dn(e,t,a){return{instance:e,listener:t,currentTarget:a}}function Tl(e,t){for(var a=t+"Capture",i=[];e!==null;){var n=e,l=n.stateNode;if(n=n.tag,n!==5&&n!==26&&n!==27||l===null||(n=Ui(e,a),n!=null&&i.unshift(dn(e,n,l)),n=Ui(e,t),n!=null&&i.push(dn(e,n,l))),e.tag===3)return i;e=e.return}return[]}function pm(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Ud(e,t,a,i,n){for(var l=t._reactName,o=[];a!==null&&a!==i;){var s=a,r=s.alternate,p=s.stateNode;if(s=s.tag,r!==null&&r===i)break;s!==5&&s!==26&&s!==27||p===null||(r=p,n?(p=Ui(a,l),p!=null&&o.unshift(dn(a,p,r))):n||(p=Ui(a,l),p!=null&&o.push(dn(a,p,r)))),a=a.return}o.length!==0&&e.push({event:t,listeners:o})}var mm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function Od(e){return(typeof e=="string"?e:""+e).replace(mm,`
`).replace(hm,"")}function zd(e,t){return t=Od(t),Od(e)===t}function ie(e,t,a,i,n,l){switch(a){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&Ia(e,""+i);break;case"className":Rn(e,"class",i);break;case"tabIndex":Rn(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Rn(e,a,i);break;case"style":zr(e,i,l);break;case"data":if(t!=="object"){Rn(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||a!=="href")){e.removeAttribute(a);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ln(""+i),e.setAttribute(a,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(a,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(a==="formAction"?(t!=="input"&&ie(e,t,"name",n.name,n,null),ie(e,t,"formEncType",n.formEncType,n,null),ie(e,t,"formMethod",n.formMethod,n,null),ie(e,t,"formTarget",n.formTarget,n,null)):(ie(e,t,"encType",n.encType,n,null),ie(e,t,"method",n.method,n,null),ie(e,t,"target",n.target,n,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(a);break}i=Ln(""+i),e.setAttribute(a,i);break;case"onClick":i!=null&&(e.onclick=Ut);break;case"onScroll":i!=null&&G("scroll",e);break;case"onScrollEnd":i!=null&&G("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}a=Ln(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",a);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""+i):e.removeAttribute(a);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,""):e.removeAttribute(a);break;case"capture":case"download":i===!0?e.setAttribute(a,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(a,i):e.removeAttribute(a);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(a,i):e.removeAttribute(a);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(a):e.setAttribute(a,i);break;case"popover":G("beforetoggle",e),G("toggle",e),Cn(e,"popover",i);break;case"xlinkActuate":Lt(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":Lt(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":Lt(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":Lt(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":Lt(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":Lt(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":Lt(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Cn(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<a.length)||a[0]!=="o"&&a[0]!=="O"||a[1]!=="n"&&a[1]!=="N")&&(a=Qf.get(a)||a,Cn(e,a,i))}}function Vs(e,t,a,i,n,l){switch(a){case"style":zr(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(h(61));if(a=i.__html,a!=null){if(n.children!=null)throw Error(h(60));e.innerHTML=a}}break;case"children":typeof i=="string"?Ia(e,i):(typeof i=="number"||typeof i=="bigint")&&Ia(e,""+i);break;case"onScroll":i!=null&&G("scroll",e);break;case"onScrollEnd":i!=null&&G("scrollend",e);break;case"onClick":i!=null&&(e.onclick=Ut);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Tr.hasOwnProperty(a))e:{if(a[0]==="o"&&a[1]==="n"&&(n=a.endsWith("Capture"),t=a.slice(2,n?a.length-7:void 0),l=e[Ge]||null,l=l!=null?l[a]:null,typeof l=="function"&&e.removeEventListener(t,l,n),typeof i=="function")){typeof l!="function"&&l!==null&&(a in e?e[a]=null:e.hasAttribute(a)&&e.removeAttribute(a)),e.addEventListener(t,i,n);break e}a in e?e[a]=i:i===!0?e.setAttribute(a,""):Cn(e,a,i)}}}function xe(e,t,a){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":G("error",e),G("load",e);var i=!1,n=!1,l;for(l in a)if(a.hasOwnProperty(l)){var o=a[l];if(o!=null)switch(l){case"src":i=!0;break;case"srcSet":n=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ie(e,t,l,o,a,null)}}n&&ie(e,t,"srcSet",a.srcSet,a,null),i&&ie(e,t,"src",a.src,a,null);return;case"input":G("invalid",e);var s=l=o=n=null,r=null,p=null;for(i in a)if(a.hasOwnProperty(i)){var v=a[i];if(v!=null)switch(i){case"name":n=v;break;case"type":o=v;break;case"checked":r=v;break;case"defaultChecked":p=v;break;case"value":l=v;break;case"defaultValue":s=v;break;case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(h(137,t));break;default:ie(e,t,i,v,a,null)}}xr(e,l,s,r,p,o,n,!1);return;case"select":G("invalid",e),i=o=l=null;for(n in a)if(a.hasOwnProperty(n)&&(s=a[n],s!=null))switch(n){case"value":l=s;break;case"defaultValue":o=s;break;case"multiple":i=s;default:ie(e,t,n,s,a,null)}t=l,a=o,e.multiple=!!i,t!=null?Za(e,!!i,t,!1):a!=null&&Za(e,!!i,a,!0);return;case"textarea":G("invalid",e),l=n=i=null;for(o in a)if(a.hasOwnProperty(o)&&(s=a[o],s!=null))switch(o){case"value":i=s;break;case"defaultValue":n=s;break;case"children":l=s;break;case"dangerouslySetInnerHTML":if(s!=null)throw Error(h(91));break;default:ie(e,t,o,s,a,null)}Ur(e,i,n,l);return;case"option":for(r in a)if(a.hasOwnProperty(r)&&(i=a[r],i!=null))switch(r){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:ie(e,t,r,i,a,null)}return;case"dialog":G("beforetoggle",e),G("toggle",e),G("cancel",e),G("close",e);break;case"iframe":case"object":G("load",e);break;case"video":case"audio":for(i=0;i<cn.length;i++)G(cn[i],e);break;case"image":G("error",e),G("load",e);break;case"details":G("toggle",e);break;case"embed":case"source":case"link":G("error",e),G("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(p in a)if(a.hasOwnProperty(p)&&(i=a[p],i!=null))switch(p){case"children":case"dangerouslySetInnerHTML":throw Error(h(137,t));default:ie(e,t,p,i,a,null)}return;default:if($l(t)){for(v in a)a.hasOwnProperty(v)&&(i=a[v],i!==void 0&&Vs(e,t,v,i,a,void 0));return}}for(s in a)a.hasOwnProperty(s)&&(i=a[s],i!=null&&ie(e,t,s,i,a,null))}function gm(e,t,a,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var n=null,l=null,o=null,s=null,r=null,p=null,v=null;for(g in a){var S=a[g];if(a.hasOwnProperty(g)&&S!=null)switch(g){case"checked":break;case"value":break;case"defaultValue":r=S;default:i.hasOwnProperty(g)||ie(e,t,g,null,i,S)}}for(var m in i){var g=i[m];if(S=a[m],i.hasOwnProperty(m)&&(g!=null||S!=null))switch(m){case"type":l=g;break;case"name":n=g;break;case"checked":p=g;break;case"defaultChecked":v=g;break;case"value":o=g;break;case"defaultValue":s=g;break;case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(h(137,t));break;default:g!==S&&ie(e,t,m,g,i,S)}}Wl(e,o,s,r,p,v,l,n);return;case"select":g=o=s=m=null;for(l in a)if(r=a[l],a.hasOwnProperty(l)&&r!=null)switch(l){case"value":break;case"multiple":g=r;default:i.hasOwnProperty(l)||ie(e,t,l,null,i,r)}for(n in i)if(l=i[n],r=a[n],i.hasOwnProperty(n)&&(l!=null||r!=null))switch(n){case"value":m=l;break;case"defaultValue":s=l;break;case"multiple":o=l;default:l!==r&&ie(e,t,n,l,i,r)}t=s,a=o,i=g,m!=null?Za(e,!!a,m,!1):!!i!=!!a&&(t!=null?Za(e,!!a,t,!0):Za(e,!!a,a?[]:"",!1));return;case"textarea":g=m=null;for(s in a)if(n=a[s],a.hasOwnProperty(s)&&n!=null&&!i.hasOwnProperty(s))switch(s){case"value":break;case"children":break;default:ie(e,t,s,null,i,n)}for(o in i)if(n=i[o],l=a[o],i.hasOwnProperty(o)&&(n!=null||l!=null))switch(o){case"value":m=n;break;case"defaultValue":g=n;break;case"children":break;case"dangerouslySetInnerHTML":if(n!=null)throw Error(h(91));break;default:n!==l&&ie(e,t,o,n,i,l)}Lr(e,m,g);return;case"option":for(var D in a)if(m=a[D],a.hasOwnProperty(D)&&m!=null&&!i.hasOwnProperty(D))switch(D){case"selected":e.selected=!1;break;default:ie(e,t,D,null,i,m)}for(r in i)if(m=i[r],g=a[r],i.hasOwnProperty(r)&&m!==g&&(m!=null||g!=null))switch(r){case"selected":e.selected=m&&typeof m!="function"&&typeof m!="symbol";break;default:ie(e,t,r,m,i,g)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var U in a)m=a[U],a.hasOwnProperty(U)&&m!=null&&!i.hasOwnProperty(U)&&ie(e,t,U,null,i,m);for(p in i)if(m=i[p],g=a[p],i.hasOwnProperty(p)&&m!==g&&(m!=null||g!=null))switch(p){case"children":case"dangerouslySetInnerHTML":if(m!=null)throw Error(h(137,t));break;default:ie(e,t,p,m,i,g)}return;default:if($l(t)){for(var ne in a)m=a[ne],a.hasOwnProperty(ne)&&m!==void 0&&!i.hasOwnProperty(ne)&&Vs(e,t,ne,void 0,i,m);for(v in i)m=i[v],g=a[v],!i.hasOwnProperty(v)||m===g||m===void 0&&g===void 0||Vs(e,t,v,m,i,g);return}}for(var d in a)m=a[d],a.hasOwnProperty(d)&&m!=null&&!i.hasOwnProperty(d)&&ie(e,t,d,null,i,m);for(S in i)m=i[S],g=a[S],!i.hasOwnProperty(S)||m===g||m==null&&g==null||ie(e,t,S,m,i,g)}function _d(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function vm(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,a=performance.getEntriesByType("resource"),i=0;i<a.length;i++){var n=a[i],l=n.transferSize,o=n.initiatorType,s=n.duration;if(l&&s&&_d(o)){for(o=0,s=n.responseEnd,i+=1;i<a.length;i++){var r=a[i],p=r.startTime;if(p>s)break;var v=r.transferSize,S=r.initiatorType;v&&_d(S)&&(r=r.responseEnd,o+=v*(r<s?1:(s-p)/(r-p)))}if(--i,t+=8*(l+o)/(n.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var Gs=null,Ys=null;function Dl(e){return e.nodeType===9?e:e.ownerDocument}function Nd(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function Bd(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function Qs(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Xs=null;function ym(){var e=window.event;return e&&e.type==="popstate"?e===Xs?!1:(Xs=e,!0):(Xs=null,!1)}var Hd=typeof setTimeout=="function"?setTimeout:void 0,Am=typeof clearTimeout=="function"?clearTimeout:void 0,kd=typeof Promise=="function"?Promise:void 0,Sm=typeof queueMicrotask=="function"?queueMicrotask:typeof kd<"u"?function(e){return kd.resolve(null).then(e).catch(bm)}:Hd;function bm(e){setTimeout(function(){throw e})}function ma(e){return e==="head"}function qd(e,t){var a=t,i=0;do{var n=a.nextSibling;if(e.removeChild(a),n&&n.nodeType===8)if(a=n.data,a==="/$"||a==="/&"){if(i===0){e.removeChild(n),Ti(t);return}i--}else if(a==="$"||a==="$?"||a==="$~"||a==="$!"||a==="&")i++;else if(a==="html")fn(e.ownerDocument.documentElement);else if(a==="head"){a=e.ownerDocument.head,fn(a);for(var l=a.firstChild;l;){var o=l.nextSibling,s=l.nodeName;l[xi]||s==="SCRIPT"||s==="STYLE"||s==="LINK"&&l.rel.toLowerCase()==="stylesheet"||a.removeChild(l),l=o}}else a==="body"&&fn(e.ownerDocument.body);a=n}while(a);Ti(t)}function Vd(e,t){var a=e;e=0;do{var i=a.nextSibling;if(a.nodeType===1?t?(a._stashedDisplay=a.style.display,a.style.display="none"):(a.style.display=a._stashedDisplay||"",a.getAttribute("style")===""&&a.removeAttribute("style")):a.nodeType===3&&(t?(a._stashedText=a.nodeValue,a.nodeValue=""):a.nodeValue=a._stashedText||""),i&&i.nodeType===8)if(a=i.data,a==="/$"){if(e===0)break;e--}else a!=="$"&&a!=="$?"&&a!=="$~"&&a!=="$!"||e++;a=i}while(a)}function js(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var a=t;switch(t=t.nextSibling,a.nodeName){case"HTML":case"HEAD":case"BODY":js(a),Jl(a);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(a.rel.toLowerCase()==="stylesheet")continue}e.removeChild(a)}}function Mm(e,t,a,i){for(;e.nodeType===1;){var n=a;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[xi])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==n.rel||e.getAttribute("href")!==(n.href==null||n.href===""?null:n.href)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin)||e.getAttribute("title")!==(n.title==null?null:n.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(n.src==null?null:n.src)||e.getAttribute("type")!==(n.type==null?null:n.type)||e.getAttribute("crossorigin")!==(n.crossOrigin==null?null:n.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=n.name==null?null:""+n.name;if(n.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=ht(e.nextSibling),e===null)break}return null}function Em(e,t,a){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!a||(e=ht(e.nextSibling),e===null))return null;return e}function Gd(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=ht(e.nextSibling),e===null))return null;return e}function Zs(e){return e.data==="$?"||e.data==="$~"}function Is(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function Tm(e,t){var a=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||a.readyState!=="loading")t();else{var i=function(){t(),a.removeEventListener("DOMContentLoaded",i)};a.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function ht(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var Ks=null;function Yd(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="/$"||a==="/&"){if(t===0)return ht(e.nextSibling);t--}else a!=="$"&&a!=="$!"&&a!=="$?"&&a!=="$~"&&a!=="&"||t++}e=e.nextSibling}return null}function Qd(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var a=e.data;if(a==="$"||a==="$!"||a==="$?"||a==="$~"||a==="&"){if(t===0)return e;t--}else a!=="/$"&&a!=="/&"||t++}e=e.previousSibling}return null}function Xd(e,t,a){switch(t=Dl(a),e){case"html":if(e=t.documentElement,!e)throw Error(h(452));return e;case"head":if(e=t.head,!e)throw Error(h(453));return e;case"body":if(e=t.body,!e)throw Error(h(454));return e;default:throw Error(h(451))}}function fn(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);Jl(e)}var gt=new Map,jd=new Set;function wl(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var It=E.d;E.d={f:Dm,r:wm,D:Cm,C:Rm,L:xm,m:Lm,X:Om,S:Um,M:zm};function Dm(){var e=It.f(),t=vl();return e||t}function wm(e){var t=Qa(e);t!==null&&t.tag===5&&t.type==="form"?rc(t):It.r(e)}var bi=typeof document>"u"?null:document;function Zd(e,t,a){var i=bi;if(i&&typeof t=="string"&&t){var n=rt(t);n='link[rel="'+e+'"][href="'+n+'"]',typeof a=="string"&&(n+='[crossorigin="'+a+'"]'),jd.has(n)||(jd.add(n),e={rel:e,crossOrigin:a,href:t},i.querySelector(n)===null&&(t=i.createElement("link"),xe(t,"link",e),Ee(t),i.head.appendChild(t)))}}function Cm(e){It.D(e),Zd("dns-prefetch",e,null)}function Rm(e,t){It.C(e,t),Zd("preconnect",e,t)}function xm(e,t,a){It.L(e,t,a);var i=bi;if(i&&e&&t){var n='link[rel="preload"][as="'+rt(t)+'"]';t==="image"&&a&&a.imageSrcSet?(n+='[imagesrcset="'+rt(a.imageSrcSet)+'"]',typeof a.imageSizes=="string"&&(n+='[imagesizes="'+rt(a.imageSizes)+'"]')):n+='[href="'+rt(e)+'"]';var l=n;switch(t){case"style":l=Mi(e);break;case"script":l=Ei(e)}gt.has(l)||(e=z({rel:"preload",href:t==="image"&&a&&a.imageSrcSet?void 0:e,as:t},a),gt.set(l,e),i.querySelector(n)!==null||t==="style"&&i.querySelector(pn(l))||t==="script"&&i.querySelector(mn(l))||(t=i.createElement("link"),xe(t,"link",e),Ee(t),i.head.appendChild(t)))}}function Lm(e,t){It.m(e,t);var a=bi;if(a&&e){var i=t&&typeof t.as=="string"?t.as:"script",n='link[rel="modulepreload"][as="'+rt(i)+'"][href="'+rt(e)+'"]',l=n;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Ei(e)}if(!gt.has(l)&&(e=z({rel:"modulepreload",href:e},t),gt.set(l,e),a.querySelector(n)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(a.querySelector(mn(l)))return}i=a.createElement("link"),xe(i,"link",e),Ee(i),a.head.appendChild(i)}}}function Um(e,t,a){It.S(e,t,a);var i=bi;if(i&&e){var n=Xa(i).hoistableStyles,l=Mi(e);t=t||"default";var o=n.get(l);if(!o){var s={loading:0,preload:null};if(o=i.querySelector(pn(l)))s.loading=5;else{e=z({rel:"stylesheet",href:e,"data-precedence":t},a),(a=gt.get(l))&&Js(e,a);var r=o=i.createElement("link");Ee(r),xe(r,"link",e),r._p=new Promise(function(p,v){r.onload=p,r.onerror=v}),r.addEventListener("load",function(){s.loading|=1}),r.addEventListener("error",function(){s.loading|=2}),s.loading|=4,Cl(o,t,i)}o={type:"stylesheet",instance:o,count:1,state:s},n.set(l,o)}}}function Om(e,t){It.X(e,t);var a=bi;if(a&&e){var i=Xa(a).hoistableScripts,n=Ei(e),l=i.get(n);l||(l=a.querySelector(mn(n)),l||(e=z({src:e,async:!0},t),(t=gt.get(n))&&Ps(e,t),l=a.createElement("script"),Ee(l),xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function zm(e,t){It.M(e,t);var a=bi;if(a&&e){var i=Xa(a).hoistableScripts,n=Ei(e),l=i.get(n);l||(l=a.querySelector(mn(n)),l||(e=z({src:e,async:!0,type:"module"},t),(t=gt.get(n))&&Ps(e,t),l=a.createElement("script"),Ee(l),xe(l,"link",e),a.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(n,l))}}function Id(e,t,a,i){var n=(n=q.current)?wl(n):null;if(!n)throw Error(h(446));switch(e){case"meta":case"title":return null;case"style":return typeof a.precedence=="string"&&typeof a.href=="string"?(t=Mi(a.href),a=Xa(n).hoistableStyles,i=a.get(t),i||(i={type:"style",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(a.rel==="stylesheet"&&typeof a.href=="string"&&typeof a.precedence=="string"){e=Mi(a.href);var l=Xa(n).hoistableStyles,o=l.get(e);if(o||(n=n.ownerDocument||n,o={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,o),(l=n.querySelector(pn(e)))&&!l._p&&(o.instance=l,o.state.loading=5),gt.has(e)||(a={rel:"preload",as:"style",href:a.href,crossOrigin:a.crossOrigin,integrity:a.integrity,media:a.media,hrefLang:a.hrefLang,referrerPolicy:a.referrerPolicy},gt.set(e,a),l||_m(n,e,a,o.state))),t&&i===null)throw Error(h(528,""));return o}if(t&&i!==null)throw Error(h(529,""));return null;case"script":return t=a.async,a=a.src,typeof a=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ei(a),a=Xa(n).hoistableScripts,i=a.get(t),i||(i={type:"script",instance:null,count:0,state:null},a.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(h(444,e))}}function Mi(e){return'href="'+rt(e)+'"'}function pn(e){return'link[rel="stylesheet"]['+e+"]"}function Kd(e){return z({},e,{"data-precedence":e.precedence,precedence:null})}function _m(e,t,a,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),xe(t,"link",a),Ee(t),e.head.appendChild(t))}function Ei(e){return'[src="'+rt(e)+'"]'}function mn(e){return"script[async]"+e}function Jd(e,t,a){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+rt(a.href)+'"]');if(i)return t.instance=i,Ee(i),i;var n=z({},a,{"data-href":a.href,"data-precedence":a.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),Ee(i),xe(i,"style",n),Cl(i,a.precedence,e),t.instance=i;case"stylesheet":n=Mi(a.href);var l=e.querySelector(pn(n));if(l)return t.state.loading|=4,t.instance=l,Ee(l),l;i=Kd(a),(n=gt.get(n))&&Js(i,n),l=(e.ownerDocument||e).createElement("link"),Ee(l);var o=l;return o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),xe(l,"link",i),t.state.loading|=4,Cl(l,a.precedence,e),t.instance=l;case"script":return l=Ei(a.src),(n=e.querySelector(mn(l)))?(t.instance=n,Ee(n),n):(i=a,(n=gt.get(l))&&(i=z({},a),Ps(i,n)),e=e.ownerDocument||e,n=e.createElement("script"),Ee(n),xe(n,"link",i),e.head.appendChild(n),t.instance=n);case"void":return null;default:throw Error(h(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,Cl(i,a.precedence,e));return t.instance}function Cl(e,t,a){for(var i=a.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),n=i.length?i[i.length-1]:null,l=n,o=0;o<i.length;o++){var s=i[o];if(s.dataset.precedence===t)l=s;else if(l!==n)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=a.nodeType===9?a.head:a,t.insertBefore(e,t.firstChild))}function Js(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function Ps(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var Rl=null;function Pd(e,t,a){if(Rl===null){var i=new Map,n=Rl=new Map;n.set(a,i)}else n=Rl,i=n.get(a),i||(i=new Map,n.set(a,i));if(i.has(e))return i;for(i.set(e,null),a=a.getElementsByTagName(e),n=0;n<a.length;n++){var l=a[n];if(!(l[xi]||l[De]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var o=l.getAttribute(t)||"";o=e+o;var s=i.get(o);s?s.push(l):i.set(o,[l])}}return i}function Wd(e,t,a){e=e.ownerDocument||e,e.head.insertBefore(a,t==="title"?e.querySelector("head > title"):null)}function Nm(e,t,a){if(a===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function Fd(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function Bm(e,t,a,i){if(a.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var n=Mi(i.href),l=t.querySelector(pn(n));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=xl.bind(e),t.then(e,e)),a.state.loading|=4,a.instance=l,Ee(l);return}l=t.ownerDocument||t,i=Kd(i),(n=gt.get(n))&&Js(i,n),l=l.createElement("link"),Ee(l);var o=l;o._p=new Promise(function(s,r){o.onload=s,o.onerror=r}),xe(l,"link",i),a.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(a,t),(t=a.state.preload)&&(a.state.loading&3)===0&&(e.count++,a=xl.bind(e),t.addEventListener("load",a),t.addEventListener("error",a))}}var Ws=0;function Hm(e,t){return e.stylesheets&&e.count===0&&Ul(e,e.stylesheets),0<e.count||0<e.imgCount?function(a){var i=setTimeout(function(){if(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&Ws===0&&(Ws=62500*vm());var n=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&Ul(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>Ws?50:800)+t);return e.unsuspend=a,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(n)}}:null}function xl(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)Ul(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var Ll=null;function Ul(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,Ll=new Map,t.forEach(km,e),Ll=null,xl.call(e))}function km(e,t){if(!(t.state.loading&4)){var a=Ll.get(e);if(a)var i=a.get(null);else{a=new Map,Ll.set(e,a);for(var n=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<n.length;l++){var o=n[l];(o.nodeName==="LINK"||o.getAttribute("media")!=="not all")&&(a.set(o.dataset.precedence,o),i=o)}i&&a.set(null,i)}n=t.instance,o=n.getAttribute("data-precedence"),l=a.get(o)||i,l===i&&a.set(null,n),a.set(o,n),this.count++,i=xl.bind(this),n.addEventListener("load",i),n.addEventListener("error",i),l?l.parentNode.insertBefore(n,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(n,e.firstChild)),t.state.loading|=4}}var hn={$$typeof:Le,Provider:null,Consumer:null,_currentValue:_,_currentValue2:_,_threadCount:0};function qm(e,t,a,i,n,l,o,s,r){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=jl(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=jl(0),this.hiddenUpdates=jl(null),this.identifierPrefix=i,this.onUncaughtError=n,this.onCaughtError=l,this.onRecoverableError=o,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=r,this.incompleteTransitions=new Map}function $d(e,t,a,i,n,l,o,s,r,p,v,S){return e=new qm(e,t,a,o,r,p,v,S,s),t=1,l===!0&&(t|=24),l=et(3,null,null,t),e.current=l,l.stateNode=e,t=Lo(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:a,cache:t},_o(l),e}function ef(e){return e?(e=ei,e):ei}function tf(e,t,a,i,n,l){n=ef(n),i.context===null?i.context=n:i.pendingContext=n,i=ia(t),i.payload={element:a},l=l===void 0?null:l,l!==null&&(i.callback=l),a=na(e,i,t),a!==null&&(Ie(a,e,t),Zi(a,e,t))}function af(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var a=e.retryLane;e.retryLane=a!==0&&a<t?a:t}}function Fs(e,t){af(e,t),(e=e.alternate)&&af(e,t)}function nf(e){if(e.tag===13||e.tag===31){var t=Ca(e,67108864);t!==null&&Ie(t,e,67108864),Fs(e,67108864)}}function lf(e){if(e.tag===13||e.tag===31){var t=lt();t=Zl(t);var a=Ca(e,t);a!==null&&Ie(a,e,t),Fs(e,t)}}var Ol=!0;function Vm(e,t,a,i){var n=y.T;y.T=null;var l=E.p;try{E.p=2,$s(e,t,a,i)}finally{E.p=l,y.T=n}}function Gm(e,t,a,i){var n=y.T;y.T=null;var l=E.p;try{E.p=8,$s(e,t,a,i)}finally{E.p=l,y.T=n}}function $s(e,t,a,i){if(Ol){var n=er(i);if(n===null)qs(e,t,i,zl,a),sf(e,i);else if(Qm(n,e,t,a,i))i.stopPropagation();else if(sf(e,i),t&4&&-1<Ym.indexOf(e)){for(;n!==null;){var l=Qa(n);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var o=Ma(l.pendingLanes);if(o!==0){var s=l;for(s.pendingLanes|=2,s.entangledLanes|=2;o;){var r=1<<31-Fe(o);s.entanglements[1]|=r,o&=~r}Ct(l),(J&6)===0&&(hl=Pe()+500,un(0))}}break;case 31:case 13:s=Ca(l,2),s!==null&&Ie(s,l,2),vl(),Fs(l,2)}if(l=er(i),l===null&&qs(e,t,i,zl,a),l===n)break;n=l}n!==null&&i.stopPropagation()}else qs(e,t,i,null,a)}}function er(e){return e=to(e),tr(e)}var zl=null;function tr(e){if(zl=null,e=Ya(e),e!==null){var t=K(e);if(t===null)e=null;else{var a=t.tag;if(a===13){if(e=me(t),e!==null)return e;e=null}else if(a===31){if(e=Oe(t),e!==null)return e;e=null}else if(a===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return zl=e,null}function of(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(Cf()){case pr:return 2;case mr:return 8;case Mn:case Rf:return 32;case hr:return 268435456;default:return 32}default:return 32}}var ar=!1,ha=null,ga=null,va=null,gn=new Map,vn=new Map,ya=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function sf(e,t){switch(e){case"focusin":case"focusout":ha=null;break;case"dragenter":case"dragleave":ga=null;break;case"mouseover":case"mouseout":va=null;break;case"pointerover":case"pointerout":gn.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":vn.delete(t.pointerId)}}function yn(e,t,a,i,n,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:a,eventSystemFlags:i,nativeEvent:l,targetContainers:[n]},t!==null&&(t=Qa(t),t!==null&&nf(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,n!==null&&t.indexOf(n)===-1&&t.push(n),e)}function Qm(e,t,a,i,n){switch(t){case"focusin":return ha=yn(ha,e,t,a,i,n),!0;case"dragenter":return ga=yn(ga,e,t,a,i,n),!0;case"mouseover":return va=yn(va,e,t,a,i,n),!0;case"pointerover":var l=n.pointerId;return gn.set(l,yn(gn.get(l)||null,e,t,a,i,n)),!0;case"gotpointercapture":return l=n.pointerId,vn.set(l,yn(vn.get(l)||null,e,t,a,i,n)),!0}return!1}function rf(e){var t=Ya(e.target);if(t!==null){var a=K(t);if(a!==null){if(t=a.tag,t===13){if(t=me(a),t!==null){e.blockedOn=t,br(e.priority,function(){lf(a)});return}}else if(t===31){if(t=Oe(a),t!==null){e.blockedOn=t,br(e.priority,function(){lf(a)});return}}else if(t===3&&a.stateNode.current.memoizedState.isDehydrated){e.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}e.blockedOn=null}function _l(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var a=er(e.nativeEvent);if(a===null){a=e.nativeEvent;var i=new a.constructor(a.type,a);eo=i,a.target.dispatchEvent(i),eo=null}else return t=Qa(a),t!==null&&nf(t),e.blockedOn=a,!1;t.shift()}return!0}function uf(e,t,a){_l(e)&&a.delete(t)}function Xm(){ar=!1,ha!==null&&_l(ha)&&(ha=null),ga!==null&&_l(ga)&&(ga=null),va!==null&&_l(va)&&(va=null),gn.forEach(uf),vn.forEach(uf)}function Nl(e,t){e.blockedOn===t&&(e.blockedOn=null,ar||(ar=!0,w.unstable_scheduleCallback(w.unstable_NormalPriority,Xm)))}var Bl=null;function cf(e){Bl!==e&&(Bl=e,w.unstable_scheduleCallback(w.unstable_NormalPriority,function(){Bl===e&&(Bl=null);for(var t=0;t<e.length;t+=3){var a=e[t],i=e[t+1],n=e[t+2];if(typeof i!="function"){if(tr(i||a)===null)continue;break}var l=Qa(a);l!==null&&(e.splice(t,3),t-=3,es(l,{pending:!0,data:n,method:a.method,action:i},i,n))}}))}function Ti(e){function t(r){return Nl(r,e)}ha!==null&&Nl(ha,e),ga!==null&&Nl(ga,e),va!==null&&Nl(va,e),gn.forEach(t),vn.forEach(t);for(var a=0;a<ya.length;a++){var i=ya[a];i.blockedOn===e&&(i.blockedOn=null)}for(;0<ya.length&&(a=ya[0],a.blockedOn===null);)rf(a),a.blockedOn===null&&ya.shift();if(a=(e.ownerDocument||e).$$reactFormReplay,a!=null)for(i=0;i<a.length;i+=3){var n=a[i],l=a[i+1],o=n[Ge]||null;if(typeof l=="function")o||cf(a);else if(o){var s=null;if(l&&l.hasAttribute("formAction")){if(n=l,o=l[Ge]||null)s=o.formAction;else if(tr(n)!==null)continue}else s=o.action;typeof s=="function"?a[i+1]=s:(a.splice(i,3),i-=3),cf(a)}}}function df(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(o){return n=o})},focusReset:"manual",scroll:"manual"})}function t(){n!==null&&(n(),n=null),i||setTimeout(a,20)}function a(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,n=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(a,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),n!==null&&(n(),n=null)}}}function ir(e){this._internalRoot=e}Hl.prototype.render=ir.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(h(409));var a=t.current,i=lt();tf(a,i,e,t,null,null)},Hl.prototype.unmount=ir.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;tf(e.current,2,null,e,null,null),vl(),t[Ga]=null}};function Hl(e){this._internalRoot=e}Hl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sr();e={blockedOn:null,target:e,priority:t};for(var a=0;a<ya.length&&t!==0&&t<ya[a].priority;a++);ya.splice(a,0,e),a===0&&rf(e)}};var ff=de.version;if(ff!=="19.2.7")throw Error(h(527,ff,"19.2.7"));E.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(h(188)):(e=Object.keys(e).join(","),Error(h(268,e)));return e=M(t),e=e!==null?W(e):null,e=e===null?null:e.stateNode,e};var jm={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:y,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var kl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!kl.isDisabled&&kl.supportsFiber)try{wi=kl.inject(jm),We=kl}catch{}}return Sn.createRoot=function(e,t){if(!O(e))throw Error(h(299));var a=!1,i="",n=yc,l=Ac,o=Sc;return t!=null&&(t.unstable_strictMode===!0&&(a=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(n=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=$d(e,1,!1,null,null,a,i,null,n,l,o,df),e[Ga]=t.current,ks(e),new ir(t)},Sn.hydrateRoot=function(e,t,a){if(!O(e))throw Error(h(299));var i=!1,n="",l=yc,o=Ac,s=Sc,r=null;return a!=null&&(a.unstable_strictMode===!0&&(i=!0),a.identifierPrefix!==void 0&&(n=a.identifierPrefix),a.onUncaughtError!==void 0&&(l=a.onUncaughtError),a.onCaughtError!==void 0&&(o=a.onCaughtError),a.onRecoverableError!==void 0&&(s=a.onRecoverableError),a.formState!==void 0&&(r=a.formState)),t=$d(e,1,!0,t,a??null,i,n,r,l,o,s,df),t.context=ef(null),a=t.current,i=lt(),i=Zl(i),n=ia(i),n.callback=null,na(a,n,i),a=i,t.current.lanes=a,Ri(t,a),Ct(t),e[Ga]=t.current,ks(e),new Hl(t)},Sn.version="19.2.7",Sn}var Mf;function th(){if(Mf)return or.exports;Mf=1;function w(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(w)}catch(de){console.error(de)}}return w(),or.exports=eh(),or.exports}var ah=th();function ih(){const[w,de]=Ef.useState(null),P=[{id:1,question:"1. Explain the Mobility Landscape. Discuss the characteristics and importance of mobile computing.",answer:"",codeExample:`
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
      
      `},{id:1,question:"1. ",answer:"",codeExample:""},{id:31,question:"31. What is Debugging in Mobile Apps? Explain the debugging process and tools used for debugging Android applications. -> Logcat, Breakpoints, Debugger",answer:"",codeExample:`
What is Debugging in Mobile Apps?

What is Debugging?

Debugging is the process of finding, analyzing, and fixing errors (bugs)
in a mobile application.

Bugs may cause:

- Application crashes
- Incorrect output
- Slow performance
- UI problems
- Unexpected behavior

Definition (2 Marks)

Debugging is the systematic process of identifying, analyzing, and correcting
errors in an Android application.


Debugging Process

The basic debugging process is:

Run Android App
      │
      ▼
Find the Problem
      │
      ▼
Reproduce the Error
      │
      ▼
Analyze the Code
      │
      ▼
Use Debugging Tools
      │
      ▼
Find the Cause
      │
      ▼
Fix the Error
      │
      ▼
Test Again
      │
      ▼
Problem Solved


Step 1: Identify the Problem

First, observe the application's behavior and identify what is going wrong.
Example: The app crashes when the Login button is clicked.


Step 2: Reproduce the Problem

Perform the same steps again to confirm that the problem can be reproduced.


Step 3: Analyze the Code

Check the code related to the problem and look for errors.


Step 4: Use Debugging Tools

Use Logcat, Breakpoints, and Debugger to understand what is happening
inside the application.


Step 5: Fix the Error

Correct the problematic code.


Step 6: Test Again

Run the application again and verify that the problem has been solved.


Tools Used for Debugging Android Applications

The three important debugging tools are:

1. Logcat
2. Breakpoints
3. Debugger


1. Logcat

What is Logcat?

Logcat is a tool in Android Studio that displays system messages,
application logs, warnings, errors, and exceptions.

It is very useful for finding runtime problems.

Example:

Log.d("Login", "Login button clicked");

Logcat may show:

D/Login: Login button clicked


Different Log Levels

Level       Method      Purpose

Debug       Log.d()     Debugging information
Info        Log.i()     General information
Warning     Log.w()     Warning messages
Error       Log.e()     Error messages


Example:

Log.d("APP", "Value = " + value);

Log.e("APP", "Database connection failed");


Uses of Logcat

- Find runtime errors.
- View exception messages.
- Check variable values.
- Track application execution.
- Identify crashes.


2. Breakpoints

What is a Breakpoint?

A Breakpoint is a marker placed on a line of code where program execution
should pause during debugging.

It allows us to examine what is happening at that exact point.

Example:

int a = 10;
int b = 20;

int sum = a + b;  // Breakpoint here

System.out.println(sum);

When the program reaches the breakpoint, execution pauses.

We can then check:

a = 10
b = 20
sum = 30


Uses of Breakpoints

- Pause program execution.
- Check variable values.
- Find logical errors.
- Execute code step-by-step.
- Understand program flow.


3. Debugger

What is a Debugger?

The Debugger is a tool in Android Studio that allows developers to
control and examine the execution of an application.

It works together with breakpoints.

When execution pauses at a breakpoint, the debugger can show:

- Variable values
- Call stack
- Current line
- Program flow
- Object information


Common Debugger Controls

Resume        → Continue execution
Step Over     → Execute current line
Step Into     → Enter a method
Step Out      → Exit current method
Stop          → Stop debugging


Example of Debugging

Suppose we have:

int a = 10;
int b = 0;

int result = a / b;

The application may crash because division by zero is invalid.


Debugging Process

Application Crash
       │
       ▼
Check Logcat
       │
       ▼
Find ArithmeticException
       │
       ▼
Set Breakpoint
       │
       ▼
Check a and b
       │
       ▼
b = 0
       │
       ▼
Find the Problem
       │
       ▼
Fix the Code


For example:

if (b != 0) {
    int result = a / b;
}


Logcat vs Breakpoint vs Debugger

Tool          Main Purpose

Logcat        Displays logs, errors, warnings, and exceptions

Breakpoint    Pauses execution at a selected line

Debugger      Examines and controls program execution


Advantages of Debugging

- Finds errors quickly.
- Improves application reliability.
- Helps understand program execution.
- Makes code easier to maintain.
- Reduces application crashes.
- Helps verify variable values and program logic.


Exam Definition (2 Marks)

Debugging is the process of finding and fixing errors in a mobile
application.

In Android Studio, important debugging tools include Logcat, which
displays logs and errors; Breakpoints, which pause execution at a
specific line; and the Debugger, which allows developers to inspect
and control program execution.


5-Mark Summary

1. Identify the problem.
2. Reproduce the error.
3. Analyze the code.
4. Use Logcat to check errors and logs.
5. Use Breakpoints to pause execution.
6. Use the Debugger to inspect variables and program flow.
7. Fix and test the application again.
      
      `},{id:32,question:"32. Explain White Box Testing and Black Box Testing. Differentiate between them.",answer:"",codeExample:`
White Box Testing and Black Box Testing


1. What is Software Testing?

Software Testing is the process of checking an application to find errors,
bugs, and incorrect behavior and to make sure the software works as expected.

There are two common testing approaches:

1. White Box Testing
2. Black Box Testing


2. White Box Testing

Definition

White Box Testing is a testing technique in which the tester knows and
examines the internal code, logic, structure, and working of the program.

It is also called:

- Structural Testing
- Glass Box Testing
- Clear Box Testing


Example

Suppose we have:

if (age >= 18) {
    System.out.println("Eligible");
} else {
    System.out.println("Not Eligible");
}

In White Box Testing, the tester checks both paths:

          age >= 18?
           /              Yes        No
         |          |
     Eligible    Not Eligible

The tester makes sure that both branches of the code are executed and tested.


Techniques

- Statement Coverage – checks whether every statement is executed.
- Branch Coverage – checks whether every decision branch is tested.
- Path Coverage – checks different execution paths.
- Condition Coverage – checks individual conditions.


Advantages

- Finds errors in internal logic.
- Tests individual code paths.
- Helps identify unreachable code.
- Provides good code coverage.
- Useful for developers.


Disadvantages

- Requires programming knowledge.
- Can be time-consuming for large applications.
- May not find missing requirements or incorrect UI behavior.


3. Black Box Testing

Definition

Black Box Testing is a testing technique in which the tester checks the
functionality of the application without knowing its internal code or
implementation.

The tester focuses on:

Input → Application → Output


Example

Suppose an application has a login screen:

Username: Raj
Password: 1234
       ↓
    Login
       ↓
   Application
       ↓
Login Successful

The tester checks:

- Correct username + password → Login successful
- Wrong username + password → Error message
- Empty username → Validation message
- Empty password → Validation message

The tester does not need to know how the login code is written.


Techniques

- Equivalence Partitioning
- Boundary Value Analysis
- Decision Table Testing
- State Transition Testing
- Use Case Testing


Advantages

- Does not require programming knowledge.
- Tests the application from the user's point of view.
- Useful for testing requirements and functionality.
- Can identify missing or incorrect functionality.


Disadvantages

- Internal code paths may remain untested.
- Difficult to achieve complete code coverage.
- Some hidden errors may not be detected.


4. Difference Between White Box and Black Box Testing

White Box Testing                    Black Box Testing

Internal code is known.              Internal code is not known.

Tests code structure and logic.      Tests functionality and behavior.

Usually performed by developers.     Can be performed by testers.

Requires programming knowledge.      Usually does not require programming
                                     knowledge.

Focuses on how the system works.     Focuses on what the system does.

Uses statement, branch, and           Uses equivalence partitioning,
path coverage.                        boundary value, etc.

Code is directly examined.            Code is treated as a "black box".

Finds logic and coding errors.        Finds functional and requirement
                                     errors.
      
      `},{id:33,question:"33. Explain Test Automation of Mobile Applications. What are its advantages?",answer:"",codeExample:`
Test Automation of Mobile Applications


1. What is Test Automation?

Test Automation is the process of using software tools and scripts to
automatically test a mobile application instead of performing all tests
manually.

In mobile application testing, automated tests can check:

- User interface (UI)
- Buttons and menus
- Login and registration
- Navigation
- API and database operations
- Different screen sizes
- Performance
- Application functionality


Simple Example

Suppose a mobile app has a login screen.

Manual Testing:

Open App
   ↓
Enter Username
   ↓
Enter Password
   ↓
Click Login
   ↓
Check Result


Automated Testing:

Test Script
    ↓
Opens App
    ↓
Enters Username
    ↓
Enters Password
    ↓
Clicks Login
    ↓
Checks Result Automatically


2. How Test Automation Works

The general process is:

Test Cases
    ↓
Write Automation Script
    ↓
Select Device / Emulator
    ↓
Run Test
    ↓
Application Performs Actions
    ↓
Compare Actual Result
       with
Expected Result
    ↓
Pass / Fail Report


Example

Suppose the expected result is:

Username = Raj
Password = 1234
Expected → Login Successful

The automation tool performs these actions automatically and checks whether
the actual result is Login Successful.


3. Tools Used for Mobile Test Automation

Some commonly used tools are:


1. Appium

Appium is a popular open-source tool used to automate testing of mobile
applications.

It supports:

- Android
- iOS
- Native apps
- Hybrid apps
- Mobile web applications


2. Espresso

Espresso is an Android UI testing framework used for testing Android
applications.

It is useful for testing:

- Buttons
- Text fields
- Lists
- Screen navigation


3. XCUITest

XCUITest is Apple's framework for automated UI testing of iOS applications.


Exam Definition — 2 Marks

Test Automation of Mobile Applications is the process of using automation
tools and scripts to automatically execute test cases and verify the
functionality, performance, and behavior of a mobile application.


5-Mark Summary

Test Automation = Automated execution of mobile app test cases.

Main steps:

Identify Test Cases → Create Scripts → Select Device → Execute Tests
→ Check Results → Fix & Retest


Main advantages:

✓ Saves time
✓ Reduces human errors
✓ Reusable tests
✓ Faster regression testing
✓ Better device coverage
✓ Automatic reports
✓ Supports continuous testing
      
      `},{id:34,question:"34. Explain JUnit for Android. How is JUnit used for testing Android applications?",answer:"",codeExample:`
JUnit for Android


1. What is JUnit?

JUnit is a Java-based unit testing framework used to test small parts of an
application, such as methods, classes, and business logic.

In Android development, JUnit is commonly used to check whether individual
methods are producing the correct output for given inputs.


Simple Example

Suppose we have:

public int add(int a, int b) {
    return a + b;
}

We can use JUnit to check:

Input:           10, 20
Expected Output: 30
Actual Output:   30
Result:          PASS


2. Why is JUnit Used in Android?

JUnit helps developers test application logic before or during development.

It can be used to test:

- Mathematical calculations
- String operations
- Validation logic
- Business logic
- Data processing
- Utility methods
- ViewModel-related logic

For example, if an application calculates attendance:

Total Classes = 100
Attended      = 80

Expected Attendance = 80%

JUnit can automatically check whether the calculation gives 80%.


3. Types of Android Tests Related to JUnit


1. Local Unit Tests

These tests run on the development computer/JVM and are generally placed in:

app/src/test/

They are suitable for testing logic that does not require an Android device.

Example:

@Test
public void additionTest() {
    int result = 10 + 20;

    assertEquals(30, result);
}


2. Instrumented Tests

These tests run on an Android device or emulator and are generally placed in:

app/src/androidTest/

They are useful when the test needs Android framework components or
UI/device interaction.


4. Important JUnit Annotations

JUnit provides annotations to identify test methods.


@Test

Used to indicate that a method is a test method.

@Test
public void additionTest() {
    assertEquals(30, 10 + 20);
}


@Before

Runs before each test.

@Before
public void setUp() {
    // Initialize required objects
}


@After

Runs after each test.

@After
public void tearDown() {
    // Clean up
}


5. Important JUnit Methods

JUnit provides assertion methods to compare the expected result with the
actual result.


assertEquals()

Checks whether two values are equal.

assertEquals(30, 10 + 20);

Expected = 30
Actual   = 30

Result → PASS


assertTrue()

Checks whether a condition is true.

assertTrue(10 > 5);


assertFalse()

Checks whether a condition is false.

assertFalse(5 > 10);


assertNotNull()

Checks that an object is not null.

assertNotNull(user);
      `},{id:35,question:"35. Explain Robotium framework for Android application testing. Explain MonkeyTalk. What is it used for in mobile app testing?",answer:"",codeExample:`
Robotium Framework and MonkeyTalk


Both Robotium and MonkeyTalk are tools/frameworks used for automating mobile
application testing, especially Android applications.


1. Robotium Framework for Android Testing

Definition

Robotium is an open-source Android UI testing framework used to automate
testing of Android applications.

It allows testers to interact with application components such as:

- Buttons
- Text fields
- Menus
- Checkboxes
- Activities
- Dialog boxes

Robotium can perform actions like clicking, entering text, scrolling, and
checking displayed text.


Simple Working

Android Application
        ↓
   Robotium Test
        ↓
Click / Enter Text / Scroll
        ↓
Check Expected Result
        ↓
     PASS / FAIL


2. MonkeyTalk

Definition

MonkeyTalk was a mobile application testing and automation tool used to
record and replay user actions on mobile applications.

It was designed to make mobile UI testing easier, including testing
workflows such as:

- Login
- Navigation
- Button clicks
- Form entry
- Screen interactions


Simple Working

User performs actions
        ↓
MonkeyTalk records actions
        ↓
Test Script
        ↓
Replay automatically
        ↓
Check Result


Example of MonkeyTalk

Suppose a user performs:

Open App
   ↓
Click Login
   ↓
Enter Username
   ↓
Enter Password
   ↓
Click Submit

MonkeyTalk can record these actions and later replay them automatically.

This is useful for repeated testing.


4. Robotium vs MonkeyTalk

Robotium                              MonkeyTalk

Android UI testing framework.         Mobile UI automation tool.

Mainly associated with Android       Designed for mobile application
application testing.                 automation.

Tests are generally written as        Supports recording and replaying
test code.                            actions.

Provides programmatic control of     Focuses strongly on user-action
UI components.                        automation.

Useful for automated Android UI      Useful for functional and regression
testing.                              testing.


5-Mark Summary

Robotium
   ↓
Android UI Testing
   ↓
Automates UI Actions
   ↓
Checks Application Behavior


MonkeyTalk
   ↓
Record User Actions
   ↓
Create Test
   ↓
Replay Automatically
   ↓
Check Result


In short:

Robotium = Android UI testing framework
MonkeyTalk = Record-and-replay mobile testing tool
      `},{id:41,question:"41. Explain Versioning, Signing and Packaging of Mobile Applications.",answer:"",codeExample:`
Versioning, Signing and Packaging of Mobile Applications


When a mobile application is ready for testing or publishing, it needs to be
versioned, signed, and packaged properly.

These three steps help identify app releases, verify the app's authenticity,
and prepare the app for installation/distribution.


1. Versioning

Definition

Versioning is the process of assigning a version number to different releases
of a mobile application.

For example:

Version 1.0 → First Release
Version 1.1 → Bug Fixes
Version 2.0 → Major New Features

In Android, two important version values are commonly used:


versionCode

- An internal version number.
- Used to identify different releases.
- It should increase when a new version is published.

Example:

versionCode = 1
versionCode = 2
versionCode = 3


versionName

- A user-visible version name.
- Example:

versionName = "1.0"
versionName = "1.1"
versionName = "2.0"


Example

App Name: MyApp

versionCode = 5
versionName = "2.1"

Here:

- 5 identifies the release internally.
- 2.1 is the version shown to users.


2. Signing

Definition

Signing is the process of digitally signing a mobile application using a
digital certificate/key.

For Android, an application is signed using a keystore and signing key.


Why is signing required?

Signing helps:

- Identify the developer/app publisher.
- Verify that the application has not been modified.
- Establish trust between application updates.
- Allow Android/app stores to verify the application.


Simple Process

Android App
     ↓
Build APK/AAB
     ↓
Digital Signing Key
     ↓
Signed Application
     ↓
Distribution / Installation


Debug vs Release Signing

Debug build:

- Used during development and testing.
- Usually signed automatically with a debug key.

Release build:

- Used for distribution/publishing.
- Should be signed with the developer's release signing key.

The release signing key must be protected carefully because it is important
for future application updates.


3. Packaging

Definition

Packaging is the process of combining the application code, resources,
assets, configuration, and other required files into a distributable
application package.

For Android, common package formats are:


APK

APK (Android Package) is an installable Android application package.

Example:

MyApp.apk

It can be installed on compatible Android devices.


AAB

AAB (Android App Bundle) is a publishing format used to upload an Android
application to Google Play.

Example:

MyApp.aab

The app store can use the bundle to generate optimized APKs for different
devices.


Difference Between Versioning, Signing and Packaging

Versioning                              Signing

Identifies app releases.                Verifies app authenticity and integrity.

Uses versionCode and versionName.       Uses a digital signing key/certificate.

Helps manage app updates.               Helps establish trust and secure updates.

Example: 1.0, 1.1, 2.0.                Example: Release keystore/key.


Packaging

Creates a distributable app package.

Produces APK or AAB.

Helps distribute/install the app.

Example: .apk, .aab.


Exam Definition — 2 Marks

Versioning is the process of assigning version numbers to different releases
of a mobile application.

Signing is the process of digitally signing an application to verify its
authenticity and integrity.

Packaging is the process of combining application code and resources into a
distributable format such as APK or AAB.
      
      `},{id:42,question:"42. Explain the process of distributing mobile applications on a mobile marketplace.",answer:"",codeExample:`
Distribution of Mobile Applications on a Mobile Marketplace

1. What is Mobile App Distribution?

Mobile application distribution is the process of making a mobile
application available to users through an official mobile marketplace
or app store.

Examples:

- Google Play Store → Android applications
- Apple App Store → iOS applications

The developer prepares the app, creates a store listing, submits it
for review, and after approval, users can download and install it.


2. Process of Distributing a Mobile Application

The general process is:

Develop Application
       ↓
Test Application
       ↓
Version the Application
       ↓
Sign the Application
       ↓
Create APK / AAB / iOS Package
       ↓
Create Developer Account
       ↓
Create App Store Listing
       ↓
Upload Application
       ↓
Submit for Review
       ↓
Marketplace Approval
       ↓
Publish Application
       ↓
Users Download & Install


Step 1: Develop the Application

First, the developer creates the mobile application.

Example:

Food Delivery App
     ↓
Login
Menu
Cart
Payment
Order Tracking


Step 2: Test the Application

The application is tested to find bugs and verify that all features
work correctly.

Testing may include:

- Functional testing
- UI testing
- Performance testing
- Security testing
- Compatibility testing


Step 3: Version the Application

A version number is assigned to the application.

For Android:

versionCode = 1
versionName = "1.0"

For a later update:

versionCode = 2
versionName = "1.1"


Step 4: Sign the Application

The application is digitally signed using the appropriate signing
key/certificate.

Signing helps establish the application's identity and integrity.

For Android, release applications are signed before distribution.


Step 5: Create the Application Package

The application is built into a format suitable for distribution.

For Android:

APK → Android application package
AAB → Android App Bundle

For iOS, the application is prepared for distribution through
Apple's ecosystem.


3. Create Developer Account

The developer needs an account with the relevant marketplace.

For example:

Android → Google Play Console
iOS     → App Store Connect

The developer provides the required account and developer information.


4. Create App Store Listing

The developer provides information about the application, such as:

- Application name
- Application description
- Application icon
- Screenshots
- Category
- Content rating
- Privacy information
- Support/contact information

Example:

App Name: Food Delivery
Category: Food & Drink

Description:
Order food from nearby restaurants.


5. Upload the Application

The developer uploads the prepared application package to the
marketplace.

For example:

Android
   ↓
Upload AAB
   ↓
Google Play Console

The developer also provides the required release information.


6. Marketplace Review

The marketplace checks the application before making it publicly
available.

The review can include checks related to:

- Functionality
- Security
- Privacy
- Content
- Marketplace policies
- Required declarations

If problems are found, the developer may need to fix them and submit
the application again.


7. Publish the Application

After the application is approved, it can be published on the
marketplace.

Approved
   ↓
Published
   ↓
Users can find the application
   ↓
Download / Install

The developer may also choose appropriate availability, pricing,
and release options supported by the marketplace.


Distribution Process:

Develop → Test → Version → Sign → Package → Create Developer Account
→ Create Store Listing → Upload → Review → Approval → Publish
→ Update


Main Marketplaces

Android                         iOS
------------------------------------------------------------
Google Play Store               Apple App Store
Google Play Console             App Store Connect
APK / AAB                       iOS distribution package


In short:

The application is developed and tested, then versioned, signed,
packaged, uploaded to the marketplace, reviewed for compliance,
and finally published for users.
      
      `},{id:43,question:"43. What are Wireless Markup Languages? Explain their need and features.",answer:"",codeExample:`
Wireless Markup Languages (WML)

1. What is Wireless Markup Language?

Wireless Markup Language (WML) is a markup language designed for
creating web pages and applications for wireless/mobile devices,
especially older mobile phones with limited screen size, memory,
processing power, and network speed.

WML was mainly used with WAP (Wireless Application Protocol).

Definition:

WML is an XML-based markup language used to create content for
mobile and wireless devices through WAP.

It is similar in concept to HTML, but it was designed for the
limitations of early mobile devices.


2. Why is WML Needed?

Older mobile phones had several limitations:

- Small screens
- Limited memory
- Low processing power
- Slow wireless networks
- Limited input methods
- Limited storage

Therefore, normal desktop web pages were not suitable for these
devices.

WML was designed to provide small, simple, and mobile-friendly
content.

Simple idea:

Desktop Web
    ↓
HTML
    ↓
Large Screen + Powerful Device


Mobile Web
    ↓
WML
    ↓
Small Screen + Limited Device


3. Need for WML

1. Support Small Screens

WML allows content to be designed for small mobile displays.

2. Reduce Data Usage

WML pages were designed to keep content relatively small, which
was useful with slow wireless networks.

3. Support Limited Devices

It was suitable for mobile devices with limited:

- Memory
- CPU power
- Storage

4. Mobile Navigation

WML provides mechanisms for navigating between different mobile
pages/cards.

5. Wireless Access

It was used to provide services such as:

- News
- Weather
- Banking information
- Stock information
- Mobile searches


4. Features of WML

1. XML-Based

WML is based on XML, so it follows structured markup rules.

Example:

<wml>
   <card>
      <p>Hello Mobile User</p>
   </card>
</wml>


2. Designed for Mobile Devices

WML was specifically designed for devices with small screens and
limited resources.


3. Card and Deck Structure

This is one of the important concepts of WML.

A Deck contains one or more Cards.

WML Deck
   |
   +--- Card 1
   |
   +--- Card 2
   |
   +--- Card 3

A card represents a single unit of interaction or screen content.


4. Supports Navigation

Users can move from one card to another.

Card 1
  ↓
Card 2
  ↓
Card 3


5. Supports User Input

WML can provide input elements such as:

- Text input
- Selection
- Buttons/actions


6. Supports Basic Formatting

WML provides basic elements for displaying and formatting text.

Example:

<p>Welcome to Mobile Website</p>


7. Supports Links

Users can navigate to other cards or resources.

Example:

<a href="#card2">Next</a>


Wireless Markup Language (WML) is an XML-based markup language
designed for creating web content and applications for wireless
and mobile devices, particularly those using WAP.


5-Mark Summary

WML = Wireless Markup Language

Need:

- Small mobile screens
- Low bandwidth
- Limited memory
- Limited processing power
- Mobile-friendly content

Features:

- XML-based
- Card and Deck structure
- Mobile-oriented
- Supports navigation
- Supports user input
- Supports links
- Suitable for low-bandwidth networks

WML
 ↓
Deck
 ↓
Cards
 ↓
Mobile Content
      
      `},{id:44,question:"44. Explain HDML, WML, HTML, cHTML, XHTML and VoiceXML.",answer:"",codeExample:`
Difference Between HDML, WML, HTML, cHTML, XHTML and VoiceXML

These are different markup languages developed for different types
of devices and applications.


1. Basic Meaning

- HDML → Handheld Device Markup Language
- WML → Wireless Markup Language
- HTML → HyperText Markup Language
- cHTML → Compact HTML
- XHTML → Extensible HyperText Markup Language
- VoiceXML → Voice Extensible Markup Language


2. Comparison

HDML
- Designed for early handheld devices.
- Developed by Unwired Planet.
- Mainly used in early mobile phones.
- Provides text-based mobile content.
- Supports simple navigation.
- Legacy technology.

WML
- Designed for wireless/mobile devices.
- Developed for WAP.
- Used in WAP-enabled phones.
- Provides text and simple mobile interaction.
- Uses Card and Deck structure.
- Legacy technology.

HTML
- Designed for general web pages.
- Standard language of the Web.
- Used on websites and browsers.
- Supports rich web content.
- Uses web pages/documents.
- Still widely used.

cHTML
- Designed for small mobile/limited devices.
- Developed by NTT DoCoMo.
- Used mainly with i-mode mobile services.
- Provides simplified HTML.
- Uses simplified tags and features.
- Mostly legacy technology.

XHTML
- XML-based version of HTML.
- Combines HTML with XML rules.
- Used for structured web documents.
- Provides structured and strict web content.
- Uses XML syntax.
- Used in web/XML-based applications.

VoiceXML
- Designed for voice-based applications.
- Used for voice interaction.
- Used in voice portals and IVR systems.
- Provides voice/audio-based interaction.
- Uses dialogs and voice input/output.
- Used for voice applications.


Comparison Table

Feature              HDML                  WML
------------------------------------------------------------
Full Form            Handheld Device      Wireless Markup
                     Markup Language      Language
Purpose              Early handheld       Wireless/mobile
                     devices              devices
Technology            Legacy               Legacy
Structure             Simple content       Card and Deck


Feature              HTML                  cHTML
------------------------------------------------------------
Full Form            HyperText Markup      Compact HTML
                     Language
Purpose              General web pages     Compact mobile web
                                             content
Technology            Widely used           Mostly legacy
Structure             Web pages/documents   Simplified HTML


Feature              XHTML                 VoiceXML
------------------------------------------------------------
Full Form            Extensible            Voice Extensible
                     HyperText Markup      Markup Language
                     Language
Purpose              Structured web        Voice-based
                     documents             applications
Technology            XML-based             Voice interaction
Structure             XML syntax            Dialogs and voice
                                           input/output


Exam Definition — 2 Marks

HDML, WML, HTML, cHTML, XHTML, and VoiceXML are markup languages
designed for different environments.

HDML and WML were developed for early mobile/wireless devices,
HTML for general web pages, cHTML for compact mobile web content,
XHTML for XML-based web documents, and VoiceXML for voice-based
applications.
      `},{id:1,question:"1. ",answer:"",codeExample:""}],h=O=>{de(w===O?null:O)};return Be.jsxs("div",{className:"app-container",children:[Be.jsx("h1",{children:"MAD Interview Questions"}),Be.jsx("div",{className:"questions-container",children:P.map(O=>Be.jsxs("div",{className:"question-item",children:[Be.jsx("button",{className:`question-button ${w===O.id?"active":""}`,onClick:()=>h(O.id),children:O.question}),w===O.id&&Be.jsxs("div",{className:"answer-container",children:[Be.jsxs("div",{className:"answer",children:[Be.jsx("h3",{children:"Answer:"}),Be.jsx("p",{children:O.answer})]}),O.codeExample&&Be.jsxs("div",{className:"code-example",children:[Be.jsx("h3",{children:"Code Example:"}),Be.jsx("pre",{children:Be.jsx("code",{children:O.codeExample})})]})]})]},O.id))})]})}ah.createRoot(document.getElementById("root")).render(Be.jsx(Ef.StrictMode,{children:Be.jsx(ih,{})}));
