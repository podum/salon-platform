exports.ids=[45],exports.modules={"74mu":function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",function(){return createColorClasses}),__webpack_require__.d(__webpack_exports__,"b",function(){return getClassMap}),__webpack_require__.d(__webpack_exports__,"c",function(){return hostContext}),__webpack_require__.d(__webpack_exports__,"d",function(){return openURL});const hostContext=(selector,el)=>null!==el.closest(selector),createColorClasses=(color,cssClassMap)=>"string"==typeof color&&color.length>0?Object.assign({"ion-color":!0,[`ion-color-${color}`]:!0},cssClassMap):cssClassMap,getClassMap=classes=>{const map={};return(classes=>{if(void 0!==classes)return(Array.isArray(classes)?classes:classes.split(" ")).filter(c=>null!=c).map(c=>c.trim()).filter(c=>""!==c);return[]})(classes).forEach(c=>map[c]=!0),map},SCHEME=/^[a-z][a-z0-9+\-.]*:/,openURL=async(url,ev,direction,animation)=>{if(null!=url&&"#"!==url[0]&&!SCHEME.test(url)){const router=document.querySelector("ion-router");if(router)return null!=ev&&ev.preventDefault(),router.push(url,direction,animation)}return!1}},ISmu:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ion_text",function(){return Text});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("wEJo"),_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("E/Mt"),_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("74mu");const Text=class{constructor(hostRef){Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.o)(this,hostRef)}render(){const mode=Object(_ionic_global_63a97a32_js__WEBPACK_IMPORTED_MODULE_1__.b)(this);return Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.c,{class:Object(_theme_ff3fc52f_js__WEBPACK_IMPORTED_MODULE_2__.a)(this.color,{[mode]:!0})},Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.j)("slot",null))}};Text.style=":host(.ion-color){color:var(--ion-color-base)}"}};