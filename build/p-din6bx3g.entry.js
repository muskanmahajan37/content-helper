import{r as i,f as t,c as s,h as e,e as n,H as a}from"./p-5471ff08.js";const h={xs:"(min-width: 0px)",sm:"(min-width: 576px)",md:"(min-width: 768px)",lg:"(min-width: 992px)",xl:"(min-width: 1200px)",never:""},o=class{constructor(s){i(this,s),this.visible=!1,this.disabled=!1,this.when=h.lg,this.ionSplitPaneVisible=t(this,"ionSplitPaneVisible",7)}visibleChanged(i){const t={visible:i,isPane:this.isPane.bind(this)};this.ionSplitPaneVisible.emit(t)}connectedCallback(){this.styleChildren(),this.updateState()}disconnectedCallback(){this.rmL&&(this.rmL(),this.rmL=void 0)}updateState(){if(this.rmL&&(this.rmL(),this.rmL=void 0),this.disabled)return void(this.visible=!1);const i=this.when;if("boolean"==typeof i)return void(this.visible=i);const t=h[i]||i;if(0!==t.length){if(window.matchMedia){const i=i=>{this.visible=i.matches},s=window.matchMedia(t);s.addListener(i),this.rmL=()=>s.removeListener(i),this.visible=s.matches}}else this.visible=!1}isPane(i){return!!this.visible&&i.parentElement===this.el&&i.classList.contains("split-pane-side")}styleChildren(){const i=this.contentId,t=this.el.children,s=this.el.childElementCount;let e=!1;for(let n=0;n<s;n++){const s=t[n],a=void 0!==i?s.id===i:s.hasAttribute("main");if(a){if(e)return void console.warn("split pane cannot have more than one main node");e=!0}l(s,a)}e||console.warn("split pane does not have a specified main node")}render(){const i=s(this);return e(a,{class:{[i]:!0,[`split-pane-${i}`]:!0,"split-pane-visible":this.visible}})}get el(){return n(this)}static get watchers(){return{visible:["visibleChanged"],disabled:["updateState"],when:["updateState"]}}static get style(){return"ion-split-pane{left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:absolute;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:nowrap;flex-wrap:nowrap;contain:strict}.split-pane-visible>.split-pane-main,.split-pane-visible>.split-pane-side{left:0;right:0;top:0;bottom:0;position:relative;-ms-flex:1;flex:1;-webkit-box-shadow:none!important;box-shadow:none!important;z-index:0}.split-pane-visible>.split-pane-side:not(ion-menu),.split-pane-visible>ion-menu.split-pane-side.menu-enabled{display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0}.split-pane-side:not(ion-menu){display:none}.split-pane-visible>.split-pane-side{-ms-flex-order:-1;order:-1}.split-pane-visible>.split-pane-side[side=end]{-ms-flex-order:1;order:1}.split-pane-ios{--border:0.55px solid var(--ion-item-border-color,var(--ion-border-color,var(--ion-color-step-250,#c8c7cc)))}.split-pane-ios.split-pane-visible>.split-pane-side{min-width:270px;max-width:28%;border-right:var(--border);border-left:0}.split-pane-ios.split-pane-visible>.split-pane-side[side=end]{min-width:270px;max-width:28%;border-right:0;border-left:var(--border)}"}},l=(i,t)=>{let s,e;t?(s="split-pane-main",e="split-pane-side"):(s="split-pane-side",e="split-pane-main");const n=i.classList;n.add(s),n.remove(e)};export{o as ion_split_pane};