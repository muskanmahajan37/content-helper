let t,e,n,o=0,s=!1,i=!1,r=!1,l=!1,c=!1;const a=window,f=document,p=(HTMLElement,{t:0,o:"",jmp:t=>t(),raf:t=>requestAnimationFrame(t),ael:(t,e,n,o)=>t.addEventListener(e,n,o),rel:(t,e,n,o)=>t.removeEventListener(e,n,o)}),d=(()=>!!f.documentElement.attachShadow)(),u=(()=>{try{return new CSSStyleSheet,!0}catch(t){}return!1})(),m=new WeakMap,$=t=>m.get(t),h=(t,e)=>m.set(e.s=t,e),w=(t,e)=>e in t,b=t=>console.error(t),y=new Map,g=new Map,v=[],j=[],_=[],k=(t,e)=>n=>{t.push(n),s||(s=!0,e&&4&p.t?R(M):p.raf(M))},O=(t,e)=>{let n=0,o=0;for(;n<t.length&&(o=performance.now())<e;)try{t[n++](o)}catch(t){b(t)}n===t.length?t.length=0:0!==n&&t.splice(0,n)},M=()=>{o++,(t=>{for(let e=0;e<t.length;e++)try{t[e](performance.now())}catch(t){b(t)}t.length=0})(v);const t=2==(6&p.t)?performance.now()+10*Math.ceil(o*(1/22)):1/0;O(j,t),O(_,t),j.length>0&&(_.push(...j),j.length=0),(s=v.length+j.length+_.length>0)?p.raf(M):o=0},R=t=>Promise.resolve().then(t),S=k(v,!1),U=k(j,!0),C={},N=t=>null!=t,L=t=>t.toLowerCase(),x=t=>"object"==(t=typeof t)||"function"===t,P=()=>a.CSS&&a.CSS.supports&&a.CSS.supports("color","var(--c)")?Promise.resolve():__sc_import_app("./p-aea6ba87.js"),E=async()=>{const t=new RegExp("/app(\\.esm)?\\.js($|\\?|#)"),e=Array.from(f.querySelectorAll("script")).find(e=>t.test(e.src)||"app"===e.getAttribute("data-namespace")),n=e["data-opts"];{const t=new URL(".",new URL(e.getAttribute("data-resources-url")||e.src,a.location.href));return T(t.href),window.customElements||await __sc_import_app("./p-020f8d73.js"),Object.assign(Object.assign({},n),{resourcesUrl:t.href})}},T=t=>{const e=(()=>`__sc_import_${"app".replace(/\s|-/g,"_")}`)();try{a[e]=new Function("w",`return import(w);//${Math.random()}`)}catch(n){const o=new Map;a[e]=n=>{const s=new URL(n,t).href;let i=o.get(s);if(!i){const t=f.createElement("script");t.type="module",t.src=URL.createObjectURL(new Blob([`import * as m from '${s}'; window.${e}.m = m;`],{type:"application/javascript"})),i=new Promise(n=>{t.onload=()=>{n(a[e].m),t.remove()}}),o.set(s,i),f.head.appendChild(t)}return i}}},D="http://www.w3.org/1999/xlink",F=new WeakMap,I=(t,e)=>"sc-"+(e?t+"-"+e:t),W=(t,e,...n)=>{let o,s,i=null,r=!1,l=!1,c=[];const a=e=>{for(let n=0;n<e.length;n++)i=e[n],Array.isArray(i)?a(i):null!=i&&"boolean"!=typeof i&&((r="function"!=typeof t&&!x(i))&&(i=String(i)),r&&l?c[c.length-1].i+=i:c.push(r?{t:0,i}:i),l=r)};if(a(n),e){o=e.key||void 0,s=e.name;{const t=e.className||e.class;t&&(e.class="object"!=typeof t?t:Object.keys(t).filter(e=>t[e]).join(" "))}}if("function"==typeof t)return t(e,c,H);const f={t:0,l:t,p:c.length>0?c:null,u:void 0,$:e};return f.h=o,f.g=s,f},A={},H={forEach:(t,e)=>t.map(B).forEach(e),map:(t,e)=>t.map(B).map(e).map(J)},B=t=>({vattrs:t.$,vchildren:t.p,vkey:t.h,vname:t.g,vtag:t.l,vtext:t.i}),J=t=>({t:0,$:t.vattrs,p:t.vchildren,h:t.vkey,g:t.vname,l:t.vtag,i:t.vtext}),q=(t,e,n,o,s,i)=>{if(n!==o)if("class"===e){const e=t.classList;V(n).forEach(t=>e.remove(t)),V(o).forEach(t=>e.add(t))}else if("style"===e){for(const e in n)o&&null!=o[e]||(e.includes("-")?t.style.removeProperty(e):t.style[e]="");for(const e in o)n&&o[e]===n[e]||(e.includes("-")?t.style.setProperty(e,o[e]):t.style[e]=o[e])}else if("key"===e);else if("ref"===e)o&&o(t);else if(e.startsWith("on")&&!w(t,e))e=w(t,L(e))?L(e.substring(2)):L(e[2])+e.substring(3),n&&p.rel(t,e,n,!1),o&&p.ael(t,e,o,!1);else{const n=w(t,e),r=x(o);if((n||r&&null!==o)&&!s)try{if(t.tagName.includes("-"))t[e]=o;else{const n=null==o?"":o;t[e]!==n&&(t[e]=n)}}catch(t){}const l=!(!s||e===(e=e.replace(/^xlink\:?/,"")));null==o||!1===o?l?t.removeAttributeNS(D,L(e)):t.removeAttribute(e):(!n||4&i||s)&&!r&&(o=!0===o?"":o.toString(),l?t.setAttributeNS(D,L(e),o):t.setAttribute(e,o))}},V=t=>t?t.split(/\s+/).filter(t=>t):[],z=(t,e,n,o)=>{const s=11===e.u.nodeType&&e.u.host?e.u.host:e.u,i=t&&t.$||C,r=e.$||C;for(o in i)o in r||q(s,o,i[o],void 0,n,e.t);for(o in r)q(s,o,i[o],r[o],n,e.t)},G=(o,s,r,a)=>{let p,d,u,m=s.p[r],$=0;if(i||(l=!0,"slot"===m.l&&(t&&a.classList.add(t+"-s"),m.t|=m.p?2:1)),N(m.i))m.u=f.createTextNode(m.i);else if(1&m.t)m.u=f.createTextNode("");else{if(p=m.u=c||"svg"===m.l?f.createElementNS("http://www.w3.org/2000/svg",m.l):f.createElement(2&m.t?"slot-fb":m.l),z(null,m,c="svg"===m.l||"foreignObject"!==m.l&&c),N(t)&&p["s-si"]!==t&&p.classList.add(p["s-si"]=t),m.p)for($=0;$<m.p.length;++$)(d=G(o,m,$,p))&&p.appendChild(d);"svg"===m.l?c=!1:"foreignObject"===m.u.tagName&&(c=!0)}return m.u["s-hn"]=n,3&m.t&&(m.u["s-sr"]=!0,m.u["s-cr"]=e,m.u["s-sn"]=m.g||"",(u=o&&o.p&&o.p[r])&&u.l===m.l&&o.u&&K(o.u,!1)),m.u},K=(t,e)=>{p.t|=1;const o=t.childNodes;for(let t=o.length-1;t>=0;t--){const s=o[t];s["s-hn"]!==n&&s["s-ol"]&&(tt(s).insertBefore(s,Z(s)),s["s-ol"].remove(),s["s-ol"]=void 0,l=!0),e&&K(s,e)}p.t&=-2},Q=(t,e,o,s,i,r)=>{let l,c=t["s-cr"]&&t["s-cr"].parentNode||t;for(c.shadowRoot&&L(c.tagName)===n&&(c=c.shadowRoot);i<=r;++i)s[i]&&(l=G(null,o,i,t))&&(s[i].u=l,c.insertBefore(l,Z(e)))},X=(t,e,n,o)=>{for(;e<=n;++e)N(t[e])&&(o=t[e].u,it(t[e],!0),r=!0,o["s-ol"]?o["s-ol"].remove():K(o,!0),o.remove())},Y=(t,e)=>t.l===e.l&&("slot"===t.l?t.g===e.g:t.h===e.h),Z=t=>t&&t["s-ol"]||t,tt=t=>(t["s-ol"]?t["s-ol"]:t).parentNode,et=(t,e)=>{const n=e.u=t.u,o=t.p,s=e.p;let i;c=n&&N(n.parentNode)&&void 0!==n.ownerSVGElement,c="svg"===e.l||"foreignObject"!==e.l&&c,N(e.i)?(i=n["s-cr"])?i.parentNode.textContent=e.i:t.i!==e.i&&(n.textContent=e.i):("slot"===e.l||z(t,e,c),N(o)&&N(s)?((t,e,n,o)=>{let s,i,r=0,l=0,c=0,a=0,f=e.length-1,p=e[0],d=e[f],u=o.length-1,m=o[0],$=o[u];for(;r<=f&&l<=u;)if(null==p)p=e[++r];else if(null==d)d=e[--f];else if(null==m)m=o[++l];else if(null==$)$=o[--u];else if(Y(p,m))et(p,m),p=e[++r],m=o[++l];else if(Y(d,$))et(d,$),d=e[--f],$=o[--u];else if(Y(p,$))"slot"!==p.l&&"slot"!==$.l||K(p.u.parentNode,!1),et(p,$),t.insertBefore(p.u,d.u.nextSibling),p=e[++r],$=o[--u];else if(Y(d,m))"slot"!==p.l&&"slot"!==$.l||K(d.u.parentNode,!1),et(d,m),t.insertBefore(d.u,p.u),d=e[--f],m=o[++l];else{for(c=-1,a=r;a<=f;++a)if(e[a]&&N(e[a].h)&&e[a].h===m.h){c=a;break}c>=0?((i=e[c]).l!==m.l?s=G(e&&e[l],n,c,t):(et(i,m),e[c]=void 0,s=i.u),m=o[++l]):(s=G(e&&e[l],n,l,t),m=o[++l]),s&&tt(p.u).insertBefore(s,Z(p.u))}r>f?Q(t,null==o[u+1]?null:o[u+1].u,n,o,l,u):l>u&&X(e,r,f)})(n,o,e,s):N(s)?(N(t.i)&&(n.textContent=""),Q(n,null,e,s,0,s.length-1)):N(o)&&X(o,0,o.length-1)),c&&"svg"===e.l&&(c=!1)},nt=(t,e,n,o,s,i,r,l)=>{for(o=0,s=(n=t.childNodes).length;o<s;o++)if(1===(e=n[o]).nodeType){if(e["s-sr"])for(r=e["s-sn"],e.hidden=!1,i=0;i<s;i++)if(n[i]["s-hn"]!==e["s-hn"])if(l=n[i].nodeType,""!==r){if(1===l&&r===n[i].getAttribute("slot")){e.hidden=!0;break}}else if(1===l||3===l&&""!==n[i].textContent.trim()){e.hidden=!0;break}nt(e)}},ot=[],st=t=>{let e,n,o,s,i=t.childNodes,l=i.length,c=0,a=0,f=0;for(l=i.length;c<l;c++){if((e=i[c])["s-sr"]&&(n=e["s-cr"]))for(s=e["s-sn"],a=(o=n.parentNode.childNodes).length-1;a>=0;a--)(n=o[a])["s-cn"]||n["s-nr"]||n["s-hn"]===e["s-hn"]||((3===(f=n.nodeType)||8===f)&&""===s||1===f&&null===n.getAttribute("slot")&&""===s||1===f&&n.getAttribute("slot")===s)&&(ot.some(t=>t.v===n)||(r=!0,n["s-sn"]=s,ot.push({j:e,v:n})));1===e.nodeType&&st(e)}},it=(t,e)=>{t&&(t.$&&t.$.ref&&t.$.ref(e?null:t.u),t.p&&t.p.forEach(t=>{it(t,e)}))},rt=(t,e,n,o)=>{e.t|=16;const s=e.s,i=()=>lt(t,e,n,s,o);let r;return o&&(e.t|=256,e._&&(e._.forEach(([t,e])=>ft(s,t,e)),e._=null),r=ft(s,"componentWillLoad")),r=pt(r,()=>ft(s,"componentWillRender")),pt(r,()=>U(i))},lt=(o,s,c,a,u)=>{s.t&=-17,o["s-lr"]=!1,u&&((t,e,n)=>{const o=((t,e,n)=>{let o=I(e.k,n),s=g.get(o);if(t=11===t.nodeType?t:f,s||(o=I(e.k),s=g.get(o)),s)if("string"==typeof s){let e,n=F.get(t=t.head||t);n||F.set(t,n=new Set),n.has(o)||((e=f.createElement("style")).innerHTML=s,t.insertBefore(e,t.querySelector("link")),n&&n.add(o))}else t.adoptedStyleSheets.includes(s)||(t.adoptedStyleSheets=[...t.adoptedStyleSheets,s]);return o})(d&&t.shadowRoot?t.shadowRoot:t.getRootNode(),e,n);10&e.t&&(t["s-sc"]=o,t.classList.add(o+"-h"),2&e.t&&t.classList.add(o+"-s"))})(o,c,s.O),s.t|=4;try{((o,s,c,a)=>{n=L(o.tagName);const u=s.M||{t:0},m=(t=>t&&t.l===A)(a)?a:W(null,null,a);if(c.R&&(m.$=m.$||{},c.R.forEach(([t,e])=>m.$[e]=o[t])),m.l=null,m.t|=4,s.M=m,m.u=u.u=o.shadowRoot||o,t=o["s-sc"],e=o["s-cr"],i=d&&0!=(1&c.t),l=r=!1,et(u,m),l){st(m.u);for(let t=0;t<ot.length;t++){const e=ot[t];if(!e.v["s-ol"]){const t=f.createTextNode("");t["s-nr"]=e.v,e.v.parentNode.insertBefore(e.v["s-ol"]=t,e.v)}}p.t|=1;for(let t=0;t<ot.length;t++){const e=ot[t],n=e.j.parentNode;let o=e.j.nextSibling,s=e.v["s-ol"];for(;s=s.previousSibling;){let t=s["s-nr"];if(t&&t["s-sn"]===e.v["s-sn"]&&n===t.parentNode&&(!(t=t.nextSibling)||!t["s-nr"])){o=t;break}}(!o&&n!==e.v.parentNode||e.v.nextSibling!==o)&&e.v!==o&&n.insertBefore(e.v,o)}p.t&=-2}r&&nt(m.u),ot.length=0})(o,s,c,a.render&&a.render())}catch(t){b(t)}s.t&=-5,o["s-lr"]=!0,s.t|=2,o["s-rc"].length>0&&(o["s-rc"].forEach(t=>t()),o["s-rc"].length=0),ct(o,s)},ct=(t,e,n)=>{if(!t["s-al"]){const o=e.s,s=e.S;ft(o,"componentDidRender"),64&e.t?ft(o,"componentDidUpdate"):(e.t|=64,t.classList.add("hydrated"),ft(o,"componentDidLoad"),e.U(t),s||at()),s&&((n=s["s-al"])&&(n.delete(t),0===n.size&&(s["s-al"]=void 0,s["s-init"]())),e.S=void 0)}},at=()=>{f.documentElement.classList.add("hydrated"),p.t|=2},ft=(t,e,n)=>{if(t&&t[e])try{return t[e](n)}catch(t){b(t)}},pt=(t,e)=>t&&t.then?t.then(e):e(),dt=(t,e,n)=>{if(e.C){t.watchers&&(e.N=t.watchers);const o=Object.entries(e.C),s=t.prototype;if(o.forEach(([t,[o]])=>{31&o||2&n&&32&o?Object.defineProperty(s,t,{get(){return((t,e)=>$(t).L.get(e))(this,t)},set(n){((t,e,n,o)=>{const s=$(this),i=s.P,r=s.L.get(e),l=s.t;if(!((n=((t,e)=>null==t||x(t)?t:4&e?"false"!==t&&(""===t||!!t):2&e?parseFloat(t):1&e?String(t):t)(n,o.C[e][0]))===r||8&l&&void 0!==r)&&(s.L.set(e,n),s.s)){if(o.N&&128&l){const t=o.N[e];t&&t.forEach(t=>{try{s.s[t].call(s.s,n,r,e)}catch(t){b(t)}})}2==(22&l)&&rt(i,s,o,!1)}})(0,t,n,e)},configurable:!0,enumerable:!0}):1&n&&64&o&&Object.defineProperty(s,t,{value(...e){const n=$(this);return n.T.then(()=>n.s[t](...e))}})}),1&n){const n=new Map;s.attributeChangedCallback=function(t,e,o){p.jmp(()=>{const e=n.get(t);this[e]=(null!==o||"boolean"!=typeof this[e])&&o})},t.observedAttributes=o.filter(([t,e])=>15&e[0]).map(([t,o])=>{const s=o[1]||t;return n.set(s,t),512&o[0]&&e.R.push([t,s]),s})}}return t},ut=[],mt=t=>ut.push(t),$t=t=>$(t).O,ht=t=>{ft(t,"connectedCallback")},wt=(t,e)=>{(e=t["s-cr"]=f.createComment(""))["s-cn"]=!0,t.insertBefore(e,t.firstChild)},bt=(t,e={})=>{const n=[],o=e.exclude||[],s=f.head,i=a.customElements,r=s.querySelector("meta[charset]"),l=f.createElement("style");let c;Object.assign(p,e),p.o=new URL(e.resourcesUrl||"./",f.baseURI).href,e.syncQueue&&(p.t|=4),t.forEach(t=>t[1].forEach(e=>{const s={t:e[0],k:e[1],C:e[2],D:e[3],R:[],N:{}};!d&&1&s.t&&(s.t|=8);const r=s.k;s.F=t[0],o.includes(r)||i.get(r)||(n.push(r),i.define(r,dt(class extends HTMLElement{constructor(t){super(t),t=this,this["s-lr"]=!1,this["s-rc"]=[],(t=>{{const e={t:0,P:t,L:new Map};e.T=new Promise(t=>e.U=t),m.set(t,e)}})(t),1&s.t&&(d?t.attachShadow({mode:"open"}):"shadowRoot"in t||(t.shadowRoot=t))}connectedCallback(){c&&(clearTimeout(c),c=null),p.jmp(()=>((t,e)=>{if(0==(1&p.t)){const n=$(t);if(e.D&&(n.I=((t,e,n)=>{e._=e._||[];const o=n.map(([n,o,s])=>{const i=((t,e)=>4&e?f:8&e?a:32&e?f.body:16&e?t.parentElement:t)(t,n),r=((t,e)=>n=>{256&t.t?t.s[e](n):t._.push([e,n])})(e,s),l=(t=>({passive:0!=(1&t),capture:0!=(2&t)}))(n);return p.ael(i,o,r,l),()=>p.rel(i,o,r,l)});return()=>o.forEach(t=>t())})(t,n,e.D)),!(1&n.t)){let o;n.t|=1,o||(4&e.t||8&e.t)&&wt(t);{let e=t;for(;e=e.parentNode||e.host;)if(e["s-init"]&&!1===e["s-lr"]){n.S=e,(e["s-al"]=e["s-al"]||new Set).add(t);break}}e.C&&Object.entries(e.C).forEach(([e,[n]])=>{if(31&n&&t.hasOwnProperty(e)){const n=t[e];delete t[e],t[e]=n}}),R(()=>(async(t,e,n,o,s)=>{if(0==(32&e.t)){e.t|=32,null==e.O&&(e.O="string"!=typeof n.F?(t=>ut.map(e=>e(t)).find(t=>!!t))(t):""),(s=((t,e)=>{const n=t.k.replace(/-/g,"_"),o="string"!=typeof t.F?t.F[e.O]:t.F,s=y.get(o);return s?s[n]:__sc_import_app(`./${o}.entry.js`).then(t=>(y.set(o,t),t[n]),b)})(n,e)).then&&(s=await s),s.isProxied||(n.N=s.watchers,dt(s,n,2),s.isProxied=!0),e.t|=8;try{new s(e)}catch(t){b(t)}e.t&=-9,e.t|=128,ht(e.s);const o=I(n.k,e.O);if(!g.has(o)&&s.style){let t=s.style;"string"!=typeof t&&(t=t[e.O]),8&n.t&&(t=await __sc_import_app("./p-affe7c09.js").then(e=>e.scopeCss(t,o,!1))),((t,e,n)=>{let o=g.get(t);u&&n?(o=o||new CSSStyleSheet).replace(e):o=e,g.set(t,o)})(o,t,!!(1&n.t))}}const i=e.S,r=()=>rt(t,e,n,!0);i&&!1===i["s-lr"]&&i["s-rc"]?i["s-rc"].push(r):r()})(t,n,e))}ht(n.s)}})(this,s))}disconnectedCallback(){p.jmp(()=>(()=>{if(0==(1&p.t)){const t=$(this),e=t.s;t.I&&(t.I(),t.I=void 0),ft(e,"disconnectedCallback"),ft(e,"componentDidUnload")}})())}"s-init"(){const t=$(this);t.s&&ct(this,t)}"s-hmr"(t){}forceUpdate(){((t,e)=>{{const n=$(t);2&n.t&&rt(t,n,e,!1)}})(this,s)}componentOnReady(){return $(this).T}},s,1)))})),l.innerHTML=n+"{visibility:hidden}.hydrated{visibility:inherit}",l.setAttribute("data-styles",""),s.insertBefore(l,r?r.nextSibling:s.firstChild),p.jmp(()=>c=setTimeout(at,30))},yt=(t,e,n)=>{const o=vt(t);return{emit:t=>o.dispatchEvent(new CustomEvent(e,{bubbles:!!(4&n),composed:!!(2&n),cancelable:!!(1&n),detail:t}))}},gt=t=>{const e=new URL(t,p.o);return e.origin!==a.location.origin?e.href:e.pathname},vt=t=>$(t).P,jt=(t,e)=>("string"==typeof t&&(e=t,t=void 0),(t=>_t(t))(t).includes(e)),_t=(t=window)=>{t.Ionic=t.Ionic||{};let e=t.Ionic.platforms;return null==e&&(e=t.Ionic.platforms=kt(t)).forEach(e=>t.document.documentElement.classList.add(`plt-${e}`)),e},kt=t=>Object.keys(xt).filter(e=>xt[e](t)),Ot=t=>!!Nt(t,/iPad/i)||!(!Nt(t,/Macintosh/i)||!Rt(t)),Mt=t=>Nt(t,/android|sink/i),Rt=t=>Lt(t,"(any-pointer:coarse)"),St=t=>Ut(t)||Ct(t),Ut=t=>!!(t.cordova||t.phonegap||t.PhoneGap),Ct=t=>{const e=t.Capacitor;return!(!e||!e.isNative)},Nt=(t,e)=>e.test(t.navigator.userAgent),Lt=(t,e)=>t.matchMedia(e).matches,xt={ipad:Ot,iphone:t=>Nt(t,/iPhone/i),ios:t=>Nt(t,/iPhone|iPod/i)||Ot(t),android:Mt,phablet:t=>{const e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),s=Math.max(e,n);return o>390&&o<520&&s>620&&s<800},tablet:t=>{const e=t.innerWidth,n=t.innerHeight,o=Math.min(e,n),s=Math.max(e,n);return Ot(t)||(t=>Mt(t)&&!Nt(t,/mobile/i))(t)||o>460&&o<820&&s>780&&s<1400},cordova:Ut,capacitor:Ct,electron:t=>Nt(t,/electron/i),pwa:t=>!(!t.matchMedia("(display-mode: standalone)").matches&&!t.navigator.standalone),mobile:Rt,mobileweb:t=>Rt(t)&&!St(t),desktop:t=>!Rt(t),hybrid:St};class Pt{constructor(){this.m=new Map}reset(t){this.m=new Map(Object.entries(t))}get(t,e){const n=this.m.get(t);return void 0!==n?n:e}getBoolean(t,e=!1){const n=this.m.get(t);return void 0===n?e:"string"==typeof n?"true"===n:!!n}getNumber(t,e){const n=parseFloat(this.m.get(t));return isNaN(n)?void 0!==e?e:NaN:n}set(t,e){this.m.set(t,e)}}const Et=new Pt;let Tt;const Dt=t=>t&&$t(t)||Tt,Ft=()=>{(()=>{const t=document,e=window,n=e.Ionic=e.Ionic||{};_t(e);const o=Object.assign({},(t=>{try{const e=t.sessionStorage.getItem("ionic-persist-config");return null!==e?JSON.parse(e):{}}catch(t){return{}}})(e),{persistConfig:!1},n.config,(t=>{const e={};return t.location.search.slice(1).split("&").map(t=>t.split("=")).map(([t,e])=>[decodeURIComponent(t),decodeURIComponent(e)]).filter(([t])=>(t=>"ionic:"===t.substr(0,"ionic:".length))(t)).map(([t,e])=>[t.slice("ionic:".length),e]).forEach(([t,n])=>{e[t]=n}),e})(e));Et.reset(o),Et.getBoolean("persistConfig")&&((t,e)=>{try{t.sessionStorage.setItem("ionic-persist-config",JSON.stringify(e))}catch(t){return}})(e,o),n.config=Et,n.mode=Tt=Et.get("mode",t.documentElement.getAttribute("mode")||(jt(e,"ios")?"ios":"md")),Et.set("mode",Tt),t.documentElement.setAttribute("mode",Tt),t.documentElement.classList.add(Tt),Et.getBoolean("_testing")&&Et.set("animated",!1),mt(t=>t.mode=t.mode||t.getAttribute("mode")||Tt)})(),mt(t=>"ION-ICON"===t.tagName?t.mode||t.getAttribute("mode"):null)};export{A as H,P as a,bt as b,Dt as c,Et as d,vt as e,yt as f,Ft as g,W as h,jt as i,S as j,gt as k,$t as l,E as p,h as r,U as w};