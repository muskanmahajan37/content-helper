import{w as a}from"./p-5471ff08.js";const i="ionViewWillLeave",n="ionViewDidLeave",e="ionViewWillUnload",t=i=>new Promise((n,e)=>{a(()=>{o(i),s(i).then(a=>{a.animation&&a.animation.destroy(),r(i),n(a)},a=>{r(i),e(a)})})}),o=a=>{const i=a.enteringEl,n=a.leavingEl;h(i,n,a.direction),a.showGoBack?i.classList.add("can-go-back"):i.classList.remove("can-go-back"),y(i,!1),n&&y(n,!1)},s=async a=>{const i=await c(a);return i?w(i,a):d(a)},r=a=>{const i=a.leavingEl;a.enteringEl.classList.remove("ion-page-invisible"),void 0!==i&&i.classList.remove("ion-page-invisible")},c=async a=>{if(a.leavingEl&&a.animated&&0!==a.duration)return a.animationBuilder?a.animationBuilder:"ios"===a.mode?(await(()=>__sc_import_app("./p-6df4baa7.js"))()).iosTransitionAnimation:(await(()=>__sc_import_app("./p-7eab7db8.js"))()).mdTransitionAnimation},w=async(a,i)=>{let n;await l(i,!0);try{const e=await __sc_import_app("./p-559f1738.js");n=await e.create(a,i.baseEl,i)}catch(e){n=a(i.baseEl,i)}b(i.enteringEl,i.leavingEl);const e=await m(n,i);return n.hasCompleted=e,i.progressCallback&&i.progressCallback(void 0),n.hasCompleted&&v(i.enteringEl,i.leavingEl),{hasCompleted:n.hasCompleted,animation:n}},d=async a=>{const i=a.enteringEl,n=a.leavingEl;return await l(a,!1),b(i,n),v(i,n),{hasCompleted:!0}},l=async(a,i)=>{const n=(void 0!==a.deepWait?a.deepWait:i)?[f(a.enteringEl),f(a.leavingEl)]:[u(a.enteringEl),u(a.leavingEl)];await Promise.all(n),await p(a.viewIsReady,a.enteringEl)},p=async(a,i)=>{a&&await a(i)},m=(a,i)=>{const n=i.progressCallback,e=new Promise(i=>a.onFinish(i));return n?(a.progressStart(!0),n(a)):a.play(),e},b=(a,i)=>{_(i,"ionViewWillLeave"),_(a,"ionViewWillEnter")},v=(a,i)=>{_(a,"ionViewDidEnter"),_(i,"ionViewDidLeave")},_=(a,i)=>{if(a){const n=new CustomEvent(i,{bubbles:!1,cancelable:!1});a.dispatchEvent(n)}},u=a=>a&&a.componentOnReady?a.componentOnReady():Promise.resolve(),f=async a=>{const i=a;if(i){if(null!=i.componentOnReady&&null!=await i.componentOnReady())return;await Promise.all(Array.from(i.children).map(f))}},y=(a,i)=>{i?(a.setAttribute("aria-hidden","true"),a.classList.add("ion-page-hidden")):(a.hidden=!1,a.removeAttribute("aria-hidden"),a.classList.remove("ion-page-hidden"))},h=(a,i,n)=>{void 0!==a&&(a.style.zIndex="back"===n?"99":"101"),void 0!==i&&(i.style.zIndex="100")};export{e as L,i as a,n as b,f as d,_ as l,y as s,t};