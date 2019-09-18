var __awaiter=this&&this.__awaiter||function(e,t,n,r){function i(e){return e instanceof n?e:new n((function(t){t(e)}))}return new(n||(n=Promise))((function(n,o){function s(e){try{l(r.next(e))}catch(e){o(e)}}function a(e){try{l(r["throw"](e))}catch(e){o(e)}}function l(e){e.done?n(e.value):i(e.value).then(s,a)}l((r=r.apply(e,t||[])).next())}))};var __generator=this&&this.__generator||function(e,t){var n={label:0,sent:function(){if(o[0]&1)throw o[1];return o[1]},trys:[],ops:[]},r,i,o,s;return s={next:a(0),throw:a(1),return:a(2)},typeof Symbol==="function"&&(s[Symbol.iterator]=function(){return this}),s;function a(e){return function(t){return l([e,t])}}function l(s){if(r)throw new TypeError("Generator is already executing.");while(n)try{if(r=1,i&&(o=s[0]&2?i["return"]:s[0]?i["throw"]||((o=i["return"])&&o.call(i),0):i.next)&&!(o=o.call(i,s[1])).done)return o;if(i=0,o)s=[s[0]&2,o.value];switch(s[0]){case 0:case 1:o=s;break;case 4:n.label++;return{value:s[1],done:false};case 5:n.label++;i=s[1];s=[0];continue;case 7:s=n.ops.pop();n.trys.pop();continue;default:if(!(o=n.trys,o=o.length>0&&o[o.length-1])&&(s[0]===6||s[0]===2)){n=0;continue}if(s[0]===3&&(!o||s[1]>o[0]&&s[1]<o[3])){n.label=s[1];break}if(s[0]===6&&n.label<o[1]){n.label=o[1];o=s;break}if(o&&n.label<o[2]){n.label=o[2];n.ops.push(s);break}if(o[2])n.ops.pop();n.trys.pop();continue}s=t.call(e,n)}catch(e){s=[6,e];i=0}finally{r=o=0}if(s[0]&5)throw s[1];return{value:s[0]?s[1]:void 0,done:true}}};System.register(["./p-bcc09a8d.system.js","./p-55cd3c35.system.js","./p-4ae599ad.system.js","./p-9b15814c.system.js","./p-2294249a.system.js","./p-2445f09c.system.js"],(function(e){"use strict";var t,n,r,i,o,s,a,l,c,u,d,f,p,m,h,y;return{setters:[function(e){t=e.r;n=e.c;r=e.f;i=e.h;o=e.H;s=e.e},function(e){a=e.d},function(e){l=e.a;c=e.d},function(e){u=e.B;d=e.p;f=e.a;p=e.d;m=e.e},function(e){h=e.g},function(e){y=e.c}],execute:function(){var v=function(e){var t=y();var n=y();var r=y();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.4);r.addElement(e.querySelector(".modal-wrapper")).beforeStyles({opacity:1}).fromTo("transform","translateY(100%)","translateY(0%)");return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(400).beforeAddClass("show-modal").addAnimation([n,r])};var b=function(e){var t=y();var n=y();var r=y();var i=e.querySelector(".modal-wrapper");var o=i.getBoundingClientRect();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.4,0);r.addElement(i).beforeStyles({opacity:1}).fromTo("transform","translateY(0%)","translateY("+(e.ownerDocument.defaultView.innerHeight-o.top)+"px)");return t.addElement(e).easing("ease-out").duration(250).addAnimation([n,r])};var w=function(e){var t=y();var n=y();var r=y();n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.01,.32);r.addElement(e.querySelector(".modal-wrapper")).keyframes([{offset:0,opacity:.01,transform:"translateY(40px)"},{offset:1,opacity:1,transform:"translateY(0px)"}]);return t.addElement(e).easing("cubic-bezier(0.36,0.66,0.04,1)").duration(280).beforeAddClass("show-modal").addAnimation([n,r])};var D=function(e){var t=y();var n=y();var r=y();var i=e.querySelector(".modal-wrapper");n.addElement(e.querySelector("ion-backdrop")).fromTo("opacity",.32,0);r.addElement(i).keyframes([{offset:0,opacity:.99,transform:"translateY(0px)"},{offset:1,opacity:0,transform:"translateY(40px)"}]);return t.addElement(e).easing("cubic-bezier(0.47,0,0.745,0.715)").duration(200).addAnimation([n,r])};var g=e("ion_modal",function(){function e(e){var i=this;t(this,e);this.presented=false;this.mode=n(this);this.keyboardClose=true;this.backdropDismiss=true;this.showBackdrop=true;this.animated=true;this.onBackdropTap=function(){i.dismiss(undefined,u)};this.onDismiss=function(e){e.stopPropagation();e.preventDefault();i.dismiss()};this.onLifecycle=function(e){var t=i.usersElement;var n=E[e.type];if(t&&n){var r=new CustomEvent(n,{bubbles:false,cancelable:false,detail:e.detail});t.dispatchEvent(r)}};d(this.el);this.didPresent=r(this,"ionModalDidPresent",7);this.willPresent=r(this,"ionModalWillPresent",7);this.willDismiss=r(this,"ionModalWillDismiss",7);this.didDismiss=r(this,"ionModalDidDismiss",7)}e.prototype.present=function(){return __awaiter(this,void 0,void 0,(function(){var e,t,n;return __generator(this,(function(r){switch(r.label){case 0:if(this.presented){return[2]}e=this.el.querySelector(".modal-wrapper");if(!e){throw new Error("container is undefined")}t=Object.assign({},this.componentProps,{modal:this.el});n=this;return[4,l(this.delegate,e,this.component,["ion-page"],t)];case 1:n.usersElement=r.sent();return[4,a(this.usersElement)];case 2:r.sent();return[2,f(this,"modalEnter",v,w)]}}))}))};e.prototype.dismiss=function(e,t){return __awaiter(this,void 0,void 0,(function(){var n;return __generator(this,(function(r){switch(r.label){case 0:return[4,p(this,e,t,"modalLeave",b,D)];case 1:n=r.sent();if(!n)return[3,3];return[4,c(this.delegate,this.usersElement)];case 2:r.sent();r.label=3;case 3:return[2,n]}}))}))};e.prototype.onDidDismiss=function(){return m(this.el,"ionModalDidDismiss")};e.prototype.onWillDismiss=function(){return m(this.el,"ionModalWillDismiss")};e.prototype.render=function(){var e,t;var r=n(this);return i(o,{"no-router":true,"aria-modal":"true",class:Object.assign((e={},e[r]=true,e),h(this.cssClass)),style:{zIndex:""+(2e4+this.overlayIndex)},onIonBackdropTap:this.onBackdropTap,onIonDismiss:this.onDismiss,onIonModalDidPresent:this.onLifecycle,onIonModalWillPresent:this.onLifecycle,onIonModalWillDismiss:this.onLifecycle,onIonModalDidDismiss:this.onLifecycle},i("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),i("div",{role:"dialog",class:(t={},t["modal-wrapper"]=true,t[r]=true,t)}))};Object.defineProperty(e.prototype,"el",{get:function(){return s(this)},enumerable:true,configurable:true});Object.defineProperty(e,"style",{get:function(){return".sc-ion-modal-md-h{--width:100%;--min-width:auto;--max-width:auto;--height:100%;--min-height:auto;--max-height:auto;--overflow:hidden;--border-radius:0;--border-width:0;--border-style:none;--border-color:transparent;--background:var(--ion-background-color,#fff);--box-shadow:none;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;contain:strict}.overlay-hidden.sc-ion-modal-md-h{display:none}.modal-wrapper.sc-ion-modal-md{border-radius:var(--border-radius);width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);border-width:var(--border-width);border-style:var(--border-style);border-color:var(--border-color);background:var(--background);-webkit-box-shadow:var(--box-shadow);box-shadow:var(--box-shadow);overflow:var(--overflow);z-index:10}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--width:600px;--height:500px;--ion-safe-area-top:0px;--ion-safe-area-bottom:0px;--ion-safe-area-right:0px;--ion-safe-area-left:0px}}\@media only screen and (min-width:768px) and (min-height:768px){.sc-ion-modal-md-h{--width:600px;--height:600px}}\@media only screen and (min-width:768px) and (min-height:600px){.sc-ion-modal-md-h{--border-radius:2px;--box-shadow:0 28px 48px rgba(0,0,0,0.4)}}.modal-wrapper.sc-ion-modal-md{-webkit-transform:translate3d(0,40px,0);transform:translate3d(0,40px,0);opacity:.01}"},enumerable:true,configurable:true});return e}());var E={ionModalDidPresent:"ionViewDidEnter",ionModalWillPresent:"ionViewWillEnter",ionModalWillDismiss:"ionViewWillLeave",ionModalDidDismiss:"ionViewDidLeave"}}}}));