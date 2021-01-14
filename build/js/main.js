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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_ModalWindow_MenuToggle_menuToggle_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/ModalWindow/MenuToggle/menuToggle.js */ \"./modules/ModalWindow/MenuToggle/menuToggle.js\");\n/* harmony import */ var _modules_ModalWindow_PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes */ \"./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js\");\n/* harmony import */ var _modules_PartnersCarousel_Carousel_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/PartnersCarousel/Carousel.js */ \"./modules/PartnersCarousel/Carousel.js\");\n\r\n\r\n\r\n\r\n\r\n(0,_modules_ModalWindow_MenuToggle_menuToggle_js__WEBPACK_IMPORTED_MODULE_0__.menuToggle)();\r\n(0,_modules_ModalWindow_PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_1__.PopupRepairTypes)();\r\n\r\n\r\n/*const options = {\r\n\r\n    main: \".wrapper\",\r\n    wrap: \".partners-slider\",\r\n    prev: '#partners-arrow_left',\r\n    next: '#partners-arrow_right',\r\n    slidesToShow: 3,\r\n    infinity: true,\r\n    responsive:\r\n        [\r\n            { breakpoint: 1024, slidesToShow: 3 },\r\n            { breakpoint: 768, slidesToShow: 2 },\r\n            { breakpoint: 576, slidesToShow: 1, }\r\n        ]\r\n}\r\n\r\nconst carousel = new SliderCarusel(options);\r\n\r\ncarousel.init();*/ \n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./modules/ModalWindow/MenuToggle/menuToggle.js":
/*!******************************************************!*\
  !*** ./modules/ModalWindow/MenuToggle/menuToggle.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"closeMenuPopUp\": () => /* binding */ closeMenuPopUp,\n/* harmony export */   \"menuToggle\": () => /* binding */ menuToggle\n/* harmony export */ });\n/* harmony import */ var _PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../PopupRepairTypes/PopupRepairTypes */ \"./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js\");\n/* harmony import */ var _closeAllPopup_closeAllPopup_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../closeAllPopup/closeAllPopup.js */ \"./modules/closeAllPopup/closeAllPopup.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst scrollMenu = (elmToReach) => {\r\n    elmToReach.scrollIntoView(\r\n        { block: \"start\", behavior: \"smooth\" }\r\n    );\r\n};\r\n\r\nconst closeMenuPopUp = () => {\r\n    const popupMenu = document.querySelector('.popup-dialog-menu');\r\n    if (window.screen.width > 575) {\r\n        popupMenu.style.transform = 'translate3d(645px,0,0)';\r\n\r\n    } else {\r\n        popupMenu.style.transform = 'translate3d(0,-100vh,0)';\r\n    }\r\n\r\n\r\n\r\n};\r\n\r\nconst menuToggle = () => {\r\n\r\n    const popupMenu = document.querySelector('.popup-dialog-menu');\r\n    const menuIcon = document.querySelector('.menu__icon');\r\n    const closeMenuBtn = document.querySelector('.close-menu');\r\n    const footerButton = document.querySelector('.button-footer');\r\n\r\n\r\n\r\n\r\n    footerButton.addEventListener('click',(e)=>{\r\n        const target  = e.target;\r\n\r\n        if(target.closest('.button-footer')){\r\n\r\n                e.preventDefault();\r\n    \r\n                const id = target.getAttribute('href');\r\n                const elementToReach = document.querySelector(id);\r\n              \r\n                scrollMenu(elementToReach);\r\n        }\r\n    });\r\n\r\n    //Если нажат крестик на меню закрываем меню\r\n    closeMenuBtn.addEventListener('click', closeMenuPopUp);\r\n\r\n    //нажатие на иконки меню,открывает меню\r\n    menuIcon.addEventListener('click', (e) => {\r\n        popupMenu.style.transform = 'translate3d(0,0,0)';\r\n\r\n    });\r\n\r\n    \r\n    //Обрабатываем клики по меню\r\n    popupMenu.addEventListener('click',(e)=>{\r\n        const target = e.target;           \r\n        //Если клик был по пунктам меню или нижней кнопке скролим плавно к элементу,закрывая при этом окно меню\r\n          if (target.closest('.popup-menu-nav__item') ) {\r\n              e.preventDefault();\r\n  \r\n              const id = target.getAttribute('href');\r\n              const elementToReach = document.querySelector(id);\r\n              closeMenuPopUp();\r\n              scrollMenu(elementToReach);\r\n          }\r\n          //Если кликнули по `Полный список услуг и цен` открываем данное окно.\r\n          if (target.closest('.link-list-menu') || target.closest('.link-list-repair')) {\r\n              if (target.closest('.menu-link')) {\r\n                  closeMenuPopUp(); \r\n                  (0,_PopupRepairTypes_PopupRepairTypes__WEBPACK_IMPORTED_MODULE_0__.openRepairTypesPopUp)();\r\n              }\r\n  \r\n          }\r\n\r\n\r\n    });\r\n\r\n\r\n    //Скрываем меню если клик был вне его.\r\n    document.addEventListener('click', (e) => {\r\n\r\n        const target = e.target;        \r\n        //Проверяем был ли клик по Меню или По услугам Или иконке\r\n        if (!target.closest('.popup-dialog-menu') && !target.closest('.menu__icon')) { \r\n           closeMenuPopUp();            \r\n            return; }\r\n    });\r\n\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/ModalWindow/MenuToggle/menuToggle.js?");

