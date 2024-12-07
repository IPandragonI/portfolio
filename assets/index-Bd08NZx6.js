(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function cg(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var ug={exports:{}},jl={},fg={exports:{}},He={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qo=Symbol.for("react.element"),Ev=Symbol.for("react.portal"),wv=Symbol.for("react.fragment"),Tv=Symbol.for("react.strict_mode"),Av=Symbol.for("react.profiler"),Cv=Symbol.for("react.provider"),Rv=Symbol.for("react.context"),bv=Symbol.for("react.forward_ref"),Pv=Symbol.for("react.suspense"),Lv=Symbol.for("react.memo"),Dv=Symbol.for("react.lazy"),Mh=Symbol.iterator;function Nv(t){return t===null||typeof t!="object"?null:(t=Mh&&t[Mh]||t["@@iterator"],typeof t=="function"?t:null)}var dg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},hg=Object.assign,pg={};function Bs(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||dg}Bs.prototype.isReactComponent={};Bs.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Bs.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function mg(){}mg.prototype=Bs.prototype;function td(t,e,n){this.props=t,this.context=e,this.refs=pg,this.updater=n||dg}var nd=td.prototype=new mg;nd.constructor=td;hg(nd,Bs.prototype);nd.isPureReactComponent=!0;var Eh=Array.isArray,gg=Object.prototype.hasOwnProperty,id={current:null},_g={key:!0,ref:!0,__self:!0,__source:!0};function vg(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)gg.call(e,i)&&!_g.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:qo,type:t,key:s,ref:o,props:r,_owner:id.current}}function Iv(t,e){return{$$typeof:qo,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function rd(t){return typeof t=="object"&&t!==null&&t.$$typeof===qo}function Uv(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var wh=/\/+/g;function hc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Uv(""+t.key):e.toString(36)}function Za(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case qo:case Ev:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+hc(o,0):i,Eh(r)?(n="",t!=null&&(n=t.replace(wh,"$&/")+"/"),Za(r,e,n,"",function(c){return c})):r!=null&&(rd(r)&&(r=Iv(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(wh,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Eh(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+hc(s,a);o+=Za(s,e,n,l,r)}else if(l=Nv(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+hc(s,a++),o+=Za(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ca(t,e,n){if(t==null)return t;var i=[],r=0;return Za(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Ov(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Qt={current:null},qa={transition:null},Fv={ReactCurrentDispatcher:Qt,ReactCurrentBatchConfig:qa,ReactCurrentOwner:id};function xg(){throw Error("act(...) is not supported in production builds of React.")}He.Children={map:ca,forEach:function(t,e,n){ca(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ca(t,function(){e++}),e},toArray:function(t){return ca(t,function(e){return e})||[]},only:function(t){if(!rd(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};He.Component=Bs;He.Fragment=wv;He.Profiler=Av;He.PureComponent=td;He.StrictMode=Tv;He.Suspense=Pv;He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Fv;He.act=xg;He.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=hg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=id.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)gg.call(e,l)&&!_g.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:qo,type:t.type,key:r,ref:s,props:i,_owner:o}};He.createContext=function(t){return t={$$typeof:Rv,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Cv,_context:t},t.Consumer=t};He.createElement=vg;He.createFactory=function(t){var e=vg.bind(null,t);return e.type=t,e};He.createRef=function(){return{current:null}};He.forwardRef=function(t){return{$$typeof:bv,render:t}};He.isValidElement=rd;He.lazy=function(t){return{$$typeof:Dv,_payload:{_status:-1,_result:t},_init:Ov}};He.memo=function(t,e){return{$$typeof:Lv,type:t,compare:e===void 0?null:e}};He.startTransition=function(t){var e=qa.transition;qa.transition={};try{t()}finally{qa.transition=e}};He.unstable_act=xg;He.useCallback=function(t,e){return Qt.current.useCallback(t,e)};He.useContext=function(t){return Qt.current.useContext(t)};He.useDebugValue=function(){};He.useDeferredValue=function(t){return Qt.current.useDeferredValue(t)};He.useEffect=function(t,e){return Qt.current.useEffect(t,e)};He.useId=function(){return Qt.current.useId()};He.useImperativeHandle=function(t,e,n){return Qt.current.useImperativeHandle(t,e,n)};He.useInsertionEffect=function(t,e){return Qt.current.useInsertionEffect(t,e)};He.useLayoutEffect=function(t,e){return Qt.current.useLayoutEffect(t,e)};He.useMemo=function(t,e){return Qt.current.useMemo(t,e)};He.useReducer=function(t,e,n){return Qt.current.useReducer(t,e,n)};He.useRef=function(t){return Qt.current.useRef(t)};He.useState=function(t){return Qt.current.useState(t)};He.useSyncExternalStore=function(t,e,n){return Qt.current.useSyncExternalStore(t,e,n)};He.useTransition=function(){return Qt.current.useTransition()};He.version="18.3.1";fg.exports=He;var Fe=fg.exports;const ve=cg(Fe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kv=Fe,zv=Symbol.for("react.element"),Bv=Symbol.for("react.fragment"),Hv=Object.prototype.hasOwnProperty,Vv=kv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Gv={key:!0,ref:!0,__self:!0,__source:!0};function yg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Hv.call(e,i)&&!Gv.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:zv,type:t,key:s,ref:o,props:r,_owner:Vv.current}}jl.Fragment=Bv;jl.jsx=yg;jl.jsxs=yg;ug.exports=jl;var te=ug.exports,vu={},Sg={exports:{}},vn={},Mg={exports:{}},Eg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(L,j){var Z=L.length;L.push(j);e:for(;0<Z;){var se=Z-1>>>1,Me=L[se];if(0<r(Me,j))L[se]=j,L[Z]=Me,Z=se;else break e}}function n(L){return L.length===0?null:L[0]}function i(L){if(L.length===0)return null;var j=L[0],Z=L.pop();if(Z!==j){L[0]=Z;e:for(var se=0,Me=L.length,qe=Me>>>1;se<qe;){var X=2*(se+1)-1,ne=L[X],pe=X+1,oe=L[pe];if(0>r(ne,Z))pe<Me&&0>r(oe,ne)?(L[se]=oe,L[pe]=Z,se=pe):(L[se]=ne,L[X]=Z,se=X);else if(pe<Me&&0>r(oe,Z))L[se]=oe,L[pe]=Z,se=pe;else break e}}return j}function r(L,j){var Z=L.sortIndex-j.sortIndex;return Z!==0?Z:L.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,h=null,d=3,p=!1,_=!1,y=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,g=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function v(L){for(var j=n(c);j!==null;){if(j.callback===null)i(c);else if(j.startTime<=L)i(c),j.sortIndex=j.expirationTime,e(l,j);else break;j=n(c)}}function x(L){if(y=!1,v(L),!_)if(n(l)!==null)_=!0,G(b);else{var j=n(c);j!==null&&Q(x,j.startTime-L)}}function b(L,j){_=!1,y&&(y=!1,f(R),R=-1),p=!0;var Z=d;try{for(v(j),h=n(l);h!==null&&(!(h.expirationTime>j)||L&&!P());){var se=h.callback;if(typeof se=="function"){h.callback=null,d=h.priorityLevel;var Me=se(h.expirationTime<=j);j=t.unstable_now(),typeof Me=="function"?h.callback=Me:h===n(l)&&i(l),v(j)}else i(l);h=n(l)}if(h!==null)var qe=!0;else{var X=n(c);X!==null&&Q(x,X.startTime-j),qe=!1}return qe}finally{h=null,d=Z,p=!1}}var A=!1,T=null,R=-1,w=5,S=-1;function P(){return!(t.unstable_now()-S<w)}function H(){if(T!==null){var L=t.unstable_now();S=L;var j=!0;try{j=T(!0,L)}finally{j?k():(A=!1,T=null)}}else A=!1}var k;if(typeof g=="function")k=function(){g(H)};else if(typeof MessageChannel<"u"){var W=new MessageChannel,$=W.port2;W.port1.onmessage=H,k=function(){$.postMessage(null)}}else k=function(){m(H,0)};function G(L){T=L,A||(A=!0,k())}function Q(L,j){R=m(function(){L(t.unstable_now())},j)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(L){L.callback=null},t.unstable_continueExecution=function(){_||p||(_=!0,G(b))},t.unstable_forceFrameRate=function(L){0>L||125<L?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<L?Math.floor(1e3/L):5},t.unstable_getCurrentPriorityLevel=function(){return d},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(L){switch(d){case 1:case 2:case 3:var j=3;break;default:j=d}var Z=d;d=j;try{return L()}finally{d=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(L,j){switch(L){case 1:case 2:case 3:case 4:case 5:break;default:L=3}var Z=d;d=L;try{return j()}finally{d=Z}},t.unstable_scheduleCallback=function(L,j,Z){var se=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?se+Z:se):Z=se,L){case 1:var Me=-1;break;case 2:Me=250;break;case 5:Me=1073741823;break;case 4:Me=1e4;break;default:Me=5e3}return Me=Z+Me,L={id:u++,callback:j,priorityLevel:L,startTime:Z,expirationTime:Me,sortIndex:-1},Z>se?(L.sortIndex=Z,e(c,L),n(l)===null&&L===n(c)&&(y?(f(R),R=-1):y=!0,Q(x,Z-se))):(L.sortIndex=Me,e(l,L),_||p||(_=!0,G(b))),L},t.unstable_shouldYield=P,t.unstable_wrapCallback=function(L){var j=d;return function(){var Z=d;d=j;try{return L.apply(this,arguments)}finally{d=Z}}}})(Eg);Mg.exports=Eg;var Wv=Mg.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jv=Fe,_n=Wv;function ee(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var wg=new Set,bo={};function Ur(t,e){Cs(t,e),Cs(t+"Capture",e)}function Cs(t,e){for(bo[t]=e,t=0;t<e.length;t++)wg.add(e[t])}var yi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),xu=Object.prototype.hasOwnProperty,Xv=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Th={},Ah={};function $v(t){return xu.call(Ah,t)?!0:xu.call(Th,t)?!1:Xv.test(t)?Ah[t]=!0:(Th[t]=!0,!1)}function Yv(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Zv(t,e,n,i){if(e===null||typeof e>"u"||Yv(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Jt(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ut[t]=new Jt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ut[e]=new Jt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ut[t]=new Jt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ut[t]=new Jt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ut[t]=new Jt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ut[t]=new Jt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ut[t]=new Jt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ut[t]=new Jt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ut[t]=new Jt(t,5,!1,t.toLowerCase(),null,!1,!1)});var sd=/[\-:]([a-z])/g;function od(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(sd,od);Ut[e]=new Jt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(sd,od);Ut[e]=new Jt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(sd,od);Ut[e]=new Jt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ut[t]=new Jt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ut.xlinkHref=new Jt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ut[t]=new Jt(t,1,!1,t.toLowerCase(),null,!0,!0)});function ad(t,e,n,i){var r=Ut.hasOwnProperty(e)?Ut[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Zv(e,n,r,i)&&(n=null),i||r===null?$v(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Ti=jv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ua=Symbol.for("react.element"),is=Symbol.for("react.portal"),rs=Symbol.for("react.fragment"),ld=Symbol.for("react.strict_mode"),yu=Symbol.for("react.profiler"),Tg=Symbol.for("react.provider"),Ag=Symbol.for("react.context"),cd=Symbol.for("react.forward_ref"),Su=Symbol.for("react.suspense"),Mu=Symbol.for("react.suspense_list"),ud=Symbol.for("react.memo"),Ui=Symbol.for("react.lazy"),Cg=Symbol.for("react.offscreen"),Ch=Symbol.iterator;function Zs(t){return t===null||typeof t!="object"?null:(t=Ch&&t[Ch]||t["@@iterator"],typeof t=="function"?t:null)}var gt=Object.assign,pc;function uo(t){if(pc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);pc=e&&e[1]||""}return`
`+pc+t}var mc=!1;function gc(t,e){if(!t||mc)return"";mc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{mc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?uo(t):""}function qv(t){switch(t.tag){case 5:return uo(t.type);case 16:return uo("Lazy");case 13:return uo("Suspense");case 19:return uo("SuspenseList");case 0:case 2:case 15:return t=gc(t.type,!1),t;case 11:return t=gc(t.type.render,!1),t;case 1:return t=gc(t.type,!0),t;default:return""}}function Eu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case rs:return"Fragment";case is:return"Portal";case yu:return"Profiler";case ld:return"StrictMode";case Su:return"Suspense";case Mu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Ag:return(t.displayName||"Context")+".Consumer";case Tg:return(t._context.displayName||"Context")+".Provider";case cd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case ud:return e=t.displayName||null,e!==null?e:Eu(t.type)||"Memo";case Ui:e=t._payload,t=t._init;try{return Eu(t(e))}catch{}}return null}function Kv(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Eu(e);case 8:return e===ld?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ji(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Rg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Qv(t){var e=Rg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function fa(t){t._valueTracker||(t._valueTracker=Qv(t))}function bg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=Rg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function hl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function wu(t,e){var n=e.checked;return gt({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Rh(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ji(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Pg(t,e){e=e.checked,e!=null&&ad(t,"checked",e,!1)}function Tu(t,e){Pg(t,e);var n=Ji(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Au(t,e.type,n):e.hasOwnProperty("defaultValue")&&Au(t,e.type,Ji(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function bh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Au(t,e,n){(e!=="number"||hl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var fo=Array.isArray;function _s(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ji(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function Cu(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ee(91));return gt({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ph(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ee(92));if(fo(n)){if(1<n.length)throw Error(ee(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ji(n)}}function Lg(t,e){var n=Ji(e.value),i=Ji(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Lh(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Dg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Ru(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Dg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var da,Ng=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(da=da||document.createElement("div"),da.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=da.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Po(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var _o={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Jv=["Webkit","ms","Moz","O"];Object.keys(_o).forEach(function(t){Jv.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),_o[e]=_o[t]})});function Ig(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||_o.hasOwnProperty(t)&&_o[t]?(""+e).trim():e+"px"}function Ug(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Ig(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var ex=gt({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function bu(t,e){if(e){if(ex[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ee(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ee(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ee(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ee(62))}}function Pu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Lu=null;function fd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Du=null,vs=null,xs=null;function Dh(t){if(t=Jo(t)){if(typeof Du!="function")throw Error(ee(280));var e=t.stateNode;e&&(e=ql(e),Du(t.stateNode,t.type,e))}}function Og(t){vs?xs?xs.push(t):xs=[t]:vs=t}function Fg(){if(vs){var t=vs,e=xs;if(xs=vs=null,Dh(t),e)for(t=0;t<e.length;t++)Dh(e[t])}}function kg(t,e){return t(e)}function zg(){}var _c=!1;function Bg(t,e,n){if(_c)return t(e,n);_c=!0;try{return kg(t,e,n)}finally{_c=!1,(vs!==null||xs!==null)&&(zg(),Fg())}}function Lo(t,e){var n=t.stateNode;if(n===null)return null;var i=ql(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ee(231,e,typeof n));return n}var Nu=!1;if(yi)try{var qs={};Object.defineProperty(qs,"passive",{get:function(){Nu=!0}}),window.addEventListener("test",qs,qs),window.removeEventListener("test",qs,qs)}catch{Nu=!1}function tx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var vo=!1,pl=null,ml=!1,Iu=null,nx={onError:function(t){vo=!0,pl=t}};function ix(t,e,n,i,r,s,o,a,l){vo=!1,pl=null,tx.apply(nx,arguments)}function rx(t,e,n,i,r,s,o,a,l){if(ix.apply(this,arguments),vo){if(vo){var c=pl;vo=!1,pl=null}else throw Error(ee(198));ml||(ml=!0,Iu=c)}}function Or(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Hg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Nh(t){if(Or(t)!==t)throw Error(ee(188))}function sx(t){var e=t.alternate;if(!e){if(e=Or(t),e===null)throw Error(ee(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Nh(r),t;if(s===i)return Nh(r),e;s=s.sibling}throw Error(ee(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ee(189))}}if(n.alternate!==i)throw Error(ee(190))}if(n.tag!==3)throw Error(ee(188));return n.stateNode.current===n?t:e}function Vg(t){return t=sx(t),t!==null?Gg(t):null}function Gg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Gg(t);if(e!==null)return e;t=t.sibling}return null}var Wg=_n.unstable_scheduleCallback,Ih=_n.unstable_cancelCallback,ox=_n.unstable_shouldYield,ax=_n.unstable_requestPaint,Mt=_n.unstable_now,lx=_n.unstable_getCurrentPriorityLevel,dd=_n.unstable_ImmediatePriority,jg=_n.unstable_UserBlockingPriority,gl=_n.unstable_NormalPriority,cx=_n.unstable_LowPriority,Xg=_n.unstable_IdlePriority,Xl=null,ei=null;function ux(t){if(ei&&typeof ei.onCommitFiberRoot=="function")try{ei.onCommitFiberRoot(Xl,t,void 0,(t.current.flags&128)===128)}catch{}}var Hn=Math.clz32?Math.clz32:hx,fx=Math.log,dx=Math.LN2;function hx(t){return t>>>=0,t===0?32:31-(fx(t)/dx|0)|0}var ha=64,pa=4194304;function ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function _l(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ho(a):(s&=o,s!==0&&(i=ho(s)))}else o=n&~r,o!==0?i=ho(o):s!==0&&(i=ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-Hn(e),r=1<<n,i|=t[n],e&=~r;return i}function px(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function mx(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-Hn(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=px(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Uu(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function $g(){var t=ha;return ha<<=1,!(ha&4194240)&&(ha=64),t}function vc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Ko(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-Hn(e),t[e]=n}function gx(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-Hn(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function hd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-Hn(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var tt=0;function Yg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var Zg,pd,qg,Kg,Qg,Ou=!1,ma=[],Gi=null,Wi=null,ji=null,Do=new Map,No=new Map,ki=[],_x="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Uh(t,e){switch(t){case"focusin":case"focusout":Gi=null;break;case"dragenter":case"dragleave":Wi=null;break;case"mouseover":case"mouseout":ji=null;break;case"pointerover":case"pointerout":Do.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":No.delete(e.pointerId)}}function Ks(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Jo(e),e!==null&&pd(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function vx(t,e,n,i,r){switch(e){case"focusin":return Gi=Ks(Gi,t,e,n,i,r),!0;case"dragenter":return Wi=Ks(Wi,t,e,n,i,r),!0;case"mouseover":return ji=Ks(ji,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Do.set(s,Ks(Do.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,No.set(s,Ks(No.get(s)||null,t,e,n,i,r)),!0}return!1}function Jg(t){var e=vr(t.target);if(e!==null){var n=Or(e);if(n!==null){if(e=n.tag,e===13){if(e=Hg(n),e!==null){t.blockedOn=e,Qg(t.priority,function(){qg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Ka(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Fu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);Lu=i,n.target.dispatchEvent(i),Lu=null}else return e=Jo(n),e!==null&&pd(e),t.blockedOn=n,!1;e.shift()}return!0}function Oh(t,e,n){Ka(t)&&n.delete(e)}function xx(){Ou=!1,Gi!==null&&Ka(Gi)&&(Gi=null),Wi!==null&&Ka(Wi)&&(Wi=null),ji!==null&&Ka(ji)&&(ji=null),Do.forEach(Oh),No.forEach(Oh)}function Qs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ou||(Ou=!0,_n.unstable_scheduleCallback(_n.unstable_NormalPriority,xx)))}function Io(t){function e(r){return Qs(r,t)}if(0<ma.length){Qs(ma[0],t);for(var n=1;n<ma.length;n++){var i=ma[n];i.blockedOn===t&&(i.blockedOn=null)}}for(Gi!==null&&Qs(Gi,t),Wi!==null&&Qs(Wi,t),ji!==null&&Qs(ji,t),Do.forEach(e),No.forEach(e),n=0;n<ki.length;n++)i=ki[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<ki.length&&(n=ki[0],n.blockedOn===null);)Jg(n),n.blockedOn===null&&ki.shift()}var ys=Ti.ReactCurrentBatchConfig,vl=!0;function yx(t,e,n,i){var r=tt,s=ys.transition;ys.transition=null;try{tt=1,md(t,e,n,i)}finally{tt=r,ys.transition=s}}function Sx(t,e,n,i){var r=tt,s=ys.transition;ys.transition=null;try{tt=4,md(t,e,n,i)}finally{tt=r,ys.transition=s}}function md(t,e,n,i){if(vl){var r=Fu(t,e,n,i);if(r===null)Rc(t,e,i,xl,n),Uh(t,i);else if(vx(r,t,e,n,i))i.stopPropagation();else if(Uh(t,i),e&4&&-1<_x.indexOf(t)){for(;r!==null;){var s=Jo(r);if(s!==null&&Zg(s),s=Fu(t,e,n,i),s===null&&Rc(t,e,i,xl,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Rc(t,e,i,null,n)}}var xl=null;function Fu(t,e,n,i){if(xl=null,t=fd(i),t=vr(t),t!==null)if(e=Or(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Hg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return xl=t,null}function e0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(lx()){case dd:return 1;case jg:return 4;case gl:case cx:return 16;case Xg:return 536870912;default:return 16}default:return 16}}var Hi=null,gd=null,Qa=null;function t0(){if(Qa)return Qa;var t,e=gd,n=e.length,i,r="value"in Hi?Hi.value:Hi.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Qa=r.slice(t,1<i?1-i:void 0)}function Ja(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ga(){return!0}function Fh(){return!1}function xn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ga:Fh,this.isPropagationStopped=Fh,this}return gt(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ga)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ga)},persist:function(){},isPersistent:ga}),e}var Hs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_d=xn(Hs),Qo=gt({},Hs,{view:0,detail:0}),Mx=xn(Qo),xc,yc,Js,$l=gt({},Qo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:vd,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Js&&(Js&&t.type==="mousemove"?(xc=t.screenX-Js.screenX,yc=t.screenY-Js.screenY):yc=xc=0,Js=t),xc)},movementY:function(t){return"movementY"in t?t.movementY:yc}}),kh=xn($l),Ex=gt({},$l,{dataTransfer:0}),wx=xn(Ex),Tx=gt({},Qo,{relatedTarget:0}),Sc=xn(Tx),Ax=gt({},Hs,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=xn(Ax),Rx=gt({},Hs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),bx=xn(Rx),Px=gt({},Hs,{data:0}),zh=xn(Px),Lx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Dx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Nx={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ix(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Nx[t])?!!e[t]:!1}function vd(){return Ix}var Ux=gt({},Qo,{key:function(t){if(t.key){var e=Lx[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Ja(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Dx[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:vd,charCode:function(t){return t.type==="keypress"?Ja(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Ja(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ox=xn(Ux),Fx=gt({},$l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Bh=xn(Fx),kx=gt({},Qo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:vd}),zx=xn(kx),Bx=gt({},Hs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Hx=xn(Bx),Vx=gt({},$l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Gx=xn(Vx),Wx=[9,13,27,32],xd=yi&&"CompositionEvent"in window,xo=null;yi&&"documentMode"in document&&(xo=document.documentMode);var jx=yi&&"TextEvent"in window&&!xo,n0=yi&&(!xd||xo&&8<xo&&11>=xo),Hh=" ",Vh=!1;function i0(t,e){switch(t){case"keyup":return Wx.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function r0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ss=!1;function Xx(t,e){switch(t){case"compositionend":return r0(e);case"keypress":return e.which!==32?null:(Vh=!0,Hh);case"textInput":return t=e.data,t===Hh&&Vh?null:t;default:return null}}function $x(t,e){if(ss)return t==="compositionend"||!xd&&i0(t,e)?(t=t0(),Qa=gd=Hi=null,ss=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return n0&&e.locale!=="ko"?null:e.data;default:return null}}var Yx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Gh(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!Yx[t.type]:e==="textarea"}function s0(t,e,n,i){Og(i),e=yl(e,"onChange"),0<e.length&&(n=new _d("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var yo=null,Uo=null;function Zx(t){g0(t,0)}function Yl(t){var e=ls(t);if(bg(e))return t}function qx(t,e){if(t==="change")return e}var o0=!1;if(yi){var Mc;if(yi){var Ec="oninput"in document;if(!Ec){var Wh=document.createElement("div");Wh.setAttribute("oninput","return;"),Ec=typeof Wh.oninput=="function"}Mc=Ec}else Mc=!1;o0=Mc&&(!document.documentMode||9<document.documentMode)}function jh(){yo&&(yo.detachEvent("onpropertychange",a0),Uo=yo=null)}function a0(t){if(t.propertyName==="value"&&Yl(Uo)){var e=[];s0(e,Uo,t,fd(t)),Bg(Zx,e)}}function Kx(t,e,n){t==="focusin"?(jh(),yo=e,Uo=n,yo.attachEvent("onpropertychange",a0)):t==="focusout"&&jh()}function Qx(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Yl(Uo)}function Jx(t,e){if(t==="click")return Yl(e)}function ey(t,e){if(t==="input"||t==="change")return Yl(e)}function ty(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var Wn=typeof Object.is=="function"?Object.is:ty;function Oo(t,e){if(Wn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!xu.call(e,r)||!Wn(t[r],e[r]))return!1}return!0}function Xh(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function $h(t,e){var n=Xh(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Xh(n)}}function l0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?l0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function c0(){for(var t=window,e=hl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=hl(t.document)}return e}function yd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function ny(t){var e=c0(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&l0(n.ownerDocument.documentElement,n)){if(i!==null&&yd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=$h(n,s);var o=$h(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var iy=yi&&"documentMode"in document&&11>=document.documentMode,os=null,ku=null,So=null,zu=!1;function Yh(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;zu||os==null||os!==hl(i)||(i=os,"selectionStart"in i&&yd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),So&&Oo(So,i)||(So=i,i=yl(ku,"onSelect"),0<i.length&&(e=new _d("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=os)))}function _a(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var as={animationend:_a("Animation","AnimationEnd"),animationiteration:_a("Animation","AnimationIteration"),animationstart:_a("Animation","AnimationStart"),transitionend:_a("Transition","TransitionEnd")},wc={},u0={};yi&&(u0=document.createElement("div").style,"AnimationEvent"in window||(delete as.animationend.animation,delete as.animationiteration.animation,delete as.animationstart.animation),"TransitionEvent"in window||delete as.transitionend.transition);function Zl(t){if(wc[t])return wc[t];if(!as[t])return t;var e=as[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in u0)return wc[t]=e[n];return t}var f0=Zl("animationend"),d0=Zl("animationiteration"),h0=Zl("animationstart"),p0=Zl("transitionend"),m0=new Map,Zh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ir(t,e){m0.set(t,e),Ur(e,[t])}for(var Tc=0;Tc<Zh.length;Tc++){var Ac=Zh[Tc],ry=Ac.toLowerCase(),sy=Ac[0].toUpperCase()+Ac.slice(1);ir(ry,"on"+sy)}ir(f0,"onAnimationEnd");ir(d0,"onAnimationIteration");ir(h0,"onAnimationStart");ir("dblclick","onDoubleClick");ir("focusin","onFocus");ir("focusout","onBlur");ir(p0,"onTransitionEnd");Cs("onMouseEnter",["mouseout","mouseover"]);Cs("onMouseLeave",["mouseout","mouseover"]);Cs("onPointerEnter",["pointerout","pointerover"]);Cs("onPointerLeave",["pointerout","pointerover"]);Ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var po="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),oy=new Set("cancel close invalid load scroll toggle".split(" ").concat(po));function qh(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,rx(i,e,void 0,t),t.currentTarget=null}function g0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;qh(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;qh(r,a,c),s=l}}}if(ml)throw t=Iu,ml=!1,Iu=null,t}function ut(t,e){var n=e[Wu];n===void 0&&(n=e[Wu]=new Set);var i=t+"__bubble";n.has(i)||(_0(e,t,2,!1),n.add(i))}function Cc(t,e,n){var i=0;e&&(i|=4),_0(n,t,i,e)}var va="_reactListening"+Math.random().toString(36).slice(2);function Fo(t){if(!t[va]){t[va]=!0,wg.forEach(function(n){n!=="selectionchange"&&(oy.has(n)||Cc(n,!1,t),Cc(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[va]||(e[va]=!0,Cc("selectionchange",!1,e))}}function _0(t,e,n,i){switch(e0(e)){case 1:var r=yx;break;case 4:r=Sx;break;default:r=md}n=r.bind(null,e,n,t),r=void 0,!Nu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Rc(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=vr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Bg(function(){var c=s,u=fd(n),h=[];e:{var d=m0.get(t);if(d!==void 0){var p=_d,_=t;switch(t){case"keypress":if(Ja(n)===0)break e;case"keydown":case"keyup":p=Ox;break;case"focusin":_="focus",p=Sc;break;case"focusout":_="blur",p=Sc;break;case"beforeblur":case"afterblur":p=Sc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=wx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=zx;break;case f0:case d0:case h0:p=Cx;break;case p0:p=Hx;break;case"scroll":p=Mx;break;case"wheel":p=Gx;break;case"copy":case"cut":case"paste":p=bx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Bh}var y=(e&4)!==0,m=!y&&t==="scroll",f=y?d!==null?d+"Capture":null:d;y=[];for(var g=c,v;g!==null;){v=g;var x=v.stateNode;if(v.tag===5&&x!==null&&(v=x,f!==null&&(x=Lo(g,f),x!=null&&y.push(ko(g,x,v)))),m)break;g=g.return}0<y.length&&(d=new p(d,_,null,n,u),h.push({event:d,listeners:y}))}}if(!(e&7)){e:{if(d=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",d&&n!==Lu&&(_=n.relatedTarget||n.fromElement)&&(vr(_)||_[Si]))break e;if((p||d)&&(d=u.window===u?u:(d=u.ownerDocument)?d.defaultView||d.parentWindow:window,p?(_=n.relatedTarget||n.toElement,p=c,_=_?vr(_):null,_!==null&&(m=Or(_),_!==m||_.tag!==5&&_.tag!==6)&&(_=null)):(p=null,_=c),p!==_)){if(y=kh,x="onMouseLeave",f="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(y=Bh,x="onPointerLeave",f="onPointerEnter",g="pointer"),m=p==null?d:ls(p),v=_==null?d:ls(_),d=new y(x,g+"leave",p,n,u),d.target=m,d.relatedTarget=v,x=null,vr(u)===c&&(y=new y(f,g+"enter",_,n,u),y.target=v,y.relatedTarget=m,x=y),m=x,p&&_)t:{for(y=p,f=_,g=0,v=y;v;v=zr(v))g++;for(v=0,x=f;x;x=zr(x))v++;for(;0<g-v;)y=zr(y),g--;for(;0<v-g;)f=zr(f),v--;for(;g--;){if(y===f||f!==null&&y===f.alternate)break t;y=zr(y),f=zr(f)}y=null}else y=null;p!==null&&Kh(h,d,p,y,!1),_!==null&&m!==null&&Kh(h,m,_,y,!0)}}e:{if(d=c?ls(c):window,p=d.nodeName&&d.nodeName.toLowerCase(),p==="select"||p==="input"&&d.type==="file")var b=qx;else if(Gh(d))if(o0)b=ey;else{b=Qx;var A=Kx}else(p=d.nodeName)&&p.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(b=Jx);if(b&&(b=b(t,c))){s0(h,b,n,u);break e}A&&A(t,d,c),t==="focusout"&&(A=d._wrapperState)&&A.controlled&&d.type==="number"&&Au(d,"number",d.value)}switch(A=c?ls(c):window,t){case"focusin":(Gh(A)||A.contentEditable==="true")&&(os=A,ku=c,So=null);break;case"focusout":So=ku=os=null;break;case"mousedown":zu=!0;break;case"contextmenu":case"mouseup":case"dragend":zu=!1,Yh(h,n,u);break;case"selectionchange":if(iy)break;case"keydown":case"keyup":Yh(h,n,u)}var T;if(xd)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else ss?i0(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(n0&&n.locale!=="ko"&&(ss||R!=="onCompositionStart"?R==="onCompositionEnd"&&ss&&(T=t0()):(Hi=u,gd="value"in Hi?Hi.value:Hi.textContent,ss=!0)),A=yl(c,R),0<A.length&&(R=new zh(R,t,null,n,u),h.push({event:R,listeners:A}),T?R.data=T:(T=r0(n),T!==null&&(R.data=T)))),(T=jx?Xx(t,n):$x(t,n))&&(c=yl(c,"onBeforeInput"),0<c.length&&(u=new zh("onBeforeInput","beforeinput",null,n,u),h.push({event:u,listeners:c}),u.data=T))}g0(h,e)})}function ko(t,e,n){return{instance:t,listener:e,currentTarget:n}}function yl(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Lo(t,n),s!=null&&i.unshift(ko(t,s,r)),s=Lo(t,e),s!=null&&i.push(ko(t,s,r))),t=t.return}return i}function zr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Kh(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Lo(n,s),l!=null&&o.unshift(ko(n,l,a))):r||(l=Lo(n,s),l!=null&&o.push(ko(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var ay=/\r\n?/g,ly=/\u0000|\uFFFD/g;function Qh(t){return(typeof t=="string"?t:""+t).replace(ay,`
`).replace(ly,"")}function xa(t,e,n){if(e=Qh(e),Qh(t)!==e&&n)throw Error(ee(425))}function Sl(){}var Bu=null,Hu=null;function Vu(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Gu=typeof setTimeout=="function"?setTimeout:void 0,cy=typeof clearTimeout=="function"?clearTimeout:void 0,Jh=typeof Promise=="function"?Promise:void 0,uy=typeof queueMicrotask=="function"?queueMicrotask:typeof Jh<"u"?function(t){return Jh.resolve(null).then(t).catch(fy)}:Gu;function fy(t){setTimeout(function(){throw t})}function bc(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Io(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Io(e)}function Xi(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function ep(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Vs=Math.random().toString(36).slice(2),qn="__reactFiber$"+Vs,zo="__reactProps$"+Vs,Si="__reactContainer$"+Vs,Wu="__reactEvents$"+Vs,dy="__reactListeners$"+Vs,hy="__reactHandles$"+Vs;function vr(t){var e=t[qn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Si]||n[qn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=ep(t);t!==null;){if(n=t[qn])return n;t=ep(t)}return e}t=n,n=t.parentNode}return null}function Jo(t){return t=t[qn]||t[Si],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ls(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ee(33))}function ql(t){return t[zo]||null}var ju=[],cs=-1;function rr(t){return{current:t}}function ft(t){0>cs||(t.current=ju[cs],ju[cs]=null,cs--)}function ot(t,e){cs++,ju[cs]=t.current,t.current=e}var er={},jt=rr(er),on=rr(!1),Cr=er;function Rs(t,e){var n=t.type.contextTypes;if(!n)return er;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function an(t){return t=t.childContextTypes,t!=null}function Ml(){ft(on),ft(jt)}function tp(t,e,n){if(jt.current!==er)throw Error(ee(168));ot(jt,e),ot(on,n)}function v0(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ee(108,Kv(t)||"Unknown",r));return gt({},n,i)}function El(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||er,Cr=jt.current,ot(jt,t),ot(on,on.current),!0}function np(t,e,n){var i=t.stateNode;if(!i)throw Error(ee(169));n?(t=v0(t,e,Cr),i.__reactInternalMemoizedMergedChildContext=t,ft(on),ft(jt),ot(jt,t)):ft(on),ot(on,n)}var hi=null,Kl=!1,Pc=!1;function x0(t){hi===null?hi=[t]:hi.push(t)}function py(t){Kl=!0,x0(t)}function sr(){if(!Pc&&hi!==null){Pc=!0;var t=0,e=tt;try{var n=hi;for(tt=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}hi=null,Kl=!1}catch(r){throw hi!==null&&(hi=hi.slice(t+1)),Wg(dd,sr),r}finally{tt=e,Pc=!1}}return null}var us=[],fs=0,wl=null,Tl=0,wn=[],Tn=0,Rr=null,pi=1,mi="";function hr(t,e){us[fs++]=Tl,us[fs++]=wl,wl=t,Tl=e}function y0(t,e,n){wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Rr,Rr=t;var i=pi;t=mi;var r=32-Hn(i)-1;i&=~(1<<r),n+=1;var s=32-Hn(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,pi=1<<32-Hn(e)+r|n<<r|i,mi=s+t}else pi=1<<s|n<<r|i,mi=t}function Sd(t){t.return!==null&&(hr(t,1),y0(t,1,0))}function Md(t){for(;t===wl;)wl=us[--fs],us[fs]=null,Tl=us[--fs],us[fs]=null;for(;t===Rr;)Rr=wn[--Tn],wn[Tn]=null,mi=wn[--Tn],wn[Tn]=null,pi=wn[--Tn],wn[Tn]=null}var gn=null,mn=null,dt=!1,kn=null;function S0(t,e){var n=An(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function ip(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,gn=t,mn=Xi(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,gn=t,mn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Rr!==null?{id:pi,overflow:mi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=An(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,gn=t,mn=null,!0):!1;default:return!1}}function Xu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function $u(t){if(dt){var e=mn;if(e){var n=e;if(!ip(t,e)){if(Xu(t))throw Error(ee(418));e=Xi(n.nextSibling);var i=gn;e&&ip(t,e)?S0(i,n):(t.flags=t.flags&-4097|2,dt=!1,gn=t)}}else{if(Xu(t))throw Error(ee(418));t.flags=t.flags&-4097|2,dt=!1,gn=t}}}function rp(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;gn=t}function ya(t){if(t!==gn)return!1;if(!dt)return rp(t),dt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Vu(t.type,t.memoizedProps)),e&&(e=mn)){if(Xu(t))throw M0(),Error(ee(418));for(;e;)S0(t,e),e=Xi(e.nextSibling)}if(rp(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ee(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){mn=Xi(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}mn=null}}else mn=gn?Xi(t.stateNode.nextSibling):null;return!0}function M0(){for(var t=mn;t;)t=Xi(t.nextSibling)}function bs(){mn=gn=null,dt=!1}function Ed(t){kn===null?kn=[t]:kn.push(t)}var my=Ti.ReactCurrentBatchConfig;function eo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ee(309));var i=n.stateNode}if(!i)throw Error(ee(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ee(284));if(!n._owner)throw Error(ee(290,t))}return t}function Sa(t,e){throw t=Object.prototype.toString.call(e),Error(ee(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function sp(t){var e=t._init;return e(t._payload)}function E0(t){function e(f,g){if(t){var v=f.deletions;v===null?(f.deletions=[g],f.flags|=16):v.push(g)}}function n(f,g){if(!t)return null;for(;g!==null;)e(f,g),g=g.sibling;return null}function i(f,g){for(f=new Map;g!==null;)g.key!==null?f.set(g.key,g):f.set(g.index,g),g=g.sibling;return f}function r(f,g){return f=qi(f,g),f.index=0,f.sibling=null,f}function s(f,g,v){return f.index=v,t?(v=f.alternate,v!==null?(v=v.index,v<g?(f.flags|=2,g):v):(f.flags|=2,g)):(f.flags|=1048576,g)}function o(f){return t&&f.alternate===null&&(f.flags|=2),f}function a(f,g,v,x){return g===null||g.tag!==6?(g=Fc(v,f.mode,x),g.return=f,g):(g=r(g,v),g.return=f,g)}function l(f,g,v,x){var b=v.type;return b===rs?u(f,g,v.props.children,x,v.key):g!==null&&(g.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ui&&sp(b)===g.type)?(x=r(g,v.props),x.ref=eo(f,g,v),x.return=f,x):(x=ol(v.type,v.key,v.props,null,f.mode,x),x.ref=eo(f,g,v),x.return=f,x)}function c(f,g,v,x){return g===null||g.tag!==4||g.stateNode.containerInfo!==v.containerInfo||g.stateNode.implementation!==v.implementation?(g=kc(v,f.mode,x),g.return=f,g):(g=r(g,v.children||[]),g.return=f,g)}function u(f,g,v,x,b){return g===null||g.tag!==7?(g=Tr(v,f.mode,x,b),g.return=f,g):(g=r(g,v),g.return=f,g)}function h(f,g,v){if(typeof g=="string"&&g!==""||typeof g=="number")return g=Fc(""+g,f.mode,v),g.return=f,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case ua:return v=ol(g.type,g.key,g.props,null,f.mode,v),v.ref=eo(f,null,g),v.return=f,v;case is:return g=kc(g,f.mode,v),g.return=f,g;case Ui:var x=g._init;return h(f,x(g._payload),v)}if(fo(g)||Zs(g))return g=Tr(g,f.mode,v,null),g.return=f,g;Sa(f,g)}return null}function d(f,g,v,x){var b=g!==null?g.key:null;if(typeof v=="string"&&v!==""||typeof v=="number")return b!==null?null:a(f,g,""+v,x);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:return v.key===b?l(f,g,v,x):null;case is:return v.key===b?c(f,g,v,x):null;case Ui:return b=v._init,d(f,g,b(v._payload),x)}if(fo(v)||Zs(v))return b!==null?null:u(f,g,v,x,null);Sa(f,v)}return null}function p(f,g,v,x,b){if(typeof x=="string"&&x!==""||typeof x=="number")return f=f.get(v)||null,a(g,f,""+x,b);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case ua:return f=f.get(x.key===null?v:x.key)||null,l(g,f,x,b);case is:return f=f.get(x.key===null?v:x.key)||null,c(g,f,x,b);case Ui:var A=x._init;return p(f,g,v,A(x._payload),b)}if(fo(x)||Zs(x))return f=f.get(v)||null,u(g,f,x,b,null);Sa(g,x)}return null}function _(f,g,v,x){for(var b=null,A=null,T=g,R=g=0,w=null;T!==null&&R<v.length;R++){T.index>R?(w=T,T=null):w=T.sibling;var S=d(f,T,v[R],x);if(S===null){T===null&&(T=w);break}t&&T&&S.alternate===null&&e(f,T),g=s(S,g,R),A===null?b=S:A.sibling=S,A=S,T=w}if(R===v.length)return n(f,T),dt&&hr(f,R),b;if(T===null){for(;R<v.length;R++)T=h(f,v[R],x),T!==null&&(g=s(T,g,R),A===null?b=T:A.sibling=T,A=T);return dt&&hr(f,R),b}for(T=i(f,T);R<v.length;R++)w=p(T,f,R,v[R],x),w!==null&&(t&&w.alternate!==null&&T.delete(w.key===null?R:w.key),g=s(w,g,R),A===null?b=w:A.sibling=w,A=w);return t&&T.forEach(function(P){return e(f,P)}),dt&&hr(f,R),b}function y(f,g,v,x){var b=Zs(v);if(typeof b!="function")throw Error(ee(150));if(v=b.call(v),v==null)throw Error(ee(151));for(var A=b=null,T=g,R=g=0,w=null,S=v.next();T!==null&&!S.done;R++,S=v.next()){T.index>R?(w=T,T=null):w=T.sibling;var P=d(f,T,S.value,x);if(P===null){T===null&&(T=w);break}t&&T&&P.alternate===null&&e(f,T),g=s(P,g,R),A===null?b=P:A.sibling=P,A=P,T=w}if(S.done)return n(f,T),dt&&hr(f,R),b;if(T===null){for(;!S.done;R++,S=v.next())S=h(f,S.value,x),S!==null&&(g=s(S,g,R),A===null?b=S:A.sibling=S,A=S);return dt&&hr(f,R),b}for(T=i(f,T);!S.done;R++,S=v.next())S=p(T,f,R,S.value,x),S!==null&&(t&&S.alternate!==null&&T.delete(S.key===null?R:S.key),g=s(S,g,R),A===null?b=S:A.sibling=S,A=S);return t&&T.forEach(function(H){return e(f,H)}),dt&&hr(f,R),b}function m(f,g,v,x){if(typeof v=="object"&&v!==null&&v.type===rs&&v.key===null&&(v=v.props.children),typeof v=="object"&&v!==null){switch(v.$$typeof){case ua:e:{for(var b=v.key,A=g;A!==null;){if(A.key===b){if(b=v.type,b===rs){if(A.tag===7){n(f,A.sibling),g=r(A,v.props.children),g.return=f,f=g;break e}}else if(A.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Ui&&sp(b)===A.type){n(f,A.sibling),g=r(A,v.props),g.ref=eo(f,A,v),g.return=f,f=g;break e}n(f,A);break}else e(f,A);A=A.sibling}v.type===rs?(g=Tr(v.props.children,f.mode,x,v.key),g.return=f,f=g):(x=ol(v.type,v.key,v.props,null,f.mode,x),x.ref=eo(f,g,v),x.return=f,f=x)}return o(f);case is:e:{for(A=v.key;g!==null;){if(g.key===A)if(g.tag===4&&g.stateNode.containerInfo===v.containerInfo&&g.stateNode.implementation===v.implementation){n(f,g.sibling),g=r(g,v.children||[]),g.return=f,f=g;break e}else{n(f,g);break}else e(f,g);g=g.sibling}g=kc(v,f.mode,x),g.return=f,f=g}return o(f);case Ui:return A=v._init,m(f,g,A(v._payload),x)}if(fo(v))return _(f,g,v,x);if(Zs(v))return y(f,g,v,x);Sa(f,v)}return typeof v=="string"&&v!==""||typeof v=="number"?(v=""+v,g!==null&&g.tag===6?(n(f,g.sibling),g=r(g,v),g.return=f,f=g):(n(f,g),g=Fc(v,f.mode,x),g.return=f,f=g),o(f)):n(f,g)}return m}var Ps=E0(!0),w0=E0(!1),Al=rr(null),Cl=null,ds=null,wd=null;function Td(){wd=ds=Cl=null}function Ad(t){var e=Al.current;ft(Al),t._currentValue=e}function Yu(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function Ss(t,e){Cl=t,wd=ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(rn=!0),t.firstContext=null)}function Rn(t){var e=t._currentValue;if(wd!==t)if(t={context:t,memoizedValue:e,next:null},ds===null){if(Cl===null)throw Error(ee(308));ds=t,Cl.dependencies={lanes:0,firstContext:t}}else ds=ds.next=t;return e}var xr=null;function Cd(t){xr===null?xr=[t]:xr.push(t)}function T0(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Cd(e)):(n.next=r.next,r.next=n),e.interleaved=n,Mi(t,i)}function Mi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Oi=!1;function Rd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function A0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function vi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function $i(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Ze&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Mi(t,n)}return r=i.interleaved,r===null?(e.next=e,Cd(i)):(e.next=r.next,r.next=e),i.interleaved=e,Mi(t,n)}function el(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hd(t,n)}}function op(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Rl(t,e,n,i){var r=t.updateQueue;Oi=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var h=r.baseState;o=0,u=c=l=null,a=s;do{var d=a.lane,p=a.eventTime;if((i&d)===d){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var _=t,y=a;switch(d=e,p=n,y.tag){case 1:if(_=y.payload,typeof _=="function"){h=_.call(p,h,d);break e}h=_;break e;case 3:_.flags=_.flags&-65537|128;case 0:if(_=y.payload,d=typeof _=="function"?_.call(p,h,d):_,d==null)break e;h=gt({},h,d);break e;case 2:Oi=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,d=r.effects,d===null?r.effects=[a]:d.push(a))}else p={eventTime:p,lane:d,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=h):u=u.next=p,o|=d;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;d=a,a=d.next,d.next=null,r.lastBaseUpdate=d,r.shared.pending=null}}while(!0);if(u===null&&(l=h),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);Pr|=o,t.lanes=o,t.memoizedState=h}}function ap(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ee(191,r));r.call(i)}}}var ea={},ti=rr(ea),Bo=rr(ea),Ho=rr(ea);function yr(t){if(t===ea)throw Error(ee(174));return t}function bd(t,e){switch(ot(Ho,e),ot(Bo,t),ot(ti,ea),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Ru(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Ru(e,t)}ft(ti),ot(ti,e)}function Ls(){ft(ti),ft(Bo),ft(Ho)}function C0(t){yr(Ho.current);var e=yr(ti.current),n=Ru(e,t.type);e!==n&&(ot(Bo,t),ot(ti,n))}function Pd(t){Bo.current===t&&(ft(ti),ft(Bo))}var pt=rr(0);function bl(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Lc=[];function Ld(){for(var t=0;t<Lc.length;t++)Lc[t]._workInProgressVersionPrimary=null;Lc.length=0}var tl=Ti.ReactCurrentDispatcher,Dc=Ti.ReactCurrentBatchConfig,br=0,mt=null,At=null,Lt=null,Pl=!1,Mo=!1,Vo=0,gy=0;function Ft(){throw Error(ee(321))}function Dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!Wn(t[n],e[n]))return!1;return!0}function Nd(t,e,n,i,r,s){if(br=s,mt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,tl.current=t===null||t.memoizedState===null?yy:Sy,t=n(i,r),Mo){s=0;do{if(Mo=!1,Vo=0,25<=s)throw Error(ee(301));s+=1,Lt=At=null,e.updateQueue=null,tl.current=My,t=n(i,r)}while(Mo)}if(tl.current=Ll,e=At!==null&&At.next!==null,br=0,Lt=At=mt=null,Pl=!1,e)throw Error(ee(300));return t}function Id(){var t=Vo!==0;return Vo=0,t}function Yn(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t,Lt}function bn(){if(At===null){var t=mt.alternate;t=t!==null?t.memoizedState:null}else t=At.next;var e=Lt===null?mt.memoizedState:Lt.next;if(e!==null)Lt=e,At=t;else{if(t===null)throw Error(ee(310));At=t,t={memoizedState:At.memoizedState,baseState:At.baseState,baseQueue:At.baseQueue,queue:At.queue,next:null},Lt===null?mt.memoizedState=Lt=t:Lt=Lt.next=t}return Lt}function Go(t,e){return typeof e=="function"?e(t):e}function Nc(t){var e=bn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=At,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((br&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var h={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=h,o=i):l=l.next=h,mt.lanes|=u,Pr|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,Wn(i,e.memoizedState)||(rn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,mt.lanes|=s,Pr|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Ic(t){var e=bn(),n=e.queue;if(n===null)throw Error(ee(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);Wn(s,e.memoizedState)||(rn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function R0(){}function b0(t,e){var n=mt,i=bn(),r=e(),s=!Wn(i.memoizedState,r);if(s&&(i.memoizedState=r,rn=!0),i=i.queue,Ud(D0.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Lt!==null&&Lt.memoizedState.tag&1){if(n.flags|=2048,Wo(9,L0.bind(null,n,i,r,e),void 0,null),Dt===null)throw Error(ee(349));br&30||P0(n,e,r)}return r}function P0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function L0(t,e,n,i){e.value=n,e.getSnapshot=i,N0(e)&&I0(t)}function D0(t,e,n){return n(function(){N0(e)&&I0(t)})}function N0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!Wn(t,n)}catch{return!0}}function I0(t){var e=Mi(t,1);e!==null&&Vn(e,t,1,-1)}function lp(t){var e=Yn();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Go,lastRenderedState:t},e.queue=t,t=t.dispatch=xy.bind(null,mt,t),[e.memoizedState,t]}function Wo(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=mt.updateQueue,e===null?(e={lastEffect:null,stores:null},mt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function U0(){return bn().memoizedState}function nl(t,e,n,i){var r=Yn();mt.flags|=t,r.memoizedState=Wo(1|e,n,void 0,i===void 0?null:i)}function Ql(t,e,n,i){var r=bn();i=i===void 0?null:i;var s=void 0;if(At!==null){var o=At.memoizedState;if(s=o.destroy,i!==null&&Dd(i,o.deps)){r.memoizedState=Wo(e,n,s,i);return}}mt.flags|=t,r.memoizedState=Wo(1|e,n,s,i)}function cp(t,e){return nl(8390656,8,t,e)}function Ud(t,e){return Ql(2048,8,t,e)}function O0(t,e){return Ql(4,2,t,e)}function F0(t,e){return Ql(4,4,t,e)}function k0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function z0(t,e,n){return n=n!=null?n.concat([t]):null,Ql(4,4,k0.bind(null,e,t),n)}function Od(){}function B0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function H0(t,e){var n=bn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Dd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function V0(t,e,n){return br&21?(Wn(n,e)||(n=$g(),mt.lanes|=n,Pr|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,rn=!0),t.memoizedState=n)}function _y(t,e){var n=tt;tt=n!==0&&4>n?n:4,t(!0);var i=Dc.transition;Dc.transition={};try{t(!1),e()}finally{tt=n,Dc.transition=i}}function G0(){return bn().memoizedState}function vy(t,e,n){var i=Zi(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},W0(t))j0(e,n);else if(n=T0(t,e,n,i),n!==null){var r=qt();Vn(n,t,i,r),X0(n,e,i)}}function xy(t,e,n){var i=Zi(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(W0(t))j0(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,Wn(a,o)){var l=e.interleaved;l===null?(r.next=r,Cd(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=T0(t,e,r,i),n!==null&&(r=qt(),Vn(n,t,i,r),X0(n,e,i))}}function W0(t){var e=t.alternate;return t===mt||e!==null&&e===mt}function j0(t,e){Mo=Pl=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function X0(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,hd(t,n)}}var Ll={readContext:Rn,useCallback:Ft,useContext:Ft,useEffect:Ft,useImperativeHandle:Ft,useInsertionEffect:Ft,useLayoutEffect:Ft,useMemo:Ft,useReducer:Ft,useRef:Ft,useState:Ft,useDebugValue:Ft,useDeferredValue:Ft,useTransition:Ft,useMutableSource:Ft,useSyncExternalStore:Ft,useId:Ft,unstable_isNewReconciler:!1},yy={readContext:Rn,useCallback:function(t,e){return Yn().memoizedState=[t,e===void 0?null:e],t},useContext:Rn,useEffect:cp,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,nl(4194308,4,k0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return nl(4194308,4,t,e)},useInsertionEffect:function(t,e){return nl(4,2,t,e)},useMemo:function(t,e){var n=Yn();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Yn();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=vy.bind(null,mt,t),[i.memoizedState,t]},useRef:function(t){var e=Yn();return t={current:t},e.memoizedState=t},useState:lp,useDebugValue:Od,useDeferredValue:function(t){return Yn().memoizedState=t},useTransition:function(){var t=lp(!1),e=t[0];return t=_y.bind(null,t[1]),Yn().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=mt,r=Yn();if(dt){if(n===void 0)throw Error(ee(407));n=n()}else{if(n=e(),Dt===null)throw Error(ee(349));br&30||P0(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,cp(D0.bind(null,i,s,t),[t]),i.flags|=2048,Wo(9,L0.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Yn(),e=Dt.identifierPrefix;if(dt){var n=mi,i=pi;n=(i&~(1<<32-Hn(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=Vo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=gy++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},Sy={readContext:Rn,useCallback:B0,useContext:Rn,useEffect:Ud,useImperativeHandle:z0,useInsertionEffect:O0,useLayoutEffect:F0,useMemo:H0,useReducer:Nc,useRef:U0,useState:function(){return Nc(Go)},useDebugValue:Od,useDeferredValue:function(t){var e=bn();return V0(e,At.memoizedState,t)},useTransition:function(){var t=Nc(Go)[0],e=bn().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:b0,useId:G0,unstable_isNewReconciler:!1},My={readContext:Rn,useCallback:B0,useContext:Rn,useEffect:Ud,useImperativeHandle:z0,useInsertionEffect:O0,useLayoutEffect:F0,useMemo:H0,useReducer:Ic,useRef:U0,useState:function(){return Ic(Go)},useDebugValue:Od,useDeferredValue:function(t){var e=bn();return At===null?e.memoizedState=t:V0(e,At.memoizedState,t)},useTransition:function(){var t=Ic(Go)[0],e=bn().memoizedState;return[t,e]},useMutableSource:R0,useSyncExternalStore:b0,useId:G0,unstable_isNewReconciler:!1};function On(t,e){if(t&&t.defaultProps){e=gt({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zu(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:gt({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Jl={isMounted:function(t){return(t=t._reactInternals)?Or(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Zi(t),s=vi(i,r);s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Vn(e,t,r,i),el(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=qt(),r=Zi(t),s=vi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=$i(t,s,r),e!==null&&(Vn(e,t,r,i),el(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=qt(),i=Zi(t),r=vi(n,i);r.tag=2,e!=null&&(r.callback=e),e=$i(t,r,i),e!==null&&(Vn(e,t,i,n),el(e,t,i))}};function up(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Oo(n,i)||!Oo(r,s):!0}function $0(t,e,n){var i=!1,r=er,s=e.contextType;return typeof s=="object"&&s!==null?s=Rn(s):(r=an(e)?Cr:jt.current,i=e.contextTypes,s=(i=i!=null)?Rs(t,r):er),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Jl,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function fp(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Jl.enqueueReplaceState(e,e.state,null)}function qu(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Rd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Rn(s):(s=an(e)?Cr:jt.current,r.context=Rs(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zu(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Jl.enqueueReplaceState(r,r.state,null),Rl(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function Ds(t,e){try{var n="",i=e;do n+=qv(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Uc(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Ku(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Ey=typeof WeakMap=="function"?WeakMap:Map;function Y0(t,e,n){n=vi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Nl||(Nl=!0,lf=i),Ku(t,e)},n}function Z0(t,e,n){n=vi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Ku(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Ku(t,e),typeof i!="function"&&(Yi===null?Yi=new Set([this]):Yi.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function dp(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new Ey;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=Fy.bind(null,t,e,n),e.then(t,t))}function hp(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function pp(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=vi(-1,1),e.tag=2,$i(n,e,1))),n.lanes|=1),t)}var wy=Ti.ReactCurrentOwner,rn=!1;function Zt(t,e,n,i){e.child=t===null?w0(e,null,n,i):Ps(e,t.child,n,i)}function mp(t,e,n,i,r){n=n.render;var s=e.ref;return Ss(e,r),i=Nd(t,e,n,i,s,r),n=Id(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(dt&&n&&Sd(e),e.flags|=1,Zt(t,e,i,r),e.child)}function gp(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!Wd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,q0(t,e,s,i,r)):(t=ol(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Oo,n(o,i)&&t.ref===e.ref)return Ei(t,e,r)}return e.flags|=1,t=qi(s,i),t.ref=e.ref,t.return=e,e.child=t}function q0(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Oo(s,i)&&t.ref===e.ref)if(rn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(rn=!0);else return e.lanes=t.lanes,Ei(t,e,r)}return Qu(t,e,n,i,r)}function K0(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},ot(ps,hn),hn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,ot(ps,hn),hn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,ot(ps,hn),hn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,ot(ps,hn),hn|=i;return Zt(t,e,r,n),e.child}function Q0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Qu(t,e,n,i,r){var s=an(n)?Cr:jt.current;return s=Rs(e,s),Ss(e,r),n=Nd(t,e,n,i,s,r),i=Id(),t!==null&&!rn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,Ei(t,e,r)):(dt&&i&&Sd(e),e.flags|=1,Zt(t,e,n,r),e.child)}function _p(t,e,n,i,r){if(an(n)){var s=!0;El(e)}else s=!1;if(Ss(e,r),e.stateNode===null)il(t,e),$0(e,n,i),qu(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Rn(c):(c=an(n)?Cr:jt.current,c=Rs(e,c));var u=n.getDerivedStateFromProps,h=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&fp(e,o,i,c),Oi=!1;var d=e.memoizedState;o.state=d,Rl(e,i,o,r),l=e.memoizedState,a!==i||d!==l||on.current||Oi?(typeof u=="function"&&(Zu(e,n,u,i),l=e.memoizedState),(a=Oi||up(e,n,a,i,d,l,c))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,A0(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:On(e.type,a),o.props=c,h=e.pendingProps,d=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Rn(l):(l=an(n)?Cr:jt.current,l=Rs(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==l)&&fp(e,o,i,l),Oi=!1,d=e.memoizedState,o.state=d,Rl(e,i,o,r);var _=e.memoizedState;a!==h||d!==_||on.current||Oi?(typeof p=="function"&&(Zu(e,n,p,i),_=e.memoizedState),(c=Oi||up(e,n,c,i,d,_,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,_,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,_,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=_),o.props=i,o.state=_,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=1024),i=!1)}return Ju(t,e,n,i,s,r)}function Ju(t,e,n,i,r,s){Q0(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&np(e,n,!1),Ei(t,e,s);i=e.stateNode,wy.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=Ps(e,t.child,null,s),e.child=Ps(e,null,a,s)):Zt(t,e,a,s),e.memoizedState=i.state,r&&np(e,n,!0),e.child}function J0(t){var e=t.stateNode;e.pendingContext?tp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&tp(t,e.context,!1),bd(t,e.containerInfo)}function vp(t,e,n,i,r){return bs(),Ed(r),e.flags|=256,Zt(t,e,n,i),e.child}var ef={dehydrated:null,treeContext:null,retryLane:0};function tf(t){return{baseLanes:t,cachePool:null,transitions:null}}function e_(t,e,n){var i=e.pendingProps,r=pt.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),ot(pt,r&1),t===null)return $u(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=nc(o,i,0,null),t=Tr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=tf(n),e.memoizedState=ef,t):Fd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return Ty(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=qi(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=qi(a,s):(s=Tr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?tf(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=ef,i}return s=t.child,t=s.sibling,i=qi(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Fd(t,e){return e=nc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ma(t,e,n,i){return i!==null&&Ed(i),Ps(e,t.child,null,n),t=Fd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function Ty(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Uc(Error(ee(422))),Ma(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=nc({mode:"visible",children:i.children},r,0,null),s=Tr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&Ps(e,t.child,null,o),e.child.memoizedState=tf(o),e.memoizedState=ef,s);if(!(e.mode&1))return Ma(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ee(419)),i=Uc(s,i,void 0),Ma(t,e,o,i)}if(a=(o&t.childLanes)!==0,rn||a){if(i=Dt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Mi(t,r),Vn(i,t,r,-1))}return Gd(),i=Uc(Error(ee(421))),Ma(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ky.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,mn=Xi(r.nextSibling),gn=e,dt=!0,kn=null,t!==null&&(wn[Tn++]=pi,wn[Tn++]=mi,wn[Tn++]=Rr,pi=t.id,mi=t.overflow,Rr=e),e=Fd(e,i.children),e.flags|=4096,e)}function xp(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Yu(t.return,e,n)}function Oc(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function t_(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(Zt(t,e,i.children,n),i=pt.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&xp(t,n,e);else if(t.tag===19)xp(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(ot(pt,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&bl(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Oc(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&bl(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Oc(e,!0,n,null,s);break;case"together":Oc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function il(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Ei(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Pr|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ee(153));if(e.child!==null){for(t=e.child,n=qi(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=qi(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Ay(t,e,n){switch(e.tag){case 3:J0(e),bs();break;case 5:C0(e);break;case 1:an(e.type)&&El(e);break;case 4:bd(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;ot(Al,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(ot(pt,pt.current&1),e.flags|=128,null):n&e.child.childLanes?e_(t,e,n):(ot(pt,pt.current&1),t=Ei(t,e,n),t!==null?t.sibling:null);ot(pt,pt.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return t_(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),ot(pt,pt.current),i)break;return null;case 22:case 23:return e.lanes=0,K0(t,e,n)}return Ei(t,e,n)}var n_,nf,i_,r_;n_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};nf=function(){};i_=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,yr(ti.current);var s=null;switch(n){case"input":r=wu(t,r),i=wu(t,i),s=[];break;case"select":r=gt({},r,{value:void 0}),i=gt({},i,{value:void 0}),s=[];break;case"textarea":r=Cu(t,r),i=Cu(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Sl)}bu(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(bo.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(bo.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&ut("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};r_=function(t,e,n,i){n!==i&&(e.flags|=4)};function to(t,e){if(!dt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function kt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function Cy(t,e,n){var i=e.pendingProps;switch(Md(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return kt(e),null;case 1:return an(e.type)&&Ml(),kt(e),null;case 3:return i=e.stateNode,Ls(),ft(on),ft(jt),Ld(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(ya(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,kn!==null&&(ff(kn),kn=null))),nf(t,e),kt(e),null;case 5:Pd(e);var r=yr(Ho.current);if(n=e.type,t!==null&&e.stateNode!=null)i_(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ee(166));return kt(e),null}if(t=yr(ti.current),ya(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[qn]=e,i[zo]=s,t=(e.mode&1)!==0,n){case"dialog":ut("cancel",i),ut("close",i);break;case"iframe":case"object":case"embed":ut("load",i);break;case"video":case"audio":for(r=0;r<po.length;r++)ut(po[r],i);break;case"source":ut("error",i);break;case"img":case"image":case"link":ut("error",i),ut("load",i);break;case"details":ut("toggle",i);break;case"input":Rh(i,s),ut("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},ut("invalid",i);break;case"textarea":Ph(i,s),ut("invalid",i)}bu(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&xa(i.textContent,a,t),r=["children",""+a]):bo.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&ut("scroll",i)}switch(n){case"input":fa(i),bh(i,s,!0);break;case"textarea":fa(i),Lh(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Sl)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Dg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[qn]=e,t[zo]=i,n_(t,e,!1,!1),e.stateNode=t;e:{switch(o=Pu(n,i),n){case"dialog":ut("cancel",t),ut("close",t),r=i;break;case"iframe":case"object":case"embed":ut("load",t),r=i;break;case"video":case"audio":for(r=0;r<po.length;r++)ut(po[r],t);r=i;break;case"source":ut("error",t),r=i;break;case"img":case"image":case"link":ut("error",t),ut("load",t),r=i;break;case"details":ut("toggle",t),r=i;break;case"input":Rh(t,i),r=wu(t,i),ut("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=gt({},i,{value:void 0}),ut("invalid",t);break;case"textarea":Ph(t,i),r=Cu(t,i),ut("invalid",t);break;default:r=i}bu(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Ug(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Ng(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Po(t,l):typeof l=="number"&&Po(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(bo.hasOwnProperty(s)?l!=null&&s==="onScroll"&&ut("scroll",t):l!=null&&ad(t,s,l,o))}switch(n){case"input":fa(t),bh(t,i,!1);break;case"textarea":fa(t),Lh(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ji(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?_s(t,!!i.multiple,s,!1):i.defaultValue!=null&&_s(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Sl)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return kt(e),null;case 6:if(t&&e.stateNode!=null)r_(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ee(166));if(n=yr(Ho.current),yr(ti.current),ya(e)){if(i=e.stateNode,n=e.memoizedProps,i[qn]=e,(s=i.nodeValue!==n)&&(t=gn,t!==null))switch(t.tag){case 3:xa(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&xa(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[qn]=e,e.stateNode=i}return kt(e),null;case 13:if(ft(pt),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(dt&&mn!==null&&e.mode&1&&!(e.flags&128))M0(),bs(),e.flags|=98560,s=!1;else if(s=ya(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ee(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ee(317));s[qn]=e}else bs(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;kt(e),s=!1}else kn!==null&&(ff(kn),kn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||pt.current&1?Ct===0&&(Ct=3):Gd())),e.updateQueue!==null&&(e.flags|=4),kt(e),null);case 4:return Ls(),nf(t,e),t===null&&Fo(e.stateNode.containerInfo),kt(e),null;case 10:return Ad(e.type._context),kt(e),null;case 17:return an(e.type)&&Ml(),kt(e),null;case 19:if(ft(pt),s=e.memoizedState,s===null)return kt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)to(s,!1);else{if(Ct!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=bl(t),o!==null){for(e.flags|=128,to(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ot(pt,pt.current&1|2),e.child}t=t.sibling}s.tail!==null&&Mt()>Ns&&(e.flags|=128,i=!0,to(s,!1),e.lanes=4194304)}else{if(!i)if(t=bl(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),to(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!dt)return kt(e),null}else 2*Mt()-s.renderingStartTime>Ns&&n!==1073741824&&(e.flags|=128,i=!0,to(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Mt(),e.sibling=null,n=pt.current,ot(pt,i?n&1|2:n&1),e):(kt(e),null);case 22:case 23:return Vd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?hn&1073741824&&(kt(e),e.subtreeFlags&6&&(e.flags|=8192)):kt(e),null;case 24:return null;case 25:return null}throw Error(ee(156,e.tag))}function Ry(t,e){switch(Md(e),e.tag){case 1:return an(e.type)&&Ml(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return Ls(),ft(on),ft(jt),Ld(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Pd(e),null;case 13:if(ft(pt),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ee(340));bs()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ft(pt),null;case 4:return Ls(),null;case 10:return Ad(e.type._context),null;case 22:case 23:return Vd(),null;case 24:return null;default:return null}}var Ea=!1,Ht=!1,by=typeof WeakSet=="function"?WeakSet:Set,he=null;function hs(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){vt(t,e,i)}else n.current=null}function rf(t,e,n){try{n()}catch(i){vt(t,e,i)}}var yp=!1;function Py(t,e){if(Bu=vl,t=c0(),yd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,h=t,d=null;t:for(;;){for(var p;h!==n||r!==0&&h.nodeType!==3||(a=o+r),h!==s||i!==0&&h.nodeType!==3||(l=o+i),h.nodeType===3&&(o+=h.nodeValue.length),(p=h.firstChild)!==null;)d=h,h=p;for(;;){if(h===t)break t;if(d===n&&++c===r&&(a=o),d===s&&++u===i&&(l=o),(p=h.nextSibling)!==null)break;h=d,d=h.parentNode}h=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Hu={focusedElem:t,selectionRange:n},vl=!1,he=e;he!==null;)if(e=he,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,he=t;else for(;he!==null;){e=he;try{var _=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(_!==null){var y=_.memoizedProps,m=_.memoizedState,f=e.stateNode,g=f.getSnapshotBeforeUpdate(e.elementType===e.type?y:On(e.type,y),m);f.__reactInternalSnapshotBeforeUpdate=g}break;case 3:var v=e.stateNode.containerInfo;v.nodeType===1?v.textContent="":v.nodeType===9&&v.documentElement&&v.removeChild(v.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(x){vt(e,e.return,x)}if(t=e.sibling,t!==null){t.return=e.return,he=t;break}he=e.return}return _=yp,yp=!1,_}function Eo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&rf(e,n,s)}r=r.next}while(r!==i)}}function ec(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function sf(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function s_(t){var e=t.alternate;e!==null&&(t.alternate=null,s_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[qn],delete e[zo],delete e[Wu],delete e[dy],delete e[hy])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function o_(t){return t.tag===5||t.tag===3||t.tag===4}function Sp(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||o_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function of(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(i!==4&&(t=t.child,t!==null))for(of(t,e,n),t=t.sibling;t!==null;)of(t,e,n),t=t.sibling}function af(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(af(t,e,n),t=t.sibling;t!==null;)af(t,e,n),t=t.sibling}var Nt=null,Fn=!1;function Ri(t,e,n){for(n=n.child;n!==null;)a_(t,e,n),n=n.sibling}function a_(t,e,n){if(ei&&typeof ei.onCommitFiberUnmount=="function")try{ei.onCommitFiberUnmount(Xl,n)}catch{}switch(n.tag){case 5:Ht||hs(n,e);case 6:var i=Nt,r=Fn;Nt=null,Ri(t,e,n),Nt=i,Fn=r,Nt!==null&&(Fn?(t=Nt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):Nt.removeChild(n.stateNode));break;case 18:Nt!==null&&(Fn?(t=Nt,n=n.stateNode,t.nodeType===8?bc(t.parentNode,n):t.nodeType===1&&bc(t,n),Io(t)):bc(Nt,n.stateNode));break;case 4:i=Nt,r=Fn,Nt=n.stateNode.containerInfo,Fn=!0,Ri(t,e,n),Nt=i,Fn=r;break;case 0:case 11:case 14:case 15:if(!Ht&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&rf(n,e,o),r=r.next}while(r!==i)}Ri(t,e,n);break;case 1:if(!Ht&&(hs(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){vt(n,e,a)}Ri(t,e,n);break;case 21:Ri(t,e,n);break;case 22:n.mode&1?(Ht=(i=Ht)||n.memoizedState!==null,Ri(t,e,n),Ht=i):Ri(t,e,n);break;default:Ri(t,e,n)}}function Mp(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new by),e.forEach(function(i){var r=zy.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function Dn(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:Nt=a.stateNode,Fn=!1;break e;case 3:Nt=a.stateNode.containerInfo,Fn=!0;break e;case 4:Nt=a.stateNode.containerInfo,Fn=!0;break e}a=a.return}if(Nt===null)throw Error(ee(160));a_(s,o,r),Nt=null,Fn=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){vt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)l_(e,t),e=e.sibling}function l_(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(Dn(e,t),$n(t),i&4){try{Eo(3,t,t.return),ec(3,t)}catch(y){vt(t,t.return,y)}try{Eo(5,t,t.return)}catch(y){vt(t,t.return,y)}}break;case 1:Dn(e,t),$n(t),i&512&&n!==null&&hs(n,n.return);break;case 5:if(Dn(e,t),$n(t),i&512&&n!==null&&hs(n,n.return),t.flags&32){var r=t.stateNode;try{Po(r,"")}catch(y){vt(t,t.return,y)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Pg(r,s),Pu(a,o);var c=Pu(a,s);for(o=0;o<l.length;o+=2){var u=l[o],h=l[o+1];u==="style"?Ug(r,h):u==="dangerouslySetInnerHTML"?Ng(r,h):u==="children"?Po(r,h):ad(r,u,h,c)}switch(a){case"input":Tu(r,s);break;case"textarea":Lg(r,s);break;case"select":var d=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?_s(r,!!s.multiple,p,!1):d!==!!s.multiple&&(s.defaultValue!=null?_s(r,!!s.multiple,s.defaultValue,!0):_s(r,!!s.multiple,s.multiple?[]:"",!1))}r[zo]=s}catch(y){vt(t,t.return,y)}}break;case 6:if(Dn(e,t),$n(t),i&4){if(t.stateNode===null)throw Error(ee(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(y){vt(t,t.return,y)}}break;case 3:if(Dn(e,t),$n(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Io(e.containerInfo)}catch(y){vt(t,t.return,y)}break;case 4:Dn(e,t),$n(t);break;case 13:Dn(e,t),$n(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Bd=Mt())),i&4&&Mp(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(Ht=(c=Ht)||u,Dn(e,t),Ht=c):Dn(e,t),$n(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(he=t,u=t.child;u!==null;){for(h=he=u;he!==null;){switch(d=he,p=d.child,d.tag){case 0:case 11:case 14:case 15:Eo(4,d,d.return);break;case 1:hs(d,d.return);var _=d.stateNode;if(typeof _.componentWillUnmount=="function"){i=d,n=d.return;try{e=i,_.props=e.memoizedProps,_.state=e.memoizedState,_.componentWillUnmount()}catch(y){vt(i,n,y)}}break;case 5:hs(d,d.return);break;case 22:if(d.memoizedState!==null){wp(h);continue}}p!==null?(p.return=d,he=p):wp(h)}u=u.sibling}e:for(u=null,h=t;;){if(h.tag===5){if(u===null){u=h;try{r=h.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=h.stateNode,l=h.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Ig("display",o))}catch(y){vt(t,t.return,y)}}}else if(h.tag===6){if(u===null)try{h.stateNode.nodeValue=c?"":h.memoizedProps}catch(y){vt(t,t.return,y)}}else if((h.tag!==22&&h.tag!==23||h.memoizedState===null||h===t)&&h.child!==null){h.child.return=h,h=h.child;continue}if(h===t)break e;for(;h.sibling===null;){if(h.return===null||h.return===t)break e;u===h&&(u=null),h=h.return}u===h&&(u=null),h.sibling.return=h.return,h=h.sibling}}break;case 19:Dn(e,t),$n(t),i&4&&Mp(t);break;case 21:break;default:Dn(e,t),$n(t)}}function $n(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(o_(n)){var i=n;break e}n=n.return}throw Error(ee(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(Po(r,""),i.flags&=-33);var s=Sp(t);af(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Sp(t);of(t,a,o);break;default:throw Error(ee(161))}}catch(l){vt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Ly(t,e,n){he=t,c_(t)}function c_(t,e,n){for(var i=(t.mode&1)!==0;he!==null;){var r=he,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ea;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Ht;a=Ea;var c=Ht;if(Ea=o,(Ht=l)&&!c)for(he=r;he!==null;)o=he,l=o.child,o.tag===22&&o.memoizedState!==null?Tp(r):l!==null?(l.return=o,he=l):Tp(r);for(;s!==null;)he=s,c_(s),s=s.sibling;he=r,Ea=a,Ht=c}Ep(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,he=s):Ep(t)}}function Ep(t){for(;he!==null;){var e=he;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ht||ec(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Ht)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:On(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&ap(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}ap(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var h=u.dehydrated;h!==null&&Io(h)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Ht||e.flags&512&&sf(e)}catch(d){vt(e,e.return,d)}}if(e===t){he=null;break}if(n=e.sibling,n!==null){n.return=e.return,he=n;break}he=e.return}}function wp(t){for(;he!==null;){var e=he;if(e===t){he=null;break}var n=e.sibling;if(n!==null){n.return=e.return,he=n;break}he=e.return}}function Tp(t){for(;he!==null;){var e=he;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{ec(4,e)}catch(l){vt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){vt(e,r,l)}}var s=e.return;try{sf(e)}catch(l){vt(e,s,l)}break;case 5:var o=e.return;try{sf(e)}catch(l){vt(e,o,l)}}}catch(l){vt(e,e.return,l)}if(e===t){he=null;break}var a=e.sibling;if(a!==null){a.return=e.return,he=a;break}he=e.return}}var Dy=Math.ceil,Dl=Ti.ReactCurrentDispatcher,kd=Ti.ReactCurrentOwner,Cn=Ti.ReactCurrentBatchConfig,Ze=0,Dt=null,wt=null,It=0,hn=0,ps=rr(0),Ct=0,jo=null,Pr=0,tc=0,zd=0,wo=null,nn=null,Bd=0,Ns=1/0,di=null,Nl=!1,lf=null,Yi=null,wa=!1,Vi=null,Il=0,To=0,cf=null,rl=-1,sl=0;function qt(){return Ze&6?Mt():rl!==-1?rl:rl=Mt()}function Zi(t){return t.mode&1?Ze&2&&It!==0?It&-It:my.transition!==null?(sl===0&&(sl=$g()),sl):(t=tt,t!==0||(t=window.event,t=t===void 0?16:e0(t.type)),t):1}function Vn(t,e,n,i){if(50<To)throw To=0,cf=null,Error(ee(185));Ko(t,n,i),(!(Ze&2)||t!==Dt)&&(t===Dt&&(!(Ze&2)&&(tc|=n),Ct===4&&zi(t,It)),ln(t,i),n===1&&Ze===0&&!(e.mode&1)&&(Ns=Mt()+500,Kl&&sr()))}function ln(t,e){var n=t.callbackNode;mx(t,e);var i=_l(t,t===Dt?It:0);if(i===0)n!==null&&Ih(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Ih(n),e===1)t.tag===0?py(Ap.bind(null,t)):x0(Ap.bind(null,t)),uy(function(){!(Ze&6)&&sr()}),n=null;else{switch(Yg(i)){case 1:n=dd;break;case 4:n=jg;break;case 16:n=gl;break;case 536870912:n=Xg;break;default:n=gl}n=__(n,u_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function u_(t,e){if(rl=-1,sl=0,Ze&6)throw Error(ee(327));var n=t.callbackNode;if(Ms()&&t.callbackNode!==n)return null;var i=_l(t,t===Dt?It:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=Ul(t,i);else{e=i;var r=Ze;Ze|=2;var s=d_();(Dt!==t||It!==e)&&(di=null,Ns=Mt()+500,wr(t,e));do try{Uy();break}catch(a){f_(t,a)}while(!0);Td(),Dl.current=s,Ze=r,wt!==null?e=0:(Dt=null,It=0,e=Ct)}if(e!==0){if(e===2&&(r=Uu(t),r!==0&&(i=r,e=uf(t,r))),e===1)throw n=jo,wr(t,0),zi(t,i),ln(t,Mt()),n;if(e===6)zi(t,i);else{if(r=t.current.alternate,!(i&30)&&!Ny(r)&&(e=Ul(t,i),e===2&&(s=Uu(t),s!==0&&(i=s,e=uf(t,s))),e===1))throw n=jo,wr(t,0),zi(t,i),ln(t,Mt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ee(345));case 2:pr(t,nn,di);break;case 3:if(zi(t,i),(i&130023424)===i&&(e=Bd+500-Mt(),10<e)){if(_l(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){qt(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Gu(pr.bind(null,t,nn,di),e);break}pr(t,nn,di);break;case 4:if(zi(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-Hn(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Mt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*Dy(i/1960))-i,10<i){t.timeoutHandle=Gu(pr.bind(null,t,nn,di),i);break}pr(t,nn,di);break;case 5:pr(t,nn,di);break;default:throw Error(ee(329))}}}return ln(t,Mt()),t.callbackNode===n?u_.bind(null,t):null}function uf(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(wr(t,e).flags|=256),t=Ul(t,e),t!==2&&(e=nn,nn=n,e!==null&&ff(e)),t}function ff(t){nn===null?nn=t:nn.push.apply(nn,t)}function Ny(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!Wn(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function zi(t,e){for(e&=~zd,e&=~tc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Hn(e),i=1<<n;t[n]=-1,e&=~i}}function Ap(t){if(Ze&6)throw Error(ee(327));Ms();var e=_l(t,0);if(!(e&1))return ln(t,Mt()),null;var n=Ul(t,e);if(t.tag!==0&&n===2){var i=Uu(t);i!==0&&(e=i,n=uf(t,i))}if(n===1)throw n=jo,wr(t,0),zi(t,e),ln(t,Mt()),n;if(n===6)throw Error(ee(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,pr(t,nn,di),ln(t,Mt()),null}function Hd(t,e){var n=Ze;Ze|=1;try{return t(e)}finally{Ze=n,Ze===0&&(Ns=Mt()+500,Kl&&sr())}}function Lr(t){Vi!==null&&Vi.tag===0&&!(Ze&6)&&Ms();var e=Ze;Ze|=1;var n=Cn.transition,i=tt;try{if(Cn.transition=null,tt=1,t)return t()}finally{tt=i,Cn.transition=n,Ze=e,!(Ze&6)&&sr()}}function Vd(){hn=ps.current,ft(ps)}function wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,cy(n)),wt!==null)for(n=wt.return;n!==null;){var i=n;switch(Md(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Ml();break;case 3:Ls(),ft(on),ft(jt),Ld();break;case 5:Pd(i);break;case 4:Ls();break;case 13:ft(pt);break;case 19:ft(pt);break;case 10:Ad(i.type._context);break;case 22:case 23:Vd()}n=n.return}if(Dt=t,wt=t=qi(t.current,null),It=hn=e,Ct=0,jo=null,zd=tc=Pr=0,nn=wo=null,xr!==null){for(e=0;e<xr.length;e++)if(n=xr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}xr=null}return t}function f_(t,e){do{var n=wt;try{if(Td(),tl.current=Ll,Pl){for(var i=mt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pl=!1}if(br=0,Lt=At=mt=null,Mo=!1,Vo=0,kd.current=null,n===null||n.return===null){Ct=1,jo=e,wt=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=It,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,h=u.tag;if(!(u.mode&1)&&(h===0||h===11||h===15)){var d=u.alternate;d?(u.updateQueue=d.updateQueue,u.memoizedState=d.memoizedState,u.lanes=d.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=hp(o);if(p!==null){p.flags&=-257,pp(p,o,a,s,e),p.mode&1&&dp(s,c,e),e=p,l=c;var _=e.updateQueue;if(_===null){var y=new Set;y.add(l),e.updateQueue=y}else _.add(l);break e}else{if(!(e&1)){dp(s,c,e),Gd();break e}l=Error(ee(426))}}else if(dt&&a.mode&1){var m=hp(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),pp(m,o,a,s,e),Ed(Ds(l,a));break e}}s=l=Ds(l,a),Ct!==4&&(Ct=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Y0(s,l,e);op(s,f);break e;case 1:a=l;var g=s.type,v=s.stateNode;if(!(s.flags&128)&&(typeof g.getDerivedStateFromError=="function"||v!==null&&typeof v.componentDidCatch=="function"&&(Yi===null||!Yi.has(v)))){s.flags|=65536,e&=-e,s.lanes|=e;var x=Z0(s,a,e);op(s,x);break e}}s=s.return}while(s!==null)}p_(n)}catch(b){e=b,wt===n&&n!==null&&(wt=n=n.return);continue}break}while(!0)}function d_(){var t=Dl.current;return Dl.current=Ll,t===null?Ll:t}function Gd(){(Ct===0||Ct===3||Ct===2)&&(Ct=4),Dt===null||!(Pr&268435455)&&!(tc&268435455)||zi(Dt,It)}function Ul(t,e){var n=Ze;Ze|=2;var i=d_();(Dt!==t||It!==e)&&(di=null,wr(t,e));do try{Iy();break}catch(r){f_(t,r)}while(!0);if(Td(),Ze=n,Dl.current=i,wt!==null)throw Error(ee(261));return Dt=null,It=0,Ct}function Iy(){for(;wt!==null;)h_(wt)}function Uy(){for(;wt!==null&&!ox();)h_(wt)}function h_(t){var e=g_(t.alternate,t,hn);t.memoizedProps=t.pendingProps,e===null?p_(t):wt=e,kd.current=null}function p_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Ry(n,e),n!==null){n.flags&=32767,wt=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ct=6,wt=null;return}}else if(n=Cy(n,e,hn),n!==null){wt=n;return}if(e=e.sibling,e!==null){wt=e;return}wt=e=t}while(e!==null);Ct===0&&(Ct=5)}function pr(t,e,n){var i=tt,r=Cn.transition;try{Cn.transition=null,tt=1,Oy(t,e,n,i)}finally{Cn.transition=r,tt=i}return null}function Oy(t,e,n,i){do Ms();while(Vi!==null);if(Ze&6)throw Error(ee(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ee(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(gx(t,s),t===Dt&&(wt=Dt=null,It=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||wa||(wa=!0,__(gl,function(){return Ms(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Cn.transition,Cn.transition=null;var o=tt;tt=1;var a=Ze;Ze|=4,kd.current=null,Py(t,n),l_(n,t),ny(Hu),vl=!!Bu,Hu=Bu=null,t.current=n,Ly(n),ax(),Ze=a,tt=o,Cn.transition=s}else t.current=n;if(wa&&(wa=!1,Vi=t,Il=r),s=t.pendingLanes,s===0&&(Yi=null),ux(n.stateNode),ln(t,Mt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Nl)throw Nl=!1,t=lf,lf=null,t;return Il&1&&t.tag!==0&&Ms(),s=t.pendingLanes,s&1?t===cf?To++:(To=0,cf=t):To=0,sr(),null}function Ms(){if(Vi!==null){var t=Yg(Il),e=Cn.transition,n=tt;try{if(Cn.transition=null,tt=16>t?16:t,Vi===null)var i=!1;else{if(t=Vi,Vi=null,Il=0,Ze&6)throw Error(ee(331));var r=Ze;for(Ze|=4,he=t.current;he!==null;){var s=he,o=s.child;if(he.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(he=c;he!==null;){var u=he;switch(u.tag){case 0:case 11:case 15:Eo(8,u,s)}var h=u.child;if(h!==null)h.return=u,he=h;else for(;he!==null;){u=he;var d=u.sibling,p=u.return;if(s_(u),u===c){he=null;break}if(d!==null){d.return=p,he=d;break}he=p}}}var _=s.alternate;if(_!==null){var y=_.child;if(y!==null){_.child=null;do{var m=y.sibling;y.sibling=null,y=m}while(y!==null)}}he=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,he=o;else e:for(;he!==null;){if(s=he,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Eo(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,he=f;break e}he=s.return}}var g=t.current;for(he=g;he!==null;){o=he;var v=o.child;if(o.subtreeFlags&2064&&v!==null)v.return=o,he=v;else e:for(o=g;he!==null;){if(a=he,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ec(9,a)}}catch(b){vt(a,a.return,b)}if(a===o){he=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,he=x;break e}he=a.return}}if(Ze=r,sr(),ei&&typeof ei.onPostCommitFiberRoot=="function")try{ei.onPostCommitFiberRoot(Xl,t)}catch{}i=!0}return i}finally{tt=n,Cn.transition=e}}return!1}function Cp(t,e,n){e=Ds(n,e),e=Y0(t,e,1),t=$i(t,e,1),e=qt(),t!==null&&(Ko(t,1,e),ln(t,e))}function vt(t,e,n){if(t.tag===3)Cp(t,t,n);else for(;e!==null;){if(e.tag===3){Cp(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Yi===null||!Yi.has(i))){t=Ds(n,t),t=Z0(e,t,1),e=$i(e,t,1),t=qt(),e!==null&&(Ko(e,1,t),ln(e,t));break}}e=e.return}}function Fy(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=qt(),t.pingedLanes|=t.suspendedLanes&n,Dt===t&&(It&n)===n&&(Ct===4||Ct===3&&(It&130023424)===It&&500>Mt()-Bd?wr(t,0):zd|=n),ln(t,e)}function m_(t,e){e===0&&(t.mode&1?(e=pa,pa<<=1,!(pa&130023424)&&(pa=4194304)):e=1);var n=qt();t=Mi(t,e),t!==null&&(Ko(t,e,n),ln(t,n))}function ky(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),m_(t,n)}function zy(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ee(314))}i!==null&&i.delete(e),m_(t,n)}var g_;g_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||on.current)rn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return rn=!1,Ay(t,e,n);rn=!!(t.flags&131072)}else rn=!1,dt&&e.flags&1048576&&y0(e,Tl,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;il(t,e),t=e.pendingProps;var r=Rs(e,jt.current);Ss(e,n),r=Nd(null,e,i,t,r,n);var s=Id();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,an(i)?(s=!0,El(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Rd(e),r.updater=Jl,e.stateNode=r,r._reactInternals=e,qu(e,i,t,n),e=Ju(null,e,i,!0,s,n)):(e.tag=0,dt&&s&&Sd(e),Zt(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(il(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=Hy(i),t=On(i,t),r){case 0:e=Qu(null,e,i,t,n);break e;case 1:e=_p(null,e,i,t,n);break e;case 11:e=mp(null,e,i,t,n);break e;case 14:e=gp(null,e,i,On(i.type,t),n);break e}throw Error(ee(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),Qu(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),_p(t,e,i,r,n);case 3:e:{if(J0(e),t===null)throw Error(ee(387));i=e.pendingProps,s=e.memoizedState,r=s.element,A0(t,e),Rl(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ds(Error(ee(423)),e),e=vp(t,e,i,n,r);break e}else if(i!==r){r=Ds(Error(ee(424)),e),e=vp(t,e,i,n,r);break e}else for(mn=Xi(e.stateNode.containerInfo.firstChild),gn=e,dt=!0,kn=null,n=w0(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(bs(),i===r){e=Ei(t,e,n);break e}Zt(t,e,i,n)}e=e.child}return e;case 5:return C0(e),t===null&&$u(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Vu(i,r)?o=null:s!==null&&Vu(i,s)&&(e.flags|=32),Q0(t,e),Zt(t,e,o,n),e.child;case 6:return t===null&&$u(e),null;case 13:return e_(t,e,n);case 4:return bd(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=Ps(e,null,i,n):Zt(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),mp(t,e,i,r,n);case 7:return Zt(t,e,e.pendingProps,n),e.child;case 8:return Zt(t,e,e.pendingProps.children,n),e.child;case 12:return Zt(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,ot(Al,i._currentValue),i._currentValue=o,s!==null)if(Wn(s.value,o)){if(s.children===r.children&&!on.current){e=Ei(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=vi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Yu(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ee(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Yu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Zt(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,Ss(e,n),r=Rn(r),i=i(r),e.flags|=1,Zt(t,e,i,n),e.child;case 14:return i=e.type,r=On(i,e.pendingProps),r=On(i.type,r),gp(t,e,i,r,n);case 15:return q0(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:On(i,r),il(t,e),e.tag=1,an(i)?(t=!0,El(e)):t=!1,Ss(e,n),$0(e,i,r),qu(e,i,r,n),Ju(null,e,i,!0,t,n);case 19:return t_(t,e,n);case 22:return K0(t,e,n)}throw Error(ee(156,e.tag))};function __(t,e){return Wg(t,e)}function By(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function An(t,e,n,i){return new By(t,e,n,i)}function Wd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function Hy(t){if(typeof t=="function")return Wd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===cd)return 11;if(t===ud)return 14}return 2}function qi(t,e){var n=t.alternate;return n===null?(n=An(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function ol(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")Wd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case rs:return Tr(n.children,r,s,e);case ld:o=8,r|=8;break;case yu:return t=An(12,n,e,r|2),t.elementType=yu,t.lanes=s,t;case Su:return t=An(13,n,e,r),t.elementType=Su,t.lanes=s,t;case Mu:return t=An(19,n,e,r),t.elementType=Mu,t.lanes=s,t;case Cg:return nc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Tg:o=10;break e;case Ag:o=9;break e;case cd:o=11;break e;case ud:o=14;break e;case Ui:o=16,i=null;break e}throw Error(ee(130,t==null?t:typeof t,""))}return e=An(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function Tr(t,e,n,i){return t=An(7,t,i,e),t.lanes=n,t}function nc(t,e,n,i){return t=An(22,t,i,e),t.elementType=Cg,t.lanes=n,t.stateNode={isHidden:!1},t}function Fc(t,e,n){return t=An(6,t,null,e),t.lanes=n,t}function kc(t,e,n){return e=An(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function Vy(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=vc(0),this.expirationTimes=vc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=vc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function jd(t,e,n,i,r,s,o,a,l){return t=new Vy(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=An(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Rd(s),t}function Gy(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:is,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function v_(t){if(!t)return er;t=t._reactInternals;e:{if(Or(t)!==t||t.tag!==1)throw Error(ee(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(an(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ee(171))}if(t.tag===1){var n=t.type;if(an(n))return v0(t,n,e)}return e}function x_(t,e,n,i,r,s,o,a,l){return t=jd(n,i,!0,t,r,s,o,a,l),t.context=v_(null),n=t.current,i=qt(),r=Zi(n),s=vi(i,r),s.callback=e??null,$i(n,s,r),t.current.lanes=r,Ko(t,r,i),ln(t,i),t}function ic(t,e,n,i){var r=e.current,s=qt(),o=Zi(r);return n=v_(n),e.context===null?e.context=n:e.pendingContext=n,e=vi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=$i(r,e,o),t!==null&&(Vn(t,r,o,s),el(t,r,o)),o}function Ol(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Rp(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Xd(t,e){Rp(t,e),(t=t.alternate)&&Rp(t,e)}function Wy(){return null}var y_=typeof reportError=="function"?reportError:function(t){console.error(t)};function $d(t){this._internalRoot=t}rc.prototype.render=$d.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ee(409));ic(t,e,null,null)};rc.prototype.unmount=$d.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Lr(function(){ic(null,t,null,null)}),e[Si]=null}};function rc(t){this._internalRoot=t}rc.prototype.unstable_scheduleHydration=function(t){if(t){var e=Kg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<ki.length&&e!==0&&e<ki[n].priority;n++);ki.splice(n,0,t),n===0&&Jg(t)}};function Yd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function sc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function bp(){}function jy(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Ol(o);s.call(c)}}var o=x_(e,i,t,0,null,!1,!1,"",bp);return t._reactRootContainer=o,t[Si]=o.current,Fo(t.nodeType===8?t.parentNode:t),Lr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Ol(l);a.call(c)}}var l=jd(t,0,!1,null,null,!1,!1,"",bp);return t._reactRootContainer=l,t[Si]=l.current,Fo(t.nodeType===8?t.parentNode:t),Lr(function(){ic(e,l,n,i)}),l}function oc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ol(o);a.call(l)}}ic(e,o,t,r)}else o=jy(n,e,t,r,i);return Ol(o)}Zg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ho(e.pendingLanes);n!==0&&(hd(e,n|1),ln(e,Mt()),!(Ze&6)&&(Ns=Mt()+500,sr()))}break;case 13:Lr(function(){var i=Mi(t,1);if(i!==null){var r=qt();Vn(i,t,1,r)}}),Xd(t,1)}};pd=function(t){if(t.tag===13){var e=Mi(t,134217728);if(e!==null){var n=qt();Vn(e,t,134217728,n)}Xd(t,134217728)}};qg=function(t){if(t.tag===13){var e=Zi(t),n=Mi(t,e);if(n!==null){var i=qt();Vn(n,t,e,i)}Xd(t,e)}};Kg=function(){return tt};Qg=function(t,e){var n=tt;try{return tt=t,e()}finally{tt=n}};Du=function(t,e,n){switch(e){case"input":if(Tu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=ql(i);if(!r)throw Error(ee(90));bg(i),Tu(i,r)}}}break;case"textarea":Lg(t,n);break;case"select":e=n.value,e!=null&&_s(t,!!n.multiple,e,!1)}};kg=Hd;zg=Lr;var Xy={usingClientEntryPoint:!1,Events:[Jo,ls,ql,Og,Fg,Hd]},no={findFiberByHostInstance:vr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},$y={bundleType:no.bundleType,version:no.version,rendererPackageName:no.rendererPackageName,rendererConfig:no.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ti.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Vg(t),t===null?null:t.stateNode},findFiberByHostInstance:no.findFiberByHostInstance||Wy,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Ta=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Ta.isDisabled&&Ta.supportsFiber)try{Xl=Ta.inject($y),ei=Ta}catch{}}vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Xy;vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Yd(e))throw Error(ee(200));return Gy(t,e,null,n)};vn.createRoot=function(t,e){if(!Yd(t))throw Error(ee(299));var n=!1,i="",r=y_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=jd(t,1,!1,null,null,n,!1,i,r),t[Si]=e.current,Fo(t.nodeType===8?t.parentNode:t),new $d(e)};vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ee(188)):(t=Object.keys(t).join(","),Error(ee(268,t)));return t=Vg(e),t=t===null?null:t.stateNode,t};vn.flushSync=function(t){return Lr(t)};vn.hydrate=function(t,e,n){if(!sc(e))throw Error(ee(200));return oc(null,t,e,!0,n)};vn.hydrateRoot=function(t,e,n){if(!Yd(t))throw Error(ee(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=y_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=x_(e,null,t,1,n??null,r,!1,s,o),t[Si]=e.current,Fo(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new rc(e)};vn.render=function(t,e,n){if(!sc(e))throw Error(ee(200));return oc(null,t,e,!1,n)};vn.unmountComponentAtNode=function(t){if(!sc(t))throw Error(ee(40));return t._reactRootContainer?(Lr(function(){oc(null,null,t,!1,function(){t._reactRootContainer=null,t[Si]=null})}),!0):!1};vn.unstable_batchedUpdates=Hd;vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!sc(n))throw Error(ee(200));if(t==null||t._reactInternals===void 0)throw Error(ee(38));return oc(t,e,n,!1,i)};vn.version="18.3.1-next-f1338f8080-20240426";function S_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(S_)}catch(t){console.error(t)}}S_(),Sg.exports=vn;var Yy=Sg.exports,Pp=Yy;vu.createRoot=Pp.createRoot,vu.hydrateRoot=Pp.hydrateRoot;const Zy=(...t)=>{console!=null&&console.warn&&(Ar(t[0])&&(t[0]=`react-i18next:: ${t[0]}`),console.warn(...t))},Lp={},df=(...t)=>{Ar(t[0])&&Lp[t[0]]||(Ar(t[0])&&(Lp[t[0]]=new Date),Zy(...t))},M_=(t,e)=>()=>{if(t.isInitialized)e();else{const n=()=>{setTimeout(()=>{t.off("initialized",n)},0),e()};t.on("initialized",n)}},Dp=(t,e,n)=>{t.loadNamespaces(e,M_(t,n))},Np=(t,e,n,i)=>{Ar(n)&&(n=[n]),n.forEach(r=>{t.options.ns.indexOf(r)<0&&t.options.ns.push(r)}),t.loadLanguages(e,M_(t,i))},qy=(t,e,n={})=>!e.languages||!e.languages.length?(df("i18n.languages were undefined or empty",e.languages),!0):e.hasLoadedNamespace(t,{lng:n.lng,precheck:(i,r)=>{var s;if(((s=n.bindI18n)==null?void 0:s.indexOf("languageChanging"))>-1&&i.services.backendConnector.backend&&i.isLanguageChangingTo&&!r(i.isLanguageChangingTo,t))return!1}}),Ar=t=>typeof t=="string",Ky=t=>typeof t=="object"&&t!==null,Qy=/&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,Jy={"&amp;":"&","&#38;":"&","&lt;":"<","&#60;":"<","&gt;":">","&#62;":">","&apos;":"'","&#39;":"'","&quot;":'"',"&#34;":'"',"&nbsp;":" ","&#160;":" ","&copy;":"©","&#169;":"©","&reg;":"®","&#174;":"®","&hellip;":"…","&#8230;":"…","&#x2F;":"/","&#47;":"/"},e1=t=>Jy[t],t1=t=>t.replace(Qy,e1);let hf={bindI18n:"languageChanged",bindI18nStore:"",transEmptyNodeValue:"",transSupportBasicHtmlNodes:!0,transWrapTextNodes:"",transKeepBasicHtmlNodesFor:["br","strong","i","p"],useSuspense:!0,unescape:t1};const n1=(t={})=>{hf={...hf,...t}},i1=()=>hf;let E_;const r1=t=>{E_=t},s1=()=>E_,o1={type:"3rdParty",init(t){n1(t.options.react),r1(t)}},a1=Fe.createContext();class l1{constructor(){this.usedNamespaces={}}addUsedNamespaces(e){e.forEach(n=>{this.usedNamespaces[n]||(this.usedNamespaces[n]=!0)})}getUsedNamespaces(){return Object.keys(this.usedNamespaces)}}const c1=(t,e)=>{const n=Fe.useRef();return Fe.useEffect(()=>{n.current=t},[t,e]),n.current},w_=(t,e,n,i)=>t.getFixedT(e,n,i),u1=(t,e,n,i)=>Fe.useCallback(w_(t,e,n,i),[t,e,n,i]),ta=(t,e={})=>{var x,b,A,T;const{i18n:n}=e,{i18n:i,defaultNS:r}=Fe.useContext(a1)||{},s=n||i||s1();if(s&&!s.reportNamespaces&&(s.reportNamespaces=new l1),!s){df("You will need to pass in an i18next instance by using initReactI18next");const R=(S,P)=>Ar(P)?P:Ky(P)&&Ar(P.defaultValue)?P.defaultValue:Array.isArray(S)?S[S.length-1]:S,w=[R,{},!1];return w.t=R,w.i18n={},w.ready=!1,w}(x=s.options.react)!=null&&x.wait&&df("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");const o={...i1(),...s.options.react,...e},{useSuspense:a,keyPrefix:l}=o;let c=r||((b=s.options)==null?void 0:b.defaultNS);c=Ar(c)?[c]:c||["translation"],(T=(A=s.reportNamespaces).addUsedNamespaces)==null||T.call(A,c);const u=(s.isInitialized||s.initializedStoreOnce)&&c.every(R=>qy(R,s,o)),h=u1(s,e.lng||null,o.nsMode==="fallback"?c:c[0],l),d=()=>h,p=()=>w_(s,e.lng||null,o.nsMode==="fallback"?c:c[0],l),[_,y]=Fe.useState(d);let m=c.join();e.lng&&(m=`${e.lng}${m}`);const f=c1(m),g=Fe.useRef(!0);Fe.useEffect(()=>{const{bindI18n:R,bindI18nStore:w}=o;g.current=!0,!u&&!a&&(e.lng?Np(s,e.lng,c,()=>{g.current&&y(p)}):Dp(s,c,()=>{g.current&&y(p)})),u&&f&&f!==m&&g.current&&y(p);const S=()=>{g.current&&y(p)};return R&&(s==null||s.on(R,S)),w&&(s==null||s.store.on(w,S)),()=>{g.current=!1,s&&(R==null||R.split(" ").forEach(P=>s.off(P,S))),w&&s&&w.split(" ").forEach(P=>s.store.off(P,S))}},[s,m]),Fe.useEffect(()=>{g.current&&u&&y(d)},[s,l,u]);const v=[_,s,u];if(v.t=_,v.i18n=s,v.ready=u,u||!u&&!a)return v;throw new Promise(R=>{e.lng?Np(s,e.lng,c,()=>R()):Dp(s,c,()=>R())})};var T_={exports:{}},f1="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",d1=f1,h1=d1;function A_(){}function C_(){}C_.resetWarningCache=A_;var p1=function(){function t(i,r,s,o,a,l){if(l!==h1){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:C_,resetWarningCache:A_};return n.PropTypes=n,n};T_.exports=p1();var m1=T_.exports;const g1=cg(m1);function R_({sections:t}){const[e,n]=Fe.useState(0);return Fe.useEffect(()=>{const i=document.querySelectorAll(".section"),r={root:null,rootMargin:"0px",threshold:.5},s=a=>{a.forEach(l=>{if(l.isIntersecting){const c=Array.from(i).indexOf(l.target);n(c)}})},o=new IntersectionObserver(s,r);return i.forEach(a=>o.observe(a)),()=>{i.forEach(a=>o.unobserve(a))}},[]),te.jsx("div",{className:"fixed right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2",children:t.map((i,r)=>te.jsx("div",{className:`w-2 h-2 md:w-4 md:h-4 rounded-full transition ease-in-out duration-500 ${r===e?"bg-primary":"border-2 border-primary"}`},r))})}R_.propTypes={sections:g1.array.isRequired};const _1=()=>{const{i18n:t}=ta(),e=n=>{t.changeLanguage(n).then(i=>null),localStorage.setItem("language",n)};return Fe.useEffect(()=>{const n=document.getElementById("toggleSwitch"),i=document.getElementById("languageText"),r=localStorage.getItem("language")||"fr";if(r==="en"?(n.classList.remove("french"),n.classList.add("english"),i.innerText="EN"):(n.classList.remove("english"),n.classList.add("french"),i.innerText="FR"),e(r),n)return n.addEventListener("click",function(){n.classList.contains("french")?(e("en"),n.classList.remove("french"),n.classList.add("english"),i.innerText="EN"):(e("fr"),n.classList.remove("english"),n.classList.add("french"),i.innerText="FR")}),()=>{n.removeEventListener("click",function(){})}},[]),te.jsx("div",{className:"toggle-switch french cursor-pointer ml-4 md:ml-8",id:"toggleSwitch",children:te.jsx("p",{id:"languageText",className:"text-lg text-primary hover:text-primary transition ease-in duration-50 cursor-hover",children:"FR"})})};/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zd="170",Es={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},v1=0,Ip=1,x1=2,b_=1,y1=2,fi=3,tr=0,cn=1,Kn=2,Ki=0,ws=1,Up=2,Op=3,Fp=4,S1=5,gr=100,M1=101,E1=102,w1=103,T1=104,A1=200,C1=201,R1=202,b1=203,pf=204,mf=205,P1=206,L1=207,D1=208,N1=209,I1=210,U1=211,O1=212,F1=213,k1=214,gf=0,_f=1,vf=2,Is=3,xf=4,yf=5,Sf=6,Mf=7,qd=0,z1=1,B1=2,Qi=0,H1=1,V1=2,G1=3,W1=4,j1=5,X1=6,$1=7,P_=300,Us=301,Os=302,Ef=303,wf=304,ac=306,Tf=1e3,Sr=1001,Af=1002,Gn=1003,Y1=1004,Aa=1005,Qn=1006,zc=1007,Mr=1008,wi=1009,L_=1010,D_=1011,Xo=1012,Kd=1013,Dr=1014,gi=1015,na=1016,Qd=1017,Jd=1018,Fs=1020,N_=35902,I_=1021,U_=1022,Bn=1023,O_=1024,F_=1025,Ts=1026,ks=1027,k_=1028,eh=1029,z_=1030,th=1031,nh=1033,al=33776,ll=33777,cl=33778,ul=33779,Cf=35840,Rf=35841,bf=35842,Pf=35843,Lf=36196,Df=37492,Nf=37496,If=37808,Uf=37809,Of=37810,Ff=37811,kf=37812,zf=37813,Bf=37814,Hf=37815,Vf=37816,Gf=37817,Wf=37818,jf=37819,Xf=37820,$f=37821,fl=36492,Yf=36494,Zf=36495,B_=36283,qf=36284,Kf=36285,Qf=36286,Z1=3200,q1=3201,ih=0,K1=1,Bi="",En="srgb",Gs="srgb-linear",lc="linear",nt="srgb",Br=7680,kp=519,Q1=512,J1=513,eS=514,H_=515,tS=516,nS=517,iS=518,rS=519,zp=35044,Bp="300 es",_i=2e3,Fl=2001;class Fr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const zt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Hp=1234567;const Ao=Math.PI/180,$o=180/Math.PI;function Ws(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(zt[t&255]+zt[t>>8&255]+zt[t>>16&255]+zt[t>>24&255]+"-"+zt[e&255]+zt[e>>8&255]+"-"+zt[e>>16&15|64]+zt[e>>24&255]+"-"+zt[n&63|128]+zt[n>>8&255]+"-"+zt[n>>16&255]+zt[n>>24&255]+zt[i&255]+zt[i>>8&255]+zt[i>>16&255]+zt[i>>24&255]).toLowerCase()}function Vt(t,e,n){return Math.max(e,Math.min(n,t))}function rh(t,e){return(t%e+e)%e}function sS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function oS(t,e,n){return t!==e?(n-t)/(e-t):0}function Co(t,e,n){return(1-n)*t+n*e}function aS(t,e,n,i){return Co(t,e,1-Math.exp(-n*i))}function lS(t,e=1){return e-Math.abs(rh(t,e*2)-e)}function cS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function uS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function fS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function dS(t,e){return t+Math.random()*(e-t)}function hS(t){return t*(.5-Math.random())}function pS(t){t!==void 0&&(Hp=t);let e=Hp+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function mS(t){return t*Ao}function gS(t){return t*$o}function _S(t){return(t&t-1)===0&&t!==0}function vS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function xS(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function yS(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),h=s((e-i)/2),d=o((e-i)/2),p=s((i-e)/2),_=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*h,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*h,a*c);break;case"ZXZ":t.set(l*h,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*_,l*p,a*c);break;case"YXY":t.set(l*p,a*u,l*_,a*c);break;case"ZYZ":t.set(l*_,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ns(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function $t(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const SS={DEG2RAD:Ao,RAD2DEG:$o,generateUUID:Ws,clamp:Vt,euclideanModulo:rh,mapLinear:sS,inverseLerp:oS,lerp:Co,damp:aS,pingpong:lS,smoothstep:cS,smootherstep:uS,randInt:fS,randFloat:dS,randFloatSpread:hS,seededRandom:pS,degToRad:mS,radToDeg:gS,isPowerOfTwo:_S,ceilPowerOfTwo:vS,floorPowerOfTwo:xS,setQuaternionFromProperEuler:yS,normalize:$t,denormalize:ns};class De{constructor(e=0,n=0){De.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Oe{constructor(e,n,i,r,s,o,a,l,c){Oe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],p=i[5],_=i[8],y=r[0],m=r[3],f=r[6],g=r[1],v=r[4],x=r[7],b=r[2],A=r[5],T=r[8];return s[0]=o*y+a*g+l*b,s[3]=o*m+a*v+l*A,s[6]=o*f+a*x+l*T,s[1]=c*y+u*g+h*b,s[4]=c*m+u*v+h*A,s[7]=c*f+u*x+h*T,s[2]=d*y+p*g+_*b,s[5]=d*m+p*v+_*A,s[8]=d*f+p*x+_*T,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*s,p=c*s-o*l,_=n*h+i*d+r*p;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const y=1/_;return e[0]=h*y,e[1]=(r*c-u*i)*y,e[2]=(a*i-r*o)*y,e[3]=d*y,e[4]=(u*n-r*l)*y,e[5]=(r*s-a*n)*y,e[6]=p*y,e[7]=(i*l-c*n)*y,e[8]=(o*n-i*s)*y,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Bc.makeScale(e,n)),this}rotate(e){return this.premultiply(Bc.makeRotation(-e)),this}translate(e,n){return this.premultiply(Bc.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Bc=new Oe;function V_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Yo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function MS(){const t=Yo("canvas");return t.style.display="block",t}const Vp={};function mo(t){t in Vp||(Vp[t]=!0,console.warn(t))}function ES(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function wS(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function TS(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Ye={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(t,e,n){return this.enabled===!1||e===n||!e||!n||(this.spaces[e].transfer===nt&&(t.r=xi(t.r),t.g=xi(t.g),t.b=xi(t.b)),this.spaces[e].primaries!==this.spaces[n].primaries&&(t.applyMatrix3(this.spaces[e].toXYZ),t.applyMatrix3(this.spaces[n].fromXYZ)),this.spaces[n].transfer===nt&&(t.r=As(t.r),t.g=As(t.g),t.b=As(t.b))),t},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)},getPrimaries:function(t){return this.spaces[t].primaries},getTransfer:function(t){return t===Bi?lc:this.spaces[t].transfer},getLuminanceCoefficients:function(t,e=this.workingColorSpace){return t.fromArray(this.spaces[e].luminanceCoefficients)},define:function(t){Object.assign(this.spaces,t)},_getMatrix:function(t,e,n){return t.copy(this.spaces[e].toXYZ).multiply(this.spaces[n].fromXYZ)},_getDrawingBufferColorSpace:function(t){return this.spaces[t].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(t=this.workingColorSpace){return this.spaces[t].workingColorSpaceConfig.unpackColorSpace}};function xi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function As(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const Gp=[.64,.33,.3,.6,.15,.06],Wp=[.2126,.7152,.0722],jp=[.3127,.329],Xp=new Oe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),$p=new Oe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Ye.define({[Gs]:{primaries:Gp,whitePoint:jp,transfer:lc,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:Wp,workingColorSpaceConfig:{unpackColorSpace:En},outputColorSpaceConfig:{drawingBufferColorSpace:En}},[En]:{primaries:Gp,whitePoint:jp,transfer:nt,toXYZ:Xp,fromXYZ:$p,luminanceCoefficients:Wp,outputColorSpaceConfig:{drawingBufferColorSpace:En}}});let Hr;class AS{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Hr===void 0&&(Hr=Yo("canvas")),Hr.width=e.width,Hr.height=e.height;const i=Hr.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=Hr}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Yo("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=xi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(xi(n[i]/255)*255):n[i]=xi(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let CS=0;class G_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:CS++}),this.uuid=Ws(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Hc(r[o].image)):s.push(Hc(r[o]))}else s=Hc(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Hc(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?AS.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let RS=0;class Kt extends Fr{constructor(e=Kt.DEFAULT_IMAGE,n=Kt.DEFAULT_MAPPING,i=Sr,r=Sr,s=Qn,o=Mr,a=Bn,l=wi,c=Kt.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ws(),this.name="",this.source=new G_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new De(0,0),this.repeat=new De(1,1),this.center=new De(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Oe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==P_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Tf:e.x=e.x-Math.floor(e.x);break;case Sr:e.x=e.x<0?0:1;break;case Af:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Tf:e.y=e.y-Math.floor(e.y);break;case Sr:e.y=e.y<0?0:1;break;case Af:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Kt.DEFAULT_IMAGE=null;Kt.DEFAULT_MAPPING=P_;Kt.DEFAULT_ANISOTROPY=1;class xt{constructor(e=0,n=0,i=0,r=1){xt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],_=l[9],y=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-y)<.01&&Math.abs(_-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+y)<.1&&Math.abs(_+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const v=(c+1)/2,x=(p+1)/2,b=(f+1)/2,A=(u+d)/4,T=(h+y)/4,R=(_+m)/4;return v>x&&v>b?v<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(v),r=A/i,s=T/i):x>b?x<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(x),i=A/r,s=R/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=T/s,r=R/s),this.set(i,r,s,n),this}let g=Math.sqrt((m-_)*(m-_)+(h-y)*(h-y)+(d-u)*(d-u));return Math.abs(g)<.001&&(g=1),this.x=(m-_)/g,this.y=(h-y)/g,this.z=(d-u)/g,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class bS extends Fr{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new xt(0,0,e,n),this.scissorTest=!1,this.viewport=new xt(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new Kt(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new G_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Nr extends bS{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class W_ extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class PS extends Kt{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Sr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ir{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],h=i[r+3];const d=s[o+0],p=s[o+1],_=s[o+2],y=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h;return}if(a===1){e[n+0]=d,e[n+1]=p,e[n+2]=_,e[n+3]=y;return}if(h!==y||l!==d||c!==p||u!==_){let m=1-a;const f=l*d+c*p+u*_+h*y,g=f>=0?1:-1,v=1-f*f;if(v>Number.EPSILON){const b=Math.sqrt(v),A=Math.atan2(b,f*g);m=Math.sin(m*A)/b,a=Math.sin(a*A)/b}const x=a*g;if(l=l*m+d*x,c=c*m+p*x,u=u*m+_*x,h=h*m+y*x,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=b,c*=b,u*=b,h*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=h}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],h=s[o],d=s[o+1],p=s[o+2],_=s[o+3];return e[n]=a*_+u*h+l*p-c*d,e[n+1]=l*_+u*d+c*h-a*p,e[n+2]=c*_+u*p+a*d-l*h,e[n+3]=u*_-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),h=a(s/2),d=l(i/2),p=l(r/2),_=l(s/2);switch(o){case"XYZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"YXZ":this._x=d*u*h+c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"ZXY":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h-d*p*_;break;case"ZYX":this._x=d*u*h-c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h+d*p*_;break;case"YZX":this._x=d*u*h+c*p*_,this._y=c*p*h+d*u*_,this._z=c*u*_-d*p*h,this._w=c*u*h-d*p*_;break;case"XZY":this._x=d*u*h-c*p*_,this._y=c*p*h-d*u*_,this._z=c*u*_+d*p*h,this._w=c*u*h+d*p*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],h=n[10],d=i+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>h){const p=2*Math.sqrt(1+i-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-i-h);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Vt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class O{constructor(e=0,n=0,i=0){O.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Yp.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Yp.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),h=2*(s*i-o*n);return this.x=n+l*c+o*h-a*u,this.y=i+l*u+a*c-s*h,this.z=r+l*h+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Vc.copy(this).projectOnVector(e),this.sub(Vc)}reflect(e){return this.sub(Vc.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Vt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vc=new O,Yp=new Ir;class ia{constructor(e=new O(1/0,1/0,1/0),n=new O(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Nn):Nn.fromBufferAttribute(s,o),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ca.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ca.copy(i.boundingBox)),Ca.applyMatrix4(e.matrixWorld),this.union(Ca)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(io),Ra.subVectors(this.max,io),Vr.subVectors(e.a,io),Gr.subVectors(e.b,io),Wr.subVectors(e.c,io),bi.subVectors(Gr,Vr),Pi.subVectors(Wr,Gr),ar.subVectors(Vr,Wr);let n=[0,-bi.z,bi.y,0,-Pi.z,Pi.y,0,-ar.z,ar.y,bi.z,0,-bi.x,Pi.z,0,-Pi.x,ar.z,0,-ar.x,-bi.y,bi.x,0,-Pi.y,Pi.x,0,-ar.y,ar.x,0];return!Gc(n,Vr,Gr,Wr,Ra)||(n=[1,0,0,0,1,0,0,0,1],!Gc(n,Vr,Gr,Wr,Ra))?!1:(ba.crossVectors(bi,Pi),n=[ba.x,ba.y,ba.z],Gc(n,Vr,Gr,Wr,Ra))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(oi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),oi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),oi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),oi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),oi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),oi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),oi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),oi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(oi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const oi=[new O,new O,new O,new O,new O,new O,new O,new O],Nn=new O,Ca=new ia,Vr=new O,Gr=new O,Wr=new O,bi=new O,Pi=new O,ar=new O,io=new O,Ra=new O,ba=new O,lr=new O;function Gc(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){lr.fromArray(t,s);const a=r.x*Math.abs(lr.x)+r.y*Math.abs(lr.y)+r.z*Math.abs(lr.z),l=e.dot(lr),c=n.dot(lr),u=i.dot(lr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const LS=new ia,ro=new O,Wc=new O;class sh{constructor(e=new O,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):LS.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ro.subVectors(e,this.center);const n=ro.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(ro,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Wc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ro.copy(e.center).add(Wc)),this.expandByPoint(ro.copy(e.center).sub(Wc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new O,jc=new O,Pa=new O,Li=new O,Xc=new O,La=new O,$c=new O;class j_{constructor(e=new O,n=new O(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=ai.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,n),ai.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){jc.copy(e).add(n).multiplyScalar(.5),Pa.copy(n).sub(e).normalize(),Li.copy(this.origin).sub(jc);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Pa),a=Li.dot(this.direction),l=-Li.dot(Pa),c=Li.lengthSq(),u=Math.abs(1-o*o);let h,d,p,_;if(u>0)if(h=o*l-a,d=o*a-l,_=s*u,h>=0)if(d>=-_)if(d<=_){const y=1/u;h*=y,d*=y,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-_?(h=Math.max(0,-(-o*s+a)),d=h>0?-s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c):d<=_?(h=0,d=Math.min(Math.max(-s,-l),s),p=d*(d+2*l)+c):(h=Math.max(0,-(o*s+a)),d=h>0?s:Math.min(Math.max(-s,-l),s),p=-h*h+d*(d+2*l)+c);else d=o>0?-s:s,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(jc).addScaledVector(Pa,d),p}intersectSphere(e,n){ai.subVectors(e.center,this.origin);const i=ai.dot(this.direction),r=ai.dot(ai)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,n,i,r,s){Xc.subVectors(n,e),La.subVectors(i,e),$c.crossVectors(Xc,La);let o=this.direction.dot($c),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Li.subVectors(this.origin,e);const l=a*this.direction.dot(La.crossVectors(Li,La));if(l<0)return null;const c=a*this.direction.dot(Xc.cross(Li));if(c<0||l+c>o)return null;const u=-a*Li.dot($c);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class yt{constructor(e,n,i,r,s,o,a,l,c,u,h,d,p,_,y,m){yt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,h,d,p,_,y,m)}set(e,n,i,r,s,o,a,l,c,u,h,d,p,_,y,m){const f=this.elements;return f[0]=e,f[4]=n,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=_,f[11]=y,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new yt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/jr.setFromMatrixColumn(e,0).length(),s=1/jr.setFromMatrixColumn(e,1).length(),o=1/jr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=o*u,p=o*h,_=a*u,y=a*h;n[0]=l*u,n[4]=-l*h,n[8]=c,n[1]=p+_*c,n[5]=d-y*c,n[9]=-a*l,n[2]=y-d*c,n[6]=_+p*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,_=c*u,y=c*h;n[0]=d+y*a,n[4]=_*a-p,n[8]=o*c,n[1]=o*h,n[5]=o*u,n[9]=-a,n[2]=p*a-_,n[6]=y+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,_=c*u,y=c*h;n[0]=d-y*a,n[4]=-o*h,n[8]=_+p*a,n[1]=p+_*a,n[5]=o*u,n[9]=y-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,_=a*u,y=a*h;n[0]=l*u,n[4]=_*c-p,n[8]=d*c+y,n[1]=l*h,n[5]=y*c+d,n[9]=p*c-_,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=y-d*h,n[8]=_*h+p,n[1]=h,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*h+_,n[10]=d-y*h}else if(e.order==="XZY"){const d=o*l,p=o*c,_=a*l,y=a*c;n[0]=l*u,n[4]=-h,n[8]=c*u,n[1]=d*h+y,n[5]=o*u,n[9]=p*h-_,n[2]=_*h-p,n[6]=a*u,n[10]=y*h+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(DS,e,NS)}lookAt(e,n,i){const r=this.elements;return fn.subVectors(e,n),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),Di.crossVectors(i,fn),Di.lengthSq()===0&&(Math.abs(i.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),Di.crossVectors(i,fn)),Di.normalize(),Da.crossVectors(fn,Di),r[0]=Di.x,r[4]=Da.x,r[8]=fn.x,r[1]=Di.y,r[5]=Da.y,r[9]=fn.y,r[2]=Di.z,r[6]=Da.z,r[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],p=i[13],_=i[2],y=i[6],m=i[10],f=i[14],g=i[3],v=i[7],x=i[11],b=i[15],A=r[0],T=r[4],R=r[8],w=r[12],S=r[1],P=r[5],H=r[9],k=r[13],W=r[2],$=r[6],G=r[10],Q=r[14],L=r[3],j=r[7],Z=r[11],se=r[15];return s[0]=o*A+a*S+l*W+c*L,s[4]=o*T+a*P+l*$+c*j,s[8]=o*R+a*H+l*G+c*Z,s[12]=o*w+a*k+l*Q+c*se,s[1]=u*A+h*S+d*W+p*L,s[5]=u*T+h*P+d*$+p*j,s[9]=u*R+h*H+d*G+p*Z,s[13]=u*w+h*k+d*Q+p*se,s[2]=_*A+y*S+m*W+f*L,s[6]=_*T+y*P+m*$+f*j,s[10]=_*R+y*H+m*G+f*Z,s[14]=_*w+y*k+m*Q+f*se,s[3]=g*A+v*S+x*W+b*L,s[7]=g*T+v*P+x*$+b*j,s[11]=g*R+v*H+x*G+b*Z,s[15]=g*w+v*k+x*Q+b*se,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],_=e[3],y=e[7],m=e[11],f=e[15];return _*(+s*l*h-r*c*h-s*a*d+i*c*d+r*a*p-i*l*p)+y*(+n*l*p-n*c*d+s*o*d-r*o*p+r*c*u-s*l*u)+m*(+n*c*h-n*a*p-s*o*h+i*o*p+s*a*u-i*c*u)+f*(-r*a*u-n*l*h+n*a*d+r*o*h-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],_=e[12],y=e[13],m=e[14],f=e[15],g=h*m*c-y*d*c+y*l*p-a*m*p-h*l*f+a*d*f,v=_*d*c-u*m*c-_*l*p+o*m*p+u*l*f-o*d*f,x=u*y*c-_*h*c+_*a*p-o*y*p-u*a*f+o*h*f,b=_*h*l-u*y*l-_*a*d+o*y*d+u*a*m-o*h*m,A=n*g+i*v+r*x+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return e[0]=g*T,e[1]=(y*d*s-h*m*s-y*r*p+i*m*p+h*r*f-i*d*f)*T,e[2]=(a*m*s-y*l*s+y*r*c-i*m*c-a*r*f+i*l*f)*T,e[3]=(h*l*s-a*d*s-h*r*c+i*d*c+a*r*p-i*l*p)*T,e[4]=v*T,e[5]=(u*m*s-_*d*s+_*r*p-n*m*p-u*r*f+n*d*f)*T,e[6]=(_*l*s-o*m*s-_*r*c+n*m*c+o*r*f-n*l*f)*T,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*p+n*l*p)*T,e[8]=x*T,e[9]=(_*h*s-u*y*s-_*i*p+n*y*p+u*i*f-n*h*f)*T,e[10]=(o*y*s-_*a*s+_*i*c-n*y*c-o*i*f+n*a*f)*T,e[11]=(u*a*s-o*h*s-u*i*c+n*h*c+o*i*p-n*a*p)*T,e[12]=b*T,e[13]=(u*y*r-_*h*r+_*i*d-n*y*d-u*i*m+n*h*m)*T,e[14]=(_*a*r-o*y*r-_*i*l+n*y*l+o*i*m-n*a*m)*T,e[15]=(o*h*r-u*a*r+u*i*l-n*h*l-o*i*d+n*a*d)*T,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,h=a+a,d=s*c,p=s*u,_=s*h,y=o*u,m=o*h,f=a*h,g=l*c,v=l*u,x=l*h,b=i.x,A=i.y,T=i.z;return r[0]=(1-(y+f))*b,r[1]=(p+x)*b,r[2]=(_-v)*b,r[3]=0,r[4]=(p-x)*A,r[5]=(1-(d+f))*A,r[6]=(m+g)*A,r[7]=0,r[8]=(_+v)*T,r[9]=(m-g)*T,r[10]=(1-(d+y))*T,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=jr.set(r[0],r[1],r[2]).length();const o=jr.set(r[4],r[5],r[6]).length(),a=jr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],In.copy(this);const c=1/s,u=1/o,h=1/a;return In.elements[0]*=c,In.elements[1]*=c,In.elements[2]*=c,In.elements[4]*=u,In.elements[5]*=u,In.elements[6]*=u,In.elements[8]*=h,In.elements[9]*=h,In.elements[10]*=h,n.setFromRotationMatrix(In),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=_i){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),d=(i+r)/(i-r);let p,_;if(a===_i)p=-(o+s)/(o-s),_=-2*o*s/(o-s);else if(a===Fl)p=-o/(o-s),_=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=_i){const l=this.elements,c=1/(n-e),u=1/(i-r),h=1/(o-s),d=(n+e)*c,p=(i+r)*u;let _,y;if(a===_i)_=(o+s)*h,y=-2*h;else if(a===Fl)_=s*h,y=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=y,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const jr=new O,In=new yt,DS=new O(0,0,0),NS=new O(1,1,1),Di=new O,Da=new O,fn=new O,Zp=new yt,qp=new Ir;class jn{constructor(e=0,n=0,i=0,r=jn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Vt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Vt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Vt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Vt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Vt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Vt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Zp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Zp,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}jn.DEFAULT_ORDER="XYZ";class X_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let IS=0;const Kp=new O,Xr=new Ir,li=new yt,Na=new O,so=new O,US=new O,OS=new Ir,Qp=new O(1,0,0),Jp=new O(0,1,0),em=new O(0,0,1),tm={type:"added"},FS={type:"removed"},$r={type:"childadded",child:null},Yc={type:"childremoved",child:null};class Gt extends Fr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:IS++}),this.uuid=Ws(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new O,n=new jn,i=new Ir,r=new O(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new yt},normalMatrix:{value:new Oe}}),this.matrix=new yt,this.matrixWorld=new yt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new X_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.multiply(Xr),this}rotateOnWorldAxis(e,n){return Xr.setFromAxisAngle(e,n),this.quaternion.premultiply(Xr),this}rotateX(e){return this.rotateOnAxis(Qp,e)}rotateY(e){return this.rotateOnAxis(Jp,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,n){return Kp.copy(e).applyQuaternion(this.quaternion),this.position.add(Kp.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Qp,e)}translateY(e){return this.translateOnAxis(Jp,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(li.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Na.copy(e):Na.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),so.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?li.lookAt(so,Na,this.up):li.lookAt(Na,so,this.up),this.quaternion.setFromRotationMatrix(li),r&&(li.extractRotation(r.matrixWorld),Xr.setFromRotationMatrix(li),this.quaternion.premultiply(Xr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),$r.child=e,this.dispatchEvent($r),$r.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(FS),Yc.child=e,this.dispatchEvent(Yc),Yc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),li.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),li.multiply(e.parent.matrixWorld)),e.applyMatrix4(li),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),$r.child=e,this.dispatchEvent($r),$r.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,e,US),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(so,OS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),_=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),p.length>0&&(i.animations=p),_.length>0&&(i.nodes=_)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new O(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Un=new O,ci=new O,Zc=new O,ui=new O,Yr=new O,Zr=new O,nm=new O,qc=new O,Kc=new O,Qc=new O,Jc=new xt,eu=new xt,tu=new xt;class zn{constructor(e=new O,n=new O,i=new O){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Un.subVectors(e,n),r.cross(Un);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Un.subVectors(r,n),ci.subVectors(i,n),Zc.subVectors(e,n);const o=Un.dot(Un),a=Un.dot(ci),l=Un.dot(Zc),c=ci.dot(ci),u=ci.dot(Zc),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,_=(o*u-a*l)*d;return s.set(1-p-_,_,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,ui)===null?!1:ui.x>=0&&ui.y>=0&&ui.x+ui.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ui.x),l.addScaledVector(o,ui.y),l.addScaledVector(a,ui.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Jc.setScalar(0),eu.setScalar(0),tu.setScalar(0),Jc.fromBufferAttribute(e,n),eu.fromBufferAttribute(e,i),tu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Jc,s.x),o.addScaledVector(eu,s.y),o.addScaledVector(tu,s.z),o}static isFrontFacing(e,n,i,r){return Un.subVectors(i,n),ci.subVectors(e,n),Un.cross(ci).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Un.subVectors(this.c,this.b),ci.subVectors(this.a,this.b),Un.cross(ci).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return zn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return zn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return zn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return zn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return zn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Yr.subVectors(r,i),Zr.subVectors(s,i),qc.subVectors(e,i);const l=Yr.dot(qc),c=Zr.dot(qc);if(l<=0&&c<=0)return n.copy(i);Kc.subVectors(e,r);const u=Yr.dot(Kc),h=Zr.dot(Kc);if(u>=0&&h<=u)return n.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(Yr,o);Qc.subVectors(e,s);const p=Yr.dot(Qc),_=Zr.dot(Qc);if(_>=0&&p<=_)return n.copy(s);const y=p*c-l*_;if(y<=0&&c>=0&&_<=0)return a=c/(c-_),n.copy(i).addScaledVector(Zr,a);const m=u*_-p*h;if(m<=0&&h-u>=0&&p-_>=0)return nm.subVectors(s,r),a=(h-u)/(h-u+(p-_)),n.copy(r).addScaledVector(nm,a);const f=1/(m+y+d);return o=y*f,a=d*f,n.copy(i).addScaledVector(Yr,o).addScaledVector(Zr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const $_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Ia={h:0,s:0,l:0};function nu(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class je{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=En){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ye.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=Ye.workingColorSpace){return this.r=e,this.g=n,this.b=i,Ye.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=Ye.workingColorSpace){if(e=rh(e,1),n=Vt(n,0,1),i=Vt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=nu(o,s,e+1/3),this.g=nu(o,s,e),this.b=nu(o,s,e-1/3)}return Ye.toWorkingColorSpace(this,r),this}setStyle(e,n=En){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=En){const i=$_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=xi(e.r),this.g=xi(e.g),this.b=xi(e.b),this}copyLinearToSRGB(e){return this.r=As(e.r),this.g=As(e.g),this.b=As(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=En){return Ye.fromWorkingColorSpace(Bt.copy(this),e),Math.round(Vt(Bt.r*255,0,255))*65536+Math.round(Vt(Bt.g*255,0,255))*256+Math.round(Vt(Bt.b*255,0,255))}getHexString(e=En){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Ye.workingColorSpace){Ye.fromWorkingColorSpace(Bt.copy(this),n);const i=Bt.r,r=Bt.g,s=Bt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-i)/h+2;break;case s:l=(i-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=Ye.workingColorSpace){return Ye.fromWorkingColorSpace(Bt.copy(this),n),e.r=Bt.r,e.g=Bt.g,e.b=Bt.b,e}getStyle(e=En){Ye.fromWorkingColorSpace(Bt.copy(this),e);const n=Bt.r,i=Bt.g,r=Bt.b;return e!==En?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Ni),this.setHSL(Ni.h+e,Ni.s+n,Ni.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Ni),e.getHSL(Ia);const i=Co(Ni.h,Ia.h,n),r=Co(Ni.s,Ia.s,n),s=Co(Ni.l,Ia.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Bt=new je;je.NAMES=$_;let kS=0;class js extends Fr{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:kS++}),this.uuid=Ws(),this.name="",this.blending=ws,this.side=tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=pf,this.blendDst=mf,this.blendEquation=gr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new je(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Br,this.stencilZFail=Br,this.stencilZPass=Br,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==ws&&(i.blending=this.blending),this.side!==tr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==pf&&(i.blendSrc=this.blendSrc),this.blendDst!==mf&&(i.blendDst=this.blendDst),this.blendEquation!==gr&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kp&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Br&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Br&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Br&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ra extends js{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new je(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Et=new O,Ua=new De;class ni{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=zp,this.updateRanges=[],this.gpuType=gi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ua.fromBufferAttribute(this,n),Ua.applyMatrix3(e),this.setXY(n,Ua.x,Ua.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix3(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyMatrix4(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.applyNormalMatrix(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Et.fromBufferAttribute(this,n),Et.transformDirection(e),this.setXYZ(n,Et.x,Et.y,Et.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=ns(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ns(n,this.array)),n}setX(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ns(n,this.array)),n}setY(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ns(n,this.array)),n}setZ(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ns(n,this.array)),n}setW(e,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=$t(n,this.array),i=$t(i,this.array),r=$t(r,this.array),s=$t(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==zp&&(e.usage=this.usage),e}}class Y_ extends ni{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Z_ extends ni{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Wt extends ni{constructor(e,n,i){super(new Float32Array(e),n,i)}}let zS=0;const Mn=new yt,iu=new Gt,qr=new O,dn=new ia,oo=new ia,Pt=new O;class ii extends Fr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zS++}),this.uuid=Ws(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(V_(e)?Z_:Y_)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Oe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Mn.makeRotationFromQuaternion(e),this.applyMatrix4(Mn),this}rotateX(e){return Mn.makeRotationX(e),this.applyMatrix4(Mn),this}rotateY(e){return Mn.makeRotationY(e),this.applyMatrix4(Mn),this}rotateZ(e){return Mn.makeRotationZ(e),this.applyMatrix4(Mn),this}translate(e,n,i){return Mn.makeTranslation(e,n,i),this.applyMatrix4(Mn),this}scale(e,n,i){return Mn.makeScale(e,n,i),this.applyMatrix4(Mn),this}lookAt(e){return iu.lookAt(e),iu.updateMatrix(),this.applyMatrix4(iu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qr).negate(),this.translate(qr.x,qr.y,qr.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Wt(i,3))}else{for(let i=0,r=n.count;i<r;i++){const s=e[i];n.setXYZ(i,s.x,s.y,s.z||0)}e.length>n.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ia);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new O(-1/0,-1/0,-1/0),new O(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];dn.setFromBufferAttribute(s),this.morphTargetsRelative?(Pt.addVectors(this.boundingBox.min,dn.min),this.boundingBox.expandByPoint(Pt),Pt.addVectors(this.boundingBox.max,dn.max),this.boundingBox.expandByPoint(Pt)):(this.boundingBox.expandByPoint(dn.min),this.boundingBox.expandByPoint(dn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sh);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new O,1/0);return}if(e){const i=this.boundingSphere.center;if(dn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];oo.setFromBufferAttribute(a),this.morphTargetsRelative?(Pt.addVectors(dn.min,oo.min),dn.expandByPoint(Pt),Pt.addVectors(dn.max,oo.max),dn.expandByPoint(Pt)):(dn.expandByPoint(oo.min),dn.expandByPoint(oo.max))}dn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Pt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Pt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Pt.fromBufferAttribute(a,c),l&&(qr.fromBufferAttribute(e,c),Pt.add(qr)),r=Math.max(r,i.distanceToSquared(Pt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ni(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new O,l[R]=new O;const c=new O,u=new O,h=new O,d=new De,p=new De,_=new De,y=new O,m=new O;function f(R,w,S){c.fromBufferAttribute(i,R),u.fromBufferAttribute(i,w),h.fromBufferAttribute(i,S),d.fromBufferAttribute(s,R),p.fromBufferAttribute(s,w),_.fromBufferAttribute(s,S),u.sub(c),h.sub(c),p.sub(d),_.sub(d);const P=1/(p.x*_.y-_.x*p.y);isFinite(P)&&(y.copy(u).multiplyScalar(_.y).addScaledVector(h,-p.y).multiplyScalar(P),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-_.x).multiplyScalar(P),a[R].add(y),a[w].add(y),a[S].add(y),l[R].add(m),l[w].add(m),l[S].add(m))}let g=this.groups;g.length===0&&(g=[{start:0,count:e.count}]);for(let R=0,w=g.length;R<w;++R){const S=g[R],P=S.start,H=S.count;for(let k=P,W=P+H;k<W;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const v=new O,x=new O,b=new O,A=new O;function T(R){b.fromBufferAttribute(r,R),A.copy(b);const w=a[R];v.copy(w),v.sub(b.multiplyScalar(b.dot(w))).normalize(),x.crossVectors(A,w);const P=x.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,P)}for(let R=0,w=g.length;R<w;++R){const S=g[R],P=S.start,H=S.count;for(let k=P,W=P+H;k<W;k+=3)T(e.getX(k+0)),T(e.getX(k+1)),T(e.getX(k+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new ni(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,p=i.count;d<p;d++)i.setXYZ(d,0,0,0);const r=new O,s=new O,o=new O,a=new O,l=new O,c=new O,u=new O,h=new O;if(e)for(let d=0,p=e.count;d<p;d+=3){const _=e.getX(d+0),y=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,_),s.fromBufferAttribute(n,y),o.fromBufferAttribute(n,m),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),a.fromBufferAttribute(i,_),l.fromBufferAttribute(i,y),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(_,a.x,a.y,a.z),i.setXYZ(y,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=n.count;d<p;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),h.subVectors(r,s),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Pt.fromBufferAttribute(e,n),Pt.normalize(),e.setXYZ(n,Pt.x,Pt.y,Pt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,_=0;for(let y=0,m=l.length;y<m;y++){a.isInterleavedBufferAttribute?p=l[y]*a.data.stride+a.offset:p=l[y]*u;for(let f=0;f<u;f++)d[_++]=c[p++]}return new ni(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new ii,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new yt,cr=new j_,Oa=new sh,rm=new O,Fa=new O,ka=new O,za=new O,ru=new O,Ba=new O,sm=new O,Ha=new O;class sn extends Gt{constructor(e=new ii,n=new ra){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Ba.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],h=s[l];u!==0&&(ru.fromBufferAttribute(h,e),o?Ba.addScaledVector(ru,u):Ba.addScaledVector(ru.sub(n),u))}n.add(Ba)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Oa.copy(i.boundingSphere),Oa.applyMatrix4(s),cr.copy(e.ray).recast(e.near),!(Oa.containsPoint(cr.origin)===!1&&(cr.intersectSphere(Oa,rm)===null||cr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(s).invert(),cr.copy(e.ray).applyMatrix4(im),!(i.boundingBox!==null&&cr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,cr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=v;x<b;x+=3){const A=a.getX(x),T=a.getX(x+1),R=a.getX(x+2);r=Va(this,f,e,i,c,u,h,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(a.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const g=a.getX(m),v=a.getX(m+1),x=a.getX(m+2);r=Va(this,o,e,i,c,u,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,y=d.length;_<y;_++){const m=d[_],f=o[m.materialIndex],g=Math.max(m.start,p.start),v=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let x=g,b=v;x<b;x+=3){const A=x,T=x+1,R=x+2;r=Va(this,f,e,i,c,u,h,A,T,R),r&&(r.faceIndex=Math.floor(x/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const _=Math.max(0,p.start),y=Math.min(l.count,p.start+p.count);for(let m=_,f=y;m<f;m+=3){const g=m,v=m+1,x=m+2;r=Va(this,o,e,i,c,u,h,g,v,x),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function BS(t,e,n,i,r,s,o,a){let l;if(e.side===cn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===tr,a),l===null)return null;Ha.copy(a),Ha.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Ha);return c<n.near||c>n.far?null:{distance:c,point:Ha.clone(),object:t}}function Va(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fa),t.getVertexPosition(l,ka),t.getVertexPosition(c,za);const u=BS(t,e,n,i,Fa,ka,za,sm);if(u){const h=new O;zn.getBarycoord(sm,Fa,ka,za,h),r&&(u.uv=zn.getInterpolatedAttribute(r,a,l,c,h,new De)),s&&(u.uv1=zn.getInterpolatedAttribute(s,a,l,c,h,new De)),o&&(u.normal=zn.getInterpolatedAttribute(o,a,l,c,h,new O),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new O,materialIndex:0};zn.getNormal(Fa,ka,za,d.normal),u.face=d,u.barycoord=h}return u}class sa extends ii{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;_("z","y","x",-1,-1,i,n,e,o,s,0),_("z","y","x",1,-1,i,n,-e,o,s,1),_("x","z","y",1,1,e,i,n,r,o,2),_("x","z","y",1,-1,e,i,-n,r,o,3),_("x","y","z",1,-1,e,n,i,r,s,4),_("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Wt(c,3)),this.setAttribute("normal",new Wt(u,3)),this.setAttribute("uv",new Wt(h,2));function _(y,m,f,g,v,x,b,A,T,R,w){const S=x/T,P=b/R,H=x/2,k=b/2,W=A/2,$=T+1,G=R+1;let Q=0,L=0;const j=new O;for(let Z=0;Z<G;Z++){const se=Z*P-k;for(let Me=0;Me<$;Me++){const qe=Me*S-H;j[y]=qe*g,j[m]=se*v,j[f]=W,c.push(j.x,j.y,j.z),j[y]=0,j[m]=0,j[f]=A>0?1:-1,u.push(j.x,j.y,j.z),h.push(Me/T),h.push(1-Z/R),Q+=1}}for(let Z=0;Z<R;Z++)for(let se=0;se<T;se++){const Me=d+se+$*Z,qe=d+se+$*(Z+1),X=d+(se+1)+$*(Z+1),ne=d+(se+1)+$*Z;l.push(Me,qe,ne),l.push(qe,X,ne),L+=6}a.addGroup(p,L,w),p+=L,d+=Q}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sa(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function zs(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function Yt(t){const e={};for(let n=0;n<t.length;n++){const i=zs(t[n]);for(const r in i)e[r]=i[r]}return e}function HS(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function q_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ye.workingColorSpace}const VS={clone:zs,merge:Yt};var GS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,WS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class nr extends js{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=GS,this.fragmentShader=WS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=zs(e.uniforms),this.uniformsGroups=HS(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class K_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new yt,this.projectionMatrix=new yt,this.projectionMatrixInverse=new yt,this.coordinateSystem=_i}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new O,om=new De,am=new De;class pn extends K_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=$o*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Ao*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $o*2*Math.atan(Math.tan(Ao*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Ii.x,Ii.y).multiplyScalar(-e/Ii.z)}getViewSize(e,n){return this.getViewBounds(e,om,am),n.subVectors(am,om)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Ao*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Kr=-90,Qr=1;class jS extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new pn(Kr,Qr,e,n);r.layers=this.layers,this.add(r);const s=new pn(Kr,Qr,e,n);s.layers=this.layers,this.add(s);const o=new pn(Kr,Qr,e,n);o.layers=this.layers,this.add(o);const a=new pn(Kr,Qr,e,n);a.layers=this.layers,this.add(a);const l=new pn(Kr,Qr,e,n);l.layers=this.layers,this.add(l);const c=new pn(Kr,Qr,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===_i)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Fl)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const y=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=y,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(h,d,p),e.xr.enabled=_,i.texture.needsPMREMUpdate=!0}}class Q_ extends Kt{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:Us,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class XS extends Nr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new Q_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Qn}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new sa(5,5,5),s=new nr({name:"CubemapFromEquirect",uniforms:zs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:cn,blending:Ki});s.uniforms.tEquirect.value=n;const o=new sn(r,s),a=n.minFilter;return n.minFilter===Mr&&(n.minFilter=Qn),new jS(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const su=new O,$S=new O,YS=new Oe;class Fi{constructor(e=new O(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=su.subVectors(i,n).cross($S.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(su),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||YS.getNormalMatrix(e),r=this.coplanarPoint(su).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new sh,Ga=new O;class oh{constructor(e=new Fi,n=new Fi,i=new Fi,r=new Fi,s=new Fi,o=new Fi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=_i){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],p=r[8],_=r[9],y=r[10],m=r[11],f=r[12],g=r[13],v=r[14],x=r[15];if(i[0].setComponents(l-s,d-c,m-p,x-f).normalize(),i[1].setComponents(l+s,d+c,m+p,x+f).normalize(),i[2].setComponents(l+o,d+u,m+_,x+g).normalize(),i[3].setComponents(l-o,d-u,m-_,x-g).normalize(),i[4].setComponents(l-a,d-h,m-y,x-v).normalize(),n===_i)i[5].setComponents(l+a,d+h,m+y,x+v).normalize();else if(n===Fl)i[5].setComponents(a,h,y,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ur.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Ga.x=r.normal.x>0?e.max.x:e.min.x,Ga.y=r.normal.y>0?e.max.y:e.min.y,Ga.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Ga)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function J_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function ZS(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=t.createBuffer();t.bindBuffer(l,d),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(t.bindBuffer(c,a),h.length===0)t.bufferSubData(c,0,u);else{h.sort((p,_)=>p.start-_.start);let d=0;for(let p=1;p<h.length;p++){const _=h[d],y=h[p];y.start<=_.start+_.count+1?_.count=Math.max(_.count,y.start+y.count-_.start):(++d,h[d]=y)}h.length=d+1;for(let p=0,_=h.length;p<_;p++){const y=h[p];t.bufferSubData(c,y.start*u.BYTES_PER_ELEMENT,u,y.start,y.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class cc extends ii{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,h=e/a,d=n/l,p=[],_=[],y=[],m=[];for(let f=0;f<u;f++){const g=f*d-o;for(let v=0;v<c;v++){const x=v*h-s;_.push(x,-g,0),y.push(0,0,1),m.push(v/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let g=0;g<a;g++){const v=g+c*f,x=g+c*(f+1),b=g+1+c*(f+1),A=g+1+c*f;p.push(v,x,A),p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new cc(e.width,e.height,e.widthSegments,e.heightSegments)}}var qS=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,KS=`#ifdef USE_ALPHAHASH
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
#endif`,QS=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,JS=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,eM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,nM=`#ifdef USE_AOMAP
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
#endif`,iM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,rM=`#ifdef USE_BATCHING
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
#endif`,sM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,oM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,aM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,lM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,cM=`#ifdef USE_IRIDESCENCE
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
#endif`,uM=`#ifdef USE_BUMPMAP
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
#endif`,fM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,dM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,pM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,mM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,gM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,_M=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,vM=`#if defined( USE_COLOR_ALPHA )
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
#endif`,xM=`#define PI 3.141592653589793
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
} // validated`,yM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,SM=`vec3 transformedNormal = objectNormal;
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
#endif`,MM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,EM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,wM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,TM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,AM="gl_FragColor = linearToOutputTexel( gl_FragColor );",CM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,RM=`#ifdef USE_ENVMAP
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
#endif`,bM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,PM=`#ifdef USE_ENVMAP
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
#endif`,LM=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,DM=`#ifdef USE_ENVMAP
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
#endif`,NM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,UM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,OM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,FM=`#ifdef USE_GRADIENTMAP
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
}`,kM=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zM=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,HM=`uniform bool receiveShadow;
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
#endif`,VM=`#ifdef USE_ENVMAP
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
#endif`,GM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,WM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,XM=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,$M=`PhysicalMaterial material;
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
#endif`,YM=`struct PhysicalMaterial {
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
}`,ZM=`
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
#endif`,qM=`#if defined( RE_IndirectDiffuse )
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
#endif`,KM=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,QM=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,JM=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,eE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,nE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,iE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,rE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sE=`#if defined( USE_POINTS_UV )
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
#endif`,oE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,aE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,lE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,cE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,uE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fE=`#ifdef USE_MORPHTARGETS
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
#endif`,dE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,pE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,mE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,_E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,vE=`#ifdef USE_NORMALMAP
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
#endif`,xE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,yE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,SE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ME=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,EE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,wE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,TE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,AE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,CE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,RE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,PE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,LE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,DE=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,NE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IE=`float getShadowMask() {
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
}`,UE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,OE=`#ifdef USE_SKINNING
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
#endif`,FE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kE=`#ifdef USE_SKINNING
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
#endif`,zE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,HE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,VE=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,GE=`#ifdef USE_TRANSMISSION
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
#endif`,WE=`#ifdef USE_TRANSMISSION
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
#endif`,jE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,$E=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,YE=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const ZE=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,qE=`uniform sampler2D t2D;
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
}`,KE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,QE=`#ifdef ENVMAP_TYPE_CUBE
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
}`,JE=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ew=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tw=`#include <common>
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
}`,nw=`#if DEPTH_PACKING == 3200
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
}`,iw=`#define DISTANCE
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
}`,rw=`#define DISTANCE
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
}`,sw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ow=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`uniform float scale;
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
}`,lw=`uniform vec3 diffuse;
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
}`,cw=`#include <common>
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
}`,uw=`uniform vec3 diffuse;
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
}`,fw=`#define LAMBERT
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
}`,dw=`#define LAMBERT
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
}`,hw=`#define MATCAP
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
}`,pw=`#define MATCAP
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
}`,mw=`#define NORMAL
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
}`,gw=`#define NORMAL
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
}`,_w=`#define PHONG
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
}`,vw=`#define PHONG
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
}`,xw=`#define STANDARD
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
}`,yw=`#define STANDARD
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
}`,Sw=`#define TOON
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
}`,Mw=`#define TOON
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
}`,Ew=`uniform float size;
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
}`,ww=`uniform vec3 diffuse;
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
}`,Tw=`#include <common>
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
}`,Aw=`uniform vec3 color;
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
}`,Cw=`uniform float rotation;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,ze={alphahash_fragment:qS,alphahash_pars_fragment:KS,alphamap_fragment:QS,alphamap_pars_fragment:JS,alphatest_fragment:eM,alphatest_pars_fragment:tM,aomap_fragment:nM,aomap_pars_fragment:iM,batching_pars_vertex:rM,batching_vertex:sM,begin_vertex:oM,beginnormal_vertex:aM,bsdfs:lM,iridescence_fragment:cM,bumpmap_pars_fragment:uM,clipping_planes_fragment:fM,clipping_planes_pars_fragment:dM,clipping_planes_pars_vertex:hM,clipping_planes_vertex:pM,color_fragment:mM,color_pars_fragment:gM,color_pars_vertex:_M,color_vertex:vM,common:xM,cube_uv_reflection_fragment:yM,defaultnormal_vertex:SM,displacementmap_pars_vertex:MM,displacementmap_vertex:EM,emissivemap_fragment:wM,emissivemap_pars_fragment:TM,colorspace_fragment:AM,colorspace_pars_fragment:CM,envmap_fragment:RM,envmap_common_pars_fragment:bM,envmap_pars_fragment:PM,envmap_pars_vertex:LM,envmap_physical_pars_fragment:VM,envmap_vertex:DM,fog_vertex:NM,fog_pars_vertex:IM,fog_fragment:UM,fog_pars_fragment:OM,gradientmap_pars_fragment:FM,lightmap_pars_fragment:kM,lights_lambert_fragment:zM,lights_lambert_pars_fragment:BM,lights_pars_begin:HM,lights_toon_fragment:GM,lights_toon_pars_fragment:WM,lights_phong_fragment:jM,lights_phong_pars_fragment:XM,lights_physical_fragment:$M,lights_physical_pars_fragment:YM,lights_fragment_begin:ZM,lights_fragment_maps:qM,lights_fragment_end:KM,logdepthbuf_fragment:QM,logdepthbuf_pars_fragment:JM,logdepthbuf_pars_vertex:eE,logdepthbuf_vertex:tE,map_fragment:nE,map_pars_fragment:iE,map_particle_fragment:rE,map_particle_pars_fragment:sE,metalnessmap_fragment:oE,metalnessmap_pars_fragment:aE,morphinstance_vertex:lE,morphcolor_vertex:cE,morphnormal_vertex:uE,morphtarget_pars_vertex:fE,morphtarget_vertex:dE,normal_fragment_begin:hE,normal_fragment_maps:pE,normal_pars_fragment:mE,normal_pars_vertex:gE,normal_vertex:_E,normalmap_pars_fragment:vE,clearcoat_normal_fragment_begin:xE,clearcoat_normal_fragment_maps:yE,clearcoat_pars_fragment:SE,iridescence_pars_fragment:ME,opaque_fragment:EE,packing:wE,premultiplied_alpha_fragment:TE,project_vertex:AE,dithering_fragment:CE,dithering_pars_fragment:RE,roughnessmap_fragment:bE,roughnessmap_pars_fragment:PE,shadowmap_pars_fragment:LE,shadowmap_pars_vertex:DE,shadowmap_vertex:NE,shadowmask_pars_fragment:IE,skinbase_vertex:UE,skinning_pars_vertex:OE,skinning_vertex:FE,skinnormal_vertex:kE,specularmap_fragment:zE,specularmap_pars_fragment:BE,tonemapping_fragment:HE,tonemapping_pars_fragment:VE,transmission_fragment:GE,transmission_pars_fragment:WE,uv_pars_fragment:jE,uv_pars_vertex:XE,uv_vertex:$E,worldpos_vertex:YE,background_vert:ZE,background_frag:qE,backgroundCube_vert:KE,backgroundCube_frag:QE,cube_vert:JE,cube_frag:ew,depth_vert:tw,depth_frag:nw,distanceRGBA_vert:iw,distanceRGBA_frag:rw,equirect_vert:sw,equirect_frag:ow,linedashed_vert:aw,linedashed_frag:lw,meshbasic_vert:cw,meshbasic_frag:uw,meshlambert_vert:fw,meshlambert_frag:dw,meshmatcap_vert:hw,meshmatcap_frag:pw,meshnormal_vert:mw,meshnormal_frag:gw,meshphong_vert:_w,meshphong_frag:vw,meshphysical_vert:xw,meshphysical_frag:yw,meshtoon_vert:Sw,meshtoon_frag:Mw,points_vert:Ew,points_frag:ww,shadow_vert:Tw,shadow_frag:Aw,sprite_vert:Cw,sprite_frag:Rw},ae={common:{diffuse:{value:new je(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Oe}},envmap:{envMap:{value:null},envMapRotation:{value:new Oe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Oe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Oe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Oe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Oe},normalScale:{value:new De(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Oe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Oe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Oe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Oe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new je(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new je(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0},uvTransform:{value:new Oe}},sprite:{diffuse:{value:new je(16777215)},opacity:{value:1},center:{value:new De(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Oe},alphaMap:{value:null},alphaMapTransform:{value:new Oe},alphaTest:{value:0}}},Zn={basic:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.fog]),vertexShader:ze.meshbasic_vert,fragmentShader:ze.meshbasic_frag},lambert:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:ze.meshlambert_vert,fragmentShader:ze.meshlambert_frag},phong:{uniforms:Yt([ae.common,ae.specularmap,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,ae.lights,{emissive:{value:new je(0)},specular:{value:new je(1118481)},shininess:{value:30}}]),vertexShader:ze.meshphong_vert,fragmentShader:ze.meshphong_frag},standard:{uniforms:Yt([ae.common,ae.envmap,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.roughnessmap,ae.metalnessmap,ae.fog,ae.lights,{emissive:{value:new je(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag},toon:{uniforms:Yt([ae.common,ae.aomap,ae.lightmap,ae.emissivemap,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.gradientmap,ae.fog,ae.lights,{emissive:{value:new je(0)}}]),vertexShader:ze.meshtoon_vert,fragmentShader:ze.meshtoon_frag},matcap:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,ae.fog,{matcap:{value:null}}]),vertexShader:ze.meshmatcap_vert,fragmentShader:ze.meshmatcap_frag},points:{uniforms:Yt([ae.points,ae.fog]),vertexShader:ze.points_vert,fragmentShader:ze.points_frag},dashed:{uniforms:Yt([ae.common,ae.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ze.linedashed_vert,fragmentShader:ze.linedashed_frag},depth:{uniforms:Yt([ae.common,ae.displacementmap]),vertexShader:ze.depth_vert,fragmentShader:ze.depth_frag},normal:{uniforms:Yt([ae.common,ae.bumpmap,ae.normalmap,ae.displacementmap,{opacity:{value:1}}]),vertexShader:ze.meshnormal_vert,fragmentShader:ze.meshnormal_frag},sprite:{uniforms:Yt([ae.sprite,ae.fog]),vertexShader:ze.sprite_vert,fragmentShader:ze.sprite_frag},background:{uniforms:{uvTransform:{value:new Oe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ze.background_vert,fragmentShader:ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Oe}},vertexShader:ze.backgroundCube_vert,fragmentShader:ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ze.cube_vert,fragmentShader:ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ze.equirect_vert,fragmentShader:ze.equirect_frag},distanceRGBA:{uniforms:Yt([ae.common,ae.displacementmap,{referencePosition:{value:new O},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ze.distanceRGBA_vert,fragmentShader:ze.distanceRGBA_frag},shadow:{uniforms:Yt([ae.lights,ae.fog,{color:{value:new je(0)},opacity:{value:1}}]),vertexShader:ze.shadow_vert,fragmentShader:ze.shadow_frag}};Zn.physical={uniforms:Yt([Zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Oe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Oe},clearcoatNormalScale:{value:new De(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Oe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Oe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Oe},sheen:{value:0},sheenColor:{value:new je(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Oe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Oe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Oe},transmissionSamplerSize:{value:new De},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Oe},attenuationDistance:{value:0},attenuationColor:{value:new je(0)},specularColor:{value:new je(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Oe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Oe},anisotropyVector:{value:new De},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Oe}}]),vertexShader:ze.meshphysical_vert,fragmentShader:ze.meshphysical_frag};const Wa={r:0,b:0,g:0},fr=new jn,bw=new yt;function Pw(t,e,n,i,r,s,o){const a=new je(0);let l=s===!0?0:1,c,u,h=null,d=0,p=null;function _(g){let v=g.isScene===!0?g.background:null;return v&&v.isTexture&&(v=(g.backgroundBlurriness>0?n:e).get(v)),v}function y(g){let v=!1;const x=_(g);x===null?f(a,l):x&&x.isColor&&(f(x,1),v=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||v)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(g,v){const x=_(v);x&&(x.isCubeTexture||x.mapping===ac)?(u===void 0&&(u=new sn(new sa(1,1,1),new nr({name:"BackgroundCubeMaterial",uniforms:zs(Zn.backgroundCube.uniforms),vertexShader:Zn.backgroundCube.vertexShader,fragmentShader:Zn.backgroundCube.fragmentShader,side:cn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),fr.copy(v.backgroundRotation),fr.x*=-1,fr.y*=-1,fr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(fr.y*=-1,fr.z*=-1),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(bw.makeRotationFromEuler(fr)),u.material.toneMapped=Ye.getTransfer(x.colorSpace)!==nt,(h!==x||d!==x.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),u.layers.enableAll(),g.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new sn(new cc(2,2),new nr({name:"BackgroundMaterial",uniforms:zs(Zn.background.uniforms),vertexShader:Zn.background.vertexShader,fragmentShader:Zn.background.fragmentShader,side:tr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Ye.getTransfer(x.colorSpace)!==nt,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||d!==x.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,h=x,d=x.version,p=t.toneMapping),c.layers.enableAll(),g.unshift(c,c.geometry,c.material,0,0,null))}function f(g,v){g.getRGB(Wa,q_(t)),i.buffers.color.setClear(Wa.r,Wa.g,Wa.b,v,o)}return{getClearColor:function(){return a},setClearColor:function(g,v=1){a.set(g),l=v,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(g){l=g,f(a,l)},render:y,addToRenderList:m}}function Lw(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=d(null);let s=r,o=!1;function a(S,P,H,k,W){let $=!1;const G=h(k,H,P);s!==G&&(s=G,c(s.object)),$=p(S,k,H,W),$&&_(S,k,H,W),W!==null&&e.update(W,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,x(S,P,H,k),W!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return t.createVertexArray()}function c(S){return t.bindVertexArray(S)}function u(S){return t.deleteVertexArray(S)}function h(S,P,H){const k=H.wireframe===!0;let W=i[S.id];W===void 0&&(W={},i[S.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let G=$[k];return G===void 0&&(G=d(l()),$[k]=G),G}function d(S){const P=[],H=[],k=[];for(let W=0;W<n;W++)P[W]=0,H[W]=0,k[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:k,object:S,attributes:{},index:null}}function p(S,P,H,k){const W=s.attributes,$=P.attributes;let G=0;const Q=H.getAttributes();for(const L in Q)if(Q[L].location>=0){const Z=W[L];let se=$[L];if(se===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(se=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(se=S.instanceColor)),Z===void 0||Z.attribute!==se||se&&Z.data!==se.data)return!0;G++}return s.attributesNum!==G||s.index!==k}function _(S,P,H,k){const W={},$=P.attributes;let G=0;const Q=H.getAttributes();for(const L in Q)if(Q[L].location>=0){let Z=$[L];Z===void 0&&(L==="instanceMatrix"&&S.instanceMatrix&&(Z=S.instanceMatrix),L==="instanceColor"&&S.instanceColor&&(Z=S.instanceColor));const se={};se.attribute=Z,Z&&Z.data&&(se.data=Z.data),W[L]=se,G++}s.attributes=W,s.attributesNum=G,s.index=k}function y(){const S=s.newAttributes;for(let P=0,H=S.length;P<H;P++)S[P]=0}function m(S){f(S,0)}function f(S,P){const H=s.newAttributes,k=s.enabledAttributes,W=s.attributeDivisors;H[S]=1,k[S]===0&&(t.enableVertexAttribArray(S),k[S]=1),W[S]!==P&&(t.vertexAttribDivisor(S,P),W[S]=P)}function g(){const S=s.newAttributes,P=s.enabledAttributes;for(let H=0,k=P.length;H<k;H++)P[H]!==S[H]&&(t.disableVertexAttribArray(H),P[H]=0)}function v(S,P,H,k,W,$,G){G===!0?t.vertexAttribIPointer(S,P,H,W,$):t.vertexAttribPointer(S,P,H,k,W,$)}function x(S,P,H,k){y();const W=k.attributes,$=H.getAttributes(),G=P.defaultAttributeValues;for(const Q in $){const L=$[Q];if(L.location>=0){let j=W[Q];if(j===void 0&&(Q==="instanceMatrix"&&S.instanceMatrix&&(j=S.instanceMatrix),Q==="instanceColor"&&S.instanceColor&&(j=S.instanceColor)),j!==void 0){const Z=j.normalized,se=j.itemSize,Me=e.get(j);if(Me===void 0)continue;const qe=Me.buffer,X=Me.type,ne=Me.bytesPerElement,pe=X===t.INT||X===t.UNSIGNED_INT||j.gpuType===Kd;if(j.isInterleavedBufferAttribute){const oe=j.data,Re=oe.stride,Ne=j.offset;if(oe.isInstancedInterleavedBuffer){for(let Be=0;Be<L.locationSize;Be++)f(L.location+Be,oe.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let Be=0;Be<L.locationSize;Be++)m(L.location+Be);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let Be=0;Be<L.locationSize;Be++)v(L.location+Be,se/L.locationSize,X,Z,Re*ne,(Ne+se/L.locationSize*Be)*ne,pe)}else{if(j.isInstancedBufferAttribute){for(let oe=0;oe<L.locationSize;oe++)f(L.location+oe,j.meshPerAttribute);S.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let oe=0;oe<L.locationSize;oe++)m(L.location+oe);t.bindBuffer(t.ARRAY_BUFFER,qe);for(let oe=0;oe<L.locationSize;oe++)v(L.location+oe,se/L.locationSize,X,Z,se*ne,se/L.locationSize*oe*ne,pe)}}else if(G!==void 0){const Z=G[Q];if(Z!==void 0)switch(Z.length){case 2:t.vertexAttrib2fv(L.location,Z);break;case 3:t.vertexAttrib3fv(L.location,Z);break;case 4:t.vertexAttrib4fv(L.location,Z);break;default:t.vertexAttrib1fv(L.location,Z)}}}}g()}function b(){R();for(const S in i){const P=i[S];for(const H in P){const k=P[H];for(const W in k)u(k[W].object),delete k[W];delete P[H]}delete i[S]}}function A(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const H in P){const k=P[H];for(const W in k)u(k[W].object),delete k[W];delete P[H]}delete i[S.id]}function T(S){for(const P in i){const H=i[P];if(H[S.id]===void 0)continue;const k=H[S.id];for(const W in k)u(k[W].object),delete k[W];delete H[S.id]}}function R(){w(),o=!0,s!==r&&(s=r,c(s.object))}function w(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:w,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:y,enableAttribute:m,disableUnusedAttributes:g}}function Dw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,h){h!==0&&(t.drawArraysInstanced(i,c,u,h),n.update(u,i,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let p=0;for(let _=0;_<h;_++)p+=u[_];n.update(p,i,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let _=0;_<c.length;_++)o(c[_],u[_],d[_]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let _=0;for(let y=0;y<h;y++)_+=u[y]*d[y];n.update(_,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Nw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(T){return!(T!==Bn&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===na&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==wi&&i.convert(T)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==gi&&!R)}function l(T){if(T==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=n.logarithmicDepthBuffer===!0,d=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),_=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),y=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),f=t.getParameter(t.MAX_VERTEX_ATTRIBS),g=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),v=t.getParameter(t.MAX_VARYING_VECTORS),x=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=_>0,A=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:_,maxTextureSize:y,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:g,maxVaryings:v,maxFragmentUniforms:x,vertexTextures:b,maxSamples:A}}function Iw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Fi,a=new Oe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||i!==0||r;return r=d,i=h.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){n=u(h,d,0)},this.setState=function(h,d,p){const _=h.clippingPlanes,y=h.clipIntersection,m=h.clipShadows,f=t.get(h);if(!r||_===null||_.length===0||s&&!m)s?u(null):c();else{const g=s?0:i,v=g*4;let x=f.clippingState||null;l.value=x,x=u(_,d,v,p);for(let b=0;b!==v;++b)x[b]=n[b];f.clippingState=x,this.numIntersection=y?this.numPlanes:0,this.numPlanes+=g}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(h,d,p,_){const y=h!==null?h.length:0;let m=null;if(y!==0){if(m=l.value,_!==!0||m===null){const f=p+y*4,g=d.matrixWorldInverse;a.getNormalMatrix(g),(m===null||m.length<f)&&(m=new Float32Array(f));for(let v=0,x=p;v!==y;++v,x+=4)o.copy(h[v]).applyMatrix4(g,a),o.normal.toArray(m,x),m[x+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=y,e.numIntersection=0,m}}function Uw(t){let e=new WeakMap;function n(o,a){return a===Ef?o.mapping=Us:a===wf&&(o.mapping=Os),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ef||a===wf)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new XS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class ev extends K_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const gs=4,lm=[.125,.215,.35,.446,.526,.582],_r=20,ou=new ev,cm=new je;let au=null,lu=0,cu=0,uu=!1;const mr=(1+Math.sqrt(5))/2,Jr=1/mr,um=[new O(-mr,Jr,0),new O(mr,Jr,0),new O(-Jr,0,mr),new O(Jr,0,mr),new O(0,mr,-Jr),new O(0,mr,Jr),new O(-1,1,-1),new O(1,1,-1),new O(-1,1,1),new O(1,1,1)];class fm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=hm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(au,lu,cu),this._renderer.xr.enabled=uu,e.scissorTest=!1,ja(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===Us||e.mapping===Os?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),au=this._renderer.getRenderTarget(),lu=this._renderer.getActiveCubeFace(),cu=this._renderer.getActiveMipmapLevel(),uu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Qn,minFilter:Qn,generateMipmaps:!1,type:na,format:Bn,colorSpace:Gs,depthBuffer:!1},r=dm(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=dm(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ow(s)),this._blurMaterial=Fw(s,e,n)}return r}_compileMaterial(e){const n=new sn(this._lodPlanes[0],e);this._renderer.compile(n,ou)}_sceneToCubeUV(e,n,i,r){const a=new pn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cm),u.toneMapping=Qi,u.autoClear=!1;const p=new ra({name:"PMREM.Background",side:cn,depthWrite:!1,depthTest:!1}),_=new sn(new sa,p);let y=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,y=!0):(p.color.copy(cm),y=!0);for(let f=0;f<6;f++){const g=f%3;g===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):g===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const v=this._cubeSize;ja(r,g*v,f>2?v:0,v,v),u.setRenderTarget(r),y&&u.render(_,a),u.render(e,a)}_.geometry.dispose(),_.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===Us||e.mapping===Os;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=pm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=hm());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new sn(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;ja(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ou)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=um[(r-s-1)%um.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new sn(this._lodPlanes[r],c),d=c.uniforms,p=this._sizeLods[i]-1,_=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*_r-1),y=s/_,m=isFinite(s)?1+Math.floor(u*y):_r;m>_r&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${_r}`);const f=[];let g=0;for(let T=0;T<_r;++T){const R=T/y,w=Math.exp(-R*R/2);f.push(w),T===0?g+=w:T<m&&(g+=2*w)}for(let T=0;T<f.length;T++)f[T]=f[T]/g;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:v}=this;d.dTheta.value=_,d.mipInt.value=v-i;const x=this._sizeLods[r],b=3*x*(r>v-gs?r-v+gs:0),A=4*(this._cubeSize-x);ja(n,b,A,3*x,2*x),l.setRenderTarget(n),l.render(h,ou)}}function Ow(t){const e=[],n=[],i=[];let r=t;const s=t-gs+1+lm.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-gs?l=lm[o-t+gs-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,_=6,y=3,m=2,f=1,g=new Float32Array(y*_*p),v=new Float32Array(m*_*p),x=new Float32Array(f*_*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,w=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];g.set(w,y*_*A),v.set(d,m*_*A);const S=[A,A,A,A,A,A];x.set(S,f*_*A)}const b=new ii;b.setAttribute("position",new ni(g,y)),b.setAttribute("uv",new ni(v,m)),b.setAttribute("faceIndex",new ni(x,f)),e.push(b),r>gs&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function dm(t,e,n){const i=new Nr(t,e,n);return i.texture.mapping=ac,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function ja(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Fw(t,e,n){const i=new Float32Array(_r),r=new O(0,1,0);return new nr({name:"SphericalGaussianBlur",defines:{n:_r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function hm(){return new nr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ah(),fragmentShader:`

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
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function pm(){return new nr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ki,depthTest:!1,depthWrite:!1})}function ah(){return`

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
	`}function kw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ef||l===wf,u=l===Us||l===Os;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return n===null&&(n=new fm(t)),h=c?n.fromEquirectangular(a,h):n.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new fm(t)),h=c?n.fromEquirectangular(a):n.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function zw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&mo("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Bw(t,e,n,i){const r={},s=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const y=d.morphAttributes[_];for(let m=0,f=y.length;m<f;m++)e.remove(y[m])}d.removeEventListener("dispose",o),delete r[d.id];const p=s.get(d);p&&(e.remove(p),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(h,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(h){const d=h.attributes;for(const _ in d)e.update(d[_],t.ARRAY_BUFFER);const p=h.morphAttributes;for(const _ in p){const y=p[_];for(let m=0,f=y.length;m<f;m++)e.update(y[m],t.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,_=h.attributes.position;let y=0;if(p!==null){const g=p.array;y=p.version;for(let v=0,x=g.length;v<x;v+=3){const b=g[v+0],A=g[v+1],T=g[v+2];d.push(b,A,A,T,T,b)}}else if(_!==void 0){const g=_.array;y=_.version;for(let v=0,x=g.length/3-1;v<x;v+=3){const b=v+0,A=v+1,T=v+2;d.push(b,A,A,T,T,b)}}else return;const m=new(V_(d)?Z_:Y_)(d,1);m.version=y;const f=s.get(h);f&&e.remove(f),s.set(h,m)}function u(h){const d=s.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function Hw(t,e,n){let i;function r(d){i=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,p){t.drawElements(i,p,s,d*o),n.update(p,i,1)}function c(d,p,_){_!==0&&(t.drawElementsInstanced(i,p,s,d*o,_),n.update(p,i,_))}function u(d,p,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,d,0,_);let m=0;for(let f=0;f<_;f++)m+=p[f];n.update(m,i,1)}function h(d,p,_,y){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],y[f]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,d,0,y,0,_);let f=0;for(let g=0;g<_;g++)f+=p[g]*y[g];n.update(f,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function Vw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function Gw(t,e,n){const i=new WeakMap,r=new xt;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let S=function(){R.dispose(),i.delete(a),a.removeEventListener("dispose",S)};var p=S;d!==void 0&&d.texture.dispose();const _=a.morphAttributes.position!==void 0,y=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let x=0;_===!0&&(x=1),y===!0&&(x=2),m===!0&&(x=3);let b=a.attributes.position.count*x,A=1;b>e.maxTextureSize&&(A=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const T=new Float32Array(b*A*4*h),R=new W_(T,b,A,h);R.type=gi,R.needsUpdate=!0;const w=x*4;for(let P=0;P<h;P++){const H=f[P],k=g[P],W=v[P],$=b*A*4*P;for(let G=0;G<H.count;G++){const Q=G*w;_===!0&&(r.fromBufferAttribute(H,G),T[$+Q+0]=r.x,T[$+Q+1]=r.y,T[$+Q+2]=r.z,T[$+Q+3]=0),y===!0&&(r.fromBufferAttribute(k,G),T[$+Q+4]=r.x,T[$+Q+5]=r.y,T[$+Q+6]=r.z,T[$+Q+7]=0),m===!0&&(r.fromBufferAttribute(W,G),T[$+Q+8]=r.x,T[$+Q+9]=r.y,T[$+Q+10]=r.z,T[$+Q+11]=W.itemSize===4?r.w:1)}}d={count:h,texture:R,size:new De(b,A)},i.set(a,d),a.addEventListener("dispose",S)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let _=0;for(let m=0;m<c.length;m++)_+=c[m];const y=a.morphTargetsRelative?1:1-_;l.getUniforms().setValue(t,"morphTargetBaseInfluence",y),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:s}}function Ww(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class tv extends Kt{constructor(e,n,i,r,s,o,a,l,c,u=Ts){if(u!==Ts&&u!==ks)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===Ts&&(i=Dr),i===void 0&&u===ks&&(i=Fs),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const nv=new Kt,mm=new tv(1,1),iv=new W_,rv=new PS,sv=new Q_,gm=[],_m=[],vm=new Float32Array(16),xm=new Float32Array(9),ym=new Float32Array(4);function Xs(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=gm[r];if(s===void 0&&(s=new Float32Array(r),gm[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Rt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function bt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function uc(t,e){let n=_m[e];n===void 0&&(n=new Int32Array(e),_m[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Xw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2fv(this.addr,e),bt(n,e)}}function $w(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Rt(n,e))return;t.uniform3fv(this.addr,e),bt(n,e)}}function Yw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4fv(this.addr,e),bt(n,e)}}function Zw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;ym.set(i),t.uniformMatrix2fv(this.addr,!1,ym),bt(n,i)}}function qw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;xm.set(i),t.uniformMatrix3fv(this.addr,!1,xm),bt(n,i)}}function Kw(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Rt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),bt(n,e)}else{if(Rt(n,i))return;vm.set(i),t.uniformMatrix4fv(this.addr,!1,vm),bt(n,i)}}function Qw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function Jw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2iv(this.addr,e),bt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3iv(this.addr,e),bt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4iv(this.addr,e),bt(n,e)}}function nT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function iT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Rt(n,e))return;t.uniform2uiv(this.addr,e),bt(n,e)}}function rT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Rt(n,e))return;t.uniform3uiv(this.addr,e),bt(n,e)}}function sT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Rt(n,e))return;t.uniform4uiv(this.addr,e),bt(n,e)}}function oT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(mm.compareFunction=H_,s=mm):s=nv,n.setTexture2D(e||s,r)}function aT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||rv,r)}function lT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||sv,r)}function cT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||iv,r)}function uT(t){switch(t){case 5126:return jw;case 35664:return Xw;case 35665:return $w;case 35666:return Yw;case 35674:return Zw;case 35675:return qw;case 35676:return Kw;case 5124:case 35670:return Qw;case 35667:case 35671:return Jw;case 35668:case 35672:return eT;case 35669:case 35673:return tT;case 5125:return nT;case 36294:return iT;case 36295:return rT;case 36296:return sT;case 35678:case 36198:case 36298:case 36306:case 35682:return oT;case 35679:case 36299:case 36307:return aT;case 35680:case 36300:case 36308:case 36293:return lT;case 36289:case 36303:case 36311:case 36292:return cT}}function fT(t,e){t.uniform1fv(this.addr,e)}function dT(t,e){const n=Xs(e,this.size,2);t.uniform2fv(this.addr,n)}function hT(t,e){const n=Xs(e,this.size,3);t.uniform3fv(this.addr,n)}function pT(t,e){const n=Xs(e,this.size,4);t.uniform4fv(this.addr,n)}function mT(t,e){const n=Xs(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function gT(t,e){const n=Xs(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function _T(t,e){const n=Xs(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function vT(t,e){t.uniform1iv(this.addr,e)}function xT(t,e){t.uniform2iv(this.addr,e)}function yT(t,e){t.uniform3iv(this.addr,e)}function ST(t,e){t.uniform4iv(this.addr,e)}function MT(t,e){t.uniform1uiv(this.addr,e)}function ET(t,e){t.uniform2uiv(this.addr,e)}function wT(t,e){t.uniform3uiv(this.addr,e)}function TT(t,e){t.uniform4uiv(this.addr,e)}function AT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||nv,s[o])}function CT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||rv,s[o])}function RT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||sv,s[o])}function bT(t,e,n){const i=this.cache,r=e.length,s=uc(n,r);Rt(i,s)||(t.uniform1iv(this.addr,s),bt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||iv,s[o])}function PT(t){switch(t){case 5126:return fT;case 35664:return dT;case 35665:return hT;case 35666:return pT;case 35674:return mT;case 35675:return gT;case 35676:return _T;case 5124:case 35670:return vT;case 35667:case 35671:return xT;case 35668:case 35672:return yT;case 35669:case 35673:return ST;case 5125:return MT;case 36294:return ET;case 36295:return wT;case 36296:return TT;case 35678:case 36198:case 36298:case 36306:case 35682:return AT;case 35679:case 36299:case 36307:return CT;case 35680:case 36300:case 36308:case 36293:return RT;case 36289:case 36303:case 36311:case 36292:return bT}}class LT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=uT(n.type)}}class DT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=PT(n.type)}}class NT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const fu=/(\w+)(\])?(\[|\.)?/g;function Sm(t,e){t.seq.push(e),t.map[e.id]=e}function IT(t,e,n){const i=t.name,r=i.length;for(fu.lastIndex=0;;){const s=fu.exec(i),o=fu.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){Sm(n,c===void 0?new LT(a,t,e):new DT(a,t,e));break}else{let h=n.map[a];h===void 0&&(h=new NT(a),Sm(n,h)),n=h}}}class dl{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);IT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function Mm(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const UT=37297;let OT=0;function FT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const Em=new Oe;function kT(t){Ye._getMatrix(Em,Ye.workingColorSpace,t);const e=`mat3( ${Em.elements.map(n=>n.toFixed(4))} )`;switch(Ye.getTransfer(t)){case lc:return[e,"LinearTransferOETF"];case nt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function wm(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+FT(t.getShaderSource(e),o)}else return r}function zT(t,e){const n=kT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}function BT(t,e){let n;switch(e){case H1:n="Linear";break;case V1:n="Reinhard";break;case G1:n="Cineon";break;case W1:n="ACESFilmic";break;case X1:n="AgX";break;case $1:n="Neutral";break;case j1:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Xa=new O;function HT(){Ye.getLuminanceCoefficients(Xa);const t=Xa.x.toFixed(4),e=Xa.y.toFixed(4),n=Xa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function VT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(go).join(`
`)}function GT(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function WT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function go(t){return t!==""}function Tm(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Am(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const jT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jf(t){return t.replace(jT,$T)}const XT=new Map;function $T(t,e){let n=ze[e];if(n===void 0){const i=XT.get(e);if(i!==void 0)n=ze[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Jf(n)}const YT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Cm(t){return t.replace(YT,ZT)}function ZT(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Rm(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function qT(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===b_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===y1?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===fi&&(e="SHADOWMAP_TYPE_VSM"),e}function KT(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case Us:case Os:e="ENVMAP_TYPE_CUBE";break;case ac:e="ENVMAP_TYPE_CUBE_UV";break}return e}function QT(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case Os:e="ENVMAP_MODE_REFRACTION";break}return e}function JT(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case qd:e="ENVMAP_BLENDING_MULTIPLY";break;case z1:e="ENVMAP_BLENDING_MIX";break;case B1:e="ENVMAP_BLENDING_ADD";break}return e}function eA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function tA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=qT(n),c=KT(n),u=QT(n),h=JT(n),d=eA(n),p=VT(n),_=GT(s),y=r.createProgram();let m,f,g=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(go).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_].filter(go).join(`
`),f.length>0&&(f+=`
`)):(m=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(go).join(`
`),f=[Rm(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,_,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Qi?"#define TONE_MAPPING":"",n.toneMapping!==Qi?ze.tonemapping_pars_fragment:"",n.toneMapping!==Qi?BT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",ze.colorspace_pars_fragment,zT("linearToOutputTexel",n.outputColorSpace),HT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(go).join(`
`)),o=Jf(o),o=Tm(o,n),o=Am(o,n),a=Jf(a),a=Tm(a,n),a=Am(a,n),o=Cm(o),a=Cm(a),n.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",n.glslVersion===Bp?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Bp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const v=g+m+o,x=g+f+a,b=Mm(r,r.VERTEX_SHADER,v),A=Mm(r,r.FRAGMENT_SHADER,x);r.attachShader(y,b),r.attachShader(y,A),n.index0AttributeName!==void 0?r.bindAttribLocation(y,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(y,0,"position"),r.linkProgram(y);function T(P){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(y).trim(),k=r.getShaderInfoLog(b).trim(),W=r.getShaderInfoLog(A).trim();let $=!0,G=!0;if(r.getProgramParameter(y,r.LINK_STATUS)===!1)if($=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,y,b,A);else{const Q=wm(r,b,"vertex"),L=wm(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(y,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+Q+`
`+L)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(k===""||W==="")&&(G=!1);G&&(P.diagnostics={runnable:$,programLog:H,vertexShader:{log:k,prefix:m},fragmentShader:{log:W,prefix:f}})}r.deleteShader(b),r.deleteShader(A),R=new dl(r,y),w=WT(r,y)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let w;this.getAttributes=function(){return w===void 0&&T(this),w};let S=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=r.getProgramParameter(y,UT)),S},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(y),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=OT++,this.cacheKey=e,this.usedTimes=1,this.program=y,this.vertexShader=b,this.fragmentShader=A,this}let nA=0;class iA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new rA(e),n.set(e,i)),i}}class rA{constructor(e){this.id=nA++,this.code=e,this.usedTimes=0}}function sA(t,e,n,i,r,s,o){const a=new X_,l=new iA,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let p=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function y(w){return c.add(w),w===0?"uv":`uv${w}`}function m(w,S,P,H,k){const W=H.fog,$=k.geometry,G=w.isMeshStandardMaterial?H.environment:null,Q=(w.isMeshStandardMaterial?n:e).get(w.envMap||G),L=Q&&Q.mapping===ac?Q.image.height:null,j=_[w.type];w.precision!==null&&(p=r.getMaxPrecision(w.precision),p!==w.precision&&console.warn("THREE.WebGLProgram.getParameters:",w.precision,"not supported, using",p,"instead."));const Z=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,se=Z!==void 0?Z.length:0;let Me=0;$.morphAttributes.position!==void 0&&(Me=1),$.morphAttributes.normal!==void 0&&(Me=2),$.morphAttributes.color!==void 0&&(Me=3);let qe,X,ne,pe;if(j){const et=Zn[j];qe=et.vertexShader,X=et.fragmentShader}else qe=w.vertexShader,X=w.fragmentShader,l.update(w),ne=l.getVertexShaderID(w),pe=l.getFragmentShaderID(w);const oe=t.getRenderTarget(),Re=t.state.buffers.depth.getReversed(),Ne=k.isInstancedMesh===!0,Be=k.isBatchedMesh===!0,ht=!!w.map,Xe=!!w.matcap,St=!!Q,U=!!w.aoMap,yn=!!w.lightMap,Ve=!!w.bumpMap,Ge=!!w.normalMap,Ae=!!w.displacementMap,at=!!w.emissiveMap,Te=!!w.metalnessMap,C=!!w.roughnessMap,M=w.anisotropy>0,F=w.clearcoat>0,q=w.dispersion>0,J=w.iridescence>0,Y=w.sheen>0,Ee=w.transmission>0,ce=M&&!!w.anisotropyMap,me=F&&!!w.clearcoatMap,$e=F&&!!w.clearcoatNormalMap,ie=F&&!!w.clearcoatRoughnessMap,ge=J&&!!w.iridescenceMap,Ce=J&&!!w.iridescenceThicknessMap,be=Y&&!!w.sheenColorMap,_e=Y&&!!w.sheenRoughnessMap,We=!!w.specularMap,ke=!!w.specularColorMap,rt=!!w.specularIntensityMap,D=Ee&&!!w.transmissionMap,le=Ee&&!!w.thicknessMap,V=!!w.gradientMap,K=!!w.alphaMap,de=w.alphaTest>0,ue=!!w.alphaHash,Ie=!!w.extensions;let _t=Qi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(_t=t.toneMapping);const Ot={shaderID:j,shaderType:w.type,shaderName:w.name,vertexShader:qe,fragmentShader:X,defines:w.defines,customVertexShaderID:ne,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:p,batching:Be,batchingColor:Be&&k._colorsTexture!==null,instancing:Ne,instancingColor:Ne&&k.instanceColor!==null,instancingMorph:Ne&&k.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?t.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Gs,alphaToCoverage:!!w.alphaToCoverage,map:ht,matcap:Xe,envMap:St,envMapMode:St&&Q.mapping,envMapCubeUVHeight:L,aoMap:U,lightMap:yn,bumpMap:Ve,normalMap:Ge,displacementMap:d&&Ae,emissiveMap:at,normalMapObjectSpace:Ge&&w.normalMapType===K1,normalMapTangentSpace:Ge&&w.normalMapType===ih,metalnessMap:Te,roughnessMap:C,anisotropy:M,anisotropyMap:ce,clearcoat:F,clearcoatMap:me,clearcoatNormalMap:$e,clearcoatRoughnessMap:ie,dispersion:q,iridescence:J,iridescenceMap:ge,iridescenceThicknessMap:Ce,sheen:Y,sheenColorMap:be,sheenRoughnessMap:_e,specularMap:We,specularColorMap:ke,specularIntensityMap:rt,transmission:Ee,transmissionMap:D,thicknessMap:le,gradientMap:V,opaque:w.transparent===!1&&w.blending===ws&&w.alphaToCoverage===!1,alphaMap:K,alphaTest:de,alphaHash:ue,combine:w.combine,mapUv:ht&&y(w.map.channel),aoMapUv:U&&y(w.aoMap.channel),lightMapUv:yn&&y(w.lightMap.channel),bumpMapUv:Ve&&y(w.bumpMap.channel),normalMapUv:Ge&&y(w.normalMap.channel),displacementMapUv:Ae&&y(w.displacementMap.channel),emissiveMapUv:at&&y(w.emissiveMap.channel),metalnessMapUv:Te&&y(w.metalnessMap.channel),roughnessMapUv:C&&y(w.roughnessMap.channel),anisotropyMapUv:ce&&y(w.anisotropyMap.channel),clearcoatMapUv:me&&y(w.clearcoatMap.channel),clearcoatNormalMapUv:$e&&y(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ie&&y(w.clearcoatRoughnessMap.channel),iridescenceMapUv:ge&&y(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ce&&y(w.iridescenceThicknessMap.channel),sheenColorMapUv:be&&y(w.sheenColorMap.channel),sheenRoughnessMapUv:_e&&y(w.sheenRoughnessMap.channel),specularMapUv:We&&y(w.specularMap.channel),specularColorMapUv:ke&&y(w.specularColorMap.channel),specularIntensityMapUv:rt&&y(w.specularIntensityMap.channel),transmissionMapUv:D&&y(w.transmissionMap.channel),thicknessMapUv:le&&y(w.thicknessMap.channel),alphaMapUv:K&&y(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Ge||M),vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!$.attributes.uv&&(ht||K),fog:!!W,useFog:w.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:w.flatShading===!0,sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Re,skinning:k.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:w.dithering,shadowMapEnabled:t.shadowMap.enabled&&P.length>0,shadowMapType:t.shadowMap.type,toneMapping:_t,decodeVideoTexture:ht&&w.map.isVideoTexture===!0&&Ye.getTransfer(w.map.colorSpace)===nt,decodeVideoTextureEmissive:at&&w.emissiveMap.isVideoTexture===!0&&Ye.getTransfer(w.emissiveMap.colorSpace)===nt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===Kn,flipSided:w.side===cn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Ie&&w.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ie&&w.extensions.multiDraw===!0||Be)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return Ot.vertexUv1s=c.has(1),Ot.vertexUv2s=c.has(2),Ot.vertexUv3s=c.has(3),c.clear(),Ot}function f(w){const S=[];if(w.shaderID?S.push(w.shaderID):(S.push(w.customVertexShaderID),S.push(w.customFragmentShaderID)),w.defines!==void 0)for(const P in w.defines)S.push(P),S.push(w.defines[P]);return w.isRawShaderMaterial===!1&&(g(S,w),v(S,w),S.push(t.outputColorSpace)),S.push(w.customProgramCacheKey),S.join()}function g(w,S){w.push(S.precision),w.push(S.outputColorSpace),w.push(S.envMapMode),w.push(S.envMapCubeUVHeight),w.push(S.mapUv),w.push(S.alphaMapUv),w.push(S.lightMapUv),w.push(S.aoMapUv),w.push(S.bumpMapUv),w.push(S.normalMapUv),w.push(S.displacementMapUv),w.push(S.emissiveMapUv),w.push(S.metalnessMapUv),w.push(S.roughnessMapUv),w.push(S.anisotropyMapUv),w.push(S.clearcoatMapUv),w.push(S.clearcoatNormalMapUv),w.push(S.clearcoatRoughnessMapUv),w.push(S.iridescenceMapUv),w.push(S.iridescenceThicknessMapUv),w.push(S.sheenColorMapUv),w.push(S.sheenRoughnessMapUv),w.push(S.specularMapUv),w.push(S.specularColorMapUv),w.push(S.specularIntensityMapUv),w.push(S.transmissionMapUv),w.push(S.thicknessMapUv),w.push(S.combine),w.push(S.fogExp2),w.push(S.sizeAttenuation),w.push(S.morphTargetsCount),w.push(S.morphAttributeCount),w.push(S.numDirLights),w.push(S.numPointLights),w.push(S.numSpotLights),w.push(S.numSpotLightMaps),w.push(S.numHemiLights),w.push(S.numRectAreaLights),w.push(S.numDirLightShadows),w.push(S.numPointLightShadows),w.push(S.numSpotLightShadows),w.push(S.numSpotLightShadowsWithMaps),w.push(S.numLightProbes),w.push(S.shadowMapType),w.push(S.toneMapping),w.push(S.numClippingPlanes),w.push(S.numClipIntersection),w.push(S.depthPacking)}function v(w,S){a.disableAll(),S.supportsVertexTextures&&a.enable(0),S.instancing&&a.enable(1),S.instancingColor&&a.enable(2),S.instancingMorph&&a.enable(3),S.matcap&&a.enable(4),S.envMap&&a.enable(5),S.normalMapObjectSpace&&a.enable(6),S.normalMapTangentSpace&&a.enable(7),S.clearcoat&&a.enable(8),S.iridescence&&a.enable(9),S.alphaTest&&a.enable(10),S.vertexColors&&a.enable(11),S.vertexAlphas&&a.enable(12),S.vertexUv1s&&a.enable(13),S.vertexUv2s&&a.enable(14),S.vertexUv3s&&a.enable(15),S.vertexTangents&&a.enable(16),S.anisotropy&&a.enable(17),S.alphaHash&&a.enable(18),S.batching&&a.enable(19),S.dispersion&&a.enable(20),S.batchingColor&&a.enable(21),w.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reverseDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),w.push(a.mask)}function x(w){const S=_[w.type];let P;if(S){const H=Zn[S];P=VS.clone(H.uniforms)}else P=w.uniforms;return P}function b(w,S){let P;for(let H=0,k=u.length;H<k;H++){const W=u[H];if(W.cacheKey===S){P=W,++P.usedTimes;break}}return P===void 0&&(P=new tA(t,S,w,s),u.push(P)),P}function A(w){if(--w.usedTimes===0){const S=u.indexOf(w);u[S]=u[u.length-1],u.pop(),w.destroy()}}function T(w){l.remove(w)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:x,acquireProgram:b,releaseProgram:A,releaseShaderCache:T,programs:u,dispose:R}}function oA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function aA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function bm(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function Pm(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(h,d,p,_,y,m){let f=t[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:_,renderOrder:h.renderOrder,z:y,group:m},t[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=_,f.renderOrder=h.renderOrder,f.z=y,f.group=m),e++,f}function a(h,d,p,_,y,m){const f=o(h,d,p,_,y,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):n.push(f)}function l(h,d,p,_,y,m){const f=o(h,d,p,_,y,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):n.unshift(f)}function c(h,d){n.length>1&&n.sort(h||aA),i.length>1&&i.sort(d||bm),r.length>1&&r.sort(d||bm)}function u(){for(let h=e,d=t.length;h<d;h++){const p=t[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function lA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new Pm,t.set(i,[o])):r>=s.length?(o=new Pm,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function cA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new O,color:new je};break;case"SpotLight":n={position:new O,direction:new O,color:new je,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new O,color:new je,distance:0,decay:0};break;case"HemisphereLight":n={direction:new O,skyColor:new je,groundColor:new je};break;case"RectAreaLight":n={color:new je,position:new O,halfWidth:new O,halfHeight:new O};break}return t[e.id]=n,n}}}function uA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new De,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let fA=0;function dA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function hA(t){const e=new cA,n=uA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new O);const r=new O,s=new yt,o=new yt;function a(c){let u=0,h=0,d=0;for(let w=0;w<9;w++)i.probe[w].set(0,0,0);let p=0,_=0,y=0,m=0,f=0,g=0,v=0,x=0,b=0,A=0,T=0;c.sort(dA);for(let w=0,S=c.length;w<S;w++){const P=c[w],H=P.color,k=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*k,h+=H.g*k,d+=H.b*k;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],k);T++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.directionalShadow[p]=L,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=P.shadow.matrix,g++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(H).multiplyScalar(k),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[y]=G;const Q=P.shadow;if(P.map&&(i.spotLightMap[b]=P.map,b++,Q.updateMatrices(P),P.castShadow&&A++),i.spotLightMatrix[y]=Q.matrix,P.castShadow){const L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,i.spotShadow[y]=L,i.spotShadowMap[y]=$,x++}y++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(H).multiplyScalar(k),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const Q=P.shadow,L=n.get(P);L.shadowIntensity=Q.intensity,L.shadowBias=Q.bias,L.shadowNormalBias=Q.normalBias,L.shadowRadius=Q.radius,L.shadowMapSize=Q.mapSize,L.shadowCameraNear=Q.camera.near,L.shadowCameraFar=Q.camera.far,i.pointShadow[_]=L,i.pointShadowMap[_]=$,i.pointShadowMatrix[_]=P.shadow.matrix,v++}i.point[_]=G,_++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(k),G.groundColor.copy(P.groundColor).multiplyScalar(k),i.hemi[f]=G,f++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ae.LTC_FLOAT_1,i.rectAreaLTC2=ae.LTC_FLOAT_2):(i.rectAreaLTC1=ae.LTC_HALF_1,i.rectAreaLTC2=ae.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const R=i.hash;(R.directionalLength!==p||R.pointLength!==_||R.spotLength!==y||R.rectAreaLength!==m||R.hemiLength!==f||R.numDirectionalShadows!==g||R.numPointShadows!==v||R.numSpotShadows!==x||R.numSpotMaps!==b||R.numLightProbes!==T)&&(i.directional.length=p,i.spot.length=y,i.rectArea.length=m,i.point.length=_,i.hemi.length=f,i.directionalShadow.length=g,i.directionalShadowMap.length=g,i.pointShadow.length=v,i.pointShadowMap.length=v,i.spotShadow.length=x,i.spotShadowMap.length=x,i.directionalShadowMatrix.length=g,i.pointShadowMatrix.length=v,i.spotLightMatrix.length=x+b-A,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=T,R.directionalLength=p,R.pointLength=_,R.spotLength=y,R.rectAreaLength=m,R.hemiLength=f,R.numDirectionalShadows=g,R.numPointShadows=v,R.numSpotShadows=x,R.numSpotMaps=b,R.numLightProbes=T,i.version=fA++)}function l(c,u){let h=0,d=0,p=0,_=0,y=0;const m=u.matrixWorldInverse;for(let f=0,g=c.length;f<g;f++){const v=c[f];if(v.isDirectionalLight){const x=i.directional[h];x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),h++}else if(v.isSpotLight){const x=i.spot[p];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),x.direction.setFromMatrixPosition(v.matrixWorld),r.setFromMatrixPosition(v.target.matrixWorld),x.direction.sub(r),x.direction.transformDirection(m),p++}else if(v.isRectAreaLight){const x=i.rectArea[_];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),o.identity(),s.copy(v.matrixWorld),s.premultiply(m),o.extractRotation(s),x.halfWidth.set(v.width*.5,0,0),x.halfHeight.set(0,v.height*.5,0),x.halfWidth.applyMatrix4(o),x.halfHeight.applyMatrix4(o),_++}else if(v.isPointLight){const x=i.point[d];x.position.setFromMatrixPosition(v.matrixWorld),x.position.applyMatrix4(m),d++}else if(v.isHemisphereLight){const x=i.hemi[y];x.direction.setFromMatrixPosition(v.matrixWorld),x.direction.transformDirection(m),y++}}}return{setup:a,setupView:l,state:i}}function Lm(t){const e=new hA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function pA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new Lm(t),e.set(r,[a])):s>=o.length?(a=new Lm(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class mA extends js{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Z1,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class gA extends js{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const _A=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,vA=`uniform sampler2D shadow_pass;
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
}`;function xA(t,e,n){let i=new oh;const r=new De,s=new De,o=new xt,a=new mA({depthPacking:q1}),l=new gA,c={},u=n.maxTextureSize,h={[tr]:cn,[cn]:tr,[Kn]:Kn},d=new nr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new De},radius:{value:4}},vertexShader:_A,fragmentShader:vA}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const _=new ii;_.setAttribute("position",new ni(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const y=new sn(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=b_;let f=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const w=t.getRenderTarget(),S=t.getActiveCubeFace(),P=t.getActiveMipmapLevel(),H=t.state;H.setBlending(Ki),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const k=f!==fi&&this.type===fi,W=f===fi&&this.type!==fi;for(let $=0,G=A.length;$<G;$++){const Q=A[$],L=Q.shadow;if(L===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(L.autoUpdate===!1&&L.needsUpdate===!1)continue;r.copy(L.mapSize);const j=L.getFrameExtents();if(r.multiply(j),s.copy(L.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/j.x),r.x=s.x*j.x,L.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/j.y),r.y=s.y*j.y,L.mapSize.y=s.y)),L.map===null||k===!0||W===!0){const se=this.type!==fi?{minFilter:Gn,magFilter:Gn}:{};L.map!==null&&L.map.dispose(),L.map=new Nr(r.x,r.y,se),L.map.texture.name=Q.name+".shadowMap",L.camera.updateProjectionMatrix()}t.setRenderTarget(L.map),t.clear();const Z=L.getViewportCount();for(let se=0;se<Z;se++){const Me=L.getViewport(se);o.set(s.x*Me.x,s.y*Me.y,s.x*Me.z,s.y*Me.w),H.viewport(o),L.updateMatrices(Q,se),i=L.getFrustum(),x(T,R,L.camera,Q,this.type)}L.isPointLightShadow!==!0&&this.type===fi&&g(L,R),L.needsUpdate=!1}f=this.type,m.needsUpdate=!1,t.setRenderTarget(w,S,P)};function g(A,T){const R=e.update(y);d.defines.VSM_SAMPLES!==A.blurSamples&&(d.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Nr(r.x,r.y)),d.uniforms.shadow_pass.value=A.map.texture,d.uniforms.resolution.value=A.mapSize,d.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(T,null,R,d,y,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(T,null,R,p,y,null)}function v(A,T,R,w){let S=null;const P=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(P!==void 0)S=P;else if(S=R.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const H=S.uuid,k=T.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let $=W[k];$===void 0&&($=S.clone(),W[k]=$,T.addEventListener("dispose",b)),S=$}if(S.visible=T.visible,S.wireframe=T.wireframe,w===fi?S.side=T.shadowSide!==null?T.shadowSide:T.side:S.side=T.shadowSide!==null?T.shadowSide:h[T.side],S.alphaMap=T.alphaMap,S.alphaTest=T.alphaTest,S.map=T.map,S.clipShadows=T.clipShadows,S.clippingPlanes=T.clippingPlanes,S.clipIntersection=T.clipIntersection,S.displacementMap=T.displacementMap,S.displacementScale=T.displacementScale,S.displacementBias=T.displacementBias,S.wireframeLinewidth=T.wireframeLinewidth,S.linewidth=T.linewidth,R.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const H=t.properties.get(S);H.light=R}return S}function x(A,T,R,w,S){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&S===fi)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const k=e.update(A),W=A.material;if(Array.isArray(W)){const $=k.groups;for(let G=0,Q=$.length;G<Q;G++){const L=$[G],j=W[L.materialIndex];if(j&&j.visible){const Z=v(A,j,w,S);A.onBeforeShadow(t,A,T,R,k,Z,L),t.renderBufferDirect(R,null,k,Z,A,L),A.onAfterShadow(t,A,T,R,k,Z,L)}}}else if(W.visible){const $=v(A,W,w,S);A.onBeforeShadow(t,A,T,R,k,$,null),t.renderBufferDirect(R,null,k,$,A,null),A.onAfterShadow(t,A,T,R,k,$,null)}}const H=A.children;for(let k=0,W=H.length;k<W;k++)x(H[k],T,R,w,S)}function b(A){A.target.removeEventListener("dispose",b);for(const R in c){const w=c[R],S=A.target.uuid;S in w&&(w[S].dispose(),delete w[S])}}}const yA={[gf]:_f,[vf]:Sf,[xf]:Mf,[Is]:yf,[_f]:gf,[Sf]:vf,[Mf]:xf,[yf]:Is};function SA(t,e){function n(){let D=!1;const le=new xt;let V=null;const K=new xt(0,0,0,0);return{setMask:function(de){V!==de&&!D&&(t.colorMask(de,de,de,de),V=de)},setLocked:function(de){D=de},setClear:function(de,ue,Ie,_t,Ot){Ot===!0&&(de*=_t,ue*=_t,Ie*=_t),le.set(de,ue,Ie,_t),K.equals(le)===!1&&(t.clearColor(de,ue,Ie,_t),K.copy(le))},reset:function(){D=!1,V=null,K.set(-1,0,0,0)}}}function i(){let D=!1,le=!1,V=null,K=null,de=null;return{setReversed:function(ue){if(le!==ue){const Ie=e.get("EXT_clip_control");le?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT);const _t=de;de=null,this.setClear(_t)}le=ue},getReversed:function(){return le},setTest:function(ue){ue?oe(t.DEPTH_TEST):Re(t.DEPTH_TEST)},setMask:function(ue){V!==ue&&!D&&(t.depthMask(ue),V=ue)},setFunc:function(ue){if(le&&(ue=yA[ue]),K!==ue){switch(ue){case gf:t.depthFunc(t.NEVER);break;case _f:t.depthFunc(t.ALWAYS);break;case vf:t.depthFunc(t.LESS);break;case Is:t.depthFunc(t.LEQUAL);break;case xf:t.depthFunc(t.EQUAL);break;case yf:t.depthFunc(t.GEQUAL);break;case Sf:t.depthFunc(t.GREATER);break;case Mf:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}K=ue}},setLocked:function(ue){D=ue},setClear:function(ue){de!==ue&&(le&&(ue=1-ue),t.clearDepth(ue),de=ue)},reset:function(){D=!1,V=null,K=null,de=null,le=!1}}}function r(){let D=!1,le=null,V=null,K=null,de=null,ue=null,Ie=null,_t=null,Ot=null;return{setTest:function(et){D||(et?oe(t.STENCIL_TEST):Re(t.STENCIL_TEST))},setMask:function(et){le!==et&&!D&&(t.stencilMask(et),le=et)},setFunc:function(et,Pn,ri){(V!==et||K!==Pn||de!==ri)&&(t.stencilFunc(et,Pn,ri),V=et,K=Pn,de=ri)},setOp:function(et,Pn,ri){(ue!==et||Ie!==Pn||_t!==ri)&&(t.stencilOp(et,Pn,ri),ue=et,Ie=Pn,_t=ri)},setLocked:function(et){D=et},setClear:function(et){Ot!==et&&(t.clearStencil(et),Ot=et)},reset:function(){D=!1,le=null,V=null,K=null,de=null,ue=null,Ie=null,_t=null,Ot=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,g=null,v=null,x=null,b=null,A=null,T=new je(0,0,0),R=0,w=!1,S=null,P=null,H=null,k=null,W=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,Q=0;const L=t.getParameter(t.VERSION);L.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(L)[1]),G=Q>=1):L.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(L)[1]),G=Q>=2);let j=null,Z={};const se=t.getParameter(t.SCISSOR_BOX),Me=t.getParameter(t.VIEWPORT),qe=new xt().fromArray(se),X=new xt().fromArray(Me);function ne(D,le,V,K){const de=new Uint8Array(4),ue=t.createTexture();t.bindTexture(D,ue),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<V;Ie++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(le,0,t.RGBA,1,1,K,0,t.RGBA,t.UNSIGNED_BYTE,de):t.texImage2D(le+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,de);return ue}const pe={};pe[t.TEXTURE_2D]=ne(t.TEXTURE_2D,t.TEXTURE_2D,1),pe[t.TEXTURE_CUBE_MAP]=ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[t.TEXTURE_2D_ARRAY]=ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),pe[t.TEXTURE_3D]=ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(t.DEPTH_TEST),o.setFunc(Is),Ve(!1),Ge(Ip),oe(t.CULL_FACE),U(Ki);function oe(D){u[D]!==!0&&(t.enable(D),u[D]=!0)}function Re(D){u[D]!==!1&&(t.disable(D),u[D]=!1)}function Ne(D,le){return h[D]!==le?(t.bindFramebuffer(D,le),h[D]=le,D===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=le),D===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=le),!0):!1}function Be(D,le){let V=p,K=!1;if(D){V=d.get(le),V===void 0&&(V=[],d.set(le,V));const de=D.textures;if(V.length!==de.length||V[0]!==t.COLOR_ATTACHMENT0){for(let ue=0,Ie=de.length;ue<Ie;ue++)V[ue]=t.COLOR_ATTACHMENT0+ue;V.length=de.length,K=!0}}else V[0]!==t.BACK&&(V[0]=t.BACK,K=!0);K&&t.drawBuffers(V)}function ht(D){return _!==D?(t.useProgram(D),_=D,!0):!1}const Xe={[gr]:t.FUNC_ADD,[M1]:t.FUNC_SUBTRACT,[E1]:t.FUNC_REVERSE_SUBTRACT};Xe[w1]=t.MIN,Xe[T1]=t.MAX;const St={[A1]:t.ZERO,[C1]:t.ONE,[R1]:t.SRC_COLOR,[pf]:t.SRC_ALPHA,[I1]:t.SRC_ALPHA_SATURATE,[D1]:t.DST_COLOR,[P1]:t.DST_ALPHA,[b1]:t.ONE_MINUS_SRC_COLOR,[mf]:t.ONE_MINUS_SRC_ALPHA,[N1]:t.ONE_MINUS_DST_COLOR,[L1]:t.ONE_MINUS_DST_ALPHA,[U1]:t.CONSTANT_COLOR,[O1]:t.ONE_MINUS_CONSTANT_COLOR,[F1]:t.CONSTANT_ALPHA,[k1]:t.ONE_MINUS_CONSTANT_ALPHA};function U(D,le,V,K,de,ue,Ie,_t,Ot,et){if(D===Ki){y===!0&&(Re(t.BLEND),y=!1);return}if(y===!1&&(oe(t.BLEND),y=!0),D!==S1){if(D!==m||et!==w){if((f!==gr||x!==gr)&&(t.blendEquation(t.FUNC_ADD),f=gr,x=gr),et)switch(D){case ws:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Up:t.blendFunc(t.ONE,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case ws:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Up:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case Op:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Fp:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}g=null,v=null,b=null,A=null,T.set(0,0,0),R=0,m=D,w=et}return}de=de||le,ue=ue||V,Ie=Ie||K,(le!==f||de!==x)&&(t.blendEquationSeparate(Xe[le],Xe[de]),f=le,x=de),(V!==g||K!==v||ue!==b||Ie!==A)&&(t.blendFuncSeparate(St[V],St[K],St[ue],St[Ie]),g=V,v=K,b=ue,A=Ie),(_t.equals(T)===!1||Ot!==R)&&(t.blendColor(_t.r,_t.g,_t.b,Ot),T.copy(_t),R=Ot),m=D,w=!1}function yn(D,le){D.side===Kn?Re(t.CULL_FACE):oe(t.CULL_FACE);let V=D.side===cn;le&&(V=!V),Ve(V),D.blending===ws&&D.transparent===!1?U(Ki):U(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);const K=D.stencilWrite;a.setTest(K),K&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),at(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?oe(t.SAMPLE_ALPHA_TO_COVERAGE):Re(t.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(D){S!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),S=D)}function Ge(D){D!==v1?(oe(t.CULL_FACE),D!==P&&(D===Ip?t.cullFace(t.BACK):D===x1?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Re(t.CULL_FACE),P=D}function Ae(D){D!==H&&(G&&t.lineWidth(D),H=D)}function at(D,le,V){D?(oe(t.POLYGON_OFFSET_FILL),(k!==le||W!==V)&&(t.polygonOffset(le,V),k=le,W=V)):Re(t.POLYGON_OFFSET_FILL)}function Te(D){D?oe(t.SCISSOR_TEST):Re(t.SCISSOR_TEST)}function C(D){D===void 0&&(D=t.TEXTURE0+$-1),j!==D&&(t.activeTexture(D),j=D)}function M(D,le,V){V===void 0&&(j===null?V=t.TEXTURE0+$-1:V=j);let K=Z[V];K===void 0&&(K={type:void 0,texture:void 0},Z[V]=K),(K.type!==D||K.texture!==le)&&(j!==V&&(t.activeTexture(V),j=V),t.bindTexture(D,le||pe[D]),K.type=D,K.texture=le)}function F(){const D=Z[j];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function q(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function J(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Y(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ee(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function me(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ie(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ce(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(D){qe.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),qe.copy(D))}function _e(D){X.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),X.copy(D))}function We(D,le){let V=c.get(le);V===void 0&&(V=new WeakMap,c.set(le,V));let K=V.get(D);K===void 0&&(K=t.getUniformBlockIndex(le,D.name),V.set(D,K))}function ke(D,le){const K=c.get(le).get(D);l.get(le)!==K&&(t.uniformBlockBinding(le,K,D.__bindingPointIndex),l.set(le,K))}function rt(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),u={},j=null,Z={},h={},d=new WeakMap,p=[],_=null,y=!1,m=null,f=null,g=null,v=null,x=null,b=null,A=null,T=new je(0,0,0),R=0,w=!1,S=null,P=null,H=null,k=null,W=null,qe.set(0,0,t.canvas.width,t.canvas.height),X.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:oe,disable:Re,bindFramebuffer:Ne,drawBuffers:Be,useProgram:ht,setBlending:U,setMaterial:yn,setFlipSided:Ve,setCullFace:Ge,setLineWidth:Ae,setPolygonOffset:at,setScissorTest:Te,activeTexture:C,bindTexture:M,unbindTexture:F,compressedTexImage2D:q,compressedTexImage3D:J,texImage2D:ge,texImage3D:Ce,updateUBOMapping:We,uniformBlockBinding:ke,texStorage2D:$e,texStorage3D:ie,texSubImage2D:Y,texSubImage3D:Ee,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:be,viewport:_e,reset:rt}}function Dm(t,e,n,i){const r=MA(i);switch(n){case I_:return t*e;case O_:return t*e;case F_:return t*e*2;case k_:return t*e/r.components*r.byteLength;case eh:return t*e/r.components*r.byteLength;case z_:return t*e*2/r.components*r.byteLength;case th:return t*e*2/r.components*r.byteLength;case U_:return t*e*3/r.components*r.byteLength;case Bn:return t*e*4/r.components*r.byteLength;case nh:return t*e*4/r.components*r.byteLength;case al:case ll:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case cl:case ul:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Rf:case Pf:return Math.max(t,16)*Math.max(e,8)/4;case Cf:case bf:return Math.max(t,8)*Math.max(e,8)/2;case Lf:case Df:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Nf:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case If:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Of:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Ff:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case kf:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case zf:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case jf:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case fl:case Yf:case Zf:return Math.ceil(t/4)*Math.ceil(e/4)*16;case B_:case qf:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Kf:case Qf:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function MA(t){switch(t){case wi:case L_:return{byteLength:1,components:1};case Xo:case D_:case na:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case Dr:case Kd:case gi:return{byteLength:4,components:1};case N_:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function EA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new De,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(C,M){return p?new OffscreenCanvas(C,M):Yo("canvas")}function y(C,M,F){let q=1;const J=Te(C);if((J.width>F||J.height>F)&&(q=F/Math.max(J.width,J.height)),q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Y=Math.floor(q*J.width),Ee=Math.floor(q*J.height);h===void 0&&(h=_(Y,Ee));const ce=M?_(Y,Ee):h;return ce.width=Y,ce.height=Ee,ce.getContext("2d").drawImage(C,0,0,Y,Ee),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+Y+"x"+Ee+")."),ce}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),C;return C}function m(C){return C.generateMipmaps}function f(C){t.generateMipmap(C)}function g(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function v(C,M,F,q,J=!1){if(C!==null){if(t[C]!==void 0)return t[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Y=M;if(M===t.RED&&(F===t.FLOAT&&(Y=t.R32F),F===t.HALF_FLOAT&&(Y=t.R16F),F===t.UNSIGNED_BYTE&&(Y=t.R8)),M===t.RED_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.R8UI),F===t.UNSIGNED_SHORT&&(Y=t.R16UI),F===t.UNSIGNED_INT&&(Y=t.R32UI),F===t.BYTE&&(Y=t.R8I),F===t.SHORT&&(Y=t.R16I),F===t.INT&&(Y=t.R32I)),M===t.RG&&(F===t.FLOAT&&(Y=t.RG32F),F===t.HALF_FLOAT&&(Y=t.RG16F),F===t.UNSIGNED_BYTE&&(Y=t.RG8)),M===t.RG_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RG8UI),F===t.UNSIGNED_SHORT&&(Y=t.RG16UI),F===t.UNSIGNED_INT&&(Y=t.RG32UI),F===t.BYTE&&(Y=t.RG8I),F===t.SHORT&&(Y=t.RG16I),F===t.INT&&(Y=t.RG32I)),M===t.RGB_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),F===t.UNSIGNED_INT&&(Y=t.RGB32UI),F===t.BYTE&&(Y=t.RGB8I),F===t.SHORT&&(Y=t.RGB16I),F===t.INT&&(Y=t.RGB32I)),M===t.RGBA_INTEGER&&(F===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),F===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),F===t.UNSIGNED_INT&&(Y=t.RGBA32UI),F===t.BYTE&&(Y=t.RGBA8I),F===t.SHORT&&(Y=t.RGBA16I),F===t.INT&&(Y=t.RGBA32I)),M===t.RGB&&F===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),M===t.RGBA){const Ee=J?lc:Ye.getTransfer(q);F===t.FLOAT&&(Y=t.RGBA32F),F===t.HALF_FLOAT&&(Y=t.RGBA16F),F===t.UNSIGNED_BYTE&&(Y=Ee===nt?t.SRGB8_ALPHA8:t.RGBA8),F===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),F===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function x(C,M){let F;return C?M===null||M===Dr||M===Fs?F=t.DEPTH24_STENCIL8:M===gi?F=t.DEPTH32F_STENCIL8:M===Xo&&(F=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Dr||M===Fs?F=t.DEPTH_COMPONENT24:M===gi?F=t.DEPTH_COMPONENT32F:M===Xo&&(F=t.DEPTH_COMPONENT16),F}function b(C,M){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Gn&&C.minFilter!==Qn?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function A(C){const M=C.target;M.removeEventListener("dispose",A),R(M),M.isVideoTexture&&u.delete(M)}function T(C){const M=C.target;M.removeEventListener("dispose",T),S(M)}function R(C){const M=i.get(C);if(M.__webglInit===void 0)return;const F=C.source,q=d.get(F);if(q){const J=q[M.__cacheKey];J.usedTimes--,J.usedTimes===0&&w(C),Object.keys(q).length===0&&d.delete(F)}i.remove(C)}function w(C){const M=i.get(C);t.deleteTexture(M.__webglTexture);const F=C.source,q=d.get(F);delete q[M.__cacheKey],o.memory.textures--}function S(C){const M=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(M.__webglFramebuffer[q]))for(let J=0;J<M.__webglFramebuffer[q].length;J++)t.deleteFramebuffer(M.__webglFramebuffer[q][J]);else t.deleteFramebuffer(M.__webglFramebuffer[q]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[q])}else{if(Array.isArray(M.__webglFramebuffer))for(let q=0;q<M.__webglFramebuffer.length;q++)t.deleteFramebuffer(M.__webglFramebuffer[q]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let q=0;q<M.__webglColorRenderbuffer.length;q++)M.__webglColorRenderbuffer[q]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[q]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const F=C.textures;for(let q=0,J=F.length;q<J;q++){const Y=i.get(F[q]);Y.__webglTexture&&(t.deleteTexture(Y.__webglTexture),o.memory.textures--),i.remove(F[q])}i.remove(C)}let P=0;function H(){P=0}function k(){const C=P;return C>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),P+=1,C}function W(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.colorSpace),M.join()}function $(C,M){const F=i.get(C);if(C.isVideoTexture&&Ae(C),C.isRenderTargetTexture===!1&&C.version>0&&F.__version!==C.version){const q=C.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{X(F,C,M);return}}n.bindTexture(t.TEXTURE_2D,F.__webglTexture,t.TEXTURE0+M)}function G(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){X(F,C,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,F.__webglTexture,t.TEXTURE0+M)}function Q(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){X(F,C,M);return}n.bindTexture(t.TEXTURE_3D,F.__webglTexture,t.TEXTURE0+M)}function L(C,M){const F=i.get(C);if(C.version>0&&F.__version!==C.version){ne(F,C,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,F.__webglTexture,t.TEXTURE0+M)}const j={[Tf]:t.REPEAT,[Sr]:t.CLAMP_TO_EDGE,[Af]:t.MIRRORED_REPEAT},Z={[Gn]:t.NEAREST,[Y1]:t.NEAREST_MIPMAP_NEAREST,[Aa]:t.NEAREST_MIPMAP_LINEAR,[Qn]:t.LINEAR,[zc]:t.LINEAR_MIPMAP_NEAREST,[Mr]:t.LINEAR_MIPMAP_LINEAR},se={[Q1]:t.NEVER,[rS]:t.ALWAYS,[J1]:t.LESS,[H_]:t.LEQUAL,[eS]:t.EQUAL,[iS]:t.GEQUAL,[tS]:t.GREATER,[nS]:t.NOTEQUAL};function Me(C,M){if(M.type===gi&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===Qn||M.magFilter===zc||M.magFilter===Aa||M.magFilter===Mr||M.minFilter===Qn||M.minFilter===zc||M.minFilter===Aa||M.minFilter===Mr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,j[M.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,j[M.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,j[M.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Z[M.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Z[M.minFilter]),M.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,se[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gn||M.minFilter!==Aa&&M.minFilter!==Mr||M.type===gi&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function qe(C,M){let F=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",A));const q=M.source;let J=d.get(q);J===void 0&&(J={},d.set(q,J));const Y=W(M);if(Y!==C.__cacheKey){J[Y]===void 0&&(J[Y]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,F=!0),J[Y].usedTimes++;const Ee=J[C.__cacheKey];Ee!==void 0&&(J[C.__cacheKey].usedTimes--,Ee.usedTimes===0&&w(M)),C.__cacheKey=Y,C.__webglTexture=J[Y].texture}return F}function X(C,M,F){let q=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(q=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(q=t.TEXTURE_3D);const J=qe(C,M),Y=M.source;n.bindTexture(q,C.__webglTexture,t.TEXTURE0+F);const Ee=i.get(Y);if(Y.version!==Ee.__version||J===!0){n.activeTexture(t.TEXTURE0+F);const ce=Ye.getPrimaries(Ye.workingColorSpace),me=M.colorSpace===Bi?null:Ye.getPrimaries(M.colorSpace),$e=M.colorSpace===Bi||ce===me?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let ie=y(M.image,!1,r.maxTextureSize);ie=at(M,ie);const ge=s.convert(M.format,M.colorSpace),Ce=s.convert(M.type);let be=v(M.internalFormat,ge,Ce,M.colorSpace,M.isVideoTexture);Me(q,M);let _e;const We=M.mipmaps,ke=M.isVideoTexture!==!0,rt=Ee.__version===void 0||J===!0,D=Y.dataReady,le=b(M,ie);if(M.isDepthTexture)be=x(M.format===ks,M.type),rt&&(ke?n.texStorage2D(t.TEXTURE_2D,1,be,ie.width,ie.height):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Ce,null));else if(M.isDataTexture)if(We.length>0){ke&&rt&&n.texStorage2D(t.TEXTURE_2D,le,be,We[0].width,We[0].height);for(let V=0,K=We.length;V<K;V++)_e=We[V],ke?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,V,be,_e.width,_e.height,0,ge,Ce,_e.data);M.generateMipmaps=!1}else ke?(rt&&n.texStorage2D(t.TEXTURE_2D,le,be,ie.width,ie.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ie.width,ie.height,ge,Ce,ie.data)):n.texImage2D(t.TEXTURE_2D,0,be,ie.width,ie.height,0,ge,Ce,ie.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){ke&&rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,be,We[0].width,We[0].height,ie.depth);for(let V=0,K=We.length;V<K;V++)if(_e=We[V],M.format!==Bn)if(ge!==null)if(ke){if(D)if(M.layerUpdates.size>0){const de=Dm(_e.width,_e.height,M.format,M.type);for(const ue of M.layerUpdates){const Ie=_e.data.subarray(ue*de/_e.data.BYTES_PER_ELEMENT,(ue+1)*de/_e.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,ue,_e.width,_e.height,1,ge,Ie)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ie.depth,ge,_e.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,V,be,_e.width,_e.height,ie.depth,0,_e.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ke?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,V,0,0,0,_e.width,_e.height,ie.depth,ge,Ce,_e.data):n.texImage3D(t.TEXTURE_2D_ARRAY,V,be,_e.width,_e.height,ie.depth,0,ge,Ce,_e.data)}else{ke&&rt&&n.texStorage2D(t.TEXTURE_2D,le,be,We[0].width,We[0].height);for(let V=0,K=We.length;V<K;V++)_e=We[V],M.format!==Bn?ge!==null?ke?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,_e.data):n.compressedTexImage2D(t.TEXTURE_2D,V,be,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ke?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,_e.width,_e.height,ge,Ce,_e.data):n.texImage2D(t.TEXTURE_2D,V,be,_e.width,_e.height,0,ge,Ce,_e.data)}else if(M.isDataArrayTexture)if(ke){if(rt&&n.texStorage3D(t.TEXTURE_2D_ARRAY,le,be,ie.width,ie.height,ie.depth),D)if(M.layerUpdates.size>0){const V=Dm(ie.width,ie.height,M.format,M.type);for(const K of M.layerUpdates){const de=ie.data.subarray(K*V/ie.data.BYTES_PER_ELEMENT,(K+1)*V/ie.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,K,ie.width,ie.height,1,ge,Ce,de)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ce,ie.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,be,ie.width,ie.height,ie.depth,0,ge,Ce,ie.data);else if(M.isData3DTexture)ke?(rt&&n.texStorage3D(t.TEXTURE_3D,le,be,ie.width,ie.height,ie.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,ge,Ce,ie.data)):n.texImage3D(t.TEXTURE_3D,0,be,ie.width,ie.height,ie.depth,0,ge,Ce,ie.data);else if(M.isFramebufferTexture){if(rt)if(ke)n.texStorage2D(t.TEXTURE_2D,le,be,ie.width,ie.height);else{let V=ie.width,K=ie.height;for(let de=0;de<le;de++)n.texImage2D(t.TEXTURE_2D,de,be,V,K,0,ge,Ce,null),V>>=1,K>>=1}}else if(We.length>0){if(ke&&rt){const V=Te(We[0]);n.texStorage2D(t.TEXTURE_2D,le,be,V.width,V.height)}for(let V=0,K=We.length;V<K;V++)_e=We[V],ke?D&&n.texSubImage2D(t.TEXTURE_2D,V,0,0,ge,Ce,_e):n.texImage2D(t.TEXTURE_2D,V,be,ge,Ce,_e);M.generateMipmaps=!1}else if(ke){if(rt){const V=Te(ie);n.texStorage2D(t.TEXTURE_2D,le,be,V.width,V.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ge,Ce,ie)}else n.texImage2D(t.TEXTURE_2D,0,be,ge,Ce,ie);m(M)&&f(q),Ee.__version=Y.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ne(C,M,F){if(M.image.length!==6)return;const q=qe(C,M),J=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+F);const Y=i.get(J);if(J.version!==Y.__version||q===!0){n.activeTexture(t.TEXTURE0+F);const Ee=Ye.getPrimaries(Ye.workingColorSpace),ce=M.colorSpace===Bi?null:Ye.getPrimaries(M.colorSpace),me=M.colorSpace===Bi||Ee===ce?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,me);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,ie=M.image[0]&&M.image[0].isDataTexture,ge=[];for(let K=0;K<6;K++)!$e&&!ie?ge[K]=y(M.image[K],!0,r.maxCubemapSize):ge[K]=ie?M.image[K].image:M.image[K],ge[K]=at(M,ge[K]);const Ce=ge[0],be=s.convert(M.format,M.colorSpace),_e=s.convert(M.type),We=v(M.internalFormat,be,_e,M.colorSpace),ke=M.isVideoTexture!==!0,rt=Y.__version===void 0||q===!0,D=J.dataReady;let le=b(M,Ce);Me(t.TEXTURE_CUBE_MAP,M);let V;if($e){ke&&rt&&n.texStorage2D(t.TEXTURE_CUBE_MAP,le,We,Ce.width,Ce.height);for(let K=0;K<6;K++){V=ge[K].mipmaps;for(let de=0;de<V.length;de++){const ue=V[de];M.format!==Bn?be!==null?ke?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ue.width,ue.height,be,ue.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,We,ue.width,ue.height,0,ue.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,0,0,ue.width,ue.height,be,_e,ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de,We,ue.width,ue.height,0,be,_e,ue.data)}}}else{if(V=M.mipmaps,ke&&rt){V.length>0&&le++;const K=Te(ge[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,le,We,K.width,K.height)}for(let K=0;K<6;K++)if(ie){ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,ge[K].width,ge[K].height,be,_e,ge[K].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,ge[K].width,ge[K].height,0,be,_e,ge[K].data);for(let de=0;de<V.length;de++){const Ie=V[de].image[K].image;ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,Ie.width,Ie.height,be,_e,Ie.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,We,Ie.width,Ie.height,0,be,_e,Ie.data)}}else{ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,be,_e,ge[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,We,be,_e,ge[K]);for(let de=0;de<V.length;de++){const ue=V[de];ke?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,0,0,be,_e,ue.image[K]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+K,de+1,We,be,_e,ue.image[K])}}}m(M)&&f(t.TEXTURE_CUBE_MAP),Y.__version=J.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function pe(C,M,F,q,J,Y){const Ee=s.convert(F.format,F.colorSpace),ce=s.convert(F.type),me=v(F.internalFormat,Ee,ce,F.colorSpace),$e=i.get(M),ie=i.get(F);if(ie.__renderTarget=M,!$e.__hasExternalTextures){const ge=Math.max(1,M.width>>Y),Ce=Math.max(1,M.height>>Y);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,Y,me,ge,Ce,M.depth,0,Ee,ce,null):n.texImage2D(J,Y,me,ge,Ce,0,Ee,ce,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,q,J,ie.__webglTexture,0,Ve(M)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,q,J,ie.__webglTexture,Y),n.bindFramebuffer(t.FRAMEBUFFER,null)}function oe(C,M,F){if(t.bindRenderbuffer(t.RENDERBUFFER,C),M.depthBuffer){const q=M.depthTexture,J=q&&q.isDepthTexture?q.type:null,Y=x(M.stencilBuffer,J),Ee=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ce=Ve(M);Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ce,Y,M.width,M.height):F?t.renderbufferStorageMultisample(t.RENDERBUFFER,ce,Y,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Y,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ee,t.RENDERBUFFER,C)}else{const q=M.textures;for(let J=0;J<q.length;J++){const Y=q[J],Ee=s.convert(Y.format,Y.colorSpace),ce=s.convert(Y.type),me=v(Y.internalFormat,Ee,ce,Y.colorSpace),$e=Ve(M);F&&Ge(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,me,M.width,M.height):Ge(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,me,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,me,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Re(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=i.get(M.depthTexture);q.__renderTarget=M,(!q.__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),$(M.depthTexture,0);const J=q.__webglTexture,Y=Ve(M);if(M.depthTexture.format===Ts)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,J,0);else if(M.depthTexture.format===ks)Ge(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function Ne(C){const M=i.get(C),F=C.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==C.depthTexture){const q=C.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),q){const J=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,q.removeEventListener("dispose",J)};q.addEventListener("dispose",J),M.__depthDisposeCallback=J}M.__boundDepthTexture=q}if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Re(M.__webglFramebuffer,C)}else if(F){M.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[q]),M.__webglDepthbuffer[q]===void 0)M.__webglDepthbuffer[q]=t.createRenderbuffer(),oe(M.__webglDepthbuffer[q],C,!1);else{const J=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Y=M.__webglDepthbuffer[q];t.bindRenderbuffer(t.RENDERBUFFER,Y),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,Y)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),oe(M.__webglDepthbuffer,C,!1);else{const q=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,J=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,J),t.framebufferRenderbuffer(t.FRAMEBUFFER,q,t.RENDERBUFFER,J)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Be(C,M,F){const q=i.get(C);M!==void 0&&pe(q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),F!==void 0&&Ne(C)}function ht(C){const M=C.texture,F=i.get(C),q=i.get(M);C.addEventListener("dispose",T);const J=C.textures,Y=C.isWebGLCubeRenderTarget===!0,Ee=J.length>1;if(Ee||(q.__webglTexture===void 0&&(q.__webglTexture=t.createTexture()),q.__version=M.version,o.memory.textures++),Y){F.__webglFramebuffer=[];for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer[ce]=[];for(let me=0;me<M.mipmaps.length;me++)F.__webglFramebuffer[ce][me]=t.createFramebuffer()}else F.__webglFramebuffer[ce]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){F.__webglFramebuffer=[];for(let ce=0;ce<M.mipmaps.length;ce++)F.__webglFramebuffer[ce]=t.createFramebuffer()}else F.__webglFramebuffer=t.createFramebuffer();if(Ee)for(let ce=0,me=J.length;ce<me;ce++){const $e=i.get(J[ce]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&Ge(C)===!1){F.__webglMultisampledFramebuffer=t.createFramebuffer(),F.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ce=0;ce<J.length;ce++){const me=J[ce];F.__webglColorRenderbuffer[ce]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,F.__webglColorRenderbuffer[ce]);const $e=s.convert(me.format,me.colorSpace),ie=s.convert(me.type),ge=v(me.internalFormat,$e,ie,me.colorSpace,C.isXRRenderTarget===!0),Ce=Ve(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ce,ge,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,F.__webglColorRenderbuffer[ce])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(F.__webglDepthRenderbuffer=t.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Y){n.bindTexture(t.TEXTURE_CUBE_MAP,q.__webglTexture),Me(t.TEXTURE_CUBE_MAP,M);for(let ce=0;ce<6;ce++)if(M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(F.__webglFramebuffer[ce][me],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,me);else pe(F.__webglFramebuffer[ce],C,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0);m(M)&&f(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ee){for(let ce=0,me=J.length;ce<me;ce++){const $e=J[ce],ie=i.get($e);n.bindTexture(t.TEXTURE_2D,ie.__webglTexture),Me(t.TEXTURE_2D,$e),pe(F.__webglFramebuffer,C,$e,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,0),m($e)&&f(t.TEXTURE_2D)}n.unbindTexture()}else{let ce=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(ce=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ce,q.__webglTexture),Me(ce,M),M.mipmaps&&M.mipmaps.length>0)for(let me=0;me<M.mipmaps.length;me++)pe(F.__webglFramebuffer[me],C,M,t.COLOR_ATTACHMENT0,ce,me);else pe(F.__webglFramebuffer,C,M,t.COLOR_ATTACHMENT0,ce,0);m(M)&&f(ce),n.unbindTexture()}C.depthBuffer&&Ne(C)}function Xe(C){const M=C.textures;for(let F=0,q=M.length;F<q;F++){const J=M[F];if(m(J)){const Y=g(C),Ee=i.get(J).__webglTexture;n.bindTexture(Y,Ee),f(Y),n.unbindTexture()}}}const St=[],U=[];function yn(C){if(C.samples>0){if(Ge(C)===!1){const M=C.textures,F=C.width,q=C.height;let J=t.COLOR_BUFFER_BIT;const Y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ee=i.get(C),ce=M.length>1;if(ce)for(let me=0;me<M.length;me++)n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglFramebuffer);for(let me=0;me<M.length;me++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),ce){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,F,q,0,0,F,q,J,t.NEAREST),l===!0&&(St.length=0,U.length=0,St.push(t.COLOR_ATTACHMENT0+me),C.depthBuffer&&C.resolveDepthBuffer===!1&&(St.push(Y),U.push(Y),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,U)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,St))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ce)for(let me=0;me<M.length;me++){n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.RENDERBUFFER,Ee.__webglColorRenderbuffer[me]);const $e=i.get(M[me]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ee.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+me,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ee.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const M=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function Ve(C){return Math.min(r.maxSamples,C.samples)}function Ge(C){const M=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function Ae(C){const M=o.render.frame;u.get(C)!==M&&(u.set(C,M),C.update())}function at(C,M){const F=C.colorSpace,q=C.format,J=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||F!==Gs&&F!==Bi&&(Ye.getTransfer(F)===nt?(q!==Bn||J!==wi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),M}function Te(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=G,this.setTexture3D=Q,this.setTextureCube=L,this.rebindTextures=Be,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=yn,this.setupDepthRenderbuffer=Ne,this.setupFrameBufferTexture=pe,this.useMultisampledRTT=Ge}function wA(t,e){function n(i,r=Bi){let s;const o=Ye.getTransfer(r);if(i===wi)return t.UNSIGNED_BYTE;if(i===Qd)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Jd)return t.UNSIGNED_SHORT_5_5_5_1;if(i===N_)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===L_)return t.BYTE;if(i===D_)return t.SHORT;if(i===Xo)return t.UNSIGNED_SHORT;if(i===Kd)return t.INT;if(i===Dr)return t.UNSIGNED_INT;if(i===gi)return t.FLOAT;if(i===na)return t.HALF_FLOAT;if(i===I_)return t.ALPHA;if(i===U_)return t.RGB;if(i===Bn)return t.RGBA;if(i===O_)return t.LUMINANCE;if(i===F_)return t.LUMINANCE_ALPHA;if(i===Ts)return t.DEPTH_COMPONENT;if(i===ks)return t.DEPTH_STENCIL;if(i===k_)return t.RED;if(i===eh)return t.RED_INTEGER;if(i===z_)return t.RG;if(i===th)return t.RG_INTEGER;if(i===nh)return t.RGBA_INTEGER;if(i===al||i===ll||i===cl||i===ul)if(o===nt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===al)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===al)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ll)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===cl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===ul)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Cf||i===Rf||i===bf||i===Pf)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Cf)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Rf)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===bf)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Pf)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Lf||i===Df||i===Nf)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===Lf||i===Df)return o===nt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Nf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===If||i===Uf||i===Of||i===Ff||i===kf||i===zf||i===Bf||i===Hf||i===Vf||i===Gf||i===Wf||i===jf||i===Xf||i===$f)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===If)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Uf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Of)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Ff)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===kf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Bf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Hf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Vf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Gf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Wf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===jf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Xf)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===$f)return o===nt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===fl||i===Yf||i===Zf)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===fl)return o===nt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Yf)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Zf)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===B_||i===qf||i===Kf||i===Qf)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===fl)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qf)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Kf)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Qf)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Fs?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class TA extends pn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Er extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const AA={type:"move"};class du{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Er,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Er,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new O,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new O),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Er,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new O,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new O),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const y of e.hand.values()){const m=n.getJointPose(y,i),f=this._getHandJoint(c,y);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,_=.005;c.inputState.pinching&&d>p+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(AA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Er;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const CA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RA=`
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

}`;class bA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new Kt,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new nr({vertexShader:CA,fragmentShader:RA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new sn(new cc(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class PA extends Fr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,_=null;const y=new bA,m=n.getContextAttributes();let f=null,g=null;const v=[],x=[],b=new De;let A=null;const T=new pn;T.viewport=new xt;const R=new pn;R.viewport=new xt;const w=[T,R],S=new TA;let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(X){let ne=v[X];return ne===void 0&&(ne=new du,v[X]=ne),ne.getTargetRaySpace()},this.getControllerGrip=function(X){let ne=v[X];return ne===void 0&&(ne=new du,v[X]=ne),ne.getGripSpace()},this.getHand=function(X){let ne=v[X];return ne===void 0&&(ne=new du,v[X]=ne),ne.getHandSpace()};function k(X){const ne=x.indexOf(X.inputSource);if(ne===-1)return;const pe=v[ne];pe!==void 0&&(pe.update(X.inputSource,X.frame,c||o),pe.dispatchEvent({type:X.type,data:X.inputSource}))}function W(){r.removeEventListener("select",k),r.removeEventListener("selectstart",k),r.removeEventListener("selectend",k),r.removeEventListener("squeeze",k),r.removeEventListener("squeezestart",k),r.removeEventListener("squeezeend",k),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let X=0;X<v.length;X++){const ne=x[X];ne!==null&&(x[X]=null,v[X].disconnect(ne))}P=null,H=null,y.reset(),e.setRenderTarget(f),p=null,d=null,h=null,r=null,g=null,qe.stop(),i.isPresenting=!1,e.setPixelRatio(A),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(X){s=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(X){a=X,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(X){c=X},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return _},this.getSession=function(){return r},this.setSession=async function(X){if(r=X,r!==null){if(f=e.getRenderTarget(),r.addEventListener("select",k),r.addEventListener("selectstart",k),r.addEventListener("selectend",k),r.addEventListener("squeeze",k),r.addEventListener("squeezestart",k),r.addEventListener("squeezeend",k),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await n.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const ne={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,ne),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),g=new Nr(p.framebufferWidth,p.framebufferHeight,{format:Bn,type:wi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ne=null,pe=null,oe=null;m.depth&&(oe=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,ne=m.stencil?ks:Ts,pe=m.stencil?Fs:Dr);const Re={colorFormat:n.RGBA8,depthFormat:oe,scaleFactor:s};h=new XRWebGLBinding(r,n),d=h.createProjectionLayer(Re),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),g=new Nr(d.textureWidth,d.textureHeight,{format:Bn,type:wi,depthTexture:new tv(d.textureWidth,d.textureHeight,pe,void 0,void 0,void 0,void 0,void 0,void 0,ne),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}g.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),qe.setContext(r),qe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(X){for(let ne=0;ne<X.removed.length;ne++){const pe=X.removed[ne],oe=x.indexOf(pe);oe>=0&&(x[oe]=null,v[oe].disconnect(pe))}for(let ne=0;ne<X.added.length;ne++){const pe=X.added[ne];let oe=x.indexOf(pe);if(oe===-1){for(let Ne=0;Ne<v.length;Ne++)if(Ne>=x.length){x.push(pe),oe=Ne;break}else if(x[Ne]===null){x[Ne]=pe,oe=Ne;break}if(oe===-1)break}const Re=v[oe];Re&&Re.connect(pe)}}const G=new O,Q=new O;function L(X,ne,pe){G.setFromMatrixPosition(ne.matrixWorld),Q.setFromMatrixPosition(pe.matrixWorld);const oe=G.distanceTo(Q),Re=ne.projectionMatrix.elements,Ne=pe.projectionMatrix.elements,Be=Re[14]/(Re[10]-1),ht=Re[14]/(Re[10]+1),Xe=(Re[9]+1)/Re[5],St=(Re[9]-1)/Re[5],U=(Re[8]-1)/Re[0],yn=(Ne[8]+1)/Ne[0],Ve=Be*U,Ge=Be*yn,Ae=oe/(-U+yn),at=Ae*-U;if(ne.matrixWorld.decompose(X.position,X.quaternion,X.scale),X.translateX(at),X.translateZ(Ae),X.matrixWorld.compose(X.position,X.quaternion,X.scale),X.matrixWorldInverse.copy(X.matrixWorld).invert(),Re[10]===-1)X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse);else{const Te=Be+Ae,C=ht+Ae,M=Ve-at,F=Ge+(oe-at),q=Xe*ht/C*Te,J=St*ht/C*Te;X.projectionMatrix.makePerspective(M,F,q,J,Te,C),X.projectionMatrixInverse.copy(X.projectionMatrix).invert()}}function j(X,ne){ne===null?X.matrixWorld.copy(X.matrix):X.matrixWorld.multiplyMatrices(ne.matrixWorld,X.matrix),X.matrixWorldInverse.copy(X.matrixWorld).invert()}this.updateCamera=function(X){if(r===null)return;let ne=X.near,pe=X.far;y.texture!==null&&(y.depthNear>0&&(ne=y.depthNear),y.depthFar>0&&(pe=y.depthFar)),S.near=R.near=T.near=ne,S.far=R.far=T.far=pe,(P!==S.near||H!==S.far)&&(r.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,H=S.far),T.layers.mask=X.layers.mask|2,R.layers.mask=X.layers.mask|4,S.layers.mask=T.layers.mask|R.layers.mask;const oe=X.parent,Re=S.cameras;j(S,oe);for(let Ne=0;Ne<Re.length;Ne++)j(Re[Ne],oe);Re.length===2?L(S,T,R):S.projectionMatrix.copy(T.projectionMatrix),Z(X,S,oe)};function Z(X,ne,pe){pe===null?X.matrix.copy(ne.matrixWorld):(X.matrix.copy(pe.matrixWorld),X.matrix.invert(),X.matrix.multiply(ne.matrixWorld)),X.matrix.decompose(X.position,X.quaternion,X.scale),X.updateMatrixWorld(!0),X.projectionMatrix.copy(ne.projectionMatrix),X.projectionMatrixInverse.copy(ne.projectionMatrixInverse),X.isPerspectiveCamera&&(X.fov=$o*2*Math.atan(1/X.projectionMatrix.elements[5]),X.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(X){l=X,d!==null&&(d.fixedFoveation=X),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=X)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(S)};let se=null;function Me(X,ne){if(u=ne.getViewerPose(c||o),_=ne,u!==null){const pe=u.views;p!==null&&(e.setRenderTargetFramebuffer(g,p.framebuffer),e.setRenderTarget(g));let oe=!1;pe.length!==S.cameras.length&&(S.cameras.length=0,oe=!0);for(let Ne=0;Ne<pe.length;Ne++){const Be=pe[Ne];let ht=null;if(p!==null)ht=p.getViewport(Be);else{const St=h.getViewSubImage(d,Be);ht=St.viewport,Ne===0&&(e.setRenderTargetTextures(g,St.colorTexture,d.ignoreDepthValues?void 0:St.depthStencilTexture),e.setRenderTarget(g))}let Xe=w[Ne];Xe===void 0&&(Xe=new pn,Xe.layers.enable(Ne),Xe.viewport=new xt,w[Ne]=Xe),Xe.matrix.fromArray(Be.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(Be.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),Ne===0&&(S.matrix.copy(Xe.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),oe===!0&&S.cameras.push(Xe)}const Re=r.enabledFeatures;if(Re&&Re.includes("depth-sensing")){const Ne=h.getDepthInformation(pe[0]);Ne&&Ne.isValid&&Ne.texture&&y.init(e,Ne,r.renderState)}}for(let pe=0;pe<v.length;pe++){const oe=x[pe],Re=v[pe];oe!==null&&Re!==void 0&&Re.update(oe,ne,c||o)}se&&se(X,ne),ne.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ne}),_=null}const qe=new J_;qe.setAnimationLoop(Me),this.setAnimationLoop=function(X){se=X},this.dispose=function(){}}}const dr=new jn,LA=new yt;function DA(t,e){function n(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,q_(t)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,g,v,x){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),h(m,f)):f.isMeshPhongMaterial?(s(m,f),u(m,f)):f.isMeshStandardMaterial?(s(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,x)):f.isMeshMatcapMaterial?(s(m,f),_(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),y(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,g,v):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,n(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===cn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,n(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===cn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,n(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,n(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,n(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const g=e.get(f),v=g.envMap,x=g.envMapRotation;v&&(m.envMap.value=v,dr.copy(x),dr.x*=-1,dr.y*=-1,dr.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(dr.y*=-1,dr.z*=-1),m.envMapRotation.value.setFromMatrix4(LA.makeRotationFromEuler(dr)),m.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,n(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,n(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,g,v){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*g,m.scale.value=v*.5,f.map&&(m.map.value=f.map,n(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,n(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,n(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,n(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,n(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,g){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,n(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,n(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,n(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,n(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,n(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===cn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,n(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,n(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=g.texture,m.transmissionSamplerSize.value.set(g.width,g.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,n(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,n(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,n(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,n(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,n(f.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,f){f.matcap&&(m.matcap.value=f.matcap)}function y(m,f){const g=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(g.matrixWorld),m.nearDistance.value=g.shadow.camera.near,m.farDistance.value=g.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function NA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(g,v){const x=v.program;i.uniformBlockBinding(g,x)}function c(g,v){let x=r[g.id];x===void 0&&(_(g),x=u(g),r[g.id]=x,g.addEventListener("dispose",m));const b=v.program;i.updateUBOMapping(g,b);const A=e.render.frame;s[g.id]!==A&&(d(g),s[g.id]=A)}function u(g){const v=h();g.__bindingPointIndex=v;const x=t.createBuffer(),b=g.__size,A=g.usage;return t.bindBuffer(t.UNIFORM_BUFFER,x),t.bufferData(t.UNIFORM_BUFFER,b,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,v,x),x}function h(){for(let g=0;g<a;g++)if(o.indexOf(g)===-1)return o.push(g),g;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(g){const v=r[g.id],x=g.uniforms,b=g.__cache;t.bindBuffer(t.UNIFORM_BUFFER,v);for(let A=0,T=x.length;A<T;A++){const R=Array.isArray(x[A])?x[A]:[x[A]];for(let w=0,S=R.length;w<S;w++){const P=R[w];if(p(P,A,w,b)===!0){const H=P.__offset,k=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<k.length;$++){const G=k[$],Q=y(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,t.bufferSubData(t.UNIFORM_BUFFER,H+W,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,W),W+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,P.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(g,v,x,b){const A=g.value,T=v+"_"+x;if(b[T]===void 0)return typeof A=="number"||typeof A=="boolean"?b[T]=A:b[T]=A.clone(),!0;{const R=b[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return b[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function _(g){const v=g.uniforms;let x=0;const b=16;for(let T=0,R=v.length;T<R;T++){const w=Array.isArray(v[T])?v[T]:[v[T]];for(let S=0,P=w.length;S<P;S++){const H=w[S],k=Array.isArray(H.value)?H.value:[H.value];for(let W=0,$=k.length;W<$;W++){const G=k[W],Q=y(G),L=x%b,j=L%Q.boundary,Z=L+j;x+=j,Z!==0&&b-Z<Q.storage&&(x+=b-Z),H.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=x,x+=Q.storage}}}const A=x%b;return A>0&&(x+=b-A),g.__size=x,g.__cache={},this}function y(g){const v={boundary:0,storage:0};return typeof g=="number"||typeof g=="boolean"?(v.boundary=4,v.storage=4):g.isVector2?(v.boundary=8,v.storage=8):g.isVector3||g.isColor?(v.boundary=16,v.storage=12):g.isVector4?(v.boundary=16,v.storage=16):g.isMatrix3?(v.boundary=48,v.storage=48):g.isMatrix4?(v.boundary=64,v.storage=64):g.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",g),v}function m(g){const v=g.target;v.removeEventListener("dispose",m);const x=o.indexOf(v.__bindingPointIndex);o.splice(x,1),t.deleteBuffer(r[v.id]),delete r[v.id],delete s[v.id]}function f(){for(const g in r)t.deleteBuffer(r[g]);o=[],r={},s={}}return{bind:l,update:c,dispose:f}}class ov{constructor(e={}){const{canvas:n=MS(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=o;const _=new Uint32Array(4),y=new Int32Array(4);let m=null,f=null;const g=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=En,this.toneMapping=Qi,this.toneMappingExposure=1;const x=this;let b=!1,A=0,T=0,R=null,w=-1,S=null;const P=new xt,H=new xt;let k=null;const W=new je(0);let $=0,G=n.width,Q=n.height,L=1,j=null,Z=null;const se=new xt(0,0,G,Q),Me=new xt(0,0,G,Q);let qe=!1;const X=new oh;let ne=!1,pe=!1;const oe=new yt,Re=new yt,Ne=new O,Be=new xt,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function St(){return R===null?L:1}let U=i;function yn(E,N){return n.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Zd}`),n.addEventListener("webglcontextlost",K,!1),n.addEventListener("webglcontextrestored",de,!1),n.addEventListener("webglcontextcreationerror",ue,!1),U===null){const N="webgl2";if(U=yn(N,E),U===null)throw yn(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Ve,Ge,Ae,at,Te,C,M,F,q,J,Y,Ee,ce,me,$e,ie,ge,Ce,be,_e,We,ke,rt,D;function le(){Ve=new zw(U),Ve.init(),ke=new wA(U,Ve),Ge=new Nw(U,Ve,e,ke),Ae=new SA(U,Ve),Ge.reverseDepthBuffer&&d&&Ae.buffers.depth.setReversed(!0),at=new Vw(U),Te=new oA,C=new EA(U,Ve,Ae,Te,Ge,ke,at),M=new Uw(x),F=new kw(x),q=new ZS(U),rt=new Lw(U,q),J=new Bw(U,q,at,rt),Y=new Ww(U,J,q,at),be=new Gw(U,Ge,C),ie=new Iw(Te),Ee=new sA(x,M,F,Ve,Ge,rt,ie),ce=new DA(x,Te),me=new lA,$e=new pA(Ve),Ce=new Pw(x,M,F,Ae,Y,p,l),ge=new xA(x,Y,Ge),D=new NA(U,at,Ge,Ae),_e=new Dw(U,Ve,at),We=new Hw(U,Ve,at),at.programs=Ee.programs,x.capabilities=Ge,x.extensions=Ve,x.properties=Te,x.renderLists=me,x.shadowMap=ge,x.state=Ae,x.info=at}le();const V=new PA(x,U);this.xr=V,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){const E=Ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return L},this.setPixelRatio=function(E){E!==void 0&&(L=E,this.setSize(G,Q,!1))},this.getSize=function(E){return E.set(G,Q)},this.setSize=function(E,N,z=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=E,Q=N,n.width=Math.floor(E*L),n.height=Math.floor(N*L),z===!0&&(n.style.width=E+"px",n.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(G*L,Q*L).floor()},this.setDrawingBufferSize=function(E,N,z){G=E,Q=N,L=z,n.width=Math.floor(E*z),n.height=Math.floor(N*z),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(P)},this.getViewport=function(E){return E.copy(se)},this.setViewport=function(E,N,z,B){E.isVector4?se.set(E.x,E.y,E.z,E.w):se.set(E,N,z,B),Ae.viewport(P.copy(se).multiplyScalar(L).round())},this.getScissor=function(E){return E.copy(Me)},this.setScissor=function(E,N,z,B){E.isVector4?Me.set(E.x,E.y,E.z,E.w):Me.set(E,N,z,B),Ae.scissor(H.copy(Me).multiplyScalar(L).round())},this.getScissorTest=function(){return qe},this.setScissorTest=function(E){Ae.setScissorTest(qe=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){Z=E},this.getClearColor=function(E){return E.copy(Ce.getClearColor())},this.setClearColor=function(){Ce.setClearColor.apply(Ce,arguments)},this.getClearAlpha=function(){return Ce.getClearAlpha()},this.setClearAlpha=function(){Ce.setClearAlpha.apply(Ce,arguments)},this.clear=function(E=!0,N=!0,z=!0){let B=0;if(E){let I=!1;if(R!==null){const re=R.texture.format;I=re===nh||re===th||re===eh}if(I){const re=R.texture.type,fe=re===wi||re===Dr||re===Xo||re===Fs||re===Qd||re===Jd,xe=Ce.getClearColor(),ye=Ce.getClearAlpha(),Pe=xe.r,Ue=xe.g,Se=xe.b;fe?(_[0]=Pe,_[1]=Ue,_[2]=Se,_[3]=ye,U.clearBufferuiv(U.COLOR,0,_)):(y[0]=Pe,y[1]=Ue,y[2]=Se,y[3]=ye,U.clearBufferiv(U.COLOR,0,y))}else B|=U.COLOR_BUFFER_BIT}N&&(B|=U.DEPTH_BUFFER_BIT),z&&(B|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),U.clear(B)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",K,!1),n.removeEventListener("webglcontextrestored",de,!1),n.removeEventListener("webglcontextcreationerror",ue,!1),me.dispose(),$e.dispose(),Te.dispose(),M.dispose(),F.dispose(),Y.dispose(),rt.dispose(),D.dispose(),Ee.dispose(),V.dispose(),V.removeEventListener("sessionstart",ph),V.removeEventListener("sessionend",mh),or.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function de(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=at.autoReset,N=ge.enabled,z=ge.autoUpdate,B=ge.needsUpdate,I=ge.type;le(),at.autoReset=E,ge.enabled=N,ge.autoUpdate=z,ge.needsUpdate=B,ge.type=I}function ue(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ie(E){const N=E.target;N.removeEventListener("dispose",Ie),_t(N)}function _t(E){Ot(E),Te.remove(E)}function Ot(E){const N=Te.get(E).programs;N!==void 0&&(N.forEach(function(z){Ee.releaseProgram(z)}),E.isShaderMaterial&&Ee.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,z,B,I,re){N===null&&(N=ht);const fe=I.isMesh&&I.matrixWorld.determinant()<0,xe=yv(E,N,z,B,I);Ae.setMaterial(B,fe);let ye=z.index,Pe=1;if(B.wireframe===!0){if(ye=J.getWireframeAttribute(z),ye===void 0)return;Pe=2}const Ue=z.drawRange,Se=z.attributes.position;let Ke=Ue.start*Pe,st=(Ue.start+Ue.count)*Pe;re!==null&&(Ke=Math.max(Ke,re.start*Pe),st=Math.min(st,(re.start+re.count)*Pe)),ye!==null?(Ke=Math.max(Ke,0),st=Math.min(st,ye.count)):Se!=null&&(Ke=Math.max(Ke,0),st=Math.min(st,Se.count));const lt=st-Ke;if(lt<0||lt===1/0)return;rt.setup(I,B,xe,z,ye);let en,Qe=_e;if(ye!==null&&(en=q.get(ye),Qe=We,Qe.setIndex(en)),I.isMesh)B.wireframe===!0?(Ae.setLineWidth(B.wireframeLinewidth*St()),Qe.setMode(U.LINES)):Qe.setMode(U.TRIANGLES);else if(I.isLine){let we=B.linewidth;we===void 0&&(we=1),Ae.setLineWidth(we*St()),I.isLineSegments?Qe.setMode(U.LINES):I.isLineLoop?Qe.setMode(U.LINE_LOOP):Qe.setMode(U.LINE_STRIP)}else I.isPoints?Qe.setMode(U.POINTS):I.isSprite&&Qe.setMode(U.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)Qe.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))Qe.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const we=I._multiDrawStarts,si=I._multiDrawCounts,Je=I._multiDrawCount,Ln=ye?q.get(ye).bytesPerElement:1,kr=Te.get(B).currentProgram.getUniforms();for(let un=0;un<Je;un++)kr.setValue(U,"_gl_DrawID",un),Qe.render(we[un]/Ln,si[un])}else if(I.isInstancedMesh)Qe.renderInstances(Ke,lt,I.count);else if(z.isInstancedBufferGeometry){const we=z._maxInstanceCount!==void 0?z._maxInstanceCount:1/0,si=Math.min(z.instanceCount,we);Qe.renderInstances(Ke,lt,si)}else Qe.render(Ke,lt)};function et(E,N,z){E.transparent===!0&&E.side===Kn&&E.forceSinglePass===!1?(E.side=cn,E.needsUpdate=!0,la(E,N,z),E.side=tr,E.needsUpdate=!0,la(E,N,z),E.side=Kn):la(E,N,z)}this.compile=function(E,N,z=null){z===null&&(z=E),f=$e.get(z),f.init(N),v.push(f),z.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),E!==z&&E.traverseVisible(function(I){I.isLight&&I.layers.test(N.layers)&&(f.pushLight(I),I.castShadow&&f.pushShadow(I))}),f.setupLights();const B=new Set;return E.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const re=I.material;if(re)if(Array.isArray(re))for(let fe=0;fe<re.length;fe++){const xe=re[fe];et(xe,z,I),B.add(xe)}else et(re,z,I),B.add(re)}),v.pop(),f=null,B},this.compileAsync=function(E,N,z=null){const B=this.compile(E,N,z);return new Promise(I=>{function re(){if(B.forEach(function(fe){Te.get(fe).currentProgram.isReady()&&B.delete(fe)}),B.size===0){I(E);return}setTimeout(re,10)}Ve.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Pn=null;function ri(E){Pn&&Pn(E)}function ph(){or.stop()}function mh(){or.start()}const or=new J_;or.setAnimationLoop(ri),typeof self<"u"&&or.setContext(self),this.setAnimationLoop=function(E){Pn=E,V.setAnimationLoop(E),E===null?or.stop():or.start()},V.addEventListener("sessionstart",ph),V.addEventListener("sessionend",mh),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(N),N=V.getCamera()),E.isScene===!0&&E.onBeforeRender(x,E,N,R),f=$e.get(E,v.length),f.init(N),v.push(f),Re.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),X.setFromProjectionMatrix(Re),pe=this.localClippingEnabled,ne=ie.init(this.clippingPlanes,pe),m=me.get(E,g.length),m.init(),g.push(m),V.enabled===!0&&V.isPresenting===!0){const re=x.xr.getDepthSensingMesh();re!==null&&dc(re,N,-1/0,x.sortObjects)}dc(E,N,0,x.sortObjects),m.finish(),x.sortObjects===!0&&m.sort(j,Z),Xe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xe&&Ce.addToRenderList(m,E),this.info.render.frame++,ne===!0&&ie.beginShadows();const z=f.state.shadowsArray;ge.render(z,E,N),ne===!0&&ie.endShadows(),this.info.autoReset===!0&&this.info.reset();const B=m.opaque,I=m.transmissive;if(f.setupLights(),N.isArrayCamera){const re=N.cameras;if(I.length>0)for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe];_h(B,I,E,ye)}Xe&&Ce.render(E);for(let fe=0,xe=re.length;fe<xe;fe++){const ye=re[fe];gh(m,E,ye,ye.viewport)}}else I.length>0&&_h(B,I,E,N),Xe&&Ce.render(E),gh(m,E,N);R!==null&&(C.updateMultisampleRenderTarget(R),C.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(x,E,N),rt.resetDefaultState(),w=-1,S=null,v.pop(),v.length>0?(f=v[v.length-1],ne===!0&&ie.setGlobalState(x.clippingPlanes,f.state.camera)):f=null,g.pop(),g.length>0?m=g[g.length-1]:m=null};function dc(E,N,z,B){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)z=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)f.pushLight(E),E.castShadow&&f.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||X.intersectsSprite(E)){B&&Be.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Re);const fe=Y.update(E),xe=E.material;xe.visible&&m.push(E,fe,xe,z,Be.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||X.intersectsObject(E))){const fe=Y.update(E),xe=E.material;if(B&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Be.copy(E.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(E.matrixWorld).applyMatrix4(Re)),Array.isArray(xe)){const ye=fe.groups;for(let Pe=0,Ue=ye.length;Pe<Ue;Pe++){const Se=ye[Pe],Ke=xe[Se.materialIndex];Ke&&Ke.visible&&m.push(E,fe,Ke,z,Be.z,Se)}}else xe.visible&&m.push(E,fe,xe,z,Be.z,null)}}const re=E.children;for(let fe=0,xe=re.length;fe<xe;fe++)dc(re[fe],N,z,B)}function gh(E,N,z,B){const I=E.opaque,re=E.transmissive,fe=E.transparent;f.setupLightsView(z),ne===!0&&ie.setGlobalState(x.clippingPlanes,z),B&&Ae.viewport(P.copy(B)),I.length>0&&aa(I,N,z),re.length>0&&aa(re,N,z),fe.length>0&&aa(fe,N,z),Ae.buffers.depth.setTest(!0),Ae.buffers.depth.setMask(!0),Ae.buffers.color.setMask(!0),Ae.setPolygonOffset(!1)}function _h(E,N,z,B){if((z.isScene===!0?z.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[B.id]===void 0&&(f.state.transmissionRenderTarget[B.id]=new Nr(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?na:wi,minFilter:Mr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Ye.workingColorSpace}));const re=f.state.transmissionRenderTarget[B.id],fe=B.viewport||P;re.setSize(fe.z,fe.w);const xe=x.getRenderTarget();x.setRenderTarget(re),x.getClearColor(W),$=x.getClearAlpha(),$<1&&x.setClearColor(16777215,.5),x.clear(),Xe&&Ce.render(z);const ye=x.toneMapping;x.toneMapping=Qi;const Pe=B.viewport;if(B.viewport!==void 0&&(B.viewport=void 0),f.setupLightsView(B),ne===!0&&ie.setGlobalState(x.clippingPlanes,B),aa(E,z,B),C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let Ue=!1;for(let Se=0,Ke=N.length;Se<Ke;Se++){const st=N[Se],lt=st.object,en=st.geometry,Qe=st.material,we=st.group;if(Qe.side===Kn&&lt.layers.test(B.layers)){const si=Qe.side;Qe.side=cn,Qe.needsUpdate=!0,vh(lt,z,B,en,Qe,we),Qe.side=si,Qe.needsUpdate=!0,Ue=!0}}Ue===!0&&(C.updateMultisampleRenderTarget(re),C.updateRenderTargetMipmap(re))}x.setRenderTarget(xe),x.setClearColor(W,$),Pe!==void 0&&(B.viewport=Pe),x.toneMapping=ye}function aa(E,N,z){const B=N.isScene===!0?N.overrideMaterial:null;for(let I=0,re=E.length;I<re;I++){const fe=E[I],xe=fe.object,ye=fe.geometry,Pe=B===null?fe.material:B,Ue=fe.group;xe.layers.test(z.layers)&&vh(xe,N,z,ye,Pe,Ue)}}function vh(E,N,z,B,I,re){E.onBeforeRender(x,N,z,B,I,re),E.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),I.onBeforeRender(x,N,z,B,E,re),I.transparent===!0&&I.side===Kn&&I.forceSinglePass===!1?(I.side=cn,I.needsUpdate=!0,x.renderBufferDirect(z,N,B,I,E,re),I.side=tr,I.needsUpdate=!0,x.renderBufferDirect(z,N,B,I,E,re),I.side=Kn):x.renderBufferDirect(z,N,B,I,E,re),E.onAfterRender(x,N,z,B,I,re)}function la(E,N,z){N.isScene!==!0&&(N=ht);const B=Te.get(E),I=f.state.lights,re=f.state.shadowsArray,fe=I.state.version,xe=Ee.getParameters(E,I.state,re,N,z),ye=Ee.getProgramCacheKey(xe);let Pe=B.programs;B.environment=E.isMeshStandardMaterial?N.environment:null,B.fog=N.fog,B.envMap=(E.isMeshStandardMaterial?F:M).get(E.envMap||B.environment),B.envMapRotation=B.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,Pe===void 0&&(E.addEventListener("dispose",Ie),Pe=new Map,B.programs=Pe);let Ue=Pe.get(ye);if(Ue!==void 0){if(B.currentProgram===Ue&&B.lightsStateVersion===fe)return yh(E,xe),Ue}else xe.uniforms=Ee.getUniforms(E),E.onBeforeCompile(xe,x),Ue=Ee.acquireProgram(xe,ye),Pe.set(ye,Ue),B.uniforms=xe.uniforms;const Se=B.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Se.clippingPlanes=ie.uniform),yh(E,xe),B.needsLights=Mv(E),B.lightsStateVersion=fe,B.needsLights&&(Se.ambientLightColor.value=I.state.ambient,Se.lightProbe.value=I.state.probe,Se.directionalLights.value=I.state.directional,Se.directionalLightShadows.value=I.state.directionalShadow,Se.spotLights.value=I.state.spot,Se.spotLightShadows.value=I.state.spotShadow,Se.rectAreaLights.value=I.state.rectArea,Se.ltc_1.value=I.state.rectAreaLTC1,Se.ltc_2.value=I.state.rectAreaLTC2,Se.pointLights.value=I.state.point,Se.pointLightShadows.value=I.state.pointShadow,Se.hemisphereLights.value=I.state.hemi,Se.directionalShadowMap.value=I.state.directionalShadowMap,Se.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Se.spotShadowMap.value=I.state.spotShadowMap,Se.spotLightMatrix.value=I.state.spotLightMatrix,Se.spotLightMap.value=I.state.spotLightMap,Se.pointShadowMap.value=I.state.pointShadowMap,Se.pointShadowMatrix.value=I.state.pointShadowMatrix),B.currentProgram=Ue,B.uniformsList=null,Ue}function xh(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=dl.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function yh(E,N){const z=Te.get(E);z.outputColorSpace=N.outputColorSpace,z.batching=N.batching,z.batchingColor=N.batchingColor,z.instancing=N.instancing,z.instancingColor=N.instancingColor,z.instancingMorph=N.instancingMorph,z.skinning=N.skinning,z.morphTargets=N.morphTargets,z.morphNormals=N.morphNormals,z.morphColors=N.morphColors,z.morphTargetsCount=N.morphTargetsCount,z.numClippingPlanes=N.numClippingPlanes,z.numIntersection=N.numClipIntersection,z.vertexAlphas=N.vertexAlphas,z.vertexTangents=N.vertexTangents,z.toneMapping=N.toneMapping}function yv(E,N,z,B,I){N.isScene!==!0&&(N=ht),C.resetTextureUnits();const re=N.fog,fe=B.isMeshStandardMaterial?N.environment:null,xe=R===null?x.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Gs,ye=(B.isMeshStandardMaterial?F:M).get(B.envMap||fe),Pe=B.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,Ue=!!z.attributes.tangent&&(!!B.normalMap||B.anisotropy>0),Se=!!z.morphAttributes.position,Ke=!!z.morphAttributes.normal,st=!!z.morphAttributes.color;let lt=Qi;B.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(lt=x.toneMapping);const en=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,Qe=en!==void 0?en.length:0,we=Te.get(B),si=f.state.lights;if(ne===!0&&(pe===!0||E!==S)){const Sn=E===S&&B.id===w;ie.setState(B,E,Sn)}let Je=!1;B.version===we.__version?(we.needsLights&&we.lightsStateVersion!==si.state.version||we.outputColorSpace!==xe||I.isBatchedMesh&&we.batching===!1||!I.isBatchedMesh&&we.batching===!0||I.isBatchedMesh&&we.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&we.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&we.instancing===!1||!I.isInstancedMesh&&we.instancing===!0||I.isSkinnedMesh&&we.skinning===!1||!I.isSkinnedMesh&&we.skinning===!0||I.isInstancedMesh&&we.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&we.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&we.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&we.instancingMorph===!1&&I.morphTexture!==null||we.envMap!==ye||B.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==ie.numPlanes||we.numIntersection!==ie.numIntersection)||we.vertexAlphas!==Pe||we.vertexTangents!==Ue||we.morphTargets!==Se||we.morphNormals!==Ke||we.morphColors!==st||we.toneMapping!==lt||we.morphTargetsCount!==Qe)&&(Je=!0):(Je=!0,we.__version=B.version);let Ln=we.currentProgram;Je===!0&&(Ln=la(B,N,I));let kr=!1,un=!1,$s=!1;const ct=Ln.getUniforms(),Xn=we.uniforms;if(Ae.useProgram(Ln.program)&&(kr=!0,un=!0,$s=!0),B.id!==w&&(w=B.id,un=!0),kr||S!==E){Ae.buffers.depth.getReversed()?(oe.copy(E.projectionMatrix),wS(oe),TS(oe),ct.setValue(U,"projectionMatrix",oe)):ct.setValue(U,"projectionMatrix",E.projectionMatrix),ct.setValue(U,"viewMatrix",E.matrixWorldInverse);const Ai=ct.map.cameraPosition;Ai!==void 0&&Ai.setValue(U,Ne.setFromMatrixPosition(E.matrixWorld)),Ge.logarithmicDepthBuffer&&ct.setValue(U,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(B.isMeshPhongMaterial||B.isMeshToonMaterial||B.isMeshLambertMaterial||B.isMeshBasicMaterial||B.isMeshStandardMaterial||B.isShaderMaterial)&&ct.setValue(U,"isOrthographic",E.isOrthographicCamera===!0),S!==E&&(S=E,un=!0,$s=!0)}if(I.isSkinnedMesh){ct.setOptional(U,I,"bindMatrix"),ct.setOptional(U,I,"bindMatrixInverse");const Sn=I.skeleton;Sn&&(Sn.boneTexture===null&&Sn.computeBoneTexture(),ct.setValue(U,"boneTexture",Sn.boneTexture,C))}I.isBatchedMesh&&(ct.setOptional(U,I,"batchingTexture"),ct.setValue(U,"batchingTexture",I._matricesTexture,C),ct.setOptional(U,I,"batchingIdTexture"),ct.setValue(U,"batchingIdTexture",I._indirectTexture,C),ct.setOptional(U,I,"batchingColorTexture"),I._colorsTexture!==null&&ct.setValue(U,"batchingColorTexture",I._colorsTexture,C));const Ys=z.morphAttributes;if((Ys.position!==void 0||Ys.normal!==void 0||Ys.color!==void 0)&&be.update(I,z,Ln),(un||we.receiveShadow!==I.receiveShadow)&&(we.receiveShadow=I.receiveShadow,ct.setValue(U,"receiveShadow",I.receiveShadow)),B.isMeshGouraudMaterial&&B.envMap!==null&&(Xn.envMap.value=ye,Xn.flipEnvMap.value=ye.isCubeTexture&&ye.isRenderTargetTexture===!1?-1:1),B.isMeshStandardMaterial&&B.envMap===null&&N.environment!==null&&(Xn.envMapIntensity.value=N.environmentIntensity),un&&(ct.setValue(U,"toneMappingExposure",x.toneMappingExposure),we.needsLights&&Sv(Xn,$s),re&&B.fog===!0&&ce.refreshFogUniforms(Xn,re),ce.refreshMaterialUniforms(Xn,B,L,Q,f.state.transmissionRenderTarget[E.id]),dl.upload(U,xh(we),Xn,C)),B.isShaderMaterial&&B.uniformsNeedUpdate===!0&&(dl.upload(U,xh(we),Xn,C),B.uniformsNeedUpdate=!1),B.isSpriteMaterial&&ct.setValue(U,"center",I.center),ct.setValue(U,"modelViewMatrix",I.modelViewMatrix),ct.setValue(U,"normalMatrix",I.normalMatrix),ct.setValue(U,"modelMatrix",I.matrixWorld),B.isShaderMaterial||B.isRawShaderMaterial){const Sn=B.uniformsGroups;for(let Ai=0,Ci=Sn.length;Ai<Ci;Ai++){const Sh=Sn[Ai];D.update(Sh,Ln),D.bind(Sh,Ln)}}return Ln}function Sv(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function Mv(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,N,z){Te.get(E.texture).__webglTexture=N,Te.get(E.depthTexture).__webglTexture=z;const B=Te.get(E);B.__hasExternalTextures=!0,B.__autoAllocateDepthBuffer=z===void 0,B.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),B.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const z=Te.get(E);z.__webglFramebuffer=N,z.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(E,N=0,z=0){R=E,A=N,T=z;let B=!0,I=null,re=!1,fe=!1;if(E){const ye=Te.get(E);if(ye.__useDefaultFramebuffer!==void 0)Ae.bindFramebuffer(U.FRAMEBUFFER,null),B=!1;else if(ye.__webglFramebuffer===void 0)C.setupRenderTarget(E);else if(ye.__hasExternalTextures)C.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Se=E.depthTexture;if(ye.__boundDepthTexture!==Se){if(Se!==null&&Te.has(Se)&&(E.width!==Se.image.width||E.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(E)}}const Pe=E.texture;(Pe.isData3DTexture||Pe.isDataArrayTexture||Pe.isCompressedArrayTexture)&&(fe=!0);const Ue=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Ue[N])?I=Ue[N][z]:I=Ue[N],re=!0):E.samples>0&&C.useMultisampledRTT(E)===!1?I=Te.get(E).__webglMultisampledFramebuffer:Array.isArray(Ue)?I=Ue[z]:I=Ue,P.copy(E.viewport),H.copy(E.scissor),k=E.scissorTest}else P.copy(se).multiplyScalar(L).floor(),H.copy(Me).multiplyScalar(L).floor(),k=qe;if(Ae.bindFramebuffer(U.FRAMEBUFFER,I)&&B&&Ae.drawBuffers(E,I),Ae.viewport(P),Ae.scissor(H),Ae.setScissorTest(k),re){const ye=Te.get(E.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+N,ye.__webglTexture,z)}else if(fe){const ye=Te.get(E.texture),Pe=N||0;U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,ye.__webglTexture,z||0,Pe)}w=-1},this.readRenderTargetPixels=function(E,N,z,B,I,re,fe){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){Ae.bindFramebuffer(U.FRAMEBUFFER,xe);try{const ye=E.texture,Pe=ye.format,Ue=ye.type;if(!Ge.textureFormatReadable(Pe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-B&&z>=0&&z<=E.height-I&&U.readPixels(N,z,B,I,ke.convert(Pe),ke.convert(Ue),re)}finally{const ye=R!==null?Te.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,ye)}}},this.readRenderTargetPixelsAsync=async function(E,N,z,B,I,re,fe){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&fe!==void 0&&(xe=xe[fe]),xe){const ye=E.texture,Pe=ye.format,Ue=ye.type;if(!Ge.textureFormatReadable(Pe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-B&&z>=0&&z<=E.height-I){Ae.bindFramebuffer(U.FRAMEBUFFER,xe);const Se=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.bufferData(U.PIXEL_PACK_BUFFER,re.byteLength,U.STREAM_READ),U.readPixels(N,z,B,I,ke.convert(Pe),ke.convert(Ue),0);const Ke=R!==null?Te.get(R).__webglFramebuffer:null;Ae.bindFramebuffer(U.FRAMEBUFFER,Ke);const st=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await ES(U,st,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Se),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,re),U.deleteBuffer(Se),U.deleteSync(st),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,z=0){E.isTexture!==!0&&(mo("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const B=Math.pow(2,-z),I=Math.floor(E.image.width*B),re=Math.floor(E.image.height*B),fe=N!==null?N.x:0,xe=N!==null?N.y:0;C.setTexture2D(E,0),U.copyTexSubImage2D(U.TEXTURE_2D,z,0,0,fe,xe,I,re),Ae.unbindTexture()},this.copyTextureToTexture=function(E,N,z=null,B=null,I=0){E.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1],N=arguments[2],I=arguments[3]||0,z=null);let re,fe,xe,ye,Pe,Ue,Se,Ke,st;const lt=E.isCompressedTexture?E.mipmaps[I]:E.image;z!==null?(re=z.max.x-z.min.x,fe=z.max.y-z.min.y,xe=z.isBox3?z.max.z-z.min.z:1,ye=z.min.x,Pe=z.min.y,Ue=z.isBox3?z.min.z:0):(re=lt.width,fe=lt.height,xe=lt.depth||1,ye=0,Pe=0,Ue=0),B!==null?(Se=B.x,Ke=B.y,st=B.z):(Se=0,Ke=0,st=0);const en=ke.convert(N.format),Qe=ke.convert(N.type);let we;N.isData3DTexture?(C.setTexture3D(N,0),we=U.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(C.setTexture2DArray(N,0),we=U.TEXTURE_2D_ARRAY):(C.setTexture2D(N,0),we=U.TEXTURE_2D),U.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,N.flipY),U.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),U.pixelStorei(U.UNPACK_ALIGNMENT,N.unpackAlignment);const si=U.getParameter(U.UNPACK_ROW_LENGTH),Je=U.getParameter(U.UNPACK_IMAGE_HEIGHT),Ln=U.getParameter(U.UNPACK_SKIP_PIXELS),kr=U.getParameter(U.UNPACK_SKIP_ROWS),un=U.getParameter(U.UNPACK_SKIP_IMAGES);U.pixelStorei(U.UNPACK_ROW_LENGTH,lt.width),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,lt.height),U.pixelStorei(U.UNPACK_SKIP_PIXELS,ye),U.pixelStorei(U.UNPACK_SKIP_ROWS,Pe),U.pixelStorei(U.UNPACK_SKIP_IMAGES,Ue);const $s=E.isDataArrayTexture||E.isData3DTexture,ct=N.isDataArrayTexture||N.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Xn=Te.get(E),Ys=Te.get(N),Sn=Te.get(Xn.__renderTarget),Ai=Te.get(Ys.__renderTarget);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,Sn.__webglFramebuffer),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,Ai.__webglFramebuffer);for(let Ci=0;Ci<xe;Ci++)$s&&U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(E).__webglTexture,I,Ue+Ci),E.isDepthTexture?(ct&&U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Te.get(N).__webglTexture,I,st+Ci),U.blitFramebuffer(ye,Pe,re,fe,Se,Ke,re,fe,U.DEPTH_BUFFER_BIT,U.NEAREST)):ct?U.copyTexSubImage3D(we,I,Se,Ke,st+Ci,ye,Pe,re,fe):U.copyTexSubImage2D(we,I,Se,Ke,st+Ci,ye,Pe,re,fe);Ae.bindFramebuffer(U.READ_FRAMEBUFFER,null),Ae.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else ct?E.isDataTexture||E.isData3DTexture?U.texSubImage3D(we,I,Se,Ke,st,re,fe,xe,en,Qe,lt.data):N.isCompressedArrayTexture?U.compressedTexSubImage3D(we,I,Se,Ke,st,re,fe,xe,en,lt.data):U.texSubImage3D(we,I,Se,Ke,st,re,fe,xe,en,Qe,lt):E.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,I,Se,Ke,re,fe,en,Qe,lt.data):E.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,I,Se,Ke,lt.width,lt.height,en,lt.data):U.texSubImage2D(U.TEXTURE_2D,I,Se,Ke,re,fe,en,Qe,lt);U.pixelStorei(U.UNPACK_ROW_LENGTH,si),U.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Je),U.pixelStorei(U.UNPACK_SKIP_PIXELS,Ln),U.pixelStorei(U.UNPACK_SKIP_ROWS,kr),U.pixelStorei(U.UNPACK_SKIP_IMAGES,un),I===0&&N.generateMipmaps&&U.generateMipmap(we),Ae.unbindTexture()},this.copyTextureToTexture3D=function(E,N,z=null,B=null,I=0){return E.isTexture!==!0&&(mo("WebGLRenderer: copyTextureToTexture3D function signature has changed."),z=arguments[0]||null,B=arguments[1]||null,E=arguments[2],N=arguments[3],I=arguments[4]||0),mo('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,z,B,I)},this.initRenderTarget=function(E){Te.get(E).__webglFramebuffer===void 0&&C.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?C.setTextureCube(E,0):E.isData3DTexture?C.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?C.setTexture2DArray(E,0):C.setTexture2D(E,0),Ae.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,Ae.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return _i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorspace=Ye._getDrawingBufferColorSpace(e),n.unpackColorSpace=Ye._getUnpackColorSpace()}}class av extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new jn,this.environmentIntensity=1,this.environmentRotation=new jn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class lh extends ii{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],p=[];let _=0;const y=[],m=i/2;let f=0;g(),o===!1&&(e>0&&v(!0),n>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new Wt(h,3)),this.setAttribute("normal",new Wt(d,3)),this.setAttribute("uv",new Wt(p,2));function g(){const x=new O,b=new O;let A=0;const T=(n-e)/i;for(let R=0;R<=s;R++){const w=[],S=R/s,P=S*(n-e)+e;for(let H=0;H<=r;H++){const k=H/r,W=k*l+a,$=Math.sin(W),G=Math.cos(W);b.x=P*$,b.y=-S*i+m,b.z=P*G,h.push(b.x,b.y,b.z),x.set($,T,G).normalize(),d.push(x.x,x.y,x.z),p.push(k,1-S),w.push(_++)}y.push(w)}for(let R=0;R<r;R++)for(let w=0;w<s;w++){const S=y[w][R],P=y[w+1][R],H=y[w+1][R+1],k=y[w][R+1];(e>0||w!==0)&&(u.push(S,P,k),A+=3),(n>0||w!==s-1)&&(u.push(P,H,k),A+=3)}c.addGroup(f,A,0),f+=A}function v(x){const b=_,A=new De,T=new O;let R=0;const w=x===!0?e:n,S=x===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,m*S,0),d.push(0,S,0),p.push(.5,.5),_++;const P=_;for(let H=0;H<=r;H++){const W=H/r*l+a,$=Math.cos(W),G=Math.sin(W);T.x=w*G,T.y=m*S,T.z=w*$,h.push(T.x,T.y,T.z),d.push(0,S,0),A.x=$*.5+.5,A.y=G*.5*S+.5,p.push(A.x,A.y),_++}for(let H=0;H<r;H++){const k=b+H,W=P+H;x===!0?u.push(W,W+1,k):u.push(W+1,W,k),R+=3}c.addGroup(f,R,x===!0?1:2),f+=R}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new lh(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ch extends lh{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new ch(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class uh extends ii{constructor(e=.5,n=1,i=32,r=1,s=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:r,thetaStart:s,thetaLength:o},i=Math.max(3,i),r=Math.max(1,r);const a=[],l=[],c=[],u=[];let h=e;const d=(n-e)/r,p=new O,_=new De;for(let y=0;y<=r;y++){for(let m=0;m<=i;m++){const f=s+m/i*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),_.x=(p.x/n+1)/2,_.y=(p.y/n+1)/2,u.push(_.x,_.y)}h+=d}for(let y=0;y<r;y++){const m=y*(i+1);for(let f=0;f<i;f++){const g=f+m,v=g,x=g+i+1,b=g+i+2,A=g+1;a.push(v,x,A),a.push(x,b,A)}}this.setIndex(a),this.setAttribute("position",new Wt(l,3)),this.setAttribute("normal",new Wt(c,3)),this.setAttribute("uv",new Wt(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new uh(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class oa extends ii{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new O,d=new O,p=[],_=[],y=[],m=[];for(let f=0;f<=i;f++){const g=[],v=f/i;let x=0;f===0&&o===0?x=.5/n:f===i&&l===Math.PI&&(x=-.5/n);for(let b=0;b<=n;b++){const A=b/n;h.x=-e*Math.cos(r+A*s)*Math.sin(o+v*a),h.y=e*Math.cos(o+v*a),h.z=e*Math.sin(r+A*s)*Math.sin(o+v*a),_.push(h.x,h.y,h.z),d.copy(h).normalize(),y.push(d.x,d.y,d.z),m.push(A+x,1-v),g.push(c++)}u.push(g)}for(let f=0;f<i;f++)for(let g=0;g<n;g++){const v=u[f][g+1],x=u[f][g],b=u[f+1][g],A=u[f+1][g+1];(f!==0||o>0)&&p.push(v,x,A),(f!==i-1||l<Math.PI)&&p.push(x,b,A)}this.setIndex(p),this.setAttribute("position",new Wt(_,3)),this.setAttribute("normal",new Wt(y,3)),this.setAttribute("uv",new Wt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new oa(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class IA extends js{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new je(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class UA extends js{static get type(){return"MeshPhongMaterial"}constructor(e){super(),this.isMeshPhongMaterial=!0,this.color=new je(16777215),this.specular=new je(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new je(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ih,this.normalScale=new De(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new jn,this.combine=qd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const kl={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class OA{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],_=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return _}return null}}}const FA=new OA;class fh{constructor(e){this.manager=e!==void 0?e:FA,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}fh.DEFAULT_MATERIAL_NAME="__DEFAULT";class kA extends fh{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=kl.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Yo("img");function l(){u(),kl.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class lv extends fh{constructor(e){super(e)}load(e,n,i,r){const s=new Kt,o=new kA(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class zA extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new je(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}const hu=new yt,Nm=new O,Im=new O;class BA{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new De(512,512),this.map=null,this.mapPass=null,this.matrix=new yt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new oh,this._frameExtents=new De(1,1),this._viewportCount=1,this._viewports=[new xt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Nm.setFromMatrixPosition(e.matrixWorld),n.position.copy(Nm),Im.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Im),n.updateMatrixWorld(),hu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hu),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class HA extends BA{constructor(){super(new ev(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class zl extends zA{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new HA}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Um{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Vt(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class VA extends Fr{constructor(e,n=null){super(),this.object=e,this.domElement=n,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zd);function GA(){return te.jsxs(te.Fragment,{children:[te.jsx("div",{className:"fixed left-1/2 bottom-4 transform -translate-x-1/2 hidden md:flex flex-col space-y-2 w-6 h-9 rounded-3xl border-[0.2rem] border-tertiary overflow-hidden"}),te.jsx("div",{className:"scrollOnMouse animate-scrollAnimation fixed left-1/2 transform -translate-x-1/2 flex-col space-y-2 rounded-3xl w-1 h-2 bg-tertiary overflow-hidden bottom-8 hidden md:flex"})]})}const WA=({sections:t})=>{const[e,n]=Fe.useState(!1),[i,r]=Fe.useState(!0),[s,o]=Fe.useState(!1),a=Fe.useRef(null),l=()=>{n(!e)},c=()=>{o(!s)};Fe.useEffect(()=>{const h=document.getElementById("hamburger"),d=()=>{r(!1),l(),c(),h.classList.toggle("is-active")};h&&h.addEventListener("click",d);const p=_=>{a.current&&!a.current.contains(_.target)&&!h.contains(_.target)&&(n(!1),o(!1),h.classList.remove("is-active"))};return document.addEventListener("mousedown",p),()=>{h&&h.removeEventListener("click",d),document.removeEventListener("mousedown",p)}},[e]);const u=h=>{const d=document.querySelectorAll(".section")[h];d&&(d.scrollIntoView({behavior:"smooth"}),n(!1),o(!1),document.getElementById("hamburger").classList.remove("is-active"))};return te.jsxs("div",{className:"hamburger-container z-50",children:[te.jsxs("div",{ref:a,className:`panel fixed flex flex-col justify-between top-0 ${e?"right-0 smoothOpen":i?"-right-96":"smoothClose -right-96"} w-96 bg-section-color brightness-150 h-full shadow-lg py-24 px-4`,children:[te.jsx("div",{className:"w-10/12 h-5/6 flex flex-col justify-center brightness-50",children:t.map((h,d)=>te.jsx("div",{className:"flex items-center h-20 cursor-pointer",onClick:()=>u(d),children:te.jsx("p",{className:"font-bold text-3xl text-text-color hover:text-primary transition ease-in duration-200 cursor-hover",children:h})},d))}),te.jsxs("div",{className:"h-20 brightness-50",children:[te.jsx("hr",{className:"w-3/4 h-[2px] my-4 bg-primary border-0"}),te.jsx("p",{className:"text-lg text-text-color",children:"Mathys Farineau - 2024"})]})]}),te.jsx("div",{className:"hamburger ml-4 md:ml-8 grid items-center justify-center grid-cols-3 gap-1 cursor-pointer cursor-hover transition duration-500 ease-in",id:"hamburger",children:[...Array(9)].map((h,d)=>te.jsx("span",{className:"circle w-2 h-2 border-2 border-primary rounded-3xl transition duration-200 ease-in cursor-hover"},d))})]})},jA=new Map([["bold",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M224.49,136.49l-72,72a12,12,0,0,1-17-17L187,140H40a12,12,0,0,1,0-24H187L135.51,64.48a12,12,0,0,1,17-17l72,72A12,12,0,0,1,224.49,136.49Z"}))],["duotone",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M216,128l-72,72V56Z",opacity:"0.2"}),ve.createElement("path",{d:"M221.66,122.34l-72-72A8,8,0,0,0,136,56v64H40a8,8,0,0,0,0,16h96v64a8,8,0,0,0,13.66,5.66l72-72A8,8,0,0,0,221.66,122.34ZM152,180.69V75.31L204.69,128Z"}))],["fill",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M221.66,133.66l-72,72A8,8,0,0,1,136,200V136H40a8,8,0,0,1,0-16h96V56a8,8,0,0,1,13.66-5.66l72,72A8,8,0,0,1,221.66,133.66Z"}))],["light",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M220.24,132.24l-72,72a6,6,0,0,1-8.48-8.48L201.51,134H40a6,6,0,0,1,0-12H201.51L139.76,60.24a6,6,0,0,1,8.48-8.48l72,72A6,6,0,0,1,220.24,132.24Z"}))],["regular",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"}))],["thin",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M218.83,130.83l-72,72a4,4,0,0,1-5.66-5.66L206.34,132H40a4,4,0,0,1,0-8H206.34L141.17,58.83a4,4,0,0,1,5.66-5.66l72,72A4,4,0,0,1,218.83,130.83Z"}))]]),XA=new Map([["bold",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M236.37,139.4a12,12,0,0,0-12-3A84.07,84.07,0,0,1,119.6,31.59a12,12,0,0,0-15-15A108.86,108.86,0,0,0,49.69,55.07,108,108,0,0,0,136,228a107.09,107.09,0,0,0,64.93-21.69,108.86,108.86,0,0,0,38.44-54.94A12,12,0,0,0,236.37,139.4Zm-49.88,47.74A84,84,0,0,1,68.86,69.51,84.93,84.93,0,0,1,92.27,48.29Q92,52.13,92,56A108.12,108.12,0,0,0,200,164q3.87,0,7.71-.27A84.79,84.79,0,0,1,186.49,187.14Z"}))],["duotone",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M227.89,147.89A96,96,0,1,1,108.11,28.11,96.09,96.09,0,0,0,227.89,147.89Z",opacity:"0.2"}),ve.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["fill",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M235.54,150.21a104.84,104.84,0,0,1-37,52.91A104,104,0,0,1,32,120,103.09,103.09,0,0,1,52.88,57.48a104.84,104.84,0,0,1,52.91-37,8,8,0,0,1,10,10,88.08,88.08,0,0,0,109.8,109.8,8,8,0,0,1,10,10Z"}))],["light",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M232.13,143.64a6,6,0,0,0-6-1.49A90.07,90.07,0,0,1,113.86,29.85a6,6,0,0,0-7.49-7.48A102.88,102.88,0,0,0,54.48,58.68,102,102,0,0,0,197.32,201.52a102.88,102.88,0,0,0,36.31-51.89A6,6,0,0,0,232.13,143.64Zm-42,48.29a90,90,0,0,1-126-126A90.9,90.9,0,0,1,99.65,37.66,102.06,102.06,0,0,0,218.34,156.35,90.9,90.9,0,0,1,190.1,191.93Z"}))],["regular",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M233.54,142.23a8,8,0,0,0-8-2,88.08,88.08,0,0,1-109.8-109.8,8,8,0,0,0-10-10,104.84,104.84,0,0,0-52.91,37A104,104,0,0,0,136,224a103.09,103.09,0,0,0,62.52-20.88,104.84,104.84,0,0,0,37-52.91A8,8,0,0,0,233.54,142.23ZM188.9,190.34A88,88,0,0,1,65.66,67.11a89,89,0,0,1,31.4-26A106,106,0,0,0,96,56,104.11,104.11,0,0,0,200,160a106,106,0,0,0,14.92-1.06A89,89,0,0,1,188.9,190.34Z"}))],["thin",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M230.72,145.06a4,4,0,0,0-4-1A92.08,92.08,0,0,1,111.94,29.27a4,4,0,0,0-5-5A100.78,100.78,0,0,0,56.08,59.88a100,100,0,0,0,140,140,100.78,100.78,0,0,0,35.59-50.87A4,4,0,0,0,230.72,145.06ZM191.3,193.53A92,92,0,0,1,62.47,64.7a93,93,0,0,1,39.88-30.35,100.09,100.09,0,0,0,119.3,119.3A93,93,0,0,1,191.3,193.53Z"}))]]),$A=new Map([["bold",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M116,36V20a12,12,0,0,1,24,0V36a12,12,0,0,1-24,0Zm80,92a68,68,0,1,1-68-68A68.07,68.07,0,0,1,196,128Zm-24,0a44,44,0,1,0-44,44A44.05,44.05,0,0,0,172,128ZM51.51,68.49a12,12,0,1,0,17-17l-12-12a12,12,0,0,0-17,17Zm0,119-12,12a12,12,0,0,0,17,17l12-12a12,12,0,1,0-17-17ZM196,72a12,12,0,0,0,8.49-3.51l12-12a12,12,0,0,0-17-17l-12,12A12,12,0,0,0,196,72Zm8.49,115.51a12,12,0,0,0-17,17l12,12a12,12,0,0,0,17-17ZM48,128a12,12,0,0,0-12-12H20a12,12,0,0,0,0,24H36A12,12,0,0,0,48,128Zm80,80a12,12,0,0,0-12,12v16a12,12,0,0,0,24,0V220A12,12,0,0,0,128,208Zm108-92H220a12,12,0,0,0,0,24h16a12,12,0,0,0,0-24Z"}))],["duotone",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M184,128a56,56,0,1,1-56-56A56,56,0,0,1,184,128Z",opacity:"0.2"}),ve.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["fill",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm8,24a64,64,0,1,0,64,64A64.07,64.07,0,0,0,128,64ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["light",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M122,40V16a6,6,0,0,1,12,0V40a6,6,0,0,1-12,0Zm68,88a62,62,0,1,1-62-62A62.07,62.07,0,0,1,190,128Zm-12,0a50,50,0,1,0-50,50A50.06,50.06,0,0,0,178,128ZM59.76,68.24a6,6,0,1,0,8.48-8.48l-16-16a6,6,0,0,0-8.48,8.48Zm0,119.52-16,16a6,6,0,1,0,8.48,8.48l16-16a6,6,0,1,0-8.48-8.48ZM192,70a6,6,0,0,0,4.24-1.76l16-16a6,6,0,0,0-8.48-8.48l-16,16A6,6,0,0,0,192,70Zm4.24,117.76a6,6,0,0,0-8.48,8.48l16,16a6,6,0,0,0,8.48-8.48ZM46,128a6,6,0,0,0-6-6H16a6,6,0,0,0,0,12H40A6,6,0,0,0,46,128Zm82,82a6,6,0,0,0-6,6v24a6,6,0,0,0,12,0V216A6,6,0,0,0,128,210Zm112-88H216a6,6,0,0,0,0,12h24a6,6,0,0,0,0-12Z"}))],["regular",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M120,40V16a8,8,0,0,1,16,0V40a8,8,0,0,1-16,0Zm72,88a64,64,0,1,1-64-64A64.07,64.07,0,0,1,192,128Zm-16,0a48,48,0,1,0-48,48A48.05,48.05,0,0,0,176,128ZM58.34,69.66A8,8,0,0,0,69.66,58.34l-16-16A8,8,0,0,0,42.34,53.66Zm0,116.68-16,16a8,8,0,0,0,11.32,11.32l16-16a8,8,0,0,0-11.32-11.32ZM192,72a8,8,0,0,0,5.66-2.34l16-16a8,8,0,0,0-11.32-11.32l-16,16A8,8,0,0,0,192,72Zm5.66,114.34a8,8,0,0,0-11.32,11.32l16,16a8,8,0,0,0,11.32-11.32ZM48,128a8,8,0,0,0-8-8H16a8,8,0,0,0,0,16H40A8,8,0,0,0,48,128Zm80,80a8,8,0,0,0-8,8v24a8,8,0,0,0,16,0V216A8,8,0,0,0,128,208Zm112-88H216a8,8,0,0,0,0,16h24a8,8,0,0,0,0-16Z"}))],["thin",ve.createElement(ve.Fragment,null,ve.createElement("path",{d:"M124,40V16a4,4,0,0,1,8,0V40a4,4,0,0,1-8,0Zm64,88a60,60,0,1,1-60-60A60.07,60.07,0,0,1,188,128Zm-8,0a52,52,0,1,0-52,52A52.06,52.06,0,0,0,180,128ZM61.17,66.83a4,4,0,0,0,5.66-5.66l-16-16a4,4,0,0,0-5.66,5.66Zm0,122.34-16,16a4,4,0,0,0,5.66,5.66l16-16a4,4,0,0,0-5.66-5.66ZM192,68a4,4,0,0,0,2.83-1.17l16-16a4,4,0,1,0-5.66-5.66l-16,16A4,4,0,0,0,192,68Zm2.83,121.17a4,4,0,0,0-5.66,5.66l16,16a4,4,0,0,0,5.66-5.66ZM40,124H16a4,4,0,0,0,0,8H40a4,4,0,0,0,0-8Zm88,88a4,4,0,0,0-4,4v24a4,4,0,0,0,8,0V216A4,4,0,0,0,128,212Zm112-88H216a4,4,0,0,0,0,8h24a4,4,0,0,0,0-8Z"}))]]),YA=Fe.createContext({color:"currentColor",size:"1em",weight:"regular",mirrored:!1});var ZA=Object.defineProperty,Bl=Object.getOwnPropertySymbols,cv=Object.prototype.hasOwnProperty,uv=Object.prototype.propertyIsEnumerable,Om=(t,e,n)=>e in t?ZA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fm=(t,e)=>{for(var n in e||(e={}))cv.call(e,n)&&Om(t,n,e[n]);if(Bl)for(var n of Bl(e))uv.call(e,n)&&Om(t,n,e[n]);return t},km=(t,e)=>{var n={};for(var i in t)cv.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(t!=null&&Bl)for(var i of Bl(t))e.indexOf(i)<0&&uv.call(t,i)&&(n[i]=t[i]);return n};const fv=Fe.forwardRef((t,e)=>{const n=t,{alt:i,color:r,size:s,weight:o,mirrored:a,children:l,weights:c}=n,u=km(n,["alt","color","size","weight","mirrored","children","weights"]),h=Fe.useContext(YA),{color:d="currentColor",size:p,weight:_="regular",mirrored:y=!1}=h,m=km(h,["color","size","weight","mirrored"]);return ve.createElement("svg",Fm(Fm({ref:e,xmlns:"http://www.w3.org/2000/svg",width:s??p,height:s??p,fill:r??d,viewBox:"0 0 256 256",transform:a||y?"scale(-1, 1)":void 0},m),u),!!i&&ve.createElement("title",null,i),l,c.get(o??_))});fv.displayName="IconBase";const dh=fv;var qA=Object.defineProperty,KA=Object.defineProperties,QA=Object.getOwnPropertyDescriptors,zm=Object.getOwnPropertySymbols,JA=Object.prototype.hasOwnProperty,e2=Object.prototype.propertyIsEnumerable,Bm=(t,e,n)=>e in t?qA(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,t2=(t,e)=>{for(var n in e||(e={}))JA.call(e,n)&&Bm(t,n,e[n]);if(zm)for(var n of zm(e))e2.call(e,n)&&Bm(t,n,e[n]);return t},n2=(t,e)=>KA(t,QA(e));const dv=Fe.forwardRef((t,e)=>ve.createElement(dh,n2(t2({ref:e},t),{weights:jA})));dv.displayName="ArrowRight";var i2=Object.defineProperty,r2=Object.defineProperties,s2=Object.getOwnPropertyDescriptors,Hm=Object.getOwnPropertySymbols,o2=Object.prototype.hasOwnProperty,a2=Object.prototype.propertyIsEnumerable,Vm=(t,e,n)=>e in t?i2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,l2=(t,e)=>{for(var n in e||(e={}))o2.call(e,n)&&Vm(t,n,e[n]);if(Hm)for(var n of Hm(e))a2.call(e,n)&&Vm(t,n,e[n]);return t},c2=(t,e)=>r2(t,s2(e));const hv=Fe.forwardRef((t,e)=>ve.createElement(dh,c2(l2({ref:e},t),{weights:XA})));hv.displayName="Moon";var u2=Object.defineProperty,f2=Object.defineProperties,d2=Object.getOwnPropertyDescriptors,Gm=Object.getOwnPropertySymbols,h2=Object.prototype.hasOwnProperty,p2=Object.prototype.propertyIsEnumerable,Wm=(t,e,n)=>e in t?u2(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,m2=(t,e)=>{for(var n in e||(e={}))h2.call(e,n)&&Wm(t,n,e[n]);if(Gm)for(var n of Gm(e))p2.call(e,n)&&Wm(t,n,e[n]);return t},g2=(t,e)=>f2(t,d2(e));const pv=Fe.forwardRef((t,e)=>ve.createElement(dh,g2(m2({ref:e},t),{weights:$A})));pv.displayName="Sun";const _2=()=>{const[t,e]=Fe.useState(!1);Fe.useEffect(()=>{const i=localStorage.getItem("dark-mode")==="true";e(i),i&&document.querySelector("html").classList.add("dark")},[]);const n=()=>{const i=document.querySelector("html");i.classList.toggle("dark");const r=i.classList.contains("dark");e(r),localStorage.setItem("dark-mode",r.toString())};return te.jsx(te.Fragment,{children:t?te.jsx(pv,{size:22,color:"var(--color-primary)",className:"cursor-pointer cursor-hover fade-in",onClick:n}):te.jsx(hv,{size:22,color:"var(--color-primary)",className:"cursor-pointer cursor-hover fade-in",onClick:n})})},v2=({sections:t})=>{const{t:e}=ta();return te.jsx(te.Fragment,{children:te.jsxs("div",{className:"flex flex-col h-full w-10/12 py-10 md:h-5/6 absolute z-10",children:[te.jsxs("nav",{className:"flex justify-between w-full items-center h-12",children:[te.jsx("div",{className:"border border-primary rounded-3xl px-3 py-1",children:te.jsx("p",{className:"text-xs md:text-sm text-primary",children:"Full-Stack developper"})}),te.jsxs("div",{className:"flex items-center",children:[te.jsx(_2,{}),te.jsx(_1,{}),te.jsx(WA,{sections:t})]})]}),te.jsxs("div",{className:"flex flex-col justify-center h-full items-center text-center",children:[te.jsx("h1",{className:"text-3xl lg:text-7xl font-bold text-primary",children:e("heroSection_title_1")}),te.jsxs("div",{className:"my-4 text-center",children:[te.jsx("h2",{className:"text-sm lg:text-lg text-tertiary",children:e("heroSection_legend_1")}),te.jsx("h2",{className:"text-sm lg:text-lg text-tertiary",children:e("heroSection_legend_2")})]})]})]})})},jm={type:"change"},hh={type:"start"},mv={type:"end"},$a=new j_,Xm=new Fi,x2=Math.cos(70*SS.DEG2RAD),Tt=new O,tn=2*Math.PI,it={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pu=1e-6;class gv extends VA{constructor(e,n=null){super(e,n),this.state=it.NONE,this.enabled=!0,this.target=new O,this.cursor=new O,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Es.ROTATE,MIDDLE:Es.DOLLY,RIGHT:Es.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new O,this._lastQuaternion=new Ir,this._lastTargetPosition=new O,this._quat=new Ir().setFromUnitVectors(e.up,new O(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Um,this._sphericalDelta=new Um,this._scale=1,this._panOffset=new O,this._rotateStart=new De,this._rotateEnd=new De,this._rotateDelta=new De,this._panStart=new De,this._panEnd=new De,this._panDelta=new De,this._dollyStart=new De,this._dollyEnd=new De,this._dollyDelta=new De,this._dollyDirection=new O,this._mouse=new De,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=S2.bind(this),this._onPointerDown=y2.bind(this),this._onPointerUp=M2.bind(this),this._onContextMenu=b2.bind(this),this._onMouseWheel=T2.bind(this),this._onKeyDown=A2.bind(this),this._onTouchStart=C2.bind(this),this._onTouchMove=R2.bind(this),this._onMouseDown=E2.bind(this),this._onMouseMove=w2.bind(this),this._interceptControlDown=P2.bind(this),this._interceptControlUp=L2.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(jm),this.update(),this.state=it.NONE}update(e=null){const n=this.object.position;Tt.copy(n).sub(this.target),Tt.applyQuaternion(this._quat),this._spherical.setFromVector3(Tt),this.autoRotate&&this.state===it.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(i)&&isFinite(r)&&(i<-Math.PI?i+=tn:i>Math.PI&&(i-=tn),r<-Math.PI?r+=tn:r>Math.PI&&(r-=tn),i<=r?this._spherical.theta=Math.max(i,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+r)/2?Math.max(i,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(Tt.setFromSpherical(this._spherical),Tt.applyQuaternion(this._quatInverse),n.copy(this.target).add(Tt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=Tt.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const a=new O(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const c=new O(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=Tt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):($a.origin.copy(this.object.position),$a.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot($a.direction))<x2?this.object.lookAt(this.target):(Xm.setFromNormalAndCoplanarPoint(this.object.up,this.target),$a.intersectPlane(Xm,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>pu||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pu||this._lastTargetPosition.distanceToSquared(this.target)>pu?(this.dispatchEvent(jm),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?tn/60*this.autoRotateSpeed*e:tn/60/60*this.autoRotateSpeed}_getZoomScale(e){const n=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*n)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,n){Tt.setFromMatrixColumn(n,0),Tt.multiplyScalar(-e),this._panOffset.add(Tt)}_panUp(e,n){this.screenSpacePanning===!0?Tt.setFromMatrixColumn(n,1):(Tt.setFromMatrixColumn(n,0),Tt.crossVectors(this.object.up,Tt)),Tt.multiplyScalar(e),this._panOffset.add(Tt)}_pan(e,n){const i=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;Tt.copy(r).sub(this.target);let s=Tt.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*s/i.clientHeight,this.object.matrix),this._panUp(2*n*s/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(n*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,n){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),r=e-i.left,s=n-i.top,o=i.width,a=i.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let n=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),n=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateUp(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),n=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),n=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this._rotateLeft(-tn*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),n=!0;break}n&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._rotateStart.set(i,r)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panStart.set(i,r)}}_handleTouchStartDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),r=.5*(e.pageX+i.x),s=.5*(e.pageY+i.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const n=this.domElement;this._rotateLeft(tn*this._rotateDelta.x/n.clientHeight),this._rotateUp(tn*this._rotateDelta.y/n.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const n=this._getSecondPointerPosition(e),i=.5*(e.pageX+n.x),r=.5*(e.pageY+n.y);this._panEnd.set(i,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const n=this._getSecondPointerPosition(e),i=e.pageX-n.x,r=e.pageY-n.y,s=Math.sqrt(i*i+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(e.pageX+n.x)*.5,a=(e.pageY+n.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId){this._pointers.splice(n,1);return}}_isTrackingPointer(e){for(let n=0;n<this._pointers.length;n++)if(this._pointers[n]==e.pointerId)return!0;return!1}_trackPointer(e){let n=this._pointerPositions[e.pointerId];n===void 0&&(n=new De,this._pointerPositions[e.pointerId]=n),n.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const n=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[n]}_customWheelEvent(e){const n=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(n){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function y2(t){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(t.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(t)&&(this._addPointer(t),t.pointerType==="touch"?this._onTouchStart(t):this._onMouseDown(t)))}function S2(t){this.enabled!==!1&&(t.pointerType==="touch"?this._onTouchMove(t):this._onMouseMove(t))}function M2(t){switch(this._removePointer(t),this._pointers.length){case 0:this.domElement.releasePointerCapture(t.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(mv),this.state=it.NONE;break;case 1:const e=this._pointers[0],n=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:n.x,pageY:n.y});break}}function E2(t){let e;switch(t.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Es.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(t),this.state=it.DOLLY;break;case Es.ROTATE:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}break;case Es.PAN:if(t.ctrlKey||t.metaKey||t.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(t),this.state=it.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(t),this.state=it.PAN}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(hh)}function w2(t){switch(this.state){case it.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(t);break;case it.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(t);break;case it.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(t);break}}function T2(t){this.enabled===!1||this.enableZoom===!1||this.state!==it.NONE||(t.preventDefault(),this.dispatchEvent(hh),this._handleMouseWheel(this._customWheelEvent(t)),this.dispatchEvent(mv))}function A2(t){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(t)}function C2(t){switch(this._trackPointer(t),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(t),this.state=it.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(t),this.state=it.TOUCH_PAN;break;default:this.state=it.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(t),this.state=it.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(t),this.state=it.TOUCH_DOLLY_ROTATE;break;default:this.state=it.NONE}break;default:this.state=it.NONE}this.state!==it.NONE&&this.dispatchEvent(hh)}function R2(t){switch(this._trackPointer(t),this.state){case it.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(t),this.update();break;case it.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(t),this.update();break;case it.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(t),this.update();break;case it.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(t),this.update();break;default:this.state=it.NONE}}function b2(t){this.enabled!==!1&&t.preventDefault()}function P2(t){t.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function L2(t){t.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}kl.enabled=!0;const $m=window.innerWidth<768?2:2.5,D2=({article:t,icons:e})=>{const n=Fe.useRef(null);return Fe.useEffect(()=>{const i=n.current,r=new av,s=N2(),o=I2();i.appendChild(o.domElement),O2(r);const a=F2(r),l=k2(r,e);z2(r,e);const c=B2(r),u=H2(s,o);return V2(o,r,s,a,l,c,u),()=>{i.removeChild(o.domElement)}},[t,e]),te.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})},N2=()=>{const t=new pn(70,1.5,.1,1e3);return t.position.set(0,0,6),t},I2=()=>{const t=new ov({alpha:!0,antialias:!0});return U2(t),t},U2=t=>{window.innerWidth<1024?t.setSize(700,466):t.setSize(900,600)},O2=t=>{const e=new zl(16777215,5);e.position.set(-5,-2,0).normalize(),t.add(e);const n=new zl(16777215,2);n.position.set(10,2,5).normalize(),t.add(n)},F2=t=>{const e=new oa(1,128,128),n=new ra({color:14845163}),i=new sn(e,n);return t.add(i),i},k2=(t,e)=>e.map((n,i)=>{const r=new lv().load(n.src),s=new oa(.35,16,16),o=new IA({map:r}),a=new sn(s,o),c=2+Math.floor(i/Math.ceil(e.length/e.length))*.7,u=i/e.length*2*Math.PI;a.position.set(c*Math.cos(u),c*Math.sin(u),0);const h=new Er;return h.add(a),h.rotation.set(Math.PI/3,Math.PI/3,0),t.add(h),h}),z2=(t,e)=>{e.map((n,i)=>{const r=Math.floor(i/Math.ceil(e.length/e.length)),s=2+r*.7-.01,o=2+r*.7+.01,a=i%2===0?8214527:11903703,l=new uh(s,o,128),c=new ra({color:a,side:Kn,opacity:.5,transparent:!0}),u=new sn(l,c),h=new Er;return h.add(u),h.rotation.set(Math.PI/3,Math.PI/3,0),t.add(h),h})},B2=t=>{const e=new Er,n=new ch(.1,.3,32),i=new ra({color:3158844}),r=new sn(n,i);return r.position.set($m*Math.cos(Math.PI/2),0,$m*Math.sin(Math.PI/2)),e.add(r),t.add(e),e},H2=(t,e)=>{const n=new gv(t,e.domElement);return n.enableDamping=!0,n.minDistance=5,n.maxDistance=10,n},V2=(t,e,n,i,r,s,o)=>{const a=()=>{requestAnimationFrame(a),i.rotation.z+=.01,s.rotation.y+=.01,r.forEach((l,c)=>{l.rotation.z+=.01/(1+c*.7),l.children[0].rotation.z+=.01}),o.update(),t.render(e,n)};a()};kl.enabled=!0;const G2=({article:t,icons:e})=>{const n=Fe.useRef(null);return Fe.useEffect(()=>{const i=n.current,r=new av,s=X2(),o=W2();i.appendChild(o.domElement),$2(r),Y2(r,e);const a=q2(s,o);return K2(o,r,s,a),()=>{i.removeChild(o.domElement)}},[t,e]),te.jsx("div",{ref:n,style:{width:"100%",height:"100%"}})},W2=()=>{const t=new ov({alpha:!0,antialias:!0});return j2(t),t},j2=t=>{window.innerWidth<1024?t.setSize(700,466):t.setSize(900,600)},X2=()=>{const t=new pn(70,1.5,.1,1e3);return t.position.set(0,0,6),t},$2=t=>{const e=new zl(16777215,4);e.position.set(0,0,5).normalize(),t.add(e);const n=new zl(16777215,3);n.position.set(0,2,-5).normalize(),t.add(n)},Y2=(t,e)=>{const n=window.innerWidth<=768;return e.map((i,r)=>{const s=Z2(i.src,r);return n&&(s.position.x=r%2*2-1,s.position.y=Math.floor(r/2)*2),t.add(s),s})},Z2=(t,e)=>{const n=new oa(.8,16,16),i=new lv().load(t),r=new UA({map:i}),s=new sn(n,r);return s.position.x=e*2-2,s.rotation.y=-Math.PI/2,s},q2=(t,e)=>{const n=new gv(t,e.domElement);return n.enableDamping=!0,n.minDistance=5,n.maxDistance=10,n},K2=(t,e,n,i)=>{const r=()=>{requestAnimationFrame(r),i.update(),t.render(e,n)};r()},Q2=({article:t,articlesNames:e})=>{var o;const[n,i]=Fe.useState(!1);Fe.useEffect(()=>{const a=()=>{window.innerWidth<=768?i(!0):i(!1)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[]);const s=((o=[{name:e[0],icons:[{src:"images/pool_js.png",title:"JavaScript"},{src:"images/pool_tailwindcss.png",title:"Tailwind"},{src:"images/pool_extjs.png",title:"ExtJs"},{src:"images/pool_react.png",title:"React"}]},{name:e[1],icons:[{src:"images/pool_java.png",title:"Java"},{src:"images/pool_php.png",title:"PHP"},{src:"images/pool_spring.png",title:"Spring"},{src:"images/pool_symfony.png",title:"Symfony"}]},{name:e[2],icons:[{src:"images/pool_git.png",title:"Git"},{src:"images/pool_docker.png",title:"Docker"},{src:"images/pool_dart.png",title:"Dart"},{src:"images/pool_figma.png",title:"Figma"}]}].find(a=>a.name===t))==null?void 0:o.icons)||[];return te.jsxs("div",{children:[te.jsx("button",{onClick:()=>i(!n),className:"bg-tertiary text-white text-xs px-4 py-2 rounded-3xl absolute bottom-5 left-1/2 -translate-x-1/2 -translate-y-1/2  md:bottom-[unset] md:left-[unset] md:translate-x-[unset] md:translate-y-[unset] md:top-20 md:right-0 transition ease-in duration-300 cursor-hover",children:n?"Afficher le mode Système Solaire":"Afficher le mode Simplifié"}),n?te.jsx(G2,{article:t,icons:s}):te.jsx(D2,{article:t,icons:s})]})},J2=()=>{const[t,e]=Fe.useState(0);Fe.useState(!1);const{t:n}=ta(),i=[{name:"FRONT-END"},{name:"BACK-END"},{name:n("skillSection_tools")}];return te.jsxs("div",{className:"flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[te.jsx("h1",{className:"text-3xl text-primary text-center md:text-end font-bold",children:n("skillSection_title")}),te.jsxs("div",{className:"w-full h-full flex flex-col py-10 md:py-20 md:flex-row justify-between",children:[te.jsx("div",{className:"w-full h-1/6 md:w-1/4 md:h-full flex flex-row md:flex-col justify-between items-center",children:i.map((r,s)=>te.jsx("div",{onClick:()=>e(s),className:`text-center font-bold text-sm md:text-xl lg:text-4xl w-2/6 md:w-full h-16 md:h-24 mx-2 md:mx-0 flex flex-col justify-center items-center ${s===t?"bg-secondary":"bg-primary hover:bg-primary-hover"} text-slate-50 rounded-3xl cursor-hover transition ease-in duration-300`,children:r.name},s))}),te.jsx("div",{className:"w-full md:w-3/4 h-3/4 md:h-full flex items-center justify-center",children:te.jsx(Q2,{article:i[t].name,articlesNames:i.map(r=>r.name)})})]})]})},eC=()=>{const{t}=ta(),[e,n]=Fe.useState(null),[i,r]=Fe.useState(!1),[s,o]=Fe.useState(null),a=[{name:"HBGG",description:t("projectSection_project_1_desc"),link:"images/hbgg.png"},{name:"Voyo",description:t("projectSection_project_2_desc"),link:"images/voyo.png"},{name:"Portfolio",description:t("projectSection_project_3_desc"),link:"images/portfolio.png"}],l=u=>{s&&(clearTimeout(s),o(null)),r(!1),n(u)},c=()=>{r(!0);const u=setTimeout(()=>n(null),200);o(u)};return te.jsxs("div",{className:"flex flex-col md:px-0 h-full w-10/12 py-10 md:h-5/6 md:py-0 absolute z-10",children:[te.jsx("h1",{className:"text-3xl text-center md:text-end text-primary font-bold",children:t("projectSection_title")}),te.jsxs("div",{className:"h-full w-full flex",children:[te.jsx("div",{className:"h-full w-4/6 hidden md:flex justify-center items-center",children:e&&te.jsx("div",{className:`w-full h-3/4 flex items-center justify-center rounded-3xl ${i?"slide-out":"slide-in"}`,children:te.jsx("img",{src:e.link,alt:e.name,className:`w-3/6 ${i?"smoothUnZoom":"smoothZoom"}`})})}),te.jsx("div",{className:"h-full w-full md:w-2/6 flex flex-col justify-center",children:a.map((u,h)=>te.jsxs("div",{className:"my-6 project cursor-hover",onMouseEnter:()=>l(u),onMouseLeave:c,children:[te.jsxs("div",{className:"flex cursor-hover",children:[te.jsx(dv,{size:32,color:"var(--color-secondary)",weight:"bold",className:"mr-4 project-arrow transform -translate-x-10 ease-cubic duration-500 opacity-0 cursor-hover"}),te.jsxs("div",{className:"h-1/2 w-full flex justify-between items-center cursor-hover",children:[te.jsx("h1",{className:"text-lg md:text-2xl text-primary font-bold project-name transform -translate-x-10 ease-cubic duration-500 cursor-hover ",children:u.name}),te.jsx("p",{className:"text-sm md:text-lg text-text-color cursor-hover",children:u.description})]})]}),te.jsx("hr",{className:"w-full my-2 border-2 border-primary border-opacity-60 cursor-hover"})]},h))})]})]})},tC=()=>{const[t,e]=Fe.useState(!1),n="mathysf84pro@gmail.com",i="https://www.instagram.com/mathys.frn/",r="docs/Mathys_FARINEAU.pdf",s=()=>{navigator.clipboard.writeText(n).then(()=>{e(!0),setTimeout(()=>e(!1),1e3)})};return te.jsxs("div",{className:"flex flex-col w-9/12 py-10 h-3/6 md:py-0 absolute z-10",children:[te.jsx("h1",{className:"text-primary font-bold text-3xl lg:text-7xl",children:"CONTACT"}),te.jsx("hr",{className:"h-[2px] my-4 rounded-3xl bg-primary border-0"}),te.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-4",children:[te.jsx(mu,{title:"RÉSEAUX",content:"mathys.frn",link:i}),te.jsx(mu,{title:"EMAIL",content:n,onClick:s}),t&&te.jsx(nC,{message:"Copié !"}),te.jsx(mu,{title:"CV",content:"Mon CV",link:r})]})]})},mu=({title:t,content:e,onClick:n,link:i})=>te.jsxs("div",{className:"flex items-end",children:[te.jsx("h1",{className:"font-bold text-base lg:text-xl xl:text-3xl text-primary w-20 lg:w-32 xl:w-48",children:t}),i?te.jsx("a",{className:"text-sm lg:text-xl xl:text-3xl text-text-color font-light relative inline-block link-underline decoration-0 after:absolute after:w-0 after:h-[.15rem] after:block after:mt-1 after:right-0 after:bg-primary after:transition[width-right] after:ease-in after:duration-300 hover:after:w-full hover:after:right-0 cursor-hover",href:i,target:"_blank",children:e}):te.jsx("a",{href:"#",className:"text-sm lg:text-xl xl:text-3xl text-text-color font-light relative inline-block decoration-0 link-underline after:absolute after:w-0 after:h-[.15rem] after:block after:mt-1 after:right-0 after:bg-primary after:transition[width-right] after:ease-in after:duration-300 hover:after:w-full hover:after:right-0 cursor-hover",onClick:n,children:e})]}),nC=({message:t})=>te.jsx("div",{className:"absolute mb-2 transform translate-x-[60rem] -translate-y-20 bg-neutral-800 p-2 rounded shadow text-sm",children:te.jsx("div",{className:"relative",children:te.jsx("p",{className:"text-gray-100",children:t})})}),iC=()=>{Fe.useEffect(()=>{const t=document.createElement("div");t.classList.add("cursor"),document.body.appendChild(t);let e=0,n=0,i=0,r=0;const s=h=>{e=h.clientX,n=h.clientY},o=()=>{i+=(e-i)*.25,r+=(n-r)*.25;const h=window.innerWidth-t.offsetWidth,d=window.innerHeight-t.offsetHeight;i=Math.max(0,Math.min(i,h)),r=Math.max(0,Math.min(r,d)),t.style.left=`${i}px`,t.style.top=`${r}px`,requestAnimationFrame(o)},a=h=>{h.target.classList.contains("cursor-hover")&&t.classList.add("hover")},l=h=>{h.target.classList.contains("cursor-hover")&&t.classList.remove("hover")},c=()=>{window.addEventListener("mousemove",s),window.addEventListener("mouseover",a),window.addEventListener("mouseout",l),requestAnimationFrame(o)},u=()=>{window.removeEventListener("mousemove",s),window.removeEventListener("mouseover",a),window.removeEventListener("mouseout",l),document.body.removeChild(t)};return c(),u},[])};function rC(){iC();const{t}=ta(),e=[t("heroSection_title"),t("skillSection_title"),t("projectSection_title"),t("contactSection_title")],n=[{name:t("heroSection_title"),component:te.jsx(v2,{sections:e})},{name:t("skillSection_title"),component:te.jsx(J2,{})},{name:t("projectSection_title"),component:te.jsx(eC,{})},{name:t("contactSection_title"),component:te.jsx(tC,{})}];return te.jsxs("div",{className:"relative sections snap-y snap-mandatory overflow-y-scroll h-screen overflow-hidden bg-section-color ",children:[n.map((i,r)=>te.jsx("section",{className:"section snap-start h-screen text-3xl w-full flex items-center justify-center",children:te.jsx("div",{className:"flex w-screen h-full items-center justify-center",children:i.component})},r)),te.jsx(R_,{sections:n.map(i=>i.component)}),te.jsx(GA,{}),te.jsx("div",{className:"grainy-filter fixed top-0 left-0 w-full h-full pointer-events-none opacity-5 z-50 mix-blend-multiply",style:{background:"url(images/grainy.jpg)"}})]})}const Le=t=>typeof t=="string",ao=()=>{let t,e;const n=new Promise((i,r)=>{t=i,e=r});return n.resolve=t,n.reject=e,n},Ym=t=>t==null?"":""+t,sC=(t,e,n)=>{t.forEach(i=>{e[i]&&(n[i]=e[i])})},oC=/###/g,Zm=t=>t&&t.indexOf("###")>-1?t.replace(oC,"."):t,qm=t=>!t||Le(t),Ro=(t,e,n)=>{const i=Le(e)?e.split("."):e;let r=0;for(;r<i.length-1;){if(qm(t))return{};const s=Zm(i[r]);!t[s]&&n&&(t[s]=new n),Object.prototype.hasOwnProperty.call(t,s)?t=t[s]:t={},++r}return qm(t)?{}:{obj:t,k:Zm(i[r])}},Km=(t,e,n)=>{const{obj:i,k:r}=Ro(t,e,Object);if(i!==void 0||e.length===1){i[r]=n;return}let s=e[e.length-1],o=e.slice(0,e.length-1),a=Ro(t,o,Object);for(;a.obj===void 0&&o.length;)s=`${o[o.length-1]}.${s}`,o=o.slice(0,o.length-1),a=Ro(t,o,Object),a&&a.obj&&typeof a.obj[`${a.k}.${s}`]<"u"&&(a.obj=void 0);a.obj[`${a.k}.${s}`]=n},aC=(t,e,n,i)=>{const{obj:r,k:s}=Ro(t,e,Object);r[s]=r[s]||[],r[s].push(n)},Hl=(t,e)=>{const{obj:n,k:i}=Ro(t,e);if(n)return n[i]},lC=(t,e,n)=>{const i=Hl(t,n);return i!==void 0?i:Hl(e,n)},_v=(t,e,n)=>{for(const i in e)i!=="__proto__"&&i!=="constructor"&&(i in t?Le(t[i])||t[i]instanceof String||Le(e[i])||e[i]instanceof String?n&&(t[i]=e[i]):_v(t[i],e[i],n):t[i]=e[i]);return t},es=t=>t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&");var cC={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;"};const uC=t=>Le(t)?t.replace(/[&<>"'\/]/g,e=>cC[e]):t;class fC{constructor(e){this.capacity=e,this.regExpMap=new Map,this.regExpQueue=[]}getRegExp(e){const n=this.regExpMap.get(e);if(n!==void 0)return n;const i=new RegExp(e);return this.regExpQueue.length===this.capacity&&this.regExpMap.delete(this.regExpQueue.shift()),this.regExpMap.set(e,i),this.regExpQueue.push(e),i}}const dC=[" ",",","?","!",";"],hC=new fC(20),pC=(t,e,n)=>{e=e||"",n=n||"";const i=dC.filter(o=>e.indexOf(o)<0&&n.indexOf(o)<0);if(i.length===0)return!0;const r=hC.getRegExp(`(${i.map(o=>o==="?"?"\\?":o).join("|")})`);let s=!r.test(t);if(!s){const o=t.indexOf(n);o>0&&!r.test(t.substring(0,o))&&(s=!0)}return s},ed=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:".";if(!t)return;if(t[e])return t[e];const i=e.split(n);let r=t;for(let s=0;s<i.length;){if(!r||typeof r!="object")return;let o,a="";for(let l=s;l<i.length;++l)if(l!==s&&(a+=n),a+=i[l],o=r[a],o!==void 0){if(["string","number","boolean"].indexOf(typeof o)>-1&&l<i.length-1)continue;s+=l-s+1;break}r=o}return r},Vl=t=>t&&t.replace("_","-"),mC={type:"logger",log(t){this.output("log",t)},warn(t){this.output("warn",t)},error(t){this.output("error",t)},output(t,e){console&&console[t]&&console[t].apply(console,e)}};class Gl{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.prefix=n.prefix||"i18next:",this.logger=e||mC,this.options=n,this.debug=n.debug}log(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"log","",!0)}warn(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","",!0)}error(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"error","")}deprecate(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return this.forward(n,"warn","WARNING DEPRECATED: ",!0)}forward(e,n,i,r){return r&&!this.debug?null:(Le(e[0])&&(e[0]=`${i}${this.prefix} ${e[0]}`),this.logger[n](e))}create(e){return new Gl(this.logger,{prefix:`${this.prefix}:${e}:`,...this.options})}clone(e){return e=e||this.options,e.prefix=e.prefix||this.prefix,new Gl(this.logger,e)}}var Jn=new Gl;class fc{constructor(){this.observers={}}on(e,n){return e.split(" ").forEach(i=>{this.observers[i]||(this.observers[i]=new Map);const r=this.observers[i].get(n)||0;this.observers[i].set(n,r+1)}),this}off(e,n){if(this.observers[e]){if(!n){delete this.observers[e];return}this.observers[e].delete(n)}}emit(e){for(var n=arguments.length,i=new Array(n>1?n-1:0),r=1;r<n;r++)i[r-1]=arguments[r];this.observers[e]&&Array.from(this.observers[e].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a(...i)}),this.observers["*"]&&Array.from(this.observers["*"].entries()).forEach(o=>{let[a,l]=o;for(let c=0;c<l;c++)a.apply(a,[e,...i])})}}class Qm extends fc{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{ns:["translation"],defaultNS:"translation"};super(),this.data=e||{},this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.options.ignoreJSONStructure===void 0&&(this.options.ignoreJSONStructure=!0)}addNamespaces(e){this.options.ns.indexOf(e)<0&&this.options.ns.push(e)}removeNamespaces(e){const n=this.options.ns.indexOf(e);n>-1&&this.options.ns.splice(n,1)}getResource(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=r.keySeparator!==void 0?r.keySeparator:this.options.keySeparator,o=r.ignoreJSONStructure!==void 0?r.ignoreJSONStructure:this.options.ignoreJSONStructure;let a;e.indexOf(".")>-1?a=e.split("."):(a=[e,n],i&&(Array.isArray(i)?a.push(...i):Le(i)&&s?a.push(...i.split(s)):a.push(i)));const l=Hl(this.data,a);return!l&&!n&&!i&&e.indexOf(".")>-1&&(e=a[0],n=a[1],i=a.slice(2).join(".")),l||!o||!Le(i)?l:ed(this.data&&this.data[e]&&this.data[e][n],i,s)}addResource(e,n,i,r){let s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{silent:!1};const o=s.keySeparator!==void 0?s.keySeparator:this.options.keySeparator;let a=[e,n];i&&(a=a.concat(o?i.split(o):i)),e.indexOf(".")>-1&&(a=e.split("."),r=n,n=a[1]),this.addNamespaces(n),Km(this.data,a,r),s.silent||this.emit("added",e,n,i,r)}addResources(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{silent:!1};for(const s in i)(Le(i[s])||Array.isArray(i[s]))&&this.addResource(e,n,s,i[s],{silent:!0});r.silent||this.emit("added",e,n,i)}addResourceBundle(e,n,i,r,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{silent:!1,skipCopy:!1},a=[e,n];e.indexOf(".")>-1&&(a=e.split("."),r=i,i=n,n=a[1]),this.addNamespaces(n);let l=Hl(this.data,a)||{};o.skipCopy||(i=JSON.parse(JSON.stringify(i))),r?_v(l,i,s):l={...l,...i},Km(this.data,a,l),o.silent||this.emit("added",e,n,i)}removeResourceBundle(e,n){this.hasResourceBundle(e,n)&&delete this.data[e][n],this.removeNamespaces(n),this.emit("removed",e,n)}hasResourceBundle(e,n){return this.getResource(e,n)!==void 0}getResourceBundle(e,n){return n||(n=this.options.defaultNS),this.options.compatibilityAPI==="v1"?{...this.getResource(e,n)}:this.getResource(e,n)}getDataByLanguage(e){return this.data[e]}hasLanguageSomeTranslations(e){const n=this.getDataByLanguage(e);return!!(n&&Object.keys(n)||[]).find(r=>n[r]&&Object.keys(n[r]).length>0)}toJSON(){return this.data}}var vv={processors:{},addPostProcessor(t){this.processors[t.name]=t},handle(t,e,n,i,r){return t.forEach(s=>{this.processors[s]&&(e=this.processors[s].process(e,n,i,r))}),e}};const Jm={};class Wl extends fc{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};super(),sC(["resourceStore","languageUtils","pluralResolver","interpolator","backendConnector","i18nFormat","utils"],e,this),this.options=n,this.options.keySeparator===void 0&&(this.options.keySeparator="."),this.logger=Jn.create("translator")}changeLanguage(e){e&&(this.language=e)}exists(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};if(e==null)return!1;const i=this.resolve(e,n);return i&&i.res!==void 0}extractFromKey(e,n){let i=n.nsSeparator!==void 0?n.nsSeparator:this.options.nsSeparator;i===void 0&&(i=":");const r=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator;let s=n.ns||this.options.defaultNS||[];const o=i&&e.indexOf(i)>-1,a=!this.options.userDefinedKeySeparator&&!n.keySeparator&&!this.options.userDefinedNsSeparator&&!n.nsSeparator&&!pC(e,i,r);if(o&&!a){const l=e.match(this.interpolator.nestingRegexp);if(l&&l.length>0)return{key:e,namespaces:s};const c=e.split(i);(i!==r||i===r&&this.options.ns.indexOf(c[0])>-1)&&(s=c.shift()),e=c.join(r)}return Le(s)&&(s=[s]),{key:e,namespaces:s}}translate(e,n,i){if(typeof n!="object"&&this.options.overloadTranslationOptionHandler&&(n=this.options.overloadTranslationOptionHandler(arguments)),typeof n=="object"&&(n={...n}),n||(n={}),e==null)return"";Array.isArray(e)||(e=[String(e)]);const r=n.returnDetails!==void 0?n.returnDetails:this.options.returnDetails,s=n.keySeparator!==void 0?n.keySeparator:this.options.keySeparator,{key:o,namespaces:a}=this.extractFromKey(e[e.length-1],n),l=a[a.length-1],c=n.lng||this.language,u=n.appendNamespaceToCIMode||this.options.appendNamespaceToCIMode;if(c&&c.toLowerCase()==="cimode"){if(u){const x=n.nsSeparator||this.options.nsSeparator;return r?{res:`${l}${x}${o}`,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:`${l}${x}${o}`}return r?{res:o,usedKey:o,exactUsedKey:o,usedLng:c,usedNS:l,usedParams:this.getUsedParamsDetails(n)}:o}const h=this.resolve(e,n);let d=h&&h.res;const p=h&&h.usedKey||o,_=h&&h.exactUsedKey||o,y=Object.prototype.toString.apply(d),m=["[object Number]","[object Function]","[object RegExp]"],f=n.joinArrays!==void 0?n.joinArrays:this.options.joinArrays,g=!this.i18nFormat||this.i18nFormat.handleAsObject,v=!Le(d)&&typeof d!="boolean"&&typeof d!="number";if(g&&d&&v&&m.indexOf(y)<0&&!(Le(f)&&Array.isArray(d))){if(!n.returnObjects&&!this.options.returnObjects){this.options.returnedObjectHandler||this.logger.warn("accessing an object - but returnObjects options is not enabled!");const x=this.options.returnedObjectHandler?this.options.returnedObjectHandler(p,d,{...n,ns:a}):`key '${o} (${this.language})' returned an object instead of string.`;return r?(h.res=x,h.usedParams=this.getUsedParamsDetails(n),h):x}if(s){const x=Array.isArray(d),b=x?[]:{},A=x?_:p;for(const T in d)if(Object.prototype.hasOwnProperty.call(d,T)){const R=`${A}${s}${T}`;b[T]=this.translate(R,{...n,joinArrays:!1,ns:a}),b[T]===R&&(b[T]=d[T])}d=b}}else if(g&&Le(f)&&Array.isArray(d))d=d.join(f),d&&(d=this.extendTranslation(d,e,n,i));else{let x=!1,b=!1;const A=n.count!==void 0&&!Le(n.count),T=Wl.hasDefaultValue(n),R=A?this.pluralResolver.getSuffix(c,n.count,n):"",w=n.ordinal&&A?this.pluralResolver.getSuffix(c,n.count,{ordinal:!1}):"",S=A&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),P=S&&n[`defaultValue${this.options.pluralSeparator}zero`]||n[`defaultValue${R}`]||n[`defaultValue${w}`]||n.defaultValue;!this.isValidLookup(d)&&T&&(x=!0,d=P),this.isValidLookup(d)||(b=!0,d=o);const k=(n.missingKeyNoValueFallbackToKey||this.options.missingKeyNoValueFallbackToKey)&&b?void 0:d,W=T&&P!==d&&this.options.updateMissing;if(b||x||W){if(this.logger.log(W?"updateKey":"missingKey",c,l,o,W?P:d),s){const L=this.resolve(o,{...n,keySeparator:!1});L&&L.res&&this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")}let $=[];const G=this.languageUtils.getFallbackCodes(this.options.fallbackLng,n.lng||this.language);if(this.options.saveMissingTo==="fallback"&&G&&G[0])for(let L=0;L<G.length;L++)$.push(G[L]);else this.options.saveMissingTo==="all"?$=this.languageUtils.toResolveHierarchy(n.lng||this.language):$.push(n.lng||this.language);const Q=(L,j,Z)=>{const se=T&&Z!==d?Z:k;this.options.missingKeyHandler?this.options.missingKeyHandler(L,l,j,se,W,n):this.backendConnector&&this.backendConnector.saveMissing&&this.backendConnector.saveMissing(L,l,j,se,W,n),this.emit("missingKey",L,l,j,d)};this.options.saveMissing&&(this.options.saveMissingPlurals&&A?$.forEach(L=>{const j=this.pluralResolver.getSuffixes(L,n);S&&n[`defaultValue${this.options.pluralSeparator}zero`]&&j.indexOf(`${this.options.pluralSeparator}zero`)<0&&j.push(`${this.options.pluralSeparator}zero`),j.forEach(Z=>{Q([L],o+Z,n[`defaultValue${Z}`]||P)})}):Q($,o,P))}d=this.extendTranslation(d,e,n,h,i),b&&d===o&&this.options.appendNamespaceToMissingKey&&(d=`${l}:${o}`),(b||x)&&this.options.parseMissingKeyHandler&&(this.options.compatibilityAPI!=="v1"?d=this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey?`${l}:${o}`:o,x?d:void 0):d=this.options.parseMissingKeyHandler(d))}return r?(h.res=d,h.usedParams=this.getUsedParamsDetails(n),h):d}extendTranslation(e,n,i,r,s){var o=this;if(this.i18nFormat&&this.i18nFormat.parse)e=this.i18nFormat.parse(e,{...this.options.interpolation.defaultVariables,...i},i.lng||this.language||r.usedLng,r.usedNS,r.usedKey,{resolved:r});else if(!i.skipInterpolation){i.interpolation&&this.interpolator.init({...i,interpolation:{...this.options.interpolation,...i.interpolation}});const c=Le(e)&&(i&&i.interpolation&&i.interpolation.skipOnVariables!==void 0?i.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables);let u;if(c){const d=e.match(this.interpolator.nestingRegexp);u=d&&d.length}let h=i.replace&&!Le(i.replace)?i.replace:i;if(this.options.interpolation.defaultVariables&&(h={...this.options.interpolation.defaultVariables,...h}),e=this.interpolator.interpolate(e,h,i.lng||this.language||r.usedLng,i),c){const d=e.match(this.interpolator.nestingRegexp),p=d&&d.length;u<p&&(i.nest=!1)}!i.lng&&this.options.compatibilityAPI!=="v1"&&r&&r.res&&(i.lng=this.language||r.usedLng),i.nest!==!1&&(e=this.interpolator.nest(e,function(){for(var d=arguments.length,p=new Array(d),_=0;_<d;_++)p[_]=arguments[_];return s&&s[0]===p[0]&&!i.context?(o.logger.warn(`It seems you are nesting recursively key: ${p[0]} in key: ${n[0]}`),null):o.translate(...p,n)},i)),i.interpolation&&this.interpolator.reset()}const a=i.postProcess||this.options.postProcess,l=Le(a)?[a]:a;return e!=null&&l&&l.length&&i.applyPostProcessor!==!1&&(e=vv.handle(l,e,n,this.options&&this.options.postProcessPassResolved?{i18nResolved:{...r,usedParams:this.getUsedParamsDetails(i)},...i}:i,this)),e}resolve(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i,r,s,o,a;return Le(e)&&(e=[e]),e.forEach(l=>{if(this.isValidLookup(i))return;const c=this.extractFromKey(l,n),u=c.key;r=u;let h=c.namespaces;this.options.fallbackNS&&(h=h.concat(this.options.fallbackNS));const d=n.count!==void 0&&!Le(n.count),p=d&&!n.ordinal&&n.count===0&&this.pluralResolver.shouldUseIntlApi(),_=n.context!==void 0&&(Le(n.context)||typeof n.context=="number")&&n.context!=="",y=n.lngs?n.lngs:this.languageUtils.toResolveHierarchy(n.lng||this.language,n.fallbackLng);h.forEach(m=>{this.isValidLookup(i)||(a=m,!Jm[`${y[0]}-${m}`]&&this.utils&&this.utils.hasLoadedNamespace&&!this.utils.hasLoadedNamespace(a)&&(Jm[`${y[0]}-${m}`]=!0,this.logger.warn(`key "${r}" for languages "${y.join(", ")}" won't get resolved as namespace "${a}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")),y.forEach(f=>{if(this.isValidLookup(i))return;o=f;const g=[u];if(this.i18nFormat&&this.i18nFormat.addLookupKeys)this.i18nFormat.addLookupKeys(g,u,f,m,n);else{let x;d&&(x=this.pluralResolver.getSuffix(f,n.count,n));const b=`${this.options.pluralSeparator}zero`,A=`${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;if(d&&(g.push(u+x),n.ordinal&&x.indexOf(A)===0&&g.push(u+x.replace(A,this.options.pluralSeparator)),p&&g.push(u+b)),_){const T=`${u}${this.options.contextSeparator}${n.context}`;g.push(T),d&&(g.push(T+x),n.ordinal&&x.indexOf(A)===0&&g.push(T+x.replace(A,this.options.pluralSeparator)),p&&g.push(T+b))}}let v;for(;v=g.pop();)this.isValidLookup(i)||(s=v,i=this.getResource(f,m,v,n))}))})}),{res:i,usedKey:r,exactUsedKey:s,usedLng:o,usedNS:a}}isValidLookup(e){return e!==void 0&&!(!this.options.returnNull&&e===null)&&!(!this.options.returnEmptyString&&e==="")}getResource(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};return this.i18nFormat&&this.i18nFormat.getResource?this.i18nFormat.getResource(e,n,i,r):this.resourceStore.getResource(e,n,i,r)}getUsedParamsDetails(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const n=["defaultValue","ordinal","context","replace","lng","lngs","fallbackLng","ns","keySeparator","nsSeparator","returnObjects","returnDetails","joinArrays","postProcess","interpolation"],i=e.replace&&!Le(e.replace);let r=i?e.replace:e;if(i&&typeof e.count<"u"&&(r.count=e.count),this.options.interpolation.defaultVariables&&(r={...this.options.interpolation.defaultVariables,...r}),!i){r={...r};for(const s of n)delete r[s]}return r}static hasDefaultValue(e){const n="defaultValue";for(const i in e)if(Object.prototype.hasOwnProperty.call(e,i)&&n===i.substring(0,n.length)&&e[i]!==void 0)return!0;return!1}}const gu=t=>t.charAt(0).toUpperCase()+t.slice(1);class eg{constructor(e){this.options=e,this.supportedLngs=this.options.supportedLngs||!1,this.logger=Jn.create("languageUtils")}getScriptPartFromCode(e){if(e=Vl(e),!e||e.indexOf("-")<0)return null;const n=e.split("-");return n.length===2||(n.pop(),n[n.length-1].toLowerCase()==="x")?null:this.formatLanguageCode(n.join("-"))}getLanguagePartFromCode(e){if(e=Vl(e),!e||e.indexOf("-")<0)return e;const n=e.split("-");return this.formatLanguageCode(n[0])}formatLanguageCode(e){if(Le(e)&&e.indexOf("-")>-1){if(typeof Intl<"u"&&typeof Intl.getCanonicalLocales<"u")try{let r=Intl.getCanonicalLocales(e)[0];if(r&&this.options.lowerCaseLng&&(r=r.toLowerCase()),r)return r}catch{}const n=["hans","hant","latn","cyrl","cans","mong","arab"];let i=e.split("-");return this.options.lowerCaseLng?i=i.map(r=>r.toLowerCase()):i.length===2?(i[0]=i[0].toLowerCase(),i[1]=i[1].toUpperCase(),n.indexOf(i[1].toLowerCase())>-1&&(i[1]=gu(i[1].toLowerCase()))):i.length===3&&(i[0]=i[0].toLowerCase(),i[1].length===2&&(i[1]=i[1].toUpperCase()),i[0]!=="sgn"&&i[2].length===2&&(i[2]=i[2].toUpperCase()),n.indexOf(i[1].toLowerCase())>-1&&(i[1]=gu(i[1].toLowerCase())),n.indexOf(i[2].toLowerCase())>-1&&(i[2]=gu(i[2].toLowerCase()))),i.join("-")}return this.options.cleanCode||this.options.lowerCaseLng?e.toLowerCase():e}isSupportedCode(e){return(this.options.load==="languageOnly"||this.options.nonExplicitSupportedLngs)&&(e=this.getLanguagePartFromCode(e)),!this.supportedLngs||!this.supportedLngs.length||this.supportedLngs.indexOf(e)>-1}getBestMatchFromCodes(e){if(!e)return null;let n;return e.forEach(i=>{if(n)return;const r=this.formatLanguageCode(i);(!this.options.supportedLngs||this.isSupportedCode(r))&&(n=r)}),!n&&this.options.supportedLngs&&e.forEach(i=>{if(n)return;const r=this.getLanguagePartFromCode(i);if(this.isSupportedCode(r))return n=r;n=this.options.supportedLngs.find(s=>{if(s===r)return s;if(!(s.indexOf("-")<0&&r.indexOf("-")<0)&&(s.indexOf("-")>0&&r.indexOf("-")<0&&s.substring(0,s.indexOf("-"))===r||s.indexOf(r)===0&&r.length>1))return s})}),n||(n=this.getFallbackCodes(this.options.fallbackLng)[0]),n}getFallbackCodes(e,n){if(!e)return[];if(typeof e=="function"&&(e=e(n)),Le(e)&&(e=[e]),Array.isArray(e))return e;if(!n)return e.default||[];let i=e[n];return i||(i=e[this.getScriptPartFromCode(n)]),i||(i=e[this.formatLanguageCode(n)]),i||(i=e[this.getLanguagePartFromCode(n)]),i||(i=e.default),i||[]}toResolveHierarchy(e,n){const i=this.getFallbackCodes(n||this.options.fallbackLng||[],e),r=[],s=o=>{o&&(this.isSupportedCode(o)?r.push(o):this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`))};return Le(e)&&(e.indexOf("-")>-1||e.indexOf("_")>-1)?(this.options.load!=="languageOnly"&&s(this.formatLanguageCode(e)),this.options.load!=="languageOnly"&&this.options.load!=="currentOnly"&&s(this.getScriptPartFromCode(e)),this.options.load!=="currentOnly"&&s(this.getLanguagePartFromCode(e))):Le(e)&&s(this.formatLanguageCode(e)),i.forEach(o=>{r.indexOf(o)<0&&s(this.formatLanguageCode(o))}),r}}let gC=[{lngs:["ach","ak","am","arn","br","fil","gun","ln","mfe","mg","mi","oc","pt","pt-BR","tg","tl","ti","tr","uz","wa"],nr:[1,2],fc:1},{lngs:["af","an","ast","az","bg","bn","ca","da","de","dev","el","en","eo","es","et","eu","fi","fo","fur","fy","gl","gu","ha","hi","hu","hy","ia","it","kk","kn","ku","lb","mai","ml","mn","mr","nah","nap","nb","ne","nl","nn","no","nso","pa","pap","pms","ps","pt-PT","rm","sco","se","si","so","son","sq","sv","sw","ta","te","tk","ur","yo"],nr:[1,2],fc:2},{lngs:["ay","bo","cgg","fa","ht","id","ja","jbo","ka","km","ko","ky","lo","ms","sah","su","th","tt","ug","vi","wo","zh"],nr:[1],fc:3},{lngs:["be","bs","cnr","dz","hr","ru","sr","uk"],nr:[1,2,5],fc:4},{lngs:["ar"],nr:[0,1,2,3,11,100],fc:5},{lngs:["cs","sk"],nr:[1,2,5],fc:6},{lngs:["csb","pl"],nr:[1,2,5],fc:7},{lngs:["cy"],nr:[1,2,3,8],fc:8},{lngs:["fr"],nr:[1,2],fc:9},{lngs:["ga"],nr:[1,2,3,7,11],fc:10},{lngs:["gd"],nr:[1,2,3,20],fc:11},{lngs:["is"],nr:[1,2],fc:12},{lngs:["jv"],nr:[0,1],fc:13},{lngs:["kw"],nr:[1,2,3,4],fc:14},{lngs:["lt"],nr:[1,2,10],fc:15},{lngs:["lv"],nr:[1,2,0],fc:16},{lngs:["mk"],nr:[1,2],fc:17},{lngs:["mnk"],nr:[0,1,2],fc:18},{lngs:["mt"],nr:[1,2,11,20],fc:19},{lngs:["or"],nr:[2,1],fc:2},{lngs:["ro"],nr:[1,2,20],fc:20},{lngs:["sl"],nr:[5,1,2,3],fc:21},{lngs:["he","iw"],nr:[1,2,20,21],fc:22}],_C={1:t=>+(t>1),2:t=>+(t!=1),3:t=>0,4:t=>t%10==1&&t%100!=11?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,5:t=>t==0?0:t==1?1:t==2?2:t%100>=3&&t%100<=10?3:t%100>=11?4:5,6:t=>t==1?0:t>=2&&t<=4?1:2,7:t=>t==1?0:t%10>=2&&t%10<=4&&(t%100<10||t%100>=20)?1:2,8:t=>t==1?0:t==2?1:t!=8&&t!=11?2:3,9:t=>+(t>=2),10:t=>t==1?0:t==2?1:t<7?2:t<11?3:4,11:t=>t==1||t==11?0:t==2||t==12?1:t>2&&t<20?2:3,12:t=>+(t%10!=1||t%100==11),13:t=>+(t!==0),14:t=>t==1?0:t==2?1:t==3?2:3,15:t=>t%10==1&&t%100!=11?0:t%10>=2&&(t%100<10||t%100>=20)?1:2,16:t=>t%10==1&&t%100!=11?0:t!==0?1:2,17:t=>t==1||t%10==1&&t%100!=11?0:1,18:t=>t==0?0:t==1?1:2,19:t=>t==1?0:t==0||t%100>1&&t%100<11?1:t%100>10&&t%100<20?2:3,20:t=>t==1?0:t==0||t%100>0&&t%100<20?1:2,21:t=>t%100==1?1:t%100==2?2:t%100==3||t%100==4?3:0,22:t=>t==1?0:t==2?1:(t<0||t>10)&&t%10==0?2:3};const vC=["v1","v2","v3"],xC=["v4"],tg={zero:0,one:1,two:2,few:3,many:4,other:5},yC=()=>{const t={};return gC.forEach(e=>{e.lngs.forEach(n=>{t[n]={numbers:e.nr,plurals:_C[e.fc]}})}),t};class SC{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.languageUtils=e,this.options=n,this.logger=Jn.create("pluralResolver"),(!this.options.compatibilityJSON||xC.includes(this.options.compatibilityJSON))&&(typeof Intl>"u"||!Intl.PluralRules)&&(this.options.compatibilityJSON="v3",this.logger.error("Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.")),this.rules=yC(),this.pluralRulesCache={}}addRule(e,n){this.rules[e]=n}clearCache(){this.pluralRulesCache={}}getRule(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(this.shouldUseIntlApi())try{const i=Vl(e==="dev"?"en":e),r=n.ordinal?"ordinal":"cardinal",s=JSON.stringify({cleanedCode:i,type:r});if(s in this.pluralRulesCache)return this.pluralRulesCache[s];const o=new Intl.PluralRules(i,{type:r});return this.pluralRulesCache[s]=o,o}catch{return}return this.rules[e]||this.rules[this.languageUtils.getLanguagePartFromCode(e)]}needsPlural(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,n);return this.shouldUseIntlApi()?i&&i.resolvedOptions().pluralCategories.length>1:i&&i.numbers.length>1}getPluralFormsOfKey(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return this.getSuffixes(e,i).map(r=>`${n}${r}`)}getSuffixes(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};const i=this.getRule(e,n);return i?this.shouldUseIntlApi()?i.resolvedOptions().pluralCategories.sort((r,s)=>tg[r]-tg[s]).map(r=>`${this.options.prepend}${n.ordinal?`ordinal${this.options.prepend}`:""}${r}`):i.numbers.map(r=>this.getSuffix(e,r,n)):[]}getSuffix(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};const r=this.getRule(e,i);return r?this.shouldUseIntlApi()?`${this.options.prepend}${i.ordinal?`ordinal${this.options.prepend}`:""}${r.select(n)}`:this.getSuffixRetroCompatible(r,n):(this.logger.warn(`no plural rule found for: ${e}`),"")}getSuffixRetroCompatible(e,n){const i=e.noAbs?e.plurals(n):e.plurals(Math.abs(n));let r=e.numbers[i];this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1&&(r===2?r="plural":r===1&&(r=""));const s=()=>this.options.prepend&&r.toString()?this.options.prepend+r.toString():r.toString();return this.options.compatibilityJSON==="v1"?r===1?"":typeof r=="number"?`_plural_${r.toString()}`:s():this.options.compatibilityJSON==="v2"||this.options.simplifyPluralSuffix&&e.numbers.length===2&&e.numbers[0]===1?s():this.options.prepend&&i.toString()?this.options.prepend+i.toString():i.toString()}shouldUseIntlApi(){return!vC.includes(this.options.compatibilityJSON)}}const ng=function(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:".",r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:!0,s=lC(t,e,n);return!s&&r&&Le(n)&&(s=ed(t,n,i),s===void 0&&(s=ed(e,n,i))),s},_u=t=>t.replace(/\$/g,"$$$$");class MC{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Jn.create("interpolator"),this.options=e,this.format=e.interpolation&&e.interpolation.format||(n=>n),this.init(e)}init(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};e.interpolation||(e.interpolation={escapeValue:!0});const{escape:n,escapeValue:i,useRawValueToEscape:r,prefix:s,prefixEscaped:o,suffix:a,suffixEscaped:l,formatSeparator:c,unescapeSuffix:u,unescapePrefix:h,nestingPrefix:d,nestingPrefixEscaped:p,nestingSuffix:_,nestingSuffixEscaped:y,nestingOptionsSeparator:m,maxReplaces:f,alwaysFormat:g}=e.interpolation;this.escape=n!==void 0?n:uC,this.escapeValue=i!==void 0?i:!0,this.useRawValueToEscape=r!==void 0?r:!1,this.prefix=s?es(s):o||"{{",this.suffix=a?es(a):l||"}}",this.formatSeparator=c||",",this.unescapePrefix=u?"":h||"-",this.unescapeSuffix=this.unescapePrefix?"":u||"",this.nestingPrefix=d?es(d):p||es("$t("),this.nestingSuffix=_?es(_):y||es(")"),this.nestingOptionsSeparator=m||",",this.maxReplaces=f||1e3,this.alwaysFormat=g!==void 0?g:!1,this.resetRegExp()}reset(){this.options&&this.init(this.options)}resetRegExp(){const e=(n,i)=>n&&n.source===i?(n.lastIndex=0,n):new RegExp(i,"g");this.regexp=e(this.regexp,`${this.prefix}(.+?)${this.suffix}`),this.regexpUnescape=e(this.regexpUnescape,`${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`),this.nestingRegexp=e(this.nestingRegexp,`${this.nestingPrefix}(.+?)${this.nestingSuffix}`)}interpolate(e,n,i,r){let s,o,a;const l=this.options&&this.options.interpolation&&this.options.interpolation.defaultVariables||{},c=p=>{if(p.indexOf(this.formatSeparator)<0){const f=ng(n,l,p,this.options.keySeparator,this.options.ignoreJSONStructure);return this.alwaysFormat?this.format(f,void 0,i,{...r,...n,interpolationkey:p}):f}const _=p.split(this.formatSeparator),y=_.shift().trim(),m=_.join(this.formatSeparator).trim();return this.format(ng(n,l,y,this.options.keySeparator,this.options.ignoreJSONStructure),m,i,{...r,...n,interpolationkey:y})};this.resetRegExp();const u=r&&r.missingInterpolationHandler||this.options.missingInterpolationHandler,h=r&&r.interpolation&&r.interpolation.skipOnVariables!==void 0?r.interpolation.skipOnVariables:this.options.interpolation.skipOnVariables;return[{regex:this.regexpUnescape,safeValue:p=>_u(p)},{regex:this.regexp,safeValue:p=>this.escapeValue?_u(this.escape(p)):_u(p)}].forEach(p=>{for(a=0;s=p.regex.exec(e);){const _=s[1].trim();if(o=c(_),o===void 0)if(typeof u=="function"){const m=u(e,s,r);o=Le(m)?m:""}else if(r&&Object.prototype.hasOwnProperty.call(r,_))o="";else if(h){o=s[0];continue}else this.logger.warn(`missed to pass in variable ${_} for interpolating ${e}`),o="";else!Le(o)&&!this.useRawValueToEscape&&(o=Ym(o));const y=p.safeValue(o);if(e=e.replace(s[0],y),h?(p.regex.lastIndex+=o.length,p.regex.lastIndex-=s[0].length):p.regex.lastIndex=0,a++,a>=this.maxReplaces)break}}),e}nest(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r,s,o;const a=(l,c)=>{const u=this.nestingOptionsSeparator;if(l.indexOf(u)<0)return l;const h=l.split(new RegExp(`${u}[ ]*{`));let d=`{${h[1]}`;l=h[0],d=this.interpolate(d,o);const p=d.match(/'/g),_=d.match(/"/g);(p&&p.length%2===0&&!_||_.length%2!==0)&&(d=d.replace(/'/g,'"'));try{o=JSON.parse(d),c&&(o={...c,...o})}catch(y){return this.logger.warn(`failed parsing options string in nesting for key ${l}`,y),`${l}${u}${d}`}return o.defaultValue&&o.defaultValue.indexOf(this.prefix)>-1&&delete o.defaultValue,l};for(;r=this.nestingRegexp.exec(e);){let l=[];o={...i},o=o.replace&&!Le(o.replace)?o.replace:o,o.applyPostProcessor=!1,delete o.defaultValue;let c=!1;if(r[0].indexOf(this.formatSeparator)!==-1&&!/{.*}/.test(r[1])){const u=r[1].split(this.formatSeparator).map(h=>h.trim());r[1]=u.shift(),l=u,c=!0}if(s=n(a.call(this,r[1].trim(),o),o),s&&r[0]===e&&!Le(s))return s;Le(s)||(s=Ym(s)),s||(this.logger.warn(`missed to resolve ${r[1]} for nesting ${e}`),s=""),c&&(s=l.reduce((u,h)=>this.format(u,h,i.lng,{...i,interpolationkey:r[1].trim()}),s.trim())),e=e.replace(r[0],s),this.regexp.lastIndex=0}return e}}const EC=t=>{let e=t.toLowerCase().trim();const n={};if(t.indexOf("(")>-1){const i=t.split("(");e=i[0].toLowerCase().trim();const r=i[1].substring(0,i[1].length-1);e==="currency"&&r.indexOf(":")<0?n.currency||(n.currency=r.trim()):e==="relativetime"&&r.indexOf(":")<0?n.range||(n.range=r.trim()):r.split(";").forEach(o=>{if(o){const[a,...l]=o.split(":"),c=l.join(":").trim().replace(/^'+|'+$/g,""),u=a.trim();n[u]||(n[u]=c),c==="false"&&(n[u]=!1),c==="true"&&(n[u]=!0),isNaN(c)||(n[u]=parseInt(c,10))}})}return{formatName:e,formatOptions:n}},ts=t=>{const e={};return(n,i,r)=>{let s=r;r&&r.interpolationkey&&r.formatParams&&r.formatParams[r.interpolationkey]&&r[r.interpolationkey]&&(s={...s,[r.interpolationkey]:void 0});const o=i+JSON.stringify(s);let a=e[o];return a||(a=t(Vl(i),r),e[o]=a),a(n)}};class wC{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};this.logger=Jn.create("formatter"),this.options=e,this.formats={number:ts((n,i)=>{const r=new Intl.NumberFormat(n,{...i});return s=>r.format(s)}),currency:ts((n,i)=>{const r=new Intl.NumberFormat(n,{...i,style:"currency"});return s=>r.format(s)}),datetime:ts((n,i)=>{const r=new Intl.DateTimeFormat(n,{...i});return s=>r.format(s)}),relativetime:ts((n,i)=>{const r=new Intl.RelativeTimeFormat(n,{...i});return s=>r.format(s,i.range||"day")}),list:ts((n,i)=>{const r=new Intl.ListFormat(n,{...i});return s=>r.format(s)})},this.init(e)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{interpolation:{}};this.formatSeparator=n.interpolation.formatSeparator||","}add(e,n){this.formats[e.toLowerCase().trim()]=n}addCached(e,n){this.formats[e.toLowerCase().trim()]=ts(n)}format(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};const s=n.split(this.formatSeparator);if(s.length>1&&s[0].indexOf("(")>1&&s[0].indexOf(")")<0&&s.find(a=>a.indexOf(")")>-1)){const a=s.findIndex(l=>l.indexOf(")")>-1);s[0]=[s[0],...s.splice(1,a)].join(this.formatSeparator)}return s.reduce((a,l)=>{const{formatName:c,formatOptions:u}=EC(l);if(this.formats[c]){let h=a;try{const d=r&&r.formatParams&&r.formatParams[r.interpolationkey]||{},p=d.locale||d.lng||r.locale||r.lng||i;h=this.formats[c](a,p,{...u,...r,...d})}catch(d){this.logger.warn(d)}return h}else this.logger.warn(`there was no format function for ${c}`);return a},e)}}const TC=(t,e)=>{t.pending[e]!==void 0&&(delete t.pending[e],t.pendingCount--)};class AC extends fc{constructor(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{};super(),this.backend=e,this.store=n,this.services=i,this.languageUtils=i.languageUtils,this.options=r,this.logger=Jn.create("backendConnector"),this.waitingReads=[],this.maxParallelReads=r.maxParallelReads||10,this.readingCalls=0,this.maxRetries=r.maxRetries>=0?r.maxRetries:5,this.retryTimeout=r.retryTimeout>=1?r.retryTimeout:350,this.state={},this.queue=[],this.backend&&this.backend.init&&this.backend.init(i,r.backend,r)}queueLoad(e,n,i,r){const s={},o={},a={},l={};return e.forEach(c=>{let u=!0;n.forEach(h=>{const d=`${c}|${h}`;!i.reload&&this.store.hasResourceBundle(c,h)?this.state[d]=2:this.state[d]<0||(this.state[d]===1?o[d]===void 0&&(o[d]=!0):(this.state[d]=1,u=!1,o[d]===void 0&&(o[d]=!0),s[d]===void 0&&(s[d]=!0),l[h]===void 0&&(l[h]=!0)))}),u||(a[c]=!0)}),(Object.keys(s).length||Object.keys(o).length)&&this.queue.push({pending:o,pendingCount:Object.keys(o).length,loaded:{},errors:[],callback:r}),{toLoad:Object.keys(s),pending:Object.keys(o),toLoadLanguages:Object.keys(a),toLoadNamespaces:Object.keys(l)}}loaded(e,n,i){const r=e.split("|"),s=r[0],o=r[1];n&&this.emit("failedLoading",s,o,n),!n&&i&&this.store.addResourceBundle(s,o,i,void 0,void 0,{skipCopy:!0}),this.state[e]=n?-1:2,n&&i&&(this.state[e]=0);const a={};this.queue.forEach(l=>{aC(l.loaded,[s],o),TC(l,e),n&&l.errors.push(n),l.pendingCount===0&&!l.done&&(Object.keys(l.loaded).forEach(c=>{a[c]||(a[c]={});const u=l.loaded[c];u.length&&u.forEach(h=>{a[c][h]===void 0&&(a[c][h]=!0)})}),l.done=!0,l.errors.length?l.callback(l.errors):l.callback())}),this.emit("loaded",a),this.queue=this.queue.filter(l=>!l.done)}read(e,n,i){let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:0,s=arguments.length>4&&arguments[4]!==void 0?arguments[4]:this.retryTimeout,o=arguments.length>5?arguments[5]:void 0;if(!e.length)return o(null,{});if(this.readingCalls>=this.maxParallelReads){this.waitingReads.push({lng:e,ns:n,fcName:i,tried:r,wait:s,callback:o});return}this.readingCalls++;const a=(c,u)=>{if(this.readingCalls--,this.waitingReads.length>0){const h=this.waitingReads.shift();this.read(h.lng,h.ns,h.fcName,h.tried,h.wait,h.callback)}if(c&&u&&r<this.maxRetries){setTimeout(()=>{this.read.call(this,e,n,i,r+1,s*2,o)},s);return}o(c,u)},l=this.backend[i].bind(this.backend);if(l.length===2){try{const c=l(e,n);c&&typeof c.then=="function"?c.then(u=>a(null,u)).catch(a):a(null,c)}catch(c){a(c)}return}return l(e,n,a)}prepareLoading(e,n){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=arguments.length>3?arguments[3]:void 0;if(!this.backend)return this.logger.warn("No backend was added via i18next.use. Will not load resources."),r&&r();Le(e)&&(e=this.languageUtils.toResolveHierarchy(e)),Le(n)&&(n=[n]);const s=this.queueLoad(e,n,i,r);if(!s.toLoad.length)return s.pending.length||r(),null;s.toLoad.forEach(o=>{this.loadOne(o)})}load(e,n,i){this.prepareLoading(e,n,{},i)}reload(e,n,i){this.prepareLoading(e,n,{reload:!0},i)}loadOne(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"";const i=e.split("|"),r=i[0],s=i[1];this.read(r,s,"read",void 0,void 0,(o,a)=>{o&&this.logger.warn(`${n}loading namespace ${s} for language ${r} failed`,o),!o&&a&&this.logger.log(`${n}loaded namespace ${s} for language ${r}`,a),this.loaded(e,o,a)})}saveMissing(e,n,i,r,s){let o=arguments.length>5&&arguments[5]!==void 0?arguments[5]:{},a=arguments.length>6&&arguments[6]!==void 0?arguments[6]:()=>{};if(this.services.utils&&this.services.utils.hasLoadedNamespace&&!this.services.utils.hasLoadedNamespace(n)){this.logger.warn(`did not save key "${i}" as the namespace "${n}" was not yet loaded`,"This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!");return}if(!(i==null||i==="")){if(this.backend&&this.backend.create){const l={...o,isUpdate:s},c=this.backend.create.bind(this.backend);if(c.length<6)try{let u;c.length===5?u=c(e,n,i,r,l):u=c(e,n,i,r),u&&typeof u.then=="function"?u.then(h=>a(null,h)).catch(a):a(null,u)}catch(u){a(u)}else c(e,n,i,r,a,l)}!e||!e[0]||this.store.addResource(e[0],n,i,r)}}}const ig=()=>({debug:!1,initImmediate:!0,ns:["translation"],defaultNS:["translation"],fallbackLng:["dev"],fallbackNS:!1,supportedLngs:!1,nonExplicitSupportedLngs:!1,load:"all",preload:!1,simplifyPluralSuffix:!0,keySeparator:".",nsSeparator:":",pluralSeparator:"_",contextSeparator:"_",partialBundledLanguages:!1,saveMissing:!1,updateMissing:!1,saveMissingTo:"fallback",saveMissingPlurals:!0,missingKeyHandler:!1,missingInterpolationHandler:!1,postProcess:!1,postProcessPassResolved:!1,returnNull:!1,returnEmptyString:!0,returnObjects:!1,joinArrays:!1,returnedObjectHandler:!1,parseMissingKeyHandler:!1,appendNamespaceToMissingKey:!1,appendNamespaceToCIMode:!1,overloadTranslationOptionHandler:t=>{let e={};if(typeof t[1]=="object"&&(e=t[1]),Le(t[1])&&(e.defaultValue=t[1]),Le(t[2])&&(e.tDescription=t[2]),typeof t[2]=="object"||typeof t[3]=="object"){const n=t[3]||t[2];Object.keys(n).forEach(i=>{e[i]=n[i]})}return e},interpolation:{escapeValue:!0,format:t=>t,prefix:"{{",suffix:"}}",formatSeparator:",",unescapePrefix:"-",nestingPrefix:"$t(",nestingSuffix:")",nestingOptionsSeparator:",",maxReplaces:1e3,skipOnVariables:!0}}),rg=t=>(Le(t.ns)&&(t.ns=[t.ns]),Le(t.fallbackLng)&&(t.fallbackLng=[t.fallbackLng]),Le(t.fallbackNS)&&(t.fallbackNS=[t.fallbackNS]),t.supportedLngs&&t.supportedLngs.indexOf("cimode")<0&&(t.supportedLngs=t.supportedLngs.concat(["cimode"])),t),Ya=()=>{},CC=t=>{Object.getOwnPropertyNames(Object.getPrototypeOf(t)).forEach(n=>{typeof t[n]=="function"&&(t[n]=t[n].bind(t))})};class Zo extends fc{constructor(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;if(super(),this.options=rg(e),this.services={},this.logger=Jn,this.modules={external:[]},CC(this),n&&!this.isInitialized&&!e.isClone){if(!this.options.initImmediate)return this.init(e,n),this;setTimeout(()=>{this.init(e,n)},0)}}init(){var e=this;let n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=arguments.length>1?arguments[1]:void 0;this.isInitializing=!0,typeof n=="function"&&(i=n,n={}),!n.defaultNS&&n.defaultNS!==!1&&n.ns&&(Le(n.ns)?n.defaultNS=n.ns:n.ns.indexOf("translation")<0&&(n.defaultNS=n.ns[0]));const r=ig();this.options={...r,...this.options,...rg(n)},this.options.compatibilityAPI!=="v1"&&(this.options.interpolation={...r.interpolation,...this.options.interpolation}),n.keySeparator!==void 0&&(this.options.userDefinedKeySeparator=n.keySeparator),n.nsSeparator!==void 0&&(this.options.userDefinedNsSeparator=n.nsSeparator);const s=u=>u?typeof u=="function"?new u:u:null;if(!this.options.isClone){this.modules.logger?Jn.init(s(this.modules.logger),this.options):Jn.init(null,this.options);let u;this.modules.formatter?u=this.modules.formatter:typeof Intl<"u"&&(u=wC);const h=new eg(this.options);this.store=new Qm(this.options.resources,this.options);const d=this.services;d.logger=Jn,d.resourceStore=this.store,d.languageUtils=h,d.pluralResolver=new SC(h,{prepend:this.options.pluralSeparator,compatibilityJSON:this.options.compatibilityJSON,simplifyPluralSuffix:this.options.simplifyPluralSuffix}),u&&(!this.options.interpolation.format||this.options.interpolation.format===r.interpolation.format)&&(d.formatter=s(u),d.formatter.init(d,this.options),this.options.interpolation.format=d.formatter.format.bind(d.formatter)),d.interpolator=new MC(this.options),d.utils={hasLoadedNamespace:this.hasLoadedNamespace.bind(this)},d.backendConnector=new AC(s(this.modules.backend),d.resourceStore,d,this.options),d.backendConnector.on("*",function(p){for(var _=arguments.length,y=new Array(_>1?_-1:0),m=1;m<_;m++)y[m-1]=arguments[m];e.emit(p,...y)}),this.modules.languageDetector&&(d.languageDetector=s(this.modules.languageDetector),d.languageDetector.init&&d.languageDetector.init(d,this.options.detection,this.options)),this.modules.i18nFormat&&(d.i18nFormat=s(this.modules.i18nFormat),d.i18nFormat.init&&d.i18nFormat.init(this)),this.translator=new Wl(this.services,this.options),this.translator.on("*",function(p){for(var _=arguments.length,y=new Array(_>1?_-1:0),m=1;m<_;m++)y[m-1]=arguments[m];e.emit(p,...y)}),this.modules.external.forEach(p=>{p.init&&p.init(this)})}if(this.format=this.options.interpolation.format,i||(i=Ya),this.options.fallbackLng&&!this.services.languageDetector&&!this.options.lng){const u=this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);u.length>0&&u[0]!=="dev"&&(this.options.lng=u[0])}!this.services.languageDetector&&!this.options.lng&&this.logger.warn("init: no languageDetector is used and no lng is defined"),["getResource","hasResourceBundle","getResourceBundle","getDataByLanguage"].forEach(u=>{this[u]=function(){return e.store[u](...arguments)}}),["addResource","addResources","addResourceBundle","removeResourceBundle"].forEach(u=>{this[u]=function(){return e.store[u](...arguments),e}});const l=ao(),c=()=>{const u=(h,d)=>{this.isInitializing=!1,this.isInitialized&&!this.initializedStoreOnce&&this.logger.warn("init: i18next is already initialized. You should call init just once!"),this.isInitialized=!0,this.options.isClone||this.logger.log("initialized",this.options),this.emit("initialized",this.options),l.resolve(d),i(h,d)};if(this.languages&&this.options.compatibilityAPI!=="v1"&&!this.isInitialized)return u(null,this.t.bind(this));this.changeLanguage(this.options.lng,u)};return this.options.resources||!this.options.initImmediate?c():setTimeout(c,0),l}loadResources(e){let i=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ya;const r=Le(e)?e:this.language;if(typeof e=="function"&&(i=e),!this.options.resources||this.options.partialBundledLanguages){if(r&&r.toLowerCase()==="cimode"&&(!this.options.preload||this.options.preload.length===0))return i();const s=[],o=a=>{if(!a||a==="cimode")return;this.services.languageUtils.toResolveHierarchy(a).forEach(c=>{c!=="cimode"&&s.indexOf(c)<0&&s.push(c)})};r?o(r):this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l=>o(l)),this.options.preload&&this.options.preload.forEach(a=>o(a)),this.services.backendConnector.load(s,this.options.ns,a=>{!a&&!this.resolvedLanguage&&this.language&&this.setResolvedLanguage(this.language),i(a)})}else i(null)}reloadResources(e,n,i){const r=ao();return typeof e=="function"&&(i=e,e=void 0),typeof n=="function"&&(i=n,n=void 0),e||(e=this.languages),n||(n=this.options.ns),i||(i=Ya),this.services.backendConnector.reload(e,n,s=>{r.resolve(),i(s)}),r}use(e){if(!e)throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");if(!e.type)throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");return e.type==="backend"&&(this.modules.backend=e),(e.type==="logger"||e.log&&e.warn&&e.error)&&(this.modules.logger=e),e.type==="languageDetector"&&(this.modules.languageDetector=e),e.type==="i18nFormat"&&(this.modules.i18nFormat=e),e.type==="postProcessor"&&vv.addPostProcessor(e),e.type==="formatter"&&(this.modules.formatter=e),e.type==="3rdParty"&&this.modules.external.push(e),this}setResolvedLanguage(e){if(!(!e||!this.languages)&&!(["cimode","dev"].indexOf(e)>-1))for(let n=0;n<this.languages.length;n++){const i=this.languages[n];if(!(["cimode","dev"].indexOf(i)>-1)&&this.store.hasLanguageSomeTranslations(i)){this.resolvedLanguage=i;break}}}changeLanguage(e,n){var i=this;this.isLanguageChangingTo=e;const r=ao();this.emit("languageChanging",e);const s=l=>{this.language=l,this.languages=this.services.languageUtils.toResolveHierarchy(l),this.resolvedLanguage=void 0,this.setResolvedLanguage(l)},o=(l,c)=>{c?(s(c),this.translator.changeLanguage(c),this.isLanguageChangingTo=void 0,this.emit("languageChanged",c),this.logger.log("languageChanged",c)):this.isLanguageChangingTo=void 0,r.resolve(function(){return i.t(...arguments)}),n&&n(l,function(){return i.t(...arguments)})},a=l=>{!e&&!l&&this.services.languageDetector&&(l=[]);const c=Le(l)?l:this.services.languageUtils.getBestMatchFromCodes(l);c&&(this.language||s(c),this.translator.language||this.translator.changeLanguage(c),this.services.languageDetector&&this.services.languageDetector.cacheUserLanguage&&this.services.languageDetector.cacheUserLanguage(c)),this.loadResources(c,u=>{o(u,c)})};return!e&&this.services.languageDetector&&!this.services.languageDetector.async?a(this.services.languageDetector.detect()):!e&&this.services.languageDetector&&this.services.languageDetector.async?this.services.languageDetector.detect.length===0?this.services.languageDetector.detect().then(a):this.services.languageDetector.detect(a):a(e),r}getFixedT(e,n,i){var r=this;const s=function(o,a){let l;if(typeof a!="object"){for(var c=arguments.length,u=new Array(c>2?c-2:0),h=2;h<c;h++)u[h-2]=arguments[h];l=r.options.overloadTranslationOptionHandler([o,a].concat(u))}else l={...a};l.lng=l.lng||s.lng,l.lngs=l.lngs||s.lngs,l.ns=l.ns||s.ns,l.keyPrefix!==""&&(l.keyPrefix=l.keyPrefix||i||s.keyPrefix);const d=r.options.keySeparator||".";let p;return l.keyPrefix&&Array.isArray(o)?p=o.map(_=>`${l.keyPrefix}${d}${_}`):p=l.keyPrefix?`${l.keyPrefix}${d}${o}`:o,r.t(p,l)};return Le(e)?s.lng=e:s.lngs=e,s.ns=n,s.keyPrefix=i,s}t(){return this.translator&&this.translator.translate(...arguments)}exists(){return this.translator&&this.translator.exists(...arguments)}setDefaultNamespace(e){this.options.defaultNS=e}hasLoadedNamespace(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(!this.isInitialized)return this.logger.warn("hasLoadedNamespace: i18next was not initialized",this.languages),!1;if(!this.languages||!this.languages.length)return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty",this.languages),!1;const i=n.lng||this.resolvedLanguage||this.languages[0],r=this.options?this.options.fallbackLng:!1,s=this.languages[this.languages.length-1];if(i.toLowerCase()==="cimode")return!0;const o=(a,l)=>{const c=this.services.backendConnector.state[`${a}|${l}`];return c===-1||c===0||c===2};if(n.precheck){const a=n.precheck(this,o);if(a!==void 0)return a}return!!(this.hasResourceBundle(i,e)||!this.services.backendConnector.backend||this.options.resources&&!this.options.partialBundledLanguages||o(i,e)&&(!r||o(s,e)))}loadNamespaces(e,n){const i=ao();return this.options.ns?(Le(e)&&(e=[e]),e.forEach(r=>{this.options.ns.indexOf(r)<0&&this.options.ns.push(r)}),this.loadResources(r=>{i.resolve(),n&&n(r)}),i):(n&&n(),Promise.resolve())}loadLanguages(e,n){const i=ao();Le(e)&&(e=[e]);const r=this.options.preload||[],s=e.filter(o=>r.indexOf(o)<0&&this.services.languageUtils.isSupportedCode(o));return s.length?(this.options.preload=r.concat(s),this.loadResources(o=>{i.resolve(),n&&n(o)}),i):(n&&n(),Promise.resolve())}dir(e){if(e||(e=this.resolvedLanguage||(this.languages&&this.languages.length>0?this.languages[0]:this.language)),!e)return"rtl";const n=["ar","shu","sqr","ssh","xaa","yhd","yud","aao","abh","abv","acm","acq","acw","acx","acy","adf","ads","aeb","aec","afb","ajp","apc","apd","arb","arq","ars","ary","arz","auz","avl","ayh","ayl","ayn","ayp","bbz","pga","he","iw","ps","pbt","pbu","pst","prp","prd","ug","ur","ydd","yds","yih","ji","yi","hbo","men","xmn","fa","jpr","peo","pes","prs","dv","sam","ckb"],i=this.services&&this.services.languageUtils||new eg(ig());return n.indexOf(i.getLanguagePartFromCode(e))>-1||e.toLowerCase().indexOf("-arab")>1?"rtl":"ltr"}static createInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;return new Zo(e,n)}cloneInstance(){let e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Ya;const i=e.forkResourceStore;i&&delete e.forkResourceStore;const r={...this.options,...e,isClone:!0},s=new Zo(r);return(e.debug!==void 0||e.prefix!==void 0)&&(s.logger=s.logger.clone(e)),["store","services","language"].forEach(a=>{s[a]=this[a]}),s.services={...this.services},s.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},i&&(s.store=new Qm(this.store.data,r),s.services.resourceStore=s.store),s.translator=new Wl(s.services,r),s.translator.on("*",function(a){for(var l=arguments.length,c=new Array(l>1?l-1:0),u=1;u<l;u++)c[u-1]=arguments[u];s.emit(a,...c)}),s.init(r,n),s.translator.options=r,s.translator.backendConnector.services.utils={hasLoadedNamespace:s.hasLoadedNamespace.bind(s)},s}toJSON(){return{options:this.options,store:this.store,language:this.language,languages:this.languages,resolvedLanguage:this.resolvedLanguage}}}const Xt=Zo.createInstance();Xt.createInstance=Zo.createInstance;Xt.createInstance;Xt.dir;Xt.init;Xt.loadResources;Xt.reloadResources;Xt.use;Xt.changeLanguage;Xt.getFixedT;Xt.t;Xt.exists;Xt.setDefaultNamespace;Xt.hasLoadedNamespace;Xt.loadNamespaces;Xt.loadLanguages;const{slice:RC,forEach:bC}=[];function PC(t){return bC.call(RC.call(arguments,1),e=>{if(e)for(const n in e)t[n]===void 0&&(t[n]=e[n])}),t}const sg=/^[\u0009\u0020-\u007e\u0080-\u00ff]+$/,LC=(t,e,n)=>{const i=n||{};i.path=i.path||"/";const r=encodeURIComponent(e);let s=`${t}=${r}`;if(i.maxAge>0){const o=i.maxAge-0;if(Number.isNaN(o))throw new Error("maxAge should be a Number");s+=`; Max-Age=${Math.floor(o)}`}if(i.domain){if(!sg.test(i.domain))throw new TypeError("option domain is invalid");s+=`; Domain=${i.domain}`}if(i.path){if(!sg.test(i.path))throw new TypeError("option path is invalid");s+=`; Path=${i.path}`}if(i.expires){if(typeof i.expires.toUTCString!="function")throw new TypeError("option expires is invalid");s+=`; Expires=${i.expires.toUTCString()}`}if(i.httpOnly&&(s+="; HttpOnly"),i.secure&&(s+="; Secure"),i.sameSite)switch(typeof i.sameSite=="string"?i.sameSite.toLowerCase():i.sameSite){case!0:s+="; SameSite=Strict";break;case"lax":s+="; SameSite=Lax";break;case"strict":s+="; SameSite=Strict";break;case"none":s+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}return s},og={create(t,e,n,i){let r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{path:"/",sameSite:"strict"};n&&(r.expires=new Date,r.expires.setTime(r.expires.getTime()+n*60*1e3)),i&&(r.domain=i),document.cookie=LC(t,encodeURIComponent(e),r)},read(t){const e=`${t}=`,n=document.cookie.split(";");for(let i=0;i<n.length;i++){let r=n[i];for(;r.charAt(0)===" ";)r=r.substring(1,r.length);if(r.indexOf(e)===0)return r.substring(e.length,r.length)}return null},remove(t){this.create(t,"",-1)}};var DC={name:"cookie",lookup(t){let{lookupCookie:e}=t;if(e&&typeof document<"u")return og.read(e)||void 0},cacheUserLanguage(t,e){let{lookupCookie:n,cookieMinutes:i,cookieDomain:r,cookieOptions:s}=e;n&&typeof document<"u"&&og.create(n,t,i,r,s)}},NC={name:"querystring",lookup(t){var i;let{lookupQuerystring:e}=t,n;if(typeof window<"u"){let{search:r}=window.location;!window.location.search&&((i=window.location.hash)==null?void 0:i.indexOf("?"))>-1&&(r=window.location.hash.substring(window.location.hash.indexOf("?")));const o=r.substring(1).split("&");for(let a=0;a<o.length;a++){const l=o[a].indexOf("=");l>0&&o[a].substring(0,l)===e&&(n=o[a].substring(l+1))}}return n}};let lo=null;const ag=()=>{if(lo!==null)return lo;try{lo=window!=="undefined"&&window.localStorage!==null;const t="i18next.translate.boo";window.localStorage.setItem(t,"foo"),window.localStorage.removeItem(t)}catch{lo=!1}return lo};var IC={name:"localStorage",lookup(t){let{lookupLocalStorage:e}=t;if(e&&ag())return window.localStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupLocalStorage:n}=e;n&&ag()&&window.localStorage.setItem(n,t)}};let co=null;const lg=()=>{if(co!==null)return co;try{co=window!=="undefined"&&window.sessionStorage!==null;const t="i18next.translate.boo";window.sessionStorage.setItem(t,"foo"),window.sessionStorage.removeItem(t)}catch{co=!1}return co};var UC={name:"sessionStorage",lookup(t){let{lookupSessionStorage:e}=t;if(e&&lg())return window.sessionStorage.getItem(e)||void 0},cacheUserLanguage(t,e){let{lookupSessionStorage:n}=e;n&&lg()&&window.sessionStorage.setItem(n,t)}},OC={name:"navigator",lookup(t){const e=[];if(typeof navigator<"u"){const{languages:n,userLanguage:i,language:r}=navigator;if(n)for(let s=0;s<n.length;s++)e.push(n[s]);i&&e.push(i),r&&e.push(r)}return e.length>0?e:void 0}},FC={name:"htmlTag",lookup(t){let{htmlTag:e}=t,n;const i=e||(typeof document<"u"?document.documentElement:null);return i&&typeof i.getAttribute=="function"&&(n=i.getAttribute("lang")),n}},kC={name:"path",lookup(t){var r;let{lookupFromPathIndex:e}=t;if(typeof window>"u")return;const n=window.location.pathname.match(/\/([a-zA-Z-]*)/g);return Array.isArray(n)?(r=n[typeof e=="number"?e:0])==null?void 0:r.replace("/",""):void 0}},zC={name:"subdomain",lookup(t){var r,s;let{lookupFromSubdomainIndex:e}=t;const n=typeof e=="number"?e+1:1,i=typeof window<"u"&&((s=(r=window.location)==null?void 0:r.hostname)==null?void 0:s.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i));if(i)return i[n]}};function BC(){return{order:["querystring","cookie","localStorage","sessionStorage","navigator","htmlTag"],lookupQuerystring:"lng",lookupCookie:"i18next",lookupLocalStorage:"i18nextLng",lookupSessionStorage:"i18nextLng",caches:["localStorage"],excludeCacheFor:["cimode"],convertDetectedLanguage:t=>t}}class xv{constructor(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};this.type="languageDetector",this.detectors={},this.init(e,n)}init(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};this.services=e||{languageUtils:{}},this.options=PC(n,this.options||{},BC()),typeof this.options.convertDetectedLanguage=="string"&&this.options.convertDetectedLanguage.indexOf("15897")>-1&&(this.options.convertDetectedLanguage=r=>r.replace("-","_")),this.options.lookupFromUrlIndex&&(this.options.lookupFromPathIndex=this.options.lookupFromUrlIndex),this.i18nOptions=i,this.addDetector(DC),this.addDetector(NC),this.addDetector(IC),this.addDetector(UC),this.addDetector(OC),this.addDetector(FC),this.addDetector(kC),this.addDetector(zC)}addDetector(e){return this.detectors[e.name]=e,this}detect(e){e||(e=this.options.order);let n=[];return e.forEach(i=>{if(this.detectors[i]){let r=this.detectors[i].lookup(this.options);r&&typeof r=="string"&&(r=[r]),r&&(n=n.concat(r))}}),n=n.map(i=>this.options.convertDetectedLanguage(i)),this.services.languageUtils.getBestMatchFromCodes?n:n.length>0?n[0]:null}cacheUserLanguage(e,n){n||(n=this.options.caches),n&&(this.options.excludeCacheFor&&this.options.excludeCacheFor.indexOf(e)>-1||n.forEach(i=>{this.detectors[i]&&this.detectors[i].cacheUserLanguage(e,this.options)}))}}xv.type="languageDetector";const HC="Home",VC="Skills",GC="Projects",WC="Contact",jC="Hi, my name is Mathys.",XC="I transform lines of code into web experiments...",$C="...and debug my mistakes late at night",YC="TOOLS",ZC="Symfony Application ",qC="Mobile Application",KC="UX/UI Frontend",QC={heroSection_title:HC,skillSection_title:VC,projectSection_title:GC,contactSection_title:WC,heroSection_title_1:jC,heroSection_legend_1:XC,heroSection_legend_2:$C,skillSection_tools:YC,projectSection_project_1_desc:ZC,projectSection_project_2_desc:qC,projectSection_project_3_desc:KC},JC="Accueil",eR="Mes technologies",tR="Mes projets",nR="Contact",iR="Enchanté, je m'appelle Mathys.",rR="Je transforme des lignes de code en expériences web...",sR="...et débug mes erreurs tard le soir",oR="OUTILS",aR="Application Symfony",lR="Application Mobile",cR="UX/UI Frontend",uR={heroSection_title:JC,skillSection_title:eR,projectSection_title:tR,contactSection_title:nR,heroSection_title_1:iR,heroSection_legend_1:rR,heroSection_legend_2:sR,skillSection_tools:oR,projectSection_project_1_desc:aR,projectSection_project_2_desc:lR,projectSection_project_3_desc:cR},fR={fr:{translation:uR},en:{translation:QC}};Xt.use(xv).use(o1).init({resources:fR,fallbackLng:"fr",interpolation:{escapeValue:!1}}).then(t=>null);vu.createRoot(document.getElementById("root")).render(te.jsx(rC,{}));
