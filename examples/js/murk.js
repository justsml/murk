var murk=function(e){return"undefined"!=typeof module&&module.exports?module.exports=e:e}(function e(t){function n(e,t,n){if("string"!=typeof t&&"undefined"==typeof n&&(n=t,t=n),n="undefined"==typeof n?!0:!1,"undefined"!=typeof t&&"string"==typeof e){if(h.model[e]=t,h.elems.hasOwnProperty(e))return o(h.elems[e])}else n?y.call(h.model,e):h.model=e;return o(),b}function r(e){return"undefined"!=typeof e?h.model.hasOwnProperty(e)?h.model[e]:null:h.model}function o(e){var t;"undefined"!=typeof e?l(e):(t=h.dom.length?h.dom:s(),Array.prototype.map.call(t,l))}function i(e){e="undefined"==typeof e?document:e;var t=s(e);Array.prototype.map.call(t,l)}function s(e){return e="undefined"==typeof e?document:e,e.getElementsByTagName("*")}function l(e){var t,n;return t=m(e),n=t(v.selectorPrefix),n&&(t(v.selectorPrefix+"-id")||t(v.selectorPrefix+"-id",v.id),t(v.selectorPrefix+"-id")==v.id&&(h.elems.hasOwnProperty(n)||(h.elems[n]=e,~h.keys.indexOf(n)||(h.keys.push(n),h.dom.push(e)),e.innerHTML&&!h.model.hasOwnProperty(n)&&(h.model[n]=e.innerHTML)),h.model.hasOwnProperty(n)?decodeURIComponent(t(v.selectorPrefix+"-val"))!=h.model[n]&&u(n):t(v.selectorPrefix+"-bound",!1))),!1}function u(e){function t(r,o){r.call(h.elems[e],e,function(e,r){return n.length?e?o(e,n):t(n.shift(),o):o(null,!0)})}h.subscribers.hasOwnProperty(e)||(h.subscribers[e]=[p,c,d]);var n=Array.prototype.slice.call(h.subscribers[e]);t(n.shift(),function(t,n){t&&console.log("error handling subscriber of "+e),v.dev&&n&&console.log("finished handling subscribers")})}function f(e,t){function n(e){h.subscribers.hasOwnProperty(e)||(h.subscribers[e]=[p,c,d]),h.subscribers[e].push(t)}return e instanceof Array?Array.prototype.map.call(e,n):n(e),b}function c(e,t){v.dev&&(console.log("trackCountEvent"),console.log(e));var n,r=m(this);return v.trackCount&&(n=r(v.selectorPrefix+"-count"),r(v.selectorPrefix+"-count",n?parseInt(n,0)+1:1)),t?t(null,!0):void 0}function d(e,t){v.dev&&(console.log("processFilters"),console.log(e));var r=m(this),o=r(v.selectorPrefix+"-filter");return o&&(-1!=o.indexOf(",")&&(o=o.split(",")),o instanceof Array||(o=[o]),Array.prototype.map.call(o,function(t){if(h.filters[t]&&h.model[e]){var r=h.filters[t](h.model[e]);"undefined"!=typeof r&&r!=h.model[e]&&n(e,r)}})),t?t(null,!0):void 0}function a(e,t){return e&&t&&(h.filters[e]=t),b}function p(e,t){v.dev&&(console.log("elemBindingEvent"),console.log(e));var n=m(this);return n(v.selectorPrefix+"-val",encodeURIComponent(h.model[e])),n(v.selectorPrefix+"-bound",!0),this.innerHTML=h.model[e],t?t(null,!0):void 0}function m(e){return"undefined"!=typeof e?function(e,t){return"undefined"==typeof t?this.getAttribute(e):this.setAttribute(e,t)}.bind(e):null}function y(e){if("object"==typeof this)for(var t in e)e.hasOwnProperty(t)&&(this[t]=e[t])}if(!(this instanceof e))return new e(t);var h={model:{},dom:[],elems:{},subscribers:{},filters:{},keys:[],start:Date.now()},v={selectorPrefix:"data-murk",trackCount:!0,dev:!1,id:h.start};t&&y.call(v,t);var b=this;return this.collectDom=i,this.emit=u,this.get=r,this.set=n,this.on=f,this.registerFilter=a,v.dev&&(this.state=h),this});