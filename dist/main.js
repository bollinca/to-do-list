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
/*! exports provided: toDoController, createLayout, projectController, toDoForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoController\", function() { return toDoController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLayout\", function() { return createLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectController\", function() { return projectController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoForm\", function() { return toDoForm; });\nconst createLayout = () => {\n    const mainContainer = document.querySelector('#content');\n    const toDoGrid = document.createElement('div');\n    toDoGrid.classList.add('grid');\n\n    const toDoButton = document.createElement('button');\n    toDoButton.id = 'add-item';\n    toDoButton.textContent = 'Add Item';\n\n    const projectMenu = document.createElement('div');\n    projectMenu.id = 'project-menu';\n    const pMenuTitle = document.createElement('h2');\n    pMenuTitle.textContent = 'Projects:';\n    const projectButton = document.createElement('button');\n    projectButton.textContent = 'New Project';\n    projectButton.id = 'create-project';\n\n    projectMenu.append(pMenuTitle);\n    projectMenu.append(projectButton);\n    mainContainer.append(projectMenu);\n    mainContainer.append(toDoButton);\n    mainContainer.append(toDoGrid);\n};\n\nconst toDoController = {\n    mainContainer: document.querySelector('#content'),\n    toDoGrid: null,\n\n    defineGrid: function () {\n        this.toDoGrid = document.querySelector('.grid');\n    },\n\n    addToDo: function () {\n        let activeFolder = (() => document.querySelector('.folder[data-folder-active]'))();\n        let activeFolderName = (() => activeFolder.attributes['data-project-name'].value)();\n\n        let toDoContainer = document.createElement('div');\n        toDoContainer.classList.add('grid-item', 'to-do');\n        toDoContainer.setAttribute('data-parent-project', `${activeFolderName}`)\n\n        let toDoDeleter = document.createElement('button');\n        toDoDeleter.classList.add('remove');\n        toDoDeleter.textContent = 'X';\n\n        let toDoEditor = document.createElement('button');\n        toDoEditor.classList.add('edit');\n        toDoEditor.textContent = 'Edit';\n\n        let toDoControls = document.createElement('div');\n        toDoControls.class = 'item-controls';\n        toDoControls.append(toDoDeleter, toDoEditor);\n        toDoContainer.append(toDoControls);\n\n        let toDoName = document.createElement('h2');\n        toDoName.textContent = 'Default Title';\n        toDoName.setAttribute('data-type', 'name');\n\n        let toDoDueDate = document.createElement('h3');\n        toDoDueDate.textContent = '9/9/2019';\n        toDoDueDate.setAttribute('data-type', 'due-date');\n\n        let toDoPriority = document.createElement('p');\n        toDoPriority.textContent = '5';\n        toDoPriority.setAttribute('data-type', 'priority');\n\n        let toDoDescription = document.createElement('p');\n        toDoDescription.textContent = 'Test description';\n        toDoDescription.setAttribute('data-type', 'description');\n\n        let toDoCheckbox = document.createElement('input');\n        toDoCheckbox.setAttribute('type', 'checkbox');\n        toDoCheckbox.classList.add('complete-checkbox');\n\n        this.toDoGrid.append(toDoContainer);\n        toDoContainer.append(toDoName, toDoDueDate, toDoPriority, toDoDescription, toDoCheckbox);\n        return toDoContainer;\n    },\n\n    remove: function (toDo) {\n        toDo.parentNode.removeChild(toDo);\n    },\n\n    markComplete: function (toDo) {\n        toDo.classList.toggle('complete');\n    },\n};\n\nconst projectController = {\n    projectMenu: null,\n    updateProjMenu: function () {\n        this.projectMenu = document.querySelector('#project-menu')\n    },\n\n    addProject: function () {\n        if (document.querySelector('.folder[data-folder-active]')) {\n            (() => {\n                let oldActiveProject = document.querySelector('.folder[data-folder-active]');\n                oldActiveProject.toggleAttribute('data-folder-active');\n            })();\n        };\n\n        let project = document.createElement('button');\n        project.classList.add('folder');\n        project.textContent = prompt('Project Name?');\n        project.setAttribute('data-project-name', `${project.textContent}`);\n        project.toggleAttribute('data-folder-active');\n        project.addEventListener('click', (e) => {\n            this.hideInactiveToDos(e.target.textContent);\n        });\n        this.projectMenu.append(project);\n    },\n\n    hideInactiveToDos: function (activeFolderName) {\n        let allToDos = Array.from(document.querySelectorAll(`.grid-item`));\n        allToDos.forEach(toDo => {\n            if (toDo.attributes['data-parent-project'].value !== activeFolderName && toDo.hasAttribute('data-item-hidden') === false) {\n                toDo.toggleAttribute('data-item-hidden');\n            } else if (toDo.attributes['data-parent-project'].value === activeFolderName && toDo.attributes['data-item-hidden']) {\n                toDo.toggleAttribute('data-item-hidden');\n            }\n        });\n    },\n    // \n    // removeFolder: function() {\n    // \n    // }\n}\n\nconst toDoForm = {\n    mainContainer: document.querySelector('#content'),\n\n    display: function () {\n        let form = document.createElement('form');\n        form.id = 'item-form';\n\n        let nameLabel = document.createElement('label');\n        nameLabel.setAttribute('for', 'name');\n        nameLabel.textContent = 'Name:'\n        let nameInput = document.createElement('input');\n        nameInput.setAttribute('type', 'text');\n        nameInput.id = 'name';\n\n        let priorityLabel = document.createElement('label');\n        priorityLabel.setAttribute('for', 'priority');\n        priorityLabel.textContent = 'Priority Level:';\n        let priorityInput = document.createElement('input');\n        priorityInput.id = 'priority';\n        priorityInput.setAttribute('type', 'number');\n\n        let dueLabel = document.createElement('label');\n        dueLabel.setAttribute('for', 'due');\n        dueLabel.textContent = 'Due Date:';\n        let dueInput = document.createElement('input');\n        dueInput.id = 'due';\n        dueInput.setAttribute('type', 'date');\n\n        let descriptionLabel = document.createElement('label');\n        descriptionLabel.setAttribute('for', 'description');\n        descriptionLabel.textContent = 'Description:';\n        let descriptionInput = document.createElement('textarea');\n        descriptionInput.id = 'description';\n\n        let formConfirm = document.createElement('button');\n        formConfirm.setAttribute('type', 'button');\n        formConfirm.textContent = 'Confirm';\n        formConfirm.id = 'confirm';\n\n        form.append(nameLabel, nameInput, dueLabel, dueInput, priorityLabel, priorityInput, descriptionLabel, descriptionInput, formConfirm);\n\n        this.mainContainer.append(form);\n    },\n};\n\n\n\n//# sourceURL=webpack:///./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _listener_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener-control.js */ \"./src/listener-control.js\");\n\n\n\nObject(_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"createLayout\"])();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].defineGrid();\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].updateProjMenu();\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject();\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].addToDo();\n\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].toDoCreation();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].toDoDeletion();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].toDoCompletion();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].formSummoning();\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].projectCreation();\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listener-control.js":
/*!*********************************!*\
  !*** ./src/listener-control.js ***!
  \*********************************/
