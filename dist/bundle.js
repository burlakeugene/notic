!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var i in n)("object"==typeof exports?exports:e)[i]=n[i]}}(self,(function(){return function(){"use strict";var e={337:function(e,t,n){var i=n(354),o=n.n(i),s=n(314);n.n(s)()(o()).push([e.id,".notic{--background: #fff;--green: #27ca5d;--red: #e74b43;--blue: #0088cc;--color: #000;--width: 240px;position:fixed;z-index:9999999999;bottom:0px;right:0px;padding-bottom:5px;pointer-events:none}.notic,.notic *{-webkit-box-sizing:border-box;box-sizing:border-box}.notic--loading{padding-right:50px}.notic__loading{pointer-events:all;position:absolute;bottom:10px;right:10px;width:40px;height:40px;border-radius:50%;background-color:var(--background);padding:5px;-webkit-transform:translateY(calc(100% + 10px));-ms-transform:translateY(calc(100% + 10px));transform:translateY(calc(100% + 10px));color:var(--green);stroke-width:5px}.notic__loading--show{-webkit-transform:translateY(0);-ms-transform:translateY(0);transform:translateY(0)}.notic__message{pointer-events:all;width:var(--width);will-change:height;cursor:pointer;margin-right:10px;border-radius:20px;overflow:hidden;font-size:16px;color:var(--color);--icon-color: var(--color)}.notic__message--auto-width{width:auto}.notic__message__inner{position:relative;min-height:40px;min-width:40px;background-color:var(--background);border-radius:20px;margin-top:5px;margin-bottom:5px;padding:5px;width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;gap:5px;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.notic__message__icon{width:30px;height:30px;-ms-flex-negative:0;flex-shrink:0;color:var(--icon-color);-ms-flex-item-align:start;align-self:flex-start}.notic__message--success{--icon-color: var(--green)}.notic__message--error{--icon-color: var(--red)}.notic__message--info{--icon-color: var(--blue)}.notic__message__close{width:20px;height:20px;-ms-flex-negative:0;flex-shrink:0;stroke-width:2px}.notic__message__text{-webkit-box-flex:1;-ms-flex:1;flex:1;-ms-flex-item-align:center;align-self:center}.notic__message--empty{text-align:right}.notic__message--empty .notic__message__inner{width:40px;height:40px;padding:10px}","",{version:3,sources:["webpack://./src/Notic/index.scss"],names:[],mappings:"AAAA,OACE,kBAAA,CACA,gBAAA,CACA,cAAA,CACA,eAAA,CACA,aAAA,CACA,cAAA,CAQA,cAAA,CACA,kBAAA,CACA,UAAA,CACA,SAAA,CACA,kBAAA,CACA,mBAAA,CAXA,gBAEE,6BAAA,CACQ,qBAAA,CASV,gBACE,kBAAA,CAEF,gBACE,kBAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,UAAA,CACA,WAAA,CACA,iBAAA,CACA,kCAAA,CACA,WAAA,CACA,+CAAA,CACI,2CAAA,CACI,uCAAA,CACR,kBAAA,CACA,gBAAA,CACA,sBACE,+BAAA,CACI,2BAAA,CACI,uBAAA,CAGZ,gBACE,kBAAA,CACA,kBAAA,CACA,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,kBAAA,CACA,eAAA,CACA,cAAA,CACA,kBAAA,CACA,0BAAA,CACA,4BACE,UAAA,CAEF,uBACE,iBAAA,CACA,eAAA,CACA,cAAA,CACA,kCAAA,CACA,kBAAA,CACA,cAAA,CACA,iBAAA,CACA,WAAA,CACA,UAAA,CACA,mBAAA,CACA,mBAAA,CACA,YAAA,CACA,OAAA,CACA,wBAAA,CACI,qBAAA,CACI,kBAAA,CAEV,sBACE,UAAA,CACA,WAAA,CACA,mBAAA,CACI,aAAA,CACJ,uBAAA,CACA,yBAAA,CACI,qBAAA,CAEN,yBACE,0BAAA,CAEF,uBACE,wBAAA,CAEF,sBACE,yBAAA,CAEF,uBACE,UAAA,CACA,WAAA,CACA,mBAAA,CACI,aAAA,CACJ,gBAAA,CAEF,sBACE,kBAAA,CACI,UAAA,CACI,MAAA,CACR,0BAAA,CACI,iBAAA,CAEN,uBACE,gBAAA,CACA,8CACE,UAAA,CACA,WAAA,CACA,YAAA",sourcesContent:[".notic {\n  --background: #fff;\n  --green: #27ca5d;\n  --red: #e74b43;\n  --blue: #0088cc;\n  --color: #000;\n  --width: 240px;\n\n  &,\n  & * {\n    -webkit-box-sizing: border-box;\n            box-sizing: border-box;\n  }\n\n  position: fixed;\n  z-index: 9999999999;\n  bottom: 0px;\n  right: 0px;\n  padding-bottom: 5px;\n  pointer-events: none;\n  &--loading {\n    padding-right: 50px;\n  }\n  &__loading {\n    pointer-events: all;\n    position: absolute;\n    bottom: 10px;\n    right: 10px;\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-color: var(--background);\n    padding: 5px;\n    -webkit-transform: translateY(calc(100% + 10px));\n        -ms-transform: translateY(calc(100% + 10px));\n            transform: translateY(calc(100% + 10px));\n    color: var(--green);\n    stroke-width: 5px;\n    &--show {\n      -webkit-transform: translateY(0);\n          -ms-transform: translateY(0);\n              transform: translateY(0);\n    }\n  }\n  &__message {\n    pointer-events: all;\n    width: var(--width);\n    will-change: height;\n    cursor: pointer;\n    margin-right: 10px;\n    border-radius: 20px;\n    overflow: hidden;\n    font-size: 16px;\n    color: var(--color);\n    --icon-color: var(--color);\n    &--auto-width {\n      width: auto;\n    }\n    &__inner {\n      position: relative;\n      min-height: 40px;\n      min-width: 40px;\n      background-color: var(--background);\n      border-radius: 20px;\n      margin-top: 5px;\n      margin-bottom: 5px;\n      padding: 5px;\n      width: 100%;\n      display: -webkit-box;\n      display: -ms-flexbox;\n      display: flex;\n      gap: 5px;\n      -webkit-box-align: center;\n          -ms-flex-align: center;\n              align-items: center;\n    }\n    &__icon {\n      width: 30px;\n      height: 30px;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      color: var(--icon-color);\n      -ms-flex-item-align: start;\n          align-self: flex-start;\n    }\n    &--success {\n      --icon-color: var(--green);\n    }\n    &--error {\n      --icon-color: var(--red);\n    }\n    &--info{\n      --icon-color: var(--blue);\n    }\n    &__close {\n      width: 20px;\n      height: 20px;\n      -ms-flex-negative: 0;\n          flex-shrink: 0;\n      stroke-width: 2px;\n    }\n    &__text{\n      -webkit-box-flex: 1;\n          -ms-flex: 1;\n              flex: 1;\n      -ms-flex-item-align: center;\n          align-self: center;\n    }\n    &--empty {\n      text-align: right;\n      .notic__message__inner {\n        width: 40px;\n        height: 40px;\n        padding: 10px;\n      }\n    }\n  }\n}\n"],sourceRoot:""}])},314:function(e){e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",i=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),i&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),i&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,i,o,s){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(i)for(var r=0;r<this.length;r++){var A=this[r][0];null!=A&&(a[A]=!0)}for(var c=0;c<e.length;c++){var l=[].concat(e[c]);i&&a[l[0]]||(void 0!==s&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=s),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),t.push(l))}},t}},354:function(e){e.exports=function(e){var t=e[1],n=e[3];if(!n)return t;if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),s="/*# ".concat(o," */");return[t].concat([s]).join("\n")}return[t].join("\n")}}},t={};function n(i){var o=t[i];if(void 0!==o)return o.exports;var s=t[i]={id:i,exports:{}};return e[i](s,s.exports,n),s.exports}n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var i in t)n.o(t,i)&&!n.o(e,i)&&Object.defineProperty(e,i,{enumerable:!0,get:t[i]})},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var i={};return function(){n.r(i),n.d(i,{default:function(){return o}}),n(337);const e=function(e,t){var n="";return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(e,"").getPropertyValue(t):e.currentStyle&&(t=t.replace(/\-(\w)/g,(function(e,t){return t.toUpperCase()})),n=e.currentStyle[t]),n};class t{constructor(e={}){this.animationTime=e.animationTime||300,this.classNames={container:["notic"]},e.classNames&&e.classNames.container&&(this.classNames.container=[...this.classNames.container,...e.classNames.container]),this.close=e.close||{button:!1,area:!0},this.types={default:"info",list:{loading:{icon:'<svg version="1.1" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"/><animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"/></circle></svg>'},success:{icon:'<svg viewBox="0 0 512 512" fill="currentColor"><path d="M387.106,167.497c-5.857-5.857-15.354-5.858-21.212,0.001L220.705,312.685l-74.599-74.597 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0,21.213l85.205,85.203c2.929,2.929,6.768,4.393,10.606,4.393 c3.839,0,7.678-1.464,10.606-4.394L387.106,188.71C392.964,182.853,392.964,173.355,387.106,167.497z"/><path d="M437.019,74.981C388.667,26.629,324.379,0,256,0C187.62,0,123.333,26.629,74.981,74.981C26.628,123.334,0,187.621,0,256 c0,68.381,26.628,132.668,74.981,181.02C123.332,485.372,187.62,512,256,512s132.667-26.628,181.019-74.98 C485.371,388.668,512,324.381,512,256C512,187.621,485.371,123.334,437.019,74.981z M256,482C131.383,482,30,380.617,30,256 S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/></svg>'},error:{icon:'<svg viewBox="0 0 475.2 475.2" fill="currentColor"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>'},info:{icon:'<svg viewBox="0 0 512 512" fill="currentColor"><path d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"/><path d="M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"/><path d="M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"/></svg>'}}},this.state={loading:!1,messages:{list:[]}},this.rootDOM=null,this.init()}setTransition(e,t=this.animationTime){e&&(e.style.transition="all "+t/1e3+"s",e.style.webkitTransition="all "+t/1e3+"s")}build(){let{types:e,classNames:t}=this;this.rootDOM=document.createElement("div"),t.container.forEach((e=>{this.rootDOM.classList.add(e)})),this.setTransition(this.rootDOM),this.loadingDom=document.createElement("div"),this.loadingDom.classList.add("notic__loading"),this.loadingDom.innerHTML=e.list.loading.icon,this.setTransition(this.loadingDom),this.rootDOM.appendChild(this.loadingDom),document.body.appendChild(this.rootDOM)}destroy(){this.rootDOM&&this.rootDOM.parentNode.removeChild(this.rootDOM)}init(){this.destroy(),this.build()}addMessage(e){let{types:t}=this,{messages:n}=this.state;n.list.push(e),this.buildMessage(e)}buildMessage(t){if(!t)return;let{rootDOM:n,types:i}=this,o=document.createElement("div"),s=document.createElement("div"),a=document.createElement("div"),r=document.createElement("div"),A=document.createElement("div");t.type=i.list[t.type]?t.type:i.default,t.id=+new Date,o.classList.add("notic__message"),t.autoWidth&&o.classList.add("notic__message--auto-width"),o.classList.add("notic__message--"+t.type),t.message||o.classList.add("notic__message--empty"),s.classList.add("notic__message__inner"),a.classList.add("notic__message__icon"),A.classList.add("notic__message__text"),a.innerHTML=i.list[t.type].icon,A.innerHTML=t.message,s.appendChild(a),s.appendChild(A),this.close.button&&(s.classList.add("notic__message__inner--with-button"),r.classList.add("notic__message__close"),r.innerHTML='<svg viewBox="0 0 40 40" stroke="currentColor"><path d="M10,10 L30,30 M30,10 L10,30"></path></svg>',r.onclick=()=>{this.hideMessage(t)},s.appendChild(r)),o.appendChild(s),this.setTransition(o),t.dom=o,n.appendChild(t.dom),t.height=0,t.visibleHeight=parseFloat(s.clientHeight)+parseFloat(e(s,"margin-top").replace("px",""))+parseFloat(e(s,"margin-bottom").replace("px","")),t.dom.style.height=t.height,this.close.area&&(t.dom.onclick=()=>{t.onClick&&t.onClick(t),this.hideMessage(t)}),this.showMessage(t)}showMessage(e){setTimeout((()=>{e.height=e.visibleHeight,e.dom.style.height=e.height+"px",e.dom.classList.add("notic__message--visible"),e.delay&&(e.timeout=setTimeout((()=>{this.hideMessage(e)}),e.delay))}),50)}hideMessages(){let{messages:e}=this.state;e.list.forEach(((e,t)=>{setTimeout((()=>{this.hideMessage(e)}),t*this.animationTime)}))}hideMessage(e){e.dom&&(clearTimeout(e.timeout),e.dom.classList.remove("notic__message--visible"),e.dom.style.height=0,setTimeout((()=>{this.removeMessage(e)}),this.animationTime))}removeMessage(e){let{messages:t}=this.state,n=t.list.findIndex((t=>t.id===e.id));t.list.splice(n,1),e.dom&&e.dom.parentNode.removeChild(e.dom),e.dom=null}loadingOn(){this.state.loading||(clearTimeout(this.loaderTimeout),this.state.loading=!0,this.rootDOM.classList.add("notic--loading"),this.loaderTimeout=setTimeout((()=>{this.loadingDom.classList.add("notic__loading--show")}),this.animationTime))}loadingOff(){this.state.loading&&(clearTimeout(this.loaderTimeout),this.state.loading=!1,this.loadingDom.classList.remove("notic__loading--show"),this.loaderTimeout=setTimeout((()=>{this.rootDOM.classList.remove("notic--loading")}),this.animationTime))}clear(){this.loadingOff(),this.hideMessages()}}window.Notic=t;var o=t}(),i}()}));
//# sourceMappingURL=bundle.js.map