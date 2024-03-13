!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var s=t();for(var i in s)("object"==typeof exports?exports:e)[i]=s[i]}}(self,(function(){return function(){"use strict";var e={d:function(t,s){for(var i in s)e.o(s,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:s[i]})},o:function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r:function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:function(){return o}});const s=function(e,t){var s="";return document.defaultView&&document.defaultView.getComputedStyle?s=document.defaultView.getComputedStyle(e,"").getPropertyValue(t):e.currentStyle&&(t=t.replace(/\-(\w)/g,(function(e,t){return t.toUpperCase()})),s=e.currentStyle[t]),s};class i{constructor(e={}){this.animationTime=e.animationTime||300,this.classNames={container:["notic"]},e.classNames&&e.classNames.container&&(this.classNames.container=[...this.classNames.container,...e.classNames.container]),this.close=e.close||{button:!1,area:!0},this.types={default:"info",list:{loading:{icon:'<svg version="1.1" stroke="currentColor" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="25 25 50 50"><circle cx="50" cy="50" r="20" stroke-linecap="round" stroke-dashoffset="0" stroke-dasharray="100, 200"><animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 50 50" to="360 50 50" dur="2.5s" repeatCount="indefinite"/><animate attributeName="stroke-dashoffset" values="0;-30;-124" dur="1.25s" repeatCount="indefinite"/><animate attributeName="stroke-dasharray" values="0,200;110,200;110,200" dur="1.25s" repeatCount="indefinite"/></circle></svg>'},success:{icon:'<svg viewBox="0 0 512 512" fill="currentColor"><path d="M387.106,167.497c-5.857-5.857-15.354-5.858-21.212,0.001L220.705,312.685l-74.599-74.597 c-5.857-5.857-15.355-5.858-21.213,0.001c-5.857,5.858-5.857,15.355,0,21.213l85.205,85.203c2.929,2.929,6.768,4.393,10.606,4.393 c3.839,0,7.678-1.464,10.606-4.394L387.106,188.71C392.964,182.853,392.964,173.355,387.106,167.497z"/><path d="M437.019,74.981C388.667,26.629,324.379,0,256,0C187.62,0,123.333,26.629,74.981,74.981C26.628,123.334,0,187.621,0,256 c0,68.381,26.628,132.668,74.981,181.02C123.332,485.372,187.62,512,256,512s132.667-26.628,181.019-74.98 C485.371,388.668,512,324.381,512,256C512,187.621,485.371,123.334,437.019,74.981z M256,482C131.383,482,30,380.617,30,256 S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z"/></svg>'},error:{icon:'<svg viewBox="0 0 475.2 475.2" fill="currentColor"><path d="M405.6,69.6C360.7,24.7,301.1,0,237.6,0s-123.1,24.7-168,69.6S0,174.1,0,237.6s24.7,123.1,69.6,168s104.5,69.6,168,69.6 s123.1-24.7,168-69.6s69.6-104.5,69.6-168S450.5,114.5,405.6,69.6z M386.5,386.5c-39.8,39.8-92.7,61.7-148.9,61.7 s-109.1-21.9-148.9-61.7c-82.1-82.1-82.1-215.7,0-297.8C128.5,48.9,181.4,27,237.6,27s109.1,21.9,148.9,61.7 C468.6,170.8,468.6,304.4,386.5,386.5z"/><path d="M342.3,132.9c-5.3-5.3-13.8-5.3-19.1,0l-85.6,85.6L152,132.9c-5.3-5.3-13.8-5.3-19.1,0c-5.3,5.3-5.3,13.8,0,19.1 l85.6,85.6l-85.6,85.6c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4l85.6-85.6l85.6,85.6c2.6,2.6,6.1,4,9.5,4 c3.5,0,6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1l-85.4-85.6l85.6-85.6C347.6,146.7,347.6,138.2,342.3,132.9z"/></svg>'},info:{icon:'<svg viewBox="0 0 512 512" fill="currentColor"><path d="M256,0C114.51,0,0,114.497,0,256c0,141.49,114.497,256,256,256c141.49,0,256-114.497,256-256C512,114.51,397.503,0,256,0z M256,477.867c-122.337,0-221.867-99.529-221.867-221.867S133.663,34.133,256,34.133S477.867,133.663,477.867,256 S378.337,477.867,256,477.867z"/><path d="M255.997,209.777c-9.425,0-17.067,7.641-17.067,17.067v143.969c0,9.425,7.641,17.067,17.067,17.067 s17.067-7.641,17.067-17.067V226.843C273.063,217.417,265.422,209.777,255.997,209.777z"/><path d="M256,124.122c-18.821,0-34.133,15.312-34.133,34.133s15.312,34.133,34.133,34.133s34.133-15.312,34.133-34.133 S274.821,124.122,256,124.122z"/></svg>'}}},this.state={loading:!1,messages:{list:[]}},this.rootDOM=null,this.init()}setTransition(e,t=this.animationTime){e&&(e.style.transition="all "+t/1e3+"s",e.style.webkitTransition="all "+t/1e3+"s")}build(){let{types:e,classNames:t}=this;this.rootDOM=document.createElement("div"),t.container.forEach((e=>{this.rootDOM.classList.add(e)})),this.setTransition(this.rootDOM),this.loadingDom=document.createElement("div"),this.loadingDom.classList.add("notic__loading"),this.loadingDom.innerHTML=e.list.loading.icon,this.setTransition(this.loadingDom),this.rootDOM.appendChild(this.loadingDom),document.body.appendChild(this.rootDOM)}destroy(){this.rootDOM&&this.rootDOM.parentNode.removeChild(this.rootDOM)}init(){this.destroy(),this.build()}addMessage(e){let{types:t}=this,{messages:s}=this.state;s.list.push(e),this.buildMessage(e)}buildMessage(e){if(!e)return;let{rootDOM:t,types:i}=this,o=document.createElement("div"),a=document.createElement("div"),n=document.createElement("div"),l=document.createElement("div"),d=document.createElement("div");e.type=i.list[e.type]?e.type:i.default,e.id=+new Date,o.classList.add("notic__message"),e.autoWidth&&o.classList.add("notic__message--auto-width"),o.classList.add("notic__message--"+e.type),e.message||o.classList.add("notic__message--empty"),a.classList.add("notic__message__inner"),n.classList.add("notic__message__icon"),d.classList.add("notic__message__text"),n.innerHTML=i.list[e.type].icon,d.innerHTML=e.message,a.appendChild(n),a.appendChild(d),this.close.button&&(a.classList.add("notic__message__inner--with-button"),l.classList.add("notic__message__close"),l.innerHTML='<svg viewBox="0 0 40 40" stroke="currentColor"><path d="M10,10 L30,30 M30,10 L10,30"></path></svg>',l.onclick=()=>{this.hideMessage(e)},a.appendChild(l)),o.appendChild(a),this.setTransition(o),e.dom=o,t.appendChild(e.dom),e.height=0,e.visibleHeight=parseFloat(a.clientHeight)+parseFloat(s(a,"margin-top").replace("px",""))+parseFloat(s(a,"margin-bottom").replace("px","")),e.dom.style.height=e.height,this.close.area&&(e.dom.onclick=()=>{e.onClick&&e.onClick(e),this.hideMessage(e)}),this.showMessage(e)}showMessage(e){setTimeout((()=>{e.height=e.visibleHeight,e.dom.style.height=e.height+"px",e.dom.classList.add("notic__message--visible"),e.delay&&(e.timeout=setTimeout((()=>{this.hideMessage(e)}),e.delay))}),50)}hideMessages(){let{messages:e}=this.state;e.list.forEach(((e,t)=>{setTimeout((()=>{this.hideMessage(e)}),t*this.animationTime)}))}hideMessage(e){e.dom&&(clearTimeout(e.timeout),e.dom.classList.remove("notic__message--visible"),e.dom.style.height=0,setTimeout((()=>{this.removeMessage(e)}),this.animationTime))}removeMessage(e){let{messages:t}=this.state,s=t.list.findIndex((t=>t.id===e.id));t.list.splice(s,1),e.dom&&e.dom.parentNode.removeChild(e.dom),e.dom=null}loadingOn(){this.state.loading||(clearTimeout(this.loaderTimeout),this.state.loading=!0,this.rootDOM.classList.add("notic--loading"),this.loaderTimeout=setTimeout((()=>{this.loadingDom.classList.add("notic__loading--show")}),this.animationTime))}loadingOff(){this.state.loading&&(clearTimeout(this.loaderTimeout),this.state.loading=!1,this.loadingDom.classList.remove("notic__loading--show"),this.loaderTimeout=setTimeout((()=>{this.rootDOM.classList.remove("notic--loading")}),this.animationTime))}clear(){this.loadingOff(),this.hideMessages()}}window.Notic=i;var o=i;return t}()}));
//# sourceMappingURL=bundle.js.map