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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoController\", function() { return toDoController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createLayout\", function() { return createLayout; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectController\", function() { return projectController; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"toDoForm\", function() { return toDoForm; });\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\nconst createLayout = () => {\n  const mainContainer = document.querySelector('#content')\n  const toDoList = document.createElement('div')\n  toDoList.classList.add('list')\n\n  const toDoButton = document.createElement('button')\n  toDoButton.id = 'add-item'\n  toDoButton.textContent = 'Add Item'\n\n  const projectMenu = document.createElement('div')\n  projectMenu.id = 'project-menu'\n  const pMenuTitle = document.createElement('h2')\n  pMenuTitle.textContent = 'Projects:'\n  const projectButton = document.createElement('button')\n  projectButton.textContent = 'New Project'\n  projectButton.id = 'create-project'\n\n  projectMenu.append(pMenuTitle)\n  projectMenu.append(projectButton)\n  mainContainer.append(projectMenu)\n  mainContainer.append(toDoButton)\n  mainContainer.append(toDoList)\n}\n\nconst toDoController = {\n  mainContainer: document.querySelector('#content'),\n  toDoList: null,\n\n  defineList: function () {\n    this.toDoList = document.querySelector('.list')\n  },\n\n  addToDo: function (project = null, name = 'Default Name', due = '2019-09-09', priority = '5', description = 'Default Description', completed = false) {\n    let activeFolderName\n    let activeFolder\n    if (project === null) {\n      activeFolder = (() => document.querySelector('.folder[data-folder-active]'))()\n      activeFolderName = (() => activeFolder.attributes['data-project-name'].value)()\n    } else if (project !== null) {\n      activeFolder = document.querySelector(`.folder[data-project-name=${project}]`)\n      if (activeFolder === null) {\n        console.log('no active folder')\n      } else {\n        activeFolderName = project\n        activeFolder.click()\n      }\n    }\n\n    const toDoContainer = document.createElement('div')\n    toDoContainer.classList.add('list-item', 'to-do')\n    toDoContainer.setAttribute('data-parent-project', activeFolderName)\n    toDoContainer.setAttribute('data-type-name', name)\n    toDoContainer.setAttribute('data-type-due-date', due)\n    toDoContainer.setAttribute('data-type-priority', priority)\n    toDoContainer.setAttribute('data-type-description', description)\n    toDoContainer.setAttribute('data-type-completed', completed)\n\n    const toDoDeleter = document.createElement('button')\n    toDoDeleter.classList.add('remove')\n    toDoDeleter.textContent = 'X'\n\n    const toDoEditor = document.createElement('button')\n    toDoEditor.classList.add('edit')\n    toDoEditor.textContent = 'Edit'\n\n    const toDoControls = document.createElement('div')\n    toDoControls.class = 'item-controls'\n    toDoControls.append(toDoDeleter, toDoEditor)\n    toDoContainer.append(toDoControls)\n    // Editable properties\n    const toDoName = document.createElement('h2')\n    toDoName.textContent = name\n    toDoName.setAttribute('data-type', 'name')\n\n    const toDoDueDate = document.createElement('h3')\n    toDoDueDate.textContent = due\n    toDoDueDate.setAttribute('data-type', 'due-date')\n\n    const toDoPriority = document.createElement('p')\n    toDoPriority.textContent = priority\n    toDoPriority.setAttribute('data-type', 'priority')\n\n    const toDoDescription = document.createElement('p')\n    const descriptionExpander = document.createElement('button')\n    descriptionExpander.classList.add('description-expander')\n    descriptionExpander.textContent = 'Show/Hide Description'\n    toDoDescription.textContent = description\n    toDoDescription.setAttribute('data-type', 'description')\n\n    const toDoCheckbox = document.createElement('input')\n    toDoCheckbox.setAttribute('type', 'checkbox')\n    toDoCheckbox.classList.add('complete-checkbox')\n\n    this.toDoList.append(toDoContainer)\n    toDoContainer.append(toDoCheckbox, toDoName, toDoDueDate, toDoPriority, descriptionExpander, toDoDescription)\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storageControl\"].items.setAllItems()\n\n    return toDoContainer\n  },\n\n  remove: function (toDo) {\n    toDo.parentNode.removeChild(toDo)\n  },\n\n  markComplete: function (toDo) {\n    toDo.classList.toggle('complete')\n    if (toDo.classList.contains('complete')) {\n      toDo.setAttribute('data-type-completed', true)\n    } else {\n      toDo.setAttribute('data-type-completed', false)\n    }\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storageControl\"].items.setAllItems()\n  }\n}\n\nconst projectController = {\n  projectMenu: null,\n  updateProjMenu: function () {\n    this.projectMenu = document.querySelector('#project-menu')\n  },\n\n  addProject: function (projectName) {\n    const oldActiveProject = document.querySelector('.folder[data-folder-active]')\n    if (document.querySelector('.folder[data-folder-active]')) {\n      (() => {\n        oldActiveProject.toggleAttribute('data-folder-active')\n      })()\n    }\n\n    const projectList = document.querySelectorAll('.folder')\n\n    if (!projectName) {\n      projectName = window.prompt('Project Name?')\n      if (projectName === null) {\n        throw new Error('prompt cancelled')\n      }\n    }\n\n    projectList.forEach(project => {\n      if (projectName === project.attributes['data-project-name'].value) {\n        oldActiveProject.click()\n        window.alert('Name in use. Please select another')\n        throw new Error('Name in use')\n      }\n    })\n    const projectContainer = document.createElement('div')\n    const project = document.createElement('button')\n    const projectDelete = document.createElement('button')\n\n    projectDelete.classList.add('folder-delete')\n    projectContainer.append(project)\n    projectContainer.append(projectDelete)\n\n    project.classList.add('folder')\n    project.textContent = projectName\n\n    project.setAttribute('data-project-name', `${project.textContent}`)\n    project.toggleAttribute('data-folder-active')\n    project.addEventListener('click', (e) => {\n      this.hideInactiveToDos(e.target.textContent)\n    })\n    this.projectMenu.append(projectContainer)\n    _storage_js__WEBPACK_IMPORTED_MODULE_0__[\"storageControl\"].projects.setAllProj()\n    return project\n  },\n\n  hideInactiveToDos: function (activeFolderName) {\n    const allToDos = Array.from(document.querySelectorAll('.list-item'))\n    allToDos.forEach(toDo => {\n      if (toDo.attributes['data-parent-project'].value !== activeFolderName && toDo.hasAttribute('data-item-hidden') === false) {\n        toDo.toggleAttribute('data-item-hidden')\n      } else if (toDo.attributes['data-parent-project'].value === activeFolderName && toDo.attributes['data-item-hidden']) {\n        toDo.toggleAttribute('data-item-hidden')\n      }\n    })\n  }\n}\n\nconst toDoForm = {\n  mainContainer: document.querySelector('#content'),\n\n  display: function (event) {\n    const toDo = event.target.parentNode.parentNode\n    if (!document.querySelector('#item-form')) {\n      const form = document.createElement('form')\n      form.id = 'item-form'\n\n      const oldName = toDo.querySelector('h2[data-type=name]')\n      const oldPriority = toDo.querySelector('p[data-type=priority]')\n      const oldDue = toDo.querySelector('h3')\n      const oldDescription = toDo.querySelector('p[data-type=description]')\n\n      const nameLabel = document.createElement('label')\n      nameLabel.setAttribute('for', 'name')\n      nameLabel.textContent = 'Name:'\n      const nameInput = document.createElement('input')\n      nameInput.setAttribute('type', 'text')\n      nameInput.id = 'name'\n      nameInput.value = `${oldName.textContent}`\n      nameInput.setAttribute('data-type-name', nameInput.value)\n\n      const priorityLabel = document.createElement('label')\n      priorityLabel.setAttribute('for', 'priority')\n      priorityLabel.textContent = 'Priority Level:'\n      const priorityInput = document.createElement('input')\n      priorityInput.id = 'priority'\n      priorityInput.setAttribute('type', 'number')\n      priorityInput.value = `${oldPriority.textContent}`\n      priorityInput.setAttribute('data-type-priority', priorityInput.value)\n\n      const dueLabel = document.createElement('label')\n      dueLabel.setAttribute('for', 'due')\n      dueLabel.textContent = 'Due Date:'\n      const dueInput = document.createElement('input')\n      dueInput.id = 'due'\n      dueInput.setAttribute('type', 'date')\n      dueInput.value = `${oldDue.textContent}`\n      dueInput.setAttribute('data-type-due-date', dueInput.value)\n\n      const descriptionLabel = document.createElement('label')\n      descriptionLabel.setAttribute('for', 'description')\n      descriptionLabel.textContent = 'Description:'\n      const descriptionInput = document.createElement('textarea')\n      descriptionInput.id = 'description'\n      descriptionInput.textContent = `${oldDescription.textContent}`\n      descriptionInput.setAttribute('data-type-description', descriptionInput.value)\n\n      const formConfirm = document.createElement('button')\n      formConfirm.setAttribute('type', 'button')\n      formConfirm.textContent = 'Confirm'\n      formConfirm.id = 'confirm'\n\n      form.append(nameLabel, nameInput, dueLabel, dueInput, priorityLabel, priorityInput, descriptionLabel, descriptionInput, formConfirm)\n\n      this.mainContainer.append(form)\n    }\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/dom-manip.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _listener_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener-control.js */ \"./src/listener-control.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\n\nObject(_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"createLayout\"])()\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].defineList()\n\n_dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].updateProjMenu()\nif (window.localStorage.allProjects) {\n  _storage_js__WEBPACK_IMPORTED_MODULE_2__[\"storageControl\"].projects.summonStored()\n  _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].updateProjectList()\n  _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].projectDeletion()\n  _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].projectSelection()\n  if (window.localStorage.allItems) {\n    _storage_js__WEBPACK_IMPORTED_MODULE_2__[\"storageControl\"].items.summonStored()\n  }\n} else {\n  _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject('Default')\n  _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].updateProjectList()\n  _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].projectDeletion()\n  _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].projectSelection()\n}\n\n_listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].setAll()\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/listener-control.js":
/*!*********************************!*\
  !*** ./src/listener-control.js ***!
  \*********************************/
