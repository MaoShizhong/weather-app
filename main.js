(()=>{"use strict";var e={390:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(81),o=t.n(r),a=t(645),i=t.n(a),c=t(667),s=t.n(c),u=new URL(t(353),t.b),l=new URL(t(190),t.b),p=new URL(t(334),t.b),d=new URL(t(262),t.b),f=new URL(t(864),t.b),m=i()(o());m.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Oxygen:wght@300;400;700&display=swap);"]);var h=s()(u),g=s()(l),v=s()(p),y=s()(d),b=s()(f);m.push([e.id,"body {\n    color: white;\n    font-family: 'Oxygen', 'Arial', sans-serif;\n    margin: 0;\n    min-height: 100svh;\n    overflow: hidden;\n    display: flex;\n}\n\nbody > div {\n        flex: 1 1 0;\n        padding: 1rem;\n        background-size: cover;\n        background-attachment: fixed;\n        display: flex;\n        justify-content: center;\n        align-items: flex-end;\n    }\n\nbody :is(input, button) {\n        color: inherit;\n        font-family: inherit;\n    }\n\ninput,\nbutton {\n    background-color: transparent;\n    border: none;\n}\n\nform {\n    display: flex;\n    align-items: center;\n    flex-wrap: nowrap;\n    gap: 0.4rem;\n}\n\n#today {\n    flex: 2 1 0;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: flex-start;\n}\n\n#today input {\n        border: 3px solid white;\n        border-radius: 1.2em;\n        padding: 0.4rem 0.8rem;\n        font-size: 1.2rem;\n    }\n\n#today input::placeholder {\n            color: white;\n            opacity: 1;\n        }\n\n#today input:focus:not(:focus-visible) {\n            outline: none;\n        }\n\n[data-weather='sunny'] {\n    background-image: url("+h+");\n}\n\n[data-weather='rain'] {\n    background-image: url("+g+");\n}\n\n[data-weather='snow'] {\n    background-image: url("+v+");\n}\n\n[data-weather='cloudy'] {\n    background-image: url("+y+");\n}\n\n[data-weather='storm'] {\n    background-image: url("+b+");\n}\n",""]);const w=m},645:e=>{e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var u=0;u<e.length;u++){var l=[].concat(e[u]);r&&i[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),t&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=t):l[2]=t),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},667:e=>{e.exports=function(e,n){return n||(n={}),e?(e=String(e.__esModule?e.default:e),/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),n.hash&&(e+=n.hash),/["'() \t\n]|(%20)/.test(e)||n.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e):e}},81:e=>{e.exports=function(e){return e[1]}},379:e=>{var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],u=r.base?s[0]+r.base:s[0],l=a[u]||0,p="".concat(u," ").concat(l);a[u]=l+1;var d=t(p),f={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==d)n[d].references++,n[d].updater(f);else{var m=o(f,r);r.byIndex=c,n.splice(c,0,{identifier:p,updater:m,references:1})}i.push(p)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),u=0;u<a.length;u++){var l=t(a[u]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=s}}},569:e=>{var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:e=>{e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:(e,n,t)=>{e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:e=>{e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}},262:(e,n,t)=>{e.exports=t.p+"images/cloudy-daee0156358a57f96cd0.webp"},190:(e,n,t)=>{e.exports=t.p+"images/rain-696a668054c031542199.webp"},334:(e,n,t)=>{e.exports=t.p+"images/snow-76c37222cc08784793ec.webp"},864:(e,n,t)=>{e.exports=t.p+"images/storm-b80ad9717cc3a6e3a596.webp"},353:(e,n,t)=>{e.exports=t.p+"images/sunny-7680aa3462387c9be0fe.webp"}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.m=e,t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),(()=>{var e;t.g.importScripts&&(e=t.g.location+"");var n=t.g.document;if(!e&&n&&(n.currentScript&&(e=n.currentScript.src),!e)){var r=n.getElementsByTagName("script");if(r.length)for(var o=r.length-1;o>-1&&!e;)e=r[o--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=e})(),t.b=document.baseURI||self.location.href,t.nc=void 0,(()=>{var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),u=t(216),l=t.n(u),p=t(589),d=t.n(p),f=t(390),m={};m.styleTagTransform=d(),m.setAttributes=s(),m.insert=i().bind(null,"head"),m.domAPI=o(),m.insertStyleElement=l(),n()(f.Z,m),f.Z&&f.Z.locals&&f.Z.locals,t(262),t(353),t(864),t(190),t(334);const h=document.querySelector("form");h.addEventListener("submit",(async function(e){e.preventDefault();const n=h.querySelector("input").value;console.log(n);const t=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=dbe6006f758d40b3a43175139231905&q=${n}&days=7&aqi=no&alerts=no`,{mode:"cors"}),r=await t.json();t.ok?console.log(r.current.temp_c):console.log("No location!")}))})()})();