/***/ }),

/***/ "./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js":
/*!******************************************************************!*\
  !*** ./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"PopupRepairTypes\": () => /* binding */ PopupRepairTypes,\n/* harmony export */   \"openRepairTypesPopUp\": () => /* binding */ openRepairTypesPopUp,\n/* harmony export */   \"closeRepairTypesPopUp\": () => /* binding */ closeRepairTypesPopUp\n/* harmony export */ });\n\r\nconst PopupRepairTypes = () => {\r\n\r\n\r\n    const repairTypes = document.querySelector('.popup-repair-types');\r\n    const closeBtn = repairTypes.querySelector('.close');\r\n    let linkListRepair = document.querySelector('.link-list-repair > a');\r\n\r\n\r\n\r\n\r\n    linkListRepair.addEventListener('click', (e) => {\r\n        linkListRepair = document.querySelector('.link-list-repair > a');\r\n\r\n        const target = e.target;\r\n\r\n        console.log(target);\r\n\r\n        if (target.closest('.link-list-repair')) {\r\n\r\n            openRepairTypesPopUp();\r\n        }\r\n\r\n\r\n    });\r\n\r\n    closeBtn.addEventListener('click', () => {\r\n        closeRepairTypesPopUp();\r\n    });\r\n\r\n    document.addEventListener('click', (e) => {\r\n\r\n        const target = e.target;\r\n        if (!target.closest('.popup-dialog-repair-types') &&\r\n            !target.closest('.menu-link') &&\r\n            !target.closest('.link-list-repair')) {\r\n\r\n            console.log('zawel');\r\n            closeRepairTypesPopUp();\r\n            return;\r\n        }\r\n    });\r\n}\r\n\r\n\r\n\r\nconst openRepairTypesPopUp = () => {\r\n    const repairTypes = document.querySelector('.popup-repair-types');\r\n    repairTypes.style.visibility = 'visible';\r\n\r\n};\r\n\r\n\r\nconst closeRepairTypesPopUp = () => {\r\n    const repairTypes = document.querySelector('.popup-repair-types');\r\n    repairTypes.style.visibility = 'hidden';\r\n\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./modules/ModalWindow/PopupRepairTypes/PopupRepairTypes.js?");

/***/ }),

