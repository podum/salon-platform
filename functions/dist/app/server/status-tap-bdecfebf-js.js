exports.ids=[8],exports.modules={PaPO:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"startStatusTap",function(){return startStatusTap});var _index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("wEJo"),_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("1vRN");const startStatusTap=()=>{const win=window;win.addEventListener("statusTap",()=>{Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.h)(()=>{const width=win.innerWidth,height=win.innerHeight,el=document.elementFromPoint(width/2,height/2);if(!el)return;const contentEl=el.closest("ion-content");contentEl&&new Promise(resolve=>Object(_helpers_dd7e4b7b_js__WEBPACK_IMPORTED_MODULE_1__.c)(contentEl,resolve)).then(()=>{Object(_index_7a8b7a1c_js__WEBPACK_IMPORTED_MODULE_0__.f)(()=>contentEl.scrollToTop(300))})})})}}};