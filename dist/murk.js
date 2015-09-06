var murk=function(e){return"undefined"!=typeof module&&module.exports?void(module.exports=e):e}(function(e){function t(e,t,r){if("string"!=typeof t&&"undefined"==typeof r&&(r=t,t=r),r="undefined"==typeof r?!0:!1,"undefined"!=typeof t&&"string"==typeof e){if(y.model[e]=t,y.elems.hasOwnProperty(e))return i(y.elems[e])}else r?m.call(y.model,e):y.model=e;return i(),this}function r(e){return"undefined"!=typeof e?y.model.hasOwnProperty(e)?y.model[e]:null:y.model}function i(e){var t;"undefined"!=typeof e?s(e):(t=y.dom.length?y.dom:n(),Array.prototype.forEach.call(t,s))}function o(e){e="undefined"==typeof e?document:e;var t=n(e);Array.prototype.forEach.call(t,s)}function n(e){return e="undefined"==typeof e?document:e,e.getElementsByTagName("*")}function s(e){var t,r;t=p(e),r=t(P.selectorPrefix),r&&(t(P.selectorPrefix+"-id")||t(P.selectorPrefix+"-id",P.id),t(P.selectorPrefix+"-id")==P.id&&(y.elems.hasOwnProperty(r)||(y.elems[r]=e,~y.keys.indexOf(r)||(y.keys.push(r),y.dom.push(e)),e.innerHTML&&!y.model.hasOwnProperty(r)&&(y.model[r]=e.innerHTML)),y.model.hasOwnProperty(r)?v(t(P.selectorPrefix+"-val"))!=y.model[r]&&l(r):t(P.selectorPrefix+"-bound",!1)))}function l(e){y.subscribers.hasOwnProperty(e)||(y.subscribers[e]=[h,c,f,a]);for(var t=Array.prototype.slice.call(y.subscribers[e]);fn=t.shift();)fn.call(y.elems[e],e)}function d(e,t){function r(e){y.subscribers.hasOwnProperty(e)||(y.subscribers[e]=[h,c,f,a]),y.subscribers[e].push(t)}return e instanceof Array?Array.prototype.forEach.call(e,r):r(e),this}function f(e){if(y.model[e]instanceof Array){var t=p(this);if(t(P.selectorPrefix+"-repeat"))if(this.hasChildNodes()){var r=this.childNodes.length,i=y.model[e].length;if(r>i)for(var o=i;r>o;++o)this.childNodes[o].removeAttribute(P.selectorPrefix+"-repeated-index"),this.childNodes[o].style.display="none";Array.prototype.forEach.call(y.model[e],function(t,i){if(r>i){var o=v(this.childNodes[i].getAttribute(P.selectorPrefix+"-repeated-val"));this.childNodes[i].setAttribute(P.selectorPrefix+"-repeated",e),this.childNodes[i].setAttribute(P.selectorPrefix+"-repeated-index",i),o!=t&&(this.childNodes[i].setAttribute(P.selectorPrefix+"-repeated-val",x(t)),this.childNodes[i].innerHTML=t),this.childNodes[i].style.display="inherit"}else{var n=document.createElement(this.nodeName);n.setAttribute(P.selectorPrefix+"-repeated",e),n.setAttribute(P.selectorPrefix+"-repeated-index",i),n.setAttribute(P.selectorPrefix+"-repeated-val",x(t)),n.innerHTML=t,this.appendChild(n)}},this)}else{var n=document.createDocumentFragment();Array.prototype.forEach.call(y.model[e],function(t,r){var i=document.createElement(this.nodeName);i.setAttribute(P.selectorPrefix+"-repeated",e),i.setAttribute(P.selectorPrefix+"-repeated-index",r),i.setAttribute(P.selectorPrefix+"-repeated-val",x(t)),i.innerHTML=t,n.appendChild(i)},this),this.appendChild(n)}}}function a(){var e,t=p(this);P.trackCount&&(e=t(P.selectorPrefix+"-count"),t(P.selectorPrefix+"-count",e?parseInt(e,0)+1:1))}function c(e){var t,r,i;t=p(this),t&&(i=function(r){var i,o;y.filters.hasOwnProperty(r)&&y.model.hasOwnProperty(e)&&(i=t(P.selectorPrefix+"-filtered-val")?v(t(P.selectorPrefix+"-filtered-val")):null,o=y.filters[r].call(this,y.model[e]),"undefined"!=typeof o&&i!=o&&(t(P.selectorPrefix+"-filtered-val",x(o)),this.innerHTML=o))},r=t(P.selectorPrefix+"-filter"),r&&(-1!=r.indexOf(",")&&(r=r.split(",")),r instanceof Array||(r=[r]),Array.prototype.forEach.call(r,i,this)))}function u(e,t){return e&&t&&(y.filters[e]=t),this}function h(e){var t=p(this);t(P.selectorPrefix+"-val",x(y.model[e])),t(P.selectorPrefix+"-bound",!0),y.model[e]instanceof Array||(this.innerHTML=y.model[e])}function p(e){return"undefined"!=typeof e?function(e,t){return"undefined"==typeof t?this.getAttribute(e):this.setAttribute(e,t)}.bind(e):null}function m(e){if("object"==typeof this)for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])}if(!(this instanceof murk))return new murk(e);var y={model:{},dom:[],elems:{},subscribers:{},filters:{},keys:[],start:Date.now()},P={selectorPrefix:"data-murk",trackCount:!0,dev:!1,id:y.start};e&&m.call(P,e);var x=encodeURIComponent,v=decodeURIComponent;return this.collectDom=o,this.emit=l,this.get=r,this.set=t,this.on=d,this.registerFilter=u,P.dev&&(this.state=y),this});