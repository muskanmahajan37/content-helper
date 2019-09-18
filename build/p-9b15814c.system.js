var __awaiter=this&&this.__awaiter||function(e,n,t,r){function i(e){return e instanceof t?e:new t((function(n){n(e)}))}return new(t||(t=Promise))((function(t,a){function o(e){try{s(r.next(e))}catch(e){a(e)}}function u(e){try{s(r["throw"](e))}catch(e){a(e)}}function s(e){e.done?t(e.value):i(e.value).then(o,u)}s((r=r.apply(e,n||[])).next())}))};var __generator=this&&this.__generator||function(e,n){var t={label:0,sent:function(){if(a[0]&1)throw a[1];return a[1]},trys:[],ops:[]},r,i,a,o;return o={next:u(0),throw:u(1),return:u(2)},typeof Symbol==="function"&&(o[Symbol.iterator]=function(){return this}),o;function u(e){return function(n){return s([e,n])}}function s(o){if(r)throw new TypeError("Generator is already executing.");while(t)try{if(r=1,i&&(a=o[0]&2?i["return"]:o[0]?i["throw"]||((a=i["return"])&&a.call(i),0):i.next)&&!(a=a.call(i,o[1])).done)return a;if(i=0,a)o=[o[0]&2,a.value];switch(o[0]){case 0:case 1:a=o;break;case 4:t.label++;return{value:o[1],done:false};case 5:t.label++;i=o[1];o=[0];continue;case 7:o=t.ops.pop();t.trys.pop();continue;default:if(!(a=t.trys,a=a.length>0&&a[a.length-1])&&(o[0]===6||o[0]===2)){t=0;continue}if(o[0]===3&&(!a||o[1]>a[0]&&o[1]<a[3])){t.label=o[1];break}if(o[0]===6&&t.label<a[1]){t.label=a[1];a=o;break}if(a&&t.label<a[2]){t.label=a[2];t.ops.push(o);break}if(a[2])t.ops.pop();t.trys.pop();continue}o=n.call(e,t)}catch(e){o=[6,e];i=0}finally{r=a=0}if(o[0]&5)throw o[1];return{value:o[0]?o[1]:void 0,done:true}}};System.register(["./p-bcc09a8d.system.js"],(function(e,n){"use strict";var t;return{setters:[function(e){t=e.d}],execute:function(){var r=this;var i=0;var a=function(e){return{create:function(n){return l(e,n)},dismiss:function(n,t,r){return v(document,n,t,e,r)},getTop:function(){return __awaiter(this,void 0,void 0,(function(){return __generator(this,(function(n){return[2,p(document,e)]}))}))}}};var o=e("k",a("ion-alert"));var u=e("j",a("ion-action-sheet"));var s=e("f",a("ion-picker"));var c=e("h",a("ion-popover"));var f=e("p",(function(e){var n=document;d(n);var t=i++;e.overlayIndex=t;if(!e.hasAttribute("id")){e.id="ion-overlay-"+t}}));var l=e("c",(function(e,n){return customElements.whenDefined(e).then((function(){var t=document;var r=t.createElement(e);r.classList.add("overlay-hidden");Object.assign(r,n);b(t).appendChild(r);return r.componentOnReady()}))}));var d=function(e){if(i===0){i=1;e.addEventListener("focusin",(function(n){var t=p(e);if(t&&t.backdropDismiss&&!E(t,n.target)){var r=t.querySelector("input,button");if(r){r.focus()}}}));e.addEventListener("ionBackButton",(function(n){var t=p(e);if(t&&t.backdropDismiss){n.detail.register(100,(function(){return t.dismiss(undefined,D)}))}}));e.addEventListener("keyup",(function(n){if(n.key==="Escape"){var t=p(e);if(t&&t.backdropDismiss){t.dismiss(undefined,D)}}}))}};var v=e("b",(function(e,n,t,r,i){var a=p(e,r,i);if(!a){return Promise.reject("overlay does not exist")}return a.dismiss(n,t)}));var m=function(e,n){if(n===undefined){n="ion-alert,ion-action-sheet,ion-loading,ion-modal,ion-picker,ion-popover,ion-toast"}return Array.from(e.querySelectorAll(n)).filter((function(e){return e.overlayIndex>0}))};var p=e("g",(function(e,n,t){var r=m(e,n);return t===undefined?r[r.length-1]:r.find((function(e){return e.id===t}))}));var h=e("a",(function(e,n,i,a,o){return __awaiter(r,void 0,void 0,(function(){var r,u;return __generator(this,(function(s){switch(s.label){case 0:if(e.presented){return[2]}e.presented=true;e.willPresent.emit();r=e.enterAnimation?e.enterAnimation:t.get(n,e.mode==="ios"?i:a);return[4,w(e,r,e.el,o)];case 1:u=s.sent();if(u){e.didPresent.emit()}return[2]}}))}))}));var y=e("d",(function(e,n,i,a,o,u,s){return __awaiter(r,void 0,void 0,(function(){var r,c;return __generator(this,(function(f){switch(f.label){case 0:if(!e.presented){return[2,false]}e.presented=false;f.label=1;case 1:f.trys.push([1,3,,4]);e.willDismiss.emit({data:n,role:i});r=e.leaveAnimation?e.leaveAnimation:t.get(a,e.mode==="ios"?o:u);return[4,w(e,r,e.el,s)];case 2:f.sent();e.didDismiss.emit({data:n,role:i});return[3,4];case 3:c=f.sent();console.error(c);return[3,4];case 4:e.el.remove();return[2,true]}}))}))}));var b=function(e){return e.querySelector("ion-app")||e.body};var w=function(e,i,a,o){return __awaiter(r,void 0,void 0,(function(){var r,u,s,c,f,l,d;return __generator(this,(function(v){switch(v.label){case 0:if(e.animation){e.animation.destroy();e.animation=undefined;return[2,false]}a.classList.remove("overlay-hidden");r=a.shadowRoot||e.el;s=true;v.label=1;case 1:v.trys.push([1,4,,5]);return[4,n.import("./p-6d75dbc3.system.js")];case 2:c=v.sent();return[4,c.create(i,r,o)];case 3:u=v.sent();return[3,5];case 4:f=v.sent();u=i(r,o);u.fill("both");s=false;return[3,5];case 5:e.animation=u;if(!e.animated||!t.getBoolean("animated",true)){u.duration(0)}if(e.keyboardClose){u.beforeAddWrite((function(){var e=a.ownerDocument.activeElement;if(e&&e.matches("input, ion-input, ion-textarea")){e.blur()}}))}return[4,u.playAsync()];case 6:l=v.sent();d=typeof l==="boolean"?l:u.hasCompleted;if(s){u.destroy()}e.animation=undefined;return[2,d]}}))}))};var _=e("e",(function(e,n){var t;var r=new Promise((function(e){return t=e}));g(e,n,(function(e){t(e.detail)}));return r}));var g=function(e,n,t){var r=function(i){e.removeEventListener(n,r);t(i)};e.addEventListener(n,r)};var k=e("i",(function(e){return e==="cancel"||e===D}));var E=function(e,n){while(n){if(n===e){return true}n=n.parentElement}return false};var x=function(e){return e()};var A=e("s",(function(e,n){if(typeof e==="function"){var r=t.get("_zoneGate",x);return r((function(){try{return e(n)}catch(e){console.error(e)}}))}return undefined}));var D=e("B","backdrop")}}}));