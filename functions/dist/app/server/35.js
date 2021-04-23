exports.ids=[35],exports.modules={"74mu":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createColorClasses}),__webpack_require__.d(__webpack_exports__,"b",function(){return getClassMap}),__webpack_require__.d(__webpack_exports__,"c",function(){return hostContext}),__webpack_require__.d(__webpack_exports__,"d",function(){return openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c);return[]})(classes).forEach(c=>map[c]=!0),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}},cABk:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_loading",function(){return Loading});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("wEJo"),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("E/Mt"),_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("7OTs"),_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("39oe"),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("74mu"),_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("meiF");__webpack_require__("B4Jq"),__webpack_require__("1vRN");const iosEnterAnimation=baseEl=>{const baseAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),backdropAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),wrapperAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},iosLeaveAnimation=baseEl=>{const baseAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),backdropAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),wrapperAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdEnterAnimation=baseEl=>{const baseAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),backdropAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),wrapperAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity",.01,"var(--backdrop-opacity)").beforeStyles({"pointer-events":"none"}).afterClearStyles(["pointer-events"]),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.01,transform:"scale(1.1)"},{offset:1,opacity:1,transform:"scale(1)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},mdLeaveAnimation=baseEl=>{const baseAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),backdropAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)(),wrapperAnimation=Object(_animation_096c6391_js__WEBPACK_IMPORTED_MODULE_5__.a)();return backdropAnimation.addElement(baseEl.querySelector("ion-backdrop")).fromTo("opacity","var(--backdrop-opacity)",0),wrapperAnimation.addElement(baseEl.querySelector(".loading-wrapper")).keyframes([{offset:0,opacity:.99,transform:"scale(1)"},{offset:1,opacity:0,transform:"scale(0.9)"}]),baseAnimation.addElement(baseEl).easing("ease-in-out").duration(200).addAnimation([backdropAnimation,wrapperAnimation])},Loading=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef),this.didPresent=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionLoadingDidPresent",7),this.willPresent=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionLoadingWillPresent",7),this.willDismiss=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionLoadingWillDismiss",7),this.didDismiss=Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.g)(this,"ionLoadingDidDismiss",7),this.presented=!1,this.keyboardClose=!0,this.duration=0,this.backdropDismiss=!1,this.showBackdrop=!0,this.translucent=!1,this.animated=!0,this.onBackdropTap=()=>{this.dismiss(void 0,_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.a)}}connectedCallback(){Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.f)(this.el)}componentWillLoad(){if(void 0===this.spinner){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);this.spinner=_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("loadingSpinner",_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.c.get("spinner","ios"===mode?"lines":"crescent"))}}async present(){await Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.e)(this,"loadingEnter",iosEnterAnimation,mdEnterAnimation,void 0),this.duration>0&&(this.durationTimeout=setTimeout(()=>this.dismiss(),this.duration+10))}dismiss(data,role){return this.durationTimeout&&clearTimeout(this.durationTimeout),Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.g)(this,data,role,"loadingLeave",iosLeaveAnimation,mdLeaveAnimation)}onDidDismiss(){return Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el,"ionLoadingDidDismiss")}onWillDismiss(){return Object(_overlays_28c23c35_js__WEBPACK_IMPORTED_MODULE_2__.h)(this.el,"ionLoadingWillDismiss")}render(){const{message:message,spinner:spinner}=this,mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{onIonBackdropTap:this.onBackdropTap,tabindex:"-1",style:{zIndex:`${4e4+this.overlayIndex}`},class:Object.assign(Object.assign({},Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_4__.b)(this.cssClass)),{[mode]:!0,"loading-translucent":this.translucent})},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-backdrop",{visible:this.showBackdrop,tappable:this.backdropDismiss}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{tabindex:"0"}),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"loading-wrapper ion-overlay-wrapper",role:"dialog"},spinner&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"loading-spinner"},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("ion-spinner",{name:spinner,"aria-hidden":"true"})),message&&Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{class:"loading-content",innerHTML:Object(_index_9e3fe806_js__WEBPACK_IMPORTED_MODULE_3__.a)(message)})),Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("div",{tabindex:"0"}))}get el(){return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.k)(this)}};Loading.style={ios:".sc-ion-loading-ios-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-ios-h{display:none}.loading-wrapper.sc-ion-loading-ios{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-ios,.spinner-lines-small.sc-ion-loading-ios,.spinner-bubbles.sc-ion-loading-ios,.spinner-circles.sc-ion-loading-ios,.spinner-crescent.sc-ion-loading-ios,.spinner-dots.sc-ion-loading-ios{color:var(--spinner-color)}.sc-ion-loading-ios-h{--background:var(--ion-overlay-background-color, var(--ion-color-step-100, #f9f9f9));--max-width:270px;--max-height:90%;--spinner-color:var(--ion-color-step-600, #666666);--backdrop-opacity:var(--ion-backdrop-opacity, 0.3);color:var(--ion-text-color, #000);font-size:14px}.loading-wrapper.sc-ion-loading-ios{border-radius:8px;padding-left:34px;padding-right:34px;padding-top:24px;padding-bottom:24px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-ios{padding-left:unset;padding-right:unset;-webkit-padding-start:34px;padding-inline-start:34px;-webkit-padding-end:34px;padding-inline-end:34px}}@supports ((-webkit-backdrop-filter: blur(0)) or (backdrop-filter: blur(0))){.loading-translucent.sc-ion-loading-ios-h .loading-wrapper.sc-ion-loading-ios{background-color:rgba(var(--ion-background-color-rgb, 255, 255, 255), 0.8);-webkit-backdrop-filter:saturate(180%) blur(20px);backdrop-filter:saturate(180%) blur(20px)}}.loading-content.sc-ion-loading-ios{font-weight:bold}.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-ios+.loading-content.sc-ion-loading-ios{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}",md:".sc-ion-loading-md-h{--min-width:auto;--width:auto;--min-height:auto;--height:auto;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;left:0;right:0;top:0;bottom:0;display:-ms-flexbox;display:flex;position:fixed;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center;outline:none;font-family:var(--ion-font-family, inherit);contain:strict;-ms-touch-action:none;touch-action:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:1001}.overlay-hidden.sc-ion-loading-md-h{display:none}.loading-wrapper.sc-ion-loading-md{display:-ms-flexbox;display:flex;-ms-flex-align:inherit;align-items:inherit;-ms-flex-pack:inherit;justify-content:inherit;width:var(--width);min-width:var(--min-width);max-width:var(--max-width);height:var(--height);min-height:var(--min-height);max-height:var(--max-height);background:var(--background);opacity:0;z-index:10}.spinner-lines.sc-ion-loading-md,.spinner-lines-small.sc-ion-loading-md,.spinner-bubbles.sc-ion-loading-md,.spinner-circles.sc-ion-loading-md,.spinner-crescent.sc-ion-loading-md,.spinner-dots.sc-ion-loading-md{color:var(--spinner-color)}.sc-ion-loading-md-h{--background:var(--ion-color-step-50, #f2f2f2);--max-width:280px;--max-height:90%;--spinner-color:var(--ion-color-primary, #3880ff);--backdrop-opacity:var(--ion-backdrop-opacity, 0.32);color:var(--ion-color-step-850, #262626);font-size:14px}.loading-wrapper.sc-ion-loading-md{border-radius:2px;padding-left:24px;padding-right:24px;padding-top:24px;padding-bottom:24px;-webkit-box-shadow:0 16px 20px rgba(0, 0, 0, 0.4);box-shadow:0 16px 20px rgba(0, 0, 0, 0.4)}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-wrapper.sc-ion-loading-md{padding-left:unset;padding-right:unset;-webkit-padding-start:24px;padding-inline-start:24px;-webkit-padding-end:24px;padding-inline-end:24px}}.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:16px}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){.loading-spinner.sc-ion-loading-md+.loading-content.sc-ion-loading-md{margin-left:unset;-webkit-margin-start:16px;margin-inline-start:16px}}"}}};