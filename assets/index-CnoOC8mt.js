(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function Jg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Qg={exports:{}},xu={},e0={exports:{}},Xe={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ma=Symbol.for("react.element"),yx=Symbol.for("react.portal"),Sx=Symbol.for("react.fragment"),Mx=Symbol.for("react.strict_mode"),Ex=Symbol.for("react.profiler"),wx=Symbol.for("react.provider"),Tx=Symbol.for("react.context"),Ax=Symbol.for("react.forward_ref"),Cx=Symbol.for("react.suspense"),Rx=Symbol.for("react.memo"),bx=Symbol.for("react.lazy"),op=Symbol.iterator;function Px(t){return t===null||typeof t!="object"?null:(t=op&&t[op]||t["@@iterator"],typeof t=="function"?t:null)}var t0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},n0=Object.assign,i0={};function Ks(t,e,n){this.props=t,this.context=e,this.refs=i0,this.updater=n||t0}Ks.prototype.isReactComponent={};Ks.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ks.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function r0(){}r0.prototype=Ks.prototype;function Bf(t,e,n){this.props=t,this.context=e,this.refs=i0,this.updater=n||t0}var Hf=Bf.prototype=new r0;Hf.constructor=Bf;n0(Hf,Ks.prototype);Hf.isPureReactComponent=!0;var ap=Array.isArray,s0=Object.prototype.hasOwnProperty,Vf={current:null},o0={key:!0,ref:!0,__self:!0,__source:!0};function a0(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)s0.call(e,i)&&!o0.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ma,type:t,key:s,ref:o,props:r,_owner:Vf.current}}function Lx(t,e){return{$$typeof:ma,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Gf(t){return typeof t=="object"&&t!==null&&t.$$typeof===ma}function Dx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var lp=/\/+/g;function Vu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Dx(""+t.key):e.toString(36)}function Ml(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ma:case yx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Vu(o,0):i,ap(r)?(n="",t!=null&&(n=t.replace(lp,"$&/")+"/"),Ml(r,e,n,"",function(u){return u})):r!=null&&(Gf(r)&&(r=Lx(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(lp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",ap(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Vu(s,a);o+=Ml(s,e,n,l,r)}else if(l=Px(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Vu(s,a++),o+=Ml(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ba(t,e,n){if(t==null)return t;var i=[],r=0;return Ml(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Nx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var tn={current:null},El={transition:null},Ix={ReactCurrentDispatcher:tn,ReactCurrentBatchConfig:El,ReactCurrentOwner:Vf};function l0(){throw Error("act(...) is not supported in production builds of React.")}Xe.Children={map:ba,forEach:function(t,e,n){ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ba(t,function(){e++}),e},toArray:function(t){return ba(t,function(e){return e})||[]},only:function(t){if(!Gf(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Xe.Component=Ks;Xe.Fragment=Sx;Xe.Profiler=Ex;Xe.PureComponent=Bf;Xe.StrictMode=Mx;Xe.Suspense=Cx;Xe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ix;Xe.act=l0;Xe.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=n0({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Vf.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)s0.call(e,l)&&!o0.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:ma,type:t.type,key:r,ref:s,props:i,_owner:o}};Xe.createContext=function(t){return t={$$typeof:Tx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:wx,_context:t},t.Consumer=t};Xe.createElement=a0;Xe.createFactory=function(t){var e=a0.bind(null,t);return e.type=t,e};Xe.createRef=function(){return{current:null}};Xe.forwardRef=function(t){return{$$typeof:Ax,render:t}};Xe.isValidElement=Gf;Xe.lazy=function(t){return{$$typeof:bx,_payload:{_status:-1,_result:t},_init:Nx}};Xe.memo=function(t,e){return{$$typeof:Rx,type:t,compare:e===void 0?null:e}};Xe.startTransition=function(t){var e=El.transition;El.transition={};try{t()}finally{El.transition=e}};Xe.unstable_act=l0;Xe.useCallback=function(t,e){return tn.current.useCallback(t,e)};Xe.useContext=function(t){return tn.current.useContext(t)};Xe.useDebugValue=function(){};Xe.useDeferredValue=function(t){return tn.current.useDeferredValue(t)};Xe.useEffect=function(t,e){return tn.current.useEffect(t,e)};Xe.useId=function(){return tn.current.useId()};Xe.useImperativeHandle=function(t,e,n){return tn.current.useImperativeHandle(t,e,n)};Xe.useInsertionEffect=function(t,e){return tn.current.useInsertionEffect(t,e)};Xe.useLayoutEffect=function(t,e){return tn.current.useLayoutEffect(t,e)};Xe.useMemo=function(t,e){return tn.current.useMemo(t,e)};Xe.useReducer=function(t,e,n){return tn.current.useReducer(t,e,n)};Xe.useRef=function(t){return tn.current.useRef(t)};Xe.useState=function(t){return tn.current.useState(t)};Xe.useSyncExternalStore=function(t,e,n){return tn.current.useSyncExternalStore(t,e,n)};Xe.useTransition=function(){return tn.current.useTransition()};Xe.version="18.3.1";e0.exports=Xe;var Ye=e0.exports;const Te=Jg(Ye);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ux=Ye,Ox=Symbol.for("react.element"),Fx=Symbol.for("react.fragment"),kx=Object.prototype.hasOwnProperty,zx=Ux.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Bx={key:!0,ref:!0,__self:!0,__source:!0};function u0(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)kx.call(e,i)&&!Bx.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Ox,type:t,key:s,ref:o,props:r,_owner:zx.current}}xu.Fragment=Fx;xu.jsx=u0;xu.jsxs=u0;Qg.exports=xu;var ae=Qg.exports,Jc={},c0={exports:{}},yn={},h0={exports:{}},f0={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(D,V){var q=D.length;D.push(V);e:for(;0<q;){var oe=q-1>>>1,Ae=D[oe];if(0<r(Ae,V))D[oe]=V,D[q]=Ae,q=oe;else break e}}function n(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var V=D[0],q=D.pop();if(q!==V){D[0]=q;e:for(var oe=0,Ae=D.length,Ze=Ae>>>1;oe<Ze;){var j=2*(oe+1)-1,re=D[j],_e=j+1,le=D[_e];if(0>r(re,q))_e<Ae&&0>r(le,re)?(D[oe]=le,D[_e]=q,oe=_e):(D[oe]=re,D[j]=q,oe=j);else if(_e<Ae&&0>r(le,q))D[oe]=le,D[_e]=q,oe=_e;else break e}}return V}function r(D,V){var q=D.sortIndex-V.sortIndex;return q!==0?q:D.id-V.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,f=null,h=3,p=!1,g=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(D){for(var V=n(u);V!==null;){if(V.callback===null)i(u);else if(V.startTime<=D)i(u),V.sortIndex=V.expirationTime,e(l,V);else break;V=n(u)}}function x(D){if(y=!1,_(D),!g)if(n(l)!==null)g=!0,H(b);else{var V=n(u);V!==null&&K(x,V.startTime-D)}}function b(D,V){g=!1,y&&(y=!1,d(R),R=-1),p=!0;var q=h;try{for(_(V),f=n(l);f!==null&&(!(f.expirationTime>V)||D&&!L());){var oe=f.callback;if(typeof oe=="function"){f.callback=null,h=f.priorityLevel;var Ae=oe(f.expirationTime<=V);V=t.unstable_now(),typeof Ae=="function"?f.callback=Ae:f===n(l)&&i(l),_(V)}else i(l);f=n(l)}if(f!==null)var Ze=!0;else{var j=n(u);j!==null&&K(x,j.startTime-V),Ze=!1}return Ze}finally{f=null,h=q,p=!1}}var A=!1,T=null,R=-1,w=5,S=-1;function L(){return!(t.unstable_now()-S<w)}function X(){if(T!==null){var D=t.unstable_now();S=D;var V=!0;try{V=T(!0,D)}finally{V?k():(A=!1,T=null)}}else A=!1}var k;if(typeof v=="function")k=function(){v(X)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,Z=W.port2;W.port1.onmessage=X,k=function(){Z.postMessage(null)}}else k=function(){m(X,0)};function H(D){T=D,A||(A=!0,k())}function K(D,V){R=m(function(){D(t.unstable_now())},V)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(D){D.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(b))},t.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<D?Math.floor(1e3/D):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(D){switch(h){case 1:case 2:case 3:var V=3;break;default:V=h}var q=h;h=V;try{return D()}finally{h=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(D,V){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var q=h;h=D;try{return V()}finally{h=q}},t.unstable_scheduleCallback=function(D,V,q){var oe=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?oe+q:oe):q=oe,D){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=q+Ae,D={id:c++,callback:V,priorityLevel:D,startTime:q,expirationTime:Ae,sortIndex:-1},q>oe?(D.sortIndex=q,e(u,D),n(l)===null&&D===n(u)&&(y?(d(R),R=-1):y=!0,K(x,q-oe))):(D.sortIndex=Ae,e(l,D),g||p||(g=!0,H(b))),D},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(D){var V=h;return function(){var q=h;h=V;try{return D.apply(this,arguments)}finally{h=q}}}})(f0);h0.exports=f0;var Hx=h0.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Vx=Ye,xn=Hx;function te(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var d0=new Set,Wo={};function Hr(t,e){ks(t,e),ks(t+"Capture",e)}function ks(t,e){for(Wo[t]=e,t=0;t<e.length;t++)d0.add(e[t])}var Ti=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Qc=Object.prototype.hasOwnProperty,Gx=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,up={},cp={};function Wx(t){return Qc.call(cp,t)?!0:Qc.call(up,t)?!1:Gx.test(t)?cp[t]=!0:(up[t]=!0,!1)}function jx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Xx(t,e,n,i){if(e===null||typeof e>"u"||jx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function nn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Bt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Bt[t]=new nn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Bt[e]=new nn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Bt[t]=new nn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Bt[t]=new nn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Bt[t]=new nn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Bt[t]=new nn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Bt[t]=new nn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Bt[t]=new nn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Bt[t]=new nn(t,5,!1,t.toLowerCase(),null,!1,!1)});var Wf=/[\-:]([a-z])/g;function jf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Wf,jf);Bt[e]=new nn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Wf,jf);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Wf,jf);Bt[e]=new nn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!1,!1)});Bt.xlinkHref=new nn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Bt[t]=new nn(t,1,!1,t.toLowerCase(),null,!0,!0)});function Xf(t,e,n,i){var r=Bt.hasOwnProperty(e)?Bt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Xx(e,n,r,i)&&(n=null),i||r===null?Wx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Li=Vx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Pa=Symbol.for("react.element"),fs=Symbol.for("react.portal"),ds=Symbol.for("react.fragment"),$f=Symbol.for("react.strict_mode"),eh=Symbol.for("react.profiler"),p0=Symbol.for("react.provider"),m0=Symbol.for("react.context"),Yf=Symbol.for("react.forward_ref"),th=Symbol.for("react.suspense"),nh=Symbol.for("react.suspense_list"),Zf=Symbol.for("react.memo"),Hi=Symbol.for("react.lazy"),g0=Symbol.for("react.offscreen"),hp=Symbol.iterator;function ro(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}var Mt=Object.assign,Gu;function wo(t){if(Gu===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Gu=e&&e[1]||""}return`
`+Gu+t}var Wu=!1;function ju(t,e){if(!t||Wu)return"";Wu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){i=u}t.call(e.prototype)}else{try{throw Error()}catch(u){i=u}t()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Wu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?wo(t):""}function $x(t){switch(t.tag){case 5:return wo(t.type);case 16:return wo("Lazy");case 13:return wo("Suspense");case 19:return wo("SuspenseList");case 0:case 2:case 15:return t=ju(t.type,!1),t;case 11:return t=ju(t.type.render,!1),t;case 1:return t=ju(t.type,!0),t;default:return""}}function ih(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case ds:return"Fragment";case fs:return"Portal";case eh:return"Profiler";case $f:return"StrictMode";case th:return"Suspense";case nh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case m0:return(t.displayName||"Context")+".Consumer";case p0:return(t._context.displayName||"Context")+".Provider";case Yf:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Zf:return e=t.displayName||null,e!==null?e:ih(t.type)||"Memo";case Hi:e=t._payload,t=t._init;try{return ih(t(e))}catch{}}return null}function Yx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return ih(e);case 8:return e===$f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function sr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function v0(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Zx(t){var e=v0(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function La(t){t._valueTracker||(t._valueTracker=Zx(t))}function _0(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=v0(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function rh(t,e){var n=e.checked;return Mt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function fp(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=sr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function x0(t,e){e=e.checked,e!=null&&Xf(t,"checked",e,!1)}function sh(t,e){x0(t,e);var n=sr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?oh(t,e.type,n):e.hasOwnProperty("defaultValue")&&oh(t,e.type,sr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function dp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function oh(t,e,n){(e!=="number"||Hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var To=Array.isArray;function Cs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+sr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function ah(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(te(91));return Mt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function pp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(te(92));if(To(n)){if(1<n.length)throw Error(te(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:sr(n)}}function y0(t,e){var n=sr(e.value),i=sr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function mp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function S0(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function lh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?S0(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Da,M0=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Da=Da||document.createElement("div"),Da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function jo(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Po={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qx=["Webkit","ms","Moz","O"];Object.keys(Po).forEach(function(t){qx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Po[e]=Po[t]})});function E0(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Po.hasOwnProperty(t)&&Po[t]?(""+e).trim():e+"px"}function w0(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=E0(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Kx=Mt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function uh(t,e){if(e){if(Kx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(te(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(te(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(te(61))}if(e.style!=null&&typeof e.style!="object")throw Error(te(62))}}function ch(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var hh=null;function qf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var fh=null,Rs=null,bs=null;function gp(t){if(t=_a(t)){if(typeof fh!="function")throw Error(te(280));var e=t.stateNode;e&&(e=wu(e),fh(t.stateNode,t.type,e))}}function T0(t){Rs?bs?bs.push(t):bs=[t]:Rs=t}function A0(){if(Rs){var t=Rs,e=bs;if(bs=Rs=null,gp(t),e)for(t=0;t<e.length;t++)gp(e[t])}}function C0(t,e){return t(e)}function R0(){}var Xu=!1;function b0(t,e,n){if(Xu)return t(e,n);Xu=!0;try{return C0(t,e,n)}finally{Xu=!1,(Rs!==null||bs!==null)&&(R0(),A0())}}function Xo(t,e){var n=t.stateNode;if(n===null)return null;var i=wu(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(te(231,e,typeof n));return n}var dh=!1;if(Ti)try{var so={};Object.defineProperty(so,"passive",{get:function(){dh=!0}}),window.addEventListener("test",so,so),window.removeEventListener("test",so,so)}catch{dh=!1}function Jx(t,e,n,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Lo=!1,Vl=null,Gl=!1,ph=null,Qx={onError:function(t){Lo=!0,Vl=t}};function ey(t,e,n,i,r,s,o,a,l){Lo=!1,Vl=null,Jx.apply(Qx,arguments)}function ty(t,e,n,i,r,s,o,a,l){if(ey.apply(this,arguments),Lo){if(Lo){var u=Vl;Lo=!1,Vl=null}else throw Error(te(198));Gl||(Gl=!0,ph=u)}}function Vr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function P0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function vp(t){if(Vr(t)!==t)throw Error(te(188))}function ny(t){var e=t.alternate;if(!e){if(e=Vr(t),e===null)throw Error(te(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return vp(r),t;if(s===i)return vp(r),e;s=s.sibling}throw Error(te(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(te(189))}}if(n.alternate!==i)throw Error(te(190))}if(n.tag!==3)throw Error(te(188));return n.stateNode.current===n?t:e}function L0(t){return t=ny(t),t!==null?D0(t):null}function D0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=D0(t);if(e!==null)return e;t=t.sibling}return null}var N0=xn.unstable_scheduleCallback,_p=xn.unstable_cancelCallback,iy=xn.unstable_shouldYield,ry=xn.unstable_requestPaint,Tt=xn.unstable_now,sy=xn.unstable_getCurrentPriorityLevel,Kf=xn.unstable_ImmediatePriority,I0=xn.unstable_UserBlockingPriority,Wl=xn.unstable_NormalPriority,oy=xn.unstable_LowPriority,U0=xn.unstable_IdlePriority,yu=null,ri=null;function ay(t){if(ri&&typeof ri.onCommitFiberRoot=="function")try{ri.onCommitFiberRoot(yu,t,void 0,(t.current.flags&128)===128)}catch{}}var Wn=Math.clz32?Math.clz32:cy,ly=Math.log,uy=Math.LN2;function cy(t){return t>>>=0,t===0?32:31-(ly(t)/uy|0)|0}var Na=64,Ia=4194304;function Ao(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function jl(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ao(a):(s&=o,s!==0&&(i=Ao(s)))}else o=n&~r,o!==0?i=Ao(o):s!==0&&(i=Ao(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Wn(e),r=1<<n,i|=t[n],e&=~r;return i}function hy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function fy(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Wn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=hy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function mh(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function O0(){var t=Na;return Na<<=1,!(Na&4194240)&&(Na=64),t}function $u(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ga(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Wn(e),t[e]=n}function dy(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Wn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Jf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Wn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ot=0;function F0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var k0,Qf,z0,B0,H0,gh=!1,Ua=[],Zi=null,qi=null,Ki=null,$o=new Map,Yo=new Map,Wi=[],py="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function xp(t,e){switch(t){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":qi=null;break;case"mouseover":case"mouseout":Ki=null;break;case"pointerover":case"pointerout":$o.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Yo.delete(e.pointerId)}}function oo(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=_a(e),e!==null&&Qf(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function my(t,e,n,i,r){switch(e){case"focusin":return Zi=oo(Zi,t,e,n,i,r),!0;case"dragenter":return qi=oo(qi,t,e,n,i,r),!0;case"mouseover":return Ki=oo(Ki,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return $o.set(s,oo($o.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Yo.set(s,oo(Yo.get(s)||null,t,e,n,i,r)),!0}return!1}function V0(t){var e=wr(t.target);if(e!==null){var n=Vr(e);if(n!==null){if(e=n.tag,e===13){if(e=P0(n),e!==null){t.blockedOn=e,H0(t.priority,function(){z0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function wl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=vh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);hh=i,n.target.dispatchEvent(i),hh=null}else return e=_a(n),e!==null&&Qf(e),t.blockedOn=n,!1;e.shift()}return!0}function yp(t,e,n){wl(t)&&n.delete(e)}function gy(){gh=!1,Zi!==null&&wl(Zi)&&(Zi=null),qi!==null&&wl(qi)&&(qi=null),Ki!==null&&wl(Ki)&&(Ki=null),$o.forEach(yp),Yo.forEach(yp)}function ao(t,e){t.blockedOn===e&&(t.blockedOn=null,gh||(gh=!0,xn.unstable_scheduleCallback(xn.unstable_NormalPriority,gy)))}function Zo(t){function e(r){return ao(r,t)}if(0<Ua.length){ao(Ua[0],t);for(var n=1;n<Ua.length;n++){var i=Ua[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Zi!==null&&ao(Zi,t),qi!==null&&ao(qi,t),Ki!==null&&ao(Ki,t),$o.forEach(e),Yo.forEach(e),n=0;n<Wi.length;n++)i=Wi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Wi.length&&(n=Wi[0],n.blockedOn===null);)V0(n),n.blockedOn===null&&Wi.shift()}var Ps=Li.ReactCurrentBatchConfig,Xl=!0;function vy(t,e,n,i){var r=ot,s=Ps.transition;Ps.transition=null;try{ot=1,ed(t,e,n,i)}finally{ot=r,Ps.transition=s}}function _y(t,e,n,i){var r=ot,s=Ps.transition;Ps.transition=null;try{ot=4,ed(t,e,n,i)}finally{ot=r,Ps.transition=s}}function ed(t,e,n,i){if(Xl){var r=vh(t,e,n,i);if(r===null)ic(t,e,i,$l,n),xp(t,i);else if(my(r,t,e,n,i))i.stopPropagation();else if(xp(t,i),e&4&&-1<py.indexOf(t)){for(;r!==null;){var s=_a(r);if(s!==null&&k0(s),s=vh(t,e,n,i),s===null&&ic(t,e,i,$l,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else ic(t,e,i,null,n)}}var $l=null;function vh(t,e,n,i){if($l=null,t=qf(i),t=wr(t),t!==null)if(e=Vr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=P0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return $l=t,null}function G0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(sy()){case Kf:return 1;case I0:return 4;case Wl:case oy:return 16;case U0:return 536870912;default:return 16}default:return 16}}var $i=null,td=null,Tl=null;function W0(){if(Tl)return Tl;var t,e=td,n=e.length,i,r="value"in $i?$i.value:$i.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Tl=r.slice(t,1<i?1-i:void 0)}function Al(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Oa(){return!0}function Sp(){return!1}function Sn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Oa:Sp,this.isPropagationStopped=Sp,this}return Mt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Oa)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Oa)},persist:function(){},isPersistent:Oa}),e}var Js={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nd=Sn(Js),va=Mt({},Js,{view:0,detail:0}),xy=Sn(va),Yu,Zu,lo,Su=Mt({},va,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:id,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==lo&&(lo&&t.type==="mousemove"?(Yu=t.screenX-lo.screenX,Zu=t.screenY-lo.screenY):Zu=Yu=0,lo=t),Yu)},movementY:function(t){return"movementY"in t?t.movementY:Zu}}),Mp=Sn(Su),yy=Mt({},Su,{dataTransfer:0}),Sy=Sn(yy),My=Mt({},va,{relatedTarget:0}),qu=Sn(My),Ey=Mt({},Js,{animationName:0,elapsedTime:0,pseudoElement:0}),wy=Sn(Ey),Ty=Mt({},Js,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Ay=Sn(Ty),Cy=Mt({},Js,{data:0}),Ep=Sn(Cy),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},by={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Py={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ly(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Py[t])?!!e[t]:!1}function id(){return Ly}var Dy=Mt({},va,{key:function(t){if(t.key){var e=Ry[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Al(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?by[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:id,charCode:function(t){return t.type==="keypress"?Al(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Al(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ny=Sn(Dy),Iy=Mt({},Su,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),wp=Sn(Iy),Uy=Mt({},va,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:id}),Oy=Sn(Uy),Fy=Mt({},Js,{propertyName:0,elapsedTime:0,pseudoElement:0}),ky=Sn(Fy),zy=Mt({},Su,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),By=Sn(zy),Hy=[9,13,27,32],rd=Ti&&"CompositionEvent"in window,Do=null;Ti&&"documentMode"in document&&(Do=document.documentMode);var Vy=Ti&&"TextEvent"in window&&!Do,j0=Ti&&(!rd||Do&&8<Do&&11>=Do),Tp=" ",Ap=!1;function X0(t,e){switch(t){case"keyup":return Hy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function $0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ps=!1;function Gy(t,e){switch(t){case"compositionend":return $0(e);case"keypress":return e.which!==32?null:(Ap=!0,Tp);case"textInput":return t=e.data,t===Tp&&Ap?null:t;default:return null}}function Wy(t,e){if(ps)return t==="compositionend"||!rd&&X0(t,e)?(t=W0(),Tl=td=$i=null,ps=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return j0&&e.locale!=="ko"?null:e.data;default:return null}}var jy={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Cp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!jy[t.type]:e==="textarea"}function Y0(t,e,n,i){T0(i),e=Yl(e,"onChange"),0<e.length&&(n=new nd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var No=null,qo=null;function Xy(t){sv(t,0)}function Mu(t){var e=vs(t);if(_0(e))return t}function $y(t,e){if(t==="change")return e}var Z0=!1;if(Ti){var Ku;if(Ti){var Ju="oninput"in document;if(!Ju){var Rp=document.createElement("div");Rp.setAttribute("oninput","return;"),Ju=typeof Rp.oninput=="function"}Ku=Ju}else Ku=!1;Z0=Ku&&(!document.documentMode||9<document.documentMode)}function bp(){No&&(No.detachEvent("onpropertychange",q0),qo=No=null)}function q0(t){if(t.propertyName==="value"&&Mu(qo)){var e=[];Y0(e,qo,t,qf(t)),b0(Xy,e)}}function Yy(t,e,n){t==="focusin"?(bp(),No=e,qo=n,No.attachEvent("onpropertychange",q0)):t==="focusout"&&bp()}function Zy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Mu(qo)}function qy(t,e){if(t==="click")return Mu(e)}function Ky(t,e){if(t==="input"||t==="change")return Mu(e)}function Jy(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Yn=typeof Object.is=="function"?Object.is:Jy;function Ko(t,e){if(Yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Qc.call(e,r)||!Yn(t[r],e[r]))return!1}return!0}function Pp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Lp(t,e){var n=Pp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Pp(n)}}function K0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?K0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function J0(){for(var t=window,e=Hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Hl(t.document)}return e}function sd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Qy(t){var e=J0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&K0(n.ownerDocument.documentElement,n)){if(i!==null&&sd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Lp(n,s);var o=Lp(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var e1=Ti&&"documentMode"in document&&11>=document.documentMode,ms=null,_h=null,Io=null,xh=!1;function Dp(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;xh||ms==null||ms!==Hl(i)||(i=ms,"selectionStart"in i&&sd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),Io&&Ko(Io,i)||(Io=i,i=Yl(_h,"onSelect"),0<i.length&&(e=new nd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=ms)))}function Fa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var gs={animationend:Fa("Animation","AnimationEnd"),animationiteration:Fa("Animation","AnimationIteration"),animationstart:Fa("Animation","AnimationStart"),transitionend:Fa("Transition","TransitionEnd")},Qu={},Q0={};Ti&&(Q0=document.createElement("div").style,"AnimationEvent"in window||(delete gs.animationend.animation,delete gs.animationiteration.animation,delete gs.animationstart.animation),"TransitionEvent"in window||delete gs.transitionend.transition);function Eu(t){if(Qu[t])return Qu[t];if(!gs[t])return t;var e=gs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Q0)return Qu[t]=e[n];return t}var ev=Eu("animationend"),tv=Eu("animationiteration"),nv=Eu("animationstart"),iv=Eu("transitionend"),rv=new Map,Np="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ur(t,e){rv.set(t,e),Hr(e,[t])}for(var ec=0;ec<Np.length;ec++){var tc=Np[ec],t1=tc.toLowerCase(),n1=tc[0].toUpperCase()+tc.slice(1);ur(t1,"on"+n1)}ur(ev,"onAnimationEnd");ur(tv,"onAnimationIteration");ur(nv,"onAnimationStart");ur("dblclick","onDoubleClick");ur("focusin","onFocus");ur("focusout","onBlur");ur(iv,"onTransitionEnd");ks("onMouseEnter",["mouseout","mouseover"]);ks("onMouseLeave",["mouseout","mouseover"]);ks("onPointerEnter",["pointerout","pointerover"]);ks("onPointerLeave",["pointerout","pointerover"]);Hr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Hr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Hr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Hr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Hr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Co="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),i1=new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));function Ip(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,ty(i,e,void 0,t),t.currentTarget=null}function sv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Ip(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Ip(r,a,u),s=l}}}if(Gl)throw t=ph,Gl=!1,ph=null,t}function mt(t,e){var n=e[wh];n===void 0&&(n=e[wh]=new Set);var i=t+"__bubble";n.has(i)||(ov(e,t,2,!1),n.add(i))}function nc(t,e,n){var i=0;e&&(i|=4),ov(n,t,i,e)}var ka="_reactListening"+Math.random().toString(36).slice(2);function Jo(t){if(!t[ka]){t[ka]=!0,d0.forEach(function(n){n!=="selectionchange"&&(i1.has(n)||nc(n,!1,t),nc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[ka]||(e[ka]=!0,nc("selectionchange",!1,e))}}function ov(t,e,n,i){switch(G0(e)){case 1:var r=vy;break;case 4:r=_y;break;default:r=ed}n=r.bind(null,e,n,t),r=void 0,!dh||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function ic(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=wr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}b0(function(){var u=s,c=qf(n),f=[];e:{var h=rv.get(t);if(h!==void 0){var p=nd,g=t;switch(t){case"keypress":if(Al(n)===0)break e;case"keydown":case"keyup":p=Ny;break;case"focusin":g="focus",p=qu;break;case"focusout":g="blur",p=qu;break;case"beforeblur":case"afterblur":p=qu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Mp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=Sy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Oy;break;case ev:case tv:case nv:p=wy;break;case iv:p=ky;break;case"scroll":p=xy;break;case"wheel":p=By;break;case"copy":case"cut":case"paste":p=Ay;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=wp}var y=(e&4)!==0,m=!y&&t==="scroll",d=y?h!==null?h+"Capture":null:h;y=[];for(var v=u,_;v!==null;){_=v;var x=_.stateNode;if(_.tag===5&&x!==null&&(_=x,d!==null&&(x=Xo(v,d),x!=null&&y.push(Qo(v,x,_)))),m)break;v=v.return}0<y.length&&(h=new p(h,g,null,n,c),f.push({event:h,listeners:y}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==hh&&(g=n.relatedTarget||n.fromElement)&&(wr(g)||g[Ai]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=u,g=g?wr(g):null,g!==null&&(m=Vr(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=u),p!==g)){if(y=Mp,x="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(y=wp,x="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:vs(p),_=g==null?h:vs(g),h=new y(x,v+"leave",p,n,c),h.target=m,h.relatedTarget=_,x=null,wr(c)===u&&(y=new y(d,v+"enter",g,n,c),y.target=_,y.relatedTarget=m,x=y),m=x,p&&g)t:{for(y=p,d=g,v=0,_=y;_;_=jr(_))v++;for(_=0,x=d;x;x=jr(x))_++;for(;0<v-_;)y=jr(y),v--;for(;0<_-v;)d=jr(d),_--;for(;v--;){if(y===d||d!==null&&y===d.alternate)break t;y=jr(y),d=jr(d)}y=null}else y=null;p!==null&&Up(f,h,p,y,!1),g!==null&&m!==null&&Up(f,m,g,y,!0)}}e:{if(h=u?vs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=$y;else if(Cp(h))if(Z0)b=Ky;else{b=Zy;var A=Yy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=qy);if(b&&(b=b(t,u))){Y0(f,b,n,c);break e}A&&A(t,h,u),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&oh(h,"number",h.value)}switch(A=u?vs(u):window,t){case"focusin":(Cp(A)||A.contentEditable==="true")&&(ms=A,_h=u,Io=null);break;case"focusout":Io=_h=ms=null;break;case"mousedown":xh=!0;break;case"contextmenu":case"mouseup":case"dragend":xh=!1,Dp(f,n,c);break;case"selectionchange":if(e1)break;case"keydown":case"keyup":Dp(f,n,c)}var T;if(rd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ps?X0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(j0&&n.locale!=="ko"&&(ps||R!=="onCompositionStart"?R==="onCompositionEnd"&&ps&&(T=W0()):($i=c,td="value"in $i?$i.value:$i.textContent,ps=!0)),A=Yl(u,R),0<A.length&&(R=new Ep(R,t,null,n,c),f.push({event:R,listeners:A}),T?R.data=T:(T=$0(n),T!==null&&(R.data=T)))),(T=Vy?Gy(t,n):Wy(t,n))&&(u=Yl(u,"onBeforeInput"),0<u.length&&(c=new Ep("onBeforeInput","beforeinput",null,n,c),f.push({event:c,listeners:u}),c.data=T))}sv(f,e)})}function Qo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Xo(t,n),s!=null&&i.unshift(Qo(t,s,r)),s=Xo(t,e),s!=null&&i.push(Qo(t,s,r))),t=t.return}return i}function jr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Up(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Xo(n,s),l!=null&&o.unshift(Qo(n,l,a))):r||(l=Xo(n,s),l!=null&&o.push(Qo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var r1=/\r\n?/g,s1=/\u0000|\uFFFD/g;function Op(t){return(typeof t=="string"?t:""+t).replace(r1,`
`).replace(s1,"")}function za(t,e,n){if(e=Op(e),Op(t)!==e&&n)throw Error(te(425))}function Zl(){}var yh=null,Sh=null;function Mh(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Eh=typeof setTimeout=="function"?setTimeout:void 0,o1=typeof clearTimeout=="function"?clearTimeout:void 0,Fp=typeof Promise=="function"?Promise:void 0,a1=typeof queueMicrotask=="function"?queueMicrotask:typeof Fp<"u"?function(t){return Fp.resolve(null).then(t).catch(l1)}:Eh;function l1(t){setTimeout(function(){throw t})}function rc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Zo(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Zo(e)}function Ji(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Qs=Math.random().toString(36).slice(2),ei="__reactFiber$"+Qs,ea="__reactProps$"+Qs,Ai="__reactContainer$"+Qs,wh="__reactEvents$"+Qs,u1="__reactListeners$"+Qs,c1="__reactHandles$"+Qs;function wr(t){var e=t[ei];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Ai]||n[ei]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=kp(t);t!==null;){if(n=t[ei])return n;t=kp(t)}return e}t=n,n=t.parentNode}return null}function _a(t){return t=t[ei]||t[Ai],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function vs(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(te(33))}function wu(t){return t[ea]||null}var Th=[],_s=-1;function cr(t){return{current:t}}function gt(t){0>_s||(t.current=Th[_s],Th[_s]=null,_s--)}function ft(t,e){_s++,Th[_s]=t.current,t.current=e}var or={},$t=cr(or),ln=cr(!1),Dr=or;function zs(t,e){var n=t.type.contextTypes;if(!n)return or;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function un(t){return t=t.childContextTypes,t!=null}function ql(){gt(ln),gt($t)}function zp(t,e,n){if($t.current!==or)throw Error(te(168));ft($t,e),ft(ln,n)}function av(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(te(108,Yx(t)||"Unknown",r));return Mt({},n,i)}function Kl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||or,Dr=$t.current,ft($t,t),ft(ln,ln.current),!0}function Bp(t,e,n){var i=t.stateNode;if(!i)throw Error(te(169));n?(t=av(t,e,Dr),i.__reactInternalMemoizedMergedChildContext=t,gt(ln),gt($t),ft($t,t)):gt(ln),ft(ln,n)}var _i=null,Tu=!1,sc=!1;function lv(t){_i===null?_i=[t]:_i.push(t)}function h1(t){Tu=!0,lv(t)}function hr(){if(!sc&&_i!==null){sc=!0;var t=0,e=ot;try{var n=_i;for(ot=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}_i=null,Tu=!1}catch(r){throw _i!==null&&(_i=_i.slice(t+1)),N0(Kf,hr),r}finally{ot=e,sc=!1}}return null}var xs=[],ys=0,Jl=null,Ql=0,Tn=[],An=0,Nr=null,xi=1,yi="";function xr(t,e){xs[ys++]=Ql,xs[ys++]=Jl,Jl=t,Ql=e}function uv(t,e,n){Tn[An++]=xi,Tn[An++]=yi,Tn[An++]=Nr,Nr=t;var i=xi;t=yi;var r=32-Wn(i)-1;i&=~(1<<r),n+=1;var s=32-Wn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,xi=1<<32-Wn(e)+r|n<<r|i,yi=s+t}else xi=1<<s|n<<r|i,yi=t}function od(t){t.return!==null&&(xr(t,1),uv(t,1,0))}function ad(t){for(;t===Jl;)Jl=xs[--ys],xs[ys]=null,Ql=xs[--ys],xs[ys]=null;for(;t===Nr;)Nr=Tn[--An],Tn[An]=null,yi=Tn[--An],Tn[An]=null,xi=Tn[--An],Tn[An]=null}var _n=null,vn=null,_t=!1,Hn=null;function cv(t,e){var n=Rn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Hp(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,_n=t,vn=Ji(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,_n=t,vn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Nr!==null?{id:xi,overflow:yi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Rn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,_n=t,vn=null,!0):!1;default:return!1}}function Ah(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ch(t){if(_t){var e=vn;if(e){var n=e;if(!Hp(t,e)){if(Ah(t))throw Error(te(418));e=Ji(n.nextSibling);var i=_n;e&&Hp(t,e)?cv(i,n):(t.flags=t.flags&-4097|2,_t=!1,_n=t)}}else{if(Ah(t))throw Error(te(418));t.flags=t.flags&-4097|2,_t=!1,_n=t}}}function Vp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;_n=t}function Ba(t){if(t!==_n)return!1;if(!_t)return Vp(t),_t=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Mh(t.type,t.memoizedProps)),e&&(e=vn)){if(Ah(t))throw hv(),Error(te(418));for(;e;)cv(t,e),e=Ji(e.nextSibling)}if(Vp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(te(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){vn=Ji(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}vn=null}}else vn=_n?Ji(t.stateNode.nextSibling):null;return!0}function hv(){for(var t=vn;t;)t=Ji(t.nextSibling)}function Bs(){vn=_n=null,_t=!1}function ld(t){Hn===null?Hn=[t]:Hn.push(t)}var f1=Li.ReactCurrentBatchConfig;function uo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(te(309));var i=n.stateNode}if(!i)throw Error(te(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(te(284));if(!n._owner)throw Error(te(290,t))}return t}function Ha(t,e){throw t=Object.prototype.toString.call(e),Error(te(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function Gp(t){var e=t._init;return e(t._payload)}function fv(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=nr(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,_,x){return v===null||v.tag!==6?(v=fc(_,d.mode,x),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,x){var b=_.type;return b===ds?c(d,v,_.props.children,x,_.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Hi&&Gp(b)===v.type)?(x=r(v,_.props),x.ref=uo(d,v,_),x.return=d,x):(x=Nl(_.type,_.key,_.props,null,d.mode,x),x.ref=uo(d,v,_),x.return=d,x)}function u(d,v,_,x){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=dc(_,d.mode,x),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function c(d,v,_,x,b){return v===null||v.tag!==7?(v=Pr(_,d.mode,x,b),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=fc(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Pa:return _=Nl(v.type,v.key,v.props,null,d.mode,_),_.ref=uo(d,null,v),_.return=d,_;case fs:return v=dc(v,d.mode,_),v.return=d,v;case Hi:var x=v._init;return f(d,x(v._payload),_)}if(To(v)||ro(v))return v=Pr(v,d.mode,_,null),v.return=d,v;Ha(d,v)}return null}function h(d,v,_,x){var b=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(d,v,""+_,x);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:return _.key===b?l(d,v,_,x):null;case fs:return _.key===b?u(d,v,_,x):null;case Hi:return b=_._init,h(d,v,b(_._payload),x)}if(To(_)||ro(_))return b!==null?null:c(d,v,_,x,null);Ha(d,_)}return null}function p(d,v,_,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(_)||null,a(v,d,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case Pa:return d=d.get(x.key===null?_:x.key)||null,l(v,d,x,b);case fs:return d=d.get(x.key===null?_:x.key)||null,u(v,d,x,b);case Hi:var A=x._init;return p(d,v,_,A(x._payload),b)}if(To(x)||ro(x))return d=d.get(_)||null,c(v,d,x,b,null);Ha(v,x)}return null}function g(d,v,_,x){for(var b=null,A=null,T=v,R=v=0,w=null;T!==null&&R<_.length;R++){T.index>R?(w=T,T=null):w=T.sibling;var S=h(d,T,_[R],x);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(d,T),v=s(S,v,R),A===null?b=S:A.sibling=S,A=S,T=w}if(R===_.length)return n(d,T),_t&&xr(d,R),b;if(T===null){for(;R<_.length;R++)T=f(d,_[R],x),T!==null&&(v=s(T,v,R),A===null?b=T:A.sibling=T,A=T);return _t&&xr(d,R),b}for(T=i(d,T);R<_.length;R++)w=p(T,d,R,_[R],x),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?R:w.key),v=s(w,v,R),A===null?b=w:A.sibling=w,A=w);return t&&T.forEach(function(L){return e(d,L)}),_t&&xr(d,R),b}function y(d,v,_,x){var b=ro(_);if(typeof b!="function")throw Error(te(150));if(_=b.call(_),_==null)throw Error(te(151));for(var A=b=null,T=v,R=v=0,w=null,S=_.next();T!==null&&!S.done;R++,S=_.next()){T.index>R?(w=T,T=null):w=T.sibling;var L=h(d,T,S.value,x);if(L===null){T===null&&(T=w);break}t&&T&&L.alternate===null&&e(d,T),v=s(L,v,R),A===null?b=L:A.sibling=L,A=L,T=w}if(S.done)return n(d,T),_t&&xr(d,R),b;if(T===null){for(;!S.done;R++,S=_.next())S=f(d,S.value,x),S!==null&&(v=s(S,v,R),A===null?b=S:A.sibling=S,A=S);return _t&&xr(d,R),b}for(T=i(d,T);!S.done;R++,S=_.next())S=p(T,d,R,S.value,x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?R:S.key),v=s(S,v,R),A===null?b=S:A.sibling=S,A=S);return t&&T.forEach(function(X){return e(d,X)}),_t&&xr(d,R),b}function m(d,v,_,x){if(typeof _=="object"&&_!==null&&_.type===ds&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Pa:e:{for(var b=_.key,A=v;A!==null;){if(A.key===b){if(b=_.type,b===ds){if(A.tag===7){n(d,A.sibling),v=r(A,_.props.children),v.return=d,d=v;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Hi&&Gp(b)===A.type){n(d,A.sibling),v=r(A,_.props),v.ref=uo(d,A,_),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===ds?(v=Pr(_.props.children,d.mode,x,_.key),v.return=d,d=v):(x=Nl(_.type,_.key,_.props,null,d.mode,x),x.ref=uo(d,v,_),x.return=d,d=x)}return o(d);case fs:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=dc(_,d.mode,x),v.return=d,d=v}return o(d);case Hi:return A=_._init,m(d,v,A(_._payload),x)}if(To(_))return g(d,v,_,x);if(ro(_))return y(d,v,_,x);Ha(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=fc(_,d.mode,x),v.return=d,d=v),o(d)):n(d,v)}return m}var Hs=fv(!0),dv=fv(!1),eu=cr(null),tu=null,Ss=null,ud=null;function cd(){ud=Ss=tu=null}function hd(t){var e=eu.current;gt(eu),t._currentValue=e}function Rh(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ls(t,e){tu=t,ud=Ss=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(an=!0),t.firstContext=null)}function Ln(t){var e=t._currentValue;if(ud!==t)if(t={context:t,memoizedValue:e,next:null},Ss===null){if(tu===null)throw Error(te(308));Ss=t,tu.dependencies={lanes:0,firstContext:t}}else Ss=Ss.next=t;return e}var Tr=null;function fd(t){Tr===null?Tr=[t]:Tr.push(t)}function pv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,fd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ci(t,i)}function Ci(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Vi=!1;function dd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function mv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ei(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Qi(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Qe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ci(t,n)}return r=i.interleaved,r===null?(e.next=e,fd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ci(t,n)}function Cl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}function Wp(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function nu(t,e,n,i){var r=t.updateQueue;Vi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=t.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,y=a;switch(h=e,p=n,y.tag){case 1:if(g=y.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=y.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=Mt({},f,h);break e;case 2:Vi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=f):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(c===null&&(l=f),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Ur|=o,t.lanes=o,t.memoizedState=f}}function jp(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(te(191,r));r.call(i)}}}var xa={},si=cr(xa),ta=cr(xa),na=cr(xa);function Ar(t){if(t===xa)throw Error(te(174));return t}function pd(t,e){switch(ft(na,e),ft(ta,t),ft(si,xa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:lh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=lh(e,t)}gt(si),ft(si,e)}function Vs(){gt(si),gt(ta),gt(na)}function gv(t){Ar(na.current);var e=Ar(si.current),n=lh(e,t.type);e!==n&&(ft(ta,t),ft(si,n))}function md(t){ta.current===t&&(gt(si),gt(ta))}var xt=cr(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var oc=[];function gd(){for(var t=0;t<oc.length;t++)oc[t]._workInProgressVersionPrimary=null;oc.length=0}var Rl=Li.ReactCurrentDispatcher,ac=Li.ReactCurrentBatchConfig,Ir=0,St=null,bt=null,It=null,ru=!1,Uo=!1,ia=0,d1=0;function Vt(){throw Error(te(321))}function vd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Yn(t[n],e[n]))return!1;return!0}function _d(t,e,n,i,r,s){if(Ir=s,St=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Rl.current=t===null||t.memoizedState===null?v1:_1,t=n(i,r),Uo){s=0;do{if(Uo=!1,ia=0,25<=s)throw Error(te(301));s+=1,It=bt=null,e.updateQueue=null,Rl.current=x1,t=n(i,r)}while(Uo)}if(Rl.current=su,e=bt!==null&&bt.next!==null,Ir=0,It=bt=St=null,ru=!1,e)throw Error(te(300));return t}function xd(){var t=ia!==0;return ia=0,t}function Jn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?St.memoizedState=It=t:It=It.next=t,It}function Dn(){if(bt===null){var t=St.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var e=It===null?St.memoizedState:It.next;if(e!==null)It=e,bt=t;else{if(t===null)throw Error(te(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},It===null?St.memoizedState=It=t:It=It.next=t}return It}function ra(t,e){return typeof e=="function"?e(t):e}function lc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((Ir&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:t(i,u.action);else{var f={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,St.lanes|=c,Ur|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,Yn(i,e.memoizedState)||(an=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,St.lanes|=s,Ur|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function uc(t){var e=Dn(),n=e.queue;if(n===null)throw Error(te(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Yn(s,e.memoizedState)||(an=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function vv(){}function _v(t,e){var n=St,i=Dn(),r=e(),s=!Yn(i.memoizedState,r);if(s&&(i.memoizedState=r,an=!0),i=i.queue,yd(Sv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(n.flags|=2048,sa(9,yv.bind(null,n,i,r,e),void 0,null),Ot===null)throw Error(te(349));Ir&30||xv(n,e,r)}return r}function xv(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function yv(t,e,n,i){e.value=n,e.getSnapshot=i,Mv(e)&&Ev(t)}function Sv(t,e,n){return n(function(){Mv(e)&&Ev(t)})}function Mv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Yn(t,n)}catch{return!0}}function Ev(t){var e=Ci(t,1);e!==null&&jn(e,t,1,-1)}function Xp(t){var e=Jn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ra,lastRenderedState:t},e.queue=t,t=t.dispatch=g1.bind(null,St,t),[e.memoizedState,t]}function sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=St.updateQueue,e===null?(e={lastEffect:null,stores:null},St.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function wv(){return Dn().memoizedState}function bl(t,e,n,i){var r=Jn();St.flags|=t,r.memoizedState=sa(1|e,n,void 0,i===void 0?null:i)}function Au(t,e,n,i){var r=Dn();i=i===void 0?null:i;var s=void 0;if(bt!==null){var o=bt.memoizedState;if(s=o.destroy,i!==null&&vd(i,o.deps)){r.memoizedState=sa(e,n,s,i);return}}St.flags|=t,r.memoizedState=sa(1|e,n,s,i)}function $p(t,e){return bl(8390656,8,t,e)}function yd(t,e){return Au(2048,8,t,e)}function Tv(t,e){return Au(4,2,t,e)}function Av(t,e){return Au(4,4,t,e)}function Cv(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Rv(t,e,n){return n=n!=null?n.concat([t]):null,Au(4,4,Cv.bind(null,e,t),n)}function Sd(){}function bv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function Pv(t,e){var n=Dn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&vd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Lv(t,e,n){return Ir&21?(Yn(n,e)||(n=O0(),St.lanes|=n,Ur|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,an=!0),t.memoizedState=n)}function p1(t,e){var n=ot;ot=n!==0&&4>n?n:4,t(!0);var i=ac.transition;ac.transition={};try{t(!1),e()}finally{ot=n,ac.transition=i}}function Dv(){return Dn().memoizedState}function m1(t,e,n){var i=tr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Iv(e,n);else if(n=pv(t,e,n,i),n!==null){var r=Jt();jn(n,t,i,r),Uv(n,e,i)}}function g1(t,e,n){var i=tr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Yn(a,o)){var l=e.interleaved;l===null?(r.next=r,fd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=pv(t,e,r,i),n!==null&&(r=Jt(),jn(n,t,i,r),Uv(n,e,i))}}function Nv(t){var e=t.alternate;return t===St||e!==null&&e===St}function Iv(t,e){Uo=ru=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Uv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Jf(t,n)}}var su={readContext:Ln,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},v1={readContext:Ln,useCallback:function(t,e){return Jn().memoizedState=[t,e===void 0?null:e],t},useContext:Ln,useEffect:$p,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,bl(4194308,4,Cv.bind(null,e,t),n)},useLayoutEffect:function(t,e){return bl(4194308,4,t,e)},useInsertionEffect:function(t,e){return bl(4,2,t,e)},useMemo:function(t,e){var n=Jn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Jn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=m1.bind(null,St,t),[i.memoizedState,t]},useRef:function(t){var e=Jn();return t={current:t},e.memoizedState=t},useState:Xp,useDebugValue:Sd,useDeferredValue:function(t){return Jn().memoizedState=t},useTransition:function(){var t=Xp(!1),e=t[0];return t=p1.bind(null,t[1]),Jn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=St,r=Jn();if(_t){if(n===void 0)throw Error(te(407));n=n()}else{if(n=e(),Ot===null)throw Error(te(349));Ir&30||xv(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,$p(Sv.bind(null,i,s,t),[t]),i.flags|=2048,sa(9,yv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Jn(),e=Ot.identifierPrefix;if(_t){var n=yi,i=xi;n=(i&~(1<<32-Wn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=ia++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=d1++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_1={readContext:Ln,useCallback:bv,useContext:Ln,useEffect:yd,useImperativeHandle:Rv,useInsertionEffect:Tv,useLayoutEffect:Av,useMemo:Pv,useReducer:lc,useRef:wv,useState:function(){return lc(ra)},useDebugValue:Sd,useDeferredValue:function(t){var e=Dn();return Lv(e,bt.memoizedState,t)},useTransition:function(){var t=lc(ra)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1},x1={readContext:Ln,useCallback:bv,useContext:Ln,useEffect:yd,useImperativeHandle:Rv,useInsertionEffect:Tv,useLayoutEffect:Av,useMemo:Pv,useReducer:uc,useRef:wv,useState:function(){return uc(ra)},useDebugValue:Sd,useDeferredValue:function(t){var e=Dn();return bt===null?e.memoizedState=t:Lv(e,bt.memoizedState,t)},useTransition:function(){var t=uc(ra)[0],e=Dn().memoizedState;return[t,e]},useMutableSource:vv,useSyncExternalStore:_v,useId:Dv,unstable_isNewReconciler:!1};function zn(t,e){if(t&&t.defaultProps){e=Mt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function bh(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:Mt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Cu={isMounted:function(t){return(t=t._reactInternals)?Vr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=tr(t),s=Ei(i,r);s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(jn(e,t,r,i),Cl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=Jt(),r=tr(t),s=Ei(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Qi(t,s,r),e!==null&&(jn(e,t,r,i),Cl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Jt(),i=tr(t),r=Ei(n,i);r.tag=2,e!=null&&(r.callback=e),e=Qi(t,r,i),e!==null&&(jn(e,t,i,n),Cl(e,t,i))}};function Yp(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ko(n,i)||!Ko(r,s):!0}function Ov(t,e,n){var i=!1,r=or,s=e.contextType;return typeof s=="object"&&s!==null?s=Ln(s):(r=un(e)?Dr:$t.current,i=e.contextTypes,s=(i=i!=null)?zs(t,r):or),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Cu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Cu.enqueueReplaceState(e,e.state,null)}function Ph(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},dd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Ln(s):(s=un(e)?Dr:$t.current,r.context=zs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(bh(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Cu.enqueueReplaceState(r,r.state,null),nu(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Gs(t,e){try{var n="",i=e;do n+=$x(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function cc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Lh(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var y1=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=Ei(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){au||(au=!0,Hh=i),Lh(t,e)},n}function kv(t,e,n){n=Ei(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Lh(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Lh(t,e),typeof i!="function"&&(er===null?er=new Set([this]):er.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function qp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new y1;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=I1.bind(null,t,e,n),e.then(t,t))}function Kp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Jp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ei(-1,1),e.tag=2,Qi(n,e,1))),n.lanes|=1),t)}var S1=Li.ReactCurrentOwner,an=!1;function Kt(t,e,n,i){e.child=t===null?dv(e,null,n,i):Hs(e,t.child,n,i)}function Qp(t,e,n,i,r){n=n.render;var s=e.ref;return Ls(e,r),i=_d(t,e,n,i,s,r),n=xd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(_t&&n&&od(e),e.flags|=1,Kt(t,e,i,r),e.child)}function em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!bd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,zv(t,e,s,i,r)):(t=Nl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Ko,n(o,i)&&t.ref===e.ref)return Ri(t,e,r)}return e.flags|=1,t=nr(s,i),t.ref=e.ref,t.return=e,e.child=t}function zv(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Ko(s,i)&&t.ref===e.ref)if(an=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(an=!0);else return e.lanes=t.lanes,Ri(t,e,r)}return Dh(t,e,n,i,r)}function Bv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ft(Es,mn),mn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ft(Es,mn),mn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ft(Es,mn),mn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ft(Es,mn),mn|=i;return Kt(t,e,r,n),e.child}function Hv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Dh(t,e,n,i,r){var s=un(n)?Dr:$t.current;return s=zs(e,s),Ls(e,r),n=_d(t,e,n,i,s,r),i=xd(),t!==null&&!an?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ri(t,e,r)):(_t&&i&&od(e),e.flags|=1,Kt(t,e,n,r),e.child)}function tm(t,e,n,i,r){if(un(n)){var s=!0;Kl(e)}else s=!1;if(Ls(e,r),e.stateNode===null)Pl(t,e),Ov(e,n,i),Ph(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=Ln(u):(u=un(n)?Dr:$t.current,u=zs(e,u));var c=n.getDerivedStateFromProps,f=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Zp(e,o,i,u),Vi=!1;var h=e.memoizedState;o.state=h,nu(e,i,o,r),l=e.memoizedState,a!==i||h!==l||ln.current||Vi?(typeof c=="function"&&(bh(e,n,c,i),l=e.memoizedState),(a=Vi||Yp(e,n,a,i,h,l,u))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,mv(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:zn(e.type,a),o.props=u,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Ln(l):(l=un(n)?Dr:$t.current,l=zs(e,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&Zp(e,o,i,l),Vi=!1,h=e.memoizedState,o.state=h,nu(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||ln.current||Vi?(typeof p=="function"&&(bh(e,n,p,i),g=e.memoizedState),(u=Vi||Yp(e,n,u,i,h,g,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return Nh(t,e,n,i,s,r)}function Nh(t,e,n,i,r,s){Hv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Bp(e,n,!1),Ri(t,e,s);i=e.stateNode,S1.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Hs(e,t.child,null,s),e.child=Hs(e,null,a,s)):Kt(t,e,a,s),e.memoizedState=i.state,r&&Bp(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?zp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zp(t,e.context,!1),pd(t,e.containerInfo)}function nm(t,e,n,i,r){return Bs(),ld(r),e.flags|=256,Kt(t,e,n,i),e.child}var Ih={dehydrated:null,treeContext:null,retryLane:0};function Uh(t){return{baseLanes:t,cachePool:null,transitions:null}}function Gv(t,e,n){var i=e.pendingProps,r=xt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ft(xt,r&1),t===null)return Ch(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Pu(o,i,0,null),t=Pr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Uh(n),e.memoizedState=Ih,t):Md(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return M1(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=nr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=nr(a,s):(s=Pr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Uh(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Ih,i}return s=t.child,t=s.sibling,i=nr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Md(t,e){return e=Pu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Va(t,e,n,i){return i!==null&&ld(i),Hs(e,t.child,null,n),t=Md(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function M1(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=cc(Error(te(422))),Va(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=Pu({mode:"visible",children:i.children},r,0,null),s=Pr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Hs(e,t.child,null,o),e.child.memoizedState=Uh(o),e.memoizedState=Ih,s);if(!(e.mode&1))return Va(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(te(419)),i=cc(s,i,void 0),Va(t,e,o,i)}if(a=(o&t.childLanes)!==0,an||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ci(t,r),jn(i,t,r,-1))}return Rd(),i=cc(Error(te(421))),Va(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=U1.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,vn=Ji(r.nextSibling),_n=e,_t=!0,Hn=null,t!==null&&(Tn[An++]=xi,Tn[An++]=yi,Tn[An++]=Nr,xi=t.id,yi=t.overflow,Nr=e),e=Md(e,i.children),e.flags|=4096,e)}function im(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Rh(t.return,e,n)}function hc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Wv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Kt(t,e,i.children,n),i=xt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&im(t,n,e);else if(t.tag===19)im(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ft(xt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),hc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&iu(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}hc(e,!0,n,null,s);break;case"together":hc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Pl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ri(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Ur|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(te(153));if(e.child!==null){for(t=e.child,n=nr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=nr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function E1(t,e,n){switch(e.tag){case 3:Vv(e),Bs();break;case 5:gv(e);break;case 1:un(e.type)&&Kl(e);break;case 4:pd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ft(eu,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ft(xt,xt.current&1),e.flags|=128,null):n&e.child.childLanes?Gv(t,e,n):(ft(xt,xt.current&1),t=Ri(t,e,n),t!==null?t.sibling:null);ft(xt,xt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Wv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ft(xt,xt.current),i)break;return null;case 22:case 23:return e.lanes=0,Bv(t,e,n)}return Ri(t,e,n)}var jv,Oh,Xv,$v;jv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Oh=function(){};Xv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Ar(si.current);var s=null;switch(n){case"input":r=rh(t,r),i=rh(t,i),s=[];break;case"select":r=Mt({},r,{value:void 0}),i=Mt({},i,{value:void 0}),s=[];break;case"textarea":r=ah(t,r),i=ah(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Zl)}uh(n,i);var o;n=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wo.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wo.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&mt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};$v=function(t,e,n,i){n!==i&&(e.flags|=4)};function co(t,e){if(!_t)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Gt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function w1(t,e,n){var i=e.pendingProps;switch(ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return un(e.type)&&ql(),Gt(e),null;case 3:return i=e.stateNode,Vs(),gt(ln),gt($t),gd(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Ba(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,Hn!==null&&(Wh(Hn),Hn=null))),Oh(t,e),Gt(e),null;case 5:md(e);var r=Ar(na.current);if(n=e.type,t!==null&&e.stateNode!=null)Xv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(te(166));return Gt(e),null}if(t=Ar(si.current),Ba(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[ei]=e,i[ea]=s,t=(e.mode&1)!==0,n){case"dialog":mt("cancel",i),mt("close",i);break;case"iframe":case"object":case"embed":mt("load",i);break;case"video":case"audio":for(r=0;r<Co.length;r++)mt(Co[r],i);break;case"source":mt("error",i);break;case"img":case"image":case"link":mt("error",i),mt("load",i);break;case"details":mt("toggle",i);break;case"input":fp(i,s),mt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},mt("invalid",i);break;case"textarea":pp(i,s),mt("invalid",i)}uh(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&za(i.textContent,a,t),r=["children",""+a]):Wo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&mt("scroll",i)}switch(n){case"input":La(i),dp(i,s,!0);break;case"textarea":La(i),mp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Zl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=S0(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[ei]=e,t[ea]=i,jv(t,e,!1,!1),e.stateNode=t;e:{switch(o=ch(n,i),n){case"dialog":mt("cancel",t),mt("close",t),r=i;break;case"iframe":case"object":case"embed":mt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Co.length;r++)mt(Co[r],t);r=i;break;case"source":mt("error",t),r=i;break;case"img":case"image":case"link":mt("error",t),mt("load",t),r=i;break;case"details":mt("toggle",t),r=i;break;case"input":fp(t,i),r=rh(t,i),mt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=Mt({},i,{value:void 0}),mt("invalid",t);break;case"textarea":pp(t,i),r=ah(t,i),mt("invalid",t);break;default:r=i}uh(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?w0(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&M0(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&jo(t,l):typeof l=="number"&&jo(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Wo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&mt("scroll",t):l!=null&&Xf(t,s,l,o))}switch(n){case"input":La(t),dp(t,i,!1);break;case"textarea":La(t),mp(t);break;case"option":i.value!=null&&t.setAttribute("value",""+sr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Cs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Cs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Zl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(t&&e.stateNode!=null)$v(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(te(166));if(n=Ar(na.current),Ar(si.current),Ba(e)){if(i=e.stateNode,n=e.memoizedProps,i[ei]=e,(s=i.nodeValue!==n)&&(t=_n,t!==null))switch(t.tag){case 3:za(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&za(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[ei]=e,e.stateNode=i}return Gt(e),null;case 13:if(gt(xt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(_t&&vn!==null&&e.mode&1&&!(e.flags&128))hv(),Bs(),e.flags|=98560,s=!1;else if(s=Ba(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(te(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(te(317));s[ei]=e}else Bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else Hn!==null&&(Wh(Hn),Hn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||xt.current&1?Pt===0&&(Pt=3):Rd())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return Vs(),Oh(t,e),t===null&&Jo(e.stateNode.containerInfo),Gt(e),null;case 10:return hd(e.type._context),Gt(e),null;case 17:return un(e.type)&&ql(),Gt(e),null;case 19:if(gt(xt),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)co(s,!1);else{if(Pt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,co(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ft(xt,xt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Tt()>Ws&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304)}else{if(!i)if(t=iu(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),co(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!_t)return Gt(e),null}else 2*Tt()-s.renderingStartTime>Ws&&n!==1073741824&&(e.flags|=128,i=!0,co(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Tt(),e.sibling=null,n=xt.current,ft(xt,i?n&1|2:n&1),e):(Gt(e),null);case 22:case 23:return Cd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?mn&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(te(156,e.tag))}function T1(t,e){switch(ad(e),e.tag){case 1:return un(e.type)&&ql(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Vs(),gt(ln),gt($t),gd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return md(e),null;case 13:if(gt(xt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(te(340));Bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return gt(xt),null;case 4:return Vs(),null;case 10:return hd(e.type._context),null;case 22:case 23:return Cd(),null;case 24:return null;default:return null}}var Ga=!1,Xt=!1,A1=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ms(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){wt(t,e,i)}else n.current=null}function Fh(t,e,n){try{n()}catch(i){wt(t,e,i)}}var rm=!1;function C1(t,e){if(yh=Xl,t=J0(),sd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,c=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Sh={focusedElem:t,selectionRange:n},Xl=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var y=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?y:zn(e.type,y),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(te(163))}}catch(x){wt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=rm,rm=!1,g}function Oo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&Fh(e,n,s)}r=r.next}while(r!==i)}}function Ru(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function kh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Yv(t){var e=t.alternate;e!==null&&(t.alternate=null,Yv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[ei],delete e[ea],delete e[wh],delete e[u1],delete e[c1])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Zv(t){return t.tag===5||t.tag===3||t.tag===4}function sm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Zv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function zh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Zl));else if(i!==4&&(t=t.child,t!==null))for(zh(t,e,n),t=t.sibling;t!==null;)zh(t,e,n),t=t.sibling}function Bh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(Bh(t,e,n),t=t.sibling;t!==null;)Bh(t,e,n),t=t.sibling}var Ft=null,Bn=!1;function Ii(t,e,n){for(n=n.child;n!==null;)qv(t,e,n),n=n.sibling}function qv(t,e,n){if(ri&&typeof ri.onCommitFiberUnmount=="function")try{ri.onCommitFiberUnmount(yu,n)}catch{}switch(n.tag){case 5:Xt||Ms(n,e);case 6:var i=Ft,r=Bn;Ft=null,Ii(t,e,n),Ft=i,Bn=r,Ft!==null&&(Bn?(t=Ft,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Ft.removeChild(n.stateNode));break;case 18:Ft!==null&&(Bn?(t=Ft,n=n.stateNode,t.nodeType===8?rc(t.parentNode,n):t.nodeType===1&&rc(t,n),Zo(t)):rc(Ft,n.stateNode));break;case 4:i=Ft,r=Bn,Ft=n.stateNode.containerInfo,Bn=!0,Ii(t,e,n),Ft=i,Bn=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Fh(n,e,o),r=r.next}while(r!==i)}Ii(t,e,n);break;case 1:if(!Xt&&(Ms(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){wt(n,e,a)}Ii(t,e,n);break;case 21:Ii(t,e,n);break;case 22:n.mode&1?(Xt=(i=Xt)||n.memoizedState!==null,Ii(t,e,n),Xt=i):Ii(t,e,n);break;default:Ii(t,e,n)}}function om(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new A1),e.forEach(function(i){var r=O1.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Un(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Ft=a.stateNode,Bn=!1;break e;case 3:Ft=a.stateNode.containerInfo,Bn=!0;break e;case 4:Ft=a.stateNode.containerInfo,Bn=!0;break e}a=a.return}if(Ft===null)throw Error(te(160));qv(s,o,r),Ft=null,Bn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){wt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Kv(e,t),e=e.sibling}function Kv(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Un(e,t),Kn(t),i&4){try{Oo(3,t,t.return),Ru(3,t)}catch(y){wt(t,t.return,y)}try{Oo(5,t,t.return)}catch(y){wt(t,t.return,y)}}break;case 1:Un(e,t),Kn(t),i&512&&n!==null&&Ms(n,n.return);break;case 5:if(Un(e,t),Kn(t),i&512&&n!==null&&Ms(n,n.return),t.flags&32){var r=t.stateNode;try{jo(r,"")}catch(y){wt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&x0(r,s),ch(a,o);var u=ch(a,s);for(o=0;o<l.length;o+=2){var c=l[o],f=l[o+1];c==="style"?w0(r,f):c==="dangerouslySetInnerHTML"?M0(r,f):c==="children"?jo(r,f):Xf(r,c,f,u)}switch(a){case"input":sh(r,s);break;case"textarea":y0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Cs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Cs(r,!!s.multiple,s.defaultValue,!0):Cs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ea]=s}catch(y){wt(t,t.return,y)}}break;case 6:if(Un(e,t),Kn(t),i&4){if(t.stateNode===null)throw Error(te(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){wt(t,t.return,y)}}break;case 3:if(Un(e,t),Kn(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Zo(e.containerInfo)}catch(y){wt(t,t.return,y)}break;case 4:Un(e,t),Kn(t);break;case 13:Un(e,t),Kn(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Td=Tt())),i&4&&om(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Xt=(u=Xt)||c,Un(e,t),Xt=u):Un(e,t),Kn(t),i&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(Se=t,c=t.child;c!==null;){for(f=Se=c;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:Oo(4,h,h.return);break;case 1:Ms(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(y){wt(i,n,y)}}break;case 5:Ms(h,h.return);break;case 22:if(h.memoizedState!==null){lm(f);continue}}p!==null?(p.return=h,Se=p):lm(f)}c=c.sibling}e:for(c=null,f=t;;){if(f.tag===5){if(c===null){c=f;try{r=f.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=E0("display",o))}catch(y){wt(t,t.return,y)}}}else if(f.tag===6){if(c===null)try{f.stateNode.nodeValue=u?"":f.memoizedProps}catch(y){wt(t,t.return,y)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;c===f&&(c=null),f=f.return}c===f&&(c=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:Un(e,t),Kn(t),i&4&&om(t);break;case 21:break;default:Un(e,t),Kn(t)}}function Kn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Zv(n)){var i=n;break e}n=n.return}throw Error(te(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(jo(r,""),i.flags&=-33);var s=sm(t);Bh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=sm(t);zh(t,a,o);break;default:throw Error(te(161))}}catch(l){wt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function R1(t,e,n){Se=t,Jv(t)}function Jv(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ga;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Ga;var u=Xt;if(Ga=o,(Xt=l)&&!u)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?um(r):l!==null?(l.return=o,Se=l):um(r);for(;s!==null;)Se=s,Jv(s),s=s.sibling;Se=r,Ga=a,Xt=u}am(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):am(t)}}function am(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||Ru(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:zn(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&jp(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}jp(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var f=c.dehydrated;f!==null&&Zo(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(te(163))}Xt||e.flags&512&&kh(e)}catch(h){wt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function lm(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function um(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ru(4,e)}catch(l){wt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){wt(e,r,l)}}var s=e.return;try{kh(e)}catch(l){wt(e,s,l)}break;case 5:var o=e.return;try{kh(e)}catch(l){wt(e,o,l)}}}catch(l){wt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var b1=Math.ceil,ou=Li.ReactCurrentDispatcher,Ed=Li.ReactCurrentOwner,Pn=Li.ReactCurrentBatchConfig,Qe=0,Ot=null,Ct=null,kt=0,mn=0,Es=cr(0),Pt=0,oa=null,Ur=0,bu=0,wd=0,Fo=null,on=null,Td=0,Ws=1/0,vi=null,au=!1,Hh=null,er=null,Wa=!1,Yi=null,lu=0,ko=0,Vh=null,Ll=-1,Dl=0;function Jt(){return Qe&6?Tt():Ll!==-1?Ll:Ll=Tt()}function tr(t){return t.mode&1?Qe&2&&kt!==0?kt&-kt:f1.transition!==null?(Dl===0&&(Dl=O0()),Dl):(t=ot,t!==0||(t=window.event,t=t===void 0?16:G0(t.type)),t):1}function jn(t,e,n,i){if(50<ko)throw ko=0,Vh=null,Error(te(185));ga(t,n,i),(!(Qe&2)||t!==Ot)&&(t===Ot&&(!(Qe&2)&&(bu|=n),Pt===4&&ji(t,kt)),cn(t,i),n===1&&Qe===0&&!(e.mode&1)&&(Ws=Tt()+500,Tu&&hr()))}function cn(t,e){var n=t.callbackNode;fy(t,e);var i=jl(t,t===Ot?kt:0);if(i===0)n!==null&&_p(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&_p(n),e===1)t.tag===0?h1(cm.bind(null,t)):lv(cm.bind(null,t)),a1(function(){!(Qe&6)&&hr()}),n=null;else{switch(F0(i)){case 1:n=Kf;break;case 4:n=I0;break;case 16:n=Wl;break;case 536870912:n=U0;break;default:n=Wl}n=o_(n,Qv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Qv(t,e){if(Ll=-1,Dl=0,Qe&6)throw Error(te(327));var n=t.callbackNode;if(Ds()&&t.callbackNode!==n)return null;var i=jl(t,t===Ot?kt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=uu(t,i);else{e=i;var r=Qe;Qe|=2;var s=t_();(Ot!==t||kt!==e)&&(vi=null,Ws=Tt()+500,br(t,e));do try{D1();break}catch(a){e_(t,a)}while(!0);cd(),ou.current=s,Qe=r,Ct!==null?e=0:(Ot=null,kt=0,e=Pt)}if(e!==0){if(e===2&&(r=mh(t),r!==0&&(i=r,e=Gh(t,r))),e===1)throw n=oa,br(t,0),ji(t,i),cn(t,Tt()),n;if(e===6)ji(t,i);else{if(r=t.current.alternate,!(i&30)&&!P1(r)&&(e=uu(t,i),e===2&&(s=mh(t),s!==0&&(i=s,e=Gh(t,s))),e===1))throw n=oa,br(t,0),ji(t,i),cn(t,Tt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(te(345));case 2:yr(t,on,vi);break;case 3:if(ji(t,i),(i&130023424)===i&&(e=Td+500-Tt(),10<e)){if(jl(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){Jt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Eh(yr.bind(null,t,on,vi),e);break}yr(t,on,vi);break;case 4:if(ji(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Wn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Tt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*b1(i/1960))-i,10<i){t.timeoutHandle=Eh(yr.bind(null,t,on,vi),i);break}yr(t,on,vi);break;case 5:yr(t,on,vi);break;default:throw Error(te(329))}}}return cn(t,Tt()),t.callbackNode===n?Qv.bind(null,t):null}function Gh(t,e){var n=Fo;return t.current.memoizedState.isDehydrated&&(br(t,e).flags|=256),t=uu(t,e),t!==2&&(e=on,on=n,e!==null&&Wh(e)),t}function Wh(t){on===null?on=t:on.push.apply(on,t)}function P1(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Yn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ji(t,e){for(e&=~wd,e&=~bu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Wn(e),i=1<<n;t[n]=-1,e&=~i}}function cm(t){if(Qe&6)throw Error(te(327));Ds();var e=jl(t,0);if(!(e&1))return cn(t,Tt()),null;var n=uu(t,e);if(t.tag!==0&&n===2){var i=mh(t);i!==0&&(e=i,n=Gh(t,i))}if(n===1)throw n=oa,br(t,0),ji(t,e),cn(t,Tt()),n;if(n===6)throw Error(te(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,yr(t,on,vi),cn(t,Tt()),null}function Ad(t,e){var n=Qe;Qe|=1;try{return t(e)}finally{Qe=n,Qe===0&&(Ws=Tt()+500,Tu&&hr())}}function Or(t){Yi!==null&&Yi.tag===0&&!(Qe&6)&&Ds();var e=Qe;Qe|=1;var n=Pn.transition,i=ot;try{if(Pn.transition=null,ot=1,t)return t()}finally{ot=i,Pn.transition=n,Qe=e,!(Qe&6)&&hr()}}function Cd(){mn=Es.current,gt(Es)}function br(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,o1(n)),Ct!==null)for(n=Ct.return;n!==null;){var i=n;switch(ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ql();break;case 3:Vs(),gt(ln),gt($t),gd();break;case 5:md(i);break;case 4:Vs();break;case 13:gt(xt);break;case 19:gt(xt);break;case 10:hd(i.type._context);break;case 22:case 23:Cd()}n=n.return}if(Ot=t,Ct=t=nr(t.current,null),kt=mn=e,Pt=0,oa=null,wd=bu=Ur=0,on=Fo=null,Tr!==null){for(e=0;e<Tr.length;e++)if(n=Tr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}Tr=null}return t}function e_(t,e){do{var n=Ct;try{if(cd(),Rl.current=su,ru){for(var i=St.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}ru=!1}if(Ir=0,It=bt=St=null,Uo=!1,ia=0,Ed.current=null,n===null||n.return===null){Pt=1,oa=e,Ct=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=kt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,f=c.tag;if(!(c.mode&1)&&(f===0||f===11||f===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Kp(o);if(p!==null){p.flags&=-257,Jp(p,o,a,s,e),p.mode&1&&qp(s,u,e),e=p,l=u;var g=e.updateQueue;if(g===null){var y=new Set;y.add(l),e.updateQueue=y}else g.add(l);break e}else{if(!(e&1)){qp(s,u,e),Rd();break e}l=Error(te(426))}}else if(_t&&a.mode&1){var m=Kp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Jp(m,o,a,s,e),ld(Gs(l,a));break e}}s=l=Gs(l,a),Pt!==4&&(Pt=2),Fo===null?Fo=[s]:Fo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Fv(s,l,e);Wp(s,d);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(er===null||!er.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=kv(s,a,e);Wp(s,x);break e}}s=s.return}while(s!==null)}i_(n)}catch(b){e=b,Ct===n&&n!==null&&(Ct=n=n.return);continue}break}while(!0)}function t_(){var t=ou.current;return ou.current=su,t===null?su:t}function Rd(){(Pt===0||Pt===3||Pt===2)&&(Pt=4),Ot===null||!(Ur&268435455)&&!(bu&268435455)||ji(Ot,kt)}function uu(t,e){var n=Qe;Qe|=2;var i=t_();(Ot!==t||kt!==e)&&(vi=null,br(t,e));do try{L1();break}catch(r){e_(t,r)}while(!0);if(cd(),Qe=n,ou.current=i,Ct!==null)throw Error(te(261));return Ot=null,kt=0,Pt}function L1(){for(;Ct!==null;)n_(Ct)}function D1(){for(;Ct!==null&&!iy();)n_(Ct)}function n_(t){var e=s_(t.alternate,t,mn);t.memoizedProps=t.pendingProps,e===null?i_(t):Ct=e,Ed.current=null}function i_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=T1(n,e),n!==null){n.flags&=32767,Ct=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Pt=6,Ct=null;return}}else if(n=w1(n,e,mn),n!==null){Ct=n;return}if(e=e.sibling,e!==null){Ct=e;return}Ct=e=t}while(e!==null);Pt===0&&(Pt=5)}function yr(t,e,n){var i=ot,r=Pn.transition;try{Pn.transition=null,ot=1,N1(t,e,n,i)}finally{Pn.transition=r,ot=i}return null}function N1(t,e,n,i){do Ds();while(Yi!==null);if(Qe&6)throw Error(te(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(te(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(dy(t,s),t===Ot&&(Ct=Ot=null,kt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Wa||(Wa=!0,o_(Wl,function(){return Ds(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Pn.transition,Pn.transition=null;var o=ot;ot=1;var a=Qe;Qe|=4,Ed.current=null,C1(t,n),Kv(n,t),Qy(Sh),Xl=!!yh,Sh=yh=null,t.current=n,R1(n),ry(),Qe=a,ot=o,Pn.transition=s}else t.current=n;if(Wa&&(Wa=!1,Yi=t,lu=r),s=t.pendingLanes,s===0&&(er=null),ay(n.stateNode),cn(t,Tt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(au)throw au=!1,t=Hh,Hh=null,t;return lu&1&&t.tag!==0&&Ds(),s=t.pendingLanes,s&1?t===Vh?ko++:(ko=0,Vh=t):ko=0,hr(),null}function Ds(){if(Yi!==null){var t=F0(lu),e=Pn.transition,n=ot;try{if(Pn.transition=null,ot=16>t?16:t,Yi===null)var i=!1;else{if(t=Yi,Yi=null,lu=0,Qe&6)throw Error(te(331));var r=Qe;for(Qe|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(Se=u;Se!==null;){var c=Se;switch(c.tag){case 0:case 11:case 15:Oo(8,c,s)}var f=c.child;if(f!==null)f.return=c,Se=f;else for(;Se!==null;){c=Se;var h=c.sibling,p=c.return;if(Yv(c),c===u){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var g=s.alternate;if(g!==null){var y=g.child;if(y!==null){g.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Se=_;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Ru(9,a)}}catch(b){wt(a,a.return,b)}if(a===o){Se=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,Se=x;break e}Se=a.return}}if(Qe=r,hr(),ri&&typeof ri.onPostCommitFiberRoot=="function")try{ri.onPostCommitFiberRoot(yu,t)}catch{}i=!0}return i}finally{ot=n,Pn.transition=e}}return!1}function hm(t,e,n){e=Gs(n,e),e=Fv(t,e,1),t=Qi(t,e,1),e=Jt(),t!==null&&(ga(t,1,e),cn(t,e))}function wt(t,e,n){if(t.tag===3)hm(t,t,n);else for(;e!==null;){if(e.tag===3){hm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(er===null||!er.has(i))){t=Gs(n,t),t=kv(e,t,1),e=Qi(e,t,1),t=Jt(),e!==null&&(ga(e,1,t),cn(e,t));break}}e=e.return}}function I1(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=Jt(),t.pingedLanes|=t.suspendedLanes&n,Ot===t&&(kt&n)===n&&(Pt===4||Pt===3&&(kt&130023424)===kt&&500>Tt()-Td?br(t,0):wd|=n),cn(t,e)}function r_(t,e){e===0&&(t.mode&1?(e=Ia,Ia<<=1,!(Ia&130023424)&&(Ia=4194304)):e=1);var n=Jt();t=Ci(t,e),t!==null&&(ga(t,e,n),cn(t,n))}function U1(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),r_(t,n)}function O1(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(te(314))}i!==null&&i.delete(e),r_(t,n)}var s_;s_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||ln.current)an=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return an=!1,E1(t,e,n);an=!!(t.flags&131072)}else an=!1,_t&&e.flags&1048576&&uv(e,Ql,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Pl(t,e),t=e.pendingProps;var r=zs(e,$t.current);Ls(e,n),r=_d(null,e,i,t,r,n);var s=xd();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,un(i)?(s=!0,Kl(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,dd(e),r.updater=Cu,e.stateNode=r,r._reactInternals=e,Ph(e,i,t,n),e=Nh(null,e,i,!0,s,n)):(e.tag=0,_t&&s&&od(e),Kt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Pl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=k1(i),t=zn(i,t),r){case 0:e=Dh(null,e,i,t,n);break e;case 1:e=tm(null,e,i,t,n);break e;case 11:e=Qp(null,e,i,t,n);break e;case 14:e=em(null,e,i,zn(i.type,t),n);break e}throw Error(te(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Dh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),tm(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(te(387));i=e.pendingProps,s=e.memoizedState,r=s.element,mv(t,e),nu(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Gs(Error(te(423)),e),e=nm(t,e,i,n,r);break e}else if(i!==r){r=Gs(Error(te(424)),e),e=nm(t,e,i,n,r);break e}else for(vn=Ji(e.stateNode.containerInfo.firstChild),_n=e,_t=!0,Hn=null,n=dv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Bs(),i===r){e=Ri(t,e,n);break e}Kt(t,e,i,n)}e=e.child}return e;case 5:return gv(e),t===null&&Ch(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Mh(i,r)?o=null:s!==null&&Mh(i,s)&&(e.flags|=32),Hv(t,e),Kt(t,e,o,n),e.child;case 6:return t===null&&Ch(e),null;case 13:return Gv(t,e,n);case 4:return pd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Hs(e,null,i,n):Kt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Qp(t,e,i,r,n);case 7:return Kt(t,e,e.pendingProps,n),e.child;case 8:return Kt(t,e,e.pendingProps.children,n),e.child;case 12:return Kt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ft(eu,i._currentValue),i._currentValue=o,s!==null)if(Yn(s.value,o)){if(s.children===r.children&&!ln.current){e=Ri(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ei(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Rh(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(te(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Rh(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Kt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ls(e,n),r=Ln(r),i=i(r),e.flags|=1,Kt(t,e,i,n),e.child;case 14:return i=e.type,r=zn(i,e.pendingProps),r=zn(i.type,r),em(t,e,i,r,n);case 15:return zv(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:zn(i,r),Pl(t,e),e.tag=1,un(i)?(t=!0,Kl(e)):t=!1,Ls(e,n),Ov(e,i,r),Ph(e,i,r,n),Nh(null,e,i,!0,t,n);case 19:return Wv(t,e,n);case 22:return Bv(t,e,n)}throw Error(te(156,e.tag))};function o_(t,e){return N0(t,e)}function F1(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Rn(t,e,n,i){return new F1(t,e,n,i)}function bd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function k1(t){if(typeof t=="function")return bd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Yf)return 11;if(t===Zf)return 14}return 2}function nr(t,e){var n=t.alternate;return n===null?(n=Rn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Nl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")bd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case ds:return Pr(n.children,r,s,e);case $f:o=8,r|=8;break;case eh:return t=Rn(12,n,e,r|2),t.elementType=eh,t.lanes=s,t;case th:return t=Rn(13,n,e,r),t.elementType=th,t.lanes=s,t;case nh:return t=Rn(19,n,e,r),t.elementType=nh,t.lanes=s,t;case g0:return Pu(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case p0:o=10;break e;case m0:o=9;break e;case Yf:o=11;break e;case Zf:o=14;break e;case Hi:o=16,i=null;break e}throw Error(te(130,t==null?t:typeof t,""))}return e=Rn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Pr(t,e,n,i){return t=Rn(7,t,i,e),t.lanes=n,t}function Pu(t,e,n,i){return t=Rn(22,t,i,e),t.elementType=g0,t.lanes=n,t.stateNode={isHidden:!1},t}function fc(t,e,n){return t=Rn(6,t,null,e),t.lanes=n,t}function dc(t,e,n){return e=Rn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function z1(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=$u(0),this.expirationTimes=$u(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=$u(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Pd(t,e,n,i,r,s,o,a,l){return t=new z1(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Rn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},dd(s),t}function B1(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:fs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function a_(t){if(!t)return or;t=t._reactInternals;e:{if(Vr(t)!==t||t.tag!==1)throw Error(te(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(un(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(te(171))}if(t.tag===1){var n=t.type;if(un(n))return av(t,n,e)}return e}function l_(t,e,n,i,r,s,o,a,l){return t=Pd(n,i,!0,t,r,s,o,a,l),t.context=a_(null),n=t.current,i=Jt(),r=tr(n),s=Ei(i,r),s.callback=e??null,Qi(n,s,r),t.current.lanes=r,ga(t,r,i),cn(t,i),t}function Lu(t,e,n,i){var r=e.current,s=Jt(),o=tr(r);return n=a_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ei(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Qi(r,e,o),t!==null&&(jn(t,r,o,s),Cl(t,r,o)),o}function cu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function fm(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ld(t,e){fm(t,e),(t=t.alternate)&&fm(t,e)}function H1(){return null}var u_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Dd(t){this._internalRoot=t}Du.prototype.render=Dd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(te(409));Lu(t,e,null,null)};Du.prototype.unmount=Dd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Or(function(){Lu(null,t,null,null)}),e[Ai]=null}};function Du(t){this._internalRoot=t}Du.prototype.unstable_scheduleHydration=function(t){if(t){var e=B0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Wi.length&&e!==0&&e<Wi[n].priority;n++);Wi.splice(n,0,t),n===0&&V0(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Nu(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function dm(){}function V1(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=cu(o);s.call(u)}}var o=l_(e,i,t,0,null,!1,!1,"",dm);return t._reactRootContainer=o,t[Ai]=o.current,Jo(t.nodeType===8?t.parentNode:t),Or(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=cu(l);a.call(u)}}var l=Pd(t,0,!1,null,null,!1,!1,"",dm);return t._reactRootContainer=l,t[Ai]=l.current,Jo(t.nodeType===8?t.parentNode:t),Or(function(){Lu(e,l,n,i)}),l}function Iu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=cu(o);a.call(l)}}Lu(e,o,t,r)}else o=V1(n,e,t,r,i);return cu(o)}k0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ao(e.pendingLanes);n!==0&&(Jf(e,n|1),cn(e,Tt()),!(Qe&6)&&(Ws=Tt()+500,hr()))}break;case 13:Or(function(){var i=Ci(t,1);if(i!==null){var r=Jt();jn(i,t,1,r)}}),Ld(t,1)}};Qf=function(t){if(t.tag===13){var e=Ci(t,134217728);if(e!==null){var n=Jt();jn(e,t,134217728,n)}Ld(t,134217728)}};z0=function(t){if(t.tag===13){var e=tr(t),n=Ci(t,e);if(n!==null){var i=Jt();jn(n,t,e,i)}Ld(t,e)}};B0=function(){return ot};H0=function(t,e){var n=ot;try{return ot=t,e()}finally{ot=n}};fh=function(t,e,n){switch(e){case"input":if(sh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=wu(i);if(!r)throw Error(te(90));_0(i),sh(i,r)}}}break;case"textarea":y0(t,n);break;case"select":e=n.value,e!=null&&Cs(t,!!n.multiple,e,!1)}};C0=Ad;R0=Or;var G1={usingClientEntryPoint:!1,Events:[_a,vs,wu,T0,A0,Ad]},ho={findFiberByHostInstance:wr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},W1={bundleType:ho.bundleType,version:ho.version,rendererPackageName:ho.rendererPackageName,rendererConfig:ho.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Li.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=L0(t),t===null?null:t.stateNode},findFiberByHostInstance:ho.findFiberByHostInstance||H1,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ja=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ja.isDisabled&&ja.supportsFiber)try{yu=ja.inject(W1),ri=ja}catch{}}yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G1;yn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(te(200));return B1(t,e,null,n)};yn.createRoot=function(t,e){if(!Nd(t))throw Error(te(299));var n=!1,i="",r=u_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Pd(t,1,!1,null,null,n,!1,i,r),t[Ai]=e.current,Jo(t.nodeType===8?t.parentNode:t),new Dd(e)};yn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(te(188)):(t=Object.keys(t).join(","),Error(te(268,t)));return t=L0(e),t=t===null?null:t.stateNode,t};yn.flushSync=function(t){return Or(t)};yn.hydrate=function(t,e,n){if(!Nu(e))throw Error(te(200));return Iu(null,t,e,!0,n)};yn.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(te(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=u_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=l_(e,null,t,1,n??null,r,!1,s,o),t[Ai]=e.current,Jo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Du(e)};yn.render=function(t,e,n){if(!Nu(e))throw Error(te(200));return Iu(null,t,e,!1,n)};yn.unmountComponentAtNode=function(t){if(!Nu(t))throw Error(te(40));return t._reactRootContainer?(Or(function(){Iu(null,null,t,!1,function(){t._reactRootContainer=null,t[Ai]=null})}),!0):!1};yn.unstable_batchedUpdates=Ad;yn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Nu(n))throw Error(te(200));if(t==null||t._reactInternals===void 0)throw Error(te(38));return Iu(t,e,n,!1,i)};yn.version="18.3.1-next-f1338f8080-20240426";function c_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c_)}catch(t){console.error(t)}}c_(),c0.exports=yn;var j1=c0.exports,pm=j1;Jc.createRoot=pm.createRoot,Jc.hydrateRoot=pm.hydrateRoot;const X1=(...t)=>{console!=null&&console.warn&&(Lr(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},mm={},jh=(...t)=>{Lr(t[0])&&mm[t[0]]||(Lr(t[0])&&(mm[t[0]]=new Date),X1(...t))},h_=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},gm=(t,e,n)=>{t.loadNamespaces(e,h_(t,n))},vm=(t,e,n,i)=>{Lr(n)&&(n=[n]),n.forEach(r=>{t.options.ns.indexOf(r)<0&&t.options.ns.push(r)}),t.loadLanguages(e,h_(t,i))},$1=(t,e,n={})=>!e.languages||!e.languages.length?(jh("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,r)=>{var s;if(((s=n.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,t))return!1}}),Lr=t=>typeof t=="string",Y1=t=>typeof t=="object"&&t!==null,Z1=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,q1={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},K1=t=>q1[t],J1=t=>t.replace(Z1,K1);let Xh={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:J1};const Q1=(t={})=>{Xh={...Xh,...t}},eS=()=>Xh;let f_;const tS=t=>{f_=t},nS=()=>f_,iS={type:"3rdParty",init(t){Q1(t.options.react),tS(t)}},rS=Ye.createContext();class sS{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const oS=(t,e)=>{const n=Ye.useRef();return Ye.useEffect(()=>{n.current=t},[t,e]),n.current},d_=(t,e,n,i)=>t.getFixedT(e,n,i),aS=(t,e,n,i)=>Ye.useCallback(d_(t,e,n,i),[t,e,n,i]),ya=(t,e={})=>{var x,b,A,T;const{i18n:n}=e,{i18n:i,defaultNS:r}=Ye.useContext(rS)||{},s=n||i||nS();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new sS),!s){jh("You will need to pass in an i18next instance by using initReactI18next");const R=(S,L)=>Lr(L)?L:Y1(L)&&Lr(L.defaultValue)?L.defaultValue:Array.isArray(S)?S[S.length-1]:S,w=[R,{},!1];return w.t=R,w.i18n={},w.ready=!1,w}(x=s.options.react)!=null&&x.wait&&jh("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...eS(),...s.options.react,...e},{useSuspense:a,keyPrefix:l}=o;let u=r||((b=s.options)==null?void 0:b.defaultNS);u=Lr(u)?[u]:u||["translation"],(T=(A=s.reportNamespaces).addUsedNamespaces)==null||T.call(A,u);const c=(s.isInitialized||s.initializedStoreOnce)&&u.every(R=>$1(R,s,o)),f=aS(s,e.lng||null,o.nsMode==="fallback"?u:u[0],l),h=()=>f,p=()=>d_(s,e.lng||null,o.nsMode==="fallback"?u:u[0],l),[g,y]=Ye.useState(h);let m=u.join();e.lng&&(m=`${e.lng}${m}`);const d=oS(m),v=Ye.useRef(!0);Ye.useEffect(()=>{const{bindI18n:R,bindI18nStore:w}=o;v.current=!0,!c&&!a&&(e.lng?vm(s,e.lng,u,()=>{v.current&&y(p)}):gm(s,u,()=>{v.current&&y(p)})),c&&d&&d!==m&&v.current&&y(p);const S=()=>{v.current&&y(p)};return R&&(s==null||s.on(R,S)),w&&(s==null||s.store.on(w,S)),()=>{v.current=!1,s&&(R==null||R.split(" ").forEach(L=>s.off(L,S))),w&&s&&w.split(" ").forEach(L=>s.store.off(L,S))}},[s,m]),Ye.useEffect(()=>{v.current&&c&&y(h)},[s,l,c]);const _=[g,s,c];if(_.t=g,_.i18n=s,_.ready=c,c||!c&&!a)return _;throw new Promise(R=>{e.lng?vm(s,e.lng,u,()=>R()):gm(s,u,()=>R())})};var p_={exports:{}},lS="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",uS=lS,cS=uS;function m_(){}function g_(){}g_.resetWarningCache=m_;var hS=function(){function t(i,r,s,o,a,l){if(l!==cS){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:g_,resetWarningCache:m_};return n.PropTypes=n,n};p_.exports=hS();var fS=p_.exports;const dS=Jg(fS);function v_({sections:t}){const[e,n]=Ye.useState(0);return Ye.useEffect(()=>{const i=document.querySelectorAll(".section"),r={root:null,rootMargin:"0px",threshold:.5},s=a=>{a.forEach(l=>{if(l.isIntersecting){const u=Array.from(i).indexOf(l.target);n(u)}})},o=new IntersectionObserver(s,r);return i.forEach(a=>o.observe(a)),()=>{i.forEach(a=>o.unobserve(a))}},[]),ae.jsx("div",{className:"fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2",children:t.map((i,r)=>ae.jsx("div",{className:`w-2 h-2 md:w-4 md:h-4 rounded-full transition ease-in-out duration-500 ${r===e?"bg-primary":"border-2 border-primary"}`},r))})}v_.propTypes={sections:dS.array.isRequired};const pS=()=>{const{i18n:t}=ya(),e=n=>{t.changeLanguage(n).then(i=>null),localStorage.setItem("language",n)};return Ye.useEffect(()=>{const n=document.getElementById("toggleSwitch"),i=document.getElementById("languageText"),r=localStorage.getItem("language")||"fr";if(r==="en"?(n.classList.remove("french"),n.classList.add("english"),i.innerText="EN"):(n.classList.remove("english"),n.classList.add("french"),i.innerText="FR"),e(r),n)return n.addEventListener("click",function(){n.classList.contains("french")?(e("en"),n.classList.remove("french"),n.classList.add("english"),i.innerText="EN"):(e("fr"),n.classList.remove("english"),n.classList.add("french"),i.innerText="FR")}),()=>{n.removeEventListener("click",function(){})}},[]),ae.jsx("div",{className:"toggle-switch french cursor-pointer ml-4 md:ml-8",id:"toggleSwitch",children:ae.jsx("p",{id:"languageText",className:"text-lg text-primary hover:text-primary transition ease-in duration-50 cursor-hover",children:"FR"})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Id="170",Ns={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ws={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},mS=0,_m=1,gS=2,__=1,vS=2,gi=3,ar=0,hn=1,ti=2,ir=0,Is=1,xm=2,ym=3,Sm=4,_S=5,Mr=100,xS=101,yS=102,SS=103,MS=104,ES=200,wS=201,TS=202,AS=203,$h=204,Yh=205,CS=206,RS=207,bS=208,PS=209,LS=210,DS=211,NS=212,IS=213,US=214,Zh=0,qh=1,Kh=2,js=3,Jh=4,Qh=5,ef=6,tf=7,x_=0,OS=1,FS=2,rr=0,kS=1,zS=2,BS=3,HS=4,VS=5,GS=6,WS=7,y_=300,Xs=301,$s=302,nf=303,rf=304,Uu=306,sf=1e3,Cr=1001,of=1002,Xn=1003,jS=1004,Xa=1005,ni=1006,pc=1007,Rr=1008,bi=1009,S_=1010,M_=1011,aa=1012,Ud=1013,Fr=1014,Si=1015,Sa=1016,Od=1017,Fd=1018,Ys=1020,E_=35902,w_=1021,T_=1022,Gn=1023,A_=1024,C_=1025,Us=1026,Zs=1027,R_=1028,kd=1029,b_=1030,zd=1031,Bd=1033,Il=33776,Ul=33777,Ol=33778,Fl=33779,af=35840,lf=35841,uf=35842,cf=35843,hf=36196,ff=37492,df=37496,pf=37808,mf=37809,gf=37810,vf=37811,_f=37812,xf=37813,yf=37814,Sf=37815,Mf=37816,Ef=37817,wf=37818,Tf=37819,Af=37820,Cf=37821,kl=36492,Rf=36494,bf=36495,P_=36283,Pf=36284,Lf=36285,Df=36286,XS=3200,$S=3201,YS=0,ZS=1,Xi="",wn="srgb",eo="srgb-linear",Ou="linear",at="srgb",Xr=7680,Mm=519,qS=512,KS=513,JS=514,L_=515,QS=516,eM=517,tM=518,nM=519,Nf=35044,Em="300 es",Mi=2e3,hu=2001;class Gr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let wm=1234567;const zo=Math.PI/180,la=180/Math.PI;function oi(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[t&255]+Wt[t>>8&255]+Wt[t>>16&255]+Wt[t>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[n&63|128]+Wt[n>>8&255]+"-"+Wt[n>>16&255]+Wt[n>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function Ut(t,e,n){return Math.max(e,Math.min(n,t))}function Hd(t,e){return(t%e+e)%e}function iM(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function rM(t,e,n){return t!==e?(n-t)/(e-t):0}function Bo(t,e,n){return(1-n)*t+n*e}function sM(t,e,n,i){return Bo(t,e,1-Math.exp(-n*i))}function oM(t,e=1){return e-Math.abs(Hd(t,e*2)-e)}function aM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function lM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function uM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function cM(t,e){return t+Math.random()*(e-t)}function hM(t){return t*(.5-Math.random())}function fM(t){t!==void 0&&(wm=t);let e=wm+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dM(t){return t*zo}function pM(t){return t*la}function mM(t){return(t&t-1)===0&&t!==0}function gM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function vM(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function _M(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),u=s((e+i)/2),c=o((e+i)/2),f=s((e-i)/2),h=o((e-i)/2),p=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*c,l*f,l*h,a*u);break;case"YZY":t.set(l*h,a*c,l*f,a*u);break;case"ZXZ":t.set(l*f,l*h,a*c,a*u);break;case"XZX":t.set(a*c,l*g,l*p,a*u);break;case"YXY":t.set(l*p,a*c,l*g,a*u);break;case"ZYZ":t.set(l*g,l*p,a*c,a*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function Vn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function st(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const xM={DEG2RAD:zo,RAD2DEG:la,generateUUID:oi,clamp:Ut,euclideanModulo:Hd,mapLinear:iM,inverseLerp:rM,lerp:Bo,damp:sM,pingpong:oM,smoothstep:aM,smootherstep:lM,randInt:uM,randFloat:cM,randFloatSpread:hM,seededRandom:fM,degToRad:dM,radToDeg:pM,isPowerOfTwo:mM,ceilPowerOfTwo:gM,floorPowerOfTwo:vM,setQuaternionFromProperEuler:_M,normalize:st,denormalize:Vn};class ie{constructor(e=0,n=0){ie.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ge{constructor(e,n,i,r,s,o,a,l,u){Ge.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u)}set(e,n,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=n,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],f=i[7],h=i[2],p=i[5],g=i[8],y=r[0],m=r[3],d=r[6],v=r[1],_=r[4],x=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*y+a*v+l*b,s[3]=o*m+a*_+l*A,s[6]=o*d+a*x+l*T,s[1]=u*y+c*v+f*b,s[4]=u*m+c*_+f*A,s[7]=u*d+c*x+f*T,s[2]=h*y+p*v+g*b,s[5]=h*m+p*_+g*A,s[8]=h*d+p*x+g*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return n*o*c-n*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=c*o-a*u,h=a*l-c*s,p=u*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/g;return e[0]=f*y,e[1]=(r*u-c*i)*y,e[2]=(a*i-r*o)*y,e[3]=h*y,e[4]=(c*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-u*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(mc.makeScale(e,n)),this}rotate(e){return this.premultiply(mc.makeRotation(-e)),this}translate(e,n){return this.premultiply(mc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const mc=new Ge;function D_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function ua(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function yM(){const t=ua("canvas");return t.style.display="block",t}const Tm={};function Ro(t){t in Tm||(Tm[t]=!0,console.warn(t))}function SM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function MM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function EM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Je={enabled:!0,workingColorSpace:eo,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===at&&(t.r=wi(t.r),t.g=wi(t.g),t.b=wi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===at&&(t.r=Os(t.r),t.g=Os(t.g),t.b=Os(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Xi?Ou:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function wi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Os(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Am=[.64,.33,.3,.6,.15,.06],Cm=[.2126,.7152,.0722],Rm=[.3127,.329],bm=new Ge().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Pm=new Ge().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je.define({[eo]:{primaries:Am,whitePoint:Rm,transfer:Ou,toXYZ:bm,fromXYZ:Pm,luminanceCoefficients:Cm,workingColorSpaceConfig:{unpackColorSpace:wn},outputColorSpaceConfig:{drawingBufferColorSpace:wn}},[wn]:{primaries:Am,whitePoint:Rm,transfer:at,toXYZ:bm,fromXYZ:Pm,luminanceCoefficients:Cm,outputColorSpaceConfig:{drawingBufferColorSpace:wn}}});let $r;class wM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{$r===void 0&&($r=ua("canvas")),$r.width=e.width,$r.height=e.height;const i=$r.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=$r}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=ua("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=wi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(wi(n[i]/255)*255):n[i]=wi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let TM=0;class N_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:TM++}),this.uuid=oi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(gc(r[o].image)):s.push(gc(r[o]))}else s=gc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function gc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?wM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let AM=0;class Qt extends Gr{constructor(e=Qt.DEFAULT_IMAGE,n=Qt.DEFAULT_MAPPING,i=Cr,r=Cr,s=ni,o=Rr,a=Gn,l=bi,u=Qt.DEFAULT_ANISOTROPY,c=Xi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=oi(),this.name="",this.source=new N_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ge,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==y_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case Cr:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case Cr:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=y_;Qt.DEFAULT_ANISOTROPY=1;class ut{constructor(e=0,n=0,i=0,r=1){ut.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,u=l[0],c=l[4],f=l[8],h=l[1],p=l[5],g=l[9],y=l[2],m=l[6],d=l[10];if(Math.abs(c-h)<.01&&Math.abs(f-y)<.01&&Math.abs(g-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(f+y)<.1&&Math.abs(g+m)<.1&&Math.abs(u+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(u+1)/2,x=(p+1)/2,b=(d+1)/2,A=(c+h)/4,T=(f+y)/4,R=(g+m)/4;return _>x&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=T/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-y)*(f-y)+(h-c)*(h-c));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-y)/v,this.z=(h-c)/v,this.w=Math.acos((u+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class CM extends Gr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ut(0,0,e,n),this.scissorTest=!1,this.viewport=new ut(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ni,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Qt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new N_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class kr extends CM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class I_ extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class RM extends Qt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Xn,this.minFilter=Xn,this.wrapR=Cr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class zr{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=y;return}if(f!==y||l!==h||u!==p||c!==g){let m=1-a;const d=l*h+u*p+c*g+f*y,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const b=Math.sqrt(_),A=Math.atan2(b,d*v);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*v;if(l=l*m+h*x,u=u*m+p*x,c=c*m+g*x,f=f*m+y*x,m===1-a){const b=1/Math.sqrt(l*l+u*u+c*c+f*f);l*=b,u*=b,c*=b,f*=b}}e[n]=l,e[n+1]=u,e[n+2]=c,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+c*f+l*p-u*h,e[n+1]=l*g+c*h+u*f-a*p,e[n+2]=u*g+c*p+a*h-l*f,e[n+3]=c*g-a*f-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"YXZ":this._x=h*c*f+u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"ZXY":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f-h*p*g;break;case"ZYX":this._x=h*c*f-u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f+h*p*g;break;case"YZX":this._x=h*c*f+u*p*g,this._y=u*p*f+h*c*g,this._z=u*c*g-h*p*f,this._w=u*c*f-h*p*g;break;case"XZY":this._x=h*c*f-u*p*g,this._y=u*p*f-h*c*g,this._z=u*c*g+h*p*f,this._w=u*c*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],u=n[2],c=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ut(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,u=n._z,c=n._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),f=Math.sin((1-n)*c)/u,h=Math.sin(n*c)/u;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Lm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Lm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=2*(o*r-a*i),c=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*u+o*f-a*c,this.y=i+l*c+a*u-s*f,this.z=r+l*f+s*c-o*u,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return vc.copy(this).projectOnVector(e),this.sub(vc)}reflect(e){return this.sub(vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ut(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const vc=new N,Lm=new zr;class Ma{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(On.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(On.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=On.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,On):On.fromBufferAttribute(s,o),On.applyMatrix4(e.matrixWorld),this.expandByPoint(On);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),$a.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),$a.copy(i.boundingBox)),$a.applyMatrix4(e.matrixWorld),this.union($a)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,On),On.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Ya.subVectors(this.max,fo),Yr.subVectors(e.a,fo),Zr.subVectors(e.b,fo),qr.subVectors(e.c,fo),Ui.subVectors(Zr,Yr),Oi.subVectors(qr,Zr),dr.subVectors(Yr,qr);let n=[0,-Ui.z,Ui.y,0,-Oi.z,Oi.y,0,-dr.z,dr.y,Ui.z,0,-Ui.x,Oi.z,0,-Oi.x,dr.z,0,-dr.x,-Ui.y,Ui.x,0,-Oi.y,Oi.x,0,-dr.y,dr.x,0];return!_c(n,Yr,Zr,qr,Ya)||(n=[1,0,0,0,1,0,0,0,1],!_c(n,Yr,Zr,qr,Ya))?!1:(Za.crossVectors(Ui,Oi),n=[Za.x,Za.y,Za.z],_c(n,Yr,Zr,qr,Ya))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,On).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(On).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ci[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ci[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ci[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ci[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ci[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ci[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ci[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ci[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ci),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const ci=[new N,new N,new N,new N,new N,new N,new N,new N],On=new N,$a=new Ma,Yr=new N,Zr=new N,qr=new N,Ui=new N,Oi=new N,dr=new N,fo=new N,Ya=new N,Za=new N,pr=new N;function _c(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){pr.fromArray(t,s);const a=r.x*Math.abs(pr.x)+r.y*Math.abs(pr.y)+r.z*Math.abs(pr.z),l=e.dot(pr),u=n.dot(pr),c=i.dot(pr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const bM=new Ma,po=new N,xc=new N;class Vd{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):bM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;po.subVectors(e,this.center);const n=po.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(po,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(po.copy(e.center).add(xc)),this.expandByPoint(po.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const hi=new N,yc=new N,qa=new N,Fi=new N,Sc=new N,Ka=new N,Mc=new N;class U_{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,hi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=hi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(hi.copy(this.origin).addScaledVector(this.direction,n),hi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){yc.copy(e).add(n).multiplyScalar(.5),qa.copy(n).sub(e).normalize(),Fi.copy(this.origin).sub(yc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(qa),a=Fi.dot(this.direction),l=-Fi.dot(qa),u=Fi.lengthSq(),c=Math.abs(1-o*o);let f,h,p,g;if(c>0)if(f=o*l-a,h=o*a-l,g=s*c,f>=0)if(h>=-g)if(h<=g){const y=1/c;f*=y,h*=y,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+u}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+u);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(yc).addScaledVector(qa,h),p}intersectSphere(e,n){hi.subVectors(e.center,this.origin);const i=hi.dot(this.direction),r=hi.dot(hi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,f=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,hi)!==null}intersectTriangle(e,n,i,r,s){Sc.subVectors(n,e),Ka.subVectors(i,e),Mc.crossVectors(Sc,Ka);let o=this.direction.dot(Mc),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Fi.subVectors(this.origin,e);const l=a*this.direction.dot(Ka.crossVectors(Fi,Ka));if(l<0)return null;const u=a*this.direction.dot(Sc.cross(Fi));if(u<0||l+u>o)return null;const c=-a*Fi.dot(Mc);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class vt{constructor(e,n,i,r,s,o,a,l,u,c,f,h,p,g,y,m){vt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,u,c,f,h,p,g,y,m)}set(e,n,i,r,s,o,a,l,u,c,f,h,p,g,y,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=u,d[6]=c,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=y,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new vt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/Kr.setFromMatrixColumn(e,0).length(),s=1/Kr.setFromMatrixColumn(e,1).length(),o=1/Kr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*f,g=a*c,y=a*f;n[0]=l*c,n[4]=-l*f,n[8]=u,n[1]=p+g*u,n[5]=h-y*u,n[9]=-a*l,n[2]=y-h*u,n[6]=g+p*u,n[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h+y*a,n[4]=g*a-p,n[8]=o*u,n[1]=o*f,n[5]=o*c,n[9]=-a,n[2]=p*a-g,n[6]=y+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*f,g=u*c,y=u*f;n[0]=h-y*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*c,n[9]=y-h*a,n[2]=-o*u,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*f,g=a*c,y=a*f;n[0]=l*c,n[4]=g*u-p,n[8]=h*u+y,n[1]=l*f,n[5]=y*u+h,n[9]=p*u-g,n[2]=-u,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=y-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*c,n[9]=-a*c,n[2]=-u*c,n[6]=p*f+g,n[10]=h-y*f}else if(e.order==="XZY"){const h=o*l,p=o*u,g=a*l,y=a*u;n[0]=l*c,n[4]=-f,n[8]=u*c,n[1]=h*f+y,n[5]=o*c,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*c,n[10]=y*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(PM,e,LM)}lookAt(e,n,i){const r=this.elements;return dn.subVectors(e,n),dn.lengthSq()===0&&(dn.z=1),dn.normalize(),ki.crossVectors(i,dn),ki.lengthSq()===0&&(Math.abs(i.z)===1?dn.x+=1e-4:dn.z+=1e-4,dn.normalize(),ki.crossVectors(i,dn)),ki.normalize(),Ja.crossVectors(dn,ki),r[0]=ki.x,r[4]=Ja.x,r[8]=dn.x,r[1]=ki.y,r[5]=Ja.y,r[9]=dn.y,r[2]=ki.z,r[6]=Ja.z,r[10]=dn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],f=i[5],h=i[9],p=i[13],g=i[2],y=i[6],m=i[10],d=i[14],v=i[3],_=i[7],x=i[11],b=i[15],A=r[0],T=r[4],R=r[8],w=r[12],S=r[1],L=r[5],X=r[9],k=r[13],W=r[2],Z=r[6],H=r[10],K=r[14],D=r[3],V=r[7],q=r[11],oe=r[15];return s[0]=o*A+a*S+l*W+u*D,s[4]=o*T+a*L+l*Z+u*V,s[8]=o*R+a*X+l*H+u*q,s[12]=o*w+a*k+l*K+u*oe,s[1]=c*A+f*S+h*W+p*D,s[5]=c*T+f*L+h*Z+p*V,s[9]=c*R+f*X+h*H+p*q,s[13]=c*w+f*k+h*K+p*oe,s[2]=g*A+y*S+m*W+d*D,s[6]=g*T+y*L+m*Z+d*V,s[10]=g*R+y*X+m*H+d*q,s[14]=g*w+y*k+m*K+d*oe,s[3]=v*A+_*S+x*W+b*D,s[7]=v*T+_*L+x*Z+b*V,s[11]=v*R+_*X+x*H+b*q,s[15]=v*w+_*k+x*K+b*oe,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],f=e[6],h=e[10],p=e[14],g=e[3],y=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*u*f-s*a*h+i*u*h+r*a*p-i*l*p)+y*(+n*l*p-n*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+n*u*f-n*a*p-s*o*f+i*o*p+s*a*c-i*u*c)+d*(-r*a*c-n*l*f+n*a*h+r*o*f-i*o*h+i*l*c)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],f=e[9],h=e[10],p=e[11],g=e[12],y=e[13],m=e[14],d=e[15],v=f*m*u-y*h*u+y*l*p-a*m*p-f*l*d+a*h*d,_=g*h*u-c*m*u-g*l*p+o*m*p+c*l*d-o*h*d,x=c*y*u-g*f*u+g*a*p-o*y*p-c*a*d+o*f*d,b=g*f*l-c*y*l-g*a*h+o*y*h+c*a*m-o*f*m,A=n*v+i*_+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=v*T,e[1]=(y*h*s-f*m*s-y*r*p+i*m*p+f*r*d-i*h*d)*T,e[2]=(a*m*s-y*l*s+y*r*u-i*m*u-a*r*d+i*l*d)*T,e[3]=(f*l*s-a*h*s-f*r*u+i*h*u+a*r*p-i*l*p)*T,e[4]=_*T,e[5]=(c*m*s-g*h*s+g*r*p-n*m*p-c*r*d+n*h*d)*T,e[6]=(g*l*s-o*m*s-g*r*u+n*m*u+o*r*d-n*l*d)*T,e[7]=(o*h*s-c*l*s+c*r*u-n*h*u-o*r*p+n*l*p)*T,e[8]=x*T,e[9]=(g*f*s-c*y*s-g*i*p+n*y*p+c*i*d-n*f*d)*T,e[10]=(o*y*s-g*a*s+g*i*u-n*y*u-o*i*d+n*a*d)*T,e[11]=(c*a*s-o*f*s-c*i*u+n*f*u+o*i*p-n*a*p)*T,e[12]=b*T,e[13]=(c*y*r-g*f*r+g*i*h-n*y*h-c*i*m+n*f*m)*T,e[14]=(g*a*r-o*y*r-g*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*f*r-c*a*r+c*i*l-n*f*l-o*i*h+n*a*h)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,u=s+s,c=o+o,f=a+a,h=s*u,p=s*c,g=s*f,y=o*c,m=o*f,d=a*f,v=l*u,_=l*c,x=l*f,b=i.x,A=i.y,T=i.z;return r[0]=(1-(y+d))*b,r[1]=(p+x)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(h+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*T,r[9]=(m-v)*T,r[10]=(1-(h+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=Kr.set(r[0],r[1],r[2]).length();const o=Kr.set(r[4],r[5],r[6]).length(),a=Kr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Fn.copy(this);const u=1/s,c=1/o,f=1/a;return Fn.elements[0]*=u,Fn.elements[1]*=u,Fn.elements[2]*=u,Fn.elements[4]*=c,Fn.elements[5]*=c,Fn.elements[6]*=c,Fn.elements[8]*=f,Fn.elements[9]*=f,Fn.elements[10]*=f,n.setFromRotationMatrix(Fn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Mi){const l=this.elements,u=2*s/(n-e),c=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Mi)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===hu)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Mi){const l=this.elements,u=1/(n-e),c=1/(i-r),f=1/(o-s),h=(n+e)*u,p=(i+r)*c;let g,y;if(a===Mi)g=(o+s)*f,y=-2*f;else if(a===hu)g=s*f,y=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Kr=new N,Fn=new vt,PM=new N(0,0,0),LM=new N(1,1,1),ki=new N,Ja=new N,dn=new N,Dm=new vt,Nm=new zr;class Pi{constructor(e=0,n=0,i=0,r=Pi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Ut(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ut(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ut(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ut(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(Ut(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ut(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Dm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dm,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Nm.setFromEuler(this),this.setFromQuaternion(Nm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Pi.DEFAULT_ORDER="XYZ";class O_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let DM=0;const Im=new N,Jr=new zr,fi=new vt,Qa=new N,mo=new N,NM=new N,IM=new zr,Um=new N(1,0,0),Om=new N(0,1,0),Fm=new N(0,0,1),km={type:"added"},UM={type:"removed"},Qr={type:"childadded",child:null},Ec={type:"childremoved",child:null};class zt extends Gr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=oi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new N,n=new Pi,i=new zr,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new vt},normalMatrix:{value:new Ge}}),this.matrix=new vt,this.matrixWorld=new vt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new O_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.multiply(Jr),this}rotateOnWorldAxis(e,n){return Jr.setFromAxisAngle(e,n),this.quaternion.premultiply(Jr),this}rotateX(e){return this.rotateOnAxis(Um,e)}rotateY(e){return this.rotateOnAxis(Om,e)}rotateZ(e){return this.rotateOnAxis(Fm,e)}translateOnAxis(e,n){return Im.copy(e).applyQuaternion(this.quaternion),this.position.add(Im.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Um,e)}translateY(e){return this.translateOnAxis(Om,e)}translateZ(e){return this.translateOnAxis(Fm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(fi.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Qa.copy(e):Qa.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),mo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fi.lookAt(mo,Qa,this.up):fi.lookAt(Qa,mo,this.up),this.quaternion.setFromRotationMatrix(fi),r&&(fi.extractRotation(r.matrixWorld),Jr.setFromRotationMatrix(fi),this.quaternion.premultiply(Jr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(km),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(UM),Ec.child=e,this.dispatchEvent(Ec),Ec.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),fi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),fi.multiply(e.parent.matrixWorld)),e.applyMatrix4(fi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(km),Qr.child=e,this.dispatchEvent(Qr),Qr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,e,NM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(mo,IM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const f=l[u];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}zt.DEFAULT_UP=new N(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const kn=new N,di=new N,wc=new N,pi=new N,es=new N,ts=new N,zm=new N,Tc=new N,Ac=new N,Cc=new N,Rc=new ut,bc=new ut,Pc=new ut;class Cn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),kn.subVectors(e,n),r.cross(kn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){kn.subVectors(r,n),di.subVectors(i,n),wc.subVectors(e,n);const o=kn.dot(kn),a=kn.dot(di),l=kn.dot(wc),u=di.dot(di),c=di.dot(wc),f=o*u-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(u*l-a*c)*h,g=(o*c-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,pi)===null?!1:pi.x>=0&&pi.y>=0&&pi.x+pi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,pi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,pi.x),l.addScaledVector(o,pi.y),l.addScaledVector(a,pi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Rc.setScalar(0),bc.setScalar(0),Pc.setScalar(0),Rc.fromBufferAttribute(e,n),bc.fromBufferAttribute(e,i),Pc.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Rc,s.x),o.addScaledVector(bc,s.y),o.addScaledVector(Pc,s.z),o}static isFrontFacing(e,n,i,r){return kn.subVectors(i,n),di.subVectors(e,n),kn.cross(di).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return kn.subVectors(this.c,this.b),di.subVectors(this.a,this.b),kn.cross(di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Cn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Cn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Cn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Cn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Cn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;es.subVectors(r,i),ts.subVectors(s,i),Tc.subVectors(e,i);const l=es.dot(Tc),u=ts.dot(Tc);if(l<=0&&u<=0)return n.copy(i);Ac.subVectors(e,r);const c=es.dot(Ac),f=ts.dot(Ac);if(c>=0&&f<=c)return n.copy(r);const h=l*f-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),n.copy(i).addScaledVector(es,o);Cc.subVectors(e,s);const p=es.dot(Cc),g=ts.dot(Cc);if(g>=0&&p<=g)return n.copy(s);const y=p*u-l*g;if(y<=0&&u>=0&&g<=0)return a=u/(u-g),n.copy(i).addScaledVector(ts,a);const m=c*g-p*f;if(m<=0&&f-c>=0&&p-g>=0)return zm.subVectors(s,r),a=(f-c)/(f-c+(p-g)),n.copy(r).addScaledVector(zm,a);const d=1/(m+y+h);return o=y*d,a=h*d,n.copy(i).addScaledVector(es,o).addScaledVector(ts,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const F_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},zi={h:0,s:0,l:0},el={h:0,s:0,l:0};function Lc(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Je.workingColorSpace){if(e=Hd(e,1),n=Ut(n,0,1),i=Ut(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Lc(o,s,e+1/3),this.g=Lc(o,s,e),this.b=Lc(o,s,e-1/3)}return Je.toWorkingColorSpace(this,r),this}setStyle(e,n=wn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=wn){const i=F_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=wi(e.r),this.g=wi(e.g),this.b=wi(e.b),this}copyLinearToSRGB(e){return this.r=Os(e.r),this.g=Os(e.g),this.b=Os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=wn){return Je.fromWorkingColorSpace(jt.copy(this),e),Math.round(Ut(jt.r*255,0,255))*65536+Math.round(Ut(jt.g*255,0,255))*256+Math.round(Ut(jt.b*255,0,255))}getHexString(e=wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.fromWorkingColorSpace(jt.copy(this),n);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const f=o-a;switch(u=c<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,n=Je.workingColorSpace){return Je.fromWorkingColorSpace(jt.copy(this),n),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=wn){Je.fromWorkingColorSpace(jt.copy(this),e);const n=jt.r,i=jt.g,r=jt.b;return e!==wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(zi),this.setHSL(zi.h+e,zi.s+n,zi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(zi),e.getHSL(el);const i=Bo(zi.h,el.h,n),r=Bo(zi.s,el.s,n),s=Bo(zi.l,el.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new tt;tt.NAMES=F_;let OM=0;class Ea extends Gr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:OM++}),this.uuid=oi(),this.name="",this.blending=Is,this.side=ar,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$h,this.blendDst=Yh,this.blendEquation=Mr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=js,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xr,this.stencilZFail=Xr,this.stencilZPass=Xr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Is&&(i.blending=this.blending),this.side!==ar&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$h&&(i.blendSrc=this.blendSrc),this.blendDst!==Yh&&(i.blendDst=this.blendDst),this.blendEquation!==Mr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==js&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Mm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Xr&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Xr&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Xr&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class wa extends Ea{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=x_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const At=new N,tl=new ie;class $n{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Nf,this.updateRanges=[],this.gpuType=Si,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)tl.fromBufferAttribute(this,n),tl.applyMatrix3(e),this.setXY(n,tl.x,tl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix3(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyMatrix4(e),this.setXYZ(n,At.x,At.y,At.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.applyNormalMatrix(e),this.setXYZ(n,At.x,At.y,At.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)At.fromBufferAttribute(this,n),At.transformDirection(e),this.setXYZ(n,At.x,At.y,At.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Vn(n,this.array)),n}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Vn(n,this.array)),n}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Vn(n,this.array)),n}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Vn(n,this.array)),n}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Nf&&(e.usage=this.usage),e}}class k_ extends $n{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class z_ extends $n{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class en extends $n{constructor(e,n,i){super(new Float32Array(e),n,i)}}let FM=0;const En=new vt,Dc=new zt,ns=new N,pn=new Ma,go=new Ma,Nt=new N;class Zn extends Gr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:FM++}),this.uuid=oi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(D_(e)?z_:k_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Ge().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,n,i){return En.makeTranslation(e,n,i),this.applyMatrix4(En),this}scale(e,n,i){return En.makeScale(e,n,i),this.applyMatrix4(En),this}lookAt(e){return Dc.lookAt(e),Dc.updateMatrix(),this.applyMatrix4(Dc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new en(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ma);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];pn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Vd);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];go.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(pn.min,go.min),pn.expandByPoint(Nt),Nt.addVectors(pn.max,go.max),pn.expandByPoint(Nt)):(pn.expandByPoint(go.min),pn.expandByPoint(go.max))}pn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(ns.fromBufferAttribute(e,u),Nt.add(ns)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new $n(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new N,l[R]=new N;const u=new N,c=new N,f=new N,h=new ie,p=new ie,g=new ie,y=new N,m=new N;function d(R,w,S){u.fromBufferAttribute(i,R),c.fromBufferAttribute(i,w),f.fromBufferAttribute(i,S),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),g.fromBufferAttribute(s,S),c.sub(u),f.sub(u),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(y.copy(c).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(L),m.copy(f).multiplyScalar(p.x).addScaledVector(c,-g.x).multiplyScalar(L),a[R].add(y),a[w].add(y),a[S].add(y),l[R].add(m),l[w].add(m),l[S].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,w=v.length;R<w;++R){const S=v[R],L=S.start,X=S.count;for(let k=L,W=L+X;k<W;k+=3)d(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const _=new N,x=new N,b=new N,A=new N;function T(R){b.fromBufferAttribute(r,R),A.copy(b);const w=a[R];_.copy(w),_.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(A,w);const L=x.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,w=v.length;R<w;++R){const S=v[R],L=S.start,X=S.count;for(let k=L,W=L+X;k<W;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new $n(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,u=new N,c=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),y=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,y),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),c.subVectors(o,s),f.subVectors(r,s),c.cross(f),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Nt.fromBufferAttribute(e,n),Nt.normalize(),e.setXYZ(n,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,f=a.normalized,h=new u.constructor(l.length*c);let p=0,g=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*c;for(let d=0;d<c;d++)h[g++]=u[p++]}return new $n(h,c,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new Zn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);n.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,f=u.length;c<f;c++){const h=u[c],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];n.addGroup(u.start,u.count,u.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let f=0,h=u.length;f<h;f++){const p=u[f];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(n))}const s=e.morphAttributes;for(const u in s){const c=[],f=s[u];for(let h=0,p=f.length;h<p;h++)c.push(f[h].clone(n));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const f=o[u];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bm=new vt,mr=new U_,nl=new Vd,Hm=new N,il=new N,rl=new N,sl=new N,Nc=new N,ol=new N,Vm=new N,al=new N;class bn extends zt{constructor(e=new Zn,n=new wa){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){ol.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],f=s[l];c!==0&&(Nc.fromBufferAttribute(f,e),o?ol.addScaledVector(Nc,c):ol.addScaledVector(Nc.sub(n),c))}n.add(ol)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),nl.copy(i.boundingSphere),nl.applyMatrix4(s),mr.copy(e.ray).recast(e.near),!(nl.containsPoint(mr.origin)===!1&&(mr.intersectSphere(nl,Hm)===null||mr.origin.distanceToSquared(Hm)>(e.far-e.near)**2))&&(Bm.copy(s).invert(),mr.copy(e.ray).applyMatrix4(Bm),!(i.boundingBox!==null&&mr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,mr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=_;x<b;x+=3){const A=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);r=ll(this,d,e,i,u,c,f,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),x=a.getX(m+2);r=ll(this,o,e,i,u,c,f,v,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,y=h.length;g<y;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=v,b=_;x<b;x+=3){const A=x,T=x+1,R=x+2;r=ll(this,d,e,i,u,c,f,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=g,d=y;m<d;m+=3){const v=m,_=m+1,x=m+2;r=ll(this,o,e,i,u,c,f,v,_,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function kM(t,e,n,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===ar,a),l===null)return null;al.copy(a),al.applyMatrix4(t.matrixWorld);const u=n.ray.origin.distanceTo(al);return u<n.near||u>n.far?null:{distance:u,point:al.clone(),object:t}}function ll(t,e,n,i,r,s,o,a,l,u){t.getVertexPosition(a,il),t.getVertexPosition(l,rl),t.getVertexPosition(u,sl);const c=kM(t,e,n,i,il,rl,sl,Vm);if(c){const f=new N;Cn.getBarycoord(Vm,il,rl,sl,f),r&&(c.uv=Cn.getInterpolatedAttribute(r,a,l,u,f,new ie)),s&&(c.uv1=Cn.getInterpolatedAttribute(s,a,l,u,f,new ie)),o&&(c.normal=Cn.getInterpolatedAttribute(o,a,l,u,f,new N),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const h={a,b:l,c:u,normal:new N,materialIndex:0};Cn.getNormal(il,rl,sl,h.normal),c.face=h,c.barycoord=f}return c}class Ta extends Zn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new en(u,3)),this.setAttribute("normal",new en(c,3)),this.setAttribute("uv",new en(f,2));function g(y,m,d,v,_,x,b,A,T,R,w){const S=x/T,L=b/R,X=x/2,k=b/2,W=A/2,Z=T+1,H=R+1;let K=0,D=0;const V=new N;for(let q=0;q<H;q++){const oe=q*L-k;for(let Ae=0;Ae<Z;Ae++){const Ze=Ae*S-X;V[y]=Ze*v,V[m]=oe*_,V[d]=W,u.push(V.x,V.y,V.z),V[y]=0,V[m]=0,V[d]=A>0?1:-1,c.push(V.x,V.y,V.z),f.push(Ae/T),f.push(1-q/R),K+=1}}for(let q=0;q<R;q++)for(let oe=0;oe<T;oe++){const Ae=h+oe+Z*q,Ze=h+oe+Z*(q+1),j=h+(oe+1)+Z*(q+1),re=h+(oe+1)+Z*q;l.push(Ae,Ze,re),l.push(Ze,j,re),D+=6}a.addGroup(p,D,w),p+=D,h+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ta(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function qs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function qt(t){const e={};for(let n=0;n<t.length;n++){const i=qs(t[n]);for(const r in i)e[r]=i[r]}return e}function zM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function B_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}const BM={clone:qs,merge:qt};var HM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,VM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class lr extends Ea{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=HM,this.fragmentShader=VM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=zM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class H_ extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new vt,this.projectionMatrix=new vt,this.projectionMatrixInverse=new vt,this.coordinateSystem=Mi}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bi=new N,Gm=new ie,Wm=new ie;class gn extends H_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=la*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(zo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return la*2*Math.atan(Math.tan(zo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Bi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z),Bi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bi.x,Bi.y).multiplyScalar(-e/Bi.z)}getViewSize(e,n){return this.getViewBounds(e,Gm,Wm),n.subVectors(Wm,Gm)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(zo*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const is=-90,rs=1;class GM extends zt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new gn(is,rs,e,n);r.layers=this.layers,this.add(r);const s=new gn(is,rs,e,n);s.layers=this.layers,this.add(s);const o=new gn(is,rs,e,n);o.layers=this.layers,this.add(o);const a=new gn(is,rs,e,n);a.layers=this.layers,this.add(a);const l=new gn(is,rs,e,n);l.layers=this.layers,this.add(l);const u=new gn(is,rs,e,n);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const u of n)this.remove(u);if(e===Mi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===hu)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of n)this.add(u),u.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,u,c]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,u),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,c),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class V_ extends Qt{constructor(e,n,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],n=n!==void 0?n:Xs,super(e,n,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class WM extends kr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new V_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ni}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new Ta(5,5,5),s=new lr({name:"CubemapFromEquirect",uniforms:qs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:ir});s.uniforms.tEquirect.value=n;const o=new bn(r,s),a=n.minFilter;return n.minFilter===Rr&&(n.minFilter=ni),new GM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Ic=new N,jM=new N,XM=new Ge;class Gi{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Ic.subVectors(i,n).cross(jM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Ic),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||XM.getNormalMatrix(e),r=this.coplanarPoint(Ic).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gr=new Vd,ul=new N;class Gd{constructor(e=new Gi,n=new Gi,i=new Gi,r=new Gi,s=new Gi,o=new Gi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Mi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],f=r[6],h=r[7],p=r[8],g=r[9],y=r[10],m=r[11],d=r[12],v=r[13],_=r[14],x=r[15];if(i[0].setComponents(l-s,h-u,m-p,x-d).normalize(),i[1].setComponents(l+s,h+u,m+p,x+d).normalize(),i[2].setComponents(l+o,h+c,m+g,x+v).normalize(),i[3].setComponents(l-o,h-c,m-g,x-v).normalize(),i[4].setComponents(l-a,h-f,m-y,x-_).normalize(),n===Mi)i[5].setComponents(l+a,h+f,m+y,x+_).normalize();else if(n===hu)i[5].setComponents(a,f,y,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),gr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gr)}intersectsSprite(e){return gr.center.set(0,0,0),gr.radius=.7071067811865476,gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(gr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(ul.x=r.normal.x>0?e.max.x:e.min.x,ul.y=r.normal.y>0?e.max.y:e.min.y,ul.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(ul)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function G_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function $M(t){const e=new WeakMap;function n(a,l){const u=a.array,c=a.usage,f=u.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,u,c),a.onUploadCallback();let p;if(u instanceof Float32Array)p=t.FLOAT;else if(u instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(u instanceof Int16Array)p=t.SHORT;else if(u instanceof Uint32Array)p=t.UNSIGNED_INT;else if(u instanceof Int32Array)p=t.INT;else if(u instanceof Int8Array)p=t.BYTE;else if(u instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:h,type:p,bytesPerElement:u.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,u){const c=l.array,f=l.updateRanges;if(t.bindBuffer(u,a),f.length===0)t.bufferSubData(u,0,c);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],y=f[p];y.start<=g.start+g.count+1?g.count=Math.max(g.count,y.start+y.count-g.start):(++h,f[h]=y)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const y=f[p];t.bufferSubData(u,y.start*c.BYTES_PER_ELEMENT,c,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=e.get(a);(!c||c.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const u=e.get(a);if(u===void 0)e.set(a,n(a,l));else if(u.version<a.version){if(u.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(u.buffer,a,l),u.version=a.version}}return{get:r,remove:s,update:o}}class Fu extends Zn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,f=e/a,h=n/l,p=[],g=[],y=[],m=[];for(let d=0;d<c;d++){const v=d*h-o;for(let _=0;_<u;_++){const x=_*f-s;g.push(x,-v,0),y.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const _=v+u*d,x=v+u*(d+1),b=v+1+u*(d+1),A=v+1+u*d;p.push(_,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fu(e.width,e.height,e.widthSegments,e.heightSegments)}}var YM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ZM=`#ifdef USE_ALPHAHASH
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
#endif`,qM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,KM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,JM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,QM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,eE=`#ifdef USE_AOMAP
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
#endif`,tE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,nE=`#ifdef USE_BATCHING
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
#endif`,iE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,oE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,aE=`#ifdef USE_IRIDESCENCE
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
#endif`,lE=`#ifdef USE_BUMPMAP
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
#endif`,uE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,fE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dE=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,pE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,mE=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,gE=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vE=`#define PI 3.141592653589793
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
} // validated`,_E=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xE=`vec3 transformedNormal = objectNormal;
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
#endif`,yE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,SE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ME=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,EE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,wE="gl_FragColor = linearToOutputTexel( gl_FragColor );",TE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,AE=`#ifdef USE_ENVMAP
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
#endif`,CE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,RE=`#ifdef USE_ENVMAP
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
#endif`,bE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,PE=`#ifdef USE_ENVMAP
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
#endif`,LE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,DE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,NE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,IE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,UE=`#ifdef USE_GRADIENTMAP
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
}`,OE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,FE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,kE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,zE=`uniform bool receiveShadow;
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
#endif`,BE=`#ifdef USE_ENVMAP
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
#endif`,HE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,GE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,WE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
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
#endif`,XE=`struct PhysicalMaterial {
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
}`,$E=`
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
#endif`,YE=`#if defined( RE_IndirectDiffuse )
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
#endif`,ZE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,qE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,JE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,QE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ew=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,nw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,iw=`#if defined( USE_POINTS_UV )
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
#endif`,rw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sw=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ow=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aw=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,lw=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,uw=`#ifdef USE_MORPHTARGETS
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
#endif`,cw=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hw=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fw=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,gw=`#ifdef USE_NORMALMAP
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
#endif`,vw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_w=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mw=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ww=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Tw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Aw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Cw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Rw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Pw=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Dw=`float getShadowMask() {
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
}`,Nw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Iw=`#ifdef USE_SKINNING
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
#endif`,Uw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ow=`#ifdef USE_SKINNING
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
#endif`,Fw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,kw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bw=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Hw=`#ifdef USE_TRANSMISSION
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
#endif`,Vw=`#ifdef USE_TRANSMISSION
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
#endif`,Gw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ww=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,jw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $w=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yw=`uniform sampler2D t2D;
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
}`,Zw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qw=`#include <common>
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
}`,eT=`#if DEPTH_PACKING == 3200
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
}`,tT=`#define DISTANCE
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
}`,nT=`#define DISTANCE
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
}`,iT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,rT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sT=`uniform float scale;
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
}`,oT=`uniform vec3 diffuse;
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
}`,aT=`#include <common>
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
}`,lT=`uniform vec3 diffuse;
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
}`,uT=`#define LAMBERT
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
}`,cT=`#define LAMBERT
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
}`,hT=`#define MATCAP
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
}`,fT=`#define MATCAP
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
}`,dT=`#define NORMAL
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
}`,pT=`#define NORMAL
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
}`,mT=`#define PHONG
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
}`,gT=`#define PHONG
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
}`,vT=`#define STANDARD
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
}`,_T=`#define STANDARD
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
}`,xT=`#define TOON
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
}`,yT=`#define TOON
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
}`,ST=`uniform float size;
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
}`,MT=`uniform vec3 diffuse;
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
}`,ET=`#include <common>
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
}`,wT=`uniform vec3 color;
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
}`,TT=`uniform float rotation;
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
}`,AT=`uniform vec3 diffuse;
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
}`,je={alphahash_fragment:YM,alphahash_pars_fragment:ZM,alphamap_fragment:qM,alphamap_pars_fragment:KM,alphatest_fragment:JM,alphatest_pars_fragment:QM,aomap_fragment:eE,aomap_pars_fragment:tE,batching_pars_vertex:nE,batching_vertex:iE,begin_vertex:rE,beginnormal_vertex:sE,bsdfs:oE,iridescence_fragment:aE,bumpmap_pars_fragment:lE,clipping_planes_fragment:uE,clipping_planes_pars_fragment:cE,clipping_planes_pars_vertex:hE,clipping_planes_vertex:fE,color_fragment:dE,color_pars_fragment:pE,color_pars_vertex:mE,color_vertex:gE,common:vE,cube_uv_reflection_fragment:_E,defaultnormal_vertex:xE,displacementmap_pars_vertex:yE,displacementmap_vertex:SE,emissivemap_fragment:ME,emissivemap_pars_fragment:EE,colorspace_fragment:wE,colorspace_pars_fragment:TE,envmap_fragment:AE,envmap_common_pars_fragment:CE,envmap_pars_fragment:RE,envmap_pars_vertex:bE,envmap_physical_pars_fragment:BE,envmap_vertex:PE,fog_vertex:LE,fog_pars_vertex:DE,fog_fragment:NE,fog_pars_fragment:IE,gradientmap_pars_fragment:UE,lightmap_pars_fragment:OE,lights_lambert_fragment:FE,lights_lambert_pars_fragment:kE,lights_pars_begin:zE,lights_toon_fragment:HE,lights_toon_pars_fragment:VE,lights_phong_fragment:GE,lights_phong_pars_fragment:WE,lights_physical_fragment:jE,lights_physical_pars_fragment:XE,lights_fragment_begin:$E,lights_fragment_maps:YE,lights_fragment_end:ZE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:JE,logdepthbuf_vertex:QE,map_fragment:ew,map_pars_fragment:tw,map_particle_fragment:nw,map_particle_pars_fragment:iw,metalnessmap_fragment:rw,metalnessmap_pars_fragment:sw,morphinstance_vertex:ow,morphcolor_vertex:aw,morphnormal_vertex:lw,morphtarget_pars_vertex:uw,morphtarget_vertex:cw,normal_fragment_begin:hw,normal_fragment_maps:fw,normal_pars_fragment:dw,normal_pars_vertex:pw,normal_vertex:mw,normalmap_pars_fragment:gw,clearcoat_normal_fragment_begin:vw,clearcoat_normal_fragment_maps:_w,clearcoat_pars_fragment:xw,iridescence_pars_fragment:yw,opaque_fragment:Sw,packing:Mw,premultiplied_alpha_fragment:Ew,project_vertex:ww,dithering_fragment:Tw,dithering_pars_fragment:Aw,roughnessmap_fragment:Cw,roughnessmap_pars_fragment:Rw,shadowmap_pars_fragment:bw,shadowmap_pars_vertex:Pw,shadowmap_vertex:Lw,shadowmask_pars_fragment:Dw,skinbase_vertex:Nw,skinning_pars_vertex:Iw,skinning_vertex:Uw,skinnormal_vertex:Ow,specularmap_fragment:Fw,specularmap_pars_fragment:kw,tonemapping_fragment:zw,tonemapping_pars_fragment:Bw,transmission_fragment:Hw,transmission_pars_fragment:Vw,uv_pars_fragment:Gw,uv_pars_vertex:Ww,uv_vertex:jw,worldpos_vertex:Xw,background_vert:$w,background_frag:Yw,backgroundCube_vert:Zw,backgroundCube_frag:qw,cube_vert:Kw,cube_frag:Jw,depth_vert:Qw,depth_frag:eT,distanceRGBA_vert:tT,distanceRGBA_frag:nT,equirect_vert:iT,equirect_frag:rT,linedashed_vert:sT,linedashed_frag:oT,meshbasic_vert:aT,meshbasic_frag:lT,meshlambert_vert:uT,meshlambert_frag:cT,meshmatcap_vert:hT,meshmatcap_frag:fT,meshnormal_vert:dT,meshnormal_frag:pT,meshphong_vert:mT,meshphong_frag:gT,meshphysical_vert:vT,meshphysical_frag:_T,meshtoon_vert:xT,meshtoon_frag:yT,points_vert:ST,points_frag:MT,shadow_vert:ET,shadow_frag:wT,sprite_vert:TT,sprite_frag:AT},fe={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ge}},envmap:{envMap:{value:null},envMapRotation:{value:new Ge},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ge}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ge}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ge},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ge},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ge},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ge}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ge}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ge}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0},uvTransform:{value:new Ge}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ge},alphaMap:{value:null},alphaMapTransform:{value:new Ge},alphaTest:{value:0}}},Qn={basic:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:je.meshbasic_vert,fragmentShader:je.meshbasic_frag},lambert:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshlambert_vert,fragmentShader:je.meshlambert_frag},phong:{uniforms:qt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:je.meshphong_vert,fragmentShader:je.meshphong_frag},standard:{uniforms:qt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag},toon:{uniforms:qt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new tt(0)}}]),vertexShader:je.meshtoon_vert,fragmentShader:je.meshtoon_frag},matcap:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:je.meshmatcap_vert,fragmentShader:je.meshmatcap_frag},points:{uniforms:qt([fe.points,fe.fog]),vertexShader:je.points_vert,fragmentShader:je.points_frag},dashed:{uniforms:qt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:je.linedashed_vert,fragmentShader:je.linedashed_frag},depth:{uniforms:qt([fe.common,fe.displacementmap]),vertexShader:je.depth_vert,fragmentShader:je.depth_frag},normal:{uniforms:qt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:je.meshnormal_vert,fragmentShader:je.meshnormal_frag},sprite:{uniforms:qt([fe.sprite,fe.fog]),vertexShader:je.sprite_vert,fragmentShader:je.sprite_frag},background:{uniforms:{uvTransform:{value:new Ge},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:je.background_vert,fragmentShader:je.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ge}},vertexShader:je.backgroundCube_vert,fragmentShader:je.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:je.cube_vert,fragmentShader:je.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:je.equirect_vert,fragmentShader:je.equirect_frag},distanceRGBA:{uniforms:qt([fe.common,fe.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:je.distanceRGBA_vert,fragmentShader:je.distanceRGBA_frag},shadow:{uniforms:qt([fe.lights,fe.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:je.shadow_vert,fragmentShader:je.shadow_frag}};Qn.physical={uniforms:qt([Qn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ge},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ge},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ge},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ge},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ge},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ge},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ge},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ge},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ge},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ge},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ge},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ge}}]),vertexShader:je.meshphysical_vert,fragmentShader:je.meshphysical_frag};const cl={r:0,b:0,g:0},vr=new Pi,CT=new vt;function RT(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,u,c,f=null,h=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function y(v){let _=!1;const x=g(v);x===null?d(a,l):x&&x.isColor&&(d(x,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const x=g(_);x&&(x.isCubeTexture||x.mapping===Uu)?(c===void 0&&(c=new bn(new Ta(1,1,1),new lr({name:"BackgroundCubeMaterial",uniforms:qs(Qn.backgroundCube.uniforms),vertexShader:Qn.backgroundCube.vertexShader,fragmentShader:Qn.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),vr.copy(_.backgroundRotation),vr.x*=-1,vr.y*=-1,vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(CT.makeRotationFromEuler(vr)),c.material.toneMapped=Je.getTransfer(x.colorSpace)!==at,(f!==x||h!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new bn(new Fu(2,2),new lr({name:"BackgroundMaterial",uniforms:qs(Qn.background.uniforms),vertexShader:Qn.background.vertexShader,fragmentShader:Qn.background.fragmentShader,side:ar,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.toneMapped=Je.getTransfer(x.colorSpace)!==at,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null))}function d(v,_){v.getRGB(cl,B_(t)),i.buffers.color.setClear(cl.r,cl.g,cl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:y,addToRenderList:m}}function bT(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(S,L,X,k,W){let Z=!1;const H=f(k,X,L);s!==H&&(s=H,u(s.object)),Z=p(S,k,X,W),Z&&g(S,k,X,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,x(S,L,X,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function u(S){return t.bindVertexArray(S)}function c(S){return t.deleteVertexArray(S)}function f(S,L,X){const k=X.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let Z=W[L.id];Z===void 0&&(Z={},W[L.id]=Z);let H=Z[k];return H===void 0&&(H=h(l()),Z[k]=H),H}function h(S){const L=[],X=[],k=[];for(let W=0;W<n;W++)L[W]=0,X[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:X,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,L,X,k){const W=s.attributes,Z=L.attributes;let H=0;const K=X.getAttributes();for(const D in K)if(K[D].location>=0){const q=W[D];let oe=Z[D];if(oe===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(oe=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(oe=S.instanceColor)),q===void 0||q.attribute!==oe||oe&&q.data!==oe.data)return!0;H++}return s.attributesNum!==H||s.index!==k}function g(S,L,X,k){const W={},Z=L.attributes;let H=0;const K=X.getAttributes();for(const D in K)if(K[D].location>=0){let q=Z[D];q===void 0&&(D==="instanceMatrix"&&S.instanceMatrix&&(q=S.instanceMatrix),D==="instanceColor"&&S.instanceColor&&(q=S.instanceColor));const oe={};oe.attribute=q,q&&q.data&&(oe.data=q.data),W[D]=oe,H++}s.attributes=W,s.attributesNum=H,s.index=k}function y(){const S=s.newAttributes;for(let L=0,X=S.length;L<X;L++)S[L]=0}function m(S){d(S,0)}function d(S,L){const X=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;X[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),W[S]!==L&&(t.vertexAttribDivisor(S,L),W[S]=L)}function v(){const S=s.newAttributes,L=s.enabledAttributes;for(let X=0,k=L.length;X<k;X++)L[X]!==S[X]&&(t.disableVertexAttribArray(X),L[X]=0)}function _(S,L,X,k,W,Z,H){H===!0?t.vertexAttribIPointer(S,L,X,W,Z):t.vertexAttribPointer(S,L,X,k,W,Z)}function x(S,L,X,k){y();const W=k.attributes,Z=X.getAttributes(),H=L.defaultAttributeValues;for(const K in Z){const D=Z[K];if(D.location>=0){let V=W[K];if(V===void 0&&(K==="instanceMatrix"&&S.instanceMatrix&&(V=S.instanceMatrix),K==="instanceColor"&&S.instanceColor&&(V=S.instanceColor)),V!==void 0){const q=V.normalized,oe=V.itemSize,Ae=e.get(V);if(Ae===void 0)continue;const Ze=Ae.buffer,j=Ae.type,re=Ae.bytesPerElement,_e=j===t.INT||j===t.UNSIGNED_INT||V.gpuType===Ud;if(V.isInterleavedBufferAttribute){const le=V.data,Ne=le.stride,ke=V.offset;if(le.isInstancedInterleavedBuffer){for(let Oe=0;Oe<D.locationSize;Oe++)d(D.location+Oe,le.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Oe=0;Oe<D.locationSize;Oe++)m(D.location+Oe);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let Oe=0;Oe<D.locationSize;Oe++)_(D.location+Oe,oe/D.locationSize,j,q,Ne*re,(ke+oe/D.locationSize*Oe)*re,_e)}else{if(V.isInstancedBufferAttribute){for(let le=0;le<D.locationSize;le++)d(D.location+le,V.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let le=0;le<D.locationSize;le++)m(D.location+le);t.bindBuffer(t.ARRAY_BUFFER,Ze);for(let le=0;le<D.locationSize;le++)_(D.location+le,oe/D.locationSize,j,q,oe*re,oe/D.locationSize*le*re,_e)}}else if(H!==void 0){const q=H[K];if(q!==void 0)switch(q.length){case 2:t.vertexAttrib2fv(D.location,q);break;case 3:t.vertexAttrib3fv(D.location,q);break;case 4:t.vertexAttrib4fv(D.location,q);break;default:t.vertexAttrib1fv(D.location,q)}}}}v()}function b(){R();for(const S in i){const L=i[S];for(const X in L){const k=L[X];for(const W in k)c(k[W].object),delete k[W];delete L[X]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const L=i[S.id];for(const X in L){const k=L[X];for(const W in k)c(k[W].object),delete k[W];delete L[X]}delete i[S.id]}function T(S){for(const L in i){const X=i[L];if(X[S.id]===void 0)continue;const k=X[S.id];for(const W in k)c(k[W].object),delete k[W];delete X[S.id]}}function R(){w(),o=!0,s!==r&&(s=r,u(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:v}}function PT(t,e,n){let i;function r(u){i=u}function s(u,c){t.drawArrays(i,u,c),n.update(c,i,1)}function o(u,c,f){f!==0&&(t.drawArraysInstanced(i,u,c,f),n.update(c,i,f))}function a(u,c,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,u,0,c,0,f);let p=0;for(let g=0;g<f;g++)p+=c[g];n.update(p,i,1)}function l(u,c,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<u.length;g++)o(u[g],c[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,u,0,c,0,h,0,f);let g=0;for(let y=0;y<f;y++)g+=c[y]*h[y];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function LT(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Gn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===Sa&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==bi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==Si&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=n.precision!==void 0?n.precision:"highp";const c=l(u);c!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",c,"instead."),u=c);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:y,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function DT(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Gi,a=new Ge,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=c(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,y=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?c(null):u();else{const v=s?0:i,_=v*4;let x=d.clippingState||null;l.value=x,x=c(g,h,_,p);for(let b=0;b!==_;++b)x[b]=n[b];d.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=v}};function u(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(f,h,p,g){const y=f!==null?f.length:0;let m=null;if(y!==0){if(m=l.value,g!==!0||m===null){const d=p+y*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,x=p;_!==y;++_,x+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function NT(t){let e=new WeakMap;function n(o,a){return a===nf?o.mapping=Xs:a===rf&&(o.mapping=$s),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===nf||a===rf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new WM(l.height);return u.fromEquirectangularTexture(t,o),e.set(o,u),o.addEventListener("dispose",r),n(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class W_ extends H_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Ts=4,jm=[.125,.215,.35,.446,.526,.582],Er=20,Uc=new W_,Xm=new tt;let Oc=null,Fc=0,kc=0,zc=!1;const Sr=(1+Math.sqrt(5))/2,ss=1/Sr,$m=[new N(-Sr,ss,0),new N(Sr,ss,0),new N(-ss,0,Sr),new N(ss,0,Sr),new N(0,Sr,-ss),new N(0,Sr,ss),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class Ym{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Km(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Oc,Fc,kc),this._renderer.xr.enabled=zc,e.scissorTest=!1,hl(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Xs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Oc=this._renderer.getRenderTarget(),Fc=this._renderer.getActiveCubeFace(),kc=this._renderer.getActiveMipmapLevel(),zc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ni,minFilter:ni,generateMipmaps:!1,type:Sa,format:Gn,colorSpace:eo,depthBuffer:!1},r=Zm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Zm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=IT(s)),this._blurMaterial=UT(s,e,n)}return r}_compileMaterial(e){const n=new bn(this._lodPlanes[0],e);this._renderer.compile(n,Uc)}_sceneToCubeUV(e,n,i,r){const a=new gn(90,1,n,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,f=c.autoClear,h=c.toneMapping;c.getClearColor(Xm),c.toneMapping=rr,c.autoClear=!1;const p=new wa({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),g=new bn(new Ta,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(Xm),y=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(u[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,u[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,u[d]));const _=this._cubeSize;hl(r,v*_,d>2?_:0,_,_),c.setRenderTarget(r),y&&c.render(g,a),c.render(e,a)}g.geometry.dispose(),g.material.dispose(),c.toneMapping=h,c.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Xs||e.mapping===$s;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Km()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new bn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;hl(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,Uc)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=$m[(r-s-1)%$m.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,f=new bn(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Er-1),y=s/g,m=isFinite(s)?1+Math.floor(c*y):Er;m>Er&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Er}`);const d=[];let v=0;for(let T=0;T<Er;++T){const R=T/y,w=Math.exp(-R*R/2);d.push(w),T===0?v+=w:T<m&&(v+=2*w)}for(let T=0;T<d.length;T++)d[T]=d[T]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const x=this._sizeLods[r],b=3*x*(r>_-Ts?r-_+Ts:0),A=4*(this._cubeSize-x);hl(n,b,A,3*x,2*x),l.setRenderTarget(n),l.render(f,Uc)}}function IT(t){const e=[],n=[],i=[];let r=t;const s=t-Ts+1+jm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Ts?l=jm[o-t+Ts-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,f=1+u,h=[c,c,f,c,f,f,c,c,f,f,c,f],p=6,g=6,y=3,m=2,d=1,v=new Float32Array(y*g*p),_=new Float32Array(m*g*p),x=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];v.set(w,y*g*A),_.set(h,m*g*A);const S=[A,A,A,A,A,A];x.set(S,d*g*A)}const b=new Zn;b.setAttribute("position",new $n(v,y)),b.setAttribute("uv",new $n(_,m)),b.setAttribute("faceIndex",new $n(x,d)),e.push(b),r>Ts&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function Zm(t,e,n){const i=new kr(t,e,n);return i.texture.mapping=Uu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function hl(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function UT(t,e,n){const i=new Float32Array(Er),r=new N(0,1,0);return new lr({name:"SphericalGaussianBlur",defines:{n:Er,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function qm(){return new lr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wd(),fragmentShader:`

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
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Km(){return new lr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ir,depthTest:!1,depthWrite:!1})}function Wd(){return`

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
	`}function OT(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===nf||l===rf,c=l===Xs||l===$s;if(u||c){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Ym(t)),f=u?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return u&&p&&p.height>0||c&&p&&r(p)?(n===null&&(n=new Ym(t)),f=u?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function FT(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Ro("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function kT(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const y=h.morphAttributes[g];for(let m=0,d=y.length;m<d;m++)e.remove(y[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const y=p[g];for(let m=0,d=y.length;m<d;m++)e.update(y[m],t.ARRAY_BUFFER)}}function u(f){const h=[],p=f.index,g=f.attributes.position;let y=0;if(p!==null){const v=p.array;y=p.version;for(let _=0,x=v.length;_<x;_+=3){const b=v[_+0],A=v[_+1],T=v[_+2];h.push(b,A,A,T,T,b)}}else if(g!==void 0){const v=g.array;y=g.version;for(let _=0,x=v.length/3-1;_<x;_+=3){const b=_+0,A=_+1,T=_+2;h.push(b,A,A,T,T,b)}}else return;const m=new(D_(h)?z_:k_)(h,1);m.version=y;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function c(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&u(f)}else u(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:c}}function zT(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function u(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function c(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,y){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)u(h[d]/o,p[d],y[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,y,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*y[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=c,this.renderMultiDrawInstances=f}function BT(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function HT(t,e,n){const i=new WeakMap,r=new ut;function s(o,a,l){const u=o.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=c!==void 0?c.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let x=0;g===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*A*4*f),R=new I_(T,b,A,f);R.type=Si,R.needsUpdate=!0;const w=x*4;for(let L=0;L<f;L++){const X=d[L],k=v[L],W=_[L],Z=b*A*4*L;for(let H=0;H<X.count;H++){const K=H*w;g===!0&&(r.fromBufferAttribute(X,H),T[Z+K+0]=r.x,T[Z+K+1]=r.y,T[Z+K+2]=r.z,T[Z+K+3]=0),y===!0&&(r.fromBufferAttribute(k,H),T[Z+K+4]=r.x,T[Z+K+5]=r.y,T[Z+K+6]=r.z,T[Z+K+7]=0),m===!0&&(r.fromBufferAttribute(W,H),T[Z+K+8]=r.x,T[Z+K+9]=r.y,T[Z+K+10]=r.z,T[Z+K+11]=W.itemSize===4?r.w:1)}}h={count:f,texture:R,size:new ie(b,A)},i.set(a,h),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<u.length;m++)g+=u[m];const y=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",u)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function VT(t,e,n,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,f=e.get(l,c);if(r.get(f)!==u&&(e.update(f),r.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==u&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==u&&(h.update(),r.set(h,u))}return f}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),n.remove(u.instanceMatrix),u.instanceColor!==null&&n.remove(u.instanceColor)}return{update:s,dispose:o}}class j_ extends Qt{constructor(e,n,i,r,s,o,a,l,u,c=Us){if(c!==Us&&c!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===Us&&(i=Fr),i===void 0&&c===Zs&&(i=Ys),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Xn,this.minFilter=l!==void 0?l:Xn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const X_=new Qt,Jm=new j_(1,1),$_=new I_,Y_=new RM,Z_=new V_,Qm=[],eg=[],tg=new Float32Array(16),ng=new Float32Array(9),ig=new Float32Array(4);function to(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Qm[r];if(s===void 0&&(s=new Float32Array(r),Qm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Lt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Dt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function ku(t,e){let n=eg[e];n===void 0&&(n=new Int32Array(e),eg[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function GT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function WT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2fv(this.addr,e),Dt(n,e)}}function jT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Lt(n,e))return;t.uniform3fv(this.addr,e),Dt(n,e)}}function XT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4fv(this.addr,e),Dt(n,e)}}function $T(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;ig.set(i),t.uniformMatrix2fv(this.addr,!1,ig),Dt(n,i)}}function YT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;ng.set(i),t.uniformMatrix3fv(this.addr,!1,ng),Dt(n,i)}}function ZT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Lt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Dt(n,e)}else{if(Lt(n,i))return;tg.set(i),t.uniformMatrix4fv(this.addr,!1,tg),Dt(n,i)}}function qT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function KT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2iv(this.addr,e),Dt(n,e)}}function JT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3iv(this.addr,e),Dt(n,e)}}function QT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4iv(this.addr,e),Dt(n,e)}}function eA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function tA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Lt(n,e))return;t.uniform2uiv(this.addr,e),Dt(n,e)}}function nA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Lt(n,e))return;t.uniform3uiv(this.addr,e),Dt(n,e)}}function iA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Lt(n,e))return;t.uniform4uiv(this.addr,e),Dt(n,e)}}function rA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Jm.compareFunction=L_,s=Jm):s=X_,n.setTexture2D(e||s,r)}function sA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Y_,r)}function oA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Z_,r)}function aA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||$_,r)}function lA(t){switch(t){case 5126:return GT;case 35664:return WT;case 35665:return jT;case 35666:return XT;case 35674:return $T;case 35675:return YT;case 35676:return ZT;case 5124:case 35670:return qT;case 35667:case 35671:return KT;case 35668:case 35672:return JT;case 35669:case 35673:return QT;case 5125:return eA;case 36294:return tA;case 36295:return nA;case 36296:return iA;case 35678:case 36198:case 36298:case 36306:case 35682:return rA;case 35679:case 36299:case 36307:return sA;case 35680:case 36300:case 36308:case 36293:return oA;case 36289:case 36303:case 36311:case 36292:return aA}}function uA(t,e){t.uniform1fv(this.addr,e)}function cA(t,e){const n=to(e,this.size,2);t.uniform2fv(this.addr,n)}function hA(t,e){const n=to(e,this.size,3);t.uniform3fv(this.addr,n)}function fA(t,e){const n=to(e,this.size,4);t.uniform4fv(this.addr,n)}function dA(t,e){const n=to(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function pA(t,e){const n=to(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function mA(t,e){const n=to(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function gA(t,e){t.uniform1iv(this.addr,e)}function vA(t,e){t.uniform2iv(this.addr,e)}function _A(t,e){t.uniform3iv(this.addr,e)}function xA(t,e){t.uniform4iv(this.addr,e)}function yA(t,e){t.uniform1uiv(this.addr,e)}function SA(t,e){t.uniform2uiv(this.addr,e)}function MA(t,e){t.uniform3uiv(this.addr,e)}function EA(t,e){t.uniform4uiv(this.addr,e)}function wA(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||X_,s[o])}function TA(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Y_,s[o])}function AA(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Z_,s[o])}function CA(t,e,n){const i=this.cache,r=e.length,s=ku(n,r);Lt(i,s)||(t.uniform1iv(this.addr,s),Dt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||$_,s[o])}function RA(t){switch(t){case 5126:return uA;case 35664:return cA;case 35665:return hA;case 35666:return fA;case 35674:return dA;case 35675:return pA;case 35676:return mA;case 5124:case 35670:return gA;case 35667:case 35671:return vA;case 35668:case 35672:return _A;case 35669:case 35673:return xA;case 5125:return yA;case 36294:return SA;case 36295:return MA;case 36296:return EA;case 35678:case 36198:case 36298:case 36306:case 35682:return wA;case 35679:case 36299:case 36307:return TA;case 35680:case 36300:case 36308:case 36293:return AA;case 36289:case 36303:case 36311:case 36292:return CA}}class bA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=lA(n.type)}}class PA{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=RA(n.type)}}class LA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bc=/(\w+)(\])?(\[|\.)?/g;function rg(t,e){t.seq.push(e),t.map[e.id]=e}function DA(t,e,n){const i=t.name,r=i.length;for(Bc.lastIndex=0;;){const s=Bc.exec(i),o=Bc.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){rg(n,u===void 0?new bA(a,t,e):new PA(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new LA(a),rg(n,f)),n=f}}}class zl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);DA(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function sg(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const NA=37297;let IA=0;function UA(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const og=new Ge;function OA(t){Je._getMatrix(og,Je.workingColorSpace,t);const e=`mat3( ${og.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case Ou:return[e,"LinearTransferOETF"];case at:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function ag(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+UA(t.getShaderSource(e),o)}else return r}function FA(t,e){const n=OA(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function kA(t,e){let n;switch(e){case kS:n="Linear";break;case zS:n="Reinhard";break;case BS:n="Cineon";break;case HS:n="ACESFilmic";break;case GS:n="AgX";break;case WS:n="Neutral";break;case VS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const fl=new N;function zA(){Je.getLuminanceCoefficients(fl);const t=fl.x.toFixed(4),e=fl.y.toFixed(4),n=fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function BA(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(bo).join(`
`)}function HA(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function VA(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function bo(t){return t!==""}function lg(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ug(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const GA=/^[ \t]*#include +<([\w\d./]+)>/gm;function If(t){return t.replace(GA,jA)}const WA=new Map;function jA(t,e){let n=je[e];if(n===void 0){const i=WA.get(e);if(i!==void 0)n=je[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return If(n)}const XA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function cg(t){return t.replace(XA,$A)}function $A(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function hg(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function YA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===__?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===vS?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===gi&&(e="SHADOWMAP_TYPE_VSM"),e}function ZA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Xs:case $s:e="ENVMAP_TYPE_CUBE";break;case Uu:e="ENVMAP_TYPE_CUBE_UV";break}return e}function qA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function KA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case x_:e="ENVMAP_BLENDING_MULTIPLY";break;case OS:e="ENVMAP_BLENDING_MIX";break;case FS:e="ENVMAP_BLENDING_ADD";break}return e}function JA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function QA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=YA(n),u=ZA(n),c=qA(n),f=KA(n),h=JA(n),p=BA(n),g=HA(s),y=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(bo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(bo).join(`
`),d.length>0&&(d+=`
`)):(m=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(bo).join(`
`),d=[hg(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rr?"#define TONE_MAPPING":"",n.toneMapping!==rr?je.tonemapping_pars_fragment:"",n.toneMapping!==rr?kA("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",je.colorspace_pars_fragment,FA("linearToOutputTexel",n.outputColorSpace),zA(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(bo).join(`
`)),o=If(o),o=lg(o,n),o=ug(o,n),a=If(a),a=lg(a,n),a=ug(a,n),o=cg(o),a=cg(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Em?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Em?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+o,x=v+d+a,b=sg(r,r.VERTEX_SHADER,_),A=sg(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(L){if(t.debug.checkShaderErrors){const X=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(A).trim();let Z=!0,H=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if(Z=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const K=ag(r,b,"vertex"),D=ag(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+X+`
`+K+`
`+D)}else X!==""?console.warn("THREE.WebGLProgram: Program Info Log:",X):(k===""||W==="")&&(H=!1);H&&(L.diagnostics={runnable:Z,programLog:X,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:d}})}r.deleteShader(b),r.deleteShader(A),R=new zl(r,y),w=VA(r,y)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,NA)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=IA++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let eC=0;class tC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new nC(e),n.set(e,i)),i}}class nC{constructor(e){this.id=eC++,this.code=e,this.usedTimes=0}}function iC(t,e,n,i,r,s,o){const a=new O_,l=new tC,u=new Set,c=[],f=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return u.add(w),w===0?"uv":`uv${w}`}function m(w,S,L,X,k){const W=X.fog,Z=k.geometry,H=w.isMeshStandardMaterial?X.environment:null,K=(w.isMeshStandardMaterial?n:e).get(w.envMap||H),D=K&&K.mapping===Uu?K.image.height:null,V=g[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const q=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,oe=q!==void 0?q.length:0;let Ae=0;Z.morphAttributes.position!==void 0&&(Ae=1),Z.morphAttributes.normal!==void 0&&(Ae=2),Z.morphAttributes.color!==void 0&&(Ae=3);let Ze,j,re,_e;if(V){const rt=Qn[V];Ze=rt.vertexShader,j=rt.fragmentShader}else Ze=w.vertexShader,j=w.fragmentShader,l.update(w),re=l.getVertexShaderID(w),_e=l.getFragmentShaderID(w);const le=t.getRenderTarget(),Ne=t.state.buffers.depth.getReversed(),ke=k.isInstancedMesh===!0,Oe=k.isBatchedMesh===!0,Ke=!!w.map,Q=!!w.matcap,ue=!!K,P=!!w.aoMap,Le=!!w.lightMap,ne=!!w.bumpMap,Me=!!w.normalMap,he=!!w.displacementMap,Ie=!!w.emissiveMap,xe=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,$=w.dispersion>0,ee=w.iridescence>0,Y=w.sheen>0,Ce=w.transmission>0,de=M&&!!w.anisotropyMap,ye=F&&!!w.clearcoatMap,$e=F&&!!w.clearcoatNormalMap,se=F&&!!w.clearcoatRoughnessMap,Ee=ee&&!!w.iridescenceMap,Ue=ee&&!!w.iridescenceThicknessMap,Fe=Y&&!!w.sheenColorMap,we=Y&&!!w.sheenRoughnessMap,qe=!!w.specularMap,We=!!w.specularColorMap,ct=!!w.specularIntensityMap,I=Ce&&!!w.transmissionMap,pe=Ce&&!!w.thicknessMap,G=!!w.gradientMap,J=!!w.alphaMap,ve=w.alphaTest>0,me=!!w.alphaHash,He=!!w.extensions;let Et=rr;w.toneMapped&&(le===null||le.isXRRenderTarget===!0)&&(Et=t.toneMapping);const Ht={shaderID:V,shaderType:w.type,shaderName:w.name,vertexShader:Ze,fragmentShader:j,defines:w.defines,customVertexShaderID:re,customFragmentShaderID:_e,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Oe,batchingColor:Oe&&k._colorsTexture!==null,instancing:ke,instancingColor:ke&&k.instanceColor!==null,instancingMorph:ke&&k.morphTexture!==null,supportsVertexTextures:h,outputColorSpace:le===null?t.outputColorSpace:le.isXRRenderTarget===!0?le.texture.colorSpace:eo,alphaToCoverage:!!w.alphaToCoverage,map:Ke,matcap:Q,envMap:ue,envMapMode:ue&&K.mapping,envMapCubeUVHeight:D,aoMap:P,lightMap:Le,bumpMap:ne,normalMap:Me,displacementMap:h&&he,emissiveMap:Ie,normalMapObjectSpace:Me&&w.normalMapType===ZS,normalMapTangentSpace:Me&&w.normalMapType===YS,metalnessMap:xe,roughnessMap:C,anisotropy:M,anisotropyMap:de,clearcoat:F,clearcoatMap:ye,clearcoatNormalMap:$e,clearcoatRoughnessMap:se,dispersion:$,iridescence:ee,iridescenceMap:Ee,iridescenceThicknessMap:Ue,sheen:Y,sheenColorMap:Fe,sheenRoughnessMap:we,specularMap:qe,specularColorMap:We,specularIntensityMap:ct,transmission:Ce,transmissionMap:I,thicknessMap:pe,gradientMap:G,opaque:w.transparent===!1&&w.blending===Is&&w.alphaToCoverage===!1,alphaMap:J,alphaTest:ve,alphaHash:me,combine:w.combine,mapUv:Ke&&y(w.map.channel),aoMapUv:P&&y(w.aoMap.channel),lightMapUv:Le&&y(w.lightMap.channel),bumpMapUv:ne&&y(w.bumpMap.channel),normalMapUv:Me&&y(w.normalMap.channel),displacementMapUv:he&&y(w.displacementMap.channel),emissiveMapUv:Ie&&y(w.emissiveMap.channel),metalnessMapUv:xe&&y(w.metalnessMap.channel),roughnessMapUv:C&&y(w.roughnessMap.channel),anisotropyMapUv:de&&y(w.anisotropyMap.channel),clearcoatMapUv:ye&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:se&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:Ee&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:Fe&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:we&&y(w.sheenRoughnessMap.channel),specularMapUv:qe&&y(w.specularMap.channel),specularColorMapUv:We&&y(w.specularColorMap.channel),specularIntensityMapUv:ct&&y(w.specularIntensityMap.channel),transmissionMapUv:I&&y(w.transmissionMap.channel),thicknessMapUv:pe&&y(w.thicknessMap.channel),alphaMapUv:J&&y(w.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Me||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Z.attributes.uv&&(Ke||J),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Ne,skinning:k.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Ae,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Et,decodeVideoTexture:Ke&&w.map.isVideoTexture===!0&&Je.getTransfer(w.map.colorSpace)===at,decodeVideoTextureEmissive:Ie&&w.emissiveMap.isVideoTexture===!0&&Je.getTransfer(w.emissiveMap.colorSpace)===at,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===ti,flipSided:w.side===hn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:He&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&w.extensions.multiDraw===!0||Oe)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ht.vertexUv1s=u.has(1),Ht.vertexUv2s=u.has(2),Ht.vertexUv3s=u.has(3),u.clear(),Ht}function d(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const L in w.defines)S.push(L),S.push(w.defines[L]);return w.isRawShaderMaterial===!1&&(v(S,w),_(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function v(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function _(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=g[w.type];let L;if(S){const X=Qn[S];L=BM.clone(X.uniforms)}else L=w.uniforms;return L}function b(w,S){let L;for(let X=0,k=c.length;X<k;X++){const W=c[X];if(W.cacheKey===S){L=W,++L.usedTimes;break}}return L===void 0&&(L=new QA(t,S,w,s),c.push(L)),L}function A(w){if(--w.usedTimes===0){const S=c.indexOf(w);c[S]=c[c.length-1],c.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:c,dispose:R}}function rC(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function sC(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function fg(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function dg(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,y,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:y,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=y,d.group=m),e++,d}function a(f,h,p,g,y,m){const d=o(f,h,p,g,y,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,y,m){const d=o(f,h,p,g,y,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function u(f,h){n.length>1&&n.sort(f||sC),i.length>1&&i.sort(h||fg),r.length>1&&r.sort(h||fg)}function c(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function oC(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new dg,t.set(i,[o])):r>=s.length?(o=new dg,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function aC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new tt};break;case"SpotLight":n={position:new N,direction:new N,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function lC(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let uC=0;function cC(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hC(t){const e=new aC,n=lC(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)i.probe.push(new N);const r=new N,s=new vt,o=new vt;function a(u){let c=0,f=0,h=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,g=0,y=0,m=0,d=0,v=0,_=0,x=0,b=0,A=0,T=0;u.sort(cC);for(let w=0,S=u.length;w<S;w++){const L=u[w],X=L.color,k=L.intensity,W=L.distance,Z=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)c+=X.r*k,f+=X.g*k,h+=X.b*k;else if(L.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(L.sh.coefficients[H],k);T++}else if(L.isDirectionalLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const K=L.shadow,D=n.get(L);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.directionalShadow[p]=D,i.directionalShadowMap[p]=Z,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=H,p++}else if(L.isSpotLight){const H=e.get(L);H.position.setFromMatrixPosition(L.matrixWorld),H.color.copy(X).multiplyScalar(k),H.distance=W,H.coneCos=Math.cos(L.angle),H.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),H.decay=L.decay,i.spot[y]=H;const K=L.shadow;if(L.map&&(i.spotLightMap[b]=L.map,b++,K.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[y]=K.matrix,L.castShadow){const D=n.get(L);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,i.spotShadow[y]=D,i.spotShadowMap[y]=Z,x++}y++}else if(L.isRectAreaLight){const H=e.get(L);H.color.copy(X).multiplyScalar(k),H.halfWidth.set(L.width*.5,0,0),H.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=H,m++}else if(L.isPointLight){const H=e.get(L);if(H.color.copy(L.color).multiplyScalar(L.intensity),H.distance=L.distance,H.decay=L.decay,L.castShadow){const K=L.shadow,D=n.get(L);D.shadowIntensity=K.intensity,D.shadowBias=K.bias,D.shadowNormalBias=K.normalBias,D.shadowRadius=K.radius,D.shadowMapSize=K.mapSize,D.shadowCameraNear=K.camera.near,D.shadowCameraFar=K.camera.far,i.pointShadow[g]=D,i.pointShadowMap[g]=Z,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=H,g++}else if(L.isHemisphereLight){const H=e.get(L);H.skyColor.copy(L.color).multiplyScalar(k),H.groundColor.copy(L.groundColor).multiplyScalar(k),i.hemi[d]=H,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=fe.LTC_FLOAT_1,i.rectAreaLTC2=fe.LTC_FLOAT_2):(i.rectAreaLTC1=fe.LTC_HALF_1,i.rectAreaLTC2=fe.LTC_HALF_2)),i.ambient[0]=c,i.ambient[1]=f,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=T,i.version=uC++)}function l(u,c){let f=0,h=0,p=0,g=0,y=0;const m=c.matrixWorldInverse;for(let d=0,v=u.length;d<v;d++){const _=u[d];if(_.isDirectionalLight){const x=i.directional[f];x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),f++}else if(_.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const x=i.rectArea[g];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(_.width*.5,0,0),x.halfHeight.set(0,_.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const x=i.point[h];x.position.setFromMatrixPosition(_.matrixWorld),x.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(_.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function pg(t){const e=new hC(t),n=[],i=[];function r(c){u.camera=c,n.length=0,i.length=0}function s(c){n.push(c)}function o(c){i.push(c)}function a(){e.setup(n)}function l(c){e.setupView(n,c)}const u={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function fC(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new pg(t),e.set(r,[a])):s>=o.length?(a=new pg(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class dC extends Ea{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=XS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class pC extends Ea{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const mC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gC=`uniform sampler2D shadow_pass;
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
}`;function vC(t,e,n){let i=new Gd;const r=new ie,s=new ie,o=new ut,a=new dC({depthPacking:$S}),l=new pC,u={},c=n.maxTextureSize,f={[ar]:hn,[hn]:ar,[ti]:ti},h=new lr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:mC,fragmentShader:gC}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new Zn;g.setAttribute("position",new $n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new bn(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=__;let d=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),X=t.state;X.setBlending(ir),X.buffers.color.setClear(1,1,1,1),X.buffers.depth.setTest(!0),X.setScissorTest(!1);const k=d!==gi&&this.type===gi,W=d===gi&&this.type!==gi;for(let Z=0,H=A.length;Z<H;Z++){const K=A[Z],D=K.shadow;if(D===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(D.autoUpdate===!1&&D.needsUpdate===!1)continue;r.copy(D.mapSize);const V=D.getFrameExtents();if(r.multiply(V),s.copy(D.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/V.x),r.x=s.x*V.x,D.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/V.y),r.y=s.y*V.y,D.mapSize.y=s.y)),D.map===null||k===!0||W===!0){const oe=this.type!==gi?{minFilter:Xn,magFilter:Xn}:{};D.map!==null&&D.map.dispose(),D.map=new kr(r.x,r.y,oe),D.map.texture.name=K.name+".shadowMap",D.camera.updateProjectionMatrix()}t.setRenderTarget(D.map),t.clear();const q=D.getViewportCount();for(let oe=0;oe<q;oe++){const Ae=D.getViewport(oe);o.set(s.x*Ae.x,s.y*Ae.y,s.x*Ae.z,s.y*Ae.w),X.viewport(o),D.updateMatrices(K,oe),i=D.getFrustum(),x(T,R,D.camera,K,this.type)}D.isPointLightShadow!==!0&&this.type===gi&&v(D,R),D.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,L)};function v(A,T){const R=e.update(y);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new kr(r.x,r.y)),h.uniforms.shadow_pass.value=A.map.texture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,h,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,p,y,null)}function _(A,T,R,w){let S=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)S=L;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const X=S.uuid,k=T.uuid;let W=u[X];W===void 0&&(W={},u[X]=W);let Z=W[k];Z===void 0&&(Z=S.clone(),W[k]=Z,T.addEventListener("dispose",b)),S=Z}if(S.visible=T.visible,S.wireframe=T.wireframe,w===gi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:f[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const X=t.properties.get(S);X.light=R}return S}function x(A,T,R,w,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===gi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const Z=k.groups;for(let H=0,K=Z.length;H<K;H++){const D=Z[H],V=W[D.materialIndex];if(V&&V.visible){const q=_(A,V,w,S);A.onBeforeShadow(t,A,T,R,k,q,D),t.renderBufferDirect(R,null,k,q,A,D),A.onAfterShadow(t,A,T,R,k,q,D)}}}else if(W.visible){const Z=_(A,W,w,S);A.onBeforeShadow(t,A,T,R,k,Z,null),t.renderBufferDirect(R,null,k,Z,A,null),A.onAfterShadow(t,A,T,R,k,Z,null)}}const X=A.children;for(let k=0,W=X.length;k<W;k++)x(X[k],T,R,w,S)}function b(A){A.target.removeEventListener("dispose",b);for(const R in u){const w=u[R],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const _C={[Zh]:qh,[Kh]:ef,[Jh]:tf,[js]:Qh,[qh]:Zh,[ef]:Kh,[tf]:Jh,[Qh]:js};function xC(t,e){function n(){let I=!1;const pe=new ut;let G=null;const J=new ut(0,0,0,0);return{setMask:function(ve){G!==ve&&!I&&(t.colorMask(ve,ve,ve,ve),G=ve)},setLocked:function(ve){I=ve},setClear:function(ve,me,He,Et,Ht){Ht===!0&&(ve*=Et,me*=Et,He*=Et),pe.set(ve,me,He,Et),J.equals(pe)===!1&&(t.clearColor(ve,me,He,Et),J.copy(pe))},reset:function(){I=!1,G=null,J.set(-1,0,0,0)}}}function i(){let I=!1,pe=!1,G=null,J=null,ve=null;return{setReversed:function(me){if(pe!==me){const He=e.get("EXT_clip_control");pe?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT);const Et=ve;ve=null,this.setClear(Et)}pe=me},getReversed:function(){return pe},setTest:function(me){me?le(t.DEPTH_TEST):Ne(t.DEPTH_TEST)},setMask:function(me){G!==me&&!I&&(t.depthMask(me),G=me)},setFunc:function(me){if(pe&&(me=_C[me]),J!==me){switch(me){case Zh:t.depthFunc(t.NEVER);break;case qh:t.depthFunc(t.ALWAYS);break;case Kh:t.depthFunc(t.LESS);break;case js:t.depthFunc(t.LEQUAL);break;case Jh:t.depthFunc(t.EQUAL);break;case Qh:t.depthFunc(t.GEQUAL);break;case ef:t.depthFunc(t.GREATER);break;case tf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}J=me}},setLocked:function(me){I=me},setClear:function(me){ve!==me&&(pe&&(me=1-me),t.clearDepth(me),ve=me)},reset:function(){I=!1,G=null,J=null,ve=null,pe=!1}}}function r(){let I=!1,pe=null,G=null,J=null,ve=null,me=null,He=null,Et=null,Ht=null;return{setTest:function(rt){I||(rt?le(t.STENCIL_TEST):Ne(t.STENCIL_TEST))},setMask:function(rt){pe!==rt&&!I&&(t.stencilMask(rt),pe=rt)},setFunc:function(rt,Nn,li){(G!==rt||J!==Nn||ve!==li)&&(t.stencilFunc(rt,Nn,li),G=rt,J=Nn,ve=li)},setOp:function(rt,Nn,li){(me!==rt||He!==Nn||Et!==li)&&(t.stencilOp(rt,Nn,li),me=rt,He=Nn,Et=li)},setLocked:function(rt){I=rt},setClear:function(rt){Ht!==rt&&(t.clearStencil(rt),Ht=rt)},reset:function(){I=!1,pe=null,G=null,J=null,ve=null,me=null,He=null,Et=null,Ht=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,u=new WeakMap;let c={},f={},h=new WeakMap,p=[],g=null,y=!1,m=null,d=null,v=null,_=null,x=null,b=null,A=null,T=new tt(0,0,0),R=0,w=!1,S=null,L=null,X=null,k=null,W=null;const Z=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,K=0;const D=t.getParameter(t.VERSION);D.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(D)[1]),H=K>=1):D.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),H=K>=2);let V=null,q={};const oe=t.getParameter(t.SCISSOR_BOX),Ae=t.getParameter(t.VIEWPORT),Ze=new ut().fromArray(oe),j=new ut().fromArray(Ae);function re(I,pe,G,J){const ve=new Uint8Array(4),me=t.createTexture();t.bindTexture(I,me),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let He=0;He<G;He++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(pe,0,t.RGBA,1,1,J,0,t.RGBA,t.UNSIGNED_BYTE,ve):t.texImage2D(pe+He,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ve);return me}const _e={};_e[t.TEXTURE_2D]=re(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=re(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[t.TEXTURE_2D_ARRAY]=re(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=re(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),le(t.DEPTH_TEST),o.setFunc(js),ne(!1),Me(_m),le(t.CULL_FACE),P(ir);function le(I){c[I]!==!0&&(t.enable(I),c[I]=!0)}function Ne(I){c[I]!==!1&&(t.disable(I),c[I]=!1)}function ke(I,pe){return f[I]!==pe?(t.bindFramebuffer(I,pe),f[I]=pe,I===t.DRAW_FRAMEBUFFER&&(f[t.FRAMEBUFFER]=pe),I===t.FRAMEBUFFER&&(f[t.DRAW_FRAMEBUFFER]=pe),!0):!1}function Oe(I,pe){let G=p,J=!1;if(I){G=h.get(pe),G===void 0&&(G=[],h.set(pe,G));const ve=I.textures;if(G.length!==ve.length||G[0]!==t.COLOR_ATTACHMENT0){for(let me=0,He=ve.length;me<He;me++)G[me]=t.COLOR_ATTACHMENT0+me;G.length=ve.length,J=!0}}else G[0]!==t.BACK&&(G[0]=t.BACK,J=!0);J&&t.drawBuffers(G)}function Ke(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const Q={[Mr]:t.FUNC_ADD,[xS]:t.FUNC_SUBTRACT,[yS]:t.FUNC_REVERSE_SUBTRACT};Q[SS]=t.MIN,Q[MS]=t.MAX;const ue={[ES]:t.ZERO,[wS]:t.ONE,[TS]:t.SRC_COLOR,[$h]:t.SRC_ALPHA,[LS]:t.SRC_ALPHA_SATURATE,[bS]:t.DST_COLOR,[CS]:t.DST_ALPHA,[AS]:t.ONE_MINUS_SRC_COLOR,[Yh]:t.ONE_MINUS_SRC_ALPHA,[PS]:t.ONE_MINUS_DST_COLOR,[RS]:t.ONE_MINUS_DST_ALPHA,[DS]:t.CONSTANT_COLOR,[NS]:t.ONE_MINUS_CONSTANT_COLOR,[IS]:t.CONSTANT_ALPHA,[US]:t.ONE_MINUS_CONSTANT_ALPHA};function P(I,pe,G,J,ve,me,He,Et,Ht,rt){if(I===ir){y===!0&&(Ne(t.BLEND),y=!1);return}if(y===!1&&(le(t.BLEND),y=!0),I!==_S){if(I!==m||rt!==w){if((d!==Mr||x!==Mr)&&(t.blendEquation(t.FUNC_ADD),d=Mr,x=Mr),rt)switch(I){case Is:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xm:t.blendFunc(t.ONE,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Is:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case xm:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case ym:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Sm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}v=null,_=null,b=null,A=null,T.set(0,0,0),R=0,m=I,w=rt}return}ve=ve||pe,me=me||G,He=He||J,(pe!==d||ve!==x)&&(t.blendEquationSeparate(Q[pe],Q[ve]),d=pe,x=ve),(G!==v||J!==_||me!==b||He!==A)&&(t.blendFuncSeparate(ue[G],ue[J],ue[me],ue[He]),v=G,_=J,b=me,A=He),(Et.equals(T)===!1||Ht!==R)&&(t.blendColor(Et.r,Et.g,Et.b,Ht),T.copy(Et),R=Ht),m=I,w=!1}function Le(I,pe){I.side===ti?Ne(t.CULL_FACE):le(t.CULL_FACE);let G=I.side===hn;pe&&(G=!G),ne(G),I.blending===Is&&I.transparent===!1?P(ir):P(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const J=I.stencilWrite;a.setTest(J),J&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ie(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?le(t.SAMPLE_ALPHA_TO_COVERAGE):Ne(t.SAMPLE_ALPHA_TO_COVERAGE)}function ne(I){S!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),S=I)}function Me(I){I!==mS?(le(t.CULL_FACE),I!==L&&(I===_m?t.cullFace(t.BACK):I===gS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ne(t.CULL_FACE),L=I}function he(I){I!==X&&(H&&t.lineWidth(I),X=I)}function Ie(I,pe,G){I?(le(t.POLYGON_OFFSET_FILL),(k!==pe||W!==G)&&(t.polygonOffset(pe,G),k=pe,W=G)):Ne(t.POLYGON_OFFSET_FILL)}function xe(I){I?le(t.SCISSOR_TEST):Ne(t.SCISSOR_TEST)}function C(I){I===void 0&&(I=t.TEXTURE0+Z-1),V!==I&&(t.activeTexture(I),V=I)}function M(I,pe,G){G===void 0&&(V===null?G=t.TEXTURE0+Z-1:G=V);let J=q[G];J===void 0&&(J={type:void 0,texture:void 0},q[G]=J),(J.type!==I||J.texture!==pe)&&(V!==G&&(t.activeTexture(G),V=G),t.bindTexture(I,pe||_e[I]),J.type=I,J.texture=pe)}function F(){const I=q[V];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function $(){try{t.compressedTexImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ee(){try{t.compressedTexImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ce(){try{t.texSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function de(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ye(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function se(){try{t.texStorage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{t.texImage2D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ue(){try{t.texImage3D.apply(t,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Fe(I){Ze.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),Ze.copy(I))}function we(I){j.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function qe(I,pe){let G=u.get(pe);G===void 0&&(G=new WeakMap,u.set(pe,G));let J=G.get(I);J===void 0&&(J=t.getUniformBlockIndex(pe,I.name),G.set(I,J))}function We(I,pe){const J=u.get(pe).get(I);l.get(pe)!==J&&(t.uniformBlockBinding(pe,J,I.__bindingPointIndex),l.set(pe,J))}function ct(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},V=null,q={},f={},h=new WeakMap,p=[],g=null,y=!1,m=null,d=null,v=null,_=null,x=null,b=null,A=null,T=new tt(0,0,0),R=0,w=!1,S=null,L=null,X=null,k=null,W=null,Ze.set(0,0,t.canvas.width,t.canvas.height),j.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:le,disable:Ne,bindFramebuffer:ke,drawBuffers:Oe,useProgram:Ke,setBlending:P,setMaterial:Le,setFlipSided:ne,setCullFace:Me,setLineWidth:he,setPolygonOffset:Ie,setScissorTest:xe,activeTexture:C,bindTexture:M,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:ee,texImage2D:Ee,texImage3D:Ue,updateUBOMapping:qe,uniformBlockBinding:We,texStorage2D:$e,texStorage3D:se,texSubImage2D:Y,texSubImage3D:Ce,compressedTexSubImage2D:de,compressedTexSubImage3D:ye,scissor:Fe,viewport:we,reset:ct}}function mg(t,e,n,i){const r=yC(i);switch(n){case w_:return t*e;case A_:return t*e;case C_:return t*e*2;case R_:return t*e/r.components*r.byteLength;case kd:return t*e/r.components*r.byteLength;case b_:return t*e*2/r.components*r.byteLength;case zd:return t*e*2/r.components*r.byteLength;case T_:return t*e*3/r.components*r.byteLength;case Gn:return t*e*4/r.components*r.byteLength;case Bd:return t*e*4/r.components*r.byteLength;case Il:case Ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Ol:case Fl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case lf:case cf:return Math.max(t,16)*Math.max(e,8)/4;case af:case uf:return Math.max(t,8)*Math.max(e,8)/2;case hf:case ff:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case pf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case mf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case gf:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case vf:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case _f:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case xf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case yf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Sf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Mf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ef:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case wf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Tf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Af:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Cf:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kl:case Rf:case bf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case P_:case Pf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Lf:case Df:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function yC(t){switch(t){case bi:case S_:return{byteLength:1,components:1};case aa:case M_:case Sa:return{byteLength:2,components:1};case Od:case Fd:return{byteLength:2,components:4};case Fr:case Ud:case Si:return{byteLength:4,components:1};case E_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function SC(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ie,c=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,M){return p?new OffscreenCanvas(C,M):ua("canvas")}function y(C,M,F){let $=1;const ee=xe(C);if((ee.width>F||ee.height>F)&&($=F/Math.max(ee.width,ee.height)),$<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor($*ee.width),Ce=Math.floor($*ee.height);f===void 0&&(f=g(Y,Ce));const de=M?g(Y,Ce):f;return de.width=Y,de.height=Ce,de.getContext("2d").drawImage(C,0,0,Y,Ce),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Y+"x"+Ce+")."),de}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){t.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(C,M,F,$,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=M;if(M===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),M===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),F===t.UNSIGNED_INT&&(Y=t.RGB32UI),F===t.BYTE&&(Y=t.RGB8I),F===t.SHORT&&(Y=t.RGB16I),F===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),F===t.UNSIGNED_INT&&(Y=t.RGBA32UI),F===t.BYTE&&(Y=t.RGBA8I),F===t.SHORT&&(Y=t.RGBA16I),F===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const Ce=ee?Ou:Je.getTransfer($);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=Ce===at?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(C,M){let F;return C?M===null||M===Fr||M===Ys?F=t.DEPTH24_STENCIL8:M===Si?F=t.DEPTH32F_STENCIL8:M===aa&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Fr||M===Ys?F=t.DEPTH_COMPONENT24:M===Si?F=t.DEPTH_COMPONENT32F:M===aa&&(F=t.DEPTH_COMPONENT16),F}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Xn&&C.minFilter!==ni?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&c.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),S(M)}function R(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,$=h.get(F);if($){const ee=$[M.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&w(C),Object.keys($).length===0&&h.delete(F)}i.remove(C)}function w(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const F=C.source,$=h.get(F);delete $[M.__cacheKey],o.memory.textures--}function S(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(M.__webglFramebuffer[$]))for(let ee=0;ee<M.__webglFramebuffer[$].length;ee++)t.deleteFramebuffer(M.__webglFramebuffer[$][ee]);else t.deleteFramebuffer(M.__webglFramebuffer[$]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[$])}else{if(Array.isArray(M.__webglFramebuffer))for(let $=0;$<M.__webglFramebuffer.length;$++)t.deleteFramebuffer(M.__webglFramebuffer[$]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let $=0;$<M.__webglColorRenderbuffer.length;$++)M.__webglColorRenderbuffer[$]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[$]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let $=0,ee=F.length;$<ee;$++){const Y=i.get(F[$]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[$])}i.remove(C)}let L=0;function X(){L=0}function k(){const C=L;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function Z(C,M){const F=i.get(C);if(C.isVideoTexture&&he(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const $=C.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(F,C,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function H(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function K(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){j(F,C,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function D(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){re(F,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const V={[sf]:t.REPEAT,[Cr]:t.CLAMP_TO_EDGE,[of]:t.MIRRORED_REPEAT},q={[Xn]:t.NEAREST,[jS]:t.NEAREST_MIPMAP_NEAREST,[Xa]:t.NEAREST_MIPMAP_LINEAR,[ni]:t.LINEAR,[pc]:t.LINEAR_MIPMAP_NEAREST,[Rr]:t.LINEAR_MIPMAP_LINEAR},oe={[qS]:t.NEVER,[nM]:t.ALWAYS,[KS]:t.LESS,[L_]:t.LEQUAL,[JS]:t.EQUAL,[tM]:t.GEQUAL,[QS]:t.GREATER,[eM]:t.NOTEQUAL};function Ae(C,M){if(M.type===Si&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ni||M.magFilter===pc||M.magFilter===Xa||M.magFilter===Rr||M.minFilter===ni||M.minFilter===pc||M.minFilter===Xa||M.minFilter===Rr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,V[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,V[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,V[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,oe[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Xn||M.minFilter!==Xa&&M.minFilter!==Rr||M.type===Si&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ze(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const $=M.source;let ee=h.get($);ee===void 0&&(ee={},h.set($,ee));const Y=W(M);if(Y!==C.__cacheKey){ee[Y]===void 0&&(ee[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),ee[Y].usedTimes++;const Ce=ee[C.__cacheKey];Ce!==void 0&&(ee[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&w(M)),C.__cacheKey=Y,C.__webglTexture=ee[Y].texture}return F}function j(C,M,F){let $=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&($=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&($=t.TEXTURE_3D);const ee=Ze(C,M),Y=M.source;n.bindTexture($,C.__webglTexture,t.TEXTURE0+F);const Ce=i.get(Y);if(Y.version!==Ce.__version||ee===!0){n.activeTexture(t.TEXTURE0+F);const de=Je.getPrimaries(Je.workingColorSpace),ye=M.colorSpace===Xi?null:Je.getPrimaries(M.colorSpace),$e=M.colorSpace===Xi||de===ye?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let se=y(M.image,!1,r.maxTextureSize);se=Ie(M,se);const Ee=s.convert(M.format,M.colorSpace),Ue=s.convert(M.type);let Fe=_(M.internalFormat,Ee,Ue,M.colorSpace,M.isVideoTexture);Ae($,M);let we;const qe=M.mipmaps,We=M.isVideoTexture!==!0,ct=Ce.__version===void 0||ee===!0,I=Y.dataReady,pe=b(M,se);if(M.isDepthTexture)Fe=x(M.format===Zs,M.type),ct&&(We?n.texStorage2D(t.TEXTURE_2D,1,Fe,se.width,se.height):n.texImage2D(t.TEXTURE_2D,0,Fe,se.width,se.height,0,Ee,Ue,null));else if(M.isDataTexture)if(qe.length>0){We&&ct&&n.texStorage2D(t.TEXTURE_2D,pe,Fe,qe[0].width,qe[0].height);for(let G=0,J=qe.length;G<J;G++)we=qe[G],We?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,we.width,we.height,Ee,Ue,we.data):n.texImage2D(t.TEXTURE_2D,G,Fe,we.width,we.height,0,Ee,Ue,we.data);M.generateMipmaps=!1}else We?(ct&&n.texStorage2D(t.TEXTURE_2D,pe,Fe,se.width,se.height),I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,se.width,se.height,Ee,Ue,se.data)):n.texImage2D(t.TEXTURE_2D,0,Fe,se.width,se.height,0,Ee,Ue,se.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){We&&ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Fe,qe[0].width,qe[0].height,se.depth);for(let G=0,J=qe.length;G<J;G++)if(we=qe[G],M.format!==Gn)if(Ee!==null)if(We){if(I)if(M.layerUpdates.size>0){const ve=mg(we.width,we.height,M.format,M.type);for(const me of M.layerUpdates){const He=we.data.subarray(me*ve/we.data.BYTES_PER_ELEMENT,(me+1)*ve/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,me,we.width,we.height,1,Ee,He)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,we.width,we.height,se.depth,Ee,we.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,G,Fe,we.width,we.height,se.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else We?I&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,G,0,0,0,we.width,we.height,se.depth,Ee,Ue,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,G,Fe,we.width,we.height,se.depth,0,Ee,Ue,we.data)}else{We&&ct&&n.texStorage2D(t.TEXTURE_2D,pe,Fe,qe[0].width,qe[0].height);for(let G=0,J=qe.length;G<J;G++)we=qe[G],M.format!==Gn?Ee!==null?We?I&&n.compressedTexSubImage2D(t.TEXTURE_2D,G,0,0,we.width,we.height,Ee,we.data):n.compressedTexImage2D(t.TEXTURE_2D,G,Fe,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):We?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,we.width,we.height,Ee,Ue,we.data):n.texImage2D(t.TEXTURE_2D,G,Fe,we.width,we.height,0,Ee,Ue,we.data)}else if(M.isDataArrayTexture)if(We){if(ct&&n.texStorage3D(t.TEXTURE_2D_ARRAY,pe,Fe,se.width,se.height,se.depth),I)if(M.layerUpdates.size>0){const G=mg(se.width,se.height,M.format,M.type);for(const J of M.layerUpdates){const ve=se.data.subarray(J*G/se.data.BYTES_PER_ELEMENT,(J+1)*G/se.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,J,se.width,se.height,1,Ee,Ue,ve)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,Ee,Ue,se.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Fe,se.width,se.height,se.depth,0,Ee,Ue,se.data);else if(M.isData3DTexture)We?(ct&&n.texStorage3D(t.TEXTURE_3D,pe,Fe,se.width,se.height,se.depth),I&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,Ee,Ue,se.data)):n.texImage3D(t.TEXTURE_3D,0,Fe,se.width,se.height,se.depth,0,Ee,Ue,se.data);else if(M.isFramebufferTexture){if(ct)if(We)n.texStorage2D(t.TEXTURE_2D,pe,Fe,se.width,se.height);else{let G=se.width,J=se.height;for(let ve=0;ve<pe;ve++)n.texImage2D(t.TEXTURE_2D,ve,Fe,G,J,0,Ee,Ue,null),G>>=1,J>>=1}}else if(qe.length>0){if(We&&ct){const G=xe(qe[0]);n.texStorage2D(t.TEXTURE_2D,pe,Fe,G.width,G.height)}for(let G=0,J=qe.length;G<J;G++)we=qe[G],We?I&&n.texSubImage2D(t.TEXTURE_2D,G,0,0,Ee,Ue,we):n.texImage2D(t.TEXTURE_2D,G,Fe,Ee,Ue,we);M.generateMipmaps=!1}else if(We){if(ct){const G=xe(se);n.texStorage2D(t.TEXTURE_2D,pe,Fe,G.width,G.height)}I&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,Ee,Ue,se)}else n.texImage2D(t.TEXTURE_2D,0,Fe,Ee,Ue,se);m(M)&&d($),Ce.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function re(C,M,F){if(M.image.length!==6)return;const $=Ze(C,M),ee=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const Y=i.get(ee);if(ee.version!==Y.__version||$===!0){n.activeTexture(t.TEXTURE0+F);const Ce=Je.getPrimaries(Je.workingColorSpace),de=M.colorSpace===Xi?null:Je.getPrimaries(M.colorSpace),ye=M.colorSpace===Xi||Ce===de?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,se=M.image[0]&&M.image[0].isDataTexture,Ee=[];for(let J=0;J<6;J++)!$e&&!se?Ee[J]=y(M.image[J],!0,r.maxCubemapSize):Ee[J]=se?M.image[J].image:M.image[J],Ee[J]=Ie(M,Ee[J]);const Ue=Ee[0],Fe=s.convert(M.format,M.colorSpace),we=s.convert(M.type),qe=_(M.internalFormat,Fe,we,M.colorSpace),We=M.isVideoTexture!==!0,ct=Y.__version===void 0||$===!0,I=ee.dataReady;let pe=b(M,Ue);Ae(t.TEXTURE_CUBE_MAP,M);let G;if($e){We&&ct&&n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,qe,Ue.width,Ue.height);for(let J=0;J<6;J++){G=Ee[J].mipmaps;for(let ve=0;ve<G.length;ve++){const me=G[ve];M.format!==Gn?Fe!==null?We?I&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,me.width,me.height,Fe,me.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,qe,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):We?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,0,0,me.width,me.height,Fe,we,me.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve,qe,me.width,me.height,0,Fe,we,me.data)}}}else{if(G=M.mipmaps,We&&ct){G.length>0&&pe++;const J=xe(Ee[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,pe,qe,J.width,J.height)}for(let J=0;J<6;J++)if(se){We?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Ee[J].width,Ee[J].height,Fe,we,Ee[J].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Ee[J].width,Ee[J].height,0,Fe,we,Ee[J].data);for(let ve=0;ve<G.length;ve++){const He=G[ve].image[J].image;We?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,He.width,He.height,Fe,we,He.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,qe,He.width,He.height,0,Fe,we,He.data)}}else{We?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Fe,we,Ee[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,qe,Fe,we,Ee[J]);for(let ve=0;ve<G.length;ve++){const me=G[ve];We?I&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,0,0,Fe,we,me.image[J]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+J,ve+1,qe,Fe,we,me.image[J])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),Y.__version=ee.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function _e(C,M,F,$,ee,Y){const Ce=s.convert(F.format,F.colorSpace),de=s.convert(F.type),ye=_(F.internalFormat,Ce,de,F.colorSpace),$e=i.get(M),se=i.get(F);if(se.__renderTarget=M,!$e.__hasExternalTextures){const Ee=Math.max(1,M.width>>Y),Ue=Math.max(1,M.height>>Y);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Y,ye,Ee,Ue,M.depth,0,Ce,de,null):n.texImage2D(ee,Y,ye,Ee,Ue,0,Ce,de,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,$,ee,se.__webglTexture,0,ne(M)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,$,ee,se.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function le(C,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const $=M.depthTexture,ee=$&&$.isDepthTexture?$.type:null,Y=x(M.stencilBuffer,ee),Ce=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,de=ne(M);Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,de,Y,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,de,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,C)}else{const $=M.textures;for(let ee=0;ee<$.length;ee++){const Y=$[ee],Ce=s.convert(Y.format,Y.colorSpace),de=s.convert(Y.type),ye=_(Y.internalFormat,Ce,de,Y.colorSpace),$e=ne(M);F&&Me(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,ye,M.width,M.height):Me(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,ye,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,ye,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Ne(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(M.depthTexture);$.__renderTarget=M,(!$.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),Z(M.depthTexture,0);const ee=$.__webglTexture,Y=ne(M);if(M.depthTexture.format===Us)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(M.depthTexture.format===Zs)Me(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function ke(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const $=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),$){const ee=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,$.removeEventListener("dispose",ee)};$.addEventListener("dispose",ee),M.__depthDisposeCallback=ee}M.__boundDepthTexture=$}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ne(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[$]),M.__webglDepthbuffer[$]===void 0)M.__webglDepthbuffer[$]=t.createRenderbuffer(),le(M.__webglDepthbuffer[$],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[$];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),le(M.__webglDepthbuffer,C,!1);else{const $=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ee=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ee),t.framebufferRenderbuffer(t.FRAMEBUFFER,$,t.RENDERBUFFER,ee)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(C,M,F){const $=i.get(C);M!==void 0&&_e($.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&ke(C)}function Ke(C){const M=C.texture,F=i.get(C),$=i.get(M);C.addEventListener("dispose",T);const ee=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||($.__webglTexture===void 0&&($.__webglTexture=t.createTexture()),$.__version=M.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[de]=[];for(let ye=0;ye<M.mipmaps.length;ye++)F.__webglFramebuffer[de][ye]=t.createFramebuffer()}else F.__webglFramebuffer[de]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let de=0;de<M.mipmaps.length;de++)F.__webglFramebuffer[de]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let de=0,ye=ee.length;de<ye;de++){const $e=i.get(ee[de]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Me(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const ye=ee[de];F.__webglColorRenderbuffer[de]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[de]);const $e=s.convert(ye.format,ye.colorSpace),se=s.convert(ye.type),Ee=_(ye.internalFormat,$e,se,ye.colorSpace,C.isXRRenderTarget===!0),Ue=ne(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ue,Ee,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+de,t.RENDERBUFFER,F.__webglColorRenderbuffer[de])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),le(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,$.__webglTexture),Ae(t.TEXTURE_CUBE_MAP,M);for(let de=0;de<6;de++)if(M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)_e(F.__webglFramebuffer[de][ye],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,ye);else _e(F.__webglFramebuffer[de],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let de=0,ye=ee.length;de<ye;de++){const $e=ee[de],se=i.get($e);n.bindTexture(t.TEXTURE_2D,se.__webglTexture),Ae(t.TEXTURE_2D,$e),_e(F.__webglFramebuffer,C,$e,t.COLOR_ATTACHMENT0+de,t.TEXTURE_2D,0),m($e)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let de=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,$.__webglTexture),Ae(de,M),M.mipmaps&&M.mipmaps.length>0)for(let ye=0;ye<M.mipmaps.length;ye++)_e(F.__webglFramebuffer[ye],C,M,t.COLOR_ATTACHMENT0,de,ye);else _e(F.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,de,0);m(M)&&d(de),n.unbindTexture()}C.depthBuffer&&ke(C)}function Q(C){const M=C.textures;for(let F=0,$=M.length;F<$;F++){const ee=M[F];if(m(ee)){const Y=v(C),Ce=i.get(ee).__webglTexture;n.bindTexture(Y,Ce),d(Y),n.unbindTexture()}}}const ue=[],P=[];function Le(C){if(C.samples>0){if(Me(C)===!1){const M=C.textures,F=C.width,$=C.height;let ee=t.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),de=M.length>1;if(de)for(let ye=0;ye<M.length;ye++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let ye=0;ye<M.length;ye++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),de){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const $e=i.get(M[ye]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,F,$,0,0,F,$,ee,t.NEAREST),l===!0&&(ue.length=0,P.length=0,ue.push(t.COLOR_ATTACHMENT0+ye),C.depthBuffer&&C.resolveDepthBuffer===!1&&(ue.push(Y),P.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ue))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),de)for(let ye=0;ye<M.length;ye++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[ye]);const $e=i.get(M[ye]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ye,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function ne(C){return Math.min(r.maxSamples,C.samples)}function Me(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function he(C){const M=o.render.frame;c.get(C)!==M&&(c.set(C,M),C.update())}function Ie(C,M){const F=C.colorSpace,$=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==eo&&F!==Xi&&(Je.getTransfer(F)===at?($!==Gn||ee!==bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function xe(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(u.width=C.naturalWidth||C.width,u.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(u.width=C.displayWidth,u.height=C.displayHeight):(u.width=C.width,u.height=C.height),u}this.allocateTextureUnit=k,this.resetTextureUnits=X,this.setTexture2D=Z,this.setTexture2DArray=H,this.setTexture3D=K,this.setTextureCube=D,this.rebindTextures=Oe,this.setupRenderTarget=Ke,this.updateRenderTargetMipmap=Q,this.updateMultisampleRenderTarget=Le,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=Me}function MC(t,e){function n(i,r=Xi){let s;const o=Je.getTransfer(r);if(i===bi)return t.UNSIGNED_BYTE;if(i===Od)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Fd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===E_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===S_)return t.BYTE;if(i===M_)return t.SHORT;if(i===aa)return t.UNSIGNED_SHORT;if(i===Ud)return t.INT;if(i===Fr)return t.UNSIGNED_INT;if(i===Si)return t.FLOAT;if(i===Sa)return t.HALF_FLOAT;if(i===w_)return t.ALPHA;if(i===T_)return t.RGB;if(i===Gn)return t.RGBA;if(i===A_)return t.LUMINANCE;if(i===C_)return t.LUMINANCE_ALPHA;if(i===Us)return t.DEPTH_COMPONENT;if(i===Zs)return t.DEPTH_STENCIL;if(i===R_)return t.RED;if(i===kd)return t.RED_INTEGER;if(i===b_)return t.RG;if(i===zd)return t.RG_INTEGER;if(i===Bd)return t.RGBA_INTEGER;if(i===Il||i===Ul||i===Ol||i===Fl)if(o===at)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Il)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Il)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ul)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Ol)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Fl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===af||i===lf||i===uf||i===cf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===af)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===lf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===uf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===cf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===hf||i===ff||i===df)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===hf||i===ff)return o===at?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===df)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===pf||i===mf||i===gf||i===vf||i===_f||i===xf||i===yf||i===Sf||i===Mf||i===Ef||i===wf||i===Tf||i===Af||i===Cf)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===pf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===mf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===gf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_f)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===xf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Sf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Mf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ef)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Tf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Af)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Cf)return o===at?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kl||i===Rf||i===bf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kl)return o===at?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Rf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===bf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===P_||i===Pf||i===Lf||i===Df)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===kl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Pf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Lf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Df)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Ys?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class EC extends gn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class dl extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const wC={type:"move"};class Hc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new dl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new dl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new dl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),d=this._getHandJoint(u,y);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const c=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],h=c.position.distanceTo(f.position),p=.02,g=.005;u.inputState.pinching&&h>p+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(wC)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new dl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const TC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,AC=`
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

}`;class CC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Qt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new lr({vertexShader:TC,fragmentShader:AC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new bn(new Fu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class RC extends Gr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,f=null,h=null,p=null,g=null;const y=new CC,m=n.getContextAttributes();let d=null,v=null;const _=[],x=[],b=new ie;let A=null;const T=new gn;T.viewport=new ut;const R=new gn;R.viewport=new ut;const w=[T,R],S=new EC;let L=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let re=_[j];return re===void 0&&(re=new Hc,_[j]=re),re.getTargetRaySpace()},this.getControllerGrip=function(j){let re=_[j];return re===void 0&&(re=new Hc,_[j]=re),re.getGripSpace()},this.getHand=function(j){let re=_[j];return re===void 0&&(re=new Hc,_[j]=re),re.getHandSpace()};function k(j){const re=x.indexOf(j.inputSource);if(re===-1)return;const _e=_[re];_e!==void 0&&(_e.update(j.inputSource,j.frame,u||o),_e.dispatchEvent({type:j.type,data:j.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",Z);for(let j=0;j<_.length;j++){const re=x[j];re!==null&&(x[j]=null,_[j].disconnect(re))}L=null,X=null,y.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,Ze.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){a=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",Z),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new kr(p.framebufferWidth,p.framebufferHeight,{format:Gn,type:bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,_e=null,le=null;m.depth&&(le=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?Zs:Us,_e=m.stencil?Ys:Fr);const Ne={colorFormat:n.RGBA8,depthFormat:le,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ne),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new kr(h.textureWidth,h.textureHeight,{format:Gn,type:bi,depthTexture:new j_(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),Ze.setContext(r),Ze.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Z(j){for(let re=0;re<j.removed.length;re++){const _e=j.removed[re],le=x.indexOf(_e);le>=0&&(x[le]=null,_[le].disconnect(_e))}for(let re=0;re<j.added.length;re++){const _e=j.added[re];let le=x.indexOf(_e);if(le===-1){for(let ke=0;ke<_.length;ke++)if(ke>=x.length){x.push(_e),le=ke;break}else if(x[ke]===null){x[ke]=_e,le=ke;break}if(le===-1)break}const Ne=_[le];Ne&&Ne.connect(_e)}}const H=new N,K=new N;function D(j,re,_e){H.setFromMatrixPosition(re.matrixWorld),K.setFromMatrixPosition(_e.matrixWorld);const le=H.distanceTo(K),Ne=re.projectionMatrix.elements,ke=_e.projectionMatrix.elements,Oe=Ne[14]/(Ne[10]-1),Ke=Ne[14]/(Ne[10]+1),Q=(Ne[9]+1)/Ne[5],ue=(Ne[9]-1)/Ne[5],P=(Ne[8]-1)/Ne[0],Le=(ke[8]+1)/ke[0],ne=Oe*P,Me=Oe*Le,he=le/(-P+Le),Ie=he*-P;if(re.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ie),j.translateZ(he),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Ne[10]===-1)j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const xe=Oe+he,C=Ke+he,M=ne-Ie,F=Me+(le-Ie),$=Q*Ke/C*xe,ee=ue*Ke/C*xe;j.projectionMatrix.makePerspective(M,F,$,ee,xe,C),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function V(j,re){re===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(re.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let re=j.near,_e=j.far;y.texture!==null&&(y.depthNear>0&&(re=y.depthNear),y.depthFar>0&&(_e=y.depthFar)),S.near=R.near=T.near=re,S.far=R.far=T.far=_e,(L!==S.near||X!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),L=S.near,X=S.far),T.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,S.layers.mask=T.layers.mask|R.layers.mask;const le=j.parent,Ne=S.cameras;V(S,le);for(let ke=0;ke<Ne.length;ke++)V(Ne[ke],le);Ne.length===2?D(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),q(j,S,le)};function q(j,re,_e){_e===null?j.matrix.copy(re.matrixWorld):(j.matrix.copy(_e.matrixWorld),j.matrix.invert(),j.matrix.multiply(re.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(re.projectionMatrix),j.projectionMatrixInverse.copy(re.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=la*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(j){l=j,h!==null&&(h.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let oe=null;function Ae(j,re){if(c=re.getViewerPose(u||o),g=re,c!==null){const _e=c.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let le=!1;_e.length!==S.cameras.length&&(S.cameras.length=0,le=!0);for(let ke=0;ke<_e.length;ke++){const Oe=_e[ke];let Ke=null;if(p!==null)Ke=p.getViewport(Oe);else{const ue=f.getViewSubImage(h,Oe);Ke=ue.viewport,ke===0&&(e.setRenderTargetTextures(v,ue.colorTexture,h.ignoreDepthValues?void 0:ue.depthStencilTexture),e.setRenderTarget(v))}let Q=w[ke];Q===void 0&&(Q=new gn,Q.layers.enable(ke),Q.viewport=new ut,w[ke]=Q),Q.matrix.fromArray(Oe.transform.matrix),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.projectionMatrix.fromArray(Oe.projectionMatrix),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert(),Q.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),ke===0&&(S.matrix.copy(Q.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),le===!0&&S.cameras.push(Q)}const Ne=r.enabledFeatures;if(Ne&&Ne.includes("depth-sensing")){const ke=f.getDepthInformation(_e[0]);ke&&ke.isValid&&ke.texture&&y.init(e,ke,r.renderState)}}for(let _e=0;_e<_.length;_e++){const le=x[_e],Ne=_[_e];le!==null&&Ne!==void 0&&Ne.update(le,re,u||o)}oe&&oe(j,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const Ze=new G_;Ze.setAnimationLoop(Ae),this.setAnimationLoop=function(j){oe=j},this.dispose=function(){}}}const _r=new Pi,bC=new vt;function PC(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,B_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,x){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),c(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,x)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),y(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?u(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===hn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===hn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,x=v.envMapRotation;_&&(m.envMap.value=_,_r.copy(x),_r.x*=-1,_r.y*=-1,_r.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(_r.y*=-1,_r.z*=-1),m.envMapRotation.value.setFromMatrix4(bC.makeRotationFromEuler(_r)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===hn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function y(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function LC(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const x=_.program;i.uniformBlockBinding(v,x)}function u(v,_){let x=r[v.id];x===void 0&&(g(v),x=c(v),r[v.id]=x,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function c(v){const _=f();v.__bindingPointIndex=_;const x=t.createBuffer(),b=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,x),x}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],x=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,T=x.length;A<T;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,S=R.length;w<S;w++){const L=R[w];if(p(L,A,w,b)===!0){const X=L.__offset,k=Array.isArray(L.value)?L.value:[L.value];let W=0;for(let Z=0;Z<k.length;Z++){const H=k[Z],K=y(H);typeof H=="number"||typeof H=="boolean"?(L.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,X+W,L.__data)):H.isMatrix3?(L.__data[0]=H.elements[0],L.__data[1]=H.elements[1],L.__data[2]=H.elements[2],L.__data[3]=0,L.__data[4]=H.elements[3],L.__data[5]=H.elements[4],L.__data[6]=H.elements[5],L.__data[7]=0,L.__data[8]=H.elements[6],L.__data[9]=H.elements[7],L.__data[10]=H.elements[8],L.__data[11]=0):(H.toArray(L.__data,W),W+=K.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,X,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,x,b){const A=v.value,T=_+"_"+x;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const R=b[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return b[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const _=v.uniforms;let x=0;const b=16;for(let T=0,R=_.length;T<R;T++){const w=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,L=w.length;S<L;S++){const X=w[S],k=Array.isArray(X.value)?X.value:[X.value];for(let W=0,Z=k.length;W<Z;W++){const H=k[W],K=y(H),D=x%b,V=D%K.boundary,q=D+V;x+=V,q!==0&&b-q<K.storage&&(x+=b-q),X.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),X.__offset=x,x+=K.storage}}}const A=x%b;return A>0&&(x+=b-A),v.__size=x,v.__cache={},this}function y(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const x=o.indexOf(_.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:u,dispose:d}}class DC{constructor(e={}){const{canvas:n=yM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:h=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),y=new Int32Array(4);let m=null,d=null;const v=[],_=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=wn,this.toneMapping=rr,this.toneMappingExposure=1;const x=this;let b=!1,A=0,T=0,R=null,w=-1,S=null;const L=new ut,X=new ut;let k=null;const W=new tt(0);let Z=0,H=n.width,K=n.height,D=1,V=null,q=null;const oe=new ut(0,0,H,K),Ae=new ut(0,0,H,K);let Ze=!1;const j=new Gd;let re=!1,_e=!1;const le=new vt,Ne=new vt,ke=new N,Oe=new ut,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Q=!1;function ue(){return R===null?D:1}let P=i;function Le(E,U){return n.getContext(E,U)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Id}`),n.addEventListener("webglcontextlost",J,!1),n.addEventListener("webglcontextrestored",ve,!1),n.addEventListener("webglcontextcreationerror",me,!1),P===null){const U="webgl2";if(P=Le(U,E),P===null)throw Le(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ne,Me,he,Ie,xe,C,M,F,$,ee,Y,Ce,de,ye,$e,se,Ee,Ue,Fe,we,qe,We,ct,I;function pe(){ne=new FT(P),ne.init(),We=new MC(P,ne),Me=new LT(P,ne,e,We),he=new xC(P,ne),Me.reverseDepthBuffer&&h&&he.buffers.depth.setReversed(!0),Ie=new BT(P),xe=new rC,C=new SC(P,ne,he,xe,Me,We,Ie),M=new NT(x),F=new OT(x),$=new $M(P),ct=new bT(P,$),ee=new kT(P,$,Ie,ct),Y=new VT(P,ee,$,Ie),Fe=new HT(P,Me,C),se=new DT(xe),Ce=new iC(x,M,F,ne,Me,ct,se),de=new PC(x,xe),ye=new oC,$e=new fC(ne),Ue=new RT(x,M,F,he,Y,p,l),Ee=new vC(x,Y,Me),I=new LC(P,Ie,Me,he),we=new PT(P,ne,Ie),qe=new zT(P,ne,Ie),Ie.programs=Ce.programs,x.capabilities=Me,x.extensions=ne,x.properties=xe,x.renderLists=ye,x.shadowMap=Ee,x.state=he,x.info=Ie}pe();const G=new RC(x,P);this.xr=G,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const E=ne.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ne.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return D},this.setPixelRatio=function(E){E!==void 0&&(D=E,this.setSize(H,K,!1))},this.getSize=function(E){return E.set(H,K)},this.setSize=function(E,U,z=!0){if(G.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,K=U,n.width=Math.floor(E*D),n.height=Math.floor(U*D),z===!0&&(n.style.width=E+"px",n.style.height=U+"px"),this.setViewport(0,0,E,U)},this.getDrawingBufferSize=function(E){return E.set(H*D,K*D).floor()},this.setDrawingBufferSize=function(E,U,z){H=E,K=U,D=z,n.width=Math.floor(E*z),n.height=Math.floor(U*z),this.setViewport(0,0,E,U)},this.getCurrentViewport=function(E){return E.copy(L)},this.getViewport=function(E){return E.copy(oe)},this.setViewport=function(E,U,z,B){E.isVector4?oe.set(E.x,E.y,E.z,E.w):oe.set(E,U,z,B),he.viewport(L.copy(oe).multiplyScalar(D).round())},this.getScissor=function(E){return E.copy(Ae)},this.setScissor=function(E,U,z,B){E.isVector4?Ae.set(E.x,E.y,E.z,E.w):Ae.set(E,U,z,B),he.scissor(X.copy(Ae).multiplyScalar(D).round())},this.getScissorTest=function(){return Ze},this.setScissorTest=function(E){he.setScissorTest(Ze=E)},this.setOpaqueSort=function(E){V=E},this.setTransparentSort=function(E){q=E},this.getClearColor=function(E){return E.copy(Ue.getClearColor())},this.setClearColor=function(){Ue.setClearColor.apply(Ue,arguments)},this.getClearAlpha=function(){return Ue.getClearAlpha()},this.setClearAlpha=function(){Ue.setClearAlpha.apply(Ue,arguments)},this.clear=function(E=!0,U=!0,z=!0){let B=0;if(E){let O=!1;if(R!==null){const ce=R.texture.format;O=ce===Bd||ce===zd||ce===kd}if(O){const ce=R.texture.type,ge=ce===bi||ce===Fr||ce===aa||ce===Ys||ce===Od||ce===Fd,Re=Ue.getClearColor(),be=Ue.getClearAlpha(),ze=Re.r,Ve=Re.g,Pe=Re.b;ge?(g[0]=ze,g[1]=Ve,g[2]=Pe,g[3]=be,P.clearBufferuiv(P.COLOR,0,g)):(y[0]=ze,y[1]=Ve,y[2]=Pe,y[3]=be,P.clearBufferiv(P.COLOR,0,y))}else B|=P.COLOR_BUFFER_BIT}U&&(B|=P.DEPTH_BUFFER_BIT),z&&(B|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",J,!1),n.removeEventListener("webglcontextrestored",ve,!1),n.removeEventListener("webglcontextcreationerror",me,!1),ye.dispose(),$e.dispose(),xe.dispose(),M.dispose(),F.dispose(),Y.dispose(),ct.dispose(),I.dispose(),Ce.dispose(),G.dispose(),G.removeEventListener("sessionstart",Jd),G.removeEventListener("sessionend",Qd),fr.stop()};function J(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function ve(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=Ie.autoReset,U=Ee.enabled,z=Ee.autoUpdate,B=Ee.needsUpdate,O=Ee.type;pe(),Ie.autoReset=E,Ee.enabled=U,Ee.autoUpdate=z,Ee.needsUpdate=B,Ee.type=O}function me(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function He(E){const U=E.target;U.removeEventListener("dispose",He),Et(U)}function Et(E){Ht(E),xe.remove(E)}function Ht(E){const U=xe.get(E).programs;U!==void 0&&(U.forEach(function(z){Ce.releaseProgram(z)}),E.isShaderMaterial&&Ce.releaseShaderCache(E))}this.renderBufferDirect=function(E,U,z,B,O,ce){U===null&&(U=Ke);const ge=O.isMesh&&O.matrixWorld.determinant()<0,Re=vx(E,U,z,B,O);he.setMaterial(B,ge);let be=z.index,ze=1;if(B.wireframe===!0){if(be=ee.getWireframeAttribute(z),be===void 0)return;ze=2}const Ve=z.drawRange,Pe=z.attributes.position;let et=Ve.start*ze,ht=(Ve.start+Ve.count)*ze;ce!==null&&(et=Math.max(et,ce.start*ze),ht=Math.min(ht,(ce.start+ce.count)*ze)),be!==null?(et=Math.max(et,0),ht=Math.min(ht,be.count)):Pe!=null&&(et=Math.max(et,0),ht=Math.min(ht,Pe.count));const dt=ht-et;if(dt<0||dt===1/0)return;ct.setup(O,B,Re,z,be);let rn,nt=we;if(be!==null&&(rn=$.get(be),nt=qe,nt.setIndex(rn)),O.isMesh)B.wireframe===!0?(he.setLineWidth(B.wireframeLinewidth*ue()),nt.setMode(P.LINES)):nt.setMode(P.TRIANGLES);else if(O.isLine){let De=B.linewidth;De===void 0&&(De=1),he.setLineWidth(De*ue()),O.isLineSegments?nt.setMode(P.LINES):O.isLineLoop?nt.setMode(P.LINE_LOOP):nt.setMode(P.LINE_STRIP)}else O.isPoints?nt.setMode(P.POINTS):O.isSprite&&nt.setMode(P.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)nt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(ne.get("WEBGL_multi_draw"))nt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const De=O._multiDrawStarts,ui=O._multiDrawCounts,it=O._multiDrawCount,In=be?$.get(be).bytesPerElement:1,Wr=xe.get(B).currentProgram.getUniforms();for(let fn=0;fn<it;fn++)Wr.setValue(P,"_gl_DrawID",fn),nt.render(De[fn]/In,ui[fn])}else if(O.isInstancedMesh)nt.renderInstances(et,dt,O.count);else if(z.isInstancedBufferGeometry){const De=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,ui=Math.min(z.instanceCount,De);nt.renderInstances(et,dt,ui)}else nt.render(et,dt)};function rt(E,U,z){E.transparent===!0&&E.side===ti&&E.forceSinglePass===!1?(E.side=hn,E.needsUpdate=!0,Ra(E,U,z),E.side=ar,E.needsUpdate=!0,Ra(E,U,z),E.side=ti):Ra(E,U,z)}this.compile=function(E,U,z=null){z===null&&(z=E),d=$e.get(z),d.init(U),_.push(d),z.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),E!==z&&E.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(d.pushLight(O),O.castShadow&&d.pushShadow(O))}),d.setupLights();const B=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const ce=O.material;if(ce)if(Array.isArray(ce))for(let ge=0;ge<ce.length;ge++){const Re=ce[ge];rt(Re,z,O),B.add(Re)}else rt(ce,z,O),B.add(ce)}),_.pop(),d=null,B},this.compileAsync=function(E,U,z=null){const B=this.compile(E,U,z);return new Promise(O=>{function ce(){if(B.forEach(function(ge){xe.get(ge).currentProgram.isReady()&&B.delete(ge)}),B.size===0){O(E);return}setTimeout(ce,10)}ne.get("KHR_parallel_shader_compile")!==null?ce():setTimeout(ce,10)})};let Nn=null;function li(E){Nn&&Nn(E)}function Jd(){fr.stop()}function Qd(){fr.start()}const fr=new G_;fr.setAnimationLoop(li),typeof self<"u"&&fr.setContext(self),this.setAnimationLoop=function(E){Nn=E,G.setAnimationLoop(E),E===null?fr.stop():fr.start()},G.addEventListener("sessionstart",Jd),G.addEventListener("sessionend",Qd),this.render=function(E,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),G.enabled===!0&&G.isPresenting===!0&&(G.cameraAutoUpdate===!0&&G.updateCamera(U),U=G.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,U,R),d=$e.get(E,_.length),d.init(U),_.push(d),Ne.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),j.setFromProjectionMatrix(Ne),_e=this.localClippingEnabled,re=se.init(this.clippingPlanes,_e),m=ye.get(E,v.length),m.init(),v.push(m),G.enabled===!0&&G.isPresenting===!0){const ce=x.xr.getDepthSensingMesh();ce!==null&&Hu(ce,U,-1/0,x.sortObjects)}Hu(E,U,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(V,q),Q=G.enabled===!1||G.isPresenting===!1||G.hasDepthSensing()===!1,Q&&Ue.addToRenderList(m,E),this.info.render.frame++,re===!0&&se.beginShadows();const z=d.state.shadowsArray;Ee.render(z,E,U),re===!0&&se.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,O=m.transmissive;if(d.setupLights(),U.isArrayCamera){const ce=U.cameras;if(O.length>0)for(let ge=0,Re=ce.length;ge<Re;ge++){const be=ce[ge];tp(B,O,E,be)}Q&&Ue.render(E);for(let ge=0,Re=ce.length;ge<Re;ge++){const be=ce[ge];ep(m,E,be,be.viewport)}}else O.length>0&&tp(B,O,E,U),Q&&Ue.render(E),ep(m,E,U);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,U),ct.resetDefaultState(),w=-1,S=null,_.pop(),_.length>0?(d=_[_.length-1],re===!0&&se.setGlobalState(x.clippingPlanes,d.state.camera)):d=null,v.pop(),v.length>0?m=v[v.length-1]:m=null};function Hu(E,U,z,B){if(E.visible===!1)return;if(E.layers.test(U.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(U);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){B&&Oe.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Ne);const ge=Y.update(E),Re=E.material;Re.visible&&m.push(E,ge,Re,z,Oe.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const ge=Y.update(E),Re=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Oe.copy(E.boundingSphere.center)):(ge.boundingSphere===null&&ge.computeBoundingSphere(),Oe.copy(ge.boundingSphere.center)),Oe.applyMatrix4(E.matrixWorld).applyMatrix4(Ne)),Array.isArray(Re)){const be=ge.groups;for(let ze=0,Ve=be.length;ze<Ve;ze++){const Pe=be[ze],et=Re[Pe.materialIndex];et&&et.visible&&m.push(E,ge,et,z,Oe.z,Pe)}}else Re.visible&&m.push(E,ge,Re,z,Oe.z,null)}}const ce=E.children;for(let ge=0,Re=ce.length;ge<Re;ge++)Hu(ce[ge],U,z,B)}function ep(E,U,z,B){const O=E.opaque,ce=E.transmissive,ge=E.transparent;d.setupLightsView(z),re===!0&&se.setGlobalState(x.clippingPlanes,z),B&&he.viewport(L.copy(B)),O.length>0&&Ca(O,U,z),ce.length>0&&Ca(ce,U,z),ge.length>0&&Ca(ge,U,z),he.buffers.depth.setTest(!0),he.buffers.depth.setMask(!0),he.buffers.color.setMask(!0),he.setPolygonOffset(!1)}function tp(E,U,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[B.id]===void 0&&(d.state.transmissionRenderTarget[B.id]=new kr(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Sa:bi,minFilter:Rr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));const ce=d.state.transmissionRenderTarget[B.id],ge=B.viewport||L;ce.setSize(ge.z,ge.w);const Re=x.getRenderTarget();x.setRenderTarget(ce),x.getClearColor(W),Z=x.getClearAlpha(),Z<1&&x.setClearColor(16777215,.5),x.clear(),Q&&Ue.render(z);const be=x.toneMapping;x.toneMapping=rr;const ze=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),d.setupLightsView(B),re===!0&&se.setGlobalState(x.clippingPlanes,B),Ca(E,z,B),C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Ve=!1;for(let Pe=0,et=U.length;Pe<et;Pe++){const ht=U[Pe],dt=ht.object,rn=ht.geometry,nt=ht.material,De=ht.group;if(nt.side===ti&&dt.layers.test(B.layers)){const ui=nt.side;nt.side=hn,nt.needsUpdate=!0,np(dt,z,B,rn,nt,De),nt.side=ui,nt.needsUpdate=!0,Ve=!0}}Ve===!0&&(C.updateMultisampleRenderTarget(ce),C.updateRenderTargetMipmap(ce))}x.setRenderTarget(Re),x.setClearColor(W,Z),ze!==void 0&&(B.viewport=ze),x.toneMapping=be}function Ca(E,U,z){const B=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ce=E.length;O<ce;O++){const ge=E[O],Re=ge.object,be=ge.geometry,ze=B===null?ge.material:B,Ve=ge.group;Re.layers.test(z.layers)&&np(Re,U,z,be,ze,Ve)}}function np(E,U,z,B,O,ce){E.onBeforeRender(x,U,z,B,O,ce),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(x,U,z,B,E,ce),O.transparent===!0&&O.side===ti&&O.forceSinglePass===!1?(O.side=hn,O.needsUpdate=!0,x.renderBufferDirect(z,U,B,O,E,ce),O.side=ar,O.needsUpdate=!0,x.renderBufferDirect(z,U,B,O,E,ce),O.side=ti):x.renderBufferDirect(z,U,B,O,E,ce),E.onAfterRender(x,U,z,B,O,ce)}function Ra(E,U,z){U.isScene!==!0&&(U=Ke);const B=xe.get(E),O=d.state.lights,ce=d.state.shadowsArray,ge=O.state.version,Re=Ce.getParameters(E,O.state,ce,U,z),be=Ce.getProgramCacheKey(Re);let ze=B.programs;B.environment=E.isMeshStandardMaterial?U.environment:null,B.fog=U.fog,B.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?U.environmentRotation:E.envMapRotation,ze===void 0&&(E.addEventListener("dispose",He),ze=new Map,B.programs=ze);let Ve=ze.get(be);if(Ve!==void 0){if(B.currentProgram===Ve&&B.lightsStateVersion===ge)return rp(E,Re),Ve}else Re.uniforms=Ce.getUniforms(E),E.onBeforeCompile(Re,x),Ve=Ce.acquireProgram(Re,be),ze.set(be,Ve),B.uniforms=Re.uniforms;const Pe=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Pe.clippingPlanes=se.uniform),rp(E,Re),B.needsLights=xx(E),B.lightsStateVersion=ge,B.needsLights&&(Pe.ambientLightColor.value=O.state.ambient,Pe.lightProbe.value=O.state.probe,Pe.directionalLights.value=O.state.directional,Pe.directionalLightShadows.value=O.state.directionalShadow,Pe.spotLights.value=O.state.spot,Pe.spotLightShadows.value=O.state.spotShadow,Pe.rectAreaLights.value=O.state.rectArea,Pe.ltc_1.value=O.state.rectAreaLTC1,Pe.ltc_2.value=O.state.rectAreaLTC2,Pe.pointLights.value=O.state.point,Pe.pointLightShadows.value=O.state.pointShadow,Pe.hemisphereLights.value=O.state.hemi,Pe.directionalShadowMap.value=O.state.directionalShadowMap,Pe.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Pe.spotShadowMap.value=O.state.spotShadowMap,Pe.spotLightMatrix.value=O.state.spotLightMatrix,Pe.spotLightMap.value=O.state.spotLightMap,Pe.pointShadowMap.value=O.state.pointShadowMap,Pe.pointShadowMatrix.value=O.state.pointShadowMatrix),B.currentProgram=Ve,B.uniformsList=null,Ve}function ip(E){if(E.uniformsList===null){const U=E.currentProgram.getUniforms();E.uniformsList=zl.seqWithValue(U.seq,E.uniforms)}return E.uniformsList}function rp(E,U){const z=xe.get(E);z.outputColorSpace=U.outputColorSpace,z.batching=U.batching,z.batchingColor=U.batchingColor,z.instancing=U.instancing,z.instancingColor=U.instancingColor,z.instancingMorph=U.instancingMorph,z.skinning=U.skinning,z.morphTargets=U.morphTargets,z.morphNormals=U.morphNormals,z.morphColors=U.morphColors,z.morphTargetsCount=U.morphTargetsCount,z.numClippingPlanes=U.numClippingPlanes,z.numIntersection=U.numClipIntersection,z.vertexAlphas=U.vertexAlphas,z.vertexTangents=U.vertexTangents,z.toneMapping=U.toneMapping}function vx(E,U,z,B,O){U.isScene!==!0&&(U=Ke),C.resetTextureUnits();const ce=U.fog,ge=B.isMeshStandardMaterial?U.environment:null,Re=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:eo,be=(B.isMeshStandardMaterial?F:M).get(B.envMap||ge),ze=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ve=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Pe=!!z.morphAttributes.position,et=!!z.morphAttributes.normal,ht=!!z.morphAttributes.color;let dt=rr;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(dt=x.toneMapping);const rn=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,nt=rn!==void 0?rn.length:0,De=xe.get(B),ui=d.state.lights;if(re===!0&&(_e===!0||E!==S)){const Mn=E===S&&B.id===w;se.setState(B,E,Mn)}let it=!1;B.version===De.__version?(De.needsLights&&De.lightsStateVersion!==ui.state.version||De.outputColorSpace!==Re||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==be||B.fog===!0&&De.fog!==ce||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==se.numPlanes||De.numIntersection!==se.numIntersection)||De.vertexAlphas!==ze||De.vertexTangents!==Ve||De.morphTargets!==Pe||De.morphNormals!==et||De.morphColors!==ht||De.toneMapping!==dt||De.morphTargetsCount!==nt)&&(it=!0):(it=!0,De.__version=B.version);let In=De.currentProgram;it===!0&&(In=Ra(B,U,O));let Wr=!1,fn=!1,no=!1;const pt=In.getUniforms(),qn=De.uniforms;if(he.useProgram(In.program)&&(Wr=!0,fn=!0,no=!0),B.id!==w&&(w=B.id,fn=!0),Wr||S!==E){he.buffers.depth.getReversed()?(le.copy(E.projectionMatrix),MM(le),EM(le),pt.setValue(P,"projectionMatrix",le)):pt.setValue(P,"projectionMatrix",E.projectionMatrix),pt.setValue(P,"viewMatrix",E.matrixWorldInverse);const Di=pt.map.cameraPosition;Di!==void 0&&Di.setValue(P,ke.setFromMatrixPosition(E.matrixWorld)),Me.logarithmicDepthBuffer&&pt.setValue(P,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&pt.setValue(P,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,fn=!0,no=!0)}if(O.isSkinnedMesh){pt.setOptional(P,O,"bindMatrix"),pt.setOptional(P,O,"bindMatrixInverse");const Mn=O.skeleton;Mn&&(Mn.boneTexture===null&&Mn.computeBoneTexture(),pt.setValue(P,"boneTexture",Mn.boneTexture,C))}O.isBatchedMesh&&(pt.setOptional(P,O,"batchingTexture"),pt.setValue(P,"batchingTexture",O._matricesTexture,C),pt.setOptional(P,O,"batchingIdTexture"),pt.setValue(P,"batchingIdTexture",O._indirectTexture,C),pt.setOptional(P,O,"batchingColorTexture"),O._colorsTexture!==null&&pt.setValue(P,"batchingColorTexture",O._colorsTexture,C));const io=z.morphAttributes;if((io.position!==void 0||io.normal!==void 0||io.color!==void 0)&&Fe.update(O,z,In),(fn||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,pt.setValue(P,"receiveShadow",O.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(qn.envMap.value=be,qn.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&U.environment!==null&&(qn.envMapIntensity.value=U.environmentIntensity),fn&&(pt.setValue(P,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&_x(qn,no),ce&&B.fog===!0&&de.refreshFogUniforms(qn,ce),de.refreshMaterialUniforms(qn,B,D,K,d.state.transmissionRenderTarget[E.id]),zl.upload(P,ip(De),qn,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(zl.upload(P,ip(De),qn,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&pt.setValue(P,"center",O.center),pt.setValue(P,"modelViewMatrix",O.modelViewMatrix),pt.setValue(P,"normalMatrix",O.normalMatrix),pt.setValue(P,"modelMatrix",O.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Mn=B.uniformsGroups;for(let Di=0,Ni=Mn.length;Di<Ni;Di++){const sp=Mn[Di];I.update(sp,In),I.bind(sp,In)}}return In}function _x(E,U){E.ambientLightColor.needsUpdate=U,E.lightProbe.needsUpdate=U,E.directionalLights.needsUpdate=U,E.directionalLightShadows.needsUpdate=U,E.pointLights.needsUpdate=U,E.pointLightShadows.needsUpdate=U,E.spotLights.needsUpdate=U,E.spotLightShadows.needsUpdate=U,E.rectAreaLights.needsUpdate=U,E.hemisphereLights.needsUpdate=U}function xx(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,U,z){xe.get(E.texture).__webglTexture=U,xe.get(E.depthTexture).__webglTexture=z;const B=xe.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,U){const z=xe.get(E);z.__webglFramebuffer=U,z.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(E,U=0,z=0){R=E,A=U,T=z;let B=!0,O=null,ce=!1,ge=!1;if(E){const be=xe.get(E);if(be.__useDefaultFramebuffer!==void 0)he.bindFramebuffer(P.FRAMEBUFFER,null),B=!1;else if(be.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(be.__hasExternalTextures)C.rebindTextures(E,xe.get(E.texture).__webglTexture,xe.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Pe=E.depthTexture;if(be.__boundDepthTexture!==Pe){if(Pe!==null&&xe.has(Pe)&&(E.width!==Pe.image.width||E.height!==Pe.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const ze=E.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(ge=!0);const Ve=xe.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ve[U])?O=Ve[U][z]:O=Ve[U],ce=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?O=xe.get(E).__webglMultisampledFramebuffer:Array.isArray(Ve)?O=Ve[z]:O=Ve,L.copy(E.viewport),X.copy(E.scissor),k=E.scissorTest}else L.copy(oe).multiplyScalar(D).floor(),X.copy(Ae).multiplyScalar(D).floor(),k=Ze;if(he.bindFramebuffer(P.FRAMEBUFFER,O)&&B&&he.drawBuffers(E,O),he.viewport(L),he.scissor(X),he.setScissorTest(k),ce){const be=xe.get(E.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,z)}else if(ge){const be=xe.get(E.texture),ze=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,z||0,ze)}w=-1},this.readRenderTargetPixels=function(E,U,z,B,O,ce,ge){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Re=Re[ge]),Re){he.bindFramebuffer(P.FRAMEBUFFER,Re);try{const be=E.texture,ze=be.format,Ve=be.type;if(!Me.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Me.textureTypeReadable(Ve)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=E.width-B&&z>=0&&z<=E.height-O&&P.readPixels(U,z,B,O,We.convert(ze),We.convert(Ve),ce)}finally{const be=R!==null?xe.get(R).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(E,U,z,B,O,ce,ge){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Re=xe.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&ge!==void 0&&(Re=Re[ge]),Re){const be=E.texture,ze=be.format,Ve=be.type;if(!Me.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Me.textureTypeReadable(Ve))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=E.width-B&&z>=0&&z<=E.height-O){he.bindFramebuffer(P.FRAMEBUFFER,Re);const Pe=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.bufferData(P.PIXEL_PACK_BUFFER,ce.byteLength,P.STREAM_READ),P.readPixels(U,z,B,O,We.convert(ze),We.convert(Ve),0);const et=R!==null?xe.get(R).__webglFramebuffer:null;he.bindFramebuffer(P.FRAMEBUFFER,et);const ht=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await SM(P,ht,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Pe),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,ce),P.deleteBuffer(Pe),P.deleteSync(ht),ce}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,U=null,z=0){E.isTexture!==!0&&(Ro("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-z),O=Math.floor(E.image.width*B),ce=Math.floor(E.image.height*B),ge=U!==null?U.x:0,Re=U!==null?U.y:0;C.setTexture2D(E,0),P.copyTexSubImage2D(P.TEXTURE_2D,z,0,0,ge,Re,O,ce),he.unbindTexture()},this.copyTextureToTexture=function(E,U,z=null,B=null,O=0){E.isTexture!==!0&&(Ro("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],U=arguments[2],O=arguments[3]||0,z=null);let ce,ge,Re,be,ze,Ve,Pe,et,ht;const dt=E.isCompressedTexture?E.mipmaps[O]:E.image;z!==null?(ce=z.max.x-z.min.x,ge=z.max.y-z.min.y,Re=z.isBox3?z.max.z-z.min.z:1,be=z.min.x,ze=z.min.y,Ve=z.isBox3?z.min.z:0):(ce=dt.width,ge=dt.height,Re=dt.depth||1,be=0,ze=0,Ve=0),B!==null?(Pe=B.x,et=B.y,ht=B.z):(Pe=0,et=0,ht=0);const rn=We.convert(U.format),nt=We.convert(U.type);let De;U.isData3DTexture?(C.setTexture3D(U,0),De=P.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(C.setTexture2DArray(U,0),De=P.TEXTURE_2D_ARRAY):(C.setTexture2D(U,0),De=P.TEXTURE_2D),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const ui=P.getParameter(P.UNPACK_ROW_LENGTH),it=P.getParameter(P.UNPACK_IMAGE_HEIGHT),In=P.getParameter(P.UNPACK_SKIP_PIXELS),Wr=P.getParameter(P.UNPACK_SKIP_ROWS),fn=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,dt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,dt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,be),P.pixelStorei(P.UNPACK_SKIP_ROWS,ze),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ve);const no=E.isDataArrayTexture||E.isData3DTexture,pt=U.isDataArrayTexture||U.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const qn=xe.get(E),io=xe.get(U),Mn=xe.get(qn.__renderTarget),Di=xe.get(io.__renderTarget);he.bindFramebuffer(P.READ_FRAMEBUFFER,Mn.__webglFramebuffer),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,Di.__webglFramebuffer);for(let Ni=0;Ni<Re;Ni++)no&&P.framebufferTextureLayer(P.READ_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(E).__webglTexture,O,Ve+Ni),E.isDepthTexture?(pt&&P.framebufferTextureLayer(P.DRAW_FRAMEBUFFER,P.COLOR_ATTACHMENT0,xe.get(U).__webglTexture,O,ht+Ni),P.blitFramebuffer(be,ze,ce,ge,Pe,et,ce,ge,P.DEPTH_BUFFER_BIT,P.NEAREST)):pt?P.copyTexSubImage3D(De,O,Pe,et,ht+Ni,be,ze,ce,ge):P.copyTexSubImage2D(De,O,Pe,et,ht+Ni,be,ze,ce,ge);he.bindFramebuffer(P.READ_FRAMEBUFFER,null),he.bindFramebuffer(P.DRAW_FRAMEBUFFER,null)}else pt?E.isDataTexture||E.isData3DTexture?P.texSubImage3D(De,O,Pe,et,ht,ce,ge,Re,rn,nt,dt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(De,O,Pe,et,ht,ce,ge,Re,rn,dt.data):P.texSubImage3D(De,O,Pe,et,ht,ce,ge,Re,rn,nt,dt):E.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,O,Pe,et,ce,ge,rn,nt,dt.data):E.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,O,Pe,et,dt.width,dt.height,rn,dt.data):P.texSubImage2D(P.TEXTURE_2D,O,Pe,et,ce,ge,rn,nt,dt);P.pixelStorei(P.UNPACK_ROW_LENGTH,ui),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,it),P.pixelStorei(P.UNPACK_SKIP_PIXELS,In),P.pixelStorei(P.UNPACK_SKIP_ROWS,Wr),P.pixelStorei(P.UNPACK_SKIP_IMAGES,fn),O===0&&U.generateMipmaps&&P.generateMipmap(De),he.unbindTexture()},this.copyTextureToTexture3D=function(E,U,z=null,B=null,O=0){return E.isTexture!==!0&&(Ro("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,E=arguments[2],U=arguments[3],O=arguments[4]||0),Ro('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,U,z,B,O)},this.initRenderTarget=function(E){xe.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),he.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,he.reset(),ct.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Mi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}class NC extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class IC{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Nf,this.updateRanges=[],this.version=0,this.uuid=oi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Zt=new N;class fu{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=Vn(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=st(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=st(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=Vn(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=Vn(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=Vn(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=Vn(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=st(n,this.array),i=st(i,this.array),r=st(r,this.array),s=st(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new $n(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new fu(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class q_ extends Ea{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let os;const vo=new N,as=new N,ls=new N,us=new ie,_o=new ie,K_=new vt,pl=new N,xo=new N,ml=new N,gg=new ie,Vc=new ie,vg=new ie;class UC extends zt{constructor(e=new q_){if(super(),this.isSprite=!0,this.type="Sprite",os===void 0){os=new Zn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new IC(n,5);os.setIndex([0,1,2,0,2,3]),os.setAttribute("position",new fu(i,3,0,!1)),os.setAttribute("uv",new fu(i,2,3,!1))}this.geometry=os,this.material=e,this.center=new ie(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),as.setFromMatrixScale(this.matrixWorld),K_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&as.multiplyScalar(-ls.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;gl(pl.set(-.5,-.5,0),ls,o,as,r,s),gl(xo.set(.5,-.5,0),ls,o,as,r,s),gl(ml.set(.5,.5,0),ls,o,as,r,s),gg.set(0,0),Vc.set(1,0),vg.set(1,1);let a=e.ray.intersectTriangle(pl,xo,ml,!1,vo);if(a===null&&(gl(xo.set(-.5,.5,0),ls,o,as,r,s),Vc.set(0,1),a=e.ray.intersectTriangle(pl,ml,xo,!1,vo),a===null))return;const l=e.ray.origin.distanceTo(vo);l<e.near||l>e.far||n.push({distance:l,point:vo.clone(),uv:Cn.getInterpolation(vo,pl,xo,ml,gg,Vc,vg,new ie),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function gl(t,e,n,i,r,s){us.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(_o.x=s*us.x-r*us.y,_o.y=r*us.x+s*us.y):_o.copy(us),t.copy(e),t.x+=_o.x,t.y+=_o.y,t.applyMatrix4(K_)}class ai{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,u;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),u=i[r]-o,u<0)a=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const c=i[r],h=i[r+1]-c,p=(o-c)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ie:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new vt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let u=Number.MAX_VALUE;const c=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);c<=u&&(u=c,i.set(1,0,0)),f<=u&&(u=f,i.set(0,1,0)),h<=u&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Ut(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Ut(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class jd extends ai{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ie){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),u=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const c=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=u-this.aY;l=h*c-p*f+this.aX,u=h*f+p*c+this.aY}return i.set(l,u)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class OC extends jd{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function Xd(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,u){r(o,a,u*(a-s),u*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,u,c,f){let h=(o-s)/u-(a-s)/(u+c)+(a-o)/c,p=(a-o)/c-(l-o)/(c+f)+(l-a)/f;h*=c,p*=c,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const vl=new N,Gc=new Xd,Wc=new Xd,jc=new Xd;class FC extends ai{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let u,c;this.closed||a>0?u=r[(a-1)%s]:(vl.subVectors(r[0],r[1]).add(r[0]),u=vl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?c=r[(a+2)%s]:(vl.subVectors(r[s-1],r[s-2]).add(r[s-1]),c=vl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),p),y=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(c),p);y<1e-4&&(y=1),g<1e-4&&(g=y),m<1e-4&&(m=y),Gc.initNonuniformCatmullRom(u.x,f.x,h.x,c.x,g,y,m),Wc.initNonuniformCatmullRom(u.y,f.y,h.y,c.y,g,y,m),jc.initNonuniformCatmullRom(u.z,f.z,h.z,c.z,g,y,m)}else this.curveType==="catmullrom"&&(Gc.initCatmullRom(u.x,f.x,h.x,c.x,this.tension),Wc.initCatmullRom(u.y,f.y,h.y,c.y,this.tension),jc.initCatmullRom(u.z,f.z,h.z,c.z,this.tension));return i.set(Gc.calc(l),Wc.calc(l),jc.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function _g(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function kC(t,e){const n=1-t;return n*n*e}function zC(t,e){return 2*(1-t)*t*e}function BC(t,e){return t*t*e}function Ho(t,e,n,i){return kC(t,e)+zC(t,n)+BC(t,i)}function HC(t,e){const n=1-t;return n*n*n*e}function VC(t,e){const n=1-t;return 3*n*n*t*e}function GC(t,e){return 3*(1-t)*t*t*e}function WC(t,e){return t*t*t*e}function Vo(t,e,n,i,r){return HC(t,e)+VC(t,n)+GC(t,i)+WC(t,r)}class J_ extends ai{constructor(e=new ie,n=new ie,i=new ie,r=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ie){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class jC extends ai{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(Vo(e,r.x,s.x,o.x,a.x),Vo(e,r.y,s.y,o.y,a.y),Vo(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class Q_ extends ai{constructor(e=new ie,n=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ie){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ie){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class XC extends ai{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class ex extends ai{constructor(e=new ie,n=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ie){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $C extends ai{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(Ho(e,r.x,s.x,o.x),Ho(e,r.y,s.y,o.y),Ho(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class tx extends ai{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ie){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],u=r[o],c=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(_g(a,l.x,u.x,c.x,f.x),_g(a,l.y,u.y,c.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ie().fromArray(r))}return this}}var Uf=Object.freeze({__proto__:null,ArcCurve:OC,CatmullRomCurve3:FC,CubicBezierCurve:J_,CubicBezierCurve3:jC,EllipseCurve:jd,LineCurve:Q_,LineCurve3:XC,QuadraticBezierCurve:ex,QuadraticBezierCurve3:$C,SplineCurve:tx});class YC extends ai{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Uf[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),u=l===0?0:1-o/l;return a.getPointAt(u,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let u=0;u<l.length;u++){const c=l[u];i&&i.equals(c)||(n.push(c),i=c)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new Uf[r.type]().fromJSON(r))}return this}}class Of extends YC{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new Q_(this.currentPoint.clone(),new ie(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new ex(this.currentPoint.clone(),new ie(e,n),new ie(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new J_(this.currentPoint.clone(),new ie(e,n),new ie(i,r),new ie(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new tx(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const u=this.currentPoint.x,c=this.currentPoint.y;return this.absellipse(e+u,n+c,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const u=new jd(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=u.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(u);const c=u.getPoint(1);return this.currentPoint.copy(c),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Bl extends Of{constructor(e){super(e),this.uuid=oi(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new Of().fromJSON(r))}return this}}const ZC={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=nx(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,u,c,f,h,p;if(i&&(s=e2(t,e,s,n)),t.length>80*n){a=u=t[0],l=c=t[1];for(let g=n;g<r;g+=n)f=t[g],h=t[g+1],f<a&&(a=f),h<l&&(l=h),f>u&&(u=f),h>c&&(c=h);p=Math.max(u-a,c-l),p=p!==0?32767/p:0}return ca(s,o,n,a,l,p,0),o}};function nx(t,e,n,i,r){let s,o;if(r===h2(t,e,n,i)>0)for(s=e;s<n;s+=i)o=xg(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=xg(s,t[s],t[s+1],o);return o&&zu(o,o.next)&&(fa(o),o=o.next),o}function Br(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(zu(n,n.next)||yt(n.prev,n,n.next)===0)){if(fa(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function ca(t,e,n,i,r,s,o){if(!t)return;!o&&s&&s2(t,i,r,s);let a=t,l,u;for(;t.prev!==t.next;){if(l=t.prev,u=t.next,s?KC(t,i,r,s):qC(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(u.i/n|0),fa(t),t=u.next,a=u.next;continue}if(t=u,t===a){o?o===1?(t=JC(Br(t),e,n),ca(t,e,n,i,r,s,2)):o===2&&QC(t,e,n,i,r,s):ca(Br(t),e,n,i,r,s,1);break}}}function qC(t){const e=t.prev,n=t,i=t.next;if(yt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,u=i.y,c=r<s?r<o?r:o:s<o?s:o,f=a<l?a<u?a:u:l<u?l:u,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>u?a:u:l>u?l:u;let g=i.next;for(;g!==e;){if(g.x>=c&&g.x<=h&&g.y>=f&&g.y<=p&&As(r,a,s,l,o,u,g.x,g.y)&&yt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function KC(t,e,n,i){const r=t.prev,s=t,o=t.next;if(yt(r,s,o)>=0)return!1;const a=r.x,l=s.x,u=o.x,c=r.y,f=s.y,h=o.y,p=a<l?a<u?a:u:l<u?l:u,g=c<f?c<h?c:h:f<h?f:h,y=a>l?a>u?a:u:l>u?l:u,m=c>f?c>h?c:h:f>h?f:h,d=Ff(p,g,e,n,i),v=Ff(y,m,e,n,i);let _=t.prevZ,x=t.nextZ;for(;_&&_.z>=d&&x&&x.z<=v;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&As(a,c,l,f,u,h,_.x,_.y)&&yt(_.prev,_,_.next)>=0||(_=_.prevZ,x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&As(a,c,l,f,u,h,x.x,x.y)&&yt(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=y&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&As(a,c,l,f,u,h,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;x&&x.z<=v;){if(x.x>=p&&x.x<=y&&x.y>=g&&x.y<=m&&x!==r&&x!==o&&As(a,c,l,f,u,h,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function JC(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!zu(r,s)&&ix(r,i,i.next,s)&&ha(r,s)&&ha(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),fa(i),fa(i.next),i=t=s),i=i.next}while(i!==t);return Br(i)}function QC(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&l2(o,a)){let l=rx(o,a);o=Br(o,o.next),l=Br(l,l.next),ca(o,e,n,i,r,s,0),ca(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function e2(t,e,n,i){const r=[];let s,o,a,l,u;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,u=nx(t,a,l,i,!1),u===u.next&&(u.steiner=!0),r.push(a2(u));for(r.sort(t2),s=0;s<r.length;s++)n=n2(r[s],n);return n}function t2(t,e){return t.x-e.x}function n2(t,e){const n=i2(t,e);if(!n)return e;const i=rx(n,t);return Br(i,i.next),Br(n,n.next)}function i2(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,u=r.y;let c=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&As(o<u?s:i,o,l,u,o<u?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),ha(n,t)&&(f<c||f===c&&(n.x>r.x||n.x===r.x&&r2(r,n)))&&(r=n,c=f)),n=n.next;while(n!==a);return r}function r2(t,e){return yt(t.prev,t,e.prev)<0&&yt(e.next,t,t.next)<0}function s2(t,e,n,i){let r=t;do r.z===0&&(r.z=Ff(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,o2(r)}function o2(t){let e,n,i,r,s,o,a,l,u=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<u&&(a++,i=i.nextZ,!!i);e++);for(l=u;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,u*=2}while(o>1);return t}function Ff(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function a2(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function As(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function l2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!u2(t,e)&&(ha(t,e)&&ha(e,t)&&c2(t,e)&&(yt(t.prev,t,e.prev)||yt(t,e.prev,e))||zu(t,e)&&yt(t.prev,t,t.next)>0&&yt(e.prev,e,e.next)>0)}function yt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function zu(t,e){return t.x===e.x&&t.y===e.y}function ix(t,e,n,i){const r=xl(yt(t,e,n)),s=xl(yt(t,e,i)),o=xl(yt(n,i,t)),a=xl(yt(n,i,e));return!!(r!==s&&o!==a||r===0&&_l(t,n,e)||s===0&&_l(t,i,e)||o===0&&_l(n,t,i)||a===0&&_l(n,e,i))}function _l(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function xl(t){return t>0?1:t<0?-1:0}function u2(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&ix(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function ha(t,e){return yt(t.prev,t,t.next)<0?yt(t,e,t.next)>=0&&yt(t,t.prev,e)>=0:yt(t,e,t.prev)<0||yt(t,t.next,e)<0}function c2(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function rx(t,e){const n=new kf(t.i,t.x,t.y),i=new kf(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function xg(t,e,n,i){const r=new kf(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function fa(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function kf(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function h2(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class Fs{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return Fs.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];yg(e),Sg(i,e);let o=e.length;n.forEach(yg);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,Sg(i,n[l]);const a=ZC.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function yg(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function Sg(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class $d extends Zn{constructor(e=new Bl([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];o(u)}this.setAttribute("position",new en(r,3)),this.setAttribute("uv",new en(s,2)),this.computeVertexNormals();function o(a){const l=[],u=n.curveSegments!==void 0?n.curveSegments:12,c=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,y=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:f2;let _,x=!1,b,A,T,R;d&&(_=d.getSpacedPoints(c),x=!0,h=!1,b=d.computeFrenetFrames(c,!1),A=new N,T=new N,R=new N),h||(m=0,p=0,g=0,y=0);const w=a.extractPoints(u);let S=w.shape;const L=w.holes;if(!Fs.isClockWise(S)){S=S.reverse();for(let Q=0,ue=L.length;Q<ue;Q++){const P=L[Q];Fs.isClockWise(P)&&(L[Q]=P.reverse())}}const k=Fs.triangulateShape(S,L),W=S;for(let Q=0,ue=L.length;Q<ue;Q++){const P=L[Q];S=S.concat(P)}function Z(Q,ue,P){return ue||console.error("THREE.ExtrudeGeometry: vec does not exist"),Q.clone().addScaledVector(ue,P)}const H=S.length,K=k.length;function D(Q,ue,P){let Le,ne,Me;const he=Q.x-ue.x,Ie=Q.y-ue.y,xe=P.x-Q.x,C=P.y-Q.y,M=he*he+Ie*Ie,F=he*C-Ie*xe;if(Math.abs(F)>Number.EPSILON){const $=Math.sqrt(M),ee=Math.sqrt(xe*xe+C*C),Y=ue.x-Ie/$,Ce=ue.y+he/$,de=P.x-C/ee,ye=P.y+xe/ee,$e=((de-Y)*C-(ye-Ce)*xe)/(he*C-Ie*xe);Le=Y+he*$e-Q.x,ne=Ce+Ie*$e-Q.y;const se=Le*Le+ne*ne;if(se<=2)return new ie(Le,ne);Me=Math.sqrt(se/2)}else{let $=!1;he>Number.EPSILON?xe>Number.EPSILON&&($=!0):he<-Number.EPSILON?xe<-Number.EPSILON&&($=!0):Math.sign(Ie)===Math.sign(C)&&($=!0),$?(Le=-Ie,ne=he,Me=Math.sqrt(M)):(Le=he,ne=Ie,Me=Math.sqrt(M/2))}return new ie(Le/Me,ne/Me)}const V=[];for(let Q=0,ue=W.length,P=ue-1,Le=Q+1;Q<ue;Q++,P++,Le++)P===ue&&(P=0),Le===ue&&(Le=0),V[Q]=D(W[Q],W[P],W[Le]);const q=[];let oe,Ae=V.concat();for(let Q=0,ue=L.length;Q<ue;Q++){const P=L[Q];oe=[];for(let Le=0,ne=P.length,Me=ne-1,he=Le+1;Le<ne;Le++,Me++,he++)Me===ne&&(Me=0),he===ne&&(he=0),oe[Le]=D(P[Le],P[Me],P[he]);q.push(oe),Ae=Ae.concat(oe)}for(let Q=0;Q<m;Q++){const ue=Q/m,P=p*Math.cos(ue*Math.PI/2),Le=g*Math.sin(ue*Math.PI/2)+y;for(let ne=0,Me=W.length;ne<Me;ne++){const he=Z(W[ne],V[ne],Le);le(he.x,he.y,-P)}for(let ne=0,Me=L.length;ne<Me;ne++){const he=L[ne];oe=q[ne];for(let Ie=0,xe=he.length;Ie<xe;Ie++){const C=Z(he[Ie],oe[Ie],Le);le(C.x,C.y,-P)}}}const Ze=g+y;for(let Q=0;Q<H;Q++){const ue=h?Z(S[Q],Ae[Q],Ze):S[Q];x?(T.copy(b.normals[0]).multiplyScalar(ue.x),A.copy(b.binormals[0]).multiplyScalar(ue.y),R.copy(_[0]).add(T).add(A),le(R.x,R.y,R.z)):le(ue.x,ue.y,0)}for(let Q=1;Q<=c;Q++)for(let ue=0;ue<H;ue++){const P=h?Z(S[ue],Ae[ue],Ze):S[ue];x?(T.copy(b.normals[Q]).multiplyScalar(P.x),A.copy(b.binormals[Q]).multiplyScalar(P.y),R.copy(_[Q]).add(T).add(A),le(R.x,R.y,R.z)):le(P.x,P.y,f/c*Q)}for(let Q=m-1;Q>=0;Q--){const ue=Q/m,P=p*Math.cos(ue*Math.PI/2),Le=g*Math.sin(ue*Math.PI/2)+y;for(let ne=0,Me=W.length;ne<Me;ne++){const he=Z(W[ne],V[ne],Le);le(he.x,he.y,f+P)}for(let ne=0,Me=L.length;ne<Me;ne++){const he=L[ne];oe=q[ne];for(let Ie=0,xe=he.length;Ie<xe;Ie++){const C=Z(he[Ie],oe[Ie],Le);x?le(C.x,C.y+_[c-1].y,_[c-1].x+P):le(C.x,C.y,f+P)}}}j(),re();function j(){const Q=r.length/3;if(h){let ue=0,P=H*ue;for(let Le=0;Le<K;Le++){const ne=k[Le];Ne(ne[2]+P,ne[1]+P,ne[0]+P)}ue=c+m*2,P=H*ue;for(let Le=0;Le<K;Le++){const ne=k[Le];Ne(ne[0]+P,ne[1]+P,ne[2]+P)}}else{for(let ue=0;ue<K;ue++){const P=k[ue];Ne(P[2],P[1],P[0])}for(let ue=0;ue<K;ue++){const P=k[ue];Ne(P[0]+H*c,P[1]+H*c,P[2]+H*c)}}i.addGroup(Q,r.length/3-Q,0)}function re(){const Q=r.length/3;let ue=0;_e(W,ue),ue+=W.length;for(let P=0,Le=L.length;P<Le;P++){const ne=L[P];_e(ne,ue),ue+=ne.length}i.addGroup(Q,r.length/3-Q,1)}function _e(Q,ue){let P=Q.length;for(;--P>=0;){const Le=P;let ne=P-1;ne<0&&(ne=Q.length-1);for(let Me=0,he=c+m*2;Me<he;Me++){const Ie=H*Me,xe=H*(Me+1),C=ue+Le+Ie,M=ue+ne+Ie,F=ue+ne+xe,$=ue+Le+xe;ke(C,M,F,$)}}}function le(Q,ue,P){l.push(Q),l.push(ue),l.push(P)}function Ne(Q,ue,P){Oe(Q),Oe(ue),Oe(P);const Le=r.length/3,ne=v.generateTopUV(i,r,Le-3,Le-2,Le-1);Ke(ne[0]),Ke(ne[1]),Ke(ne[2])}function ke(Q,ue,P,Le){Oe(Q),Oe(ue),Oe(Le),Oe(ue),Oe(P),Oe(Le);const ne=r.length/3,Me=v.generateSideWallUV(i,r,ne-6,ne-3,ne-2,ne-1);Ke(Me[0]),Ke(Me[1]),Ke(Me[3]),Ke(Me[1]),Ke(Me[2]),Ke(Me[3])}function Oe(Q){r.push(l[Q*3+0]),r.push(l[Q*3+1]),r.push(l[Q*3+2])}function Ke(Q){s.push(Q.x),s.push(Q.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return d2(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new Uf[r.type]().fromJSON(r)),new $d(i,e.options)}}const f2={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],u=e[r*3],c=e[r*3+1];return[new ie(s,o),new ie(a,l),new ie(u,c)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],u=e[i*3],c=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],y=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-c)<Math.abs(o-u)?[new ie(o,1-l),new ie(u,1-f),new ie(h,1-g),new ie(y,1-d)]:[new ie(a,1-l),new ie(c,1-f),new ie(p,1-g),new ie(m,1-d)]}};function d2(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Yd extends Zn{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],u=[],c=[];let f=e;const h=(n-e)/r,p=new N,g=new ie;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const d=s+m/i*o;p.x=f*Math.cos(d),p.y=f*Math.sin(d),l.push(p.x,p.y,p.z),u.push(0,0,1),g.x=(p.x/n+1)/2,g.y=(p.y/n+1)/2,c.push(g.x,g.y)}f+=h}for(let y=0;y<r;y++){const m=y*(i+1);for(let d=0;d<i;d++){const v=d+m,_=v,x=v+i+1,b=v+i+2,A=v+1;a.push(_,x,A),a.push(x,b,A)}}this.setIndex(a),this.setAttribute("position",new en(l,3)),this.setAttribute("normal",new en(u,3)),this.setAttribute("uv",new en(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yd(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Zd extends Zn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],f=new N,h=new N,p=[],g=[],y=[],m=[];for(let d=0;d<=i;d++){const v=[],_=d/i;let x=0;d===0&&o===0?x=.5/n:d===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const A=b/n;f.x=-e*Math.cos(r+A*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),y.push(h.x,h.y,h.z),m.push(A+x,1-_),v.push(u++)}c.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const _=c[d][v+1],x=c[d][v],b=c[d+1][v],A=c[d+1][v+1];(d!==0||o>0)&&p.push(_,x,A),(d!==i-1||l<Math.PI)&&p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new en(g,3)),this.setAttribute("normal",new en(y,3)),this.setAttribute("uv",new en(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zd(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}const da={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class p2{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const u=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(c){a++,s===!1&&r.onStart!==void 0&&r.onStart(c,o,a),s=!0},this.itemEnd=function(c){o++,r.onProgress!==void 0&&r.onProgress(c,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(c){r.onError!==void 0&&r.onError(c)},this.resolveURL=function(c){return l?l(c):c},this.setURLModifier=function(c){return l=c,this},this.addHandler=function(c,f){return u.push(c,f),this},this.removeHandler=function(c){const f=u.indexOf(c);return f!==-1&&u.splice(f,2),this},this.getHandler=function(c){for(let f=0,h=u.length;f<h;f+=2){const p=u[f],g=u[f+1];if(p.global&&(p.lastIndex=0),p.test(c))return g}return null}}}const m2=new p2;class Aa{constructor(e){this.manager=e!==void 0?e:m2,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Aa.DEFAULT_MATERIAL_NAME="__DEFAULT";const mi={};class g2 extends Error{constructor(e,n){super(e),this.response=n}}class v2 extends Aa{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=da.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(mi[e]!==void 0){mi[e].push({onLoad:n,onProgress:i,onError:r});return}mi[e]=[],mi[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(u=>{if(u.status===200||u.status===0){if(u.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||u.body===void 0||u.body.getReader===void 0)return u;const c=mi[e],f=u.body.getReader(),h=u.headers.get("X-File-Size")||u.headers.get("Content-Length"),p=h?parseInt(h):0,g=p!==0;let y=0;const m=new ReadableStream({start(d){v();function v(){f.read().then(({done:_,value:x})=>{if(_)d.close();else{y+=x.byteLength;const b=new ProgressEvent("progress",{lengthComputable:g,loaded:y,total:p});for(let A=0,T=c.length;A<T;A++){const R=c[A];R.onProgress&&R.onProgress(b)}d.enqueue(x),v()}},_=>{d.error(_)})}}});return new Response(m)}else throw new g2(`fetch for "${u.url}" responded with ${u.status}: ${u.statusText}`,u)}).then(u=>{switch(l){case"arraybuffer":return u.arrayBuffer();case"blob":return u.blob();case"document":return u.text().then(c=>new DOMParser().parseFromString(c,a));case"json":return u.json();default:if(a===void 0)return u.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,p=new TextDecoder(h);return u.arrayBuffer().then(g=>p.decode(g))}}}).then(u=>{da.add(e,u);const c=mi[e];delete mi[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onLoad&&p.onLoad(u)}}).catch(u=>{const c=mi[e];if(c===void 0)throw this.manager.itemError(e),u;delete mi[e];for(let f=0,h=c.length;f<h;f++){const p=c[f];p.onError&&p.onError(u)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _2 extends Aa{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=da.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=ua("img");function l(){c(),da.add(e,this),n&&n(this),s.manager.itemEnd(e)}function u(f){c(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function c(){a.removeEventListener("load",l,!1),a.removeEventListener("error",u,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",u,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class x2 extends Aa{constructor(e){super(e)}load(e,n,i,r){const s=new Qt,o=new _2(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class sx extends zt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const Xc=new vt,Mg=new N,Eg=new N;class ox{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new vt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Gd,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Mg.setFromMatrixPosition(e.matrixWorld),n.position.copy(Mg),Eg.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Eg),n.updateMatrixWorld(),Xc.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xc),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const wg=new vt,yo=new N,$c=new N;class y2 extends ox{constructor(){super(new gn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new ut(2,1,1,1),new ut(0,1,1,1),new ut(3,1,1,1),new ut(1,1,1,1),new ut(3,0,1,1),new ut(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),yo.setFromMatrixPosition(e.matrixWorld),i.position.copy(yo),$c.copy(i.position),$c.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt($c),i.updateMatrixWorld(),r.makeTranslation(-yo.x,-yo.y,-yo.z),wg.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(wg)}}class S2 extends sx{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new y2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class M2 extends ox{constructor(){super(new W_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class E2 extends sx{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new M2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Tg{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ut(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class w2{constructor(){this.type="ShapePath",this.color=new tt,this.subPaths=[],this.currentPath=null}moveTo(e,n){return this.currentPath=new Of,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,n),this}lineTo(e,n){return this.currentPath.lineTo(e,n),this}quadraticCurveTo(e,n,i,r){return this.currentPath.quadraticCurveTo(e,n,i,r),this}bezierCurveTo(e,n,i,r,s,o){return this.currentPath.bezierCurveTo(e,n,i,r,s,o),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function n(d){const v=[];for(let _=0,x=d.length;_<x;_++){const b=d[_],A=new Bl;A.curves=b.curves,v.push(A)}return v}function i(d,v){const _=v.length;let x=!1;for(let b=_-1,A=0;A<_;b=A++){let T=v[b],R=v[A],w=R.x-T.x,S=R.y-T.y;if(Math.abs(S)>Number.EPSILON){if(S<0&&(T=v[A],w=-w,R=v[b],S=-S),d.y<T.y||d.y>R.y)continue;if(d.y===T.y){if(d.x===T.x)return!0}else{const L=S*(d.x-T.x)-w*(d.y-T.y);if(L===0)return!0;if(L<0)continue;x=!x}}else{if(d.y!==T.y)continue;if(R.x<=d.x&&d.x<=T.x||T.x<=d.x&&d.x<=R.x)return!0}}return x}const r=Fs.isClockWise,s=this.subPaths;if(s.length===0)return[];let o,a,l;const u=[];if(s.length===1)return a=s[0],l=new Bl,l.curves=a.curves,u.push(l),u;let c=!r(s[0].getPoints());c=e?!c:c;const f=[],h=[];let p=[],g=0,y;h[g]=void 0,p[g]=[];for(let d=0,v=s.length;d<v;d++)a=s[d],y=a.getPoints(),o=r(y),o=e?!o:o,o?(!c&&h[g]&&g++,h[g]={s:new Bl,p:y},h[g].s.curves=a.curves,c&&g++,p[g]=[]):p[g].push({h:a,p:y[0]});if(!h[0])return n(s);if(h.length>1){let d=!1,v=0;for(let _=0,x=h.length;_<x;_++)f[_]=[];for(let _=0,x=h.length;_<x;_++){const b=p[_];for(let A=0;A<b.length;A++){const T=b[A];let R=!0;for(let w=0;w<h.length;w++)i(T.p,h[w].p)&&(_!==w&&v++,R?(R=!1,f[w].push(T)):d=!0);R&&f[_].push(T)}}v>0&&d===!1&&(p=f)}let m;for(let d=0,v=h.length;d<v;d++){l=h[d].s,u.push(l),m=p[d];for(let _=0,x=m.length;_<x;_++)l.holes.push(m[_].h)}return u}}class T2 extends Gr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Id}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Id);function A2(){return ae.jsxs(ae.Fragment,{children:[ae.jsx("div",{className:"fixed left-1/2 bottom-4 transform -translate-x-1/2 hidden md:flex flex-col space-y-2 w-6 h-9 rounded-3xl border-[0.2rem] border-tertiary overflow-hidden"}),ae.jsx("div",{className:"scrollOnMouse animate-scrollAnimation fixed left-1/2 transform -translate-x-1/2 flex-col space-y-2 rounded-3xl w-1 h-2 bg-tertiary overflow-hidden bottom-8 hidden md:flex"})]})}const C2=({sections:t})=>{const[e,n]=Ye.useState(!1),[i,r]=Ye.useState(!0),[s,o]=Ye.useState(!1),a=Ye.useRef(null),l=()=>{n(!e)},u=()=>{o(!s)};Ye.useEffect(()=>{const f=document.getElementById("hamburger"),h=()=>{r(!1),l(),u(),f.classList.toggle("is-active")};f&&f.addEventListener("click",h);const p=g=>{a.current&&!a.current.contains(g.target)&&!f.contains(g.target)&&(n(!1),o(!1),f.classList.remove("is-active"))};return document.addEventListener("mousedown",p),()=>{f&&f.removeEventListener("click",h),document.removeEventListener("mousedown",p)}},[e]);const c=f=>{const h=document.querySelectorAll(".section")[f];h&&(h.scrollIntoView({behavior:"smooth"}),n(!1),o(!1),document.getElementById("hamburger").classList.remove("is-active"))};return ae.jsxs("div",{className:"hamburger-container z-50",children:[ae.jsxs("div",{ref:a,className:`panel fixed flex flex-col justify-between top-0 ${e?"right-0 smoothOpen":i?"-right-96":"smoothClose -right-96"} w-96 bg-section-color brightness-150 h-full shadow-lg py-24 px-4`,children:[ae.jsx("div",{className:"w-10/12 h-5/6 flex flex-col justify-center brightness-50",children:t.map((f,h)=>ae.jsx("div",{className:"flex items-center h-20 cursor-pointer",onClick:()=>c(h),children:ae.jsx("p",{className:"font-bold text-3xl text-text-color hover:text-primary transition ease-in duration-200 cursor-hover",children:f})},h))}),ae.jsxs("div",{className:"h-20 brightness-50",children:[ae.jsx("hr",{className:"w-3/4 h-[2px] my-4 bg-primary border-0"}),ae.jsx("p",{className:"text-lg text-text-color",children:"Mathys Farineau - 2024"})]})]}),ae.jsx("div",{className:"hamburger ml-4 md:ml-8 grid items-center justify-center grid-cols-3 gap-1 cursor-pointer cursor-hover transition duration-500 ease-in",id:"hamburger",children:[...Array(9)].map((f,h)=>ae.jsx("span",{className:"circle w-2 h-2 border-2 border-primary rounded-3xl transition duration-200 ease-in cursor-hover"},h))})]})},R2=({article:t,articlesNames:e})=>{var r;const i=((r=[{name:e[0],icons:[{src:"images/javascript.png",title:"JavaScript"},{src:"images/tailwindcss.png",title:"Tailwind"},{src:"images/extjs.png",title:"ExtJs"},{src:"images/react.png",title:"React"}]},{name:e[1],icons:[{src:"images/java.png",title:"Java"},{src:"images/php.png",title:"PHP"},{src:"images/spring.png",title:"Spring"},{src:"images/symfony.png",title:"Symfony"}]},{name:e[2],icons:[{src:"images/git.png",title:"Git"},{src:"images/docker.png",title:"Docker"},{src:"images/dart.png",title:"Dart"},{src:"images/figma.png",title:"Figma"},{src:"images/db.png",title:"Database"}]}].find(s=>s.name===t))==null?void 0:r.icons)||[];return ae.jsx("div",{className:"flex items-center justify-center",children:ae.jsx(Y2,{article:t,icons:i})})},Ag={type:"change"},qd={type:"start"},ax={type:"end"},yl=new U_,Cg=new Gi,b2=Math.cos(70*xM.DEG2RAD),Rt=new N,sn=2*Math.PI,lt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Yc=1e-6;class P2 extends T2{constructor(e,n=null){super(e,n),this.state=lt.NONE,this.enabled=!0,this.target=new N,this.cursor=new N,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Ns.ROTATE,MIDDLE:Ns.DOLLY,RIGHT:Ns.PAN},this.touches={ONE:ws.ROTATE,TWO:ws.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new N,this._lastQuaternion=new zr,this._lastTargetPosition=new N,this._quat=new zr().setFromUnitVectors(e.up,new N(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Tg,this._sphericalDelta=new Tg,this._scale=1,this._panOffset=new N,this._rotateStart=new ie,this._rotateEnd=new ie,this._rotateDelta=new ie,this._panStart=new ie,this._panEnd=new ie,this._panDelta=new ie,this._dollyStart=new ie,this._dollyEnd=new ie,this._dollyDelta=new ie,this._dollyDirection=new N,this._mouse=new ie,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=D2.bind(this),this._onPointerDown=L2.bind(this),this._onPointerUp=N2.bind(this),this._onContextMenu=B2.bind(this),this._onMouseWheel=O2.bind(this),this._onKeyDown=F2.bind(this),this._onTouchStart=k2.bind(this),this._onTouchMove=z2.bind(this),this._onMouseDown=I2.bind(this),this._onMouseMove=U2.bind(this),this._interceptControlDown=H2.bind(this),this._interceptControlUp=V2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ag),this.update(),this.state=lt.NONE}update(e=null){const n=this.object.position;Rt.copy(n).sub(this.target),Rt.applyQuaternion(this._quat),this._spherical.setFromVector3(Rt),this.autoRotate&&this.state===lt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),r<-Math.PI?r+=sn:r>Math.PI&&(r-=sn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Rt.setFromSpherical(this._spherical),Rt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Rt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Rt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new N(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new N(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(a),this.object.updateMatrixWorld(),o=Rt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(yl.origin.copy(this.object.position),yl.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yl.direction))<b2?this.object.lookAt(this.target):(Cg.setFromNormalAndCoplanarPoint(this.object.up,this.target),yl.intersectPlane(Cg,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Yc||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Yc||this._lastTargetPosition.distanceToSquared(this.target)>Yc?(this.dispatchEvent(Ag),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Rt.setFromMatrixColumn(n,0),Rt.multiplyScalar(-e),this._panOffset.add(Rt)}_panUp(e,n){this.screenSpacePanning===!0?Rt.setFromMatrixColumn(n,1):(Rt.setFromMatrixColumn(n,0),Rt.crossVectors(this.object.up,Rt)),Rt.multiplyScalar(e),this._panOffset.add(Rt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Rt.copy(r).sub(this.target);let s=Rt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-sn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/n.clientHeight),this._rotateUp(sn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new ie,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function L2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function D2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function N2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ax),this.state=lt.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function I2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Ns.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=lt.DOLLY;break;case Ns.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}break;case Ns.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=lt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=lt.PAN}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(qd)}function U2(t){switch(this.state){case lt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case lt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case lt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function O2(t){this.enabled===!1||this.enableZoom===!1||this.state!==lt.NONE||(t.preventDefault(),this.dispatchEvent(qd),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(ax))}function F2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function k2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ws.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=lt.TOUCH_ROTATE;break;case ws.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=lt.TOUCH_PAN;break;default:this.state=lt.NONE}break;case 2:switch(this.touches.TWO){case ws.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=lt.TOUCH_DOLLY_PAN;break;case ws.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=lt.TOUCH_DOLLY_ROTATE;break;default:this.state=lt.NONE}break;default:this.state=lt.NONE}this.state!==lt.NONE&&this.dispatchEvent(qd)}function z2(t){switch(this._trackPointer(t),this.state){case lt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case lt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case lt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case lt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=lt.NONE}}function B2(t){this.enabled!==!1&&t.preventDefault()}function H2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function V2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}class G2 extends Aa{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new v2(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(a){const l=s.parse(JSON.parse(a));n&&n(l)},i,r)}parse(e){return new W2(e)}}class W2{constructor(e){this.isFont=!0,this.type="Font",this.data=e}generateShapes(e,n=100){const i=[],r=j2(e,n,this.data);for(let s=0,o=r.length;s<o;s++)i.push(...r[s].toShapes());return i}}function j2(t,e,n){const i=Array.from(t),r=e/n.resolution,s=(n.boundingBox.yMax-n.boundingBox.yMin+n.underlineThickness)*r,o=[];let a=0,l=0;for(let u=0;u<i.length;u++){const c=i[u];if(c===`
`)a=0,l-=s;else{const f=X2(c,r,a,l,n);a+=f.offsetX,o.push(f.path)}}return o}function X2(t,e,n,i,r){const s=r.glyphs[t]||r.glyphs["?"];if(!s){console.error('THREE.Font: character "'+t+'" does not exists in font family '+r.familyName+".");return}const o=new w2;let a,l,u,c,f,h,p,g;if(s.o){const y=s._cachedOutline||(s._cachedOutline=s.o.split(" "));for(let m=0,d=y.length;m<d;)switch(y[m++]){case"m":a=y[m++]*e+n,l=y[m++]*e+i,o.moveTo(a,l);break;case"l":a=y[m++]*e+n,l=y[m++]*e+i,o.lineTo(a,l);break;case"q":u=y[m++]*e+n,c=y[m++]*e+i,f=y[m++]*e+n,h=y[m++]*e+i,o.quadraticCurveTo(f,h,u,c);break;case"b":u=y[m++]*e+n,c=y[m++]*e+i,f=y[m++]*e+n,h=y[m++]*e+i,p=y[m++]*e+n,g=y[m++]*e+i,o.bezierCurveTo(f,h,p,g,u,c);break}}return{offsetX:s.ha*e,path:o}}class $2 extends $d{constructor(e,n={}){const i=n.font;if(i===void 0)super();else{const r=i.generateShapes(e,n.size);n.depth===void 0&&n.height!==void 0&&console.warn("THREE.TextGeometry: .height is now depreciated. Please use .depth instead"),n.depth=n.depth!==void 0?n.depth:n.height!==void 0?n.height:50,n.bevelThickness===void 0&&(n.bevelThickness=10),n.bevelSize===void 0&&(n.bevelSize=8),n.bevelEnabled===void 0&&(n.bevelEnabled=!1),super(r,n)}this.type="TextGeometry"}}da.enabled=!0;const du=window.innerWidth<768?2:2.5,Y2=({article:t,icons:e})=>{const n=Ye.useRef(null);return Ye.useEffect(()=>{const i=n.current,r=new NC,s=new gn(70,1.5,.1,1e3),o=new DC({alpha:!0,antialias:!0});Z2(o),i.appendChild(o.domElement),q2(r);const a=K2(r);J2(a,e),Q2(r),eR(r,t),s.position.set(0,0,6);const l=new P2(s,o.domElement);return l.enableDamping=!0,l.dampingFactor=.5,l.rotateSpeed=.5,l.minDistance=5,l.maxDistance=10,tR(o,r,s,a,l),()=>{i.removeChild(o.domElement)}},[t,e]),ae.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})},Z2=t=>{window.innerWidth<768?t.setSize(350,250):window.innerWidth<1024?t.setSize(600,400):t.setSize(1e3,650)},q2=t=>{const e=new E2(16777215,.4);e.position.set(0,0,1).normalize(),t.add(e);const n=new S2(16777215,4.5,5,0);n.color.setHSL(Math.random(),1,.5),n.position.set(0,100,90),t.add(n)},K2=t=>{const e=new Zd(1,128,128),n=new wa({color:14845163,transparent:!0,opacity:0}),i=new bn(e,n);return i.rotation.x=Math.PI/3,i.rotation.y=Math.PI/3,i.position.set(.4,0,0),t.add(i),i},J2=(t,e)=>e.map((n,i)=>{const r=new x2().load(n.src),s=new q_({map:r}),o=new UC(s),a=i/e.length*2*Math.PI;return o.position.set(du*Math.cos(a),du*Math.sin(a),0),t.add(o),o}),Q2=t=>{const e=new Yd(du-.04,du+.04,128),n=new wa({color:8214527,side:ti}),i=new bn(e,n);i.rotation.x=Math.PI/3,i.rotation.y=Math.PI/3,i.position.set(.4,0,0),t.add(i)},eR=(t,e)=>{new G2().load("font/helvetiker_bold.typeface.json",i=>{const r=new $2(e,{font:i,size:window.innerWidth<768?.8:.5,height:.2,curveSegments:64}),s=new wa({color:3158844}),o=new bn(r,s);r.computeBoundingBox(),r.boundingBox&&r.translate(-r.boundingBox.max.x/2,-.3,0),t.add(o)})},tR=(t,e,n,i,r)=>{const s=()=>{requestAnimationFrame(s),i.rotation.z+=.01,r.update(),t.render(e,n)};s()},nR=new Map([["bold",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),Te.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),iR=new Map([["bold",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),Te.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),rR=new Map([["bold",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),Te.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",Te.createElement(Te.Fragment,null,Te.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),sR=Ye.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var oR=Object.defineProperty,pu=Object.getOwnPropertySymbols,lx=Object.prototype.hasOwnProperty,ux=Object.prototype.propertyIsEnumerable,Rg=(t,e,n)=>e in t?oR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,bg=(t,e)=>{for(var n in e||(e={}))lx.call(e,n)&&Rg(t,n,e[n]);if(pu)for(var n of pu(e))ux.call(e,n)&&Rg(t,n,e[n]);return t},Pg=(t,e)=>{var n={};for(var i in t)lx.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&pu)for(var i of pu(t))e.indexOf(i)<0&&ux.call(t,i)&&(n[i]=t[i]);return n};const cx=Ye.forwardRef((t,e)=>{const n=t,{alt:i,color:r,size:s,weight:o,mirrored:a,children:l,weights:u}=n,c=Pg(n,["alt","color","size","weight","mirrored","children","weights"]),f=Ye.useContext(sR),{color:h="currentColor",size:p,weight:g="regular",mirrored:y=!1}=f,m=Pg(f,["color","size","weight","mirrored"]);return Te.createElement("svg",bg(bg({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s??p,height:s??p,fill:r??h,viewBox:"0 0 256 256",transform:a||y?"scale(-1, 1)":void 0},m),c),!!i&&Te.createElement("title",null,i),l,u.get(o??g))});cx.displayName="IconBase";const Kd=cx;var aR=Object.defineProperty,lR=Object.defineProperties,uR=Object.getOwnPropertyDescriptors,Lg=Object.getOwnPropertySymbols,cR=Object.prototype.hasOwnProperty,hR=Object.prototype.propertyIsEnumerable,Dg=(t,e,n)=>e in t?aR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,fR=(t,e)=>{for(var n in e||(e={}))cR.call(e,n)&&Dg(t,n,e[n]);if(Lg)for(var n of Lg(e))hR.call(e,n)&&Dg(t,n,e[n]);return t},dR=(t,e)=>lR(t,uR(e));const hx=Ye.forwardRef((t,e)=>Te.createElement(Kd,dR(fR({ref:e},t),{weights:nR})));hx.displayName="ArrowRight";var pR=Object.defineProperty,mR=Object.defineProperties,gR=Object.getOwnPropertyDescriptors,Ng=Object.getOwnPropertySymbols,vR=Object.prototype.hasOwnProperty,_R=Object.prototype.propertyIsEnumerable,Ig=(t,e,n)=>e in t?pR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,xR=(t,e)=>{for(var n in e||(e={}))vR.call(e,n)&&Ig(t,n,e[n]);if(Ng)for(var n of Ng(e))_R.call(e,n)&&Ig(t,n,e[n]);return t},yR=(t,e)=>mR(t,gR(e));const fx=Ye.forwardRef((t,e)=>Te.createElement(Kd,yR(xR({ref:e},t),{weights:iR})));fx.displayName="Moon";var SR=Object.defineProperty,MR=Object.defineProperties,ER=Object.getOwnPropertyDescriptors,Ug=Object.getOwnPropertySymbols,wR=Object.prototype.hasOwnProperty,TR=Object.prototype.propertyIsEnumerable,Og=(t,e,n)=>e in t?SR(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,AR=(t,e)=>{for(var n in e||(e={}))wR.call(e,n)&&Og(t,n,e[n]);if(Ug)for(var n of Ug(e))TR.call(e,n)&&Og(t,n,e[n]);return t},CR=(t,e)=>MR(t,ER(e));const dx=Ye.forwardRef((t,e)=>Te.createElement(Kd,CR(AR({ref:e},t),{weights:rR})));dx.displayName="Sun";const RR=()=>{const[t,e]=Ye.useState(!1);Ye.useEffect(()=>{const i=localStorage.getItem("dark-mode")==="true";e(i),i&&document.querySelector("html").classList.add("dark")},[]);const n=()=>{const i=document.querySelector("html");i.classList.toggle("dark");const r=i.classList.contains("dark");e(r),localStorage.setItem("dark-mode",r.toString())};return ae.jsx(ae.Fragment,{children:t?ae.jsx(dx,{size:22,color:"var(--color-primary)",className:"cursor-pointer cursor-hover fade-in",onClick:n}):ae.jsx(fx,{size:22,color:"var(--color-primary)",className:"cursor-pointer cursor-hover fade-in",onClick:n})})},bR=({sections:t})=>{const{t:e}=ya();return ae.jsx(ae.Fragment,{children:ae.jsxs("div",{className:"flex flex-col md:px-0 h-full md:w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[ae.jsxs("nav",{className:"flex justify-between px-4 md:px-0 w-full items-center h-12",children:[ae.jsx("div",{className:"border border-primary rounded-3xl px-3 py-1",children:ae.jsx("p",{className:"text-sm text-primary",children:"Full-Stack developper"})}),ae.jsxs("div",{className:"flex items-center",children:[ae.jsx(RR,{}),ae.jsx(pS,{}),ae.jsx(C2,{sections:t})]})]}),ae.jsxs("div",{className:"flex flex-col justify-center my-auto mx-4 items-center text-center",children:[ae.jsx("h1",{className:"text-xl sm:text-3xl lg:text-7xl font-bold text-primary",children:e("heroSection_title_1")}),ae.jsxs("div",{className:"my-4 text-center",children:[ae.jsx("h2",{className:"text-xs sm:text-sm lg:text-lg text-tertiary",children:e("heroSection_legend_1")}),ae.jsx("h2",{className:"text-xs lg:text-sm text-tertiary",children:e("heroSection_legend_2")})]})]})]})})},PR=()=>{const[t,e]=Ye.useState(0),{t:n}=ya(),i=[{name:"FRONT-END"},{name:"BACK-END"},{name:n("skillSection_tools")}];return ae.jsxs("div",{className:"flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[ae.jsx("h1",{className:"text-3xl text-primary text-center md:text-end font-bold",children:n("skillSection_title")}),ae.jsxs("div",{className:"w-full h-full flex flex-col py-10 md:flex-row",children:[ae.jsx("div",{className:"w-full h-1/6 md:w-1/4 md:h-full flex flex-row md:flex-col justify-evenly",children:i.map((r,s)=>ae.jsx("div",{onClick:()=>e(s),className:`text-sm md:text-xl lg:text-4xl w-1/4 md:w-auto h-16 md:h-[unset] py-4 px-2 text-center font-bold md:py-8 md:px-2 ${s===t?"bg-secondary":"bg-primary hover:bg-primary-hover"} text-slate-50 rounded-3xl cursor-hover transition ease-in duration-300`,children:r.name},s))}),ae.jsx("div",{className:"w-full md:w-3/4 h-3/4 md:h-full flex items-center justify-center",children:ae.jsx(R2,{article:i[t].name,articlesNames:i.map(r=>r.name)})})]})]})},LR=()=>{const{t}=ya(),[e,n]=Ye.useState(null),[i,r]=Ye.useState(!1),[s,o]=Ye.useState(null),a=[{name:"HBGG",description:t("projectSection_project_1_desc"),link:"images/hbgg.png"},{name:"Voyo",description:t("projectSection_project_2_desc"),link:"images/voyo.png"},{name:"Portfolio",description:t("projectSection_project_3_desc"),link:"images/portfolio.png"}],l=c=>{s&&(clearTimeout(s),o(null)),r(!1),n(c)},u=()=>{r(!0);const c=setTimeout(()=>n(null),200);o(c)};return ae.jsxs("div",{className:"flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[ae.jsx("h1",{className:"text-3xl text-center md:text-end text-primary font-bold",children:t("projectSection_title")}),ae.jsxs("div",{className:"h-full w-full flex",children:[ae.jsx("div",{className:"h-full w-4/6 hidden md:flex justify-center items-center",children:e&&ae.jsx("div",{className:`w-full h-3/4 flex items-center justify-center rounded-3xl ${i?"slide-out":"slide-in"}`,children:ae.jsx("img",{src:e.link,alt:e.name,className:`w-3/6 ${i?"smoothUnZoom":"smoothZoom"}`})})}),ae.jsx("div",{className:"h-full w-full md:w-2/6 flex flex-col justify-center",children:a.map((c,f)=>ae.jsxs("div",{className:"my-6 project cursor-hover",onMouseEnter:()=>l(c),onMouseLeave:u,children:[ae.jsxs("div",{className:"flex cursor-hover",children:[ae.jsx(hx,{size:32,color:"var(--color-secondary)",weight:"bold",className:"mr-4 project-arrow transform -translate-x-10 ease-cubic duration-500 opacity-0 cursor-hover"}),ae.jsxs("div",{className:"h-1/2 w-full flex justify-between items-center cursor-hover",children:[ae.jsx("h1",{className:"text-lg md:text-2xl text-primary font-bold project-name transform -translate-x-10 ease-cubic duration-500 cursor-hover ",children:c.name}),ae.jsx("p",{className:"text-sm md:text-lg text-text-color cursor-hover",children:c.description})]})]}),ae.jsx("hr",{className:"w-full my-2 border-2 border-primary border-opacity-60 cursor-hover"})]},f))})]})]})},DR=()=>{const[t,e]=Ye.useState(!1),n="mathysf84pro@gmail.com",i="https://www.instagram.com/mathys.frn/",r="docs/Mathys_FARINEAU.pdf",s=()=>{navigator.clipboard.writeText(n).then(()=>{e(!0),setTimeout(()=>e(!1),1e3)})};return ae.jsxs("div",{className:"flex flex-col w-9/12 py-10 h-3/6 md:py-0 absolute z-10",children:[ae.jsx("h1",{className:"text-primary font-bold text-lg md:text-3xl lg:text-7xl",children:"CONTACT"}),ae.jsx("hr",{className:"h-[2px] my-4 rounded-3xl bg-primary border-0"}),ae.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[ae.jsx(Zc,{title:"RÉSEAUX",content:"mathys.frn",link:i}),ae.jsx(Zc,{title:"EMAIL",content:n,onClick:s}),t&&ae.jsx(NR,{message:"Copié !"}),ae.jsx(Zc,{title:"CV",content:"Mon CV",link:r})]})]})},Zc=({title:t,content:e,onClick:n,link:i})=>ae.jsxs("div",{className:"flex items-end",children:[ae.jsx("h1",{className:"font-bold text-base lg:text-xl xl:text-3xl text-primary w-20 lg:w-32 xl:w-48",children:t}),i?ae.jsx("a",{className:"text-sm lg:text-xl xl:text-3xl text-text-color font-light relative inline-block link-underline decoration-0 after:absolute after:w-0 after:h-[.15rem] after:block after:mt-1 after:right-0 after:bg-primary after:transition[width-right] after:ease-in after:duration-300 hover:after:w-full hover:after:right-0 cursor-hover",href:i,target:"_blank",children:e}):ae.jsx("a",{href:"#",className:"text-sm lg:text-xl xl:text-3xl text-text-color font-light relative inline-block decoration-0 link-underline after:absolute after:w-0 after:h-[.15rem] after:block after:mt-1 after:right-0 after:bg-primary after:transition[width-right] after:ease-in after:duration-300 hover:after:w-full hover:after:right-0 cursor-hover",onClick:n,children:e})]}),NR=({message:t})=>ae.jsx("div",{className:"absolute mb-2 transform translate-x-[60rem] -translate-y-20 bg-neutral-800 p-2 rounded shadow text-sm",children:ae.jsx("div",{className:"relative",children:ae.jsx("p",{className:"text-gray-100",children:t})})}),IR=()=>{Ye.useEffect(()=>{const t=document.createElement("div");t.classList.add("cursor"),document.body.appendChild(t);let e=0,n=0,i=0,r=0;const s=f=>{e=f.clientX,n=f.clientY},o=()=>{i+=(e-i)*.25,r+=(n-r)*.25;const f=window.innerWidth-t.offsetWidth,h=window.innerHeight-t.offsetHeight;i=Math.max(0,Math.min(i,f)),r=Math.max(0,Math.min(r,h)),t.style.left=`${i}px`,t.style.top=`${r}px`,requestAnimationFrame(o)},a=f=>{f.target.classList.contains("cursor-hover")&&t.classList.add("hover")},l=f=>{f.target.classList.contains("cursor-hover")&&t.classList.remove("hover")},u=()=>{window.addEventListener("mousemove",s),window.addEventListener("mouseover",a),window.addEventListener("mouseout",l),requestAnimationFrame(o)},c=()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseover",a),window.removeEventListener("mouseout",l),document.body.removeChild(t)};return u(),c},[])};function UR(){IR();const{t}=ya(),e=[t("heroSection_title"),t("skillSection_title"),t("projectSection_title"),t("contactSection_title")],n=[{name:t("heroSection_title"),component:ae.jsx(bR,{sections:e})},{name:t("skillSection_title"),component:ae.jsx(PR,{})},{name:t("projectSection_title"),component:ae.jsx(LR,{})},{name:t("contactSection_title"),component:ae.jsx(DR,{})}];return ae.jsxs("div",{className:"relative sections snap-y snap-mandatory overflow-y-scroll h-screen overflow-hidden bg-section-color ",children:[n.map((i,r)=>ae.jsx("section",{className:"section snap-start h-screen text-3xl w-full flex items-center justify-center",children:ae.jsx("div",{className:"flex w-screen h-full items-center justify-center",children:i.component})},r)),ae.jsx(v_,{sections:n.map(i=>i.component)}),ae.jsx(A2,{}),ae.jsx("div",{className:"grainy-filter fixed top-0 left-0 w-full h-full pointer-events-none opacity-5 z-50 mix-blend-multiply",style:{background:"url(images/grainy.jpg)"}})]})}const Be=t=>typeof t=="string",So=()=>{let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n},Fg=t=>t==null?"":""+t,OR=(t,e,n)=>{t.forEach(i=>{e[i]&&(n[i]=e[i])})},FR=/###/g,kg=t=>t&&t.indexOf("###")>-1?t.replace(FR,"."):t,zg=t=>!t||Be(t),Go=(t,e,n)=>{const i=Be(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(zg(t))return{};const s=kg(i[r]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++r}return zg(t)?{}:{obj:t,k:kg(i[r])}},Bg=(t,e,n)=>{const{obj:i,k:r}=Go(t,e,Object);if(i!==void 0||e.length===1){i[r]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),a=Go(t,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=Go(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n},kR=(t,e,n,i)=>{const{obj:r,k:s}=Go(t,e,Object);r[s]=r[s]||[],r[s].push(n)},mu=(t,e)=>{const{obj:n,k:i}=Go(t,e);if(n)return n[i]},zR=(t,e,n)=>{const i=mu(t,n);return i!==void 0?i:mu(e,n)},px=(t,e,n)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?Be(t[i])||t[i]instanceof String||Be(e[i])||e[i]instanceof String?n&&(t[i]=e[i]):px(t[i],e[i],n):t[i]=e[i]);return t},cs=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var BR={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const HR=t=>Be(t)?t.replace(/[&<>"'\/]/g,e=>BR[e]):t;class VR{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const GR=[" ",",","?","!",";"],WR=new VR(20),jR=(t,e,n)=>{e=e||"",n=n||"";const i=GR.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(i.length===0)return!0;const r=WR.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!r.test(t);if(!s){const o=t.indexOf(n);o>0&&!r.test(t.substring(0,o))&&(s=!0)}return s},zf=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(n);let r=t;for(let s=0;s<i.length;){if(!r||typeof r!="object")return;let o,a="";for(let l=s;l<i.length;++l)if(l!==s&&(a+=n),a+=i[l],o=r[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;s+=l-s+1;break}r=o}return r},gu=t=>t&&t.replace("_","-"),XR={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class vu{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||XR,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,i,r){return r&&!this.debug?null:(Be(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new vu(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new vu(this.logger,e)}}var ii=new vu;class Bu{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(n)||0;this.observers[i].set(n,r+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let u=0;u<l;u++)a.apply(a,[e,...i])})}}class Hg extends Bu{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],i&&(Array.isArray(i)?a.push(...i):Be(i)&&s?a.push(...i.split(s)):a.push(i)));const l=mu(this.data,a);return!l&&!n&&!i&&e.indexOf(".")>-1&&(e=a[0],n=a[1],i=a.slice(2).join(".")),l||!o||!Be(i)?l:zf(this.data&&this.data[e]&&this.data[e][n],i,s)}addResource(e,n,i,r){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,n];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),r=n,n=a[1]),this.addNamespaces(n),Bg(this.data,a,r),s.silent||this.emit("added",e,n,i,r)}addResources(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in i)(Be(i[s])||Array.isArray(i[s]))&&this.addResource(e,n,s,i[s],{silent:!0});r.silent||this.emit("added",e,n,i)}addResourceBundle(e,n,i,r,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=n,n=a[1]),this.addNamespaces(n);let l=mu(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?px(l,i,s):l={...l,...i},Bg(this.data,a,l),o.silent||this.emit("added",e,n,i)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(r=>n[r]&&Object.keys(n[r]).length>0)}toJSON(){return this.data}}var mx={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,i,r){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,i,r))}),e}};const Vg={};class _u extends Bu{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),OR(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=ii.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,n);return i&&i.res!==void 0}extractFromKey(e,n){let i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!jR(e,i,r);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:s};const u=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(u[0])>-1)&&(s=u.shift()),e=u.join(r)}return Be(s)&&(s=[s]),{key:e,namespaces:s}}translate(e,n,i){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],u=n.lng||this.language,c=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(u&&u.toLowerCase()==="cimode"){if(c){const x=n.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${x}${o}`,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${x}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:u,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const f=this.resolve(e,n);let h=f&&f.res;const p=f&&f.usedKey||o,g=f&&f.exactUsedKey||o,y=Object.prototype.toString.apply(h),m=["[object Number]","[object Function]","[object RegExp]"],d=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,v=!this.i18nFormat||this.i18nFormat.handleAsObject,_=!Be(h)&&typeof h!="boolean"&&typeof h!="number";if(v&&h&&_&&m.indexOf(y)<0&&!(Be(d)&&Array.isArray(h))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,h,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(f.res=x,f.usedParams=this.getUsedParamsDetails(n),f):x}if(s){const x=Array.isArray(h),b=x?[]:{},A=x?g:p;for(const T in h)if(Object.prototype.hasOwnProperty.call(h,T)){const R=`${A}${s}${T}`;b[T]=this.translate(R,{...n,joinArrays:!1,ns:a}),b[T]===R&&(b[T]=h[T])}h=b}}else if(v&&Be(d)&&Array.isArray(h))h=h.join(d),h&&(h=this.extendTranslation(h,e,n,i));else{let x=!1,b=!1;const A=n.count!==void 0&&!Be(n.count),T=_u.hasDefaultValue(n),R=A?this.pluralResolver.getSuffix(u,n.count,n):"",w=n.ordinal&&A?this.pluralResolver.getSuffix(u,n.count,{ordinal:!1}):"",S=A&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),L=S&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${R}`]||n[`defaultValue${w}`]||n.defaultValue;!this.isValidLookup(h)&&T&&(x=!0,h=L),this.isValidLookup(h)||(b=!0,h=o);const k=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:h,W=T&&L!==h&&this.options.updateMissing;if(b||x||W){if(this.logger.log(W?"updateKey":"missingKey",u,l,o,W?L:h),s){const D=this.resolve(o,{...n,keySeparator:!1});D&&D.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let Z=[];const H=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&H&&H[0])for(let D=0;D<H.length;D++)Z.push(H[D]);else this.options.saveMissingTo==="all"?Z=this.languageUtils.toResolveHierarchy(n.lng||this.language):Z.push(n.lng||this.language);const K=(D,V,q)=>{const oe=T&&q!==h?q:k;this.options.missingKeyHandler?this.options.missingKeyHandler(D,l,V,oe,W,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(D,l,V,oe,W,n),this.emit("missingKey",D,l,V,h)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?Z.forEach(D=>{const V=this.pluralResolver.getSuffixes(D,n);S&&n[`defaultValue${this.options.pluralSeparator}zero`]&&V.indexOf(`${this.options.pluralSeparator}zero`)<0&&V.push(`${this.options.pluralSeparator}zero`),V.forEach(q=>{K([D],o+q,n[`defaultValue${q}`]||L)})}):K(Z,o,L))}h=this.extendTranslation(h,e,n,f,i),b&&h===o&&this.options.appendNamespaceToMissingKey&&(h=`${l}:${o}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?h=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,x?h:void 0):h=this.options.parseMissingKeyHandler(h))}return r?(f.res=h,f.usedParams=this.getUsedParamsDetails(n),f):h}extendTranslation(e,n,i,r,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const u=Be(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let c;if(u){const h=e.match(this.interpolator.nestingRegexp);c=h&&h.length}let f=i.replace&&!Be(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(f={...this.options.interpolation.defaultVariables,...f}),e=this.interpolator.interpolate(e,f,i.lng||this.language||r.usedLng,i),u){const h=e.match(this.interpolator.nestingRegexp),p=h&&h.length;c<p&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var h=arguments.length,p=new Array(h),g=0;g<h;g++)p[g]=arguments[g];return s&&s[0]===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):o.translate(...p,n)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=Be(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=mx.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,s,o,a;return Be(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const u=this.extractFromKey(l,n),c=u.key;r=c;let f=u.namespaces;this.options.fallbackNS&&(f=f.concat(this.options.fallbackNS));const h=n.count!==void 0&&!Be(n.count),p=h&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),g=n.context!==void 0&&(Be(n.context)||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);f.forEach(m=>{this.isValidLookup(i)||(a=m,!Vg[`${y[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Vg[`${y[0]}-${m}`]=!0,this.logger.warn(`key "${r}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(d=>{if(this.isValidLookup(i))return;o=d;const v=[c];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(v,c,d,m,n);else{let x;h&&(x=this.pluralResolver.getSuffix(d,n.count,n));const b=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(h&&(v.push(c+x),n.ordinal&&x.indexOf(A)===0&&v.push(c+x.replace(A,this.options.pluralSeparator)),p&&v.push(c+b)),g){const T=`${c}${this.options.contextSeparator}${n.context}`;v.push(T),h&&(v.push(T+x),n.ordinal&&x.indexOf(A)===0&&v.push(T+x.replace(A,this.options.pluralSeparator)),p&&v.push(T+b))}}let _;for(;_=v.pop();)this.isValidLookup(i)||(s=_,i=this.getResource(d,m,_,n))}))})}),{res:i,usedKey:r,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,i,r):this.resourceStore.getResource(e,n,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Be(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const s of n)delete r[s]}return r}static hasDefaultValue(e){const n="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&n===i.substring(0,n.length)&&e[i]!==void 0)return!0;return!1}}const qc=t=>t.charAt(0).toUpperCase()+t.slice(1);class Gg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=ii.create("languageUtils")}getScriptPartFromCode(e){if(e=gu(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=gu(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(Be(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),n.indexOf(i[1].toLowerCase())>-1&&(i[1]=qc(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),n.indexOf(i[1].toLowerCase())>-1&&(i[1]=qc(i[1].toLowerCase())),n.indexOf(i[2].toLowerCase())>-1&&(i[2]=qc(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(i=>{if(n)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(n=r)}),!n&&this.options.supportedLngs&&e.forEach(i=>{if(n)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return n=r;n=this.options.supportedLngs.find(s=>{if(s===r)return s;if(!(s.indexOf("-")<0&&r.indexOf("-")<0)&&(s.indexOf("-")>0&&r.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===r||s.indexOf(r)===0&&r.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),Be(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let i=e[n];return i||(i=e[this.getScriptPartFromCode(n)]),i||(i=e[this.formatLanguageCode(n)]),i||(i=e[this.getLanguagePartFromCode(n)]),i||(i=e.default),i||[]}toResolveHierarchy(e,n){const i=this.getFallbackCodes(n||this.options.fallbackLng||[],e),r=[],s=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Be(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):Be(e)&&s(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&s(this.formatLanguageCode(o))}),r}}let $R=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],YR={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const ZR=["v1","v2","v3"],qR=["v4"],Wg={zero:0,one:1,two:2,few:3,many:4,other:5},KR=()=>{const t={};return $R.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:YR[e.fc]}})}),t};class JR{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=ii.create("pluralResolver"),(!this.options.compatibilityJSON||qR.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=KR(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{const i=gu(e==="dev"?"en":e),r=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];const o=new Intl.PluralRules(i,{type:r});return this.pluralRulesCache[s]=o,o}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,n);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${n}${r}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,n);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,s)=>Wg[r]-Wg[s]).map(r=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,n)):[]}getSuffix(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(n)}`:this.getSuffixRetroCompatible(r,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const i=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const s=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!ZR.includes(this.options.compatibilityJSON)}}const jg=function(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=zR(t,e,n);return!s&&r&&Be(n)&&(s=zf(t,n,i),s===void 0&&(s=zf(e,n,i))),s},Kc=t=>t.replace(/\$/g,"$$$$");class QR{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ii.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:i,useRawValueToEscape:r,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:u,unescapeSuffix:c,unescapePrefix:f,nestingPrefix:h,nestingPrefixEscaped:p,nestingSuffix:g,nestingSuffixEscaped:y,nestingOptionsSeparator:m,maxReplaces:d,alwaysFormat:v}=e.interpolation;this.escape=n!==void 0?n:HR,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?cs(s):o||"{{",this.suffix=a?cs(a):l||"}}",this.formatSeparator=u||",",this.unescapePrefix=c?"":f||"-",this.unescapeSuffix=this.unescapePrefix?"":c||"",this.nestingPrefix=h?cs(h):p||cs("$t("),this.nestingSuffix=g?cs(g):y||cs(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=d||1e3,this.alwaysFormat=v!==void 0?v:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,i)=>n&&n.source===i?(n.lastIndex=0,n):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,i,r){let s,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},u=p=>{if(p.indexOf(this.formatSeparator)<0){const d=jg(n,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(d,void 0,i,{...r,...n,interpolationkey:p}):d}const g=p.split(this.formatSeparator),y=g.shift().trim(),m=g.join(this.formatSeparator).trim();return this.format(jg(n,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),m,i,{...r,...n,interpolationkey:y})};this.resetRegExp();const c=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,f=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>Kc(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?Kc(this.escape(p)):Kc(p)}].forEach(p=>{for(a=0;s=p.regex.exec(e);){const g=s[1].trim();if(o=u(g),o===void 0)if(typeof c=="function"){const m=c(e,s,r);o=Be(m)?m:""}else if(r&&Object.prototype.hasOwnProperty.call(r,g))o="";else if(f){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${g} for interpolating ${e}`),o="";else!Be(o)&&!this.useRawValueToEscape&&(o=Fg(o));const y=p.safeValue(o);if(e=e.replace(s[0],y),f?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=s[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,s,o;const a=(l,u)=>{const c=this.nestingOptionsSeparator;if(l.indexOf(c)<0)return l;const f=l.split(new RegExp(`${c}[ ]*{`));let h=`{${f[1]}`;l=f[0],h=this.interpolate(h,o);const p=h.match(/'/g),g=h.match(/"/g);(p&&p.length%2===0&&!g||g.length%2!==0)&&(h=h.replace(/'/g,'"'));try{o=JSON.parse(h),u&&(o={...u,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${c}${h}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!Be(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let u=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const c=r[1].split(this.formatSeparator).map(f=>f.trim());r[1]=c.shift(),l=c,u=!0}if(s=n(a.call(this,r[1].trim(),o),o),s&&r[0]===e&&!Be(s))return s;Be(s)||(s=Fg(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),u&&(s=l.reduce((c,f)=>this.format(c,f,i.lng,{...i,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const eb=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?n.currency||(n.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?n.range||(n.range=r.trim()):r.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),u=l.join(":").trim().replace(/^'+|'+$/g,""),c=a.trim();n[c]||(n[c]=u),u==="false"&&(n[c]=!1),u==="true"&&(n[c]=!0),isNaN(u)||(n[c]=parseInt(u,10))}})}return{formatName:e,formatOptions:n}},hs=t=>{const e={};return(n,i,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const o=i+JSON.stringify(s);let a=e[o];return a||(a=t(gu(i),r),e[o]=a),a(n)}};class tb{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=ii.create("formatter"),this.options=e,this.formats={number:hs((n,i)=>{const r=new Intl.NumberFormat(n,{...i});return s=>r.format(s)}),currency:hs((n,i)=>{const r=new Intl.NumberFormat(n,{...i,style:"currency"});return s=>r.format(s)}),datetime:hs((n,i)=>{const r=new Intl.DateTimeFormat(n,{...i});return s=>r.format(s)}),relativetime:hs((n,i)=>{const r=new Intl.RelativeTimeFormat(n,{...i});return s=>r.format(s,i.range||"day")}),list:hs((n,i)=>{const r=new Intl.ListFormat(n,{...i});return s=>r.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=hs(n)}format(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(a=>a.indexOf(")")>-1)){const a=s.findIndex(l=>l.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{const{formatName:u,formatOptions:c}=eb(l);if(this.formats[u]){let f=a;try{const h=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},p=h.locale||h.lng||r.locale||r.lng||i;f=this.formats[u](a,p,{...c,...r,...h})}catch(h){this.logger.warn(h)}return f}else this.logger.warn(`there was no format function for ${u}`);return a},e)}}const nb=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class ib extends Bu{constructor(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=ii.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,n,i,r){const s={},o={},a={},l={};return e.forEach(u=>{let c=!0;n.forEach(f=>{const h=`${u}|${f}`;!i.reload&&this.store.hasResourceBundle(u,f)?this.state[h]=2:this.state[h]<0||(this.state[h]===1?o[h]===void 0&&(o[h]=!0):(this.state[h]=1,c=!1,o[h]===void 0&&(o[h]=!0),s[h]===void 0&&(s[h]=!0),l[f]===void 0&&(l[f]=!0)))}),c||(a[u]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,i){const r=e.split("|"),s=r[0],o=r[1];n&&this.emit("failedLoading",s,o,n),!n&&i&&this.store.addResourceBundle(s,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{kR(l.loaded,[s],o),nb(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(u=>{a[u]||(a[u]={});const c=l.loaded[u];c.length&&c.forEach(f=>{a[u][f]===void 0&&(a[u][f]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:i,tried:r,wait:s,callback:o});return}this.readingCalls++;const a=(u,c)=>{if(this.readingCalls--,this.waitingReads.length>0){const f=this.waitingReads.shift();this.read(f.lng,f.ns,f.fcName,f.tried,f.wait,f.callback)}if(u&&c&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,i,r+1,s*2,o)},s);return}o(u,c)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const u=l(e,n);u&&typeof u.then=="function"?u.then(c=>a(null,c)).catch(a):a(null,u)}catch(u){a(u)}return}return l(e,n,a)}prepareLoading(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Be(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Be(n)&&(n=[n]);const s=this.queueLoad(e,n,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,i){this.prepareLoading(e,n,{},i)}reload(e,n,i){this.prepareLoading(e,n,{reload:!0},i)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],s=i[1];this.read(r,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${r} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${r}`,a),this.loaded(e,o,a)})}saveMissing(e,n,i,r,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:s},u=this.backend.create.bind(this.backend);if(u.length<6)try{let c;u.length===5?c=u(e,n,i,r,l):c=u(e,n,i,r),c&&typeof c.then=="function"?c.then(f=>a(null,f)).catch(a):a(null,c)}catch(c){a(c)}else u(e,n,i,r,a,l)}!e||!e[0]||this.store.addResource(e[0],n,i,r)}}}const Xg=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),Be(t[1])&&(e.defaultValue=t[1]),Be(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(i=>{e[i]=n[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),$g=t=>(Be(t.ns)&&(t.ns=[t.ns]),Be(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),Be(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Sl=()=>{},rb=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class pa extends Bu{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=$g(e),this.services={},this.logger=ii,this.modules={external:[]},rb(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(i=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(Be(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const r=Xg();this.options={...r,...this.options,...$g(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=c=>c?typeof c=="function"?new c:c:null;if(!this.options.isClone){this.modules.logger?ii.init(s(this.modules.logger),this.options):ii.init(null,this.options);let c;this.modules.formatter?c=this.modules.formatter:typeof Intl<"u"&&(c=tb);const f=new Gg(this.options);this.store=new Hg(this.options.resources,this.options);const h=this.services;h.logger=ii,h.resourceStore=this.store,h.languageUtils=f,h.pluralResolver=new JR(f,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),c&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(h.formatter=s(c),h.formatter.init(h,this.options),this.options.interpolation.format=h.formatter.format.bind(h.formatter)),h.interpolator=new QR(this.options),h.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},h.backendConnector=new ib(s(this.modules.backend),h.resourceStore,h,this.options),h.backendConnector.on("*",function(p){for(var g=arguments.length,y=new Array(g>1?g-1:0),m=1;m<g;m++)y[m-1]=arguments[m];e.emit(p,...y)}),this.modules.languageDetector&&(h.languageDetector=s(this.modules.languageDetector),h.languageDetector.init&&h.languageDetector.init(h,this.options.detection,this.options)),this.modules.i18nFormat&&(h.i18nFormat=s(this.modules.i18nFormat),h.i18nFormat.init&&h.i18nFormat.init(this)),this.translator=new _u(this.services,this.options),this.translator.on("*",function(p){for(var g=arguments.length,y=new Array(g>1?g-1:0),m=1;m<g;m++)y[m-1]=arguments[m];e.emit(p,...y)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Sl),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const c=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);c.length>0&&c[0]!=="dev"&&(this.options.lng=c[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(c=>{this[c]=function(){return e.store[c](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(c=>{this[c]=function(){return e.store[c](...arguments),e}});const l=So(),u=()=>{const c=(f,h)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(h),i(f,h)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return c(null,this.t.bind(this));this.changeLanguage(this.options.lng,c)};return this.options.resources||!this.options.initImmediate?u():setTimeout(u,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sl;const r=Be(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const s=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(u=>{u!=="cimode"&&s.indexOf(u)<0&&s.push(u)})};r?o(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(s,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,n,i){const r=So();return typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),i||(i=Sl),this.services.backendConnector.reload(e,n,s=>{r.resolve(),i(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&mx.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,n){var i=this;this.isLanguageChangingTo=e;const r=So();this.emit("languageChanging",e);const s=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,u)=>{u?(s(u),this.translator.changeLanguage(u),this.isLanguageChangingTo=void 0,this.emit("languageChanged",u),this.logger.log("languageChanged",u)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),n&&n(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const u=Be(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);u&&(this.language||s(u),this.translator.language||this.translator.changeLanguage(u),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(u)),this.loadResources(u,c=>{o(c,u)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),r}getFixedT(e,n,i){var r=this;const s=function(o,a){let l;if(typeof a!="object"){for(var u=arguments.length,c=new Array(u>2?u-2:0),f=2;f<u;f++)c[f-2]=arguments[f];l=r.options.overloadTranslationOptionHandler([o,a].concat(c))}else l={...a};l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||s.keyPrefix);const h=r.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(g=>`${l.keyPrefix}${h}${g}`):p=l.keyPrefix?`${l.keyPrefix}${h}${o}`:o,r.t(p,l)};return Be(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=i,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=n.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const u=this.services.backendConnector.state[`${a}|${l}`];return u===-1||u===0||u===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(s,e)))}loadNamespaces(e,n){const i=So();return this.options.ns?(Be(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),n&&n(r)}),i):(n&&n(),Promise.resolve())}loadLanguages(e,n){const i=So();Be(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=r.concat(s),this.loadResources(o=>{i.resolve(),n&&n(o)}),i):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new Gg(Xg());return n.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new pa(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Sl;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new pa(r);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i&&(s.store=new Hg(this.store.data,r),s.services.resourceStore=s.store),s.translator=new _u(s.services,r),s.translator.on("*",function(a){for(var l=arguments.length,u=new Array(l>1?l-1:0),c=1;c<l;c++)u[c-1]=arguments[c];s.emit(a,...u)}),s.init(r,n),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Yt=pa.createInstance();Yt.createInstance=pa.createInstance;Yt.createInstance;Yt.dir;Yt.init;Yt.loadResources;Yt.reloadResources;Yt.use;Yt.changeLanguage;Yt.getFixedT;Yt.t;Yt.exists;Yt.setDefaultNamespace;Yt.hasLoadedNamespace;Yt.loadNamespaces;Yt.loadLanguages;const{slice:sb,forEach:ob}=[];function ab(t){return ob.call(sb.call(arguments,1),e=>{if(e)for(const n in e)t[n]===void 0&&(t[n]=e[n])}),t}const Yg=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,lb=(t,e,n)=>{const i=n||{};i.path=i.path||"/";const r=encodeURIComponent(e);let s=`${t}=${r}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!Yg.test(i.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${i.domain}`}if(i.path){if(!Yg.test(i.path))throw new TypeError("option path is invalid");s+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s},Zg={create(t,e,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+n*60*1e3)),i&&(r.domain=i),document.cookie=lb(t,encodeURIComponent(e),r)},read(t){const e=`${t}=`,n=document.cookie.split(";");for(let i=0;i<n.length;i++){let r=n[i];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(t){this.create(t,"",-1)}};var ub={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return Zg.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:n,cookieMinutes:i,cookieDomain:r,cookieOptions:s}=e;n&&typeof document<"u"&&Zg.create(n,t,i,r,s)}},cb={name:"querystring",lookup(t){var i;let{lookupQuerystring:e}=t,n;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const o=r.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(n=o[a].substring(l+1))}}return n}};let Mo=null;const qg=()=>{if(Mo!==null)return Mo;try{Mo=window!=="undefined"&&window.localStorage!==null;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{Mo=!1}return Mo};var hb={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&qg())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:n}=e;n&&qg()&&window.localStorage.setItem(n,t)}};let Eo=null;const Kg=()=>{if(Eo!==null)return Eo;try{Eo=window!=="undefined"&&window.sessionStorage!==null;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{Eo=!1}return Eo};var fb={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&Kg())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:n}=e;n&&Kg()&&window.sessionStorage.setItem(n,t)}},db={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:i,language:r}=navigator;if(n)for(let s=0;s<n.length;s++)e.push(n[s]);i&&e.push(i),r&&e.push(r)}return e.length>0?e:void 0}},pb={name:"htmlTag",lookup(t){let{htmlTag:e}=t,n;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(n=i.getAttribute("lang")),n}},mb={name:"path",lookup(t){var r;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(r=n[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},gb={name:"subdomain",lookup(t){var r,s;let{lookupFromSubdomainIndex:e}=t;const n=typeof e=="number"?e+1:1,i=typeof window<"u"&&((s=(r=window.location)==null?void 0:r.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[n]}};function vb(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t}}class gx{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=ab(n,this.options||{},vb()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(ub),this.addDetector(cb),this.addDetector(hb),this.addDetector(fb),this.addDetector(db),this.addDetector(pb),this.addDetector(mb),this.addDetector(gb)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let n=[];return e.forEach(i=>{if(this.detectors[i]){let r=this.detectors[i].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(n=n.concat(r))}}),n=n.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}gx.type="languageDetector";const _b="Home",xb="Skills",yb="Projects",Sb="Contact",Mb="Hi, my name is Mathys.",Eb="I transform lines of code into web experiments...",wb="...and debug my mistakes late at night",Tb="TOOLS",Ab="Symfony Application ",Cb="Mobile Application",Rb="UX/UI Frontend",bb={heroSection_title:_b,skillSection_title:xb,projectSection_title:yb,contactSection_title:Sb,heroSection_title_1:Mb,heroSection_legend_1:Eb,heroSection_legend_2:wb,skillSection_tools:Tb,projectSection_project_1_desc:Ab,projectSection_project_2_desc:Cb,projectSection_project_3_desc:Rb},Pb="Accueil",Lb="Mes technologies",Db="Mes projets",Nb="Contact",Ib="Enchanté, je m'appelle Mathys.",Ub="Je transforme des lignes de code en expériences web...",Ob="...et débug mes erreurs tard le soir",Fb="OUTILS",kb="Application Symfony",zb="Application Mobile",Bb="UX/UI Frontend",Hb={heroSection_title:Pb,skillSection_title:Lb,projectSection_title:Db,contactSection_title:Nb,heroSection_title_1:Ib,heroSection_legend_1:Ub,heroSection_legend_2:Ob,skillSection_tools:Fb,projectSection_project_1_desc:kb,projectSection_project_2_desc:zb,projectSection_project_3_desc:Bb},Vb={fr:{translation:Hb},en:{translation:bb}};Yt.use(gx).use(iS).init({resources:Vb,fallbackLng:"fr",interpolation:{escapeValue:!1}}).then(t=>null);Jc.createRoot(document.getElementById("root")).render(ae.jsx(UR,{}));
