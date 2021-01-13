/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ModalWindow_MenuToggle_menuToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ModalWindow/MenuToggle/menuToggle.js */ \"./modules/ModalWindow/MenuToggle/menuToggle.js\");\n/* harmony import */ var _modules_ModalWindow_PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes */ \"./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_ModalWindow_MenuToggle_menuToggle_js__WEBPACK_IMPORTED_MODULE_0__.menuToggle)();\r\n(0,_modules_ModalWindow_PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_1__.PopupRepairTypes)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/ModalWindow/MenuToggle/menuToggle.js":
/*!******************************************************!*\
  !*** ./modules/ModalWindow/MenuToggle/menuToggle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeMenuPopUp\": () => /* binding */ closeMenuPopUp,\n/* harmony export */   \"menuToggle\": () => /* binding */ menuToggle\n/* harmony export */ });\n/* harmony import */ var _PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PopupRepairTypes/PopupRepairTypes */ \"./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js\");\n/* harmony import */ var _closeAllPopup_closeAllPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../closeAllPopup/closeAllPopup.js */ \"./modules/closeAllPopup/closeAllPopup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollMenu = (elmToReach) => {\r\n    elmToReach.scrollIntoView(\r\n        { block: \"start\", behavior: \"smooth\" }\r\n    );\r\n};\r\n\r\nconst closeMenuPopUp = () => {\r\n    const popupMenu = document.querySelector('.popup-dialog-menu');\r\n    if (window.screen.width > 575) {\r\n        popupMenu.style.transform = 'translate3d(645px,0,0)';\r\n\r\n    } else {\r\n        popupMenu.style.transform = 'translate3d(0,-100vh,0)';\r\n    }\r\n\r\n\r\n\r\n};\r\n\r\nconst menuToggle = () => {\r\n\r\n    const popupMenu = document.querySelector('.popup-dialog-menu');\r\n    const menuIcon = document.querySelector('.menu__icon');\r\n    const closeMenuBtn = document.querySelector('.close-menu');\r\n\r\n    //Если нажат крестик на меню закрываем меню\r\n    closeMenuBtn.addEventListener('click', closeMenuPopUp);\r\n\r\n    //нажатие на иконки меню,открывает меню\r\n    menuIcon.addEventListener('click', (e) => {\r\n        popupMenu.style.transform = 'translate3d(0,0,0)';\r\n\r\n    });\r\n\r\n    \r\n    //Обрабатываем клики по меню\r\n    popupMenu.addEventListener('click',(e)=>{\r\n        const target = e.target;           \r\n        //Если клик был по пунктам меню или нижней кнопке скролим плавно к элементу,закрывая при этом окно меню\r\n          if (target.closest('.popup-menu-nav__item') || target.closest('.button-footer')) {\r\n              e.preventDefault();\r\n  \r\n              const id = target.getAttribute('href');\r\n              const elementToReach = document.querySelector(id);\r\n              closeMenuPopUp();\r\n              scrollMenu(elementToReach);\r\n          }\r\n          //Если кликнули по `Полный список услуг и цен` открываем данное окно.\r\n          if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {\r\n              if (target.closest('.menu-link')) {\r\n                  closeMenuPopUp(); \r\n                  (0,_PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_0__.openRepairTypesPopUp)();\r\n              }\r\n  \r\n          }\r\n\r\n\r\n    });\r\n\r\n\r\n    //Скрываем меню если клик был вне его.\r\n    document.addEventListener('click', (e) => {\r\n\r\n        const target = e.target;        \r\n        //Проверяем был ли клик по Меню или По услугам Или иконке\r\n        if (!target.closest('.popup-dialog-menu') && !target.closest('.menu__icon')) { \r\n           closeMenuPopUp();            \r\n            return; }\r\n    });\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/ModalWindow/MenuToggle/menuToggle.js?");

/***/ }),

/***/ "./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js":
/*!******************************************************************!*\
  !*** ./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupRepairTypes\": () => /* binding */ PopupRepairTypes,\n/* harmony export */   \"openRepairTypesPopUp\": () => /* binding */ openRepairTypesPopUp,\n/* harmony export */   \"closeRepairTypesPopUp\": () => /* binding */ closeRepairTypesPopUp\n/* harmony export */ });\n\r\nconst PopupRepairTypes = ()=>{\r\n\r\n\r\n    const  repairTypes = document.querySelector('.popup-repair-types');\r\n    const closeBtn = repairTypes.querySelector('.close');\r\n\r\n\r\n    closeBtn.addEventListener('click',()=>{\r\n        closeRepairTypesPopUp();\r\n    });\r\n\r\n    document.addEventListener('click',(e)=>{\r\n\r\n       const target = e.target;\r\n\r\n       console.log(target);\r\n       if(!target.closest('.popup-dialog-repair-types') && !target.closest('.menu-link')){\r\n           closeRepairTypesPopUp();\r\n           return;\r\n       }\r\n    })\r\n}\r\n\r\n\r\n\r\nconst openRepairTypesPopUp = () => {\r\n    const repairTypes = document.querySelector('.popup-repair-types');\r\n    repairTypes.style.visibility = 'visible';\r\n\r\n}\r\n\r\n\r\nconst closeRepairTypesPopUp = () => {\r\n    const repairTypes = document.querySelector('.popup-repair-types');\r\n    repairTypes.style.visibility = 'hidden';\r\n\r\n}\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js?");

/***/ }),

/***/ "./modules/closeAllPopup/closeAllPopup.js":
/*!************************************************!*\
  !*** ./modules/closeAllPopup/closeAllPopup.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeAllPopup\": () => /* binding */ closeAllPopup\n/* harmony export */ });\n/* harmony import */ var _ModalWindow_PopupRepairTypes_PopupRepairTypes_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ModalWindow/PopupRepairTypes/PopupRepairTypes.js */ \"./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js\");\n/* harmony import */ var _ModalWindow_MenuToggle_menuToggle_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModalWindow/MenuToggle/menuToggle.js */ \"./modules/ModalWindow/MenuToggle/menuToggle.js\");\n\r\n\r\n\r\n\r\nconst closeAllPopup = () => {\r\n\r\n\r\n    (0,_ModalWindow_PopupRepairTypes_PopupRepairTypes_js__WEBPACK_IMPORTED_MODULE_0__.closeRepairTypesPopUp)();\r\n    (0,_ModalWindow_MenuToggle_menuToggle_js__WEBPACK_IMPORTED_MODULE_1__.closeMenuPopUp)();\r\n\r\n}\n\n//# sourceURL=webpack:///./modules/closeAllPopup/closeAllPopup.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;