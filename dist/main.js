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
/*! exports provided: toDoController, createLayout, projectController, itemForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoController\", function() { return toDoController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLayout\", function() { return createLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectController\", function() { return projectController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"itemForm\", function() { return itemForm; });\nconst createLayout = () => {\n    const mainContainer = document.querySelector('#content');\n    const toDoGrid = document.createElement('div');\n    toDoGrid.classList.add('grid');\n\n    const toDoButton = document.createElement('button');\n    toDoButton.id = 'add-item';\n    toDoButton.textContent = 'Add Item';\n\n    const projectMenu = document.createElement('div');\n    projectMenu.id = 'project-menu';\n    const pMenuTitle = document.createElement('h2');\n    pMenuTitle.textContent = 'Projects:';\n    const projectButton = document.createElement('button');\n    projectButton.textContent = 'New Project';\n    projectButton.id = 'create-project';\n\n    projectMenu.append(pMenuTitle);\n    projectMenu.append(projectButton);\n    mainContainer.append(projectMenu);\n    mainContainer.append(toDoButton);\n    mainContainer.append(toDoGrid);\n};\n\nconst toDoController = {\n    mainContainer: document.querySelector('#content'),\n    toDoGrid: null,\n\n    defineGrid: function () {\n        this.toDoGrid = document.querySelector('.grid');\n    },\n\n    addToDo: function () {\n        let activeFolder = (() => document.querySelector('.folder[data-folder-active]'))();\n        let activeFolderName = (() => activeFolder.attributes['data-project-name'].value)();\n\n        let toDoContainer = document.createElement('div');\n        toDoContainer.classList.add('grid-item', 'to-do');\n        toDoContainer.setAttribute('data-parent-project', `${activeFolderName}`)\n\n        let toDoDelete = document.createElement('button');\n        toDoDelete.classList.add('remove');\n        toDoDelete.textContent = 'X';\n\n        let toDoEdit = document.createElement('button');\n        toDoEdit.classList.add('edit');\n        toDoEdit.textContent = 'Edit';\n\n        let toDoControls = document.createElement('div');\n        toDoControls.class = 'item-controls';\n        toDoControls.append(toDoDelete, toDoEdit);\n        toDoContainer.append(toDoControls);\n\n        let toDoName = document.createElement('h2');\n        toDoName.textContent = 'Default Title';\n        toDoName.setAttribute('data-type', 'name');\n\n        let toDoDueDate = document.createElement('h3');\n        toDoDueDate.textContent = '9/9/2019';\n        toDoDueDate.setAttribute('data-type', 'due-date');\n\n        let toDoPriority = document.createElement('p');\n        toDoPriority.textContent = '5';\n        toDoPriority.setAttribute('data-type', 'priority');\n\n        let toDoDescription = document.createElement('p');\n        toDoDescription.textContent = 'Test description';\n        toDoDescription.setAttribute('data-type', 'description');\n\n        let toDoCheckbox = document.createElement('input');\n        toDoCheckbox.setAttribute('type', 'checkbox');\n        toDoCheckbox.classList.add('complete-checkbox');\n\n        this.toDoGrid.append(toDoContainer);\n        toDoContainer.append(toDoName, toDoDueDate, toDoPriority, toDoDescription, toDoCheckbox);\n        return toDoContainer;\n    },\n\n    remove: function (toDo) {\n        toDo.parentNode.removeChild(toDo);\n    },\n\n    markComplete: function (toDo) {\n        toDo.classList.toggle('complete');\n    },\n};\n\nconst projectController = {\n    projectMenu: null,\n    updateProjMenu: function () {\n        this.projectMenu = document.querySelector('#project-menu')\n    },\n\n    addProject: function () {\n        if (document.querySelector('.folder[data-folder-active]')) {\n            (() => {\n                let oldActiveProject = document.querySelector('.folder[data-folder-active]');\n                oldActiveProject.toggleAttribute('data-folder-active');\n            })();\n        };\n\n        let project = document.createElement('button');\n        project.classList.add('folder');\n        project.textContent = prompt('Project Name?');\n        project.setAttribute('data-project-name', `${project.textContent}`);\n        project.toggleAttribute('data-folder-active');\n        project.addEventListener('click', (e) => {\n            this.hideInactiveToDos(e.target.textContent);\n        });\n        this.projectMenu.append(project);\n    },\n\n    hideInactiveToDos: function (activeFolderName) {\n        let allToDos = Array.from(document.querySelectorAll(`.grid-item`));\n        allToDos.forEach(toDo => {\n            if (toDo.attributes['data-parent-project'].value !== activeFolderName && toDo.hasAttribute('data-item-hidden') === false) {\n                toDo.toggleAttribute('data-item-hidden');\n            } else if (toDo.attributes['data-parent-project'].value === activeFolderName && toDo.attributes['data-item-hidden']) {\n                toDo.toggleAttribute('data-item-hidden');\n            }\n        });\n    },\n    // \n    // removeFolder: function() {\n    // \n    // }\n}\n\nconst itemForm = {\n    contentContainer: document.querySelector('#content'),\n\n    createForm: function () {\n        let form = document.createElement('form');\n        form.id = 'item-form';\n\n        let nameLabel = document.createElement('label');\n        nameLabel.setAttribute('for', 'name');\n        nameLabel.textContent = 'Name:'\n        let nameInput = document.createElement('input');\n        nameInput.setAttribute('type', 'text');\n        nameInput.id = 'name';\n\n        let priorityLabel = document.createElement('label');\n        priorityLabel.setAttribute('for', 'priority');\n        priorityLabel.textContent = 'Priority Level:';\n        let priorityInput = document.createElement('input');\n        priorityInput.id = 'priority';\n        priorityInput.setAttribute('type', 'number');\n\n        let dueLabel = document.createElement('label');\n        dueLabel.setAttribute('for', 'due');\n        dueLabel.textContent = 'Due Date:';\n        let dueInput = document.createElement('input');\n        dueInput.id = 'due';\n        dueInput.setAttribute('type', 'date');\n\n        let descriptionLabel = document.createElement('label');\n        descriptionLabel.setAttribute('for', 'description');\n        descriptionLabel.textContent = 'Description:';\n        let descriptionInput = document.createElement('textarea');\n        descriptionInput.id = 'description';\n\n        let confirmButton = document.createElement('button');\n        confirmButton.setAttribute('type', 'button');\n        confirmButton.textContent = 'Confirm';\n        confirmButton.id = 'confirm';\n\n        form.append(nameLabel, nameInput, dueLabel, dueInput, priorityLabel, priorityInput, descriptionLabel, descriptionInput, confirmButton);\n\n        this.contentContainer.append(form);\n    },\n};\n\n\n\n//# sourceURL=webpack:///./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _listener_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener-control.js */ \"./src/listener-control.js\");\n\n\n\nObject(_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"createLayout\"])();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].defineGrid();\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].updateProjMenu();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject();\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].addToDo();\n\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].removeItem();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].callForm();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].markComplete();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].addNew();\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].updateProjMenu();\n\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].addProject();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listener-control.js":
/*!*********************************!*\
  !*** ./src/listener-control.js ***!
  \*********************************/
