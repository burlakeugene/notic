!function(t,e){if("object"==typeof exports&&"object"==typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var n=e();for(var i in n)("object"==typeof exports?exports:t)[i]=n[i]}}(window,(function(){return function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="./",n(n.s=5)}([function(t,e,n){var i=n(1);"string"==typeof i&&(i=[[t.i,i,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(3)(i,o);i.locals&&(t.exports=i.locals)},function(t,e,n){(t.exports=n(2)(!1)).push([t.i,".notic{position:fixed;z-index:9999999999;bottom:0px;right:0px;padding-bottom:5px}.notic,.notic *{-webkit-box-sizing:border-box;box-sizing:border-box}.notic__loading{padding-right:50px}.notic-loading{position:absolute;bottom:10px;right:10px;width:40px;height:40px;border-radius:50%;background-color:#fff;padding:5px;-webkit-transform:translateY(calc(100% + 10px));-ms-transform:translateY(calc(100% + 10px));transform:translateY(calc(100% + 10px))}.notic-loading__show{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.notic-loading svg{fill:transparent;stroke-width:5px;stroke:#27ca5d}.notic-message{width:240px;will-change:height;cursor:pointer;margin-right:10px;border-radius:20px;overflow:hidden}.notic-message__auto-width{width:auto}.notic-message-inner{position:relative;min-height:40px;min-width:40px;background-color:#fff;border-radius:20px;margin-top:5px;margin-bottom:5px;padding:10px 10px 10px 40px;display:inline-block;width:100%}.notic-message-inner__with-button{padding-right:25px}.notic-message-icon{width:30px;height:30px;position:absolute;top:5px;left:5px}.notic-message-icon svg{width:100%;height:auto;fill:#0088cc}.notic-message-text{font-size:16px;color:#000}.notic-message-close{width:20px;height:20px;position:absolute;top:5px;right:5px}.notic-message-close svg{stroke:#000;stroke-width:2px}.notic-message__success svg{fill:#27ca5d}.notic-message__error svg{fill:#e74b43}.notic-message__empty{text-align:right}.notic-message__empty .notic-message-inner{width:40px;height:40px;padding:10px}\n",""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var o=(r=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */"),s=i.sources.map((function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"}));return[n].concat(s).concat([o]).join("\n")}var r;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n})).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},o=0;o<this.length;o++){var s=this[o][0];null!=s&&(i[s]=!0)}for(o=0;o<t.length;o++){var r=t[o];null!=r[0]&&i[r[0]]||(n&&!r[2]?r[2]=n:n&&(r[2]="("+r[2]+") and ("+n+")"),e.push(r))}},e}},function(t,e,n){var i,o,s={},r=(i=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=i.apply(this,arguments)),o}),a=function(t,e){return e?e.querySelector(t):document.querySelector(t)},c=function(t){var e={};return function(t,n){if("function"==typeof t)return t();if(void 0===e[t]){var i=a.call(this,t,n);if(window.HTMLIFrameElement&&i instanceof window.HTMLIFrameElement)try{i=i.contentDocument.head}catch(t){i=null}e[t]=i}return e[t]}}(),l=null,u=0,d=[],f=n(4);function p(t,e){for(var n=0;n<t.length;n++){var i=t[n],o=s[i.id];if(o){o.refs++;for(var r=0;r<o.parts.length;r++)o.parts[r](i.parts[r]);for(;r<i.parts.length;r++)o.parts.push(b(i.parts[r],e))}else{var a=[];for(r=0;r<i.parts.length;r++)a.push(b(i.parts[r],e));s[i.id]={id:i.id,refs:1,parts:a}}}}function h(t,e){for(var n=[],i={},o=0;o<t.length;o++){var s=t[o],r=e.base?s[0]+e.base:s[0],a={css:s[1],media:s[2],sourceMap:s[3]};i[r]?i[r].parts.push(a):n.push(i[r]={id:r,parts:[a]})}return n}function m(t,e){var n=c(t.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=d[d.length-1];if("top"===t.insertAt)i?i.nextSibling?n.insertBefore(e,i.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),d.push(e);else if("bottom"===t.insertAt)n.appendChild(e);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=c(t.insertAt.before,n);n.insertBefore(e,o)}}function g(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var e=d.indexOf(t);e>=0&&d.splice(e,1)}function v(t){var e=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var i=function(){0;return n.nc}();i&&(t.attrs.nonce=i)}return y(e,t.attrs),m(t,e),e}function y(t,e){Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])}))}function b(t,e){var n,i,o,s;if(e.transform&&t.css){if(!(s="function"==typeof e.transform?e.transform(t.css):e.transform.default(t.css)))return function(){};t.css=s}if(e.singleton){var r=u++;n=l||(l=v(e)),i=M.bind(null,n,r,!1),o=M.bind(null,n,r,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(t){var e=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",y(e,t.attrs),m(t,e),e}(e),i=T.bind(null,n,e),o=function(){g(n),n.href&&URL.revokeObjectURL(n.href)}):(n=v(e),i=C.bind(null,n),o=function(){g(n)});return i(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;i(t=e)}else o()}}t.exports=function(t,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=r()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var n=h(t,e);return p(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var r=n[o];(a=s[r.id]).refs--,i.push(a)}t&&p(h(t,e),e);for(o=0;o<i.length;o++){var a;if(0===(a=i[o]).refs){for(var c=0;c<a.parts.length;c++)a.parts[c]();delete s[a.id]}}}};var x,w=(x=[],function(t,e){return x[t]=e,x.filter(Boolean).join("\n")});function M(t,e,n,i){var o=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=w(e,o);else{var s=document.createTextNode(o),r=t.childNodes;r[e]&&t.removeChild(r[e]),r.length?t.insertBefore(s,r[e]):t.appendChild(s)}}function C(t,e){var n=e.css,i=e.media;if(i&&t.setAttribute("media",i),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function T(t,e,n){var i=n.css,o=n.sourceMap,s=void 0===e.convertToAbsoluteUrls&&o;(e.convertToAbsoluteUrls||s)&&(i=f(i)),o&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var r=new Blob([i],{type:"text/css"}),a=t.href;t.href=URL.createObjectURL(r),a&&URL.revokeObjectURL(a)}},function(t,e){t.exports=function(t){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var n=e.protocol+"//"+e.host,i=n+e.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(t,e){var o,s=e.trim().replace(/^"(.*)"$/,(function(t,e){return e})).replace(/^'(.*)'$/,(function(t,e){return e}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(s)?t:(o=0===s.indexOf("//")?s:0===s.indexOf("/")?n+s:i+s.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}},function(t,e,n){"use strict";n.r(e);n(0);function i(t){return function(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}(t)||function(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}var s=function(t,e){var n="";return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,"").getPropertyValue(e):t.currentStyle&&(e=e.replace(/\-(\w)/g,(function(t,e){return e.toUpperCase()})),n=t.currentStyle[e]),n},r={loading:'<svg version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" fill="none" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"/><animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"/></circle></svg>',success:'<svg viewBox="0 0 512 512"><path d="M387.106,167.497c-5.857-5.857-15.354-5.858-21.212,0.001L220.705,312.685l-74.599-74.597 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0,21.213l85.205,85.203c2.929,2.929,6.768,4.393,10.606,4.393 c3.839,0,7.678-1.464,10.606-4.394L387.106,188.71C392.964,182.853,392.964,173.355,387.106,167.497z"/><path d="M437.019,74.981C388.667,26.629,324.379,0,256,0C187.62,0,123.333,26.629,74.981,74.981C26.628,123.334,0,187.621,0,256 c0,68.381,26.628,132.668,74.981,181.02C123.332,485.372,187.62,512,256,512s132.667-26.628,181.019-74.98 C485.371,388.668,512,324.381,512,256C512,187.621,485.371,123.334,437.019,74.981z M256,482C131.383,482,30,380.617,30,256 S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/></svg>',error:'<svg viewBox="0 0 475.2 475.2"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>',info:'<svg viewBox="0 0 512 512"><path d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"/><path d="M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"/><path d="M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"/></svg>',close:'<svg viewBox="0 0 40 40"><path d="M10,10 L30,30 M30,10 L10,30"></path></svg>'},a=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.animationTime=e.animationTime||300,this.classNames={container:["notic"]},e.classNames&&e.classNames.container&&(this.classNames.container=[].concat(i(this.classNames.container),i(e.classNames.container))),this.close=e.close||{button:!1,areaClick:!0},this.types={default:"info",list:{loading:{icon:r.loading},success:{icon:r.success},error:{icon:r.error},info:{icon:r.info}}},this.state={loading:!1,messages:{list:[]}},this.rootDOM=null,this.init()}var e,n,a;return e=t,(n=[{key:"setTransition",value:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.animationTime;t&&(t.style.transition="all "+e/1e3+"s",t.style.webkitTransition="all "+e/1e3+"s")}},{key:"build",value:function(){var t=this,e=this.types,n=this.classNames;this.rootDOM=document.createElement("div"),n.container.forEach((function(e){t.rootDOM.classList.add(e)})),this.setTransition(this.rootDOM),this.loadingDom=document.createElement("div"),this.loadingDom.classList.add("notic-loading"),this.loadingDom.innerHTML=e.list.loading.icon,this.setTransition(this.loadingDom),this.rootDOM.appendChild(this.loadingDom),document.body.appendChild(this.rootDOM)}},{key:"destroy",value:function(){this.rootDOM&&this.rootDOM.parentNode.removeChild(this.rootDOM)}},{key:"init",value:function(){this.destroy(),this.build()}},{key:"addMessage",value:function(t){this.types,this.state.messages.list.push(t),this.buildMessage(t)}},{key:"buildMessage",value:function(t){var e=this;if(t){var n=this.rootDOM,i=this.types,o=document.createElement("div"),a=document.createElement("div"),c=document.createElement("div"),l=document.createElement("div"),u=document.createElement("div");t.type=i.list[t.type]?t.type:i.default,t.id=+new Date,o.classList.add("notic-message"),t.autoWidth&&o.classList.add("notic-message__auto-width"),o.classList.add("notic-message__"+t.type),t.message||o.classList.add("notic-message__empty"),a.classList.add("notic-message-inner"),c.classList.add("notic-message-icon"),u.classList.add("notic-message-text"),c.innerHTML=i.list[t.type].icon,u.innerHTML=t.message,a.appendChild(c),a.appendChild(u),this.close.button&&(a.classList.add("notic-message-inner__with-button"),l.classList.add("notic-message-close"),l.innerHTML=r.close,l.onclick=function(){e.hideMessage(t)},a.appendChild(l)),o.appendChild(a),this.setTransition(o),t.dom=o,n.appendChild(t.dom),t.height=0,t.visibleHeight=parseFloat(a.clientHeight)+parseFloat(s(a,"margin-top").replace("px",""))+parseFloat(s(a,"margin-bottom").replace("px","")),t.dom.style.height=t.height,this.close.areaClick&&(t.dom.onclick=function(){t.onClick&&t.onClick(t),e.hideMessage(t)}),this.showMessage(t)}}},{key:"showMessage",value:function(t){var e=this;setTimeout((function(){t.height=t.visibleHeight,t.dom.style.height=t.height+"px",t.dom.classList.add("notic-message__visible"),t.delay&&(t.timeout=setTimeout((function(){e.hideMessage(t)}),t.delay))}),50)}},{key:"hideMessages",value:function(){var t=this;this.state.messages.list.forEach((function(e,n){setTimeout((function(){t.hideMessage(e)}),n*t.animationTime)}))}},{key:"hideMessage",value:function(t){var e=this;t.dom&&(clearTimeout(t.timeout),t.dom.classList.remove("notic-message__visible"),t.dom.style.height=0,setTimeout((function(){e.removeMessage(t)}),this.animationTime))}},{key:"removeMessage",value:function(t){var e=this.state.messages,n=e.list.findIndex((function(e){return e.id===t.id}));e.list.splice(n,1),t.dom&&t.dom.parentNode.removeChild(t.dom),t.dom=null}},{key:"loadingOn",value:function(){var t=this;this.state.loading||(clearTimeout(this.loaderTimeout),this.state.loading=!0,this.rootDOM.classList.add("notic__loading"),this.loaderTimeout=setTimeout((function(){t.loadingDom.classList.add("notic-loading__show")}),this.animationTime))}},{key:"loadingOff",value:function(){var t=this;this.state.loading&&(clearTimeout(this.loaderTimeout),this.state.loading=!1,this.loadingDom.classList.remove("notic-loading__show"),this.loaderTimeout=setTimeout((function(){t.rootDOM.classList.remove("notic__loading")}),this.animationTime))}},{key:"clear",value:function(){this.loadingOff(),this.hideMessages()}}])&&o(e.prototype,n),a&&o(e,a),t}();window.Notic=a;e.default=a}])}));