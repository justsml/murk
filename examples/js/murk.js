var murk=function(e){return"undefined"!=typeof module&&module.exports?module.exports=e:e}(function e(t){function n(e,t,n){if("string"!=typeof t&&"undefined"==typeof n&&(n=t,t=n),n="undefined"==typeof n?!0:!1,"undefined"!=typeof t&&"string"==typeof e){if(p.model[e]=t,p.elems.hasOwnProperty(e))return r(p.elems[e])}else n?m.call(p.model,e):p.model=e;return r(),y}function o(e){return"undefined"!=typeof e?p.model.hasOwnProperty(e)?p.model[e]:null:p.model}function r(e){var t;"undefined"!=typeof e?l(e):(t=p.dom.length?p.dom:s(),Array.prototype.map.call(t,l))}function i(e){e="undefined"==typeof e?document:e;var t=s(e);Array.prototype.map.call(t,l)}function s(e){return e="undefined"==typeof e?document:e,e.getElementsByTagName("*")}function l(e){var t,n;return t=a(e),n=t(h.selectorPrefix),n&&(t(h.selectorPrefix+"-id")||t(h.selectorPrefix+"-id",h.id),t(h.selectorPrefix+"-id")==h.id&&(p.elems.hasOwnProperty(n)||(p.elems[n]=e,~p.keys.indexOf(n)||(p.keys.push(n),p.dom.push(e)),e.innerText&&!p.model.hasOwnProperty(n)&&(p.model[n]=e.innerText)),p.model.hasOwnProperty(n)?decodeURIComponent(t(h.selectorPrefix+"-val"))!=p.model[n]&&u(n):t(h.selectorPrefix+"-bound",!1))),!1}function u(e){function t(o,r){o.call(p.elems[e],e,function(e,o){return n.length?e?r(e,n):t(n.shift(),r):r(null,!0)})}p.subscribers.hasOwnProperty(e)||(p.subscribers[e]=[f,d]);var n=Array.prototype.slice.call(p.subscribers[e]);t(n.shift(),function(t,n){t&&console.log("error handling subscriber of "+e),h.dev&&n&&console.log("finished handling subscribers")})}function c(e,t){function n(e){p.subscribers.hasOwnProperty(e)||(p.subscribers[e]=[f,d]),p.subscribers[e].push(t)}return e instanceof Array?Array.prototype.map.call(e,n):n(e),y}function d(e,t){h.dev&&(console.log("trackCountEvent"),console.log(e));var n=a(this);return h.trackCount&&(count=n(h.selectorPrefix+"-count"),n(h.selectorPrefix+"-count",count?parseInt(count,0)+1:1)),t?t(null,!0):void 0}function f(e,t){h.dev&&(console.log("elemBindingEvent"),console.log(e));var n=a(this);return n(h.selectorPrefix+"-val",encodeURIComponent(p.model[e])),n(h.selectorPrefix+"-bound",!0),this.innerText=p.model[e],t?t(null,!0):void 0}function a(e){return"undefined"!=typeof e?function(e,t){return"undefined"==typeof t?this.getAttribute(e):this.setAttribute(e,t)}.bind(e):null}function m(e){if("object"==typeof this)for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])}if(!(this instanceof e))return new e(t);var p={model:{},dom:[],elems:{},subscribers:{},keys:[],start:Date.now()},h={selectorPrefix:"data-murk",trackCount:!0,dev:!0,id:p.start};t&&m.call(h,t);var y=this;return this.collectDom=i,this.emit=u,this.get=o,this.set=n,this.on=c,h.dev&&(this.state=p),this});