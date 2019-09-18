import{r as t,f as e,c as s,h as i,H as h,e as n}from"./p-5471ff08.js";import{f as a,c as o}from"./p-c58c7fd2.js";import{h as l,j as r,k as c}from"./p-b05d703b.js";import{h as d}from"./p-f1a4df63.js";import{w as p}from"./p-14f0bf7a.js";const u=class{constructor(s){t(this,s),this.inputId=`ion-sel-${C++}`,this.didInit=!1,this.isExpanded=!1,this.disabled=!1,this.cancelText="Cancel",this.okText="OK",this.name=this.inputId,this.multiple=!1,this.interface="alert",this.interfaceOptions={},this.onClick=t=>{this.setFocus(),this.open(t)},this.onFocus=()=>{this.ionFocus.emit()},this.onBlur=()=>{this.ionBlur.emit()},this.ionChange=e(this,"ionChange",7),this.ionCancel=e(this,"ionCancel",7),this.ionFocus=e(this,"ionFocus",7),this.ionBlur=e(this,"ionBlur",7),this.ionStyle=e(this,"ionStyle",7)}disabledChanged(){this.emitStyle()}valueChanged(){this.updateOptions(),this.emitStyle(),this.didInit&&this.ionChange.emit({value:this.value})}async connectedCallback(){if(void 0===this.value)if(this.multiple){const t=this.childOpts.filter(t=>t.selected);this.value=t.map(t=>b(t))}else{const t=this.childOpts.find(t=>t.selected);t&&(this.value=b(t))}this.updateOptions(),this.updateOverlayOptions(),this.emitStyle(),this.mutationO=p(this.el,"ion-select-option",async()=>{this.updateOptions(),this.updateOverlayOptions()})}disconnectedCallback(){this.mutationO&&(this.mutationO.disconnect(),this.mutationO=void 0)}componentDidLoad(){this.didInit=!0}async open(t){if(this.disabled||this.isExpanded)return;const e=this.overlay=await this.createOverlay(t);return this.isExpanded=!0,e.onDidDismiss().then(()=>{this.overlay=void 0,this.isExpanded=!1,this.setFocus()}),await e.present(),e}createOverlay(t){let e=this.interface;return"action-sheet"!==e&&"popover"!==e||!this.multiple||(console.warn(`Select interface cannot be "${e}" with a multi-value select. Using the "alert" interface instead.`),e="alert"),"popover"!==e||t||(console.warn('Select interface cannot be a "popover" without passing an event. Using the "alert" interface instead.'),e="alert"),"popover"===e?this.openPopover(t):"action-sheet"===e?this.openActionSheet():this.openAlert()}updateOverlayOptions(){const t=this.overlay;if(!t)return;const e=this.childOpts;switch(this.interface){case"action-sheet":t.buttons=this.createActionSheetButtons(e);break;case"popover":const s=t.querySelector("ion-select-popover");s&&(s.options=this.createPopoverOptions(e));break;case"alert":t.inputs=this.createAlertInputs(e,this.multiple?"checkbox":"radio")}}createActionSheetButtons(t){const e=t.map(t=>({role:t.selected?"selected":"",text:t.textContent,handler:()=>{this.value=b(t)}}));return e.push({text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}}),e}createAlertInputs(t,e){return t.map(t=>({type:e,label:t.textContent,value:b(t),checked:t.selected,disabled:t.disabled}))}createPopoverOptions(t){return t.map(t=>{const e=b(t);return{text:t.textContent,value:e,checked:t.selected,disabled:t.disabled,handler:()=>{this.value=e,this.close()}}})}async openPopover(t){const e=this.interfaceOptions,i=s(this),h=Object.assign({mode:i},e,{component:"ion-select-popover",cssClass:["select-popover",e.cssClass],event:t,componentProps:{header:e.header,subHeader:e.subHeader,message:e.message,value:this.value,options:this.createPopoverOptions(this.childOpts)}});return l.create(h)}async openActionSheet(){const t=s(this),e=this.interfaceOptions,i=Object.assign({mode:t},e,{buttons:this.createActionSheetButtons(this.childOpts),cssClass:["select-action-sheet",e.cssClass]});return r.create(i)}async openAlert(){const t=this.getLabel(),e=t?t.textContent:null,i=this.interfaceOptions,h=this.multiple?"checkbox":"radio",n=s(this),a=Object.assign({mode:n},i,{header:i.header?i.header:e,inputs:this.createAlertInputs(this.childOpts,h),buttons:[{text:this.cancelText,role:"cancel",handler:()=>{this.ionCancel.emit()}},{text:this.okText,handler:t=>{this.value=t}}],cssClass:["select-alert",i.cssClass,this.multiple?"multiple-select-alert":"single-select-alert"]});return c.create(a)}close(){return this.overlay?this.overlay.dismiss():Promise.resolve(!1)}updateOptions(){let t=!0;const{value:e,childOpts:s,compareWith:i,multiple:h}=this;for(const n of s){const s=b(n),a=t&&f(e,s,i);n.selected=a,a&&!h&&(t=!1)}}getLabel(){return a(this.el)}hasValue(){return""!==this.getText()}get childOpts(){return Array.from(this.el.querySelectorAll("ion-select-option"))}getText(){const t=this.selectedText;return null!=t&&""!==t?t:y(this.childOpts,this.value,this.compareWith)}setFocus(){this.buttonEl&&this.buttonEl.focus()}emitStyle(){this.ionStyle.emit({interactive:!0,select:!0,"has-placeholder":null!=this.placeholder,"has-value":this.hasValue(),"interactive-disabled":this.disabled,"select-disabled":this.disabled})}render(){const{placeholder:t,name:e,disabled:n,isExpanded:l,value:r,el:c}=this,p=s(this),u=this.inputId+"-lbl",b=a(c);b&&(b.id=u);let f=!1,m=this.getText();""===m&&null!=t&&(m=t,f=!0),o(!0,c,e,v(r),n);const y={"select-text":!0,"select-placeholder":f};return i(h,{onClick:this.onClick,role:"combobox","aria-haspopup":"dialog","aria-disabled":n?"true":null,"aria-expanded":`${l}`,"aria-labelledby":u,class:{[p]:!0,"in-item":d("ion-item",c),"select-disabled":n}},i("div",{class:y},m),i("div",{class:"select-icon",role:"presentation"},i("div",{class:"select-icon-inner"})),i("button",{type:"button",onFocus:this.onFocus,onBlur:this.onBlur,disabled:n,ref:t=>this.buttonEl=t}))}get el(){return n(this)}static get watchers(){return{disabled:["disabledChanged"],placeholder:["disabledChanged"],value:["valueChanged"]}}static get style(){return":host{padding-left:var(--padding-start);padding-right:var(--padding-end);padding-top:var(--padding-top);padding-bottom:var(--padding-bottom);display:-ms-flexbox;display:flex;position:relative;font-family:var(--ion-font-family,inherit);overflow:hidden;z-index:2}\@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:var(--padding-start);padding-inline-start:var(--padding-start);-webkit-padding-end:var(--padding-end);padding-inline-end:var(--padding-end)}}:host(.in-item){position:static;max-width:45%}:host(.select-disabled){opacity:.4;pointer-events:none}:host(.ion-focused) button{border:2px solid #5e9ed6}.select-placeholder{color:currentColor;opacity:.33}button{left:0;top:0;margin-left:0;margin-right:0;margin-top:0;margin-bottom:0;position:absolute;width:100%;height:100%;border:0;background:transparent;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;outline:none}:host-context([dir=rtl]) button,[dir=rtl] button{left:unset;right:unset;right:0}button::-moz-focus-inner{border:0}.select-icon{position:relative}.select-text{-ms-flex:1;flex:1;min-width:16px;font-size:inherit;text-overflow:ellipsis;white-space:nowrap;overflow:hidden}.select-icon-inner{left:5px;top:50%;margin-top:-3px;position:absolute;width:0;height:0;border-top:5px solid;border-right:5px solid transparent;border-left:5px solid transparent;color:currentColor;opacity:.33;pointer-events:none}:host-context([dir=rtl]) .select-icon-inner,[dir=rtl] .select-icon-inner{left:unset;right:unset;right:5px}:host{--padding-top:10px;--padding-end:8px;--padding-bottom:10px;--padding-start:16px}.select-icon{width:12px;height:18px}"}},b=t=>{const e=t.value;return void 0===e?t.textContent||"":e},v=t=>{if(null!=t)return Array.isArray(t)?t.join(","):t.toString()},f=(t,e,s)=>void 0!==t&&(Array.isArray(t)?t.some(t=>m(t,e,s)):m(t,e,s)),m=(t,e,s)=>"function"==typeof s?s(t,e):"string"==typeof s?t[s]===e[s]:t===e,y=(t,e,s)=>void 0===e?"":Array.isArray(e)?e.map(e=>g(t,e,s)).filter(t=>null!==t).join(", "):g(t,e,s)||"",g=(t,e,s)=>{const i=t.find(t=>m(b(t),e,s));return i?i.textContent:null};let C=0;export{u as ion_select};