/*! exports provided: setListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListeners\", function() { return setListeners; });\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n\n\nconst setListeners = {\n    toDoDeletion: function () {\n        let toDoDeleters = Array.from(document.querySelectorAll('.remove'));\n        toDoDeleters.forEach(remover => {\n            remover.addEventListener('click', () => {\n                let toDoControls = remover.parentNode;\n                let toDo = toDoControls.parentNode;\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].remove(toDo);\n            });\n        });\n    },\n\n    toDoCompletion: function () {\n        let toDoArray = Array.from(document.querySelectorAll('.grid-item'));\n        toDoArray.forEach(toDo => {\n            let toDoCheckbox = toDo.querySelector('.complete-checkbox');\n            toDoCheckbox.addEventListener('click', () => {\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].markComplete(toDo);\n            });\n        });\n    },\n\n    toDoCreation: function () {\n        let toDoCreator = document.querySelector('#add-item');\n        toDoCreator.addEventListener('click', () => {\n            let newToDo = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].addToDo();\n            let newCompleter = newToDo.querySelector('.complete-checkbox');\n            newCompleter.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].markComplete(newToDo));\n\n            let newDeleter = newToDo.querySelector('.remove');\n            newDeleter.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].remove(newToDo));\n\n            let newEditor = newToDo.querySelector('.edit');\n            newEditor.addEventListener('click', (e) => {\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoForm\"].display()\n                this.editItem(e);\n            });\n        });\n    },\n\n    projectList: document.querySelectorAll('button.folder'),\n\n    updateProjectList: function () {\n        this.projectList = document.querySelectorAll('button.folder');\n    },\n\n    projectCreation: function () {\n        let createProjectButton = document.querySelector('#create-project');\n        createProjectButton.addEventListener('click', () => {\n            _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject()\n            this.updateProjectList();\n            this.projectSelection();\n        });\n\n    },\n\n    projectSelection: function () {\n        this.projectList.forEach(project => {\n            if (project.hasAttribute('data-has-select-listener') !== true) {\n                project.addEventListener('click', () => {\n                    this.projectDeactivation(this.projectList);\n                    project.setAttribute('data-has-select-listener', true);\n                    project.toggleAttribute('data-folder-active');\n                });\n            }\n        });\n    },\n\n    projectDeactivation: function (listOfProjects) {\n        listOfProjects.forEach(project => {\n            if (project.hasAttribute('data-folder-active')) {\n                project.toggleAttribute('data-folder-active');\n            }\n        });\n    },\n\n    formSummoning: function () {\n        let toDoEditors = Array.from(document.querySelectorAll('.edit'));\n        toDoEditors.forEach(editor => {\n            editor.addEventListener('click', (e) => {\n                _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoForm\"].display();\n                this.editItem(e);\n            });\n        });\n    },\n\n    editItem: function (e) {\n        let itemControls = e.target.parentNode;\n        let formTarget = itemControls.parentNode;\n        let formConfirm = document.querySelector('#confirm');\n        let form = formConfirm.parentNode;\n\n        let userInputs = Array.from(form.querySelectorAll('input'));\n        userInputs.push(form.querySelector('#description'));\n\n        formConfirm.addEventListener('click', () => {\n            let userData = userInputs.map((input) => (input.value));\n            let dataDisplays = formTarget.querySelectorAll(`[data-type]`);\n            for (let i = 0; i < dataDisplays.length; i++) {\n                dataDisplays[i].textContent = userData[i];\n            };\n            form.parentNode.removeChild(form);\n        });\n    },\n};\n\n\n\n//# sourceURL=webpack:///./src/listener-control.js?");

/***/ })

/******/ });