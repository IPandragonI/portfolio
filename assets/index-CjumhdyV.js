(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function a0(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tg={exports:{}},Kl={},ng={exports:{}},ze={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ta=Symbol.for("react.element"),l0=Symbol.for("react.portal"),u0=Symbol.for("react.fragment"),c0=Symbol.for("react.strict_mode"),f0=Symbol.for("react.profiler"),d0=Symbol.for("react.provider"),h0=Symbol.for("react.context"),p0=Symbol.for("react.forward_ref"),m0=Symbol.for("react.suspense"),g0=Symbol.for("react.memo"),_0=Symbol.for("react.lazy"),Th=Symbol.iterator;function v0(t){return t===null||typeof t!="object"?null:(t=Th&&t[Th]||t["@@iterator"],typeof t=="function"?t:null)}var ig={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},rg=Object.assign,sg={};function Ws(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}Ws.prototype.isReactComponent={};Ws.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ws.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function og(){}og.prototype=Ws.prototype;function ld(t,e,n){this.props=t,this.context=e,this.refs=sg,this.updater=n||ig}var ud=ld.prototype=new og;ud.constructor=ld;rg(ud,Ws.prototype);ud.isPureReactComponent=!0;var wh=Array.isArray,ag=Object.prototype.hasOwnProperty,cd={current:null},lg={key:!0,ref:!0,__self:!0,__source:!0};function ug(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)ag.call(e,i)&&!lg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ta,type:t,key:s,ref:o,props:r,_owner:cd.current}}function x0(t,e){return{$$typeof:ta,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function fd(t){return typeof t=="object"&&t!==null&&t.$$typeof===ta}function y0(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Ah=/\/+/g;function xu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?y0(""+t.key):e.toString(36)}function nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ta:case l0:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+xu(o,0):i,wh(r)?(n="",t!=null&&(n=t.replace(Ah,"$&/")+"/"),nl(r,e,n,"",function(u){return u})):r!=null&&(fd(r)&&(r=x0(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Ah,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",wh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+xu(s,a);o+=nl(s,e,n,l,r)}else if(l=v0(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+xu(s,a++),o+=nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function da(t,e,n){if(t==null)return t;var i=[],r=0;return nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function S0(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Kt={current:null},il={transition:null},M0={ReactCurrentDispatcher:Kt,ReactCurrentBatchConfig:il,ReactCurrentOwner:cd};function cg(){throw Error("act(...) is not supported in production builds of React.")}ze.Children={map:da,forEach:function(t,e,n){da(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return da(t,function(){e++}),e},toArray:function(t){return da(t,function(e){return e})||[]},only:function(t){if(!fd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ze.Component=Ws;ze.Fragment=u0;ze.Profiler=f0;ze.PureComponent=ld;ze.StrictMode=c0;ze.Suspense=m0;ze.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=M0;ze.act=cg;ze.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=rg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=cd.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)ag.call(e,l)&&!lg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ta,type:t.type,key:r,ref:s,props:i,_owner:o}};ze.createContext=function(t){return t={$$typeof:h0,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:d0,_context:t},t.Consumer=t};ze.createElement=ug;ze.createFactory=function(t){var e=ug.bind(null,t);return e.type=t,e};ze.createRef=function(){return{current:null}};ze.forwardRef=function(t){return{$$typeof:p0,render:t}};ze.isValidElement=fd;ze.lazy=function(t){return{$$typeof:_0,_payload:{_status:-1,_result:t},_init:S0}};ze.memo=function(t,e){return{$$typeof:g0,type:t,compare:e===void 0?null:e}};ze.startTransition=function(t){var e=il.transition;il.transition={};try{t()}finally{il.transition=e}};ze.unstable_act=cg;ze.useCallback=function(t,e){return Kt.current.useCallback(t,e)};ze.useContext=function(t){return Kt.current.useContext(t)};ze.useDebugValue=function(){};ze.useDeferredValue=function(t){return Kt.current.useDeferredValue(t)};ze.useEffect=function(t,e){return Kt.current.useEffect(t,e)};ze.useId=function(){return Kt.current.useId()};ze.useImperativeHandle=function(t,e,n){return Kt.current.useImperativeHandle(t,e,n)};ze.useInsertionEffect=function(t,e){return Kt.current.useInsertionEffect(t,e)};ze.useLayoutEffect=function(t,e){return Kt.current.useLayoutEffect(t,e)};ze.useMemo=function(t,e){return Kt.current.useMemo(t,e)};ze.useReducer=function(t,e,n){return Kt.current.useReducer(t,e,n)};ze.useRef=function(t){return Kt.current.useRef(t)};ze.useState=function(t){return Kt.current.useState(t)};ze.useSyncExternalStore=function(t,e,n){return Kt.current.useSyncExternalStore(t,e,n)};ze.useTransition=function(){return Kt.current.useTransition()};ze.version="18.3.1";ng.exports=ze;var pt=ng.exports;/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var E0=pt,T0=Symbol.for("react.element"),w0=Symbol.for("react.fragment"),A0=Object.prototype.hasOwnProperty,C0=E0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,R0={key:!0,ref:!0,__self:!0,__source:!0};function fg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)A0.call(e,i)&&!R0.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:T0,type:t,key:s,ref:o,props:r,_owner:C0.current}}Kl.Fragment=w0;Kl.jsx=fg;Kl.jsxs=fg;tg.exports=Kl;var de=tg.exports,Tc={},dg={exports:{}},mn={},hg={exports:{}},pg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,V){var Y=L.length;L.push(V);e:for(;0<Y;){var re=Y-1>>>1,Se=L[re];if(0<r(Se,V))L[re]=V,L[Y]=Se,Y=re;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var V=L[0],Y=L.pop();if(Y!==V){L[0]=Y;e:for(var re=0,Se=L.length,$e=Se>>>1;re<$e;){var G=2*(re+1)-1,te=L[G],pe=G+1,se=L[pe];if(0>r(te,Y))pe<Se&&0>r(se,te)?(L[re]=se,L[pe]=Y,re=pe):(L[re]=te,L[G]=Y,re=G);else if(pe<Se&&0>r(se,Y))L[re]=se,L[pe]=Y,re=pe;else break e}}return V}function r(L,V){var Y=L.sortIndex-V.sortIndex;return Y!==0?Y:L.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,h=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=L)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function x(L){if(y=!1,v(L),!_)if(n(l)!==null)_=!0,X(b);else{var V=n(u);V!==null&&Q(x,V.startTime-L)}}function b(L,V){_=!1,y&&(y=!1,f(R),R=-1),p=!0;var Y=d;try{for(v(V),h=n(l);h!==null&&(!(h.expirationTime>V)||L&&!P());){var re=h.callback;if(typeof re=="function"){h.callback=null,d=h.priorityLevel;var Se=re(h.expirationTime<=V);V=t.unstable_now(),typeof Se=="function"?h.callback=Se:h===n(l)&&i(l),v(V)}else i(l);h=n(l)}if(h!==null)var $e=!0;else{var G=n(u);G!==null&&Q(x,G.startTime-V),$e=!1}return $e}finally{h=null,d=Y,p=!1}}var C=!1,w=null,R=-1,T=5,S=-1;function P(){return!(t.unstable_now()-S<T)}function W(){if(w!==null){var L=t.unstable_now();S=L;var V=!0;try{V=w(!0,L)}finally{V?B():(C=!1,w=null)}}else C=!1}var B;if(typeof g=="function")B=function(){g(W)};else if(typeof MessageChannel<"u"){var $=new MessageChannel,q=$.port2;$.port1.onmessage=W,B=function(){q.postMessage(null)}}else B=function(){m(W,0)};function X(L){w=L,C||(C=!0,B())}function Q(L,V){R=m(function(){L(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,X(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):T=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var V=3;break;default:V=d}var Y=d;d=V;try{return L()}finally{d=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,V){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Y=d;d=L;try{return V()}finally{d=Y}},t.unstable_scheduleCallback=function(L,V,Y){var re=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?re+Y:re):Y=re,L){case 1:var Se=-1;break;case 2:Se=250;break;case 5:Se=1073741823;break;case 4:Se=1e4;break;default:Se=5e3}return Se=Y+Se,L={id:c++,callback:V,priorityLevel:L,startTime:Y,expirationTime:Se,sortIndex:-1},Y>re?(L.sortIndex=Y,e(u,L),n(l)===null&&L===n(u)&&(y?(f(R),R=-1):y=!0,Q(x,Y-re))):(L.sortIndex=Se,e(l,L),_||p||(_=!0,X(b))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var V=d;return function(){var Y=d;d=V;try{return L.apply(this,arguments)}finally{d=Y}}}})(pg);hg.exports=pg;var b0=hg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P0=pt,pn=b0;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var mg=new Set,Io={};function Or(t,e){Ls(t,e),Ls(t+"Capture",e)}function Ls(t,e){for(Io[t]=e,t=0;t<e.length;t++)mg.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),wc=Object.prototype.hasOwnProperty,L0=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Ch={},Rh={};function D0(t){return wc.call(Rh,t)?!0:wc.call(Ch,t)?!1:L0.test(t)?Rh[t]=!0:(Ch[t]=!0,!1)}function N0(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function I0(t,e,n,i){if(e===null||typeof e>"u"||N0(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Zt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Zt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Zt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Zt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Zt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Zt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Zt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Zt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Zt(t,5,!1,t.toLowerCase(),null,!1,!1)});var dd=/[\-:]([a-z])/g;function hd(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(dd,hd);Ut[e]=new Zt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(dd,hd);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(dd,hd);Ut[e]=new Zt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Zt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Zt(t,1,!1,t.toLowerCase(),null,!0,!0)});function pd(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(I0(e,n,r,i)&&(n=null),i||r===null?D0(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ai=P0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ha=Symbol.for("react.element"),as=Symbol.for("react.portal"),ls=Symbol.for("react.fragment"),md=Symbol.for("react.strict_mode"),Ac=Symbol.for("react.profiler"),gg=Symbol.for("react.provider"),_g=Symbol.for("react.context"),gd=Symbol.for("react.forward_ref"),Cc=Symbol.for("react.suspense"),Rc=Symbol.for("react.suspense_list"),_d=Symbol.for("react.memo"),Fi=Symbol.for("react.lazy"),vg=Symbol.for("react.offscreen"),bh=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=bh&&t[bh]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,yu;function go(t){if(yu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);yu=e&&e[1]||""}return`
`+yu+t}var Su=!1;function Mu(t,e){if(!t||Su)return"";Su=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Su=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?go(t):""}function U0(t){switch(t.tag){case 5:return go(t.type);case 16:return go("Lazy");case 13:return go("Suspense");case 19:return go("SuspenseList");case 0:case 2:case 15:return t=Mu(t.type,!1),t;case 11:return t=Mu(t.type.render,!1),t;case 1:return t=Mu(t.type,!0),t;default:return""}}function bc(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ls:return"Fragment";case as:return"Portal";case Ac:return"Profiler";case md:return"StrictMode";case Cc:return"Suspense";case Rc:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case _g:return(t.displayName||"Context")+".Consumer";case gg:return(t._context.displayName||"Context")+".Provider";case gd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case _d:return e=t.displayName||null,e!==null?e:bc(t.type)||"Memo";case Fi:e=t._payload,t=t._init;try{return bc(t(e))}catch{}}return null}function O0(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return bc(e);case 8:return e===md?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function tr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function xg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function F0(t){var e=xg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function pa(t){t._valueTracker||(t._valueTracker=F0(t))}function yg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=xg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function yl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Pc(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Ph(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=tr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Sg(t,e){e=e.checked,e!=null&&pd(t,"checked",e,!1)}function Lc(t,e){Sg(t,e);var n=tr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Dc(t,e.type,n):e.hasOwnProperty("defaultValue")&&Dc(t,e.type,tr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Lh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Dc(t,e,n){(e!=="number"||yl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var _o=Array.isArray;function Ss(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+tr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Nc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Dh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(_o(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:tr(n)}}function Mg(t,e){var n=tr(e.value),i=tr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Nh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Eg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ic(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Eg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ma,Tg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(ma=ma||document.createElement("div"),ma.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ma.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Uo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Mo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},k0=["Webkit","ms","Moz","O"];Object.keys(Mo).forEach(function(t){k0.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Mo[e]=Mo[t]})});function wg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Mo.hasOwnProperty(t)&&Mo[t]?(""+e).trim():e+"px"}function Ag(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=wg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var z0=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Uc(t,e){if(e){if(z0[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Oc(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fc=null;function vd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var kc=null,Ms=null,Es=null;function Ih(t){if(t=ra(t)){if(typeof kc!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=tu(e),kc(t.stateNode,t.type,e))}}function Cg(t){Ms?Es?Es.push(t):Es=[t]:Ms=t}function Rg(){if(Ms){var t=Ms,e=Es;if(Es=Ms=null,Ih(t),e)for(t=0;t<e.length;t++)Ih(e[t])}}function bg(t,e){return t(e)}function Pg(){}var Eu=!1;function Lg(t,e,n){if(Eu)return t(e,n);Eu=!0;try{return bg(t,e,n)}finally{Eu=!1,(Ms!==null||Es!==null)&&(Pg(),Rg())}}function Oo(t,e){var n=t.stateNode;if(n===null)return null;var i=tu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var zc=!1;if(yi)try{var Qs={};Object.defineProperty(Qs,"passive",{get:function(){zc=!0}}),window.addEventListener("test",Qs,Qs),window.removeEventListener("test",Qs,Qs)}catch{zc=!1}function B0(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Eo=!1,Sl=null,Ml=!1,Bc=null,H0={onError:function(t){Eo=!0,Sl=t}};function V0(t,e,n,i,r,s,o,a,l){Eo=!1,Sl=null,B0.apply(H0,arguments)}function G0(t,e,n,i,r,s,o,a,l){if(V0.apply(this,arguments),Eo){if(Eo){var u=Sl;Eo=!1,Sl=null}else throw Error(ee(198));Ml||(Ml=!0,Bc=u)}}function Fr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Dg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Uh(t){if(Fr(t)!==t)throw Error(ee(188))}function W0(t){var e=t.alternate;if(!e){if(e=Fr(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Uh(r),t;if(s===i)return Uh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Ng(t){return t=W0(t),t!==null?Ig(t):null}function Ig(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Ig(t);if(e!==null)return e;t=t.sibling}return null}var Ug=pn.unstable_scheduleCallback,Oh=pn.unstable_cancelCallback,X0=pn.unstable_shouldYield,j0=pn.unstable_requestPaint,yt=pn.unstable_now,$0=pn.unstable_getCurrentPriorityLevel,xd=pn.unstable_ImmediatePriority,Og=pn.unstable_UserBlockingPriority,El=pn.unstable_NormalPriority,Y0=pn.unstable_LowPriority,Fg=pn.unstable_IdlePriority,Zl=null,Jn=null;function q0(t){if(Jn&&typeof Jn.onCommitFiberRoot=="function")try{Jn.onCommitFiberRoot(Zl,t,void 0,(t.current.flags&128)===128)}catch{}}var Bn=Math.clz32?Math.clz32:Q0,K0=Math.log,Z0=Math.LN2;function Q0(t){return t>>>=0,t===0?32:31-(K0(t)/Z0|0)|0}var ga=64,_a=4194304;function vo(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Tl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=vo(a):(s&=o,s!==0&&(i=vo(s)))}else o=n&~r,o!==0?i=vo(o):s!==0&&(i=vo(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Bn(e),r=1<<n,i|=t[n],e&=~r;return i}function J0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ex(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Bn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=J0(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Hc(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function kg(){var t=ga;return ga<<=1,!(ga&4194240)&&(ga=64),t}function Tu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function na(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Bn(e),t[e]=n}function tx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Bn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function yd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Bn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var et=0;function zg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Bg,Sd,Hg,Vg,Gg,Vc=!1,va=[],Xi=null,ji=null,$i=null,Fo=new Map,ko=new Map,Bi=[],nx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Fh(t,e){switch(t){case"focusin":case"focusout":Xi=null;break;case"dragenter":case"dragleave":ji=null;break;case"mouseover":case"mouseout":$i=null;break;case"pointerover":case"pointerout":Fo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ko.delete(e.pointerId)}}function Js(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=ra(e),e!==null&&Sd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function ix(t,e,n,i,r){switch(e){case"focusin":return Xi=Js(Xi,t,e,n,i,r),!0;case"dragenter":return ji=Js(ji,t,e,n,i,r),!0;case"mouseover":return $i=Js($i,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Fo.set(s,Js(Fo.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ko.set(s,Js(ko.get(s)||null,t,e,n,i,r)),!0}return!1}function Wg(t){var e=yr(t.target);if(e!==null){var n=Fr(e);if(n!==null){if(e=n.tag,e===13){if(e=Dg(n),e!==null){t.blockedOn=e,Gg(t.priority,function(){Hg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Gc(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Fc=i,n.target.dispatchEvent(i),Fc=null}else return e=ra(n),e!==null&&Sd(e),t.blockedOn=n,!1;e.shift()}return!0}function kh(t,e,n){rl(t)&&n.delete(e)}function rx(){Vc=!1,Xi!==null&&rl(Xi)&&(Xi=null),ji!==null&&rl(ji)&&(ji=null),$i!==null&&rl($i)&&($i=null),Fo.forEach(kh),ko.forEach(kh)}function eo(t,e){t.blockedOn===e&&(t.blockedOn=null,Vc||(Vc=!0,pn.unstable_scheduleCallback(pn.unstable_NormalPriority,rx)))}function zo(t){function e(r){return eo(r,t)}if(0<va.length){eo(va[0],t);for(var n=1;n<va.length;n++){var i=va[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Xi!==null&&eo(Xi,t),ji!==null&&eo(ji,t),$i!==null&&eo($i,t),Fo.forEach(e),ko.forEach(e),n=0;n<Bi.length;n++)i=Bi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Bi.length&&(n=Bi[0],n.blockedOn===null);)Wg(n),n.blockedOn===null&&Bi.shift()}var Ts=Ai.ReactCurrentBatchConfig,wl=!0;function sx(t,e,n,i){var r=et,s=Ts.transition;Ts.transition=null;try{et=1,Md(t,e,n,i)}finally{et=r,Ts.transition=s}}function ox(t,e,n,i){var r=et,s=Ts.transition;Ts.transition=null;try{et=4,Md(t,e,n,i)}finally{et=r,Ts.transition=s}}function Md(t,e,n,i){if(wl){var r=Gc(t,e,n,i);if(r===null)Iu(t,e,i,Al,n),Fh(t,i);else if(ix(r,t,e,n,i))i.stopPropagation();else if(Fh(t,i),e&4&&-1<nx.indexOf(t)){for(;r!==null;){var s=ra(r);if(s!==null&&Bg(s),s=Gc(t,e,n,i),s===null&&Iu(t,e,i,Al,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Iu(t,e,i,null,n)}}var Al=null;function Gc(t,e,n,i){if(Al=null,t=vd(i),t=yr(t),t!==null)if(e=Fr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Dg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Al=t,null}function Xg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($0()){case xd:return 1;case Og:return 4;case El:case Y0:return 16;case Fg:return 536870912;default:return 16}default:return 16}}var Gi=null,Ed=null,sl=null;function jg(){if(sl)return sl;var t,e=Ed,n=e.length,i,r="value"in Gi?Gi.value:Gi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return sl=r.slice(t,1<i?1-i:void 0)}function ol(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function xa(){return!0}function zh(){return!1}function gn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?xa:zh,this.isPropagationStopped=zh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=xa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=xa)},persist:function(){},isPersistent:xa}),e}var Xs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Td=gn(Xs),ia=gt({},Xs,{view:0,detail:0}),ax=gn(ia),wu,Au,to,Ql=gt({},ia,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:wd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==to&&(to&&t.type==="mousemove"?(wu=t.screenX-to.screenX,Au=t.screenY-to.screenY):Au=wu=0,to=t),wu)},movementY:function(t){return"movementY"in t?t.movementY:Au}}),Bh=gn(Ql),lx=gt({},Ql,{dataTransfer:0}),ux=gn(lx),cx=gt({},ia,{relatedTarget:0}),Cu=gn(cx),fx=gt({},Xs,{animationName:0,elapsedTime:0,pseudoElement:0}),dx=gn(fx),hx=gt({},Xs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),px=gn(hx),mx=gt({},Xs,{data:0}),Hh=gn(mx),gx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_x={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},vx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xx(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=vx[t])?!!e[t]:!1}function wd(){return xx}var yx=gt({},ia,{key:function(t){if(t.key){var e=gx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=ol(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?_x[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:wd,charCode:function(t){return t.type==="keypress"?ol(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ol(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Sx=gn(yx),Mx=gt({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Vh=gn(Mx),Ex=gt({},ia,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:wd}),Tx=gn(Ex),wx=gt({},Xs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Ax=gn(wx),Cx=gt({},Ql,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Rx=gn(Cx),bx=[9,13,27,32],Ad=yi&&"CompositionEvent"in window,To=null;yi&&"documentMode"in document&&(To=document.documentMode);var Px=yi&&"TextEvent"in window&&!To,$g=yi&&(!Ad||To&&8<To&&11>=To),Gh=" ",Wh=!1;function Yg(t,e){switch(t){case"keyup":return bx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function qg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var us=!1;function Lx(t,e){switch(t){case"compositionend":return qg(e);case"keypress":return e.which!==32?null:(Wh=!0,Gh);case"textInput":return t=e.data,t===Gh&&Wh?null:t;default:return null}}function Dx(t,e){if(us)return t==="compositionend"||!Ad&&Yg(t,e)?(t=jg(),sl=Ed=Gi=null,us=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return $g&&e.locale!=="ko"?null:e.data;default:return null}}var Nx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Xh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Nx[t.type]:e==="textarea"}function Kg(t,e,n,i){Cg(i),e=Cl(e,"onChange"),0<e.length&&(n=new Td("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var wo=null,Bo=null;function Ix(t){a_(t,0)}function Jl(t){var e=ds(t);if(yg(e))return t}function Ux(t,e){if(t==="change")return e}var Zg=!1;if(yi){var Ru;if(yi){var bu="oninput"in document;if(!bu){var jh=document.createElement("div");jh.setAttribute("oninput","return;"),bu=typeof jh.oninput=="function"}Ru=bu}else Ru=!1;Zg=Ru&&(!document.documentMode||9<document.documentMode)}function $h(){wo&&(wo.detachEvent("onpropertychange",Qg),Bo=wo=null)}function Qg(t){if(t.propertyName==="value"&&Jl(Bo)){var e=[];Kg(e,Bo,t,vd(t)),Lg(Ix,e)}}function Ox(t,e,n){t==="focusin"?($h(),wo=e,Bo=n,wo.attachEvent("onpropertychange",Qg)):t==="focusout"&&$h()}function Fx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Jl(Bo)}function kx(t,e){if(t==="click")return Jl(e)}function zx(t,e){if(t==="input"||t==="change")return Jl(e)}function Bx(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:Bx;function Ho(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!wc.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Yh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function qh(t,e){var n=Yh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Yh(n)}}function Jg(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Jg(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function e_(){for(var t=window,e=yl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=yl(t.document)}return e}function Cd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Hx(t){var e=e_(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Jg(n.ownerDocument.documentElement,n)){if(i!==null&&Cd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=qh(n,s);var o=qh(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Vx=yi&&"documentMode"in document&&11>=document.documentMode,cs=null,Wc=null,Ao=null,Xc=!1;function Kh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Xc||cs==null||cs!==yl(i)||(i=cs,"selectionStart"in i&&Cd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Ao&&Ho(Ao,i)||(Ao=i,i=Cl(Wc,"onSelect"),0<i.length&&(e=new Td("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=cs)))}function ya(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var fs={animationend:ya("Animation","AnimationEnd"),animationiteration:ya("Animation","AnimationIteration"),animationstart:ya("Animation","AnimationStart"),transitionend:ya("Transition","TransitionEnd")},Pu={},t_={};yi&&(t_=document.createElement("div").style,"AnimationEvent"in window||(delete fs.animationend.animation,delete fs.animationiteration.animation,delete fs.animationstart.animation),"TransitionEvent"in window||delete fs.transitionend.transition);function eu(t){if(Pu[t])return Pu[t];if(!fs[t])return t;var e=fs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in t_)return Pu[t]=e[n];return t}var n_=eu("animationend"),i_=eu("animationiteration"),r_=eu("animationstart"),s_=eu("transitionend"),o_=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sr(t,e){o_.set(t,e),Or(e,[t])}for(var Lu=0;Lu<Zh.length;Lu++){var Du=Zh[Lu],Gx=Du.toLowerCase(),Wx=Du[0].toUpperCase()+Du.slice(1);sr(Gx,"on"+Wx)}sr(n_,"onAnimationEnd");sr(i_,"onAnimationIteration");sr(r_,"onAnimationStart");sr("dblclick","onDoubleClick");sr("focusin","onFocus");sr("focusout","onBlur");sr(s_,"onTransitionEnd");Ls("onMouseEnter",["mouseout","mouseover"]);Ls("onMouseLeave",["mouseout","mouseover"]);Ls("onPointerEnter",["pointerout","pointerover"]);Ls("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Xx=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function Qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,G0(i,e,void 0,t),t.currentTarget=null}function a_(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Qh(r,a,u),s=l}}}if(Ml)throw t=Bc,Ml=!1,Bc=null,t}function ut(t,e){var n=e[Kc];n===void 0&&(n=e[Kc]=new Set);var i=t+"__bubble";n.has(i)||(l_(e,t,2,!1),n.add(i))}function Nu(t,e,n){var i=0;e&&(i|=4),l_(n,t,i,e)}var Sa="_reactListening"+Math.random().toString(36).slice(2);function Vo(t){if(!t[Sa]){t[Sa]=!0,mg.forEach(function(n){n!=="selectionchange"&&(Xx.has(n)||Nu(n,!1,t),Nu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Sa]||(e[Sa]=!0,Nu("selectionchange",!1,e))}}function l_(t,e,n,i){switch(Xg(e)){case 1:var r=sx;break;case 4:r=ox;break;default:r=Md}n=r.bind(null,e,n,t),r=void 0,!zc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Iu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=yr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Lg(function(){var u=s,c=vd(n),h=[];e:{var d=o_.get(t);if(d!==void 0){var p=Td,_=t;switch(t){case"keypress":if(ol(n)===0)break e;case"keydown":case"keyup":p=Sx;break;case"focusin":_="focus",p=Cu;break;case"focusout":_="blur",p=Cu;break;case"beforeblur":case"afterblur":p=Cu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=ux;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Tx;break;case n_:case i_:case r_:p=dx;break;case s_:p=Ax;break;case"scroll":p=ax;break;case"wheel":p=Rx;break;case"copy":case"cut":case"paste":p=px;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Vh}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var g=u,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,f!==null&&(x=Oo(g,f),x!=null&&y.push(Go(g,x,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,_,null,n,c),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Fc&&(_=n.relatedTarget||n.fromElement)&&(yr(_)||_[Si]))break e;if((p||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=u,_=_?yr(_):null,_!==null&&(m=Fr(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=u),p!==_)){if(y=Bh,x="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Vh,x="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?d:ds(p),v=_==null?d:ds(_),d=new y(x,g+"leave",p,n,c),d.target=m,d.relatedTarget=v,x=null,yr(c)===u&&(y=new y(f,g+"enter",_,n,c),y.target=v,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,f=_,g=0,v=y;v;v=Br(v))g++;for(v=0,x=f;x;x=Br(x))v++;for(;0<g-v;)y=Br(y),g--;for(;0<v-g;)f=Br(f),v--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=Br(y),f=Br(f)}y=null}else y=null;p!==null&&Jh(h,d,p,y,!1),_!==null&&m!==null&&Jh(h,m,_,y,!0)}}e:{if(d=u?ds(u):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=Ux;else if(Xh(d))if(Zg)b=zx;else{b=Fx;var C=Ox}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=kx);if(b&&(b=b(t,u))){Kg(h,b,n,c);break e}C&&C(t,d,u),t==="focusout"&&(C=d._wrapperState)&&C.controlled&&d.type==="number"&&Dc(d,"number",d.value)}switch(C=u?ds(u):window,t){case"focusin":(Xh(C)||C.contentEditable==="true")&&(cs=C,Wc=u,Ao=null);break;case"focusout":Ao=Wc=cs=null;break;case"mousedown":Xc=!0;break;case"contextmenu":case"mouseup":case"dragend":Xc=!1,Kh(h,n,c);break;case"selectionchange":if(Vx)break;case"keydown":case"keyup":Kh(h,n,c)}var w;if(Ad)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else us?Yg(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&($g&&n.locale!=="ko"&&(us||R!=="onCompositionStart"?R==="onCompositionEnd"&&us&&(w=jg()):(Gi=c,Ed="value"in Gi?Gi.value:Gi.textContent,us=!0)),C=Cl(u,R),0<C.length&&(R=new Hh(R,t,null,n,c),h.push({event:R,listeners:C}),w?R.data=w:(w=qg(n),w!==null&&(R.data=w)))),(w=Px?Lx(t,n):Dx(t,n))&&(u=Cl(u,"onBeforeInput"),0<u.length&&(c=new Hh("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:u}),c.data=w))}a_(h,e)})}function Go(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Cl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Oo(t,n),s!=null&&i.unshift(Go(t,s,r)),s=Oo(t,e),s!=null&&i.push(Go(t,s,r))),t=t.return}return i}function Br(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Jh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Oo(n,s),l!=null&&o.unshift(Go(n,l,a))):r||(l=Oo(n,s),l!=null&&o.push(Go(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var jx=/\r\n?/g,$x=/\u0000|\uFFFD/g;function ep(t){return(typeof t=="string"?t:""+t).replace(jx,`
`).replace($x,"")}function Ma(t,e,n){if(e=ep(e),ep(t)!==e&&n)throw Error(ee(425))}function Rl(){}var jc=null,$c=null;function Yc(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qc=typeof setTimeout=="function"?setTimeout:void 0,Yx=typeof clearTimeout=="function"?clearTimeout:void 0,tp=typeof Promise=="function"?Promise:void 0,qx=typeof queueMicrotask=="function"?queueMicrotask:typeof tp<"u"?function(t){return tp.resolve(null).then(t).catch(Kx)}:qc;function Kx(t){setTimeout(function(){throw t})}function Uu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);zo(e)}function Yi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function np(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var js=Math.random().toString(36).slice(2),qn="__reactFiber$"+js,Wo="__reactProps$"+js,Si="__reactContainer$"+js,Kc="__reactEvents$"+js,Zx="__reactListeners$"+js,Qx="__reactHandles$"+js;function yr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=np(t);t!==null;){if(n=t[qn])return n;t=np(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[qn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ds(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function tu(t){return t[Wo]||null}var Zc=[],hs=-1;function or(t){return{current:t}}function ct(t){0>hs||(t.current=Zc[hs],Zc[hs]=null,hs--)}function st(t,e){hs++,Zc[hs]=t.current,t.current=e}var nr={},Gt=or(nr),nn=or(!1),Rr=nr;function Ds(t,e){var n=t.type.contextTypes;if(!n)return nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function rn(t){return t=t.childContextTypes,t!=null}function bl(){ct(nn),ct(Gt)}function ip(t,e,n){if(Gt.current!==nr)throw Error(ee(168));st(Gt,e),st(nn,n)}function u_(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,O0(t)||"Unknown",r));return gt({},n,i)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||nr,Rr=Gt.current,st(Gt,t),st(nn,nn.current),!0}function rp(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=u_(t,e,Rr),i.__reactInternalMemoizedMergedChildContext=t,ct(nn),ct(Gt),st(Gt,t)):ct(nn),st(nn,n)}var fi=null,nu=!1,Ou=!1;function c_(t){fi===null?fi=[t]:fi.push(t)}function Jx(t){nu=!0,c_(t)}function ar(){if(!Ou&&fi!==null){Ou=!0;var t=0,e=et;try{var n=fi;for(et=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}fi=null,nu=!1}catch(r){throw fi!==null&&(fi=fi.slice(t+1)),Ug(xd,ar),r}finally{et=e,Ou=!1}}return null}var ps=[],ms=0,Ll=null,Dl=0,Sn=[],Mn=0,br=null,hi=1,pi="";function mr(t,e){ps[ms++]=Dl,ps[ms++]=Ll,Ll=t,Dl=e}function f_(t,e,n){Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=br,br=t;var i=hi;t=pi;var r=32-Bn(i)-1;i&=~(1<<r),n+=1;var s=32-Bn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,hi=1<<32-Bn(e)+r|n<<r|i,pi=s+t}else hi=1<<s|n<<r|i,pi=t}function Rd(t){t.return!==null&&(mr(t,1),f_(t,1,0))}function bd(t){for(;t===Ll;)Ll=ps[--ms],ps[ms]=null,Dl=ps[--ms],ps[ms]=null;for(;t===br;)br=Sn[--Mn],Sn[Mn]=null,pi=Sn[--Mn],Sn[Mn]=null,hi=Sn[--Mn],Sn[Mn]=null}var hn=null,dn=null,ft=!1,Fn=null;function d_(t,e){var n=wn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function sp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,hn=t,dn=Yi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,hn=t,dn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=br!==null?{id:hi,overflow:pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=wn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,hn=t,dn=null,!0):!1;default:return!1}}function Qc(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Jc(t){if(ft){var e=dn;if(e){var n=e;if(!sp(t,e)){if(Qc(t))throw Error(ee(418));e=Yi(n.nextSibling);var i=hn;e&&sp(t,e)?d_(i,n):(t.flags=t.flags&-4097|2,ft=!1,hn=t)}}else{if(Qc(t))throw Error(ee(418));t.flags=t.flags&-4097|2,ft=!1,hn=t}}}function op(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;hn=t}function Ea(t){if(t!==hn)return!1;if(!ft)return op(t),ft=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Yc(t.type,t.memoizedProps)),e&&(e=dn)){if(Qc(t))throw h_(),Error(ee(418));for(;e;)d_(t,e),e=Yi(e.nextSibling)}if(op(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){dn=Yi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}dn=null}}else dn=hn?Yi(t.stateNode.nextSibling):null;return!0}function h_(){for(var t=dn;t;)t=Yi(t.nextSibling)}function Ns(){dn=hn=null,ft=!1}function Pd(t){Fn===null?Fn=[t]:Fn.push(t)}var ey=Ai.ReactCurrentBatchConfig;function no(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Ta(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function ap(t){var e=t._init;return e(t._payload)}function p_(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=Qi(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,x){return g===null||g.tag!==6?(g=Gu(v,f.mode,x),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,x){var b=v.type;return b===ls?c(f,g,v.props.children,x,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fi&&ap(b)===g.type)?(x=r(g,v.props),x.ref=no(f,g,v),x.return=f,x):(x=hl(v.type,v.key,v.props,null,f.mode,x),x.ref=no(f,g,v),x.return=f,x)}function u(f,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=Wu(v,f.mode,x),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function c(f,g,v,x,b){return g===null||g.tag!==7?(g=Ar(v,f.mode,x,b),g.return=f,g):(g=r(g,v),g.return=f,g)}function h(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Gu(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ha:return v=hl(g.type,g.key,g.props,null,f.mode,v),v.ref=no(f,null,g),v.return=f,v;case as:return g=Wu(g,f.mode,v),g.return=f,g;case Fi:var x=g._init;return h(f,x(g._payload),v)}if(_o(g)||Zs(g))return g=Ar(g,f.mode,v,null),g.return=f,g;Ta(f,g)}return null}function d(f,g,v,x){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(f,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:return v.key===b?l(f,g,v,x):null;case as:return v.key===b?u(f,g,v,x):null;case Fi:return b=v._init,d(f,g,b(v._payload),x)}if(_o(v)||Zs(v))return b!==null?null:c(f,g,v,x,null);Ta(f,v)}return null}function p(f,g,v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(v)||null,a(g,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ha:return f=f.get(x.key===null?v:x.key)||null,l(g,f,x,b);case as:return f=f.get(x.key===null?v:x.key)||null,u(g,f,x,b);case Fi:var C=x._init;return p(f,g,v,C(x._payload),b)}if(_o(x)||Zs(x))return f=f.get(v)||null,c(g,f,x,b,null);Ta(g,x)}return null}function _(f,g,v,x){for(var b=null,C=null,w=g,R=g=0,T=null;w!==null&&R<v.length;R++){w.index>R?(T=w,w=null):T=w.sibling;var S=d(f,w,v[R],x);if(S===null){w===null&&(w=T);break}t&&w&&S.alternate===null&&e(f,w),g=s(S,g,R),C===null?b=S:C.sibling=S,C=S,w=T}if(R===v.length)return n(f,w),ft&&mr(f,R),b;if(w===null){for(;R<v.length;R++)w=h(f,v[R],x),w!==null&&(g=s(w,g,R),C===null?b=w:C.sibling=w,C=w);return ft&&mr(f,R),b}for(w=i(f,w);R<v.length;R++)T=p(w,f,R,v[R],x),T!==null&&(t&&T.alternate!==null&&w.delete(T.key===null?R:T.key),g=s(T,g,R),C===null?b=T:C.sibling=T,C=T);return t&&w.forEach(function(P){return e(f,P)}),ft&&mr(f,R),b}function y(f,g,v,x){var b=Zs(v);if(typeof b!="function")throw Error(ee(150));if(v=b.call(v),v==null)throw Error(ee(151));for(var C=b=null,w=g,R=g=0,T=null,S=v.next();w!==null&&!S.done;R++,S=v.next()){w.index>R?(T=w,w=null):T=w.sibling;var P=d(f,w,S.value,x);if(P===null){w===null&&(w=T);break}t&&w&&P.alternate===null&&e(f,w),g=s(P,g,R),C===null?b=P:C.sibling=P,C=P,w=T}if(S.done)return n(f,w),ft&&mr(f,R),b;if(w===null){for(;!S.done;R++,S=v.next())S=h(f,S.value,x),S!==null&&(g=s(S,g,R),C===null?b=S:C.sibling=S,C=S);return ft&&mr(f,R),b}for(w=i(f,w);!S.done;R++,S=v.next())S=p(w,f,R,S.value,x),S!==null&&(t&&S.alternate!==null&&w.delete(S.key===null?R:S.key),g=s(S,g,R),C===null?b=S:C.sibling=S,C=S);return t&&w.forEach(function(W){return e(f,W)}),ft&&mr(f,R),b}function m(f,g,v,x){if(typeof v=="object"&&v!==null&&v.type===ls&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ha:e:{for(var b=v.key,C=g;C!==null;){if(C.key===b){if(b=v.type,b===ls){if(C.tag===7){n(f,C.sibling),g=r(C,v.props.children),g.return=f,f=g;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Fi&&ap(b)===C.type){n(f,C.sibling),g=r(C,v.props),g.ref=no(f,C,v),g.return=f,f=g;break e}n(f,C);break}else e(f,C);C=C.sibling}v.type===ls?(g=Ar(v.props.children,f.mode,x,v.key),g.return=f,f=g):(x=hl(v.type,v.key,v.props,null,f.mode,x),x.ref=no(f,g,v),x.return=f,f=x)}return o(f);case as:e:{for(C=v.key;g!==null;){if(g.key===C)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=Wu(v,f.mode,x),g.return=f,f=g}return o(f);case Fi:return C=v._init,m(f,g,C(v._payload),x)}if(_o(v))return _(f,g,v,x);if(Zs(v))return y(f,g,v,x);Ta(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=Gu(v,f.mode,x),g.return=f,f=g),o(f)):n(f,g)}return m}var Is=p_(!0),m_=p_(!1),Nl=or(null),Il=null,gs=null,Ld=null;function Dd(){Ld=gs=Il=null}function Nd(t){var e=Nl.current;ct(Nl),t._currentValue=e}function ef(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ws(t,e){Il=t,Ld=gs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(tn=!0),t.firstContext=null)}function Cn(t){var e=t._currentValue;if(Ld!==t)if(t={context:t,memoizedValue:e,next:null},gs===null){if(Il===null)throw Error(ee(308));gs=t,Il.dependencies={lanes:0,firstContext:t}}else gs=gs.next=t;return e}var Sr=null;function Id(t){Sr===null?Sr=[t]:Sr.push(t)}function g_(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Id(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ki=!1;function Ud(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function __(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function _i(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Id(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function al(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yd(t,n)}}function lp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ul(t,e,n,i){var r=t.updateQueue;ki=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,c=u=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=gt({},h,d);break e;case 2:ki=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=h):c=c.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(c===null&&(l=h),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Lr|=o,t.lanes=o,t.memoizedState=h}}function up(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var sa={},ei=or(sa),Xo=or(sa),jo=or(sa);function Mr(t){if(t===sa)throw Error(ee(174));return t}function Od(t,e){switch(st(jo,e),st(Xo,t),st(ei,sa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ic(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ic(e,t)}ct(ei),st(ei,e)}function Us(){ct(ei),ct(Xo),ct(jo)}function v_(t){Mr(jo.current);var e=Mr(ei.current),n=Ic(e,t.type);e!==n&&(st(Xo,t),st(ei,n))}function Fd(t){Xo.current===t&&(ct(ei),ct(Xo))}var ht=or(0);function Ol(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Fu=[];function kd(){for(var t=0;t<Fu.length;t++)Fu[t]._workInProgressVersionPrimary=null;Fu.length=0}var ll=Ai.ReactCurrentDispatcher,ku=Ai.ReactCurrentBatchConfig,Pr=0,mt=null,At=null,Lt=null,Fl=!1,Co=!1,$o=0,ty=0;function Ft(){throw Error(ee(321))}function zd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Bd(t,e,n,i,r,s){if(Pr=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ll.current=t===null||t.memoizedState===null?sy:oy,t=n(i,r),Co){s=0;do{if(Co=!1,$o=0,25<=s)throw Error(ee(301));s+=1,Lt=At=null,e.updateQueue=null,ll.current=ay,t=n(i,r)}while(Co)}if(ll.current=kl,e=At!==null&&At.next!==null,Pr=0,Lt=At=mt=null,Fl=!1,e)throw Error(ee(300));return t}function Hd(){var t=$o!==0;return $o=0,t}function $n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function Rn(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Yo(t,e){return typeof e=="function"?e(t):e}function zu(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Pr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var h={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,mt.lanes|=c,Lr|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Lr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Bu(t){var e=Rn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function x_(){}function y_(t,e){var n=mt,i=Rn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,tn=!0),i=i.queue,Vd(E_.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,qo(9,M_.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ee(349));Pr&30||S_(n,e,r)}return r}function S_(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function M_(t,e,n,i){e.value=n,e.getSnapshot=i,T_(e)&&w_(t)}function E_(t,e,n){return n(function(){T_(e)&&w_(t)})}function T_(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function w_(t){var e=Mi(t,1);e!==null&&Hn(e,t,1,-1)}function cp(t){var e=$n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Yo,lastRenderedState:t},e.queue=t,t=t.dispatch=ry.bind(null,mt,t),[e.memoizedState,t]}function qo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function A_(){return Rn().memoizedState}function ul(t,e,n,i){var r=$n();mt.flags|=t,r.memoizedState=qo(1|e,n,void 0,i===void 0?null:i)}function iu(t,e,n,i){var r=Rn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&zd(i,o.deps)){r.memoizedState=qo(e,n,s,i);return}}mt.flags|=t,r.memoizedState=qo(1|e,n,s,i)}function fp(t,e){return ul(8390656,8,t,e)}function Vd(t,e){return iu(2048,8,t,e)}function C_(t,e){return iu(4,2,t,e)}function R_(t,e){return iu(4,4,t,e)}function b_(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function P_(t,e,n){return n=n!=null?n.concat([t]):null,iu(4,4,b_.bind(null,e,t),n)}function Gd(){}function L_(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function D_(t,e){var n=Rn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&zd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function N_(t,e,n){return Pr&21?(Wn(n,e)||(n=kg(),mt.lanes|=n,Lr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,tn=!0),t.memoizedState=n)}function ny(t,e){var n=et;et=n!==0&&4>n?n:4,t(!0);var i=ku.transition;ku.transition={};try{t(!1),e()}finally{et=n,ku.transition=i}}function I_(){return Rn().memoizedState}function iy(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},U_(t))O_(e,n);else if(n=g_(t,e,n,i),n!==null){var r=Yt();Hn(n,t,i,r),F_(n,e,i)}}function ry(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(U_(t))O_(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,Id(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=g_(t,e,r,i),n!==null&&(r=Yt(),Hn(n,t,i,r),F_(n,e,i))}}function U_(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function O_(t,e){Co=Fl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function F_(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,yd(t,n)}}var kl={readContext:Cn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},sy={readContext:Cn,useCallback:function(t,e){return $n().memoizedState=[t,e===void 0?null:e],t},useContext:Cn,useEffect:fp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,ul(4194308,4,b_.bind(null,e,t),n)},useLayoutEffect:function(t,e){return ul(4194308,4,t,e)},useInsertionEffect:function(t,e){return ul(4,2,t,e)},useMemo:function(t,e){var n=$n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=$n();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=iy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=$n();return t={current:t},e.memoizedState=t},useState:cp,useDebugValue:Gd,useDeferredValue:function(t){return $n().memoizedState=t},useTransition:function(){var t=cp(!1),e=t[0];return t=ny.bind(null,t[1]),$n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=$n();if(ft){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Dt===null)throw Error(ee(349));Pr&30||S_(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,fp(E_.bind(null,i,s,t),[t]),i.flags|=2048,qo(9,M_.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=$n(),e=Dt.identifierPrefix;if(ft){var n=pi,i=hi;n=(i&~(1<<32-Bn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=$o++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=ty++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},oy={readContext:Cn,useCallback:L_,useContext:Cn,useEffect:Vd,useImperativeHandle:P_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:D_,useReducer:zu,useRef:A_,useState:function(){return zu(Yo)},useDebugValue:Gd,useDeferredValue:function(t){var e=Rn();return N_(e,At.memoizedState,t)},useTransition:function(){var t=zu(Yo)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1},ay={readContext:Cn,useCallback:L_,useContext:Cn,useEffect:Vd,useImperativeHandle:P_,useInsertionEffect:C_,useLayoutEffect:R_,useMemo:D_,useReducer:Bu,useRef:A_,useState:function(){return Bu(Yo)},useDebugValue:Gd,useDeferredValue:function(t){var e=Rn();return At===null?e.memoizedState=t:N_(e,At.memoizedState,t)},useTransition:function(){var t=Bu(Yo)[0],e=Rn().memoizedState;return[t,e]},useMutableSource:x_,useSyncExternalStore:y_,useId:I_,unstable_isNewReconciler:!1};function Un(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function tf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var ru={isMounted:function(t){return(t=t._reactInternals)?Fr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Zi(t),s=_i(i,r);s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Hn(e,t,r,i),al(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Yt(),r=Zi(t),s=_i(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=qi(t,s,r),e!==null&&(Hn(e,t,r,i),al(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Yt(),i=Zi(t),r=_i(n,i);r.tag=2,e!=null&&(r.callback=e),e=qi(t,r,i),e!==null&&(Hn(e,t,i,n),al(e,t,i))}};function dp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ho(n,i)||!Ho(r,s):!0}function k_(t,e,n){var i=!1,r=nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Cn(s):(r=rn(e)?Rr:Gt.current,i=e.contextTypes,s=(i=i!=null)?Ds(t,r):nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=ru,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function hp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&ru.enqueueReplaceState(e,e.state,null)}function nf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Ud(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Cn(s):(s=rn(e)?Rr:Gt.current,r.context=Ds(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(tf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&ru.enqueueReplaceState(r,r.state,null),Ul(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Os(t,e){try{var n="",i=e;do n+=U0(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Hu(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function rf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var ly=typeof WeakMap=="function"?WeakMap:Map;function z_(t,e,n){n=_i(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Bl||(Bl=!0,pf=i),rf(t,e)},n}function B_(t,e,n){n=_i(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){rf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){rf(t,e),typeof i!="function"&&(Ki===null?Ki=new Set([this]):Ki.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function pp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new ly;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=My.bind(null,t,e,n),e.then(t,t))}function mp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function gp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=_i(-1,1),e.tag=2,qi(n,e,1))),n.lanes|=1),t)}var uy=Ai.ReactCurrentOwner,tn=!1;function $t(t,e,n,i){e.child=t===null?m_(e,null,n,i):Is(e,t.child,n,i)}function _p(t,e,n,i,r){n=n.render;var s=e.ref;return ws(e,r),i=Bd(t,e,n,i,s,r),n=Hd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ft&&n&&Rd(e),e.flags|=1,$t(t,e,i,r),e.child)}function vp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Zd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,H_(t,e,s,i,r)):(t=hl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ho,n(o,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=Qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function H_(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ho(s,i)&&t.ref===e.ref)if(tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(tn=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return sf(t,e,n,i,r)}function V_(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},st(vs,fn),fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,st(vs,fn),fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,st(vs,fn),fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,st(vs,fn),fn|=i;return $t(t,e,r,n),e.child}function G_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function sf(t,e,n,i,r){var s=rn(n)?Rr:Gt.current;return s=Ds(e,s),ws(e,r),n=Bd(t,e,n,i,s,r),i=Hd(),t!==null&&!tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(ft&&i&&Rd(e),e.flags|=1,$t(t,e,n,r),e.child)}function xp(t,e,n,i,r){if(rn(n)){var s=!0;Pl(e)}else s=!1;if(ws(e,r),e.stateNode===null)cl(t,e),k_(e,n,i),nf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Cn(u):(u=rn(n)?Rr:Gt.current,u=Ds(e,u));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&hp(e,o,i,u),ki=!1;var d=e.memoizedState;o.state=d,Ul(e,i,o,r),l=e.memoizedState,a!==i||d!==l||nn.current||ki?(typeof c=="function"&&(tf(e,n,c,i),l=e.memoizedState),(a=ki||dp(e,n,a,i,d,l,u))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,__(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:Un(e.type,a),o.props=u,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Cn(l):(l=rn(n)?Rr:Gt.current,l=Ds(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&hp(e,o,i,l),ki=!1,d=e.memoizedState,o.state=d,Ul(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||nn.current||ki?(typeof p=="function"&&(tf(e,n,p,i),_=e.memoizedState),(u=ki||dp(e,n,u,i,d,_,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return of(t,e,n,i,s,r)}function of(t,e,n,i,r,s){G_(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&rp(e,n,!1),Ei(t,e,s);i=e.stateNode,uy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Is(e,t.child,null,s),e.child=Is(e,null,a,s)):$t(t,e,a,s),e.memoizedState=i.state,r&&rp(e,n,!0),e.child}function W_(t){var e=t.stateNode;e.pendingContext?ip(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ip(t,e.context,!1),Od(t,e.containerInfo)}function yp(t,e,n,i,r){return Ns(),Pd(r),e.flags|=256,$t(t,e,n,i),e.child}var af={dehydrated:null,treeContext:null,retryLane:0};function lf(t){return{baseLanes:t,cachePool:null,transitions:null}}function X_(t,e,n){var i=e.pendingProps,r=ht.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),st(ht,r&1),t===null)return Jc(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=au(o,i,0,null),t=Ar(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=lf(n),e.memoizedState=af,t):Wd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return cy(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Qi(a,s):(s=Ar(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?lf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=af,i}return s=t.child,t=s.sibling,i=Qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Wd(t,e){return e=au({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function wa(t,e,n,i){return i!==null&&Pd(i),Is(e,t.child,null,n),t=Wd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function cy(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Hu(Error(ee(422))),wa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=au({mode:"visible",children:i.children},r,0,null),s=Ar(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Is(e,t.child,null,o),e.child.memoizedState=lf(o),e.memoizedState=af,s);if(!(e.mode&1))return wa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Hu(s,i,void 0),wa(t,e,o,i)}if(a=(o&t.childLanes)!==0,tn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),Hn(i,t,r,-1))}return Kd(),i=Hu(Error(ee(421))),wa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=Ey.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,dn=Yi(r.nextSibling),hn=e,ft=!0,Fn=null,t!==null&&(Sn[Mn++]=hi,Sn[Mn++]=pi,Sn[Mn++]=br,hi=t.id,pi=t.overflow,br=e),e=Wd(e,i.children),e.flags|=4096,e)}function Sp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),ef(t.return,e,n)}function Vu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function j_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if($t(t,e,i.children,n),i=ht.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Sp(t,n,e);else if(t.tag===19)Sp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(st(ht,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Ol(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Vu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Ol(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Vu(e,!0,n,null,s);break;case"together":Vu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function cl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Lr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=Qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function fy(t,e,n){switch(e.tag){case 3:W_(e),Ns();break;case 5:v_(e);break;case 1:rn(e.type)&&Pl(e);break;case 4:Od(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;st(Nl,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(st(ht,ht.current&1),e.flags|=128,null):n&e.child.childLanes?X_(t,e,n):(st(ht,ht.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);st(ht,ht.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return j_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),st(ht,ht.current),i)break;return null;case 22:case 23:return e.lanes=0,V_(t,e,n)}return Ei(t,e,n)}var $_,uf,Y_,q_;$_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};uf=function(){};Y_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Mr(ei.current);var s=null;switch(n){case"input":r=Pc(t,r),i=Pc(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Nc(t,r),i=Nc(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Rl)}Uc(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Io.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Io.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};q_=function(t,e,n,i){n!==i&&(e.flags|=4)};function io(t,e){if(!ft)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function dy(t,e,n){var i=e.pendingProps;switch(bd(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return rn(e.type)&&bl(),kt(e),null;case 3:return i=e.stateNode,Us(),ct(nn),ct(Gt),kd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ea(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Fn!==null&&(_f(Fn),Fn=null))),uf(t,e),kt(e),null;case 5:Fd(e);var r=Mr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Y_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return kt(e),null}if(t=Mr(ei.current),Ea(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[Wo]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<xo.length;r++)ut(xo[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Ph(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Dh(i,s),ut("invalid",i)}Uc(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&Ma(i.textContent,a,t),r=["children",""+a]):Io.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":pa(i),Lh(i,s,!0);break;case"textarea":pa(i),Nh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Rl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Eg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[Wo]=i,$_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Oc(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<xo.length;r++)ut(xo[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Ph(t,i),r=Pc(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Dh(t,i),r=Nc(t,i),ut("invalid",t);break;default:r=i}Uc(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ag(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Tg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Uo(t,l):typeof l=="number"&&Uo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Io.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&pd(t,s,l,o))}switch(n){case"input":pa(t),Lh(t,i,!1);break;case"textarea":pa(t),Nh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+tr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Ss(t,!!i.multiple,s,!1):i.defaultValue!=null&&Ss(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Rl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)q_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=Mr(jo.current),Mr(ei.current),Ea(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=hn,t!==null))switch(t.tag){case 3:Ma(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ma(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return kt(e),null;case 13:if(ct(ht),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(ft&&dn!==null&&e.mode&1&&!(e.flags&128))h_(),Ns(),e.flags|=98560,s=!1;else if(s=Ea(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[qn]=e}else Ns(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else Fn!==null&&(_f(Fn),Fn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||ht.current&1?Ct===0&&(Ct=3):Kd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Us(),uf(t,e),t===null&&Vo(e.stateNode.containerInfo),kt(e),null;case 10:return Nd(e.type._context),kt(e),null;case 17:return rn(e.type)&&bl(),kt(e),null;case 19:if(ct(ht),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)io(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Ol(t),o!==null){for(e.flags|=128,io(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return st(ht,ht.current&1|2),e.child}t=t.sibling}s.tail!==null&&yt()>Fs&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304)}else{if(!i)if(t=Ol(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),io(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!ft)return kt(e),null}else 2*yt()-s.renderingStartTime>Fs&&n!==1073741824&&(e.flags|=128,i=!0,io(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=yt(),e.sibling=null,n=ht.current,st(ht,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return qd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?fn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function hy(t,e){switch(bd(e),e.tag){case 1:return rn(e.type)&&bl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Us(),ct(nn),ct(Gt),kd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Fd(e),null;case 13:if(ct(ht),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));Ns()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ct(ht),null;case 4:return Us(),null;case 10:return Nd(e.type._context),null;case 22:case 23:return qd(),null;case 24:return null;default:return null}}var Aa=!1,Ht=!1,py=typeof WeakSet=="function"?WeakSet:Set,he=null;function _s(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function cf(t,e,n){try{n()}catch(i){vt(t,e,i)}}var Mp=!1;function my(t,e){if(jc=wl,t=e_(),Cd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++u===r&&(a=o),d===s&&++c===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for($c={focusedElem:t,selectionRange:n},wl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:Un(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){vt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=Mp,Mp=!1,_}function Ro(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&cf(e,n,s)}r=r.next}while(r!==i)}}function su(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function ff(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function K_(t){var e=t.alternate;e!==null&&(t.alternate=null,K_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[Wo],delete e[Kc],delete e[Zx],delete e[Qx])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Z_(t){return t.tag===5||t.tag===3||t.tag===4}function Ep(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Z_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function df(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Rl));else if(i!==4&&(t=t.child,t!==null))for(df(t,e,n),t=t.sibling;t!==null;)df(t,e,n),t=t.sibling}function hf(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(hf(t,e,n),t=t.sibling;t!==null;)hf(t,e,n),t=t.sibling}var Nt=null,On=!1;function Pi(t,e,n){for(n=n.child;n!==null;)Q_(t,e,n),n=n.sibling}function Q_(t,e,n){if(Jn&&typeof Jn.onCommitFiberUnmount=="function")try{Jn.onCommitFiberUnmount(Zl,n)}catch{}switch(n.tag){case 5:Ht||_s(n,e);case 6:var i=Nt,r=On;Nt=null,Pi(t,e,n),Nt=i,On=r,Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(On?(t=Nt,n=n.stateNode,t.nodeType===8?Uu(t.parentNode,n):t.nodeType===1&&Uu(t,n),zo(t)):Uu(Nt,n.stateNode));break;case 4:i=Nt,r=On,Nt=n.stateNode.containerInfo,On=!0,Pi(t,e,n),Nt=i,On=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&cf(n,e,o),r=r.next}while(r!==i)}Pi(t,e,n);break;case 1:if(!Ht&&(_s(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Pi(t,e,n);break;case 21:Pi(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Pi(t,e,n),Ht=i):Pi(t,e,n);break;default:Pi(t,e,n)}}function Tp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new py),e.forEach(function(i){var r=Ty.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Ln(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,On=!1;break e;case 3:Nt=a.stateNode.containerInfo,On=!0;break e;case 4:Nt=a.stateNode.containerInfo,On=!0;break e}a=a.return}if(Nt===null)throw Error(ee(160));Q_(s,o,r),Nt=null,On=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){vt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)J_(e,t),e=e.sibling}function J_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Ln(e,t),jn(t),i&4){try{Ro(3,t,t.return),su(3,t)}catch(y){vt(t,t.return,y)}try{Ro(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Ln(e,t),jn(t),i&512&&n!==null&&_s(n,n.return);break;case 5:if(Ln(e,t),jn(t),i&512&&n!==null&&_s(n,n.return),t.flags&32){var r=t.stateNode;try{Uo(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Sg(r,s),Oc(a,o);var u=Oc(a,s);for(o=0;o<l.length;o+=2){var c=l[o],h=l[o+1];c==="style"?Ag(r,h):c==="dangerouslySetInnerHTML"?Tg(r,h):c==="children"?Uo(r,h):pd(r,c,h,u)}switch(a){case"input":Lc(r,s);break;case"textarea":Mg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Ss(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?Ss(r,!!s.multiple,s.defaultValue,!0):Ss(r,!!s.multiple,s.multiple?[]:"",!1))}r[Wo]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Ln(e,t),jn(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Ln(e,t),jn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{zo(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Ln(e,t),jn(t);break;case 13:Ln(e,t),jn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||($d=yt())),i&4&&Tp(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(u=Ht)||c,Ln(e,t),Ht=u):Ln(e,t),jn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(he=t,c=t.child;c!==null;){for(h=he=c;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:Ro(4,d,d.return);break;case 1:_s(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:_s(d,d.return);break;case 22:if(d.memoizedState!==null){Ap(h);continue}}p!==null?(p.return=d,he=p):Ap(h)}c=c.sibling}e:for(c=null,h=t;;){if(h.tag===5){if(c===null){c=h;try{r=h.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=wg("display",o))}catch(y){vt(t,t.return,y)}}}else if(h.tag===6){if(c===null)try{h.stateNode.nodeValue=u?"":h.memoizedProps}catch(y){vt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;c===h&&(c=null),h=h.return}c===h&&(c=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Ln(e,t),jn(t),i&4&&Tp(t);break;case 21:break;default:Ln(e,t),jn(t)}}function jn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Z_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Uo(r,""),i.flags&=-33);var s=Ep(t);hf(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Ep(t);df(t,a,o);break;default:throw Error(ee(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function gy(t,e,n){he=t,ev(t)}function ev(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Aa;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Aa;var u=Ht;if(Aa=o,(Ht=l)&&!u)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Cp(r):l!==null?(l.return=o,he=l):Cp(r);for(;s!==null;)he=s,ev(s),s=s.sibling;he=r,Aa=a,Ht=u}wp(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):wp(t)}}function wp(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||su(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:Un(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&up(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}up(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var h=c.dehydrated;h!==null&&zo(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ht||e.flags&512&&ff(e)}catch(d){vt(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function Ap(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Cp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{su(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{ff(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{ff(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var _y=Math.ceil,zl=Ai.ReactCurrentDispatcher,Xd=Ai.ReactCurrentOwner,An=Ai.ReactCurrentBatchConfig,je=0,Dt=null,Tt=null,It=0,fn=0,vs=or(0),Ct=0,Ko=null,Lr=0,ou=0,jd=0,bo=null,en=null,$d=0,Fs=1/0,ci=null,Bl=!1,pf=null,Ki=null,Ca=!1,Wi=null,Hl=0,Po=0,mf=null,fl=-1,dl=0;function Yt(){return je&6?yt():fl!==-1?fl:fl=yt()}function Zi(t){return t.mode&1?je&2&&It!==0?It&-It:ey.transition!==null?(dl===0&&(dl=kg()),dl):(t=et,t!==0||(t=window.event,t=t===void 0?16:Xg(t.type)),t):1}function Hn(t,e,n,i){if(50<Po)throw Po=0,mf=null,Error(ee(185));na(t,n,i),(!(je&2)||t!==Dt)&&(t===Dt&&(!(je&2)&&(ou|=n),Ct===4&&Hi(t,It)),sn(t,i),n===1&&je===0&&!(e.mode&1)&&(Fs=yt()+500,nu&&ar()))}function sn(t,e){var n=t.callbackNode;ex(t,e);var i=Tl(t,t===Dt?It:0);if(i===0)n!==null&&Oh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Oh(n),e===1)t.tag===0?Jx(Rp.bind(null,t)):c_(Rp.bind(null,t)),qx(function(){!(je&6)&&ar()}),n=null;else{switch(zg(i)){case 1:n=xd;break;case 4:n=Og;break;case 16:n=El;break;case 536870912:n=Fg;break;default:n=El}n=lv(n,tv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function tv(t,e){if(fl=-1,dl=0,je&6)throw Error(ee(327));var n=t.callbackNode;if(As()&&t.callbackNode!==n)return null;var i=Tl(t,t===Dt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Vl(t,i);else{e=i;var r=je;je|=2;var s=iv();(Dt!==t||It!==e)&&(ci=null,Fs=yt()+500,wr(t,e));do try{yy();break}catch(a){nv(t,a)}while(!0);Dd(),zl.current=s,je=r,Tt!==null?e=0:(Dt=null,It=0,e=Ct)}if(e!==0){if(e===2&&(r=Hc(t),r!==0&&(i=r,e=gf(t,r))),e===1)throw n=Ko,wr(t,0),Hi(t,i),sn(t,yt()),n;if(e===6)Hi(t,i);else{if(r=t.current.alternate,!(i&30)&&!vy(r)&&(e=Vl(t,i),e===2&&(s=Hc(t),s!==0&&(i=s,e=gf(t,s))),e===1))throw n=Ko,wr(t,0),Hi(t,i),sn(t,yt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:gr(t,en,ci);break;case 3:if(Hi(t,i),(i&130023424)===i&&(e=$d+500-yt(),10<e)){if(Tl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Yt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=qc(gr.bind(null,t,en,ci),e);break}gr(t,en,ci);break;case 4:if(Hi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Bn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=yt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*_y(i/1960))-i,10<i){t.timeoutHandle=qc(gr.bind(null,t,en,ci),i);break}gr(t,en,ci);break;case 5:gr(t,en,ci);break;default:throw Error(ee(329))}}}return sn(t,yt()),t.callbackNode===n?tv.bind(null,t):null}function gf(t,e){var n=bo;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Vl(t,e),t!==2&&(e=en,en=n,e!==null&&_f(e)),t}function _f(t){en===null?en=t:en.push.apply(en,t)}function vy(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function Hi(t,e){for(e&=~jd,e&=~ou,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Bn(e),i=1<<n;t[n]=-1,e&=~i}}function Rp(t){if(je&6)throw Error(ee(327));As();var e=Tl(t,0);if(!(e&1))return sn(t,yt()),null;var n=Vl(t,e);if(t.tag!==0&&n===2){var i=Hc(t);i!==0&&(e=i,n=gf(t,i))}if(n===1)throw n=Ko,wr(t,0),Hi(t,e),sn(t,yt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,gr(t,en,ci),sn(t,yt()),null}function Yd(t,e){var n=je;je|=1;try{return t(e)}finally{je=n,je===0&&(Fs=yt()+500,nu&&ar())}}function Dr(t){Wi!==null&&Wi.tag===0&&!(je&6)&&As();var e=je;je|=1;var n=An.transition,i=et;try{if(An.transition=null,et=1,t)return t()}finally{et=i,An.transition=n,je=e,!(je&6)&&ar()}}function qd(){fn=vs.current,ct(vs)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Yx(n)),Tt!==null)for(n=Tt.return;n!==null;){var i=n;switch(bd(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&bl();break;case 3:Us(),ct(nn),ct(Gt),kd();break;case 5:Fd(i);break;case 4:Us();break;case 13:ct(ht);break;case 19:ct(ht);break;case 10:Nd(i.type._context);break;case 22:case 23:qd()}n=n.return}if(Dt=t,Tt=t=Qi(t.current,null),It=fn=e,Ct=0,Ko=null,jd=ou=Lr=0,en=bo=null,Sr!==null){for(e=0;e<Sr.length;e++)if(n=Sr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Sr=null}return t}function nv(t,e){do{var n=Tt;try{if(Dd(),ll.current=kl,Fl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Fl=!1}if(Pr=0,Lt=At=mt=null,Co=!1,$o=0,Xd.current=null,n===null||n.return===null){Ct=1,Ko=e,Tt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,h=c.tag;if(!(c.mode&1)&&(h===0||h===11||h===15)){var d=c.alternate;d?(c.updateQueue=d.updateQueue,c.memoizedState=d.memoizedState,c.lanes=d.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=mp(o);if(p!==null){p.flags&=-257,gp(p,o,a,s,e),p.mode&1&&pp(s,u,e),e=p,l=u;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){pp(s,u,e),Kd();break e}l=Error(ee(426))}}else if(ft&&a.mode&1){var m=mp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),gp(m,o,a,s,e),Pd(Os(l,a));break e}}s=l=Os(l,a),Ct!==4&&(Ct=2),bo===null?bo=[s]:bo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=z_(s,l,e);lp(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Ki===null||!Ki.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=B_(s,a,e);lp(s,x);break e}}s=s.return}while(s!==null)}sv(n)}catch(b){e=b,Tt===n&&n!==null&&(Tt=n=n.return);continue}break}while(!0)}function iv(){var t=zl.current;return zl.current=kl,t===null?kl:t}function Kd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Lr&268435455)&&!(ou&268435455)||Hi(Dt,It)}function Vl(t,e){var n=je;je|=2;var i=iv();(Dt!==t||It!==e)&&(ci=null,wr(t,e));do try{xy();break}catch(r){nv(t,r)}while(!0);if(Dd(),je=n,zl.current=i,Tt!==null)throw Error(ee(261));return Dt=null,It=0,Ct}function xy(){for(;Tt!==null;)rv(Tt)}function yy(){for(;Tt!==null&&!X0();)rv(Tt)}function rv(t){var e=av(t.alternate,t,fn);t.memoizedProps=t.pendingProps,e===null?sv(t):Tt=e,Xd.current=null}function sv(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=hy(n,e),n!==null){n.flags&=32767,Tt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,Tt=null;return}}else if(n=dy(n,e,fn),n!==null){Tt=n;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=t}while(e!==null);Ct===0&&(Ct=5)}function gr(t,e,n){var i=et,r=An.transition;try{An.transition=null,et=1,Sy(t,e,n,i)}finally{An.transition=r,et=i}return null}function Sy(t,e,n,i){do As();while(Wi!==null);if(je&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(tx(t,s),t===Dt&&(Tt=Dt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Ca||(Ca=!0,lv(El,function(){return As(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=An.transition,An.transition=null;var o=et;et=1;var a=je;je|=4,Xd.current=null,my(t,n),J_(n,t),Hx($c),wl=!!jc,$c=jc=null,t.current=n,gy(n),j0(),je=a,et=o,An.transition=s}else t.current=n;if(Ca&&(Ca=!1,Wi=t,Hl=r),s=t.pendingLanes,s===0&&(Ki=null),q0(n.stateNode),sn(t,yt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Bl)throw Bl=!1,t=pf,pf=null,t;return Hl&1&&t.tag!==0&&As(),s=t.pendingLanes,s&1?t===mf?Po++:(Po=0,mf=t):Po=0,ar(),null}function As(){if(Wi!==null){var t=zg(Hl),e=An.transition,n=et;try{if(An.transition=null,et=16>t?16:t,Wi===null)var i=!1;else{if(t=Wi,Wi=null,Hl=0,je&6)throw Error(ee(331));var r=je;for(je|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(he=u;he!==null;){var c=he;switch(c.tag){case 0:case 11:case 15:Ro(8,c,s)}var h=c.child;if(h!==null)h.return=c,he=h;else for(;he!==null;){c=he;var d=c.sibling,p=c.return;if(K_(c),c===u){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Ro(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:su(9,a)}}catch(b){vt(a,a.return,b)}if(a===o){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if(je=r,ar(),Jn&&typeof Jn.onPostCommitFiberRoot=="function")try{Jn.onPostCommitFiberRoot(Zl,t)}catch{}i=!0}return i}finally{et=n,An.transition=e}}return!1}function bp(t,e,n){e=Os(n,e),e=z_(t,e,1),t=qi(t,e,1),e=Yt(),t!==null&&(na(t,1,e),sn(t,e))}function vt(t,e,n){if(t.tag===3)bp(t,t,n);else for(;e!==null;){if(e.tag===3){bp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Ki===null||!Ki.has(i))){t=Os(n,t),t=B_(e,t,1),e=qi(e,t,1),t=Yt(),e!==null&&(na(e,1,t),sn(e,t));break}}e=e.return}}function My(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Yt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(It&n)===n&&(Ct===4||Ct===3&&(It&130023424)===It&&500>yt()-$d?wr(t,0):jd|=n),sn(t,e)}function ov(t,e){e===0&&(t.mode&1?(e=_a,_a<<=1,!(_a&130023424)&&(_a=4194304)):e=1);var n=Yt();t=Mi(t,e),t!==null&&(na(t,e,n),sn(t,n))}function Ey(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),ov(t,n)}function Ty(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),ov(t,n)}var av;av=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||nn.current)tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return tn=!1,fy(t,e,n);tn=!!(t.flags&131072)}else tn=!1,ft&&e.flags&1048576&&f_(e,Dl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;cl(t,e),t=e.pendingProps;var r=Ds(e,Gt.current);ws(e,n),r=Bd(null,e,i,t,r,n);var s=Hd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,rn(i)?(s=!0,Pl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Ud(e),r.updater=ru,e.stateNode=r,r._reactInternals=e,nf(e,i,t,n),e=of(null,e,i,!0,s,n)):(e.tag=0,ft&&s&&Rd(e),$t(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(cl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Ay(i),t=Un(i,t),r){case 0:e=sf(null,e,i,t,n);break e;case 1:e=xp(null,e,i,t,n);break e;case 11:e=_p(null,e,i,t,n);break e;case 14:e=vp(null,e,i,Un(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),sf(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),xp(t,e,i,r,n);case 3:e:{if(W_(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,__(t,e),Ul(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Os(Error(ee(423)),e),e=yp(t,e,i,n,r);break e}else if(i!==r){r=Os(Error(ee(424)),e),e=yp(t,e,i,n,r);break e}else for(dn=Yi(e.stateNode.containerInfo.firstChild),hn=e,ft=!0,Fn=null,n=m_(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ns(),i===r){e=Ei(t,e,n);break e}$t(t,e,i,n)}e=e.child}return e;case 5:return v_(e),t===null&&Jc(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Yc(i,r)?o=null:s!==null&&Yc(i,s)&&(e.flags|=32),G_(t,e),$t(t,e,o,n),e.child;case 6:return t===null&&Jc(e),null;case 13:return X_(t,e,n);case 4:return Od(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Is(e,null,i,n):$t(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),_p(t,e,i,r,n);case 7:return $t(t,e,e.pendingProps,n),e.child;case 8:return $t(t,e,e.pendingProps.children,n),e.child;case 12:return $t(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,st(Nl,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!nn.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=_i(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),ef(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),ef(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}$t(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ws(e,n),r=Cn(r),i=i(r),e.flags|=1,$t(t,e,i,n),e.child;case 14:return i=e.type,r=Un(i,e.pendingProps),r=Un(i.type,r),vp(t,e,i,r,n);case 15:return H_(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:Un(i,r),cl(t,e),e.tag=1,rn(i)?(t=!0,Pl(e)):t=!1,ws(e,n),k_(e,i,r),nf(e,i,r,n),of(null,e,i,!0,t,n);case 19:return j_(t,e,n);case 22:return V_(t,e,n)}throw Error(ee(156,e.tag))};function lv(t,e){return Ug(t,e)}function wy(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function wn(t,e,n,i){return new wy(t,e,n,i)}function Zd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Ay(t){if(typeof t=="function")return Zd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===gd)return 11;if(t===_d)return 14}return 2}function Qi(t,e){var n=t.alternate;return n===null?(n=wn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Zd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ls:return Ar(n.children,r,s,e);case md:o=8,r|=8;break;case Ac:return t=wn(12,n,e,r|2),t.elementType=Ac,t.lanes=s,t;case Cc:return t=wn(13,n,e,r),t.elementType=Cc,t.lanes=s,t;case Rc:return t=wn(19,n,e,r),t.elementType=Rc,t.lanes=s,t;case vg:return au(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case gg:o=10;break e;case _g:o=9;break e;case gd:o=11;break e;case _d:o=14;break e;case Fi:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=wn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Ar(t,e,n,i){return t=wn(7,t,i,e),t.lanes=n,t}function au(t,e,n,i){return t=wn(22,t,i,e),t.elementType=vg,t.lanes=n,t.stateNode={isHidden:!1},t}function Gu(t,e,n){return t=wn(6,t,null,e),t.lanes=n,t}function Wu(t,e,n){return e=wn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Cy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Tu(0),this.expirationTimes=Tu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Tu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Qd(t,e,n,i,r,s,o,a,l){return t=new Cy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=wn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ud(s),t}function Ry(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:as,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function uv(t){if(!t)return nr;t=t._reactInternals;e:{if(Fr(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(rn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(rn(n))return u_(t,n,e)}return e}function cv(t,e,n,i,r,s,o,a,l){return t=Qd(n,i,!0,t,r,s,o,a,l),t.context=uv(null),n=t.current,i=Yt(),r=Zi(n),s=_i(i,r),s.callback=e??null,qi(n,s,r),t.current.lanes=r,na(t,r,i),sn(t,i),t}function lu(t,e,n,i){var r=e.current,s=Yt(),o=Zi(r);return n=uv(n),e.context===null?e.context=n:e.pendingContext=n,e=_i(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=qi(r,e,o),t!==null&&(Hn(t,r,o,s),al(t,r,o)),o}function Gl(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Pp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Jd(t,e){Pp(t,e),(t=t.alternate)&&Pp(t,e)}function by(){return null}var fv=typeof reportError=="function"?reportError:function(t){console.error(t)};function eh(t){this._internalRoot=t}uu.prototype.render=eh.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));lu(t,e,null,null)};uu.prototype.unmount=eh.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Dr(function(){lu(null,t,null,null)}),e[Si]=null}};function uu(t){this._internalRoot=t}uu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Vg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Bi.length&&e!==0&&e<Bi[n].priority;n++);Bi.splice(n,0,t),n===0&&Wg(t)}};function th(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function cu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Lp(){}function Py(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Gl(o);s.call(u)}}var o=cv(e,i,t,0,null,!1,!1,"",Lp);return t._reactRootContainer=o,t[Si]=o.current,Vo(t.nodeType===8?t.parentNode:t),Dr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Gl(l);a.call(u)}}var l=Qd(t,0,!1,null,null,!1,!1,"",Lp);return t._reactRootContainer=l,t[Si]=l.current,Vo(t.nodeType===8?t.parentNode:t),Dr(function(){lu(e,l,n,i)}),l}function fu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Gl(o);a.call(l)}}lu(e,o,t,r)}else o=Py(n,e,t,r,i);return Gl(o)}Bg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=vo(e.pendingLanes);n!==0&&(yd(e,n|1),sn(e,yt()),!(je&6)&&(Fs=yt()+500,ar()))}break;case 13:Dr(function(){var i=Mi(t,1);if(i!==null){var r=Yt();Hn(i,t,1,r)}}),Jd(t,1)}};Sd=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=Yt();Hn(e,t,134217728,n)}Jd(t,134217728)}};Hg=function(t){if(t.tag===13){var e=Zi(t),n=Mi(t,e);if(n!==null){var i=Yt();Hn(n,t,e,i)}Jd(t,e)}};Vg=function(){return et};Gg=function(t,e){var n=et;try{return et=t,e()}finally{et=n}};kc=function(t,e,n){switch(e){case"input":if(Lc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=tu(i);if(!r)throw Error(ee(90));yg(i),Lc(i,r)}}}break;case"textarea":Mg(t,n);break;case"select":e=n.value,e!=null&&Ss(t,!!n.multiple,e,!1)}};bg=Yd;Pg=Dr;var Ly={usingClientEntryPoint:!1,Events:[ra,ds,tu,Cg,Rg,Yd]},ro={findFiberByHostInstance:yr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dy={bundleType:ro.bundleType,version:ro.version,rendererPackageName:ro.rendererPackageName,rendererConfig:ro.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ai.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Ng(t),t===null?null:t.stateNode},findFiberByHostInstance:ro.findFiberByHostInstance||by,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ra=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ra.isDisabled&&Ra.supportsFiber)try{Zl=Ra.inject(Dy),Jn=Ra}catch{}}mn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ly;mn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!th(e))throw Error(ee(200));return Ry(t,e,null,n)};mn.createRoot=function(t,e){if(!th(t))throw Error(ee(299));var n=!1,i="",r=fv;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Qd(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Vo(t.nodeType===8?t.parentNode:t),new eh(e)};mn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Ng(e),t=t===null?null:t.stateNode,t};mn.flushSync=function(t){return Dr(t)};mn.hydrate=function(t,e,n){if(!cu(e))throw Error(ee(200));return fu(null,t,e,!0,n)};mn.hydrateRoot=function(t,e,n){if(!th(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=fv;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=cv(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Vo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new uu(e)};mn.render=function(t,e,n){if(!cu(e))throw Error(ee(200));return fu(null,t,e,!1,n)};mn.unmountComponentAtNode=function(t){if(!cu(t))throw Error(ee(40));return t._reactRootContainer?(Dr(function(){fu(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};mn.unstable_batchedUpdates=Yd;mn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!cu(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return fu(t,e,n,!1,i)};mn.version="18.3.1-next-f1338f8080-20240426";function dv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(dv)}catch(t){console.error(t)}}dv(),dg.exports=mn;var Ny=dg.exports,Dp=Ny;Tc.createRoot=Dp.createRoot,Tc.hydrateRoot=Dp.hydrateRoot;const Iy=(...t)=>{console!=null&&console.warn&&(Cr(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},Np={},vf=(...t)=>{Cr(t[0])&&Np[t[0]]||(Cr(t[0])&&(Np[t[0]]=new Date),Iy(...t))},hv=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Ip=(t,e,n)=>{t.loadNamespaces(e,hv(t,n))},Up=(t,e,n,i)=>{Cr(n)&&(n=[n]),n.forEach(r=>{t.options.ns.indexOf(r)<0&&t.options.ns.push(r)}),t.loadLanguages(e,hv(t,i))},Uy=(t,e,n={})=>!e.languages||!e.languages.length?(vf("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,r)=>{var s;if(((s=n.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,t))return!1}}),Cr=t=>typeof t=="string",Oy=t=>typeof t=="object"&&t!==null,Fy=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,ky={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},zy=t=>ky[t],By=t=>t.replace(Fy,zy);let xf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:By};const Hy=(t={})=>{xf={...xf,...t}},Vy=()=>xf;let pv;const Gy=t=>{pv=t},Wy=()=>pv,Xy={type:"3rdParty",init(t){Hy(t.options.react),Gy(t)}},jy=pt.createContext();class $y{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const Yy=(t,e)=>{const n=pt.useRef();return pt.useEffect(()=>{n.current=t},[t,e]),n.current},mv=(t,e,n,i)=>t.getFixedT(e,n,i),qy=(t,e,n,i)=>pt.useCallback(mv(t,e,n,i),[t,e,n,i]),du=(t,e={})=>{var x,b,C,w;const{i18n:n}=e,{i18n:i,defaultNS:r}=pt.useContext(jy)||{},s=n||i||Wy();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new $y),!s){vf("You will need to pass in an i18next instance by using initReactI18next");const R=(S,P)=>Cr(P)?P:Oy(P)&&Cr(P.defaultValue)?P.defaultValue:Array.isArray(S)?S[S.length-1]:S,T=[R,{},!1];return T.t=R,T.i18n={},T.ready=!1,T}(x=s.options.react)!=null&&x.wait&&vf("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...Vy(),...s.options.react,...e},{useSuspense:a,keyPrefix:l}=o;let u=r||((b=s.options)==null?void 0:b.defaultNS);u=Cr(u)?[u]:u||["translation"],(w=(C=s.reportNamespaces).addUsedNamespaces)==null||w.call(C,u);const c=(s.isInitialized||s.initializedStoreOnce)&&u.every(R=>Uy(R,s,o)),h=qy(s,e.lng||null,o.nsMode==="fallback"?u:u[0],l),d=()=>h,p=()=>mv(s,e.lng||null,o.nsMode==="fallback"?u:u[0],l),[_,y]=pt.useState(d);let m=u.join();e.lng&&(m=`${e.lng}${m}`);const f=Yy(m),g=pt.useRef(!0);pt.useEffect(()=>{const{bindI18n:R,bindI18nStore:T}=o;g.current=!0,!c&&!a&&(e.lng?Up(s,e.lng,u,()=>{g.current&&y(p)}):Ip(s,u,()=>{g.current&&y(p)})),c&&f&&f!==m&&g.current&&y(p);const S=()=>{g.current&&y(p)};return R&&(s==null||s.on(R,S)),T&&(s==null||s.store.on(T,S)),()=>{g.current=!1,s&&(R==null||R.split(" ").forEach(P=>s.off(P,S))),T&&s&&T.split(" ").forEach(P=>s.store.off(P,S))}},[s,m]),pt.useEffect(()=>{g.current&&c&&y(d)},[s,l,c]);const v=[_,s,c];if(v.t=_,v.i18n=s,v.ready=c,c||!c&&!a)return v;throw new Promise(R=>{e.lng?Up(s,e.lng,u,()=>R()):Ip(s,u,()=>R())})};var gv={exports:{}},Ky="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Zy=Ky,Qy=Zy;function _v(){}function vv(){}vv.resetWarningCache=_v;var Jy=function(){function t(i,r,s,o,a,l){if(l!==Qy){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:vv,resetWarningCache:_v};return n.PropTypes=n,n};gv.exports=Jy();var eS=gv.exports;const tS=a0(eS);function xv({sections:t}){const[e,n]=pt.useState(0);return pt.useEffect(()=>{const i=document.querySelectorAll(".section"),r={root:null,rootMargin:"0px",threshold:.5},s=a=>{a.forEach(l=>{if(l.isIntersecting){const u=Array.from(i).indexOf(l.target);n(u)}})},o=new IntersectionObserver(s,r);return i.forEach(a=>o.observe(a)),()=>{i.forEach(a=>o.unobserve(a))}},[]),de.jsx("div",{className:"fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2 section-indicator",children:t.map((i,r)=>de.jsx("div",{className:`w-2 h-2 md:w-4 md:h-4 rounded-full ${r===e?"bg-primary":"border border-primary"}`},r))})}xv.propTypes={sections:tS.array.isRequired};const nS=()=>{const{i18n:t}=du(),e=n=>{t.changeLanguage(n).then(i=>null)};return pt.useEffect(()=>{const n=document.getElementById("toggleSwitch"),i=document.getElementById("languageText");if(n)return n.addEventListener("click",function(){n.classList.contains("french")?(e("en"),n.classList.remove("french"),n.classList.add("english"),i.innerText="EN"):(e("fr"),n.classList.remove("english"),n.classList.add("french"),i.innerText="FR")}),()=>{n.removeEventListener("click",function(){})}},[]),de.jsx("div",{className:"toggle-switch french cursor-pointer my-auto",id:"toggleSwitch",children:de.jsx("p",{id:"languageText",className:"text-lg text-primary hover:text-slate-800 transition ease-in delay-50",children:"FR"})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const nh="170",Cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},xs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},iS=0,Op=1,rS=2,yv=1,sS=2,ui=3,ir=0,on=1,di=2,Ji=0,Rs=1,Fp=2,kp=3,zp=4,oS=5,vr=100,aS=101,lS=102,uS=103,cS=104,fS=200,dS=201,hS=202,pS=203,yf=204,Sf=205,mS=206,gS=207,_S=208,vS=209,xS=210,yS=211,SS=212,MS=213,ES=214,Mf=0,Ef=1,Tf=2,ks=3,wf=4,Af=5,Cf=6,Rf=7,Sv=0,TS=1,wS=2,er=0,AS=1,CS=2,RS=3,bS=4,PS=5,LS=6,DS=7,Mv=300,zs=301,Bs=302,bf=303,Pf=304,hu=306,Lf=1e3,Er=1001,Df=1002,Vn=1003,NS=1004,ba=1005,Kn=1006,Xu=1007,Tr=1008,Ti=1009,Ev=1010,Tv=1011,Zo=1012,ih=1013,Nr=1014,mi=1015,oa=1016,rh=1017,sh=1018,Hs=1020,wv=35902,Av=1021,Cv=1022,zn=1023,Rv=1024,bv=1025,bs=1026,Vs=1027,Pv=1028,oh=1029,Lv=1030,ah=1031,lh=1033,pl=33776,ml=33777,gl=33778,_l=33779,Nf=35840,If=35841,Uf=35842,Of=35843,Ff=36196,kf=37492,zf=37496,Bf=37808,Hf=37809,Vf=37810,Gf=37811,Wf=37812,Xf=37813,jf=37814,$f=37815,Yf=37816,qf=37817,Kf=37818,Zf=37819,Qf=37820,Jf=37821,vl=36492,ed=36494,td=36495,Dv=36283,nd=36284,id=36285,rd=36286,IS=3200,US=3201,OS=0,FS=1,Vi="",yn="srgb",$s="srgb-linear",pu="linear",tt="srgb",Hr=7680,Bp=519,kS=512,zS=513,BS=514,Nv=515,HS=516,VS=517,GS=518,WS=519,sd=35044,Hp="300 es",gi=2e3,Wl=2001;class kr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vp=1234567;const Lo=Math.PI/180,Qo=180/Math.PI;function vi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function uh(t,e){return(t%e+e)%e}function XS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function jS(t,e,n){return t!==e?(n-t)/(e-t):0}function Do(t,e,n){return(1-n)*t+n*e}function $S(t,e,n,i){return Do(t,e,1-Math.exp(-n*i))}function YS(t,e=1){return e-Math.abs(uh(t,e*2)-e)}function qS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function KS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function ZS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function QS(t,e){return t+Math.random()*(e-t)}function JS(t){return t*(.5-Math.random())}function eM(t){t!==void 0&&(Vp=t);let e=Vp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function tM(t){return t*Lo}function nM(t){return t*Qo}function iM(t){return(t&t-1)===0&&t!==0}function rM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function sM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function oM(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*h,l*d,a*u);break;case"YZY":t.set(l*d,a*c,l*h,a*u);break;case"ZXZ":t.set(l*h,l*d,a*c,a*u);break;case"XZX":t.set(a*c,l*_,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*_,a*u);break;case"ZYZ":t.set(l*_,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function kn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Qe(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const aM={DEG2RAD:Lo,RAD2DEG:Qo,generateUUID:vi,clamp:Vt,euclideanModulo:uh,mapLinear:XS,inverseLerp:jS,lerp:Do,damp:$S,pingpong:YS,smoothstep:qS,smootherstep:KS,randInt:ZS,randFloat:QS,randFloatSpread:JS,seededRandom:eM,degToRad:tM,radToDeg:nM,isPowerOfTwo:iM,ceilPowerOfTwo:rM,floorPowerOfTwo:sM,setQuaternionFromProperEuler:oM,normalize:Qe,denormalize:kn};class be{constructor(e=0,n=0){be.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,n,i,r,s,o,a,l,u){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],h=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],f=r[6],g=r[1],v=r[4],x=r[7],b=r[2],C=r[5],w=r[8];return s[0]=o*y+a*g+l*b,s[3]=o*m+a*v+l*C,s[6]=o*f+a*x+l*w,s[1]=u*y+c*g+h*b,s[4]=u*m+c*v+h*C,s[7]=u*f+c*x+h*w,s[2]=d*y+p*g+_*b,s[5]=d*m+p*v+_*C,s[8]=d*f+p*x+_*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=c*o-a*u,d=a*l-c*s,p=u*s-o*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(ju.makeScale(e,n)),this}rotate(e){return this.premultiply(ju.makeRotation(-e)),this}translate(e,n){return this.premultiply(ju.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const ju=new Ue;function Iv(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Jo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function lM(){const t=Jo("canvas");return t.style.display="block",t}const Gp={};function yo(t){t in Gp||(Gp[t]=!0,console.warn(t))}function uM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function cM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function fM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Xe={enabled:!0,workingColorSpace:$s,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===tt&&(t.r=xi(t.r),t.g=xi(t.g),t.b=xi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===tt&&(t.r=Ps(t.r),t.g=Ps(t.g),t.b=Ps(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Vi?pu:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Ps(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Wp=[.64,.33,.3,.6,.15,.06],Xp=[.2126,.7152,.0722],jp=[.3127,.329],$p=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yp=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Xe.define({[$s]:{primaries:Wp,whitePoint:jp,transfer:pu,toXYZ:$p,fromXYZ:Yp,luminanceCoefficients:Xp,workingColorSpaceConfig:{unpackColorSpace:yn},outputColorSpaceConfig:{drawingBufferColorSpace:yn}},[yn]:{primaries:Wp,whitePoint:jp,transfer:tt,toXYZ:$p,fromXYZ:Yp,luminanceCoefficients:Xp,outputColorSpaceConfig:{drawingBufferColorSpace:yn}}});let Vr;class dM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Vr===void 0&&(Vr=Jo("canvas")),Vr.width=e.width,Vr.height=e.height;const i=Vr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Vr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Jo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let hM=0;class Uv{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=vi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push($u(r[o].image)):s.push($u(r[o]))}else s=$u(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function $u(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?dM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let pM=0;class qt extends kr{constructor(e=qt.DEFAULT_IMAGE,n=qt.DEFAULT_MAPPING,i=Er,r=Er,s=Kn,o=Tr,a=zn,l=Ti,u=qt.DEFAULT_ANISOTROPY,c=Vi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=vi(),this.name="",this.source=new Uv(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new be(0,0),this.repeat=new be(1,1),this.center=new be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lf:e.x=e.x-Math.floor(e.x);break;case Er:e.x=e.x<0?0:1;break;case Df:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lf:e.y=e.y-Math.floor(e.y);break;case Er:e.y=e.y<0?0:1;break;case Df:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}qt.DEFAULT_IMAGE=null;qt.DEFAULT_MAPPING=Mv;qt.DEFAULT_ANISOTROPY=1;class St{constructor(e=0,n=0,i=0,r=1){St.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],h=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(c-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(c+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(u+1)/2,x=(p+1)/2,b=(f+1)/2,C=(c+d)/4,w=(h+y)/4,R=(_+m)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=C/i,s=w/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=C/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(d-c)*(d-c));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-y)/g,this.z=(d-c)/g,this.w=Math.acos((u+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mM extends kr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Uv(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ir extends mM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class Ov extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gM extends qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=Er,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ur{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==d||u!==p||c!==_){let m=1-a;const f=l*d+u*p+c*_+h*y,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),C=Math.atan2(b,f*g);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const x=a*g;if(l=l*m+d*x,u=u*m+p*x,c=c*m+_*x,h=h*m+y*x,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+h*h);l*=b,u*=b,c*=b,h*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+c*h+l*p-u*d,e[n+1]=l*_+c*d+u*h-a*p,e[n+2]=u*_+c*p+a*d-l*h,e[n+3]=c*_-a*h-l*d-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*c*h+u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h-d*p*_;break;case"YXZ":this._x=d*c*h+u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h+d*p*_;break;case"ZXY":this._x=d*c*h-u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h-d*p*_;break;case"ZYX":this._x=d*c*h-u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h+d*p*_;break;case"YZX":this._x=d*c*h+u*p*_,this._y=u*p*h+d*c*_,this._z=u*c*_-d*p*h,this._w=u*c*h-d*p*_;break;case"XZY":this._x=d*c*h-u*p*_,this._y=u*p*h-d*c*_,this._z=u*c*_+d*p*h,this._w=u*c*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),h=Math.sin((1-n)*c)/u,d=Math.sin(n*c)/u;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(qp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(qp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*u+o*h-a*c,this.y=i+l*c+a*u-s*h,this.z=r+l*h+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Yu.copy(this).projectOnVector(e),this.sub(Yu)}reflect(e){return this.sub(Yu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Yu=new O,qp=new Ur;class aa{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Dn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Dn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Dn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Dn):Dn.fromBufferAttribute(s,o),Dn.applyMatrix4(e.matrixWorld),this.expandByPoint(Dn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Pa.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Pa.copy(i.boundingBox)),Pa.applyMatrix4(e.matrixWorld),this.union(Pa)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Dn),Dn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(so),La.subVectors(this.max,so),Gr.subVectors(e.a,so),Wr.subVectors(e.b,so),Xr.subVectors(e.c,so),Li.subVectors(Wr,Gr),Di.subVectors(Xr,Wr),ur.subVectors(Gr,Xr);let n=[0,-Li.z,Li.y,0,-Di.z,Di.y,0,-ur.z,ur.y,Li.z,0,-Li.x,Di.z,0,-Di.x,ur.z,0,-ur.x,-Li.y,Li.x,0,-Di.y,Di.x,0,-ur.y,ur.x,0];return!qu(n,Gr,Wr,Xr,La)||(n=[1,0,0,0,1,0,0,0,1],!qu(n,Gr,Wr,Xr,La))?!1:(Da.crossVectors(Li,Di),n=[Da.x,Da.y,Da.z],qu(n,Gr,Wr,Xr,La))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Dn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Dn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ri[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ri[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ri[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ri[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ri[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ri[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ri[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ri[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ri),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ri=[new O,new O,new O,new O,new O,new O,new O,new O],Dn=new O,Pa=new aa,Gr=new O,Wr=new O,Xr=new O,Li=new O,Di=new O,ur=new O,so=new O,La=new O,Da=new O,cr=new O;function qu(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){cr.fromArray(t,s);const a=r.x*Math.abs(cr.x)+r.y*Math.abs(cr.y)+r.z*Math.abs(cr.z),l=e.dot(cr),u=n.dot(cr),c=i.dot(cr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const _M=new aa,oo=new O,Ku=new O;class ch{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_M.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oo.subVectors(e,this.center);const n=oo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(oo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ku.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oo.copy(e.center).add(Ku)),this.expandByPoint(oo.copy(e.center).sub(Ku))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const si=new O,Zu=new O,Na=new O,Ni=new O,Qu=new O,Ia=new O,Ju=new O;class Fv{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,si)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=si.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(si.copy(this.origin).addScaledVector(this.direction,n),si.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Zu.copy(e).add(n).multiplyScalar(.5),Na.copy(n).sub(e).normalize(),Ni.copy(this.origin).sub(Zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Na),a=Ni.dot(this.direction),l=-Ni.dot(Na),u=Ni.lengthSq(),c=Math.abs(1-o*o);let h,d,p,_;if(c>0)if(h=o*l-a,d=o*a-l,_=s*c,h>=0)if(d>=-_)if(d<=_){const y=1/c;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+u}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+u):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+u);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(Zu).addScaledVector(Na,d),p}intersectSphere(e,n){si.subVectors(e.center,this.origin);const i=si.dot(this.direction),r=si.dot(si)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,h=1/this.direction.z,d=this.origin;return u>=0?(i=(e.min.x-d.x)*u,r=(e.max.x-d.x)*u):(i=(e.max.x-d.x)*u,r=(e.min.x-d.x)*u),c>=0?(s=(e.min.y-d.y)*c,o=(e.max.y-d.y)*c):(s=(e.max.y-d.y)*c,o=(e.min.y-d.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,si)!==null}intersectTriangle(e,n,i,r,s){Qu.subVectors(n,e),Ia.subVectors(i,e),Ju.crossVectors(Qu,Ia);let o=this.direction.dot(Ju),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ni.subVectors(this.origin,e);const l=a*this.direction.dot(Ia.crossVectors(Ni,Ia));if(l<0)return null;const u=a*this.direction.dot(Qu.cross(Ni));if(u<0||l+u>o)return null;const c=-a*Ni.dot(Ju);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,n,i,r,s,o,a,l,u,c,h,d,p,_,y,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,h,d,p,_,y,m)}set(e,n,i,r,s,o,a,l,u,c,h,d,p,_,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*c,p=o*h,_=a*c,y=a*h;n[0]=l*c,n[4]=-l*h,n[8]=u,n[1]=p+_*u,n[5]=d-y*u,n[9]=-a*l,n[2]=y-d*u,n[6]=_+p*u,n[10]=o*l}else if(e.order==="YXZ"){const d=l*c,p=l*h,_=u*c,y=u*h;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*u,n[1]=o*h,n[5]=o*c,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*c,p=l*h,_=u*c,y=u*h;n[0]=d-y*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*c,n[9]=y-d*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*c,p=o*h,_=a*c,y=a*h;n[0]=l*c,n[4]=_*u-p,n[8]=d*u+y,n[1]=l*h,n[5]=y*u+d,n[9]=p*u-_,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=y-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*h+_,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*u,_=a*l,y=a*u;n[0]=l*c,n[4]=-h,n[8]=u*c,n[1]=d*h+y,n[5]=o*c,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*c,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(vM,e,xM)}lookAt(e,n,i){const r=this.elements;return un.subVectors(e,n),un.lengthSq()===0&&(un.z=1),un.normalize(),Ii.crossVectors(i,un),Ii.lengthSq()===0&&(Math.abs(i.z)===1?un.x+=1e-4:un.z+=1e-4,un.normalize(),Ii.crossVectors(i,un)),Ii.normalize(),Ua.crossVectors(un,Ii),r[0]=Ii.x,r[4]=Ua.x,r[8]=un.x,r[1]=Ii.y,r[5]=Ua.y,r[9]=un.y,r[2]=Ii.z,r[6]=Ua.z,r[10]=un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],h=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],f=i[14],g=i[3],v=i[7],x=i[11],b=i[15],C=r[0],w=r[4],R=r[8],T=r[12],S=r[1],P=r[5],W=r[9],B=r[13],$=r[2],q=r[6],X=r[10],Q=r[14],L=r[3],V=r[7],Y=r[11],re=r[15];return s[0]=o*C+a*S+l*$+u*L,s[4]=o*w+a*P+l*q+u*V,s[8]=o*R+a*W+l*X+u*Y,s[12]=o*T+a*B+l*Q+u*re,s[1]=c*C+h*S+d*$+p*L,s[5]=c*w+h*P+d*q+p*V,s[9]=c*R+h*W+d*X+p*Y,s[13]=c*T+h*B+d*Q+p*re,s[2]=_*C+y*S+m*$+f*L,s[6]=_*w+y*P+m*q+f*V,s[10]=_*R+y*W+m*X+f*Y,s[14]=_*T+y*B+m*Q+f*re,s[3]=g*C+v*S+x*$+b*L,s[7]=g*w+v*P+x*q+b*V,s[11]=g*R+v*W+x*X+b*Y,s[15]=g*T+v*B+x*Q+b*re,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],h=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],f=e[15];return _*(+s*l*h-r*u*h-s*a*d+i*u*d+r*a*p-i*l*p)+y*(+n*l*p-n*u*d+s*o*d-r*o*p+r*u*c-s*l*c)+m*(+n*u*h-n*a*p-s*o*h+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-n*l*h+n*a*d+r*o*h-i*o*d+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],h=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],f=e[15],g=h*m*u-y*d*u+y*l*p-a*m*p-h*l*f+a*d*f,v=_*d*u-c*m*u-_*l*p+o*m*p+c*l*f-o*d*f,x=c*y*u-_*h*u+_*a*p-o*y*p-c*a*f+o*h*f,b=_*h*l-c*y*l-_*a*d+o*y*d+c*a*m-o*h*m,C=n*g+i*v+r*x+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=g*w,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*f-i*d*f)*w,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*f+i*l*f)*w,e[3]=(h*l*s-a*d*s-h*r*u+i*d*u+a*r*p-i*l*p)*w,e[4]=v*w,e[5]=(c*m*s-_*d*s+_*r*p-n*m*p-c*r*f+n*d*f)*w,e[6]=(_*l*s-o*m*s-_*r*u+n*m*u+o*r*f-n*l*f)*w,e[7]=(o*d*s-c*l*s+c*r*u-n*d*u-o*r*p+n*l*p)*w,e[8]=x*w,e[9]=(_*h*s-c*y*s-_*i*p+n*y*p+c*i*f-n*h*f)*w,e[10]=(o*y*s-_*a*s+_*i*u-n*y*u-o*i*f+n*a*f)*w,e[11]=(c*a*s-o*h*s-c*i*u+n*h*u+o*i*p-n*a*p)*w,e[12]=b*w,e[13]=(c*y*r-_*h*r+_*i*d-n*y*d-c*i*m+n*h*m)*w,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*w,e[15]=(o*h*r-c*a*r+c*i*l-n*h*l-o*i*d+n*a*d)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,h=a+a,d=s*u,p=s*c,_=s*h,y=o*c,m=o*h,f=a*h,g=l*u,v=l*c,x=l*h,b=i.x,C=i.y,w=i.z;return r[0]=(1-(y+f))*b,r[1]=(p+x)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-x)*C,r[5]=(1-(d+f))*C,r[6]=(m+g)*C,r[7]=0,r[8]=(_+v)*w,r[9]=(m-g)*w,r[10]=(1-(d+y))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Nn.copy(this);const u=1/s,c=1/o,h=1/a;return Nn.elements[0]*=u,Nn.elements[1]*=u,Nn.elements[2]*=u,Nn.elements[4]*=c,Nn.elements[5]*=c,Nn.elements[6]*=c,Nn.elements[8]*=h,Nn.elements[9]*=h,Nn.elements[10]*=h,n.setFromRotationMatrix(Nn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=gi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===gi)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Wl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=c,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=gi){const l=this.elements,u=1/(n-e),c=1/(i-r),h=1/(o-s),d=(n+e)*u,p=(i+r)*c;let _,y;if(a===gi)_=(o+s)*h,y=-2*h;else if(a===Wl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new O,Nn=new Mt,vM=new O(0,0,0),xM=new O(1,1,1),Ii=new O,Ua=new O,un=new O,Kp=new Mt,Zp=new Ur;class wi{constructor(e=0,n=0,i=0,r=wi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Zp.setFromEuler(this),this.setFromQuaternion(Zp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wi.DEFAULT_ORDER="XYZ";class kv{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let yM=0;const Qp=new O,$r=new Ur,oi=new Mt,Oa=new O,ao=new O,SM=new O,MM=new Ur,Jp=new O(1,0,0),em=new O(0,1,0),tm=new O(0,0,1),nm={type:"added"},EM={type:"removed"},Yr={type:"childadded",child:null},ec={type:"childremoved",child:null};class an extends kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new O,n=new wi,i=new Ur,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ue}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new kv,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.multiply($r),this}rotateOnWorldAxis(e,n){return $r.setFromAxisAngle(e,n),this.quaternion.premultiply($r),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis(em,e)}rotateZ(e){return this.rotateOnAxis(tm,e)}translateOnAxis(e,n){return Qp.copy(e).applyQuaternion(this.quaternion),this.position.add(Qp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis(em,e)}translateZ(e){return this.translateOnAxis(tm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Oa.copy(e):Oa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ao.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(ao,Oa,this.up):oi.lookAt(Oa,ao,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),$r.setFromRotationMatrix(oi),this.quaternion.premultiply($r.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(EM),ec.child=e,this.dispatchEvent(ec),ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nm),Yr.child=e,this.dispatchEvent(Yr),Yr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ao,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const h=l[u];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}an.DEFAULT_UP=new O(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new O,ai=new O,tc=new O,li=new O,qr=new O,Kr=new O,im=new O,nc=new O,ic=new O,rc=new O,sc=new St,oc=new St,ac=new St;class Tn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),In.subVectors(e,n),r.cross(In);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){In.subVectors(r,n),ai.subVectors(i,n),tc.subVectors(e,n);const o=In.dot(In),a=In.dot(ai),l=In.dot(tc),u=ai.dot(ai),c=ai.dot(tc),h=o*u-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(u*l-a*c)*d,_=(o*c-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,li)===null?!1:li.x>=0&&li.y>=0&&li.x+li.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,li)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,li.x),l.addScaledVector(o,li.y),l.addScaledVector(a,li.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return sc.setScalar(0),oc.setScalar(0),ac.setScalar(0),sc.fromBufferAttribute(e,n),oc.fromBufferAttribute(e,i),ac.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(sc,s.x),o.addScaledVector(oc,s.y),o.addScaledVector(ac,s.z),o}static isFrontFacing(e,n,i,r){return In.subVectors(i,n),ai.subVectors(e,n),In.cross(ai).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return In.subVectors(this.c,this.b),ai.subVectors(this.a,this.b),In.cross(ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Tn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Tn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Tn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Tn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Tn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;qr.subVectors(r,i),Kr.subVectors(s,i),nc.subVectors(e,i);const l=qr.dot(nc),u=Kr.dot(nc);if(l<=0&&u<=0)return n.copy(i);ic.subVectors(e,r);const c=qr.dot(ic),h=Kr.dot(ic);if(c>=0&&h<=c)return n.copy(r);const d=l*h-c*u;if(d<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(qr,o);rc.subVectors(e,s);const p=qr.dot(rc),_=Kr.dot(rc);if(_>=0&&p<=_)return n.copy(s);const y=p*u-l*_;if(y<=0&&u>=0&&_<=0)return a=u/(u-_),n.copy(i).addScaledVector(Kr,a);const m=c*_-p*h;if(m<=0&&h-c>=0&&p-_>=0)return im.subVectors(s,r),a=(h-c)/(h-c+(p-_)),n.copy(r).addScaledVector(im,a);const f=1/(m+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(qr,o).addScaledVector(Kr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const zv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ui={h:0,s:0,l:0},Fa={h:0,s:0,l:0};function lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=yn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Xe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Xe.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Xe.workingColorSpace){if(e=uh(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=lc(o,s,e+1/3),this.g=lc(o,s,e),this.b=lc(o,s,e-1/3)}return Xe.toWorkingColorSpace(this,r),this}setStyle(e,n=yn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=yn){const i=zv[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=Ps(e.r),this.g=Ps(e.g),this.b=Ps(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=yn){return Xe.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Vt(Bt.r*255,0,255))*65536+Math.round(Vt(Bt.g*255,0,255))*256+Math.round(Vt(Bt.b*255,0,255))}getHexString(e=yn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Xe.workingColorSpace){Xe.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const h=o-a;switch(u=c<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Xe.workingColorSpace){return Xe.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=yn){Xe.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==yn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ui),this.setHSL(Ui.h+e,Ui.s+n,Ui.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ui),e.getHSL(Fa);const i=Do(Ui.h,Fa.h,n),r=Do(Ui.s,Fa.s,n),s=Do(Ui.l,Fa.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new Je;Je.NAMES=zv;let TM=0;class la extends kr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=vi(),this.name="",this.blending=Rs,this.side=ir,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=yf,this.blendDst=Sf,this.blendEquation=vr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Je(0,0,0),this.blendAlpha=0,this.depthFunc=ks,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Bp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Hr,this.stencilZFail=Hr,this.stencilZPass=Hr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(i.blending=this.blending),this.side!==ir&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==yf&&(i.blendSrc=this.blendSrc),this.blendDst!==Sf&&(i.blendDst=this.blendDst),this.blendEquation!==vr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ks&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Bp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Hr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Hr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Hr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class fh extends la{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wi,this.combine=Sv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new O,ka=new be;class Gn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=sd,this.updateRanges=[],this.gpuType=mi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)ka.fromBufferAttribute(this,n),ka.applyMatrix3(e),this.setXY(n,ka.x,ka.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qe(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=kn(n,this.array)),n}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=kn(n,this.array)),n}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=kn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=kn(n,this.array)),n}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==sd&&(e.usage=this.usage),e}}class Bv extends Gn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Hv extends Gn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class ti extends Gn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let wM=0;const xn=new Mt,uc=new an,Zr=new O,cn=new aa,lo=new aa,Pt=new O;class Ci extends kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Iv(e)?Hv:Bv)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ue().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,n,i){return xn.makeTranslation(e,n,i),this.applyMatrix4(xn),this}scale(e,n,i){return xn.makeScale(e,n,i),this.applyMatrix4(xn),this}lookAt(e){return uc.lookAt(e),uc.updateMatrix(),this.applyMatrix4(uc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zr).negate(),this.translate(Zr.x,Zr.y,Zr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ti(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new aa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];cn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,cn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,cn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(cn.min),this.boundingBox.expandByPoint(cn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ch);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(cn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(cn.min,lo.min),cn.expandByPoint(Pt),Pt.addVectors(cn.max,lo.max),cn.expandByPoint(Pt)):(cn.expandByPoint(lo.min),cn.expandByPoint(lo.max))}cn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Pt.fromBufferAttribute(a,u),l&&(Zr.fromBufferAttribute(e,u),Pt.add(Zr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const u=new O,c=new O,h=new O,d=new be,p=new be,_=new be,y=new O,m=new O;function f(R,T,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,T),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,T),_.fromBufferAttribute(s,S),c.sub(u),h.sub(u),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(c).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(c,-_.x).multiplyScalar(P),a[R].add(y),a[T].add(y),a[S].add(y),l[R].add(m),l[T].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,T=g.length;R<T;++R){const S=g[R],P=S.start,W=S.count;for(let B=P,$=P+W;B<$;B+=3)f(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const v=new O,x=new O,b=new O,C=new O;function w(R){b.fromBufferAttribute(r,R),C.copy(b);const T=a[R];v.copy(T),v.sub(b.multiplyScalar(b.dot(T))).normalize(),x.crossVectors(C,T);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,T=g.length;R<T;++R){const S=g[R],P=S.start,W=S.count;for(let B=P,$=P+W;B<$;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Gn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,u=new O,c=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),c.subVectors(o,s),h.subVectors(r,s),c.cross(h),i.setXYZ(d+0,c.x,c.y,c.z),i.setXYZ(d+1,c.x,c.y,c.z),i.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,h=a.normalized,d=new u.constructor(l.length*c);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let f=0;f<c;f++)d[_++]=u[p++]}return new Gn(d,c,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Ci,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,h=u.length;c<h;c++){const d=u[c],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let h=0,d=u.length;h<d;h++){const p=u[h];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],h=s[u];for(let d=0,p=h.length;d<p;d++)c.push(h[d].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const h=o[u];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rm=new Mt,fr=new Fv,za=new ch,sm=new O,Ba=new O,Ha=new O,Va=new O,cc=new O,Ga=new O,om=new O,Wa=new O;class Zn extends an{constructor(e=new Ci,n=new fh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ga.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],h=s[l];c!==0&&(cc.fromBufferAttribute(h,e),o?Ga.addScaledVector(cc,c):Ga.addScaledVector(cc.sub(n),c))}n.add(Ga)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),za.copy(i.boundingSphere),za.applyMatrix4(s),fr.copy(e.ray).recast(e.near),!(za.containsPoint(fr.origin)===!1&&(fr.intersectSphere(za,sm)===null||fr.origin.distanceToSquared(sm)>(e.far-e.near)**2))&&(rm.copy(s).invert(),fr.copy(e.ray).applyMatrix4(rm),!(i.boundingBox!==null&&fr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,fr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=v;x<b;x+=3){const C=a.getX(x),w=a.getX(x+1),R=a.getX(x+2);r=Xa(this,f,e,i,u,c,h,C,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=Xa(this,o,e,i,u,c,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=v;x<b;x+=3){const C=x,w=x+1,R=x+2;r=Xa(this,f,e,i,u,c,h,C,w,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const g=m,v=m+1,x=m+2;r=Xa(this,o,e,i,u,c,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function AM(t,e,n,i,r,s,o,a){let l;if(e.side===on?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ir,a),l===null)return null;Wa.copy(a),Wa.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(Wa);return u<n.near||u>n.far?null:{distance:u,point:Wa.clone(),object:t}}function Xa(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,Ba),t.getVertexPosition(l,Ha),t.getVertexPosition(u,Va);const c=AM(t,e,n,i,Ba,Ha,Va,om);if(c){const h=new O;Tn.getBarycoord(om,Ba,Ha,Va,h),r&&(c.uv=Tn.getInterpolatedAttribute(r,a,l,u,h,new be)),s&&(c.uv1=Tn.getInterpolatedAttribute(s,a,l,u,h,new be)),o&&(c.normal=Tn.getInterpolatedAttribute(o,a,l,u,h,new O),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new O,materialIndex:0};Tn.getNormal(Ba,Ha,Va,d.normal),c.face=d,c.barycoord=h}return c}class ua extends Ci{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new ti(u,3)),this.setAttribute("normal",new ti(c,3)),this.setAttribute("uv",new ti(h,2));function _(y,m,f,g,v,x,b,C,w,R,T){const S=x/w,P=b/R,W=x/2,B=b/2,$=C/2,q=w+1,X=R+1;let Q=0,L=0;const V=new O;for(let Y=0;Y<X;Y++){const re=Y*P-B;for(let Se=0;Se<q;Se++){const $e=Se*S-W;V[y]=$e*g,V[m]=re*v,V[f]=$,u.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[f]=C>0?1:-1,c.push(V.x,V.y,V.z),h.push(Se/w),h.push(1-Y/R),Q+=1}}for(let Y=0;Y<R;Y++)for(let re=0;re<w;re++){const Se=d+re+q*Y,$e=d+re+q*(Y+1),G=d+(re+1)+q*(Y+1),te=d+(re+1)+q*Y;l.push(Se,$e,te),l.push($e,G,te),L+=6}a.addGroup(p,L,T),p+=L,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ua(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Gs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function jt(t){const e={};for(let n=0;n<t.length;n++){const i=Gs(t[n]);for(const r in i)e[r]=i[r]}return e}function CM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Vv(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const RM={clone:Gs,merge:jt};var bM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,PM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rr extends la{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bM,this.fragmentShader=PM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=CM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Gv extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=gi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new O,am=new be,lm=new be;class En extends Gv{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Qo*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Qo*2*Math.atan(Math.tan(Lo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Oi.x,Oi.y).multiplyScalar(-e/Oi.z)}getViewSize(e,n){return this.getViewBounds(e,am,lm),n.subVectors(lm,am)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Qr=-90,Jr=1;class LM extends an{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new En(Qr,Jr,e,n);r.layers=this.layers,this.add(r);const s=new En(Qr,Jr,e,n);s.layers=this.layers,this.add(s);const o=new En(Qr,Jr,e,n);o.layers=this.layers,this.add(o);const a=new En(Qr,Jr,e,n);a.layers=this.layers,this.add(a);const l=new En(Qr,Jr,e,n);l.layers=this.layers,this.add(l);const u=new En(Qr,Jr,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===gi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Wl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Wv extends qt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:zs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class DM extends Ir{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Wv(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Kn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ua(5,5,5),s=new rr({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:on,blending:Ji});s.uniforms.tEquirect.value=n;const o=new Zn(r,s),a=n.minFilter;return n.minFilter===Tr&&(n.minFilter=Kn),new LM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const fc=new O,NM=new O,IM=new Ue;class zi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=fc.subVectors(i,n).cross(NM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(fc),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||IM.getNormalMatrix(e),r=this.coplanarPoint(fc).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const dr=new ch,ja=new O;class Xv{constructor(e=new zi,n=new zi,i=new zi,r=new zi,s=new zi,o=new zi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=gi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],h=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],f=r[12],g=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,d-u,m-p,x-f).normalize(),i[1].setComponents(l+s,d+u,m+p,x+f).normalize(),i[2].setComponents(l+o,d+c,m+_,x+g).normalize(),i[3].setComponents(l-o,d-c,m-_,x-g).normalize(),i[4].setComponents(l-a,d-h,m-y,x-v).normalize(),n===gi)i[5].setComponents(l+a,d+h,m+y,x+v).normalize();else if(n===Wl)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),dr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),dr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(dr)}intersectsSprite(e){return dr.center.set(0,0,0),dr.radius=.7071067811865476,dr.applyMatrix4(e.matrixWorld),this.intersectsSphere(dr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ja.x=r.normal.x>0?e.max.x:e.min.x,ja.y=r.normal.y>0?e.max.y:e.min.y,ja.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ja)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jv(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function UM(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,h=u.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:d,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,u){const c=l.array,h=l.updateRanges;if(t.bindBuffer(u,a),h.length===0)t.bufferSubData(u,0,c);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class mu extends Ci{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,h=e/a,d=n/l,p=[],_=[],y=[],m=[];for(let f=0;f<c;f++){const g=f*d-o;for(let v=0;v<u;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+u*f,x=g+u*(f+1),b=g+1+u*(f+1),C=g+1+u*f;p.push(v,x,C),p.push(x,b,C)}this.setIndex(p),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(y,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mu(e.width,e.height,e.widthSegments,e.heightSegments)}}var OM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,FM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,kM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,BM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,HM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,VM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,GM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,WM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,XM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,jM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,$M=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,YM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,qM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,KM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,ZM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,QM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,JM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,rE=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,sE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,oE=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,aE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,uE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,cE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dE="gl_FragColor = linearToOutputTexel( gl_FragColor );",hE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,mE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,_E=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,xE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,yE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,SE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ME=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,EE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,TE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,CE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,RE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,bE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,PE=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,LE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,DE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,NE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,IE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,UE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,OE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,FE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,kE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,zE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,BE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,HE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,VE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,GE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,WE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,XE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,jE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,$E=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,qE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ZE=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,QE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,JE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,e1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,t1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,n1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,i1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,r1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,s1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,o1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,a1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,l1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,u1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,c1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,f1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,d1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,h1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,p1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,m1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,g1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,v1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,x1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,y1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,S1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,M1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,E1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,T1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,w1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,A1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,C1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,R1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,P1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,L1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,D1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,N1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,I1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const U1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,O1=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,k1=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,z1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,B1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,H1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,V1=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,G1=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,W1=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,X1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,j1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$1=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Y1=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,q1=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,K1=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Z1=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Q1=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,J1=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,eT=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tT=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nT=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iT=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rT=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sT=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,oT=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aT=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lT=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,uT=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,cT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fT=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,dT=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,hT=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pT=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fe={alphahash_fragment:OM,alphahash_pars_fragment:FM,alphamap_fragment:kM,alphamap_pars_fragment:zM,alphatest_fragment:BM,alphatest_pars_fragment:HM,aomap_fragment:VM,aomap_pars_fragment:GM,batching_pars_vertex:WM,batching_vertex:XM,begin_vertex:jM,beginnormal_vertex:$M,bsdfs:YM,iridescence_fragment:qM,bumpmap_pars_fragment:KM,clipping_planes_fragment:ZM,clipping_planes_pars_fragment:QM,clipping_planes_pars_vertex:JM,clipping_planes_vertex:eE,color_fragment:tE,color_pars_fragment:nE,color_pars_vertex:iE,color_vertex:rE,common:sE,cube_uv_reflection_fragment:oE,defaultnormal_vertex:aE,displacementmap_pars_vertex:lE,displacementmap_vertex:uE,emissivemap_fragment:cE,emissivemap_pars_fragment:fE,colorspace_fragment:dE,colorspace_pars_fragment:hE,envmap_fragment:pE,envmap_common_pars_fragment:mE,envmap_pars_fragment:gE,envmap_pars_vertex:_E,envmap_physical_pars_fragment:RE,envmap_vertex:vE,fog_vertex:xE,fog_pars_vertex:yE,fog_fragment:SE,fog_pars_fragment:ME,gradientmap_pars_fragment:EE,lightmap_pars_fragment:TE,lights_lambert_fragment:wE,lights_lambert_pars_fragment:AE,lights_pars_begin:CE,lights_toon_fragment:bE,lights_toon_pars_fragment:PE,lights_phong_fragment:LE,lights_phong_pars_fragment:DE,lights_physical_fragment:NE,lights_physical_pars_fragment:IE,lights_fragment_begin:UE,lights_fragment_maps:OE,lights_fragment_end:FE,logdepthbuf_fragment:kE,logdepthbuf_pars_fragment:zE,logdepthbuf_pars_vertex:BE,logdepthbuf_vertex:HE,map_fragment:VE,map_pars_fragment:GE,map_particle_fragment:WE,map_particle_pars_fragment:XE,metalnessmap_fragment:jE,metalnessmap_pars_fragment:$E,morphinstance_vertex:YE,morphcolor_vertex:qE,morphnormal_vertex:KE,morphtarget_pars_vertex:ZE,morphtarget_vertex:QE,normal_fragment_begin:JE,normal_fragment_maps:e1,normal_pars_fragment:t1,normal_pars_vertex:n1,normal_vertex:i1,normalmap_pars_fragment:r1,clearcoat_normal_fragment_begin:s1,clearcoat_normal_fragment_maps:o1,clearcoat_pars_fragment:a1,iridescence_pars_fragment:l1,opaque_fragment:u1,packing:c1,premultiplied_alpha_fragment:f1,project_vertex:d1,dithering_fragment:h1,dithering_pars_fragment:p1,roughnessmap_fragment:m1,roughnessmap_pars_fragment:g1,shadowmap_pars_fragment:_1,shadowmap_pars_vertex:v1,shadowmap_vertex:x1,shadowmask_pars_fragment:y1,skinbase_vertex:S1,skinning_pars_vertex:M1,skinning_vertex:E1,skinnormal_vertex:T1,specularmap_fragment:w1,specularmap_pars_fragment:A1,tonemapping_fragment:C1,tonemapping_pars_fragment:R1,transmission_fragment:b1,transmission_pars_fragment:P1,uv_pars_fragment:L1,uv_pars_vertex:D1,uv_vertex:N1,worldpos_vertex:I1,background_vert:U1,background_frag:O1,backgroundCube_vert:F1,backgroundCube_frag:k1,cube_vert:z1,cube_frag:B1,depth_vert:H1,depth_frag:V1,distanceRGBA_vert:G1,distanceRGBA_frag:W1,equirect_vert:X1,equirect_frag:j1,linedashed_vert:$1,linedashed_frag:Y1,meshbasic_vert:q1,meshbasic_frag:K1,meshlambert_vert:Z1,meshlambert_frag:Q1,meshmatcap_vert:J1,meshmatcap_frag:eT,meshnormal_vert:tT,meshnormal_frag:nT,meshphong_vert:iT,meshphong_frag:rT,meshphysical_vert:sT,meshphysical_frag:oT,meshtoon_vert:aT,meshtoon_frag:lT,points_vert:uT,points_frag:cT,shadow_vert:fT,shadow_frag:dT,sprite_vert:hT,sprite_frag:pT},oe={common:{diffuse:{value:new Je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Je(16777215)},opacity:{value:1},center:{value:new be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},Yn={basic:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:jt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},specular:{value:new Je(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:jt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:jt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Je(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:jt([oe.points,oe.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:jt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:jt([oe.common,oe.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:jt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:jt([oe.sprite,oe.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:jt([oe.common,oe.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:jt([oe.lights,oe.fog,{color:{value:new Je(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};Yn.physical={uniforms:jt([Yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Je(0)},specularColor:{value:new Je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const $a={r:0,b:0,g:0},hr=new wi,mT=new Mt;function gT(t,e,n,i,r,s,o){const a=new Je(0);let l=s===!0?0:1,u,c,h=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const x=_(g);x===null?f(a,l):x&&x.isColor&&(f(x,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===hu)?(c===void 0&&(c=new Zn(new ua(1,1,1),new rr({name:"BackgroundCubeMaterial",uniforms:Gs(Yn.backgroundCube.uniforms),vertexShader:Yn.backgroundCube.vertexShader,fragmentShader:Yn.backgroundCube.fragmentShader,side:on,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),hr.copy(v.backgroundRotation),hr.x*=-1,hr.y*=-1,hr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(hr.y*=-1,hr.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(mT.makeRotationFromEuler(hr)),c.material.toneMapped=Xe.getTransfer(x.colorSpace)!==tt,(h!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Zn(new mu(2,2),new rr({name:"BackgroundMaterial",uniforms:Gs(Yn.background.uniforms),vertexShader:Yn.background.vertexShader,fragmentShader:Yn.background.fragmentShader,side:ir,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=Xe.getTransfer(x.colorSpace)!==tt,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null))}function f(g,v){g.getRGB($a,Vv(t)),i.buffers.color.setClear($a.r,$a.g,$a.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:y,addToRenderList:m}}function _T(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,P,W,B,$){let q=!1;const X=h(B,W,P);s!==X&&(s=X,u(s.object)),q=p(S,B,W,$),q&&_(S,B,W,$),$!==null&&e.update($,t.ELEMENT_ARRAY_BUFFER),(q||o)&&(o=!1,x(S,P,W,B),$!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function h(S,P,W){const B=W.wireframe===!0;let $=i[S.id];$===void 0&&($={},i[S.id]=$);let q=$[P.id];q===void 0&&(q={},$[P.id]=q);let X=q[B];return X===void 0&&(X=d(l()),q[B]=X),X}function d(S){const P=[],W=[],B=[];for(let $=0;$<n;$++)P[$]=0,W[$]=0,B[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:W,attributeDivisors:B,object:S,attributes:{},index:null}}function p(S,P,W,B){const $=s.attributes,q=P.attributes;let X=0;const Q=W.getAttributes();for(const L in Q)if(Q[L].location>=0){const Y=$[L];let re=q[L];if(re===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(re=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(re=S.instanceColor)),Y===void 0||Y.attribute!==re||re&&Y.data!==re.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function _(S,P,W,B){const $={},q=P.attributes;let X=0;const Q=W.getAttributes();for(const L in Q)if(Q[L].location>=0){let Y=q[L];Y===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Y=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Y=S.instanceColor));const re={};re.attribute=Y,Y&&Y.data&&(re.data=Y.data),$[L]=re,X++}s.attributes=$,s.attributesNum=X,s.index=B}function y(){const S=s.newAttributes;for(let P=0,W=S.length;P<W;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const W=s.newAttributes,B=s.enabledAttributes,$=s.attributeDivisors;W[S]=1,B[S]===0&&(t.enableVertexAttribArray(S),B[S]=1),$[S]!==P&&(t.vertexAttribDivisor(S,P),$[S]=P)}function g(){const S=s.newAttributes,P=s.enabledAttributes;for(let W=0,B=P.length;W<B;W++)P[W]!==S[W]&&(t.disableVertexAttribArray(W),P[W]=0)}function v(S,P,W,B,$,q,X){X===!0?t.vertexAttribIPointer(S,P,W,$,q):t.vertexAttribPointer(S,P,W,B,$,q)}function x(S,P,W,B){y();const $=B.attributes,q=W.getAttributes(),X=P.defaultAttributeValues;for(const Q in q){const L=q[Q];if(L.location>=0){let V=$[Q];if(V===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const Y=V.normalized,re=V.itemSize,Se=e.get(V);if(Se===void 0)continue;const $e=Se.buffer,G=Se.type,te=Se.bytesPerElement,pe=G===t.INT||G===t.UNSIGNED_INT||V.gpuType===ih;if(V.isInterleavedBufferAttribute){const se=V.data,Ce=se.stride,De=V.offset;if(se.isInstancedInterleavedBuffer){for(let ke=0;ke<L.locationSize;ke++)f(L.location+ke,se.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let ke=0;ke<L.locationSize;ke++)m(L.location+ke);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let ke=0;ke<L.locationSize;ke++)v(L.location+ke,re/L.locationSize,G,Y,Ce*te,(De+re/L.locationSize*ke)*te,pe)}else{if(V.isInstancedBufferAttribute){for(let se=0;se<L.locationSize;se++)f(L.location+se,V.meshPerAttribute);S.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let se=0;se<L.locationSize;se++)m(L.location+se);t.bindBuffer(t.ARRAY_BUFFER,$e);for(let se=0;se<L.locationSize;se++)v(L.location+se,re/L.locationSize,G,Y,re*te,re/L.locationSize*se*te,pe)}}else if(X!==void 0){const Y=X[Q];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(L.location,Y);break;case 3:t.vertexAttrib3fv(L.location,Y);break;case 4:t.vertexAttrib4fv(L.location,Y);break;default:t.vertexAttrib1fv(L.location,Y)}}}}g()}function b(){R();for(const S in i){const P=i[S];for(const W in P){const B=P[W];for(const $ in B)c(B[$].object),delete B[$];delete P[W]}delete i[S]}}function C(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const W in P){const B=P[W];for(const $ in B)c(B[$].object),delete B[$];delete P[W]}delete i[S.id]}function w(S){for(const P in i){const W=i[P];if(W[S.id]===void 0)continue;const B=W[S.id];for(const $ in B)c(B[$].object),delete B[$];delete W[S.id]}}function R(){T(),o=!0,s!==r&&(s=r,u(s.object))}function T(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:T,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function vT(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,h){h!==0&&(t.drawArraysInstanced(i,u,c,h),n.update(c,i,h))}function a(u,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,h);let p=0;for(let _=0;_<h;_++)p+=c[_];n.update(p,i,1)}function l(u,c,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<u.length;_++)o(u[_],c[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=c[y]*d[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function xT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==zn&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const R=w===oa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Ti&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==mi&&!R)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,maxSamples:C}}function yT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new zi,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=c(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?c(null):u();else{const g=s?0:i,v=g*4;let x=f.clippingState||null;l.value=x,x=c(_,d,v,p);for(let b=0;b!==v;++b)x[b]=n[b];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(h,d,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const f=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function ST(t){let e=new WeakMap;function n(o,a){return a===bf?o.mapping=zs:a===Pf&&(o.mapping=Bs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===bf||a===Pf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new DM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class MT extends Gv{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ys=4,um=[.125,.215,.35,.446,.526,.582],xr=20,dc=new MT,cm=new Je;let hc=null,pc=0,mc=0,gc=!1;const _r=(1+Math.sqrt(5))/2,es=1/_r,fm=[new O(-_r,es,0),new O(_r,es,0),new O(-es,0,_r),new O(es,0,_r),new O(0,_r,-es),new O(0,_r,es),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(hc,pc,mc),this._renderer.xr.enabled=gc,e.scissorTest=!1,Ya(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===zs||e.mapping===Bs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),hc=this._renderer.getRenderTarget(),pc=this._renderer.getActiveCubeFace(),mc=this._renderer.getActiveMipmapLevel(),gc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:oa,format:zn,colorSpace:$s,depthBuffer:!1},r=hm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ET(s)),this._blurMaterial=TT(s,e,n)}return r}_compileMaterial(e){const n=new Zn(this._lodPlanes[0],e);this._renderer.compile(n,dc)}_sceneToCubeUV(e,n,i,r){const a=new En(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,h=c.autoClear,d=c.toneMapping;c.getClearColor(cm),c.toneMapping=er,c.autoClear=!1;const p=new fh({name:"PMREM.Background",side:on,depthWrite:!1,depthTest:!1}),_=new Zn(new ua,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(cm),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const v=this._cubeSize;Ya(r,g*v,f>2?v:0,v,v),c.setRenderTarget(r),y&&c.render(_,a),c.render(e,a)}_.geometry.dispose(),_.material.dispose(),c.toneMapping=d,c.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===zs||e.mapping===Bs;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Zn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ya(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,dc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=fm[(r-s-1)%fm.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,h=new Zn(this._lodPlanes[r],u),d=u.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*xr-1),y=s/_,m=isFinite(s)?1+Math.floor(c*y):xr;m>xr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${xr}`);const f=[];let g=0;for(let w=0;w<xr;++w){const R=w/y,T=Math.exp(-R*R/2);f.push(T),w===0?g+=T:w<m&&(g+=2*T)}for(let w=0;w<f.length;w++)f[w]=f[w]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const x=this._sizeLods[r],b=3*x*(r>v-ys?r-v+ys:0),C=4*(this._cubeSize-x);Ya(n,b,C,3*x,2*x),l.setRenderTarget(n),l.render(h,dc)}}function ET(t){const e=[],n=[],i=[];let r=t;const s=t-ys+1+um.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ys?l=um[o-t+ys-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,h=1+u,d=[c,c,h,c,h,h,c,c,h,h,c,h],p=6,_=6,y=3,m=2,f=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,R=C>2?0:-1,T=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];g.set(T,y*_*C),v.set(d,m*_*C);const S=[C,C,C,C,C,C];x.set(S,f*_*C)}const b=new Ci;b.setAttribute("position",new Gn(g,y)),b.setAttribute("uv",new Gn(v,m)),b.setAttribute("faceIndex",new Gn(x,f)),e.push(b),r>ys&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function hm(t,e,n){const i=new Ir(t,e,n);return i.texture.mapping=hu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ya(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function TT(t,e,n){const i=new Float32Array(xr),r=new O(0,1,0);return new rr({name:"SphericalGaussianBlur",defines:{n:xr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function pm(){return new rr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function mm(){return new rr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:dh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ji,depthTest:!1,depthWrite:!1})}function dh(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function wT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===bf||l===Pf,c=l===zs||l===Bs;if(u||c){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new dm(t)),h=u?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new dm(t)),h=u?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function AT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&yo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function CT(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(h){const d=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,x=g.length;v<x;v+=3){const b=g[v+0],C=g[v+1],w=g[v+2];d.push(b,C,C,w,w,b)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const b=v+0,C=v+1,w=v+2;d.push(b,C,C,w,w,b)}}else return;const m=new(Iv(d)?Hv:Bv)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function c(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&u(h)}else u(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:c}}function RT(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function u(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function c(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];n.update(m,i,1)}function h(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)u(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,_);let f=0;for(let g=0;g<_;g++)f+=p[g]*y[g];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=h}function bT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function PT(t,e,n){const i=new WeakMap,r=new St;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=c!==void 0?c.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*C*4*h),R=new Ov(w,b,C,h);R.type=mi,R.needsUpdate=!0;const T=x*4;for(let P=0;P<h;P++){const W=f[P],B=g[P],$=v[P],q=b*C*4*P;for(let X=0;X<W.count;X++){const Q=X*T;_===!0&&(r.fromBufferAttribute(W,X),w[q+Q+0]=r.x,w[q+Q+1]=r.y,w[q+Q+2]=r.z,w[q+Q+3]=0),y===!0&&(r.fromBufferAttribute(B,X),w[q+Q+4]=r.x,w[q+Q+5]=r.y,w[q+Q+6]=r.z,w[q+Q+7]=0),m===!0&&(r.fromBufferAttribute($,X),w[q+Q+8]=r.x,w[q+Q+9]=r.y,w[q+Q+10]=r.z,w[q+Q+11]=$.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new be(b,C)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<u.length;m++)_+=u[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function LT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,h=e.get(l,c);if(r.get(h)!==u&&(e.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==u&&(d.update(),r.set(d,u))}return h}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class $v extends qt{constructor(e,n,i,r,s,o,a,l,u,c=bs){if(c!==bs&&c!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===bs&&(i=Nr),i===void 0&&c===Vs&&(i=Hs),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Vn,this.minFilter=l!==void 0?l:Vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const Yv=new qt,gm=new $v(1,1),qv=new Ov,Kv=new gM,Zv=new Wv,_m=[],vm=[],xm=new Float32Array(16),ym=new Float32Array(9),Sm=new Float32Array(4);function Ys(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=_m[r];if(s===void 0&&(s=new Float32Array(r),_m[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function gu(t,e){let n=vm[e];n===void 0&&(n=new Int32Array(e),vm[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function NT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function IT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function UT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function OT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;Sm.set(i),t.uniformMatrix2fv(this.addr,!1,Sm),bt(n,i)}}function FT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;ym.set(i),t.uniformMatrix3fv(this.addr,!1,ym),bt(n,i)}}function kT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;xm.set(i),t.uniformMatrix4fv(this.addr,!1,xm),bt(n,i)}}function zT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function BT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function HT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function VT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function $T(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(gm.compareFunction=Nv,s=gm):s=Yv,n.setTexture2D(e||s,r)}function YT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kv,r)}function qT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zv,r)}function KT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||qv,r)}function ZT(t){switch(t){case 5126:return DT;case 35664:return NT;case 35665:return IT;case 35666:return UT;case 35674:return OT;case 35675:return FT;case 35676:return kT;case 5124:case 35670:return zT;case 35667:case 35671:return BT;case 35668:case 35672:return HT;case 35669:case 35673:return VT;case 5125:return GT;case 36294:return WT;case 36295:return XT;case 36296:return jT;case 35678:case 36198:case 36298:case 36306:case 35682:return $T;case 35679:case 36299:case 36307:return YT;case 35680:case 36300:case 36308:case 36293:return qT;case 36289:case 36303:case 36311:case 36292:return KT}}function QT(t,e){t.uniform1fv(this.addr,e)}function JT(t,e){const n=Ys(e,this.size,2);t.uniform2fv(this.addr,n)}function ew(t,e){const n=Ys(e,this.size,3);t.uniform3fv(this.addr,n)}function tw(t,e){const n=Ys(e,this.size,4);t.uniform4fv(this.addr,n)}function nw(t,e){const n=Ys(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iw(t,e){const n=Ys(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rw(t,e){const n=Ys(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sw(t,e){t.uniform1iv(this.addr,e)}function ow(t,e){t.uniform2iv(this.addr,e)}function aw(t,e){t.uniform3iv(this.addr,e)}function lw(t,e){t.uniform4iv(this.addr,e)}function uw(t,e){t.uniform1uiv(this.addr,e)}function cw(t,e){t.uniform2uiv(this.addr,e)}function fw(t,e){t.uniform3uiv(this.addr,e)}function dw(t,e){t.uniform4uiv(this.addr,e)}function hw(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||Yv,s[o])}function pw(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Kv,s[o])}function mw(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zv,s[o])}function gw(t,e,n){const i=this.cache,r=e.length,s=gu(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||qv,s[o])}function _w(t){switch(t){case 5126:return QT;case 35664:return JT;case 35665:return ew;case 35666:return tw;case 35674:return nw;case 35675:return iw;case 35676:return rw;case 5124:case 35670:return sw;case 35667:case 35671:return ow;case 35668:case 35672:return aw;case 35669:case 35673:return lw;case 5125:return uw;case 36294:return cw;case 36295:return fw;case 36296:return dw;case 35678:case 36198:case 36298:case 36306:case 35682:return hw;case 35679:case 36299:case 36307:return pw;case 35680:case 36300:case 36308:case 36293:return mw;case 36289:case 36303:case 36311:case 36292:return gw}}class vw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=ZT(n.type)}}class xw{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=_w(n.type)}}class yw{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const _c=/(\w+)(\])?(\[|\.)?/g;function Mm(t,e){t.seq.push(e),t.map[e.id]=e}function Sw(t,e,n){const i=t.name,r=i.length;for(_c.lastIndex=0;;){const s=_c.exec(i),o=_c.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){Mm(n,u===void 0?new vw(a,t,e):new xw(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new yw(a),Mm(n,h)),n=h}}}class xl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);Sw(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Em(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const Mw=37297;let Ew=0;function Tw(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Tm=new Ue;function ww(t){Xe._getMatrix(Tm,Xe.workingColorSpace,t);const e=`mat3( ${Tm.elements.map(n=>n.toFixed(4))} )`;switch(Xe.getTransfer(t)){case pu:return[e,"LinearTransferOETF"];case tt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+Tw(t.getShaderSource(e),o)}else return r}function Aw(t,e){const n=ww(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function Cw(t,e){let n;switch(e){case AS:n="Linear";break;case CS:n="Reinhard";break;case RS:n="Cineon";break;case bS:n="ACESFilmic";break;case LS:n="AgX";break;case DS:n="Neutral";break;case PS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const qa=new O;function Rw(){Xe.getLuminanceCoefficients(qa);const t=qa.x.toFixed(4),e=qa.y.toFixed(4),n=qa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bw(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(So).join(`
`)}function Pw(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function Lw(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function So(t){return t!==""}function Am(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Dw=/^[ \t]*#include +<([\w\d./]+)>/gm;function od(t){return t.replace(Dw,Iw)}const Nw=new Map;function Iw(t,e){let n=Fe[e];if(n===void 0){const i=Nw.get(e);if(i!==void 0)n=Fe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return od(n)}const Uw=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(t){return t.replace(Uw,Ow)}function Ow(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bm(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Fw(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===yv?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===sS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===ui&&(e="SHADOWMAP_TYPE_VSM"),e}function kw(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case zs:case Bs:e="ENVMAP_TYPE_CUBE";break;case hu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function zw(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Bs:e="ENVMAP_MODE_REFRACTION";break}return e}function Bw(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sv:e="ENVMAP_BLENDING_MULTIPLY";break;case TS:e="ENVMAP_BLENDING_MIX";break;case wS:e="ENVMAP_BLENDING_ADD";break}return e}function Hw(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function Vw(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=Fw(n),u=kw(n),c=zw(n),h=Bw(n),d=Hw(n),p=bw(n),_=Pw(s),y=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(So).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(So).join(`
`),f.length>0&&(f+=`
`)):(m=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(So).join(`
`),f=[bm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==er?"#define TONE_MAPPING":"",n.toneMapping!==er?Fe.tonemapping_pars_fragment:"",n.toneMapping!==er?Cw("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,Aw("linearToOutputTexel",n.outputColorSpace),Rw(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(So).join(`
`)),o=od(o),o=Am(o,n),o=Cm(o,n),a=od(a),a=Am(a,n),a=Cm(a,n),o=Rm(o),a=Rm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Hp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+m+o,x=g+f+a,b=Em(r,r.VERTEX_SHADER,v),C=Em(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,C),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function w(P){if(t.debug.checkShaderErrors){const W=r.getProgramInfoLog(y).trim(),B=r.getShaderInfoLog(b).trim(),$=r.getShaderInfoLog(C).trim();let q=!0,X=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,C);else{const Q=wm(r,b,"vertex"),L=wm(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+Q+`
`+L)}else W!==""?console.warn("THREE.WebGLProgram: Program Info Log:",W):(B===""||$==="")&&(X=!1);X&&(P.diagnostics={runnable:q,programLog:W,vertexShader:{log:B,prefix:m},fragmentShader:{log:$,prefix:f}})}r.deleteShader(b),r.deleteShader(C),R=new xl(r,y),T=Lw(r,y)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let T;this.getAttributes=function(){return T===void 0&&w(this),T};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,Mw)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=Ew++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=C,this}let Gw=0;class Ww{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new Xw(e),n.set(e,i)),i}}class Xw{constructor(e){this.id=Gw++,this.code=e,this.usedTimes=0}}function jw(t,e,n,i,r,s,o){const a=new kv,l=new Ww,u=new Set,c=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(T){return u.add(T),T===0?"uv":`uv${T}`}function m(T,S,P,W,B){const $=W.fog,q=B.geometry,X=T.isMeshStandardMaterial?W.environment:null,Q=(T.isMeshStandardMaterial?n:e).get(T.envMap||X),L=Q&&Q.mapping===hu?Q.image.height:null,V=_[T.type];T.precision!==null&&(p=r.getMaxPrecision(T.precision),p!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",p,"instead."));const Y=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,re=Y!==void 0?Y.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let $e,G,te,pe;if(V){const Ze=Yn[V];$e=Ze.vertexShader,G=Ze.fragmentShader}else $e=T.vertexShader,G=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),pe=l.getFragmentShaderID(T);const se=t.getRenderTarget(),Ce=t.state.buffers.depth.getReversed(),De=B.isInstancedMesh===!0,ke=B.isBatchedMesh===!0,dt=!!T.map,Ge=!!T.matcap,xt=!!Q,U=!!T.aoMap,_n=!!T.lightMap,Be=!!T.bumpMap,He=!!T.normalMap,we=!!T.displacementMap,ot=!!T.emissiveMap,Te=!!T.metalnessMap,A=!!T.roughnessMap,M=T.anisotropy>0,F=T.clearcoat>0,K=T.dispersion>0,J=T.iridescence>0,j=T.sheen>0,Me=T.transmission>0,le=M&&!!T.anisotropyMap,me=F&&!!T.clearcoatMap,We=F&&!!T.clearcoatNormalMap,ne=F&&!!T.clearcoatRoughnessMap,ge=J&&!!T.iridescenceMap,Ae=J&&!!T.iridescenceThicknessMap,Re=j&&!!T.sheenColorMap,_e=j&&!!T.sheenRoughnessMap,Ve=!!T.specularMap,Oe=!!T.specularColorMap,it=!!T.specularIntensityMap,D=Me&&!!T.transmissionMap,ae=Me&&!!T.thicknessMap,H=!!T.gradientMap,Z=!!T.alphaMap,fe=T.alphaTest>0,ue=!!T.alphaHash,Ne=!!T.extensions;let _t=er;T.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Ot={shaderID:V,shaderType:T.type,shaderName:T.name,vertexShader:$e,fragmentShader:G,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:pe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:p,batching:ke,batchingColor:ke&&B._colorsTexture!==null,instancing:De,instancingColor:De&&B.instanceColor!==null,instancingMorph:De&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:se===null?t.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:$s,alphaToCoverage:!!T.alphaToCoverage,map:dt,matcap:Ge,envMap:xt,envMapMode:xt&&Q.mapping,envMapCubeUVHeight:L,aoMap:U,lightMap:_n,bumpMap:Be,normalMap:He,displacementMap:d&&we,emissiveMap:ot,normalMapObjectSpace:He&&T.normalMapType===FS,normalMapTangentSpace:He&&T.normalMapType===OS,metalnessMap:Te,roughnessMap:A,anisotropy:M,anisotropyMap:le,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:We,clearcoatRoughnessMap:ne,dispersion:K,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Ae,sheen:j,sheenColorMap:Re,sheenRoughnessMap:_e,specularMap:Ve,specularColorMap:Oe,specularIntensityMap:it,transmission:Me,transmissionMap:D,thicknessMap:ae,gradientMap:H,opaque:T.transparent===!1&&T.blending===Rs&&T.alphaToCoverage===!1,alphaMap:Z,alphaTest:fe,alphaHash:ue,combine:T.combine,mapUv:dt&&y(T.map.channel),aoMapUv:U&&y(T.aoMap.channel),lightMapUv:_n&&y(T.lightMap.channel),bumpMapUv:Be&&y(T.bumpMap.channel),normalMapUv:He&&y(T.normalMap.channel),displacementMapUv:we&&y(T.displacementMap.channel),emissiveMapUv:ot&&y(T.emissiveMap.channel),metalnessMapUv:Te&&y(T.metalnessMap.channel),roughnessMapUv:A&&y(T.roughnessMap.channel),anisotropyMapUv:le&&y(T.anisotropyMap.channel),clearcoatMapUv:me&&y(T.clearcoatMap.channel),clearcoatNormalMapUv:We&&y(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&y(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&y(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&y(T.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(T.sheenRoughnessMap.channel),specularMapUv:Ve&&y(T.specularMap.channel),specularColorMapUv:Oe&&y(T.specularColorMap.channel),specularIntensityMapUv:it&&y(T.specularIntensityMap.channel),transmissionMapUv:D&&y(T.transmissionMap.channel),thicknessMapUv:ae&&y(T.thicknessMap.channel),alphaMapUv:Z&&y(T.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(He||M),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!q.attributes.uv&&(dt||Z),fog:!!$,useFog:T.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ce,skinning:B.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Se,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:dt&&T.map.isVideoTexture===!0&&Xe.getTransfer(T.map.colorSpace)===tt,decodeVideoTextureEmissive:ot&&T.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(T.emissiveMap.colorSpace)===tt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===di,flipSided:T.side===on,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Ne&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&T.extensions.multiDraw===!0||ke)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ot.vertexUv1s=u.has(1),Ot.vertexUv2s=u.has(2),Ot.vertexUv3s=u.has(3),u.clear(),Ot}function f(T){const S=[];if(T.shaderID?S.push(T.shaderID):(S.push(T.customVertexShaderID),S.push(T.customFragmentShaderID)),T.defines!==void 0)for(const P in T.defines)S.push(P),S.push(T.defines[P]);return T.isRawShaderMaterial===!1&&(g(S,T),v(S,T),S.push(t.outputColorSpace)),S.push(T.customProgramCacheKey),S.join()}function g(T,S){T.push(S.precision),T.push(S.outputColorSpace),T.push(S.envMapMode),T.push(S.envMapCubeUVHeight),T.push(S.mapUv),T.push(S.alphaMapUv),T.push(S.lightMapUv),T.push(S.aoMapUv),T.push(S.bumpMapUv),T.push(S.normalMapUv),T.push(S.displacementMapUv),T.push(S.emissiveMapUv),T.push(S.metalnessMapUv),T.push(S.roughnessMapUv),T.push(S.anisotropyMapUv),T.push(S.clearcoatMapUv),T.push(S.clearcoatNormalMapUv),T.push(S.clearcoatRoughnessMapUv),T.push(S.iridescenceMapUv),T.push(S.iridescenceThicknessMapUv),T.push(S.sheenColorMapUv),T.push(S.sheenRoughnessMapUv),T.push(S.specularMapUv),T.push(S.specularColorMapUv),T.push(S.specularIntensityMapUv),T.push(S.transmissionMapUv),T.push(S.thicknessMapUv),T.push(S.combine),T.push(S.fogExp2),T.push(S.sizeAttenuation),T.push(S.morphTargetsCount),T.push(S.morphAttributeCount),T.push(S.numDirLights),T.push(S.numPointLights),T.push(S.numSpotLights),T.push(S.numSpotLightMaps),T.push(S.numHemiLights),T.push(S.numRectAreaLights),T.push(S.numDirLightShadows),T.push(S.numPointLightShadows),T.push(S.numSpotLightShadows),T.push(S.numSpotLightShadowsWithMaps),T.push(S.numLightProbes),T.push(S.shadowMapType),T.push(S.toneMapping),T.push(S.numClippingPlanes),T.push(S.numClipIntersection),T.push(S.depthPacking)}function v(T,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),T.push(a.mask)}function x(T){const S=_[T.type];let P;if(S){const W=Yn[S];P=RM.clone(W.uniforms)}else P=T.uniforms;return P}function b(T,S){let P;for(let W=0,B=c.length;W<B;W++){const $=c[W];if($.cacheKey===S){P=$,++P.usedTimes;break}}return P===void 0&&(P=new Vw(t,S,T,s),c.push(P)),P}function C(T){if(--T.usedTimes===0){const S=c.indexOf(T);c[S]=c[c.length-1],c.pop(),T.destroy()}}function w(T){l.remove(T)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:C,releaseShaderCache:w,programs:c,dispose:R}}function $w(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function Yw(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Pm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Lm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,_,y,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,_,y,m){const f=o(h,d,p,_,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,_,y,m){const f=o(h,d,p,_,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function u(h,d){n.length>1&&n.sort(h||Yw),i.length>1&&i.sort(d||Pm),r.length>1&&r.sort(d||Pm)}function c(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function qw(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Lm,t.set(i,[o])):r>=s.length?(o=new Lm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function Kw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new Je};break;case"SpotLight":n={position:new O,direction:new O,color:new Je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new Je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new Je,groundColor:new Je};break;case"RectAreaLight":n={color:new Je,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function Zw(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new be,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let Qw=0;function Jw(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function eA(t){const e=new Kw,n=Zw(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new O);const r=new O,s=new Mt,o=new Mt;function a(u){let c=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,g=0,v=0,x=0,b=0,C=0,w=0;u.sort(Jw);for(let T=0,S=u.length;T<S;T++){const P=u[T],W=P.color,B=P.intensity,$=P.distance,q=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=W.r*B,h+=W.g*B,d+=W.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(P.sh.coefficients[X],B);w++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=q,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=X,p++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(W).multiplyScalar(B),X.distance=$,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,i.spot[y]=X;const Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&C++),i.spotLightMatrix[y]=Q.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=q,x++}y++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(W).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=X,m++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=q,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=X,_++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),i.hemi[f]=X,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=oe.LTC_FLOAT_1,i.rectAreaLTC2=oe.LTC_FLOAT_2):(i.rectAreaLTC1=oe.LTC_HALF_1,i.rectAreaLTC2=oe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=w,i.version=Qw++)}function l(u,c){let h=0,d=0,p=0,_=0,y=0;const m=c.matrixWorldInverse;for(let f=0,g=u.length;f<g;f++){const v=u[f];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Dm(t){const e=new eA(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Dm(t),e.set(r,[a])):s>=o.length?(a=new Dm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class nA extends la{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=IS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class iA extends la{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const rA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,sA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function oA(t,e,n){let i=new Xv;const r=new be,s=new be,o=new St,a=new nA({depthPacking:US}),l=new iA,u={},c=n.maxTextureSize,h={[ir]:on,[on]:ir,[di]:di},d=new rr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new be},radius:{value:4}},vertexShader:rA,fragmentShader:sA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new Ci;_.setAttribute("position",new Gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new Zn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yv;let f=this.type;this.render=function(C,w,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const T=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),W=t.state;W.setBlending(Ji),W.buffers.color.setClear(1,1,1,1),W.buffers.depth.setTest(!0),W.setScissorTest(!1);const B=f!==ui&&this.type===ui,$=f===ui&&this.type!==ui;for(let q=0,X=C.length;q<X;q++){const Q=C[q],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const V=L.getFrameExtents();if(r.multiply(V),s.copy(L.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/V.x),r.x=s.x*V.x,L.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/V.y),r.y=s.y*V.y,L.mapSize.y=s.y)),L.map===null||B===!0||$===!0){const re=this.type!==ui?{minFilter:Vn,magFilter:Vn}:{};L.map!==null&&L.map.dispose(),L.map=new Ir(r.x,r.y,re),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Y=L.getViewportCount();for(let re=0;re<Y;re++){const Se=L.getViewport(re);o.set(s.x*Se.x,s.y*Se.y,s.x*Se.z,s.y*Se.w),W.viewport(o),L.updateMatrices(Q,re),i=L.getFrustum(),x(w,R,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===ui&&g(L,R),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(T,S,P)};function g(C,w){const R=e.update(y);d.defines.VSM_SAMPLES!==C.blurSamples&&(d.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Ir(r.x,r.y)),d.uniforms.shadow_pass.value=C.map.texture,d.uniforms.resolution.value=C.mapSize,d.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,R,d,y,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,R,p,y,null)}function v(C,w,R,T){let S=null;const P=R.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const W=S.uuid,B=w.uuid;let $=u[W];$===void 0&&($={},u[W]=$);let q=$[B];q===void 0&&(q=S.clone(),$[B]=q,w.addEventListener("dispose",b)),S=q}if(S.visible=w.visible,S.wireframe=w.wireframe,T===ui?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:h[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const W=t.properties.get(S);W.light=R}return S}function x(C,w,R,T,S){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&S===ui)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,C.matrixWorld);const B=e.update(C),$=C.material;if(Array.isArray($)){const q=B.groups;for(let X=0,Q=q.length;X<Q;X++){const L=q[X],V=$[L.materialIndex];if(V&&V.visible){const Y=v(C,V,T,S);C.onBeforeShadow(t,C,w,R,B,Y,L),t.renderBufferDirect(R,null,B,Y,C,L),C.onAfterShadow(t,C,w,R,B,Y,L)}}}else if($.visible){const q=v(C,$,T,S);C.onBeforeShadow(t,C,w,R,B,q,null),t.renderBufferDirect(R,null,B,q,C,null),C.onAfterShadow(t,C,w,R,B,q,null)}}const W=C.children;for(let B=0,$=W.length;B<$;B++)x(W[B],w,R,T,S)}function b(C){C.target.removeEventListener("dispose",b);for(const R in u){const T=u[R],S=C.target.uuid;S in T&&(T[S].dispose(),delete T[S])}}}const aA={[Mf]:Ef,[Tf]:Cf,[wf]:Rf,[ks]:Af,[Ef]:Mf,[Cf]:Tf,[Rf]:wf,[Af]:ks};function lA(t,e){function n(){let D=!1;const ae=new St;let H=null;const Z=new St(0,0,0,0);return{setMask:function(fe){H!==fe&&!D&&(t.colorMask(fe,fe,fe,fe),H=fe)},setLocked:function(fe){D=fe},setClear:function(fe,ue,Ne,_t,Ot){Ot===!0&&(fe*=_t,ue*=_t,Ne*=_t),ae.set(fe,ue,Ne,_t),Z.equals(ae)===!1&&(t.clearColor(fe,ue,Ne,_t),Z.copy(ae))},reset:function(){D=!1,H=null,Z.set(-1,0,0,0)}}}function i(){let D=!1,ae=!1,H=null,Z=null,fe=null;return{setReversed:function(ue){if(ae!==ue){const Ne=e.get("EXT_clip_control");ae?Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.ZERO_TO_ONE_EXT):Ne.clipControlEXT(Ne.LOWER_LEFT_EXT,Ne.NEGATIVE_ONE_TO_ONE_EXT);const _t=fe;fe=null,this.setClear(_t)}ae=ue},getReversed:function(){return ae},setTest:function(ue){ue?se(t.DEPTH_TEST):Ce(t.DEPTH_TEST)},setMask:function(ue){H!==ue&&!D&&(t.depthMask(ue),H=ue)},setFunc:function(ue){if(ae&&(ue=aA[ue]),Z!==ue){switch(ue){case Mf:t.depthFunc(t.NEVER);break;case Ef:t.depthFunc(t.ALWAYS);break;case Tf:t.depthFunc(t.LESS);break;case ks:t.depthFunc(t.LEQUAL);break;case wf:t.depthFunc(t.EQUAL);break;case Af:t.depthFunc(t.GEQUAL);break;case Cf:t.depthFunc(t.GREATER);break;case Rf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Z=ue}},setLocked:function(ue){D=ue},setClear:function(ue){fe!==ue&&(ae&&(ue=1-ue),t.clearDepth(ue),fe=ue)},reset:function(){D=!1,H=null,Z=null,fe=null,ae=!1}}}function r(){let D=!1,ae=null,H=null,Z=null,fe=null,ue=null,Ne=null,_t=null,Ot=null;return{setTest:function(Ze){D||(Ze?se(t.STENCIL_TEST):Ce(t.STENCIL_TEST))},setMask:function(Ze){ae!==Ze&&!D&&(t.stencilMask(Ze),ae=Ze)},setFunc:function(Ze,bn,ni){(H!==Ze||Z!==bn||fe!==ni)&&(t.stencilFunc(Ze,bn,ni),H=Ze,Z=bn,fe=ni)},setOp:function(Ze,bn,ni){(ue!==Ze||Ne!==bn||_t!==ni)&&(t.stencilOp(Ze,bn,ni),ue=Ze,Ne=bn,_t=ni)},setLocked:function(Ze){D=Ze},setClear:function(Ze){Ot!==Ze&&(t.clearStencil(Ze),Ot=Ze)},reset:function(){D=!1,ae=null,H=null,Z=null,fe=null,ue=null,Ne=null,_t=null,Ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},h={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,g=null,v=null,x=null,b=null,C=null,w=new Je(0,0,0),R=0,T=!1,S=null,P=null,W=null,B=null,$=null;const q=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let X=!1,Q=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(L)[1]),X=Q>=1):L.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),X=Q>=2);let V=null,Y={};const re=t.getParameter(t.SCISSOR_BOX),Se=t.getParameter(t.VIEWPORT),$e=new St().fromArray(re),G=new St().fromArray(Se);function te(D,ae,H,Z){const fe=new Uint8Array(4),ue=t.createTexture();t.bindTexture(D,ue),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ne=0;Ne<H;Ne++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(ae,0,t.RGBA,1,1,Z,0,t.RGBA,t.UNSIGNED_BYTE,fe):t.texImage2D(ae+Ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,fe);return ue}const pe={};pe[t.TEXTURE_2D]=te(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),se(t.DEPTH_TEST),o.setFunc(ks),Be(!1),He(Op),se(t.CULL_FACE),U(Ji);function se(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function Ce(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function De(D,ae){return h[D]!==ae?(t.bindFramebuffer(D,ae),h[D]=ae,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=ae),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=ae),!0):!1}function ke(D,ae){let H=p,Z=!1;if(D){H=d.get(ae),H===void 0&&(H=[],d.set(ae,H));const fe=D.textures;if(H.length!==fe.length||H[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ne=fe.length;ue<Ne;ue++)H[ue]=t.COLOR_ATTACHMENT0+ue;H.length=fe.length,Z=!0}}else H[0]!==t.BACK&&(H[0]=t.BACK,Z=!0);Z&&t.drawBuffers(H)}function dt(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Ge={[vr]:t.FUNC_ADD,[aS]:t.FUNC_SUBTRACT,[lS]:t.FUNC_REVERSE_SUBTRACT};Ge[uS]=t.MIN,Ge[cS]=t.MAX;const xt={[fS]:t.ZERO,[dS]:t.ONE,[hS]:t.SRC_COLOR,[yf]:t.SRC_ALPHA,[xS]:t.SRC_ALPHA_SATURATE,[_S]:t.DST_COLOR,[mS]:t.DST_ALPHA,[pS]:t.ONE_MINUS_SRC_COLOR,[Sf]:t.ONE_MINUS_SRC_ALPHA,[vS]:t.ONE_MINUS_DST_COLOR,[gS]:t.ONE_MINUS_DST_ALPHA,[yS]:t.CONSTANT_COLOR,[SS]:t.ONE_MINUS_CONSTANT_COLOR,[MS]:t.CONSTANT_ALPHA,[ES]:t.ONE_MINUS_CONSTANT_ALPHA};function U(D,ae,H,Z,fe,ue,Ne,_t,Ot,Ze){if(D===Ji){y===!0&&(Ce(t.BLEND),y=!1);return}if(y===!1&&(se(t.BLEND),y=!0),D!==oS){if(D!==m||Ze!==T){if((f!==vr||x!==vr)&&(t.blendEquation(t.FUNC_ADD),f=vr,x=vr),Ze)switch(D){case Rs:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fp:t.blendFunc(t.ONE,t.ONE);break;case kp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Rs:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Fp:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case kp:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case zp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,v=null,b=null,C=null,w.set(0,0,0),R=0,m=D,T=Ze}return}fe=fe||ae,ue=ue||H,Ne=Ne||Z,(ae!==f||fe!==x)&&(t.blendEquationSeparate(Ge[ae],Ge[fe]),f=ae,x=fe),(H!==g||Z!==v||ue!==b||Ne!==C)&&(t.blendFuncSeparate(xt[H],xt[Z],xt[ue],xt[Ne]),g=H,v=Z,b=ue,C=Ne),(_t.equals(w)===!1||Ot!==R)&&(t.blendColor(_t.r,_t.g,_t.b,Ot),w.copy(_t),R=Ot),m=D,T=!1}function _n(D,ae){D.side===di?Ce(t.CULL_FACE):se(t.CULL_FACE);let H=D.side===on;ae&&(H=!H),Be(H),D.blending===Rs&&D.transparent===!1?U(Ji):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const Z=D.stencilWrite;a.setTest(Z),Z&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ot(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?se(t.SAMPLE_ALPHA_TO_COVERAGE):Ce(t.SAMPLE_ALPHA_TO_COVERAGE)}function Be(D){S!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),S=D)}function He(D){D!==iS?(se(t.CULL_FACE),D!==P&&(D===Op?t.cullFace(t.BACK):D===rS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ce(t.CULL_FACE),P=D}function we(D){D!==W&&(X&&t.lineWidth(D),W=D)}function ot(D,ae,H){D?(se(t.POLYGON_OFFSET_FILL),(B!==ae||$!==H)&&(t.polygonOffset(ae,H),B=ae,$=H)):Ce(t.POLYGON_OFFSET_FILL)}function Te(D){D?se(t.SCISSOR_TEST):Ce(t.SCISSOR_TEST)}function A(D){D===void 0&&(D=t.TEXTURE0+q-1),V!==D&&(t.activeTexture(D),V=D)}function M(D,ae,H){H===void 0&&(V===null?H=t.TEXTURE0+q-1:H=V);let Z=Y[H];Z===void 0&&(Z={type:void 0,texture:void 0},Y[H]=Z),(Z.type!==D||Z.texture!==ae)&&(V!==H&&(t.activeTexture(H),V=H),t.bindTexture(D,ae||pe[D]),Z.type=D,Z.texture=ae)}function F(){const D=Y[V];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function K(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Me(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function le(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function We(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Re(D){$e.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),$e.copy(D))}function _e(D){G.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),G.copy(D))}function Ve(D,ae){let H=u.get(ae);H===void 0&&(H=new WeakMap,u.set(ae,H));let Z=H.get(D);Z===void 0&&(Z=t.getUniformBlockIndex(ae,D.name),H.set(D,Z))}function Oe(D,ae){const Z=u.get(ae).get(D);l.get(ae)!==Z&&(t.uniformBlockBinding(ae,Z,D.__bindingPointIndex),l.set(ae,Z))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},V=null,Y={},h={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,g=null,v=null,x=null,b=null,C=null,w=new Je(0,0,0),R=0,T=!1,S=null,P=null,W=null,B=null,$=null,$e.set(0,0,t.canvas.width,t.canvas.height),G.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:se,disable:Ce,bindFramebuffer:De,drawBuffers:ke,useProgram:dt,setBlending:U,setMaterial:_n,setFlipSided:Be,setCullFace:He,setLineWidth:we,setPolygonOffset:ot,setScissorTest:Te,activeTexture:A,bindTexture:M,unbindTexture:F,compressedTexImage2D:K,compressedTexImage3D:J,texImage2D:ge,texImage3D:Ae,updateUBOMapping:Ve,uniformBlockBinding:Oe,texStorage2D:We,texStorage3D:ne,texSubImage2D:j,texSubImage3D:Me,compressedTexSubImage2D:le,compressedTexSubImage3D:me,scissor:Re,viewport:_e,reset:it}}function Nm(t,e,n,i){const r=uA(i);switch(n){case Av:return t*e;case Rv:return t*e;case bv:return t*e*2;case Pv:return t*e/r.components*r.byteLength;case oh:return t*e/r.components*r.byteLength;case Lv:return t*e*2/r.components*r.byteLength;case ah:return t*e*2/r.components*r.byteLength;case Cv:return t*e*3/r.components*r.byteLength;case zn:return t*e*4/r.components*r.byteLength;case lh:return t*e*4/r.components*r.byteLength;case pl:case ml:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case gl:case _l:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:case Of:return Math.max(t,16)*Math.max(e,8)/4;case Nf:case Uf:return Math.max(t,8)*Math.max(e,8)/2;case Ff:case kf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case zf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Bf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case jf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case vl:case ed:case td:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Dv:case nd:return Math.ceil(t/4)*Math.ceil(e/4)*8;case id:case rd:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function uA(t){switch(t){case Ti:case Ev:return{byteLength:1,components:1};case Zo:case Tv:case oa:return{byteLength:2,components:1};case rh:case sh:return{byteLength:2,components:4};case Nr:case ih:case mi:return{byteLength:4,components:1};case wv:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function cA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new be,c=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,M){return p?new OffscreenCanvas(A,M):Jo("canvas")}function y(A,M,F){let K=1;const J=Te(A);if((J.width>F||J.height>F)&&(K=F/Math.max(J.width,J.height)),K<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const j=Math.floor(K*J.width),Me=Math.floor(K*J.height);h===void 0&&(h=_(j,Me));const le=M?_(j,Me):h;return le.width=j,le.height=Me,le.getContext("2d").drawImage(A,0,0,j,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+j+"x"+Me+")."),le}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),A;return A}function m(A){return A.generateMipmaps}function f(A){t.generateMipmap(A)}function g(A){return A.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?t.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(A,M,F,K,J=!1){if(A!==null){if(t[A]!==void 0)return t[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let j=M;if(M===t.RED&&(F===t.FLOAT&&(j=t.R32F),F===t.HALF_FLOAT&&(j=t.R16F),F===t.UNSIGNED_BYTE&&(j=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.R8UI),F===t.UNSIGNED_SHORT&&(j=t.R16UI),F===t.UNSIGNED_INT&&(j=t.R32UI),F===t.BYTE&&(j=t.R8I),F===t.SHORT&&(j=t.R16I),F===t.INT&&(j=t.R32I)),M===t.RG&&(F===t.FLOAT&&(j=t.RG32F),F===t.HALF_FLOAT&&(j=t.RG16F),F===t.UNSIGNED_BYTE&&(j=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RG8UI),F===t.UNSIGNED_SHORT&&(j=t.RG16UI),F===t.UNSIGNED_INT&&(j=t.RG32UI),F===t.BYTE&&(j=t.RG8I),F===t.SHORT&&(j=t.RG16I),F===t.INT&&(j=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGB8UI),F===t.UNSIGNED_SHORT&&(j=t.RGB16UI),F===t.UNSIGNED_INT&&(j=t.RGB32UI),F===t.BYTE&&(j=t.RGB8I),F===t.SHORT&&(j=t.RGB16I),F===t.INT&&(j=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(j=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(j=t.RGBA16UI),F===t.UNSIGNED_INT&&(j=t.RGBA32UI),F===t.BYTE&&(j=t.RGBA8I),F===t.SHORT&&(j=t.RGBA16I),F===t.INT&&(j=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(j=t.RGB9_E5),M===t.RGBA){const Me=J?pu:Xe.getTransfer(K);F===t.FLOAT&&(j=t.RGBA32F),F===t.HALF_FLOAT&&(j=t.RGBA16F),F===t.UNSIGNED_BYTE&&(j=Me===tt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(j=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(j=t.RGB5_A1)}return(j===t.R16F||j===t.R32F||j===t.RG16F||j===t.RG32F||j===t.RGBA16F||j===t.RGBA32F)&&e.get("EXT_color_buffer_float"),j}function x(A,M){let F;return A?M===null||M===Nr||M===Hs?F=t.DEPTH24_STENCIL8:M===mi?F=t.DEPTH32F_STENCIL8:M===Zo&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Nr||M===Hs?F=t.DEPTH_COMPONENT24:M===mi?F=t.DEPTH_COMPONENT32F:M===Zo&&(F=t.DEPTH_COMPONENT16),F}function b(A,M){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==Vn&&A.minFilter!==Kn?Math.log2(Math.max(M.width,M.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?M.mipmaps.length:1}function C(A){const M=A.target;M.removeEventListener("dispose",C),R(M),M.isVideoTexture&&c.delete(M)}function w(A){const M=A.target;M.removeEventListener("dispose",w),S(M)}function R(A){const M=i.get(A);if(M.__webglInit===void 0)return;const F=A.source,K=d.get(F);if(K){const J=K[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&T(A),Object.keys(K).length===0&&d.delete(F)}i.remove(A)}function T(A){const M=i.get(A);t.deleteTexture(M.__webglTexture);const F=A.source,K=d.get(F);delete K[M.__cacheKey],o.memory.textures--}function S(A){const M=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let K=0;K<6;K++){if(Array.isArray(M.__webglFramebuffer[K]))for(let J=0;J<M.__webglFramebuffer[K].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[K][J]);else t.deleteFramebuffer(M.__webglFramebuffer[K]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[K])}else{if(Array.isArray(M.__webglFramebuffer))for(let K=0;K<M.__webglFramebuffer.length;K++)t.deleteFramebuffer(M.__webglFramebuffer[K]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let K=0;K<M.__webglColorRenderbuffer.length;K++)M.__webglColorRenderbuffer[K]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[K]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=A.textures;for(let K=0,J=F.length;K<J;K++){const j=i.get(F[K]);j.__webglTexture&&(t.deleteTexture(j.__webglTexture),o.memory.textures--),i.remove(F[K])}i.remove(A)}let P=0;function W(){P=0}function B(){const A=P;return A>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+r.maxTextures),P+=1,A}function $(A){const M=[];return M.push(A.wrapS),M.push(A.wrapT),M.push(A.wrapR||0),M.push(A.magFilter),M.push(A.minFilter),M.push(A.anisotropy),M.push(A.internalFormat),M.push(A.format),M.push(A.type),M.push(A.generateMipmaps),M.push(A.premultiplyAlpha),M.push(A.flipY),M.push(A.unpackAlignment),M.push(A.colorSpace),M.join()}function q(A,M){const F=i.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const K=A.image;if(K===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(K.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{G(F,A,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function X(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){G(F,A,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function Q(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){G(F,A,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function L(A,M){const F=i.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const V={[Lf]:t.REPEAT,[Er]:t.CLAMP_TO_EDGE,[Df]:t.MIRRORED_REPEAT},Y={[Vn]:t.NEAREST,[NS]:t.NEAREST_MIPMAP_NEAREST,[ba]:t.NEAREST_MIPMAP_LINEAR,[Kn]:t.LINEAR,[Xu]:t.LINEAR_MIPMAP_NEAREST,[Tr]:t.LINEAR_MIPMAP_LINEAR},re={[kS]:t.NEVER,[WS]:t.ALWAYS,[zS]:t.LESS,[Nv]:t.LEQUAL,[BS]:t.EQUAL,[GS]:t.GEQUAL,[HS]:t.GREATER,[VS]:t.NOTEQUAL};function Se(A,M){if(M.type===mi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Kn||M.magFilter===Xu||M.magFilter===ba||M.magFilter===Tr||M.minFilter===Kn||M.minFilter===Xu||M.minFilter===ba||M.minFilter===Tr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(A,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(A,t.TEXTURE_WRAP_T,V[M.wrapT]),(A===t.TEXTURE_3D||A===t.TEXTURE_2D_ARRAY)&&t.texParameteri(A,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(A,t.TEXTURE_MAG_FILTER,Y[M.magFilter]),t.texParameteri(A,t.TEXTURE_MIN_FILTER,Y[M.minFilter]),M.compareFunction&&(t.texParameteri(A,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(A,t.TEXTURE_COMPARE_FUNC,re[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Vn||M.minFilter!==ba&&M.minFilter!==Tr||M.type===mi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function $e(A,M){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,M.addEventListener("dispose",C));const K=M.source;let J=d.get(K);J===void 0&&(J={},d.set(K,J));const j=$(M);if(j!==A.__cacheKey){J[j]===void 0&&(J[j]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[j].usedTimes++;const Me=J[A.__cacheKey];Me!==void 0&&(J[A.__cacheKey].usedTimes--,Me.usedTimes===0&&T(M)),A.__cacheKey=j,A.__webglTexture=J[j].texture}return F}function G(A,M,F){let K=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(K=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(K=t.TEXTURE_3D);const J=$e(A,M),j=M.source;n.bindTexture(K,A.__webglTexture,t.TEXTURE0+F);const Me=i.get(j);if(j.version!==Me.__version||J===!0){n.activeTexture(t.TEXTURE0+F);const le=Xe.getPrimaries(Xe.workingColorSpace),me=M.colorSpace===Vi?null:Xe.getPrimaries(M.colorSpace),We=M.colorSpace===Vi||le===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,We);let ne=y(M.image,!1,r.maxTextureSize);ne=ot(M,ne);const ge=s.convert(M.format,M.colorSpace),Ae=s.convert(M.type);let Re=v(M.internalFormat,ge,Ae,M.colorSpace,M.isVideoTexture);Se(K,M);let _e;const Ve=M.mipmaps,Oe=M.isVideoTexture!==!0,it=Me.__version===void 0||J===!0,D=j.dataReady,ae=b(M,ne);if(M.isDepthTexture)Re=x(M.format===Vs,M.type),it&&(Oe?n.texStorage2D(t.TEXTURE_2D,1,Re,ne.width,ne.height):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,ge,Ae,null));else if(M.isDataTexture)if(Ve.length>0){Oe&&it&&n.texStorage2D(t.TEXTURE_2D,ae,Re,Ve[0].width,Ve[0].height);for(let H=0,Z=Ve.length;H<Z;H++)_e=Ve[H],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,_e.width,_e.height,ge,Ae,_e.data):n.texImage2D(t.TEXTURE_2D,H,Re,_e.width,_e.height,0,ge,Ae,_e.data);M.generateMipmaps=!1}else Oe?(it&&n.texStorage2D(t.TEXTURE_2D,ae,Re,ne.width,ne.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ne.width,ne.height,ge,Ae,ne.data)):n.texImage2D(t.TEXTURE_2D,0,Re,ne.width,ne.height,0,ge,Ae,ne.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Oe&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Re,Ve[0].width,Ve[0].height,ne.depth);for(let H=0,Z=Ve.length;H<Z;H++)if(_e=Ve[H],M.format!==zn)if(ge!==null)if(Oe){if(D)if(M.layerUpdates.size>0){const fe=Nm(_e.width,_e.height,M.format,M.type);for(const ue of M.layerUpdates){const Ne=_e.data.subarray(ue*fe/_e.data.BYTES_PER_ELEMENT,(ue+1)*fe/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,ue,_e.width,_e.height,1,ge,Ne)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,ne.depth,ge,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,H,Re,_e.width,_e.height,ne.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Oe?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,H,0,0,0,_e.width,_e.height,ne.depth,ge,Ae,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,H,Re,_e.width,_e.height,ne.depth,0,ge,Ae,_e.data)}else{Oe&&it&&n.texStorage2D(t.TEXTURE_2D,ae,Re,Ve[0].width,Ve[0].height);for(let H=0,Z=Ve.length;H<Z;H++)_e=Ve[H],M.format!==zn?ge!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,H,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,H,Re,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Oe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,_e.width,_e.height,ge,Ae,_e.data):n.texImage2D(t.TEXTURE_2D,H,Re,_e.width,_e.height,0,ge,Ae,_e.data)}else if(M.isDataArrayTexture)if(Oe){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,ae,Re,ne.width,ne.height,ne.depth),D)if(M.layerUpdates.size>0){const H=Nm(ne.width,ne.height,M.format,M.type);for(const Z of M.layerUpdates){const fe=ne.data.subarray(Z*H/ne.data.BYTES_PER_ELEMENT,(Z+1)*H/ne.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Z,ne.width,ne.height,1,ge,Ae,fe)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ae,ne.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,ne.width,ne.height,ne.depth,0,ge,Ae,ne.data);else if(M.isData3DTexture)Oe?(it&&n.texStorage3D(t.TEXTURE_3D,ae,Re,ne.width,ne.height,ne.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,ge,Ae,ne.data)):n.texImage3D(t.TEXTURE_3D,0,Re,ne.width,ne.height,ne.depth,0,ge,Ae,ne.data);else if(M.isFramebufferTexture){if(it)if(Oe)n.texStorage2D(t.TEXTURE_2D,ae,Re,ne.width,ne.height);else{let H=ne.width,Z=ne.height;for(let fe=0;fe<ae;fe++)n.texImage2D(t.TEXTURE_2D,fe,Re,H,Z,0,ge,Ae,null),H>>=1,Z>>=1}}else if(Ve.length>0){if(Oe&&it){const H=Te(Ve[0]);n.texStorage2D(t.TEXTURE_2D,ae,Re,H.width,H.height)}for(let H=0,Z=Ve.length;H<Z;H++)_e=Ve[H],Oe?D&&n.texSubImage2D(t.TEXTURE_2D,H,0,0,ge,Ae,_e):n.texImage2D(t.TEXTURE_2D,H,Re,ge,Ae,_e);M.generateMipmaps=!1}else if(Oe){if(it){const H=Te(ne);n.texStorage2D(t.TEXTURE_2D,ae,Re,H.width,H.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ae,ne)}else n.texImage2D(t.TEXTURE_2D,0,Re,ge,Ae,ne);m(M)&&f(K),Me.__version=j.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function te(A,M,F){if(M.image.length!==6)return;const K=$e(A,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,A.__webglTexture,t.TEXTURE0+F);const j=i.get(J);if(J.version!==j.__version||K===!0){n.activeTexture(t.TEXTURE0+F);const Me=Xe.getPrimaries(Xe.workingColorSpace),le=M.colorSpace===Vi?null:Xe.getPrimaries(M.colorSpace),me=M.colorSpace===Vi||Me===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const We=M.isCompressedTexture||M.image[0].isCompressedTexture,ne=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let Z=0;Z<6;Z++)!We&&!ne?ge[Z]=y(M.image[Z],!0,r.maxCubemapSize):ge[Z]=ne?M.image[Z].image:M.image[Z],ge[Z]=ot(M,ge[Z]);const Ae=ge[0],Re=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),Ve=v(M.internalFormat,Re,_e,M.colorSpace),Oe=M.isVideoTexture!==!0,it=j.__version===void 0||K===!0,D=J.dataReady;let ae=b(M,Ae);Se(t.TEXTURE_CUBE_MAP,M);let H;if(We){Oe&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Ve,Ae.width,Ae.height);for(let Z=0;Z<6;Z++){H=ge[Z].mipmaps;for(let fe=0;fe<H.length;fe++){const ue=H[fe];M.format!==zn?Re!==null?Oe?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,ue.width,ue.height,Re,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,Ve,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,0,0,ue.width,ue.height,Re,_e,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe,Ve,ue.width,ue.height,0,Re,_e,ue.data)}}}else{if(H=M.mipmaps,Oe&&it){H.length>0&&ae++;const Z=Te(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,ae,Ve,Z.width,Z.height)}for(let Z=0;Z<6;Z++)if(ne){Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,ge[Z].width,ge[Z].height,Re,_e,ge[Z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,ge[Z].width,ge[Z].height,0,Re,_e,ge[Z].data);for(let fe=0;fe<H.length;fe++){const Ne=H[fe].image[Z].image;Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Ne.width,Ne.height,Re,_e,Ne.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,Ve,Ne.width,Ne.height,0,Re,_e,Ne.data)}}else{Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,0,0,Re,_e,ge[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,0,Ve,Re,_e,ge[Z]);for(let fe=0;fe<H.length;fe++){const ue=H[fe];Oe?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,0,0,Re,_e,ue.image[Z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Z,fe+1,Ve,Re,_e,ue.image[Z])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),j.__version=J.version,M.onUpdate&&M.onUpdate(M)}A.__version=M.version}function pe(A,M,F,K,J,j){const Me=s.convert(F.format,F.colorSpace),le=s.convert(F.type),me=v(F.internalFormat,Me,le,F.colorSpace),We=i.get(M),ne=i.get(F);if(ne.__renderTarget=M,!We.__hasExternalTextures){const ge=Math.max(1,M.width>>j),Ae=Math.max(1,M.height>>j);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,j,me,ge,Ae,M.depth,0,Me,le,null):n.texImage2D(J,j,me,ge,Ae,0,Me,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,A),He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,K,J,ne.__webglTexture,0,Be(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,K,J,ne.__webglTexture,j),n.bindFramebuffer(t.FRAMEBUFFER,null)}function se(A,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,A),M.depthBuffer){const K=M.depthTexture,J=K&&K.isDepthTexture?K.type:null,j=x(M.stencilBuffer,J),Me=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,le=Be(M);He(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,le,j,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,le,j,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,j,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Me,t.RENDERBUFFER,A)}else{const K=M.textures;for(let J=0;J<K.length;J++){const j=K[J],Me=s.convert(j.format,j.colorSpace),le=s.convert(j.type),me=v(j.internalFormat,Me,le,j.colorSpace),We=Be(M);F&&He(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,We,me,M.width,M.height):He(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,We,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ce(A,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,A),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const K=i.get(M.depthTexture);K.__renderTarget=M,(!K.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),q(M.depthTexture,0);const J=K.__webglTexture,j=Be(M);if(M.depthTexture.format===bs)He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===Vs)He(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,j):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function De(A){const M=i.get(A),F=A.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==A.depthTexture){const K=A.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),K){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,K.removeEventListener("dispose",J)};K.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=K}if(A.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ce(M.__webglFramebuffer,A)}else if(F){M.__webglDepthbuffer=[];for(let K=0;K<6;K++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[K]),M.__webglDepthbuffer[K]===void 0)M.__webglDepthbuffer[K]=t.createRenderbuffer(),se(M.__webglDepthbuffer[K],A,!1);else{const J=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,j=M.__webglDepthbuffer[K];t.bindRenderbuffer(t.RENDERBUFFER,j),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,j)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),se(M.__webglDepthbuffer,A,!1);else{const K=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,K,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function ke(A,M,F){const K=i.get(A);M!==void 0&&pe(K.__webglFramebuffer,A,A.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&De(A)}function dt(A){const M=A.texture,F=i.get(A),K=i.get(M);A.addEventListener("dispose",w);const J=A.textures,j=A.isWebGLCubeRenderTarget===!0,Me=J.length>1;if(Me||(K.__webglTexture===void 0&&(K.__webglTexture=t.createTexture()),K.__version=M.version,o.memory.textures++),j){F.__webglFramebuffer=[];for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[le]=[];for(let me=0;me<M.mipmaps.length;me++)F.__webglFramebuffer[le][me]=t.createFramebuffer()}else F.__webglFramebuffer[le]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let le=0;le<M.mipmaps.length;le++)F.__webglFramebuffer[le]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Me)for(let le=0,me=J.length;le<me;le++){const We=i.get(J[le]);We.__webglTexture===void 0&&(We.__webglTexture=t.createTexture(),o.memory.textures++)}if(A.samples>0&&He(A)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let le=0;le<J.length;le++){const me=J[le];F.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[le]);const We=s.convert(me.format,me.colorSpace),ne=s.convert(me.type),ge=v(me.internalFormat,We,ne,me.colorSpace,A.isXRRenderTarget===!0),Ae=Be(A);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,ge,A.width,A.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,F.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),se(F.__webglDepthRenderbuffer,A,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(j){n.bindTexture(t.TEXTURE_CUBE_MAP,K.__webglTexture),Se(t.TEXTURE_CUBE_MAP,M);for(let le=0;le<6;le++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(F.__webglFramebuffer[le][me],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,me);else pe(F.__webglFramebuffer[le],A,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Me){for(let le=0,me=J.length;le<me;le++){const We=J[le],ne=i.get(We);n.bindTexture(t.TEXTURE_2D,ne.__webglTexture),Se(t.TEXTURE_2D,We),pe(F.__webglFramebuffer,A,We,t.COLOR_ATTACHMENT0+le,t.TEXTURE_2D,0),m(We)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(le=A.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,K.__webglTexture),Se(le,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(F.__webglFramebuffer[me],A,M,t.COLOR_ATTACHMENT0,le,me);else pe(F.__webglFramebuffer,A,M,t.COLOR_ATTACHMENT0,le,0);m(M)&&f(le),n.unbindTexture()}A.depthBuffer&&De(A)}function Ge(A){const M=A.textures;for(let F=0,K=M.length;F<K;F++){const J=M[F];if(m(J)){const j=g(A),Me=i.get(J).__webglTexture;n.bindTexture(j,Me),f(j),n.unbindTexture()}}}const xt=[],U=[];function _n(A){if(A.samples>0){if(He(A)===!1){const M=A.textures,F=A.width,K=A.height;let J=t.COLOR_BUFFER_BIT;const j=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Me=i.get(A),le=M.length>1;if(le)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let me=0;me<M.length;me++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const We=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,We,0)}t.blitFramebuffer(0,0,F,K,0,0,F,K,J,t.NEAREST),l===!0&&(xt.length=0,U.length=0,xt.push(t.COLOR_ATTACHMENT0+me),A.depthBuffer&&A.resolveDepthBuffer===!1&&(xt.push(j),U.push(j),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,xt))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Me.__webglColorRenderbuffer[me]);const We=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Me.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,We,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const M=A.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Be(A){return Math.min(r.maxSamples,A.samples)}function He(A){const M=i.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function we(A){const M=o.render.frame;c.get(A)!==M&&(c.set(A,M),A.update())}function ot(A,M){const F=A.colorSpace,K=A.format,J=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==$s&&F!==Vi&&(Xe.getTransfer(F)===tt?(K!==zn||J!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Te(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(u.width=A.naturalWidth||A.width,u.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(u.width=A.displayWidth,u.height=A.displayHeight):(u.width=A.width,u.height=A.height),u}this.allocateTextureUnit=B,this.resetTextureUnits=W,this.setTexture2D=q,this.setTexture2DArray=X,this.setTexture3D=Q,this.setTextureCube=L,this.rebindTextures=ke,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=_n,this.setupDepthRenderbuffer=De,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=He}function fA(t,e){function n(i,r=Vi){let s;const o=Xe.getTransfer(r);if(i===Ti)return t.UNSIGNED_BYTE;if(i===rh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===wv)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Ev)return t.BYTE;if(i===Tv)return t.SHORT;if(i===Zo)return t.UNSIGNED_SHORT;if(i===ih)return t.INT;if(i===Nr)return t.UNSIGNED_INT;if(i===mi)return t.FLOAT;if(i===oa)return t.HALF_FLOAT;if(i===Av)return t.ALPHA;if(i===Cv)return t.RGB;if(i===zn)return t.RGBA;if(i===Rv)return t.LUMINANCE;if(i===bv)return t.LUMINANCE_ALPHA;if(i===bs)return t.DEPTH_COMPONENT;if(i===Vs)return t.DEPTH_STENCIL;if(i===Pv)return t.RED;if(i===oh)return t.RED_INTEGER;if(i===Lv)return t.RG;if(i===ah)return t.RG_INTEGER;if(i===lh)return t.RGBA_INTEGER;if(i===pl||i===ml||i===gl||i===_l)if(o===tt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===pl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_l)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===pl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ml)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===gl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_l)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Nf||i===If||i===Uf||i===Of)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Nf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===If)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Uf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Of)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ff||i===kf||i===zf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Ff||i===kf)return o===tt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===zf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===Xf||i===jf||i===$f||i===Yf||i===qf||i===Kf||i===Zf||i===Qf||i===Jf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Bf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Hf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Vf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Gf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Wf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Xf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===jf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===$f)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Yf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===qf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Kf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Zf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Qf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Jf)return o===tt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===vl||i===ed||i===td)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===vl)return o===tt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ed)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===td)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Dv||i===nd||i===id||i===rd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===vl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===nd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===id)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===rd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Hs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class dA extends En{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Ka extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const hA={type:"move"};class vc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ka,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ka,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ka,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(u,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],d=c.position.distanceTo(h.position),p=.02,_=.005;u.inputState.pinching&&d>p+_?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&d<=p-_&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(hA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Ka;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const pA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,mA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class gA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new rr({vertexShader:pA,fragmentShader:mA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Zn(new mu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class _A extends kr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,h=null,d=null,p=null,_=null;const y=new gA,m=n.getContextAttributes();let f=null,g=null;const v=[],x=[],b=new be;let C=null;const w=new En;w.viewport=new St;const R=new En;R.viewport=new St;const T=[w,R],S=new dA;let P=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(G){let te=v[G];return te===void 0&&(te=new vc,v[G]=te),te.getTargetRaySpace()},this.getControllerGrip=function(G){let te=v[G];return te===void 0&&(te=new vc,v[G]=te),te.getGripSpace()},this.getHand=function(G){let te=v[G];return te===void 0&&(te=new vc,v[G]=te),te.getHandSpace()};function B(G){const te=x.indexOf(G.inputSource);if(te===-1)return;const pe=v[te];pe!==void 0&&(pe.update(G.inputSource,G.frame,u||o),pe.dispatchEvent({type:G.type,data:G.inputSource}))}function $(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",$),r.removeEventListener("inputsourceschange",q);for(let G=0;G<v.length;G++){const te=x[G];te!==null&&(x[G]=null,v[G].disconnect(te))}P=null,W=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,g=null,$e.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(G){s=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(G){a=G,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(G){u=G},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(G){if(r=G,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",$),r.addEventListener("inputsourceschange",q),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,te),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Ir(p.framebufferWidth,p.framebufferHeight,{format:zn,type:Ti,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,pe=null,se=null;m.depth&&(se=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,te=m.stencil?Vs:bs,pe=m.stencil?Hs:Nr);const Ce={colorFormat:n.RGBA8,depthFormat:se,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Ce),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Ir(d.textureWidth,d.textureHeight,{format:zn,type:Ti,depthTexture:new $v(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),$e.setContext(r),$e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(G){for(let te=0;te<G.removed.length;te++){const pe=G.removed[te],se=x.indexOf(pe);se>=0&&(x[se]=null,v[se].disconnect(pe))}for(let te=0;te<G.added.length;te++){const pe=G.added[te];let se=x.indexOf(pe);if(se===-1){for(let De=0;De<v.length;De++)if(De>=x.length){x.push(pe),se=De;break}else if(x[De]===null){x[De]=pe,se=De;break}if(se===-1)break}const Ce=v[se];Ce&&Ce.connect(pe)}}const X=new O,Q=new O;function L(G,te,pe){X.setFromMatrixPosition(te.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const se=X.distanceTo(Q),Ce=te.projectionMatrix.elements,De=pe.projectionMatrix.elements,ke=Ce[14]/(Ce[10]-1),dt=Ce[14]/(Ce[10]+1),Ge=(Ce[9]+1)/Ce[5],xt=(Ce[9]-1)/Ce[5],U=(Ce[8]-1)/Ce[0],_n=(De[8]+1)/De[0],Be=ke*U,He=ke*_n,we=se/(-U+_n),ot=we*-U;if(te.matrixWorld.decompose(G.position,G.quaternion,G.scale),G.translateX(ot),G.translateZ(we),G.matrixWorld.compose(G.position,G.quaternion,G.scale),G.matrixWorldInverse.copy(G.matrixWorld).invert(),Ce[10]===-1)G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const Te=ke+we,A=dt+we,M=Be-ot,F=He+(se-ot),K=Ge*dt/A*Te,J=xt*dt/A*Te;G.projectionMatrix.makePerspective(M,F,K,J,Te,A),G.projectionMatrixInverse.copy(G.projectionMatrix).invert()}}function V(G,te){te===null?G.matrixWorld.copy(G.matrix):G.matrixWorld.multiplyMatrices(te.matrixWorld,G.matrix),G.matrixWorldInverse.copy(G.matrixWorld).invert()}this.updateCamera=function(G){if(r===null)return;let te=G.near,pe=G.far;y.texture!==null&&(y.depthNear>0&&(te=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),S.near=R.near=w.near=te,S.far=R.far=w.far=pe,(P!==S.near||W!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,W=S.far),w.layers.mask=G.layers.mask|2,R.layers.mask=G.layers.mask|4,S.layers.mask=w.layers.mask|R.layers.mask;const se=G.parent,Ce=S.cameras;V(S,se);for(let De=0;De<Ce.length;De++)V(Ce[De],se);Ce.length===2?L(S,w,R):S.projectionMatrix.copy(w.projectionMatrix),Y(G,S,se)};function Y(G,te,pe){pe===null?G.matrix.copy(te.matrixWorld):(G.matrix.copy(pe.matrixWorld),G.matrix.invert(),G.matrix.multiply(te.matrixWorld)),G.matrix.decompose(G.position,G.quaternion,G.scale),G.updateMatrixWorld(!0),G.projectionMatrix.copy(te.projectionMatrix),G.projectionMatrixInverse.copy(te.projectionMatrixInverse),G.isPerspectiveCamera&&(G.fov=Qo*2*Math.atan(1/G.projectionMatrix.elements[5]),G.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(G){l=G,d!==null&&(d.fixedFoveation=G),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=G)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let re=null;function Se(G,te){if(c=te.getViewerPose(u||o),_=te,c!==null){const pe=c.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let se=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,se=!0);for(let De=0;De<pe.length;De++){const ke=pe[De];let dt=null;if(p!==null)dt=p.getViewport(ke);else{const xt=h.getViewSubImage(d,ke);dt=xt.viewport,De===0&&(e.setRenderTargetTextures(g,xt.colorTexture,d.ignoreDepthValues?void 0:xt.depthStencilTexture),e.setRenderTarget(g))}let Ge=T[De];Ge===void 0&&(Ge=new En,Ge.layers.enable(De),Ge.viewport=new St,T[De]=Ge),Ge.matrix.fromArray(ke.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(ke.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(dt.x,dt.y,dt.width,dt.height),De===0&&(S.matrix.copy(Ge.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),se===!0&&S.cameras.push(Ge)}const Ce=r.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")){const De=h.getDepthInformation(pe[0]);De&&De.isValid&&De.texture&&y.init(e,De,r.renderState)}}for(let pe=0;pe<v.length;pe++){const se=x[pe],Ce=v[pe];se!==null&&Ce!==void 0&&Ce.update(se,te,u||o)}re&&re(G,te),te.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:te}),_=null}const $e=new jv;$e.setAnimationLoop(Se),this.setAnimationLoop=function(G){re=G},this.dispose=function(){}}}const pr=new wi,vA=new Mt;function xA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Vv(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===on&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===on&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,x=g.envMapRotation;v&&(m.envMap.value=v,pr.copy(x),pr.x*=-1,pr.y*=-1,pr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(pr.y*=-1,pr.z*=-1),m.envMapRotation.value.setFromMatrix4(vA.makeRotationFromEuler(pr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===on&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function yA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function u(g,v){let x=r[g.id];x===void 0&&(_(g),x=c(g),r[g.id]=x,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const C=e.render.frame;s[g.id]!==C&&(d(g),s[g.id]=C)}function c(g){const v=h();g.__bindingPointIndex=v;const x=t.createBuffer(),b=g.__size,C=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],x=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let C=0,w=x.length;C<w;C++){const R=Array.isArray(x[C])?x[C]:[x[C]];for(let T=0,S=R.length;T<S;T++){const P=R[T];if(p(P,C,T,b)===!0){const W=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let $=0;for(let q=0;q<B.length;q++){const X=B[q],Q=y(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,t.bufferSubData(t.UNIFORM_BUFFER,W+$,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,$),$+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,W,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,x,b){const C=g.value,w=v+"_"+x;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const R=b[w];if(typeof C=="number"||typeof C=="boolean"){if(R!==C)return b[w]=C,!0}else if(R.equals(C)===!1)return R.copy(C),!0}return!1}function _(g){const v=g.uniforms;let x=0;const b=16;for(let w=0,R=v.length;w<R;w++){const T=Array.isArray(v[w])?v[w]:[v[w]];for(let S=0,P=T.length;S<P;S++){const W=T[S],B=Array.isArray(W.value)?W.value:[W.value];for(let $=0,q=B.length;$<q;$++){const X=B[$],Q=y(X),L=x%b,V=L%Q.boundary,Y=L+V;x+=V,Y!==0&&b-Y<Q.storage&&(x+=b-Y),W.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),W.__offset=x,x+=Q.storage}}}const C=x%b;return C>0&&(x+=b-C),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}class SA{constructor(e={}){const{canvas:n=lM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=yn,this.toneMapping=er,this.toneMappingExposure=1;const x=this;let b=!1,C=0,w=0,R=null,T=-1,S=null;const P=new St,W=new St;let B=null;const $=new Je(0);let q=0,X=n.width,Q=n.height,L=1,V=null,Y=null;const re=new St(0,0,X,Q),Se=new St(0,0,X,Q);let $e=!1;const G=new Xv;let te=!1,pe=!1;const se=new Mt,Ce=new Mt,De=new O,ke=new St,dt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function xt(){return R===null?L:1}let U=i;function _n(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${nh}`),n.addEventListener("webglcontextlost",Z,!1),n.addEventListener("webglcontextrestored",fe,!1),n.addEventListener("webglcontextcreationerror",ue,!1),U===null){const N="webgl2";if(U=_n(N,E),U===null)throw _n(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Be,He,we,ot,Te,A,M,F,K,J,j,Me,le,me,We,ne,ge,Ae,Re,_e,Ve,Oe,it,D;function ae(){Be=new AT(U),Be.init(),Oe=new fA(U,Be),He=new xT(U,Be,e,Oe),we=new lA(U,Be),He.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),ot=new bT(U),Te=new $w,A=new cA(U,Be,we,Te,He,Oe,ot),M=new ST(x),F=new wT(x),K=new UM(U),it=new _T(U,K),J=new CT(U,K,ot,it),j=new LT(U,J,K,ot),Re=new PT(U,He,A),ne=new yT(Te),Me=new jw(x,M,F,Be,He,it,ne),le=new xA(x,Te),me=new qw,We=new tA(Be),Ae=new gT(x,M,F,we,j,p,l),ge=new oA(x,j,He),D=new yA(U,ot,He,we),_e=new vT(U,Be,ot),Ve=new RT(U,Be,ot),ot.programs=Me.programs,x.capabilities=He,x.extensions=Be,x.properties=Te,x.renderLists=me,x.shadowMap=ge,x.state=we,x.info=ot}ae();const H=new _A(x,U);this.xr=H,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Be.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Be.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(X,Q,!1))},this.getSize=function(E){return E.set(X,Q)},this.setSize=function(E,N,k=!0){if(H.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=E,Q=N,n.width=Math.floor(E*L),n.height=Math.floor(N*L),k===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(X*L,Q*L).floor()},this.setDrawingBufferSize=function(E,N,k){X=E,Q=N,L=k,n.width=Math.floor(E*k),n.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(re)},this.setViewport=function(E,N,k,z){E.isVector4?re.set(E.x,E.y,E.z,E.w):re.set(E,N,k,z),we.viewport(P.copy(re).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(Se)},this.setScissor=function(E,N,k,z){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,N,k,z),we.scissor(W.copy(Se).multiplyScalar(L).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(E){we.setScissorTest($e=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){Y=E},this.getClearColor=function(E){return E.copy(Ae.getClearColor())},this.setClearColor=function(){Ae.setClearColor.apply(Ae,arguments)},this.getClearAlpha=function(){return Ae.getClearAlpha()},this.setClearAlpha=function(){Ae.setClearAlpha.apply(Ae,arguments)},this.clear=function(E=!0,N=!0,k=!0){let z=0;if(E){let I=!1;if(R!==null){const ie=R.texture.format;I=ie===lh||ie===ah||ie===oh}if(I){const ie=R.texture.type,ce=ie===Ti||ie===Nr||ie===Zo||ie===Hs||ie===rh||ie===sh,ve=Ae.getClearColor(),xe=Ae.getClearAlpha(),Pe=ve.r,Ie=ve.g,ye=ve.b;ce?(_[0]=Pe,_[1]=Ie,_[2]=ye,_[3]=xe,U.clearBufferuiv(U.COLOR,0,_)):(y[0]=Pe,y[1]=Ie,y[2]=ye,y[3]=xe,U.clearBufferiv(U.COLOR,0,y))}else z|=U.COLOR_BUFFER_BIT}N&&(z|=U.DEPTH_BUFFER_BIT),k&&(z|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Z,!1),n.removeEventListener("webglcontextrestored",fe,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),We.dispose(),Te.dispose(),M.dispose(),F.dispose(),j.dispose(),it.dispose(),D.dispose(),Me.dispose(),H.dispose(),H.removeEventListener("sessionstart",gh),H.removeEventListener("sessionend",_h),lr.stop()};function Z(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function fe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ot.autoReset,N=ge.enabled,k=ge.autoUpdate,z=ge.needsUpdate,I=ge.type;ae(),ot.autoReset=E,ge.enabled=N,ge.autoUpdate=k,ge.needsUpdate=z,ge.type=I}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ne(E){const N=E.target;N.removeEventListener("dispose",Ne),_t(N)}function _t(E){Ot(E),Te.remove(E)}function Ot(E){const N=Te.get(E).programs;N!==void 0&&(N.forEach(function(k){Me.releaseProgram(k)}),E.isShaderMaterial&&Me.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,z,I,ie){N===null&&(N=dt);const ce=I.isMesh&&I.matrixWorld.determinant()<0,ve=r0(E,N,k,z,I);we.setMaterial(z,ce);let xe=k.index,Pe=1;if(z.wireframe===!0){if(xe=J.getWireframeAttribute(k),xe===void 0)return;Pe=2}const Ie=k.drawRange,ye=k.attributes.position;let Ye=Ie.start*Pe,rt=(Ie.start+Ie.count)*Pe;ie!==null&&(Ye=Math.max(Ye,ie.start*Pe),rt=Math.min(rt,(ie.start+ie.count)*Pe)),xe!==null?(Ye=Math.max(Ye,0),rt=Math.min(rt,xe.count)):ye!=null&&(Ye=Math.max(Ye,0),rt=Math.min(rt,ye.count));const at=rt-Ye;if(at<0||at===1/0)return;it.setup(I,z,ve,k,xe);let Qt,qe=_e;if(xe!==null&&(Qt=K.get(xe),qe=Ve,qe.setIndex(Qt)),I.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*xt()),qe.setMode(U.LINES)):qe.setMode(U.TRIANGLES);else if(I.isLine){let Ee=z.linewidth;Ee===void 0&&(Ee=1),we.setLineWidth(Ee*xt()),I.isLineSegments?qe.setMode(U.LINES):I.isLineLoop?qe.setMode(U.LINE_LOOP):qe.setMode(U.LINE_STRIP)}else I.isPoints?qe.setMode(U.POINTS):I.isSprite&&qe.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Be.get("WEBGL_multi_draw"))qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Ee=I._multiDrawStarts,ii=I._multiDrawCounts,Ke=I._multiDrawCount,Pn=xe?K.get(xe).bytesPerElement:1,zr=Te.get(z).currentProgram.getUniforms();for(let ln=0;ln<Ke;ln++)zr.setValue(U,"_gl_DrawID",ln),qe.render(Ee[ln]/Pn,ii[ln])}else if(I.isInstancedMesh)qe.renderInstances(Ye,at,I.count);else if(k.isInstancedBufferGeometry){const Ee=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,ii=Math.min(k.instanceCount,Ee);qe.renderInstances(Ye,at,ii)}else qe.render(Ye,at)};function Ze(E,N,k){E.transparent===!0&&E.side===di&&E.forceSinglePass===!1?(E.side=on,E.needsUpdate=!0,fa(E,N,k),E.side=ir,E.needsUpdate=!0,fa(E,N,k),E.side=di):fa(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),f=We.get(k),f.init(N),v.push(f),k.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),E!==k&&E.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const z=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const ie=I.material;if(ie)if(Array.isArray(ie))for(let ce=0;ce<ie.length;ce++){const ve=ie[ce];Ze(ve,k,I),z.add(ve)}else Ze(ie,k,I),z.add(ie)}),v.pop(),f=null,z},this.compileAsync=function(E,N,k=null){const z=this.compile(E,N,k);return new Promise(I=>{function ie(){if(z.forEach(function(ce){Te.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){I(E);return}setTimeout(ie,10)}Be.get("KHR_parallel_shader_compile")!==null?ie():setTimeout(ie,10)})};let bn=null;function ni(E){bn&&bn(E)}function gh(){lr.stop()}function _h(){lr.start()}const lr=new jv;lr.setAnimationLoop(ni),typeof self<"u"&&lr.setContext(self),this.setAnimationLoop=function(E){bn=E,H.setAnimationLoop(E),E===null?lr.stop():lr.start()},H.addEventListener("sessionstart",gh),H.addEventListener("sessionend",_h),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),H.enabled===!0&&H.isPresenting===!0&&(H.cameraAutoUpdate===!0&&H.updateCamera(N),N=H.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,R),f=We.get(E,v.length),f.init(N),v.push(f),Ce.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),G.setFromProjectionMatrix(Ce),pe=this.localClippingEnabled,te=ne.init(this.clippingPlanes,pe),m=me.get(E,g.length),m.init(),g.push(m),H.enabled===!0&&H.isPresenting===!0){const ie=x.xr.getDepthSensingMesh();ie!==null&&vu(ie,N,-1/0,x.sortObjects)}vu(E,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(V,Y),Ge=H.enabled===!1||H.isPresenting===!1||H.hasDepthSensing()===!1,Ge&&Ae.addToRenderList(m,E),this.info.render.frame++,te===!0&&ne.beginShadows();const k=f.state.shadowsArray;ge.render(k,E,N),te===!0&&ne.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,I=m.transmissive;if(f.setupLights(),N.isArrayCamera){const ie=N.cameras;if(I.length>0)for(let ce=0,ve=ie.length;ce<ve;ce++){const xe=ie[ce];xh(z,I,E,xe)}Ge&&Ae.render(E);for(let ce=0,ve=ie.length;ce<ve;ce++){const xe=ie[ce];vh(m,E,xe,xe.viewport)}}else I.length>0&&xh(z,I,E,N),Ge&&Ae.render(E),vh(m,E,N);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,N),it.resetDefaultState(),T=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],te===!0&&ne.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function vu(E,N,k,z){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||G.intersectsSprite(E)){z&&ke.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ce);const ce=j.update(E),ve=E.material;ve.visible&&m.push(E,ce,ve,k,ke.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||G.intersectsObject(E))){const ce=j.update(E),ve=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),ke.copy(E.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ke.copy(ce.boundingSphere.center)),ke.applyMatrix4(E.matrixWorld).applyMatrix4(Ce)),Array.isArray(ve)){const xe=ce.groups;for(let Pe=0,Ie=xe.length;Pe<Ie;Pe++){const ye=xe[Pe],Ye=ve[ye.materialIndex];Ye&&Ye.visible&&m.push(E,ce,Ye,k,ke.z,ye)}}else ve.visible&&m.push(E,ce,ve,k,ke.z,null)}}const ie=E.children;for(let ce=0,ve=ie.length;ce<ve;ce++)vu(ie[ce],N,k,z)}function vh(E,N,k,z){const I=E.opaque,ie=E.transmissive,ce=E.transparent;f.setupLightsView(k),te===!0&&ne.setGlobalState(x.clippingPlanes,k),z&&we.viewport(P.copy(z)),I.length>0&&ca(I,N,k),ie.length>0&&ca(ie,N,k),ce.length>0&&ca(ce,N,k),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function xh(E,N,k,z){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[z.id]===void 0&&(f.state.transmissionRenderTarget[z.id]=new Ir(1,1,{generateMipmaps:!0,type:Be.has("EXT_color_buffer_half_float")||Be.has("EXT_color_buffer_float")?oa:Ti,minFilter:Tr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Xe.workingColorSpace}));const ie=f.state.transmissionRenderTarget[z.id],ce=z.viewport||P;ie.setSize(ce.z,ce.w);const ve=x.getRenderTarget();x.setRenderTarget(ie),x.getClearColor($),q=x.getClearAlpha(),q<1&&x.setClearColor(16777215,.5),x.clear(),Ge&&Ae.render(k);const xe=x.toneMapping;x.toneMapping=er;const Pe=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),f.setupLightsView(z),te===!0&&ne.setGlobalState(x.clippingPlanes,z),ca(E,k,z),A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie),Be.has("WEBGL_multisampled_render_to_texture")===!1){let Ie=!1;for(let ye=0,Ye=N.length;ye<Ye;ye++){const rt=N[ye],at=rt.object,Qt=rt.geometry,qe=rt.material,Ee=rt.group;if(qe.side===di&&at.layers.test(z.layers)){const ii=qe.side;qe.side=on,qe.needsUpdate=!0,yh(at,k,z,Qt,qe,Ee),qe.side=ii,qe.needsUpdate=!0,Ie=!0}}Ie===!0&&(A.updateMultisampleRenderTarget(ie),A.updateRenderTargetMipmap(ie))}x.setRenderTarget(ve),x.setClearColor($,q),Pe!==void 0&&(z.viewport=Pe),x.toneMapping=xe}function ca(E,N,k){const z=N.isScene===!0?N.overrideMaterial:null;for(let I=0,ie=E.length;I<ie;I++){const ce=E[I],ve=ce.object,xe=ce.geometry,Pe=z===null?ce.material:z,Ie=ce.group;ve.layers.test(k.layers)&&yh(ve,N,k,xe,Pe,Ie)}}function yh(E,N,k,z,I,ie){E.onBeforeRender(x,N,k,z,I,ie),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(x,N,k,z,E,ie),I.transparent===!0&&I.side===di&&I.forceSinglePass===!1?(I.side=on,I.needsUpdate=!0,x.renderBufferDirect(k,N,z,I,E,ie),I.side=ir,I.needsUpdate=!0,x.renderBufferDirect(k,N,z,I,E,ie),I.side=di):x.renderBufferDirect(k,N,z,I,E,ie),E.onAfterRender(x,N,k,z,I,ie)}function fa(E,N,k){N.isScene!==!0&&(N=dt);const z=Te.get(E),I=f.state.lights,ie=f.state.shadowsArray,ce=I.state.version,ve=Me.getParameters(E,I.state,ie,N,k),xe=Me.getProgramCacheKey(ve);let Pe=z.programs;z.environment=E.isMeshStandardMaterial?N.environment:null,z.fog=N.fog,z.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||z.environment),z.envMapRotation=z.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Ne),Pe=new Map,z.programs=Pe);let Ie=Pe.get(xe);if(Ie!==void 0){if(z.currentProgram===Ie&&z.lightsStateVersion===ce)return Mh(E,ve),Ie}else ve.uniforms=Me.getUniforms(E),E.onBeforeCompile(ve,x),Ie=Me.acquireProgram(ve,xe),Pe.set(xe,Ie),z.uniforms=ve.uniforms;const ye=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ye.clippingPlanes=ne.uniform),Mh(E,ve),z.needsLights=o0(E),z.lightsStateVersion=ce,z.needsLights&&(ye.ambientLightColor.value=I.state.ambient,ye.lightProbe.value=I.state.probe,ye.directionalLights.value=I.state.directional,ye.directionalLightShadows.value=I.state.directionalShadow,ye.spotLights.value=I.state.spot,ye.spotLightShadows.value=I.state.spotShadow,ye.rectAreaLights.value=I.state.rectArea,ye.ltc_1.value=I.state.rectAreaLTC1,ye.ltc_2.value=I.state.rectAreaLTC2,ye.pointLights.value=I.state.point,ye.pointLightShadows.value=I.state.pointShadow,ye.hemisphereLights.value=I.state.hemi,ye.directionalShadowMap.value=I.state.directionalShadowMap,ye.directionalShadowMatrix.value=I.state.directionalShadowMatrix,ye.spotShadowMap.value=I.state.spotShadowMap,ye.spotLightMatrix.value=I.state.spotLightMatrix,ye.spotLightMap.value=I.state.spotLightMap,ye.pointShadowMap.value=I.state.pointShadowMap,ye.pointShadowMatrix.value=I.state.pointShadowMatrix),z.currentProgram=Ie,z.uniformsList=null,Ie}function Sh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=xl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Mh(E,N){const k=Te.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function r0(E,N,k,z,I){N.isScene!==!0&&(N=dt),A.resetTextureUnits();const ie=N.fog,ce=z.isMeshStandardMaterial?N.environment:null,ve=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:$s,xe=(z.isMeshStandardMaterial?F:M).get(z.envMap||ce),Pe=z.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Ie=!!k.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),ye=!!k.morphAttributes.position,Ye=!!k.morphAttributes.normal,rt=!!k.morphAttributes.color;let at=er;z.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(at=x.toneMapping);const Qt=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,qe=Qt!==void 0?Qt.length:0,Ee=Te.get(z),ii=f.state.lights;if(te===!0&&(pe===!0||E!==S)){const vn=E===S&&z.id===T;ne.setState(z,E,vn)}let Ke=!1;z.version===Ee.__version?(Ee.needsLights&&Ee.lightsStateVersion!==ii.state.version||Ee.outputColorSpace!==ve||I.isBatchedMesh&&Ee.batching===!1||!I.isBatchedMesh&&Ee.batching===!0||I.isBatchedMesh&&Ee.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Ee.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Ee.instancing===!1||!I.isInstancedMesh&&Ee.instancing===!0||I.isSkinnedMesh&&Ee.skinning===!1||!I.isSkinnedMesh&&Ee.skinning===!0||I.isInstancedMesh&&Ee.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Ee.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Ee.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Ee.instancingMorph===!1&&I.morphTexture!==null||Ee.envMap!==xe||z.fog===!0&&Ee.fog!==ie||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==ne.numPlanes||Ee.numIntersection!==ne.numIntersection)||Ee.vertexAlphas!==Pe||Ee.vertexTangents!==Ie||Ee.morphTargets!==ye||Ee.morphNormals!==Ye||Ee.morphColors!==rt||Ee.toneMapping!==at||Ee.morphTargetsCount!==qe)&&(Ke=!0):(Ke=!0,Ee.__version=z.version);let Pn=Ee.currentProgram;Ke===!0&&(Pn=fa(z,N,I));let zr=!1,ln=!1,qs=!1;const lt=Pn.getUniforms(),Xn=Ee.uniforms;if(we.useProgram(Pn.program)&&(zr=!0,ln=!0,qs=!0),z.id!==T&&(T=z.id,ln=!0),zr||S!==E){we.buffers.depth.getReversed()?(se.copy(E.projectionMatrix),cM(se),fM(se),lt.setValue(U,"projectionMatrix",se)):lt.setValue(U,"projectionMatrix",E.projectionMatrix),lt.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ri=lt.map.cameraPosition;Ri!==void 0&&Ri.setValue(U,De.setFromMatrixPosition(E.matrixWorld)),He.logarithmicDepthBuffer&&lt.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&lt.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,ln=!0,qs=!0)}if(I.isSkinnedMesh){lt.setOptional(U,I,"bindMatrix"),lt.setOptional(U,I,"bindMatrixInverse");const vn=I.skeleton;vn&&(vn.boneTexture===null&&vn.computeBoneTexture(),lt.setValue(U,"boneTexture",vn.boneTexture,A))}I.isBatchedMesh&&(lt.setOptional(U,I,"batchingTexture"),lt.setValue(U,"batchingTexture",I._matricesTexture,A),lt.setOptional(U,I,"batchingIdTexture"),lt.setValue(U,"batchingIdTexture",I._indirectTexture,A),lt.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&lt.setValue(U,"batchingColorTexture",I._colorsTexture,A));const Ks=k.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Re.update(I,k,Pn),(ln||Ee.receiveShadow!==I.receiveShadow)&&(Ee.receiveShadow=I.receiveShadow,lt.setValue(U,"receiveShadow",I.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(Xn.envMap.value=xe,Xn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&N.environment!==null&&(Xn.envMapIntensity.value=N.environmentIntensity),ln&&(lt.setValue(U,"toneMappingExposure",x.toneMappingExposure),Ee.needsLights&&s0(Xn,qs),ie&&z.fog===!0&&le.refreshFogUniforms(Xn,ie),le.refreshMaterialUniforms(Xn,z,L,Q,f.state.transmissionRenderTarget[E.id]),xl.upload(U,Sh(Ee),Xn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(xl.upload(U,Sh(Ee),Xn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&lt.setValue(U,"center",I.center),lt.setValue(U,"modelViewMatrix",I.modelViewMatrix),lt.setValue(U,"normalMatrix",I.normalMatrix),lt.setValue(U,"modelMatrix",I.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const vn=z.uniformsGroups;for(let Ri=0,bi=vn.length;Ri<bi;Ri++){const Eh=vn[Ri];D.update(Eh,Pn),D.bind(Eh,Pn)}}return Pn}function s0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function o0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return C},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,k){Te.get(E.texture).__webglTexture=N,Te.get(E.depthTexture).__webglTexture=k;const z=Te.get(E);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=k===void 0,z.__autoAllocateDepthBuffer||Be.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const k=Te.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,k=0){R=E,C=N,w=k;let z=!0,I=null,ie=!1,ce=!1;if(E){const xe=Te.get(E);if(xe.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(U.FRAMEBUFFER,null),z=!1;else if(xe.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(xe.__hasExternalTextures)A.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const ye=E.depthTexture;if(xe.__boundDepthTexture!==ye){if(ye!==null&&Te.has(ye)&&(E.width!==ye.image.width||E.height!==ye.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(ce=!0);const Ie=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ie[N])?I=Ie[N][k]:I=Ie[N],ie=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?I=Te.get(E).__webglMultisampledFramebuffer:Array.isArray(Ie)?I=Ie[k]:I=Ie,P.copy(E.viewport),W.copy(E.scissor),B=E.scissorTest}else P.copy(re).multiplyScalar(L).floor(),W.copy(Se).multiplyScalar(L).floor(),B=$e;if(we.bindFramebuffer(U.FRAMEBUFFER,I)&&z&&we.drawBuffers(E,I),we.viewport(P),we.scissor(W),we.setScissorTest(B),ie){const xe=Te.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,xe.__webglTexture,k)}else if(ce){const xe=Te.get(E.texture),Pe=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,xe.__webglTexture,k||0,Pe)}T=-1},this.readRenderTargetPixels=function(E,N,k,z,I,ie,ce){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){we.bindFramebuffer(U.FRAMEBUFFER,ve);try{const xe=E.texture,Pe=xe.format,Ie=xe.type;if(!He.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!He.textureTypeReadable(Ie)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-z&&k>=0&&k<=E.height-I&&U.readPixels(N,k,z,I,Oe.convert(Pe),Oe.convert(Ie),ie)}finally{const xe=R!==null?Te.get(R).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,xe)}}},this.readRenderTargetPixelsAsync=async function(E,N,k,z,I,ie,ce){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ce!==void 0&&(ve=ve[ce]),ve){const xe=E.texture,Pe=xe.format,Ie=xe.type;if(!He.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!He.textureTypeReadable(Ie))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-z&&k>=0&&k<=E.height-I){we.bindFramebuffer(U.FRAMEBUFFER,ve);const ye=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.bufferData(U.PIXEL_PACK_BUFFER,ie.byteLength,U.STREAM_READ),U.readPixels(N,k,z,I,Oe.convert(Pe),Oe.convert(Ie),0);const Ye=R!==null?Te.get(R).__webglFramebuffer:null;we.bindFramebuffer(U.FRAMEBUFFER,Ye);const rt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await uM(U,rt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,ye),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,ie),U.deleteBuffer(ye),U.deleteSync(rt),ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,k=0){E.isTexture!==!0&&(yo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const z=Math.pow(2,-k),I=Math.floor(E.image.width*z),ie=Math.floor(E.image.height*z),ce=N!==null?N.x:0,ve=N!==null?N.y:0;A.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,k,0,0,ce,ve,I,ie),we.unbindTexture()},this.copyTextureToTexture=function(E,N,k=null,z=null,I=0){E.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,E=arguments[1],N=arguments[2],I=arguments[3]||0,k=null);let ie,ce,ve,xe,Pe,Ie,ye,Ye,rt;const at=E.isCompressedTexture?E.mipmaps[I]:E.image;k!==null?(ie=k.max.x-k.min.x,ce=k.max.y-k.min.y,ve=k.isBox3?k.max.z-k.min.z:1,xe=k.min.x,Pe=k.min.y,Ie=k.isBox3?k.min.z:0):(ie=at.width,ce=at.height,ve=at.depth||1,xe=0,Pe=0,Ie=0),z!==null?(ye=z.x,Ye=z.y,rt=z.z):(ye=0,Ye=0,rt=0);const Qt=Oe.convert(N.format),qe=Oe.convert(N.type);let Ee;N.isData3DTexture?(A.setTexture3D(N,0),Ee=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(A.setTexture2DArray(N,0),Ee=U.TEXTURE_2D_ARRAY):(A.setTexture2D(N,0),Ee=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const ii=U.getParameter(U.UNPACK_ROW_LENGTH),Ke=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Pn=U.getParameter(U.UNPACK_SKIP_PIXELS),zr=U.getParameter(U.UNPACK_SKIP_ROWS),ln=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,at.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,at.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,xe),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ie);const qs=E.isDataArrayTexture||E.isData3DTexture,lt=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Xn=Te.get(E),Ks=Te.get(N),vn=Te.get(Xn.__renderTarget),Ri=Te.get(Ks.__renderTarget);we.bindFramebuffer(U.READ_FRAMEBUFFER,vn.__webglFramebuffer),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ri.__webglFramebuffer);for(let bi=0;bi<ve;bi++)qs&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(E).__webglTexture,I,Ie+bi),E.isDepthTexture?(lt&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,I,rt+bi),U.blitFramebuffer(xe,Pe,ie,ce,ye,Ye,ie,ce,U.DEPTH_BUFFER_BIT,U.NEAREST)):lt?U.copyTexSubImage3D(Ee,I,ye,Ye,rt+bi,xe,Pe,ie,ce):U.copyTexSubImage2D(Ee,I,ye,Ye,rt+bi,xe,Pe,ie,ce);we.bindFramebuffer(U.READ_FRAMEBUFFER,null),we.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else lt?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(Ee,I,ye,Ye,rt,ie,ce,ve,Qt,qe,at.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(Ee,I,ye,Ye,rt,ie,ce,ve,Qt,at.data):U.texSubImage3D(Ee,I,ye,Ye,rt,ie,ce,ve,Qt,qe,at):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,ye,Ye,ie,ce,Qt,qe,at.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,ye,Ye,at.width,at.height,Qt,at.data):U.texSubImage2D(U.TEXTURE_2D,I,ye,Ye,ie,ce,Qt,qe,at);U.pixelStorei(U.UNPACK_ROW_LENGTH,ii),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ke),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Pn),U.pixelStorei(U.UNPACK_SKIP_ROWS,zr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,ln),I===0&&N.generateMipmaps&&U.generateMipmap(Ee),we.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k=null,z=null,I=0){return E.isTexture!==!0&&(yo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,z=arguments[1]||null,E=arguments[2],N=arguments[3],I=arguments[4]||0),yo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,k,z,I)},this.initRenderTarget=function(E){Te.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),we.unbindTexture()},this.resetState=function(){C=0,w=0,R=null,we.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Xe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Xe._getUnpackColorSpace()}}class MA extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wi,this.environmentIntensity=1,this.environmentRotation=new wi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class EA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=sd,this.updateRanges=[],this.version=0,this.uuid=vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Xt=new O;class Xl{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyMatrix4(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.applyNormalMatrix(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Xt.fromBufferAttribute(this,n),Xt.transformDirection(e),this.setXYZ(n,Xt.x,Xt.y,Xt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=kn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Qe(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=kn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=kn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=kn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=kn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array),s=Qe(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new Gn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Xl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Qv extends la{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Je(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ts;const uo=new O,ns=new O,is=new O,rs=new be,co=new be,Jv=new Mt,Za=new O,fo=new O,Qa=new O,Im=new be,xc=new be,Um=new be;class TA extends an{constructor(e=new Qv){if(super(),this.isSprite=!0,this.type="Sprite",ts===void 0){ts=new Ci;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new EA(n,5);ts.setIndex([0,1,2,0,2,3]),ts.setAttribute("position",new Xl(i,3,0,!1)),ts.setAttribute("uv",new Xl(i,2,3,!1))}this.geometry=ts,this.material=e,this.center=new be(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ns.setFromMatrixScale(this.matrixWorld),Jv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ns.multiplyScalar(-is.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Ja(Za.set(-.5,-.5,0),is,o,ns,r,s),Ja(fo.set(.5,-.5,0),is,o,ns,r,s),Ja(Qa.set(.5,.5,0),is,o,ns,r,s),Im.set(0,0),xc.set(1,0),Um.set(1,1);let a=e.ray.intersectTriangle(Za,fo,Qa,!1,uo);if(a===null&&(Ja(fo.set(-.5,.5,0),is,o,ns,r,s),xc.set(0,1),a=e.ray.intersectTriangle(Za,Qa,fo,!1,uo),a===null))return;const l=e.ray.origin.distanceTo(uo);l<e.near||l>e.far||n.push({distance:l,point:uo.clone(),uv:Tn.getInterpolation(uo,Za,fo,Qa,Im,xc,Um,new be),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Ja(t,e,n,i,r,s){rs.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(co.x=s*rs.x-r*rs.y,co.y=r*rs.x+s*rs.y):co.copy(rs),t.copy(e),t.x+=co.x,t.y+=co.y,t.applyMatrix4(Jv)}class hh extends Ci{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],h=new O,d=new O,p=[],_=[],y=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const C=b/n;h.x=-e*Math.cos(r+C*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+C*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(C+x,1-v),g.push(u++)}c.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const v=c[f][g+1],x=c[f][g],b=c[f+1][g],C=c[f+1][g+1];(f!==0||o>0)&&p.push(v,x,C),(f!==i-1||l<Math.PI)&&p.push(x,b,C)}this.setIndex(p),this.setAttribute("position",new ti(_,3)),this.setAttribute("normal",new ti(y,3)),this.setAttribute("uv",new ti(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const Om={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class wA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,h){return u.push(c,h),this},this.removeHandler=function(c){const h=u.indexOf(c);return h!==-1&&u.splice(h,2),this},this.getHandler=function(c){for(let h=0,d=u.length;h<d;h+=2){const p=u[h],_=u[h+1];if(p.global&&(p.lastIndex=0),p.test(c))return _}return null}}}const AA=new wA;class ph{constructor(e){this.manager=e!==void 0?e:AA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ph.DEFAULT_MATERIAL_NAME="__DEFAULT";class CA extends ph{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Om.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Jo("img");function l(){c(),Om.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(h){c(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class RA extends ph{constructor(e){super(e)}load(e,n,i,r){const s=new qt,o=new CA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class Fm{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class bA extends kr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nh);function PA(){return de.jsxs("div",{children:[de.jsx("div",{className:"mouse fixed left-1/2 bottom-4 transform -translate-x-1/2 flex flex-col space-y-2"}),de.jsx("div",{className:"scrollOnMouse animate-scrollAnimation fixed left-1/2 bottom-4 transform -translate-x-1/2 flex flex-col space-y-2"})]})}const LA=({sections:t})=>{const[e,n]=pt.useState(!1),[i,r]=pt.useState(!0),[s,o]=pt.useState(!1),a=()=>{n(!e)},l=()=>{o(!s)};pt.useEffect(()=>{document.querySelectorAll(".section");const c=document.getElementById("hamburger"),h=()=>{r(!1),a(),l(),c.classList.toggle("is-active")};return c&&c.addEventListener("click",h),()=>{c&&c.removeEventListener("click",h)}},[e]);const u=c=>{const h=document.querySelectorAll(".section")[c];h&&(h.scrollIntoView({behavior:"smooth"}),n(!1),o(!1),document.getElementById("hamburger").classList.remove("is-active"))};return de.jsxs("div",{className:"hamburger-container z-50",children:[de.jsxs("div",{className:`panel fixed flex flex-col justify-between top-0 ${e?"right-0 smoothOpen":i?"-right-96":"smoothClose -right-96"} w-96 bg-gray-50 h-full shadow-lg py-24 px-4`,children:[de.jsx("div",{className:"w-10/12 h-5/6 flex flex-col justify-center",children:t.map((c,h)=>de.jsx("div",{className:"flex items-center h-20 cursor-pointer",onClick:()=>u(h),children:de.jsx("p",{className:"font-bold text-3xl hover:text-primary transition ease-in delay-50",children:c})},h))}),de.jsxs("div",{className:"h-20",children:[de.jsx("hr",{className:"w-3/4 h-[2px] my-4 bg-primary border-0"}),de.jsx("p",{className:"text-lg",children:"Mathys Farineau - 2024"})]})]}),de.jsx("div",{className:"hamburger mx-4",id:"hamburger",children:[...Array(9)].map((c,h)=>de.jsx("span",{className:"circle"},h))})]})},DA=({article:t})=>{var i;const n=((i=[{name:"FRONT-END",icons:[{src:"images/javascript.png",title:"JavaScript"},{src:"images/tailwindcss.png",title:"Tailwind"},{src:"images/extjs.png",title:"ExtJs"},{src:"images/react.png",title:"React"}]},{name:"BACK-END",icons:[{src:"images/java.png",title:"Java"},{src:"images/php.png",title:"PHP"},{src:"images/spring.png",title:"Spring"},{src:"images/symfony.png",title:"Symfony"}]},{name:"TOOLS",icons:[{src:"images/git.png",title:"Git"},{src:"images/docker.png",title:"Docker"},{src:"images/dart.png",title:"Dart"},{src:"images/figma.png",title:"Figma"},{src:"images/db.png",title:"Database"}]}].find(r=>r.name===t))==null?void 0:i.icons)||[];return de.jsx("div",{className:"flex items-center justify-center",children:de.jsx($A,{article:t,icons:n})})},km={type:"change"},mh={type:"start"},e0={type:"end"},el=new Fv,zm=new zi,NA=Math.cos(70*aM.DEG2RAD),wt=new O,Jt=2*Math.PI,nt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},yc=1e-6;class IA extends bA{constructor(e,n=null){super(e,n),this.state=nt.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:xs.ROTATE,TWO:xs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ur,this._lastTargetPosition=new O,this._quat=new Ur().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Fm,this._sphericalDelta=new Fm,this._scale=1,this._panOffset=new O,this._rotateStart=new be,this._rotateEnd=new be,this._rotateDelta=new be,this._panStart=new be,this._panEnd=new be,this._panDelta=new be,this._dollyStart=new be,this._dollyEnd=new be,this._dollyDelta=new be,this._dollyDirection=new O,this._mouse=new be,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=OA.bind(this),this._onPointerDown=UA.bind(this),this._onPointerUp=FA.bind(this),this._onContextMenu=WA.bind(this),this._onMouseWheel=BA.bind(this),this._onKeyDown=HA.bind(this),this._onTouchStart=VA.bind(this),this._onTouchMove=GA.bind(this),this._onMouseDown=kA.bind(this),this._onMouseMove=zA.bind(this),this._interceptControlDown=XA.bind(this),this._interceptControlUp=jA.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(km),this.update(),this.state=nt.NONE}update(e=null){const n=this.object.position;wt.copy(n).sub(this.target),wt.applyQuaternion(this._quat),this._spherical.setFromVector3(wt),this.autoRotate&&this.state===nt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=Jt:i>Math.PI&&(i-=Jt),r<-Math.PI?r+=Jt:r>Math.PI&&(r-=Jt),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(wt.setFromSpherical(this._spherical),wt.applyQuaternion(this._quatInverse),n.copy(this.target).add(wt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=wt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new O(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=wt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(el.origin.copy(this.object.position),el.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(el.direction))<NA?this.object.lookAt(this.target):(zm.setFromNormalAndCoplanarPoint(this.object.up,this.target),el.intersectPlane(zm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>yc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>yc||this._lastTargetPosition.distanceToSquared(this.target)>yc?(this.dispatchEvent(km),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Jt/60*this.autoRotateSpeed*e:Jt/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){wt.setFromMatrixColumn(n,0),wt.multiplyScalar(-e),this._panOffset.add(wt)}_panUp(e,n){this.screenSpacePanning===!0?wt.setFromMatrixColumn(n,1):(wt.setFromMatrixColumn(n,0),wt.crossVectors(this.object.up,wt)),wt.multiplyScalar(e),this._panOffset.add(wt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;wt.copy(r).sub(this.target);let s=wt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-Jt*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(Jt*this._rotateDelta.x/n.clientHeight),this._rotateUp(Jt*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new be,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function UA(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function OA(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function FA(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e0),this.state=nt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function kA(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Cs.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=nt.DOLLY;break;case Cs.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=nt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=nt.ROTATE}break;case Cs.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=nt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=nt.PAN}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(mh)}function zA(t){switch(this.state){case nt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case nt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case nt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function BA(t){this.enabled===!1||this.enableZoom===!1||this.state!==nt.NONE||(t.preventDefault(),this.dispatchEvent(mh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(e0))}function HA(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function VA(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case xs.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=nt.TOUCH_ROTATE;break;case xs.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=nt.TOUCH_PAN;break;default:this.state=nt.NONE}break;case 2:switch(this.touches.TWO){case xs.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=nt.TOUCH_DOLLY_PAN;break;case xs.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=nt.TOUCH_DOLLY_ROTATE;break;default:this.state=nt.NONE}break;default:this.state=nt.NONE}this.state!==nt.NONE&&this.dispatchEvent(mh)}function GA(t){switch(this._trackPointer(t),this.state){case nt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case nt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case nt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case nt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=nt.NONE}}function WA(t){this.enabled!==!1&&t.preventDefault()}function XA(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function jA(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const $A=({article:t,icons:e})=>{const n=pt.useRef(null);return pt.useEffect(()=>{const i=n.current,r=new MA,s=new En(70,1.5,.1,1e3),o=new SA({alpha:!0});o.setSize(1e3,650),window.innerWidth<768&&o.setSize(350,250),i.appendChild(o.domElement);const a=new hh(1,128,128),l=new fh({color:14845163,transparent:!0,opacity:.7}),u=new Zn(a,l);r.add(u);const c=3;e.forEach((p,_)=>{const y=new RA().load(p.src),m=new Qv({map:y}),f=new TA(m),g=_/e.length*2*Math.PI;f.position.set(c*Math.cos(g),0,c*Math.sin(g)),u.add(f)}),s.position.set(-4.8,1.5,2.7);const h=new IA(s,o.domElement);h.enableDamping=!0;const d=()=>{requestAnimationFrame(d),u.rotation.y+=.01,o.render(r,s)};return d(),()=>{i.removeChild(o.domElement)}},[t,e]),de.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})},YA=({sections:t})=>{const{t:e}=du();return de.jsx(de.Fragment,{children:de.jsxs("div",{className:"flex flex-col md:px-0 h-full md:w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[de.jsxs("nav",{className:"flex justify-between px-4 md:px-0 w-full items-center h-12",children:[de.jsx("div",{className:"border border-primary rounded-3xl px-3 py-1",children:de.jsx("p",{className:"text-sm text-primary",children:"Full-Stack developper"})}),de.jsxs("div",{className:"flex",children:[de.jsx(nS,{}),de.jsx(LA,{sections:t})]})]}),de.jsxs("div",{className:"flex flex-col justify-center my-auto mx-4 items-center text-center",children:[de.jsx("h1",{children:e("heroSection_title_1")}),de.jsxs("div",{className:"my-4 text-center",children:[de.jsx("h2",{children:e("heroSection_legend_1")}),de.jsx("h2",{children:e("heroSection_legend_2")})]})]})]})})},qA=()=>{const[t,e]=pt.useState(0),{t:n}=du(),i=[{name:"FRONT-END"},{name:"BACK-END"},{name:"TOOLS"}];return de.jsxs("div",{className:"flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[de.jsx("h1",{className:"text-3xl text-center md:text-end",children:n("skillSection_title")}),de.jsxs("div",{className:"w-full h-full flex flex-col py-10 md:flex-row",children:[de.jsx("div",{className:"w-full h-1/6 md:w-1/4 md:h-full flex flex-row md:flex-col justify-evenly",children:i.map((r,s)=>de.jsx("div",{onClick:()=>e(s),className:`text-sm md:text-xl lg:text-4xl w-1/4 md:w-auto h-16 md:h-[unset] py-4 px-2 text-center font-bold md:py-8 md:px-2 ${s===t?"bg-secondary":"bg-primary hover:bg-primary-hover"} text-white rounded-2xl transition ease-in delay-50`,children:r.name},s))}),de.jsx("div",{className:"w-full md:w-3/4 h-3/4 md:h-full flex items-center justify-center",children:de.jsx(DA,{article:i[t].name})})]})]})},KA=()=>de.jsx("h1",{children:"Projects Section"}),ZA=()=>{const[t,e]=pt.useState(!1),n="mathysf84pro@gmail.com",i="https://www.instagram.com/mathys.frn/",r="docs/Mathys_FARINEAU.pdf",s=()=>{navigator.clipboard.writeText(n).then(()=>{e(!0),setTimeout(()=>e(!1),1e3)})};return de.jsxs("div",{className:"flex flex-col w-9/12 py-10 h-3/6 md:py-0 absolute z-10",children:[de.jsx("h1",{children:"CONTACT"}),de.jsx("hr",{className:"h-[2px] my-4 bg-neutral-800 border-0"}),de.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[de.jsx(Sc,{title:"RÉSEAUX",content:"mathys.frn",link:i}),de.jsx(Sc,{title:"EMAIL",content:n,onClick:s}),t&&de.jsx(QA,{message:"Copié !"}),de.jsx(Sc,{title:"CV",content:"Mon CV",link:r})]})]})},Sc=({title:t,content:e,onClick:n,link:i})=>de.jsxs("div",{className:"flex items-end",children:[de.jsx("h1",{className:"font-bold text-base lg:text-xl xl:text-3xl w-20 lg:w-32 xl:w-48",children:t}),i?de.jsx("a",{className:"text-sm lg:text-xl xl:text-3xl font-light link-underline",href:i,target:"_blank",rel:"noopener noreferrer",children:e}):de.jsx("a",{href:"#",className:"text-sm lg:text-xl xl:text-3xl font-light link-underline",onClick:n,children:e})]}),QA=({message:t})=>de.jsx("div",{className:"absolute mb-2 transform translate-x-[60rem] -translate-y-20 bg-neutral-800 p-2 rounded shadow text-sm",children:de.jsx("div",{className:"relative",children:de.jsx("p",{className:"text-gray-100",children:t})})}),JA=()=>{pt.useEffect(()=>{const t=document.createElement("div");t.classList.add("cursor"),document.body.appendChild(t);let e=0,n=0,i=0,r=0;const s=u=>{e=u.clientX,n=u.clientY},o=()=>{i+=(e-i)*.25,r+=(n-r)*.25;const u=window.innerWidth-t.offsetWidth,c=window.innerHeight-t.offsetHeight;i=Math.max(0,Math.min(i,u)),r=Math.max(0,Math.min(r,c)),t.style.left=`${i}px`,t.style.top=`${r}px`,requestAnimationFrame(o)},a=()=>{window.addEventListener("mousemove",s),requestAnimationFrame(o)},l=()=>{window.removeEventListener("mousemove",s),document.body.removeChild(t)};return a(),l},[])};function eC(){JA();const{t}=du(),e=[t("heroSection_title"),t("skillSection_title"),t("projectSection_title"),t("contactSection_title")],n=[{name:t("heroSection_title"),component:de.jsx(YA,{sections:e})},{name:t("skillSection_title"),component:de.jsx(qA,{})},{name:t("projectSection_title"),component:de.jsx(KA,{})},{name:t("contactSection_title"),component:de.jsx(ZA,{})}];return de.jsxs("div",{className:"relative sections",children:[n.map((i,r)=>de.jsx("section",{className:"section bg-section-color",children:de.jsx("div",{className:"flex w-screen h-full items-center justify-center",children:i.component})},r)),de.jsx(xv,{sections:n.map(i=>i.component)}),de.jsx(PA,{})]})}const Le=t=>typeof t=="string",ho=()=>{let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n},Bm=t=>t==null?"":""+t,tC=(t,e,n)=>{t.forEach(i=>{e[i]&&(n[i]=e[i])})},nC=/###/g,Hm=t=>t&&t.indexOf("###")>-1?t.replace(nC,"."):t,Vm=t=>!t||Le(t),No=(t,e,n)=>{const i=Le(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(Vm(t))return{};const s=Hm(i[r]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++r}return Vm(t)?{}:{obj:t,k:Hm(i[r])}},Gm=(t,e,n)=>{const{obj:i,k:r}=No(t,e,Object);if(i!==void 0||e.length===1){i[r]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),a=No(t,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=No(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n},iC=(t,e,n,i)=>{const{obj:r,k:s}=No(t,e,Object);r[s]=r[s]||[],r[s].push(n)},jl=(t,e)=>{const{obj:n,k:i}=No(t,e);if(n)return n[i]},rC=(t,e,n)=>{const i=jl(t,n);return i!==void 0?i:jl(e,n)},t0=(t,e,n)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?Le(t[i])||t[i]instanceof String||Le(e[i])||e[i]instanceof String?n&&(t[i]=e[i]):t0(t[i],e[i],n):t[i]=e[i]);return t},ss=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var sC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const oC=t=>Le(t)?t.replace(/[&<>"'\/]/g,e=>sC[e]):t;class aC{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const lC=[" ",",","?","!",";"],uC=new aC(20),cC=(t,e,n)=>{e=e||"",n=n||"";const i=lC.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(i.length===0)return!0;const r=uC.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!r.test(t);if(!s){const o=t.indexOf(n);o>0&&!r.test(t.substring(0,o))&&(s=!0)}return s},ad=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(n);let r=t;for(let s=0;s<i.length;){if(!r||typeof r!="object")return;let o,a="";for(let l=s;l<i.length;++l)if(l!==s&&(a+=n),a+=i[l],o=r[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;s+=l-s+1;break}r=o}return r},$l=t=>t&&t.replace("_","-"),fC={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Yl{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||fC,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,i,r){return r&&!this.debug?null:(Le(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Yl(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Yl(this.logger,e)}}var Qn=new Yl;class _u{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(n)||0;this.observers[i].set(n,r+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a.apply(a,[e,...i])})}}class Wm extends _u{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],i&&(Array.isArray(i)?a.push(...i):Le(i)&&s?a.push(...i.split(s)):a.push(i)));const l=jl(this.data,a);return!l&&!n&&!i&&e.indexOf(".")>-1&&(e=a[0],n=a[1],i=a.slice(2).join(".")),l||!o||!Le(i)?l:ad(this.data&&this.data[e]&&this.data[e][n],i,s)}addResource(e,n,i,r){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,n];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),r=n,n=a[1]),this.addNamespaces(n),Gm(this.data,a,r),s.silent||this.emit("added",e,n,i,r)}addResources(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in i)(Le(i[s])||Array.isArray(i[s]))&&this.addResource(e,n,s,i[s],{silent:!0});r.silent||this.emit("added",e,n,i)}addResourceBundle(e,n,i,r,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=n,n=a[1]),this.addNamespaces(n);let l=jl(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?t0(l,i,s):l={...l,...i},Gm(this.data,a,l),o.silent||this.emit("added",e,n,i)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(r=>n[r]&&Object.keys(n[r]).length>0)}toJSON(){return this.data}}var n0={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,i,r){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,i,r))}),e}};const Xm={};class ql extends _u{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),tC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Qn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,n);return i&&i.res!==void 0}extractFromKey(e,n){let i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!cC(e,i,r);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:s};const u=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(u[0])>-1)&&(s=u.shift()),e=u.join(r)}return Le(s)&&(s=[s]),{key:e,namespaces:s}}translate(e,n,i){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const x=n.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${x}${o}`,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${x}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let d=h&&h.res;const p=h&&h.usedKey||o,_=h&&h.exactUsedKey||o,y=Object.prototype.toString.apply(d),m=["[object Number]","[object Function]","[object RegExp]"],f=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,g=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!Le(d)&&typeof d!="boolean"&&typeof d!="number";if(g&&d&&v&&m.indexOf(y)<0&&!(Le(f)&&Array.isArray(d))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(h.res=x,h.usedParams=this.getUsedParamsDetails(n),h):x}if(s){const x=Array.isArray(d),b=x?[]:{},C=x?_:p;for(const w in d)if(Object.prototype.hasOwnProperty.call(d,w)){const R=`${C}${s}${w}`;b[w]=this.translate(R,{...n,joinArrays:!1,ns:a}),b[w]===R&&(b[w]=d[w])}d=b}}else if(g&&Le(f)&&Array.isArray(d))d=d.join(f),d&&(d=this.extendTranslation(d,e,n,i));else{let x=!1,b=!1;const C=n.count!==void 0&&!Le(n.count),w=ql.hasDefaultValue(n),R=C?this.pluralResolver.getSuffix(u,n.count,n):"",T=n.ordinal&&C?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",S=C&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),P=S&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${R}`]||n[`defaultValue${T}`]||n.defaultValue;!this.isValidLookup(d)&&w&&(x=!0,d=P),this.isValidLookup(d)||(b=!0,d=o);const B=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:d,$=w&&P!==d&&this.options.updateMissing;if(b||x||$){if(this.logger.log($?"updateKey":"missingKey",u,l,o,$?P:d),s){const L=this.resolve(o,{...n,keySeparator:!1});L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let q=[];const X=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&X&&X[0])for(let L=0;L<X.length;L++)q.push(X[L]);else this.options.saveMissingTo==="all"?q=this.languageUtils.toResolveHierarchy(n.lng||this.language):q.push(n.lng||this.language);const Q=(L,V,Y)=>{const re=w&&Y!==d?Y:B;this.options.missingKeyHandler?this.options.missingKeyHandler(L,l,V,re,$,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(L,l,V,re,$,n),this.emit("missingKey",L,l,V,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&C?q.forEach(L=>{const V=this.pluralResolver.getSuffixes(L,n);S&&n[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(Y=>{Q([L],o+Y,n[`defaultValue${Y}`]||P)})}):Q(q,o,P))}d=this.extendTranslation(d,e,n,h,i),b&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,x?d:void 0):d=this.options.parseMissingKeyHandler(d))}return r?(h.res=d,h.usedParams=this.getUsedParamsDetails(n),h):d}extendTranslation(e,n,i,r,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const u=Le(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const d=e.match(this.interpolator.nestingRegexp);c=d&&d.length}let h=i.replace&&!Le(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,i.lng||this.language||r.usedLng,i),u){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;c<p&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),_=0;_<d;_++)p[_]=arguments[_];return s&&s[0]===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):o.translate(...p,n)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=Le(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=n0.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,s,o,a;return Le(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const u=this.extractFromKey(l,n),c=u.key;r=c;let h=u.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=n.count!==void 0&&!Le(n.count),p=d&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),_=n.context!==void 0&&(Le(n.context)||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(m=>{this.isValidLookup(i)||(a=m,!Xm[`${y[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Xm[`${y[0]}-${m}`]=!0,this.logger.warn(`key "${r}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(f=>{if(this.isValidLookup(i))return;o=f;const g=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(g,c,f,m,n);else{let x;d&&(x=this.pluralResolver.getSuffix(f,n.count,n));const b=`${this.options.pluralSeparator}zero`,C=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(g.push(c+x),n.ordinal&&x.indexOf(C)===0&&g.push(c+x.replace(C,this.options.pluralSeparator)),p&&g.push(c+b)),_){const w=`${c}${this.options.contextSeparator}${n.context}`;g.push(w),d&&(g.push(w+x),n.ordinal&&x.indexOf(C)===0&&g.push(w+x.replace(C,this.options.pluralSeparator)),p&&g.push(w+b))}}let v;for(;v=g.pop();)this.isValidLookup(i)||(s=v,i=this.getResource(f,m,v,n))}))})}),{res:i,usedKey:r,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,i,r):this.resourceStore.getResource(e,n,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Le(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const s of n)delete r[s]}return r}static hasDefaultValue(e){const n="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&n===i.substring(0,n.length)&&e[i]!==void 0)return!0;return!1}}const Mc=t=>t.charAt(0).toUpperCase()+t.slice(1);class jm{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Qn.create("languageUtils")}getScriptPartFromCode(e){if(e=$l(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=$l(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(Le(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),n.indexOf(i[1].toLowerCase())>-1&&(i[1]=Mc(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),n.indexOf(i[1].toLowerCase())>-1&&(i[1]=Mc(i[1].toLowerCase())),n.indexOf(i[2].toLowerCase())>-1&&(i[2]=Mc(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(i=>{if(n)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(n=r)}),!n&&this.options.supportedLngs&&e.forEach(i=>{if(n)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return n=r;n=this.options.supportedLngs.find(s=>{if(s===r)return s;if(!(s.indexOf("-")<0&&r.indexOf("-")<0)&&(s.indexOf("-")>0&&r.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===r||s.indexOf(r)===0&&r.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),Le(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let i=e[n];return i||(i=e[this.getScriptPartFromCode(n)]),i||(i=e[this.formatLanguageCode(n)]),i||(i=e[this.getLanguagePartFromCode(n)]),i||(i=e.default),i||[]}toResolveHierarchy(e,n){const i=this.getFallbackCodes(n||this.options.fallbackLng||[],e),r=[],s=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Le(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):Le(e)&&s(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&s(this.formatLanguageCode(o))}),r}}let dC=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],hC={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const pC=["v1","v2","v3"],mC=["v4"],$m={zero:0,one:1,two:2,few:3,many:4,other:5},gC=()=>{const t={};return dC.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:hC[e.fc]}})}),t};class _C{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Qn.create("pluralResolver"),(!this.options.compatibilityJSON||mC.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=gC(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{const i=$l(e==="dev"?"en":e),r=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];const o=new Intl.PluralRules(i,{type:r});return this.pluralRulesCache[s]=o,o}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,n);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${n}${r}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,n);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,s)=>$m[r]-$m[s]).map(r=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,n)):[]}getSuffix(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(n)}`:this.getSuffixRetroCompatible(r,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const i=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const s=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!pC.includes(this.options.compatibilityJSON)}}const Ym=function(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=rC(t,e,n);return!s&&r&&Le(n)&&(s=ad(t,n,i),s===void 0&&(s=ad(e,n,i))),s},Ec=t=>t.replace(/\$/g,"$$$$");class vC{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Qn.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:i,useRawValueToEscape:r,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:c,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:_,nestingSuffixEscaped:y,nestingOptionsSeparator:m,maxReplaces:f,alwaysFormat:g}=e.interpolation;this.escape=n!==void 0?n:oC,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?ss(s):o||"{{",this.suffix=a?ss(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=c?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=d?ss(d):p||ss("$t("),this.nestingSuffix=_?ss(_):y||ss(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=f||1e3,this.alwaysFormat=g!==void 0?g:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,i)=>n&&n.source===i?(n.lastIndex=0,n):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,i,r){let s,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=p=>{if(p.indexOf(this.formatSeparator)<0){const f=Ym(n,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(f,void 0,i,{...r,...n,interpolationkey:p}):f}const _=p.split(this.formatSeparator),y=_.shift().trim(),m=_.join(this.formatSeparator).trim();return this.format(Ym(n,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),m,i,{...r,...n,interpolationkey:y})};this.resetRegExp();const c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,h=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Ec(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Ec(this.escape(p)):Ec(p)}].forEach(p=>{for(a=0;s=p.regex.exec(e);){const _=s[1].trim();if(o=u(_),o===void 0)if(typeof c=="function"){const m=c(e,s,r);o=Le(m)?m:""}else if(r&&Object.prototype.hasOwnProperty.call(r,_))o="";else if(h){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`),o="";else!Le(o)&&!this.useRawValueToEscape&&(o=Bm(o));const y=p.safeValue(o);if(e=e.replace(s[0],y),h?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=s[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,s,o;const a=(l,u)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const h=l.split(new RegExp(`${c}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,o);const p=d.match(/'/g),_=d.match(/"/g);(p&&p.length%2===0&&!_||_.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),u&&(o={...u,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${c}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!Le(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let u=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const c=r[1].split(this.formatSeparator).map(h=>h.trim());r[1]=c.shift(),l=c,u=!0}if(s=n(a.call(this,r[1].trim(),o),o),s&&r[0]===e&&!Le(s))return s;Le(s)||(s=Bm(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),u&&(s=l.reduce((c,h)=>this.format(c,h,i.lng,{...i,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const xC=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?n.currency||(n.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?n.range||(n.range=r.trim()):r.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();n[c]||(n[c]=u),u==="false"&&(n[c]=!1),u==="true"&&(n[c]=!0),isNaN(u)||(n[c]=parseInt(u,10))}})}return{formatName:e,formatOptions:n}},os=t=>{const e={};return(n,i,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const o=i+JSON.stringify(s);let a=e[o];return a||(a=t($l(i),r),e[o]=a),a(n)}};class yC{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Qn.create("formatter"),this.options=e,this.formats={number:os((n,i)=>{const r=new Intl.NumberFormat(n,{...i});return s=>r.format(s)}),currency:os((n,i)=>{const r=new Intl.NumberFormat(n,{...i,style:"currency"});return s=>r.format(s)}),datetime:os((n,i)=>{const r=new Intl.DateTimeFormat(n,{...i});return s=>r.format(s)}),relativetime:os((n,i)=>{const r=new Intl.RelativeTimeFormat(n,{...i});return s=>r.format(s,i.range||"day")}),list:os((n,i)=>{const r=new Intl.ListFormat(n,{...i});return s=>r.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=os(n)}format(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(a=>a.indexOf(")")>-1)){const a=s.findIndex(l=>l.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{const{formatName:u,formatOptions:c}=xC(l);if(this.formats[u]){let h=a;try{const d=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},p=d.locale||d.lng||r.locale||r.lng||i;h=this.formats[u](a,p,{...c,...r,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${u}`);return a},e)}}const SC=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class MC extends _u{constructor(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Qn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,n,i,r){const s={},o={},a={},l={};return e.forEach(u=>{let c=!0;n.forEach(h=>{const d=`${u}|${h}`;!i.reload&&this.store.hasResourceBundle(u,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,c=!1,o[d]===void 0&&(o[d]=!0),s[d]===void 0&&(s[d]=!0),l[h]===void 0&&(l[h]=!0)))}),c||(a[u]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,i){const r=e.split("|"),s=r[0],o=r[1];n&&this.emit("failedLoading",s,o,n),!n&&i&&this.store.addResourceBundle(s,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{iC(l.loaded,[s],o),SC(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const c=l.loaded[u];c.length&&c.forEach(h=>{a[u][h]===void 0&&(a[u][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:i,tried:r,wait:s,callback:o});return}this.readingCalls++;const a=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(u&&c&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,i,r+1,s*2,o)},s);return}o(u,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const u=l(e,n);u&&typeof u.then=="function"?u.then(c=>a(null,c)).catch(a):a(null,u)}catch(u){a(u)}return}return l(e,n,a)}prepareLoading(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Le(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Le(n)&&(n=[n]);const s=this.queueLoad(e,n,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,i){this.prepareLoading(e,n,{},i)}reload(e,n,i){this.prepareLoading(e,n,{reload:!0},i)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],s=i[1];this.read(r,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${r} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${r}`,a),this.loaded(e,o,a)})}saveMissing(e,n,i,r,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:s},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(e,n,i,r,l):c=u(e,n,i,r),c&&typeof c.then=="function"?c.then(h=>a(null,h)).catch(a):a(null,c)}catch(c){a(c)}else u(e,n,i,r,a,l)}!e||!e[0]||this.store.addResource(e[0],n,i,r)}}}const qm=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),Le(t[1])&&(e.defaultValue=t[1]),Le(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(i=>{e[i]=n[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),Km=t=>(Le(t.ns)&&(t.ns=[t.ns]),Le(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),Le(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),tl=()=>{},EC=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class ea extends _u{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=Km(e),this.services={},this.logger=Qn,this.modules={external:[]},EC(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(i=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(Le(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const r=qm();this.options={...r,...this.options,...Km(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?Qn.init(s(this.modules.logger),this.options):Qn.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=yC);const h=new jm(this.options);this.store=new Wm(this.options.resources,this.options);const d=this.services;d.logger=Qn,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new _C(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(d.formatter=s(c),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new vC(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new MC(s(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var _=arguments.length,y=new Array(_>1?_-1:0),m=1;m<_;m++)y[m-1]=arguments[m];e.emit(p,...y)}),this.modules.languageDetector&&(d.languageDetector=s(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=s(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new ql(this.services,this.options),this.translator.on("*",function(p){for(var _=arguments.length,y=new Array(_>1?_-1:0),m=1;m<_;m++)y[m-1]=arguments[m];e.emit(p,...y)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=tl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const l=ho(),u=()=>{const c=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:tl;const r=Le(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const s=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{u!=="cimode"&&s.indexOf(u)<0&&s.push(u)})};r?o(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(s,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,n,i){const r=ho();return typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),i||(i=tl),this.services.backendConnector.reload(e,n,s=>{r.resolve(),i(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&n0.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,n){var i=this;this.isLanguageChangingTo=e;const r=ho();this.emit("languageChanging",e);const s=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,u)=>{u?(s(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),n&&n(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const u=Le(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||s(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{o(c,u)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),r}getFixedT(e,n,i){var r=this;const s=function(o,a){let l;if(typeof a!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),h=2;h<u;h++)c[h-2]=arguments[h];l=r.options.overloadTranslationOptionHandler([o,a].concat(c))}else l={...a};l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||s.keyPrefix);const d=r.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(_=>`${l.keyPrefix}${d}${_}`):p=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,r.t(p,l)};return Le(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=i,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=n.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===0||u===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(s,e)))}loadNamespaces(e,n){const i=ho();return this.options.ns?(Le(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),n&&n(r)}),i):(n&&n(),Promise.resolve())}loadLanguages(e,n){const i=ho();Le(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=r.concat(s),this.loadResources(o=>{i.resolve(),n&&n(o)}),i):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new jm(qm());return n.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new ea(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:tl;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new ea(r);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i&&(s.store=new Wm(this.store.data,r),s.services.resourceStore=s.store),s.translator=new ql(s.services,r),s.translator.on("*",function(a){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];s.emit(a,...u)}),s.init(r,n),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Wt=ea.createInstance();Wt.createInstance=ea.createInstance;Wt.createInstance;Wt.dir;Wt.init;Wt.loadResources;Wt.reloadResources;Wt.use;Wt.changeLanguage;Wt.getFixedT;Wt.t;Wt.exists;Wt.setDefaultNamespace;Wt.hasLoadedNamespace;Wt.loadNamespaces;Wt.loadLanguages;const{slice:TC,forEach:wC}=[];function AC(t){return wC.call(TC.call(arguments,1),e=>{if(e)for(const n in e)t[n]===void 0&&(t[n]=e[n])}),t}const Zm=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,CC=(t,e,n)=>{const i=n||{};i.path=i.path||"/";const r=encodeURIComponent(e);let s=`${t}=${r}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!Zm.test(i.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${i.domain}`}if(i.path){if(!Zm.test(i.path))throw new TypeError("option path is invalid");s+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s},Qm={create(t,e,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+n*60*1e3)),i&&(r.domain=i),document.cookie=CC(t,encodeURIComponent(e),r)},read(t){const e=`${t}=`,n=document.cookie.split(";");for(let i=0;i<n.length;i++){let r=n[i];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(t){this.create(t,"",-1)}};var RC={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return Qm.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:n,cookieMinutes:i,cookieDomain:r,cookieOptions:s}=e;n&&typeof document<"u"&&Qm.create(n,t,i,r,s)}},bC={name:"querystring",lookup(t){var i;let{lookupQuerystring:e}=t,n;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const o=r.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(n=o[a].substring(l+1))}}return n}};let po=null;const Jm=()=>{if(po!==null)return po;try{po=window!=="undefined"&&window.localStorage!==null;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{po=!1}return po};var PC={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&Jm())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:n}=e;n&&Jm()&&window.localStorage.setItem(n,t)}};let mo=null;const eg=()=>{if(mo!==null)return mo;try{mo=window!=="undefined"&&window.sessionStorage!==null;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{mo=!1}return mo};var LC={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&eg())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:n}=e;n&&eg()&&window.sessionStorage.setItem(n,t)}},DC={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:i,language:r}=navigator;if(n)for(let s=0;s<n.length;s++)e.push(n[s]);i&&e.push(i),r&&e.push(r)}return e.length>0?e:void 0}},NC={name:"htmlTag",lookup(t){let{htmlTag:e}=t,n;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(n=i.getAttribute("lang")),n}},IC={name:"path",lookup(t){var r;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(r=n[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},UC={name:"subdomain",lookup(t){var r,s;let{lookupFromSubdomainIndex:e}=t;const n=typeof e=="number"?e+1:1,i=typeof window<"u"&&((s=(r=window.location)==null?void 0:r.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[n]}};function OC(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t}}class i0{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=AC(n,this.options||{},OC()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(RC),this.addDetector(bC),this.addDetector(PC),this.addDetector(LC),this.addDetector(DC),this.addDetector(NC),this.addDetector(IC),this.addDetector(UC)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let n=[];return e.forEach(i=>{if(this.detectors[i]){let r=this.detectors[i].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(n=n.concat(r))}}),n=n.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}i0.type="languageDetector";const FC="Home",kC="Skills",zC="Projects",BC="Contact",HC="Hi, my name is Mathys.",VC="I transform lines of code into web experiments...",GC="...and debug my mistakes late at night",WC={heroSection_title:FC,skillSection_title:kC,projectSection_title:zC,contactSection_title:BC,heroSection_title_1:HC,heroSection_legend_1:VC,heroSection_legend_2:GC},XC="Accueil",jC="Mes technologies",$C="Projets",YC="Contact",qC="Enchanté, je m'appelle Mathys.",KC="Je transforme des lignes de code en expériences web...",ZC="...et débug mes erreurs tard le soir",QC={heroSection_title:XC,skillSection_title:jC,projectSection_title:$C,contactSection_title:YC,heroSection_title_1:qC,heroSection_legend_1:KC,heroSection_legend_2:ZC},JC={fr:{translation:QC},en:{translation:WC}};Wt.use(i0).use(Xy).init({resources:JC,fallbackLng:"fr",interpolation:{escapeValue:!1}}).then(t=>null);Tc.createRoot(document.getElementById("root")).render(de.jsx(eC,{}));
