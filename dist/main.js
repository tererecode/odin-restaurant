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

/***/ "./src/contactModule.js":
/*!******************************!*\
  !*** ./src/contactModule.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadContact)\n/* harmony export */ });\nfunction loadContact() {\n    const content = document.getElementById('content');\n    const contactInfo = document.createElement('ul');\n    const phoneNum = document.createElement('li');\n    phoneNum.textContent = 'Number: +555 99 99 10101'\n    const address = document.createElement('li');\n    address.textContent = 'Address: 5th Avenue 123';\n    content.innerHTML = ''\n    contactInfo.append(phoneNum, address);\n    content.appendChild(contactInfo);\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/contactModule.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageModule__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageModule */ \"./src/pageModule.js\");\n/* harmony import */ var _menuModule__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menuModule */ \"./src/menuModule.js\");\n/* harmony import */ var _contactModule__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contactModule */ \"./src/contactModule.js\");\n\n\n\n\n(0,_pageModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\nconst navHome = document.getElementById('home');\nconst navMenu = document.getElementById('menu');\nconst navContact = document.getElementById('contact');\n\nnavHome.addEventListener('click', _pageModule__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\nnavMenu.addEventListener('click', _menuModule__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\nnavContact.addEventListener('click', _contactModule__WEBPACK_IMPORTED_MODULE_2__[\"default\"])\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/index.js?");

/***/ }),

/***/ "./src/menuModule.js":
/*!***************************!*\
  !*** ./src/menuModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ loadMenu)\n/* harmony export */ });\nfunction loadMenu() {\n    const content = document.getElementById('content');\n    const menuList = document.createElement('ul');\n    const item1 = document.createElement('li');\n    item1.textContent = 'Lasagna'\n    const item2 = document.createElement('li');\n    item2.textContent = 'Spaghetti'\n    const item3 = document.createElement('li');\n    item3.textContent = 'Filet Mignon'\n    const item4 = document.createElement('li');\n    item4.textContent = 'Onion Soup'\n    content.innerHTML = ''\n    menuList.append(item1, item2, item3, item4);\n    content.appendChild(menuList);\n}\n\n//# sourceURL=webpack://odin-restaurant/./src/menuModule.js?");

/***/ }),

/***/ "./src/pageModule.js":
/*!***************************!*\
  !*** ./src/pageModule.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _assets_images_fancy_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/images/fancy-restaurant.jpg */ \"./src/assets/images/fancy-restaurant.jpg\");\n\nfunction pageLoad() {\n    const content = document.getElementById('content')\n    const heading = document.createElement('h1');\n    const imgHero = document.createElement('img');\n    const copyPara = document.createElement('p');\n    heading.textContent = 'This is some fancy restaurant';\n    imgHero.src = _assets_images_fancy_restaurant_jpg__WEBPACK_IMPORTED_MODULE_0__;\n    copyPara.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero totam necessitatibus provident. Vel neque culpa animi, iste nisi commodi libero enim minus totam non consequatur deleniti? Nesciunt dolore totam ab!'\n    content.innerHTML = ''\n    content.appendChild(heading);\n    content.appendChild(imgHero);\n    content.appendChild(copyPara);\n\n}\n\n\n\n//# sourceURL=webpack://odin-restaurant/./src/pageModule.js?");

/***/ }),

/***/ "./src/assets/images/fancy-restaurant.jpg":
/*!************************************************!*\
  !*** ./src/assets/images/fancy-restaurant.jpg ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"a629cef0a8a9fc0d3321.jpg\";\n\n//# sourceURL=webpack://odin-restaurant/./src/assets/images/fancy-restaurant.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;