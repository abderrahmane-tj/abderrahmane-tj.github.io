(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4875:function(t,e){var n;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var n=arguments[e];if(n){var i=typeof n;if("string"===i||"number"===i)t.push(n);else if(Array.isArray(n)){if(n.length){var c=o.apply(null,n);c&&t.push(c)}}else if("object"===i){if(n.toString!==Object.prototype.toString&&!n.toString.toString().includes("[native code]")){t.push(n.toString());continue}for(var u in n)r.call(n,u)&&n[u]&&t.push(u)}}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0!==(n=(function(){return o}).apply(e,[]))&&(t.exports=n)}()},4396:function(t,e,n){var r=n(9165).Symbol;t.exports=r},9809:function(t,e,n){var r=n(9739),o=n(353),i=n(4669),c=n(1563),u=n(1010),a=n(3806),f=Object.prototype.hasOwnProperty;t.exports=function(t,e){var n=i(t),s=!n&&o(t),l=!n&&!s&&c(t),p=!n&&!s&&!l&&a(t),v=n||s||l||p,b=v?r(t.length,String):[],d=b.length;for(var g in t)(e||f.call(t,g))&&!(v&&("length"==g||l&&("offset"==g||"parent"==g)||p&&("buffer"==g||"byteLength"==g||"byteOffset"==g)||u(g,d)))&&b.push(g);return b}},5697:function(t){t.exports=function(t,e){for(var n=-1,r=null==t?0:t.length,o=Array(r);++n<r;)o[n]=e(t[n],n,t);return o}},4229:function(t,e,n){var r=n(7017);t.exports=function(t){var e=t.length;return e?t[r(0,e-1)]:void 0}},732:function(t,e,n){var r=n(4396),o=n(1239),i=n(7058),c=r?r.toStringTag:void 0;t.exports=function(t){return null==t?void 0===t?"[object Undefined]":"[object Null]":c&&c in Object(t)?o(t):i(t)}},4742:function(t,e,n){var r=n(732),o=n(5073);t.exports=function(t){return o(t)&&"[object Arguments]"==r(t)}},2882:function(t,e,n){var r=n(732),o=n(7216),i=n(5073),c={};c["[object Float32Array]"]=c["[object Float64Array]"]=c["[object Int8Array]"]=c["[object Int16Array]"]=c["[object Int32Array]"]=c["[object Uint8Array]"]=c["[object Uint8ClampedArray]"]=c["[object Uint16Array]"]=c["[object Uint32Array]"]=!0,c["[object Arguments]"]=c["[object Array]"]=c["[object ArrayBuffer]"]=c["[object Boolean]"]=c["[object DataView]"]=c["[object Date]"]=c["[object Error]"]=c["[object Function]"]=c["[object Map]"]=c["[object Number]"]=c["[object Object]"]=c["[object RegExp]"]=c["[object Set]"]=c["[object String]"]=c["[object WeakMap]"]=!1,t.exports=function(t){return i(t)&&o(t.length)&&!!c[r(t)]}},7473:function(t,e,n){var r=n(2963),o=n(4457),i=Object.prototype.hasOwnProperty;t.exports=function(t){if(!r(t))return o(t);var e=[];for(var n in Object(t))i.call(t,n)&&"constructor"!=n&&e.push(n);return e}},7017:function(t){var e=Math.floor,n=Math.random;t.exports=function(t,r){return t+e(n()*(r-t+1))}},3381:function(t,e,n){var r=n(4229),o=n(1017);t.exports=function(t){return r(o(t))}},9739:function(t){t.exports=function(t,e){for(var n=-1,r=Array(t);++n<t;)r[n]=e(n);return r}},3124:function(t,e,n){var r=n(2996),o=/^\s+/;t.exports=function(t){return t?t.slice(0,r(t)+1).replace(o,""):t}},8792:function(t){t.exports=function(t){return function(e){return t(e)}}},4290:function(t,e,n){var r=n(5697);t.exports=function(t,e){return r(e,function(e){return t[e]})}},6476:function(t,e,n){var r="object"==typeof n.g&&n.g&&n.g.Object===Object&&n.g;t.exports=r},1239:function(t,e,n){var r=n(4396),o=Object.prototype,i=o.hasOwnProperty,c=o.toString,u=r?r.toStringTag:void 0;t.exports=function(t){var e=i.call(t,u),n=t[u];try{t[u]=void 0;var r=!0}catch(o){}var a=c.call(t);return r&&(e?t[u]=n:delete t[u]),a}},1010:function(t){var e=/^(?:0|[1-9]\d*)$/;t.exports=function(t,n){var r=typeof t;return!!(n=null==n?9007199254740991:n)&&("number"==r||"symbol"!=r&&e.test(t))&&t>-1&&t%1==0&&t<n}},7616:function(t,e,n){var r=n(2448),o=n(7428),i=n(1010),c=n(6838);t.exports=function(t,e,n){if(!c(n))return!1;var u=typeof e;return("number"==u?!!(o(n)&&i(e,n.length)):"string"==u&&e in n)&&r(n[e],t)}},2963:function(t){var e=Object.prototype;t.exports=function(t){var n=t&&t.constructor,r="function"==typeof n&&n.prototype||e;return t===r}},4457:function(t,e,n){var r=n(6462)(Object.keys,Object);t.exports=r},8478:function(t,e,n){t=n.nmd(t);var r=n(6476),o=e&&!e.nodeType&&e,i=o&&t&&!t.nodeType&&t,c=i&&i.exports===o&&r.process,u=function(){try{var t=i&&i.require&&i.require("util").types;if(t)return t;return c&&c.binding&&c.binding("util")}catch(e){}}();t.exports=u},7058:function(t){var e=Object.prototype.toString;t.exports=function(t){return e.call(t)}},6462:function(t){t.exports=function(t,e){return function(n){return t(e(n))}}},9165:function(t,e,n){var r=n(6476),o="object"==typeof self&&self&&self.Object===Object&&self,i=r||o||Function("return this")();t.exports=i},2996:function(t){var e=/\s/;t.exports=function(t){for(var n=t.length;n--&&e.test(t.charAt(n)););return n}},2448:function(t){t.exports=function(t,e){return t===e||t!=t&&e!=e}},353:function(t,e,n){var r=n(4742),o=n(5073),i=Object.prototype,c=i.hasOwnProperty,u=i.propertyIsEnumerable,a=r(function(){return arguments}())?r:function(t){return o(t)&&c.call(t,"callee")&&!u.call(t,"callee")};t.exports=a},4669:function(t){var e=Array.isArray;t.exports=e},7428:function(t,e,n){var r=n(2042),o=n(7216);t.exports=function(t){return null!=t&&o(t.length)&&!r(t)}},1563:function(t,e,n){t=n.nmd(t);var r=n(9165),o=n(4193),i=e&&!e.nodeType&&e,c=i&&t&&!t.nodeType&&t,u=c&&c.exports===i?r.Buffer:void 0,a=u?u.isBuffer:void 0;t.exports=a||o},2042:function(t,e,n){var r=n(732),o=n(6838);t.exports=function(t){if(!o(t))return!1;var e=r(t);return"[object Function]"==e||"[object GeneratorFunction]"==e||"[object AsyncFunction]"==e||"[object Proxy]"==e}},7216:function(t){t.exports=function(t){return"number"==typeof t&&t>-1&&t%1==0&&t<=9007199254740991}},6838:function(t){t.exports=function(t){var e=typeof t;return null!=t&&("object"==e||"function"==e)}},5073:function(t){t.exports=function(t){return null!=t&&"object"==typeof t}},6764:function(t,e,n){var r=n(732),o=n(5073);t.exports=function(t){return"symbol"==typeof t||o(t)&&"[object Symbol]"==r(t)}},3806:function(t,e,n){var r=n(2882),o=n(8792),i=n(8478),c=i&&i.isTypedArray,u=c?o(c):r;t.exports=u},579:function(t,e,n){var r=n(9809),o=n(7473),i=n(7428);t.exports=function(t){return i(t)?r(t):o(t)}},1102:function(t,e,n){var r=n(7017),o=n(7616),i=n(986),c=parseFloat,u=Math.min,a=Math.random;t.exports=function(t,e,n){if(n&&"boolean"!=typeof n&&o(t,e,n)&&(e=n=void 0),void 0===n&&("boolean"==typeof e?(n=e,e=void 0):"boolean"==typeof t&&(n=t,t=void 0)),void 0===t&&void 0===e?(t=0,e=1):(t=i(t),void 0===e?(e=t,t=0):e=i(e)),t>e){var f=t;t=e,e=f}if(n||t%1||e%1){var s=a();return u(t+s*(e-t+c("1e-"+((s+"").length-1))),e)}return r(t,e)}},2052:function(t,e,n){var r=n(4229),o=n(3381),i=n(4669);t.exports=function(t){return(i(t)?r:o)(t)}},4193:function(t){t.exports=function(){return!1}},986:function(t,e,n){var r=n(2931),o=1/0;t.exports=function(t){return t?(t=r(t))===o||t===-o?(t<0?-1:1)*17976931348623157e292:t==t?t:0:0===t?t:0}},2931:function(t,e,n){var r=n(3124),o=n(6838),i=n(6764),c=0/0,u=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,s=parseInt;t.exports=function(t){if("number"==typeof t)return t;if(i(t))return c;if(o(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=o(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=r(t);var n=a.test(t);return n||f.test(t)?s(t.slice(2),n?2:8):u.test(t)?c:+t}},1017:function(t,e,n){var r=n(4290),o=n(579);t.exports=function(t){return null==t?[]:r(t,o(t))}},4182:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6306)}])},6306:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return E}});var r=n(1527),o=n(959),i=n(4875),c=n.n(i),u=n(1102),a=n.n(u),f=n(2052),s=n.n(f);let l=t=>t*Math.PI/180,p=t=>t/Math.PI*180,v=(t,e,n)=>t>=n?n:t<=e?e:t,b=(t,e,n,r)=>{let o=r/Math.sin(Math.PI/2),i=e-n.top,c=t-(n.left+r/2),u=p(Math.asin(i/Math.sqrt(i*i+c*c))),a="";i<0&&c<0&&(a="top-left"),i>=0&&c<0&&(a="bottom-left"),i<0&&c>=0&&(a="top-right"),i>=0&&c>=0&&(a="bottom-right");let f=u;switch(a){case"top-left":f=-u;break;case"top-right":f=u+180;break;case"bottom-right":f=180-f}f=v(f,30,150);let s=(180-f)/2,b=f/2,d=o*Math.sin(l(s))/r,g=o*Math.sin(l(b))/r;return{rightScale:d,leftScale:g,topAngle:90,rightAngle:b,leftAngle:s}},d=null,g=null,y={},h=75,j=["green","red","purple"],x=j[0],m=!0,A={rightScale:.707,leftScale:.707,topAngle:90,leftAngle:45,rightAngle:45},O=()=>{m=!0,y=null==g?void 0:g.getBoundingClientRect(),h=12.5*window.innerHeight/100},w=t=>{if(!y)return!1;m=!0;let{rightScale:e,leftScale:n,topAngle:r,rightAngle:o,leftAngle:i}=b(t.pageX,t.pageY,y,h);A={rightScale:e,leftScale:n,topAngle:r,rightAngle:o,leftAngle:i}},S=()=>{if(A&&m){let{rightAngle:t,leftAngle:e,rightScale:n,leftScale:r,topAngle:o}=A,i="\n--base: ".concat(h,"px;\n--right-scale: ").concat(n,";\n--left-scale: ").concat(r,";\n--top-angle: ").concat(o,"deg;\n--right-angle: ").concat(t,"deg;\n--left-angle: ").concat(e,"deg;");g.setAttribute("style",i),m=!1}window.requestAnimationFrame(S)},N=()=>{var t;if(!d)return;let e=null!==(t=s()(j))&&void 0!==t?t:"green";d.classList.remove("".concat(x,"-theme")),d.classList.add("".concat(e,"-theme")),x=e,setTimeout(N,2e3)},M=t=>{let{orientation:e,level:n}=t,[i,u]=(0,o.useState)([]),f=(0,o.useMemo)(()=>Math.pow(.8,n),[]);return(0,o.useEffect)(()=>{if(n<4){let t=a()(750,1500);setTimeout(()=>{u(["right"])},t),setTimeout(()=>{u(["left","right"])},a()(t,3e3))}},[]),(0,r.jsx)("div",{style:{"--coefficient":f},className:c()("Node",{"Node--left":"left"==e,"Node--right":"right"==e,"Node--full":2===i.length,"Node--growing":i.length<2},"level-".concat(n)),children:(0,r.jsx)("div",{className:"Node--inner",children:i.map(t=>(0,r.jsx)(M,{orientation:t,level:n+1},t))})})};function E(){return(0,o.useEffect)(()=>{!function(){if(d=document.querySelector(".App"),document.getElementById("debug"),!(g=document.getElementById("base"))||!d)return console.error({app:d,baseElement:g}),Error("required elements missing!");y=g.getBoundingClientRect(),m=!0,N(),O(),S(),window.addEventListener("mousemove",w,!1),window.addEventListener("resize",O,!1)}()}),(0,r.jsx)("div",{className:"App",children:(0,r.jsx)("div",{id:"base",className:"base",children:(0,r.jsx)(M,{level:0})})})}}},function(t){t.O(0,[774,888,179],function(){return t(t.s=4182)}),_N_E=t.O()}]);