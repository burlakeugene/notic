!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var i=t();for(var n in i)("object"==typeof exports?exports:e)[n]=i[n]}}(window,(function(){return function(e){var t={};function i(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,i),r.l=!0,r.exports}return i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="./",i(i.s=7)}([function(e,t,i){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var i=function(e,t){var i=e[1]||"",n=e[3];if(!n)return i;if(t&&"function"==typeof btoa){var r=(s=n,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=n.sources.map((function(e){return"/*# sourceURL="+n.sourceRoot+e+" */"}));return[i].concat(o).concat([r]).join("\n")}var s;return[i].join("\n")}(t,e);return t[2]?"@media "+t[2]+"{"+i+"}":i})).join("")},t.i=function(e,i){"string"==typeof e&&(e=[[null,e,""]]);for(var n={},r=0;r<this.length;r++){var o=this[r][0];null!=o&&(n[o]=!0)}for(r=0;r<e.length;r++){var s=e[r];null!=s[0]&&n[s[0]]||(i&&!s[2]?s[2]=i:i&&(s[2]="("+s[2]+") and ("+i+")"),t.push(s))}},t}},function(e,t,i){var n,r,o={},s=(n=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===r&&(r=n.apply(this,arguments)),r}),a=function(e,t){return t?t.querySelector(e):document.querySelector(e)},c=function(e){var t={};return function(e,i){if("function"==typeof e)return e();if(void 0===t[e]){var n=a.call(this,e,i);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}}(),l=null,f=0,u=[],d=i(4);function p(e,t){for(var i=0;i<e.length;i++){var n=e[i],r=o[n.id];if(r){r.refs++;for(var s=0;s<r.parts.length;s++)r.parts[s](n.parts[s]);for(;s<n.parts.length;s++)r.parts.push(b(n.parts[s],t))}else{var a=[];for(s=0;s<n.parts.length;s++)a.push(b(n.parts[s],t));o[n.id]={id:n.id,refs:1,parts:a}}}}function h(e,t){for(var i=[],n={},r=0;r<e.length;r++){var o=e[r],s=t.base?o[0]+t.base:o[0],a={css:o[1],media:o[2],sourceMap:o[3]};n[s]?n[s].parts.push(a):i.push(n[s]={id:s,parts:[a]})}return i}function v(e,t){var i=c(e.insertInto);if(!i)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var n=u[u.length-1];if("top"===e.insertAt)n?n.nextSibling?i.insertBefore(t,n.nextSibling):i.appendChild(t):i.insertBefore(t,i.firstChild),u.push(t);else if("bottom"===e.insertAt)i.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var r=c(e.insertAt.before,i);i.insertBefore(t,r)}}function m(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=u.indexOf(e);t>=0&&u.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var n=function(){0;return i.nc}();n&&(e.attrs.nonce=n)}return y(t,e.attrs),v(e,t),t}function y(e,t){Object.keys(t).forEach((function(i){e.setAttribute(i,t[i])}))}function b(e,t){var i,n,r,o;if(t.transform&&e.css){if(!(o="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=o}if(t.singleton){var s=f++;i=l||(l=g(t)),n=w.bind(null,i,s,!1),r=w.bind(null,i,s,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(i=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),v(e,t),t}(t),n=k.bind(null,i,t),r=function(){m(i),i.href&&URL.revokeObjectURL(i.href)}):(i=g(t),n=O.bind(null,i),r=function(){m(i)});return n(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;n(e=t)}else r()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=s()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var i=h(e,t);return p(i,t),function(e){for(var n=[],r=0;r<i.length;r++){var s=i[r];(a=o[s.id]).refs--,n.push(a)}e&&p(h(e,t),t);for(r=0;r<n.length;r++){var a;if(0===(a=n[r]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete o[a.id]}}}};var M,x=(M=[],function(e,t){return M[e]=t,M.filter(Boolean).join("\n")});function w(e,t,i,n){var r=i?"":n.css;if(e.styleSheet)e.styleSheet.cssText=x(t,r);else{var o=document.createTextNode(r),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(o,s[t]):e.appendChild(o)}}function O(e,t){var i=t.css,n=t.media;if(n&&e.setAttribute("media",n),e.styleSheet)e.styleSheet.cssText=i;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(i))}}function k(e,t,i){var n=i.css,r=i.sourceMap,o=void 0===t.convertToAbsoluteUrls&&r;(t.convertToAbsoluteUrls||o)&&(n=d(n)),r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var s=new Blob([n],{type:"text/css"}),a=e.href;e.href=URL.createObjectURL(s),a&&URL.revokeObjectURL(a)}},function(e,t,i){var n=i(3);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,i){(e.exports=i(0)(!1)).push([e.i,".notifier{position:fixed;bottom:10px;right:10px;font-family:arial;opacity:0;visibility:hidden;-webkit-transition:all 0.3s;-o-transition:all 0.3s;transition:all 0.3s;z-index:99999999;background-color:#fff;border-radius:20px;cursor:pointer;overflow:hidden;min-height:36px;min-width:36px}.notifier,.notifier *{-webkit-box-sizing:border-box;box-sizing:border-box}.notifier-message{padding:10px 10px 10px 40px;font-size:16px}.notifier-icon{width:30px;height:30px;position:absolute;top:50%;margin-top:-15px;left:5px;-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);visibility:hidden;opacity:0}.notifier-icon svg{width:100%;height:auto;fill:#0088cc}.notifier-icon__loading{cursor:default}.notifier-icon__loading svg{fill:transparent;stroke:#27ca5d;stroke-width:10px;-webkit-animation:rotate linear 0.6s infinite;animation:rotate linear 0.6s infinite}.notifier-icon__success svg{fill:#27ca5d}.notifier-icon__error svg{fill:#e74b43}.notifier__loading{width:38px;height:38px}.notifier__loading .notifier-icon__loading{-webkit-transform:scale(1) translate(-50%, -50%);-ms-transform:scale(1) translate(-50%, -50%);transform:scale(1) translate(-50%, -50%);opacity:1;visibility:visible;left:50%;top:50%;margin-top:0}.notifier__success .notifier-icon__success{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}.notifier__error .notifier-icon__error{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}.notifier__info .notifier-icon__info{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);opacity:1;visibility:visible}.notifier__visible{opacity:1;visibility:visible}@-webkit-keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes rotate{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}\n",""])},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var i=t.protocol+"//"+t.host,n=i+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var r,o=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?i+o:n+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")}))}},function(e,t,i){var n=i(6);"string"==typeof n&&(n=[[e.i,n,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};i(1)(n,r);n.locals&&(e.exports=n.locals)},function(e,t,i){(t=e.exports=i(0)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Muli:400,700,900&display=swap&subset=latin-ext);",""]),t.push([e.i,"*{-webkit-box-sizing:border-box;box-sizing:border-box}body{margin:0;font-family:'Muli';font-weight:400;background-color:#7bdcb5;height:100%}body,html{height:100%}body{background-color:#eee}\n",""])},function(e,t,i){"use strict";i.r(t);i(2);function n(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}var r=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.defaultType="info",this.types={loading:{icon:'<svg viewBox="0 0 100 100"><path d="M10,50 a1,1 0 0,0 80,0" /></svg>'},success:{icon:'<svg viewBox="0 0 512 512"><path d="M387.106,167.497c-5.857-5.857-15.354-5.858-21.212,0.001L220.705,312.685l-74.599-74.597 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0,21.213l85.205,85.203c2.929,2.929,6.768,4.393,10.606,4.393 c3.839,0,7.678-1.464,10.606-4.394L387.106,188.71C392.964,182.853,392.964,173.355,387.106,167.497z"/><path d="M437.019,74.981C388.667,26.629,324.379,0,256,0C187.62,0,123.333,26.629,74.981,74.981C26.628,123.334,0,187.621,0,256 c0,68.381,26.628,132.668,74.981,181.02C123.332,485.372,187.62,512,256,512s132.667-26.628,181.019-74.98 C485.371,388.668,512,324.381,512,256C512,187.621,485.371,123.334,437.019,74.981z M256,482C131.383,482,30,380.617,30,256 S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/></svg>'},error:{icon:'<svg viewBox="0 0 475.2 475.2"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>'},info:{icon:'<svg viewBox="0 0 512 512"><path d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"/><path d="M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"/><path d="M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"/></svg>'}},this.messages={queue:[],current:!1},this.rootDOM=null,this.messageDOM=null,this.init()}var t,i,r;return t=e,(i=[{key:"build",value:function(){for(var e in this.rootDOM=document.createElement("div"),this.rootDOM.classList.add("notifier"),this.types){var t=document.createElement("div");t.classList.add("notifier-icon"),t.classList.add("notifier-icon__"+e),t.innerHTML=this.types[e].icon,this.rootDOM.appendChild(t)}this.messageDOM=document.createElement("div"),this.messageDOM.classList.add("notifier-message"),this.messageDOM.innerHTML="",this.rootDOM.appendChild(this.messageDOM),this.rootDOM.addEventListener("click",this.hideMessage.bind(this)),document.body.appendChild(this.rootDOM)}},{key:"destroy",value:function(){this.rootDOM&&(this.rootDOM.removeEventListener("click",this.hideMessage.bind(this)),this.rootDOM.parentNode.removeChild(this.rootDOM),this.rootDOM=null,this.messageDOM=null)}},{key:"init",value:function(){this.destroy(),this.build()}},{key:"hideMessage",value:function(){var e=this.messages.current;e&&"loading"!==e.type&&this.setMessage(!1)}},{key:"removeAllTypes",value:function(){if(this.rootDOM)for(var e in this.types)this.rootDOM.classList.remove("notifier__"+e)}},{key:"clear",value:function(){this.messages={queue:[],current:!1},clearTimeout(this.delayHide),this.setMessage(!1)}},{key:"setType",value:function(e){e=this.types[e]?e:this.defaultType,this.rootDOM.classList.add("notifier__"+e)}},{key:"checkForMessage",value:function(){if(!this.messages.current){var e=this.messages.queue.shift();e&&(e.type||(e.type=this.defaultType),this.setMessage(e))}}},{key:"setMessage",value:function(e){var t=this;e?(this.messages.current=e,this.removeAllTypes(),this.rootDOM.classList.add("notifier__visible"),this.setType(e.type),this.messageDOM.innerHTML=e.message||"",e.delay&&(this.delayHide=setTimeout((function(){t.setMessage(!1)}),e.delay))):(clearTimeout(this.delayHide),this.messages.current=!1,this.rootDOM.classList.remove("notifier__visible"),setTimeout((function(){t.checkForMessage()}),300))}},{key:"addMessage",value:function(e){if("loading"===e.type){if(this.messages.current&&"loading"===this.messages.current.type||this.messages.queue[0]&&"loading"===this.messages.queue[0].type)return;this.messages.queue.unshift(e),this.setMessage(!1)}else this.messages.queue.push(e),this.checkForMessage();console.log(this.messages.queue)}},{key:"loadingOn",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t={type:"loading",text:""};e&&(t.delay=e),this.addMessage(t)}},{key:"loadingOff",value:function(){var e=this.messages.current;e&&"loading"!==e.type||this.setMessage(!1)}}])&&n(t.prototype,i),r&&n(t,r),e}();i(5);window.addEventListener("load",(function(){var e=new r;document.querySelectorAll("[data-notifier-type]").forEach((function(t){t.addEventListener("click",(function(i){var n=t.getAttribute("data-notifier-type"),r=t.getAttribute("data-notifier-message"),o=t.getAttribute("data-notifier-delay");if("loading-on"===n)e.loadingOn(4e3);else if("loading-off"===n)e.loadingOff();else{var s={message:r,type:n};o&&(s.delay=o),e.addMessage(s)}}))})),document.querySelectorAll("[data-notifier-clear]").forEach((function(t){t.addEventListener("click",(function(){e.clear()}))}))}))}])}));