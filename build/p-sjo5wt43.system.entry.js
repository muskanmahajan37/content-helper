System.register(["./p-bcc09a8d.system.js","./p-8ef8f356.system.js"],(function(e){"use strict";var n,i,r,s,t,h;return{setters:[function(e){n=e.r;i=e.d;r=e.c;s=e.h;t=e.H},function(e){h=e.s}],execute:function(){var c=e("ion_refresher_content",function(){function e(e){n(this,e)}e.prototype.componentWillLoad=function(){if(this.pullingIcon===undefined){this.pullingIcon=i.get("refreshingIcon","arrow-down")}if(this.refreshingSpinner===undefined){var e=r(this);this.refreshingSpinner=i.get("refreshingSpinner",i.get("spinner",e==="ios"?"lines":"crescent"))}};e.prototype.render=function(){return s(t,{class:r(this)},s("div",{class:"refresher-pulling"},this.pullingIcon&&s("div",{class:"refresher-pulling-icon"},s("ion-icon",{icon:this.pullingIcon,lazy:false})),this.pullingText&&s("div",{class:"refresher-pulling-text",innerHTML:h(this.pullingText)})),s("div",{class:"refresher-refreshing"},this.refreshingSpinner&&s("div",{class:"refresher-refreshing-icon"},s("ion-spinner",{name:this.refreshingSpinner})),this.refreshingText&&s("div",{class:"refresher-refreshing-text",innerHTML:h(this.refreshingText)})))};return e}())}}}));