(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const c of l.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function i(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Qg(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var _p={exports:{}},Eu={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var SE;function F2(){if(SE)return Eu;SE=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(i,s,l){var c=null;if(l!==void 0&&(c=""+l),s.key!==void 0&&(c=""+s.key),"key"in s){l={};for(var d in s)d!=="key"&&(l[d]=s[d])}else l=s;return s=l.ref,{$$typeof:n,type:i,key:c,ref:s!==void 0?s:null,props:l}}return Eu.Fragment=e,Eu.jsx=t,Eu.jsxs=t,Eu}var RE;function q2(){return RE||(RE=1,_p.exports=F2()),_p.exports}var A=q2(),vp={exports:{}},xe={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var IE;function H2(){if(IE)return xe;IE=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.consumer"),c=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),g=Symbol.for("react.memo"),_=Symbol.for("react.lazy"),T=Symbol.iterator;function w(k){return k===null||typeof k!="object"?null:(k=T&&k[T]||k["@@iterator"],typeof k=="function"?k:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D=Object.assign,H={};function L(k,ne,ce){this.props=k,this.context=ne,this.refs=H,this.updater=ce||x}L.prototype.isReactComponent={},L.prototype.setState=function(k,ne){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,ne,"setState")},L.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function $(){}$.prototype=L.prototype;function Z(k,ne,ce){this.props=k,this.context=ne,this.refs=H,this.updater=ce||x}var Q=Z.prototype=new $;Q.constructor=Z,D(Q,L.prototype),Q.isPureReactComponent=!0;var re=Array.isArray,ae={H:null,A:null,T:null,S:null,V:null},ge=Object.prototype.hasOwnProperty;function O(k,ne,ce,oe,ye,De){return ce=De.ref,{$$typeof:n,type:k,key:ne,ref:ce!==void 0?ce:null,props:De}}function R(k,ne){return O(k.type,ne,void 0,void 0,void 0,k.props)}function I(k){return typeof k=="object"&&k!==null&&k.$$typeof===n}function P(k){var ne={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(ce){return ne[ce]})}var V=/\/+/g;function j(k,ne){return typeof k=="object"&&k!==null&&k.key!=null?P(""+k.key):ne.toString(36)}function N(){}function $t(k){switch(k.status){case"fulfilled":return k.value;case"rejected":throw k.reason;default:switch(typeof k.status=="string"?k.then(N,N):(k.status="pending",k.then(function(ne){k.status==="pending"&&(k.status="fulfilled",k.value=ne)},function(ne){k.status==="pending"&&(k.status="rejected",k.reason=ne)})),k.status){case"fulfilled":return k.value;case"rejected":throw k.reason}}throw k}function mt(k,ne,ce,oe,ye){var De=typeof k;(De==="undefined"||De==="boolean")&&(k=null);var Re=!1;if(k===null)Re=!0;else switch(De){case"bigint":case"string":case"number":Re=!0;break;case"object":switch(k.$$typeof){case n:case e:Re=!0;break;case _:return Re=k._init,mt(Re(k._payload),ne,ce,oe,ye)}}if(Re)return ye=ye(k),Re=oe===""?"."+j(k,0):oe,re(ye)?(ce="",Re!=null&&(ce=Re.replace(V,"$&/")+"/"),mt(ye,ne,ce,"",function(hr){return hr})):ye!=null&&(I(ye)&&(ye=R(ye,ce+(ye.key==null||k&&k.key===ye.key?"":(""+ye.key).replace(V,"$&/")+"/")+Re)),ne.push(ye)),1;Re=0;var jt=oe===""?".":oe+":";if(re(k))for(var at=0;at<k.length;at++)oe=k[at],De=jt+j(oe,at),Re+=mt(oe,ne,ce,De,ye);else if(at=w(k),typeof at=="function")for(k=at.call(k),at=0;!(oe=k.next()).done;)oe=oe.value,De=jt+j(oe,at++),Re+=mt(oe,ne,ce,De,ye);else if(De==="object"){if(typeof k.then=="function")return mt($t(k),ne,ce,oe,ye);throw ne=String(k),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.")}return Re}function X(k,ne,ce){if(k==null)return k;var oe=[],ye=0;return mt(k,oe,"","",function(De){return ne.call(ce,De,ye++)}),oe}function ue(k){if(k._status===-1){var ne=k._result;ne=ne(),ne.then(function(ce){(k._status===0||k._status===-1)&&(k._status=1,k._result=ce)},function(ce){(k._status===0||k._status===-1)&&(k._status=2,k._result=ce)}),k._status===-1&&(k._status=0,k._result=ne)}if(k._status===1)return k._result.default;throw k._result}var pe=typeof reportError=="function"?reportError:function(k){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var ne=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof k=="object"&&k!==null&&typeof k.message=="string"?String(k.message):String(k),error:k});if(!window.dispatchEvent(ne))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",k);return}console.error(k)};function Ge(){}return xe.Children={map:X,forEach:function(k,ne,ce){X(k,function(){ne.apply(this,arguments)},ce)},count:function(k){var ne=0;return X(k,function(){ne++}),ne},toArray:function(k){return X(k,function(ne){return ne})||[]},only:function(k){if(!I(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},xe.Component=L,xe.Fragment=t,xe.Profiler=s,xe.PureComponent=Z,xe.StrictMode=i,xe.Suspense=m,xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=ae,xe.__COMPILER_RUNTIME={__proto__:null,c:function(k){return ae.H.useMemoCache(k)}},xe.cache=function(k){return function(){return k.apply(null,arguments)}},xe.cloneElement=function(k,ne,ce){if(k==null)throw Error("The argument must be a React element, but you passed "+k+".");var oe=D({},k.props),ye=k.key,De=void 0;if(ne!=null)for(Re in ne.ref!==void 0&&(De=void 0),ne.key!==void 0&&(ye=""+ne.key),ne)!ge.call(ne,Re)||Re==="key"||Re==="__self"||Re==="__source"||Re==="ref"&&ne.ref===void 0||(oe[Re]=ne[Re]);var Re=arguments.length-2;if(Re===1)oe.children=ce;else if(1<Re){for(var jt=Array(Re),at=0;at<Re;at++)jt[at]=arguments[at+2];oe.children=jt}return O(k.type,ye,void 0,void 0,De,oe)},xe.createContext=function(k){return k={$$typeof:c,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null},k.Provider=k,k.Consumer={$$typeof:l,_context:k},k},xe.createElement=function(k,ne,ce){var oe,ye={},De=null;if(ne!=null)for(oe in ne.key!==void 0&&(De=""+ne.key),ne)ge.call(ne,oe)&&oe!=="key"&&oe!=="__self"&&oe!=="__source"&&(ye[oe]=ne[oe]);var Re=arguments.length-2;if(Re===1)ye.children=ce;else if(1<Re){for(var jt=Array(Re),at=0;at<Re;at++)jt[at]=arguments[at+2];ye.children=jt}if(k&&k.defaultProps)for(oe in Re=k.defaultProps,Re)ye[oe]===void 0&&(ye[oe]=Re[oe]);return O(k,De,void 0,void 0,null,ye)},xe.createRef=function(){return{current:null}},xe.forwardRef=function(k){return{$$typeof:d,render:k}},xe.isValidElement=I,xe.lazy=function(k){return{$$typeof:_,_payload:{_status:-1,_result:k},_init:ue}},xe.memo=function(k,ne){return{$$typeof:g,type:k,compare:ne===void 0?null:ne}},xe.startTransition=function(k){var ne=ae.T,ce={};ae.T=ce;try{var oe=k(),ye=ae.S;ye!==null&&ye(ce,oe),typeof oe=="object"&&oe!==null&&typeof oe.then=="function"&&oe.then(Ge,pe)}catch(De){pe(De)}finally{ae.T=ne}},xe.unstable_useCacheRefresh=function(){return ae.H.useCacheRefresh()},xe.use=function(k){return ae.H.use(k)},xe.useActionState=function(k,ne,ce){return ae.H.useActionState(k,ne,ce)},xe.useCallback=function(k,ne){return ae.H.useCallback(k,ne)},xe.useContext=function(k){return ae.H.useContext(k)},xe.useDebugValue=function(){},xe.useDeferredValue=function(k,ne){return ae.H.useDeferredValue(k,ne)},xe.useEffect=function(k,ne,ce){var oe=ae.H;if(typeof ce=="function")throw Error("useEffect CRUD overload is not enabled in this build of React.");return oe.useEffect(k,ne)},xe.useId=function(){return ae.H.useId()},xe.useImperativeHandle=function(k,ne,ce){return ae.H.useImperativeHandle(k,ne,ce)},xe.useInsertionEffect=function(k,ne){return ae.H.useInsertionEffect(k,ne)},xe.useLayoutEffect=function(k,ne){return ae.H.useLayoutEffect(k,ne)},xe.useMemo=function(k,ne){return ae.H.useMemo(k,ne)},xe.useOptimistic=function(k,ne){return ae.H.useOptimistic(k,ne)},xe.useReducer=function(k,ne,ce){return ae.H.useReducer(k,ne,ce)},xe.useRef=function(k){return ae.H.useRef(k)},xe.useState=function(k){return ae.H.useState(k)},xe.useSyncExternalStore=function(k,ne,ce){return ae.H.useSyncExternalStore(k,ne,ce)},xe.useTransition=function(){return ae.H.useTransition()},xe.version="19.1.0",xe}var CE;function Xg(){return CE||(CE=1,vp.exports=H2()),vp.exports}var F=Xg();const Wg=Qg(F);var Ep={exports:{}},Tu={},Tp={exports:{}},bp={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xE;function G2(){return xE||(xE=1,function(n){function e(X,ue){var pe=X.length;X.push(ue);e:for(;0<pe;){var Ge=pe-1>>>1,k=X[Ge];if(0<s(k,ue))X[Ge]=ue,X[pe]=k,pe=Ge;else break e}}function t(X){return X.length===0?null:X[0]}function i(X){if(X.length===0)return null;var ue=X[0],pe=X.pop();if(pe!==ue){X[0]=pe;e:for(var Ge=0,k=X.length,ne=k>>>1;Ge<ne;){var ce=2*(Ge+1)-1,oe=X[ce],ye=ce+1,De=X[ye];if(0>s(oe,pe))ye<k&&0>s(De,oe)?(X[Ge]=De,X[ye]=pe,Ge=ye):(X[Ge]=oe,X[ce]=pe,Ge=ce);else if(ye<k&&0>s(De,pe))X[Ge]=De,X[ye]=pe,Ge=ye;else break e}}return ue}function s(X,ue){var pe=X.sortIndex-ue.sortIndex;return pe!==0?pe:X.id-ue.id}if(n.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var l=performance;n.unstable_now=function(){return l.now()}}else{var c=Date,d=c.now();n.unstable_now=function(){return c.now()-d}}var m=[],g=[],_=1,T=null,w=3,x=!1,D=!1,H=!1,L=!1,$=typeof setTimeout=="function"?setTimeout:null,Z=typeof clearTimeout=="function"?clearTimeout:null,Q=typeof setImmediate<"u"?setImmediate:null;function re(X){for(var ue=t(g);ue!==null;){if(ue.callback===null)i(g);else if(ue.startTime<=X)i(g),ue.sortIndex=ue.expirationTime,e(m,ue);else break;ue=t(g)}}function ae(X){if(H=!1,re(X),!D)if(t(m)!==null)D=!0,ge||(ge=!0,j());else{var ue=t(g);ue!==null&&mt(ae,ue.startTime-X)}}var ge=!1,O=-1,R=5,I=-1;function P(){return L?!0:!(n.unstable_now()-I<R)}function V(){if(L=!1,ge){var X=n.unstable_now();I=X;var ue=!0;try{e:{D=!1,H&&(H=!1,Z(O),O=-1),x=!0;var pe=w;try{t:{for(re(X),T=t(m);T!==null&&!(T.expirationTime>X&&P());){var Ge=T.callback;if(typeof Ge=="function"){T.callback=null,w=T.priorityLevel;var k=Ge(T.expirationTime<=X);if(X=n.unstable_now(),typeof k=="function"){T.callback=k,re(X),ue=!0;break t}T===t(m)&&i(m),re(X)}else i(m);T=t(m)}if(T!==null)ue=!0;else{var ne=t(g);ne!==null&&mt(ae,ne.startTime-X),ue=!1}}break e}finally{T=null,w=pe,x=!1}ue=void 0}}finally{ue?j():ge=!1}}}var j;if(typeof Q=="function")j=function(){Q(V)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,$t=N.port2;N.port1.onmessage=V,j=function(){$t.postMessage(null)}}else j=function(){$(V,0)};function mt(X,ue){O=$(function(){X(n.unstable_now())},ue)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(X){X.callback=null},n.unstable_forceFrameRate=function(X){0>X||125<X?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):R=0<X?Math.floor(1e3/X):5},n.unstable_getCurrentPriorityLevel=function(){return w},n.unstable_next=function(X){switch(w){case 1:case 2:case 3:var ue=3;break;default:ue=w}var pe=w;w=ue;try{return X()}finally{w=pe}},n.unstable_requestPaint=function(){L=!0},n.unstable_runWithPriority=function(X,ue){switch(X){case 1:case 2:case 3:case 4:case 5:break;default:X=3}var pe=w;w=X;try{return ue()}finally{w=pe}},n.unstable_scheduleCallback=function(X,ue,pe){var Ge=n.unstable_now();switch(typeof pe=="object"&&pe!==null?(pe=pe.delay,pe=typeof pe=="number"&&0<pe?Ge+pe:Ge):pe=Ge,X){case 1:var k=-1;break;case 2:k=250;break;case 5:k=1073741823;break;case 4:k=1e4;break;default:k=5e3}return k=pe+k,X={id:_++,callback:ue,priorityLevel:X,startTime:pe,expirationTime:k,sortIndex:-1},pe>Ge?(X.sortIndex=pe,e(g,X),t(m)===null&&X===t(g)&&(H?(Z(O),O=-1):H=!0,mt(ae,pe-Ge))):(X.sortIndex=k,e(m,X),D||x||(D=!0,ge||(ge=!0,j()))),X},n.unstable_shouldYield=P,n.unstable_wrapCallback=function(X){var ue=w;return function(){var pe=w;w=ue;try{return X.apply(this,arguments)}finally{w=pe}}}}(bp)),bp}var NE;function $2(){return NE||(NE=1,Tp.exports=G2()),Tp.exports}var Ap={exports:{}},an={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var OE;function K2(){if(OE)return an;OE=1;var n=Xg();function e(m){var g="https://react.dev/errors/"+m;if(1<arguments.length){g+="?args[]="+encodeURIComponent(arguments[1]);for(var _=2;_<arguments.length;_++)g+="&args[]="+encodeURIComponent(arguments[_])}return"Minified React error #"+m+"; visit "+g+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function t(){}var i={d:{f:t,r:function(){throw Error(e(522))},D:t,C:t,L:t,m:t,X:t,S:t,M:t},p:0,findDOMNode:null},s=Symbol.for("react.portal");function l(m,g,_){var T=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:s,key:T==null?null:""+T,children:m,containerInfo:g,implementation:_}}var c=n.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function d(m,g){if(m==="font")return"";if(typeof g=="string")return g==="use-credentials"?g:""}return an.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,an.createPortal=function(m,g){var _=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!g||g.nodeType!==1&&g.nodeType!==9&&g.nodeType!==11)throw Error(e(299));return l(m,g,null,_)},an.flushSync=function(m){var g=c.T,_=i.p;try{if(c.T=null,i.p=2,m)return m()}finally{c.T=g,i.p=_,i.d.f()}},an.preconnect=function(m,g){typeof m=="string"&&(g?(g=g.crossOrigin,g=typeof g=="string"?g==="use-credentials"?g:"":void 0):g=null,i.d.C(m,g))},an.prefetchDNS=function(m){typeof m=="string"&&i.d.D(m)},an.preinit=function(m,g){if(typeof m=="string"&&g&&typeof g.as=="string"){var _=g.as,T=d(_,g.crossOrigin),w=typeof g.integrity=="string"?g.integrity:void 0,x=typeof g.fetchPriority=="string"?g.fetchPriority:void 0;_==="style"?i.d.S(m,typeof g.precedence=="string"?g.precedence:void 0,{crossOrigin:T,integrity:w,fetchPriority:x}):_==="script"&&i.d.X(m,{crossOrigin:T,integrity:w,fetchPriority:x,nonce:typeof g.nonce=="string"?g.nonce:void 0})}},an.preinitModule=function(m,g){if(typeof m=="string")if(typeof g=="object"&&g!==null){if(g.as==null||g.as==="script"){var _=d(g.as,g.crossOrigin);i.d.M(m,{crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0})}}else g==null&&i.d.M(m)},an.preload=function(m,g){if(typeof m=="string"&&typeof g=="object"&&g!==null&&typeof g.as=="string"){var _=g.as,T=d(_,g.crossOrigin);i.d.L(m,_,{crossOrigin:T,integrity:typeof g.integrity=="string"?g.integrity:void 0,nonce:typeof g.nonce=="string"?g.nonce:void 0,type:typeof g.type=="string"?g.type:void 0,fetchPriority:typeof g.fetchPriority=="string"?g.fetchPriority:void 0,referrerPolicy:typeof g.referrerPolicy=="string"?g.referrerPolicy:void 0,imageSrcSet:typeof g.imageSrcSet=="string"?g.imageSrcSet:void 0,imageSizes:typeof g.imageSizes=="string"?g.imageSizes:void 0,media:typeof g.media=="string"?g.media:void 0})}},an.preloadModule=function(m,g){if(typeof m=="string")if(g){var _=d(g.as,g.crossOrigin);i.d.m(m,{as:typeof g.as=="string"&&g.as!=="script"?g.as:void 0,crossOrigin:_,integrity:typeof g.integrity=="string"?g.integrity:void 0})}else i.d.m(m)},an.requestFormReset=function(m){i.d.r(m)},an.unstable_batchedUpdates=function(m,g){return m(g)},an.useFormState=function(m,g,_){return c.H.useFormState(m,g,_)},an.useFormStatus=function(){return c.H.useHostTransitionStatus()},an.version="19.1.0",an}var DE;function Y2(){if(DE)return Ap.exports;DE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ap.exports=K2(),Ap.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kE;function Q2(){if(kE)return Tu;kE=1;var n=$2(),e=Xg(),t=Y2();function i(r){var a="https://react.dev/errors/"+r;if(1<arguments.length){a+="?args[]="+encodeURIComponent(arguments[1]);for(var o=2;o<arguments.length;o++)a+="&args[]="+encodeURIComponent(arguments[o])}return"Minified React error #"+r+"; visit "+a+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(r){return!(!r||r.nodeType!==1&&r.nodeType!==9&&r.nodeType!==11)}function l(r){var a=r,o=r;if(r.alternate)for(;a.return;)a=a.return;else{r=a;do a=r,(a.flags&4098)!==0&&(o=a.return),r=a.return;while(r)}return a.tag===3?o:null}function c(r){if(r.tag===13){var a=r.memoizedState;if(a===null&&(r=r.alternate,r!==null&&(a=r.memoizedState)),a!==null)return a.dehydrated}return null}function d(r){if(l(r)!==r)throw Error(i(188))}function m(r){var a=r.alternate;if(!a){if(a=l(r),a===null)throw Error(i(188));return a!==r?null:r}for(var o=r,u=a;;){var h=o.return;if(h===null)break;var p=h.alternate;if(p===null){if(u=h.return,u!==null){o=u;continue}break}if(h.child===p.child){for(p=h.child;p;){if(p===o)return d(h),r;if(p===u)return d(h),a;p=p.sibling}throw Error(i(188))}if(o.return!==u.return)o=h,u=p;else{for(var E=!1,b=h.child;b;){if(b===o){E=!0,o=h,u=p;break}if(b===u){E=!0,u=h,o=p;break}b=b.sibling}if(!E){for(b=p.child;b;){if(b===o){E=!0,o=p,u=h;break}if(b===u){E=!0,u=p,o=h;break}b=b.sibling}if(!E)throw Error(i(189))}}if(o.alternate!==u)throw Error(i(190))}if(o.tag!==3)throw Error(i(188));return o.stateNode.current===o?r:a}function g(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r;for(r=r.child;r!==null;){if(a=g(r),a!==null)return a;r=r.sibling}return null}var _=Object.assign,T=Symbol.for("react.element"),w=Symbol.for("react.transitional.element"),x=Symbol.for("react.portal"),D=Symbol.for("react.fragment"),H=Symbol.for("react.strict_mode"),L=Symbol.for("react.profiler"),$=Symbol.for("react.provider"),Z=Symbol.for("react.consumer"),Q=Symbol.for("react.context"),re=Symbol.for("react.forward_ref"),ae=Symbol.for("react.suspense"),ge=Symbol.for("react.suspense_list"),O=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),I=Symbol.for("react.activity"),P=Symbol.for("react.memo_cache_sentinel"),V=Symbol.iterator;function j(r){return r===null||typeof r!="object"?null:(r=V&&r[V]||r["@@iterator"],typeof r=="function"?r:null)}var N=Symbol.for("react.client.reference");function $t(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===N?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case D:return"Fragment";case L:return"Profiler";case H:return"StrictMode";case ae:return"Suspense";case ge:return"SuspenseList";case I:return"Activity"}if(typeof r=="object")switch(r.$$typeof){case x:return"Portal";case Q:return(r.displayName||"Context")+".Provider";case Z:return(r._context.displayName||"Context")+".Consumer";case re:var a=r.render;return r=r.displayName,r||(r=a.displayName||a.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case O:return a=r.displayName||null,a!==null?a:$t(r.type)||"Memo";case R:a=r._payload,r=r._init;try{return $t(r(a))}catch{}}return null}var mt=Array.isArray,X=e.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ue=t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,pe={pending:!1,data:null,method:null,action:null},Ge=[],k=-1;function ne(r){return{current:r}}function ce(r){0>k||(r.current=Ge[k],Ge[k]=null,k--)}function oe(r,a){k++,Ge[k]=r.current,r.current=a}var ye=ne(null),De=ne(null),Re=ne(null),jt=ne(null);function at(r,a){switch(oe(Re,a),oe(De,r),oe(ye,null),a.nodeType){case 9:case 11:r=(r=a.documentElement)&&(r=r.namespaceURI)?J0(r):0;break;default:if(r=a.tagName,a=a.namespaceURI)a=J0(a),r=eE(a,r);else switch(r){case"svg":r=1;break;case"math":r=2;break;default:r=0}}ce(ye),oe(ye,r)}function hr(){ce(ye),ce(De),ce(Re)}function Oi(r){r.memoizedState!==null&&oe(jt,r);var a=ye.current,o=eE(a,r.type);a!==o&&(oe(De,r),oe(ye,o))}function Fr(r){De.current===r&&(ce(ye),ce(De)),jt.current===r&&(ce(jt),pu._currentValue=pe)}var Ma=Object.prototype.hasOwnProperty,La=n.unstable_scheduleCallback,Va=n.unstable_cancelCallback,hl=n.unstable_shouldYield,dc=n.unstable_requestPaint,jn=n.unstable_now,_d=n.unstable_getCurrentPriorityLevel,dl=n.unstable_ImmediatePriority,zs=n.unstable_UserBlockingPriority,Ua=n.unstable_NormalPriority,vd=n.unstable_LowPriority,Bs=n.unstable_IdlePriority,ml=n.log,mc=n.unstable_setDisableYieldValue,pt=null,We=null;function wn(r){if(typeof ml=="function"&&mc(r),We&&typeof We.setStrictMode=="function")try{We.setStrictMode(pt,r)}catch{}}var nn=Math.clz32?Math.clz32:ja,pc=Math.log,Ed=Math.LN2;function ja(r){return r>>>=0,r===0?32:31-(pc(r)/Ed|0)|0}var za=256,Ba=4194304;function er(r){var a=r&42;if(a!==0)return a;switch(r&-r){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r&4194048;case 4194304:case 8388608:case 16777216:case 33554432:return r&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return r}}function Fs(r,a,o){var u=r.pendingLanes;if(u===0)return 0;var h=0,p=r.suspendedLanes,E=r.pingedLanes;r=r.warmLanes;var b=u&134217727;return b!==0?(u=b&~p,u!==0?h=er(u):(E&=b,E!==0?h=er(E):o||(o=b&~r,o!==0&&(h=er(o))))):(b=u&~p,b!==0?h=er(b):E!==0?h=er(E):o||(o=u&~r,o!==0&&(h=er(o)))),h===0?0:a!==0&&a!==h&&(a&p)===0&&(p=h&-h,o=a&-a,p>=o||p===32&&(o&4194048)!==0)?a:h}function Fa(r,a){return(r.pendingLanes&~(r.suspendedLanes&~r.pingedLanes)&a)===0}function pl(r,a){switch(r){case 1:case 2:case 4:case 8:case 64:return a+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function gl(){var r=za;return za<<=1,(za&4194048)===0&&(za=256),r}function yl(){var r=Ba;return Ba<<=1,(Ba&62914560)===0&&(Ba=4194304),r}function qr(r){for(var a=[],o=0;31>o;o++)a.push(r);return a}function Hr(r,a){r.pendingLanes|=a,a!==268435456&&(r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0)}function _l(r,a,o,u,h,p){var E=r.pendingLanes;r.pendingLanes=o,r.suspendedLanes=0,r.pingedLanes=0,r.warmLanes=0,r.expiredLanes&=o,r.entangledLanes&=o,r.errorRecoveryDisabledLanes&=o,r.shellSuspendCounter=0;var b=r.entanglements,C=r.expirationTimes,q=r.hiddenUpdates;for(o=E&~o;0<o;){var W=31-nn(o),ee=1<<W;b[W]=0,C[W]=-1;var G=q[W];if(G!==null)for(q[W]=null,W=0;W<G.length;W++){var K=G[W];K!==null&&(K.lane&=-536870913)}o&=~ee}u!==0&&dr(r,u,0),p!==0&&h===0&&r.tag!==0&&(r.suspendedLanes|=p&~(E&~a))}function dr(r,a,o){r.pendingLanes|=a,r.suspendedLanes&=~a;var u=31-nn(a);r.entangledLanes|=a,r.entanglements[u]=r.entanglements[u]|1073741824|o&4194090}function vl(r,a){var o=r.entangledLanes|=a;for(r=r.entanglements;o;){var u=31-nn(o),h=1<<u;h&a|r[u]&a&&(r[u]|=a),o&=~h}}function Di(r){switch(r){case 2:r=1;break;case 8:r=4;break;case 32:r=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:r=128;break;case 268435456:r=134217728;break;default:r=0}return r}function qs(r){return r&=-r,2<r?8<r?(r&134217727)!==0?32:268435456:8:2}function ki(){var r=ue.p;return r!==0?r:(r=window.event,r===void 0?32:vE(r.type))}function gc(r,a){var o=ue.p;try{return ue.p=r,a()}finally{ue.p=o}}var lt=Math.random().toString(36).slice(2),Ot="__reactFiber$"+lt,St="__reactProps$"+lt,zn="__reactContainer$"+lt,El="__reactEvents$"+lt,Td="__reactListeners$"+lt,Pi="__reactHandles$"+lt,yc="__reactResources$"+lt,qa="__reactMarker$"+lt;function Mi(r){delete r[Ot],delete r[St],delete r[El],delete r[Td],delete r[Pi]}function Gr(r){var a=r[Ot];if(a)return a;for(var o=r.parentNode;o;){if(a=o[zn]||o[Ot]){if(o=a.alternate,a.child!==null||o!==null&&o.child!==null)for(r=iE(r);r!==null;){if(o=r[Ot])return o;r=iE(r)}return a}r=o,o=r.parentNode}return null}function mr(r){if(r=r[Ot]||r[zn]){var a=r.tag;if(a===5||a===6||a===13||a===26||a===27||a===3)return r}return null}function pr(r){var a=r.tag;if(a===5||a===26||a===27||a===6)return r.stateNode;throw Error(i(33))}function hn(r){var a=r[yc];return a||(a=r[yc]={hoistableStyles:new Map,hoistableScripts:new Map}),a}function Tt(r){r[qa]=!0}var Tl=new Set,Hs={};function tr(r,a){$r(r,a),$r(r+"Capture",a)}function $r(r,a){for(Hs[r]=a,r=0;r<a.length;r++)Tl.add(a[r])}var _c=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),vc={},Ha={};function Ec(r){return Ma.call(Ha,r)?!0:Ma.call(vc,r)?!1:_c.test(r)?Ha[r]=!0:(vc[r]=!0,!1)}function Li(r,a,o){if(Ec(a))if(o===null)r.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":r.removeAttribute(a);return;case"boolean":var u=a.toLowerCase().slice(0,5);if(u!=="data-"&&u!=="aria-"){r.removeAttribute(a);return}}r.setAttribute(a,""+o)}}function gr(r,a,o){if(o===null)r.removeAttribute(a);else{switch(typeof o){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(a);return}r.setAttribute(a,""+o)}}function Kt(r,a,o,u){if(u===null)r.removeAttribute(o);else{switch(typeof u){case"undefined":case"function":case"symbol":case"boolean":r.removeAttribute(o);return}r.setAttributeNS(a,o,""+u)}}var Ga,Tc;function Kr(r){if(Ga===void 0)try{throw Error()}catch(o){var a=o.stack.trim().match(/\n( *(at )?)/);Ga=a&&a[1]||"",Tc=-1<o.stack.indexOf(`
    at`)?" (<anonymous>)":-1<o.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Ga+r+Tc}var Gs=!1;function $s(r,a){if(!r||Gs)return"";Gs=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var u={DetermineComponentFrameRoot:function(){try{if(a){var ee=function(){throw Error()};if(Object.defineProperty(ee.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(ee,[])}catch(K){var G=K}Reflect.construct(r,[],ee)}else{try{ee.call()}catch(K){G=K}r.call(ee.prototype)}}else{try{throw Error()}catch(K){G=K}(ee=r())&&typeof ee.catch=="function"&&ee.catch(function(){})}}catch(K){if(K&&G&&typeof K.stack=="string")return[K.stack,G.stack]}return[null,null]}};u.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var h=Object.getOwnPropertyDescriptor(u.DetermineComponentFrameRoot,"name");h&&h.configurable&&Object.defineProperty(u.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var p=u.DetermineComponentFrameRoot(),E=p[0],b=p[1];if(E&&b){var C=E.split(`
`),q=b.split(`
`);for(h=u=0;u<C.length&&!C[u].includes("DetermineComponentFrameRoot");)u++;for(;h<q.length&&!q[h].includes("DetermineComponentFrameRoot");)h++;if(u===C.length||h===q.length)for(u=C.length-1,h=q.length-1;1<=u&&0<=h&&C[u]!==q[h];)h--;for(;1<=u&&0<=h;u--,h--)if(C[u]!==q[h]){if(u!==1||h!==1)do if(u--,h--,0>h||C[u]!==q[h]){var W=`
`+C[u].replace(" at new "," at ");return r.displayName&&W.includes("<anonymous>")&&(W=W.replace("<anonymous>",r.displayName)),W}while(1<=u&&0<=h);break}}}finally{Gs=!1,Error.prepareStackTrace=o}return(o=r?r.displayName||r.name:"")?Kr(o):""}function bl(r){switch(r.tag){case 26:case 27:case 5:return Kr(r.type);case 16:return Kr("Lazy");case 13:return Kr("Suspense");case 19:return Kr("SuspenseList");case 0:case 15:return $s(r.type,!1);case 11:return $s(r.type.render,!1);case 1:return $s(r.type,!0);case 31:return Kr("Activity");default:return""}}function Ks(r){try{var a="";do a+=bl(r),r=r.return;while(r);return a}catch(o){return`
Error generating stack: `+o.message+`
`+o.stack}}function dn(r){switch(typeof r){case"bigint":case"boolean":case"number":case"string":case"undefined":return r;case"object":return r;default:return""}}function Al(r){var a=r.type;return(r=r.nodeName)&&r.toLowerCase()==="input"&&(a==="checkbox"||a==="radio")}function bd(r){var a=Al(r)?"checked":"value",o=Object.getOwnPropertyDescriptor(r.constructor.prototype,a),u=""+r[a];if(!r.hasOwnProperty(a)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var h=o.get,p=o.set;return Object.defineProperty(r,a,{configurable:!0,get:function(){return h.call(this)},set:function(E){u=""+E,p.call(this,E)}}),Object.defineProperty(r,a,{enumerable:o.enumerable}),{getValue:function(){return u},setValue:function(E){u=""+E},stopTracking:function(){r._valueTracker=null,delete r[a]}}}}function Ys(r){r._valueTracker||(r._valueTracker=bd(r))}function wl(r){if(!r)return!1;var a=r._valueTracker;if(!a)return!0;var o=a.getValue(),u="";return r&&(u=Al(r)?r.checked?"true":"false":r.value),r=u,r!==o?(a.setValue(r),!0):!1}function $a(r){if(r=r||(typeof document<"u"?document:void 0),typeof r>"u")return null;try{return r.activeElement||r.body}catch{return r.body}}var Ad=/[\n"\\]/g;function Rt(r){return r.replace(Ad,function(a){return"\\"+a.charCodeAt(0).toString(16)+" "})}function Sn(r,a,o,u,h,p,E,b){r.name="",E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"?r.type=E:r.removeAttribute("type"),a!=null?E==="number"?(a===0&&r.value===""||r.value!=a)&&(r.value=""+dn(a)):r.value!==""+dn(a)&&(r.value=""+dn(a)):E!=="submit"&&E!=="reset"||r.removeAttribute("value"),a!=null?Vi(r,E,dn(a)):o!=null?Vi(r,E,dn(o)):u!=null&&r.removeAttribute("value"),h==null&&p!=null&&(r.defaultChecked=!!p),h!=null&&(r.checked=h&&typeof h!="function"&&typeof h!="symbol"),b!=null&&typeof b!="function"&&typeof b!="symbol"&&typeof b!="boolean"?r.name=""+dn(b):r.removeAttribute("name")}function Ka(r,a,o,u,h,p,E,b){if(p!=null&&typeof p!="function"&&typeof p!="symbol"&&typeof p!="boolean"&&(r.type=p),a!=null||o!=null){if(!(p!=="submit"&&p!=="reset"||a!=null))return;o=o!=null?""+dn(o):"",a=a!=null?""+dn(a):o,b||a===r.value||(r.value=a),r.defaultValue=a}u=u??h,u=typeof u!="function"&&typeof u!="symbol"&&!!u,r.checked=b?r.checked:!!u,r.defaultChecked=!!u,E!=null&&typeof E!="function"&&typeof E!="symbol"&&typeof E!="boolean"&&(r.name=E)}function Vi(r,a,o){a==="number"&&$a(r.ownerDocument)===r||r.defaultValue===""+o||(r.defaultValue=""+o)}function Yr(r,a,o,u){if(r=r.options,a){a={};for(var h=0;h<o.length;h++)a["$"+o[h]]=!0;for(o=0;o<r.length;o++)h=a.hasOwnProperty("$"+r[o].value),r[o].selected!==h&&(r[o].selected=h),h&&u&&(r[o].defaultSelected=!0)}else{for(o=""+dn(o),a=null,h=0;h<r.length;h++){if(r[h].value===o){r[h].selected=!0,u&&(r[h].defaultSelected=!0);return}a!==null||r[h].disabled||(a=r[h])}a!==null&&(a.selected=!0)}}function et(r,a,o){if(a!=null&&(a=""+dn(a),a!==r.value&&(r.value=a),o==null)){r.defaultValue!==a&&(r.defaultValue=a);return}r.defaultValue=o!=null?""+dn(o):""}function Ya(r,a,o,u){if(a==null){if(u!=null){if(o!=null)throw Error(i(92));if(mt(u)){if(1<u.length)throw Error(i(93));u=u[0]}o=u}o==null&&(o=""),a=o}o=dn(a),r.defaultValue=o,u=r.textContent,u===o&&u!==""&&u!==null&&(r.value=u)}function Bn(r,a){if(a){var o=r.firstChild;if(o&&o===r.lastChild&&o.nodeType===3){o.nodeValue=a;return}}r.textContent=a}var Qa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function bc(r,a,o){var u=a.indexOf("--")===0;o==null||typeof o=="boolean"||o===""?u?r.setProperty(a,""):a==="float"?r.cssFloat="":r[a]="":u?r.setProperty(a,o):typeof o!="number"||o===0||Qa.has(a)?a==="float"?r.cssFloat=o:r[a]=(""+o).trim():r[a]=o+"px"}function Sl(r,a,o){if(a!=null&&typeof a!="object")throw Error(i(62));if(r=r.style,o!=null){for(var u in o)!o.hasOwnProperty(u)||a!=null&&a.hasOwnProperty(u)||(u.indexOf("--")===0?r.setProperty(u,""):u==="float"?r.cssFloat="":r[u]="");for(var h in a)u=a[h],a.hasOwnProperty(h)&&o[h]!==u&&bc(r,h,u)}else for(var p in a)a.hasOwnProperty(p)&&bc(r,p,a[p])}function Rl(r){if(r.indexOf("-")===-1)return!1;switch(r){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var wd=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Sd=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function Qs(r){return Sd.test(""+r)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":r}var Qr=null;function Fn(r){return r=r.target||r.srcElement||window,r.correspondingUseElement&&(r=r.correspondingUseElement),r.nodeType===3?r.parentNode:r}var Xr=null,Wr=null;function Il(r){var a=mr(r);if(a&&(r=a.stateNode)){var o=r[St]||null;e:switch(r=a.stateNode,a.type){case"input":if(Sn(r,o.value,o.defaultValue,o.defaultValue,o.checked,o.defaultChecked,o.type,o.name),a=o.name,o.type==="radio"&&a!=null){for(o=r;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll('input[name="'+Rt(""+a)+'"][type="radio"]'),a=0;a<o.length;a++){var u=o[a];if(u!==r&&u.form===r.form){var h=u[St]||null;if(!h)throw Error(i(90));Sn(u,h.value,h.defaultValue,h.defaultValue,h.checked,h.defaultChecked,h.type,h.name)}}for(a=0;a<o.length;a++)u=o[a],u.form===r.form&&wl(u)}break e;case"textarea":et(r,o.value,o.defaultValue);break e;case"select":a=o.value,a!=null&&Yr(r,!!o.multiple,a,!1)}}}var yr=!1;function Ac(r,a,o){if(yr)return r(a,o);yr=!0;try{var u=r(a);return u}finally{if(yr=!1,(Xr!==null||Wr!==null)&&(yf(),Xr&&(a=Xr,r=Wr,Wr=Xr=null,Il(a),r)))for(a=0;a<r.length;a++)Il(r[a])}}function Xa(r,a){var o=r.stateNode;if(o===null)return null;var u=o[St]||null;if(u===null)return null;o=u[a];e:switch(a){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(u=!u.disabled)||(r=r.type,u=!(r==="button"||r==="input"||r==="select"||r==="textarea")),r=!u;break e;default:r=!1}if(r)return null;if(o&&typeof o!="function")throw Error(i(231,a,typeof o));return o}var nr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),qn=!1;if(nr)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){qn=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{qn=!1}var _r=null,Ui=null,Zr=null;function Cl(){if(Zr)return Zr;var r,a=Ui,o=a.length,u,h="value"in _r?_r.value:_r.textContent,p=h.length;for(r=0;r<o&&a[r]===h[r];r++);var E=o-r;for(u=1;u<=E&&a[o-u]===h[p-u];u++);return Zr=h.slice(r,1<u?1-u:void 0)}function vr(r){var a=r.keyCode;return"charCode"in r?(r=r.charCode,r===0&&a===13&&(r=13)):r=a,r===10&&(r=13),32<=r||r===13?r:0}function Er(){return!0}function xl(){return!1}function zt(r){function a(o,u,h,p,E){this._reactName=o,this._targetInst=h,this.type=u,this.nativeEvent=p,this.target=E,this.currentTarget=null;for(var b in r)r.hasOwnProperty(b)&&(o=r[b],this[b]=o?o(p):p[b]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?Er:xl,this.isPropagationStopped=xl,this}return _(a.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=Er)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=Er)},persist:function(){},isPersistent:Er}),a}var Qe={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(r){return r.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xs=zt(Qe),Za=_({},Qe,{view:0,detail:0}),wc=zt(Za),Ws,Zs,Tr,Ja=_({},Za,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ns,button:0,buttons:0,relatedTarget:function(r){return r.relatedTarget===void 0?r.fromElement===r.srcElement?r.toElement:r.fromElement:r.relatedTarget},movementX:function(r){return"movementX"in r?r.movementX:(r!==Tr&&(Tr&&r.type==="mousemove"?(Ws=r.screenX-Tr.screenX,Zs=r.screenY-Tr.screenY):Zs=Ws=0,Tr=r),Ws)},movementY:function(r){return"movementY"in r?r.movementY:Zs}}),Hn=zt(Ja),Sc=_({},Ja,{dataTransfer:0}),Rd=zt(Sc),es=_({},Za,{relatedTarget:0}),Js=zt(es),Nl=_({},Qe,{animationName:0,elapsedTime:0,pseudoElement:0}),eo=zt(Nl),Rc=_({},Qe,{clipboardData:function(r){return"clipboardData"in r?r.clipboardData:window.clipboardData}}),to=zt(Rc),Id=_({},Qe,{data:0}),Ol=zt(Id),ts={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ic={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Cc={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dl(r){var a=this.nativeEvent;return a.getModifierState?a.getModifierState(r):(r=Cc[r])?!!a[r]:!1}function ns(){return Dl}var xc=_({},Za,{key:function(r){if(r.key){var a=ts[r.key]||r.key;if(a!=="Unidentified")return a}return r.type==="keypress"?(r=vr(r),r===13?"Enter":String.fromCharCode(r)):r.type==="keydown"||r.type==="keyup"?Ic[r.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ns,charCode:function(r){return r.type==="keypress"?vr(r):0},keyCode:function(r){return r.type==="keydown"||r.type==="keyup"?r.keyCode:0},which:function(r){return r.type==="keypress"?vr(r):r.type==="keydown"||r.type==="keyup"?r.keyCode:0}}),no=zt(xc),Nc=_({},Ja,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),kl=zt(Nc),Jr=_({},Za,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ns}),Oc=zt(Jr),Dc=_({},Qe,{propertyName:0,elapsedTime:0,pseudoElement:0}),kc=zt(Dc),Pc=_({},Ja,{deltaX:function(r){return"deltaX"in r?r.deltaX:"wheelDeltaX"in r?-r.wheelDeltaX:0},deltaY:function(r){return"deltaY"in r?r.deltaY:"wheelDeltaY"in r?-r.wheelDeltaY:"wheelDelta"in r?-r.wheelDelta:0},deltaZ:0,deltaMode:0}),ro=zt(Pc),mn=_({},Qe,{newState:0,oldState:0}),Mc=zt(mn),Lc=[9,13,27,32],br=nr&&"CompositionEvent"in window,f=null;nr&&"documentMode"in document&&(f=document.documentMode);var y=nr&&"TextEvent"in window&&!f,v=nr&&(!br||f&&8<f&&11>=f),S=" ",z=!1;function Y(r,a){switch(r){case"keyup":return Lc.indexOf(a.keyCode)!==-1;case"keydown":return a.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function le(r){return r=r.detail,typeof r=="object"&&"data"in r?r.data:null}var je=!1;function Dt(r,a){switch(r){case"compositionend":return le(a);case"keypress":return a.which!==32?null:(z=!0,S);case"textInput":return r=a.data,r===S&&z?null:r;default:return null}}function ze(r,a){if(je)return r==="compositionend"||!br&&Y(r,a)?(r=Cl(),Zr=Ui=_r=null,je=!1,r):null;switch(r){case"paste":return null;case"keypress":if(!(a.ctrlKey||a.altKey||a.metaKey)||a.ctrlKey&&a.altKey){if(a.char&&1<a.char.length)return a.char;if(a.which)return String.fromCharCode(a.which)}return null;case"compositionend":return v&&a.locale!=="ko"?null:a.data;default:return null}}var Bt={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function kt(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a==="input"?!!Bt[r.type]:a==="textarea"}function ei(r,a,o,u){Xr?Wr?Wr.push(u):Wr=[u]:Xr=u,a=Af(a,"onChange"),0<a.length&&(o=new Xs("onChange","change",null,o,u),r.push({event:o,listeners:a}))}var Yt=null,Ar=null;function Pl(r){Y0(r,0)}function Vc(r){var a=pr(r);if(wl(a))return r}function p_(r,a){if(r==="change")return a}var g_=!1;if(nr){var Cd;if(nr){var xd="oninput"in document;if(!xd){var y_=document.createElement("div");y_.setAttribute("oninput","return;"),xd=typeof y_.oninput=="function"}Cd=xd}else Cd=!1;g_=Cd&&(!document.documentMode||9<document.documentMode)}function __(){Yt&&(Yt.detachEvent("onpropertychange",v_),Ar=Yt=null)}function v_(r){if(r.propertyName==="value"&&Vc(Ar)){var a=[];ei(a,Ar,r,Fn(r)),Ac(Pl,a)}}function _R(r,a,o){r==="focusin"?(__(),Yt=a,Ar=o,Yt.attachEvent("onpropertychange",v_)):r==="focusout"&&__()}function vR(r){if(r==="selectionchange"||r==="keyup"||r==="keydown")return Vc(Ar)}function ER(r,a){if(r==="click")return Vc(a)}function TR(r,a){if(r==="input"||r==="change")return Vc(a)}function bR(r,a){return r===a&&(r!==0||1/r===1/a)||r!==r&&a!==a}var Rn=typeof Object.is=="function"?Object.is:bR;function Ml(r,a){if(Rn(r,a))return!0;if(typeof r!="object"||r===null||typeof a!="object"||a===null)return!1;var o=Object.keys(r),u=Object.keys(a);if(o.length!==u.length)return!1;for(u=0;u<o.length;u++){var h=o[u];if(!Ma.call(a,h)||!Rn(r[h],a[h]))return!1}return!0}function E_(r){for(;r&&r.firstChild;)r=r.firstChild;return r}function T_(r,a){var o=E_(r);r=0;for(var u;o;){if(o.nodeType===3){if(u=r+o.textContent.length,r<=a&&u>=a)return{node:o,offset:a-r};r=u}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=E_(o)}}function b_(r,a){return r&&a?r===a?!0:r&&r.nodeType===3?!1:a&&a.nodeType===3?b_(r,a.parentNode):"contains"in r?r.contains(a):r.compareDocumentPosition?!!(r.compareDocumentPosition(a)&16):!1:!1}function A_(r){r=r!=null&&r.ownerDocument!=null&&r.ownerDocument.defaultView!=null?r.ownerDocument.defaultView:window;for(var a=$a(r.document);a instanceof r.HTMLIFrameElement;){try{var o=typeof a.contentWindow.location.href=="string"}catch{o=!1}if(o)r=a.contentWindow;else break;a=$a(r.document)}return a}function Nd(r){var a=r&&r.nodeName&&r.nodeName.toLowerCase();return a&&(a==="input"&&(r.type==="text"||r.type==="search"||r.type==="tel"||r.type==="url"||r.type==="password")||a==="textarea"||r.contentEditable==="true")}var AR=nr&&"documentMode"in document&&11>=document.documentMode,io=null,Od=null,Ll=null,Dd=!1;function w_(r,a,o){var u=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Dd||io==null||io!==$a(u)||(u=io,"selectionStart"in u&&Nd(u)?u={start:u.selectionStart,end:u.selectionEnd}:(u=(u.ownerDocument&&u.ownerDocument.defaultView||window).getSelection(),u={anchorNode:u.anchorNode,anchorOffset:u.anchorOffset,focusNode:u.focusNode,focusOffset:u.focusOffset}),Ll&&Ml(Ll,u)||(Ll=u,u=Af(Od,"onSelect"),0<u.length&&(a=new Xs("onSelect","select",null,a,o),r.push({event:a,listeners:u}),a.target=io)))}function rs(r,a){var o={};return o[r.toLowerCase()]=a.toLowerCase(),o["Webkit"+r]="webkit"+a,o["Moz"+r]="moz"+a,o}var ao={animationend:rs("Animation","AnimationEnd"),animationiteration:rs("Animation","AnimationIteration"),animationstart:rs("Animation","AnimationStart"),transitionrun:rs("Transition","TransitionRun"),transitionstart:rs("Transition","TransitionStart"),transitioncancel:rs("Transition","TransitionCancel"),transitionend:rs("Transition","TransitionEnd")},kd={},S_={};nr&&(S_=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function is(r){if(kd[r])return kd[r];if(!ao[r])return r;var a=ao[r],o;for(o in a)if(a.hasOwnProperty(o)&&o in S_)return kd[r]=a[o];return r}var R_=is("animationend"),I_=is("animationiteration"),C_=is("animationstart"),wR=is("transitionrun"),SR=is("transitionstart"),RR=is("transitioncancel"),x_=is("transitionend"),N_=new Map,Pd="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");Pd.push("scrollEnd");function rr(r,a){N_.set(r,a),tr(a,[r])}var O_=new WeakMap;function Gn(r,a){if(typeof r=="object"&&r!==null){var o=O_.get(r);return o!==void 0?o:(a={value:r,source:a,stack:Ks(a)},O_.set(r,a),a)}return{value:r,source:a,stack:Ks(a)}}var $n=[],so=0,Md=0;function Uc(){for(var r=so,a=Md=so=0;a<r;){var o=$n[a];$n[a++]=null;var u=$n[a];$n[a++]=null;var h=$n[a];$n[a++]=null;var p=$n[a];if($n[a++]=null,u!==null&&h!==null){var E=u.pending;E===null?h.next=h:(h.next=E.next,E.next=h),u.pending=h}p!==0&&D_(o,h,p)}}function jc(r,a,o,u){$n[so++]=r,$n[so++]=a,$n[so++]=o,$n[so++]=u,Md|=u,r.lanes|=u,r=r.alternate,r!==null&&(r.lanes|=u)}function Ld(r,a,o,u){return jc(r,a,o,u),zc(r)}function oo(r,a){return jc(r,null,null,a),zc(r)}function D_(r,a,o){r.lanes|=o;var u=r.alternate;u!==null&&(u.lanes|=o);for(var h=!1,p=r.return;p!==null;)p.childLanes|=o,u=p.alternate,u!==null&&(u.childLanes|=o),p.tag===22&&(r=p.stateNode,r===null||r._visibility&1||(h=!0)),r=p,p=p.return;return r.tag===3?(p=r.stateNode,h&&a!==null&&(h=31-nn(o),r=p.hiddenUpdates,u=r[h],u===null?r[h]=[a]:u.push(a),a.lane=o|536870912),p):null}function zc(r){if(50<ou)throw ou=0,Fm=null,Error(i(185));for(var a=r.return;a!==null;)r=a,a=r.return;return r.tag===3?r.stateNode:null}var lo={};function IR(r,a,o,u){this.tag=r,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=a,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=u,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function In(r,a,o,u){return new IR(r,a,o,u)}function Vd(r){return r=r.prototype,!(!r||!r.isReactComponent)}function ti(r,a){var o=r.alternate;return o===null?(o=In(r.tag,a,r.key,r.mode),o.elementType=r.elementType,o.type=r.type,o.stateNode=r.stateNode,o.alternate=r,r.alternate=o):(o.pendingProps=a,o.type=r.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=r.flags&65011712,o.childLanes=r.childLanes,o.lanes=r.lanes,o.child=r.child,o.memoizedProps=r.memoizedProps,o.memoizedState=r.memoizedState,o.updateQueue=r.updateQueue,a=r.dependencies,o.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext},o.sibling=r.sibling,o.index=r.index,o.ref=r.ref,o.refCleanup=r.refCleanup,o}function k_(r,a){r.flags&=65011714;var o=r.alternate;return o===null?(r.childLanes=0,r.lanes=a,r.child=null,r.subtreeFlags=0,r.memoizedProps=null,r.memoizedState=null,r.updateQueue=null,r.dependencies=null,r.stateNode=null):(r.childLanes=o.childLanes,r.lanes=o.lanes,r.child=o.child,r.subtreeFlags=0,r.deletions=null,r.memoizedProps=o.memoizedProps,r.memoizedState=o.memoizedState,r.updateQueue=o.updateQueue,r.type=o.type,a=o.dependencies,r.dependencies=a===null?null:{lanes:a.lanes,firstContext:a.firstContext}),r}function Bc(r,a,o,u,h,p){var E=0;if(u=r,typeof r=="function")Vd(r)&&(E=1);else if(typeof r=="string")E=x2(r,o,ye.current)?26:r==="html"||r==="head"||r==="body"?27:5;else e:switch(r){case I:return r=In(31,o,a,h),r.elementType=I,r.lanes=p,r;case D:return as(o.children,h,p,a);case H:E=8,h|=24;break;case L:return r=In(12,o,a,h|2),r.elementType=L,r.lanes=p,r;case ae:return r=In(13,o,a,h),r.elementType=ae,r.lanes=p,r;case ge:return r=In(19,o,a,h),r.elementType=ge,r.lanes=p,r;default:if(typeof r=="object"&&r!==null)switch(r.$$typeof){case $:case Q:E=10;break e;case Z:E=9;break e;case re:E=11;break e;case O:E=14;break e;case R:E=16,u=null;break e}E=29,o=Error(i(130,r===null?"null":typeof r,"")),u=null}return a=In(E,o,a,h),a.elementType=r,a.type=u,a.lanes=p,a}function as(r,a,o,u){return r=In(7,r,u,a),r.lanes=o,r}function Ud(r,a,o){return r=In(6,r,null,a),r.lanes=o,r}function jd(r,a,o){return a=In(4,r.children!==null?r.children:[],r.key,a),a.lanes=o,a.stateNode={containerInfo:r.containerInfo,pendingChildren:null,implementation:r.implementation},a}var uo=[],co=0,Fc=null,qc=0,Kn=[],Yn=0,ss=null,ni=1,ri="";function os(r,a){uo[co++]=qc,uo[co++]=Fc,Fc=r,qc=a}function P_(r,a,o){Kn[Yn++]=ni,Kn[Yn++]=ri,Kn[Yn++]=ss,ss=r;var u=ni;r=ri;var h=32-nn(u)-1;u&=~(1<<h),o+=1;var p=32-nn(a)+h;if(30<p){var E=h-h%5;p=(u&(1<<E)-1).toString(32),u>>=E,h-=E,ni=1<<32-nn(a)+h|o<<h|u,ri=p+r}else ni=1<<p|o<<h|u,ri=r}function zd(r){r.return!==null&&(os(r,1),P_(r,1,0))}function Bd(r){for(;r===Fc;)Fc=uo[--co],uo[co]=null,qc=uo[--co],uo[co]=null;for(;r===ss;)ss=Kn[--Yn],Kn[Yn]=null,ri=Kn[--Yn],Kn[Yn]=null,ni=Kn[--Yn],Kn[Yn]=null}var pn=null,gt=null,$e=!1,ls=null,wr=!1,Fd=Error(i(519));function us(r){var a=Error(i(418,""));throw jl(Gn(a,r)),Fd}function M_(r){var a=r.stateNode,o=r.type,u=r.memoizedProps;switch(a[Ot]=r,a[St]=u,o){case"dialog":Me("cancel",a),Me("close",a);break;case"iframe":case"object":case"embed":Me("load",a);break;case"video":case"audio":for(o=0;o<uu.length;o++)Me(uu[o],a);break;case"source":Me("error",a);break;case"img":case"image":case"link":Me("error",a),Me("load",a);break;case"details":Me("toggle",a);break;case"input":Me("invalid",a),Ka(a,u.value,u.defaultValue,u.checked,u.defaultChecked,u.type,u.name,!0),Ys(a);break;case"select":Me("invalid",a);break;case"textarea":Me("invalid",a),Ya(a,u.value,u.defaultValue,u.children),Ys(a)}o=u.children,typeof o!="string"&&typeof o!="number"&&typeof o!="bigint"||a.textContent===""+o||u.suppressHydrationWarning===!0||Z0(a.textContent,o)?(u.popover!=null&&(Me("beforetoggle",a),Me("toggle",a)),u.onScroll!=null&&Me("scroll",a),u.onScrollEnd!=null&&Me("scrollend",a),u.onClick!=null&&(a.onclick=wf),a=!0):a=!1,a||us(r)}function L_(r){for(pn=r.return;pn;)switch(pn.tag){case 5:case 13:wr=!1;return;case 27:case 3:wr=!0;return;default:pn=pn.return}}function Vl(r){if(r!==pn)return!1;if(!$e)return L_(r),$e=!0,!1;var a=r.tag,o;if((o=a!==3&&a!==27)&&((o=a===5)&&(o=r.type,o=!(o!=="form"&&o!=="button")||ip(r.type,r.memoizedProps)),o=!o),o&&gt&&us(r),L_(r),a===13){if(r=r.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(i(317));e:{for(r=r.nextSibling,a=0;r;){if(r.nodeType===8)if(o=r.data,o==="/$"){if(a===0){gt=ar(r.nextSibling);break e}a--}else o!=="$"&&o!=="$!"&&o!=="$?"||a++;r=r.nextSibling}gt=null}}else a===27?(a=gt,ea(r.type)?(r=lp,lp=null,gt=r):gt=a):gt=pn?ar(r.stateNode.nextSibling):null;return!0}function Ul(){gt=pn=null,$e=!1}function V_(){var r=ls;return r!==null&&(En===null?En=r:En.push.apply(En,r),ls=null),r}function jl(r){ls===null?ls=[r]:ls.push(r)}var qd=ne(null),cs=null,ii=null;function ji(r,a,o){oe(qd,a._currentValue),a._currentValue=o}function ai(r){r._currentValue=qd.current,ce(qd)}function Hd(r,a,o){for(;r!==null;){var u=r.alternate;if((r.childLanes&a)!==a?(r.childLanes|=a,u!==null&&(u.childLanes|=a)):u!==null&&(u.childLanes&a)!==a&&(u.childLanes|=a),r===o)break;r=r.return}}function Gd(r,a,o,u){var h=r.child;for(h!==null&&(h.return=r);h!==null;){var p=h.dependencies;if(p!==null){var E=h.child;p=p.firstContext;e:for(;p!==null;){var b=p;p=h;for(var C=0;C<a.length;C++)if(b.context===a[C]){p.lanes|=o,b=p.alternate,b!==null&&(b.lanes|=o),Hd(p.return,o,r),u||(E=null);break e}p=b.next}}else if(h.tag===18){if(E=h.return,E===null)throw Error(i(341));E.lanes|=o,p=E.alternate,p!==null&&(p.lanes|=o),Hd(E,o,r),E=null}else E=h.child;if(E!==null)E.return=h;else for(E=h;E!==null;){if(E===r){E=null;break}if(h=E.sibling,h!==null){h.return=E.return,E=h;break}E=E.return}h=E}}function zl(r,a,o,u){r=null;for(var h=a,p=!1;h!==null;){if(!p){if((h.flags&524288)!==0)p=!0;else if((h.flags&262144)!==0)break}if(h.tag===10){var E=h.alternate;if(E===null)throw Error(i(387));if(E=E.memoizedProps,E!==null){var b=h.type;Rn(h.pendingProps.value,E.value)||(r!==null?r.push(b):r=[b])}}else if(h===jt.current){if(E=h.alternate,E===null)throw Error(i(387));E.memoizedState.memoizedState!==h.memoizedState.memoizedState&&(r!==null?r.push(pu):r=[pu])}h=h.return}r!==null&&Gd(a,r,o,u),a.flags|=262144}function Hc(r){for(r=r.firstContext;r!==null;){if(!Rn(r.context._currentValue,r.memoizedValue))return!0;r=r.next}return!1}function fs(r){cs=r,ii=null,r=r.dependencies,r!==null&&(r.firstContext=null)}function rn(r){return U_(cs,r)}function Gc(r,a){return cs===null&&fs(r),U_(r,a)}function U_(r,a){var o=a._currentValue;if(a={context:a,memoizedValue:o,next:null},ii===null){if(r===null)throw Error(i(308));ii=a,r.dependencies={lanes:0,firstContext:a},r.flags|=524288}else ii=ii.next=a;return o}var CR=typeof AbortController<"u"?AbortController:function(){var r=[],a=this.signal={aborted:!1,addEventListener:function(o,u){r.push(u)}};this.abort=function(){a.aborted=!0,r.forEach(function(o){return o()})}},xR=n.unstable_scheduleCallback,NR=n.unstable_NormalPriority,Pt={$$typeof:Q,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function $d(){return{controller:new CR,data:new Map,refCount:0}}function Bl(r){r.refCount--,r.refCount===0&&xR(NR,function(){r.controller.abort()})}var Fl=null,Kd=0,fo=0,ho=null;function OR(r,a){if(Fl===null){var o=Fl=[];Kd=0,fo=Qm(),ho={status:"pending",value:void 0,then:function(u){o.push(u)}}}return Kd++,a.then(j_,j_),a}function j_(){if(--Kd===0&&Fl!==null){ho!==null&&(ho.status="fulfilled");var r=Fl;Fl=null,fo=0,ho=null;for(var a=0;a<r.length;a++)(0,r[a])()}}function DR(r,a){var o=[],u={status:"pending",value:null,reason:null,then:function(h){o.push(h)}};return r.then(function(){u.status="fulfilled",u.value=a;for(var h=0;h<o.length;h++)(0,o[h])(a)},function(h){for(u.status="rejected",u.reason=h,h=0;h<o.length;h++)(0,o[h])(void 0)}),u}var z_=X.S;X.S=function(r,a){typeof a=="object"&&a!==null&&typeof a.then=="function"&&OR(r,a),z_!==null&&z_(r,a)};var hs=ne(null);function Yd(){var r=hs.current;return r!==null?r:st.pooledCache}function $c(r,a){a===null?oe(hs,hs.current):oe(hs,a.pool)}function B_(){var r=Yd();return r===null?null:{parent:Pt._currentValue,pool:r}}var ql=Error(i(460)),F_=Error(i(474)),Kc=Error(i(542)),Qd={then:function(){}};function q_(r){return r=r.status,r==="fulfilled"||r==="rejected"}function Yc(){}function H_(r,a,o){switch(o=r[o],o===void 0?r.push(a):o!==a&&(a.then(Yc,Yc),a=o),a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,$_(r),r;default:if(typeof a.status=="string")a.then(Yc,Yc);else{if(r=st,r!==null&&100<r.shellSuspendCounter)throw Error(i(482));r=a,r.status="pending",r.then(function(u){if(a.status==="pending"){var h=a;h.status="fulfilled",h.value=u}},function(u){if(a.status==="pending"){var h=a;h.status="rejected",h.reason=u}})}switch(a.status){case"fulfilled":return a.value;case"rejected":throw r=a.reason,$_(r),r}throw Hl=a,ql}}var Hl=null;function G_(){if(Hl===null)throw Error(i(459));var r=Hl;return Hl=null,r}function $_(r){if(r===ql||r===Kc)throw Error(i(483))}var zi=!1;function Xd(r){r.updateQueue={baseState:r.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Wd(r,a){r=r.updateQueue,a.updateQueue===r&&(a.updateQueue={baseState:r.baseState,firstBaseUpdate:r.firstBaseUpdate,lastBaseUpdate:r.lastBaseUpdate,shared:r.shared,callbacks:null})}function Bi(r){return{lane:r,tag:0,payload:null,callback:null,next:null}}function Fi(r,a,o){var u=r.updateQueue;if(u===null)return null;if(u=u.shared,(Ze&2)!==0){var h=u.pending;return h===null?a.next=a:(a.next=h.next,h.next=a),u.pending=a,a=zc(r),D_(r,null,o),a}return jc(r,u,a,o),zc(r)}function Gl(r,a,o){if(a=a.updateQueue,a!==null&&(a=a.shared,(o&4194048)!==0)){var u=a.lanes;u&=r.pendingLanes,o|=u,a.lanes=o,vl(r,o)}}function Zd(r,a){var o=r.updateQueue,u=r.alternate;if(u!==null&&(u=u.updateQueue,o===u)){var h=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var E={lane:o.lane,tag:o.tag,payload:o.payload,callback:null,next:null};p===null?h=p=E:p=p.next=E,o=o.next}while(o!==null);p===null?h=p=a:p=p.next=a}else h=p=a;o={baseState:u.baseState,firstBaseUpdate:h,lastBaseUpdate:p,shared:u.shared,callbacks:u.callbacks},r.updateQueue=o;return}r=o.lastBaseUpdate,r===null?o.firstBaseUpdate=a:r.next=a,o.lastBaseUpdate=a}var Jd=!1;function $l(){if(Jd){var r=ho;if(r!==null)throw r}}function Kl(r,a,o,u){Jd=!1;var h=r.updateQueue;zi=!1;var p=h.firstBaseUpdate,E=h.lastBaseUpdate,b=h.shared.pending;if(b!==null){h.shared.pending=null;var C=b,q=C.next;C.next=null,E===null?p=q:E.next=q,E=C;var W=r.alternate;W!==null&&(W=W.updateQueue,b=W.lastBaseUpdate,b!==E&&(b===null?W.firstBaseUpdate=q:b.next=q,W.lastBaseUpdate=C))}if(p!==null){var ee=h.baseState;E=0,W=q=C=null,b=p;do{var G=b.lane&-536870913,K=G!==b.lane;if(K?(Be&G)===G:(u&G)===G){G!==0&&G===fo&&(Jd=!0),W!==null&&(W=W.next={lane:0,tag:b.tag,payload:b.payload,callback:null,next:null});e:{var Ae=r,ve=b;G=a;var rt=o;switch(ve.tag){case 1:if(Ae=ve.payload,typeof Ae=="function"){ee=Ae.call(rt,ee,G);break e}ee=Ae;break e;case 3:Ae.flags=Ae.flags&-65537|128;case 0:if(Ae=ve.payload,G=typeof Ae=="function"?Ae.call(rt,ee,G):Ae,G==null)break e;ee=_({},ee,G);break e;case 2:zi=!0}}G=b.callback,G!==null&&(r.flags|=64,K&&(r.flags|=8192),K=h.callbacks,K===null?h.callbacks=[G]:K.push(G))}else K={lane:G,tag:b.tag,payload:b.payload,callback:b.callback,next:null},W===null?(q=W=K,C=ee):W=W.next=K,E|=G;if(b=b.next,b===null){if(b=h.shared.pending,b===null)break;K=b,b=K.next,K.next=null,h.lastBaseUpdate=K,h.shared.pending=null}}while(!0);W===null&&(C=ee),h.baseState=C,h.firstBaseUpdate=q,h.lastBaseUpdate=W,p===null&&(h.shared.lanes=0),Xi|=E,r.lanes=E,r.memoizedState=ee}}function K_(r,a){if(typeof r!="function")throw Error(i(191,r));r.call(a)}function Y_(r,a){var o=r.callbacks;if(o!==null)for(r.callbacks=null,r=0;r<o.length;r++)K_(o[r],a)}var mo=ne(null),Qc=ne(0);function Q_(r,a){r=hi,oe(Qc,r),oe(mo,a),hi=r|a.baseLanes}function em(){oe(Qc,hi),oe(mo,mo.current)}function tm(){hi=Qc.current,ce(mo),ce(Qc)}var qi=0,Ne=null,tt=null,It=null,Xc=!1,po=!1,ds=!1,Wc=0,Yl=0,go=null,kR=0;function bt(){throw Error(i(321))}function nm(r,a){if(a===null)return!1;for(var o=0;o<a.length&&o<r.length;o++)if(!Rn(r[o],a[o]))return!1;return!0}function rm(r,a,o,u,h,p){return qi=p,Ne=a,a.memoizedState=null,a.updateQueue=null,a.lanes=0,X.H=r===null||r.memoizedState===null?Dv:kv,ds=!1,p=o(u,h),ds=!1,po&&(p=W_(a,o,u,h)),X_(r),p}function X_(r){X.H=rf;var a=tt!==null&&tt.next!==null;if(qi=0,It=tt=Ne=null,Xc=!1,Yl=0,go=null,a)throw Error(i(300));r===null||Ft||(r=r.dependencies,r!==null&&Hc(r)&&(Ft=!0))}function W_(r,a,o,u){Ne=r;var h=0;do{if(po&&(go=null),Yl=0,po=!1,25<=h)throw Error(i(301));if(h+=1,It=tt=null,r.updateQueue!=null){var p=r.updateQueue;p.lastEffect=null,p.events=null,p.stores=null,p.memoCache!=null&&(p.memoCache.index=0)}X.H=zR,p=a(o,u)}while(po);return p}function PR(){var r=X.H,a=r.useState()[0];return a=typeof a.then=="function"?Ql(a):a,r=r.useState()[0],(tt!==null?tt.memoizedState:null)!==r&&(Ne.flags|=1024),a}function im(){var r=Wc!==0;return Wc=0,r}function am(r,a,o){a.updateQueue=r.updateQueue,a.flags&=-2053,r.lanes&=~o}function sm(r){if(Xc){for(r=r.memoizedState;r!==null;){var a=r.queue;a!==null&&(a.pending=null),r=r.next}Xc=!1}qi=0,It=tt=Ne=null,po=!1,Yl=Wc=0,go=null}function _n(){var r={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?Ne.memoizedState=It=r:It=It.next=r,It}function Ct(){if(tt===null){var r=Ne.alternate;r=r!==null?r.memoizedState:null}else r=tt.next;var a=It===null?Ne.memoizedState:It.next;if(a!==null)It=a,tt=r;else{if(r===null)throw Ne.alternate===null?Error(i(467)):Error(i(310));tt=r,r={memoizedState:tt.memoizedState,baseState:tt.baseState,baseQueue:tt.baseQueue,queue:tt.queue,next:null},It===null?Ne.memoizedState=It=r:It=It.next=r}return It}function om(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function Ql(r){var a=Yl;return Yl+=1,go===null&&(go=[]),r=H_(go,r,a),a=Ne,(It===null?a.memoizedState:It.next)===null&&(a=a.alternate,X.H=a===null||a.memoizedState===null?Dv:kv),r}function Zc(r){if(r!==null&&typeof r=="object"){if(typeof r.then=="function")return Ql(r);if(r.$$typeof===Q)return rn(r)}throw Error(i(438,String(r)))}function lm(r){var a=null,o=Ne.updateQueue;if(o!==null&&(a=o.memoCache),a==null){var u=Ne.alternate;u!==null&&(u=u.updateQueue,u!==null&&(u=u.memoCache,u!=null&&(a={data:u.data.map(function(h){return h.slice()}),index:0})))}if(a==null&&(a={data:[],index:0}),o===null&&(o=om(),Ne.updateQueue=o),o.memoCache=a,o=a.data[a.index],o===void 0)for(o=a.data[a.index]=Array(r),u=0;u<r;u++)o[u]=P;return a.index++,o}function si(r,a){return typeof a=="function"?a(r):a}function Jc(r){var a=Ct();return um(a,tt,r)}function um(r,a,o){var u=r.queue;if(u===null)throw Error(i(311));u.lastRenderedReducer=o;var h=r.baseQueue,p=u.pending;if(p!==null){if(h!==null){var E=h.next;h.next=p.next,p.next=E}a.baseQueue=h=p,u.pending=null}if(p=r.baseState,h===null)r.memoizedState=p;else{a=h.next;var b=E=null,C=null,q=a,W=!1;do{var ee=q.lane&-536870913;if(ee!==q.lane?(Be&ee)===ee:(qi&ee)===ee){var G=q.revertLane;if(G===0)C!==null&&(C=C.next={lane:0,revertLane:0,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null}),ee===fo&&(W=!0);else if((qi&G)===G){q=q.next,G===fo&&(W=!0);continue}else ee={lane:0,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(b=C=ee,E=p):C=C.next=ee,Ne.lanes|=G,Xi|=G;ee=q.action,ds&&o(p,ee),p=q.hasEagerState?q.eagerState:o(p,ee)}else G={lane:ee,revertLane:q.revertLane,action:q.action,hasEagerState:q.hasEagerState,eagerState:q.eagerState,next:null},C===null?(b=C=G,E=p):C=C.next=G,Ne.lanes|=ee,Xi|=ee;q=q.next}while(q!==null&&q!==a);if(C===null?E=p:C.next=b,!Rn(p,r.memoizedState)&&(Ft=!0,W&&(o=ho,o!==null)))throw o;r.memoizedState=p,r.baseState=E,r.baseQueue=C,u.lastRenderedState=p}return h===null&&(u.lanes=0),[r.memoizedState,u.dispatch]}function cm(r){var a=Ct(),o=a.queue;if(o===null)throw Error(i(311));o.lastRenderedReducer=r;var u=o.dispatch,h=o.pending,p=a.memoizedState;if(h!==null){o.pending=null;var E=h=h.next;do p=r(p,E.action),E=E.next;while(E!==h);Rn(p,a.memoizedState)||(Ft=!0),a.memoizedState=p,a.baseQueue===null&&(a.baseState=p),o.lastRenderedState=p}return[p,u]}function Z_(r,a,o){var u=Ne,h=Ct(),p=$e;if(p){if(o===void 0)throw Error(i(407));o=o()}else o=a();var E=!Rn((tt||h).memoizedState,o);E&&(h.memoizedState=o,Ft=!0),h=h.queue;var b=tv.bind(null,u,h,r);if(Xl(2048,8,b,[r]),h.getSnapshot!==a||E||It!==null&&It.memoizedState.tag&1){if(u.flags|=2048,yo(9,ef(),ev.bind(null,u,h,o,a),null),st===null)throw Error(i(349));p||(qi&124)!==0||J_(u,a,o)}return o}function J_(r,a,o){r.flags|=16384,r={getSnapshot:a,value:o},a=Ne.updateQueue,a===null?(a=om(),Ne.updateQueue=a,a.stores=[r]):(o=a.stores,o===null?a.stores=[r]:o.push(r))}function ev(r,a,o,u){a.value=o,a.getSnapshot=u,nv(a)&&rv(r)}function tv(r,a,o){return o(function(){nv(a)&&rv(r)})}function nv(r){var a=r.getSnapshot;r=r.value;try{var o=a();return!Rn(r,o)}catch{return!0}}function rv(r){var a=oo(r,2);a!==null&&Dn(a,r,2)}function fm(r){var a=_n();if(typeof r=="function"){var o=r;if(r=o(),ds){wn(!0);try{o()}finally{wn(!1)}}}return a.memoizedState=a.baseState=r,a.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:r},a}function iv(r,a,o,u){return r.baseState=o,um(r,tt,typeof u=="function"?u:si)}function MR(r,a,o,u,h){if(nf(r))throw Error(i(485));if(r=a.action,r!==null){var p={payload:h,action:r,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(E){p.listeners.push(E)}};X.T!==null?o(!0):p.isTransition=!1,u(p),o=a.pending,o===null?(p.next=a.pending=p,av(a,p)):(p.next=o.next,a.pending=o.next=p)}}function av(r,a){var o=a.action,u=a.payload,h=r.state;if(a.isTransition){var p=X.T,E={};X.T=E;try{var b=o(h,u),C=X.S;C!==null&&C(E,b),sv(r,a,b)}catch(q){hm(r,a,q)}finally{X.T=p}}else try{p=o(h,u),sv(r,a,p)}catch(q){hm(r,a,q)}}function sv(r,a,o){o!==null&&typeof o=="object"&&typeof o.then=="function"?o.then(function(u){ov(r,a,u)},function(u){return hm(r,a,u)}):ov(r,a,o)}function ov(r,a,o){a.status="fulfilled",a.value=o,lv(a),r.state=o,a=r.pending,a!==null&&(o=a.next,o===a?r.pending=null:(o=o.next,a.next=o,av(r,o)))}function hm(r,a,o){var u=r.pending;if(r.pending=null,u!==null){u=u.next;do a.status="rejected",a.reason=o,lv(a),a=a.next;while(a!==u)}r.action=null}function lv(r){r=r.listeners;for(var a=0;a<r.length;a++)(0,r[a])()}function uv(r,a){return a}function cv(r,a){if($e){var o=st.formState;if(o!==null){e:{var u=Ne;if($e){if(gt){t:{for(var h=gt,p=wr;h.nodeType!==8;){if(!p){h=null;break t}if(h=ar(h.nextSibling),h===null){h=null;break t}}p=h.data,h=p==="F!"||p==="F"?h:null}if(h){gt=ar(h.nextSibling),u=h.data==="F!";break e}}us(u)}u=!1}u&&(a=o[0])}}return o=_n(),o.memoizedState=o.baseState=a,u={pending:null,lanes:0,dispatch:null,lastRenderedReducer:uv,lastRenderedState:a},o.queue=u,o=xv.bind(null,Ne,u),u.dispatch=o,u=fm(!1),p=ym.bind(null,Ne,!1,u.queue),u=_n(),h={state:a,dispatch:null,action:r,pending:null},u.queue=h,o=MR.bind(null,Ne,h,p,o),h.dispatch=o,u.memoizedState=r,[a,o,!1]}function fv(r){var a=Ct();return hv(a,tt,r)}function hv(r,a,o){if(a=um(r,a,uv)[0],r=Jc(si)[0],typeof a=="object"&&a!==null&&typeof a.then=="function")try{var u=Ql(a)}catch(E){throw E===ql?Kc:E}else u=a;a=Ct();var h=a.queue,p=h.dispatch;return o!==a.memoizedState&&(Ne.flags|=2048,yo(9,ef(),LR.bind(null,h,o),null)),[u,p,r]}function LR(r,a){r.action=a}function dv(r){var a=Ct(),o=tt;if(o!==null)return hv(a,o,r);Ct(),a=a.memoizedState,o=Ct();var u=o.queue.dispatch;return o.memoizedState=r,[a,u,!1]}function yo(r,a,o,u){return r={tag:r,create:o,deps:u,inst:a,next:null},a=Ne.updateQueue,a===null&&(a=om(),Ne.updateQueue=a),o=a.lastEffect,o===null?a.lastEffect=r.next=r:(u=o.next,o.next=r,r.next=u,a.lastEffect=r),r}function ef(){return{destroy:void 0,resource:void 0}}function mv(){return Ct().memoizedState}function tf(r,a,o,u){var h=_n();u=u===void 0?null:u,Ne.flags|=r,h.memoizedState=yo(1|a,ef(),o,u)}function Xl(r,a,o,u){var h=Ct();u=u===void 0?null:u;var p=h.memoizedState.inst;tt!==null&&u!==null&&nm(u,tt.memoizedState.deps)?h.memoizedState=yo(a,p,o,u):(Ne.flags|=r,h.memoizedState=yo(1|a,p,o,u))}function pv(r,a){tf(8390656,8,r,a)}function gv(r,a){Xl(2048,8,r,a)}function yv(r,a){return Xl(4,2,r,a)}function _v(r,a){return Xl(4,4,r,a)}function vv(r,a){if(typeof a=="function"){r=r();var o=a(r);return function(){typeof o=="function"?o():a(null)}}if(a!=null)return r=r(),a.current=r,function(){a.current=null}}function Ev(r,a,o){o=o!=null?o.concat([r]):null,Xl(4,4,vv.bind(null,a,r),o)}function dm(){}function Tv(r,a){var o=Ct();a=a===void 0?null:a;var u=o.memoizedState;return a!==null&&nm(a,u[1])?u[0]:(o.memoizedState=[r,a],r)}function bv(r,a){var o=Ct();a=a===void 0?null:a;var u=o.memoizedState;if(a!==null&&nm(a,u[1]))return u[0];if(u=r(),ds){wn(!0);try{r()}finally{wn(!1)}}return o.memoizedState=[u,a],u}function mm(r,a,o){return o===void 0||(qi&1073741824)!==0?r.memoizedState=a:(r.memoizedState=o,r=S0(),Ne.lanes|=r,Xi|=r,o)}function Av(r,a,o,u){return Rn(o,a)?o:mo.current!==null?(r=mm(r,o,u),Rn(r,a)||(Ft=!0),r):(qi&42)===0?(Ft=!0,r.memoizedState=o):(r=S0(),Ne.lanes|=r,Xi|=r,a)}function wv(r,a,o,u,h){var p=ue.p;ue.p=p!==0&&8>p?p:8;var E=X.T,b={};X.T=b,ym(r,!1,a,o);try{var C=h(),q=X.S;if(q!==null&&q(b,C),C!==null&&typeof C=="object"&&typeof C.then=="function"){var W=DR(C,u);Wl(r,a,W,On(r))}else Wl(r,a,u,On(r))}catch(ee){Wl(r,a,{then:function(){},status:"rejected",reason:ee},On())}finally{ue.p=p,X.T=E}}function VR(){}function pm(r,a,o,u){if(r.tag!==5)throw Error(i(476));var h=Sv(r).queue;wv(r,h,a,pe,o===null?VR:function(){return Rv(r),o(u)})}function Sv(r){var a=r.memoizedState;if(a!==null)return a;a={memoizedState:pe,baseState:pe,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:pe},next:null};var o={};return a.next={memoizedState:o,baseState:o,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:si,lastRenderedState:o},next:null},r.memoizedState=a,r=r.alternate,r!==null&&(r.memoizedState=a),a}function Rv(r){var a=Sv(r).next.queue;Wl(r,a,{},On())}function gm(){return rn(pu)}function Iv(){return Ct().memoizedState}function Cv(){return Ct().memoizedState}function UR(r){for(var a=r.return;a!==null;){switch(a.tag){case 24:case 3:var o=On();r=Bi(o);var u=Fi(a,r,o);u!==null&&(Dn(u,a,o),Gl(u,a,o)),a={cache:$d()},r.payload=a;return}a=a.return}}function jR(r,a,o){var u=On();o={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null},nf(r)?Nv(a,o):(o=Ld(r,a,o,u),o!==null&&(Dn(o,r,u),Ov(o,a,u)))}function xv(r,a,o){var u=On();Wl(r,a,o,u)}function Wl(r,a,o,u){var h={lane:u,revertLane:0,action:o,hasEagerState:!1,eagerState:null,next:null};if(nf(r))Nv(a,h);else{var p=r.alternate;if(r.lanes===0&&(p===null||p.lanes===0)&&(p=a.lastRenderedReducer,p!==null))try{var E=a.lastRenderedState,b=p(E,o);if(h.hasEagerState=!0,h.eagerState=b,Rn(b,E))return jc(r,a,h,0),st===null&&Uc(),!1}catch{}finally{}if(o=Ld(r,a,h,u),o!==null)return Dn(o,r,u),Ov(o,a,u),!0}return!1}function ym(r,a,o,u){if(u={lane:2,revertLane:Qm(),action:u,hasEagerState:!1,eagerState:null,next:null},nf(r)){if(a)throw Error(i(479))}else a=Ld(r,o,u,2),a!==null&&Dn(a,r,2)}function nf(r){var a=r.alternate;return r===Ne||a!==null&&a===Ne}function Nv(r,a){po=Xc=!0;var o=r.pending;o===null?a.next=a:(a.next=o.next,o.next=a),r.pending=a}function Ov(r,a,o){if((o&4194048)!==0){var u=a.lanes;u&=r.pendingLanes,o|=u,a.lanes=o,vl(r,o)}}var rf={readContext:rn,use:Zc,useCallback:bt,useContext:bt,useEffect:bt,useImperativeHandle:bt,useLayoutEffect:bt,useInsertionEffect:bt,useMemo:bt,useReducer:bt,useRef:bt,useState:bt,useDebugValue:bt,useDeferredValue:bt,useTransition:bt,useSyncExternalStore:bt,useId:bt,useHostTransitionStatus:bt,useFormState:bt,useActionState:bt,useOptimistic:bt,useMemoCache:bt,useCacheRefresh:bt},Dv={readContext:rn,use:Zc,useCallback:function(r,a){return _n().memoizedState=[r,a===void 0?null:a],r},useContext:rn,useEffect:pv,useImperativeHandle:function(r,a,o){o=o!=null?o.concat([r]):null,tf(4194308,4,vv.bind(null,a,r),o)},useLayoutEffect:function(r,a){return tf(4194308,4,r,a)},useInsertionEffect:function(r,a){tf(4,2,r,a)},useMemo:function(r,a){var o=_n();a=a===void 0?null:a;var u=r();if(ds){wn(!0);try{r()}finally{wn(!1)}}return o.memoizedState=[u,a],u},useReducer:function(r,a,o){var u=_n();if(o!==void 0){var h=o(a);if(ds){wn(!0);try{o(a)}finally{wn(!1)}}}else h=a;return u.memoizedState=u.baseState=h,r={pending:null,lanes:0,dispatch:null,lastRenderedReducer:r,lastRenderedState:h},u.queue=r,r=r.dispatch=jR.bind(null,Ne,r),[u.memoizedState,r]},useRef:function(r){var a=_n();return r={current:r},a.memoizedState=r},useState:function(r){r=fm(r);var a=r.queue,o=xv.bind(null,Ne,a);return a.dispatch=o,[r.memoizedState,o]},useDebugValue:dm,useDeferredValue:function(r,a){var o=_n();return mm(o,r,a)},useTransition:function(){var r=fm(!1);return r=wv.bind(null,Ne,r.queue,!0,!1),_n().memoizedState=r,[!1,r]},useSyncExternalStore:function(r,a,o){var u=Ne,h=_n();if($e){if(o===void 0)throw Error(i(407));o=o()}else{if(o=a(),st===null)throw Error(i(349));(Be&124)!==0||J_(u,a,o)}h.memoizedState=o;var p={value:o,getSnapshot:a};return h.queue=p,pv(tv.bind(null,u,p,r),[r]),u.flags|=2048,yo(9,ef(),ev.bind(null,u,p,o,a),null),o},useId:function(){var r=_n(),a=st.identifierPrefix;if($e){var o=ri,u=ni;o=(u&~(1<<32-nn(u)-1)).toString(32)+o,a="«"+a+"R"+o,o=Wc++,0<o&&(a+="H"+o.toString(32)),a+="»"}else o=kR++,a="«"+a+"r"+o.toString(32)+"»";return r.memoizedState=a},useHostTransitionStatus:gm,useFormState:cv,useActionState:cv,useOptimistic:function(r){var a=_n();a.memoizedState=a.baseState=r;var o={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return a.queue=o,a=ym.bind(null,Ne,!0,o),o.dispatch=a,[r,a]},useMemoCache:lm,useCacheRefresh:function(){return _n().memoizedState=UR.bind(null,Ne)}},kv={readContext:rn,use:Zc,useCallback:Tv,useContext:rn,useEffect:gv,useImperativeHandle:Ev,useInsertionEffect:yv,useLayoutEffect:_v,useMemo:bv,useReducer:Jc,useRef:mv,useState:function(){return Jc(si)},useDebugValue:dm,useDeferredValue:function(r,a){var o=Ct();return Av(o,tt.memoizedState,r,a)},useTransition:function(){var r=Jc(si)[0],a=Ct().memoizedState;return[typeof r=="boolean"?r:Ql(r),a]},useSyncExternalStore:Z_,useId:Iv,useHostTransitionStatus:gm,useFormState:fv,useActionState:fv,useOptimistic:function(r,a){var o=Ct();return iv(o,tt,r,a)},useMemoCache:lm,useCacheRefresh:Cv},zR={readContext:rn,use:Zc,useCallback:Tv,useContext:rn,useEffect:gv,useImperativeHandle:Ev,useInsertionEffect:yv,useLayoutEffect:_v,useMemo:bv,useReducer:cm,useRef:mv,useState:function(){return cm(si)},useDebugValue:dm,useDeferredValue:function(r,a){var o=Ct();return tt===null?mm(o,r,a):Av(o,tt.memoizedState,r,a)},useTransition:function(){var r=cm(si)[0],a=Ct().memoizedState;return[typeof r=="boolean"?r:Ql(r),a]},useSyncExternalStore:Z_,useId:Iv,useHostTransitionStatus:gm,useFormState:dv,useActionState:dv,useOptimistic:function(r,a){var o=Ct();return tt!==null?iv(o,tt,r,a):(o.baseState=r,[r,o.queue.dispatch])},useMemoCache:lm,useCacheRefresh:Cv},_o=null,Zl=0;function af(r){var a=Zl;return Zl+=1,_o===null&&(_o=[]),H_(_o,r,a)}function Jl(r,a){a=a.props.ref,r.ref=a!==void 0?a:null}function sf(r,a){throw a.$$typeof===T?Error(i(525)):(r=Object.prototype.toString.call(a),Error(i(31,r==="[object Object]"?"object with keys {"+Object.keys(a).join(", ")+"}":r)))}function Pv(r){var a=r._init;return a(r._payload)}function Mv(r){function a(U,M){if(r){var B=U.deletions;B===null?(U.deletions=[M],U.flags|=16):B.push(M)}}function o(U,M){if(!r)return null;for(;M!==null;)a(U,M),M=M.sibling;return null}function u(U){for(var M=new Map;U!==null;)U.key!==null?M.set(U.key,U):M.set(U.index,U),U=U.sibling;return M}function h(U,M){return U=ti(U,M),U.index=0,U.sibling=null,U}function p(U,M,B){return U.index=B,r?(B=U.alternate,B!==null?(B=B.index,B<M?(U.flags|=67108866,M):B):(U.flags|=67108866,M)):(U.flags|=1048576,M)}function E(U){return r&&U.alternate===null&&(U.flags|=67108866),U}function b(U,M,B,J){return M===null||M.tag!==6?(M=Ud(B,U.mode,J),M.return=U,M):(M=h(M,B),M.return=U,M)}function C(U,M,B,J){var he=B.type;return he===D?W(U,M,B.props.children,J,B.key):M!==null&&(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===R&&Pv(he)===M.type)?(M=h(M,B.props),Jl(M,B),M.return=U,M):(M=Bc(B.type,B.key,B.props,null,U.mode,J),Jl(M,B),M.return=U,M)}function q(U,M,B,J){return M===null||M.tag!==4||M.stateNode.containerInfo!==B.containerInfo||M.stateNode.implementation!==B.implementation?(M=jd(B,U.mode,J),M.return=U,M):(M=h(M,B.children||[]),M.return=U,M)}function W(U,M,B,J,he){return M===null||M.tag!==7?(M=as(B,U.mode,J,he),M.return=U,M):(M=h(M,B),M.return=U,M)}function ee(U,M,B){if(typeof M=="string"&&M!==""||typeof M=="number"||typeof M=="bigint")return M=Ud(""+M,U.mode,B),M.return=U,M;if(typeof M=="object"&&M!==null){switch(M.$$typeof){case w:return B=Bc(M.type,M.key,M.props,null,U.mode,B),Jl(B,M),B.return=U,B;case x:return M=jd(M,U.mode,B),M.return=U,M;case R:var J=M._init;return M=J(M._payload),ee(U,M,B)}if(mt(M)||j(M))return M=as(M,U.mode,B,null),M.return=U,M;if(typeof M.then=="function")return ee(U,af(M),B);if(M.$$typeof===Q)return ee(U,Gc(U,M),B);sf(U,M)}return null}function G(U,M,B,J){var he=M!==null?M.key:null;if(typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint")return he!==null?null:b(U,M,""+B,J);if(typeof B=="object"&&B!==null){switch(B.$$typeof){case w:return B.key===he?C(U,M,B,J):null;case x:return B.key===he?q(U,M,B,J):null;case R:return he=B._init,B=he(B._payload),G(U,M,B,J)}if(mt(B)||j(B))return he!==null?null:W(U,M,B,J,null);if(typeof B.then=="function")return G(U,M,af(B),J);if(B.$$typeof===Q)return G(U,M,Gc(U,B),J);sf(U,B)}return null}function K(U,M,B,J,he){if(typeof J=="string"&&J!==""||typeof J=="number"||typeof J=="bigint")return U=U.get(B)||null,b(M,U,""+J,he);if(typeof J=="object"&&J!==null){switch(J.$$typeof){case w:return U=U.get(J.key===null?B:J.key)||null,C(M,U,J,he);case x:return U=U.get(J.key===null?B:J.key)||null,q(M,U,J,he);case R:var ke=J._init;return J=ke(J._payload),K(U,M,B,J,he)}if(mt(J)||j(J))return U=U.get(B)||null,W(M,U,J,he,null);if(typeof J.then=="function")return K(U,M,B,af(J),he);if(J.$$typeof===Q)return K(U,M,B,Gc(M,J),he);sf(M,J)}return null}function Ae(U,M,B,J){for(var he=null,ke=null,me=M,Te=M=0,Ht=null;me!==null&&Te<B.length;Te++){me.index>Te?(Ht=me,me=null):Ht=me.sibling;var He=G(U,me,B[Te],J);if(He===null){me===null&&(me=Ht);break}r&&me&&He.alternate===null&&a(U,me),M=p(He,M,Te),ke===null?he=He:ke.sibling=He,ke=He,me=Ht}if(Te===B.length)return o(U,me),$e&&os(U,Te),he;if(me===null){for(;Te<B.length;Te++)me=ee(U,B[Te],J),me!==null&&(M=p(me,M,Te),ke===null?he=me:ke.sibling=me,ke=me);return $e&&os(U,Te),he}for(me=u(me);Te<B.length;Te++)Ht=K(me,U,Te,B[Te],J),Ht!==null&&(r&&Ht.alternate!==null&&me.delete(Ht.key===null?Te:Ht.key),M=p(Ht,M,Te),ke===null?he=Ht:ke.sibling=Ht,ke=Ht);return r&&me.forEach(function(aa){return a(U,aa)}),$e&&os(U,Te),he}function ve(U,M,B,J){if(B==null)throw Error(i(151));for(var he=null,ke=null,me=M,Te=M=0,Ht=null,He=B.next();me!==null&&!He.done;Te++,He=B.next()){me.index>Te?(Ht=me,me=null):Ht=me.sibling;var aa=G(U,me,He.value,J);if(aa===null){me===null&&(me=Ht);break}r&&me&&aa.alternate===null&&a(U,me),M=p(aa,M,Te),ke===null?he=aa:ke.sibling=aa,ke=aa,me=Ht}if(He.done)return o(U,me),$e&&os(U,Te),he;if(me===null){for(;!He.done;Te++,He=B.next())He=ee(U,He.value,J),He!==null&&(M=p(He,M,Te),ke===null?he=He:ke.sibling=He,ke=He);return $e&&os(U,Te),he}for(me=u(me);!He.done;Te++,He=B.next())He=K(me,U,Te,He.value,J),He!==null&&(r&&He.alternate!==null&&me.delete(He.key===null?Te:He.key),M=p(He,M,Te),ke===null?he=He:ke.sibling=He,ke=He);return r&&me.forEach(function(B2){return a(U,B2)}),$e&&os(U,Te),he}function rt(U,M,B,J){if(typeof B=="object"&&B!==null&&B.type===D&&B.key===null&&(B=B.props.children),typeof B=="object"&&B!==null){switch(B.$$typeof){case w:e:{for(var he=B.key;M!==null;){if(M.key===he){if(he=B.type,he===D){if(M.tag===7){o(U,M.sibling),J=h(M,B.props.children),J.return=U,U=J;break e}}else if(M.elementType===he||typeof he=="object"&&he!==null&&he.$$typeof===R&&Pv(he)===M.type){o(U,M.sibling),J=h(M,B.props),Jl(J,B),J.return=U,U=J;break e}o(U,M);break}else a(U,M);M=M.sibling}B.type===D?(J=as(B.props.children,U.mode,J,B.key),J.return=U,U=J):(J=Bc(B.type,B.key,B.props,null,U.mode,J),Jl(J,B),J.return=U,U=J)}return E(U);case x:e:{for(he=B.key;M!==null;){if(M.key===he)if(M.tag===4&&M.stateNode.containerInfo===B.containerInfo&&M.stateNode.implementation===B.implementation){o(U,M.sibling),J=h(M,B.children||[]),J.return=U,U=J;break e}else{o(U,M);break}else a(U,M);M=M.sibling}J=jd(B,U.mode,J),J.return=U,U=J}return E(U);case R:return he=B._init,B=he(B._payload),rt(U,M,B,J)}if(mt(B))return Ae(U,M,B,J);if(j(B)){if(he=j(B),typeof he!="function")throw Error(i(150));return B=he.call(B),ve(U,M,B,J)}if(typeof B.then=="function")return rt(U,M,af(B),J);if(B.$$typeof===Q)return rt(U,M,Gc(U,B),J);sf(U,B)}return typeof B=="string"&&B!==""||typeof B=="number"||typeof B=="bigint"?(B=""+B,M!==null&&M.tag===6?(o(U,M.sibling),J=h(M,B),J.return=U,U=J):(o(U,M),J=Ud(B,U.mode,J),J.return=U,U=J),E(U)):o(U,M)}return function(U,M,B,J){try{Zl=0;var he=rt(U,M,B,J);return _o=null,he}catch(me){if(me===ql||me===Kc)throw me;var ke=In(29,me,null,U.mode);return ke.lanes=J,ke.return=U,ke}finally{}}}var vo=Mv(!0),Lv=Mv(!1),Qn=ne(null),Sr=null;function Hi(r){var a=r.alternate;oe(Mt,Mt.current&1),oe(Qn,r),Sr===null&&(a===null||mo.current!==null||a.memoizedState!==null)&&(Sr=r)}function Vv(r){if(r.tag===22){if(oe(Mt,Mt.current),oe(Qn,r),Sr===null){var a=r.alternate;a!==null&&a.memoizedState!==null&&(Sr=r)}}else Gi()}function Gi(){oe(Mt,Mt.current),oe(Qn,Qn.current)}function oi(r){ce(Qn),Sr===r&&(Sr=null),ce(Mt)}var Mt=ne(0);function of(r){for(var a=r;a!==null;){if(a.tag===13){var o=a.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||op(o)))return a}else if(a.tag===19&&a.memoizedProps.revealOrder!==void 0){if((a.flags&128)!==0)return a}else if(a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return null;a=a.return}a.sibling.return=a.return,a=a.sibling}return null}function _m(r,a,o,u){a=r.memoizedState,o=o(u,a),o=o==null?a:_({},a,o),r.memoizedState=o,r.lanes===0&&(r.updateQueue.baseState=o)}var vm={enqueueSetState:function(r,a,o){r=r._reactInternals;var u=On(),h=Bi(u);h.payload=a,o!=null&&(h.callback=o),a=Fi(r,h,u),a!==null&&(Dn(a,r,u),Gl(a,r,u))},enqueueReplaceState:function(r,a,o){r=r._reactInternals;var u=On(),h=Bi(u);h.tag=1,h.payload=a,o!=null&&(h.callback=o),a=Fi(r,h,u),a!==null&&(Dn(a,r,u),Gl(a,r,u))},enqueueForceUpdate:function(r,a){r=r._reactInternals;var o=On(),u=Bi(o);u.tag=2,a!=null&&(u.callback=a),a=Fi(r,u,o),a!==null&&(Dn(a,r,o),Gl(a,r,o))}};function Uv(r,a,o,u,h,p,E){return r=r.stateNode,typeof r.shouldComponentUpdate=="function"?r.shouldComponentUpdate(u,p,E):a.prototype&&a.prototype.isPureReactComponent?!Ml(o,u)||!Ml(h,p):!0}function jv(r,a,o,u){r=a.state,typeof a.componentWillReceiveProps=="function"&&a.componentWillReceiveProps(o,u),typeof a.UNSAFE_componentWillReceiveProps=="function"&&a.UNSAFE_componentWillReceiveProps(o,u),a.state!==r&&vm.enqueueReplaceState(a,a.state,null)}function ms(r,a){var o=a;if("ref"in a){o={};for(var u in a)u!=="ref"&&(o[u]=a[u])}if(r=r.defaultProps){o===a&&(o=_({},o));for(var h in r)o[h]===void 0&&(o[h]=r[h])}return o}var lf=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var a=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(a))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function zv(r){lf(r)}function Bv(r){console.error(r)}function Fv(r){lf(r)}function uf(r,a){try{var o=r.onUncaughtError;o(a.value,{componentStack:a.stack})}catch(u){setTimeout(function(){throw u})}}function qv(r,a,o){try{var u=r.onCaughtError;u(o.value,{componentStack:o.stack,errorBoundary:a.tag===1?a.stateNode:null})}catch(h){setTimeout(function(){throw h})}}function Em(r,a,o){return o=Bi(o),o.tag=3,o.payload={element:null},o.callback=function(){uf(r,a)},o}function Hv(r){return r=Bi(r),r.tag=3,r}function Gv(r,a,o,u){var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var p=u.value;r.payload=function(){return h(p)},r.callback=function(){qv(a,o,u)}}var E=o.stateNode;E!==null&&typeof E.componentDidCatch=="function"&&(r.callback=function(){qv(a,o,u),typeof h!="function"&&(Wi===null?Wi=new Set([this]):Wi.add(this));var b=u.stack;this.componentDidCatch(u.value,{componentStack:b!==null?b:""})})}function BR(r,a,o,u,h){if(o.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){if(a=o.alternate,a!==null&&zl(a,o,h,!0),o=Qn.current,o!==null){switch(o.tag){case 13:return Sr===null?Hm():o.alternate===null&&yt===0&&(yt=3),o.flags&=-257,o.flags|=65536,o.lanes=h,u===Qd?o.flags|=16384:(a=o.updateQueue,a===null?o.updateQueue=new Set([u]):a.add(u),$m(r,u,h)),!1;case 22:return o.flags|=65536,u===Qd?o.flags|=16384:(a=o.updateQueue,a===null?(a={transitions:null,markerInstances:null,retryQueue:new Set([u])},o.updateQueue=a):(o=a.retryQueue,o===null?a.retryQueue=new Set([u]):o.add(u)),$m(r,u,h)),!1}throw Error(i(435,o.tag))}return $m(r,u,h),Hm(),!1}if($e)return a=Qn.current,a!==null?((a.flags&65536)===0&&(a.flags|=256),a.flags|=65536,a.lanes=h,u!==Fd&&(r=Error(i(422),{cause:u}),jl(Gn(r,o)))):(u!==Fd&&(a=Error(i(423),{cause:u}),jl(Gn(a,o))),r=r.current.alternate,r.flags|=65536,h&=-h,r.lanes|=h,u=Gn(u,o),h=Em(r.stateNode,u,h),Zd(r,h),yt!==4&&(yt=2)),!1;var p=Error(i(520),{cause:u});if(p=Gn(p,o),su===null?su=[p]:su.push(p),yt!==4&&(yt=2),a===null)return!0;u=Gn(u,o),o=a;do{switch(o.tag){case 3:return o.flags|=65536,r=h&-h,o.lanes|=r,r=Em(o.stateNode,u,r),Zd(o,r),!1;case 1:if(a=o.type,p=o.stateNode,(o.flags&128)===0&&(typeof a.getDerivedStateFromError=="function"||p!==null&&typeof p.componentDidCatch=="function"&&(Wi===null||!Wi.has(p))))return o.flags|=65536,h&=-h,o.lanes|=h,h=Hv(h),Gv(h,r,o,u),Zd(o,h),!1}o=o.return}while(o!==null);return!1}var $v=Error(i(461)),Ft=!1;function Qt(r,a,o,u){a.child=r===null?Lv(a,null,o,u):vo(a,r.child,o,u)}function Kv(r,a,o,u,h){o=o.render;var p=a.ref;if("ref"in u){var E={};for(var b in u)b!=="ref"&&(E[b]=u[b])}else E=u;return fs(a),u=rm(r,a,o,E,p,h),b=im(),r!==null&&!Ft?(am(r,a,h),li(r,a,h)):($e&&b&&zd(a),a.flags|=1,Qt(r,a,u,h),a.child)}function Yv(r,a,o,u,h){if(r===null){var p=o.type;return typeof p=="function"&&!Vd(p)&&p.defaultProps===void 0&&o.compare===null?(a.tag=15,a.type=p,Qv(r,a,p,u,h)):(r=Bc(o.type,null,u,a,a.mode,h),r.ref=a.ref,r.return=a,a.child=r)}if(p=r.child,!Cm(r,h)){var E=p.memoizedProps;if(o=o.compare,o=o!==null?o:Ml,o(E,u)&&r.ref===a.ref)return li(r,a,h)}return a.flags|=1,r=ti(p,u),r.ref=a.ref,r.return=a,a.child=r}function Qv(r,a,o,u,h){if(r!==null){var p=r.memoizedProps;if(Ml(p,u)&&r.ref===a.ref)if(Ft=!1,a.pendingProps=u=p,Cm(r,h))(r.flags&131072)!==0&&(Ft=!0);else return a.lanes=r.lanes,li(r,a,h)}return Tm(r,a,o,u,h)}function Xv(r,a,o){var u=a.pendingProps,h=u.children,p=r!==null?r.memoizedState:null;if(u.mode==="hidden"){if((a.flags&128)!==0){if(u=p!==null?p.baseLanes|o:o,r!==null){for(h=a.child=r.child,p=0;h!==null;)p=p|h.lanes|h.childLanes,h=h.sibling;a.childLanes=p&~u}else a.childLanes=0,a.child=null;return Wv(r,a,u,o)}if((o&536870912)!==0)a.memoizedState={baseLanes:0,cachePool:null},r!==null&&$c(a,p!==null?p.cachePool:null),p!==null?Q_(a,p):em(),Vv(a);else return a.lanes=a.childLanes=536870912,Wv(r,a,p!==null?p.baseLanes|o:o,o)}else p!==null?($c(a,p.cachePool),Q_(a,p),Gi(),a.memoizedState=null):(r!==null&&$c(a,null),em(),Gi());return Qt(r,a,h,o),a.child}function Wv(r,a,o,u){var h=Yd();return h=h===null?null:{parent:Pt._currentValue,pool:h},a.memoizedState={baseLanes:o,cachePool:h},r!==null&&$c(a,null),em(),Vv(a),r!==null&&zl(r,a,u,!0),null}function cf(r,a){var o=a.ref;if(o===null)r!==null&&r.ref!==null&&(a.flags|=4194816);else{if(typeof o!="function"&&typeof o!="object")throw Error(i(284));(r===null||r.ref!==o)&&(a.flags|=4194816)}}function Tm(r,a,o,u,h){return fs(a),o=rm(r,a,o,u,void 0,h),u=im(),r!==null&&!Ft?(am(r,a,h),li(r,a,h)):($e&&u&&zd(a),a.flags|=1,Qt(r,a,o,h),a.child)}function Zv(r,a,o,u,h,p){return fs(a),a.updateQueue=null,o=W_(a,u,o,h),X_(r),u=im(),r!==null&&!Ft?(am(r,a,p),li(r,a,p)):($e&&u&&zd(a),a.flags|=1,Qt(r,a,o,p),a.child)}function Jv(r,a,o,u,h){if(fs(a),a.stateNode===null){var p=lo,E=o.contextType;typeof E=="object"&&E!==null&&(p=rn(E)),p=new o(u,p),a.memoizedState=p.state!==null&&p.state!==void 0?p.state:null,p.updater=vm,a.stateNode=p,p._reactInternals=a,p=a.stateNode,p.props=u,p.state=a.memoizedState,p.refs={},Xd(a),E=o.contextType,p.context=typeof E=="object"&&E!==null?rn(E):lo,p.state=a.memoizedState,E=o.getDerivedStateFromProps,typeof E=="function"&&(_m(a,o,E,u),p.state=a.memoizedState),typeof o.getDerivedStateFromProps=="function"||typeof p.getSnapshotBeforeUpdate=="function"||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(E=p.state,typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount(),E!==p.state&&vm.enqueueReplaceState(p,p.state,null),Kl(a,u,p,h),$l(),p.state=a.memoizedState),typeof p.componentDidMount=="function"&&(a.flags|=4194308),u=!0}else if(r===null){p=a.stateNode;var b=a.memoizedProps,C=ms(o,b);p.props=C;var q=p.context,W=o.contextType;E=lo,typeof W=="object"&&W!==null&&(E=rn(W));var ee=o.getDerivedStateFromProps;W=typeof ee=="function"||typeof p.getSnapshotBeforeUpdate=="function",b=a.pendingProps!==b,W||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(b||q!==E)&&jv(a,p,u,E),zi=!1;var G=a.memoizedState;p.state=G,Kl(a,u,p,h),$l(),q=a.memoizedState,b||G!==q||zi?(typeof ee=="function"&&(_m(a,o,ee,u),q=a.memoizedState),(C=zi||Uv(a,o,C,u,G,q,E))?(W||typeof p.UNSAFE_componentWillMount!="function"&&typeof p.componentWillMount!="function"||(typeof p.componentWillMount=="function"&&p.componentWillMount(),typeof p.UNSAFE_componentWillMount=="function"&&p.UNSAFE_componentWillMount()),typeof p.componentDidMount=="function"&&(a.flags|=4194308)):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),a.memoizedProps=u,a.memoizedState=q),p.props=u,p.state=q,p.context=E,u=C):(typeof p.componentDidMount=="function"&&(a.flags|=4194308),u=!1)}else{p=a.stateNode,Wd(r,a),E=a.memoizedProps,W=ms(o,E),p.props=W,ee=a.pendingProps,G=p.context,q=o.contextType,C=lo,typeof q=="object"&&q!==null&&(C=rn(q)),b=o.getDerivedStateFromProps,(q=typeof b=="function"||typeof p.getSnapshotBeforeUpdate=="function")||typeof p.UNSAFE_componentWillReceiveProps!="function"&&typeof p.componentWillReceiveProps!="function"||(E!==ee||G!==C)&&jv(a,p,u,C),zi=!1,G=a.memoizedState,p.state=G,Kl(a,u,p,h),$l();var K=a.memoizedState;E!==ee||G!==K||zi||r!==null&&r.dependencies!==null&&Hc(r.dependencies)?(typeof b=="function"&&(_m(a,o,b,u),K=a.memoizedState),(W=zi||Uv(a,o,W,u,G,K,C)||r!==null&&r.dependencies!==null&&Hc(r.dependencies))?(q||typeof p.UNSAFE_componentWillUpdate!="function"&&typeof p.componentWillUpdate!="function"||(typeof p.componentWillUpdate=="function"&&p.componentWillUpdate(u,K,C),typeof p.UNSAFE_componentWillUpdate=="function"&&p.UNSAFE_componentWillUpdate(u,K,C)),typeof p.componentDidUpdate=="function"&&(a.flags|=4),typeof p.getSnapshotBeforeUpdate=="function"&&(a.flags|=1024)):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&G===r.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&G===r.memoizedState||(a.flags|=1024),a.memoizedProps=u,a.memoizedState=K),p.props=u,p.state=K,p.context=C,u=W):(typeof p.componentDidUpdate!="function"||E===r.memoizedProps&&G===r.memoizedState||(a.flags|=4),typeof p.getSnapshotBeforeUpdate!="function"||E===r.memoizedProps&&G===r.memoizedState||(a.flags|=1024),u=!1)}return p=u,cf(r,a),u=(a.flags&128)!==0,p||u?(p=a.stateNode,o=u&&typeof o.getDerivedStateFromError!="function"?null:p.render(),a.flags|=1,r!==null&&u?(a.child=vo(a,r.child,null,h),a.child=vo(a,null,o,h)):Qt(r,a,o,h),a.memoizedState=p.state,r=a.child):r=li(r,a,h),r}function e0(r,a,o,u){return Ul(),a.flags|=256,Qt(r,a,o,u),a.child}var bm={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Am(r){return{baseLanes:r,cachePool:B_()}}function wm(r,a,o){return r=r!==null?r.childLanes&~o:0,a&&(r|=Xn),r}function t0(r,a,o){var u=a.pendingProps,h=!1,p=(a.flags&128)!==0,E;if((E=p)||(E=r!==null&&r.memoizedState===null?!1:(Mt.current&2)!==0),E&&(h=!0,a.flags&=-129),E=(a.flags&32)!==0,a.flags&=-33,r===null){if($e){if(h?Hi(a):Gi(),$e){var b=gt,C;if(C=b){e:{for(C=b,b=wr;C.nodeType!==8;){if(!b){b=null;break e}if(C=ar(C.nextSibling),C===null){b=null;break e}}b=C}b!==null?(a.memoizedState={dehydrated:b,treeContext:ss!==null?{id:ni,overflow:ri}:null,retryLane:536870912,hydrationErrors:null},C=In(18,null,null,0),C.stateNode=b,C.return=a,a.child=C,pn=a,gt=null,C=!0):C=!1}C||us(a)}if(b=a.memoizedState,b!==null&&(b=b.dehydrated,b!==null))return op(b)?a.lanes=32:a.lanes=536870912,null;oi(a)}return b=u.children,u=u.fallback,h?(Gi(),h=a.mode,b=ff({mode:"hidden",children:b},h),u=as(u,h,o,null),b.return=a,u.return=a,b.sibling=u,a.child=b,h=a.child,h.memoizedState=Am(o),h.childLanes=wm(r,E,o),a.memoizedState=bm,u):(Hi(a),Sm(a,b))}if(C=r.memoizedState,C!==null&&(b=C.dehydrated,b!==null)){if(p)a.flags&256?(Hi(a),a.flags&=-257,a=Rm(r,a,o)):a.memoizedState!==null?(Gi(),a.child=r.child,a.flags|=128,a=null):(Gi(),h=u.fallback,b=a.mode,u=ff({mode:"visible",children:u.children},b),h=as(h,b,o,null),h.flags|=2,u.return=a,h.return=a,u.sibling=h,a.child=u,vo(a,r.child,null,o),u=a.child,u.memoizedState=Am(o),u.childLanes=wm(r,E,o),a.memoizedState=bm,a=h);else if(Hi(a),op(b)){if(E=b.nextSibling&&b.nextSibling.dataset,E)var q=E.dgst;E=q,u=Error(i(419)),u.stack="",u.digest=E,jl({value:u,source:null,stack:null}),a=Rm(r,a,o)}else if(Ft||zl(r,a,o,!1),E=(o&r.childLanes)!==0,Ft||E){if(E=st,E!==null&&(u=o&-o,u=(u&42)!==0?1:Di(u),u=(u&(E.suspendedLanes|o))!==0?0:u,u!==0&&u!==C.retryLane))throw C.retryLane=u,oo(r,u),Dn(E,r,u),$v;b.data==="$?"||Hm(),a=Rm(r,a,o)}else b.data==="$?"?(a.flags|=192,a.child=r.child,a=null):(r=C.treeContext,gt=ar(b.nextSibling),pn=a,$e=!0,ls=null,wr=!1,r!==null&&(Kn[Yn++]=ni,Kn[Yn++]=ri,Kn[Yn++]=ss,ni=r.id,ri=r.overflow,ss=a),a=Sm(a,u.children),a.flags|=4096);return a}return h?(Gi(),h=u.fallback,b=a.mode,C=r.child,q=C.sibling,u=ti(C,{mode:"hidden",children:u.children}),u.subtreeFlags=C.subtreeFlags&65011712,q!==null?h=ti(q,h):(h=as(h,b,o,null),h.flags|=2),h.return=a,u.return=a,u.sibling=h,a.child=u,u=h,h=a.child,b=r.child.memoizedState,b===null?b=Am(o):(C=b.cachePool,C!==null?(q=Pt._currentValue,C=C.parent!==q?{parent:q,pool:q}:C):C=B_(),b={baseLanes:b.baseLanes|o,cachePool:C}),h.memoizedState=b,h.childLanes=wm(r,E,o),a.memoizedState=bm,u):(Hi(a),o=r.child,r=o.sibling,o=ti(o,{mode:"visible",children:u.children}),o.return=a,o.sibling=null,r!==null&&(E=a.deletions,E===null?(a.deletions=[r],a.flags|=16):E.push(r)),a.child=o,a.memoizedState=null,o)}function Sm(r,a){return a=ff({mode:"visible",children:a},r.mode),a.return=r,r.child=a}function ff(r,a){return r=In(22,r,null,a),r.lanes=0,r.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null},r}function Rm(r,a,o){return vo(a,r.child,null,o),r=Sm(a,a.pendingProps.children),r.flags|=2,a.memoizedState=null,r}function n0(r,a,o){r.lanes|=a;var u=r.alternate;u!==null&&(u.lanes|=a),Hd(r.return,a,o)}function Im(r,a,o,u,h){var p=r.memoizedState;p===null?r.memoizedState={isBackwards:a,rendering:null,renderingStartTime:0,last:u,tail:o,tailMode:h}:(p.isBackwards=a,p.rendering=null,p.renderingStartTime=0,p.last=u,p.tail=o,p.tailMode=h)}function r0(r,a,o){var u=a.pendingProps,h=u.revealOrder,p=u.tail;if(Qt(r,a,u.children,o),u=Mt.current,(u&2)!==0)u=u&1|2,a.flags|=128;else{if(r!==null&&(r.flags&128)!==0)e:for(r=a.child;r!==null;){if(r.tag===13)r.memoizedState!==null&&n0(r,o,a);else if(r.tag===19)n0(r,o,a);else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===a)break e;for(;r.sibling===null;){if(r.return===null||r.return===a)break e;r=r.return}r.sibling.return=r.return,r=r.sibling}u&=1}switch(oe(Mt,u),h){case"forwards":for(o=a.child,h=null;o!==null;)r=o.alternate,r!==null&&of(r)===null&&(h=o),o=o.sibling;o=h,o===null?(h=a.child,a.child=null):(h=o.sibling,o.sibling=null),Im(a,!1,h,o,p);break;case"backwards":for(o=null,h=a.child,a.child=null;h!==null;){if(r=h.alternate,r!==null&&of(r)===null){a.child=h;break}r=h.sibling,h.sibling=o,o=h,h=r}Im(a,!0,o,null,p);break;case"together":Im(a,!1,null,null,void 0);break;default:a.memoizedState=null}return a.child}function li(r,a,o){if(r!==null&&(a.dependencies=r.dependencies),Xi|=a.lanes,(o&a.childLanes)===0)if(r!==null){if(zl(r,a,o,!1),(o&a.childLanes)===0)return null}else return null;if(r!==null&&a.child!==r.child)throw Error(i(153));if(a.child!==null){for(r=a.child,o=ti(r,r.pendingProps),a.child=o,o.return=a;r.sibling!==null;)r=r.sibling,o=o.sibling=ti(r,r.pendingProps),o.return=a;o.sibling=null}return a.child}function Cm(r,a){return(r.lanes&a)!==0?!0:(r=r.dependencies,!!(r!==null&&Hc(r)))}function FR(r,a,o){switch(a.tag){case 3:at(a,a.stateNode.containerInfo),ji(a,Pt,r.memoizedState.cache),Ul();break;case 27:case 5:Oi(a);break;case 4:at(a,a.stateNode.containerInfo);break;case 10:ji(a,a.type,a.memoizedProps.value);break;case 13:var u=a.memoizedState;if(u!==null)return u.dehydrated!==null?(Hi(a),a.flags|=128,null):(o&a.child.childLanes)!==0?t0(r,a,o):(Hi(a),r=li(r,a,o),r!==null?r.sibling:null);Hi(a);break;case 19:var h=(r.flags&128)!==0;if(u=(o&a.childLanes)!==0,u||(zl(r,a,o,!1),u=(o&a.childLanes)!==0),h){if(u)return r0(r,a,o);a.flags|=128}if(h=a.memoizedState,h!==null&&(h.rendering=null,h.tail=null,h.lastEffect=null),oe(Mt,Mt.current),u)break;return null;case 22:case 23:return a.lanes=0,Xv(r,a,o);case 24:ji(a,Pt,r.memoizedState.cache)}return li(r,a,o)}function i0(r,a,o){if(r!==null)if(r.memoizedProps!==a.pendingProps)Ft=!0;else{if(!Cm(r,o)&&(a.flags&128)===0)return Ft=!1,FR(r,a,o);Ft=(r.flags&131072)!==0}else Ft=!1,$e&&(a.flags&1048576)!==0&&P_(a,qc,a.index);switch(a.lanes=0,a.tag){case 16:e:{r=a.pendingProps;var u=a.elementType,h=u._init;if(u=h(u._payload),a.type=u,typeof u=="function")Vd(u)?(r=ms(u,r),a.tag=1,a=Jv(null,a,u,r,o)):(a.tag=0,a=Tm(null,a,u,r,o));else{if(u!=null){if(h=u.$$typeof,h===re){a.tag=11,a=Kv(null,a,u,r,o);break e}else if(h===O){a.tag=14,a=Yv(null,a,u,r,o);break e}}throw a=$t(u)||u,Error(i(306,a,""))}}return a;case 0:return Tm(r,a,a.type,a.pendingProps,o);case 1:return u=a.type,h=ms(u,a.pendingProps),Jv(r,a,u,h,o);case 3:e:{if(at(a,a.stateNode.containerInfo),r===null)throw Error(i(387));u=a.pendingProps;var p=a.memoizedState;h=p.element,Wd(r,a),Kl(a,u,null,o);var E=a.memoizedState;if(u=E.cache,ji(a,Pt,u),u!==p.cache&&Gd(a,[Pt],o,!0),$l(),u=E.element,p.isDehydrated)if(p={element:u,isDehydrated:!1,cache:E.cache},a.updateQueue.baseState=p,a.memoizedState=p,a.flags&256){a=e0(r,a,u,o);break e}else if(u!==h){h=Gn(Error(i(424)),a),jl(h),a=e0(r,a,u,o);break e}else{switch(r=a.stateNode.containerInfo,r.nodeType){case 9:r=r.body;break;default:r=r.nodeName==="HTML"?r.ownerDocument.body:r}for(gt=ar(r.firstChild),pn=a,$e=!0,ls=null,wr=!0,o=Lv(a,null,u,o),a.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling}else{if(Ul(),u===h){a=li(r,a,o);break e}Qt(r,a,u,o)}a=a.child}return a;case 26:return cf(r,a),r===null?(o=lE(a.type,null,a.pendingProps,null))?a.memoizedState=o:$e||(o=a.type,r=a.pendingProps,u=Sf(Re.current).createElement(o),u[Ot]=a,u[St]=r,Wt(u,o,r),Tt(u),a.stateNode=u):a.memoizedState=lE(a.type,r.memoizedProps,a.pendingProps,r.memoizedState),null;case 27:return Oi(a),r===null&&$e&&(u=a.stateNode=aE(a.type,a.pendingProps,Re.current),pn=a,wr=!0,h=gt,ea(a.type)?(lp=h,gt=ar(u.firstChild)):gt=h),Qt(r,a,a.pendingProps.children,o),cf(r,a),r===null&&(a.flags|=4194304),a.child;case 5:return r===null&&$e&&((h=u=gt)&&(u=g2(u,a.type,a.pendingProps,wr),u!==null?(a.stateNode=u,pn=a,gt=ar(u.firstChild),wr=!1,h=!0):h=!1),h||us(a)),Oi(a),h=a.type,p=a.pendingProps,E=r!==null?r.memoizedProps:null,u=p.children,ip(h,p)?u=null:E!==null&&ip(h,E)&&(a.flags|=32),a.memoizedState!==null&&(h=rm(r,a,PR,null,null,o),pu._currentValue=h),cf(r,a),Qt(r,a,u,o),a.child;case 6:return r===null&&$e&&((r=o=gt)&&(o=y2(o,a.pendingProps,wr),o!==null?(a.stateNode=o,pn=a,gt=null,r=!0):r=!1),r||us(a)),null;case 13:return t0(r,a,o);case 4:return at(a,a.stateNode.containerInfo),u=a.pendingProps,r===null?a.child=vo(a,null,u,o):Qt(r,a,u,o),a.child;case 11:return Kv(r,a,a.type,a.pendingProps,o);case 7:return Qt(r,a,a.pendingProps,o),a.child;case 8:return Qt(r,a,a.pendingProps.children,o),a.child;case 12:return Qt(r,a,a.pendingProps.children,o),a.child;case 10:return u=a.pendingProps,ji(a,a.type,u.value),Qt(r,a,u.children,o),a.child;case 9:return h=a.type._context,u=a.pendingProps.children,fs(a),h=rn(h),u=u(h),a.flags|=1,Qt(r,a,u,o),a.child;case 14:return Yv(r,a,a.type,a.pendingProps,o);case 15:return Qv(r,a,a.type,a.pendingProps,o);case 19:return r0(r,a,o);case 31:return u=a.pendingProps,o=a.mode,u={mode:u.mode,children:u.children},r===null?(o=ff(u,o),o.ref=a.ref,a.child=o,o.return=a,a=o):(o=ti(r.child,u),o.ref=a.ref,a.child=o,o.return=a,a=o),a;case 22:return Xv(r,a,o);case 24:return fs(a),u=rn(Pt),r===null?(h=Yd(),h===null&&(h=st,p=$d(),h.pooledCache=p,p.refCount++,p!==null&&(h.pooledCacheLanes|=o),h=p),a.memoizedState={parent:u,cache:h},Xd(a),ji(a,Pt,h)):((r.lanes&o)!==0&&(Wd(r,a),Kl(a,null,null,o),$l()),h=r.memoizedState,p=a.memoizedState,h.parent!==u?(h={parent:u,cache:u},a.memoizedState=h,a.lanes===0&&(a.memoizedState=a.updateQueue.baseState=h),ji(a,Pt,u)):(u=p.cache,ji(a,Pt,u),u!==h.cache&&Gd(a,[Pt],o,!0))),Qt(r,a,a.pendingProps.children,o),a.child;case 29:throw a.pendingProps}throw Error(i(156,a.tag))}function ui(r){r.flags|=4}function a0(r,a){if(a.type!=="stylesheet"||(a.state.loading&4)!==0)r.flags&=-16777217;else if(r.flags|=16777216,!dE(a)){if(a=Qn.current,a!==null&&((Be&4194048)===Be?Sr!==null:(Be&62914560)!==Be&&(Be&536870912)===0||a!==Sr))throw Hl=Qd,F_;r.flags|=8192}}function hf(r,a){a!==null&&(r.flags|=4),r.flags&16384&&(a=r.tag!==22?yl():536870912,r.lanes|=a,Ao|=a)}function eu(r,a){if(!$e)switch(r.tailMode){case"hidden":a=r.tail;for(var o=null;a!==null;)a.alternate!==null&&(o=a),a=a.sibling;o===null?r.tail=null:o.sibling=null;break;case"collapsed":o=r.tail;for(var u=null;o!==null;)o.alternate!==null&&(u=o),o=o.sibling;u===null?a||r.tail===null?r.tail=null:r.tail.sibling=null:u.sibling=null}}function ft(r){var a=r.alternate!==null&&r.alternate.child===r.child,o=0,u=0;if(a)for(var h=r.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags&65011712,u|=h.flags&65011712,h.return=r,h=h.sibling;else for(h=r.child;h!==null;)o|=h.lanes|h.childLanes,u|=h.subtreeFlags,u|=h.flags,h.return=r,h=h.sibling;return r.subtreeFlags|=u,r.childLanes=o,a}function qR(r,a,o){var u=a.pendingProps;switch(Bd(a),a.tag){case 31:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(a),null;case 1:return ft(a),null;case 3:return o=a.stateNode,u=null,r!==null&&(u=r.memoizedState.cache),a.memoizedState.cache!==u&&(a.flags|=2048),ai(Pt),hr(),o.pendingContext&&(o.context=o.pendingContext,o.pendingContext=null),(r===null||r.child===null)&&(Vl(a)?ui(a):r===null||r.memoizedState.isDehydrated&&(a.flags&256)===0||(a.flags|=1024,V_())),ft(a),null;case 26:return o=a.memoizedState,r===null?(ui(a),o!==null?(ft(a),a0(a,o)):(ft(a),a.flags&=-16777217)):o?o!==r.memoizedState?(ui(a),ft(a),a0(a,o)):(ft(a),a.flags&=-16777217):(r.memoizedProps!==u&&ui(a),ft(a),a.flags&=-16777217),null;case 27:Fr(a),o=Re.current;var h=a.type;if(r!==null&&a.stateNode!=null)r.memoizedProps!==u&&ui(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return ft(a),null}r=ye.current,Vl(a)?M_(a):(r=aE(h,u,o),a.stateNode=r,ui(a))}return ft(a),null;case 5:if(Fr(a),o=a.type,r!==null&&a.stateNode!=null)r.memoizedProps!==u&&ui(a);else{if(!u){if(a.stateNode===null)throw Error(i(166));return ft(a),null}if(r=ye.current,Vl(a))M_(a);else{switch(h=Sf(Re.current),r){case 1:r=h.createElementNS("http://www.w3.org/2000/svg",o);break;case 2:r=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;default:switch(o){case"svg":r=h.createElementNS("http://www.w3.org/2000/svg",o);break;case"math":r=h.createElementNS("http://www.w3.org/1998/Math/MathML",o);break;case"script":r=h.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof u.is=="string"?h.createElement("select",{is:u.is}):h.createElement("select"),u.multiple?r.multiple=!0:u.size&&(r.size=u.size);break;default:r=typeof u.is=="string"?h.createElement(o,{is:u.is}):h.createElement(o)}}r[Ot]=a,r[St]=u;e:for(h=a.child;h!==null;){if(h.tag===5||h.tag===6)r.appendChild(h.stateNode);else if(h.tag!==4&&h.tag!==27&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===a)break e;for(;h.sibling===null;){if(h.return===null||h.return===a)break e;h=h.return}h.sibling.return=h.return,h=h.sibling}a.stateNode=r;e:switch(Wt(r,o,u),o){case"button":case"input":case"select":case"textarea":r=!!u.autoFocus;break e;case"img":r=!0;break e;default:r=!1}r&&ui(a)}}return ft(a),a.flags&=-16777217,null;case 6:if(r&&a.stateNode!=null)r.memoizedProps!==u&&ui(a);else{if(typeof u!="string"&&a.stateNode===null)throw Error(i(166));if(r=Re.current,Vl(a)){if(r=a.stateNode,o=a.memoizedProps,u=null,h=pn,h!==null)switch(h.tag){case 27:case 5:u=h.memoizedProps}r[Ot]=a,r=!!(r.nodeValue===o||u!==null&&u.suppressHydrationWarning===!0||Z0(r.nodeValue,o)),r||us(a)}else r=Sf(r).createTextNode(u),r[Ot]=a,a.stateNode=r}return ft(a),null;case 13:if(u=a.memoizedState,r===null||r.memoizedState!==null&&r.memoizedState.dehydrated!==null){if(h=Vl(a),u!==null&&u.dehydrated!==null){if(r===null){if(!h)throw Error(i(318));if(h=a.memoizedState,h=h!==null?h.dehydrated:null,!h)throw Error(i(317));h[Ot]=a}else Ul(),(a.flags&128)===0&&(a.memoizedState=null),a.flags|=4;ft(a),h=!1}else h=V_(),r!==null&&r.memoizedState!==null&&(r.memoizedState.hydrationErrors=h),h=!0;if(!h)return a.flags&256?(oi(a),a):(oi(a),null)}if(oi(a),(a.flags&128)!==0)return a.lanes=o,a;if(o=u!==null,r=r!==null&&r.memoizedState!==null,o){u=a.child,h=null,u.alternate!==null&&u.alternate.memoizedState!==null&&u.alternate.memoizedState.cachePool!==null&&(h=u.alternate.memoizedState.cachePool.pool);var p=null;u.memoizedState!==null&&u.memoizedState.cachePool!==null&&(p=u.memoizedState.cachePool.pool),p!==h&&(u.flags|=2048)}return o!==r&&o&&(a.child.flags|=8192),hf(a,a.updateQueue),ft(a),null;case 4:return hr(),r===null&&Jm(a.stateNode.containerInfo),ft(a),null;case 10:return ai(a.type),ft(a),null;case 19:if(ce(Mt),h=a.memoizedState,h===null)return ft(a),null;if(u=(a.flags&128)!==0,p=h.rendering,p===null)if(u)eu(h,!1);else{if(yt!==0||r!==null&&(r.flags&128)!==0)for(r=a.child;r!==null;){if(p=of(r),p!==null){for(a.flags|=128,eu(h,!1),r=p.updateQueue,a.updateQueue=r,hf(a,r),a.subtreeFlags=0,r=o,o=a.child;o!==null;)k_(o,r),o=o.sibling;return oe(Mt,Mt.current&1|2),a.child}r=r.sibling}h.tail!==null&&jn()>pf&&(a.flags|=128,u=!0,eu(h,!1),a.lanes=4194304)}else{if(!u)if(r=of(p),r!==null){if(a.flags|=128,u=!0,r=r.updateQueue,a.updateQueue=r,hf(a,r),eu(h,!0),h.tail===null&&h.tailMode==="hidden"&&!p.alternate&&!$e)return ft(a),null}else 2*jn()-h.renderingStartTime>pf&&o!==536870912&&(a.flags|=128,u=!0,eu(h,!1),a.lanes=4194304);h.isBackwards?(p.sibling=a.child,a.child=p):(r=h.last,r!==null?r.sibling=p:a.child=p,h.last=p)}return h.tail!==null?(a=h.tail,h.rendering=a,h.tail=a.sibling,h.renderingStartTime=jn(),a.sibling=null,r=Mt.current,oe(Mt,u?r&1|2:r&1),a):(ft(a),null);case 22:case 23:return oi(a),tm(),u=a.memoizedState!==null,r!==null?r.memoizedState!==null!==u&&(a.flags|=8192):u&&(a.flags|=8192),u?(o&536870912)!==0&&(a.flags&128)===0&&(ft(a),a.subtreeFlags&6&&(a.flags|=8192)):ft(a),o=a.updateQueue,o!==null&&hf(a,o.retryQueue),o=null,r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),u=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(u=a.memoizedState.cachePool.pool),u!==o&&(a.flags|=2048),r!==null&&ce(hs),null;case 24:return o=null,r!==null&&(o=r.memoizedState.cache),a.memoizedState.cache!==o&&(a.flags|=2048),ai(Pt),ft(a),null;case 25:return null;case 30:return null}throw Error(i(156,a.tag))}function HR(r,a){switch(Bd(a),a.tag){case 1:return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 3:return ai(Pt),hr(),r=a.flags,(r&65536)!==0&&(r&128)===0?(a.flags=r&-65537|128,a):null;case 26:case 27:case 5:return Fr(a),null;case 13:if(oi(a),r=a.memoizedState,r!==null&&r.dehydrated!==null){if(a.alternate===null)throw Error(i(340));Ul()}return r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 19:return ce(Mt),null;case 4:return hr(),null;case 10:return ai(a.type),null;case 22:case 23:return oi(a),tm(),r!==null&&ce(hs),r=a.flags,r&65536?(a.flags=r&-65537|128,a):null;case 24:return ai(Pt),null;case 25:return null;default:return null}}function s0(r,a){switch(Bd(a),a.tag){case 3:ai(Pt),hr();break;case 26:case 27:case 5:Fr(a);break;case 4:hr();break;case 13:oi(a);break;case 19:ce(Mt);break;case 10:ai(a.type);break;case 22:case 23:oi(a),tm(),r!==null&&ce(hs);break;case 24:ai(Pt)}}function tu(r,a){try{var o=a.updateQueue,u=o!==null?o.lastEffect:null;if(u!==null){var h=u.next;o=h;do{if((o.tag&r)===r){u=void 0;var p=o.create,E=o.inst;u=p(),E.destroy=u}o=o.next}while(o!==h)}}catch(b){it(a,a.return,b)}}function $i(r,a,o){try{var u=a.updateQueue,h=u!==null?u.lastEffect:null;if(h!==null){var p=h.next;u=p;do{if((u.tag&r)===r){var E=u.inst,b=E.destroy;if(b!==void 0){E.destroy=void 0,h=a;var C=o,q=b;try{q()}catch(W){it(h,C,W)}}}u=u.next}while(u!==p)}}catch(W){it(a,a.return,W)}}function o0(r){var a=r.updateQueue;if(a!==null){var o=r.stateNode;try{Y_(a,o)}catch(u){it(r,r.return,u)}}}function l0(r,a,o){o.props=ms(r.type,r.memoizedProps),o.state=r.memoizedState;try{o.componentWillUnmount()}catch(u){it(r,a,u)}}function nu(r,a){try{var o=r.ref;if(o!==null){switch(r.tag){case 26:case 27:case 5:var u=r.stateNode;break;case 30:u=r.stateNode;break;default:u=r.stateNode}typeof o=="function"?r.refCleanup=o(u):o.current=u}}catch(h){it(r,a,h)}}function Rr(r,a){var o=r.ref,u=r.refCleanup;if(o!==null)if(typeof u=="function")try{u()}catch(h){it(r,a,h)}finally{r.refCleanup=null,r=r.alternate,r!=null&&(r.refCleanup=null)}else if(typeof o=="function")try{o(null)}catch(h){it(r,a,h)}else o.current=null}function u0(r){var a=r.type,o=r.memoizedProps,u=r.stateNode;try{e:switch(a){case"button":case"input":case"select":case"textarea":o.autoFocus&&u.focus();break e;case"img":o.src?u.src=o.src:o.srcSet&&(u.srcset=o.srcSet)}}catch(h){it(r,r.return,h)}}function xm(r,a,o){try{var u=r.stateNode;f2(u,r.type,o,a),u[St]=a}catch(h){it(r,r.return,h)}}function c0(r){return r.tag===5||r.tag===3||r.tag===26||r.tag===27&&ea(r.type)||r.tag===4}function Nm(r){e:for(;;){for(;r.sibling===null;){if(r.return===null||c0(r.return))return null;r=r.return}for(r.sibling.return=r.return,r=r.sibling;r.tag!==5&&r.tag!==6&&r.tag!==18;){if(r.tag===27&&ea(r.type)||r.flags&2||r.child===null||r.tag===4)continue e;r.child.return=r,r=r.child}if(!(r.flags&2))return r.stateNode}}function Om(r,a,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,a?(o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o).insertBefore(r,a):(a=o.nodeType===9?o.body:o.nodeName==="HTML"?o.ownerDocument.body:o,a.appendChild(r),o=o._reactRootContainer,o!=null||a.onclick!==null||(a.onclick=wf));else if(u!==4&&(u===27&&ea(r.type)&&(o=r.stateNode,a=null),r=r.child,r!==null))for(Om(r,a,o),r=r.sibling;r!==null;)Om(r,a,o),r=r.sibling}function df(r,a,o){var u=r.tag;if(u===5||u===6)r=r.stateNode,a?o.insertBefore(r,a):o.appendChild(r);else if(u!==4&&(u===27&&ea(r.type)&&(o=r.stateNode),r=r.child,r!==null))for(df(r,a,o),r=r.sibling;r!==null;)df(r,a,o),r=r.sibling}function f0(r){var a=r.stateNode,o=r.memoizedProps;try{for(var u=r.type,h=a.attributes;h.length;)a.removeAttributeNode(h[0]);Wt(a,u,o),a[Ot]=r,a[St]=o}catch(p){it(r,r.return,p)}}var ci=!1,At=!1,Dm=!1,h0=typeof WeakSet=="function"?WeakSet:Set,qt=null;function GR(r,a){if(r=r.containerInfo,np=Of,r=A_(r),Nd(r)){if("selectionStart"in r)var o={start:r.selectionStart,end:r.selectionEnd};else e:{o=(o=r.ownerDocument)&&o.defaultView||window;var u=o.getSelection&&o.getSelection();if(u&&u.rangeCount!==0){o=u.anchorNode;var h=u.anchorOffset,p=u.focusNode;u=u.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var E=0,b=-1,C=-1,q=0,W=0,ee=r,G=null;t:for(;;){for(var K;ee!==o||h!==0&&ee.nodeType!==3||(b=E+h),ee!==p||u!==0&&ee.nodeType!==3||(C=E+u),ee.nodeType===3&&(E+=ee.nodeValue.length),(K=ee.firstChild)!==null;)G=ee,ee=K;for(;;){if(ee===r)break t;if(G===o&&++q===h&&(b=E),G===p&&++W===u&&(C=E),(K=ee.nextSibling)!==null)break;ee=G,G=ee.parentNode}ee=K}o=b===-1||C===-1?null:{start:b,end:C}}else o=null}o=o||{start:0,end:0}}else o=null;for(rp={focusedElem:r,selectionRange:o},Of=!1,qt=a;qt!==null;)if(a=qt,r=a.child,(a.subtreeFlags&1024)!==0&&r!==null)r.return=a,qt=r;else for(;qt!==null;){switch(a=qt,p=a.alternate,r=a.flags,a.tag){case 0:break;case 11:case 15:break;case 1:if((r&1024)!==0&&p!==null){r=void 0,o=a,h=p.memoizedProps,p=p.memoizedState,u=o.stateNode;try{var Ae=ms(o.type,h,o.elementType===o.type);r=u.getSnapshotBeforeUpdate(Ae,p),u.__reactInternalSnapshotBeforeUpdate=r}catch(ve){it(o,o.return,ve)}}break;case 3:if((r&1024)!==0){if(r=a.stateNode.containerInfo,o=r.nodeType,o===9)sp(r);else if(o===1)switch(r.nodeName){case"HEAD":case"HTML":case"BODY":sp(r);break;default:r.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((r&1024)!==0)throw Error(i(163))}if(r=a.sibling,r!==null){r.return=a.return,qt=r;break}qt=a.return}}function d0(r,a,o){var u=o.flags;switch(o.tag){case 0:case 11:case 15:Ki(r,o),u&4&&tu(5,o);break;case 1:if(Ki(r,o),u&4)if(r=o.stateNode,a===null)try{r.componentDidMount()}catch(E){it(o,o.return,E)}else{var h=ms(o.type,a.memoizedProps);a=a.memoizedState;try{r.componentDidUpdate(h,a,r.__reactInternalSnapshotBeforeUpdate)}catch(E){it(o,o.return,E)}}u&64&&o0(o),u&512&&nu(o,o.return);break;case 3:if(Ki(r,o),u&64&&(r=o.updateQueue,r!==null)){if(a=null,o.child!==null)switch(o.child.tag){case 27:case 5:a=o.child.stateNode;break;case 1:a=o.child.stateNode}try{Y_(r,a)}catch(E){it(o,o.return,E)}}break;case 27:a===null&&u&4&&f0(o);case 26:case 5:Ki(r,o),a===null&&u&4&&u0(o),u&512&&nu(o,o.return);break;case 12:Ki(r,o);break;case 13:Ki(r,o),u&4&&g0(r,o),u&64&&(r=o.memoizedState,r!==null&&(r=r.dehydrated,r!==null&&(o=e2.bind(null,o),_2(r,o))));break;case 22:if(u=o.memoizedState!==null||ci,!u){a=a!==null&&a.memoizedState!==null||At,h=ci;var p=At;ci=u,(At=a)&&!p?Yi(r,o,(o.subtreeFlags&8772)!==0):Ki(r,o),ci=h,At=p}break;case 30:break;default:Ki(r,o)}}function m0(r){var a=r.alternate;a!==null&&(r.alternate=null,m0(a)),r.child=null,r.deletions=null,r.sibling=null,r.tag===5&&(a=r.stateNode,a!==null&&Mi(a)),r.stateNode=null,r.return=null,r.dependencies=null,r.memoizedProps=null,r.memoizedState=null,r.pendingProps=null,r.stateNode=null,r.updateQueue=null}var ut=null,vn=!1;function fi(r,a,o){for(o=o.child;o!==null;)p0(r,a,o),o=o.sibling}function p0(r,a,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(pt,o)}catch{}switch(o.tag){case 26:At||Rr(o,a),fi(r,a,o),o.memoizedState?o.memoizedState.count--:o.stateNode&&(o=o.stateNode,o.parentNode.removeChild(o));break;case 27:At||Rr(o,a);var u=ut,h=vn;ea(o.type)&&(ut=o.stateNode,vn=!1),fi(r,a,o),fu(o.stateNode),ut=u,vn=h;break;case 5:At||Rr(o,a);case 6:if(u=ut,h=vn,ut=null,fi(r,a,o),ut=u,vn=h,ut!==null)if(vn)try{(ut.nodeType===9?ut.body:ut.nodeName==="HTML"?ut.ownerDocument.body:ut).removeChild(o.stateNode)}catch(p){it(o,a,p)}else try{ut.removeChild(o.stateNode)}catch(p){it(o,a,p)}break;case 18:ut!==null&&(vn?(r=ut,rE(r.nodeType===9?r.body:r.nodeName==="HTML"?r.ownerDocument.body:r,o.stateNode),vu(r)):rE(ut,o.stateNode));break;case 4:u=ut,h=vn,ut=o.stateNode.containerInfo,vn=!0,fi(r,a,o),ut=u,vn=h;break;case 0:case 11:case 14:case 15:At||$i(2,o,a),At||$i(4,o,a),fi(r,a,o);break;case 1:At||(Rr(o,a),u=o.stateNode,typeof u.componentWillUnmount=="function"&&l0(o,a,u)),fi(r,a,o);break;case 21:fi(r,a,o);break;case 22:At=(u=At)||o.memoizedState!==null,fi(r,a,o),At=u;break;default:fi(r,a,o)}}function g0(r,a){if(a.memoizedState===null&&(r=a.alternate,r!==null&&(r=r.memoizedState,r!==null&&(r=r.dehydrated,r!==null))))try{vu(r)}catch(o){it(a,a.return,o)}}function $R(r){switch(r.tag){case 13:case 19:var a=r.stateNode;return a===null&&(a=r.stateNode=new h0),a;case 22:return r=r.stateNode,a=r._retryCache,a===null&&(a=r._retryCache=new h0),a;default:throw Error(i(435,r.tag))}}function km(r,a){var o=$R(r);a.forEach(function(u){var h=t2.bind(null,r,u);o.has(u)||(o.add(u),u.then(h,h))})}function Cn(r,a){var o=a.deletions;if(o!==null)for(var u=0;u<o.length;u++){var h=o[u],p=r,E=a,b=E;e:for(;b!==null;){switch(b.tag){case 27:if(ea(b.type)){ut=b.stateNode,vn=!1;break e}break;case 5:ut=b.stateNode,vn=!1;break e;case 3:case 4:ut=b.stateNode.containerInfo,vn=!0;break e}b=b.return}if(ut===null)throw Error(i(160));p0(p,E,h),ut=null,vn=!1,p=h.alternate,p!==null&&(p.return=null),h.return=null}if(a.subtreeFlags&13878)for(a=a.child;a!==null;)y0(a,r),a=a.sibling}var ir=null;function y0(r,a){var o=r.alternate,u=r.flags;switch(r.tag){case 0:case 11:case 14:case 15:Cn(a,r),xn(r),u&4&&($i(3,r,r.return),tu(3,r),$i(5,r,r.return));break;case 1:Cn(a,r),xn(r),u&512&&(At||o===null||Rr(o,o.return)),u&64&&ci&&(r=r.updateQueue,r!==null&&(u=r.callbacks,u!==null&&(o=r.shared.hiddenCallbacks,r.shared.hiddenCallbacks=o===null?u:o.concat(u))));break;case 26:var h=ir;if(Cn(a,r),xn(r),u&512&&(At||o===null||Rr(o,o.return)),u&4){var p=o!==null?o.memoizedState:null;if(u=r.memoizedState,o===null)if(u===null)if(r.stateNode===null){e:{u=r.type,o=r.memoizedProps,h=h.ownerDocument||h;t:switch(u){case"title":p=h.getElementsByTagName("title")[0],(!p||p[qa]||p[Ot]||p.namespaceURI==="http://www.w3.org/2000/svg"||p.hasAttribute("itemprop"))&&(p=h.createElement(u),h.head.insertBefore(p,h.querySelector("head > title"))),Wt(p,u,o),p[Ot]=r,Tt(p),u=p;break e;case"link":var E=fE("link","href",h).get(u+(o.href||""));if(E){for(var b=0;b<E.length;b++)if(p=E[b],p.getAttribute("href")===(o.href==null||o.href===""?null:o.href)&&p.getAttribute("rel")===(o.rel==null?null:o.rel)&&p.getAttribute("title")===(o.title==null?null:o.title)&&p.getAttribute("crossorigin")===(o.crossOrigin==null?null:o.crossOrigin)){E.splice(b,1);break t}}p=h.createElement(u),Wt(p,u,o),h.head.appendChild(p);break;case"meta":if(E=fE("meta","content",h).get(u+(o.content||""))){for(b=0;b<E.length;b++)if(p=E[b],p.getAttribute("content")===(o.content==null?null:""+o.content)&&p.getAttribute("name")===(o.name==null?null:o.name)&&p.getAttribute("property")===(o.property==null?null:o.property)&&p.getAttribute("http-equiv")===(o.httpEquiv==null?null:o.httpEquiv)&&p.getAttribute("charset")===(o.charSet==null?null:o.charSet)){E.splice(b,1);break t}}p=h.createElement(u),Wt(p,u,o),h.head.appendChild(p);break;default:throw Error(i(468,u))}p[Ot]=r,Tt(p),u=p}r.stateNode=u}else hE(h,r.type,r.stateNode);else r.stateNode=cE(h,u,r.memoizedProps);else p!==u?(p===null?o.stateNode!==null&&(o=o.stateNode,o.parentNode.removeChild(o)):p.count--,u===null?hE(h,r.type,r.stateNode):cE(h,u,r.memoizedProps)):u===null&&r.stateNode!==null&&xm(r,r.memoizedProps,o.memoizedProps)}break;case 27:Cn(a,r),xn(r),u&512&&(At||o===null||Rr(o,o.return)),o!==null&&u&4&&xm(r,r.memoizedProps,o.memoizedProps);break;case 5:if(Cn(a,r),xn(r),u&512&&(At||o===null||Rr(o,o.return)),r.flags&32){h=r.stateNode;try{Bn(h,"")}catch(K){it(r,r.return,K)}}u&4&&r.stateNode!=null&&(h=r.memoizedProps,xm(r,h,o!==null?o.memoizedProps:h)),u&1024&&(Dm=!0);break;case 6:if(Cn(a,r),xn(r),u&4){if(r.stateNode===null)throw Error(i(162));u=r.memoizedProps,o=r.stateNode;try{o.nodeValue=u}catch(K){it(r,r.return,K)}}break;case 3:if(Cf=null,h=ir,ir=Rf(a.containerInfo),Cn(a,r),ir=h,xn(r),u&4&&o!==null&&o.memoizedState.isDehydrated)try{vu(a.containerInfo)}catch(K){it(r,r.return,K)}Dm&&(Dm=!1,_0(r));break;case 4:u=ir,ir=Rf(r.stateNode.containerInfo),Cn(a,r),xn(r),ir=u;break;case 12:Cn(a,r),xn(r);break;case 13:Cn(a,r),xn(r),r.child.flags&8192&&r.memoizedState!==null!=(o!==null&&o.memoizedState!==null)&&(jm=jn()),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,km(r,u)));break;case 22:h=r.memoizedState!==null;var C=o!==null&&o.memoizedState!==null,q=ci,W=At;if(ci=q||h,At=W||C,Cn(a,r),At=W,ci=q,xn(r),u&8192)e:for(a=r.stateNode,a._visibility=h?a._visibility&-2:a._visibility|1,h&&(o===null||C||ci||At||ps(r)),o=null,a=r;;){if(a.tag===5||a.tag===26){if(o===null){C=o=a;try{if(p=C.stateNode,h)E=p.style,typeof E.setProperty=="function"?E.setProperty("display","none","important"):E.display="none";else{b=C.stateNode;var ee=C.memoizedProps.style,G=ee!=null&&ee.hasOwnProperty("display")?ee.display:null;b.style.display=G==null||typeof G=="boolean"?"":(""+G).trim()}}catch(K){it(C,C.return,K)}}}else if(a.tag===6){if(o===null){C=a;try{C.stateNode.nodeValue=h?"":C.memoizedProps}catch(K){it(C,C.return,K)}}}else if((a.tag!==22&&a.tag!==23||a.memoizedState===null||a===r)&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===r)break e;for(;a.sibling===null;){if(a.return===null||a.return===r)break e;o===a&&(o=null),a=a.return}o===a&&(o=null),a.sibling.return=a.return,a=a.sibling}u&4&&(u=r.updateQueue,u!==null&&(o=u.retryQueue,o!==null&&(u.retryQueue=null,km(r,o))));break;case 19:Cn(a,r),xn(r),u&4&&(u=r.updateQueue,u!==null&&(r.updateQueue=null,km(r,u)));break;case 30:break;case 21:break;default:Cn(a,r),xn(r)}}function xn(r){var a=r.flags;if(a&2){try{for(var o,u=r.return;u!==null;){if(c0(u)){o=u;break}u=u.return}if(o==null)throw Error(i(160));switch(o.tag){case 27:var h=o.stateNode,p=Nm(r);df(r,p,h);break;case 5:var E=o.stateNode;o.flags&32&&(Bn(E,""),o.flags&=-33);var b=Nm(r);df(r,b,E);break;case 3:case 4:var C=o.stateNode.containerInfo,q=Nm(r);Om(r,q,C);break;default:throw Error(i(161))}}catch(W){it(r,r.return,W)}r.flags&=-3}a&4096&&(r.flags&=-4097)}function _0(r){if(r.subtreeFlags&1024)for(r=r.child;r!==null;){var a=r;_0(a),a.tag===5&&a.flags&1024&&a.stateNode.reset(),r=r.sibling}}function Ki(r,a){if(a.subtreeFlags&8772)for(a=a.child;a!==null;)d0(r,a.alternate,a),a=a.sibling}function ps(r){for(r=r.child;r!==null;){var a=r;switch(a.tag){case 0:case 11:case 14:case 15:$i(4,a,a.return),ps(a);break;case 1:Rr(a,a.return);var o=a.stateNode;typeof o.componentWillUnmount=="function"&&l0(a,a.return,o),ps(a);break;case 27:fu(a.stateNode);case 26:case 5:Rr(a,a.return),ps(a);break;case 22:a.memoizedState===null&&ps(a);break;case 30:ps(a);break;default:ps(a)}r=r.sibling}}function Yi(r,a,o){for(o=o&&(a.subtreeFlags&8772)!==0,a=a.child;a!==null;){var u=a.alternate,h=r,p=a,E=p.flags;switch(p.tag){case 0:case 11:case 15:Yi(h,p,o),tu(4,p);break;case 1:if(Yi(h,p,o),u=p,h=u.stateNode,typeof h.componentDidMount=="function")try{h.componentDidMount()}catch(q){it(u,u.return,q)}if(u=p,h=u.updateQueue,h!==null){var b=u.stateNode;try{var C=h.shared.hiddenCallbacks;if(C!==null)for(h.shared.hiddenCallbacks=null,h=0;h<C.length;h++)K_(C[h],b)}catch(q){it(u,u.return,q)}}o&&E&64&&o0(p),nu(p,p.return);break;case 27:f0(p);case 26:case 5:Yi(h,p,o),o&&u===null&&E&4&&u0(p),nu(p,p.return);break;case 12:Yi(h,p,o);break;case 13:Yi(h,p,o),o&&E&4&&g0(h,p);break;case 22:p.memoizedState===null&&Yi(h,p,o),nu(p,p.return);break;case 30:break;default:Yi(h,p,o)}a=a.sibling}}function Pm(r,a){var o=null;r!==null&&r.memoizedState!==null&&r.memoizedState.cachePool!==null&&(o=r.memoizedState.cachePool.pool),r=null,a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(r=a.memoizedState.cachePool.pool),r!==o&&(r!=null&&r.refCount++,o!=null&&Bl(o))}function Mm(r,a){r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&Bl(r))}function Ir(r,a,o,u){if(a.subtreeFlags&10256)for(a=a.child;a!==null;)v0(r,a,o,u),a=a.sibling}function v0(r,a,o,u){var h=a.flags;switch(a.tag){case 0:case 11:case 15:Ir(r,a,o,u),h&2048&&tu(9,a);break;case 1:Ir(r,a,o,u);break;case 3:Ir(r,a,o,u),h&2048&&(r=null,a.alternate!==null&&(r=a.alternate.memoizedState.cache),a=a.memoizedState.cache,a!==r&&(a.refCount++,r!=null&&Bl(r)));break;case 12:if(h&2048){Ir(r,a,o,u),r=a.stateNode;try{var p=a.memoizedProps,E=p.id,b=p.onPostCommit;typeof b=="function"&&b(E,a.alternate===null?"mount":"update",r.passiveEffectDuration,-0)}catch(C){it(a,a.return,C)}}else Ir(r,a,o,u);break;case 13:Ir(r,a,o,u);break;case 23:break;case 22:p=a.stateNode,E=a.alternate,a.memoizedState!==null?p._visibility&2?Ir(r,a,o,u):ru(r,a):p._visibility&2?Ir(r,a,o,u):(p._visibility|=2,Eo(r,a,o,u,(a.subtreeFlags&10256)!==0)),h&2048&&Pm(E,a);break;case 24:Ir(r,a,o,u),h&2048&&Mm(a.alternate,a);break;default:Ir(r,a,o,u)}}function Eo(r,a,o,u,h){for(h=h&&(a.subtreeFlags&10256)!==0,a=a.child;a!==null;){var p=r,E=a,b=o,C=u,q=E.flags;switch(E.tag){case 0:case 11:case 15:Eo(p,E,b,C,h),tu(8,E);break;case 23:break;case 22:var W=E.stateNode;E.memoizedState!==null?W._visibility&2?Eo(p,E,b,C,h):ru(p,E):(W._visibility|=2,Eo(p,E,b,C,h)),h&&q&2048&&Pm(E.alternate,E);break;case 24:Eo(p,E,b,C,h),h&&q&2048&&Mm(E.alternate,E);break;default:Eo(p,E,b,C,h)}a=a.sibling}}function ru(r,a){if(a.subtreeFlags&10256)for(a=a.child;a!==null;){var o=r,u=a,h=u.flags;switch(u.tag){case 22:ru(o,u),h&2048&&Pm(u.alternate,u);break;case 24:ru(o,u),h&2048&&Mm(u.alternate,u);break;default:ru(o,u)}a=a.sibling}}var iu=8192;function To(r){if(r.subtreeFlags&iu)for(r=r.child;r!==null;)E0(r),r=r.sibling}function E0(r){switch(r.tag){case 26:To(r),r.flags&iu&&r.memoizedState!==null&&O2(ir,r.memoizedState,r.memoizedProps);break;case 5:To(r);break;case 3:case 4:var a=ir;ir=Rf(r.stateNode.containerInfo),To(r),ir=a;break;case 22:r.memoizedState===null&&(a=r.alternate,a!==null&&a.memoizedState!==null?(a=iu,iu=16777216,To(r),iu=a):To(r));break;default:To(r)}}function T0(r){var a=r.alternate;if(a!==null&&(r=a.child,r!==null)){a.child=null;do a=r.sibling,r.sibling=null,r=a;while(r!==null)}}function au(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];qt=u,A0(u,r)}T0(r)}if(r.subtreeFlags&10256)for(r=r.child;r!==null;)b0(r),r=r.sibling}function b0(r){switch(r.tag){case 0:case 11:case 15:au(r),r.flags&2048&&$i(9,r,r.return);break;case 3:au(r);break;case 12:au(r);break;case 22:var a=r.stateNode;r.memoizedState!==null&&a._visibility&2&&(r.return===null||r.return.tag!==13)?(a._visibility&=-3,mf(r)):au(r);break;default:au(r)}}function mf(r){var a=r.deletions;if((r.flags&16)!==0){if(a!==null)for(var o=0;o<a.length;o++){var u=a[o];qt=u,A0(u,r)}T0(r)}for(r=r.child;r!==null;){switch(a=r,a.tag){case 0:case 11:case 15:$i(8,a,a.return),mf(a);break;case 22:o=a.stateNode,o._visibility&2&&(o._visibility&=-3,mf(a));break;default:mf(a)}r=r.sibling}}function A0(r,a){for(;qt!==null;){var o=qt;switch(o.tag){case 0:case 11:case 15:$i(8,o,a);break;case 23:case 22:if(o.memoizedState!==null&&o.memoizedState.cachePool!==null){var u=o.memoizedState.cachePool.pool;u!=null&&u.refCount++}break;case 24:Bl(o.memoizedState.cache)}if(u=o.child,u!==null)u.return=o,qt=u;else e:for(o=r;qt!==null;){u=qt;var h=u.sibling,p=u.return;if(m0(u),u===o){qt=null;break e}if(h!==null){h.return=p,qt=h;break e}qt=p}}}var KR={getCacheForType:function(r){var a=rn(Pt),o=a.data.get(r);return o===void 0&&(o=r(),a.data.set(r,o)),o}},YR=typeof WeakMap=="function"?WeakMap:Map,Ze=0,st=null,Pe=null,Be=0,Je=0,Nn=null,Qi=!1,bo=!1,Lm=!1,hi=0,yt=0,Xi=0,gs=0,Vm=0,Xn=0,Ao=0,su=null,En=null,Um=!1,jm=0,pf=1/0,gf=null,Wi=null,Xt=0,Zi=null,wo=null,So=0,zm=0,Bm=null,w0=null,ou=0,Fm=null;function On(){if((Ze&2)!==0&&Be!==0)return Be&-Be;if(X.T!==null){var r=fo;return r!==0?r:Qm()}return ki()}function S0(){Xn===0&&(Xn=(Be&536870912)===0||$e?gl():536870912);var r=Qn.current;return r!==null&&(r.flags|=32),Xn}function Dn(r,a,o){(r===st&&(Je===2||Je===9)||r.cancelPendingCommit!==null)&&(Ro(r,0),Ji(r,Be,Xn,!1)),Hr(r,o),((Ze&2)===0||r!==st)&&(r===st&&((Ze&2)===0&&(gs|=o),yt===4&&Ji(r,Be,Xn,!1)),Cr(r))}function R0(r,a,o){if((Ze&6)!==0)throw Error(i(327));var u=!o&&(a&124)===0&&(a&r.expiredLanes)===0||Fa(r,a),h=u?WR(r,a):Gm(r,a,!0),p=u;do{if(h===0){bo&&!u&&Ji(r,a,0,!1);break}else{if(o=r.current.alternate,p&&!QR(o)){h=Gm(r,a,!1),p=!1;continue}if(h===2){if(p=a,r.errorRecoveryDisabledLanes&p)var E=0;else E=r.pendingLanes&-536870913,E=E!==0?E:E&536870912?536870912:0;if(E!==0){a=E;e:{var b=r;h=su;var C=b.current.memoizedState.isDehydrated;if(C&&(Ro(b,E).flags|=256),E=Gm(b,E,!1),E!==2){if(Lm&&!C){b.errorRecoveryDisabledLanes|=p,gs|=p,h=4;break e}p=En,En=h,p!==null&&(En===null?En=p:En.push.apply(En,p))}h=E}if(p=!1,h!==2)continue}}if(h===1){Ro(r,0),Ji(r,a,0,!0);break}e:{switch(u=r,p=h,p){case 0:case 1:throw Error(i(345));case 4:if((a&4194048)!==a)break;case 6:Ji(u,a,Xn,!Qi);break e;case 2:En=null;break;case 3:case 5:break;default:throw Error(i(329))}if((a&62914560)===a&&(h=jm+300-jn(),10<h)){if(Ji(u,a,Xn,!Qi),Fs(u,0,!0)!==0)break e;u.timeoutHandle=tE(I0.bind(null,u,o,En,gf,Um,a,Xn,gs,Ao,Qi,p,2,-0,0),h);break e}I0(u,o,En,gf,Um,a,Xn,gs,Ao,Qi,p,0,-0,0)}}break}while(!0);Cr(r)}function I0(r,a,o,u,h,p,E,b,C,q,W,ee,G,K){if(r.timeoutHandle=-1,ee=a.subtreeFlags,(ee&8192||(ee&16785408)===16785408)&&(mu={stylesheets:null,count:0,unsuspend:N2},E0(a),ee=D2(),ee!==null)){r.cancelPendingCommit=ee(P0.bind(null,r,a,p,o,u,h,E,b,C,W,1,G,K)),Ji(r,p,E,!q);return}P0(r,a,p,o,u,h,E,b,C)}function QR(r){for(var a=r;;){var o=a.tag;if((o===0||o===11||o===15)&&a.flags&16384&&(o=a.updateQueue,o!==null&&(o=o.stores,o!==null)))for(var u=0;u<o.length;u++){var h=o[u],p=h.getSnapshot;h=h.value;try{if(!Rn(p(),h))return!1}catch{return!1}}if(o=a.child,a.subtreeFlags&16384&&o!==null)o.return=a,a=o;else{if(a===r)break;for(;a.sibling===null;){if(a.return===null||a.return===r)return!0;a=a.return}a.sibling.return=a.return,a=a.sibling}}return!0}function Ji(r,a,o,u){a&=~Vm,a&=~gs,r.suspendedLanes|=a,r.pingedLanes&=~a,u&&(r.warmLanes|=a),u=r.expirationTimes;for(var h=a;0<h;){var p=31-nn(h),E=1<<p;u[p]=-1,h&=~E}o!==0&&dr(r,o,a)}function yf(){return(Ze&6)===0?(lu(0),!1):!0}function qm(){if(Pe!==null){if(Je===0)var r=Pe.return;else r=Pe,ii=cs=null,sm(r),_o=null,Zl=0,r=Pe;for(;r!==null;)s0(r.alternate,r),r=r.return;Pe=null}}function Ro(r,a){var o=r.timeoutHandle;o!==-1&&(r.timeoutHandle=-1,d2(o)),o=r.cancelPendingCommit,o!==null&&(r.cancelPendingCommit=null,o()),qm(),st=r,Pe=o=ti(r.current,null),Be=a,Je=0,Nn=null,Qi=!1,bo=Fa(r,a),Lm=!1,Ao=Xn=Vm=gs=Xi=yt=0,En=su=null,Um=!1,(a&8)!==0&&(a|=a&32);var u=r.entangledLanes;if(u!==0)for(r=r.entanglements,u&=a;0<u;){var h=31-nn(u),p=1<<h;a|=r[h],u&=~p}return hi=a,Uc(),o}function C0(r,a){Ne=null,X.H=rf,a===ql||a===Kc?(a=G_(),Je=3):a===F_?(a=G_(),Je=4):Je=a===$v?8:a!==null&&typeof a=="object"&&typeof a.then=="function"?6:1,Nn=a,Pe===null&&(yt=1,uf(r,Gn(a,r.current)))}function x0(){var r=X.H;return X.H=rf,r===null?rf:r}function N0(){var r=X.A;return X.A=KR,r}function Hm(){yt=4,Qi||(Be&4194048)!==Be&&Qn.current!==null||(bo=!0),(Xi&134217727)===0&&(gs&134217727)===0||st===null||Ji(st,Be,Xn,!1)}function Gm(r,a,o){var u=Ze;Ze|=2;var h=x0(),p=N0();(st!==r||Be!==a)&&(gf=null,Ro(r,a)),a=!1;var E=yt;e:do try{if(Je!==0&&Pe!==null){var b=Pe,C=Nn;switch(Je){case 8:qm(),E=6;break e;case 3:case 2:case 9:case 6:Qn.current===null&&(a=!0);var q=Je;if(Je=0,Nn=null,Io(r,b,C,q),o&&bo){E=0;break e}break;default:q=Je,Je=0,Nn=null,Io(r,b,C,q)}}XR(),E=yt;break}catch(W){C0(r,W)}while(!0);return a&&r.shellSuspendCounter++,ii=cs=null,Ze=u,X.H=h,X.A=p,Pe===null&&(st=null,Be=0,Uc()),E}function XR(){for(;Pe!==null;)O0(Pe)}function WR(r,a){var o=Ze;Ze|=2;var u=x0(),h=N0();st!==r||Be!==a?(gf=null,pf=jn()+500,Ro(r,a)):bo=Fa(r,a);e:do try{if(Je!==0&&Pe!==null){a=Pe;var p=Nn;t:switch(Je){case 1:Je=0,Nn=null,Io(r,a,p,1);break;case 2:case 9:if(q_(p)){Je=0,Nn=null,D0(a);break}a=function(){Je!==2&&Je!==9||st!==r||(Je=7),Cr(r)},p.then(a,a);break e;case 3:Je=7;break e;case 4:Je=5;break e;case 7:q_(p)?(Je=0,Nn=null,D0(a)):(Je=0,Nn=null,Io(r,a,p,7));break;case 5:var E=null;switch(Pe.tag){case 26:E=Pe.memoizedState;case 5:case 27:var b=Pe;if(!E||dE(E)){Je=0,Nn=null;var C=b.sibling;if(C!==null)Pe=C;else{var q=b.return;q!==null?(Pe=q,_f(q)):Pe=null}break t}}Je=0,Nn=null,Io(r,a,p,5);break;case 6:Je=0,Nn=null,Io(r,a,p,6);break;case 8:qm(),yt=6;break e;default:throw Error(i(462))}}ZR();break}catch(W){C0(r,W)}while(!0);return ii=cs=null,X.H=u,X.A=h,Ze=o,Pe!==null?0:(st=null,Be=0,Uc(),yt)}function ZR(){for(;Pe!==null&&!hl();)O0(Pe)}function O0(r){var a=i0(r.alternate,r,hi);r.memoizedProps=r.pendingProps,a===null?_f(r):Pe=a}function D0(r){var a=r,o=a.alternate;switch(a.tag){case 15:case 0:a=Zv(o,a,a.pendingProps,a.type,void 0,Be);break;case 11:a=Zv(o,a,a.pendingProps,a.type.render,a.ref,Be);break;case 5:sm(a);default:s0(o,a),a=Pe=k_(a,hi),a=i0(o,a,hi)}r.memoizedProps=r.pendingProps,a===null?_f(r):Pe=a}function Io(r,a,o,u){ii=cs=null,sm(a),_o=null,Zl=0;var h=a.return;try{if(BR(r,h,a,o,Be)){yt=1,uf(r,Gn(o,r.current)),Pe=null;return}}catch(p){if(h!==null)throw Pe=h,p;yt=1,uf(r,Gn(o,r.current)),Pe=null;return}a.flags&32768?($e||u===1?r=!0:bo||(Be&536870912)!==0?r=!1:(Qi=r=!0,(u===2||u===9||u===3||u===6)&&(u=Qn.current,u!==null&&u.tag===13&&(u.flags|=16384))),k0(a,r)):_f(a)}function _f(r){var a=r;do{if((a.flags&32768)!==0){k0(a,Qi);return}r=a.return;var o=qR(a.alternate,a,hi);if(o!==null){Pe=o;return}if(a=a.sibling,a!==null){Pe=a;return}Pe=a=r}while(a!==null);yt===0&&(yt=5)}function k0(r,a){do{var o=HR(r.alternate,r);if(o!==null){o.flags&=32767,Pe=o;return}if(o=r.return,o!==null&&(o.flags|=32768,o.subtreeFlags=0,o.deletions=null),!a&&(r=r.sibling,r!==null)){Pe=r;return}Pe=r=o}while(r!==null);yt=6,Pe=null}function P0(r,a,o,u,h,p,E,b,C){r.cancelPendingCommit=null;do vf();while(Xt!==0);if((Ze&6)!==0)throw Error(i(327));if(a!==null){if(a===r.current)throw Error(i(177));if(p=a.lanes|a.childLanes,p|=Md,_l(r,o,p,E,b,C),r===st&&(Pe=st=null,Be=0),wo=a,Zi=r,So=o,zm=p,Bm=h,w0=u,(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?(r.callbackNode=null,r.callbackPriority=0,n2(Ua,function(){return j0(),null})):(r.callbackNode=null,r.callbackPriority=0),u=(a.flags&13878)!==0,(a.subtreeFlags&13878)!==0||u){u=X.T,X.T=null,h=ue.p,ue.p=2,E=Ze,Ze|=4;try{GR(r,a,o)}finally{Ze=E,ue.p=h,X.T=u}}Xt=1,M0(),L0(),V0()}}function M0(){if(Xt===1){Xt=0;var r=Zi,a=wo,o=(a.flags&13878)!==0;if((a.subtreeFlags&13878)!==0||o){o=X.T,X.T=null;var u=ue.p;ue.p=2;var h=Ze;Ze|=4;try{y0(a,r);var p=rp,E=A_(r.containerInfo),b=p.focusedElem,C=p.selectionRange;if(E!==b&&b&&b.ownerDocument&&b_(b.ownerDocument.documentElement,b)){if(C!==null&&Nd(b)){var q=C.start,W=C.end;if(W===void 0&&(W=q),"selectionStart"in b)b.selectionStart=q,b.selectionEnd=Math.min(W,b.value.length);else{var ee=b.ownerDocument||document,G=ee&&ee.defaultView||window;if(G.getSelection){var K=G.getSelection(),Ae=b.textContent.length,ve=Math.min(C.start,Ae),rt=C.end===void 0?ve:Math.min(C.end,Ae);!K.extend&&ve>rt&&(E=rt,rt=ve,ve=E);var U=T_(b,ve),M=T_(b,rt);if(U&&M&&(K.rangeCount!==1||K.anchorNode!==U.node||K.anchorOffset!==U.offset||K.focusNode!==M.node||K.focusOffset!==M.offset)){var B=ee.createRange();B.setStart(U.node,U.offset),K.removeAllRanges(),ve>rt?(K.addRange(B),K.extend(M.node,M.offset)):(B.setEnd(M.node,M.offset),K.addRange(B))}}}}for(ee=[],K=b;K=K.parentNode;)K.nodeType===1&&ee.push({element:K,left:K.scrollLeft,top:K.scrollTop});for(typeof b.focus=="function"&&b.focus(),b=0;b<ee.length;b++){var J=ee[b];J.element.scrollLeft=J.left,J.element.scrollTop=J.top}}Of=!!np,rp=np=null}finally{Ze=h,ue.p=u,X.T=o}}r.current=a,Xt=2}}function L0(){if(Xt===2){Xt=0;var r=Zi,a=wo,o=(a.flags&8772)!==0;if((a.subtreeFlags&8772)!==0||o){o=X.T,X.T=null;var u=ue.p;ue.p=2;var h=Ze;Ze|=4;try{d0(r,a.alternate,a)}finally{Ze=h,ue.p=u,X.T=o}}Xt=3}}function V0(){if(Xt===4||Xt===3){Xt=0,dc();var r=Zi,a=wo,o=So,u=w0;(a.subtreeFlags&10256)!==0||(a.flags&10256)!==0?Xt=5:(Xt=0,wo=Zi=null,U0(r,r.pendingLanes));var h=r.pendingLanes;if(h===0&&(Wi=null),qs(o),a=a.stateNode,We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(pt,a,void 0,(a.current.flags&128)===128)}catch{}if(u!==null){a=X.T,h=ue.p,ue.p=2,X.T=null;try{for(var p=r.onRecoverableError,E=0;E<u.length;E++){var b=u[E];p(b.value,{componentStack:b.stack})}}finally{X.T=a,ue.p=h}}(So&3)!==0&&vf(),Cr(r),h=r.pendingLanes,(o&4194090)!==0&&(h&42)!==0?r===Fm?ou++:(ou=0,Fm=r):ou=0,lu(0)}}function U0(r,a){(r.pooledCacheLanes&=a)===0&&(a=r.pooledCache,a!=null&&(r.pooledCache=null,Bl(a)))}function vf(r){return M0(),L0(),V0(),j0()}function j0(){if(Xt!==5)return!1;var r=Zi,a=zm;zm=0;var o=qs(So),u=X.T,h=ue.p;try{ue.p=32>o?32:o,X.T=null,o=Bm,Bm=null;var p=Zi,E=So;if(Xt=0,wo=Zi=null,So=0,(Ze&6)!==0)throw Error(i(331));var b=Ze;if(Ze|=4,b0(p.current),v0(p,p.current,E,o),Ze=b,lu(0,!1),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(pt,p)}catch{}return!0}finally{ue.p=h,X.T=u,U0(r,a)}}function z0(r,a,o){a=Gn(o,a),a=Em(r.stateNode,a,2),r=Fi(r,a,2),r!==null&&(Hr(r,2),Cr(r))}function it(r,a,o){if(r.tag===3)z0(r,r,o);else for(;a!==null;){if(a.tag===3){z0(a,r,o);break}else if(a.tag===1){var u=a.stateNode;if(typeof a.type.getDerivedStateFromError=="function"||typeof u.componentDidCatch=="function"&&(Wi===null||!Wi.has(u))){r=Gn(o,r),o=Hv(2),u=Fi(a,o,2),u!==null&&(Gv(o,u,a,r),Hr(u,2),Cr(u));break}}a=a.return}}function $m(r,a,o){var u=r.pingCache;if(u===null){u=r.pingCache=new YR;var h=new Set;u.set(a,h)}else h=u.get(a),h===void 0&&(h=new Set,u.set(a,h));h.has(o)||(Lm=!0,h.add(o),r=JR.bind(null,r,a,o),a.then(r,r))}function JR(r,a,o){var u=r.pingCache;u!==null&&u.delete(a),r.pingedLanes|=r.suspendedLanes&o,r.warmLanes&=~o,st===r&&(Be&o)===o&&(yt===4||yt===3&&(Be&62914560)===Be&&300>jn()-jm?(Ze&2)===0&&Ro(r,0):Vm|=o,Ao===Be&&(Ao=0)),Cr(r)}function B0(r,a){a===0&&(a=yl()),r=oo(r,a),r!==null&&(Hr(r,a),Cr(r))}function e2(r){var a=r.memoizedState,o=0;a!==null&&(o=a.retryLane),B0(r,o)}function t2(r,a){var o=0;switch(r.tag){case 13:var u=r.stateNode,h=r.memoizedState;h!==null&&(o=h.retryLane);break;case 19:u=r.stateNode;break;case 22:u=r.stateNode._retryCache;break;default:throw Error(i(314))}u!==null&&u.delete(a),B0(r,o)}function n2(r,a){return La(r,a)}var Ef=null,Co=null,Km=!1,Tf=!1,Ym=!1,ys=0;function Cr(r){r!==Co&&r.next===null&&(Co===null?Ef=Co=r:Co=Co.next=r),Tf=!0,Km||(Km=!0,i2())}function lu(r,a){if(!Ym&&Tf){Ym=!0;do for(var o=!1,u=Ef;u!==null;){if(r!==0){var h=u.pendingLanes;if(h===0)var p=0;else{var E=u.suspendedLanes,b=u.pingedLanes;p=(1<<31-nn(42|r)+1)-1,p&=h&~(E&~b),p=p&201326741?p&201326741|1:p?p|2:0}p!==0&&(o=!0,G0(u,p))}else p=Be,p=Fs(u,u===st?p:0,u.cancelPendingCommit!==null||u.timeoutHandle!==-1),(p&3)===0||Fa(u,p)||(o=!0,G0(u,p));u=u.next}while(o);Ym=!1}}function r2(){F0()}function F0(){Tf=Km=!1;var r=0;ys!==0&&(h2()&&(r=ys),ys=0);for(var a=jn(),o=null,u=Ef;u!==null;){var h=u.next,p=q0(u,a);p===0?(u.next=null,o===null?Ef=h:o.next=h,h===null&&(Co=o)):(o=u,(r!==0||(p&3)!==0)&&(Tf=!0)),u=h}lu(r)}function q0(r,a){for(var o=r.suspendedLanes,u=r.pingedLanes,h=r.expirationTimes,p=r.pendingLanes&-62914561;0<p;){var E=31-nn(p),b=1<<E,C=h[E];C===-1?((b&o)===0||(b&u)!==0)&&(h[E]=pl(b,a)):C<=a&&(r.expiredLanes|=b),p&=~b}if(a=st,o=Be,o=Fs(r,r===a?o:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u=r.callbackNode,o===0||r===a&&(Je===2||Je===9)||r.cancelPendingCommit!==null)return u!==null&&u!==null&&Va(u),r.callbackNode=null,r.callbackPriority=0;if((o&3)===0||Fa(r,o)){if(a=o&-o,a===r.callbackPriority)return a;switch(u!==null&&Va(u),qs(o)){case 2:case 8:o=zs;break;case 32:o=Ua;break;case 268435456:o=Bs;break;default:o=Ua}return u=H0.bind(null,r),o=La(o,u),r.callbackPriority=a,r.callbackNode=o,a}return u!==null&&u!==null&&Va(u),r.callbackPriority=2,r.callbackNode=null,2}function H0(r,a){if(Xt!==0&&Xt!==5)return r.callbackNode=null,r.callbackPriority=0,null;var o=r.callbackNode;if(vf()&&r.callbackNode!==o)return null;var u=Be;return u=Fs(r,r===st?u:0,r.cancelPendingCommit!==null||r.timeoutHandle!==-1),u===0?null:(R0(r,u,a),q0(r,jn()),r.callbackNode!=null&&r.callbackNode===o?H0.bind(null,r):null)}function G0(r,a){if(vf())return null;R0(r,a,!0)}function i2(){m2(function(){(Ze&6)!==0?La(dl,r2):F0()})}function Qm(){return ys===0&&(ys=gl()),ys}function $0(r){return r==null||typeof r=="symbol"||typeof r=="boolean"?null:typeof r=="function"?r:Qs(""+r)}function K0(r,a){var o=a.ownerDocument.createElement("input");return o.name=a.name,o.value=a.value,r.id&&o.setAttribute("form",r.id),a.parentNode.insertBefore(o,a),r=new FormData(r),o.parentNode.removeChild(o),r}function a2(r,a,o,u,h){if(a==="submit"&&o&&o.stateNode===h){var p=$0((h[St]||null).action),E=u.submitter;E&&(a=(a=E[St]||null)?$0(a.formAction):E.getAttribute("formAction"),a!==null&&(p=a,E=null));var b=new Xs("action","action",null,u,h);r.push({event:b,listeners:[{instance:null,listener:function(){if(u.defaultPrevented){if(ys!==0){var C=E?K0(h,E):new FormData(h);pm(o,{pending:!0,data:C,method:h.method,action:p},null,C)}}else typeof p=="function"&&(b.preventDefault(),C=E?K0(h,E):new FormData(h),pm(o,{pending:!0,data:C,method:h.method,action:p},p,C))},currentTarget:h}]})}}for(var Xm=0;Xm<Pd.length;Xm++){var Wm=Pd[Xm],s2=Wm.toLowerCase(),o2=Wm[0].toUpperCase()+Wm.slice(1);rr(s2,"on"+o2)}rr(R_,"onAnimationEnd"),rr(I_,"onAnimationIteration"),rr(C_,"onAnimationStart"),rr("dblclick","onDoubleClick"),rr("focusin","onFocus"),rr("focusout","onBlur"),rr(wR,"onTransitionRun"),rr(SR,"onTransitionStart"),rr(RR,"onTransitionCancel"),rr(x_,"onTransitionEnd"),$r("onMouseEnter",["mouseout","mouseover"]),$r("onMouseLeave",["mouseout","mouseover"]),$r("onPointerEnter",["pointerout","pointerover"]),$r("onPointerLeave",["pointerout","pointerover"]),tr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),tr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),tr("onBeforeInput",["compositionend","keypress","textInput","paste"]),tr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),tr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var uu="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),l2=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(uu));function Y0(r,a){a=(a&4)!==0;for(var o=0;o<r.length;o++){var u=r[o],h=u.event;u=u.listeners;e:{var p=void 0;if(a)for(var E=u.length-1;0<=E;E--){var b=u[E],C=b.instance,q=b.currentTarget;if(b=b.listener,C!==p&&h.isPropagationStopped())break e;p=b,h.currentTarget=q;try{p(h)}catch(W){lf(W)}h.currentTarget=null,p=C}else for(E=0;E<u.length;E++){if(b=u[E],C=b.instance,q=b.currentTarget,b=b.listener,C!==p&&h.isPropagationStopped())break e;p=b,h.currentTarget=q;try{p(h)}catch(W){lf(W)}h.currentTarget=null,p=C}}}}function Me(r,a){var o=a[El];o===void 0&&(o=a[El]=new Set);var u=r+"__bubble";o.has(u)||(Q0(a,r,2,!1),o.add(u))}function Zm(r,a,o){var u=0;a&&(u|=4),Q0(o,r,u,a)}var bf="_reactListening"+Math.random().toString(36).slice(2);function Jm(r){if(!r[bf]){r[bf]=!0,Tl.forEach(function(o){o!=="selectionchange"&&(l2.has(o)||Zm(o,!1,r),Zm(o,!0,r))});var a=r.nodeType===9?r:r.ownerDocument;a===null||a[bf]||(a[bf]=!0,Zm("selectionchange",!1,a))}}function Q0(r,a,o,u){switch(vE(a)){case 2:var h=M2;break;case 8:h=L2;break;default:h=dp}o=h.bind(null,a,o,r),h=void 0,!qn||a!=="touchstart"&&a!=="touchmove"&&a!=="wheel"||(h=!0),u?h!==void 0?r.addEventListener(a,o,{capture:!0,passive:h}):r.addEventListener(a,o,!0):h!==void 0?r.addEventListener(a,o,{passive:h}):r.addEventListener(a,o,!1)}function ep(r,a,o,u,h){var p=u;if((a&1)===0&&(a&2)===0&&u!==null)e:for(;;){if(u===null)return;var E=u.tag;if(E===3||E===4){var b=u.stateNode.containerInfo;if(b===h)break;if(E===4)for(E=u.return;E!==null;){var C=E.tag;if((C===3||C===4)&&E.stateNode.containerInfo===h)return;E=E.return}for(;b!==null;){if(E=Gr(b),E===null)return;if(C=E.tag,C===5||C===6||C===26||C===27){u=p=E;continue e}b=b.parentNode}}u=u.return}Ac(function(){var q=p,W=Fn(o),ee=[];e:{var G=N_.get(r);if(G!==void 0){var K=Xs,Ae=r;switch(r){case"keypress":if(vr(o)===0)break e;case"keydown":case"keyup":K=no;break;case"focusin":Ae="focus",K=Js;break;case"focusout":Ae="blur",K=Js;break;case"beforeblur":case"afterblur":K=Js;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":K=Hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":K=Rd;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":K=Oc;break;case R_:case I_:case C_:K=eo;break;case x_:K=kc;break;case"scroll":case"scrollend":K=wc;break;case"wheel":K=ro;break;case"copy":case"cut":case"paste":K=to;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":K=kl;break;case"toggle":case"beforetoggle":K=Mc}var ve=(a&4)!==0,rt=!ve&&(r==="scroll"||r==="scrollend"),U=ve?G!==null?G+"Capture":null:G;ve=[];for(var M=q,B;M!==null;){var J=M;if(B=J.stateNode,J=J.tag,J!==5&&J!==26&&J!==27||B===null||U===null||(J=Xa(M,U),J!=null&&ve.push(cu(M,J,B))),rt)break;M=M.return}0<ve.length&&(G=new K(G,Ae,null,o,W),ee.push({event:G,listeners:ve}))}}if((a&7)===0){e:{if(G=r==="mouseover"||r==="pointerover",K=r==="mouseout"||r==="pointerout",G&&o!==Qr&&(Ae=o.relatedTarget||o.fromElement)&&(Gr(Ae)||Ae[zn]))break e;if((K||G)&&(G=W.window===W?W:(G=W.ownerDocument)?G.defaultView||G.parentWindow:window,K?(Ae=o.relatedTarget||o.toElement,K=q,Ae=Ae?Gr(Ae):null,Ae!==null&&(rt=l(Ae),ve=Ae.tag,Ae!==rt||ve!==5&&ve!==27&&ve!==6)&&(Ae=null)):(K=null,Ae=q),K!==Ae)){if(ve=Hn,J="onMouseLeave",U="onMouseEnter",M="mouse",(r==="pointerout"||r==="pointerover")&&(ve=kl,J="onPointerLeave",U="onPointerEnter",M="pointer"),rt=K==null?G:pr(K),B=Ae==null?G:pr(Ae),G=new ve(J,M+"leave",K,o,W),G.target=rt,G.relatedTarget=B,J=null,Gr(W)===q&&(ve=new ve(U,M+"enter",Ae,o,W),ve.target=B,ve.relatedTarget=rt,J=ve),rt=J,K&&Ae)t:{for(ve=K,U=Ae,M=0,B=ve;B;B=xo(B))M++;for(B=0,J=U;J;J=xo(J))B++;for(;0<M-B;)ve=xo(ve),M--;for(;0<B-M;)U=xo(U),B--;for(;M--;){if(ve===U||U!==null&&ve===U.alternate)break t;ve=xo(ve),U=xo(U)}ve=null}else ve=null;K!==null&&X0(ee,G,K,ve,!1),Ae!==null&&rt!==null&&X0(ee,rt,Ae,ve,!0)}}e:{if(G=q?pr(q):window,K=G.nodeName&&G.nodeName.toLowerCase(),K==="select"||K==="input"&&G.type==="file")var he=p_;else if(kt(G))if(g_)he=TR;else{he=vR;var ke=_R}else K=G.nodeName,!K||K.toLowerCase()!=="input"||G.type!=="checkbox"&&G.type!=="radio"?q&&Rl(q.elementType)&&(he=p_):he=ER;if(he&&(he=he(r,q))){ei(ee,he,o,W);break e}ke&&ke(r,G,q),r==="focusout"&&q&&G.type==="number"&&q.memoizedProps.value!=null&&Vi(G,"number",G.value)}switch(ke=q?pr(q):window,r){case"focusin":(kt(ke)||ke.contentEditable==="true")&&(io=ke,Od=q,Ll=null);break;case"focusout":Ll=Od=io=null;break;case"mousedown":Dd=!0;break;case"contextmenu":case"mouseup":case"dragend":Dd=!1,w_(ee,o,W);break;case"selectionchange":if(AR)break;case"keydown":case"keyup":w_(ee,o,W)}var me;if(br)e:{switch(r){case"compositionstart":var Te="onCompositionStart";break e;case"compositionend":Te="onCompositionEnd";break e;case"compositionupdate":Te="onCompositionUpdate";break e}Te=void 0}else je?Y(r,o)&&(Te="onCompositionEnd"):r==="keydown"&&o.keyCode===229&&(Te="onCompositionStart");Te&&(v&&o.locale!=="ko"&&(je||Te!=="onCompositionStart"?Te==="onCompositionEnd"&&je&&(me=Cl()):(_r=W,Ui="value"in _r?_r.value:_r.textContent,je=!0)),ke=Af(q,Te),0<ke.length&&(Te=new Ol(Te,r,null,o,W),ee.push({event:Te,listeners:ke}),me?Te.data=me:(me=le(o),me!==null&&(Te.data=me)))),(me=y?Dt(r,o):ze(r,o))&&(Te=Af(q,"onBeforeInput"),0<Te.length&&(ke=new Ol("onBeforeInput","beforeinput",null,o,W),ee.push({event:ke,listeners:Te}),ke.data=me)),a2(ee,r,q,o,W)}Y0(ee,a)})}function cu(r,a,o){return{instance:r,listener:a,currentTarget:o}}function Af(r,a){for(var o=a+"Capture",u=[];r!==null;){var h=r,p=h.stateNode;if(h=h.tag,h!==5&&h!==26&&h!==27||p===null||(h=Xa(r,o),h!=null&&u.unshift(cu(r,h,p)),h=Xa(r,a),h!=null&&u.push(cu(r,h,p))),r.tag===3)return u;r=r.return}return[]}function xo(r){if(r===null)return null;do r=r.return;while(r&&r.tag!==5&&r.tag!==27);return r||null}function X0(r,a,o,u,h){for(var p=a._reactName,E=[];o!==null&&o!==u;){var b=o,C=b.alternate,q=b.stateNode;if(b=b.tag,C!==null&&C===u)break;b!==5&&b!==26&&b!==27||q===null||(C=q,h?(q=Xa(o,p),q!=null&&E.unshift(cu(o,q,C))):h||(q=Xa(o,p),q!=null&&E.push(cu(o,q,C)))),o=o.return}E.length!==0&&r.push({event:a,listeners:E})}var u2=/\r\n?/g,c2=/\u0000|\uFFFD/g;function W0(r){return(typeof r=="string"?r:""+r).replace(u2,`
`).replace(c2,"")}function Z0(r,a){return a=W0(a),W0(r)===a}function wf(){}function nt(r,a,o,u,h,p){switch(o){case"children":typeof u=="string"?a==="body"||a==="textarea"&&u===""||Bn(r,u):(typeof u=="number"||typeof u=="bigint")&&a!=="body"&&Bn(r,""+u);break;case"className":gr(r,"class",u);break;case"tabIndex":gr(r,"tabindex",u);break;case"dir":case"role":case"viewBox":case"width":case"height":gr(r,o,u);break;case"style":Sl(r,u,p);break;case"data":if(a!=="object"){gr(r,"data",u);break}case"src":case"href":if(u===""&&(a!=="a"||o!=="href")){r.removeAttribute(o);break}if(u==null||typeof u=="function"||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Qs(""+u),r.setAttribute(o,u);break;case"action":case"formAction":if(typeof u=="function"){r.setAttribute(o,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof p=="function"&&(o==="formAction"?(a!=="input"&&nt(r,a,"name",h.name,h,null),nt(r,a,"formEncType",h.formEncType,h,null),nt(r,a,"formMethod",h.formMethod,h,null),nt(r,a,"formTarget",h.formTarget,h,null)):(nt(r,a,"encType",h.encType,h,null),nt(r,a,"method",h.method,h,null),nt(r,a,"target",h.target,h,null)));if(u==null||typeof u=="symbol"||typeof u=="boolean"){r.removeAttribute(o);break}u=Qs(""+u),r.setAttribute(o,u);break;case"onClick":u!=null&&(r.onclick=wf);break;case"onScroll":u!=null&&Me("scroll",r);break;case"onScrollEnd":u!=null&&Me("scrollend",r);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"multiple":r.multiple=u&&typeof u!="function"&&typeof u!="symbol";break;case"muted":r.muted=u&&typeof u!="function"&&typeof u!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(u==null||typeof u=="function"||typeof u=="boolean"||typeof u=="symbol"){r.removeAttribute("xlink:href");break}o=Qs(""+u),r.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",o);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""+u):r.removeAttribute(o);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":u&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,""):r.removeAttribute(o);break;case"capture":case"download":u===!0?r.setAttribute(o,""):u!==!1&&u!=null&&typeof u!="function"&&typeof u!="symbol"?r.setAttribute(o,u):r.removeAttribute(o);break;case"cols":case"rows":case"size":case"span":u!=null&&typeof u!="function"&&typeof u!="symbol"&&!isNaN(u)&&1<=u?r.setAttribute(o,u):r.removeAttribute(o);break;case"rowSpan":case"start":u==null||typeof u=="function"||typeof u=="symbol"||isNaN(u)?r.removeAttribute(o):r.setAttribute(o,u);break;case"popover":Me("beforetoggle",r),Me("toggle",r),Li(r,"popover",u);break;case"xlinkActuate":Kt(r,"http://www.w3.org/1999/xlink","xlink:actuate",u);break;case"xlinkArcrole":Kt(r,"http://www.w3.org/1999/xlink","xlink:arcrole",u);break;case"xlinkRole":Kt(r,"http://www.w3.org/1999/xlink","xlink:role",u);break;case"xlinkShow":Kt(r,"http://www.w3.org/1999/xlink","xlink:show",u);break;case"xlinkTitle":Kt(r,"http://www.w3.org/1999/xlink","xlink:title",u);break;case"xlinkType":Kt(r,"http://www.w3.org/1999/xlink","xlink:type",u);break;case"xmlBase":Kt(r,"http://www.w3.org/XML/1998/namespace","xml:base",u);break;case"xmlLang":Kt(r,"http://www.w3.org/XML/1998/namespace","xml:lang",u);break;case"xmlSpace":Kt(r,"http://www.w3.org/XML/1998/namespace","xml:space",u);break;case"is":Li(r,"is",u);break;case"innerText":case"textContent":break;default:(!(2<o.length)||o[0]!=="o"&&o[0]!=="O"||o[1]!=="n"&&o[1]!=="N")&&(o=wd.get(o)||o,Li(r,o,u))}}function tp(r,a,o,u,h,p){switch(o){case"style":Sl(r,u,p);break;case"dangerouslySetInnerHTML":if(u!=null){if(typeof u!="object"||!("__html"in u))throw Error(i(61));if(o=u.__html,o!=null){if(h.children!=null)throw Error(i(60));r.innerHTML=o}}break;case"children":typeof u=="string"?Bn(r,u):(typeof u=="number"||typeof u=="bigint")&&Bn(r,""+u);break;case"onScroll":u!=null&&Me("scroll",r);break;case"onScrollEnd":u!=null&&Me("scrollend",r);break;case"onClick":u!=null&&(r.onclick=wf);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Hs.hasOwnProperty(o))e:{if(o[0]==="o"&&o[1]==="n"&&(h=o.endsWith("Capture"),a=o.slice(2,h?o.length-7:void 0),p=r[St]||null,p=p!=null?p[o]:null,typeof p=="function"&&r.removeEventListener(a,p,h),typeof u=="function")){typeof p!="function"&&p!==null&&(o in r?r[o]=null:r.hasAttribute(o)&&r.removeAttribute(o)),r.addEventListener(a,u,h);break e}o in r?r[o]=u:u===!0?r.setAttribute(o,""):Li(r,o,u)}}}function Wt(r,a,o){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":Me("error",r),Me("load",r);var u=!1,h=!1,p;for(p in o)if(o.hasOwnProperty(p)){var E=o[p];if(E!=null)switch(p){case"src":u=!0;break;case"srcSet":h=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:nt(r,a,p,E,o,null)}}h&&nt(r,a,"srcSet",o.srcSet,o,null),u&&nt(r,a,"src",o.src,o,null);return;case"input":Me("invalid",r);var b=p=E=h=null,C=null,q=null;for(u in o)if(o.hasOwnProperty(u)){var W=o[u];if(W!=null)switch(u){case"name":h=W;break;case"type":E=W;break;case"checked":C=W;break;case"defaultChecked":q=W;break;case"value":p=W;break;case"defaultValue":b=W;break;case"children":case"dangerouslySetInnerHTML":if(W!=null)throw Error(i(137,a));break;default:nt(r,a,u,W,o,null)}}Ka(r,p,b,C,q,E,h,!1),Ys(r);return;case"select":Me("invalid",r),u=E=p=null;for(h in o)if(o.hasOwnProperty(h)&&(b=o[h],b!=null))switch(h){case"value":p=b;break;case"defaultValue":E=b;break;case"multiple":u=b;default:nt(r,a,h,b,o,null)}a=p,o=E,r.multiple=!!u,a!=null?Yr(r,!!u,a,!1):o!=null&&Yr(r,!!u,o,!0);return;case"textarea":Me("invalid",r),p=h=u=null;for(E in o)if(o.hasOwnProperty(E)&&(b=o[E],b!=null))switch(E){case"value":u=b;break;case"defaultValue":h=b;break;case"children":p=b;break;case"dangerouslySetInnerHTML":if(b!=null)throw Error(i(91));break;default:nt(r,a,E,b,o,null)}Ya(r,u,h,p),Ys(r);return;case"option":for(C in o)if(o.hasOwnProperty(C)&&(u=o[C],u!=null))switch(C){case"selected":r.selected=u&&typeof u!="function"&&typeof u!="symbol";break;default:nt(r,a,C,u,o,null)}return;case"dialog":Me("beforetoggle",r),Me("toggle",r),Me("cancel",r),Me("close",r);break;case"iframe":case"object":Me("load",r);break;case"video":case"audio":for(u=0;u<uu.length;u++)Me(uu[u],r);break;case"image":Me("error",r),Me("load",r);break;case"details":Me("toggle",r);break;case"embed":case"source":case"link":Me("error",r),Me("load",r);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(q in o)if(o.hasOwnProperty(q)&&(u=o[q],u!=null))switch(q){case"children":case"dangerouslySetInnerHTML":throw Error(i(137,a));default:nt(r,a,q,u,o,null)}return;default:if(Rl(a)){for(W in o)o.hasOwnProperty(W)&&(u=o[W],u!==void 0&&tp(r,a,W,u,o,void 0));return}}for(b in o)o.hasOwnProperty(b)&&(u=o[b],u!=null&&nt(r,a,b,u,o,null))}function f2(r,a,o,u){switch(a){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var h=null,p=null,E=null,b=null,C=null,q=null,W=null;for(K in o){var ee=o[K];if(o.hasOwnProperty(K)&&ee!=null)switch(K){case"checked":break;case"value":break;case"defaultValue":C=ee;default:u.hasOwnProperty(K)||nt(r,a,K,null,u,ee)}}for(var G in u){var K=u[G];if(ee=o[G],u.hasOwnProperty(G)&&(K!=null||ee!=null))switch(G){case"type":p=K;break;case"name":h=K;break;case"checked":q=K;break;case"defaultChecked":W=K;break;case"value":E=K;break;case"defaultValue":b=K;break;case"children":case"dangerouslySetInnerHTML":if(K!=null)throw Error(i(137,a));break;default:K!==ee&&nt(r,a,G,K,u,ee)}}Sn(r,E,b,C,q,W,p,h);return;case"select":K=E=b=G=null;for(p in o)if(C=o[p],o.hasOwnProperty(p)&&C!=null)switch(p){case"value":break;case"multiple":K=C;default:u.hasOwnProperty(p)||nt(r,a,p,null,u,C)}for(h in u)if(p=u[h],C=o[h],u.hasOwnProperty(h)&&(p!=null||C!=null))switch(h){case"value":G=p;break;case"defaultValue":b=p;break;case"multiple":E=p;default:p!==C&&nt(r,a,h,p,u,C)}a=b,o=E,u=K,G!=null?Yr(r,!!o,G,!1):!!u!=!!o&&(a!=null?Yr(r,!!o,a,!0):Yr(r,!!o,o?[]:"",!1));return;case"textarea":K=G=null;for(b in o)if(h=o[b],o.hasOwnProperty(b)&&h!=null&&!u.hasOwnProperty(b))switch(b){case"value":break;case"children":break;default:nt(r,a,b,null,u,h)}for(E in u)if(h=u[E],p=o[E],u.hasOwnProperty(E)&&(h!=null||p!=null))switch(E){case"value":G=h;break;case"defaultValue":K=h;break;case"children":break;case"dangerouslySetInnerHTML":if(h!=null)throw Error(i(91));break;default:h!==p&&nt(r,a,E,h,u,p)}et(r,G,K);return;case"option":for(var Ae in o)if(G=o[Ae],o.hasOwnProperty(Ae)&&G!=null&&!u.hasOwnProperty(Ae))switch(Ae){case"selected":r.selected=!1;break;default:nt(r,a,Ae,null,u,G)}for(C in u)if(G=u[C],K=o[C],u.hasOwnProperty(C)&&G!==K&&(G!=null||K!=null))switch(C){case"selected":r.selected=G&&typeof G!="function"&&typeof G!="symbol";break;default:nt(r,a,C,G,u,K)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var ve in o)G=o[ve],o.hasOwnProperty(ve)&&G!=null&&!u.hasOwnProperty(ve)&&nt(r,a,ve,null,u,G);for(q in u)if(G=u[q],K=o[q],u.hasOwnProperty(q)&&G!==K&&(G!=null||K!=null))switch(q){case"children":case"dangerouslySetInnerHTML":if(G!=null)throw Error(i(137,a));break;default:nt(r,a,q,G,u,K)}return;default:if(Rl(a)){for(var rt in o)G=o[rt],o.hasOwnProperty(rt)&&G!==void 0&&!u.hasOwnProperty(rt)&&tp(r,a,rt,void 0,u,G);for(W in u)G=u[W],K=o[W],!u.hasOwnProperty(W)||G===K||G===void 0&&K===void 0||tp(r,a,W,G,u,K);return}}for(var U in o)G=o[U],o.hasOwnProperty(U)&&G!=null&&!u.hasOwnProperty(U)&&nt(r,a,U,null,u,G);for(ee in u)G=u[ee],K=o[ee],!u.hasOwnProperty(ee)||G===K||G==null&&K==null||nt(r,a,ee,G,u,K)}var np=null,rp=null;function Sf(r){return r.nodeType===9?r:r.ownerDocument}function J0(r){switch(r){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function eE(r,a){if(r===0)switch(a){case"svg":return 1;case"math":return 2;default:return 0}return r===1&&a==="foreignObject"?0:r}function ip(r,a){return r==="textarea"||r==="noscript"||typeof a.children=="string"||typeof a.children=="number"||typeof a.children=="bigint"||typeof a.dangerouslySetInnerHTML=="object"&&a.dangerouslySetInnerHTML!==null&&a.dangerouslySetInnerHTML.__html!=null}var ap=null;function h2(){var r=window.event;return r&&r.type==="popstate"?r===ap?!1:(ap=r,!0):(ap=null,!1)}var tE=typeof setTimeout=="function"?setTimeout:void 0,d2=typeof clearTimeout=="function"?clearTimeout:void 0,nE=typeof Promise=="function"?Promise:void 0,m2=typeof queueMicrotask=="function"?queueMicrotask:typeof nE<"u"?function(r){return nE.resolve(null).then(r).catch(p2)}:tE;function p2(r){setTimeout(function(){throw r})}function ea(r){return r==="head"}function rE(r,a){var o=a,u=0,h=0;do{var p=o.nextSibling;if(r.removeChild(o),p&&p.nodeType===8)if(o=p.data,o==="/$"){if(0<u&&8>u){o=u;var E=r.ownerDocument;if(o&1&&fu(E.documentElement),o&2&&fu(E.body),o&4)for(o=E.head,fu(o),E=o.firstChild;E;){var b=E.nextSibling,C=E.nodeName;E[qa]||C==="SCRIPT"||C==="STYLE"||C==="LINK"&&E.rel.toLowerCase()==="stylesheet"||o.removeChild(E),E=b}}if(h===0){r.removeChild(p),vu(a);return}h--}else o==="$"||o==="$?"||o==="$!"?h++:u=o.charCodeAt(0)-48;else u=0;o=p}while(o);vu(a)}function sp(r){var a=r.firstChild;for(a&&a.nodeType===10&&(a=a.nextSibling);a;){var o=a;switch(a=a.nextSibling,o.nodeName){case"HTML":case"HEAD":case"BODY":sp(o),Mi(o);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(o.rel.toLowerCase()==="stylesheet")continue}r.removeChild(o)}}function g2(r,a,o,u){for(;r.nodeType===1;){var h=o;if(r.nodeName.toLowerCase()!==a.toLowerCase()){if(!u&&(r.nodeName!=="INPUT"||r.type!=="hidden"))break}else if(u){if(!r[qa])switch(a){case"meta":if(!r.hasAttribute("itemprop"))break;return r;case"link":if(p=r.getAttribute("rel"),p==="stylesheet"&&r.hasAttribute("data-precedence"))break;if(p!==h.rel||r.getAttribute("href")!==(h.href==null||h.href===""?null:h.href)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin)||r.getAttribute("title")!==(h.title==null?null:h.title))break;return r;case"style":if(r.hasAttribute("data-precedence"))break;return r;case"script":if(p=r.getAttribute("src"),(p!==(h.src==null?null:h.src)||r.getAttribute("type")!==(h.type==null?null:h.type)||r.getAttribute("crossorigin")!==(h.crossOrigin==null?null:h.crossOrigin))&&p&&r.hasAttribute("async")&&!r.hasAttribute("itemprop"))break;return r;default:return r}}else if(a==="input"&&r.type==="hidden"){var p=h.name==null?null:""+h.name;if(h.type==="hidden"&&r.getAttribute("name")===p)return r}else return r;if(r=ar(r.nextSibling),r===null)break}return null}function y2(r,a,o){if(a==="")return null;for(;r.nodeType!==3;)if((r.nodeType!==1||r.nodeName!=="INPUT"||r.type!=="hidden")&&!o||(r=ar(r.nextSibling),r===null))return null;return r}function op(r){return r.data==="$!"||r.data==="$?"&&r.ownerDocument.readyState==="complete"}function _2(r,a){var o=r.ownerDocument;if(r.data!=="$?"||o.readyState==="complete")a();else{var u=function(){a(),o.removeEventListener("DOMContentLoaded",u)};o.addEventListener("DOMContentLoaded",u),r._reactRetry=u}}function ar(r){for(;r!=null;r=r.nextSibling){var a=r.nodeType;if(a===1||a===3)break;if(a===8){if(a=r.data,a==="$"||a==="$!"||a==="$?"||a==="F!"||a==="F")break;if(a==="/$")return null}}return r}var lp=null;function iE(r){r=r.previousSibling;for(var a=0;r;){if(r.nodeType===8){var o=r.data;if(o==="$"||o==="$!"||o==="$?"){if(a===0)return r;a--}else o==="/$"&&a++}r=r.previousSibling}return null}function aE(r,a,o){switch(a=Sf(o),r){case"html":if(r=a.documentElement,!r)throw Error(i(452));return r;case"head":if(r=a.head,!r)throw Error(i(453));return r;case"body":if(r=a.body,!r)throw Error(i(454));return r;default:throw Error(i(451))}}function fu(r){for(var a=r.attributes;a.length;)r.removeAttributeNode(a[0]);Mi(r)}var Wn=new Map,sE=new Set;function Rf(r){return typeof r.getRootNode=="function"?r.getRootNode():r.nodeType===9?r:r.ownerDocument}var di=ue.d;ue.d={f:v2,r:E2,D:T2,C:b2,L:A2,m:w2,X:R2,S:S2,M:I2};function v2(){var r=di.f(),a=yf();return r||a}function E2(r){var a=mr(r);a!==null&&a.tag===5&&a.type==="form"?Rv(a):di.r(r)}var No=typeof document>"u"?null:document;function oE(r,a,o){var u=No;if(u&&typeof a=="string"&&a){var h=Rt(a);h='link[rel="'+r+'"][href="'+h+'"]',typeof o=="string"&&(h+='[crossorigin="'+o+'"]'),sE.has(h)||(sE.add(h),r={rel:r,crossOrigin:o,href:a},u.querySelector(h)===null&&(a=u.createElement("link"),Wt(a,"link",r),Tt(a),u.head.appendChild(a)))}}function T2(r){di.D(r),oE("dns-prefetch",r,null)}function b2(r,a){di.C(r,a),oE("preconnect",r,a)}function A2(r,a,o){di.L(r,a,o);var u=No;if(u&&r&&a){var h='link[rel="preload"][as="'+Rt(a)+'"]';a==="image"&&o&&o.imageSrcSet?(h+='[imagesrcset="'+Rt(o.imageSrcSet)+'"]',typeof o.imageSizes=="string"&&(h+='[imagesizes="'+Rt(o.imageSizes)+'"]')):h+='[href="'+Rt(r)+'"]';var p=h;switch(a){case"style":p=Oo(r);break;case"script":p=Do(r)}Wn.has(p)||(r=_({rel:"preload",href:a==="image"&&o&&o.imageSrcSet?void 0:r,as:a},o),Wn.set(p,r),u.querySelector(h)!==null||a==="style"&&u.querySelector(hu(p))||a==="script"&&u.querySelector(du(p))||(a=u.createElement("link"),Wt(a,"link",r),Tt(a),u.head.appendChild(a)))}}function w2(r,a){di.m(r,a);var o=No;if(o&&r){var u=a&&typeof a.as=="string"?a.as:"script",h='link[rel="modulepreload"][as="'+Rt(u)+'"][href="'+Rt(r)+'"]',p=h;switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":p=Do(r)}if(!Wn.has(p)&&(r=_({rel:"modulepreload",href:r},a),Wn.set(p,r),o.querySelector(h)===null)){switch(u){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(o.querySelector(du(p)))return}u=o.createElement("link"),Wt(u,"link",r),Tt(u),o.head.appendChild(u)}}}function S2(r,a,o){di.S(r,a,o);var u=No;if(u&&r){var h=hn(u).hoistableStyles,p=Oo(r);a=a||"default";var E=h.get(p);if(!E){var b={loading:0,preload:null};if(E=u.querySelector(hu(p)))b.loading=5;else{r=_({rel:"stylesheet",href:r,"data-precedence":a},o),(o=Wn.get(p))&&up(r,o);var C=E=u.createElement("link");Tt(C),Wt(C,"link",r),C._p=new Promise(function(q,W){C.onload=q,C.onerror=W}),C.addEventListener("load",function(){b.loading|=1}),C.addEventListener("error",function(){b.loading|=2}),b.loading|=4,If(E,a,u)}E={type:"stylesheet",instance:E,count:1,state:b},h.set(p,E)}}}function R2(r,a){di.X(r,a);var o=No;if(o&&r){var u=hn(o).hoistableScripts,h=Do(r),p=u.get(h);p||(p=o.querySelector(du(h)),p||(r=_({src:r,async:!0},a),(a=Wn.get(h))&&cp(r,a),p=o.createElement("script"),Tt(p),Wt(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(h,p))}}function I2(r,a){di.M(r,a);var o=No;if(o&&r){var u=hn(o).hoistableScripts,h=Do(r),p=u.get(h);p||(p=o.querySelector(du(h)),p||(r=_({src:r,async:!0,type:"module"},a),(a=Wn.get(h))&&cp(r,a),p=o.createElement("script"),Tt(p),Wt(p,"link",r),o.head.appendChild(p)),p={type:"script",instance:p,count:1,state:null},u.set(h,p))}}function lE(r,a,o,u){var h=(h=Re.current)?Rf(h):null;if(!h)throw Error(i(446));switch(r){case"meta":case"title":return null;case"style":return typeof o.precedence=="string"&&typeof o.href=="string"?(a=Oo(o.href),o=hn(h).hoistableStyles,u=o.get(a),u||(u={type:"style",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};case"link":if(o.rel==="stylesheet"&&typeof o.href=="string"&&typeof o.precedence=="string"){r=Oo(o.href);var p=hn(h).hoistableStyles,E=p.get(r);if(E||(h=h.ownerDocument||h,E={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},p.set(r,E),(p=h.querySelector(hu(r)))&&!p._p&&(E.instance=p,E.state.loading=5),Wn.has(r)||(o={rel:"preload",as:"style",href:o.href,crossOrigin:o.crossOrigin,integrity:o.integrity,media:o.media,hrefLang:o.hrefLang,referrerPolicy:o.referrerPolicy},Wn.set(r,o),p||C2(h,r,o,E.state))),a&&u===null)throw Error(i(528,""));return E}if(a&&u!==null)throw Error(i(529,""));return null;case"script":return a=o.async,o=o.src,typeof o=="string"&&a&&typeof a!="function"&&typeof a!="symbol"?(a=Do(o),o=hn(h).hoistableScripts,u=o.get(a),u||(u={type:"script",instance:null,count:0,state:null},o.set(a,u)),u):{type:"void",instance:null,count:0,state:null};default:throw Error(i(444,r))}}function Oo(r){return'href="'+Rt(r)+'"'}function hu(r){return'link[rel="stylesheet"]['+r+"]"}function uE(r){return _({},r,{"data-precedence":r.precedence,precedence:null})}function C2(r,a,o,u){r.querySelector('link[rel="preload"][as="style"]['+a+"]")?u.loading=1:(a=r.createElement("link"),u.preload=a,a.addEventListener("load",function(){return u.loading|=1}),a.addEventListener("error",function(){return u.loading|=2}),Wt(a,"link",o),Tt(a),r.head.appendChild(a))}function Do(r){return'[src="'+Rt(r)+'"]'}function du(r){return"script[async]"+r}function cE(r,a,o){if(a.count++,a.instance===null)switch(a.type){case"style":var u=r.querySelector('style[data-href~="'+Rt(o.href)+'"]');if(u)return a.instance=u,Tt(u),u;var h=_({},o,{"data-href":o.href,"data-precedence":o.precedence,href:null,precedence:null});return u=(r.ownerDocument||r).createElement("style"),Tt(u),Wt(u,"style",h),If(u,o.precedence,r),a.instance=u;case"stylesheet":h=Oo(o.href);var p=r.querySelector(hu(h));if(p)return a.state.loading|=4,a.instance=p,Tt(p),p;u=uE(o),(h=Wn.get(h))&&up(u,h),p=(r.ownerDocument||r).createElement("link"),Tt(p);var E=p;return E._p=new Promise(function(b,C){E.onload=b,E.onerror=C}),Wt(p,"link",u),a.state.loading|=4,If(p,o.precedence,r),a.instance=p;case"script":return p=Do(o.src),(h=r.querySelector(du(p)))?(a.instance=h,Tt(h),h):(u=o,(h=Wn.get(p))&&(u=_({},o),cp(u,h)),r=r.ownerDocument||r,h=r.createElement("script"),Tt(h),Wt(h,"link",u),r.head.appendChild(h),a.instance=h);case"void":return null;default:throw Error(i(443,a.type))}else a.type==="stylesheet"&&(a.state.loading&4)===0&&(u=a.instance,a.state.loading|=4,If(u,o.precedence,r));return a.instance}function If(r,a,o){for(var u=o.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),h=u.length?u[u.length-1]:null,p=h,E=0;E<u.length;E++){var b=u[E];if(b.dataset.precedence===a)p=b;else if(p!==h)break}p?p.parentNode.insertBefore(r,p.nextSibling):(a=o.nodeType===9?o.head:o,a.insertBefore(r,a.firstChild))}function up(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.title==null&&(r.title=a.title)}function cp(r,a){r.crossOrigin==null&&(r.crossOrigin=a.crossOrigin),r.referrerPolicy==null&&(r.referrerPolicy=a.referrerPolicy),r.integrity==null&&(r.integrity=a.integrity)}var Cf=null;function fE(r,a,o){if(Cf===null){var u=new Map,h=Cf=new Map;h.set(o,u)}else h=Cf,u=h.get(o),u||(u=new Map,h.set(o,u));if(u.has(r))return u;for(u.set(r,null),o=o.getElementsByTagName(r),h=0;h<o.length;h++){var p=o[h];if(!(p[qa]||p[Ot]||r==="link"&&p.getAttribute("rel")==="stylesheet")&&p.namespaceURI!=="http://www.w3.org/2000/svg"){var E=p.getAttribute(a)||"";E=r+E;var b=u.get(E);b?b.push(p):u.set(E,[p])}}return u}function hE(r,a,o){r=r.ownerDocument||r,r.head.insertBefore(o,a==="title"?r.querySelector("head > title"):null)}function x2(r,a,o){if(o===1||a.itemProp!=null)return!1;switch(r){case"meta":case"title":return!0;case"style":if(typeof a.precedence!="string"||typeof a.href!="string"||a.href==="")break;return!0;case"link":if(typeof a.rel!="string"||typeof a.href!="string"||a.href===""||a.onLoad||a.onError)break;switch(a.rel){case"stylesheet":return r=a.disabled,typeof a.precedence=="string"&&r==null;default:return!0}case"script":if(a.async&&typeof a.async!="function"&&typeof a.async!="symbol"&&!a.onLoad&&!a.onError&&a.src&&typeof a.src=="string")return!0}return!1}function dE(r){return!(r.type==="stylesheet"&&(r.state.loading&3)===0)}var mu=null;function N2(){}function O2(r,a,o){if(mu===null)throw Error(i(475));var u=mu;if(a.type==="stylesheet"&&(typeof o.media!="string"||matchMedia(o.media).matches!==!1)&&(a.state.loading&4)===0){if(a.instance===null){var h=Oo(o.href),p=r.querySelector(hu(h));if(p){r=p._p,r!==null&&typeof r=="object"&&typeof r.then=="function"&&(u.count++,u=xf.bind(u),r.then(u,u)),a.state.loading|=4,a.instance=p,Tt(p);return}p=r.ownerDocument||r,o=uE(o),(h=Wn.get(h))&&up(o,h),p=p.createElement("link"),Tt(p);var E=p;E._p=new Promise(function(b,C){E.onload=b,E.onerror=C}),Wt(p,"link",o),a.instance=p}u.stylesheets===null&&(u.stylesheets=new Map),u.stylesheets.set(a,r),(r=a.state.preload)&&(a.state.loading&3)===0&&(u.count++,a=xf.bind(u),r.addEventListener("load",a),r.addEventListener("error",a))}}function D2(){if(mu===null)throw Error(i(475));var r=mu;return r.stylesheets&&r.count===0&&fp(r,r.stylesheets),0<r.count?function(a){var o=setTimeout(function(){if(r.stylesheets&&fp(r,r.stylesheets),r.unsuspend){var u=r.unsuspend;r.unsuspend=null,u()}},6e4);return r.unsuspend=a,function(){r.unsuspend=null,clearTimeout(o)}}:null}function xf(){if(this.count--,this.count===0){if(this.stylesheets)fp(this,this.stylesheets);else if(this.unsuspend){var r=this.unsuspend;this.unsuspend=null,r()}}}var Nf=null;function fp(r,a){r.stylesheets=null,r.unsuspend!==null&&(r.count++,Nf=new Map,a.forEach(k2,r),Nf=null,xf.call(r))}function k2(r,a){if(!(a.state.loading&4)){var o=Nf.get(r);if(o)var u=o.get(null);else{o=new Map,Nf.set(r,o);for(var h=r.querySelectorAll("link[data-precedence],style[data-precedence]"),p=0;p<h.length;p++){var E=h[p];(E.nodeName==="LINK"||E.getAttribute("media")!=="not all")&&(o.set(E.dataset.precedence,E),u=E)}u&&o.set(null,u)}h=a.instance,E=h.getAttribute("data-precedence"),p=o.get(E)||u,p===u&&o.set(null,h),o.set(E,h),this.count++,u=xf.bind(this),h.addEventListener("load",u),h.addEventListener("error",u),p?p.parentNode.insertBefore(h,p.nextSibling):(r=r.nodeType===9?r.head:r,r.insertBefore(h,r.firstChild)),a.state.loading|=4}}var pu={$$typeof:Q,Provider:null,Consumer:null,_currentValue:pe,_currentValue2:pe,_threadCount:0};function P2(r,a,o,u,h,p,E,b){this.tag=1,this.containerInfo=r,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=qr(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=qr(0),this.hiddenUpdates=qr(null),this.identifierPrefix=u,this.onUncaughtError=h,this.onCaughtError=p,this.onRecoverableError=E,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=b,this.incompleteTransitions=new Map}function mE(r,a,o,u,h,p,E,b,C,q,W,ee){return r=new P2(r,a,o,E,b,C,q,ee),a=1,p===!0&&(a|=24),p=In(3,null,null,a),r.current=p,p.stateNode=r,a=$d(),a.refCount++,r.pooledCache=a,a.refCount++,p.memoizedState={element:u,isDehydrated:o,cache:a},Xd(p),r}function pE(r){return r?(r=lo,r):lo}function gE(r,a,o,u,h,p){h=pE(h),u.context===null?u.context=h:u.pendingContext=h,u=Bi(a),u.payload={element:o},p=p===void 0?null:p,p!==null&&(u.callback=p),o=Fi(r,u,a),o!==null&&(Dn(o,r,a),Gl(o,r,a))}function yE(r,a){if(r=r.memoizedState,r!==null&&r.dehydrated!==null){var o=r.retryLane;r.retryLane=o!==0&&o<a?o:a}}function hp(r,a){yE(r,a),(r=r.alternate)&&yE(r,a)}function _E(r){if(r.tag===13){var a=oo(r,67108864);a!==null&&Dn(a,r,67108864),hp(r,67108864)}}var Of=!0;function M2(r,a,o,u){var h=X.T;X.T=null;var p=ue.p;try{ue.p=2,dp(r,a,o,u)}finally{ue.p=p,X.T=h}}function L2(r,a,o,u){var h=X.T;X.T=null;var p=ue.p;try{ue.p=8,dp(r,a,o,u)}finally{ue.p=p,X.T=h}}function dp(r,a,o,u){if(Of){var h=mp(u);if(h===null)ep(r,a,u,Df,o),EE(r,u);else if(U2(h,r,a,o,u))u.stopPropagation();else if(EE(r,u),a&4&&-1<V2.indexOf(r)){for(;h!==null;){var p=mr(h);if(p!==null)switch(p.tag){case 3:if(p=p.stateNode,p.current.memoizedState.isDehydrated){var E=er(p.pendingLanes);if(E!==0){var b=p;for(b.pendingLanes|=2,b.entangledLanes|=2;E;){var C=1<<31-nn(E);b.entanglements[1]|=C,E&=~C}Cr(p),(Ze&6)===0&&(pf=jn()+500,lu(0))}}break;case 13:b=oo(p,2),b!==null&&Dn(b,p,2),yf(),hp(p,2)}if(p=mp(u),p===null&&ep(r,a,u,Df,o),p===h)break;h=p}h!==null&&u.stopPropagation()}else ep(r,a,u,null,o)}}function mp(r){return r=Fn(r),pp(r)}var Df=null;function pp(r){if(Df=null,r=Gr(r),r!==null){var a=l(r);if(a===null)r=null;else{var o=a.tag;if(o===13){if(r=c(a),r!==null)return r;r=null}else if(o===3){if(a.stateNode.current.memoizedState.isDehydrated)return a.tag===3?a.stateNode.containerInfo:null;r=null}else a!==r&&(r=null)}}return Df=r,null}function vE(r){switch(r){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(_d()){case dl:return 2;case zs:return 8;case Ua:case vd:return 32;case Bs:return 268435456;default:return 32}default:return 32}}var gp=!1,ta=null,na=null,ra=null,gu=new Map,yu=new Map,ia=[],V2="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function EE(r,a){switch(r){case"focusin":case"focusout":ta=null;break;case"dragenter":case"dragleave":na=null;break;case"mouseover":case"mouseout":ra=null;break;case"pointerover":case"pointerout":gu.delete(a.pointerId);break;case"gotpointercapture":case"lostpointercapture":yu.delete(a.pointerId)}}function _u(r,a,o,u,h,p){return r===null||r.nativeEvent!==p?(r={blockedOn:a,domEventName:o,eventSystemFlags:u,nativeEvent:p,targetContainers:[h]},a!==null&&(a=mr(a),a!==null&&_E(a)),r):(r.eventSystemFlags|=u,a=r.targetContainers,h!==null&&a.indexOf(h)===-1&&a.push(h),r)}function U2(r,a,o,u,h){switch(a){case"focusin":return ta=_u(ta,r,a,o,u,h),!0;case"dragenter":return na=_u(na,r,a,o,u,h),!0;case"mouseover":return ra=_u(ra,r,a,o,u,h),!0;case"pointerover":var p=h.pointerId;return gu.set(p,_u(gu.get(p)||null,r,a,o,u,h)),!0;case"gotpointercapture":return p=h.pointerId,yu.set(p,_u(yu.get(p)||null,r,a,o,u,h)),!0}return!1}function TE(r){var a=Gr(r.target);if(a!==null){var o=l(a);if(o!==null){if(a=o.tag,a===13){if(a=c(o),a!==null){r.blockedOn=a,gc(r.priority,function(){if(o.tag===13){var u=On();u=Di(u);var h=oo(o,u);h!==null&&Dn(h,o,u),hp(o,u)}});return}}else if(a===3&&o.stateNode.current.memoizedState.isDehydrated){r.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}r.blockedOn=null}function kf(r){if(r.blockedOn!==null)return!1;for(var a=r.targetContainers;0<a.length;){var o=mp(r.nativeEvent);if(o===null){o=r.nativeEvent;var u=new o.constructor(o.type,o);Qr=u,o.target.dispatchEvent(u),Qr=null}else return a=mr(o),a!==null&&_E(a),r.blockedOn=o,!1;a.shift()}return!0}function bE(r,a,o){kf(r)&&o.delete(a)}function j2(){gp=!1,ta!==null&&kf(ta)&&(ta=null),na!==null&&kf(na)&&(na=null),ra!==null&&kf(ra)&&(ra=null),gu.forEach(bE),yu.forEach(bE)}function Pf(r,a){r.blockedOn===a&&(r.blockedOn=null,gp||(gp=!0,n.unstable_scheduleCallback(n.unstable_NormalPriority,j2)))}var Mf=null;function AE(r){Mf!==r&&(Mf=r,n.unstable_scheduleCallback(n.unstable_NormalPriority,function(){Mf===r&&(Mf=null);for(var a=0;a<r.length;a+=3){var o=r[a],u=r[a+1],h=r[a+2];if(typeof u!="function"){if(pp(u||o)===null)continue;break}var p=mr(o);p!==null&&(r.splice(a,3),a-=3,pm(p,{pending:!0,data:h,method:o.method,action:u},u,h))}}))}function vu(r){function a(C){return Pf(C,r)}ta!==null&&Pf(ta,r),na!==null&&Pf(na,r),ra!==null&&Pf(ra,r),gu.forEach(a),yu.forEach(a);for(var o=0;o<ia.length;o++){var u=ia[o];u.blockedOn===r&&(u.blockedOn=null)}for(;0<ia.length&&(o=ia[0],o.blockedOn===null);)TE(o),o.blockedOn===null&&ia.shift();if(o=(r.ownerDocument||r).$$reactFormReplay,o!=null)for(u=0;u<o.length;u+=3){var h=o[u],p=o[u+1],E=h[St]||null;if(typeof p=="function")E||AE(o);else if(E){var b=null;if(p&&p.hasAttribute("formAction")){if(h=p,E=p[St]||null)b=E.formAction;else if(pp(h)!==null)continue}else b=E.action;typeof b=="function"?o[u+1]=b:(o.splice(u,3),u-=3),AE(o)}}}function yp(r){this._internalRoot=r}Lf.prototype.render=yp.prototype.render=function(r){var a=this._internalRoot;if(a===null)throw Error(i(409));var o=a.current,u=On();gE(o,u,r,a,null,null)},Lf.prototype.unmount=yp.prototype.unmount=function(){var r=this._internalRoot;if(r!==null){this._internalRoot=null;var a=r.containerInfo;gE(r.current,2,null,r,null,null),yf(),a[zn]=null}};function Lf(r){this._internalRoot=r}Lf.prototype.unstable_scheduleHydration=function(r){if(r){var a=ki();r={blockedOn:null,target:r,priority:a};for(var o=0;o<ia.length&&a!==0&&a<ia[o].priority;o++);ia.splice(o,0,r),o===0&&TE(r)}};var wE=e.version;if(wE!=="19.1.0")throw Error(i(527,wE,"19.1.0"));ue.findDOMNode=function(r){var a=r._reactInternals;if(a===void 0)throw typeof r.render=="function"?Error(i(188)):(r=Object.keys(r).join(","),Error(i(268,r)));return r=m(a),r=r!==null?g(r):null,r=r===null?null:r.stateNode,r};var z2={bundleType:0,version:"19.1.0",rendererPackageName:"react-dom",currentDispatcherRef:X,reconcilerVersion:"19.1.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vf=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vf.isDisabled&&Vf.supportsFiber)try{pt=Vf.inject(z2),We=Vf}catch{}}return Tu.createRoot=function(r,a){if(!s(r))throw Error(i(299));var o=!1,u="",h=zv,p=Bv,E=Fv,b=null;return a!=null&&(a.unstable_strictMode===!0&&(o=!0),a.identifierPrefix!==void 0&&(u=a.identifierPrefix),a.onUncaughtError!==void 0&&(h=a.onUncaughtError),a.onCaughtError!==void 0&&(p=a.onCaughtError),a.onRecoverableError!==void 0&&(E=a.onRecoverableError),a.unstable_transitionCallbacks!==void 0&&(b=a.unstable_transitionCallbacks)),a=mE(r,1,!1,null,null,o,u,h,p,E,b,null),r[zn]=a.current,Jm(r),new yp(a)},Tu.hydrateRoot=function(r,a,o){if(!s(r))throw Error(i(299));var u=!1,h="",p=zv,E=Bv,b=Fv,C=null,q=null;return o!=null&&(o.unstable_strictMode===!0&&(u=!0),o.identifierPrefix!==void 0&&(h=o.identifierPrefix),o.onUncaughtError!==void 0&&(p=o.onUncaughtError),o.onCaughtError!==void 0&&(E=o.onCaughtError),o.onRecoverableError!==void 0&&(b=o.onRecoverableError),o.unstable_transitionCallbacks!==void 0&&(C=o.unstable_transitionCallbacks),o.formState!==void 0&&(q=o.formState)),a=mE(r,1,!0,a,o??null,u,h,p,E,b,C,q),a.context=pE(null),o=a.current,u=On(),u=Di(u),h=Bi(u),h.callback=null,Fi(o,h,u),o=u,a.current.lanes=o,Hr(a,o),Cr(a),r[zn]=a.current,Jm(r),new Lf(a)},Tu.version="19.1.0",Tu}var PE;function X2(){if(PE)return Ep.exports;PE=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Ep.exports=Q2(),Ep.exports}var W2=X2();const Z2=Qg(W2);var bu={},ME;function J2(){if(ME)return bu;ME=1,Object.defineProperty(bu,"__esModule",{value:!0}),bu.parse=c,bu.serialize=g;const n=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,e=/^[\u0021-\u003A\u003C-\u007E]*$/,t=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,i=/^[\u0020-\u003A\u003D-\u007E]*$/,s=Object.prototype.toString,l=(()=>{const w=function(){};return w.prototype=Object.create(null),w})();function c(w,x){const D=new l,H=w.length;if(H<2)return D;const L=(x==null?void 0:x.decode)||_;let $=0;do{const Z=w.indexOf("=",$);if(Z===-1)break;const Q=w.indexOf(";",$),re=Q===-1?H:Q;if(Z>re){$=w.lastIndexOf(";",Z-1)+1;continue}const ae=d(w,$,Z),ge=m(w,Z,ae),O=w.slice(ae,ge);if(D[O]===void 0){let R=d(w,Z+1,re),I=m(w,re,R);const P=L(w.slice(R,I));D[O]=P}$=re+1}while($<H);return D}function d(w,x,D){do{const H=w.charCodeAt(x);if(H!==32&&H!==9)return x}while(++x<D);return D}function m(w,x,D){for(;x>D;){const H=w.charCodeAt(--x);if(H!==32&&H!==9)return x+1}return D}function g(w,x,D){const H=(D==null?void 0:D.encode)||encodeURIComponent;if(!n.test(w))throw new TypeError(`argument name is invalid: ${w}`);const L=H(x);if(!e.test(L))throw new TypeError(`argument val is invalid: ${x}`);let $=w+"="+L;if(!D)return $;if(D.maxAge!==void 0){if(!Number.isInteger(D.maxAge))throw new TypeError(`option maxAge is invalid: ${D.maxAge}`);$+="; Max-Age="+D.maxAge}if(D.domain){if(!t.test(D.domain))throw new TypeError(`option domain is invalid: ${D.domain}`);$+="; Domain="+D.domain}if(D.path){if(!i.test(D.path))throw new TypeError(`option path is invalid: ${D.path}`);$+="; Path="+D.path}if(D.expires){if(!T(D.expires)||!Number.isFinite(D.expires.valueOf()))throw new TypeError(`option expires is invalid: ${D.expires}`);$+="; Expires="+D.expires.toUTCString()}if(D.httpOnly&&($+="; HttpOnly"),D.secure&&($+="; Secure"),D.partitioned&&($+="; Partitioned"),D.priority)switch(typeof D.priority=="string"?D.priority.toLowerCase():void 0){case"low":$+="; Priority=Low";break;case"medium":$+="; Priority=Medium";break;case"high":$+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${D.priority}`)}if(D.sameSite)switch(typeof D.sameSite=="string"?D.sameSite.toLowerCase():D.sameSite){case!0:case"strict":$+="; SameSite=Strict";break;case"lax":$+="; SameSite=Lax";break;case"none":$+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${D.sameSite}`)}return $}function _(w){if(w.indexOf("%")===-1)return w;try{return decodeURIComponent(w)}catch{return w}}function T(w){return s.call(w)==="[object Date]"}return bu}J2();var LE="popstate";function eI(n={}){function e(i,s){let{pathname:l,search:c,hash:d}=i.location;return Jp("",{pathname:l,search:c,hash:d},s.state&&s.state.usr||null,s.state&&s.state.key||"default")}function t(i,s){return typeof s=="string"?s:Fu(s)}return nI(e,t,null,n)}function ct(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function lr(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function tI(){return Math.random().toString(36).substring(2,10)}function VE(n,e){return{usr:n.state,key:n.key,idx:e}}function Jp(n,e,t=null,i){return{pathname:typeof n=="string"?n:n.pathname,search:"",hash:"",...typeof e=="string"?nl(e):e,state:t,key:e&&e.key||i||tI()}}function Fu({pathname:n="/",search:e="",hash:t=""}){return e&&e!=="?"&&(n+=e.charAt(0)==="?"?e:"?"+e),t&&t!=="#"&&(n+=t.charAt(0)==="#"?t:"#"+t),n}function nl(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substring(t),n=n.substring(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substring(i),n=n.substring(0,i)),n&&(e.pathname=n)}return e}function nI(n,e,t,i={}){let{window:s=document.defaultView,v5Compat:l=!1}=i,c=s.history,d="POP",m=null,g=_();g==null&&(g=0,c.replaceState({...c.state,idx:g},""));function _(){return(c.state||{idx:null}).idx}function T(){d="POP";let L=_(),$=L==null?null:L-g;g=L,m&&m({action:d,location:H.location,delta:$})}function w(L,$){d="PUSH";let Z=Jp(H.location,L,$);g=_()+1;let Q=VE(Z,g),re=H.createHref(Z);try{c.pushState(Q,"",re)}catch(ae){if(ae instanceof DOMException&&ae.name==="DataCloneError")throw ae;s.location.assign(re)}l&&m&&m({action:d,location:H.location,delta:1})}function x(L,$){d="REPLACE";let Z=Jp(H.location,L,$);g=_();let Q=VE(Z,g),re=H.createHref(Z);c.replaceState(Q,"",re),l&&m&&m({action:d,location:H.location,delta:0})}function D(L){let $=s.location.origin!=="null"?s.location.origin:s.location.href,Z=typeof L=="string"?L:Fu(L);return Z=Z.replace(/ $/,"%20"),ct($,`No window.location.(origin|href) available to create URL for href: ${Z}`),new URL(Z,$)}let H={get action(){return d},get location(){return n(s,c)},listen(L){if(m)throw new Error("A history only accepts one active listener");return s.addEventListener(LE,T),m=L,()=>{s.removeEventListener(LE,T),m=null}},createHref(L){return e(s,L)},createURL:D,encodeLocation(L){let $=D(L);return{pathname:$.pathname,search:$.search,hash:$.hash}},push:w,replace:x,go(L){return c.go(L)}};return H}function ob(n,e,t="/"){return rI(n,e,t,!1)}function rI(n,e,t,i){let s=typeof e=="string"?nl(e):e,l=Ti(s.pathname||"/",t);if(l==null)return null;let c=lb(n);iI(c);let d=null;for(let m=0;d==null&&m<c.length;++m){let g=pI(l);d=dI(c[m],g,i)}return d}function lb(n,e=[],t=[],i=""){let s=(l,c,d)=>{let m={relativePath:d===void 0?l.path||"":d,caseSensitive:l.caseSensitive===!0,childrenIndex:c,route:l};m.relativePath.startsWith("/")&&(ct(m.relativePath.startsWith(i),`Absolute route path "${m.relativePath}" nested under path "${i}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),m.relativePath=m.relativePath.slice(i.length));let g=_i([i,m.relativePath]),_=t.concat(m);l.children&&l.children.length>0&&(ct(l.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${g}".`),lb(l.children,e,_,g)),!(l.path==null&&!l.index)&&e.push({path:g,score:fI(g,l.index),routesMeta:_})};return n.forEach((l,c)=>{var d;if(l.path===""||!((d=l.path)!=null&&d.includes("?")))s(l,c);else for(let m of ub(l.path))s(l,c,m)}),e}function ub(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,s=t.endsWith("?"),l=t.replace(/\?$/,"");if(i.length===0)return s?[l,""]:[l];let c=ub(i.join("/")),d=[];return d.push(...c.map(m=>m===""?l:[l,m].join("/"))),s&&d.push(...c),d.map(m=>n.startsWith("/")&&m===""?"/":m)}function iI(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:hI(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}var aI=/^:[\w-]+$/,sI=3,oI=2,lI=1,uI=10,cI=-2,UE=n=>n==="*";function fI(n,e){let t=n.split("/"),i=t.length;return t.some(UE)&&(i+=cI),e&&(i+=oI),t.filter(s=>!UE(s)).reduce((s,l)=>s+(aI.test(l)?sI:l===""?lI:uI),i)}function hI(n,e){return n.length===e.length&&n.slice(0,-1).every((i,s)=>i===e[s])?n[n.length-1]-e[e.length-1]:0}function dI(n,e,t=!1){let{routesMeta:i}=n,s={},l="/",c=[];for(let d=0;d<i.length;++d){let m=i[d],g=d===i.length-1,_=l==="/"?e:e.slice(l.length)||"/",T=fh({path:m.relativePath,caseSensitive:m.caseSensitive,end:g},_),w=m.route;if(!T&&g&&t&&!i[i.length-1].route.index&&(T=fh({path:m.relativePath,caseSensitive:m.caseSensitive,end:!1},_)),!T)return null;Object.assign(s,T.params),c.push({params:s,pathname:_i([l,T.pathname]),pathnameBase:vI(_i([l,T.pathnameBase])),route:w}),T.pathnameBase!=="/"&&(l=_i([l,T.pathnameBase]))}return c}function fh(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=mI(n.path,n.caseSensitive,n.end),s=e.match(t);if(!s)return null;let l=s[0],c=l.replace(/(.)\/+$/,"$1"),d=s.slice(1);return{params:i.reduce((g,{paramName:_,isOptional:T},w)=>{if(_==="*"){let D=d[w]||"";c=l.slice(0,l.length-D.length).replace(/(.)\/+$/,"$1")}const x=d[w];return T&&!x?g[_]=void 0:g[_]=(x||"").replace(/%2F/g,"/"),g},{}),pathname:l,pathnameBase:c,pattern:n}}function mI(n,e=!1,t=!0){lr(n==="*"||!n.endsWith("*")||n.endsWith("/*"),`Route path "${n}" will be treated as if it were "${n.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${n.replace(/\*$/,"/*")}".`);let i=[],s="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(c,d,m)=>(i.push({paramName:d,isOptional:m!=null}),m?"/?([^\\/]+)?":"/([^\\/]+)"));return n.endsWith("*")?(i.push({paramName:"*"}),s+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?s+="\\/*$":n!==""&&n!=="/"&&(s+="(?:(?=\\/|$))"),[new RegExp(s,e?void 0:"i"),i]}function pI(n){try{return n.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return lr(!1,`The URL path "${n}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${e}).`),n}}function Ti(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function gI(n,e="/"){let{pathname:t,search:i="",hash:s=""}=typeof n=="string"?nl(n):n;return{pathname:t?t.startsWith("/")?t:yI(t,e):e,search:EI(i),hash:TI(s)}}function yI(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(s=>{s===".."?t.length>1&&t.pop():s!=="."&&t.push(s)}),t.length>1?t.join("/"):"/"}function wp(n,e,t,i){return`Cannot include a '${n}' character in a manually specified \`to.${e}\` field [${JSON.stringify(i)}].  Please separate it out to the \`to.${t}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function _I(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function Zg(n){let e=_I(n);return e.map((t,i)=>i===e.length-1?t.pathname:t.pathnameBase)}function Jg(n,e,t,i=!1){let s;typeof n=="string"?s=nl(n):(s={...n},ct(!s.pathname||!s.pathname.includes("?"),wp("?","pathname","search",s)),ct(!s.pathname||!s.pathname.includes("#"),wp("#","pathname","hash",s)),ct(!s.search||!s.search.includes("#"),wp("#","search","hash",s)));let l=n===""||s.pathname==="",c=l?"/":s.pathname,d;if(c==null)d=t;else{let T=e.length-1;if(!i&&c.startsWith("..")){let w=c.split("/");for(;w[0]==="..";)w.shift(),T-=1;s.pathname=w.join("/")}d=T>=0?e[T]:"/"}let m=gI(s,d),g=c&&c!=="/"&&c.endsWith("/"),_=(l||c===".")&&t.endsWith("/");return!m.pathname.endsWith("/")&&(g||_)&&(m.pathname+="/"),m}var _i=n=>n.join("/").replace(/\/\/+/g,"/"),vI=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),EI=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,TI=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function bI(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}var cb=["POST","PUT","PATCH","DELETE"];new Set(cb);var AI=["GET",...cb];new Set(AI);var rl=F.createContext(null);rl.displayName="DataRouter";var Vh=F.createContext(null);Vh.displayName="DataRouterState";var fb=F.createContext({isTransitioning:!1});fb.displayName="ViewTransition";var wI=F.createContext(new Map);wI.displayName="Fetchers";var SI=F.createContext(null);SI.displayName="Await";var fr=F.createContext(null);fr.displayName="Navigation";var ec=F.createContext(null);ec.displayName="Location";var Br=F.createContext({outlet:null,matches:[],isDataRoute:!1});Br.displayName="Route";var ey=F.createContext(null);ey.displayName="RouteError";function RI(n,{relative:e}={}){ct(il(),"useHref() may be used only in the context of a <Router> component.");let{basename:t,navigator:i}=F.useContext(fr),{hash:s,pathname:l,search:c}=tc(n,{relative:e}),d=l;return t!=="/"&&(d=l==="/"?t:_i([t,l])),i.createHref({pathname:d,search:c,hash:s})}function il(){return F.useContext(ec)!=null}function Oa(){return ct(il(),"useLocation() may be used only in the context of a <Router> component."),F.useContext(ec).location}var hb="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function db(n){F.useContext(fr).static||F.useLayoutEffect(n)}function al(){let{isDataRoute:n}=F.useContext(Br);return n?jI():II()}function II(){ct(il(),"useNavigate() may be used only in the context of a <Router> component.");let n=F.useContext(rl),{basename:e,navigator:t}=F.useContext(fr),{matches:i}=F.useContext(Br),{pathname:s}=Oa(),l=JSON.stringify(Zg(i)),c=F.useRef(!1);return db(()=>{c.current=!0}),F.useCallback((m,g={})=>{if(lr(c.current,hb),!c.current)return;if(typeof m=="number"){t.go(m);return}let _=Jg(m,JSON.parse(l),s,g.relative==="path");n==null&&e!=="/"&&(_.pathname=_.pathname==="/"?e:_i([e,_.pathname])),(g.replace?t.replace:t.push)(_,g.state,g)},[e,t,l,s,n])}F.createContext(null);function tc(n,{relative:e}={}){let{matches:t}=F.useContext(Br),{pathname:i}=Oa(),s=JSON.stringify(Zg(t));return F.useMemo(()=>Jg(n,JSON.parse(s),i,e==="path"),[n,s,i,e])}function CI(n,e){return mb(n,e)}function mb(n,e,t,i){var Z;ct(il(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:s,static:l}=F.useContext(fr),{matches:c}=F.useContext(Br),d=c[c.length-1],m=d?d.params:{},g=d?d.pathname:"/",_=d?d.pathnameBase:"/",T=d&&d.route;{let Q=T&&T.path||"";pb(g,!T||Q.endsWith("*")||Q.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${g}" (under <Route path="${Q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Q}"> to <Route path="${Q==="/"?"*":`${Q}/*`}">.`)}let w=Oa(),x;if(e){let Q=typeof e=="string"?nl(e):e;ct(_==="/"||((Z=Q.pathname)==null?void 0:Z.startsWith(_)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${_}" but pathname "${Q.pathname}" was given in the \`location\` prop.`),x=Q}else x=w;let D=x.pathname||"/",H=D;if(_!=="/"){let Q=_.replace(/^\//,"").split("/");H="/"+D.replace(/^\//,"").split("/").slice(Q.length).join("/")}let L=!l&&t&&t.matches&&t.matches.length>0?t.matches:ob(n,{pathname:H});lr(T||L!=null,`No routes matched location "${x.pathname}${x.search}${x.hash}" `),lr(L==null||L[L.length-1].route.element!==void 0||L[L.length-1].route.Component!==void 0||L[L.length-1].route.lazy!==void 0,`Matched leaf route at location "${x.pathname}${x.search}${x.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let $=kI(L&&L.map(Q=>Object.assign({},Q,{params:Object.assign({},m,Q.params),pathname:_i([_,s.encodeLocation?s.encodeLocation(Q.pathname).pathname:Q.pathname]),pathnameBase:Q.pathnameBase==="/"?_:_i([_,s.encodeLocation?s.encodeLocation(Q.pathnameBase).pathname:Q.pathnameBase])})),c,t,i);return e&&$?F.createElement(ec.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...x},navigationType:"POP"}},$):$}function xI(){let n=UI(),e=bI(n)?`${n.status} ${n.statusText}`:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,i="rgba(200,200,200, 0.5)",s={padding:"0.5rem",backgroundColor:i},l={padding:"2px 4px",backgroundColor:i},c=null;return console.error("Error handled by React Router default ErrorBoundary:",n),c=F.createElement(F.Fragment,null,F.createElement("p",null,"💿 Hey developer 👋"),F.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",F.createElement("code",{style:l},"ErrorBoundary")," or"," ",F.createElement("code",{style:l},"errorElement")," prop on your route.")),F.createElement(F.Fragment,null,F.createElement("h2",null,"Unexpected Application Error!"),F.createElement("h3",{style:{fontStyle:"italic"}},e),t?F.createElement("pre",{style:s},t):null,c)}var NI=F.createElement(xI,null),OI=class extends F.Component{constructor(n){super(n),this.state={location:n.location,revalidation:n.revalidation,error:n.error}}static getDerivedStateFromError(n){return{error:n}}static getDerivedStateFromProps(n,e){return e.location!==n.location||e.revalidation!=="idle"&&n.revalidation==="idle"?{error:n.error,location:n.location,revalidation:n.revalidation}:{error:n.error!==void 0?n.error:e.error,location:e.location,revalidation:n.revalidation||e.revalidation}}componentDidCatch(n,e){console.error("React Router caught the following error during render",n,e)}render(){return this.state.error!==void 0?F.createElement(Br.Provider,{value:this.props.routeContext},F.createElement(ey.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function DI({routeContext:n,match:e,children:t}){let i=F.useContext(rl);return i&&i.static&&i.staticContext&&(e.route.errorElement||e.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=e.route.id),F.createElement(Br.Provider,{value:n},t)}function kI(n,e=[],t=null,i=null){if(n==null){if(!t)return null;if(t.errors)n=t.matches;else if(e.length===0&&!t.initialized&&t.matches.length>0)n=t.matches;else return null}let s=n,l=t==null?void 0:t.errors;if(l!=null){let m=s.findIndex(g=>g.route.id&&(l==null?void 0:l[g.route.id])!==void 0);ct(m>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(l).join(",")}`),s=s.slice(0,Math.min(s.length,m+1))}let c=!1,d=-1;if(t)for(let m=0;m<s.length;m++){let g=s[m];if((g.route.HydrateFallback||g.route.hydrateFallbackElement)&&(d=m),g.route.id){let{loaderData:_,errors:T}=t,w=g.route.loader&&!_.hasOwnProperty(g.route.id)&&(!T||T[g.route.id]===void 0);if(g.route.lazy||w){c=!0,d>=0?s=s.slice(0,d+1):s=[s[0]];break}}}return s.reduceRight((m,g,_)=>{let T,w=!1,x=null,D=null;t&&(T=l&&g.route.id?l[g.route.id]:void 0,x=g.route.errorElement||NI,c&&(d<0&&_===0?(pb("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),w=!0,D=null):d===_&&(w=!0,D=g.route.hydrateFallbackElement||null)));let H=e.concat(s.slice(0,_+1)),L=()=>{let $;return T?$=x:w?$=D:g.route.Component?$=F.createElement(g.route.Component,null):g.route.element?$=g.route.element:$=m,F.createElement(DI,{match:g,routeContext:{outlet:m,matches:H,isDataRoute:t!=null},children:$})};return t&&(g.route.ErrorBoundary||g.route.errorElement||_===0)?F.createElement(OI,{location:t.location,revalidation:t.revalidation,component:x,error:T,children:L(),routeContext:{outlet:null,matches:H,isDataRoute:!0}}):L()},null)}function ty(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function PI(n){let e=F.useContext(rl);return ct(e,ty(n)),e}function MI(n){let e=F.useContext(Vh);return ct(e,ty(n)),e}function LI(n){let e=F.useContext(Br);return ct(e,ty(n)),e}function ny(n){let e=LI(n),t=e.matches[e.matches.length-1];return ct(t.route.id,`${n} can only be used on routes that contain a unique "id"`),t.route.id}function VI(){return ny("useRouteId")}function UI(){var i;let n=F.useContext(ey),e=MI("useRouteError"),t=ny("useRouteError");return n!==void 0?n:(i=e.errors)==null?void 0:i[t]}function jI(){let{router:n}=PI("useNavigate"),e=ny("useNavigate"),t=F.useRef(!1);return db(()=>{t.current=!0}),F.useCallback(async(s,l={})=>{lr(t.current,hb),t.current&&(typeof s=="number"?n.navigate(s):await n.navigate(s,{fromRouteId:e,...l}))},[n,e])}var jE={};function pb(n,e,t){!e&&!jE[n]&&(jE[n]=!0,lr(!1,t))}F.memo(zI);function zI({routes:n,future:e,state:t}){return mb(n,void 0,t,e)}function BI({to:n,replace:e,state:t,relative:i}){ct(il(),"<Navigate> may be used only in the context of a <Router> component.");let{static:s}=F.useContext(fr);lr(!s,"<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.");let{matches:l}=F.useContext(Br),{pathname:c}=Oa(),d=al(),m=Jg(n,Zg(l),c,i==="path"),g=JSON.stringify(m);return F.useEffect(()=>{d(JSON.parse(g),{replace:e,state:t,relative:i})},[d,g,i,e,t]),null}function mi(n){ct(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function FI({basename:n="/",children:e=null,location:t,navigationType:i="POP",navigator:s,static:l=!1}){ct(!il(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let c=n.replace(/^\/*/,"/"),d=F.useMemo(()=>({basename:c,navigator:s,static:l,future:{}}),[c,s,l]);typeof t=="string"&&(t=nl(t));let{pathname:m="/",search:g="",hash:_="",state:T=null,key:w="default"}=t,x=F.useMemo(()=>{let D=Ti(m,c);return D==null?null:{location:{pathname:D,search:g,hash:_,state:T,key:w},navigationType:i}},[c,m,g,_,T,w,i]);return lr(x!=null,`<Router basename="${c}"> is not able to match the URL "${m}${g}${_}" because it does not start with the basename, so the <Router> won't render anything.`),x==null?null:F.createElement(fr.Provider,{value:d},F.createElement(ec.Provider,{children:e,value:x}))}function qI({children:n,location:e}){return CI(eg(n),e)}function eg(n,e=[]){let t=[];return F.Children.forEach(n,(i,s)=>{if(!F.isValidElement(i))return;let l=[...e,s];if(i.type===F.Fragment){t.push.apply(t,eg(i.props.children,l));return}ct(i.type===mi,`[${typeof i.type=="string"?i.type:i.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),ct(!i.props.index||!i.props.children,"An index route cannot have child routes.");let c={id:i.props.id||l.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,hydrateFallbackElement:i.props.hydrateFallbackElement,HydrateFallback:i.props.HydrateFallback,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.hasErrorBoundary===!0||i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(c.children=eg(i.props.children,l)),t.push(c)}),t}var Wf="get",Zf="application/x-www-form-urlencoded";function Uh(n){return n!=null&&typeof n.tagName=="string"}function HI(n){return Uh(n)&&n.tagName.toLowerCase()==="button"}function GI(n){return Uh(n)&&n.tagName.toLowerCase()==="form"}function $I(n){return Uh(n)&&n.tagName.toLowerCase()==="input"}function KI(n){return!!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)}function YI(n,e){return n.button===0&&(!e||e==="_self")&&!KI(n)}var Uf=null;function QI(){if(Uf===null)try{new FormData(document.createElement("form"),0),Uf=!1}catch{Uf=!0}return Uf}var XI=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Sp(n){return n!=null&&!XI.has(n)?(lr(!1,`"${n}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Zf}"`),null):n}function WI(n,e){let t,i,s,l,c;if(GI(n)){let d=n.getAttribute("action");i=d?Ti(d,e):null,t=n.getAttribute("method")||Wf,s=Sp(n.getAttribute("enctype"))||Zf,l=new FormData(n)}else if(HI(n)||$I(n)&&(n.type==="submit"||n.type==="image")){let d=n.form;if(d==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let m=n.getAttribute("formaction")||d.getAttribute("action");if(i=m?Ti(m,e):null,t=n.getAttribute("formmethod")||d.getAttribute("method")||Wf,s=Sp(n.getAttribute("formenctype"))||Sp(d.getAttribute("enctype"))||Zf,l=new FormData(d,n),!QI()){let{name:g,type:_,value:T}=n;if(_==="image"){let w=g?`${g}.`:"";l.append(`${w}x`,"0"),l.append(`${w}y`,"0")}else g&&l.append(g,T)}}else{if(Uh(n))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');t=Wf,i=null,s=Zf,c=n}return l&&s==="text/plain"&&(c=l,l=void 0),{action:i,method:t.toLowerCase(),encType:s,formData:l,body:c}}function ry(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}async function ZI(n,e){if(n.id in e)return e[n.id];try{let t=await import(n.module);return e[n.id]=t,t}catch(t){return console.error(`Error loading route module \`${n.module}\`, reloading page...`),console.error(t),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function JI(n){return n==null?!1:n.href==null?n.rel==="preload"&&typeof n.imageSrcSet=="string"&&typeof n.imageSizes=="string":typeof n.rel=="string"&&typeof n.href=="string"}async function eC(n,e,t){let i=await Promise.all(n.map(async s=>{let l=e.routes[s.route.id];if(l){let c=await ZI(l,t);return c.links?c.links():[]}return[]}));return iC(i.flat(1).filter(JI).filter(s=>s.rel==="stylesheet"||s.rel==="preload").map(s=>s.rel==="stylesheet"?{...s,rel:"prefetch",as:"style"}:{...s,rel:"prefetch"}))}function zE(n,e,t,i,s,l){let c=(m,g)=>t[g]?m.route.id!==t[g].route.id:!0,d=(m,g)=>{var _;return t[g].pathname!==m.pathname||((_=t[g].route.path)==null?void 0:_.endsWith("*"))&&t[g].params["*"]!==m.params["*"]};return l==="assets"?e.filter((m,g)=>c(m,g)||d(m,g)):l==="data"?e.filter((m,g)=>{var T;let _=i.routes[m.route.id];if(!_||!_.hasLoader)return!1;if(c(m,g)||d(m,g))return!0;if(m.route.shouldRevalidate){let w=m.route.shouldRevalidate({currentUrl:new URL(s.pathname+s.search+s.hash,window.origin),currentParams:((T=t[0])==null?void 0:T.params)||{},nextUrl:new URL(n,window.origin),nextParams:m.params,defaultShouldRevalidate:!0});if(typeof w=="boolean")return w}return!0}):[]}function tC(n,e,{includeHydrateFallback:t}={}){return nC(n.map(i=>{let s=e.routes[i.route.id];if(!s)return[];let l=[s.module];return s.clientActionModule&&(l=l.concat(s.clientActionModule)),s.clientLoaderModule&&(l=l.concat(s.clientLoaderModule)),t&&s.hydrateFallbackModule&&(l=l.concat(s.hydrateFallbackModule)),s.imports&&(l=l.concat(s.imports)),l}).flat(1))}function nC(n){return[...new Set(n)]}function rC(n){let e={},t=Object.keys(n).sort();for(let i of t)e[i]=n[i];return e}function iC(n,e){let t=new Set;return new Set(e),n.reduce((i,s)=>{let l=JSON.stringify(rC(s));return t.has(l)||(t.add(l),i.push({key:l,link:s})),i},[])}var aC=new Set([100,101,204,205]);function sC(n,e){let t=typeof n=="string"?new URL(n,typeof window>"u"?"server://singlefetch/":window.location.origin):n;return t.pathname==="/"?t.pathname="_root.data":e&&Ti(t.pathname,e)==="/"?t.pathname=`${e.replace(/\/$/,"")}/_root.data`:t.pathname=`${t.pathname.replace(/\/$/,"")}.data`,t}function gb(){let n=F.useContext(rl);return ry(n,"You must render this element inside a <DataRouterContext.Provider> element"),n}function oC(){let n=F.useContext(Vh);return ry(n,"You must render this element inside a <DataRouterStateContext.Provider> element"),n}var iy=F.createContext(void 0);iy.displayName="FrameworkContext";function yb(){let n=F.useContext(iy);return ry(n,"You must render this element inside a <HydratedRouter> element"),n}function lC(n,e){let t=F.useContext(iy),[i,s]=F.useState(!1),[l,c]=F.useState(!1),{onFocus:d,onBlur:m,onMouseEnter:g,onMouseLeave:_,onTouchStart:T}=e,w=F.useRef(null);F.useEffect(()=>{if(n==="render"&&c(!0),n==="viewport"){let H=$=>{$.forEach(Z=>{c(Z.isIntersecting)})},L=new IntersectionObserver(H,{threshold:.5});return w.current&&L.observe(w.current),()=>{L.disconnect()}}},[n]),F.useEffect(()=>{if(i){let H=setTimeout(()=>{c(!0)},100);return()=>{clearTimeout(H)}}},[i]);let x=()=>{s(!0)},D=()=>{s(!1),c(!1)};return t?n!=="intent"?[l,w,{}]:[l,w,{onFocus:Au(d,x),onBlur:Au(m,D),onMouseEnter:Au(g,x),onMouseLeave:Au(_,D),onTouchStart:Au(T,x)}]:[!1,w,{}]}function Au(n,e){return t=>{n&&n(t),t.defaultPrevented||e(t)}}function uC({page:n,...e}){let{router:t}=gb(),i=F.useMemo(()=>ob(t.routes,n,t.basename),[t.routes,n,t.basename]);return i?F.createElement(fC,{page:n,matches:i,...e}):null}function cC(n){let{manifest:e,routeModules:t}=yb(),[i,s]=F.useState([]);return F.useEffect(()=>{let l=!1;return eC(n,e,t).then(c=>{l||s(c)}),()=>{l=!0}},[n,e,t]),i}function fC({page:n,matches:e,...t}){let i=Oa(),{manifest:s,routeModules:l}=yb(),{basename:c}=gb(),{loaderData:d,matches:m}=oC(),g=F.useMemo(()=>zE(n,e,m,s,i,"data"),[n,e,m,s,i]),_=F.useMemo(()=>zE(n,e,m,s,i,"assets"),[n,e,m,s,i]),T=F.useMemo(()=>{if(n===i.pathname+i.search+i.hash)return[];let D=new Set,H=!1;if(e.forEach($=>{var Q;let Z=s.routes[$.route.id];!Z||!Z.hasLoader||(!g.some(re=>re.route.id===$.route.id)&&$.route.id in d&&((Q=l[$.route.id])!=null&&Q.shouldRevalidate)||Z.hasClientLoader?H=!0:D.add($.route.id))}),D.size===0)return[];let L=sC(n,c);return H&&D.size>0&&L.searchParams.set("_routes",e.filter($=>D.has($.route.id)).map($=>$.route.id).join(",")),[L.pathname+L.search]},[c,d,i,s,g,e,n,l]),w=F.useMemo(()=>tC(_,s),[_,s]),x=cC(_);return F.createElement(F.Fragment,null,T.map(D=>F.createElement("link",{key:D,rel:"prefetch",as:"fetch",href:D,...t})),w.map(D=>F.createElement("link",{key:D,rel:"modulepreload",href:D,...t})),x.map(({key:D,link:H})=>F.createElement("link",{key:D,...H})))}function hC(...n){return e=>{n.forEach(t=>{typeof t=="function"?t(e):t!=null&&(t.current=e)})}}var _b=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{_b&&(window.__reactRouterVersion="7.5.2")}catch{}function dC({basename:n,children:e,window:t}){let i=F.useRef();i.current==null&&(i.current=eI({window:t,v5Compat:!0}));let s=i.current,[l,c]=F.useState({action:s.action,location:s.location}),d=F.useCallback(m=>{F.startTransition(()=>c(m))},[c]);return F.useLayoutEffect(()=>s.listen(d),[s,d]),F.createElement(FI,{basename:n,children:e,location:l.location,navigationType:l.action,navigator:s})}var vb=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,ga=F.forwardRef(function({onClick:e,discover:t="render",prefetch:i="none",relative:s,reloadDocument:l,replace:c,state:d,target:m,to:g,preventScrollReset:_,viewTransition:T,...w},x){let{basename:D}=F.useContext(fr),H=typeof g=="string"&&vb.test(g),L,$=!1;if(typeof g=="string"&&H&&(L=g,_b))try{let I=new URL(window.location.href),P=g.startsWith("//")?new URL(I.protocol+g):new URL(g),V=Ti(P.pathname,D);P.origin===I.origin&&V!=null?g=V+P.search+P.hash:$=!0}catch{lr(!1,`<Link to="${g}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Z=RI(g,{relative:s}),[Q,re,ae]=lC(i,w),ge=gC(g,{replace:c,state:d,target:m,preventScrollReset:_,relative:s,viewTransition:T});function O(I){e&&e(I),I.defaultPrevented||ge(I)}let R=F.createElement("a",{...w,...ae,href:L||Z,onClick:$||l?e:O,ref:hC(x,re),target:m,"data-discover":!H&&t==="render"?"true":void 0});return Q&&!H?F.createElement(F.Fragment,null,R,F.createElement(uC,{page:Z})):R});ga.displayName="Link";var pi=F.forwardRef(function({"aria-current":e="page",caseSensitive:t=!1,className:i="",end:s=!1,style:l,to:c,viewTransition:d,children:m,...g},_){let T=tc(c,{relative:g.relative}),w=Oa(),x=F.useContext(Vh),{navigator:D,basename:H}=F.useContext(fr),L=x!=null&&TC(T)&&d===!0,$=D.encodeLocation?D.encodeLocation(T).pathname:T.pathname,Z=w.pathname,Q=x&&x.navigation&&x.navigation.location?x.navigation.location.pathname:null;t||(Z=Z.toLowerCase(),Q=Q?Q.toLowerCase():null,$=$.toLowerCase()),Q&&H&&(Q=Ti(Q,H)||Q);const re=$!=="/"&&$.endsWith("/")?$.length-1:$.length;let ae=Z===$||!s&&Z.startsWith($)&&Z.charAt(re)==="/",ge=Q!=null&&(Q===$||!s&&Q.startsWith($)&&Q.charAt($.length)==="/"),O={isActive:ae,isPending:ge,isTransitioning:L},R=ae?e:void 0,I;typeof i=="function"?I=i(O):I=[i,ae?"active":null,ge?"pending":null,L?"transitioning":null].filter(Boolean).join(" ");let P=typeof l=="function"?l(O):l;return F.createElement(ga,{...g,"aria-current":R,className:I,ref:_,style:P,to:c,viewTransition:d},typeof m=="function"?m(O):m)});pi.displayName="NavLink";var mC=F.forwardRef(({discover:n="render",fetcherKey:e,navigate:t,reloadDocument:i,replace:s,state:l,method:c=Wf,action:d,onSubmit:m,relative:g,preventScrollReset:_,viewTransition:T,...w},x)=>{let D=vC(),H=EC(d,{relative:g}),L=c.toLowerCase()==="get"?"get":"post",$=typeof d=="string"&&vb.test(d),Z=Q=>{if(m&&m(Q),Q.defaultPrevented)return;Q.preventDefault();let re=Q.nativeEvent.submitter,ae=(re==null?void 0:re.getAttribute("formmethod"))||c;D(re||Q.currentTarget,{fetcherKey:e,method:ae,navigate:t,replace:s,state:l,relative:g,preventScrollReset:_,viewTransition:T})};return F.createElement("form",{ref:x,method:L,action:H,onSubmit:i?m:Z,...w,"data-discover":!$&&n==="render"?"true":void 0})});mC.displayName="Form";function pC(n){return`${n} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Eb(n){let e=F.useContext(rl);return ct(e,pC(n)),e}function gC(n,{target:e,replace:t,state:i,preventScrollReset:s,relative:l,viewTransition:c}={}){let d=al(),m=Oa(),g=tc(n,{relative:l});return F.useCallback(_=>{if(YI(_,e)){_.preventDefault();let T=t!==void 0?t:Fu(m)===Fu(g);d(n,{replace:T,state:i,preventScrollReset:s,relative:l,viewTransition:c})}},[m,d,g,t,i,e,n,s,l,c])}var yC=0,_C=()=>`__${String(++yC)}__`;function vC(){let{router:n}=Eb("useSubmit"),{basename:e}=F.useContext(fr),t=VI();return F.useCallback(async(i,s={})=>{let{action:l,method:c,encType:d,formData:m,body:g}=WI(i,e);if(s.navigate===!1){let _=s.fetcherKey||_C();await n.fetch(_,t,s.action||l,{preventScrollReset:s.preventScrollReset,formData:m,body:g,formMethod:s.method||c,formEncType:s.encType||d,flushSync:s.flushSync})}else await n.navigate(s.action||l,{preventScrollReset:s.preventScrollReset,formData:m,body:g,formMethod:s.method||c,formEncType:s.encType||d,replace:s.replace,state:s.state,fromRouteId:t,flushSync:s.flushSync,viewTransition:s.viewTransition})},[n,e,t])}function EC(n,{relative:e}={}){let{basename:t}=F.useContext(fr),i=F.useContext(Br);ct(i,"useFormAction must be used inside a RouteContext");let[s]=i.matches.slice(-1),l={...tc(n||".",{relative:e})},c=Oa();if(n==null){l.search=c.search;let d=new URLSearchParams(l.search),m=d.getAll("index");if(m.some(_=>_==="")){d.delete("index"),m.filter(T=>T).forEach(T=>d.append("index",T));let _=d.toString();l.search=_?`?${_}`:""}}return(!n||n===".")&&s.route.index&&(l.search=l.search?l.search.replace(/^\?/,"?index&"):"?index"),t!=="/"&&(l.pathname=l.pathname==="/"?t:_i([t,l.pathname])),Fu(l)}function TC(n,e={}){let t=F.useContext(fb);ct(t!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:i}=Eb("useViewTransitionState"),s=tc(n,{relative:e.relative});if(!t.isTransitioning)return!1;let l=Ti(t.currentLocation.pathname,i)||t.currentLocation.pathname,c=Ti(t.nextLocation.pathname,i)||t.nextLocation.pathname;return fh(s.pathname,c)!=null||fh(s.pathname,l)!=null}new TextEncoder;[...aC];/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */function bC(n,e,t){return(e=wC(e))in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function BE(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function se(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?BE(Object(t),!0).forEach(function(i){bC(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):BE(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function AC(n,e){if(typeof n!="object"||!n)return n;var t=n[Symbol.toPrimitive];if(t!==void 0){var i=t.call(n,e);if(typeof i!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(n)}function wC(n){var e=AC(n,"string");return typeof e=="symbol"?e:e+""}const FE=()=>{};let ay={},Tb={},bb=null,Ab={mark:FE,measure:FE};try{typeof window<"u"&&(ay=window),typeof document<"u"&&(Tb=document),typeof MutationObserver<"u"&&(bb=MutationObserver),typeof performance<"u"&&(Ab=performance)}catch{}const{userAgent:qE=""}=ay.navigator||{},ba=ay,ot=Tb,HE=bb,jf=Ab;ba.document;const xi=!!ot.documentElement&&!!ot.head&&typeof ot.addEventListener=="function"&&typeof ot.createElement=="function",wb=~qE.indexOf("MSIE")||~qE.indexOf("Trident/");var SC=/fa(s|r|l|t|d|dr|dl|dt|b|k|kd|ss|sr|sl|st|sds|sdr|sdl|sdt)?[\-\ ]/,RC=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp Duotone|Sharp|Kit)?.*/i,Sb={classic:{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fab:"brands","fa-brands":"brands"},duotone:{fa:"solid",fad:"solid","fa-solid":"solid","fa-duotone":"solid",fadr:"regular","fa-regular":"regular",fadl:"light","fa-light":"light",fadt:"thin","fa-thin":"thin"},sharp:{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light",fast:"thin","fa-thin":"thin"},"sharp-duotone":{fa:"solid",fasds:"solid","fa-solid":"solid",fasdr:"regular","fa-regular":"regular",fasdl:"light","fa-light":"light",fasdt:"thin","fa-thin":"thin"}},IC={GROUP:"duotone-group",PRIMARY:"primary",SECONDARY:"secondary"},Rb=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],cn="classic",jh="duotone",CC="sharp",xC="sharp-duotone",Ib=[cn,jh,CC,xC],NC={classic:{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},duotone:{900:"fad",400:"fadr",300:"fadl",100:"fadt"},sharp:{900:"fass",400:"fasr",300:"fasl",100:"fast"},"sharp-duotone":{900:"fasds",400:"fasdr",300:"fasdl",100:"fasdt"}},OC={"Font Awesome 6 Free":{900:"fas",400:"far"},"Font Awesome 6 Pro":{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"},"Font Awesome 6 Brands":{400:"fab",normal:"fab"},"Font Awesome 6 Duotone":{900:"fad",400:"fadr",normal:"fadr",300:"fadl",100:"fadt"},"Font Awesome 6 Sharp":{900:"fass",400:"fasr",normal:"fasr",300:"fasl",100:"fast"},"Font Awesome 6 Sharp Duotone":{900:"fasds",400:"fasdr",normal:"fasdr",300:"fasdl",100:"fasdt"}},DC=new Map([["classic",{defaultShortPrefixId:"fas",defaultStyleId:"solid",styleIds:["solid","regular","light","thin","brands"],futureStyleIds:[],defaultFontWeight:900}],["sharp",{defaultShortPrefixId:"fass",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["duotone",{defaultShortPrefixId:"fad",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}],["sharp-duotone",{defaultShortPrefixId:"fasds",defaultStyleId:"solid",styleIds:["solid","regular","light","thin"],futureStyleIds:[],defaultFontWeight:900}]]),kC={classic:{solid:"fas",regular:"far",light:"fal",thin:"fat",brands:"fab"},duotone:{solid:"fad",regular:"fadr",light:"fadl",thin:"fadt"},sharp:{solid:"fass",regular:"fasr",light:"fasl",thin:"fast"},"sharp-duotone":{solid:"fasds",regular:"fasdr",light:"fasdl",thin:"fasdt"}},PC=["fak","fa-kit","fakd","fa-kit-duotone"],GE={kit:{fak:"kit","fa-kit":"kit"},"kit-duotone":{fakd:"kit-duotone","fa-kit-duotone":"kit-duotone"}},MC=["kit"],LC={kit:{"fa-kit":"fak"}},VC=["fak","fakd"],UC={kit:{fak:"fa-kit"}},$E={kit:{kit:"fak"},"kit-duotone":{"kit-duotone":"fakd"}},zf={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},jC=["fa-classic","fa-duotone","fa-sharp","fa-sharp-duotone"],zC=["fak","fa-kit","fakd","fa-kit-duotone"],BC={"Font Awesome Kit":{400:"fak",normal:"fak"},"Font Awesome Kit Duotone":{400:"fakd",normal:"fakd"}},FC={classic:{"fa-brands":"fab","fa-duotone":"fad","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"},duotone:{"fa-regular":"fadr","fa-light":"fadl","fa-thin":"fadt"},sharp:{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl","fa-thin":"fast"},"sharp-duotone":{"fa-solid":"fasds","fa-regular":"fasdr","fa-light":"fasdl","fa-thin":"fasdt"}},qC={classic:["fas","far","fal","fat","fad"],duotone:["fadr","fadl","fadt"],sharp:["fass","fasr","fasl","fast"],"sharp-duotone":["fasds","fasdr","fasdl","fasdt"]},tg={classic:{fab:"fa-brands",fad:"fa-duotone",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"},duotone:{fadr:"fa-regular",fadl:"fa-light",fadt:"fa-thin"},sharp:{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light",fast:"fa-thin"},"sharp-duotone":{fasds:"fa-solid",fasdr:"fa-regular",fasdl:"fa-light",fasdt:"fa-thin"}},HC=["fa-solid","fa-regular","fa-light","fa-thin","fa-duotone","fa-brands"],ng=["fa","fas","far","fal","fat","fad","fadr","fadl","fadt","fab","fass","fasr","fasl","fast","fasds","fasdr","fasdl","fasdt",...jC,...HC],GC=["solid","regular","light","thin","duotone","brands"],Cb=[1,2,3,4,5,6,7,8,9,10],$C=Cb.concat([11,12,13,14,15,16,17,18,19,20]),KC=[...Object.keys(qC),...GC,"2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",zf.GROUP,zf.SWAP_OPACITY,zf.PRIMARY,zf.SECONDARY].concat(Cb.map(n=>"".concat(n,"x"))).concat($C.map(n=>"w-".concat(n))),YC={"Font Awesome 5 Free":{900:"fas",400:"far"},"Font Awesome 5 Pro":{900:"fas",400:"far",normal:"far",300:"fal"},"Font Awesome 5 Brands":{400:"fab",normal:"fab"},"Font Awesome 5 Duotone":{900:"fad"}};const bi="___FONT_AWESOME___",rg=16,xb="fa",Nb="svg-inline--fa",As="data-fa-i2svg",ig="data-fa-pseudo-element",QC="data-fa-pseudo-element-pending",sy="data-prefix",oy="data-icon",KE="fontawesome-i2svg",XC="async",WC=["HTML","HEAD","STYLE","SCRIPT"],Ob=(()=>{try{return!0}catch{return!1}})();function nc(n){return new Proxy(n,{get(e,t){return t in e?e[t]:e[cn]}})}const Db=se({},Sb);Db[cn]=se(se(se(se({},{"fa-duotone":"duotone"}),Sb[cn]),GE.kit),GE["kit-duotone"]);const ZC=nc(Db),ag=se({},kC);ag[cn]=se(se(se(se({},{duotone:"fad"}),ag[cn]),$E.kit),$E["kit-duotone"]);const YE=nc(ag),sg=se({},tg);sg[cn]=se(se({},sg[cn]),UC.kit);const ly=nc(sg),og=se({},FC);og[cn]=se(se({},og[cn]),LC.kit);nc(og);const JC=SC,kb="fa-layers-text",ex=RC,tx=se({},NC);nc(tx);const nx=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Rp=IC,rx=[...MC,...KC],ku=ba.FontAwesomeConfig||{};function ix(n){var e=ot.querySelector("script["+n+"]");if(e)return e.getAttribute(n)}function ax(n){return n===""?!0:n==="false"?!1:n==="true"?!0:n}ot&&typeof ot.querySelector=="function"&&[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]].forEach(e=>{let[t,i]=e;const s=ax(ix(t));s!=null&&(ku[i]=s)});const Pb={styleDefault:"solid",familyDefault:cn,cssPrefix:xb,replacementClass:Nb,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};ku.familyPrefix&&(ku.cssPrefix=ku.familyPrefix);const $o=se(se({},Pb),ku);$o.autoReplaceSvg||($o.observeMutations=!1);const de={};Object.keys(Pb).forEach(n=>{Object.defineProperty(de,n,{enumerable:!0,set:function(e){$o[n]=e,Pu.forEach(t=>t(de))},get:function(){return $o[n]}})});Object.defineProperty(de,"familyPrefix",{enumerable:!0,set:function(n){$o.cssPrefix=n,Pu.forEach(e=>e(de))},get:function(){return $o.cssPrefix}});ba.FontAwesomeConfig=de;const Pu=[];function sx(n){return Pu.push(n),()=>{Pu.splice(Pu.indexOf(n),1)}}const sa=rg,Or={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ox(n){if(!n||!xi)return;const e=ot.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=n;const t=ot.head.childNodes;let i=null;for(let s=t.length-1;s>-1;s--){const l=t[s],c=(l.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(c)>-1&&(i=l)}return ot.head.insertBefore(e,i),n}const lx="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function qu(){let n=12,e="";for(;n-- >0;)e+=lx[Math.random()*62|0];return e}function sl(n){const e=[];for(let t=(n||[]).length>>>0;t--;)e[t]=n[t];return e}function uy(n){return n.classList?sl(n.classList):(n.getAttribute("class")||"").split(" ").filter(e=>e)}function Mb(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function ux(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,'="').concat(Mb(n[t]),'" '),"").trim()}function zh(n){return Object.keys(n||{}).reduce((e,t)=>e+"".concat(t,": ").concat(n[t].trim(),";"),"")}function cy(n){return n.size!==Or.size||n.x!==Or.x||n.y!==Or.y||n.rotate!==Or.rotate||n.flipX||n.flipY}function cx(n){let{transform:e,containerWidth:t,iconWidth:i}=n;const s={transform:"translate(".concat(t/2," 256)")},l="translate(".concat(e.x*32,", ").concat(e.y*32,") "),c="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),d="rotate(".concat(e.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},g={transform:"translate(".concat(i/2*-1," -256)")};return{outer:s,inner:m,path:g}}function fx(n){let{transform:e,width:t=rg,height:i=rg,startCentered:s=!1}=n,l="";return s&&wb?l+="translate(".concat(e.x/sa-t/2,"em, ").concat(e.y/sa-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(e.x/sa,"em), calc(-50% + ").concat(e.y/sa,"em)) "):l+="translate(".concat(e.x/sa,"em, ").concat(e.y/sa,"em) "),l+="scale(".concat(e.size/sa*(e.flipX?-1:1),", ").concat(e.size/sa*(e.flipY?-1:1),") "),l+="rotate(".concat(e.rotate,"deg) "),l}var hx=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Free";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Free";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Pro";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Pro";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-regular: normal 400 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-light: normal 300 1em/1 "Font Awesome 6 Duotone";
  --fa-font-duotone-thin: normal 100 1em/1 "Font Awesome 6 Duotone";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-thin: normal 100 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-duotone-solid: normal 900 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-regular: normal 400 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-light: normal 300 1em/1 "Font Awesome 6 Sharp Duotone";
  --fa-font-sharp-duotone-thin: normal 100 1em/1 "Font Awesome 6 Sharp Duotone";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-counter-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  transform: scale(var(--fa-layers-scale, 0.25));
  transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(-1 * var(--fa-li-width, 2em));
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  animation-name: fa-beat;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  animation-name: fa-bounce;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  animation-name: fa-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  animation-name: fa-beat-fade;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  animation-name: fa-flip;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  animation-name: fa-shake;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  animation-name: fa-spin;
  animation-delay: var(--fa-animation-delay, 0s);
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 2s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  animation-name: fa-spin;
  animation-direction: var(--fa-animation-direction, normal);
  animation-duration: var(--fa-animation-duration, 1s);
  animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    animation-delay: -1ms;
    animation-duration: 1ms;
    animation-iteration-count: 1;
    transition-delay: 0s;
    transition-duration: 0s;
  }
}
@keyframes fa-beat {
  0%, 90% {
    transform: scale(1);
  }
  45% {
    transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-bounce {
  0% {
    transform: scale(1, 1) translateY(0);
  }
  10% {
    transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    transform: scale(1, 1) translateY(0);
  }
  100% {
    transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    transform: scale(1);
  }
  50% {
    opacity: 1;
    transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-flip {
  50% {
    transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-shake {
  0% {
    transform: rotate(-15deg);
  }
  4% {
    transform: rotate(15deg);
  }
  8%, 24% {
    transform: rotate(-18deg);
  }
  12%, 28% {
    transform: rotate(18deg);
  }
  16% {
    transform: rotate(-22deg);
  }
  20% {
    transform: rotate(22deg);
  }
  32% {
    transform: rotate(-12deg);
  }
  36% {
    transform: rotate(12deg);
  }
  40%, 100% {
    transform: rotate(0deg);
  }
}
@keyframes fa-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  transform: rotate(90deg);
}

.fa-rotate-180 {
  transform: rotate(180deg);
}

.fa-rotate-270 {
  transform: rotate(270deg);
}

.fa-flip-horizontal {
  transform: scale(-1, 1);
}

.fa-flip-vertical {
  transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  transform: scale(-1, -1);
}

.fa-rotate-by {
  transform: rotate(var(--fa-rotate-angle, 0));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}`;function Lb(){const n=xb,e=Nb,t=de.cssPrefix,i=de.replacementClass;let s=hx;if(t!==n||i!==e){const l=new RegExp("\\.".concat(n,"\\-"),"g"),c=new RegExp("\\--".concat(n,"\\-"),"g"),d=new RegExp("\\.".concat(e),"g");s=s.replace(l,".".concat(t,"-")).replace(c,"--".concat(t,"-")).replace(d,".".concat(i))}return s}let QE=!1;function Ip(){de.autoAddCss&&!QE&&(ox(Lb()),QE=!0)}var dx={mixout(){return{dom:{css:Lb,insertCss:Ip}}},hooks(){return{beforeDOMElementCreation(){Ip()},beforeI2svg(){Ip()}}}};const Ai=ba||{};Ai[bi]||(Ai[bi]={});Ai[bi].styles||(Ai[bi].styles={});Ai[bi].hooks||(Ai[bi].hooks={});Ai[bi].shims||(Ai[bi].shims=[]);var Dr=Ai[bi];const Vb=[],Ub=function(){ot.removeEventListener("DOMContentLoaded",Ub),hh=1,Vb.map(n=>n())};let hh=!1;xi&&(hh=(ot.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(ot.readyState),hh||ot.addEventListener("DOMContentLoaded",Ub));function mx(n){xi&&(hh?setTimeout(n,0):Vb.push(n))}function rc(n){const{tag:e,attributes:t={},children:i=[]}=n;return typeof n=="string"?Mb(n):"<".concat(e," ").concat(ux(t),">").concat(i.map(rc).join(""),"</").concat(e,">")}function XE(n,e,t){if(n&&n[e]&&n[e][t])return{prefix:e,iconName:t,icon:n[e][t]}}var Cp=function(e,t,i,s){var l=Object.keys(e),c=l.length,d=t,m,g,_;for(i===void 0?(m=1,_=e[l[0]]):(m=0,_=i);m<c;m++)g=l[m],_=d(_,e[g],g,e);return _};function px(n){const e=[];let t=0;const i=n.length;for(;t<i;){const s=n.charCodeAt(t++);if(s>=55296&&s<=56319&&t<i){const l=n.charCodeAt(t++);(l&64512)==56320?e.push(((s&1023)<<10)+(l&1023)+65536):(e.push(s),t--)}else e.push(s)}return e}function lg(n){const e=px(n);return e.length===1?e[0].toString(16):null}function gx(n,e){const t=n.length;let i=n.charCodeAt(e),s;return i>=55296&&i<=56319&&t>e+1&&(s=n.charCodeAt(e+1),s>=56320&&s<=57343)?(i-55296)*1024+s-56320+65536:i}function WE(n){return Object.keys(n).reduce((e,t)=>{const i=n[t];return!!i.icon?e[i.iconName]=i.icon:e[t]=i,e},{})}function ug(n,e){let t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const{skipHooks:i=!1}=t,s=WE(e);typeof Dr.hooks.addPack=="function"&&!i?Dr.hooks.addPack(n,WE(e)):Dr.styles[n]=se(se({},Dr.styles[n]||{}),s),n==="fas"&&ug("fa",e)}const{styles:Hu,shims:yx}=Dr,jb=Object.keys(ly),_x=jb.reduce((n,e)=>(n[e]=Object.keys(ly[e]),n),{});let fy=null,zb={},Bb={},Fb={},qb={},Hb={};function vx(n){return~rx.indexOf(n)}function Ex(n,e){const t=e.split("-"),i=t[0],s=t.slice(1).join("-");return i===n&&s!==""&&!vx(s)?s:null}const Gb=()=>{const n=i=>Cp(Hu,(s,l,c)=>(s[c]=Cp(l,i,{}),s),{});zb=n((i,s,l)=>(s[3]&&(i[s[3]]=l),s[2]&&s[2].filter(d=>typeof d=="number").forEach(d=>{i[d.toString(16)]=l}),i)),Bb=n((i,s,l)=>(i[l]=l,s[2]&&s[2].filter(d=>typeof d=="string").forEach(d=>{i[d]=l}),i)),Hb=n((i,s,l)=>{const c=s[2];return i[l]=l,c.forEach(d=>{i[d]=l}),i});const e="far"in Hu||de.autoFetchSvg,t=Cp(yx,(i,s)=>{const l=s[0];let c=s[1];const d=s[2];return c==="far"&&!e&&(c="fas"),typeof l=="string"&&(i.names[l]={prefix:c,iconName:d}),typeof l=="number"&&(i.unicodes[l.toString(16)]={prefix:c,iconName:d}),i},{names:{},unicodes:{}});Fb=t.names,qb=t.unicodes,fy=Bh(de.styleDefault,{family:de.familyDefault})};sx(n=>{fy=Bh(n.styleDefault,{family:de.familyDefault})});Gb();function hy(n,e){return(zb[n]||{})[e]}function Tx(n,e){return(Bb[n]||{})[e]}function vs(n,e){return(Hb[n]||{})[e]}function $b(n){return Fb[n]||{prefix:null,iconName:null}}function bx(n){const e=qb[n],t=hy("fas",n);return e||(t?{prefix:"fas",iconName:t}:null)||{prefix:null,iconName:null}}function Aa(){return fy}const Kb=()=>({prefix:null,iconName:null,rest:[]});function Ax(n){let e=cn;const t=jb.reduce((i,s)=>(i[s]="".concat(de.cssPrefix,"-").concat(s),i),{});return Ib.forEach(i=>{(n.includes(t[i])||n.some(s=>_x[i].includes(s)))&&(e=i)}),e}function Bh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{family:t=cn}=e,i=ZC[t][n];if(t===jh&&!n)return"fad";const s=YE[t][n]||YE[t][i],l=n in Dr.styles?n:null;return s||l||null}function wx(n){let e=[],t=null;return n.forEach(i=>{const s=Ex(de.cssPrefix,i);s?t=s:i&&e.push(i)}),{iconName:t,rest:e}}function ZE(n){return n.sort().filter((e,t,i)=>i.indexOf(e)===t)}function Fh(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{skipLookups:t=!1}=e;let i=null;const s=ng.concat(zC),l=ZE(n.filter(T=>s.includes(T))),c=ZE(n.filter(T=>!ng.includes(T))),d=l.filter(T=>(i=T,!Rb.includes(T))),[m=null]=d,g=Ax(l),_=se(se({},wx(c)),{},{prefix:Bh(m,{family:g})});return se(se(se({},_),Cx({values:n,family:g,styles:Hu,config:de,canonical:_,givenPrefix:i})),Sx(t,i,_))}function Sx(n,e,t){let{prefix:i,iconName:s}=t;if(n||!i||!s)return{prefix:i,iconName:s};const l=e==="fa"?$b(s):{},c=vs(i,s);return s=l.iconName||c||s,i=l.prefix||i,i==="far"&&!Hu.far&&Hu.fas&&!de.autoFetchSvg&&(i="fas"),{prefix:i,iconName:s}}const Rx=Ib.filter(n=>n!==cn||n!==jh),Ix=Object.keys(tg).filter(n=>n!==cn).map(n=>Object.keys(tg[n])).flat();function Cx(n){const{values:e,family:t,canonical:i,givenPrefix:s="",styles:l={},config:c={}}=n,d=t===jh,m=e.includes("fa-duotone")||e.includes("fad"),g=c.familyDefault==="duotone",_=i.prefix==="fad"||i.prefix==="fa-duotone";if(!d&&(m||g||_)&&(i.prefix="fad"),(e.includes("fa-brands")||e.includes("fab"))&&(i.prefix="fab"),!i.prefix&&Rx.includes(t)&&(Object.keys(l).find(w=>Ix.includes(w))||c.autoFetchSvg)){const w=DC.get(t).defaultShortPrefixId;i.prefix=w,i.iconName=vs(i.prefix,i.iconName)||i.iconName}return(i.prefix==="fa"||s==="fa")&&(i.prefix=Aa()||"fas"),i}class xx{constructor(){this.definitions={}}add(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];const s=t.reduce(this._pullDefinitions,{});Object.keys(s).forEach(l=>{this.definitions[l]=se(se({},this.definitions[l]||{}),s[l]),ug(l,s[l]);const c=ly[cn][l];c&&ug(c,s[l]),Gb()})}reset(){this.definitions={}}_pullDefinitions(e,t){const i=t.prefix&&t.iconName&&t.icon?{0:t}:t;return Object.keys(i).map(s=>{const{prefix:l,iconName:c,icon:d}=i[s],m=d[2];e[l]||(e[l]={}),m.length>0&&m.forEach(g=>{typeof g=="string"&&(e[l][g]=d)}),e[l][c]=d}),e}}let JE=[],Vo={};const Bo={},Nx=Object.keys(Bo);function Ox(n,e){let{mixoutsTo:t}=e;return JE=n,Vo={},Object.keys(Bo).forEach(i=>{Nx.indexOf(i)===-1&&delete Bo[i]}),JE.forEach(i=>{const s=i.mixout?i.mixout():{};if(Object.keys(s).forEach(l=>{typeof s[l]=="function"&&(t[l]=s[l]),typeof s[l]=="object"&&Object.keys(s[l]).forEach(c=>{t[l]||(t[l]={}),t[l][c]=s[l][c]})}),i.hooks){const l=i.hooks();Object.keys(l).forEach(c=>{Vo[c]||(Vo[c]=[]),Vo[c].push(l[c])})}i.provides&&i.provides(Bo)}),t}function cg(n,e){for(var t=arguments.length,i=new Array(t>2?t-2:0),s=2;s<t;s++)i[s-2]=arguments[s];return(Vo[n]||[]).forEach(c=>{e=c.apply(null,[e,...i])}),e}function ws(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];(Vo[n]||[]).forEach(l=>{l.apply(null,t)})}function wa(){const n=arguments[0],e=Array.prototype.slice.call(arguments,1);return Bo[n]?Bo[n].apply(null,e):void 0}function fg(n){n.prefix==="fa"&&(n.prefix="fas");let{iconName:e}=n;const t=n.prefix||Aa();if(e)return e=vs(t,e)||e,XE(Yb.definitions,t,e)||XE(Dr.styles,t,e)}const Yb=new xx,Dx=()=>{de.autoReplaceSvg=!1,de.observeMutations=!1,ws("noAuto")},kx={i2svg:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return xi?(ws("beforeI2svg",n),wa("pseudoElements2svg",n),wa("i2svg",n)):Promise.reject(new Error("Operation requires a DOM of some kind."))},watch:function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e}=n;de.autoReplaceSvg===!1&&(de.autoReplaceSvg=!0),de.observeMutations=!0,mx(()=>{Mx({autoReplaceSvgRoot:e}),ws("watch",n)})}},Px={icon:n=>{if(n===null)return null;if(typeof n=="object"&&n.prefix&&n.iconName)return{prefix:n.prefix,iconName:vs(n.prefix,n.iconName)||n.iconName};if(Array.isArray(n)&&n.length===2){const e=n[1].indexOf("fa-")===0?n[1].slice(3):n[1],t=Bh(n[0]);return{prefix:t,iconName:vs(t,e)||e}}if(typeof n=="string"&&(n.indexOf("".concat(de.cssPrefix,"-"))>-1||n.match(JC))){const e=Fh(n.split(" "),{skipLookups:!0});return{prefix:e.prefix||Aa(),iconName:vs(e.prefix,e.iconName)||e.iconName}}if(typeof n=="string"){const e=Aa();return{prefix:e,iconName:vs(e,n)||n}}}},Un={noAuto:Dx,config:de,dom:kx,parse:Px,library:Yb,findIconDefinition:fg,toHtml:rc},Mx=function(){let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{autoReplaceSvgRoot:e=ot}=n;(Object.keys(Dr.styles).length>0||de.autoFetchSvg)&&xi&&de.autoReplaceSvg&&Un.dom.i2svg({node:e})};function qh(n,e){return Object.defineProperty(n,"abstract",{get:e}),Object.defineProperty(n,"html",{get:function(){return n.abstract.map(t=>rc(t))}}),Object.defineProperty(n,"node",{get:function(){if(!xi)return;const t=ot.createElement("div");return t.innerHTML=n.html,t.children}}),n}function Lx(n){let{children:e,main:t,mask:i,attributes:s,styles:l,transform:c}=n;if(cy(c)&&t.found&&!i.found){const{width:d,height:m}=t,g={x:d/m/2,y:.5};s.style=zh(se(se({},l),{},{"transform-origin":"".concat(g.x+c.x/16,"em ").concat(g.y+c.y/16,"em")}))}return[{tag:"svg",attributes:s,children:e}]}function Vx(n){let{prefix:e,iconName:t,children:i,attributes:s,symbol:l}=n;const c=l===!0?"".concat(e,"-").concat(de.cssPrefix,"-").concat(t):l;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:se(se({},s),{},{id:c}),children:i}]}]}function dy(n){const{icons:{main:e,mask:t},prefix:i,iconName:s,transform:l,symbol:c,title:d,maskId:m,titleId:g,extra:_,watchable:T=!1}=n,{width:w,height:x}=t.found?t:e,D=VC.includes(i),H=[de.replacementClass,s?"".concat(de.cssPrefix,"-").concat(s):""].filter(ae=>_.classes.indexOf(ae)===-1).filter(ae=>ae!==""||!!ae).concat(_.classes).join(" ");let L={children:[],attributes:se(se({},_.attributes),{},{"data-prefix":i,"data-icon":s,class:H,role:_.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(w," ").concat(x)})};const $=D&&!~_.classes.indexOf("fa-fw")?{width:"".concat(w/x*16*.0625,"em")}:{};T&&(L.attributes[As]=""),d&&(L.children.push({tag:"title",attributes:{id:L.attributes["aria-labelledby"]||"title-".concat(g||qu())},children:[d]}),delete L.attributes.title);const Z=se(se({},L),{},{prefix:i,iconName:s,main:e,mask:t,maskId:m,transform:l,symbol:c,styles:se(se({},$),_.styles)}),{children:Q,attributes:re}=t.found&&e.found?wa("generateAbstractMask",Z)||{children:[],attributes:{}}:wa("generateAbstractIcon",Z)||{children:[],attributes:{}};return Z.children=Q,Z.attributes=re,c?Vx(Z):Lx(Z)}function eT(n){const{content:e,width:t,height:i,transform:s,title:l,extra:c,watchable:d=!1}=n,m=se(se(se({},c.attributes),l?{title:l}:{}),{},{class:c.classes.join(" ")});d&&(m[As]="");const g=se({},c.styles);cy(s)&&(g.transform=fx({transform:s,startCentered:!0,width:t,height:i}),g["-webkit-transform"]=g.transform);const _=zh(g);_.length>0&&(m.style=_);const T=[];return T.push({tag:"span",attributes:m,children:[e]}),l&&T.push({tag:"span",attributes:{class:"sr-only"},children:[l]}),T}function Ux(n){const{content:e,title:t,extra:i}=n,s=se(se(se({},i.attributes),t?{title:t}:{}),{},{class:i.classes.join(" ")}),l=zh(i.styles);l.length>0&&(s.style=l);const c=[];return c.push({tag:"span",attributes:s,children:[e]}),t&&c.push({tag:"span",attributes:{class:"sr-only"},children:[t]}),c}const{styles:xp}=Dr;function hg(n){const e=n[0],t=n[1],[i]=n.slice(4);let s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(de.cssPrefix,"-").concat(Rp.GROUP)},children:[{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Rp.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(de.cssPrefix,"-").concat(Rp.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:t,icon:s}}const jx={found:!1,width:512,height:512};function zx(n,e){!Ob&&!de.showMissingIcons&&n&&console.error('Icon with name "'.concat(n,'" and prefix "').concat(e,'" is missing.'))}function dg(n,e){let t=e;return e==="fa"&&de.styleDefault!==null&&(e=Aa()),new Promise((i,s)=>{if(t==="fa"){const l=$b(n)||{};n=l.iconName||n,e=l.prefix||e}if(n&&e&&xp[e]&&xp[e][n]){const l=xp[e][n];return i(hg(l))}zx(n,e),i(se(se({},jx),{},{icon:de.showMissingIcons&&n?wa("missingIconAbstract")||{}:{}}))})}const tT=()=>{},mg=de.measurePerformance&&jf&&jf.mark&&jf.measure?jf:{mark:tT,measure:tT},Ru='FA "6.7.2"',Bx=n=>(mg.mark("".concat(Ru," ").concat(n," begins")),()=>Qb(n)),Qb=n=>{mg.mark("".concat(Ru," ").concat(n," ends")),mg.measure("".concat(Ru," ").concat(n),"".concat(Ru," ").concat(n," begins"),"".concat(Ru," ").concat(n," ends"))};var my={begin:Bx,end:Qb};const Jf=()=>{};function nT(n){return typeof(n.getAttribute?n.getAttribute(As):null)=="string"}function Fx(n){const e=n.getAttribute?n.getAttribute(sy):null,t=n.getAttribute?n.getAttribute(oy):null;return e&&t}function qx(n){return n&&n.classList&&n.classList.contains&&n.classList.contains(de.replacementClass)}function Hx(){return de.autoReplaceSvg===!0?eh.replace:eh[de.autoReplaceSvg]||eh.replace}function Gx(n){return ot.createElementNS("http://www.w3.org/2000/svg",n)}function $x(n){return ot.createElement(n)}function Xb(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{ceFn:t=n.tag==="svg"?Gx:$x}=e;if(typeof n=="string")return ot.createTextNode(n);const i=t(n.tag);return Object.keys(n.attributes||[]).forEach(function(l){i.setAttribute(l,n.attributes[l])}),(n.children||[]).forEach(function(l){i.appendChild(Xb(l,{ceFn:t}))}),i}function Kx(n){let e=" ".concat(n.outerHTML," ");return e="".concat(e,"Font Awesome fontawesome.com "),e}const eh={replace:function(n){const e=n[0];if(e.parentNode)if(n[1].forEach(t=>{e.parentNode.insertBefore(Xb(t),e)}),e.getAttribute(As)===null&&de.keepOriginalSource){let t=ot.createComment(Kx(e));e.parentNode.replaceChild(t,e)}else e.remove()},nest:function(n){const e=n[0],t=n[1];if(~uy(e).indexOf(de.replacementClass))return eh.replace(n);const i=new RegExp("".concat(de.cssPrefix,"-.*"));if(delete t[0].attributes.id,t[0].attributes.class){const l=t[0].attributes.class.split(" ").reduce((c,d)=>(d===de.replacementClass||d.match(i)?c.toSvg.push(d):c.toNode.push(d),c),{toNode:[],toSvg:[]});t[0].attributes.class=l.toSvg.join(" "),l.toNode.length===0?e.removeAttribute("class"):e.setAttribute("class",l.toNode.join(" "))}const s=t.map(l=>rc(l)).join(`
`);e.setAttribute(As,""),e.innerHTML=s}};function rT(n){n()}function Wb(n,e){const t=typeof e=="function"?e:Jf;if(n.length===0)t();else{let i=rT;de.mutateApproach===XC&&(i=ba.requestAnimationFrame||rT),i(()=>{const s=Hx(),l=my.begin("mutate");n.map(s),l(),t()})}}let py=!1;function Zb(){py=!0}function pg(){py=!1}let dh=null;function iT(n){if(!HE||!de.observeMutations)return;const{treeCallback:e=Jf,nodeCallback:t=Jf,pseudoElementsCallback:i=Jf,observeMutationsRoot:s=ot}=n;dh=new HE(l=>{if(py)return;const c=Aa();sl(l).forEach(d=>{if(d.type==="childList"&&d.addedNodes.length>0&&!nT(d.addedNodes[0])&&(de.searchPseudoElements&&i(d.target),e(d.target)),d.type==="attributes"&&d.target.parentNode&&de.searchPseudoElements&&i(d.target.parentNode),d.type==="attributes"&&nT(d.target)&&~nx.indexOf(d.attributeName))if(d.attributeName==="class"&&Fx(d.target)){const{prefix:m,iconName:g}=Fh(uy(d.target));d.target.setAttribute(sy,m||c),g&&d.target.setAttribute(oy,g)}else qx(d.target)&&t(d.target)})}),xi&&dh.observe(s,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}function Yx(){dh&&dh.disconnect()}function Qx(n){const e=n.getAttribute("style");let t=[];return e&&(t=e.split(";").reduce((i,s)=>{const l=s.split(":"),c=l[0],d=l.slice(1);return c&&d.length>0&&(i[c]=d.join(":").trim()),i},{})),t}function Xx(n){const e=n.getAttribute("data-prefix"),t=n.getAttribute("data-icon"),i=n.innerText!==void 0?n.innerText.trim():"";let s=Fh(uy(n));return s.prefix||(s.prefix=Aa()),e&&t&&(s.prefix=e,s.iconName=t),s.iconName&&s.prefix||(s.prefix&&i.length>0&&(s.iconName=Tx(s.prefix,n.innerText)||hy(s.prefix,lg(n.innerText))),!s.iconName&&de.autoFetchSvg&&n.firstChild&&n.firstChild.nodeType===Node.TEXT_NODE&&(s.iconName=n.firstChild.data)),s}function Wx(n){const e=sl(n.attributes).reduce((s,l)=>(s.name!=="class"&&s.name!=="style"&&(s[l.name]=l.value),s),{}),t=n.getAttribute("title"),i=n.getAttribute("data-fa-title-id");return de.autoA11y&&(t?e["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(i||qu()):(e["aria-hidden"]="true",e.focusable="false")),e}function Zx(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Or,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function aT(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0};const{iconName:t,prefix:i,rest:s}=Xx(n),l=Wx(n),c=cg("parseNodeAttributes",{},n);let d=e.styleParser?Qx(n):[];return se({iconName:t,title:n.getAttribute("title"),titleId:n.getAttribute("data-fa-title-id"),prefix:i,transform:Or,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:d,attributes:l}},c)}const{styles:Jx}=Dr;function Jb(n){const e=de.autoReplaceSvg==="nest"?aT(n,{styleParser:!1}):aT(n);return~e.extra.classes.indexOf(kb)?wa("generateLayersText",n,e):wa("generateSvgReplacementMutation",n,e)}function eN(){return[...PC,...ng]}function sT(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!xi)return Promise.resolve();const t=ot.documentElement.classList,i=_=>t.add("".concat(KE,"-").concat(_)),s=_=>t.remove("".concat(KE,"-").concat(_)),l=de.autoFetchSvg?eN():Rb.concat(Object.keys(Jx));l.includes("fa")||l.push("fa");const c=[".".concat(kb,":not([").concat(As,"])")].concat(l.map(_=>".".concat(_,":not([").concat(As,"])"))).join(", ");if(c.length===0)return Promise.resolve();let d=[];try{d=sl(n.querySelectorAll(c))}catch{}if(d.length>0)i("pending"),s("complete");else return Promise.resolve();const m=my.begin("onTree"),g=d.reduce((_,T)=>{try{const w=Jb(T);w&&_.push(w)}catch(w){Ob||w.name==="MissingIcon"&&console.error(w)}return _},[]);return new Promise((_,T)=>{Promise.all(g).then(w=>{Wb(w,()=>{i("active"),i("complete"),s("pending"),typeof e=="function"&&e(),m(),_()})}).catch(w=>{m(),T(w)})})}function tN(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Jb(n).then(t=>{t&&Wb([t],e)})}function nN(n){return function(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=(e||{}).icon?e:fg(e||{});let{mask:s}=t;return s&&(s=(s||{}).icon?s:fg(s||{})),n(i,se(se({},t),{},{mask:s}))}}const rN=function(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Or,symbol:i=!1,mask:s=null,maskId:l=null,title:c=null,titleId:d=null,classes:m=[],attributes:g={},styles:_={}}=e;if(!n)return;const{prefix:T,iconName:w,icon:x}=n;return qh(se({type:"icon"},n),()=>(ws("beforeDOMElementCreation",{iconDefinition:n,params:e}),de.autoA11y&&(c?g["aria-labelledby"]="".concat(de.replacementClass,"-title-").concat(d||qu()):(g["aria-hidden"]="true",g.focusable="false")),dy({icons:{main:hg(x),mask:s?hg(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:T,iconName:w,transform:se(se({},Or),t),symbol:i,title:c,maskId:l,titleId:d,extra:{attributes:g,styles:_,classes:m}})))};var iN={mixout(){return{icon:nN(rN)}},hooks(){return{mutationObserverCallbacks(n){return n.treeCallback=sT,n.nodeCallback=tN,n}}},provides(n){n.i2svg=function(e){const{node:t=ot,callback:i=()=>{}}=e;return sT(t,i)},n.generateSvgReplacementMutation=function(e,t){const{iconName:i,title:s,titleId:l,prefix:c,transform:d,symbol:m,mask:g,maskId:_,extra:T}=t;return new Promise((w,x)=>{Promise.all([dg(i,c),g.iconName?dg(g.iconName,g.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(D=>{let[H,L]=D;w([e,dy({icons:{main:H,mask:L},prefix:c,iconName:i,transform:d,symbol:m,maskId:_,title:s,titleId:l,extra:T,watchable:!0})])}).catch(x)})},n.generateAbstractIcon=function(e){let{children:t,attributes:i,main:s,transform:l,styles:c}=e;const d=zh(c);d.length>0&&(i.style=d);let m;return cy(l)&&(m=wa("generateAbstractTransformGrouping",{main:s,transform:l,containerWidth:s.width,iconWidth:s.width})),t.push(m||s.icon),{children:t,attributes:i}}}},aN={mixout(){return{layer(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{classes:t=[]}=e;return qh({type:"layer"},()=>{ws("beforeDOMElementCreation",{assembler:n,params:e});let i=[];return n(s=>{Array.isArray(s)?s.map(l=>{i=i.concat(l.abstract)}):i=i.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(de.cssPrefix,"-layers"),...t].join(" ")},children:i}]})}}}},sN={mixout(){return{counter(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{title:t=null,classes:i=[],attributes:s={},styles:l={}}=e;return qh({type:"counter",content:n},()=>(ws("beforeDOMElementCreation",{content:n,params:e}),Ux({content:n.toString(),title:t,extra:{attributes:s,styles:l,classes:["".concat(de.cssPrefix,"-layers-counter"),...i]}})))}}}},oN={mixout(){return{text(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const{transform:t=Or,title:i=null,classes:s=[],attributes:l={},styles:c={}}=e;return qh({type:"text",content:n},()=>(ws("beforeDOMElementCreation",{content:n,params:e}),eT({content:n,transform:se(se({},Or),t),title:i,extra:{attributes:l,styles:c,classes:["".concat(de.cssPrefix,"-layers-text"),...s]}})))}}},provides(n){n.generateLayersText=function(e,t){const{title:i,transform:s,extra:l}=t;let c=null,d=null;if(wb){const m=parseInt(getComputedStyle(e).fontSize,10),g=e.getBoundingClientRect();c=g.width/m,d=g.height/m}return de.autoA11y&&!i&&(l.attributes["aria-hidden"]="true"),Promise.resolve([e,eT({content:e.innerHTML,width:c,height:d,transform:s,title:i,extra:l,watchable:!0})])}}};const lN=new RegExp('"',"ug"),oT=[1105920,1112319],lT=se(se(se(se({},{FontAwesome:{normal:"fas",400:"fas"}}),OC),YC),BC),gg=Object.keys(lT).reduce((n,e)=>(n[e.toLowerCase()]=lT[e],n),{}),uN=Object.keys(gg).reduce((n,e)=>{const t=gg[e];return n[e]=t[900]||[...Object.entries(t)][0][1],n},{});function cN(n){const e=n.replace(lN,""),t=gx(e,0),i=t>=oT[0]&&t<=oT[1],s=e.length===2?e[0]===e[1]:!1;return{value:lg(s?e[0]:e),isSecondary:i||s}}function fN(n,e){const t=n.replace(/^['"]|['"]$/g,"").toLowerCase(),i=parseInt(e),s=isNaN(i)?"normal":i;return(gg[t]||{})[s]||uN[t]}function uT(n,e){const t="".concat(QC).concat(e.replace(":","-"));return new Promise((i,s)=>{if(n.getAttribute(t)!==null)return i();const c=sl(n.children).filter(w=>w.getAttribute(ig)===e)[0],d=ba.getComputedStyle(n,e),m=d.getPropertyValue("font-family"),g=m.match(ex),_=d.getPropertyValue("font-weight"),T=d.getPropertyValue("content");if(c&&!g)return n.removeChild(c),i();if(g&&T!=="none"&&T!==""){const w=d.getPropertyValue("content");let x=fN(m,_);const{value:D,isSecondary:H}=cN(w),L=g[0].startsWith("FontAwesome");let $=hy(x,D),Z=$;if(L){const Q=bx(D);Q.iconName&&Q.prefix&&($=Q.iconName,x=Q.prefix)}if($&&!H&&(!c||c.getAttribute(sy)!==x||c.getAttribute(oy)!==Z)){n.setAttribute(t,Z),c&&n.removeChild(c);const Q=Zx(),{extra:re}=Q;re.attributes[ig]=e,dg($,x).then(ae=>{const ge=dy(se(se({},Q),{},{icons:{main:ae,mask:Kb()},prefix:x,iconName:Z,extra:re,watchable:!0})),O=ot.createElementNS("http://www.w3.org/2000/svg","svg");e==="::before"?n.insertBefore(O,n.firstChild):n.appendChild(O),O.outerHTML=ge.map(R=>rc(R)).join(`
`),n.removeAttribute(t),i()}).catch(s)}else i()}else i()})}function hN(n){return Promise.all([uT(n,"::before"),uT(n,"::after")])}function dN(n){return n.parentNode!==document.head&&!~WC.indexOf(n.tagName.toUpperCase())&&!n.getAttribute(ig)&&(!n.parentNode||n.parentNode.tagName!=="svg")}function cT(n){if(xi)return new Promise((e,t)=>{const i=sl(n.querySelectorAll("*")).filter(dN).map(hN),s=my.begin("searchPseudoElements");Zb(),Promise.all(i).then(()=>{s(),pg(),e()}).catch(()=>{s(),pg(),t()})})}var mN={hooks(){return{mutationObserverCallbacks(n){return n.pseudoElementsCallback=cT,n}}},provides(n){n.pseudoElements2svg=function(e){const{node:t=ot}=e;de.searchPseudoElements&&cT(t)}}};let fT=!1;var pN={mixout(){return{dom:{unwatch(){Zb(),fT=!0}}}},hooks(){return{bootstrap(){iT(cg("mutationObserverCallbacks",{}))},noAuto(){Yx()},watch(n){const{observeMutationsRoot:e}=n;fT?pg():iT(cg("mutationObserverCallbacks",{observeMutationsRoot:e}))}}}};const hT=n=>{let e={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return n.toLowerCase().split(" ").reduce((t,i)=>{const s=i.toLowerCase().split("-"),l=s[0];let c=s.slice(1).join("-");if(l&&c==="h")return t.flipX=!0,t;if(l&&c==="v")return t.flipY=!0,t;if(c=parseFloat(c),isNaN(c))return t;switch(l){case"grow":t.size=t.size+c;break;case"shrink":t.size=t.size-c;break;case"left":t.x=t.x-c;break;case"right":t.x=t.x+c;break;case"up":t.y=t.y-c;break;case"down":t.y=t.y+c;break;case"rotate":t.rotate=t.rotate+c;break}return t},e)};var gN={mixout(){return{parse:{transform:n=>hT(n)}}},hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-transform");return t&&(n.transform=hT(t)),n}}},provides(n){n.generateAbstractTransformGrouping=function(e){let{main:t,transform:i,containerWidth:s,iconWidth:l}=e;const c={transform:"translate(".concat(s/2," 256)")},d="translate(".concat(i.x*32,", ").concat(i.y*32,") "),m="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),g="rotate(".concat(i.rotate," 0 0)"),_={transform:"".concat(d," ").concat(m," ").concat(g)},T={transform:"translate(".concat(l/2*-1," -256)")},w={outer:c,inner:_,path:T};return{tag:"g",attributes:se({},w.outer),children:[{tag:"g",attributes:se({},w.inner),children:[{tag:t.icon.tag,children:t.icon.children,attributes:se(se({},t.icon.attributes),w.path)}]}]}}}};const Np={x:0,y:0,width:"100%",height:"100%"};function dT(n){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return n.attributes&&(n.attributes.fill||e)&&(n.attributes.fill="black"),n}function yN(n){return n.tag==="g"?n.children:[n]}var _N={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-mask"),i=t?Fh(t.split(" ").map(s=>s.trim())):Kb();return i.prefix||(i.prefix=Aa()),n.mask=i,n.maskId=e.getAttribute("data-fa-mask-id"),n}}},provides(n){n.generateAbstractMask=function(e){let{children:t,attributes:i,main:s,mask:l,maskId:c,transform:d}=e;const{width:m,icon:g}=s,{width:_,icon:T}=l,w=cx({transform:d,containerWidth:_,iconWidth:m}),x={tag:"rect",attributes:se(se({},Np),{},{fill:"white"})},D=g.children?{children:g.children.map(dT)}:{},H={tag:"g",attributes:se({},w.inner),children:[dT(se({tag:g.tag,attributes:se(se({},g.attributes),w.path)},D))]},L={tag:"g",attributes:se({},w.outer),children:[H]},$="mask-".concat(c||qu()),Z="clip-".concat(c||qu()),Q={tag:"mask",attributes:se(se({},Np),{},{id:$,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[x,L]},re={tag:"defs",children:[{tag:"clipPath",attributes:{id:Z},children:yN(T)},Q]};return t.push(re,{tag:"rect",attributes:se({fill:"currentColor","clip-path":"url(#".concat(Z,")"),mask:"url(#".concat($,")")},Np)}),{children:t,attributes:i}}}},vN={provides(n){let e=!1;ba.matchMedia&&(e=ba.matchMedia("(prefers-reduced-motion: reduce)").matches),n.missingIconAbstract=function(){const t=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};t.push({tag:"path",attributes:se(se({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});const l=se(se({},s),{},{attributeName:"opacity"}),c={tag:"circle",attributes:se(se({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return e||c.children.push({tag:"animate",attributes:se(se({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:se(se({},l),{},{values:"1;0;1;1;0;1;"})}),t.push(c),t.push({tag:"path",attributes:se(se({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:e?[]:[{tag:"animate",attributes:se(se({},l),{},{values:"1;0;0;0;0;1;"})}]}),e||t.push({tag:"path",attributes:se(se({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:se(se({},l),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:t}}}},EN={hooks(){return{parseNodeAttributes(n,e){const t=e.getAttribute("data-fa-symbol"),i=t===null?!1:t===""?!0:t;return n.symbol=i,n}}}},TN=[dx,iN,aN,sN,oN,mN,pN,gN,_N,vN,EN];Ox(TN,{mixoutsTo:Un});Un.noAuto;Un.config;Un.library;Un.dom;const yg=Un.parse;Un.findIconDefinition;Un.toHtml;const bN=Un.icon;Un.layer;Un.text;Un.counter;var Op={exports:{}},Dp,mT;function AN(){if(mT)return Dp;mT=1;var n="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return Dp=n,Dp}var kp,pT;function wN(){if(pT)return kp;pT=1;var n=AN();function e(){}function t(){}return t.resetWarningCache=e,kp=function(){function i(c,d,m,g,_,T){if(T!==n){var w=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw w.name="Invariant Violation",w}}i.isRequired=i;function s(){return i}var l={array:i,bigint:i,bool:i,func:i,number:i,object:i,string:i,symbol:i,any:i,arrayOf:s,element:i,elementType:i,instanceOf:s,node:i,objectOf:s,oneOf:s,oneOfType:s,shape:s,exact:s,checkPropTypes:t,resetWarningCache:e};return l.PropTypes=l,l},kp}var gT;function SN(){return gT||(gT=1,Op.exports=wN()()),Op.exports}var RN=SN();const Le=Qg(RN);function yT(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter(function(s){return Object.getOwnPropertyDescriptor(n,s).enumerable})),t.push.apply(t,i)}return t}function Nr(n){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?yT(Object(t),!0).forEach(function(i){Uo(n,i,t[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):yT(Object(t)).forEach(function(i){Object.defineProperty(n,i,Object.getOwnPropertyDescriptor(t,i))})}return n}function mh(n){"@babel/helpers - typeof";return mh=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},mh(n)}function Uo(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function IN(n,e){if(n==null)return{};var t={},i=Object.keys(n),s,l;for(l=0;l<i.length;l++)s=i[l],!(e.indexOf(s)>=0)&&(t[s]=n[s]);return t}function CN(n,e){if(n==null)return{};var t=IN(n,e),i,s;if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(n);for(s=0;s<l.length;s++)i=l[s],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(n,i)&&(t[i]=n[i])}return t}function _g(n){return xN(n)||NN(n)||ON(n)||DN()}function xN(n){if(Array.isArray(n))return vg(n)}function NN(n){if(typeof Symbol<"u"&&n[Symbol.iterator]!=null||n["@@iterator"]!=null)return Array.from(n)}function ON(n,e){if(n){if(typeof n=="string")return vg(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);if(t==="Object"&&n.constructor&&(t=n.constructor.name),t==="Map"||t==="Set")return Array.from(n);if(t==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return vg(n,e)}}function vg(n,e){(e==null||e>n.length)&&(e=n.length);for(var t=0,i=new Array(e);t<e;t++)i[t]=n[t];return i}function DN(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function kN(n){var e,t=n.beat,i=n.fade,s=n.beatFade,l=n.bounce,c=n.shake,d=n.flash,m=n.spin,g=n.spinPulse,_=n.spinReverse,T=n.pulse,w=n.fixedWidth,x=n.inverse,D=n.border,H=n.listItem,L=n.flip,$=n.size,Z=n.rotation,Q=n.pull,re=(e={"fa-beat":t,"fa-fade":i,"fa-beat-fade":s,"fa-bounce":l,"fa-shake":c,"fa-flash":d,"fa-spin":m,"fa-spin-reverse":_,"fa-spin-pulse":g,"fa-pulse":T,"fa-fw":w,"fa-inverse":x,"fa-border":D,"fa-li":H,"fa-flip":L===!0,"fa-flip-horizontal":L==="horizontal"||L==="both","fa-flip-vertical":L==="vertical"||L==="both"},Uo(e,"fa-".concat($),typeof $<"u"&&$!==null),Uo(e,"fa-rotate-".concat(Z),typeof Z<"u"&&Z!==null&&Z!==0),Uo(e,"fa-pull-".concat(Q),typeof Q<"u"&&Q!==null),Uo(e,"fa-swap-opacity",n.swapOpacity),e);return Object.keys(re).map(function(ae){return re[ae]?ae:null}).filter(function(ae){return ae})}function PN(n){return n=n-0,n===n}function eA(n){return PN(n)?n:(n=n.replace(/[\-_\s]+(.)?/g,function(e,t){return t?t.toUpperCase():""}),n.substr(0,1).toLowerCase()+n.substr(1))}var MN=["style"];function LN(n){return n.charAt(0).toUpperCase()+n.slice(1)}function VN(n){return n.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,t){var i=t.indexOf(":"),s=eA(t.slice(0,i)),l=t.slice(i+1).trim();return s.startsWith("webkit")?e[LN(s)]=l:e[s]=l,e},{})}function tA(n,e){var t=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var i=(e.children||[]).map(function(m){return tA(n,m)}),s=Object.keys(e.attributes||{}).reduce(function(m,g){var _=e.attributes[g];switch(g){case"class":m.attrs.className=_,delete e.attributes.class;break;case"style":m.attrs.style=VN(_);break;default:g.indexOf("aria-")===0||g.indexOf("data-")===0?m.attrs[g.toLowerCase()]=_:m.attrs[eA(g)]=_}return m},{attrs:{}}),l=t.style,c=l===void 0?{}:l,d=CN(t,MN);return s.attrs.style=Nr(Nr({},s.attrs.style),c),n.apply(void 0,[e.tag,Nr(Nr({},s.attrs),d)].concat(_g(i)))}var nA=!1;try{nA=!0}catch{}function UN(){if(!nA&&console&&typeof console.error=="function"){var n;(n=console).error.apply(n,arguments)}}function _T(n){if(n&&mh(n)==="object"&&n.prefix&&n.iconName&&n.icon)return n;if(yg.icon)return yg.icon(n);if(n===null)return null;if(n&&mh(n)==="object"&&n.prefix&&n.iconName)return n;if(Array.isArray(n)&&n.length===2)return{prefix:n[0],iconName:n[1]};if(typeof n=="string")return{prefix:"fas",iconName:n}}function Pp(n,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?Uo({},n,e):{}}var vT={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1},un=Wg.forwardRef(function(n,e){var t=Nr(Nr({},vT),n),i=t.icon,s=t.mask,l=t.symbol,c=t.className,d=t.title,m=t.titleId,g=t.maskId,_=_T(i),T=Pp("classes",[].concat(_g(kN(t)),_g((c||"").split(" ")))),w=Pp("transform",typeof t.transform=="string"?yg.transform(t.transform):t.transform),x=Pp("mask",_T(s)),D=bN(_,Nr(Nr(Nr(Nr({},T),w),x),{},{symbol:l,title:d,titleId:m,maskId:g}));if(!D)return UN("Could not find icon",_),null;var H=D.abstract,L={ref:e};return Object.keys(t).forEach(function($){vT.hasOwnProperty($)||(L[$]=t[$])}),jN(H[0],L)});un.displayName="FontAwesomeIcon";un.propTypes={beat:Le.bool,border:Le.bool,beatFade:Le.bool,bounce:Le.bool,className:Le.string,fade:Le.bool,flash:Le.bool,mask:Le.oneOfType([Le.object,Le.array,Le.string]),maskId:Le.string,fixedWidth:Le.bool,inverse:Le.bool,flip:Le.oneOf([!0,!1,"horizontal","vertical","both"]),icon:Le.oneOfType([Le.object,Le.array,Le.string]),listItem:Le.bool,pull:Le.oneOf(["right","left"]),pulse:Le.bool,rotation:Le.oneOf([0,90,180,270]),shake:Le.bool,size:Le.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:Le.bool,spinPulse:Le.bool,spinReverse:Le.bool,symbol:Le.oneOfType([Le.bool,Le.string]),title:Le.string,titleId:Le.string,transform:Le.oneOfType([Le.string,Le.object]),swapOpacity:Le.bool};var jN=tA.bind(null,Wg.createElement);/*!
 * Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 * Copyright 2024 Fonticons, Inc.
 */const zN={prefix:"fas",iconName:"right-from-bracket",icon:[512,512,["sign-out-alt"],"f2f5","M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"]},BN=zN,FN={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 128C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32l384 0c17.7 0 32 14.3 32 32s-14.3 32-32 32L32 288c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32L32 448c-17.7 0-32-14.3-32-32s14.3-32 32-32l384 0c17.7 0 32 14.3 32 32z"]},rA={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"]},qN={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},HN=qN,GN={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256l0 40c0 13.3-10.7 24-24 24s-24-10.7-24-24l0-40C0 114.6 114.6 0 256 0S512 114.6 512 256l0 144.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24l-32 0c-26.5 0-48-21.5-48-48s21.5-48 48-48l32 0c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40L464 256c0-114.9-93.1-208-208-208zM144 208l16 0c17.7 0 32 14.3 32 32l0 112c0 17.7-14.3 32-32 32l-16 0c-35.3 0-64-28.7-64-64l0-48c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64l0 48c0 35.3-28.7 64-64 64l-16 0c-17.7 0-32-14.3-32-32l0-112c0-17.7 14.3-32 32-32l16 0z"]},$N={prefix:"fas",iconName:"shield-halved",icon:[512,512,["shield-alt"],"f3ed","M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8l0 378.1C394 378 431.1 230.1 432 141.4L256 66.8s0 0 0 0z"]},KN=$N,YN={prefix:"fas",iconName:"phone",icon:[512,512,[128222,128379],"f095","M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"]},QN={prefix:"fas",iconName:"envelope",icon:[512,512,[128386,9993,61443],"f0e0","M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"]},XN={prefix:"fas",iconName:"truck",icon:[640,512,[128666,9951],"f0d1","M48 0C21.5 0 0 21.5 0 48L0 368c0 26.5 21.5 48 48 48l16 0c0 53 43 96 96 96s96-43 96-96l128 0c0 53 43 96 96 96s96-43 96-96l32 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l0-64 0-32 0-18.7c0-17-6.7-33.3-18.7-45.3L512 114.7c-12-12-28.3-18.7-45.3-18.7L416 96l0-48c0-26.5-21.5-48-48-48L48 0zM416 160l50.7 0L544 237.3l0 18.7-128 0 0-96zM112 416a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm368-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},WN={prefix:"fas",iconName:"cart-shopping",icon:[576,512,[128722,"shopping-cart"],"f07a","M0 24C0 10.7 10.7 0 24 0L69.5 0c22 0 41.5 12.8 50.6 32l411 0c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3l-288.5 0 5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5L488 336c13.3 0 24 10.7 24 24s-10.7 24-24 24l-288.3 0c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5L24 48C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"]},ZN=WN,JN={prefix:"fas",iconName:"location-dot",icon:[384,512,["map-marker-alt"],"f3c5","M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"]},e4=JN,t4={prefix:"fas",iconName:"arrow-down",icon:[384,512,[8595],"f063","M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"]},n4={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]},r4={prefix:"fas",iconName:"user-plus",icon:[640,512,[],"f234","M96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3zM504 312l0-64-64 0c-13.3 0-24-10.7-24-24s10.7-24 24-24l64 0 0-64c0-13.3 10.7-24 24-24s24 10.7 24 24l0 64 64 0c13.3 0 24 10.7 24 24s-10.7 24-24 24l-64 0 0 64c0 13.3-10.7 24-24 24s-24-10.7-24-24z"]},i4={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},a4="_header_h84bh_1",s4="_navContainer_h84bh_23",o4="_navList_h84bh_35",l4="_navLogoItem_h84bh_53",u4="_navLogo_h84bh_53",c4="_active_h84bh_125",f4="_navCenter_h84bh_133",h4="_navItem_h84bh_149",d4="_navLink_h84bh_159",m4="_cartItem_h84bh_225",p4="_rentalLink_h84bh_233",g4="_rentalIcon_h84bh_245",y4="_cartCounter_h84bh_267",_4="_authCartContainer_h84bh_297",v4="_authButtons_h84bh_311",E4="_authLink_h84bh_321",T4="_authIcon_h84bh_371",b4="_authText_h84bh_379",A4="_activePulse_h84bh_419",Fe={header:a4,navContainer:s4,navList:o4,navLogoItem:l4,navLogo:u4,active:c4,navCenter:f4,navItem:h4,navLink:d4,cartItem:m4,rentalLink:p4,rentalIcon:g4,cartCounter:y4,authCartContainer:_4,authButtons:v4,authLink:E4,authIcon:T4,authText:b4,activePulse:A4},w4=()=>{};var ET={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iA=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},S4=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const l=n[t++];e[i++]=String.fromCharCode((s&31)<<6|l&63)}else if(s>239&&s<365){const l=n[t++],c=n[t++],d=n[t++],m=((s&7)<<18|(l&63)<<12|(c&63)<<6|d&63)-65536;e[i++]=String.fromCharCode(55296+(m>>10)),e[i++]=String.fromCharCode(56320+(m&1023))}else{const l=n[t++],c=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(l&63)<<6|c&63)}}return e.join("")},aA={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const l=n[s],c=s+1<n.length,d=c?n[s+1]:0,m=s+2<n.length,g=m?n[s+2]:0,_=l>>2,T=(l&3)<<4|d>>4;let w=(d&15)<<2|g>>6,x=g&63;m||(x=64,c||(w=64)),i.push(t[_],t[T],t[w],t[x])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(iA(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):S4(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const l=t[n.charAt(s++)],d=s<n.length?t[n.charAt(s)]:0;++s;const g=s<n.length?t[n.charAt(s)]:64;++s;const T=s<n.length?t[n.charAt(s)]:64;if(++s,l==null||d==null||g==null||T==null)throw new R4;const w=l<<2|d>>4;if(i.push(w),g!==64){const x=d<<4&240|g>>2;if(i.push(x),T!==64){const D=g<<6&192|T;i.push(D)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class R4 extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const I4=function(n){const e=iA(n);return aA.encodeByteArray(e,!0)},ph=function(n){return I4(n).replace(/\./g,"")},sA=function(n){try{return aA.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C4(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x4=()=>C4().__FIREBASE_DEFAULTS__,N4=()=>{if(typeof process>"u"||typeof ET>"u")return;const n=ET.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},O4=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&sA(n[1]);return e&&JSON.parse(e)},Hh=()=>{try{return w4()||x4()||N4()||O4()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},oA=n=>{var e,t;return(t=(e=Hh())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},lA=n=>{const e=oA(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},uA=()=>{var n;return(n=Hh())===null||n===void 0?void 0:n.config},cA=n=>{var e;return(e=Hh())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D4{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,l=n.sub||n.user_id;if(!l)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const c=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:l,user_id:l,firebase:{sign_in_provider:"custom",identities:{}}},n);return[ph(JSON.stringify(t)),ph(JSON.stringify(c)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function k4(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fn())}function P4(){var n;const e=(n=Hh())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function M4(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function hA(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function L4(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function V4(){const n=fn();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function U4(){return!P4()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function dA(){try{return typeof indexedDB=="object"}catch{return!1}}function mA(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var l;e(((l=s.error)===null||l===void 0?void 0:l.message)||"")}}catch(t){e(t)}})}function j4(){return!(typeof navigator>"u"||!navigator.cookieEnabled)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const z4="FirebaseError";class Jn extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=z4,Object.setPrototypeOf(this,Jn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ps.prototype.create)}}class Ps{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,l=this.errors[e],c=l?B4(l,i):"Error",d=`${this.serviceName}: ${c} (${s}).`;return new Jn(s,d,i)}}function B4(n,e){return n.replace(F4,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const F4=/\{\$([^}]+)}/g;function q4(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function wi(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const l=n[s],c=e[s];if(TT(l)&&TT(c)){if(!wi(l,c))return!1}else if(l!==c)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function TT(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ic(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}function Iu(n){const e={};return n.replace(/^\?/,"").split("&").forEach(i=>{if(i){const[s,l]=i.split("=");e[decodeURIComponent(s)]=decodeURIComponent(l)}}),e}function Cu(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function H4(n,e){const t=new G4(n,e);return t.subscribe.bind(t)}class G4{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");$4(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Mp),s.error===void 0&&(s.error=Mp),s.complete===void 0&&(s.complete=Mp);const l=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),l}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function $4(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Mp(){}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K4=1e3,Y4=2,Q4=4*60*60*1e3,X4=.5;function bT(n,e=K4,t=Y4){const i=e*Math.pow(t,n),s=Math.round(X4*i*(Math.random()-.5)*2);return Math.min(Q4,i+s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(n){return n&&n._delegate?n._delegate:n}class Zn{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _s="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W4{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new D4;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(l){if(s)return null;throw l}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(J4(e))try{this.getOrInitializeService({instanceIdentifier:_s})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const l=this.getOrInitializeService({instanceIdentifier:s});i.resolve(l)}catch{}}}}clearInstance(e=_s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=_s){return this.instances.has(e)}getOptions(e=_s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[l,c]of this.instancesDeferred.entries()){const d=this.normalizeInstanceIdentifier(l);i===d&&c.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),l=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;l.add(e),this.onInitCallbacks.set(s,l);const c=this.instances.get(s);return c&&e(c,s),()=>{l.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:Z4(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=_s){return this.component?this.component.multipleInstances?e:_s:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function Z4(n){return n===_s?void 0:n}function J4(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new W4(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ve;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(Ve||(Ve={}));const tO={debug:Ve.DEBUG,verbose:Ve.VERBOSE,info:Ve.INFO,warn:Ve.WARN,error:Ve.ERROR,silent:Ve.SILENT},nO=Ve.INFO,rO={[Ve.DEBUG]:"log",[Ve.VERBOSE]:"log",[Ve.INFO]:"info",[Ve.WARN]:"warn",[Ve.ERROR]:"error"},iO=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=rO[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Gh{constructor(e){this.name=e,this._logLevel=nO,this._logHandler=iO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in Ve))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?tO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,Ve.DEBUG,...e),this._logHandler(this,Ve.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,Ve.VERBOSE,...e),this._logHandler(this,Ve.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,Ve.INFO,...e),this._logHandler(this,Ve.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,Ve.WARN,...e),this._logHandler(this,Ve.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,Ve.ERROR,...e),this._logHandler(this,Ve.ERROR,...e)}}const aO=(n,e)=>e.some(t=>n instanceof t);let AT,wT;function sO(){return AT||(AT=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function oO(){return wT||(wT=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pA=new WeakMap,Eg=new WeakMap,gA=new WeakMap,Lp=new WeakMap,gy=new WeakMap;function lO(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",l),n.removeEventListener("error",c)},l=()=>{t(ya(n.result)),s()},c=()=>{i(n.error),s()};n.addEventListener("success",l),n.addEventListener("error",c)});return e.then(t=>{t instanceof IDBCursor&&pA.set(t,n)}).catch(()=>{}),gy.set(e,n),e}function uO(n){if(Eg.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",l),n.removeEventListener("error",c),n.removeEventListener("abort",c)},l=()=>{t(),s()},c=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",l),n.addEventListener("error",c),n.addEventListener("abort",c)});Eg.set(n,e)}let Tg={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return Eg.get(n);if(e==="objectStoreNames")return n.objectStoreNames||gA.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ya(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function cO(n){Tg=n(Tg)}function fO(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Vp(this),e,...t);return gA.set(i,e.sort?e.sort():[e]),ya(i)}:oO().includes(n)?function(...e){return n.apply(Vp(this),e),ya(pA.get(this))}:function(...e){return ya(n.apply(Vp(this),e))}}function hO(n){return typeof n=="function"?fO(n):(n instanceof IDBTransaction&&uO(n),aO(n,sO())?new Proxy(n,Tg):n)}function ya(n){if(n instanceof IDBRequest)return lO(n);if(Lp.has(n))return Lp.get(n);const e=hO(n);return e!==n&&(Lp.set(n,e),gy.set(e,n)),e}const Vp=n=>gy.get(n);function yA(n,e,{blocked:t,upgrade:i,blocking:s,terminated:l}={}){const c=indexedDB.open(n,e),d=ya(c);return i&&c.addEventListener("upgradeneeded",m=>{i(ya(c.result),m.oldVersion,m.newVersion,ya(c.transaction),m)}),t&&c.addEventListener("blocked",m=>t(m.oldVersion,m.newVersion,m)),d.then(m=>{l&&m.addEventListener("close",()=>l()),s&&m.addEventListener("versionchange",g=>s(g.oldVersion,g.newVersion,g))}).catch(()=>{}),d}const dO=["get","getKey","getAll","getAllKeys","count"],mO=["put","add","delete","clear"],Up=new Map;function ST(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Up.get(e))return Up.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=mO.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||dO.includes(t)))return;const l=async function(c,...d){const m=this.transaction(c,s?"readwrite":"readonly");let g=m.store;return i&&(g=g.index(d.shift())),(await Promise.all([g[t](...d),s&&m.done]))[0]};return Up.set(e,l),l}cO(n=>({...n,get:(e,t,i)=>ST(e,t)||n.get(e,t,i),has:(e,t)=>!!ST(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(gO(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function gO(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bg="@firebase/app",RT="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si=new Gh("@firebase/app"),yO="@firebase/app-compat",_O="@firebase/analytics-compat",vO="@firebase/analytics",EO="@firebase/app-check-compat",TO="@firebase/app-check",bO="@firebase/auth",AO="@firebase/auth-compat",wO="@firebase/database",SO="@firebase/data-connect",RO="@firebase/database-compat",IO="@firebase/functions",CO="@firebase/functions-compat",xO="@firebase/installations",NO="@firebase/installations-compat",OO="@firebase/messaging",DO="@firebase/messaging-compat",kO="@firebase/performance",PO="@firebase/performance-compat",MO="@firebase/remote-config",LO="@firebase/remote-config-compat",VO="@firebase/storage",UO="@firebase/storage-compat",jO="@firebase/firestore",zO="@firebase/vertexai",BO="@firebase/firestore-compat",FO="firebase",qO="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ag="[DEFAULT]",HO={[bg]:"fire-core",[yO]:"fire-core-compat",[vO]:"fire-analytics",[_O]:"fire-analytics-compat",[TO]:"fire-app-check",[EO]:"fire-app-check-compat",[bO]:"fire-auth",[AO]:"fire-auth-compat",[wO]:"fire-rtdb",[SO]:"fire-data-connect",[RO]:"fire-rtdb-compat",[IO]:"fire-fn",[CO]:"fire-fn-compat",[xO]:"fire-iid",[NO]:"fire-iid-compat",[OO]:"fire-fcm",[DO]:"fire-fcm-compat",[kO]:"fire-perf",[PO]:"fire-perf-compat",[MO]:"fire-rc",[LO]:"fire-rc-compat",[VO]:"fire-gcs",[UO]:"fire-gcs-compat",[jO]:"fire-fst",[BO]:"fire-fst-compat",[zO]:"fire-vertex","fire-js":"fire-js",[FO]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh=new Map,GO=new Map,wg=new Map;function IT(n,e){try{n.container.addComponent(e)}catch(t){Si.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ur(n){const e=n.name;if(wg.has(e))return Si.debug(`There were multiple attempts to register component ${e}.`),!1;wg.set(e,n);for(const t of gh.values())IT(t,n);for(const t of GO.values())IT(t,n);return!0}function Da(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function kn(n){return n==null?!1:n.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $O={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},_a=new Ps("app","Firebase",$O);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KO{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw _a.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=qO;function _A(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:Ag,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw _a.create("bad-app-name",{appName:String(s)});if(t||(t=uA()),!t)throw _a.create("no-options");const l=gh.get(s);if(l){if(wi(t,l.options)&&wi(i,l.config))return l;throw _a.create("duplicate-app",{appName:s})}const c=new eO(s);for(const m of wg.values())c.addComponent(m);const d=new KO(t,i,c);return gh.set(s,d),d}function $h(n=Ag){const e=gh.get(n);if(!e&&n===Ag&&uA())return _A();if(!e)throw _a.create("no-app",{appName:n});return e}function bn(n,e,t){var i;let s=(i=HO[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const l=s.match(/\s|\//),c=e.match(/\s|\//);if(l||c){const d=[`Unable to register library "${s}" with version "${e}":`];l&&d.push(`library name "${s}" contains illegal characters (whitespace or "/")`),l&&c&&d.push("and"),c&&d.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Si.warn(d.join(" "));return}ur(new Zn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YO="firebase-heartbeat-database",QO=1,Gu="firebase-heartbeat-store";let jp=null;function vA(){return jp||(jp=yA(YO,QO,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(Gu)}catch(t){console.warn(t)}}}}).catch(n=>{throw _a.create("idb-open",{originalErrorMessage:n.message})})),jp}async function XO(n){try{const t=(await vA()).transaction(Gu),i=await t.objectStore(Gu).get(EA(n));return await t.done,i}catch(e){if(e instanceof Jn)Si.warn(e.message);else{const t=_a.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Si.warn(t.message)}}}async function CT(n,e){try{const i=(await vA()).transaction(Gu,"readwrite");await i.objectStore(Gu).put(e,EA(n)),await i.done}catch(t){if(t instanceof Jn)Si.warn(t.message);else{const i=_a.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});Si.warn(i.message)}}}function EA(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=1024,ZO=30;class JO{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new tD(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){var e,t;try{const s=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),l=xT();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)===null||t===void 0?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===l||this._heartbeatsCache.heartbeats.some(c=>c.date===l))return;if(this._heartbeatsCache.heartbeats.push({date:l,agent:s}),this._heartbeatsCache.heartbeats.length>ZO){const c=nD(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(c,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(i){Si.warn(i)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=xT(),{heartbeatsToSend:i,unsentEntries:s}=eD(this._heartbeatsCache.heartbeats),l=ph(JSON.stringify({version:2,heartbeats:i}));return this._heartbeatsCache.lastSentHeartbeatDate=t,s.length>0?(this._heartbeatsCache.heartbeats=s,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),l}catch(t){return Si.warn(t),""}}}function xT(){return new Date().toISOString().substring(0,10)}function eD(n,e=WO){const t=[];let i=n.slice();for(const s of n){const l=t.find(c=>c.agent===s.agent);if(l){if(l.dates.push(s.date),NT(t)>e){l.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),NT(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class tD{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return dA()?mA().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await XO(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return CT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return CT(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function NT(n){return ph(JSON.stringify({version:2,heartbeats:n})).length}function nD(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let i=1;i<n.length;i++)n[i].date<t&&(t=n[i].date,e=i);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rD(n){ur(new Zn("platform-logger",e=>new pO(e),"PRIVATE")),ur(new Zn("heartbeat",e=>new JO(e),"PRIVATE")),bn(bg,RT,n),bn(bg,RT,"esm2017"),bn("fire-js","")}rD("");var iD="firebase",aD="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bn(iD,aD,"app");function yy(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function TA(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sD=TA,bA=new Ps("auth","Firebase",TA());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yh=new Gh("@firebase/auth");function oD(n,...e){yh.logLevel<=Ve.WARN&&yh.warn(`Auth (${Ms}): ${n}`,...e)}function th(n,...e){yh.logLevel<=Ve.ERROR&&yh.error(`Auth (${Ms}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,...e){throw _y(n,...e)}function Mr(n,...e){return _y(n,...e)}function AA(n,e,t){const i=Object.assign(Object.assign({},sD()),{[e]:t});return new Ps("auth","Firebase",i).create(e,{appName:n.name})}function vi(n){return AA(n,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function _y(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return bA.create(n,...e)}function be(n,e,...t){if(!n)throw _y(e,...t)}function gi(n){const e="INTERNAL ASSERTION FAILED: "+n;throw th(e),new Error(e)}function Ri(n,e){n||gi(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function lD(){return OT()==="http:"||OT()==="https:"}function OT(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lD()||hA()||"connection"in navigator)?navigator.onLine:!0}function cD(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ac{constructor(e,t){this.shortDelay=e,this.longDelay=t,Ri(t>e,"Short delay should be less than long delay!"),this.isMobile=k4()||L4()}get(){return uD()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vy(n,e){Ri(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wA{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;gi("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;gi("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;gi("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fD={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hD=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],dD=new ac(3e4,6e4);function ka(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function Ni(n,e,t,i,s={}){return SA(n,s,async()=>{let l={},c={};i&&(e==="GET"?c=i:l={body:JSON.stringify(i)});const d=ic(Object.assign({key:n.config.apiKey},c)).slice(1),m=await n._getAdditionalHeaders();m["Content-Type"]="application/json",n.languageCode&&(m["X-Firebase-Locale"]=n.languageCode);const g=Object.assign({method:e,headers:m},l);return M4()||(g.referrerPolicy="no-referrer"),wA.fetch()(await RA(n,n.config.apiHost,t,d),g)})}async function SA(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},fD),e);try{const s=new pD(n),l=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const c=await l.json();if("needConfirmation"in c)throw Bf(n,"account-exists-with-different-credential",c);if(l.ok&&!("errorMessage"in c))return c;{const d=l.ok?c.errorMessage:c.error.message,[m,g]=d.split(" : ");if(m==="FEDERATED_USER_ID_ALREADY_LINKED")throw Bf(n,"credential-already-in-use",c);if(m==="EMAIL_EXISTS")throw Bf(n,"email-already-in-use",c);if(m==="USER_DISABLED")throw Bf(n,"user-disabled",c);const _=i[m]||m.toLowerCase().replace(/[_\s]+/g,"-");if(g)throw AA(n,_,g);cr(n,_)}}catch(s){if(s instanceof Jn)throw s;cr(n,"network-request-failed",{message:String(s)})}}async function sc(n,e,t,i,s={}){const l=await Ni(n,e,t,i,s);return"mfaPendingCredential"in l&&cr(n,"multi-factor-auth-required",{_serverResponse:l}),l}async function RA(n,e,t,i){const s=`${e}${t}?${i}`,l=n,c=l.config.emulator?vy(n.config,s):`${n.config.apiScheme}://${s}`;return hD.includes(t)&&(await l._persistenceManagerAvailable,l._getPersistenceType()==="COOKIE")?l._getPersistence()._getFinalTarget(c).toString():c}function mD(n){switch(n){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class pD{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(Mr(this.auth,"network-request-failed")),dD.get())})}}function Bf(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=Mr(n,e,i);return s.customData._tokenResponse=t,s}function DT(n){return n!==void 0&&n.enterprise!==void 0}class gD{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const t of this.recaptchaEnforcementState)if(t.provider&&t.provider===e)return mD(t.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yD(n,e){return Ni(n,"GET","/v2/recaptchaConfig",ka(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _D(n,e){return Ni(n,"POST","/v1/accounts:delete",e)}async function _h(n,e){return Ni(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mu(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function vD(n,e=!1){const t=ht(n),i=await t.getIdToken(e),s=Ey(i);be(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const l=typeof s.firebase=="object"?s.firebase:void 0,c=l==null?void 0:l.sign_in_provider;return{claims:s,token:i,authTime:Mu(zp(s.auth_time)),issuedAtTime:Mu(zp(s.iat)),expirationTime:Mu(zp(s.exp)),signInProvider:c||null,signInSecondFactor:(l==null?void 0:l.sign_in_second_factor)||null}}function zp(n){return Number(n)*1e3}function Ey(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return th("JWT malformed, contained fewer than 3 sections"),null;try{const s=sA(t);return s?JSON.parse(s):(th("Failed to decode base64 JWT payload"),null)}catch(s){return th("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function kT(n){const e=Ey(n);return be(e,"internal-error"),be(typeof e.exp<"u","internal-error"),be(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ko(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Jn&&ED(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function ED({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rg{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Mu(this.lastLoginAt),this.creationTime=Mu(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vh(n){var e;const t=n.auth,i=await n.getIdToken(),s=await Ko(n,_h(t,{idToken:i}));be(s==null?void 0:s.users.length,t,"internal-error");const l=s.users[0];n._notifyReloadListener(l);const c=!((e=l.providerUserInfo)===null||e===void 0)&&e.length?IA(l.providerUserInfo):[],d=AD(n.providerData,c),m=n.isAnonymous,g=!(n.email&&l.passwordHash)&&!(d!=null&&d.length),_=m?g:!1,T={uid:l.localId,displayName:l.displayName||null,photoURL:l.photoUrl||null,email:l.email||null,emailVerified:l.emailVerified||!1,phoneNumber:l.phoneNumber||null,tenantId:l.tenantId||null,providerData:d,metadata:new Rg(l.createdAt,l.lastLoginAt),isAnonymous:_};Object.assign(n,T)}async function bD(n){const e=ht(n);await vh(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function AD(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function IA(n){return n.map(e=>{var{providerId:t}=e,i=yy(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wD(n,e){const t=await SA(n,{},async()=>{const i=ic({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:l}=n.config,c=await RA(n,s,"/v1/token",`key=${l}`),d=await n._getAdditionalHeaders();return d["Content-Type"]="application/x-www-form-urlencoded",wA.fetch()(c,{method:"POST",headers:d,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}async function SD(n,e){return Ni(n,"POST","/v2/accounts:revokeToken",ka(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){be(e.idToken,"internal-error"),be(typeof e.idToken<"u","internal-error"),be(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):kT(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}updateFromIdToken(e){be(e.length!==0,"internal-error");const t=kT(e);this.updateTokensAndExpiration(e,null,t)}async getToken(e,t=!1){return!t&&this.accessToken&&!this.isExpired?this.accessToken:(be(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:l}=await wD(e,t);this.updateTokensAndExpiration(i,s,Number(l))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:l}=t,c=new Fo;return i&&(be(typeof i=="string","internal-error",{appName:e}),c.refreshToken=i),s&&(be(typeof s=="string","internal-error",{appName:e}),c.accessToken=s),l&&(be(typeof l=="number","internal-error",{appName:e}),c.expirationTime=l),c}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Fo,this.toJSON())}_performRefresh(){return gi("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oa(n,e){be(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class sr{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,l=yy(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new TD(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=l.displayName||null,this.email=l.email||null,this.emailVerified=l.emailVerified||!1,this.phoneNumber=l.phoneNumber||null,this.photoURL=l.photoURL||null,this.isAnonymous=l.isAnonymous||!1,this.tenantId=l.tenantId||null,this.providerData=l.providerData?[...l.providerData]:[],this.metadata=new Rg(l.createdAt||void 0,l.lastLoginAt||void 0)}async getIdToken(e){const t=await Ko(this,this.stsTokenManager.getToken(this.auth,e));return be(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return vD(this,e)}reload(){return bD(this)}_assign(e){this!==e&&(be(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new sr(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){be(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await vh(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(kn(this.auth.app))return Promise.reject(vi(this.auth));const e=await this.getIdToken();return await Ko(this,_D(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,l,c,d,m,g,_;const T=(i=t.displayName)!==null&&i!==void 0?i:void 0,w=(s=t.email)!==null&&s!==void 0?s:void 0,x=(l=t.phoneNumber)!==null&&l!==void 0?l:void 0,D=(c=t.photoURL)!==null&&c!==void 0?c:void 0,H=(d=t.tenantId)!==null&&d!==void 0?d:void 0,L=(m=t._redirectEventId)!==null&&m!==void 0?m:void 0,$=(g=t.createdAt)!==null&&g!==void 0?g:void 0,Z=(_=t.lastLoginAt)!==null&&_!==void 0?_:void 0,{uid:Q,emailVerified:re,isAnonymous:ae,providerData:ge,stsTokenManager:O}=t;be(Q&&O,e,"internal-error");const R=Fo.fromJSON(this.name,O);be(typeof Q=="string",e,"internal-error"),oa(T,e.name),oa(w,e.name),be(typeof re=="boolean",e,"internal-error"),be(typeof ae=="boolean",e,"internal-error"),oa(x,e.name),oa(D,e.name),oa(H,e.name),oa(L,e.name),oa($,e.name),oa(Z,e.name);const I=new sr({uid:Q,auth:e,email:w,emailVerified:re,displayName:T,isAnonymous:ae,photoURL:D,phoneNumber:x,tenantId:H,stsTokenManager:R,createdAt:$,lastLoginAt:Z});return ge&&Array.isArray(ge)&&(I.providerData=ge.map(P=>Object.assign({},P))),L&&(I._redirectEventId=L),I}static async _fromIdTokenResponse(e,t,i=!1){const s=new Fo;s.updateFromServerResponse(t);const l=new sr({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await vh(l),l}static async _fromGetAccountInfoResponse(e,t,i){const s=t.users[0];be(s.localId!==void 0,"internal-error");const l=s.providerUserInfo!==void 0?IA(s.providerUserInfo):[],c=!(s.email&&s.passwordHash)&&!(l!=null&&l.length),d=new Fo;d.updateFromIdToken(i);const m=new sr({uid:s.localId,auth:e,stsTokenManager:d,isAnonymous:c}),g={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Rg(s.createdAt,s.lastLoginAt),isAnonymous:!(s.email&&s.passwordHash)&&!(l!=null&&l.length)};return Object.assign(m,g),m}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PT=new Map;function yi(n){Ri(n instanceof Function,"Expected a class definition");let e=PT.get(n);return e?(Ri(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,PT.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}CA.type="NONE";const MT=CA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nh(n,e,t){return`firebase:${n}:${e}:${t}`}class qo{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:l}=this.auth;this.fullUserKey=nh(this.userKey,s.apiKey,l),this.fullPersistenceKey=nh("persistence",s.apiKey,l),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const t=await _h(this.auth,{idToken:e}).catch(()=>{});return t?sr._fromGetAccountInfoResponse(this.auth,t,e):null}return sr._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new qo(yi(MT),e,i);const s=(await Promise.all(t.map(async g=>{if(await g._isAvailable())return g}))).filter(g=>g);let l=s[0]||yi(MT);const c=nh(i,e.config.apiKey,e.name);let d=null;for(const g of t)try{const _=await g._get(c);if(_){let T;if(typeof _=="string"){const w=await _h(e,{idToken:_}).catch(()=>{});if(!w)break;T=await sr._fromGetAccountInfoResponse(e,w,_)}else T=sr._fromJSON(e,_);g!==l&&(d=T),l=g;break}}catch{}const m=s.filter(g=>g._shouldAllowMigration);return!l._shouldAllowMigration||!m.length?new qo(l,e,i):(l=m[0],d&&await l._set(c,d.toJSON()),await Promise.all(t.map(async g=>{if(g!==l)try{await g._remove(c)}catch{}})),new qo(l,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LT(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(DA(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(xA(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(PA(e))return"Blackberry";if(MA(e))return"Webos";if(NA(e))return"Safari";if((e.includes("chrome/")||OA(e))&&!e.includes("edge/"))return"Chrome";if(kA(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function xA(n=fn()){return/firefox\//i.test(n)}function NA(n=fn()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function OA(n=fn()){return/crios\//i.test(n)}function DA(n=fn()){return/iemobile/i.test(n)}function kA(n=fn()){return/android/i.test(n)}function PA(n=fn()){return/blackberry/i.test(n)}function MA(n=fn()){return/webos/i.test(n)}function Ty(n=fn()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function RD(n=fn()){var e;return Ty(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function ID(){return V4()&&document.documentMode===10}function LA(n=fn()){return Ty(n)||kA(n)||MA(n)||PA(n)||/windows phone/i.test(n)||DA(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(n,e=[]){let t;switch(n){case"Browser":t=LT(fn());break;case"Worker":t=`${LT(fn())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ms}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CD{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=l=>new Promise((c,d)=>{try{const m=e(l);c(m)}catch(m){d(m)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xD(n,e={}){return Ni(n,"GET","/v2/passwordPolicy",ka(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ND=6;class OD{constructor(e){var t,i,s,l;const c=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=c.minPasswordLength)!==null&&t!==void 0?t:ND,c.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=c.maxPasswordLength),c.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=c.containsLowercaseCharacter),c.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=c.containsUppercaseCharacter),c.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=c.containsNumericCharacter),c.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=c.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(l=e.forceUpgradeOnSignin)!==null&&l!==void 0?l:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,l,c,d;const m={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,m),this.validatePasswordCharacterOptions(e,m),m.isValid&&(m.isValid=(t=m.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),m.isValid&&(m.isValid=(i=m.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),m.isValid&&(m.isValid=(s=m.containsLowercaseLetter)!==null&&s!==void 0?s:!0),m.isValid&&(m.isValid=(l=m.containsUppercaseLetter)!==null&&l!==void 0?l:!0),m.isValid&&(m.isValid=(c=m.containsNumericCharacter)!==null&&c!==void 0?c:!0),m.isValid&&(m.isValid=(d=m.containsNonAlphanumericCharacter)!==null&&d!==void 0?d:!0),m}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,l){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new VT(this),this.idTokenSubscription=new VT(this),this.beforeStateQueue=new CD(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=bA,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion,this._persistenceManagerAvailable=new Promise(l=>this._resolvePersistenceManagerAvailable=l)}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=yi(t)),this._initializationPromise=this.queue(async()=>{var i,s,l;if(!this._deleted&&(this.persistenceManager=await qo.create(this,e),(i=this._resolvePersistenceManagerAvailable)===null||i===void 0||i.call(this),!this._deleted)){if(!((s=this._popupRedirectResolver)===null||s===void 0)&&s._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((l=this.currentUser)===null||l===void 0?void 0:l.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const t=await _h(this,{idToken:e}),i=await sr._fromGetAccountInfoResponse(this,t,e);await this.directlySetCurrentUser(i)}catch(t){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",t),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var t;if(kn(this.app)){const c=this.app.settings.authIdToken;return c?new Promise(d=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(c).then(d,d))}):this.directlySetCurrentUser(null)}const i=await this.assertedPersistence.getCurrentUser();let s=i,l=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const c=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,d=s==null?void 0:s._redirectEventId,m=await this.tryRedirectSignIn(e);(!c||c===d)&&(m!=null&&m.user)&&(s=m.user,l=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(l)try{await this.beforeStateQueue.runMiddleware(s)}catch(c){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(c))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return be(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await vh(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cD()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(kn(this.app))return Promise.reject(vi(this));const t=e?ht(e):null;return t&&be(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&be(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return kn(this.app)?Promise.reject(vi(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return kn(this.app)?Promise.reject(vi(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(yi(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await xD(this),t=new OD(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Ps("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}async revokeAccessToken(e){if(this.currentUser){const t=await this.currentUser.getIdToken(),i={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:t};this.tenantId!=null&&(i.tenantId=this.tenantId),await SD(this,i)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&yi(e)||this._popupRedirectResolver;be(t,this,"argument-error"),this.redirectPersistenceManager=await qo.create(this,[yi(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const l=typeof t=="function"?t:t.next.bind(t);let c=!1;const d=this._isInitialized?Promise.resolve():this._initializationPromise;if(be(d,this,"internal-error"),d.then(()=>{c||l(this.currentUser)}),typeof t=="function"){const m=e.addObserver(t,i,s);return()=>{c=!0,m()}}else{const m=e.addObserver(t);return()=>{c=!0,m()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return be(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=VA(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&oD(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function Ls(n){return ht(n)}class VT{constructor(e){this.auth=e,this.observer=null,this.addObserver=H4(t=>this.observer=t)}get next(){return be(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Kh={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function kD(n){Kh=n}function UA(n){return Kh.loadJS(n)}function PD(){return Kh.recaptchaEnterpriseScript}function MD(){return Kh.gapiScript}function LD(n){return`__${n}${Math.floor(Math.random()*1e6)}`}class VD{constructor(){this.enterprise=new UD}ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}class UD{ready(e){e()}execute(e,t){return Promise.resolve("token")}render(e,t){return""}}const jD="recaptcha-enterprise",jA="NO_RECAPTCHA";class zD{constructor(e){this.type=jD,this.auth=Ls(e)}async verify(e="verify",t=!1){async function i(l){if(!t){if(l.tenantId==null&&l._agentRecaptchaConfig!=null)return l._agentRecaptchaConfig.siteKey;if(l.tenantId!=null&&l._tenantRecaptchaConfigs[l.tenantId]!==void 0)return l._tenantRecaptchaConfigs[l.tenantId].siteKey}return new Promise(async(c,d)=>{yD(l,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(m=>{if(m.recaptchaKey===void 0)d(new Error("recaptcha Enterprise site key undefined"));else{const g=new gD(m);return l.tenantId==null?l._agentRecaptchaConfig=g:l._tenantRecaptchaConfigs[l.tenantId]=g,c(g.siteKey)}}).catch(m=>{d(m)})})}function s(l,c,d){const m=window.grecaptcha;DT(m)?m.enterprise.ready(()=>{m.enterprise.execute(l,{action:e}).then(g=>{c(g)}).catch(()=>{c(jA)})}):d(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new VD().execute("siteKey",{action:"verify"}):new Promise((l,c)=>{i(this.auth).then(d=>{if(!t&&DT(window.grecaptcha))s(d,l,c);else{if(typeof window>"u"){c(new Error("RecaptchaVerifier is only supported in browser"));return}let m=PD();m.length!==0&&(m+=d),UA(m).then(()=>{s(d,l,c)}).catch(g=>{c(g)})}}).catch(d=>{c(d)})})}}async function UT(n,e,t,i=!1,s=!1){const l=new zD(n);let c;if(s)c=jA;else try{c=await l.verify(t)}catch{c=await l.verify(t,!0)}const d=Object.assign({},e);if(t==="mfaSmsEnrollment"||t==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in d){const m=d.phoneEnrollmentInfo.phoneNumber,g=d.phoneEnrollmentInfo.recaptchaToken;Object.assign(d,{phoneEnrollmentInfo:{phoneNumber:m,recaptchaToken:g,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in d){const m=d.phoneSignInInfo.recaptchaToken;Object.assign(d,{phoneSignInInfo:{recaptchaToken:m,captchaResponse:c,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return d}return i?Object.assign(d,{captchaResp:c}):Object.assign(d,{captchaResponse:c}),Object.assign(d,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(d,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),d}async function Ig(n,e,t,i,s){var l;if(!((l=n._getRecaptchaConfig())===null||l===void 0)&&l.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const c=await UT(n,e,t,t==="getOobCode");return i(n,c)}else return i(n,e).catch(async c=>{if(c.code==="auth/missing-recaptcha-token"){console.log(`${t} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const d=await UT(n,e,t,t==="getOobCode");return i(n,d)}else return Promise.reject(c)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BD(n,e){const t=Da(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),l=t.getOptions();if(wi(l,e??{}))return s;cr(s,"already-initialized")}return t.initialize({options:e})}function FD(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(yi);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function qD(n,e,t){const i=Ls(n);be(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!1,l=zA(e),{host:c,port:d}=HD(e),m=d===null?"":`:${d}`,g={url:`${l}//${c}${m}/`},_=Object.freeze({host:c,port:d,protocol:l.replace(":",""),options:Object.freeze({disableWarnings:s})});if(!i._canInitEmulator){be(i.config.emulator&&i.emulatorConfig,i,"emulator-config-failed"),be(wi(g,i.config.emulator)&&wi(_,i.emulatorConfig),i,"emulator-config-failed");return}i.config.emulator=g,i.emulatorConfig=_,i.settings.appVerificationDisabledForTesting=!0,GD()}function zA(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function HD(n){const e=zA(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const l=s[1];return{host:l,port:jT(i.substr(l.length+1))}}else{const[l,c]=i.split(":");return{host:l,port:jT(c)}}}function jT(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function GD(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class by{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return gi("not implemented")}_getIdTokenResponse(e){return gi("not implemented")}_linkToIdToken(e,t){return gi("not implemented")}_getReauthenticationResolver(e){return gi("not implemented")}}async function $D(n,e){return Ni(n,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function KD(n,e){return sc(n,"POST","/v1/accounts:signInWithPassword",ka(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function YD(n,e){return sc(n,"POST","/v1/accounts:signInWithEmailLink",ka(n,e))}async function QD(n,e){return sc(n,"POST","/v1/accounts:signInWithEmailLink",ka(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $u extends by{constructor(e,t,i,s=null){super("password",i),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new $u(e,t,"password")}static _fromEmailAndCode(e,t,i=null){return new $u(e,t,"emailLink",i)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const t={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ig(e,t,"signInWithPassword",KD);case"emailLink":return YD(e,{email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":const i={idToken:t,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return Ig(e,i,"signUpPassword",$D);case"emailLink":return QD(e,{idToken:t,email:this._email,oobCode:this._password});default:cr(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ho(n,e){return sc(n,"POST","/v1/accounts:signInWithIdp",ka(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XD="http://localhost";class Ss extends by{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):cr("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,l=yy(t,["providerId","signInMethod"]);if(!i||!s)return null;const c=new Ss(i,s);return c.idToken=l.idToken||void 0,c.accessToken=l.accessToken||void 0,c.secret=l.secret,c.nonce=l.nonce,c.pendingToken=l.pendingToken||null,c}_getIdTokenResponse(e){const t=this.buildRequest();return Ho(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Ho(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Ho(e,t)}buildRequest(){const e={requestUri:XD,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=ic(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WD(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ZD(n){const e=Iu(Cu(n)).link,t=e?Iu(Cu(e)).deep_link_id:null,i=Iu(Cu(n)).deep_link_id;return(i?Iu(Cu(i)).link:null)||i||t||e||n}class Ay{constructor(e){var t,i,s,l,c,d;const m=Iu(Cu(e)),g=(t=m.apiKey)!==null&&t!==void 0?t:null,_=(i=m.oobCode)!==null&&i!==void 0?i:null,T=WD((s=m.mode)!==null&&s!==void 0?s:null);be(g&&_&&T,"argument-error"),this.apiKey=g,this.operation=T,this.code=_,this.continueUrl=(l=m.continueUrl)!==null&&l!==void 0?l:null,this.languageCode=(c=m.languageCode)!==null&&c!==void 0?c:null,this.tenantId=(d=m.tenantId)!==null&&d!==void 0?d:null}static parseLink(e){const t=ZD(e);try{return new Ay(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ol{constructor(){this.providerId=ol.PROVIDER_ID}static credential(e,t){return $u._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const i=Ay.parseLink(t);return be(i,"argument-error"),$u._fromEmailAndCode(e,i.code,i.tenantId)}}ol.PROVIDER_ID="password";ol.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ol.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BA{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc extends BA{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca extends oc{constructor(){super("facebook.com")}static credential(e){return Ss._fromParams({providerId:ca.PROVIDER_ID,signInMethod:ca.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ca.credentialFromTaggedObject(e)}static credentialFromError(e){return ca.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ca.credential(e.oauthAccessToken)}catch{return null}}}ca.FACEBOOK_SIGN_IN_METHOD="facebook.com";ca.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends oc{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Ss._fromParams({providerId:fa.PROVIDER_ID,signInMethod:fa.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return fa.credentialFromTaggedObject(e)}static credentialFromError(e){return fa.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return fa.credential(t,i)}catch{return null}}}fa.GOOGLE_SIGN_IN_METHOD="google.com";fa.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha extends oc{constructor(){super("github.com")}static credential(e){return Ss._fromParams({providerId:ha.PROVIDER_ID,signInMethod:ha.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return ha.credentialFromTaggedObject(e)}static credentialFromError(e){return ha.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return ha.credential(e.oauthAccessToken)}catch{return null}}}ha.GITHUB_SIGN_IN_METHOD="github.com";ha.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da extends oc{constructor(){super("twitter.com")}static credential(e,t){return Ss._fromParams({providerId:da.PROVIDER_ID,signInMethod:da.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return da.credentialFromTaggedObject(e)}static credentialFromError(e){return da.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return da.credential(t,i)}catch{return null}}}da.TWITTER_SIGN_IN_METHOD="twitter.com";da.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function JD(n,e){return sc(n,"POST","/v1/accounts:signUp",ka(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const l=await sr._fromIdTokenResponse(e,i,s),c=zT(i);return new Rs({user:l,providerId:c,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=zT(i);return new Rs({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function zT(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh extends Jn{constructor(e,t,i,s){var l;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Eh.prototype),this.customData={appName:e.name,tenantId:(l=e.tenantId)!==null&&l!==void 0?l:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Eh(e,t,i,s)}}function FA(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(l=>{throw l.code==="auth/multi-factor-auth-required"?Eh._fromErrorAndOperation(n,l,e,i):l})}async function ek(n,e,t=!1){const i=await Ko(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Rs._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tk(n,e,t=!1){const{auth:i}=n;if(kn(i.app))return Promise.reject(vi(i));const s="reauthenticate";try{const l=await Ko(n,FA(i,s,e,n),t);be(l.idToken,i,"internal-error");const c=Ey(l.idToken);be(c,i,"internal-error");const{sub:d}=c;return be(n.uid===d,i,"user-mismatch"),Rs._forOperation(n,s,l)}catch(l){throw(l==null?void 0:l.code)==="auth/user-not-found"&&cr(i,"user-mismatch"),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qA(n,e,t=!1){if(kn(n.app))return Promise.reject(vi(n));const i="signIn",s=await FA(n,i,e),l=await Rs._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(l.user),l}async function nk(n,e){return qA(Ls(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function HA(n){const e=Ls(n);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rk(n,e,t){if(kn(n.app))return Promise.reject(vi(n));const i=Ls(n),c=await Ig(i,{returnSecureToken:!0,email:e,password:t,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",JD).catch(m=>{throw m.code==="auth/password-does-not-meet-requirements"&&HA(n),m}),d=await Rs._fromIdTokenResponse(i,"signIn",c);return await i._updateCurrentUser(d.user),d}function ik(n,e,t){return kn(n.app)?Promise.reject(vi(n)):nk(ht(n),ol.credential(e,t)).catch(async i=>{throw i.code==="auth/password-does-not-meet-requirements"&&HA(n),i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ak(n,e){return Ni(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sk(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const i=ht(n),l={idToken:await i.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},c=await Ko(i,ak(i.auth,l));i.displayName=c.displayName||null,i.photoURL=c.photoUrl||null;const d=i.providerData.find(({providerId:m})=>m==="password");d&&(d.displayName=i.displayName,d.photoURL=i.photoURL),await i._updateTokensIfNecessary(c)}function ok(n,e,t,i){return ht(n).onIdTokenChanged(e,t,i)}function lk(n,e,t){return ht(n).beforeAuthStateChanged(e,t)}function uk(n,e,t,i){return ht(n).onAuthStateChanged(e,t,i)}const Th="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GA{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Th,"1"),this.storage.removeItem(Th),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ck=1e3,fk=10;class $A extends GA{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=LA(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((c,d,m)=>{this.notifyListeners(c,m)});return}const i=e.key;t?this.detachListener():this.stopPolling();const s=()=>{const c=this.storage.getItem(i);!t&&this.localCache[i]===c||this.notifyListeners(i,c)},l=this.storage.getItem(i);ID()&&l!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,fk):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},ck)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}$A.type="LOCAL";const hk=$A;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KA extends GA{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}KA.type="SESSION";const YA=KA;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dk(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yh{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Yh(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:l}=t.data,c=this.handlersMap[s];if(!(c!=null&&c.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const d=Array.from(c).map(async g=>g(t.origin,l)),m=await dk(d);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:m})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yh.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wy(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let l,c;return new Promise((d,m)=>{const g=wy("",20);s.port1.start();const _=setTimeout(()=>{m(new Error("unsupported_event"))},i);c={messageChannel:s,onMessage(T){const w=T;if(w.data.eventId===g)switch(w.data.status){case"ack":clearTimeout(_),l=setTimeout(()=>{m(new Error("timeout"))},3e3);break;case"done":clearTimeout(l),d(w.data.response);break;default:clearTimeout(_),clearTimeout(l),m(new Error("invalid_response"));break}}},this.handlers.add(c),s.port1.addEventListener("message",c.onMessage),this.target.postMessage({eventType:e,eventId:g,data:t},[s.port2])}).finally(()=>{c&&this.removeMessageHandler(c)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lr(){return window}function pk(n){Lr().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QA(){return typeof Lr().WorkerGlobalScope<"u"&&typeof Lr().importScripts=="function"}async function gk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function yk(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function _k(){return QA()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XA="firebaseLocalStorageDb",vk=1,bh="firebaseLocalStorage",WA="fbase_key";class lc{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Qh(n,e){return n.transaction([bh],e?"readwrite":"readonly").objectStore(bh)}function Ek(){const n=indexedDB.deleteDatabase(XA);return new lc(n).toPromise()}function Cg(){const n=indexedDB.open(XA,vk);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(bh,{keyPath:WA})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(bh)?e(i):(i.close(),await Ek(),e(await Cg()))})})}async function BT(n,e,t){const i=Qh(n,!0).put({[WA]:e,value:t});return new lc(i).toPromise()}async function Tk(n,e){const t=Qh(n,!1).get(e),i=await new lc(t).toPromise();return i===void 0?null:i.value}function FT(n,e){const t=Qh(n,!0).delete(e);return new lc(t).toPromise()}const bk=800,Ak=3;class ZA{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Cg(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Ak)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return QA()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yh._getInstance(_k()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await gk(),!this.activeServiceWorker)return;this.sender=new mk(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||yk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Cg();return await BT(e,Th,"1"),await FT(e,Th),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>BT(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Tk(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>FT(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const l=Qh(s,!1).getAll();return new lc(l).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;if(e.length!==0)for(const{fbase_key:s,value:l}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(l)&&(this.notifyListeners(s,l),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),bk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}ZA.type="LOCAL";const wk=ZA;new ac(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sk(n,e){return e?yi(e):(be(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sy extends by{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ho(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Ho(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Ho(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Rk(n){return qA(n.auth,new Sy(n),n.bypassAuthState)}function Ik(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),tk(t,new Sy(n),n.bypassAuthState)}async function Ck(n){const{auth:e,user:t}=n;return be(t,e,"internal-error"),ek(t,new Sy(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JA{constructor(e,t,i,s,l=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=l,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:l,error:c,type:d}=e;if(c){this.reject(c);return}const m={auth:this.auth,requestUri:t,sessionId:i,tenantId:l||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(d)(m))}catch(g){this.reject(g)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Rk;case"linkViaPopup":case"linkViaRedirect":return Ck;case"reauthViaPopup":case"reauthViaRedirect":return Ik;default:cr(this.auth,"internal-error")}}resolve(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ri(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xk=new ac(2e3,1e4);class jo extends JA{constructor(e,t,i,s,l){super(e,t,s,l),this.provider=i,this.authWindow=null,this.pollId=null,jo.currentPopupAction&&jo.currentPopupAction.cancel(),jo.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return be(e,this.auth,"internal-error"),e}async onExecution(){Ri(this.filter.length===1,"Popup operations only handle one event");const e=wy();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(Mr(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mr(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,jo.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mr(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xk.get())};e()}}jo.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="pendingRedirect",rh=new Map;class Ok extends JA{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=rh.get(this.auth._key());if(!e){try{const i=await Dk(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}rh.set(this.auth._key(),e)}return this.bypassAuthState||rh.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Dk(n,e){const t=Mk(e),i=Pk(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function kk(n,e){rh.set(n._key(),e)}function Pk(n){return yi(n._redirectPersistence)}function Mk(n){return nh(Nk,n.config.apiKey,n.name)}async function Lk(n,e,t=!1){if(kn(n.app))return Promise.reject(vi(n));const i=Ls(n),s=Sk(i,e),c=await new Ok(i,s,t).execute();return c&&!t&&(delete c.user._redirectEventId,await i._persistUserIfCurrent(c.user),await i._setRedirectUser(null,e)),c}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vk=10*60*1e3;class Uk{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!jk(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!ew(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(Mr(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vk&&this.cachedEventUids.clear(),this.cachedEventUids.has(qT(e))}saveEventToCache(e){this.cachedEventUids.add(qT(e)),this.lastProcessedEventTime=Date.now()}}function qT(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function ew({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function jk(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ew(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zk(n,e={}){return Ni(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bk=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Fk=/^https?/;async function qk(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zk(n);for(const t of e)try{if(Hk(t))return}catch{}cr(n,"unauthorized-domain")}function Hk(n){const e=Sg(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const c=new URL(n);return c.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&c.hostname===i}if(!Fk.test(t))return!1;if(Bk.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gk=new ac(3e4,6e4);function HT(){const n=Lr().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function $k(n){return new Promise((e,t)=>{var i,s,l;function c(){HT(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{HT(),t(Mr(n,"network-request-failed"))},timeout:Gk.get()})}if(!((s=(i=Lr().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((l=Lr().gapi)===null||l===void 0)&&l.load)c();else{const d=LD("iframefcb");return Lr()[d]=()=>{gapi.load?c():t(Mr(n,"network-request-failed"))},UA(`${MD()}?onload=${d}`).catch(m=>t(m))}}).catch(e=>{throw ih=null,e})}let ih=null;function Kk(n){return ih=ih||$k(n),ih}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yk=new ac(5e3,15e3),Qk="__/auth/iframe",Xk="emulator/auth/iframe",Wk={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Zk=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Jk(n){const e=n.config;be(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?vy(e,Xk):`https://${n.config.authDomain}/${Qk}`,i={apiKey:e.apiKey,appName:n.name,v:Ms},s=Zk.get(n.config.apiHost);s&&(i.eid=s);const l=n._getFrameworks();return l.length&&(i.fw=l.join(",")),`${t}?${ic(i).slice(1)}`}async function e3(n){const e=await Kk(n),t=Lr().gapi;return be(t,n,"internal-error"),e.open({where:document.body,url:Jk(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Wk,dontclear:!0},i=>new Promise(async(s,l)=>{await i.restyle({setHideOnLeave:!1});const c=Mr(n,"network-request-failed"),d=Lr().setTimeout(()=>{l(c)},Yk.get());function m(){Lr().clearTimeout(d),s(i)}i.ping(m).then(m,()=>{l(c)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const t3={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},n3=500,r3=600,i3="_blank",a3="http://localhost";class GT{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function s3(n,e,t,i=n3,s=r3){const l=Math.max((window.screen.availHeight-s)/2,0).toString(),c=Math.max((window.screen.availWidth-i)/2,0).toString();let d="";const m=Object.assign(Object.assign({},t3),{width:i.toString(),height:s.toString(),top:l,left:c}),g=fn().toLowerCase();t&&(d=OA(g)?i3:t),xA(g)&&(e=e||a3,m.scrollbars="yes");const _=Object.entries(m).reduce((w,[x,D])=>`${w}${x}=${D},`,"");if(RD(g)&&d!=="_self")return o3(e||"",d),new GT(null);const T=window.open(e||"",d,_);be(T,n,"popup-blocked");try{T.focus()}catch{}return new GT(T)}function o3(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l3="__/auth/handler",u3="emulator/auth/handler",c3=encodeURIComponent("fac");async function $T(n,e,t,i,s,l){be(n.config.authDomain,n,"auth-domain-config-required"),be(n.config.apiKey,n,"invalid-api-key");const c={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:Ms,eventId:s};if(e instanceof BA){e.setDefaultLanguage(n.languageCode),c.providerId=e.providerId||"",q4(e.getCustomParameters())||(c.customParameters=JSON.stringify(e.getCustomParameters()));for(const[_,T]of Object.entries({}))c[_]=T}if(e instanceof oc){const _=e.getScopes().filter(T=>T!=="");_.length>0&&(c.scopes=_.join(","))}n.tenantId&&(c.tid=n.tenantId);const d=c;for(const _ of Object.keys(d))d[_]===void 0&&delete d[_];const m=await n._getAppCheckToken(),g=m?`#${c3}=${encodeURIComponent(m)}`:"";return`${f3(n)}?${ic(d).slice(1)}${g}`}function f3({config:n}){return n.emulator?vy(n,u3):`https://${n.authDomain}/${l3}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bp="webStorageSupport";class h3{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=YA,this._completeRedirectFn=Lk,this._overrideRedirectResult=kk}async _openPopup(e,t,i,s){var l;Ri((l=this.eventManagers[e._key()])===null||l===void 0?void 0:l.manager,"_initialize() not called before _openPopup()");const c=await $T(e,t,i,Sg(),s);return s3(e,c,wy())}async _openRedirect(e,t,i,s){await this._originValidation(e);const l=await $T(e,t,i,Sg(),s);return pk(l),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:l}=this.eventManagers[t];return s?Promise.resolve(s):(Ri(l,"If manager is not set, promise should be"),l)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await e3(e),i=new Uk(e);return t.register("authEvent",s=>(be(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Bp,{type:Bp},s=>{var l;const c=(l=s==null?void 0:s[0])===null||l===void 0?void 0:l[Bp];c!==void 0&&t(!!c),cr(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=qk(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return LA()||NA()||Ty()}}const d3=h3;var KT="@firebase/auth",YT="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m3{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){be(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p3(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function g3(n){ur(new Zn("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),l=e.getProvider("app-check-internal"),{apiKey:c,authDomain:d}=i.options;be(c&&!c.includes(":"),"invalid-api-key",{appName:i.name});const m={apiKey:c,authDomain:d,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:VA(n)},g=new DD(i,s,l,m);return FD(g,t),g},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ur(new Zn("auth-internal",e=>{const t=Ls(e.getProvider("auth").getImmediate());return(i=>new m3(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),bn(KT,YT,p3(n)),bn(KT,YT,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y3=5*60,_3=cA("authIdTokenMaxAge")||y3;let QT=null;const v3=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>_3)return;const s=t==null?void 0:t.token;QT!==s&&(QT=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function E3(n=$h()){const e=Da(n,"auth");if(e.isInitialized())return e.getImmediate();const t=BD(n,{popupRedirectResolver:d3,persistence:[wk,hk,YA]}),i=cA("authTokenSyncURL");if(i&&typeof isSecureContext=="boolean"&&isSecureContext){const l=new URL(i,location.origin);if(location.origin===l.origin){const c=v3(l.toString());lk(t,c,()=>c(t.currentUser)),ok(t,d=>c(d))}}const s=oA("auth");return s&&qD(t,`http://${s}`),t}function T3(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}kD({loadJS(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const l=Mr("internal-error");l.customData=s,t(l)},i.type="text/javascript",i.charset="UTF-8",T3().appendChild(i)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});g3("Browser");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tw="firebasestorage.googleapis.com",nw="storageBucket",b3=2*60*1e3,A3=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et extends Jn{constructor(e,t,i=0){super(Fp(e),`Firebase Storage: ${t} (${Fp(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,Et.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Fp(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var vt;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(vt||(vt={}));function Fp(n){return"storage/"+n}function Ry(){const n="An unknown error occurred, please check the error payload for server response.";return new Et(vt.UNKNOWN,n)}function w3(n){return new Et(vt.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function S3(n){return new Et(vt.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function R3(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new Et(vt.UNAUTHENTICATED,n)}function I3(){return new Et(vt.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function C3(n){return new Et(vt.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function x3(){return new Et(vt.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function N3(){return new Et(vt.CANCELED,"User canceled the upload/download.")}function O3(n){return new Et(vt.INVALID_URL,"Invalid URL '"+n+"'.")}function D3(n){return new Et(vt.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function k3(){return new Et(vt.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+nw+"' property when initializing the app?")}function P3(){return new Et(vt.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function M3(){return new Et(vt.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function L3(n){return new Et(vt.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function xg(n){return new Et(vt.INVALID_ARGUMENT,n)}function rw(){return new Et(vt.APP_DELETED,"The Firebase app was deleted.")}function V3(n){return new Et(vt.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Lu(n,e){return new Et(vt.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function wu(n){throw new Et(vt.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=Mn.makeFromUrl(e,t)}catch{return new Mn(e,"")}if(i.path==="")return i;throw D3(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function l(re){re.path.charAt(re.path.length-1)==="/"&&(re.path_=re.path_.slice(0,-1))}const c="(/(.*))?$",d=new RegExp("^gs://"+s+c,"i"),m={bucket:1,path:3};function g(re){re.path_=decodeURIComponent(re.path)}const _="v[A-Za-z0-9_]+",T=t.replace(/[.]/g,"\\."),w="(/([^?#]*).*)?$",x=new RegExp(`^https?://${T}/${_}/b/${s}/o${w}`,"i"),D={bucket:1,path:3},H=t===tw?"(?:storage.googleapis.com|storage.cloud.google.com)":t,L="([^?#]*)",$=new RegExp(`^https?://${H}/${s}/${L}`,"i"),Q=[{regex:d,indices:m,postModify:l},{regex:x,indices:D,postModify:g},{regex:$,indices:{bucket:1,path:2},postModify:g}];for(let re=0;re<Q.length;re++){const ae=Q[re],ge=ae.regex.exec(e);if(ge){const O=ge[ae.indices.bucket];let R=ge[ae.indices.path];R||(R=""),i=new Mn(O,R),ae.postModify(i);break}}if(i==null)throw O3(e);return i}}class U3{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j3(n,e,t){let i=1,s=null,l=null,c=!1,d=0;function m(){return d===2}let g=!1;function _(...L){g||(g=!0,e.apply(null,L))}function T(L){s=setTimeout(()=>{s=null,n(x,m())},L)}function w(){l&&clearTimeout(l)}function x(L,...$){if(g){w();return}if(L){w(),_.call(null,L,...$);return}if(m()||c){w(),_.call(null,L,...$);return}i<64&&(i*=2);let Q;d===1?(d=2,Q=0):Q=(i+Math.random())*1e3,T(Q)}let D=!1;function H(L){D||(D=!0,w(),!g&&(s!==null?(L||(d=2),clearTimeout(s),T(0)):L||(d=1)))}return T(0),l=setTimeout(()=>{c=!0,H(!0)},t),H}function z3(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B3(n){return n!==void 0}function F3(n){return typeof n=="object"&&!Array.isArray(n)}function Iy(n){return typeof n=="string"||n instanceof String}function XT(n){return Cy()&&n instanceof Blob}function Cy(){return typeof Blob<"u"}function WT(n,e,t,i){if(i<e)throw xg(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw xg(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xy(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function iw(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}var bs;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(bs||(bs={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q3(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,l=e.indexOf(n)!==-1;return t||s||l}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H3{constructor(e,t,i,s,l,c,d,m,g,_,T,w=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=l,this.additionalRetryCodes_=c,this.callback_=d,this.errorCallback_=m,this.timeout_=g,this.progressCallback_=_,this.connectionFactory_=T,this.retry=w,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((x,D)=>{this.resolve_=x,this.reject_=D,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new Ff(!1,null,!0));return}const l=this.connectionFactory_();this.pendingConnection_=l;const c=d=>{const m=d.loaded,g=d.lengthComputable?d.total:-1;this.progressCallback_!==null&&this.progressCallback_(m,g)};this.progressCallback_!==null&&l.addUploadProgressListener(c),l.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&l.removeUploadProgressListener(c),this.pendingConnection_=null;const d=l.getErrorCode()===bs.NO_ERROR,m=l.getStatus();if(!d||q3(m,this.additionalRetryCodes_)&&this.retry){const _=l.getErrorCode()===bs.ABORT;i(!1,new Ff(!1,null,_));return}const g=this.successCodes_.indexOf(m)!==-1;i(!0,new Ff(g,l))})},t=(i,s)=>{const l=this.resolve_,c=this.reject_,d=s.connection;if(s.wasSuccessCode)try{const m=this.callback_(d,d.getResponse());B3(m)?l(m):l()}catch(m){c(m)}else if(d!==null){const m=Ry();m.serverResponse=d.getErrorText(),this.errorCallback_?c(this.errorCallback_(d,m)):c(m)}else if(s.canceled){const m=this.appDelete_?rw():N3();c(m)}else{const m=x3();c(m)}};this.canceled_?t(!1,new Ff(!1,null,!0)):this.backoffId_=j3(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&z3(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class Ff{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function G3(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function $3(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function K3(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Y3(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Q3(n,e,t,i,s,l,c=!0){const d=iw(n.urlParams),m=n.url+d,g=Object.assign({},n.headers);return K3(g,e),G3(g,t),$3(g,l),Y3(g,i),new H3(m,n.method,g,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,c)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X3(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function W3(...n){const e=X3();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Cy())return new Blob(n);throw new Et(vt.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Z3(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J3(n){if(typeof atob>"u")throw L3("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class qp{constructor(e,t){this.data=e,this.contentType=t||null}}function eP(n,e){switch(n){case kr.RAW:return new qp(aw(e));case kr.BASE64:case kr.BASE64URL:return new qp(sw(n,e));case kr.DATA_URL:return new qp(nP(e),rP(e))}throw Ry()}function aw(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const l=i,c=n.charCodeAt(++t);i=65536|(l&1023)<<10|c&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function tP(n){let e;try{e=decodeURIComponent(n)}catch{throw Lu(kr.DATA_URL,"Malformed data URL.")}return aw(e)}function sw(n,e){switch(n){case kr.BASE64:{const s=e.indexOf("-")!==-1,l=e.indexOf("_")!==-1;if(s||l)throw Lu(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case kr.BASE64URL:{const s=e.indexOf("+")!==-1,l=e.indexOf("/")!==-1;if(s||l)throw Lu(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=J3(e)}catch(s){throw s.message.includes("polyfill")?s:Lu(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class ow{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw Lu(kr.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=iP(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function nP(n){const e=new ow(n);return e.base64?sw(kr.BASE64,e.rest):tP(e.rest)}function rP(n){return new ow(n).contentType}function iP(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ma{constructor(e,t){let i=0,s="";XT(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(XT(this.data_)){const i=this.data_,s=Z3(i,e,t);return s===null?null:new ma(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new ma(i,!0)}}static getBlob(...e){if(Cy()){const t=e.map(i=>i instanceof ma?i.data_:i);return new ma(W3.apply(null,t))}else{const t=e.map(c=>Iy(c)?eP(kr.RAW,c).data:c.data_);let i=0;t.forEach(c=>{i+=c.byteLength});const s=new Uint8Array(i);let l=0;return t.forEach(c=>{for(let d=0;d<c.length;d++)s[l++]=c[d]}),new ma(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lw(n){let e;try{e=JSON.parse(n)}catch{return null}return F3(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aP(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function sP(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function uw(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oP(n,e){return e}class gn{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||oP}}let qf=null;function lP(n){return!Iy(n)||n.length<2?n:uw(n)}function cw(){if(qf)return qf;const n=[];n.push(new gn("bucket")),n.push(new gn("generation")),n.push(new gn("metageneration")),n.push(new gn("name","fullPath",!0));function e(l,c){return lP(c)}const t=new gn("name");t.xform=e,n.push(t);function i(l,c){return c!==void 0?Number(c):c}const s=new gn("size");return s.xform=i,n.push(s),n.push(new gn("timeCreated")),n.push(new gn("updated")),n.push(new gn("md5Hash",null,!0)),n.push(new gn("cacheControl",null,!0)),n.push(new gn("contentDisposition",null,!0)),n.push(new gn("contentEncoding",null,!0)),n.push(new gn("contentLanguage",null,!0)),n.push(new gn("contentType",null,!0)),n.push(new gn("metadata","customMetadata",!0)),qf=n,qf}function uP(n,e){function t(){const i=n.bucket,s=n.fullPath,l=new Mn(i,s);return e._makeStorageReference(l)}Object.defineProperty(n,"ref",{get:t})}function cP(n,e,t){const i={};i.type="file";const s=t.length;for(let l=0;l<s;l++){const c=t[l];i[c.local]=c.xform(i,e[c.server])}return uP(i,n),i}function fw(n,e,t){const i=lw(e);return i===null?null:cP(n,i,t)}function fP(n,e,t,i){const s=lw(e);if(s===null||!Iy(s.downloadTokens))return null;const l=s.downloadTokens;if(l.length===0)return null;const c=encodeURIComponent;return l.split(",").map(g=>{const _=n.bucket,T=n.fullPath,w="/b/"+c(_)+"/o/"+c(T),x=xy(w,t,i),D=iw({alt:"media",token:g});return x+D})[0]}function hP(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const l=e[s];l.writable&&(t[l.server]=n[l.local])}return JSON.stringify(t)}class hw{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dw(n){if(!n)throw Ry()}function dP(n,e){function t(i,s){const l=fw(n,s,e);return dw(l!==null),l}return t}function mP(n,e){function t(i,s){const l=fw(n,s,e);return dw(l!==null),fP(l,s,n.host,n._protocol)}return t}function mw(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=I3():s=R3():t.getStatus()===402?s=S3(n.bucket):t.getStatus()===403?s=C3(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function pP(n){const e=mw(n);function t(i,s){let l=e(i,s);return i.getStatus()===404&&(l=w3(n.path)),l.serverResponse=s.serverResponse,l}return t}function gP(n,e,t){const i=e.fullServerUrl(),s=xy(i,n.host,n._protocol),l="GET",c=n.maxOperationRetryTime,d=new hw(s,l,mP(n,t),c);return d.errorHandler=pP(e),d}function yP(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function _P(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=yP(null,e)),i}function vP(n,e,t,i,s){const l=e.bucketOnlyServerUrl(),c={"X-Goog-Upload-Protocol":"multipart"};function d(){let Q="";for(let re=0;re<2;re++)Q=Q+Math.random().toString().slice(2);return Q}const m=d();c["Content-Type"]="multipart/related; boundary="+m;const g=_P(e,i,s),_=hP(g,t),T="--"+m+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+_+`\r
--`+m+`\r
Content-Type: `+g.contentType+`\r
\r
`,w=`\r
--`+m+"--",x=ma.getBlob(T,i,w);if(x===null)throw P3();const D={name:g.fullPath},H=xy(l,n.host,n._protocol),L="POST",$=n.maxUploadRetryTime,Z=new hw(H,L,dP(n,t),$);return Z.urlParams=D,Z.headers=c,Z.body=x.uploadData(),Z.errorHandler=mw(e),Z}class EP{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=bs.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=bs.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=bs.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw wu("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const l in s)s.hasOwnProperty(l)&&this.xhr_.setRequestHeader(l,s[l].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw wu("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw wu("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw wu("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw wu("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class TP extends EP{initXhr(){this.xhr_.responseType="text"}}function pw(){return new TP}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(e,t){this._service=e,t instanceof Mn?this._location=t:this._location=Mn.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new Is(e,t)}get root(){const e=new Mn(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return uw(this._location.path)}get storage(){return this._service}get parent(){const e=aP(this._location.path);if(e===null)return null;const t=new Mn(this._location.bucket,e);return new Is(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw V3(e)}}function bP(n,e,t){n._throwIfRoot("uploadBytes");const i=vP(n.storage,n._location,cw(),new ma(e,!0),t);return n.storage.makeRequestWithTokens(i,pw).then(s=>({metadata:s,ref:n}))}function AP(n){n._throwIfRoot("getDownloadURL");const e=gP(n.storage,n._location,cw());return n.storage.makeRequestWithTokens(e,pw).then(t=>{if(t===null)throw M3();return t})}function wP(n,e){const t=sP(n._location.path,e),i=new Mn(n._location.bucket,t);return new Is(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SP(n){return/^[A-Za-z]+:\/\//.test(n)}function RP(n,e){return new Is(n,e)}function gw(n,e){if(n instanceof Ny){const t=n;if(t._bucket==null)throw k3();const i=new Is(t,t._bucket);return e!=null?gw(i,e):i}else return e!==void 0?wP(n,e):n}function IP(n,e){if(e&&SP(e)){if(n instanceof Ny)return RP(n,e);throw xg("To use ref(service, url), the first argument must be a Storage instance.")}else return gw(n,e)}function ZT(n,e){const t=e==null?void 0:e[nw];return t==null?null:Mn.makeFromBucketSpec(t,n)}function CP(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:fA(s,n.app.options.projectId))}class Ny{constructor(e,t,i,s,l){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=l,this._bucket=null,this._host=tw,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=b3,this._maxUploadRetryTime=A3,this._requests=new Set,s!=null?this._bucket=Mn.makeFromBucketSpec(s,this._host):this._bucket=ZT(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=Mn.makeFromBucketSpec(this._url,e):this._bucket=ZT(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){WT("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){WT("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){if(kn(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Is(this,e)}_makeRequest(e,t,i,s,l=!0){if(this._deleted)return new U3(rw());{const c=Q3(e,this._appId,i,s,t,this._firebaseVersion,l);return this._requests.add(c),c.getPromise().then(()=>this._requests.delete(c),()=>this._requests.delete(c)),c}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const JT="@firebase/storage",e1="0.13.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yw="storage";function xP(n,e,t){return n=ht(n),bP(n,e,t)}function NP(n){return n=ht(n),AP(n)}function OP(n,e){return n=ht(n),IP(n,e)}function _w(n=$h(),e){n=ht(n);const i=Da(n,yw).getImmediate({identifier:e}),s=lA("storage");return s&&DP(i,...s),i}function DP(n,e,t,i={}){CP(n,e,t,i)}function kP(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Ny(t,i,s,e,Ms)}function PP(){ur(new Zn(yw,kP,"PUBLIC").setMultipleInstances(!0)),bn(JT,e1,""),bn(JT,e1,"esm2017")}PP();var t1=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var va,vw;(function(){var n;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(O,R){function I(){}I.prototype=R.prototype,O.D=R.prototype,O.prototype=new I,O.prototype.constructor=O,O.C=function(P,V,j){for(var N=Array(arguments.length-2),$t=2;$t<arguments.length;$t++)N[$t-2]=arguments[$t];return R.prototype[V].apply(P,N)}}function t(){this.blockSize=-1}function i(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(i,t),i.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function s(O,R,I){I||(I=0);var P=Array(16);if(typeof R=="string")for(var V=0;16>V;++V)P[V]=R.charCodeAt(I++)|R.charCodeAt(I++)<<8|R.charCodeAt(I++)<<16|R.charCodeAt(I++)<<24;else for(V=0;16>V;++V)P[V]=R[I++]|R[I++]<<8|R[I++]<<16|R[I++]<<24;R=O.g[0],I=O.g[1],V=O.g[2];var j=O.g[3],N=R+(j^I&(V^j))+P[0]+3614090360&4294967295;R=I+(N<<7&4294967295|N>>>25),N=j+(V^R&(I^V))+P[1]+3905402710&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(I^j&(R^I))+P[2]+606105819&4294967295,V=j+(N<<17&4294967295|N>>>15),N=I+(R^V&(j^R))+P[3]+3250441966&4294967295,I=V+(N<<22&4294967295|N>>>10),N=R+(j^I&(V^j))+P[4]+4118548399&4294967295,R=I+(N<<7&4294967295|N>>>25),N=j+(V^R&(I^V))+P[5]+1200080426&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(I^j&(R^I))+P[6]+2821735955&4294967295,V=j+(N<<17&4294967295|N>>>15),N=I+(R^V&(j^R))+P[7]+4249261313&4294967295,I=V+(N<<22&4294967295|N>>>10),N=R+(j^I&(V^j))+P[8]+1770035416&4294967295,R=I+(N<<7&4294967295|N>>>25),N=j+(V^R&(I^V))+P[9]+2336552879&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(I^j&(R^I))+P[10]+4294925233&4294967295,V=j+(N<<17&4294967295|N>>>15),N=I+(R^V&(j^R))+P[11]+2304563134&4294967295,I=V+(N<<22&4294967295|N>>>10),N=R+(j^I&(V^j))+P[12]+1804603682&4294967295,R=I+(N<<7&4294967295|N>>>25),N=j+(V^R&(I^V))+P[13]+4254626195&4294967295,j=R+(N<<12&4294967295|N>>>20),N=V+(I^j&(R^I))+P[14]+2792965006&4294967295,V=j+(N<<17&4294967295|N>>>15),N=I+(R^V&(j^R))+P[15]+1236535329&4294967295,I=V+(N<<22&4294967295|N>>>10),N=R+(V^j&(I^V))+P[1]+4129170786&4294967295,R=I+(N<<5&4294967295|N>>>27),N=j+(I^V&(R^I))+P[6]+3225465664&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^I&(j^R))+P[11]+643717713&4294967295,V=j+(N<<14&4294967295|N>>>18),N=I+(j^R&(V^j))+P[0]+3921069994&4294967295,I=V+(N<<20&4294967295|N>>>12),N=R+(V^j&(I^V))+P[5]+3593408605&4294967295,R=I+(N<<5&4294967295|N>>>27),N=j+(I^V&(R^I))+P[10]+38016083&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^I&(j^R))+P[15]+3634488961&4294967295,V=j+(N<<14&4294967295|N>>>18),N=I+(j^R&(V^j))+P[4]+3889429448&4294967295,I=V+(N<<20&4294967295|N>>>12),N=R+(V^j&(I^V))+P[9]+568446438&4294967295,R=I+(N<<5&4294967295|N>>>27),N=j+(I^V&(R^I))+P[14]+3275163606&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^I&(j^R))+P[3]+4107603335&4294967295,V=j+(N<<14&4294967295|N>>>18),N=I+(j^R&(V^j))+P[8]+1163531501&4294967295,I=V+(N<<20&4294967295|N>>>12),N=R+(V^j&(I^V))+P[13]+2850285829&4294967295,R=I+(N<<5&4294967295|N>>>27),N=j+(I^V&(R^I))+P[2]+4243563512&4294967295,j=R+(N<<9&4294967295|N>>>23),N=V+(R^I&(j^R))+P[7]+1735328473&4294967295,V=j+(N<<14&4294967295|N>>>18),N=I+(j^R&(V^j))+P[12]+2368359562&4294967295,I=V+(N<<20&4294967295|N>>>12),N=R+(I^V^j)+P[5]+4294588738&4294967295,R=I+(N<<4&4294967295|N>>>28),N=j+(R^I^V)+P[8]+2272392833&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^I)+P[11]+1839030562&4294967295,V=j+(N<<16&4294967295|N>>>16),N=I+(V^j^R)+P[14]+4259657740&4294967295,I=V+(N<<23&4294967295|N>>>9),N=R+(I^V^j)+P[1]+2763975236&4294967295,R=I+(N<<4&4294967295|N>>>28),N=j+(R^I^V)+P[4]+1272893353&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^I)+P[7]+4139469664&4294967295,V=j+(N<<16&4294967295|N>>>16),N=I+(V^j^R)+P[10]+3200236656&4294967295,I=V+(N<<23&4294967295|N>>>9),N=R+(I^V^j)+P[13]+681279174&4294967295,R=I+(N<<4&4294967295|N>>>28),N=j+(R^I^V)+P[0]+3936430074&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^I)+P[3]+3572445317&4294967295,V=j+(N<<16&4294967295|N>>>16),N=I+(V^j^R)+P[6]+76029189&4294967295,I=V+(N<<23&4294967295|N>>>9),N=R+(I^V^j)+P[9]+3654602809&4294967295,R=I+(N<<4&4294967295|N>>>28),N=j+(R^I^V)+P[12]+3873151461&4294967295,j=R+(N<<11&4294967295|N>>>21),N=V+(j^R^I)+P[15]+530742520&4294967295,V=j+(N<<16&4294967295|N>>>16),N=I+(V^j^R)+P[2]+3299628645&4294967295,I=V+(N<<23&4294967295|N>>>9),N=R+(V^(I|~j))+P[0]+4096336452&4294967295,R=I+(N<<6&4294967295|N>>>26),N=j+(I^(R|~V))+P[7]+1126891415&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~I))+P[14]+2878612391&4294967295,V=j+(N<<15&4294967295|N>>>17),N=I+(j^(V|~R))+P[5]+4237533241&4294967295,I=V+(N<<21&4294967295|N>>>11),N=R+(V^(I|~j))+P[12]+1700485571&4294967295,R=I+(N<<6&4294967295|N>>>26),N=j+(I^(R|~V))+P[3]+2399980690&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~I))+P[10]+4293915773&4294967295,V=j+(N<<15&4294967295|N>>>17),N=I+(j^(V|~R))+P[1]+2240044497&4294967295,I=V+(N<<21&4294967295|N>>>11),N=R+(V^(I|~j))+P[8]+1873313359&4294967295,R=I+(N<<6&4294967295|N>>>26),N=j+(I^(R|~V))+P[15]+4264355552&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~I))+P[6]+2734768916&4294967295,V=j+(N<<15&4294967295|N>>>17),N=I+(j^(V|~R))+P[13]+1309151649&4294967295,I=V+(N<<21&4294967295|N>>>11),N=R+(V^(I|~j))+P[4]+4149444226&4294967295,R=I+(N<<6&4294967295|N>>>26),N=j+(I^(R|~V))+P[11]+3174756917&4294967295,j=R+(N<<10&4294967295|N>>>22),N=V+(R^(j|~I))+P[2]+718787259&4294967295,V=j+(N<<15&4294967295|N>>>17),N=I+(j^(V|~R))+P[9]+3951481745&4294967295,O.g[0]=O.g[0]+R&4294967295,O.g[1]=O.g[1]+(V+(N<<21&4294967295|N>>>11))&4294967295,O.g[2]=O.g[2]+V&4294967295,O.g[3]=O.g[3]+j&4294967295}i.prototype.u=function(O,R){R===void 0&&(R=O.length);for(var I=R-this.blockSize,P=this.B,V=this.h,j=0;j<R;){if(V==0)for(;j<=I;)s(this,O,j),j+=this.blockSize;if(typeof O=="string"){for(;j<R;)if(P[V++]=O.charCodeAt(j++),V==this.blockSize){s(this,P),V=0;break}}else for(;j<R;)if(P[V++]=O[j++],V==this.blockSize){s(this,P),V=0;break}}this.h=V,this.o+=R},i.prototype.v=function(){var O=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);O[0]=128;for(var R=1;R<O.length-8;++R)O[R]=0;var I=8*this.o;for(R=O.length-8;R<O.length;++R)O[R]=I&255,I/=256;for(this.u(O),O=Array(16),R=I=0;4>R;++R)for(var P=0;32>P;P+=8)O[I++]=this.g[R]>>>P&255;return O};function l(O,R){var I=d;return Object.prototype.hasOwnProperty.call(I,O)?I[O]:I[O]=R(O)}function c(O,R){this.h=R;for(var I=[],P=!0,V=O.length-1;0<=V;V--){var j=O[V]|0;P&&j==R||(I[V]=j,P=!1)}this.g=I}var d={};function m(O){return-128<=O&&128>O?l(O,function(R){return new c([R|0],0>R?-1:0)}):new c([O|0],0>O?-1:0)}function g(O){if(isNaN(O)||!isFinite(O))return T;if(0>O)return L(g(-O));for(var R=[],I=1,P=0;O>=I;P++)R[P]=O/I|0,I*=4294967296;return new c(R,0)}function _(O,R){if(O.length==0)throw Error("number format error: empty string");if(R=R||10,2>R||36<R)throw Error("radix out of range: "+R);if(O.charAt(0)=="-")return L(_(O.substring(1),R));if(0<=O.indexOf("-"))throw Error('number format error: interior "-" character');for(var I=g(Math.pow(R,8)),P=T,V=0;V<O.length;V+=8){var j=Math.min(8,O.length-V),N=parseInt(O.substring(V,V+j),R);8>j?(j=g(Math.pow(R,j)),P=P.j(j).add(g(N))):(P=P.j(I),P=P.add(g(N)))}return P}var T=m(0),w=m(1),x=m(16777216);n=c.prototype,n.m=function(){if(H(this))return-L(this).m();for(var O=0,R=1,I=0;I<this.g.length;I++){var P=this.i(I);O+=(0<=P?P:4294967296+P)*R,R*=4294967296}return O},n.toString=function(O){if(O=O||10,2>O||36<O)throw Error("radix out of range: "+O);if(D(this))return"0";if(H(this))return"-"+L(this).toString(O);for(var R=g(Math.pow(O,6)),I=this,P="";;){var V=re(I,R).g;I=$(I,V.j(R));var j=((0<I.g.length?I.g[0]:I.h)>>>0).toString(O);if(I=V,D(I))return j+P;for(;6>j.length;)j="0"+j;P=j+P}},n.i=function(O){return 0>O?0:O<this.g.length?this.g[O]:this.h};function D(O){if(O.h!=0)return!1;for(var R=0;R<O.g.length;R++)if(O.g[R]!=0)return!1;return!0}function H(O){return O.h==-1}n.l=function(O){return O=$(this,O),H(O)?-1:D(O)?0:1};function L(O){for(var R=O.g.length,I=[],P=0;P<R;P++)I[P]=~O.g[P];return new c(I,~O.h).add(w)}n.abs=function(){return H(this)?L(this):this},n.add=function(O){for(var R=Math.max(this.g.length,O.g.length),I=[],P=0,V=0;V<=R;V++){var j=P+(this.i(V)&65535)+(O.i(V)&65535),N=(j>>>16)+(this.i(V)>>>16)+(O.i(V)>>>16);P=N>>>16,j&=65535,N&=65535,I[V]=N<<16|j}return new c(I,I[I.length-1]&-2147483648?-1:0)};function $(O,R){return O.add(L(R))}n.j=function(O){if(D(this)||D(O))return T;if(H(this))return H(O)?L(this).j(L(O)):L(L(this).j(O));if(H(O))return L(this.j(L(O)));if(0>this.l(x)&&0>O.l(x))return g(this.m()*O.m());for(var R=this.g.length+O.g.length,I=[],P=0;P<2*R;P++)I[P]=0;for(P=0;P<this.g.length;P++)for(var V=0;V<O.g.length;V++){var j=this.i(P)>>>16,N=this.i(P)&65535,$t=O.i(V)>>>16,mt=O.i(V)&65535;I[2*P+2*V]+=N*mt,Z(I,2*P+2*V),I[2*P+2*V+1]+=j*mt,Z(I,2*P+2*V+1),I[2*P+2*V+1]+=N*$t,Z(I,2*P+2*V+1),I[2*P+2*V+2]+=j*$t,Z(I,2*P+2*V+2)}for(P=0;P<R;P++)I[P]=I[2*P+1]<<16|I[2*P];for(P=R;P<2*R;P++)I[P]=0;return new c(I,0)};function Z(O,R){for(;(O[R]&65535)!=O[R];)O[R+1]+=O[R]>>>16,O[R]&=65535,R++}function Q(O,R){this.g=O,this.h=R}function re(O,R){if(D(R))throw Error("division by zero");if(D(O))return new Q(T,T);if(H(O))return R=re(L(O),R),new Q(L(R.g),L(R.h));if(H(R))return R=re(O,L(R)),new Q(L(R.g),R.h);if(30<O.g.length){if(H(O)||H(R))throw Error("slowDivide_ only works with positive integers.");for(var I=w,P=R;0>=P.l(O);)I=ae(I),P=ae(P);var V=ge(I,1),j=ge(P,1);for(P=ge(P,2),I=ge(I,2);!D(P);){var N=j.add(P);0>=N.l(O)&&(V=V.add(I),j=N),P=ge(P,1),I=ge(I,1)}return R=$(O,V.j(R)),new Q(V,R)}for(V=T;0<=O.l(R);){for(I=Math.max(1,Math.floor(O.m()/R.m())),P=Math.ceil(Math.log(I)/Math.LN2),P=48>=P?1:Math.pow(2,P-48),j=g(I),N=j.j(R);H(N)||0<N.l(O);)I-=P,j=g(I),N=j.j(R);D(j)&&(j=w),V=V.add(j),O=$(O,N)}return new Q(V,O)}n.A=function(O){return re(this,O).h},n.and=function(O){for(var R=Math.max(this.g.length,O.g.length),I=[],P=0;P<R;P++)I[P]=this.i(P)&O.i(P);return new c(I,this.h&O.h)},n.or=function(O){for(var R=Math.max(this.g.length,O.g.length),I=[],P=0;P<R;P++)I[P]=this.i(P)|O.i(P);return new c(I,this.h|O.h)},n.xor=function(O){for(var R=Math.max(this.g.length,O.g.length),I=[],P=0;P<R;P++)I[P]=this.i(P)^O.i(P);return new c(I,this.h^O.h)};function ae(O){for(var R=O.g.length+1,I=[],P=0;P<R;P++)I[P]=O.i(P)<<1|O.i(P-1)>>>31;return new c(I,O.h)}function ge(O,R){var I=R>>5;R%=32;for(var P=O.g.length-I,V=[],j=0;j<P;j++)V[j]=0<R?O.i(j+I)>>>R|O.i(j+I+1)<<32-R:O.i(j+I);return new c(V,O.h)}i.prototype.digest=i.prototype.v,i.prototype.reset=i.prototype.s,i.prototype.update=i.prototype.u,vw=i,c.prototype.add=c.prototype.add,c.prototype.multiply=c.prototype.j,c.prototype.modulo=c.prototype.A,c.prototype.compare=c.prototype.l,c.prototype.toNumber=c.prototype.m,c.prototype.toString=c.prototype.toString,c.prototype.getBits=c.prototype.i,c.fromNumber=g,c.fromString=_,va=c}).apply(typeof t1<"u"?t1:typeof self<"u"?self:typeof window<"u"?window:{});var Hf=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Ew,xu,Tw,ah,Ng,bw,Aw,ww;(function(){var n,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(f,y,v){return f==Array.prototype||f==Object.prototype||(f[y]=v.value),f};function t(f){f=[typeof globalThis=="object"&&globalThis,f,typeof window=="object"&&window,typeof self=="object"&&self,typeof Hf=="object"&&Hf];for(var y=0;y<f.length;++y){var v=f[y];if(v&&v.Math==Math)return v}throw Error("Cannot find global object")}var i=t(this);function s(f,y){if(y)e:{var v=i;f=f.split(".");for(var S=0;S<f.length-1;S++){var z=f[S];if(!(z in v))break e;v=v[z]}f=f[f.length-1],S=v[f],y=y(S),y!=S&&y!=null&&e(v,f,{configurable:!0,writable:!0,value:y})}}function l(f,y){f instanceof String&&(f+="");var v=0,S=!1,z={next:function(){if(!S&&v<f.length){var Y=v++;return{value:y(Y,f[Y]),done:!1}}return S=!0,{done:!0,value:void 0}}};return z[Symbol.iterator]=function(){return z},z}s("Array.prototype.values",function(f){return f||function(){return l(this,function(y,v){return v})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},d=this||self;function m(f){var y=typeof f;return y=y!="object"?y:f?Array.isArray(f)?"array":y:"null",y=="array"||y=="object"&&typeof f.length=="number"}function g(f){var y=typeof f;return y=="object"&&f!=null||y=="function"}function _(f,y,v){return f.call.apply(f.bind,arguments)}function T(f,y,v){if(!f)throw Error();if(2<arguments.length){var S=Array.prototype.slice.call(arguments,2);return function(){var z=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(z,S),f.apply(y,z)}}return function(){return f.apply(y,arguments)}}function w(f,y,v){return w=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?_:T,w.apply(null,arguments)}function x(f,y){var v=Array.prototype.slice.call(arguments,1);return function(){var S=v.slice();return S.push.apply(S,arguments),f.apply(this,S)}}function D(f,y){function v(){}v.prototype=y.prototype,f.aa=y.prototype,f.prototype=new v,f.prototype.constructor=f,f.Qb=function(S,z,Y){for(var le=Array(arguments.length-2),je=2;je<arguments.length;je++)le[je-2]=arguments[je];return y.prototype[z].apply(S,le)}}function H(f){const y=f.length;if(0<y){const v=Array(y);for(let S=0;S<y;S++)v[S]=f[S];return v}return[]}function L(f,y){for(let v=1;v<arguments.length;v++){const S=arguments[v];if(m(S)){const z=f.length||0,Y=S.length||0;f.length=z+Y;for(let le=0;le<Y;le++)f[z+le]=S[le]}else f.push(S)}}class ${constructor(y,v){this.i=y,this.j=v,this.h=0,this.g=null}get(){let y;return 0<this.h?(this.h--,y=this.g,this.g=y.next,y.next=null):y=this.i(),y}}function Z(f){return/^[\s\xa0]*$/.test(f)}function Q(){var f=d.navigator;return f&&(f=f.userAgent)?f:""}function re(f){return re[" "](f),f}re[" "]=function(){};var ae=Q().indexOf("Gecko")!=-1&&!(Q().toLowerCase().indexOf("webkit")!=-1&&Q().indexOf("Edge")==-1)&&!(Q().indexOf("Trident")!=-1||Q().indexOf("MSIE")!=-1)&&Q().indexOf("Edge")==-1;function ge(f,y,v){for(const S in f)y.call(v,f[S],S,f)}function O(f,y){for(const v in f)y.call(void 0,f[v],v,f)}function R(f){const y={};for(const v in f)y[v]=f[v];return y}const I="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function P(f,y){let v,S;for(let z=1;z<arguments.length;z++){S=arguments[z];for(v in S)f[v]=S[v];for(let Y=0;Y<I.length;Y++)v=I[Y],Object.prototype.hasOwnProperty.call(S,v)&&(f[v]=S[v])}}function V(f){var y=1;f=f.split(":");const v=[];for(;0<y&&f.length;)v.push(f.shift()),y--;return f.length&&v.push(f.join(":")),v}function j(f){d.setTimeout(()=>{throw f},0)}function N(){var f=Ge;let y=null;return f.g&&(y=f.g,f.g=f.g.next,f.g||(f.h=null),y.next=null),y}class $t{constructor(){this.h=this.g=null}add(y,v){const S=mt.get();S.set(y,v),this.h?this.h.next=S:this.g=S,this.h=S}}var mt=new $(()=>new X,f=>f.reset());class X{constructor(){this.next=this.g=this.h=null}set(y,v){this.h=y,this.g=v,this.next=null}reset(){this.next=this.g=this.h=null}}let ue,pe=!1,Ge=new $t,k=()=>{const f=d.Promise.resolve(void 0);ue=()=>{f.then(ne)}};var ne=()=>{for(var f;f=N();){try{f.h.call(f.g)}catch(v){j(v)}var y=mt;y.j(f),100>y.h&&(y.h++,f.next=y.g,y.g=f)}pe=!1};function ce(){this.s=this.s,this.C=this.C}ce.prototype.s=!1,ce.prototype.ma=function(){this.s||(this.s=!0,this.N())},ce.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function oe(f,y){this.type=f,this.g=this.target=y,this.defaultPrevented=!1}oe.prototype.h=function(){this.defaultPrevented=!0};var ye=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var f=!1,y=Object.defineProperty({},"passive",{get:function(){f=!0}});try{const v=()=>{};d.addEventListener("test",v,y),d.removeEventListener("test",v,y)}catch{}return f}();function De(f,y){if(oe.call(this,f?f.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,f){var v=this.type=f.type,S=f.changedTouches&&f.changedTouches.length?f.changedTouches[0]:null;if(this.target=f.target||f.srcElement,this.g=y,y=f.relatedTarget){if(ae){e:{try{re(y.nodeName);var z=!0;break e}catch{}z=!1}z||(y=null)}}else v=="mouseover"?y=f.fromElement:v=="mouseout"&&(y=f.toElement);this.relatedTarget=y,S?(this.clientX=S.clientX!==void 0?S.clientX:S.pageX,this.clientY=S.clientY!==void 0?S.clientY:S.pageY,this.screenX=S.screenX||0,this.screenY=S.screenY||0):(this.clientX=f.clientX!==void 0?f.clientX:f.pageX,this.clientY=f.clientY!==void 0?f.clientY:f.pageY,this.screenX=f.screenX||0,this.screenY=f.screenY||0),this.button=f.button,this.key=f.key||"",this.ctrlKey=f.ctrlKey,this.altKey=f.altKey,this.shiftKey=f.shiftKey,this.metaKey=f.metaKey,this.pointerId=f.pointerId||0,this.pointerType=typeof f.pointerType=="string"?f.pointerType:Re[f.pointerType]||"",this.state=f.state,this.i=f,f.defaultPrevented&&De.aa.h.call(this)}}D(De,oe);var Re={2:"touch",3:"pen",4:"mouse"};De.prototype.h=function(){De.aa.h.call(this);var f=this.i;f.preventDefault?f.preventDefault():f.returnValue=!1};var jt="closure_listenable_"+(1e6*Math.random()|0),at=0;function hr(f,y,v,S,z){this.listener=f,this.proxy=null,this.src=y,this.type=v,this.capture=!!S,this.ha=z,this.key=++at,this.da=this.fa=!1}function Oi(f){f.da=!0,f.listener=null,f.proxy=null,f.src=null,f.ha=null}function Fr(f){this.src=f,this.g={},this.h=0}Fr.prototype.add=function(f,y,v,S,z){var Y=f.toString();f=this.g[Y],f||(f=this.g[Y]=[],this.h++);var le=La(f,y,S,z);return-1<le?(y=f[le],v||(y.fa=!1)):(y=new hr(y,this.src,Y,!!S,z),y.fa=v,f.push(y)),y};function Ma(f,y){var v=y.type;if(v in f.g){var S=f.g[v],z=Array.prototype.indexOf.call(S,y,void 0),Y;(Y=0<=z)&&Array.prototype.splice.call(S,z,1),Y&&(Oi(y),f.g[v].length==0&&(delete f.g[v],f.h--))}}function La(f,y,v,S){for(var z=0;z<f.length;++z){var Y=f[z];if(!Y.da&&Y.listener==y&&Y.capture==!!v&&Y.ha==S)return z}return-1}var Va="closure_lm_"+(1e6*Math.random()|0),hl={};function dc(f,y,v,S,z){if(Array.isArray(y)){for(var Y=0;Y<y.length;Y++)dc(f,y[Y],v,S,z);return null}return v=mc(v),f&&f[jt]?f.K(y,v,g(S)?!!S.capture:!1,z):jn(f,y,v,!1,S,z)}function jn(f,y,v,S,z,Y){if(!y)throw Error("Invalid event type");var le=g(z)?!!z.capture:!!z,je=Bs(f);if(je||(f[Va]=je=new Fr(f)),v=je.add(y,v,S,le,Y),v.proxy)return v;if(S=_d(),v.proxy=S,S.src=f,S.listener=v,f.addEventListener)ye||(z=le),z===void 0&&(z=!1),f.addEventListener(y.toString(),S,z);else if(f.attachEvent)f.attachEvent(Ua(y.toString()),S);else if(f.addListener&&f.removeListener)f.addListener(S);else throw Error("addEventListener and attachEvent are unavailable.");return v}function _d(){function f(v){return y.call(f.src,f.listener,v)}const y=vd;return f}function dl(f,y,v,S,z){if(Array.isArray(y))for(var Y=0;Y<y.length;Y++)dl(f,y[Y],v,S,z);else S=g(S)?!!S.capture:!!S,v=mc(v),f&&f[jt]?(f=f.i,y=String(y).toString(),y in f.g&&(Y=f.g[y],v=La(Y,v,S,z),-1<v&&(Oi(Y[v]),Array.prototype.splice.call(Y,v,1),Y.length==0&&(delete f.g[y],f.h--)))):f&&(f=Bs(f))&&(y=f.g[y.toString()],f=-1,y&&(f=La(y,v,S,z)),(v=-1<f?y[f]:null)&&zs(v))}function zs(f){if(typeof f!="number"&&f&&!f.da){var y=f.src;if(y&&y[jt])Ma(y.i,f);else{var v=f.type,S=f.proxy;y.removeEventListener?y.removeEventListener(v,S,f.capture):y.detachEvent?y.detachEvent(Ua(v),S):y.addListener&&y.removeListener&&y.removeListener(S),(v=Bs(y))?(Ma(v,f),v.h==0&&(v.src=null,y[Va]=null)):Oi(f)}}}function Ua(f){return f in hl?hl[f]:hl[f]="on"+f}function vd(f,y){if(f.da)f=!0;else{y=new De(y,this);var v=f.listener,S=f.ha||f.src;f.fa&&zs(f),f=v.call(S,y)}return f}function Bs(f){return f=f[Va],f instanceof Fr?f:null}var ml="__closure_events_fn_"+(1e9*Math.random()>>>0);function mc(f){return typeof f=="function"?f:(f[ml]||(f[ml]=function(y){return f.handleEvent(y)}),f[ml])}function pt(){ce.call(this),this.i=new Fr(this),this.M=this,this.F=null}D(pt,ce),pt.prototype[jt]=!0,pt.prototype.removeEventListener=function(f,y,v,S){dl(this,f,y,v,S)};function We(f,y){var v,S=f.F;if(S)for(v=[];S;S=S.F)v.push(S);if(f=f.M,S=y.type||y,typeof y=="string")y=new oe(y,f);else if(y instanceof oe)y.target=y.target||f;else{var z=y;y=new oe(S,f),P(y,z)}if(z=!0,v)for(var Y=v.length-1;0<=Y;Y--){var le=y.g=v[Y];z=wn(le,S,!0,y)&&z}if(le=y.g=f,z=wn(le,S,!0,y)&&z,z=wn(le,S,!1,y)&&z,v)for(Y=0;Y<v.length;Y++)le=y.g=v[Y],z=wn(le,S,!1,y)&&z}pt.prototype.N=function(){if(pt.aa.N.call(this),this.i){var f=this.i,y;for(y in f.g){for(var v=f.g[y],S=0;S<v.length;S++)Oi(v[S]);delete f.g[y],f.h--}}this.F=null},pt.prototype.K=function(f,y,v,S){return this.i.add(String(f),y,!1,v,S)},pt.prototype.L=function(f,y,v,S){return this.i.add(String(f),y,!0,v,S)};function wn(f,y,v,S){if(y=f.i.g[String(y)],!y)return!0;y=y.concat();for(var z=!0,Y=0;Y<y.length;++Y){var le=y[Y];if(le&&!le.da&&le.capture==v){var je=le.listener,Dt=le.ha||le.src;le.fa&&Ma(f.i,le),z=je.call(Dt,S)!==!1&&z}}return z&&!S.defaultPrevented}function nn(f,y,v){if(typeof f=="function")v&&(f=w(f,v));else if(f&&typeof f.handleEvent=="function")f=w(f.handleEvent,f);else throw Error("Invalid listener argument");return 2147483647<Number(y)?-1:d.setTimeout(f,y||0)}function pc(f){f.g=nn(()=>{f.g=null,f.i&&(f.i=!1,pc(f))},f.l);const y=f.h;f.h=null,f.m.apply(null,y)}class Ed extends ce{constructor(y,v){super(),this.m=y,this.l=v,this.h=null,this.i=!1,this.g=null}j(y){this.h=arguments,this.g?this.i=!0:pc(this)}N(){super.N(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ja(f){ce.call(this),this.h=f,this.g={}}D(ja,ce);var za=[];function Ba(f){ge(f.g,function(y,v){this.g.hasOwnProperty(v)&&zs(y)},f),f.g={}}ja.prototype.N=function(){ja.aa.N.call(this),Ba(this)},ja.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var er=d.JSON.stringify,Fs=d.JSON.parse,Fa=class{stringify(f){return d.JSON.stringify(f,void 0)}parse(f){return d.JSON.parse(f,void 0)}};function pl(){}pl.prototype.h=null;function gl(f){return f.h||(f.h=f.i())}function yl(){}var qr={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Hr(){oe.call(this,"d")}D(Hr,oe);function _l(){oe.call(this,"c")}D(_l,oe);var dr={},vl=null;function Di(){return vl=vl||new pt}dr.La="serverreachability";function qs(f){oe.call(this,dr.La,f)}D(qs,oe);function ki(f){const y=Di();We(y,new qs(y))}dr.STAT_EVENT="statevent";function gc(f,y){oe.call(this,dr.STAT_EVENT,f),this.stat=y}D(gc,oe);function lt(f){const y=Di();We(y,new gc(y,f))}dr.Ma="timingevent";function Ot(f,y){oe.call(this,dr.Ma,f),this.size=y}D(Ot,oe);function St(f,y){if(typeof f!="function")throw Error("Fn must not be null and must be a function");return d.setTimeout(function(){f()},y)}function zn(){this.g=!0}zn.prototype.xa=function(){this.g=!1};function El(f,y,v,S,z,Y){f.info(function(){if(f.g)if(Y)for(var le="",je=Y.split("&"),Dt=0;Dt<je.length;Dt++){var ze=je[Dt].split("=");if(1<ze.length){var Bt=ze[0];ze=ze[1];var kt=Bt.split("_");le=2<=kt.length&&kt[1]=="type"?le+(Bt+"="+ze+"&"):le+(Bt+"=redacted&")}}else le=null;else le=Y;return"XMLHTTP REQ ("+S+") [attempt "+z+"]: "+y+`
`+v+`
`+le})}function Td(f,y,v,S,z,Y,le){f.info(function(){return"XMLHTTP RESP ("+S+") [ attempt "+z+"]: "+y+`
`+v+`
`+Y+" "+le})}function Pi(f,y,v,S){f.info(function(){return"XMLHTTP TEXT ("+y+"): "+qa(f,v)+(S?" "+S:"")})}function yc(f,y){f.info(function(){return"TIMEOUT: "+y})}zn.prototype.info=function(){};function qa(f,y){if(!f.g)return y;if(!y)return null;try{var v=JSON.parse(y);if(v){for(f=0;f<v.length;f++)if(Array.isArray(v[f])){var S=v[f];if(!(2>S.length)){var z=S[1];if(Array.isArray(z)&&!(1>z.length)){var Y=z[0];if(Y!="noop"&&Y!="stop"&&Y!="close")for(var le=1;le<z.length;le++)z[le]=""}}}}return er(v)}catch{return y}}var Mi={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Gr={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},mr;function pr(){}D(pr,pl),pr.prototype.g=function(){return new XMLHttpRequest},pr.prototype.i=function(){return{}},mr=new pr;function hn(f,y,v,S){this.j=f,this.i=y,this.l=v,this.R=S||1,this.U=new ja(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Tt}function Tt(){this.i=null,this.g="",this.h=!1}var Tl={},Hs={};function tr(f,y,v){f.L=1,f.v=Ya(Sn(y)),f.m=v,f.P=!0,$r(f,null)}function $r(f,y){f.F=Date.now(),Ha(f),f.A=Sn(f.v);var v=f.A,S=f.R;Array.isArray(S)||(S=[String(S)]),Il(v.i,"t",S),f.C=0,v=f.j.J,f.h=new Tt,f.g=kc(f.j,v?y:null,!f.m),0<f.O&&(f.M=new Ed(w(f.Y,f,f.g),f.O)),y=f.U,v=f.g,S=f.ca;var z="readystatechange";Array.isArray(z)||(z&&(za[0]=z.toString()),z=za);for(var Y=0;Y<z.length;Y++){var le=dc(v,z[Y],S||y.handleEvent,!1,y.h||y);if(!le)break;y.g[le.key]=le}y=f.H?R(f.H):{},f.m?(f.u||(f.u="POST"),y["Content-Type"]="application/x-www-form-urlencoded",f.g.ea(f.A,f.u,f.m,y)):(f.u="GET",f.g.ea(f.A,f.u,null,y)),ki(),El(f.i,f.u,f.A,f.l,f.R,f.m)}hn.prototype.ca=function(f){f=f.target;const y=this.M;y&&Hn(f)==3?y.j():this.Y(f)},hn.prototype.Y=function(f){try{if(f==this.g)e:{const kt=Hn(this.g);var y=this.g.Ba();const ei=this.g.Z();if(!(3>kt)&&(kt!=3||this.g&&(this.h.h||this.g.oa()||Sc(this.g)))){this.J||kt!=4||y==7||(y==8||0>=ei?ki(3):ki(2)),Li(this);var v=this.g.Z();this.X=v;t:if(_c(this)){var S=Sc(this.g);f="";var z=S.length,Y=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Kt(this),gr(this);var le="";break t}this.h.i=new d.TextDecoder}for(y=0;y<z;y++)this.h.h=!0,f+=this.h.i.decode(S[y],{stream:!(Y&&y==z-1)});S.length=0,this.h.g+=f,this.C=0,le=this.h.g}else le=this.g.oa();if(this.o=v==200,Td(this.i,this.u,this.A,this.l,this.R,kt,v),this.o){if(this.T&&!this.K){t:{if(this.g){var je,Dt=this.g;if((je=Dt.g?Dt.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Z(je)){var ze=je;break t}}ze=null}if(v=ze)Pi(this.i,this.l,v,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Ga(this,v);else{this.o=!1,this.s=3,lt(12),Kt(this),gr(this);break e}}if(this.P){v=!0;let Yt;for(;!this.J&&this.C<le.length;)if(Yt=vc(this,le),Yt==Hs){kt==4&&(this.s=4,lt(14),v=!1),Pi(this.i,this.l,null,"[Incomplete Response]");break}else if(Yt==Tl){this.s=4,lt(15),Pi(this.i,this.l,le,"[Invalid Chunk]"),v=!1;break}else Pi(this.i,this.l,Yt,null),Ga(this,Yt);if(_c(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),kt!=4||le.length!=0||this.h.h||(this.s=1,lt(16),v=!1),this.o=this.o&&v,!v)Pi(this.i,this.l,le,"[Invalid Chunked Response]"),Kt(this),gr(this);else if(0<le.length&&!this.W){this.W=!0;var Bt=this.j;Bt.g==this&&Bt.ba&&!Bt.M&&(Bt.j.info("Great, no buffering proxy detected. Bytes received: "+le.length),ns(Bt),Bt.M=!0,lt(11))}}else Pi(this.i,this.l,le,null),Ga(this,le);kt==4&&Kt(this),this.o&&!this.J&&(kt==4?Nc(this.j,this):(this.o=!1,Ha(this)))}else Rd(this.g),v==400&&0<le.indexOf("Unknown SID")?(this.s=3,lt(12)):(this.s=0,lt(13)),Kt(this),gr(this)}}}catch{}finally{}};function _c(f){return f.g?f.u=="GET"&&f.L!=2&&f.j.Ca:!1}function vc(f,y){var v=f.C,S=y.indexOf(`
`,v);return S==-1?Hs:(v=Number(y.substring(v,S)),isNaN(v)?Tl:(S+=1,S+v>y.length?Hs:(y=y.slice(S,S+v),f.C=S+v,y)))}hn.prototype.cancel=function(){this.J=!0,Kt(this)};function Ha(f){f.S=Date.now()+f.I,Ec(f,f.I)}function Ec(f,y){if(f.B!=null)throw Error("WatchDog timer not null");f.B=St(w(f.ba,f),y)}function Li(f){f.B&&(d.clearTimeout(f.B),f.B=null)}hn.prototype.ba=function(){this.B=null;const f=Date.now();0<=f-this.S?(yc(this.i,this.A),this.L!=2&&(ki(),lt(17)),Kt(this),this.s=2,gr(this)):Ec(this,this.S-f)};function gr(f){f.j.G==0||f.J||Nc(f.j,f)}function Kt(f){Li(f);var y=f.M;y&&typeof y.ma=="function"&&y.ma(),f.M=null,Ba(f.U),f.g&&(y=f.g,f.g=null,y.abort(),y.ma())}function Ga(f,y){try{var v=f.j;if(v.G!=0&&(v.g==f||bl(v.h,f))){if(!f.K&&bl(v.h,f)&&v.G==3){try{var S=v.Da.g.parse(y)}catch{S=null}if(Array.isArray(S)&&S.length==3){var z=S;if(z[0]==0){e:if(!v.u){if(v.g)if(v.g.F+3e3<f.F)no(v),eo(v);else break e;Dl(v),lt(18)}}else v.za=z[1],0<v.za-v.T&&37500>z[2]&&v.F&&v.v==0&&!v.C&&(v.C=St(w(v.Za,v),6e3));if(1>=$s(v.h)&&v.ca){try{v.ca()}catch{}v.ca=void 0}}else Jr(v,11)}else if((f.K||v.g==f)&&no(v),!Z(y))for(z=v.Da.g.parse(y),y=0;y<z.length;y++){let ze=z[y];if(v.T=ze[0],ze=ze[1],v.G==2)if(ze[0]=="c"){v.K=ze[1],v.ia=ze[2];const Bt=ze[3];Bt!=null&&(v.la=Bt,v.j.info("VER="+v.la));const kt=ze[4];kt!=null&&(v.Aa=kt,v.j.info("SVER="+v.Aa));const ei=ze[5];ei!=null&&typeof ei=="number"&&0<ei&&(S=1.5*ei,v.L=S,v.j.info("backChannelRequestTimeoutMs_="+S)),S=v;const Yt=f.g;if(Yt){const Ar=Yt.g?Yt.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ar){var Y=S.h;Y.g||Ar.indexOf("spdy")==-1&&Ar.indexOf("quic")==-1&&Ar.indexOf("h2")==-1||(Y.j=Y.l,Y.g=new Set,Y.h&&(Ks(Y,Y.h),Y.h=null))}if(S.D){const Pl=Yt.g?Yt.g.getResponseHeader("X-HTTP-Session-Id"):null;Pl&&(S.ya=Pl,et(S.I,S.D,Pl))}}v.G=3,v.l&&v.l.ua(),v.ba&&(v.R=Date.now()-f.F,v.j.info("Handshake RTT: "+v.R+"ms")),S=v;var le=f;if(S.qa=Dc(S,S.J?S.ia:null,S.W),le.K){dn(S.h,le);var je=le,Dt=S.L;Dt&&(je.I=Dt),je.B&&(Li(je),Ha(je)),S.g=le}else Cc(S);0<v.i.length&&to(v)}else ze[0]!="stop"&&ze[0]!="close"||Jr(v,7);else v.G==3&&(ze[0]=="stop"||ze[0]=="close"?ze[0]=="stop"?Jr(v,7):Nl(v):ze[0]!="noop"&&v.l&&v.l.ta(ze),v.v=0)}}ki(4)}catch{}}var Tc=class{constructor(f,y){this.g=f,this.map=y}};function Kr(f){this.l=f||10,d.PerformanceNavigationTiming?(f=d.performance.getEntriesByType("navigation"),f=0<f.length&&(f[0].nextHopProtocol=="hq"||f[0].nextHopProtocol=="h2")):f=!!(d.chrome&&d.chrome.loadTimes&&d.chrome.loadTimes()&&d.chrome.loadTimes().wasFetchedViaSpdy),this.j=f?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function Gs(f){return f.h?!0:f.g?f.g.size>=f.j:!1}function $s(f){return f.h?1:f.g?f.g.size:0}function bl(f,y){return f.h?f.h==y:f.g?f.g.has(y):!1}function Ks(f,y){f.g?f.g.add(y):f.h=y}function dn(f,y){f.h&&f.h==y?f.h=null:f.g&&f.g.has(y)&&f.g.delete(y)}Kr.prototype.cancel=function(){if(this.i=Al(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const f of this.g.values())f.cancel();this.g.clear()}};function Al(f){if(f.h!=null)return f.i.concat(f.h.D);if(f.g!=null&&f.g.size!==0){let y=f.i;for(const v of f.g.values())y=y.concat(v.D);return y}return H(f.i)}function bd(f){if(f.V&&typeof f.V=="function")return f.V();if(typeof Map<"u"&&f instanceof Map||typeof Set<"u"&&f instanceof Set)return Array.from(f.values());if(typeof f=="string")return f.split("");if(m(f)){for(var y=[],v=f.length,S=0;S<v;S++)y.push(f[S]);return y}y=[],v=0;for(S in f)y[v++]=f[S];return y}function Ys(f){if(f.na&&typeof f.na=="function")return f.na();if(!f.V||typeof f.V!="function"){if(typeof Map<"u"&&f instanceof Map)return Array.from(f.keys());if(!(typeof Set<"u"&&f instanceof Set)){if(m(f)||typeof f=="string"){var y=[];f=f.length;for(var v=0;v<f;v++)y.push(v);return y}y=[],v=0;for(const S in f)y[v++]=S;return y}}}function wl(f,y){if(f.forEach&&typeof f.forEach=="function")f.forEach(y,void 0);else if(m(f)||typeof f=="string")Array.prototype.forEach.call(f,y,void 0);else for(var v=Ys(f),S=bd(f),z=S.length,Y=0;Y<z;Y++)y.call(void 0,S[Y],v&&v[Y],f)}var $a=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ad(f,y){if(f){f=f.split("&");for(var v=0;v<f.length;v++){var S=f[v].indexOf("="),z=null;if(0<=S){var Y=f[v].substring(0,S);z=f[v].substring(S+1)}else Y=f[v];y(Y,z?decodeURIComponent(z.replace(/\+/g," ")):"")}}}function Rt(f){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,f instanceof Rt){this.h=f.h,Ka(this,f.j),this.o=f.o,this.g=f.g,Vi(this,f.s),this.l=f.l;var y=f.i,v=new Qr;v.i=y.i,y.g&&(v.g=new Map(y.g),v.h=y.h),Yr(this,v),this.m=f.m}else f&&(y=String(f).match($a))?(this.h=!1,Ka(this,y[1]||"",!0),this.o=Bn(y[2]||""),this.g=Bn(y[3]||"",!0),Vi(this,y[4]),this.l=Bn(y[5]||"",!0),Yr(this,y[6]||"",!0),this.m=Bn(y[7]||"")):(this.h=!1,this.i=new Qr(null,this.h))}Rt.prototype.toString=function(){var f=[],y=this.j;y&&f.push(Qa(y,Sl,!0),":");var v=this.g;return(v||y=="file")&&(f.push("//"),(y=this.o)&&f.push(Qa(y,Sl,!0),"@"),f.push(encodeURIComponent(String(v)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),v=this.s,v!=null&&f.push(":",String(v))),(v=this.l)&&(this.g&&v.charAt(0)!="/"&&f.push("/"),f.push(Qa(v,v.charAt(0)=="/"?wd:Rl,!0))),(v=this.i.toString())&&f.push("?",v),(v=this.m)&&f.push("#",Qa(v,Qs)),f.join("")};function Sn(f){return new Rt(f)}function Ka(f,y,v){f.j=v?Bn(y,!0):y,f.j&&(f.j=f.j.replace(/:$/,""))}function Vi(f,y){if(y){if(y=Number(y),isNaN(y)||0>y)throw Error("Bad port number "+y);f.s=y}else f.s=null}function Yr(f,y,v){y instanceof Qr?(f.i=y,Ac(f.i,f.h)):(v||(y=Qa(y,Sd)),f.i=new Qr(y,f.h))}function et(f,y,v){f.i.set(y,v)}function Ya(f){return et(f,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),f}function Bn(f,y){return f?y?decodeURI(f.replace(/%25/g,"%2525")):decodeURIComponent(f):""}function Qa(f,y,v){return typeof f=="string"?(f=encodeURI(f).replace(y,bc),v&&(f=f.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),f):null}function bc(f){return f=f.charCodeAt(0),"%"+(f>>4&15).toString(16)+(f&15).toString(16)}var Sl=/[#\/\?@]/g,Rl=/[#\?:]/g,wd=/[#\?]/g,Sd=/[#\?@]/g,Qs=/#/g;function Qr(f,y){this.h=this.g=null,this.i=f||null,this.j=!!y}function Fn(f){f.g||(f.g=new Map,f.h=0,f.i&&Ad(f.i,function(y,v){f.add(decodeURIComponent(y.replace(/\+/g," ")),v)}))}n=Qr.prototype,n.add=function(f,y){Fn(this),this.i=null,f=yr(this,f);var v=this.g.get(f);return v||this.g.set(f,v=[]),v.push(y),this.h+=1,this};function Xr(f,y){Fn(f),y=yr(f,y),f.g.has(y)&&(f.i=null,f.h-=f.g.get(y).length,f.g.delete(y))}function Wr(f,y){return Fn(f),y=yr(f,y),f.g.has(y)}n.forEach=function(f,y){Fn(this),this.g.forEach(function(v,S){v.forEach(function(z){f.call(y,z,S,this)},this)},this)},n.na=function(){Fn(this);const f=Array.from(this.g.values()),y=Array.from(this.g.keys()),v=[];for(let S=0;S<y.length;S++){const z=f[S];for(let Y=0;Y<z.length;Y++)v.push(y[S])}return v},n.V=function(f){Fn(this);let y=[];if(typeof f=="string")Wr(this,f)&&(y=y.concat(this.g.get(yr(this,f))));else{f=Array.from(this.g.values());for(let v=0;v<f.length;v++)y=y.concat(f[v])}return y},n.set=function(f,y){return Fn(this),this.i=null,f=yr(this,f),Wr(this,f)&&(this.h-=this.g.get(f).length),this.g.set(f,[y]),this.h+=1,this},n.get=function(f,y){return f?(f=this.V(f),0<f.length?String(f[0]):y):y};function Il(f,y,v){Xr(f,y),0<v.length&&(f.i=null,f.g.set(yr(f,y),H(v)),f.h+=v.length)}n.toString=function(){if(this.i)return this.i;if(!this.g)return"";const f=[],y=Array.from(this.g.keys());for(var v=0;v<y.length;v++){var S=y[v];const Y=encodeURIComponent(String(S)),le=this.V(S);for(S=0;S<le.length;S++){var z=Y;le[S]!==""&&(z+="="+encodeURIComponent(String(le[S]))),f.push(z)}}return this.i=f.join("&")};function yr(f,y){return y=String(y),f.j&&(y=y.toLowerCase()),y}function Ac(f,y){y&&!f.j&&(Fn(f),f.i=null,f.g.forEach(function(v,S){var z=S.toLowerCase();S!=z&&(Xr(this,S),Il(this,z,v))},f)),f.j=y}function Xa(f,y){const v=new zn;if(d.Image){const S=new Image;S.onload=x(qn,v,"TestLoadImage: loaded",!0,y,S),S.onerror=x(qn,v,"TestLoadImage: error",!1,y,S),S.onabort=x(qn,v,"TestLoadImage: abort",!1,y,S),S.ontimeout=x(qn,v,"TestLoadImage: timeout",!1,y,S),d.setTimeout(function(){S.ontimeout&&S.ontimeout()},1e4),S.src=f}else y(!1)}function nr(f,y){const v=new zn,S=new AbortController,z=setTimeout(()=>{S.abort(),qn(v,"TestPingServer: timeout",!1,y)},1e4);fetch(f,{signal:S.signal}).then(Y=>{clearTimeout(z),Y.ok?qn(v,"TestPingServer: ok",!0,y):qn(v,"TestPingServer: server error",!1,y)}).catch(()=>{clearTimeout(z),qn(v,"TestPingServer: error",!1,y)})}function qn(f,y,v,S,z){try{z&&(z.onload=null,z.onerror=null,z.onabort=null,z.ontimeout=null),S(v)}catch{}}function Wa(){this.g=new Fa}function _r(f,y,v){const S=v||"";try{wl(f,function(z,Y){let le=z;g(z)&&(le=er(z)),y.push(S+Y+"="+encodeURIComponent(le))})}catch(z){throw y.push(S+"type="+encodeURIComponent("_badmap")),z}}function Ui(f){this.l=f.Ub||null,this.j=f.eb||!1}D(Ui,pl),Ui.prototype.g=function(){return new Zr(this.l,this.j)},Ui.prototype.i=function(f){return function(){return f}}({});function Zr(f,y){pt.call(this),this.D=f,this.o=y,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}D(Zr,pt),n=Zr.prototype,n.open=function(f,y){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=f,this.A=y,this.readyState=1,Er(this)},n.send=function(f){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const y={headers:this.u,method:this.B,credentials:this.m,cache:void 0};f&&(y.body=f),(this.D||d).fetch(new Request(this.A,y)).then(this.Sa.bind(this),this.ga.bind(this))},n.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,vr(this)),this.readyState=0},n.Sa=function(f){if(this.g&&(this.l=f,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=f.headers,this.readyState=2,Er(this)),this.g&&(this.readyState=3,Er(this),this.g)))if(this.responseType==="arraybuffer")f.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof d.ReadableStream<"u"&&"body"in f){if(this.j=f.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Cl(this)}else f.text().then(this.Ra.bind(this),this.ga.bind(this))};function Cl(f){f.j.read().then(f.Pa.bind(f)).catch(f.ga.bind(f))}n.Pa=function(f){if(this.g){if(this.o&&f.value)this.response.push(f.value);else if(!this.o){var y=f.value?f.value:new Uint8Array(0);(y=this.v.decode(y,{stream:!f.done}))&&(this.response=this.responseText+=y)}f.done?vr(this):Er(this),this.readyState==3&&Cl(this)}},n.Ra=function(f){this.g&&(this.response=this.responseText=f,vr(this))},n.Qa=function(f){this.g&&(this.response=f,vr(this))},n.ga=function(){this.g&&vr(this)};function vr(f){f.readyState=4,f.l=null,f.j=null,f.v=null,Er(f)}n.setRequestHeader=function(f,y){this.u.append(f,y)},n.getResponseHeader=function(f){return this.h&&this.h.get(f.toLowerCase())||""},n.getAllResponseHeaders=function(){if(!this.h)return"";const f=[],y=this.h.entries();for(var v=y.next();!v.done;)v=v.value,f.push(v[0]+": "+v[1]),v=y.next();return f.join(`\r
`)};function Er(f){f.onreadystatechange&&f.onreadystatechange.call(f)}Object.defineProperty(Zr.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(f){this.m=f?"include":"same-origin"}});function xl(f){let y="";return ge(f,function(v,S){y+=S,y+=":",y+=v,y+=`\r
`}),y}function zt(f,y,v){e:{for(S in v){var S=!1;break e}S=!0}S||(v=xl(v),typeof f=="string"?v!=null&&encodeURIComponent(String(v)):et(f,y,v))}function Qe(f){pt.call(this),this.headers=new Map,this.o=f||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}D(Qe,pt);var Xs=/^https?$/i,Za=["POST","PUT"];n=Qe.prototype,n.Ha=function(f){this.J=f},n.ea=function(f,y,v,S){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+f);y=y?y.toUpperCase():"GET",this.D=f,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():mr.g(),this.v=this.o?gl(this.o):gl(mr),this.g.onreadystatechange=w(this.Ea,this);try{this.B=!0,this.g.open(y,String(f),!0),this.B=!1}catch(Y){wc(this,Y);return}if(f=v||"",v=new Map(this.headers),S)if(Object.getPrototypeOf(S)===Object.prototype)for(var z in S)v.set(z,S[z]);else if(typeof S.keys=="function"&&typeof S.get=="function")for(const Y of S.keys())v.set(Y,S.get(Y));else throw Error("Unknown input type for opt_headers: "+String(S));S=Array.from(v.keys()).find(Y=>Y.toLowerCase()=="content-type"),z=d.FormData&&f instanceof d.FormData,!(0<=Array.prototype.indexOf.call(Za,y,void 0))||S||z||v.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[Y,le]of v)this.g.setRequestHeader(Y,le);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Ja(this),this.u=!0,this.g.send(f),this.u=!1}catch(Y){wc(this,Y)}};function wc(f,y){f.h=!1,f.g&&(f.j=!0,f.g.abort(),f.j=!1),f.l=y,f.m=5,Ws(f),Tr(f)}function Ws(f){f.A||(f.A=!0,We(f,"complete"),We(f,"error"))}n.abort=function(f){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=f||7,We(this,"complete"),We(this,"abort"),Tr(this))},n.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Tr(this,!0)),Qe.aa.N.call(this)},n.Ea=function(){this.s||(this.B||this.u||this.j?Zs(this):this.bb())},n.bb=function(){Zs(this)};function Zs(f){if(f.h&&typeof c<"u"&&(!f.v[1]||Hn(f)!=4||f.Z()!=2)){if(f.u&&Hn(f)==4)nn(f.Ea,0,f);else if(We(f,"readystatechange"),Hn(f)==4){f.h=!1;try{const le=f.Z();e:switch(le){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var y=!0;break e;default:y=!1}var v;if(!(v=y)){var S;if(S=le===0){var z=String(f.D).match($a)[1]||null;!z&&d.self&&d.self.location&&(z=d.self.location.protocol.slice(0,-1)),S=!Xs.test(z?z.toLowerCase():"")}v=S}if(v)We(f,"complete"),We(f,"success");else{f.m=6;try{var Y=2<Hn(f)?f.g.statusText:""}catch{Y=""}f.l=Y+" ["+f.Z()+"]",Ws(f)}}finally{Tr(f)}}}}function Tr(f,y){if(f.g){Ja(f);const v=f.g,S=f.v[0]?()=>{}:null;f.g=null,f.v=null,y||We(f,"ready");try{v.onreadystatechange=S}catch{}}}function Ja(f){f.I&&(d.clearTimeout(f.I),f.I=null)}n.isActive=function(){return!!this.g};function Hn(f){return f.g?f.g.readyState:0}n.Z=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}},n.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},n.Oa=function(f){if(this.g){var y=this.g.responseText;return f&&y.indexOf(f)==0&&(y=y.substring(f.length)),Fs(y)}};function Sc(f){try{if(!f.g)return null;if("response"in f.g)return f.g.response;switch(f.H){case"":case"text":return f.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in f.g)return f.g.mozResponseArrayBuffer}return null}catch{return null}}function Rd(f){const y={};f=(f.g&&2<=Hn(f)&&f.g.getAllResponseHeaders()||"").split(`\r
`);for(let S=0;S<f.length;S++){if(Z(f[S]))continue;var v=V(f[S]);const z=v[0];if(v=v[1],typeof v!="string")continue;v=v.trim();const Y=y[z]||[];y[z]=Y,Y.push(v)}O(y,function(S){return S.join(", ")})}n.Ba=function(){return this.m},n.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function es(f,y,v){return v&&v.internalChannelParams&&v.internalChannelParams[f]||y}function Js(f){this.Aa=0,this.i=[],this.j=new zn,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=es("failFast",!1,f),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=es("baseRetryDelayMs",5e3,f),this.cb=es("retryDelaySeedMs",1e4,f),this.Wa=es("forwardChannelMaxRetries",2,f),this.wa=es("forwardChannelRequestTimeoutMs",2e4,f),this.pa=f&&f.xmlHttpFactory||void 0,this.Xa=f&&f.Tb||void 0,this.Ca=f&&f.useFetchStreams||!1,this.L=void 0,this.J=f&&f.supportsCrossDomainXhr||!1,this.K="",this.h=new Kr(f&&f.concurrentRequestLimit),this.Da=new Wa,this.P=f&&f.fastHandshake||!1,this.O=f&&f.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=f&&f.Rb||!1,f&&f.xa&&this.j.xa(),f&&f.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&f&&f.detectBufferingProxy||!1,this.ja=void 0,f&&f.longPollingTimeout&&0<f.longPollingTimeout&&(this.ja=f.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}n=Js.prototype,n.la=8,n.G=1,n.connect=function(f,y,v,S){lt(0),this.W=f,this.H=y||{},v&&S!==void 0&&(this.H.OSID=v,this.H.OAID=S),this.F=this.X,this.I=Dc(this,null,this.W),to(this)};function Nl(f){if(Rc(f),f.G==3){var y=f.U++,v=Sn(f.I);if(et(v,"SID",f.K),et(v,"RID",y),et(v,"TYPE","terminate"),ts(f,v),y=new hn(f,f.j,y),y.L=2,y.v=Ya(Sn(v)),v=!1,d.navigator&&d.navigator.sendBeacon)try{v=d.navigator.sendBeacon(y.v.toString(),"")}catch{}!v&&d.Image&&(new Image().src=y.v,v=!0),v||(y.g=kc(y.j,null),y.g.ea(y.v)),y.F=Date.now(),Ha(y)}Oc(f)}function eo(f){f.g&&(ns(f),f.g.cancel(),f.g=null)}function Rc(f){eo(f),f.u&&(d.clearTimeout(f.u),f.u=null),no(f),f.h.cancel(),f.s&&(typeof f.s=="number"&&d.clearTimeout(f.s),f.s=null)}function to(f){if(!Gs(f.h)&&!f.s){f.s=!0;var y=f.Ga;ue||k(),pe||(ue(),pe=!0),Ge.add(y,f),f.B=0}}function Id(f,y){return $s(f.h)>=f.h.j-(f.s?1:0)?!1:f.s?(f.i=y.D.concat(f.i),!0):f.G==1||f.G==2||f.B>=(f.Va?0:f.Wa)?!1:(f.s=St(w(f.Ga,f,y),kl(f,f.B)),f.B++,!0)}n.Ga=function(f){if(this.s)if(this.s=null,this.G==1){if(!f){this.U=Math.floor(1e5*Math.random()),f=this.U++;const z=new hn(this,this.j,f);let Y=this.o;if(this.S&&(Y?(Y=R(Y),P(Y,this.S)):Y=this.S),this.m!==null||this.O||(z.H=Y,Y=null),this.P)e:{for(var y=0,v=0;v<this.i.length;v++){t:{var S=this.i[v];if("__data__"in S.map&&(S=S.map.__data__,typeof S=="string")){S=S.length;break t}S=void 0}if(S===void 0)break;if(y+=S,4096<y){y=v;break e}if(y===4096||v===this.i.length-1){y=v+1;break e}}y=1e3}else y=1e3;y=Ic(this,z,y),v=Sn(this.I),et(v,"RID",f),et(v,"CVER",22),this.D&&et(v,"X-HTTP-Session-Id",this.D),ts(this,v),Y&&(this.O?y="headers="+encodeURIComponent(String(xl(Y)))+"&"+y:this.m&&zt(v,this.m,Y)),Ks(this.h,z),this.Ua&&et(v,"TYPE","init"),this.P?(et(v,"$req",y),et(v,"SID","null"),z.T=!0,tr(z,v,null)):tr(z,v,y),this.G=2}}else this.G==3&&(f?Ol(this,f):this.i.length==0||Gs(this.h)||Ol(this))};function Ol(f,y){var v;y?v=y.l:v=f.U++;const S=Sn(f.I);et(S,"SID",f.K),et(S,"RID",v),et(S,"AID",f.T),ts(f,S),f.m&&f.o&&zt(S,f.m,f.o),v=new hn(f,f.j,v,f.B+1),f.m===null&&(v.H=f.o),y&&(f.i=y.D.concat(f.i)),y=Ic(f,v,1e3),v.I=Math.round(.5*f.wa)+Math.round(.5*f.wa*Math.random()),Ks(f.h,v),tr(v,S,y)}function ts(f,y){f.H&&ge(f.H,function(v,S){et(y,S,v)}),f.l&&wl({},function(v,S){et(y,S,v)})}function Ic(f,y,v){v=Math.min(f.i.length,v);var S=f.l?w(f.l.Na,f.l,f):null;e:{var z=f.i;let Y=-1;for(;;){const le=["count="+v];Y==-1?0<v?(Y=z[0].g,le.push("ofs="+Y)):Y=0:le.push("ofs="+Y);let je=!0;for(let Dt=0;Dt<v;Dt++){let ze=z[Dt].g;const Bt=z[Dt].map;if(ze-=Y,0>ze)Y=Math.max(0,z[Dt].g-100),je=!1;else try{_r(Bt,le,"req"+ze+"_")}catch{S&&S(Bt)}}if(je){S=le.join("&");break e}}}return f=f.i.splice(0,v),y.D=f,S}function Cc(f){if(!f.g&&!f.u){f.Y=1;var y=f.Fa;ue||k(),pe||(ue(),pe=!0),Ge.add(y,f),f.v=0}}function Dl(f){return f.g||f.u||3<=f.v?!1:(f.Y++,f.u=St(w(f.Fa,f),kl(f,f.v)),f.v++,!0)}n.Fa=function(){if(this.u=null,xc(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var f=2*this.R;this.j.info("BP detection timer enabled: "+f),this.A=St(w(this.ab,this),f)}},n.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,lt(10),eo(this),xc(this))};function ns(f){f.A!=null&&(d.clearTimeout(f.A),f.A=null)}function xc(f){f.g=new hn(f,f.j,"rpc",f.Y),f.m===null&&(f.g.H=f.o),f.g.O=0;var y=Sn(f.qa);et(y,"RID","rpc"),et(y,"SID",f.K),et(y,"AID",f.T),et(y,"CI",f.F?"0":"1"),!f.F&&f.ja&&et(y,"TO",f.ja),et(y,"TYPE","xmlhttp"),ts(f,y),f.m&&f.o&&zt(y,f.m,f.o),f.L&&(f.g.I=f.L);var v=f.g;f=f.ia,v.L=1,v.v=Ya(Sn(y)),v.m=null,v.P=!0,$r(v,f)}n.Za=function(){this.C!=null&&(this.C=null,eo(this),Dl(this),lt(19))};function no(f){f.C!=null&&(d.clearTimeout(f.C),f.C=null)}function Nc(f,y){var v=null;if(f.g==y){no(f),ns(f),f.g=null;var S=2}else if(bl(f.h,y))v=y.D,dn(f.h,y),S=1;else return;if(f.G!=0){if(y.o)if(S==1){v=y.m?y.m.length:0,y=Date.now()-y.F;var z=f.B;S=Di(),We(S,new Ot(S,v)),to(f)}else Cc(f);else if(z=y.s,z==3||z==0&&0<y.X||!(S==1&&Id(f,y)||S==2&&Dl(f)))switch(v&&0<v.length&&(y=f.h,y.i=y.i.concat(v)),z){case 1:Jr(f,5);break;case 4:Jr(f,10);break;case 3:Jr(f,6);break;default:Jr(f,2)}}}function kl(f,y){let v=f.Ta+Math.floor(Math.random()*f.cb);return f.isActive()||(v*=2),v*y}function Jr(f,y){if(f.j.info("Error code "+y),y==2){var v=w(f.fb,f),S=f.Xa;const z=!S;S=new Rt(S||"//www.google.com/images/cleardot.gif"),d.location&&d.location.protocol=="http"||Ka(S,"https"),Ya(S),z?Xa(S.toString(),v):nr(S.toString(),v)}else lt(2);f.G=0,f.l&&f.l.sa(y),Oc(f),Rc(f)}n.fb=function(f){f?(this.j.info("Successfully pinged google.com"),lt(2)):(this.j.info("Failed to ping google.com"),lt(1))};function Oc(f){if(f.G=0,f.ka=[],f.l){const y=Al(f.h);(y.length!=0||f.i.length!=0)&&(L(f.ka,y),L(f.ka,f.i),f.h.i.length=0,H(f.i),f.i.length=0),f.l.ra()}}function Dc(f,y,v){var S=v instanceof Rt?Sn(v):new Rt(v);if(S.g!="")y&&(S.g=y+"."+S.g),Vi(S,S.s);else{var z=d.location;S=z.protocol,y=y?y+"."+z.hostname:z.hostname,z=+z.port;var Y=new Rt(null);S&&Ka(Y,S),y&&(Y.g=y),z&&Vi(Y,z),v&&(Y.l=v),S=Y}return v=f.D,y=f.ya,v&&y&&et(S,v,y),et(S,"VER",f.la),ts(f,S),S}function kc(f,y,v){if(y&&!f.J)throw Error("Can't create secondary domain capable XhrIo object.");return y=f.Ca&&!f.pa?new Qe(new Ui({eb:v})):new Qe(f.pa),y.Ha(f.J),y}n.isActive=function(){return!!this.l&&this.l.isActive(this)};function Pc(){}n=Pc.prototype,n.ua=function(){},n.ta=function(){},n.sa=function(){},n.ra=function(){},n.isActive=function(){return!0},n.Na=function(){};function ro(){}ro.prototype.g=function(f,y){return new mn(f,y)};function mn(f,y){pt.call(this),this.g=new Js(y),this.l=f,this.h=y&&y.messageUrlParams||null,f=y&&y.messageHeaders||null,y&&y.clientProtocolHeaderRequired&&(f?f["X-Client-Protocol"]="webchannel":f={"X-Client-Protocol":"webchannel"}),this.g.o=f,f=y&&y.initMessageHeaders||null,y&&y.messageContentType&&(f?f["X-WebChannel-Content-Type"]=y.messageContentType:f={"X-WebChannel-Content-Type":y.messageContentType}),y&&y.va&&(f?f["X-WebChannel-Client-Profile"]=y.va:f={"X-WebChannel-Client-Profile":y.va}),this.g.S=f,(f=y&&y.Sb)&&!Z(f)&&(this.g.m=f),this.v=y&&y.supportsCrossDomainXhr||!1,this.u=y&&y.sendRawJson||!1,(y=y&&y.httpSessionIdParam)&&!Z(y)&&(this.g.D=y,f=this.h,f!==null&&y in f&&(f=this.h,y in f&&delete f[y])),this.j=new br(this)}D(mn,pt),mn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},mn.prototype.close=function(){Nl(this.g)},mn.prototype.o=function(f){var y=this.g;if(typeof f=="string"){var v={};v.__data__=f,f=v}else this.u&&(v={},v.__data__=er(f),f=v);y.i.push(new Tc(y.Ya++,f)),y.G==3&&to(y)},mn.prototype.N=function(){this.g.l=null,delete this.j,Nl(this.g),delete this.g,mn.aa.N.call(this)};function Mc(f){Hr.call(this),f.__headers__&&(this.headers=f.__headers__,this.statusCode=f.__status__,delete f.__headers__,delete f.__status__);var y=f.__sm__;if(y){e:{for(const v in y){f=v;break e}f=void 0}(this.i=f)&&(f=this.i,y=y!==null&&f in y?y[f]:void 0),this.data=y}else this.data=f}D(Mc,Hr);function Lc(){_l.call(this),this.status=1}D(Lc,_l);function br(f){this.g=f}D(br,Pc),br.prototype.ua=function(){We(this.g,"a")},br.prototype.ta=function(f){We(this.g,new Mc(f))},br.prototype.sa=function(f){We(this.g,new Lc)},br.prototype.ra=function(){We(this.g,"b")},ro.prototype.createWebChannel=ro.prototype.g,mn.prototype.send=mn.prototype.o,mn.prototype.open=mn.prototype.m,mn.prototype.close=mn.prototype.close,ww=function(){return new ro},Aw=function(){return Di()},bw=dr,Ng={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Mi.NO_ERROR=0,Mi.TIMEOUT=8,Mi.HTTP_ERROR=6,ah=Mi,Gr.COMPLETE="complete",Tw=Gr,yl.EventType=qr,qr.OPEN="a",qr.CLOSE="b",qr.ERROR="c",qr.MESSAGE="d",pt.prototype.listen=pt.prototype.K,xu=yl,Qe.prototype.listenOnce=Qe.prototype.L,Qe.prototype.getLastError=Qe.prototype.Ka,Qe.prototype.getLastErrorCode=Qe.prototype.Ba,Qe.prototype.getStatus=Qe.prototype.Z,Qe.prototype.getResponseJson=Qe.prototype.Oa,Qe.prototype.getResponseText=Qe.prototype.oa,Qe.prototype.send=Qe.prototype.ea,Qe.prototype.setWithCredentials=Qe.prototype.Ha,Ew=Qe}).apply(typeof Hf<"u"?Hf:typeof self<"u"?self:typeof window<"u"?window:{});const n1="@firebase/firestore",r1="4.7.10";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}on.UNAUTHENTICATED=new on(null),on.GOOGLE_CREDENTIALS=new on("google-credentials-uid"),on.FIRST_PARTY=new on("first-party-uid"),on.MOCK_USER=new on("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ll="11.5.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs=new Gh("@firebase/firestore");function ko(){return Cs.logLevel}function fe(n,...e){if(Cs.logLevel<=Ve.DEBUG){const t=e.map(Oy);Cs.debug(`Firestore (${ll}): ${n}`,...t)}}function Ii(n,...e){if(Cs.logLevel<=Ve.ERROR){const t=e.map(Oy);Cs.error(`Firestore (${ll}): ${n}`,...t)}}function Yo(n,...e){if(Cs.logLevel<=Ve.WARN){const t=e.map(Oy);Cs.warn(`Firestore (${ll}): ${n}`,...t)}}function Oy(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(t){return JSON.stringify(t)}(n)}catch{return n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n="Unexpected state"){const e=`FIRESTORE (${ll}) INTERNAL ASSERTION FAILED: `+n;throw Ii(e),new Error(e)}function Xe(n,e){n||Se()}function Ce(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ie={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class _e extends Jn{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class MP{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(on.UNAUTHENTICATED))}shutdown(){}}class LP{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class VP{constructor(e){this.t=e,this.currentUser=on.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){Xe(this.o===void 0);let i=this.i;const s=m=>this.i!==i?(i=this.i,t(m)):Promise.resolve();let l=new Ea;this.o=()=>{this.i++,this.currentUser=this.u(),l.resolve(),l=new Ea,e.enqueueRetryable(()=>s(this.currentUser))};const c=()=>{const m=l;e.enqueueRetryable(async()=>{await m.promise,await s(this.currentUser)})},d=m=>{fe("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=m,this.o&&(this.auth.addAuthTokenListener(this.o),c())};this.t.onInit(m=>d(m)),setTimeout(()=>{if(!this.auth){const m=this.t.getImmediate({optional:!0});m?d(m):(fe("FirebaseAuthCredentialsProvider","Auth not yet detected"),l.resolve(),l=new Ea)}},0),c()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(i=>this.i!==e?(fe("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):i?(Xe(typeof i.accessToken=="string"),new Sw(i.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Xe(e===null||typeof e=="string"),new on(e)}}class UP{constructor(e,t,i){this.l=e,this.h=t,this.P=i,this.type="FirstParty",this.user=on.FIRST_PARTY,this.T=new Map}I(){return this.P?this.P():null}get headers(){this.T.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.T.set("Authorization",e),this.h&&this.T.set("X-Goog-Iam-Authorization-Token",this.h),this.T}}class jP{constructor(e,t,i){this.l=e,this.h=t,this.P=i}getToken(){return Promise.resolve(new UP(this.l,this.h,this.P))}start(e,t){e.enqueueRetryable(()=>t(on.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class i1{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class zP{constructor(e,t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null,this.V=null,kn(e)&&e.settings.appCheckToken&&(this.V=e.settings.appCheckToken)}start(e,t){Xe(this.o===void 0);const i=l=>{l.error!=null&&fe("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${l.error.message}`);const c=l.token!==this.R;return this.R=l.token,fe("FirebaseAppCheckTokenProvider",`Received ${c?"new":"existing"} token.`),c?t(l.token):Promise.resolve()};this.o=l=>{e.enqueueRetryable(()=>i(l))};const s=l=>{fe("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=l,this.o&&this.appCheck.addTokenListener(this.o)};this.A.onInit(l=>s(l)),setTimeout(()=>{if(!this.appCheck){const l=this.A.getImmediate({optional:!0});l?s(l):fe("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.V)return Promise.resolve(new i1(this.V));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(Xe(typeof t.token=="string"),this.R=t.token,new i1(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function BP(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let i=0;i<n;i++)t[i]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rw(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iw{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=62*Math.floor(4.129032258064516);let i="";for(;i.length<20;){const s=BP(40);for(let l=0;l<s.length;++l)i.length<20&&s[l]<t&&(i+=e.charAt(s[l]%62))}return i}}function Oe(n,e){return n<e?-1:n>e?1:0}function Og(n,e){let t=0;for(;t<n.length&&t<e.length;){const i=n.codePointAt(t),s=e.codePointAt(t);if(i!==s){if(i<128&&s<128)return Oe(i,s);{const l=Rw(),c=FP(l.encode(a1(n,t)),l.encode(a1(e,t)));return c!==0?c:Oe(i,s)}}t+=i>65535?2:1}return Oe(n.length,e.length)}function a1(n,e){return n.codePointAt(e)>65535?n.substring(e,e+2):n.substring(e,e+1)}function FP(n,e){for(let t=0;t<n.length&&t<e.length;++t)if(n[t]!==e[t])return Oe(n[t],e[t]);return Oe(n.length,e.length)}function Qo(n,e,t){return n.length===e.length&&n.every((i,s)=>t(i,e[s]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s1=-62135596800,o1=1e6;class Vt{static now(){return Vt.fromMillis(Date.now())}static fromDate(e){return Vt.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),i=Math.floor((e-1e3*t)*o1);return new Vt(t,i)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new _e(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new _e(ie.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<s1)throw new _e(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new _e(ie.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/o1}_compareTo(e){return this.seconds===e.seconds?Oe(this.nanoseconds,e.nanoseconds):Oe(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-s1;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ie{static fromTimestamp(e){return new Ie(e)}static min(){return new Ie(new Vt(0,0))}static max(){return new Ie(new Vt(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l1="__name__";class xr{constructor(e,t,i){t===void 0?t=0:t>e.length&&Se(),i===void 0?i=e.length-t:i>e.length-t&&Se(),this.segments=e,this.offset=t,this.len=i}get length(){return this.len}isEqual(e){return xr.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof xr?e.forEach(i=>{t.push(i)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,i=this.limit();t<i;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const i=Math.min(e.length,t.length);for(let s=0;s<i;s++){const l=xr.compareSegments(e.get(s),t.get(s));if(l!==0)return l}return Oe(e.length,t.length)}static compareSegments(e,t){const i=xr.isNumericId(e),s=xr.isNumericId(t);return i&&!s?-1:!i&&s?1:i&&s?xr.extractNumericId(e).compare(xr.extractNumericId(t)):Og(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return va.fromString(e.substring(4,e.length-2))}}class _t extends xr{construct(e,t,i){return new _t(e,t,i)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const i of e){if(i.indexOf("//")>=0)throw new _e(ie.INVALID_ARGUMENT,`Invalid segment (${i}). Paths must not contain // in them.`);t.push(...i.split("/").filter(s=>s.length>0))}return new _t(t)}static emptyPath(){return new _t([])}}const qP=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class en extends xr{construct(e,t,i){return new en(e,t,i)}static isValidIdentifier(e){return qP.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),en.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===l1}static keyField(){return new en([l1])}static fromServerFormat(e){const t=[];let i="",s=0;const l=()=>{if(i.length===0)throw new _e(ie.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(i),i=""};let c=!1;for(;s<e.length;){const d=e[s];if(d==="\\"){if(s+1===e.length)throw new _e(ie.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const m=e[s+1];if(m!=="\\"&&m!=="."&&m!=="`")throw new _e(ie.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);i+=m,s+=2}else d==="`"?(c=!c,s++):d!=="."||c?(i+=d,s++):(l(),s++)}if(l(),c)throw new _e(ie.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new en(t)}static emptyPath(){return new en([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ee{constructor(e){this.path=e}static fromPath(e){return new Ee(_t.fromString(e))}static fromName(e){return new Ee(_t.fromString(e).popFirst(5))}static empty(){return new Ee(_t.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&_t.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return _t.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Ee(new _t(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ku=-1;function HP(n,e){const t=n.toTimestamp().seconds,i=n.toTimestamp().nanoseconds+1,s=Ie.fromTimestamp(i===1e9?new Vt(t+1,0):new Vt(t,i));return new Sa(s,Ee.empty(),e)}function GP(n){return new Sa(n.readTime,n.key,Ku)}class Sa{constructor(e,t,i){this.readTime=e,this.documentKey=t,this.largestBatchId=i}static min(){return new Sa(Ie.min(),Ee.empty(),Ku)}static max(){return new Sa(Ie.max(),Ee.empty(),Ku)}}function $P(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=Ee.comparator(n.documentKey,e.documentKey),t!==0?t:Oe(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KP="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class YP{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ul(n){if(n.code!==ie.FAILED_PRECONDITION||n.message!==KP)throw n;fe("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Se(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new te((i,s)=>{this.nextCallback=l=>{this.wrapSuccess(e,l).next(i,s)},this.catchCallback=l=>{this.wrapFailure(t,l).next(i,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof te?t:te.resolve(t)}catch(t){return te.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):te.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):te.reject(t)}static resolve(e){return new te((t,i)=>{t(e)})}static reject(e){return new te((t,i)=>{i(e)})}static waitFor(e){return new te((t,i)=>{let s=0,l=0,c=!1;e.forEach(d=>{++s,d.next(()=>{++l,c&&l===s&&t()},m=>i(m))}),c=!0,l===s&&t()})}static or(e){let t=te.resolve(!1);for(const i of e)t=t.next(s=>s?te.resolve(s):i());return t}static forEach(e,t){const i=[];return e.forEach((s,l)=>{i.push(t.call(this,s,l))}),this.waitFor(i)}static mapArray(e,t){return new te((i,s)=>{const l=e.length,c=new Array(l);let d=0;for(let m=0;m<l;m++){const g=m;t(e[g]).next(_=>{c[g]=_,++d,d===l&&i(c)},_=>s(_))}})}static doWhile(e,t){return new te((i,s)=>{const l=()=>{e()===!0?t().next(()=>{l()},s):i()};l()})}}function QP(n){const e=n.match(/Android ([\d.]+)/i),t=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(t)}function cl(n){return n.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xh{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=i=>this.oe(i),this._e=i=>t.writeSequenceNumber(i))}oe(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this._e&&this._e(e),e}}Xh.ae=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dy=-1;function Wh(n){return n==null}function Ah(n){return n===0&&1/n==-1/0}function XP(n){return typeof n=="number"&&Number.isInteger(n)&&!Ah(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cw="";function WP(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=u1(e)),e=ZP(n.get(t),e);return u1(e)}function ZP(n,e){let t=e;const i=n.length;for(let s=0;s<i;s++){const l=n.charAt(s);switch(l){case"\0":t+="";break;case Cw:t+="";break;default:t+=l}}return t}function u1(n){return n+Cw+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Pa(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function xw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e,t){this.comparator=e,this.root=t||Jt.EMPTY}insert(e,t){return new dt(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Jt.BLACK,null,null))}remove(e){return new dt(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Jt.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const i=this.comparator(e,t.key);if(i===0)return t.value;i<0?t=t.left:i>0&&(t=t.right)}return null}indexOf(e){let t=0,i=this.root;for(;!i.isEmpty();){const s=this.comparator(e,i.key);if(s===0)return t+i.left.size;s<0?i=i.left:(t+=i.left.size+1,i=i.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,i)=>(e(t,i),!1))}toString(){const e=[];return this.inorderTraversal((t,i)=>(e.push(`${t}:${i}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Gf(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Gf(this.root,e,this.comparator,!1)}getReverseIterator(){return new Gf(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Gf(this.root,e,this.comparator,!0)}}class Gf{constructor(e,t,i,s){this.isReverse=s,this.nodeStack=[];let l=1;for(;!e.isEmpty();)if(l=t?i(e.key,t):1,t&&s&&(l*=-1),l<0)e=this.isReverse?e.left:e.right;else{if(l===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Jt{constructor(e,t,i,s,l){this.key=e,this.value=t,this.color=i??Jt.RED,this.left=s??Jt.EMPTY,this.right=l??Jt.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,i,s,l){return new Jt(e??this.key,t??this.value,i??this.color,s??this.left,l??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const l=i(e,s.key);return s=l<0?s.copy(null,null,null,s.left.insert(e,t,i),null):l===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp()}removeMin(){if(this.left.isEmpty())return Jt.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let i,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return Jt.EMPTY;i=s.right.min(),s=s.copy(i.key,i.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Jt.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Jt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Se();const e=this.left.check();if(e!==this.right.check())throw Se();return e+(this.isRed()?0:1)}}Jt.EMPTY=null,Jt.RED=!0,Jt.BLACK=!1;Jt.EMPTY=new class{constructor(){this.size=0}get key(){throw Se()}get value(){throw Se()}get color(){throw Se()}get left(){throw Se()}get right(){throw Se()}copy(e,t,i,s,l){return this}insert(e,t,i){return new Jt(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e){this.comparator=e,this.data=new dt(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,i)=>(e(t),!1))}forEachInRange(e,t){const i=this.data.getIteratorFrom(e[0]);for(;i.hasNext();){const s=i.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let i;for(i=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();i.hasNext();)if(!e(i.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new f1(this.data.getIterator())}getIteratorFrom(e){return new f1(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(i=>{t=t.add(i)}),t}isEqual(e){if(!(e instanceof Ut)||this.size!==e.size)return!1;const t=this.data.getIterator(),i=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,l=i.getNext().key;if(this.comparator(s,l)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ut(this.comparator);return t.data=e,t}}class f1{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e){this.fields=e,e.sort(en.comparator)}static empty(){return new or([])}unionWith(e){let t=new Ut(en.comparator);for(const i of this.fields)t=t.add(i);for(const i of e)t=t.add(i);return new or(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return Qo(this.fields,e.fields,(t,i)=>t.isEqual(i))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nw extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(s){try{return atob(s)}catch(l){throw typeof DOMException<"u"&&l instanceof DOMException?new Nw("Invalid base64 string: "+l):l}}(e);return new tn(t)}static fromUint8Array(e){const t=function(s){let l="";for(let c=0;c<s.length;++c)l+=String.fromCharCode(s[c]);return l}(e);return new tn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(t){return btoa(t)}(this.binaryString)}toUint8Array(){return function(t){const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Oe(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}tn.EMPTY_BYTE_STRING=new tn("");const JP=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Ra(n){if(Xe(!!n),typeof n=="string"){let e=0;const t=JP.exec(n);if(Xe(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const i=new Date(n);return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:wt(n.seconds),nanos:wt(n.nanos)}}function wt(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function Ia(n){return typeof n=="string"?tn.fromBase64String(n):tn.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ow="server_timestamp",Dw="__type__",kw="__previous_value__",Pw="__local_write_time__";function ky(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Dw])===null||t===void 0?void 0:t.stringValue)===Ow}function Zh(n){const e=n.mapValue.fields[kw];return ky(e)?Zh(e):e}function Yu(n){const e=Ra(n.mapValue.fields[Pw].timestampValue);return new Vt(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eM{constructor(e,t,i,s,l,c,d,m,g){this.databaseId=e,this.appId=t,this.persistenceKey=i,this.host=s,this.ssl=l,this.forceLongPolling=c,this.autoDetectLongPolling=d,this.longPollingOptions=m,this.useFetchStreams=g}}const wh="(default)";class Qu{constructor(e,t){this.projectId=e,this.database=t||wh}static empty(){return new Qu("","")}get isDefaultDatabase(){return this.database===wh}isEqual(e){return e instanceof Qu&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mw="__type__",tM="__max__",$f={mapValue:{}},Lw="__vector__",Sh="value";function Ca(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ky(n)?4:rM(n)?9007199254740991:nM(n)?10:11:Se()}function jr(n,e){if(n===e)return!0;const t=Ca(n);if(t!==Ca(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Yu(n).isEqual(Yu(e));case 3:return function(s,l){if(typeof s.timestampValue=="string"&&typeof l.timestampValue=="string"&&s.timestampValue.length===l.timestampValue.length)return s.timestampValue===l.timestampValue;const c=Ra(s.timestampValue),d=Ra(l.timestampValue);return c.seconds===d.seconds&&c.nanos===d.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(s,l){return Ia(s.bytesValue).isEqual(Ia(l.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(s,l){return wt(s.geoPointValue.latitude)===wt(l.geoPointValue.latitude)&&wt(s.geoPointValue.longitude)===wt(l.geoPointValue.longitude)}(n,e);case 2:return function(s,l){if("integerValue"in s&&"integerValue"in l)return wt(s.integerValue)===wt(l.integerValue);if("doubleValue"in s&&"doubleValue"in l){const c=wt(s.doubleValue),d=wt(l.doubleValue);return c===d?Ah(c)===Ah(d):isNaN(c)&&isNaN(d)}return!1}(n,e);case 9:return Qo(n.arrayValue.values||[],e.arrayValue.values||[],jr);case 10:case 11:return function(s,l){const c=s.mapValue.fields||{},d=l.mapValue.fields||{};if(c1(c)!==c1(d))return!1;for(const m in c)if(c.hasOwnProperty(m)&&(d[m]===void 0||!jr(c[m],d[m])))return!1;return!0}(n,e);default:return Se()}}function Xu(n,e){return(n.values||[]).find(t=>jr(t,e))!==void 0}function Xo(n,e){if(n===e)return 0;const t=Ca(n),i=Ca(e);if(t!==i)return Oe(t,i);switch(t){case 0:case 9007199254740991:return 0;case 1:return Oe(n.booleanValue,e.booleanValue);case 2:return function(l,c){const d=wt(l.integerValue||l.doubleValue),m=wt(c.integerValue||c.doubleValue);return d<m?-1:d>m?1:d===m?0:isNaN(d)?isNaN(m)?0:-1:1}(n,e);case 3:return h1(n.timestampValue,e.timestampValue);case 4:return h1(Yu(n),Yu(e));case 5:return Og(n.stringValue,e.stringValue);case 6:return function(l,c){const d=Ia(l),m=Ia(c);return d.compareTo(m)}(n.bytesValue,e.bytesValue);case 7:return function(l,c){const d=l.split("/"),m=c.split("/");for(let g=0;g<d.length&&g<m.length;g++){const _=Oe(d[g],m[g]);if(_!==0)return _}return Oe(d.length,m.length)}(n.referenceValue,e.referenceValue);case 8:return function(l,c){const d=Oe(wt(l.latitude),wt(c.latitude));return d!==0?d:Oe(wt(l.longitude),wt(c.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return d1(n.arrayValue,e.arrayValue);case 10:return function(l,c){var d,m,g,_;const T=l.fields||{},w=c.fields||{},x=(d=T[Sh])===null||d===void 0?void 0:d.arrayValue,D=(m=w[Sh])===null||m===void 0?void 0:m.arrayValue,H=Oe(((g=x==null?void 0:x.values)===null||g===void 0?void 0:g.length)||0,((_=D==null?void 0:D.values)===null||_===void 0?void 0:_.length)||0);return H!==0?H:d1(x,D)}(n.mapValue,e.mapValue);case 11:return function(l,c){if(l===$f.mapValue&&c===$f.mapValue)return 0;if(l===$f.mapValue)return 1;if(c===$f.mapValue)return-1;const d=l.fields||{},m=Object.keys(d),g=c.fields||{},_=Object.keys(g);m.sort(),_.sort();for(let T=0;T<m.length&&T<_.length;++T){const w=Og(m[T],_[T]);if(w!==0)return w;const x=Xo(d[m[T]],g[_[T]]);if(x!==0)return x}return Oe(m.length,_.length)}(n.mapValue,e.mapValue);default:throw Se()}}function h1(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return Oe(n,e);const t=Ra(n),i=Ra(e),s=Oe(t.seconds,i.seconds);return s!==0?s:Oe(t.nanos,i.nanos)}function d1(n,e){const t=n.values||[],i=e.values||[];for(let s=0;s<t.length&&s<i.length;++s){const l=Xo(t[s],i[s]);if(l)return l}return Oe(t.length,i.length)}function Wo(n){return Dg(n)}function Dg(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(t){const i=Ra(t);return`time(${i.seconds},${i.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(t){return Ia(t).toBase64()}(n.bytesValue):"referenceValue"in n?function(t){return Ee.fromName(t).toString()}(n.referenceValue):"geoPointValue"in n?function(t){return`geo(${t.latitude},${t.longitude})`}(n.geoPointValue):"arrayValue"in n?function(t){let i="[",s=!0;for(const l of t.values||[])s?s=!1:i+=",",i+=Dg(l);return i+"]"}(n.arrayValue):"mapValue"in n?function(t){const i=Object.keys(t.fields||{}).sort();let s="{",l=!0;for(const c of i)l?l=!1:s+=",",s+=`${c}:${Dg(t.fields[c])}`;return s+"}"}(n.mapValue):Se()}function sh(n){switch(Ca(n)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Zh(n);return e?16+sh(e):16;case 5:return 2*n.stringValue.length;case 6:return Ia(n.bytesValue).approximateByteSize();case 7:return n.referenceValue.length;case 9:return function(i){return(i.values||[]).reduce((s,l)=>s+sh(l),0)}(n.arrayValue);case 10:case 11:return function(i){let s=0;return Pa(i.fields,(l,c)=>{s+=l.length+sh(c)}),s}(n.mapValue);default:throw Se()}}function kg(n){return!!n&&"integerValue"in n}function Py(n){return!!n&&"arrayValue"in n}function m1(n){return!!n&&"nullValue"in n}function p1(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function oh(n){return!!n&&"mapValue"in n}function nM(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{})[Mw])===null||t===void 0?void 0:t.stringValue)===Lw}function Vu(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Pa(n.mapValue.fields,(t,i)=>e.mapValue.fields[t]=Vu(i)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Vu(n.arrayValue.values[t]);return e}return Object.assign({},n)}function rM(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue===tM}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e){this.value=e}static empty(){return new Pn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let i=0;i<e.length-1;++i)if(t=(t.mapValue.fields||{})[e.get(i)],!oh(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vu(t)}setAll(e){let t=en.emptyPath(),i={},s=[];e.forEach((c,d)=>{if(!t.isImmediateParentOf(d)){const m=this.getFieldsMap(t);this.applyChanges(m,i,s),i={},s=[],t=d.popLast()}c?i[d.lastSegment()]=Vu(c):s.push(d.lastSegment())});const l=this.getFieldsMap(t);this.applyChanges(l,i,s)}delete(e){const t=this.field(e.popLast());oh(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return jr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let i=0;i<e.length;++i){let s=t.mapValue.fields[e.get(i)];oh(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(i)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,i){Pa(t,(s,l)=>e[s]=l);for(const s of i)delete e[s]}clone(){return new Pn(Vu(this.value))}}function Vw(n){const e=[];return Pa(n.fields,(t,i)=>{const s=new en([t]);if(oh(i)){const l=Vw(i.mapValue).fields;if(l.length===0)e.push(s);else for(const c of l)e.push(s.child(c))}else e.push(s)}),new or(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(e,t,i,s,l,c,d){this.key=e,this.documentType=t,this.version=i,this.readTime=s,this.createTime=l,this.data=c,this.documentState=d}static newInvalidDocument(e){return new ln(e,0,Ie.min(),Ie.min(),Ie.min(),Pn.empty(),0)}static newFoundDocument(e,t,i,s){return new ln(e,1,t,Ie.min(),i,s,0)}static newNoDocument(e,t){return new ln(e,2,t,Ie.min(),Ie.min(),Pn.empty(),0)}static newUnknownDocument(e,t){return new ln(e,3,t,Ie.min(),Ie.min(),Pn.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ie.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ie.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ln&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ln(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(e,t){this.position=e,this.inclusive=t}}function g1(n,e,t){let i=0;for(let s=0;s<n.position.length;s++){const l=e[s],c=n.position[s];if(l.field.isKeyField()?i=Ee.comparator(Ee.fromName(c.referenceValue),t.key):i=Xo(c,t.data.field(l.field)),l.dir==="desc"&&(i*=-1),i!==0)break}return i}function y1(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!jr(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ih{constructor(e,t="asc"){this.field=e,this.dir=t}}function iM(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{}class Lt extends Uw{constructor(e,t,i){super(),this.field=e,this.op=t,this.value=i}static create(e,t,i){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,i):new sM(e,t,i):t==="array-contains"?new uM(e,i):t==="in"?new cM(e,i):t==="not-in"?new fM(e,i):t==="array-contains-any"?new hM(e,i):new Lt(e,t,i)}static createKeyFieldInFilter(e,t,i){return t==="in"?new oM(e,i):new lM(e,i)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Xo(t,this.value)):t!==null&&Ca(this.value)===Ca(t)&&this.matchesComparison(Xo(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Se()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class zr extends Uw{constructor(e,t){super(),this.filters=e,this.op=t,this.ce=null}static create(e,t){return new zr(e,t)}matches(e){return jw(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ce!==null||(this.ce=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ce}getFilters(){return Object.assign([],this.filters)}}function jw(n){return n.op==="and"}function zw(n){return aM(n)&&jw(n)}function aM(n){for(const e of n.filters)if(e instanceof zr)return!1;return!0}function Pg(n){if(n instanceof Lt)return n.field.canonicalString()+n.op.toString()+Wo(n.value);if(zw(n))return n.filters.map(e=>Pg(e)).join(",");{const e=n.filters.map(t=>Pg(t)).join(",");return`${n.op}(${e})`}}function Bw(n,e){return n instanceof Lt?function(i,s){return s instanceof Lt&&i.op===s.op&&i.field.isEqual(s.field)&&jr(i.value,s.value)}(n,e):n instanceof zr?function(i,s){return s instanceof zr&&i.op===s.op&&i.filters.length===s.filters.length?i.filters.reduce((l,c,d)=>l&&Bw(c,s.filters[d]),!0):!1}(n,e):void Se()}function Fw(n){return n instanceof Lt?function(t){return`${t.field.canonicalString()} ${t.op} ${Wo(t.value)}`}(n):n instanceof zr?function(t){return t.op.toString()+" {"+t.getFilters().map(Fw).join(" ,")+"}"}(n):"Filter"}class sM extends Lt{constructor(e,t,i){super(e,t,i),this.key=Ee.fromName(i.referenceValue)}matches(e){const t=Ee.comparator(e.key,this.key);return this.matchesComparison(t)}}class oM extends Lt{constructor(e,t){super(e,"in",t),this.keys=qw("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class lM extends Lt{constructor(e,t){super(e,"not-in",t),this.keys=qw("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function qw(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(i=>Ee.fromName(i.referenceValue))}class uM extends Lt{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Py(t)&&Xu(t.arrayValue,this.value)}}class cM extends Lt{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Xu(this.value.arrayValue,t)}}class fM extends Lt{constructor(e,t){super(e,"not-in",t)}matches(e){if(Xu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Xu(this.value.arrayValue,t)}}class hM extends Lt{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Py(t)||!t.arrayValue.values)&&t.arrayValue.values.some(i=>Xu(this.value.arrayValue,i))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dM{constructor(e,t=null,i=[],s=[],l=null,c=null,d=null){this.path=e,this.collectionGroup=t,this.orderBy=i,this.filters=s,this.limit=l,this.startAt=c,this.endAt=d,this.le=null}}function _1(n,e=null,t=[],i=[],s=null,l=null,c=null){return new dM(n,e,t,i,s,l,c)}function My(n){const e=Ce(n);if(e.le===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(i=>Pg(i)).join(","),t+="|ob:",t+=e.orderBy.map(i=>function(l){return l.field.canonicalString()+l.dir}(i)).join(","),Wh(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(i=>Wo(i)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(i=>Wo(i)).join(",")),e.le=t}return e.le}function Ly(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!iM(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!Bw(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!y1(n.startAt,e.startAt)&&y1(n.endAt,e.endAt)}function Mg(n){return Ee.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jh{constructor(e,t=null,i=[],s=[],l=null,c="F",d=null,m=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=i,this.filters=s,this.limit=l,this.limitType=c,this.startAt=d,this.endAt=m,this.he=null,this.Pe=null,this.Te=null,this.startAt,this.endAt}}function mM(n,e,t,i,s,l,c,d){return new Jh(n,e,t,i,s,l,c,d)}function ed(n){return new Jh(n)}function v1(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function pM(n){return n.collectionGroup!==null}function Uu(n){const e=Ce(n);if(e.he===null){e.he=[];const t=new Set;for(const l of e.explicitOrderBy)e.he.push(l),t.add(l.field.canonicalString());const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(c){let d=new Ut(en.comparator);return c.filters.forEach(m=>{m.getFlattenedFilters().forEach(g=>{g.isInequality()&&(d=d.add(g.field))})}),d})(e).forEach(l=>{t.has(l.canonicalString())||l.isKeyField()||e.he.push(new Ih(l,i))}),t.has(en.keyField().canonicalString())||e.he.push(new Ih(en.keyField(),i))}return e.he}function Vr(n){const e=Ce(n);return e.Pe||(e.Pe=gM(e,Uu(n))),e.Pe}function gM(n,e){if(n.limitType==="F")return _1(n.path,n.collectionGroup,e,n.filters,n.limit,n.startAt,n.endAt);{e=e.map(s=>{const l=s.dir==="desc"?"asc":"desc";return new Ih(s.field,l)});const t=n.endAt?new Rh(n.endAt.position,n.endAt.inclusive):null,i=n.startAt?new Rh(n.startAt.position,n.startAt.inclusive):null;return _1(n.path,n.collectionGroup,e,n.filters,n.limit,t,i)}}function Lg(n,e,t){return new Jh(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function td(n,e){return Ly(Vr(n),Vr(e))&&n.limitType===e.limitType}function Hw(n){return`${My(Vr(n))}|lt:${n.limitType}`}function Po(n){return`Query(target=${function(t){let i=t.path.canonicalString();return t.collectionGroup!==null&&(i+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(i+=`, filters: [${t.filters.map(s=>Fw(s)).join(", ")}]`),Wh(t.limit)||(i+=", limit: "+t.limit),t.orderBy.length>0&&(i+=`, orderBy: [${t.orderBy.map(s=>function(c){return`${c.field.canonicalString()} (${c.dir})`}(s)).join(", ")}]`),t.startAt&&(i+=", startAt: ",i+=t.startAt.inclusive?"b:":"a:",i+=t.startAt.position.map(s=>Wo(s)).join(",")),t.endAt&&(i+=", endAt: ",i+=t.endAt.inclusive?"a:":"b:",i+=t.endAt.position.map(s=>Wo(s)).join(",")),`Target(${i})`}(Vr(n))}; limitType=${n.limitType})`}function nd(n,e){return e.isFoundDocument()&&function(i,s){const l=s.key.path;return i.collectionGroup!==null?s.key.hasCollectionId(i.collectionGroup)&&i.path.isPrefixOf(l):Ee.isDocumentKey(i.path)?i.path.isEqual(l):i.path.isImmediateParentOf(l)}(n,e)&&function(i,s){for(const l of Uu(i))if(!l.field.isKeyField()&&s.data.field(l.field)===null)return!1;return!0}(n,e)&&function(i,s){for(const l of i.filters)if(!l.matches(s))return!1;return!0}(n,e)&&function(i,s){return!(i.startAt&&!function(c,d,m){const g=g1(c,d,m);return c.inclusive?g<=0:g<0}(i.startAt,Uu(i),s)||i.endAt&&!function(c,d,m){const g=g1(c,d,m);return c.inclusive?g>=0:g>0}(i.endAt,Uu(i),s))}(n,e)}function yM(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function Gw(n){return(e,t)=>{let i=!1;for(const s of Uu(n)){const l=_M(s,e,t);if(l!==0)return l;i=i||s.field.isKeyField()}return 0}}function _M(n,e,t){const i=n.field.isKeyField()?Ee.comparator(e.key,t.key):function(l,c,d){const m=c.data.field(l),g=d.data.field(l);return m!==null&&g!==null?Xo(m,g):Se()}(n.field,e,t);switch(n.dir){case"asc":return i;case"desc":return-1*i;default:return Se()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i!==void 0){for(const[s,l]of i)if(this.equalsFn(s,e))return l}}has(e){return this.get(e)!==void 0}set(e,t){const i=this.mapKeyFn(e),s=this.inner[i];if(s===void 0)return this.inner[i]=[[e,t]],void this.innerSize++;for(let l=0;l<s.length;l++)if(this.equalsFn(s[l][0],e))return void(s[l]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),i=this.inner[t];if(i===void 0)return!1;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return i.length===1?delete this.inner[t]:i.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Pa(this.inner,(t,i)=>{for(const[s,l]of i)e(s,l)})}isEmpty(){return xw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vM=new dt(Ee.comparator);function Ci(){return vM}const $w=new dt(Ee.comparator);function Nu(...n){let e=$w;for(const t of n)e=e.insert(t.key,t);return e}function Kw(n){let e=$w;return n.forEach((t,i)=>e=e.insert(t,i.overlayedDocument)),e}function Es(){return ju()}function Yw(){return ju()}function ju(){return new Vs(n=>n.toString(),(n,e)=>n.isEqual(e))}const EM=new dt(Ee.comparator),TM=new Ut(Ee.comparator);function Ue(...n){let e=TM;for(const t of n)e=e.add(t);return e}const bM=new Ut(Oe);function AM(){return bM}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vy(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ah(e)?"-0":e}}function Qw(n){return{integerValue:""+n}}function wM(n,e){return XP(e)?Qw(e):Vy(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rd{constructor(){this._=void 0}}function SM(n,e,t){return n instanceof Ch?function(s,l){const c={fields:{[Dw]:{stringValue:Ow},[Pw]:{timestampValue:{seconds:s.seconds,nanos:s.nanoseconds}}}};return l&&ky(l)&&(l=Zh(l)),l&&(c.fields[kw]=l),{mapValue:c}}(t,e):n instanceof Zo?Ww(n,e):n instanceof Wu?Zw(n,e):function(s,l){const c=Xw(s,l),d=E1(c)+E1(s.Ie);return kg(c)&&kg(s.Ie)?Qw(d):Vy(s.serializer,d)}(n,e)}function RM(n,e,t){return n instanceof Zo?Ww(n,e):n instanceof Wu?Zw(n,e):t}function Xw(n,e){return n instanceof xh?function(i){return kg(i)||function(l){return!!l&&"doubleValue"in l}(i)}(e)?e:{integerValue:0}:null}class Ch extends rd{}class Zo extends rd{constructor(e){super(),this.elements=e}}function Ww(n,e){const t=Jw(e);for(const i of n.elements)t.some(s=>jr(s,i))||t.push(i);return{arrayValue:{values:t}}}class Wu extends rd{constructor(e){super(),this.elements=e}}function Zw(n,e){let t=Jw(e);for(const i of n.elements)t=t.filter(s=>!jr(s,i));return{arrayValue:{values:t}}}class xh extends rd{constructor(e,t){super(),this.serializer=e,this.Ie=t}}function E1(n){return wt(n.integerValue||n.doubleValue)}function Jw(n){return Py(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IM{constructor(e,t){this.field=e,this.transform=t}}function CM(n,e){return n.field.isEqual(e.field)&&function(i,s){return i instanceof Zo&&s instanceof Zo||i instanceof Wu&&s instanceof Wu?Qo(i.elements,s.elements,jr):i instanceof xh&&s instanceof xh?jr(i.Ie,s.Ie):i instanceof Ch&&s instanceof Ch}(n.transform,e.transform)}class xM{constructor(e,t){this.version=e,this.transformResults=t}}class Ei{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Ei}static exists(e){return new Ei(void 0,e)}static updateTime(e){return new Ei(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function lh(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class id{}function eS(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new nS(n.key,Ei.none()):new ad(n.key,n.data,Ei.none());{const t=n.data,i=Pn.empty();let s=new Ut(en.comparator);for(let l of e.fields)if(!s.has(l)){let c=t.field(l);c===null&&l.length>1&&(l=l.popLast(),c=t.field(l)),c===null?i.delete(l):i.set(l,c),s=s.add(l)}return new Us(n.key,i,new or(s.toArray()),Ei.none())}}function NM(n,e,t){n instanceof ad?function(s,l,c){const d=s.value.clone(),m=b1(s.fieldTransforms,l,c.transformResults);d.setAll(m),l.convertToFoundDocument(c.version,d).setHasCommittedMutations()}(n,e,t):n instanceof Us?function(s,l,c){if(!lh(s.precondition,l))return void l.convertToUnknownDocument(c.version);const d=b1(s.fieldTransforms,l,c.transformResults),m=l.data;m.setAll(tS(s)),m.setAll(d),l.convertToFoundDocument(c.version,m).setHasCommittedMutations()}(n,e,t):function(s,l,c){l.convertToNoDocument(c.version).setHasCommittedMutations()}(0,e,t)}function zu(n,e,t,i){return n instanceof ad?function(l,c,d,m){if(!lh(l.precondition,c))return d;const g=l.value.clone(),_=A1(l.fieldTransforms,m,c);return g.setAll(_),c.convertToFoundDocument(c.version,g).setHasLocalMutations(),null}(n,e,t,i):n instanceof Us?function(l,c,d,m){if(!lh(l.precondition,c))return d;const g=A1(l.fieldTransforms,m,c),_=c.data;return _.setAll(tS(l)),_.setAll(g),c.convertToFoundDocument(c.version,_).setHasLocalMutations(),d===null?null:d.unionWith(l.fieldMask.fields).unionWith(l.fieldTransforms.map(T=>T.field))}(n,e,t,i):function(l,c,d){return lh(l.precondition,c)?(c.convertToNoDocument(c.version).setHasLocalMutations(),null):d}(n,e,t)}function OM(n,e){let t=null;for(const i of n.fieldTransforms){const s=e.data.field(i.field),l=Xw(i.transform,s||null);l!=null&&(t===null&&(t=Pn.empty()),t.set(i.field,l))}return t||null}function T1(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(i,s){return i===void 0&&s===void 0||!(!i||!s)&&Qo(i,s,(l,c)=>CM(l,c))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class ad extends id{constructor(e,t,i,s=[]){super(),this.key=e,this.value=t,this.precondition=i,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Us extends id{constructor(e,t,i,s,l=[]){super(),this.key=e,this.data=t,this.fieldMask=i,this.precondition=s,this.fieldTransforms=l,this.type=1}getFieldMask(){return this.fieldMask}}function tS(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const i=n.data.field(t);e.set(t,i)}}),e}function b1(n,e,t){const i=new Map;Xe(n.length===t.length);for(let s=0;s<t.length;s++){const l=n[s],c=l.transform,d=e.data.field(l.field);i.set(l.field,RM(c,d,t[s]))}return i}function A1(n,e,t){const i=new Map;for(const s of n){const l=s.transform,c=t.data.field(s.field);i.set(s.field,SM(l,c,e))}return i}class nS extends id{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class DM extends id{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kM{constructor(e,t,i,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=i,this.mutations=s}applyToRemoteDocument(e,t){const i=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const l=this.mutations[s];l.key.isEqual(e.key)&&NM(l,e,i[s])}}applyToLocalView(e,t){for(const i of this.baseMutations)i.key.isEqual(e.key)&&(t=zu(i,e,t,this.localWriteTime));for(const i of this.mutations)i.key.isEqual(e.key)&&(t=zu(i,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const i=Yw();return this.mutations.forEach(s=>{const l=e.get(s.key),c=l.overlayedDocument;let d=this.applyToLocalView(c,l.mutatedFields);d=t.has(s.key)?null:d;const m=eS(c,d);m!==null&&i.set(s.key,m),c.isValidDocument()||c.convertToNoDocument(Ie.min())}),i}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Ue())}isEqual(e){return this.batchId===e.batchId&&Qo(this.mutations,e.mutations,(t,i)=>T1(t,i))&&Qo(this.baseMutations,e.baseMutations,(t,i)=>T1(t,i))}}class Uy{constructor(e,t,i,s){this.batch=e,this.commitVersion=t,this.mutationResults=i,this.docVersions=s}static from(e,t,i){Xe(e.mutations.length===i.length);let s=function(){return EM}();const l=e.mutations;for(let c=0;c<l.length;c++)s=s.insert(l[c].key,i[c].version);return new Uy(e,t,i,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PM{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MM{constructor(e,t){this.count=e,this.unchangedNames=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Nt,qe;function LM(n){switch(n){case ie.OK:return Se();case ie.CANCELLED:case ie.UNKNOWN:case ie.DEADLINE_EXCEEDED:case ie.RESOURCE_EXHAUSTED:case ie.INTERNAL:case ie.UNAVAILABLE:case ie.UNAUTHENTICATED:return!1;case ie.INVALID_ARGUMENT:case ie.NOT_FOUND:case ie.ALREADY_EXISTS:case ie.PERMISSION_DENIED:case ie.FAILED_PRECONDITION:case ie.ABORTED:case ie.OUT_OF_RANGE:case ie.UNIMPLEMENTED:case ie.DATA_LOSS:return!0;default:return Se()}}function rS(n){if(n===void 0)return Ii("GRPC error has no .code"),ie.UNKNOWN;switch(n){case Nt.OK:return ie.OK;case Nt.CANCELLED:return ie.CANCELLED;case Nt.UNKNOWN:return ie.UNKNOWN;case Nt.DEADLINE_EXCEEDED:return ie.DEADLINE_EXCEEDED;case Nt.RESOURCE_EXHAUSTED:return ie.RESOURCE_EXHAUSTED;case Nt.INTERNAL:return ie.INTERNAL;case Nt.UNAVAILABLE:return ie.UNAVAILABLE;case Nt.UNAUTHENTICATED:return ie.UNAUTHENTICATED;case Nt.INVALID_ARGUMENT:return ie.INVALID_ARGUMENT;case Nt.NOT_FOUND:return ie.NOT_FOUND;case Nt.ALREADY_EXISTS:return ie.ALREADY_EXISTS;case Nt.PERMISSION_DENIED:return ie.PERMISSION_DENIED;case Nt.FAILED_PRECONDITION:return ie.FAILED_PRECONDITION;case Nt.ABORTED:return ie.ABORTED;case Nt.OUT_OF_RANGE:return ie.OUT_OF_RANGE;case Nt.UNIMPLEMENTED:return ie.UNIMPLEMENTED;case Nt.DATA_LOSS:return ie.DATA_LOSS;default:return Se()}}(qe=Nt||(Nt={}))[qe.OK=0]="OK",qe[qe.CANCELLED=1]="CANCELLED",qe[qe.UNKNOWN=2]="UNKNOWN",qe[qe.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",qe[qe.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",qe[qe.NOT_FOUND=5]="NOT_FOUND",qe[qe.ALREADY_EXISTS=6]="ALREADY_EXISTS",qe[qe.PERMISSION_DENIED=7]="PERMISSION_DENIED",qe[qe.UNAUTHENTICATED=16]="UNAUTHENTICATED",qe[qe.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",qe[qe.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",qe[qe.ABORTED=10]="ABORTED",qe[qe.OUT_OF_RANGE=11]="OUT_OF_RANGE",qe[qe.UNIMPLEMENTED=12]="UNIMPLEMENTED",qe[qe.INTERNAL=13]="INTERNAL",qe[qe.UNAVAILABLE=14]="UNAVAILABLE",qe[qe.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VM=new va([4294967295,4294967295],0);function w1(n){const e=Rw().encode(n),t=new vw;return t.update(e),new Uint8Array(t.digest())}function S1(n){const e=new DataView(n.buffer),t=e.getUint32(0,!0),i=e.getUint32(4,!0),s=e.getUint32(8,!0),l=e.getUint32(12,!0);return[new va([t,i],0),new va([s,l],0)]}class jy{constructor(e,t,i){if(this.bitmap=e,this.padding=t,this.hashCount=i,t<0||t>=8)throw new Ou(`Invalid padding: ${t}`);if(i<0)throw new Ou(`Invalid hash count: ${i}`);if(e.length>0&&this.hashCount===0)throw new Ou(`Invalid hash count: ${i}`);if(e.length===0&&t!==0)throw new Ou(`Invalid padding when bitmap length is 0: ${t}`);this.Ee=8*e.length-t,this.de=va.fromNumber(this.Ee)}Ae(e,t,i){let s=e.add(t.multiply(va.fromNumber(i)));return s.compare(VM)===1&&(s=new va([s.getBits(0),s.getBits(1)],0)),s.modulo(this.de).toNumber()}Re(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.Ee===0)return!1;const t=w1(e),[i,s]=S1(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,s,l);if(!this.Re(c))return!1}return!0}static create(e,t,i){const s=e%8==0?0:8-e%8,l=new Uint8Array(Math.ceil(e/8)),c=new jy(l,s,t);return i.forEach(d=>c.insert(d)),c}insert(e){if(this.Ee===0)return;const t=w1(e),[i,s]=S1(t);for(let l=0;l<this.hashCount;l++){const c=this.Ae(i,s,l);this.Ve(c)}}Ve(e){const t=Math.floor(e/8),i=e%8;this.bitmap[t]|=1<<i}}class Ou extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sd{constructor(e,t,i,s,l){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=i,this.documentUpdates=s,this.resolvedLimboDocuments=l}static createSynthesizedRemoteEventForCurrentChange(e,t,i){const s=new Map;return s.set(e,uc.createSynthesizedTargetChangeForCurrentChange(e,t,i)),new sd(Ie.min(),s,new dt(Oe),Ci(),Ue())}}class uc{constructor(e,t,i,s,l){this.resumeToken=e,this.current=t,this.addedDocuments=i,this.modifiedDocuments=s,this.removedDocuments=l}static createSynthesizedTargetChangeForCurrentChange(e,t,i){return new uc(i,t,Ue(),Ue(),Ue())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uh{constructor(e,t,i,s){this.me=e,this.removedTargetIds=t,this.key=i,this.fe=s}}class iS{constructor(e,t){this.targetId=e,this.ge=t}}class aS{constructor(e,t,i=tn.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=i,this.cause=s}}class R1{constructor(){this.pe=0,this.ye=I1(),this.we=tn.EMPTY_BYTE_STRING,this.Se=!1,this.be=!0}get current(){return this.Se}get resumeToken(){return this.we}get De(){return this.pe!==0}get ve(){return this.be}Ce(e){e.approximateByteSize()>0&&(this.be=!0,this.we=e)}Fe(){let e=Ue(),t=Ue(),i=Ue();return this.ye.forEach((s,l)=>{switch(l){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:i=i.add(s);break;default:Se()}}),new uc(this.we,this.Se,e,t,i)}Me(){this.be=!1,this.ye=I1()}xe(e,t){this.be=!0,this.ye=this.ye.insert(e,t)}Oe(e){this.be=!0,this.ye=this.ye.remove(e)}Ne(){this.pe+=1}Be(){this.pe-=1,Xe(this.pe>=0)}Le(){this.be=!0,this.Se=!0}}class UM{constructor(e){this.ke=e,this.qe=new Map,this.Qe=Ci(),this.$e=Kf(),this.Ue=Kf(),this.Ke=new dt(Oe)}We(e){for(const t of e.me)e.fe&&e.fe.isFoundDocument()?this.Ge(t,e.fe):this.ze(t,e.key,e.fe);for(const t of e.removedTargetIds)this.ze(t,e.key,e.fe)}je(e){this.forEachTarget(e,t=>{const i=this.He(t);switch(e.state){case 0:this.Je(t)&&i.Ce(e.resumeToken);break;case 1:i.Be(),i.De||i.Me(),i.Ce(e.resumeToken);break;case 2:i.Be(),i.De||this.removeTarget(t);break;case 3:this.Je(t)&&(i.Le(),i.Ce(e.resumeToken));break;case 4:this.Je(t)&&(this.Ye(t),i.Ce(e.resumeToken));break;default:Se()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.qe.forEach((i,s)=>{this.Je(s)&&t(s)})}Ze(e){const t=e.targetId,i=e.ge.count,s=this.Xe(t);if(s){const l=s.target;if(Mg(l))if(i===0){const c=new Ee(l.path);this.ze(t,c,ln.newNoDocument(c,Ie.min()))}else Xe(i===1);else{const c=this.et(t);if(c!==i){const d=this.tt(e),m=d?this.nt(d,e,c):1;if(m!==0){this.Ye(t);const g=m===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(t,g)}}}}}tt(e){const t=e.ge.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:i="",padding:s=0},hashCount:l=0}=t;let c,d;try{c=Ia(i).toUint8Array()}catch(m){if(m instanceof Nw)return Yo("Decoding the base64 bloom filter in existence filter failed ("+m.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw m}try{d=new jy(c,s,l)}catch(m){return Yo(m instanceof Ou?"BloomFilter error: ":"Applying bloom filter failed: ",m),null}return d.Ee===0?null:d}nt(e,t,i){return t.ge.count===i-this.st(e,t.targetId)?0:2}st(e,t){const i=this.ke.getRemoteKeysForTarget(t);let s=0;return i.forEach(l=>{const c=this.ke.it(),d=`projects/${c.projectId}/databases/${c.database}/documents/${l.path.canonicalString()}`;e.mightContain(d)||(this.ze(t,l,null),s++)}),s}ot(e){const t=new Map;this.qe.forEach((l,c)=>{const d=this.Xe(c);if(d){if(l.current&&Mg(d.target)){const m=new Ee(d.target.path);this._t(m).has(c)||this.ut(c,m)||this.ze(c,m,ln.newNoDocument(m,e))}l.ve&&(t.set(c,l.Fe()),l.Me())}});let i=Ue();this.Ue.forEach((l,c)=>{let d=!0;c.forEachWhile(m=>{const g=this.Xe(m);return!g||g.purpose==="TargetPurposeLimboResolution"||(d=!1,!1)}),d&&(i=i.add(l))}),this.Qe.forEach((l,c)=>c.setReadTime(e));const s=new sd(e,t,this.Ke,this.Qe,i);return this.Qe=Ci(),this.$e=Kf(),this.Ue=Kf(),this.Ke=new dt(Oe),s}Ge(e,t){if(!this.Je(e))return;const i=this.ut(e,t.key)?2:0;this.He(e).xe(t.key,i),this.Qe=this.Qe.insert(t.key,t),this.$e=this.$e.insert(t.key,this._t(t.key).add(e)),this.Ue=this.Ue.insert(t.key,this.ct(t.key).add(e))}ze(e,t,i){if(!this.Je(e))return;const s=this.He(e);this.ut(e,t)?s.xe(t,1):s.Oe(t),this.Ue=this.Ue.insert(t,this.ct(t).delete(e)),this.Ue=this.Ue.insert(t,this.ct(t).add(e)),i&&(this.Qe=this.Qe.insert(t,i))}removeTarget(e){this.qe.delete(e)}et(e){const t=this.He(e).Fe();return this.ke.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ne(e){this.He(e).Ne()}He(e){let t=this.qe.get(e);return t||(t=new R1,this.qe.set(e,t)),t}ct(e){let t=this.Ue.get(e);return t||(t=new Ut(Oe),this.Ue=this.Ue.insert(e,t)),t}_t(e){let t=this.$e.get(e);return t||(t=new Ut(Oe),this.$e=this.$e.insert(e,t)),t}Je(e){const t=this.Xe(e)!==null;return t||fe("WatchChangeAggregator","Detected inactive target",e),t}Xe(e){const t=this.qe.get(e);return t&&t.De?null:this.ke.lt(e)}Ye(e){this.qe.set(e,new R1),this.ke.getRemoteKeysForTarget(e).forEach(t=>{this.ze(e,t,null)})}ut(e,t){return this.ke.getRemoteKeysForTarget(e).has(t)}}function Kf(){return new dt(Ee.comparator)}function I1(){return new dt(Ee.comparator)}const jM={asc:"ASCENDING",desc:"DESCENDING"},zM={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},BM={and:"AND",or:"OR"};class FM{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Vg(n,e){return n.useProto3Json||Wh(e)?e:{value:e}}function Nh(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function sS(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function qM(n,e){return Nh(n,e.toTimestamp())}function Ur(n){return Xe(!!n),Ie.fromTimestamp(function(t){const i=Ra(t);return new Vt(i.seconds,i.nanos)}(n))}function zy(n,e){return Ug(n,e).canonicalString()}function Ug(n,e){const t=function(s){return new _t(["projects",s.projectId,"databases",s.database])}(n).child("documents");return e===void 0?t:t.child(e)}function oS(n){const e=_t.fromString(n);return Xe(hS(e)),e}function jg(n,e){return zy(n.databaseId,e.path)}function Hp(n,e){const t=oS(e);if(t.get(1)!==n.databaseId.projectId)throw new _e(ie.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new _e(ie.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new Ee(uS(t))}function lS(n,e){return zy(n.databaseId,e)}function HM(n){const e=oS(n);return e.length===4?_t.emptyPath():uS(e)}function zg(n){return new _t(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function uS(n){return Xe(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function C1(n,e,t){return{name:jg(n,e),fields:t.value.mapValue.fields}}function GM(n,e){let t;if("targetChange"in e){e.targetChange;const i=function(g){return g==="NO_CHANGE"?0:g==="ADD"?1:g==="REMOVE"?2:g==="CURRENT"?3:g==="RESET"?4:Se()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],l=function(g,_){return g.useProto3Json?(Xe(_===void 0||typeof _=="string"),tn.fromBase64String(_||"")):(Xe(_===void 0||_ instanceof Buffer||_ instanceof Uint8Array),tn.fromUint8Array(_||new Uint8Array))}(n,e.targetChange.resumeToken),c=e.targetChange.cause,d=c&&function(g){const _=g.code===void 0?ie.UNKNOWN:rS(g.code);return new _e(_,g.message||"")}(c);t=new aS(i,s,l,d||null)}else if("documentChange"in e){e.documentChange;const i=e.documentChange;i.document,i.document.name,i.document.updateTime;const s=Hp(n,i.document.name),l=Ur(i.document.updateTime),c=i.document.createTime?Ur(i.document.createTime):Ie.min(),d=new Pn({mapValue:{fields:i.document.fields}}),m=ln.newFoundDocument(s,l,c,d),g=i.targetIds||[],_=i.removedTargetIds||[];t=new uh(g,_,m.key,m)}else if("documentDelete"in e){e.documentDelete;const i=e.documentDelete;i.document;const s=Hp(n,i.document),l=i.readTime?Ur(i.readTime):Ie.min(),c=ln.newNoDocument(s,l),d=i.removedTargetIds||[];t=new uh([],d,c.key,c)}else if("documentRemove"in e){e.documentRemove;const i=e.documentRemove;i.document;const s=Hp(n,i.document),l=i.removedTargetIds||[];t=new uh([],l,s,null)}else{if(!("filter"in e))return Se();{e.filter;const i=e.filter;i.targetId;const{count:s=0,unchangedNames:l}=i,c=new MM(s,l),d=i.targetId;t=new iS(d,c)}}return t}function $M(n,e){let t;if(e instanceof ad)t={update:C1(n,e.key,e.value)};else if(e instanceof nS)t={delete:jg(n,e.key)};else if(e instanceof Us)t={update:C1(n,e.key,e.data),updateMask:tL(e.fieldMask)};else{if(!(e instanceof DM))return Se();t={verify:jg(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(i=>function(l,c){const d=c.transform;if(d instanceof Ch)return{fieldPath:c.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(d instanceof Zo)return{fieldPath:c.field.canonicalString(),appendMissingElements:{values:d.elements}};if(d instanceof Wu)return{fieldPath:c.field.canonicalString(),removeAllFromArray:{values:d.elements}};if(d instanceof xh)return{fieldPath:c.field.canonicalString(),increment:d.Ie};throw Se()}(0,i))),e.precondition.isNone||(t.currentDocument=function(s,l){return l.updateTime!==void 0?{updateTime:qM(s,l.updateTime)}:l.exists!==void 0?{exists:l.exists}:Se()}(n,e.precondition)),t}function KM(n,e){return n&&n.length>0?(Xe(e!==void 0),n.map(t=>function(s,l){let c=s.updateTime?Ur(s.updateTime):Ur(l);return c.isEqual(Ie.min())&&(c=Ur(l)),new xM(c,s.transformResults||[])}(t,e))):[]}function YM(n,e){return{documents:[lS(n,e.path)]}}function QM(n,e){const t={structuredQuery:{}},i=e.path;let s;e.collectionGroup!==null?(s=i,t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(s=i.popLast(),t.structuredQuery.from=[{collectionId:i.lastSegment()}]),t.parent=lS(n,s);const l=function(g){if(g.length!==0)return fS(zr.create(g,"and"))}(e.filters);l&&(t.structuredQuery.where=l);const c=function(g){if(g.length!==0)return g.map(_=>function(w){return{field:Mo(w.field),direction:ZM(w.dir)}}(_))}(e.orderBy);c&&(t.structuredQuery.orderBy=c);const d=Vg(n,e.limit);return d!==null&&(t.structuredQuery.limit=d),e.startAt&&(t.structuredQuery.startAt=function(g){return{before:g.inclusive,values:g.position}}(e.startAt)),e.endAt&&(t.structuredQuery.endAt=function(g){return{before:!g.inclusive,values:g.position}}(e.endAt)),{ht:t,parent:s}}function XM(n){let e=HM(n.parent);const t=n.structuredQuery,i=t.from?t.from.length:0;let s=null;if(i>0){Xe(i===1);const _=t.from[0];_.allDescendants?s=_.collectionId:e=e.child(_.collectionId)}let l=[];t.where&&(l=function(T){const w=cS(T);return w instanceof zr&&zw(w)?w.getFilters():[w]}(t.where));let c=[];t.orderBy&&(c=function(T){return T.map(w=>function(D){return new Ih(Lo(D.field),function(L){switch(L){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(D.direction))}(w))}(t.orderBy));let d=null;t.limit&&(d=function(T){let w;return w=typeof T=="object"?T.value:T,Wh(w)?null:w}(t.limit));let m=null;t.startAt&&(m=function(T){const w=!!T.before,x=T.values||[];return new Rh(x,w)}(t.startAt));let g=null;return t.endAt&&(g=function(T){const w=!T.before,x=T.values||[];return new Rh(x,w)}(t.endAt)),mM(e,s,c,l,d,"F",m,g)}function WM(n,e){const t=function(s){switch(s){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return Se()}}(e.purpose);return t==null?null:{"goog-listen-tags":t}}function cS(n){return n.unaryFilter!==void 0?function(t){switch(t.unaryFilter.op){case"IS_NAN":const i=Lo(t.unaryFilter.field);return Lt.create(i,"==",{doubleValue:NaN});case"IS_NULL":const s=Lo(t.unaryFilter.field);return Lt.create(s,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const l=Lo(t.unaryFilter.field);return Lt.create(l,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const c=Lo(t.unaryFilter.field);return Lt.create(c,"!=",{nullValue:"NULL_VALUE"});default:return Se()}}(n):n.fieldFilter!==void 0?function(t){return Lt.create(Lo(t.fieldFilter.field),function(s){switch(s){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Se()}}(t.fieldFilter.op),t.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(t){return zr.create(t.compositeFilter.filters.map(i=>cS(i)),function(s){switch(s){case"AND":return"and";case"OR":return"or";default:return Se()}}(t.compositeFilter.op))}(n):Se()}function ZM(n){return jM[n]}function JM(n){return zM[n]}function eL(n){return BM[n]}function Mo(n){return{fieldPath:n.canonicalString()}}function Lo(n){return en.fromServerFormat(n.fieldPath)}function fS(n){return n instanceof Lt?function(t){if(t.op==="=="){if(p1(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NAN"}};if(m1(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NULL"}}}else if(t.op==="!="){if(p1(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NAN"}};if(m1(t.value))return{unaryFilter:{field:Mo(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Mo(t.field),op:JM(t.op),value:t.value}}}(n):n instanceof zr?function(t){const i=t.getFilters().map(s=>fS(s));return i.length===1?i[0]:{compositeFilter:{op:eL(t.op),filters:i}}}(n):Se()}function tL(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function hS(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e,t,i,s,l=Ie.min(),c=Ie.min(),d=tn.EMPTY_BYTE_STRING,m=null){this.target=e,this.targetId=t,this.purpose=i,this.sequenceNumber=s,this.snapshotVersion=l,this.lastLimboFreeSnapshotVersion=c,this.resumeToken=d,this.expectedCount=m}withSequenceNumber(e){return new pa(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new pa(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new pa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new pa(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nL{constructor(e){this.Tt=e}}function rL(n){const e=XM({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Lg(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iL{constructor(){this.Tn=new aL}addToCollectionParentIndex(e,t){return this.Tn.add(t),te.resolve()}getCollectionParents(e,t){return te.resolve(this.Tn.getEntries(t))}addFieldIndex(e,t){return te.resolve()}deleteFieldIndex(e,t){return te.resolve()}deleteAllFieldIndexes(e){return te.resolve()}createTargetIndexes(e,t){return te.resolve()}getDocumentsMatchingTarget(e,t){return te.resolve(null)}getIndexType(e,t){return te.resolve(0)}getFieldIndexes(e,t){return te.resolve([])}getNextCollectionGroupToUpdate(e){return te.resolve(null)}getMinOffset(e,t){return te.resolve(Sa.min())}getMinOffsetFromCollectionGroup(e,t){return te.resolve(Sa.min())}updateCollectionGroup(e,t,i){return te.resolve()}updateIndexEntries(e,t){return te.resolve()}}class aL{constructor(){this.index={}}add(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t]||new Ut(_t.comparator),l=!s.has(i);return this.index[t]=s.add(i),l}has(e){const t=e.lastSegment(),i=e.popLast(),s=this.index[t];return s&&s.has(i)}getEntries(e){return(this.index[e]||new Ut(_t.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const x1={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},dS=41943040;class Tn{static withCacheSize(e){return new Tn(e,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,i){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Tn.DEFAULT_COLLECTION_PERCENTILE=10,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Tn.DEFAULT=new Tn(dS,Tn.DEFAULT_COLLECTION_PERCENTILE,Tn.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Tn.DISABLED=new Tn(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e){this.$n=e}next(){return this.$n+=2,this.$n}static Un(){return new Jo(0)}static Kn(){return new Jo(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N1="LruGarbageCollector",sL=1048576;function O1([n,e],[t,i]){const s=Oe(n,t);return s===0?Oe(e,i):s}class oL{constructor(e){this.Hn=e,this.buffer=new Ut(O1),this.Jn=0}Yn(){return++this.Jn}Zn(e){const t=[e,this.Yn()];if(this.buffer.size<this.Hn)this.buffer=this.buffer.add(t);else{const i=this.buffer.last();O1(t,i)<0&&(this.buffer=this.buffer.delete(i).add(t))}}get maxValue(){return this.buffer.last()[0]}}class lL{constructor(e,t,i){this.garbageCollector=e,this.asyncQueue=t,this.localStore=i,this.Xn=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.er(6e4)}stop(){this.Xn&&(this.Xn.cancel(),this.Xn=null)}get started(){return this.Xn!==null}er(e){fe(N1,`Garbage collection scheduled in ${e}ms`),this.Xn=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Xn=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){cl(t)?fe(N1,"Ignoring IndexedDB error during garbage collection: ",t):await ul(t)}await this.er(3e5)})}}class uL{constructor(e,t){this.tr=e,this.params=t}calculateTargetCount(e,t){return this.tr.nr(e).next(i=>Math.floor(t/100*i))}nthSequenceNumber(e,t){if(t===0)return te.resolve(Xh.ae);const i=new oL(t);return this.tr.forEachTarget(e,s=>i.Zn(s.sequenceNumber)).next(()=>this.tr.rr(e,s=>i.Zn(s))).next(()=>i.maxValue)}removeTargets(e,t,i){return this.tr.removeTargets(e,t,i)}removeOrphanedDocuments(e,t){return this.tr.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(fe("LruGarbageCollector","Garbage collection skipped; disabled"),te.resolve(x1)):this.getCacheSize(e).next(i=>i<this.params.cacheSizeCollectionThreshold?(fe("LruGarbageCollector",`Garbage collection skipped; Cache size ${i} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),x1):this.ir(e,t))}getCacheSize(e){return this.tr.getCacheSize(e)}ir(e,t){let i,s,l,c,d,m,g;const _=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(T=>(T>this.params.maximumSequenceNumbersToCollect?(fe("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${T}`),s=this.params.maximumSequenceNumbersToCollect):s=T,c=Date.now(),this.nthSequenceNumber(e,s))).next(T=>(i=T,d=Date.now(),this.removeTargets(e,i,t))).next(T=>(l=T,m=Date.now(),this.removeOrphanedDocuments(e,i))).next(T=>(g=Date.now(),ko()<=Ve.DEBUG&&fe("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${c-_}ms
	Determined least recently used ${s} in `+(d-c)+`ms
	Removed ${l} targets in `+(m-d)+`ms
	Removed ${T} documents in `+(g-m)+`ms
Total Duration: ${g-_}ms`),te.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:l,documentsRemoved:T})))}}function cL(n,e){return new uL(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fL{constructor(){this.changes=new Vs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ln.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const i=this.changes.get(t);return i!==void 0?te.resolve(i):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hL{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dL{constructor(e,t,i,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=i,this.indexManager=s}getDocument(e,t){let i=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(i=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(i!==null&&zu(i.mutation,s,or.empty(),Vt.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.getLocalViewOfDocuments(e,i,Ue()).next(()=>i))}getLocalViewOfDocuments(e,t,i=Ue()){const s=Es();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,i).next(l=>{let c=Nu();return l.forEach((d,m)=>{c=c.insert(d,m.overlayedDocument)}),c}))}getOverlayedDocuments(e,t){const i=Es();return this.populateOverlays(e,i,t).next(()=>this.computeViews(e,t,i,Ue()))}populateOverlays(e,t,i){const s=[];return i.forEach(l=>{t.has(l)||s.push(l)}),this.documentOverlayCache.getOverlays(e,s).next(l=>{l.forEach((c,d)=>{t.set(c,d)})})}computeViews(e,t,i,s){let l=Ci();const c=ju(),d=function(){return ju()}();return t.forEach((m,g)=>{const _=i.get(g.key);s.has(g.key)&&(_===void 0||_.mutation instanceof Us)?l=l.insert(g.key,g):_!==void 0?(c.set(g.key,_.mutation.getFieldMask()),zu(_.mutation,g,_.mutation.getFieldMask(),Vt.now())):c.set(g.key,or.empty())}),this.recalculateAndSaveOverlays(e,l).next(m=>(m.forEach((g,_)=>c.set(g,_)),t.forEach((g,_)=>{var T;return d.set(g,new hL(_,(T=c.get(g))!==null&&T!==void 0?T:null))}),d))}recalculateAndSaveOverlays(e,t){const i=ju();let s=new dt((c,d)=>c-d),l=Ue();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(c=>{for(const d of c)d.keys().forEach(m=>{const g=t.get(m);if(g===null)return;let _=i.get(m)||or.empty();_=d.applyToLocalView(g,_),i.set(m,_);const T=(s.get(d.batchId)||Ue()).add(m);s=s.insert(d.batchId,T)})}).next(()=>{const c=[],d=s.getReverseIterator();for(;d.hasNext();){const m=d.getNext(),g=m.key,_=m.value,T=Yw();_.forEach(w=>{if(!l.has(w)){const x=eS(t.get(w),i.get(w));x!==null&&T.set(w,x),l=l.add(w)}}),c.push(this.documentOverlayCache.saveOverlays(e,g,T))}return te.waitFor(c)}).next(()=>i)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(i=>this.recalculateAndSaveOverlays(e,i))}getDocumentsMatchingQuery(e,t,i,s){return function(c){return Ee.isDocumentKey(c.path)&&c.collectionGroup===null&&c.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):pM(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,i,s):this.getDocumentsMatchingCollectionQuery(e,t,i,s)}getNextDocuments(e,t,i,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,i,s).next(l=>{const c=s-l.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,i.largestBatchId,s-l.size):te.resolve(Es());let d=Ku,m=l;return c.next(g=>te.forEach(g,(_,T)=>(d<T.largestBatchId&&(d=T.largestBatchId),l.get(_)?te.resolve():this.remoteDocumentCache.getEntry(e,_).next(w=>{m=m.insert(_,w)}))).next(()=>this.populateOverlays(e,g,l)).next(()=>this.computeViews(e,m,g,Ue())).next(_=>({batchId:d,changes:Kw(_)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new Ee(t)).next(i=>{let s=Nu();return i.isFoundDocument()&&(s=s.insert(i.key,i)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,i,s){const l=t.collectionGroup;let c=Nu();return this.indexManager.getCollectionParents(e,l).next(d=>te.forEach(d,m=>{const g=function(T,w){return new Jh(w,null,T.explicitOrderBy.slice(),T.filters.slice(),T.limit,T.limitType,T.startAt,T.endAt)}(t,m.child(l));return this.getDocumentsMatchingCollectionQuery(e,g,i,s).next(_=>{_.forEach((T,w)=>{c=c.insert(T,w)})})}).next(()=>c))}getDocumentsMatchingCollectionQuery(e,t,i,s){let l;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,i.largestBatchId).next(c=>(l=c,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,i,l,s))).next(c=>{l.forEach((m,g)=>{const _=g.getKey();c.get(_)===null&&(c=c.insert(_,ln.newInvalidDocument(_)))});let d=Nu();return c.forEach((m,g)=>{const _=l.get(m);_!==void 0&&zu(_.mutation,g,or.empty(),Vt.now()),nd(t,g)&&(d=d.insert(m,g))}),d})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mL{constructor(e){this.serializer=e,this.dr=new Map,this.Ar=new Map}getBundleMetadata(e,t){return te.resolve(this.dr.get(t))}saveBundleMetadata(e,t){return this.dr.set(t.id,function(s){return{id:s.id,version:s.version,createTime:Ur(s.createTime)}}(t)),te.resolve()}getNamedQuery(e,t){return te.resolve(this.Ar.get(t))}saveNamedQuery(e,t){return this.Ar.set(t.name,function(s){return{name:s.name,query:rL(s.bundledQuery),readTime:Ur(s.readTime)}}(t)),te.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pL{constructor(){this.overlays=new dt(Ee.comparator),this.Rr=new Map}getOverlay(e,t){return te.resolve(this.overlays.get(t))}getOverlays(e,t){const i=Es();return te.forEach(t,s=>this.getOverlay(e,s).next(l=>{l!==null&&i.set(s,l)})).next(()=>i)}saveOverlays(e,t,i){return i.forEach((s,l)=>{this.Et(e,t,l)}),te.resolve()}removeOverlaysForBatchId(e,t,i){const s=this.Rr.get(i);return s!==void 0&&(s.forEach(l=>this.overlays=this.overlays.remove(l)),this.Rr.delete(i)),te.resolve()}getOverlaysForCollection(e,t,i){const s=Es(),l=t.length+1,c=new Ee(t.child("")),d=this.overlays.getIteratorFrom(c);for(;d.hasNext();){const m=d.getNext().value,g=m.getKey();if(!t.isPrefixOf(g.path))break;g.path.length===l&&m.largestBatchId>i&&s.set(m.getKey(),m)}return te.resolve(s)}getOverlaysForCollectionGroup(e,t,i,s){let l=new dt((g,_)=>g-_);const c=this.overlays.getIterator();for(;c.hasNext();){const g=c.getNext().value;if(g.getKey().getCollectionGroup()===t&&g.largestBatchId>i){let _=l.get(g.largestBatchId);_===null&&(_=Es(),l=l.insert(g.largestBatchId,_)),_.set(g.getKey(),g)}}const d=Es(),m=l.getIterator();for(;m.hasNext()&&(m.getNext().value.forEach((g,_)=>d.set(g,_)),!(d.size()>=s)););return te.resolve(d)}Et(e,t,i){const s=this.overlays.get(i.key);if(s!==null){const c=this.Rr.get(s.largestBatchId).delete(i.key);this.Rr.set(s.largestBatchId,c)}this.overlays=this.overlays.insert(i.key,new PM(t,i));let l=this.Rr.get(t);l===void 0&&(l=Ue(),this.Rr.set(t,l)),this.Rr.set(t,l.add(i.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(){this.sessionToken=tn.EMPTY_BYTE_STRING}getSessionToken(e){return te.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,te.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class By{constructor(){this.Vr=new Ut(Gt.mr),this.gr=new Ut(Gt.pr)}isEmpty(){return this.Vr.isEmpty()}addReference(e,t){const i=new Gt(e,t);this.Vr=this.Vr.add(i),this.gr=this.gr.add(i)}yr(e,t){e.forEach(i=>this.addReference(i,t))}removeReference(e,t){this.wr(new Gt(e,t))}Sr(e,t){e.forEach(i=>this.removeReference(i,t))}br(e){const t=new Ee(new _t([])),i=new Gt(t,e),s=new Gt(t,e+1),l=[];return this.gr.forEachInRange([i,s],c=>{this.wr(c),l.push(c.key)}),l}Dr(){this.Vr.forEach(e=>this.wr(e))}wr(e){this.Vr=this.Vr.delete(e),this.gr=this.gr.delete(e)}vr(e){const t=new Ee(new _t([])),i=new Gt(t,e),s=new Gt(t,e+1);let l=Ue();return this.gr.forEachInRange([i,s],c=>{l=l.add(c.key)}),l}containsKey(e){const t=new Gt(e,0),i=this.Vr.firstAfterOrEqual(t);return i!==null&&e.isEqual(i.key)}}class Gt{constructor(e,t){this.key=e,this.Cr=t}static mr(e,t){return Ee.comparator(e.key,t.key)||Oe(e.Cr,t.Cr)}static pr(e,t){return Oe(e.Cr,t.Cr)||Ee.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yL{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.Fr=1,this.Mr=new Ut(Gt.mr)}checkEmpty(e){return te.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,i,s){const l=this.Fr;this.Fr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const c=new kM(l,t,i,s);this.mutationQueue.push(c);for(const d of s)this.Mr=this.Mr.add(new Gt(d.key,l)),this.indexManager.addToCollectionParentIndex(e,d.key.path.popLast());return te.resolve(c)}lookupMutationBatch(e,t){return te.resolve(this.Or(t))}getNextMutationBatchAfterBatchId(e,t){const i=t+1,s=this.Nr(i),l=s<0?0:s;return te.resolve(this.mutationQueue.length>l?this.mutationQueue[l]:null)}getHighestUnacknowledgedBatchId(){return te.resolve(this.mutationQueue.length===0?Dy:this.Fr-1)}getAllMutationBatches(e){return te.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const i=new Gt(t,0),s=new Gt(t,Number.POSITIVE_INFINITY),l=[];return this.Mr.forEachInRange([i,s],c=>{const d=this.Or(c.Cr);l.push(d)}),te.resolve(l)}getAllMutationBatchesAffectingDocumentKeys(e,t){let i=new Ut(Oe);return t.forEach(s=>{const l=new Gt(s,0),c=new Gt(s,Number.POSITIVE_INFINITY);this.Mr.forEachInRange([l,c],d=>{i=i.add(d.Cr)})}),te.resolve(this.Br(i))}getAllMutationBatchesAffectingQuery(e,t){const i=t.path,s=i.length+1;let l=i;Ee.isDocumentKey(l)||(l=l.child(""));const c=new Gt(new Ee(l),0);let d=new Ut(Oe);return this.Mr.forEachWhile(m=>{const g=m.key.path;return!!i.isPrefixOf(g)&&(g.length===s&&(d=d.add(m.Cr)),!0)},c),te.resolve(this.Br(d))}Br(e){const t=[];return e.forEach(i=>{const s=this.Or(i);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){Xe(this.Lr(t.batchId,"removed")===0),this.mutationQueue.shift();let i=this.Mr;return te.forEach(t.mutations,s=>{const l=new Gt(s.key,t.batchId);return i=i.delete(l),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Mr=i})}qn(e){}containsKey(e,t){const i=new Gt(t,0),s=this.Mr.firstAfterOrEqual(i);return te.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,te.resolve()}Lr(e,t){return this.Nr(e)}Nr(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}Or(e){const t=this.Nr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _L{constructor(e){this.kr=e,this.docs=function(){return new dt(Ee.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const i=t.key,s=this.docs.get(i),l=s?s.size:0,c=this.kr(t);return this.docs=this.docs.insert(i,{document:t.mutableCopy(),size:c}),this.size+=c-l,this.indexManager.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const i=this.docs.get(t);return te.resolve(i?i.document.mutableCopy():ln.newInvalidDocument(t))}getEntries(e,t){let i=Ci();return t.forEach(s=>{const l=this.docs.get(s);i=i.insert(s,l?l.document.mutableCopy():ln.newInvalidDocument(s))}),te.resolve(i)}getDocumentsMatchingQuery(e,t,i,s){let l=Ci();const c=t.path,d=new Ee(c.child("__id-9223372036854775808__")),m=this.docs.getIteratorFrom(d);for(;m.hasNext();){const{key:g,value:{document:_}}=m.getNext();if(!c.isPrefixOf(g.path))break;g.path.length>c.length+1||$P(GP(_),i)<=0||(s.has(_.key)||nd(t,_))&&(l=l.insert(_.key,_.mutableCopy()))}return te.resolve(l)}getAllFromCollectionGroup(e,t,i,s){Se()}qr(e,t){return te.forEach(this.docs,i=>t(i))}newChangeBuffer(e){return new vL(this)}getSize(e){return te.resolve(this.size)}}class vL extends fL{constructor(e){super(),this.Ir=e}applyChanges(e){const t=[];return this.changes.forEach((i,s)=>{s.isValidDocument()?t.push(this.Ir.addEntry(e,s)):this.Ir.removeEntry(i)}),te.waitFor(t)}getFromCache(e,t){return this.Ir.getEntry(e,t)}getAllFromCache(e,t){return this.Ir.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EL{constructor(e){this.persistence=e,this.Qr=new Vs(t=>My(t),Ly),this.lastRemoteSnapshotVersion=Ie.min(),this.highestTargetId=0,this.$r=0,this.Ur=new By,this.targetCount=0,this.Kr=Jo.Un()}forEachTarget(e,t){return this.Qr.forEach((i,s)=>t(s)),te.resolve()}getLastRemoteSnapshotVersion(e){return te.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return te.resolve(this.$r)}allocateTargetId(e){return this.highestTargetId=this.Kr.next(),te.resolve(this.highestTargetId)}setTargetsMetadata(e,t,i){return i&&(this.lastRemoteSnapshotVersion=i),t>this.$r&&(this.$r=t),te.resolve()}zn(e){this.Qr.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Kr=new Jo(t),this.highestTargetId=t),e.sequenceNumber>this.$r&&(this.$r=e.sequenceNumber)}addTargetData(e,t){return this.zn(t),this.targetCount+=1,te.resolve()}updateTargetData(e,t){return this.zn(t),te.resolve()}removeTargetData(e,t){return this.Qr.delete(t.target),this.Ur.br(t.targetId),this.targetCount-=1,te.resolve()}removeTargets(e,t,i){let s=0;const l=[];return this.Qr.forEach((c,d)=>{d.sequenceNumber<=t&&i.get(d.targetId)===null&&(this.Qr.delete(c),l.push(this.removeMatchingKeysForTargetId(e,d.targetId)),s++)}),te.waitFor(l).next(()=>s)}getTargetCount(e){return te.resolve(this.targetCount)}getTargetData(e,t){const i=this.Qr.get(t)||null;return te.resolve(i)}addMatchingKeys(e,t,i){return this.Ur.yr(t,i),te.resolve()}removeMatchingKeys(e,t,i){this.Ur.Sr(t,i);const s=this.persistence.referenceDelegate,l=[];return s&&t.forEach(c=>{l.push(s.markPotentiallyOrphaned(e,c))}),te.waitFor(l)}removeMatchingKeysForTargetId(e,t){return this.Ur.br(t),te.resolve()}getMatchingKeysForTargetId(e,t){const i=this.Ur.vr(t);return te.resolve(i)}containsKey(e,t){return te.resolve(this.Ur.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mS{constructor(e,t){this.Wr={},this.overlays={},this.Gr=new Xh(0),this.zr=!1,this.zr=!0,this.jr=new gL,this.referenceDelegate=e(this),this.Hr=new EL(this),this.indexManager=new iL,this.remoteDocumentCache=function(s){return new _L(s)}(i=>this.referenceDelegate.Jr(i)),this.serializer=new nL(t),this.Yr=new mL(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.zr=!1,Promise.resolve()}get started(){return this.zr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new pL,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let i=this.Wr[e.toKey()];return i||(i=new yL(t,this.referenceDelegate),this.Wr[e.toKey()]=i),i}getGlobalsCache(){return this.jr}getTargetCache(){return this.Hr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Yr}runTransaction(e,t,i){fe("MemoryPersistence","Starting transaction:",e);const s=new TL(this.Gr.next());return this.referenceDelegate.Zr(),i(s).next(l=>this.referenceDelegate.Xr(s).next(()=>l)).toPromise().then(l=>(s.raiseOnCommittedEvent(),l))}ei(e,t){return te.or(Object.values(this.Wr).map(i=>()=>i.containsKey(e,t)))}}class TL extends YP{constructor(e){super(),this.currentSequenceNumber=e}}class Fy{constructor(e){this.persistence=e,this.ti=new By,this.ni=null}static ri(e){return new Fy(e)}get ii(){if(this.ni)return this.ni;throw Se()}addReference(e,t,i){return this.ti.addReference(i,t),this.ii.delete(i.toString()),te.resolve()}removeReference(e,t,i){return this.ti.removeReference(i,t),this.ii.add(i.toString()),te.resolve()}markPotentiallyOrphaned(e,t){return this.ii.add(t.toString()),te.resolve()}removeTarget(e,t){this.ti.br(t.targetId).forEach(s=>this.ii.add(s.toString()));const i=this.persistence.getTargetCache();return i.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(l=>this.ii.add(l.toString()))}).next(()=>i.removeTargetData(e,t))}Zr(){this.ni=new Set}Xr(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return te.forEach(this.ii,i=>{const s=Ee.fromPath(i);return this.si(e,s).next(l=>{l||t.removeEntry(s,Ie.min())})}).next(()=>(this.ni=null,t.apply(e)))}updateLimboDocument(e,t){return this.si(e,t).next(i=>{i?this.ii.delete(t.toString()):this.ii.add(t.toString())})}Jr(e){return 0}si(e,t){return te.or([()=>te.resolve(this.ti.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.ei(e,t)])}}class Oh{constructor(e,t){this.persistence=e,this.oi=new Vs(i=>WP(i.path),(i,s)=>i.isEqual(s)),this.garbageCollector=cL(this,t)}static ri(e,t){return new Oh(e,t)}Zr(){}Xr(e){return te.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}nr(e){const t=this.sr(e);return this.persistence.getTargetCache().getTargetCount(e).next(i=>t.next(s=>i+s))}sr(e){let t=0;return this.rr(e,i=>{t++}).next(()=>t)}rr(e,t){return te.forEach(this.oi,(i,s)=>this.ar(e,i,s).next(l=>l?te.resolve():t(s)))}removeTargets(e,t,i){return this.persistence.getTargetCache().removeTargets(e,t,i)}removeOrphanedDocuments(e,t){let i=0;const s=this.persistence.getRemoteDocumentCache(),l=s.newChangeBuffer();return s.qr(e,c=>this.ar(e,c,t).next(d=>{d||(i++,l.removeEntry(c,Ie.min()))})).next(()=>l.apply(e)).next(()=>i)}markPotentiallyOrphaned(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}removeTarget(e,t){const i=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,i)}addReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),te.resolve()}removeReference(e,t,i){return this.oi.set(i,e.currentSequenceNumber),te.resolve()}updateLimboDocument(e,t){return this.oi.set(t,e.currentSequenceNumber),te.resolve()}Jr(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=sh(e.data.value)),t}ar(e,t,i){return te.or([()=>this.persistence.ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const s=this.oi.get(t);return te.resolve(s!==void 0&&s>i)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(e,t,i,s){this.targetId=e,this.fromCache=t,this.Hi=i,this.Ji=s}static Yi(e,t){let i=Ue(),s=Ue();for(const l of t.docChanges)switch(l.type){case 0:i=i.add(l.doc.key);break;case 1:s=s.add(l.doc.key)}return new qy(e,t.fromCache,i,s)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bL{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AL{constructor(){this.Zi=!1,this.Xi=!1,this.es=100,this.ts=function(){return U4()?8:QP(fn())>0?6:4}()}initialize(e,t){this.ns=e,this.indexManager=t,this.Zi=!0}getDocumentsMatchingQuery(e,t,i,s){const l={result:null};return this.rs(e,t).next(c=>{l.result=c}).next(()=>{if(!l.result)return this.ss(e,t,s,i).next(c=>{l.result=c})}).next(()=>{if(l.result)return;const c=new bL;return this._s(e,t,c).next(d=>{if(l.result=d,this.Xi)return this.us(e,t,c,d.size)})}).next(()=>l.result)}us(e,t,i,s){return i.documentReadCount<this.es?(ko()<=Ve.DEBUG&&fe("QueryEngine","SDK will not create cache indexes for query:",Po(t),"since it only creates cache indexes for collection contains","more than or equal to",this.es,"documents"),te.resolve()):(ko()<=Ve.DEBUG&&fe("QueryEngine","Query:",Po(t),"scans",i.documentReadCount,"local documents and returns",s,"documents as results."),i.documentReadCount>this.ts*s?(ko()<=Ve.DEBUG&&fe("QueryEngine","The SDK decides to create cache indexes for query:",Po(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vr(t))):te.resolve())}rs(e,t){if(v1(t))return te.resolve(null);let i=Vr(t);return this.indexManager.getIndexType(e,i).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Lg(t,null,"F"),i=Vr(t)),this.indexManager.getDocumentsMatchingTarget(e,i).next(l=>{const c=Ue(...l);return this.ns.getDocuments(e,c).next(d=>this.indexManager.getMinOffset(e,i).next(m=>{const g=this.cs(t,d);return this.ls(t,g,c,m.readTime)?this.rs(e,Lg(t,null,"F")):this.hs(e,g,t,m)}))})))}ss(e,t,i,s){return v1(t)||s.isEqual(Ie.min())?te.resolve(null):this.ns.getDocuments(e,i).next(l=>{const c=this.cs(t,l);return this.ls(t,c,i,s)?te.resolve(null):(ko()<=Ve.DEBUG&&fe("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Po(t)),this.hs(e,c,t,HP(s,Ku)).next(d=>d))})}cs(e,t){let i=new Ut(Gw(e));return t.forEach((s,l)=>{nd(e,l)&&(i=i.add(l))}),i}ls(e,t,i,s){if(e.limit===null)return!1;if(i.size!==t.size)return!0;const l=e.limitType==="F"?t.last():t.first();return!!l&&(l.hasPendingWrites||l.version.compareTo(s)>0)}_s(e,t,i){return ko()<=Ve.DEBUG&&fe("QueryEngine","Using full collection scan to execute query:",Po(t)),this.ns.getDocumentsMatchingQuery(e,t,Sa.min(),i)}hs(e,t,i,s){return this.ns.getDocumentsMatchingQuery(e,i,s).next(l=>(t.forEach(c=>{l=l.insert(c.key,c)}),l))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="LocalStore",wL=3e8;class SL{constructor(e,t,i,s){this.persistence=e,this.Ps=t,this.serializer=s,this.Ts=new dt(Oe),this.Is=new Vs(l=>My(l),Ly),this.Es=new Map,this.ds=e.getRemoteDocumentCache(),this.Hr=e.getTargetCache(),this.Yr=e.getBundleCache(),this.As(i)}As(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new dL(this.ds,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ds.setIndexManager(this.indexManager),this.Ps.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Ts))}}function RL(n,e,t,i){return new SL(n,e,t,i)}async function pS(n,e){const t=Ce(n);return await t.persistence.runTransaction("Handle user change","readonly",i=>{let s;return t.mutationQueue.getAllMutationBatches(i).next(l=>(s=l,t.As(e),t.mutationQueue.getAllMutationBatches(i))).next(l=>{const c=[],d=[];let m=Ue();for(const g of s){c.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}for(const g of l){d.push(g.batchId);for(const _ of g.mutations)m=m.add(_.key)}return t.localDocuments.getDocuments(i,m).next(g=>({Rs:g,removedBatchIds:c,addedBatchIds:d}))})})}function IL(n,e){const t=Ce(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",i=>{const s=e.batch.keys(),l=t.ds.newChangeBuffer({trackRemovals:!0});return function(d,m,g,_){const T=g.batch,w=T.keys();let x=te.resolve();return w.forEach(D=>{x=x.next(()=>_.getEntry(m,D)).next(H=>{const L=g.docVersions.get(D);Xe(L!==null),H.version.compareTo(L)<0&&(T.applyToRemoteDocument(H,g),H.isValidDocument()&&(H.setReadTime(g.commitVersion),_.addEntry(H)))})}),x.next(()=>d.mutationQueue.removeMutationBatch(m,T))}(t,i,e,l).next(()=>l.apply(i)).next(()=>t.mutationQueue.performConsistencyCheck(i)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(i,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(i,function(d){let m=Ue();for(let g=0;g<d.mutationResults.length;++g)d.mutationResults[g].transformResults.length>0&&(m=m.add(d.batch.mutations[g].key));return m}(e))).next(()=>t.localDocuments.getDocuments(i,s))})}function gS(n){const e=Ce(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Hr.getLastRemoteSnapshotVersion(t))}function CL(n,e){const t=Ce(n),i=e.snapshotVersion;let s=t.Ts;return t.persistence.runTransaction("Apply remote event","readwrite-primary",l=>{const c=t.ds.newChangeBuffer({trackRemovals:!0});s=t.Ts;const d=[];e.targetChanges.forEach((_,T)=>{const w=s.get(T);if(!w)return;d.push(t.Hr.removeMatchingKeys(l,_.removedDocuments,T).next(()=>t.Hr.addMatchingKeys(l,_.addedDocuments,T)));let x=w.withSequenceNumber(l.currentSequenceNumber);e.targetMismatches.get(T)!==null?x=x.withResumeToken(tn.EMPTY_BYTE_STRING,Ie.min()).withLastLimboFreeSnapshotVersion(Ie.min()):_.resumeToken.approximateByteSize()>0&&(x=x.withResumeToken(_.resumeToken,i)),s=s.insert(T,x),function(H,L,$){return H.resumeToken.approximateByteSize()===0||L.snapshotVersion.toMicroseconds()-H.snapshotVersion.toMicroseconds()>=wL?!0:$.addedDocuments.size+$.modifiedDocuments.size+$.removedDocuments.size>0}(w,x,_)&&d.push(t.Hr.updateTargetData(l,x))});let m=Ci(),g=Ue();if(e.documentUpdates.forEach(_=>{e.resolvedLimboDocuments.has(_)&&d.push(t.persistence.referenceDelegate.updateLimboDocument(l,_))}),d.push(xL(l,c,e.documentUpdates).next(_=>{m=_.Vs,g=_.fs})),!i.isEqual(Ie.min())){const _=t.Hr.getLastRemoteSnapshotVersion(l).next(T=>t.Hr.setTargetsMetadata(l,l.currentSequenceNumber,i));d.push(_)}return te.waitFor(d).next(()=>c.apply(l)).next(()=>t.localDocuments.getLocalViewOfDocuments(l,m,g)).next(()=>m)}).then(l=>(t.Ts=s,l))}function xL(n,e,t){let i=Ue(),s=Ue();return t.forEach(l=>i=i.add(l)),e.getEntries(n,i).next(l=>{let c=Ci();return t.forEach((d,m)=>{const g=l.get(d);m.isFoundDocument()!==g.isFoundDocument()&&(s=s.add(d)),m.isNoDocument()&&m.version.isEqual(Ie.min())?(e.removeEntry(d,m.readTime),c=c.insert(d,m)):!g.isValidDocument()||m.version.compareTo(g.version)>0||m.version.compareTo(g.version)===0&&g.hasPendingWrites?(e.addEntry(m),c=c.insert(d,m)):fe(Hy,"Ignoring outdated watch update for ",d,". Current version:",g.version," Watch version:",m.version)}),{Vs:c,fs:s}})}function NL(n,e){const t=Ce(n);return t.persistence.runTransaction("Get next mutation batch","readonly",i=>(e===void 0&&(e=Dy),t.mutationQueue.getNextMutationBatchAfterBatchId(i,e)))}function OL(n,e){const t=Ce(n);return t.persistence.runTransaction("Allocate target","readwrite",i=>{let s;return t.Hr.getTargetData(i,e).next(l=>l?(s=l,te.resolve(s)):t.Hr.allocateTargetId(i).next(c=>(s=new pa(e,c,"TargetPurposeListen",i.currentSequenceNumber),t.Hr.addTargetData(i,s).next(()=>s))))}).then(i=>{const s=t.Ts.get(i.targetId);return(s===null||i.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Ts=t.Ts.insert(i.targetId,i),t.Is.set(e,i.targetId)),i})}async function Bg(n,e,t){const i=Ce(n),s=i.Ts.get(e),l=t?"readwrite":"readwrite-primary";try{t||await i.persistence.runTransaction("Release target",l,c=>i.persistence.referenceDelegate.removeTarget(c,s))}catch(c){if(!cl(c))throw c;fe(Hy,`Failed to update sequence numbers for target ${e}: ${c}`)}i.Ts=i.Ts.remove(e),i.Is.delete(s.target)}function D1(n,e,t){const i=Ce(n);let s=Ie.min(),l=Ue();return i.persistence.runTransaction("Execute query","readwrite",c=>function(m,g,_){const T=Ce(m),w=T.Is.get(_);return w!==void 0?te.resolve(T.Ts.get(w)):T.Hr.getTargetData(g,_)}(i,c,Vr(e)).next(d=>{if(d)return s=d.lastLimboFreeSnapshotVersion,i.Hr.getMatchingKeysForTargetId(c,d.targetId).next(m=>{l=m})}).next(()=>i.Ps.getDocumentsMatchingQuery(c,e,t?s:Ie.min(),t?l:Ue())).next(d=>(DL(i,yM(e),d),{documents:d,gs:l})))}function DL(n,e,t){let i=n.Es.get(e)||Ie.min();t.forEach((s,l)=>{l.readTime.compareTo(i)>0&&(i=l.readTime)}),n.Es.set(e,i)}class k1{constructor(){this.activeTargetIds=AM()}Ds(e){this.activeTargetIds=this.activeTargetIds.add(e)}vs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}bs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class kL{constructor(){this.ho=new k1,this.Po={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,i){}addLocalQueryTarget(e,t=!0){return t&&this.ho.Ds(e),this.Po[e]||"not-current"}updateQueryState(e,t,i){this.Po[e]=t}removeLocalQueryTarget(e){this.ho.vs(e)}isLocalQueryTarget(e){return this.ho.activeTargetIds.has(e)}clearQueryState(e){delete this.Po[e]}getAllActiveQueryTargets(){return this.ho.activeTargetIds}isActiveQueryTarget(e){return this.ho.activeTargetIds.has(e)}start(){return this.ho=new k1,Promise.resolve()}handleUserChange(e,t,i){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PL{To(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const P1="ConnectivityMonitor";class M1{constructor(){this.Io=()=>this.Eo(),this.Ao=()=>this.Ro(),this.Vo=[],this.mo()}To(e){this.Vo.push(e)}shutdown(){window.removeEventListener("online",this.Io),window.removeEventListener("offline",this.Ao)}mo(){window.addEventListener("online",this.Io),window.addEventListener("offline",this.Ao)}Eo(){fe(P1,"Network connectivity changed: AVAILABLE");for(const e of this.Vo)e(0)}Ro(){fe(P1,"Network connectivity changed: UNAVAILABLE");for(const e of this.Vo)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf=null;function Fg(){return Yf===null?Yf=function(){return 268435456+Math.round(2147483648*Math.random())}():Yf++,"0x"+Yf.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gp="RestConnection",ML={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class LL{get fo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.po=t+"://"+e.host,this.yo=`projects/${i}/databases/${s}`,this.wo=this.databaseId.database===wh?`project_id=${i}`:`project_id=${i}&database_id=${s}`}So(e,t,i,s,l){const c=Fg(),d=this.bo(e,t.toUriEncodedString());fe(Gp,`Sending RPC '${e}' ${c}:`,d,i);const m={"google-cloud-resource-prefix":this.yo,"x-goog-request-params":this.wo};return this.Do(m,s,l),this.vo(e,d,m,i).then(g=>(fe(Gp,`Received RPC '${e}' ${c}: `,g),g),g=>{throw Yo(Gp,`RPC '${e}' ${c} failed with error: `,g,"url: ",d,"request:",i),g})}Co(e,t,i,s,l,c){return this.So(e,t,i,s,l)}Do(e,t,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+ll}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,l)=>e[l]=s),i&&i.headers.forEach((s,l)=>e[l]=s)}bo(e,t){const i=ML[e];return`${this.po}/v1/${t}:${i}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VL{constructor(e){this.Fo=e.Fo,this.Mo=e.Mo}xo(e){this.Oo=e}No(e){this.Bo=e}Lo(e){this.ko=e}onMessage(e){this.qo=e}close(){this.Mo()}send(e){this.Fo(e)}Qo(){this.Oo()}$o(){this.Bo()}Uo(e){this.ko(e)}Ko(e){this.qo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn="WebChannelConnection";class UL extends LL{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}vo(e,t,i,s){const l=Fg();return new Promise((c,d)=>{const m=new Ew;m.setWithCredentials(!0),m.listenOnce(Tw.COMPLETE,()=>{try{switch(m.getLastErrorCode()){case ah.NO_ERROR:const _=m.getResponseJson();fe(sn,`XHR for RPC '${e}' ${l} received:`,JSON.stringify(_)),c(_);break;case ah.TIMEOUT:fe(sn,`RPC '${e}' ${l} timed out`),d(new _e(ie.DEADLINE_EXCEEDED,"Request time out"));break;case ah.HTTP_ERROR:const T=m.getStatus();if(fe(sn,`RPC '${e}' ${l} failed with status:`,T,"response text:",m.getResponseText()),T>0){let w=m.getResponseJson();Array.isArray(w)&&(w=w[0]);const x=w==null?void 0:w.error;if(x&&x.status&&x.message){const D=function(L){const $=L.toLowerCase().replace(/_/g,"-");return Object.values(ie).indexOf($)>=0?$:ie.UNKNOWN}(x.status);d(new _e(D,x.message))}else d(new _e(ie.UNKNOWN,"Server responded with status "+m.getStatus()))}else d(new _e(ie.UNAVAILABLE,"Connection failed."));break;default:Se()}}finally{fe(sn,`RPC '${e}' ${l} completed.`)}});const g=JSON.stringify(s);fe(sn,`RPC '${e}' ${l} sending request:`,s),m.send(t,"POST",g,i,15)})}Wo(e,t,i){const s=Fg(),l=[this.po,"/","google.firestore.v1.Firestore","/",e,"/channel"],c=ww(),d=Aw(),m={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},g=this.longPollingOptions.timeoutSeconds;g!==void 0&&(m.longPollingTimeout=Math.round(1e3*g)),this.useFetchStreams&&(m.useFetchStreams=!0),this.Do(m.initMessageHeaders,t,i),m.encodeInitMessageHeaders=!0;const _=l.join("");fe(sn,`Creating RPC '${e}' stream ${s}: ${_}`,m);const T=c.createWebChannel(_,m);let w=!1,x=!1;const D=new VL({Fo:L=>{x?fe(sn,`Not sending because RPC '${e}' stream ${s} is closed:`,L):(w||(fe(sn,`Opening RPC '${e}' stream ${s} transport.`),T.open(),w=!0),fe(sn,`RPC '${e}' stream ${s} sending:`,L),T.send(L))},Mo:()=>T.close()}),H=(L,$,Z)=>{L.listen($,Q=>{try{Z(Q)}catch(re){setTimeout(()=>{throw re},0)}})};return H(T,xu.EventType.OPEN,()=>{x||(fe(sn,`RPC '${e}' stream ${s} transport opened.`),D.Qo())}),H(T,xu.EventType.CLOSE,()=>{x||(x=!0,fe(sn,`RPC '${e}' stream ${s} transport closed`),D.Uo())}),H(T,xu.EventType.ERROR,L=>{x||(x=!0,Yo(sn,`RPC '${e}' stream ${s} transport errored:`,L),D.Uo(new _e(ie.UNAVAILABLE,"The operation could not be completed")))}),H(T,xu.EventType.MESSAGE,L=>{var $;if(!x){const Z=L.data[0];Xe(!!Z);const Q=Z,re=(Q==null?void 0:Q.error)||(($=Q[0])===null||$===void 0?void 0:$.error);if(re){fe(sn,`RPC '${e}' stream ${s} received error:`,re);const ae=re.status;let ge=function(I){const P=Nt[I];if(P!==void 0)return rS(P)}(ae),O=re.message;ge===void 0&&(ge=ie.INTERNAL,O="Unknown error status: "+ae+" with message "+re.message),x=!0,D.Uo(new _e(ge,O)),T.close()}else fe(sn,`RPC '${e}' stream ${s} received:`,Z),D.Ko(Z)}}),H(d,bw.STAT_EVENT,L=>{L.stat===Ng.PROXY?fe(sn,`RPC '${e}' stream ${s} detected buffering proxy`):L.stat===Ng.NOPROXY&&fe(sn,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{D.$o()},0),D}}function $p(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function od(n){return new FM(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e,t,i=1e3,s=1.5,l=6e4){this.Ti=e,this.timerId=t,this.Go=i,this.zo=s,this.jo=l,this.Ho=0,this.Jo=null,this.Yo=Date.now(),this.reset()}reset(){this.Ho=0}Zo(){this.Ho=this.jo}Xo(e){this.cancel();const t=Math.floor(this.Ho+this.e_()),i=Math.max(0,Date.now()-this.Yo),s=Math.max(0,t-i);s>0&&fe("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Ho} ms, delay with jitter: ${t} ms, last attempt: ${i} ms ago)`),this.Jo=this.Ti.enqueueAfterDelay(this.timerId,s,()=>(this.Yo=Date.now(),e())),this.Ho*=this.zo,this.Ho<this.Go&&(this.Ho=this.Go),this.Ho>this.jo&&(this.Ho=this.jo)}t_(){this.Jo!==null&&(this.Jo.skipDelay(),this.Jo=null)}cancel(){this.Jo!==null&&(this.Jo.cancel(),this.Jo=null)}e_(){return(Math.random()-.5)*this.Ho}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L1="PersistentStream";class _S{constructor(e,t,i,s,l,c,d,m){this.Ti=e,this.n_=i,this.r_=s,this.connection=l,this.authCredentialsProvider=c,this.appCheckCredentialsProvider=d,this.listener=m,this.state=0,this.i_=0,this.s_=null,this.o_=null,this.stream=null,this.__=0,this.a_=new yS(e,t)}u_(){return this.state===1||this.state===5||this.c_()}c_(){return this.state===2||this.state===3}start(){this.__=0,this.state!==4?this.auth():this.l_()}async stop(){this.u_()&&await this.close(0)}h_(){this.state=0,this.a_.reset()}P_(){this.c_()&&this.s_===null&&(this.s_=this.Ti.enqueueAfterDelay(this.n_,6e4,()=>this.T_()))}I_(e){this.E_(),this.stream.send(e)}async T_(){if(this.c_())return this.close(0)}E_(){this.s_&&(this.s_.cancel(),this.s_=null)}d_(){this.o_&&(this.o_.cancel(),this.o_=null)}async close(e,t){this.E_(),this.d_(),this.a_.cancel(),this.i_++,e!==4?this.a_.reset():t&&t.code===ie.RESOURCE_EXHAUSTED?(Ii(t.toString()),Ii("Using maximum backoff delay to prevent overloading the backend."),this.a_.Zo()):t&&t.code===ie.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.A_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Lo(t)}A_(){}auth(){this.state=1;const e=this.R_(this.i_),t=this.i_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([i,s])=>{this.i_===t&&this.V_(i,s)},i=>{e(()=>{const s=new _e(ie.UNKNOWN,"Fetching auth token failed: "+i.message);return this.m_(s)})})}V_(e,t){const i=this.R_(this.i_);this.stream=this.f_(e,t),this.stream.xo(()=>{i(()=>this.listener.xo())}),this.stream.No(()=>{i(()=>(this.state=2,this.o_=this.Ti.enqueueAfterDelay(this.r_,1e4,()=>(this.c_()&&(this.state=3),Promise.resolve())),this.listener.No()))}),this.stream.Lo(s=>{i(()=>this.m_(s))}),this.stream.onMessage(s=>{i(()=>++this.__==1?this.g_(s):this.onNext(s))})}l_(){this.state=5,this.a_.Xo(async()=>{this.state=0,this.start()})}m_(e){return fe(L1,`close with error: ${e}`),this.stream=null,this.close(4,e)}R_(e){return t=>{this.Ti.enqueueAndForget(()=>this.i_===e?t():(fe(L1,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class jL extends _S{constructor(e,t,i,s,l,c){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,i,s,c),this.serializer=l}f_(e,t){return this.connection.Wo("Listen",e,t)}g_(e){return this.onNext(e)}onNext(e){this.a_.reset();const t=GM(this.serializer,e),i=function(l){if(!("targetChange"in l))return Ie.min();const c=l.targetChange;return c.targetIds&&c.targetIds.length?Ie.min():c.readTime?Ur(c.readTime):Ie.min()}(e);return this.listener.p_(t,i)}y_(e){const t={};t.database=zg(this.serializer),t.addTarget=function(l,c){let d;const m=c.target;if(d=Mg(m)?{documents:YM(l,m)}:{query:QM(l,m).ht},d.targetId=c.targetId,c.resumeToken.approximateByteSize()>0){d.resumeToken=sS(l,c.resumeToken);const g=Vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}else if(c.snapshotVersion.compareTo(Ie.min())>0){d.readTime=Nh(l,c.snapshotVersion.toTimestamp());const g=Vg(l,c.expectedCount);g!==null&&(d.expectedCount=g)}return d}(this.serializer,e);const i=WM(this.serializer,e);i&&(t.labels=i),this.I_(t)}w_(e){const t={};t.database=zg(this.serializer),t.removeTarget=e,this.I_(t)}}class zL extends _S{constructor(e,t,i,s,l,c){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,i,s,c),this.serializer=l}get S_(){return this.__>0}start(){this.lastStreamToken=void 0,super.start()}A_(){this.S_&&this.b_([])}f_(e,t){return this.connection.Wo("Write",e,t)}g_(e){return Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,Xe(!e.writeResults||e.writeResults.length===0),this.listener.D_()}onNext(e){Xe(!!e.streamToken),this.lastStreamToken=e.streamToken,this.a_.reset();const t=KM(e.writeResults,e.commitTime),i=Ur(e.commitTime);return this.listener.v_(i,t)}C_(){const e={};e.database=zg(this.serializer),this.I_(e)}b_(e){const t={streamToken:this.lastStreamToken,writes:e.map(i=>$M(this.serializer,i))};this.I_(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BL{}class FL extends BL{constructor(e,t,i,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=i,this.serializer=s,this.F_=!1}M_(){if(this.F_)throw new _e(ie.FAILED_PRECONDITION,"The client has already been terminated.")}So(e,t,i,s){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([l,c])=>this.connection.So(e,Ug(t,i),s,l,c)).catch(l=>{throw l.name==="FirebaseError"?(l.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),l):new _e(ie.UNKNOWN,l.toString())})}Co(e,t,i,s,l){return this.M_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([c,d])=>this.connection.Co(e,Ug(t,i),s,c,d,l)).catch(c=>{throw c.name==="FirebaseError"?(c.code===ie.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),c):new _e(ie.UNKNOWN,c.toString())})}terminate(){this.F_=!0,this.connection.terminate()}}class qL{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.x_=0,this.O_=null,this.N_=!0}B_(){this.x_===0&&(this.L_("Unknown"),this.O_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.O_=null,this.k_("Backend didn't respond within 10 seconds."),this.L_("Offline"),Promise.resolve())))}q_(e){this.state==="Online"?this.L_("Unknown"):(this.x_++,this.x_>=1&&(this.Q_(),this.k_(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.L_("Offline")))}set(e){this.Q_(),this.x_=0,e==="Online"&&(this.N_=!1),this.L_(e)}L_(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}k_(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.N_?(Ii(t),this.N_=!1):fe("OnlineStateTracker",t)}Q_(){this.O_!==null&&(this.O_.cancel(),this.O_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xs="RemoteStore";class HL{constructor(e,t,i,s,l){this.localStore=e,this.datastore=t,this.asyncQueue=i,this.remoteSyncer={},this.U_=[],this.K_=new Map,this.W_=new Set,this.G_=[],this.z_=l,this.z_.To(c=>{i.enqueueAndForget(async()=>{js(this)&&(fe(xs,"Restarting streams for network reachability change."),await async function(m){const g=Ce(m);g.W_.add(4),await cc(g),g.j_.set("Unknown"),g.W_.delete(4),await ld(g)}(this))})}),this.j_=new qL(i,s)}}async function ld(n){if(js(n))for(const e of n.G_)await e(!0)}async function cc(n){for(const e of n.G_)await e(!1)}function vS(n,e){const t=Ce(n);t.K_.has(e.targetId)||(t.K_.set(e.targetId,e),Yy(t)?Ky(t):fl(t).c_()&&$y(t,e))}function Gy(n,e){const t=Ce(n),i=fl(t);t.K_.delete(e),i.c_()&&ES(t,e),t.K_.size===0&&(i.c_()?i.P_():js(t)&&t.j_.set("Unknown"))}function $y(n,e){if(n.H_.Ne(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(Ie.min())>0){const t=n.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(t)}fl(n).y_(e)}function ES(n,e){n.H_.Ne(e),fl(n).w_(e)}function Ky(n){n.H_=new UM({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),lt:e=>n.K_.get(e)||null,it:()=>n.datastore.serializer.databaseId}),fl(n).start(),n.j_.B_()}function Yy(n){return js(n)&&!fl(n).u_()&&n.K_.size>0}function js(n){return Ce(n).W_.size===0}function TS(n){n.H_=void 0}async function GL(n){n.j_.set("Online")}async function $L(n){n.K_.forEach((e,t)=>{$y(n,e)})}async function KL(n,e){TS(n),Yy(n)?(n.j_.q_(e),Ky(n)):n.j_.set("Unknown")}async function YL(n,e,t){if(n.j_.set("Online"),e instanceof aS&&e.state===2&&e.cause)try{await async function(s,l){const c=l.cause;for(const d of l.targetIds)s.K_.has(d)&&(await s.remoteSyncer.rejectListen(d,c),s.K_.delete(d),s.H_.removeTarget(d))}(n,e)}catch(i){fe(xs,"Failed to remove targets %s: %s ",e.targetIds.join(","),i),await Dh(n,i)}else if(e instanceof uh?n.H_.We(e):e instanceof iS?n.H_.Ze(e):n.H_.je(e),!t.isEqual(Ie.min()))try{const i=await gS(n.localStore);t.compareTo(i)>=0&&await function(l,c){const d=l.H_.ot(c);return d.targetChanges.forEach((m,g)=>{if(m.resumeToken.approximateByteSize()>0){const _=l.K_.get(g);_&&l.K_.set(g,_.withResumeToken(m.resumeToken,c))}}),d.targetMismatches.forEach((m,g)=>{const _=l.K_.get(m);if(!_)return;l.K_.set(m,_.withResumeToken(tn.EMPTY_BYTE_STRING,_.snapshotVersion)),ES(l,m);const T=new pa(_.target,m,g,_.sequenceNumber);$y(l,T)}),l.remoteSyncer.applyRemoteEvent(d)}(n,t)}catch(i){fe(xs,"Failed to raise snapshot:",i),await Dh(n,i)}}async function Dh(n,e,t){if(!cl(e))throw e;n.W_.add(1),await cc(n),n.j_.set("Offline"),t||(t=()=>gS(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{fe(xs,"Retrying IndexedDB access"),await t(),n.W_.delete(1),await ld(n)})}function bS(n,e){return e().catch(t=>Dh(n,t,e))}async function ud(n){const e=Ce(n),t=xa(e);let i=e.U_.length>0?e.U_[e.U_.length-1].batchId:Dy;for(;QL(e);)try{const s=await NL(e.localStore,i);if(s===null){e.U_.length===0&&t.P_();break}i=s.batchId,XL(e,s)}catch(s){await Dh(e,s)}AS(e)&&wS(e)}function QL(n){return js(n)&&n.U_.length<10}function XL(n,e){n.U_.push(e);const t=xa(n);t.c_()&&t.S_&&t.b_(e.mutations)}function AS(n){return js(n)&&!xa(n).u_()&&n.U_.length>0}function wS(n){xa(n).start()}async function WL(n){xa(n).C_()}async function ZL(n){const e=xa(n);for(const t of n.U_)e.b_(t.mutations)}async function JL(n,e,t){const i=n.U_.shift(),s=Uy.from(i,e,t);await bS(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ud(n)}async function e6(n,e){e&&xa(n).S_&&await async function(i,s){if(function(c){return LM(c)&&c!==ie.ABORTED}(s.code)){const l=i.U_.shift();xa(i).h_(),await bS(i,()=>i.remoteSyncer.rejectFailedWrite(l.batchId,s)),await ud(i)}}(n,e),AS(n)&&wS(n)}async function V1(n,e){const t=Ce(n);t.asyncQueue.verifyOperationInProgress(),fe(xs,"RemoteStore received new credentials");const i=js(t);t.W_.add(3),await cc(t),i&&t.j_.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.W_.delete(3),await ld(t)}async function t6(n,e){const t=Ce(n);e?(t.W_.delete(2),await ld(t)):e||(t.W_.add(2),await cc(t),t.j_.set("Unknown"))}function fl(n){return n.J_||(n.J_=function(t,i,s){const l=Ce(t);return l.M_(),new jL(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(n.datastore,n.asyncQueue,{xo:GL.bind(null,n),No:$L.bind(null,n),Lo:KL.bind(null,n),p_:YL.bind(null,n)}),n.G_.push(async e=>{e?(n.J_.h_(),Yy(n)?Ky(n):n.j_.set("Unknown")):(await n.J_.stop(),TS(n))})),n.J_}function xa(n){return n.Y_||(n.Y_=function(t,i,s){const l=Ce(t);return l.M_(),new zL(i,l.connection,l.authCredentials,l.appCheckCredentials,l.serializer,s)}(n.datastore,n.asyncQueue,{xo:()=>Promise.resolve(),No:WL.bind(null,n),Lo:e6.bind(null,n),D_:ZL.bind(null,n),v_:JL.bind(null,n)}),n.G_.push(async e=>{e?(n.Y_.h_(),await ud(n)):(await n.Y_.stop(),n.U_.length>0&&(fe(xs,`Stopping write stream with ${n.U_.length} pending writes`),n.U_=[]))})),n.Y_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,t,i,s,l){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=i,this.op=s,this.removalCallback=l,this.deferred=new Ea,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(c=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,i,s,l){const c=Date.now()+i,d=new Qy(e,t,c,s,l);return d.start(i),d}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new _e(ie.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Xy(n,e){if(Ii("AsyncQueue",`${e}: ${n}`),cl(n))return new _e(ie.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{static emptySet(e){return new Go(e.comparator)}constructor(e){this.comparator=e?(t,i)=>e(t,i)||Ee.comparator(t.key,i.key):(t,i)=>Ee.comparator(t.key,i.key),this.keyedMap=Nu(),this.sortedSet=new dt(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,i)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof Go)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),i=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,l=i.getNext().key;if(!s.isEqual(l))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const i=new Go;return i.comparator=this.comparator,i.keyedMap=e,i.sortedSet=t,i}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U1{constructor(){this.Z_=new dt(Ee.comparator)}track(e){const t=e.doc.key,i=this.Z_.get(t);i?e.type!==0&&i.type===3?this.Z_=this.Z_.insert(t,e):e.type===3&&i.type!==1?this.Z_=this.Z_.insert(t,{type:i.type,doc:e.doc}):e.type===2&&i.type===2?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):e.type===2&&i.type===0?this.Z_=this.Z_.insert(t,{type:0,doc:e.doc}):e.type===1&&i.type===0?this.Z_=this.Z_.remove(t):e.type===1&&i.type===2?this.Z_=this.Z_.insert(t,{type:1,doc:i.doc}):e.type===0&&i.type===1?this.Z_=this.Z_.insert(t,{type:2,doc:e.doc}):Se():this.Z_=this.Z_.insert(t,e)}X_(){const e=[];return this.Z_.inorderTraversal((t,i)=>{e.push(i)}),e}}class el{constructor(e,t,i,s,l,c,d,m,g){this.query=e,this.docs=t,this.oldDocs=i,this.docChanges=s,this.mutatedKeys=l,this.fromCache=c,this.syncStateChanged=d,this.excludesMetadataChanges=m,this.hasCachedResults=g}static fromInitialDocuments(e,t,i,s,l){const c=[];return t.forEach(d=>{c.push({type:0,doc:d})}),new el(e,t,Go.emptySet(t),c,i,s,!0,!1,l)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&td(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,i=e.docChanges;if(t.length!==i.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==i[s].type||!t[s].doc.isEqual(i[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n6{constructor(){this.ea=void 0,this.ta=[]}na(){return this.ta.some(e=>e.ra())}}class r6{constructor(){this.queries=j1(),this.onlineState="Unknown",this.ia=new Set}terminate(){(function(t,i){const s=Ce(t),l=s.queries;s.queries=j1(),l.forEach((c,d)=>{for(const m of d.ta)m.onError(i)})})(this,new _e(ie.ABORTED,"Firestore shutting down"))}}function j1(){return new Vs(n=>Hw(n),td)}async function SS(n,e){const t=Ce(n);let i=3;const s=e.query;let l=t.queries.get(s);l?!l.na()&&e.ra()&&(i=2):(l=new n6,i=e.ra()?0:1);try{switch(i){case 0:l.ea=await t.onListen(s,!0);break;case 1:l.ea=await t.onListen(s,!1);break;case 2:await t.onFirstRemoteStoreListen(s)}}catch(c){const d=Xy(c,`Initialization of query '${Po(e.query)}' failed`);return void e.onError(d)}t.queries.set(s,l),l.ta.push(e),e.sa(t.onlineState),l.ea&&e.oa(l.ea)&&Wy(t)}async function RS(n,e){const t=Ce(n),i=e.query;let s=3;const l=t.queries.get(i);if(l){const c=l.ta.indexOf(e);c>=0&&(l.ta.splice(c,1),l.ta.length===0?s=e.ra()?0:1:!l.na()&&e.ra()&&(s=2))}switch(s){case 0:return t.queries.delete(i),t.onUnlisten(i,!0);case 1:return t.queries.delete(i),t.onUnlisten(i,!1);case 2:return t.onLastRemoteStoreUnlisten(i);default:return}}function i6(n,e){const t=Ce(n);let i=!1;for(const s of e){const l=s.query,c=t.queries.get(l);if(c){for(const d of c.ta)d.oa(s)&&(i=!0);c.ea=s}}i&&Wy(t)}function a6(n,e,t){const i=Ce(n),s=i.queries.get(e);if(s)for(const l of s.ta)l.onError(t);i.queries.delete(e)}function Wy(n){n.ia.forEach(e=>{e.next()})}var qg,z1;(z1=qg||(qg={}))._a="default",z1.Cache="cache";class IS{constructor(e,t,i){this.query=e,this.aa=t,this.ua=!1,this.ca=null,this.onlineState="Unknown",this.options=i||{}}oa(e){if(!this.options.includeMetadataChanges){const i=[];for(const s of e.docChanges)s.type!==3&&i.push(s);e=new el(e.query,e.docs,e.oldDocs,i,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.ua?this.la(e)&&(this.aa.next(e),t=!0):this.ha(e,this.onlineState)&&(this.Pa(e),t=!0),this.ca=e,t}onError(e){this.aa.error(e)}sa(e){this.onlineState=e;let t=!1;return this.ca&&!this.ua&&this.ha(this.ca,e)&&(this.Pa(this.ca),t=!0),t}ha(e,t){if(!e.fromCache||!this.ra())return!0;const i=t!=="Offline";return(!this.options.Ta||!i)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}la(e){if(e.docChanges.length>0)return!0;const t=this.ca&&this.ca.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Pa(e){e=el.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.ua=!0,this.aa.next(e)}ra(){return this.options.source!==qg.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CS{constructor(e){this.key=e}}class xS{constructor(e){this.key=e}}class s6{constructor(e,t){this.query=e,this.fa=t,this.ga=null,this.hasCachedResults=!1,this.current=!1,this.pa=Ue(),this.mutatedKeys=Ue(),this.ya=Gw(e),this.wa=new Go(this.ya)}get Sa(){return this.fa}ba(e,t){const i=t?t.Da:new U1,s=t?t.wa:this.wa;let l=t?t.mutatedKeys:this.mutatedKeys,c=s,d=!1;const m=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,g=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((_,T)=>{const w=s.get(_),x=nd(this.query,T)?T:null,D=!!w&&this.mutatedKeys.has(w.key),H=!!x&&(x.hasLocalMutations||this.mutatedKeys.has(x.key)&&x.hasCommittedMutations);let L=!1;w&&x?w.data.isEqual(x.data)?D!==H&&(i.track({type:3,doc:x}),L=!0):this.va(w,x)||(i.track({type:2,doc:x}),L=!0,(m&&this.ya(x,m)>0||g&&this.ya(x,g)<0)&&(d=!0)):!w&&x?(i.track({type:0,doc:x}),L=!0):w&&!x&&(i.track({type:1,doc:w}),L=!0,(m||g)&&(d=!0)),L&&(x?(c=c.add(x),l=H?l.add(_):l.delete(_)):(c=c.delete(_),l=l.delete(_)))}),this.query.limit!==null)for(;c.size>this.query.limit;){const _=this.query.limitType==="F"?c.last():c.first();c=c.delete(_.key),l=l.delete(_.key),i.track({type:1,doc:_})}return{wa:c,Da:i,ls:d,mutatedKeys:l}}va(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,i,s){const l=this.wa;this.wa=e.wa,this.mutatedKeys=e.mutatedKeys;const c=e.Da.X_();c.sort((_,T)=>function(x,D){const H=L=>{switch(L){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Se()}};return H(x)-H(D)}(_.type,T.type)||this.ya(_.doc,T.doc)),this.Ca(i),s=s!=null&&s;const d=t&&!s?this.Fa():[],m=this.pa.size===0&&this.current&&!s?1:0,g=m!==this.ga;return this.ga=m,c.length!==0||g?{snapshot:new el(this.query,e.wa,l,c,e.mutatedKeys,m===0,g,!1,!!i&&i.resumeToken.approximateByteSize()>0),Ma:d}:{Ma:d}}sa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({wa:this.wa,Da:new U1,mutatedKeys:this.mutatedKeys,ls:!1},!1)):{Ma:[]}}xa(e){return!this.fa.has(e)&&!!this.wa.has(e)&&!this.wa.get(e).hasLocalMutations}Ca(e){e&&(e.addedDocuments.forEach(t=>this.fa=this.fa.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.fa=this.fa.delete(t)),this.current=e.current)}Fa(){if(!this.current)return[];const e=this.pa;this.pa=Ue(),this.wa.forEach(i=>{this.xa(i.key)&&(this.pa=this.pa.add(i.key))});const t=[];return e.forEach(i=>{this.pa.has(i)||t.push(new xS(i))}),this.pa.forEach(i=>{e.has(i)||t.push(new CS(i))}),t}Oa(e){this.fa=e.gs,this.pa=Ue();const t=this.ba(e.documents);return this.applyChanges(t,!0)}Na(){return el.fromInitialDocuments(this.query,this.wa,this.mutatedKeys,this.ga===0,this.hasCachedResults)}}const Zy="SyncEngine";class o6{constructor(e,t,i){this.query=e,this.targetId=t,this.view=i}}class l6{constructor(e){this.key=e,this.Ba=!1}}class u6{constructor(e,t,i,s,l,c){this.localStore=e,this.remoteStore=t,this.eventManager=i,this.sharedClientState=s,this.currentUser=l,this.maxConcurrentLimboResolutions=c,this.La={},this.ka=new Vs(d=>Hw(d),td),this.qa=new Map,this.Qa=new Set,this.$a=new dt(Ee.comparator),this.Ua=new Map,this.Ka=new By,this.Wa={},this.Ga=new Map,this.za=Jo.Kn(),this.onlineState="Unknown",this.ja=void 0}get isPrimaryClient(){return this.ja===!0}}async function c6(n,e,t=!0){const i=MS(n);let s;const l=i.ka.get(e);return l?(i.sharedClientState.addLocalQueryTarget(l.targetId),s=l.view.Na()):s=await NS(i,e,t,!0),s}async function f6(n,e){const t=MS(n);await NS(t,e,!0,!1)}async function NS(n,e,t,i){const s=await OL(n.localStore,Vr(e)),l=s.targetId,c=n.sharedClientState.addLocalQueryTarget(l,t);let d;return i&&(d=await h6(n,e,l,c==="current",s.resumeToken)),n.isPrimaryClient&&t&&vS(n.remoteStore,s),d}async function h6(n,e,t,i,s){n.Ha=(T,w,x)=>async function(H,L,$,Z){let Q=L.view.ba($);Q.ls&&(Q=await D1(H.localStore,L.query,!1).then(({documents:O})=>L.view.ba(O,Q)));const re=Z&&Z.targetChanges.get(L.targetId),ae=Z&&Z.targetMismatches.get(L.targetId)!=null,ge=L.view.applyChanges(Q,H.isPrimaryClient,re,ae);return F1(H,L.targetId,ge.Ma),ge.snapshot}(n,T,w,x);const l=await D1(n.localStore,e,!0),c=new s6(e,l.gs),d=c.ba(l.documents),m=uc.createSynthesizedTargetChangeForCurrentChange(t,i&&n.onlineState!=="Offline",s),g=c.applyChanges(d,n.isPrimaryClient,m);F1(n,t,g.Ma);const _=new o6(e,t,c);return n.ka.set(e,_),n.qa.has(t)?n.qa.get(t).push(e):n.qa.set(t,[e]),g.snapshot}async function d6(n,e,t){const i=Ce(n),s=i.ka.get(e),l=i.qa.get(s.targetId);if(l.length>1)return i.qa.set(s.targetId,l.filter(c=>!td(c,e))),void i.ka.delete(e);i.isPrimaryClient?(i.sharedClientState.removeLocalQueryTarget(s.targetId),i.sharedClientState.isActiveQueryTarget(s.targetId)||await Bg(i.localStore,s.targetId,!1).then(()=>{i.sharedClientState.clearQueryState(s.targetId),t&&Gy(i.remoteStore,s.targetId),Hg(i,s.targetId)}).catch(ul)):(Hg(i,s.targetId),await Bg(i.localStore,s.targetId,!0))}async function m6(n,e){const t=Ce(n),i=t.ka.get(e),s=t.qa.get(i.targetId);t.isPrimaryClient&&s.length===1&&(t.sharedClientState.removeLocalQueryTarget(i.targetId),Gy(t.remoteStore,i.targetId))}async function p6(n,e,t){const i=b6(n);try{const s=await function(c,d){const m=Ce(c),g=Vt.now(),_=d.reduce((x,D)=>x.add(D.key),Ue());let T,w;return m.persistence.runTransaction("Locally write mutations","readwrite",x=>{let D=Ci(),H=Ue();return m.ds.getEntries(x,_).next(L=>{D=L,D.forEach(($,Z)=>{Z.isValidDocument()||(H=H.add($))})}).next(()=>m.localDocuments.getOverlayedDocuments(x,D)).next(L=>{T=L;const $=[];for(const Z of d){const Q=OM(Z,T.get(Z.key).overlayedDocument);Q!=null&&$.push(new Us(Z.key,Q,Vw(Q.value.mapValue),Ei.exists(!0)))}return m.mutationQueue.addMutationBatch(x,g,$,d)}).next(L=>{w=L;const $=L.applyToLocalDocumentSet(T,H);return m.documentOverlayCache.saveOverlays(x,L.batchId,$)})}).then(()=>({batchId:w.batchId,changes:Kw(T)}))}(i.localStore,e);i.sharedClientState.addPendingMutation(s.batchId),function(c,d,m){let g=c.Wa[c.currentUser.toKey()];g||(g=new dt(Oe)),g=g.insert(d,m),c.Wa[c.currentUser.toKey()]=g}(i,s.batchId,t),await fc(i,s.changes),await ud(i.remoteStore)}catch(s){const l=Xy(s,"Failed to persist write");t.reject(l)}}async function OS(n,e){const t=Ce(n);try{const i=await CL(t.localStore,e);e.targetChanges.forEach((s,l)=>{const c=t.Ua.get(l);c&&(Xe(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?c.Ba=!0:s.modifiedDocuments.size>0?Xe(c.Ba):s.removedDocuments.size>0&&(Xe(c.Ba),c.Ba=!1))}),await fc(t,i,e)}catch(i){await ul(i)}}function B1(n,e,t){const i=Ce(n);if(i.isPrimaryClient&&t===0||!i.isPrimaryClient&&t===1){const s=[];i.ka.forEach((l,c)=>{const d=c.view.sa(e);d.snapshot&&s.push(d.snapshot)}),function(c,d){const m=Ce(c);m.onlineState=d;let g=!1;m.queries.forEach((_,T)=>{for(const w of T.ta)w.sa(d)&&(g=!0)}),g&&Wy(m)}(i.eventManager,e),s.length&&i.La.p_(s),i.onlineState=e,i.isPrimaryClient&&i.sharedClientState.setOnlineState(e)}}async function g6(n,e,t){const i=Ce(n);i.sharedClientState.updateQueryState(e,"rejected",t);const s=i.Ua.get(e),l=s&&s.key;if(l){let c=new dt(Ee.comparator);c=c.insert(l,ln.newNoDocument(l,Ie.min()));const d=Ue().add(l),m=new sd(Ie.min(),new Map,new dt(Oe),c,d);await OS(i,m),i.$a=i.$a.remove(l),i.Ua.delete(e),Jy(i)}else await Bg(i.localStore,e,!1).then(()=>Hg(i,e,t)).catch(ul)}async function y6(n,e){const t=Ce(n),i=e.batch.batchId;try{const s=await IL(t.localStore,e);kS(t,i,null),DS(t,i),t.sharedClientState.updateMutationState(i,"acknowledged"),await fc(t,s)}catch(s){await ul(s)}}async function _6(n,e,t){const i=Ce(n);try{const s=await function(c,d){const m=Ce(c);return m.persistence.runTransaction("Reject batch","readwrite-primary",g=>{let _;return m.mutationQueue.lookupMutationBatch(g,d).next(T=>(Xe(T!==null),_=T.keys(),m.mutationQueue.removeMutationBatch(g,T))).next(()=>m.mutationQueue.performConsistencyCheck(g)).next(()=>m.documentOverlayCache.removeOverlaysForBatchId(g,_,d)).next(()=>m.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(g,_)).next(()=>m.localDocuments.getDocuments(g,_))})}(i.localStore,e);kS(i,e,t),DS(i,e),i.sharedClientState.updateMutationState(e,"rejected",t),await fc(i,s)}catch(s){await ul(s)}}function DS(n,e){(n.Ga.get(e)||[]).forEach(t=>{t.resolve()}),n.Ga.delete(e)}function kS(n,e,t){const i=Ce(n);let s=i.Wa[i.currentUser.toKey()];if(s){const l=s.get(e);l&&(t?l.reject(t):l.resolve(),s=s.remove(e)),i.Wa[i.currentUser.toKey()]=s}}function Hg(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const i of n.qa.get(e))n.ka.delete(i),t&&n.La.Ja(i,t);n.qa.delete(e),n.isPrimaryClient&&n.Ka.br(e).forEach(i=>{n.Ka.containsKey(i)||PS(n,i)})}function PS(n,e){n.Qa.delete(e.path.canonicalString());const t=n.$a.get(e);t!==null&&(Gy(n.remoteStore,t),n.$a=n.$a.remove(e),n.Ua.delete(t),Jy(n))}function F1(n,e,t){for(const i of t)i instanceof CS?(n.Ka.addReference(i.key,e),v6(n,i)):i instanceof xS?(fe(Zy,"Document no longer in limbo: "+i.key),n.Ka.removeReference(i.key,e),n.Ka.containsKey(i.key)||PS(n,i.key)):Se()}function v6(n,e){const t=e.key,i=t.path.canonicalString();n.$a.get(t)||n.Qa.has(i)||(fe(Zy,"New document in limbo: "+t),n.Qa.add(i),Jy(n))}function Jy(n){for(;n.Qa.size>0&&n.$a.size<n.maxConcurrentLimboResolutions;){const e=n.Qa.values().next().value;n.Qa.delete(e);const t=new Ee(_t.fromString(e)),i=n.za.next();n.Ua.set(i,new l6(t)),n.$a=n.$a.insert(t,i),vS(n.remoteStore,new pa(Vr(ed(t.path)),i,"TargetPurposeLimboResolution",Xh.ae))}}async function fc(n,e,t){const i=Ce(n),s=[],l=[],c=[];i.ka.isEmpty()||(i.ka.forEach((d,m)=>{c.push(i.Ha(m,e,t).then(g=>{var _;if((g||t)&&i.isPrimaryClient){const T=g?!g.fromCache:(_=t==null?void 0:t.targetChanges.get(m.targetId))===null||_===void 0?void 0:_.current;i.sharedClientState.updateQueryState(m.targetId,T?"current":"not-current")}if(g){s.push(g);const T=qy.Yi(m.targetId,g);l.push(T)}}))}),await Promise.all(c),i.La.p_(s),await async function(m,g){const _=Ce(m);try{await _.persistence.runTransaction("notifyLocalViewChanges","readwrite",T=>te.forEach(g,w=>te.forEach(w.Hi,x=>_.persistence.referenceDelegate.addReference(T,w.targetId,x)).next(()=>te.forEach(w.Ji,x=>_.persistence.referenceDelegate.removeReference(T,w.targetId,x)))))}catch(T){if(!cl(T))throw T;fe(Hy,"Failed to update sequence numbers: "+T)}for(const T of g){const w=T.targetId;if(!T.fromCache){const x=_.Ts.get(w),D=x.snapshotVersion,H=x.withLastLimboFreeSnapshotVersion(D);_.Ts=_.Ts.insert(w,H)}}}(i.localStore,l))}async function E6(n,e){const t=Ce(n);if(!t.currentUser.isEqual(e)){fe(Zy,"User change. New user:",e.toKey());const i=await pS(t.localStore,e);t.currentUser=e,function(l,c){l.Ga.forEach(d=>{d.forEach(m=>{m.reject(new _e(ie.CANCELLED,c))})}),l.Ga.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,i.removedBatchIds,i.addedBatchIds),await fc(t,i.Rs)}}function T6(n,e){const t=Ce(n),i=t.Ua.get(e);if(i&&i.Ba)return Ue().add(i.key);{let s=Ue();const l=t.qa.get(e);if(!l)return s;for(const c of l){const d=t.ka.get(c);s=s.unionWith(d.view.Sa)}return s}}function MS(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=OS.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=T6.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=g6.bind(null,e),e.La.p_=i6.bind(null,e.eventManager),e.La.Ja=a6.bind(null,e.eventManager),e}function b6(n){const e=Ce(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=y6.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=_6.bind(null,e),e}class kh{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=od(e.databaseInfo.databaseId),this.sharedClientState=this.Za(e),this.persistence=this.Xa(e),await this.persistence.start(),this.localStore=this.eu(e),this.gcScheduler=this.tu(e,this.localStore),this.indexBackfillerScheduler=this.nu(e,this.localStore)}tu(e,t){return null}nu(e,t){return null}eu(e){return RL(this.persistence,new AL,e.initialUser,this.serializer)}Xa(e){return new mS(Fy.ri,this.serializer)}Za(e){return new kL}async terminate(){var e,t;(e=this.gcScheduler)===null||e===void 0||e.stop(),(t=this.indexBackfillerScheduler)===null||t===void 0||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}kh.provider={build:()=>new kh};class A6 extends kh{constructor(e){super(),this.cacheSizeBytes=e}tu(e,t){Xe(this.persistence.referenceDelegate instanceof Oh);const i=this.persistence.referenceDelegate.garbageCollector;return new lL(i,e.asyncQueue,t)}Xa(e){const t=this.cacheSizeBytes!==void 0?Tn.withCacheSize(this.cacheSizeBytes):Tn.DEFAULT;return new mS(i=>Oh.ri(i,t),this.serializer)}}class Gg{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=i=>B1(this.syncEngine,i,1),this.remoteStore.remoteSyncer.handleCredentialChange=E6.bind(null,this.syncEngine),await t6(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new r6}()}createDatastore(e){const t=od(e.databaseInfo.databaseId),i=function(l){return new UL(l)}(e.databaseInfo);return function(l,c,d,m){return new FL(l,c,d,m)}(e.authCredentials,e.appCheckCredentials,i,t)}createRemoteStore(e){return function(i,s,l,c,d){return new HL(i,s,l,c,d)}(this.localStore,this.datastore,e.asyncQueue,t=>B1(this.syncEngine,t,0),function(){return M1.D()?new M1:new PL}())}createSyncEngine(e,t){return function(s,l,c,d,m,g,_){const T=new u6(s,l,c,d,m,g);return _&&(T.ja=!0),T}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(s){const l=Ce(s);fe(xs,"RemoteStore shutting down."),l.W_.add(5),await cc(l),l.z_.shutdown(),l.j_.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(t=this.eventManager)===null||t===void 0||t.terminate()}}Gg.provider={build:()=>new Gg};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LS{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.iu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.iu(this.observer.error,e):Ii("Uncaught Error in snapshot listener:",e.toString()))}su(){this.muted=!0}iu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na="FirestoreClient";class w6{constructor(e,t,i,s,l){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=i,this.databaseInfo=s,this.user=on.UNAUTHENTICATED,this.clientId=Iw.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=l,this.authCredentials.start(i,async c=>{fe(Na,"Received user=",c.uid),await this.authCredentialListener(c),this.user=c}),this.appCheckCredentials.start(i,c=>(fe(Na,"Received new app check token=",c),this.appCheckCredentialListener(c,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ea;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const i=Xy(t,"Failed to shutdown persistence");e.reject(i)}}),e.promise}}async function Kp(n,e){n.asyncQueue.verifyOperationInProgress(),fe(Na,"Initializing OfflineComponentProvider");const t=n.configuration;await e.initialize(t);let i=t.initialUser;n.setCredentialChangeListener(async s=>{i.isEqual(s)||(await pS(e.localStore,s),i=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function q1(n,e){n.asyncQueue.verifyOperationInProgress();const t=await S6(n);fe(Na,"Initializing OnlineComponentProvider"),await e.initialize(t,n.configuration),n.setCredentialChangeListener(i=>V1(e.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>V1(e.remoteStore,s)),n._onlineComponents=e}async function S6(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){fe(Na,"Using user provided OfflineComponentProvider");try{await Kp(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!function(s){return s.name==="FirebaseError"?s.code===ie.FAILED_PRECONDITION||s.code===ie.UNIMPLEMENTED:!(typeof DOMException<"u"&&s instanceof DOMException)||s.code===22||s.code===20||s.code===11}(t))throw t;Yo("Error using user provided cache. Falling back to memory cache: "+t),await Kp(n,new kh)}}else fe(Na,"Using default OfflineComponentProvider"),await Kp(n,new A6(void 0));return n._offlineComponents}async function VS(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(fe(Na,"Using user provided OnlineComponentProvider"),await q1(n,n._uninitializedComponentsProvider._online)):(fe(Na,"Using default OnlineComponentProvider"),await q1(n,new Gg))),n._onlineComponents}function R6(n){return VS(n).then(e=>e.syncEngine)}async function $g(n){const e=await VS(n),t=e.eventManager;return t.onListen=c6.bind(null,e.syncEngine),t.onUnlisten=d6.bind(null,e.syncEngine),t.onFirstRemoteStoreListen=f6.bind(null,e.syncEngine),t.onLastRemoteStoreUnlisten=m6.bind(null,e.syncEngine),t}function I6(n,e,t={}){const i=new Ea;return n.asyncQueue.enqueueAndForget(async()=>function(l,c,d,m,g){const _=new LS({next:w=>{_.su(),c.enqueueAndForget(()=>RS(l,T));const x=w.docs.has(d);!x&&w.fromCache?g.reject(new _e(ie.UNAVAILABLE,"Failed to get document because the client is offline.")):x&&w.fromCache&&m&&m.source==="server"?g.reject(new _e(ie.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):g.resolve(w)},error:w=>g.reject(w)}),T=new IS(ed(d.path),_,{includeMetadataChanges:!0,Ta:!0});return SS(l,T)}(await $g(n),n.asyncQueue,e,t,i)),i.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function US(n){const e={};return n.timeoutSeconds!==void 0&&(e.timeoutSeconds=n.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C6(n,e,t){if(!t)throw new _e(ie.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function x6(n,e,t,i){if(e===!0&&i===!0)throw new _e(ie.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function G1(n){if(!Ee.isDocumentKey(n))throw new _e(ie.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function e_(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(i){return i.constructor?i.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":Se()}function Ta(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new _e(ie.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=e_(n);throw new _e(ie.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jS="firestore.googleapis.com",$1=!0;class K1{constructor(e){var t,i;if(e.host===void 0){if(e.ssl!==void 0)throw new _e(ie.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=jS,this.ssl=$1}else this.host=e.host,this.ssl=(t=e.ssl)!==null&&t!==void 0?t:$1;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=dS;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<sL)throw new _e(ie.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}x6("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=US((i=e.experimentalLongPollingOptions)!==null&&i!==void 0?i:{}),function(l){if(l.timeoutSeconds!==void 0){if(isNaN(l.timeoutSeconds))throw new _e(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (must not be NaN)`);if(l.timeoutSeconds<5)throw new _e(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (minimum allowed value is 5)`);if(l.timeoutSeconds>30)throw new _e(ie.INVALID_ARGUMENT,`invalid long polling timeout: ${l.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(i,s){return i.timeoutSeconds===s.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class t_{constructor(e,t,i,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=i,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new K1({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new _e(ie.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new _e(ie.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new K1(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(i){if(!i)return new MP;switch(i.type){case"firstParty":return new jP(i.sessionIndex||"0",i.iamToken||null,i.authTokenFactory||null);case"provider":return i.client;default:throw new _e(ie.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const i=H1.get(t);i&&(fe("ComponentProvider","Removing Datastore"),H1.delete(t),i.terminate())}(this),Promise.resolve()}}function N6(n,e,t,i={}){var s;const l=(n=Ta(n,t_))._getSettings(),c=Object.assign(Object.assign({},l),{emulatorOptions:n._getEmulatorOptions()}),d=`${e}:${t}`;l.host!==jS&&l.host!==d&&Yo("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:d,ssl:!1,emulatorOptions:i});if(!wi(m,c)&&(n._setSettings(m),i.mockUserToken)){let g,_;if(typeof i.mockUserToken=="string")g=i.mockUserToken,_=on.MOCK_USER;else{g=fA(i.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const T=i.mockUserToken.sub||i.mockUserToken.user_id;if(!T)throw new _e(ie.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");_=new on(T)}n._authCredentials=new LP(new Sw(g,_))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e,t,i){this.converter=t,this._query=i,this.type="query",this.firestore=e}withConverter(e){return new cd(this.firestore,e,this._query)}}class Ln{constructor(e,t,i){this.converter=t,this._key=i,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Zu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ln(this.firestore,e,this._key)}}class Zu extends cd{constructor(e,t,i){super(e,t,ed(i)),this._path=i,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ln(this.firestore,null,new Ee(e))}withConverter(e){return new Zu(this.firestore,e,this._path)}}function Ns(n,e,...t){if(n=ht(n),arguments.length===1&&(e=Iw.newId()),C6("doc","path",e),n instanceof t_){const i=_t.fromString(e,...t);return G1(i),new Ln(n,null,new Ee(i))}{if(!(n instanceof Ln||n instanceof Zu))throw new _e(ie.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=n._path.child(_t.fromString(e,...t));return G1(i),new Ln(n.firestore,n instanceof Zu?n.converter:null,new Ee(i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y1="AsyncQueue";class Q1{constructor(e=Promise.resolve()){this.Vu=[],this.mu=!1,this.fu=[],this.gu=null,this.pu=!1,this.yu=!1,this.wu=[],this.a_=new yS(this,"async_queue_retry"),this.Su=()=>{const i=$p();i&&fe(Y1,"Visibility state changed to "+i.visibilityState),this.a_.t_()},this.bu=e;const t=$p();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.Su)}get isShuttingDown(){return this.mu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Du(),this.vu(e)}enterRestrictedMode(e){if(!this.mu){this.mu=!0,this.yu=e||!1;const t=$p();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.Su)}}enqueue(e){if(this.Du(),this.mu)return new Promise(()=>{});const t=new Ea;return this.vu(()=>this.mu&&this.yu?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Vu.push(e),this.Cu()))}async Cu(){if(this.Vu.length!==0){try{await this.Vu[0](),this.Vu.shift(),this.a_.reset()}catch(e){if(!cl(e))throw e;fe(Y1,"Operation failed with retryable error: "+e)}this.Vu.length>0&&this.a_.Xo(()=>this.Cu())}}vu(e){const t=this.bu.then(()=>(this.pu=!0,e().catch(i=>{this.gu=i,this.pu=!1;const s=function(c){let d=c.message||"";return c.stack&&(d=c.stack.includes(c.message)?c.stack:c.message+`
`+c.stack),d}(i);throw Ii("INTERNAL UNHANDLED ERROR: ",s),i}).then(i=>(this.pu=!1,i))));return this.bu=t,t}enqueueAfterDelay(e,t,i){this.Du(),this.wu.indexOf(e)>-1&&(t=0);const s=Qy.createAndSchedule(this,e,t,i,l=>this.Fu(l));return this.fu.push(s),s}Du(){this.gu&&Se()}verifyOperationInProgress(){}async Mu(){let e;do e=this.bu,await e;while(e!==this.bu)}xu(e){for(const t of this.fu)if(t.timerId===e)return!0;return!1}Ou(e){return this.Mu().then(()=>{this.fu.sort((t,i)=>t.targetTimeMs-i.targetTimeMs);for(const t of this.fu)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.Mu()})}Nu(e){this.wu.push(e)}Fu(e){const t=this.fu.indexOf(e);this.fu.splice(t,1)}}function X1(n){return function(t,i){if(typeof t!="object"||t===null)return!1;const s=t;for(const l of i)if(l in s&&typeof s[l]=="function")return!0;return!1}(n,["next","error","complete"])}class Ju extends t_{constructor(e,t,i,s){super(e,t,i,s),this.type="firestore",this._queue=new Q1,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Q1(e),this._firestoreClient=void 0,await e}}}function O6(n,e){const t=typeof n=="object"?n:$h(),i=typeof n=="string"?n:wh,s=Da(t,"firestore").getImmediate({identifier:i});if(!s._initialized){const l=lA("firestore");l&&N6(s,...l)}return s}function n_(n){if(n._terminated)throw new _e(ie.FAILED_PRECONDITION,"The client has already been terminated.");return n._firestoreClient||D6(n),n._firestoreClient}function D6(n){var e,t,i;const s=n._freezeSettings(),l=function(d,m,g,_){return new eM(d,m,g,_.host,_.ssl,_.experimentalForceLongPolling,_.experimentalAutoDetectLongPolling,US(_.experimentalLongPollingOptions),_.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._componentsProvider||!((t=s.localCache)===null||t===void 0)&&t._offlineComponentProvider&&(!((i=s.localCache)===null||i===void 0)&&i._onlineComponentProvider)&&(n._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),n._firestoreClient=new w6(n._authCredentials,n._appCheckCredentials,n._queue,l,n._componentsProvider&&function(d){const m=d==null?void 0:d._online.build();return{_offline:d==null?void 0:d._offline.build(m),_online:m}}(n._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new tl(tn.fromBase64String(e))}catch(t){throw new _e(ie.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new tl(tn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fd{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new _e(ie.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new en(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r_{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new _e(ie.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new _e(ie.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Oe(this._lat,e._lat)||Oe(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(e){this._values=(e||[]).map(t=>t)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(i,s){if(i.length!==s.length)return!1;for(let l=0;l<i.length;++l)if(i[l]!==s[l])return!1;return!0}(this._values,e._values)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k6=/^__.*__$/;class zS{constructor(e,t,i){this.data=e,this.fieldMask=t,this.fieldTransforms=i}toMutation(e,t){return new Us(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function BS(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Se()}}class dd{constructor(e,t,i,s,l,c){this.settings=e,this.databaseId=t,this.serializer=i,this.ignoreUndefinedProperties=s,l===void 0&&this.Bu(),this.fieldTransforms=l||[],this.fieldMask=c||[]}get path(){return this.settings.path}get Lu(){return this.settings.Lu}ku(e){return new dd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}qu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:i,Qu:!1});return s.$u(e),s}Uu(e){var t;const i=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.ku({path:i,Qu:!1});return s.Bu(),s}Ku(e){return this.ku({path:void 0,Qu:!0})}Wu(e){return Ph(e,this.settings.methodName,this.settings.Gu||!1,this.path,this.settings.zu)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Bu(){if(this.path)for(let e=0;e<this.path.length;e++)this.$u(this.path.get(e))}$u(e){if(e.length===0)throw this.Wu("Document fields must not be empty");if(BS(this.Lu)&&k6.test(e))throw this.Wu('Document fields cannot begin and end with "__"')}}class P6{constructor(e,t,i){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=i||od(e)}ju(e,t,i,s=!1){return new dd({Lu:e,methodName:t,zu:i,path:en.emptyPath(),Qu:!1,Gu:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function M6(n){const e=n._freezeSettings(),t=od(n._databaseId);return new P6(n._databaseId,!!e.ignoreUndefinedProperties,t)}class md extends hd{_toFieldTransform(e){if(e.Lu!==2)throw e.Lu===1?e.Wu(`${this._methodName}() can only appear at the top level of your update data`):e.Wu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof md}}function L6(n,e,t){return new dd({Lu:3,zu:e.settings.zu,methodName:n._methodName,Qu:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class a_ extends hd{constructor(e,t){super(e),this.Hu=t}_toFieldTransform(e){const t=L6(this,e,!0),i=this.Hu.map(l=>hc(l,t)),s=new Zo(i);return new IM(e.path,s)}isEqual(e){return e instanceof a_&&wi(this.Hu,e.Hu)}}function V6(n,e,t,i){const s=n.ju(1,e,t);qS("Data must be an object, but it was:",s,i);const l=[],c=Pn.empty();Pa(i,(m,g)=>{const _=s_(e,m,t);g=ht(g);const T=s.Uu(_);if(g instanceof md)l.push(_);else{const w=hc(g,T);w!=null&&(l.push(_),c.set(_,w))}});const d=new or(l);return new zS(c,d,s.fieldTransforms)}function U6(n,e,t,i,s,l){const c=n.ju(1,e,t),d=[W1(e,i,t)],m=[s];if(l.length%2!=0)throw new _e(ie.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let w=0;w<l.length;w+=2)d.push(W1(e,l[w])),m.push(l[w+1]);const g=[],_=Pn.empty();for(let w=d.length-1;w>=0;--w)if(!B6(g,d[w])){const x=d[w];let D=m[w];D=ht(D);const H=c.Uu(x);if(D instanceof md)g.push(x);else{const L=hc(D,H);L!=null&&(g.push(x),_.set(x,L))}}const T=new or(g);return new zS(_,T,c.fieldTransforms)}function hc(n,e){if(FS(n=ht(n)))return qS("Unsupported field value:",e,n),j6(n,e);if(n instanceof hd)return function(i,s){if(!BS(s.Lu))throw s.Wu(`${i._methodName}() can only be used with update() and set()`);if(!s.path)throw s.Wu(`${i._methodName}() is not currently supported inside arrays`);const l=i._toFieldTransform(s);l&&s.fieldTransforms.push(l)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.Qu&&e.Lu!==4)throw e.Wu("Nested arrays are not supported");return function(i,s){const l=[];let c=0;for(const d of i){let m=hc(d,s.Ku(c));m==null&&(m={nullValue:"NULL_VALUE"}),l.push(m),c++}return{arrayValue:{values:l}}}(n,e)}return function(i,s){if((i=ht(i))===null)return{nullValue:"NULL_VALUE"};if(typeof i=="number")return wM(s.serializer,i);if(typeof i=="boolean")return{booleanValue:i};if(typeof i=="string")return{stringValue:i};if(i instanceof Date){const l=Vt.fromDate(i);return{timestampValue:Nh(s.serializer,l)}}if(i instanceof Vt){const l=new Vt(i.seconds,1e3*Math.floor(i.nanoseconds/1e3));return{timestampValue:Nh(s.serializer,l)}}if(i instanceof r_)return{geoPointValue:{latitude:i.latitude,longitude:i.longitude}};if(i instanceof tl)return{bytesValue:sS(s.serializer,i._byteString)};if(i instanceof Ln){const l=s.databaseId,c=i.firestore._databaseId;if(!c.isEqual(l))throw s.Wu(`Document reference is for database ${c.projectId}/${c.database} but should be for database ${l.projectId}/${l.database}`);return{referenceValue:zy(i.firestore._databaseId||s.databaseId,i._key.path)}}if(i instanceof i_)return function(c,d){return{mapValue:{fields:{[Mw]:{stringValue:Lw},[Sh]:{arrayValue:{values:c.toArray().map(g=>{if(typeof g!="number")throw d.Wu("VectorValues must only contain numeric values.");return Vy(d.serializer,g)})}}}}}}(i,s);throw s.Wu(`Unsupported field value: ${e_(i)}`)}(n,e)}function j6(n,e){const t={};return xw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Pa(n,(i,s)=>{const l=hc(s,e.qu(i));l!=null&&(t[i]=l)}),{mapValue:{fields:t}}}function FS(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Vt||n instanceof r_||n instanceof tl||n instanceof Ln||n instanceof hd||n instanceof i_)}function qS(n,e,t){if(!FS(t)||!function(s){return typeof s=="object"&&s!==null&&(Object.getPrototypeOf(s)===Object.prototype||Object.getPrototypeOf(s)===null)}(t)){const i=e_(t);throw i==="an object"?e.Wu(n+" a custom object"):e.Wu(n+" "+i)}}function W1(n,e,t){if((e=ht(e))instanceof fd)return e._internalPath;if(typeof e=="string")return s_(n,e);throw Ph("Field path arguments must be of type string or ",n,!1,void 0,t)}const z6=new RegExp("[~\\*/\\[\\]]");function s_(n,e,t){if(e.search(z6)>=0)throw Ph(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new fd(...e.split("."))._internalPath}catch{throw Ph(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Ph(n,e,t,i,s){const l=i&&!i.isEmpty(),c=s!==void 0;let d=`Function ${e}() called with invalid data`;t&&(d+=" (via `toFirestore()`)"),d+=". ";let m="";return(l||c)&&(m+=" (found",l&&(m+=` in field ${i}`),c&&(m+=` in document ${s}`),m+=")"),new _e(ie.INVALID_ARGUMENT,d+n+m)}function B6(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HS{constructor(e,t,i,s,l){this._firestore=e,this._userDataWriter=t,this._key=i,this._document=s,this._converter=l}get id(){return this._key.path.lastSegment()}get ref(){return new Ln(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new F6(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(GS("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class F6 extends HS{data(){return super.data()}}function GS(n,e){return typeof e=="string"?s_(n,e):e instanceof fd?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q6(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new _e(ie.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class H6{convertValue(e,t="none"){switch(Ca(e)){case 0:return null;case 1:return e.booleanValue;case 2:return wt(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Ia(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw Se()}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const i={};return Pa(e,(s,l)=>{i[s]=this.convertValue(l,t)}),i}convertVectorValue(e){var t,i,s;const l=(s=(i=(t=e.fields)===null||t===void 0?void 0:t[Sh].arrayValue)===null||i===void 0?void 0:i.values)===null||s===void 0?void 0:s.map(c=>wt(c.doubleValue));return new i_(l)}convertGeoPoint(e){return new r_(wt(e.latitude),wt(e.longitude))}convertArray(e,t){return(e.values||[]).map(i=>this.convertValue(i,t))}convertServerTimestamp(e,t){switch(t){case"previous":const i=Zh(e);return i==null?null:this.convertValue(i,t);case"estimate":return this.convertTimestamp(Yu(e));default:return null}}convertTimestamp(e){const t=Ra(e);return new Vt(t.seconds,t.nanos)}convertDocumentKey(e,t){const i=_t.fromString(e);Xe(hS(i));const s=new Qu(i.get(1),i.get(3)),l=new Ee(i.popFirst(5));return s.isEqual(t)||Ii(`Document ${l} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class $S extends HS{constructor(e,t,i,s,l,c){super(e,t,i,s,c),this._firestore=e,this._firestoreImpl=e,this.metadata=l}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ch(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const i=this._document.data.field(GS("DocumentSnapshot.get",e));if(i!==null)return this._userDataWriter.convertValue(i,t.serverTimestamps)}}}class ch extends $S{data(e={}){return super.data(e)}}class G6{constructor(e,t,i,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new Du(s.hasPendingWrites,s.fromCache),this.query=i}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(i=>{e.call(t,new ch(this._firestore,this._userDataWriter,i.key,i,new Du(this._snapshot.mutatedKeys.has(i.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new _e(ie.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(s,l){if(s._snapshot.oldDocs.isEmpty()){let c=0;return s._snapshot.docChanges.map(d=>{const m=new ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Du(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);return d.doc,{type:"added",doc:m,oldIndex:-1,newIndex:c++}})}{let c=s._snapshot.oldDocs;return s._snapshot.docChanges.filter(d=>l||d.type!==3).map(d=>{const m=new ch(s._firestore,s._userDataWriter,d.doc.key,d.doc,new Du(s._snapshot.mutatedKeys.has(d.doc.key),s._snapshot.fromCache),s.query.converter);let g=-1,_=-1;return d.type!==0&&(g=c.indexOf(d.doc.key),c=c.delete(d.doc.key)),d.type!==1&&(c=c.add(d.doc),_=c.indexOf(d.doc.key)),{type:$6(d.type),doc:m,oldIndex:g,newIndex:_}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function $6(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Se()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function o_(n){n=Ta(n,Ln);const e=Ta(n.firestore,Ju);return I6(n_(e),n._key).then(t=>YS(e,n,t))}class KS extends H6{constructor(e){super(),this.firestore=e}convertBytes(e){return new tl(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ln(this.firestore,null,t)}}function l_(n,e,t,...i){n=Ta(n,Ln);const s=Ta(n.firestore,Ju),l=M6(s);let c;return c=typeof(e=ht(e))=="string"||e instanceof fd?U6(l,"updateDoc",n._key,e,t,i):V6(l,"updateDoc",n._key,e),Y6(s,[c.toMutation(n._key,Ei.exists(!0))])}function K6(n,...e){var t,i,s;n=ht(n);let l={includeMetadataChanges:!1,source:"default"},c=0;typeof e[c]!="object"||X1(e[c])||(l=e[c],c++);const d={includeMetadataChanges:l.includeMetadataChanges,source:l.source};if(X1(e[c])){const T=e[c];e[c]=(t=T.next)===null||t===void 0?void 0:t.bind(T),e[c+1]=(i=T.error)===null||i===void 0?void 0:i.bind(T),e[c+2]=(s=T.complete)===null||s===void 0?void 0:s.bind(T)}let m,g,_;if(n instanceof Ln)g=Ta(n.firestore,Ju),_=ed(n._key.path),m={next:T=>{e[c]&&e[c](YS(g,n,T))},error:e[c+1],complete:e[c+2]};else{const T=Ta(n,cd);g=Ta(T.firestore,Ju),_=T._query;const w=new KS(g);m={next:x=>{e[c]&&e[c](new G6(g,w,T,x))},error:e[c+1],complete:e[c+2]},q6(n._query)}return function(w,x,D,H){const L=new LS(H),$=new IS(x,L,D);return w.asyncQueue.enqueueAndForget(async()=>SS(await $g(w),$)),()=>{L.su(),w.asyncQueue.enqueueAndForget(async()=>RS(await $g(w),$))}}(n_(g),_,d,m)}function Y6(n,e){return function(i,s){const l=new Ea;return i.asyncQueue.enqueueAndForget(async()=>p6(await R6(i),s,l)),l.promise}(n_(n),e)}function YS(n,e,t){const i=t.docs.get(e._key),s=new KS(n);return new $S(n,s,e._key,i,new Du(t.hasPendingWrites,t.fromCache),e.converter)}function Q6(...n){return new a_("arrayUnion",n)}(function(e,t=!0){(function(s){ll=s})(Ms),ur(new Zn("firestore",(i,{instanceIdentifier:s,options:l})=>{const c=i.getProvider("app").getImmediate(),d=new Ju(new VP(i.getProvider("auth-internal")),new zP(c,i.getProvider("app-check-internal")),function(g,_){if(!Object.prototype.hasOwnProperty.apply(g.options,["projectId"]))throw new _e(ie.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Qu(g.options.projectId,_)}(c,s),c);return l=Object.assign({useFetchStreams:t},l),d._setSettings(l),d},"PUBLIC").setMultipleInstances(!0)),bn(n1,r1,e),bn(n1,r1,"esm2017")})();const QS="@firebase/installations",u_="0.6.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS=1e4,WS=`w:${u_}`,ZS="FIS_v2",X6="https://firebaseinstallations.googleapis.com/v1",W6=60*60*1e3,Z6="installations",J6="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const e9={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},Os=new Ps(Z6,J6,e9);function JS(n){return n instanceof Jn&&n.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eR({projectId:n}){return`${X6}/projects/${n}/installations`}function tR(n){return{token:n.token,requestStatus:2,expiresIn:n9(n.expiresIn),creationTime:Date.now()}}async function nR(n,e){const i=(await e.json()).error;return Os.create("request-failed",{requestName:n,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function rR({apiKey:n}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":n})}function t9(n,{refreshToken:e}){const t=rR(n);return t.append("Authorization",r9(e)),t}async function iR(n){const e=await n();return e.status>=500&&e.status<600?n():e}function n9(n){return Number(n.replace("s","000"))}function r9(n){return`${ZS} ${n}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function i9({appConfig:n,heartbeatServiceProvider:e},{fid:t}){const i=eR(n),s=rR(n),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const c={fid:t,authVersion:ZS,appId:n.appId,sdkVersion:WS},d={method:"POST",headers:s,body:JSON.stringify(c)},m=await iR(()=>fetch(i,d));if(m.ok){const g=await m.json();return{fid:g.fid||t,registrationStatus:2,refreshToken:g.refreshToken,authToken:tR(g.authToken)}}else throw await nR("Create Installation",m)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aR(n){return new Promise(e=>{setTimeout(e,n)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a9(n){return btoa(String.fromCharCode(...n)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s9=/^[cdef][\w-]{21}$/,Kg="";function o9(){try{const n=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(n),n[0]=112+n[0]%16;const t=l9(n);return s9.test(t)?t:Kg}catch{return Kg}}function l9(n){return a9(n).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(n){return`${n.appName}!${n.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sR=new Map;function oR(n,e){const t=pd(n);lR(t,e),u9(t,e)}function lR(n,e){const t=sR.get(n);if(t)for(const i of t)i(e)}function u9(n,e){const t=c9();t&&t.postMessage({key:n,fid:e}),f9()}let Ts=null;function c9(){return!Ts&&"BroadcastChannel"in self&&(Ts=new BroadcastChannel("[Firebase] FID Change"),Ts.onmessage=n=>{lR(n.data.key,n.data.fid)}),Ts}function f9(){sR.size===0&&Ts&&(Ts.close(),Ts=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const h9="firebase-installations-database",d9=1,Ds="firebase-installations-store";let Yp=null;function c_(){return Yp||(Yp=yA(h9,d9,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ds)}}})),Yp}async function Mh(n,e){const t=pd(n),s=(await c_()).transaction(Ds,"readwrite"),l=s.objectStore(Ds),c=await l.get(t);return await l.put(e,t),await s.done,(!c||c.fid!==e.fid)&&oR(n,e.fid),e}async function uR(n){const e=pd(n),i=(await c_()).transaction(Ds,"readwrite");await i.objectStore(Ds).delete(e),await i.done}async function gd(n,e){const t=pd(n),s=(await c_()).transaction(Ds,"readwrite"),l=s.objectStore(Ds),c=await l.get(t),d=e(c);return d===void 0?await l.delete(t):await l.put(d,t),await s.done,d&&(!c||c.fid!==d.fid)&&oR(n,d.fid),d}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function f_(n){let e;const t=await gd(n.appConfig,i=>{const s=m9(i),l=p9(n,s);return e=l.registrationPromise,l.installationEntry});return t.fid===Kg?{installationEntry:await e}:{installationEntry:t,registrationPromise:e}}function m9(n){const e=n||{fid:o9(),registrationStatus:0};return cR(e)}function p9(n,e){if(e.registrationStatus===0){if(!navigator.onLine){const s=Promise.reject(Os.create("app-offline"));return{installationEntry:e,registrationPromise:s}}const t={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},i=g9(n,t);return{installationEntry:t,registrationPromise:i}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:y9(n)}:{installationEntry:e}}async function g9(n,e){try{const t=await i9(n,e);return Mh(n.appConfig,t)}catch(t){throw JS(t)&&t.customData.serverCode===409?await uR(n.appConfig):await Mh(n.appConfig,{fid:e.fid,registrationStatus:0}),t}}async function y9(n){let e=await Z1(n.appConfig);for(;e.registrationStatus===1;)await aR(100),e=await Z1(n.appConfig);if(e.registrationStatus===0){const{installationEntry:t,registrationPromise:i}=await f_(n);return i||t}return e}function Z1(n){return gd(n,e=>{if(!e)throw Os.create("installation-not-found");return cR(e)})}function cR(n){return _9(n)?{fid:n.fid,registrationStatus:0}:n}function _9(n){return n.registrationStatus===1&&n.registrationTime+XS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function v9({appConfig:n,heartbeatServiceProvider:e},t){const i=E9(n,t),s=t9(n,t),l=e.getImmediate({optional:!0});if(l){const g=await l.getHeartbeatsHeader();g&&s.append("x-firebase-client",g)}const c={installation:{sdkVersion:WS,appId:n.appId}},d={method:"POST",headers:s,body:JSON.stringify(c)},m=await iR(()=>fetch(i,d));if(m.ok){const g=await m.json();return tR(g)}else throw await nR("Generate Auth Token",m)}function E9(n,{fid:e}){return`${eR(n)}/${e}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function h_(n,e=!1){let t;const i=await gd(n.appConfig,l=>{if(!fR(l))throw Os.create("not-registered");const c=l.authToken;if(!e&&A9(c))return l;if(c.requestStatus===1)return t=T9(n,e),l;{if(!navigator.onLine)throw Os.create("app-offline");const d=S9(l);return t=b9(n,d),d}});return t?await t:i.authToken}async function T9(n,e){let t=await J1(n.appConfig);for(;t.authToken.requestStatus===1;)await aR(100),t=await J1(n.appConfig);const i=t.authToken;return i.requestStatus===0?h_(n,e):i}function J1(n){return gd(n,e=>{if(!fR(e))throw Os.create("not-registered");const t=e.authToken;return R9(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function b9(n,e){try{const t=await v9(n,e),i=Object.assign(Object.assign({},e),{authToken:t});return await Mh(n.appConfig,i),t}catch(t){if(JS(t)&&(t.customData.serverCode===401||t.customData.serverCode===404))await uR(n.appConfig);else{const i=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await Mh(n.appConfig,i)}throw t}}function fR(n){return n!==void 0&&n.registrationStatus===2}function A9(n){return n.requestStatus===2&&!w9(n)}function w9(n){const e=Date.now();return e<n.creationTime||n.creationTime+n.expiresIn<e+W6}function S9(n){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},n),{authToken:e})}function R9(n){return n.requestStatus===1&&n.requestTime+XS<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I9(n){const e=n,{installationEntry:t,registrationPromise:i}=await f_(e);return i?i.catch(console.error):h_(e).catch(console.error),t.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C9(n,e=!1){const t=n;return await x9(t),(await h_(t,e)).token}async function x9(n){const{registrationPromise:e}=await f_(n);e&&await e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N9(n){if(!n||!n.options)throw Qp("App Configuration");if(!n.name)throw Qp("App Name");const e=["projectId","apiKey","appId"];for(const t of e)if(!n.options[t])throw Qp(t);return{appName:n.name,projectId:n.options.projectId,apiKey:n.options.apiKey,appId:n.options.appId}}function Qp(n){return Os.create("missing-app-config-values",{valueName:n})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hR="installations",O9="installations-internal",D9=n=>{const e=n.getProvider("app").getImmediate(),t=N9(e),i=Da(e,"heartbeat");return{app:e,appConfig:t,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},k9=n=>{const e=n.getProvider("app").getImmediate(),t=Da(e,hR).getImmediate();return{getId:()=>I9(t),getToken:s=>C9(t,s)}};function P9(){ur(new Zn(hR,D9,"PUBLIC")),ur(new Zn(O9,k9,"PRIVATE"))}P9();bn(QS,u_);bn(QS,u_,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lh="analytics",M9="firebase_id",L9="origin",V9=60*1e3,U9="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",d_="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const An=new Gh("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const j9={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-initialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},Vn=new Ps("analytics","Analytics",j9);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z9(n){if(!n.startsWith(d_)){const e=Vn.create("invalid-gtag-resource",{gtagURL:n});return An.warn(e.message),""}return n}function dR(n){return Promise.all(n.map(e=>e.catch(t=>t)))}function B9(n,e){let t;return window.trustedTypes&&(t=window.trustedTypes.createPolicy(n,e)),t}function F9(n,e){const t=B9("firebase-js-sdk-policy",{createScriptURL:z9}),i=document.createElement("script"),s=`${d_}?l=${n}&id=${e}`;i.src=t?t==null?void 0:t.createScriptURL(s):s,i.async=!0,document.head.appendChild(i)}function q9(n){let e=[];return Array.isArray(window[n])?e=window[n]:window[n]=e,e}async function H9(n,e,t,i,s,l){const c=i[s];try{if(c)await e[c];else{const m=(await dR(t)).find(g=>g.measurementId===s);m&&await e[m.appId]}}catch(d){An.error(d)}n("config",s,l)}async function G9(n,e,t,i,s){try{let l=[];if(s&&s.send_to){let c=s.send_to;Array.isArray(c)||(c=[c]);const d=await dR(t);for(const m of c){const g=d.find(T=>T.measurementId===m),_=g&&e[g.appId];if(_)l.push(_);else{l=[];break}}}l.length===0&&(l=Object.values(e)),await Promise.all(l),n("event",i,s||{})}catch(l){An.error(l)}}function $9(n,e,t,i){async function s(l,...c){try{if(l==="event"){const[d,m]=c;await G9(n,e,t,d,m)}else if(l==="config"){const[d,m]=c;await H9(n,e,t,i,d,m)}else if(l==="consent"){const[d,m]=c;n("consent",d,m)}else if(l==="get"){const[d,m,g]=c;n("get",d,m,g)}else if(l==="set"){const[d]=c;n("set",d)}else n(l,...c)}catch(d){An.error(d)}}return s}function K9(n,e,t,i,s){let l=function(...c){window[i].push(arguments)};return window[s]&&typeof window[s]=="function"&&(l=window[s]),window[s]=$9(l,n,e,t),{gtagCore:l,wrappedGtag:window[s]}}function Y9(n){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(d_)&&t.src.includes(n))return t;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q9=30,X9=1e3;class W9{constructor(e={},t=X9){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const mR=new W9;function Z9(n){return new Headers({Accept:"application/json","x-goog-api-key":n})}async function J9(n){var e;const{appId:t,apiKey:i}=n,s={method:"GET",headers:Z9(i)},l=U9.replace("{app-id}",t),c=await fetch(l,s);if(c.status!==200&&c.status!==304){let d="";try{const m=await c.json();!((e=m.error)===null||e===void 0)&&e.message&&(d=m.error.message)}catch{}throw Vn.create("config-fetch-failed",{httpStatus:c.status,responseMessage:d})}return c.json()}async function eV(n,e=mR,t){const{appId:i,apiKey:s,measurementId:l}=n.options;if(!i)throw Vn.create("no-app-id");if(!s){if(l)return{measurementId:l,appId:i};throw Vn.create("no-api-key")}const c=e.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},d=new rV;return setTimeout(async()=>{d.abort()},V9),pR({appId:i,apiKey:s,measurementId:l},c,d,e)}async function pR(n,{throttleEndTimeMillis:e,backoffCount:t},i,s=mR){var l;const{appId:c,measurementId:d}=n;try{await tV(i,e)}catch(m){if(d)return An.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${m==null?void 0:m.message}]`),{appId:c,measurementId:d};throw m}try{const m=await J9(n);return s.deleteThrottleMetadata(c),m}catch(m){const g=m;if(!nV(g)){if(s.deleteThrottleMetadata(c),d)return An.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${d} provided in the "measurementId" field in the local Firebase config. [${g==null?void 0:g.message}]`),{appId:c,measurementId:d};throw m}const _=Number((l=g==null?void 0:g.customData)===null||l===void 0?void 0:l.httpStatus)===503?bT(t,s.intervalMillis,Q9):bT(t,s.intervalMillis),T={throttleEndTimeMillis:Date.now()+_,backoffCount:t+1};return s.setThrottleMetadata(c,T),An.debug(`Calling attemptFetch again in ${_} millis`),pR(n,T,i,s)}}function tV(n,e){return new Promise((t,i)=>{const s=Math.max(e-Date.now(),0),l=setTimeout(t,s);n.addEventListener(()=>{clearTimeout(l),i(Vn.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function nV(n){if(!(n instanceof Jn)||!n.customData)return!1;const e=Number(n.customData.httpStatus);return e===429||e===500||e===503||e===504}class rV{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function iV(n,e,t,i,s){if(s&&s.global){n("event",t,i);return}else{const l=await e,c=Object.assign(Object.assign({},i),{send_to:l});n("event",t,c)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aV(){if(dA())try{await mA()}catch(n){return An.warn(Vn.create("indexeddb-unavailable",{errorInfo:n==null?void 0:n.toString()}).message),!1}else return An.warn(Vn.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sV(n,e,t,i,s,l,c){var d;const m=eV(n);m.then(x=>{t[x.measurementId]=x.appId,n.options.measurementId&&x.measurementId!==n.options.measurementId&&An.warn(`The measurement ID in the local Firebase config (${n.options.measurementId}) does not match the measurement ID fetched from the server (${x.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(x=>An.error(x)),e.push(m);const g=aV().then(x=>{if(x)return i.getId()}),[_,T]=await Promise.all([m,g]);Y9(l)||F9(l,_.measurementId),s("js",new Date);const w=(d=c==null?void 0:c.config)!==null&&d!==void 0?d:{};return w[L9]="firebase",w.update=!0,T!=null&&(w[M9]=T),s("config",_.measurementId,w),_.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oV{constructor(e){this.app=e}_delete(){return delete Bu[this.app.options.appId],Promise.resolve()}}let Bu={},eb=[];const tb={};let Xp="dataLayer",lV="gtag",nb,gR,rb=!1;function uV(){const n=[];if(hA()&&n.push("This is a browser extension environment."),j4()||n.push("Cookies are not available."),n.length>0){const e=n.map((i,s)=>`(${s+1}) ${i}`).join(" "),t=Vn.create("invalid-analytics-context",{errorInfo:e});An.warn(t.message)}}function cV(n,e,t){uV();const i=n.options.appId;if(!i)throw Vn.create("no-app-id");if(!n.options.apiKey)if(n.options.measurementId)An.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${n.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw Vn.create("no-api-key");if(Bu[i]!=null)throw Vn.create("already-exists",{id:i});if(!rb){q9(Xp);const{wrappedGtag:l,gtagCore:c}=K9(Bu,eb,tb,Xp,lV);gR=l,nb=c,rb=!0}return Bu[i]=sV(n,eb,tb,e,nb,Xp,t),new oV(n)}function fV(n=$h()){n=ht(n);const e=Da(n,Lh);return e.isInitialized()?e.getImmediate():hV(n)}function hV(n,e={}){const t=Da(n,Lh);if(t.isInitialized()){const s=t.getImmediate();if(wi(e,t.getOptions()))return s;throw Vn.create("already-initialized")}return t.initialize({options:e})}function dV(n,e,t,i){n=ht(n),iV(gR,Bu[n.app.options.appId],e,t,i).catch(s=>An.error(s))}const ib="@firebase/analytics",ab="0.10.12";function mV(){ur(new Zn(Lh,(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("installations-internal").getImmediate();return cV(i,s,t)},"PUBLIC")),ur(new Zn("analytics-internal",n,"PRIVATE")),bn(ib,ab),bn(ib,ab,"esm2017");function n(e){try{const t=e.getProvider(Lh).getImmediate();return{logEvent:(i,s,l)=>dV(t,i,s,l)}}catch(t){throw Vn.create("interop-component-reg-failed",{reason:t})}}}mV();const pV={apiKey:"AIzaSyDusomgyCXGUxoLjgSSdsvHzQlIxW44cQ4",authDomain:"subau-2012f.firebaseapp.com",projectId:"subau-2012f",storageBucket:"subau-2012f.firebasestorage.app",messagingSenderId:"16152055759",appId:"1:16152055759:web:bc2ec5378f8cd888014cba",measurementId:"G-Y4JGW89437"},yd=_A(pV);fV(yd);const Pr=E3(yd),ks=O6(yd);_w(yd);const gV=()=>{const[n,e]=F.useState(null),[t,i]=F.useState(!0),[s,l]=F.useState(0);return F.useEffect(()=>Pr.onAuthStateChanged(d=>{e(d),i(!1)}),[]),F.useEffect(()=>{if(n){const c=K6(Ns(ks,"users",n.uid),d=>{d.exists()&&d.data().cart?l(d.data().cart.length):l(0)});return()=>c()}else l(0)},[n]),t?null:A.jsx("header",{className:Fe.header,children:A.jsx("nav",{className:Fe.navContainer,children:A.jsxs("ul",{className:Fe.navList,children:[A.jsx("li",{className:Fe.navLogoItem,children:A.jsx(pi,{to:"/",end:!0,className:({isActive:c})=>`${Fe.navLogo} ${c?Fe.active:""}`,children:"SubaU"})}),A.jsxs("div",{className:Fe.navCenter,children:[A.jsx("li",{className:Fe.navItem,children:A.jsx(pi,{to:"/equipment",className:({isActive:c})=>`${Fe.navLink} ${c?Fe.active:""}`,children:"Обладнання"})}),A.jsx("li",{className:Fe.navItem,children:A.jsx(pi,{to:"/payment",className:({isActive:c})=>`${Fe.navLink} ${c?Fe.active:""}`,children:"Оплата"})}),A.jsx("li",{className:Fe.navItem,children:A.jsx(pi,{to:"/contact",className:({isActive:c})=>`${Fe.navLink} ${c?Fe.active:""}`,children:"Контакти"})})]}),A.jsxs("div",{className:Fe.authCartContainer,children:[n?A.jsx("div",{className:Fe.authButtons,children:A.jsxs(pi,{to:"/profile",className:Fe.authLink,children:[A.jsx(un,{icon:rA,className:Fe.authIcon}),A.jsx("span",{className:Fe.authText,children:"Профіль"})]})}):A.jsxs("div",{className:Fe.authButtons,children:[A.jsxs(pi,{to:"/login",className:Fe.authLink,children:[A.jsx(un,{icon:HN,className:Fe.authIcon}),A.jsx("span",{className:Fe.authText,children:"Увійти"})]}),A.jsxs(pi,{to:"/register",className:Fe.authLink,children:[A.jsx(un,{icon:r4,className:Fe.authIcon}),A.jsx("span",{className:Fe.authText,children:"Реєстрація"})]})]}),A.jsx("li",{className:Fe.cartItem,children:A.jsxs(pi,{to:"/rentals",className:({isActive:c})=>`${Fe.rentalLink} ${c?Fe.active:""}`,children:[A.jsx(un,{icon:ZN,className:`${Fe.rentalIcon} ${s>0?Fe.activePulse:""}`}),s>0&&A.jsx("span",{className:Fe.cartCounter,children:s})]})})]})]})})})},yV="_footer_2h74k_1",_V="_footerContent_2h74k_15",vV="_footerLogo_2h74k_31",EV="_copyright_2h74k_81",Qf={footer:yV,footerContent:_V,footerLogo:vV,copyright:EV},TV=()=>A.jsx("footer",{className:Qf.footer,children:A.jsxs("div",{className:Qf.footerContent,children:[A.jsx("div",{className:Qf.footerLogo,children:"SUBAU"}),A.jsx("div",{className:Qf.copyright,children:"© 2025 SUBAU. Усі права захищені."})]})}),bV="_featureBlock_1q8ak_1",AV="_featureContainer_1q8ak_37",wV="_reverseBlock_1q8ak_57",SV="_textContent_1q8ak_65",RV="_imageContent_1q8ak_87",IV="_featureList_1q8ak_143",CV="_featureIcon_1q8ak_169",xV="_inView_1q8ak_183",la={featureBlock:bV,featureContainer:AV,reverseBlock:wV,textContent:SV,imageContent:RV,featureList:IV,featureIcon:CV,inView:xV},NV=(n,e)=>{const t=F.useRef(null);return F.useEffect(()=>{const i=new IntersectionObserver(s=>{s.forEach(l=>{l.isIntersecting&&(n(l.target),i.unobserve(l.target))})},e);return t.current&&i.observe(t.current),()=>{t.current&&i.unobserve(t.current)}},[n,e]),t},Wp=({title:n,description:e,items:t,image:i,reverse:s=!1})=>{const l=NV(c=>{c.classList.add(la.inView)},{threshold:.1});return A.jsx("section",{ref:l,className:`${la.featureBlock} ${s?la.reverseBlock:""}`,children:A.jsxs("div",{className:la.featureContainer,children:[A.jsxs("div",{className:la.textContent,children:[A.jsx("h2",{children:n}),A.jsx("p",{children:e}),A.jsx("ul",{className:la.featureList,children:t.map((c,d)=>A.jsxs("li",{children:[A.jsx(un,{icon:i4,className:la.featureIcon}),c]},d))})]}),A.jsx("div",{className:la.imageContent,children:A.jsx("img",{src:i,alt:n,loading:"lazy"})})]})})};var Yg=new Map,Xf=new WeakMap,sb=0,OV=void 0;function DV(n){return n?(Xf.has(n)||(sb+=1,Xf.set(n,sb.toString())),Xf.get(n)):"0"}function kV(n){return Object.keys(n).sort().filter(e=>n[e]!==void 0).map(e=>`${e}_${e==="root"?DV(n.root):n[e]}`).toString()}function PV(n){const e=kV(n);let t=Yg.get(e);if(!t){const i=new Map;let s;const l=new IntersectionObserver(c=>{c.forEach(d=>{var m;const g=d.isIntersecting&&s.some(_=>d.intersectionRatio>=_);n.trackVisibility&&typeof d.isVisible>"u"&&(d.isVisible=g),(m=i.get(d.target))==null||m.forEach(_=>{_(g,d)})})},n);s=l.thresholds||(Array.isArray(n.threshold)?n.threshold:[n.threshold||0]),t={id:e,observer:l,elements:i},Yg.set(e,t)}return t}function MV(n,e,t={},i=OV){if(typeof window.IntersectionObserver>"u"&&i!==void 0){const m=n.getBoundingClientRect();return e(i,{isIntersecting:i,target:n,intersectionRatio:typeof t.threshold=="number"?t.threshold:0,time:0,boundingClientRect:m,intersectionRect:m,rootBounds:m}),()=>{}}const{id:s,observer:l,elements:c}=PV(t),d=c.get(n)||[];return c.has(n)||c.set(n,d),d.push(e),l.observe(n),function(){d.splice(d.indexOf(e),1),d.length===0&&(c.delete(n),l.unobserve(n)),c.size===0&&(l.disconnect(),Yg.delete(s))}}function LV({threshold:n,delay:e,trackVisibility:t,rootMargin:i,root:s,triggerOnce:l,skip:c,initialInView:d,fallbackInView:m,onChange:g}={}){var _;const[T,w]=F.useState(null),x=F.useRef(g),[D,H]=F.useState({inView:!!d,entry:void 0});x.current=g,F.useEffect(()=>{if(c||!T)return;let Q;return Q=MV(T,(re,ae)=>{H({inView:re,entry:ae}),x.current&&x.current(re,ae),ae.isIntersecting&&l&&Q&&(Q(),Q=void 0)},{root:s,rootMargin:i,threshold:n,trackVisibility:t,delay:e},m),()=>{Q&&Q()}},[Array.isArray(n)?n.toString():n,T,s,i,l,c,t,m,e]);const L=(_=D.entry)==null?void 0:_.target,$=F.useRef(void 0);!T&&L&&!l&&!c&&$.current!==L&&($.current=L,H({inView:!!d,entry:void 0}));const Z=[w,D.inView,D.entry];return Z.ref=Z[0],Z.inView=Z[1],Z.entry=Z[2],Z}const VV="_testimonial_bvw9u_1",UV="_testimonialContainer_bvw9u_35",jV="_testimonialItem_bvw9u_49",zV="_inView_bvw9u_125",Su={testimonial:VV,testimonialContainer:UV,testimonialItem:jV,inView:zV},BV=[{text:'"Найкраще обладнання, яке я коли-небудь орендовувала! Це було чудово!"',author:"Олена, Київ"},{text:'"Оренда пройшла дуже швидко, і я отримав все необхідне для моїх подорожей."',author:"Максим, Львів"}],FV=()=>{const{ref:n,inView:e}=LV({triggerOnce:!0,threshold:.3});return A.jsxs("section",{className:`${Su.testimonial} ${e?Su.inView:""}`,ref:n,children:[A.jsx("h2",{children:"Що говорять наші клієнти"}),A.jsx("div",{className:Su.testimonialContainer,children:BV.map((t,i)=>A.jsxs("div",{className:`${Su.testimonialItem} ${e?Su.inView:""}`,children:[A.jsx("p",{children:t.text}),A.jsx("h4",{children:t.author})]},i))})]})},qV="_home_1ydjk_1",HV="_hero_1ydjk_11",GV="_heroContent_1ydjk_59",$V="_heroText_1ydjk_93",KV="_heroButtons_1ydjk_125",YV="_primaryButton_1ydjk_141",QV="_secondaryButton_1ydjk_141",XV="_heroFeatures_1ydjk_207",WV="_featureItem_1ydjk_221",ZV="_featuresSection_1ydjk_255",JV="_aboutSection_1ydjk_263",eU="_aboutContainer_1ydjk_285",tU="_aboutContent_1ydjk_303",nU="_aboutTitle_1ydjk_311",rU="_aboutText_1ydjk_351",iU="_aboutImage_1ydjk_365",Zt={home:qV,hero:HV,heroContent:GV,heroText:$V,heroButtons:KV,primaryButton:YV,secondaryButton:QV,heroFeatures:XV,featureItem:WV,featuresSection:ZV,aboutSection:JV,aboutContainer:eU,aboutContent:tU,aboutTitle:nU,aboutText:rU,aboutImage:iU},aU=()=>A.jsxs("main",{className:Zt.home,children:[A.jsx("section",{className:Zt.hero,children:A.jsxs("div",{className:Zt.heroContent,children:[A.jsx("h1",{children:"Готові до незабутньої пригоди?"}),A.jsxs("p",{className:Zt.heroText,children:["Зареєструйтесь сьогодні та отримайте ",A.jsx("span",{children:"10% знижки"})," на першу оренду спорядження!"]}),A.jsxs("div",{className:Zt.heroButtons,children:[A.jsxs(ga,{to:"/equipment",className:Zt.primaryButton,children:[A.jsx("span",{children:"Обрати спорядження"}),A.jsx(un,{icon:n4})]}),A.jsxs("a",{href:"#about",className:Zt.secondaryButton,children:[A.jsx("span",{children:"Дізнатись більше"}),A.jsx(un,{icon:t4})]})]}),A.jsx("div",{className:Zt.heroFeatures,children:[{icon:KN,text:"Гарантія якості"},{icon:XN,text:"Швидка доставка"},{icon:GN,text:"Підтримка 24/7"}].map((n,e)=>A.jsxs("div",{className:Zt.featureItem,children:[A.jsx(un,{icon:n.icon}),A.jsx("span",{children:n.text})]},e))})]})}),A.jsx("section",{id:"about",className:Zt.aboutSection,children:A.jsxs("div",{className:Zt.aboutContainer,children:[A.jsxs("div",{className:Zt.aboutContent,children:[A.jsx("h2",{className:Zt.aboutTitle,children:"Про наш сервіс"}),A.jsx("p",{className:Zt.aboutText,children:"Ми надаємо якісне спортивне спорядження для вашого активного відпочинку. У нас ви знайдете все необхідне для кемпінгу, туризму, лижного спорту, велопрогулянок та інших активностей."}),A.jsx("p",{className:Zt.aboutText,children:"Гарантуємо доступні ціни, швидке оформлення оренди та зручні умови повернення спорядження."})]}),A.jsx("div",{className:Zt.aboutImage,children:A.jsx("img",{src:"https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",alt:"Outdoor Equipment",loading:"lazy"})})]})}),A.jsxs("section",{id:"features",className:Zt.featuresSection,children:[A.jsx(Wp,{title:"Професійне обладнання - ваша гарантія безпеки",description:"Кожен предмет інвентарю проходить 5-етапну перевірку перед видачею.",items:["Сертифіковані матеріали","Щорічні stress-тести","Повна документація якості"],image:"https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"}),A.jsx(Wp,{title:"Миттєва оренда - більше часу на пригоди",description:"Наша система онлайн-бронювання дозволяє отримати обладнання швидше.",items:["Бронювання за 3 кліки","Електронний договір","Миттєве підтвердження"],image:"https://images.squarespace-cdn.com/content/v1/60228b2d4248e2593057e4f5/1612878448762-KT4KAT3KPIKG07A4JXU7/iStock-954142740.jpg?format=2500w",reverse:!0}),A.jsx(Wp,{title:"Доступні ціни - більше можливостей",description:"Наші клієнти економлять до 40% вартості обладнання.",items:["Без прихованих платежів","Гнучкі тарифні плани","Знижки постійним клієнтам"],image:"https://campspace.com/media/medium/uploads/article/63/60/eb/6360ebaa86860304933255.jpeg"})]}),A.jsx(FV,{})]}),sU="_gridContainer_4scsd_1",oU="_item_4scsd_17",lU="_itemContent_4scsd_59",uU="_rentButton_4scsd_93",cU="_modalOverlay_4scsd_129",fU="_open_4scsd_161",hU="_modal_4scsd_129",dU="_modalImage_4scsd_197",mU="_featuresSection_4scsd_215",pU="_featuresTitle_4scsd_225",gU="_featuresList_4scsd_239",yU="_featureItem_4scsd_257",_U="_modalHeader_4scsd_317",vU="_itemDescription_4scsd_353",EU="_detailRow_4scsd_367",TU="_detailLabel_4scsd_379",bU="_detailValue_4scsd_389",AU="_inStock_4scsd_397",wU="_outOfStock_4scsd_407",SU="_rentalControls_4scsd_417",RU="_daysInput_4scsd_425",IU="_totalPrice_4scsd_443",CU="_confirmRental_4scsd_455",xU="_closeModal_4scsd_485",NU="_filterMenu_4scsd_579",OU="_filterHeader_4scsd_621",DU="_filterTitle_4scsd_639",kU="_filterClose_4scsd_653",PU="_filterGroup_4scsd_681",MU="_sizeFilter_4scsd_699",LU="_priceSlider_4scsd_779",VU="_filterReset_4scsd_829",UU="_noResults_4scsd_895",jU="_warningMessage_4scsd_957",we={gridContainer:sU,item:oU,itemContent:lU,rentButton:uU,modalOverlay:cU,open:fU,modal:hU,modalImage:dU,featuresSection:mU,featuresTitle:pU,featuresList:gU,featureItem:yU,modalHeader:_U,itemDescription:vU,detailRow:EU,detailLabel:TU,detailValue:bU,inStock:AU,outOfStock:wU,rentalControls:SU,daysInput:RU,totalPrice:IU,confirmRental:CU,closeModal:xU,filterMenu:NU,filterHeader:OU,filterTitle:DU,filterClose:kU,filterGroup:PU,sizeFilter:MU,priceSlider:LU,filterReset:VU,noResults:UU,warningMessage:jU},zU=({item:n,onRentClick:e})=>A.jsxs("div",{className:we.item,"data-price":n.price,"data-size":n.size,children:[A.jsx("img",{src:n.image,alt:n.name}),A.jsxs("div",{className:we.itemContent,children:[A.jsx("h3",{children:n.name}),A.jsxs("p",{children:["Ціна: ",n.price," грн/день"]}),A.jsx("button",{className:we.rentButton,onClick:()=>e(n),"data-name":n.name,"data-price":n.price,children:"Орендувати"})]})]});/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function BU(n,e,t,i){function s(l){return l instanceof t?l:new t(function(c){c(l)})}return new(t||(t=Promise))(function(l,c){function d(_){try{g(i.next(_))}catch(T){c(T)}}function m(_){try{g(i.throw(_))}catch(T){c(T)}}function g(_){_.done?l(_.value):s(_.value).then(d,m)}g((i=i.apply(n,[])).next())})}function FU(n,e){var t={label:0,sent:function(){if(l[0]&1)throw l[1];return l[1]},trys:[],ops:[]},i,s,l,c;return c={next:d(0),throw:d(1),return:d(2)},typeof Symbol=="function"&&(c[Symbol.iterator]=function(){return this}),c;function d(g){return function(_){return m([g,_])}}function m(g){if(i)throw new TypeError("Generator is already executing.");for(;t;)try{if(i=1,s&&(l=g[0]&2?s.return:g[0]?s.throw||((l=s.return)&&l.call(s),0):s.next)&&!(l=l.call(s,g[1])).done)return l;switch(s=0,l&&(g=[g[0]&2,l.value]),g[0]){case 0:case 1:l=g;break;case 4:return t.label++,{value:g[1],done:!1};case 5:t.label++,s=g[1],g=[0];continue;case 7:g=t.ops.pop(),t.trys.pop();continue;default:if(l=t.trys,!(l=l.length>0&&l[l.length-1])&&(g[0]===6||g[0]===2)){t=0;continue}if(g[0]===3&&(!l||g[1]>l[0]&&g[1]<l[3])){t.label=g[1];break}if(g[0]===6&&t.label<l[1]){t.label=l[1],l=g;break}if(l&&t.label<l[2]){t.label=l[2],t.ops.push(g);break}l[2]&&t.ops.pop(),t.trys.pop();continue}g=e.call(n,t)}catch(_){g=[6,_],s=0}finally{i=l=0}if(g[0]&5)throw g[1];return{value:g[0]?g[1]:void 0,done:!0}}}/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */var zo=function(){return zo=Object.assign||function(e){for(var t,i=1,s=arguments.length;i<s;i++){t=arguments[i];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},zo.apply(this,arguments)},yR=function(n){return{loading:n==null,value:n}},qU=function(){return function(n,e){switch(e.type){case"error":return zo(zo({},n),{error:e.error,loading:!1,value:void 0});case"reset":return yR(e.defaultValue);case"value":return zo(zo({},n),{error:void 0,loading:!1,value:e.value});default:return n}}},HU=function(n){var e=n?n():void 0,t=F.useReducer(qU(),yR(e)),i=t[0],s=t[1],l=F.useCallback(function(){var m=n?n():void 0;s({type:"reset",defaultValue:m})},[n]),c=F.useCallback(function(m){s({type:"error",error:m})},[]),d=F.useCallback(function(m){s({type:"value",value:m})},[]);return F.useMemo(function(){return{error:i.error,loading:i.loading,reset:l,setError:c,setValue:d,value:i.value}},[i.error,i.loading,l,c,d,i.value])},m_=function(n,e){var t=HU(function(){return n.currentUser}),i=t.error,s=t.loading,l=t.setError,c=t.setValue,d=t.value;return F.useEffect(function(){var m=uk(n,function(g){return BU(void 0,void 0,void 0,function(){var _;return FU(this,function(T){switch(T.label){case 0:return[3,4];case 1:return T.trys.push([1,3,,4]),[4,e.onUserChanged(g)];case 2:return T.sent(),[3,4];case 3:return _=T.sent(),l(_),[3,4];case 4:return c(g),[2]}})})},l);return function(){m()}},[n]),[d,s,i]};const GU=({isOpen:n,item:e,onClose:t})=>{const[i]=m_(Pr),[s,l]=F.useState(1),[c,d]=F.useState(0),[m]=F.useState(Math.floor(Math.random()*10)+1),[g,_]=F.useState(!1),T=al();F.useEffect(()=>{e&&(d(s*e.price),w())},[s,e,i]);const w=async()=>{if(i&&e)try{const H=await o_(Ns(ks,"users",i.uid));if(H.exists()&&H.data().cart){const L=H.data().cart.some($=>$.id===e.id);_(L)}else _(!1)}catch(H){console.error("Error checking cart:",H),_(!1)}else _(!1)},x=H=>{const L=Math.max(1,parseInt(H.target.value)||1);l(L)},D=async()=>{if(!i){alert("Будь ласка, увійдіть в систему, щоб додавати товари до кошика"),T("/login"),t();return}if(!e||m<=0||g){t();return}const H={id:e.id,name:e.name,image:e.image,days:s,price:c,startDate:new Date().toLocaleDateString(),endDate:new Date(Date.now()+s*24*60*60*1e3).toLocaleDateString()};try{await l_(Ns(ks,"users",i.uid),{cart:Q6(H)}),_(!0),t(),T("/rentals")}catch(L){console.error("Error adding to cart:",L),alert("Сталася помилка при додаванні товару до кошика")}};return!n||!e?null:A.jsx("div",{className:`${we.modalOverlay} ${n?we.open:""}`,children:A.jsxs("div",{className:we.modal,children:[A.jsx("button",{className:we.closeModal,onClick:t,children:"×"}),A.jsxs("div",{className:we.modalHeader,children:[A.jsx("img",{src:e.image,alt:e.name,className:we.modalImage}),A.jsxs("div",{className:we.modalHeaderText,children:[A.jsx("h2",{children:e.name}),A.jsx("p",{className:we.itemDescription,children:e.description||"Відмінний вибір для активного відпочинку"}),e.features&&e.features.length>0&&A.jsxs("div",{className:we.featuresSection,children:[A.jsx("h3",{className:we.featuresTitle,children:"Особливості:"}),A.jsx("ul",{className:we.featuresList,children:e.features.map((H,L)=>A.jsx("li",{className:we.featureItem,children:H},L))})]})]})]}),g&&A.jsx("div",{className:we.warningMessage,children:"Цей товар вже додано до вашого кошика!"}),A.jsxs("div",{className:we.modalDetails,children:[A.jsxs("div",{className:we.detailRow,children:[A.jsx("span",{className:we.detailLabel,children:"Ціна за день:"}),A.jsxs("span",{className:we.detailValue,children:[e.price," грн"]})]}),A.jsxs("div",{className:we.detailRow,children:[A.jsx("span",{className:we.detailLabel,children:"Розмір:"}),A.jsx("span",{className:we.detailValue,children:e.size==="small"?"Маленький":e.size==="medium"?"Середній":"Великий"})]}),A.jsxs("div",{className:we.detailRow,children:[A.jsx("span",{className:we.detailLabel,children:"Доступно:"}),A.jsx("span",{className:m>0?we.inStock:we.outOfStock,children:m>0?`${m} шт.`:"Немає в наявності"})]})]}),A.jsxs("div",{className:we.rentalControls,children:[A.jsx("label",{htmlFor:"rental-days",children:"Кількість днів:"}),A.jsx("input",{type:"number",id:"rental-days",value:s,min:"1",onChange:x,className:we.daysInput,disabled:g}),A.jsxs("div",{className:we.detailRow,children:[A.jsx("span",{className:we.detailLabel,children:"Загальна ціна:"}),A.jsxs("span",{className:we.totalPrice,children:[c," грн"]})]})]}),A.jsx("button",{onClick:D,className:we.confirmRental,disabled:m<=0||g,children:g?"Вже в кошику":m>0?"Додати в кошик":"Немає в наявності"})]})})},$U=[{id:1,name:"Велосипед",price:150,size:"medium",image:"https://listnride.s3.eu-central-1.amazonaws.com/uploads/ride_image/image_file/99493/thumb_lsp1.jpg",description:"Велосипед для їзди по місту з алюмінієвою рамою, 21 швидкість, амортизаційна вилка",features:["Дискові гальма","Підвіска: 100мм","Вага 14.5кг",'Розмір колес 29"'],category:"cycling"},{id:2,name:"Лижі",price:450,size:"medium",image:"https://www.skirentalsbluemountain.com/cdn/shop/files/Ski_Rental_Mountainside_Sports.jpg?v=1706271578",description:"Лижі для фрірайду з кріпленнями, ідеальні для сніжних трас",features:["Довжина: 170см","Ширина: 98мм","Кріплення Salomon Sth2","Вага 3.8кг"],category:"winter"},{id:3,name:"Каяк",price:600,size:"large",image:"https://orbitreki.com.ua/image/cache/catalog/%D0%9A%D0%B0%D1%8F%D0%BA/%D0%9A%D0%B0%D1%8F%D0%BA%20SeaFlo%20SF-1010%20yellow/SeaFlo%20SF-1010%20yellow%20(1)-550x550.jpg",description:"Стабільний каяк для початківців та досвідчених веслярів",features:["Довжина: 3.2м","Вантажопідйомність: 120кг","Вага: 22кг","3 герметичні відсіки"],category:"water"},{id:4,name:"Роликові Ковзани",price:150,size:"small",image:"https://cdn.shopify.com/s/files/1/0557/5239/2813/files/How_to_Hire_Rollerblades_and_Roller_Skates_in_London_Boots.jpg?v=1718144375",description:"Комфортні ролики для міської їзди з м'якими вставками та хорошими роликами",features:["Колеса 80мм 85A","Алюмінієва рама","Швидкісні підшипники ABEC-7"],category:"urban"},{id:5,name:"Скейтборд",price:100,size:"small",image:"https://media.istockphoto.com/id/172178479/photo/skateboard.jpg?s=612x612&w=0&k=20&c=P07bl1ZvmOS7N6ezRjkN_pJBl5TF3vkbYRf9tsUJS1c=",description:"Класичний  скейтборд",features:['Довжина: 22"','Ширина: 6"',"Колеса: 59мм","Підшипники ABEC-5"],category:"urban"},{id:6,name:"Набір для гольфу",price:800,size:"large",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrf60353Khi5cSe6bSywyMLmxIMsgbhrH7A&s",description:"Повний комплект ключок для гольфу у переносній сумці",features:["9 ключок","Сумка на колесах","Карбонові рукоятки","Технічний паспорт"],category:"golf"},{id:7,name:"Ковзани",price:300,size:"medium",image:"https://americanathleticshoe.com/cdn/shop/products/2_18e3f34b-7b0b-410c-b184-1b2563c87384_1200x1200.jpg?v=1620423515",description:"Ковзани для катання на льоді",features:["Легка композитна рама","Термоформування","Лезо з нержавіючої сталі"],category:"winter"},{id:8,name:"Футбольний м'яч",price:50,size:"medium",image:"https://media.istockphoto.com/id/610241662/photo/soccer-ball-isolated-on-the-white-background.jpg?s=612x612&w=0&k=20&c=f7EWJti8x_JFmDxA8CMJvi1ulMlPjTdDP69HBWy9Hb4=",description:"М'яч для футболу, розмір ...",features:["Синтетична шкіра","Бутилова камера","Вага: 450г","Круглість: ±0.2%"],category:"team"},{id:9,name:"Набір тенісних ракеток",price:350,size:"medium",image:"https://t4.ftcdn.net/jpg/04/29/15/09/360_F_429150981_1tFlQvD4mEFMKWvE2JSA3kICppfv0yUr.jpg",description:"Професійний комплект з 2 ракеток для гри в теніс",features:["Вага: 300г","Площа струн: 645см²","Карбонове волокно","Комплект м'чів"],category:"tennis"},{id:10,name:"Сноуборд",price:550,size:"large",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj77X4KuU2BgNaneeXHpN83JIlY4absVUl2g&s",description:"Сноуборд для фрірайдингу для досвідчених райдерів",features:["Довжина: 158см","Ширина: 25.5см","Гібридний прогин","Вага: 3.2кг"],category:"winter"}],KU=({filters:n})=>{const[e,t]=F.useState(null),[i,s]=F.useState(!1),l=$U.filter(m=>{const g=m.price<=n.price,_=n.size==="all"||m.size===n.size,T=n.category==="all"||m.category===n.category;return g&&_&&T}),c=m=>{t(m),s(!0)},d=()=>{s(!1),t(null)};return A.jsxs("div",{className:we.gridContainer,children:[l.length>0?l.map(m=>A.jsx(zU,{item:m,onRentClick:c},m.id)):A.jsxs("div",{className:we.noResults,children:[A.jsx("h3",{children:"Не знайдено спорядження за обраними фільтрами"}),A.jsx("p",{children:"Спробуйте змінити параметри пошуку"})]}),A.jsx(GU,{isOpen:i,item:e,onClose:d})]})},YU=({show:n,onClose:e,currentFilters:t,onApply:i})=>{const[s,l]=F.useState(t.price),[c,d]=F.useState(t.size),[m,g]=F.useState(t.category||"all"),_=()=>{i({price:s,size:c,category:m}),e()},T=()=>{l(1e3),d("all"),g("all"),i({price:1e3,size:"all",category:"all"})};return A.jsxs("div",{className:`${we.filterMenu} ${n?we.open:""}`,children:[A.jsxs("div",{className:we.filterHeader,children:[A.jsx("h3",{className:we.filterTitle,children:"Фільтри"}),A.jsx("button",{className:we.filterClose,onClick:e,children:"×"})]}),A.jsxs("div",{className:we.filterGroup,children:[A.jsxs("label",{htmlFor:"price-range",children:["Максимальна ціна: ",s," грн"]}),A.jsx("input",{type:"range",id:"price-range",min:"100",max:"1000",step:"50",value:s,onChange:w=>l(parseInt(w.target.value)),className:we.priceSlider})]}),A.jsxs("div",{className:we.filterGroup,children:[A.jsx("label",{htmlFor:"size-filter",children:"Розмір:"}),A.jsxs("select",{id:"size-filter",value:c,onChange:w=>d(w.target.value),className:we.sizeFilter,children:[A.jsx("option",{value:"all",children:"Всі розміри"}),A.jsx("option",{value:"small",children:"Маленький"}),A.jsx("option",{value:"medium",children:"Середній"}),A.jsx("option",{value:"large",children:"Великий"})]})]}),A.jsxs("div",{className:we.filterGroup,children:[A.jsx("label",{htmlFor:"category-filter",children:"Категорія:"}),A.jsxs("select",{id:"category-filter",value:m,onChange:w=>g(w.target.value),className:we.sizeFilter,children:[A.jsx("option",{value:"all",children:"Всі категорії"}),A.jsx("option",{value:"cycling",children:"Велосипеди"}),A.jsx("option",{value:"winter",children:"Зимовий спорт"}),A.jsx("option",{value:"water",children:"Водний спорт"}),A.jsx("option",{value:"urban",children:"Міський спорт"}),A.jsx("option",{value:"golf",children:"Гольф"}),A.jsx("option",{value:"team",children:"Командні види"}),A.jsx("option",{value:"tennis",children:"Теніс"}),A.jsx("option",{value:"fitness",children:"Фітнес"}),A.jsx("option",{value:"hiking",children:"Туризм"})]})]}),A.jsx("button",{className:we.filterReset,onClick:T,children:"Скинути фільтри"}),A.jsx("button",{className:we.confirmRental,onClick:_,children:"Застосувати фільтри"})]})},QU="_section_1lcdw_1",XU="_sectionTitle_1lcdw_17",WU="_filterToggle_1lcdw_59",Zp={section:QU,sectionTitle:XU,filterToggle:WU},ZU=()=>{const[n,e]=F.useState({price:1e3,size:"all",category:"all"}),[t,i]=F.useState(!1),s=()=>{i(!t)},l=c=>{e(c)};return A.jsxs("section",{id:"equipment",className:Zp.section,children:[A.jsx("h2",{className:Zp.sectionTitle,children:"Наше обладнання"}),A.jsx("button",{className:Zp.filterToggle,onClick:s,"aria-label":"Фільтри",children:A.jsx(un,{icon:FN})}),A.jsx(YU,{show:t,onClose:()=>i(!1),currentFilters:n,onApply:l}),A.jsx(KU,{filters:n})]})},JU="_section_1g1bk_1",e5="_sectionTitle_1g1bk_19",t5="_noRentals_1g1bk_35",n5="_pageLayout_1g1bk_49",r5="_rentalList_1g1bk_61",i5="_rentalItem_1g1bk_71",a5="_itemImage_1g1bk_93",s5="_itemDetails_1g1bk_121",o5="_itemTitle_1g1bk_129",l5="_itemSeller_1g1bk_149",u5="_priceInfo_1g1bk_161",c5="_currentPrice_1g1bk_173",f5="_rentalPeriod_1g1bk_187",h5="_quantityControl_1g1bk_203",d5="_itemActions_1g1bk_213",m5="_removeBtn_1g1bk_227",p5="_orderSummary_1g1bk_293",g5="_summaryTitle_1g1bk_315",y5="_summaryItems_1g1bk_335",_5="_summaryItem_1g1bk_335",v5="_summaryItemName_1g1bk_357",E5="_summaryItemPrice_1g1bk_365",T5="_summaryTotal_1g1bk_373",b5="_totalRow_1g1bk_387",A5="_checkoutButton_1g1bk_403",w5="_loading_1g1bk_435",S5="_authLink_1g1bk_477",Ke={section:JU,sectionTitle:e5,noRentals:t5,pageLayout:n5,rentalList:r5,rentalItem:i5,itemImage:a5,itemDetails:s5,itemTitle:o5,itemSeller:l5,priceInfo:u5,currentPrice:c5,rentalPeriod:f5,quantityControl:h5,itemActions:d5,removeBtn:m5,orderSummary:p5,summaryTitle:g5,summaryItems:y5,summaryItem:_5,summaryItemName:v5,summaryItemPrice:E5,summaryTotal:T5,totalRow:b5,checkoutButton:A5,loading:w5,authLink:S5},R5=()=>{const[n]=m_(Pr),[e,t]=F.useState([]),[i,s]=F.useState(!0);F.useEffect(()=>{(async()=>{if(n){const m=await o_(Ns(ks,"users",n.uid));m.exists()&&m.data().cart&&t(m.data().cart),s(!1)}})()},[n]);const l=async d=>{if(!n)return;const m=[...e];m.splice(d,1);try{await l_(Ns(ks,"users",n.uid),{cart:m}),t(m)}catch(g){console.error("Error updating cart:",g)}},c=e.reduce((d,m)=>d+m.price,0);return n?i?A.jsx("div",{className:Ke.loading,children:"Завантаження кошика..."}):A.jsxs("section",{id:"rentals",className:Ke.section,children:[A.jsx("h2",{className:Ke.sectionTitle,children:"Ваші орендовані предмети"}),e.length===0?A.jsx("p",{className:Ke.noRentals,children:"У вас немає активних оренд."}):A.jsxs("div",{className:Ke.pageLayout,children:[A.jsx("div",{className:Ke.rentalList,children:e.map((d,m)=>A.jsxs("div",{className:Ke.rentalItem,children:[A.jsx("div",{className:Ke.itemImage,children:A.jsx("img",{src:d.image,alt:d.name})}),A.jsxs("div",{className:Ke.itemDetails,children:[A.jsx("h3",{className:Ke.itemTitle,children:d.name}),A.jsx("p",{className:Ke.itemSeller,children:"SubaU"}),A.jsx("div",{className:Ke.priceInfo,children:A.jsxs("span",{className:Ke.currentPrice,children:[d.price," грн"]})}),A.jsxs("div",{className:Ke.rentalPeriod,children:[A.jsx("span",{children:"Період оренди:"}),A.jsxs("span",{children:[d.startDate," - ",d.endDate]})]}),A.jsx("div",{className:Ke.quantityControl,children:A.jsxs("span",{children:["Кількість днів: ",d.days]})})]}),A.jsx("div",{className:Ke.itemActions,children:A.jsx("button",{onClick:()=>l(m),className:Ke.removeBtn,children:"Видалити"})})]},m))}),A.jsxs("div",{className:Ke.orderSummary,children:[A.jsx("h3",{className:Ke.summaryTitle,children:"До оплати"}),A.jsx("div",{className:Ke.summaryItems,children:e.map((d,m)=>A.jsxs("div",{className:Ke.summaryItem,children:[A.jsx("span",{className:Ke.summaryItemName,children:d.name}),A.jsxs("span",{className:Ke.summaryItemPrice,children:[d.price," грн"]})]},m))}),A.jsx("div",{className:Ke.summaryTotal,children:A.jsxs("div",{className:Ke.totalRow,children:[A.jsx("span",{children:"Сума:"}),A.jsxs("span",{children:[c," грн"]})]})}),A.jsx(ga,{to:"/payment",className:Ke.checkoutButton,state:{rentals:e},children:"Оплатити"})]})]})]}):A.jsxs("section",{className:Ke.section,children:[A.jsx("h2",{className:Ke.sectionTitle,children:"Будь ласка, увійдіть в систему"}),A.jsxs("p",{className:Ke.noRentals,children:["Щоб додавати товари до кошика, вам потрібно"," ",A.jsx(ga,{to:"/login",className:Ke.authLink,children:"увійти"})," або"," ",A.jsx(ga,{to:"/register",className:Ke.authLink,children:"зареєструватися"}),"."]})]})},I5="_contactSection_1vgp6_1",C5="_title_1vgp6_15",x5="_contactInfo_1vgp6_31",N5="_contactItem_1vgp6_47",O5="_contactIcon_1vgp6_67",D5="_contactForm_1vgp6_121",k5="_formTitle_1vgp6_139",P5="_formGroup_1vgp6_155",M5="_submitButton_1vgp6_223",yn={contactSection:I5,title:C5,contactInfo:x5,contactItem:N5,contactIcon:O5,contactForm:D5,formTitle:k5,formGroup:P5,submitButton:M5},L5=()=>A.jsxs("section",{className:yn.contactSection,children:[A.jsx("h1",{className:yn.title,children:"Контакти"}),A.jsxs("div",{className:yn.contactInfo,children:[A.jsxs("div",{className:yn.contactItem,children:[A.jsx(un,{icon:e4,className:yn.contactIcon}),A.jsx("h3",{children:"Адреса"}),A.jsx("p",{children:"м. Львів, вул. Зелена, 15"})]}),A.jsxs("div",{className:yn.contactItem,children:[A.jsx(un,{icon:YN,className:yn.contactIcon}),A.jsx("h3",{children:"Телефон"}),A.jsx("p",{children:A.jsx("a",{href:"tel:+380980986653",children:"+38 (098) 098-66-53"})})]}),A.jsxs("div",{className:yn.contactItem,children:[A.jsx(un,{icon:QN,className:yn.contactIcon}),A.jsx("h3",{children:"Email"}),A.jsx("p",{children:"yurii.prokopiv.oi.2023@lpnu.ua"})]})]}),A.jsxs("div",{className:yn.contactForm,children:[A.jsx("h2",{className:yn.formTitle,children:"Напишіть нам"}),A.jsxs("form",{children:[A.jsxs("div",{className:yn.formGroup,children:[A.jsx("label",{htmlFor:"name",children:"Ваше ім'я"}),A.jsx("input",{type:"text",id:"name",required:!0})]}),A.jsxs("div",{className:yn.formGroup,children:[A.jsx("label",{htmlFor:"email",children:"Email"}),A.jsx("input",{type:"email",id:"email",required:!0})]}),A.jsxs("div",{className:yn.formGroup,children:[A.jsx("label",{htmlFor:"message",children:"Повідомлення"}),A.jsx("textarea",{id:"message",rows:"5",required:!0})]}),A.jsx("button",{type:"submit",className:yn.submitButton,children:"Надіслати"})]})]})]}),V5="_paymentForm_zhxz6_1",U5="_title_zhxz6_39",j5="_formGroup_zhxz6_53",z5="_row_zhxz6_113",B5="_payButton_zhxz6_133",ua={paymentForm:V5,title:U5,formGroup:j5,row:z5,payButton:B5},F5=()=>A.jsxs("div",{className:ua.paymentForm,children:[A.jsx("h2",{className:ua.title,children:"Оплата оренди"}),A.jsxs("div",{className:ua.formGroup,children:[A.jsx("label",{htmlFor:"cardNumber",children:"Номер картки"}),A.jsx("input",{type:"text",id:"cardNumber",placeholder:"1234 5678 9012 3456",maxLength:"19"})]}),A.jsxs("div",{className:ua.row,children:[A.jsxs("div",{className:ua.formGroup,children:[A.jsx("label",{htmlFor:"expiry",children:"Термін дії"}),A.jsx("input",{type:"text",id:"expiry",placeholder:"ММ/РР",maxLength:"5"})]}),A.jsxs("div",{className:ua.formGroup,children:[A.jsx("label",{htmlFor:"cvv",children:"CVV"}),A.jsx("input",{type:"text",id:"cvv",placeholder:"123",maxLength:"3"})]})]}),A.jsxs("div",{className:ua.formGroup,children:[A.jsx("label",{htmlFor:"name",children:"Ім'я на картці"}),A.jsx("input",{type:"text",id:"name"})]}),A.jsx("button",{className:ua.payButton,children:"Оплатити"})]}),q5="_authContainer_6ki7a_1",H5="_authCard_6ki7a_19",G5="_authTitle_6ki7a_37",$5="_authForm_6ki7a_51",K5="_formGroup_6ki7a_63",Y5="_formLabel_6ki7a_75",Q5="_formInput_6ki7a_85",X5="_authButton_6ki7a_113",W5="_authError_6ki7a_161",Z5="_authFooter_6ki7a_179",J5="_authLink_6ki7a_191",Ye={authContainer:q5,authCard:H5,authTitle:G5,authForm:$5,formGroup:K5,formLabel:Y5,formInput:Q5,authButton:X5,authError:W5,authFooter:Z5,authLink:J5},ej=()=>{const[n,e]=F.useState(""),[t,i]=F.useState(""),[s,l]=F.useState(""),[c,d]=F.useState(!1),m=al(),g=async _=>{_.preventDefault(),d(!0),l("");try{await ik(Pr,n,t),m("/")}catch(T){l(T.message),d(!1)}};return A.jsx("div",{className:Ye.authContainer,children:A.jsxs("div",{className:Ye.authCard,children:[A.jsx("h2",{className:Ye.authTitle,children:"Увійти"}),s&&A.jsx("div",{className:Ye.authError,children:s}),A.jsxs("form",{onSubmit:g,className:Ye.authForm,children:[A.jsxs("div",{className:Ye.formGroup,children:[A.jsx("label",{htmlFor:"email",className:Ye.formLabel,children:"Email"}),A.jsx("input",{type:"email",id:"email",value:n,onChange:_=>e(_.target.value),className:Ye.formInput,required:!0})]}),A.jsxs("div",{className:Ye.formGroup,children:[A.jsx("label",{htmlFor:"password",className:Ye.formLabel,children:"Пароль"}),A.jsx("input",{type:"password",id:"password",value:t,onChange:_=>i(_.target.value),className:Ye.formInput,required:!0})]}),A.jsx("button",{type:"submit",disabled:c,className:Ye.authButton,children:c?"Завантаження...":"Увійти"})]}),A.jsxs("div",{className:Ye.authFooter,children:["Немає акаунта? ",A.jsx(ga,{to:"/register",className:Ye.authLink,children:"Зареєструватись"})]})]})})},tj=()=>{const[n,e]=F.useState(""),[t,i]=F.useState(""),[s,l]=F.useState(""),[c,d]=F.useState(""),[m,g]=F.useState(!1),_=al(),T=async w=>{if(w.preventDefault(),t!==s)return d("Паролі не співпадають");g(!0),d("");try{await rk(Pr,n,t),_("/")}catch(x){d(x.message),g(!1)}};return A.jsx("div",{className:Ye.authContainer,children:A.jsxs("div",{className:Ye.authCard,children:[A.jsx("h2",{className:Ye.authTitle,children:"Реєстрація"}),c&&A.jsx("div",{className:Ye.authError,children:c}),A.jsxs("form",{onSubmit:T,className:Ye.authForm,children:[A.jsxs("div",{className:Ye.formGroup,children:[A.jsx("label",{htmlFor:"email",className:Ye.formLabel,children:"Email"}),A.jsx("input",{type:"email",id:"email",value:n,onChange:w=>e(w.target.value),className:Ye.formInput,required:!0})]}),A.jsxs("div",{className:Ye.formGroup,children:[A.jsx("label",{htmlFor:"password",className:Ye.formLabel,children:"Пароль"}),A.jsx("input",{type:"password",id:"password",value:t,onChange:w=>i(w.target.value),className:Ye.formInput,required:!0})]}),A.jsxs("div",{className:Ye.formGroup,children:[A.jsx("label",{htmlFor:"confirmPassword",className:Ye.formLabel,children:"Підтвердити пароль"}),A.jsx("input",{type:"password",id:"confirmPassword",value:s,onChange:w=>l(w.target.value),className:Ye.formInput,required:!0})]}),A.jsx("button",{type:"submit",disabled:m,className:Ye.authButton,children:m?"Завантаження...":"Зареєструватись"})]}),A.jsxs("div",{className:Ye.authFooter,children:["Вже маєте акаунт? ",A.jsx(ga,{to:"/login",className:Ye.authLink,children:"Увійти"})]})]})})},nj="_profileContainer_942n8_1",rj="_profileCard_942n8_19",ij="_profileTitle_942n8_39",aj="_profileForm_942n8_55",sj="_avatarContainer_942n8_67",oj="_avatarLabel_942n8_79",lj="_avatarWrapper_942n8_89",uj="_avatar_942n8_67",cj="_avatarPlaceholder_942n8_119",fj="_avatarOverlay_942n8_139",hj="_avatarInput_942n8_173",dj="_formGroup_942n8_181",mj="_saveBtn_942n8_239",pj="_logoutBtn_942n8_283",gj="_error_942n8_317",yj="_success_942n8_335",_j="_loading_942n8_353",xt={profileContainer:nj,profileCard:rj,profileTitle:ij,profileForm:aj,avatarContainer:sj,avatarLabel:oj,avatarWrapper:lj,avatar:uj,avatarPlaceholder:cj,avatarOverlay:fj,avatarInput:hj,formGroup:dj,saveBtn:mj,logoutBtn:pj,error:gj,success:yj,loading:_j},vj=()=>{const[n,e]=F.useState(""),[t,i]=F.useState(""),[s,l]=F.useState(""),[c,d]=F.useState(""),[m,g]=F.useState(""),[_,T]=F.useState(!0),[w,x]=F.useState(""),[D,H]=F.useState(""),L=al();F.useEffect(()=>{(async()=>{var ae,ge;try{const O=Pr.currentUser;if(O){d(O.email||""),e(((ae=O.displayName)==null?void 0:ae.split(" ")[0])||""),i(((ge=O.displayName)==null?void 0:ge.split(" ")[1])||""),g(O.photoURL||"");const R=await o_(Ns(ks,"users",O.uid));if(R.exists()){const I=R.data();l(I.phone||"")}}}catch{x("Помилка завантаження даних")}finally{T(!1)}})()},[]);const $=async re=>{re.preventDefault(),T(!0),x(""),H("");try{const ae=Pr.currentUser;ae&&(await sk(ae,{displayName:`${n} ${t}`,photoURL:m}),await l_(Ns(ks,"users",ae.uid),{name:n,surname:t,phone:s,email:ae.email,photoURL:m}),H("Дані успішно збережено!"))}catch(ae){x("Помилка збереження даних: "+ae.message)}finally{T(!1)}},Z=async()=>{try{await Pr.signOut(),L("/")}catch(re){x("Помилка виходу: "+re.message)}},Q=async re=>{const ae=re.target.files[0];if(ae){const ge=_w(),O=OP(ge,`avatars/${Pr.currentUser.uid}`);try{await xP(O,ae);const R=await NP(O);g(R)}catch{x("Не вдалося завантажити фото")}}};return _?A.jsx("div",{className:xt.loading,children:"Завантаження..."}):A.jsx("div",{className:xt.profileContainer,children:A.jsxs("div",{className:xt.profileCard,children:[A.jsx("h2",{className:xt.profileTitle,children:"Мій профіль"}),w&&A.jsx("div",{className:xt.error,children:w}),D&&A.jsx("div",{className:xt.success,children:D}),A.jsxs("form",{onSubmit:$,className:xt.profileForm,children:[A.jsxs("div",{className:xt.avatarContainer,children:[A.jsx("label",{htmlFor:"avatar",className:xt.avatarLabel,children:A.jsxs("div",{className:xt.avatarWrapper,children:[m?A.jsx("img",{src:m,alt:"Аватар",className:xt.avatar}):A.jsx("div",{className:xt.avatarPlaceholder,children:A.jsx(un,{icon:rA,size:"3x"})}),A.jsx("div",{className:xt.avatarOverlay,children:"Змінити фото"})]})}),A.jsx("input",{id:"avatar",type:"file",accept:"image/*",onChange:Q,className:xt.avatarInput})]}),A.jsxs("div",{className:xt.formGroup,children:[A.jsx("label",{htmlFor:"name",children:"Ім'я"}),A.jsx("input",{type:"text",id:"name",value:n,onChange:re=>e(re.target.value),required:!0})]}),A.jsxs("div",{className:xt.formGroup,children:[A.jsx("label",{htmlFor:"surname",children:"Прізвище"}),A.jsx("input",{type:"text",id:"surname",value:t,onChange:re=>i(re.target.value),required:!0})]}),A.jsxs("div",{className:xt.formGroup,children:[A.jsx("label",{htmlFor:"email",children:"Email"}),A.jsx("input",{type:"email",id:"email",value:c,onChange:re=>d(re.target.value),disabled:!0})]}),A.jsxs("div",{className:xt.formGroup,children:[A.jsx("label",{htmlFor:"phone",children:"Номер телефону"}),A.jsx("input",{type:"tel",id:"phone",value:s,onChange:re=>l(re.target.value)})]}),A.jsx("button",{type:"submit",disabled:_,className:xt.saveBtn,children:_?"Збереження...":"Зберегти зміни"})]}),A.jsxs("button",{onClick:Z,className:xt.logoutBtn,children:[A.jsx(un,{icon:BN})," Вийти"]})]})})},Ej=({children:n,redirectTo:e="/login"})=>{const[t,i]=m_(Pr);return i?A.jsx("div",{children:"Завантаження..."}):t?n:A.jsx(BI,{to:e,replace:!0})};function Tj(){return A.jsx(dC,{children:A.jsxs("div",{className:"app",children:[A.jsx(gV,{}),A.jsx("main",{children:A.jsxs(qI,{children:[A.jsx(mi,{path:"/",element:A.jsx(aU,{})}),A.jsx(mi,{path:"/equipment",element:A.jsx(ZU,{})}),A.jsx(mi,{path:"/rentals",element:A.jsx(R5,{})}),A.jsx(mi,{path:"/payment",element:A.jsx(F5,{})}),A.jsx(mi,{path:"/contact",element:A.jsx(L5,{})}),A.jsx(mi,{path:"/login",element:A.jsx(ej,{})}),A.jsx(mi,{path:"/register",element:A.jsx(tj,{})}),A.jsx(mi,{path:"/profile",element:A.jsx(Ej,{children:A.jsx(vj,{})})})]})}),A.jsx(TV,{})]})})}Z2.createRoot(document.getElementById("root")).render(A.jsx(Wg.StrictMode,{children:A.jsx(Tj,{})}));