/*! exports provided: setListeners */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setListeners\", function() { return setListeners; });\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _storage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./storage.js */ \"./src/storage.js\");\n\n\n\nconst setListeners = {\n  toDoDeletion: function () {\n    const toDoDeleters = Array.from(document.querySelectorAll('.remove'))\n    toDoDeleters.forEach(remover => {\n      remover.addEventListener('click', () => {\n        const toDoControls = remover.parentNode\n        const toDo = toDoControls.parentNode\n        _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].remove(toDo)\n        _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"storageControl\"].items.setAllItems()\n      })\n    })\n  },\n\n  toDoCompletion: function () {\n    const toDoArray = Array.from(document.querySelectorAll('.list-item'))\n    toDoArray.forEach(toDo => {\n      const toDoCheckbox = toDo.querySelector('.complete-checkbox')\n      toDoCheckbox.addEventListener('click', () => {\n        _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].markComplete(toDo)\n      })\n    })\n  },\n\n  toDoCreation: function () {\n    const toDoCreator = document.querySelector('#add-item')\n    toDoCreator.addEventListener('click', () => {\n      const newToDo = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].addToDo()\n      const newCompleter = newToDo.querySelector('.complete-checkbox')\n      newCompleter.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].markComplete(newToDo))\n\n      const newDeleter = newToDo.querySelector('.remove')\n      newDeleter.addEventListener('click', () => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].remove(newToDo))\n      this.toDoDescriptionExpansion(newToDo)\n      _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"storageControl\"].items.setAllItems()\n\n      const newEditor = newToDo.querySelector('.edit')\n      newEditor.addEventListener('click', (e) => {\n        _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoForm\"].display(e)\n        this.editItem(e)\n      })\n    })\n  },\n\n  toDoDescriptionExpansion: function (toDo) {\n    const expansionButton = toDo.querySelector('.description-expander')\n    const description = toDo.querySelector('[data-type=description]')\n    expansionButton.addEventListener('click', () => {\n      description.classList.toggle('active-description')\n    })\n  },\n\n  loadToDoListeners: function (toDo) {\n    const newEditButton = (toDo.querySelector('.edit'))\n    newEditButton.addEventListener('click', (e) => {\n      _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoForm\"].display(e)\n      this.editItem(e)\n    })\n    const newExpansionButton = toDo.querySelector('.description-expander')\n    const description = toDo.querySelector('[data-type=description]')\n    newExpansionButton.addEventListener('click', () => {\n      description.classList.toggle('active-description')\n    })\n\n    const checkbox = toDo.querySelector('.complete-checkbox')\n    if (toDo.attributes['data-type-completed'].value === 'true') {\n      toDo.classList.add('complete')\n      checkbox.checked = true\n    }\n  },\n\n  projectList: document.querySelectorAll('button.folder'),\n\n  updateProjectList: function () {\n    this.projectList = document.querySelectorAll('button.folder')\n  },\n\n  projectCreation: function () {\n    const createProjectButton = document.querySelector('#create-project')\n    createProjectButton.addEventListener('click', () => {\n      const project = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject()\n      this.updateProjectList()\n      this.projectDeletion()\n      this.projectSelection()\n      project.click()\n    })\n  },\n\n  projectSelection: function () {\n    this.projectList.forEach(project => {\n      if (project.hasAttribute('data-has-select-listener') !== true) {\n        project.addEventListener('click', () => {\n          this.projectDeactivation(this.projectList)\n          project.setAttribute('data-has-select-listener', true)\n          project.toggleAttribute('data-folder-active')\n        })\n      }\n    })\n  },\n\n  projectDeactivation: function (listOfProjects) {\n    listOfProjects.forEach(project => {\n      if (project.hasAttribute('data-folder-active')) {\n        project.toggleAttribute('data-folder-active')\n      }\n    })\n  },\n\n  projectDeletion: function () {\n    this.projectList.forEach(project => {\n      const projectContainer = project.parentNode\n      const projectDataName = project.attributes['data-project-name'].value\n      const projectDeleter = projectContainer.querySelector('.folder-delete')\n      if (!projectDeleter.hasAttribute('data-has-delete-listener')) {\n        projectDeleter.toggleAttribute('data-has-delete-listener')\n        projectDeleter.addEventListener('click', () => {\n          projectContainer.parentNode.removeChild(projectContainer)\n          const projectChildren = document.querySelectorAll(`div[data-parent-project=${projectDataName}`)\n          projectChildren.forEach(toDoChild => {\n            const toDoRemove = toDoChild.querySelector('.remove')\n            toDoRemove.click()\n          })\n          _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"storageControl\"].projects.setAllProj()\n          _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"storageControl\"].items.setAllItems()\n        })\n      }\n    })\n  },\n\n  editItem: function (e) {\n    const itemControls = e.target.parentNode\n    const formTarget = itemControls.parentNode\n    const formConfirm = document.querySelector('#confirm')\n    const form = formConfirm.parentNode\n\n    const userInputs = Array.from(form.querySelectorAll('input'))\n    userInputs.push(form.querySelector('#description'))\n\n    formConfirm.addEventListener('click', () => {\n      const userData = userInputs.map((input) => (input.value))\n      const dataDisplays = formTarget.querySelectorAll('[data-type]')\n      for (let i = 0; i < dataDisplays.length; i++) {\n        dataDisplays[i].textContent = userData[i]\n      }\n      form.parentNode.removeChild(form)\n\n      formTarget.setAttribute('data-type-name', userInputs[0].value)\n      formTarget.setAttribute('data-type-due-date', userInputs[1].value)\n      formTarget.setAttribute('data-type-priority', userInputs[2].value)\n      formTarget.setAttribute('data-type-description', userInputs[3].value)\n      _storage_js__WEBPACK_IMPORTED_MODULE_1__[\"storageControl\"].items.setAllItems()\n    })\n  },\n\n  setAll: function () {\n    this.toDoCreation()\n    this.toDoDeletion()\n    this.toDoCompletion()\n    this.projectCreation()\n  }\n}\n\n\n\n\n//# sourceURL=webpack:///./src/listener-control.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/*! exports provided: storageControl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"storageControl\", function() { return storageControl; });\n/* harmony import */ var _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom-manip.js */ \"./src/dom-manip.js\");\n/* harmony import */ var _listener_control_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listener-control.js */ \"./src/listener-control.js\");\n\n\n\nconst storageControl = {\n    projectList: document.querySelectorAll('.folder'),\n    itemList: document.querySelectorAll('.list-item'),\n\n    projects: {\n        setAllProj: function () {\n            this.projectList = Array.from(document.querySelectorAll('.folder'));\n            this.projectList = this.projectList.map(item => item.attributes['data-project-name'].value);\n            localStorage.setItem('allProjects', `${JSON.stringify(this.projectList)}`);\n        },\n\n        getAllProj: function () {\n            return JSON.parse(localStorage.getItem('allProjects'));\n        },\n\n        summonStored: function () {\n            let projectNames = this.getAllProj();\n            projectNames.forEach(name => _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"projectController\"].addProject(name));\n        },\n    },\n\n    items: {\n        setAllItems: function () {\n            this.itemList = Array.from(document.querySelectorAll('.list-item'));\n            let itemValuesMapped = this.itemList.map(item => [item.attributes['data-parent-project'].value, item.attributes['data-type-name'].value,\n                                                            item.attributes['data-type-due-date'].value, item.attributes['data-type-priority'].value,\n                                                            item.attributes['data-type-description'].value, item.attributes['data-type-completed'].value]);\n            localStorage.setItem('allItems', JSON.stringify(itemValuesMapped));\n        },\n\n        getAllItems: function () {\n            return JSON.parse(localStorage.getItem('allItems'));\n        },\n\n        summonStored: function () {\n            let itemArrays = this.getAllItems();\n            itemArrays.forEach(array => {\n                let newToDo = _dom_manip_js__WEBPACK_IMPORTED_MODULE_0__[\"toDoController\"].addToDo(...array);\n                _listener_control_js__WEBPACK_IMPORTED_MODULE_1__[\"setListeners\"].loadToDoListeners(newToDo);\n            });\n        }\n    },\n};\n\n\n\n//# sourceURL=webpack:///./src/storage.js?");

/***/ })

/******/ });