/***/ "./modules/PartnersCarousel/Carousel.js":
/*!**********************************************!*\
  !*** ./modules/PartnersCarousel/Carousel.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SliderCarusel\": () => /* binding */ SliderCarusel\n/* harmony export */ });\nclass SliderCarusel {\r\n\r\n    constructor(\r\n        { main, wrap, next, prev, position = 0, slidesToShow = 3, infinity = false, responsive = [] }\r\n\r\n    ) {\r\n        this.main = document.querySelector(main);\r\n        this.wrap = document.querySelector(wrap);\r\n        this.slides = this.wrap.children;\r\n        this.next = document.querySelector(next);\r\n        this.prev = document.querySelector(prev);\r\n        this.slidesToShow = slidesToShow;\r\n        this.options = {\r\n            position,\r\n            slidesWidth: Math.floor(100 / this.slidesToShow),\r\n            infinity,\r\n        };\r\n        this.responsive = responsive;\r\n    }\r\n\r\n    init() {\r\n\r\n        console.log('zzz');\r\n\r\n        this.addClass();\r\n        this.addStyles();\r\n\r\n        if (this.prev && this.next) {\r\n            this.controlSlider();\r\n        } else {\r\n            this.addArrow();\r\n            this.controlSlider();\r\n        }\r\n        if (this.responsive) { this.responseInit(); }\r\n\r\n    }\r\n\r\n    responseInit() {\r\n\r\n        const slidesToShowDefault = this.slidesToShow;\r\n        const allResponse = this.responsive.map(({ breakpoint }) => breakpoint);\r\n        const maxResponse = Math.max(...allResponse);\r\n\r\n        const checkResponse = () => {\r\n\r\n            const widthWindow = document.documentElement.clientWidth;\r\n            if (widthWindow < maxResponse) {\r\n                for (let i = 0; i < allResponse.length; i++) {\r\n                    if (widthWindow < allResponse[i]) {\r\n                        this.slidesToShow = this.responsive[i].slidesToShow;\r\n                        this.options.slidesWidth = Math.floor(100 / this.slidesToShow);\r\n                        this.addStyles();\r\n                    }\r\n                }\r\n            } else {\r\n\r\n                this.slidesToShow = slidesToShowDefault;\r\n                this.options.slidesWidth = Math.floor(100 / this.slidesToShow);\r\n                this.addStyles();\r\n            }\r\n        };\r\n\r\n        checkResponse();\r\n\r\n        window.addEventListener('resize', checkResponse);\r\n\r\n    }\r\n\r\n    addClass() {\r\n        this.wrap.style.overflow = 'hidden;'\r\n\r\n        this.main.classList.add('carousel-slider');\r\n        this.wrap.classList.add('carousel-slider__wrap');\r\n        for (let item of this.slides) {\r\n            item.classList.add('carousel-slider__item');\r\n        }\r\n    }\r\n\r\n    addStyles() {\r\n\r\n        let styles = document.getElementById('sliderCarousel-style');\r\n        if (!styles) {\r\n            styles = document.createElement('style');\r\n            styles.id = 'sliderCarousel-style';\r\n        }\r\n        styles.textContent = `\r\n      \r\n        .carousel-slider {\r\n            overflow: hidden !important;\r\n        }\r\n        \r\n        .carousel-slider__wrap {\r\n            display: flex !important;\r\n            transition: transform 0.5s !important;\r\n            will-change: transform !important;\r\n            \r\n        }\r\n        \r\n        .carousel-slider__item {\r\n            display: flex !important;\r\n            align-items: center !important;\r\n            justify-content: center !important;\r\n            margin: auto 0 !important;\r\n            flex: 0 0 ${this.options.slidesWidth}% !important;\r\n        }\r\n\r\n        `;\r\n        document.head.appendChild(styles);\r\n    }\r\n    \r\n    controlSlider() {\r\n\r\n        this.prev.addEventListener('click', this.prevSlider.bind(this));\r\n        this.next.addEventListener('click', this.nextSlider.bind(this));\r\n    }\r\n\r\n    prevSlider() {\r\n\r\n        if (this.options.infinity || this.options.position > 0) {\r\n\r\n\r\n            --this.options.position;\r\n\r\n            if (this.options.position < 0) {\r\n                this.options.position = this.slides.length - this.slidesToShow;\r\n            }\r\n            this.wrap.style.transform = `\r\n        translateX(-${this.options.position * this.options.slidesWidth}%)`;\r\n\r\n        }\r\n    }\r\n\r\n    nextSlider() {\r\n\r\n        if (this.options.infinity || this.options.position < this.slides.length - this.slidesToShow) {\r\n            ++this.options.position;\r\n            if (this.options.position > this.slides.length - this.slidesToShow) { this.options.position = 0; }\r\n            this.wrap.style.transform = `\r\n        translateX(-${this.options.position * this.options.slidesWidth}%)`;\r\n        }\r\n\r\n    }\r\n\r\n    addArrow() {\r\n\r\n        this.prev = document.createElement('button');\r\n        this.next = document.createElement('button');\r\n        this.prev.classList.add('carousel_slider__prev');\r\n        this.next.classList.add('carousel_slider__next');\r\n\r\n        this.main.appendChild(this.prev);\r\n        this.main.appendChild(this.next);\r\n\r\n        const style = document.createElement('style');\r\n        style.textContent = `\r\n        .carousel_slider__prev, \r\n        .carousel_slider__next {\r\n            margin: 0 10px;\r\n            border: 20px solid transparent;\r\n            background: transparent;\r\n        }\r\n        \r\n        .carousel_slider__next {\r\n            border-left-color: #19bbff;\r\n        }\r\n        \r\n        .carousel_slider__prev {\r\n            border-right-color: #19bbff;\r\n        }\r\n        \r\n        .carousel_slider__prev:focus, \r\n        .carousel_slider__prev:hover, \r\n        .carousel_slider__next:focus, \r\n        .carousel_slider__next:hover {\r\n            background: transparent;\r\n            outline: transparent;\r\n        }\r\n        `;\r\n        document.head.appendChild(style);\r\n    }\r\n}\r\n\n\n//# sourceURL=webpack:///./modules/PartnersCarousel/Carousel.js?");

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