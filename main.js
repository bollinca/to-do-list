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
/*! exports provided: itemManipulation, createLayout, folderManipulation, editItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemManipulation\", function() { return itemManipulation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLayout\", function() { return createLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"folderManipulation\", function() { return folderManipulation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"editItem\", function() { return editItem; });\nconst createLayout = () => {\n    const contentContainer = document.querySelector('#content');\n    const selectionGrid = document.createElement('div');\n    selectionGrid.classList.add('grid');\n\n    const addItem = document.createElement('button');\n    addItem.id = 'add-item';\n    addItem.textContent = 'Add Item';\n\n    const projectMenu = document.createElement('div');\n    projectMenu.id = 'project-menu';\n    projectMenu.textContent = 'Projects:'\n\n    contentContainer.append(projectMenu);\n    contentContainer.append(addItem);\n    contentContainer.append(selectionGrid);\n};\n\nconst itemManipulation = {\n    contentContainer: document.querySelector('#content'),\n    selectionGrid: null,\n\n    updateProperties: function () {\n        this.selectionGrid = document.querySelector('.grid');\n    },\n\n    addItem: function () {\n        let gridItem = document.createElement('div');\n        gridItem.classList.add('grid-item', 'to-do');\n\n        let removeButton = document.createElement('button');\n        removeButton.classList.add('remove');\n        removeButton.textContent = 'X';\n        gridItem.append(removeButton);\n\n        let itemName = document.createElement('h2');\n        itemName.textContent = 'Hey dude';\n        itemName.setAttribute('data-type', 'name');\n\n        let itemDue = document.createElement('h3');\n        itemDue.textContent = '9/9/19';\n        itemDue.setAttribute('data-type', 'due-date');\n\n        let itemPriority = document.createElement('p');\n        itemPriority.textContent = '5';\n        itemPriority.setAttribute('data-type', 'priority');\n\n        let itemDescription = document.createElement('p');\n        itemDescription.textContent = 'Test desctiption';\n        itemDescription.setAttribute('data-type', 'description');\n\n        this.selectionGrid.append(gridItem);\n        gridItem.append(itemName);\n        gridItem.append(itemDescription);\n        gridItem.append(itemDue);\n        gridItem.append(itemPriority);\n        return gridItem;\n    },\n\n    removeItem: function (target) {\n        target.parentNode.removeChild(target);\n    },\n\n    markComplete: function (target) {\n        target.classList.toggle('complete');\n    },\n\n    setData: function (target, dataType) {\n        let currentData = target.querySelector(`[data-type=${dataType}]`);\n        console.log(currentData.textContent);\n    },\n\n    //     setDescription\n\n};\n\nconst folderManipulation = {\n    container: null,\n    updateContainer: function () {\n        this.container = document.querySelector('#project-menu')\n    },\n\n    // addFolder: function() {\n    // \n    // },\n    // \n    // removeFolder: function() {\n    // \n    // }\n}\n\nconst editItem = {\n    contentContainer: document.querySelector('#content'),\n\n    createForm: function () {\n        let itemForm = document.createElement('form');\n        itemForm.id = 'item-form';\n        console.log(itemForm);\n        this.contentContainer.append(itemForm);\n    },\n};\n\n\n\n//# sourceURL=webpack:///./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _listener_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener-control.js */ \"./src/listener-control.js\");\n\n\n\nObject(_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"createLayout\"])();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].updateProperties();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\nlet test = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n\nlet removeButtons = Array.from(document.querySelectorAll('.remove'));\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].removeItem(removeButtons);\n\nlet gridItems = Array.from(document.querySelectorAll('.grid-item'));\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].markComplete(gridItems);\n\nlet addItem = document.querySelector('#add-item');\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].addNew(addItem);\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"folderManipulation\"].updateContainer();\n\n///testing\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].setData(test, 'name');\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].setData(test, 'description');\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].setData(test, 'due-date');\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].setData(test, 'priority');\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"editItem\"].createForm();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listener-control.js":
/*!*********************************!*\
  !*** ./src/listener-control.js ***!
  \*********************************/
/*! exports provided: setListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListeners\", function() { return setListeners; });\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n// let addItem = document.querySelector('#add-item');\n\n\n\nconst setListeners = {\n    removeItem: function (targets) {\n        targets.forEach(target => {\n            target.addEventListener('click', () => {\n                let gridItemToRemove = target.parentNode;\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].removeItem(gridItemToRemove);\n            });\n        });\n    },\n\n    markComplete: function (targets) {\n        targets.forEach(target => {\n            target.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].markComplete(target));\n        });\n    },\n\n    addNew: function (target) {\n        target.addEventListener('click', () => {\n            let newItem = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].addItem();\n            newItem.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].markComplete(newItem));\n            let newRemoveButton = newItem.querySelector('.remove');\n            newRemoveButton.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemManipulation\"].removeItem(newRemoveButton.parentNode));\n        });\n    }\n};\n\n\n\n//# sourceURL=webpack:///./src/listener-control.js?");

/***/ })

/******/ });