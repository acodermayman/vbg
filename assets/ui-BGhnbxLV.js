import{r as g}from"./vendor-nf7bT_Uh.js";var j={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=g;function R(r,u){return r===u&&(r!==0||1/r===1/u)||r!==r&&u!==u}var z=typeof Object.is=="function"?Object.is:R,E=l.useSyncExternalStore,M=l.useRef,A=l.useEffect,D=l.useMemo,O=l.useDebugValue;j.useSyncExternalStoreWithSelector=function(r,u,f,e,t){var a=M(null);if(a.current===null){var n={hasValue:!1,value:null};a.current=n}else n=a.current;a=D(function(){function s(o){if(!b){if(b=!0,v=o,o=e(o),t!==void 0&&n.hasValue){var i=n.value;if(t(i,o))return m=i}return m=o}if(i=m,z(v,o))return i;var y=e(o);return t!==void 0&&t(i,y)?(v=o,i):(v=o,m=y)}var b=!1,v,m,d=f===void 0?null:f;return[function(){return s(u())},d===null?void 0:function(){return s(d())}]},[u,f,e,t]);var c=E(r,a[0],a[1]);return A(function(){n.hasValue=!0,n.value=c},[c]),O(c),c};function V(r){var u,f,e="";if(typeof r=="string"||typeof r=="number")e+=r;else if(typeof r=="object")if(Array.isArray(r)){var t=r.length;for(u=0;u<t;u++)r[u]&&(f=V(r[u]))&&(e&&(e+=" "),e+=f)}else for(f in r)r[f]&&(e&&(e+=" "),e+=f);return e}function G(){for(var r,u,f=0,e="",t=arguments.length;f<t;f++)(r=arguments[f])&&(u=V(r))&&(e&&(e+=" "),e+=u);return e}export{G as c};
//# sourceMappingURL=ui-BGhnbxLV.js.map