/*! exports provided: setListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListeners\", function() { return setListeners; });\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n\n\nconst setListeners = {\n    removeItem: function () {\n        let removeButtons = Array.from(document.querySelectorAll('.remove'));\n        removeButtons.forEach(button => {\n            button.addEventListener('click', () => {\n                let itemControls = button.parentNode;\n                let entireItem = itemControls.parentNode;\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].remove(entireItem);\n            });\n        });\n    },\n\n    markComplete: function () {\n        let gridItems = Array.from(document.querySelectorAll('.grid-item'));\n        gridItems.forEach(item => {\n            let completeCheckbox = item.querySelector('.complete-checkbox');\n            completeCheckbox.addEventListener('click', () => {\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].markComplete(item);\n            });\n        });\n    },\n\n    addNew: function (target) {\n        let addItem = document.querySelector('#add-item');\n        addItem.addEventListener('click', () => {\n            let newItem = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].addToDo();\n            let newCheckbox = newItem.querySelector('.complete-checkbox');\n            newCheckbox.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].markComplete(newItem));\n\n            let newRemoveButton = newItem.querySelector('.remove');\n            newRemoveButton.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].remove(newItem));\n\n            let newEditButton = newItem.querySelector('.edit');\n            newEditButton.addEventListener('click', (e) => {\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemForm\"].createForm()\n                this.editItem(e);\n            });\n        });\n    },\n\n    addProject: function () {\n        let createProjectButton = document.querySelector('#create-project');\n        createProjectButton.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject());\n    },\n\n    callForm: function () {\n        let editButtons = Array.from(document.querySelectorAll('.edit'));\n        editButtons.forEach(button => {\n            button.addEventListener('click', (e) => {\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"itemForm\"].createForm();\n                this.editItem(e);\n            });\n        });\n    },\n\n    editItem: function (e) {\n        let itemControls = e.target.parentNode;\n        let targetForEdit = itemControls.parentNode;\n        let confirm = document.querySelector('#confirm');\n        let form = confirm.parentNode;\n\n        let formArray = Array.from(form.querySelectorAll('input'));\n        formArray.push(form.querySelector('#description'));\n\n        confirm.addEventListener('click', () => {\n            let formValues = formArray.map((item) => (item.value));\n            let dataChunks = targetForEdit.querySelectorAll(`[data-type]`);\n            for (let i = 0; i < dataChunks.length; i++) {\n                dataChunks[i].textContent = formValues[i];\n            };\n            form.parentNode.removeChild(form);\n        });\n    },\n};\n\n\n\n//# sourceURL=webpack:///./src/listener-control.js?");

/***/ })

/******/ });