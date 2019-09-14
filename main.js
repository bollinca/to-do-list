/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/dom-manip.js":
/*!**************************!*\
  !*** ./src/dom-manip.js ***!
  \**************************/
/*! exports provided: itemManipulation, createLayout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemManipulation\", function() { return itemManipulation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLayout\", function() { return createLayout; });\nconst createLayout = () => {\n    const contentContainer = document.querySelector('#content');\n    const selectionGrid = document.createElement('div');\n    selectionGrid.classList.add('grid');\n    const addItem = document.createElement('button');\n    addItem.id = 'add-item';\n    addItem.textContent = 'Add Item';\n\n    contentContainer.append(addItem);\n    contentContainer.append(selectionGrid);\n};\n\nconst itemManipulation = {\n    contentContainer: document.querySelector('#content'),\n    selectionGrid: null,\n\n    updateProperties: function() {\n        this.selectionGrid = document.querySelector('.grid');\n    },\n\n    addItem: function() {\n        let gridItem = document.createElement('div');\n        gridItem.classList.add('grid-item', 'to-do');\n        let removeButton = document.createElement('button');\n        removeButton.classList.add('remove');\n        removeButton.textContent = 'X';\n        gridItem.append(removeButton);\n\n        this.selectionGrid.append(gridItem);\n        return gridItem;\n    },\n\n    removeItem: function(target) {\n        target.parentNode.removeChild(target);\n    },\n\n    markComplete: function(target) {\n        target.classList.toggle('complete');\n    },\n\n//     setPriority\n    \n//     setDescription\n    \n//     setDueDate\n\n};\n\n\n\n//# sourceURL=webpack:///./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n\n\nObject(_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"createLayout\"])();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].updateProperties();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n\nlet testTime = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\nlet addItem = document.querySelector('#add-item');\nlet removeButtons = Array.from(document.querySelectorAll('.remove'));\nremoveButtons.forEach(button => {\n    button.addEventListener('click', (e) => {\n        let target = e.target.parentNode;\n        _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].removeItem(target);\n    })\n});\nlet gridItems = Array.from(document.querySelectorAll('.grid-item'));\ngridItems.forEach(item => {\n    item.addEventListener('click', (e) => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].markComplete(e.target));\n});\n\naddItem.addEventListener('click', () => {\n    let currentItem = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n    currentItem.addEventListener('click', (e) => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].markComplete(e.target));\n    let itemRemover = currentItem.querySelector('.remove');\n    itemRemover.addEventListener('click', (e) => {\n        let target = e.target.parentNode;\n        _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].removeItem(target);\n    });\n});\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });